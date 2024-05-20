import classNames from 'classnames';
import styles from './fans-also-like.module.scss';
import LornVesselJpg from '../../assets/album-covers/lorn-vessel.jpg';
import { HeaderWithLink } from '../header-with-link/header-with-link';
import { DotNavigation } from '../dot-navigation/dot-navigation';

export interface FansAlsoLikeProps {
    className?: string;
}

export const FansAlsoLike = ({ className }: FansAlsoLikeProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <HeaderWithLink>
                <span>Fans Also Like</span>
                <a>See All</a>
            </HeaderWithLink>
            <img src={LornVesselJpg} className={styles.image} />
            <DotNavigation count={4} selectedIndex={0} />
        </div>
    );
};
