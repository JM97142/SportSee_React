import { useEffect, useState } from "react"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from 'recharts';


import { getPerformance } from "../api/Api"

function UserPerformance(props) {
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
            <RadarChart outerRadius={90} width={730} height={250} data={userPerformance}>
                <PolarGrid />
                <PolarAngleAxis dataKey="kind" />
                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                <Radar dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            </RadarChart>
        </div>
    )
}

export default UserPerformance