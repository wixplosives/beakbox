import { createBoard } from '@wixc3/react-board';
import { NavItem } from '../../../components/nav-item/nav-item';
import NavbarHomeIcon from '../../assets/navbar-home-icon.svg?react';

export default createBoard({
    name: 'NavItem',
    Board: () => <NavItem title={'Home'}  />,
    isSnippet: true,
});