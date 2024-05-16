import classNames from 'classnames';
import styles from './thumbnail.module.scss';

export interface ThumbnailProps {
    className?: string;
    imageUrl?: string;
}

export const Thumbnail = ({ className, imageUrl }: ThumbnailProps) => {
    return (
            <img src={imageUrl} className={classNames(styles.thumbnail, className)} />
    );
};
