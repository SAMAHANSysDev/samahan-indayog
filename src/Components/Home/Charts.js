import React from 'react';
// import Chart from 'react-apexcharts';
import {
    Chart,
    BarSeries,
    Title,
    ArgumentAxis,
    ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import firebase from '../../Utils/firebaseInstance';

const Charts = ({ height }) => {
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
            cluster: revealClusters ? cluster : `Cluster ${i + 1}`,
            score: clusterScores[cluster]
        }))
    }, [clusterScores, revealClusters]);

    /* return (
        <Chart
            options={{
                chart: {
                    id: revealClusters ? 'revealed-total-scores' : 'hidden-total-scores'
                },
                xaxis: {
                    categories: [
                        revealClusters ? "CS" : "Anonymous 1", 
                        revealClusters ? "BM" : "Anonymous 2", 
                        revealClusters ? "NSMxSOE" : "Anonymous 3", 
                        revealClusters ? "SS" : "Anonymous 4", 
                        revealClusters ? "HumLet" : "Anonymous 5", 
                        revealClusters ? "SEA" : "Anonymous 6", 
                        revealClusters ? "SON" : "Anonymous 7", 
                        revealClusters ? "ACC" : "Anonymous 8"
                    ]
                },
                plotOptions: {
                    bar: {
                        horizontal: matches,
                    }
                },
                // fill: {
                //     type: 'image',
                //     image: {
                //         src: '/public/assets/Avatars/Accountancy Avatar.png',
                //         // width: undefined,  // optional
                //         // height: undefined  //optional
                //     }
                // }
            }} 
            series={[{
                name: revealClusters ? 'Revealed Total Scores' : 'Hidden Total Scores',
                data: data,
                
                offset: 0,
                color: '#000000',
                opacity: 1,
            }]} 
            type="bar" 
            width='100%' 
            height='100%'
        />
    ) */
    return (
        <Chart
            rotated={matches}
            data={data}
            height={height}
            width="100%"
        >
            <ArgumentAxis />
            <ValueAxis max={8} />

            <BarSeries
                valueField="score"
                argumentField="cluster"
            />
            <Title text={revealClusters ? 'Revealed Total Scores' : 'Hidden Total Scores'} />
            <Animation />
        </Chart>
    )
}

export default Charts;
