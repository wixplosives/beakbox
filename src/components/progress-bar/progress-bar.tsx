import classNames from 'classnames';
import styles from './progress-bar.module.scss';

export interface ProgressBarProps {
    className?: string;
    progress: number; // 0-100
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ProgressBar = ({ className, progress }: ProgressBarProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.inner} style={{width: `${progress}%`}} />
        </div>
    );
};
