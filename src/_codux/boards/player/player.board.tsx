import { createBoard } from '@wixc3/react-board';
import { Player } from '../../../components/player/player';

export default createBoard({
    name: 'Player',
    Board: () => <Player />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1321.9161676646706,
        canvasHeight: 112,
        windowWidth: 1445,
    },
});
