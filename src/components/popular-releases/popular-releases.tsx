import classNames from 'classnames';
import styles from './popular-releases.module.scss';
import { Section } from '../section/section';
import { Card } from '../card/card';

export interface PopularReleasesProps {
    className?: string;
    popularData?: Array<{
        imageUrl: string;
        title: string;
        subTitleOne: string;
        subTitleTwo: string;
    }>;
}

export const PopularReleases = ({ className, popularData }: PopularReleasesProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Section
                title="Popular Releases"
                buttonText="See All"
                children={popularData?.map(function (data) {
                    return <Card {...data} />;
                })}
                
            />
        </div>
    );
};
