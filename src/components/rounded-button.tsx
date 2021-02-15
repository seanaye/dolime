import type { FunctionalComponent } from 'preact'
import type { MouseEvent } from 'react'

interface RoundedButtonProps {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: (e: MouseEvent) => void;
}

export const RoundedButton: FunctionalComponent<RoundedButtonProps> = props => <div
  className="rounded-full p-2 w-10 h-10 hover:bg-gray-300"
  onMouseEnter={props.onMouseEnter}
  onMouseLeave={props.onMouseLeave}
  onClick={props.onClick}
>
  {props.children}
</div>
