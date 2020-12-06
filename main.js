const moveDependencyBeforeJob = (jobs, jobIndex, dependency) => {
    // remove dependency from job list
    jobs.splice(jobs.indexOf(dependency), 1)[0];

    // re-insert dependency before job
    jobs.splice(jobIndex, 0, dependency);
    return jobs;
};


const SequenceJobs = (jobsList) => {
    // handles both single string and array of strings
    var jobs = [].concat(jobsList);
    let jobChars = jobs.map((job) => {
        return job.charAt(0);
    });

    jobs.forEach((job, jobIndex) => {
        var jobParts = job.split("=>");
        if (jobParts.length == 2 && jobParts[1] != "") {
            let dependency = jobParts[1].trim();
            jobChars = moveDependencyBeforeJob(jobChars, jobIndex, dependency)
        }
    });

    return jobChars.join("");
}

export default SequenceJobs;