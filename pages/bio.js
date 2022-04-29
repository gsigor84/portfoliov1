import Container from '@mui/material/Container';
import Link from 'next/link'
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';




export default function Bio() {



return(
  <Container maxWidth="lg" sx={{marginBottom:'1%'}} >

 <Grid container 

direction="row"
justifyContent="flex-start"
  alignItems="center"

 >
        <Grid item xs={12} md={12} sx={{marginTop:'15%'}} className='BioBox1'>
          <p style={{color:'#737272'}}>The future is bright with IT</p>
        <motion.span animate={{fontSize:'60px',color:'black',x:0,y:100 }} transition={{duration:0.3}} className='thin' >
  Welcome to my Portfolio 
</motion.span>


</Grid>

<Grid item xs={12} md={12}  >
<Link href="/bio2"  passHref >

<div  className='button-2' ><a>More information</a></div>

</Link>
        </Grid>
        <Grid item xs={12} md={6} >
      <div className='tcenter'>
  
      </div>
        </Grid>
      
      </Grid>

</Container>

)

}