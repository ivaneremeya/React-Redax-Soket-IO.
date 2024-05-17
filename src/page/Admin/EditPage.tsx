import React, { ChangeEvent } from 'react';
import { useForm } from 'react-hook-form';
import { InputAdmin } from './InputEdit';
import styles from './Edit.module.scss';
import { FetchPatchAdmin } from './api/FetchPatchAdmin';
import { useAppDispatch, useAppSelector } from '@/app/store/hook';
import { FetchFileAdmin } from './api/FetchFileAdmin';
import { Invitations } from '@/features/auth/Invitations/Invitations';
import { InviteList } from '@/features/auth/Invitations/InviteList';
import { FetchGetInvite } from '@/features/auth/Invitations/api/FetchGetInvite';
interface FormData {
  fio: string;
  email: string;
  password: string;
  institute: string;
  dorm: number;
  numberRoom: number;
}

export const EditPage = () => {
  const inputPhotoRef = React.useRef<HTMLInputElement>();
  const dispatch = useAppDispatch();
  const idFileImg = useAppSelector((state) => state.AdminFIleList.id);
  const urlFile = useAppSelector((state) => state.AdminFIleList.url);
  const { id } = useAppSelector((state) => state.persistedReducer.authList);

  React.useEffect(() => {
    dispatch(FetchGetInvite());
  }, []);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: any) => {
    const formData = { id, data: { ...data } };
    if (idFileImg !== 0) {
      formData.data.previewImage = idFileImg;
    }
    dispatch(FetchPatchAdmin(formData));
  };

  const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      dispatch(FetchFileAdmin(e.target.files[0]));
    }
  };
  return (
    <div className='container'>
      <h3 className={styles.admin__title}>Профиль</h3>
      <form className={styles.form__admin} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.Admin__wrapper__photo}>
          <div
            className={styles.Admin__photo}
            style={{ backgroundImage: `url(' ${urlFile} ') ` }}
          ></div>
          <label htmlFor='photoUpload' className='auth__btn'>
            Загрузить аватар
          </label>
          <input
            type='file'
            id='photoUpload'
            style={{ display: 'none' }}
            ref={inputPhotoRef}
            onChange={handlePhotoChange}
          />
        </div>

        <div className={styles.admin__input__col_2}>
          <InputAdmin
            error={errors.fio}
            regist={register('fio', { required: true, minLength: 4 })}
            placehol={'фамилия'}
            type={'text'}
            styl={styles.input__admin}
          />
          <InputAdmin
            error={errors.email}
            regist={register('email', { required: true, minLength: 4 })}
            placehol={'email'}
            type={'text'}
            styl={styles.input__admin}
          />
          <div className={styles.input__admin__wrapper}>
            <InputAdmin
              error={errors.password}
              regist={register('password', { required: true, minLength: 4 })}
              placehol={'Пароль'}
              type={'password'}
              styl={styles.input__admin__password}
            />
            <InputAdmin
              error={errors.password}
              regist={register('password', { required: true, minLength: 4 })}
              placehol={'Пароль'}
              type={'password'}
              styl={styles.input__admin__password}
            />
          </div>
        </div>
        <div className={styles.admin__input__col_2}>
          <InputAdmin
            error={errors.institute}
            regist={register('institute', { required: true, minLength: 4 })}
            placehol={'институт'}
            type={'text'}
            styl={styles.input__admin}
          />

          <InputAdmin
            error={errors.dorm}
            regist={register('dorm', { required: true, minLength: 1 })}
            placehol={'Общежитие'}
            type={'number'}
            styl={styles.input__admin}
          />

          <InputAdmin
            error={errors.numberRoom}
            regist={register('numberRoom', { required: true, minLength: 1 })}
            placehol={'номер комнаты'}
            type={'number'}
            styl={styles.input__admin}
          />

          <button className='auth__btn' type='submit'>
            Сохранить изменения
          </button>
        </div>
      </form>

      <Invitations />
      <InviteList />
    </div>
  );
};
