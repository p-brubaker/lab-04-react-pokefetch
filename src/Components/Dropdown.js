import React, { Component } from 'react';

class Dropdown extends Component {
    
    render() { 
        const {handleChange, label, options} = this.props;

        return ( 
            <div className="dropdown">
            <label>{label}</label>
            <select defaultValue="All" onChange={handleChange}>
                {options.map((option, i) => {
                return (
                    <option value={option} key={i}>
                        {option}
                    </option>
                )})}
            </select>
            </div>
         );
    }
}
 
export default Dropdown;