import dynamic from 'next/dynamic'
import React, {useEffect} from 'react'
import moment from 'moment'

// Will only import `react-p5` on client-side
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
})

let x = 0;
let y = 0;
let fontSize=50;
let wh =0
let goLeft= false;



export default function App (props) {

  useEffect(() => {
    wh =window.innerWidth  
  },[])

	const setup = (p5, canvasParentRef) => {
		p5.createCanvas(wh, 300).parent(canvasParentRef);
    p5.textFont('Inter')
    p5.textSize(fontSize);
    p5.textStyle(p5.BOLD);
	};

	const draw = (p5) => {
    let ht = p5.height
    let date = moment().format("D MMM YYYY")
let time = moment().format("HH:mm:ss")
let sec = moment().format("ss")
 p5.background('#04BF8A');

    p5.stroke(255);
    p5.strokeWeight(20);
    p5.line(x-30, y,x+ 130,ht);
    p5.line(x+200, y,x+ 10+300,x+2+ ht);
    p5.line(x+600, y, x+10+900,x+1* ht);
    if(goLeft==false){

      x=x+0.09;
    }
    if(goLeft==true){
      x=x-0.09;
    }

if(x>p5.width){
  goLeft=true;
}

 p5.noStroke(255);
    p5.fill(0);
    p5.textSize(fontSize);
    p5.text('MAKE', p5.width-600, 100)
    p5.text('- DESIGN BETTER', p5.width-600, 160)
    p5.textSize(20);
    p5.text(date, p5.width-600, 200)
    
  
    if(sec % 2 == 0) {
      p5.fill(255);
      p5.text(time, p5.width-600, 225)
  }else{
    p5.fill(0);
      p5.text(time, p5.width-600, 225)
  }


   
	};

// Will only render on client-side
	return <Sketch setup={setup} draw={draw} />;
};