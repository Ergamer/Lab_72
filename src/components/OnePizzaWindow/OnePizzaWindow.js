import React, {Component} from 'react';
import './OnePizzaWindow.css';
import {NavLink} from "react-router-dom";



class OnePizzaWindow extends Component {

    render() {
        return (
            <div className="OnePizzaWindow">
                <img src={this.props.image} alt=""/>
                <h2>{this.props.title}</h2>
                <p>{this.props.price}</p>
                <NavLink to={"/edit"}>Edit</NavLink>
                <button onClick={this.props.deleteDish}>Delete</button>
            </div>
        )
    }
}

export default OnePizzaWindow;

