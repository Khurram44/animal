const reducer = (state, action) => {
  switch (action.type) {
    case "SET_COMPSTATE":
      return {
        ...state,
        compState: action.payload,
      };
    default:
      return state;
  }
};
