<template>
	<div class="todo-item">
		<div class="todo-item__check">
			<input type="checkbox" v-model=" todo.done ">
			<p 
			:class="{ done:todo.done }" 
			v-if="!editting"
			>
			{{ todo.title }}
		</p>
		<div v-else >
			<input	
				v-bind:value="todoText"
				@change="todoTextChange"
				type="text"
				@keyup.enter="updateTodo(todo)"
				class="todo-item__check--update"
			/>
		</div>
	</div>
	<div class="todo-item__btn">
		<button 
		@click="updateTodo(todo)" 
		class="todo-item__btn--edit "
		>
		<i class="fas fa-edit btn-blue"></i>
	</button>

	<button @click="clickDelete(todo.id)" class="todo-item__btn--delete "><i class="fas fa-trash-alt btn-red"></i></button>
</div>
</div>
</template>

<script>
	
	export default {

		data() {
			return {
				todoText: "",
				editting: false,
			}
		},

		name: 'TodoItem',
		props: ['todo'],

		methods: {

			//deleteTodo
			clickDelete(id) {
				console.log(id)
				this.$store.dispatch("deleteTodo",id);
			},

			//add todo
			updateTodo(todo) {
				this.editting = this.editting == true ? false : true;
				if(this.editting) {
					this.todoText = todo.title;
				} else {
					todo.title = this.todoText;
				}
			},

			todoTextChange(e) {
				this.todoText = e.target.value;
			},

		}

	};
</script>


