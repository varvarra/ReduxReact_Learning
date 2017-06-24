import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

class SearchBar extends Component {
 // method declaration unlike tradition Class in JS using colon
 constructor(props) {
   super(props);
   this.state = {term: ''};
 }
  render() {
    // return element input with a property onChange with a certain value
    return (
      <div>
        <input value = {this.state.term}
        onChange = {event =>  this.setState({ term: event.target.value})} />
      </div>
    )
  }
};

export default SearchBar;
