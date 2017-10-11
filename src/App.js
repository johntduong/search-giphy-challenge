import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = { query: '', result: '' }

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
      this.setState({
        result: data.data[0].images.original.url
      }, () => {
        console.log('AFTER RESULT', this.state);
      })
    })
  }

  handleChange(e) {
    this.setState({
      query: 'http://api.giphy.com/v1/gifs/search?q=' + e.target.value.split(' ').join('+') + '&api_key=dc6zaTOxFJmzC&limit=1'
    }, () => console.log('STATE', this.state))
  }

  handleClick(e) {
    this.makeQuery();
  }

  render() {
    return (
      <div className="App">
        <div>
          <input type="text" onChange={ this.handleChange } />
        </div>
        <div>
          <input
            type="button"
            value="Go"
            onClick={this.handleClick}
          />
        </div>
        <div>
          <img src={this.state.result} />
        </div>
      </div> 
    );
  }
}

export default App;
