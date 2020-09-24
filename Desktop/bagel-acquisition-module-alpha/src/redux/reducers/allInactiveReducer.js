const inactiveItem = (state = [{}], action) => {
    switch (action.type) {
      case 'SET_ALL_INACTIVE':
        return action.payload;
      default:
        return state;
    }
  };
  
  // curriculum will be on the redux state at:
  // state.footage
  export default inactiveItem;