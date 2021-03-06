import React from 'react';

import { BarChart, Bar, Cell, XAxis, YAxis, LabelList, Tooltip, ResponsiveContainer } from 'recharts';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import firebase from '../../Utils/firebaseInstance';

function ordinalSuffix(i) {
  var j = i % 10,
      k = i % 100;
  if (j === 1 && k !== 11) {
      return i + "st";
  }
  if (j === 2 && k !== 12) {
      return i + "nd";
  }
  if (j === 3 && k !== 13) {
      return i + "rd";
  }
  return i + "th";
}

const Charts = ({ height, width }) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const [revealClusters, setRevealClusters] = React.useState(false);
    const [clusterScores, setClusterScores] = React.useState({
        CS: 0,
        BM: 0,
        NSMxSOE: 0,
        SS: 0,
        HumLet: 0,
        SEA: 0,
        SON: 0,
        ACC: 0
    });

    React.useEffect(() => {
        const settingsRef = firebase.database().ref('settings/revealClusters');
        settingsRef.on('value', (snapshot) => {
            const reveal = snapshot.val();
            setRevealClusters(reveal);
        });
        
        const totalScoresRef = firebase.database().ref(`totalScores`);
        totalScoresRef.on('value', (snapshot) => {
            const scores = snapshot.val();
            setClusterScores({
                CS: scores.CS,
                BM: scores.BM,
                NSMxSOE: scores.NSMxSOE,
                SS: scores.SS,
                HumLet: scores.HumLet,
                SEA: scores.SEA,
                SON: scores.SON,
                ACC: scores.ACC
            });
        });

        return () => {
            settingsRef.off();
            totalScoresRef.off();
        }
    }, [])

    const data = React.useMemo(() => {
        return Object.keys(clusterScores).sort((a, b) => clusterScores[a] - clusterScores[b]).map((cluster, i) => ({
            name: revealClusters ? cluster : `${i + 1}`,
            score: clusterScores[cluster],
        }))
    }, [clusterScores, revealClusters]);

    const renderCustomizedLabel = (props) => {
        const { x, y, width, height, index } = props;
      
        return (
          <g>
            <text x={matches ? 40 : x + width - 30} y={matches ? y + height / 2 : y + height - 40} fill="#055094" stroke="#fff" strokeWidth="4" fontSize={matches ? height : width} textAnchor="middle" dominantBaseline="middle">
              {index + 1}
            </text>
          </g>
        );
    };

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
          return (
            <Paper style={{ padding: '2rem' }}>
              <Typography variant="h4" style={{ fontFamily: 'Montserrat', fontWeight: 800 }}>{!revealClusters ? `${ordinalSuffix(label + 1)} place` : `${payload[0]?.payload?.name} Cluster`}</Typography>
              <Typography variant="h5" style={{ fontFamily: 'Montserrat', fontWeight: 800 }}>{`Total Accumulated Rankings: ${payload[0].value}`}</Typography>
              <Typography variant="h6" style={{ fontFamily: 'Montserrat', fontStyle: 'italic' }}>Lower is better</Typography>
              {revealClusters ? null : (
                <Typography variant="h6" style={{ fontFamily: 'Montserrat' }}>The cluster names are currently hidden! ????</Typography>
              )}
            </Paper>
          );
        }
      
        return null;
      };

    return (
        <ResponsiveContainer width="99%" height="99%">
          <BarChart data={data} layout={matches ? "vertical" : "horizontal"}>
            <XAxis type={matches ? "number" : "category"} hide />
            <YAxis type={matches ? "category" : "number"} hide />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="score">
                <LabelList dataKey="name" content={renderCustomizedLabel} />
                {data.map((entry, index) => (
                    <Cell cursor="pointer" fill={'#055094'} key={`cell-${index}`} />
                ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
    )
}

export default Charts;
