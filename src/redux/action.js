export const setQuery=(text)=>{
    return {
        type:"SET_SEARCH_INPUT",
        payload : text
      }
}

export const setLogin=(toggle)=>{
    return {
        type:"SET_LOGIN",
        payload : toggle
      }
}


export const setSignup=(toggle)=>{
  return {
      type:"SET_SIGNUP",
      payload : toggle
    }
}
