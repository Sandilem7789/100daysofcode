import { useState } from 'react'
import AddProduct from './AddProductForm/AddProduct';
import FormInput from './AddProductForm/FormInput'
import { Grid, Button, InputLabel } from '@material-ui/core';

const AddTask = ({ onAdd }) => {
	//hooks
	const [text, setText] = useState("")
	const [day, setDay] = useState("")
	const [reminder, setReminder] = useState(false)

	//triggered when we submit 
	const onSubmit = (e) => {
		e.preventDefault();

		if(!text){
			alert("Please add a task");
			return
		}
		
		onAdd({ text, day, reminder })

		setText("");
		setDay("");
		setReminder(false);
	}


	return (
		<Grid container spacing={3}
		style={{
			display: "grid",
			placeItems: "center"
		}}
		>
			<form className='add-form' onSubmit={onSubmit}>
				<div className='form-control'>
				<InputLabel><h3>Item Name</h3></InputLabel>
				<input
					type='text'
					placeholder='Enter Product Name'
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
				</div>
			<div className='form-control'>
				<InputLabel><h3>Day & Time</h3></InputLabel>
				<input
					type='text'
					placeholder='Add Day & Time'
					value={day}
					onChange={(e) => setDay(e.target.value)}
				/>
			</div>
			<div className='form-control form-control-check'>
				<label>Set Reminder</label>
				<input
					type='checkbox'
					checked={reminder}
					value='{reminder}'
					onChange={(e) => setReminder(e.currentTarget.checked)}
				/>
			</div>
			<Button>
			<input type='submit' value='Save Task' className='btn btn-block' />

			</Button>
			</form>
				{/*<AddProduct />*/}
			</Grid>
  	);
}
export default AddTask