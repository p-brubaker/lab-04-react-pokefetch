import { Component } from 'react';
import { NavLink } from 'react-router-dom';
const classNames = require('classnames');

class Header extends Component {
    state = {
        home: true,
        pokemon: false
    }

    whichPage = (e, page, bool) => {
        this.setState({ [page]: bool })
    }

    render () {
        return (
            <header>
                <h1>Pokedex</h1>
                <div className="links">
                    <NavLink 
                        to="/" 
                        className={classNames({ 'is-current-page': this.state.home })}
                        onClick={
                            (e) => {
                                this.whichPage(e, 'home', true);
                                this.whichPage(e, 'pokemon', false);
                            }
                        }
                    >Home</NavLink>
                    <NavLink
                        to="/pokemon"
                        className={classNames({ 'is-current-page': this.state.pokemon})}
                        onClick={
                            (e) => {
                                this.whichPage(e, 'home', false);
                                this.whichPage(e, 'pokemon', true);
                            }
                        }
                    >Pokemon</NavLink>
                </div>
            </header>
        )
    }
}

export default Header;