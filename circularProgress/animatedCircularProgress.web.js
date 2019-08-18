import React, {Component} from 'react';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


class CustomCircularProgress extends Component {
  render() {
    const { size, width, fill, rotation, tintColor, backgroundColor } = this.props;
    return (
      <div style={{width: size, height: size}}>
        <CircularProgressbar
          value={fill}
          strokeWidth={width*3}
          styles={buildStyles({
            rotation: rotation,
            trailColor: tintColor,
            backgroundColor: backgroundColor,
          })}
        />
      </div>
    )
  }
}

export default CustomCircularProgress;
