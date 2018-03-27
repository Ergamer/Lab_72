import React, {Component} from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <div className="Header">
                <div className="Header-Links">
                    <NavLink to="/pages/dishes">Dishes</NavLink>
                    <NavLink to="/pages/orders">Orders</NavLink>
                </div>
                <div className="Sfbvfjvbfkb">
                    <NavLink to="/pages/pizzacreator">Add new dish</NavLink>
                </div>
            </div>
        )
    }
}



export default Header;