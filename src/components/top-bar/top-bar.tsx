import classNames from 'classnames';
import styles from './top-bar.module.scss';
import TopbarBackButton from '../../assets/topbar-back-button.svg?react';
import { TopBarBreadcrumb } from '../top-bar-breadcrumb/top-bar-breadcrumb';
import { Search } from '../search/search';
import topbarNotificationIcon from '../../assets/topbar-notification-icon.svg?react';
import TopbarNotificationIcon from '../../assets/topbar-notification-icon.svg?react';

export interface TopBarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const TopBar = ({ className }: TopBarProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <button className={classNames(styles.overideNativeButton, styles.topBarBackButton)}>
                <TopbarBackButton className={styles.buttonIcon} />
            </button>
            <TopBarBreadcrumb />
            <Search />
            <button className={classNames(styles.overideNativeButton, styles.topBarBackButton)}>
                <TopbarNotificationIcon className={styles.buttonIcon} />
            </button>
        </div>
    );
};
