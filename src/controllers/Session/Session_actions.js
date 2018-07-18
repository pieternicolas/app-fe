export const signin = (credentials) => {
  return (dispatch) => {
    const modifiedCredentials = {
      id: credentials.email,
      password: credentials.password
    };

    // api.signin(modifiedCredentials)
    // .then(response => {
    //   dispatch(login(Object.assign({}, response.data, credentials, modifiedCredentials, { isLoggedIn: true })));
    // });
  };
};

// export const login = (userData) => {
//   return {
//     type: 'SESSION_LOGIN',
//     data: userData
//   };
// };

export const login = (userData) => ({
  type: 'SESSION_LOGIN',
  data: userData
});

// export const logout = () => {
//   return {
//     type: 'SESSION_LOGOUT'
//   };
// };

export const logout = () => ({
  type: 'SESSION_LOGOUT'
});