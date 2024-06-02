import styles from "./demo.module.scss";
import { Counter2 as Counter2FromOwnFile } from "@repo/shared/dist/client/counter2";
import { Display2 as Display2FromOwnFile } from "@repo/shared/dist/client/display2";

import { Counter2, Display2 } from "@repo/shared";

const importStatements = `import { Counter2, Display2 } from "@repo/shared";`;

const importStatements2 = `import { Counter2 } from "@repo/shared/dist/client/counter2";
import { Display2 } from "@repo/shared/dist/client/display2";
`;

export default function WithoutTreeshakable() {
  return (
    <div>
      <h2>Using global store without treeshakable</h2>
      <p>Works only when components are imported from same file.</p>
      <code>
        <pre>{importStatements}</pre>
      </code>
      <div className={styles.flex}>
        <Counter2 />
        <Display2 />
      </div>
      <p className={styles.red}>Does not work when components imported from idividual files.</p>
      <code>
        <pre>{importStatements2}</pre>
      </code>
      <div className={styles.flex}>
        <Counter2FromOwnFile />
        <Display2FromOwnFile />
      </div>
    </div>
  );
}
