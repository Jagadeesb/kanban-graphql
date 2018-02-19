import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Boards from './Boards';
import CreateBoard from './CreateBoard';
import './../styles/App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
         <div className="ph3 pv1 background-gray">
          <Switch>
            <Route exact path="/" component={Boards} />
            <Route exact path="/create" component={CreateBoard} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
