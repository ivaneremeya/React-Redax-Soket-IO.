import React from 'react';
import styles from './AnnouncemenChatItem.module.scss';
import { useAppSelector } from '@/app/store/hook';

type AnnouncemenChatItemProps = {
  name: {
    fio: string;
    id: number;
    username: string;
  };
  text: string;
  createdAt: string;
  anonym: boolean;
};

export const AnnouncemenChatItem: React.FC<AnnouncemenChatItemProps> = ({
  name,
  text,
  createdAt,
  anonym,
}) => {
  const userAuthId = useAppSelector((state) => state.persistedReducer.authList.id);

  const urlFile = useAppSelector((state) => state.AdminFIleList.url);
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    };
    return date.toLocaleTimeString('ru-RU', options);
  };
  const formattedDate = formatDate(createdAt);


  return (
    <div className={styles.item__container}>
      <div className={userAuthId === name.id ? styles.photo__wrapper : styles.otherMessage}>
        <h1
          className={
            userAuthId === name.id ?styles.chat__item__title_hidden :  styles.chat__item__title
          }
        >
          {name.username}
        </h1>
        <div className={styles.chat__item__wrapper}>
          <p className={styles.chat__item__desc}>{text}</p>
          <span className={styles.chat__item__span}> {formattedDate}</span>
        </div>
      </div>

      <div className={styles.item__photo} style={{ backgroundImage: `url(' ${urlFile} ') ` }}></div>
    </div>
  );
};


