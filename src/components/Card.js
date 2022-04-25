function Card(props){
    return(
        <div className="CardItem">
            <h2>{props.name}</h2>
            <img src={props.img} alt="avatar_img" />
            <p>{props.tel}</p>
            <p>{props.email}</p>
        </div>
    )
}

export default Card