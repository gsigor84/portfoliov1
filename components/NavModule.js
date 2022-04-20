import React,{useState,useEffect} from 'react'
import Grid from '@mui/material/Grid';
import Link from 'next/link'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


function NavModule() {


  const [back, setBack] = useState('');
  const [burger, setBurger] = useState(false);

  useEffect(() => {
  
    const win =window.location.pathname
      setBack(win);
      handleClick();
    
  },[setBack,handleClick]);

function handleClick(){
  const win =window.location.pathname
  return setBack(win);
}

function handleBurger(){
setBurger(!burger);
console.log(burger)
if (burger === true){
  return(
    <div className='mobileDiv'>
      asdfasdfa
    </div>
  )
}
}

  return (
   
<Grid
  container
  direction="row"
  justifyContent="flex-end"
  alignItems="center"
  
>
{burger && <div className='mobileDiv'>
  <div style={{display: 'flex',justifyContent: 'flex-end',margin:'6%'}} onClick={()=>handleBurger()}>
    <CloseIcon/>
  </div>

<Grid
  container
  direction="column"
  justifyContent="space-evenly"
  alignItems="center"
  className='textBurger'
  
>
<Grid item xs={12} md={12} sx={{margin:'30px'}} >
<Link  href="/"  passHref  >
<a onClick={()=>handleBurger()}>
<span style={{fontSize:'30px', lineHeight:1,color:'black' }}className='thin' >
        HOME
</span>
</a>
< /Link>
</Grid>


<Grid item xs={12} md={12} sx={{margin:'30px'}} >
<Link  href="/bio2"  passHref >
<a onClick={()=>handleBurger()}>
<span style={{fontSize:'30px', lineHeight:1,color:'black' }}className='thin' >
        BIO
</span>
</a>
  < /Link>
</Grid>


<Grid item xs={12} md={12} sx={{margin:'30px'}} >
  <Link  href="/work"  passHref >
  <a onClick={()=>handleBurger()}>
<span style={{fontSize:'30px', lineHeight:1,color:'black' }}className='thin' >
        WORK
</span>
</a>
 < /Link>
</Grid>


<Grid item xs={12} md={12} sx={{margin:'30px'}} >
  <Link  href="/blog"  passHref >
  <a onClick={()=>handleBurger()}>
<span style={{fontSize:'30px', lineHeight:1,color:'black' }}className='thin' >
       BLOG
</span>
</a>
< /Link>
</Grid>





  </Grid>
  
  </div> }

<Grid item xs={12} md={5} sx={{margin:'1%',color:'white'}} className='NavGrid'>

<Link  href="/"  passHref >
<a onClick={() => handleClick()}>
<div className={back === '/' ? 'button-1':'button-n'} >
 <span style={{letterSpacing: '2px'}}> 
 HOME
 </span>
  </div>
</a>
</Link>

<Link  href="/bio2"  passHref >
<a onClick={() => handleClick()}>
<div className={back === '/bio2' ? 'button-1':'button-n' } >
<span style={{letterSpacing: '2px'}}> 
  BIO
  </span>
  </div>
</a>
</Link>


<Link  href="/work"  passHref >
<div className={back === '/work' ? 'button-1':'button-n' }  >
<span style={{letterSpacing: '2px'}}> 
  WORK
  </span>
  </div>
</Link>
<Link  href="/blog"  passHref >
<div className={back === '/blog' ? 'button-1':'button-n' }  >
<span style={{letterSpacing: '2px'}}> 
  BLOG
  </span>
  </div>  
</Link>
  </Grid>

  <Grid item xs={12} md={12} sx={{margin:'1%',color:'white'}} className='BurgerGrid'>
    <a onClick={()=>handleBurger()}>
 <MenuIcon sx={{color:'black', fontSize:'35px'}}/>
 </a>
  </Grid>
</Grid>

  )
}

export default NavModule