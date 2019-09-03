import React, { Component } from 'react';
import ArticleList from './ArticleList/ArticleList';
import * as articlesApi from '../services/articles-api';
import Search from './Search/Search';
import Loader from './Loader/Loader';
import CategorySelector from './CategorySelector/CategorySelector';

// console.log('articlesApi :', articlesApi);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      isLoading: false,
      category: '',
    };
  }

  componentDidMount() {
    // fetch(API_URL + DEFAULT_QUERY)
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data);
    //     this.setState({
    //       articles: data.hits,
    //     });
    //   })
    //   .catch(console.log);
    // ====================
    // axios
    //   .get(API_URL + DEFAULT_QUERY)
    //   .then(res => {
    //     console.log('before');
    //     setTimeout(
    //       this.setState(
    //         {
    //           articles: res.data.hits,
    //         },
    //         () => console.log('after setState'),
    //       ),
    //       10000,
    //     );
    //     console.log('after');
    //   })
    //   .catch(console.log);
    // ===============
    this.fetchArticlesAsyncAwait();
    // this.fetchArticlesThenCatch();
  }

  // fetchArticlesThenCatch = () => {
  //   articlesApi
  //     .fetchArticlesInServices()
  //     .then(res =>
  //       this.setState({
  //         articles: res.data.hits,
  //       }),
  //     )
  //     .catch(err => {
  //       throw err;
  //     });
  // };

  componentDidUpdate(prevProps, prevState) {
    const { category } = this.state;
    if (prevState.category !== category) {
      this.fetchArticlesAsyncAwait(category);
    }
  }

  fetchArticlesAsyncAwait = async query => {
    this.setState({
      isLoading: true,
    });
    const responce = await articlesApi.fetchArticlesInServices(query);
    this.setState({
      articles: responce.data.hits,
      isLoading: false,
    });
  };

  handleCategoryChange = e => {
    this.setState({ category: e.target.value });
  };

  render() {
    const { articles, isLoading, category } = this.state;
    return (
      <div>
        <Search onSubmit={this.fetchArticlesAsyncAwait} />
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
