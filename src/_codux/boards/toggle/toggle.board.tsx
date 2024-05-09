import { createBoard } from '@wixc3/react-board';
import { Toggle } from '../../../components/toggle/toggle';

export default createBoard({
    name: 'Toggle',
    Board: () => <Toggle />,
    isSnippet: true,
});