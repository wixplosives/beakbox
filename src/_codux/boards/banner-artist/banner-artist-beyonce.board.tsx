import { createBoard } from '@wixc3/react-board';
import { BannerArtist } from '../../../components/banner-artist/banner-artist';
import D6Bsl0VD0E155E380Ef459296D437D9E64B0B30Png from '../../../assets/d6bsl0v-d0e155e3-80ef-4592-96d4-37d9e64b0b30.png';

export default createBoard({
    name: 'BannerArtist - Beyonce',
    Board: () => <BannerArtist ImagePng={D6Bsl0VD0E155E380Ef459296D437D9E64B0B30Png} />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1656,
        canvasWidth: 767,
    },
});
