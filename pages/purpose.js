import React from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Image from 'next/image'

function purpose() {

    return(

      <Container maxWidth="lg" sx={{marginBottom:'1%'}}>
          <Grid container 
          
           direction="row"
           justifyContent="flex-start"
           alignItems="center"
          spacing={2} 
          className='formBox'
          sx={{paddingBlock:'6%'}}
          >


<Grid item xs={12}  md={6}  >
<Image
     
      src="https://images.unsplash.com/photo-1570126618953-d437176e8c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=494&q=80"
      alt="Picture of the author"
      width={494}
      height={494}
    />
  </Grid>

<Grid item xs={12}  md={6} sx={{lineHeight: 1.6}} >
<p style={{color:'#0D0D0D',fontSize:'20px',fontWeight:'bold'}}>COMPANY PURPOSE</p>
   The purpose of a IT company is to provide information technology services to businesses and organizations. These services can include the development, implementation, and maintenance of software applications, websites, and database systems. IT companies may also provide network and security services, as well as support and training.
  
</Grid>


 </Grid>
  </Container>
  )
}

export default purpose