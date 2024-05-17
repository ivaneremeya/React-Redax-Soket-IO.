import React from 'react';
import styles from './InvitateAlert.module.scss';

export const InviteAlert = ( title: string) => {
  return (
    <div className={styles.invitat__list__c}>
      <span>{title}</span>
    </div>
  );
};
