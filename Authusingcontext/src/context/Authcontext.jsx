import React, {useContext,useReducer,useState} from "react"
export const AppContext=React.createContext();
const intialstate={
    isAuth:false,
    token:null
}

function reducer(state,action){
switch(action.type){
    case "LOGIN_SUCCESS": {
        return {
          ...state,
          isAuth: true,
          token: action.token
        };
      }
      case "LOGIN_UNSUCCESS": {
        return {
          ...state,
          isAuth: false,
          token: null
        };

       
      }
      default: {
        return state;
      }
}
}


export default function AppContextProvider({children}){
    const[state,dispatch]=useReducer(reducer,intialstate)
return(
    <AppContext.Provider value={[state,dispatch]}>{children}</AppContext.Provider>
)
}