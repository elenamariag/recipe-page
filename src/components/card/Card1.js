import "./card.css";
const Card1 = (props) => {

    return (
        <div className="card" onClick={()=>props.CardData()} >
            <img className="card-img-top" src={props.img1} alt="Card image cap1"/>
            <div className="card-body">
                <h5 className="card-title">{props.title1}</h5>
            </div>
        </div>
    )
}

export default Card1;