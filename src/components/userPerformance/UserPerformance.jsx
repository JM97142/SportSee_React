import { useEffect, useState } from "react"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, Legend } from 'recharts';

import { getPerformance } from "../api/Api"

import './userPerformance.css'

function UserPerformance() {
    const [userPerformance, setUserPerformance] = useState([])

    useEffect(() => {
        fetchAverageSession()
    }, [])

    async function fetchAverageSession() {
        const performanceData = await getPerformance()
        setUserPerformance(performanceData)
    }

    if (userPerformance.length === 0) return (<></>)
    return (
        <div className="performance-graph">
            <RadarChart
                outerRadius={90}
                width={258}
                height={263}
                data={userPerformance}
            >
                <PolarGrid />
                <PolarAngleAxis dataKey='kind' stroke='#FFFFFF' fontSize={14} tickLine={false} />
                <Radar dataKey='value' stroke='#E60000' fill='#E60000' fillOpacity={0.7} legendType='none' />
                <Legend />
            </RadarChart>
        </div>
    )
}

export default UserPerformance