const INITIAL_STATE = {
  userDetails: {}
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "UPDATE_VISITED_USER":
      return {
        ...state,
        userDetails: action.userDetails
      };

    default:
      return state;
  }
}

export default userReducer;
