declare global {
  var tsk: Record<string, unknown>;
}
const globalThisForBetterMinification = globalThis;
globalThisForBetterMinification.tsk = {};
const globalTsk = globalThisForBetterMinification.tsk;

/**
 * Creates a tree-shakable store.
 * @example
 * const store = treeshakable('my-store', () => createStore(...));
 *
 * @param key A unique key for the store
 * @template T The type of the store
 * @param storeCreator A function that creates a new store
 * @returns A tree-shakable store
 */
const treeshakable = <T>(key: string, storeCreator: () => T): T => {
  if (!globalTsk[key]) globalTsk[key] = storeCreator();
  return globalTsk[key] as T;
};

export default treeshakable;
