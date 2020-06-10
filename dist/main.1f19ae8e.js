// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"pikachuCSS.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//模块化
var pikachuCSS = ".pikachu * {\n    margin: 0;\n    padding:0;\n    box-sizing: border-box;\n}\n.pikachu *::before, *::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n.pikachu {\n    background: rgb(255, 230, 0);\n}\n.nose {\n    position: relative;\n    width: 0px;\n    height: 0px;\n    transform: translateX(-50%);\n    z-index: 5;\n    left: 50%;\n    top: 110px;  \n}\n.nose:hover {\n    transform-origin: center bottom;\n    animation: wave 250ms linear infinite; \n}\n.nose .yuan {\n    border:1px solid black;\n    background: #000;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    bottom: 10px;\n    left: 50%;\n    margin-left: -10px;\n    border-top-left-radius: 20px 10px; \n    border-top-right-radius: 20px 10px;\n}\n.nose .san {\n    border: 10px solid black;\n    border-color: black transparent transparent;\n    border-bottom: none;\n    width: 0px;\n    height: 0px;\n    position: absolute;\n    left:50%;\n    margin-left: -10px;  \n    bottom: 0;\n    \n}\n@keyframes wave {\n    0% {\n        transform: rotate(0deg);\n    }\n    25% {\n        transform: rotate(5deg);\n    }\n    50% {\n        transform: rotate(0deg);\n    }\n    75% {\n        transform: rotate(-5deg);\n    }\n    100% {\n        transform: rotate(0deg);\n    }\n}\n.eye {\n    border: 3px solid black;\n    background: rgb(46, 46, 46);\n    width: 63px;\n    height: 63px;\n    position: absolute;\n    top: 50px;\n    left: 50%;\n    margin-left: -30px;\n    border-radius: 50%;\n}\n.eye::before {\n    content: \"\";\n    display: block;\n    border: 3px solid black;\n    width: 31px;\n    height: 31px;\n    border-radius: 50%;\n    background: white;\n    position: absolute;\n    top: -1px;\n    left: 6px;\n}\n.eye.left {\n    transform: translateX(-195%);\n\n}\n.eye.right {\n    transform: translateX(195%)\n}\n.face {\n    border: 3px solid black;\n    width: 88px;\n    height: 88px;\n    position: absolute;\n    top: 170px;\n    left: 50%;\n    margin-left: -45px;\n    border-radius: 50%;\n    background: rgb(255, 0, 0);\n}\n.face.left {\n    transform: translateX(190%);\n}\n.face.right {\n    transform: translateX(-190%);\n}\n.face img {\n    /* border: 1px solid black; */\n    position: absolute;\n    left: 50%;\n    top: 50%;\n}\n.face.right img {\n    transform: rotateY(180deg);\n    transform-origin: 0;\n}\n\n.mouth {\n    /* border: 1px solid black; */\n    width: 200px;\n    height: 190px;\n    position: absolute;\n    left: 50%;\n    margin-left: -100px;\n    top: 125px;\n}\n.mouth .up .lip {\n    border: 3px solid black;\n    background:rgb(255, 230, 0);\n    width: 100px;\n    height: 28px;\n    border-color: transparent transparent black transparent;\n    position: absolute;\n    z-index: 2;\n}\n.mouth .up .lip.left {\n  /* border-radius: 0 0 0 30px; */\n  border-bottom-left-radius: 50px 28px;\n  transform: rotate(-20deg);\n  left: -1px;\n\n}\n.mouth .up .lip.right {\n    border-bottom-right-radius: 50px 28px;\n    right: 0px;\n    transform: rotate(20deg);\n}\n\n/* \u5634\u5507\u906E\u7F69 */\n.mouth .up .lip::before {\n    content: \"\";\n    display: block;\n    /* border: 1px solid red; */\n    background: rgb(255, 230, 0);\n    width: 5px;\n    height: 23px;\n    position: absolute;\n    top: -1px;\n}\n.mouth .up .lip.left::before {  \n    right: 0;\n    margin-right: -4px;\n}\n.mouth .up .lip.right::before {  \n    margin-left: -4px;\n}\n\n.mouth .down {\n    /* border: 1px solid green; */\n    width: 100%;\n    height: 160px;\n    position: relative;\n    overflow: hidden;\n    z-index: 1;\n    top: 8px;\n}\n.mouth .down .yuan1 {\n    border: 3px solid black;\n    background-color: rgb(155, 0, 10);\n    width: 100%;\n    height: 1300px;\n    position: absolute;\n    bottom: 0;\n    left:0;\n    border-radius: 100px/490px;\n    overflow: hidden;\n}\n.mouth .down .yuan1 .yuan2 {\n    /* border: 1px solid black; */\n    width: 150px;\n    height: 150px;\n    background: rgb(255, 72, 95);\n    position: absolute;\n    bottom: -25px;\n    border-radius: 50%;\n    left: 50%;\n    transform: translateX(-50%);  \n}\n";
var _default = pikachuCSS;
exports.default = _default;
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _pikachuCSS = _interopRequireDefault(require("./pikachuCSS.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//面向对象的优化
var player = {
  //基本属性
  n: 0,
  //是索引,到不了length
  delay: 20,
  interval_id: undefined,
  playing: false,
  strHTML: "",
  strLen: _pikachuCSS.default.length,
  ui: {
    codeShow: document.querySelector(".codeShow"),
    piKaChuCSS: document.querySelector(".pikachucss")
  },
  //一般一个对象有一个初始化方法
  init: function init() {
    console.log("\u5B57\u7B26\u603B\u957F\u5EA6: ".concat(player.strLen));
    player.play();
    player.bindEvents();
  },
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast"
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        //for in 会遍历到对象原型的属性
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  writeStr: function writeStr() {
    //n 大于长度，清除interval
    if (parseInt(player.n) === _pikachuCSS.default.length - 1) {
      console.log("\u64AD\u653E\u5B8C\u6210, n: ".concat(player.n));
      window.clearInterval(player.interval_id);
      player.playing = false;
    } //转成HTML的换行和空格


    if (_pikachuCSS.default[player.n] === "\n") {
      player.strHTML += "<br>";
    } else if (_pikachuCSS.default[player.n] === " ") {
      player.strHTML += "&nbsp";
    } else {
      player.strHTML += _pikachuCSS.default[player.n];
    } //替换页面内容


    player.ui.codeShow.innerHTML = player.strHTML;
    player.ui.piKaChuCSS.innerHTML = _pikachuCSS.default.substr(0, player.n + 1); //注意，可滚动高度还要计算 滚动条本身的宽度，这里先不计算，

    player.ui.codeShow.scrollTop = player.ui.codeShow.scrollHeight;
    player.n += 1;
  },
  play: function play() {
    //是否在播放
    if (player.playing === false) {
      //是否播放完
      if (player.n < player.strLen) {
        player.interval_id = setInterval(player.writeStr, player.delay);
        player.playing = true;
      } else {
        console.log('已播放完，再点一次重新开始播放'); //重置

        player.strHTML = "";
        player.ui.piKaChuCSS.innerHTML = "";
        player.n = 0;
      }
    } else {
      console.log("\u5DF2\u7ECF\u5728\u64AD\u653E,id: ".concat(player.interval_id));
    }
  },
  pause: function pause() {
    window.clearInterval(player.interval_id);
    player.playing = false;
  },
  slow: function slow() {
    player.pause();
    player.delay = 50;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.delay = 20;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.delay = 0;
    player.play();
  }
}; //初始化

player.init();
},{"./pikachuCSS.js":"pikachuCSS.js"}],"../../../AppData/Roaming/npm/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50063" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map