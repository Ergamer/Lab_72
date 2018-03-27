import React, {Component} from 'react';
import './PizzaEditor.css';
import {saveDish} from "../../store/action";
import {connect} from "react-redux";


class PizzaEditor extends Component {


    state = {
        title: '',
        price: '',
        image: ''
    };


    pizzaValueChanged = (event) => {
        event.persist();
        this.setState({[event.target.name]: event.target.value});
    };

    render () {
        return (
            <form className="PizzaEditor" action="">
                <div className="Fieldses">Title<input
                    name="title"
                    value={this.state.title}
                    onChange={this.pizzaValueChanged}
                    type="text"/>
                </div>
                <div className="Fieldses">Price<input
                    value={this.state.price}
                    onChange={this.pizzaValueChanged}
                    name="price"
                    type="text"/>
                </div>
                <div className="Fieldses">Image
                    <input
                        value={this.state.image}
                        onChange={this.pizzaValueChanged}
                        name="image"
                        type="text"/>
                </div>
                <button onClick={(e) => this.props.saveDish(e, this.state)}>Save</button>
                <button>Back</button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        pizzas: state.pizzas
    }
};

const mapDispatchToProps = dispatch => {
    return {
        saveDish: (e, pizzas) => dispatch(saveDish(e, pizzas))
    }
};


export default connect (mapStateToProps, mapDispatchToProps) (PizzaEditor);
