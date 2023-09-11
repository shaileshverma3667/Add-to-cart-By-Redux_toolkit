import React, { useEffect, useState } from 'react'
import MediaCard from './MediaCard'
import axios from 'axios'
import { getProduct } from '../feature/ProductSlice'
import { useDispatch, useSelector } from 'react-redux'

const Product = () => {
  const dispatch=useDispatch()

  const {data,status}=useSelector(state=>state.product)

  useEffect(()=>{
  dispatch(getProduct())
  },[])

  if(status==="loading"){
    return <h2>Loading....</h2>
  }
  if(status==="error")
  {
    return <h2>Something went wrong! please try again</h2>
  }
  return (
    <div style={{display:"flex", flexWrap:"wrap",gap:"10px",justifyContent:"center", marginTop:"5px"}}>
     { data.length && data.map((ele,index)=>{
        return <MediaCard ele={ele}/>
      })
    }
    </div>
  
  )
}

export default Product