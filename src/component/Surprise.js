import React,{useState,useEffect} from 'react';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { Link } from "react-router-dom";
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import './surprise.css';

export default function Surprise() {


  return <div><div className="containersur"><h3>To get a random new meal just click on this button below <ArrowDownwardIcon/></h3>
  <button   className="surprise"> 
  <Link to="/fullrecipe"><EmojiEmotionsIcon className="emoji"/>  Surprise me</Link> </button> </div></div>;
}

