import { createSlice, current } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("user/fetchData", async () => {
  const response = await axios.get(`http://localhost:8000/api`);
  return response.data;
});

export const deleteData = createAsyncThunk("user/deleteData", async (id) => {
  const response = await axios.delete(`http://localhost:8000/api/` + id);
  return response.data;
});

export const postData = createAsyncThunk("user/postData", async (obj) => {
  const response = await axios.post(`http://localhost:8000/api`, obj);
  return response.data;
});
const initialState = {
  data: [],
  wishlist: [],
  basket: [],
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    addWishlist: (state, action) => {
      let found = state.wishlist.find((item) => item._id == action.payload._id);
      if (found) {
        state.wishlist = current(state.wishlist).filter(
          (item) => item._id != action.payload._id
        );
      } else {
        state.wishlist = [...current(state.wishlist), action.payload];
      }

      console.log(state.wishlist);
    },

    deleteWishlist: (state, action) => {
      state.wishlist = current(state.wishlist).filter(
        (item) => item._id != action.payload._id
      );

      console.log(state.wishlist);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    builder
      .addCase(postData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = [...state.data, action.payload];
      })
      .addCase(postData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    builder
      .addCase(deleteData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = state.data.filter(
          (item) => item._id != action.payload._id
        );
      })
      .addCase(deleteData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addWishlist, deleteWishlist } = menuSlice.actions;

export default menuSlice.reducer;
