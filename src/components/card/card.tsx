import classNames from 'classnames';
import styles from './card.module.scss';
import { Thumbnail } from '../thumbnail/thumbnail';

export interface CardProps {
    className?: string;
    imageURL?: string;
    title?: string;
    subTitleOne?: string;
    subTitleTwo?: string;
}

export const Card = ({ className, imageURL, subTitleOne, subTitleTwo, title }: CardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Thumbnail imageUrl={imageURL} className={styles.cardThumbnail} />
            <div>
                <h1 className={styles.cardHeader}>{title}</h1>
                <div className={styles.subTitles}>
                    {subTitleOne} • {subTitleTwo}
                </div>
            </div>
        </div>
    );
};
