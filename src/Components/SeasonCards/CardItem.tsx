import React from 'react'
import '../../styles/CardItem.scss';

function CardItem(props: any) {
    return (
        <div className="_wrapCardItem">
            <div className='containerFlex'>
                <div className='cardItemStyles'>
                    EP {props.serialnum} - {props.nameEP}
                </div>
                <div className='cardItemStyles'>
                    Date - {props.date}
                </div>
            </div>
        </div>
    )
}

export default CardItem
