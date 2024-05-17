import React from 'react';
import { Outlet } from 'react-router-dom';
import logo from '@/app/info.png';
import styles from './Auth.module.scss';

export const Auth = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '1440px' }}>
      <Outlet />
      <div className={styles.image__container}>
        <img src={logo} alt='общага' />
      </div>
    </div>
  );
};
