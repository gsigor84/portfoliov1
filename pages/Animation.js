import { getMenuUtilityClass } from '@mui/material';
import dynamic from 'next/dynamic'
import moment from "moment";

// Will only import `react-p5` on client-side
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
})

let x =-0;
let y = 0;
let fontSize=10;

let a = 0;
let b= 50;


export default function App (props) {

	const setup = (p5, canvasParentRef) => {
		p5.createCanvas(400, 400).parent(canvasParentRef);

    p5.textFont('Inter')
    p5.textSize(fontSize);
    p5.textStyle(p5.BOLD);
    
	};



	const draw = (p5) => {
    let sec = moment().format("ss")
  


    for(var i=1 ,j=0;i <8, j < 7;i++,j++){
 
      if(i% 2 == 0  ){
if(sec % 2 == 0 ){
  p5.noFill();
  let stroke = i+1
  p5.strokeWeight(stroke);
  p5.stroke('#05AFF2')
  p5.square(x/i, y/i, i*55,i*0);
  p5.fill('#05AFF2');
  p5.strokeWeight(0)
  p5.textSize(fontSize+i*5);
  p5.text('P5.js',a+j*42+15, b+j*53);

  

}
     

      }else{
        p5.noFill();
        let stroke = i+1
        p5.strokeWeight(stroke);
        p5.stroke('#F2A81D')
        p5.square(x/i, y/i, i*55,i*0);
        p5.fill('#F2A81D');
        p5.strokeWeight(0)
        p5.textSize(fontSize+i*5);
        p5.text('P5.js',a+j*42+15, b+j*53);
        
      }
  
 
    }
      
	};

// Will only render on client-side
	return <Sketch setup={setup} draw={draw} />;
};