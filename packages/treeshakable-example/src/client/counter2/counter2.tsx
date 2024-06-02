import { HTMLProps, ReactNode } from "react";
import styles from "./counter.module.scss";
import { useCounterStore } from "../../store";

export interface Counter2Props extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
}

export const Counter2 = ({ children, ...props }: Counter2Props) => {
  const className = [props.className, styles["counter"]].filter(Boolean).join(" ");
  const { increment, decrement, setCount } = useCounterStore();
  return (
    <div {...props} className={className} data-testid="counter">
      <h2>Counter 1 Controls</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};
