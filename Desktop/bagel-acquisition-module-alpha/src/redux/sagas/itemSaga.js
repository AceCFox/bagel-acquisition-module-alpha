import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "GET_ACTIVE" actions
function* getActiveItem() {
  try {
    //get all active items from item table
    console.log('in get Active item')
    const response =  yield axios.get('/api/item/active',);
    // store these items in all active reduver
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
      const response =  yield axios.get('/api/item/inactive',);
      // store these items in all inactive reduver
      yield put({ type: 'SET_ALL_INACTIVE', payload: response.data });
    } catch (error) {
        console.log('Error getting inactive items:', error);
    }
  }

function* itemSaga() {
    yield takeLatest('GET_ACTIVE', getActiveItem);
    yield takeLatest('GET_INACTIVE', getInactiveItem);
  }
  
  export default itemSaga;