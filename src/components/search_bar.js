import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends Component {
 // method declaration unlike tradition Class in JS using colon
  render() {
    // return element input with a property onChange with a certain value
    return <input onChange = {event => console.log(event.target.value)} />;
  }
};

export default SearchBar;
