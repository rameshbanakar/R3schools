import axios from "axios"
import { removeLoading, setLoading } from "./LoadAction";
export const login = (data) => async (dispatch) => {
  try {
    dispatch(setLoading())
    const config = {
      headers: {
        
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post("/api/auth/login", data, config);
    console.log(res.data.token)
    dispatch({
      type: "LOG_IN",
      payload: res.data.token,
    });
    dispatch(removeLoading)
  } catch (error) {
    dispatch({
      type: "LOG_IN_FAIL",
    });
  }
};
export const logOutUser = () => async (dispatch) => {
  dispatch({
    type: "LOG_IN_FAIL",
  });
};

export const signup=(data)=>async(dispatch)=>{
  try {
    dispatch(setLoading())
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res=await axios.post("/api/auth/signin",data,config)
    console.log(res.data.token)
    dispatch({
      type:"SIGN_IN",
      payload:res.data.token
    })
    dispatch(removeLoading())
  } catch (error) {
    dispatch({
      type: "SIGN_OUT"
    });
  }
}
export const setAuth=(data)=>async(dispatch)=>{
  try {
    dispatch({
      type:"SET_AUTH"
    })
  } catch (error) {
    dispatch({
      type:"SET_AUTH_FAIL"
    })
  }
}
