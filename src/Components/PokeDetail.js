import { Component } from 'react';

class PokeDetail extends Component {

    state = { data: [] };

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
            <section className="poke-detail">
                {!data.length &&
                    <img src='https://cdn.dribbble.com/users/621155/screenshots/2835314/simple_pokeball.gif' alt="pokeball loading spinner" />
                }
                {data.length &&
                    <>
                    <h1>{data.pokemon}</h1>
                    <img src={data.url_image} alt="poke" />
                    <p className="poke-detail-item">Ability 1: {data.ability_1}</p>
                    <p className="poke-detail-item">Ability 2: {data.ability_2}</p>
                    <p className="poke-detail-item">Attack: {data.attack}</p>
                    <p className="poke-detail-item">Defense: {data.defense}</p>
                    <p className="poke-detail-item">HP: {data.hp}</p>
                    </>}
            </section>
        )
    }
}

export default PokeDetail;