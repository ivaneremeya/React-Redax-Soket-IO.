import React from 'react';
import { io, Socket } from 'socket.io-client';
import { API_BASE_URL } from '@/shared/api/config';
import { useParams } from 'react-router-dom';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import styles from './DiscussionChatPage.module.scss';
import { IMessage } from '@/features/auth/DiscussionChat/ui/type/Messages';
import { DIscussionInput } from '@/widgets/DiscussionInput/DIscussionInput';
import { AnnouncemenChatItem } from '@/entities/AnnouncemenChatItem/ui/AnnouncemenChatItem';
import { DiscussionChatItem } from '@/entities/DiscussionChat/ui/DIscussionChatItem';
interface DiscussionChatItemProps {
  name: {
    fio: string;
    id: number;
    username: string;
  };
  text: string;
  createdAt: Date;
  anonym: boolean;
}

interface ISendMessage {
  text: string;
  anonym: boolean;
}

interface Props {
  chatId: number | null;
  isFullScreenChat?: boolean;
  styl: string;
}

export const Chat: React.FC<Props> = ({ chatId, isFullScreenChat, styl }) => {
  const [messages, setMessages] = React.useState<IMessage[]>([]);
  const socket = React.useRef<null | Socket>(null);
  const messagesWrapper = React.useRef<null | HTMLDivElement>(null);

  console.log('messages', messages);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  React.useEffect(() => {
    socket.current = io(`${API_BASE_URL}`, {
      auth: {
        token: `${localStorage.getItem('acses')}`,
      },
    });

    socket.current.on('connect', () => {
      socket.current?.on('chat', (data) => {
        if (data && data.messages) {
          setMessages(() => data.messages);
        } else {
          console.error('Invalid data received:', data);
        }
      });
      socket.current?.on('message', (data) => {
        setMessages((prev) => (prev ? [...prev, data] : [data]));
      });
    });
    socket.current.emit('chat:get', {
      chatId,
    });

    socket.current.on('disconnect', (reason) => {
      console.log(reason);
    });

    return () => {
      socket.current?.disconnect();
    };
  }, [chatId]);
  React.useEffect(() => {
    if (messagesWrapper.current) {
      messagesWrapper.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, [messages]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    try {
      console.log(data.anonym, 'anonym');
      socket.current?.emit('message:send', {
        message: data.text,
        anonym: data.anonym,
      });
      reset({ text: '' });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={styl}>
      <h3>Общее обсуждение</h3>

      <div className={styles.chat__list}>
        {isFullScreenChat
          ? messages?.map((val) => (
              <AnnouncemenChatItem
                key={val.id}
                name={val.user}
                text={val.text}
                createdAt={val.createdAt}
                anonym={val.anonym}
              />
            ))
          : messages?.map((val) => (
              <DiscussionChatItem
                key={val.id}
                text={val.text}
                createdAt={val.createdAt}
                anonym={val.anonym}
                name={val.user.username}
              />
            ))}
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.chat__input__wrapper}>
          <DIscussionInput
            error={errors.text}
            regist={register('text', { required: true, minLength: 4 })}
            placehol='Введите сообщение'
            type='text'
            styl={styles.chat__contantainer}
          />
          <button type='submit'>
            <svg
              width='22'
              height='22'
              viewBox='0 0 22 22'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M21 1L10 12'
                stroke='#F4F5F4'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M21 1L14 21L10 12L1 8L21 1Z'
                stroke='#F4F5F4'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </div>
        <div className={styles.chat__checkbox__container}>
          <input type='checkbox' id='anonym' {...register('anonym')} />
          <label htmlFor='anonym'>Анонимно</label>
        </div>
      </form>
    </div>
  );
};
