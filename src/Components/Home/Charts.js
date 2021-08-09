import React from 'react';

import { BarChart, Bar, Cell, XAxis, YAxis, LabelList, ResponsiveContainer } from 'recharts';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import firebase from '../../Utils/firebaseInstance';

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
        return Object.keys(clusterScores).map((cluster, i) => ({
            name: revealClusters ? cluster : `${i + 1}`,
            score: clusterScores[cluster],
        }))
    }, [clusterScores, revealClusters]);
    
    const renderCustomizedLabel = (props) => {
        const { x, y, width, height, value } = props;
      
        return (
          <g>
            <text x={matches ? 40 : x + width - 30} y={matches ? y + height / 2 : y + height - 40} fill="#055094" stroke="#fff" strokeWidth="4" fontSize={matches ? height : width} textAnchor="middle" dominantBaseline="middle">
              {value}
            </text>
          </g>
        );
    };
    return (
        <ResponsiveContainer width="99%" height="99%">
          <BarChart data={data} layout={matches ? "vertical" : "horizontal"}>
            <XAxis type={matches ? "number" : "category"} hide />
            <YAxis type={matches ? "category" : "number"} hide />
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
