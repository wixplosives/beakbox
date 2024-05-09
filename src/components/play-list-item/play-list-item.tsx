import classNames from 'classnames';
import styles from './play-list-item.module.scss';
import { PlayButton } from '../play-button/play-button';
import { IconWithText } from '../icon-with-text/icon-with-text';
import clock from '../../assets/clock.svg'
import { HeartBtn } from '../heart-btn/heart-btn';
import {DotsHorizontalIcon} from '@radix-ui/react-icons'
export interface PlayListItemProps {
    className?: string;
}

export const PlayListItem = ({ className }: PlayListItemProps) => {
    return (
        <li className={classNames(styles.root, className)}>
            <PlayButton />
            <IconWithText iconSrc={''} text={'Shape of you'} />
            <IconWithText iconSrc={clock} text={'3,912,2343'} />
            <IconWithText iconSrc={clock} text={'4:07'} />
            <HeartBtn />
            <DotsHorizontalIcon />
        </li>
    );
};
