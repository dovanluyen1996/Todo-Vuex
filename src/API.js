import axios from "axios"

const Api = axios.create({
	baseURI: "https://jsonplaceholder.typicode.com/todos"
})

export default Api;