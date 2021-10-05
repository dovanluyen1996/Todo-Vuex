//call API
import axios from "axios"
const resource_url = "https://jsonplaceholder.typicode.com/todos?_limit=4";

export default {

	async fetchTodos({ commit }) {
        const response = await axios.get(resource_url);    
        commit('setTodos', response.data);
    },

	async addTodo( {commit} , todo) {
		const respon = await axios.post(resource_url, todo)
		commit("add_todo", respon.data);
	},

	// updateTodo( {commit} , todo) {
	// 	commit("update_todo", todo);
	// },

	async deleteTodo( {commit} , id) {
		commit("delete_todo", id);
	},

	async deleteAll( {commit} , id) {
		commit("delete_All", id);
	},

}