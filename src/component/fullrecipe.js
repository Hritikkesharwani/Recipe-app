import React,{useState,useEffect} from 'react';
import Recipe from './recipe.js';
import Instruction from './instruction.js';
import Ingrediants from './Ingrediants.js';

export default function Fullrecipe() {

  const [data,setData] = useState();

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php').then(response=>{
        return response.json()
    }).then(data=>{
      console.log(data.meals[0])
      setData(data.meals[0])
      }).catch(err => {
        // Do something for an error here
        console.log("Error Reading data " + err);
      }); 
},([]))

    console.log('from fullrecipe');
    console.log(data);


  return <div>
  <Recipe data={data}></Recipe>
  <Instruction data={data}></Instruction>
  <Ingrediants data={data}></Ingrediants>
  </div>;
}
