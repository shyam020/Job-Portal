import React from 'react';
import dayjs from 'dayjs';

const JobCard = ({ job }) => {
    const date1 = dayjs(Date.now());
    const diffInDays = date1.diff(job.postedOn, 'days');

    return (
        <div className='mx-40 my-4'>
            <div className='flex justify-between items-center bg-white text-zinc-700 px-5 py-10 my-10 rounded-md duration-200 hover:scale-105'>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-lg font-semibold'>{job.title} - {job.company}</h1>
                    <p>{job.type} &#x2002; {job.exprince} &#x2002; {job.location}</p>
                    <div className='flex flex-row gap-2'>
                        {job.skills.map((skill, index) => (
                            <p key={index} className='border text-gray-700 py-1 px-3 rounded-md border-gray-500'>{skill}</p>
                        ))}
                    </div>
                </div>
                <div className='flex flex-row gap-2'>
                    <p className='text-gray-500'>Posted {diffInDays} days ago</p>
                    <a href={job.job_link}>
                        <button className='border py-1 px-3 rounded-md border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'>Apply Now</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default JobCard;
