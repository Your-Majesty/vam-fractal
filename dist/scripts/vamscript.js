!function(){function e(t,r,n){function o(s,a){if(!r[s]){if(!t[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(i)return i(s,!0);var l=new Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l}var u=r[s]={exports:{}};t[s][0].call(u.exports,function(e){return o(t[s][1][e]||e)},u,u.exports,e,t,r,n)}return r[s].exports}for(var i="function"==typeof require&&require,s=0;s<n.length;s++)o(n[s]);return o}return e}()({1:[function(e,t,r){"use strict";function n(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.exports=function(e,t,r,i){t=t||"&",r=r||"=";var s={};if("string"!=typeof e||0===e.length)return s;e=e.split(t);var a=1e3;i&&"number"==typeof i.maxKeys&&(a=i.maxKeys);var c=e.length;a>0&&c>a&&(c=a);for(var l=0;l<c;++l){var u,d,f,v,m=e[l].replace(/\+/g,"%20"),g=m.indexOf(r);g>=0?(u=m.substr(0,g),d=m.substr(g+1)):(u=m,d=""),f=decodeURIComponent(u),v=decodeURIComponent(d),n(s,f)?o(s[f])?s[f].push(v):s[f]=[s[f],v]:s[f]=v}return s};var o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},{}],2:[function(e,t,r){"use strict";function n(e,t){if(e.map)return e.map(t);for(var r=[],n=0;n<e.length;n++)r.push(t(e[n],n));return r}var o=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};t.exports=function(e,t,r,a){return t=t||"&",r=r||"=",null===e&&(e=void 0),"object"==typeof e?n(s(e),function(s){var a=encodeURIComponent(o(s))+r;return i(e[s])?n(e[s],function(e){return a+encodeURIComponent(o(e))}).join(t):a+encodeURIComponent(o(e[s]))}).join(t):a?encodeURIComponent(o(a))+r+encodeURIComponent(o(e)):""};var i=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},s=Object.keys||function(e){var t=[];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.push(r);return t}},{}],3:[function(e,t,r){"use strict";r.decode=r.parse=e("./decode"),r.encode=r.stringify=e("./encode")},{"./decode":1,"./encode":2}],4:[function(e,t,r){!function(e,r){"function"==typeof define&&define.amd?define([],function(){return e.svg4everybody=r()}):"object"==typeof t&&t.exports?t.exports=r():e.svg4everybody=r()}(this,function(){function e(e,t,r){if(r){var n=document.createDocumentFragment(),o=!t.hasAttribute("viewBox")&&r.getAttribute("viewBox");o&&t.setAttribute("viewBox",o);for(var i=r.cloneNode(!0);i.childNodes.length;)n.appendChild(i.firstChild);e.appendChild(n)}}function t(t){t.onreadystatechange=function(){if(4===t.readyState){var r=t._cachedDocument;r||(r=t._cachedDocument=document.implementation.createHTMLDocument(""),r.body.innerHTML=t.responseText,t._cachedTarget={}),t._embeds.splice(0).map(function(n){var o=t._cachedTarget[n.id];o||(o=t._cachedTarget[n.id]=r.getElementById(n.id)),e(n.parent,n.svg,o)})}},t.onreadystatechange()}function r(r){function o(){for(var r=0;r<f.length;){var a=f[r],c=a.parentNode,l=n(c),m=a.getAttribute("xlink:href")||a.getAttribute("href");if(!m&&s.attributeName&&(m=a.getAttribute(s.attributeName)),l&&m){if(i)if(!s.validate||s.validate(m,l,a)){c.removeChild(a);var g=m.split("#"),p=g.shift(),h=g.join("#");if(p.length){var b=u[p];b||(b=u[p]=new XMLHttpRequest,b.open("GET",p),b.send(),b._embeds=[]),b._embeds.push({parent:c,svg:l,id:h}),t(b)}else e(c,l,document.getElementById(h))}else++r,++v}else++r}(!f.length||f.length-v>0)&&d(o,67)}var i,s=Object(r),a=/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,c=/\bEdge\/.(\d+)\b/,l=window.top!==window.self;i="polyfill"in s?s.polyfill:a.test(navigator.userAgent)||(navigator.userAgent.match(/\bEdge\/12\.(\d+)\b/)||[])[1]<10547||(navigator.userAgent.match(/\bAppleWebKit\/(\d+)\b/)||[])[1]<537||c.test(navigator.userAgent)&&l;var u={},d=window.requestAnimationFrame||setTimeout,f=document.getElementsByTagName("use"),v=0;i&&o()}function n(e){for(var t=e;"svg"!==t.nodeName.toLowerCase()&&(t=t.parentNode););return t}return r})},{}],5:[function(e,t,r){"use strict";var n=e("svg4everybody"),o=function(e){return e&&e.__esModule?e:{default:e}}(n);e("../../components/services/object_fit_polyfill/_poly-object-fit.js"),e("../../components/groups/block-grid/_grid-reveal-more.js"),e("../../components/blocks/toggle-nav/_toggle-nav.js"),e("../../components/blocks/video-trailer/_video-trailer.js"),e("../../components/blocks/search-result/_search-result.js"),e("../../components/blocks/search-form/_search-form.js"),e("../../components/blocks/cookie-banner/_cookie-banner.js"),(0,o.default)()},{"../../components/blocks/cookie-banner/_cookie-banner.js":6,"../../components/blocks/search-form/_search-form.js":7,"../../components/blocks/search-result/_search-result.js":8,"../../components/blocks/toggle-nav/_toggle-nav.js":9,"../../components/blocks/video-trailer/_video-trailer.js":10,"../../components/groups/block-grid/_grid-reveal-more.js":11,"../../components/services/object_fit_polyfill/_poly-object-fit.js":12,svg4everybody:4}],6:[function(e,t,r){"use strict";var n=document.querySelector(".js-cookie-banner");if(n){document.querySelector(".js-cookie-banner-close").onclick=function(e){e.preventDefault(),n.classList.add("hidden")}}},{}],7:[function(e,t,r){"use strict";function n(){a.innerHTML=s.value.replace(/\s/g,"&nbsp;")}function o(){l.classList.add("b-search-form__clear--hidden"),s.value.length?c.classList.remove("b-search-form__submit--hidden"):c.classList.add("b-search-form__submit--hidden")}function i(){l.classList.add("b-search-form__clear--hidden"),s.value="",n()}var s=document.querySelector(".js-search-input"),a=document.querySelector(".js-search-underscore"),c=document.querySelector(".js-search-submit"),l=document.querySelector(".js-search-clear");s&&(s.focus(),function(){c.classList.add("b-search-form__submit--hidden"),s.value.length&&l.classList.remove("b-search-form__clear--hidden")}(),n(),s.addEventListener("input",n),s.addEventListener("input",o),l.addEventListener("click",i))},{}],8:[function(e,t,r){"use strict";function n(e){if(e.innerHTML=e.textFull,e.scrollHeight-e.clientHeight>10){var t=e.textFull.indexOf("</em>"),r=e.clientHeight/e.scrollHeight*e.textFull.length,n=t-r,o=0,i=e.textFull.lastIndexOf(" ",r),s="";n>0&&(s="&hellip;",o=e.textFull.indexOf(" ",n+20)+1,i=e.textFull.lastIndexOf(" ",r+n+20)),e.innerHTML=""+s+e.textFull.substring(o,i)+"&hellip;"}}var o=document.querySelectorAll(".js-search-result-text");o.length&&Array.from(o,function(e){return e.textFull=e.innerHTML,n(e),window.addEventListener("resize",n.bind(void 0,e),!1),!0})},{}],9:[function(e,t,r){"use strict";var n=e("querystring"),o=function(e){return e&&e.__esModule?e:{default:e}}(n),i=document.querySelector(".js-toggle-nav");if(i){var s=i.querySelectorAll(".js-toggle-nav-btn"),a=o.default.parse(window.location.search.replace("?","")),c=a.type;Array.from(s,function(e){var t=document.querySelectorAll(e.dataset.toggeesSelector);return e.addEventListener("click",function(r){r.preventDefault();var n=e.dataset.toggleType;i.scrollLeft=e.offsetLeft-(i.getBoundingClientRect().width-e.getBoundingClientRect().width)/2,e.preventHistoryPush||window.history.pushState({toggleNavType:n},"","?type="+n),e.preventHistoryPush=!1,Array.from(t,function(e){return e.classList.add("s-visually-hidden"),e.dataset.toggleType===n&&e.classList.remove("s-visually-hidden"),!0}),Array.from(s,function(e){return e.classList.remove("s-themed--border-color"),!0}),e.classList.add("s-themed--border-color")},!1),e.dataset.toggleType===c&&(e.preventHistoryPush=!0,setTimeout(function(){e.click()},50)),!0}),window.addEventListener("popstate",function(e){return Array.from(document.querySelectorAll("s-visually-hidden"),function(e){return e.classList.remove("s-visually-hidden"),!0}),e.state&&e.state.toggleNavType&&Array.from(s,function(t){return e.state.toggleNavType===t.dataset.toggleType&&(t.preventHistoryPush=!0,t.click()),!0}),!0},!1),c||void 0===i.dataset.toggleTypeDefault||document.querySelector("[data-toggle-type="+i.dataset.toggleTypeDefault+"]").click()}},{querystring:3}],10:[function(e,t,r){"use strict";var n=document.querySelectorAll(".js-video-thumbnail");Array.from(n,function(e){return e.addEventListener("click",function(t){t.preventDefault();var r=document.createElement("div"),n=document.createElement("div");r.className="b-video-thumbnail__popup",r.innerHTML='<iframe class="b-video-thumbnail__popup-iframe" width="90%" height="90%" src="'+e.href+'"&playsinline=1" frameborder="0" allowfullscreen></iframe>',r.addEventListener("click",function(){r.remove()}),n.className="b-video-thumbnail__popup-close",n.innerHTML=e.querySelector("svg").outerHTML.replace(/\.svg#[^'"]+/i,".svg#close"),r.appendChild(n),document.body.appendChild(r)}),!0})},{}],11:[function(e,t,r){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var o=document.querySelectorAll(".js-grid-reveal-more");o.length&&(Array.from(o,function(e){var t=e.dataset.revealMoreCounter||4;if(t<e.childElementCount){var r=e.dataset.iconUrl,o=[].concat(n(e.children)),i=e.dataset.revealMoreTheme||"dark",s=e.dataset.revealMoreTracking||"",a=e;e.dataset.revealMorePutAfter&&(a=document.querySelector(e.dataset.revealMorePutAfter)),o.slice(t).forEach(function(e){return e.classList.add("s-visually-hidden")});var c=document.createElement("footer");c.setAttribute("class","b-block-grid__footer b-block-grid__footer--"+i),c.innerHTML='\n        <a href="#" data-tracking-showmorebutton="'+s+'" class="js-reveal-more-btn">\n          <div class="b-icon-badge b-icon-badge--small b-icon-badge--'+i+'">\n            <div class="b-icon-badge__icon s-themed s-themed--background-color s-themed--background-color--hover">\n              <svg role="img">\n                <use xlink:href="'+r+'#plus"></use>\n              </svg>\n            </div>\n            <small class="b-icon-badge__label">\n              Show more\n            </small>\n          </div>\n        </a>\n      ',a.parentNode.insertBefore(c,a.nextSibling),e.revealMoreClicks=0,c.addEventListener("click",function(r){r.preventDefault(),e.revealMoreClicks+=1;var n=o.filter(function(e){return e.classList.contains("s-visually-hidden")});n.slice(0,t).forEach(function(e){return e.classList.remove("s-visually-hidden")}),n.length<=t&&c.remove()},!1)}return!0}),window.addEventListener("beforeunload",function(){var e=[];Array.from(o,function(t){return e.push(t.revealMoreClicks),!0}),history.replaceState({revealMoreClicks:e},"revealMoreClicks")},!1),window.addEventListener("load",function(){if(history.state&&history.state.revealMoreClicks)for(var e=document.querySelectorAll(".js-reveal-more-btn"),t=0;t<history.state.revealMoreClicks.length;t+=1)for(var r=0;r<history.state.revealMoreClicks[t];)e[t].click(),r+=1},!1))},{}],12:[function(e,t,r){"use strict";function n(){var e=document.querySelectorAll(".js-object-fit-container");[].forEach.call(e,function(e){if(e.getElementsByTagName("img")[0]){var t=e.getElementsByTagName("img")[0].src;t&&(e.classList.add("js-object-fit-container--fallback"),e.style.backgroundImage="url('"+t+"')")}})}"undefined"!=typeof Modernizr&&Modernizr.on("objectfit",function(e){e||n()})},{}]},{},[5]);
//# sourceMappingURL=vamscript.js.map
