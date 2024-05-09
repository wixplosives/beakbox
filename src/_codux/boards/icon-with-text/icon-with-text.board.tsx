import { createBoard } from '@wixc3/react-board';
import { IconWithText } from '../../../components/icon-with-text/icon-with-text';
import icon from '../../../assets/heart-filled.svg'

export default createBoard({
    name: 'IconWithText',
    Board: () => <IconWithText text="Some text" iconSrc={icon}/>,
    isSnippet: true,
});