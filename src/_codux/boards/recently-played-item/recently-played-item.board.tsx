import { createBoard } from '@wixc3/react-board';
import { RecentlyPlayedItem } from '../../../components/recently-played-item/recently-played-item';

export default createBoard({
    name: 'RecentlyPlayedItem',
    Board: () => (
        <RecentlyPlayedItem
            artist="Lorn"
            title="The Maze to Nowhere"
            image="/src/assets/album-covers/lorn-vessel.jpg"
            timestamp="2 min ago"
        />
    ),
    isSnippet: true,
});
