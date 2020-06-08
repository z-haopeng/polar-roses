import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'fontsource-roboto/latin-ext-300.css';
import 'fontsource-roboto/latin-ext-400.css';
import 'fontsource-roboto/latin-ext-500.css';
import 'fontsource-roboto/latin-ext-700.css';

import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Box from '@material-ui/core/Box';

import Rose from './Rose.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      n: 5,
      d: 3
    }
  }

  render() {
    return(
      <div>
        <Typography variant='h3'>Polar Roses</Typography>
        <Rose n={this.state.n} d={this.state.d}></Rose>
        <Box fontStyle='italic' fontSize='h6.fontSize'>r=cos(n&theta;/d)</Box>
        <Box width='500px' maxWidth='80vw' margin='auto'>
          <Typography align='left' gutterBottom>Numerator (n)</Typography>
          <Slider
            valueLabelDisplay='auto'
            min={1}
            max={25} 
            value={this.state.n}
            onChange={(e, val) => this.setState({n: val})} />
          <Typography align='left' gutterBottom>Denominator (d)</Typography>
          <Slider 
            valueLabelDisplay='auto'
            min={1}
            max={25}
            value={this.state.d}
            onChange={(e, val) => this.setState({d: val})} />
        </Box>
        
      </div> 
    )
  }
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
