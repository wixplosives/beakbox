import heart from '../../assets/heart.svg'
import heartFilled from '../../assets/heart-filled.svg'
import {Toggle} from '../toggle/toggle'

export interface HeartBtnProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const HeartBtn = ({ className }: HeartBtnProps) => <Toggle off={heart} on={heartFilled} className={className} />