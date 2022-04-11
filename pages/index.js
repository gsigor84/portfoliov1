import Box from '@mui/material/Box';
import Bio from './bio.js'

import Grid from '@mui/material/Grid';





export default function Home() {


  return (

  

<Grid container 
 direction="row"
 justifyContent="center"
 alignItems="flex-start"
className="fullscreen"
>

<Grid item xs={12} md={12}  >
<Bio/>

</Grid>



<Grid item xs={12} md={12} sx={{marginTop:'10%'}}  >

</Grid>

 <Grid item xs={12} md={12}    >      

</Grid>



<Grid item xs={12} md={12} >

</Grid>
<Grid item xs={12} md={12} sx={{marginTop:'5%'}}    >

</Grid>
</Grid>




  )
}
