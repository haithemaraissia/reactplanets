import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import './App.css';
import logo from './logo.svg';
import {Home, NotFound} from '../'

class App extends Component {
  render() {
    return (
      <div className="app">
      <header className="App-header text-center">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title ">React Planets</h1>
      </header>
        <div className="container mt-4">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
