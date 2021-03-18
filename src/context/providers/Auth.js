import React, {createContext, useReducer} from 'react';
import authReducer from '../reducers/auth';

export const AuthContext = createContext();

function AuthProvider(props) {
  const initialState = {
    auth: false,
    data: {},
  };
  const [state, dispatch] = useReducer(authReducer, initialState);
  const options = {
    state, dispatch,
  };
  return (
    <AuthContext.Provider value={options}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
