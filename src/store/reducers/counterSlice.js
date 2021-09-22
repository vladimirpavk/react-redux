import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        counter: 0
    },
    reducers:{
        increment: (state)=>{
            return {
                counter: state.counter+1
            }
        },
        decrement: (state)=>{
            return{
                counter: state.counter-1
            }
        },
        increase: (state, action)=>{
            return{
                counter: state.counter + action.payload
            }
        },
        decrease: (state, action)=>{
            return{
                counter: state.counter - action.payload
            }
        }
    }
});

console.log(counterSlice);

export const {increment, decrement, increase, decrease} = counterSlice.actions

export default counterSlice.reducer;