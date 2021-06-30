import React from 'react'

class App extends React.Component {
    constructor() {
        super()

        this.state = {
            message: "Hello React from Vue.js",
            todos: [],
            newTodo: '',
            errors: {
                isError: false,
                errMessage: ""
            }
        }
    }

    componentDidUpdate() {
        // diinvoke ketika ada update
    }

    componentDidMount() {
        // diinvoke ketika di render pertam kali
        this.fetchData()
    }

    fetchData() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(todos => {
                this.setState({
                    todos: [...todos]
                })
            }).catch(err => {
                
            })
    }

    onChangeHandle(event) {
        this.setState({
            newTodo: event.target.value
        })
    }

    onSubmitHandle(event) {
        event.preventDefault()
        this.setState({
            todos: [...this.state.todos, {
                id: this.state.todos[this.state.todos.length-1].id + 1,
                title: this.state.newTodo
            }]
        })
    }

    render() {
        return (
            <div style={{margin: '20px'}}>
                <h1>{this.state.message}</h1>
                <form onSubmit={(e) => this.onSubmitHandle(e)}>
                    <h4>Add Todos:</h4>
                    <input
                        type='text'
                        autoComplete='off'
                        value={this.state.newTodo}
                        // onChange={(event) => this.onChangeHandle(event)}
                        onChange={this.onChangeHandle.bind(this)}
                    />
                    <input type="submit" value="Add Todo" />
                </form>
                <h4>Todo:</h4>
                <ul>
                    {
                        this.state.todos.map(todo => {
                            return <li key={todo.id}>{todo.title}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default App;
