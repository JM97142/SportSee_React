import './userAverageSessions.css'
import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// API
import { getAverageSessions } from "../../api/Api";

import { TooltipAverage } from '../Tooltips/Tooltips';

function UserAverageSessions() {
    const [userAverageSession, setUserAverageSession] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
        fetchAverageSession()
    }, [])

    async function fetchAverageSession() {
        try {
            const averageSessionData = await getAverageSessions()
            setUserAverageSession(averageSessionData)
        }
        catch {
            setError(true)
        }
    }

    if (error) {
        return ('Impossible de récupérer les données liées à la moyenne des sessions.')
    }

    return (
        <div className="average-graph">
            <h3>Durée moyenne des sessions</h3>
            <ResponsiveContainer width='100%' height='100%'>
                <LineChart
                    width='50%'
                    height='50%'
                    data={userAverageSession}
                    margin={{
                        top: 10,
                        right: 10,
                        left: 10,
                        bottom: 10,
                    }}
                    onMouseMove={(e) => {
                        const div = document.getElementsByClassName('average-graph')[0]
                        if (e.isTooltipActive) {
                            const windowWidth = div.clientWidth
                            const mouseXpercentage = Math.round(
                                (e.activeCoordinate.x / windowWidth) * 100
                            )
                            div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(175,0,0,1.5) 100%)`
                        }
                    }}
                >
                    <XAxis dataKey='day' stroke='#FFFFFF' opacity={0.5} tickLine={false} axisLine={false} />
                    <YAxis padding={{ top: 50 }} stroke='#FFFFFF' opacity={0.5} tickLine={false} axisLine={false} hide />
                    <Tooltip content={<TooltipAverage />} />
                    <Legend />
                    <Line type='basis' dataKey='sessionLength' stroke='#FFFFFF' opacity={0.5} dot={false} strokeWidth={2} legendType='none' />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default UserAverageSessions