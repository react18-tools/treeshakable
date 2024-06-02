"use client";

import styles from "./demo.module.scss";
import { WithTreeshakable } from "./with-treeshake";
import WithoutTreeshakable from "./without-treeshakable";

/** React live demo */
export function Demo() {
  return (
    <div className={styles.demo}>
      <WithTreeshakable />
      <WithoutTreeshakable />
    </div>
  );
}
