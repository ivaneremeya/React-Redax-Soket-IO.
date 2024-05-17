import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_BASE_URL } from '@/shared/api/config';

export interface PatchAdminState {
  dorm: string;
  email: string;
  fio: string;
  institute: string;
  numberRoom: number;
  password: string;
}

export const FetchPatchAdmin = createAsyncThunk<
  PatchAdminState,
  { id: number; data: PatchAdminState }
>('Authorization/fetchByIdStatus', async ({ id, data }, thunkApi) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('acses')}`,
      },
    };
    const response = await axios.put(`${API_BASE_URL}/api/users/${id}`, data, config);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
});
