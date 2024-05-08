import classNames from 'classnames';
import React, { FunctionComponent, SVGProps, useState } from 'react';
import styles from './nav-item.module.scss';
import NavbarHomeIcon from '../../assets/navbar-home-icon.svg?react';

export interface NavItemProps {
    icon?: FunctionComponent<SVGProps<SVGSVGElement>>;
    title: string;
    selected?: boolean;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NavItem = ({ icon: Icon, title }: NavItemProps) => {
    const [selected, setSelected] = useState(false);

    const handleClick = () => {
        setSelected(!selected); // Toggle selection state
    };
    return (
        <div
            className={classNames(
                styles.listItems,
                {
                    [styles.selectedItem]: selected,
                },
                            )}
            onClick={handleClick} // Set onClick handler
        >
         
            <NavbarHomeIcon className={styles.navBarIcon} />
            {title}
        </div>
    );
};
