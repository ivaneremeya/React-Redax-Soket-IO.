import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_BASE_URL } from '@/shared/api/config';

type GetAnnouncementArguments = string;

export const GetFiltrAnnouncement = createAsyncThunk(
  'GetFiltrAnnouncement/GetFiltrAnnouncement',
  async (foundValue: GetAnnouncementArguments, thunkApi) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('acses')}`,
        },
      };
      const response = await axios.get(`${API_BASE_URL}/api/announcements?filters[type][$eq]=${foundValue}&populate[preview][fields][0]=name&populate[preview][fields][1]=url`,config,
      );
      console.log(response.data)
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  },
);
