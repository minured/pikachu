parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"mDEm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n='.draw * {\n    margin: 0;\n    padding:0;\n    box-sizing: border-box;\n}\n.draw *::before, *::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n.draw {\n    background: rgb(255, 230, 0);\n}\n.nose {\n    position: relative;\n    width: 0px;\n    height: 0px;\n    transform: translateX(-50%);\n    z-index: 5;\n    left: 50%;\n    top: 110px;  \n}\n.nose:hover {\n    transform-origin: center bottom;\n    animation: wave 250ms linear infinite; \n}\n.nose .yuan {\n    border:1px solid black;\n    background: #000;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    bottom: 10px;\n    left: 50%;\n    margin-left: -10px;\n    border-top-left-radius: 20px 10px; \n    border-top-right-radius: 20px 10px;\n}\n.nose .san {\n    border: 10px solid black;\n    border-color: black transparent transparent;\n    border-bottom: none;\n    width: 0px;\n    height: 0px;\n    position: absolute;\n    left:50%;\n    margin-left: -10px;  \n    bottom: 0;\n    \n}\n@keyframes wave {\n    0% {\n        transform: rotate(0deg);\n    }\n    25% {\n        transform: rotate(5deg);\n    }\n    50% {\n        transform: rotate(0deg);\n    }\n    75% {\n        transform: rotate(-5deg);\n    }\n    100% {\n        transform: rotate(0deg);\n    }\n}\n.eye {\n    border: 3px solid black;\n    background: rgb(46, 46, 46);\n    width: 63px;\n    height: 63px;\n    position: absolute;\n    top: 50px;\n    left: 50%;\n    margin-left: -30px;\n    border-radius: 50%;\n}\n.eye::before {\n    content: "";\n    display: block;\n    border: 3px solid black;\n    width: 31px;\n    height: 31px;\n    border-radius: 50%;\n    background: white;\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    left: 3px;\n}\n.eye.left {\n    transform: translateX(-195%);\n\n}\n.eye.right {\n    transform: translateX(195%)\n}\n.face {\n    border: 3px solid black;\n    width: 88px;\n    height: 88px;\n    position: absolute;\n    top: 170px;\n    left: 50%;\n    margin-left: -45px;\n    border-radius: 50%;\n    background: rgb(255, 0, 0);\n}\n.face.left {\n    transform: translateX(190%);\n}\n.face.right {\n    transform: translateX(-190%);\n}\n.face img {\n    /* border: 1px solid black; */\n    position: absolute;\n    left: 50%;\n    top: 50%;\n}\n.face.right img {\n    transform: rotateY(180deg);\n    transform-origin: 0;\n}\n\n.mouth {\n    /* border: 1px solid black; */\n    width: 200px;\n    height: 190px;\n    position: absolute;\n    left: 50%;\n    margin-left: -100px;\n    top: 125px;\n}\n.mouth .up .lip {\n    border: 3px solid black;\n    background:rgb(255, 230, 0);\n    width: 100px;\n    height: 28px;\n    border-color: transparent transparent black transparent;\n    position: absolute;\n    z-index: 2;\n}\n.mouth .up .lip.left {\n  /* border-radius: 0 0 0 30px; */\n  border-bottom-left-radius: 50px 28px;\n  transform: rotate(-20deg);\n  left: -1px;\n\n}\n.mouth .up .lip.right {\n    border-bottom-right-radius: 50px 28px;\n    right: 0px;\n    transform: rotate(20deg);\n}\n\n/* 嘴唇遮罩 */\n.mouth .up .lip::before {\n    content: "";\n    display: block;\n    /* border: 1px solid red; */\n    background: rgb(255, 230, 0);\n    width: 5px;\n    height: 23px;\n    position: absolute;\n    top: -1px;\n}\n.mouth .up .lip.left::before {  \n    right: 0;\n    margin-right: -4px;\n}\n.mouth .up .lip.right::before {  \n    margin-left: -4px;\n}\n\n.mouth .down {\n    /* border: 1px solid green; */\n    width: 100%;\n    height: 160px;\n    position: relative;\n    overflow: hidden;\n    z-index: 1;\n    top: 8px;\n}\n.mouth .down .yuan1 {\n    border: 3px solid black;\n    background-color: rgb(155, 0, 10);\n    width: 100%;\n    height: 1300px;\n    position: absolute;\n    bottom: 0;\n    left:0;\n    border-radius: 100px/490px;\n    overflow: hidden;\n}\n.mouth .down .yuan1 .yuan2 {\n    /* border: 1px solid black; */\n    width: 150px;\n    height: 150px;\n    background: rgb(255, 72, 95);\n    position: absolute;\n    bottom: -25px;\n    border-radius: 50%;\n    left: 50%;\n    transform: translateX(-50%);  \n}\n',t=n;exports.default=t;
},{}],"OwFl":[function(require,module,exports) {
"use strict";function t(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function i(t,i){for(var s=0;s<i.length;s++){var e=i[s];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function s(t,s,e){return s&&i(t.prototype,s),e&&i(t,e),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(){function i(s,e,n){t(this,i),this.ui={codeShow:document.querySelector(s),draw:document.querySelector(e)},this.str=n,this.n=0,this.delay=20,this.interval_id=void 0,this.playing=!1,this.strHTML="",this.CSSLen=this.str.length,this.events={"#btnPause":"pause","#btnPlay":"play","#btnSlow":"slow","#btnNormal":"normal","#btnFast":"fast"}}return s(i,[{key:"init",value:function(){this.play(),this.bindEvents()}},{key:"bindEvents",value:function(){for(var t in this.events)if(this.events.hasOwnProperty(t)){var i=this.events[t];document.querySelector(t).onclick=this[i].bind(this)}}},{key:"writeStr",value:function(){parseInt(this.n)===this.str.length-1&&(console.log("播放完成, n: ".concat(this.n)),window.clearInterval(this.interval_id),this.playing=!1),"\n"===this.str[this.n]?this.strHTML+="<br>":" "===this.str[this.n]?this.strHTML+="&nbsp":this.strHTML+=this.str[this.n],this.ui.codeShow.innerHTML=this.strHTML,this.ui.draw.innerHTML=this.str.substr(0,this.n+1),this.ui.codeShow.scrollTop=this.ui.codeShow.scrollHeight,this.n+=1}},{key:"play",value:function(){var t=this;!1===this.playing?this.n<this.CSSLen?(this.interval_id=setInterval(function(){t.writeStr()},this.delay),this.playing=!0):(console.log(this.n),console.log("已播放完，再点一次重新开始播放"),this.strHTML="",this.ui.draw.innerHTML="",this.n=0):console.log("播放中, id: ".concat(this.interval_id))}},{key:"pause",value:function(){window.clearInterval(this.interval_id),this.playing=!1}},{key:"slow",value:function(){this.pause(),this.delay=50,this.play()}},{key:"normal",value:function(){this.pause(),this.delay=20,this.play()}},{key:"fast",value:function(){this.pause(),this.delay=0,this.play()}}]),i}(),n=e;exports.default=n;
},{}],"epB2":[function(require,module,exports) {
"use strict";var e=r(require("./pikachuCSS")),t=r(require("./CSSPlayer"));function r(e){return e&&e.__esModule?e:{default:e}}var a=new t.default(".codeShow",".drawStyle",e.default);a.init();var n=document.querySelectorAll(".draw")[0];function l(){document.querySelectorAll(".eye").forEach(function(e){var t=e.getBoundingClientRect().left+32,r=e.getBoundingClientRect().top+32,a=Math.atan2(event.pageX-t,event.pageY-r)*(180/Math.PI)*-1+270;-1!==e.getAttribute("class").indexOf("left")?e.style.transform="translateX(-195%) rotate("+a+"deg)":e.getAttribute("class").indexOf("right")&&(e.style.transform="translateX(195%) rotate("+a+"deg)")})}n.addEventListener("mousemove",l);
},{"./pikachuCSS":"mDEm","./CSSPlayer":"OwFl"}]},{},["epB2"], null)
//# sourceMappingURL=main.cd924521.js.map