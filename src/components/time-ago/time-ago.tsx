import { DateTime, DurationLike, ToRelativeUnit } from 'luxon';
import { FC, useEffect, useReducer } from 'react';

export function timeAgo(duration: DurationLike): number {
    return DateTime.now().minus(duration).toMillis();
}

function formatTimeAgo(timestamp: number) {
    const unit: ToRelativeUnit[] = ['years', 'months', 'weeks', 'days', 'hours', 'minutes'];
    return DateTime.fromMillis(timestamp).toRelative({ unit, style: 'narrow' })!.replace('.', '');
}

export interface TimeAgoProps extends React.HTMLAttributes<HTMLDivElement> {
    timestamp: number;
}

export const TimeAgo: FC<TimeAgoProps> = ({ timestamp, ...props }) => {
    const [, forceUpdate] = useReducer((x) => x + 1, 0);

    useEffect(() => {
        const interval = setInterval(forceUpdate, 60_000);
        return () => clearInterval(interval);
    });

    return <div {...props}>{formatTimeAgo(timestamp)}</div>;
};
