import { createBoard } from '@wixc3/react-board';
import { Player } from '../../../components/player/player';

export default createBoard({
    name: 'Player',
    Board: () => <Player />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1320,
        canvasHeight: 112,
        windowWidth: 1877,
        windowBackgroundColor: '#615662',
        windowHeight: 790,
    },
});
