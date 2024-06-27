import { createSlice } from '@reduxjs/toolkit';
import { GetFiltrAnnouncement } from '../api/GetFiltrAnnouncement';
import { PhotoAnnouncement } from '@/entities/Announcement/api/PhotoAnnouncement';
import { EditInitialState } from '@/page/Admin/model/EditSlice';
import { API_BASE_URL } from '@/shared/api/config';

interface Preview {
  id: number;
  name: string;
  url: string;
}

interface Announcement {
  id: number;
  title: string;
  type: string;
  description: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  preview: Preview[];
}

export interface AnnouncementInitialState {
  Announcement: Announcement[];
  preview: Preview[];
  imgList: EditInitialState;
}

const initialAnnouncementState: AnnouncementInitialState = {
  Announcement: [],
  preview: [],
  imgList: {
    id: 0,
    name: 'img',
    url: '',
  },
};

const AnnouncementSlice = createSlice({
  name: 'AnnouncementList',
  initialState: initialAnnouncementState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetFiltrAnnouncement.fulfilled, (state, action) => {
      const { data } = action.payload;

      if (Array.isArray(data) && data.length > 0) {
        state.Announcement = data;

        state.preview = data.reduce((acc: Preview[], announcement: Announcement) => {
          const previews =
            announcement.preview && announcement.preview.length > 0
              ? announcement.preview.map((item: Preview) => {
                  return item;
                })
              : [];

          return [...acc, ...previews];
        }, []);
      }
    });
    builder.addCase(PhotoAnnouncement.fulfilled, (state, action) => {
      const [img] = action.payload;
      state.imgList.id = img.id;
      state.imgList.name = img.name;
      state.imgList.url = API_BASE_URL + img.url;
    });
  },
});

export default AnnouncementSlice.reducer;
