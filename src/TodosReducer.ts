interface todoObj {
  todos: { id: number; todo: string }[];
  total: number;
}

export const initialState: todoObj = {
  todos: [], // array of obs {id: 23, todo: 'todo'}
  total: 0, // number of total todos
};

export function reducer(state: todoObj, action: any) {
  switch (action.type) {
    case "addTodo":
      const total = state.total + 1;
      const newTodo = { id: total, todo: action.payload };
      return {
        ...state,
        todos: [...state.todos, newTodo],
        total: total,
      };
    case "removeTodo":
      if (state.total === 0) {
        return state;
      }
      const newTotal = state.total - 1;
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.id !== action.payload)],
        total: newTotal,
      };
    default:
      return state;
  }
}
