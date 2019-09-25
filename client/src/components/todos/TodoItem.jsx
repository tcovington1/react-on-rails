import React from 'react';
import { Header, Checkbox, Button, Icon } from 'semantic-ui-react';


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

const TodoItem = ({ id, todo_name, complete, update, rm }) => (
  <div style={styles.flex}>
    <div style={styles.flex}>
      <Checkbox 
        defaultChecked={complete}
        onClick={() => update(id)}
      />
      <div style={ complete ? styles.complete : {} } className='center'>
    <Header>{todo_name}</Header>
      </div>
    </div>
    <Button
      icon
      color= 'none'
      size='small'
      onClick={() => rm(id)}
      style={{ marginLeft: "50px", marginTop: '5px' }}
    >
      <Icon name='trash' color='red'/>

    </Button>
  </div>
)

export default TodoItem;