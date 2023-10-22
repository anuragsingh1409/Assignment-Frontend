import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProjectList from './ProjectList';
function App() {

  const [data, setData] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:8000`);
      setData(res.data);
    };
     fetchData();
  }, []);
useEffect(()=>
{
  console.log(data,"from app")

},[data]);

  return (
<>
<h1>Project Search</h1>


      <ProjectList data={data} />

</>
  );
}

export default App;
