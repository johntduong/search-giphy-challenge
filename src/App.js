import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      query: '', 
      result: '', 
      styles: {
        buttonStyle: { 
          margin: 12,
        },
        underlineStyle: {
          borderColor: orange500,
        },
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.makeQuery = this.makeQuery.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  makeQuery(callback) {
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
          <TextField
            hintText="What would you like to search for?" 
            onChange={ this.handleChange }
            underlineStyle={ this.state.styles.underlineStyle }
          />
        </div>

        <div>
          <RaisedButton 
            label="GO" 
            style={ this.state.styles.buttonStyle } 
            onClick={ this.handleClick } 
          />
        </div>
        <div>
          <img 
            src={ this.state.result } 
          />
        </div>
      </div> 
    );
  }
}

export default App;
