import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import withPermit from './withPermit';
import withoutLog from './withoutLog';
import indexpage from './indexpage';
import Login from './components/login';
import Register from './components/register';
import Startup from './components/startup';
import Selection from './components/selection';
class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path='/' component={indexpage()}/>
          <Route path='/login' component={withoutLog(Login)}/>
          <Route path='/register' component={withoutLog(Register)}/>
          <Route path='/startup' component={withPermit(Startup)}/>
          <Route path='/selection' component={withPermit(Selection)}/>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
