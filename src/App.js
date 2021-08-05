import './App.css';
import React, { Component } from 'react';
import Dropdown from './Components/Dropdown';
import Search from './Components/Search';
import PokeItem from './Components/PokeItem';

class App extends Component {
    state = {sortOrder: 'asc', query: '', data: 'undefined', sortBy: 'name'}

    fetchData = async function(query, sortBy, sortOrder) {
        let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
        url += `?pokemon=${query}&sort=${sortBy}&direction=${sortOrder}`
        let response = await fetch(url);
        let data = await response.json();

        this.setState({data});
    }

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

    handleSubmitSearchQuery = () => {
        this.fetchData(this.state.query, this.state.sortBy, this.state.sortOrder);    
    }

    handleChangeSortBy = (e) => {
        this.setState({ sortBy: e.target.value })
    }

    render () {
        return (
            <>
            <section className="dropdowns">
                <section className="search">
                    <Search 
                        label='search'
                        handleChange={this.handleChangeQuery}
                        handleSubmit={this.handleSubmitSearchQuery}
                    />
                </section>
                <section className="sort">
                    <Dropdown 
                        handleChange={this.handleChangeSortOrder}
                        label='Sort order'
                        defaultValue='asc'
                        options={['asc', 'desc']}
                    />
                    <Dropdown
                        handleChange={this.handleChangeSortBy}
                        label='sort by'
                        defaultValue='name'
                        options={['name', 'type', 'shape', 'ability']}
                    />
                </section>

            </section>
            {this.state.data !== 'undefined' &&
            <section className="poke-list"> 
                {
                    this.state.data.results.map(result => {
                        return (
                        <PokeItem 
                            key={result.id}
                            pokemon={result.pokemon}
                            img={result.url_image}
                        />
                        )
                    })
                }
            </section>}
            </>
        );
    }

}

export default App;
