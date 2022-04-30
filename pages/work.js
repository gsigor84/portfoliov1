import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from 'next/link'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


function work() {
  return (
    
<Container maxWidth="lg" sx={{marginBottom:'1%'}}>


 <Grid container 

direction="row"
  justifyContent="center"
  alignItems="center"
sx={{paddingTop:'2%'}}
 >
   <Grid item xs={12} md={12} sx={{textAlign:'center',marginBlock: '10%'}} >
   <span style={{fontSize:'60px', lineHeight:1,color:'black' }}className='thin' >
WORK
</span>
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
         <Card sx={{ maxWidth: 345,boxShadow: "none"}} className='card'>
      <CardMedia
        component="img"
        height="340"
        image={item.image}
        alt={item.title}
       
      />
      <CardContent>
        <p  className='subTitle1' style={{color:'black',fontSize:'20px',alignSelf:'center',}}>
         {item.title}
        </p>
        <p  style={{color:'black',fontSize:'16px',fontFamily:'Lato'}}>
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

 </Container >

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