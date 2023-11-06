export const TooltipActivity = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className='tooltip-activity'>
                <p> {`${payload[0].value}kg`}</p>
                <p> {`${payload[1].value}kCal`}</p>
            </div>
        )
    }
    return null
}

export const TooltipAverage = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className='tooltip-average'>
                <p> {`${payload[0].value} min`}</p>
            </div>
        )
    }
    return null
}

export function LegendScore(payload) {
    return (
        <div className='legend-score'>
            <p className='legend-todayscore'>
                {payload?.payload[0]?.payload.todayScore}%
            </p>
            <p className='legend-content'> de votre objectif</p>
        </div>
    )
}