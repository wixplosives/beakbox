import classNames from 'classnames';
import styles from './recently-played-list.module.scss';
import { HeaderWithLink } from '../header-with-link/header-with-link';

export interface RecentlyPlayedListProps {
    className?: string;
    children: React.ReactNode;
}

export const RecentlyPlayedList = ({ className, children }: RecentlyPlayedListProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <HeaderWithLink>
                Recently Played
                <a>See All</a>
            </HeaderWithLink>
            {children}
        </div>
    );
};
