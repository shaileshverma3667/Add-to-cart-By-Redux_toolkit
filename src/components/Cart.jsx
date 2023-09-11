import { useDispatch, useSelector } from 'react-redux'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Remove } from '../feature/CartSlice';


const Cart = () => {
  const AddCard=useSelector(state=>state.cartData)
  const dispatch=useDispatch()

  const RemoveCartData=(id)=>{
    console.log(id)
      dispatch(Remove(id))
  }
  return (
    <div style={{display:"flex", flexWrap:"wrap",gap:"10px", marginTop:"5px",justifyContent:"center"}}>
      {
    AddCard.length!=0 ? AddCard.map((item)=>{
      return(

      <Card sx={{ maxWidth: 325 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={item.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.category}
        </Typography>
        <Typography variant="body" color="text.secondary">
          {item.description.slice(0,150)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button style={{background:"blue",color:"white"}} size="small"><CurrencyRupeeIcon/>{item.price}</Button>
        <Button style={{background:"red",color:"white"}} size="small" onClick={()=>RemoveCartData(item.id)}>Remove to Cart</Button>
      </CardActions>
    </Card>
      )
    })
    :<h1>No Item</h1>
      }
    </div>
    

  )
}

export default Cart