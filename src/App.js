import React,{useEffect,useState} from 'react';
import './App.css';
import Recipe from "./Recipe";

const App = ()=> {
  const APP_ID="3ee74dc6";
  const APP_KEY="31437767853a31fcde2ae9b0787af52c";
  const [recs,setRecipes]=useState([]);
  const[search,setSearch]=useState('');
  const [query,setQuery]=useState('chicken');

  useEffect(()=>{
    getRecipes();
  }, [query]);

  const getRecipes=async()=>{
    const response= await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data=await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch=e=>{
    setSearch(e.target.value);
  }
  const getSearch=e=>{
    e.preventDefault();
    setQuery(search);
    setSearch('')
  }

  return(
    <div className="App">
      <form onSubmit={getSearch} className="searchform">
        <h1>Welcome :3</h1>
        <input className="searchbar" value={search} type="text" onChange={updateSearch} />
        <button className="searchbutton" type="submit">search</button>
      </form>
      <div className="recipess">
      {recs.map(rec=>(
        <Recipe 
          key={rec.recipe.label} 
          title={rec.recipe.label}
          calories={rec.recipe.calories}
          image={rec.recipe.image}
          ingredients={rec.recipe.ingredients}
           />
      ))}
      </div>
    </div>
  );
};

export default App;
