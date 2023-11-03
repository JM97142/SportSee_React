import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

import { getAverageSessions } from "../api/Api";

function UserAverageSessions() {
    const [userAverageSession, setUserAverageSession] = useState([])

    useEffect(() => {
        fetchAverageSession()
    })

    async function fetchAverageSession() {
        const averageSessionData = await getAverageSessions()
        setUserAverageSession(averageSessionData)
    }

    return (
        <div className="average-wrapper">
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
        </div>
    );
}

export default UserAverageSessions