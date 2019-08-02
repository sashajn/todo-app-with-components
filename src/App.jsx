import React,{Component} from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './todo';
import './App.css';

class App extends Component {

  constructor(props){
		super(props);
		this.state = {
			todos:[
				{
					id:1,
					content:'Ring Peter',
					priority:'Important'
				},{
					id:2,
					content:'Water plants',
					priority:'Important'
				},{
					id:3,
					content:'Get milk',
					priority:'Urgent'
				},
			]
		};
  }

  addTodo = (data) => {
		//data needs to be reflective of 'todos'
		console.log(data);
		var newTodo= {
				id:Date.now(),
				...data
			};

		var todos = [newTodo,...this.state.todos];
		this.setState({
			todos: todos
		});
  }
  
  removeTodo = (id) => {
		var todos = this.state.todos;
		var filtered = todos.filter((todo) => {
			return todo.id !== id;
		});

		this.setState({
			todos: filtered
		});
	}
  updateTodo = () => {}
	
  render(){
    return (
      <div className="App">
      	<div className="wrap">
					{/* <button onClick={()=>{this.addTodo({content:'bla',priority:'ok'})}}>test</button> */}
					<div className="container">
						<div className="todos">
				
							{
								this.state.todos.map((todo) => {

								var todoProps = {
								...todo,
								key: todo.id,
								removeTodo: this.removeTodo
							
								};
								console.log(todo)

								return(
								<Todo {...todoProps}/>
							)
						})
								}
		
						<NewTodoForm addTodo={this.addTodo}/>

					</div>
				</div>
			</div>
      </div>
    );
  }

}

export default App;
