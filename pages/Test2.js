import dynamic from 'next/dynamic'
import React, {useEffect} from 'react'
import moment from 'moment'
import { BubbleChart, Rectangle } from '@mui/icons-material';

// Will only import `react-p5` on client-side
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
})

let bubble1;
let wh


export default function App (props) {

  useEffect(() => {
    wh =window.innerWidth  
  },[])

	const setup = (p5, canvasParentRef,bubble1) => {

    
		p5.createCanvas(wh, 100).parent(canvasParentRef);
    p5.textFont('Inter')
    p5.textStyle(p5.BOLD);
  
  


  
 class Bubble{

    constructor(x,y,w,z){
      this.x= x;
      this.y=y;
      this.w=w;
      this.z=z;
    }

    body(){
     30, 20, 55, 55;
    }
  }  


 
	};

	const draw = (p5,bubble1) => {
    p5.clear();
  p5.background(200);

	};

 
// Will only render on client-side
	return <Sketch setup={setup} draw={draw} />;
};