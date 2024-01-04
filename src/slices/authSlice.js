import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// importing custom toast fx to handle toasts
import Toasts from "../app/Toasts.js";

// Adding All Auth related APIs
import { signup, login, logout, getUser } from "../api/auth.js";

const initialState = {
  user: null,
  status: "idle",
};

// ading Auth AsyncThunks
export const signupAsync = createAsyncThunk(
  "auth/signup",
  async (userData, thunkAPI) => {
    try {
      const data = await signup(userData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const loginAsync = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      const data = await login(userData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getUserAsync = createAsyncThunk(
  "auth/getUser",
  async (_, thunkAPI) => {
    try {
      const data = await getUser();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const logoutAsync = createAsyncThunk("auth/logout", async () => {
  const data = await logout();
  return data;
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    //   increment: (state) => {
    //     state.value += 1;
    //   },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signupAsync.fulfilled, (state, action) => {
        state.status = "idle";
        Toasts("success", action.payload.message);
      })
      .addCase(signupAsync.rejected, (state, action) => {
        state.status = "idle";
        if (action.payload.response) {
          Toasts("error", action.payload.response.data.message);
        }else{
          // Toasts("error","Network Error");// no need to show toast here
        }
      })
      .addCase(loginAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.user = action.payload.user;
        Toasts("success", action.payload.message);
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = "idle";
        state.user = null;
        if (action.payload.response) {
          Toasts("error", action.payload.response.data.message);
        }else{
          // Toasts("error","Network Error");// no need to show toast here
        }
      })
      .addCase(getUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.user = action.payload.user;
        // Toasts("success", action.payload.message);
      })
      .addCase(getUserAsync.rejected, (state, action) => {
        state.status = "idle";
        state.user = null;
        // Toasts("error", action.payload.response.data.message);
        if (action.payload.response) {
          console.log(action.payload.response.data.message);
        }else{
          // Toasts("error","Network Error");// no need to show toast here
        }
      })
      .addCase(logoutAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(logoutAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.user = null;
        Toasts("success", action.payload.message);
      });
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
