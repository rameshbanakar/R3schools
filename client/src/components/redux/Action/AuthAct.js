import axios from "axios"
export const login = (data) => async (dispatch) => {
  try {
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
  } catch (error) {
    dispatch({
      type: "LOG_IN_FAIL",
    });
  }
};

export const signup=(data)=>async(dispatch)=>{
  try {
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
  } catch (error) {
    dispatch({
      type: "SIGN_OUT"
    });
  }
}
