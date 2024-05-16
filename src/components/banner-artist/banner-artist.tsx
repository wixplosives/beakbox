import classNames from 'classnames';
import styles from './banner-artist.module.scss';
import ImagePng from '../../assets/Image.png';
import { DetailBanner } from '../detail-banner/detail-banner';

export interface BannerArtistProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const BannerArtist = ({ className }: BannerArtistProps) => {
    return (
        <div className={classNames(styles.root, className, styles.banner, styles.layout)}>
            <DetailBanner />
            <img src={ImagePng} />
        </div>
    );
};
