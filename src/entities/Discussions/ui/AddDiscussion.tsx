import React from 'react';
import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/app/store/hook';
import { CreateDiscussion } from '../api/CreateDiscussion';
import { GetSelectDiscusCategor } from '../api/GetSelectDiscusCategor';
import { InputModalForm } from '@/page/Admin/InputEdit';
import styles from './Discusion.module.scss';

export const AddDiscussion = () => {
  const dispatch = useAppDispatch();
  const CategoriesList = useAppSelector((state) => state.DiscussionsList.Categories);
  console.log(CategoriesList);
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = async (data: any) => {
    const { title, category } = data;

    dispatch(CreateDiscussion({ title, category: category.value }));
    console.log(data);
  };

  React.useEffect(() => {
    dispatch(GetSelectDiscusCategor());
  }, []);

  return (
    <div className={styles.discusc__container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Новая тема</h2>

        <InputModalForm
          error={errors.title}
          regist={register('title', { required: true, minLength: 4 })}
          placehol={'Заголовок'}
          type={'text'}
          styl={styles.discusc__input}
        />
        <Controller
          name='category'
          control={control}
          render={({ field }) => (
            <div className={styles.select__wrapper}>
              {CategoriesList.length > 0 ? (
                <Select
                  options={CategoriesList.map((cat, i) => ({ value: i, label: cat.name }))}
                  {...field}
                  placeholder='Выберите категорию'
                />
              ) : (
                <p>Загрузка данных...</p>
              )}
            </div>
          )}
        />

        <InputModalForm
          error={errors.chat}
          regist={register('chat', { required: true, minLength: 2 })}
          placehol={'Описание'}
          type={'text'}
          styl={styles.discusc__input2}
        />
        <button className={styles.discusc__btn} type='submit'>
          Создать
        </button>
      </form>
    </div>
  );
};
