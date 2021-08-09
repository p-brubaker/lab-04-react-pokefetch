import { Component } from 'react';
import PokeList from './PokeList';
import Dropdown from './Dropdown';
import Search from './Search';
import Paginator from './Paginator';

class PokemonContainer extends Component {
    state = {
        searchBy: 'pokemon', 
        sortOrder: 'asc', 
        query: '', 
        data: [], 
        sortBy: 'pokemon',
        page: 1
    }

    fetchData = async function() {
        this.setState({ data: [] });
        const {searchBy, query, sortOrder, sortBy, page} = this.state
        let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
        url += `?${searchBy}=${query}&sort=${sortBy}&direction=${sortOrder}&page=${page}`;
        let response = await fetch(url);
        let data = await response.json();
        this.setState({data: data});
    }

    componentDidMount = () => {
        this.fetchData();
    }

    handleChange = (e, prop) => {
        this.setState({ [prop]: e.target.value })
    }

    setPage = (value) => {
        this.setState({page: value}, () => this.fetchData());
    }

    render () {
        return (
            <div className="app">
                <section className="user-input">
                    <section className="search">
                        <Search 
                            label='search'
                            handleChange={(e) => this.handleChange(e, 'query')}
                            handleSubmit={this.fetchData}
                        />
                    </section>
                    <section className="select-options">
                        <Dropdown 
                            handleChange={(e) => this.handleChange(e, 'sortOrder')}
                            label='Sort order'
                            defaultValue='asc'
                            options={['asc', 'desc']}
                        />
                        <Dropdown
                            handleChange={(e) => this.handleChange(e, 'sortBy')}
                            label='sort by'
                            defaultValue='name'
                            options={['pokemon', 'type', 'shape', 'ability']}
                        />
                        <Dropdown 
                            handleChange={(e) => this.handleChange(e, 'searchBy')}
                            label='search by'
                            defaultValue='pokemon'
                            options={['pokemon', 'type', 'ability']} 
                        />
                    </section>
                </section>
                {this.state.data.length !== 0 &&
                    <>
                    <PokeList 
                        results = {this.state.data.results}
                    />
                    <Paginator
                        count={this.state.data.count}
                        page={this.state.page}
                        perPage={this.state.data.perPage}
                        setPage={this.setPage}
                    />
                    </>}
                {this.state.data.length === 0 &&
                    <img src='https://cdn.dribbble.com/users/621155/screenshots/2835314/simple_pokeball.gif' alt="pokeball loading spinner" />}
            </div>
        );
    }
}

export default PokemonContainer;