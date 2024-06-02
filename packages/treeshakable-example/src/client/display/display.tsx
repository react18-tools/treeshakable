import { HTMLProps, ReactNode } from "react";
import styles from "./display.module.scss";

export interface DisplayProps extends HTMLProps<HTMLDivElement> {
	children: ReactNode;
}

/**
 * 
 *
 * @example
 * ```tsx
 * <Display />
 * ```
 * 
 * @source - Source code
 */
export const Display = ({ children, ...props }: DisplayProps) => {
  const className = [props.className, styles["display"]].filter(Boolean).join(" ");
	return (
		<div {...props} className={className} data-testid="display">
			{children}
		</div>
	);
}
