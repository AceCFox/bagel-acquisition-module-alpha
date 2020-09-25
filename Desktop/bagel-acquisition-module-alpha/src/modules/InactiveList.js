import React from 'react';
import {ListItem, List, ListItemText, Paper, IconButton} from '@material-ui/core';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
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
      console.log(id)
  }

  return (
    <div >
        <Paper>
            <List dense className = {classes.root}>
                {inactive.map((item, index)=>
                    <ListItem key = {index}  >
                        <IconButton onClick={() => handleClick(item.id)}>
                                <CheckBoxIcon/>
                        </IconButton>
                        <ListItemText className = {classes.crossed} primary = {item.name}/>
                    </ListItem>
                )}
            </List>
        </Paper>
    </div>
    )
}


export default InactiveList;
