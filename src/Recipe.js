import React from "react";

const Recipe=({image,title,calories,ingredients})=>{
    console.log("inside recipe.js")
    console.log({image})
    return(
        <div>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ing=>(
                    <li>{ing.text}</li>)
                )}
            </ol>
            <p>Calories: {calories}</p>
            <img src={image} alt="" />
        </div>
    );
};

export default Recipe;