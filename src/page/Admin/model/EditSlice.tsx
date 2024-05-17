import { createSlice } from '@reduxjs/toolkit';
import { FetchFileAdmin } from '../api/FetchFileAdmin';
import { API_BASE_URL } from '@/shared/api/config';

export interface EditInitialState {
  id: number;
  name: string;
  url: string;
}

const getInitialState = (): EditInitialState => ({
  id: 0,
  name: 'img',
  url: 'https://www.svgrepo.com/show/529277/user-check.svg',
});

const AdminSlice = createSlice({
  name: 'AdminFIleList',
  initialState: getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FetchFileAdmin.fulfilled, (state, action) => {
      const [img] = action.payload;
      state.id = img.id;
      state.name = img.name;
      state.url = API_BASE_URL + img.url;
    });

    builder.addCase(FetchFileAdmin.pending, (state) => {});
  },
});

export default AdminSlice.reducer;
