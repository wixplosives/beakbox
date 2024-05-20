import classNames from 'classnames';
import styles from './right-sidebar.module.scss';
import { RecentlyPlayedItem } from '../recently-played-item/recently-played-item';
import { RecentlyPlayedList } from '../recently-played-list/recently-played-list';
import { FansAlsoLike } from '../fans-also-like/fans-also-like';
import { songs } from '../../_codux/data/songs';

export interface RightSidebarProps {
    className?: string;
}

export const RightSidebar = ({ className }: RightSidebarProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <FansAlsoLike items={songs.slice(0, 4)} />
            <RecentlyPlayedList>
                {songs.map((item, i) => (
                    <RecentlyPlayedItem key={i} {...item} timestamp={`${i} hr ago`} />
                ))}
            </RecentlyPlayedList>
        </div>
    );
};
