const initialState = {
  token:localStorage.getItem("token"),
  user: "",
  isAuthenticated: false,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    default:
      return {
        ...state,
      };
  }
};
export default Reducer;
