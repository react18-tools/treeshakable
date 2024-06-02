import { HTMLProps, ReactNode } from "react";
import styles from "./counter2.module.scss";
import { useCounterStore } from "../../store";

export interface Counter2Props extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
}

export const Counter2 = ({ children, ...props }: Counter2Props) => {
  const className = [props.className, styles["counter"]].filter(Boolean).join(" ");
  const { increment, decrement, setCount } = useCounterStore();
  return (
    <div {...props} className={className} data-testid="counter">
      <h3>Counter 2 Controls</h3>
      <p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </p>
    </div>
  );
};
