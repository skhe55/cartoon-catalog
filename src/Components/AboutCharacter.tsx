import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Store/redux';
import { FETCH_ALL_CHARACTERS } from '../Store/redux/type';
import Card from './CharactersCards/Card';
import "../styles/AboutCharacter.scss";
import "../styles/AboutEpisode.scss";

export const AboutCharacter = () => {
    const characters: any = useSelector((state: RootState) => state.charactersReducer.allCharacters);
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState<string>("");

    const getCharacterByName = (el: any, array: any) => {
        return array.filter((e: any) => e.name.includes(el));
    }

    useEffect(() => {
        dispatch({ type: FETCH_ALL_CHARACTERS })
    }, [])

    return (
        <div className="_mainContainer">
            <div className="_wrapBody">
                <input onChange={((e) => setSearchValue(e.target.value))} className="_input" placeholder="Type here name character"></input>
            </div>
            <div className="_bodyFlex">
                {
                    searchValue == "" ?
                        <div>
                        </div> :
                        getCharacterByName(searchValue, characters).map((el: any) => {
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
