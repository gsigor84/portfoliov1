import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Footer() {
  return (
    <Grid
    container
    direction="row"
    justifyContent="space-around"
    alignItems="center"
   
    className='FooterDiv'
  >
<Grid item xs={12} md={8} >
<Container maxWidth="lg" >
  <div style={{marginBlock:'2%'}}>
<Typography variant="h7"  sx={{color:'black',fontFamily:'Lato'}}  >
Information Technology and Design
      </Typography>

      </div>
<Typography variant="h6" component="div" className='subTitle1' style={{color:'black'}}>
Design is our passion.
Creating beautiful things is what we do.
</Typography>
<div style={{marginBlock:'2%'}}>
<Typography variant="h7" component="div" className='subTitle1' style={{color:'black'}}>
IT allows businesses to operate more efficiently and effectively. It can help businesses automate processes and make them more organized.
A website is a powerful marketing and communication tool. It allows you to reach a large audience with minimal effort and expense. A website can also help you build trust and credibility with potential and current customers.
</Typography>
</div>
</Container>
</Grid>
</Grid>

  )
}

export default Footer