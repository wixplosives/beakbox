import classNames from 'classnames';
import styles from './progress-bar.module.scss';

export interface ProgressBarProps {
    className?: string;
    progress: number; // 0-100
}

export const ProgressBar = ({ className, progress }: ProgressBarProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.inner} style={{ width: `${progress}%` }} />
        </div>
    );
};
