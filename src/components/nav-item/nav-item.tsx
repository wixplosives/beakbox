import classNames from 'classnames';
import React, { useState } from 'react';
import styles from './nav-item.module.scss';

export interface NavItemProps {
    className?: string;
    icon?: React.ReactNode;
    title: string;
    selected?: boolean;
}

export const NavItem = ({ className, icon: Icon, title }: NavItemProps) => {
    const [selected, setSelected] = useState(false);

    const handleClick = () => {
        setSelected(!selected);
    };
    return (
        <div
            className={classNames(className, {
                [styles.selectedItem]: selected,
            })}
            onClick={handleClick}
        >
            <div
                className={classNames(styles.icon, {
                    [styles.selectedIcon]: selected,
                })}
            >
                {Icon}
            </div>
            {title}
        </div>
    );
};
