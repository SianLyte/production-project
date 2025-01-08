import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginSchema } from "../types/loginSchema";
import { loginByUsernameExtraReducer } from "../services/loginByUsername/loginByUsername";


const initialState: LoginSchema = {
  username: "",
  password: "",
  isLoading: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username=action.payload;
    },
    setPassword: (state, action : PayloadAction<string>) => {
      state.password=action.payload;
    }
  },
  extraReducers: loginByUsernameExtraReducer
})

export const {actions : loginActions} = loginSlice;
export const {reducer: loginReducer} = loginSlice; 