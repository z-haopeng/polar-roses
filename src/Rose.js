import React from 'react';
import p5 from 'p5';

export default class Rose extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
      }
    
      Sketch = (p) => {
         p.setup = () => {
            p.createCanvas(500, 500);
         }
    
         p.draw = () => {
            p.background(51);
            p.push();
            p.translate(p.width/2, p.height/2);
            p.beginShape();
            p.stroke(255);
            p.noFill();
            for(let a = 0; a < p.TWO_PI*5; a+= 0.02) {
                let r = 250*p.cos(9/5*a);
                let x = r*p.cos(a);
                let y = r*p.sin(a);
                p.vertex(x, y);
            }
            p.endShape(p.CLOSE);
            p.pop();
         }
      }
    
      componentDidMount() {
        this.myP5 = new p5(this.Sketch, this.myRef.current);
      }
    
      render() {
        return (
          <div ref={this.myRef} />
        );
      }
}