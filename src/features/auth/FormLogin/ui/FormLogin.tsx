import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from '@/app/store/hook';
import { InputAuth } from '@/shared/ui/InputAuth/InputAuth';
import styles from './FormLogin.module.scss';
import { FetchAuth } from '../api/FetchAuth';
import { Link } from 'react-router-dom';

export interface FormLoginType {
  identifier: string;
  password: string;
}
export const FormLogin: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormLoginType>();

  const onSubmit: SubmitHandler<FormLoginType> = (data) => {
    dispatch(FetchAuth(data));
  };

  return (
    <div className={styles.formLogin__wrapper}>
      <h2>Авторизация</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.input__block}>
          <InputAuth
            error={errors.identifier}
            regist={register('identifier', { required: true, minLength: 4 })}
            placehol={'Почта'}
            type={'text'}
            styl={styles.input__auth}
          />
          <InputAuth
            error={errors.password}
            regist={register('password', { required: true, minLength: 4 })}
            placehol={'password'}
            type={'password'}
            styl={styles.input__auth}
          />
        </div>
        <div className={styles.login__span__wrapper}>
          <span>Запомнить меня</span>
          <Link className={styles.login__Link} to='/auth/regist'>
            Забыли пароль?
          </Link>
        </div>
        <button className='auth__btn' type='submit'>
          ВОЙТИ
        </button>
      </form>
      <span className={styles.formLogin__wrapper__span__button}>
        Авторизация доступна только по специальным приглошениям
      </span>
    </div>
  );
};
