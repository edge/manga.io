"use strict";var _interopRequireDefault=function(e){return e&&e.__esModule?e:{"default":e}};Object.defineProperty(exports,"__esModule",{value:!0});var _React=require("react"),_React2=_interopRequireDefault(_React),_Action=require("../actions/actions"),_Action2=_interopRequireDefault(_Action),_Store=require("../stores/store"),_Store2=_interopRequireDefault(_Store),_Symbiosis=require("../mixins/symbiosis-mixin"),_Symbiosis2=_interopRequireDefault(_Symbiosis);exports["default"]=_React2["default"].createClass({displayName:"component",mixins:[_Symbiosis2["default"](_Store2["default"])],action:function(){_Action2["default"].action(this.refs.text.getDOMNode().value)},render:function(){return _React2["default"].createElement("div",null,_React2["default"].createElement("input",{onChange:this.action,ref:"text"}),_React2["default"].createElement("div",null,this.state.data))}}),module.exports=exports["default"];