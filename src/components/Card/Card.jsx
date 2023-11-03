function Card(props) {
    return (
        <div className="card">
            <div className="">
                <img src={props.icon} alt="" className="card-icon" />
            </div>
            <div>
                {props.type === 'Calories' ?
                    <p className='card-unit'> {props.unit}kCal </p> : <p className='info-gramme'> {props.unit}g </p>}
                <p className="card-type">{props.type}</p>
            </div>
        </div>
    )
}

export default Card