import './App.css';
import React, { Component } from 'react';
import Dropdown from './Components/Dropdown';
import TextInput from './Components/TextInput';

class App extends Component {
    state = {}

    render () {
        return (
            <>
            <section className="dropdowns">
                <TextInput 
                    label="search"
                    value="char"
                />
                <Dropdown 
                    label="direction"
                    options={['option 1', 'option 2']}
                />
            </section>
            <section className="poke-list">
                map pokeItems here
            </section>
            </>
        );
    }

}

export default App;
