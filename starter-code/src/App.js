import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css'
import FoodBox from './FoodBox';
import foods from './foods.json';


class App extends Component {
  state = {
    foods,
    foodForm: false
  }
  showFoods = () => {
   let foodList = this.state.foods.map((eachFood, i) => {
      return <FoodBox 
      key={i} {...eachFood}
    />
    })
    return foodList
  }
  toggleNewFoodForm = () => {
    if(this.state.foodForm){
      <form
    }
  }
  render() {
  
    return (
      <div className="App">
      
      <button onClick={this.toggleNewFoodForm}>Add new food</button>
      {this.showFoods()}
      </div>
    );
  }
}

export default App;
