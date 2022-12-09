import { Container } from '../Container';
import { Card } from '../card/Card';
import styles from '../cardList/cardList.module.css';

export const CardList = ({ list }) => {
  return (
    <Container>
      <div className={styles['card-list']}>
        {list.map((item) => {
          const { name } = item;
          return <Card key={name.common} {...item} />;
        })}
      </div>
    </Container>
  );
};
