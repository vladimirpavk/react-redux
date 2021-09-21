const INITIAL_STATE = {
    counter: 0
}

const reducer = (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case "increment": {
            return {
                counter: state.counter+1
            };;     
        }
        case "decrement": {
            return{
                counter: state.counter-1
            }
        }
        case "increase":{
            return{
                counter: state.counter + action.payload
            }
        }
        case "decrease":{
            return{
                counter: state.counter - action.payload
            }
        }
        default: {
            return INITIAL_STATE        
        }
    }
}

export default reducer;