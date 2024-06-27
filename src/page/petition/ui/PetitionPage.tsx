import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Petition.module.scss';
import { useAppDispatch, useAppSelector } from '@/app/store/hook';
import { GetPetition } from '../api/GetPetition';
import min from '../../../app/minus.svg';
import plus from '../../../app/plus.svg';

export const PetitionPage = () => {
  const dispatch = useAppDispatch();
  const PetitionList = useAppSelector((state) => state.PetitionsList.petition);

  React.useEffect(() => {
    dispatch(GetPetition());
  }, []);

  return (
    <div className={styles.petition__container}>
      <div className={styles.petition__nav}>
        <Link className={styles.petition__nav__btn} to='/AddPetition'>
          Подать заявку
        </Link>
      </div>
      <div className={styles.petition__content}>
        <ul>
          {PetitionList.map((val) => (
            <li className={styles.petition__list__item} key={val.id}>
              <div className={styles.petition__text__container}>
                <h3>{val.title}</h3>
                <span>{val.description}</span>
              </div>

              <div className={styles.wrapper__count}>
                <span>{val.count < 0 ? val.count : val.count === 0 ? '' : '+' + val.count}</span>
                <div className={styles.wrapper__plus__min}>
                  <button>
                    <img src={plus} alt='плюс' />
                  </button>
                  <button>
                    <img src={min} alt='минус' />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
