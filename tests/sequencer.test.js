import sequenceJobs from "../main";

describe("Job Sequencer", () => {
    it("returns an empty string when provided no jobs", () => {
        var result = sequenceJobs("");
        expect(result).toBe("");
    })

    it("returns a sequence of a single job when provided a single job", () => {
        var result = sequenceJobs("a");
        expect(result).toBe("a");
    })
})