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
        setUserAverageSession(averageSessionData)
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
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
    );
}

export default UserAverageSessions