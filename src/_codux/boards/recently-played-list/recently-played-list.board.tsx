import { createBoard } from '@wixc3/react-board';
import { RecentlyPlayedList } from '../../../components/recently-played-list/recently-played-list';
import { RecentlyPlayedItem, type RecentlyPlayedItemData } from '../../../components/recently-played-item/recently-played-item';

const items: RecentlyPlayedItemData[] = new Array(3).fill({
    artist: 'Lorn',
    title: 'The Maze to Nowhere',
    image: '/src/assets/album-covers/lorn-vessel.jpg',
    timestamp: '2 min ago',
});

export default createBoard({
    name: 'RecentlyPlayedList',
    Board: () => <RecentlyPlayedList>
        {items.map((item, i) =>
            <RecentlyPlayedItem key={i} {...item} />
        )}
    </RecentlyPlayedList>,
    isSnippet: true,
});
