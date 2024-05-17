import { Merge, FieldErrorsImpl, FieldError } from 'react-hook-form';
import styles from './InputAuth.module.scss';

interface IProps {
  error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  regist: any;
  placehol: string;
  type: string;
  styl: string;
}

export const InputAuth = ({ error, regist, placehol, type, styl }: IProps) => {
  return (
    <div className={styles.input__wrapper}>
      <input
        className={styl}
        id={placehol}
        type={type}
        aria-invalid={error ? 'true' : 'false'}
        {...regist}
        placeholder={placehol}
      />
      {error && (
        <span style={{ color: 'red' }} role='alert'>
          This field is required
        </span>
      )}
    </div>
  );
};
