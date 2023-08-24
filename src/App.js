import { Todoheader } from "./TodoHeader";
import { Todosearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { TodoButtonAdd } from "./TodoButtonAdd";
import { useState } from "react";

const defaulTodos = [
  {
    text: "Sol radiante: día perfecto para un paseo relajante.",
    completed: true,
  },
  {
    text: "Ríos serpenteantes cruzan bosques de misterio y encanto.",
    completed: false,
  },
  {
    text: "Risas sinceras crean lazos que perduran para siempre.",
    completed: true,
  },
  {
    text: "Sueños tejidos con esperanza se hacen realidad con esfuerzo.",
    completed: false,
  },
  {
    text: "Amanecer dorado ilumina montañas cubiertas de niebla.",
    completed: false,
  },
];

function App() {
  const [todos, setTodos] = useState(defaulTodos);
  const [searchValue, setSearchValue] = useState("");
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const amountOfTodos = todos.length;

  const searchFilter = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
  });

  const completeOn = (text) => {
    const newTodos = [...todos];
    const findIndex = newTodos.findIndex((todo) => todo.text === text);
    if (findIndex !== -1) {
      newTodos[findIndex].completed = !newTodos[findIndex].completed;
      setTodos(newTodos);
    }
  };

  const DeleteOn = (text) => {
    const newTodos = [...todos];
    const findIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(findIndex, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <Todoheader completed={completedTodos} total={amountOfTodos} />
      <Todosearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchFilter.map((item, index) => {
          return (
            <TodoItem
              key={index}
              text={item.text}
              completed={item.completed}
              completeOn={() => completeOn(item.text)}
              DeleteOn={() => DeleteOn(item.text)}
            />
          );
        })}
      </TodoList>
      <TodoButtonAdd />
    </>
  );
}

export default App;
