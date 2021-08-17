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

	//const [reminder, setReminder] = useState(false)

	//my added hooks
	const [quantity, setQuantity] = useState("")
	const [category, setCategory] = useState("")

	//triggered when we submit 
	const onSubmit = (e) => {
		e.preventDefault();

		if(!text){
			alert("Please add Item Name");
			return
		}
		
		onAdd({ text, day, category, quantity })

		setText("");
		setDay("");
		//setReminder(false);
		setCategory("")
		setQuantity("0")
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
							</Select>
						</Grid>
					</Grid>
				</div>
				<div className='form-control form-control-check' style={{paddingTop: "8px"}}>
					<Grid container spacing={2}>
						<Grid item xs={6} sm={6}>
						<InputLabel>
							<Typography variant="h6" gutterBottom style={{color: "black"}}>
								<span className="form-label">Number of Items</span>
							</Typography>
						</InputLabel>
						</Grid>
						<Grid item sx={6} sm={6}>
							<input
								type='number'
								placeholder='Number of Items'
								value={quantity}
								onChange={(e) => setQuantity(e.target.value)}
							/>
						</Grid>
					</Grid>
				</div>
				<div style={style}>
					<Button 
						type='submit' value='Save Item' 
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