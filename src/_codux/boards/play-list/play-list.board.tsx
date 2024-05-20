import { createBoard } from '@wixc3/react-board';
import { PlayList } from '../../../components/play-list/play-list';

const songs = [
    {
        durationsInSeconds: 43,
        liked: true,
        listenedCount: 1134222,
        title: 'Ducks lake ',
        cover: '',
    },
    {
        durationsInSeconds: 627,
        liked: true,
        listenedCount: 0,
        title: 'What does the duck say',
        cover: '',
    },
    {
        durationsInSeconds: 72,
        liked: true,
        listenedCount: 584,
        title: 'Quack ho',
        cover: '',
    },
    {
        durationsInSeconds: 6789,
        liked: true,
        listenedCount: 156546,
        title: 'Who let the ducks out',
        cover: '',
    },
    {
        durationsInSeconds: 1,
        liked: true,
        listenedCount: 9999,
        title: 'Aint no duckshine',
        cover: '',
    },
];

export default createBoard({
    name: 'PlayList',
    Board: () => <PlayList title="Popular Songs" songs={songs} playing={songs[3]} />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 931,
        canvasBackgroundColor: '#121212',
    },
});
