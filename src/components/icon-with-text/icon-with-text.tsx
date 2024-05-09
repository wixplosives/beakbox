import classNames from 'classnames';
import styles from './icon-with-text.module.scss';

export interface IconWithTextProps {
    className?: string;
    iconSrc: string;
    text:string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const IconWithText = ({ className, iconSrc, text }: IconWithTextProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img
                src={iconSrc}                
            />
            {text}
        </div>
    );
};
