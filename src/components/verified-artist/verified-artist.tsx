import classNames from 'classnames';
import styles from './verified-artist.module.scss';
import Verified from '../../assets/Icon/verified.svg';

export interface VerifiedArtistProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const VerifiedArtist = ({ className }: VerifiedArtistProps) => {
    return (
        <div className={classNames(styles.root, className, styles.flex)}>
            <Verified />
            <div className={styles.label}>VerifiedArtist</div>
        </div>
    );
};
