import React, { useState } from "react";

function FormTodo({ addTodo }) {
	const [value, setValue] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!value) return;
		addTodo(value);
		setValue("");
	};

	/*  
	const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  }; 
  */

	return (
		<form onSubmit={handleSubmit}>
			<div className="input-group mb-3">
				<input
					type="text"
					value={value}
					className="form-control"
					placeholder="Add a task!"
					onChange={(e) => {
						setValue(e.target.value);
					}}
				/>
				<button className="btn btn-outline-light" type="submit">
					+
				</button>
			</div>
		</form>
	);
}

export default FormTodo;