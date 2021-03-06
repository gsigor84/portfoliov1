import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Image from 'next/image'


function blog() {
  return (
   
<Container maxWidth="lg" sx={{marginBottom:'1%'}}>

 <Grid container 

direction="row"
  justifyContent="center"
  alignItems="center"
sx={{paddingTop:'2%'}}
 >
   <Grid item xs={12} md={12} className='boxBackG3'>

</Grid>
 <Grid item xs={12} md={12} sx={{textAlign:'center'}}>
 <span style={{fontSize:'60px', lineHeight:1,color:'black' }}className='thin' >
BLOG
</span>
</Grid>

<Box sx={{ flexGrow: 1 }}>
  <Grid container 
  direction="row"
  justifyContent="flex-start"
  alignItems="center"
  className='blogBox'
  sx={{position:'relative'}}
  >
        



        <Grid item xs={10} md={7} >

<Grid 
 container
 direction="row"
 justifyContent="flex-start"
 alignItems="center"
 sx={{margin:'6%'}}
spacing={2}>
      <ImageListItem key="Subheader" cols={4}>
      </ImageListItem>
      {itemData.map((item,index) => (
        <Grid item xs={12} md={4} key={index}>
<a href={item.link}>
 
        <ImageListItem key={item.img} >
          <Image
            src={`${item.img}?w=150&h=150&fit=crop&auto=format`}
            key={index}
            alt={item.title}
         
            width={600}
      height={600}
          
          />

          <ImageListItemBar
            title={item.title}
          />
        </ImageListItem> </a>
        </Grid>
      ))}
    </Grid>
  

</Grid>
    </Grid>
</Box>

 </Grid>
</Container>

  )
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1568283661163-c90193fd13f1',
    title: 'Easy use of props in Next.js',
    link:'https://medium.com/@webdevigs/easy-use-of-props-in-next-js-187fbaabfbb2'
  },
 


];

export default blog