
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link'
import Grid from '@mui/material/Grid';
import Animation from'./Animation'




export default function Bio() {



return(
  <Box sx={{ flexGrow: 1,backgroundColor:'#0597F2' }}>
 <Grid container 

direction="row"
  justifyContent="space-around"
  alignItems="center"
sx={{paddingTop:'2%'}}
 >
        <Grid item xs={12} md={4} sx={{margin:'2%'}}>
          <div style={{paddingInline:'2%',borderRadius: 10}}>
        <span style={{fontSize:'60px', lineHeight:1,color:'white' }}className='subTitle1' >
  Welcome to my Portfolio 
</span>

<Typography  variant="h6"  sx={{color:'white'}}  >
I’m Igor . I’m 37 years old. I’m a Web Developer who prioritize simplicity and usability.  
Proficient with the ability to multi-task and use multiple systems at any time.
Excellent problem solve & provide the best possible solution for the customer.
Strong ability to work as part of a team.
</Typography>



<Link href="/bio2"  passHref >
<Button  style={{backgroundColor:'white',borderRadius: 5,color:'black',marginBlock:'4%'}}>More information</Button>
</Link>
</div>
        </Grid>
        <Grid item xs={12} md={6} >
      <div className='tcenter'>
      <Animation/>
      </div>
        </Grid>
      
      </Grid>

</Box>

)

}