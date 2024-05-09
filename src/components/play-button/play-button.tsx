import classNames from 'classnames';
import styles from './play-button.module.scss';
import play from '../../assets/play.svg'
import pause from '../../assets/pause.svg'
import { Toggle } from '../toggle/toggle';
export interface PlayButtonProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const PlayButton = ({ className }: PlayButtonProps) => <Toggle on={play} off={pause} className={className}/>