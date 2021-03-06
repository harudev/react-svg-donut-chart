var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i]
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key]
        }
      }
    }
    return target
  }

import React from "react"
import PropTypes from "prop-types"

import Segment from "./Segment"
import {width} from "./constants"

var ReactSvgDonutChart = function ReactSvgDonutChart(_ref) {
  var data = _ref.data,
    fontColor = _ref.fontColor,
    spacing = _ref.spacing

  var total = data.reduce(function(prev, current) {
    return current.value + prev
  }, 0)
  var percentAcc = 0
  return React.createElement(
    "svg",
    {viewBox: "0 0 " + width + " " + width},
    data.map(function(d, i) {
      var percent = (d.value / Math.ceil(total)) * 100
      var DashArrayPercent =
        spacing < 0 || percent - spacing < 0 ? percent : percent - spacing
      var DashArraylength =
        spacing < 0 || percent + spacing > 100
          ? 100 - percent
          : 100 - percent + spacing
      var strokeDasharray = DashArrayPercent + " " + DashArraylength
      var strokeDashoffset = i === 0 ? 0 : 100 - percentAcc
      percentAcc += percent
      return (
        percent > 0 &&
        React.createElement(
          Segment,
          _extends(
            {
              key: i,
              fontColor: fontColor,
              strokeDasharray: strokeDasharray,
              strokeDashoffset: strokeDashoffset,
              percent: String(percent.toFixed(2)),
            },
            d
          )
        )
      )
    })
  )
}

ReactSvgDonutChart.propTypes =
  process.env.NODE_ENV !== "production"
    ? {
        data: PropTypes.arrayOf(
          PropTypes.shape({
            stroke: PropTypes.string.isRequired,
            strokeWidth: PropTypes.number,
            title: PropTypes.string,
            fontSize: PropTypes.number,
            value: PropTypes.number.isRequired,
          })
        ),
        fontColor: PropTypes.string,
        spacing: PropTypes.number,
      }
    : {}

ReactSvgDonutChart.defaultProps = {
  data: [],
  spacing: 0,
}

export default ReactSvgDonutChart
