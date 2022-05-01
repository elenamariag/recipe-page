import "./card.css";

const Card = (props) => {

    return (
        <div className="card" onClick={()=>props.CardData()} >
            <img className="card-img-top" src={props.img} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
            </div>
        </div>
    )
}

export default Card;