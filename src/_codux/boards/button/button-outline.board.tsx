import { createBoard } from '@wixc3/react-board';
import { Button } from '../../../components/button/button';

export default createBoard({
    name: 'Button - Outline',
    Board: () => (
        <Button title="outline" type="outline">
            Play
        </Button>
    ),
    isSnippet: true,
    environmentProps: {
        canvasHeight: 45,
        windowWidth: 768,
        windowHeight: 1024,
        canvasBackgroundColor: '#000000',
        canvasWidth: 115,
        windowBackgroundColor: '#000000',
    },
});
