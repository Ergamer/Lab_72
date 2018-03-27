import React, {Component} from 'react';
import './Dishes.css';
import {connect} from "react-redux";
import OnePizzaWindow from "../../components/OnePizzaWindow/OnePizzaWindow";
import {deleteDish, fetchDish, saveDish} from "../../store/action";


class Dishes extends Component {


    componentDidMount () {
        this.props.fetchDish();
    }

    render () {
        return (
            <div className="Dishes">
                {Object.keys(this.props.pizzas).map((pizza) => {
                    console.log(pizza)
                    return (<OnePizzaWindow
                        title={this.props.pizzas[pizza].pizzas.title}
                        price={this.props.pizzas[pizza].pizzas.price}
                        image={this.props.pizzas[pizza].pizzas.image}
                        id={pizza.id}
                        deleteDish={() => this.props.deleteDish(pizza)}
                    />)
                })}
            </div>
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
        saveDish: (e, pizzas) => dispatch(saveDish(e, pizzas)),
        fetchDish: () => dispatch(fetchDish()),
        deleteDish: (id) => dispatch(deleteDish(id))
    }
};


export default connect(mapStateToProps, mapDispatchToProps) (Dishes);
