import Task from './Task';
import CardTask from './CardTask';

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
         {tasks.map((task) => (
            <CardTask 
               key={task.id} 
               task={task} 
               onDelete={onDelete}
               onToggle={onToggle}
            />
         ))}
      </>
   )
}

export default Tasks
