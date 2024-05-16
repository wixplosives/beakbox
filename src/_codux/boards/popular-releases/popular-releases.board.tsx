import { createBoard } from '@wixc3/react-board';
import { PopularReleases } from '../../../components/popular-releases/popular-releases';
import EighteesDuckWebp from '../../../assets/sample-images/eightees-duck.webp';
import ChillDuck from '../../../assets/sample-images/chill-duck.webp';
import RapperDuck from '../../../assets/sample-images/rapper-duck.webp';


const popularReleasesSamples = [
    { imageUrl: EighteesDuckWebp, title: 'Mcducky', subTitleOne: '2020', subTitleTwo: 'Album' },
    { imageUrl: ChillDuck, title: 'Dod', subTitleOne: '2023', subTitleTwo: 'Song' },
    { imageUrl: RapperDuck, title: 'Pete-D', subTitleOne: '2012', subTitleTwo: 'Song' },
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
