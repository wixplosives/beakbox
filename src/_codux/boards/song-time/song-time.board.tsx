import { createBoard } from '@wixc3/react-board';
import { SongTime } from '../../../components/song-time/song-time';

export default createBoard({
    name: 'SongTime',
    Board: () => <SongTime />,
    isSnippet: true,
});