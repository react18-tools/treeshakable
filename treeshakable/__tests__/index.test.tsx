import { describe, test } from "vitest";
import treeshakable from "../src";

function createStore() {
  return {
    someState: 0,
    update: () => {},
  };
}

describe.concurrent("Treeshakable", () => {
  test("Should not create multiple stores", ({ expect }) => {
    const id = "my-store";
    const store1 = treeshakable(id, () => createStore());
    const store2 = treeshakable(id, () => createStore());
    expect(store1).toBe(store2);
  });
});
