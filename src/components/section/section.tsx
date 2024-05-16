import classNames from 'classnames';
import styles from './section.module.scss';

export interface SectionProps {
    className?: string;
    title?: string;
    buttonText: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Section = ({ className, title, buttonText }: SectionProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div>
                {title}
                <button>{buttonText}</button>
            </div>
        </div>
    );
};
