import classNames from 'classnames';
import styles from './play-list-item.module.scss';
import { PlayButton } from '../play-button/play-button';
import { IconWithText } from '../icon-with-text/icon-with-text';
import { HeartBtn } from '../heart-btn/heart-btn';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';

import Clock from '../../assets/clock.svg?react';
import Headphones from '../../assets/headphone.svg?react';

export interface PlayListItemProps {
    className?: string;
    song: Song;
    playing: boolean;
    index: number;
}

export type Song = {
    title: string;
    durationsInSeconds: number;
    listenedCount: number;
    liked: boolean;
    cover: string;
};

const parseDuration = (seconds: number) => {
    let secs: string | number = seconds % 60;
    secs = secs < 10 ? `0${secs}` : secs;
    let minutes: string | number = ((seconds / 60) | 0) % 60;
    const hours = (seconds / 60 / 60) | 0;
    minutes = minutes < 10 && hours > 0 ? `0${minutes}` : minutes;
    return hours > 0 ? `${hours}:${minutes}:${secs}` : `${minutes}:${secs}`;
};

export const PlayListItem = (props: PlayListItemProps) => {
    return (
        <li
            className={classNames(
                styles.root,
                props.className,
                props.playing ? styles.playing : null,
            )}
        >
            {props.playing ? <PlayButton /> : <div>{props.index}</div>}
            <div>
                <img src={props.song.cover} />
                {props.song.title}
            </div>
            <div>
                <Headphones width="1.2em" height="1.2em" className={styles.icon} />
                {props.song.listenedCount.toLocaleString()}
            </div>
            <div>
                <Clock width="1.2em" height="1.2em" className={styles.icon} />
                {parseDuration(props.song.durationsInSeconds)}
            </div>
            <HeartBtn liked={props.song.liked} />
            <DotsHorizontalIcon />
        </li>
    );
};
