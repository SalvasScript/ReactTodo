import "./css/TodoButtonAdd.css";
import PlusIconButton from "./img/PlusIconButton.png";

function TodoButtonAdd() {
  return (
    <button className="buttonaddtodo">
      <img className="buttonaddtodo__PlusIconButton" src={PlusIconButton} />
    </button>
  );
}

export { TodoButtonAdd };
