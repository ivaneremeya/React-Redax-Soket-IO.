import { API_BASE_URL } from '@/shared/api/config';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const PhotoAnnouncement = createAsyncThunk(
  'PhotoAnnouncement/PhotoAnnouncement',
  async (fileData: string | Blob, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append('files', fileData);

      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('acses')}`,
        },
      };

      const response = await axios.post(`${API_BASE_URL}/api/upload/`, formData, config);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
