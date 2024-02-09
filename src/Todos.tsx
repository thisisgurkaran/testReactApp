import React, { useReducer, useState } from "react";
import { initialState, reducer } from "./TodosReducer";

const Todos: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  const [todoText, setTodoText] = useState<string>("");
  const addTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch({ type: "addTodo", payload: todoText });
  };

  return (
    <div>
      <div>Todos</div>
      <input
        value={todoText}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTodoText(e.target.value)
        }
      />
      <button onClick={addTodo}>Add todo</button>
      {state.todos.map((todo, i) => {
        return (
          <div key={i}>
            <div>{todo.todo}</div>

            <button
              onClick={() => dispatch({ type: "removeTodo", payload: todo.id })}
            >
              x
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
