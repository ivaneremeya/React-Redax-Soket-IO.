import { createBrowserRouter } from 'react-router-dom';
import { Home } from '@/page/home/Home';
import { Discussions } from '@/page/discussions/Discussions';
import { EditPage } from '@/page/Admin/EditPage';
import { Auth } from '@/page/auth/ui/Auth';
import withAuth from './withAuth';
import { FormRegistr } from '@/features/auth/FormRegistr/FormRegistr';
import { FormLogin } from '@/features/auth/FormLogin/ui/FormLogin';
import withNotAuth from './withNotAuth';

const HomeWithAuth = withAuth(Home);
const AdminWithAuth = withAuth(EditPage);
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
