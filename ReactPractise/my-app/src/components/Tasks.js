import Task from './Task';
import CardTask from './CardTask';
import Grid from "@material-ui/core/Grid";

const Tasks = ({ tasks, onDelete, onToggle }) => {
   return (
      <>
         {/*<Grid container>
            {tasks.map((task) => (
               <Grid item xs={4} md={3}>
                  <Task
                     key={task.id}
                     task={task}
                     onDelete={onDelete}
                     onToggle={onToggle}
                  />
               </Grid>
            ))}
            </Grid>*/}
         <Grid container spacing={2}>
            {tasks.map((task) => (
            <Grid item xs={12} sm={4} md={4} key={task.id}>
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
