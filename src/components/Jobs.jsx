import JobInfo from './JobInfo';

export default function Jobs({ jobs }) {
    return (
        <div>
            {jobs.map((job) => (
                <JobInfo key={job.id} {...job} />
            ))}
        </div>
    );
}
