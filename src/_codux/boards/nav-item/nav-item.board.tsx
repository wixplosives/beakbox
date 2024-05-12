import { createBoard } from '@wixc3/react-board';
import { NavItem } from '../../../components/nav-item/nav-item';
import NavigationHomeIcon from '../../../assets/navigation-home-icon.svg?react';
import styles from '../../../components/nav-item/nav-item.module.scss';

export default createBoard({
    name: 'NavItem',
    Board: () => (
        <NavItem
            title={'Home'}
            icon={<NavigationHomeIcon className={styles.NavigationIcon} />}
            className={styles.listItems}
        />
    ),
    isSnippet: true,
});
