import { createBoard } from '@wixc3/react-board';
import { PlayButton } from '../../../components/play-button/play-button';

export default createBoard({
    name: 'PlayButton',
    Board: () => <PlayButton />,
    isSnippet: true,
});