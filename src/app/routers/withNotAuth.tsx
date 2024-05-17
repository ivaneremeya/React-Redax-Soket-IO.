import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../store/hook';
import { AuthStatus } from '@/features/auth/FormLogin/model/LoginSlice';
import { Loader } from '@/shared/ui/Loader/Loader';

const withNotAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  return (props: P) => {
    const userAuth = useAppSelector((state) => state.persistedReducer.authList.authStatus);

    if (userAuth === AuthStatus.Anonymous) {
      return <WrappedComponent {...props} />;
    }
    if (userAuth === AuthStatus.Pending) {
      return <Loader />;
    }
    return <Navigate to='/' />;
  };
};

export default withNotAuth;
