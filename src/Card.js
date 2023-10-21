const Card = (props) =>{
    const openDialog = () => {
        props.OpenIt(props);
    }
    return (
        <div style={{width:'20vw', display:'flex', justifyContent:'center', alignItems:'center', height:'500px'}} onClick={()=>{openDialog()}}>
            <div style={{width:'95%', height:'95%',display:'flex', justifyContent:'center', alignItems:'center', borderStyle:'solid', borderWidth:'1px', borderRadius:'10px'}}>
            <div style={{width:'95%', height:'95%',display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
            <div style={{width:'100%', height:'15%', display: 'flex', flexDirection:'column', alignItems:'flex-start'}}>
                <p style={{fontSize:'15px', margin:0,fontWeight:'500',color:'grey'}}>Title</p>
                <p style={{fontSize:'18px', margin:0,fontWeight:'bold',color:'#555454'}}>{props.title}</p>
            </div>
            <div style={{width:'100%', height:'15%', display: 'flex', flexDirection:'column', alignItems:'flex-start'}}>
                <p style={{fontSize:'16px', margin:0,fontWeight:'500',color:'grey'}}>Project.Technologies</p>
                <p style={{fontSize:'18px', margin:0}}>{props.technologies?.slice(0, 37)}{props.technologies?.length>39?'...':''}</p>
            </div>
            <div style={{width:'100%', height:'15%', display: 'flex', flexDirection:'column', alignItems:'flex-start'}}>
                <p style={{fontSize:'15px', margin:0,fontWeight:'500',color:'grey'}}>Technical_Skillset.Frontend</p>
                <p style={{fontSize:'18px', margin:0}}>{props.frontend?.slice(0, 39)}{props.frontend?.length>39?'...':''}</p>
            </div>
            <div style={{width:'100%', height:'15%', display: 'flex', flexDirection:'column', alignItems:'flex-start'}}>
                <p style={{fontSize:'15px', margin:0,fontWeight:'500',color:'grey'}}>Technical_Skillset.Backend</p>
                <p style={{fontSize:'18px', margin:0}}>{props.backend?.slice(0, 39)}{props.backend?.length>39?'...':''}</p>
            </div>
            <div style={{width:'100%', height:'15%', display: 'flex', flexDirection:'column', alignItems:'flex-start'}}>
                <p style={{fontSize:'15px', margin:0,fontWeight:'500',color:'grey'}}>Technical_Skillset.Databases</p>
                <p style={{fontSize:'18px', margin:0}}>{props.databases===undefined?'-':props.databases}</p>
            </div>
            <div style={{width:'100%', height:'15%', display: 'flex', flexDirection:'column', alignItems:'flex-start'}}>
                <p style={{fontSize:'15px', margin:0,fontWeight:'500',color:'grey'}}>Technical_Skillset.infrastructure</p>
                <p style={{fontSize:'18px', margin:0}}>{props.infrastructure===undefined?'-':props.infrastructure}</p>
            </div>
            </div>
            </div>
        </div>
    )
}
export default Card;