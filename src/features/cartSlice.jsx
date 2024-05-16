import {createSlice} from '@reduxjs/toolkit';

const initialState = {

    cart : [],
    total: 0
}

const cartSlice = createSlice()
{
   name : 'counter',
   initialState,
   reducers: {

       increment: (state)  =>{
        state.value += 1;
       },
       decrement: (state) =>{
        state.value -= 1;
       }
       
   }
}