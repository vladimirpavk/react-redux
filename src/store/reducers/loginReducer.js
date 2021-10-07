const INITIAL_STATE = {
    isLoggedIn: false,
    authLevels: []
}

const loginReducer = (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case('logIn'):{
            return {
                isLoggedIn: true,
                authLevels: action.value.user.auth
            }
        }
        case('logOut'):{
            return INITIAL_STATE;
        }
        default:{
            return state;
        }
    }
}

export default loginReducer;