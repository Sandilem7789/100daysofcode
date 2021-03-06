import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Appbar from "./components/Appbar";

import CardTask from "./components/CardTask";

import Button from '@material-ui/core/Button';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  /* UseEffect: this methods is for side effect*/
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  const url = "http://localhost:3000/tasks";

  /*****Fetch Tasks From the backend: db.json*****/
  const fetchTasks = async () => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    return data;
  };

  /*****Fetch Tasks From the backend: db.json*****/
  const fetchTask = async (id) => {
    const res = await fetch(`${url}/${id}`);
    const data = await res.json();
    return data;
  };

  /******Add Task******/
  const addTask = async (task) => {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    setTasks([...tasks, data]);

    //const id = Math.floor(Math.random() * 10000) + 1;
    //const newTask = { id, ...task };
    //setTasks([...tasks, newTask]);
  };

  /****DELETE TASK FUNCTION****/
  const deleteTask = async (id) => {
    /**Deleting on the back-end(db.json)**/
    await fetch(`${url}/${id}`, { method: "DELETE" });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  /****STYLING COMPONENT*****/
  const style = {
    textAlign: "center",
    fontWeight: "lighter",
  };

  /*******TOGGLE REMINDER******/
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = {
      ...taskToToggle,
      reminder: !taskToToggle.reminder,
    };

    const res = await fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  return (
    <Router>
			<Appbar/>
      <div className='container'>
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        <Route
          path='/'
          exact
          render={(props) => (
            <>
              {/*TERNARY WITH NO ELSE STATEMENT*/}
              {showAddTask && <AddTask onAdd={addTask} />}

              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                <h3 style={style}>No Tasks To Show</h3>
              )}
            </>
          )}
        />
				
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
