import React from 'react';
import {ListItem, List, ListItemIcon, ListItemSecondaryAction, ListItemText, Paper, IconButton} from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

function ItemList() {
  return (
    <div >
        <br/>
        <Paper>
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
