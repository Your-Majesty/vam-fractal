!function e(t,n,r){function o(a,c){if(!n[a]){if(!t[a]){var s="function"==typeof require&&require;if(!c&&s)return s(a,!0);if(i)return i(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[a]={exports:{}};t[a][0].call(u.exports,function(e){var n=t[a][1][e];return o(n||e)},u,u.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t,n){"use strict";function r(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.exports=function(e,t,n,i){t=t||"&",n=n||"=";var a={};if("string"!=typeof e||0===e.length)return a;e=e.split(t);var c=1e3;i&&"number"==typeof i.maxKeys&&(c=i.maxKeys);var s=e.length;c>0&&s>c&&(s=c);for(var l=0;l<s;++l){var u,d,f,g,v=e[l].replace(/\+/g,"%20"),p=v.indexOf(n);p>=0?(u=v.substr(0,p),d=v.substr(p+1)):(u=v,d=""),f=decodeURIComponent(u),g=decodeURIComponent(d),r(a,f)?o(a[f])?a[f].push(g):a[f]=[a[f],g]:a[f]=g}return a};var o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},{}],2:[function(e,t,n){"use strict";function r(e,t){if(e.map)return e.map(t);for(var n=[],r=0;r<e.length;r++)n.push(t(e[r],r));return n}var o=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};t.exports=function(e,t,n,c){return t=t||"&",n=n||"=",null===e&&(e=void 0),"object"==typeof e?r(a(e),function(a){var c=encodeURIComponent(o(a))+n;return i(e[a])?r(e[a],function(e){return c+encodeURIComponent(o(e))}).join(t):c+encodeURIComponent(o(e[a]))}).join(t):c?encodeURIComponent(o(c))+n+encodeURIComponent(o(e)):""};var i=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},a=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}},{}],3:[function(e,t,n){"use strict";n.decode=n.parse=e("./decode"),n.encode=n.stringify=e("./encode")},{"./decode":1,"./encode":2}],4:[function(e,t,n){!function(e,n){"function"==typeof define&&define.amd?define([],function(){return e.svg4everybody=n()}):"object"==typeof t&&t.exports?t.exports=n():e.svg4everybody=n()}(this,function(){function e(e,t,n){if(n){var r=document.createDocumentFragment(),o=!t.hasAttribute("viewBox")&&n.getAttribute("viewBox");o&&t.setAttribute("viewBox",o);for(var i=n.cloneNode(!0);i.childNodes.length;)r.appendChild(i.firstChild);e.appendChild(r)}}function t(t){t.onreadystatechange=function(){if(4===t.readyState){var n=t._cachedDocument;n||(n=t._cachedDocument=document.implementation.createHTMLDocument(""),n.body.innerHTML=t.responseText,t._cachedTarget={}),t._embeds.splice(0).map(function(r){var o=t._cachedTarget[r.id];o||(o=t._cachedTarget[r.id]=n.getElementById(r.id)),e(r.parent,r.svg,o)})}},t.onreadystatechange()}function n(n){function o(){for(var n=0;n<f.length;){var c=f[n],s=c.parentNode,l=r(s);if(l){var v=c.getAttribute("xlink:href")||c.getAttribute("href");if(!v&&a.attributeName&&(v=c.getAttribute(a.attributeName)),i)if(!a.validate||a.validate(v,l,c)){s.removeChild(c);var p=v.split("#"),m=p.shift(),b=p.join("#");if(m.length){var y=u[m];y||(y=u[m]=new XMLHttpRequest,y.open("GET",m),y.send(),y._embeds=[]),y._embeds.push({parent:s,svg:l,id:b}),t(y)}else e(s,l,document.getElementById(b))}else++n,++g}else++n}(!f.length||f.length-g>0)&&d(o,67)}var i,a=Object(n),c=/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,s=/\bEdge\/.(\d+)\b/,l=window.top!==window.self;i="polyfill"in a?a.polyfill:c.test(navigator.userAgent)||(navigator.userAgent.match(/\bEdge\/12\.(\d+)\b/)||[])[1]<10547||(navigator.userAgent.match(/\bAppleWebKit\/(\d+)\b/)||[])[1]<537||s.test(navigator.userAgent)&&l;var u={},d=window.requestAnimationFrame||setTimeout,f=document.getElementsByTagName("use"),g=0;i&&o()}function r(e){for(var t=e;"svg"!==t.nodeName.toLowerCase()&&(t=t.parentNode););return t}return n})},{}],5:[function(e,t,n){"use strict";var r=e("svg4everybody"),o=function(e){return e&&e.__esModule?e:{default:e}}(r);e("../../components/services/object_fit_polyfill/_poly-object-fit.js"),e("../../components/groups/block-grid/_grid-reveal-more.js"),e("../../components/blocks/toggle-nav/_toggle-nav.js"),(0,o.default)()},{"../../components/blocks/toggle-nav/_toggle-nav.js":6,"../../components/groups/block-grid/_grid-reveal-more.js":7,"../../components/services/object_fit_polyfill/_poly-object-fit.js":8,svg4everybody:4}],6:[function(e,t,n){"use strict";var r=e("querystring"),o=function(e){return e&&e.__esModule?e:{default:e}}(r),i=document.querySelector(".js-toggle-nav");if(i){var a=i.querySelectorAll(".js-toggle-nav-btn"),c=o.default.parse(window.location.search.replace("?","")),s=c.toggleType;Array.from(a,function(e){var t=document.querySelectorAll(e.dataset.toggeesSelector);return e.addEventListener("click",function(n){n.preventDefault();var r=e.dataset.toggleType;i.scrollLeft=e.offsetLeft-(i.getBoundingClientRect().width-e.getBoundingClientRect().width)/2,e.preventHistoryPush||window.history.pushState({toggleNavType:r},"","?toggleType="+r),e.preventHistoryPush=!1,Array.from(t,function(e){return e.classList.add("b-toggle-nav-target--hidden"),e.dataset.toggleType===r&&e.classList.remove("b-toggle-nav-target--hidden"),!0}),Array.from(a,function(e){return e.classList.remove("s-themed--border-color"),!0}),e.classList.add("s-themed--border-color")},!1),e.dataset.toggleType===s&&(e.preventHistoryPush=!0,setTimeout(function(){e.click()},50)),!0}),window.addEventListener("popstate",function(e){return Array.from(document.querySelectorAll("b-toggle-nav-target--hidden"),function(e){return e.classList.remove("b-toggle-nav-target--hidden"),!0}),e.state&&e.state.toggleNavType&&Array.from(a,function(t){return e.state.toggleNavType===t.dataset.toggleType&&(t.preventHistoryPush=!0,t.click()),!0}),!0},!1),s||void 0===i.dataset.toggleTypeDefault||document.querySelector("[data-toggle-type="+i.dataset.toggleTypeDefault+"]").click()}},{querystring:3}],7:[function(e,t,n){"use strict";var r=document.querySelectorAll(".js-grid-reveal-more");if(r)for(var o=0;o<r.length;o+=1)!function(e){var t=r[e],n=t.dataset.revealMoreCounter||4;if(n<t.childElementCount){var o=t.dataset.iconUrl,i=t.children,a=Object.keys(i).map(function(e){return i[e]}),c=t.dataset.revealMoreTheme||"dark";a.slice(n).forEach(function(e){return e.classList.add("b-block-grid__item--hidden")});var s=document.createElement("footer");s.setAttribute("class","b-block-grid__footer b-block-grid__footer--"+c),s.innerHTML='\n        <a href="#">\n          <div class="b-icon-badge b-icon-badge--small b-icon-badge--'+c+'">\n            <div class="b-icon-badge__icon s-themed s-themed--background-color s-themed--background-color--hover">\n              <svg role="img">\n                <use xlink:href="'+o+'#plus"></use>\n              </svg>\n            </div>\n            <small class="b-icon-badge__label">\n              Show more\n            </small>\n          </div>\n        </a>\n      ',t.parentNode.insertBefore(s,t.nextSibling),s.addEventListener("click",function(e){e.preventDefault();var t=a.filter(function(e){return e.classList.contains("b-block-grid__item--hidden")});t.slice(0,n).forEach(function(e){return e.classList.remove("b-block-grid__item--hidden")}),t.length<=n&&s.remove()},!1)}}(o)},{}],8:[function(e,t,n){"use strict";function r(){var e=document.querySelectorAll(".js-object-fit-container");[].forEach.call(e,function(e){if(e.getElementsByTagName("img")[0]){var t=e.getElementsByTagName("img")[0].src;t&&(e.classList.add("js-object-fit-container--fallback"),e.style.backgroundImage="url('"+t+"')")}})}"undefined"!=typeof Modernizr&&Modernizr.on("objectfit",function(e){e||r()})},{}]},{},[5]);
//# sourceMappingURL=vamscript.js.map
