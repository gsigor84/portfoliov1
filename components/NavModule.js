import React from 'react'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Link from 'next/link'
function NavModule() {
  return (
   
<Grid
  container
  direction="row"
  justifyContent="flex-end"
  alignItems="center"
  sx={{backgroundColor:'white'}}
>
<Grid item xs={12} md={12} sx={{margin:'1%',color:'white', display: 'flex', justifyContent: 'flex-end'}}>

<Link  href="/">
<Button  style={{backgroundColor:'#0597F2',borderRadius: 5,color:'white',marginInline:'1%'}}>HOME</Button>
</Link>

<Link  href="/bio2">
<Button  style={{backgroundColor:'#05AFF2',borderRadius: 5,color:'white',marginInline:'1%'}}>BIO</Button>
</Link>
<Button  style={{backgroundColor:'#04BF8A',borderRadius: 5,color:'white',marginInline:'1%'}}>WORK</Button> 
<Button  style={{backgroundColor:'#F2BD1D',borderRadius: 5,color:'white',marginInline:'1%'}}>BLOG</Button>   
  
  </Grid>




</Grid>

  )
}

export default NavModule