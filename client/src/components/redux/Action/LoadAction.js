export const setLoading = () => async (dispatch) => {
  try {
    dispatch({
      type: "SET_LOADING",
    });
  } catch (error) {
    dispatch({
      type: "REMOVE_LOADING",
    });
  }
};
export const removeLoading = () => async (dispatch) => {
  dispatch({
    type: "REMOVE_LOADING",
  });
};
