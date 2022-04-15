import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import  Animation2 from './Animation2';


function work() {
  return (
    
<Box sx={{ flexGrow: 1,backgroundColor:'#04BF8A',marginBottom:'1%' }}>


 <Grid container 

direction="row"
  justifyContent="center"
  alignItems="center"
sx={{paddingTop:'2%'}}
 >
   <Grid item xs={12} md={12} sx={{margin:'2%',textAlign:'center'}}>
   <Typography  variant="h2"  sx={{color:'white'}} className='subTitle1' >
WORK.
</Typography>
</Grid>

{/* Cards */}


<Grid item xs={12} md={12} sx={{margin:'2%',textAlign:'center'}}>



<Box sx={{ flexGrow: 1 }}>
      <Grid container 
        direction="row"
        justifyContent="space-evenly"
        alignItems="flex-start"
      spacing={2}
      className='workBox'
    
      >    
        {itemData.map((item,index) => (
          <Link href={item.link} key={index} >
          <a>
         <Card sx={{ maxWidth: 345,boxShadow: "none",backgroundColor:'#04BF8A'}} className='card'>
      <CardMedia
        component="img"
        height="140"
        image={item.image}
        alt={item.title}
       
      />
      <CardContent>
        <p  className='subTitle1' style={{color:'white',fontSize:'20px',alignSelf:'center',}}>
         {item.title}
        </p>
        <p  className='p1' style={{color:'white',fontSize:'16px'}}>
         {item.description}
        </p>
      </CardContent>
      <CardActions>
      </CardActions>
</Card>
</a>
</Link>

))}

</Grid>
    </Box> 

</Grid>

 </Grid>

 </Box>

  )
}

const itemData = [
  {
    image: 'gxmlay.jpg',
    title: 'GXNG Fitness',
    description:'Fitness App written in NEXT.JS and using Strapi API. You can select the muscle part and make your workout plan.',
    link:'https://gxng2.vercel.app/'
  },
  {
    image: 'zoharlay.jpg',
    title: 'Zohar News',
    description:'Zohar its an app written in React Native and running Node.js and MongoDB on the background. Python is also used to scrap the news from the web.',
    link:'/inlink/zohar'
  },
  {
    image: 'smalogo.png',
    title: 'Media Automation',
    description:'Written in Python Scrap the web and the social media Apps to create content for your Facebook and Instagram. Automatic post on your social media: Photos, Videos and Links.',
    link:'/inlink/sma'
  },
  

];

export default work