import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Restaurant.css'

const Restaurant = () => {
   const [searchText, setsearchText] =useState('');
   const [ meals , setMeals] = useState([]);
  
   useEffect(() => {
       const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
     fetch (url)
     .then(res => res.json())
     .then (data => setMeals(data.meals))


    } ,[searchText])


 const searchFood =e => {
     setsearchText(e.target.value);

 }
    return (
        <div>

            <h2> search your food </h2>
            <input onChange={searchFood} type="text"name="" id='' />
            <br />
            <h2> Result found: {meals.length}</h2>
            <div className='meals-container'>
    {
        meals.map(meal =>  <Meal key={meal.idMeal} meal={meal}> </Meal> )
    }


            </div>
     
        </div>
    );
};

export default Restaurant;