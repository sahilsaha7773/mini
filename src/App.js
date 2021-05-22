import { Box } from '@material-ui/core';
import { 
  Route, 
  HashRouter as Router, 
  Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import ShortUrl from './Components/ShortUrl';
function App() {
  return (
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/signup'>
            <Register/>
          </Route>
          <Route path='/:short'>
            <ShortUrl/>
          </Route>
          
        </Switch>
      </Router>
  );
}

export default App;
