import React from 'react';

import { VictoryBar, VictoryChart } from 'victory';

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
            cluster: revealClusters ? cluster : `C${i + 1}`,
            score: clusterScores[cluster],
        }))
    }, [clusterScores, revealClusters]);

    return (
        <VictoryChart
            // domainPadding will add space to each side of VictoryBar to
            // prevent it from overlapping the axis
            domainPadding={20}
            height={height}
            width={width}
        >
            <VictoryBar
                animate={{
                    duration: 2000,
                    onLoad: { duration: 1000 }
                }}
                horizontal={matches}
                barWidth={({ index }) => index * 2 + 40}
                data={data}
                style={{
                    data: { 
                        fill: "#055094"
                    }
                }}
                x="cluster"
                y="score"
            />
        </VictoryChart>
    )
}

export default Charts;
