import React from 'react';

export default function List(props) {
    console.log(props);
    const { list, showDetails } = props;
    return (
        <div className="list">
            {list.map(item => <div key={item.id} className="item" onClick={ () => showDetails(item) }>{item.name}</div>)}
        </div>
    )
}