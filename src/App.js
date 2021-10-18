import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/users"> Users </Link>
        <Switch>
          <Route path="/users/:id" render={ (props) => <Users {...props} 
            greetingsMessage="Good Morning"
          /> } />
          <Route path="/about" component={ About } />
          <Route exact path="/" component={ Home } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
