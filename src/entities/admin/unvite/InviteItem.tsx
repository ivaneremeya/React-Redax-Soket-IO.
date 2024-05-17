import React from 'react';
import styles from './InvitatItem.module.scss';

interface InviteItemProps {
  email: string;
  createdAt: string;
  activated: boolean;
}

export const InviteItem: React.FC<InviteItemProps> = ({ email, createdAt, activated }) => {
  return (
    <li className={styles.invitat__list__col}>
      <span>{email}</span>
      <span>{createdAt}</span>
      <span className={activated ? styles.invitat__span__activated : styles.invitat__span}>
        {activated ? 'Принято' : 'Отправлено'}
      </span>
    </li>
  );
};
