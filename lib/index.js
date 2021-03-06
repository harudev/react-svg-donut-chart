"use strict"

exports.__esModule = true

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

var _react = require("react")

var _react2 = _interopRequireDefault(_react)

var _propTypes = require("prop-types")

var _propTypes2 = _interopRequireDefault(_propTypes)

var _Segment = require("./Segment")

var _Segment2 = _interopRequireDefault(_Segment)

var _constants = require("./constants")

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj}
}

var ReactSvgDonutChart = function ReactSvgDonutChart(_ref) {
  var data = _ref.data,
    fontColor = _ref.fontColor,
    spacing = _ref.spacing

  var total = data.reduce(function(prev, current) {
    return current.value + prev
  }, 0)
  var percentAcc = 0
  return _react2.default.createElement(
    "svg",
    {viewBox: "0 0 " + _constants.width + " " + _constants.width},
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
        _react2.default.createElement(
          _Segment2.default,
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
        data: _propTypes2.default.arrayOf(
          _propTypes2.default.shape({
            stroke: _propTypes2.default.string.isRequired,
            strokeWidth: _propTypes2.default.number,
            title: _propTypes2.default.string,
            fontSize: _propTypes2.default.number,
            value: _propTypes2.default.number.isRequired,
          })
        ),
        fontColor: _propTypes2.default.string,
        spacing: _propTypes2.default.number,
      }
    : {}

ReactSvgDonutChart.defaultProps = {
  data: [],
  spacing: 0,
}

exports.default = ReactSvgDonutChart
module.exports = exports["default"]
