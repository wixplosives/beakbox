import { createBoard } from '@wixc3/react-board';
import { Button } from '../../../components/button/button';

export default createBoard({
    name: 'Button - Outline',
    Board: () => (
        <Button className="Button" title="Play">
            Play
        </Button>
    ),
    isSnippet: true,
    environmentProps: {
        canvasHeight: 81,
        windowWidth: 768,
        windowHeight: 1024,
        canvasBackgroundColor: '#000000',
        canvasWidth: 139,
    },
});
