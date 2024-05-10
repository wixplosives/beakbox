import heart from '../../assets/heart.svg'
import heartFilled from '../../assets/heart-filled.svg'
import {Toggle} from '../toggle/toggle'
import { HeartFilledIcon, HeartIcon} from '@radix-ui/react-icons'

export interface HeartBtnProps {
    className?: string;
    liked:boolean;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const HeartBtn = ({ className, liked }: HeartBtnProps) => <Toggle off={<HeartIcon />} on={<HeartFilledIcon />}  defaultChecked={liked} className={className} />
