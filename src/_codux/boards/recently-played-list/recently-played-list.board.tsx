import { createBoard } from '@wixc3/react-board';
import { RecentlyPlayedItem } from '../../../components/recently-played-item/recently-played-item';
import { RecentlyPlayedList } from '../../../components/recently-played-list/recently-played-list';
import { timeAgo } from '../../../components/time-ago';
import { songs } from '../../data/songs';

export default createBoard({
    name: 'RecentlyPlayedList',
    Board: () => (
        <RecentlyPlayedList>
            <RecentlyPlayedItem {...songs[0]} timestamp={timeAgo({ minutes: 1 })} />
            <RecentlyPlayedItem {...songs[1]} timestamp={timeAgo({ hours: 2 })} />
            <RecentlyPlayedItem {...songs[2]} timestamp={timeAgo({ days: 3 })} />
        </RecentlyPlayedList>
    ),
    isSnippet: true,
});
