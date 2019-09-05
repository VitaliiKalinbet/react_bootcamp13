import React, { Component } from 'react';
import ArticleList from './ArticleList/ArticleList';
import * as articlesApi from '../services/articles-api';
import Search from './Search/Search';
import Loader from './Loader/Loader';
import CategorySelector from './CategorySelector/CategorySelector';
import ErrorNotifications from './ErrorNotifications/ErrorNotifications';

class App extends Component {
  state = {
    articles: [],
    isLoading: false,
    category: '',
    errorObj: {},
  };

  componentDidMount() {
    this.fetchArticlesThenCatch();
  }

  componentDidUpdate(prevProps, prevState) {
    const { category } = this.state;
    if (prevState.category !== category) {
      this.fetchArticlesThenCatch(category);
    }
  }

  fetchArticlesThenCatch = () => {
    this.setState({ isLoading: true });
    articlesApi
      .fetchArticlesInServices()
      .then(res =>
        this.setState({
          articles: res.data.hits,
        }),
      )
      .catch(err => {
        this.setState({
          errorObj: err,
        });
      })
      .finally(() =>
        this.setState({
          isLoading: false,
        }),
      );
  };

  handleCategoryChange = e => {
    this.setState({ category: e.target.value });
  };

  render() {
    const { articles, isLoading, category, errorObj } = this.state;
    return (
      <div>
        {errorObj.message && <ErrorNotifications text={errorObj.message} />}
        <ErrorNotifications />
        <Search onSubmit={this.fetchArticlesThenCatch} />
        <CategorySelector
          value={category}
          onChange={this.handleCategoryChange}
        />
        {isLoading ? <Loader /> : <ArticleList articles={articles} />}
      </div>
    );
  }
}

export default App;
