"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var TextInput = function TextInput(props) {
  var placeholder = props.placeholder,
      _props$onBlur = props.onBlur,
      onBlur = _props$onBlur === void 0 ? function () {} : _props$onBlur,
      _props$validations = props.validations,
      validations = _props$validations === void 0 ? [] : _props$validations,
      _props$incrementContr = props.incrementControlValidator,
      incrementControlValidator = _props$incrementContr === void 0 ? null : _props$incrementContr;

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      errorMessage = _useState4[0],
      setErrorMessage = _useState4[1];

  (0, _react.useEffect)(function () {
    if (incrementControlValidator) {
      runValidate();
    }
  }, [incrementControlValidator]);

  var runValidate = function runValidate() {
    validate(value);
  };

  function validate(value) {
    var response;

    for (var i = 0; i < validations.length; i++) {
      var validation = validations[i];

      switch (validation) {
        case 'REQUIRED':
          if (!value) {
            response = {
              success: false,
              value: value
            };
            setErrorMessage("Cannot be blank.");
          } else {
            response = {
              success: true,
              value: value
            };
            setErrorMessage("");
          }

          break;

        case 'EMAIL':
          var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          var testSuccess = regex.test(value);

          if (testSuccess) {
            response = {
              success: true,
              value: value
            };
            setErrorMessage("");
          } else {
            response = {
              success: false,
              value: value
            };
            setErrorMessage("Valid email required.");
          }

          break;

        default:
          break;
      }
    }

    onBlur(response);
  }

  return /*#__PURE__*/_react["default"].createElement(Container, null, /*#__PURE__*/_react["default"].createElement(Placeholder, null, placeholder), /*#__PURE__*/_react["default"].createElement(Input, {
    onChange: function onChange(event) {
      return setValue(event.target.value);
    },
    onBlur: function onBlur() {
      return validate(value);
    }
  }), /*#__PURE__*/_react["default"].createElement(ErrorContainer, null, errorMessage));
};

var Container = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: 100%;\n    position: relative;\n    height: 53px;\n"])));

var Input = _styledComponents["default"].input(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    width: calc(100% - 16px);\n    height: 27px;\n    outline: none;\n    padding-left: 10px;\n    border-radius: 10px;\n    border: 1px solid rgba(0,0,0, .5);\n    :focus {\n        outline: none;\n    }\n"])));

var Placeholder = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    background-color: white;\n    position: absolute;\n    left:10px;\n    top: -9px;\n"])));

var ErrorContainer = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    color: red;\n    height: 10px;\n    padding-left: 10px;\n"])));

var _default = TextInput;
exports["default"] = _default;
