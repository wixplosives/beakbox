import styles from './App.module.scss';
import { Navigation } from './components/navigation/navigation';
import { Player } from './components/player/player';
import { PlayList } from './components/play-list/play-list';
import { TopBar } from './components/top-bar/top-bar';
import { useState } from 'react';
import { AppContext } from './components/app-context';
import { NAVIGATION_SECTIONS, SONGS } from './constants';

function App() {
    const [selectedSection, selectSection] = useState('Home');

    return (
        <AppContext.Provider value={{ selectedSection, selectSection }}>
            <div className={styles.App}>
                <Navigation sections={NAVIGATION_SECTIONS} className={styles.navigation} />
                <main className={styles.main}>
                    <TopBar className={styles.topbar} />
                    <PlayList
                        title="Popular Songs"
                        songs={SONGS}
                        playing={SONGS[3]}
                        className={styles.playlist}
                    />
                </main>
                <Player className={styles.player} />
            </div>
        </AppContext.Provider>
    );
}

export default App;
