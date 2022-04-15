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
		p5.createCanvas(wh, 100).parent(canvasParentRef);
    p5.textFont('Inter')
    p5.textSize(fontSize);
    p5.textStyle(p5.BOLD);
	};

	const draw = (p5) => {

    p5.clear();
    p5.background(200);
    p5.squareColor = p5.color(100, 50, 100);
    p5.squareColor.setAlpha(128 + 128 * p5.sin(p5.millis() / 1000));
    p5.fill(p5.squareColor);
    p5.rect(13, 13, p5.width - 26, p5.height - 26);

   
	};

// Will only render on client-side
	return <Sketch setup={setup} draw={draw} />;
};