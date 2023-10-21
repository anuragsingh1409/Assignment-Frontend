import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './Card';
import { GoCodeSquare } from "react-icons/go";
// import SearchBar from './SearchBar';

function App() {
  const [data, setData] = useState([]);
  const [opendata, setOpenData] = useState({});
  const [open, setOpen] = useState(false);
  // const [projects, setProjects] = useState([
  //   {
  //     id: 1,
  //     title: 'Project 1',
  //     technologies: 'React, JavaScript',
  //     frontend: 'HTML, CSS',
  //     backend: 'Node.js, Express',
  //     databases: 'MongoDB',
  //     infrastructure: 'AWS',
  //   },
  //   {
  //     id: 2,
  //     title: 'Project 2',
  //     technologies: 'Angular, TypeScript',
  //     frontend: 'HTML, CSS',
  //     backend: 'Java, Spring Boot',
  //     databases: 'MySQL',
  //     infrastructure: 'Azure',
  //   },
  //   // Add other projects here
  // ]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const filteredProjects = projects.filter((project) =>
//   project.title.toLowerCase().includes(searchQuery.toLowerCase())
// );

  const getData = async() => {
    const apiData = await axios.get('http://localhost:8000/');
    setData(apiData.data);
  }
  useEffect(()=>{
    getData();
  },[])
  data.sort((a, b)=>{
    const aNum = a.Project.Title;
    const bNum = b.Project.Title;
    console.log(aNum, bNum);
    return (aNum)>(bNum)?1:0})
  // console.log(data);
  const openIt = (e) => {
    setOpenData(e);
    setOpen(true);
  }
  console.log(opendata);
  return (
    <div className="App" style={{width:'100vw', height:'100vh', display:'flex', flexWrap:'wrap', overflow:"auto"}}>
    <div style={{width:'100vw', height:'100%', display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
    {open && <div onClick={()=>{setOpen(false)}} style={{width:'100vw', height:'100vh', backgroundColor:'rgba(0,0,0,0.2)',position:'absolute', right:'0'}}><div style={{position:'absolute', right:'0', display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'flex-start', width:'30vw', height:'100vh', boxShadow:'10px 10px 5px 12px rgba(0,0,0,0.2)', backgroundColor:'white', borderWidth:'1px'}}>
      <h2 style={{paddingLeft:'20px'}}>{opendata.title}</h2>
      <div style={{width:'90%', height:'80%', marginLeft:'20px'}}>
      <div style={{width:'100%', height:'15%', display: 'flex', flexDirection:'column', alignItems:'flex-start'}}>
                <p style={{fontSize:'17px', margin:0,fontWeight:'450',color:'#353535'}}><GoCodeSquare style={{width:'20px',paddingRight:'10px'}}></GoCodeSquare>Title</p>
                <p style={{fontSize:'20px', margin:0,paddingTop:'15px'}}>{opendata.title}</p>
            </div>
            <div style={{width:'100%', height:'15%', display: 'flex', flexDirection:'column', alignItems:'flex-start'}}>
                <p style={{fontSize:'17px', margin:0,fontWeight:'450',color:'#353535'}}><GoCodeSquare style={{width:'20px',paddingRight:'10px'}}></GoCodeSquare>Project.Technologies</p>
                <p style={{fontSize:'20px', margin:0,paddingTop:'15px'}}>{opendata.technologies}</p>
            </div>
            <div style={{width:'100%', height:'15%', display: 'flex', flexDirection:'column', alignItems:'flex-start'}}>
                <p style={{fontSize:'17px', margin:0,fontWeight:'450',color:'#353535'}}><GoCodeSquare style={{width:'20px',paddingRight:'10px'}}></GoCodeSquare>Technical_Skillset.Frontend</p>
                <p style={{fontSize:'20px', margin:0,paddingTop:'15px'}}>{opendata.frontend}</p>
            </div>
            <div style={{width:'100%', height:'15%', display: 'flex', flexDirection:'column', alignItems:'flex-start'}}>
                <p style={{fontSize:'17px', margin:0,fontWeight:'450',color:'#353535'}}><GoCodeSquare style={{width:'20px',paddingRight:'10px'}}></GoCodeSquare>Technical_Skillset.Backend</p>
                <p style={{fontSize:'20px', margin:0,paddingTop:'15px'}}>{opendata.backend}</p>
            </div>
            <div style={{width:'100%', height:'15%', display: 'flex', flexDirection:'column', alignItems:'flex-start'}}>
                <p style={{fontSize:'17px', margin:0,fontWeight:'450',color:'#353535'}}><GoCodeSquare style={{width:'20px',paddingRight:'10px'}}></GoCodeSquare>Technical_Skillset.Databases</p>
                <p style={{fontSize:'20px', margin:0,paddingTop:'15px'}}>{opendata.databases===undefined?'-':opendata.databases}</p>
            </div>
            <div style={{width:'100%', height:'15%', display: 'flex', flexDirection:'column', alignItems:'flex-start'}}>
                <p style={{fontSize:'17px', margin:0,fontWeight:'450',color:'#353535'}}><GoCodeSquare style={{width:'20px',paddingRight:'10px'}}></GoCodeSquare>Technical_Skillset.Infrastructure</p>
                <p style={{fontSize:'20px', margin:0,paddingTop:'15px'}}>{opendata.infrastructure===undefined?'-':opendata.infrastructure}</p>
            </div>
                  
      </div>
    </div>
    </div>}
        
    {data.map((e)=>{
      return <Card key={e._id} title={e.Project.Title} technologies={e.Project.Technologies} frontend={e.Technical_Skillset.Frontend} backend={e.Technical_Skillset.Backend} databases={e.Technical_Skillset.Databases} infrastructure={e.Technical_Skillset.Infrastructre} OpenIt={openIt}/>;
    })
    }
    </div>

    </div>
  );
}

export default App;
