import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Index from './components/layouts/Index';
import Lyrics from './components/tracks/Lyrics';
import {Provider} from './context';

function App() {
  return (
    <Provider>
    <Router>
    <Fragment>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path='/' component={Index} />
          <Route exact path='/lyrics/track/:id' component={Lyrics} />
          {/* footer part */}
          <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Footer Content</h5>
                <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2014 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
        </Switch>
      </div>
    </Fragment>
    </Router>
    </Provider>
  );
}

export default App;
