import { HTMLProps, ReactNode } from "react";
import styles from "./counter2.module.scss";

export interface Counter2Props extends HTMLProps<HTMLDivElement> {
	children: ReactNode;
}

/**
 * 
 *
 * @example
 * ```tsx
 * <Counter2 />
 * ```
 * 
 * @source - Source code
 */
export const Counter2 = ({ children, ...props }: Counter2Props) => {
  const className = [props.className, styles["counter2"]].filter(Boolean).join(" ");
	return (
		<div {...props} className={className} data-testid="counter2">
			{children}
		</div>
	);
}
