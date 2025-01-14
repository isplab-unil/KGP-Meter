/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../kgp_meter/frontend/lib/src/js/kgpmeter.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../kgp_meter/frontend/app/src/js/KgpIframeInterface.js":
/*!**************************************************************!*\
  !*** ../kgp_meter/frontend/app/src/js/KgpIframeInterface.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.kgpSetSourceEvent = kgpSetSourceEvent;\nexports.kgpSetLanguageEvent = kgpSetLanguageEvent;\nexports.kgpSetIframeMaxDimensionEvent = kgpSetIframeMaxDimensionEvent;\nexports.kgpLaunchTutorialEvent = kgpLaunchTutorialEvent;\nexports.kgpToggleTutorialButtonEvent = kgpToggleTutorialButtonEvent;\nexports.kgpRemoveSurveyEvent = kgpRemoveSurveyEvent;\nexports.kgpSetHeightEvent = kgpSetHeightEvent;\n\n/******** down events ********/\n\nfunction kgpSetSourceEvent(source) {\n  return { \"type\": \"KgpSetSourceEvent\", \"source\": source };\n}\n\nfunction kgpSetLanguageEvent(lng) {\n  return { \"type\": \"KgpSetLanguageEvent\", \"lng\": lng };\n}\n\n/** Event from kgpmeter to kgp-iframe to signale iframe max dimensions */\nfunction kgpSetIframeMaxDimensionEvent(maxHeight) {\n  return { \"type\": \"KgpSetIframeMaxDimensionEvent\", \"maxHeight\": maxHeight };\n}\n\nfunction kgpLaunchTutorialEvent() {\n  return { \"type\": \"KgpLaunchTutorialEvent\" };\n}\n\nfunction kgpToggleTutorialButtonEvent(showTutorialButton) {\n  return { \"type\": \"KgpToggleTutorialButtonEvent\", \"showTutorialButton\": showTutorialButton };\n}\n\nfunction kgpRemoveSurveyEvent() {\n  return { \"type\": \"KgpRemoveSurveyEvent\" };\n}\n\n/******** up events ********/\n\n/** Event from kgp-iframe to kgpmeter to change height */\nfunction kgpSetHeightEvent(height, transitionDuration) {\n  return { \"type\": \"KgpSetHeightEvent\", \"height\": height, \"transitionDuration\": transitionDuration };\n}\n\n//# sourceURL=webpack:///../kgp_meter/frontend/app/src/js/KgpIframeInterface.js?");

/***/ }),

/***/ "../kgp_meter/frontend/app/src/js/lib/cookies.js":
/*!*******************************************************!*\
  !*** ../kgp_meter/frontend/app/src/js/lib/cookies.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nfunction setItem(name, value, durationMsec) {\n    var expires;\n\n    if (durationMsec) {\n        var date = new Date();\n        date.setTime(date.getTime() + durationMsec);\n        expires = \"; expires=\" + date.toGMTString();\n    } else {\n        expires = \"\";\n    }\n    document.cookie = encodeURIComponent(name) + \"=\" + encodeURIComponent(value) + expires + \"; path=/\";\n}\n\nfunction getItem(name) {\n    var nameEQ = encodeURIComponent(name) + \"=\";\n    var ca = document.cookie.split(';');\n    for (var i = 0; i < ca.length; i++) {\n        var c = ca[i];\n        while (c.charAt(0) === ' ') {\n            c = c.substring(1, c.length);\n        }if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));\n    }\n    return null;\n}\n\nvar cookie = exports.cookie = {\n    setItem: setItem,\n    getItem: getItem\n};\n\n//# sourceURL=webpack:///../kgp_meter/frontend/app/src/js/lib/cookies.js?");

/***/ }),

/***/ "../kgp_meter/frontend/app/src/js/lib/iframeCookiesLocalStorage.js":
/*!*************************************************************************!*\
  !*** ../kgp_meter/frontend/app/src/js/lib/iframeCookiesLocalStorage.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.IframeLocalStorageActionListener = exports.iframeLocalStorage = exports.expiringLocalStorage = exports.IframeCookieActionListener = exports.cookie = undefined;\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"../kgp_meter/frontend/node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ \"../kgp_meter/frontend/node_modules/babel-runtime/regenerator/index.js\");\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ \"../kgp_meter/frontend/node_modules/babel-runtime/core-js/promise.js\");\n\nvar _promise2 = _interopRequireDefault(_promise);\n\nvar _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ \"../kgp_meter/frontend/node_modules/babel-runtime/helpers/asyncToGenerator.js\");\n\nvar _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);\n\n/** set a cookie in the parent frame (or the page itself if no parent), the cookie is passed as arg to the callback and to the Promise resolve */\nvar cookieGetItem = function () {\n  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(name) {\n    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};\n    var result, id, data, el, promise;\n    return _regenerator2.default.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (!(window.parent == window)) {\n              _context.next = 6;\n              break;\n            }\n\n            result = _cookies.cookie.getItem(name);\n\n            callback(result);\n            return _context.abrupt(\"return\", _promise2.default.resolve(result));\n\n          case 6:\n            id = +new Date() + \"-\" + Math.random();\n            data = { \"type\": \"cookie.getItem\", id: id, name: name };\n            el = void 0;\n            promise = new _promise2.default(function (resolve, reject) {\n              el = function readCookieActionListener(e) {\n                if (e.data.type && e.data.type == \"cookie.getItem.result\" && e.data.id == id) {\n                  resolve(e.data.result);\n                  callback(e.data.result);\n                  window.removeEventListener('message', el, false);\n                }\n              };\n              window.addEventListener('message', el, false);\n            });\n\n            window.parent.postMessage(data, \"*\");\n            return _context.abrupt(\"return\", promise);\n\n          case 12:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, this);\n  }));\n\n  return function cookieGetItem(_x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/** gets an item from localstorage in the parent frame, the cookie is passed as arg to the callback and to the Promise resolve */\nvar getItem = function () {\n  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(name) {\n    var timestampSuffix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \".expires\";\n    var result, id, data, el, promise;\n    return _regenerator2.default.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            if (!(window.parent == window)) {\n              _context2.next = 5;\n              break;\n            }\n\n            result = expiringLocalStorage.getItem(name, timestampSuffix);\n            return _context2.abrupt(\"return\", _promise2.default.resolve(result));\n\n          case 5:\n            id = +new Date() + \"-\" + Math.random();\n            data = { \"type\": \"iframeLocalStorage.getItem\", id: id, name: name, timestampSuffix: timestampSuffix };\n            el = void 0;\n            promise = new _promise2.default(function (resolve, reject) {\n              el = function iframeLocalStorageGetItemActionListener(e) {\n                if (e.data.type && e.data.type == \"iframeLocalStorage.getItem.result\" && e.data.id == id) {\n                  resolve(e.data.result);\n                  window.removeEventListener('message', el, false);\n                }\n              };\n              window.addEventListener('message', el, false);\n            });\n\n            window.parent.postMessage(data, \"*\");\n            return _context2.abrupt(\"return\", promise);\n\n          case 11:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, this);\n  }));\n\n  return function getItem(_x9) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\nvar _cookies = __webpack_require__(/*! ./cookies.js */ \"../kgp_meter/frontend/app/src/js/lib/cookies.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// ============== downstream cookie functions ==============\n\nfunction cookieSetItem(name, value, durationMsec) {\n  if (window.parent == window) {\n    _cookies.cookie.setItem(name, value, durationMsec);\n  } else {\n    var data = { \"type\": \"cookie.setItem\", name: name, value: value, durationMsec: durationMsec };\n    window.parent.postMessage(data, \"*\");\n  }\n}var cookie = exports.cookie = {\n  setItem: cookieSetItem,\n  getItem: cookieGetItem\n\n  // ============== upstream cookie event listener ============== \n\n};\nvar IframeCookieActionListener = exports.IframeCookieActionListener = function IframeCookieActionListener(iframe) {\n  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"\";\n  (0, _classCallCheck3.default)(this, IframeCookieActionListener);\n\n  this.prefix = prefix;\n  this.iframe = iframe;\n  var self = this;\n  // put here because of this/self problematic\n  this.listener = function listener(e) {\n    if (e.source == self.iframe.contentWindow && e.data.type) {\n      if (e.data.type.startsWith(\"cookie\")) {}\n      switch (e.data.type) {\n        case \"cookie.setItem\":\n          _cookies.cookie.setItem(self.prefix + e.data.name, e.data.value, e.data.durationMsec);\n          break;\n        case \"cookie.getItem\":\n          var result = _cookies.cookie.getItem(self.prefix + e.data.name);\n          var data = { \"type\": \"cookie.getItem.result\", \"id\": e.data.id, \"name\": e.data.name, \"result\": result };\n          self.iframe.contentWindow.postMessage(data, \"*\");\n          break;\n        case \"cookie.erase\":\n          _cookies.cookie.erase(self.prefix + \".\" + e.data.name);\n          break;\n      }\n    }\n  };\n  window.addEventListener('message', this.listener, false);\n};\n\n// ============== localStorage with expires ==============\n\n\nfunction localStorageSetItemWithExpires(name, value, durationMsec) {\n  var timestampSuffix = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : \".expires\";\n\n  localStorage.setItem(name, value);\n  if (durationMsec) {\n    var date = new Date();\n    date.setTime(date.getTime() + durationMsec);\n    localStorage.setItem(name + timestampSuffix, date.toGMTString());\n  }\n}\nfunction localStorageGetItemWithExpires(name) {\n  var timestampSuffix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \".expires\";\n\n  var value = localStorage.getItem(name);\n  var expirationDate = new Date(localStorage.getItem(name + timestampSuffix));\n  if (expirationDate) {\n    var date = +new Date();\n    if (date <= +expirationDate) {\n      return value;\n    } else {\n      localStorageRemoveItemWithExpires(name);\n      return null;\n    }\n  } else {\n    return value;\n  }\n}\nfunction localStorageRemoveItemWithExpires(name) {\n  var timestampSuffix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \".expires\";\n\n  localStorage.removeItem(name);\n  localStorage.removeItem(name + timestampSuffix);\n}\n\nvar expiringLocalStorage = exports.expiringLocalStorage = {\n  setItem: localStorageSetItemWithExpires,\n  getItem: localStorageGetItemWithExpires,\n  removeItem: localStorageRemoveItemWithExpires\n\n  // ============== downstream LocalStorage functions ==============\n\n};function setItem(name, value, durationMsec) {\n  var timestampSuffix = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : \".expires\";\n\n  if (window.parent == window) {\n    expiringLocalStorage.setItem(name, value, durationMsec, timestampSuffix);\n  } else {\n    var data = { \"type\": \"iframeLocalStorage.setItem\", name: name, value: value, durationMsec: durationMsec, timestampSuffix: timestampSuffix };\n    window.parent.postMessage(data, \"*\");\n  }\n}var iframeLocalStorage = exports.iframeLocalStorage = {\n  setItem: setItem,\n  getItem: getItem\n\n  // ============== upstream LocalStorage event listener ============== \n\n};\nvar IframeLocalStorageActionListener = exports.IframeLocalStorageActionListener = function IframeLocalStorageActionListener(iframe) {\n  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"\";\n  (0, _classCallCheck3.default)(this, IframeLocalStorageActionListener);\n\n  this.iframe = iframe;\n  this.prefix = prefix;\n  var self = this;\n  // put here because of this/self problematic\n  this.listener = function listener(e) {\n    if (e.source == self.iframe.contentWindow && e.data.type) {\n      if (e.data.type.startsWith(\"iframeLocalStorage\")) {}\n      switch (e.data.type) {\n        case \"iframeLocalStorage.setItem\":\n          expiringLocalStorage.setItem(self.prefix + e.data.name, e.data.value, e.data.durationMsec, e.data.timestampSuffix);\n          break;\n        case \"iframeLocalStorage.getItem\":\n          var result = expiringLocalStorage.getItem(self.prefix + e.data.name, e.data.timestampSuffix);\n          var data = { \"type\": \"iframeLocalStorage.getItem.result\", \"id\": e.data.id, \"name\": e.data.name, \"result\": result };\n          self.iframe.contentWindow.postMessage(data, \"*\");\n          break;\n      }\n    }\n  };\n  window.addEventListener('message', this.listener, false);\n};\n\n//# sourceURL=webpack:///../kgp_meter/frontend/app/src/js/lib/iframeCookiesLocalStorage.js?");

/***/ }),

/***/ "../kgp_meter/frontend/lib/src/js/kgpmeter.js":
/*!****************************************************!*\
  !*** ../kgp_meter/frontend/lib/src/js/kgpmeter.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"../kgp_meter/frontend/node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"../kgp_meter/frontend/node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _KgpIframeInterface = __webpack_require__(/*! ../../../app/src/js/KgpIframeInterface.js */ \"../kgp_meter/frontend/app/src/js/KgpIframeInterface.js\");\n\nvar _iframeCookiesLocalStorage = __webpack_require__(/*! ../../../app/src/js/lib/iframeCookiesLocalStorage.js */ \"../kgp_meter/frontend/app/src/js/lib/iframeCookiesLocalStorage.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar KgpMeter = function () {\n  function KgpMeter(divId, apiUrl, lng, maxHeight) {\n    var removeSurvey = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;\n    (0, _classCallCheck3.default)(this, KgpMeter);\n\n    var self = this;\n    this.divId = divId;\n    this.div = document.getElementById(divId);\n\n    this.iframeLoaded = false;\n    this.onloadListeners = [];\n\n    this.apiUrl = apiUrl;\n    if (!this.apiUrl) {\n      throw \"KgpMeter error: API url missing. API url provided: \" + apiUrl;\n    }\n    var urlSeparator = this.apiUrl.endsWith(\"/\") ? \"\" : \"/\";\n    this.lng = lng ? lng : \"en\"; // default\n    this.maxHeight = maxHeight ? maxHeight : 2000; // default\n    this.height = 0;\n\n    this.div.innerHTML = \"<iframe src='{src}app/'></iframe>\".replace(\"{src}\", this.apiUrl + urlSeparator);\n    this.iframe = this.div.getElementsByTagName(\"iframe\")[0];\n    this.iframe.setAttribute(\"style\", 'border:none; width:100%; max-width:100% !important; height:100%');\n    this.cookieActionListener = new _iframeCookiesLocalStorage.IframeCookieActionListener(this.iframe, \"KgpMeter.\");\n    this.localStorageActionListener = new _iframeCookiesLocalStorage.IframeLocalStorageActionListener(this.iframe, \"KgpMeter.\");\n    this.setDivStyle(this.div.scrollHeight + \"px\");\n\n    // ======== ensure iframe doesn't overflow its parent: actually not effective... ========\n    /*window.addEventListener(\"orientationchange\", ()=>{ // not effective...\n      setTimeout(()=>{\n      let divWidth = window.getComputedStyle(self.div, null).getPropertyValue(\"width\") // not effective...\n      self.iframe.style.maxWidth = divWidth; // not effective...\n      }, 200)\n    }, false);*/\n\n    // ======== send data to iframe ========\n\n    this.iframe.onload = function () {\n      setTimeout(function () {\n        // set iframeLoaded\n        self.iframeLoaded = true;\n        // call load listeners\n        self.onloadListeners.forEach(function (f) {\n          return f();\n        });\n      }, 50);\n    };\n    this.onload(function () {\n      // set language\n      self.setLanguage(self.lng);\n      // set source\n      self.setSource(document.URL);\n      // set max height\n      self.setMaxheight(self.maxHeight);\n      // remove survey if needed\n      if (removeSurvey) {\n        self.removeSurvey();\n      }\n    });\n\n    // ======== handle height updates ========\n    function dispatchKgpIframeMessage(e) {\n      if (e.source == self.iframe.contentWindow && e.data.type) {\n        switch (e.data.type) {\n          case \"KgpSetHeightEvent\":\n            self.setHeight(e.data.height, e.data.transitionDuration);\n            break;\n        }\n      }\n    }\n    window.addEventListener('message', dispatchKgpIframeMessage, false);\n  }\n\n  (0, _createClass3.default)(KgpMeter, [{\n    key: \"onload\",\n    value: function onload(func) {\n      if (this.iframeLoaded) {\n        func();\n      } else {\n        this.onloadListeners.push(func);\n      }\n    }\n  }, {\n    key: \"setLanguage\",\n    value: function setLanguage(lng) {\n      this.lng = lng;\n      var setLanguageEvent = (0, _KgpIframeInterface.kgpSetLanguageEvent)(lng);\n      this.iframe.contentWindow.postMessage(setLanguageEvent, this.apiUrl);\n    }\n  }, {\n    key: \"setSource\",\n    value: function setSource(source) {\n      var setSourceEvent = (0, _KgpIframeInterface.kgpSetSourceEvent)(source);\n      this.iframe.contentWindow.postMessage(setSourceEvent, this.apiUrl);\n    }\n  }, {\n    key: \"setMaxheight\",\n    value: function setMaxheight(maxHeight) {\n      this.maxHeight = maxHeight;\n      var setIframeMaxDimensionEvent = (0, _KgpIframeInterface.kgpSetIframeMaxDimensionEvent)(maxHeight);\n      this.iframe.contentWindow.postMessage(setIframeMaxDimensionEvent, this.apiUrl);\n    }\n  }, {\n    key: \"launchTutorial\",\n    value: function launchTutorial() {\n      this.iframe.contentWindow.postMessage((0, _KgpIframeInterface.kgpLaunchTutorialEvent)(), this.apiUrl);\n    }\n  }, {\n    key: \"toggleTutorialButton\",\n    value: function toggleTutorialButton(showTutorialButton) {\n      this.iframe.contentWindow.postMessage((0, _KgpIframeInterface.kgpToggleTutorialButtonEvent)(showTutorialButton), this.apiUrl);\n    }\n  }, {\n    key: \"removeSurvey\",\n    value: function removeSurvey() {\n      this.iframe.contentWindow.postMessage((0, _KgpIframeInterface.kgpRemoveSurveyEvent)(), this.apiUrl);\n      this.removedSurvey = true;\n    }\n  }, {\n    key: \"setHeight\",\n    value: function setHeight(height, transitionDuration) {\n      transitionDuration = transitionDuration * (height > this.height ? 0.9 : 2) / 1000;\n      this.setDivStyle(this.height + \"px\", height + \"px\", transitionDuration);\n      this.height = height;\n    }\n  }, {\n    key: \"setDivStyle\",\n    value: function setDivStyle(oldHeightstr, heightStr, transitionDuration) {\n      this.div.style.height = oldHeightstr;\n      var divTransitionStyle = 'transition-property: height; transition-duration: ' + transitionDuration + 's; transition-timing-function: ease;';\n      this.div.setAttribute(\"style\", divTransitionStyle);\n      this.div.style.height = heightStr;\n    }\n  }]);\n  return KgpMeter;\n}();\n// export KgpMeter to global namespace\n\n\nwindow.KgpMeter = KgpMeter;\n\n// create default kgpmeter if div#kin-genomic-privacy-meter exists\nvar singletonCreated = false;\nfunction singletonKgpMeter() {\n  if (!singletonCreated) {\n    var defaultKgpmeterDivId = \"kin-genomic-privacy-meter\";\n    var div = document.getElementById(defaultKgpmeterDivId);\n    var kgpmeter = void 0;\n    if (div) {\n      var apiUrl = div.getAttribute(\"data-kgpmeter-api-url\");\n      apiUrl = apiUrl ? apiUrl : \"https://santeperso.unil.ch/integration/\";\n      var lng = div.getAttribute(\"data-kgpmeter-lng\");\n      var maxHeight = div.getAttribute(\"data-kgpmeter-max-height\");\n      var removeSurvey = div.getAttribute(\"data-kgpmeter-remove-survey\");\n      kgpmeter = new KgpMeter(defaultKgpmeterDivId, apiUrl, lng, maxHeight, removeSurvey);\n      window.kgpmeter = kgpmeter;\n      singletonCreated = true;\n    }\n  }\n}\n// call it directly & onload for as fast as possible loading of kgp_meter \nsingletonKgpMeter();\nwindow.addEventListener(\"load\", singletonKgpMeter);\n\n//# sourceURL=webpack:///../kgp_meter/frontend/lib/src/js/kgpmeter.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/babel-runtime/core-js/object/define-property.js":
/*!******************************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/babel-runtime/core-js/object/define-property.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/object/define-property */ \"../kgp_meter/frontend/node_modules/core-js/library/fn/object/define-property.js\"), __esModule: true };\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/babel-runtime/core-js/object/define-property.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/babel-runtime/core-js/promise.js":
/*!***************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/babel-runtime/core-js/promise.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/promise */ \"../kgp_meter/frontend/node_modules/core-js/library/fn/promise.js\"), __esModule: true };\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/babel-runtime/core-js/promise.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/babel-runtime/helpers/asyncToGenerator.js":
/*!************************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/babel-runtime/helpers/asyncToGenerator.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _promise = __webpack_require__(/*! ../core-js/promise */ \"../kgp_meter/frontend/node_modules/babel-runtime/core-js/promise.js\");\n\nvar _promise2 = _interopRequireDefault(_promise);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (fn) {\n  return function () {\n    var gen = fn.apply(this, arguments);\n    return new _promise2.default(function (resolve, reject) {\n      function step(key, arg) {\n        try {\n          var info = gen[key](arg);\n          var value = info.value;\n        } catch (error) {\n          reject(error);\n          return;\n        }\n\n        if (info.done) {\n          resolve(value);\n        } else {\n          return _promise2.default.resolve(value).then(function (value) {\n            step(\"next\", value);\n          }, function (err) {\n            step(\"throw\", err);\n          });\n        }\n      }\n\n      return step(\"next\");\n    });\n  };\n};\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/babel-runtime/helpers/asyncToGenerator.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/babel-runtime/helpers/classCallCheck.js":
/*!**********************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/babel-runtime/helpers/classCallCheck.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nexports.default = function (instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n};\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/babel-runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/babel-runtime/helpers/createClass.js":
/*!*******************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/babel-runtime/helpers/createClass.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ \"../kgp_meter/frontend/node_modules/babel-runtime/core-js/object/define-property.js\");\n\nvar _defineProperty2 = _interopRequireDefault(_defineProperty);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];\n      descriptor.enumerable = descriptor.enumerable || false;\n      descriptor.configurable = true;\n      if (\"value\" in descriptor) descriptor.writable = true;\n      (0, _defineProperty2.default)(target, descriptor.key, descriptor);\n    }\n  }\n\n  return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) defineProperties(Constructor, staticProps);\n    return Constructor;\n  };\n}();\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/babel-runtime/helpers/createClass.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/babel-runtime/node_modules/regenerator-runtime/runtime-module.js":
/*!***********************************************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/babel-runtime/node_modules/regenerator-runtime/runtime-module.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n// This method of obtaining a reference to the global object needs to be\n// kept identical to the way it is obtained in runtime.js\nvar g = (function() { return this })() || Function(\"return this\")();\n\n// Use `getOwnPropertyNames` because not all browsers support calling\n// `hasOwnProperty` on the global `self` object in a worker. See #183.\nvar hadRuntime = g.regeneratorRuntime &&\n  Object.getOwnPropertyNames(g).indexOf(\"regeneratorRuntime\") >= 0;\n\n// Save the old regeneratorRuntime in case it needs to be restored later.\nvar oldRuntime = hadRuntime && g.regeneratorRuntime;\n\n// Force reevalutation of runtime.js.\ng.regeneratorRuntime = undefined;\n\nmodule.exports = __webpack_require__(/*! ./runtime */ \"../kgp_meter/frontend/node_modules/babel-runtime/node_modules/regenerator-runtime/runtime.js\");\n\nif (hadRuntime) {\n  // Restore the original runtime.\n  g.regeneratorRuntime = oldRuntime;\n} else {\n  // Remove the global property added by runtime.js.\n  try {\n    delete g.regeneratorRuntime;\n  } catch(e) {\n    g.regeneratorRuntime = undefined;\n  }\n}\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/babel-runtime/node_modules/regenerator-runtime/runtime-module.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/babel-runtime/node_modules/regenerator-runtime/runtime.js":
/*!****************************************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/babel-runtime/node_modules/regenerator-runtime/runtime.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n!(function(global) {\n  \"use strict\";\n\n  var Op = Object.prototype;\n  var hasOwn = Op.hasOwnProperty;\n  var undefined; // More compressible than void 0.\n  var $Symbol = typeof Symbol === \"function\" ? Symbol : {};\n  var iteratorSymbol = $Symbol.iterator || \"@@iterator\";\n  var asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\";\n  var toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n\n  var inModule = typeof module === \"object\";\n  var runtime = global.regeneratorRuntime;\n  if (runtime) {\n    if (inModule) {\n      // If regeneratorRuntime is defined globally and we're in a module,\n      // make the exports object identical to regeneratorRuntime.\n      module.exports = runtime;\n    }\n    // Don't bother evaluating the rest of this file if the runtime was\n    // already defined globally.\n    return;\n  }\n\n  // Define the runtime globally (as expected by generated code) as either\n  // module.exports (if we're in a module) or a new, empty object.\n  runtime = global.regeneratorRuntime = inModule ? module.exports : {};\n\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;\n    var generator = Object.create(protoGenerator.prototype);\n    var context = new Context(tryLocsList || []);\n\n    // The ._invoke method unifies the implementations of the .next,\n    // .throw, and .return methods.\n    generator._invoke = makeInvokeMethod(innerFn, self, context);\n\n    return generator;\n  }\n  runtime.wrap = wrap;\n\n  // Try/catch helper to minimize deoptimizations. Returns a completion\n  // record like context.tryEntries[i].completion. This interface could\n  // have been (and was previously) designed to take a closure to be\n  // invoked without arguments, but in all the cases we care about we\n  // already have an existing method we want to call, so there's no need\n  // to create a new function object. We can even get away with assuming\n  // the method takes exactly one argument, since that happens to be true\n  // in every case, so we don't have to touch the arguments object. The\n  // only additional allocation required is the completion record, which\n  // has a stable shape and so hopefully should be cheap to allocate.\n  function tryCatch(fn, obj, arg) {\n    try {\n      return { type: \"normal\", arg: fn.call(obj, arg) };\n    } catch (err) {\n      return { type: \"throw\", arg: err };\n    }\n  }\n\n  var GenStateSuspendedStart = \"suspendedStart\";\n  var GenStateSuspendedYield = \"suspendedYield\";\n  var GenStateExecuting = \"executing\";\n  var GenStateCompleted = \"completed\";\n\n  // Returning this object from the innerFn has the same effect as\n  // breaking out of the dispatch switch statement.\n  var ContinueSentinel = {};\n\n  // Dummy constructor functions that we use as the .constructor and\n  // .constructor.prototype properties for functions that return Generator\n  // objects. For full spec compliance, you may wish to configure your\n  // minifier not to mangle the names of these two functions.\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n\n  // This is a polyfill for %IteratorPrototype% for environments that\n  // don't natively support it.\n  var IteratorPrototype = {};\n  IteratorPrototype[iteratorSymbol] = function () {\n    return this;\n  };\n\n  var getProto = Object.getPrototypeOf;\n  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n  if (NativeIteratorPrototype &&\n      NativeIteratorPrototype !== Op &&\n      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {\n    // This environment has a native %IteratorPrototype%; use it instead\n    // of the polyfill.\n    IteratorPrototype = NativeIteratorPrototype;\n  }\n\n  var Gp = GeneratorFunctionPrototype.prototype =\n    Generator.prototype = Object.create(IteratorPrototype);\n  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;\n  GeneratorFunctionPrototype.constructor = GeneratorFunction;\n  GeneratorFunctionPrototype[toStringTagSymbol] =\n    GeneratorFunction.displayName = \"GeneratorFunction\";\n\n  // Helper for defining the .next, .throw, and .return methods of the\n  // Iterator interface in terms of a single ._invoke method.\n  function defineIteratorMethods(prototype) {\n    [\"next\", \"throw\", \"return\"].forEach(function(method) {\n      prototype[method] = function(arg) {\n        return this._invoke(method, arg);\n      };\n    });\n  }\n\n  runtime.isGeneratorFunction = function(genFun) {\n    var ctor = typeof genFun === \"function\" && genFun.constructor;\n    return ctor\n      ? ctor === GeneratorFunction ||\n        // For the native GeneratorFunction constructor, the best we can\n        // do is to check its .name property.\n        (ctor.displayName || ctor.name) === \"GeneratorFunction\"\n      : false;\n  };\n\n  runtime.mark = function(genFun) {\n    if (Object.setPrototypeOf) {\n      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);\n    } else {\n      genFun.__proto__ = GeneratorFunctionPrototype;\n      if (!(toStringTagSymbol in genFun)) {\n        genFun[toStringTagSymbol] = \"GeneratorFunction\";\n      }\n    }\n    genFun.prototype = Object.create(Gp);\n    return genFun;\n  };\n\n  // Within the body of any async function, `await x` is transformed to\n  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test\n  // `hasOwn.call(value, \"__await\")` to determine if the yielded value is\n  // meant to be awaited.\n  runtime.awrap = function(arg) {\n    return { __await: arg };\n  };\n\n  function AsyncIterator(generator) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n      if (record.type === \"throw\") {\n        reject(record.arg);\n      } else {\n        var result = record.arg;\n        var value = result.value;\n        if (value &&\n            typeof value === \"object\" &&\n            hasOwn.call(value, \"__await\")) {\n          return Promise.resolve(value.__await).then(function(value) {\n            invoke(\"next\", value, resolve, reject);\n          }, function(err) {\n            invoke(\"throw\", err, resolve, reject);\n          });\n        }\n\n        return Promise.resolve(value).then(function(unwrapped) {\n          // When a yielded Promise is resolved, its final value becomes\n          // the .value of the Promise<{value,done}> result for the\n          // current iteration. If the Promise is rejected, however, the\n          // result for this iteration will be rejected with the same\n          // reason. Note that rejections of yielded Promises are not\n          // thrown back into the generator function, as is the case\n          // when an awaited Promise is rejected. This difference in\n          // behavior between yield and await is important, because it\n          // allows the consumer to decide what to do with the yielded\n          // rejection (swallow it and continue, manually .throw it back\n          // into the generator, abandon iteration, whatever). With\n          // await, by contrast, there is no opportunity to examine the\n          // rejection reason outside the generator function, so the\n          // only option is to throw it from the await expression, and\n          // let the generator function handle the exception.\n          result.value = unwrapped;\n          resolve(result);\n        }, reject);\n      }\n    }\n\n    var previousPromise;\n\n    function enqueue(method, arg) {\n      function callInvokeWithMethodAndArg() {\n        return new Promise(function(resolve, reject) {\n          invoke(method, arg, resolve, reject);\n        });\n      }\n\n      return previousPromise =\n        // If enqueue has been called before, then we want to wait until\n        // all previous Promises have been resolved before calling invoke,\n        // so that results are always delivered in the correct order. If\n        // enqueue has not been called before, then it is important to\n        // call invoke immediately, without waiting on a callback to fire,\n        // so that the async generator function has the opportunity to do\n        // any necessary setup in a predictable way. This predictability\n        // is why the Promise constructor synchronously invokes its\n        // executor callback, and why async functions synchronously\n        // execute code before the first await. Since we implement simple\n        // async functions in terms of async generators, it is especially\n        // important to get this right, even though it requires care.\n        previousPromise ? previousPromise.then(\n          callInvokeWithMethodAndArg,\n          // Avoid propagating failures to Promises returned by later\n          // invocations of the iterator.\n          callInvokeWithMethodAndArg\n        ) : callInvokeWithMethodAndArg();\n    }\n\n    // Define the unified helper method that is used to implement .next,\n    // .throw, and .return (see defineIteratorMethods).\n    this._invoke = enqueue;\n  }\n\n  defineIteratorMethods(AsyncIterator.prototype);\n  AsyncIterator.prototype[asyncIteratorSymbol] = function () {\n    return this;\n  };\n  runtime.AsyncIterator = AsyncIterator;\n\n  // Note that simple async functions are implemented on top of\n  // AsyncIterator objects; they just return a Promise for the value of\n  // the final result produced by the iterator.\n  runtime.async = function(innerFn, outerFn, self, tryLocsList) {\n    var iter = new AsyncIterator(\n      wrap(innerFn, outerFn, self, tryLocsList)\n    );\n\n    return runtime.isGeneratorFunction(outerFn)\n      ? iter // If outerFn is a generator, return the full iterator.\n      : iter.next().then(function(result) {\n          return result.done ? result.value : iter.next();\n        });\n  };\n\n  function makeInvokeMethod(innerFn, self, context) {\n    var state = GenStateSuspendedStart;\n\n    return function invoke(method, arg) {\n      if (state === GenStateExecuting) {\n        throw new Error(\"Generator is already running\");\n      }\n\n      if (state === GenStateCompleted) {\n        if (method === \"throw\") {\n          throw arg;\n        }\n\n        // Be forgiving, per 25.3.3.3.3 of the spec:\n        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume\n        return doneResult();\n      }\n\n      context.method = method;\n      context.arg = arg;\n\n      while (true) {\n        var delegate = context.delegate;\n        if (delegate) {\n          var delegateResult = maybeInvokeDelegate(delegate, context);\n          if (delegateResult) {\n            if (delegateResult === ContinueSentinel) continue;\n            return delegateResult;\n          }\n        }\n\n        if (context.method === \"next\") {\n          // Setting context._sent for legacy support of Babel's\n          // function.sent implementation.\n          context.sent = context._sent = context.arg;\n\n        } else if (context.method === \"throw\") {\n          if (state === GenStateSuspendedStart) {\n            state = GenStateCompleted;\n            throw context.arg;\n          }\n\n          context.dispatchException(context.arg);\n\n        } else if (context.method === \"return\") {\n          context.abrupt(\"return\", context.arg);\n        }\n\n        state = GenStateExecuting;\n\n        var record = tryCatch(innerFn, self, context);\n        if (record.type === \"normal\") {\n          // If an exception is thrown from innerFn, we leave state ===\n          // GenStateExecuting and loop back for another invocation.\n          state = context.done\n            ? GenStateCompleted\n            : GenStateSuspendedYield;\n\n          if (record.arg === ContinueSentinel) {\n            continue;\n          }\n\n          return {\n            value: record.arg,\n            done: context.done\n          };\n\n        } else if (record.type === \"throw\") {\n          state = GenStateCompleted;\n          // Dispatch the exception by looping back around to the\n          // context.dispatchException(context.arg) call above.\n          context.method = \"throw\";\n          context.arg = record.arg;\n        }\n      }\n    };\n  }\n\n  // Call delegate.iterator[context.method](context.arg) and handle the\n  // result, either by returning a { value, done } result from the\n  // delegate iterator, or by modifying context.method and context.arg,\n  // setting context.delegate to null, and returning the ContinueSentinel.\n  function maybeInvokeDelegate(delegate, context) {\n    var method = delegate.iterator[context.method];\n    if (method === undefined) {\n      // A .throw or .return when the delegate iterator has no .throw\n      // method always terminates the yield* loop.\n      context.delegate = null;\n\n      if (context.method === \"throw\") {\n        if (delegate.iterator.return) {\n          // If the delegate iterator has a return method, give it a\n          // chance to clean up.\n          context.method = \"return\";\n          context.arg = undefined;\n          maybeInvokeDelegate(delegate, context);\n\n          if (context.method === \"throw\") {\n            // If maybeInvokeDelegate(context) changed context.method from\n            // \"return\" to \"throw\", let that override the TypeError below.\n            return ContinueSentinel;\n          }\n        }\n\n        context.method = \"throw\";\n        context.arg = new TypeError(\n          \"The iterator does not provide a 'throw' method\");\n      }\n\n      return ContinueSentinel;\n    }\n\n    var record = tryCatch(method, delegate.iterator, context.arg);\n\n    if (record.type === \"throw\") {\n      context.method = \"throw\";\n      context.arg = record.arg;\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    var info = record.arg;\n\n    if (! info) {\n      context.method = \"throw\";\n      context.arg = new TypeError(\"iterator result is not an object\");\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    if (info.done) {\n      // Assign the result of the finished delegate to the temporary\n      // variable specified by delegate.resultName (see delegateYield).\n      context[delegate.resultName] = info.value;\n\n      // Resume execution at the desired location (see delegateYield).\n      context.next = delegate.nextLoc;\n\n      // If context.method was \"throw\" but the delegate handled the\n      // exception, let the outer generator proceed normally. If\n      // context.method was \"next\", forget context.arg since it has been\n      // \"consumed\" by the delegate iterator. If context.method was\n      // \"return\", allow the original .return call to continue in the\n      // outer generator.\n      if (context.method !== \"return\") {\n        context.method = \"next\";\n        context.arg = undefined;\n      }\n\n    } else {\n      // Re-yield the result returned by the delegate method.\n      return info;\n    }\n\n    // The delegate iterator is finished, so forget it and continue with\n    // the outer generator.\n    context.delegate = null;\n    return ContinueSentinel;\n  }\n\n  // Define Generator.prototype.{next,throw,return} in terms of the\n  // unified ._invoke helper method.\n  defineIteratorMethods(Gp);\n\n  Gp[toStringTagSymbol] = \"Generator\";\n\n  // A Generator should always return itself as the iterator object when the\n  // @@iterator function is called on it. Some browsers' implementations of the\n  // iterator prototype chain incorrectly implement this, causing the Generator\n  // object to not be returned from this call. This ensures that doesn't happen.\n  // See https://github.com/facebook/regenerator/issues/274 for more details.\n  Gp[iteratorSymbol] = function() {\n    return this;\n  };\n\n  Gp.toString = function() {\n    return \"[object Generator]\";\n  };\n\n  function pushTryEntry(locs) {\n    var entry = { tryLoc: locs[0] };\n\n    if (1 in locs) {\n      entry.catchLoc = locs[1];\n    }\n\n    if (2 in locs) {\n      entry.finallyLoc = locs[2];\n      entry.afterLoc = locs[3];\n    }\n\n    this.tryEntries.push(entry);\n  }\n\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\";\n    delete record.arg;\n    entry.completion = record;\n  }\n\n  function Context(tryLocsList) {\n    // The root entry object (effectively a try statement without a catch\n    // or a finally block) gives us a place to store values thrown from\n    // locations where there is no enclosing try statement.\n    this.tryEntries = [{ tryLoc: \"root\" }];\n    tryLocsList.forEach(pushTryEntry, this);\n    this.reset(true);\n  }\n\n  runtime.keys = function(object) {\n    var keys = [];\n    for (var key in object) {\n      keys.push(key);\n    }\n    keys.reverse();\n\n    // Rather than returning an object with a next method, we keep\n    // things simple and return the next function itself.\n    return function next() {\n      while (keys.length) {\n        var key = keys.pop();\n        if (key in object) {\n          next.value = key;\n          next.done = false;\n          return next;\n        }\n      }\n\n      // To avoid creating an additional object, we just hang the .value\n      // and .done properties off the next function object itself. This\n      // also ensures that the minifier will not anonymize the function.\n      next.done = true;\n      return next;\n    };\n  };\n\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n      if (iteratorMethod) {\n        return iteratorMethod.call(iterable);\n      }\n\n      if (typeof iterable.next === \"function\") {\n        return iterable;\n      }\n\n      if (!isNaN(iterable.length)) {\n        var i = -1, next = function next() {\n          while (++i < iterable.length) {\n            if (hasOwn.call(iterable, i)) {\n              next.value = iterable[i];\n              next.done = false;\n              return next;\n            }\n          }\n\n          next.value = undefined;\n          next.done = true;\n\n          return next;\n        };\n\n        return next.next = next;\n      }\n    }\n\n    // Return an iterator with no values.\n    return { next: doneResult };\n  }\n  runtime.values = values;\n\n  function doneResult() {\n    return { value: undefined, done: true };\n  }\n\n  Context.prototype = {\n    constructor: Context,\n\n    reset: function(skipTempReset) {\n      this.prev = 0;\n      this.next = 0;\n      // Resetting context._sent for legacy support of Babel's\n      // function.sent implementation.\n      this.sent = this._sent = undefined;\n      this.done = false;\n      this.delegate = null;\n\n      this.method = \"next\";\n      this.arg = undefined;\n\n      this.tryEntries.forEach(resetTryEntry);\n\n      if (!skipTempReset) {\n        for (var name in this) {\n          // Not sure about the optimal order of these conditions:\n          if (name.charAt(0) === \"t\" &&\n              hasOwn.call(this, name) &&\n              !isNaN(+name.slice(1))) {\n            this[name] = undefined;\n          }\n        }\n      }\n    },\n\n    stop: function() {\n      this.done = true;\n\n      var rootEntry = this.tryEntries[0];\n      var rootRecord = rootEntry.completion;\n      if (rootRecord.type === \"throw\") {\n        throw rootRecord.arg;\n      }\n\n      return this.rval;\n    },\n\n    dispatchException: function(exception) {\n      if (this.done) {\n        throw exception;\n      }\n\n      var context = this;\n      function handle(loc, caught) {\n        record.type = \"throw\";\n        record.arg = exception;\n        context.next = loc;\n\n        if (caught) {\n          // If the dispatched exception was caught by a catch block,\n          // then let that catch block handle the exception normally.\n          context.method = \"next\";\n          context.arg = undefined;\n        }\n\n        return !! caught;\n      }\n\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        var record = entry.completion;\n\n        if (entry.tryLoc === \"root\") {\n          // Exception thrown outside of any try block that could handle\n          // it, so set the completion value of the entire function to\n          // throw the exception.\n          return handle(\"end\");\n        }\n\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\");\n          var hasFinally = hasOwn.call(entry, \"finallyLoc\");\n\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            } else if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            }\n\n          } else if (hasFinally) {\n            if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else {\n            throw new Error(\"try statement without catch or finally\");\n          }\n        }\n      }\n    },\n\n    abrupt: function(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc <= this.prev &&\n            hasOwn.call(entry, \"finallyLoc\") &&\n            this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n\n      if (finallyEntry &&\n          (type === \"break\" ||\n           type === \"continue\") &&\n          finallyEntry.tryLoc <= arg &&\n          arg <= finallyEntry.finallyLoc) {\n        // Ignore the finally entry if control is not jumping to a\n        // location outside the try/catch block.\n        finallyEntry = null;\n      }\n\n      var record = finallyEntry ? finallyEntry.completion : {};\n      record.type = type;\n      record.arg = arg;\n\n      if (finallyEntry) {\n        this.method = \"next\";\n        this.next = finallyEntry.finallyLoc;\n        return ContinueSentinel;\n      }\n\n      return this.complete(record);\n    },\n\n    complete: function(record, afterLoc) {\n      if (record.type === \"throw\") {\n        throw record.arg;\n      }\n\n      if (record.type === \"break\" ||\n          record.type === \"continue\") {\n        this.next = record.arg;\n      } else if (record.type === \"return\") {\n        this.rval = this.arg = record.arg;\n        this.method = \"return\";\n        this.next = \"end\";\n      } else if (record.type === \"normal\" && afterLoc) {\n        this.next = afterLoc;\n      }\n\n      return ContinueSentinel;\n    },\n\n    finish: function(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.finallyLoc === finallyLoc) {\n          this.complete(entry.completion, entry.afterLoc);\n          resetTryEntry(entry);\n          return ContinueSentinel;\n        }\n      }\n    },\n\n    \"catch\": function(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n          if (record.type === \"throw\") {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n          return thrown;\n        }\n      }\n\n      // The context.catch method must only be called with a location\n      // argument that corresponds to a known catch block.\n      throw new Error(\"illegal catch attempt\");\n    },\n\n    delegateYield: function(iterable, resultName, nextLoc) {\n      this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      };\n\n      if (this.method === \"next\") {\n        // Deliberately forget the last sent value so that we don't\n        // accidentally pass it on to the delegate.\n        this.arg = undefined;\n      }\n\n      return ContinueSentinel;\n    }\n  };\n})(\n  // In sloppy mode, unbound `this` refers to the global object, fallback to\n  // Function constructor if we're in global strict mode. That is sadly a form\n  // of indirect eval which violates Content Security Policy.\n  (function() { return this })() || Function(\"return this\")()\n);\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/babel-runtime/node_modules/regenerator-runtime/runtime.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/babel-runtime/regenerator/index.js":
/*!*****************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/babel-runtime/regenerator/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! regenerator-runtime */ \"../kgp_meter/frontend/node_modules/babel-runtime/node_modules/regenerator-runtime/runtime-module.js\");\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/babel-runtime/regenerator/index.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/fn/object/define-property.js":
/*!***************************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/fn/object/define-property.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.object.define-property */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/es6.object.define-property.js\");\nvar $Object = __webpack_require__(/*! ../../modules/_core */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_core.js\").Object;\nmodule.exports = function defineProperty(it, key, desc) {\n  return $Object.defineProperty(it, key, desc);\n};\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/fn/object/define-property.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/fn/promise.js":
/*!************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/fn/promise.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/es6.object.to-string */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/es6.object.to-string.js\");\n__webpack_require__(/*! ../modules/es6.string.iterator */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/es6.string.iterator.js\");\n__webpack_require__(/*! ../modules/web.dom.iterable */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/web.dom.iterable.js\");\n__webpack_require__(/*! ../modules/es6.promise */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/es6.promise.js\");\n__webpack_require__(/*! ../modules/es7.promise.finally */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/es7.promise.finally.js\");\n__webpack_require__(/*! ../modules/es7.promise.try */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/es7.promise.try.js\");\nmodule.exports = __webpack_require__(/*! ../modules/_core */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_core.js\").Promise;\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/fn/promise.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_a-function.js":
/*!*********************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_a-function.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  if (typeof it != 'function') throw TypeError(it + ' is not a function!');\n  return it;\n};\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_a-function.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*****************************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function () { /* empty */ };\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_add-to-unscopables.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_an-instance.js":
/*!**********************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_an-instance.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it, Constructor, name, forbiddenField) {\n  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {\n    throw TypeError(name + ': incorrect invocation!');\n  } return it;\n};\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_an-instance.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_an-object.js":
/*!********************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_an-object.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_is-object.js\");\nmodule.exports = function (it) {\n  if (!isObject(it)) throw TypeError(it + ' is not an object!');\n  return it;\n};\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_an-object.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_array-includes.js":
/*!*************************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_array-includes.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// false -> Array#indexOf\n// true  -> Array#includes\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_to-iobject.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_to-length.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_to-absolute-index.js\");\nmodule.exports = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {\n      if (O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_array-includes.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_classof.js":
/*!******************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_classof.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// getting tag from 19.1.3.6 Object.prototype.toString()\nvar cof = __webpack_require__(/*! ./_cof */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_cof.js\");\nvar TAG = __webpack_require__(/*! ./_wks */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_wks.js\")('toStringTag');\n// ES3 wrong here\nvar ARG = cof(function () { return arguments; }()) == 'Arguments';\n\n// fallback for IE11 Script Access Denied error\nvar tryGet = function (it, key) {\n  try {\n    return it[key];\n  } catch (e) { /* empty */ }\n};\n\nmodule.exports = function (it) {\n  var O, T, B;\n  return it === undefined ? 'Undefined' : it === null ? 'Null'\n    // @@toStringTag case\n    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T\n    // builtinTag case\n    : ARG ? cof(O)\n    // ES3 arguments fallback\n    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;\n};\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_classof.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_cof.js":
/*!**************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_cof.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_cof.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_core.js":
/*!***************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_core.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var core = module.exports = { version: '2.6.11' };\nif (typeof __e == 'number') __e = core; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_core.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_ctx.js":
/*!**************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_ctx.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// optional / simple context binding\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_a-function.js\");\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_ctx.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_defined.js":
/*!******************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_defined.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 7.2.1 RequireObjectCoercible(argument)\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on  \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_defined.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_descriptors.js":
/*!**********************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_descriptors.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Thank's IE8 for his funny defineProperty\nmodule.exports = !__webpack_require__(/*! ./_fails */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_fails.js\")(function () {\n  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_descriptors.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_dom-create.js":
/*!*********************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_dom-create.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_is-object.js\");\nvar document = __webpack_require__(/*! ./_global */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_global.js\").document;\n// typeof document.createElement is 'object' in old IE\nvar is = isObject(document) && isObject(document.createElement);\nmodule.exports = function (it) {\n  return is ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_dom-create.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!************************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// IE 8- don't enum bug keys\nmodule.exports = (\n  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'\n).split(',');\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_enum-bug-keys.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_export.js":
/*!*****************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_export.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_core.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_ctx.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_hide.js\");\nvar has = __webpack_require__(/*! ./_has */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_has.js\");\nvar PROTOTYPE = 'prototype';\n\nvar $export = function (type, name, source) {\n  var IS_FORCED = type & $export.F;\n  var IS_GLOBAL = type & $export.G;\n  var IS_STATIC = type & $export.S;\n  var IS_PROTO = type & $export.P;\n  var IS_BIND = type & $export.B;\n  var IS_WRAP = type & $export.W;\n  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});\n  var expProto = exports[PROTOTYPE];\n  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];\n  var key, own, out;\n  if (IS_GLOBAL) source = name;\n  for (key in source) {\n    // contains in native\n    own = !IS_FORCED && target && target[key] !== undefined;\n    if (own && has(exports, key)) continue;\n    // export native or passed\n    out = own ? target[key] : source[key];\n    // prevent global pollution for namespaces\n    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]\n    // bind timers to global for call from export context\n    : IS_BIND && own ? ctx(out, global)\n    // wrap global constructors for prevent change them in library\n    : IS_WRAP && target[key] == out ? (function (C) {\n      var F = function (a, b, c) {\n        if (this instanceof C) {\n          switch (arguments.length) {\n            case 0: return new C();\n            case 1: return new C(a);\n            case 2: return new C(a, b);\n          } return new C(a, b, c);\n        } return C.apply(this, arguments);\n      };\n      F[PROTOTYPE] = C[PROTOTYPE];\n      return F;\n    // make static versions for prototype methods\n    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;\n    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%\n    if (IS_PROTO) {\n      (exports.virtual || (exports.virtual = {}))[key] = out;\n      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%\n      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);\n    }\n  }\n};\n// type bitmap\n$export.F = 1;   // forced\n$export.G = 2;   // global\n$export.S = 4;   // static\n$export.P = 8;   // proto\n$export.B = 16;  // bind\n$export.W = 32;  // wrap\n$export.U = 64;  // safe\n$export.R = 128; // real proto method for `library`\nmodule.exports = $export;\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_export.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_fails.js":
/*!****************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_fails.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (e) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_fails.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_for-of.js":
/*!*****************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_for-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ctx = __webpack_require__(/*! ./_ctx */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_ctx.js\");\nvar call = __webpack_require__(/*! ./_iter-call */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_iter-call.js\");\nvar isArrayIter = __webpack_require__(/*! ./_is-array-iter */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_is-array-iter.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_an-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_to-length.js\");\nvar getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/core.get-iterator-method.js\");\nvar BREAK = {};\nvar RETURN = {};\nvar exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {\n  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);\n  var f = ctx(fn, that, entries ? 2 : 1);\n  var index = 0;\n  var length, step, iterator, result;\n  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');\n  // fast case for arrays with default iterator\n  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {\n    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);\n    if (result === BREAK || result === RETURN) return result;\n  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {\n    result = call(iterator, f, step.value, entries);\n    if (result === BREAK || result === RETURN) return result;\n  }\n};\nexports.BREAK = BREAK;\nexports.RETURN = RETURN;\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_for-of.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_global.js":
/*!*****************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_global.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nvar global = module.exports = typeof window != 'undefined' && window.Math == Math\n  ? window : typeof self != 'undefined' && self.Math == Math ? self\n  // eslint-disable-next-line no-new-func\n  : Function('return this')();\nif (typeof __g == 'number') __g = global; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_global.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_has.js":
/*!**************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_has.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var hasOwnProperty = {}.hasOwnProperty;\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_has.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_hide.js":
/*!***************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_hide.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_object-dp.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_property-desc.js\");\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_descriptors.js\") ? function (object, key, value) {\n  return dP.f(object, key, createDesc(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_hide.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_html.js":
/*!***************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_html.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var document = __webpack_require__(/*! ./_global */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_global.js\").document;\nmodule.exports = document && document.documentElement;\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_html.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*************************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = !__webpack_require__(/*! ./_descriptors */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_descriptors.js\") && !__webpack_require__(/*! ./_fails */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_fails.js\")(function () {\n  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_dom-create.js\")('div'), 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_ie8-dom-define.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_invoke.js":
/*!*****************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_invoke.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// fast apply, http://jsperf.lnkit.com/fast-apply/5\nmodule.exports = function (fn, args, that) {\n  var un = that === undefined;\n  switch (args.length) {\n    case 0: return un ? fn()\n                      : fn.call(that);\n    case 1: return un ? fn(args[0])\n                      : fn.call(that, args[0]);\n    case 2: return un ? fn(args[0], args[1])\n                      : fn.call(that, args[0], args[1]);\n    case 3: return un ? fn(args[0], args[1], args[2])\n                      : fn.call(that, args[0], args[1], args[2]);\n    case 4: return un ? fn(args[0], args[1], args[2], args[3])\n                      : fn.call(that, args[0], args[1], args[2], args[3]);\n  } return fn.apply(that, args);\n};\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_invoke.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_iobject.js":
/*!******************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_iobject.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// fallback for non-array-like ES3 and non-enumerable old V8 strings\nvar cof = __webpack_require__(/*! ./_cof */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_cof.js\");\n// eslint-disable-next-line no-prototype-builtins\nmodule.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {\n  return cof(it) == 'String' ? it.split('') : Object(it);\n};\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_iobject.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_is-array-iter.js":
/*!************************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_is-array-iter.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// check on default Array iterator\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_iterators.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_wks.js\")('iterator');\nvar ArrayProto = Array.prototype;\n\nmodule.exports = function (it) {\n  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);\n};\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_is-array-iter.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_is-object.js":
/*!********************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_is-object.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_is-object.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_iter-call.js":
/*!********************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_iter-call.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// call something on iterator step with safe closing on error\nvar anObject = __webpack_require__(/*! ./_an-object */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_an-object.js\");\nmodule.exports = function (iterator, fn, value, entries) {\n  try {\n    return entries ? fn(anObject(value)[0], value[1]) : fn(value);\n  // 7.4.6 IteratorClose(iterator, completion)\n  } catch (e) {\n    var ret = iterator['return'];\n    if (ret !== undefined) anObject(ret.call(iterator));\n    throw e;\n  }\n};\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_iter-call.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_iter-create.js":
/*!**********************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_iter-create.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar create = __webpack_require__(/*! ./_object-create */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_object-create.js\");\nvar descriptor = __webpack_require__(/*! ./_property-desc */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_property-desc.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_set-to-string-tag.js\");\nvar IteratorPrototype = {};\n\n// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()\n__webpack_require__(/*! ./_hide */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_hide.js\")(IteratorPrototype, __webpack_require__(/*! ./_wks */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_wks.js\")('iterator'), function () { return this; });\n\nmodule.exports = function (Constructor, NAME, next) {\n  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });\n  setToStringTag(Constructor, NAME + ' Iterator');\n};\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_iter-create.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_iter-define.js":
/*!**********************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_iter-define.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_library.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_redefine.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_hide.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_iterators.js\");\nvar $iterCreate = __webpack_require__(/*! ./_iter-create */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_iter-create.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_set-to-string-tag.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_object-gpo.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_wks.js\")('iterator');\nvar BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`\nvar FF_ITERATOR = '@@iterator';\nvar KEYS = 'keys';\nvar VALUES = 'values';\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {\n  $iterCreate(Constructor, NAME, next);\n  var getMethod = function (kind) {\n    if (!BUGGY && kind in proto) return proto[kind];\n    switch (kind) {\n      case KEYS: return function keys() { return new Constructor(this, kind); };\n      case VALUES: return function values() { return new Constructor(this, kind); };\n    } return function entries() { return new Constructor(this, kind); };\n  };\n  var TAG = NAME + ' Iterator';\n  var DEF_VALUES = DEFAULT == VALUES;\n  var VALUES_BUG = false;\n  var proto = Base.prototype;\n  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];\n  var $default = $native || getMethod(DEFAULT);\n  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;\n  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;\n  var methods, key, IteratorPrototype;\n  // Fix native\n  if ($anyNative) {\n    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));\n    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {\n      // Set @@toStringTag to native iterators\n      setToStringTag(IteratorPrototype, TAG, true);\n      // fix for some old engines\n      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);\n    }\n  }\n  // fix Array#{values, @@iterator}.name in V8 / FF\n  if (DEF_VALUES && $native && $native.name !== VALUES) {\n    VALUES_BUG = true;\n    $default = function values() { return $native.call(this); };\n  }\n  // Define iterator\n  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {\n    hide(proto, ITERATOR, $default);\n  }\n  // Plug for library\n  Iterators[NAME] = $default;\n  Iterators[TAG] = returnThis;\n  if (DEFAULT) {\n    methods = {\n      values: DEF_VALUES ? $default : getMethod(VALUES),\n      keys: IS_SET ? $default : getMethod(KEYS),\n      entries: $entries\n    };\n    if (FORCED) for (key in methods) {\n      if (!(key in proto)) redefine(proto, key, methods[key]);\n    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);\n  }\n  return methods;\n};\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_iter-define.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_iter-detect.js":
/*!**********************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_iter-detect.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ITERATOR = __webpack_require__(/*! ./_wks */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_wks.js\")('iterator');\nvar SAFE_CLOSING = false;\n\ntry {\n  var riter = [7][ITERATOR]();\n  riter['return'] = function () { SAFE_CLOSING = true; };\n  // eslint-disable-next-line no-throw-literal\n  Array.from(riter, function () { throw 2; });\n} catch (e) { /* empty */ }\n\nmodule.exports = function (exec, skipClosing) {\n  if (!skipClosing && !SAFE_CLOSING) return false;\n  var safe = false;\n  try {\n    var arr = [7];\n    var iter = arr[ITERATOR]();\n    iter.next = function () { return { done: safe = true }; };\n    arr[ITERATOR] = function () { return iter; };\n    exec(arr);\n  } catch (e) { /* empty */ }\n  return safe;\n};\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_iter-detect.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_iter-step.js":
/*!********************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_iter-step.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (done, value) {\n  return { value: value, done: !!done };\n};\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_iter-step.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_iterators.js":
/*!********************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_iterators.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_iterators.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_library.js":
/*!******************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_library.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = true;\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_library.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_microtask.js":
/*!********************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_microtask.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_global.js\");\nvar macrotask = __webpack_require__(/*! ./_task */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_task.js\").set;\nvar Observer = global.MutationObserver || global.WebKitMutationObserver;\nvar process = global.process;\nvar Promise = global.Promise;\nvar isNode = __webpack_require__(/*! ./_cof */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_cof.js\")(process) == 'process';\n\nmodule.exports = function () {\n  var head, last, notify;\n\n  var flush = function () {\n    var parent, fn;\n    if (isNode && (parent = process.domain)) parent.exit();\n    while (head) {\n      fn = head.fn;\n      head = head.next;\n      try {\n        fn();\n      } catch (e) {\n        if (head) notify();\n        else last = undefined;\n        throw e;\n      }\n    } last = undefined;\n    if (parent) parent.enter();\n  };\n\n  // Node.js\n  if (isNode) {\n    notify = function () {\n      process.nextTick(flush);\n    };\n  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339\n  } else if (Observer && !(global.navigator && global.navigator.standalone)) {\n    var toggle = true;\n    var node = document.createTextNode('');\n    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new\n    notify = function () {\n      node.data = toggle = !toggle;\n    };\n  // environments with maybe non-completely correct, but existent Promise\n  } else if (Promise && Promise.resolve) {\n    // Promise.resolve without an argument throws an error in LG WebOS 2\n    var promise = Promise.resolve(undefined);\n    notify = function () {\n      promise.then(flush);\n    };\n  // for other environments - macrotask based on:\n  // - setImmediate\n  // - MessageChannel\n  // - window.postMessag\n  // - onreadystatechange\n  // - setTimeout\n  } else {\n    notify = function () {\n      // strange IE + webpack dev server bug - use .call(global)\n      macrotask.call(global, flush);\n    };\n  }\n\n  return function (fn) {\n    var task = { fn: fn, next: undefined };\n    if (last) last.next = task;\n    if (!head) {\n      head = task;\n      notify();\n    } last = task;\n  };\n};\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_microtask.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_new-promise-capability.js":
/*!*********************************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_new-promise-capability.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 25.4.1.5 NewPromiseCapability(C)\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_a-function.js\");\n\nfunction PromiseCapability(C) {\n  var resolve, reject;\n  this.promise = new C(function ($$resolve, $$reject) {\n    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');\n    resolve = $$resolve;\n    reject = $$reject;\n  });\n  this.resolve = aFunction(resolve);\n  this.reject = aFunction(reject);\n}\n\nmodule.exports.f = function (C) {\n  return new PromiseCapability(C);\n};\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_new-promise-capability.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_object-create.js":
/*!************************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_object-create.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\nvar anObject = __webpack_require__(/*! ./_an-object */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_an-object.js\");\nvar dPs = __webpack_require__(/*! ./_object-dps */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_object-dps.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_enum-bug-keys.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_shared-key.js\")('IE_PROTO');\nvar Empty = function () { /* empty */ };\nvar PROTOTYPE = 'prototype';\n\n// Create object with fake `null` prototype: use iframe Object with cleared prototype\nvar createDict = function () {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = __webpack_require__(/*! ./_dom-create */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_dom-create.js\")('iframe');\n  var i = enumBugKeys.length;\n  var lt = '<';\n  var gt = '>';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  __webpack_require__(/*! ./_html */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_html.js\").appendChild(iframe);\n  iframe.src = 'javascript:'; // eslint-disable-line no-script-url\n  // createDict = iframe.contentWindow.Object;\n  // html.removeChild(iframe);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);\n  iframeDocument.close();\n  createDict = iframeDocument.F;\n  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];\n  return createDict();\n};\n\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n  if (O !== null) {\n    Empty[PROTOTYPE] = anObject(O);\n    result = new Empty();\n    Empty[PROTOTYPE] = null;\n    // add \"__proto__\" for Object.getPrototypeOf polyfill\n    result[IE_PROTO] = O;\n  } else result = createDict();\n  return Properties === undefined ? result : dPs(result, Properties);\n};\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_object-create.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_object-dp.js":
/*!********************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_object-dp.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_an-object.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_ie8-dom-define.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_to-primitive.js\");\nvar dP = Object.defineProperty;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_descriptors.js\") ? Object.defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return dP(O, P, Attributes);\n  } catch (e) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_object-dp.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_object-dps.js":
/*!*********************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_object-dps.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_object-dp.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_an-object.js\");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_object-keys.js\");\n\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_descriptors.js\") ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var keys = getKeys(Properties);\n  var length = keys.length;\n  var i = 0;\n  var P;\n  while (length > i) dP.f(O, P = keys[i++], Properties[P]);\n  return O;\n};\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_object-dps.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_object-gpo.js":
/*!*********************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_object-gpo.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)\nvar has = __webpack_require__(/*! ./_has */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_has.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_to-object.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_shared-key.js\")('IE_PROTO');\nvar ObjectProto = Object.prototype;\n\nmodule.exports = Object.getPrototypeOf || function (O) {\n  O = toObject(O);\n  if (has(O, IE_PROTO)) return O[IE_PROTO];\n  if (typeof O.constructor == 'function' && O instanceof O.constructor) {\n    return O.constructor.prototype;\n  } return O instanceof Object ? ObjectProto : null;\n};\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_object-gpo.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_object-keys-internal.js":
/*!*******************************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ./_has */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_has.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_to-iobject.js\");\nvar arrayIndexOf = __webpack_require__(/*! ./_array-includes */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_array-includes.js\")(false);\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_shared-key.js\")('IE_PROTO');\n\nmodule.exports = function (object, names) {\n  var O = toIObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~arrayIndexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_object-keys-internal.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_object-keys.js":
/*!**********************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_object-keys.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.14 / 15.2.3.14 Object.keys(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_enum-bug-keys.js\");\n\nmodule.exports = Object.keys || function keys(O) {\n  return $keys(O, enumBugKeys);\n};\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_object-keys.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_perform.js":
/*!******************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_perform.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return { e: false, v: exec() };\n  } catch (e) {\n    return { e: true, v: e };\n  }\n};\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_perform.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_promise-resolve.js":
/*!**************************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_promise-resolve.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_is-object.js\");\nvar newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_new-promise-capability.js\");\n\nmodule.exports = function (C, x) {\n  anObject(C);\n  if (isObject(x) && x.constructor === C) return x;\n  var promiseCapability = newPromiseCapability.f(C);\n  var resolve = promiseCapability.resolve;\n  resolve(x);\n  return promiseCapability.promise;\n};\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_promise-resolve.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_property-desc.js":
/*!************************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_property-desc.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_property-desc.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_redefine-all.js":
/*!***********************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_redefine-all.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var hide = __webpack_require__(/*! ./_hide */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_hide.js\");\nmodule.exports = function (target, src, safe) {\n  for (var key in src) {\n    if (safe && target[key]) target[key] = src[key];\n    else hide(target, key, src[key]);\n  } return target;\n};\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_redefine-all.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_redefine.js":
/*!*******************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_redefine.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./_hide */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_hide.js\");\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_redefine.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_set-species.js":
/*!**********************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_set-species.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(/*! ./_global */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_core.js\");\nvar dP = __webpack_require__(/*! ./_object-dp */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_object-dp.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_descriptors.js\");\nvar SPECIES = __webpack_require__(/*! ./_wks */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_wks.js\")('species');\n\nmodule.exports = function (KEY) {\n  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];\n  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {\n    configurable: true,\n    get: function () { return this; }\n  });\n};\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_set-species.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!****************************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var def = __webpack_require__(/*! ./_object-dp */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_object-dp.js\").f;\nvar has = __webpack_require__(/*! ./_has */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_has.js\");\nvar TAG = __webpack_require__(/*! ./_wks */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_wks.js\")('toStringTag');\n\nmodule.exports = function (it, tag, stat) {\n  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });\n};\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_set-to-string-tag.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_shared-key.js":
/*!*********************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_shared-key.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var shared = __webpack_require__(/*! ./_shared */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_shared.js\")('keys');\nvar uid = __webpack_require__(/*! ./_uid */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_uid.js\");\nmodule.exports = function (key) {\n  return shared[key] || (shared[key] = uid(key));\n};\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_shared-key.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_shared.js":
/*!*****************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_shared.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var core = __webpack_require__(/*! ./_core */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_core.js\");\nvar global = __webpack_require__(/*! ./_global */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_global.js\");\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || (global[SHARED] = {});\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: core.version,\n  mode: __webpack_require__(/*! ./_library */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_library.js\") ? 'pure' : 'global',\n  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'\n});\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_shared.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_species-constructor.js":
/*!******************************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_species-constructor.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.3.20 SpeciesConstructor(O, defaultConstructor)\nvar anObject = __webpack_require__(/*! ./_an-object */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_an-object.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_a-function.js\");\nvar SPECIES = __webpack_require__(/*! ./_wks */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_wks.js\")('species');\nmodule.exports = function (O, D) {\n  var C = anObject(O).constructor;\n  var S;\n  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);\n};\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_species-constructor.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_string-at.js":
/*!********************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_string-at.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ./_to-integer */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_to-integer.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_defined.js\");\n// true  -> String#at\n// false -> String#codePointAt\nmodule.exports = function (TO_STRING) {\n  return function (that, pos) {\n    var s = String(defined(that));\n    var i = toInteger(pos);\n    var l = s.length;\n    var a, b;\n    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;\n    a = s.charCodeAt(i);\n    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff\n      ? TO_STRING ? s.charAt(i) : a\n      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;\n  };\n};\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_string-at.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_task.js":
/*!***************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_task.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ctx = __webpack_require__(/*! ./_ctx */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_ctx.js\");\nvar invoke = __webpack_require__(/*! ./_invoke */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_invoke.js\");\nvar html = __webpack_require__(/*! ./_html */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_html.js\");\nvar cel = __webpack_require__(/*! ./_dom-create */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_dom-create.js\");\nvar global = __webpack_require__(/*! ./_global */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_global.js\");\nvar process = global.process;\nvar setTask = global.setImmediate;\nvar clearTask = global.clearImmediate;\nvar MessageChannel = global.MessageChannel;\nvar Dispatch = global.Dispatch;\nvar counter = 0;\nvar queue = {};\nvar ONREADYSTATECHANGE = 'onreadystatechange';\nvar defer, channel, port;\nvar run = function () {\n  var id = +this;\n  // eslint-disable-next-line no-prototype-builtins\n  if (queue.hasOwnProperty(id)) {\n    var fn = queue[id];\n    delete queue[id];\n    fn();\n  }\n};\nvar listener = function (event) {\n  run.call(event.data);\n};\n// Node.js 0.9+ & IE10+ has setImmediate, otherwise:\nif (!setTask || !clearTask) {\n  setTask = function setImmediate(fn) {\n    var args = [];\n    var i = 1;\n    while (arguments.length > i) args.push(arguments[i++]);\n    queue[++counter] = function () {\n      // eslint-disable-next-line no-new-func\n      invoke(typeof fn == 'function' ? fn : Function(fn), args);\n    };\n    defer(counter);\n    return counter;\n  };\n  clearTask = function clearImmediate(id) {\n    delete queue[id];\n  };\n  // Node.js 0.8-\n  if (__webpack_require__(/*! ./_cof */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_cof.js\")(process) == 'process') {\n    defer = function (id) {\n      process.nextTick(ctx(run, id, 1));\n    };\n  // Sphere (JS game engine) Dispatch API\n  } else if (Dispatch && Dispatch.now) {\n    defer = function (id) {\n      Dispatch.now(ctx(run, id, 1));\n    };\n  // Browsers with MessageChannel, includes WebWorkers\n  } else if (MessageChannel) {\n    channel = new MessageChannel();\n    port = channel.port2;\n    channel.port1.onmessage = listener;\n    defer = ctx(port.postMessage, port, 1);\n  // Browsers with postMessage, skip WebWorkers\n  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'\n  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {\n    defer = function (id) {\n      global.postMessage(id + '', '*');\n    };\n    global.addEventListener('message', listener, false);\n  // IE8-\n  } else if (ONREADYSTATECHANGE in cel('script')) {\n    defer = function (id) {\n      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {\n        html.removeChild(this);\n        run.call(id);\n      };\n    };\n  // Rest old browsers\n  } else {\n    defer = function (id) {\n      setTimeout(ctx(run, id, 1), 0);\n    };\n  }\n}\nmodule.exports = {\n  set: setTask,\n  clear: clearTask\n};\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_task.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_to-absolute-index.js":
/*!****************************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ./_to-integer */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_to-integer.js\");\nvar max = Math.max;\nvar min = Math.min;\nmodule.exports = function (index, length) {\n  index = toInteger(index);\n  return index < 0 ? max(index + length, 0) : min(index, length);\n};\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_to-absolute-index.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_to-integer.js":
/*!*********************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_to-integer.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 7.1.4 ToInteger\nvar ceil = Math.ceil;\nvar floor = Math.floor;\nmodule.exports = function (it) {\n  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);\n};\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_to-integer.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_to-iobject.js":
/*!*********************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_to-iobject.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// to indexed object, toObject with fallback for non-array-like ES3 strings\nvar IObject = __webpack_require__(/*! ./_iobject */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_iobject.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_defined.js\");\nmodule.exports = function (it) {\n  return IObject(defined(it));\n};\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_to-iobject.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_to-length.js":
/*!********************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_to-length.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.15 ToLength\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_to-integer.js\");\nvar min = Math.min;\nmodule.exports = function (it) {\n  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_to-length.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_to-object.js":
/*!********************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_to-object.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.13 ToObject(argument)\nvar defined = __webpack_require__(/*! ./_defined */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_defined.js\");\nmodule.exports = function (it) {\n  return Object(defined(it));\n};\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_to-object.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_to-primitive.js":
/*!***********************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_to-primitive.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.1 ToPrimitive(input [, PreferredType])\nvar isObject = __webpack_require__(/*! ./_is-object */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_is-object.js\");\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (it, S) {\n  if (!isObject(it)) return it;\n  var fn, val;\n  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_to-primitive.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_uid.js":
/*!**************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_uid.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var id = 0;\nvar px = Math.random();\nmodule.exports = function (key) {\n  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));\n};\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_uid.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_user-agent.js":
/*!*********************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_user-agent.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_global.js\");\nvar navigator = global.navigator;\n\nmodule.exports = navigator && navigator.userAgent || '';\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_user-agent.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/_wks.js":
/*!**************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/_wks.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var store = __webpack_require__(/*! ./_shared */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_shared.js\")('wks');\nvar uid = __webpack_require__(/*! ./_uid */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_uid.js\");\nvar Symbol = __webpack_require__(/*! ./_global */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_global.js\").Symbol;\nvar USE_SYMBOL = typeof Symbol == 'function';\n\nvar $exports = module.exports = function (name) {\n  return store[name] || (store[name] =\n    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));\n};\n\n$exports.store = store;\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/_wks.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!**********************************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ./_classof */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_classof.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_wks.js\")('iterator');\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_iterators.js\");\nmodule.exports = __webpack_require__(/*! ./_core */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_core.js\").getIteratorMethod = function (it) {\n  if (it != undefined) return it[ITERATOR]\n    || it['@@iterator']\n    || Iterators[classof(it)];\n};\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/core.get-iterator-method.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/es6.array.iterator.js":
/*!****************************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_add-to-unscopables.js\");\nvar step = __webpack_require__(/*! ./_iter-step */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_iter-step.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_iterators.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_to-iobject.js\");\n\n// 22.1.3.4 Array.prototype.entries()\n// 22.1.3.13 Array.prototype.keys()\n// 22.1.3.29 Array.prototype.values()\n// 22.1.3.30 Array.prototype[@@iterator]()\nmodule.exports = __webpack_require__(/*! ./_iter-define */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_iter-define.js\")(Array, 'Array', function (iterated, kind) {\n  this._t = toIObject(iterated); // target\n  this._i = 0;                   // next index\n  this._k = kind;                // kind\n// 22.1.5.2.1 %ArrayIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var kind = this._k;\n  var index = this._i++;\n  if (!O || index >= O.length) {\n    this._t = undefined;\n    return step(1);\n  }\n  if (kind == 'keys') return step(0, index);\n  if (kind == 'values') return step(0, O[index]);\n  return step(0, [index, O[index]]);\n}, 'values');\n\n// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)\nIterators.Arguments = Iterators.Array;\n\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries');\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/es6.array.iterator.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/es6.object.define-property.js":
/*!************************************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_export.js\");\n// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)\n$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_descriptors.js\"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_object-dp.js\").f });\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/es6.object.define-property.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/es6.object.to-string.js":
/*!******************************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/es6.object.to-string.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/es6.promise.js":
/*!*********************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/es6.promise.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_library.js\");\nvar global = __webpack_require__(/*! ./_global */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_global.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_ctx.js\");\nvar classof = __webpack_require__(/*! ./_classof */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_classof.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_export.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_is-object.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_a-function.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_an-instance.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_for-of.js\");\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_species-constructor.js\");\nvar task = __webpack_require__(/*! ./_task */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_task.js\").set;\nvar microtask = __webpack_require__(/*! ./_microtask */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_microtask.js\")();\nvar newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_new-promise-capability.js\");\nvar perform = __webpack_require__(/*! ./_perform */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_perform.js\");\nvar userAgent = __webpack_require__(/*! ./_user-agent */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_user-agent.js\");\nvar promiseResolve = __webpack_require__(/*! ./_promise-resolve */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_promise-resolve.js\");\nvar PROMISE = 'Promise';\nvar TypeError = global.TypeError;\nvar process = global.process;\nvar versions = process && process.versions;\nvar v8 = versions && versions.v8 || '';\nvar $Promise = global[PROMISE];\nvar isNode = classof(process) == 'process';\nvar empty = function () { /* empty */ };\nvar Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;\nvar newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;\n\nvar USE_NATIVE = !!function () {\n  try {\n    // correct subclassing with @@species support\n    var promise = $Promise.resolve(1);\n    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_wks.js\")('species')] = function (exec) {\n      exec(empty, empty);\n    };\n    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test\n    return (isNode || typeof PromiseRejectionEvent == 'function')\n      && promise.then(empty) instanceof FakePromise\n      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables\n      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565\n      // we can't detect it synchronously, so just check versions\n      && v8.indexOf('6.6') !== 0\n      && userAgent.indexOf('Chrome/66') === -1;\n  } catch (e) { /* empty */ }\n}();\n\n// helpers\nvar isThenable = function (it) {\n  var then;\n  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;\n};\nvar notify = function (promise, isReject) {\n  if (promise._n) return;\n  promise._n = true;\n  var chain = promise._c;\n  microtask(function () {\n    var value = promise._v;\n    var ok = promise._s == 1;\n    var i = 0;\n    var run = function (reaction) {\n      var handler = ok ? reaction.ok : reaction.fail;\n      var resolve = reaction.resolve;\n      var reject = reaction.reject;\n      var domain = reaction.domain;\n      var result, then, exited;\n      try {\n        if (handler) {\n          if (!ok) {\n            if (promise._h == 2) onHandleUnhandled(promise);\n            promise._h = 1;\n          }\n          if (handler === true) result = value;\n          else {\n            if (domain) domain.enter();\n            result = handler(value); // may throw\n            if (domain) {\n              domain.exit();\n              exited = true;\n            }\n          }\n          if (result === reaction.promise) {\n            reject(TypeError('Promise-chain cycle'));\n          } else if (then = isThenable(result)) {\n            then.call(result, resolve, reject);\n          } else resolve(result);\n        } else reject(value);\n      } catch (e) {\n        if (domain && !exited) domain.exit();\n        reject(e);\n      }\n    };\n    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach\n    promise._c = [];\n    promise._n = false;\n    if (isReject && !promise._h) onUnhandled(promise);\n  });\n};\nvar onUnhandled = function (promise) {\n  task.call(global, function () {\n    var value = promise._v;\n    var unhandled = isUnhandled(promise);\n    var result, handler, console;\n    if (unhandled) {\n      result = perform(function () {\n        if (isNode) {\n          process.emit('unhandledRejection', value, promise);\n        } else if (handler = global.onunhandledrejection) {\n          handler({ promise: promise, reason: value });\n        } else if ((console = global.console) && console.error) {\n          console.error('Unhandled promise rejection', value);\n        }\n      });\n      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should\n      promise._h = isNode || isUnhandled(promise) ? 2 : 1;\n    } promise._a = undefined;\n    if (unhandled && result.e) throw result.v;\n  });\n};\nvar isUnhandled = function (promise) {\n  return promise._h !== 1 && (promise._a || promise._c).length === 0;\n};\nvar onHandleUnhandled = function (promise) {\n  task.call(global, function () {\n    var handler;\n    if (isNode) {\n      process.emit('rejectionHandled', promise);\n    } else if (handler = global.onrejectionhandled) {\n      handler({ promise: promise, reason: promise._v });\n    }\n  });\n};\nvar $reject = function (value) {\n  var promise = this;\n  if (promise._d) return;\n  promise._d = true;\n  promise = promise._w || promise; // unwrap\n  promise._v = value;\n  promise._s = 2;\n  if (!promise._a) promise._a = promise._c.slice();\n  notify(promise, true);\n};\nvar $resolve = function (value) {\n  var promise = this;\n  var then;\n  if (promise._d) return;\n  promise._d = true;\n  promise = promise._w || promise; // unwrap\n  try {\n    if (promise === value) throw TypeError(\"Promise can't be resolved itself\");\n    if (then = isThenable(value)) {\n      microtask(function () {\n        var wrapper = { _w: promise, _d: false }; // wrap\n        try {\n          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));\n        } catch (e) {\n          $reject.call(wrapper, e);\n        }\n      });\n    } else {\n      promise._v = value;\n      promise._s = 1;\n      notify(promise, false);\n    }\n  } catch (e) {\n    $reject.call({ _w: promise, _d: false }, e); // wrap\n  }\n};\n\n// constructor polyfill\nif (!USE_NATIVE) {\n  // 25.4.3.1 Promise(executor)\n  $Promise = function Promise(executor) {\n    anInstance(this, $Promise, PROMISE, '_h');\n    aFunction(executor);\n    Internal.call(this);\n    try {\n      executor(ctx($resolve, this, 1), ctx($reject, this, 1));\n    } catch (err) {\n      $reject.call(this, err);\n    }\n  };\n  // eslint-disable-next-line no-unused-vars\n  Internal = function Promise(executor) {\n    this._c = [];             // <- awaiting reactions\n    this._a = undefined;      // <- checked in isUnhandled reactions\n    this._s = 0;              // <- state\n    this._d = false;          // <- done\n    this._v = undefined;      // <- value\n    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled\n    this._n = false;          // <- notify\n  };\n  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_redefine-all.js\")($Promise.prototype, {\n    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)\n    then: function then(onFulfilled, onRejected) {\n      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));\n      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;\n      reaction.fail = typeof onRejected == 'function' && onRejected;\n      reaction.domain = isNode ? process.domain : undefined;\n      this._c.push(reaction);\n      if (this._a) this._a.push(reaction);\n      if (this._s) notify(this, false);\n      return reaction.promise;\n    },\n    // 25.4.5.1 Promise.prototype.catch(onRejected)\n    'catch': function (onRejected) {\n      return this.then(undefined, onRejected);\n    }\n  });\n  OwnPromiseCapability = function () {\n    var promise = new Internal();\n    this.promise = promise;\n    this.resolve = ctx($resolve, promise, 1);\n    this.reject = ctx($reject, promise, 1);\n  };\n  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {\n    return C === $Promise || C === Wrapper\n      ? new OwnPromiseCapability(C)\n      : newGenericPromiseCapability(C);\n  };\n}\n\n$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });\n__webpack_require__(/*! ./_set-to-string-tag */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_set-to-string-tag.js\")($Promise, PROMISE);\n__webpack_require__(/*! ./_set-species */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_set-species.js\")(PROMISE);\nWrapper = __webpack_require__(/*! ./_core */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_core.js\")[PROMISE];\n\n// statics\n$export($export.S + $export.F * !USE_NATIVE, PROMISE, {\n  // 25.4.4.5 Promise.reject(r)\n  reject: function reject(r) {\n    var capability = newPromiseCapability(this);\n    var $$reject = capability.reject;\n    $$reject(r);\n    return capability.promise;\n  }\n});\n$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {\n  // 25.4.4.6 Promise.resolve(x)\n  resolve: function resolve(x) {\n    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);\n  }\n});\n$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_iter-detect.js\")(function (iter) {\n  $Promise.all(iter)['catch'](empty);\n})), PROMISE, {\n  // 25.4.4.1 Promise.all(iterable)\n  all: function all(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var resolve = capability.resolve;\n    var reject = capability.reject;\n    var result = perform(function () {\n      var values = [];\n      var index = 0;\n      var remaining = 1;\n      forOf(iterable, false, function (promise) {\n        var $index = index++;\n        var alreadyCalled = false;\n        values.push(undefined);\n        remaining++;\n        C.resolve(promise).then(function (value) {\n          if (alreadyCalled) return;\n          alreadyCalled = true;\n          values[$index] = value;\n          --remaining || resolve(values);\n        }, reject);\n      });\n      --remaining || resolve(values);\n    });\n    if (result.e) reject(result.v);\n    return capability.promise;\n  },\n  // 25.4.4.4 Promise.race(iterable)\n  race: function race(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var reject = capability.reject;\n    var result = perform(function () {\n      forOf(iterable, false, function (promise) {\n        C.resolve(promise).then(capability.resolve, reject);\n      });\n    });\n    if (result.e) reject(result.v);\n    return capability.promise;\n  }\n});\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/es6.promise.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*****************************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $at = __webpack_require__(/*! ./_string-at */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_string-at.js\")(true);\n\n// 21.1.3.27 String.prototype[@@iterator]()\n__webpack_require__(/*! ./_iter-define */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_iter-define.js\")(String, 'String', function (iterated) {\n  this._t = String(iterated); // target\n  this._i = 0;                // next index\n// 21.1.5.2.1 %StringIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var index = this._i;\n  var point;\n  if (index >= O.length) return { value: undefined, done: true };\n  point = $at(O, index);\n  this._i += point.length;\n  return { value: point, done: false };\n});\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/es6.string.iterator.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/es7.promise.finally.js":
/*!*****************************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/es7.promise.finally.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// https://github.com/tc39/proposal-promise-finally\n\nvar $export = __webpack_require__(/*! ./_export */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_export.js\");\nvar core = __webpack_require__(/*! ./_core */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_core.js\");\nvar global = __webpack_require__(/*! ./_global */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_global.js\");\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_species-constructor.js\");\nvar promiseResolve = __webpack_require__(/*! ./_promise-resolve */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_promise-resolve.js\");\n\n$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {\n  var C = speciesConstructor(this, core.Promise || global.Promise);\n  var isFunction = typeof onFinally == 'function';\n  return this.then(\n    isFunction ? function (x) {\n      return promiseResolve(C, onFinally()).then(function () { return x; });\n    } : onFinally,\n    isFunction ? function (e) {\n      return promiseResolve(C, onFinally()).then(function () { throw e; });\n    } : onFinally\n  );\n} });\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/es7.promise.finally.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/es7.promise.try.js":
/*!*************************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/es7.promise.try.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/tc39/proposal-promise-try\nvar $export = __webpack_require__(/*! ./_export */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_export.js\");\nvar newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_new-promise-capability.js\");\nvar perform = __webpack_require__(/*! ./_perform */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_perform.js\");\n\n$export($export.S, 'Promise', { 'try': function (callbackfn) {\n  var promiseCapability = newPromiseCapability.f(this);\n  var result = perform(callbackfn);\n  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);\n  return promiseCapability.promise;\n} });\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/es7.promise.try.js?");

/***/ }),

/***/ "../kgp_meter/frontend/node_modules/core-js/library/modules/web.dom.iterable.js":
/*!**************************************************************************************!*\
  !*** ../kgp_meter/frontend/node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./es6.array.iterator */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/es6.array.iterator.js\");\nvar global = __webpack_require__(/*! ./_global */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_global.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_hide.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_iterators.js\");\nvar TO_STRING_TAG = __webpack_require__(/*! ./_wks */ \"../kgp_meter/frontend/node_modules/core-js/library/modules/_wks.js\")('toStringTag');\n\nvar DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +\n  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +\n  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +\n  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +\n  'TextTrackList,TouchList').split(',');\n\nfor (var i = 0; i < DOMIterables.length; i++) {\n  var NAME = DOMIterables[i];\n  var Collection = global[NAME];\n  var proto = Collection && Collection.prototype;\n  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);\n  Iterators[NAME] = Iterators.Array;\n}\n\n\n//# sourceURL=webpack:///../kgp_meter/frontend/node_modules/core-js/library/modules/web.dom.iterable.js?");

/***/ })

/******/ });