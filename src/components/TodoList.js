import React from 'react';
import style from './TodoList.css';
import Item from './Todo';

const TodoList = props => {
  const todoListElements = props.todolist.map(element => 
    <Item key={element.id} id={element.id} remove={props.remove.bind(this)} name={element.text} />)
    return (
      <ul className={style.TodoList}>{todoListElements}</ul>
    )
}

export default TodoList;
