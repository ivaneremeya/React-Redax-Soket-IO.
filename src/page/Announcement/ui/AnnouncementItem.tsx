import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AnnouncementPage.module.scss';
import { API_BASE_URL } from '@/shared/api/config';

export const AnnouncementItem = ({url, title, descr, id}) => {
  return (
    <>
      <li className={styles.header__announcment__item}>
        <img
          className={styles.header__announcment__img}
          src={API_BASE_URL + url}
          alt='img'
        />
        <div className={styles.announcment__wrapper__text}>
          <h3>{title}</h3>
          <p>{descr}</p>
        </div>
        <Link
          className={styles.announcment__content__btn}
          to={`/AnnouncementChat/${id}`}
          key={id}
        >
          Подробнее
        </Link>
      </li>
    </>
  );
};
