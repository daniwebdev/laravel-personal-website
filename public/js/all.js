/* axios v0.18.1 | (c) 2019 by Matt Zabriskie */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.axios=t():e.axios=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";function r(e){var t=new i(e),n=s(i.prototype.request,t);return o.extend(n,i.prototype,t),o.extend(n,t),n}var o=n(2),s=n(3),i=n(5),u=n(6),a=r(u);a.Axios=i,a.create=function(e){return r(o.merge(u,e))},a.Cancel=n(22),a.CancelToken=n(23),a.isCancel=n(19),a.all=function(e){return Promise.all(e)},a.spread=n(24),e.exports=a,e.exports.default=a},function(e,t,n){"use strict";function r(e){return"[object Array]"===R.call(e)}function o(e){return"[object ArrayBuffer]"===R.call(e)}function s(e){return"undefined"!=typeof FormData&&e instanceof FormData}function i(e){var t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function u(e){return"string"==typeof e}function a(e){return"number"==typeof e}function c(e){return"undefined"==typeof e}function f(e){return null!==e&&"object"==typeof e}function p(e){return"[object Date]"===R.call(e)}function d(e){return"[object File]"===R.call(e)}function l(e){return"[object Blob]"===R.call(e)}function h(e){return"[object Function]"===R.call(e)}function m(e){return f(e)&&h(e.pipe)}function y(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function g(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function x(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function v(e,t){if(null!==e&&"undefined"!=typeof e)if("object"!=typeof e&&(e=[e]),r(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.call(null,e[s],s,e)}function w(){function e(e,n){"object"==typeof t[n]&&"object"==typeof e?t[n]=w(t[n],e):t[n]=e}for(var t={},n=0,r=arguments.length;n<r;n++)v(arguments[n],e);return t}function b(e,t,n){return v(t,function(t,r){n&&"function"==typeof t?e[r]=E(t,n):e[r]=t}),e}var E=n(3),C=n(4),R=Object.prototype.toString;e.exports={isArray:r,isArrayBuffer:o,isBuffer:C,isFormData:s,isArrayBufferView:i,isString:u,isNumber:a,isObject:f,isUndefined:c,isDate:p,isFile:d,isBlob:l,isFunction:h,isStream:m,isURLSearchParams:y,isStandardBrowserEnv:x,forEach:v,merge:w,extend:b,trim:g}},function(e,t){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t){/*!
	 * Determine if an object is a Buffer
	 *
	 * @author   Feross Aboukhadijeh <https://feross.org>
	 * @license  MIT
	 */
e.exports=function(e){return null!=e&&null!=e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}},function(e,t,n){"use strict";function r(e){this.defaults=e,this.interceptors={request:new i,response:new i}}var o=n(6),s=n(2),i=n(16),u=n(17);r.prototype.request=function(e){"string"==typeof e&&(e=s.merge({url:arguments[0]},arguments[1])),e=s.merge(o,{method:"get"},this.defaults,e),e.method=e.method.toLowerCase();var t=[u,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},s.forEach(["delete","get","head","options"],function(e){r.prototype[e]=function(t,n){return this.request(s.merge(n||{},{method:e,url:t}))}}),s.forEach(["post","put","patch"],function(e){r.prototype[e]=function(t,n,r){return this.request(s.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=r},function(e,t,n){"use strict";function r(e,t){!s.isUndefined(e)&&s.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function o(){var e;return"undefined"!=typeof XMLHttpRequest?e=n(8):"undefined"!=typeof process&&(e=n(8)),e}var s=n(2),i=n(7),u={"Content-Type":"application/x-www-form-urlencoded"},a={adapter:o(),transformRequest:[function(e,t){return i(t,"Content-Type"),s.isFormData(e)||s.isArrayBuffer(e)||s.isBuffer(e)||s.isStream(e)||s.isFile(e)||s.isBlob(e)?e:s.isArrayBufferView(e)?e.buffer:s.isURLSearchParams(e)?(r(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):s.isObject(e)?(r(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};a.headers={common:{Accept:"application/json, text/plain, */*"}},s.forEach(["delete","get","head"],function(e){a.headers[e]={}}),s.forEach(["post","put","patch"],function(e){a.headers[e]=s.merge(u)}),e.exports=a},function(e,t,n){"use strict";var r=n(2);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},function(e,t,n){"use strict";var r=n(2),o=n(9),s=n(12),i=n(13),u=n(14),a=n(10);e.exports=function(e){return new Promise(function(t,c){var f=e.data,p=e.headers;r.isFormData(f)&&delete p["Content-Type"];var d=new XMLHttpRequest;if(e.auth){var l=e.auth.username||"",h=e.auth.password||"";p.Authorization="Basic "+btoa(l+":"+h)}if(d.open(e.method.toUpperCase(),s(e.url,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?i(d.getAllResponseHeaders()):null,r=e.responseType&&"text"!==e.responseType?d.response:d.responseText,s={data:r,status:d.status,statusText:d.statusText,headers:n,config:e,request:d};o(t,c,s),d=null}},d.onerror=function(){c(a("Network Error",e,null,d)),d=null},d.ontimeout=function(){c(a("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var m=n(15),y=(e.withCredentials||u(e.url))&&e.xsrfCookieName?m.read(e.xsrfCookieName):void 0;y&&(p[e.xsrfHeaderName]=y)}if("setRequestHeader"in d&&r.forEach(p,function(e,t){"undefined"==typeof f&&"content-type"===t.toLowerCase()?delete p[t]:d.setRequestHeader(t,e)}),e.withCredentials&&(d.withCredentials=!0),e.responseType)try{d.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){d&&(d.abort(),c(e),d=null)}),void 0===f&&(f=null),d.send(f)})}},function(e,t,n){"use strict";var r=n(10);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},function(e,t,n){"use strict";var r=n(11);e.exports=function(e,t,n,o,s){var i=new Error(e);return r(i,t,n,o,s)}},function(e,t){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e}},function(e,t,n){"use strict";function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(2);e.exports=function(e,t,n){if(!t)return e;var s;if(n)s=n(t);else if(o.isURLSearchParams(t))s=t.toString();else{var i=[];o.forEach(t,function(e,t){null!==e&&"undefined"!=typeof e&&(o.isArray(e)?t+="[]":e=[e],o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),i.push(r(t)+"="+r(e))}))}),s=i.join("&")}return s&&(e+=(e.indexOf("?")===-1?"?":"&")+s),e}},function(e,t,n){"use strict";var r=n(2),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,s,i={};return e?(r.forEach(e.split("\n"),function(e){if(s=e.indexOf(":"),t=r.trim(e.substr(0,s)).toLowerCase(),n=r.trim(e.substr(s+1)),t){if(i[t]&&o.indexOf(t)>=0)return;"set-cookie"===t?i[t]=(i[t]?i[t]:[]).concat([n]):i[t]=i[t]?i[t]+", "+n:n}}),i):i}},function(e,t,n){"use strict";var r=n(2);e.exports=r.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(n){var o=r.isString(n)?e(n):n;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},function(e,t,n){"use strict";var r=n(2);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,s,i){var u=[];u.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&u.push("expires="+new Date(n).toGMTString()),r.isString(o)&&u.push("path="+o),r.isString(s)&&u.push("domain="+s),i===!0&&u.push("secure"),document.cookie=u.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(e,t,n){"use strict";function r(){this.handlers=[]}var o=n(2);r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r},function(e,t,n){"use strict";function r(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=n(2),s=n(18),i=n(19),u=n(6),a=n(20),c=n(21);e.exports=function(e){r(e),e.baseURL&&!a(e.url)&&(e.url=c(e.baseURL,e.url)),e.headers=e.headers||{},e.data=s(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]});var t=e.adapter||u.adapter;return t(e).then(function(t){return r(e),t.data=s(t.data,t.headers,e.transformResponse),t},function(t){return i(t)||(r(e),t&&t.response&&(t.response.data=s(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(e,t,n){"use strict";var r=n(2);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},function(e,t){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},function(e,t,n){"use strict";function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new o(e),t(n.reason))})}var o=n(22);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e,t=new r(function(t){e=t});return{token:t,cancel:e}},e.exports=r},function(e,t){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}}])});
//# sourceMappingURL=axios.min.map
var DateFormatter;!function(){"use strict";var D,s,r,a,n;D=function(e,t){return"string"==typeof e&&"string"==typeof t&&e.toLowerCase()===t.toLowerCase()},s=function(e,t,a){var n=a||"0",r=e.toString();return r.length<t?s(n+r,t):r},r=function(e){var t,a;for(e=e||{},t=1;t<arguments.length;t++)if(a=arguments[t])for(var n in a)a.hasOwnProperty(n)&&("object"==typeof a[n]?r(e[n],a[n]):e[n]=a[n]);return e},a=function(e,t){for(var a=0;a<t.length;a++)if(t[a].toLowerCase()===e.toLowerCase())return a;return-1},n={dateSettings:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],meridiem:["AM","PM"],ordinal:function(e){var t=e%10,a={1:"st",2:"nd",3:"rd"};return 1!==Math.floor(e%100/10)&&a[t]?a[t]:"th"}},separators:/[ \-+\/\.T:@]/g,validParts:/[dDjlNSwzWFmMntLoYyaABgGhHisueTIOPZcrU]/g,intParts:/[djwNzmnyYhHgGis]/g,tzParts:/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,tzClip:/[^-+\dA-Z]/g},(DateFormatter=function(e){var t=this,a=r(n,e);t.dateSettings=a.dateSettings,t.separators=a.separators,t.validParts=a.validParts,t.intParts=a.intParts,t.tzParts=a.tzParts,t.tzClip=a.tzClip}).prototype={constructor:DateFormatter,getMonth:function(e){var t;return 0===(t=a(e,this.dateSettings.monthsShort)+1)&&(t=a(e,this.dateSettings.months)+1),t},parseDate:function(e,t){var a,n,r,o,i,s,d,u,l,f,c=this,m=!1,h=!1,g=c.dateSettings,p={date:null,year:null,month:null,day:null,hour:0,min:0,sec:0};if(!e)return null;if(e instanceof Date)return e;if("U"===t)return(r=parseInt(e))?new Date(1e3*r):e;switch(typeof e){case"number":return new Date(e);case"string":break;default:return null}if(!(a=t.match(c.validParts))||0===a.length)throw new Error("Invalid date format definition.");for(n=e.replace(c.separators,"\0").split("\0"),r=0;r<n.length;r++)switch(o=n[r],i=parseInt(o),a[r]){case"y":case"Y":if(!i)return null;l=o.length,p.year=2===l?parseInt((i<70?"20":"19")+o):i,m=!0;break;case"m":case"n":case"M":case"F":if(isNaN(i)){if(!(0<(s=c.getMonth(o))))return null;p.month=s}else{if(!(1<=i&&i<=12))return null;p.month=i}m=!0;break;case"d":case"j":if(!(1<=i&&i<=31))return null;p.day=i,m=!0;break;case"g":case"h":if(f=n[d=-1<a.indexOf("a")?a.indexOf("a"):-1<a.indexOf("A")?a.indexOf("A"):-1],-1<d)u=D(f,g.meridiem[0])?0:D(f,g.meridiem[1])?12:-1,1<=i&&i<=12&&-1<u?p.hour=i+u-1:0<=i&&i<=23&&(p.hour=i);else{if(!(0<=i&&i<=23))return null;p.hour=i}h=!0;break;case"G":case"H":if(!(0<=i&&i<=23))return null;p.hour=i,h=!0;break;case"i":if(!(0<=i&&i<=59))return null;p.min=i,h=!0;break;case"s":if(!(0<=i&&i<=59))return null;p.sec=i,h=!0}if(!0===m&&p.year&&p.month&&p.day)p.date=new Date(p.year,p.month-1,p.day,p.hour,p.min,p.sec,0);else{if(!0!==h)return null;p.date=new Date(0,0,0,p.hour,p.min,p.sec,0)}return p.date},guessDate:function(e,t){if("string"!=typeof e)return e;var a,n,r,o,i,s,d=e.replace(this.separators,"\0").split("\0"),u=t.match(this.validParts),l=new Date,f=0;if(!/^[djmn]/g.test(u[0]))return e;for(r=0;r<d.length;r++){if(f=2,i=d[r],s=parseInt(i.substr(0,2)),isNaN(s))return null;switch(r){case 0:"m"===u[0]||"n"===u[0]?l.setMonth(s-1):l.setDate(s);break;case 1:"m"===u[0]||"n"===u[0]?l.setDate(s):l.setMonth(s-1);break;case 2:if(n=l.getFullYear(),f=(a=i.length)<4?a:4,!(n=parseInt(a<4?n.toString().substr(0,4-a)+i:i.substr(0,4))))return null;l.setFullYear(n);break;case 3:l.setHours(s);break;case 4:l.setMinutes(s);break;case 5:l.setSeconds(s)}0<(o=i.substr(f)).length&&d.splice(r+1,0,o)}return l},parseFormat:function(e,n){var a,t=this,r=t.dateSettings,o=/\\?(.?)/gi,i=function(e,t){return a[e]?a[e]():t};return a={d:function(){return s(a.j(),2)},D:function(){return r.daysShort[a.w()]},j:function(){return n.getDate()},l:function(){return r.days[a.w()]},N:function(){return a.w()||7},w:function(){return n.getDay()},z:function(){var e=new Date(a.Y(),a.n()-1,a.j()),t=new Date(a.Y(),0,1);return Math.round((e-t)/864e5)},W:function(){var e=new Date(a.Y(),a.n()-1,a.j()-a.N()+3),t=new Date(e.getFullYear(),0,4);return s(1+Math.round((e-t)/864e5/7),2)},F:function(){return r.months[n.getMonth()]},m:function(){return s(a.n(),2)},M:function(){return r.monthsShort[n.getMonth()]},n:function(){return n.getMonth()+1},t:function(){return new Date(a.Y(),a.n(),0).getDate()},L:function(){var e=a.Y();return e%4==0&&e%100!=0||e%400==0?1:0},o:function(){var e=a.n(),t=a.W();return a.Y()+(12===e&&t<9?1:1===e&&9<t?-1:0)},Y:function(){return n.getFullYear()},y:function(){return a.Y().toString().slice(-2)},a:function(){return a.A().toLowerCase()},A:function(){var e=a.G()<12?0:1;return r.meridiem[e]},B:function(){var e=3600*n.getUTCHours(),t=60*n.getUTCMinutes(),a=n.getUTCSeconds();return s(Math.floor((e+t+a+3600)/86.4)%1e3,3)},g:function(){return a.G()%12||12},G:function(){return n.getHours()},h:function(){return s(a.g(),2)},H:function(){return s(a.G(),2)},i:function(){return s(n.getMinutes(),2)},s:function(){return s(n.getSeconds(),2)},u:function(){return s(1e3*n.getMilliseconds(),6)},e:function(){return/\((.*)\)/.exec(String(n))[1]||"Coordinated Universal Time"},I:function(){return new Date(a.Y(),0)-Date.UTC(a.Y(),0)!=new Date(a.Y(),6)-Date.UTC(a.Y(),6)?1:0},O:function(){var e=n.getTimezoneOffset(),t=Math.abs(e);return(0<e?"-":"+")+s(100*Math.floor(t/60)+t%60,4)},P:function(){var e=a.O();return e.substr(0,3)+":"+e.substr(3,2)},T:function(){return(String(n).match(t.tzParts)||[""]).pop().replace(t.tzClip,"")||"UTC"},Z:function(){return 60*-n.getTimezoneOffset()},c:function(){return"Y-m-d\\TH:i:sP".replace(o,i)},r:function(){return"D, d M Y H:i:s O".replace(o,i)},U:function(){return n.getTime()/1e3||0}},i(e,e)},formatDate:function(e,t){var a,n,r,o,i,s="";if("string"==typeof e&&!(e=this.parseDate(e,t)))return null;if(e instanceof Date){for(r=t.length,a=0;a<r;a++)"S"!==(i=t.charAt(a))&&"\\"!==i&&(0<a&&"\\"===t.charAt(a-1)?s+=i:(o=this.parseFormat(i,e),a!==r-1&&this.intParts.test(i)&&"S"===t.charAt(a+1)&&(n=parseInt(o)||0,o+=this.dateSettings.ordinal(n)),s+=o));return s}return""}}}();var datetimepickerFactory=function(L){"use strict";var s={i18n:{ar:{months:["كانون الثاني","شباط","آذار","نيسان","مايو","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول"],dayOfWeekShort:["ن","ث","ع","خ","ج","س","ح"],dayOfWeek:["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت","الأحد"]},ro:{months:["Ianuarie","Februarie","Martie","Aprilie","Mai","Iunie","Iulie","August","Septembrie","Octombrie","Noiembrie","Decembrie"],dayOfWeekShort:["Du","Lu","Ma","Mi","Jo","Vi","Sâ"],dayOfWeek:["Duminică","Luni","Marţi","Miercuri","Joi","Vineri","Sâmbătă"]},id:{months:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],dayOfWeekShort:["Min","Sen","Sel","Rab","Kam","Jum","Sab"],dayOfWeek:["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"]},is:{months:["Janúar","Febrúar","Mars","Apríl","Maí","Júní","Júlí","Ágúst","September","Október","Nóvember","Desember"],dayOfWeekShort:["Sun","Mán","Þrið","Mið","Fim","Fös","Lau"],dayOfWeek:["Sunnudagur","Mánudagur","Þriðjudagur","Miðvikudagur","Fimmtudagur","Föstudagur","Laugardagur"]},bg:{months:["Януари","Февруари","Март","Април","Май","Юни","Юли","Август","Септември","Октомври","Ноември","Декември"],dayOfWeekShort:["Нд","Пн","Вт","Ср","Чт","Пт","Сб"],dayOfWeek:["Неделя","Понеделник","Вторник","Сряда","Четвъртък","Петък","Събота"]},fa:{months:["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"],dayOfWeekShort:["یکشنبه","دوشنبه","سه شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"],dayOfWeek:["یک‌شنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنج‌شنبه","جمعه","شنبه","یک‌شنبه"]},ru:{months:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],dayOfWeekShort:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],dayOfWeek:["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"]},uk:{months:["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],dayOfWeekShort:["Ндл","Пнд","Втр","Срд","Чтв","Птн","Сбт"],dayOfWeek:["Неділя","Понеділок","Вівторок","Середа","Четвер","П'ятниця","Субота"]},en:{months:["January","February","March","April","May","June","July","August","September","October","November","December"],dayOfWeekShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayOfWeek:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},el:{months:["Ιανουάριος","Φεβρουάριος","Μάρτιος","Απρίλιος","Μάιος","Ιούνιος","Ιούλιος","Αύγουστος","Σεπτέμβριος","Οκτώβριος","Νοέμβριος","Δεκέμβριος"],dayOfWeekShort:["Κυρ","Δευ","Τρι","Τετ","Πεμ","Παρ","Σαβ"],dayOfWeek:["Κυριακή","Δευτέρα","Τρίτη","Τετάρτη","Πέμπτη","Παρασκευή","Σάββατο"]},de:{months:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],dayOfWeekShort:["So","Mo","Di","Mi","Do","Fr","Sa"],dayOfWeek:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},nl:{months:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],dayOfWeekShort:["zo","ma","di","wo","do","vr","za"],dayOfWeek:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"]},tr:{months:["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],dayOfWeekShort:["Paz","Pts","Sal","Çar","Per","Cum","Cts"],dayOfWeek:["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]},fr:{months:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],dayOfWeekShort:["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],dayOfWeek:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"]},es:{months:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],dayOfWeekShort:["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"],dayOfWeek:["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"]},th:{months:["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],dayOfWeekShort:["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."],dayOfWeek:["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัส","ศุกร์","เสาร์","อาทิตย์"]},pl:{months:["styczeń","luty","marzec","kwiecień","maj","czerwiec","lipiec","sierpień","wrzesień","październik","listopad","grudzień"],dayOfWeekShort:["nd","pn","wt","śr","cz","pt","sb"],dayOfWeek:["niedziela","poniedziałek","wtorek","środa","czwartek","piątek","sobota"]},pt:{months:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],dayOfWeekShort:["Dom","Seg","Ter","Qua","Qui","Sex","Sab"],dayOfWeek:["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"]},ch:{months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],dayOfWeekShort:["日","一","二","三","四","五","六"]},se:{months:["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"],dayOfWeekShort:["Sön","Mån","Tis","Ons","Tor","Fre","Lör"]},km:{months:["មករា​","កុម្ភៈ","មិនា​","មេសា​","ឧសភា​","មិថុនា​","កក្កដា​","សីហា​","កញ្ញា​","តុលា​","វិច្ឆិកា","ធ្នូ​"],dayOfWeekShort:["អាទិ​","ច័ន្ទ​","អង្គារ​","ពុធ​","ព្រហ​​","សុក្រ​","សៅរ៍"],dayOfWeek:["អាទិត្យ​","ច័ន្ទ​","អង្គារ​","ពុធ​","ព្រហស្បតិ៍​","សុក្រ​","សៅរ៍"]},kr:{months:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],dayOfWeekShort:["일","월","화","수","목","금","토"],dayOfWeek:["일요일","월요일","화요일","수요일","목요일","금요일","토요일"]},it:{months:["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],dayOfWeekShort:["Dom","Lun","Mar","Mer","Gio","Ven","Sab"],dayOfWeek:["Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato"]},da:{months:["Januar","Februar","Marts","April","Maj","Juni","Juli","August","September","Oktober","November","December"],dayOfWeekShort:["Søn","Man","Tir","Ons","Tor","Fre","Lør"],dayOfWeek:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},no:{months:["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],dayOfWeekShort:["Søn","Man","Tir","Ons","Tor","Fre","Lør"],dayOfWeek:["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Fredag","Lørdag"]},ja:{months:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],dayOfWeekShort:["日","月","火","水","木","金","土"],dayOfWeek:["日曜","月曜","火曜","水曜","木曜","金曜","土曜"]},vi:{months:["Tháng 1","Tháng 2","Tháng 3","Tháng 4","Tháng 5","Tháng 6","Tháng 7","Tháng 8","Tháng 9","Tháng 10","Tháng 11","Tháng 12"],dayOfWeekShort:["CN","T2","T3","T4","T5","T6","T7"],dayOfWeek:["Chủ nhật","Thứ hai","Thứ ba","Thứ tư","Thứ năm","Thứ sáu","Thứ bảy"]},sl:{months:["Januar","Februar","Marec","April","Maj","Junij","Julij","Avgust","September","Oktober","November","December"],dayOfWeekShort:["Ned","Pon","Tor","Sre","Čet","Pet","Sob"],dayOfWeek:["Nedelja","Ponedeljek","Torek","Sreda","Četrtek","Petek","Sobota"]},cs:{months:["Leden","Únor","Březen","Duben","Květen","Červen","Červenec","Srpen","Září","Říjen","Listopad","Prosinec"],dayOfWeekShort:["Ne","Po","Út","St","Čt","Pá","So"]},hu:{months:["Január","Február","Március","Április","Május","Június","Július","Augusztus","Szeptember","Október","November","December"],dayOfWeekShort:["Va","Hé","Ke","Sze","Cs","Pé","Szo"],dayOfWeek:["vasárnap","hétfő","kedd","szerda","csütörtök","péntek","szombat"]},az:{months:["Yanvar","Fevral","Mart","Aprel","May","Iyun","Iyul","Avqust","Sentyabr","Oktyabr","Noyabr","Dekabr"],dayOfWeekShort:["B","Be","Ça","Ç","Ca","C","Ş"],dayOfWeek:["Bazar","Bazar ertəsi","Çərşənbə axşamı","Çərşənbə","Cümə axşamı","Cümə","Şənbə"]},bs:{months:["Januar","Februar","Mart","April","Maj","Jun","Jul","Avgust","Septembar","Oktobar","Novembar","Decembar"],dayOfWeekShort:["Ned","Pon","Uto","Sri","Čet","Pet","Sub"],dayOfWeek:["Nedjelja","Ponedjeljak","Utorak","Srijeda","Četvrtak","Petak","Subota"]},ca:{months:["Gener","Febrer","Març","Abril","Maig","Juny","Juliol","Agost","Setembre","Octubre","Novembre","Desembre"],dayOfWeekShort:["Dg","Dl","Dt","Dc","Dj","Dv","Ds"],dayOfWeek:["Diumenge","Dilluns","Dimarts","Dimecres","Dijous","Divendres","Dissabte"]},"en-GB":{months:["January","February","March","April","May","June","July","August","September","October","November","December"],dayOfWeekShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayOfWeek:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},et:{months:["Jaanuar","Veebruar","Märts","Aprill","Mai","Juuni","Juuli","August","September","Oktoober","November","Detsember"],dayOfWeekShort:["P","E","T","K","N","R","L"],dayOfWeek:["Pühapäev","Esmaspäev","Teisipäev","Kolmapäev","Neljapäev","Reede","Laupäev"]},eu:{months:["Urtarrila","Otsaila","Martxoa","Apirila","Maiatza","Ekaina","Uztaila","Abuztua","Iraila","Urria","Azaroa","Abendua"],dayOfWeekShort:["Ig.","Al.","Ar.","Az.","Og.","Or.","La."],dayOfWeek:["Igandea","Astelehena","Asteartea","Asteazkena","Osteguna","Ostirala","Larunbata"]},fi:{months:["Tammikuu","Helmikuu","Maaliskuu","Huhtikuu","Toukokuu","Kesäkuu","Heinäkuu","Elokuu","Syyskuu","Lokakuu","Marraskuu","Joulukuu"],dayOfWeekShort:["Su","Ma","Ti","Ke","To","Pe","La"],dayOfWeek:["sunnuntai","maanantai","tiistai","keskiviikko","torstai","perjantai","lauantai"]},gl:{months:["Xan","Feb","Maz","Abr","Mai","Xun","Xul","Ago","Set","Out","Nov","Dec"],dayOfWeekShort:["Dom","Lun","Mar","Mer","Xov","Ven","Sab"],dayOfWeek:["Domingo","Luns","Martes","Mércores","Xoves","Venres","Sábado"]},hr:{months:["Siječanj","Veljača","Ožujak","Travanj","Svibanj","Lipanj","Srpanj","Kolovoz","Rujan","Listopad","Studeni","Prosinac"],dayOfWeekShort:["Ned","Pon","Uto","Sri","Čet","Pet","Sub"],dayOfWeek:["Nedjelja","Ponedjeljak","Utorak","Srijeda","Četvrtak","Petak","Subota"]},ko:{months:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],dayOfWeekShort:["일","월","화","수","목","금","토"],dayOfWeek:["일요일","월요일","화요일","수요일","목요일","금요일","토요일"]},lt:{months:["Sausio","Vasario","Kovo","Balandžio","Gegužės","Birželio","Liepos","Rugpjūčio","Rugsėjo","Spalio","Lapkričio","Gruodžio"],dayOfWeekShort:["Sek","Pir","Ant","Tre","Ket","Pen","Šeš"],dayOfWeek:["Sekmadienis","Pirmadienis","Antradienis","Trečiadienis","Ketvirtadienis","Penktadienis","Šeštadienis"]},lv:{months:["Janvāris","Februāris","Marts","Aprīlis ","Maijs","Jūnijs","Jūlijs","Augusts","Septembris","Oktobris","Novembris","Decembris"],dayOfWeekShort:["Sv","Pr","Ot","Tr","Ct","Pk","St"],dayOfWeek:["Svētdiena","Pirmdiena","Otrdiena","Trešdiena","Ceturtdiena","Piektdiena","Sestdiena"]},mk:{months:["јануари","февруари","март","април","мај","јуни","јули","август","септември","октомври","ноември","декември"],dayOfWeekShort:["нед","пон","вто","сре","чет","пет","саб"],dayOfWeek:["Недела","Понеделник","Вторник","Среда","Четврток","Петок","Сабота"]},mn:{months:["1-р сар","2-р сар","3-р сар","4-р сар","5-р сар","6-р сар","7-р сар","8-р сар","9-р сар","10-р сар","11-р сар","12-р сар"],dayOfWeekShort:["Дав","Мяг","Лха","Пүр","Бсн","Бям","Ням"],dayOfWeek:["Даваа","Мягмар","Лхагва","Пүрэв","Баасан","Бямба","Ням"]},"pt-BR":{months:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],dayOfWeekShort:["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],dayOfWeek:["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"]},sk:{months:["Január","Február","Marec","Apríl","Máj","Jún","Júl","August","September","Október","November","December"],dayOfWeekShort:["Ne","Po","Ut","St","Št","Pi","So"],dayOfWeek:["Nedeľa","Pondelok","Utorok","Streda","Štvrtok","Piatok","Sobota"]},sq:{months:["Janar","Shkurt","Mars","Prill","Maj","Qershor","Korrik","Gusht","Shtator","Tetor","Nëntor","Dhjetor"],dayOfWeekShort:["Die","Hën","Mar","Mër","Enj","Pre","Shtu"],dayOfWeek:["E Diel","E Hënë","E Martē","E Mërkurë","E Enjte","E Premte","E Shtunë"]},"sr-YU":{months:["Januar","Februar","Mart","April","Maj","Jun","Jul","Avgust","Septembar","Oktobar","Novembar","Decembar"],dayOfWeekShort:["Ned","Pon","Uto","Sre","čet","Pet","Sub"],dayOfWeek:["Nedelja","Ponedeljak","Utorak","Sreda","Četvrtak","Petak","Subota"]},sr:{months:["јануар","фебруар","март","април","мај","јун","јул","август","септембар","октобар","новембар","децембар"],dayOfWeekShort:["нед","пон","уто","сре","чет","пет","суб"],dayOfWeek:["Недеља","Понедељак","Уторак","Среда","Четвртак","Петак","Субота"]},sv:{months:["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"],dayOfWeekShort:["Sön","Mån","Tis","Ons","Tor","Fre","Lör"],dayOfWeek:["Söndag","Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag"]},"zh-TW":{months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],dayOfWeekShort:["日","一","二","三","四","五","六"],dayOfWeek:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]},zh:{months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],dayOfWeekShort:["日","一","二","三","四","五","六"],dayOfWeek:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]},ug:{months:["1-ئاي","2-ئاي","3-ئاي","4-ئاي","5-ئاي","6-ئاي","7-ئاي","8-ئاي","9-ئاي","10-ئاي","11-ئاي","12-ئاي"],dayOfWeek:["يەكشەنبە","دۈشەنبە","سەيشەنبە","چارشەنبە","پەيشەنبە","جۈمە","شەنبە"]},he:{months:["ינואר","פברואר","מרץ","אפריל","מאי","יוני","יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר"],dayOfWeekShort:["א'","ב'","ג'","ד'","ה'","ו'","שבת"],dayOfWeek:["ראשון","שני","שלישי","רביעי","חמישי","שישי","שבת","ראשון"]},hy:{months:["Հունվար","Փետրվար","Մարտ","Ապրիլ","Մայիս","Հունիս","Հուլիս","Օգոստոս","Սեպտեմբեր","Հոկտեմբեր","Նոյեմբեր","Դեկտեմբեր"],dayOfWeekShort:["Կի","Երկ","Երք","Չոր","Հնգ","Ուրբ","Շբթ"],dayOfWeek:["Կիրակի","Երկուշաբթի","Երեքշաբթի","Չորեքշաբթի","Հինգշաբթի","Ուրբաթ","Շաբաթ"]},kg:{months:["Үчтүн айы","Бирдин айы","Жалган Куран","Чын Куран","Бугу","Кулжа","Теке","Баш Оона","Аяк Оона","Тогуздун айы","Жетинин айы","Бештин айы"],dayOfWeekShort:["Жек","Дүй","Шей","Шар","Бей","Жум","Ише"],dayOfWeek:["Жекшемб","Дүйшөмб","Шейшемб","Шаршемб","Бейшемби","Жума","Ишенб"]},rm:{months:["Schaner","Favrer","Mars","Avrigl","Matg","Zercladur","Fanadur","Avust","Settember","October","November","December"],dayOfWeekShort:["Du","Gli","Ma","Me","Gie","Ve","So"],dayOfWeek:["Dumengia","Glindesdi","Mardi","Mesemna","Gievgia","Venderdi","Sonda"]},ka:{months:["იანვარი","თებერვალი","მარტი","აპრილი","მაისი","ივნისი","ივლისი","აგვისტო","სექტემბერი","ოქტომბერი","ნოემბერი","დეკემბერი"],dayOfWeekShort:["კვ","ორშ","სამშ","ოთხ","ხუთ","პარ","შაბ"],dayOfWeek:["კვირა","ორშაბათი","სამშაბათი","ოთხშაბათი","ხუთშაბათი","პარასკევი","შაბათი"]}},ownerDocument:document,contentWindow:window,value:"",rtl:!1,format:"Y/m/d H:i",formatTime:"H:i",formatDate:"Y/m/d",startDate:!1,step:60,monthChangeSpinner:!0,closeOnDateSelect:!1,closeOnTimeSelect:!0,closeOnWithoutClick:!0,closeOnInputClick:!0,openOnFocus:!0,timepicker:!0,datepicker:!0,weeks:!1,defaultTime:!1,defaultDate:!1,minDate:!1,maxDate:!1,minTime:!1,maxTime:!1,minDateTime:!1,maxDateTime:!1,allowTimes:[],opened:!1,initTime:!0,inline:!1,theme:"",touchMovedThreshold:5,onSelectDate:function(){},onSelectTime:function(){},onChangeMonth:function(){},onGetWeekOfYear:function(){},onChangeYear:function(){},onChangeDateTime:function(){},onShow:function(){},onClose:function(){},onGenerate:function(){},withoutCopyright:!0,inverseButton:!1,hours12:!1,next:"xdsoft_next",prev:"xdsoft_prev",dayOfWeekStart:0,parentID:"body",timeHeightInTimePicker:25,timepickerScrollbar:!0,todayButton:!0,prevButton:!0,nextButton:!0,defaultSelect:!0,scrollMonth:!0,scrollTime:!0,scrollInput:!0,lazyInit:!1,mask:!1,validateOnBlur:!0,allowBlank:!0,yearStart:1950,yearEnd:2050,monthStart:0,monthEnd:11,style:"",id:"",fixed:!1,roundTime:"round",className:"",weekends:[],highlightedDates:[],highlightedPeriods:[],allowDates:[],allowDateRe:null,disabledDates:[],disabledWeekDays:[],yearOffset:0,beforeShowDay:null,enterLikeTab:!0,showApplyButton:!1,insideParent:!1},E=null,n=null,R="en",a={meridiem:["AM","PM"]},r=function(){var e=s.i18n[R],t={days:e.dayOfWeek,daysShort:e.dayOfWeekShort,months:e.months,monthsShort:L.map(e.months,function(e){return e.substring(0,3)})};"function"==typeof DateFormatter&&(E=n=new DateFormatter({dateSettings:L.extend({},a,t)}))},o={moment:{default_options:{format:"YYYY/MM/DD HH:mm",formatDate:"YYYY/MM/DD",formatTime:"HH:mm"},formatter:{parseDate:function(e,t){if(i(t))return n.parseDate(e,t);var a=moment(e,t);return!!a.isValid()&&a.toDate()},formatDate:function(e,t){return i(t)?n.formatDate(e,t):moment(e).format(t)},formatMask:function(e){return e.replace(/Y{4}/g,"9999").replace(/Y{2}/g,"99").replace(/M{2}/g,"19").replace(/D{2}/g,"39").replace(/H{2}/g,"29").replace(/m{2}/g,"59").replace(/s{2}/g,"59")}}}};L.datetimepicker={setLocale:function(e){var t=s.i18n[e]?e:"en";R!==t&&(R=t,r())},setDateFormatter:function(e){if("string"==typeof e&&o.hasOwnProperty(e)){var t=o[e];L.extend(s,t.default_options),E=t.formatter}else E=e}};var t={RFC_2822:"D, d M Y H:i:s O",ATOM:"Y-m-dTH:i:sP",ISO_8601:"Y-m-dTH:i:sO",RFC_822:"D, d M y H:i:s O",RFC_850:"l, d-M-y H:i:s T",RFC_1036:"D, d M y H:i:s O",RFC_1123:"D, d M Y H:i:s O",RSS:"D, d M Y H:i:s O",W3C:"Y-m-dTH:i:sP"},i=function(e){return-1!==Object.values(t).indexOf(e)};function m(e,t,a){this.date=e,this.desc=t,this.style=a}L.extend(L.datetimepicker,t),r(),window.getComputedStyle||(window.getComputedStyle=function(a){return this.el=a,this.getPropertyValue=function(e){var t=/(-([a-z]))/g;return"float"===e&&(e="styleFloat"),t.test(e)&&(e=e.replace(t,function(e,t,a){return a.toUpperCase()})),a.currentStyle[e]||null},this}),Array.prototype.indexOf||(Array.prototype.indexOf=function(e,t){var a,n;for(a=t||0,n=this.length;a<n;a+=1)if(this[a]===e)return a;return-1}),Date.prototype.countDaysInMonth=function(){return new Date(this.getFullYear(),this.getMonth()+1,0).getDate()},L.fn.xdsoftScroller=function(p,D){return this.each(function(){var o,i,s,d,u,l=L(this),a=function(e){var t,a={x:0,y:0};return"touchstart"===e.type||"touchmove"===e.type||"touchend"===e.type||"touchcancel"===e.type?(t=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0],a.x=t.clientX,a.y=t.clientY):"mousedown"!==e.type&&"mouseup"!==e.type&&"mousemove"!==e.type&&"mouseover"!==e.type&&"mouseout"!==e.type&&"mouseenter"!==e.type&&"mouseleave"!==e.type||(a.x=e.clientX,a.y=e.clientY),a},f=100,n=!1,r=0,c=0,m=0,t=!1,h=0,g=function(){};"hide"!==D?(L(this).hasClass("xdsoft_scroller_box")||(o=l.children().eq(0),i=l[0].clientHeight,s=o[0].offsetHeight,d=L('<div class="xdsoft_scrollbar"></div>'),u=L('<div class="xdsoft_scroller"></div>'),d.append(u),l.addClass("xdsoft_scroller_box").append(d),g=function(e){var t=a(e).y-r+h;t<0&&(t=0),t+u[0].offsetHeight>m&&(t=m-u[0].offsetHeight),l.trigger("scroll_element.xdsoft_scroller",[f?t/f:0])},u.on("touchstart.xdsoft_scroller mousedown.xdsoft_scroller",function(e){i||l.trigger("resize_scroll.xdsoft_scroller",[D]),r=a(e).y,h=parseInt(u.css("margin-top"),10),m=d[0].offsetHeight,"mousedown"===e.type||"touchstart"===e.type?(p.ownerDocument&&L(p.ownerDocument.body).addClass("xdsoft_noselect"),L([p.ownerDocument.body,p.contentWindow]).on("touchend mouseup.xdsoft_scroller",function e(){L([p.ownerDocument.body,p.contentWindow]).off("touchend mouseup.xdsoft_scroller",e).off("mousemove.xdsoft_scroller",g).removeClass("xdsoft_noselect")}),L(p.ownerDocument.body).on("mousemove.xdsoft_scroller",g)):(t=!0,e.stopPropagation(),e.preventDefault())}).on("touchmove",function(e){t&&(e.preventDefault(),g(e))}).on("touchend touchcancel",function(){t=!1,h=0}),l.on("scroll_element.xdsoft_scroller",function(e,t){i||l.trigger("resize_scroll.xdsoft_scroller",[t,!0]),t=1<t?1:t<0||isNaN(t)?0:t,u.css("margin-top",f*t),setTimeout(function(){o.css("marginTop",-parseInt((o[0].offsetHeight-i)*t,10))},10)}).on("resize_scroll.xdsoft_scroller",function(e,t,a){var n,r;i=l[0].clientHeight,s=o[0].offsetHeight,r=(n=i/s)*d[0].offsetHeight,1<n?u.hide():(u.show(),u.css("height",parseInt(10<r?r:10,10)),f=d[0].offsetHeight-u[0].offsetHeight,!0!==a&&l.trigger("scroll_element.xdsoft_scroller",[t||Math.abs(parseInt(o.css("marginTop"),10))/(s-i)]))}),l.on("mousewheel",function(e){var t=Math.abs(parseInt(o.css("marginTop"),10));return(t-=20*e.deltaY)<0&&(t=0),l.trigger("scroll_element.xdsoft_scroller",[t/(s-i)]),e.stopPropagation(),!1}),l.on("touchstart",function(e){n=a(e),c=Math.abs(parseInt(o.css("marginTop"),10))}),l.on("touchmove",function(e){if(n){e.preventDefault();var t=a(e);l.trigger("scroll_element.xdsoft_scroller",[(c-(t.y-n.y))/(s-i)])}}),l.on("touchend touchcancel",function(){n=!1,c=0})),l.trigger("resize_scroll.xdsoft_scroller",[D])):l.find(".xdsoft_scrollbar").hide()})},L.fn.datetimepicker=function(H,a){var n,r,o=this,p=17,D=13,y=27,v=37,b=38,k=39,x=40,T=9,S=116,M=65,w=67,j=86,J=90,z=89,I=!1,N=L.isPlainObject(H)||!H?L.extend(!0,{},s,H):L.extend(!0,{},s),i=0;return n=function(O){var t,n,a,r,W,h,_=L('<div class="xdsoft_datetimepicker xdsoft_noselect"></div>'),e=L('<div class="xdsoft_copyright"><a target="_blank" href="http://xdsoft.net/jqplugins/datetimepicker/">xdsoft.net</a></div>'),g=L('<div class="xdsoft_datepicker active"></div>'),F=L('<div class="xdsoft_monthpicker"><button type="button" class="xdsoft_prev"></button><button type="button" class="xdsoft_today_button"></button><div class="xdsoft_label xdsoft_month"><span></span><i></i></div><div class="xdsoft_label xdsoft_year"><span></span><i></i></div><button type="button" class="xdsoft_next"></button></div>'),C=L('<div class="xdsoft_calendar"></div>'),o=L('<div class="xdsoft_timepicker active"><button type="button" class="xdsoft_prev"></button><div class="xdsoft_time_box"></div><button type="button" class="xdsoft_next"></button></div>'),u=o.find(".xdsoft_time_box").eq(0),P=L('<div class="xdsoft_time_variant"></div>'),i=L('<button type="button" class="xdsoft_save_selected blue-gradient-button">Save Selected</button>'),Y=L('<div class="xdsoft_select xdsoft_monthselect"><div></div></div>'),A=L('<div class="xdsoft_select xdsoft_yearselect"><div></div></div>'),s=!1,d=0;N.id&&_.attr("id",N.id),N.style&&_.attr("style",N.style),N.weeks&&_.addClass("xdsoft_showweeks"),N.rtl&&_.addClass("xdsoft_rtl"),_.addClass("xdsoft_"+N.theme),_.addClass(N.className),F.find(".xdsoft_month span").after(Y),F.find(".xdsoft_year span").after(A),F.find(".xdsoft_month,.xdsoft_year").on("touchstart mousedown.xdsoft",function(e){var t,a,n=L(this).find(".xdsoft_select").eq(0),r=0,o=0,i=n.is(":visible");for(F.find(".xdsoft_select").hide(),W.currentTime&&(r=W.currentTime[L(this).hasClass("xdsoft_month")?"getMonth":"getFullYear"]()),n[i?"hide":"show"](),t=n.find("div.xdsoft_option"),a=0;a<t.length&&t.eq(a).data("value")!==r;a+=1)o+=t[0].offsetHeight;return n.xdsoftScroller(N,o/(n.children()[0].offsetHeight-n[0].clientHeight)),e.stopPropagation(),!1});var l=function(e){var t=e.originalEvent,a=t.touches?t.touches[0]:t;this.touchStartPosition=this.touchStartPosition||a;var n=Math.abs(this.touchStartPosition.clientX-a.clientX),r=Math.abs(this.touchStartPosition.clientY-a.clientY);Math.sqrt(n*n+r*r)>N.touchMovedThreshold&&(this.touchMoved=!0)};function f(){var e,t=!1;return N.startDate?t=W.strToDate(N.startDate):(t=N.value||(O&&O.val&&O.val()?O.val():""))?(t=W.strToDateTime(t),N.yearOffset&&(t=new Date(t.getFullYear()-N.yearOffset,t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()))):N.defaultDate&&(t=W.strToDateTime(N.defaultDate),N.defaultTime&&(e=W.strtotime(N.defaultTime),t.setHours(e.getHours()),t.setMinutes(e.getMinutes()))),t&&W.isValidDate(t)?_.data("changed",!0):t="",t||0}function c(m){var h=function(e,t){var a=e.replace(/([\[\]\/\{\}\(\)\-\.\+]{1})/g,"\\$1").replace(/_/g,"{digit+}").replace(/([0-9]{1})/g,"{digit$1}").replace(/\{digit([0-9]{1})\}/g,"[0-$1_]{1}").replace(/\{digit[\+]\}/g,"[0-9_]{1}");return new RegExp(a).test(t)},g=function(e,t){if(!(e="string"==typeof e||e instanceof String?m.ownerDocument.getElementById(e):e))return!1;if(e.createTextRange){var a=e.createTextRange();return a.collapse(!0),a.moveEnd("character",t),a.moveStart("character",t),a.select(),!0}return!!e.setSelectionRange&&(e.setSelectionRange(t,t),!0)};m.mask&&O.off("keydown.xdsoft"),!0===m.mask&&(E.formatMask?m.mask=E.formatMask(m.format):m.mask=m.format.replace(/Y/g,"9999").replace(/F/g,"9999").replace(/m/g,"19").replace(/d/g,"39").replace(/H/g,"29").replace(/i/g,"59").replace(/s/g,"59")),"string"===L.type(m.mask)&&(h(m.mask,O.val())||(O.val(m.mask.replace(/[0-9]/g,"_")),g(O[0],0)),O.on("paste.xdsoft",function(e){var t=(e.clipboardData||e.originalEvent.clipboardData||window.clipboardData).getData("text"),a=this.value,n=this.selectionStart;return a=a.substr(0,n)+t+a.substr(n+t.length),n+=t.length,h(m.mask,a)?(this.value=a,g(this,n)):""===L.trim(a)?this.value=m.mask.replace(/[0-9]/g,"_"):O.trigger("error_input.xdsoft"),e.preventDefault(),!1}),O.on("keydown.xdsoft",function(e){var t,a=this.value,n=e.which,r=this.selectionStart,o=this.selectionEnd,i=r!==o;if(48<=n&&n<=57||96<=n&&n<=105||8===n||46===n){for(t=8===n||46===n?"_":String.fromCharCode(96<=n&&n<=105?n-48:n),8===n&&r&&!i&&(r-=1);;){var s=m.mask.substr(r,1),d=r<m.mask.length,u=0<r;if(!(/[^0-9_]/.test(s)&&d&&u))break;r+=8!==n||i?1:-1}if(e.metaKey&&(i=!(r=0)),i){var l=o-r,f=m.mask.replace(/[0-9]/g,"_"),c=f.substr(r,l).substr(1);a=a.substr(0,r)+(t+c)+a.substr(r+l)}else{a=a.substr(0,r)+t+a.substr(r+1)}if(""===L.trim(a))a=f;else if(r===m.mask.length)return e.preventDefault(),!1;for(r+=8===n?0:1;/[^0-9_]/.test(m.mask.substr(r,1))&&r<m.mask.length&&0<r;)r+=8===n?0:1;h(m.mask,a)?(this.value=a,g(this,r)):""===L.trim(a)?this.value=m.mask.replace(/[0-9]/g,"_"):O.trigger("error_input.xdsoft")}else if(-1!==[M,w,j,J,z].indexOf(n)&&I||-1!==[y,b,x,v,k,S,p,T,D].indexOf(n))return!0;return e.preventDefault(),!1}))}F.find(".xdsoft_select").xdsoftScroller(N).on("touchstart mousedown.xdsoft",function(e){var t=e.originalEvent;this.touchMoved=!1,this.touchStartPosition=t.touches?t.touches[0]:t,e.stopPropagation(),e.preventDefault()}).on("touchmove",".xdsoft_option",l).on("touchend mousedown.xdsoft",".xdsoft_option",function(){if(!this.touchMoved){void 0!==W.currentTime&&null!==W.currentTime||(W.currentTime=W.now());var e=W.currentTime.getFullYear();W&&W.currentTime&&W.currentTime[L(this).parent().parent().hasClass("xdsoft_monthselect")?"setMonth":"setFullYear"](L(this).data("value")),L(this).parent().parent().hide(),_.trigger("xchange.xdsoft"),N.onChangeMonth&&L.isFunction(N.onChangeMonth)&&N.onChangeMonth.call(_,W.currentTime,_.data("input")),e!==W.currentTime.getFullYear()&&L.isFunction(N.onChangeYear)&&N.onChangeYear.call(_,W.currentTime,_.data("input"))}}),_.getValue=function(){return W.getCurrentTime()},_.setOptions=function(e){var l={};N=L.extend(!0,{},N,e),e.allowTimes&&L.isArray(e.allowTimes)&&e.allowTimes.length&&(N.allowTimes=L.extend(!0,[],e.allowTimes)),e.weekends&&L.isArray(e.weekends)&&e.weekends.length&&(N.weekends=L.extend(!0,[],e.weekends)),e.allowDates&&L.isArray(e.allowDates)&&e.allowDates.length&&(N.allowDates=L.extend(!0,[],e.allowDates)),e.allowDateRe&&"[object String]"===Object.prototype.toString.call(e.allowDateRe)&&(N.allowDateRe=new RegExp(e.allowDateRe)),e.highlightedDates&&L.isArray(e.highlightedDates)&&e.highlightedDates.length&&(L.each(e.highlightedDates,function(e,t){var a,n=L.map(t.split(","),L.trim),r=new m(E.parseDate(n[0],N.formatDate),n[1],n[2]),o=E.formatDate(r.date,N.formatDate);void 0!==l[o]?(a=l[o].desc)&&a.length&&r.desc&&r.desc.length&&(l[o].desc=a+"\n"+r.desc):l[o]=r}),N.highlightedDates=L.extend(!0,[],l)),e.highlightedPeriods&&L.isArray(e.highlightedPeriods)&&e.highlightedPeriods.length&&(l=L.extend(!0,[],N.highlightedDates),L.each(e.highlightedPeriods,function(e,t){var a,n,r,o,i,s,d;if(L.isArray(t))a=t[0],n=t[1],r=t[2],d=t[3];else{var u=L.map(t.split(","),L.trim);a=E.parseDate(u[0],N.formatDate),n=E.parseDate(u[1],N.formatDate),r=u[2],d=u[3]}for(;a<=n;)o=new m(a,r,d),i=E.formatDate(a,N.formatDate),a.setDate(a.getDate()+1),void 0!==l[i]?(s=l[i].desc)&&s.length&&o.desc&&o.desc.length&&(l[i].desc=s+"\n"+o.desc):l[i]=o}),N.highlightedDates=L.extend(!0,[],l)),e.disabledDates&&L.isArray(e.disabledDates)&&e.disabledDates.length&&(N.disabledDates=L.extend(!0,[],e.disabledDates)),e.disabledWeekDays&&L.isArray(e.disabledWeekDays)&&e.disabledWeekDays.length&&(N.disabledWeekDays=L.extend(!0,[],e.disabledWeekDays)),!N.open&&!N.opened||N.inline||O.trigger("open.xdsoft"),N.inline&&(s=!0,_.addClass("xdsoft_inline"),O.after(_).hide()),N.inverseButton&&(N.next="xdsoft_prev",N.prev="xdsoft_next"),N.datepicker?g.addClass("active"):g.removeClass("active"),N.timepicker?o.addClass("active"):o.removeClass("active"),N.value&&(W.setCurrentTime(N.value),O&&O.val&&O.val(W.str)),isNaN(N.dayOfWeekStart)?N.dayOfWeekStart=0:N.dayOfWeekStart=parseInt(N.dayOfWeekStart,10)%7,N.timepickerScrollbar||u.xdsoftScroller(N,"hide"),N.minDate&&/^[\+\-](.*)$/.test(N.minDate)&&(N.minDate=E.formatDate(W.strToDateTime(N.minDate),N.formatDate)),N.maxDate&&/^[\+\-](.*)$/.test(N.maxDate)&&(N.maxDate=E.formatDate(W.strToDateTime(N.maxDate),N.formatDate)),N.minDateTime&&/^\+(.*)$/.test(N.minDateTime)&&(N.minDateTime=W.strToDateTime(N.minDateTime).dateFormat(N.formatDate)),N.maxDateTime&&/^\+(.*)$/.test(N.maxDateTime)&&(N.maxDateTime=W.strToDateTime(N.maxDateTime).dateFormat(N.formatDate)),i.toggle(N.showApplyButton),F.find(".xdsoft_today_button").css("visibility",N.todayButton?"visible":"hidden"),F.find("."+N.prev).css("visibility",N.prevButton?"visible":"hidden"),F.find("."+N.next).css("visibility",N.nextButton?"visible":"hidden"),c(N),N.validateOnBlur&&O.off("blur.xdsoft").on("blur.xdsoft",function(){if(N.allowBlank&&(!L.trim(L(this).val()).length||"string"==typeof N.mask&&L.trim(L(this).val())===N.mask.replace(/[0-9]/g,"_")))L(this).val(null),_.data("xdsoft_datetime").empty();else{var e=E.parseDate(L(this).val(),N.format);if(e)L(this).val(E.formatDate(e,N.format));else{var t=+[L(this).val()[0],L(this).val()[1]].join(""),a=+[L(this).val()[2],L(this).val()[3]].join("");!N.datepicker&&N.timepicker&&0<=t&&t<24&&0<=a&&a<60?L(this).val([t,a].map(function(e){return 9<e?e:"0"+e}).join(":")):L(this).val(E.formatDate(W.now(),N.format))}_.data("xdsoft_datetime").setCurrentTime(L(this).val())}_.trigger("changedatetime.xdsoft"),_.trigger("close.xdsoft")}),N.dayOfWeekStartPrev=0===N.dayOfWeekStart?6:N.dayOfWeekStart-1,_.trigger("xchange.xdsoft").trigger("afterOpen.xdsoft")},_.data("options",N).on("touchstart mousedown.xdsoft",function(e){return e.stopPropagation(),e.preventDefault(),A.hide(),Y.hide(),!1}),u.append(P),u.xdsoftScroller(N),_.on("afterOpen.xdsoft",function(){u.xdsoftScroller(N)}),_.append(g).append(o),!0!==N.withoutCopyright&&_.append(e),g.append(F).append(C).append(i),N.insideParent?L(O).parent().append(_):L(N.parentID).append(_),W=new function(){var r=this;r.now=function(e){var t,a,n=new Date;return!e&&N.defaultDate&&(t=r.strToDateTime(N.defaultDate),n.setFullYear(t.getFullYear()),n.setMonth(t.getMonth()),n.setDate(t.getDate())),n.setFullYear(n.getFullYear()),!e&&N.defaultTime&&(a=r.strtotime(N.defaultTime),n.setHours(a.getHours()),n.setMinutes(a.getMinutes()),n.setSeconds(a.getSeconds()),n.setMilliseconds(a.getMilliseconds())),n},r.isValidDate=function(e){return"[object Date]"===Object.prototype.toString.call(e)&&!isNaN(e.getTime())},r.setCurrentTime=function(e,t){"string"==typeof e?r.currentTime=r.strToDateTime(e):r.isValidDate(e)?r.currentTime=e:e||t||!N.allowBlank||N.inline?r.currentTime=r.now():r.currentTime=null,_.trigger("xchange.xdsoft")},r.empty=function(){r.currentTime=null},r.getCurrentTime=function(){return r.currentTime},r.nextMonth=function(){void 0!==r.currentTime&&null!==r.currentTime||(r.currentTime=r.now());var e,t=r.currentTime.getMonth()+1;return 12===t&&(r.currentTime.setFullYear(r.currentTime.getFullYear()+1),t=0),e=r.currentTime.getFullYear(),r.currentTime.setDate(Math.min(new Date(r.currentTime.getFullYear(),t+1,0).getDate(),r.currentTime.getDate())),r.currentTime.setMonth(t),N.onChangeMonth&&L.isFunction(N.onChangeMonth)&&N.onChangeMonth.call(_,W.currentTime,_.data("input")),e!==r.currentTime.getFullYear()&&L.isFunction(N.onChangeYear)&&N.onChangeYear.call(_,W.currentTime,_.data("input")),_.trigger("xchange.xdsoft"),t},r.prevMonth=function(){void 0!==r.currentTime&&null!==r.currentTime||(r.currentTime=r.now());var e=r.currentTime.getMonth()-1;return-1===e&&(r.currentTime.setFullYear(r.currentTime.getFullYear()-1),e=11),r.currentTime.setDate(Math.min(new Date(r.currentTime.getFullYear(),e+1,0).getDate(),r.currentTime.getDate())),r.currentTime.setMonth(e),N.onChangeMonth&&L.isFunction(N.onChangeMonth)&&N.onChangeMonth.call(_,W.currentTime,_.data("input")),_.trigger("xchange.xdsoft"),e},r.getWeekOfYear=function(e){if(N.onGetWeekOfYear&&L.isFunction(N.onGetWeekOfYear)){var t=N.onGetWeekOfYear.call(_,e);if(void 0!==t)return t}var a=new Date(e.getFullYear(),0,1);return 4!==a.getDay()&&a.setMonth(0,1+(4-a.getDay()+7)%7),Math.ceil(((e-a)/864e5+a.getDay()+1)/7)},r.strToDateTime=function(e){var t,a,n=[];return e&&e instanceof Date&&r.isValidDate(e)?e:((n=/^([+-]{1})(.*)$/.exec(e))&&(n[2]=E.parseDate(n[2],N.formatDate)),a=n&&n[2]?(t=n[2].getTime()-6e4*n[2].getTimezoneOffset(),new Date(r.now(!0).getTime()+parseInt(n[1]+"1",10)*t)):e?E.parseDate(e,N.format):r.now(),r.isValidDate(a)||(a=r.now()),a)},r.strToDate=function(e){if(e&&e instanceof Date&&r.isValidDate(e))return e;var t=e?E.parseDate(e,N.formatDate):r.now(!0);return r.isValidDate(t)||(t=r.now(!0)),t},r.strtotime=function(e){if(e&&e instanceof Date&&r.isValidDate(e))return e;var t=e?E.parseDate(e,N.formatTime):r.now(!0);return r.isValidDate(t)||(t=r.now(!0)),t},r.str=function(){var e=N.format;return N.yearOffset&&(e=(e=e.replace("Y",r.currentTime.getFullYear()+N.yearOffset)).replace("y",String(r.currentTime.getFullYear()+N.yearOffset).substring(2,4))),E.formatDate(r.currentTime,e)},r.currentTime=this.now()},i.on("touchend click",function(e){e.preventDefault(),_.data("changed",!0),W.setCurrentTime(f()),O.val(W.str()),_.trigger("close.xdsoft")}),F.find(".xdsoft_today_button").on("touchend mousedown.xdsoft",function(){_.data("changed",!0),W.setCurrentTime(0,!0),_.trigger("afterOpen.xdsoft")}).on("dblclick.xdsoft",function(){var e,t,a=W.getCurrentTime();a=new Date(a.getFullYear(),a.getMonth(),a.getDate()),e=W.strToDate(N.minDate),a<(e=new Date(e.getFullYear(),e.getMonth(),e.getDate()))||(t=W.strToDate(N.maxDate),(t=new Date(t.getFullYear(),t.getMonth(),t.getDate()))<a||(O.val(W.str()),O.trigger("change"),_.trigger("close.xdsoft")))}),F.find(".xdsoft_prev,.xdsoft_next").on("touchend mousedown.xdsoft",function(){var a=L(this),n=0,r=!1;!function e(t){a.hasClass(N.next)?W.nextMonth():a.hasClass(N.prev)&&W.prevMonth(),N.monthChangeSpinner&&(r||(n=setTimeout(e,t||100)))}(500),L([N.ownerDocument.body,N.contentWindow]).on("touchend mouseup.xdsoft",function e(){clearTimeout(n),r=!0,L([N.ownerDocument.body,N.contentWindow]).off("touchend mouseup.xdsoft",e)})}),o.find(".xdsoft_prev,.xdsoft_next").on("touchend mousedown.xdsoft",function(){var o=L(this),i=0,s=!1,d=110;!function e(t){var a=u[0].clientHeight,n=P[0].offsetHeight,r=Math.abs(parseInt(P.css("marginTop"),10));o.hasClass(N.next)&&n-a-N.timeHeightInTimePicker>=r?P.css("marginTop","-"+(r+N.timeHeightInTimePicker)+"px"):o.hasClass(N.prev)&&0<=r-N.timeHeightInTimePicker&&P.css("marginTop","-"+(r-N.timeHeightInTimePicker)+"px"),u.trigger("scroll_element.xdsoft_scroller",[Math.abs(parseInt(P[0].style.marginTop,10)/(n-a))]),d=10<d?10:d-10,s||(i=setTimeout(e,t||d))}(500),L([N.ownerDocument.body,N.contentWindow]).on("touchend mouseup.xdsoft",function e(){clearTimeout(i),s=!0,L([N.ownerDocument.body,N.contentWindow]).off("touchend mouseup.xdsoft",e)})}),t=0,_.on("xchange.xdsoft",function(e){clearTimeout(t),t=setTimeout(function(){void 0!==W.currentTime&&null!==W.currentTime||(W.currentTime=W.now());for(var e,t,a,n,r,o,i,s,d,u,l="",f=new Date(W.currentTime.getFullYear(),W.currentTime.getMonth(),1,12,0,0),c=0,m=W.now(),h=!1,g=!1,p=!1,D=!1,y=[],v=!0,b="";f.getDay()!==N.dayOfWeekStart;)f.setDate(f.getDate()-1);for(l+="<table><thead><tr>",N.weeks&&(l+="<th></th>"),e=0;e<7;e+=1)l+="<th>"+N.i18n[R].dayOfWeekShort[(e+N.dayOfWeekStart)%7]+"</th>";for(l+="</tr></thead>",l+="<tbody>",!1!==N.maxDate&&(h=W.strToDate(N.maxDate),h=new Date(h.getFullYear(),h.getMonth(),h.getDate(),23,59,59,999)),!1!==N.minDate&&(g=W.strToDate(N.minDate),g=new Date(g.getFullYear(),g.getMonth(),g.getDate())),!1!==N.minDateTime&&(p=W.strToDate(N.minDateTime),p=new Date(p.getFullYear(),p.getMonth(),p.getDate(),p.getHours(),p.getMinutes(),p.getSeconds())),!1!==N.maxDateTime&&(D=W.strToDate(N.maxDateTime),D=new Date(D.getFullYear(),D.getMonth(),D.getDate(),D.getHours(),D.getMinutes(),D.getSeconds())),!1!==D&&(u=31*(12*D.getFullYear()+D.getMonth())+D.getDate());c<W.currentTime.countDaysInMonth()||f.getDay()!==N.dayOfWeekStart||W.currentTime.getMonth()===f.getMonth();){y=[],c+=1,a=f.getDay(),n=f.getDate(),r=f.getFullYear(),M=f.getMonth(),o=W.getWeekOfYear(f),d="",y.push("xdsoft_date"),i=N.beforeShowDay&&L.isFunction(N.beforeShowDay.call)?N.beforeShowDay.call(_,f):null,N.allowDateRe&&"[object RegExp]"===Object.prototype.toString.call(N.allowDateRe)&&(N.allowDateRe.test(E.formatDate(f,N.formatDate))||y.push("xdsoft_disabled")),N.allowDates&&0<N.allowDates.length&&-1===N.allowDates.indexOf(E.formatDate(f,N.formatDate))&&y.push("xdsoft_disabled");var k=31*(12*f.getFullYear()+f.getMonth())+f.getDate();(!1!==h&&h<f||!1!==p&&f<p||!1!==g&&f<g||!1!==D&&u<k||i&&!1===i[0])&&y.push("xdsoft_disabled"),-1!==N.disabledDates.indexOf(E.formatDate(f,N.formatDate))&&y.push("xdsoft_disabled"),-1!==N.disabledWeekDays.indexOf(a)&&y.push("xdsoft_disabled"),O.is("[disabled]")&&y.push("xdsoft_disabled"),i&&""!==i[1]&&y.push(i[1]),W.currentTime.getMonth()!==M&&y.push("xdsoft_other_month"),(N.defaultSelect||_.data("changed"))&&E.formatDate(W.currentTime,N.formatDate)===E.formatDate(f,N.formatDate)&&y.push("xdsoft_current"),E.formatDate(m,N.formatDate)===E.formatDate(f,N.formatDate)&&y.push("xdsoft_today"),0!==f.getDay()&&6!==f.getDay()&&-1===N.weekends.indexOf(E.formatDate(f,N.formatDate))||y.push("xdsoft_weekend"),void 0!==N.highlightedDates[E.formatDate(f,N.formatDate)]&&(t=N.highlightedDates[E.formatDate(f,N.formatDate)],y.push(void 0===t.style?"xdsoft_highlighted_default":t.style),d=void 0===t.desc?"":t.desc),N.beforeShowDay&&L.isFunction(N.beforeShowDay)&&y.push(N.beforeShowDay(f)),v&&(l+="<tr>",v=!1,N.weeks&&(l+="<th>"+o+"</th>")),l+='<td data-date="'+n+'" data-month="'+M+'" data-year="'+r+'" class="xdsoft_date xdsoft_day_of_week'+f.getDay()+" "+y.join(" ")+'" title="'+d+'"><div>'+n+"</div></td>",f.getDay()===N.dayOfWeekStartPrev&&(l+="</tr>",v=!0),f.setDate(n+1)}l+="</tbody></table>",C.html(l),F.find(".xdsoft_label span").eq(0).text(N.i18n[R].months[W.currentTime.getMonth()]),F.find(".xdsoft_label span").eq(1).text(W.currentTime.getFullYear()+N.yearOffset),M=b="";var x=0;if(!1!==N.minTime){var T=W.strtotime(N.minTime);x=60*T.getHours()+T.getMinutes()}var S=1440;if(!1!==N.maxTime){T=W.strtotime(N.maxTime);S=60*T.getHours()+T.getMinutes()}if(!1!==N.minDateTime){T=W.strToDateTime(N.minDateTime);if(E.formatDate(W.currentTime,N.formatDate)===E.formatDate(T,N.formatDate)){var M=60*T.getHours()+T.getMinutes();x<M&&(x=M)}}if(!1!==N.maxDateTime){T=W.strToDateTime(N.maxDateTime);if(E.formatDate(W.currentTime,N.formatDate)===E.formatDate(T,N.formatDate))(M=60*T.getHours()+T.getMinutes())<S&&(S=M)}if(s=function(e,t){var a,n=W.now(),r=N.allowTimes&&L.isArray(N.allowTimes)&&N.allowTimes.length;n.setHours(e),e=parseInt(n.getHours(),10),n.setMinutes(t),t=parseInt(n.getMinutes(),10),y=[];var o=60*e+t;(O.is("[disabled]")||S<=o||o<x)&&y.push("xdsoft_disabled"),(a=new Date(W.currentTime)).setHours(parseInt(W.currentTime.getHours(),10)),r||a.setMinutes(Math[N.roundTime](W.currentTime.getMinutes()/N.step)*N.step),(N.initTime||N.defaultSelect||_.data("changed"))&&a.getHours()===parseInt(e,10)&&(!r&&59<N.step||a.getMinutes()===parseInt(t,10))&&(N.defaultSelect||_.data("changed")?y.push("xdsoft_current"):N.initTime&&y.push("xdsoft_init_time")),parseInt(m.getHours(),10)===parseInt(e,10)&&parseInt(m.getMinutes(),10)===parseInt(t,10)&&y.push("xdsoft_today"),b+='<div class="xdsoft_time '+y.join(" ")+'" data-hour="'+e+'" data-minute="'+t+'">'+E.formatDate(n,N.formatTime)+"</div>"},N.allowTimes&&L.isArray(N.allowTimes)&&N.allowTimes.length)for(c=0;c<N.allowTimes.length;c+=1)s(W.strtotime(N.allowTimes[c]).getHours(),M=W.strtotime(N.allowTimes[c]).getMinutes());else for(e=c=0;c<(N.hours12?12:24);c+=1)for(e=0;e<60;e+=N.step){var w=60*c+e;w<x||(S<=w||s((c<10?"0":"")+c,M=(e<10?"0":"")+e))}for(P.html(b),H="",c=parseInt(N.yearStart,10);c<=parseInt(N.yearEnd,10);c+=1)H+='<div class="xdsoft_option '+(W.currentTime.getFullYear()===c?"xdsoft_current":"")+'" data-value="'+c+'">'+(c+N.yearOffset)+"</div>";for(A.children().eq(0).html(H),c=parseInt(N.monthStart,10),H="";c<=parseInt(N.monthEnd,10);c+=1)H+='<div class="xdsoft_option '+(W.currentTime.getMonth()===c?"xdsoft_current":"")+'" data-value="'+c+'">'+N.i18n[R].months[c]+"</div>";Y.children().eq(0).html(H),L(_).trigger("generate.xdsoft")},10),e.stopPropagation()}).on("afterOpen.xdsoft",function(){var e,t,a,n;N.timepicker&&(P.find(".xdsoft_current").length?e=".xdsoft_current":P.find(".xdsoft_init_time").length&&(e=".xdsoft_init_time"),e?(t=u[0].clientHeight,(a=P[0].offsetHeight)-t<(n=P.find(e).index()*N.timeHeightInTimePicker+1)&&(n=a-t),u.trigger("scroll_element.xdsoft_scroller",[parseInt(n,10)/(a-t)])):u.trigger("scroll_element.xdsoft_scroller",[0]))}),n=0,C.on("touchend click.xdsoft","td",function(e){e.stopPropagation(),n+=1;var t=L(this),a=W.currentTime;if(null==a&&(W.currentTime=W.now(),a=W.currentTime),t.hasClass("xdsoft_disabled"))return!1;a.setDate(1),a.setFullYear(t.data("year")),a.setMonth(t.data("month")),a.setDate(t.data("date")),_.trigger("select.xdsoft",[a]),O.val(W.str()),N.onSelectDate&&L.isFunction(N.onSelectDate)&&N.onSelectDate.call(_,W.currentTime,_.data("input"),e),_.data("changed",!0),_.trigger("xchange.xdsoft"),_.trigger("changedatetime.xdsoft"),(1<n||!0===N.closeOnDateSelect||!1===N.closeOnDateSelect&&!N.timepicker)&&!N.inline&&_.trigger("close.xdsoft"),setTimeout(function(){n=0},200)}),P.on("touchstart","div",function(e){this.touchMoved=!1}).on("touchmove","div",l).on("touchend click.xdsoft","div",function(e){if(!this.touchMoved){e.stopPropagation();var t=L(this),a=W.currentTime;if(null==a&&(W.currentTime=W.now(),a=W.currentTime),t.hasClass("xdsoft_disabled"))return!1;a.setHours(t.data("hour")),a.setMinutes(t.data("minute")),_.trigger("select.xdsoft",[a]),_.data("input").val(W.str()),N.onSelectTime&&L.isFunction(N.onSelectTime)&&N.onSelectTime.call(_,W.currentTime,_.data("input"),e),_.data("changed",!0),_.trigger("xchange.xdsoft"),_.trigger("changedatetime.xdsoft"),!0!==N.inline&&!0===N.closeOnTimeSelect&&_.trigger("close.xdsoft")}}),g.on("mousewheel.xdsoft",function(e){return!N.scrollMonth||(e.deltaY<0?W.nextMonth():W.prevMonth(),!1)}),O.on("mousewheel.xdsoft",function(e){return!N.scrollInput||(!N.datepicker&&N.timepicker?(0<=(a=P.find(".xdsoft_current").length?P.find(".xdsoft_current").eq(0).index():0)+e.deltaY&&a+e.deltaY<P.children().length&&(a+=e.deltaY),P.children().eq(a).length&&P.children().eq(a).trigger("mousedown"),!1):N.datepicker&&!N.timepicker?(g.trigger(e,[e.deltaY,e.deltaX,e.deltaY]),O.val&&O.val(W.str()),_.trigger("changedatetime.xdsoft"),!1):void 0)}),_.on("changedatetime.xdsoft",function(e){if(N.onChangeDateTime&&L.isFunction(N.onChangeDateTime)){var t=_.data("input");N.onChangeDateTime.call(_,W.currentTime,t,e),delete N.value,t.trigger("change")}}).on("generate.xdsoft",function(){N.onGenerate&&L.isFunction(N.onGenerate)&&N.onGenerate.call(_,W.currentTime,_.data("input")),s&&(_.trigger("afterOpen.xdsoft"),s=!1)}).on("click.xdsoft",function(e){e.stopPropagation()}),a=0,h=function(e,t){do{if(!(e=e.parentNode)||!1===t(e))break}while("HTML"!==e.nodeName)},r=function(){var e,t,a,n,r,o,i,s,d,u,l,f,c;if(e=(s=_.data("input")).offset(),t=s[0],u="top",a=e.top+t.offsetHeight-1,n=e.left,r="absolute",d=L(N.contentWindow).width(),f=L(N.contentWindow).height(),c=L(N.contentWindow).scrollTop(),N.ownerDocument.documentElement.clientWidth-e.left<g.parent().outerWidth(!0)){var m=g.parent().outerWidth(!0)-t.offsetWidth;n-=m}"rtl"===s.parent().css("direction")&&(n-=_.outerWidth()-s.outerWidth()),N.fixed?(a-=c,n-=L(N.contentWindow).scrollLeft(),r="fixed"):(i=!1,h(t,function(e){return null!==e&&("fixed"===N.contentWindow.getComputedStyle(e).getPropertyValue("position")?!(i=!0):void 0)}),i&&!N.insideParent?(r="fixed",a+_.outerHeight()>f+c?(u="bottom",a=f+c-e.top):a-=c):a+_[0].offsetHeight>f+c&&(a=e.top-_[0].offsetHeight+1),a<0&&(a=0),n+t.offsetWidth>d&&(n=d-t.offsetWidth)),o=_[0],h(o,function(e){if("relative"===N.contentWindow.getComputedStyle(e).getPropertyValue("position")&&d>=e.offsetWidth)return n-=(d-e.offsetWidth)/2,!1}),l={position:r,left:N.insideParent?t.offsetLeft:n,top:"",bottom:""},N.insideParent?l[u]=t.offsetTop+t.offsetHeight:l[u]=a,_.css(l)},_.on("open.xdsoft",function(e){var t=!0;N.onShow&&L.isFunction(N.onShow)&&(t=N.onShow.call(_,W.currentTime,_.data("input"),e)),!1!==t&&(_.show(),r(),L(N.contentWindow).off("resize.xdsoft",r).on("resize.xdsoft",r),N.closeOnWithoutClick&&L([N.ownerDocument.body,N.contentWindow]).on("touchstart mousedown.xdsoft",function e(){_.trigger("close.xdsoft"),L([N.ownerDocument.body,N.contentWindow]).off("touchstart mousedown.xdsoft",e)}))}).on("close.xdsoft",function(e){var t=!0;F.find(".xdsoft_month,.xdsoft_year").find(".xdsoft_select").hide(),N.onClose&&L.isFunction(N.onClose)&&(t=N.onClose.call(_,W.currentTime,_.data("input"),e)),!1===t||N.opened||N.inline||_.hide(),e.stopPropagation()}).on("toggle.xdsoft",function(){_.is(":visible")?_.trigger("close.xdsoft"):_.trigger("open.xdsoft")}).data("input",O),d=0,_.data("xdsoft_datetime",W),_.setOptions(N),W.setCurrentTime(f()),O.data("xdsoft_datetimepicker",_).on("open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart",function(){O.is(":disabled")||O.data("xdsoft_datetimepicker").is(":visible")&&N.closeOnInputClick||N.openOnFocus&&(clearTimeout(d),d=setTimeout(function(){O.is(":disabled")||(s=!0,W.setCurrentTime(f(),!0),N.mask&&c(N),_.trigger("open.xdsoft"))},100))}).on("keydown.xdsoft",function(e){var t,a=e.which;return-1!==[D].indexOf(a)&&N.enterLikeTab?(t=L("input:visible,textarea:visible,button:visible,a:visible"),_.trigger("close.xdsoft"),t.eq(t.index(this)+1).focus(),!1):-1!==[T].indexOf(a)?(_.trigger("close.xdsoft"),!0):void 0}).on("blur.xdsoft",function(){_.trigger("close.xdsoft")})},r=function(e){var t=e.data("xdsoft_datetimepicker");t&&(t.data("xdsoft_datetime",null),t.remove(),e.data("xdsoft_datetimepicker",null).off(".xdsoft"),L(N.contentWindow).off("resize.xdsoft"),L([N.contentWindow,N.ownerDocument.body]).off("mousedown.xdsoft touchstart"),e.unmousewheel&&e.unmousewheel())},L(N.ownerDocument).off("keydown.xdsoftctrl keyup.xdsoftctrl").off("keydown.xdsoftcmd keyup.xdsoftcmd").on("keydown.xdsoftctrl",function(e){e.keyCode===p&&(I=!0)}).on("keyup.xdsoftctrl",function(e){e.keyCode===p&&(I=!1)}).on("keydown.xdsoftcmd",function(e){91===e.keyCode&&!0}).on("keyup.xdsoftcmd",function(e){91===e.keyCode&&!1}),this.each(function(){var t,e=L(this).data("xdsoft_datetimepicker");if(e){if("string"===L.type(H))switch(H){case"show":L(this).select().focus(),e.trigger("open.xdsoft");break;case"hide":e.trigger("close.xdsoft");break;case"toggle":e.trigger("toggle.xdsoft");break;case"destroy":r(L(this));break;case"reset":this.value=this.defaultValue,this.value&&e.data("xdsoft_datetime").isValidDate(E.parseDate(this.value,N.format))||e.data("changed",!1),e.data("xdsoft_datetime").setCurrentTime(this.value);break;case"validate":e.data("input").trigger("blur.xdsoft");break;default:e[H]&&L.isFunction(e[H])&&(o=e[H](a))}else e.setOptions(H);return 0}"string"!==L.type(H)&&(!N.lazyInit||N.open||N.inline?n(L(this)):(t=L(this)).on("open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart",function e(){t.is(":disabled")||t.data("xdsoft_datetimepicker")||(clearTimeout(i),i=setTimeout(function(){t.data("xdsoft_datetimepicker")||n(t),t.off("open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart",e).trigger("open.xdsoft")},100))}))}),o},L.fn.datetimepicker.defaults=s};!function(e){"function"==typeof define&&define.amd?define(["jquery","jquery-mousewheel"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(datetimepickerFactory),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e:e(jQuery)}(function(c){var m,h,e=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],t="onwheel"in document||9<=document.documentMode?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],g=Array.prototype.slice;if(c.event.fixHooks)for(var a=e.length;a;)c.event.fixHooks[e[--a]]=c.event.mouseHooks;var p=c.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var e=t.length;e;)this.addEventListener(t[--e],n,!1);else this.onmousewheel=n;c.data(this,"mousewheel-line-height",p.getLineHeight(this)),c.data(this,"mousewheel-page-height",p.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var e=t.length;e;)this.removeEventListener(t[--e],n,!1);else this.onmousewheel=null;c.removeData(this,"mousewheel-line-height"),c.removeData(this,"mousewheel-page-height")},getLineHeight:function(e){var t=c(e),a=t["offsetParent"in c.fn?"offsetParent":"parent"]();return a.length||(a=c("body")),parseInt(a.css("fontSize"),10)||parseInt(t.css("fontSize"),10)||16},getPageHeight:function(e){return c(e).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};function n(e){var t,a=e||window.event,n=g.call(arguments,1),r=0,o=0,i=0,s=0,d=0;if((e=c.event.fix(a)).type="mousewheel","detail"in a&&(i=-1*a.detail),"wheelDelta"in a&&(i=a.wheelDelta),"wheelDeltaY"in a&&(i=a.wheelDeltaY),"wheelDeltaX"in a&&(o=-1*a.wheelDeltaX),"axis"in a&&a.axis===a.HORIZONTAL_AXIS&&(o=-1*i,i=0),r=0===i?o:i,"deltaY"in a&&(r=i=-1*a.deltaY),"deltaX"in a&&(o=a.deltaX,0===i&&(r=-1*o)),0!==i||0!==o){if(1===a.deltaMode){var u=c.data(this,"mousewheel-line-height");r*=u,i*=u,o*=u}else if(2===a.deltaMode){var l=c.data(this,"mousewheel-page-height");r*=l,i*=l,o*=l}if(t=Math.max(Math.abs(i),Math.abs(o)),(!h||t<h)&&y(a,h=t)&&(h/=40),y(a,t)&&(r/=40,o/=40,i/=40),r=Math[1<=r?"floor":"ceil"](r/h),o=Math[1<=o?"floor":"ceil"](o/h),i=Math[1<=i?"floor":"ceil"](i/h),p.settings.normalizeOffset&&this.getBoundingClientRect){var f=this.getBoundingClientRect();s=e.clientX-f.left,d=e.clientY-f.top}return e.deltaX=o,e.deltaY=i,e.deltaFactor=h,e.offsetX=s,e.offsetY=d,e.deltaMode=0,n.unshift(e,r,o,i),m&&clearTimeout(m),m=setTimeout(D,200),(c.event.dispatch||c.event.handle).apply(this,n)}}function D(){h=null}function y(e,t){return p.settings.adjustOldDeltas&&"mousewheel"===e.type&&t%120==0}c.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})});
/*!
* sweetalert2 v8.13.6
* Released under the MIT License.
*/
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Sweetalert2 = factory());
}(this, (function () { 'use strict';

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

var consolePrefix = 'SweetAlert2:';
/**
 * Filter the unique values into a new array
 * @param arr
 */

var uniqueArray = function uniqueArray(arr) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }

  return result;
};
/**
 * Returns the array ob object values (Object.values isn't supported in IE11)
 * @param obj
 */

var objectValues = function objectValues(obj) {
  return Object.keys(obj).map(function (key) {
    return obj[key];
  });
};
/**
 * Convert NodeList to Array
 * @param nodeList
 */

var toArray = function toArray(nodeList) {
  return Array.prototype.slice.call(nodeList);
};
/**
 * Standardise console warnings
 * @param message
 */

var warn = function warn(message) {
  console.warn("".concat(consolePrefix, " ").concat(message));
};
/**
 * Standardise console errors
 * @param message
 */

var error = function error(message) {
  console.error("".concat(consolePrefix, " ").concat(message));
};
/**
 * Private global state for `warnOnce`
 * @type {Array}
 * @private
 */

var previousWarnOnceMessages = [];
/**
 * Show a console warning, but only if it hasn't already been shown
 * @param message
 */

var warnOnce = function warnOnce(message) {
  if (!(previousWarnOnceMessages.indexOf(message) !== -1)) {
    previousWarnOnceMessages.push(message);
    warn(message);
  }
};
/**
 * Show a one-time console warning about deprecated params/methods
 */

var warnAboutDepreation = function warnAboutDepreation(deprecatedParam, useInstead) {
  warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
};
/**
 * If `arg` is a function, call it (with no arguments or context) and return the result.
 * Otherwise, just pass the value through
 * @param arg
 */

var callIfFunction = function callIfFunction(arg) {
  return typeof arg === 'function' ? arg() : arg;
};
var isPromise = function isPromise(arg) {
  return arg && Promise.resolve(arg) === arg;
};

var DismissReason = Object.freeze({
  cancel: 'cancel',
  backdrop: 'backdrop',
  close: 'close',
  esc: 'esc',
  timer: 'timer'
});

var argsToParams = function argsToParams(args) {
  var params = {};

  switch (_typeof(args[0])) {
    case 'object':
      _extends(params, args[0]);

      break;

    default:
      ['title', 'html', 'type'].forEach(function (name, index) {
        switch (_typeof(args[index])) {
          case 'string':
            params[name] = args[index];
            break;

          case 'undefined':
            break;

          default:
            error("Unexpected type of ".concat(name, "! Expected \"string\", got ").concat(_typeof(args[index])));
        }
      });
  }

  return params;
};

var swalPrefix = 'swal2-';
var prefix = function prefix(items) {
  var result = {};

  for (var i in items) {
    result[items[i]] = swalPrefix + items[i];
  }

  return result;
};
var swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'toast', 'toast-shown', 'toast-column', 'fade', 'show', 'hide', 'noanimation', 'close', 'title', 'header', 'content', 'actions', 'confirm', 'cancel', 'footer', 'icon', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl']);
var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

var states = {
  previousBodyPadding: null
};
var hasClass = function hasClass(elem, className) {
  return elem.classList.contains(className);
};
var applyCustomClass = function applyCustomClass(elem, customClass, className) {
  // Clean up previous custom classes
  toArray(elem.classList).forEach(function (className) {
    if (!(objectValues(swalClasses).indexOf(className) !== -1) && !(objectValues(iconTypes).indexOf(className) !== -1)) {
      elem.classList.remove(className);
    }
  });

  if (customClass && customClass[className]) {
    addClass(elem, customClass[className]);
  }
};
function getInput(content, inputType) {
  if (!inputType) {
    return null;
  }

  switch (inputType) {
    case 'select':
    case 'textarea':
    case 'file':
      return getChildByClass(content, swalClasses[inputType]);

    case 'checkbox':
      return content.querySelector(".".concat(swalClasses.checkbox, " input"));

    case 'radio':
      return content.querySelector(".".concat(swalClasses.radio, " input:checked")) || content.querySelector(".".concat(swalClasses.radio, " input:first-child"));

    case 'range':
      return content.querySelector(".".concat(swalClasses.range, " input"));

    default:
      return getChildByClass(content, swalClasses.input);
  }
}
var focusInput = function focusInput(input) {
  input.focus(); // place cursor at end of text in text input

  if (input.type !== 'file') {
    // http://stackoverflow.com/a/2345915
    var val = input.value;
    input.value = '';
    input.value = val;
  }
};
var toggleClass = function toggleClass(target, classList, condition) {
  if (!target || !classList) {
    return;
  }

  if (typeof classList === 'string') {
    classList = classList.split(/\s+/).filter(Boolean);
  }

  classList.forEach(function (className) {
    if (target.forEach) {
      target.forEach(function (elem) {
        condition ? elem.classList.add(className) : elem.classList.remove(className);
      });
    } else {
      condition ? target.classList.add(className) : target.classList.remove(className);
    }
  });
};
var addClass = function addClass(target, classList) {
  toggleClass(target, classList, true);
};
var removeClass = function removeClass(target, classList) {
  toggleClass(target, classList, false);
};
var getChildByClass = function getChildByClass(elem, className) {
  for (var i = 0; i < elem.childNodes.length; i++) {
    if (hasClass(elem.childNodes[i], className)) {
      return elem.childNodes[i];
    }
  }
};
var applyNumericalStyle = function applyNumericalStyle(elem, property, value) {
  if (value || parseInt(value) === 0) {
    elem.style[property] = typeof value === 'number' ? value + 'px' : value;
  } else {
    elem.style.removeProperty(property);
  }
};
var show = function show(elem) {
  var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
  elem.style.opacity = '';
  elem.style.display = display;
};
var hide = function hide(elem) {
  elem.style.opacity = '';
  elem.style.display = 'none';
};
var toggle = function toggle(elem, condition, display) {
  condition ? show(elem, display) : hide(elem);
}; // borrowed from jquery $(elem).is(':visible') implementation

var isVisible = function isVisible(elem) {
  return !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
};
var isScrollable = function isScrollable(elem) {
  return !!(elem.scrollHeight > elem.clientHeight);
}; // borrowed from https://stackoverflow.com/a/46352119

var hasCssAnimation = function hasCssAnimation(elem) {
  var style = window.getComputedStyle(elem);
  var animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
  var transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
  return animDuration > 0 || transDuration > 0;
};
var contains = function contains(haystack, needle) {
  if (typeof haystack.contains === 'function') {
    return haystack.contains(needle);
  }
};

var getContainer = function getContainer() {
  return document.body.querySelector('.' + swalClasses.container);
};
var elementBySelector = function elementBySelector(selectorString) {
  var container = getContainer();
  return container ? container.querySelector(selectorString) : null;
};

var elementByClass = function elementByClass(className) {
  return elementBySelector('.' + className);
};

var getPopup = function getPopup() {
  return elementByClass(swalClasses.popup);
};
var getIcons = function getIcons() {
  var popup = getPopup();
  return toArray(popup.querySelectorAll('.' + swalClasses.icon));
};
var getIcon = function getIcon() {
  var visibleIcon = getIcons().filter(function (icon) {
    return isVisible(icon);
  });
  return visibleIcon.length ? visibleIcon[0] : null;
};
var getTitle = function getTitle() {
  return elementByClass(swalClasses.title);
};
var getContent = function getContent() {
  return elementByClass(swalClasses.content);
};
var getImage = function getImage() {
  return elementByClass(swalClasses.image);
};
var getProgressSteps = function getProgressSteps() {
  return elementByClass(swalClasses['progress-steps']);
};
var getValidationMessage = function getValidationMessage() {
  return elementByClass(swalClasses['validation-message']);
};
var getConfirmButton = function getConfirmButton() {
  return elementBySelector('.' + swalClasses.actions + ' .' + swalClasses.confirm);
};
var getCancelButton = function getCancelButton() {
  return elementBySelector('.' + swalClasses.actions + ' .' + swalClasses.cancel);
};
var getActions = function getActions() {
  return elementByClass(swalClasses.actions);
};
var getHeader = function getHeader() {
  return elementByClass(swalClasses.header);
};
var getFooter = function getFooter() {
  return elementByClass(swalClasses.footer);
};
var getCloseButton = function getCloseButton() {
  return elementByClass(swalClasses.close);
};
var getFocusableElements = function getFocusableElements() {
  var focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
  .sort(function (a, b) {
    a = parseInt(a.getAttribute('tabindex'));
    b = parseInt(b.getAttribute('tabindex'));

    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }

    return 0;
  }); // https://github.com/jkup/focusable/blob/master/index.js

  var otherFocusableElements = toArray(getPopup().querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls]')).filter(function (el) {
    return el.getAttribute('tabindex') !== '-1';
  });
  return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(function (el) {
    return isVisible(el);
  });
};
var isModal = function isModal() {
  return !isToast() && !document.body.classList.contains(swalClasses['no-backdrop']);
};
var isToast = function isToast() {
  return document.body.classList.contains(swalClasses['toast-shown']);
};
var isLoading = function isLoading() {
  return getPopup().hasAttribute('data-loading');
};

// Detect Node env
var isNodeEnv = function isNodeEnv() {
  return typeof window === 'undefined' || typeof document === 'undefined';
};

var sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <div class=\"").concat(swalClasses.header, "\">\n     <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.error, "\">\n       <span class=\"swal2-x-mark\"><span class=\"swal2-x-mark-line-left\"></span><span class=\"swal2-x-mark-line-right\"></span></span>\n     </div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.question, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.warning, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.info, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.success, "\">\n       <div class=\"swal2-success-circular-line-left\"></div>\n       <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n       <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n       <div class=\"swal2-success-circular-line-right\"></div>\n     </div>\n     <img class=\"").concat(swalClasses.image, "\" />\n     <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n     <button type=\"button\" class=\"").concat(swalClasses.close, "\">&times;</button>\n   </div>\n   <div class=\"").concat(swalClasses.content, "\">\n     <div id=\"").concat(swalClasses.content, "\"></div>\n     <input class=\"").concat(swalClasses.input, "\" />\n     <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n     <div class=\"").concat(swalClasses.range, "\">\n       <input type=\"range\" />\n       <output></output>\n     </div>\n     <select class=\"").concat(swalClasses.select, "\"></select>\n     <div class=\"").concat(swalClasses.radio, "\"></div>\n     <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n       <input type=\"checkbox\" />\n       <span class=\"").concat(swalClasses.label, "\"></span>\n     </label>\n     <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n     <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   </div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\">OK</button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\">Cancel</button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\">\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');

var resetOldContainer = function resetOldContainer() {
  var oldContainer = getContainer();

  if (!oldContainer) {
    return;
  }

  oldContainer.parentNode.removeChild(oldContainer);
  removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
};

var oldInputVal; // IE11 workaround, see #1109 for details

var resetValidationMessage = function resetValidationMessage(e) {
  if (Swal.isVisible() && oldInputVal !== e.target.value) {
    Swal.resetValidationMessage();
  }

  oldInputVal = e.target.value;
};

var addInputChangeListeners = function addInputChangeListeners() {
  var content = getContent();
  var input = getChildByClass(content, swalClasses.input);
  var file = getChildByClass(content, swalClasses.file);
  var range = content.querySelector(".".concat(swalClasses.range, " input"));
  var rangeOutput = content.querySelector(".".concat(swalClasses.range, " output"));
  var select = getChildByClass(content, swalClasses.select);
  var checkbox = content.querySelector(".".concat(swalClasses.checkbox, " input"));
  var textarea = getChildByClass(content, swalClasses.textarea);
  input.oninput = resetValidationMessage;
  file.onchange = resetValidationMessage;
  select.onchange = resetValidationMessage;
  checkbox.onchange = resetValidationMessage;
  textarea.oninput = resetValidationMessage;

  range.oninput = function (e) {
    resetValidationMessage(e);
    rangeOutput.value = range.value;
  };

  range.onchange = function (e) {
    resetValidationMessage(e);
    range.nextSibling.value = range.value;
  };
};

var getTarget = function getTarget(target) {
  return typeof target === 'string' ? document.querySelector(target) : target;
};

var setupAccessibility = function setupAccessibility(params) {
  var popup = getPopup();
  popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
  popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

  if (!params.toast) {
    popup.setAttribute('aria-modal', 'true');
  }
};

var setupRTL = function setupRTL(targetElement) {
  if (window.getComputedStyle(targetElement).direction === 'rtl') {
    addClass(getContainer(), swalClasses.rtl);
  }
};
/*
 * Add modal + backdrop to DOM
 */


var init = function init(params) {
  // Clean up the old popup container if it exists
  resetOldContainer();
  /* istanbul ignore if */

  if (isNodeEnv()) {
    error('SweetAlert2 requires document to initialize');
    return;
  }

  var container = document.createElement('div');
  container.className = swalClasses.container;
  container.innerHTML = sweetHTML;
  var targetElement = getTarget(params.target);
  targetElement.appendChild(container);
  setupAccessibility(params);
  setupRTL(targetElement);
  addInputChangeListeners();
};

var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
  // DOM element
  if (param instanceof HTMLElement) {
    target.appendChild(param); // JQuery element(s)
  } else if (_typeof(param) === 'object') {
    handleJqueryElem(target, param); // Plain string
  } else if (param) {
    target.innerHTML = param;
  }
};

var handleJqueryElem = function handleJqueryElem(target, elem) {
  target.innerHTML = '';

  if (0 in elem) {
    for (var i = 0; i in elem; i++) {
      target.appendChild(elem[i].cloneNode(true));
    }
  } else {
    target.appendChild(elem.cloneNode(true));
  }
};

var animationEndEvent = function () {
  // Prevent run in Node env

  /* istanbul ignore if */
  if (isNodeEnv()) {
    return false;
  }

  var testEl = document.createElement('div');
  var transEndEventNames = {
    WebkitAnimation: 'webkitAnimationEnd',
    OAnimation: 'oAnimationEnd oanimationend',
    animation: 'animationend'
  };

  for (var i in transEndEventNames) {
    if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
      return transEndEventNames[i];
    }
  }

  return false;
}();

// Measure width of scrollbar
// https://github.com/twbs/bootstrap/blob/master/js/modal.js#L279-L286
var measureScrollbar = function measureScrollbar() {
  var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

  if (supportsTouch) {
    return 0;
  }

  var scrollDiv = document.createElement('div');
  scrollDiv.style.width = '50px';
  scrollDiv.style.height = '50px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
};

function handleButtonsStyling(confirmButton, cancelButton, params) {
  addClass([confirmButton, cancelButton], swalClasses.styled); // Buttons background colors

  if (params.confirmButtonColor) {
    confirmButton.style.backgroundColor = params.confirmButtonColor;
  }

  if (params.cancelButtonColor) {
    cancelButton.style.backgroundColor = params.cancelButtonColor;
  } // Loading state


  var confirmButtonBackgroundColor = window.getComputedStyle(confirmButton).getPropertyValue('background-color');
  confirmButton.style.borderLeftColor = confirmButtonBackgroundColor;
  confirmButton.style.borderRightColor = confirmButtonBackgroundColor;
}

function renderButton(button, buttonType, params) {
  toggle(button, params['showC' + buttonType.substring(1) + 'Button'], 'inline-block');
  button.innerHTML = params[buttonType + 'ButtonText']; // Set caption text

  button.setAttribute('aria-label', params[buttonType + 'ButtonAriaLabel']); // ARIA label
  // Add buttons custom classes

  button.className = swalClasses[buttonType];
  applyCustomClass(button, params.customClass, buttonType + 'Button');
  addClass(button, params[buttonType + 'ButtonClass']);
}

var renderActions = function renderActions(instance, params) {
  var actions = getActions();
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton(); // Actions (buttons) wrapper

  if (!params.showConfirmButton && !params.showCancelButton) {
    hide(actions);
  } else {
    show(actions);
  } // Custom class


  applyCustomClass(actions, params.customClass, 'actions'); // Render confirm button

  renderButton(confirmButton, 'confirm', params); // render Cancel Button

  renderButton(cancelButton, 'cancel', params);

  if (params.buttonsStyling) {
    handleButtonsStyling(confirmButton, cancelButton, params);
  } else {
    removeClass([confirmButton, cancelButton], swalClasses.styled);
    confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = '';
    cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = '';
  }
};

function handleBackdropParam(container, backdrop) {
  if (typeof backdrop === 'string') {
    container.style.background = backdrop;
  } else if (!backdrop) {
    addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
  }
}

function handlePositionParam(container, position) {
  if (position in swalClasses) {
    addClass(container, swalClasses[position]);
  } else {
    warn('The "position" parameter is not valid, defaulting to "center"');
    addClass(container, swalClasses.center);
  }
}

function handleGrowParam(container, grow) {
  if (grow && typeof grow === 'string') {
    var growClass = 'grow-' + grow;

    if (growClass in swalClasses) {
      addClass(container, swalClasses[growClass]);
    }
  }
}

var renderContainer = function renderContainer(instance, params) {
  var container = getContainer();

  if (!container) {
    return;
  }

  handleBackdropParam(container, params.backdrop);

  if (!params.backdrop && params.allowOutsideClick) {
    warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
  }

  handlePositionParam(container, params.position);
  handleGrowParam(container, params.grow); // Custom class

  applyCustomClass(container, params.customClass, 'container');

  if (params.customContainerClass) {
    // @deprecated
    addClass(container, params.customContainerClass);
  }
};

/**
 * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
 * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
 * This is the approach that Babel will probably take to implement private methods/fields
 *   https://github.com/tc39/proposal-private-methods
 *   https://github.com/babel/babel/pull/7555
 * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
 *   then we can use that language feature.
 */
var privateProps = {
  promise: new WeakMap(),
  innerParams: new WeakMap(),
  domCache: new WeakMap()
};

var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
var renderInput = function renderInput(instance, params) {
  var content = getContent();
  var innerParams = privateProps.innerParams.get(instance);
  var rerender = !innerParams || params.input !== innerParams.input;
  inputTypes.forEach(function (inputType) {
    var inputClass = swalClasses[inputType];
    var inputContainer = getChildByClass(content, inputClass); // set attributes

    setAttributes(inputType, params.inputAttributes); // set class

    setClass(inputContainer, inputClass, params);

    if (rerender) {
      hide(inputContainer);
    }
  });

  if (params.input && rerender) {
    showInput(params);
  }
};

var showInput = function showInput(params) {
  if (!renderInputType[params.input]) {
    return error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(params.input, "\""));
  }

  var input = renderInputType[params.input](params);
  show(input);
};

var removeAttributes = function removeAttributes(input) {
  for (var i = 0; i < input.attributes.length; i++) {
    var attrName = input.attributes[i].name;

    if (!(['type', 'value', 'style'].indexOf(attrName) !== -1)) {
      input.removeAttribute(attrName);
    }
  }
};

var setAttributes = function setAttributes(inputType, inputAttributes) {
  var input = getInput(getContent(), inputType);

  if (!input) {
    return;
  }

  removeAttributes(input);

  for (var attr in inputAttributes) {
    // Do not set a placeholder for <input type="range">
    // it'll crash Edge, #1298
    if (inputType === 'range' && attr === 'placeholder') {
      continue;
    }

    input.setAttribute(attr, inputAttributes[attr]);
  }
};

var setClass = function setClass(inputContainer, inputClass, params) {
  inputContainer.className = inputClass;

  if (params.inputClass) {
    addClass(inputContainer, params.inputClass);
  }

  if (params.customClass) {
    addClass(inputContainer, params.customClass.input);
  }
};

var setInputPlaceholder = function setInputPlaceholder(input, params) {
  if (!input.placeholder || params.inputPlaceholder) {
    input.placeholder = params.inputPlaceholder;
  }
};

var renderInputType = {};

renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = function (params) {
  var input = getChildByClass(getContent(), swalClasses.input);

  if (typeof params.inputValue === 'string' || typeof params.inputValue === 'number') {
    input.value = params.inputValue;
  } else if (!isPromise(params.inputValue)) {
    warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(_typeof(params.inputValue), "\""));
  }

  setInputPlaceholder(input, params);
  input.type = params.input;
  return input;
};

renderInputType.file = function (params) {
  var input = getChildByClass(getContent(), swalClasses.file);
  setInputPlaceholder(input, params);
  input.type = params.input;
  return input;
};

renderInputType.range = function (params) {
  var range = getChildByClass(getContent(), swalClasses.range);
  var rangeInput = range.querySelector('input');
  var rangeOutput = range.querySelector('output');
  rangeInput.value = params.inputValue;
  rangeInput.type = params.input;
  rangeOutput.value = params.inputValue;
  return range;
};

renderInputType.select = function (params) {
  var select = getChildByClass(getContent(), swalClasses.select);
  select.innerHTML = '';

  if (params.inputPlaceholder) {
    var placeholder = document.createElement('option');
    placeholder.innerHTML = params.inputPlaceholder;
    placeholder.value = '';
    placeholder.disabled = true;
    placeholder.selected = true;
    select.appendChild(placeholder);
  }

  return select;
};

renderInputType.radio = function () {
  var radio = getChildByClass(getContent(), swalClasses.radio);
  radio.innerHTML = '';
  return radio;
};

renderInputType.checkbox = function (params) {
  var checkbox = getChildByClass(getContent(), swalClasses.checkbox);
  var checkboxInput = getInput(getContent(), 'checkbox');
  checkboxInput.type = 'checkbox';
  checkboxInput.value = 1;
  checkboxInput.id = swalClasses.checkbox;
  checkboxInput.checked = Boolean(params.inputValue);
  var label = checkbox.querySelector('span');
  label.innerHTML = params.inputPlaceholder;
  return checkbox;
};

renderInputType.textarea = function (params) {
  var textarea = getChildByClass(getContent(), swalClasses.textarea);
  textarea.value = params.inputValue;
  setInputPlaceholder(textarea, params);
  return textarea;
};

var renderContent = function renderContent(instance, params) {
  var content = getContent().querySelector('#' + swalClasses.content); // Content as HTML

  if (params.html) {
    parseHtmlToContainer(params.html, content);
    show(content, 'block'); // Content as plain text
  } else if (params.text) {
    content.textContent = params.text;
    show(content, 'block'); // No content
  } else {
    hide(content);
  }

  renderInput(instance, params); // Custom class

  applyCustomClass(getContent(), params.customClass, 'content');
};

var renderFooter = function renderFooter(instance, params) {
  var footer = getFooter();
  toggle(footer, params.footer);

  if (params.footer) {
    parseHtmlToContainer(params.footer, footer);
  } // Custom class


  applyCustomClass(footer, params.customClass, 'footer');
};

var renderCloseButton = function renderCloseButton(instance, params) {
  var closeButton = getCloseButton(); // Custom class

  applyCustomClass(closeButton, params.customClass, 'closeButton');
  toggle(closeButton, params.showCloseButton);
  closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
};

var renderIcon = function renderIcon(instance, params) {
  var innerParams = privateProps.innerParams.get(instance); // if the icon with the given type already rendered,
  // apply the custom class without re-rendering the icon

  if (innerParams && params.type === innerParams.type && getIcon()) {
    applyCustomClass(getIcon(), params.customClass, 'icon');
    return;
  }

  hideAllIcons();

  if (!params.type) {
    return;
  }

  adjustSuccessIconBackgoundColor();

  if (Object.keys(iconTypes).indexOf(params.type) !== -1) {
    var icon = elementBySelector(".".concat(swalClasses.icon, ".").concat(iconTypes[params.type]));
    show(icon); // Custom class

    applyCustomClass(icon, params.customClass, 'icon'); // Animate icon

    toggleClass(icon, "swal2-animate-".concat(params.type, "-icon"), params.animation);
  } else {
    error("Unknown type! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.type, "\""));
  }
};

var hideAllIcons = function hideAllIcons() {
  var icons = getIcons();

  for (var i = 0; i < icons.length; i++) {
    hide(icons[i]);
  }
}; // Adjust success icon background color to match the popup background color


var adjustSuccessIconBackgoundColor = function adjustSuccessIconBackgoundColor() {
  var popup = getPopup();
  var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
  var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

  for (var i = 0; i < successIconParts.length; i++) {
    successIconParts[i].style.backgroundColor = popupBackgroundColor;
  }
};

var renderImage = function renderImage(instance, params) {
  var image = getImage();

  if (!params.imageUrl) {
    return hide(image);
  }

  show(image); // Src, alt

  image.setAttribute('src', params.imageUrl);
  image.setAttribute('alt', params.imageAlt); // Width, height

  applyNumericalStyle(image, 'width', params.imageWidth);
  applyNumericalStyle(image, 'height', params.imageHeight); // Class

  image.className = swalClasses.image;
  applyCustomClass(image, params.customClass, 'image');

  if (params.imageClass) {
    addClass(image, params.imageClass);
  }
};

var createStepElement = function createStepElement(step) {
  var stepEl = document.createElement('li');
  addClass(stepEl, swalClasses['progress-step']);
  stepEl.innerHTML = step;
  return stepEl;
};

var createLineElement = function createLineElement(params) {
  var lineEl = document.createElement('li');
  addClass(lineEl, swalClasses['progress-step-line']);

  if (params.progressStepsDistance) {
    lineEl.style.width = params.progressStepsDistance;
  }

  return lineEl;
};

var renderProgressSteps = function renderProgressSteps(instance, params) {
  var progressStepsContainer = getProgressSteps();

  if (!params.progressSteps || params.progressSteps.length === 0) {
    return hide(progressStepsContainer);
  }

  show(progressStepsContainer);
  progressStepsContainer.innerHTML = '';
  var currentProgressStep = parseInt(params.currentProgressStep === null ? Swal.getQueueStep() : params.currentProgressStep);

  if (currentProgressStep >= params.progressSteps.length) {
    warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
  }

  params.progressSteps.forEach(function (step, index) {
    var stepEl = createStepElement(step);
    progressStepsContainer.appendChild(stepEl);

    if (index === currentProgressStep) {
      addClass(stepEl, swalClasses['active-progress-step']);
    }

    if (index !== params.progressSteps.length - 1) {
      var lineEl = createLineElement(step);
      progressStepsContainer.appendChild(lineEl);
    }
  });
};

var renderTitle = function renderTitle(instance, params) {
  var title = getTitle();
  toggle(title, params.title || params.titleText);

  if (params.title) {
    parseHtmlToContainer(params.title, title);
  }

  if (params.titleText) {
    title.innerText = params.titleText;
  } // Custom class


  applyCustomClass(title, params.customClass, 'title');
};

var renderHeader = function renderHeader(instance, params) {
  var header = getHeader(); // Custom class

  applyCustomClass(header, params.customClass, 'header'); // Progress steps

  renderProgressSteps(instance, params); // Icon

  renderIcon(instance, params); // Image

  renderImage(instance, params); // Title

  renderTitle(instance, params); // Close button

  renderCloseButton(instance, params);
};

var renderPopup = function renderPopup(instance, params) {
  var popup = getPopup(); // Width

  applyNumericalStyle(popup, 'width', params.width); // Padding

  applyNumericalStyle(popup, 'padding', params.padding); // Background

  if (params.background) {
    popup.style.background = params.background;
  } // Default Class


  popup.className = swalClasses.popup;

  if (params.toast) {
    addClass([document.documentElement, document.body], swalClasses['toast-shown']);
    addClass(popup, swalClasses.toast);
  } else {
    addClass(popup, swalClasses.modal);
  } // Custom class


  applyCustomClass(popup, params.customClass, 'popup');

  if (typeof params.customClass === 'string') {
    addClass(popup, params.customClass);
  } // CSS animation


  toggleClass(popup, swalClasses.noanimation, !params.animation);
};

var render = function render(instance, params) {
  renderPopup(instance, params);
  renderContainer(instance, params);
  renderHeader(instance, params);
  renderContent(instance, params);
  renderActions(instance, params);
  renderFooter(instance, params);
};

/*
 * Global function to determine if SweetAlert2 popup is shown
 */

var isVisible$1 = function isVisible$$1() {
  return isVisible(getPopup());
};
/*
 * Global function to click 'Confirm' button
 */

var clickConfirm = function clickConfirm() {
  return getConfirmButton() && getConfirmButton().click();
};
/*
 * Global function to click 'Cancel' button
 */

var clickCancel = function clickCancel() {
  return getCancelButton() && getCancelButton().click();
};

function fire() {
  var Swal = this;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return _construct(Swal, args);
}

/**
 * Returns an extended version of `Swal` containing `params` as defaults.
 * Useful for reusing Swal configuration.
 *
 * For example:
 *
 * Before:
 * const textPromptOptions = { input: 'text', showCancelButton: true }
 * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
 * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
 *
 * After:
 * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
 * const {value: firstName} = await TextPrompt('What is your first name?')
 * const {value: lastName} = await TextPrompt('What is your last name?')
 *
 * @param mixinParams
 */
function mixin(mixinParams) {
  var MixinSwal =
  /*#__PURE__*/
  function (_this) {
    _inherits(MixinSwal, _this);

    function MixinSwal() {
      _classCallCheck(this, MixinSwal);

      return _possibleConstructorReturn(this, _getPrototypeOf(MixinSwal).apply(this, arguments));
    }

    _createClass(MixinSwal, [{
      key: "_main",
      value: function _main(params) {
        return _get(_getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, _extends({}, mixinParams, params));
      }
    }]);

    return MixinSwal;
  }(this);

  return MixinSwal;
}

// private global state for the queue feature
var currentSteps = [];
/*
 * Global function for chaining sweetAlert popups
 */

var queue = function queue(steps) {
  var Swal = this;
  currentSteps = steps;

  var resetAndResolve = function resetAndResolve(resolve, value) {
    currentSteps = [];
    document.body.removeAttribute('data-swal2-queue-step');
    resolve(value);
  };

  var queueResult = [];
  return new Promise(function (resolve) {
    (function step(i, callback) {
      if (i < currentSteps.length) {
        document.body.setAttribute('data-swal2-queue-step', i);
        Swal.fire(currentSteps[i]).then(function (result) {
          if (typeof result.value !== 'undefined') {
            queueResult.push(result.value);
            step(i + 1, callback);
          } else {
            resetAndResolve(resolve, {
              dismiss: result.dismiss
            });
          }
        });
      } else {
        resetAndResolve(resolve, {
          value: queueResult
        });
      }
    })(0);
  });
};
/*
 * Global function for getting the index of current popup in queue
 */

var getQueueStep = function getQueueStep() {
  return document.body.getAttribute('data-swal2-queue-step');
};
/*
 * Global function for inserting a popup to the queue
 */

var insertQueueStep = function insertQueueStep(step, index) {
  if (index && index < currentSteps.length) {
    return currentSteps.splice(index, 0, step);
  }

  return currentSteps.push(step);
};
/*
 * Global function for deleting a popup from the queue
 */

var deleteQueueStep = function deleteQueueStep(index) {
  if (typeof currentSteps[index] !== 'undefined') {
    currentSteps.splice(index, 1);
  }
};

/**
 * Show spinner instead of Confirm button and disable Cancel button
 */

var showLoading = function showLoading() {
  var popup = getPopup();

  if (!popup) {
    Swal.fire('');
  }

  popup = getPopup();
  var actions = getActions();
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton();
  show(actions);
  show(confirmButton);
  addClass([popup, actions], swalClasses.loading);
  confirmButton.disabled = true;
  cancelButton.disabled = true;
  popup.setAttribute('data-loading', true);
  popup.setAttribute('aria-busy', true);
  popup.focus();
};

var RESTORE_FOCUS_TIMEOUT = 100;

var globalState = {};
var focusPreviousActiveElement = function focusPreviousActiveElement() {
  if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
    globalState.previousActiveElement.focus();
    globalState.previousActiveElement = null;
  } else if (document.body) {
    document.body.focus();
  }
}; // Restore previous active (focused) element


var restoreActiveElement = function restoreActiveElement() {
  return new Promise(function (resolve) {
    var x = window.scrollX;
    var y = window.scrollY;
    globalState.restoreFocusTimeout = setTimeout(function () {
      focusPreviousActiveElement();
      resolve();
    }, RESTORE_FOCUS_TIMEOUT); // issues/900

    if (typeof x !== 'undefined' && typeof y !== 'undefined') {
      // IE doesn't have scrollX/scrollY support
      window.scrollTo(x, y);
    }
  });
};

/**
 * If `timer` parameter is set, returns number of milliseconds of timer remained.
 * Otherwise, returns undefined.
 */

var getTimerLeft = function getTimerLeft() {
  return globalState.timeout && globalState.timeout.getTimerLeft();
};
/**
 * Stop timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */

var stopTimer = function stopTimer() {
  return globalState.timeout && globalState.timeout.stop();
};
/**
 * Resume timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */

var resumeTimer = function resumeTimer() {
  return globalState.timeout && globalState.timeout.start();
};
/**
 * Resume timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */

var toggleTimer = function toggleTimer() {
  var timer = globalState.timeout;
  return timer && (timer.running ? timer.stop() : timer.start());
};
/**
 * Increase timer. Returns number of milliseconds of an updated timer.
 * If `timer` parameter isn't set, returns undefined.
 */

var increaseTimer = function increaseTimer(n) {
  return globalState.timeout && globalState.timeout.increase(n);
};
/**
 * Check if timer is running. Returns true if timer is running
 * or false if timer is paused or stopped.
 * If `timer` parameter isn't set, returns undefined
 */

var isTimerRunning = function isTimerRunning() {
  return globalState.timeout && globalState.timeout.isRunning();
};

var defaultParams = {
  title: '',
  titleText: '',
  text: '',
  html: '',
  footer: '',
  type: null,
  toast: false,
  customClass: '',
  customContainerClass: '',
  target: 'body',
  backdrop: true,
  animation: true,
  heightAuto: true,
  allowOutsideClick: true,
  allowEscapeKey: true,
  allowEnterKey: true,
  stopKeydownPropagation: true,
  keydownListenerCapture: false,
  showConfirmButton: true,
  showCancelButton: false,
  preConfirm: null,
  confirmButtonText: 'OK',
  confirmButtonAriaLabel: '',
  confirmButtonColor: null,
  confirmButtonClass: '',
  cancelButtonText: 'Cancel',
  cancelButtonAriaLabel: '',
  cancelButtonColor: null,
  cancelButtonClass: '',
  buttonsStyling: true,
  reverseButtons: false,
  focusConfirm: true,
  focusCancel: false,
  showCloseButton: false,
  closeButtonAriaLabel: 'Close this dialog',
  showLoaderOnConfirm: false,
  imageUrl: null,
  imageWidth: null,
  imageHeight: null,
  imageAlt: '',
  imageClass: '',
  timer: null,
  width: null,
  padding: null,
  background: null,
  input: null,
  inputPlaceholder: '',
  inputValue: '',
  inputOptions: {},
  inputAutoTrim: true,
  inputClass: '',
  inputAttributes: {},
  inputValidator: null,
  validationMessage: null,
  grow: false,
  position: 'center',
  progressSteps: [],
  currentProgressStep: null,
  progressStepsDistance: null,
  onBeforeOpen: null,
  onAfterClose: null,
  onOpen: null,
  onClose: null,
  scrollbarPadding: true
};
var updatableParams = ['title', 'titleText', 'text', 'html', 'type', 'customClass', 'showConfirmButton', 'showCancelButton', 'confirmButtonText', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonClass', 'cancelButtonText', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonClass', 'buttonsStyling', 'reverseButtons', 'imageUrl', 'imageWidth', 'imageHeigth', 'imageAlt', 'imageClass', 'progressSteps', 'currentProgressStep'];
var deprecatedParams = {
  customContainerClass: 'customClass',
  confirmButtonClass: 'customClass',
  cancelButtonClass: 'customClass',
  imageClass: 'customClass',
  inputClass: 'customClass'
};
var toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusCancel', 'heightAuto', 'keydownListenerCapture'];
/**
 * Is valid parameter
 * @param {String} paramName
 */

var isValidParameter = function isValidParameter(paramName) {
  return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
};
/**
 * Is valid parameter for Swal.update() method
 * @param {String} paramName
 */

var isUpdatableParameter = function isUpdatableParameter(paramName) {
  return updatableParams.indexOf(paramName) !== -1;
};
/**
 * Is deprecated parameter
 * @param {String} paramName
 */

var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
  return deprecatedParams[paramName];
};

var checkIfParamIsValid = function checkIfParamIsValid(param) {
  if (!isValidParameter(param)) {
    warn("Unknown parameter \"".concat(param, "\""));
  }
};

var checkIfToastParamIsValid = function checkIfToastParamIsValid(param) {
  if (toastIncompatibleParams.indexOf(param) !== -1) {
    warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
  }
};

var checkIfParamIsDeprecated = function checkIfParamIsDeprecated(param) {
  if (isDeprecatedParameter(param)) {
    warnAboutDepreation(param, isDeprecatedParameter(param));
  }
};
/**
 * Show relevant warnings for given params
 *
 * @param params
 */


var showWarningsForParams = function showWarningsForParams(params) {
  for (var param in params) {
    checkIfParamIsValid(param);

    if (params.toast) {
      checkIfToastParamIsValid(param);
    }

    checkIfParamIsDeprecated();
  }
};



var staticMethods = Object.freeze({
	isValidParameter: isValidParameter,
	isUpdatableParameter: isUpdatableParameter,
	isDeprecatedParameter: isDeprecatedParameter,
	argsToParams: argsToParams,
	isVisible: isVisible$1,
	clickConfirm: clickConfirm,
	clickCancel: clickCancel,
	getContainer: getContainer,
	getPopup: getPopup,
	getTitle: getTitle,
	getContent: getContent,
	getImage: getImage,
	getIcon: getIcon,
	getIcons: getIcons,
	getCloseButton: getCloseButton,
	getActions: getActions,
	getConfirmButton: getConfirmButton,
	getCancelButton: getCancelButton,
	getHeader: getHeader,
	getFooter: getFooter,
	getFocusableElements: getFocusableElements,
	getValidationMessage: getValidationMessage,
	isLoading: isLoading,
	fire: fire,
	mixin: mixin,
	queue: queue,
	getQueueStep: getQueueStep,
	insertQueueStep: insertQueueStep,
	deleteQueueStep: deleteQueueStep,
	showLoading: showLoading,
	enableLoading: showLoading,
	getTimerLeft: getTimerLeft,
	stopTimer: stopTimer,
	resumeTimer: resumeTimer,
	toggleTimer: toggleTimer,
	increaseTimer: increaseTimer,
	isTimerRunning: isTimerRunning
});

/**
 * Enables buttons and hide loader.
 */

function hideLoading() {
  var innerParams = privateProps.innerParams.get(this);
  var domCache = privateProps.domCache.get(this);

  if (!innerParams.showConfirmButton) {
    hide(domCache.confirmButton);

    if (!innerParams.showCancelButton) {
      hide(domCache.actions);
    }
  }

  removeClass([domCache.popup, domCache.actions], swalClasses.loading);
  domCache.popup.removeAttribute('aria-busy');
  domCache.popup.removeAttribute('data-loading');
  domCache.confirmButton.disabled = false;
  domCache.cancelButton.disabled = false;
}

function getInput$1(instance) {
  var innerParams = privateProps.innerParams.get(instance || this);
  var domCache = privateProps.domCache.get(instance || this);

  if (!domCache) {
    return null;
  }

  return getInput(domCache.content, innerParams.input);
}

var fixScrollbar = function fixScrollbar() {
  // for queues, do not do this more than once
  if (states.previousBodyPadding !== null) {
    return;
  } // if the body has overflow


  if (document.body.scrollHeight > window.innerHeight) {
    // add padding so the content doesn't shift after removal of scrollbar
    states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
    document.body.style.paddingRight = states.previousBodyPadding + measureScrollbar() + 'px';
  }
};
var undoScrollbar = function undoScrollbar() {
  if (states.previousBodyPadding !== null) {
    document.body.style.paddingRight = states.previousBodyPadding + 'px';
    states.previousBodyPadding = null;
  }
};

/* istanbul ignore next */

var iOSfix = function iOSfix() {
  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
    var offset = document.body.scrollTop;
    document.body.style.top = offset * -1 + 'px';
    addClass(document.body, swalClasses.iosfix);
    lockBodyScroll();
  }
};

var lockBodyScroll = function lockBodyScroll() {
  // #1246
  var container = getContainer();
  var preventTouchMove;

  container.ontouchstart = function (e) {
    preventTouchMove = e.target === container || !isScrollable(container) && e.target.tagName !== 'INPUT' // #1603
    ;
  };

  container.ontouchmove = function (e) {
    if (preventTouchMove) {
      e.preventDefault();
      e.stopPropagation();
    }
  };
};
/* istanbul ignore next */


var undoIOSfix = function undoIOSfix() {
  if (hasClass(document.body, swalClasses.iosfix)) {
    var offset = parseInt(document.body.style.top, 10);
    removeClass(document.body, swalClasses.iosfix);
    document.body.style.top = '';
    document.body.scrollTop = offset * -1;
  }
};

var isIE11 = function isIE11() {
  return !!window.MSInputMethodContext && !!document.documentMode;
}; // Fix IE11 centering sweetalert2/issues/933

/* istanbul ignore next */


var fixVerticalPositionIE = function fixVerticalPositionIE() {
  var container = getContainer();
  var popup = getPopup();
  container.style.removeProperty('align-items');

  if (popup.offsetTop < 0) {
    container.style.alignItems = 'flex-start';
  }
};
/* istanbul ignore next */


var IEfix = function IEfix() {
  if (typeof window !== 'undefined' && isIE11()) {
    fixVerticalPositionIE();
    window.addEventListener('resize', fixVerticalPositionIE);
  }
};
/* istanbul ignore next */

var undoIEfix = function undoIEfix() {
  if (typeof window !== 'undefined' && isIE11()) {
    window.removeEventListener('resize', fixVerticalPositionIE);
  }
};

// Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
// elements not within the active modal dialog will not be surfaced if a user opens a screen
// reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

var setAriaHidden = function setAriaHidden() {
  var bodyChildren = toArray(document.body.children);
  bodyChildren.forEach(function (el) {
    if (el === getContainer() || contains(el, getContainer())) {
      return;
    }

    if (el.hasAttribute('aria-hidden')) {
      el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
    }

    el.setAttribute('aria-hidden', 'true');
  });
};
var unsetAriaHidden = function unsetAriaHidden() {
  var bodyChildren = toArray(document.body.children);
  bodyChildren.forEach(function (el) {
    if (el.hasAttribute('data-previous-aria-hidden')) {
      el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
      el.removeAttribute('data-previous-aria-hidden');
    } else {
      el.removeAttribute('aria-hidden');
    }
  });
};

/**
 * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
 * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
 * This is the approach that Babel will probably take to implement private methods/fields
 *   https://github.com/tc39/proposal-private-methods
 *   https://github.com/babel/babel/pull/7555
 * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
 *   then we can use that language feature.
 */
var privateMethods = {
  swalPromiseResolve: new WeakMap()
};

/*
 * Instance method to close sweetAlert
 */

function removePopupAndResetState(instance, container, isToast, onAfterClose) {
  if (isToast) {
    triggerOnAfterCloseAndDispose(instance, onAfterClose);
  } else {
    restoreActiveElement().then(function () {
      return triggerOnAfterCloseAndDispose(instance, onAfterClose);
    });
    globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
      capture: globalState.keydownListenerCapture
    });
    globalState.keydownHandlerAdded = false;
  }

  if (container.parentNode) {
    container.parentNode.removeChild(container);
  }

  if (isModal()) {
    undoScrollbar();
    undoIOSfix();
    undoIEfix();
    unsetAriaHidden();
  }

  removeBodyClasses();
}

function removeBodyClasses() {
  removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['toast-column']]);
}

function disposeSwal(instance) {
  // Unset this.params so GC will dispose it (#1569)
  delete instance.params; // Unset globalState props so GC will dispose globalState (#1569)

  delete globalState.keydownHandler;
  delete globalState.keydownTarget; // Unset WeakMaps so GC will be able to dispose them (#1569)

  unsetWeakMaps(privateProps);
  unsetWeakMaps(privateMethods);
}

function close(resolveValue) {
  var popup = getPopup();

  if (!popup || hasClass(popup, swalClasses.hide)) {
    return;
  }

  var innerParams = privateProps.innerParams.get(this);

  if (!innerParams) {
    return;
  }

  var swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
  removeClass(popup, swalClasses.show);
  addClass(popup, swalClasses.hide);
  handlePopupAnimation(this, popup, innerParams); // Resolve Swal promise

  swalPromiseResolve(resolveValue || {});
}

var handlePopupAnimation = function handlePopupAnimation(instance, popup, innerParams) {
  var container = getContainer(); // If animation is supported, animate

  var animationIsSupported = animationEndEvent && hasCssAnimation(popup);
  var onClose = innerParams.onClose,
      onAfterClose = innerParams.onAfterClose;

  if (onClose !== null && typeof onClose === 'function') {
    onClose(popup);
  }

  if (animationIsSupported) {
    animatePopup(instance, popup, container, onAfterClose);
  } else {
    // Otherwise, remove immediately
    removePopupAndResetState(instance, container, isToast(), onAfterClose);
  }
};

var animatePopup = function animatePopup(instance, popup, container, onAfterClose) {
  globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, isToast(), onAfterClose);
  popup.addEventListener(animationEndEvent, function (e) {
    if (e.target === popup) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    }
  });
};

var unsetWeakMaps = function unsetWeakMaps(obj) {
  for (var i in obj) {
    obj[i] = new WeakMap();
  }
};

var triggerOnAfterCloseAndDispose = function triggerOnAfterCloseAndDispose(instance, onAfterClose) {
  setTimeout(function () {
    if (onAfterClose !== null && typeof onAfterClose === 'function') {
      onAfterClose();
    }

    if (!getPopup()) {
      disposeSwal(instance);
    }
  });
};

function setButtonsDisabled(instance, buttons, disabled) {
  var domCache = privateProps.domCache.get(instance);
  buttons.forEach(function (button) {
    domCache[button].disabled = disabled;
  });
}

function setInputDisabled(input, disabled) {
  if (!input) {
    return false;
  }

  if (input.type === 'radio') {
    var radiosContainer = input.parentNode.parentNode;
    var radios = radiosContainer.querySelectorAll('input');

    for (var i = 0; i < radios.length; i++) {
      radios[i].disabled = disabled;
    }
  } else {
    input.disabled = disabled;
  }
}

function enableButtons() {
  setButtonsDisabled(this, ['confirmButton', 'cancelButton'], false);
}
function disableButtons() {
  setButtonsDisabled(this, ['confirmButton', 'cancelButton'], true);
} // @deprecated

function enableConfirmButton() {
  warnAboutDepreation('Swal.disableConfirmButton()', "Swal.getConfirmButton().removeAttribute('disabled')");
  setButtonsDisabled(this, ['confirmButton'], false);
} // @deprecated

function disableConfirmButton() {
  warnAboutDepreation('Swal.enableConfirmButton()', "Swal.getConfirmButton().setAttribute('disabled', '')");
  setButtonsDisabled(this, ['confirmButton'], true);
}
function enableInput() {
  return setInputDisabled(this.getInput(), false);
}
function disableInput() {
  return setInputDisabled(this.getInput(), true);
}

function showValidationMessage(error) {
  var domCache = privateProps.domCache.get(this);
  domCache.validationMessage.innerHTML = error;
  var popupComputedStyle = window.getComputedStyle(domCache.popup);
  domCache.validationMessage.style.marginLeft = "-".concat(popupComputedStyle.getPropertyValue('padding-left'));
  domCache.validationMessage.style.marginRight = "-".concat(popupComputedStyle.getPropertyValue('padding-right'));
  show(domCache.validationMessage);
  var input = this.getInput();

  if (input) {
    input.setAttribute('aria-invalid', true);
    input.setAttribute('aria-describedBy', swalClasses['validation-message']);
    focusInput(input);
    addClass(input, swalClasses.inputerror);
  }
} // Hide block with validation message

function resetValidationMessage$1() {
  var domCache = privateProps.domCache.get(this);

  if (domCache.validationMessage) {
    hide(domCache.validationMessage);
  }

  var input = this.getInput();

  if (input) {
    input.removeAttribute('aria-invalid');
    input.removeAttribute('aria-describedBy');
    removeClass(input, swalClasses.inputerror);
  }
}

function getProgressSteps$1() {
  warnAboutDepreation('Swal.getProgressSteps()', "const swalInstance = Swal.fire({progressSteps: ['1', '2', '3']}); const progressSteps = swalInstance.params.progressSteps");
  var innerParams = privateProps.innerParams.get(this);
  return innerParams.progressSteps;
}
function setProgressSteps(progressSteps) {
  warnAboutDepreation('Swal.setProgressSteps()', 'Swal.update()');
  var innerParams = privateProps.innerParams.get(this);

  var updatedParams = _extends({}, innerParams, {
    progressSteps: progressSteps
  });

  renderProgressSteps(this, updatedParams);
  privateProps.innerParams.set(this, updatedParams);
}
function showProgressSteps() {
  var domCache = privateProps.domCache.get(this);
  show(domCache.progressSteps);
}
function hideProgressSteps() {
  var domCache = privateProps.domCache.get(this);
  hide(domCache.progressSteps);
}

var Timer =
/*#__PURE__*/
function () {
  function Timer(callback, delay) {
    _classCallCheck(this, Timer);

    this.callback = callback;
    this.remaining = delay;
    this.running = false;
    this.start();
  }

  _createClass(Timer, [{
    key: "start",
    value: function start() {
      if (!this.running) {
        this.running = true;
        this.started = new Date();
        this.id = setTimeout(this.callback, this.remaining);
      }

      return this.remaining;
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.running) {
        this.running = false;
        clearTimeout(this.id);
        this.remaining -= new Date() - this.started;
      }

      return this.remaining;
    }
  }, {
    key: "increase",
    value: function increase(n) {
      var running = this.running;

      if (running) {
        this.stop();
      }

      this.remaining += n;

      if (running) {
        this.start();
      }

      return this.remaining;
    }
  }, {
    key: "getTimerLeft",
    value: function getTimerLeft() {
      if (this.running) {
        this.stop();
        this.start();
      }

      return this.remaining;
    }
  }, {
    key: "isRunning",
    value: function isRunning() {
      return this.running;
    }
  }]);

  return Timer;
}();

var defaultInputValidators = {
  email: function email(string, validationMessage) {
    return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
  },
  url: function url(string, validationMessage) {
    // taken from https://stackoverflow.com/a/3809435 with a small change from #1306
    return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
  }
};

function setDefaultInputValidators(params) {
  // Use default `inputValidator` for supported input types if not provided
  if (!params.inputValidator) {
    Object.keys(defaultInputValidators).forEach(function (key) {
      if (params.input === key) {
        params.inputValidator = defaultInputValidators[key];
      }
    });
  }
}

function validateCustomTargetElement(params) {
  // Determine if the custom target element is valid
  if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
    warn('Target parameter is not valid, defaulting to "body"');
    params.target = 'body';
  }
}
/**
 * Set type, text and actions on popup
 *
 * @param params
 * @returns {boolean}
 */


function setParameters(params) {
  setDefaultInputValidators(params); // showLoaderOnConfirm && preConfirm

  if (params.showLoaderOnConfirm && !params.preConfirm) {
    warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
  } // params.animation will be actually used in renderPopup.js
  // but in case when params.animation is a function, we need to call that function
  // before popup (re)initialization, so it'll be possible to check Swal.isVisible()
  // inside the params.animation function


  params.animation = callIfFunction(params.animation);
  validateCustomTargetElement(params); // Replace newlines with <br> in title

  if (typeof params.title === 'string') {
    params.title = params.title.split('\n').join('<br />');
  }

  init(params);
}

function swalOpenAnimationFinished(popup, container) {
  popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
  container.style.overflowY = 'auto';
}
/**
 * Open popup, add necessary classes and styles, fix scrollbar
 *
 * @param {Array} params
 */


var openPopup = function openPopup(params) {
  var container = getContainer();
  var popup = getPopup();

  if (params.onBeforeOpen !== null && typeof params.onBeforeOpen === 'function') {
    params.onBeforeOpen(popup);
  }

  if (params.animation) {
    addClass(popup, swalClasses.show);
    addClass(container, swalClasses.fade);
  }

  show(popup); // scrolling is 'hidden' until animation is done, after that 'auto'

  if (animationEndEvent && hasCssAnimation(popup)) {
    container.style.overflowY = 'hidden';
    popup.addEventListener(animationEndEvent, swalOpenAnimationFinished.bind(null, popup, container));
  } else {
    container.style.overflowY = 'auto';
  }

  addClass([document.documentElement, document.body, container], swalClasses.shown);

  if (params.heightAuto && params.backdrop && !params.toast) {
    addClass([document.documentElement, document.body], swalClasses['height-auto']);
  }

  if (isModal()) {
    if (params.scrollbarPadding) {
      fixScrollbar();
    }

    iOSfix();
    IEfix();
    setAriaHidden(); // sweetalert2/issues/1247

    setTimeout(function () {
      container.scrollTop = 0;
    });
  }

  if (!isToast() && !globalState.previousActiveElement) {
    globalState.previousActiveElement = document.activeElement;
  }

  if (params.onOpen !== null && typeof params.onOpen === 'function') {
    setTimeout(function () {
      params.onOpen(popup);
    });
  }
};

var handleInputOptions = function handleInputOptions(instance, params) {
  var content = getContent();

  var processInputOptions = function processInputOptions(inputOptions) {
    return populateInputOptions[params.input](content, formatInputOptions(inputOptions), params);
  };

  if (isPromise(params.inputOptions)) {
    showLoading();
    params.inputOptions.then(function (inputOptions) {
      instance.hideLoading();
      processInputOptions(inputOptions);
    });
  } else if (_typeof(params.inputOptions) === 'object') {
    processInputOptions(params.inputOptions);
  } else {
    error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(params.inputOptions)));
  }
};
var handleInputValue = function handleInputValue(instance, params) {
  var input = instance.getInput();
  hide(input);
  params.inputValue.then(function (inputValue) {
    input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : inputValue + '';
    show(input);
    input.focus();
    instance.hideLoading();
  })["catch"](function (err) {
    error('Error in inputValue promise: ' + err);
    input.value = '';
    show(input);
    input.focus();
    instance.hideLoading();
  });
};
var populateInputOptions = {
  select: function select(content, inputOptions, params) {
    var select = getChildByClass(content, swalClasses.select);
    inputOptions.forEach(function (inputOption) {
      var optionValue = inputOption[0];
      var optionLabel = inputOption[1];
      var option = document.createElement('option');
      option.value = optionValue;
      option.innerHTML = optionLabel;

      if (params.inputValue.toString() === optionValue.toString()) {
        option.selected = true;
      }

      select.appendChild(option);
    });
    select.focus();
  },
  radio: function radio(content, inputOptions, params) {
    var radio = getChildByClass(content, swalClasses.radio);
    inputOptions.forEach(function (inputOption) {
      var radioValue = inputOption[0];
      var radioLabel = inputOption[1];
      var radioInput = document.createElement('input');
      var radioLabelElement = document.createElement('label');
      radioInput.type = 'radio';
      radioInput.name = swalClasses.radio;
      radioInput.value = radioValue;

      if (params.inputValue.toString() === radioValue.toString()) {
        radioInput.checked = true;
      }

      var label = document.createElement('span');
      label.innerHTML = radioLabel;
      label.className = swalClasses.label;
      radioLabelElement.appendChild(radioInput);
      radioLabelElement.appendChild(label);
      radio.appendChild(radioLabelElement);
    });
    var radios = radio.querySelectorAll('input');

    if (radios.length) {
      radios[0].focus();
    }
  }
  /**
   * Converts `inputOptions` into an array of `[value, label]`s
   * @param inputOptions
   */

};

var formatInputOptions = function formatInputOptions(inputOptions) {
  var result = [];

  if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
    inputOptions.forEach(function (value, key) {
      result.push([key, value]);
    });
  } else {
    Object.keys(inputOptions).forEach(function (key) {
      result.push([key, inputOptions[key]]);
    });
  }

  return result;
};

function _main(userParams) {
  var _this = this;

  showWarningsForParams(userParams); // Check if there is another Swal closing

  if (getPopup() && globalState.swalCloseEventFinishedCallback) {
    globalState.swalCloseEventFinishedCallback();
    delete globalState.swalCloseEventFinishedCallback;
  } // Check if there is a swal disposal defer timer


  if (globalState.deferDisposalTimer) {
    clearTimeout(globalState.deferDisposalTimer);
    delete globalState.deferDisposalTimer;
  }

  var innerParams = _extends({}, defaultParams, userParams);

  setParameters(innerParams);
  Object.freeze(innerParams); // clear the previous timer

  if (globalState.timeout) {
    globalState.timeout.stop();
    delete globalState.timeout;
  } // clear the restore focus timeout


  clearTimeout(globalState.restoreFocusTimeout);
  var domCache = {
    popup: getPopup(),
    container: getContainer(),
    content: getContent(),
    actions: getActions(),
    confirmButton: getConfirmButton(),
    cancelButton: getCancelButton(),
    closeButton: getCloseButton(),
    validationMessage: getValidationMessage(),
    progressSteps: getProgressSteps()
  };
  privateProps.domCache.set(this, domCache);
  render(this, innerParams);
  privateProps.innerParams.set(this, innerParams);
  var constructor = this.constructor;
  return new Promise(function (resolve) {
    // functions to handle all closings/dismissals
    var succeedWith = function succeedWith(value) {
      _this.closePopup({
        value: value
      });
    };

    var dismissWith = function dismissWith(dismiss) {
      _this.closePopup({
        dismiss: dismiss
      });
    };

    privateMethods.swalPromiseResolve.set(_this, resolve); // Close on timer

    if (innerParams.timer) {
      globalState.timeout = new Timer(function () {
        dismissWith('timer');
        delete globalState.timeout;
      }, innerParams.timer);
    } // Get the value of the popup input


    var getInputValue = function getInputValue() {
      var input = _this.getInput();

      if (!input) {
        return null;
      }

      switch (innerParams.input) {
        case 'checkbox':
          return input.checked ? 1 : 0;

        case 'radio':
          return input.checked ? input.value : null;

        case 'file':
          return input.files.length ? input.files[0] : null;

        default:
          return innerParams.inputAutoTrim ? input.value.trim() : input.value;
      }
    }; // input autofocus


    if (innerParams.input) {
      setTimeout(function () {
        var input = _this.getInput();

        if (input) {
          focusInput(input);
        }
      }, 0);
    }

    var confirm = function confirm(value) {
      if (innerParams.showLoaderOnConfirm) {
        constructor.showLoading(); // TODO: make showLoading an *instance* method
      }

      if (innerParams.preConfirm) {
        _this.resetValidationMessage();

        var preConfirmPromise = Promise.resolve().then(function () {
          return innerParams.preConfirm(value, innerParams.validationMessage);
        });
        preConfirmPromise.then(function (preConfirmValue) {
          if (isVisible(domCache.validationMessage) || preConfirmValue === false) {
            _this.hideLoading();
          } else {
            succeedWith(typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
          }
        });
      } else {
        succeedWith(value);
      }
    }; // Mouse interactions


    var onButtonEvent = function onButtonEvent(e) {
      var target = e.target;
      var confirmButton = domCache.confirmButton,
          cancelButton = domCache.cancelButton;
      var targetedConfirm = confirmButton && (confirmButton === target || confirmButton.contains(target));
      var targetedCancel = cancelButton && (cancelButton === target || cancelButton.contains(target));

      switch (e.type) {
        case 'click':
          // Clicked 'confirm'
          if (targetedConfirm) {
            _this.disableButtons();

            if (innerParams.input) {
              var inputValue = getInputValue();

              if (innerParams.inputValidator) {
                _this.disableInput();

                var validationPromise = Promise.resolve().then(function () {
                  return innerParams.inputValidator(inputValue, innerParams.validationMessage);
                });
                validationPromise.then(function (validationMessage) {
                  _this.enableButtons();

                  _this.enableInput();

                  if (validationMessage) {
                    _this.showValidationMessage(validationMessage);
                  } else {
                    confirm(inputValue);
                  }
                });
              } else if (!_this.getInput().checkValidity()) {
                _this.enableButtons();

                _this.showValidationMessage(innerParams.validationMessage);
              } else {
                confirm(inputValue);
              }
            } else {
              confirm(true);
            } // Clicked 'cancel'

          } else if (targetedCancel) {
            _this.disableButtons();

            dismissWith(constructor.DismissReason.cancel);
          }

          break;

        default:
      }
    };

    var buttons = domCache.popup.querySelectorAll('button');

    for (var i = 0; i < buttons.length; i++) {
      buttons[i].onclick = onButtonEvent;
      buttons[i].onmouseover = onButtonEvent;
      buttons[i].onmouseout = onButtonEvent;
      buttons[i].onmousedown = onButtonEvent;
    } // Closing popup by close button


    domCache.closeButton.onclick = function () {
      dismissWith(constructor.DismissReason.close);
    };

    if (innerParams.toast) {
      // Closing popup by internal click
      domCache.popup.onclick = function () {
        if (innerParams.showConfirmButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.input) {
          return;
        }

        dismissWith(constructor.DismissReason.close);
      };
    } else {
      var ignoreOutsideClick = false; // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider

      domCache.popup.onmousedown = function () {
        domCache.container.onmouseup = function (e) {
          domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
          // have any other direct children aside of the popup

          if (e.target === domCache.container) {
            ignoreOutsideClick = true;
          }
        };
      }; // Ignore click events that had mousedown on the container but mouseup on the popup


      domCache.container.onmousedown = function () {
        domCache.popup.onmouseup = function (e) {
          domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

          if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
            ignoreOutsideClick = true;
          }
        };
      };

      domCache.container.onclick = function (e) {
        if (ignoreOutsideClick) {
          ignoreOutsideClick = false;
          return;
        }

        if (e.target !== domCache.container) {
          return;
        }

        if (callIfFunction(innerParams.allowOutsideClick)) {
          dismissWith(constructor.DismissReason.backdrop);
        }
      };
    } // Reverse buttons (Confirm on the right side)


    if (innerParams.reverseButtons) {
      domCache.confirmButton.parentNode.insertBefore(domCache.cancelButton, domCache.confirmButton);
    } else {
      domCache.confirmButton.parentNode.insertBefore(domCache.confirmButton, domCache.cancelButton);
    } // Focus handling


    var setFocus = function setFocus(index, increment) {
      var focusableElements = getFocusableElements(innerParams.focusCancel); // search for visible elements and select the next possible match

      for (var _i = 0; _i < focusableElements.length; _i++) {
        index = index + increment; // rollover to first item

        if (index === focusableElements.length) {
          index = 0; // go to last item
        } else if (index === -1) {
          index = focusableElements.length - 1;
        }

        return focusableElements[index].focus();
      } // no visible focusable elements, focus the popup


      domCache.popup.focus();
    };

    var keydownHandler = function keydownHandler(e, innerParams) {
      if (innerParams.stopKeydownPropagation) {
        e.stopPropagation();
      }

      var arrowKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Left', 'Right', 'Up', 'Down' // IE11
      ];

      if (e.key === 'Enter' && !e.isComposing) {
        if (e.target && _this.getInput() && e.target.outerHTML === _this.getInput().outerHTML) {
          if (['textarea', 'file'].indexOf(innerParams.input) !== -1) {
            return; // do not submit
          }

          constructor.clickConfirm();
          e.preventDefault();
        } // TAB

      } else if (e.key === 'Tab') {
        var targetElement = e.target;
        var focusableElements = getFocusableElements(innerParams.focusCancel);
        var btnIndex = -1;

        for (var _i2 = 0; _i2 < focusableElements.length; _i2++) {
          if (targetElement === focusableElements[_i2]) {
            btnIndex = _i2;
            break;
          }
        }

        if (!e.shiftKey) {
          // Cycle to the next button
          setFocus(btnIndex, 1);
        } else {
          // Cycle to the prev button
          setFocus(btnIndex, -1);
        }

        e.stopPropagation();
        e.preventDefault(); // ARROWS - switch focus between buttons
      } else if (arrowKeys.indexOf(e.key) !== -1) {
        // focus Cancel button if Confirm button is currently focused
        if (document.activeElement === domCache.confirmButton && isVisible(domCache.cancelButton)) {
          domCache.cancelButton.focus(); // and vice versa
        } else if (document.activeElement === domCache.cancelButton && isVisible(domCache.confirmButton)) {
          domCache.confirmButton.focus();
        } // ESC

      } else if ((e.key === 'Escape' || e.key === 'Esc') && callIfFunction(innerParams.allowEscapeKey) === true) {
        e.preventDefault();
        dismissWith(constructor.DismissReason.esc);
      }
    };

    if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (!innerParams.toast) {
      globalState.keydownHandler = function (e) {
        return keydownHandler(e, innerParams);
      };

      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : domCache.popup;
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }

    _this.enableButtons();

    _this.hideLoading();

    _this.resetValidationMessage();

    if (innerParams.toast && (innerParams.input || innerParams.footer || innerParams.showCloseButton)) {
      addClass(document.body, swalClasses['toast-column']);
    } else {
      removeClass(document.body, swalClasses['toast-column']);
    } // inputOptions, inputValue


    if (innerParams.input === 'select' || innerParams.input === 'radio') {
      handleInputOptions(_this, innerParams);
    } else if (['text', 'email', 'number', 'tel', 'textarea'].indexOf(innerParams.input) !== -1 && isPromise(innerParams.inputValue)) {
      handleInputValue(_this, innerParams);
    }

    openPopup(innerParams);

    if (!innerParams.toast) {
      if (!callIfFunction(innerParams.allowEnterKey)) {
        if (document.activeElement && typeof document.activeElement.blur === 'function') {
          document.activeElement.blur();
        }
      } else if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
        domCache.cancelButton.focus();
      } else if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
        domCache.confirmButton.focus();
      } else {
        setFocus(-1, 1);
      }
    } // fix scroll


    domCache.container.scrollTop = 0;
  });
}

/**
 * Updates popup parameters.
 */

function update(params) {
  var validUpdatableParams = {}; // assign valid params from `params` to `defaults`

  Object.keys(params).forEach(function (param) {
    if (Swal.isUpdatableParameter(param)) {
      validUpdatableParams[param] = params[param];
    } else {
      warn("Invalid parameter to update: \"".concat(param, "\". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js"));
    }
  });
  var innerParams = privateProps.innerParams.get(this);

  var updatedParams = _extends({}, innerParams, validUpdatableParams);

  render(this, updatedParams);
  privateProps.innerParams.set(this, updatedParams);
  Object.defineProperties(this, {
    params: {
      value: _extends({}, this.params, params),
      writable: false,
      enumerable: true
    }
  });
}



var instanceMethods = Object.freeze({
	hideLoading: hideLoading,
	disableLoading: hideLoading,
	getInput: getInput$1,
	close: close,
	closePopup: close,
	closeModal: close,
	closeToast: close,
	enableButtons: enableButtons,
	disableButtons: disableButtons,
	enableConfirmButton: enableConfirmButton,
	disableConfirmButton: disableConfirmButton,
	enableInput: enableInput,
	disableInput: disableInput,
	showValidationMessage: showValidationMessage,
	resetValidationMessage: resetValidationMessage$1,
	getProgressSteps: getProgressSteps$1,
	setProgressSteps: setProgressSteps,
	showProgressSteps: showProgressSteps,
	hideProgressSteps: hideProgressSteps,
	_main: _main,
	update: update
});

var currentInstance; // SweetAlert constructor

function SweetAlert() {
  // Prevent run in Node env

  /* istanbul ignore if */
  if (typeof window === 'undefined') {
    return;
  } // Check for the existence of Promise

  /* istanbul ignore if */


  if (typeof Promise === 'undefined') {
    error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
  }

  currentInstance = this;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var outerParams = Object.freeze(this.constructor.argsToParams(args));
  Object.defineProperties(this, {
    params: {
      value: outerParams,
      writable: false,
      enumerable: true,
      configurable: true
    }
  });

  var promise = this._main(this.params);

  privateProps.promise.set(this, promise);
} // `catch` cannot be the name of a module export, so we define our thenable methods here instead


SweetAlert.prototype.then = function (onFulfilled) {
  var promise = privateProps.promise.get(this);
  return promise.then(onFulfilled);
};

SweetAlert.prototype["finally"] = function (onFinally) {
  var promise = privateProps.promise.get(this);
  return promise["finally"](onFinally);
}; // Assign instance methods from src/instanceMethods/*.js to prototype


_extends(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor


_extends(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility


Object.keys(instanceMethods).forEach(function (key) {
  SweetAlert[key] = function () {
    if (currentInstance) {
      var _currentInstance;

      return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
    }
  };
});
SweetAlert.DismissReason = DismissReason;
SweetAlert.version = '8.13.6';

var Swal = SweetAlert;
Swal["default"] = Swal;

return Swal;

})));
if (typeof this !== 'undefined' && this.Sweetalert2){  this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2}

/*! Summernote v0.8.12 | (c) 2013- Alan Hong and other contributors | MIT license */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],e):e((t=t||self).jQuery)}(this,function(C){"use strict";C=C&&C.hasOwnProperty("default")?C.default:C;var i=function(){function t(t,e,o,n){this.markup=t,this.children=e,this.options=o,this.callback=n}return t.prototype.render=function(t){var o=C(this.markup);if(this.options&&this.options.contents&&o.html(this.options.contents),this.options&&this.options.className&&o.addClass(this.options.className),this.options&&this.options.data&&C.each(this.options.data,function(t,e){o.attr("data-"+t,e)}),this.options&&this.options.click&&o.on("click",this.options.click),this.children){var e=o.find(".note-children-container");this.children.forEach(function(t){t.render(e.length?e:o)})}return this.callback&&this.callback(o,this.options),this.options&&this.options.callback&&this.options.callback(o),t&&t.append(o),o},t}(),o=function(o,n){return function(){var t="object"==typeof arguments[1]?arguments[1]:arguments[0],e=Array.isArray(arguments[0])?arguments[0]:[];return t&&t.children&&(e=t.children),new i(o,e,t,n)}},t=o('<div class="note-editor note-frame card"/>'),e=o('<div class="note-toolbar card-header" role="toolbar"></div>'),n=o('<div class="note-editing-area"/>'),r=o('<textarea class="note-codable" role="textbox" aria-multiline="true"/>'),s=o('<div class="note-editable card-block" contentEditable="true" role="textbox" aria-multiline="true"/>'),a=o(['<output class="note-status-output" aria-live="polite"/>','<div class="note-statusbar" role="status">','  <output class="note-status-output" aria-live="polite"></output>','  <div class="note-resizebar" role="seperator" aria-orientation="horizontal" aria-label="Resize">','    <div class="note-icon-bar"/>','    <div class="note-icon-bar"/>','    <div class="note-icon-bar"/>',"  </div>","</div>"].join("")),l=o('<div class="note-editor"/>'),c=o(['<div class="note-editable" contentEditable="true" role="textbox" aria-multiline="true"/>','<output class="note-status-output" aria-live="polite"/>'].join("")),d=o('<div class="note-btn-group btn-group">'),u=o('<div class="dropdown-menu" role="list">',function(t,i){var e=Array.isArray(i.items)?i.items.map(function(t){var e="string"==typeof t?t:t.value||"",o=i.template?i.template(t):t,n="object"==typeof t?t.option:void 0;return'<a class="dropdown-item" href="#" '+('data-value="'+e+'"'+(void 0!==n?' data-option="'+n+'"':""))+' role="listitem" aria-label="'+e+'">'+o+"</a>"}).join(""):i.items;t.html(e).attr({"aria-label":i.title})}),h=o('<div class="dropdown-menu note-check" role="list">',function(t,n){var e=Array.isArray(n.items)?n.items.map(function(t){var e="string"==typeof t?t:t.value||"",o=n.template?n.template(t):t;return'<a class="dropdown-item" href="#" data-value="'+e+'" role="listitem" aria-label="'+t+'">'+v(n.checkClassName)+" "+o+"</a>"}).join(""):n.items;t.html(e).attr({"aria-label":n.title})}),p=o('<div class="note-color-palette"/>',function(t,e){for(var o=[],n=0,i=e.colors.length;n<i;n++){for(var r=e.eventName,s=e.colors[n],a=e.colorsName[n],l=[],c=0,d=s.length;c<d;c++){var u=s[c],h=a[c];l.push(['<button type="button" class="note-color-btn"','style="background-color:',u,'" ','data-event="',r,'" ','data-value="',u,'" ','title="',h,'" ','aria-label="',h,'" ','data-toggle="button" tabindex="-1"></button>'].join(""))}o.push('<div class="note-color-row">'+l.join("")+"</div>")}t.html(o.join("")),e.tooltip&&t.find(".note-color-btn").tooltip({container:e.container,trigger:"hover",placement:"bottom"})}),f=o('<div class="modal" aria-hidden="false" tabindex="-1" role="dialog"/>',function(t,e){e.fade&&t.addClass("fade"),t.attr({"aria-label":e.title}),t.html(['<div class="modal-dialog">','  <div class="modal-content">',e.title?'    <div class="modal-header">      <h4 class="modal-title">'+e.title+'</h4>      <button type="button" class="close" data-dismiss="modal" aria-label="Close" aria-hidden="true">&times;</button>    </div>':"",'    <div class="modal-body">'+e.body+"</div>",e.footer?'    <div class="modal-footer">'+e.footer+"</div>":"","  </div>","</div>"].join(""))}),m=o(['<div class="note-popover popover in">','  <div class="arrow"/>','  <div class="popover-content note-children-container"/>',"</div>"].join(""),function(t,e){var o=void 0!==e.direction?e.direction:"bottom";t.addClass(o),e.hideArrow&&t.find(".arrow").hide()}),g=o('<div class="form-check"></div>',function(t,e){t.html(['<label class="form-check-label"'+(e.id?' for="'+e.id+'"':"")+">",' <input role="checkbox" type="checkbox" class="form-check-input"'+(e.id?' id="'+e.id+'"':""),e.checked?" checked":"",' aria-label="'+(e.text?e.text:"")+'"',' aria-checked="'+(e.checked?"true":"false")+'"/>'," "+(e.text?e.text:"")+"</label>"].join(""))}),v=function(t,e){return"<"+(e=e||"i")+' class="'+t+'"/>'},b={editor:t,toolbar:e,editingArea:n,codable:r,editable:s,statusbar:a,airEditor:l,airEditable:c,buttonGroup:d,dropdown:u,dropdownButtonContents:function(t){return t},dropdownCheck:h,palette:p,dialog:f,popover:m,icon:v,checkbox:g,options:{},button:function(t,e){return o('<button type="button" class="note-btn btn btn-light btn-sm" role="button" tabindex="-1">',function(t,e){e&&e.tooltip&&t.attr({title:e.tooltip,"aria-label":e.tooltip}).tooltip({container:void 0!==e.container?e.container:"body",trigger:"hover",placement:"bottom"}).on("click",function(t){C(t.currentTarget).tooltip("hide")})})(t,e)},toggleBtn:function(t,e){t.toggleClass("disabled",!e),t.attr("disabled",!e)},toggleBtnActive:function(t,e){t.toggleClass("active",e)},onDialogShown:function(t,e){t.one("shown.bs.modal",e)},onDialogHidden:function(t,e){t.one("hidden.bs.modal",e)},showDialog:function(t){t.modal("show")},hideDialog:function(t){t.modal("hide")},createLayout:function(t,e){var o=(e.airMode?b.airEditor([b.editingArea([b.airEditable()])]):b.editor([b.toolbar(),b.editingArea([b.codable(),b.editable()]),b.statusbar()])).render();return o.insertAfter(t),{note:t,editor:o,toolbar:o.find(".note-toolbar"),editingArea:o.find(".note-editing-area"),editable:o.find(".note-editable"),codable:o.find(".note-codable"),statusbar:o.find(".note-statusbar")}},removeLayout:function(t,e){t.html(e.editable.html()),e.editor.remove(),t.show()}};C.summernote=C.summernote||{lang:{}},C.extend(C.summernote.lang,{"en-US":{font:{bold:"Bold",italic:"Italic",underline:"Underline",clear:"Remove Font Style",height:"Line Height",name:"Font Family",strikethrough:"Strikethrough",subscript:"Subscript",superscript:"Superscript",size:"Font Size"},image:{image:"Picture",insert:"Insert Image",resizeFull:"Resize full",resizeHalf:"Resize half",resizeQuarter:"Resize quarter",resizeNone:"Original size",floatLeft:"Float Left",floatRight:"Float Right",floatNone:"Remove float",shapeRounded:"Shape: Rounded",shapeCircle:"Shape: Circle",shapeThumbnail:"Shape: Thumbnail",shapeNone:"Shape: None",dragImageHere:"Drag image or text here",dropImage:"Drop image or Text",selectFromFiles:"Select from files",maximumFileSize:"Maximum file size",maximumFileSizeError:"Maximum file size exceeded.",url:"Image URL",remove:"Remove Image",original:"Original"},video:{video:"Video",videoLink:"Video Link",insert:"Insert Video",url:"Video URL",providers:"(YouTube, Vimeo, Vine, Instagram, DailyMotion or Youku)"},link:{link:"Link",insert:"Insert Link",unlink:"Unlink",edit:"Edit",textToDisplay:"Text to display",url:"To what URL should this link go?",openInNewWindow:"Open in new window"},table:{table:"Table",addRowAbove:"Add row above",addRowBelow:"Add row below",addColLeft:"Add column left",addColRight:"Add column right",delRow:"Delete row",delCol:"Delete column",delTable:"Delete table"},hr:{insert:"Insert Horizontal Rule"},style:{style:"Style",p:"Normal",blockquote:"Quote",pre:"Code",h1:"Header 1",h2:"Header 2",h3:"Header 3",h4:"Header 4",h5:"Header 5",h6:"Header 6"},lists:{unordered:"Unordered list",ordered:"Ordered list"},options:{help:"Help",fullscreen:"Full Screen",codeview:"Code View"},paragraph:{paragraph:"Paragraph",outdent:"Outdent",indent:"Indent",left:"Align left",center:"Align center",right:"Align right",justify:"Justify full"},color:{recent:"Recent Color",more:"More Color",background:"Background Color",foreground:"Foreground Color",transparent:"Transparent",setTransparent:"Set transparent",reset:"Reset",resetToDefault:"Reset to default",cpSelect:"Select"},shortcut:{shortcuts:"Keyboard shortcuts",close:"Close",textFormatting:"Text formatting",action:"Action",paragraphFormatting:"Paragraph formatting",documentStyle:"Document Style",extraKeys:"Extra keys"},help:{insertParagraph:"Insert Paragraph",undo:"Undoes the last command",redo:"Redoes the last command",tab:"Tab",untab:"Untab",bold:"Set a bold style",italic:"Set a italic style",underline:"Set a underline style",strikethrough:"Set a strikethrough style",removeFormat:"Clean a style",justifyLeft:"Set left align",justifyCenter:"Set center align",justifyRight:"Set right align",justifyFull:"Set full align",insertUnorderedList:"Toggle unordered list",insertOrderedList:"Toggle ordered list",outdent:"Outdent on current paragraph",indent:"Indent on current paragraph",formatPara:"Change current block's format as a paragraph(P tag)",formatH1:"Change current block's format as H1",formatH2:"Change current block's format as H2",formatH3:"Change current block's format as H3",formatH4:"Change current block's format as H4",formatH5:"Change current block's format as H5",formatH6:"Change current block's format as H6",insertHorizontalRule:"Insert horizontal rule","linkDialog.show":"Show Link Dialog"},history:{undo:"Undo",redo:"Redo"},specialChar:{specialChar:"SPECIAL CHARACTERS",select:"Select Special characters"}}});var y="function"==typeof define&&define.amd;var k,w=navigator.userAgent,x=/MSIE|Trident/i.test(w);if(x){var S=/MSIE (\d+[.]\d+)/.exec(w);S&&(k=parseFloat(S[1])),(S=/Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/.exec(w))&&(k=parseFloat(S[1]))}var I=/Edge\/\d+/.test(w),T=!!window.CodeMirror,N="ontouchstart"in window||0<navigator.MaxTouchPoints||0<navigator.msMaxTouchPoints,E=x||I?"DOMCharacterDataModified DOMSubtreeModified DOMNodeInserted":"input",R={isMac:-1<navigator.appVersion.indexOf("Mac"),isMSIE:x,isEdge:I,isFF:!I&&/firefox/i.test(w),isPhantom:/PhantomJS/i.test(w),isWebkit:!I&&/webkit/i.test(w),isChrome:!I&&/chrome/i.test(w),isSafari:!I&&/safari/i.test(w),browserVersion:k,jqueryVersion:parseFloat(C.fn.jquery),isSupportAmd:y,isSupportTouch:N,hasCodeMirror:T,isFontInstalled:function(t){var e="Comic Sans MS"===t?"Courier New":"Comic Sans MS",o="mmmmmmmmmmwwwww",n=document.createElement("canvas").getContext("2d");n.font="200px '"+e+"'";var i=n.measureText(o).width;return n.font="200px '"+t+"', '"+e+"'",i!==n.measureText(o).width},isW3CRangeSupport:!!document.createRange,inputEventName:E};var L=0;var A={eq:function(e){return function(t){return e===t}},eq2:function(t,e){return t===e},peq2:function(o){return function(t,e){return t[o]===e[o]}},ok:function(){return!0},fail:function(){return!1},self:function(t){return t},not:function(t){return function(){return!t.apply(t,arguments)}},and:function(e,o){return function(t){return e(t)&&o(t)}},invoke:function(t,e){return function(){return t[e].apply(t,arguments)}},uniqueId:function(t){var e=++L+"";return t?t+e:e},rect2bnd:function(t){var e=$(document);return{top:t.top+e.scrollTop(),left:t.left+e.scrollLeft(),width:t.right-t.left,height:t.bottom-t.top}},invertObject:function(t){var e={};for(var o in t)t.hasOwnProperty(o)&&(e[t[o]]=o);return e},namespaceToCamel:function(t,e){return(e=e||"")+t.split(".").map(function(t){return t.substring(0,1).toUpperCase()+t.substring(1)}).join("")},debounce:function(n,i,r){var s;return function(){var t=this,e=arguments,o=r&&!s;clearTimeout(s),s=setTimeout(function(){s=null,r||n.apply(t,e)},i),o&&n.apply(t,e)}},isValidUrl:function(t){return/[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi.test(t)}};function F(t){return t[0]}function P(t){return t[t.length-1]}function H(t){return t.slice(1)}function D(t,e){return!!(t&&t.length&&e)&&-1!==t.indexOf(e)}var B={head:F,last:P,initial:function(t){return t.slice(0,t.length-1)},tail:H,prev:function(t,e){if(t&&t.length&&e){var o=t.indexOf(e);return-1===o?null:t[o-1]}return null},next:function(t,e){if(t&&t.length&&e){var o=t.indexOf(e);return-1===o?null:t[o+1]}return null},find:function(t,e){for(var o=0,n=t.length;o<n;o++){var i=t[o];if(e(i))return i}},contains:D,all:function(t,e){for(var o=0,n=t.length;o<n;o++)if(!e(t[o]))return!1;return!0},sum:function(t,o){return o=o||A.self,t.reduce(function(t,e){return t+o(e)},0)},from:function(t){for(var e=[],o=t.length,n=-1;++n<o;)e[n]=t[n];return e},isEmpty:function(t){return!t||!t.length},clusterBy:function(t,n){return t.length?H(t).reduce(function(t,e){var o=P(t);return n(P(o),e)?o[o.length]=e:t[t.length]=[e],t},[[F(t)]]):[]},compact:function(t){for(var e=[],o=0,n=t.length;o<n;o++)t[o]&&e.push(t[o]);return e},unique:function(t){for(var e=[],o=0,n=t.length;o<n;o++)D(e,t[o])||e.push(t[o]);return e}},z=String.fromCharCode(160);function M(t){return t&&C(t).hasClass("note-editable")}function O(e){return e=e.toUpperCase(),function(t){return t&&t.nodeName.toUpperCase()===e}}function U(t){return t&&3===t.nodeType}function j(t){return t&&/^BR|^IMG|^HR|^IFRAME|^BUTTON|^INPUT|^AUDIO|^VIDEO|^EMBED/.test(t.nodeName.toUpperCase())}function K(t){return!M(t)&&(t&&/^DIV|^P|^LI|^H[1-7]/.test(t.nodeName.toUpperCase()))}var W=O("PRE"),q=O("LI");var V=O("TABLE"),G=O("DATA");function _(t){return!(X(t)||Z(t)||Y(t)||K(t)||V(t)||J(t)||G(t))}function Z(t){return t&&/^UL|^OL/.test(t.nodeName.toUpperCase())}var Y=O("HR");function Q(t){return t&&/^TD|^TH/.test(t.nodeName.toUpperCase())}var J=O("BLOCKQUOTE");function X(t){return Q(t)||J(t)||M(t)}var tt=O("A");var et=O("BODY");var ot=R.isMSIE&&R.browserVersion<11?"&nbsp;":"<br>";function nt(t){return U(t)?t.nodeValue.length:t?t.childNodes.length:0}function it(t){var e=nt(t);return 0===e||(!U(t)&&1===e&&t.innerHTML===ot||!(!B.all(t.childNodes,U)||""!==t.innerHTML))}function rt(t){j(t)||nt(t)||(t.innerHTML=ot)}function st(t,e){for(;t;){if(e(t))return t;if(M(t))break;t=t.parentNode}return null}function at(t,e){e=e||A.fail;var o=[];return st(t,function(t){return M(t)||o.push(t),e(t)}),o}function lt(t,e){e=e||A.fail;for(var o=[];t&&!e(t);)o.push(t),t=t.nextSibling;return o}function ct(t,e){var o=e.nextSibling,n=e.parentNode;return o?n.insertBefore(t,o):n.appendChild(t),t}function dt(o,t){return C.each(t,function(t,e){o.appendChild(e)}),o}function ut(t){return 0===t.offset}function ht(t){return t.offset===nt(t.node)}function pt(t){return ut(t)||ht(t)}function ft(t,e){for(;t&&t!==e;){if(0!==gt(t))return!1;t=t.parentNode}return!0}function mt(t,e){if(!e)return!1;for(;t&&t!==e;){if(gt(t)!==nt(t.parentNode)-1)return!1;t=t.parentNode}return!0}function gt(t){for(var e=0;t=t.previousSibling;)e+=1;return e}function vt(t){return!!(t&&t.childNodes&&t.childNodes.length)}function bt(t,e){var o,n;if(0===t.offset){if(M(t.node))return null;o=t.node.parentNode,n=gt(t.node)}else n=vt(t.node)?nt(o=t.node.childNodes[t.offset-1]):(o=t.node,e?0:t.offset-1);return{node:o,offset:n}}function yt(t,e){var o,n;if(nt(t.node)===t.offset){if(M(t.node))return null;o=t.node.parentNode,n=gt(t.node)+1}else n=vt(t.node)?(o=t.node.childNodes[t.offset],0):(o=t.node,e?nt(t.node):t.offset+1);return{node:o,offset:n}}function kt(t,e){return t.node===e.node&&t.offset===e.offset}function Ct(t,e){var o=e&&e.isSkipPaddingBlankHTML,n=e&&e.isNotSplitEdgePoint,i=e&&e.isDiscardEmptySplits;if(i&&(o=!0),pt(t)&&(U(t.node)||n)){if(ut(t))return t.node;if(ht(t))return t.node.nextSibling}if(U(t.node))return t.node.splitText(t.offset);var r=t.node.childNodes[t.offset],s=ct(t.node.cloneNode(!1),t.node);return dt(s,lt(r)),o||(rt(t.node),rt(s)),i&&(it(t.node)&&St(t.node),it(s))?(St(s),t.node.nextSibling):s}function wt(t,o,n){var e=at(o.node,A.eq(t));return e.length?1===e.length?Ct(o,n):e.reduce(function(t,e){return t===o.node&&(t=Ct(o,n)),Ct({node:e,offset:t?gt(t):nt(e)},n)}):null}function xt(t){return document.createElement(t)}function St(t,e){if(t&&t.parentNode){if(t.removeNode)return t.removeNode(e);var o=t.parentNode;if(!e){for(var n=[],i=0,r=t.childNodes.length;i<r;i++)n.push(t.childNodes[i]);for(i=0,r=n.length;i<r;i++)o.insertBefore(n[i],t)}o.removeChild(t)}}var It=O("TEXTAREA");function Tt(t,e){var o=It(t[0])?t.val():t.html();return e?o.replace(/[\n\r]/g,""):o}var $t={NBSP_CHAR:z,ZERO_WIDTH_NBSP_CHAR:"\ufeff",blank:ot,emptyPara:"<p>"+ot+"</p>",makePredByNodeName:O,isEditable:M,isControlSizing:function(t){return t&&C(t).hasClass("note-control-sizing")},isText:U,isElement:function(t){return t&&1===t.nodeType},isVoid:j,isPara:K,isPurePara:function(t){return K(t)&&!q(t)},isHeading:function(t){return t&&/^H[1-7]/.test(t.nodeName.toUpperCase())},isInline:_,isBlock:A.not(_),isBodyInline:function(t){return _(t)&&!st(t,K)},isBody:et,isParaInline:function(t){return _(t)&&!!st(t,K)},isPre:W,isList:Z,isTable:V,isData:G,isCell:Q,isBlockquote:J,isBodyContainer:X,isAnchor:tt,isDiv:O("DIV"),isLi:q,isBR:O("BR"),isSpan:O("SPAN"),isB:O("B"),isU:O("U"),isS:O("S"),isI:O("I"),isImg:O("IMG"),isTextarea:It,isEmpty:it,isEmptyAnchor:A.and(tt,it),isClosestSibling:function(t,e){return t.nextSibling===e||t.previousSibling===e},withClosestSiblings:function(t,e){e=e||A.ok;var o=[];return t.previousSibling&&e(t.previousSibling)&&o.push(t.previousSibling),o.push(t),t.nextSibling&&e(t.nextSibling)&&o.push(t.nextSibling),o},nodeLength:nt,isLeftEdgePoint:ut,isRightEdgePoint:ht,isEdgePoint:pt,isLeftEdgeOf:ft,isRightEdgeOf:mt,isLeftEdgePointOf:function(t,e){return ut(t)&&ft(t.node,e)},isRightEdgePointOf:function(t,e){return ht(t)&&mt(t.node,e)},prevPoint:bt,nextPoint:yt,isSamePoint:kt,isVisiblePoint:function(t){if(U(t.node)||!vt(t.node)||it(t.node))return!0;var e=t.node.childNodes[t.offset-1],o=t.node.childNodes[t.offset];return!(e&&!j(e)||o&&!j(o))},prevPointUntil:function(t,e){for(;t;){if(e(t))return t;t=bt(t)}return null},nextPointUntil:function(t,e){for(;t;){if(e(t))return t;t=yt(t)}return null},isCharPoint:function(t){if(!U(t.node))return!1;var e=t.node.nodeValue.charAt(t.offset-1);return e&&" "!==e&&e!==z},walkPoint:function(t,e,o,n){for(var i=t;i&&(o(i),!kt(i,e));)i=yt(i,n&&t.node!==i.node&&e.node!==i.node)},ancestor:st,singleChildAncestor:function(t,e){for(t=t.parentNode;t&&1===nt(t);){if(e(t))return t;if(M(t))break;t=t.parentNode}return null},listAncestor:at,lastAncestor:function(t,e){var o=at(t);return B.last(o.filter(e))},listNext:lt,listPrev:function(t,e){e=e||A.fail;for(var o=[];t&&!e(t);)o.push(t),t=t.previousSibling;return o},listDescendant:function(i,r){var s=[];return r=r||A.ok,function t(e){i!==e&&r(e)&&s.push(e);for(var o=0,n=e.childNodes.length;o<n;o++)t(e.childNodes[o])}(i),s},commonAncestor:function(t,e){for(var o=at(t),n=e;n;n=n.parentNode)if(-1<o.indexOf(n))return n;return null},wrap:function(t,e){var o=t.parentNode,n=C("<"+e+">")[0];return o.insertBefore(n,t),n.appendChild(t),n},insertAfter:ct,appendChildNodes:dt,position:gt,hasChildren:vt,makeOffsetPath:function(t,e){return at(e,A.eq(t)).map(gt).reverse()},fromOffsetPath:function(t,e){for(var o=t,n=0,i=e.length;n<i;n++)o=o.childNodes.length<=e[n]?o.childNodes[o.childNodes.length-1]:o.childNodes[e[n]];return o},splitTree:wt,splitPoint:function(t,e){var o,n,i=e?K:X,r=at(t.node,i),s=B.last(r)||t.node;n=i(s)?(o=r[r.length-2],s):(o=s).parentNode;var a=o&&wt(o,t,{isSkipPaddingBlankHTML:e,isNotSplitEdgePoint:e});return a||n!==t.node||(a=t.node.childNodes[t.offset]),{rightNode:a,container:n}},create:xt,createText:function(t){return document.createTextNode(t)},remove:St,removeWhile:function(t,e){for(;t&&!M(t)&&e(t);){var o=t.parentNode;St(t),t=o}},replace:function(t,e){if(t.nodeName.toUpperCase()===e.toUpperCase())return t;var o=xt(e);return t.style.cssText&&(o.style.cssText=t.style.cssText),dt(o,B.from(t.childNodes)),ct(o,t),St(t),o},html:function(t,e){var o=Tt(t);e&&(o=(o=o.replace(/<(\/?)(\b(?!!)[^>\s]*)(.*?)(\s*\/?>)/g,function(t,e,o){o=o.toUpperCase();var n=/^DIV|^TD|^TH|^P|^LI|^H[1-7]/.test(o)&&!!e,i=/^BLOCKQUOTE|^TABLE|^TBODY|^TR|^HR|^UL|^OL/.test(o);return t+(n||i?"\n":"")})).trim());return o},value:Tt,posFromPlaceholder:function(t){var e=C(t),o=e.offset(),n=e.outerHeight(!0);return{left:o.left,top:o.top+n}},attachEvents:function(e,o){Object.keys(o).forEach(function(t){e.on(t,o[t])})},detachEvents:function(e,o){Object.keys(o).forEach(function(t){e.off(t,o[t])})},isCustomStyleTag:function(t){return t&&!U(t)&&B.contains(t.classList,"note-styletag")}},Nt=function(){function t(t,e){this.ui=C.summernote.ui,this.$note=t,this.memos={},this.modules={},this.layoutInfo={},this.options=e,this.initialize()}return t.prototype.initialize=function(){return this.layoutInfo=this.ui.createLayout(this.$note,this.options),this._initialize(),this.$note.hide(),this},t.prototype.destroy=function(){this._destroy(),this.$note.removeData("summernote"),this.ui.removeLayout(this.$note,this.layoutInfo)},t.prototype.reset=function(){var t=this.isDisabled();this.code($t.emptyPara),this._destroy(),this._initialize(),t&&this.disable()},t.prototype._initialize=function(){var e=this,o=C.extend({},this.options.buttons);Object.keys(o).forEach(function(t){e.memo("button."+t,o[t])});var n=C.extend({},this.options.modules,C.summernote.plugins||{});Object.keys(n).forEach(function(t){e.module(t,n[t],!0)}),Object.keys(this.modules).forEach(function(t){e.initializeModule(t)})},t.prototype._destroy=function(){var e=this;Object.keys(this.modules).reverse().forEach(function(t){e.removeModule(t)}),Object.keys(this.memos).forEach(function(t){e.removeMemo(t)}),this.triggerEvent("destroy",this)},t.prototype.code=function(t){var e=this.invoke("codeview.isActivated");if(void 0===t)return this.invoke("codeview.sync"),e?this.layoutInfo.codable.val():this.layoutInfo.editable.html();e?this.layoutInfo.codable.val(t):this.layoutInfo.editable.html(t),this.$note.val(t),this.triggerEvent("change",t,this.layoutInfo.editable)},t.prototype.isDisabled=function(){return"false"===this.layoutInfo.editable.attr("contenteditable")},t.prototype.enable=function(){this.layoutInfo.editable.attr("contenteditable",!0),this.invoke("toolbar.activate",!0),this.triggerEvent("disable",!1)},t.prototype.disable=function(){this.invoke("codeview.isActivated")&&this.invoke("codeview.deactivate"),this.layoutInfo.editable.attr("contenteditable",!1),this.invoke("toolbar.deactivate",!0),this.triggerEvent("disable",!0)},t.prototype.triggerEvent=function(){var t=B.head(arguments),e=B.tail(B.from(arguments)),o=this.options.callbacks[A.namespaceToCamel(t,"on")];o&&o.apply(this.$note[0],e),this.$note.trigger("summernote."+t,e)},t.prototype.initializeModule=function(t){var e=this.modules[t];e.shouldInitialize=e.shouldInitialize||A.ok,e.shouldInitialize()&&(e.initialize&&e.initialize(),e.events&&$t.attachEvents(this.$note,e.events))},t.prototype.module=function(t,e,o){if(1===arguments.length)return this.modules[t];this.modules[t]=new e(this),o||this.initializeModule(t)},t.prototype.removeModule=function(t){var e=this.modules[t];e.shouldInitialize()&&(e.events&&$t.detachEvents(this.$note,e.events),e.destroy&&e.destroy()),delete this.modules[t]},t.prototype.memo=function(t,e){if(1===arguments.length)return this.memos[t];this.memos[t]=e},t.prototype.removeMemo=function(t){this.memos[t]&&this.memos[t].destroy&&this.memos[t].destroy(),delete this.memos[t]},t.prototype.createInvokeHandlerAndUpdateState=function(e,o){var n=this;return function(t){n.createInvokeHandler(e,o)(t),n.invoke("buttons.updateCurrentStyle")}},t.prototype.createInvokeHandler=function(o,n){var i=this;return function(t){t.preventDefault();var e=C(t.target);i.invoke(o,n||e.closest("[data-value]").data("value"),e)}},t.prototype.invoke=function(){var t=B.head(arguments),e=B.tail(B.from(arguments)),o=t.split("."),n=1<o.length,i=n&&B.head(o),r=n?B.last(o):B.head(o),s=this.modules[i||"editor"];return!i&&this[r]?this[r].apply(this,e):s&&s[r]&&s.shouldInitialize()?s[r].apply(s,e):void 0},t}();function Et(t,e){var o,n,i=t.parentElement(),r=document.body.createTextRange(),s=B.from(i.childNodes);for(o=0;o<s.length;o++)if(!$t.isText(s[o])){if(r.moveToElementText(s[o]),0<=r.compareEndPoints("StartToStart",t))break;n=s[o]}if(0!==o&&$t.isText(s[o-1])){var a=document.body.createTextRange(),l=null;a.moveToElementText(n||i),a.collapse(!n),l=n?n.nextSibling:i.firstChild;var c=t.duplicate();c.setEndPoint("StartToStart",a);for(var d=c.text.replace(/[\r\n]/g,"").length;d>l.nodeValue.length&&l.nextSibling;)d-=l.nodeValue.length,l=l.nextSibling;l.nodeValue;e&&l.nextSibling&&$t.isText(l.nextSibling)&&d===l.nodeValue.length&&(d-=l.nodeValue.length,l=l.nextSibling),i=l,o=d}return{cont:i,offset:o}}function Rt(t){var s=function(t,e){var o,n;if($t.isText(t)){var i=$t.listPrev(t,A.not($t.isText)),r=B.last(i).previousSibling;o=r||t.parentNode,e+=B.sum(B.tail(i),$t.nodeLength),n=!r}else{if(o=t.childNodes[e]||t,$t.isText(o))return s(o,0);e=0,n=!1}return{node:o,collapseToStart:n,offset:e}},e=document.body.createTextRange(),o=s(t.node,t.offset);return e.moveToElementText(o.node),e.collapse(o.collapseToStart),e.moveStart("character",o.offset),e}C.fn.extend({summernote:function(){var t=C.type(B.head(arguments)),e="string"===t,o="object"===t,i=C.extend({},C.summernote.options,o?B.head(arguments):{});i.langInfo=C.extend(!0,{},C.summernote.lang["en-US"],C.summernote.lang[i.lang]),i.icons=C.extend(!0,{},C.summernote.options.icons,i.icons),i.tooltip="auto"===i.tooltip?!R.isSupportTouch:i.tooltip,this.each(function(t,e){var o=C(e);if(!o.data("summernote")){var n=new Nt(o,i);o.data("summernote",n),o.data("summernote").triggerEvent("init",n.layoutInfo)}});var n=this.first();if(n.length){var r=n.data("summernote");if(e)return r.invoke.apply(r,B.from(arguments));i.focus&&r.invoke("editor.focus")}return this}});var Lt=function(){function r(t,e,o,n){this.sc=t,this.so=e,this.ec=o,this.eo=n,this.isOnEditable=this.makeIsOn($t.isEditable),this.isOnList=this.makeIsOn($t.isList),this.isOnAnchor=this.makeIsOn($t.isAnchor),this.isOnCell=this.makeIsOn($t.isCell),this.isOnData=this.makeIsOn($t.isData)}return r.prototype.nativeRange=function(){if(R.isW3CRangeSupport){var t=document.createRange();return t.setStart(this.sc,this.sc.data&&this.so>this.sc.data.length?0:this.so),t.setEnd(this.ec,this.sc.data?Math.min(this.eo,this.sc.data.length):this.eo),t}var e=Rt({node:this.sc,offset:this.so});return e.setEndPoint("EndToEnd",Rt({node:this.ec,offset:this.eo})),e},r.prototype.getPoints=function(){return{sc:this.sc,so:this.so,ec:this.ec,eo:this.eo}},r.prototype.getStartPoint=function(){return{node:this.sc,offset:this.so}},r.prototype.getEndPoint=function(){return{node:this.ec,offset:this.eo}},r.prototype.select=function(){var t=this.nativeRange();if(R.isW3CRangeSupport){var e=document.getSelection();0<e.rangeCount&&e.removeAllRanges(),e.addRange(t)}else t.select();return this},r.prototype.scrollIntoView=function(t){var e=C(t).height();return t.scrollTop+e<this.sc.offsetTop&&(t.scrollTop+=Math.abs(t.scrollTop+e-this.sc.offsetTop)),this},r.prototype.normalize=function(){var t=function(t,e){if($t.isVisiblePoint(t)&&(!$t.isEdgePoint(t)||$t.isRightEdgePoint(t)&&!e||$t.isLeftEdgePoint(t)&&e||$t.isRightEdgePoint(t)&&e&&$t.isVoid(t.node.nextSibling)||$t.isLeftEdgePoint(t)&&!e&&$t.isVoid(t.node.previousSibling)||$t.isBlock(t.node)&&$t.isEmpty(t.node)))return t;var o=$t.ancestor(t.node,$t.isBlock);if(($t.isLeftEdgePointOf(t,o)||$t.isVoid($t.prevPoint(t).node))&&!e||($t.isRightEdgePointOf(t,o)||$t.isVoid($t.nextPoint(t).node))&&e){if($t.isVisiblePoint(t))return t;e=!e}return(e?$t.nextPointUntil($t.nextPoint(t),$t.isVisiblePoint):$t.prevPointUntil($t.prevPoint(t),$t.isVisiblePoint))||t},e=t(this.getEndPoint(),!1),o=this.isCollapsed()?e:t(this.getStartPoint(),!0);return new r(o.node,o.offset,e.node,e.offset)},r.prototype.nodes=function(o,t){o=o||A.ok;var n=t&&t.includeAncestor,i=t&&t.fullyContains,e=this.getStartPoint(),r=this.getEndPoint(),s=[],a=[];return $t.walkPoint(e,r,function(t){var e;$t.isEditable(t.node)||(i?($t.isLeftEdgePoint(t)&&a.push(t.node),$t.isRightEdgePoint(t)&&B.contains(a,t.node)&&(e=t.node)):e=n?$t.ancestor(t.node,o):t.node,e&&o(e)&&s.push(e))},!0),B.unique(s)},r.prototype.commonAncestor=function(){return $t.commonAncestor(this.sc,this.ec)},r.prototype.expand=function(t){var e=$t.ancestor(this.sc,t),o=$t.ancestor(this.ec,t);if(!e&&!o)return new r(this.sc,this.so,this.ec,this.eo);var n=this.getPoints();return e&&(n.sc=e,n.so=0),o&&(n.ec=o,n.eo=$t.nodeLength(o)),new r(n.sc,n.so,n.ec,n.eo)},r.prototype.collapse=function(t){return t?new r(this.sc,this.so,this.sc,this.so):new r(this.ec,this.eo,this.ec,this.eo)},r.prototype.splitText=function(){var t=this.sc===this.ec,e=this.getPoints();return $t.isText(this.ec)&&!$t.isEdgePoint(this.getEndPoint())&&this.ec.splitText(this.eo),$t.isText(this.sc)&&!$t.isEdgePoint(this.getStartPoint())&&(e.sc=this.sc.splitText(this.so),e.so=0,t&&(e.ec=e.sc,e.eo=this.eo-this.so)),new r(e.sc,e.so,e.ec,e.eo)},r.prototype.deleteContents=function(){if(this.isCollapsed())return this;var t=this.splitText(),e=t.nodes(null,{fullyContains:!0}),n=$t.prevPointUntil(t.getStartPoint(),function(t){return!B.contains(e,t.node)}),i=[];return C.each(e,function(t,e){var o=e.parentNode;n.node!==o&&1===$t.nodeLength(o)&&i.push(o),$t.remove(e,!1)}),C.each(i,function(t,e){$t.remove(e,!1)}),new r(n.node,n.offset,n.node,n.offset).normalize()},r.prototype.makeIsOn=function(e){return function(){var t=$t.ancestor(this.sc,e);return!!t&&t===$t.ancestor(this.ec,e)}},r.prototype.isLeftEdgeOf=function(t){if(!$t.isLeftEdgePoint(this.getStartPoint()))return!1;var e=$t.ancestor(this.sc,t);return e&&$t.isLeftEdgeOf(this.sc,e)},r.prototype.isCollapsed=function(){return this.sc===this.ec&&this.so===this.eo},r.prototype.wrapBodyInlineWithPara=function(){if($t.isBodyContainer(this.sc)&&$t.isEmpty(this.sc))return this.sc.innerHTML=$t.emptyPara,new r(this.sc.firstChild,0,this.sc.firstChild,0);var t,e=this.normalize();if($t.isParaInline(this.sc)||$t.isPara(this.sc))return e;if($t.isInline(e.sc)){var o=$t.listAncestor(e.sc,A.not($t.isInline));t=B.last(o),$t.isInline(t)||(t=o[o.length-2]||e.sc.childNodes[e.so])}else t=e.sc.childNodes[0<e.so?e.so-1:0];var n=$t.listPrev(t,$t.isParaInline).reverse();if((n=n.concat($t.listNext(t.nextSibling,$t.isParaInline))).length){var i=$t.wrap(B.head(n),"p");$t.appendChildNodes(i,B.tail(n))}return this.normalize()},r.prototype.insertNode=function(t){var e=this.wrapBodyInlineWithPara().deleteContents(),o=$t.splitPoint(e.getStartPoint(),$t.isInline(t));return o.rightNode?o.rightNode.parentNode.insertBefore(t,o.rightNode):o.container.appendChild(t),t},r.prototype.pasteHTML=function(t){var e=C("<div></div>").html(t)[0],o=B.from(e.childNodes),n=this.wrapBodyInlineWithPara().deleteContents();return 0<n.so&&(o=o.reverse()),o=o.map(function(t){return n.insertNode(t)}),0<n.so&&(o=o.reverse()),o},r.prototype.toString=function(){var t=this.nativeRange();return R.isW3CRangeSupport?t.toString():t.text},r.prototype.getWordRange=function(t){var e=this.getEndPoint();if(!$t.isCharPoint(e))return this;var o=$t.prevPointUntil(e,function(t){return!$t.isCharPoint(t)});return t&&(e=$t.nextPointUntil(e,function(t){return!$t.isCharPoint(t)})),new r(o.node,o.offset,e.node,e.offset)},r.prototype.bookmark=function(t){return{s:{path:$t.makeOffsetPath(t,this.sc),offset:this.so},e:{path:$t.makeOffsetPath(t,this.ec),offset:this.eo}}},r.prototype.paraBookmark=function(t){return{s:{path:B.tail($t.makeOffsetPath(B.head(t),this.sc)),offset:this.so},e:{path:B.tail($t.makeOffsetPath(B.last(t),this.ec)),offset:this.eo}}},r.prototype.getClientRects=function(){return this.nativeRange().getClientRects()},r}(),At={create:function(t,e,o,n){if(4===arguments.length)return new Lt(t,e,o,n);if(2===arguments.length)return new Lt(o=t,n=e,o,n);var i=this.createFromSelection();return i||1!==arguments.length?i:(i=this.createFromNode(t)).collapse($t.emptyPara===t.innerHTML)},createFromSelection:function(){var t,e,o,n;if(R.isW3CRangeSupport){var i=document.getSelection();if(!i||0===i.rangeCount)return null;if($t.isBody(i.anchorNode))return null;var r=i.getRangeAt(0);t=r.startContainer,e=r.startOffset,o=r.endContainer,n=r.endOffset}else{var s=document.selection.createRange(),a=s.duplicate();a.collapse(!1);var l=s;l.collapse(!0);var c=Et(l,!0),d=Et(a,!1);$t.isText(c.node)&&$t.isLeftEdgePoint(c)&&$t.isTextNode(d.node)&&$t.isRightEdgePoint(d)&&d.node.nextSibling===c.node&&(c=d),t=c.cont,e=c.offset,o=d.cont,n=d.offset}return new Lt(t,e,o,n)},createFromNode:function(t){var e=t,o=0,n=t,i=$t.nodeLength(n);return $t.isVoid(e)&&(o=$t.listPrev(e).length-1,e=e.parentNode),$t.isBR(n)?(i=$t.listPrev(n).length-1,n=n.parentNode):$t.isVoid(n)&&(i=$t.listPrev(n).length,n=n.parentNode),this.create(e,o,n,i)},createFromNodeBefore:function(t){return this.createFromNode(t).collapse(!0)},createFromNodeAfter:function(t){return this.createFromNode(t).collapse()},createFromBookmark:function(t,e){var o=$t.fromOffsetPath(t,e.s.path),n=e.s.offset,i=$t.fromOffsetPath(t,e.e.path),r=e.e.offset;return new Lt(o,n,i,r)},createFromParaBookmark:function(t,e){var o=t.s.offset,n=t.e.offset,i=$t.fromOffsetPath(B.head(e),t.s.path),r=$t.fromOffsetPath(B.last(e),t.e.path);return new Lt(i,o,r,n)}},Ft={BACKSPACE:8,TAB:9,ENTER:13,SPACE:32,DELETE:46,LEFT:37,UP:38,RIGHT:39,DOWN:40,NUM0:48,NUM1:49,NUM2:50,NUM3:51,NUM4:52,NUM5:53,NUM6:54,NUM7:55,NUM8:56,B:66,E:69,I:73,J:74,K:75,L:76,R:82,S:83,U:85,V:86,Y:89,Z:90,SLASH:191,LEFTBRACKET:219,BACKSLASH:220,RIGHTBRACKET:221},Pt={isEdit:function(t){return B.contains([Ft.BACKSPACE,Ft.TAB,Ft.ENTER,Ft.SPACE,Ft.DELETE],t)},isMove:function(t){return B.contains([Ft.LEFT,Ft.UP,Ft.RIGHT,Ft.DOWN],t)},nameFromCode:A.invertObject(Ft),code:Ft};var Ht=function(){function t(t){this.stack=[],this.stackOffset=-1,this.$editable=t,this.editable=t[0]}return t.prototype.makeSnapshot=function(){var t=At.create(this.editable);return{contents:this.$editable.html(),bookmark:t&&t.isOnEditable()?t.bookmark(this.editable):{s:{path:[],offset:0},e:{path:[],offset:0}}}},t.prototype.applySnapshot=function(t){null!==t.contents&&this.$editable.html(t.contents),null!==t.bookmark&&At.createFromBookmark(this.editable,t.bookmark).select()},t.prototype.rewind=function(){this.$editable.html()!==this.stack[this.stackOffset].contents&&this.recordUndo(),this.stackOffset=0,this.applySnapshot(this.stack[this.stackOffset])},t.prototype.commit=function(){this.stack=[],this.stackOffset=-1,this.recordUndo()},t.prototype.reset=function(){this.stack=[],this.stackOffset=-1,this.$editable.html(""),this.recordUndo()},t.prototype.undo=function(){this.$editable.html()!==this.stack[this.stackOffset].contents&&this.recordUndo(),0<this.stackOffset&&(this.stackOffset--,this.applySnapshot(this.stack[this.stackOffset]))},t.prototype.redo=function(){this.stack.length-1>this.stackOffset&&(this.stackOffset++,this.applySnapshot(this.stack[this.stackOffset]))},t.prototype.recordUndo=function(){this.stackOffset++,this.stack.length>this.stackOffset&&(this.stack=this.stack.slice(0,this.stackOffset)),this.stack.push(this.makeSnapshot())},t}(),Dt=function(){function t(){}return t.prototype.jQueryCSS=function(o,t){if(R.jqueryVersion<1.9){var n={};return C.each(t,function(t,e){n[e]=o.css(e)}),n}return o.css(t)},t.prototype.fromNode=function(t){var e=this.jQueryCSS(t,["font-family","font-size","text-align","list-style-type","line-height"])||{};return e["font-size"]=parseInt(e["font-size"],10),e},t.prototype.stylePara=function(t,o){C.each(t.nodes($t.isPara,{includeAncestor:!0}),function(t,e){C(e).css(o)})},t.prototype.styleNodes=function(t,e){t=t.splitText();var o=e&&e.nodeName||"SPAN",n=!(!e||!e.expandClosestSibling),i=!(!e||!e.onlyPartialContains);if(t.isCollapsed())return[t.insertNode($t.create(o))];var r=$t.makePredByNodeName(o),s=t.nodes($t.isText,{fullyContains:!0}).map(function(t){return $t.singleChildAncestor(t,r)||$t.wrap(t,o)});if(n){if(i){var a=t.nodes();r=A.and(r,function(t){return B.contains(a,t)})}return s.map(function(t){var e=$t.withClosestSiblings(t,r),o=B.head(e),n=B.tail(e);return C.each(n,function(t,e){$t.appendChildNodes(o,e.childNodes),$t.remove(e)}),B.head(e)})}return s},t.prototype.current=function(t){var e=C($t.isElement(t.sc)?t.sc:t.sc.parentNode),o=this.fromNode(e);try{o=C.extend(o,{"font-bold":document.queryCommandState("bold")?"bold":"normal","font-italic":document.queryCommandState("italic")?"italic":"normal","font-underline":document.queryCommandState("underline")?"underline":"normal","font-subscript":document.queryCommandState("subscript")?"subscript":"normal","font-superscript":document.queryCommandState("superscript")?"superscript":"normal","font-strikethrough":document.queryCommandState("strikethrough")?"strikethrough":"normal","font-family":document.queryCommandValue("fontname")||o["font-family"]})}catch(t){}if(t.isOnList()){var n=-1<["circle","disc","disc-leading-zero","square"].indexOf(o["list-style-type"]);o["list-style"]=n?"unordered":"ordered"}else o["list-style"]="none";var i=$t.ancestor(t.sc,$t.isPara);if(i&&i.style["line-height"])o["line-height"]=i.style.lineHeight;else{var r=parseInt(o["line-height"],10)/parseInt(o["font-size"],10);o["line-height"]=r.toFixed(1)}return o.anchor=t.isOnAnchor()&&$t.ancestor(t.sc,$t.isAnchor),o.ancestors=$t.listAncestor(t.sc,$t.isEditable),o.range=t,o},t}(),Bt=function(){function t(){}return t.prototype.insertOrderedList=function(t){this.toggleList("OL",t)},t.prototype.insertUnorderedList=function(t){this.toggleList("UL",t)},t.prototype.indent=function(t){var i=this,e=At.create(t).wrapBodyInlineWithPara(),o=e.nodes($t.isPara,{includeAncestor:!0}),n=B.clusterBy(o,A.peq2("parentNode"));C.each(n,function(t,e){var o=B.head(e);if($t.isLi(o)){var n=i.findList(o.previousSibling);n?e.map(function(t){return n.appendChild(t)}):(i.wrapList(e,o.parentNode.nodeName),e.map(function(t){return t.parentNode}).map(function(t){return i.appendToPrevious(t)}))}else C.each(e,function(t,e){C(e).css("marginLeft",function(t,e){return(parseInt(e,10)||0)+25})})}),e.select()},t.prototype.outdent=function(t){var n=this,e=At.create(t).wrapBodyInlineWithPara(),o=e.nodes($t.isPara,{includeAncestor:!0}),i=B.clusterBy(o,A.peq2("parentNode"));C.each(i,function(t,e){var o=B.head(e);$t.isLi(o)?n.releaseList([e]):C.each(e,function(t,e){C(e).css("marginLeft",function(t,e){return 25<(e=parseInt(e,10)||0)?e-25:""})})}),e.select()},t.prototype.toggleList=function(o,t){var n=this,e=At.create(t).wrapBodyInlineWithPara(),i=e.nodes($t.isPara,{includeAncestor:!0}),r=e.paraBookmark(i),s=B.clusterBy(i,A.peq2("parentNode"));if(B.find(i,$t.isPurePara)){var a=[];C.each(s,function(t,e){a=a.concat(n.wrapList(e,o))}),i=a}else{var l=e.nodes($t.isList,{includeAncestor:!0}).filter(function(t){return!C.nodeName(t,o)});l.length?C.each(l,function(t,e){$t.replace(e,o)}):i=this.releaseList(s,!0)}At.createFromParaBookmark(r,i).select()},t.prototype.wrapList=function(t,e){var o=B.head(t),n=B.last(t),i=$t.isList(o.previousSibling)&&o.previousSibling,r=$t.isList(n.nextSibling)&&n.nextSibling,s=i||$t.insertAfter($t.create(e||"UL"),n);return t=t.map(function(t){return $t.isPurePara(t)?$t.replace(t,"LI"):t}),$t.appendChildNodes(s,t),r&&($t.appendChildNodes(s,B.from(r.childNodes)),$t.remove(r)),t},t.prototype.releaseList=function(t,c){var d=this,u=[];return C.each(t,function(t,e){var o=B.head(e),n=B.last(e),i=c?$t.lastAncestor(o,$t.isList):o.parentNode,r=i.parentNode;if("LI"===i.parentNode.nodeName)e.map(function(t){var e=d.findNextSiblings(t);r.nextSibling?r.parentNode.insertBefore(t,r.nextSibling):r.parentNode.appendChild(t),e.length&&(d.wrapList(e,i.nodeName),t.appendChild(e[0].parentNode))}),0===i.children.length&&r.removeChild(i),0===r.childNodes.length&&r.parentNode.removeChild(r);else{var s=1<i.childNodes.length?$t.splitTree(i,{node:n.parentNode,offset:$t.position(n)+1},{isSkipPaddingBlankHTML:!0}):null,a=$t.splitTree(i,{node:o.parentNode,offset:$t.position(o)},{isSkipPaddingBlankHTML:!0});e=c?$t.listDescendant(a,$t.isLi):B.from(a.childNodes).filter($t.isLi),!c&&$t.isList(i.parentNode)||(e=e.map(function(t){return $t.replace(t,"P")})),C.each(B.from(e).reverse(),function(t,e){$t.insertAfter(e,i)});var l=B.compact([i,a,s]);C.each(l,function(t,e){var o=[e].concat($t.listDescendant(e,$t.isList));C.each(o.reverse(),function(t,e){$t.nodeLength(e)||$t.remove(e,!0)})})}u=u.concat(e)}),u},t.prototype.appendToPrevious=function(t){return t.previousSibling?$t.appendChildNodes(t.previousSibling,[t]):this.wrapList([t],"LI")},t.prototype.findList=function(t){return t?B.find(t.children,function(t){return-1<["OL","UL"].indexOf(t.nodeName)}):null},t.prototype.findNextSiblings=function(t){for(var e=[];t.nextSibling;)e.push(t.nextSibling),t=t.nextSibling;return e},t}(),zt=function(){function t(t){this.bullet=new Bt,this.options=t.options}return t.prototype.insertTab=function(t,e){var o=$t.createText(new Array(e+1).join($t.NBSP_CHAR));(t=t.deleteContents()).insertNode(o,!0),(t=At.create(o,e)).select()},t.prototype.insertParagraph=function(t,e){e=(e=(e=e||At.create(t)).deleteContents()).wrapBodyInlineWithPara();var o,n=$t.ancestor(e.sc,$t.isPara);if(n){if($t.isEmpty(n)&&$t.isLi(n))return void this.bullet.toggleList(n.parentNode.nodeName);var i=null;if(1===this.options.blockquoteBreakingLevel?i=$t.ancestor(n,$t.isBlockquote):2===this.options.blockquoteBreakingLevel&&(i=$t.lastAncestor(n,$t.isBlockquote)),i){o=C($t.emptyPara)[0],$t.isRightEdgePoint(e.getStartPoint())&&$t.isBR(e.sc.nextSibling)&&C(e.sc.nextSibling).remove();var r=$t.splitTree(i,e.getStartPoint(),{isDiscardEmptySplits:!0});r?r.parentNode.insertBefore(o,r):$t.insertAfter(o,i)}else{o=$t.splitTree(n,e.getStartPoint());var s=$t.listDescendant(n,$t.isEmptyAnchor);s=s.concat($t.listDescendant(o,$t.isEmptyAnchor)),C.each(s,function(t,e){$t.remove(e)}),($t.isHeading(o)||$t.isPre(o)||$t.isCustomStyleTag(o))&&$t.isEmpty(o)&&(o=$t.replace(o,"p"))}}else{var a=e.sc.childNodes[e.so];o=C($t.emptyPara)[0],a?e.sc.insertBefore(o,a):e.sc.appendChild(o)}At.create(o,0).normalize().select().scrollIntoView(t)},t}(),Mt=function(t,h,p,i){var f={colPos:0,rowPos:0},m=[],g=[];function v(t,e,o,n,i,r,s){var a={baseRow:o,baseCell:n,isRowSpan:i,isColSpan:r,isVirtual:s};m[t]||(m[t]=[]),m[t][e]=a}function b(t,e){if(!m[t])return e;if(!m[t][e])return e;for(var o=e;m[t][o];)if(o++,!m[t][o])return o}function r(t,e){var o=b(t.rowIndex,e.cellIndex),n=1<e.colSpan,i=1<e.rowSpan,r=t.rowIndex===f.rowPos&&e.cellIndex===f.colPos;v(t.rowIndex,o,t,e,i,n,!1);var s=e.attributes.rowSpan?parseInt(e.attributes.rowSpan.value,10):0;if(1<s)for(var a=1;a<s;a++){var l=t.rowIndex+a;y(l,o,e,r),v(l,o,t,e,!0,n,!0)}var c=e.attributes.colSpan?parseInt(e.attributes.colSpan.value,10):0;if(1<c)for(var d=1;d<c;d++){var u=b(t.rowIndex,o+d);y(t.rowIndex,u,e,r),v(t.rowIndex,u,t,e,i,!0,!0)}}function y(t,e,o,n){t===f.rowPos&&f.colPos>=o.cellIndex&&o.cellIndex<=e&&!n&&f.colPos++}function k(t){switch(h){case Mt.where.Column:if(t.isColSpan)return Mt.resultAction.SubtractSpanCount;break;case Mt.where.Row:if(!t.isVirtual&&t.isRowSpan)return Mt.resultAction.AddCell;if(t.isRowSpan)return Mt.resultAction.SubtractSpanCount}return Mt.resultAction.RemoveCell}function C(t){switch(h){case Mt.where.Column:if(t.isColSpan)return Mt.resultAction.SumSpanCount;if(t.isRowSpan&&t.isVirtual)return Mt.resultAction.Ignore;break;case Mt.where.Row:if(t.isRowSpan)return Mt.resultAction.SumSpanCount;if(t.isColSpan&&t.isVirtual)return Mt.resultAction.Ignore}return Mt.resultAction.AddCell}this.getActionList=function(){for(var t,e,o,n=h===Mt.where.Row?f.rowPos:-1,i=h===Mt.where.Column?f.colPos:-1,r=0,s=!0;s;){var a=0<=n?n:r,l=0<=i?i:r,c=m[a];if(!c)return s=!1,g;var d=c[l];if(!d)return s=!1,g;var u=Mt.resultAction.Ignore;switch(p){case Mt.requestAction.Add:u=C(d);break;case Mt.requestAction.Delete:u=k(d)}g.push((t=u,e=a,o=l,{baseCell:d.baseCell,action:t,virtualTable:{rowIndex:e,cellIndex:o}})),r++}return g},t&&t.tagName&&("td"===t.tagName.toLowerCase()||"th"===t.tagName.toLowerCase())?(f.colPos=t.cellIndex,t.parentElement&&t.parentElement.tagName&&"tr"===t.parentElement.tagName.toLowerCase()?f.rowPos=t.parentElement.rowIndex:console.error("Impossible to identify start Row point.",t)):console.error("Impossible to identify start Cell point.",t),function(){for(var t=i.rows,e=0;e<t.length;e++)for(var o=t[e].cells,n=0;n<o.length;n++)r(t[e],o[n])}()};Mt.where={Row:0,Column:1},Mt.requestAction={Add:0,Delete:1},Mt.resultAction={Ignore:0,SubtractSpanCount:1,RemoveCell:2,AddCell:3,SumSpanCount:4};var Ot,Ut=function(){function t(){}return t.prototype.tab=function(t,e){var o=$t.ancestor(t.commonAncestor(),$t.isCell),n=$t.ancestor(o,$t.isTable),i=$t.listDescendant(n,$t.isCell),r=B[e?"prev":"next"](i,o);r&&At.create(r,0).select()},t.prototype.addRow=function(t,e){for(var o=$t.ancestor(t.commonAncestor(),$t.isCell),n=C(o).closest("tr"),i=this.recoverAttributes(n),r=C("<tr"+i+"></tr>"),s=new Mt(o,Mt.where.Row,Mt.requestAction.Add,C(n).closest("table")[0]).getActionList(),a=0;a<s.length;a++){var l=s[a],c=this.recoverAttributes(l.baseCell);switch(l.action){case Mt.resultAction.AddCell:r.append("<td"+c+">"+$t.blank+"</td>");break;case Mt.resultAction.SumSpanCount:if("top"===e)if((l.baseCell.parent?l.baseCell.closest("tr").rowIndex:0)<=n[0].rowIndex){var d=C("<div></div>").append(C("<td"+c+">"+$t.blank+"</td>").removeAttr("rowspan")).html();r.append(d);break}var u=parseInt(l.baseCell.rowSpan,10);u++,l.baseCell.setAttribute("rowSpan",u)}}if("top"===e)n.before(r);else{if(1<o.rowSpan){var h=n[0].rowIndex+(o.rowSpan-2);return void C(C(n).parent().find("tr")[h]).after(C(r))}n.after(r)}},t.prototype.addCol=function(t,e){var o=$t.ancestor(t.commonAncestor(),$t.isCell),n=C(o).closest("tr");C(n).siblings().push(n);for(var i=new Mt(o,Mt.where.Column,Mt.requestAction.Add,C(n).closest("table")[0]).getActionList(),r=0;r<i.length;r++){var s=i[r],a=this.recoverAttributes(s.baseCell);switch(s.action){case Mt.resultAction.AddCell:"right"===e?C(s.baseCell).after("<td"+a+">"+$t.blank+"</td>"):C(s.baseCell).before("<td"+a+">"+$t.blank+"</td>");break;case Mt.resultAction.SumSpanCount:if("right"===e){var l=parseInt(s.baseCell.colSpan,10);l++,s.baseCell.setAttribute("colSpan",l)}else C(s.baseCell).before("<td"+a+">"+$t.blank+"</td>")}}},t.prototype.recoverAttributes=function(t){var e="";if(!t)return e;for(var o=t.attributes||[],n=0;n<o.length;n++)"id"!==o[n].name.toLowerCase()&&o[n].specified&&(e+=" "+o[n].name+"='"+o[n].value+"'");return e},t.prototype.deleteRow=function(t){for(var e=$t.ancestor(t.commonAncestor(),$t.isCell),o=C(e).closest("tr"),n=o.children("td, th").index(C(e)),i=o[0].rowIndex,r=new Mt(e,Mt.where.Row,Mt.requestAction.Delete,C(o).closest("table")[0]).getActionList(),s=0;s<r.length;s++)if(r[s]){var a=r[s].baseCell,l=r[s].virtualTable,c=a.rowSpan&&1<a.rowSpan,d=c?parseInt(a.rowSpan,10):0;switch(r[s].action){case Mt.resultAction.Ignore:continue;case Mt.resultAction.AddCell:var u=o.next("tr")[0];if(!u)continue;var h=o[0].cells[n];c&&(2<d?(d--,u.insertBefore(h,u.cells[n]),u.cells[n].setAttribute("rowSpan",d),u.cells[n].innerHTML=""):2===d&&(u.insertBefore(h,u.cells[n]),u.cells[n].removeAttribute("rowSpan"),u.cells[n].innerHTML=""));continue;case Mt.resultAction.SubtractSpanCount:c&&(2<d?(d--,a.setAttribute("rowSpan",d),l.rowIndex!==i&&a.cellIndex===n&&(a.innerHTML="")):2===d&&(a.removeAttribute("rowSpan"),l.rowIndex!==i&&a.cellIndex===n&&(a.innerHTML="")));continue;case Mt.resultAction.RemoveCell:continue}}o.remove()},t.prototype.deleteCol=function(t){for(var e=$t.ancestor(t.commonAncestor(),$t.isCell),o=C(e).closest("tr"),n=o.children("td, th").index(C(e)),i=new Mt(e,Mt.where.Column,Mt.requestAction.Delete,C(o).closest("table")[0]).getActionList(),r=0;r<i.length;r++)if(i[r])switch(i[r].action){case Mt.resultAction.Ignore:continue;case Mt.resultAction.SubtractSpanCount:var s=i[r].baseCell;if(s.colSpan&&1<s.colSpan){var a=s.colSpan?parseInt(s.colSpan,10):0;2<a?(a--,s.setAttribute("colSpan",a),s.cellIndex===n&&(s.innerHTML="")):2===a&&(s.removeAttribute("colSpan"),s.cellIndex===n&&(s.innerHTML=""))}continue;case Mt.resultAction.RemoveCell:$t.remove(i[r].baseCell,!0);continue}},t.prototype.createTable=function(t,e,o){for(var n,i=[],r=0;r<t;r++)i.push("<td>"+$t.blank+"</td>");n=i.join("");for(var s,a=[],l=0;l<e;l++)a.push("<tr>"+n+"</tr>");s=a.join("");var c=C("<table>"+s+"</table>");return o&&o.tableClassName&&c.addClass(o.tableClassName),c[0]},t.prototype.deleteTable=function(t){var e=$t.ancestor(t.commonAncestor(),$t.isCell);C(e).closest("table").remove()},t}(),jt=function(){function t(t){var u=this;this.context=t,this.$note=t.layoutInfo.note,this.$editor=t.layoutInfo.editor,this.$editable=t.layoutInfo.editable,this.options=t.options,this.lang=this.options.langInfo,this.editable=this.$editable[0],this.lastRange=null,this.style=new Dt,this.table=new Ut,this.typing=new zt(t),this.bullet=new Bt,this.history=new Ht(this.$editable),this.context.memo("help.undo",this.lang.help.undo),this.context.memo("help.redo",this.lang.help.redo),this.context.memo("help.tab",this.lang.help.tab),this.context.memo("help.untab",this.lang.help.untab),this.context.memo("help.insertParagraph",this.lang.help.insertParagraph),this.context.memo("help.insertOrderedList",this.lang.help.insertOrderedList),this.context.memo("help.insertUnorderedList",this.lang.help.insertUnorderedList),this.context.memo("help.indent",this.lang.help.indent),this.context.memo("help.outdent",this.lang.help.outdent),this.context.memo("help.formatPara",this.lang.help.formatPara),this.context.memo("help.insertHorizontalRule",this.lang.help.insertHorizontalRule),this.context.memo("help.fontName",this.lang.help.fontName);for(var e=["bold","italic","underline","strikethrough","superscript","subscript","justifyLeft","justifyCenter","justifyRight","justifyFull","formatBlock","removeFormat","backColor"],o=0,n=e.length;o<n;o++)this[e[o]]=function(e){return function(t){u.beforeCommand(),document.execCommand(e,!1,t),u.afterCommand(!0)}}(e[o]),this.context.memo("help."+e[o],this.lang.help[e[o]]);this.fontName=this.wrapCommand(function(t){return u.fontStyling("font-family","'"+t+"'")}),this.fontSize=this.wrapCommand(function(t){return u.fontStyling("font-size",t+"px")});for(o=1;o<=6;o++)this["formatH"+o]=function(t){return function(){u.formatBlock("H"+t)}}(o),this.context.memo("help.formatH"+o,this.lang.help["formatH"+o]);this.insertParagraph=this.wrapCommand(function(){u.typing.insertParagraph(u.editable)}),this.insertOrderedList=this.wrapCommand(function(){u.bullet.insertOrderedList(u.editable)}),this.insertUnorderedList=this.wrapCommand(function(){u.bullet.insertUnorderedList(u.editable)}),this.indent=this.wrapCommand(function(){u.bullet.indent(u.editable)}),this.outdent=this.wrapCommand(function(){u.bullet.outdent(u.editable)}),this.insertNode=this.wrapCommand(function(t){u.isLimited(C(t).text().length)||(u.getLastRange().insertNode(t),At.createFromNodeAfter(t).select(),u.setLastRange())}),this.insertText=this.wrapCommand(function(t){if(!u.isLimited(t.length)){var e=u.getLastRange().insertNode($t.createText(t));At.create(e,$t.nodeLength(e)).select(),u.setLastRange()}}),this.pasteHTML=this.wrapCommand(function(t){if(!u.isLimited(t.length)){t=u.context.invoke("codeview.purify",t);var e=u.getLastRange().pasteHTML(t);At.createFromNodeAfter(B.last(e)).select(),u.setLastRange()}}),this.formatBlock=this.wrapCommand(function(t,e){var o=u.options.callbacks.onApplyCustomStyle;o?o.call(u,e,u.context,u.onFormatBlock):u.onFormatBlock(t,e)}),this.insertHorizontalRule=this.wrapCommand(function(){var t=u.getLastRange().insertNode($t.create("HR"));t.nextSibling&&(At.create(t.nextSibling,0).normalize().select(),u.setLastRange())}),this.lineHeight=this.wrapCommand(function(t){u.style.stylePara(u.getLastRange(),{lineHeight:t})}),this.createLink=this.wrapCommand(function(t){var o=t.url,e=t.text,n=t.isNewWindow,i=t.range||u.getLastRange(),r=e.length-i.toString().length;if(!(0<r&&u.isLimited(r))){var s=i.toString()!==e;"string"==typeof o&&(o=o.trim()),o=u.options.onCreateLink?u.options.onCreateLink(o):/^([A-Za-z][A-Za-z0-9+-.]*\:|#|\/)/.test(o)?o:"http://"+o;var a=[];if(s){var l=(i=i.deleteContents()).insertNode(C("<A>"+e+"</A>")[0]);a.push(l)}else a=u.style.styleNodes(i,{nodeName:"A",expandClosestSibling:!0,onlyPartialContains:!0});C.each(a,function(t,e){C(e).attr("href",o),n?C(e).attr("target","_blank"):C(e).removeAttr("target")});var c=At.createFromNodeBefore(B.head(a)).getStartPoint(),d=At.createFromNodeAfter(B.last(a)).getEndPoint();At.create(c.node,c.offset,d.node,d.offset).select(),u.setLastRange()}}),this.color=this.wrapCommand(function(t){var e=t.foreColor,o=t.backColor;e&&document.execCommand("foreColor",!1,e),o&&document.execCommand("backColor",!1,o)}),this.foreColor=this.wrapCommand(function(t){document.execCommand("styleWithCSS",!1,!0),document.execCommand("foreColor",!1,t)}),this.insertTable=this.wrapCommand(function(t){var e=t.split("x");u.getLastRange().deleteContents().insertNode(u.table.createTable(e[0],e[1],u.options))}),this.removeMedia=this.wrapCommand(function(){var t=C(u.restoreTarget()).parent();t.parent("figure").length?t.parent("figure").remove():t=C(u.restoreTarget()).detach(),u.context.triggerEvent("media.delete",t,u.$editable)}),this.floatMe=this.wrapCommand(function(t){var e=C(u.restoreTarget());e.toggleClass("note-float-left","left"===t),e.toggleClass("note-float-right","right"===t),e.css("float","none"===t?"":t)}),this.resize=this.wrapCommand(function(t){var e=C(u.restoreTarget());0===(t=parseFloat(t))?e.css("width",""):e.css({width:100*t+"%",height:""})})}return t.prototype.initialize=function(){var e=this;this.$editable.on("keydown",function(t){if(t.keyCode===Pt.code.ENTER&&e.context.triggerEvent("enter",t),e.context.triggerEvent("keydown",t),t.isDefaultPrevented()||(e.options.shortcuts?e.handleKeyMap(t):e.preventDefaultEditableShortCuts(t)),e.isLimited(1,t))return!1}).on("keyup",function(t){e.setLastRange(),e.context.triggerEvent("keyup",t)}).on("focus",function(t){e.setLastRange(),e.context.triggerEvent("focus",t)}).on("blur",function(t){e.context.triggerEvent("blur",t)}).on("mousedown",function(t){e.context.triggerEvent("mousedown",t)}).on("mouseup",function(t){e.setLastRange(),e.context.triggerEvent("mouseup",t)}).on("scroll",function(t){e.context.triggerEvent("scroll",t)}).on("paste",function(t){e.setLastRange(),e.context.triggerEvent("paste",t)}),this.$editable.attr("spellcheck",this.options.spellCheck),this.$editable.html($t.html(this.$note)||$t.emptyPara),this.$editable.on(R.inputEventName,A.debounce(function(){e.context.triggerEvent("change",e.$editable.html(),e.$editable)},10)),this.$editor.on("focusin",function(t){e.context.triggerEvent("focusin",t)}).on("focusout",function(t){e.context.triggerEvent("focusout",t)}),this.options.airMode||(this.options.width&&this.$editor.outerWidth(this.options.width),this.options.height&&this.$editable.outerHeight(this.options.height),this.options.maxHeight&&this.$editable.css("max-height",this.options.maxHeight),this.options.minHeight&&this.$editable.css("min-height",this.options.minHeight)),this.history.recordUndo(),this.setLastRange()},t.prototype.destroy=function(){this.$editable.off()},t.prototype.handleKeyMap=function(t){var e=this.options.keyMap[R.isMac?"mac":"pc"],o=[];t.metaKey&&o.push("CMD"),t.ctrlKey&&!t.altKey&&o.push("CTRL"),t.shiftKey&&o.push("SHIFT");var n=Pt.nameFromCode[t.keyCode];n&&o.push(n);var i=e[o.join("+")];i?!1!==this.context.invoke(i)&&t.preventDefault():Pt.isEdit(t.keyCode)&&this.afterCommand()},t.prototype.preventDefaultEditableShortCuts=function(t){(t.ctrlKey||t.metaKey)&&B.contains([66,73,85],t.keyCode)&&t.preventDefault()},t.prototype.isLimited=function(t,e){return t=t||0,(void 0===e||!(Pt.isMove(e.keyCode)||e.ctrlKey||e.metaKey||B.contains([Pt.code.BACKSPACE,Pt.code.DELETE],e.keyCode)))&&(0<this.options.maxTextLength&&this.$editable.text().length+t>=this.options.maxTextLength)},t.prototype.createRange=function(){return this.focus(),this.setLastRange(),this.getLastRange()},t.prototype.setLastRange=function(){this.lastRange=At.create(this.editable)},t.prototype.getLastRange=function(){return this.lastRange||this.setLastRange(),this.lastRange},t.prototype.saveRange=function(t){t&&this.getLastRange().collapse().select()},t.prototype.restoreRange=function(){this.lastRange&&(this.lastRange.select(),this.focus())},t.prototype.saveTarget=function(t){this.$editable.data("target",t)},t.prototype.clearTarget=function(){this.$editable.removeData("target")},t.prototype.restoreTarget=function(){return this.$editable.data("target")},t.prototype.currentStyle=function(){var t=At.create();return t&&(t=t.normalize()),t?this.style.current(t):this.style.fromNode(this.$editable)},t.prototype.styleFromNode=function(t){return this.style.fromNode(t)},t.prototype.undo=function(){this.context.triggerEvent("before.command",this.$editable.html()),this.history.undo(),this.context.triggerEvent("change",this.$editable.html(),this.$editable)},t.prototype.commit=function(){this.context.triggerEvent("before.command",this.$editable.html()),this.history.commit(),this.context.triggerEvent("change",this.$editable.html(),this.$editable)},t.prototype.redo=function(){this.context.triggerEvent("before.command",this.$editable.html()),this.history.redo(),this.context.triggerEvent("change",this.$editable.html(),this.$editable)},t.prototype.beforeCommand=function(){this.context.triggerEvent("before.command",this.$editable.html()),this.focus()},t.prototype.afterCommand=function(t){this.normalizeContent(),this.history.recordUndo(),t||this.context.triggerEvent("change",this.$editable.html(),this.$editable)},t.prototype.tab=function(){var t=this.getLastRange();if(t.isCollapsed()&&t.isOnCell())this.table.tab(t);else{if(0===this.options.tabSize)return!1;this.isLimited(this.options.tabSize)||(this.beforeCommand(),this.typing.insertTab(t,this.options.tabSize),this.afterCommand())}},t.prototype.untab=function(){var t=this.getLastRange();if(t.isCollapsed()&&t.isOnCell())this.table.tab(t,!0);else if(0===this.options.tabSize)return!1},t.prototype.wrapCommand=function(t){return function(){this.beforeCommand(),t.apply(this,arguments),this.afterCommand()}},t.prototype.insertImage=function(t,e){var o,n=this;return(o=t,C.Deferred(function(t){var e=C("<img>");e.one("load",function(){e.off("error abort"),t.resolve(e)}).one("error abort",function(){e.off("load").detach(),t.reject(e)}).css({display:"none"}).appendTo(document.body).attr("src",o)}).promise()).then(function(t){n.beforeCommand(),"function"==typeof e?e(t):("string"==typeof e&&t.attr("data-filename",e),t.css("width",Math.min(n.$editable.width(),t.width()))),t.show(),At.create(n.editable).insertNode(t[0]),At.createFromNodeAfter(t[0]).select(),n.setLastRange(),n.afterCommand()}).fail(function(t){n.context.triggerEvent("image.upload.error",t)})},t.prototype.insertImagesAsDataURL=function(t){var i=this;C.each(t,function(t,e){var n,o=e.name;i.options.maximumImageFileSize&&i.options.maximumImageFileSize<e.size?i.context.triggerEvent("image.upload.error",i.lang.image.maximumFileSizeError):(n=e,C.Deferred(function(o){C.extend(new FileReader,{onload:function(t){var e=t.target.result;o.resolve(e)},onerror:function(t){o.reject(t)}}).readAsDataURL(n)}).promise()).then(function(t){return i.insertImage(t,o)}).fail(function(){i.context.triggerEvent("image.upload.error")})})},t.prototype.insertImagesOrCallback=function(t){this.options.callbacks.onImageUpload?this.context.triggerEvent("image.upload",t):this.insertImagesAsDataURL(t)},t.prototype.getSelectedText=function(){var t=this.getLastRange();return t.isOnAnchor()&&(t=At.createFromNode($t.ancestor(t.sc,$t.isAnchor))),t.toString()},t.prototype.onFormatBlock=function(t,e){if(document.execCommand("FormatBlock",!1,R.isMSIE?"<"+t+">":t),e&&e.length&&(e[0].tagName.toUpperCase()!==t.toUpperCase()&&(e=e.find(t)),e&&e.length)){var o=e[0].className||"";if(o){var n=this.createRange();C([n.sc,n.ec]).closest(t).addClass(o)}}},t.prototype.formatPara=function(){this.formatBlock("P")},t.prototype.fontStyling=function(t,e){var o=this.getLastRange();if(o){var n=this.style.styleNodes(o);if(C(n).css(t,e),o.isCollapsed()){var i=B.head(n);i&&!$t.nodeLength(i)&&(i.innerHTML=$t.ZERO_WIDTH_NBSP_CHAR,At.createFromNodeAfter(i.firstChild).select(),this.setLastRange(),this.$editable.data("bogus",i))}}},t.prototype.unlink=function(){var t=this.getLastRange();if(t.isOnAnchor()){var e=$t.ancestor(t.sc,$t.isAnchor);(t=At.createFromNode(e)).select(),this.setLastRange(),this.beforeCommand(),document.execCommand("unlink"),this.afterCommand()}},t.prototype.getLinkInfo=function(){var t=this.getLastRange().expand($t.isAnchor),e=C(B.head(t.nodes($t.isAnchor))),o={range:t,text:t.toString(),url:e.length?e.attr("href"):""};return e.length&&(o.isNewWindow="_blank"===e.attr("target")),o},t.prototype.addRow=function(t){var e=this.getLastRange(this.$editable);e.isCollapsed()&&e.isOnCell()&&(this.beforeCommand(),this.table.addRow(e,t),this.afterCommand())},t.prototype.addCol=function(t){var e=this.getLastRange(this.$editable);e.isCollapsed()&&e.isOnCell()&&(this.beforeCommand(),this.table.addCol(e,t),this.afterCommand())},t.prototype.deleteRow=function(){var t=this.getLastRange(this.$editable);t.isCollapsed()&&t.isOnCell()&&(this.beforeCommand(),this.table.deleteRow(t),this.afterCommand())},t.prototype.deleteCol=function(){var t=this.getLastRange(this.$editable);t.isCollapsed()&&t.isOnCell()&&(this.beforeCommand(),this.table.deleteCol(t),this.afterCommand())},t.prototype.deleteTable=function(){var t=this.getLastRange(this.$editable);t.isCollapsed()&&t.isOnCell()&&(this.beforeCommand(),this.table.deleteTable(t),this.afterCommand())},t.prototype.resizeTo=function(t,e,o){var n;if(o){var i=t.y/t.x,r=e.data("ratio");n={width:i<r?t.x:t.y/r,height:i<r?t.x*r:t.y}}else n={width:t.x,height:t.y};e.css(n)},t.prototype.hasFocus=function(){return this.$editable.is(":focus")},t.prototype.focus=function(){this.hasFocus()||this.$editable.focus()},t.prototype.isEmpty=function(){return $t.isEmpty(this.$editable[0])||$t.emptyPara===this.$editable.html()},t.prototype.empty=function(){this.context.invoke("code",$t.emptyPara)},t.prototype.normalizeContent=function(){this.$editable[0].normalize()},t}(),Kt=function(){function t(t){this.context=t,this.$editable=t.layoutInfo.editable}return t.prototype.initialize=function(){this.$editable.on("paste",this.pasteByEvent.bind(this))},t.prototype.pasteByEvent=function(t){var e=t.originalEvent.clipboardData;if(e&&e.items&&e.items.length){var o=1<e.items.length?e.items[1]:B.head(e.items);"file"===o.kind&&-1!==o.type.indexOf("image/")&&this.context.invoke("editor.insertImagesOrCallback",[o.getAsFile()]),this.context.invoke("editor.afterCommand")}},t}(),Wt=function(){function t(t){this.context=t,this.$eventListener=C(document),this.$editor=t.layoutInfo.editor,this.$editable=t.layoutInfo.editable,this.options=t.options,this.lang=this.options.langInfo,this.documentEventHandlers={},this.$dropzone=C(['<div class="note-dropzone">','  <div class="note-dropzone-message"/>',"</div>"].join("")).prependTo(this.$editor)}return t.prototype.initialize=function(){this.options.disableDragAndDrop?(this.documentEventHandlers.onDrop=function(t){t.preventDefault()},this.$eventListener=this.$dropzone,this.$eventListener.on("drop",this.documentEventHandlers.onDrop)):this.attachDragAndDropEvent()},t.prototype.attachDragAndDropEvent=function(){var i=this,n=C(),r=this.$dropzone.find(".note-dropzone-message");this.documentEventHandlers.onDragenter=function(t){var e=i.context.invoke("codeview.isActivated"),o=0<i.$editor.width()&&0<i.$editor.height();e||n.length||!o||(i.$editor.addClass("dragover"),i.$dropzone.width(i.$editor.width()),i.$dropzone.height(i.$editor.height()),r.text(i.lang.image.dragImageHere)),n=n.add(t.target)},this.documentEventHandlers.onDragleave=function(t){(n=n.not(t.target)).length||i.$editor.removeClass("dragover")},this.documentEventHandlers.onDrop=function(){n=C(),i.$editor.removeClass("dragover")},this.$eventListener.on("dragenter",this.documentEventHandlers.onDragenter).on("dragleave",this.documentEventHandlers.onDragleave).on("drop",this.documentEventHandlers.onDrop),this.$dropzone.on("dragenter",function(){i.$dropzone.addClass("hover"),r.text(i.lang.image.dropImage)}).on("dragleave",function(){i.$dropzone.removeClass("hover"),r.text(i.lang.image.dragImageHere)}),this.$dropzone.on("drop",function(t){var n=t.originalEvent.dataTransfer;t.preventDefault(),n&&n.files&&n.files.length?(i.$editable.focus(),i.context.invoke("editor.insertImagesOrCallback",n.files)):C.each(n.types,function(t,e){var o=n.getData(e);-1<e.toLowerCase().indexOf("text")?i.context.invoke("editor.pasteHTML",o):C(o).each(function(t,e){i.context.invoke("editor.insertNode",e)})})}).on("dragover",!1)},t.prototype.destroy=function(){var e=this;Object.keys(this.documentEventHandlers).forEach(function(t){e.$eventListener.off(t.substr(2).toLowerCase(),e.documentEventHandlers[t])}),this.documentEventHandlers={}},t}();R.hasCodeMirror&&(Ot=window.CodeMirror);var qt=function(){function t(t){this.context=t,this.$editor=t.layoutInfo.editor,this.$editable=t.layoutInfo.editable,this.$codable=t.layoutInfo.codable,this.options=t.options}return t.prototype.sync=function(){this.isActivated()&&R.hasCodeMirror&&this.$codable.data("cmEditor").save()},t.prototype.isActivated=function(){return this.$editor.hasClass("codeview")},t.prototype.toggle=function(){this.isActivated()?this.deactivate():this.activate(),this.context.triggerEvent("codeview.toggled")},t.prototype.purify=function(t){if(this.options.codeviewFilter&&(t=t.replace(this.options.codeviewFilterRegex,""),this.options.codeviewIframeFilter)){var i=this.options.codeviewIframeWhitelistSrc.concat(this.options.codeviewIframeWhitelistSrcBase);t=t.replace(/(<iframe.*?>.*?(?:<\/iframe>)?)/gi,function(t){if(/<.+src(?==?('|"|\s)?)[\s\S]+src(?=('|"|\s)?)[^>]*?>/i.test(t))return"";for(var e=0,o=i;e<o.length;e++){var n=o[e];if(new RegExp('src="(https?:)?//'+n.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")+'/(.+)"').test(t))return t}return""})}return t},t.prototype.activate=function(){var e=this;if(this.$codable.val($t.html(this.$editable,this.options.prettifyHtml)),this.$codable.height(this.$editable.height()),this.context.invoke("toolbar.updateCodeview",!0),this.$editor.addClass("codeview"),this.$codable.focus(),R.hasCodeMirror){var o=Ot.fromTextArea(this.$codable[0],this.options.codemirror);if(this.options.codemirror.tern){var n=new Ot.TernServer(this.options.codemirror.tern);o.ternServer=n,o.on("cursorActivity",function(t){n.updateArgHints(t)})}o.on("blur",function(t){e.context.triggerEvent("blur.codeview",o.getValue(),t)}),o.on("change",function(t){e.context.triggerEvent("change.codeview",o.getValue(),o)}),o.setSize(null,this.$editable.outerHeight()),this.$codable.data("cmEditor",o)}else this.$codable.on("blur",function(t){e.context.triggerEvent("blur.codeview",e.$codable.val(),t)}),this.$codable.on("input",function(t){e.context.triggerEvent("change.codeview",e.$codable.val(),e.$codable)})},t.prototype.deactivate=function(){if(R.hasCodeMirror){var t=this.$codable.data("cmEditor");this.$codable.val(t.getValue()),t.toTextArea()}var e=this.purify($t.value(this.$codable,this.options.prettifyHtml)||$t.emptyPara),o=this.$editable.html()!==e;this.$editable.html(e),this.$editable.height(this.options.height?this.$codable.height():"auto"),this.$editor.removeClass("codeview"),o&&this.context.triggerEvent("change",this.$editable.html(),this.$editable),this.$editable.focus(),this.context.invoke("toolbar.updateCodeview",!1)},t.prototype.destroy=function(){this.isActivated()&&this.deactivate()},t}(),Vt=function(){function t(t){this.$document=C(document),this.$statusbar=t.layoutInfo.statusbar,this.$editable=t.layoutInfo.editable,this.options=t.options}return t.prototype.initialize=function(){var n=this;this.options.airMode||this.options.disableResizeEditor?this.destroy():this.$statusbar.on("mousedown",function(t){t.preventDefault(),t.stopPropagation();var o=n.$editable.offset().top-n.$document.scrollTop(),e=function(t){var e=t.clientY-(o+24);e=0<n.options.minheight?Math.max(e,n.options.minheight):e,e=0<n.options.maxHeight?Math.min(e,n.options.maxHeight):e,n.$editable.height(e)};n.$document.on("mousemove",e).one("mouseup",function(){n.$document.off("mousemove",e)})})},t.prototype.destroy=function(){this.$statusbar.off(),this.$statusbar.addClass("locked")},t}(),Gt=function(){function t(t){var e=this;this.context=t,this.$editor=t.layoutInfo.editor,this.$toolbar=t.layoutInfo.toolbar,this.$editable=t.layoutInfo.editable,this.$codable=t.layoutInfo.codable,this.$window=C(window),this.$scrollbar=C("html, body"),this.onResize=function(){e.resizeTo({h:e.$window.height()-e.$toolbar.outerHeight()})}}return t.prototype.resizeTo=function(t){this.$editable.css("height",t.h),this.$codable.css("height",t.h),this.$codable.data("cmeditor")&&this.$codable.data("cmeditor").setsize(null,t.h)},t.prototype.toggle=function(){this.$editor.toggleClass("fullscreen"),this.isFullscreen()?(this.$editable.data("orgHeight",this.$editable.css("height")),this.$editable.data("orgMaxHeight",this.$editable.css("maxHeight")),this.$editable.css("maxHeight",""),this.$window.on("resize",this.onResize).trigger("resize"),this.$scrollbar.css("overflow","hidden")):(this.$window.off("resize",this.onResize),this.resizeTo({h:this.$editable.data("orgHeight")}),this.$editable.css("maxHeight",this.$editable.css("orgMaxHeight")),this.$scrollbar.css("overflow","visible")),this.context.invoke("toolbar.updateFullscreen",this.isFullscreen())},t.prototype.isFullscreen=function(){return this.$editor.hasClass("fullscreen")},t}(),_t=function(){function t(t){var o=this;this.context=t,this.$document=C(document),this.$editingArea=t.layoutInfo.editingArea,this.options=t.options,this.lang=this.options.langInfo,this.events={"summernote.mousedown":function(t,e){o.update(e.target,e)&&e.preventDefault()},"summernote.keyup summernote.scroll summernote.change summernote.dialog.shown":function(){o.update()},"summernote.disable":function(){o.hide()},"summernote.codeview.toggled":function(){o.update()}}}return t.prototype.initialize=function(){var r=this;this.$handle=C(['<div class="note-handle">','<div class="note-control-selection">','<div class="note-control-selection-bg"></div>','<div class="note-control-holder note-control-nw"></div>','<div class="note-control-holder note-control-ne"></div>','<div class="note-control-holder note-control-sw"></div>','<div class="',this.options.disableResizeImage?"note-control-holder":"note-control-sizing",' note-control-se"></div>',this.options.disableResizeImage?"":'<div class="note-control-selection-info"></div>',"</div>","</div>"].join("")).prependTo(this.$editingArea),this.$handle.on("mousedown",function(t){if($t.isControlSizing(t.target)){t.preventDefault(),t.stopPropagation();var e=r.$handle.find(".note-control-selection").data("target"),o=e.offset(),n=r.$document.scrollTop(),i=function(t){r.context.invoke("editor.resizeTo",{x:t.clientX-o.left,y:t.clientY-(o.top-n)},e,!t.shiftKey),r.update(e[0])};r.$document.on("mousemove",i).one("mouseup",function(t){t.preventDefault(),r.$document.off("mousemove",i),r.context.invoke("editor.afterCommand")}),e.data("ratio")||e.data("ratio",e.height()/e.width())}}),this.$handle.on("wheel",function(t){t.preventDefault(),r.update()})},t.prototype.destroy=function(){this.$handle.remove()},t.prototype.update=function(t,e){if(this.context.isDisabled())return!1;var o=$t.isImg(t),n=this.$handle.find(".note-control-selection");if(this.context.invoke("imagePopover.update",t,e),o){var i=C(t),r=i.position(),s={left:r.left+parseInt(i.css("marginLeft"),10),top:r.top+parseInt(i.css("marginTop"),10)},a={w:i.outerWidth(!1),h:i.outerHeight(!1)};n.css({display:"block",left:s.left,top:s.top,width:a.w,height:a.h}).data("target",i);var l=new Image;l.src=i.attr("src");var c=a.w+"x"+a.h+" ("+this.lang.image.original+": "+l.width+"x"+l.height+")";n.find(".note-control-selection-info").text(c),this.context.invoke("editor.saveTarget",t)}else this.hide();return o},t.prototype.hide=function(){this.context.invoke("editor.clearTarget"),this.$handle.children().hide()},t}(),Zt=/^([A-Za-z][A-Za-z0-9+-.]*\:[\/]{2}|mailto:[A-Z0-9._%+-]+@)?(www\.)?(.+)$/i,Yt=function(){function t(t){var o=this;this.context=t,this.events={"summernote.keyup":function(t,e){e.isDefaultPrevented()||o.handleKeyup(e)},"summernote.keydown":function(t,e){o.handleKeydown(e)}}}return t.prototype.initialize=function(){this.lastWordRange=null},t.prototype.destroy=function(){this.lastWordRange=null},t.prototype.replace=function(){if(this.lastWordRange){var t=this.lastWordRange.toString(),e=t.match(Zt);if(e&&(e[1]||e[2])){var o=e[1]?t:"http://"+t,n=C("<a />").html(t).attr("href",o)[0];this.context.options.linkTargetBlank&&C(n).attr("target","_blank"),this.lastWordRange.insertNode(n),this.lastWordRange=null,this.context.invoke("editor.focus")}}},t.prototype.handleKeydown=function(t){if(B.contains([Pt.code.ENTER,Pt.code.SPACE],t.keyCode)){var e=this.context.invoke("editor.createRange").getWordRange();this.lastWordRange=e}},t.prototype.handleKeyup=function(t){B.contains([Pt.code.ENTER,Pt.code.SPACE],t.keyCode)&&this.replace()},t}(),Qt=function(){function t(t){var e=this;this.$note=t.layoutInfo.note,this.events={"summernote.change":function(){e.$note.val(t.invoke("code"))}}}return t.prototype.shouldInitialize=function(){return $t.isTextarea(this.$note[0])},t}(),Jt=function(){function t(t){var o=this;this.context=t,this.options=t.options.replace||{},this.keys=[Pt.code.ENTER,Pt.code.SPACE,Pt.code.PERIOD,Pt.code.COMMA,Pt.code.SEMICOLON,Pt.code.SLASH],this.previousKeydownCode=null,this.events={"summernote.keyup":function(t,e){e.isDefaultPrevented()||o.handleKeyup(e)},"summernote.keydown":function(t,e){o.handleKeydown(e)}}}return t.prototype.shouldInitialize=function(){return!!this.options.match},t.prototype.initialize=function(){this.lastWord=null},t.prototype.destroy=function(){this.lastWord=null},t.prototype.replace=function(){if(this.lastWord){var o=this,t=this.lastWord.toString();this.options.match(t,function(t){if(t){var e="";if("string"==typeof t?e=$t.createText(t):t instanceof jQuery?e=t[0]:t instanceof Node&&(e=t),!e)return;o.lastWord.insertNode(e),o.lastWord=null,o.context.invoke("editor.focus")}})}},t.prototype.handleKeydown=function(t){if(this.previousKeydownCode&&B.contains(this.keys,this.previousKeydownCode))this.previousKeydownCode=t.keyCode;else{if(B.contains(this.keys,t.keyCode)){var e=this.context.invoke("editor.createRange").getWordRange();this.lastWord=e}this.previousKeydownCode=t.keyCode}},t.prototype.handleKeyup=function(t){B.contains(this.keys,t.keyCode)&&this.replace()},t}(),Xt=function(){function t(t){var e=this;this.context=t,this.$editingArea=t.layoutInfo.editingArea,this.options=t.options,this.events={"summernote.init summernote.change":function(){e.update()},"summernote.codeview.toggled":function(){e.update()}}}return t.prototype.shouldInitialize=function(){return!!this.options.placeholder},t.prototype.initialize=function(){var t=this;this.$placeholder=C('<div class="note-placeholder">'),this.$placeholder.on("click",function(){t.context.invoke("focus")}).html(this.options.placeholder).prependTo(this.$editingArea),this.update()},t.prototype.destroy=function(){this.$placeholder.remove()},t.prototype.update=function(){var t=!this.context.invoke("codeview.isActivated")&&this.context.invoke("editor.isEmpty");this.$placeholder.toggle(t)},t}(),te=function(){function t(t){this.ui=C.summernote.ui,this.context=t,this.$toolbar=t.layoutInfo.toolbar,this.options=t.options,this.lang=this.options.langInfo,this.invertedKeyMap=A.invertObject(this.options.keyMap[R.isMac?"mac":"pc"])}return t.prototype.representShortcut=function(t){var e=this.invertedKeyMap[t];return this.options.shortcuts&&e?(R.isMac&&(e=e.replace("CMD","⌘").replace("SHIFT","⇧"))," ("+(e=e.replace("BACKSLASH","\\").replace("SLASH","/").replace("LEFTBRACKET","[").replace("RIGHTBRACKET","]"))+")"):""},t.prototype.button=function(t){return!this.options.tooltip&&t.tooltip&&delete t.tooltip,t.container=this.options.container,this.ui.button(t)},t.prototype.initialize=function(){this.addToolbarButtons(),this.addImagePopoverButtons(),this.addLinkPopoverButtons(),this.addTablePopoverButtons(),this.fontInstalledMap={}},t.prototype.destroy=function(){delete this.fontInstalledMap},t.prototype.isFontInstalled=function(t){return this.fontInstalledMap.hasOwnProperty(t)||(this.fontInstalledMap[t]=R.isFontInstalled(t)||B.contains(this.options.fontNamesIgnoreCheck,t)),this.fontInstalledMap[t]},t.prototype.isFontDeservedToAdd=function(t){return""!==(t=t.toLowerCase())&&this.isFontInstalled(t)&&-1===["sans-serif","serif","monospace","cursive","fantasy"].indexOf(t)},t.prototype.colorPalette=function(h,t,o,n){var p=this;return this.ui.buttonGroup({className:"note-color "+h,children:[this.button({className:"note-current-color-button",contents:this.ui.icon(this.options.icons.font+" note-recent-color"),tooltip:t,click:function(t){var e=C(t.currentTarget);o&&n?p.context.invoke("editor.color",{backColor:e.attr("data-backColor"),foreColor:e.attr("data-foreColor")}):o?p.context.invoke("editor.color",{backColor:e.attr("data-backColor")}):n&&p.context.invoke("editor.color",{foreColor:e.attr("data-foreColor")})},callback:function(t){var e=t.find(".note-recent-color");o&&(e.css("background-color",p.options.colorButton.backColor),t.attr("data-backColor",p.options.colorButton.backColor)),n?(e.css("color",p.options.colorButton.foreColor),t.attr("data-foreColor",p.options.colorButton.foreColor)):e.css("color","transparent")}}),this.button({className:"dropdown-toggle",contents:this.ui.dropdownButtonContents("",this.options),tooltip:this.lang.color.more,data:{toggle:"dropdown"}}),this.ui.dropdown({items:(o?['<div class="note-palette">','  <div class="note-palette-title">'+this.lang.color.background+"</div>","  <div>",'    <button type="button" class="note-color-reset btn btn-light" data-event="backColor" data-value="inherit">',this.lang.color.transparent,"    </button>","  </div>",'  <div class="note-holder" data-event="backColor"/>',"  <div>",'    <button type="button" class="note-color-select btn" data-event="openPalette" data-value="backColorPicker">',this.lang.color.cpSelect,"    </button>",'    <input type="color" id="backColorPicker" class="note-btn note-color-select-btn" value="'+this.options.colorButton.backColor+'" data-event="backColorPalette">',"  </div>",'  <div class="note-holder-custom" id="backColorPalette" data-event="backColor"/>',"</div>"].join(""):"")+(n?['<div class="note-palette">','  <div class="note-palette-title">'+this.lang.color.foreground+"</div>","  <div>",'    <button type="button" class="note-color-reset btn btn-light" data-event="removeFormat" data-value="foreColor">',this.lang.color.resetToDefault,"    </button>","  </div>",'  <div class="note-holder" data-event="foreColor"/>',"  <div>",'    <button type="button" class="note-color-select btn" data-event="openPalette" data-value="foreColorPicker">',this.lang.color.cpSelect,"    </button>",'    <input type="color" id="foreColorPicker" class="note-btn note-color-select-btn" value="'+this.options.colorButton.foreColor+'" data-event="foreColorPalette">','  <div class="note-holder-custom" id="foreColorPalette" data-event="foreColor"/>',"</div>"].join(""):""),callback:function(o){o.find(".note-holder").each(function(t,e){var o=C(e);o.append(p.ui.palette({colors:p.options.colors,colorsName:p.options.colorsName,eventName:o.data("event"),container:p.options.container,tooltip:p.options.tooltip}).render())});var n=[["#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF"]];o.find(".note-holder-custom").each(function(t,e){var o=C(e);o.append(p.ui.palette({colors:n,colorsName:n,eventName:o.data("event"),container:p.options.container,tooltip:p.options.tooltip}).render())}),o.find("input[type=color]").each(function(t,e){C(e).change(function(){var t=o.find("#"+C(this).data("event")).find(".note-color-btn").first(),e=this.value.toUpperCase();t.css("background-color",e).attr("aria-label",e).attr("data-value",e).attr("data-original-title",e),t.click()})})},click:function(t){t.stopPropagation();var e=C("."+h),o=C(t.target),n=o.data("event"),i=o.attr("data-value");if("openPalette"===n){var r=e.find("#"+i),s=C(e.find("#"+r.data("event")).find(".note-color-row")[0]),a=s.find(".note-color-btn").last().detach(),l=r.val();a.css("background-color",l).attr("aria-label",l).attr("data-value",l).attr("data-original-title",l),s.prepend(a),r.click()}else if(B.contains(["backColor","foreColor"],n)){var c="backColor"===n?"background-color":"color",d=o.closest(".note-color").find(".note-recent-color"),u=o.closest(".note-color").find(".note-current-color-button");d.css(c,i),u.attr("data-"+n,i),p.context.invoke("editor."+n,i)}}})]}).render()},t.prototype.addToolbarButtons=function(){var n=this;this.context.memo("button.style",function(){return n.ui.buttonGroup([n.button({className:"dropdown-toggle",contents:n.ui.dropdownButtonContents(n.ui.icon(n.options.icons.magic),n.options),tooltip:n.lang.style.style,data:{toggle:"dropdown"}}),n.ui.dropdown({className:"dropdown-style",items:n.options.styleTags,title:n.lang.style.style,template:function(t){"string"==typeof t&&(t={tag:t,title:n.lang.style.hasOwnProperty(t)?n.lang.style[t]:t});var e=t.tag,o=t.title;return"<"+e+(t.style?' style="'+t.style+'" ':"")+(t.className?' class="'+t.className+'"':"")+">"+o+"</"+e+">"},click:n.context.createInvokeHandler("editor.formatBlock")})]).render()});for(var t=function(t,e){var o=i.options.styleTags[t];i.context.memo("button.style."+o,function(){return n.button({className:"note-btn-style-"+o,contents:'<div data-value="'+o+'">'+o.toUpperCase()+"</div>",tooltip:n.lang.style[o],click:n.context.createInvokeHandler("editor.formatBlock")}).render()})},i=this,e=0,o=this.options.styleTags.length;e<o;e++)t(e);this.context.memo("button.bold",function(){return n.button({className:"note-btn-bold",contents:n.ui.icon(n.options.icons.bold),tooltip:n.lang.font.bold+n.representShortcut("bold"),click:n.context.createInvokeHandlerAndUpdateState("editor.bold")}).render()}),this.context.memo("button.italic",function(){return n.button({className:"note-btn-italic",contents:n.ui.icon(n.options.icons.italic),tooltip:n.lang.font.italic+n.representShortcut("italic"),click:n.context.createInvokeHandlerAndUpdateState("editor.italic")}).render()}),this.context.memo("button.underline",function(){return n.button({className:"note-btn-underline",contents:n.ui.icon(n.options.icons.underline),tooltip:n.lang.font.underline+n.representShortcut("underline"),click:n.context.createInvokeHandlerAndUpdateState("editor.underline")}).render()}),this.context.memo("button.clear",function(){return n.button({contents:n.ui.icon(n.options.icons.eraser),tooltip:n.lang.font.clear+n.representShortcut("removeFormat"),click:n.context.createInvokeHandler("editor.removeFormat")}).render()}),this.context.memo("button.strikethrough",function(){return n.button({className:"note-btn-strikethrough",contents:n.ui.icon(n.options.icons.strikethrough),tooltip:n.lang.font.strikethrough+n.representShortcut("strikethrough"),click:n.context.createInvokeHandlerAndUpdateState("editor.strikethrough")}).render()}),this.context.memo("button.superscript",function(){return n.button({className:"note-btn-superscript",contents:n.ui.icon(n.options.icons.superscript),tooltip:n.lang.font.superscript,click:n.context.createInvokeHandlerAndUpdateState("editor.superscript")}).render()}),this.context.memo("button.subscript",function(){return n.button({className:"note-btn-subscript",contents:n.ui.icon(n.options.icons.subscript),tooltip:n.lang.font.subscript,click:n.context.createInvokeHandlerAndUpdateState("editor.subscript")}).render()}),this.context.memo("button.fontname",function(){var t=n.context.invoke("editor.currentStyle");return C.each(t["font-family"].split(","),function(t,e){e=e.trim().replace(/['"]+/g,""),n.isFontDeservedToAdd(e)&&-1===n.options.fontNames.indexOf(e)&&n.options.fontNames.push(e)}),n.ui.buttonGroup([n.button({className:"dropdown-toggle",contents:n.ui.dropdownButtonContents('<span class="note-current-fontname"/>',n.options),tooltip:n.lang.font.name,data:{toggle:"dropdown"}}),n.ui.dropdownCheck({className:"dropdown-fontname",checkClassName:n.options.icons.menuCheck,items:n.options.fontNames.filter(n.isFontInstalled.bind(n)),title:n.lang.font.name,template:function(t){return"<span style=\"font-family: '"+t+"'\">"+t+"</span>"},click:n.context.createInvokeHandlerAndUpdateState("editor.fontName")})]).render()}),this.context.memo("button.fontsize",function(){return n.ui.buttonGroup([n.button({className:"dropdown-toggle",contents:n.ui.dropdownButtonContents('<span class="note-current-fontsize"/>',n.options),tooltip:n.lang.font.size,data:{toggle:"dropdown"}}),n.ui.dropdownCheck({className:"dropdown-fontsize",checkClassName:n.options.icons.menuCheck,items:n.options.fontSizes,title:n.lang.font.size,click:n.context.createInvokeHandlerAndUpdateState("editor.fontSize")})]).render()}),this.context.memo("button.color",function(){return n.colorPalette("note-color-all",n.lang.color.recent,!0,!0)}),this.context.memo("button.forecolor",function(){return n.colorPalette("note-color-fore",n.lang.color.foreground,!1,!0)}),this.context.memo("button.backcolor",function(){return n.colorPalette("note-color-back",n.lang.color.background,!0,!1)}),this.context.memo("button.ul",function(){return n.button({contents:n.ui.icon(n.options.icons.unorderedlist),tooltip:n.lang.lists.unordered+n.representShortcut("insertUnorderedList"),click:n.context.createInvokeHandler("editor.insertUnorderedList")}).render()}),this.context.memo("button.ol",function(){return n.button({contents:n.ui.icon(n.options.icons.orderedlist),tooltip:n.lang.lists.ordered+n.representShortcut("insertOrderedList"),click:n.context.createInvokeHandler("editor.insertOrderedList")}).render()});var r=this.button({contents:this.ui.icon(this.options.icons.alignLeft),tooltip:this.lang.paragraph.left+this.representShortcut("justifyLeft"),click:this.context.createInvokeHandler("editor.justifyLeft")}),s=this.button({contents:this.ui.icon(this.options.icons.alignCenter),tooltip:this.lang.paragraph.center+this.representShortcut("justifyCenter"),click:this.context.createInvokeHandler("editor.justifyCenter")}),a=this.button({contents:this.ui.icon(this.options.icons.alignRight),tooltip:this.lang.paragraph.right+this.representShortcut("justifyRight"),click:this.context.createInvokeHandler("editor.justifyRight")}),l=this.button({contents:this.ui.icon(this.options.icons.alignJustify),tooltip:this.lang.paragraph.justify+this.representShortcut("justifyFull"),click:this.context.createInvokeHandler("editor.justifyFull")}),c=this.button({contents:this.ui.icon(this.options.icons.outdent),tooltip:this.lang.paragraph.outdent+this.representShortcut("outdent"),click:this.context.createInvokeHandler("editor.outdent")}),d=this.button({contents:this.ui.icon(this.options.icons.indent),tooltip:this.lang.paragraph.indent+this.representShortcut("indent"),click:this.context.createInvokeHandler("editor.indent")});this.context.memo("button.justifyLeft",A.invoke(r,"render")),this.context.memo("button.justifyCenter",A.invoke(s,"render")),this.context.memo("button.justifyRight",A.invoke(a,"render")),this.context.memo("button.justifyFull",A.invoke(l,"render")),this.context.memo("button.outdent",A.invoke(c,"render")),this.context.memo("button.indent",A.invoke(d,"render")),this.context.memo("button.paragraph",function(){return n.ui.buttonGroup([n.button({className:"dropdown-toggle",contents:n.ui.dropdownButtonContents(n.ui.icon(n.options.icons.alignLeft),n.options),tooltip:n.lang.paragraph.paragraph,data:{toggle:"dropdown"}}),n.ui.dropdown([n.ui.buttonGroup({className:"note-align",children:[r,s,a,l]}),n.ui.buttonGroup({className:"note-list",children:[c,d]})])]).render()}),this.context.memo("button.height",function(){return n.ui.buttonGroup([n.button({className:"dropdown-toggle",contents:n.ui.dropdownButtonContents(n.ui.icon(n.options.icons.textHeight),n.options),tooltip:n.lang.font.height,data:{toggle:"dropdown"}}),n.ui.dropdownCheck({items:n.options.lineHeights,checkClassName:n.options.icons.menuCheck,className:"dropdown-line-height",title:n.lang.font.height,click:n.context.createInvokeHandler("editor.lineHeight")})]).render()}),this.context.memo("button.table",function(){return n.ui.buttonGroup([n.button({className:"dropdown-toggle",contents:n.ui.dropdownButtonContents(n.ui.icon(n.options.icons.table),n.options),tooltip:n.lang.table.table,data:{toggle:"dropdown"}}),n.ui.dropdown({title:n.lang.table.table,className:"note-table",items:['<div class="note-dimension-picker">','  <div class="note-dimension-picker-mousecatcher" data-event="insertTable" data-value="1x1"/>','  <div class="note-dimension-picker-highlighted"/>','  <div class="note-dimension-picker-unhighlighted"/>',"</div>",'<div class="note-dimension-display">1 x 1</div>'].join("")})],{callback:function(t){t.find(".note-dimension-picker-mousecatcher").css({width:n.options.insertTableMaxSize.col+"em",height:n.options.insertTableMaxSize.row+"em"}).mousedown(n.context.createInvokeHandler("editor.insertTable")).on("mousemove",n.tableMoveHandler.bind(n))}}).render()}),this.context.memo("button.link",function(){return n.button({contents:n.ui.icon(n.options.icons.link),tooltip:n.lang.link.link+n.representShortcut("linkDialog.show"),click:n.context.createInvokeHandler("linkDialog.show")}).render()}),this.context.memo("button.picture",function(){return n.button({contents:n.ui.icon(n.options.icons.picture),tooltip:n.lang.image.image,click:n.context.createInvokeHandler("imageDialog.show")}).render()}),this.context.memo("button.video",function(){return n.button({contents:n.ui.icon(n.options.icons.video),tooltip:n.lang.video.video,click:n.context.createInvokeHandler("videoDialog.show")}).render()}),this.context.memo("button.hr",function(){return n.button({contents:n.ui.icon(n.options.icons.minus),tooltip:n.lang.hr.insert+n.representShortcut("insertHorizontalRule"),click:n.context.createInvokeHandler("editor.insertHorizontalRule")}).render()}),this.context.memo("button.fullscreen",function(){return n.button({className:"btn-fullscreen",contents:n.ui.icon(n.options.icons.arrowsAlt),tooltip:n.lang.options.fullscreen,click:n.context.createInvokeHandler("fullscreen.toggle")}).render()}),this.context.memo("button.codeview",function(){return n.button({className:"btn-codeview",contents:n.ui.icon(n.options.icons.code),tooltip:n.lang.options.codeview,click:n.context.createInvokeHandler("codeview.toggle")}).render()}),this.context.memo("button.redo",function(){return n.button({contents:n.ui.icon(n.options.icons.redo),tooltip:n.lang.history.redo+n.representShortcut("redo"),click:n.context.createInvokeHandler("editor.redo")}).render()}),this.context.memo("button.undo",function(){return n.button({contents:n.ui.icon(n.options.icons.undo),tooltip:n.lang.history.undo+n.representShortcut("undo"),click:n.context.createInvokeHandler("editor.undo")}).render()}),this.context.memo("button.help",function(){return n.button({contents:n.ui.icon(n.options.icons.question),tooltip:n.lang.options.help,click:n.context.createInvokeHandler("helpDialog.show")}).render()})},t.prototype.addImagePopoverButtons=function(){var t=this;this.context.memo("button.resizeFull",function(){return t.button({contents:'<span class="note-fontsize-10">100%</span>',tooltip:t.lang.image.resizeFull,click:t.context.createInvokeHandler("editor.resize","1")}).render()}),this.context.memo("button.resizeHalf",function(){return t.button({contents:'<span class="note-fontsize-10">50%</span>',tooltip:t.lang.image.resizeHalf,click:t.context.createInvokeHandler("editor.resize","0.5")}).render()}),this.context.memo("button.resizeQuarter",function(){return t.button({contents:'<span class="note-fontsize-10">25%</span>',tooltip:t.lang.image.resizeQuarter,click:t.context.createInvokeHandler("editor.resize","0.25")}).render()}),this.context.memo("button.resizeNone",function(){return t.button({contents:t.ui.icon(t.options.icons.rollback),tooltip:t.lang.image.resizeNone,click:t.context.createInvokeHandler("editor.resize","0")}).render()}),this.context.memo("button.floatLeft",function(){return t.button({contents:t.ui.icon(t.options.icons.floatLeft),tooltip:t.lang.image.floatLeft,click:t.context.createInvokeHandler("editor.floatMe","left")}).render()}),this.context.memo("button.floatRight",function(){return t.button({contents:t.ui.icon(t.options.icons.floatRight),tooltip:t.lang.image.floatRight,click:t.context.createInvokeHandler("editor.floatMe","right")}).render()}),this.context.memo("button.floatNone",function(){return t.button({contents:t.ui.icon(t.options.icons.rollback),tooltip:t.lang.image.floatNone,click:t.context.createInvokeHandler("editor.floatMe","none")}).render()}),this.context.memo("button.removeMedia",function(){return t.button({contents:t.ui.icon(t.options.icons.trash),tooltip:t.lang.image.remove,click:t.context.createInvokeHandler("editor.removeMedia")}).render()})},t.prototype.addLinkPopoverButtons=function(){var t=this;this.context.memo("button.linkDialogShow",function(){return t.button({contents:t.ui.icon(t.options.icons.link),tooltip:t.lang.link.edit,click:t.context.createInvokeHandler("linkDialog.show")}).render()}),this.context.memo("button.unlink",function(){return t.button({contents:t.ui.icon(t.options.icons.unlink),tooltip:t.lang.link.unlink,click:t.context.createInvokeHandler("editor.unlink")}).render()})},t.prototype.addTablePopoverButtons=function(){var t=this;this.context.memo("button.addRowUp",function(){return t.button({className:"btn-md",contents:t.ui.icon(t.options.icons.rowAbove),tooltip:t.lang.table.addRowAbove,click:t.context.createInvokeHandler("editor.addRow","top")}).render()}),this.context.memo("button.addRowDown",function(){return t.button({className:"btn-md",contents:t.ui.icon(t.options.icons.rowBelow),tooltip:t.lang.table.addRowBelow,click:t.context.createInvokeHandler("editor.addRow","bottom")}).render()}),this.context.memo("button.addColLeft",function(){return t.button({className:"btn-md",contents:t.ui.icon(t.options.icons.colBefore),tooltip:t.lang.table.addColLeft,click:t.context.createInvokeHandler("editor.addCol","left")}).render()}),this.context.memo("button.addColRight",function(){return t.button({className:"btn-md",contents:t.ui.icon(t.options.icons.colAfter),tooltip:t.lang.table.addColRight,click:t.context.createInvokeHandler("editor.addCol","right")}).render()}),this.context.memo("button.deleteRow",function(){return t.button({className:"btn-md",contents:t.ui.icon(t.options.icons.rowRemove),tooltip:t.lang.table.delRow,click:t.context.createInvokeHandler("editor.deleteRow")}).render()}),this.context.memo("button.deleteCol",function(){return t.button({className:"btn-md",contents:t.ui.icon(t.options.icons.colRemove),tooltip:t.lang.table.delCol,click:t.context.createInvokeHandler("editor.deleteCol")}).render()}),this.context.memo("button.deleteTable",function(){return t.button({className:"btn-md",contents:t.ui.icon(t.options.icons.trash),tooltip:t.lang.table.delTable,click:t.context.createInvokeHandler("editor.deleteTable")}).render()})},t.prototype.build=function(t,e){for(var o=0,n=e.length;o<n;o++){for(var i=e[o],r=Array.isArray(i)?i[0]:i,s=Array.isArray(i)?1===i.length?[i[0]]:i[1]:[i],a=this.ui.buttonGroup({className:"note-"+r}).render(),l=0,c=s.length;l<c;l++){var d=this.context.memo("button."+s[l]);d&&a.append("function"==typeof d?d():d)}a.appendTo(t)}},t.prototype.updateCurrentStyle=function(t){var n=this,e=t||this.$toolbar,o=this.context.invoke("editor.currentStyle");if(this.updateBtnStates(e,{".note-btn-bold":function(){return"bold"===o["font-bold"]},".note-btn-italic":function(){return"italic"===o["font-italic"]},".note-btn-underline":function(){return"underline"===o["font-underline"]},".note-btn-subscript":function(){return"subscript"===o["font-subscript"]},".note-btn-superscript":function(){return"superscript"===o["font-superscript"]},".note-btn-strikethrough":function(){return"strikethrough"===o["font-strikethrough"]}}),o["font-family"]){var i=o["font-family"].split(",").map(function(t){return t.replace(/[\'\"]/g,"").replace(/\s+$/,"").replace(/^\s+/,"")}),r=B.find(i,this.isFontInstalled.bind(this));e.find(".dropdown-fontname a").each(function(t,e){var o=C(e),n=o.data("value")+""==r+"";o.toggleClass("checked",n)}),e.find(".note-current-fontname").text(r).css("font-family",r)}if(o["font-size"]){var s=o["font-size"];e.find(".dropdown-fontsize a").each(function(t,e){var o=C(e),n=o.data("value")+""==s+"";o.toggleClass("checked",n)}),e.find(".note-current-fontsize").text(s)}if(o["line-height"]){var a=o["line-height"];e.find(".dropdown-line-height li a").each(function(t,e){var o=C(e).data("value")+""==a+"";n.className=o?"checked":""})}},t.prototype.updateBtnStates=function(o,t){var n=this;C.each(t,function(t,e){n.ui.toggleBtnActive(o.find(t),e())})},t.prototype.tableMoveHandler=function(t){var e,o=C(t.target.parentNode),n=o.next(),i=o.find(".note-dimension-picker-mousecatcher"),r=o.find(".note-dimension-picker-highlighted"),s=o.find(".note-dimension-picker-unhighlighted");if(void 0===t.offsetX){var a=C(t.target).offset();e={x:t.pageX-a.left,y:t.pageY-a.top}}else e={x:t.offsetX,y:t.offsetY};var l=Math.ceil(e.x/18)||1,c=Math.ceil(e.y/18)||1;r.css({width:l+"em",height:c+"em"}),i.data("value",l+"x"+c),3<l&&l<this.options.insertTableMaxSize.col&&s.css({width:l+1+"em"}),3<c&&c<this.options.insertTableMaxSize.row&&s.css({height:c+1+"em"}),n.html(l+" x "+c)},t}(),ee=function(){function t(t){this.context=t,this.$window=C(window),this.$document=C(document),this.ui=C.summernote.ui,this.$note=t.layoutInfo.note,this.$editor=t.layoutInfo.editor,this.$toolbar=t.layoutInfo.toolbar,this.$editable=t.layoutInfo.editable,this.$statusbar=t.layoutInfo.statusbar,this.options=t.options,this.isFollowing=!1,this.followScroll=this.followScroll.bind(this)}return t.prototype.shouldInitialize=function(){return!this.options.airMode},t.prototype.initialize=function(){var t=this;this.options.toolbar=this.options.toolbar||[],this.options.toolbar.length?this.context.invoke("buttons.build",this.$toolbar,this.options.toolbar):this.$toolbar.hide(),this.options.toolbarContainer&&this.$toolbar.appendTo(this.options.toolbarContainer),this.changeContainer(!1),this.$note.on("summernote.keyup summernote.mouseup summernote.change",function(){t.context.invoke("buttons.updateCurrentStyle")}),this.context.invoke("buttons.updateCurrentStyle"),this.options.followingToolbar&&this.$window.on("scroll resize",this.followScroll)},t.prototype.destroy=function(){this.$toolbar.children().remove(),this.options.followingToolbar&&this.$window.off("scroll resize",this.followScroll)},t.prototype.followScroll=function(){if(this.$editor.hasClass("fullscreen"))return!1;var t=this.$editor.outerHeight(),e=this.$editor.width(),o=this.$toolbar.height(),n=this.$statusbar.height(),i=0;this.options.otherStaticBar&&(i=C(this.options.otherStaticBar).outerHeight());var r=this.$document.scrollTop(),s=this.$editor.offset().top,a=s-i,l=s+t-i-o-n;!this.isFollowing&&a<r&&r<l-o?(this.isFollowing=!0,this.$toolbar.css({position:"fixed",top:i,width:e}),this.$editable.css({marginTop:this.$toolbar.height()+5})):this.isFollowing&&(r<a||l<r)&&(this.isFollowing=!1,this.$toolbar.css({position:"relative",top:0,width:"100%"}),this.$editable.css({marginTop:""}))},t.prototype.changeContainer=function(t){t?this.$toolbar.prependTo(this.$editor):this.options.toolbarContainer&&this.$toolbar.appendTo(this.options.toolbarContainer),this.followScroll()},t.prototype.updateFullscreen=function(t){this.ui.toggleBtnActive(this.$toolbar.find(".btn-fullscreen"),t),this.changeContainer(t)},t.prototype.updateCodeview=function(t){this.ui.toggleBtnActive(this.$toolbar.find(".btn-codeview"),t),t?this.deactivate():this.activate()},t.prototype.activate=function(t){var e=this.$toolbar.find("button");t||(e=e.not(".btn-codeview")),this.ui.toggleBtn(e,!0)},t.prototype.deactivate=function(t){var e=this.$toolbar.find("button");t||(e=e.not(".btn-codeview")),this.ui.toggleBtn(e,!1)},t}(),oe=function(){function t(t){this.context=t,this.ui=C.summernote.ui,this.$body=C(document.body),this.$editor=t.layoutInfo.editor,this.options=t.options,this.lang=this.options.langInfo,t.memo("help.linkDialog.show",this.options.langInfo.help["linkDialog.show"])}return t.prototype.initialize=function(){var t=this.options.dialogsInBody?this.$body:this.$editor,e=['<div class="form-group note-form-group">','<label class="note-form-label">'+this.lang.link.textToDisplay+"</label>",'<input class="note-link-text form-control note-form-control note-input" type="text" />',"</div>",'<div class="form-group note-form-group">','<label class="note-form-label">'+this.lang.link.url+"</label>",'<input class="note-link-url form-control note-form-control note-input" type="text" value="http://" />',"</div>",this.options.disableLinkTarget?"":C("<div/>").append(this.ui.checkbox({className:"sn-checkbox-open-in-new-window",text:this.lang.link.openInNewWindow,checked:!0}).render()).html()].join(""),o='<input type="button" href="#" class="btn btn-primary note-btn note-btn-primary note-link-btn" value="'+this.lang.link.insert+'" disabled>';this.$dialog=this.ui.dialog({className:"link-dialog",title:this.lang.link.insert,fade:this.options.dialogsFade,body:e,footer:o}).render().appendTo(t)},t.prototype.destroy=function(){this.ui.hideDialog(this.$dialog),this.$dialog.remove()},t.prototype.bindEnterKey=function(t,e){t.on("keypress",function(t){t.keyCode===Pt.code.ENTER&&(t.preventDefault(),e.trigger("click"))})},t.prototype.toggleLinkBtn=function(t,e,o){this.ui.toggleBtn(t,e.val()&&o.val())},t.prototype.showLinkDialog=function(s){var a=this;return C.Deferred(function(e){var o=a.$dialog.find(".note-link-text"),n=a.$dialog.find(".note-link-url"),i=a.$dialog.find(".note-link-btn"),r=a.$dialog.find(".sn-checkbox-open-in-new-window input[type=checkbox]");a.ui.onDialogShown(a.$dialog,function(){a.context.triggerEvent("dialog.shown"),!s.url&&A.isValidUrl(s.text)&&(s.url=s.text),o.on("input paste propertychange",function(){s.text=o.val(),a.toggleLinkBtn(i,o,n)}).val(s.text),n.on("input paste propertychange",function(){s.text||o.val(n.val()),a.toggleLinkBtn(i,o,n)}).val(s.url),R.isSupportTouch||n.trigger("focus"),a.toggleLinkBtn(i,o,n),a.bindEnterKey(n,i),a.bindEnterKey(o,i);var t=void 0!==s.isNewWindow?s.isNewWindow:a.context.options.linkTargetBlank;r.prop("checked",t),i.one("click",function(t){t.preventDefault(),e.resolve({range:s.range,url:n.val(),text:o.val(),isNewWindow:r.is(":checked")}),a.ui.hideDialog(a.$dialog)})}),a.ui.onDialogHidden(a.$dialog,function(){o.off(),n.off(),i.off(),"pending"===e.state()&&e.reject()}),a.ui.showDialog(a.$dialog)}).promise()},t.prototype.show=function(){var e=this,t=this.context.invoke("editor.getLinkInfo");this.context.invoke("editor.saveRange"),this.showLinkDialog(t).then(function(t){e.context.invoke("editor.restoreRange"),e.context.invoke("editor.createLink",t)}).fail(function(){e.context.invoke("editor.restoreRange")})},t}(),ne=function(){function t(t){var e=this;this.context=t,this.ui=C.summernote.ui,this.options=t.options,this.events={"summernote.keyup summernote.mouseup summernote.change summernote.scroll":function(){e.update()},"summernote.disable summernote.dialog.shown":function(){e.hide()}}}return t.prototype.shouldInitialize=function(){return!B.isEmpty(this.options.popover.link)},t.prototype.initialize=function(){this.$popover=this.ui.popover({className:"note-link-popover",callback:function(t){t.find(".popover-content,.note-popover-content").prepend('<span><a target="_blank"></a>&nbsp;</span>')}}).render().appendTo(this.options.container);var t=this.$popover.find(".popover-content,.note-popover-content");this.context.invoke("buttons.build",t,this.options.popover.link)},t.prototype.destroy=function(){this.$popover.remove()},t.prototype.update=function(){if(this.context.invoke("editor.hasFocus")){var t=this.context.invoke("editor.getLastRange");if(t.isCollapsed()&&t.isOnAnchor()){var e=$t.ancestor(t.sc,$t.isAnchor),o=C(e).attr("href");this.$popover.find("a").attr("href",o).html(o);var n=$t.posFromPlaceholder(e);this.$popover.css({display:"block",left:n.left,top:n.top})}else this.hide()}else this.hide()},t.prototype.hide=function(){this.$popover.hide()},t}(),ie=function(){function t(t){this.context=t,this.ui=C.summernote.ui,this.$body=C(document.body),this.$editor=t.layoutInfo.editor,this.options=t.options,this.lang=this.options.langInfo}return t.prototype.initialize=function(){var t=this.options.dialogsInBody?this.$body:this.$editor,e="";if(this.options.maximumImageFileSize){var o=Math.floor(Math.log(this.options.maximumImageFileSize)/Math.log(1024)),n=1*(this.options.maximumImageFileSize/Math.pow(1024,o)).toFixed(2)+" "+" KMGTP"[o]+"B";e="<small>"+this.lang.image.maximumFileSize+" : "+n+"</small>"}var i=['<div class="form-group note-form-group note-group-select-from-files">','<label class="note-form-label">'+this.lang.image.selectFromFiles+"</label>",'<input class="note-image-input form-control-file note-form-control note-input" ',' type="file" name="files" accept="image/*" multiple="multiple" />',e,"</div>",'<div class="form-group note-group-image-url" style="overflow:auto;">','<label class="note-form-label">'+this.lang.image.url+"</label>",'<input class="note-image-url form-control note-form-control note-input ',' col-md-12" type="text" />',"</div>"].join(""),r='<input type="button" href="#" class="btn btn-primary note-btn note-btn-primary note-image-btn" value="'+this.lang.image.insert+'" disabled>';this.$dialog=this.ui.dialog({title:this.lang.image.insert,fade:this.options.dialogsFade,body:i,footer:r}).render().appendTo(t)},t.prototype.destroy=function(){this.ui.hideDialog(this.$dialog),this.$dialog.remove()},t.prototype.bindEnterKey=function(t,e){t.on("keypress",function(t){t.keyCode===Pt.code.ENTER&&(t.preventDefault(),e.trigger("click"))})},t.prototype.show=function(){var e=this;this.context.invoke("editor.saveRange"),this.showImageDialog().then(function(t){e.ui.hideDialog(e.$dialog),e.context.invoke("editor.restoreRange"),"string"==typeof t?e.options.callbacks.onImageLinkInsert?e.context.triggerEvent("image.link.insert",t):e.context.invoke("editor.insertImage",t):e.context.invoke("editor.insertImagesOrCallback",t)}).fail(function(){e.context.invoke("editor.restoreRange")})},t.prototype.showImageDialog=function(){var i=this;return C.Deferred(function(e){var t=i.$dialog.find(".note-image-input"),o=i.$dialog.find(".note-image-url"),n=i.$dialog.find(".note-image-btn");i.ui.onDialogShown(i.$dialog,function(){i.context.triggerEvent("dialog.shown"),t.replaceWith(t.clone().on("change",function(t){e.resolve(t.target.files||t.target.value)}).val("")),o.on("input paste propertychange",function(){i.ui.toggleBtn(n,o.val())}).val(""),R.isSupportTouch||o.trigger("focus"),n.click(function(t){t.preventDefault(),e.resolve(o.val())}),i.bindEnterKey(o,n)}),i.ui.onDialogHidden(i.$dialog,function(){t.off(),o.off(),n.off(),"pending"===e.state()&&e.reject()}),i.ui.showDialog(i.$dialog)})},t}(),re=function(){function t(t){var e=this;this.context=t,this.ui=C.summernote.ui,this.editable=t.layoutInfo.editable[0],this.options=t.options,this.events={"summernote.disable":function(){e.hide()}}}return t.prototype.shouldInitialize=function(){return!B.isEmpty(this.options.popover.image)},t.prototype.initialize=function(){this.$popover=this.ui.popover({className:"note-image-popover"}).render().appendTo(this.options.container);var t=this.$popover.find(".popover-content,.note-popover-content");this.context.invoke("buttons.build",t,this.options.popover.image)},t.prototype.destroy=function(){this.$popover.remove()},t.prototype.update=function(t,e){if($t.isImg(t)){var o=$t.posFromPlaceholder(t),n=$t.posFromPlaceholder(this.editable);this.$popover.css({display:"block",left:this.options.popatmouse?e.pageX-20:o.left,top:this.options.popatmouse?e.pageY:Math.min(o.top,n.top)})}else this.hide()},t.prototype.hide=function(){this.$popover.hide()},t}(),se=function(){function t(t){var o=this;this.context=t,this.ui=C.summernote.ui,this.options=t.options,this.events={"summernote.mousedown":function(t,e){o.update(e.target)},"summernote.keyup summernote.scroll summernote.change":function(){o.update()},"summernote.disable":function(){o.hide()}}}return t.prototype.shouldInitialize=function(){return!B.isEmpty(this.options.popover.table)},t.prototype.initialize=function(){this.$popover=this.ui.popover({className:"note-table-popover"}).render().appendTo(this.options.container);var t=this.$popover.find(".popover-content,.note-popover-content");this.context.invoke("buttons.build",t,this.options.popover.table),R.isFF&&document.execCommand("enableInlineTableEditing",!1,!1)},t.prototype.destroy=function(){this.$popover.remove()},t.prototype.update=function(t){if(this.context.isDisabled())return!1;var e=$t.isCell(t);if(e){var o=$t.posFromPlaceholder(t);this.$popover.css({display:"block",left:o.left,top:o.top})}else this.hide();return e},t.prototype.hide=function(){this.$popover.hide()},t}(),ae=function(){function t(t){this.context=t,this.ui=C.summernote.ui,this.$body=C(document.body),this.$editor=t.layoutInfo.editor,this.options=t.options,this.lang=this.options.langInfo}return t.prototype.initialize=function(){var t=this.options.dialogsInBody?this.$body:this.$editor,e=['<div class="form-group note-form-group row-fluid">','<label class="note-form-label">'+this.lang.video.url+' <small class="text-muted">'+this.lang.video.providers+"</small></label>",'<input class="note-video-url form-control note-form-control note-input" type="text" />',"</div>"].join(""),o='<input type="button" href="#" class="btn btn-primary note-btn note-btn-primary note-video-btn" value="'+this.lang.video.insert+'" disabled>';this.$dialog=this.ui.dialog({title:this.lang.video.insert,fade:this.options.dialogsFade,body:e,footer:o}).render().appendTo(t)},t.prototype.destroy=function(){this.ui.hideDialog(this.$dialog),this.$dialog.remove()},t.prototype.bindEnterKey=function(t,e){t.on("keypress",function(t){t.keyCode===Pt.code.ENTER&&(t.preventDefault(),e.trigger("click"))})},t.prototype.createVideoNode=function(t){var e,o=t.match(/\/\/(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w|-]{11})(?:(?:[\?&]t=)(\S+))?$/),n=t.match(/(?:www\.|\/\/)instagram\.com\/p\/(.[a-zA-Z0-9_-]*)/),i=t.match(/\/\/vine\.co\/v\/([a-zA-Z0-9]+)/),r=t.match(/\/\/(player\.)?vimeo\.com\/([a-z]*\/)*(\d+)[?]?.*/),s=t.match(/.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/),a=t.match(/\/\/v\.youku\.com\/v_show\/id_(\w+)=*\.html/),l=t.match(/\/\/v\.qq\.com.*?vid=(.+)/),c=t.match(/\/\/v\.qq\.com\/x?\/?(page|cover).*?\/([^\/]+)\.html\??.*/),d=t.match(/^.+.(mp4|m4v)$/),u=t.match(/^.+.(ogg|ogv)$/),h=t.match(/^.+.(webm)$/),p=t.match(/(?:www\.|\/\/)facebook\.com\/([^\/]+)\/videos\/([0-9]+)/);if(o&&11===o[1].length){var f=o[1],m=0;if(void 0!==o[2]){var g=o[2].match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);if(g)for(var v=[3600,60,1],b=0,y=v.length;b<y;b++)m+=void 0!==g[b+1]?v[b]*parseInt(g[b+1],10):0}e=C("<iframe>").attr("frameborder",0).attr("src","//www.youtube.com/embed/"+f+(0<m?"?start="+m:"")).attr("width","640").attr("height","360")}else if(n&&n[0].length)e=C("<iframe>").attr("frameborder",0).attr("src","https://instagram.com/p/"+n[1]+"/embed/").attr("width","612").attr("height","710").attr("scrolling","no").attr("allowtransparency","true");else if(i&&i[0].length)e=C("<iframe>").attr("frameborder",0).attr("src",i[0]+"/embed/simple").attr("width","600").attr("height","600").attr("class","vine-embed");else if(r&&r[3].length)e=C("<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>").attr("frameborder",0).attr("src","//player.vimeo.com/video/"+r[3]).attr("width","640").attr("height","360");else if(s&&s[2].length)e=C("<iframe>").attr("frameborder",0).attr("src","//www.dailymotion.com/embed/video/"+s[2]).attr("width","640").attr("height","360");else if(a&&a[1].length)e=C("<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>").attr("frameborder",0).attr("height","498").attr("width","510").attr("src","//player.youku.com/embed/"+a[1]);else if(l&&l[1].length||c&&c[2].length){var k=l&&l[1].length?l[1]:c[2];e=C("<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>").attr("frameborder",0).attr("height","310").attr("width","500").attr("src","http://v.qq.com/iframe/player.html?vid="+k+"&amp;auto=0")}else if(d||u||h)e=C("<video controls>").attr("src",t).attr("width","640").attr("height","360");else{if(!p||!p[0].length)return!1;e=C("<iframe>").attr("frameborder",0).attr("src","https://www.facebook.com/plugins/video.php?href="+encodeURIComponent(p[0])+"&show_text=0&width=560").attr("width","560").attr("height","301").attr("scrolling","no").attr("allowtransparency","true")}return e.addClass("note-video-clip"),e[0]},t.prototype.show=function(){var o=this,t=this.context.invoke("editor.getSelectedText");this.context.invoke("editor.saveRange"),this.showVideoDialog(t).then(function(t){o.ui.hideDialog(o.$dialog),o.context.invoke("editor.restoreRange");var e=o.createVideoNode(t);e&&o.context.invoke("editor.insertNode",e)}).fail(function(){o.context.invoke("editor.restoreRange")})},t.prototype.showVideoDialog=function(t){var n=this;return C.Deferred(function(e){var o=n.$dialog.find(".note-video-url"),t=n.$dialog.find(".note-video-btn");n.ui.onDialogShown(n.$dialog,function(){n.context.triggerEvent("dialog.shown"),o.on("input paste propertychange",function(){n.ui.toggleBtn(t,o.val())}),R.isSupportTouch||o.trigger("focus"),t.click(function(t){t.preventDefault(),e.resolve(o.val())}),n.bindEnterKey(o,t)}),n.ui.onDialogHidden(n.$dialog,function(){o.off(),t.off(),"pending"===e.state()&&e.reject()}),n.ui.showDialog(n.$dialog)})},t}(),le=function(){function t(t){this.context=t,this.ui=C.summernote.ui,this.$body=C(document.body),this.$editor=t.layoutInfo.editor,this.options=t.options,this.lang=this.options.langInfo}return t.prototype.initialize=function(){var t=this.options.dialogsInBody?this.$body:this.$editor,e=['<p class="text-center">','<a href="http://summernote.org/" target="_blank">Summernote 0.8.12</a> · ','<a href="https://github.com/summernote/summernote" target="_blank">Project</a> · ','<a href="https://github.com/summernote/summernote/issues" target="_blank">Issues</a>',"</p>"].join("");this.$dialog=this.ui.dialog({title:this.lang.options.help,fade:this.options.dialogsFade,body:this.createShortcutList(),footer:e,callback:function(t){t.find(".modal-body,.note-modal-body").css({"max-height":300,overflow:"scroll"})}}).render().appendTo(t)},t.prototype.destroy=function(){this.ui.hideDialog(this.$dialog),this.$dialog.remove()},t.prototype.createShortcutList=function(){var n=this,i=this.options.keyMap[R.isMac?"mac":"pc"];return Object.keys(i).map(function(t){var e=i[t],o=C('<div><div class="help-list-item"/></div>');return o.append(C("<label><kbd>"+t+"</kdb></label>").css({width:180,"margin-right":10})).append(C("<span/>").html(n.context.memo("help."+e)||e)),o.html()}).join("")},t.prototype.showHelpDialog=function(){var e=this;return C.Deferred(function(t){e.ui.onDialogShown(e.$dialog,function(){e.context.triggerEvent("dialog.shown"),t.resolve()}),e.ui.showDialog(e.$dialog)}).promise()},t.prototype.show=function(){var t=this;this.context.invoke("editor.saveRange"),this.showHelpDialog().then(function(){t.context.invoke("editor.restoreRange")})},t}(),ce=function(){function t(t){var o=this;this.context=t,this.ui=C.summernote.ui,this.options=t.options,this.events={"summernote.keyup summernote.mouseup summernote.scroll":function(){o.update()},"summernote.disable summernote.change summernote.dialog.shown":function(){o.hide()},"summernote.focusout":function(t,e){R.isFF||e.relatedTarget&&$t.ancestor(e.relatedTarget,A.eq(o.$popover[0]))||o.hide()}}}return t.prototype.shouldInitialize=function(){return this.options.airMode&&!B.isEmpty(this.options.popover.air)},t.prototype.initialize=function(){this.$popover=this.ui.popover({className:"note-air-popover"}).render().appendTo(this.options.container);var t=this.$popover.find(".popover-content");this.context.invoke("buttons.build",t,this.options.popover.air)},t.prototype.destroy=function(){this.$popover.remove()},t.prototype.update=function(){var t=this.context.invoke("editor.currentStyle");if(t.range&&!t.range.isCollapsed()){var e=B.last(t.range.getClientRects());if(e){var o=A.rect2bnd(e);this.$popover.css({display:"block",left:Math.max(o.left+o.width/2,0)-20,top:o.top+o.height}),this.context.invoke("buttons.updateCurrentStyle",this.$popover)}}else this.hide()},t.prototype.hide=function(){this.$popover.hide()},t}(),de=function(){function t(t){var o=this;this.context=t,this.ui=C.summernote.ui,this.$editable=t.layoutInfo.editable,this.options=t.options,this.hint=this.options.hint||[],this.direction=this.options.hintDirection||"bottom",this.hints=Array.isArray(this.hint)?this.hint:[this.hint],this.events={"summernote.keyup":function(t,e){e.isDefaultPrevented()||o.handleKeyup(e)},"summernote.keydown":function(t,e){o.handleKeydown(e)},"summernote.disable summernote.dialog.shown":function(){o.hide()}}}return t.prototype.shouldInitialize=function(){return 0<this.hints.length},t.prototype.initialize=function(){var e=this;this.lastWordRange=null,this.$popover=this.ui.popover({className:"note-hint-popover",hideArrow:!0,direction:""}).render().appendTo(this.options.container),this.$popover.hide(),this.$content=this.$popover.find(".popover-content,.note-popover-content"),this.$content.on("click",".note-hint-item",function(t){e.$content.find(".active").removeClass("active"),C(t.currentTarget).addClass("active"),e.replace()})},t.prototype.destroy=function(){this.$popover.remove()},t.prototype.selectItem=function(t){this.$content.find(".active").removeClass("active"),t.addClass("active"),this.$content[0].scrollTop=t[0].offsetTop-this.$content.innerHeight()/2},t.prototype.moveDown=function(){var t=this.$content.find(".note-hint-item.active"),e=t.next();if(e.length)this.selectItem(e);else{var o=t.parent().next();o.length||(o=this.$content.find(".note-hint-group").first()),this.selectItem(o.find(".note-hint-item").first())}},t.prototype.moveUp=function(){var t=this.$content.find(".note-hint-item.active"),e=t.prev();if(e.length)this.selectItem(e);else{var o=t.parent().prev();o.length||(o=this.$content.find(".note-hint-group").last()),this.selectItem(o.find(".note-hint-item").last())}},t.prototype.replace=function(){var t=this.$content.find(".note-hint-item.active");if(t.length){var e=this.nodeFromItem(t);this.lastWordRange.insertNode(e),At.createFromNode(e).collapse().select(),this.lastWordRange=null,this.hide(),this.context.triggerEvent("change",this.$editable.html(),this.$editable[0]),this.context.invoke("editor.focus")}},t.prototype.nodeFromItem=function(t){var e=this.hints[t.data("index")],o=t.data("item"),n=e.content?e.content(o):o;return"string"==typeof n&&(n=$t.createText(n)),n},t.prototype.createItemTemplates=function(n,t){var i=this.hints[n];return t.map(function(t,e){var o=C('<div class="note-hint-item"/>');return o.append(i.template?i.template(t):t+""),o.data({index:n,item:t}),o})},t.prototype.handleKeydown=function(t){this.$popover.is(":visible")&&(t.keyCode===Pt.code.ENTER?(t.preventDefault(),this.replace()):t.keyCode===Pt.code.UP?(t.preventDefault(),this.moveUp()):t.keyCode===Pt.code.DOWN&&(t.preventDefault(),this.moveDown()))},t.prototype.searchKeyword=function(t,e,o){var n=this.hints[t];if(n&&n.match.test(e)&&n.search){var i=n.match.exec(e);n.search(i[1],o)}else o()},t.prototype.createGroup=function(e,t){var o=this,n=C('<div class="note-hint-group note-hint-group-'+e+'"/>');return this.searchKeyword(e,t,function(t){(t=t||[]).length&&(n.html(o.createItemTemplates(e,t)),o.show())}),n},t.prototype.handleKeyup=function(t){var o=this;if(!B.contains([Pt.code.ENTER,Pt.code.UP,Pt.code.DOWN],t.keyCode)){var e=this.context.invoke("editor.getLastRange").getWordRange(),n=e.toString();if(this.hints.length&&n){this.$content.empty();var i=A.rect2bnd(B.last(e.getClientRects()));i&&(this.$popover.hide(),this.lastWordRange=e,this.hints.forEach(function(t,e){t.match.test(n)&&o.createGroup(e,n).appendTo(o.$content)}),this.$content.find(".note-hint-item:first").addClass("active"),"top"===this.direction?this.$popover.css({left:i.left,top:i.top-this.$popover.outerHeight()-5}):this.$popover.css({left:i.left,top:i.top+i.height+5}))}else this.hide()}},t.prototype.show=function(){this.$popover.show()},t.prototype.hide=function(){this.$popover.hide()},t}();C.summernote=C.extend(C.summernote,{version:"0.8.12",plugins:{},dom:$t,range:At,options:{langInfo:C.summernote.lang["en-US"],modules:{editor:jt,clipboard:Kt,dropzone:Wt,codeview:qt,statusbar:Vt,fullscreen:Gt,handle:_t,hintPopover:de,autoLink:Yt,autoSync:Qt,autoReplace:Jt,placeholder:Xt,buttons:te,toolbar:ee,linkDialog:oe,linkPopover:ne,imageDialog:ie,imagePopover:re,tablePopover:se,videoDialog:ae,helpDialog:le,airPopover:ce},buttons:{},lang:"en-US",followingToolbar:!1,otherStaticBar:"",toolbar:[["style",["style"]],["font",["bold","underline","clear"]],["fontname",["fontname"]],["color",["color"]],["para",["ul","ol","paragraph"]],["table",["table"]],["insert",["link","picture","video"]],["view",["fullscreen","codeview","help"]]],popatmouse:!0,popover:{image:[["resize",["resizeFull","resizeHalf","resizeQuarter","resizeNone"]],["float",["floatLeft","floatRight","floatNone"]],["remove",["removeMedia"]]],link:[["link",["linkDialogShow","unlink"]]],table:[["add",["addRowDown","addRowUp","addColLeft","addColRight"]],["delete",["deleteRow","deleteCol","deleteTable"]]],air:[["color",["color"]],["font",["bold","underline","clear"]],["para",["ul","paragraph"]],["table",["table"]],["insert",["link","picture"]]]},airMode:!1,width:null,height:null,linkTargetBlank:!0,focus:!1,tabSize:4,styleWithSpan:!0,shortcuts:!0,textareaAutoSync:!0,hintDirection:"bottom",tooltip:"auto",container:"body",maxTextLength:0,blockquoteBreakingLevel:2,spellCheck:!0,styleTags:["p","blockquote","pre","h1","h2","h3","h4","h5","h6"],fontNames:["Arial","Arial Black","Comic Sans MS","Courier New","Helvetica Neue","Helvetica","Impact","Lucida Grande","Tahoma","Times New Roman","Verdana"],fontNamesIgnoreCheck:[],fontSizes:["8","9","10","11","12","14","18","24","36"],colors:[["#000000","#424242","#636363","#9C9C94","#CEC6CE","#EFEFEF","#F7F7F7","#FFFFFF"],["#FF0000","#FF9C00","#FFFF00","#00FF00","#00FFFF","#0000FF","#9C00FF","#FF00FF"],["#F7C6CE","#FFE7CE","#FFEFC6","#D6EFD6","#CEDEE7","#CEE7F7","#D6D6E7","#E7D6DE"],["#E79C9C","#FFC69C","#FFE79C","#B5D6A5","#A5C6CE","#9CC6EF","#B5A5D6","#D6A5BD"],["#E76363","#F7AD6B","#FFD663","#94BD7B","#73A5AD","#6BADDE","#8C7BC6","#C67BA5"],["#CE0000","#E79439","#EFC631","#6BA54A","#4A7B8C","#3984C6","#634AA5","#A54A7B"],["#9C0000","#B56308","#BD9400","#397B21","#104A5A","#085294","#311873","#731842"],["#630000","#7B3900","#846300","#295218","#083139","#003163","#21104A","#4A1031"]],colorsName:[["Black","Tundora","Dove Gray","Star Dust","Pale Slate","Gallery","Alabaster","White"],["Red","Orange Peel","Yellow","Green","Cyan","Blue","Electric Violet","Magenta"],["Azalea","Karry","Egg White","Zanah","Botticelli","Tropical Blue","Mischka","Twilight"],["Tonys Pink","Peach Orange","Cream Brulee","Sprout","Casper","Perano","Cold Purple","Careys Pink"],["Mandy","Rajah","Dandelion","Olivine","Gulf Stream","Viking","Blue Marguerite","Puce"],["Guardsman Red","Fire Bush","Golden Dream","Chelsea Cucumber","Smalt Blue","Boston Blue","Butterfly Bush","Cadillac"],["Sangria","Mai Tai","Buddha Gold","Forest Green","Eden","Venice Blue","Meteorite","Claret"],["Rosewood","Cinnamon","Olive","Parsley","Tiber","Midnight Blue","Valentino","Loulou"]],colorButton:{foreColor:"#000000",backColor:"#FFFF00"},lineHeights:["1.0","1.2","1.4","1.5","1.6","1.8","2.0","3.0"],tableClassName:"table table-bordered",insertTableMaxSize:{col:10,row:10},dialogsInBody:!1,dialogsFade:!1,maximumImageFileSize:null,callbacks:{onBeforeCommand:null,onBlur:null,onBlurCodeview:null,onChange:null,onChangeCodeview:null,onDialogShown:null,onEnter:null,onFocus:null,onImageLinkInsert:null,onImageUpload:null,onImageUploadError:null,onInit:null,onKeydown:null,onKeyup:null,onMousedown:null,onMouseup:null,onPaste:null,onScroll:null},codemirror:{mode:"text/html",htmlMode:!0,lineNumbers:!0},codeviewFilter:!1,codeviewFilterRegex:/<\/*(?:applet|b(?:ase|gsound|link)|embed|frame(?:set)?|ilayer|l(?:ayer|ink)|meta|object|s(?:cript|tyle)|t(?:itle|extarea)|xml)[^>]*?>/gi,codeviewIframeFilter:!0,codeviewIframeWhitelistSrc:[],codeviewIframeWhitelistSrcBase:["www.youtube.com","www.youtube-nocookie.com","www.facebook.com","vine.co","instagram.com","player.vimeo.com","www.dailymotion.com","player.youku.com","v.qq.com"],keyMap:{pc:{ENTER:"insertParagraph","CTRL+Z":"undo","CTRL+Y":"redo",TAB:"tab","SHIFT+TAB":"untab","CTRL+B":"bold","CTRL+I":"italic","CTRL+U":"underline","CTRL+SHIFT+S":"strikethrough","CTRL+BACKSLASH":"removeFormat","CTRL+SHIFT+L":"justifyLeft","CTRL+SHIFT+E":"justifyCenter","CTRL+SHIFT+R":"justifyRight","CTRL+SHIFT+J":"justifyFull","CTRL+SHIFT+NUM7":"insertUnorderedList","CTRL+SHIFT+NUM8":"insertOrderedList","CTRL+LEFTBRACKET":"outdent","CTRL+RIGHTBRACKET":"indent","CTRL+NUM0":"formatPara","CTRL+NUM1":"formatH1","CTRL+NUM2":"formatH2","CTRL+NUM3":"formatH3","CTRL+NUM4":"formatH4","CTRL+NUM5":"formatH5","CTRL+NUM6":"formatH6","CTRL+ENTER":"insertHorizontalRule","CTRL+K":"linkDialog.show"},mac:{ENTER:"insertParagraph","CMD+Z":"undo","CMD+SHIFT+Z":"redo",TAB:"tab","SHIFT+TAB":"untab","CMD+B":"bold","CMD+I":"italic","CMD+U":"underline","CMD+SHIFT+S":"strikethrough","CMD+BACKSLASH":"removeFormat","CMD+SHIFT+L":"justifyLeft","CMD+SHIFT+E":"justifyCenter","CMD+SHIFT+R":"justifyRight","CMD+SHIFT+J":"justifyFull","CMD+SHIFT+NUM7":"insertUnorderedList","CMD+SHIFT+NUM8":"insertOrderedList","CMD+LEFTBRACKET":"outdent","CMD+RIGHTBRACKET":"indent","CMD+NUM0":"formatPara","CMD+NUM1":"formatH1","CMD+NUM2":"formatH2","CMD+NUM3":"formatH3","CMD+NUM4":"formatH4","CMD+NUM5":"formatH5","CMD+NUM6":"formatH6","CMD+ENTER":"insertHorizontalRule","CMD+K":"linkDialog.show"}},icons:{align:"note-icon-align",alignCenter:"note-icon-align-center",alignJustify:"note-icon-align-justify",alignLeft:"note-icon-align-left",alignRight:"note-icon-align-right",rowBelow:"note-icon-row-below",colBefore:"note-icon-col-before",colAfter:"note-icon-col-after",rowAbove:"note-icon-row-above",rowRemove:"note-icon-row-remove",colRemove:"note-icon-col-remove",indent:"note-icon-align-indent",outdent:"note-icon-align-outdent",arrowsAlt:"note-icon-arrows-alt",bold:"note-icon-bold",caret:"note-icon-caret",circle:"note-icon-circle",close:"note-icon-close",code:"note-icon-code",eraser:"note-icon-eraser",floatLeft:"note-icon-float-left",floatRight:"note-icon-float-right",font:"note-icon-font",frame:"note-icon-frame",italic:"note-icon-italic",link:"note-icon-link",unlink:"note-icon-chain-broken",magic:"note-icon-magic",menuCheck:"note-icon-menu-check",minus:"note-icon-minus",orderedlist:"note-icon-orderedlist",pencil:"note-icon-pencil",picture:"note-icon-picture",question:"note-icon-question",redo:"note-icon-redo",rollback:"note-icon-rollback",square:"note-icon-square",strikethrough:"note-icon-strikethrough",subscript:"note-icon-subscript",superscript:"note-icon-superscript",table:"note-icon-table",textHeight:"note-icon-text-height",trash:"note-icon-trash",underline:"note-icon-underline",undo:"note-icon-undo",unorderedlist:"note-icon-unorderedlist",video:"note-icon-video"}}}),C.summernote=C.extend(C.summernote,{ui:b}),C.summernote.options.styleTags=["p",{title:"Blockquote",tag:"blockquote",className:"blockquote",value:"blockquote"},"pre","h1","h2","h3","h4","h5","h6"]});
let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}