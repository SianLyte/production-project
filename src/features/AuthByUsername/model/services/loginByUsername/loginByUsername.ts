import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User, userActions } from "entities/User";
import { LoginSchema } from "../../types/loginSchema";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, {rejectValue: string}>(
  "login/loginByUsername",
  async ({username, password}, thunkAPI) => {
    try {
      const response = await axios.post<User>("http://localhost:8000/login", {
        username, password
      }, {headers: {Authorization: "1"}})

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      thunkAPI.dispatch(userActions.setAuthData(response.data));
  
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }

  }
)

export const loginByUsernameExtraReducer = (builder: ActionReducerMapBuilder<LoginSchema>) => {
  builder.addCase(loginByUsername.pending, (state) => {
    state.isLoading = true;
    state.error = "";
  })
  .addCase(loginByUsername.fulfilled, (state, action) => {
    state.isLoading = false;
    state.username = action.payload.username;
  })
  .addCase(loginByUsername.rejected, (state,action) => {
    state.username="";
    state.error=action.payload
  })
}