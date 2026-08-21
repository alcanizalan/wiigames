
import FooterMenu from '@/components/footers/footer-games/footer-menu';
import GameSelector from '@/components/ui/game-selector/game-selector';

import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.main}>
  
      <main className={styles.mainContent}>
        <GameSelector />
      </main>
      <FooterMenu />
    </div>
  );
}
