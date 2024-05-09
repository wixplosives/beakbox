import { createBoard } from '@wixc3/react-board';
import { NavItem } from '../../../components/nav-item/nav-item';
import NavigationHomeIcon from '../../../assets/navigation-home-icon.svg?react';


export default createBoard({
    name: 'NavItem',
    Board: () => <NavItem title={'Home'} icon={<NavigationHomeIcon className={NavItem_module.NavigationIcon}  />}  />,
    isSnippet: true,
});