import classNames from 'classnames';
import styles from './player.module.scss';

export interface PlayerProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Player = ({ className }: PlayerProps) => {
    return <div className={classNames(styles.root, className)}></div>;
};
