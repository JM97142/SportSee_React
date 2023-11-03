import { useEffect, useState } from "react";
import { RadialBarChart, RadialBar, Legend } from 'recharts';

import { getScore } from "../api/Api";

function UserScore() {
    const [userScore, setUserScore] = useState([])

    useEffect(() => {
        fetchScore()
    })

    async function fetchScore() {
        const scoreData = await getScore()
        setUserScore(scoreData)

        return (
            <div className="score-graph">
                <h3>Score</h3>
                <RadialBarChart startAngle={140} endAngle={500} cx='50%' cy='50%' innerRadius={70} barSize={10} outerRadius={120} data={userScore}>
                    <RadialBar cornerRadius='50%' dataKey='todayScore' fill='#E60000' />
                    <Legend />
                </RadialBarChart>
            </div>
        )
    }
}

export default UserScore