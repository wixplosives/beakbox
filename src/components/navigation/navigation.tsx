import classNames from 'classnames';
import styles from './navigation.module.scss';
import BeakboxlogoSvg from '../../assets/beakboxlogo.svg?react';
import NavigationHomeIcon from '../../assets/navigation-home-icon.svg?react';
import NavigationDiscoverIcon from '../../assets/navigation-discover-icon.svg?react';
import NavigationRadioIcon from '../../assets/navigation-radio-icon.svg?react';
import NavigationAlbumsIcon from '../../assets/navigation-albums-icon.svg?react';
import NavigationPodcastsIcon from '../../assets/navigation-podcasts-icon.svg?react';
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
                <NavItem
                    title={'Home'}
                    icon={<NavigationHomeIcon className={NavItem_module.navigationIcon} />}
                    className={NavItem_module.listItems}
                />
                <NavItem
                    title={'Discover'}
                    icon={<NavigationDiscoverIcon className={NavItem_module.navigationIcon} />}
                    className={NavItem_module.listItems}
                />
                <NavItem
                    title={'Radio'}
                    icon={<NavigationRadioIcon className={NavItem_module.navigationIcon} />}
                    className={NavItem_module.listItems}
                />
                <NavItem
                    title={'Albums'}
                    icon={<NavigationAlbumsIcon className={NavItem_module.navigationIcon} />}
                    className={NavItem_module.listItems}
                />
                <NavItem
                    title={'Podcasts'}
                    icon={<NavigationPodcastsIcon className={NavItem_module.navigationIcon} />}
                    className={NavItem_module.listItems}
                />
            </div>
        </div>
    );
};
