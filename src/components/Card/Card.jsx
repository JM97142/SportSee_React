import './card.css'

function Card(props) {
    return (
        <div className="card">
            <div className="card-icon">
                <img src={props.icon} alt="" />
            </div>
            <div className='card-content'>
                {props.type === 'Calories' ?
                    <p className='card-unit'> {props.unit}kCal </p> : <p className='card-unit'> {props.unit}g </p>}
                <p className="card-type">{props.type}</p>
            </div>
        </div>
    )
}

export default Card