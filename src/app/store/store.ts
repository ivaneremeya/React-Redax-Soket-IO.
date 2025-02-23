import { configureStore, combineReducers } from '@reduxjs/toolkit';
import LoginSlice from '@/features/auth/FormLogin/model/LoginSlice';
import AdminSlice from '@/page/Admin/model/EditSlice';
import InvitationSlice from '@/features/auth/Invitations/model/InvitationSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import AnnouncementSlice from '@/page/Announcement/model/AnnouncementSlice';
import DiscussionsSlice from '@/page/discussions/model/DiscussionsSlice';
import PetitionSlice from '@/page/petition/model/PetitionSlice';
import AnnouncementChatSlice from '@/page/AnnouncementChatPage/model/AnnouncementChatSlice';

const rootReducer = combineReducers({
  authList: LoginSlice,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    persistedReducer,
    AdminFIleList: AdminSlice,
    InvitationList: InvitationSlice,
    AnnouncementList: AnnouncementSlice,
    DiscussionsList: DiscussionsSlice,
    PetitionsList: PetitionSlice,
    AnnouncementChatItem: AnnouncementChatSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
