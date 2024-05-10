import classNames from 'classnames';
import styles from './play-button.module.scss';
import { Toggle } from '../toggle/toggle';
import { PlayIcon, PauseIcon } from '@radix-ui/react-icons';
export interface PlayButtonProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const PlayButton = ({ className }: PlayButtonProps) => (
    <Toggle
        on={<PlayIcon height="1.2em" width="1.2em" className={styles.root} />}
        off={<PauseIcon height="1.2em" width="1.2em" className={styles.root} />}
        className={classNames(className, styles.root, 'play')}
    />
);
