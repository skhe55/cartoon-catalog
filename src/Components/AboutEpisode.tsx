import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { FETCH_CHARACTERS } from '../Store/redux/type';
import { RootState } from '../Store/redux';
import Card from './CharactersCards/Card';
import '../styles/AboutEpisode.scss';

function AboutSeries() {
    const characters = useSelector((state: RootState) => state.charactersReducer.characters);
    const isFetching = useSelector((state: RootState) => state.charactersReducer.isFetching);
    const dispatch = useDispatch();
    const { state } = useLocation();
    useEffect(() => {
        dispatch({ type: FETCH_CHARACTERS, payload: state.charactersUrlList })
    }, []);
    return (
        <div>
            {!isFetching ? <div className="fetching"></div> :
                <div className="_bodyFlex">
                    {characters.map((el: any) => {
                        return (
                            <Card
                                imageUrl={el.image}
                                name={el.name}
                                species={el.species}
                                status={el.status}
                                location={el.location.name}
                            />
                        );
                    })}
                </div>
            }
        </div>
    );
}

export default AboutSeries
