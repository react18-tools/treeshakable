"use client";

/**
 * Server components and client components need to be exported from separate files as
 * directive on top of the file from which component is imported takes effect.
 * i.e., server component re-exported from file with "use client" will behave as client component
 */

// client component exports
export * from "./display2";
export * from "./counter2";
export * from "./display";
export * from "./counter";
