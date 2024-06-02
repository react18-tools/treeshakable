declare global {
  var tsk: Record<string, unknown>;
}
const globalThisForBetterMinification = globalThis;
globalThisForBetterMinification.tsk = {};
const globalTsk = globalThisForBetterMinification.tsk;
const treeshakable = <T>(key: string, store: T): T => {
  if (!globalTsk[key]) globalTsk[key] = store;
  return globalTsk[key] as T;
};

export default treeshakable;
