import React from 'react'
import './Header.scss';

function Cards(props: any) {
    return (
        <div className='bodyFlexColumn'>
            <div className='headerFlexRow'>SEASON {props.season}</div>
            <div className='underLine'></div>
        </div>
    )
}

export default Cards
