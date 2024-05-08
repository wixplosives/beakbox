import classNames from 'classnames';
import styles from './player.module.scss';
import Heart from '../../assets/heart.svg';
import Backward from '../../assets/backward.svg';
import Forward from '../../assets/forward.svg';
import PauseCircle from '../../assets/pause-circle.svg';
import PlayCircle from '../../assets/play-circle.svg';
import RepeateOne from '../../assets/repeate-one.svg';
import VolumeHigh from '../../assets/volume-high.svg';
import Shuffle from '../../assets/shuffle.svg';

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
            <Heart />
            <Shuffle />
            <Backward />
            <PlayCircle />
            <PauseCircle />
            <Forward />
            <RepeateOne />
            <VolumeHigh />
        </div>
    );
};
