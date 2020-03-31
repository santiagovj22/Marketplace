import React from 'react';
import './App.css';
import Login from './pages/login'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

class App extends React.Component{
  render(){

    return (
      <BrowserRouter>
      <Switch>
        <Route path = "/login" component = {Login} />
       </Switch>
    </BrowserRouter>
    );
  }
}


export default App;
