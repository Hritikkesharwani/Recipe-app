import {React,useState} from 'react';
import './App.css';
import Rightbar from './component/Rightbar.js';
import Header from './component/header.js';
import Surprise from './component/Surprise.js';
import Fullrecipe from './component/fullrecipe.js';
import Category from './component/Category.js';
import {
  
  Routes,
  Route
} from "react-router-dom";
import Allfood from './component/Allfood.js';


export default function App() {
  const [newdata, setnewdata] = useState();
  const [newcat, setnewcat] = useState();
  const [catpath, Setcatpath] = useState();
 
  function createdata(data){
    
      setnewdata(data);
  }

  function createcat(data){
    setnewcat(data);
  }

   function CatName(name){
     console.log(name);
    
      Setcatpath(name);
   }
   
 
  return (
    <div>
      <Header></Header>
     <Rightbar createcat={createcat}></Rightbar>
     <Routes>
      <Route path="/" element={<Surprise  createdata={createdata}/>} />
      <Route path="fullrecipe" element={<Fullrecipe data={newdata}/>} />
      <Route path="category" element={<Category catlist={newcat} newname={CatName} />} />
      <Route path="recipelist" element={<Allfood name={catpath}/>}/>
    </Routes>
     
     
     
     
     



     
    </div>
  );
}



