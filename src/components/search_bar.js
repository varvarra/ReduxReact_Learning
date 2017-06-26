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
      <div className='search-bar'>
        <input
          value = {this.state.term}
          onChange = {event =>  this.onInputChange(event.target.value)} />
      </div>
    )
  }
  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
};

export default SearchBar;
