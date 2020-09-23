import React from 'react';
import {TextField, Button} from '@material-ui/core';

function ItemForm() {
  return (
    <div>
        <TextField required label = "Add Item" defaultValue="Hello World" />
        <Button>Add</Button>
    </div>
  );
}

export default ItemForm;
