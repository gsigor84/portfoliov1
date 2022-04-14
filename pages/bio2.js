import React from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';

function bio2() {
  return (
    <Container maxWidth="lg" sx={{marginBlock:'4%'}}>
   <Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={1}

>

<Grid  item xs={12} md={12} >
  <Box sx={{backgroundColor:'black',color:'white',padding:'1%'}}>

        </Box>

        </Grid>
    
        <Grid  item xs={12} md={6} >

        <Box sx={{backgroundColor:'#05AFF2',padding:'4%',height: '70vh'}}>
        <p style={{fontSize:'60px', lineHeight:1,color:'black' }}className='subTitle1' >
  Igor Silva
</p>
        <Typography variant="h6"   sx={{color:'black'}} >
                
                I grew up in Sao Paulo.
    After I got my hands wet with python I soon discovered my passion for programming while doing web scrapping. 
    Now I live in England working full time freelance as aWeb Developer. In my spare time I like to go to the gym and reading.
    I enjoy building interactive, social mediaapplications with an eye on animated content.
    If you fancy a chat feel free to contact me:
                    </Typography>
                    <Typography  variant="h6" sx={{marginTop:'3%',color:'black'}}  >
    webdevigs@gmail.com
    </Typography>

        </Box>

        </Grid>
        <Grid  item xs={12} md={6}>

        <Box   sx={{backgroundColor:'#F2BD1D',padding:'1%',height: '70vh'}}>
        <List  component="nav" aria-label="mailbox folders">
      <ListItem button>
      <a href='https://www.udemy.com/course/nextjs-dev-to-deployment/'>
      <Typography variant="h7"  sx={{color:'black'}} >
      Next.js Dev to Deployment 
      </Typography>
      </a>
      </ListItem>
      <Divider />
      <ListItem button divider>
      <a href='https://www.udemy.com/course/complete-python-developer-zero-to-mastery/'>
      <Typography variant="h7"  sx={{color:'black'}} >
      Complete Python Developer in 2022: Zero to Mastery
      </Typography>
      </a>
      </ListItem>
      <ListItem button>
      <a href='https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/'>
      <Typography variant="h7"  sx={{color:'black'}} >
      The Complete Web Developer in 2022: Zero to Mastery
      </Typography>
      </a>
      </ListItem>
      <Divider light />
      <ListItem button>
      <a href='https://www.youtube.com/watch?v=7CqJlxBYj-M&list=PLcPYCNY0Jmf5GJIYKfv-bq4QLyXnq3TsU&index=128'>
      <Typography variant="h7"  sx={{color:'black'}} >
      Learn the MERN Stack - Full Tutorial (MongoDB, Express, React, Node.js)
      </Typography>
      </a>
      </ListItem>
      <Divider light />
      <ListItem button>
      <a href='https://www.udemy.com/course/ui-ux-web-design-using-adobe-xd/'>
      <Typography variant="h7"  sx={{color:'black'}} >
      User Experience Design Essentials - Adobe XD UI UX Design
      </Typography>
      </a>
      </ListItem>
      <Divider light />
      <ListItem button>
      <a href='https://www.udemy.com/course/sql-and-postgresql/'>
      <Typography variant="h7"  sx={{color:'black'}} >
      SQL and PostgreSQL: The Complete Developers Guide
      </Typography>
      </a>
      </ListItem>
      <Divider light />
      <ListItem button>
      <a href='https://frontendmasters.com/courses/modern-seo/'>
      <Typography variant="h7"  sx={{color:'black'}} >
      Modern Search Engine Optimization (SEO)
      </Typography>
      </a>
      </ListItem>
    
    
    </List>
        </Box>

        </Grid>

     


  </Grid>
 
  </Container>
  )
}

export default bio2