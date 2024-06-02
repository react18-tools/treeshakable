import { HTMLProps, ReactNode } from "react";
import styles from "./display2.module.scss";
import { useCounterStore } from "../../store";

export interface DisplayProps2 extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
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
export const Display2 = ({ children, ...props }: DisplayProps2) => {
  const className = [props.className, styles["display"]].filter(Boolean).join(" ");
  const count = useCounterStore(state => state.count);
  return (
    <div {...props} className={className} data-testid="display">
      <h3>Counter 2 Display</h3>
      <p>Count is: {count}</p>
    </div>
  );
};
