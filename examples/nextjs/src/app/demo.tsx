"use client";

import styles from "./demo.module.scss";
import { Counter2 } from "@repo/shared/dist/client/counter2";
import { Display2 } from "@repo/shared/dist/client/display2";
import { Counter } from "@repo/shared/dist/client/counter";
import { Display } from "@repo/shared/dist/client/display";

/** React live demo */
export function Demo() {
  return (
    <div className={styles.container}>
      <div>
        <h2>Using global store without treeshakable</h2>
        <p>Importing both Counter and Display from </p>
        <Counter2 />
        <Display2 />
      </div>
      <div>
        <h2>Using treeshakable store</h2>
        <p>Importing both Counter and Display from </p>
        <Counter />
        <Display />
      </div>
    </div>
  );
}
