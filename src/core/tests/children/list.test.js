import { createContainer, createList } from "../utils.js";
import { h, render } from "../../index.js";
import TestList from "./TestList.js";

describe("core/tests/children: simple list", () => {
	it("create 10", () => {
		let scope = createContainer();
		let ref = {};
		let length = 10;

		render(<TestList ref={ref} list={createList(length)} />, scope);

		expect(ref.current.querySelectorAll("button").length).toBe(length);
	});
	it("create 10 and remove 10", () => {
		let scope = createContainer();
		let ref = {};

		render(<TestList ref={ref} list={createList(10)} />, scope);
		render(<TestList list={[]} />, scope);

		expect(ref.current.querySelectorAll("button").length).toBe(0);
	});
	it("create 10 and remove 5", () => {
		let scope = createContainer();
		let ref = {};

		render(<TestList ref={ref} list={createList(10)} />, scope);
		render(<TestList list={createList(5)} />, scope);

		expect(ref.current.querySelectorAll("button").length).toBe(5);
	});
});
