import React, { useState } from "react";
import Card from "./components/card/Card";
import Input from "./components/input/Input";
import TodoItem from "./components/todo-item/TodoItem";
import TextArea from "./components/input/TextArea";
import Button from "./components/button/Button";
import Modal from "./components/modal/Modal";
import "./App.css";

const TODOS_MOCK = [
  { id: "1", title: "Todo 1", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At id illo repellendus non maiores in pariatur aliquam iure fugit amet!", completed: false },
  { id: "2", title: "Todo 2", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!", completed: false },
  { id: "3", title: "Todo 3", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!", completed: true },
  { id: "4", title: "Todo 4", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!", completed: true },
];

function App() {
  const [todos, setTodos] = useState(TODOS_MOCK);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingTodo, setEditingTodo] = useState(null);

  const activeTodos = todos.filter((t) => !t.completed);
  const completedTodos = todos.filter((t) => t.completed);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "" || description.trim() === "") return;

    if (editingTodo) {
      const updated = todos.map((todo) =>
        todo.id === editingTodo.id
          ? { ...todo, title, description }
          : todo
      );

      setTodos(updated);
      setEditingTodo(null);
    }
    else {
      const newTodo = {
        id: Date.now().toString(),
        title,
        description,
        completed: false,
      };

      setTodos([...todos, newTodo]);
    }

    setIsModalOpen(false);
    setTitle("");
    setDescription("");
  };

  const handleToggleTodo = (id, newCompletedValue) => {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: newCompletedValue } : todo
    );
    setTodos(updated);
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditTodo = (todo) => {
    setEditingTodo(todo);
    setTitle(todo.title);
    setDescription(todo.description);
    setIsModalOpen(true);
  };

  return (
    <div className="App">
      <div className="app-container">

        <Card>
          <h1>My todos</h1>

          <Button onClick={() => {
            setEditingTodo(null);
            setTitle("");
            setDescription("");
            setIsModalOpen(true);
          }}>
            Add +
          </Button>

          <div className="list-container">
            {activeTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                id={todo.id}
                completed={todo.completed}
                title={todo.title}
                description={todo.description}
                onToggle={(value) => handleToggleTodo(todo.id, value)}
                onDelete={() => handleDeleteTodo(todo.id)}
                onEdit={() => handleEditTodo(todo)}
              />
            ))}
          </div>

          <div className="separator"></div>

          <h2>Completed</h2>

          <div className="list-container">
            {completedTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                id={todo.id}
                completed={todo.completed}
                title={todo.title}
                description={todo.description}
                onToggle={(value) => handleToggleTodo(todo.id, value)}
                onDelete={() => handleDeleteTodo(todo.id)}
                onEdit={() => handleEditTodo(todo)}
              />
            ))}
          </div>
        </Card>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2>{editingTodo ? "Edit Todo" : "Add Todo"}</h2>

          <form onSubmit={handleSubmit}>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              type="text"
            />
            <TextArea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
            />
            <Button type="submit">
              {editingTodo ? "Save changes" : "Create"}
            </Button>
          </form>
        </Modal>
      </div>
    </div>
  );
}

export default App;

