import classNames from 'classnames';
import styles from './top-bar-breadcrumb.module.scss';
import TopbarBackButton from '../../assets/topbar-back-button.svg?react';

export interface TopBarBreadcrumbProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TopBarBreadcrumb = ({ className }: TopBarBreadcrumbProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.upperScopeName}>Home</div>
            <TopbarBackButton className={styles.breadCrumbChevron} />
            <div className={styles.currentScope}>Popular Artist</div>
        </div>
    );
};
