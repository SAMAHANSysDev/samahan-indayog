import React from 'react';
import Chart from 'react-apexcharts';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const Charts = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    const [data] = React.useState([30, 40, 35, 50, 49, 60, 70, 91, 125]);

    return (
        <Chart
            options={{
                chart: {
                    id: 'apexchart-example'
                },
                xaxis: {
                    categories: ["Acc", "BM", "CS", "HumLet", "NSM", "SEA", "SOE", "SON", "SS"]
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
                name: 'series-1',
                data: data,
                
                offset: 0,
                color: '#000000',
                opacity: 1,
            }]} 
            type="bar" 
            width='100%' 
            height='100%'
        />
    )
}

export default Charts;
