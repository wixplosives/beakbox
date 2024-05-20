import classNames from 'classnames';
import { songs } from '../../_codux/data/songs';
import { FansAlsoLike } from '../fans-also-like/fans-also-like';
import { RecentlyPlayedItem } from '../recently-played-item/recently-played-item';
import { RecentlyPlayedList } from '../recently-played-list/recently-played-list';
import styles from './right-sidebar.module.scss';
import { timeAgo } from '../time-ago';
import { AccountMenu } from '../account-menu/account-menu';

export interface RightSidebarProps {
    className?: string;
}

export const RightSidebar = ({ className }: RightSidebarProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <AccountMenu
                userName="James Newell Osterberg"
                userImage="/src/assets/iggy/iggy.jpg"
                isPremium={true}
            />
            <FansAlsoLike items={songs.slice(0, 4)} />
            <RecentlyPlayedList>
                {songs.map((item, i) => (
                    <RecentlyPlayedItem
                        key={i}
                        {...item}
                        timestamp={timeAgo({ minutes: 1 + 50 * i * i })}
                    />
                ))}
            </RecentlyPlayedList>
        </div>
    );
};
