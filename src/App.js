import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Index from './components/layout/Index.js';
import {Provider} from './context.js';
import Lyrics from './components/tracks/Lyrics.js';

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <Navbar />
          <div className= "container">
            <Switch>
              <Route exact path='/' component={Index}/>
              <Route exact path="/lyrics/track/:id" component={Lyrics}/>
            </Switch>
          </div>
        </React.Fragment>
      </Router> 
    </Provider>
    
  );
}

export default App;
