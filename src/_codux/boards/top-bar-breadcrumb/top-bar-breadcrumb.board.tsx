import { createBoard } from '@wixc3/react-board';
import { TopBarBreadcrumb } from '../../../components/top-bar-breadcrumb/top-bar-breadcrumb';

export default createBoard({
    name: 'TopBarBreadcrumb',
    Board: () => <TopBarBreadcrumb />,
    isSnippet: true,
    environmentProps: {
        windowBackgroundColor: '#000000',
    },
});
