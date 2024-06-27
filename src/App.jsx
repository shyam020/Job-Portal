import './App.css';
import Header from './components/Header';
import JobCard from './components/JobCard';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import jobData from './components/Jobdata';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from './firebase/firebase';
import { useEffect,useState } from 'react';

function App() {

  const [jobs, setJobs] = useState([]);
  

  

  const fetchjobs = async () => {
    const tempJobs = [];
    const q = query(collection(db, "jobs"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((job) => {
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate()
      });
      setJobs(tempJobs);


});

  }
    useEffect(() => {
      fetchjobs();
    },[])
  
  return (
    <>
      <div>
        <Navbar />
        <Header />
        <Searchbar />
         {jobs.map(job => (
                <JobCard key={job.id} job={job} />
            ))}
   </div>
    </>
  )
}

export default App
