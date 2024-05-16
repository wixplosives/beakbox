import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1196,
        windowWidth: 1286,
        windowHeight: 888,
        canvasHeight: 841,
    },
});
