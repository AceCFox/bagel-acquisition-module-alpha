import React, {useState} from 'react';
import {TextField, Button, Grid, Paper} from '@material-ui/core';

function ItemForm() {
    const [input, setInput] = useState({})  
    
    const handleInputChange = (e) => setInput({
        ...input, 
        [e.currentTarget.name]: e.currentTarget.value
    })
  return (
    <div style = {{bacgroundColor:'white'}}>
        <Paper elevation = {3}>
            <Grid container direction = 'row'>
                <TextField label = "Grocery Item" variant='filled' name="newItem" onChange={handleInputChange}/>
                <Button variant = 'contained' color = 'primary'>Add</Button>    
            </Grid>
        </Paper>
    </div>
  );
}

export default ItemForm;
