!function(t){function e(i){if(r[i])return r[i].exports;var n=r[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var r={};e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,i){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=604)}({150:function(t,e,r){function i(t){if(t)return n(t)}function n(t){for(var e in i.prototype)t[e]=i.prototype[e];return t}t.exports=i,i.prototype.on=i.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},i.prototype.once=function(t,e){function r(){this.off(t,r),e.apply(this,arguments)}return r.fn=e,this.on(t,r),this},i.prototype.off=i.prototype.removeListener=i.prototype.removeAllListeners=i.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var r=this._callbacks["$"+t];if(!r)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var i,n=0;n<r.length;n++)if((i=r[n])===e||i.fn===e){r.splice(n,1);break}return this},i.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),r=this._callbacks["$"+t];if(r){r=r.slice(0);for(var i=0,n=r.length;i<n;++i)r[i].apply(this,e)}return this},i.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},i.prototype.hasListeners=function(t){return!!this.listeners(t).length}},166:function(t,e){function r(){this._defaults=[]}["use","on","once","set","query","type","accept","auth","withCredentials","sortQuery","retry","ok","redirects","timeout","buffer","serialize","parse","ca","key","pfx","cert"].forEach(function(t){r.prototype[t]=function(){return this._defaults.push({fn:t,arguments:arguments}),this}}),r.prototype._setDefaults=function(t){this._defaults.forEach(function(e){t[e.fn].apply(t,e.arguments)})},t.exports=r},167:function(t,e,r){"use strict";function i(t){if(t)return n(t)}function n(t){for(var e in i.prototype)t[e]=i.prototype[e];return t}var o=r(82);t.exports=i,i.prototype.clearTimeout=function(){return clearTimeout(this._timer),clearTimeout(this._responseTimeoutTimer),delete this._timer,delete this._responseTimeoutTimer,this},i.prototype.parse=function(t){return this._parser=t,this},i.prototype.responseType=function(t){return this._responseType=t,this},i.prototype.serialize=function(t){return this._serializer=t,this},i.prototype.timeout=function(t){if(!t||"object"!=typeof t)return this._timeout=t,this._responseTimeout=0,this;for(var e in t)switch(e){case"deadline":this._timeout=t.deadline;break;case"response":this._responseTimeout=t.response;break;default:console.warn("Unknown timeout option",e)}return this},i.prototype.retry=function(t,e){return 0!==arguments.length&&!0!==t||(t=1),t<=0&&(t=0),this._maxRetries=t,this._retries=0,this._retryCallback=e,this};var s=["ECONNRESET","ETIMEDOUT","EADDRINFO","ESOCKETTIMEDOUT"];i.prototype._shouldRetry=function(t,e){if(!this._maxRetries||this._retries++>=this._maxRetries)return!1;if(this._retryCallback)try{var r=this._retryCallback(t,e);if(!0===r)return!0;if(!1===r)return!1}catch(t){console.error(t)}if(e&&e.status&&e.status>=500&&501!=e.status)return!0;if(t){if(t.code&&~s.indexOf(t.code))return!0;if(t.timeout&&"ECONNABORTED"==t.code)return!0;if(t.crossDomain)return!0}return!1},i.prototype._retry=function(){return this.clearTimeout(),this.req&&(this.req=null,this.req=this.request()),this._aborted=!1,this.timedout=!1,this._end()},i.prototype.then=function(t,e){if(!this._fullfilledPromise){var r=this;this._endCalled&&console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"),this._fullfilledPromise=new Promise(function(t,e){r.end(function(r,i){r?e(r):t(i)})})}return this._fullfilledPromise.then(t,e)},i.prototype.catch=function(t){return this.then(void 0,t)},i.prototype.use=function(t){return t(this),this},i.prototype.ok=function(t){if("function"!=typeof t)throw Error("Callback required");return this._okCallback=t,this},i.prototype._isResponseOK=function(t){return!!t&&(this._okCallback?this._okCallback(t):t.status>=200&&t.status<300)},i.prototype.get=function(t){return this._header[t.toLowerCase()]},i.prototype.getHeader=i.prototype.get,i.prototype.set=function(t,e){if(o(t)){for(var r in t)this.set(r,t[r]);return this}return this._header[t.toLowerCase()]=e,this.header[t]=e,this},i.prototype.unset=function(t){return delete this._header[t.toLowerCase()],delete this.header[t],this},i.prototype.field=function(t,e){if(null===t||void 0===t)throw new Error(".field(name, val) name can not be empty");if(this._data&&console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()"),o(t)){for(var r in t)this.field(r,t[r]);return this}if(Array.isArray(e)){for(var i in e)this.field(t,e[i]);return this}if(null===e||void 0===e)throw new Error(".field(name, val) val can not be empty");return"boolean"==typeof e&&(e=""+e),this._getFormData().append(t,e),this},i.prototype.abort=function(){return this._aborted?this:(this._aborted=!0,this.xhr&&this.xhr.abort(),this.req&&this.req.abort(),this.clearTimeout(),this.emit("abort"),this)},i.prototype._auth=function(t,e,r,i){switch(r.type){case"basic":this.set("Authorization","Basic "+i(t+":"+e));break;case"auto":this.username=t,this.password=e;break;case"bearer":this.set("Authorization","Bearer "+t)}return this},i.prototype.withCredentials=function(t){return void 0==t&&(t=!0),this._withCredentials=t,this},i.prototype.redirects=function(t){return this._maxRedirects=t,this},i.prototype.maxResponseSize=function(t){if("number"!=typeof t)throw TypeError("Invalid argument");return this._maxResponseSize=t,this},i.prototype.toJSON=function(){return{method:this.method,url:this.url,data:this._data,headers:this._header}},i.prototype.send=function(t){var e=o(t),r=this._header["content-type"];if(this._formData&&console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()"),e&&!this._data)Array.isArray(t)?this._data=[]:this._isHost(t)||(this._data={});else if(t&&this._data&&this._isHost(this._data))throw Error("Can't merge these send calls");if(e&&o(this._data))for(var i in t)this._data[i]=t[i];else"string"==typeof t?(r||this.type("form"),r=this._header["content-type"],this._data="application/x-www-form-urlencoded"==r?this._data?this._data+"&"+t:t:(this._data||"")+t):this._data=t;return!e||this._isHost(t)?this:(r||this.type("json"),this)},i.prototype.sortQuery=function(t){return this._sort=void 0===t||t,this},i.prototype._finalizeQueryString=function(){var t=this._query.join("&");if(t&&(this.url+=(this.url.indexOf("?")>=0?"&":"?")+t),this._query.length=0,this._sort){var e=this.url.indexOf("?");if(e>=0){var r=this.url.substring(e+1).split("&");"function"==typeof this._sort?r.sort(this._sort):r.sort(),this.url=this.url.substring(0,e)+"?"+r.join("&")}}},i.prototype._appendQueryString=function(){console.trace("Unsupported")},i.prototype._timeoutError=function(t,e,r){if(!this._aborted){var i=new Error(t+e+"ms exceeded");i.timeout=e,i.code="ECONNABORTED",i.errno=r,this.timedout=!0,this.abort(),this.callback(i)}},i.prototype._setTimeouts=function(){var t=this;this._timeout&&!this._timer&&(this._timer=setTimeout(function(){t._timeoutError("Timeout of ",t._timeout,"ETIME")},this._timeout)),this._responseTimeout&&!this._responseTimeoutTimer&&(this._responseTimeoutTimer=setTimeout(function(){t._timeoutError("Response timeout of ",t._responseTimeout,"ETIMEDOUT")},this._responseTimeout))}},168:function(t,e,r){"use strict";function i(t){if(t)return n(t)}function n(t){for(var e in i.prototype)t[e]=i.prototype[e];return t}var o=r(169);t.exports=i,i.prototype.get=function(t){return this.header[t.toLowerCase()]},i.prototype._setHeaderProperties=function(t){var e=t["content-type"]||"";this.type=o.type(e);var r=o.params(e);for(var i in r)this[i]=r[i];this.links={};try{t.link&&(this.links=o.parseLinks(t.link))}catch(t){}},i.prototype._setStatusProperties=function(t){var e=t/100|0;this.status=this.statusCode=t,this.statusType=e,this.info=1==e,this.ok=2==e,this.redirect=3==e,this.clientError=4==e,this.serverError=5==e,this.error=(4==e||5==e)&&this.toError(),this.accepted=202==t,this.noContent=204==t,this.badRequest=400==t,this.unauthorized=401==t,this.notAcceptable=406==t,this.forbidden=403==t,this.notFound=404==t}},169:function(t,e,r){"use strict";e.type=function(t){return t.split(/ *; */).shift()},e.params=function(t){return t.split(/ *; */).reduce(function(t,e){var r=e.split(/ *= */),i=r.shift(),n=r.shift();return i&&n&&(t[i]=n),t},{})},e.parseLinks=function(t){return t.split(/ *, */).reduce(function(t,e){var r=e.split(/ *; */),i=r[0].slice(1,-1);return t[r[1].split(/ *= */)[1].slice(1,-1)]=i,t},{})},e.cleanHeader=function(t,e){return delete t["content-type"],delete t["content-length"],delete t["transfer-encoding"],delete t.host,e&&(delete t.authorization,delete t.cookie),t}},50:function(t,e,r){function i(){}function n(t){if(!y(t))return t;var e=[];for(var r in t)o(e,r,t[r]);return e.join("&")}function o(t,e,r){if(null!=r)if(Array.isArray(r))r.forEach(function(r){o(t,e,r)});else if(y(r))for(var i in r)o(t,e+"["+i+"]",r[i]);else t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));else null===r&&t.push(encodeURIComponent(e))}function s(t){for(var e,r,i={},n=t.split("&"),o=0,s=n.length;o<s;++o)e=n[o],r=e.indexOf("="),-1==r?i[decodeURIComponent(e)]="":i[decodeURIComponent(e.slice(0,r))]=decodeURIComponent(e.slice(r+1));return i}function a(t){for(var e,r,i,n,o=t.split(/\r?\n/),s={},a=0,u=o.length;a<u;++a)r=o[a],-1!==(e=r.indexOf(":"))&&(i=r.slice(0,e).toLowerCase(),n=w(r.slice(e+1)),s[i]=n);return s}function u(t){return/[\/+]json($|[^-\w])/.test(t)}function h(t){this.req=t,this.xhr=this.req.xhr,this.text="HEAD"!=this.req.method&&(""===this.xhr.responseType||"text"===this.xhr.responseType)||void 0===this.xhr.responseType?this.xhr.responseText:null,this.statusText=this.req.xhr.statusText;var e=this.xhr.status;1223===e&&(e=204),this._setStatusProperties(e),this.header=this.headers=a(this.xhr.getAllResponseHeaders()),this.header["content-type"]=this.xhr.getResponseHeader("content-type"),this._setHeaderProperties(this.header),null===this.text&&t._responseType?this.body=this.xhr.response:this.body="HEAD"!=this.req.method?this._parseBody(this.text?this.text:this.xhr.response):null}function c(t,e){var r=this;this._query=this._query||[],this.method=t,this.url=e,this.header={},this._header={},this.on("end",function(){var t=null,e=null;try{e=new h(r)}catch(e){return t=new Error("Parser is unable to parse the response"),t.parse=!0,t.original=e,r.xhr?(t.rawResponse=void 0===r.xhr.responseType?r.xhr.responseText:r.xhr.response,t.status=r.xhr.status?r.xhr.status:null,t.statusCode=t.status):(t.rawResponse=null,t.status=null),r.callback(t)}r.emit("response",e);var i;try{r._isResponseOK(e)||(i=new Error(e.statusText||"Unsuccessful HTTP response"))}catch(t){i=t}i?(i.original=t,i.response=e,i.status=e.status,r.callback(i,e)):r.callback(null,e)})}function l(t,e,r){var i=b("DELETE",t);return"function"==typeof e&&(r=e,e=null),e&&i.send(e),r&&i.end(r),i}var p;"undefined"!=typeof window?p=window:"undefined"!=typeof self?p=self:(console.warn("Using browser-only version of superagent in non-browser environment"),p=this);var f=r(150),d=r(167),y=r(82),m=r(168),_=r(166),b=e=t.exports=function(t,r){return"function"==typeof r?new e.Request("GET",t).end(r):1==arguments.length?new e.Request("GET",t):new e.Request(t,r)};e.Request=c,b.getXHR=function(){if(!(!p.XMLHttpRequest||p.location&&"file:"==p.location.protocol&&p.ActiveXObject))return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(t){}throw Error("Browser-only version of superagent could not find XHR")};var w="".trim?function(t){return t.trim()}:function(t){return t.replace(/(^\s*|\s*$)/g,"")};b.serializeObject=n,b.parseString=s,b.types={html:"text/html",json:"application/json",xml:"text/xml",urlencoded:"application/x-www-form-urlencoded",form:"application/x-www-form-urlencoded","form-data":"application/x-www-form-urlencoded"},b.serialize={"application/x-www-form-urlencoded":n,"application/json":JSON.stringify},b.parse={"application/x-www-form-urlencoded":s,"application/json":JSON.parse},m(h.prototype),h.prototype._parseBody=function(t){var e=b.parse[this.type];return this.req._parser?this.req._parser(this,t):(!e&&u(this.type)&&(e=b.parse["application/json"]),e&&t&&(t.length||t instanceof Object)?e(t):null)},h.prototype.toError=function(){var t=this.req,e=t.method,r=t.url,i="cannot "+e+" "+r+" ("+this.status+")",n=new Error(i);return n.status=this.status,n.method=e,n.url=r,n},b.Response=h,f(c.prototype),d(c.prototype),c.prototype.type=function(t){return this.set("Content-Type",b.types[t]||t),this},c.prototype.accept=function(t){return this.set("Accept",b.types[t]||t),this},c.prototype.auth=function(t,e,r){1===arguments.length&&(e=""),"object"==typeof e&&null!==e&&(r=e,e=""),r||(r={type:"function"==typeof btoa?"basic":"auto"});var i=function(t){if("function"==typeof btoa)return btoa(t);throw new Error("Cannot use basic auth, btoa is not a function")};return this._auth(t,e,r,i)},c.prototype.query=function(t){return"string"!=typeof t&&(t=n(t)),t&&this._query.push(t),this},c.prototype.attach=function(t,e,r){if(e){if(this._data)throw Error("superagent can't mix .send() and .attach()");this._getFormData().append(t,e,r||e.name)}return this},c.prototype._getFormData=function(){return this._formData||(this._formData=new p.FormData),this._formData},c.prototype.callback=function(t,e){if(this._shouldRetry(t,e))return this._retry();var r=this._callback;this.clearTimeout(),t&&(this._maxRetries&&(t.retries=this._retries-1),this.emit("error",t)),r(t,e)},c.prototype.crossDomainError=function(){var t=new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");t.crossDomain=!0,t.status=this.status,t.method=this.method,t.url=this.url,this.callback(t)},c.prototype.buffer=c.prototype.ca=c.prototype.agent=function(){return console.warn("This is not supported in browser version of superagent"),this},c.prototype.pipe=c.prototype.write=function(){throw Error("Streaming is not supported in browser version of superagent")},c.prototype._isHost=function(t){return t&&"object"==typeof t&&!Array.isArray(t)&&"[object Object]"!==Object.prototype.toString.call(t)},c.prototype.end=function(t){return this._endCalled&&console.warn("Warning: .end() was called twice. This is not supported in superagent"),this._endCalled=!0,this._callback=t||i,this._finalizeQueryString(),this._end()},c.prototype._end=function(){var t=this,e=this.xhr=b.getXHR(),r=this._formData||this._data;this._setTimeouts(),e.onreadystatechange=function(){var r=e.readyState;if(r>=2&&t._responseTimeoutTimer&&clearTimeout(t._responseTimeoutTimer),4==r){var i;try{i=e.status}catch(t){i=0}if(!i){if(t.timedout||t._aborted)return;return t.crossDomainError()}t.emit("end")}};var i=function(e,r){r.total>0&&(r.percent=r.loaded/r.total*100),r.direction=e,t.emit("progress",r)};if(this.hasListeners("progress"))try{e.onprogress=i.bind(null,"download"),e.upload&&(e.upload.onprogress=i.bind(null,"upload"))}catch(t){}try{this.username&&this.password?e.open(this.method,this.url,!0,this.username,this.password):e.open(this.method,this.url,!0)}catch(t){return this.callback(t)}if(this._withCredentials&&(e.withCredentials=!0),!this._formData&&"GET"!=this.method&&"HEAD"!=this.method&&"string"!=typeof r&&!this._isHost(r)){var n=this._header["content-type"],o=this._serializer||b.serialize[n?n.split(";")[0]:""];!o&&u(n)&&(o=b.serialize["application/json"]),o&&(r=o(r))}for(var s in this.header)null!=this.header[s]&&this.header.hasOwnProperty(s)&&e.setRequestHeader(s,this.header[s]);return this._responseType&&(e.responseType=this._responseType),this.emit("request",this),e.send(void 0!==r?r:null),this},b.agent=function(){return new _},["GET","POST","OPTIONS","PATCH","PUT","DELETE"].forEach(function(t){_.prototype[t.toLowerCase()]=function(e,r){var i=new b.Request(t,e);return this._setDefaults(i),r&&i.end(r),i}}),_.prototype.del=_.prototype.delete,b.get=function(t,e,r){var i=b("GET",t);return"function"==typeof e&&(r=e,e=null),e&&i.query(e),r&&i.end(r),i},b.head=function(t,e,r){var i=b("HEAD",t);return"function"==typeof e&&(r=e,e=null),e&&i.query(e),r&&i.end(r),i},b.options=function(t,e,r){var i=b("OPTIONS",t);return"function"==typeof e&&(r=e,e=null),e&&i.send(e),r&&i.end(r),i},b.del=l,b.delete=l,b.patch=function(t,e,r){var i=b("PATCH",t);return"function"==typeof e&&(r=e,e=null),e&&i.send(e),r&&i.end(r),i},b.post=function(t,e,r){var i=b("POST",t);return"function"==typeof e&&(r=e,e=null),e&&i.send(e),r&&i.end(r),i},b.put=function(t,e,r){var i=b("PUT",t);return"function"==typeof e&&(r=e,e=null),e&&i.send(e),r&&i.end(r),i}},604:function(t,e,r){"use strict";var i=r(50),n=function(t){return t&&t.__esModule?t:{default:t}}(i);!function(t){var e=function(){gapi.load("auth2",function(){var t=gapi.auth2.init({client_id:"954394665198-fnkvnsjg2ad94rdakagv9qfsp45r8j9j.apps.googleusercontent.com"});t.then(function(){},function(t){if("idpiframe_initialization_failed"===t.error){var e=document.getElementById("google-social-login");e.className+=" disabled",e.disabled=!0,e.setAttribute("data-balloon","Sorry, Google does not allow sign-in without 3rd party cookies enabled. Please ensure that you are not blocking 3rd party cookies."),e.setAttribute("data-balloon-pos","up")}}),t.attachClickHandler(document.getElementById("google-social-login"),{},function(t){var e=t.getAuthResponse().id_token;n.default.post(window.location.origin+"/users/").type("form").send({google_id_token:e}).then(function(t){document.location.assign(window.location.origin)})})})},r=function(){t(".facebook").on("click",function(){FB.login(function(t){t.authResponse&&n.default.post(window.location.origin+"/users/").type("form").send({facebook_access_token:t.authResponse.accessToken}).then(function(t){document.location.assign(window.location.origin)})},{scope:"email"})})},i=function(){t("input").on("keypress",function(){var e=["#name","#email","#username","#password"],r=e.reduce(function(e,r){return e&&!!t(r).val()},!0),i=document.getElementById("username");i.validity.patternMismatch?i.setCustomValidity("Usernames can only contain letters and _"):i.setCustomValidity(""),r?(t(".submit-button").removeClass("disabled"),t(".submit-button").prop("disabled",!1),t(".submit-button").val("Submit")):(t(".submit-button").addClass("disabled"),t(".submit-button").prop("disabled",!0),t(".submit-button").val("Fill in the fields to sign up!"))})};t(document).ready(function(){e(),r(),i(),t("#email-signup-form").on("submit",function(e){n.default.post(window.location.origin+"/users/").type("form").send(t(this).serialize()).then(function(t){document.location.assign(window.location.origin)}).catch(function(e){400==e.status&&e.response.text.includes("Email already taken")&&(t("#email")[0].setCustomValidity("Email has already been taken. Please sign in instead."),t("#email")[0].reportValidity())}),e.preventDefault()}),t("#email-login-form").on("submit",function(e){n.default.post(window.location.origin+"/login/").type("form").send(t(this).serialize()).then(function(t){document.location.assign(window.location.origin)}).catch(function(e){400==e.status&&(t("#email")[0].setCustomValidity("This email and password combination does not match any accounts!"),t("#email")[0].reportValidity())}),e.preventDefault()})})}($)},82:function(t,e,r){"use strict";function i(t){return null!==t&&"object"==typeof t}t.exports=i}});