import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FETCH_CHARACTERS } from '../Store/redux/type';
import { resetData } from '../Store/redux/actions';
import { RootState } from '../Store/redux';

function AboutSeries() {
    const characters = useSelector((state: RootState) => state.charactersReducer.characters);
    const dispatch = useDispatch();
    const { state } = useLocation();
    useEffect(() => {
        dispatch({ type: FETCH_CHARACTERS, payload: state.charactersUrlList })
    }, []);
    console.log(characters);
    return (
        <div>
            <NavLink to="/" onClick={() => dispatch(resetData())}>Hello</NavLink>
            <div>
                {characters.map((el: any) => {
                    return (
                        <>
                            {el.name}
                        </>
                    );
                })}
            </div>
        </div>
    );
}

export default AboutSeries
