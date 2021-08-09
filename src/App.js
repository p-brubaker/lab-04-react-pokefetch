import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PokemonContainer from './Components/PokemonContainer';
import Home from './Components/Home';
import Header from './Components/Header';
import PokeDetail from './Components/PokeDetail';
class App extends Component {
    render() {
        return (
        <section className="app">
            <BrowserRouter>
            <Header />
                <Switch>
                    <Route path="/pokemon/:pokeId" component={PokeDetail} />
                    <Route path="/pokemon" component={PokemonContainer} />
                    <Route path="/" component={Home} />
                </Switch>
            </BrowserRouter>
        </section>
        )
    }
}

export default App;
