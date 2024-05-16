import { createBoard } from '@wixc3/react-board';
import { PopularReleases } from '../../../components/popular-releases/popular-releases';
import EighteesDuckWebp from '../../../assets/sample-images/eightees-duck.webp';


const popularReleasesSamples = [
    { imageUrl: EighteesDuckWebp, title: 'test', subTitleOne: 'test2', subTitleTwo: 'test3' },
    { imageUrl: 'blahblah', title: 'test', subTitleOne: 'test2', subTitleTwo: 'test3' },
    { imageUrl: 'blahblah', title: 'test', subTitleOne: 'test2', subTitleTwo: 'test3' },
];

export default createBoard({
    name: 'PopularReleases',
    Board: () => <PopularReleases popularData={popularReleasesSamples} />,
    isSnippet: true,
    environmentProps: {
        windowBackgroundColor: '#000000',
        canvasWidth: 477,
    },
});
