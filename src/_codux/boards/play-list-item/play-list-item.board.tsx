import { createBoard } from '@wixc3/react-board';
import { PlayListItem } from '../../../components/play-list-item/play-list-item';

export default createBoard({
    name: 'PlayListItem',
    Board: () => (
        <div>
            <PlayListItem
                song={{
                    durationsInSeconds: 67,
                    liked: true,
                    listenedCount: 1134234,
                    title: 'Greatest song (a tribute)',
                    cover: '',
                }}
                index={1}
                playing={false}
            />
        </div>
    ),
    isSnippet: true,
    environmentProps: {
        canvasWidth: 673,
        canvasBackgroundColor: '#121212',
    },
});
