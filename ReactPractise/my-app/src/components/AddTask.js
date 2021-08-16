import { useState } from 'react'
import AddProduct from './AddProductForm/AddProduct';
import FormInput from './AddProductForm/FormInput'
import { 
	Grid, 
	Button, 
	InputLabel,
	Select, 
	MenuItem,
	Typography } from '@material-ui/core';

const AddTask = ({ onAdd }) => {
	//hooks
	const [text, setText] = useState("")
	const [day, setDay] = useState("")
	const [reminder, setReminder] = useState(false)

	//my added hooks
	const [category, setCategory] = useState("")

	//triggered when we submit 
	const onSubmit = (e) => {
		e.preventDefault();

		if(!text){
			alert("Please add an Item Name");
			return
		}
		
		onAdd({ text, day, reminder, category })

		setText("");
		setDay("");
		setReminder(false);
		setCategory("")
	}

	const style={
		display: "grid",
		placeItems: "center"
	}

	return (
		<Grid container spacing={3} style={style}>
			<Typography variant="h6" gutterBottom style={{paddingTop: "20px"}}>
				<span style={{
					fontSize: "3.8vh",
					fontWeight: "bold"
				}}>
					<span className="form-label">
						Add Items To Your Stock
					</span>
				</span>
			</Typography>
			<form className='add-form' onSubmit={onSubmit}>
				<div className='form-control'>
					<Grid container spacing={2}>
						<Grid item xs={6} sm={6}>
							<InputLabel>
								<Typography variant="h6" gutterBottom style={{color: "black"}}>
									<span className="form-label">Item Name</span>
								</Typography>
							</InputLabel>
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
							<InputLabel>
								<Typography variant="h6" style={{color: "black"}}>
									<span className="form-label">Item Description</span>
								</Typography>
							</InputLabel>
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
				<div className='form-control'>
					<Grid container spacing={2}>
						<Grid item xs={6} sm={6}>
							<InputLabel>
								<Typography variant="h6" style={{color: "black"}}>
									<span className="form-label">Category</span>
								</Typography>
							</InputLabel>
						</Grid>
						<Grid item xs={6} sm={6}>
							<Select value={category} onChange={(e) => setCategory(e.target.value)}>
								<span className="card-labels">
								<MenuItem key={1} value="Accessories">
									Accessories
								</MenuItem>
								<MenuItem key={2} value="Bags">
									Bags
								</MenuItem>
								<MenuItem key={3} value="Shoes">
									Shoes
								</MenuItem>
								<MenuItem key={4} value="Other">
									Other
								</MenuItem>
								<MenuItem key={5} value="Clothing">
									Clothing
								</MenuItem>
								</span>
							</Select>
						</Grid>
					</Grid>
				</div>
				<div className='form-control form-control-check' style={{paddingTop: "8px"}}>
					<Grid container spacing={2}>
						<Grid item xs={6} sm={6}>
						<InputLabel>
							<Typography variant="h6" gutterBottom style={{color: "black"}}>
								<span className="form-label">In Stock?</span>
							</Typography>
						</InputLabel>
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