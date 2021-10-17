import React, { } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Store';
import Main from './Components/Main';
import AboutEpisode from './Components/AboutEpisode';
import { AboutCharacter } from './Components/AboutCharacter';
import { AboutLocation } from './Components/AboutLocation';
import { CharacterCard } from './Components/LocationCards/CharacterCard';
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
                    <Route exact path="/character" component={AboutCharacter} />
                    <Route exact path="/location" component={AboutLocation} />
                    <Route exact path="/aboutlocation" component={CharacterCard} />
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;