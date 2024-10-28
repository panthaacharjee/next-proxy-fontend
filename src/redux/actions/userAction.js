import axios from "axios";
// import AxiosPublic from "../axiosPublic"
// const url = 'https://oriontrading-backend.onrender.com'
// const url = `http://localhost:4000`


// const axiosPublic = AxiosPublic()
export const registerUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "RegisterRequest" });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post( `/api/v1/register/user`, userData, config);
    dispatch({ type: "RegisterSuccess", payload: data.user });
  } catch (err) {
    dispatch({ type: "RegisterFail", payload: err.response.data.message });
  }
};

export const loginUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "LoginRequest" });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post( `/api/v1/login/user`, userData, config);
    dispatch({ type: "LoginSuccess", payload: data.user });
  } catch (err) {
    dispatch({ type: "LoginFail", payload: err.response.data.message });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: "LoadUserRequest" });

    const { data } = await axios.get(`/api/v1/profile/me`);
    dispatch({ type: "LoadUserSuccess", payload: data.user });
  } catch (err) {
    dispatch({ type: "LoadUserFail", payload: err.response.data.message });
    // console.log(error.message);
  }
};


//Logout User
export const logOut = () => async (dispatch) => {
  try {
    dispatch({ type: "LogoutRequest" });
    // const config = { headers: { "Content-Type": "multipart/form-data" } };

    await axios.get(`/api/v1/logout`);
    dispatch({ type: "LogoutSuccess" });
  } catch (error) {
    dispatch({
      type: "LogoutFail",
      payload: error.response.data.message,
    });
  }
};


//Clearing Errors
export const clearError = () => async (dispatch) => {
  dispatch({ type: "ClearErrors" });
};

//Clearing Success
export const clearSuccess = () => async (dispatch) => {
  dispatch({ type: "ClearSuccess" });
};

