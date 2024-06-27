import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_BASE_URL } from '@/shared/api/config';

type Data = {
  title: string;
  description: string;
};

export const CreateFetchPetition = createAsyncThunk(
  'FetchCreateFetchPetition/CreateFetchPetition',
  async (data: Data, thunkApi) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('acses')}`,
        },
      };
      const response = await axios.post(`${API_BASE_URL}/api/petitions`, { data }, config);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  },
);
