import React from 'react'
import { 
    //TextField, 
    Grid,
    InputLabel 
} from '@material-ui/core'


const FormInput = ({name, placeholder}) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={6} sm={6}>
                <InputLabel><h3>{name}</h3></InputLabel>
            </Grid>
            <Grid item xs={6} sm={6}>
                <input
                    type='text'
                    placeholder={placeholder}
                />
            </Grid>
        </Grid>
    )
}

export default FormInput
