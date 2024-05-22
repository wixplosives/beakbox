import classNames from 'classnames';
import styles from './player.module.scss';
import PauseCircle from '../../assets/pause-circle.svg?react';
import RepeateOne from '../../assets/repeate-one.svg?react';
import MusicFilter from '../../assets/music-filter.svg?react';
import Shuffle from '../../assets/shuffle.svg?react';
import Backwards from '../../assets/backwards.svg?react';
import Forward from '../../assets/forward.svg?react';
import Repeat from '../../assets/repeat.svg?react';
import { ProgressBar } from '../progress-bar/progress-bar';
import Heart from '../../assets/heart.svg?react';
import EighteesDuckWebp from '../../assets/sample-images/eightees-duck.webp';
import Volume from '../../assets/volume.svg?react';

export interface PlayerProps {
    className?: string;
}

export const Player = ({ className }: PlayerProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <ProgressBar progress={80} className={styles.progress} />
            <div className={styles.main}>
                <div className={styles.currentlyPlaying}>
                    <img src={EighteesDuckWebp} className={styles.thumbnail} />
                    <span className={styles.playingSong}>
                        <h2 className={styles.title}>Quack</h2>
                        <h4 className={styles.artistName}>DJ DuckFace</h4>
                    </span>
                    <Heart className={styles.icon} />
                </div>
                <div className={styles.actions}>
                    <Shuffle />
                    <Backwards />
                    <PauseCircle className={styles.mainAction} />
                    <audio autoPlay loop>
                        <source src="./src/assets/quackquack.mp3" type="audio/mpeg"  />
                    </audio>
                    <Forward />
                    <Repeat />
                </div>
                <div className={styles.playingStatus}>
                    <span className={styles.time}>1:45 / 4:42</span>
                    <div className={styles.volumeControl}>
                        <Volume />
                        <ProgressBar progress={50} className={styles.volumeBar} />
                    </div>
                    <MusicFilter />
                </div>
            </div>
        </div>
    );
};
