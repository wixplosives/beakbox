import { createBoard } from '@wixc3/react-board';
import { BannerArtist } from '../../../components/banner-artist/banner-artist';

export default createBoard({
    name: 'BannerArtist',
    Board: () => <BannerArtist />,
    isSnippet: true,
});