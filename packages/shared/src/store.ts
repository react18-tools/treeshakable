import treeshakable from "treeshakable";
import { create } from "zustand";

interface CounterState {
  count: number;
  setCount: (count: number) => void;
  increment: () => void;
  decrement: () => void;
}

export const useCounterStore = create<CounterState>(set => ({
  count: 0,
  setCount: count => set({ count }),
  increment: () => set(state => ({ count: state.count + 1 })),
  decrement: () => set(state => ({ count: state.count - 1 })),
}));

export const useTreeshakableCounterStore = treeshakable("counter-store", () =>
  create<CounterState>(set => ({
    count: 0,
    setCount: count => set({ count }),
    increment: () => set(state => ({ count: state.count + 1 })),
    decrement: () => set(state => ({ count: state.count - 1 })),
  })),
);
