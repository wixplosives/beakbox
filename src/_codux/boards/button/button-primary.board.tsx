import { createBoard } from '@wixc3/react-board';
import { Button } from '../../../components/button/button';

export default createBoard({
    name: 'Button - primary ',
    Board: () => (
        <Button title="Button" type="button">
            Play
        </Button>
    ),
    isSnippet: true,
    environmentProps: {
        canvasHeight: 41,
        windowWidth: 768,
        windowHeight: 1024,
        canvasBackgroundColor: '#000000',
        canvasWidth: 107,
        windowBackgroundColor: '#000000',
    },
});
