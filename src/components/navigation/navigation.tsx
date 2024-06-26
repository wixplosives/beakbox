import classNames from 'classnames';
import styles from './navigation.module.scss';
import Beakboxlogo from '../../assets/beakboxlogo.svg?react';
import NavigationHomeIcon from '../../assets/navigation-home-icon.svg?react';
import NavigationDiscoverIcon from '../../assets/navigation-discover-icon.svg?react';
import NavigationRadioIcon from '../../assets/navigation-radio-icon.svg?react';
import NavigationAlbumsIcon from '../../assets/navigation-albums-icon.svg?react';
import NavigationPodcastsIcon from '../../assets/navigation-podcasts-icon.svg?react';
import { NavItem } from '../nav-item/nav-item';
import NavigationRecentlyIcon from '../../assets/navigation-recently-icon.svg?react';
import NavigationFavoriteIcon from '../../assets/navigation-favorite-icon.svg?react';
import NavigationLocalIcon from '../../assets/navigation-local-icon.svg?react';
import NavigationAddplaylistIcon from '../../assets/navigation-addplaylist-icon.svg?react';
import NavigationPlaylistIcon from '../../assets/navigation-playlist-icon.svg?react';

export interface navigationProps {
    className?: string;
}

export const Navigation = ({ className }: navigationProps) => {
    return (
        <div className={classNames(styles.root, className, styles.navigation)}>
            <div className={styles.logoContainer}>
                <Beakboxlogo className={styles.beakBoxLogo} />
            </div>
            <ul className={styles.menu}>
                <NavItem
                    title={'Home'}
                    icon={<NavigationHomeIcon className={styles.navigationIcon} />}
                />
                <NavItem
                    title={'Discover'}
                    icon={<NavigationDiscoverIcon className={styles.navigationIcon} />}
                />
                <NavItem
                    title={'Radio'}
                    icon={<NavigationRadioIcon className={styles.navigationIcon} />}
                />
                <NavItem
                    title={'Albums'}
                    icon={<NavigationAlbumsIcon className={styles.navigationIcon} />}
                />
                <NavItem
                    title={'Podcasts'}
                    icon={<NavigationPodcastsIcon className={styles.navigationIcon} />}
                />
            </ul>
            <ul className={styles.menu}>
                <div className={styles.menuTitle}>Library</div>
                <NavItem
                    title={'Recently Added'}
                    icon={<NavigationRecentlyIcon className={styles.navigationIcon} />}
                />
                <NavItem
                    title={'Favorite Songs'}
                    icon={<NavigationFavoriteIcon className={styles.navigationIcon} />}
                />
                <NavItem
                    title={'Local Files'}
                    icon={<NavigationLocalIcon className={styles.navigationIcon} />}
                />
            </ul>
            <ul className={styles.menu}>
                <div className={styles.menuTitle}>
                    Playlist
                    <button className={styles.addPlaylistButton}>
                        <NavigationAddplaylistIcon />
                    </button>
                </div>
                <NavItem
                    title={'Lo-fi Music'}
                    icon={<NavigationPlaylistIcon className={styles.navigationIcon} />}
                />
                <NavItem
                    title={'Best of Bon Jovi'}
                    icon={<NavigationPlaylistIcon className={styles.navigationIcon} />}
                />
                <NavItem
                    title={'Best of FKJ'}
                    icon={<NavigationPlaylistIcon className={styles.navigationIcon} />}
                />
            </ul>
        </div>
    );
};
