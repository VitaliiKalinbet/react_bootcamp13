import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import AboutPage from '../pages/AboutPage/AboutPage';
import ContactPage from '../pages/ContactPage/ContactPage';
import NotFound from './NotFound/NotFound';
import Nav from './Nav/Nav';
import ArticlePage from '../pages/ArticlePage/ArticlePage';

const styleApp = { width: 800, margin: '0 auto' };

class App extends Component {
  state = {};

  render() {
    return (
      <div style={styleApp}>
        <Nav />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/articles/:id" component={ArticlePage} />
          <Route path="/articles" component={ArticlePage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
