import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers:{
        increment: (state)=>{
            return {
                value: state.value+1
            }
        },
        decrement: (state)=>{
            return{
                value: state.value-1
            }
        },
        increase: (state, action)=>{
            return{
                value: state.value + action.payload
            }
        },
        decrease: (state, action)=>{
            return{
                value: state.value - action.payload
            }
        }
    }
});

export const counterActions = counterSlice.actions
export default counterSlice.reducer;