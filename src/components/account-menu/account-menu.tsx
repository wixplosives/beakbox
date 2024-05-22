import classNames from 'classnames';
import styles from './account-menu.module.scss';
import { FC } from 'react';

export interface AccountMenuProps {
    className?: string;
    userImage?: string;
    userName: string;
    isPremium?: boolean;
}

export const AccountMenu = ({
    className,
    userImage,
    userName,
    isPremium = false,
}: AccountMenuProps) => {
    const backgroundImage = userImage ? `url("${userImage}")` : undefined;

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.avatar} style={{ backgroundImage }} />
            <div className={styles.name}>{userName}</div>
            <div className={styles.membership}>
                {isPremium ? (
                    <>
                        Premium <em>•︎</em> <Crown />
                    </>
                ) : (
                    'Free'
                )}
            </div>
            <ChevronDown className={styles.chevron} />
        </div>
    );
};

const ChevronDown: FC<React.HTMLAttributes<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" {...props}>
        <path
            d="M13.28 5.96667L8.9333 10.3133C8.41997 10.8267 7.57997 10.8267 7.06664 10.3133L2.71997 5.96667"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const Crown: FC<React.HTMLAttributes<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" {...props}>
        <path
            fill="#FFB932"
            d="M11.18 12.65H4.82a.67.67 0 0 1-.63-.44L1.42 4.45c-.22-.62.49-1.15 1.01-.77l2.67 1.9c.35.26.86.1 1.01-.3l1.26-3.36a.66.66 0 0 1 1.25 0l1.26 3.36c.15.41.65.56 1.01.3l2.67-1.9a.67.67 0 0 1 1.01.77L11.8 12.2a.66.66 0 0 1-.62.44ZM11.33 14.67H4.67a.5.5 0 0 1-.5-.5c0-.28.22-.5.5-.5h6.66c.28 0 .5.22.5.5a.5.5 0 0 1-.5.5Z"
        />
        <path
            fill="#060606"
            d="M9.67 9.83H6.33a.5.5 0 0 1-.5-.5c0-.27.23-.5.5-.5h3.34c.27 0 .5.23.5.5a.5.5 0 0 1-.5.5Z"
            opacity=".4"
        />
    </svg>
);
