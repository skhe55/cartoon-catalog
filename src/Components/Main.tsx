import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_SERIES } from '../Store/redux/type';
import '../styles/Main.scss';
import CardItem from './SeasonCards/CardItem';
import Header from './SeasonCards/Header';

function Main() {
    const series = useSelector(state => state.seriesReducer.series);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState<boolean>(false);
    const [count, setCount] = useState<number>(1);
    const getEpisodes = (el: any) => {
        return series.filter((e: any) => e.episode.slice(2, 3) == el);
    }
    const seasons: Array<number> = [1, 2, 3, 4];
    useEffect(() => {
        dispatch({ type: FETCH_SERIES });
        setLoading(true);
    }, [])
    if (series[0] != undefined)
        console.log(series[0].episode.slice(2, 3));
    return (
        <div className='_mainFlexContainer'>
            <div className='_wrapperMainFlexCont'>
                {/* <i className="fas fa-search"></i> */}
                <input className='_inputSearch' placeholder="Type here"></input>
            </div>
            {
                seasons.map((el: any) => {
                    return (
                        <> <Header season={el} />
                            <div className='_wrapContainer'>
                                <div className='_rowFlexWrap'>
                                    {getEpisodes(el).map((e: any) =>
                                        <CardItem
                                            nameEP={e.name}
                                            date={e.air_date}
                                            serialnum={e.episode.slice(4, 6)}
                                        />
                                    )} </div>
                            </div></>);
                })
            }
        </div>
    )
}

export default Main
