import { createBoard } from '@wixc3/react-board';
import { Section } from '../../../components/section/section';

export default createBoard({
    name: 'Section',
    Board: () => <Section title="Popular Releases" buttonText="See All" />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 907,
        windowBackgroundColor: '#000000',
    },
});
