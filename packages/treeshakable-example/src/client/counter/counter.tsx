import { HTMLProps, ReactNode } from "react";
import styles from "./counter.module.scss";

export interface CounterProps extends HTMLProps<HTMLDivElement> {
	children: ReactNode;
}

/**
 * 
 *
 * @example
 * ```tsx
 * <Counter />
 * ```
 * 
 * @source - Source code
 */
export const Counter = ({ children, ...props }: CounterProps) => {
  const className = [props.className, styles["counter"]].filter(Boolean).join(" ");
	return (
		<div {...props} className={className} data-testid="counter">
			{children}
		</div>
	);
}
