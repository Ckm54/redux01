import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faUpload } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

import { useAddTodoMutation, useDeleteTodoMutation, useGetTodosQuery, useUpdateTodoMutation } from "../api/apiSlice";

const TodoList = () => {
  const [newTodo, setNewTodo] = useState('');

  const {
    data: todos,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetTodosQuery()

  const [addTodo] = useAddTodoMutation()
  const [updateTodo] = useUpdateTodoMutation()
  const [deleteTodo] = useDeleteTodoMutation()

  const handleSubmit = (e) => {
    e.preventDefault();
    // implement logic to add a todo
    addTodo({userId: 1, title: 'newTodo', completed: false});
    setNewTodo('');
  }

  const newItemSection = 
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-todo">Enter a new todo item:</label>
      <div className="new-todo">
        <input
          type="text"
          id="new-todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new todo"
        />
      </div>
      <button className="submit">
        <FontAwesomeIcon icon={faUpload} />
      </button>
    </form>

  let content;
  // TODO: define conditional content
  if (isLoading) {
    content = <p>Loading...</p>
  } else if (isSuccess) {
    content = todos.map((todo) => (
      <article key={todo.id}>
        <div className="todo">
          
        </div>
      </article>
    ))
  } else if (isError) {
    content = <p>{error}</p>
  }

  return (
    <main>
      <h1>Todo List</h1>
      { newItemSection }
      { content }
    </main>
  )
}

export default TodoList