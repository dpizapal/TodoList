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
		<div className="container border border-dark bg-secondary text-center w-50 mt-5 pt-2 pb-4">
			<h1 className="fw-light mt-2">What's the Plan for Today?</h1>
			<h3 className="fw-light mt-3">Tasks: {todos.length}</h3>
			<FormTodo addTodo={addTodo} />
			<div className="todo-app">
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
