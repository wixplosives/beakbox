import { createBoard } from '@wixc3/react-board';
import { DetailBanner } from '../../../components/detail-banner/detail-banner';

export default createBoard({
    name: 'DetailBanner',
    Board: () => <DetailBanner />,
    isSnippet: true,
    environmentProps: {
        windowBackgroundColor: '#000000',
    },
});
