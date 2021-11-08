import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Books from './components/Books';
import Header from './components/Header';
import Categories from './components/Categories';

const App = () => (
  <Router>
    <div id="App" className="App">
      <Header />
      <Switch>
        <Route path="/books">
          <Books />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
