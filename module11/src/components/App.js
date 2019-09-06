import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
// import HomePage from '../pages/HomePage/HomePage';
// import AboutPage from '../pages/AboutPage/AboutPage';
// import ContactPage from '../pages/ContactPage/ContactPage';
// import ArticlePage from '../pages/ArticlePage/ArticlePage';
// import NotFound from './NotFound/NotFound';
import Loader from './Loader/Loader';
import Nav from './Nav/Nav';

const AsyncHomePage = lazy(() =>
  import('../pages/HomePage/HomePage' /* webpackChunkName: "home-page" */),
);

// const AsyncHomePage = Loadable({
//   loader: () =>
//     import('../pages/HomePage/HomePage' /* webpackChunkName: "home-page" */),
//   loading: Loader,
// });

const AsyncAboutPage = Loadable({
  loader: () =>
    import('../pages/AboutPage/AboutPage' /* webpackChunkName: "about-page" */),
  loading: Loader,
  timedOut: 2000,
});

const AsyncContactPage = Loadable({
  loader: () =>
    import(
      '../pages/ContactPage/ContactPage' /* webpackChunkName: "contact-page" */
    ),
  loading: Loader,
});

const AsyncArticlePage = Loadable({
  loader: () =>
    import(
      '../pages/ArticlePage/ArticlePage' /* webpackChunkName: "article-page" */
    ),
  loading: Loader,
});

const AsyncNotFoundPage = Loadable({
  loader: () =>
    import('./NotFound/NotFound' /* webpackChunkName: "notFound-page" */),
  loading: Loader,
});

const styleApp = { width: 800, margin: '0 auto' };

class App extends Component {
  state = {};

  render() {
    return (
      <div style={styleApp}>
        <Nav />
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route path="/" exact component={AsyncHomePage} />
            <Route path="/about" exact component={AsyncAboutPage} />
            <Route path="/contact" component={AsyncContactPage} />
            {/* <Route path="/articles/:id" component={ArticlePage} /> */}
            <Route path="/articles" component={AsyncArticlePage} />
            <Route component={AsyncNotFoundPage} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default App;
