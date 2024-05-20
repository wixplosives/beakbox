import { createBoard } from '@wixc3/react-board';
import { FansAlsoLike } from '../../../components/fans-also-like/fans-also-like';

export default createBoard({
    name: 'FansAlsoLike',
    Board: () => <FansAlsoLike />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 200,
    },
});
