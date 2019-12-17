"use strict";

/* NodeList polyfill for IE11: not included in Babel (->?!?) */

var languageLoader = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(lng) {
    var translation;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(LANGUAGE_FILES_URL + lng + ".json");

          case 2:
            translation = _context.sent;

            if (!(translation.status == 200)) {
              _context.next = 10;
              break;
            }

            _context.next = 6;
            return translation.json();

          case 6:
            translation = _context.sent;
            return _context.abrupt('return', translation);

          case 10:
            throw {
              message: 'loading of translation "' + lng + '" failed',
              lng: lng,
              response: translation
            };

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function languageLoader(_x) {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

if ('NodeList' in window && !NodeList.prototype.forEach) {
  console.info('polyfill for IE11');
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

var kgp = void 0;

var ftree = 0;
var resp = void 0;
var gedData = 0;

// FTA
// privacy_bar.js
var privacyWordedScore = void 0;
var privacyBackendStatus = void 0;
var privacyScoreNumberExplainer = void 0;
var kgpMeterScoreRequestHandler = void 0;
// surveys.js
var kgpsurvey = void 0;

// languageLoader and i18n object: Internationalisation
var LANGUAGE_FILES_URL = "./i18n/";


function onChangeLanguage(oldLng, newLng) {
  cookie.create("lng", newLng, 30);
  // ensure external links target is blank to open them in a new page. Timeout, otherwise doesn't work
  setTimeout(function () {
    d3.selectAll(".ext-link").attr("target", "blank");
  }, 1);
}

var i18n = new Internationalisation(["en", "fr", "de", "it", "es"], languageLoader, cookie.read("lng"), true);
i18n.languageChangeCallbacks.push(onChangeLanguage);
i18n.observe(document);
//i18n.dynamic["cookie-text"] = (t,d) => t.replace("{#1}",Boolean(document.URL.match(/\/privacy-dev\//))? "/privacy-dev" : "/privacy")


//constructor(api_base_url, svgId, youNodeId, i18n, maxFamilyTreeDepth=5, cookieLocalStoragePrefix="kgpmeter-"){
kgp = new KinGenomicPrivacyMeter("", "svg-kin-genomics-privacy-app", "@I1@", i18n);

//initSurvey()


kgp.mobileBlock();
kgp.IEBlock();