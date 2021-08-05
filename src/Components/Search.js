import React, { Component } from 'react';

class TextInput extends Component {
    render() {
        return (
            <>
                <input onChange={this.props.handleChange}></input>
                <button onClick={this.props.handleSubmit}>Search</button>
            </>
        )
    }
}

export default TextInput;