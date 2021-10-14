import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Store';
import Main from './Components/Main';
import AboutEpisode from './Components/AboutEpisode';
import Navbar from './Components/Navbar/Navbar';
import 'styles/global.scss';


export const App: React.FC<{}> = () => {
    return (
        <Provider store={store}>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/aboutepisode" component={AboutEpisode} />
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;