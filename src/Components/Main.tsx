import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_SERIES } from '../Store/redux/type';

function Main() {
    const series = useSelector(state => state.seriesReducer.series);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: FETCH_SERIES });
    }, [])
    console.log(series);
    return (
        <div>
            Hello
        </div>
    )
}

export default Main
