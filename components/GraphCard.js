import { useEffect, useState } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
function GraphCard(props) {
    const rawData = [
        {time: '6 AM', temperature: -1},
        {time: '7 AM', temperature: 0},
        {time: '8 AM', temperature: 1},
        {time: '9 AM', temperature: 2},
        {time: '10 AM', temperature: 3},
        {time: '11 AM', temperature: 4},
        {time: '12 PM', temperature: 5},
        {time: '1 PM', temperature: 6},
        {time: '2 PM', temperature: 6},
        {time: '3 PM', temperature: 5},
        {time: '4 PM', temperature: 4},
        {time: '5 PM', temperature: 3},
        {time: '6 PM', temperature: 2},
        {time: '7 PM', temperature: 1},
        {time: '8 PM', temperature: 0},
        {time: '9 PM', temperature: 0},
        {time: '10 PM', temperature: -1},
        {time: '11 PM', temperature: -2},
        {time: '12 AM', temperature: -2},
        {time: '1 AM', temperature: -3},
        {time: '2 AM', temperature: -4},
        {time: '3 AM', temperature: -3},
        {time: '4 AM', temperature: -2},
        {time: '5 AM', temperature: -1}
    ];
    const [chartWidth,setChartWidth]=useState(0);
    const [chartHeight,setChartHeight]=useState(0);
    const [graphData,setGraphData]=useState([]);
    useEffect(() => {
        setGraphData(rawData);
        setChartWidth(400);
        setChartHeight(200)
    }, [])
    return (<div className="w-full md:w-1/2 xl:w-1/3 p-6">
    <div className="bg-white border-transparent rounded-lg shadow-xl">
    <div className="bg-gradient-to-b from-gray-300 to-gray-100 titlecase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
    <h2 className="font-bold titlecase text-gray-600">Temperature Trend (&deg;C)</h2>
    </div>
    <LineChart width={chartWidth} height={chartHeight} data={graphData}>
    <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="time" />
    <YAxis />
    </LineChart>
    </div>
    </div>
    );
}
export default GraphCard