
import { createSlice } from "@reduxjs/toolkit";

export interface IntialStateType{
    posts:[]|null,
    previousState:[]|null
}

const initialState:IntialStateType={
    posts:null,
    previousState:null
}
const movieSlice=createSlice({
    name:"movie",
    initialState,
    reducers:{
       setPosts:(state:any,action:any)=>
       {
           state.posts=action.payload.data.movies
       },
       emptyState:(state:any,action:any)=>
       {
           const prevState={...state};
           state.previousState=prevState;
           state.posts=null;
       }
       
    }
})

export const {setPosts,emptyState}=movieSlice.actions;
export default movieSlice.reducer