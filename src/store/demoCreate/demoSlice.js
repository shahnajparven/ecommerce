import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiInstance from "../../config/axios";

export const creatDemo = createAsyncThunk(
  "demo/creatDemo",
  async (demo, { rejectWithValue, fulfillWithValue }) => {
   console.log(demo,'action')
    try {
      const { data } = await apiInstance.post('demo', demo);
      console.log(data,'backend')
      return fulfillWithValue(data.message);
    } catch (error) {
      return rejectWithValue(error?.response?.data.message || "Unknown Error");
    }
  }
);

export const fetchDemo = createAsyncThunk(
  "demo/fetchDemo",
  async (demo, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await apiInstance.get('demo');
      return fulfillWithValue(data.data || data.message);
    } catch (error) {
      return rejectWithValue(error?.response?.data.message || "Unknown Error");
    }
  }
);

const initialState = {
  isLoading: false,
  demo: [],
  error: null,
  isDeleted: false,
  message: "",
  success: false,
};

export const demoSlice = createSlice({
  name: "demo",
  initialState,

  extraReducers: (builder) => {
    // add data
    builder.addCase(creatDemo.pending, (state) => {
      state.isLoading = true;
      state.success = false;
    });
    builder.addCase(creatDemo.fulfilled, (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
      state.message = action.payload;
      state.success = true;
      state.error = null;
    });
    builder.addCase(creatDemo.rejected, (state, action) => {
      state.isLoading = false;
      state.demo = [];
      state.error = action.payload;
    });

    // fetch data
    builder.addCase(fetchDemo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchDemo.fulfilled, (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
      state.demo = action.payload;
      state.error = null;
    });
    builder.addCase(fetchDemo.rejected, (state, action) => {
      state.isLoading = false;
      state.demo = [];
      state.error = action.payload;
    });
  },
  reducers: {
    reset: () => initialState,
    clearError: (state) => ({
      ...state,
      error: null,
    }),
  },
});
export const { reset, clearError } = demoSlice.actions;
export default demoSlice.reducer;
