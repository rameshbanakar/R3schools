const initialState = {
  token:localStorage.getItem("token"),
  user: "",
  isAuthenticated: false,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
      };
    case "SIGN_IN":
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        isAuthenticated:true
      }
    case "LOG_IN_FAIL":
    case "SIGN_OUT":
      localStorage.removeItem("token")
      return {
        ...state,
        isAuthenticated:false
      }
    default:
      return {
        ...state,
      };
  }
};
export default Reducer;
