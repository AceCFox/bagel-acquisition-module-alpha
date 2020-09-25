import React from 'react';
import {ListItem, List, ListItemText, ListItemSecondaryAction, Paper, IconButton, Icon} from '@material-ui/core';
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
  const dispatch = useDispatch()

  const handleClick = (id) =>{
      dispatch({type: "ITEM_NEEDED", payload: id})
  }

  const handleDelete = (id) =>{
    console.log(id)
}

  return (
    <div >
        <Paper>
            <List dense className = {classes.root}>
                {inactive.map((item, index)=>
                    <ListItem key = {index}  >
                        <IconButton onClick={() => handleClick(item.id)}>
                                <CheckBox/>
                        </IconButton>
                        <ListItemText className = {classes.crossed} primary = {item.name}/>
                        <ListItemSecondaryAction >
                            <IconButton onClick={() => handleDelete(item.id)}>
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
