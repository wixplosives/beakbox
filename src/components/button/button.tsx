import classNames from 'classnames';
import styles from './button.module.scss';
import type React from 'react';

export interface ButtonProps {
    className?: string;
    title: string;
    children?: React.ReactNode;
}

export const Button = ({ className, title }: ButtonProps) => {
    return <button className={classNames(styles.root, className, styles.Outline)}>{title}</button>;
};
