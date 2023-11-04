import './userScore.css'
import { useEffect, useState } from "react";
import { RadialBarChart, RadialBar, Legend } from 'recharts';

import { getScore } from "../api/Api";

function UserScore() {
    const [userScore, setUserScore] = useState([])

    useEffect(() => {
        fetchScore()
    }, [])

    async function fetchScore() {
        const scoreData = await getScore()
        setUserScore(scoreData)

    }

    function LegendScore(payload) {
        return (
            <div className='legend-score'>
                <p className='legend-todayscore'>
                    {payload?.payload[0]?.payload.todayScore}%
                </p>
                <p className='legend-content'> de votre objectif</p>
            </div>
        )
    }

    return (
        <div className="score-graph">
            <h3>Score</h3>
            <RadialBarChart
                width={258}
                height={263}
                data={userScore}
                innerRadius={70}
                barSize={10}
                outerRadius={120}
                startAngle={90}
                endAngle={500}
                cx={107}
                cy={120}
            >
                <RadialBar cornerRadius='50%' fill='#E60000' dataKey='todayScore' />
                <Legend content={<LegendScore />} />
            </RadialBarChart>
        </div>
    )
}

export default UserScore