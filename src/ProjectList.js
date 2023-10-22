import React from 'react'
// import axios from 'axios';
import { useEffect, useState,useMemo } from 'react';
import Card from './Card';
import { GoCodeSquare } from "react-icons/go";
const ProjectList = ({data}) => {
    // const [data, setData] = useState([]);
    const [opendata, setOpenData] = useState({});
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
      data.sort((a, b)=>{
        const aNum = a.Project.Title;
        const bNum = b.Project.Title;
        console.log(aNum, bNum);
        return (aNum)>(bNum)?1:0})
      console.log(data);
      const openIt = (e) => {
        setOpenData(e);
        setOpen(true);
      }
      useEffect(()=>{
        console.log(data,"getting data from project list")
      },[data])
      console.log(opendata);
      const filteredData = useMemo(() => {
        if (!query) return data; 
    
        return data.filter((item) => {
          const { Title, Technologies } = item.Project;
    
          // Check if either Title or Technologies contains the search value
          return (
            Title.toLowerCase().includes(query.toLowerCase()) ||
            Technologies.toLowerCase().includes(query.toLowerCase())
          );
        });
      }, [data, query]);
    
  return (
    <div>
      <div className="row"
      style={{display:"flex",
              justifyContent:"center",
              alignItems:"center",
      }}>
      <input
      style={{
        width :"40vw",
        border:"solid grey 1px",
        borderRadius:"5px",
        height:"30px",
        padding:"5px",
      }}
          className="search"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
        </div>

<div className="App" style={{width:'100vw', height:'100vh', display:'flex', flexWrap:'wrap', overflow:"auto"}}>
    <div style={{width:'100vw', height:'100%', display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
    {open && <div onClick={()=>{setOpen(false)}} style={{width:'100vw', height:'100vh', backgroundColor:'rgba(0,0,0,0.2)',position:'absolute', right:'0'}}><div style={{position:'absolute', right:'0', display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'flex-start', width:'30vw', height:'100vh', boxShadow:'10px 10px 5px 12px rgba(0,0,0,0.2)', backgroundColor:'white', borderWidth:'1px'}}>
      <h2 style={{paddingLeft:'20px'}}>{opendata.title}</h2>
      <div style={{width:'90%', height:'80%', marginLeft:'20px',paddingBottom:'13%'}}>
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
        
    {filteredData.map((e)=>{
      return <Card key={e._id} title={e.Project.Title} technologies={e.Project.Technologies} frontend={e.Technical_Skillset.Frontend} backend={e.Technical_Skillset.Backend} databases={e.Technical_Skillset.Databases} infrastructure={e.Technical_Skillset.Infrastructre} OpenIt={openIt}/>;
    })
    }
    </div>

    </div>
    </div>
  )
}

export default ProjectList