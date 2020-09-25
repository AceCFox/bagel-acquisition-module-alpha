import React from 'react';
import ItemForm from "./ItemForm";
import ItemList from "./ItemList";


function MainList() {
  return (
    <div>
    <ItemForm/>
    <p>To Buy:</p>
    <ItemList/>
    </div>
  );
}

export default MainList;
