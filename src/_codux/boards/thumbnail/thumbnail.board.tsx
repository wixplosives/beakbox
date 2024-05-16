import { createBoard } from '@wixc3/react-board';
import { Thumbnail } from '../../../components/thumbnail/thumbnail';

export default createBoard({
    name: 'Thumbnail',
    Board: () => (
        <Thumbnail imageUrl="http://www.copyright-free-photos.org.uk/ducks/bahama-pintail-face.jpg" />
    ),
    isSnippet: true,
    environmentProps: {
        canvasWidth: 166,
    },
});
