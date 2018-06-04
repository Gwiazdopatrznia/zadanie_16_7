import React from 'react';
import style from './Todo.css';

const Item = props => <li id={props.id} onClick={() => props.remove(props.id)}>{props.name}</li>;

export default Item;
