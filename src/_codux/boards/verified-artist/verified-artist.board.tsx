import { createBoard } from '@wixc3/react-board';
import { VerifiedArtist } from '../../../components/verified-artist/verified-artist';

export default createBoard({
    name: 'VerifiedArtist',
    Board: () => <VerifiedArtist />,
    isSnippet: true,
});