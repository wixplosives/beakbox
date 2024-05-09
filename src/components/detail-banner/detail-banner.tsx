import classNames from 'classnames';
import styles from './detail-banner.module.scss';

export interface DetailBannerProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const DetailBanner = ({ className }: DetailBannerProps) => {
    return <div className={classNames(styles.root, className)}>DetailBanner</div>;
};
