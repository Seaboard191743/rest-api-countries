import styles from './container.module.css';

export const Container = ({ children, ...props }) => {
  return <div className={styles.container}>{children}</div>;
};
