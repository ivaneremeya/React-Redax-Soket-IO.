import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './app/routers/Router';
import './app/_normalize.scss';
import './app/global.scss';
import { useAppDispatch, useAppSelector } from './app/store/hook';
import { FetchUserMe } from './entities/auth/api/FetchUserMe';
import { AuthStatus } from './features/auth/FormLogin/model/LoginSlice';

function App() {
  const dispatch = useAppDispatch();
  const userAuth = useAppSelector((state) => state.persistedReducer.authList.authStatus);

  React.useEffect(() => {
    if (userAuth === AuthStatus.Initial) {
      dispatch(FetchUserMe());
    }
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
