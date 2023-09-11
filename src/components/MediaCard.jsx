import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useDispatch } from 'react-redux';
import { add } from '../feature/CartSlice';
export default function MediaCard({ele}) {
const dispatch=useDispatch()
const [color,setColor]=useState("blue")
const AddItem=(product)=>{
  //dispatch an add action
     dispatch(add(product))
}
  return (
    <Card sx={{ maxWidth: 325 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={ele.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {ele.category}
        </Typography>
        <Typography variant="body" color="text.secondary">
          {ele.description.slice(0,150)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button style={{background:"blue",color:"white"}} size="small"><CurrencyRupeeIcon/>{ele.price}</Button>
        <Button style={{background:color,color:"white"}} size="small" onClick={()=>{AddItem(ele);setColor("green")}}>Add to Cart</Button>
      </CardActions>
    </Card>
  );
}
