import React from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/app/store/hook';
import { InputModalForm } from '@/page/Admin/InputEdit';
import styles from '../../Discussions/ui/Discusion.module.scss';
import { CreateFetchPetition } from '../api/CreateFetchPetition';

export const AddPetition = () => {
  const dispatch = useAppDispatch();
  const CategoriesList = useAppSelector((state) => state.DiscussionsList.Categories);
  console.log(CategoriesList);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const { title, description } = data;

    dispatch(CreateFetchPetition({ title, description }));
    console.log(data);
  };

  return (
    <div className={styles.discusc__container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Подача петиции</h2>

        <InputModalForm
          error={errors.title}
          regist={register('title', { required: true, minLength: 4 })}
          placehol={'Заголовок петиции'}
          type={'text'}
          styl={styles.discusc__input}
        />

        <InputModalForm
          error={errors.description}
          regist={register('description', { required: true, minLength: 2 })}
          placehol={'Описание петиции'}
          type={'text'}
          styl={styles.discusc__input2}
        />
        <button className={styles.discusc__btn} type='submit'>
          Подать
        </button>
      </form>
    </div>
  );
};
