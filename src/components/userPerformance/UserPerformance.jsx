import './userPerformance.css'
import { useEffect, useState } from "react"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, Legend, ResponsiveContainer } from 'recharts';

import { getPerformance } from "../api/Api"

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
            <ResponsiveContainer width='100%' height='100%'>
                <RadarChart
                    outerRadius={90}
                    width='50%'
                    height='50%'
                    data={userPerformance}
                >
                    <PolarGrid />
                    <PolarAngleAxis dataKey='kind' stroke='#FFFFFF' fontSize={14} tickLine={false} />
                    <Radar dataKey='value' stroke='#E60000' fill='#E60000' fillOpacity={0.7} legendType='none' />
                    <Legend />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default UserPerformance