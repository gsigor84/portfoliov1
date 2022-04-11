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

 

	const setup = (p5, canvasParentRef) => {
		p5.createCanvas(1000, 200).parent(canvasParentRef);
	};

	const draw = (p5) => {
    
  



    p5.noStroke();
    p5.point(0, 0);
    p5.point(100, 80);
    p5.point(200, 0);
    p5.point(300, 50);
    p5.fill('#D9043D')
    p5.bezier(0, 0, 100, 80, 200, 0, 300, 0);

   
    p5.point(300, 0);
    p5.point(400, 80);
    p5.point(500, 0);
    p5.point(600, 0);
    p5.bezier(310, 0, 600, 90, 600, 0, 750, 0);
  
  
    

	};

// Will only render on client-side
	return <Sketch setup={setup} draw={draw} />;
};