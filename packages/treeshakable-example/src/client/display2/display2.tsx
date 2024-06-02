import { HTMLProps, ReactNode } from "react";
import styles from "./display2.module.scss";

export interface Display2Props extends HTMLProps<HTMLDivElement> {
	children: ReactNode;
}

/**
 * 
 *
 * @example
 * ```tsx
 * <Display2 />
 * ```
 * 
 * @source - Source code
 */
export const Display2 = ({ children, ...props }: Display2Props) => {
  const className = [props.className, styles["display2"]].filter(Boolean).join(" ");
	return (
		<div {...props} className={className} data-testid="display2">
			{children}
		</div>
	);
}
