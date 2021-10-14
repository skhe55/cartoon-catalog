import React, { } from 'react'
import './EpisodeCards.scss';
import { NavLink } from 'react-router-dom';

function EpisodeCards(props: any) {
    return (
        <div className="_wrapCardItem">
            <div className='containerFlex'>
                <div className='cardItemStyles'>
                    <NavLink to={{
                        pathname: "/aboutepisode",
                        state: {
                            charactersUrlList: [...props.characters]
                        }
                    }} >
                        EP {props.serialnum} - {props.nameEP}
                    </NavLink>
                </div>
                <div className='cardItemStyles'>
                    Date - {props.date}
                </div>
            </div>
        </div>
    )
}

export default EpisodeCards
