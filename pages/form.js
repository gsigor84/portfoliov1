import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import emailjs from 'emailjs-com';
import Button from '@mui/material/Button';


export default function Form() {


    function sendEmail (e) {
      e.preventDefault();
      emailjs.sendForm('service_d4444hv', 'template_zor9k67',e.target, 'user_1SCe42Na5df2ul4XXc4nV')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };
  

    return(

        <Box sx={{ flexGrow: 1 }} className='FormPadding' >
            <Grid container 
             direction="column"
             justifyContent="center"
             alignItems="center"
            spacing={2} 
            className='formBox'
            sx={{paddingBlock:'6%'}}
            >
 
  <Grid item xs={12}  >
  <form onSubmit={sendEmail}>
  <Typography variant="h4" component="div" className='subTitle1' style={{color:'black'}}>
Looking for help with Web Development?
</Typography>

<p variant="h7" component="div" className='p1' style={{color:'black'}} >
Send me details
</p>


<Box   className='textBox' >
  
<TextField
fullWidth 
        id="outlined-name"
        label="Name"
        size="small"
        name="name" 
        
      />
</Box>


<Box className='textBox' >
<TextField
fullWidth 
        id="outlined-name"
        label="Email Adress"
        multiline
        size="small"
        name="email" 
      />
      
</Box>

<Box className='textBox' >
<TextField
fullWidth 
          id="standard-multiline-static"
          label="Detail"
          multiline
          rows={4}
          name="message" 
          
        />
      
</Box>

<Box style={{paddingTop:'2%',}} >

<Button value="Submit" type='submit'  className='button-1' >
Submit
</Button>

</Box>
</form>
  </Grid>
 
  </Grid>
            </Box>
    )
}