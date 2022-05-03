// Max Petruzziello 
// SER320 Practice 5

import React from "react";
import { Cards } from "./Cards";
import { getRecipes } from "./recipesService";

export class CardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: getRecipes(),
            index: 0,
            total:4
        }; 
    }

    // Delete recipe card and update total
    handleDelete = recipe => {
      const recipes = [...this.state.recipes];
      const total = this.state.total;
      var newTotal = total - 1;
      const newRecipes = recipes.filter(r => r.id !== recipe.id);
      this.setState({recipes: newRecipes, total: newTotal});
  }

    // render heading and cards
    render(){
      const totalRecipes = this.state.total;
      return (
        <div className="container">
          <h1 className="heading py-4 fw-bolder">{this.state.total === 1 ? "There is only 1 recipe..." : `There are  ${totalRecipes} recipes.`}</h1>
          <div className="container d-flex">
           <Cards recipes = {this.state.recipes} onDelete = {this.handleDelete}/>
            </div>
        </div>
      )
    }
}