import React, {useState} from 'react';
import {TextField, Button, Grid, Paper, Snackbar, IconButton} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

function ItemForm() {
    const [input, setInput] = useState({});
    const [open, setOpen] = useState(false);  
    
    const handleInputChange = (e) => setInput({
        ...input, 
        [e.currentTarget.name]: e.currentTarget.value
    })

    const handleAdd =() =>{
        setOpen(true);
        setInput({
            ...input, 
            newItem: ''
        })
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
      };
      
  return (
    <div style = {{bacgroundColor:'white'}}>
        <Paper elevation = {3}>
            <Grid container direction = 'row'>
                <TextField style = {{flexGrow: 1}} label = "Grocery Item" variant='filled' name="newItem" onChange={handleInputChange} value = {input.newItem || '' }/>
                <Button variant = 'contained' color = 'primary' onClick = {handleAdd}>Add</Button>    
            </Grid>
        </Paper>
        <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message='item added!'
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
        />
    </div>
  );
}

export default ItemForm;
