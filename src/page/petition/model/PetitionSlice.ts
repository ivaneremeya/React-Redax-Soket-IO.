import { createSlice } from '@reduxjs/toolkit';
import { GetPetition } from '../api/GetPetition';

export interface Petition {
  id: number;
  title: string;
  count: number;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface InvitesPetitionState {
  petition: Petition[];
}

const initialPetitionsState: InvitesPetitionState = {
  petition: [],
};

const PetitionSlice = createSlice({
  name: 'PetitionsList',
  initialState: initialPetitionsState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetPetition.fulfilled, (state, action) => {
      const { data } = action.payload;
      state.petition = data;
    });
  },
});

export default PetitionSlice.reducer;
