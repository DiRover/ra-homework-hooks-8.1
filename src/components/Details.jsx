import React from 'react';

export default function Details(props) {
    console.log(props);
    const { avatar, details, name } = props.info;
    console.log(avatar);
    return (
        <div className="details">
            <div className="avatar-box">
                <img src={ avatar } alt={ avatar } className="avatar" />
            </div>
            <div className="name-box">{ name }</div>
            <div className="item city-box">City: { details.city }</div>
            <div className="item company-box">Company: { details.company }</div>
            <div className="item position-box">Position: { details.position }</div>
        </div>
    )
}