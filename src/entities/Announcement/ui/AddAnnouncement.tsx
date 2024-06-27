import React, { ChangeEvent, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { InputModalForm } from '@/page/Admin/InputEdit';
import { useAppDispatch, useAppSelector } from '@/app/store/hook';
import styles from './AddAnnouncement.module.scss';
import { PhotoAnnouncement } from '../api/PhotoAnnouncement';
import { CreateAnnouncement } from '../api/CreateAnnouncement';
import { GetFiltrAnnouncement } from '@/page/Announcement/api/GetFiltrAnnouncement';

export const AddAnnouncement = () => {
  const AnnouncementId = useAppSelector((state) => state.AnnouncementList.imgList);
  const [type] = useAppSelector((state) => state.AnnouncementList.Announcement);
  const Announcement = useAppSelector((state) => state.AnnouncementList);

  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const inputPhotoRef = useRef<HTMLInputElement>();

  const onSubmit = async (data: any) => {
    const { title, description } = data;

    const formData = {
      title,
      description,
      preview: String(AnnouncementId.id),
      type: type.type,
      phone: type.phone,
    };
    console.log(formData, 'formData');

    dispatch(CreateAnnouncement(formData));
  };

  const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      dispatch(PhotoAnnouncement(e.target.files[0]));
    }
  };
  React.useEffect(() => {
    if (!Announcement.Announcement.length) {
      dispatch(GetFiltrAnnouncement('Обмен'));
    }
  }, []);
  return (
    <div className={styles.Announcement__container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputModalForm
          error={errors.title}
          regist={register('title', { required: true, minLength: 4 })}
          placehol='Заголовок объявления'
          type='text'
          styl={styles.Announcement__input}
        />
        <InputModalForm
          error={errors.description}
          regist={register('description', { required: true, minLength: 4 })}
          placehol='Описание объявления'
          type='text'
          styl={styles.Announcement__input2}
        />

        <div>
          <p className={styles.Announcement__photo__text}>Фото</p>
          <div className={styles.Announcement__photo}></div>
        </div>
        <div>
          <label className={styles.Announcement__label} htmlFor='photoUpload'>
            Перетащите или нажмите на меня
          </label>
        </div>
        <input
          type='file'
          id='photoUpload'
          style={{ display: 'none' }}
          ref={inputPhotoRef}
          onChange={handlePhotoChange}
        />

        <button className={styles.Announcement__btn} type='submit'>
          Опубликовать
        </button>
      </form>
    </div>
  );
};
