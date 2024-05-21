import classNames from 'classnames';
import styles from './beakbox-styleguides.module.scss';
import Theme_module from '../../styles/common/theme.module.scss';

export interface BeakboxStyleguidesProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const BeakboxStyleguides = ({ className }: BeakboxStyleguidesProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={Theme_module.bannerTitle}>bannerTitle</div>
            <div className={Theme_module.sectionTitle}>section Title</div>
            <div className={Theme_module.sectionTitleSmall}>sectionTitleSmall</div>
            <div className={Theme_module.songName}>songName</div>
            <div className={Theme_module.songNameSmall}>songNameSmall</div>
            <div className={Theme_module.songNameBig}>songNameBig</div>
            <div className={Theme_module.listenersAmount}>listenersAmount</div>
            <div className={Theme_module.description}>description</div>
            <div className={Theme_module.bannerTitle}>bannerTitle</div>
            <div className={Theme_module.bannerTitle}>bannerTitle</div>
        </div>
    );
};
