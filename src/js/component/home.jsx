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
		
		<div id="Box" className="container border rounded border-dark bg-secondary text-center  mt-5 pt-2 pb-4">
			<h2 className="fw-light mt-2">What's the Plan for Today?</h2>
			<h3 className="fw-light mt-3 rounded">Tasks: {todos.length}</h3>
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
