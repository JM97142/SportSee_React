import { useEffect, useState } from "react";
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

import { getScore } from "../api/Api";

function UserScore(props) {
    const [userScore, setUserScore] = useState([])

    useEffect(() => {
        fetchScore()
    }, [])

    async function fetchScore() {
        const scoreData = await getScore(props.userId)
        setUserScore(scoreData)

        return (
            <RadialBarChart
                width={730}
                height={250}
                innerRadius="10%"
                outerRadius="80%"
                data={userScore}
                startAngle={180}
                endAngle={0}
            >
                <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='todayScore' />
                <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
            </RadialBarChart>
        )
    }
}

export default UserScore