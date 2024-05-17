import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { InputAuth } from '@/shared/ui/InputAuth/InputAuth';
import styles from '../FormLogin/ui/FormLogin.module.scss';
import { SelectFormAuth } from '@/shared/ui/SelectFormAuth/SelectFormAuth';
import axios from 'axios';

export const FormRegistr: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: any) => {
    try {
      await axios.post('http://localhost:1337/api/auth/local/register', data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.formLogin__wrapper}>
      <h2>Регистрация</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.input__block}>
          <InputAuth
            error={errors.username}
            regist={register('username', { required: true, minLength: 4 })}
            placehol={'имя'}
            type={'text'}
            styl={styles.input__auth}
          />
          <InputAuth
            error={errors.fio}
            regist={register('fio', { required: true, minLength: 4 })}
            placehol={'фамилия'}
            type={'text'}
            styl={styles.input__auth}
          />
          <InputAuth
            error={errors.email}
            regist={register('email', { required: true, minLength: 4 })}
            placehol={'email'}
            type={'text'}
            styl={styles.input__auth}
          />

          <SelectFormAuth register={register('dorm')} />
          <InputAuth
            error={errors.institute}
            regist={register('institute', { required: true, minLength: 4 })}
            placehol={'институт'}
            type={'text'}
            styl={styles.input__auth}
          />
          <InputAuth
            error={errors.numberRoom}
            regist={register('numberRoom', { required: true, minLength: 1 })}
            placehol={'номер комнаты'}
            type={'number'}
            styl={styles.input__auth}
          />
        </div>
        <button className='auth__btn' type='submit'>
          Зарегистрироваться
        </button>
      </form>
      <Link className={styles.formLogin__wrapper__span__button} to='/auth'>
        Уже зарегистрированы?
      </Link>
    </div>
  );
};
