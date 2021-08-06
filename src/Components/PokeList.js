import React, { Component } from 'react';
import PokeItem from './PokeItem';

class PokeList extends Component {
    render() {
        return (
            <section className="poke-list"> 
                {
                    this.props.results.map(result => {
                        return (
                        <PokeItem 
                            key={result.id}
                            pokemon={result.pokemon}
                            img={result.url_image}
                        />
                        )
                    })
                }
            </section>
        )
    }
}

export default PokeList;