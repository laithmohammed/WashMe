import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Indexpage from './components/index';
import Login from './components/login';
import Register from './components/register';
import Startup from './components/startup';
import Selection from './components/selection';
import Track from './components/track';
import History from './components/history';
import Detail from './components/details';
import Dash from './provider/dashboard';


class App extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path='/' component={Indexpage}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path='/startup' component={Startup}/>
          <Route path='/selection' component={Selection}/>
          <Route path='/track' component={Track}/>
          <Route path='/history' component={History}/>
          <Route path='/detail' component={Detail}/>
          <Route path='/dash' component={Dash}/>



        </React.Fragment>
      </Router>
    );
  }
}

ReactDOM.render(<App/>,document.getElementById('demo'));