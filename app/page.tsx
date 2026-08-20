
import SquareButton from '@/components/ui/button/square-button/sqaure-button';
import styles from './page.module.css';

import { RoundedButton } from '@/components/ui/button/rounded-button/rounded-button';

export default function Home() {
  return (
    <main className={styles.main}>
      <RoundedButton children="Click Me" />
      <SquareButton children="Click Me" />
    </main>
  );
}
