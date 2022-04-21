import React from "react";
import './Card.css';

class Card extends React.Component {
    render() {
        const { name, universe, alter, activity, friends, superpowers, image } = this.props
        return (
            <div className="container">
                <div className="card">
                    <div className="name"><h4 className="card-name">{name}</h4></div>
                    <div className="card-image"><img src={image} /></div>
                    <div className="card-universy"><span>Вселенная: </span>{universe}</div>
                    <div className="card-alter"><span>Альтер: </span>{alter}</div>
                    <div className="card-activity"><span>Активность: </span>{activity}</div>
                    <div className="card-friends"><span>Друзья: </span>{friends}</div>
                    <div className="card-superpowers"><span>Суперсила: </span>{superpowers}</div>
                </div>
            </div>
        )
    }
}
export default Card