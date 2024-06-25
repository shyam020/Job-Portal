import React from 'react';
import dayjs from 'dayjs';


const JobCard = () => {
    const Skills = ["Java Script", "Node.js", "Reactjs"];
    const date1 = dayjs(Date.now());
    const diffInDays = date1.diff('2024-6-13', 'days');
    return (
      <div className='mx-40 my-4' >
    <div className='flex justify-between items-center bg-white text-zinc-700 px-5 py-10 my-10  rounded-md duration-200 hover:scale-105'>
          <div className='flex flex-col gap-3'>
              <h1 className='text-lg font-semibold'>Front-End-developer- Amazon</h1>
              <p>Full Time &#x2002; Freshar &#x2002;  In-Office</p>
              <div className='flex flex-row gap-2'>
                  { Skills.map((Skill) => (
                      <p key={Skills} className='border text-gray-700 py-1 px-3 rounded-md border-gray-500'>{ Skill}</p>
                 ))}
              </div>
          </div>
          <div className='flex flex-row  gap-2'>
              <p className='text-gray-500'>Posted { diffInDays } days ago</p>
              <button className='border py-1 px-3 rounded-md border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'>Apply Now</button>
          </div>
            </div>
            </div>
  )
}

export default JobCard
