import { Counter } from "@repo/shared/dist/client/counter";
import { Display } from "@repo/shared/dist/client/display";

const importStatements = `
import { Counter } from "@repo/shared/dist/client/counter";
import { Display } from "@repo/shared/dist/client/display";
`;

export function WithTreeshakable() {
  return (
    <div>
      <h2>Using treeshakable store</h2>
      <p>
        When the global store is created with treeshakable, it works well irrespective of from which
        file the component is imported.
      </p>
      <code>
        <pre>{importStatements}</pre>
      </code>
      <Counter />
      <Display />
    </div>
  );
}
