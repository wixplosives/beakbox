import styles from './App.module.scss';
import { Navigation } from './components/navigation/navigation';
import { Player } from './components/player/player';

function App() {
    return (
        <div className={styles.App}>
            <Navigation />
            <Player className={styles.player} />
        </div>
    );
}

export default App;
