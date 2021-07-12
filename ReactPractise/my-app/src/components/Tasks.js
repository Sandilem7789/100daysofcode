import Task from './Task';
import CardTask from './CardTask';

import Grid from "@material-ui/core/Grid";


const Tasks = ({ tasks, onDelete, onToggle }) => {
   return (
      <>
         {tasks.map((task) => (
            <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
            />
         ))}
         <Grid container spacing={3}>
            {tasks.map((task) => (
            <Grid item xs={6} md={3}>
               <CardTask
                  key={task.id}
                  task={task}
                  onDelete={onDelete}
                  onToggle={onToggle}
               />
            </Grid>
            ))}
         </Grid>
      </>
   );
}

export default Tasks
