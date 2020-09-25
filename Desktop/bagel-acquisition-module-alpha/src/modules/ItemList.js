import React from 'react';
import {ListItem, List, ListItemIcon, ListItemText, Paper,} from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'

function ItemList() {
  const active = useSelector(state => state.activeItem);
  const dispatch = useDispatch()

  const handleClick = (index) =>{
      dispatch({type: 'ITEM_ACQUIRED', payload: index})
  }

  return (
    <div >
        <br/>
        <Paper>
            <List dense>
                {active.map((item, index)=>
                    <ListItem button key = {index}  onClick={() => handleClick(item.id)}>
                        <ListItemIcon>
                                <CheckBoxOutlineBlankIcon/>
                            </ListItemIcon>
                        <ListItemText primary = {item.name}/>
                    </ListItem>
                )}
            </List>
        </Paper>
    </div>
    )
}


export default ItemList;
