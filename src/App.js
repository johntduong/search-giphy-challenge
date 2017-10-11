import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = { query: ''}

    this.handleChange = this.handleChange.bind(this);
    this.makeQuery = this.makeQuery.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  makeQuery(callback) {
    console.log('HELLO', this.state)
    fetch(this.state.query, {
      method: 'GET'
    })
    .then((response) => { 
      return response.json();
    })
    .then((responseData) => {
      return responseData;
    })
    .then((data) => {
      callback(data);
    })
  }

  handleChange(e) {
    this.setState({
      query: 'http://api.giphy.com/v1/gifs/search?q=' + e.target.value + '&api_key=dc6zaTOxFJmzC&limit=1'
    }, () => console.log(this.state));
  }

  handleClick(e) {
    // call makeQuery with query string
    // due to async, can't use handleclick to create query string with captured input value then call makeQuery function
    this.makeQuery(console.log);
    // may need to create a new component that renders under form with JSX displaying tiles of found images from giphy
  }

  render() {
    return (
      <div className="App">
        <div>
          <input type="text" onChange={ this.handleChange } />
          <input
            type="button"
            value="Go"
            onClick={this.handleClick}
          />
        </div>
      </div> 
    );
  }
}

export default App;
