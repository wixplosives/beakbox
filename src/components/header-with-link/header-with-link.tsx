import classNames from 'classnames';
import styles from './header-with-link.module.scss';

export interface HeaderWithLinkProps {
    className?: string;
    children: React.ReactNode;
}

export const HeaderWithLink = ({ className, children }: HeaderWithLinkProps) => {
    return <div className={classNames(styles.root, className)}>{children}</div>;
};
