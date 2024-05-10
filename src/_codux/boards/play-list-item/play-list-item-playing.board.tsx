import { createBoard } from '@wixc3/react-board';
import { PlayListItem } from '../../../components/play-list-item/play-list-item';

export default createBoard({
    name: 'PlayListItem playing',
    Board: () => (
        <PlayListItem
            song={{
                durationsInSeconds: 67,
                liked: true,
                listenedCount: 1134234,
                title: 'Greatest song (a tribute)',
                cover: '',
            }}
            index={1}
            playing={true}
        />
    ),
    isSnippet: true,
    environmentProps: {
        canvasWidth: 673,
    },
});
