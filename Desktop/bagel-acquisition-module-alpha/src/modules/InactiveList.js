import React from 'react';
import {ListItem,
    List, 
    ListItemText, 
    ListItemSecondaryAction, 
    Paper, 
    IconButton,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Button,
    }from '@material-ui/core';
import {CheckBox, Delete} from '@material-ui/icons/';
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '560px',
      maxWidth: 360,
    },
    crossed:{
       textDecoration: 'line-through', 
    }
  }));

function InactiveList() {
  const classes = useStyles();
  const inactive = useSelector(state => state.inactiveItem);
  const [open, setOpen] = React.useState(false);
  const [toDelete, setToDelete] = React.useState({});
  const dispatch = useDispatch()

  const handleClick = (id) =>{
      dispatch({type: "ITEM_NEEDED", payload: id})
  }

  const handleDelete = (item) =>{
    setToDelete(item);
    setOpen(true)
}

const confirmDelete = () =>{
    console.log('deleting ', toDelete)
    dispatch({type: "DELETE_ITEM", payload: toDelete.id})
    setOpen(false)
    // not sure if I want the next line to reset the toDelete state after dialog closes?
    //setToDelete({})
}

const handleClose = () =>{
    setOpen(false)
}

  return (
    <div >
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Delete"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to permanently delete {toDelete.name} from database?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            oops, no!
          </Button>
          <Button onClick={confirmDelete} color="primary" autoFocus>
            yes!!! BYE FOREVER!
          </Button>
        </DialogActions>
      </Dialog>
        <Paper>
            <List dense className = {classes.root}>
                {inactive.map((item, index)=>
                    <ListItem key = {index}  >
                        <IconButton onClick={() => handleClick(item.id)}>
                                <CheckBox/>
                        </IconButton>
                        <ListItemText className = {classes.crossed} primary = {item.name}/>
                        <ListItemSecondaryAction >
                            <IconButton onClick={() => handleDelete(item)}>
                                <Delete/>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                )}
            </List>
        </Paper>
    </div>
    )
}


export default InactiveList;
