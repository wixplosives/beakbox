import classNames from 'classnames';
import styles from './button.module.scss';

export interface ButtonProps {
    className?: string;
    title: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Button = ({ className, title }: ButtonProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <button>{title}</button>
        </div>
    );
};
