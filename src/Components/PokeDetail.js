import { Component } from 'react';

class PokeDetail extends Component {

    state = { data: {}};

    loadData = async () => {
        const {pokeId} = this.props.match.params;
        const url = `https://pokedex-alchemy.herokuapp.com/api/pokedex/${pokeId}`;
        const resp = await fetch(url);
        const data = await resp.json();
        this.setState({data});
    }

    componentDidMount() {
        this.loadData();
    }

    render() {
        const { data } = this.state;

        return (
            <section>
                <h1>{data.pokemon}</h1>
                <img src={data.url_image} alt="poke" />
            </section>
        )
    }
}

export default PokeDetail;