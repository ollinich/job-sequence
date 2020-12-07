const moveDependencyBeforeJob = (jobs, jobChar, dependency) => {
    // remove dependency from job list
    jobs.splice(jobs.indexOf(dependency), 1)[0];

    // re-insert dependency before job
    jobs.splice(jobs.indexOf(jobChar), 0, dependency);
    return jobs;
};

/*
Recursively walks through jobs with dependencies, building a list of unique combinations.
If any duplicate dependency combination found, we know we are in an infinite loop, so return true,
otherwise on a non circular dependency chain, the method will return false.
*/
const isCyclic = (processedJobs, jobList, job) => {
    if (!job) {
        return false;
    }
    if (processedJobs.includes(job)) {
        return true;
    }

    processedJobs.push(job);
    return isCyclic(processedJobs, jobList, jobList.find(x => x[0] == job[1]))
}

const SequenceJobs = (jobs) => {
    let jobChars = jobs.map((job) => {
        return job.charAt(0);
    });

    let jobsWithDependencies = [];

    jobs.forEach(job => {
        var jobParts = job.split(" => ");
        const char = jobParts[0];
        const dependency = jobParts[1];

        if (jobParts.length == 2 && dependency != "") {
            if (char == dependency) {
                throw ("self-dependency error");
            }

            jobsWithDependencies.push(jobParts);
            jobChars = moveDependencyBeforeJob(jobChars, char, dependency)
        }
    });

    if (isCyclic([], jobsWithDependencies, jobsWithDependencies[0])) {
        throw ("circular dependency error");
    }

    return jobChars.join("");
}

export default SequenceJobs;