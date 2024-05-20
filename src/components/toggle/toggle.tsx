import classNames from 'classnames';
import styles from './toggle.module.scss';
import * as RadixToggle from '@radix-ui/react-toggle';
import { useState } from 'react';

export interface ToggleProps {
    className?: string;
    on: React.ReactNode;
    off: React.ReactNode;
    defaultChecked?: boolean;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Toggle = ({ className, on, off, defaultChecked }: ToggleProps) => {
    const [checked, setChecked] = useState(false);
    return (
        <RadixToggle.Root
            className="Toggle"
            aria-label="Toggle italic"
            asChild={true}
            onPressedChange={setChecked}
            defaultChecked={defaultChecked}
        >
            {checked ? on : off} 
        </RadixToggle.Root>
    );
};
