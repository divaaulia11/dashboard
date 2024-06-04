import React from 'react';
import {useEffect, useState} from 'react';
import {LineChart} from '@mui/x-charts/LineChart';

export default function GridDemo() {
    const initialValue = new Array(31);
    const [chartXAxis, setChartXAxis] = useState([initialValue]);
    const [chartSeries, setChartSeries] = useState([initialValue]);
    const [chartTitle, setChartTitle] = useState(null);

    useEffect(async () => {
        const getChartData = async () => {
            const data = await fetch("http://localhost:8080/api/dashboard/book-by-date");
            return data.json();
        }

        const chart = await getChartData();
        const chartDate = [chart.date.map(result => parseInt(result))];
        const chartData = [chart.value.map(result => parseInt(result))];


        setChartSeries(chartData);
        setChartXAxis(chartDate);
        setChartTitle(chart.label);
    }, []);

    return (
        <>
            <h1>{chartTitle}</h1>
            <LineChart
            xAxis={[{data: chartXAxis}]}
            series={[{data: chartSeries}]}
            height={300}
            margin={{left: 30, right: 30, top: 30, bottom: 30}}
            grid={{vertical: true, horizontal: true}}
        />
        </>
    );
}