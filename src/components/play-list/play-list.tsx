import classNames from 'classnames';
import styles from './play-list.module.scss';
import { PlayListItem, type Song } from '../play-list-item/play-list-item';

export interface PlayListProps {
    className?: string;
    title: string;
    songs: Song[];
    playing: Song;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const PlayList = (props: PlayListProps) => {
    return (
        <div className={classNames(styles.root, props.className)}>
            {props.title}
            <ol>
                {props.songs.map((song, index) => (
                    <PlayListItem
                        index={index + 1}
                        key={song.title + song.cover}
                        song={song}
                        playing={song === props.playing}
                    />
                ))}
            </ol>
        </div>
    );
};
