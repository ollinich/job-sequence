import sequenceJobs from "../main";
import { expect } from "@jest/globals";

describe("Job Sequencer", () => {
    it("returns an empty string when provided no jobs", () => {
        var result = sequenceJobs("");
        expect(result).toBe("");
    })

    it("returns a sequence of a single job when provided a single job", () => {
        var result = sequenceJobs("a =>");
        expect(result).toBe("a");
    })

    it("returns a sequence of jobs when provided a sequence of a jobs with no dependencies", () => {
        var result = sequenceJobs(["a =>", "b =>", "c =>"]);
        expect(result).toBe("abc");
    })

    it("returns a correctly sequenced list of jobs when provided a sequence of a jobs, one with a dependency", () => {
        var result = sequenceJobs(["a =>", "b => c", "c =>"]);

        const bIndex = result.indexOf("b");
        const cIndex = result.indexOf("c");
        expect(cIndex).toBeLessThan(bIndex);
        expect(result).toBe("acb");
    })

    it("returns a correctly sequenced list of jobs when provided a sequence of a jobs with multiple dependencies", () => {
        var result = sequenceJobs([
            "a =>",
            "b => c",
            "c => f",
            "d => a",
            "e => b",
            "f =>"]);

        const aIndex = result.indexOf("a");
        const bIndex = result.indexOf("b");
        const cIndex = result.indexOf("c");
        const dIndex = result.indexOf("d");
        const eIndex = result.indexOf("e");
        const fIndex = result.indexOf("f");

        expect(fIndex).toBeLessThan(cIndex);
        expect(cIndex).toBeLessThan(bIndex);
        expect(bIndex).toBeLessThan(eIndex);
        expect(aIndex).toBeLessThan(dIndex);
        expect(result.length).toBe(6);
        expect(result).toBe("fcadbe");
    })

    it("throws a self-dependency error when given a sequence of jobs, one dependent on itself", () => {
        expect(() => sequenceJobs(["a =>", "b => c", "c => c"])).toThrow("self-dependency error");
    })
})