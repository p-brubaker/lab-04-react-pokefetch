import { Component } from 'react';

class PokeDetail extends Component {

    state = { data: {}};

    loadData = async () => {
        const {pokeId} = this.props.match.params;
        const url = `https://pokedex-alchemy.herokuapp.com/api/pokedex?id=${pokeId}`;
        const resp = await fetch(url);
        const data = await resp.json();
        this.setState({data});
    }

    componentDidMount() {
        this.loadData();
    }

    render() {
        
        return (
            <section>
                <h1>Poke detail page</h1>
            </section>
        )
    }
}

export default PokeDetail;