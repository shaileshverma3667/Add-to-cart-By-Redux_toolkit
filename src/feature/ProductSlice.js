import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getProduct=createAsyncThunk("product/get",async ()=>{
        const {data}=await axios.get("https://fakestoreapi.com/products")
        return data
})


// export const getProduct=()=>{
//       return async function getProductThunk(dispatch,getState){
//            const {data}=await axios.get("https://fakestoreapi.com/products")
//            dispatch(fetchProduct(data))
//       }
// }


const initialState={
    data:[],
    status:"idle"
    
}

const productSlice=createSlice({
    name:"product",
    initialState,
    reducers:{
      // fetchProduct(state,action){
      //   state.data=action.payload
     // }
    },
    extraReducers:(builder)=>{
      builder
      .addCase(getProduct.pending,(state,action)=>{
              state.status="loading"

      })
      .addCase(getProduct.fulfilled,(state,action)=>{
              state.data=action.payload
              state.status="idle"
      })
      .addCase(getProduct.rejected,(state,action)=>{
          state.status="error"
      })
    }
});

 export default productSlice.reducer
export  const {fetchProduct}=productSlice.actions