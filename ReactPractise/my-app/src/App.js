import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState, useEffect } from 'react';

const App = () => {
	const [showAddTask, setShowAddTask] = useState(false)
	const [tasks, setTasks] = useState([
		
  	]);


	/* UseEffect: this methods is for side effect*/
	useEffect(() => {
		const getTasks = async () => {
			const tasksFromServer = await fetchTasks();
			setTasks(tasksFromServer)
		}
		getTasks();
	}, []);

	/*****Fetch Tasks From the backend: db.json*****/
	const fetchTasks = async () => {
		const res = await fetch("http://localhost:5000/tasks");
		const data = await res.json();
		return data;
	}

	/******Add Task******/
	const addTask = (task) => {
		const id = Math.floor(Math.random() * 10000) + 1;
		const newTask = { id, ...task };
		setTasks([...tasks, newTask]);
	}

  	/****DELETE TASK FUNCTION****/
  	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
  	}
   
	/****STYLING COMPONENT*****/
	const style = {
		textAlign: "center",
		fontWeight: "lighter"
	};

	/*******TOGGLE REMINDER******/
	const toggleReminder = (id) => {
		setTasks(
			tasks.map((task) =>
				task.id === id ? 
				{...task, reminder: !task.reminder} : task
			)
		);
	};

	return(
		<div className="container">
			<Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
			{/*TERNARY WITH NO ELSE STATEMENT*/}
			{showAddTask && <AddTask onAdd={addTask}/>}

			{
				tasks.length > 0 ? 
				(<Tasks  tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : 
				(<h3 style={style}>No Tasks To Show</h3>)
			}
		</div>
	);
}

export default App;