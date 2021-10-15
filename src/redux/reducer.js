const initialState =
{
    query : "",
    showLogin : false,
    showSignup : false
}

export const reducer=(state=initialState, {type,payload})=>{
switch(type)
{
    case "SET_SEARCH_INPUT":
    return{...state, query : payload}

    case "SET_LOGIN":
    return{...state, showLogin : payload}

    case "SET_SIGNUP":
    return{...state, showSignup : payload}

    default:
    return state
}
}
