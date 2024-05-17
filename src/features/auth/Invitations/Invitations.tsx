import React from 'react';
import { useForm } from 'react-hook-form';
import { InputAuth } from '@/shared/ui/InputAuth/InputAuth';
import { useAppDispatch } from '@/app/store/hook';
import { CreateInvite } from './api/CreateInvite';
import styles from './Invitations.module.scss';
type FormData = {
  email: string;
};

export const Invitations = () => {
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    dispatch(CreateInvite(data.email));
  };
  return (
    <div>
      <h3 className={styles.invite__title}>Приглашение</h3>
      <form className={styles.invite__form} onSubmit={handleSubmit(onSubmit)}>
        <InputAuth
          error={errors.email}
          regist={register('email', { required: true, minLength: 4 })}
          placehol={'Введите email'}
          type={'email'}
          styl={styles.input__invite}
        />
        <button className={styles.invite__btn} type='submit'>
          Отправить
        </button>
      </form>
    </div>
  );
};
