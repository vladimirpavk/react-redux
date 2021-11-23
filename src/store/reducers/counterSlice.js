import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    value: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: INITIAL_STATE,
    reducers:{
        increment(state){
            return{
                value: state.value + 1
            }
        },
        decrement(state){
            return{
                value: state.value - 1
            }
        },
        increase(state, action){
            return{
                value: state.value + action.value
            }
        },
        decrease(state, action){
            return{
                value: state.value - action.value
            }
        }
    }   
});

export const { increment, decrement, increase, decrease } = counterSlice.actions;
export default counterSlice.reducer;