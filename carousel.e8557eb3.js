parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"tVIU":[function(require,module,exports) {
$(document).ready(function(){$("#slider").owlCarousel({loop:!0,margin:10,nav:!0,responsive:{0:{items:1},768:{items:2},1295:{items:4}},navText:['<svg class="arrow-left"width="60" height="50" viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.6464 24.6464C14.4512 24.8417 14.4512 25.1583 14.6464 25.3536L17.8284 28.5355C18.0237 28.7308 18.3403 28.7308 18.5355 28.5355C18.7308 28.3403 18.7308 28.0237 18.5355 27.8284L15.7071 25L18.5355 22.1716C18.7308 21.9763 18.7308 21.6597 18.5355 21.4645C18.3403 21.2692 18.0237 21.2692 17.8284 21.4645L14.6464 24.6464ZM45 24.5L15 24.5L15 25.5L45 25.5L45 24.5Z" fill="white"/><rect x="59.5" y="49.5" width="59" height="49" transform="rotate(180 59.5 49.5)" stroke="white"/></svg>','<svg class="arrow-right" width="60" height="50" viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M45.3536 25.3536C45.5488 25.1583 45.5488 24.8417 45.3536 24.6464L42.1716 21.4645C41.9763 21.2692 41.6597 21.2692 41.4645 21.4645C41.2692 21.6597 41.2692 21.9763 41.4645 22.1716L44.2929 25L41.4645 27.8284C41.2692 28.0237 41.2692 28.3403 41.4645 28.5355C41.6597 28.7308 41.9763 28.7308 42.1716 28.5355L45.3536 25.3536ZM15 25.5L45 25.5V24.5L15 24.5V25.5Z" fill="white"/><rect x="0.5" y="0.5" width="59" height="49" stroke="white"/></svg>']})});
},{}]},{},["tVIU"], null)
//# sourceMappingURL=/clinic/carousel.e8557eb3.js.map