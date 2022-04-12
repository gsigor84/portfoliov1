import dynamic from 'next/dynamic'
import React, {useEffect} from 'react'

// Will only import `react-p5` on client-side
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
})

let x = 50;
let y = 50;

let wh =0

export default function App (props) {

  useEffect(() => {
    wh =window.innerWidth  
  },[])

	const setup = (p5, canvasParentRef) => {
		p5.createCanvas(1400, 200).parent(canvasParentRef);
	};

	const draw = (p5) => {
    
  




    p5.fill('#D9043D')
    p5.noStroke();
      let x1 = 0,
      x2 = 30,
      x3 = 80,
      x4 =400;
     let y1 =0,
      y2 = 20,
      y3 = 100,
      y4 =0;
 p5.bezier(x1, y1, x2, y2, x3, y3, x4, y4);
 
let steps = 10;
for (let i = 0; i <= steps; i++) {
  let t = i / steps;
  let x =   p5.bezierPoint(x1, x2, x3, x4, t);
  let y =   p5.bezierPoint(y1, y2, y3, y4, t);
 




}

  
  
  
    

	};

// Will only render on client-side
	return <Sketch setup={setup} draw={draw} />;
};