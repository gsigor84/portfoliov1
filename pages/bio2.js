import React from 'react'
import Container from '@mui/material/Container';
import Image from 'next/image'
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';



function bio2() {
  return (
    <Container maxWidth="lg" sx={{marginBottom:'1%'}}>
   <Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={1}
sx={{marginBottom:'8%'}}
>
<Grid item xs={12} md={12} className='boxBackG2'>

</Grid>


<Grid  item xs={12} md={6} sx={{marginTop:'15%'}} >

<Image
     
      src="/igorv1.jpg"
      alt="Picture of the author"
      width={352}
      height={377}
    />
        </Grid>

        <Grid  item xs={12} md={6} sx={{marginTop:'15%'}} >

<div >
        <span style={{fontSize:'60px', lineHeight:1,color:'black' }}className='thin' >
        Igor Silva
</span>
</div>

<div style={{marginBlock:'2%',lineHeight:'30px'}}>
        <span style={{fontSize:'20px', lineHeight:1,color:'black' }}className='subTitle1' >
        I grew up in Sao Paulo. After I got my hands wet with python I soon discovered my passion for programming while doing web scrapping. Now I live in England working full time freelance as a Web Developer. In my spare time I like to go to the gym and reading. I enjoy building interactive, social mediaapplications with an eye on animated content. 
</span>
</div>

        </Grid>



<Grid  item xs={12} md={6} sx={{marginTop:'10%'}} >

<Typography variant="h6"  sx={{color:'black',fontFamily:'Lato',marginBlock:'4%'}}  >
      Courses
      </Typography>

<List  component="nav" aria-label="mailbox folders">
     
      <a href='https://www.udemy.com/course/nextjs-dev-to-deployment/'>
      <Typography variant="h7"  sx={{color:'black'}} className='subTitle2' >
      Next.js Dev to Deployment 
      </Typography>
      </a>
      
      <Divider sx={{marginBlock:'4%',width:'20%'}} />
    
      <a href='https://www.udemy.com/course/complete-python-developer-zero-to-mastery/'>
      <Typography variant="h7"  sx={{color:'black'}} className='subTitle1' >
      Complete Python Developer in 2022: Zero to Mastery
      </Typography>
      </a>
      <Divider sx={{marginBlock:'4%',width:'20%'}} />
    
      <a href='https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/'>
      <Typography variant="h7"  sx={{color:'black'}} className='subTitle1' >
      The Complete Web Developer in 2022: Zero to Mastery
      </Typography>
      </a>
     
      <Divider sx={{marginBlock:'4%',width:'20%'}} />
    
      <a href='https://www.youtube.com/watch?v=7CqJlxBYj-M&list=PLcPYCNY0Jmf5GJIYKfv-bq4QLyXnq3TsU&index=128'>
      <Typography variant="h7"  sx={{color:'black'}} className='subTitle1' >
      Learn the MERN Stack - Full Tutorial (MongoDB, Express, React, Node.js)
      </Typography>
      </a>
     
      <Divider sx={{marginBlock:'4%',width:'20%'}} />
     
      <a href='https://www.udemy.com/course/ui-ux-web-design-using-adobe-xd/'>
      <Typography variant="h7"  sx={{color:'black'}} className='subTitle1' >
      User Experience Design Essentials - Adobe XD UI UX Design
      </Typography>
      </a>
     
      <Divider sx={{marginBlock:'4%',width:'20%'}} />
     
      <a href='https://www.udemy.com/course/sql-and-postgresql/'>
      <Typography variant="h7"  sx={{color:'black'}} className='subTitle1' >
      SQL and PostgreSQL: The Complete Developers Guide
      </Typography>
      </a>
     
      <Divider sx={{marginBlock:'4%',width:'20%'}} />
      
      <a href='https://frontendmasters.com/courses/modern-seo/'>
      <Typography variant="h7"  sx={{color:'black'}} className='subTitle1' >
      Modern Search Engine Optimization (SEO)
      </Typography>
      </a>
    
    
    
    </List>
</Grid>

<Grid  item xs={12} md={6}  >

</Grid>
        </Grid>
  </Container>
  )
}

export default bio2