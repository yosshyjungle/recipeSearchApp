import './App.css';
import React, { useEffect, useState } from 'react'
import Recipe from './Recipe';

function AppEffect() {

    const APP_ID = '85e18b1e';
    const APP_KEY = '367d3e59b5a4c8cac5aca7f6f5ebfc97';

    const [ search, setSearch ] = useState("");
    const [ query, setQuery ] = useState("banana");
    const [ recipes, setRecipes ] = useState([]);

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q="${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        setRecipes(data.hits);
        // console.log(data.hits)
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }
    
    const updateSearch = e => {
        setSearch(e.target.value);
    }
    useEffect(()=>{
        getRecipes();
    },[query]);
    
  return (
    <div className='App'>
        <form action="#" onSubmit={getSearch}>
            <input type="text" value={search} onChange={updateSearch} />
            <button type='submit'>検索</button>
        </form>
        <div>
            {recipes.map(recipe=>(
                <Recipe 
                    key={recipe.recipe.label}
                    title={recipe.recipe.label}
                    calories={recipe.recipe.calories}
                    image={recipe.recipe.image}
                    ingredients={recipe.recipe.ingredients}
                    />
            ))}
            
        </div>
    </div>
  )
}

export default AppEffect