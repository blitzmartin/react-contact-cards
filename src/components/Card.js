function Card(props){
    return(
        <div className="CardItem">
            <h2>{props.name}</h2>
            <img src={props.imgURL} alt="avatar_img" />
            <p>{props.phone}</p>
            <p>{props.email}</p>
        </div>
    )
}

export default Card