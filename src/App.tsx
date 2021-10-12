import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Store';
import Main from './Components/Main';
import 'styles/global.scss';


export const App: React.FC<{}> = () => {
    // const [photos, setPhotos] = useState<any>([]);
    // async function getData() {
    //     const url: string = 'https://jsonplaceholder.typicode.com/photos?_limit=10';
    //     const data: any = await fetch(url);
    //     const json: any = await data.json();
    //     setPhotos(json);
    // };
    // getData();

    // useEffect(() => {
    //     document.addEventListener('scroll', scrollHandler)
    //     return function () {
    //         document.removeEventListener('scroll', scrollHandler)
    //     }
    // }, [])
    // const scrollHandler = (e) => {
    //     console.log('scroll');
    // }
    // return (
    //     <div className={'main'}>
    //         {photos.map((photo: any) =>
    //             <div className='photo' key={photo.id}>
    //                 <img src={photo.thumbnailUrl}></img>
    //             </div>
    //         )}
    //     </div>
    // );
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/" exact component={Main} />
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;