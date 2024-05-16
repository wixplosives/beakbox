import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1690.6239520958084,
        windowWidth: 1744,
        windowHeight: 1111,
        canvasHeight: 1016.9041304679165,
    },
});
