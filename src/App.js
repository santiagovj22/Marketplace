import React from 'react';
import './App.css';
import Login from './pages/login'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import { PrivateRoute } from './components/privateRoute';
import Gestion from './pages/gestion'


class App extends React.Component{
  constructor(props){
    super(props)
    this.state={ value:""}
  }
  render(){

    return (
      <BrowserRouter>
      <Switch>
        <Route exact path = "/login" component = {Login} />

       <PrivateRoute exact path="/gestion" component = {Gestion}/>
       </Switch>
    </BrowserRouter>
    );
  }
}


export default App;
