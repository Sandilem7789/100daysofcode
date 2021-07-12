import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
	const style = {
		color: "black",
		cursor: "pointer",
	}
	
   return (
      <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
			<h3>
				{task.text} <FaTimes style={style} onClick={() => onDelete(task.id)}/>
			</h3>
			<p>{task.day}</p>
      </div>
   )
}
export default Task
