import { createBoard } from '@wixc3/react-board';
import { A } from '../../../components/player/player';
import Heart from '../../../assets/heart.svg?react';

export default createBoard({
    name: 'Player',
    Board: () => <A icon={<Heart />} />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 493,
    },
});
