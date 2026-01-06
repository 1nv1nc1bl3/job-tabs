import { useEffect, useState } from 'react';
import JobInfo from './components/JobInfo';
import BtnContainer from './components/BtnContainer';

const url = 'https://www.course-api.com/react-tabs-project';

const App = () => {
    const [jobs, setJobs] = useState([]);
    const [currentItem, setCurrentItem] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                setError(false);
                setLoading(true);
                const resp = await fetch(url);
                const data = await resp.json();
                setJobs(data);
            } catch (err) {
                console.log('Error', err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        fetchJobs();
    }, []);

    // console.log(jobs);

    if (loading)
        return (
            <section className='jobs-center'>
                <div></div>
                <div className='loading'></div>
            </section>
        );
    if (error)
        return (
            <section className='jobs-center'>
                <div></div>
                <p>Something went wrong</p>
            </section>
        );

    if (!loading && !error)
        return (
            <section className='jobs-center'>
                <BtnContainer
                    jobs={jobs}
                    currentItem={currentItem}
                    setCurrentItem={setCurrentItem}
                />
                {jobs.length === 0 && <h2>No jobs found</h2>}
                {jobs.length > 0 && (
                    <JobInfo jobs={jobs} currentItem={currentItem} />
                )}
            </section>
        );
};
export default App;
