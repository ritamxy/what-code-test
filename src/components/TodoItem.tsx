import React from "react";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  title: string;
  content: string;
  onRemoveTodo: () => void;
}> = (props) => {
  return (
    <div className={classes.items}>
      <li className={classes.item}>{props.title}</li>
      <li className={classes.item}>{props.content}</li>
      <button onClick={props.onRemoveTodo}>Delete</button>
    </div>
  );
};

export default TodoItem;
