import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_SERIES, SET_FETCHUP } from '../Store/redux/type';
import '../styles/Main.scss';
import EpisodeCards from './SeasonCards/EpisodesCard';
import Header from './SeasonCards/Header';
import { RootState } from '../Store/redux/index';

function Main() {
    const series: any = useSelector((state: RootState) => state.seriesReducer.series);
    const isFetch: boolean = useSelector((state: RootState) => state.seriesReducer.isFetch);
    const totalCount: number = useSelector((state: RootState) => state.seriesReducer.totalCount);
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState<string>("");
    const [clicked, setClicked] = useState<boolean>(false);
    const seasons: Array<number> = [1, 2, 3, 4];
    const countPages: number = 3;

    const getEpisodes = (el: any) => {
        return series.filter((e: any) => e.episode.slice(2, 3) == el);
    }
    const getEpisodesByName = (el: any) => {
        return series.filter((e: any) => e.name.includes(el));
    }

    const sortByName = () => {
        return series.sort((a: any, b: any) => a.name !== b.name ? a.name < b.name ? -1 : 1 : 0);
    }

    const scrollHandler = (e: any) => {
        const a = e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight);
        if (a < 100 && (totalCount <= countPages)) {
            dispatch({ type: SET_FETCHUP })
        }
    }

    useEffect(() => {
        if (isFetch) {
            dispatch({ type: FETCH_SERIES, payload: totalCount });
        }
    }, [isFetch])

    useEffect(() => {
        addEventListener('scroll', scrollHandler);
        return function () {
            removeEventListener('scroll', scrollHandler);
        }
    }, [isFetch])

    return (
        <div className='_mainFlexContainer'>
            <div className='_wrapperMainFlexCont'>
                <input onChange={(e) => setSearchValue(e.target.value)} className='_inputSearch' placeholder="Type here"></input>
            </div>
            <div className="wrapFlexButton">
                <button className="_buttonSort" onClick={() => setClicked(!clicked)}>Click</button>
            </div>
            {clicked == false ?
                searchValue == "" ?
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
                    }) :
                    getEpisodesByName(searchValue).map((el: any) => {
                        return (
                            <div className='_wrapContainer'>
                                <div className='_rowFlexWrap'>
                                    <EpisodeCards
                                        nameEP={el.name}
                                        date={el.air_date}
                                        serialnum={el.episode.slice(4, 6)}
                                        characters={el.characters}
                                    />
                                </div>
                            </div>
                        );
                    }) :
                sortByName().map((el: any) => {
                    return (
                        <div className='_wrapContainer'>
                            <div className='_rowFlexWrap'>
                                <EpisodeCards
                                    nameEP={el.name}
                                    date={el.air_date}
                                    serialnum={el.episode.slice(4, 6)}
                                    characters={el.characters}
                                />
                            </div>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default Main
