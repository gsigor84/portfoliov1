import React,{useState,useEffect} from 'react'
import Bio from './bio.js'
import Grid from '@mui/material/Grid';
import Form from './form'
import Maps from './maps'
import Gallery from './Gallery';
import Purpose from'./purpose';


export default function Home() {

  return (
<Grid container 
 direction="row"
 justifyContent="center"
 alignItems="flex-start"
className="fullscreen"

>
<Grid item xs={12} md={12} className='boxBackG'>

</Grid>


<Grid item xs={12} md={12}  sx={{height:'50vh'}} className='BioContainer'>
<Bio/>

</Grid>



<Grid item xs={12} md={12} sx={{backgroundColor:'#D9D9D9'}} className='PurposeContainer' >


<Purpose/>

</Grid>

 <Grid item xs={12} md={12} className='FormContainer'  >     
  <Form/>
<Gallery />
<Maps/>
</Grid>



</Grid>




  )
}
