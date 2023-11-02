import { useEffect, useState } from "react"
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { getActivity } from "../api/Api"

function UserActivity(props) {
    const [userActivity, setUserActivity] = useState([])

    useEffect(() => {
        fetchActivity()
    }, [])

    async function fetchActivity() {
        const activityData = await getActivity(props.userId)
        setUserActivity(activityData)
    }

    return (
        <BarChart
            width={500}
            height={300}
            data={userActivity}
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
            <Bar dataKey="calories" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
            <Bar dataKey="kilogrammes" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
    )
}

export default UserActivity