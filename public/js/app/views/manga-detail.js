"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=require("react"),_react2=_interopRequireDefault(_react),_reactRouter=require("react-router"),_hub=require("../hub"),_mixinsSymbiosisMixin=require("../mixins/symbiosis-mixin"),_mixinsSymbiosisMixin2=_interopRequireDefault(_mixinsSymbiosisMixin),_viewsProgress=require("../views/progress"),_viewsProgress2=_interopRequireDefault(_viewsProgress),_constantsProcessConstants=require("../constants/process-constants"),_constantsProcessConstants2=_interopRequireDefault(_constantsProcessConstants);exports["default"]=_react2["default"].createClass({displayName:"manga-detail",mixins:[_reactRouter.State,_mixinsSymbiosisMixin2["default"](_hub.Stores.MangaTitle)],componentWillMount:function(){_hub.Actions.MangaUI.toTitle()},renderDetail:function(){var e=this,t=void 0;if(this.state.process==_constantsProcessConstants2["default"].Done){var a=this.state.manga.chapters.map(function(t){return _react2["default"].createElement(_reactRouter.Link,{to:"chapter",params:{alias:e.getParams().alias,chapter:t[0]},key:t[0],className:"row chapter-entry"},_react2["default"].createElement("div",{className:"col s1 teal lighten-3 teal-text text-lighten-1 right-align"},_react2["default"].createElement("div",null,t[0])),_react2["default"].createElement("div",{className:"col s11 teal lighten-4 teal-text text-darken-1"},_react2["default"].createElement("div",null,t[2]&&t[0]!=t[2]?t[2]:"N/A")))});t=_react2["default"].createElement("div",{className:"animated fadeIn"},_react2["default"].createElement("h1",{className:"teal-text text-lighten-1"},this.state.manga.title),_react2["default"].createElement("p",{className:"flow-text teal-text text-lighten-3"},_.unescape(this.state.manga.description.replace(/\&\#0+(?=\d+\;)/g,"&#"))),a)}return t},render:function(){return _react2["default"].createElement("div",null,_react2["default"].createElement(_viewsProgress2["default"],{loading:_constantsProcessConstants2["default"].Loading(this.state.process)}),_react2["default"].createElement("div",{className:"teal-text"},this.renderDetail()))}}),module.exports=exports["default"];