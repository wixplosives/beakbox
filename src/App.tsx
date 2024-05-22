import styles from './App.module.scss';
import { Navigation } from './components/navigation/navigation';
import { Player } from './components/player/player';
import { PlayList } from './components/play-list/play-list';
import { TopBar } from './components/top-bar/top-bar';
import { useState } from 'react';
import { AppContext } from './components/app-context';
import { NAVIGATION_SECTIONS, SONGS } from './constants';
import RapperDuck from './assets/sample-images/rapper-duck.webp';
import ChillDuck from './assets/sample-images/chill-duck.webp';
import EighteesDuck from './assets/sample-images/eightees-duck.webp';
import DjDuck from './assets/sample-images/dj-duck.webp';
import JazzDuck from './assets/sample-images/jazz-duck.webp';
import CoupleDuck from './assets/sample-images/couple-duck.webp';
import { PopularReleases } from './components/popular-releases/popular-releases';
import { FansAlsoLike } from './components/fans-also-like/fans-also-like';
import { songs } from './_codux/data/songs';


const popularReleasesSamples = [
    { imageUrl: ChillDuck, title: 'Anat Marley', subTitleOne: '2420', subTitleTwo: 'Song' },
    { imageUrl: RapperDuck, title: 'Pete-D', subTitleOne: '2012', subTitleTwo: 'Song' },
    { imageUrl: CoupleDuck, title: 'Itay & Ben', subTitleOne: '2069', subTitleTwo: 'Album' },
    { imageUrl: JazzDuck, title: 'Alexey Davis', subTitleOne: '2017', subTitleTwo: 'Album' },
    { imageUrl: DjDuck, title: 'Omry Smaduck', subTitleOne: '2020', subTitleTwo: 'Song' },
    { imageUrl: ChillDuck, title: 'ZagZag', subTitleOne: '2023', subTitleTwo: 'Song' },
    { imageUrl: EighteesDuck, title: 'Mcducky', subTitleOne: '2020', subTitleTwo: 'Album' },
];
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
                    <PopularReleases popularData={popularReleasesSamples} />
                </main>
                <FansAlsoLike items={songs.slice(0, 4)} />
                <Player className={styles.player} />
            </div>
        </AppContext.Provider>
    );
}

export default App;
