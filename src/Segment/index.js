import React, {PureComponent, Fragment} from "react"
import PropTypes from "prop-types"

import {center, radius} from "../constants"

class Segment extends PureComponent {
  state = {
    mouseOvered: false,
  }
  render() {
    const {
      stroke,
      strokeDasharray,
      strokeDashoffset,
      strokeWidth,
      fontSize,
      fontColor,
      title,
      percent,
    } = this.props
    const {mouseOvered} = this.state
    return (
      <Fragment>
        <circle
          cx={center.x}
          cy={center.y}
          r={radius}
          fill="none"
          stroke={stroke}
          strokeWidth={mouseOvered ? strokeWidth + 2 : strokeWidth}
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          onMouseOver={() => this.setState({mouseOvered: true})}
          onMouseOut={() => this.setState({mouseOvered: false})}
        />
        {mouseOvered && (
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            style={{fontSize, color: fontColor}}
          >
            {title ? `${title} : ${percent}%` : `${percent}%`}
          </text>
        )}
      </Fragment>
    )
  }
}

Segment.propTypes = {
  stroke: PropTypes.string.isRequired,
  strokeDasharray: PropTypes.string.isRequired,
  strokeDashoffset: PropTypes.number.isRequired,
  strokeWidth: PropTypes.number,
  fontSize: PropTypes.number,
  fontColor: PropTypes.string,
  title: PropTypes.string,
  percent: PropTypes.number,
  value: PropTypes.number.isRequired,
}

Segment.defaultProps = {
  strokeWidth: 5,
  fontSize: 3,
  fontColor: "#000",
}

export default Segment
