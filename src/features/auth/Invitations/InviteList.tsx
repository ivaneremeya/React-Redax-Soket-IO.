import React from 'react';
import styles from './InvitationsList.module.scss';
import { InviteItem } from '@/entities/admin/unvite/InviteItem';
import { useAppSelector } from '@/app/store/hook';

export const InviteList = () => {
  const InvitListObj = useAppSelector((state) => state.InvitationList.invitations);

  return (
    <div>
      <div className={styles.invitat__list__col}>
        <span className={styles.invitat__list__title}>Email</span>
        <span className={styles.invitat__list__title}>Дата отправки</span>
        <span className={styles.invitat__list__title}>Статус</span>
      </div>
      <ul>
        {InvitListObj.map((val) => (
          <InviteItem
            key={val.id}
            email={val.email}
            createdAt={val.createdAt}
            activated={val.activated}
          />
        ))}
      </ul>
    </div>
  );
};
