import NavigationHomeIcon from './assets/navigation-home-icon.svg?react';
import NavigationDiscoverIcon from './assets/navigation-discover-icon.svg?react';
import NavigationRadioIcon from './assets/navigation-radio-icon.svg?react';
import NavigationAlbumsIcon from './assets/navigation-albums-icon.svg?react';
import NavigationPodcastsIcon from './assets/navigation-podcasts-icon.svg?react';
import NavigationRecentlyIcon from './assets/navigation-recently-icon.svg?react';
import NavigationFavoriteIcon from './assets/navigation-favorite-icon.svg?react';
import NavigationLocalIcon from './assets/navigation-local-icon.svg?react';
import { NavigationSection } from './types';

export const NAVIGATION_SECTIONS: NavigationSection[] = [
    {
        name: 'Main',
        items: [
            { icon: <NavigationHomeIcon />, title: 'Home' },
            { icon: <NavigationDiscoverIcon />, title: 'Discover' },
            { icon: <NavigationRadioIcon />, title: 'Radio' },
            { icon: <NavigationAlbumsIcon />, title: 'Albums' },
            { icon: <NavigationPodcastsIcon />, title: 'Podcasts' },
        ],
    },
    {
        name: 'Library',
        items: [
            { icon: <NavigationRecentlyIcon />, title: 'Recently Added' },
            { icon: <NavigationFavoriteIcon />, title: 'Favorite Songs' },
            { icon: <NavigationLocalIcon />, title: 'Local Files' },
        ],
    },
];

export const SONGS = [
    {
        durationsInSeconds: 43,
        liked: true,
        listenedCount: 1134222,
        title: 'Ducks lake ',
        cover: '',
    },
    {
        durationsInSeconds: 627,
        liked: true,
        listenedCount: 0,
        title: 'What does the duck say',
        cover: '',
    },
    {
        durationsInSeconds: 72,
        liked: true,
        listenedCount: 584,
        title: 'Quack ho',
        cover: '',
    },
    {
        durationsInSeconds: 6789,
        liked: true,
        listenedCount: 156546,
        title: 'Who let the ducks out',
        cover: '',
    },
    {
        durationsInSeconds: 1,
        liked: true,
        listenedCount: 9999,
        title: 'Aint no duckshine',
        cover: '',
    },
];
