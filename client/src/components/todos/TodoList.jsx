import React from 'react';
import TodoItem from './TodoItem'

const TodoList = ({ todos }) => (
  <div>
    {
      todos.map( todo => 
        <TodoItem 
        key={todo.id}
        {...todo}
        />
      )
    }
  </div>
)

export default TodoList;