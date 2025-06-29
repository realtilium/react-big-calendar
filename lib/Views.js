'use strict'

var _interopRequireDefault =
  require('@babel/runtime/helpers/interopRequireDefault').default
Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0
var _react = _interopRequireDefault(require('react'))
var _Month = _interopRequireDefault(require('./Month'))
var _Week = _interopRequireDefault(require('./Week'))
var _Day = _interopRequireDefault(require('./Day'))
var _Agenda = _interopRequireDefault(require('./Agenda'))
var _WorkWeek = _interopRequireDefault(require('./WorkWeek'))
var _dequal = require('dequal')
function withStatics(Wrapped, Source) {
  ;['title', 'navigate', 'range'].forEach(function (k) {
    if (Source[k]) Wrapped[k] = Source[k]
  })
  return Wrapped
}
function normalizeDay(date) {
  if (!(date instanceof Date)) return date
  var d = new Date(date)
  d.setHours(0, 0, 0, 0)
  return d.getTime()
}
var areEqual = function areEqual(prev, next) {
  return (
    (0, _dequal.dequal)(prev.events, next.events) &&
    (0, _dequal.dequal)(prev.backgroundEvents, next.backgroundEvents) &&
    normalizeDay(prev.date) === normalizeDay(next.date)
  )
}
var _default = (exports.default = {
  month: withStatics(
    /*#__PURE__*/ _react.default.memo(_Month.default, areEqual),
    _Month.default
  ),
  week: withStatics(
    /*#__PURE__*/ _react.default.memo(_Week.default, areEqual),
    _Week.default
  ),
  day: withStatics(
    /*#__PURE__*/ _react.default.memo(_Day.default, areEqual),
    _Day.default
  ),
  agenda: withStatics(
    /*#__PURE__*/ _react.default.memo(_Agenda.default, areEqual),
    _Agenda.default
  ),
  work_week: withStatics(
    /*#__PURE__*/ _react.default.memo(_WorkWeek.default, areEqual),
    _WorkWeek.default
  ),
})
