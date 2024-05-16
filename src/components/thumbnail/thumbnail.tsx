import classNames from 'classnames';
import styles from './thumbnail.module.scss';

export interface ThumbnailProps {
    className?: string;
    imageUrl?: string;
}

export const Thumbnail = ({ className, imageUrl }: ThumbnailProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img src={imageUrl} className={styles.thumbnail} />
        </div>
    );
};
