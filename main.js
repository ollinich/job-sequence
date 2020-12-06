const moveDependencyBeforeJob = (jobs, jobChar, dependency) => {
    // remove dependency from job list
    jobs.splice(jobs.indexOf(dependency), 1)[0];

    // re-insert dependency before job
    jobs.splice(jobs.indexOf(jobChar), 0, dependency);
    return jobs;
};

// Recursively walks through jobs with dependencies, if any dependency has already been processed
// we know we are in an infinite loop, so throw out
const circularCheck = (processedJobs, jobList, job) => {
    if (!job) {
        return;
    }
    if (processedJobs.includes(job)) {
        throw ("circular dependency error");
    }
    processedJobs.push(job);
    return {
        key: job[0],
        dependency: circularCheck(processedJobs, jobList, jobList.find(x => x[0] == job[1]))
    }
}

const SequenceJobs = (jobsList) => {
    // handles both single string and array of strings
    var jobs = [].concat(jobsList);
    let jobChars = jobs.map((job) => {
        return job.charAt(0);
    });

    let dependenciesProcessed = [];

    jobs.forEach(job => {
        var jobParts = job.split(" => ");
        if (jobParts.length == 2 && jobParts[1] != "") {
            if (jobParts[0] == jobParts[1]) {
                throw ("self-dependency error");
            }

            dependenciesProcessed.push(jobParts);
            jobChars = moveDependencyBeforeJob(jobChars, jobParts[0], jobParts[1])
        }
    });

    circularCheck([], dependenciesProcessed, dependenciesProcessed[0]);

    return jobChars.join("");
}

export default SequenceJobs;