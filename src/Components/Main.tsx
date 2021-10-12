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
                {/* <i className="fas fa-search"></i> */}
                <input className='_inputSearch' placeholder="Type here"></input>
            </div>
            <Header
                season={1}
            />
            <div className='_wrapContainer'>
                <div className='_rowFlexWrap'>
                    {getEpisodes(1).map((el: any) =>
                        <CardItem
                            nameEP={el.name}
                            date={el.air_date}
                            serialnum={el.episode.slice(4, 6)}
                        />
                    )} </div>
            </div>
            <Header
                season={2}
            />
            <div className='_wrapContainer'>
                <div className='_rowFlexWrap'>
                    {getEpisodes(2).map((el: any) =>
                        <CardItem
                            nameEP={el.name}
                            date={el.air_date}
                            serialnum={el.episode.slice(4, 6)}
                        />
                    )}
                </div>
            </div>
            <Header
                season={3}
            />
            <div className='_wrapContainer'>
                <div className='_rowFlexWrap'>
                    {getEpisodes(3).map((el: any) =>
                        <CardItem
                            nameEP={el.name}
                            date={el.air_date}
                            serialnum={el.episode.slice(4, 6)}
                        />
                    )}
                </div>
            </div>
            <Header
                season={4}
            />
            <div className='_wrapContainer'>
                <div className='_rowFlexWrap'>
                    {getEpisodes(4).map((el: any) =>
                        <CardItem
                            nameEP={el.name}
                            date={el.air_date}
                            serialnum={el.episode.slice(4, 6)}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Main
