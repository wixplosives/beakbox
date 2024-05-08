import classNames from 'classnames';
import styles from './nav-panel.module.scss';
import BeakboxlogoSvg from '../../assets/beakboxlogo.svg?react';
import NavbarHomeIcon from '../../assets/navbar-home-icon.svg?react';

export interface NavPanelProps {
    className?: string;
}

export const NavPanel = ({ className }: NavPanelProps) => {
    return (
        <div className={classNames(styles.root, className, styles.navBar)}>
            <div className={styles.logoContainer}>
                <BeakboxlogoSvg className={styles.beakBoxLogo} />
            </div>
            <div>
                <div>
                    <div className={styles.listItems}>
                        <NavbarHomeIcon className={styles.navBarIcon} />
                        Home
                    </div>
                    <div className={styles.listItems}>
                        <NavbarHomeIcon className={styles.navBarIcon} />
                        Discover
                    </div>
                    <div className={styles.listItems}>
                        <NavbarHomeIcon className={styles.navBarIcon} />
                        Radio
                    </div>
                    <div className={styles.listItems}>
                        <NavbarHomeIcon className={styles.navBarIcon} />
                        Albums
                    </div>
                    <div className={styles.listItems}>
                        <NavbarHomeIcon className={styles.navBarIcon} />
                    </div>
                </div>
            </div>
        </div>
    );
};
