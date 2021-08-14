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

	const style={
		display: "grid",
		placeItems: "center"
	}

	return (
		<Grid container spacing={3}
		style={style}
		>
			<form className='add-form' onSubmit={onSubmit}>
				<div className='form-control'>
					<Grid container spacing={2}>
						<Grid item xs={4}>
							<InputLabel><h3 style={{color: "black"}}>Item Name</h3></InputLabel>
						</Grid>
						<Grid item xs={7} sm={8}>
							<input
								type='text'
								placeholder='Enter Product Name'
								value={text}
								onChange={(e) => setText(e.target.value)}
							/>
						</Grid>
					</Grid>
				</div>
			<div className='form-control'>
				<Grid container>
					<Grid item xs={4}>
						<InputLabel><h3 style={{color: "black"}}>Description of Item</h3></InputLabel>
					</Grid>
					<Grid item xs={7} sm={8}>
						<input
							type='text'
							placeholder='Enter Description'
							value={day}
							onChange={(e) => setDay(e.target.value)}
						/>
					</Grid>
				</Grid>
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
			<div style={style}>
				<Button 
					type='submit' value='Save Task' 
					variant="outlined" color="primary"
				>
					Save Item
				</Button>
			</div>
			</form>
			{/*<AddProduct />*/}
		</Grid>
  	);
}
export default AddTask