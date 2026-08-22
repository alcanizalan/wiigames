
import FooterMenu from '@/components/footers/footer-menu/footer-menu';
import GameSelector from '@/components/ui/game-selector/game-selector';
import Clock from '@/components/ui/clock/clock';

import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.main}>
      <main className={styles.mainContent}>
        <div className={styles.gameSelectorContainer}>
          <GameSelector image="/thumbnails/alnchess_thumbnail.png" link="/games/alnchess"  />
          <GameSelector image="/thumbnails/alntiktaktoe_thumbnail.png" link="/games/alntiktaktoe" />
          <GameSelector />
          <GameSelector />
          <GameSelector />
          <GameSelector />
          <GameSelector />
          <GameSelector />
          <GameSelector />
          <GameSelector />
          <GameSelector />
          <GameSelector />
        </div>
        <div className={styles.clock}>
          <Clock />
        </div>
      </main>
      <FooterMenu />
    </div>
  );
}
