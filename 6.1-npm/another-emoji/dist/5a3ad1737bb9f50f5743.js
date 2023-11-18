function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e7) { throw _e7; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e8) { didErr = true; err = _e8; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * lc_emoji_picker.js - Fancy emoji picker for text inputs and textareas
 * Version: 1.1.1
 * Author: Luca Montanari (LCweb)
 * Website: https://lcweb.it
 * Licensed under the MIT license
 */

!function () {
  "use strict";

  if (void 0 !== window.lc_emoji_picker) return !1;
  var e = !1,
    t = null,
    n = null,
    i = null,
    o = null,
    c = {};
  var r = {
      "smileys--people": "😀",
      "animals--nature": "🐇",
      "travel--places": "🚘",
      activities: "⚽",
      objects: "🎧",
      symbols: "🈶",
      flags: "🚩"
    },
    l = {
      picker_trigger: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path d="M12.5,0A12.5,12.5,0,1,0,25,12.5,12.52,12.52,0,0,0,12.5,0ZM23,12.5A10.5,10.5,0,1,1,12.5,2,10.5,10.5,0,0,1,23,12.5Z"/><path d="M17.79,15h0a1.1,1.1,0,0,0-1.34.12,4,4,0,0,0-.3.28l-.06.05a4.83,4.83,0,0,1-.42.37,5.06,5.06,0,0,1-5.41.57,5.12,5.12,0,0,1-1.61-1.19A1.14,1.14,0,1,0,7,16.75a7.36,7.36,0,0,0,5.49,2.37h.63a3.15,3.15,0,0,0,.37,0A7.41,7.41,0,0,0,18,16.74a1.34,1.34,0,0,0,.32-.58A1.09,1.09,0,0,0,17.79,15Z"/><path d="M7.44,10.18l0-.19c0-.15.1-.34.48-.47a1.1,1.1,0,0,1,1,.09.61.61,0,0,1,.31.51,1,1,0,0,0,1,.88h.08a1,1,0,0,0,1-1.06A2.84,2.84,0,0,0,8.26,7.5L8,7.53a4.85,4.85,0,0,0-.53.08A2.64,2.64,0,0,0,5.33,9.94a1,1,0,0,0,1,1.06A1.07,1.07,0,0,0,7.44,10.18Z"/><path d="M16.56,7.51h0A3,3,0,0,0,14,8.89a1.78,1.78,0,0,0-.3,1.31,1,1,0,0,0,1,.8,1.06,1.06,0,0,0,1-.7,1.7,1.7,0,0,0,.06-.31.69.69,0,0,1,.58-.5,1.07,1.07,0,0,1,1,.23.6.6,0,0,1,.17.4,1,1,0,0,0,1.15.87,1,1,0,0,0,1-1.06C19.62,8.55,18.27,7.51,16.56,7.51Z"/></svg>',
      trigger_position: {
        top: "5px",
        right: "5px"
      },
      trigger_size: {
        height: "22px",
        width: "22px"
      },
      target_r_padding: 27,
      emoji_json_url: "https://raw.githubusercontent.com/LCweb-ita/LC-emoji-picker/master/emoji-list.min.json",
      trigger_title: "insert emoji",
      labels: ["insert emoji", "search emoji", ".. no results .."],
      selection_callback: null
    };
  document.addEventListener("click", function (e) {
    var t = document.querySelector("#lc-emoji-picker.lcep-shown");
    if (!t || e.target.classList.contains("lcep-trigger")) return !0;
    var _iterator = _createForOfIteratorHelper(document.getElementsByClassName("lcep-trigger")),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _t = _step.value;
        if (_t.contains(e.target)) return !0;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return t.contains(e.target) || e.target.classList.contains("lcep-shown") || (t.classList.remove("lcep-shown"), i = null, o = null), !0;
  }), window.addEventListener("resize", function (e) {
    var n = document.querySelector("#lc-emoji-picker.lcep-shown");
    return !n || t == window.innerWidth || (n.classList.remove("lcep-shown"), i = null, o = null, !0);
  }), window.lc_emoji_picker = function (a) {
    var p = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return this.attachTo = a, this.attachTo ? "object" != _typeof(p) ? console.error("Options must be an object") : (p = Object.assign({}, l, p), this.init = function () {
      var _this = this;
      var t = this;
      if (n || (this.generate_style(), n = !0), "object" != _typeof(e)) return document.addEventListener("DOMContentLoaded", function () {
        _this.fetch_emoji_data();
      }), !0;
      s(a).forEach(function (e) {
        "TEXTAREA" != e.tagName && "INPUT" != e.tagName || "INPUT" == e.tagName && "text" != e.getAttribute("type") || e.parentNode.classList.length && e.parentNode.classList.contains("lcep-el-wrap") || (t.append_emoji_picker(), t.wrap_element(e), document.querySelector(".lcep-search input").addEventListener("keyup", function (e) {
          t.emoji_search(e);
        }));
      });
    }, this.emoji_search = function (e) {
      var t = e.target.parentNode,
        n = e.target.value,
        i = document.querySelectorAll("#lc-emoji-picker .lcep-category"),
        o = document.querySelectorAll("#lc-emoji-picker .lcep-all-categories li");
      if (n.length < 2) {
        var _iterator2 = _createForOfIteratorHelper(o),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _e = _step2.value;
            _e.classList.remove("lcep-hidden-emoji"), t.classList.remove("lcep-searching");
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      } else {
        var _iterator3 = _createForOfIteratorHelper(o),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _e2 = _step3.value;
            _e2.getAttribute("data-name").match(n) ? _e2.classList.remove("lcep-hidden-emoji") : _e2.classList.add("lcep-hidden-emoji");
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        t.classList.add("lcep-searching");
      }
      var _iterator4 = _createForOfIteratorHelper(i),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _e3 = _step4.value;
          _e3.querySelectorAll("li:not(.lcep-hidden-emoji)").length ? _e3.classList.remove("lcep-hidden-emoji-cat") : _e3.classList.add("lcep-hidden-emoji-cat");
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      document.querySelectorAll(".lcep-all-categories ul:not(.lcep-hidden-emoji-cat)").length ? document.querySelector(".lcep-no-results") && document.querySelector(".lcep-no-results").remove() : document.querySelector(".lcep-no-results") || document.querySelector(".lcep-all-categories").insertAdjacentHTML("beforeend", '<em class="lcep-no-results">' + p.labels[2] + "</em>");
    }, this.clear_search = function () {
      var e = document.querySelector(".lcep-search input");
      e.value = "", e.dispatchEvent(new Event("keyup"));
    }, this.go_to_emoji_cat = function (e, t) {
      var n = document.querySelector(".lcep-category[category-name='" + t + "']").offsetTop;
      document.querySelector(".lcep-all-categories").scrollTop = n - 100, document.querySelector("li.lcep-active").classList.remove("lcep-active"), e.classList.add("lcep-active");
    }, this.cat_waypoints_check = function () {
      if (!document.querySelector(".lcep-shown")) return !0;
      var e = document.querySelector(".lcep-all-categories").scrollTop,
        t = Object.keys(c);
      t.sort().reverse();
      var n = t[0];
      for (var _i = 0, _t2 = t; _i < _t2.length; _i++) {
        var _i2 = _t2[_i];
        if (e >= parseInt(_i2, 10)) {
          n = _i2;
          break;
        }
      }
      var i = c[n];
      document.querySelector("li.lcep-active").classList.remove("lcep-active"), document.querySelector(".lcep-categories li[data-index='" + i + "']").classList.add("lcep-active");
    }, this.reset_picker = function () {
      document.querySelector(".lcep-search i").click(), document.querySelector(".lcep-categories li").click();
    }, this.show_picker = function (e) {
      var n = document.getElementById("lc-emoji-picker");
      if (t = window.innerWidth, e == i) return n.classList.remove("lcep-shown"), i = null, o = null, !1;
      this.reset_picker(), i = e, o = p.selection_callback;
      var c = n.offsetWidth,
        r = n.offsetHeight,
        l = i.getBoundingClientRect(),
        s = parseInt(i.clientHeight, 10) + parseInt(getComputedStyle(i).borderTopWidth, 10) + parseInt(getComputedStyle(i).borderBottomWidth, 10),
        a = parseInt(l.y, 10) + parseInt(window.pageYOffset, 10) + s + 5;
      var d = parseInt(l.right, 10) - c;
      d < 0 && (d = 0), window.innerWidth < 700 && (d = Math.floor((window.innerWidth - c) / 2));
      var g = a + r - document.documentElement.scrollTop < window.innerHeight ? "top:" + a : "transform: translate3d(0, calc((100% + " + (i.offsetHeight + 10) + "px) * -1), 0); top:" + a;
      n.setAttribute("style", g + "px; left: " + d + "px;"), n.classList.add("lcep-shown");
    }, this.emoji_select = function (e) {
      var t = i.parentNode.querySelector("input, textarea"),
        n = e.getElementsByTagName("IMG").length ? e.getElementsByTagName("IMG")[0].getAttribute("alt") : e.innerText;
      t.value = t.value + n, o && "function" == typeof o && o.call(this, e, t);
    }, this.wrap_element = function (e) {
      var _this2 = this;
      var t = Math.random().toString(36).substr(2, 9);
      var n = "";
      var i = _objectSpread(_objectSpread({}, p.trigger_position), p.trigger_size);
      Object.keys(i).some(function (e) {
        n += e + ":" + i[e] + ";";
      });
      var o = document.createElement("div");
      o.setAttribute("data-f-name", e.getAttribute("name")), o.classList.add("lcep-el-wrap"), o.innerHTML = '<span id="' + t + '" class="lcep-trigger" style="' + n + '" title="' + p.labels[0] + '">' + p.picker_trigger + "</span>", e.parentNode.insertBefore(o, e), o.appendChild(e);
      var c = document.getElementById(t);
      c.addEventListener("click", function (e) {
        _this2.show_picker(c);
      });
    }, this.fetch_emoji_data = function () {
      var _this3 = this;
      if ("object" == _typeof(e)) return this.init(), !0;
      if ("loading" == e) {
        var _e4 = this;
        return setTimeout(function () {
          _e4.fetch_emoji_data();
        }, 50), !0;
      }
      e = "loading", fetch(p.emoji_json_url).then(function (e) {
        return e.json();
      }).then(function (t) {
        e = t, _this3.init();
      }).catch(function (t) {
        e = !1;
      });
    }, this.append_emoji_picker = function () {
      var _this4 = this;
      if (document.getElementById("lc-emoji-picker")) return !0;
      var t = "\n            <div id=\"lc-emoji-picker\">\n                <div class=\"lcep-categories\">%categories%\n                    <div class=\"lcep-search\">\n                        <input placeholder=\"".concat(p.labels[1], "\" />\n                        <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512.005 512.005\" xml:space=\"preserve\"><g><g><path d=\"M505.749,475.587l-145.6-145.6c28.203-34.837,45.184-79.104,45.184-127.317c0-111.744-90.923-202.667-202.667-202.667S0,90.925,0,202.669s90.923,202.667,202.667,202.667c48.213,0,92.48-16.981,127.317-45.184l145.6,145.6c4.16,4.16,9.621,6.251,15.083,6.251s10.923-2.091,15.083-6.251C514.091,497.411,514.091,483.928,505.749,475.587z M202.667,362.669c-88.235,0-160-71.765-160-160s71.765-160,160-160s160,71.765,160,160S290.901,362.669,202.667,362.669z\"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>\n                        <i>\xD7</i>\n                    </div>\n                </div>\n                <div>%pickerContainer%</div>\n            </div>"),
        n = "",
        i = '<div class="lcep-all-categories">%outerUL%</div>',
        o = "",
        l = 0,
        s = e;
      for (var _e5 in s) if (s.hasOwnProperty(_e5)) {
        l++;
        var _t3 = _e5.split(" ").join("-").split("&").join("").toLowerCase();
        var _i3 = s[_e5];
        n += "\n                    <li class=\"".concat(1 === l ? "lcep-active" : "", "\" data-index=\"").concat(_t3, "\" title=\"").concat(_e5, "\">\n                        <a href=\"javascript:void(0)\">").concat(r[_t3], "</a>\n                    </li>"), o += "\n                    <ul class=\"lcep-category\" category-name=\"".concat(_t3, "\">\n                        <div class=\"lcep-container-title\">").concat(_e5, "</div>\n                        <div class=\"lcep-grid\">"), _i3.forEach(function (e) {
          o += "\n                                <li data-name=\"".concat(e.description.toLowerCase(), "\">\n                                    <a class=\"lcep-item\" title=\"").concat(e.description, "\" data-name=\"").concat(e.description.toLowerCase(), "\" data-code=\"").concat(e.code, "\" href=\"javascript:void(0)\">").concat(e.emoji, "</a>\n                                </li>");
        }), o += "\n                        </div>\n                    </ul>";
      }
      var a = i.replace("%outerUL%", o),
        d = "<ul>%categories%</ul>".replace("%categories%", n);
      t = t.replace("%pickerContainer%", a).replace("%categories%", d), document.body.insertAdjacentHTML("beforeend", t);
      var _iterator5 = _createForOfIteratorHelper(document.querySelectorAll(".lcep-categories li")),
        _step5;
      try {
        var _loop = function _loop() {
          var e = _step5.value;
          e.addEventListener("click", function (t) {
            _this4.go_to_emoji_cat(e, e.getAttribute("data-index"));
          });
        };
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      var _iterator6 = _createForOfIteratorHelper(document.querySelectorAll(".lcep-container-title")),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _e6 = _step6.value;
          c[_e6.offsetTop - 112] = _e6.parentNode.getAttribute("category-name");
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      var g = !1;
      document.querySelector(".lcep-all-categories").addEventListener("scroll", function () {
        g && clearTimeout(g), g = setTimeout(function () {
          _this4.cat_waypoints_check();
        }, 50);
      }), document.querySelector(".lcep-search i").addEventListener("click", function (e) {
        _this4.clear_search();
      });
      var _iterator7 = _createForOfIteratorHelper(document.querySelectorAll(".lcep-all-categories li")),
        _step7;
      try {
        var _loop2 = function _loop2() {
          var e = _step7.value;
          e.addEventListener("click", function (t) {
            _this4.emoji_select(e);
          });
        };
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          _loop2();
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
    }, this.generate_style = function () {
      document.head.insertAdjacentHTML("beforeend", "<style>\n.lcep-el-wrap {\n    position: relative;\n}\n.lcep-el-wrap > textarea,\n.lcep-el-wrap > input {\n    padding-right: ".concat(p.target_r_padding, "px;\n}\n.lcep-trigger {\n    display: inline-block;\n    position: absolute;\n    cursor: pointer;\n}\n.lcep-trigger svg {\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    border: 2px solid transparent;\n    opacity: 0.8;\n    fill: #282828;\n    transition: all .15s ease;\n}\n.lcep-trigger svg:hover {\n    fill: #202020;\n}\n#lc-emoji-picker,\n#lc-emoji-picker * {\n    box-sizing: border-box;\n}\n#lc-emoji-picker {\n    visibility: hidden;\n    z-index: -100;\n    opacity: 0;\n    position: absolute;\n    top: -9999px;\n    z-index: 999;\n    width: 280px;\n    min-height: 320px;\n    background: #fff;\n    box-shadow: 0px 2px 13px -2px rgba(0, 0, 0, 0.18);\n    border-radius: 6px;\n    overflow: hidden;\n    border: 1px solid #ccc;\n    transform: scale(0.85);\n    transition: opacity .2s ease, transform .2s ease;\n}\n#lc-emoji-picker.lcep-shown {\n    visibility: visible;\n    z-index: 999;\n    transform: none;\n    opacity: 1;\n\n}\n#lc-emoji-picker .lcep-all-categories {\n    height: 260px;\n    overflow-y: auto;\n    padding: 0 5px 20px 10px;\n}\n#lc-emoji-picker .lcep-category:not(:first-child) {\n    margin-top: 22px;\n}\n#lc-emoji-picker .lcep-container-title {\n    color: black;\n    margin: 10px 0;\n    text-indent: 10px;\n    font-size: 13px;\n    font-weight: bold;\n}\n#lc-emoji-picker * {\n    margin: 0;\n    padding: 0;\n    text-decoration: none;\n    color: #666;\n    font-family: sans-serif;\n    user-select: none;\n    -webkit-tap-highlight-color:  rgba(255, 255, 255, 0); \n}\n.lcep ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n.lcep-grid {\n    display: flex;\n    flex-wrap: wrap;\n}\n.lcep-grid > li {\n    cursor: pointer;\n    flex: 0 0 calc(100% / 6);\n    max-width: calc(100% / 6);\n    height: 41px;\n    min-width: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: #fff;\n    border-radius: 2px;\n    transition: all .2s ease;\n}\n.lcep-grid > li:hover {\n    background: #99c9ef;\n}\nul.lcep-hidden-emoji-cat,\n.lcep-grid > li.lcep-hidden-emoji {\n    display: none;\n}\n.lcep-grid > li > a {\n    display: block;\n    font-size: 21px;\n    margin: 0;\n    padding: 22px 0px;\n    line-height: 0;\n}\n.lcep-categories ul {\n    display: flex;\n    flex-wrap: wrap;\n    list-style: none;\n}\n.lcep-categories li {\n    transition: all .3s ease;\n    flex: 0 0 calc(100% / 7);\n    display: flex;\n    max-width: calc(100% / 7);\n}\n.lcep-categories li.lcep-active {\n    box-shadow: 0 -3px 0 #48a6f0 inset;\n}\n.lcep-categories a {\n    padding: 7px !important;\n    font-size: 19px;\n    height: 42px;\n    display: flex;\n    text-align: center;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    filter: grayscale(100%) contrast(150%);\n}\n.lcep-categories a:before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: rgba(255, 255, 255, .2);\n    cursor: pointer;\n    transition: background .25s ease;\n}\n.lcep-categories li:not(.lcep-active):hover a:before {\n    background: rgba(255, 255, 255, .4);\n}\n.lcep-search {\n    position: relative;\n    border-top: 1px solid #ddd;\n    padding: 10px 6px !important;\n}\n.lcep-search input {\n    width: 100%;\n    border: none;\n    padding: 8px 30px 8px 10px !important;\n    outline: none;\n    background: #fff;\n    font-size: 13px;\n    color: #616161;\n    border: 2px solid #ddd;\n    height: 30px;\n    border-radius: 25px; \n    user-select: auto !important;\n}\n.lcep-search svg,\n.lcep-search i {\n    width: 14px;\n    height: 14px;\n    position: absolute;\n    right: 16px;\n    top: 18px;\n    fill: #444;\n    cursor: pointer;\n}\n.lcep-search i {\n    color: #444;\n    font-size: 22px;\n    font-family: arial;\n    line-height: 14px;\n    transition: opacity .15s ease;\n}\n.lcep-search i:hover {\n    opacity: .8;\n}\n.lcep-searching svg,\n.lcep-search:not(.lcep-searching) i {\n    display: none;\n}\n#lc-emoji-picker img.emoji {\n    min-width: 23px;\n    height: auto !important;\n}\n#lc-emoji-picker .lcep-no-results {\n\tfont-size: 90%;\n\tdisplay: block;\n\ttext-align: center;\n\tmargin-top: 1em;\n}\n</style>"));
    }, void this.init()) : console.error("You must provide a valid selector string first argument");
  };
  var s = function s(e) {
    if ("string" != typeof e) {
      if (e instanceof Element) return [e];
      {
        var _t4 = [];
        var _iterator8 = _createForOfIteratorHelper(e),
          _step8;
        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var _n = _step8.value;
            _n instanceof Element && _t4.push(_n);
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
        return _t4;
      }
    }
    return (e.match(/(#[0-9][^\s:,]*)/g) || []).forEach(function (t) {
      e = e.replace(t, '[id="' + t.replace("#", "") + '"]');
    }), document.querySelectorAll(e);
  };
}();