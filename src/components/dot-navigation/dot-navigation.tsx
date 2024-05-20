import classNames from 'classnames';
import styles from './dot-navigation.module.scss';

export interface DotNavigationProps {
    className?: string;
    count: number;
    selectedIndex: number;
    onChange?(selectedIndex: number): void;
}

export const DotNavigation = ({ className, count, selectedIndex, onChange }: DotNavigationProps) => {
    const dots: React.ReactElement[] = [];

    for (let i = 0; i < count; i++) {
        dots.push(
            <div
                key={i}
                className={classNames(styles.dot, { [styles.selected]: i === selectedIndex })}
                onClick={() => onChange?.(i)}
            />,
        );
    }
    return <div className={classNames(styles.root, className)}>{dots}</div>;
};
