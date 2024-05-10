import classNames from 'classnames';
import styles from './play-list-item.module.scss';
import { PlayButton } from '../play-button/play-button';
import { IconWithText } from '../icon-with-text/icon-with-text';
import clock from '../../assets/clock.svg';
import { HeartBtn } from '../heart-btn/heart-btn';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';
export interface PlayListItemProps {
    className?: string;
    song: Song;
    playing:boolean;
    index:number;
}

export type Song = {
    title: string;
    durationsInSeconds: number;
    listenedCount: number;
    liked:boolean;
    cover:string;    
};

const parseDuration = (seconds: number) => {
    let secs:string|number =  seconds % 60;
    secs = secs < 10 ? `0${secs}` : secs
    let minutes:string|number = ((seconds / 60) | 0) % 60;
    const hours = (seconds / 60 / 60) | 0;
    minutes = minutes<10  && hours > 0? `0${minutes}` : minutes
    return hours > 0 ? `${hours}:${minutes}:${secs}` : `${minutes}:${secs}`;
};

export const PlayListItem = (props: PlayListItemProps) => {
    return (
        <li className={classNames(styles.root, props.className, props.playing?styles.playing:null)}>
            {props.playing ? <PlayButton /> : <div>{props.index}</div>}
            <IconWithText iconSrc={props.song.cover} text={props.song.title} />
            <IconWithText iconSrc={clock} text={props.song.listenedCount.toLocaleString()} />
            <IconWithText iconSrc={clock} text={parseDuration(props.song.durationsInSeconds)} />
            <HeartBtn liked={props.song.liked}/>
            <DotsHorizontalIcon />
        </li>
    );
};
