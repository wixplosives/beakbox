import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';

export default createBoard({
    name: 'Card',
    Board: () => <Card subTitleOne="2024" subTitleTwo="Album" title="Mcducky" />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 321,
        windowBackgroundColor: '#000000',
        canvasWidth: 222,
    },
});
