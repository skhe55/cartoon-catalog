import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../Store/redux';
import { FETCH_CHARACTERS } from '../../Store/redux/type';
import { useLocation } from 'react-router';
import Card from '../CharactersCards/Card';
import "../../styles/AboutCharacter.scss";

export const CharacterCard = (props: any) => {
    const characters = useSelector((state: RootState) => state.charactersReducer.characters);
    const isFetching = useSelector((state: RootState) => state.charactersReducer.isFetching);
    const dispatch = useDispatch();
    const { state }: any = useLocation();
    useEffect(() => {
        dispatch({ type: FETCH_CHARACTERS, payload: state.charactersUrlList })
    }, [])
    return (
        <>
            {isFetching ?
                <>
                    <div className="_bodyFlex">
                        {characters.map((e: any) => {
                            return (
                                <Card
                                    imageUrl={e.image}
                                    name={e.name}
                                    species={e.species}
                                    status={e.status}
                                />
                            );
                        })}
                    </div>
                </> : <> </>
            }
        </>
    )
}
