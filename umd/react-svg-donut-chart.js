/*!
 * react-svg-donut-chart v1.0.0 - https://github.com/xuopled/react-svg-donut-chart#readme
 * MIT Licensed
 */
;(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === "object" && typeof module === "object")
    module.exports = factory(require("react"), require("prop-types"))
  else if (typeof define === "function" && define.amd)
    define(["react", "prop-types"], factory)
  else if (typeof exports === "object")
    exports["ReactDemoPage"] = factory(require("react"), require("prop-types"))
  else root["ReactDemoPage"] = factory(root["React"], root["PropTypes"])
})(this, function(
  __WEBPACK_EXTERNAL_MODULE_0__,
  __WEBPACK_EXTERNAL_MODULE_1__
) {
  return /******/ (function(modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {} // The require function
    /******/
    /******/ /******/ function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/ if (installedModules[moduleId]) {
        /******/ return installedModules[moduleId].exports
        /******/
      } // Create a new module (and put it into the cache)
      /******/ /******/ var module = (installedModules[moduleId] = {
        /******/ i: moduleId,
        /******/ l: false,
        /******/ exports: {},
        /******/
      }) // Execute the module function
      /******/
      /******/ /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      ) // Flag the module as loaded
      /******/
      /******/ /******/ module.l = true // Return the exports of the module
      /******/
      /******/ /******/ return module.exports
      /******/
    } // expose the modules object (__webpack_modules__)
    /******/
    /******/
    /******/ /******/ __webpack_require__.m = modules // expose the module cache
    /******/
    /******/ /******/ __webpack_require__.c = installedModules // define getter function for harmony exports
    /******/
    /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
      /******/ if (!__webpack_require__.o(exports, name)) {
        /******/ Object.defineProperty(exports, name, {
          /******/ configurable: false,
          /******/ enumerable: true,
          /******/ get: getter,
          /******/
        })
        /******/
      }
      /******/
    } // getDefaultExport function for compatibility with non-harmony modules
    /******/
    /******/ /******/ __webpack_require__.n = function(module) {
      /******/ var getter =
        module && module.__esModule
          ? /******/ function getDefault() {
              return module["default"]
            }
          : /******/ function getModuleExports() {
              return module
            }
      /******/ __webpack_require__.d(getter, "a", getter)
      /******/ return getter
      /******/
    } // Object.prototype.hasOwnProperty.call
    /******/
    /******/ /******/ __webpack_require__.o = function(object, property) {
      return Object.prototype.hasOwnProperty.call(object, property)
    } // __webpack_public_path__
    /******/
    /******/ /******/ __webpack_require__.p = "" // Load entry module and return exports
    /******/
    /******/ /******/ return __webpack_require__((__webpack_require__.s = 3))
    /******/
  })(
    /************************************************************************/
    /******/ [
      /* 0 */
      /***/ function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE_0__

        /***/
      },
      /* 1 */
      /***/ function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE_1__

        /***/
      },
      /* 2 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict"
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "b",
          function() {
            return radius
          }
        )
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "c",
          function() {
            return width
          }
        )
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "a",
          function() {
            return center
          }
        )
        var radius = 100 / (2 * Math.PI)
        var width = 42
        var center = {
          x: width / 2,
          y: width / 2,
        }

        /***/
      },
      /* 3 */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(4)

        /***/
      },
      /* 4 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict"
        Object.defineProperty(__webpack_exports__, "__esModule", {value: true})
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(
          0
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(
          __WEBPACK_IMPORTED_MODULE_0_react__
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(
          1
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(
          __WEBPACK_IMPORTED_MODULE_1_prop_types__
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Segment__ = __webpack_require__(
          5
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(
          2
        )
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

        var ReactSvgDonutChart = function ReactSvgDonutChart(_ref) {
          var data = _ref.data,
            fontColor = _ref.fontColor,
            spacing = _ref.spacing

          var total = data.reduce(function(prev, current) {
            return current.value + prev
          }, 0)
          var percentAcc = 0
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "svg",
            {
              viewBox:
                "0 0 " +
                __WEBPACK_IMPORTED_MODULE_3__constants__["c" /* width */] +
                " " +
                __WEBPACK_IMPORTED_MODULE_3__constants__["c" /* width */],
            },
            data.map(function(d, i) {
              var percent = (d.value / Math.ceil(total)) * 100
              var DashArrayPercent =
                spacing < 0 || percent - spacing < 0
                  ? percent
                  : percent - spacing
              var DashArraylength =
                spacing < 0 || percent + spacing > 100
                  ? 100 - percent
                  : 100 - percent + spacing
              var strokeDasharray = DashArrayPercent + " " + DashArraylength
              var strokeDashoffset = i === 0 ? 0 : 100 - percentAcc
              percentAcc += percent
              return (
                percent > 0 &&
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2__Segment__["a" /* default */],
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

        ReactSvgDonutChart.propTypes = {
          data: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(
            __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
              stroke:
                __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
                  .isRequired,
              strokeWidth:
                __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
              title: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
              fontSize:
                __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
              value:
                __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number
                  .isRequired,
            })
          ),
          fontColor: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
          spacing: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
        }

        ReactSvgDonutChart.defaultProps = {
          data: [],
          spacing: 0,
        }

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = ReactSvgDonutChart

        /***/
      },
      /* 5 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict"
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(
          0
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(
          __WEBPACK_IMPORTED_MODULE_0_react__
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(
          1
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(
          __WEBPACK_IMPORTED_MODULE_1_prop_types__
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(
          2
        )
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
          return call &&
            (typeof call === "object" || typeof call === "function")
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
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true,
              },
            }
          )
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

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_0_react__["Fragment"],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "circle",
                {
                  cx:
                    __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* center */]
                      .x,
                  cy:
                    __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* center */]
                      .y,
                  r: __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* radius */],
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
                }
              ),
              mouseOvered &&
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
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
        })(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"])

        Segment.propTypes = {
          stroke:
            __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
              .isRequired,
          strokeDasharray:
            __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
              .isRequired,
          strokeDashoffset:
            __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number
              .isRequired,
          strokeWidth:
            __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
          fontSize: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
          fontColor: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
          title: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
          percent: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
          value:
            __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number
              .isRequired,
        }

        Segment.defaultProps = {
          strokeWidth: 5,
          fontSize: 3,
          fontColor: "#000",
        }

        /* harmony default export */ __webpack_exports__["a"] = Segment

        /***/
      },
      /******/
    ]
  )
})
