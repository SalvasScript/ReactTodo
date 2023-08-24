import { CheckIcon } from "./CheckIcon";
import { DeleteIcon } from "./DeleteIcon";
import "./css/TodoItem.css";

function TodoItem(props) {
  return (
    <li className="todoItem">
      <span
        onClick={props.completeOn}
        className={`todoItem__icon todoItem__icon--check ${
          props.completed && "todoItem__icon--checkactive"
        }`}
      >
        {" "}
        <CheckIcon />
      </span>
      <p className="todoItem__text">{props.text}</p>
      <span
        onClick={props.DeleteOn}
        className="todoItem__icon todoItem__icon--delete"
      >
        {" "}
        <DeleteIcon />
      </span>
    </li>
  );
}

export { TodoItem };
