const allItem = (state = [{}], action) => {
    switch (action.type) {
      case 'SET_FOOTAGE':
        return action.payload;
      default:
        return state;
    }
  };
  
  // curriculum will be on the redux state at:
  // state.footage
  export default allItem;
