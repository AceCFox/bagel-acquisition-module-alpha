import React from 'react';
import ItemForm from "./ItemForm";
import ItemList from "./ItemList";
import InactiveList from './InactiveList';


function MainList() {
  return (
    <div>
      <ItemForm/>
      <p>To Buy:</p>
      <ItemList/>
      <p>Previously Bought:</p>
      <InactiveList/>
    </div>
  );
}

export default MainList;
