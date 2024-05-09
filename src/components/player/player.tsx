import classNames from 'classnames';
import styles from './player.module.scss';
import Heart from '../../assets/heart.svg?react';
import Shuffle from '../../assets/shuffle.svg?react';
import Backward from '../../assets/backward.svg?react';
import PauseCircle from '../../assets/pause-circle.svg?react';
import Forward from '../../assets/forward.svg?react';
import RepeateOne from '../../assets/repeate-one.svg?react';
import VolumeHigh from '../../assets/volume-high.svg?react';
import MusicFilter from '../../assets/music-filter.svg?react';
import JazzDuckWebp from '../../assets/sample-images/jazz-duck.webp';

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
            <div className={styles.currentlyPlaying}>
                <img src={JazzDuckWebp} className={styles.thumbnail} />
                <span className={styles.playingSong}>
                    <h2 className={styles.title}>Quack</h2>
                    <h4 className={styles.artistName}>Jazz Duck</h4>
                </span>
                <Heart />
            </div>
            <div className={styles.actions}>
                <Shuffle />
                <Backward />
                <PauseCircle className={styles.mainAction} />
                <Forward />
                <RepeateOne />
            </div>
            <div>
                <VolumeHigh />
                <MusicFilter />
            </div>
        </div>
    );
};
