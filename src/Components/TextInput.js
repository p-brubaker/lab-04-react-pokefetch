import React, { Component } from 'react';

class TextInput extends Component {
    render() {
        return (
            <>
                <input value={this.props.value}></input>
            </>
        )
    }
}

export default TextInput;