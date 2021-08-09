import { Component } from 'react';
import PokeList from './PokeList';
import Dropdown from './Dropdown';
import Search from './Search'

class PokemonContainer extends Component {
    state = {searchBy: 'pokemon', sortOrder: 'asc', query: 'undefined', data: 'undefined', sortBy: 'pokemon'}

    fetchData = async function(searchBy, query, sortBy, sortOrder) {
        this.setState({ data: 'undefined' });
        let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
        if (this.state.query !== 'undefined') {
            url += `?${searchBy}=${query}&sort=${sortBy}&direction=${sortOrder}`;
        }
        let response = await fetch(url);
        let data = await response.json();
        this.setState({data: data});
    }

    componentDidMount = () => {
        this.fetchData();
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
        this.fetchData(this.state.searchBy, this.state.query, this.state.sortBy, this.state.sortOrder);    
    }

    handleChangeSortBy = (e) => {
        this.setState({ sortBy: e.target.value })
    }

    handleChangeSearchBy = (e) => {
        this.setState({searchBy: e.target.value})
    }

    render () {
        return (
            <div className="app">
                <section className="user-input">
                    <section className="search">
                        <Search 
                            label='search'
                            handleChange={this.handleChangeQuery}
                            handleSubmit={this.handleSubmitSearchQuery}
                        />
                    </section>
                    <section className="select-options">
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
                            options={['pokemon', 'type', 'shape', 'ability']}
                        />
                        <Dropdown 
                            handleChange={this.handleChangeSearchBy}
                            label='search by'
                            defaultValue='pokemon'
                            options={['pokemon', 'type', 'ability']} 
                        />
                    </section>
                </section>
                {this.state.data !== 'undefined' &&
                    <PokeList 
                        results = {this.state.data.results}
                    />}
                {this.state.data === 'undefined' &&
                    <img src='https://cdn.dribbble.com/users/621155/screenshots/2835314/simple_pokeball.gif' alt="pokeball loading spinner" />}
            </div>
        );
    }
}

export default PokemonContainer;