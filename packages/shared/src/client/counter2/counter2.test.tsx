import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Counter2 } from "./counter2";

describe.concurrent("counter2", () => {
	afterEach(cleanup);

	test("Dummy test - test if renders without errors", ({ expect }) => {
		const clx = "my-class";
		render(<Counter2 className={clx} />);
		expect(screen.getByTestId("counter2").classList).toContain(clx);
	});
});
