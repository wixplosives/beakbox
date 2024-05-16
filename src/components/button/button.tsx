import classNames from 'classnames';
import styles from './button.module.scss';
import type React from 'react';

export interface ButtonProps {
    className?: string;
    title: string;
    children?: React.ReactNode;
    type?: 'button' | 'text' | 'outline';
}

export const Button = ({ className, title, type = 'button' }: ButtonProps) => {
    return <button className={classNames(styles.root, className, styles[type])}>{title}</button>;
};
