export default {
	add_todo( state, todo ) {
		state.todos.push(todo);
		state.newTodos = state.todos;
	},


	delete_Todo(state, id) {
		for(let i=0;i<state.todos.length;i++){
			if(id === state.todos[i].id){
				state.todos.splice(i,1)
			}
		}
	},

	delete_All(state) {
		state.todos = [];
	},

	//lay du lieu tu API
	setTodos: (state, todos) => state.todos = todos,

}