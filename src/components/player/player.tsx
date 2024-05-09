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

export interface PlayerProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Player = ({ className }: PlayerProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <ProgressBar progress={30} className={styles.progress} />
            <div className={styles.main}>
                <div className={styles.currentlyPlaying}>
                    <img src={EighteesDuckWebp} className={styles.thumbnail} />
                    <span className={styles.playingSong}>
                        <h2 className={styles.title}>Quack</h2>
                        <h4 className={styles.artistName}>Cool Duck</h4>
                    </span>
                    <Heart className={styles.icon} />
                </div>
                <div className={styles.actions}>
                    <Shuffle />
                    <Backwards />
                    <PauseCircle className={styles.mainAction} />
                    <Forward />
                    <Repeat />
                </div>
                <div className={styles.playingStatus}>
                    <span>1:45 / 4:42</span>
                    <ProgressBar progress={50} className={styles.volumeBar} />
                    <MusicFilter />
                </div>
            </div>
        </div>
    );
};
