import './App.css';
import React, { Component } from 'react';
import Dropdown from './Components/Dropdown';
import Search from './Components/Search';

class App extends Component {
    state = {sortOrder: 'asc', query: 'char'}

    handleChangeSortOrder = (e) => {
        this.setState(
            { sortOrder: e.target.value }
        )
    }

    handleChangeQuery = (e) => {
        this.setState(
            { query: e.target.value }
        )
    }

    handleSubmitQuery = () => {
        console.log(`sort order: ${this.state.sortOrder} query: ${this.state.query}`);
    } 

    render () {
        return (
            <>
            <section className="dropdowns">
                <Search 
                    label="search"
                    handleChange={this.handleChangeQuery}
                    handleSubmit={this.handleSubmitQuery}
                />
                <Dropdown 
                    handleChange={this.handleChangeSortOrder}
                    label="Sort order"
                    options={['asc', 'desc']}
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
