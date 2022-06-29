import React,{useState,useEffect} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import './Allfood.css';
export default function Allfood(props) {


    const [meallist,setMeallist] = useState([]);

  useEffect(() =>{
      fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c='+props.name).then(response=>{
          return response.json();
      }).then(data => {setMeallist(data.meals)})
  }
  ,([]))

  function handleclick(){

  }

  return <div><div className="mainbody" >
      {meallist.map((item)=>{
          return ( <Card className="cardcont recipecont"   >
          <CardActionArea>
            <CardMedia className="cardmedia"
              component="img"
              alt="Food image"
              height="100"
              image={item.strMealThumb}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography  className="titlearea" gutterBottom variant="h5" component="h2">
                {item.strMeal}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions >
          <Link style={{ textDecoration: 'none' }}  to={"/recipe"}>
        <Button value={item.idMeal} size="small" color="primary" onClick={handleclick} >
          <h5 >View Recipe</h5>
        </Button></Link>
      </CardActions>
          
        </Card>)
      })}
      
  </div></div>;
}
