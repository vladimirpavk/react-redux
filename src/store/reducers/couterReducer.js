const INITIAL_STATE = {
    value: 0
}

const counterReducer = (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case('increment'):{
            return {
                value: state.value + 1
            }
        }
        case('decrement'):{
            return {
                value: state.value - 1
            }
        }
        case('increase'):{
            return {
                value: state.value + action.value
            }
        }
        case('decrease'):{
            return {
                value: state.value - action.value
            }
        }
        default:{
            return state;            
        }
    }
}

export default counterReducer;