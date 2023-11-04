import './userAverageSessions.css'
import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';

import { getAverageSessions } from "../api/Api";

function UserAverageSessions() {
    const [userAverageSession, setUserAverageSession] = useState([])

    useEffect(() => {
        fetchAverageSession()
    }, [])

    async function fetchAverageSession() {
        const averageSessionData = await getAverageSessions()
        setUserAverageSession(averageSessionData)
    }

    return (
        <div className="average-graph">
            <h3>Durée moyenne des sessions</h3>
            <LineChart
                width={258}
                height={263}
                data={userAverageSession}
                margin={{
                    top: 10,
                    right: 10,
                    left: 10,
                    bottom: 10,
                }}
            >
                <XAxis dataKey='day' stroke='#FFFFFF' opacity={0.5} tickLine={false} axisLine={false} />
                <YAxis padding={{ top: 50 }} stroke='#FFFFFF' opacity={0.5} tickLine={false} axisLine={false} hide />
                <Tooltip />
                <Legend />
                <Line type='basis' dataKey='sessionLength' stroke='#FFFFFF' opacity={0.5} dot={false} strokeWidth={2} legendType='none' />
            </LineChart>
        </div>
    );
}

export default UserAverageSessions