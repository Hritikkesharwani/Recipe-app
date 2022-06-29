import {React,useEffect,useState} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import './rightbar.css';
import { Link } from "react-router-dom";
import CategoryIcon from '@material-ui/icons/Category';


export default function Rightbar() {

    


    
  return <div>
      <div className="category-container">
          <h2><CategoryIcon></CategoryIcon> Category</h2>
          
         

                
              <div><List className="list">
      <Link to="/category" className="linkstyle" style={{ textDecoration: 'none'}}> <ListItem  >
           <ListItemText primary= 'Category' ></ListItemText>
       </ListItem></Link>
       </List>
       <List className="list">
       <ListItem >
           <ListItemText primary= '10 Random Meals' ></ListItemText>
       </ListItem>
       
       </List>
       </div>
       
          
      
       </div>
  </div>;
}
