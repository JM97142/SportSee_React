import './userScore.css'
import { useEffect, useState } from "react";
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
// API
import { getScore } from "../../api/Api";

import { LegendScore } from '../Tooltips/Tooltips';

function UserScore() {
    const [userScore, setUserScore] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
        fetchScore()
    }, [])

    async function fetchScore() {
        try {
            const scoreData = await getScore()
            setUserScore(scoreData)
        }
        catch {
            setError(true)
        }
    }

    if (error) {
        return ('Impossible de récupérer les données liées au score.')
    }

    return (
        <div className="score-graph">
            <h3>Score</h3>
            <ResponsiveContainer width='100%' height='100%'>
                <RadialBarChart
                    width='100%'
                    height='100%'
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
            </ResponsiveContainer>
        </div>
    )
}

export default UserScore