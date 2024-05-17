import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../store/hook';
import { AuthStatus } from '@/features/auth/FormLogin/model/LoginSlice';

const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  return (props: P) => {
    const userAuth = useAppSelector((state) => state.persistedReducer.authList.authStatus);

    if (userAuth === AuthStatus.Authorized) {
      return <WrappedComponent {...props} />;
    }

    return <Navigate to='/auth' />;
  };
};

export default withAuth;
