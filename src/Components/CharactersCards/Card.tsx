import React from 'react'
import '../CharactersCards/Card.scss';

function Card(props: any) {
    return (
        <div className="_columnFlexContainer">
            <img className="_img" src={props.imageUrl}></img>
            <div className="_divFlexText">Name: {props.name}</div>
            <div className="_divFlexText">Species: {props.species}</div>
            <div className="_divFlexText">Status: {props.status}</div>
            <div className="_divFlexText">Location: {props.location}</div>
        </div>
    )
}

export default Card
