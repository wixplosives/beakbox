import classNames from 'classnames';
import React, { useState } from 'react';
import styles from './nav-item.module.scss';

export interface NavItemProps {
    className?: string;
    icon?: React.ReactNode;
    title: string;
    selected?: boolean;
    onSelect?: (title: string) => void;
}

export const NavItem = ({ className, icon: Icon, title, selected, onSelect }: NavItemProps) => {
    return (
        <li
            className={classNames(
                className,
                {
                    [styles.selectedItem]: selected,
                },
                styles.listItem
            )}
            onClick={() => onSelect?.(title)}
        >
            <div
                className={classNames(styles.icon, {
                    [styles.selectedIcon]: selected,
                })}
            >
                {Icon}
            </div>
            {title}
        </li>
    );
};
