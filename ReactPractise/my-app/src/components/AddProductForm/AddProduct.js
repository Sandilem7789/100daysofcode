import React from 'react'
import { 
    InputLabel, 
    Grid,
    Button
} from '@material-ui/core'
import FormInput from './FormInput'

const AddProduct = () => {
    return (
        <form className="form-control">
            <FormInput 
                name="Product Name"
                placeholder="Enter Product Name"
            />
            <FormInput 
                name="Price"
                placeholder="0.00"
            />
            <FormInput 
                name="Category"
                placeholder="Select category"
            />
            
            <Grid container spacing={2}>
                <Grid item xs={6} sm={6}>
                    <InputLabel><h3>Image</h3></InputLabel>
                </Grid>
                <Grid item xs={6} sm={6}>
                    <input
                        type='text'
                        placeholder="Description of the product"
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
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={9}>
                        <Button variant="contained" style={{margin: "5px"}}>Add Product</Button>
                        <Button variant="contained" style={{margin: "5px"}}>Cancel</Button>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    )
}

export default AddProduct
