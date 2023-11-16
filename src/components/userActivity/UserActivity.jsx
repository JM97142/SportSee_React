import './userActivity.css'
import { useEffect, useState } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// API
import { getActivity } from "../../api/Api"

import { TooltipActivity } from '../Tooltips/Tooltips';

function UserActivity() {
    const [userActivity, setUserActivity] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
        fetchActivity()
    }, [])

    async function fetchActivity() {
        try {
            const activityData = await getActivity()
            setUserActivity(activityData)
        }
        catch (err) {
            setError(true)
        }
    }

    if (error) {
        return ('Impossible de recupérer les données liées à activité.')
    }

    return (
        <div className="activity-graph">
            <h3>Activité quotidienne</h3>
            <ResponsiveContainer className={'contenair-activity'} width='100%' height='100%'>
                <BarChart
                    width='100%'
                    height='100%'
                    data={userActivity}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey='day' tickLine={false} axisLine={false} />
                    <XAxis dataKey='calories' type='number' tickLine={false} axisLine={false} />
                    <YAxis dataKey='kilogrammes' type='number' tickLine={false} orientation='right' axisLine={false} domain={['dataMin - 1', 'dataMax + 1']} />
                    <YAxis dataKey='calories' type='number' yAxisId='calorie' hide />
                    <Tooltip content={<TooltipActivity />} />
                    <Legend verticalAlign='top' align='right' iconType='circle' wrapperStyle={{ marginTop: '-23px' }} formatter={(value) => <span className='text-legend'>{value}</span>} />
                    <Bar name='Poids (kg)' dataKey="kilogrammes" radius={[10, 10, 0, 0]} barSize={7} fill="#282D30" />
                    <Bar className="activity-bar" name='Calories brûlées (kCal)' dataKey="calories" radius={[10, 10, 0, 0]} barSize={7} fill="#E60000" yAxisId='calorie' />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default UserActivity