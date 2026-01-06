export default function BtnContainer({ jobs, currentItem, setCurrentItem }) {
    return (
        <div className='btn-container'>
            {jobs.map((item, index) => {
                return (
                    <button
                        onClick={() => setCurrentItem(index)}
                        key={item.id}
                        className={`job-btn ${
                            index === currentItem ? 'active-btn' : ''
                        }`}
                    >
                        {item.company}
                    </button>
                );
            })}
        </div>
    );
}
