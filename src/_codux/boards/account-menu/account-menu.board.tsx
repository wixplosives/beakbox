import { createBoard } from '@wixc3/react-board';
import { AccountMenu } from '../../../components/account-menu/account-menu';

export default createBoard({
    name: 'AccountMenu',
    Board: () => (
        <AccountMenu
            userName="James Newell Osterberg"
            userImage="/src/assets/iggy/iggy.jpg"
            isPremium={true}
        />
    ),
    isSnippet: true,
});
