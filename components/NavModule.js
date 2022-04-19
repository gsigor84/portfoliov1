import React,{useState,useEffect} from 'react'
import Grid from '@mui/material/Grid';
import Link from 'next/link'
import MenuIcon from '@mui/icons-material/Menu';
function NavModule() {


  const [back, setBack] = useState('');
  const [css, setcss] = useState('');

  useEffect(() => {
  
    const win =window.location.pathname
      setBack(win);
      handleClick();
    
  },[setBack,handleClick]);

function handleClick(){
  const win =window.location.pathname
  return setBack(win);
}

  return (
   
<Grid
  container
  direction="row"
  justifyContent="flex-end"
  alignItems="center"
  
>


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
 <MenuIcon sx={{color:'black', fontSize:'35px'}}/>
  </Grid>
</Grid>

  )
}

export default NavModule