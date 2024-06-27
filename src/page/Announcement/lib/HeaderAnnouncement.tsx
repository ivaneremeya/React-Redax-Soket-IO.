import React from 'react';
import { Link } from 'react-router-dom';
import { GetFiltrAnnouncement } from '../api/GetFiltrAnnouncement';
import { useAppDispatch } from '@/app/store/hook';
import styles from './HeaderAnnouncement.module.scss';

export const HeaderAnnouncement = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <nav className={styles.HeaderAnnouncement}>
        <div></div>
        <div className={styles.HeaderAnnouncement__btn__container}>
          <button
            className={styles.HeaderAnnouncement__btn}
            onClick={() => {
              dispatch(GetFiltrAnnouncement('Нашёл'));
            }}
          >
            Нашёл
          </button>
          <button
            className={styles.HeaderAnnouncement__btn}
            onClick={() => {
              dispatch(GetFiltrAnnouncement('Обмен'));
            }}
          >
            Обмен
          </button>
          <button
            className={styles.HeaderAnnouncement__btn}
            onClick={() => {
              dispatch(GetFiltrAnnouncement('Ищу'));
            }}
          >
            Ищу
          </button>
        </div>
        <Link className={styles.Announcement__btn} to='/AddAnnouncement'>
          Подать объявление
        </Link>
      </nav>
    </>
  );
};
