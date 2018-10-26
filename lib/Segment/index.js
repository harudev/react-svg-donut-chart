"use strict"

exports.__esModule = true

var _react = require("react")

var _react2 = _interopRequireDefault(_react)

var _propTypes = require("prop-types")

var _propTypes2 = _interopRequireDefault(_propTypes)

var _constants = require("../constants")

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj}
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function")
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    )
  }
  return call && (typeof call === "object" || typeof call === "function")
    ? call
    : self
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError(
      "Super expression must either be null or a function, not " +
        typeof superClass
    )
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  })
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass)
}

var Segment = (function(_PureComponent) {
  _inherits(Segment, _PureComponent)

  function Segment() {
    var _temp, _this, _ret

    _classCallCheck(this, Segment)

    for (
      var _len = arguments.length, args = Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key]
    }

    return (
      (_ret = ((_temp = ((_this = _possibleConstructorReturn(
        this,
        _PureComponent.call.apply(_PureComponent, [this].concat(args))
      )),
      _this)),
      (_this.state = {
        mouseOvered: false,
      }),
      _temp)),
      _possibleConstructorReturn(_this, _ret)
    )
  }

  Segment.prototype.render = function render() {
    var _this2 = this

    var _props = this.props,
      stroke = _props.stroke,
      strokeDasharray = _props.strokeDasharray,
      strokeDashoffset = _props.strokeDashoffset,
      strokeWidth = _props.strokeWidth,
      fontSize = _props.fontSize,
      fontColor = _props.fontColor,
      title = _props.title,
      percent = _props.percent
    var mouseOvered = this.state.mouseOvered

    return _react2.default.createElement(
      _react.Fragment,
      null,
      _react2.default.createElement("circle", {
        cx: _constants.center.x,
        cy: _constants.center.y,
        r: _constants.radius,
        fill: "none",
        stroke: stroke,
        strokeWidth: mouseOvered ? strokeWidth + 2 : strokeWidth,
        strokeDasharray: strokeDasharray,
        strokeDashoffset: strokeDashoffset,
        onMouseOver: function onMouseOver() {
          return _this2.setState({mouseOvered: true})
        },
        onMouseOut: function onMouseOut() {
          return _this2.setState({mouseOvered: false})
        },
      }),
      mouseOvered &&
        _react2.default.createElement(
          "text",
          {
            x: "50%",
            y: "50%",
            textAnchor: "middle",
            style: {fontSize: fontSize, color: fontColor},
          },
          title ? title + " : " + percent + "%" : percent + "%"
        )
    )
  }

  return Segment
})(_react.PureComponent)

Segment.propTypes =
  process.env.NODE_ENV !== "production"
    ? {
        stroke: _propTypes2.default.string.isRequired,
        strokeDasharray: _propTypes2.default.string.isRequired,
        strokeDashoffset: _propTypes2.default.number.isRequired,
        strokeWidth: _propTypes2.default.number,
        fontSize: _propTypes2.default.number,
        fontColor: _propTypes2.default.string,
        title: _propTypes2.default.string,
        percent: _propTypes2.default.number,
        value: _propTypes2.default.number.isRequired,
      }
    : {}

Segment.defaultProps = {
  strokeWidth: 5,
  fontSize: 3,
  fontColor: "#000",
}

exports.default = Segment
module.exports = exports["default"]
