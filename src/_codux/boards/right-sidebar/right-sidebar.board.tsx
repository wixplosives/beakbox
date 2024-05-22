import { createBoard } from '@wixc3/react-board';
import { RightSidebar } from '../../../components/right-sidebar/right-sidebar';

export default createBoard({
    name: 'RightSidebar',
    Board: () => <RightSidebar />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 350,
        windowHeight: 550,
    },
});
