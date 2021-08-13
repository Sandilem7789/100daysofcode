
import { Grid } from '@material-ui/core'
import React, { useState } from 'react'

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


const NewForm = ({ onAdd }) => {
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={6}></Grid>
                <Grid item xs={6}></Grid>
            </Grid>
        </form>
    )
}

export default NewForm
