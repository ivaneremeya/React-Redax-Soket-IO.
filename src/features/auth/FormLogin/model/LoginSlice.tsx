import { createSlice } from '@reduxjs/toolkit';
import { FetchAuth } from '../api/FetchAuth';
import { FetchUserMe } from '@/entities/auth/api/FetchUserMe';

export enum AuthStatus {
  Initial = 'Initial',
  Pending = 'Pending',
  Authorized = 'Authorized',
  Anonymous = 'Anonymous',
}

export interface AuthInitialState {
  [x: string]: any;
  authStatus: AuthStatus;
  auth: boolean;
  isLoading: boolean;
  id: number;
}

const getInitialState = (): AuthInitialState => ({
  authStatus: AuthStatus.Initial,
  auth: false,
  isLoading: false,
  id: 0,
});

const LoginSlice = createSlice({
  name: 'authList',
  initialState: getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FetchAuth.fulfilled, (state, action) => {
      state.authStatus = AuthStatus.Authorized;
      state.auth = true;
      state.id = action.payload.user.id;
    });

    builder.addCase(FetchAuth.pending, (state) => {
      state.authStatus = AuthStatus.Pending;
    });

    builder.addCase(FetchUserMe.fulfilled, (state, action) => {
      state.authStatus = AuthStatus.Authorized;
      // state.auth = true;
      // state.id = action.payload.user.id;
    });
    builder.addCase(FetchUserMe.pending, (state, action) => {
      state.authStatus = AuthStatus.Pending;
      // state.auth = true;
      // state.id = action.payload.user.id;
    });
    builder.addCase(FetchUserMe.rejected, (state, action) => {
      state.authStatus = AuthStatus.Anonymous;
      // state.auth = true;
      // state.id = action.payload.user.id;
    });
  },
});

export default LoginSlice.reducer;
