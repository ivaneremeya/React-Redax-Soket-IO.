import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '../../app/bell.svg';

export const Header = () => {
  return (
    <header>
      <div className={styles.header__container}>
        <Link className={styles.header__btn} to='/'>
          МЫЩага
        </Link>

        <nav className={styles.header__nav}>
          <Link className={styles.header__nav_link} to='/discussions'>
            Главная
          </Link>
          <Link className={styles.header__nav_link} to='/announcement'>
            Объявления
          </Link>
          <Link className={styles.header__nav_link} to='/petition'>
            Стол заявок
          </Link>
          <Link className={styles.header__nav_link} to='/'>
            Мероприятия
          </Link>
        </nav>
        <div className={styles.header__wrapper}>
          <img src={logo} />
          <button className={styles.header__btn_anxiety}> кнопка тревоги</button>
          <Link className={styles.header__link} to='/edit'>
            <div className={styles.header__img}></div>
          </Link>
        </div>
      </div>
    </header>
  );
};
