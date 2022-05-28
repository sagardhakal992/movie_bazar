
import { createSlice } from "@reduxjs/toolkit";

export interface IntialStateType{
    posts:String[]
}

const initialState={
    posts:[]
}
const movieSlice=createSlice({
    name:"movie",
    initialState,
    reducers:{
       setPosts:(state:any,action:any)=>
       {
           state.posts=action.payload.results
       } 
    }
})

export const {setPosts}=movieSlice.actions;
export default movieSlice.reducer