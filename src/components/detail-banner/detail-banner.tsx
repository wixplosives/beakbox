import classNames from 'classnames';
import styles from './detail-banner.module.scss';
import { VerifiedArtist } from '../verified-artist/verified-artist';
import { Listeners } from '../listeners/listeners';
import { Button } from '../button/button';

export interface DetailBannerProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const DetailBanner = ({ className }: DetailBannerProps) => {
    return (
        <div className={classNames(styles.root, className, styles.layout)}>
            <div>
                <VerifiedArtist />
                <div className={styles.artistName}>DetailBanner</div>
            </div>
            <Listeners />
            <div className={styles.footer}>
                <Button title="Button" type="button">
                    Play
                </Button>
                <Button title="outline" type="outline">
                    Play
                </Button>
            </div>
        </div>
    );
};
