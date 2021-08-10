import React, { Component } from 'react';
import PokeItem from './PokeItem';
import { NavLink } from 'react-router-dom';

class PokeList extends Component {
    render() {
        return (
            <section className="poke-list"> 
                {
                    this.props.results.map(result => {
                        return (
                            <NavLink to={`/pokemon/${result._id}`} key={result.id}>
                                <PokeItem 
                                    key={result.id}
                                    pokemon={result.pokemon}
                                    img={result.url_image}
                                />
                            </NavLink>
                        )
                    })
                }
            </section>
        )
    }
}

export default PokeList;