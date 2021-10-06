<template>
	<div class="todo-app">
		<h1>Todo List</h1>
		<div class="form-add">
			<input 
				class="form-add__item" 
				type="text" 
				v-model="todoText"
				@keyup.enter="addTodos"
			>
			<button class="form-add__click" @click="addTodos"><i class="fas fa-plus"></i></button>
		</div>
		<todo-item 
			v-for=" (todo,index) in allTodos " 
			v-bind:key="index.id" 
			v-bind:todo="todo" 
			v-bind:done="done"
		/>
		
		<button class="btn-clear btn-red" @click="deleteAll">Clear All</button>
	</div>
</template>

<script>
	import TodoItem from "./TodoItem"
	import { v1 } from "uuid" //gan id cho moi item duoc add vao
	import { mapActions,mapGetters } from "vuex"
	export default {

		name: 'Todo',

		data() {
			return {
				todoText: ""
			};
		},

		computed: {
			...mapGetters(["allTodos"]),
		},

		methods: {
			...mapActions(['addTodo','deleteAll', 'fetchTodos']),

			addTodos(){
				this.addTodo({
					id: v1(),
					title: this.todoText,
					completed: false
				});
				this.todoText = "";
			},
		},

		//hien thi ds todo API
		created() {
			this.fetchTodos()
		},

		components: {
			TodoItem
		}

	};
</script>

