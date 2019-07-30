import React from "react";

const Recipe=({image,title,calories})=>{
    console.log("inside recipe.js")
    console.log({image})
    return(
        <div>
            <h1>{title}</h1>
            <p>{calories}</p>
            <img src={image} alt="" />
        </div>
    );
};

export default Recipe;