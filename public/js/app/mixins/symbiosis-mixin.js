"use strict";var _defineProperty=function(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0})};Object.defineProperty(exports,"__esModule",{value:!0});var onChange="__onChange";exports["default"]=function(e){return _defineProperty({getInitialState:function(){return e.getState()},componentWillMount:function(){e.listen(this[onChange])},componentWillUnmount:function(){e.unlisten(this[onChange])}},onChange,function(){this.setState(e.getState())})},module.exports=exports["default"];