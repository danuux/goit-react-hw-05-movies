"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(r,t,n){n.r(t);var e=n(439),u=n(791),c=n(689),a=n(999),s=n(184);t.default=function(){var r=(0,u.useState)(null),t=(0,e.Z)(r,2),n=t[0],o=t[1],i=(0,c.UO)().movieId;if((0,u.useEffect)((function(){(0,a.Jh)(i).then(o)}),[i]),n)return(0,s.jsx)("div",{children:n.length>0?(0,s.jsx)("ul",{children:n.map((function(r){return(0,s.jsxs)("li",{children:[(0,s.jsxs)("h3",{children:["Author: ",r.author]}),(0,s.jsx)("p",{children:r.content})]},r.id)}))}):"There is no review of this film yet"})}},999:function(r,t,n){n.d(t,{Hg:function(){return i},IQ:function(){return f},Jh:function(){return h},oW:function(){return v},s_:function(){return p}});var e=n(861),u=n(757),c=n.n(u),a=n(759),s="9846a25586cb6516e86c6e34d3ea8045";a.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var r=(0,e.Z)(c().mark((function r(t){var n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,a.Z.get(t);case 3:return n=r.sent,r.abrupt("return",n.data);case 7:return r.prev=7,r.t0=r.catch(0),console.error("Error fetching data from ".concat(t,":"),r.t0),r.abrupt("return",null);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}(),i=function(){var r=(0,e.Z)(c().mark((function r(){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o("trending/movie/day?api_key=".concat(s));case 2:return t=r.sent,r.abrupt("return",t?t.results:[]);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),p=function(){var r=(0,e.Z)(c().mark((function r(t){return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o("movie/".concat(t,"?api_key=").concat(s));case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,e.Z)(c().mark((function r(t){var n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o("movie/".concat(t,"/credits?api_key=").concat(s));case 2:return n=r.sent,r.abrupt("return",n?n.cast:[]);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),h=function(){var r=(0,e.Z)(c().mark((function r(t){var n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o("movie/".concat(t,"/reviews?api_key=").concat(s));case 2:return n=r.sent,r.abrupt("return",n?n.results:[]);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),v=function(){var r=(0,e.Z)(c().mark((function r(t){var n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o("search/movie?api_key=".concat(s,"&query=").concat(t));case 2:return n=r.sent,r.abrupt("return",n?n.results:[]);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=186.3cf5f937.chunk.js.map