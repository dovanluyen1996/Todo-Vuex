<template>
	<div class="todo-item">
		<div class="todo-item__check">
			<input type="checkbox" v-model=" todoProps.done ">
			<p 
			:class="{ done:todoProps.done }" 
			v-if="!editting"
			>
			{{ todoProps.title }}
		</p>
		<div v-else >
			<input	
				v-bind:value="todoText"
				@change="todoTextChange"
				type="text"
				@keyup.enter="updateTodo(todoProps)"
				class="todo-item__check--update"
			/>
		</div>
	</div>
	<div class="todo-item__btn">
		<button 
			@click="updateTodo(todoProps)" 
			class="todo-item__btn--edit "
		>
		<i class="fas fa-edit btn-blue"></i>
	</button>

	<button @click="deleteTodo(todoProps.id)" class="todo-item__btn--delete "><i class="fas fa-trash-alt btn-red"></i></button>
</div>
</div>
</template>

<script>
	import { mapActions } from "vuex"
	export default {

		data() {
			return {
				todoText: "",
				editting: false,
			}
		},

		name: 'TodoItem',
		props: ['todoProps'],

		methods: {
			...mapActions(['deleteTodo']),

			//add todo
			updateTodo(todoProps) {
				this.editting = this.editting == true ? false : true;
				if(this.editting) {
					this.todoText = todoProps.title;
				} else {
					todoProps.title = this.todoText;
				}
			},

			todoTextChange(e) {
				this.todoText = e.target.value;
			},

		}

	};
</script>


