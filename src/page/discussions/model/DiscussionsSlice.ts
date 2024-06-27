import { createSlice } from '@reduxjs/toolkit';
import { GetDiscussions } from '../api/GetDiscussions';
import { GetSelectDiscusCategor } from '@/entities/Discussions/api/GetSelectDiscusCategor';

export interface Category {
  title: string;
  createdAt: string;
  updatedAt: string;
  name: string;
}

export interface Discussions {
  id: number;
  title: string;
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
}

export interface DiscussionsInitialState {
  Discussions: Discussions[];
  Categories: Category[];
}

const initialDiscussionsState: DiscussionsInitialState = {
  Discussions: [],
  Categories: [],
};

const DiscussionsSlice = createSlice({
  name: 'DiscussionsList',
  initialState: initialDiscussionsState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetDiscussions.fulfilled, (state, action) => {
      const { data } = action.payload;
      state.Discussions = data;
    });
    builder.addCase(GetSelectDiscusCategor.fulfilled, (state, action) => {
      const { data } = action.payload;
      state.Categories = data;
    });
  },
});

export default DiscussionsSlice.reducer;
