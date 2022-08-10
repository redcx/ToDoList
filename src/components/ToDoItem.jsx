import React, { useState } from "react";

function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);

  function handleClick() {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }

  function ctrlClicked() {
    if (window.event.ctrlKey === true) {
      <div onClick={props.ctrlPressed(props.id)}></div>;
    } else {
      handleClick();
    }
  }

  return (
    <div onClick={ctrlClicked}>
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;
