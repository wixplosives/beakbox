import classNames from 'classnames';
import styles from './listeners.module.scss';
import Icon from '../../assets/Icon.svg';

export interface ListenersProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Listeners = ({ className }: ListenersProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Icon />
            Listeners
        </div>
    );
};
