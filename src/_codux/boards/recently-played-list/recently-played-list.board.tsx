import { createBoard } from '@wixc3/react-board';
import { RecentlyPlayedList } from '../../../components/recently-played-list/recently-played-list';
import { RecentlyPlayedItem } from '../../../components/recently-played-item/recently-played-item';
import { songs } from '../../data/songs';

export default createBoard({
    name: 'RecentlyPlayedList',
    Board: () => (
        <RecentlyPlayedList>
            <RecentlyPlayedItem {...songs[0]} timestamp="2 min ago" />
            <RecentlyPlayedItem {...songs[1]} timestamp="1 hr ago" />
            <RecentlyPlayedItem {...songs[2]} timestamp="5 hr ago" />
        </RecentlyPlayedList>
    ),
    isSnippet: true,
});
