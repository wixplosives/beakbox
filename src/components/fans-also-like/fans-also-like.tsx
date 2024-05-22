import classNames from 'classnames';
import styles from './fans-also-like.module.scss';
import { HeaderWithLink } from '../header-with-link/header-with-link';
import { DotNavigation } from '../dot-navigation/dot-navigation';
import { useState } from 'react';

export interface FansAlsoLikeItem {
    title: string;
    artist: string;
    image: string;
}

export interface FansAlsoLikeProps {
    className?: string;
    items: FansAlsoLikeItem[];
}

export const FansAlsoLike = ({ className, items }: FansAlsoLikeProps) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const item = items[selectedIndex];

    return (
        <div className={classNames(styles.root, className)}>
            <HeaderWithLink>
                <span>Fans Also Like</span>
                <a>See All</a>
            </HeaderWithLink>
            <div className={styles.item}>
                <img src={item.image} className={styles.image} />
                <div className={styles.titleAndArtist}>
                    <div className={styles.title}>{item.title}</div>
                    <div className={styles.artist}>{item.artist}</div>
                </div>
            </div>
            <DotNavigation
                count={items.length}
                selectedIndex={selectedIndex}
                onChange={setSelectedIndex}
            />
        </div>
    );
};
