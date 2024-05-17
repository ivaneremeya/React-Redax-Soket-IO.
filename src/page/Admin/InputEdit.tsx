import { Merge, FieldErrorsImpl, FieldError } from 'react-hook-form';
import styles from '@/shared/ui/InputAuth/InputAuth.module.scss';

interface IProps {
  error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  regist: any;
  placehol: string;
  type: string;
  styl: string;
}

export const InputAdmin = ({ error, regist, placehol, type, styl }: IProps) => {
  return (
    <div className={styles.input__wrapper}>
      <label className={styles.input__wrapper__label} htmlFor={placehol}>
        {placehol}
      </label>
      <input
        className={styl}
        id={placehol}
        type={type}
        aria-invalid={error ? 'true' : 'false'}
        {...regist}
      />
      {error && (
        <span style={{ color: 'red' }} role='alert'>
          This field is required
        </span>
      )}
    </div>
  );
};
3;
