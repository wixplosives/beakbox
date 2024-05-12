import { createBoard } from '@wixc3/react-board';
import { ProgressBar } from '../../../components/progress-bar/progress-bar';

export default createBoard({
    name: 'ProgressBar',
    Board: () => <ProgressBar progress={50} />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 176,
        canvasHeight: 8,
    },
});
