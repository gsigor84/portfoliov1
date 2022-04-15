import React from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import SchoolIcon from '@mui/icons-material/School';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import DeviceUnknownIcon from '@mui/icons-material/DeviceUnknown';
import Avatar from '@mui/material/Avatar';

function bio2() {
  return (
    <Container maxWidth="lg" sx={{marginBottom:'1%'}}>
   <Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={1}

>

<Grid  item xs={12} md={12} >
  <Box className='bioBox'>

  <Box sx={{ width: '100%' }}>
  <Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
>
<Grid  item xs={12} md={3} >
<Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
> 
<Grid item xs={12} md={3} sx={{textAlign:'center'}}>
          <SchoolIcon sx={{fontSize:'80px'}}/>
    
        </Grid>
        <Grid item xs={12} md={3} sx={{textAlign:'center'}}>
         <span style={{fontSize:'12px'}}>love for learning</span> 
    
        </Grid>

</Grid>

</Grid>
{/* new line */}
<Grid  item xs={12} md={3} >
<Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
> 
<Grid item xs={12} md={3} sx={{textAlign:'center'}}>
<GroupAddIcon  sx={{fontSize:'80px'}}/>
    
        </Grid>
        <Grid item xs={12} md={3} sx={{textAlign:'center'}}>
         <span style={{fontSize:'12px'}}>There is no I in team!</span> 
    
        </Grid>

</Grid>

</Grid>

{/* new line */}
<Grid  item xs={12} md={3} >
<Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
> 
<Grid item xs={12} md={3} sx={{textAlign:'center'}}>
<AccessAlarmIcon sx={{fontSize:'80px'}} />
    
        </Grid>
        <Grid item xs={12} md={3} sx={{textAlign:'center'}}>
        <span style={{fontSize:'12px'}}>Tracking time</span> 
    
        </Grid>

</Grid>

</Grid>

{/* new line */}
<Grid  item xs={12} md={3} >
<Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
> 
<Grid item xs={12} md={3} sx={{textAlign:'center'}}>
<DeviceUnknownIcon sx={{fontSize:'80px'}} />
    
        </Grid>
        <Grid item xs={12} md={3} sx={{textAlign:'center'}}>
        <span style={{fontSize:'12px'}}>here to make your life easier</span> 
    
        </Grid>

</Grid>

</Grid>





      </Grid>
    </Box>
 
        </Box>
        </Grid>
    
        <Grid  item xs={12} md={6} >

        <Box sx={{backgroundColor:'#05AFF2',padding:'4%'}}>
        <p style={{fontSize:'60px', lineHeight:1,color:'white'}}className='subTitle1' >
  Igor Silva
</p>
        <Typography variant="h6"   sx={{color:'white'}} >
                
                I grew up in Sao Paulo.
    After I got my hands wet with python I soon discovered my passion for programming while doing web scrapping. 
    Now I live in England working full time freelance as a Web Developer. In my spare time I like to go to the gym and reading.
    I enjoy building interactive, social mediaapplications with an eye on animated content.
    If you fancy a chat feel free to contact me:
                    </Typography>
                    <Typography  variant="h6" sx={{marginTop:'3%',color:'white'}}  >
    webdevigs@gmail.com
    </Typography>

        </Box>

        </Grid>
        <Grid  item xs={12} md={6}>
        

<Grid  item xs={12} md={12}>

        <Box   sx={{backgroundColor:'#05AFF2',padding:'4%'}}>
        <List  component="nav" aria-label="mailbox folders">
      <ListItem button>
      <a href='https://www.udemy.com/course/nextjs-dev-to-deployment/'>
      <Typography variant="h7"  sx={{color:'white'}} >
      Next.js Dev to Deployment 
      </Typography>
      </a>
      </ListItem>
      <Divider />
      <ListItem button divider>
      <a href='https://www.udemy.com/course/complete-python-developer-zero-to-mastery/'>
      <Typography variant="h7"  sx={{color:'white'}} >
      Complete Python Developer in 2022: Zero to Mastery
      </Typography>
      </a>
      </ListItem>
      <ListItem button>
      <a href='https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/'>
      <Typography variant="h7"   sx={{color:'white'}} >
      The Complete Web Developer in 2022: Zero to Mastery
      </Typography>
      </a>
      </ListItem>
      <Divider light />
      <ListItem button>
      <a href='https://www.youtube.com/watch?v=7CqJlxBYj-M&list=PLcPYCNY0Jmf5GJIYKfv-bq4QLyXnq3TsU&index=128'>
      <Typography variant="h7"  sx={{color:'white'}} >
      Learn the MERN Stack - Full Tutorial (MongoDB, Express, React, Node.js)
      </Typography>
      </a>
      </ListItem>
      <Divider light />
      <ListItem button>
      <a href='https://www.udemy.com/course/ui-ux-web-design-using-adobe-xd/'>
      <Typography variant="h7"   sx={{color:'white'}} >
      User Experience Design Essentials - Adobe XD UI UX Design
      </Typography>
      </a>
      </ListItem>
      <Divider light />
      <ListItem button>
      <a href='https://www.udemy.com/course/sql-and-postgresql/'>
      <Typography variant="h7"   sx={{color:'white'}} >
      SQL and PostgreSQL: The Complete Developers Guide
      </Typography>
      </a>
      </ListItem>
      <Divider light />
      <ListItem button>
      <a href='https://frontendmasters.com/courses/modern-seo/'>
      <Typography variant="h7"   sx={{color:'white'}} >
      Modern Search Engine Optimization (SEO)
      </Typography>
      </a>
      </ListItem>
    
      
    </List>
   
        </Box>

     
 </Grid>

 <Grid  item xs={12} md={12}>

 </Grid>
 <Grid  item xs={12} md={12}>

        <Box   sx={{backgroundColor:'#05AFF2',padding:'4%',marginTop:'1%'}}>
        <Grid
  container
  direction="row"
  justifyContent="flex-start"
  alignItems="center"
>
<Grid  item xs={2} md={2}>
        <Avatar alt="Remy Sharp" src="python-logo.png"  />
        </Grid>
        <Grid  item xs={2} md={2}>
    <Avatar alt="Remy Sharp" src="js-logo-react.png"  />
    </Grid>
    <Grid  item xs={2} md={2}>
    <Avatar alt="Remy Sharp" src="mongodb.png" />
    </Grid>
    <Grid  item xs={2} md={2}>
    <Avatar alt="Remy Sharp" src="selenium.png" />
    </Grid>
    <Grid  item xs={2} md={2}>
    <Avatar alt="Remy Sharp" src="javascript.png" />
    </Grid>
    <Grid  item xs={2} md={2}>
    <Avatar alt="Remy Sharp" src="css.png" />
    </Grid>

    </Grid>

         </Box>

     
 </Grid>

 <Grid  item xs={12} md={12}>
 <Box sx={{backgroundColor:'#04BF8A',padding:'4%',marginTop:'1%',color:'white',textAlign:'center',justifyContent: 'center'}}>
<span className='subTitle1' style={{fontSize:'26px',}}>
 Powerful Solutions for a Connected World
 </span>
</Box>
 </Grid>
        </Grid>

        </Grid>

     

 
  </Container>
  )
}

export default bio2