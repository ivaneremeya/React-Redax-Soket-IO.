import React from 'react';
import { useAppDispatch, useAppSelector } from '@/app/store/hook';
import { HeaderAnnouncement } from '../lib/HeaderAnnouncement';
import styles from './AnnouncementPage.module.scss';
import { GetFiltrAnnouncement } from '../api/GetFiltrAnnouncement';
import { AnnouncementItem } from './AnnouncementItem';

export const AnnouncementPage = () => {
  const dispatch = useAppDispatch();
  const AnnouncementList = useAppSelector((state) => state.AnnouncementList.Announcement);
  const AnnouncementUrl = useAppSelector((state) => state.AnnouncementList.preview);
  console.log('AnnouncementUrl', AnnouncementList);

  React.useEffect(() => {
    dispatch(GetFiltrAnnouncement('Обмен'));
  }, []);

  return (
    <div className={styles.announcement__page__container}>
      <HeaderAnnouncement />
      <ul className={styles.header__announcment__wrapper}>
        {AnnouncementList.map((val, i) => (
          <AnnouncementItem
            key={val.id}
            url={AnnouncementUrl[i]?.url}
            title={val.title}
            descr={val.description}
            id={val.id}
          />
        ))}
      </ul>
    </div>
  );
};
