import Header from './components/Header';
import About from "./components/About";
import Footer from './components/Footer';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState, useEffect } from 'react';

/*
		ADDING MATERIAL UI
*/
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
	root: {
	  flexGrow: 1,
	},
	menuButton: {
	  marginRight: theme.spacing(2),
	},
	title: {
	  flexGrow: 1,
	  display: 'none',
	  [theme.breakpoints.up('sm')]: {
		display: 'block',
	  },
	},
	search: {
	  position: 'relative',
	  borderRadius: theme.shape.borderRadius,
	  backgroundColor: alpha(theme.palette.common.white, 0.15),
	  '&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	  },
	  marginLeft: 0,
	  width: '100%',
	  [theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(1),
		width: 'auto',
	  },
	},
	searchIcon: {
	  padding: theme.spacing(0, 2),
	  height: '100%',
	  position: 'absolute',
	  pointerEvents: 'none',
	  display: 'flex',
	  alignItems: 'center',
	  justifyContent: 'center',
	},
	inputRoot: {
	  color: 'inherit',
	},
	inputInput: {
	  padding: theme.spacing(1, 1, 1, 0),
	  // vertical padding + font size from searchIcon
	  paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
	  transition: theme.transitions.create('width'),
	  width: '100%',
	  [theme.breakpoints.up('sm')]: {
		width: '12ch',
		'&:focus': {
		  width: '20ch',
		},
	  },
	},
  }));
  

const App = () => {
	const [showAddTask, setShowAddTask] = useState(false)
	const [tasks, setTasks] = useState([]);

	const classes = useStyles();


	/* UseEffect: this methods is for side effect*/
	useEffect(() => {
		const getTasks = async () => {
			const tasksFromServer = await fetchTasks();
			setTasks(tasksFromServer)
		}
		getTasks();
	}, []);

	const url = "http://localhost:3000/tasks"

	/*****Fetch Tasks From the backend: db.json*****/
	const fetchTasks = async () => {
		const res = await fetch(url);
		const data = await res.json();
		console.log(data);
		return data;
	}

		/*****Fetch Tasks From the backend: db.json*****/
		const fetchTask = async (id) => {
		const res = await fetch(`${url}/${id}`);
		const data = await res.json();
		return data;
	}

	/******Add Task******/
	const addTask = async (task) => {
		const res = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(task)
		})

		const data = await res.json();

		setTasks([...tasks, data]);
		
		//const id = Math.floor(Math.random() * 10000) + 1;
		//const newTask = { id, ...task };
		//setTasks([...tasks, newTask]);
	}

  	/****DELETE TASK FUNCTION****/
  	const deleteTask = async (id) => {
		/**Deleting on the back-end(db.json)**/
		await fetch(`${url}/${id}`, {method: "DELETE"});

		setTasks(tasks.filter((task) => task.id !== id));
  	}
   
	/****STYLING COMPONENT*****/
	const style = {
		textAlign: "center",
		fontWeight: "lighter"
	};

	/*******TOGGLE REMINDER******/
	const toggleReminder = async (id) => {
		const taskToToggle = await fetchTask(id);
		const updTask = { 
			...taskToToggle,
			reminder: !taskToToggle.reminder
		}

		const res = await fetch (`${url}/${id}`,{
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(updTask)
		});

		const data = await res.json()

		setTasks(
			tasks.map((task) =>
				task.id === id ? {...task, reminder: data.reminder} : task
			)
		);
	};

	return(
		<Router>
			<div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Task Tracker
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
			<div className="container">

				<Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
				
				<Route path="/" exact render={(props) => (
					<>
						{/*TERNARY WITH NO ELSE STATEMENT*/}
						{showAddTask && <AddTask onAdd={addTask}/>}
 
						{
							tasks.length > 0 ? 
							(<Tasks  
								tasks={tasks} 
								onDelete={deleteTask} onToggle={toggleReminder}/>) : 
							(<h3 style={style}>No Tasks To Show</h3>)
						}
					</>
				)}  />
				<Route path="/about" component={About}/>
				<Footer />
			</div>
		</Router>
	);
}

export default App;