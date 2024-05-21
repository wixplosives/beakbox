import { createBoard } from '@wixc3/react-board';
import { BannerArtist } from '../../../components/banner-artist/banner-artist';
import ArtistPng from '../../../assets/Artist.png';

export default createBoard({
    name: 'BannerArtist',
    Board: () => <BannerArtist ImagePng={ArtistPng} />,
    isSnippet: true,
});
