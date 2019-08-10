import React from "react";
import style from "./recipe.module.css";
const Recipe=({image,title,calories,ingredients})=>{
    console.log("inside recipe.js")
    console.log({image})
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ing=>(
                    <li>{ing.text}</li>)
                )}
            </ol>
            <p>Calories: {calories}</p>
            <img className={style.image} src={image} alt="" />
        </div>
    );
};

export default Recipe;