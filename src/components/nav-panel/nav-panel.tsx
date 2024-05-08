import classNames from 'classnames';
import styles from './nav-panel.module.scss';
import BeakboxlogoSvg from '../../assets/beakboxlogo.svg?react';
import NavbarHomeIcon from '../../assets/navbar-home-icon.svg?react';
import NavbarDiscoverIcon from '../../assets/navbar-discover-icon.svg?react';
import NavbarRadioIcon from '../../assets/navbar-radio-icon.svg?react';
import NavbarAlbumsIcon from '../../assets/navbar-albums-icon.svg?react';
import NavbarPodcastsIcon from '../../assets/navbar-podcasts-icon.svg?react';

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
                    <div className={classNames(styles.listItems, styles.selectedItem)}>
                        <NavbarHomeIcon className={styles.navBarIcon} />
                        Home
                    </div>
                    <div className={styles.listItems}>
                        <NavbarDiscoverIcon className={styles.navBarIcon} />
                        Discover
                    </div>
                    <div className={styles.listItems}>
                        <NavbarRadioIcon className={styles.navBarIcon} />
                        Radio
                    </div>
                    <div className={styles.listItems}>
                        <NavbarAlbumsIcon className={styles.navBarIcon} />
                        Albums
                    </div>
                    <div className={styles.listItems}>
                        <NavbarPodcastsIcon className={styles.navBarIcon} />
                        Podcasts
                    </div>
                </div>
            </div>
        </div>
    );
};
