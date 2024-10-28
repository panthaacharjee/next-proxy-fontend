import { createReducer } from "@reduxjs/toolkit";


const initialState = {
  isAuthenticated: false,
  status : false
};
export const userReducer = createReducer(initialState, (builder)=>{

  builder.addCase("RegisterRequest", (state)=>{
    state.loading = true;
    state.isAuthenticated = false;
  })
  builder.addCase("RegisterSuccess", (state, action)=>{
    state.loading = false;
    state.isAuthenticated = true;
    state.user = action.payload;
  })
  builder.addCase("RegisterFail", (state, action)=>{
    state.loading = false;
    state.isAuthenticated = false;
    state.error = action.payload;
  })

  builder.addCase("LoginRequest", (state)=>{
    state.loading = true;
    state.isAuthenticated = false;
  })
  builder.addCase("LoginSuccess", (state, action)=>{
    state.loading = false;
    state.isAuthenticated = true;
    state.user = action.payload;
  })
  builder.addCase("LoginFail", (state, action)=>{
    state.loading = false;
    state.isAuthenticated = false;
    state.error = action.payload;
  })

  builder.addCase("LoadUserRequest", (state)=>{
    state.loading = true;
    state.isAuthenticated = false;
  })
  builder.addCase("LoadUserSuccess", (state, action)=>{
    state.loading = false;
    state.isAuthenticated = true;
    state.user = action.payload;
  })
  builder.addCase("LoadUserFail", (state, action)=>{
    state.loading = false;
    state.isAuthenticated = false;
    state.error = action.payload;
  })

  builder.addCase("LogoutRequest", (state)=>{
    state.loading = true;
    state.isAuthenticated = true;
  })
  builder.addCase("LogoutSuccess", (state, action)=>{
    state.loading = false;
    state.isAuthenticated = false;
    state.user = action.payload;
  })
  builder.addCase("LogoutFail", (state, action)=>{
    state.loading = false;
    state.isAuthenticated = true;
    state.error = action.payload;
  })
  builder.addCase("ClearErrors", (state)=>{
    state.error = null;
  })
})

