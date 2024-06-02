import { HTMLProps, ReactNode } from "react";
import styles from "./display.module.scss";
import { useTreeshakableCounterStore } from "../../store";

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
  const count = useTreeshakableCounterStore(state => state.count);
  return (
    <div {...props} className={className} data-testid="display">
      <h2>Counter 1 Display</h2>
      <p>Count is: {count}</p>
    </div>
  );
};
