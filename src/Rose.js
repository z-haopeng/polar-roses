import React from 'react';
import p5 from 'p5';

export default class Rose extends React.Component {
  constructor(props) {
    super(props);
    // Reference so that the draw method will change the screen
    this.myRef = React.createRef();
    // Resize the canvas based on device size
    this.state = {
      canvasSize: window.innerWidth < 500 || window.innerHeight < 500 ? 250 : 500
    }
  }

  // p5.js implementation
  // setup() is called once, draw() is called ~60 times per second
  Sketch = (p) => {
    p.setup = () => {
      p.createCanvas(this.state.canvasSize, this.state.canvasSize);
    }

    p.draw = () => {
      p.background(51);
      // Stores the drawing state at this moment
      // Not really necessary in this case, but useful for more complex drawings
      p.push();
      // Default starting point is top left corner, so move to center of canvas
      p.translate(p.width / 2, p.height / 2);
      // Create a visibly smooth curve that connects all points
      p.beginShape();
      p.stroke(255);
      p.noFill();
      // The minimun number of full circles (2*pi radians) needed to trace out
      // A rose of the form r = cos(n*theta/d) is the denominator of n/d in simplest form
      // Ex. if n = 5 and d = 10, 5/10 = 1/2, so the loop must go from 0 to 2*2*pi
      // However, this value, stored in reduced, can range from 1 to 25, and no curve needs 25x as many points
      // So the increment is made proportional to reduced, and every rose has the same number of points
      let reduced = reduceDenom(this.props.n, this.props.d);
      for (let a = 0; a < p.TWO_PI * reduced; a += reduced/500) {
        let r = this.state.canvasSize/2 * p.cos(this.props.n / this.props.d * a);
        // Converting from polar coordinates to cartesian
        let x = r * p.cos(a);
        let y = r * p.sin(a);
        p.vertex(x, y);
      }
      p.endShape(p.CLOSE);
      // Return to the state stored by the last call to push()
      p.pop();
    }

    p.windowResized = () => {
      this.setState({canvasSize: window.innerWidth < 500 || window.innerHeight < 500 ? 250 : 500});
      p.resizeCanvas(this.state.canvasSize, this.state.canvasSize);
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

// Recursive GCD function that apparently everyone knows about
// Takes advantage of true also meaning "not 0" for numbers
function reduceDenom(num, denom) {
  function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
  }
  return denom / gcd(num, denom);
}