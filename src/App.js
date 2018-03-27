import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Dishes from "./containers/Dishes/Dishes";
import Orders from "./containers/Orders/Orders";
import PizzaCreator from "./containers/PizzaCreator/PizzaCreator";
import PizzaEditor from "./components/PizzaEditor/PizzaEditor";


class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Switch>
                    <Route path="/pages/dishes" exact component={Dishes}/>
                    <Route path="/pages/pizzacreator" exact component={PizzaCreator}/>
                    <Route path="/pages/:id" exact component={Orders}/>
                    <Route path="/edit" exact component={PizzaEditor}/>
                </Switch>
            </div>
        );
    }
}

export default App;
