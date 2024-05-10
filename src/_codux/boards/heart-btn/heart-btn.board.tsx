import { createBoard } from '@wixc3/react-board';
import { HeartBtn } from '../../../components/heart-btn/heart-btn';

export default createBoard({
    name: 'HeartBtn',
    Board: () => <HeartBtn liked={true}/>,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 87,
    },
});