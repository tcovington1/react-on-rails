import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

class App extends Component {
  state = { todos: [] }

  //lifecycle method
  componentDidMount() {
    //TODO make a call to the rails end to to grab all the todo items
    //TODO set state of todo to the ones we have from db
  }

  additem = (incomingTodo) => {
    //TODO add the new todo in the db  (backend )
    //TODO update client state     (front end)
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
    return (
      <Container>

      </Container>
    )
  }
}

export default App;
