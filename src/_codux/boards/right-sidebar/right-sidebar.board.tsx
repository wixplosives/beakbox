import { createBoard } from '@wixc3/react-board';
import { RightSidebar } from '../../../components/right-sidebar/right-sidebar';

export default createBoard({
    name: 'RightSidebar',
    Board: () => <RightSidebar />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 350,
        canvasMargin: {
            left: 0,
            right: 0,
        },
        windowHeight: 500,
    },
});
