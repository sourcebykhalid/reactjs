(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,r){},16:function(e,t,r){},18:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(3),c=r.n(o),i=(r(14),r(1));r(16);function l(e){return a.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},a.a.createElement("a",{className:"navbar-brand mx-2 ",href:"#"},e.title),a.a.createElement("div",{className:"container-fluid"},a.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},a.a.createElement("span",{className:"navbar-toggler-icon"})),a.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},a.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},a.a.createElement("li",{className:"nav-item"},a.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home")),a.a.createElement("li",{className:"nav-item"},a.a.createElement("a",{className:"nav-link active",href:"/about"},"About")),a.a.createElement("li",{className:"nav-item"},a.a.createElement("a",{className:"nav-link active",href:"#"},e.aboutText))),a.a.createElement("div",{className:"form-check form-switch"},a.a.createElement("input",{className:"form-check-input",type:"checkbox",role:"switch","aria-checked":"true",onClick:e.toggleMode2,id:"flexSwitchCheckDefault"}),a.a.createElement("label",{className:"form-check-label text-gray",htmlFor:"flexSwitchCheckDefault"},"Change Mode")),a.a.createElement("div",{className:"form-check form-switch"},a.a.createElement("input",{className:"form-check-input",type:"checkbox",role:"switch","aria-checked":"true",onClick:e.toggleMode,id:"flexSwitchCheckDefault"}),a.a.createElement("label",{className:"form-check-label text-gray",htmlFor:"flexSwitchCheckDefault"},"Change Mode")))))}var s=r(4);function u(){u=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(j){l=function(e,t,r){return e[t]=r}}function s(e,t,r,a){var o=t&&t.prototype instanceof m?t:m,c=Object.create(o.prototype),i=new N(a||[]);return n(c,"_invoke",{value:x(e,r,i)}),c}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(j){return{type:"throw",arg:j}}}e.wrap=s;var f={};function m(){}function d(){}function p(){}var v={};l(v,o,function(){return this});var y=Object.getPrototypeOf,g=y&&y(y(O([])));g&&g!==t&&r.call(g,o)&&(v=g);var b=p.prototype=m.prototype=Object.create(v);function w(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var a;n(this,"_invoke",{value:function(n,o){function c(){return new t(function(a,c){!function n(a,o,c,i){var l=h(e[a],e,o);if("throw"!==l.type){var s=l.arg,u=s.value;return u&&"object"==typeof u&&r.call(u,"__await")?t.resolve(u.__await).then(function(e){n("next",e,c,i)},function(e){n("throw",e,c,i)}):t.resolve(u).then(function(e){s.value=e,c(s)},function(e){return n("throw",e,c,i)})}i(l.arg)}(n,o,a,c)})}return a=a?a.then(c,c):c()}})}function x(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return{value:void 0,done:!0}}for(r.method=a,r.arg=o;;){var c=r.delegate;if(c){var i=k(c,r);if(i){if(i===f)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=h(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function k(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,k(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var a=h(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,f;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function O(e){if(e||""===e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}throw new TypeError(typeof e+" is not iterable")}return d.prototype=p,n(b,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:d,configurable:!0}),d.displayName=l(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,i,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},w(E.prototype),l(E.prototype,c,function(){return this}),e.AsyncIterator=E,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var c=new E(s(t,r,n,a),o);return e.isGeneratorFunction(r)?c:c.next().then(function(e){return e.done?e.value:c.next()})},w(b),l(b,i,"Generator"),l(b,o,function(){return this}),l(b,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=O,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return c.type="throw",c.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var i=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;L(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:O(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}function h(e){var t=function(){var t=Object(s.a)(u().mark(function t(){var r,n;return u().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return(r=document.getElementById("myBox")).select(),n=document.getElementById("copy"),t.prev=3,t.next=6,navigator.clipboard.writeText(r.value);case 6:n.innerHTML=r.value,e.showAlert("Copied to Clipboard","success"),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(3),n.innerHTML="Error copying text to clipboard.",console.error("Clipboard writeText error:",t.t0);case 14:case"end":return t.stop()}},t,null,[[3,10]])}));return function(){return t.apply(this,arguments)}}();function r(e){return e.replace(/\s/g," ").length}var o=Object(n.useState)(""),c=Object(i.a)(o,2),l=c[0],h=c[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,a.a.createElement("h1",null,e.heading),a.a.createElement("div",{className:"mb-3"},a.a.createElement("textarea",{className:"form-control",id:"myBox",value:l,rows:"8",onChange:function(e){h(e.target.value)}})),a.a.createElement("button",{className:"btn btn-primary mx-2 my-2",onClick:function(){var t=l.toUpperCase();h(t),e.showAlert("Converted to upperCase","success")}},"UpperCase Conversion"),a.a.createElement("button",{className:"btn btn-primary mx-2 my-2",onClick:function(){var t=l.toLowerCase();h(t),e.showAlert("Converted to lowerCase","success")}},"LowerCase Conversion"),a.a.createElement("button",{className:"btn btn-primary mx-2 my-2",onClick:t},"Copy to Clipboard"),a.a.createElement("button",{className:"btn btn-primary mx-2 my-2",type:"reset",onClick:function(t){t.preventDefault(),h(t.target.value=""),e.showAlert("Textarea cleared","success")}},"Clear Textarea")),a.a.createElement("div",{className:"container my-3"},a.a.createElement("h2",null,"Your text summary"),a.a.createElement("p",null,l.split(" ").length," words and ",l.length," characters removeSpace = ",r),a.a.createElement("p",null,.008*l.split(" ").length," Minutes read!"),a.a.createElement("h2",null,"Preview"),a.a.createElement("p",{style:{backgroundColor:"#f2f2f2",color:"grey",fontFamily:"Poppins",padding:"18px",border:"2px solid lightgreen"}},l.length>0?l:"Enter something in above textbox to preview it here!"),a.a.createElement("h2",null,"Clipboard"),a.a.createElement("p",{style:{backgroundColor:"#fff",color:"black",padding:"18px"},id:"copy"})))}var f=function(e){return e.alert&&a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},a.a.createElement("strong",null,function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type),": "),e.alert.msg))};var m=function(){var e=Object(n.useState)("light"),t=Object(i.a)(e,2),r=t[0],o=t[1],c=Object(n.useState)(null),s=Object(i.a)(c,2),u=s[0],m=s[1],d=function(e,t){m({msg:e,type:t}),setTimeout(function(){m(null)},1700)},p=function(){"dark"===r?(o("light"),document.body.style.backgroundColor="#f5f5f4",document.body.style.color="#000",document.body.style.transition="1.92s",d("Light Mode enabled","success")):(o("dark"),document.body.style.backgroundColor="#2a2b2a",document.body.style.color="#fff",document.body.style.transition="1.8s ",d("Dark Mode enabled","success"))};return a.a.createElement(a.a.Fragment,null,a.a.createElement(l,{title:"TextUtils",mode:r,toggleMode:p,toggleMode2:function(){"steelblue"===r?(o("lightgreen"),document.body.style.backgroundColor="lightgreen",document.body.style.color="#000",document.body.style.transition=".92s",d("Green Mode enabled","success")):(o("steelblue"),document.body.style.backgroundColor="steelblue",document.body.style.color="#000",document.body.style.transition="1.8s",d("Blue Mode enabled","success"))}}),a.a.createElement(f,{alert:u}),a.a.createElement("div",{className:"container my-3 ".concat(r)},a.a.createElement(h,{heading:"Enter your text here!",showAlert:d,mode:r,toggleMode:p})))},d=function(e){e&&e instanceof Function&&r.e(1).then(r.bind(null,19)).then(function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;r(e),n(e),a(e),o(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(m,null))),d()},5:function(e,t,r){e.exports=r(18)}},[[5,3,2]]]);
//# sourceMappingURL=main.42cda380.chunk.js.map