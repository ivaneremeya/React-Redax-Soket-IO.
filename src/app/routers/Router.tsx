import { createBrowserRouter } from 'react-router-dom';
import { Home } from '@/page/home/Home';
import { Discussions } from '@/page/discussions/Discussions';
import { EditPage } from '@/page/Admin/EditPage';
import { Auth } from '@/page/auth/ui/Auth';
import withAuth from './withAuth';
import { FormRegistr } from '@/features/auth/FormRegistr/FormRegistr';
import { FormLogin } from '@/features/auth/FormLogin/ui/FormLogin';
import withNotAuth from './withNotAuth';
import { AnnouncementPage } from '@/page/Announcement/ui/AnnouncementPage';
import { AddDiscussion } from '@/entities/Discussions/ui/AddDiscussion';
import { AddAnnouncement } from '@/entities/Announcement/ui/AddAnnouncement';
import { PetitionPage } from '@/page/petition/ui/PetitionPage';
import { AddPetition } from '@/entities/Petition/ui/AddPetition';
import { DiscussionChatPage } from '@/features/auth/DiscussionChat/ui/DiscussionChatPage';
import { AnnouncementChatPage } from '@/page/AnnouncementChatPage/ui/AnnouncementChatPage';

const HomeWithAuth = withAuth(Home);
const AdminWithAuth = withAuth(EditPage);
const AnnouncementWithAuth = withAuth(AnnouncementPage);
const DiscussionsWithAuth = withAuth(Discussions);
const AddDiscussionWithAuth = withAuth(AddDiscussion);
const AddAnnouncementWithAuth = withAuth(AddAnnouncement);
const PetitionPageWithAuth = withAuth(PetitionPage);
const AddPetitionWithAuth = withAuth(AddPetition);
const DiscussionChatPageWithAuth = withAuth(DiscussionChatPage);
const AnnouncementChatPageWithAuth = withAuth(AnnouncementChatPage);


const AuthWithAuth = withNotAuth(Auth);
const LoginWithAuth = withNotAuth(FormLogin);
const RegisterWithAuth = withNotAuth(FormRegistr);

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeWithAuth />,
    children: [
      {
        index: true,
        element: <Discussions />,
      },
      {
        path: 'edit',
        element: <AdminWithAuth />,
      },
      {
        path: 'announcement',
        element: <AnnouncementWithAuth />,
      },
      {
        path: 'AddDiscussion',
        element: <AddDiscussionWithAuth />,
      },
      {
        path: 'AddAnnouncement',
        element: <AddAnnouncementWithAuth />,
      },
      {
        path: 'discussions',
        element: <DiscussionsWithAuth />,
      },
      {
        path: 'petition',
        element: <PetitionPageWithAuth />,
      },
      {
        path: 'AddPetition',
        element: <AddPetitionWithAuth />,
      },
      {
        path: 'DiscussionChat/:id',
        element: <DiscussionChatPageWithAuth />,
      },
      {
        path: 'AnnouncementChat/:id',
        element: <AnnouncementChatPageWithAuth />,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthWithAuth />,
    children: [
      {
        index: true,
        element: <LoginWithAuth />,
      },
      {
        path: 'regist',
        element: <RegisterWithAuth />,
      },
    ],
  },
]);

export default router;
