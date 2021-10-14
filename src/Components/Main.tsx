import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { FETCH_SERIES } from '../Store/redux/type';
import '../styles/Main.scss';
import EpisodeCards from './SeasonCards/EpisodesCard';
import Header from './SeasonCards/Header';
import { RootState } from '../Store/redux/index';

function Main() {
    const series = useSelector((state: RootState) => state.seriesReducer.series);
    const dispatch = useDispatch();
    const getEpisodes = (el: any) => {
        return series.filter((e: any) => e.episode.slice(2, 3) == el);
    }
    const seasons: Array<number> = [1, 2, 3, 4];
    useEffect(() => {
        dispatch({ type: FETCH_SERIES });
    }, [])
    if (series[0] != undefined)
        console.log(series);
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
                                        <EpisodeCards
                                            nameEP={e.name}
                                            date={e.air_date}
                                            serialnum={e.episode.slice(4, 6)}
                                            characters={e.characters}
                                        />
                                    )} </div>
                            </div>
                        </>);
                })
            }
        </div>
    )
}

export default Main
