import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_BASE_URL } from '@/shared/api/config';

export const FetchUserMe = createAsyncThunk('FetchUserMe/fetchStatus', async (_, thunkApi) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('acses')}`,
      },
    };
    const response = await axios.get(`${API_BASE_URL}/api/users/me`, config);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
});
