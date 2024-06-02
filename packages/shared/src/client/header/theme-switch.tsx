"use client";

import { ColorSwitch, useTheme } from "nextjs-themes";
import styles from "./header.module.scss";
import { useCallback } from "react";

/** This is a wrapper around `nextjs-themes's ColorSwitch component to improve mobile view. */
export default function ThemeSwitch() {
  const { colorSchemePref, setColorSchemePref } = useTheme();
  const toggle = useCallback(() => {
    switch (colorSchemePref) {
      case "dark":
        setColorSchemePref("light");
        break;
      case "light":
        setColorSchemePref("system");
        break;
      case "system":
      default:
        setColorSchemePref("dark");
    }
  }, [colorSchemePref]);
  return (
    <div tabIndex={0} className={styles.themeswitch} onClick={toggle} onKeyDown={toggle}>
      <ColorSwitch />
      <span className="mb">{colorSchemePref}</span>
    </div>
  );
}
