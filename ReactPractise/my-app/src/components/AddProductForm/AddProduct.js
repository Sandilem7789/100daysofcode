import React, { useState } from "react"
import FormInput from "./FormInput"
import { 
    InputLabel, 
    Grid,
    Button
} from "@material-ui/core"

//styling
const btnStyle = {
    margin: "5px",
    backgroundColor: "black",
    color: "white",
}


//component
const AddProduct = ({ onAdd }) => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")

    const onSubmit = (e) => {
        e.preventDefault();

        if(!price){
            alert("Please add name for the product")
            return
        }

        onAdd({name, price, category, image, description})

        setName("")
        setPrice("")
        setCategory("")
        setImage("")
        setDescription("")
    }
    
    return (
        <form className="form-control" onSubmit={onSubmit}>
            <FormInput 
                label="Product Name"
                placeholder="Enter Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <FormInput 
                label="Price"
                placeholder="0.00"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <FormInput 
                label="Category"
                placeholder="Select category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />
            
            <Grid container spacing={2}>
                <Grid item xs={6} sm={6}>
                    <InputLabel><h3>Image</h3></InputLabel>
                </Grid>
                <Grid item xs={6} sm={6}>
                    <input
                        type='text'
                        placeholder="Description of the product"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={6} sm={6}>
                    <InputLabel><h3>Description</h3></InputLabel>
                </Grid>
                <Grid item xs={6} sm={6}>
                    <textarea
                        type='text'
                        placeholder="Description of the product"
                        style={{
                            padding: "5px",
                            marginLeft: ".5vw",
                            height: "110%"
                        }}
                    />
                </Grid>
                <Grid container spacing={4}>
                    <Grid item xs={6}>
                        <Button  variant="contained" style={btnStyle}>Add Item</Button>
                    </Grid>
                    <Grid item xs={6}>
                        {/*<input type='submit' value='Save Task' className='btn btn-block' />*/}
                        <Button variant="contained" style={btnStyle}>Cancel</Button>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    )
}

export default AddProduct
