import React from 'react';
import Header from '../src/components/Header'
import Home from '../src/components/Home'
import Login from './components/Login'
import Register from './components/Register'
import { JokesList } from './components/JokesList'
import { PrivateRoute } from './utils/PrivateRoute'
import { BrowserRouter as  Router, Route, Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      
      <div className='headerContainer'>
        <Header />
      <Link to='/'>Home</Link>
      <Route exact path='/' component={Home} />
      <Link to='/login'>login</Link>
      <Route path='/login' component={Login} />
      <Link to='/register'>register</Link>
      <Route path='/register' component={Register} />
       </div>
      <Link to='/jokes'>Jokes</Link>
      <Route path='/jokes' component={JokesList} />
     
      {/* <Home  exact pathto='/'component={Home}/>
      <div className='links'>
              <Link to="/jokes">Users</Link>
              <Link to="/login">Login</Link> 
            </div>
      <Switch>
      <PrivateRoute exact pathto='/jokes'component={JokesList}/>
          <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch> */}
      </Router>
    </div>
  );
}

export default App;
