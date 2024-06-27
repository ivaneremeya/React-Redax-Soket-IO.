import { createSlice } from '@reduxjs/toolkit';
import { GetAnnouncementChatItem } from '../api/GetAnnouncementChatItem';

interface Announcement {
  id: number;
  title: string;
  type: string;
  description: string;
  phone: string;
  chat: null | { createdAt: string; id: number; updatedAt: string };
  createdAt: string;
  preview: {
    id: number;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
  }[];
  publishedAt: string;
  updatedAt: string;
  user: null | string;
}

interface InitialAnnouncementChatState {
  announcement: Announcement[];
  preview: {
    id: number;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
  }[];
}

const initialAnnouncementChatState: InitialAnnouncementChatState = {
  announcement: [],
  preview: [],
};

const AnnouncementChatSlice = createSlice({
  name: 'AnnouncementChatItem',
  initialState: initialAnnouncementChatState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetAnnouncementChatItem.fulfilled, (state, action) => {
      const { data }: { data: Announcement } = action.payload;

      state.announcement = [...state.announcement, data];
      state.preview = data.preview;
    });
  },
});

export default AnnouncementChatSlice.reducer;
