import { createBoard } from '@wixc3/react-board';
import { FansAlsoLike } from '../../../components/fans-also-like/fans-also-like';
import { songs } from '../../data/songs';

export default createBoard({
    name: 'FansAlsoLike',
    Board: () => <FansAlsoLike items={songs.slice(0, 4)} />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 200,
    },
});
