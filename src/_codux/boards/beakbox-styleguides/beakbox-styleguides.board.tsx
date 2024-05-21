import { createBoard } from '@wixc3/react-board';
import { BeakboxStyleguides } from '../../../components/beakbox-styleguides/beakbox-styleguides';

export default createBoard({
    name: 'BeakboxStyleguides',
    Board: () => <BeakboxStyleguides />,
    isSnippet: true,
    environmentProps: {
        windowBackgroundColor: '#000000',
        canvasBackgroundColor: '#000000',
    },
});
