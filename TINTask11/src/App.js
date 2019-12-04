/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */


import React,{Component} from 'react';
import './App.css';
import Form from './Form'
import Layout from './Components/Layout';

class App extends Component {

  state = {
    fields : {}
  }

  onChange = updatedValue => {
    this.setState({
      fields : {
      ...this.state.fields,
      ...updatedValue
      }
    });
  };


  render() {
    return (
      <div className="App">
        <Layout 
          footer="This is a default text...."
          />
        <Form onChange={fields => {this.onChange(fields)}}/>
        
        <p> {JSON.stringify(this.state.fields, null, 2) }</p>
      </div>
    );
  }
  }
  

export default App;
