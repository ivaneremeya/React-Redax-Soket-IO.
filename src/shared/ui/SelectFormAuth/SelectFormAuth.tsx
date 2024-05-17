import styles from './SelectFormAuth.module.scss';

export const SelectFormAuth = ({ register }) => {
  return (
    <div>
      <select className={styles.select__auth} {...register}>
        <option value=''>--Please choose an option--</option>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
      </select>
    </div>
  );
};
