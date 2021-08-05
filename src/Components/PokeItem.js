import React, { Component } from 'react';

class PokeItem extends Component {
    render() {
        return (
            <>
            <label>{this.props.pokemon}</label>
            <img src={this.props.img} alt={this.props.pokemon} />
            </>
        )
    }
}

export default PokeItem;