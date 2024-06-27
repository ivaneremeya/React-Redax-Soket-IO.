import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_BASE_URL } from '@/shared/api/config';

type DiscussionData = {
  title: string;
  category: string;

};

export const CreateDiscussion = createAsyncThunk(
  'FetchAddDiscussion/FetchAddDiscussion',
  async (data: DiscussionData, thunkApi) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('acses')}`,
        },
      };
      const response = await axios.post(`${API_BASE_URL}/api/discussions`, { data }, config);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  },
);
