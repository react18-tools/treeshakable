import { HTMLProps, ReactNode } from "react";
import styles from "./counter.module.scss";
import { useTreeshakableCounterStore } from "../../store";

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
  const { increment, decrement, setCount } = useTreeshakableCounterStore();
  return (
    <div {...props} className={className} data-testid="counter">
      <h2>Counter 1 Controls</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};
