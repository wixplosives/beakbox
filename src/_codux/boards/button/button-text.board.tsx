import { createBoard } from '@wixc3/react-board';
import { Button } from '../../../components/button/button';

export default createBoard({
    name: 'Button - Text',
    Board: () => (
        <Button title="Text" type="text">
            Play
        </Button>
    ),
    isSnippet: true,
    environmentProps: {
        canvasHeight: 27,
        windowWidth: 768,
        windowHeight: 1024,
        canvasBackgroundColor: '#000000',
        canvasWidth: 39,
        windowBackgroundColor: '#000000',
    },
});
