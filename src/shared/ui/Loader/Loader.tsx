import styles from './Loader.module.scss';

export const Loader = () => {
  const loaderStyle = {
    width: '200px',
    height: '200px',
    background: '#fff',
  };

  return <div className={styles.loader} style={loaderStyle}></div>;
};
