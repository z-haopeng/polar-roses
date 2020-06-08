import React from 'react';
import p5 from 'p5';

export default class Rose extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      canvasSize: window.innerWidth < 500 || window.innerHeight < 500 ? 250 : 500
    }
  }

  Sketch = (p) => {
    p.setup = () => {
      p.createCanvas(this.state.canvasSize, this.state.canvasSize);
    }

    p.draw = () => {
      p.background(51);
      p.push();
      p.translate(p.width / 2, p.height / 2);
      p.beginShape();
      p.stroke(255);
      p.noFill();
      for (let a = 0; a < p.TWO_PI * reduceDenom(this.props.n, this.props.d); a += 0.02) {
        let r = this.state.canvasSize/2 * p.cos(this.props.n / this.props.d * a);
        let x = r * p.cos(a);
        let y = r * p.sin(a);
        p.vertex(x, y);
      }
      p.endShape(p.CLOSE);
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

function reduceDenom(num, denom) {
  function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
  }
  return denom / gcd(num, denom);
}