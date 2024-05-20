import classNames from 'classnames';
import styles from './recently-played-item.module.scss';

export interface RecentlyPlayedItemData {
    title: string;
    artist: string;
    image: string;
    timestamp: string;    
}

export interface RecentlyPlayedItemProps extends RecentlyPlayedItemData {
    className?: string;
}

export const RecentlyPlayedItem = ({ className, title, artist, image, timestamp }: RecentlyPlayedItemProps) => {
    const backgroundImage = image ? `url("${image}")` : undefined;
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.image} style={{ backgroundImage }}/>
            <div className={styles.title}>{title}</div>
            <div className={styles.artist}>{artist}</div>
            <div className={styles.timestamp}>{timestamp}</div>
        </div>
    );
};
