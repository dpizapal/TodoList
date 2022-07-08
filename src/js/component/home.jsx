import React from "react";
import { useState } from "react";
import FormTodo from "./formtodo";
import Todo from "./todo";

//create your first component
const Home = () => {
	const [todos, setTodos] = useState([]);

	const addTodo = (text) => {
		const newTodos = [...todos, { text }];

		setTodos(newTodos);
	};

	const markTodo = (index) => {
		const newTodos = [...todos];
		newTodos[index].isDone = true;
		setTodos(newTodos);
	};

	const removeTodo = (index) => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};

	return (
		<div className="container border border-dark text-center w-50 mt-5">
			<h1 className="fw-light">To-Do List</h1>
			<h3 className="fw-light">Tasks: {todos.length}</h3>
			<FormTodo addTodo={addTodo} />
			<div>
				{todos.map((todo, index) => (
					<Todo
						key={index}
						index={index}
						todo={todo}
						markTodo={markTodo}
						removeTodo={removeTodo}
					/>
				))}
			</div>
		</div>
	);
};

export default Home;
