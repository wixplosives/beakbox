import { createBoard } from '@wixc3/react-board';
import { PlayListItem } from '../../../components/play-list-item/play-list-item';

export default createBoard({
    name: 'PlayListItem',
    Board: () => <PlayListItem />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 673,
    },
});
