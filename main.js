const moveDependencyBeforeJob = (jobs, jobChar, dependency) => {
    // remove dependency from job list
    jobs.splice(jobs.indexOf(dependency), 1)[0];

    // re-insert dependency before job
    jobs.splice(jobs.indexOf(jobChar), 0, dependency);
    return jobs;
};


const SequenceJobs = (jobsList) => {
    // handles both single string and array of strings
    var jobs = [].concat(jobsList);
    let jobChars = jobs.map((job) => {
        return job.charAt(0);
    });

    jobs.forEach((job, jobIndex) => {
        var jobParts = job.split(" => ");
        if (jobParts.length == 2 && jobParts[1] != "") {
            if (jobParts[0] == jobParts[1]) {
                throw ("self-dependency error");
            }

            jobChars = moveDependencyBeforeJob(jobChars, jobParts[0], jobParts[1])
        }
    });

    return jobChars.join("");
}

export default SequenceJobs;