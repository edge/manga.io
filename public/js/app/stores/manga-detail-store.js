"use strict";var _interopRequireDefault=function(e){return e&&e.__esModule?e:{"default":e}},_classCallCheck=function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")},_createClass=function(){function e(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(a,t,n){return t&&e(a.prototype,t),n&&e(a,n),a}}();Object.defineProperty(exports,"__esModule",{value:!0});var _alt=require("../alt"),_alt2=_interopRequireDefault(_alt),_MangaActions=require("../actions/manga-actions"),_MangaActions2=_interopRequireDefault(_MangaActions),MangaDetailStore=function(){function e(){_classCallCheck(this,e),this.bindListeners({onGetManga:_MangaActions2["default"].getManga,onGetMangaComplete:_MangaActions2["default"].getMangaComplete}),this.manga={},this.loading=!1}return _createClass(e,[{key:"onGetManga",value:function(){this.loading=!0}},{key:"onGetMangaComplete",value:function(e){this.manga=e,this.loading=!1}}]),e}();exports["default"]=_alt2["default"].createStore(MangaDetailStore,"MangaDetailStore"),module.exports=exports["default"];