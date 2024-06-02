import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Display2 } from "./display2";

describe.concurrent("display2", () => {
	afterEach(cleanup);

	test("Dummy test - test if renders without errors", ({ expect }) => {
		const clx = "my-class";
		render(<Display2 className={clx} />);
		expect(screen.getByTestId("display2").classList).toContain(clx);
	});
});
