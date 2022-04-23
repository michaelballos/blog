import { 
  Card,
  Center,
  Stack,
  Button,
  Anchor
} from '@mantine/core';
import styles from '../styles/ContactCard.module.css';

interface ICard {
  title: string;
  href: string;
  label: string;
}
const ContactCard = ({title, href, label}: ICard ) => {
  return (
    <>
    <Card
      className={styles.card}
    >
      <Center>
        <Stack>
          <Center>
            <h1
              className={styles.title}
            >{title}</h1>
          </Center>
          <Button
            className={styles.button}
          >
            <Anchor
              className={styles.link}
              href={href}
            >
              {label}
            </Anchor>
          </Button>
        </Stack>
      </Center>
    </Card>
  </>
  );
};

export default ContactCard;
