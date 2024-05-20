import { createBoard } from '@wixc3/react-board';
import { RecentlyPlayedList } from '../../../components/recently-played-list/recently-played-list';
import { RecentlyPlayedItem } from '../../../components/recently-played-item/recently-played-item';
import { LornMaze } from '../../data/songs';

export default createBoard({
    name: 'RecentlyPlayedList',
    Board: () => (
        <RecentlyPlayedList>
            <RecentlyPlayedItem {...LornMaze} timestamp="2 min ago" />
            <RecentlyPlayedItem {...LornMaze} timestamp="1 hr ago" />
            <RecentlyPlayedItem {...LornMaze} timestamp="5 hr ago" />
        </RecentlyPlayedList>
    ),
    isSnippet: true,
});
