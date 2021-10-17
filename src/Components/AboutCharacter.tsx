import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Store/redux';
import { FETCH_ALL_CHARACTERS, SET_FETCHUP_ALL_CHARACTER } from '../Store/redux/type';
import Card from './CharactersCards/Card';
import "../styles/AboutCharacter.scss";
import "../styles/AboutEpisode.scss";

export const AboutCharacter = () => {
    const characters: any = useSelector((state: RootState) => state.charactersReducer.allCharacters);
    const isFetch: any = useSelector((state: RootState) => state.charactersReducer.isFetchingAllCharacter);
    const totalCount: any = useSelector((state: RootState) => state.charactersReducer.totalCount);
    const dispatch = useDispatch();
    const countPages: number = 34;

    const scrollHandler = (e: any) => {
        const a = e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight);
        if (a < 100 && (totalCount <= countPages)) {
            dispatch({ type: SET_FETCHUP_ALL_CHARACTER })
        }
    }

    useEffect(() => {
        if (isFetch) {
            dispatch({ type: FETCH_ALL_CHARACTERS, payload: totalCount });
        } else if (totalCount == 2) {
            dispatch({ type: FETCH_ALL_CHARACTERS, payload: totalCount });
        }

    }, [isFetch])

    useEffect(() => {
        addEventListener('scroll', scrollHandler);
        return function () {
            removeEventListener('scroll', scrollHandler);
        }
    }, [isFetch])
    return (
        <div className="_mainContainer">
            <div className="_bodyFlex">
                {
                    characters.map((el: any) => {
                        return (
                            <Card
                                imageUrl={el.image}
                                name={el.name}
                                species={el.species}
                                status={el.status}
                                location={el.location.name}
                            />
                        );
                    })
                }
            </div>
        </div>
    )
}
