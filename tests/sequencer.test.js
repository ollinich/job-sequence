import sequenceJobs from "../main";

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
        expect(result).toBe("acb");
    })
})