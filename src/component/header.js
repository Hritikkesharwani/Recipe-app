import React from 'react';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import './header.css';
import { Link } from "react-router-dom";

export default function Header() {
  return <div className="container">
      <div className="text" ><Link to="/"><h2><FastfoodIcon/> IamHungry</h2></Link></div>
  </div>;
}
