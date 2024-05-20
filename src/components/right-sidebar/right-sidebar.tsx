import classNames from 'classnames';
import styles from './right-sidebar.module.scss';
import {
    RecentlyPlayedItemData,
    RecentlyPlayedItem,
} from '../recently-played-item/recently-played-item';
import { RecentlyPlayedList } from '../recently-played-list/recently-played-list';
import { FansAlsoLike } from '../fans-also-like/fans-also-like';
import { LornMaze } from '../../_codux/data/songs';

export interface RightSidebarProps {
    className?: string;
}

const fansAlsoLike = [LornMaze, LornMaze, LornMaze, LornMaze];
const recentlyPLayedItems = new Array(10).fill({ ...LornMaze, timestamp: '2 min ago' });

export const RightSidebar = ({ className }: RightSidebarProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <FansAlsoLike items={fansAlsoLike} />
            <RecentlyPlayedList>
                {recentlyPLayedItems.map((item, i) => (
                    <RecentlyPlayedItem key={i} {...item} />
                ))}
            </RecentlyPlayedList>
        </div>
    );
};
