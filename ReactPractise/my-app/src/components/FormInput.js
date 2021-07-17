import React from 'react'
import { TextField, Grid } from '@material-ui/core'


const FormInput = ({name, labe}) => {
    return (
        <form>
            <Grid container sm={12}>
                <label><h2>Product Name</h2></label>
                <TextField label="Product Name" name="name"/>
            </Grid>
        </form>
        
    )
}

export default FormInput
