import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import axios from 'axios';
import TodoList from './components/todos/TodoList';
import TodoForm from './components/todos/TodoForm';

class App extends Component {
  state = { todos: [] }

  //lifecycle method
  componentDidMount() {
                          //TODO make a call to the rails end to to grab all the todo items
    axios.get('/api/items')
                          //promise
      .then( res => {
                          //TODO set state of todo to the ones we have from db
        this.setState({ todos: res.data })
                                //res.data is the db items
      })
      .catch ( err => {
        console.log(err)
      })
  }

  additem = (incomingTodo) => {
                    //TODO add the new todo in the db  (backend )
    const item = incomingTodo
    axios.post('/api/items', { item })
                    //! this data has to match the api controller, so it must be called item
      .then( res => {
                          //TODO add todo to client state     (front end)
        const { todos } = this.state
        this.setState({ todos: [...todos, res.data] })
                          //adding the data to the front-end state
      })
      .catch ( err => {
        console.log(err)
      })
  }

  updateTODO = (id) => {
    //TODO udpate the todo with id in the db  (backend)
    //TODO update the todo with the id in the state (front end)
  }

  deleteTodo = (id) => {
    //TODO make api call to delete item with id in db (backend)
    //TODO delete item with id in state (frontend)
  }

  render() {
    const { todos } = this.state
    return (
      <Container>
        <TodoForm add={this.additem}/>
        <TodoList todos={ todos } />
      </Container>
    )
  }
}

export default App;
