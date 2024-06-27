import React from 'react';
import { Link } from 'react-router-dom';
import styles from './DiscussionItem.module.scss';

interface Props {
  title?: string;
  id?: number;
  updatedAt?: string;
}

export const DiscussionItem = (prop: Props) => {
  return (
    <>
      <Link to={`/DiscussionChat/${prop.id}`} key={prop.id}>
        <div className={styles.discussion__item__container}>
          <div>
            <h3>Общее обсуждение</h3>
            <span>{prop.title}</span>
          </div>
          <div>
            <h3>Сообщений:</h3>
            <span>12344</span>
          </div>
          <div>
            <h3>Последнее обновление</h3>
            <span>{prop.updatedAt}</span>
          </div>
        </div>
      </Link>
    </>
  );
};
