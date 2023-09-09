export const login = (data) => async (dispatch) => {
  try {
    dispatch({
      type: "LOG_IN",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "LOG_FAIL",
    });
  }
};
