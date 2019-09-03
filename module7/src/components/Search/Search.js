import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    valueInput: '',
  };

  handleChangeInput = event => {
    // console.dir(event.target);
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const { valueInput } = this.state;
    onSubmit(valueInput);
  };

  render() {
    const { valueInput } = this.state;
    return (
      <form onSubmit={this.handleSubmitForm}>
        <input
          name="valueInput"
          type="text"
          value={valueInput}
          onChange={this.handleChangeInput}
        />
      </form>
    );
  }
}

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Search;
