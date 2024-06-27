import React from 'react';
import styles from './AnnouncemenChatDescr.module.scss';
import { Slider } from '@/widgets/Slider/Slider';

type AnnouncemenChatDescrProps = {
  title: string;
  description: string;
  phone: string;
  publishedAt: string;
};

export const AnnouncemenChatDescr: React.FC<AnnouncemenChatDescrProps> = ({
  title,
  description,
  phone,
  publishedAt,
}) => {
  return (
    <div className={styles.chat__contantainer}>
      <div className={styles.chat__wrapper__img}>
        <h3 className={styles.chat__descr__title}>{title}</h3>
        <div>
          <Slider />
        </div>
        <p>{description}</p>
      </div>
      <div className={styles.chat__data}>
        <div className={styles.chat__data__item__link}>
          <span>Данные для связи:</span>
          <p>{phone}</p>
        </div>
        <div className={styles.chat__data__item__create}>
          <span>Дата создания:</span>
          <p>{publishedAt}</p>
        </div>
      </div>
    </div>
  );
};
