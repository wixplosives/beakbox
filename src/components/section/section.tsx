import classNames from 'classnames';
import styles from './section.module.scss';
import StyleGuide_module from '../../styles/common/style-guide.module.scss';

export interface SectionProps {
    className?: string;
    title?: string;
    buttonText: string;
    children: JSX.Element;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Section = ({ className, title, buttonText, children }: SectionProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.sectionTop}>
                <h1 className={styles.sectionHeader}>{title}</h1>
                <button className={styles.sectionButton}>{buttonText}</button>
            </div>
            {children}
        </div>
    );
};
