(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"8/JR":function(e,n,t){"use strict";var r=t("8T9/"),o=t("Ibf7");e.exports=function(e,n){var t=n||{},i={};return void 0===e&&(e={}),e.on=function(n,t){return i[n]?i[n].push(t):i[n]=[t],e},e.once=function(n,t){return t._once=!0,e.on(n,t),e},e.off=function(n,t){var r=arguments.length;if(1===r)delete i[n];else if(0===r)i={};else{var o=i[n];if(!o)return e;o.splice(o.indexOf(t),1)}return e},e.emit=function(){var n=r(arguments);return e.emitterSnapshot(n.shift()).apply(this,n)},e.emitterSnapshot=function(n){var a=(i[n]||[]).slice(0);return function(){var i=r(arguments),l=this||e;if("error"===n&&!1!==t.throws&&!a.length)throw 1===i.length?i[0]:i;return a.forEach(function(r){t.async?o(r,i,l):r.apply(l,i),r._once&&e.off(n,r)}),e}},e}},"8T9/":function(e,n){e.exports=function(e,n){return Array.prototype.slice.call(e,n)}},CedQ:function(e,n,t){"use strict";t.r(n);var r=t("8Y7J");class o{}var i=t("pMnS");class a{constructor(){}ngOnInit(){}}var l=r.ob({encapsulation:2,styles:[],data:{}});function c(e){return r.Ib(0,[(e()(),r.qb(0,0,null,null,1,"p",[],null,null,null,null,null)),(e()(),r.Hb(-1,null,[" list works!\n"]))],null,null)}function u(e){return r.Ib(0,[(e()(),r.qb(0,0,null,null,1,"app-projects-list",[],null,null,null,c,l)),r.pb(1,114688,null,0,a,[],null,null)],function(e,n){e(n,1,0)},null)}var s=r.mb("app-projects-list",a,u,{},{},[]);class d{constructor(){}ngOnInit(){}}var p=r.ob({encapsulation:2,styles:[],data:{}});function f(e){return r.Ib(0,[(e()(),r.qb(0,0,null,null,1,"p",[],null,null,null,null,null)),(e()(),r.Hb(-1,null,[" view works!\n"]))],null,null)}function v(e){return r.Ib(0,[(e()(),r.qb(0,0,null,null,1,"app-projects-view",[],null,null,null,f,p)),r.pb(1,114688,null,0,d,[],null,null)],function(e,n){e(n,1,0)},null)}var m=r.mb("app-projects-view",d,v,{},{},[]),h=t("SVse"),g=t("YS7c"),b=t.n(g),y=t("XNiG"),w=(t("quSY"),t("pLZG")),E=t("lJxs");class S{constructor(e,n,t){this.name=e,this.drake=n,this.options=t,this.initEvents=!1}}const x={Cancel:"cancel",Cloned:"cloned",Drag:"drag",DragEnd:"dragend",Drop:"drop",Out:"out",Over:"over",Remove:"remove",Shadow:"shadow",DropModel:"dropModel",RemoveModel:"removeModel"},C=Object.keys(x).map(e=>x[e]),O=b.a||g;class I{constructor(e=O){this.build=e}}const M=(e,n,t)=>r=>r.pipe(Object(w.a)(({event:t,name:r})=>t===e&&(void 0===n||r===n)),Object(E.a)(({name:e,args:n})=>t(e,n))),N=(e,[n,t,r])=>({name:e,el:n,container:t,source:r});let T=(()=>(class{constructor(e=null){this.drakeFactory=e,this.dispatch$=new y.a,this.drag=e=>this.dispatch$.pipe(M(x.Drag,e,(e,[n,t])=>({name:e,el:n,source:t}))),this.dragend=e=>this.dispatch$.pipe(M(x.DragEnd,e,(e,[n])=>({name:e,el:n}))),this.drop=e=>this.dispatch$.pipe(M(x.Drop,e,(e,[n,t,r,o])=>({name:e,el:n,target:t,source:r,sibling:o}))),this.elContainerSource=e=>n=>this.dispatch$.pipe(M(e,n,N)),this.cancel=this.elContainerSource(x.Cancel),this.remove=this.elContainerSource(x.Remove),this.shadow=this.elContainerSource(x.Shadow),this.over=this.elContainerSource(x.Over),this.out=this.elContainerSource(x.Out),this.cloned=e=>this.dispatch$.pipe(M(x.Cloned,e,(e,[n,t,r])=>({name:e,clone:n,original:t,cloneType:r}))),this.dropModel=e=>this.dispatch$.pipe(M(x.DropModel,e,(e,[n,t,r,o,i,a,l,c,u])=>({name:e,el:n,target:t,source:r,sibling:o,item:i,sourceModel:a,targetModel:l,sourceIndex:c,targetIndex:u}))),this.removeModel=e=>this.dispatch$.pipe(M(x.RemoveModel,e,(e,[n,t,r,o,i,a])=>({name:e,el:n,container:t,source:r,item:o,sourceModel:i,sourceIndex:a}))),this.groups={},null===this.drakeFactory&&(this.drakeFactory=new I)}add(e){if(this.find(e.name))throw new Error('Group named: "'+e.name+'" already exists.');return this.groups[e.name]=e,this.handleModels(e),this.setupEvents(e),e}find(e){return this.groups[e]}destroy(e){let n=this.find(e);n&&(n.drake&&n.drake.destroy(),delete this.groups[e])}createGroup(e,n){return this.add(new S(e,this.drakeFactory.build([],n),n))}handleModels({name:e,drake:n,options:t}){let r,o,i;n.on("remove",(t,r,i)=>{if(!n.models)return;let a=n.models[n.containers.indexOf(i)];const l=(a=a.slice(0)).splice(o,1)[0];this.dispatch$.next({event:x.RemoveModel,name:e,args:[t,r,i,l,a,o]})}),n.on("drag",(e,t)=>{n.models&&(r=e,o=this.domIndexOf(e,t))}),n.on("drop",(a,l,c,u)=>{if(!n.models||!l)return;i=this.domIndexOf(a,l);let s,d=n.models[n.containers.indexOf(c)],p=n.models[n.containers.indexOf(l)];if(l===c)s=(d=d.slice(0)).splice(o,1)[0],d.splice(i,0,s),p=d;else{let e=r!==a;if(s=d[o],e){if(!t.copyItem)throw new Error("If you have enabled `copy` on a group, you must provide a `copyItem` function.");s=t.copyItem(s)}if(e||(d=d.slice(0)).splice(o,1),(p=p.slice(0)).splice(i,0,s),e)try{l.removeChild(a)}catch(f){}}this.dispatch$.next({event:x.DropModel,name:e,args:[a,l,c,u,s,d,p,o,i]})})}setupEvents(e){if(e.initEvents)return;e.initEvents=!0;const n=e.name;C.forEach(t=>{e.drake.on(t,(...e)=>{this.dispatch$.next({event:t,name:n,args:e})})})}domIndexOf(e,n){return Array.prototype.indexOf.call(n.children,e)}}))(),k=(()=>{class e{static forRoot(){return{ngModule:e,providers:[T]}}}return e})();var A=t("alHs"),Y=t("iInd");class j{}t.d(n,"ProjectsModuleNgFactory",function(){return R});var R=r.nb(o,[],function(e){return r.zb([r.Ab(512,r.j,r.Y,[[8,[i.a,s,m]],[3,r.j],r.w]),r.Ab(4608,h.l,h.k,[r.t,[2,h.y]]),r.Ab(4608,T,T,[[2,I]]),r.Ab(1073742336,h.b,h.b,[]),r.Ab(1073742336,A.b,A.b,[]),r.Ab(1073742336,k,k,[]),r.Ab(1073742336,Y.o,Y.o,[[2,Y.t],[2,Y.k]]),r.Ab(1073742336,j,j,[]),r.Ab(1073742336,o,o,[]),r.Ab(1024,Y.i,function(){return[[{path:"",component:a},{path:"/:projectId",component:d}]]},[]),r.Ab(256,A.a,{modules:A.c},[])])})},Gjsa:function(e,n){var t="function"==typeof setImmediate;e.exports=t?function(e){setImmediate(e)}:function(e){setTimeout(e,0)}},Ibf7:function(e,n,t){"use strict";var r=t("Gjsa");e.exports=function(e,n,t){e&&r(function(){e.apply(t||null,n||[])})}},KRns:function(e,n){var t=global.CustomEvent;e.exports=function(){try{var e=new t("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(n){}return!1}()?t:"function"==typeof document.createEvent?function(e,n){var t=document.createEvent("CustomEvent");return n?t.initCustomEvent(e,n.bubbles,n.cancelable,n.detail):t.initCustomEvent(e,!1,!1,void 0),t}:function(e,n){var t=document.createEventObject();return t.type=e,n?(t.bubbles=Boolean(n.bubbles),t.cancelable=Boolean(n.cancelable),t.detail=n.detail):(t.bubbles=!1,t.cancelable=!1,t.detail=void 0),t}},PzH3:function(e,n,t){"use strict";var r=t("KRns"),o=t("Ys8N"),i=global.document,a=function(e,n,t,r){return e.addEventListener(n,t,r)},l=function(e,n,t,r){return e.removeEventListener(n,t,r)},c=[];function u(e,n,t){var r=function(e,n,t){var r,o;for(r=0;r<c.length;r++)if((o=c[r]).element===e&&o.type===n&&o.fn===t)return r}(e,n,t);if(r){var o=c[r].wrapper;return c.splice(r,1),o}}global.addEventListener||(a=function(e,n,t){return e.attachEvent("on"+n,function(e,n,t){var r=u(e,n,t)||function(e,n,t){return function(n){var r=n||global.event;r.target=r.target||r.srcElement,r.preventDefault=r.preventDefault||function(){r.returnValue=!1},r.stopPropagation=r.stopPropagation||function(){r.cancelBubble=!0},r.which=r.which||r.keyCode,t.call(e,r)}}(e,0,t);return c.push({wrapper:r,element:e,type:n,fn:t}),r}(e,n,t))},l=function(e,n,t){var r=u(e,n,t);if(r)return e.detachEvent("on"+n,r)}),e.exports={add:a,remove:l,fabricate:function(e,n,t){var a=-1===o.indexOf(n)?new r(n,{detail:t}):function(){var e;return i.createEvent?(e=i.createEvent("Event")).initEvent(n,!0,!0):i.createEventObject&&(e=i.createEventObject()),e}();e.dispatchEvent?e.dispatchEvent(a):e.fireEvent("on"+n,a)}}},YS7c:function(e,n,t){"use strict";var r=t("8/JR"),o=t("PzH3"),i=t("n6yW"),a=document,l=a.documentElement;function c(e,n,t,r){global.navigator.pointerEnabled?o[n](e,{mouseup:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"}[t],r):global.navigator.msPointerEnabled?o[n](e,{mouseup:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"}[t],r):(o[n](e,{mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"}[t],r),o[n](e,t,r))}function u(e){if(void 0!==e.touches)return e.touches.length;if(void 0!==e.which&&0!==e.which)return e.which;if(void 0!==e.buttons)return e.buttons;var n=e.button;return void 0!==n?1&n?1:2&n?3:4&n?2:0:void 0}function s(e,n){return void 0!==global[n]?global[n]:l.clientHeight?l[e]:a.body[e]}function d(e,n,t){var r,o=e||{},i=o.className;return o.className+=" gu-hide",r=a.elementFromPoint(n,t),o.className=i,r}function p(){return!1}function f(){return!0}function v(e){return e.width||e.right-e.left}function m(e){return e.height||e.bottom-e.top}function h(e){return e.parentNode===a?null:e.parentNode}function g(e){return"INPUT"===e.tagName||"TEXTAREA"===e.tagName||"SELECT"===e.tagName||function e(n){return!!n&&"false"!==n.contentEditable&&("true"===n.contentEditable||e(h(n)))}(e)}function b(e){return e.nextElementSibling||function(){var n=e;do{n=n.nextSibling}while(n&&1!==n.nodeType);return n}()}function y(e,n){var t=function(e){return e.targetTouches&&e.targetTouches.length?e.targetTouches[0]:e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e}(n),r={pageX:"clientX",pageY:"clientY"};return e in r&&!(e in t)&&r[e]in t&&(e=r[e]),t[e]}e.exports=function(e,n){var t,w,E,S,x,C,O,I,M,N,T;1===arguments.length&&!1===Array.isArray(e)&&(n=e,e=[]);var k,A=null,Y=n||{};void 0===Y.moves&&(Y.moves=f),void 0===Y.accepts&&(Y.accepts=f),void 0===Y.invalid&&(Y.invalid=function(){return!1}),void 0===Y.containers&&(Y.containers=e||[]),void 0===Y.isContainer&&(Y.isContainer=p),void 0===Y.copy&&(Y.copy=!1),void 0===Y.copySortSource&&(Y.copySortSource=!1),void 0===Y.revertOnSpill&&(Y.revertOnSpill=!1),void 0===Y.removeOnSpill&&(Y.removeOnSpill=!1),void 0===Y.direction&&(Y.direction="vertical"),void 0===Y.ignoreInputTextSelection&&(Y.ignoreInputTextSelection=!0),void 0===Y.mirrorContainer&&(Y.mirrorContainer=a.body);var j=r({containers:Y.containers,start:function(e){var n=G(e);n&&H(n)},end:J,cancel:U,remove:K,destroy:function(){D(!0),q({})},canMove:function(e){return!!G(e)},dragging:!1});return!0===Y.removeOnSpill&&j.on("over",function(e){i.rm(e,"gu-hide")}).on("out",function(e){j.dragging&&i.add(e,"gu-hide")}),D(),j;function R(e){return-1!==j.containers.indexOf(e)||Y.isContainer(e)}function D(e){var n=e?"remove":"add";c(l,n,"mousedown",B),c(l,n,"mouseup",q)}function P(e){c(l,e?"remove":"add","mousemove",F)}function X(e){var n=e?"remove":"add";o[n](l,"selectstart",$),o[n](l,"click",$)}function $(e){k&&e.preventDefault()}function B(e){if(C=e.clientX,O=e.clientY,1===u(e)&&!e.metaKey&&!e.ctrlKey){var n=e.target,t=G(n);t&&(k=t,P(),"mousedown"===e.type&&(g(n)?n.focus():e.preventDefault()))}}function F(e){if(k)if(0!==u(e)){if(void 0===e.clientX||e.clientX!==C||void 0===e.clientY||e.clientY!==O){if(Y.ignoreInputTextSelection){var n=y("clientX",e),r=y("clientY",e);if(g(a.elementFromPoint(n,r)))return}var o=k;P(!0),X(),J(),H(o);var d,p={left:(d=E.getBoundingClientRect()).left+s("scrollLeft","pageXOffset"),top:d.top+s("scrollTop","pageYOffset")};S=y("pageX",e)-p.left,x=y("pageY",e)-p.top,i.add(N||E,"gu-transit"),function(){if(!t){var e=E.getBoundingClientRect();(t=E.cloneNode(!0)).style.width=v(e)+"px",t.style.height=m(e)+"px",i.rm(t,"gu-transit"),i.add(t,"gu-mirror"),Y.mirrorContainer.appendChild(t),c(l,"add","mousemove",Q),i.add(Y.mirrorContainer,"gu-unselectable"),j.emit("cloned",t,E,"mirror")}}(),Q(e)}}else q({})}function G(e){if(!(j.dragging&&t||R(e))){for(var n=e;h(e)&&!1===R(h(e));){if(Y.invalid(e,n))return;if(!(e=h(e)))return}var r=h(e);if(r&&!Y.invalid(e,n)&&Y.moves(e,r,n,b(e)))return{item:e,source:r}}}function H(e){("boolean"==typeof Y.copy?Y.copy:Y.copy(e.item,e.source))&&(N=e.item.cloneNode(!0),j.emit("cloned",N,e.item,"copy")),w=e.source,E=e.item,I=M=b(e.item),j.dragging=!0,j.emit("drag",E,w)}function J(){if(j.dragging){var e=N||E;z(e,h(e))}}function L(){k=!1,P(!0),X(!0)}function q(e){if(L(),j.dragging){var n=N||E,r=y("clientX",e),o=y("clientY",e),i=_(d(t,r,o),r,o);i&&(N&&Y.copySortSource||!N||i!==w)?z(n,i):Y.removeOnSpill?K():U()}}function z(e,n){var t=h(e);N&&Y.copySortSource&&n===w&&t.removeChild(E),W(n)?j.emit("cancel",e,w,w):j.emit("drop",e,n,w,M),V()}function K(){if(j.dragging){var e=N||E,n=h(e);n&&n.removeChild(e),j.emit(N?"cancel":"remove",e,n,w),V()}}function U(e){if(j.dragging){var n=arguments.length>0?e:Y.revertOnSpill,t=N||E,r=h(t),o=W(r);!1===o&&n&&(N?r&&r.removeChild(N):w.insertBefore(t,I)),o||n?j.emit("cancel",t,w,w):j.emit("drop",t,r,w,M),V()}}function V(){var e=N||E;L(),t&&(i.rm(Y.mirrorContainer,"gu-unselectable"),c(l,"remove","mousemove",Q),h(t).removeChild(t),t=null),e&&i.rm(e,"gu-transit"),T&&clearTimeout(T),j.dragging=!1,A&&j.emit("out",e,A,w),j.emit("dragend",e),w=E=N=I=M=T=A=null}function W(e,n){var r;return r=void 0!==n?n:t?M:b(N||E),e===w&&r===I}function _(e,n,t){for(var r=e;r&&!o();)r=h(r);return r;function o(){if(!1===R(r))return!1;var o=Z(r,e),i=ee(r,o,n,t);return!!W(r,i)||Y.accepts(E,r,w,i)}}function Q(e){if(t){e.preventDefault();var n=y("clientX",e),r=y("clientY",e),o=r-x;t.style.left=n-S+"px",t.style.top=o+"px";var i=N||E,a=d(t,n,r),l=_(a,n,r),c=null!==l&&l!==A;(c||null===l)&&(A&&f("out"),A=l,c&&f("over"));var u=h(i);if(l!==w||!N||Y.copySortSource){var s,p=Z(l,a);if(null!==p)s=ee(l,p,n,r);else{if(!0!==Y.revertOnSpill||N)return void(N&&u&&u.removeChild(i));s=I,l=w}(null===s&&c||s!==i&&s!==b(i))&&(M=s,l.insertBefore(i,s),j.emit("shadow",i,l,w))}else u&&u.removeChild(i)}function f(e){j.emit(e,i,A,w)}}function Z(e,n){for(var t=n;t!==e&&h(t)!==e;)t=h(t);return t===l?null:t}function ee(e,n,t,r){var o,i="horizontal"===Y.direction;return n!==e?(o=n.getBoundingClientRect(),(i?t>o.left+v(o)/2:r>o.top+m(o)/2)?b(n):n):function(){var n,o,a,l=e.children.length;for(n=0;n<l;n++){if(a=(o=e.children[n]).getBoundingClientRect(),i&&a.left+a.width/2>t)return o;if(!i&&a.top+a.height/2>r)return o}return null}()}}},Ys8N:function(e,n,t){"use strict";var r=[],o="",i=/^on/;for(o in global)i.test(o)&&r.push(o.slice(2));e.exports=r},n6yW:function(e,n,t){"use strict";var r={},o="(?:^|\\s)",i="(?:\\s|$)";function a(e){var n=r[e];return n?n.lastIndex=0:r[e]=n=new RegExp(o+e+i,"g"),n}e.exports={add:function(e,n){var t=e.className;t.length?a(n).test(t)||(e.className+=" "+n):e.className=n},rm:function(e,n){e.className=e.className.replace(a(n)," ").trim()}}}}]);