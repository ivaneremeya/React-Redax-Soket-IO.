import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthInitialState } from '../model/LoginSlice';
import { FormLoginType } from '../ui/FormLogin';
import { API_BASE_URL } from '@/shared/api/config';

export const FetchAuth = createAsyncThunk<AuthInitialState, FormLoginType>(
  'Authorization/fetchByIdStatus',
  async (data, thunkApi) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/auth/local`, data);
      localStorage.setItem('acses', response.data.jwt);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        return thunkApi.rejectWithValue(error.message);
      }
    }
  },
);
