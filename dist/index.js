"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Col = exports.Grid = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Grid = _styledComponents["default"].section.withConfig({
  displayName: "latticework__Grid",
  componentId: "sc-12lobn5-0"
})(["display:grid;grid-template-columns:repeat(", ",1fr);grid-gap:2rem;"], function (_ref) {
  var columns = _ref.columns;
  return columns;
});

exports.Grid = Grid;
Grid.defaultProps = {
  columns: 12
};

var getIndex = function getIndex(arr, idx) {
  return arr[idx] || arr[arr.length - 1];
};

var getOffset = function getOffset(arr, idx) {
  return getIndex(arr, idx) === "auto" ? "auto" : getIndex(arr, idx) + 1;
};

var Col = _styledComponents["default"].div.withConfig({
  displayName: "latticework__Col",
  componentId: "sc-12lobn5-1"
})(["grid-column:", " / span ", ";@media (min-width:40rem){grid-column:", " / span ", ";}@media (min-width:60rem){grid-column:", " / span ", ";}@media (min-width:80rem){grid-column:", " / span ", ";}@media (min-width:100rem){grid-column:", " / span ", ";}"], function (_ref2) {
  var offset = _ref2.offset;
  return getOffset(offset, 0);
}, function (_ref3) {
  var span = _ref3.span;
  return getIndex(span, 0);
}, function (_ref4) {
  var offset = _ref4.offset;
  return getOffset(offset, 1);
}, function (_ref5) {
  var span = _ref5.span;
  return getIndex(span, 1);
}, function (_ref6) {
  var offset = _ref6.offset;
  return getOffset(offset, 2);
}, function (_ref7) {
  var span = _ref7.span;
  return getIndex(span, 2);
}, function (_ref8) {
  var offset = _ref8.offset;
  return getOffset(offset, 3);
}, function (_ref9) {
  var span = _ref9.span;
  return getIndex(span, 3);
}, function (_ref10) {
  var offset = _ref10.offset;
  return getOffset(offset, 4);
}, function (_ref11) {
  var span = _ref11.span;
  return getIndex(span, 4);
});

exports.Col = Col;
Col.defaultProps = {
  offset: ["auto"],
  span: [12]
};