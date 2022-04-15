import Bio from './bio.js'
import Grid from '@mui/material/Grid';
import Form from './form'
import Animation2  from './Animation2';




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


<Form/>
</Grid>

 <Grid item xs={12} md={12}    >      

</Grid>



</Grid>




  )
}
