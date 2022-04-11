import Head from 'next/head'
import Box from '@mui/material/Box';


export default function Layout({children}) {


    return (
    
      <Box sx={{ flexGrow: 1}} className='layoutBox'>
        <Head>
 
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" Crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Lato&display=swap" />
       </Head>
    
    {children}

       </Box>

    )

}