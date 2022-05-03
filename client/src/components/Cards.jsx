// Max Petruzziello 
// SER320 Practice 5

import React from "react";

export class Cards extends React.Component {

    render(){
        const { recipes } = this.props;
        return (
            <div className="row py-4 px-4 w-100">
                {recipes.map((recipe,index) => (
                    <div className="col-3">
                        <div className="card w-100">
                            <div className="card-body text-start">
                                <h5 className="card-title">{recipe.name}</h5>
                                <p className="card-text">{recipe.summary}</p>
                                <button 
                                onClick={() => this.props.onDelete(recipes[0])}
                                className="btn btn-danger btn-sm"
                                >Delete Recipe</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}