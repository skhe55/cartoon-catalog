import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Store/redux';
import { FETCH_LOCATIONS, SET_FETCHISUP } from '../Store/redux/type';
import '../styles/AboutLocation.scss';
import InfoLocationCard from './LocationCards/InfoLocationCard';
export const AboutLocation = () => {
    const locationsIsFetch: boolean = useSelector((state: RootState) => state.locationsReducer.locationsIsFetch);
    const locations: any = useSelector((state: RootState) => state.locationsReducer.locations);
    const totalCount: any = useSelector((state: RootState) => state.locationsReducer.totalCount);
    const countPages: number = 6;
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState<string>("");
    const getLocation = (e: string, array: any) => {
        return array.filter((el: any) => el.name.includes(e));
    }

    const scrollHandler = (e: any) => {
        const a = e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight);
        if (a < 100 && (totalCount <= countPages)) {
            dispatch({ type: SET_FETCHISUP })
        }
    }

    useEffect(() => {
        if (locationsIsFetch) {
            dispatch({ type: FETCH_LOCATIONS, payload: totalCount });
        }
    }, [locationsIsFetch])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);
        return function () {
            document.removeEventListener('scroll', scrollHandler);
        }
    }, [locationsIsFetch])

    return (
        <div className="mainBody">
            <div className="inputFlexContainer">
                <input onChange={(e) => setSearchValue(e.target.value)} className="_inputLocation" placeholder="Type here name of location (Earth or etc.)"></input>
            </div>
            <div className="__bodyFlex">
                {searchValue == "" ?
                    locations.map((e: any) => {
                        return (
                            <InfoLocationCard
                                name={e.name}
                                dimension={e.dimension}
                                residents={e.residents}
                                type={e.type}
                            />
                        );
                    }) :
                    getLocation(searchValue, locations).map((e: any) => {
                        return (
                            <InfoLocationCard
                                name={e.name}
                                dimension={e.dimension}
                                residents={e.residents}
                                type={e.type}
                            />
                        );
                    })
                }
            </div>
        </div>
    )
}
