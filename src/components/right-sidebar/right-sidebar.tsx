import classNames from 'classnames';
import styles from './right-sidebar.module.scss';
import {
    RecentlyPlayedItemData,
    RecentlyPlayedItem,
} from '../recently-played-item/recently-played-item';
import { RecentlyPlayedList } from '../recently-played-list/recently-played-list';
import { FansAlsoLike } from '../fans-also-like/fans-also-like';

export interface RightSidebarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

const items: RecentlyPlayedItemData[] = new Array(10).fill({
    artist: 'Lorn',
    title: 'The Maze to Nowhere',
    image: '/src/assets/album-covers/lorn-vessel.jpg',
    timestamp: '2 min ago',
});

export const RightSidebar = ({ className }: RightSidebarProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <FansAlsoLike />
            <RecentlyPlayedList>
                {items.map((item, i) => (
                    <RecentlyPlayedItem key={i} {...item} />
                ))}
            </RecentlyPlayedList>
        </div>
    );
};
