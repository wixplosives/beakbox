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
import { NavigationSection } from '../../types';
import { useContext } from 'react';
import { AppContext } from '../app-context';

export interface NavigationProps {
    className?: string;
    sections: NavigationSection[];
}

export const Navigation = ({ className, sections }: NavigationProps) => {
    const { selectSection, selectedSection } = useContext(AppContext);
    return (
        <div className={classNames(styles.root, className, styles.navigation)}>
            <div className={styles.logoContainer}>
                <Beakboxlogo className={styles.beakBoxLogo} />
            </div>
            {sections.map((section) => (
                <ul key={section.name} className={styles.menu}>
                    {section.name && <div className={styles.menuTitle}>{section.name}</div>}
                    {section.items.map((item) => (
                        <NavItem
                            selected={item.title === selectedSection}
                            key={item.title}
                            title={item.title}
                            icon={item.icon}
                            onSelect={selectSection}
                        />
                    ))}
                </ul>
            ))}
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
