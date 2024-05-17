import { createSlice } from '@reduxjs/toolkit';
import { FetchGetInvite } from '../api/FetchGetInvite';

export interface Invitation {
  id: number;
  email: string;
  createdAt: string;
  activated: boolean;
}

export interface InvitesInitialState {
  invitations: Invitation[];
}

const initialInvitationsState: InvitesInitialState = {
  invitations: [],
};

const InvitationSlice = createSlice({
  name: 'InvitationList',
  initialState: initialInvitationsState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FetchGetInvite.fulfilled, (state, action) => {
      const newInvitations: Invitation[] = [];

      const inviteData = action.payload.data;
      inviteData.forEach((invite: Invitation) => {
        const newInvite = {
          id: invite.id,
          email: invite.email,
          createdAt: new Date(invite.createdAt)
            .toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: '2-digit' })
            .replace(/\//g, '/'),
          activated: invite.activated,
        };
        newInvitations.push(newInvite);
      });

      state.invitations = newInvitations;
    });
  },
});

export default InvitationSlice.reducer;
