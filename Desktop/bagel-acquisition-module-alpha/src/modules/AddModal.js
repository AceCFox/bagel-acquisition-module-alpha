import React, {useState} from 'react';
import {TextField, Button, Grid, Paper, Snackbar, IconButton, Dialog, DialogContent, DialogContentText} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch } from 'react-redux'

function AddModal() {
    const [input, setInput] = useState({});
    const [open, setOpen] = useState(false);  
    const dispatch = useDispatch();

    const handleInputChange = (e) => setInput({
        ...input, 
        [e.currentTarget.name]: e.currentTarget.value
    })

    const handleAdd =() =>{
        setOpen(true);
        const postObject = {name: input.newItem};
        dispatch({type: "ADD_ITEM", payload: postObject})
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
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <Grid container direction = 'row'>
                <TextField 
                    style = {{flexGrow: 1}} 
                    label = "Grocery Item" 
                    variant='filled' 
                    name="newItem"
                    onChange={handleInputChange} 
                    value = {input.newItem || '' }
                    inputProps={{ maxLength: 50}}
                />
                <Button variant = 'contained' color = 'primary' onClick = {handleAdd}>Add</Button>    
            </Grid>
        
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
    </Dialog>
  );
}

export default AddModal;

