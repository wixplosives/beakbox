import { createBoard } from '@wixc3/react-board';
import { HeaderWithLink } from '../../../components/header-with-link/header-with-link';

export default createBoard({
    name: 'HeaderWithLink',
    Board: () => <HeaderWithLink>
        <span>Header Text</span>
        <a href="#">Link</a>
    </HeaderWithLink>,
    isSnippet: true,
});