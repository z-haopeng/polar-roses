(this["webpackJsonppolar-roses"]=this["webpackJsonppolar-roses"]||[]).push([[0],{32:function(e,t,n){e.exports=n(47)},37:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(15),r=n(16),i=n(24),s=n(22),o=n(1),c=n.n(o),u=n(17),l=n.n(u),h=(n(37),n(38),n(39),n(40),n(41),n(58)),d=n(61),v=n(60),p=n(27),f=n.n(p),m=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).Sketch=function(e){e.setup=function(){e.createCanvas(r.state.canvasSize,r.state.canvasSize)},e.draw=function(){e.background(51),e.push(),e.translate(e.width/2,e.height/2),e.beginShape(),e.stroke(255),e.noFill();for(var t=0;t<e.TWO_PI*w(r.props.n,r.props.d);t+=.02){var n=r.state.canvasSize/2*e.cos(r.props.n/r.props.d*t),a=n*e.cos(t),i=n*e.sin(t);e.vertex(a,i)}e.endShape(e.CLOSE),e.pop()},e.windowResized=function(){r.setState({canvasSize:window.innerWidth<500||window.innerHeight<500?250:500}),e.resizeCanvas(r.state.canvasSize,r.state.canvasSize)}},r.myRef=c.a.createRef(),r.state={canvasSize:window.innerWidth<500||window.innerHeight<500?250:500},r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.myP5=new f.a(this.Sketch,this.myRef.current)}},{key:"render",value:function(){return c.a.createElement("div",{ref:this.myRef})}}]),n}(c.a.Component);function w(e,t){return t/function e(t,n){return n?e(n,t%n):t}(e,t)}var S=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={n:5,d:3},r}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(h.a,{variant:"h2"},"Polar Roses"),c.a.createElement(m,{n:this.state.n,d:this.state.d}),c.a.createElement(v.a,{width:"500px",maxWidth:"80vw",margin:"auto"},c.a.createElement(d.a,{valueLabelDisplay:"auto",min:1,max:25,value:this.state.n,onChange:function(t,n){return e.setState({n:n})}}),c.a.createElement(d.a,{valueLabelDisplay:"auto",min:1,max:25,value:this.state.d,onChange:function(t,n){return e.setState({d:n})}})))}}]),n}(c.a.Component);l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(S,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.cae77cf5.chunk.js.map