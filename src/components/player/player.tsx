import classNames from 'classnames';
import styles from './player.module.scss';
import Heart from '../../assets/heart.svg?react';
import Backward from '../../assets/backward.svg?react';
import Forward from '../../assets/forward.svg?react';
import PauseCircle from '../../assets/pause-circle.svg?react';
import PlayCircle from '../../assets/play-circle.svg?react';
import RepeateOne from '../../assets/repeate-one.svg?react';
import VolumeHigh from '../../assets/volume-high.svg?react';
import Shuffle from '../../assets/shuffle.svg?react';
import Heart0 from '../../../../';


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
            <A icon={<Heart0 />} />
        </div>
    );
};

export function A({ icon: Icon }: { icon?: React.ReactNode }) {
    return <div>{Icon}</div>;
}
