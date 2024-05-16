import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';
import RapperDuckWebp from '../../../assets/sample-images/rapper-duck.webp';

export default createBoard({
    name: 'Card',
    Board: () => (
        <Card subTitleOne="2024" subTitleTwo="Album" title="Mcducky" imageUrl={RapperDuckWebp} />
    ),
    isSnippet: true,
    environmentProps: {
        canvasHeight: 321,
        windowBackgroundColor: '#000000',
        canvasWidth: 222,
    },
});
