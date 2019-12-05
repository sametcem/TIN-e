/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'; 
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import Form from './components/layout/Form';
import uuid from 'uuid';


class App extends Component {

  state = {
    fields: {},
    todos: [
      {
        id : uuid.v4(),
        title: 'Do ZPR Homework',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Do TIN Homework',
        completed: true
      },
      {
        id: uuid.v4(),
        title: 'Do BYT Homework',
        completed: false
      }
    ]
  }

  // Toggle Complete todos
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })  });
  }

  // Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  // Add Todo

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState( {todos: [...this.state.todos, newTodo] });
  }

  //Form change
  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };

  render() {

    const mystyle = {
      color: "yellow",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial",
      textAlign: 'center'
    };

    return (
      <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
               
            </React.Fragment>
          )} />

          <Route path='/about' component={About}/>

            <Route exact path="/form" render={props => (
              <React.Fragment>
                <Form onChange={fields => { this.onChange(fields) }} />
                <p style={mystyle}> {JSON.stringify(this.state.fields, null, 2)}</p>

              </React.Fragment>
            )} />

          

          

        </div>
      </div>
      </Router>
    );
  }
}



export default App;
