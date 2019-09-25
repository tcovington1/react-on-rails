import React from 'react';
import { Header, Checkbox } from 'semantic-ui-react';


const styles = {
  flex: {
    display: 'flex',
    alignItems: 'center',
  },
  complete: {
    textDecoration: 'line-through',
    color: 'red',
  },
  pointer: {
    cursor: 'pointer',
  }
}

const TodoItem = ({ id, todo_name, complete }) => (
  <div style={styles.flex}>
    <div style={styles.flex}>
      <Checkbox 
        defaultChecked={complete}
      />
      <div style={ complete ? styles.complete : {} } className='center'>
    <Header>{todo_name}</Header>
      </div>
    </div>
  </div>
)

export default TodoItem;