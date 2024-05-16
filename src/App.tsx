import styles from './App.module.scss';
import { Navigation } from './components/navigation/navigation';
import { Player } from './components/player/player';
import { PlayList } from './components/play-list/play-list';
import { TopBar } from './components/top-bar/top-bar';

const songs = [
    {
        durationsInSeconds: 43,
        liked: true,
        listenedCount: 1134222,
        title: 'Ducks lake ',
        cover: '',
    },
    {
        durationsInSeconds: 627,
        liked: true,
        listenedCount: 0,
        title: 'What does the duck say',
        cover: '',
    },
    {
        durationsInSeconds: 72,
        liked: true,
        listenedCount: 584,
        title: 'Quack ho',
        cover: '',
    },
    {
        durationsInSeconds: 6789,
        liked: true,
        listenedCount: 156546,
        title: 'Who let the ducks out',
        cover: '',
    },
    {
        durationsInSeconds: 1,
        liked: true,
        listenedCount: 9999,
        title: 'Aint no duckshine',
        cover: '',
    },
];

function App() {
    return (
        <div className={styles.App}>
            <Navigation className={styles.navigation} />
            <main className={styles.main}>
                <TopBar className={styles.topbar} />
                <PlayList
                    title="Popular Songs"
                    songs={songs}
                    playing={songs[3]}
                    className={styles.playlist}
                />
            </main>
            <Player className={styles.player} />
        </div>
    );
}

export default App;
