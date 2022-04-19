import Head from 'next/head'
import NavModule from './NavModule';
import Footer from './Footer'

export default function Layout({children}) {


    return (
    
     <div>
        <Head>
 
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Lato&display=swap" />
       </Head>
    <NavModule/>
    {children}
  <Footer />
</div>
   

    )

}