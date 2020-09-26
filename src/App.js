import React,{useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

// Made new branch so I can submit a pull request

//Warning: each child in a list should have a unique key
//This means: we need a specific key to remove an item without re-rendering everything

const App = () => {
    const APP_ID = "9930994f";
    const APP_KEY = "20adfc0a92281bc09a57cab28da5f991";
 
    const [recipes, setRecipes] = useState([]); //state is an array since we're getting an array of objects from our API
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState('chicken');

    useEffect(() => {
      getRecipes();
    }, [query]);

    const getRecipes = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
      const data = await response.json(); // needs await because we're requesting an external API, don't know when the data will arrive
      setRecipes(data.hits);
      console.log(data.hits);
    };

    // this allows us to actually type something into the search bar!
    const updateSearch = e => {
      setSearch(e.target.value);
    }    

    // e is an "event"
    const getSearch = e => {
      e.preventDefault();
      setQuery(search);
      setSearch('');
    }
    
    return (
      <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">
          Search  
        </button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe 
        key={recipe.recipe.label} //should be unique but we'l use title for now
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
};
export default App;
