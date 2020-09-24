import React from 'react';
import {ListItem, List, ListItemIcon, ListItemText, Paper,} from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import {useSelector } from 'react-redux'

export const ActiveList = () => {
  const active = useSelector(state => state.activeItem)
  return <List dense>
            {active.map((item, index)=>
                <ListItem button key = {index}>
                    <ListItemIcon>
                            <CheckBoxOutlineBlankIcon/>
                        </ListItemIcon>
                    <ListItemText primary = {item.name}/>
                </ListItem>
            )}
        </List>
}

function ItemList() {
  return (
    <div >
        <br/>
        <Paper>
            <ActiveList/>
        </Paper>
    </div>
  );
}

export default ItemList;
