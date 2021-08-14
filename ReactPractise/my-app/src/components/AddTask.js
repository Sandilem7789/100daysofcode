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
			alert("Please add an Item");
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
		<Grid container spacing={3} style={style}>
			<form className='add-form' onSubmit={onSubmit}>
				<div className='form-control'>
					<Grid container spacing={2}>
						<Grid item xs={6} sm={6}>
							<InputLabel><h3 style={{color: "black"}}>Item Name</h3></InputLabel>
						</Grid>
						<Grid item xs={6} sm={6}>
							<input
								type='text'
								placeholder='Enter Item Name'
								value={text}
								onChange={(e) => setText(e.target.value)}
							/>
						</Grid>
					</Grid>
				</div>
				<div className='form-control'>
					<Grid container spacing={2}>
						<Grid item xs={6} sm={6}>
							<InputLabel><h3 style={{color: "black"}}>Item Description</h3></InputLabel>
						</Grid>
						<Grid item xs={6} sm={6}>
							<input
								type='text'
								placeholder='Enter Item Description'
								value={day}
								onChange={(e) => setDay(e.target.value)}
							/>
						</Grid>
					</Grid>
				</div>
				<div className='form-control form-control-check'>
					<Grid container spacing={2}>
						<Grid item xs={6} sm={6}>
						<InputLabel><h3 style={{color: "black"}}>Set Reminder</h3></InputLabel>
						</Grid>
						<Grid item sx={6}>
							<input
								type='checkbox'
								checked={reminder}
								value='{reminder}'
								onChange={(e) => setReminder(e.currentTarget.checked)}
								style={{margin: "0px 10px 5px"}}
							/>
						</Grid>
					</Grid>
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