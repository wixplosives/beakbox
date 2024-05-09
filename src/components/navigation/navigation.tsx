import classNames from 'classnames';
import styles from './navigation.module.scss';
import BeakboxlogoSvg from '../../assets/beakboxlogo.svg?react';
import navigationHomeIcon from '../../assets/navigation-home-icon.svg?react';
import navigationDiscoverIcon from '../../assets/navigation-discover-icon.svg?react';
import navigationRadioIcon from '../../assets/navigation-radio-icon.svg?react';
import navigationAlbumsIcon from '../../assets/navigation-albums-icon.svg?react';
import navigationPodcastsIcon from '../../assets/navigation-podcasts-icon.svg?react';
import { NavItem } from '../nav-item/nav-item';
import NavItem_module from '../nav-item/nav-item.module.scss';

export interface navigationProps {
    className?: string;
}

export const Navigation = ({ className }: navigationProps) => {
    return (
        <div className={classNames(styles.root, className, styles.navigation)}>
            <div className={styles.logoContainer}>
                <BeakboxlogoSvg className={styles.beakBoxLogo} />
            </div>
            <div>
                <div>
                    <NavItem
                        title={'Home'}
                        icon={<navigationHomeIcon className={NavItem_module.navigationIcon} />}
                    />
                    <div className={classNames(styles.listItems, styles.selectedItem)}>
                        <navigationHomeIcon className={styles.navigationIcon} />
                        Home
                    </div>
                    <div className={styles.listItems}>
                        <navigationDiscoverIcon className={styles.navigationIcon} />
                        Discover
                    </div>
                    <div className={styles.listItems}>
                        <navigationRadioIcon className={styles.navigationIcon} />
                        Radio
                    </div>
                    <div className={styles.listItems}>
                        <navigationAlbumsIcon className={styles.navigationIcon} />
                        Albums
                    </div>
                    <div className={styles.listItems}>
                        <navigationPodcastsIcon className={styles.navigationIcon} />
                        Podcasts
                    </div>
                </div>
            </div>
        </div>
    );
};
