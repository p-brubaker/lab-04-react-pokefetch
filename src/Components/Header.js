import { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render () {
        return (
            <header>
                <h1>Pokedex</h1>
                <div className="links">
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="/pokemon">Pokemon</NavLink>
                </div>
            </header>
        )
    }
}

export default Header;