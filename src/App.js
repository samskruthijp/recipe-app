import React,{useEffect,useState} from 'react';
import './App.css';
import Recipe from "./Recipe";

const App = ()=> {
  const APP_ID="3ee74dc6";
  const APP_KEY="31437767853a31fcde2ae9b0787af52c";
  const [recs,setRecipes]=useState([])
  useEffect(()=>{
    getRecipes();
  }, []);

  const getRecipes=async()=>{
    const response= await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data=await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  return(
    <div className="App">
      <form className="searchform">
        <h1>Welcome :3</h1>
        <input className="searchbar" type="text" />
        <button className="searchbutton" type="submit">search</button>
      </form>
      {recs.map(rec=>(
        <Recipe 
          key={rec.recipe.label} 
          title={rec.recipe.label}
          calories={rec.recipe.calories}
          image={rec.recipe.image}
           />
      ))}
    </div>
  );
};

export default App;
