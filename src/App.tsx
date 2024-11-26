import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import router from './app/routers/Router';
import './app/_normalize.scss';
import './app/global.scss';
import { useAppDispatch, useAppSelector } from './app/store/hook';
import { FetchUserMe } from './entities/auth/api/FetchUserMe';
import { AuthStatus } from './features/auth/FormLogin/model/LoginSlice';
import { SocketProvider } from './shared/provider/SocketProvider';

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
      {/* <SocketProvider>
      </SocketProvider>
      {true && (
        <ToastContainer
          position='bottom-right'
          autoClose={10000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      )} */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
