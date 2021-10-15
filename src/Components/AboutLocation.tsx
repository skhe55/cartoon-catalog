import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Store/redux';
import { FETCH_ALL_CHARACTERS, FETCH_LOCATIONS } from '../Store/redux/type';
import '../styles/AboutLocation.scss';

export const AboutLocation = () => {
    const characters: any = useSelector((state: RootState) => state.charactersReducer.allCharacters);
    const locations: any = useSelector((state: RootState) => state.locationsReducer.locations);
    const dispatch = useDispatch();

    const getResidents = (array: Array<object>, el: string) => {
        return array.filter((e: any) => e.id == el)
    }

    useEffect(() => {
        dispatch({ type: FETCH_ALL_CHARACTERS })
        dispatch({ type: FETCH_LOCATIONS })
    }, [])
    console.log(locations);
    console.log(characters);
    return (
        <div className="mainBody">
            <div className="imgFlexContainer">
                <div className="wrapImgContainer"></div>
            </div>
            <div className="cardFlexContainer"></div>
        </div>
    )
}
