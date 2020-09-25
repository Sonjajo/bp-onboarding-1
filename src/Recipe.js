import React from "react";
import style from './recipe.module.css';
// ^^ this is how you do custom css for each section!

// pass down props into component
// We're taking things from the state and passing it into the props to the components

//.map is for looping over items
const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img className={style.image}src={image} alt=""/>
        </div>
    );
}

export default Recipe;