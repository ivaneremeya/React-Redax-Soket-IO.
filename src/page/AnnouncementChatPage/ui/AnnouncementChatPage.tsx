import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './AnnouncementChatPage.module.scss';
import { GetAnnouncementChatItem } from '../api/GetAnnouncementChatItem';
import { useAppDispatch, useAppSelector } from '@/app/store/hook';
import { AnnouncemenChatDescr } from '@/entities/AnnouncemenChat/ui/AnnouncemenChatDescr';
import { Chat } from '@/widgets/Chat/Chat';
import style from '../../../widgets/Chat/DiscussionChatPage.module.scss';

export const AnnouncementChatPage = () => {
  let { id } = useParams();
  const dispatch = useAppDispatch();
  const AnnouncementChatItemById = useAppSelector((state) =>
    state.AnnouncementChatItem.announcement.find((item) => item.id === Number(id)),
  );
   
  React.useEffect(() => {
    console.log(id, 'id');

    dispatch(GetAnnouncementChatItem(id));
  }, [id]);
  console.log(AnnouncementChatItemById?.chat?.id, 'AnnouncementChatItemById');

  return (
    <div className={styles.chat__contantainer}>
      {AnnouncementChatItemById && (
        <AnnouncemenChatDescr
          title={AnnouncementChatItemById.title}
          description={AnnouncementChatItemById.description}
          phone={AnnouncementChatItemById.phone}
          publishedAt={AnnouncementChatItemById.publishedAt}
        />
      )}
      <Chat
        styl={style.chat__contantainer}
        chatId={AnnouncementChatItemById ? AnnouncementChatItemById?.chat?.id : null}
        isFullScreenChat={true}
     />
    </div>
  );
};
