"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[194],{2194:function(n,t,e){e.r(t),e.d(t,{default:function(){return w}});var r,a,c,u=e(5861),i=e(885),o=e(4687),s=e.n(o),f=e(2791),p=e(7689),d=e(168),l=e(6731),v=e(7691),h=v.ZP.ul(r||(r=(0,d.Z)(["\n  margin: 15px 0;\n"]))),m=v.ZP.li(a||(a=(0,d.Z)(["\n  :not(:last-child) {\n    margin-bottom: 5px;\n  }\n"]))),x=(0,v.ZP)(l.rU)(c||(c=(0,d.Z)(["\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  :hover {\n    color: #33e512;\n  }\n"]))),g=e(184),Z=function(n){var t=n.trending,e=n.loading,r=(0,p.TH)();return(0,g.jsx)(g.Fragment,{children:e?(0,g.jsx)("div",{children:"Loading"}):(0,g.jsx)(h,{children:t.map((function(n){var t=n.id,e=n.title,a=n.name;return(0,g.jsx)(m,{children:(0,g.jsx)(x,{to:"movies/".concat(t),state:{from:r.pathname},children:e||a})},t)}))})})},k=e(4390),w=function(){var n=(0,f.useState)([]),t=(0,i.Z)(n,2),e=t[0],r=t[1],a=(0,f.useState)(!1),c=(0,i.Z)(a,2),o=c[0],p=c[1];return(0,f.useEffect)((function(){var n=function(){var n=(0,u.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return p(!0),n.prev=1,n.next=4,(0,k.Df)();case 4:t=n.sent,r(t),n.next=10;break;case 8:n.prev=8,n.t0=n.catch(1);case 10:return n.prev=10,p(!1),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[1,8,10,13]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,g.jsxs)("main",{children:[(0,g.jsx)("h1",{children:"Trending today"}),(0,g.jsx)(Z,{trending:e,loading:o})]})}},4390:function(n,t,e){e.d(t,{Ch:function(){return f},Df:function(){return o},Jh:function(){return p},m2:function(){return d},sO:function(){return s}});var r=e(5861),a=e(4687),c=e.n(a),u=e(1044);u.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var i="a6399bd390c157c90a11cb622fa14388",o=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("/trending/all/day?api_key=".concat(i));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("/movie/".concat(t,"?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("/movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("/movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("/search/movie?api_key=".concat(i,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=194.7dd9ac43.chunk.js.map