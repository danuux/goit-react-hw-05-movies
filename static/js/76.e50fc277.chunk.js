"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{76:function(r,e,t){t.r(e),t.d(e,{default:function(){return l}});var n=t(439),a=t(791),c=t(689),u=t(999),o="Cast_wrapper__XmIBi",s="Cast_item__a0CDL",i="Cast_image__mOsuM",p=t(184),l=function(){var r=(0,a.useState)(null),e=(0,n.Z)(r,2),t=e[0],l=e[1],f=(0,c.UO)().movieId;if((0,a.useEffect)((function(){(0,u.IQ)(f).then(l)}),[f]),t)return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("ul",{className:o,children:t.map((function(r){return(0,p.jsxs)("li",{className:s,children:[(0,p.jsx)("img",{className:i,src:r.profile_path?"https://www.themoviedb.org/t/p/w500/".concat(r.profile_path):"https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg",alt:r.original_name}),(0,p.jsx)("h3",{children:r.name}),(0,p.jsxs)("p",{children:["As: ",r.character]})]},r.id)}))})})}},999:function(r,e,t){t.d(e,{Hg:function(){return s},IQ:function(){return p},Jh:function(){return l},oW:function(){return f},s_:function(){return i}});var n=t(861),a=t(757),c=t.n(a),u=t(759),o="9846a25586cb6516e86c6e34d3ea8045";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var r=(0,n.Z)(c().mark((function r(){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("trending/movie/day?api_key=".concat(o));case 3:return e=r.sent,r.abrupt("return",e.data.results);case 7:return r.prev=7,r.t0=r.catch(0),console.error("Error fetching trending movies:",r.t0),r.abrupt("return",[]);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}(),i=function(){var r=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("movie/".concat(e,"?api_key=").concat(o));case 3:return t=r.sent,r.abrupt("return",t.data);case 7:return r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie details:",r.t0),r.abrupt("return",null);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("movie/".concat(e,"/credits?api_key=").concat(o));case 3:return t=r.sent,r.abrupt("return",t.data.cast);case 7:return r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie cast:",r.t0),r.abrupt("return",[]);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),l=function(){var r=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("movie/".concat(e,"/reviews?api_key=").concat(o));case 3:return t=r.sent,r.abrupt("return",t.data.results);case 7:return r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie reviews:",r.t0),r.abrupt("return",[]);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("search/movie?api_key=".concat(o,"&query=").concat(e));case 3:return t=r.sent,r.abrupt("return",t.data.results);case 7:return r.prev=7,r.t0=r.catch(0),console.error("Error fetching movies by keyword:",r.t0),r.abrupt("return",[]);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=76.e50fc277.chunk.js.map