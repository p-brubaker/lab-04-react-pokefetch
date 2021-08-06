import React, { Component } from 'react';

class PokeItem extends Component {
    render() {
        return (
            <div className="poke-item">
            <label>{this.props.pokemon}</label>
            <img src={this.props.img} alt={this.props.pokemon} />
            </div>
        )
    }
}

export default PokeItem;