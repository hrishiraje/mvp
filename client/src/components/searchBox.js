// var React = require('react');
import React from 'react';

class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: null
    }
  }

  textHandler(event) {
    this.setState({
      searchTerm: event.target.value
    });
  }

  submitHandler() {
    this.props.submitHandler(this.state.searchTerm);
  }

  render() {

    return(<div>
      <input type="text" onChange={this.textHandler.bind(this)} />
      <input type="submit" value="Search" onClick={this.submitHandler.bind(this)} />
      </div>);

  }

};

export default SearchBox;

