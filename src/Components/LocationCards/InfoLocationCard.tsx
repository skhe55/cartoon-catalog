import React, { } from 'react'
import '../SeasonCards/EpisodeCards.scss';
import { NavLink } from 'react-router-dom';

function InfoLocationCard(props: any) {
    return (
        <div className="_wrapCardItem">
            <div className='containerFlex'>
                <div className='LinkStyles'>
                    <NavLink to={{
                        pathname: "/aboutlocation",
                        state: {
                            charactersUrlList: [...props.residents]
                        }
                    }} >
                        {props.type} - {props.name}
                    </NavLink>
                </div>
                <div className='cardItemStyles'>
                    {props.dimension}
                </div>
            </div>
        </div>
    )
}

export default InfoLocationCard