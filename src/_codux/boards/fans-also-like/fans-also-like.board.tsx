import { createBoard } from '@wixc3/react-board';
import { FansAlsoLike } from '../../../components/fans-also-like/fans-also-like';
import { LornMaze } from '../../data/songs';

export default createBoard({
    name: 'FansAlsoLike',
    Board: () => <FansAlsoLike items={[LornMaze, LornMaze, LornMaze, LornMaze]} />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 200,
    },
});
