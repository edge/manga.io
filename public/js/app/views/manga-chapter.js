"use strict";var _interopRequireDefault=function(e){return e&&e.__esModule?e:{"default":e}};Object.defineProperty(exports,"__esModule",{value:!0});var _React=require("react"),_React2=_interopRequireDefault(_React),_State=require("react-router"),_Actions$Stores=require("../hub"),_Symbiosis=require("../mixins/symbiosis-mixin"),_Symbiosis2=_interopRequireDefault(_Symbiosis),_DOMEvent=require("../mixins/dom-event-mixin"),_DOMEvent2=_interopRequireDefault(_DOMEvent),_Progress=require("../views/progress"),_Progress2=_interopRequireDefault(_Progress),_Process=require("../constants/process-constants"),_Process2=_interopRequireDefault(_Process),keys={end:35,home:36,left:37,right:39};exports["default"]=_React2["default"].createClass({displayName:"manga-chapter",mixins:[_State.State,_Symbiosis2["default"](_Actions$Stores.Stores.MangaChapter),_DOMEvent2["default"]($(document.body),"keydown","handleKey")],componentWillMount:function(){_Actions$Stores.Actions.MangaUI.toChapter();var e=_Actions$Stores.Stores.MangaTitle.getState();if(e.process==_Process2["default"].Done){var t=this.getParams();_Actions$Stores.Actions.MangaAPI.getChapter(e.manga,t.chapter)}},handleKey:function(e){switch(e.which){case keys.left:_Actions$Stores.Actions.MangaUI.readPreviousPage(),document.body.scrollTop=0;break;case keys.right:_Actions$Stores.Actions.MangaUI.readNextPage(),document.body.scrollTop=0;break;case keys.home:e.preventDefault(),_Actions$Stores.Actions.MangaUI.readFirstPage(),document.body.scrollTop=0;break;case keys.end:e.preventDefault(),_Actions$Stores.Actions.MangaUI.readLastPage(),document.body.scrollTop=0}},componentWillUpdate:function(e,t){if(t.process==_Process2["default"].Ready){var a=this.getParams(),s=_Actions$Stores.Stores.MangaTitle.getState();_Actions$Stores.Actions.MangaAPI.getChapter.defer(s.manga,a.chapter)}},render:function(){var e=void 0;return this.state.process==_Process2["default"].Done&&(e=_React2["default"].createElement("img",{style:{width:"60vw"},src:"https://cdn.mangaeden.com/mangasimg/"+this.state.pages[this.state.pages.length-this.state.page-1][1]})),_React2["default"].createElement("div",{className:"teal-text"},_React2["default"].createElement(_Progress2["default"],{loading:_Process2["default"].Loading(this.state.process)}),_React2["default"].createElement("h2",{className:"grey-text text-darken-3"},"Page ",this.state.page),_React2["default"].createElement("div",{className:"center-align"},e))}}),module.exports=exports["default"];