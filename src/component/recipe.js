import React from 'react';
import './recipe.css';


export default function Recipe(props) {
  return <div className="container-recipe">
    <h2>Your dish</h2>
        <h2>{props.data === undefined ? "not found" : props.data.strMeal}</h2>  
        <div>{props.data === undefined ? "not found" : <img src={props.data.strMealThumb} alt='dish img' ></img>}
        </div>
        
        <div><h4>Category : {props.data === undefined ? "not found" : props.data.strCategory}</h4></div>
        <div><h4>Area : {props.data === undefined ? "not found" : props.data.strArea} </h4></div>
        <div><h4>Tags : {props.data === undefined ? "not found" : props.data.strTags}</h4></div>

  </div>;
}
