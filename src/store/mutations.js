export default {
	add_todo( state, todo ) {
		state.todos.push(todo);
		state.newTodos = state.todos;
	},

	delete_todo(state, id) {
		state.todos = state.todos.filter((todo) => todo.id != id);
			// state.newTodos = state.todos;
	},

	delete_All(state) {
		state.todos = [];
	},

	//lay du lieu tu API
	setTodos: (state, todos) => state.todos = todos,

}