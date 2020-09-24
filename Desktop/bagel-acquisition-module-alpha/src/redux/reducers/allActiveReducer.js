const activeItem = (state = [{}], action) => {
    switch (action.type) {
      case 'SET_ALL_ACTIVE':
        return action.payload;
      default:
        return state;
    }
  };
  
  // curriculum will be on the redux state at:
  // state.footage
  export default activeItem;
