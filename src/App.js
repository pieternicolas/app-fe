import React from 'react';
import { Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'Assets/css/index.css';

import 'Assets/js/fontawesome-all.min.js';

// import Home from 'containers/Home';
import Login from 'Views/Login';
import Homepage from 'Views/Homepage';


const App = (props) => {
  return (
    <Homepage/>
  )
};


export default App;

// <Switch>
//       <Route path="/" component={Home}></Route>
//     </Switch>