import { useParams } from 'react-router-dom';
import { Chat } from '@/widgets/Chat/Chat';
import styles from './DiscussionChatPage2.module.scss';

export const DiscussionChatPage: React.FC = () => {
  let { id } = useParams();

  return (
    <>
      <Chat flag={true} styl={styles.chat__contantainer} chatId={id} isFullScreenChat={false} />
    </>
  );
};
