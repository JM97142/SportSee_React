import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { getAverageSessions } from "../api/Api";

function UserAverageSessions(props) {
    const [userAverageSession, setUserAverageSession] = useState([])

    useEffect(() => {
        fetchAverageSession()
    }, [])

    async function fetchAverageSession() {
        const averageSessionData = await getAverageSessions(props.userId)
        const data = []
        for (let i = 0; i < averageSessionData.data.sessions.length; i++) {
            const session = averageSessionData.data.sessions[i]
            const averageSessionFormatted = {
                name: session.day,
                durée: session.sessionLength
            }
            data.push(averageSessionFormatted)
        }
        setUserAverageSession(data)
    }

    return (
        <LineChart
            width={500}
            height={300}
            data={userAverageSession}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="durée" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
    );
}

export default UserAverageSessions