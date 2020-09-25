import { put, takeLatest, } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "GET_ACTIVE" actions
function* getActiveItem() {
  try {
    //get all active items from item table
    const response =  yield axios.get( '/api/item/active');
    // store these items in all active reducer
    console.log('back from server with ', response.data)
    yield put({ type: 'SET_ALL_ACTIVE', payload: response.data });
  } catch (error) {
      console.log('Error getting active items:', error);
  }
}

// worker Saga: will be fired on "GET_INACTIVE" actions
function* getInactiveItem() {
    try {
      //get all inactive items from item table
      const response =  yield axios.get('/api/item/inactive');
      // store these items in all inactive reducer
      yield put({ type: 'SET_ALL_INACTIVE', payload: response.data });
    } catch (error) {
        console.log('Error getting inactive items:', error);
    }
  }

// worker Saga: will be fired on "ADD_ITEM" actions
function* postItem(action){
    try {
        //post the payload as a new item
        yield axios.post('/api/item', action.payload);
        //run the get active worker saga above to get the updated changes
        yield put({type: 'GET_ACTIVE'})
    } catch (error){
        console.log('problem posting new item')
    }
}

// worker Saga: will be fired on "ITEM_ACQUIRED" actions
function* putItem(action){
    try {
        //run the put request to change the needed status of the row at the id provided
        yield axios.put('/api/item/'+ action.payload);
        //run the get active worker saga above to get the updated changes
        yield put({type: 'GET_ACTIVE'})
        //run the get inactive worker saga above to get the updated changes
        yield put({type: 'GET_INACTIVE'})
    } catch (error){
        console.log('problem posting new item')
    }
}

//worker saga will fire on "ITEM_NEEDED" actions
function* putBackItem(action){
    try {
        //run the put request to change the needed status of the row at the id provided
        yield axios.put('/api/item/needed/'+ action.payload);
        //run the get active worker saga above to get the updated changes
        yield put({type: 'GET_ACTIVE'})
        //run the get inactive worker saga above to get the updated changes
        yield put({type: 'GET_INACTIVE'})
    } catch (error){
        console.log('problem posting new item')
    }
}

//worker saga will fire on "DELETE_ITEM" actions
function* deleteItem(action){
    try {
        //run the delete request to permanently remove item from item table
        yield axios.delete('/api/item/'+ action.payload);
        //run the get active worker saga above to get the updated changes
        yield put({type: 'GET_ACTIVE'})
        //run the get inactive worker saga above to get the updated changes
        yield put({type: 'GET_INACTIVE'})
    } catch (error){
        console.log('problem posting new item')
    }
}

function* itemSaga() {
    yield takeLatest('GET_ACTIVE', getActiveItem);
    yield takeLatest('GET_INACTIVE', getInactiveItem);
    yield takeLatest('ADD_ITEM', postItem);
    yield takeLatest('ITEM_ACQUIRED', putItem);
    yield takeLatest('ITEM_NEEDED', putBackItem);
    yield takeLatest('DELETE_ITEM', deleteItem);
  }
  
  export default itemSaga;