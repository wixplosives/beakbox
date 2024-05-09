import { createBoard } from '@wixc3/react-board';
import { NavItem } from '../../../components/nav-item/nav-item';
import NavbarHomeIcon from '../../../assets/navigation-home-icon.svg';

export default createBoard({
    name: 'NavItem',
    Board: () => <NavItem title={'Home'} icon={<NavbarHomeIcon  />}  />,
    isSnippet: true,
});