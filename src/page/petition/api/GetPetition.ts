import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_BASE_URL } from '@/shared/api/config';

export const GetPetition = createAsyncThunk('FechGetPetition/GetPetition', async (_, thunkApi) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('acses')}`,
      },
    };
    const response = await axios.get(`${API_BASE_URL}/api/petitions `, config);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
});
