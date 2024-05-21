import { createBoard } from '@wixc3/react-board';
import { Listeners } from '../../../components/listeners/listeners';

export default createBoard({
    name: 'Listeners ',
    Board: () => <Listeners />,
    isSnippet: true,
    environmentProps: {
        canvasBackgroundColor: '#000000',
    },
});
