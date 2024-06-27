import React from 'react';
import styles from './DIscussionChatItem.module.scss';
import { useAppSelector } from '@/app/store/hook';

type DiscussionChatItemProps = {
  name: string;
  text: string;
  createdAt: string;
  anonym: boolean;
};

export const DiscussionChatItem: React.FC<DiscussionChatItemProps> = ({
  name,
  text,
  createdAt,
  anonym,
}) => {
  const urlFile = useAppSelector((state) => state.AdminFIleList.url);
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
    };
    return date.toLocaleDateString('ru-RU', options);
  };
  const formattedDate = formatDate(createdAt);

  return (
    <div className={styles.item__container}>
      <div className={styles.photo__wrapper}>
        <div className={styles.photo__wrapper__block}>
          <div
            className={styles.item__photo}
            style={{ backgroundImage: `url(' ${urlFile} ') ` }}
          ></div>
          <span className={styles.item__photo__span}>{anonym ? 'аноним' : name}</span>
        </div>

        <p>{text}</p>
      </div>
      <div>
        <span className={styles.item__span_data}> {formattedDate}</span>
      </div>
    </div>
  );
};
