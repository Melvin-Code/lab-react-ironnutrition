import React, { Component } from 'react';

import './App.css';
import foods from './foods.json'
import FoodBox from './FoodBox'
import 'bulma/css/bulma.css'
console.log(foods)


class App extends Component {

  state = {
    foods,
    foodForm:false,
    filterFoods: foods
  }

  showFoods = () => {
    let foodList = this.state.filterFoods.map((eachFood, index)=>{
      return <FoodBox  key={index} {...eachFood} />
    })
    return foodList;
  }

  toggleFoodForm = () => {
    console.log('yeeees')
    this.setState({
      foodForm: !this.state.foodForm
    })
  }


   addNewFoodToArray = (newFoodObj) => {
    console.log(newFoodObj)
    let copyOfAllFoods = this.state.foods.slice()
    copyOfAllFoods.unshift(newFoodObj)
    console.log(copyOfAllFoods)
    this.setState({
      foods: copyOfAllFoods
    })
  }
 
  handleInputChange = (e) => {
    console.log('change', e.target.name, e.target.value)
    this.setState( { [e.target.name] : e.target.value } ) //food : 'lasagn'
  }
   submitfunc=(e)=>{
     e.preventDefault()
    let newFName = this.state.fname
    let newFCalories = this.state.fcalories
    let newFImage = this.state.fimage
    this.addNewFoodToArray({
      name: newFName,
      calories: newFCalories,
      image: newFImage
    })
    
   }
  showFoodForm = () => {
   
   console.log(this.state.foodForm)
     if(this.state.foodForm){
    return <form onSubmit={this.submitfunc}>
    <input onChange={this.handleInputChange} type='text' name='fcalories' placeholder='calories' />
    <input onChange={this.handleInputChange} type='text' name='fname' placeholder= 'name'/>
     <input onChange={this.handleInputChange} type='text' name='fimage' placeholder= 'imageUrl'/>
    <button type='submit'>Submit</button>
    
   
     </form>
     }else{
       return ''
     }
   
  }
  imGoingSerching =()=> {
   return(
    <input onChange={this.filterFoods} type="text" placeholder='Search' name='Search'/>

   )
  }
  filterFoods = event => {
    console.log(event.target.value)
    let filteredFoodsCopy = this.state.foods.filter(eachFood =>
      eachFood.name.toLowerCase().includes(event.target.value.toLowerCase())
      // loop through the array using filter
      // I'm going to look at the name of each food in lowercase format (toLowerCase())
      // if the name of the food includes (i.e. matches) the searchInput in lowerCase format
      // then return that food to the new filteredFoodsCopy
    )

    this.setState({ 
      filterFoods : filteredFoodsCopy 
    })
  }
  

  render() {
    console.log(this.state)
    return (
      <div className="App">
      <button onClick= {this.toggleFoodForm}> Add Food</button>
        {this.imGoingSerching()}
        {this.showFoodForm()}
        
          
        

        {this.showFoods()}

      </div>
    );
  }
}


export default App;