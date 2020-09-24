import React from 'react';
import {ListItem, List, ListItemIcon, ListItemText, Paper,} from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import {useSelector } from 'react-redux'

export const ActiveList = () => {
  const active = useSelector(state => state.activeItem)
  return <div>{active[0].name}</div>
}

function ItemList() {
  return (
    <div >
        <br/>
        <Paper>
            <ActiveList/>
            <List dense>
                <ListItem button>
                    <ListItemIcon>
                        <CheckBoxOutlineBlankIcon/>
                    </ListItemIcon>
                    <ListItemText primary = 'Item 1'/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <CheckBoxOutlineBlankIcon/>
                    </ListItemIcon>
                    <ListItemText primary = 'Item 2'/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <CheckBoxOutlineBlankIcon/>
                    </ListItemIcon>
                    <ListItemText primary = 'Item 3'/>
                </ListItem>
            </List>
        </Paper>
    </div>
  );
}

export default ItemList;
