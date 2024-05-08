import { createBoard } from '@wixc3/react-board';
import { NavPanel } from '../../../components/nav-panel/nav-panel';

export default createBoard({
    name: 'NavPanel',
    Board: () => <NavPanel />,
    isSnippet: true,
});