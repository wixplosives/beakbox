import classNames from 'classnames';
import styles from './icon-with-text.module.scss';

export interface IconWithTextProps {
    className?: string;    
    text:string;
    icon: React.ReactNode
}


/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const IconWithText = ({ className, icon, text }: IconWithTextProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            {icon}
            {text}
        </div>
    );
};
