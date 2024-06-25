import './App.css';
import Header from './components/Header';
import JobCard from './components/JobCard';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';

function App() {
  

  return (
    <>
      <div>
        <Navbar />
        <Header />
        <Searchbar />
        <JobCard />
   </div>
    </>
  )
}

export default App
