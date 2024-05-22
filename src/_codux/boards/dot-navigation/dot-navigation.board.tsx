import { createBoard } from '@wixc3/react-board';
import { DotNavigation } from '../../../components/dot-navigation/dot-navigation';
import { useState } from 'react';

export default createBoard({
    name: 'DotNavigation',
    Board: () => {
        const [selectedDot, setSelectedDot] = useState(0);
        return <DotNavigation count={4} selectedIndex={selectedDot} onChange={setSelectedDot} />
    },
    isSnippet: true,
});
