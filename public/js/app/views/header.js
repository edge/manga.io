"use strict";var _interopRequireDefault=function(e){return e&&e.__esModule?e:{"default":e}};Object.defineProperty(exports,"__esModule",{value:!0});var _React=require("react"),_React2=_interopRequireDefault(_React),_Link=require("react-router"),_MangaUIActions=require("../actions/manga-ui-actions"),_MangaUIActions2=_interopRequireDefault(_MangaUIActions),_UIStore$State=require("../stores/ui-store"),_UIStore$State2=_interopRequireDefault(_UIStore$State),_Symbiosis=require("../mixins/symbiosis-mixin"),_Symbiosis2=_interopRequireDefault(_Symbiosis);exports["default"]=_React2["default"].createClass({displayName:"header",mixins:[_Symbiosis2["default"](_UIStore$State2["default"])],componentDidMount:function(){var e=this;_.defer(function(){switch(e.state.state){case _UIStore$State.State.index:break;case _UIStore$State.State.title:break;case _UIStore$State.State.chapter:$(".tooltipped").tooltip({delay:50})}})},renderExtra:function(){var e=void 0;switch(this.state.state){case _UIStore$State.State.index:break;case _UIStore$State.State.title:break;case _UIStore$State.State.chapter:e=[_React2["default"].createElement("li",{onClick:_MangaUIActions2["default"].readFirstPage,className:"tooltipped","data-tooltip":"First Page (Home)"},_React2["default"].createElement("i",{className:"mdi-av-skip-previous"})),_React2["default"].createElement("li",{onClick:_MangaUIActions2["default"].readPreviousPage,className:"tooltipped","data-tooltip":"Previous Page (Left)"},_React2["default"].createElement("i",{className:"mdi-hardware-keyboard-arrow-left"})),_React2["default"].createElement("li",{onClick:_MangaUIActions2["default"].readNextPage,className:"tooltipped","data-tooltip":"Next Page (Right)"},_React2["default"].createElement("i",{className:"mdi-hardware-keyboard-arrow-right"})),_React2["default"].createElement("li",{onClick:_MangaUIActions2["default"].readLastPage,className:"tooltipped","data-tooltip":"Last Page (End)"},_React2["default"].createElement("i",{className:"mdi-av-skip-next"}))]}return e},render:function(){return _React2["default"].createElement("div",{className:"navbar-fixed"},_React2["default"].createElement("nav",{className:"teal"},_React2["default"].createElement("div",{className:"nav-wrapper container"},_React2["default"].createElement(_Link.Link,{to:"main",className:"brand-logo teal-text text-lighten-4"},"Manga.IO"),_React2["default"].createElement("ul",{className:"right"},this.renderExtra(),_React2["default"].createElement("li",null,_React2["default"].createElement("a",{href:"http://www.mangaeden.com/",className:"teal-text text-lighten-2"},"A ",_React2["default"].createElement("span",{className:"teal-text text-lighten-4"},"MangaEden")," Client"))))))}}),module.exports=exports["default"];