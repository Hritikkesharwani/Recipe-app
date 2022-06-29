
import {React,useEffect,useState} from 'react';
import './Category.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

import Typography from '@material-ui/core/Typography';

export default function Category(props) {

  const [catlist,setCatlist] = useState([]);
  const [catName,SetCatname] = useState();

  useEffect(() =>{
      fetch('https://www.themealdb.com/api/json/v1/1/categories.php').then(response=>{
          return response.json();
      }).then(data => {setCatlist(data.categories)})
  }
  ,([]))


function handleclick(event) {
  
     let name = event.target.parentNode.parentNode.value
   props.newname(name);
}
     

  return <div><div className="mainbody">
      {catlist.map((item)=>{
          return ( <Card className="cardcont"  >
          <CardActionArea>
            <CardMedia className="catcardmedia"
              component="img"
              alt="Food image"
              height="140"
              image={item.strCategoryThumb}
              title="Contemplative Reptile"
            />
            <CardContent className="catcardcontent">
              <Typography gutterBottom variant="h5" component="h2">
                {item.strCategory}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {item.strCategoryDescription.substr(0,230)}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions >
          <Link style={{ textDecoration: 'none' }}  to={"/recipelist"}>
        <Button value={item.strCategory} size="small" color="primary" onClick={handleclick} >
          <h5 >Learn More</h5>
        </Button></Link>
      </CardActions>
          
        </Card>)
      })}
     
    
    
    
    </div></div>;
}
