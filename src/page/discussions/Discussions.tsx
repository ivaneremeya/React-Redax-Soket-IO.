import React from 'react';
import { useAppDispatch, useAppSelector } from '@/app/store/hook';
import { GetDiscussions } from './api/GetDiscussions';
import { HeaderDiscussions } from './lib/HeaderDiscussions';
import styles from './Discussion.module.scss';
import { DiscussionItem } from '@/features/DiscussionItem/ui/DiscussionItem';

export const Discussions = () => {
  const dispatch = useAppDispatch();
  const DiscussionsList = useAppSelector((state) => state.DiscussionsList.Discussions);

  React.useEffect(() => {
    dispatch(GetDiscussions());
  }, []);
  return (
    <div className={styles.discussion__container}>
      <HeaderDiscussions />
      <ul>
        {DiscussionsList.map((val) => (
          <DiscussionItem key={val.id} id={val.id} title={val.title} updatedAt={val.updatedAt} />
        ))}
      </ul>
    </div>
  );
};
