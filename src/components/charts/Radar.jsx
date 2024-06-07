import { Legend, RadialBar, RadialBarChart, Tooltip } from "recharts";
import { CountUpStats } from "../CountUpStats";


const data = [
    {
        "name": "Time Delay",
        "uv": 31.47,
        "pv": 2400,
        "fill": "#8884d8"
    },
    {
        "name": "Time cost",
        "uv": 26.69,
        "pv": 4567,
        "fill": "#83a6ed"
    },
    {
        "name": "Time planning",
        "uv": -15.69,
        "pv": 1398,
        "fill": "#8dd1e1"
    },
    {
        "name": "Worker cost",
        "uv": 8.22,
        "pv": 9800,
        "fill": "#82ca9d"
    },
    {
        "name": "Time consumed",
        "uv": -8.63,
        "pv": 3908,
        "fill": "#a4de6c"
    },
]


const VerticalChart = () => {

    return (
        <>
            <main className="flex justify-center mt-10 mb-6">
                <RadialBarChart
                    width={730} 
                    height={250} 
                    innerRadius="10%" 
                    outerRadius="100%" 
                    data={data} 
                    startAngle={180} 
                    endAngle={0}
                >
                    <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='uv' />
                    <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
                    <Tooltip />
                </RadialBarChart>
            </main>

            <CountUpStats />
        </>

    );

};


export default VerticalChart;
