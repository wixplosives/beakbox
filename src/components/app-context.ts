import { createContext } from 'react';

export const AppContext = createContext<{
    selectedSection: string;
    selectSection: (section: string) => void;
}>({
    selectedSection: 'Home',
    selectSection: () => {},
});
