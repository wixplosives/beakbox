import classNames from 'classnames';
import React, {  useState } from 'react';
import styles from './nav-item.module.scss';

export interface NavItemProps {
    icon?: React.ReactNode;
    title: string;
    selected?: boolean;
}

export const NavItem = ({ icon: Icon, title }: NavItemProps) => {
    const [selected, setSelected] = useState(false);

    const handleClick = () => {
        setSelected(!selected); 
    };
    return (
        <div
            className={classNames(styles.listItems, {
                [styles.selectedItem]: selected,
            })}
            onClick={handleClick} 
        >
            {Icon}
            {title}
        </div>
    );
};
