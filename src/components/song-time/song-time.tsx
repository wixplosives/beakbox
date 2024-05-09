import classNames from 'classnames';
import styles from './song-time.module.scss';

export interface SongTimeProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const SongTime = ({ className }: SongTimeProps) => {
    return <div className={classNames(styles.root, className)}>SongTime</div>;
};
