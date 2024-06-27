import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderDiscussions.module.scss';


export const HeaderDiscussions = () => {
  return (
    <div className={styles.header__discussion__container}>
      <button className={styles.header__discussion__catagories}>Категории</button>
      <button className={styles.header__discussion__sort}>Сортировка</button>
      <input placeholder='Поиск...' type='text' />
      <Link className={styles.header__discussion__link} to='/AddDiscussion'>Новая тема</Link>
    </div>
  );
};
