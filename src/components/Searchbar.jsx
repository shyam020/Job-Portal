import React from 'react'

const Searchbar = () => {
  return (
    <div className='flex justify-center gap-5 my-10 px-10'>
          <select name="" id="" className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
              <option value="" disabled hidden selected> Job Role</option>
              <option value="IOS Developer">IOS Developer</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Backend Developer">Backend Developer</option>
              <option value="Android Developer">Android Developer</option>
              <option value="Fullstack Developer">Fullstack Developer</option>
          </select>
          
            <select name="" id="" className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
              <option value="" disabled hidden selected> Job Type</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Contract">Contract</option>
          </select>
          
            <select name="" id="" className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
              <option value="" disabled hidden selected>Location</option>
              <option value="Remote">Remote</option>
              <option value="In-Office">In-Office</option>
              <option value="Hybrid">Hybrid</option>    
          </select>

            <select name="" id="" className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
              <option value="" disabled hidden selected>Experience</option>
              <option value="Fresher">Fresher</option>
              <option value="Junior Level">Junior Level</option>
              <option value="Mid Level">Mid Level</option>
              <option value="Senior Level"> Senior Level</option> 
          </select>

          <button className='w-64 text-white py-3 pl-4 bg-blue-500 font-bold rounded-md'>Search</button>
    </div>
  )
}

export default Searchbar
