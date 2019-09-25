import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import axios from 'axios';
import TodoList from './components/todos/TodoList';
import TodoForm from './components/todos/TodoForm';
import Footer from './components/todos/Footer';

class App extends Component {
  state = { todos: [], filter: 'All'  }

  setFilter = (filter) => {
    this.setState({ filter })
  }

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

  addItem = (incomingTodo) => {
                    //TODO add the new todo in the db  (backend )
    const item = incomingTodo
    axios.post('/api/items', { item })
                    //! this data has to match the api controller, so it must be called item
      .then( res => {
                          //add todo to client state     (front end)
        const { todos } = this.state
        this.setState({ todos: [...todos, res.data] })
                          //adding the data to the front-end state
      })
      .catch ( err => {
        console.log(err)
      })
  }
      //this will change complete on and off
  updateTodo = (id) => {
                      // udpate the todo with id in the db  (backend)
    axios.put(`/api/items/${id}`)
      .then( res => {
        //TODO update the todo with the id in the state (front end)
        // const { todos } = this.state
        const todos = this.state.todos.map(t => {
          if (t.id === id)
            return res.data
           return t 

        })
                    // todos: todos
        this.setState({ todos })
      })
      .catch ( err => {
        console.log(err)
      })
  }

  deleteTodo = (id) => {
                  // make api call to delete item with id in db (backend)
    axios.delete(`/api/items/${id}`)
      .then( res => {
                // delete item with id in state (frontend)
        const { todos } = this.state
        this.setState({ todos: todos.filter( t => t.id != id) })        

      })
      .catch ( err => {
        console.log(err)
      })
  }
  handleClick = (id) => {
    const { todos } = this.state
    this.setState({
      todos: todos.map( todo => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete
          }
        }
        return todo
      })
    })
  }

  visibleItems = () => {
    const { todos, filter } = this.state;
    switch(filter) {
      case 'Active':
        return todos.filter( t => !t.complete )
      case 'Complete':
        return todos.filter( t=> t.complete )
      default:
        return todos;
    }
  }

  render() {
    const { todos, filter } = this.state
    return (
      <Container style={{ paddingTop: "50px" }}>
        <Footer filter={filter} setFilter={this.setFilter} />
        <TodoForm add={this.addItem}/>
        <TodoList 
        todos={this.visibleItems()} 
        update={this.updateTodo} 
        rm={this.deleteTodo}
        todoClick={this.handleClick}
        />
      </Container>
    )
  }
}

export default App;
