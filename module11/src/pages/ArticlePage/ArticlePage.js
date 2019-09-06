/* eslint-disable react/prop-types */
import React, { Component, lazy, Suspense } from 'react';
import queryString from 'query-string';
// import CategorySelector from '../../components/CategorySelector/CategorySelector';
import * as articleApi from '../../services/articles-api';

const AsyncCategorySelector = lazy(() =>
  import(
    '../../components/CategorySelector/CategorySelector' /* webpackChunkName: "categorySelector-component" */
  ),
);

const categories = [
  {
    value: 'react',
    label: 'sdbvxbdgbn',
  },
  {
    value: 'css',
    label: 'CSS',
  },
  {
    value: 'javascript',
    label: 'JavaScript',
  },
];

const getCategoryWithValue = (allCategories, value) =>
  allCategories.find(c => c.value === value);

const getCategoryFromLocation = location => {
  // console.log(
  //   'queryString.parse(location.search) :',
  //   queryString.parse(location.search),
  // );
  return queryString.parse(location.search).category;
};

class ArticlePage extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    const { location } = this.props;
    const category = getCategoryFromLocation(location);

    articleApi
      .fetchArticlesInServices(category)
      .then(res => this.setState({ items: res.data.hits }));
  }

  componentDidUpdate(prevProps) {
    const prevCategory = getCategoryFromLocation(prevProps.location);
    const nextCategory = getCategoryFromLocation(this.props.location);

    // console.log('prevCategory: ', prevCategory);
    // console.log('nextCategory: ', nextCategory);

    if (prevCategory !== nextCategory) {
      articleApi
        .fetchArticlesInServices(nextCategory)
        .then(res => this.setState({ items: res.data.hits }))
        .catch(console.log);
    }
  }

  handleCategoryChange = opt => {
    if (opt) {
      return this.props.history.push({
        ...this.props.location,
        search: `category=${opt.value}`,
      });
    }

    this.props.history.push({
      ...this.props.location,
      search: '',
    });
  };

  render() {
    const { items } = this.state;
    const { location } = this.props;
    const qsCategory = getCategoryFromLocation(location);
    const selectedCategory = getCategoryWithValue(categories, qsCategory);

    return (
      <div>
        <h2>Article page</h2>

        <Suspense fallback={<p>Loading...</p>}>
          <AsyncCategorySelector
            options={categories}
            value={selectedCategory}
            onChange={this.handleCategoryChange}
          />
        </Suspense>

        <ul>
          {items.map(el => (
            <li key={el.objectID}>
              <h2>{el.story_title}</h2>
              <p>{el.author}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ArticlePage;
