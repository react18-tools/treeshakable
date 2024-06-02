import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Display } from "./display";

describe.concurrent("display", () => {
	afterEach(cleanup);

	test("Dummy test - test if renders without errors", ({ expect }) => {
		const clx = "my-class";
		render(<Display className={clx} />);
		expect(screen.getByTestId("display").classList).toContain(clx);
	});
});
