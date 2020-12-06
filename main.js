const SequenceJobs = (job) => {
    var sequence = "";
    // handles both single string and array of strings
    var jobs = [].concat(job);
    jobs.forEach(job => {
        sequence += job.charAt(0);
    });

    return sequence;
}

export default SequenceJobs;