import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_SERIES } from '../Store/redux/type';
import '../styles/Main.scss';
import CardItem from './SeasonCards/CardItem';
import Cards from './SeasonCards/Cards';

function Main() {
    const series = useSelector(state => state.seriesReducer.series);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState<boolean>(false);
    const [currentSeason, setCurrentSeason] = useState<number>(1);
    const getEpisodes = (el: any) => {
        return series.filter((e: any) => e.episode.slice(2, 3) == el);
    }
    const seasons: Array<number> = [1, 2, 3, 4];
    useEffect(() => {
        dispatch({ type: FETCH_SERIES });
        setLoading(true);
    }, [])
    console.log(series);
    console.log(getEpisodes(1));
    return (
        <div className='_mainFlexContainer'>
            <div className='_wrapperMainFlexCont'>
                <i className="fas fa-search"></i>
                <input className='_inputSearch' placeholder="Type here"></input>
            </div>
            <Cards />
            {seasons.map((e: any) =>
                getEpisodes(e).map((el: any) =>
                    <CardItem
                        nameEP={el.name}
                        date={el.air_date}
                        serialnum={el.episode.slice(4, 6)}
                    />
                )
            )}
        </div>
    )
}

export default Main
