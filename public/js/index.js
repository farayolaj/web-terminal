(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
  var __commonJS = (callback, module) => () => {
    if (!module) {
      module = {exports: {}};
      callback(module.exports, module);
    }
    return module.exports;
  };
  var __exportStar = (target, module, desc) => {
    __markAsModule(target);
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
    }
    return target;
  };
  var __toModule = (module) => {
    if (module && module.__esModule)
      return module;
    return __exportStar(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", {value: module, enumerable: true}), module);
  };

  // node_modules/xterm/lib/xterm.js
  var require_xterm = __commonJS((exports, module) => {
    !function(e, t) {
      if (typeof exports == "object" && typeof module == "object")
        module.exports = t();
      else if (typeof define == "function" && define.amd)
        define([], t);
      else {
        var r = t();
        for (var i in r)
          (typeof exports == "object" ? exports : e)[i] = r[i];
      }
    }(self, function() {
      return (() => {
        "use strict";
        var e = {4567: function(e2, t2, r) {
          var i, n = this && this.__extends || (i = function(e3, t3) {
            return (i = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(e4, t4) {
              e4.__proto__ = t4;
            } || function(e4, t4) {
              for (var r2 in t4)
                Object.prototype.hasOwnProperty.call(t4, r2) && (e4[r2] = t4[r2]);
            })(e3, t3);
          }, function(e3, t3) {
            function r2() {
              this.constructor = e3;
            }
            i(e3, t3), e3.prototype = t3 === null ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
          });
          Object.defineProperty(t2, "__esModule", {value: true}), t2.AccessibilityManager = void 0;
          var o = r(9042), s = r(6114), a = r(6193), c = r(3656), l = r(844), h = r(5596), u = r(9631), f = function(e3) {
            function t3(t4, r2) {
              var i2 = e3.call(this) || this;
              i2._terminal = t4, i2._renderService = r2, i2._liveRegionLineCount = 0, i2._charsToConsume = [], i2._charsToAnnounce = "", i2._accessibilityTreeRoot = document.createElement("div"), i2._accessibilityTreeRoot.classList.add("xterm-accessibility"), i2._rowContainer = document.createElement("div"), i2._rowContainer.setAttribute("role", "list"), i2._rowContainer.classList.add("xterm-accessibility-tree"), i2._rowElements = [];
              for (var n2 = 0; n2 < i2._terminal.rows; n2++)
                i2._rowElements[n2] = i2._createAccessibilityTreeNode(), i2._rowContainer.appendChild(i2._rowElements[n2]);
              if (i2._topBoundaryFocusListener = function(e4) {
                return i2._onBoundaryFocus(e4, 0);
              }, i2._bottomBoundaryFocusListener = function(e4) {
                return i2._onBoundaryFocus(e4, 1);
              }, i2._rowElements[0].addEventListener("focus", i2._topBoundaryFocusListener), i2._rowElements[i2._rowElements.length - 1].addEventListener("focus", i2._bottomBoundaryFocusListener), i2._refreshRowsDimensions(), i2._accessibilityTreeRoot.appendChild(i2._rowContainer), i2._renderRowsDebouncer = new a.RenderDebouncer(i2._renderRows.bind(i2)), i2._refreshRows(), i2._liveRegion = document.createElement("div"), i2._liveRegion.classList.add("live-region"), i2._liveRegion.setAttribute("aria-live", "assertive"), i2._accessibilityTreeRoot.appendChild(i2._liveRegion), !i2._terminal.element)
                throw new Error("Cannot enable accessibility before Terminal.open");
              return i2._terminal.element.insertAdjacentElement("afterbegin", i2._accessibilityTreeRoot), i2.register(i2._renderRowsDebouncer), i2.register(i2._terminal.onResize(function(e4) {
                return i2._onResize(e4.rows);
              })), i2.register(i2._terminal.onRender(function(e4) {
                return i2._refreshRows(e4.start, e4.end);
              })), i2.register(i2._terminal.onScroll(function() {
                return i2._refreshRows();
              })), i2.register(i2._terminal.onA11yChar(function(e4) {
                return i2._onChar(e4);
              })), i2.register(i2._terminal.onLineFeed(function() {
                return i2._onChar("\n");
              })), i2.register(i2._terminal.onA11yTab(function(e4) {
                return i2._onTab(e4);
              })), i2.register(i2._terminal.onKey(function(e4) {
                return i2._onKey(e4.key);
              })), i2.register(i2._terminal.onBlur(function() {
                return i2._clearLiveRegion();
              })), i2.register(i2._renderService.onDimensionsChange(function() {
                return i2._refreshRowsDimensions();
              })), i2._screenDprMonitor = new h.ScreenDprMonitor(), i2.register(i2._screenDprMonitor), i2._screenDprMonitor.setListener(function() {
                return i2._refreshRowsDimensions();
              }), i2.register(c.addDisposableDomListener(window, "resize", function() {
                return i2._refreshRowsDimensions();
              })), i2;
            }
            return n(t3, e3), t3.prototype.dispose = function() {
              e3.prototype.dispose.call(this), u.removeElementFromParent(this._accessibilityTreeRoot), this._rowElements.length = 0;
            }, t3.prototype._onBoundaryFocus = function(e4, t4) {
              var r2 = e4.target, i2 = this._rowElements[t4 === 0 ? 1 : this._rowElements.length - 2];
              if (r2.getAttribute("aria-posinset") !== (t4 === 0 ? "1" : "" + this._terminal.buffer.lines.length) && e4.relatedTarget === i2) {
                var n2, o2;
                if (t4 === 0 ? (n2 = r2, o2 = this._rowElements.pop(), this._rowContainer.removeChild(o2)) : (n2 = this._rowElements.shift(), o2 = r2, this._rowContainer.removeChild(n2)), n2.removeEventListener("focus", this._topBoundaryFocusListener), o2.removeEventListener("focus", this._bottomBoundaryFocusListener), t4 === 0) {
                  var s2 = this._createAccessibilityTreeNode();
                  this._rowElements.unshift(s2), this._rowContainer.insertAdjacentElement("afterbegin", s2);
                } else
                  s2 = this._createAccessibilityTreeNode(), this._rowElements.push(s2), this._rowContainer.appendChild(s2);
                this._rowElements[0].addEventListener("focus", this._topBoundaryFocusListener), this._rowElements[this._rowElements.length - 1].addEventListener("focus", this._bottomBoundaryFocusListener), this._terminal.scrollLines(t4 === 0 ? -1 : 1), this._rowElements[t4 === 0 ? 1 : this._rowElements.length - 2].focus(), e4.preventDefault(), e4.stopImmediatePropagation();
              }
            }, t3.prototype._onResize = function(e4) {
              this._rowElements[this._rowElements.length - 1].removeEventListener("focus", this._bottomBoundaryFocusListener);
              for (var t4 = this._rowContainer.children.length; t4 < this._terminal.rows; t4++)
                this._rowElements[t4] = this._createAccessibilityTreeNode(), this._rowContainer.appendChild(this._rowElements[t4]);
              for (; this._rowElements.length > e4; )
                this._rowContainer.removeChild(this._rowElements.pop());
              this._rowElements[this._rowElements.length - 1].addEventListener("focus", this._bottomBoundaryFocusListener), this._refreshRowsDimensions();
            }, t3.prototype._createAccessibilityTreeNode = function() {
              var e4 = document.createElement("div");
              return e4.setAttribute("role", "listitem"), e4.tabIndex = -1, this._refreshRowDimensions(e4), e4;
            }, t3.prototype._onTab = function(e4) {
              for (var t4 = 0; t4 < e4; t4++)
                this._onChar(" ");
            }, t3.prototype._onChar = function(e4) {
              var t4 = this;
              this._liveRegionLineCount < 21 && (this._charsToConsume.length > 0 ? this._charsToConsume.shift() !== e4 && (this._charsToAnnounce += e4) : this._charsToAnnounce += e4, e4 === "\n" && (this._liveRegionLineCount++, this._liveRegionLineCount === 21 && (this._liveRegion.textContent += o.tooMuchOutput)), s.isMac && this._liveRegion.textContent && this._liveRegion.textContent.length > 0 && !this._liveRegion.parentNode && setTimeout(function() {
                t4._accessibilityTreeRoot.appendChild(t4._liveRegion);
              }, 0));
            }, t3.prototype._clearLiveRegion = function() {
              this._liveRegion.textContent = "", this._liveRegionLineCount = 0, s.isMac && u.removeElementFromParent(this._liveRegion);
            }, t3.prototype._onKey = function(e4) {
              this._clearLiveRegion(), this._charsToConsume.push(e4);
            }, t3.prototype._refreshRows = function(e4, t4) {
              this._renderRowsDebouncer.refresh(e4, t4, this._terminal.rows);
            }, t3.prototype._renderRows = function(e4, t4) {
              for (var r2 = this._terminal.buffer, i2 = r2.lines.length.toString(), n2 = e4; n2 <= t4; n2++) {
                var o2 = r2.translateBufferLineToString(r2.ydisp + n2, true), s2 = (r2.ydisp + n2 + 1).toString(), a2 = this._rowElements[n2];
                a2 && (o2.length === 0 ? a2.innerText = "\xA0" : a2.textContent = o2, a2.setAttribute("aria-posinset", s2), a2.setAttribute("aria-setsize", i2));
              }
              this._announceCharacters();
            }, t3.prototype._refreshRowsDimensions = function() {
              if (this._renderService.dimensions.actualCellHeight) {
                this._rowElements.length !== this._terminal.rows && this._onResize(this._terminal.rows);
                for (var e4 = 0; e4 < this._terminal.rows; e4++)
                  this._refreshRowDimensions(this._rowElements[e4]);
              }
            }, t3.prototype._refreshRowDimensions = function(e4) {
              e4.style.height = this._renderService.dimensions.actualCellHeight + "px";
            }, t3.prototype._announceCharacters = function() {
              this._charsToAnnounce.length !== 0 && (this._liveRegion.textContent += this._charsToAnnounce, this._charsToAnnounce = "");
            }, t3;
          }(l.Disposable);
          t2.AccessibilityManager = f;
        }, 3614: (e2, t2) => {
          function r(e3) {
            return e3.replace(/\r?\n/g, "\r");
          }
          function i(e3, t3) {
            return t3 ? "[200~" + e3 + "[201~" : e3;
          }
          function n(e3, t3, n2) {
            e3 = i(e3 = r(e3), n2.decPrivateModes.bracketedPasteMode), n2.triggerDataEvent(e3, true), t3.value = "";
          }
          function o(e3, t3, r2) {
            var i2 = r2.getBoundingClientRect(), n2 = e3.clientX - i2.left - 10, o2 = e3.clientY - i2.top - 10;
            t3.style.width = "20px", t3.style.height = "20px", t3.style.left = n2 + "px", t3.style.top = o2 + "px", t3.style.zIndex = "1000", t3.focus();
          }
          Object.defineProperty(t2, "__esModule", {value: true}), t2.rightClickHandler = t2.moveTextAreaUnderMouseCursor = t2.paste = t2.handlePasteEvent = t2.copyHandler = t2.bracketTextForPaste = t2.prepareTextForTerminal = void 0, t2.prepareTextForTerminal = r, t2.bracketTextForPaste = i, t2.copyHandler = function(e3, t3) {
            e3.clipboardData && e3.clipboardData.setData("text/plain", t3.selectionText), e3.preventDefault();
          }, t2.handlePasteEvent = function(e3, t3, r2) {
            e3.stopPropagation(), e3.clipboardData && n(e3.clipboardData.getData("text/plain"), t3, r2);
          }, t2.paste = n, t2.moveTextAreaUnderMouseCursor = o, t2.rightClickHandler = function(e3, t3, r2, i2, n2) {
            o(e3, t3, r2), n2 && i2.rightClickSelect(e3), t3.value = i2.selectionText, t3.select();
          };
        }, 4774: (e2, t2) => {
          var r, i, n, o;
          function s(e3) {
            var t3 = e3.toString(16);
            return t3.length < 2 ? "0" + t3 : t3;
          }
          function a(e3, t3) {
            return e3 < t3 ? (t3 + 0.05) / (e3 + 0.05) : (e3 + 0.05) / (t3 + 0.05);
          }
          Object.defineProperty(t2, "__esModule", {value: true}), t2.contrastRatio = t2.toPaddedHex = t2.rgba = t2.rgb = t2.css = t2.color = t2.channels = void 0, function(e3) {
            e3.toCss = function(e4, t3, r2, i2) {
              return i2 !== void 0 ? "#" + s(e4) + s(t3) + s(r2) + s(i2) : "#" + s(e4) + s(t3) + s(r2);
            }, e3.toRgba = function(e4, t3, r2, i2) {
              return i2 === void 0 && (i2 = 255), (e4 << 24 | t3 << 16 | r2 << 8 | i2) >>> 0;
            };
          }(r = t2.channels || (t2.channels = {})), (i = t2.color || (t2.color = {})).blend = function(e3, t3) {
            var i2 = (255 & t3.rgba) / 255;
            if (i2 === 1)
              return {css: t3.css, rgba: t3.rgba};
            var n2 = t3.rgba >> 24 & 255, o2 = t3.rgba >> 16 & 255, s2 = t3.rgba >> 8 & 255, a2 = e3.rgba >> 24 & 255, c = e3.rgba >> 16 & 255, l = e3.rgba >> 8 & 255, h = a2 + Math.round((n2 - a2) * i2), u = c + Math.round((o2 - c) * i2), f = l + Math.round((s2 - l) * i2);
            return {css: r.toCss(h, u, f), rgba: r.toRgba(h, u, f)};
          }, i.isOpaque = function(e3) {
            return (255 & e3.rgba) == 255;
          }, i.ensureContrastRatio = function(e3, t3, r2) {
            var i2 = o.ensureContrastRatio(e3.rgba, t3.rgba, r2);
            if (i2)
              return o.toColor(i2 >> 24 & 255, i2 >> 16 & 255, i2 >> 8 & 255);
          }, i.opaque = function(e3) {
            var t3 = (255 | e3.rgba) >>> 0, i2 = o.toChannels(t3), n2 = i2[0], s2 = i2[1], a2 = i2[2];
            return {css: r.toCss(n2, s2, a2), rgba: t3};
          }, i.opacity = function(e3, t3) {
            var i2 = Math.round(255 * t3), n2 = o.toChannels(e3.rgba), s2 = n2[0], a2 = n2[1], c = n2[2];
            return {css: r.toCss(s2, a2, c, i2), rgba: r.toRgba(s2, a2, c, i2)};
          }, (t2.css || (t2.css = {})).toColor = function(e3) {
            switch (e3.length) {
              case 7:
                return {css: e3, rgba: (parseInt(e3.slice(1), 16) << 8 | 255) >>> 0};
              case 9:
                return {css: e3, rgba: parseInt(e3.slice(1), 16) >>> 0};
            }
            throw new Error("css.toColor: Unsupported css format");
          }, function(e3) {
            function t3(e4, t4, r2) {
              var i2 = e4 / 255, n2 = t4 / 255, o2 = r2 / 255;
              return 0.2126 * (i2 <= 0.03928 ? i2 / 12.92 : Math.pow((i2 + 0.055) / 1.055, 2.4)) + 0.7152 * (n2 <= 0.03928 ? n2 / 12.92 : Math.pow((n2 + 0.055) / 1.055, 2.4)) + 0.0722 * (o2 <= 0.03928 ? o2 / 12.92 : Math.pow((o2 + 0.055) / 1.055, 2.4));
            }
            e3.relativeLuminance = function(e4) {
              return t3(e4 >> 16 & 255, e4 >> 8 & 255, 255 & e4);
            }, e3.relativeLuminance2 = t3;
          }(n = t2.rgb || (t2.rgb = {})), function(e3) {
            function t3(e4, t4, r2) {
              for (var i3 = e4 >> 24 & 255, o2 = e4 >> 16 & 255, s2 = e4 >> 8 & 255, c = t4 >> 24 & 255, l = t4 >> 16 & 255, h = t4 >> 8 & 255, u = a(n.relativeLuminance2(c, h, l), n.relativeLuminance2(i3, o2, s2)); u < r2 && (c > 0 || l > 0 || h > 0); )
                c -= Math.max(0, Math.ceil(0.1 * c)), l -= Math.max(0, Math.ceil(0.1 * l)), h -= Math.max(0, Math.ceil(0.1 * h)), u = a(n.relativeLuminance2(c, h, l), n.relativeLuminance2(i3, o2, s2));
              return (c << 24 | l << 16 | h << 8 | 255) >>> 0;
            }
            function i2(e4, t4, r2) {
              for (var i3 = e4 >> 24 & 255, o2 = e4 >> 16 & 255, s2 = e4 >> 8 & 255, c = t4 >> 24 & 255, l = t4 >> 16 & 255, h = t4 >> 8 & 255, u = a(n.relativeLuminance2(c, h, l), n.relativeLuminance2(i3, o2, s2)); u < r2 && (c < 255 || l < 255 || h < 255); )
                c = Math.min(255, c + Math.ceil(0.1 * (255 - c))), l = Math.min(255, l + Math.ceil(0.1 * (255 - l))), h = Math.min(255, h + Math.ceil(0.1 * (255 - h))), u = a(n.relativeLuminance2(c, h, l), n.relativeLuminance2(i3, o2, s2));
              return (c << 24 | l << 16 | h << 8 | 255) >>> 0;
            }
            e3.ensureContrastRatio = function(e4, r2, o2) {
              var s2 = n.relativeLuminance(e4 >> 8), c = n.relativeLuminance(r2 >> 8);
              if (a(s2, c) < o2)
                return c < s2 ? t3(e4, r2, o2) : i2(e4, r2, o2);
            }, e3.reduceLuminance = t3, e3.increaseLuminance = i2, e3.toChannels = function(e4) {
              return [e4 >> 24 & 255, e4 >> 16 & 255, e4 >> 8 & 255, 255 & e4];
            }, e3.toColor = function(e4, t4, i3) {
              return {css: r.toCss(e4, t4, i3), rgba: r.toRgba(e4, t4, i3)};
            };
          }(o = t2.rgba || (t2.rgba = {})), t2.toPaddedHex = s, t2.contrastRatio = a;
        }, 7239: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", {value: true}), t2.ColorContrastCache = void 0;
          var r = function() {
            function e3() {
              this._color = {}, this._rgba = {};
            }
            return e3.prototype.clear = function() {
              this._color = {}, this._rgba = {};
            }, e3.prototype.setCss = function(e4, t3, r2) {
              this._rgba[e4] || (this._rgba[e4] = {}), this._rgba[e4][t3] = r2;
            }, e3.prototype.getCss = function(e4, t3) {
              return this._rgba[e4] ? this._rgba[e4][t3] : void 0;
            }, e3.prototype.setColor = function(e4, t3, r2) {
              this._color[e4] || (this._color[e4] = {}), this._color[e4][t3] = r2;
            }, e3.prototype.getColor = function(e4, t3) {
              return this._color[e4] ? this._color[e4][t3] : void 0;
            }, e3;
          }();
          t2.ColorContrastCache = r;
        }, 5680: (e2, t2, r) => {
          Object.defineProperty(t2, "__esModule", {value: true}), t2.ColorManager = t2.DEFAULT_ANSI_COLORS = void 0;
          var i = r(4774), n = r(7239), o = i.css.toColor("#ffffff"), s = i.css.toColor("#000000"), a = i.css.toColor("#ffffff"), c = i.css.toColor("#000000"), l = {css: "rgba(255, 255, 255, 0.3)", rgba: 4294967117};
          t2.DEFAULT_ANSI_COLORS = Object.freeze(function() {
            for (var e3 = [i.css.toColor("#2e3436"), i.css.toColor("#cc0000"), i.css.toColor("#4e9a06"), i.css.toColor("#c4a000"), i.css.toColor("#3465a4"), i.css.toColor("#75507b"), i.css.toColor("#06989a"), i.css.toColor("#d3d7cf"), i.css.toColor("#555753"), i.css.toColor("#ef2929"), i.css.toColor("#8ae234"), i.css.toColor("#fce94f"), i.css.toColor("#729fcf"), i.css.toColor("#ad7fa8"), i.css.toColor("#34e2e2"), i.css.toColor("#eeeeec")], t3 = [0, 95, 135, 175, 215, 255], r2 = 0; r2 < 216; r2++) {
              var n2 = t3[r2 / 36 % 6 | 0], o2 = t3[r2 / 6 % 6 | 0], s2 = t3[r2 % 6];
              e3.push({css: i.channels.toCss(n2, o2, s2), rgba: i.channels.toRgba(n2, o2, s2)});
            }
            for (r2 = 0; r2 < 24; r2++) {
              var a2 = 8 + 10 * r2;
              e3.push({css: i.channels.toCss(a2, a2, a2), rgba: i.channels.toRgba(a2, a2, a2)});
            }
            return e3;
          }());
          var h = function() {
            function e3(e4, r2) {
              this.allowTransparency = r2;
              var h2 = e4.createElement("canvas");
              h2.width = 1, h2.height = 1;
              var u = h2.getContext("2d");
              if (!u)
                throw new Error("Could not get rendering context");
              this._ctx = u, this._ctx.globalCompositeOperation = "copy", this._litmusColor = this._ctx.createLinearGradient(0, 0, 1, 1), this._contrastCache = new n.ColorContrastCache(), this.colors = {foreground: o, background: s, cursor: a, cursorAccent: c, selectionTransparent: l, selectionOpaque: i.color.blend(s, l), ansi: t2.DEFAULT_ANSI_COLORS.slice(), contrastCache: this._contrastCache};
            }
            return e3.prototype.onOptionsChange = function(e4) {
              e4 === "minimumContrastRatio" && this._contrastCache.clear();
            }, e3.prototype.setTheme = function(e4) {
              e4 === void 0 && (e4 = {}), this.colors.foreground = this._parseColor(e4.foreground, o), this.colors.background = this._parseColor(e4.background, s), this.colors.cursor = this._parseColor(e4.cursor, a, true), this.colors.cursorAccent = this._parseColor(e4.cursorAccent, c, true), this.colors.selectionTransparent = this._parseColor(e4.selection, l, true), this.colors.selectionOpaque = i.color.blend(this.colors.background, this.colors.selectionTransparent), i.color.isOpaque(this.colors.selectionTransparent) && (this.colors.selectionTransparent = i.color.opacity(this.colors.selectionTransparent, 0.3)), this.colors.ansi[0] = this._parseColor(e4.black, t2.DEFAULT_ANSI_COLORS[0]), this.colors.ansi[1] = this._parseColor(e4.red, t2.DEFAULT_ANSI_COLORS[1]), this.colors.ansi[2] = this._parseColor(e4.green, t2.DEFAULT_ANSI_COLORS[2]), this.colors.ansi[3] = this._parseColor(e4.yellow, t2.DEFAULT_ANSI_COLORS[3]), this.colors.ansi[4] = this._parseColor(e4.blue, t2.DEFAULT_ANSI_COLORS[4]), this.colors.ansi[5] = this._parseColor(e4.magenta, t2.DEFAULT_ANSI_COLORS[5]), this.colors.ansi[6] = this._parseColor(e4.cyan, t2.DEFAULT_ANSI_COLORS[6]), this.colors.ansi[7] = this._parseColor(e4.white, t2.DEFAULT_ANSI_COLORS[7]), this.colors.ansi[8] = this._parseColor(e4.brightBlack, t2.DEFAULT_ANSI_COLORS[8]), this.colors.ansi[9] = this._parseColor(e4.brightRed, t2.DEFAULT_ANSI_COLORS[9]), this.colors.ansi[10] = this._parseColor(e4.brightGreen, t2.DEFAULT_ANSI_COLORS[10]), this.colors.ansi[11] = this._parseColor(e4.brightYellow, t2.DEFAULT_ANSI_COLORS[11]), this.colors.ansi[12] = this._parseColor(e4.brightBlue, t2.DEFAULT_ANSI_COLORS[12]), this.colors.ansi[13] = this._parseColor(e4.brightMagenta, t2.DEFAULT_ANSI_COLORS[13]), this.colors.ansi[14] = this._parseColor(e4.brightCyan, t2.DEFAULT_ANSI_COLORS[14]), this.colors.ansi[15] = this._parseColor(e4.brightWhite, t2.DEFAULT_ANSI_COLORS[15]), this._contrastCache.clear();
            }, e3.prototype._parseColor = function(e4, t3, r2) {
              if (r2 === void 0 && (r2 = this.allowTransparency), e4 === void 0)
                return t3;
              if (this._ctx.fillStyle = this._litmusColor, this._ctx.fillStyle = e4, typeof this._ctx.fillStyle != "string")
                return console.warn("Color: " + e4 + " is invalid using fallback " + t3.css), t3;
              this._ctx.fillRect(0, 0, 1, 1);
              var n2 = this._ctx.getImageData(0, 0, 1, 1).data;
              if (n2[3] !== 255) {
                if (!r2)
                  return console.warn("Color: " + e4 + " is using transparency, but allowTransparency is false. Using fallback " + t3.css + "."), t3;
                var o2 = this._ctx.fillStyle.substring(5, this._ctx.fillStyle.length - 1).split(",").map(function(e5) {
                  return Number(e5);
                }), s2 = o2[0], a2 = o2[1], c2 = o2[2], l2 = o2[3], h2 = Math.round(255 * l2);
                return {rgba: i.channels.toRgba(s2, a2, c2, h2), css: e4};
              }
              return {css: this._ctx.fillStyle, rgba: i.channels.toRgba(n2[0], n2[1], n2[2], n2[3])};
            }, e3;
          }();
          t2.ColorManager = h;
        }, 9631: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", {value: true}), t2.removeElementFromParent = void 0, t2.removeElementFromParent = function() {
            for (var e3, t3 = [], r = 0; r < arguments.length; r++)
              t3[r] = arguments[r];
            for (var i = 0, n = t3; i < n.length; i++) {
              var o = n[i];
              (e3 = o == null ? void 0 : o.parentElement) === null || e3 === void 0 || e3.removeChild(o);
            }
          };
        }, 3656: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", {value: true}), t2.addDisposableDomListener = void 0, t2.addDisposableDomListener = function(e3, t3, r, i) {
            e3.addEventListener(t3, r, i);
            var n = false;
            return {dispose: function() {
              n || (n = true, e3.removeEventListener(t3, r, i));
            }};
          };
        }, 3551: function(e2, t2, r) {
          var i = this && this.__decorate || function(e3, t3, r2, i2) {
            var n2, o2 = arguments.length, s2 = o2 < 3 ? t3 : i2 === null ? i2 = Object.getOwnPropertyDescriptor(t3, r2) : i2;
            if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
              s2 = Reflect.decorate(e3, t3, r2, i2);
            else
              for (var a2 = e3.length - 1; a2 >= 0; a2--)
                (n2 = e3[a2]) && (s2 = (o2 < 3 ? n2(s2) : o2 > 3 ? n2(t3, r2, s2) : n2(t3, r2)) || s2);
            return o2 > 3 && s2 && Object.defineProperty(t3, r2, s2), s2;
          }, n = this && this.__param || function(e3, t3) {
            return function(r2, i2) {
              t3(r2, i2, e3);
            };
          };
          Object.defineProperty(t2, "__esModule", {value: true}), t2.MouseZone = t2.Linkifier = void 0;
          var o = r(8460), s = r(2585), a = function() {
            function e3(e4, t3, r2) {
              this._bufferService = e4, this._logService = t3, this._unicodeService = r2, this._linkMatchers = [], this._nextLinkMatcherId = 0, this._onShowLinkUnderline = new o.EventEmitter(), this._onHideLinkUnderline = new o.EventEmitter(), this._onLinkTooltip = new o.EventEmitter(), this._rowsToLinkify = {start: void 0, end: void 0};
            }
            return Object.defineProperty(e3.prototype, "onShowLinkUnderline", {get: function() {
              return this._onShowLinkUnderline.event;
            }, enumerable: false, configurable: true}), Object.defineProperty(e3.prototype, "onHideLinkUnderline", {get: function() {
              return this._onHideLinkUnderline.event;
            }, enumerable: false, configurable: true}), Object.defineProperty(e3.prototype, "onLinkTooltip", {get: function() {
              return this._onLinkTooltip.event;
            }, enumerable: false, configurable: true}), e3.prototype.attachToDom = function(e4, t3) {
              this._element = e4, this._mouseZoneManager = t3;
            }, e3.prototype.linkifyRows = function(t3, r2) {
              var i2 = this;
              this._mouseZoneManager && (this._rowsToLinkify.start === void 0 || this._rowsToLinkify.end === void 0 ? (this._rowsToLinkify.start = t3, this._rowsToLinkify.end = r2) : (this._rowsToLinkify.start = Math.min(this._rowsToLinkify.start, t3), this._rowsToLinkify.end = Math.max(this._rowsToLinkify.end, r2)), this._mouseZoneManager.clearAll(t3, r2), this._rowsTimeoutId && clearTimeout(this._rowsTimeoutId), this._rowsTimeoutId = setTimeout(function() {
                return i2._linkifyRows();
              }, e3._timeBeforeLatency));
            }, e3.prototype._linkifyRows = function() {
              this._rowsTimeoutId = void 0;
              var e4 = this._bufferService.buffer;
              if (this._rowsToLinkify.start !== void 0 && this._rowsToLinkify.end !== void 0) {
                var t3 = e4.ydisp + this._rowsToLinkify.start;
                if (!(t3 >= e4.lines.length)) {
                  for (var r2 = e4.ydisp + Math.min(this._rowsToLinkify.end, this._bufferService.rows) + 1, i2 = Math.ceil(2e3 / this._bufferService.cols), n2 = this._bufferService.buffer.iterator(false, t3, r2, i2, i2); n2.hasNext(); )
                    for (var o2 = n2.next(), s2 = 0; s2 < this._linkMatchers.length; s2++)
                      this._doLinkifyRow(o2.range.first, o2.content, this._linkMatchers[s2]);
                  this._rowsToLinkify.start = void 0, this._rowsToLinkify.end = void 0;
                }
              } else
                this._logService.debug("_rowToLinkify was unset before _linkifyRows was called");
            }, e3.prototype.registerLinkMatcher = function(e4, t3, r2) {
              if (r2 === void 0 && (r2 = {}), !t3)
                throw new Error("handler must be defined");
              var i2 = {id: this._nextLinkMatcherId++, regex: e4, handler: t3, matchIndex: r2.matchIndex, validationCallback: r2.validationCallback, hoverTooltipCallback: r2.tooltipCallback, hoverLeaveCallback: r2.leaveCallback, willLinkActivate: r2.willLinkActivate, priority: r2.priority || 0};
              return this._addLinkMatcherToList(i2), i2.id;
            }, e3.prototype._addLinkMatcherToList = function(e4) {
              if (this._linkMatchers.length !== 0) {
                for (var t3 = this._linkMatchers.length - 1; t3 >= 0; t3--)
                  if (e4.priority <= this._linkMatchers[t3].priority)
                    return void this._linkMatchers.splice(t3 + 1, 0, e4);
                this._linkMatchers.splice(0, 0, e4);
              } else
                this._linkMatchers.push(e4);
            }, e3.prototype.deregisterLinkMatcher = function(e4) {
              for (var t3 = 0; t3 < this._linkMatchers.length; t3++)
                if (this._linkMatchers[t3].id === e4)
                  return this._linkMatchers.splice(t3, 1), true;
              return false;
            }, e3.prototype._doLinkifyRow = function(e4, t3, r2) {
              for (var i2, n2 = this, o2 = new RegExp(r2.regex.source, (r2.regex.flags || "") + "g"), s2 = -1, a2 = function() {
                var a3 = i2[typeof r2.matchIndex != "number" ? 0 : r2.matchIndex];
                if (!a3)
                  return c2._logService.debug("match found without corresponding matchIndex", i2, r2), "break";
                if (s2 = t3.indexOf(a3, s2 + 1), o2.lastIndex = s2 + a3.length, s2 < 0)
                  return "break";
                var l = c2._bufferService.buffer.stringIndexToBufferIndex(e4, s2);
                if (l[0] < 0)
                  return "break";
                var h = c2._bufferService.buffer.lines.get(l[0]);
                if (!h)
                  return "break";
                var u = h.getFg(l[1]), f = u ? u >> 9 & 511 : void 0;
                r2.validationCallback ? r2.validationCallback(a3, function(e5) {
                  n2._rowsTimeoutId || e5 && n2._addLink(l[1], l[0] - n2._bufferService.buffer.ydisp, a3, r2, f);
                }) : c2._addLink(l[1], l[0] - c2._bufferService.buffer.ydisp, a3, r2, f);
              }, c2 = this; (i2 = o2.exec(t3)) !== null && a2() !== "break"; )
                ;
            }, e3.prototype._addLink = function(e4, t3, r2, i2, n2) {
              var o2 = this;
              if (this._mouseZoneManager && this._element) {
                var s2 = this._unicodeService.getStringCellWidth(r2), a2 = e4 % this._bufferService.cols, l = t3 + Math.floor(e4 / this._bufferService.cols), h = (a2 + s2) % this._bufferService.cols, u = l + Math.floor((a2 + s2) / this._bufferService.cols);
                h === 0 && (h = this._bufferService.cols, u--), this._mouseZoneManager.add(new c(a2 + 1, l + 1, h + 1, u + 1, function(e5) {
                  if (i2.handler)
                    return i2.handler(e5, r2);
                  var t4 = window.open();
                  t4 ? (t4.opener = null, t4.location.href = r2) : console.warn("Opening link blocked as opener could not be cleared");
                }, function() {
                  o2._onShowLinkUnderline.fire(o2._createLinkHoverEvent(a2, l, h, u, n2)), o2._element.classList.add("xterm-cursor-pointer");
                }, function(e5) {
                  o2._onLinkTooltip.fire(o2._createLinkHoverEvent(a2, l, h, u, n2)), i2.hoverTooltipCallback && i2.hoverTooltipCallback(e5, r2, {start: {x: a2, y: l}, end: {x: h, y: u}});
                }, function() {
                  o2._onHideLinkUnderline.fire(o2._createLinkHoverEvent(a2, l, h, u, n2)), o2._element.classList.remove("xterm-cursor-pointer"), i2.hoverLeaveCallback && i2.hoverLeaveCallback();
                }, function(e5) {
                  return !i2.willLinkActivate || i2.willLinkActivate(e5, r2);
                }));
              }
            }, e3.prototype._createLinkHoverEvent = function(e4, t3, r2, i2, n2) {
              return {x1: e4, y1: t3, x2: r2, y2: i2, cols: this._bufferService.cols, fg: n2};
            }, e3._timeBeforeLatency = 200, e3 = i([n(0, s.IBufferService), n(1, s.ILogService), n(2, s.IUnicodeService)], e3);
          }();
          t2.Linkifier = a;
          var c = function(e3, t3, r2, i2, n2, o2, s2, a2, c2) {
            this.x1 = e3, this.y1 = t3, this.x2 = r2, this.y2 = i2, this.clickCallback = n2, this.hoverCallback = o2, this.tooltipCallback = s2, this.leaveCallback = a2, this.willLinkActivate = c2;
          };
          t2.MouseZone = c;
        }, 6465: function(e2, t2, r) {
          var i, n = this && this.__extends || (i = function(e3, t3) {
            return (i = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(e4, t4) {
              e4.__proto__ = t4;
            } || function(e4, t4) {
              for (var r2 in t4)
                Object.prototype.hasOwnProperty.call(t4, r2) && (e4[r2] = t4[r2]);
            })(e3, t3);
          }, function(e3, t3) {
            function r2() {
              this.constructor = e3;
            }
            i(e3, t3), e3.prototype = t3 === null ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
          }), o = this && this.__decorate || function(e3, t3, r2, i2) {
            var n2, o2 = arguments.length, s2 = o2 < 3 ? t3 : i2 === null ? i2 = Object.getOwnPropertyDescriptor(t3, r2) : i2;
            if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
              s2 = Reflect.decorate(e3, t3, r2, i2);
            else
              for (var a2 = e3.length - 1; a2 >= 0; a2--)
                (n2 = e3[a2]) && (s2 = (o2 < 3 ? n2(s2) : o2 > 3 ? n2(t3, r2, s2) : n2(t3, r2)) || s2);
            return o2 > 3 && s2 && Object.defineProperty(t3, r2, s2), s2;
          }, s = this && this.__param || function(e3, t3) {
            return function(r2, i2) {
              t3(r2, i2, e3);
            };
          };
          Object.defineProperty(t2, "__esModule", {value: true}), t2.Linkifier2 = void 0;
          var a = r(2585), c = r(8460), l = r(844), h = r(3656), u = function(e3) {
            function t3(t4) {
              var r2 = e3.call(this) || this;
              return r2._bufferService = t4, r2._linkProviders = [], r2._linkCacheDisposables = [], r2._isMouseOut = true, r2._activeLine = -1, r2._onShowLinkUnderline = r2.register(new c.EventEmitter()), r2._onHideLinkUnderline = r2.register(new c.EventEmitter()), r2.register(l.getDisposeArrayDisposable(r2._linkCacheDisposables)), r2;
            }
            return n(t3, e3), Object.defineProperty(t3.prototype, "onShowLinkUnderline", {get: function() {
              return this._onShowLinkUnderline.event;
            }, enumerable: false, configurable: true}), Object.defineProperty(t3.prototype, "onHideLinkUnderline", {get: function() {
              return this._onHideLinkUnderline.event;
            }, enumerable: false, configurable: true}), t3.prototype.registerLinkProvider = function(e4) {
              var t4 = this;
              return this._linkProviders.push(e4), {dispose: function() {
                var r2 = t4._linkProviders.indexOf(e4);
                r2 !== -1 && t4._linkProviders.splice(r2, 1);
              }};
            }, t3.prototype.attachToDom = function(e4, t4, r2) {
              var i2 = this;
              this._element = e4, this._mouseService = t4, this._renderService = r2, this.register(h.addDisposableDomListener(this._element, "mouseleave", function() {
                i2._isMouseOut = true, i2._clearCurrentLink();
              })), this.register(h.addDisposableDomListener(this._element, "mousemove", this._onMouseMove.bind(this))), this.register(h.addDisposableDomListener(this._element, "click", this._onClick.bind(this)));
            }, t3.prototype._onMouseMove = function(e4) {
              if (this._lastMouseEvent = e4, this._element && this._mouseService) {
                var t4 = this._positionFromMouseEvent(e4, this._element, this._mouseService);
                if (t4) {
                  this._isMouseOut = false;
                  for (var r2 = e4.composedPath(), i2 = 0; i2 < r2.length; i2++) {
                    var n2 = r2[i2];
                    if (n2.classList.contains("xterm"))
                      break;
                    if (n2.classList.contains("xterm-hover"))
                      return;
                  }
                  this._lastBufferCell && t4.x === this._lastBufferCell.x && t4.y === this._lastBufferCell.y || (this._onHover(t4), this._lastBufferCell = t4);
                }
              }
            }, t3.prototype._onHover = function(e4) {
              if (this._activeLine !== e4.y)
                return this._clearCurrentLink(), void this._askForLink(e4, false);
              this._currentLink && this._linkAtPosition(this._currentLink.link, e4) || (this._clearCurrentLink(), this._askForLink(e4, true));
            }, t3.prototype._askForLink = function(e4, t4) {
              var r2, i2 = this;
              this._activeProviderReplies && t4 || ((r2 = this._activeProviderReplies) === null || r2 === void 0 || r2.forEach(function(e5) {
                e5 == null || e5.forEach(function(e6) {
                  e6.link.dispose && e6.link.dispose();
                });
              }), this._activeProviderReplies = new Map(), this._activeLine = e4.y);
              var n2 = false;
              this._linkProviders.forEach(function(r3, o2) {
                var s2;
                t4 ? ((s2 = i2._activeProviderReplies) === null || s2 === void 0 ? void 0 : s2.get(o2)) && (n2 = i2._checkLinkProviderResult(o2, e4, n2)) : r3.provideLinks(e4.y, function(t5) {
                  var r4, s3;
                  if (!i2._isMouseOut) {
                    var a2 = t5 == null ? void 0 : t5.map(function(e5) {
                      return {link: e5};
                    });
                    (r4 = i2._activeProviderReplies) === null || r4 === void 0 || r4.set(o2, a2), n2 = i2._checkLinkProviderResult(o2, e4, n2), ((s3 = i2._activeProviderReplies) === null || s3 === void 0 ? void 0 : s3.size) === i2._linkProviders.length && i2._removeIntersectingLinks(e4.y, i2._activeProviderReplies);
                  }
                });
              });
            }, t3.prototype._removeIntersectingLinks = function(e4, t4) {
              for (var r2 = new Set(), i2 = 0; i2 < t4.size; i2++) {
                var n2 = t4.get(i2);
                if (n2)
                  for (var o2 = 0; o2 < n2.length; o2++)
                    for (var s2 = n2[o2], a2 = s2.link.range.start.y < e4 ? 0 : s2.link.range.start.x, c2 = s2.link.range.end.y > e4 ? this._bufferService.cols : s2.link.range.end.x, l2 = a2; l2 <= c2; l2++) {
                      if (r2.has(l2)) {
                        n2.splice(o2--, 1);
                        break;
                      }
                      r2.add(l2);
                    }
              }
            }, t3.prototype._checkLinkProviderResult = function(e4, t4, r2) {
              var i2, n2 = this;
              if (!this._activeProviderReplies)
                return r2;
              for (var o2 = this._activeProviderReplies.get(e4), s2 = false, a2 = 0; a2 < e4; a2++)
                this._activeProviderReplies.has(a2) && !this._activeProviderReplies.get(a2) || (s2 = true);
              if (!s2 && o2) {
                var c2 = o2.find(function(e5) {
                  return n2._linkAtPosition(e5.link, t4);
                });
                c2 && (r2 = true, this._handleNewLink(c2));
              }
              if (this._activeProviderReplies.size === this._linkProviders.length && !r2)
                for (a2 = 0; a2 < this._activeProviderReplies.size; a2++) {
                  var l2 = (i2 = this._activeProviderReplies.get(a2)) === null || i2 === void 0 ? void 0 : i2.find(function(e5) {
                    return n2._linkAtPosition(e5.link, t4);
                  });
                  if (l2) {
                    r2 = true, this._handleNewLink(l2);
                    break;
                  }
                }
              return r2;
            }, t3.prototype._onClick = function(e4) {
              if (this._element && this._mouseService && this._currentLink) {
                var t4 = this._positionFromMouseEvent(e4, this._element, this._mouseService);
                t4 && this._linkAtPosition(this._currentLink.link, t4) && this._currentLink.link.activate(e4, this._currentLink.link.text);
              }
            }, t3.prototype._clearCurrentLink = function(e4, t4) {
              this._element && this._currentLink && this._lastMouseEvent && (!e4 || !t4 || this._currentLink.link.range.start.y >= e4 && this._currentLink.link.range.end.y <= t4) && (this._linkLeave(this._element, this._currentLink.link, this._lastMouseEvent), this._currentLink = void 0, l.disposeArray(this._linkCacheDisposables));
            }, t3.prototype._handleNewLink = function(e4) {
              var t4 = this;
              if (this._element && this._lastMouseEvent && this._mouseService) {
                var r2 = this._positionFromMouseEvent(this._lastMouseEvent, this._element, this._mouseService);
                r2 && this._linkAtPosition(e4.link, r2) && (this._currentLink = e4, this._currentLink.state = {decorations: {underline: e4.link.decorations === void 0 || e4.link.decorations.underline, pointerCursor: e4.link.decorations === void 0 || e4.link.decorations.pointerCursor}, isHovered: true}, this._linkHover(this._element, e4.link, this._lastMouseEvent), e4.link.decorations = {}, Object.defineProperties(e4.link.decorations, {pointerCursor: {get: function() {
                  var e5, r3;
                  return (r3 = (e5 = t4._currentLink) === null || e5 === void 0 ? void 0 : e5.state) === null || r3 === void 0 ? void 0 : r3.decorations.pointerCursor;
                }, set: function(e5) {
                  var r3, i2;
                  ((r3 = t4._currentLink) === null || r3 === void 0 ? void 0 : r3.state) && t4._currentLink.state.decorations.pointerCursor !== e5 && (t4._currentLink.state.decorations.pointerCursor = e5, t4._currentLink.state.isHovered && ((i2 = t4._element) === null || i2 === void 0 || i2.classList.toggle("xterm-cursor-pointer", e5)));
                }}, underline: {get: function() {
                  var e5, r3;
                  return (r3 = (e5 = t4._currentLink) === null || e5 === void 0 ? void 0 : e5.state) === null || r3 === void 0 ? void 0 : r3.decorations.underline;
                }, set: function(r3) {
                  var i2, n2, o2;
                  ((i2 = t4._currentLink) === null || i2 === void 0 ? void 0 : i2.state) && ((o2 = (n2 = t4._currentLink) === null || n2 === void 0 ? void 0 : n2.state) === null || o2 === void 0 ? void 0 : o2.decorations.underline) !== r3 && (t4._currentLink.state.decorations.underline = r3, t4._currentLink.state.isHovered && t4._fireUnderlineEvent(e4.link, r3));
                }}}), this._renderService && this._linkCacheDisposables.push(this._renderService.onRenderedBufferChange(function(e5) {
                  var r3 = e5.start === 0 ? 0 : e5.start + 1 + t4._bufferService.buffer.ydisp;
                  t4._clearCurrentLink(r3, e5.end + 1 + t4._bufferService.buffer.ydisp);
                })));
              }
            }, t3.prototype._linkHover = function(e4, t4, r2) {
              var i2;
              ((i2 = this._currentLink) === null || i2 === void 0 ? void 0 : i2.state) && (this._currentLink.state.isHovered = true, this._currentLink.state.decorations.underline && this._fireUnderlineEvent(t4, true), this._currentLink.state.decorations.pointerCursor && e4.classList.add("xterm-cursor-pointer")), t4.hover && t4.hover(r2, t4.text);
            }, t3.prototype._fireUnderlineEvent = function(e4, t4) {
              var r2 = e4.range, i2 = this._bufferService.buffer.ydisp, n2 = this._createLinkUnderlineEvent(r2.start.x - 1, r2.start.y - i2 - 1, r2.end.x, r2.end.y - i2 - 1, void 0);
              (t4 ? this._onShowLinkUnderline : this._onHideLinkUnderline).fire(n2);
            }, t3.prototype._linkLeave = function(e4, t4, r2) {
              var i2;
              ((i2 = this._currentLink) === null || i2 === void 0 ? void 0 : i2.state) && (this._currentLink.state.isHovered = false, this._currentLink.state.decorations.underline && this._fireUnderlineEvent(t4, false), this._currentLink.state.decorations.pointerCursor && e4.classList.remove("xterm-cursor-pointer")), t4.leave && t4.leave(r2, t4.text);
            }, t3.prototype._linkAtPosition = function(e4, t4) {
              var r2 = e4.range.start.y === e4.range.end.y, i2 = e4.range.start.y < t4.y, n2 = e4.range.end.y > t4.y;
              return (r2 && e4.range.start.x <= t4.x && e4.range.end.x >= t4.x || i2 && e4.range.end.x >= t4.x || n2 && e4.range.start.x <= t4.x || i2 && n2) && e4.range.start.y <= t4.y && e4.range.end.y >= t4.y;
            }, t3.prototype._positionFromMouseEvent = function(e4, t4, r2) {
              var i2 = r2.getCoords(e4, t4, this._bufferService.cols, this._bufferService.rows);
              if (i2)
                return {x: i2[0], y: i2[1] + this._bufferService.buffer.ydisp};
            }, t3.prototype._createLinkUnderlineEvent = function(e4, t4, r2, i2, n2) {
              return {x1: e4, y1: t4, x2: r2, y2: i2, cols: this._bufferService.cols, fg: n2};
            }, o([s(0, a.IBufferService)], t3);
          }(l.Disposable);
          t2.Linkifier2 = u;
        }, 9042: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", {value: true}), t2.tooMuchOutput = t2.promptLabel = void 0, t2.promptLabel = "Terminal input", t2.tooMuchOutput = "Too much output to announce, navigate to rows manually to read";
        }, 6954: function(e2, t2, r) {
          var i, n = this && this.__extends || (i = function(e3, t3) {
            return (i = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(e4, t4) {
              e4.__proto__ = t4;
            } || function(e4, t4) {
              for (var r2 in t4)
                Object.prototype.hasOwnProperty.call(t4, r2) && (e4[r2] = t4[r2]);
            })(e3, t3);
          }, function(e3, t3) {
            function r2() {
              this.constructor = e3;
            }
            i(e3, t3), e3.prototype = t3 === null ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
          }), o = this && this.__decorate || function(e3, t3, r2, i2) {
            var n2, o2 = arguments.length, s2 = o2 < 3 ? t3 : i2 === null ? i2 = Object.getOwnPropertyDescriptor(t3, r2) : i2;
            if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
              s2 = Reflect.decorate(e3, t3, r2, i2);
            else
              for (var a2 = e3.length - 1; a2 >= 0; a2--)
                (n2 = e3[a2]) && (s2 = (o2 < 3 ? n2(s2) : o2 > 3 ? n2(t3, r2, s2) : n2(t3, r2)) || s2);
            return o2 > 3 && s2 && Object.defineProperty(t3, r2, s2), s2;
          }, s = this && this.__param || function(e3, t3) {
            return function(r2, i2) {
              t3(r2, i2, e3);
            };
          };
          Object.defineProperty(t2, "__esModule", {value: true}), t2.MouseZoneManager = void 0;
          var a = r(844), c = r(3656), l = r(4725), h = r(2585), u = function(e3) {
            function t3(t4, r2, i2, n2, o2, s2) {
              var a2 = e3.call(this) || this;
              return a2._element = t4, a2._screenElement = r2, a2._bufferService = i2, a2._mouseService = n2, a2._selectionService = o2, a2._optionsService = s2, a2._zones = [], a2._areZonesActive = false, a2._lastHoverCoords = [void 0, void 0], a2._initialSelectionLength = 0, a2.register(c.addDisposableDomListener(a2._element, "mousedown", function(e4) {
                return a2._onMouseDown(e4);
              })), a2._mouseMoveListener = function(e4) {
                return a2._onMouseMove(e4);
              }, a2._mouseLeaveListener = function(e4) {
                return a2._onMouseLeave(e4);
              }, a2._clickListener = function(e4) {
                return a2._onClick(e4);
              }, a2;
            }
            return n(t3, e3), t3.prototype.dispose = function() {
              e3.prototype.dispose.call(this), this._deactivate();
            }, t3.prototype.add = function(e4) {
              this._zones.push(e4), this._zones.length === 1 && this._activate();
            }, t3.prototype.clearAll = function(e4, t4) {
              if (this._zones.length !== 0) {
                e4 && t4 || (e4 = 0, t4 = this._bufferService.rows - 1);
                for (var r2 = 0; r2 < this._zones.length; r2++) {
                  var i2 = this._zones[r2];
                  (i2.y1 > e4 && i2.y1 <= t4 + 1 || i2.y2 > e4 && i2.y2 <= t4 + 1 || i2.y1 < e4 && i2.y2 > t4 + 1) && (this._currentZone && this._currentZone === i2 && (this._currentZone.leaveCallback(), this._currentZone = void 0), this._zones.splice(r2--, 1));
                }
                this._zones.length === 0 && this._deactivate();
              }
            }, t3.prototype._activate = function() {
              this._areZonesActive || (this._areZonesActive = true, this._element.addEventListener("mousemove", this._mouseMoveListener), this._element.addEventListener("mouseleave", this._mouseLeaveListener), this._element.addEventListener("click", this._clickListener));
            }, t3.prototype._deactivate = function() {
              this._areZonesActive && (this._areZonesActive = false, this._element.removeEventListener("mousemove", this._mouseMoveListener), this._element.removeEventListener("mouseleave", this._mouseLeaveListener), this._element.removeEventListener("click", this._clickListener));
            }, t3.prototype._onMouseMove = function(e4) {
              this._lastHoverCoords[0] === e4.pageX && this._lastHoverCoords[1] === e4.pageY || (this._onHover(e4), this._lastHoverCoords = [e4.pageX, e4.pageY]);
            }, t3.prototype._onHover = function(e4) {
              var t4 = this, r2 = this._findZoneEventAt(e4);
              r2 !== this._currentZone && (this._currentZone && (this._currentZone.leaveCallback(), this._currentZone = void 0, this._tooltipTimeout && clearTimeout(this._tooltipTimeout)), r2 && (this._currentZone = r2, r2.hoverCallback && r2.hoverCallback(e4), this._tooltipTimeout = window.setTimeout(function() {
                return t4._onTooltip(e4);
              }, this._optionsService.options.linkTooltipHoverDuration)));
            }, t3.prototype._onTooltip = function(e4) {
              this._tooltipTimeout = void 0;
              var t4 = this._findZoneEventAt(e4);
              t4 && t4.tooltipCallback && t4.tooltipCallback(e4);
            }, t3.prototype._onMouseDown = function(e4) {
              if (this._initialSelectionLength = this._getSelectionLength(), this._areZonesActive) {
                var t4 = this._findZoneEventAt(e4);
                (t4 == null ? void 0 : t4.willLinkActivate(e4)) && (e4.preventDefault(), e4.stopImmediatePropagation());
              }
            }, t3.prototype._onMouseLeave = function(e4) {
              this._currentZone && (this._currentZone.leaveCallback(), this._currentZone = void 0, this._tooltipTimeout && clearTimeout(this._tooltipTimeout));
            }, t3.prototype._onClick = function(e4) {
              var t4 = this._findZoneEventAt(e4), r2 = this._getSelectionLength();
              t4 && r2 === this._initialSelectionLength && (t4.clickCallback(e4), e4.preventDefault(), e4.stopImmediatePropagation());
            }, t3.prototype._getSelectionLength = function() {
              var e4 = this._selectionService.selectionText;
              return e4 ? e4.length : 0;
            }, t3.prototype._findZoneEventAt = function(e4) {
              var t4 = this._mouseService.getCoords(e4, this._screenElement, this._bufferService.cols, this._bufferService.rows);
              if (t4)
                for (var r2 = t4[0], i2 = t4[1], n2 = 0; n2 < this._zones.length; n2++) {
                  var o2 = this._zones[n2];
                  if (o2.y1 === o2.y2) {
                    if (i2 === o2.y1 && r2 >= o2.x1 && r2 < o2.x2)
                      return o2;
                  } else if (i2 === o2.y1 && r2 >= o2.x1 || i2 === o2.y2 && r2 < o2.x2 || i2 > o2.y1 && i2 < o2.y2)
                    return o2;
                }
            }, o([s(2, h.IBufferService), s(3, l.IMouseService), s(4, l.ISelectionService), s(5, h.IOptionsService)], t3);
          }(a.Disposable);
          t2.MouseZoneManager = u;
        }, 6193: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", {value: true}), t2.RenderDebouncer = void 0;
          var r = function() {
            function e3(e4) {
              this._renderCallback = e4;
            }
            return e3.prototype.dispose = function() {
              this._animationFrame && (window.cancelAnimationFrame(this._animationFrame), this._animationFrame = void 0);
            }, e3.prototype.refresh = function(e4, t3, r2) {
              var i = this;
              this._rowCount = r2, e4 = e4 !== void 0 ? e4 : 0, t3 = t3 !== void 0 ? t3 : this._rowCount - 1, this._rowStart = this._rowStart !== void 0 ? Math.min(this._rowStart, e4) : e4, this._rowEnd = this._rowEnd !== void 0 ? Math.max(this._rowEnd, t3) : t3, this._animationFrame || (this._animationFrame = window.requestAnimationFrame(function() {
                return i._innerRefresh();
              }));
            }, e3.prototype._innerRefresh = function() {
              if (this._rowStart !== void 0 && this._rowEnd !== void 0 && this._rowCount !== void 0) {
                var e4 = Math.max(this._rowStart, 0), t3 = Math.min(this._rowEnd, this._rowCount - 1);
                this._rowStart = void 0, this._rowEnd = void 0, this._animationFrame = void 0, this._renderCallback(e4, t3);
              }
            }, e3;
          }();
          t2.RenderDebouncer = r;
        }, 5596: function(e2, t2, r) {
          var i, n = this && this.__extends || (i = function(e3, t3) {
            return (i = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(e4, t4) {
              e4.__proto__ = t4;
            } || function(e4, t4) {
              for (var r2 in t4)
                Object.prototype.hasOwnProperty.call(t4, r2) && (e4[r2] = t4[r2]);
            })(e3, t3);
          }, function(e3, t3) {
            function r2() {
              this.constructor = e3;
            }
            i(e3, t3), e3.prototype = t3 === null ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
          });
          Object.defineProperty(t2, "__esModule", {value: true}), t2.ScreenDprMonitor = void 0;
          var o = function(e3) {
            function t3() {
              var t4 = e3 !== null && e3.apply(this, arguments) || this;
              return t4._currentDevicePixelRatio = window.devicePixelRatio, t4;
            }
            return n(t3, e3), t3.prototype.setListener = function(e4) {
              var t4 = this;
              this._listener && this.clearListener(), this._listener = e4, this._outerListener = function() {
                t4._listener && (t4._listener(window.devicePixelRatio, t4._currentDevicePixelRatio), t4._updateDpr());
              }, this._updateDpr();
            }, t3.prototype.dispose = function() {
              e3.prototype.dispose.call(this), this.clearListener();
            }, t3.prototype._updateDpr = function() {
              var e4;
              this._outerListener && ((e4 = this._resolutionMediaMatchList) === null || e4 === void 0 || e4.removeListener(this._outerListener), this._currentDevicePixelRatio = window.devicePixelRatio, this._resolutionMediaMatchList = window.matchMedia("screen and (resolution: " + window.devicePixelRatio + "dppx)"), this._resolutionMediaMatchList.addListener(this._outerListener));
            }, t3.prototype.clearListener = function() {
              this._resolutionMediaMatchList && this._listener && this._outerListener && (this._resolutionMediaMatchList.removeListener(this._outerListener), this._resolutionMediaMatchList = void 0, this._listener = void 0, this._outerListener = void 0);
            }, t3;
          }(r(844).Disposable);
          t2.ScreenDprMonitor = o;
        }, 3236: function(e2, t2, r) {
          var i, n = this && this.__extends || (i = function(e3, t3) {
            return (i = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(e4, t4) {
              e4.__proto__ = t4;
            } || function(e4, t4) {
              for (var r2 in t4)
                Object.prototype.hasOwnProperty.call(t4, r2) && (e4[r2] = t4[r2]);
            })(e3, t3);
          }, function(e3, t3) {
            function r2() {
              this.constructor = e3;
            }
            i(e3, t3), e3.prototype = t3 === null ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
          });
          Object.defineProperty(t2, "__esModule", {value: true}), t2.Terminal = void 0;
          var o = r(2950), s = r(1680), a = r(3614), c = r(2584), l = r(5435), h = r(3525), u = r(3551), f = r(9312), _ = r(6114), d = r(3656), p = r(9042), v = r(357), g = r(6954), y = r(4567), b = r(1296), S = r(7399), m = r(8460), C = r(8437), w = r(5680), E = r(3230), L = r(4725), A = r(428), R = r(8934), k = r(6465), x = r(5114), D = r(8969), T = r(4774), O = typeof window != "undefined" ? window.document : null, M = function(e3) {
            function t3(t4) {
              t4 === void 0 && (t4 = {});
              var r2 = e3.call(this, t4) || this;
              return r2.browser = _, r2._keyDownHandled = false, r2._onCursorMove = new m.EventEmitter(), r2._onKey = new m.EventEmitter(), r2._onRender = new m.EventEmitter(), r2._onSelectionChange = new m.EventEmitter(), r2._onTitleChange = new m.EventEmitter(), r2._onFocus = new m.EventEmitter(), r2._onBlur = new m.EventEmitter(), r2._onA11yCharEmitter = new m.EventEmitter(), r2._onA11yTabEmitter = new m.EventEmitter(), r2._setup(), r2.linkifier = r2._instantiationService.createInstance(u.Linkifier), r2.linkifier2 = r2.register(r2._instantiationService.createInstance(k.Linkifier2)), r2.register(r2._inputHandler.onRequestBell(function() {
                return r2.bell();
              })), r2.register(r2._inputHandler.onRequestRefreshRows(function(e4, t5) {
                return r2.refresh(e4, t5);
              })), r2.register(r2._inputHandler.onRequestReset(function() {
                return r2.reset();
              })), r2.register(r2._inputHandler.onRequestScroll(function(e4, t5) {
                return r2.scroll(e4, t5 || void 0);
              })), r2.register(r2._inputHandler.onRequestWindowsOptionsReport(function(e4) {
                return r2._reportWindowsOptions(e4);
              })), r2.register(r2._inputHandler.onAnsiColorChange(function(e4) {
                return r2._changeAnsiColor(e4);
              })), r2.register(m.forwardEvent(r2._inputHandler.onCursorMove, r2._onCursorMove)), r2.register(m.forwardEvent(r2._inputHandler.onTitleChange, r2._onTitleChange)), r2.register(m.forwardEvent(r2._inputHandler.onA11yChar, r2._onA11yCharEmitter)), r2.register(m.forwardEvent(r2._inputHandler.onA11yTab, r2._onA11yTabEmitter)), r2.register(r2._bufferService.onResize(function(e4) {
                return r2._afterResize(e4.cols, e4.rows);
              })), r2;
            }
            return n(t3, e3), Object.defineProperty(t3.prototype, "options", {get: function() {
              return this.optionsService.options;
            }, enumerable: false, configurable: true}), Object.defineProperty(t3.prototype, "onCursorMove", {get: function() {
              return this._onCursorMove.event;
            }, enumerable: false, configurable: true}), Object.defineProperty(t3.prototype, "onKey", {get: function() {
              return this._onKey.event;
            }, enumerable: false, configurable: true}), Object.defineProperty(t3.prototype, "onRender", {get: function() {
              return this._onRender.event;
            }, enumerable: false, configurable: true}), Object.defineProperty(t3.prototype, "onSelectionChange", {get: function() {
              return this._onSelectionChange.event;
            }, enumerable: false, configurable: true}), Object.defineProperty(t3.prototype, "onTitleChange", {get: function() {
              return this._onTitleChange.event;
            }, enumerable: false, configurable: true}), Object.defineProperty(t3.prototype, "onFocus", {get: function() {
              return this._onFocus.event;
            }, enumerable: false, configurable: true}), Object.defineProperty(t3.prototype, "onBlur", {get: function() {
              return this._onBlur.event;
            }, enumerable: false, configurable: true}), Object.defineProperty(t3.prototype, "onA11yChar", {get: function() {
              return this._onA11yCharEmitter.event;
            }, enumerable: false, configurable: true}), Object.defineProperty(t3.prototype, "onA11yTab", {get: function() {
              return this._onA11yTabEmitter.event;
            }, enumerable: false, configurable: true}), t3.prototype._changeAnsiColor = function(e4) {
              var t4, r2, i2 = this;
              this._colorManager && (e4.colors.forEach(function(e5) {
                var t5 = T.rgba.toColor(e5.red, e5.green, e5.blue);
                i2._colorManager.colors.ansi[e5.colorIndex] = t5;
              }), (t4 = this._renderService) === null || t4 === void 0 || t4.setColors(this._colorManager.colors), (r2 = this.viewport) === null || r2 === void 0 || r2.onThemeChange(this._colorManager.colors));
            }, t3.prototype.dispose = function() {
              var t4, r2, i2;
              this._isDisposed || (e3.prototype.dispose.call(this), (t4 = this._renderService) === null || t4 === void 0 || t4.dispose(), this._customKeyEventHandler = void 0, this.write = function() {
              }, (i2 = (r2 = this.element) === null || r2 === void 0 ? void 0 : r2.parentNode) === null || i2 === void 0 || i2.removeChild(this.element));
            }, t3.prototype._setup = function() {
              e3.prototype._setup.call(this), this._customKeyEventHandler = void 0;
            }, Object.defineProperty(t3.prototype, "buffer", {get: function() {
              return this.buffers.active;
            }, enumerable: false, configurable: true}), t3.prototype.focus = function() {
              this.textarea && this.textarea.focus({preventScroll: true});
            }, t3.prototype._updateOptions = function(t4) {
              var r2, i2, n2, o2;
              switch (e3.prototype._updateOptions.call(this, t4), t4) {
                case "fontFamily":
                case "fontSize":
                  (r2 = this._renderService) === null || r2 === void 0 || r2.clear(), (i2 = this._charSizeService) === null || i2 === void 0 || i2.measure();
                  break;
                case "cursorBlink":
                case "cursorStyle":
                  this.refresh(this.buffer.y, this.buffer.y);
                  break;
                case "drawBoldTextInBrightColors":
                case "letterSpacing":
                case "lineHeight":
                case "fontWeight":
                case "fontWeightBold":
                case "minimumContrastRatio":
                  this._renderService && (this._renderService.clear(), this._renderService.onResize(this.cols, this.rows), this.refresh(0, this.rows - 1));
                  break;
                case "rendererType":
                  this._renderService && (this._renderService.setRenderer(this._createRenderer()), this._renderService.onResize(this.cols, this.rows));
                  break;
                case "scrollback":
                  (n2 = this.viewport) === null || n2 === void 0 || n2.syncScrollArea();
                  break;
                case "screenReaderMode":
                  this.optionsService.options.screenReaderMode ? !this._accessibilityManager && this._renderService && (this._accessibilityManager = new y.AccessibilityManager(this, this._renderService)) : ((o2 = this._accessibilityManager) === null || o2 === void 0 || o2.dispose(), this._accessibilityManager = void 0);
                  break;
                case "tabStopWidth":
                  this.buffers.setupTabStops();
                  break;
                case "theme":
                  this._setTheme(this.optionsService.options.theme);
              }
            }, t3.prototype._onTextAreaFocus = function(e4) {
              this._coreService.decPrivateModes.sendFocus && this._coreService.triggerDataEvent(c.C0.ESC + "[I"), this.updateCursorStyle(e4), this.element.classList.add("focus"), this._showCursor(), this._onFocus.fire();
            }, t3.prototype.blur = function() {
              var e4;
              return (e4 = this.textarea) === null || e4 === void 0 ? void 0 : e4.blur();
            }, t3.prototype._onTextAreaBlur = function() {
              this.textarea.value = "", this.refresh(this.buffer.y, this.buffer.y), this._coreService.decPrivateModes.sendFocus && this._coreService.triggerDataEvent(c.C0.ESC + "[O"), this.element.classList.remove("focus"), this._onBlur.fire();
            }, t3.prototype._syncTextArea = function() {
              if (this.textarea && this.buffer.isCursorInViewport && !this._compositionHelper.isComposing) {
                var e4 = Math.ceil(this._charSizeService.height * this.optionsService.options.lineHeight), t4 = this._bufferService.buffer.y * e4, r2 = this._bufferService.buffer.x * this._charSizeService.width;
                this.textarea.style.left = r2 + "px", this.textarea.style.top = t4 + "px", this.textarea.style.width = this._charSizeService.width + "px", this.textarea.style.height = e4 + "px", this.textarea.style.lineHeight = e4 + "px", this.textarea.style.zIndex = "-5";
              }
            }, t3.prototype._initGlobal = function() {
              var e4 = this;
              this._bindKeys(), this.register(d.addDisposableDomListener(this.element, "copy", function(t5) {
                e4.hasSelection() && a.copyHandler(t5, e4._selectionService);
              }));
              var t4 = function(t5) {
                return a.handlePasteEvent(t5, e4.textarea, e4._coreService);
              };
              this.register(d.addDisposableDomListener(this.textarea, "paste", t4)), this.register(d.addDisposableDomListener(this.element, "paste", t4)), _.isFirefox ? this.register(d.addDisposableDomListener(this.element, "mousedown", function(t5) {
                t5.button === 2 && a.rightClickHandler(t5, e4.textarea, e4.screenElement, e4._selectionService, e4.options.rightClickSelectsWord);
              })) : this.register(d.addDisposableDomListener(this.element, "contextmenu", function(t5) {
                a.rightClickHandler(t5, e4.textarea, e4.screenElement, e4._selectionService, e4.options.rightClickSelectsWord);
              })), _.isLinux && this.register(d.addDisposableDomListener(this.element, "auxclick", function(t5) {
                t5.button === 1 && a.moveTextAreaUnderMouseCursor(t5, e4.textarea, e4.screenElement);
              }));
            }, t3.prototype._bindKeys = function() {
              var e4 = this;
              this.register(d.addDisposableDomListener(this.textarea, "keyup", function(t4) {
                return e4._keyUp(t4);
              }, true)), this.register(d.addDisposableDomListener(this.textarea, "keydown", function(t4) {
                return e4._keyDown(t4);
              }, true)), this.register(d.addDisposableDomListener(this.textarea, "keypress", function(t4) {
                return e4._keyPress(t4);
              }, true)), this.register(d.addDisposableDomListener(this.textarea, "compositionstart", function() {
                return e4._compositionHelper.compositionstart();
              })), this.register(d.addDisposableDomListener(this.textarea, "compositionupdate", function(t4) {
                return e4._compositionHelper.compositionupdate(t4);
              })), this.register(d.addDisposableDomListener(this.textarea, "compositionend", function() {
                return e4._compositionHelper.compositionend();
              })), this.register(this.onRender(function() {
                return e4._compositionHelper.updateCompositionElements();
              })), this.register(this.onRender(function(t4) {
                return e4._queueLinkification(t4.start, t4.end);
              }));
            }, t3.prototype.open = function(e4) {
              var t4 = this;
              if (!e4)
                throw new Error("Terminal requires a parent element.");
              O.body.contains(e4) || this._logService.debug("Terminal.open was called on an element that was not attached to the DOM"), this._document = e4.ownerDocument, this.element = this._document.createElement("div"), this.element.dir = "ltr", this.element.classList.add("terminal"), this.element.classList.add("xterm"), this.element.setAttribute("tabindex", "0"), this.element.setAttribute("role", "document"), e4.appendChild(this.element);
              var r2 = O.createDocumentFragment();
              this._viewportElement = O.createElement("div"), this._viewportElement.classList.add("xterm-viewport"), r2.appendChild(this._viewportElement), this._viewportScrollArea = O.createElement("div"), this._viewportScrollArea.classList.add("xterm-scroll-area"), this._viewportElement.appendChild(this._viewportScrollArea), this.screenElement = O.createElement("div"), this.screenElement.classList.add("xterm-screen"), this._helperContainer = O.createElement("div"), this._helperContainer.classList.add("xterm-helpers"), this.screenElement.appendChild(this._helperContainer), r2.appendChild(this.screenElement), this.textarea = O.createElement("textarea"), this.textarea.classList.add("xterm-helper-textarea"), this.textarea.setAttribute("aria-label", p.promptLabel), this.textarea.setAttribute("aria-multiline", "false"), this.textarea.setAttribute("autocorrect", "off"), this.textarea.setAttribute("autocapitalize", "off"), this.textarea.setAttribute("spellcheck", "false"), this.textarea.tabIndex = 0, this.register(d.addDisposableDomListener(this.textarea, "focus", function(e5) {
                return t4._onTextAreaFocus(e5);
              })), this.register(d.addDisposableDomListener(this.textarea, "blur", function() {
                return t4._onTextAreaBlur();
              })), this._helperContainer.appendChild(this.textarea);
              var i2 = this._instantiationService.createInstance(x.CoreBrowserService, this.textarea);
              this._instantiationService.setService(L.ICoreBrowserService, i2), this._charSizeService = this._instantiationService.createInstance(A.CharSizeService, this._document, this._helperContainer), this._instantiationService.setService(L.ICharSizeService, this._charSizeService), this._compositionView = O.createElement("div"), this._compositionView.classList.add("composition-view"), this._compositionHelper = this._instantiationService.createInstance(o.CompositionHelper, this.textarea, this._compositionView), this._helperContainer.appendChild(this._compositionView), this.element.appendChild(r2), this._theme = this.options.theme || this._theme, this._colorManager = new w.ColorManager(O, this.options.allowTransparency), this.register(this.optionsService.onOptionChange(function(e5) {
                return t4._colorManager.onOptionsChange(e5);
              })), this._colorManager.setTheme(this._theme);
              var n2 = this._createRenderer();
              this._renderService = this.register(this._instantiationService.createInstance(E.RenderService, n2, this.rows, this.screenElement)), this._instantiationService.setService(L.IRenderService, this._renderService), this.register(this._renderService.onRenderedBufferChange(function(e5) {
                return t4._onRender.fire(e5);
              })), this.onResize(function(e5) {
                return t4._renderService.resize(e5.cols, e5.rows);
              }), this._soundService = this._instantiationService.createInstance(v.SoundService), this._instantiationService.setService(L.ISoundService, this._soundService), this._mouseService = this._instantiationService.createInstance(R.MouseService), this._instantiationService.setService(L.IMouseService, this._mouseService), this.viewport = this._instantiationService.createInstance(s.Viewport, function(e5, r3) {
                return t4.scrollLines(e5, r3);
              }, this._viewportElement, this._viewportScrollArea), this.viewport.onThemeChange(this._colorManager.colors), this.register(this._inputHandler.onRequestSyncScrollBar(function() {
                return t4.viewport.syncScrollArea();
              })), this.register(this.viewport), this.register(this.onCursorMove(function() {
                t4._renderService.onCursorMove(), t4._syncTextArea();
              })), this.register(this.onResize(function() {
                return t4._renderService.onResize(t4.cols, t4.rows);
              })), this.register(this.onBlur(function() {
                return t4._renderService.onBlur();
              })), this.register(this.onFocus(function() {
                return t4._renderService.onFocus();
              })), this.register(this._renderService.onDimensionsChange(function() {
                return t4.viewport.syncScrollArea();
              })), this._selectionService = this.register(this._instantiationService.createInstance(f.SelectionService, this.element, this.screenElement)), this._instantiationService.setService(L.ISelectionService, this._selectionService), this.register(this._selectionService.onRequestScrollLines(function(e5) {
                return t4.scrollLines(e5.amount, e5.suppressScrollEvent);
              })), this.register(this._selectionService.onSelectionChange(function() {
                return t4._onSelectionChange.fire();
              })), this.register(this._selectionService.onRequestRedraw(function(e5) {
                return t4._renderService.onSelectionChanged(e5.start, e5.end, e5.columnSelectMode);
              })), this.register(this._selectionService.onLinuxMouseSelection(function(e5) {
                t4.textarea.value = e5, t4.textarea.focus(), t4.textarea.select();
              })), this.register(this.onScroll(function() {
                t4.viewport.syncScrollArea(), t4._selectionService.refresh();
              })), this.register(d.addDisposableDomListener(this._viewportElement, "scroll", function() {
                return t4._selectionService.refresh();
              })), this._mouseZoneManager = this._instantiationService.createInstance(g.MouseZoneManager, this.element, this.screenElement), this.register(this._mouseZoneManager), this.register(this.onScroll(function() {
                return t4._mouseZoneManager.clearAll();
              })), this.linkifier.attachToDom(this.element, this._mouseZoneManager), this.linkifier2.attachToDom(this.element, this._mouseService, this._renderService), this.register(d.addDisposableDomListener(this.element, "mousedown", function(e5) {
                return t4._selectionService.onMouseDown(e5);
              })), this._coreMouseService.areMouseEventsActive ? (this._selectionService.disable(), this.element.classList.add("enable-mouse-events")) : this._selectionService.enable(), this.options.screenReaderMode && (this._accessibilityManager = new y.AccessibilityManager(this, this._renderService)), this._charSizeService.measure(), this.refresh(0, this.rows - 1), this._initGlobal(), this.bindMouse();
            }, t3.prototype._createRenderer = function() {
              switch (this.options.rendererType) {
                case "canvas":
                  return this._instantiationService.createInstance(h.Renderer, this._colorManager.colors, this.screenElement, this.linkifier, this.linkifier2);
                case "dom":
                  return this._instantiationService.createInstance(b.DomRenderer, this._colorManager.colors, this.element, this.screenElement, this._viewportElement, this.linkifier, this.linkifier2);
                default:
                  throw new Error('Unrecognized rendererType "' + this.options.rendererType + '"');
              }
            }, t3.prototype._setTheme = function(e4) {
              var t4, r2, i2;
              this._theme = e4, (t4 = this._colorManager) === null || t4 === void 0 || t4.setTheme(e4), (r2 = this._renderService) === null || r2 === void 0 || r2.setColors(this._colorManager.colors), (i2 = this.viewport) === null || i2 === void 0 || i2.onThemeChange(this._colorManager.colors);
            }, t3.prototype.bindMouse = function() {
              var e4 = this, t4 = this, r2 = this.element;
              function i2(e5) {
                var r3, i3, n3 = t4._mouseService.getRawByteCoords(e5, t4.screenElement, t4.cols, t4.rows);
                if (!n3)
                  return false;
                switch (e5.overrideType || e5.type) {
                  case "mousemove":
                    i3 = 32, e5.buttons === void 0 ? (r3 = 3, e5.button !== void 0 && (r3 = e5.button < 3 ? e5.button : 3)) : r3 = 1 & e5.buttons ? 0 : 4 & e5.buttons ? 1 : 2 & e5.buttons ? 2 : 3;
                    break;
                  case "mouseup":
                    i3 = 0, r3 = e5.button < 3 ? e5.button : 3;
                    break;
                  case "mousedown":
                    i3 = 1, r3 = e5.button < 3 ? e5.button : 3;
                    break;
                  case "wheel":
                    e5.deltaY !== 0 && (i3 = e5.deltaY < 0 ? 0 : 1), r3 = 4;
                    break;
                  default:
                    return false;
                }
                return !(i3 === void 0 || r3 === void 0 || r3 > 4) && t4._coreMouseService.triggerMouseEvent({col: n3.x - 33, row: n3.y - 33, button: r3, action: i3, ctrl: e5.ctrlKey, alt: e5.altKey, shift: e5.shiftKey});
              }
              var n2 = {mouseup: null, wheel: null, mousedrag: null, mousemove: null}, o2 = function(t5) {
                return i2(t5), t5.buttons || (e4._document.removeEventListener("mouseup", n2.mouseup), n2.mousedrag && e4._document.removeEventListener("mousemove", n2.mousedrag)), e4.cancel(t5);
              }, s2 = function(t5) {
                return i2(t5), t5.preventDefault(), e4.cancel(t5);
              }, a2 = function(e5) {
                e5.buttons && i2(e5);
              }, l2 = function(e5) {
                e5.buttons || i2(e5);
              };
              this.register(this._coreMouseService.onProtocolChange(function(t5) {
                t5 ? (e4.optionsService.options.logLevel === "debug" && e4._logService.debug("Binding to mouse events:", e4._coreMouseService.explainEvents(t5)), e4.element.classList.add("enable-mouse-events"), e4._selectionService.disable()) : (e4._logService.debug("Unbinding from mouse events."), e4.element.classList.remove("enable-mouse-events"), e4._selectionService.enable()), 8 & t5 ? n2.mousemove || (r2.addEventListener("mousemove", l2), n2.mousemove = l2) : (r2.removeEventListener("mousemove", n2.mousemove), n2.mousemove = null), 16 & t5 ? n2.wheel || (r2.addEventListener("wheel", s2, {passive: false}), n2.wheel = s2) : (r2.removeEventListener("wheel", n2.wheel), n2.wheel = null), 2 & t5 ? n2.mouseup || (n2.mouseup = o2) : (e4._document.removeEventListener("mouseup", n2.mouseup), n2.mouseup = null), 4 & t5 ? n2.mousedrag || (n2.mousedrag = a2) : (e4._document.removeEventListener("mousemove", n2.mousedrag), n2.mousedrag = null);
              })), this._coreMouseService.activeProtocol = this._coreMouseService.activeProtocol, this.register(d.addDisposableDomListener(r2, "mousedown", function(t5) {
                if (t5.preventDefault(), e4.focus(), e4._coreMouseService.areMouseEventsActive && !e4._selectionService.shouldForceSelection(t5))
                  return i2(t5), n2.mouseup && e4._document.addEventListener("mouseup", n2.mouseup), n2.mousedrag && e4._document.addEventListener("mousemove", n2.mousedrag), e4.cancel(t5);
              })), this.register(d.addDisposableDomListener(r2, "wheel", function(t5) {
                if (n2.wheel)
                  ;
                else if (!e4.buffer.hasScrollback) {
                  var r3 = e4.viewport.getLinesScrolled(t5);
                  if (r3 === 0)
                    return;
                  for (var i3 = c.C0.ESC + (e4._coreService.decPrivateModes.applicationCursorKeys ? "O" : "[") + (t5.deltaY < 0 ? "A" : "B"), o3 = "", s3 = 0; s3 < Math.abs(r3); s3++)
                    o3 += i3;
                  e4._coreService.triggerDataEvent(o3, true);
                }
              }, {passive: true})), this.register(d.addDisposableDomListener(r2, "wheel", function(t5) {
                if (!n2.wheel)
                  return e4.viewport.onWheel(t5) ? void 0 : e4.cancel(t5);
              }, {passive: false})), this.register(d.addDisposableDomListener(r2, "touchstart", function(t5) {
                if (!e4._coreMouseService.areMouseEventsActive)
                  return e4.viewport.onTouchStart(t5), e4.cancel(t5);
              }, {passive: true})), this.register(d.addDisposableDomListener(r2, "touchmove", function(t5) {
                if (!e4._coreMouseService.areMouseEventsActive)
                  return e4.viewport.onTouchMove(t5) ? void 0 : e4.cancel(t5);
              }, {passive: false}));
            }, t3.prototype.refresh = function(e4, t4) {
              var r2;
              (r2 = this._renderService) === null || r2 === void 0 || r2.refreshRows(e4, t4);
            }, t3.prototype._queueLinkification = function(e4, t4) {
              var r2;
              (r2 = this.linkifier) === null || r2 === void 0 || r2.linkifyRows(e4, t4);
            }, t3.prototype.updateCursorStyle = function(e4) {
              this._selectionService && this._selectionService.shouldColumnSelect(e4) ? this.element.classList.add("column-select") : this.element.classList.remove("column-select");
            }, t3.prototype._showCursor = function() {
              this._coreService.isCursorInitialized || (this._coreService.isCursorInitialized = true, this.refresh(this.buffer.y, this.buffer.y));
            }, t3.prototype.scrollLines = function(t4, r2) {
              e3.prototype.scrollLines.call(this, t4, r2), this.refresh(0, this.rows - 1);
            }, t3.prototype.paste = function(e4) {
              a.paste(e4, this.textarea, this._coreService);
            }, t3.prototype.attachCustomKeyEventHandler = function(e4) {
              this._customKeyEventHandler = e4;
            }, t3.prototype.registerLinkMatcher = function(e4, t4, r2) {
              var i2 = this.linkifier.registerLinkMatcher(e4, t4, r2);
              return this.refresh(0, this.rows - 1), i2;
            }, t3.prototype.deregisterLinkMatcher = function(e4) {
              this.linkifier.deregisterLinkMatcher(e4) && this.refresh(0, this.rows - 1);
            }, t3.prototype.registerLinkProvider = function(e4) {
              return this.linkifier2.registerLinkProvider(e4);
            }, t3.prototype.registerCharacterJoiner = function(e4) {
              var t4 = this._renderService.registerCharacterJoiner(e4);
              return this.refresh(0, this.rows - 1), t4;
            }, t3.prototype.deregisterCharacterJoiner = function(e4) {
              this._renderService.deregisterCharacterJoiner(e4) && this.refresh(0, this.rows - 1);
            }, Object.defineProperty(t3.prototype, "markers", {get: function() {
              return this.buffer.markers;
            }, enumerable: false, configurable: true}), t3.prototype.addMarker = function(e4) {
              if (this.buffer === this.buffers.normal)
                return this.buffer.addMarker(this.buffer.ybase + this.buffer.y + e4);
            }, t3.prototype.hasSelection = function() {
              return !!this._selectionService && this._selectionService.hasSelection;
            }, t3.prototype.select = function(e4, t4, r2) {
              this._selectionService.setSelection(e4, t4, r2);
            }, t3.prototype.getSelection = function() {
              return this._selectionService ? this._selectionService.selectionText : "";
            }, t3.prototype.getSelectionPosition = function() {
              if (this._selectionService && this._selectionService.hasSelection)
                return {startColumn: this._selectionService.selectionStart[0], startRow: this._selectionService.selectionStart[1], endColumn: this._selectionService.selectionEnd[0], endRow: this._selectionService.selectionEnd[1]};
            }, t3.prototype.clearSelection = function() {
              var e4;
              (e4 = this._selectionService) === null || e4 === void 0 || e4.clearSelection();
            }, t3.prototype.selectAll = function() {
              var e4;
              (e4 = this._selectionService) === null || e4 === void 0 || e4.selectAll();
            }, t3.prototype.selectLines = function(e4, t4) {
              var r2;
              (r2 = this._selectionService) === null || r2 === void 0 || r2.selectLines(e4, t4);
            }, t3.prototype._keyDown = function(e4) {
              if (this._keyDownHandled = false, this._customKeyEventHandler && this._customKeyEventHandler(e4) === false)
                return false;
              if (!this._compositionHelper.keydown(e4))
                return this.buffer.ybase !== this.buffer.ydisp && this.scrollToBottom(), false;
              var t4 = S.evaluateKeyboardEvent(e4, this._coreService.decPrivateModes.applicationCursorKeys, this.browser.isMac, this.options.macOptionIsMeta);
              if (this.updateCursorStyle(e4), t4.type === 3 || t4.type === 2) {
                var r2 = this.rows - 1;
                return this.scrollLines(t4.type === 2 ? -r2 : r2), this.cancel(e4, true);
              }
              return t4.type === 1 && this.selectAll(), !!this._isThirdLevelShift(this.browser, e4) || (t4.cancel && this.cancel(e4, true), !t4.key || (t4.key !== c.C0.ETX && t4.key !== c.C0.CR || (this.textarea.value = ""), this._onKey.fire({key: t4.key, domEvent: e4}), this._showCursor(), this._coreService.triggerDataEvent(t4.key, true), this.optionsService.options.screenReaderMode ? void (this._keyDownHandled = true) : this.cancel(e4, true)));
            }, t3.prototype._isThirdLevelShift = function(e4, t4) {
              var r2 = e4.isMac && !this.options.macOptionIsMeta && t4.altKey && !t4.ctrlKey && !t4.metaKey || e4.isWindows && t4.altKey && t4.ctrlKey && !t4.metaKey;
              return t4.type === "keypress" ? r2 : r2 && (!t4.keyCode || t4.keyCode > 47);
            }, t3.prototype._keyUp = function(e4) {
              this._customKeyEventHandler && this._customKeyEventHandler(e4) === false || (function(e5) {
                return e5.keyCode === 16 || e5.keyCode === 17 || e5.keyCode === 18;
              }(e4) || this.focus(), this.updateCursorStyle(e4));
            }, t3.prototype._keyPress = function(e4) {
              var t4;
              if (this._keyDownHandled)
                return false;
              if (this._customKeyEventHandler && this._customKeyEventHandler(e4) === false)
                return false;
              if (this.cancel(e4), e4.charCode)
                t4 = e4.charCode;
              else if (e4.which === null || e4.which === void 0)
                t4 = e4.keyCode;
              else {
                if (e4.which === 0 || e4.charCode === 0)
                  return false;
                t4 = e4.which;
              }
              return !(!t4 || (e4.altKey || e4.ctrlKey || e4.metaKey) && !this._isThirdLevelShift(this.browser, e4) || (t4 = String.fromCharCode(t4), this._onKey.fire({key: t4, domEvent: e4}), this._showCursor(), this._coreService.triggerDataEvent(t4, true), 0));
            }, t3.prototype.bell = function() {
              this._soundBell() && this._soundService.playBellSound();
            }, t3.prototype.resize = function(t4, r2) {
              t4 !== this.cols || r2 !== this.rows ? e3.prototype.resize.call(this, t4, r2) : this._charSizeService && !this._charSizeService.hasValidSize && this._charSizeService.measure();
            }, t3.prototype._afterResize = function(e4, t4) {
              var r2, i2;
              (r2 = this._charSizeService) === null || r2 === void 0 || r2.measure(), (i2 = this.viewport) === null || i2 === void 0 || i2.syncScrollArea(true);
            }, t3.prototype.clear = function() {
              if (this.buffer.ybase !== 0 || this.buffer.y !== 0) {
                this.buffer.lines.set(0, this.buffer.lines.get(this.buffer.ybase + this.buffer.y)), this.buffer.lines.length = 1, this.buffer.ydisp = 0, this.buffer.ybase = 0, this.buffer.y = 0;
                for (var e4 = 1; e4 < this.rows; e4++)
                  this.buffer.lines.push(this.buffer.getBlankLine(C.DEFAULT_ATTR_DATA));
                this.refresh(0, this.rows - 1), this._onScroll.fire(this.buffer.ydisp);
              }
            }, t3.prototype.reset = function() {
              var t4, r2;
              this.options.rows = this.rows, this.options.cols = this.cols;
              var i2 = this._customKeyEventHandler;
              this._setup(), e3.prototype.reset.call(this), (t4 = this._selectionService) === null || t4 === void 0 || t4.reset(), this._customKeyEventHandler = i2, this.refresh(0, this.rows - 1), (r2 = this.viewport) === null || r2 === void 0 || r2.syncScrollArea();
            }, t3.prototype._reportWindowsOptions = function(e4) {
              if (this._renderService)
                switch (e4) {
                  case l.WindowsOptionsReportType.GET_WIN_SIZE_PIXELS:
                    var t4 = this._renderService.dimensions.scaledCanvasWidth.toFixed(0), r2 = this._renderService.dimensions.scaledCanvasHeight.toFixed(0);
                    this._coreService.triggerDataEvent(c.C0.ESC + "[4;" + r2 + ";" + t4 + "t");
                    break;
                  case l.WindowsOptionsReportType.GET_CELL_SIZE_PIXELS:
                    var i2 = this._renderService.dimensions.scaledCellWidth.toFixed(0), n2 = this._renderService.dimensions.scaledCellHeight.toFixed(0);
                    this._coreService.triggerDataEvent(c.C0.ESC + "[6;" + n2 + ";" + i2 + "t");
                }
            }, t3.prototype.cancel = function(e4, t4) {
              if (this.options.cancelEvents || t4)
                return e4.preventDefault(), e4.stopPropagation(), false;
            }, t3.prototype._visualBell = function() {
              return false;
            }, t3.prototype._soundBell = function() {
              return this.options.bellStyle === "sound";
            }, t3;
          }(D.CoreTerminal);
          t2.Terminal = M;
        }, 1680: function(e2, t2, r) {
          var i, n = this && this.__extends || (i = function(e3, t3) {
            return (i = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(e4, t4) {
              e4.__proto__ = t4;
            } || function(e4, t4) {
              for (var r2 in t4)
                Object.prototype.hasOwnProperty.call(t4, r2) && (e4[r2] = t4[r2]);
            })(e3, t3);
          }, function(e3, t3) {
            function r2() {
              this.constructor = e3;
            }
            i(e3, t3), e3.prototype = t3 === null ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
          }), o = this && this.__decorate || function(e3, t3, r2, i2) {
            var n2, o2 = arguments.length, s2 = o2 < 3 ? t3 : i2 === null ? i2 = Object.getOwnPropertyDescriptor(t3, r2) : i2;
            if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
              s2 = Reflect.decorate(e3, t3, r2, i2);
            else
              for (var a2 = e3.length - 1; a2 >= 0; a2--)
                (n2 = e3[a2]) && (s2 = (o2 < 3 ? n2(s2) : o2 > 3 ? n2(t3, r2, s2) : n2(t3, r2)) || s2);
            return o2 > 3 && s2 && Object.defineProperty(t3, r2, s2), s2;
          }, s = this && this.__param || function(e3, t3) {
            return function(r2, i2) {
              t3(r2, i2, e3);
            };
          };
          Object.defineProperty(t2, "__esModule", {value: true}), t2.Viewport = void 0;
          var a = r(844), c = r(3656), l = r(4725), h = r(2585), u = function(e3) {
            function t3(t4, r2, i2, n2, o2, s2, a2) {
              var l2 = e3.call(this) || this;
              return l2._scrollLines = t4, l2._viewportElement = r2, l2._scrollArea = i2, l2._bufferService = n2, l2._optionsService = o2, l2._charSizeService = s2, l2._renderService = a2, l2.scrollBarWidth = 0, l2._currentRowHeight = 0, l2._lastRecordedBufferLength = 0, l2._lastRecordedViewportHeight = 0, l2._lastRecordedBufferHeight = 0, l2._lastTouchY = 0, l2._lastScrollTop = 0, l2._wheelPartialScroll = 0, l2._refreshAnimationFrame = null, l2._ignoreNextScrollEvent = false, l2.scrollBarWidth = l2._viewportElement.offsetWidth - l2._scrollArea.offsetWidth || 15, l2.register(c.addDisposableDomListener(l2._viewportElement, "scroll", l2._onScroll.bind(l2))), setTimeout(function() {
                return l2.syncScrollArea();
              }, 0), l2;
            }
            return n(t3, e3), t3.prototype.onThemeChange = function(e4) {
              this._viewportElement.style.backgroundColor = e4.background.css;
            }, t3.prototype._refresh = function(e4) {
              var t4 = this;
              if (e4)
                return this._innerRefresh(), void (this._refreshAnimationFrame !== null && cancelAnimationFrame(this._refreshAnimationFrame));
              this._refreshAnimationFrame === null && (this._refreshAnimationFrame = requestAnimationFrame(function() {
                return t4._innerRefresh();
              }));
            }, t3.prototype._innerRefresh = function() {
              if (this._charSizeService.height > 0) {
                this._currentRowHeight = this._renderService.dimensions.scaledCellHeight / window.devicePixelRatio, this._lastRecordedViewportHeight = this._viewportElement.offsetHeight;
                var e4 = Math.round(this._currentRowHeight * this._lastRecordedBufferLength) + (this._lastRecordedViewportHeight - this._renderService.dimensions.canvasHeight);
                this._lastRecordedBufferHeight !== e4 && (this._lastRecordedBufferHeight = e4, this._scrollArea.style.height = this._lastRecordedBufferHeight + "px");
              }
              var t4 = this._bufferService.buffer.ydisp * this._currentRowHeight;
              this._viewportElement.scrollTop !== t4 && (this._ignoreNextScrollEvent = true, this._viewportElement.scrollTop = t4), this._refreshAnimationFrame = null;
            }, t3.prototype.syncScrollArea = function(e4) {
              if (e4 === void 0 && (e4 = false), this._lastRecordedBufferLength !== this._bufferService.buffer.lines.length)
                return this._lastRecordedBufferLength = this._bufferService.buffer.lines.length, void this._refresh(e4);
              if (this._lastRecordedViewportHeight === this._renderService.dimensions.canvasHeight) {
                var t4 = this._bufferService.buffer.ydisp * this._currentRowHeight;
                this._lastScrollTop === t4 && this._lastScrollTop === this._viewportElement.scrollTop && this._renderService.dimensions.scaledCellHeight / window.devicePixelRatio === this._currentRowHeight || this._refresh(e4);
              } else
                this._refresh(e4);
            }, t3.prototype._onScroll = function(e4) {
              if (this._lastScrollTop = this._viewportElement.scrollTop, this._viewportElement.offsetParent)
                if (this._ignoreNextScrollEvent)
                  this._ignoreNextScrollEvent = false;
                else {
                  var t4 = Math.round(this._lastScrollTop / this._currentRowHeight) - this._bufferService.buffer.ydisp;
                  this._scrollLines(t4, true);
                }
            }, t3.prototype._bubbleScroll = function(e4, t4) {
              var r2 = this._viewportElement.scrollTop + this._lastRecordedViewportHeight;
              return !(t4 < 0 && this._viewportElement.scrollTop !== 0 || t4 > 0 && r2 < this._lastRecordedBufferHeight) || (e4.cancelable && e4.preventDefault(), false);
            }, t3.prototype.onWheel = function(e4) {
              var t4 = this._getPixelsScrolled(e4);
              return t4 !== 0 && (this._viewportElement.scrollTop += t4, this._bubbleScroll(e4, t4));
            }, t3.prototype._getPixelsScrolled = function(e4) {
              if (e4.deltaY === 0)
                return 0;
              var t4 = this._applyScrollModifier(e4.deltaY, e4);
              return e4.deltaMode === WheelEvent.DOM_DELTA_LINE ? t4 *= this._currentRowHeight : e4.deltaMode === WheelEvent.DOM_DELTA_PAGE && (t4 *= this._currentRowHeight * this._bufferService.rows), t4;
            }, t3.prototype.getLinesScrolled = function(e4) {
              if (e4.deltaY === 0)
                return 0;
              var t4 = this._applyScrollModifier(e4.deltaY, e4);
              return e4.deltaMode === WheelEvent.DOM_DELTA_PIXEL ? (t4 /= this._currentRowHeight + 0, this._wheelPartialScroll += t4, t4 = Math.floor(Math.abs(this._wheelPartialScroll)) * (this._wheelPartialScroll > 0 ? 1 : -1), this._wheelPartialScroll %= 1) : e4.deltaMode === WheelEvent.DOM_DELTA_PAGE && (t4 *= this._bufferService.rows), t4;
            }, t3.prototype._applyScrollModifier = function(e4, t4) {
              var r2 = this._optionsService.options.fastScrollModifier;
              return r2 === "alt" && t4.altKey || r2 === "ctrl" && t4.ctrlKey || r2 === "shift" && t4.shiftKey ? e4 * this._optionsService.options.fastScrollSensitivity * this._optionsService.options.scrollSensitivity : e4 * this._optionsService.options.scrollSensitivity;
            }, t3.prototype.onTouchStart = function(e4) {
              this._lastTouchY = e4.touches[0].pageY;
            }, t3.prototype.onTouchMove = function(e4) {
              var t4 = this._lastTouchY - e4.touches[0].pageY;
              return this._lastTouchY = e4.touches[0].pageY, t4 !== 0 && (this._viewportElement.scrollTop += t4, this._bubbleScroll(e4, t4));
            }, o([s(3, h.IBufferService), s(4, h.IOptionsService), s(5, l.ICharSizeService), s(6, l.IRenderService)], t3);
          }(a.Disposable);
          t2.Viewport = u;
        }, 2950: function(e2, t2, r) {
          var i = this && this.__decorate || function(e3, t3, r2, i2) {
            var n2, o2 = arguments.length, s2 = o2 < 3 ? t3 : i2 === null ? i2 = Object.getOwnPropertyDescriptor(t3, r2) : i2;
            if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
              s2 = Reflect.decorate(e3, t3, r2, i2);
            else
              for (var a2 = e3.length - 1; a2 >= 0; a2--)
                (n2 = e3[a2]) && (s2 = (o2 < 3 ? n2(s2) : o2 > 3 ? n2(t3, r2, s2) : n2(t3, r2)) || s2);
            return o2 > 3 && s2 && Object.defineProperty(t3, r2, s2), s2;
          }, n = this && this.__param || function(e3, t3) {
            return function(r2, i2) {
              t3(r2, i2, e3);
            };
          };
          Object.defineProperty(t2, "__esModule", {value: true}), t2.CompositionHelper = void 0;
          var o = r(4725), s = r(2585), a = function() {
            function e3(e4, t3, r2, i2, n2, o2) {
              this._textarea = e4, this._compositionView = t3, this._bufferService = r2, this._optionsService = i2, this._charSizeService = n2, this._coreService = o2, this._isComposing = false, this._isSendingComposition = false, this._compositionPosition = {start: 0, end: 0}, this._dataAlreadySent = "";
            }
            return Object.defineProperty(e3.prototype, "isComposing", {get: function() {
              return this._isComposing;
            }, enumerable: false, configurable: true}), e3.prototype.compositionstart = function() {
              this._isComposing = true, this._compositionPosition.start = this._textarea.value.length, this._compositionView.textContent = "", this._dataAlreadySent = "", this._compositionView.classList.add("active");
            }, e3.prototype.compositionupdate = function(e4) {
              var t3 = this;
              this._compositionView.textContent = e4.data, this.updateCompositionElements(), setTimeout(function() {
                t3._compositionPosition.end = t3._textarea.value.length;
              }, 0);
            }, e3.prototype.compositionend = function() {
              this._finalizeComposition(true);
            }, e3.prototype.keydown = function(e4) {
              if (this._isComposing || this._isSendingComposition) {
                if (e4.keyCode === 229)
                  return false;
                if (e4.keyCode === 16 || e4.keyCode === 17 || e4.keyCode === 18)
                  return false;
                this._finalizeComposition(false);
              }
              return e4.keyCode !== 229 || (this._handleAnyTextareaChanges(), false);
            }, e3.prototype._finalizeComposition = function(e4) {
              var t3 = this;
              if (this._compositionView.classList.remove("active"), this._isComposing = false, e4) {
                var r2 = {start: this._compositionPosition.start, end: this._compositionPosition.end};
                this._isSendingComposition = true, setTimeout(function() {
                  if (t3._isSendingComposition) {
                    t3._isSendingComposition = false;
                    var e5;
                    r2.start += t3._dataAlreadySent.length, (e5 = t3._isComposing ? t3._textarea.value.substring(r2.start, r2.end) : t3._textarea.value.substring(r2.start)).length > 0 && t3._coreService.triggerDataEvent(e5, true);
                  }
                }, 0);
              } else {
                this._isSendingComposition = false;
                var i2 = this._textarea.value.substring(this._compositionPosition.start, this._compositionPosition.end);
                this._coreService.triggerDataEvent(i2, true);
              }
            }, e3.prototype._handleAnyTextareaChanges = function() {
              var e4 = this, t3 = this._textarea.value;
              setTimeout(function() {
                if (!e4._isComposing) {
                  var r2 = e4._textarea.value.replace(t3, "");
                  r2.length > 0 && (e4._dataAlreadySent = r2, e4._coreService.triggerDataEvent(r2, true));
                }
              }, 0);
            }, e3.prototype.updateCompositionElements = function(e4) {
              var t3 = this;
              if (this._isComposing) {
                if (this._bufferService.buffer.isCursorInViewport) {
                  var r2 = Math.ceil(this._charSizeService.height * this._optionsService.options.lineHeight), i2 = this._bufferService.buffer.y * r2, n2 = this._bufferService.buffer.x * this._charSizeService.width;
                  this._compositionView.style.left = n2 + "px", this._compositionView.style.top = i2 + "px", this._compositionView.style.height = r2 + "px", this._compositionView.style.lineHeight = r2 + "px", this._compositionView.style.fontFamily = this._optionsService.options.fontFamily, this._compositionView.style.fontSize = this._optionsService.options.fontSize + "px";
                  var o2 = this._compositionView.getBoundingClientRect();
                  this._textarea.style.left = n2 + "px", this._textarea.style.top = i2 + "px", this._textarea.style.width = o2.width + "px", this._textarea.style.height = o2.height + "px", this._textarea.style.lineHeight = o2.height + "px";
                }
                e4 || setTimeout(function() {
                  return t3.updateCompositionElements(true);
                }, 0);
              }
            }, i([n(2, s.IBufferService), n(3, s.IOptionsService), n(4, o.ICharSizeService), n(5, s.ICoreService)], e3);
          }();
          t2.CompositionHelper = a;
        }, 9806: (e2, t2) => {
          function r(e3, t3) {
            var r2 = t3.getBoundingClientRect();
            return [e3.clientX - r2.left, e3.clientY - r2.top];
          }
          Object.defineProperty(t2, "__esModule", {value: true}), t2.getRawByteCoords = t2.getCoords = t2.getCoordsRelativeToElement = void 0, t2.getCoordsRelativeToElement = r, t2.getCoords = function(e3, t3, i, n, o, s, a, c) {
            if (o) {
              var l = r(e3, t3);
              if (l)
                return l[0] = Math.ceil((l[0] + (c ? s / 2 : 0)) / s), l[1] = Math.ceil(l[1] / a), l[0] = Math.min(Math.max(l[0], 1), i + (c ? 1 : 0)), l[1] = Math.min(Math.max(l[1], 1), n), l;
            }
          }, t2.getRawByteCoords = function(e3) {
            if (e3)
              return {x: e3[0] + 32, y: e3[1] + 32};
          };
        }, 9504: (e2, t2, r) => {
          Object.defineProperty(t2, "__esModule", {value: true}), t2.moveToCellSequence = void 0;
          var i = r(2584);
          function n(e3, t3, r2, i2) {
            var n2 = e3 - o(r2, e3), a2 = t3 - o(r2, t3);
            return l(Math.abs(n2 - a2) - function(e4, t4, r3) {
              for (var i3 = 0, n3 = e4 - o(r3, e4), a3 = t4 - o(r3, t4), c2 = 0; c2 < Math.abs(n3 - a3); c2++) {
                var l2 = s(e4, t4) === "A" ? -1 : 1, h = r3.buffer.lines.get(n3 + l2 * c2);
                h && h.isWrapped && i3++;
              }
              return i3;
            }(e3, t3, r2), c(s(e3, t3), i2));
          }
          function o(e3, t3) {
            for (var r2 = 0, i2 = e3.buffer.lines.get(t3), n2 = i2 && i2.isWrapped; n2 && t3 >= 0 && t3 < e3.rows; )
              r2++, n2 = (i2 = e3.buffer.lines.get(--t3)) && i2.isWrapped;
            return r2;
          }
          function s(e3, t3) {
            return e3 > t3 ? "A" : "B";
          }
          function a(e3, t3, r2, i2, n2, o2) {
            for (var s2 = e3, a2 = t3, c2 = ""; s2 !== r2 || a2 !== i2; )
              s2 += n2 ? 1 : -1, n2 && s2 > o2.cols - 1 ? (c2 += o2.buffer.translateBufferLineToString(a2, false, e3, s2), s2 = 0, e3 = 0, a2++) : !n2 && s2 < 0 && (c2 += o2.buffer.translateBufferLineToString(a2, false, 0, e3 + 1), e3 = s2 = o2.cols - 1, a2--);
            return c2 + o2.buffer.translateBufferLineToString(a2, false, e3, s2);
          }
          function c(e3, t3) {
            var r2 = t3 ? "O" : "[";
            return i.C0.ESC + r2 + e3;
          }
          function l(e3, t3) {
            e3 = Math.floor(e3);
            for (var r2 = "", i2 = 0; i2 < e3; i2++)
              r2 += t3;
            return r2;
          }
          t2.moveToCellSequence = function(e3, t3, r2, i2) {
            var s2, h = r2.buffer.x, u = r2.buffer.y;
            if (!r2.buffer.hasScrollback)
              return function(e4, t4, r3, i3, s3, h2) {
                return n(t4, i3, s3, h2).length === 0 ? "" : l(a(e4, t4, e4, t4 - o(s3, t4), false, s3).length, c("D", h2));
              }(h, u, 0, t3, r2, i2) + n(u, t3, r2, i2) + function(e4, t4, r3, i3, s3, h2) {
                var u2;
                u2 = n(t4, i3, s3, h2).length > 0 ? i3 - o(s3, i3) : t4;
                var f2 = i3, _ = function(e5, t5, r4, i4, s4, a2) {
                  var c2;
                  return c2 = n(r4, i4, s4, a2).length > 0 ? i4 - o(s4, i4) : t5, e5 < r4 && c2 <= i4 || e5 >= r4 && c2 < i4 ? "C" : "D";
                }(e4, t4, r3, i3, s3, h2);
                return l(a(e4, u2, r3, f2, _ === "C", s3).length, c(_, h2));
              }(h, u, e3, t3, r2, i2);
            if (u === t3)
              return s2 = h > e3 ? "D" : "C", l(Math.abs(h - e3), c(s2, i2));
            s2 = u > t3 ? "D" : "C";
            var f = Math.abs(u - t3);
            return l(function(e4, t4) {
              return t4.cols - e4;
            }(u > t3 ? e3 : h, r2) + (f - 1) * r2.cols + 1 + ((u > t3 ? h : e3) - 1), c(s2, i2));
          };
        }, 244: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", {value: true}), t2.AddonManager = void 0;
          var r = function() {
            function e3() {
              this._addons = [];
            }
            return e3.prototype.dispose = function() {
              for (var e4 = this._addons.length - 1; e4 >= 0; e4--)
                this._addons[e4].instance.dispose();
            }, e3.prototype.loadAddon = function(e4, t3) {
              var r2 = this, i = {instance: t3, dispose: t3.dispose, isDisposed: false};
              this._addons.push(i), t3.dispose = function() {
                return r2._wrappedAddonDispose(i);
              }, t3.activate(e4);
            }, e3.prototype._wrappedAddonDispose = function(e4) {
              if (!e4.isDisposed) {
                for (var t3 = -1, r2 = 0; r2 < this._addons.length; r2++)
                  if (this._addons[r2] === e4) {
                    t3 = r2;
                    break;
                  }
                if (t3 === -1)
                  throw new Error("Could not dispose an addon that has not been loaded");
                e4.isDisposed = true, e4.dispose.apply(e4.instance), this._addons.splice(t3, 1);
              }
            }, e3;
          }();
          t2.AddonManager = r;
        }, 4389: (e2, t2, r) => {
          Object.defineProperty(t2, "__esModule", {value: true}), t2.Terminal = void 0;
          var i = r(511), n = r(3236), o = r(9042), s = r(8460), a = r(244), c = function() {
            function e3(e4) {
              this._core = new n.Terminal(e4), this._addonManager = new a.AddonManager();
            }
            return e3.prototype._checkProposedApi = function() {
              if (!this._core.optionsService.options.allowProposedApi)
                throw new Error("You must set the allowProposedApi option to true to use proposed API");
            }, Object.defineProperty(e3.prototype, "onCursorMove", {get: function() {
              return this._core.onCursorMove;
            }, enumerable: false, configurable: true}), Object.defineProperty(e3.prototype, "onLineFeed", {get: function() {
              return this._core.onLineFeed;
            }, enumerable: false, configurable: true}), Object.defineProperty(e3.prototype, "onSelectionChange", {get: function() {
              return this._core.onSelectionChange;
            }, enumerable: false, configurable: true}), Object.defineProperty(e3.prototype, "onData", {get: function() {
              return this._core.onData;
            }, enumerable: false, configurable: true}), Object.defineProperty(e3.prototype, "onBinary", {get: function() {
              return this._core.onBinary;
            }, enumerable: false, configurable: true}), Object.defineProperty(e3.prototype, "onTitleChange", {get: function() {
              return this._core.onTitleChange;
            }, enumerable: false, configurable: true}), Object.defineProperty(e3.prototype, "onScroll", {get: function() {
              return this._core.onScroll;
            }, enumerable: false, configurable: true}), Object.defineProperty(e3.prototype, "onKey", {get: function() {
              return this._core.onKey;
            }, enumerable: false, configurable: true}), Object.defineProperty(e3.prototype, "onRender", {get: function() {
              return this._core.onRender;
            }, enumerable: false, configurable: true}), Object.defineProperty(e3.prototype, "onResize", {get: function() {
              return this._core.onResize;
            }, enumerable: false, configurable: true}), Object.defineProperty(e3.prototype, "element", {get: function() {
              return this._core.element;
            }, enumerable: false, configurable: true}), Object.defineProperty(e3.prototype, "parser", {get: function() {
              return this._checkProposedApi(), this._parser || (this._parser = new f(this._core)), this._parser;
            }, enumerable: false, configurable: true}), Object.defineProperty(e3.prototype, "unicode", {get: function() {
              return this._checkProposedApi(), new _(this._core);
            }, enumerable: false, configurable: true}), Object.defineProperty(e3.prototype, "textarea", {get: function() {
              return this._core.textarea;
            }, enumerable: false, configurable: true}), Object.defineProperty(e3.prototype, "rows", {get: function() {
              return this._core.rows;
            }, enumerable: false, configurable: true}), Object.defineProperty(e3.prototype, "cols", {get: function() {
              return this._core.cols;
            }, enumerable: false, configurable: true}), Object.defineProperty(e3.prototype, "buffer", {get: function() {
              return this._checkProposedApi(), this._buffer || (this._buffer = new h(this._core)), this._buffer;
            }, enumerable: false, configurable: true}), Object.defineProperty(e3.prototype, "markers", {get: function() {
              return this._checkProposedApi(), this._core.markers;
            }, enumerable: false, configurable: true}), e3.prototype.blur = function() {
              this._core.blur();
            }, e3.prototype.focus = function() {
              this._core.focus();
            }, e3.prototype.resize = function(e4, t3) {
              this._verifyIntegers(e4, t3), this._core.resize(e4, t3);
            }, e3.prototype.open = function(e4) {
              this._core.open(e4);
            }, e3.prototype.attachCustomKeyEventHandler = function(e4) {
              this._core.attachCustomKeyEventHandler(e4);
            }, e3.prototype.registerLinkMatcher = function(e4, t3, r2) {
              return this._checkProposedApi(), this._core.registerLinkMatcher(e4, t3, r2);
            }, e3.prototype.deregisterLinkMatcher = function(e4) {
              this._checkProposedApi(), this._core.deregisterLinkMatcher(e4);
            }, e3.prototype.registerLinkProvider = function(e4) {
              return this._checkProposedApi(), this._core.registerLinkProvider(e4);
            }, e3.prototype.registerCharacterJoiner = function(e4) {
              return this._checkProposedApi(), this._core.registerCharacterJoiner(e4);
            }, e3.prototype.deregisterCharacterJoiner = function(e4) {
              this._checkProposedApi(), this._core.deregisterCharacterJoiner(e4);
            }, e3.prototype.registerMarker = function(e4) {
              return this._checkProposedApi(), this._verifyIntegers(e4), this._core.addMarker(e4);
            }, e3.prototype.addMarker = function(e4) {
              return this.registerMarker(e4);
            }, e3.prototype.hasSelection = function() {
              return this._core.hasSelection();
            }, e3.prototype.select = function(e4, t3, r2) {
              this._verifyIntegers(e4, t3, r2), this._core.select(e4, t3, r2);
            }, e3.prototype.getSelection = function() {
              return this._core.getSelection();
            }, e3.prototype.getSelectionPosition = function() {
              return this._core.getSelectionPosition();
            }, e3.prototype.clearSelection = function() {
              this._core.clearSelection();
            }, e3.prototype.selectAll = function() {
              this._core.selectAll();
            }, e3.prototype.selectLines = function(e4, t3) {
              this._verifyIntegers(e4, t3), this._core.selectLines(e4, t3);
            }, e3.prototype.dispose = function() {
              this._addonManager.dispose(), this._core.dispose();
            }, e3.prototype.scrollLines = function(e4) {
              this._verifyIntegers(e4), this._core.scrollLines(e4);
            }, e3.prototype.scrollPages = function(e4) {
              this._verifyIntegers(e4), this._core.scrollPages(e4);
            }, e3.prototype.scrollToTop = function() {
              this._core.scrollToTop();
            }, e3.prototype.scrollToBottom = function() {
              this._core.scrollToBottom();
            }, e3.prototype.scrollToLine = function(e4) {
              this._verifyIntegers(e4), this._core.scrollToLine(e4);
            }, e3.prototype.clear = function() {
              this._core.clear();
            }, e3.prototype.write = function(e4, t3) {
              this._core.write(e4, t3);
            }, e3.prototype.writeUtf8 = function(e4, t3) {
              this._core.write(e4, t3);
            }, e3.prototype.writeln = function(e4, t3) {
              this._core.write(e4), this._core.write("\r\n", t3);
            }, e3.prototype.paste = function(e4) {
              this._core.paste(e4);
            }, e3.prototype.getOption = function(e4) {
              return this._core.optionsService.getOption(e4);
            }, e3.prototype.setOption = function(e4, t3) {
              this._core.optionsService.setOption(e4, t3);
            }, e3.prototype.refresh = function(e4, t3) {
              this._verifyIntegers(e4, t3), this._core.refresh(e4, t3);
            }, e3.prototype.reset = function() {
              this._core.reset();
            }, e3.prototype.loadAddon = function(e4) {
              return this._addonManager.loadAddon(this, e4);
            }, Object.defineProperty(e3, "strings", {get: function() {
              return o;
            }, enumerable: false, configurable: true}), e3.prototype._verifyIntegers = function() {
              for (var e4 = [], t3 = 0; t3 < arguments.length; t3++)
                e4[t3] = arguments[t3];
              for (var r2 = 0, i2 = e4; r2 < i2.length; r2++) {
                var n2 = i2[r2];
                if (n2 === 1 / 0 || isNaN(n2) || n2 % 1 != 0)
                  throw new Error("This API only accepts integers");
              }
            }, e3;
          }();
          t2.Terminal = c;
          var l = function() {
            function e3(e4, t3) {
              this._buffer = e4, this.type = t3;
            }
            return e3.prototype.init = function(e4) {
              return this._buffer = e4, this;
            }, Object.defineProperty(e3.prototype, "cursorY", {get: function() {
              return this._buffer.y;
            }, enumerable: false, configurable: true}), Object.defineProperty(e3.prototype, "cursorX", {get: function() {
              return this._buffer.x;
            }, enumerable: false, configurable: true}), Object.defineProperty(e3.prototype, "viewportY", {get: function() {
              return this._buffer.ydisp;
            }, enumerable: false, configurable: true}), Object.defineProperty(e3.prototype, "baseY", {get: function() {
              return this._buffer.ybase;
            }, enumerable: false, configurable: true}), Object.defineProperty(e3.prototype, "length", {get: function() {
              return this._buffer.lines.length;
            }, enumerable: false, configurable: true}), e3.prototype.getLine = function(e4) {
              var t3 = this._buffer.lines.get(e4);
              if (t3)
                return new u(t3);
            }, e3.prototype.getNullCell = function() {
              return new i.CellData();
            }, e3;
          }(), h = function() {
            function e3(e4) {
              var t3 = this;
              this._core = e4, this._onBufferChange = new s.EventEmitter(), this._normal = new l(this._core.buffers.normal, "normal"), this._alternate = new l(this._core.buffers.alt, "alternate"), this._core.buffers.onBufferActivate(function() {
                return t3._onBufferChange.fire(t3.active);
              });
            }
            return Object.defineProperty(e3.prototype, "onBufferChange", {get: function() {
              return this._onBufferChange.event;
            }, enumerable: false, configurable: true}), Object.defineProperty(e3.prototype, "active", {get: function() {
              if (this._core.buffers.active === this._core.buffers.normal)
                return this.normal;
              if (this._core.buffers.active === this._core.buffers.alt)
                return this.alternate;
              throw new Error("Active buffer is neither normal nor alternate");
            }, enumerable: false, configurable: true}), Object.defineProperty(e3.prototype, "normal", {get: function() {
              return this._normal.init(this._core.buffers.normal);
            }, enumerable: false, configurable: true}), Object.defineProperty(e3.prototype, "alternate", {get: function() {
              return this._alternate.init(this._core.buffers.alt);
            }, enumerable: false, configurable: true}), e3;
          }(), u = function() {
            function e3(e4) {
              this._line = e4;
            }
            return Object.defineProperty(e3.prototype, "isWrapped", {get: function() {
              return this._line.isWrapped;
            }, enumerable: false, configurable: true}), Object.defineProperty(e3.prototype, "length", {get: function() {
              return this._line.length;
            }, enumerable: false, configurable: true}), e3.prototype.getCell = function(e4, t3) {
              if (!(e4 < 0 || e4 >= this._line.length))
                return t3 ? (this._line.loadCell(e4, t3), t3) : this._line.loadCell(e4, new i.CellData());
            }, e3.prototype.translateToString = function(e4, t3, r2) {
              return this._line.translateToString(e4, t3, r2);
            }, e3;
          }(), f = function() {
            function e3(e4) {
              this._core = e4;
            }
            return e3.prototype.registerCsiHandler = function(e4, t3) {
              return this._core.addCsiHandler(e4, function(e5) {
                return t3(e5.toArray());
              });
            }, e3.prototype.addCsiHandler = function(e4, t3) {
              return this.registerCsiHandler(e4, t3);
            }, e3.prototype.registerDcsHandler = function(e4, t3) {
              return this._core.addDcsHandler(e4, function(e5, r2) {
                return t3(e5, r2.toArray());
              });
            }, e3.prototype.addDcsHandler = function(e4, t3) {
              return this.registerDcsHandler(e4, t3);
            }, e3.prototype.registerEscHandler = function(e4, t3) {
              return this._core.addEscHandler(e4, t3);
            }, e3.prototype.addEscHandler = function(e4, t3) {
              return this.registerEscHandler(e4, t3);
            }, e3.prototype.registerOscHandler = function(e4, t3) {
              return this._core.addOscHandler(e4, t3);
            }, e3.prototype.addOscHandler = function(e4, t3) {
              return this.registerOscHandler(e4, t3);
            }, e3;
          }(), _ = function() {
            function e3(e4) {
              this._core = e4;
            }
            return e3.prototype.register = function(e4) {
              this._core.unicodeService.register(e4);
            }, Object.defineProperty(e3.prototype, "versions", {get: function() {
              return this._core.unicodeService.versions;
            }, enumerable: false, configurable: true}), Object.defineProperty(e3.prototype, "activeVersion", {get: function() {
              return this._core.unicodeService.activeVersion;
            }, set: function(e4) {
              this._core.unicodeService.activeVersion = e4;
            }, enumerable: false, configurable: true}), e3;
          }();
        }, 1546: (e2, t2, r) => {
          Object.defineProperty(t2, "__esModule", {value: true}), t2.BaseRenderLayer = void 0;
          var i = r(643), n = r(8803), o = r(1420), s = r(3734), a = r(1752), c = r(4774), l = r(9631), h = function() {
            function e3(e4, t3, r2, i2, n2, o2, s2, a2) {
              this._container = e4, this._alpha = i2, this._colors = n2, this._rendererId = o2, this._bufferService = s2, this._optionsService = a2, this._scaledCharWidth = 0, this._scaledCharHeight = 0, this._scaledCellWidth = 0, this._scaledCellHeight = 0, this._scaledCharLeft = 0, this._scaledCharTop = 0, this._currentGlyphIdentifier = {chars: "", code: 0, bg: 0, fg: 0, bold: false, dim: false, italic: false}, this._canvas = document.createElement("canvas"), this._canvas.classList.add("xterm-" + t3 + "-layer"), this._canvas.style.zIndex = r2.toString(), this._initCanvas(), this._container.appendChild(this._canvas);
            }
            return e3.prototype.dispose = function() {
              var e4;
              l.removeElementFromParent(this._canvas), (e4 = this._charAtlas) === null || e4 === void 0 || e4.dispose();
            }, e3.prototype._initCanvas = function() {
              this._ctx = a.throwIfFalsy(this._canvas.getContext("2d", {alpha: this._alpha})), this._alpha || this._clearAll();
            }, e3.prototype.onOptionsChanged = function() {
            }, e3.prototype.onBlur = function() {
            }, e3.prototype.onFocus = function() {
            }, e3.prototype.onCursorMove = function() {
            }, e3.prototype.onGridChanged = function(e4, t3) {
            }, e3.prototype.onSelectionChanged = function(e4, t3, r2) {
              r2 === void 0 && (r2 = false);
            }, e3.prototype.setColors = function(e4) {
              this._refreshCharAtlas(e4);
            }, e3.prototype._setTransparency = function(e4) {
              if (e4 !== this._alpha) {
                var t3 = this._canvas;
                this._alpha = e4, this._canvas = this._canvas.cloneNode(), this._initCanvas(), this._container.replaceChild(this._canvas, t3), this._refreshCharAtlas(this._colors), this.onGridChanged(0, this._bufferService.rows - 1);
              }
            }, e3.prototype._refreshCharAtlas = function(e4) {
              this._scaledCharWidth <= 0 && this._scaledCharHeight <= 0 || (this._charAtlas = o.acquireCharAtlas(this._optionsService.options, this._rendererId, e4, this._scaledCharWidth, this._scaledCharHeight), this._charAtlas.warmUp());
            }, e3.prototype.resize = function(e4) {
              this._scaledCellWidth = e4.scaledCellWidth, this._scaledCellHeight = e4.scaledCellHeight, this._scaledCharWidth = e4.scaledCharWidth, this._scaledCharHeight = e4.scaledCharHeight, this._scaledCharLeft = e4.scaledCharLeft, this._scaledCharTop = e4.scaledCharTop, this._canvas.width = e4.scaledCanvasWidth, this._canvas.height = e4.scaledCanvasHeight, this._canvas.style.width = e4.canvasWidth + "px", this._canvas.style.height = e4.canvasHeight + "px", this._alpha || this._clearAll(), this._refreshCharAtlas(this._colors);
            }, e3.prototype._fillCells = function(e4, t3, r2, i2) {
              this._ctx.fillRect(e4 * this._scaledCellWidth, t3 * this._scaledCellHeight, r2 * this._scaledCellWidth, i2 * this._scaledCellHeight);
            }, e3.prototype._fillBottomLineAtCells = function(e4, t3, r2) {
              r2 === void 0 && (r2 = 1), this._ctx.fillRect(e4 * this._scaledCellWidth, (t3 + 1) * this._scaledCellHeight - window.devicePixelRatio - 1, r2 * this._scaledCellWidth, window.devicePixelRatio);
            }, e3.prototype._fillLeftLineAtCell = function(e4, t3, r2) {
              this._ctx.fillRect(e4 * this._scaledCellWidth, t3 * this._scaledCellHeight, window.devicePixelRatio * r2, this._scaledCellHeight);
            }, e3.prototype._strokeRectAtCell = function(e4, t3, r2, i2) {
              this._ctx.lineWidth = window.devicePixelRatio, this._ctx.strokeRect(e4 * this._scaledCellWidth + window.devicePixelRatio / 2, t3 * this._scaledCellHeight + window.devicePixelRatio / 2, r2 * this._scaledCellWidth - window.devicePixelRatio, i2 * this._scaledCellHeight - window.devicePixelRatio);
            }, e3.prototype._clearAll = function() {
              this._alpha ? this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height) : (this._ctx.fillStyle = this._colors.background.css, this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height));
            }, e3.prototype._clearCells = function(e4, t3, r2, i2) {
              this._alpha ? this._ctx.clearRect(e4 * this._scaledCellWidth, t3 * this._scaledCellHeight, r2 * this._scaledCellWidth, i2 * this._scaledCellHeight) : (this._ctx.fillStyle = this._colors.background.css, this._ctx.fillRect(e4 * this._scaledCellWidth, t3 * this._scaledCellHeight, r2 * this._scaledCellWidth, i2 * this._scaledCellHeight));
            }, e3.prototype._fillCharTrueColor = function(e4, t3, r2) {
              this._ctx.font = this._getFont(false, false), this._ctx.textBaseline = "middle", this._clipRow(r2), this._ctx.fillText(e4.getChars(), t3 * this._scaledCellWidth + this._scaledCharLeft, r2 * this._scaledCellHeight + this._scaledCharTop + this._scaledCharHeight / 2);
            }, e3.prototype._drawChars = function(e4, t3, r2) {
              var o2, s2, a2 = this._getContrastColor(e4);
              a2 || e4.isFgRGB() || e4.isBgRGB() ? this._drawUncachedChars(e4, t3, r2, a2) : (e4.isInverse() ? (o2 = e4.isBgDefault() ? n.INVERTED_DEFAULT_COLOR : e4.getBgColor(), s2 = e4.isFgDefault() ? n.INVERTED_DEFAULT_COLOR : e4.getFgColor()) : (s2 = e4.isBgDefault() ? i.DEFAULT_COLOR : e4.getBgColor(), o2 = e4.isFgDefault() ? i.DEFAULT_COLOR : e4.getFgColor()), o2 += this._optionsService.options.drawBoldTextInBrightColors && e4.isBold() && o2 < 8 ? 8 : 0, this._currentGlyphIdentifier.chars = e4.getChars() || i.WHITESPACE_CELL_CHAR, this._currentGlyphIdentifier.code = e4.getCode() || i.WHITESPACE_CELL_CODE, this._currentGlyphIdentifier.bg = s2, this._currentGlyphIdentifier.fg = o2, this._currentGlyphIdentifier.bold = !!e4.isBold(), this._currentGlyphIdentifier.dim = !!e4.isDim(), this._currentGlyphIdentifier.italic = !!e4.isItalic(), this._charAtlas && this._charAtlas.draw(this._ctx, this._currentGlyphIdentifier, t3 * this._scaledCellWidth + this._scaledCharLeft, r2 * this._scaledCellHeight + this._scaledCharTop) || this._drawUncachedChars(e4, t3, r2));
            }, e3.prototype._drawUncachedChars = function(e4, t3, r2, i2) {
              if (this._ctx.save(), this._ctx.font = this._getFont(!!e4.isBold(), !!e4.isItalic()), this._ctx.textBaseline = "middle", e4.isInverse())
                if (i2)
                  this._ctx.fillStyle = i2.css;
                else if (e4.isBgDefault())
                  this._ctx.fillStyle = c.color.opaque(this._colors.background).css;
                else if (e4.isBgRGB())
                  this._ctx.fillStyle = "rgb(" + s.AttributeData.toColorRGB(e4.getBgColor()).join(",") + ")";
                else {
                  var o2 = e4.getBgColor();
                  this._optionsService.options.drawBoldTextInBrightColors && e4.isBold() && o2 < 8 && (o2 += 8), this._ctx.fillStyle = this._colors.ansi[o2].css;
                }
              else if (i2)
                this._ctx.fillStyle = i2.css;
              else if (e4.isFgDefault())
                this._ctx.fillStyle = this._colors.foreground.css;
              else if (e4.isFgRGB())
                this._ctx.fillStyle = "rgb(" + s.AttributeData.toColorRGB(e4.getFgColor()).join(",") + ")";
              else {
                var a2 = e4.getFgColor();
                this._optionsService.options.drawBoldTextInBrightColors && e4.isBold() && a2 < 8 && (a2 += 8), this._ctx.fillStyle = this._colors.ansi[a2].css;
              }
              this._clipRow(r2), e4.isDim() && (this._ctx.globalAlpha = n.DIM_OPACITY), this._ctx.fillText(e4.getChars(), t3 * this._scaledCellWidth + this._scaledCharLeft, r2 * this._scaledCellHeight + this._scaledCharTop + this._scaledCharHeight / 2), this._ctx.restore();
            }, e3.prototype._clipRow = function(e4) {
              this._ctx.beginPath(), this._ctx.rect(0, e4 * this._scaledCellHeight, this._bufferService.cols * this._scaledCellWidth, this._scaledCellHeight), this._ctx.clip();
            }, e3.prototype._getFont = function(e4, t3) {
              return (t3 ? "italic" : "") + " " + (e4 ? this._optionsService.options.fontWeightBold : this._optionsService.options.fontWeight) + " " + this._optionsService.options.fontSize * window.devicePixelRatio + "px " + this._optionsService.options.fontFamily;
            }, e3.prototype._getContrastColor = function(e4) {
              if (this._optionsService.options.minimumContrastRatio !== 1) {
                var t3 = this._colors.contrastCache.getColor(e4.bg, e4.fg);
                if (t3 !== void 0)
                  return t3 || void 0;
                var r2 = e4.getFgColor(), i2 = e4.getFgColorMode(), n2 = e4.getBgColor(), o2 = e4.getBgColorMode(), s2 = !!e4.isInverse(), a2 = !!e4.isInverse();
                if (s2) {
                  var l2 = r2;
                  r2 = n2, n2 = l2;
                  var h2 = i2;
                  i2 = o2, o2 = h2;
                }
                var u = this._resolveBackgroundRgba(o2, n2, s2), f = this._resolveForegroundRgba(i2, r2, s2, a2), _ = c.rgba.ensureContrastRatio(u, f, this._optionsService.options.minimumContrastRatio);
                if (_) {
                  var d = {css: c.channels.toCss(_ >> 24 & 255, _ >> 16 & 255, _ >> 8 & 255), rgba: _};
                  return this._colors.contrastCache.setColor(e4.bg, e4.fg, d), d;
                }
                this._colors.contrastCache.setColor(e4.bg, e4.fg, null);
              }
            }, e3.prototype._resolveBackgroundRgba = function(e4, t3, r2) {
              switch (e4) {
                case 16777216:
                case 33554432:
                  return this._colors.ansi[t3].rgba;
                case 50331648:
                  return t3 << 8;
                case 0:
                default:
                  return r2 ? this._colors.foreground.rgba : this._colors.background.rgba;
              }
            }, e3.prototype._resolveForegroundRgba = function(e4, t3, r2, i2) {
              switch (e4) {
                case 16777216:
                case 33554432:
                  return this._optionsService.options.drawBoldTextInBrightColors && i2 && t3 < 8 && (t3 += 8), this._colors.ansi[t3].rgba;
                case 50331648:
                  return t3 << 8;
                case 0:
                default:
                  return r2 ? this._colors.background.rgba : this._colors.foreground.rgba;
              }
            }, e3;
          }();
          t2.BaseRenderLayer = h;
        }, 5879: function(e2, t2, r) {
          var i, n = this && this.__extends || (i = function(e3, t3) {
            return (i = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(e4, t4) {
              e4.__proto__ = t4;
            } || function(e4, t4) {
              for (var r2 in t4)
                Object.prototype.hasOwnProperty.call(t4, r2) && (e4[r2] = t4[r2]);
            })(e3, t3);
          }, function(e3, t3) {
            function r2() {
              this.constructor = e3;
            }
            i(e3, t3), e3.prototype = t3 === null ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
          });
          Object.defineProperty(t2, "__esModule", {value: true}), t2.CharacterJoinerRegistry = t2.JoinedCellData = void 0;
          var o = r(3734), s = r(643), a = r(511), c = function(e3) {
            function t3(t4, r2, i2) {
              var n2 = e3.call(this) || this;
              return n2.content = 0, n2.combinedData = "", n2.fg = t4.fg, n2.bg = t4.bg, n2.combinedData = r2, n2._width = i2, n2;
            }
            return n(t3, e3), t3.prototype.isCombined = function() {
              return 2097152;
            }, t3.prototype.getWidth = function() {
              return this._width;
            }, t3.prototype.getChars = function() {
              return this.combinedData;
            }, t3.prototype.getCode = function() {
              return 2097151;
            }, t3.prototype.setFromCharData = function(e4) {
              throw new Error("not implemented");
            }, t3.prototype.getAsCharData = function() {
              return [this.fg, this.getChars(), this.getWidth(), this.getCode()];
            }, t3;
          }(o.AttributeData);
          t2.JoinedCellData = c;
          var l = function() {
            function e3(e4) {
              this._bufferService = e4, this._characterJoiners = [], this._nextCharacterJoinerId = 0, this._workCell = new a.CellData();
            }
            return e3.prototype.registerCharacterJoiner = function(e4) {
              var t3 = {id: this._nextCharacterJoinerId++, handler: e4};
              return this._characterJoiners.push(t3), t3.id;
            }, e3.prototype.deregisterCharacterJoiner = function(e4) {
              for (var t3 = 0; t3 < this._characterJoiners.length; t3++)
                if (this._characterJoiners[t3].id === e4)
                  return this._characterJoiners.splice(t3, 1), true;
              return false;
            }, e3.prototype.getJoinedCharacters = function(e4) {
              if (this._characterJoiners.length === 0)
                return [];
              var t3 = this._bufferService.buffer.lines.get(e4);
              if (!t3 || t3.length === 0)
                return [];
              for (var r2 = [], i2 = t3.translateToString(true), n2 = 0, o2 = 0, a2 = 0, c2 = t3.getFg(0), l2 = t3.getBg(0), h = 0; h < t3.getTrimmedLength(); h++)
                if (t3.loadCell(h, this._workCell), this._workCell.getWidth() !== 0) {
                  if (this._workCell.fg !== c2 || this._workCell.bg !== l2) {
                    if (h - n2 > 1)
                      for (var u = this._getJoinedRanges(i2, a2, o2, t3, n2), f = 0; f < u.length; f++)
                        r2.push(u[f]);
                    n2 = h, a2 = o2, c2 = this._workCell.fg, l2 = this._workCell.bg;
                  }
                  o2 += this._workCell.getChars().length || s.WHITESPACE_CELL_CHAR.length;
                }
              if (this._bufferService.cols - n2 > 1)
                for (u = this._getJoinedRanges(i2, a2, o2, t3, n2), f = 0; f < u.length; f++)
                  r2.push(u[f]);
              return r2;
            }, e3.prototype._getJoinedRanges = function(t3, r2, i2, n2, o2) {
              for (var s2 = t3.substring(r2, i2), a2 = this._characterJoiners[0].handler(s2), c2 = 1; c2 < this._characterJoiners.length; c2++)
                for (var l2 = this._characterJoiners[c2].handler(s2), h = 0; h < l2.length; h++)
                  e3._mergeRanges(a2, l2[h]);
              return this._stringRangesToCellRanges(a2, n2, o2), a2;
            }, e3.prototype._stringRangesToCellRanges = function(e4, t3, r2) {
              var i2 = 0, n2 = false, o2 = 0, a2 = e4[i2];
              if (a2) {
                for (var c2 = r2; c2 < this._bufferService.cols; c2++) {
                  var l2 = t3.getWidth(c2), h = t3.getString(c2).length || s.WHITESPACE_CELL_CHAR.length;
                  if (l2 !== 0) {
                    if (!n2 && a2[0] <= o2 && (a2[0] = c2, n2 = true), a2[1] <= o2) {
                      if (a2[1] = c2, !(a2 = e4[++i2]))
                        break;
                      a2[0] <= o2 ? (a2[0] = c2, n2 = true) : n2 = false;
                    }
                    o2 += h;
                  }
                }
                a2 && (a2[1] = this._bufferService.cols);
              }
            }, e3._mergeRanges = function(e4, t3) {
              for (var r2 = false, i2 = 0; i2 < e4.length; i2++) {
                var n2 = e4[i2];
                if (r2) {
                  if (t3[1] <= n2[0])
                    return e4[i2 - 1][1] = t3[1], e4;
                  if (t3[1] <= n2[1])
                    return e4[i2 - 1][1] = Math.max(t3[1], n2[1]), e4.splice(i2, 1), e4;
                  e4.splice(i2, 1), i2--;
                } else {
                  if (t3[1] <= n2[0])
                    return e4.splice(i2, 0, t3), e4;
                  if (t3[1] <= n2[1])
                    return n2[0] = Math.min(t3[0], n2[0]), e4;
                  t3[0] < n2[1] && (n2[0] = Math.min(t3[0], n2[0]), r2 = true);
                }
              }
              return r2 ? e4[e4.length - 1][1] = t3[1] : e4.push(t3), e4;
            }, e3;
          }();
          t2.CharacterJoinerRegistry = l;
        }, 2512: function(e2, t2, r) {
          var i, n = this && this.__extends || (i = function(e3, t3) {
            return (i = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(e4, t4) {
              e4.__proto__ = t4;
            } || function(e4, t4) {
              for (var r2 in t4)
                Object.prototype.hasOwnProperty.call(t4, r2) && (e4[r2] = t4[r2]);
            })(e3, t3);
          }, function(e3, t3) {
            function r2() {
              this.constructor = e3;
            }
            i(e3, t3), e3.prototype = t3 === null ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
          });
          Object.defineProperty(t2, "__esModule", {value: true}), t2.CursorRenderLayer = void 0;
          var o = r(1546), s = r(511), a = 600, c = function(e3) {
            function t3(t4, r2, i2, n2, o2, a2, c2, l2, h) {
              var u = e3.call(this, t4, "cursor", r2, true, i2, n2, a2, c2) || this;
              return u._onRequestRedraw = o2, u._coreService = l2, u._coreBrowserService = h, u._cell = new s.CellData(), u._state = {x: 0, y: 0, isFocused: false, style: "", width: 0}, u._cursorRenderers = {bar: u._renderBarCursor.bind(u), block: u._renderBlockCursor.bind(u), underline: u._renderUnderlineCursor.bind(u)}, u;
            }
            return n(t3, e3), t3.prototype.resize = function(t4) {
              e3.prototype.resize.call(this, t4), this._state = {x: 0, y: 0, isFocused: false, style: "", width: 0};
            }, t3.prototype.reset = function() {
              this._clearCursor(), this._cursorBlinkStateManager && (this._cursorBlinkStateManager.dispose(), this._cursorBlinkStateManager = void 0, this.onOptionsChanged());
            }, t3.prototype.onBlur = function() {
              this._cursorBlinkStateManager && this._cursorBlinkStateManager.pause(), this._onRequestRedraw.fire({start: this._bufferService.buffer.y, end: this._bufferService.buffer.y});
            }, t3.prototype.onFocus = function() {
              this._cursorBlinkStateManager ? this._cursorBlinkStateManager.resume() : this._onRequestRedraw.fire({start: this._bufferService.buffer.y, end: this._bufferService.buffer.y});
            }, t3.prototype.onOptionsChanged = function() {
              var e4, t4 = this;
              this._optionsService.options.cursorBlink ? this._cursorBlinkStateManager || (this._cursorBlinkStateManager = new l(this._coreBrowserService.isFocused, function() {
                t4._render(true);
              })) : ((e4 = this._cursorBlinkStateManager) === null || e4 === void 0 || e4.dispose(), this._cursorBlinkStateManager = void 0), this._onRequestRedraw.fire({start: this._bufferService.buffer.y, end: this._bufferService.buffer.y});
            }, t3.prototype.onCursorMove = function() {
              this._cursorBlinkStateManager && this._cursorBlinkStateManager.restartBlinkAnimation();
            }, t3.prototype.onGridChanged = function(e4, t4) {
              !this._cursorBlinkStateManager || this._cursorBlinkStateManager.isPaused ? this._render(false) : this._cursorBlinkStateManager.restartBlinkAnimation();
            }, t3.prototype._render = function(e4) {
              if (this._coreService.isCursorInitialized && !this._coreService.isCursorHidden) {
                var t4 = this._bufferService.buffer.ybase + this._bufferService.buffer.y, r2 = t4 - this._bufferService.buffer.ydisp;
                if (r2 < 0 || r2 >= this._bufferService.rows)
                  this._clearCursor();
                else {
                  var i2 = Math.min(this._bufferService.buffer.x, this._bufferService.cols - 1);
                  if (this._bufferService.buffer.lines.get(t4).loadCell(i2, this._cell), this._cell.content !== void 0) {
                    if (!this._coreBrowserService.isFocused) {
                      this._clearCursor(), this._ctx.save(), this._ctx.fillStyle = this._colors.cursor.css;
                      var n2 = this._optionsService.options.cursorStyle;
                      return n2 && n2 !== "block" ? this._cursorRenderers[n2](i2, r2, this._cell) : this._renderBlurCursor(i2, r2, this._cell), this._ctx.restore(), this._state.x = i2, this._state.y = r2, this._state.isFocused = false, this._state.style = n2, void (this._state.width = this._cell.getWidth());
                    }
                    if (!this._cursorBlinkStateManager || this._cursorBlinkStateManager.isCursorVisible) {
                      if (this._state) {
                        if (this._state.x === i2 && this._state.y === r2 && this._state.isFocused === this._coreBrowserService.isFocused && this._state.style === this._optionsService.options.cursorStyle && this._state.width === this._cell.getWidth())
                          return;
                        this._clearCursor();
                      }
                      this._ctx.save(), this._cursorRenderers[this._optionsService.options.cursorStyle || "block"](i2, r2, this._cell), this._ctx.restore(), this._state.x = i2, this._state.y = r2, this._state.isFocused = false, this._state.style = this._optionsService.options.cursorStyle, this._state.width = this._cell.getWidth();
                    } else
                      this._clearCursor();
                  }
                }
              } else
                this._clearCursor();
            }, t3.prototype._clearCursor = function() {
              this._state && (this._clearCells(this._state.x, this._state.y, this._state.width, 1), this._state = {x: 0, y: 0, isFocused: false, style: "", width: 0});
            }, t3.prototype._renderBarCursor = function(e4, t4, r2) {
              this._ctx.save(), this._ctx.fillStyle = this._colors.cursor.css, this._fillLeftLineAtCell(e4, t4, this._optionsService.options.cursorWidth), this._ctx.restore();
            }, t3.prototype._renderBlockCursor = function(e4, t4, r2) {
              this._ctx.save(), this._ctx.fillStyle = this._colors.cursor.css, this._fillCells(e4, t4, r2.getWidth(), 1), this._ctx.fillStyle = this._colors.cursorAccent.css, this._fillCharTrueColor(r2, e4, t4), this._ctx.restore();
            }, t3.prototype._renderUnderlineCursor = function(e4, t4, r2) {
              this._ctx.save(), this._ctx.fillStyle = this._colors.cursor.css, this._fillBottomLineAtCells(e4, t4), this._ctx.restore();
            }, t3.prototype._renderBlurCursor = function(e4, t4, r2) {
              this._ctx.save(), this._ctx.strokeStyle = this._colors.cursor.css, this._strokeRectAtCell(e4, t4, r2.getWidth(), 1), this._ctx.restore();
            }, t3;
          }(o.BaseRenderLayer);
          t2.CursorRenderLayer = c;
          var l = function() {
            function e3(e4, t3) {
              this._renderCallback = t3, this.isCursorVisible = true, e4 && this._restartInterval();
            }
            return Object.defineProperty(e3.prototype, "isPaused", {get: function() {
              return !(this._blinkStartTimeout || this._blinkInterval);
            }, enumerable: false, configurable: true}), e3.prototype.dispose = function() {
              this._blinkInterval && (window.clearInterval(this._blinkInterval), this._blinkInterval = void 0), this._blinkStartTimeout && (window.clearTimeout(this._blinkStartTimeout), this._blinkStartTimeout = void 0), this._animationFrame && (window.cancelAnimationFrame(this._animationFrame), this._animationFrame = void 0);
            }, e3.prototype.restartBlinkAnimation = function() {
              var e4 = this;
              this.isPaused || (this._animationTimeRestarted = Date.now(), this.isCursorVisible = true, this._animationFrame || (this._animationFrame = window.requestAnimationFrame(function() {
                e4._renderCallback(), e4._animationFrame = void 0;
              })));
            }, e3.prototype._restartInterval = function(e4) {
              var t3 = this;
              e4 === void 0 && (e4 = a), this._blinkInterval && window.clearInterval(this._blinkInterval), this._blinkStartTimeout = window.setTimeout(function() {
                if (t3._animationTimeRestarted) {
                  var e5 = a - (Date.now() - t3._animationTimeRestarted);
                  if (t3._animationTimeRestarted = void 0, e5 > 0)
                    return void t3._restartInterval(e5);
                }
                t3.isCursorVisible = false, t3._animationFrame = window.requestAnimationFrame(function() {
                  t3._renderCallback(), t3._animationFrame = void 0;
                }), t3._blinkInterval = window.setInterval(function() {
                  if (t3._animationTimeRestarted) {
                    var e6 = a - (Date.now() - t3._animationTimeRestarted);
                    return t3._animationTimeRestarted = void 0, void t3._restartInterval(e6);
                  }
                  t3.isCursorVisible = !t3.isCursorVisible, t3._animationFrame = window.requestAnimationFrame(function() {
                    t3._renderCallback(), t3._animationFrame = void 0;
                  });
                }, a);
              }, e4);
            }, e3.prototype.pause = function() {
              this.isCursorVisible = true, this._blinkInterval && (window.clearInterval(this._blinkInterval), this._blinkInterval = void 0), this._blinkStartTimeout && (window.clearTimeout(this._blinkStartTimeout), this._blinkStartTimeout = void 0), this._animationFrame && (window.cancelAnimationFrame(this._animationFrame), this._animationFrame = void 0);
            }, e3.prototype.resume = function() {
              this.pause(), this._animationTimeRestarted = void 0, this._restartInterval(), this.restartBlinkAnimation();
            }, e3;
          }();
        }, 3700: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", {value: true}), t2.GridCache = void 0;
          var r = function() {
            function e3() {
              this.cache = [];
            }
            return e3.prototype.resize = function(e4, t3) {
              for (var r2 = 0; r2 < e4; r2++) {
                this.cache.length <= r2 && this.cache.push([]);
                for (var i = this.cache[r2].length; i < t3; i++)
                  this.cache[r2].push(void 0);
                this.cache[r2].length = t3;
              }
              this.cache.length = e4;
            }, e3.prototype.clear = function() {
              for (var e4 = 0; e4 < this.cache.length; e4++)
                for (var t3 = 0; t3 < this.cache[e4].length; t3++)
                  this.cache[e4][t3] = void 0;
            }, e3;
          }();
          t2.GridCache = r;
        }, 5098: function(e2, t2, r) {
          var i, n = this && this.__extends || (i = function(e3, t3) {
            return (i = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(e4, t4) {
              e4.__proto__ = t4;
            } || function(e4, t4) {
              for (var r2 in t4)
                Object.prototype.hasOwnProperty.call(t4, r2) && (e4[r2] = t4[r2]);
            })(e3, t3);
          }, function(e3, t3) {
            function r2() {
              this.constructor = e3;
            }
            i(e3, t3), e3.prototype = t3 === null ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
          });
          Object.defineProperty(t2, "__esModule", {value: true}), t2.LinkRenderLayer = void 0;
          var o = r(1546), s = r(8803), a = r(2040), c = function(e3) {
            function t3(t4, r2, i2, n2, o2, s2, a2, c2) {
              var l = e3.call(this, t4, "link", r2, true, i2, n2, a2, c2) || this;
              return o2.onShowLinkUnderline(function(e4) {
                return l._onShowLinkUnderline(e4);
              }), o2.onHideLinkUnderline(function(e4) {
                return l._onHideLinkUnderline(e4);
              }), s2.onShowLinkUnderline(function(e4) {
                return l._onShowLinkUnderline(e4);
              }), s2.onHideLinkUnderline(function(e4) {
                return l._onHideLinkUnderline(e4);
              }), l;
            }
            return n(t3, e3), t3.prototype.resize = function(t4) {
              e3.prototype.resize.call(this, t4), this._state = void 0;
            }, t3.prototype.reset = function() {
              this._clearCurrentLink();
            }, t3.prototype._clearCurrentLink = function() {
              if (this._state) {
                this._clearCells(this._state.x1, this._state.y1, this._state.cols - this._state.x1, 1);
                var e4 = this._state.y2 - this._state.y1 - 1;
                e4 > 0 && this._clearCells(0, this._state.y1 + 1, this._state.cols, e4), this._clearCells(0, this._state.y2, this._state.x2, 1), this._state = void 0;
              }
            }, t3.prototype._onShowLinkUnderline = function(e4) {
              if (e4.fg === s.INVERTED_DEFAULT_COLOR ? this._ctx.fillStyle = this._colors.background.css : e4.fg && a.is256Color(e4.fg) ? this._ctx.fillStyle = this._colors.ansi[e4.fg].css : this._ctx.fillStyle = this._colors.foreground.css, e4.y1 === e4.y2)
                this._fillBottomLineAtCells(e4.x1, e4.y1, e4.x2 - e4.x1);
              else {
                this._fillBottomLineAtCells(e4.x1, e4.y1, e4.cols - e4.x1);
                for (var t4 = e4.y1 + 1; t4 < e4.y2; t4++)
                  this._fillBottomLineAtCells(0, t4, e4.cols);
                this._fillBottomLineAtCells(0, e4.y2, e4.x2);
              }
              this._state = e4;
            }, t3.prototype._onHideLinkUnderline = function(e4) {
              this._clearCurrentLink();
            }, t3;
          }(o.BaseRenderLayer);
          t2.LinkRenderLayer = c;
        }, 3525: function(e2, t2, r) {
          var i, n = this && this.__extends || (i = function(e3, t3) {
            return (i = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(e4, t4) {
              e4.__proto__ = t4;
            } || function(e4, t4) {
              for (var r2 in t4)
                Object.prototype.hasOwnProperty.call(t4, r2) && (e4[r2] = t4[r2]);
            })(e3, t3);
          }, function(e3, t3) {
            function r2() {
              this.constructor = e3;
            }
            i(e3, t3), e3.prototype = t3 === null ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
          }), o = this && this.__decorate || function(e3, t3, r2, i2) {
            var n2, o2 = arguments.length, s2 = o2 < 3 ? t3 : i2 === null ? i2 = Object.getOwnPropertyDescriptor(t3, r2) : i2;
            if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
              s2 = Reflect.decorate(e3, t3, r2, i2);
            else
              for (var a2 = e3.length - 1; a2 >= 0; a2--)
                (n2 = e3[a2]) && (s2 = (o2 < 3 ? n2(s2) : o2 > 3 ? n2(t3, r2, s2) : n2(t3, r2)) || s2);
            return o2 > 3 && s2 && Object.defineProperty(t3, r2, s2), s2;
          }, s = this && this.__param || function(e3, t3) {
            return function(r2, i2) {
              t3(r2, i2, e3);
            };
          };
          Object.defineProperty(t2, "__esModule", {value: true}), t2.Renderer = void 0;
          var a = r(9596), c = r(4149), l = r(2512), h = r(5098), u = r(5879), f = r(844), _ = r(4725), d = r(2585), p = r(1420), v = r(8460), g = 1, y = function(e3) {
            function t3(t4, r2, i2, n2, o2, s2, f2, _2, d2) {
              var p2 = e3.call(this) || this;
              p2._colors = t4, p2._screenElement = r2, p2._bufferService = o2, p2._charSizeService = s2, p2._optionsService = f2, p2._id = g++, p2._onRequestRedraw = new v.EventEmitter();
              var y2 = p2._optionsService.options.allowTransparency;
              return p2._characterJoinerRegistry = new u.CharacterJoinerRegistry(p2._bufferService), p2._renderLayers = [new a.TextRenderLayer(p2._screenElement, 0, p2._colors, p2._characterJoinerRegistry, y2, p2._id, p2._bufferService, f2), new c.SelectionRenderLayer(p2._screenElement, 1, p2._colors, p2._id, p2._bufferService, f2), new h.LinkRenderLayer(p2._screenElement, 2, p2._colors, p2._id, i2, n2, p2._bufferService, f2), new l.CursorRenderLayer(p2._screenElement, 3, p2._colors, p2._id, p2._onRequestRedraw, p2._bufferService, f2, _2, d2)], p2.dimensions = {scaledCharWidth: 0, scaledCharHeight: 0, scaledCellWidth: 0, scaledCellHeight: 0, scaledCharLeft: 0, scaledCharTop: 0, scaledCanvasWidth: 0, scaledCanvasHeight: 0, canvasWidth: 0, canvasHeight: 0, actualCellWidth: 0, actualCellHeight: 0}, p2._devicePixelRatio = window.devicePixelRatio, p2._updateDimensions(), p2.onOptionsChanged(), p2;
            }
            return n(t3, e3), Object.defineProperty(t3.prototype, "onRequestRedraw", {get: function() {
              return this._onRequestRedraw.event;
            }, enumerable: false, configurable: true}), t3.prototype.dispose = function() {
              for (var t4 = 0, r2 = this._renderLayers; t4 < r2.length; t4++)
                r2[t4].dispose();
              e3.prototype.dispose.call(this), p.removeTerminalFromCache(this._id);
            }, t3.prototype.onDevicePixelRatioChange = function() {
              this._devicePixelRatio !== window.devicePixelRatio && (this._devicePixelRatio = window.devicePixelRatio, this.onResize(this._bufferService.cols, this._bufferService.rows));
            }, t3.prototype.setColors = function(e4) {
              this._colors = e4;
              for (var t4 = 0, r2 = this._renderLayers; t4 < r2.length; t4++) {
                var i2 = r2[t4];
                i2.setColors(this._colors), i2.reset();
              }
            }, t3.prototype.onResize = function(e4, t4) {
              this._updateDimensions();
              for (var r2 = 0, i2 = this._renderLayers; r2 < i2.length; r2++)
                i2[r2].resize(this.dimensions);
              this._screenElement.style.width = this.dimensions.canvasWidth + "px", this._screenElement.style.height = this.dimensions.canvasHeight + "px";
            }, t3.prototype.onCharSizeChanged = function() {
              this.onResize(this._bufferService.cols, this._bufferService.rows);
            }, t3.prototype.onBlur = function() {
              this._runOperation(function(e4) {
                return e4.onBlur();
              });
            }, t3.prototype.onFocus = function() {
              this._runOperation(function(e4) {
                return e4.onFocus();
              });
            }, t3.prototype.onSelectionChanged = function(e4, t4, r2) {
              r2 === void 0 && (r2 = false), this._runOperation(function(i2) {
                return i2.onSelectionChanged(e4, t4, r2);
              });
            }, t3.prototype.onCursorMove = function() {
              this._runOperation(function(e4) {
                return e4.onCursorMove();
              });
            }, t3.prototype.onOptionsChanged = function() {
              this._runOperation(function(e4) {
                return e4.onOptionsChanged();
              });
            }, t3.prototype.clear = function() {
              this._runOperation(function(e4) {
                return e4.reset();
              });
            }, t3.prototype._runOperation = function(e4) {
              for (var t4 = 0, r2 = this._renderLayers; t4 < r2.length; t4++)
                e4(r2[t4]);
            }, t3.prototype.renderRows = function(e4, t4) {
              for (var r2 = 0, i2 = this._renderLayers; r2 < i2.length; r2++)
                i2[r2].onGridChanged(e4, t4);
            }, t3.prototype._updateDimensions = function() {
              this._charSizeService.hasValidSize && (this.dimensions.scaledCharWidth = Math.floor(this._charSizeService.width * window.devicePixelRatio), this.dimensions.scaledCharHeight = Math.ceil(this._charSizeService.height * window.devicePixelRatio), this.dimensions.scaledCellHeight = Math.floor(this.dimensions.scaledCharHeight * this._optionsService.options.lineHeight), this.dimensions.scaledCharTop = this._optionsService.options.lineHeight === 1 ? 0 : Math.round((this.dimensions.scaledCellHeight - this.dimensions.scaledCharHeight) / 2), this.dimensions.scaledCellWidth = this.dimensions.scaledCharWidth + Math.round(this._optionsService.options.letterSpacing), this.dimensions.scaledCharLeft = Math.floor(this._optionsService.options.letterSpacing / 2), this.dimensions.scaledCanvasHeight = this._bufferService.rows * this.dimensions.scaledCellHeight, this.dimensions.scaledCanvasWidth = this._bufferService.cols * this.dimensions.scaledCellWidth, this.dimensions.canvasHeight = Math.round(this.dimensions.scaledCanvasHeight / window.devicePixelRatio), this.dimensions.canvasWidth = Math.round(this.dimensions.scaledCanvasWidth / window.devicePixelRatio), this.dimensions.actualCellHeight = this.dimensions.canvasHeight / this._bufferService.rows, this.dimensions.actualCellWidth = this.dimensions.canvasWidth / this._bufferService.cols);
            }, t3.prototype.registerCharacterJoiner = function(e4) {
              return this._characterJoinerRegistry.registerCharacterJoiner(e4);
            }, t3.prototype.deregisterCharacterJoiner = function(e4) {
              return this._characterJoinerRegistry.deregisterCharacterJoiner(e4);
            }, o([s(4, d.IBufferService), s(5, _.ICharSizeService), s(6, d.IOptionsService), s(7, d.ICoreService), s(8, _.ICoreBrowserService)], t3);
          }(f.Disposable);
          t2.Renderer = y;
        }, 1752: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", {value: true}), t2.throwIfFalsy = void 0, t2.throwIfFalsy = function(e3) {
            if (!e3)
              throw new Error("value must not be falsy");
            return e3;
          };
        }, 4149: function(e2, t2, r) {
          var i, n = this && this.__extends || (i = function(e3, t3) {
            return (i = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(e4, t4) {
              e4.__proto__ = t4;
            } || function(e4, t4) {
              for (var r2 in t4)
                Object.prototype.hasOwnProperty.call(t4, r2) && (e4[r2] = t4[r2]);
            })(e3, t3);
          }, function(e3, t3) {
            function r2() {
              this.constructor = e3;
            }
            i(e3, t3), e3.prototype = t3 === null ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
          });
          Object.defineProperty(t2, "__esModule", {value: true}), t2.SelectionRenderLayer = void 0;
          var o = function(e3) {
            function t3(t4, r2, i2, n2, o2, s) {
              var a = e3.call(this, t4, "selection", r2, true, i2, n2, o2, s) || this;
              return a._clearState(), a;
            }
            return n(t3, e3), t3.prototype._clearState = function() {
              this._state = {start: void 0, end: void 0, columnSelectMode: void 0, ydisp: void 0};
            }, t3.prototype.resize = function(t4) {
              e3.prototype.resize.call(this, t4), this._clearState();
            }, t3.prototype.reset = function() {
              this._state.start && this._state.end && (this._clearState(), this._clearAll());
            }, t3.prototype.onSelectionChanged = function(e4, t4, r2) {
              if (this._didStateChange(e4, t4, r2, this._bufferService.buffer.ydisp))
                if (this._clearAll(), e4 && t4) {
                  var i2 = e4[1] - this._bufferService.buffer.ydisp, n2 = t4[1] - this._bufferService.buffer.ydisp, o2 = Math.max(i2, 0), s = Math.min(n2, this._bufferService.rows - 1);
                  if (o2 >= this._bufferService.rows || s < 0)
                    this._state.ydisp = this._bufferService.buffer.ydisp;
                  else {
                    if (this._ctx.fillStyle = this._colors.selectionTransparent.css, r2) {
                      var a = e4[0], c = t4[0] - a, l = s - o2 + 1;
                      this._fillCells(a, o2, c, l);
                    } else {
                      a = i2 === o2 ? e4[0] : 0;
                      var h = o2 === n2 ? t4[0] : this._bufferService.cols;
                      this._fillCells(a, o2, h - a, 1);
                      var u = Math.max(s - o2 - 1, 0);
                      if (this._fillCells(0, o2 + 1, this._bufferService.cols, u), o2 !== s) {
                        var f = n2 === s ? t4[0] : this._bufferService.cols;
                        this._fillCells(0, s, f, 1);
                      }
                    }
                    this._state.start = [e4[0], e4[1]], this._state.end = [t4[0], t4[1]], this._state.columnSelectMode = r2, this._state.ydisp = this._bufferService.buffer.ydisp;
                  }
                } else
                  this._clearState();
            }, t3.prototype._didStateChange = function(e4, t4, r2, i2) {
              return !this._areCoordinatesEqual(e4, this._state.start) || !this._areCoordinatesEqual(t4, this._state.end) || r2 !== this._state.columnSelectMode || i2 !== this._state.ydisp;
            }, t3.prototype._areCoordinatesEqual = function(e4, t4) {
              return !(!e4 || !t4) && e4[0] === t4[0] && e4[1] === t4[1];
            }, t3;
          }(r(1546).BaseRenderLayer);
          t2.SelectionRenderLayer = o;
        }, 9596: function(e2, t2, r) {
          var i, n = this && this.__extends || (i = function(e3, t3) {
            return (i = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(e4, t4) {
              e4.__proto__ = t4;
            } || function(e4, t4) {
              for (var r2 in t4)
                Object.prototype.hasOwnProperty.call(t4, r2) && (e4[r2] = t4[r2]);
            })(e3, t3);
          }, function(e3, t3) {
            function r2() {
              this.constructor = e3;
            }
            i(e3, t3), e3.prototype = t3 === null ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
          });
          Object.defineProperty(t2, "__esModule", {value: true}), t2.TextRenderLayer = void 0;
          var o = r(3700), s = r(1546), a = r(3734), c = r(643), l = r(5879), h = r(511), u = function(e3) {
            function t3(t4, r2, i2, n2, s2, a2, c2, l2) {
              var u2 = e3.call(this, t4, "text", r2, s2, i2, a2, c2, l2) || this;
              return u2._characterWidth = 0, u2._characterFont = "", u2._characterOverlapCache = {}, u2._workCell = new h.CellData(), u2._state = new o.GridCache(), u2._characterJoinerRegistry = n2, u2;
            }
            return n(t3, e3), t3.prototype.resize = function(t4) {
              e3.prototype.resize.call(this, t4);
              var r2 = this._getFont(false, false);
              this._characterWidth === t4.scaledCharWidth && this._characterFont === r2 || (this._characterWidth = t4.scaledCharWidth, this._characterFont = r2, this._characterOverlapCache = {}), this._state.clear(), this._state.resize(this._bufferService.cols, this._bufferService.rows);
            }, t3.prototype.reset = function() {
              this._state.clear(), this._clearAll();
            }, t3.prototype._forEachCell = function(e4, t4, r2, i2) {
              for (var n2 = e4; n2 <= t4; n2++)
                for (var o2 = n2 + this._bufferService.buffer.ydisp, s2 = this._bufferService.buffer.lines.get(o2), a2 = r2 ? r2.getJoinedCharacters(o2) : [], h2 = 0; h2 < this._bufferService.cols; h2++) {
                  s2.loadCell(h2, this._workCell);
                  var u2 = this._workCell, f = false, _ = h2;
                  if (u2.getWidth() !== 0) {
                    if (a2.length > 0 && h2 === a2[0][0]) {
                      f = true;
                      var d = a2.shift();
                      u2 = new l.JoinedCellData(this._workCell, s2.translateToString(true, d[0], d[1]), d[1] - d[0]), _ = d[1] - 1;
                    }
                    !f && this._isOverlapping(u2) && _ < s2.length - 1 && s2.getCodePoint(_ + 1) === c.NULL_CELL_CODE && (u2.content &= -12582913, u2.content |= 2 << 22), i2(u2, h2, n2), h2 = _;
                  }
                }
            }, t3.prototype._drawBackground = function(e4, t4) {
              var r2 = this, i2 = this._ctx, n2 = this._bufferService.cols, o2 = 0, s2 = 0, c2 = null;
              i2.save(), this._forEachCell(e4, t4, null, function(e5, t5, l2) {
                var h2 = null;
                e5.isInverse() ? h2 = e5.isFgDefault() ? r2._colors.foreground.css : e5.isFgRGB() ? "rgb(" + a.AttributeData.toColorRGB(e5.getFgColor()).join(",") + ")" : r2._colors.ansi[e5.getFgColor()].css : e5.isBgRGB() ? h2 = "rgb(" + a.AttributeData.toColorRGB(e5.getBgColor()).join(",") + ")" : e5.isBgPalette() && (h2 = r2._colors.ansi[e5.getBgColor()].css), c2 === null && (o2 = t5, s2 = l2), l2 !== s2 ? (i2.fillStyle = c2 || "", r2._fillCells(o2, s2, n2 - o2, 1), o2 = t5, s2 = l2) : c2 !== h2 && (i2.fillStyle = c2 || "", r2._fillCells(o2, s2, t5 - o2, 1), o2 = t5, s2 = l2), c2 = h2;
              }), c2 !== null && (i2.fillStyle = c2, this._fillCells(o2, s2, n2 - o2, 1)), i2.restore();
            }, t3.prototype._drawForeground = function(e4, t4) {
              var r2 = this;
              this._forEachCell(e4, t4, this._characterJoinerRegistry, function(e5, t5, i2) {
                if (!e5.isInvisible() && (r2._drawChars(e5, t5, i2), e5.isUnderline())) {
                  if (r2._ctx.save(), e5.isInverse())
                    if (e5.isBgDefault())
                      r2._ctx.fillStyle = r2._colors.background.css;
                    else if (e5.isBgRGB())
                      r2._ctx.fillStyle = "rgb(" + a.AttributeData.toColorRGB(e5.getBgColor()).join(",") + ")";
                    else {
                      var n2 = e5.getBgColor();
                      r2._optionsService.options.drawBoldTextInBrightColors && e5.isBold() && n2 < 8 && (n2 += 8), r2._ctx.fillStyle = r2._colors.ansi[n2].css;
                    }
                  else if (e5.isFgDefault())
                    r2._ctx.fillStyle = r2._colors.foreground.css;
                  else if (e5.isFgRGB())
                    r2._ctx.fillStyle = "rgb(" + a.AttributeData.toColorRGB(e5.getFgColor()).join(",") + ")";
                  else {
                    var o2 = e5.getFgColor();
                    r2._optionsService.options.drawBoldTextInBrightColors && e5.isBold() && o2 < 8 && (o2 += 8), r2._ctx.fillStyle = r2._colors.ansi[o2].css;
                  }
                  r2._fillBottomLineAtCells(t5, i2, e5.getWidth()), r2._ctx.restore();
                }
              });
            }, t3.prototype.onGridChanged = function(e4, t4) {
              this._state.cache.length !== 0 && (this._charAtlas && this._charAtlas.beginFrame(), this._clearCells(0, e4, this._bufferService.cols, t4 - e4 + 1), this._drawBackground(e4, t4), this._drawForeground(e4, t4));
            }, t3.prototype.onOptionsChanged = function() {
              this._setTransparency(this._optionsService.options.allowTransparency);
            }, t3.prototype._isOverlapping = function(e4) {
              if (e4.getWidth() !== 1)
                return false;
              if (e4.getCode() < 256)
                return false;
              var t4 = e4.getChars();
              if (this._characterOverlapCache.hasOwnProperty(t4))
                return this._characterOverlapCache[t4];
              this._ctx.save(), this._ctx.font = this._characterFont;
              var r2 = Math.floor(this._ctx.measureText(t4).width) > this._characterWidth;
              return this._ctx.restore(), this._characterOverlapCache[t4] = r2, r2;
            }, t3;
          }(s.BaseRenderLayer);
          t2.TextRenderLayer = u;
        }, 9616: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", {value: true}), t2.BaseCharAtlas = void 0;
          var r = function() {
            function e3() {
              this._didWarmUp = false;
            }
            return e3.prototype.dispose = function() {
            }, e3.prototype.warmUp = function() {
              this._didWarmUp || (this._doWarmUp(), this._didWarmUp = true);
            }, e3.prototype._doWarmUp = function() {
            }, e3.prototype.beginFrame = function() {
            }, e3;
          }();
          t2.BaseCharAtlas = r;
        }, 1420: (e2, t2, r) => {
          Object.defineProperty(t2, "__esModule", {value: true}), t2.removeTerminalFromCache = t2.acquireCharAtlas = void 0;
          var i = r(2040), n = r(1906), o = [];
          t2.acquireCharAtlas = function(e3, t3, r2, s, a) {
            for (var c = i.generateConfig(s, a, e3, r2), l = 0; l < o.length; l++) {
              var h = (u = o[l]).ownedBy.indexOf(t3);
              if (h >= 0) {
                if (i.configEquals(u.config, c))
                  return u.atlas;
                u.ownedBy.length === 1 ? (u.atlas.dispose(), o.splice(l, 1)) : u.ownedBy.splice(h, 1);
                break;
              }
            }
            for (l = 0; l < o.length; l++) {
              var u = o[l];
              if (i.configEquals(u.config, c))
                return u.ownedBy.push(t3), u.atlas;
            }
            var f = {atlas: new n.DynamicCharAtlas(document, c), config: c, ownedBy: [t3]};
            return o.push(f), f.atlas;
          }, t2.removeTerminalFromCache = function(e3) {
            for (var t3 = 0; t3 < o.length; t3++) {
              var r2 = o[t3].ownedBy.indexOf(e3);
              if (r2 !== -1) {
                o[t3].ownedBy.length === 1 ? (o[t3].atlas.dispose(), o.splice(t3, 1)) : o[t3].ownedBy.splice(r2, 1);
                break;
              }
            }
          };
        }, 2040: (e2, t2, r) => {
          Object.defineProperty(t2, "__esModule", {value: true}), t2.is256Color = t2.configEquals = t2.generateConfig = void 0;
          var i = r(643);
          t2.generateConfig = function(e3, t3, r2, i2) {
            var n = {foreground: i2.foreground, background: i2.background, cursor: void 0, cursorAccent: void 0, selection: void 0, ansi: i2.ansi};
            return {devicePixelRatio: window.devicePixelRatio, scaledCharWidth: e3, scaledCharHeight: t3, fontFamily: r2.fontFamily, fontSize: r2.fontSize, fontWeight: r2.fontWeight, fontWeightBold: r2.fontWeightBold, allowTransparency: r2.allowTransparency, colors: n};
          }, t2.configEquals = function(e3, t3) {
            for (var r2 = 0; r2 < e3.colors.ansi.length; r2++)
              if (e3.colors.ansi[r2].rgba !== t3.colors.ansi[r2].rgba)
                return false;
            return e3.devicePixelRatio === t3.devicePixelRatio && e3.fontFamily === t3.fontFamily && e3.fontSize === t3.fontSize && e3.fontWeight === t3.fontWeight && e3.fontWeightBold === t3.fontWeightBold && e3.allowTransparency === t3.allowTransparency && e3.scaledCharWidth === t3.scaledCharWidth && e3.scaledCharHeight === t3.scaledCharHeight && e3.colors.foreground === t3.colors.foreground && e3.colors.background === t3.colors.background;
          }, t2.is256Color = function(e3) {
            return e3 < i.DEFAULT_COLOR;
          };
        }, 8803: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", {value: true}), t2.CHAR_ATLAS_CELL_SPACING = t2.DIM_OPACITY = t2.INVERTED_DEFAULT_COLOR = void 0, t2.INVERTED_DEFAULT_COLOR = 257, t2.DIM_OPACITY = 0.5, t2.CHAR_ATLAS_CELL_SPACING = 1;
        }, 1906: function(e2, t2, r) {
          var i, n = this && this.__extends || (i = function(e3, t3) {
            return (i = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(e4, t4) {
              e4.__proto__ = t4;
            } || function(e4, t4) {
              for (var r2 in t4)
                Object.prototype.hasOwnProperty.call(t4, r2) && (e4[r2] = t4[r2]);
            })(e3, t3);
          }, function(e3, t3) {
            function r2() {
              this.constructor = e3;
            }
            i(e3, t3), e3.prototype = t3 === null ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
          });
          Object.defineProperty(t2, "__esModule", {value: true}), t2.NoneCharAtlas = t2.DynamicCharAtlas = t2.getGlyphCacheKey = void 0;
          var o = r(8803), s = r(9616), a = r(5680), c = r(7001), l = r(6114), h = r(1752), u = r(4774), f = {css: "rgba(0, 0, 0, 0)", rgba: 0};
          function _(e3) {
            return e3.code << 21 | e3.bg << 12 | e3.fg << 3 | (e3.bold ? 0 : 4) + (e3.dim ? 0 : 2) + (e3.italic ? 0 : 1);
          }
          t2.getGlyphCacheKey = _;
          var d = function(e3) {
            function t3(t4, r2) {
              var i2 = e3.call(this) || this;
              i2._config = r2, i2._drawToCacheCount = 0, i2._glyphsWaitingOnBitmap = [], i2._bitmapCommitTimeout = null, i2._bitmap = null, i2._cacheCanvas = t4.createElement("canvas"), i2._cacheCanvas.width = 1024, i2._cacheCanvas.height = 1024, i2._cacheCtx = h.throwIfFalsy(i2._cacheCanvas.getContext("2d", {alpha: true}));
              var n2 = t4.createElement("canvas");
              n2.width = i2._config.scaledCharWidth, n2.height = i2._config.scaledCharHeight, i2._tmpCtx = h.throwIfFalsy(n2.getContext("2d", {alpha: i2._config.allowTransparency})), i2._width = Math.floor(1024 / i2._config.scaledCharWidth), i2._height = Math.floor(1024 / i2._config.scaledCharHeight);
              var o2 = i2._width * i2._height;
              return i2._cacheMap = new c.LRUMap(o2), i2._cacheMap.prealloc(o2), i2;
            }
            return n(t3, e3), t3.prototype.dispose = function() {
              this._bitmapCommitTimeout !== null && (window.clearTimeout(this._bitmapCommitTimeout), this._bitmapCommitTimeout = null);
            }, t3.prototype.beginFrame = function() {
              this._drawToCacheCount = 0;
            }, t3.prototype.draw = function(e4, t4, r2, i2) {
              if (t4.code === 32)
                return true;
              if (!this._canCache(t4))
                return false;
              var n2 = _(t4), o2 = this._cacheMap.get(n2);
              if (o2 != null)
                return this._drawFromCache(e4, o2, r2, i2), true;
              if (this._drawToCacheCount < 100) {
                var s2;
                s2 = this._cacheMap.size < this._cacheMap.capacity ? this._cacheMap.size : this._cacheMap.peek().index;
                var a2 = this._drawToCache(t4, s2);
                return this._cacheMap.set(n2, a2), this._drawFromCache(e4, a2, r2, i2), true;
              }
              return false;
            }, t3.prototype._canCache = function(e4) {
              return e4.code < 256;
            }, t3.prototype._toCoordinateX = function(e4) {
              return e4 % this._width * this._config.scaledCharWidth;
            }, t3.prototype._toCoordinateY = function(e4) {
              return Math.floor(e4 / this._width) * this._config.scaledCharHeight;
            }, t3.prototype._drawFromCache = function(e4, t4, r2, i2) {
              if (!t4.isEmpty) {
                var n2 = this._toCoordinateX(t4.index), o2 = this._toCoordinateY(t4.index);
                e4.drawImage(t4.inBitmap ? this._bitmap : this._cacheCanvas, n2, o2, this._config.scaledCharWidth, this._config.scaledCharHeight, r2, i2, this._config.scaledCharWidth, this._config.scaledCharHeight);
              }
            }, t3.prototype._getColorFromAnsiIndex = function(e4) {
              return e4 < this._config.colors.ansi.length ? this._config.colors.ansi[e4] : a.DEFAULT_ANSI_COLORS[e4];
            }, t3.prototype._getBackgroundColor = function(e4) {
              return this._config.allowTransparency ? f : e4.bg === o.INVERTED_DEFAULT_COLOR ? this._config.colors.foreground : e4.bg < 256 ? this._getColorFromAnsiIndex(e4.bg) : this._config.colors.background;
            }, t3.prototype._getForegroundColor = function(e4) {
              return e4.fg === o.INVERTED_DEFAULT_COLOR ? u.color.opaque(this._config.colors.background) : e4.fg < 256 ? this._getColorFromAnsiIndex(e4.fg) : this._config.colors.foreground;
            }, t3.prototype._drawToCache = function(e4, t4) {
              this._drawToCacheCount++, this._tmpCtx.save();
              var r2 = this._getBackgroundColor(e4);
              this._tmpCtx.globalCompositeOperation = "copy", this._tmpCtx.fillStyle = r2.css, this._tmpCtx.fillRect(0, 0, this._config.scaledCharWidth, this._config.scaledCharHeight), this._tmpCtx.globalCompositeOperation = "source-over";
              var i2 = e4.bold ? this._config.fontWeightBold : this._config.fontWeight, n2 = e4.italic ? "italic" : "";
              this._tmpCtx.font = n2 + " " + i2 + " " + this._config.fontSize * this._config.devicePixelRatio + "px " + this._config.fontFamily, this._tmpCtx.textBaseline = "middle", this._tmpCtx.fillStyle = this._getForegroundColor(e4).css, e4.dim && (this._tmpCtx.globalAlpha = o.DIM_OPACITY), this._tmpCtx.fillText(e4.chars, 0, this._config.scaledCharHeight / 2), this._tmpCtx.restore();
              var s2 = this._tmpCtx.getImageData(0, 0, this._config.scaledCharWidth, this._config.scaledCharHeight), a2 = false;
              this._config.allowTransparency || (a2 = function(e5, t5) {
                for (var r3 = true, i3 = t5.rgba >>> 24, n3 = t5.rgba >>> 16 & 255, o2 = t5.rgba >>> 8 & 255, s3 = 0; s3 < e5.data.length; s3 += 4)
                  e5.data[s3] === i3 && e5.data[s3 + 1] === n3 && e5.data[s3 + 2] === o2 ? e5.data[s3 + 3] = 0 : r3 = false;
                return r3;
              }(s2, r2));
              var c2 = this._toCoordinateX(t4), l2 = this._toCoordinateY(t4);
              this._cacheCtx.putImageData(s2, c2, l2);
              var h2 = {index: t4, isEmpty: a2, inBitmap: false};
              return this._addGlyphToBitmap(h2), h2;
            }, t3.prototype._addGlyphToBitmap = function(e4) {
              var t4 = this;
              !("createImageBitmap" in window) || l.isFirefox || l.isSafari || (this._glyphsWaitingOnBitmap.push(e4), this._bitmapCommitTimeout === null && (this._bitmapCommitTimeout = window.setTimeout(function() {
                return t4._generateBitmap();
              }, 100)));
            }, t3.prototype._generateBitmap = function() {
              var e4 = this, t4 = this._glyphsWaitingOnBitmap;
              this._glyphsWaitingOnBitmap = [], window.createImageBitmap(this._cacheCanvas).then(function(r2) {
                e4._bitmap = r2;
                for (var i2 = 0; i2 < t4.length; i2++)
                  t4[i2].inBitmap = true;
              }), this._bitmapCommitTimeout = null;
            }, t3;
          }(s.BaseCharAtlas);
          t2.DynamicCharAtlas = d;
          var p = function(e3) {
            function t3(t4, r2) {
              return e3.call(this) || this;
            }
            return n(t3, e3), t3.prototype.draw = function(e4, t4, r2, i2) {
              return false;
            }, t3;
          }(s.BaseCharAtlas);
          t2.NoneCharAtlas = p;
        }, 7001: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", {value: true}), t2.LRUMap = void 0;
          var r = function() {
            function e3(e4) {
              this.capacity = e4, this._map = {}, this._head = null, this._tail = null, this._nodePool = [], this.size = 0;
            }
            return e3.prototype._unlinkNode = function(e4) {
              var t3 = e4.prev, r2 = e4.next;
              e4 === this._head && (this._head = r2), e4 === this._tail && (this._tail = t3), t3 !== null && (t3.next = r2), r2 !== null && (r2.prev = t3);
            }, e3.prototype._appendNode = function(e4) {
              var t3 = this._tail;
              t3 !== null && (t3.next = e4), e4.prev = t3, e4.next = null, this._tail = e4, this._head === null && (this._head = e4);
            }, e3.prototype.prealloc = function(e4) {
              for (var t3 = this._nodePool, r2 = 0; r2 < e4; r2++)
                t3.push({prev: null, next: null, key: null, value: null});
            }, e3.prototype.get = function(e4) {
              var t3 = this._map[e4];
              return t3 !== void 0 ? (this._unlinkNode(t3), this._appendNode(t3), t3.value) : null;
            }, e3.prototype.peekValue = function(e4) {
              var t3 = this._map[e4];
              return t3 !== void 0 ? t3.value : null;
            }, e3.prototype.peek = function() {
              var e4 = this._head;
              return e4 === null ? null : e4.value;
            }, e3.prototype.set = function(e4, t3) {
              var r2 = this._map[e4];
              if (r2 !== void 0)
                r2 = this._map[e4], this._unlinkNode(r2), r2.value = t3;
              else if (this.size >= this.capacity)
                r2 = this._head, this._unlinkNode(r2), delete this._map[r2.key], r2.key = e4, r2.value = t3, this._map[e4] = r2;
              else {
                var i = this._nodePool;
                i.length > 0 ? ((r2 = i.pop()).key = e4, r2.value = t3) : r2 = {prev: null, next: null, key: e4, value: t3}, this._map[e4] = r2, this.size++;
              }
              this._appendNode(r2);
            }, e3;
          }();
          t2.LRUMap = r;
        }, 1296: function(e2, t2, r) {
          var i, n = this && this.__extends || (i = function(e3, t3) {
            return (i = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(e4, t4) {
              e4.__proto__ = t4;
            } || function(e4, t4) {
              for (var r2 in t4)
                Object.prototype.hasOwnProperty.call(t4, r2) && (e4[r2] = t4[r2]);
            })(e3, t3);
          }, function(e3, t3) {
            function r2() {
              this.constructor = e3;
            }
            i(e3, t3), e3.prototype = t3 === null ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
          }), o = this && this.__decorate || function(e3, t3, r2, i2) {
            var n2, o2 = arguments.length, s2 = o2 < 3 ? t3 : i2 === null ? i2 = Object.getOwnPropertyDescriptor(t3, r2) : i2;
            if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
              s2 = Reflect.decorate(e3, t3, r2, i2);
            else
              for (var a2 = e3.length - 1; a2 >= 0; a2--)
                (n2 = e3[a2]) && (s2 = (o2 < 3 ? n2(s2) : o2 > 3 ? n2(t3, r2, s2) : n2(t3, r2)) || s2);
            return o2 > 3 && s2 && Object.defineProperty(t3, r2, s2), s2;
          }, s = this && this.__param || function(e3, t3) {
            return function(r2, i2) {
              t3(r2, i2, e3);
            };
          };
          Object.defineProperty(t2, "__esModule", {value: true}), t2.DomRenderer = void 0;
          var a = r(3787), c = r(8803), l = r(844), h = r(4725), u = r(2585), f = r(8460), _ = r(4774), d = r(9631), p = "xterm-dom-renderer-owner-", v = "xterm-fg-", g = "xterm-bg-", y = "xterm-focus", b = 1, S = function(e3) {
            function t3(t4, r2, i2, n2, o2, s2, c2, l2, h2) {
              var u2 = e3.call(this) || this;
              return u2._colors = t4, u2._element = r2, u2._screenElement = i2, u2._viewportElement = n2, u2._linkifier = o2, u2._linkifier2 = s2, u2._charSizeService = c2, u2._optionsService = l2, u2._bufferService = h2, u2._terminalClass = b++, u2._rowElements = [], u2._rowContainer = document.createElement("div"), u2._rowContainer.classList.add("xterm-rows"), u2._rowContainer.style.lineHeight = "normal", u2._rowContainer.setAttribute("aria-hidden", "true"), u2._refreshRowElements(u2._bufferService.cols, u2._bufferService.rows), u2._selectionContainer = document.createElement("div"), u2._selectionContainer.classList.add("xterm-selection"), u2._selectionContainer.setAttribute("aria-hidden", "true"), u2.dimensions = {scaledCharWidth: 0, scaledCharHeight: 0, scaledCellWidth: 0, scaledCellHeight: 0, scaledCharLeft: 0, scaledCharTop: 0, scaledCanvasWidth: 0, scaledCanvasHeight: 0, canvasWidth: 0, canvasHeight: 0, actualCellWidth: 0, actualCellHeight: 0}, u2._updateDimensions(), u2._injectCss(), u2._rowFactory = new a.DomRendererRowFactory(document, u2._optionsService, u2._colors), u2._element.classList.add(p + u2._terminalClass), u2._screenElement.appendChild(u2._rowContainer), u2._screenElement.appendChild(u2._selectionContainer), u2._linkifier.onShowLinkUnderline(function(e4) {
                return u2._onLinkHover(e4);
              }), u2._linkifier.onHideLinkUnderline(function(e4) {
                return u2._onLinkLeave(e4);
              }), u2._linkifier2.onShowLinkUnderline(function(e4) {
                return u2._onLinkHover(e4);
              }), u2._linkifier2.onHideLinkUnderline(function(e4) {
                return u2._onLinkLeave(e4);
              }), u2;
            }
            return n(t3, e3), Object.defineProperty(t3.prototype, "onRequestRedraw", {get: function() {
              return new f.EventEmitter().event;
            }, enumerable: false, configurable: true}), t3.prototype.dispose = function() {
              this._element.classList.remove(p + this._terminalClass), d.removeElementFromParent(this._rowContainer, this._selectionContainer, this._themeStyleElement, this._dimensionsStyleElement), e3.prototype.dispose.call(this);
            }, t3.prototype._updateDimensions = function() {
              this.dimensions.scaledCharWidth = this._charSizeService.width * window.devicePixelRatio, this.dimensions.scaledCharHeight = Math.ceil(this._charSizeService.height * window.devicePixelRatio), this.dimensions.scaledCellWidth = this.dimensions.scaledCharWidth + Math.round(this._optionsService.options.letterSpacing), this.dimensions.scaledCellHeight = Math.floor(this.dimensions.scaledCharHeight * this._optionsService.options.lineHeight), this.dimensions.scaledCharLeft = 0, this.dimensions.scaledCharTop = 0, this.dimensions.scaledCanvasWidth = this.dimensions.scaledCellWidth * this._bufferService.cols, this.dimensions.scaledCanvasHeight = this.dimensions.scaledCellHeight * this._bufferService.rows, this.dimensions.canvasWidth = Math.round(this.dimensions.scaledCanvasWidth / window.devicePixelRatio), this.dimensions.canvasHeight = Math.round(this.dimensions.scaledCanvasHeight / window.devicePixelRatio), this.dimensions.actualCellWidth = this.dimensions.canvasWidth / this._bufferService.cols, this.dimensions.actualCellHeight = this.dimensions.canvasHeight / this._bufferService.rows;
              for (var e4 = 0, t4 = this._rowElements; e4 < t4.length; e4++) {
                var r2 = t4[e4];
                r2.style.width = this.dimensions.canvasWidth + "px", r2.style.height = this.dimensions.actualCellHeight + "px", r2.style.lineHeight = this.dimensions.actualCellHeight + "px", r2.style.overflow = "hidden";
              }
              this._dimensionsStyleElement || (this._dimensionsStyleElement = document.createElement("style"), this._screenElement.appendChild(this._dimensionsStyleElement));
              var i2 = this._terminalSelector + " .xterm-rows span { display: inline-block; height: 100%; vertical-align: top; width: " + this.dimensions.actualCellWidth + "px}";
              this._dimensionsStyleElement.textContent = i2, this._selectionContainer.style.height = this._viewportElement.style.height, this._screenElement.style.width = this.dimensions.canvasWidth + "px", this._screenElement.style.height = this.dimensions.canvasHeight + "px";
            }, t3.prototype.setColors = function(e4) {
              this._colors = e4, this._injectCss();
            }, t3.prototype._injectCss = function() {
              var e4 = this;
              this._themeStyleElement || (this._themeStyleElement = document.createElement("style"), this._screenElement.appendChild(this._themeStyleElement));
              var t4 = this._terminalSelector + " .xterm-rows { color: " + this._colors.foreground.css + "; font-family: " + this._optionsService.options.fontFamily + "; font-size: " + this._optionsService.options.fontSize + "px;}";
              t4 += this._terminalSelector + " span:not(." + a.BOLD_CLASS + ") { font-weight: " + this._optionsService.options.fontWeight + ";}" + this._terminalSelector + " span." + a.BOLD_CLASS + " { font-weight: " + this._optionsService.options.fontWeightBold + ";}" + this._terminalSelector + " span." + a.ITALIC_CLASS + " { font-style: italic;}", t4 += "@keyframes blink_box_shadow_" + this._terminalClass + " { 50% {  box-shadow: none; }}", t4 += "@keyframes blink_block_" + this._terminalClass + " { 0% {  background-color: " + this._colors.cursor.css + ";  color: " + this._colors.cursorAccent.css + "; } 50% {  background-color: " + this._colors.cursorAccent.css + ";  color: " + this._colors.cursor.css + "; }}", t4 += this._terminalSelector + " .xterm-rows:not(.xterm-focus) ." + a.CURSOR_CLASS + "." + a.CURSOR_STYLE_BLOCK_CLASS + " { outline: 1px solid " + this._colors.cursor.css + "; outline-offset: -1px;}" + this._terminalSelector + " .xterm-rows.xterm-focus ." + a.CURSOR_CLASS + "." + a.CURSOR_BLINK_CLASS + ":not(." + a.CURSOR_STYLE_BLOCK_CLASS + ") { animation: blink_box_shadow_" + this._terminalClass + " 1s step-end infinite;}" + this._terminalSelector + " .xterm-rows.xterm-focus ." + a.CURSOR_CLASS + "." + a.CURSOR_BLINK_CLASS + "." + a.CURSOR_STYLE_BLOCK_CLASS + " { animation: blink_block_" + this._terminalClass + " 1s step-end infinite;}" + this._terminalSelector + " .xterm-rows.xterm-focus ." + a.CURSOR_CLASS + "." + a.CURSOR_STYLE_BLOCK_CLASS + " { background-color: " + this._colors.cursor.css + "; color: " + this._colors.cursorAccent.css + ";}" + this._terminalSelector + " .xterm-rows ." + a.CURSOR_CLASS + "." + a.CURSOR_STYLE_BAR_CLASS + " { box-shadow: " + this._optionsService.options.cursorWidth + "px 0 0 " + this._colors.cursor.css + " inset;}" + this._terminalSelector + " .xterm-rows ." + a.CURSOR_CLASS + "." + a.CURSOR_STYLE_UNDERLINE_CLASS + " { box-shadow: 0 -1px 0 " + this._colors.cursor.css + " inset;}", t4 += this._terminalSelector + " .xterm-selection { position: absolute; top: 0; left: 0; z-index: 1; pointer-events: none;}" + this._terminalSelector + " .xterm-selection div { position: absolute; background-color: " + this._colors.selectionTransparent.css + ";}", this._colors.ansi.forEach(function(r2, i2) {
                t4 += e4._terminalSelector + " ." + v + i2 + " { color: " + r2.css + "; }" + e4._terminalSelector + " ." + g + i2 + " { background-color: " + r2.css + "; }";
              }), t4 += this._terminalSelector + " ." + v + c.INVERTED_DEFAULT_COLOR + " { color: " + _.color.opaque(this._colors.background).css + "; }" + this._terminalSelector + " ." + g + c.INVERTED_DEFAULT_COLOR + " { background-color: " + this._colors.foreground.css + "; }", this._themeStyleElement.textContent = t4;
            }, t3.prototype.onDevicePixelRatioChange = function() {
              this._updateDimensions();
            }, t3.prototype._refreshRowElements = function(e4, t4) {
              for (var r2 = this._rowElements.length; r2 <= t4; r2++) {
                var i2 = document.createElement("div");
                this._rowContainer.appendChild(i2), this._rowElements.push(i2);
              }
              for (; this._rowElements.length > t4; )
                this._rowContainer.removeChild(this._rowElements.pop());
            }, t3.prototype.onResize = function(e4, t4) {
              this._refreshRowElements(e4, t4), this._updateDimensions();
            }, t3.prototype.onCharSizeChanged = function() {
              this._updateDimensions();
            }, t3.prototype.onBlur = function() {
              this._rowContainer.classList.remove(y);
            }, t3.prototype.onFocus = function() {
              this._rowContainer.classList.add(y);
            }, t3.prototype.onSelectionChanged = function(e4, t4, r2) {
              for (; this._selectionContainer.children.length; )
                this._selectionContainer.removeChild(this._selectionContainer.children[0]);
              if (e4 && t4) {
                var i2 = e4[1] - this._bufferService.buffer.ydisp, n2 = t4[1] - this._bufferService.buffer.ydisp, o2 = Math.max(i2, 0), s2 = Math.min(n2, this._bufferService.rows - 1);
                if (!(o2 >= this._bufferService.rows || s2 < 0)) {
                  var a2 = document.createDocumentFragment();
                  if (r2)
                    a2.appendChild(this._createSelectionElement(o2, e4[0], t4[0], s2 - o2 + 1));
                  else {
                    var c2 = i2 === o2 ? e4[0] : 0, l2 = o2 === n2 ? t4[0] : this._bufferService.cols;
                    a2.appendChild(this._createSelectionElement(o2, c2, l2));
                    var h2 = s2 - o2 - 1;
                    if (a2.appendChild(this._createSelectionElement(o2 + 1, 0, this._bufferService.cols, h2)), o2 !== s2) {
                      var u2 = n2 === s2 ? t4[0] : this._bufferService.cols;
                      a2.appendChild(this._createSelectionElement(s2, 0, u2));
                    }
                  }
                  this._selectionContainer.appendChild(a2);
                }
              }
            }, t3.prototype._createSelectionElement = function(e4, t4, r2, i2) {
              i2 === void 0 && (i2 = 1);
              var n2 = document.createElement("div");
              return n2.style.height = i2 * this.dimensions.actualCellHeight + "px", n2.style.top = e4 * this.dimensions.actualCellHeight + "px", n2.style.left = t4 * this.dimensions.actualCellWidth + "px", n2.style.width = this.dimensions.actualCellWidth * (r2 - t4) + "px", n2;
            }, t3.prototype.onCursorMove = function() {
            }, t3.prototype.onOptionsChanged = function() {
              this._updateDimensions(), this._injectCss();
            }, t3.prototype.clear = function() {
              for (var e4 = 0, t4 = this._rowElements; e4 < t4.length; e4++)
                t4[e4].innerText = "";
            }, t3.prototype.renderRows = function(e4, t4) {
              for (var r2 = this._bufferService.buffer.ybase + this._bufferService.buffer.y, i2 = Math.min(this._bufferService.buffer.x, this._bufferService.cols - 1), n2 = this._optionsService.options.cursorBlink, o2 = e4; o2 <= t4; o2++) {
                var s2 = this._rowElements[o2];
                s2.innerText = "";
                var a2 = o2 + this._bufferService.buffer.ydisp, c2 = this._bufferService.buffer.lines.get(a2), l2 = this._optionsService.options.cursorStyle;
                s2.appendChild(this._rowFactory.createRow(c2, a2 === r2, l2, i2, n2, this.dimensions.actualCellWidth, this._bufferService.cols));
              }
            }, Object.defineProperty(t3.prototype, "_terminalSelector", {get: function() {
              return "." + p + this._terminalClass;
            }, enumerable: false, configurable: true}), t3.prototype.registerCharacterJoiner = function(e4) {
              return -1;
            }, t3.prototype.deregisterCharacterJoiner = function(e4) {
              return false;
            }, t3.prototype._onLinkHover = function(e4) {
              this._setCellUnderline(e4.x1, e4.x2, e4.y1, e4.y2, e4.cols, true);
            }, t3.prototype._onLinkLeave = function(e4) {
              this._setCellUnderline(e4.x1, e4.x2, e4.y1, e4.y2, e4.cols, false);
            }, t3.prototype._setCellUnderline = function(e4, t4, r2, i2, n2, o2) {
              for (; e4 !== t4 || r2 !== i2; ) {
                var s2 = this._rowElements[r2];
                if (!s2)
                  return;
                var a2 = s2.children[e4];
                a2 && (a2.style.textDecoration = o2 ? "underline" : "none"), ++e4 >= n2 && (e4 = 0, r2++);
              }
            }, o([s(6, h.ICharSizeService), s(7, u.IOptionsService), s(8, u.IBufferService)], t3);
          }(l.Disposable);
          t2.DomRenderer = S;
        }, 3787: (e2, t2, r) => {
          Object.defineProperty(t2, "__esModule", {value: true}), t2.DomRendererRowFactory = t2.CURSOR_STYLE_UNDERLINE_CLASS = t2.CURSOR_STYLE_BAR_CLASS = t2.CURSOR_STYLE_BLOCK_CLASS = t2.CURSOR_BLINK_CLASS = t2.CURSOR_CLASS = t2.UNDERLINE_CLASS = t2.ITALIC_CLASS = t2.DIM_CLASS = t2.BOLD_CLASS = void 0;
          var i = r(8803), n = r(643), o = r(511), s = r(4774);
          t2.BOLD_CLASS = "xterm-bold", t2.DIM_CLASS = "xterm-dim", t2.ITALIC_CLASS = "xterm-italic", t2.UNDERLINE_CLASS = "xterm-underline", t2.CURSOR_CLASS = "xterm-cursor", t2.CURSOR_BLINK_CLASS = "xterm-cursor-blink", t2.CURSOR_STYLE_BLOCK_CLASS = "xterm-cursor-block", t2.CURSOR_STYLE_BAR_CLASS = "xterm-cursor-bar", t2.CURSOR_STYLE_UNDERLINE_CLASS = "xterm-cursor-underline";
          var a = function() {
            function e3(e4, t3, r2) {
              this._document = e4, this._optionsService = t3, this._colors = r2, this._workCell = new o.CellData();
            }
            return e3.prototype.setColors = function(e4) {
              this._colors = e4;
            }, e3.prototype.createRow = function(e4, r2, o2, a2, l, h, u) {
              for (var f = this._document.createDocumentFragment(), _ = 0, d = Math.min(e4.length, u) - 1; d >= 0; d--)
                if (e4.loadCell(d, this._workCell).getCode() !== n.NULL_CELL_CODE || r2 && d === a2) {
                  _ = d + 1;
                  break;
                }
              for (d = 0; d < _; d++) {
                e4.loadCell(d, this._workCell);
                var p = this._workCell.getWidth();
                if (p !== 0) {
                  var v = this._document.createElement("span");
                  if (p > 1 && (v.style.width = h * p + "px"), r2 && d === a2)
                    switch (v.classList.add(t2.CURSOR_CLASS), l && v.classList.add(t2.CURSOR_BLINK_CLASS), o2) {
                      case "bar":
                        v.classList.add(t2.CURSOR_STYLE_BAR_CLASS);
                        break;
                      case "underline":
                        v.classList.add(t2.CURSOR_STYLE_UNDERLINE_CLASS);
                        break;
                      default:
                        v.classList.add(t2.CURSOR_STYLE_BLOCK_CLASS);
                    }
                  this._workCell.isBold() && v.classList.add(t2.BOLD_CLASS), this._workCell.isItalic() && v.classList.add(t2.ITALIC_CLASS), this._workCell.isDim() && v.classList.add(t2.DIM_CLASS), this._workCell.isUnderline() && v.classList.add(t2.UNDERLINE_CLASS), this._workCell.isInvisible() ? v.textContent = n.WHITESPACE_CELL_CHAR : v.textContent = this._workCell.getChars() || n.WHITESPACE_CELL_CHAR;
                  var g = this._workCell.getFgColor(), y = this._workCell.getFgColorMode(), b = this._workCell.getBgColor(), S = this._workCell.getBgColorMode(), m = !!this._workCell.isInverse();
                  if (m) {
                    var C = g;
                    g = b, b = C;
                    var w = y;
                    y = S, S = w;
                  }
                  switch (y) {
                    case 16777216:
                    case 33554432:
                      this._workCell.isBold() && g < 8 && this._optionsService.options.drawBoldTextInBrightColors && (g += 8), this._applyMinimumContrast(v, this._colors.background, this._colors.ansi[g]) || v.classList.add("xterm-fg-" + g);
                      break;
                    case 50331648:
                      var E = s.rgba.toColor(g >> 16 & 255, g >> 8 & 255, 255 & g);
                      this._applyMinimumContrast(v, this._colors.background, E) || this._addStyle(v, "color:#" + c(g.toString(16), "0", 6));
                      break;
                    case 0:
                    default:
                      this._applyMinimumContrast(v, this._colors.background, this._colors.foreground) || m && v.classList.add("xterm-fg-" + i.INVERTED_DEFAULT_COLOR);
                  }
                  switch (S) {
                    case 16777216:
                    case 33554432:
                      v.classList.add("xterm-bg-" + b);
                      break;
                    case 50331648:
                      this._addStyle(v, "background-color:#" + c(b.toString(16), "0", 6));
                      break;
                    case 0:
                    default:
                      m && v.classList.add("xterm-bg-" + i.INVERTED_DEFAULT_COLOR);
                  }
                  f.appendChild(v);
                }
              }
              return f;
            }, e3.prototype._applyMinimumContrast = function(e4, t3, r2) {
              if (this._optionsService.options.minimumContrastRatio === 1)
                return false;
              var i2 = this._colors.contrastCache.getColor(this._workCell.bg, this._workCell.fg);
              return i2 === void 0 && (i2 = s.color.ensureContrastRatio(t3, r2, this._optionsService.options.minimumContrastRatio), this._colors.contrastCache.setColor(this._workCell.bg, this._workCell.fg, i2 != null ? i2 : null)), !!i2 && (this._addStyle(e4, "color:" + i2.css), true);
            }, e3.prototype._addStyle = function(e4, t3) {
              e4.setAttribute("style", "" + (e4.getAttribute("style") || "") + t3 + ";");
            }, e3;
          }();
          function c(e3, t3, r2) {
            for (; e3.length < r2; )
              e3 = t3 + e3;
            return e3;
          }
          t2.DomRendererRowFactory = a;
        }, 456: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", {value: true}), t2.SelectionModel = void 0;
          var r = function() {
            function e3(e4) {
              this._bufferService = e4, this.isSelectAllActive = false, this.selectionStartLength = 0;
            }
            return e3.prototype.clearSelection = function() {
              this.selectionStart = void 0, this.selectionEnd = void 0, this.isSelectAllActive = false, this.selectionStartLength = 0;
            }, Object.defineProperty(e3.prototype, "finalSelectionStart", {get: function() {
              return this.isSelectAllActive ? [0, 0] : this.selectionEnd && this.selectionStart && this.areSelectionValuesReversed() ? this.selectionEnd : this.selectionStart;
            }, enumerable: false, configurable: true}), Object.defineProperty(e3.prototype, "finalSelectionEnd", {get: function() {
              if (this.isSelectAllActive)
                return [this._bufferService.cols, this._bufferService.buffer.ybase + this._bufferService.rows - 1];
              if (this.selectionStart) {
                if (!this.selectionEnd || this.areSelectionValuesReversed()) {
                  var e4 = this.selectionStart[0] + this.selectionStartLength;
                  return e4 > this._bufferService.cols ? [e4 % this._bufferService.cols, this.selectionStart[1] + Math.floor(e4 / this._bufferService.cols)] : [e4, this.selectionStart[1]];
                }
                return this.selectionStartLength && this.selectionEnd[1] === this.selectionStart[1] ? [Math.max(this.selectionStart[0] + this.selectionStartLength, this.selectionEnd[0]), this.selectionEnd[1]] : this.selectionEnd;
              }
            }, enumerable: false, configurable: true}), e3.prototype.areSelectionValuesReversed = function() {
              var e4 = this.selectionStart, t3 = this.selectionEnd;
              return !(!e4 || !t3) && (e4[1] > t3[1] || e4[1] === t3[1] && e4[0] > t3[0]);
            }, e3.prototype.onTrim = function(e4) {
              return this.selectionStart && (this.selectionStart[1] -= e4), this.selectionEnd && (this.selectionEnd[1] -= e4), this.selectionEnd && this.selectionEnd[1] < 0 ? (this.clearSelection(), true) : (this.selectionStart && this.selectionStart[1] < 0 && (this.selectionStart[1] = 0), false);
            }, e3;
          }();
          t2.SelectionModel = r;
        }, 428: function(e2, t2, r) {
          var i = this && this.__decorate || function(e3, t3, r2, i2) {
            var n2, o2 = arguments.length, s2 = o2 < 3 ? t3 : i2 === null ? i2 = Object.getOwnPropertyDescriptor(t3, r2) : i2;
            if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
              s2 = Reflect.decorate(e3, t3, r2, i2);
            else
              for (var a2 = e3.length - 1; a2 >= 0; a2--)
                (n2 = e3[a2]) && (s2 = (o2 < 3 ? n2(s2) : o2 > 3 ? n2(t3, r2, s2) : n2(t3, r2)) || s2);
            return o2 > 3 && s2 && Object.defineProperty(t3, r2, s2), s2;
          }, n = this && this.__param || function(e3, t3) {
            return function(r2, i2) {
              t3(r2, i2, e3);
            };
          };
          Object.defineProperty(t2, "__esModule", {value: true}), t2.CharSizeService = void 0;
          var o = r(2585), s = r(8460), a = function() {
            function e3(e4, t3, r2) {
              this._optionsService = r2, this.width = 0, this.height = 0, this._onCharSizeChange = new s.EventEmitter(), this._measureStrategy = new c(e4, t3, this._optionsService);
            }
            return Object.defineProperty(e3.prototype, "hasValidSize", {get: function() {
              return this.width > 0 && this.height > 0;
            }, enumerable: false, configurable: true}), Object.defineProperty(e3.prototype, "onCharSizeChange", {get: function() {
              return this._onCharSizeChange.event;
            }, enumerable: false, configurable: true}), e3.prototype.measure = function() {
              var e4 = this._measureStrategy.measure();
              e4.width === this.width && e4.height === this.height || (this.width = e4.width, this.height = e4.height, this._onCharSizeChange.fire());
            }, i([n(2, o.IOptionsService)], e3);
          }();
          t2.CharSizeService = a;
          var c = function() {
            function e3(e4, t3, r2) {
              this._document = e4, this._parentElement = t3, this._optionsService = r2, this._result = {width: 0, height: 0}, this._measureElement = this._document.createElement("span"), this._measureElement.classList.add("xterm-char-measure-element"), this._measureElement.textContent = "W", this._measureElement.setAttribute("aria-hidden", "true"), this._parentElement.appendChild(this._measureElement);
            }
            return e3.prototype.measure = function() {
              this._measureElement.style.fontFamily = this._optionsService.options.fontFamily, this._measureElement.style.fontSize = this._optionsService.options.fontSize + "px";
              var e4 = this._measureElement.getBoundingClientRect();
              return e4.width !== 0 && e4.height !== 0 && (this._result.width = e4.width, this._result.height = Math.ceil(e4.height)), this._result;
            }, e3;
          }();
        }, 5114: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", {value: true}), t2.CoreBrowserService = void 0;
          var r = function() {
            function e3(e4) {
              this._textarea = e4;
            }
            return Object.defineProperty(e3.prototype, "isFocused", {get: function() {
              return (this._textarea.getRootNode ? this._textarea.getRootNode() : document).activeElement === this._textarea && document.hasFocus();
            }, enumerable: false, configurable: true}), e3;
          }();
          t2.CoreBrowserService = r;
        }, 8934: function(e2, t2, r) {
          var i = this && this.__decorate || function(e3, t3, r2, i2) {
            var n2, o2 = arguments.length, s2 = o2 < 3 ? t3 : i2 === null ? i2 = Object.getOwnPropertyDescriptor(t3, r2) : i2;
            if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
              s2 = Reflect.decorate(e3, t3, r2, i2);
            else
              for (var a2 = e3.length - 1; a2 >= 0; a2--)
                (n2 = e3[a2]) && (s2 = (o2 < 3 ? n2(s2) : o2 > 3 ? n2(t3, r2, s2) : n2(t3, r2)) || s2);
            return o2 > 3 && s2 && Object.defineProperty(t3, r2, s2), s2;
          }, n = this && this.__param || function(e3, t3) {
            return function(r2, i2) {
              t3(r2, i2, e3);
            };
          };
          Object.defineProperty(t2, "__esModule", {value: true}), t2.MouseService = void 0;
          var o = r(4725), s = r(9806), a = function() {
            function e3(e4, t3) {
              this._renderService = e4, this._charSizeService = t3;
            }
            return e3.prototype.getCoords = function(e4, t3, r2, i2, n2) {
              return s.getCoords(e4, t3, r2, i2, this._charSizeService.hasValidSize, this._renderService.dimensions.actualCellWidth, this._renderService.dimensions.actualCellHeight, n2);
            }, e3.prototype.getRawByteCoords = function(e4, t3, r2, i2) {
              var n2 = this.getCoords(e4, t3, r2, i2);
              return s.getRawByteCoords(n2);
            }, i([n(0, o.IRenderService), n(1, o.ICharSizeService)], e3);
          }();
          t2.MouseService = a;
        }, 3230: function(e2, t2, r) {
          var i, n = this && this.__extends || (i = function(e3, t3) {
            return (i = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(e4, t4) {
              e4.__proto__ = t4;
            } || function(e4, t4) {
              for (var r2 in t4)
                Object.prototype.hasOwnProperty.call(t4, r2) && (e4[r2] = t4[r2]);
            })(e3, t3);
          }, function(e3, t3) {
            function r2() {
              this.constructor = e3;
            }
            i(e3, t3), e3.prototype = t3 === null ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
          }), o = this && this.__decorate || function(e3, t3, r2, i2) {
            var n2, o2 = arguments.length, s2 = o2 < 3 ? t3 : i2 === null ? i2 = Object.getOwnPropertyDescriptor(t3, r2) : i2;
            if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
              s2 = Reflect.decorate(e3, t3, r2, i2);
            else
              for (var a2 = e3.length - 1; a2 >= 0; a2--)
                (n2 = e3[a2]) && (s2 = (o2 < 3 ? n2(s2) : o2 > 3 ? n2(t3, r2, s2) : n2(t3, r2)) || s2);
            return o2 > 3 && s2 && Object.defineProperty(t3, r2, s2), s2;
          }, s = this && this.__param || function(e3, t3) {
            return function(r2, i2) {
              t3(r2, i2, e3);
            };
          };
          Object.defineProperty(t2, "__esModule", {value: true}), t2.RenderService = void 0;
          var a = r(6193), c = r(8460), l = r(844), h = r(5596), u = r(3656), f = r(2585), _ = r(4725), d = function(e3) {
            function t3(t4, r2, i2, n2, o2, s2) {
              var l2 = e3.call(this) || this;
              if (l2._renderer = t4, l2._rowCount = r2, l2._charSizeService = o2, l2._isPaused = false, l2._needsFullRefresh = false, l2._isNextRenderRedrawOnly = true, l2._needsSelectionRefresh = false, l2._canvasWidth = 0, l2._canvasHeight = 0, l2._selectionState = {start: void 0, end: void 0, columnSelectMode: false}, l2._onDimensionsChange = new c.EventEmitter(), l2._onRender = new c.EventEmitter(), l2._onRefreshRequest = new c.EventEmitter(), l2.register({dispose: function() {
                return l2._renderer.dispose();
              }}), l2._renderDebouncer = new a.RenderDebouncer(function(e4, t5) {
                return l2._renderRows(e4, t5);
              }), l2.register(l2._renderDebouncer), l2._screenDprMonitor = new h.ScreenDprMonitor(), l2._screenDprMonitor.setListener(function() {
                return l2.onDevicePixelRatioChange();
              }), l2.register(l2._screenDprMonitor), l2.register(s2.onResize(function(e4) {
                return l2._fullRefresh();
              })), l2.register(n2.onOptionChange(function() {
                return l2._renderer.onOptionsChanged();
              })), l2.register(l2._charSizeService.onCharSizeChange(function() {
                return l2.onCharSizeChanged();
              })), l2._renderer.onRequestRedraw(function(e4) {
                return l2.refreshRows(e4.start, e4.end, true);
              }), l2.register(u.addDisposableDomListener(window, "resize", function() {
                return l2.onDevicePixelRatioChange();
              })), "IntersectionObserver" in window) {
                var f2 = new IntersectionObserver(function(e4) {
                  return l2._onIntersectionChange(e4[e4.length - 1]);
                }, {threshold: 0});
                f2.observe(i2), l2.register({dispose: function() {
                  return f2.disconnect();
                }});
              }
              return l2;
            }
            return n(t3, e3), Object.defineProperty(t3.prototype, "onDimensionsChange", {get: function() {
              return this._onDimensionsChange.event;
            }, enumerable: false, configurable: true}), Object.defineProperty(t3.prototype, "onRenderedBufferChange", {get: function() {
              return this._onRender.event;
            }, enumerable: false, configurable: true}), Object.defineProperty(t3.prototype, "onRefreshRequest", {get: function() {
              return this._onRefreshRequest.event;
            }, enumerable: false, configurable: true}), Object.defineProperty(t3.prototype, "dimensions", {get: function() {
              return this._renderer.dimensions;
            }, enumerable: false, configurable: true}), t3.prototype._onIntersectionChange = function(e4) {
              this._isPaused = e4.isIntersecting === void 0 ? e4.intersectionRatio === 0 : !e4.isIntersecting, this._isPaused || this._charSizeService.hasValidSize || this._charSizeService.measure(), !this._isPaused && this._needsFullRefresh && (this.refreshRows(0, this._rowCount - 1), this._needsFullRefresh = false);
            }, t3.prototype.refreshRows = function(e4, t4, r2) {
              r2 === void 0 && (r2 = false), this._isPaused ? this._needsFullRefresh = true : (r2 || (this._isNextRenderRedrawOnly = false), this._renderDebouncer.refresh(e4, t4, this._rowCount));
            }, t3.prototype._renderRows = function(e4, t4) {
              this._renderer.renderRows(e4, t4), this._needsSelectionRefresh && (this._renderer.onSelectionChanged(this._selectionState.start, this._selectionState.end, this._selectionState.columnSelectMode), this._needsSelectionRefresh = false), this._isNextRenderRedrawOnly || this._onRender.fire({start: e4, end: t4}), this._isNextRenderRedrawOnly = true;
            }, t3.prototype.resize = function(e4, t4) {
              this._rowCount = t4, this._fireOnCanvasResize();
            }, t3.prototype.changeOptions = function() {
              this._renderer.onOptionsChanged(), this.refreshRows(0, this._rowCount - 1), this._fireOnCanvasResize();
            }, t3.prototype._fireOnCanvasResize = function() {
              this._renderer.dimensions.canvasWidth === this._canvasWidth && this._renderer.dimensions.canvasHeight === this._canvasHeight || this._onDimensionsChange.fire(this._renderer.dimensions);
            }, t3.prototype.dispose = function() {
              e3.prototype.dispose.call(this);
            }, t3.prototype.setRenderer = function(e4) {
              var t4 = this;
              this._renderer.dispose(), this._renderer = e4, this._renderer.onRequestRedraw(function(e5) {
                return t4.refreshRows(e5.start, e5.end, true);
              }), this._needsSelectionRefresh = true, this._fullRefresh();
            }, t3.prototype._fullRefresh = function() {
              this._isPaused ? this._needsFullRefresh = true : this.refreshRows(0, this._rowCount - 1);
            }, t3.prototype.setColors = function(e4) {
              this._renderer.setColors(e4), this._fullRefresh();
            }, t3.prototype.onDevicePixelRatioChange = function() {
              this._renderer.onDevicePixelRatioChange(), this.refreshRows(0, this._rowCount - 1);
            }, t3.prototype.onResize = function(e4, t4) {
              this._renderer.onResize(e4, t4), this._fullRefresh();
            }, t3.prototype.onCharSizeChanged = function() {
              this._renderer.onCharSizeChanged();
            }, t3.prototype.onBlur = function() {
              this._renderer.onBlur();
            }, t3.prototype.onFocus = function() {
              this._renderer.onFocus();
            }, t3.prototype.onSelectionChanged = function(e4, t4, r2) {
              this._selectionState.start = e4, this._selectionState.end = t4, this._selectionState.columnSelectMode = r2, this._renderer.onSelectionChanged(e4, t4, r2);
            }, t3.prototype.onCursorMove = function() {
              this._renderer.onCursorMove();
            }, t3.prototype.clear = function() {
              this._renderer.clear();
            }, t3.prototype.registerCharacterJoiner = function(e4) {
              return this._renderer.registerCharacterJoiner(e4);
            }, t3.prototype.deregisterCharacterJoiner = function(e4) {
              return this._renderer.deregisterCharacterJoiner(e4);
            }, o([s(3, f.IOptionsService), s(4, _.ICharSizeService), s(5, f.IBufferService)], t3);
          }(l.Disposable);
          t2.RenderService = d;
        }, 9312: function(e2, t2, r) {
          var i, n = this && this.__extends || (i = function(e3, t3) {
            return (i = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(e4, t4) {
              e4.__proto__ = t4;
            } || function(e4, t4) {
              for (var r2 in t4)
                Object.prototype.hasOwnProperty.call(t4, r2) && (e4[r2] = t4[r2]);
            })(e3, t3);
          }, function(e3, t3) {
            function r2() {
              this.constructor = e3;
            }
            i(e3, t3), e3.prototype = t3 === null ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
          }), o = this && this.__decorate || function(e3, t3, r2, i2) {
            var n2, o2 = arguments.length, s2 = o2 < 3 ? t3 : i2 === null ? i2 = Object.getOwnPropertyDescriptor(t3, r2) : i2;
            if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
              s2 = Reflect.decorate(e3, t3, r2, i2);
            else
              for (var a2 = e3.length - 1; a2 >= 0; a2--)
                (n2 = e3[a2]) && (s2 = (o2 < 3 ? n2(s2) : o2 > 3 ? n2(t3, r2, s2) : n2(t3, r2)) || s2);
            return o2 > 3 && s2 && Object.defineProperty(t3, r2, s2), s2;
          }, s = this && this.__param || function(e3, t3) {
            return function(r2, i2) {
              t3(r2, i2, e3);
            };
          };
          Object.defineProperty(t2, "__esModule", {value: true}), t2.SelectionService = void 0;
          var a = r(6114), c = r(456), l = r(511), h = r(8460), u = r(4725), f = r(2585), _ = r(9806), d = r(9504), p = r(844), v = String.fromCharCode(160), g = new RegExp(v, "g"), y = function(e3) {
            function t3(t4, r2, i2, n2, o2, s2, a2) {
              var u2 = e3.call(this) || this;
              return u2._element = t4, u2._screenElement = r2, u2._bufferService = i2, u2._coreService = n2, u2._mouseService = o2, u2._optionsService = s2, u2._renderService = a2, u2._dragScrollAmount = 0, u2._enabled = true, u2._workCell = new l.CellData(), u2._mouseDownTimeStamp = 0, u2._oldHasSelection = false, u2._oldSelectionStart = void 0, u2._oldSelectionEnd = void 0, u2._onLinuxMouseSelection = u2.register(new h.EventEmitter()), u2._onRedrawRequest = u2.register(new h.EventEmitter()), u2._onSelectionChange = u2.register(new h.EventEmitter()), u2._onRequestScrollLines = u2.register(new h.EventEmitter()), u2._mouseMoveListener = function(e4) {
                return u2._onMouseMove(e4);
              }, u2._mouseUpListener = function(e4) {
                return u2._onMouseUp(e4);
              }, u2._coreService.onUserInput(function() {
                u2.hasSelection && u2.clearSelection();
              }), u2._trimListener = u2._bufferService.buffer.lines.onTrim(function(e4) {
                return u2._onTrim(e4);
              }), u2.register(u2._bufferService.buffers.onBufferActivate(function(e4) {
                return u2._onBufferActivate(e4);
              })), u2.enable(), u2._model = new c.SelectionModel(u2._bufferService), u2._activeSelectionMode = 0, u2;
            }
            return n(t3, e3), Object.defineProperty(t3.prototype, "onLinuxMouseSelection", {get: function() {
              return this._onLinuxMouseSelection.event;
            }, enumerable: false, configurable: true}), Object.defineProperty(t3.prototype, "onRequestRedraw", {get: function() {
              return this._onRedrawRequest.event;
            }, enumerable: false, configurable: true}), Object.defineProperty(t3.prototype, "onSelectionChange", {get: function() {
              return this._onSelectionChange.event;
            }, enumerable: false, configurable: true}), Object.defineProperty(t3.prototype, "onRequestScrollLines", {get: function() {
              return this._onRequestScrollLines.event;
            }, enumerable: false, configurable: true}), t3.prototype.dispose = function() {
              this._removeMouseDownListeners();
            }, t3.prototype.reset = function() {
              this.clearSelection();
            }, t3.prototype.disable = function() {
              this.clearSelection(), this._enabled = false;
            }, t3.prototype.enable = function() {
              this._enabled = true;
            }, Object.defineProperty(t3.prototype, "selectionStart", {get: function() {
              return this._model.finalSelectionStart;
            }, enumerable: false, configurable: true}), Object.defineProperty(t3.prototype, "selectionEnd", {get: function() {
              return this._model.finalSelectionEnd;
            }, enumerable: false, configurable: true}), Object.defineProperty(t3.prototype, "hasSelection", {get: function() {
              var e4 = this._model.finalSelectionStart, t4 = this._model.finalSelectionEnd;
              return !(!e4 || !t4 || e4[0] === t4[0] && e4[1] === t4[1]);
            }, enumerable: false, configurable: true}), Object.defineProperty(t3.prototype, "selectionText", {get: function() {
              var e4 = this._model.finalSelectionStart, t4 = this._model.finalSelectionEnd;
              if (!e4 || !t4)
                return "";
              var r2 = this._bufferService.buffer, i2 = [];
              if (this._activeSelectionMode === 3) {
                if (e4[0] === t4[0])
                  return "";
                for (var n2 = e4[1]; n2 <= t4[1]; n2++) {
                  var o2 = r2.translateBufferLineToString(n2, true, e4[0], t4[0]);
                  i2.push(o2);
                }
              } else {
                var s2 = e4[1] === t4[1] ? t4[0] : void 0;
                for (i2.push(r2.translateBufferLineToString(e4[1], true, e4[0], s2)), n2 = e4[1] + 1; n2 <= t4[1] - 1; n2++) {
                  var c2 = r2.lines.get(n2);
                  o2 = r2.translateBufferLineToString(n2, true), c2 && c2.isWrapped ? i2[i2.length - 1] += o2 : i2.push(o2);
                }
                e4[1] !== t4[1] && (c2 = r2.lines.get(t4[1]), o2 = r2.translateBufferLineToString(t4[1], true, 0, t4[0]), c2 && c2.isWrapped ? i2[i2.length - 1] += o2 : i2.push(o2));
              }
              return i2.map(function(e5) {
                return e5.replace(g, " ");
              }).join(a.isWindows ? "\r\n" : "\n");
            }, enumerable: false, configurable: true}), t3.prototype.clearSelection = function() {
              this._model.clearSelection(), this._removeMouseDownListeners(), this.refresh(), this._onSelectionChange.fire();
            }, t3.prototype.refresh = function(e4) {
              var t4 = this;
              this._refreshAnimationFrame || (this._refreshAnimationFrame = window.requestAnimationFrame(function() {
                return t4._refresh();
              })), a.isLinux && e4 && this.selectionText.length && this._onLinuxMouseSelection.fire(this.selectionText);
            }, t3.prototype._refresh = function() {
              this._refreshAnimationFrame = void 0, this._onRedrawRequest.fire({start: this._model.finalSelectionStart, end: this._model.finalSelectionEnd, columnSelectMode: this._activeSelectionMode === 3});
            }, t3.prototype._isClickInSelection = function(e4) {
              var t4 = this._getMouseBufferCoords(e4), r2 = this._model.finalSelectionStart, i2 = this._model.finalSelectionEnd;
              return !!(r2 && i2 && t4) && this._areCoordsInSelection(t4, r2, i2);
            }, t3.prototype._areCoordsInSelection = function(e4, t4, r2) {
              return e4[1] > t4[1] && e4[1] < r2[1] || t4[1] === r2[1] && e4[1] === t4[1] && e4[0] >= t4[0] && e4[0] < r2[0] || t4[1] < r2[1] && e4[1] === r2[1] && e4[0] < r2[0] || t4[1] < r2[1] && e4[1] === t4[1] && e4[0] >= t4[0];
            }, t3.prototype._selectWordAtCursor = function(e4) {
              var t4 = this._getMouseBufferCoords(e4);
              t4 && (this._selectWordAt(t4, false), this._model.selectionEnd = void 0, this.refresh(true));
            }, t3.prototype.selectAll = function() {
              this._model.isSelectAllActive = true, this.refresh(), this._onSelectionChange.fire();
            }, t3.prototype.selectLines = function(e4, t4) {
              this._model.clearSelection(), e4 = Math.max(e4, 0), t4 = Math.min(t4, this._bufferService.buffer.lines.length - 1), this._model.selectionStart = [0, e4], this._model.selectionEnd = [this._bufferService.cols, t4], this.refresh(), this._onSelectionChange.fire();
            }, t3.prototype._onTrim = function(e4) {
              this._model.onTrim(e4) && this.refresh();
            }, t3.prototype._getMouseBufferCoords = function(e4) {
              var t4 = this._mouseService.getCoords(e4, this._screenElement, this._bufferService.cols, this._bufferService.rows, true);
              if (t4)
                return t4[0]--, t4[1]--, t4[1] += this._bufferService.buffer.ydisp, t4;
            }, t3.prototype._getMouseEventScrollAmount = function(e4) {
              var t4 = _.getCoordsRelativeToElement(e4, this._screenElement)[1], r2 = this._renderService.dimensions.canvasHeight;
              return t4 >= 0 && t4 <= r2 ? 0 : (t4 > r2 && (t4 -= r2), t4 = Math.min(Math.max(t4, -50), 50), (t4 /= 50) / Math.abs(t4) + Math.round(14 * t4));
            }, t3.prototype.shouldForceSelection = function(e4) {
              return a.isMac ? e4.altKey && this._optionsService.options.macOptionClickForcesSelection : e4.shiftKey;
            }, t3.prototype.onMouseDown = function(e4) {
              if (this._mouseDownTimeStamp = e4.timeStamp, (e4.button !== 2 || !this.hasSelection) && e4.button === 0) {
                if (!this._enabled) {
                  if (!this.shouldForceSelection(e4))
                    return;
                  e4.stopPropagation();
                }
                e4.preventDefault(), this._dragScrollAmount = 0, this._enabled && e4.shiftKey ? this._onIncrementalClick(e4) : e4.detail === 1 ? this._onSingleClick(e4) : e4.detail === 2 ? this._onDoubleClick(e4) : e4.detail === 3 && this._onTripleClick(e4), this._addMouseDownListeners(), this.refresh(true);
              }
            }, t3.prototype._addMouseDownListeners = function() {
              var e4 = this;
              this._screenElement.ownerDocument && (this._screenElement.ownerDocument.addEventListener("mousemove", this._mouseMoveListener), this._screenElement.ownerDocument.addEventListener("mouseup", this._mouseUpListener)), this._dragScrollIntervalTimer = window.setInterval(function() {
                return e4._dragScroll();
              }, 50);
            }, t3.prototype._removeMouseDownListeners = function() {
              this._screenElement.ownerDocument && (this._screenElement.ownerDocument.removeEventListener("mousemove", this._mouseMoveListener), this._screenElement.ownerDocument.removeEventListener("mouseup", this._mouseUpListener)), clearInterval(this._dragScrollIntervalTimer), this._dragScrollIntervalTimer = void 0;
            }, t3.prototype._onIncrementalClick = function(e4) {
              this._model.selectionStart && (this._model.selectionEnd = this._getMouseBufferCoords(e4));
            }, t3.prototype._onSingleClick = function(e4) {
              if (this._model.selectionStartLength = 0, this._model.isSelectAllActive = false, this._activeSelectionMode = this.shouldColumnSelect(e4) ? 3 : 0, this._model.selectionStart = this._getMouseBufferCoords(e4), this._model.selectionStart) {
                this._model.selectionEnd = void 0;
                var t4 = this._bufferService.buffer.lines.get(this._model.selectionStart[1]);
                t4 && t4.length !== this._model.selectionStart[0] && t4.hasWidth(this._model.selectionStart[0]) === 0 && this._model.selectionStart[0]++;
              }
            }, t3.prototype._onDoubleClick = function(e4) {
              var t4 = this._getMouseBufferCoords(e4);
              t4 && (this._activeSelectionMode = 1, this._selectWordAt(t4, true));
            }, t3.prototype._onTripleClick = function(e4) {
              var t4 = this._getMouseBufferCoords(e4);
              t4 && (this._activeSelectionMode = 2, this._selectLineAt(t4[1]));
            }, t3.prototype.shouldColumnSelect = function(e4) {
              return e4.altKey && !(a.isMac && this._optionsService.options.macOptionClickForcesSelection);
            }, t3.prototype._onMouseMove = function(e4) {
              if (e4.stopImmediatePropagation(), this._model.selectionStart) {
                var t4 = this._model.selectionEnd ? [this._model.selectionEnd[0], this._model.selectionEnd[1]] : null;
                if (this._model.selectionEnd = this._getMouseBufferCoords(e4), this._model.selectionEnd) {
                  this._activeSelectionMode === 2 ? this._model.selectionEnd[1] < this._model.selectionStart[1] ? this._model.selectionEnd[0] = 0 : this._model.selectionEnd[0] = this._bufferService.cols : this._activeSelectionMode === 1 && this._selectToWordAt(this._model.selectionEnd), this._dragScrollAmount = this._getMouseEventScrollAmount(e4), this._activeSelectionMode !== 3 && (this._dragScrollAmount > 0 ? this._model.selectionEnd[0] = this._bufferService.cols : this._dragScrollAmount < 0 && (this._model.selectionEnd[0] = 0));
                  var r2 = this._bufferService.buffer;
                  if (this._model.selectionEnd[1] < r2.lines.length) {
                    var i2 = r2.lines.get(this._model.selectionEnd[1]);
                    i2 && i2.hasWidth(this._model.selectionEnd[0]) === 0 && this._model.selectionEnd[0]++;
                  }
                  t4 && t4[0] === this._model.selectionEnd[0] && t4[1] === this._model.selectionEnd[1] || this.refresh(true);
                } else
                  this.refresh(true);
              }
            }, t3.prototype._dragScroll = function() {
              if (this._model.selectionEnd && this._model.selectionStart && this._dragScrollAmount) {
                this._onRequestScrollLines.fire({amount: this._dragScrollAmount, suppressScrollEvent: false});
                var e4 = this._bufferService.buffer;
                this._dragScrollAmount > 0 ? (this._activeSelectionMode !== 3 && (this._model.selectionEnd[0] = this._bufferService.cols), this._model.selectionEnd[1] = Math.min(e4.ydisp + this._bufferService.rows, e4.lines.length - 1)) : (this._activeSelectionMode !== 3 && (this._model.selectionEnd[0] = 0), this._model.selectionEnd[1] = e4.ydisp), this.refresh();
              }
            }, t3.prototype._onMouseUp = function(e4) {
              var t4 = e4.timeStamp - this._mouseDownTimeStamp;
              if (this._removeMouseDownListeners(), this.selectionText.length <= 1 && t4 < 500 && e4.altKey && this._optionsService.getOption("altClickMovesCursor")) {
                if (this._bufferService.buffer.ybase === this._bufferService.buffer.ydisp) {
                  var r2 = this._mouseService.getCoords(e4, this._element, this._bufferService.cols, this._bufferService.rows, false);
                  if (r2 && r2[0] !== void 0 && r2[1] !== void 0) {
                    var i2 = d.moveToCellSequence(r2[0] - 1, r2[1] - 1, this._bufferService, this._coreService.decPrivateModes.applicationCursorKeys);
                    this._coreService.triggerDataEvent(i2, true);
                  }
                }
              } else
                this._fireEventIfSelectionChanged();
            }, t3.prototype._fireEventIfSelectionChanged = function() {
              var e4 = this._model.finalSelectionStart, t4 = this._model.finalSelectionEnd, r2 = !(!e4 || !t4 || e4[0] === t4[0] && e4[1] === t4[1]);
              r2 ? e4 && t4 && (this._oldSelectionStart && this._oldSelectionEnd && e4[0] === this._oldSelectionStart[0] && e4[1] === this._oldSelectionStart[1] && t4[0] === this._oldSelectionEnd[0] && t4[1] === this._oldSelectionEnd[1] || this._fireOnSelectionChange(e4, t4, r2)) : this._oldHasSelection && this._fireOnSelectionChange(e4, t4, r2);
            }, t3.prototype._fireOnSelectionChange = function(e4, t4, r2) {
              this._oldSelectionStart = e4, this._oldSelectionEnd = t4, this._oldHasSelection = r2, this._onSelectionChange.fire();
            }, t3.prototype._onBufferActivate = function(e4) {
              var t4 = this;
              this.clearSelection(), this._trimListener.dispose(), this._trimListener = e4.activeBuffer.lines.onTrim(function(e5) {
                return t4._onTrim(e5);
              });
            }, t3.prototype._convertViewportColToCharacterIndex = function(e4, t4) {
              for (var r2 = t4[0], i2 = 0; t4[0] >= i2; i2++) {
                var n2 = e4.loadCell(i2, this._workCell).getChars().length;
                this._workCell.getWidth() === 0 ? r2-- : n2 > 1 && t4[0] !== i2 && (r2 += n2 - 1);
              }
              return r2;
            }, t3.prototype.setSelection = function(e4, t4, r2) {
              this._model.clearSelection(), this._removeMouseDownListeners(), this._model.selectionStart = [e4, t4], this._model.selectionStartLength = r2, this.refresh();
            }, t3.prototype.rightClickSelect = function(e4) {
              this._isClickInSelection(e4) || (this._selectWordAtCursor(e4), this._fireEventIfSelectionChanged());
            }, t3.prototype._getWordAt = function(e4, t4, r2, i2) {
              if (r2 === void 0 && (r2 = true), i2 === void 0 && (i2 = true), !(e4[0] >= this._bufferService.cols)) {
                var n2 = this._bufferService.buffer, o2 = n2.lines.get(e4[1]);
                if (o2) {
                  var s2 = n2.translateBufferLineToString(e4[1], false), a2 = this._convertViewportColToCharacterIndex(o2, e4), c2 = a2, l2 = e4[0] - a2, h2 = 0, u2 = 0, f2 = 0, _2 = 0;
                  if (s2.charAt(a2) === " ") {
                    for (; a2 > 0 && s2.charAt(a2 - 1) === " "; )
                      a2--;
                    for (; c2 < s2.length && s2.charAt(c2 + 1) === " "; )
                      c2++;
                  } else {
                    var d2 = e4[0], p2 = e4[0];
                    o2.getWidth(d2) === 0 && (h2++, d2--), o2.getWidth(p2) === 2 && (u2++, p2++);
                    var v2 = o2.getString(p2).length;
                    for (v2 > 1 && (_2 += v2 - 1, c2 += v2 - 1); d2 > 0 && a2 > 0 && !this._isCharWordSeparator(o2.loadCell(d2 - 1, this._workCell)); ) {
                      o2.loadCell(d2 - 1, this._workCell);
                      var g2 = this._workCell.getChars().length;
                      this._workCell.getWidth() === 0 ? (h2++, d2--) : g2 > 1 && (f2 += g2 - 1, a2 -= g2 - 1), a2--, d2--;
                    }
                    for (; p2 < o2.length && c2 + 1 < s2.length && !this._isCharWordSeparator(o2.loadCell(p2 + 1, this._workCell)); ) {
                      o2.loadCell(p2 + 1, this._workCell);
                      var y2 = this._workCell.getChars().length;
                      this._workCell.getWidth() === 2 ? (u2++, p2++) : y2 > 1 && (_2 += y2 - 1, c2 += y2 - 1), c2++, p2++;
                    }
                  }
                  c2++;
                  var b = a2 + l2 - h2 + f2, S = Math.min(this._bufferService.cols, c2 - a2 + h2 + u2 - f2 - _2);
                  if (t4 || s2.slice(a2, c2).trim() !== "") {
                    if (r2 && b === 0 && o2.getCodePoint(0) !== 32) {
                      var m = n2.lines.get(e4[1] - 1);
                      if (m && o2.isWrapped && m.getCodePoint(this._bufferService.cols - 1) !== 32) {
                        var C = this._getWordAt([this._bufferService.cols - 1, e4[1] - 1], false, true, false);
                        if (C) {
                          var w = this._bufferService.cols - C.start;
                          b -= w, S += w;
                        }
                      }
                    }
                    if (i2 && b + S === this._bufferService.cols && o2.getCodePoint(this._bufferService.cols - 1) !== 32) {
                      var E = n2.lines.get(e4[1] + 1);
                      if (E && E.isWrapped && E.getCodePoint(0) !== 32) {
                        var L = this._getWordAt([0, e4[1] + 1], false, false, true);
                        L && (S += L.length);
                      }
                    }
                    return {start: b, length: S};
                  }
                }
              }
            }, t3.prototype._selectWordAt = function(e4, t4) {
              var r2 = this._getWordAt(e4, t4);
              if (r2) {
                for (; r2.start < 0; )
                  r2.start += this._bufferService.cols, e4[1]--;
                this._model.selectionStart = [r2.start, e4[1]], this._model.selectionStartLength = r2.length;
              }
            }, t3.prototype._selectToWordAt = function(e4) {
              var t4 = this._getWordAt(e4, true);
              if (t4) {
                for (var r2 = e4[1]; t4.start < 0; )
                  t4.start += this._bufferService.cols, r2--;
                if (!this._model.areSelectionValuesReversed())
                  for (; t4.start + t4.length > this._bufferService.cols; )
                    t4.length -= this._bufferService.cols, r2++;
                this._model.selectionEnd = [this._model.areSelectionValuesReversed() ? t4.start : t4.start + t4.length, r2];
              }
            }, t3.prototype._isCharWordSeparator = function(e4) {
              return e4.getWidth() !== 0 && this._optionsService.options.wordSeparator.indexOf(e4.getChars()) >= 0;
            }, t3.prototype._selectLineAt = function(e4) {
              var t4 = this._bufferService.buffer.getWrappedRangeForLine(e4);
              this._model.selectionStart = [0, t4.first], this._model.selectionEnd = [this._bufferService.cols, t4.last], this._model.selectionStartLength = 0;
            }, o([s(2, f.IBufferService), s(3, f.ICoreService), s(4, u.IMouseService), s(5, f.IOptionsService), s(6, u.IRenderService)], t3);
          }(p.Disposable);
          t2.SelectionService = y;
        }, 4725: (e2, t2, r) => {
          Object.defineProperty(t2, "__esModule", {value: true}), t2.ISoundService = t2.ISelectionService = t2.IRenderService = t2.IMouseService = t2.ICoreBrowserService = t2.ICharSizeService = void 0;
          var i = r(8343);
          t2.ICharSizeService = i.createDecorator("CharSizeService"), t2.ICoreBrowserService = i.createDecorator("CoreBrowserService"), t2.IMouseService = i.createDecorator("MouseService"), t2.IRenderService = i.createDecorator("RenderService"), t2.ISelectionService = i.createDecorator("SelectionService"), t2.ISoundService = i.createDecorator("SoundService");
        }, 357: function(e2, t2, r) {
          var i = this && this.__decorate || function(e3, t3, r2, i2) {
            var n2, o2 = arguments.length, s2 = o2 < 3 ? t3 : i2 === null ? i2 = Object.getOwnPropertyDescriptor(t3, r2) : i2;
            if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
              s2 = Reflect.decorate(e3, t3, r2, i2);
            else
              for (var a = e3.length - 1; a >= 0; a--)
                (n2 = e3[a]) && (s2 = (o2 < 3 ? n2(s2) : o2 > 3 ? n2(t3, r2, s2) : n2(t3, r2)) || s2);
            return o2 > 3 && s2 && Object.defineProperty(t3, r2, s2), s2;
          }, n = this && this.__param || function(e3, t3) {
            return function(r2, i2) {
              t3(r2, i2, e3);
            };
          };
          Object.defineProperty(t2, "__esModule", {value: true}), t2.SoundService = void 0;
          var o = r(2585), s = function() {
            function e3(e4) {
              this._optionsService = e4;
            }
            return Object.defineProperty(e3, "audioContext", {get: function() {
              if (!e3._audioContext) {
                var t3 = window.AudioContext || window.webkitAudioContext;
                if (!t3)
                  return console.warn("Web Audio API is not supported by this browser. Consider upgrading to the latest version"), null;
                e3._audioContext = new t3();
              }
              return e3._audioContext;
            }, enumerable: false, configurable: true}), e3.prototype.playBellSound = function() {
              var t3 = e3.audioContext;
              if (t3) {
                var r2 = t3.createBufferSource();
                t3.decodeAudioData(this._base64ToArrayBuffer(this._removeMimeType(this._optionsService.options.bellSound)), function(e4) {
                  r2.buffer = e4, r2.connect(t3.destination), r2.start(0);
                });
              }
            }, e3.prototype._base64ToArrayBuffer = function(e4) {
              for (var t3 = window.atob(e4), r2 = t3.length, i2 = new Uint8Array(r2), n2 = 0; n2 < r2; n2++)
                i2[n2] = t3.charCodeAt(n2);
              return i2.buffer;
            }, e3.prototype._removeMimeType = function(e4) {
              return e4.split(",")[1];
            }, e3 = i([n(0, o.IOptionsService)], e3);
          }();
          t2.SoundService = s;
        }, 6349: (e2, t2, r) => {
          Object.defineProperty(t2, "__esModule", {value: true}), t2.CircularList = void 0;
          var i = r(8460), n = function() {
            function e3(e4) {
              this._maxLength = e4, this.onDeleteEmitter = new i.EventEmitter(), this.onInsertEmitter = new i.EventEmitter(), this.onTrimEmitter = new i.EventEmitter(), this._array = new Array(this._maxLength), this._startIndex = 0, this._length = 0;
            }
            return Object.defineProperty(e3.prototype, "onDelete", {get: function() {
              return this.onDeleteEmitter.event;
            }, enumerable: false, configurable: true}), Object.defineProperty(e3.prototype, "onInsert", {get: function() {
              return this.onInsertEmitter.event;
            }, enumerable: false, configurable: true}), Object.defineProperty(e3.prototype, "onTrim", {get: function() {
              return this.onTrimEmitter.event;
            }, enumerable: false, configurable: true}), Object.defineProperty(e3.prototype, "maxLength", {get: function() {
              return this._maxLength;
            }, set: function(e4) {
              if (this._maxLength !== e4) {
                for (var t3 = new Array(e4), r2 = 0; r2 < Math.min(e4, this.length); r2++)
                  t3[r2] = this._array[this._getCyclicIndex(r2)];
                this._array = t3, this._maxLength = e4, this._startIndex = 0;
              }
            }, enumerable: false, configurable: true}), Object.defineProperty(e3.prototype, "length", {get: function() {
              return this._length;
            }, set: function(e4) {
              if (e4 > this._length)
                for (var t3 = this._length; t3 < e4; t3++)
                  this._array[t3] = void 0;
              this._length = e4;
            }, enumerable: false, configurable: true}), e3.prototype.get = function(e4) {
              return this._array[this._getCyclicIndex(e4)];
            }, e3.prototype.set = function(e4, t3) {
              this._array[this._getCyclicIndex(e4)] = t3;
            }, e3.prototype.push = function(e4) {
              this._array[this._getCyclicIndex(this._length)] = e4, this._length === this._maxLength ? (this._startIndex = ++this._startIndex % this._maxLength, this.onTrimEmitter.fire(1)) : this._length++;
            }, e3.prototype.recycle = function() {
              if (this._length !== this._maxLength)
                throw new Error("Can only recycle when the buffer is full");
              return this._startIndex = ++this._startIndex % this._maxLength, this.onTrimEmitter.fire(1), this._array[this._getCyclicIndex(this._length - 1)];
            }, Object.defineProperty(e3.prototype, "isFull", {get: function() {
              return this._length === this._maxLength;
            }, enumerable: false, configurable: true}), e3.prototype.pop = function() {
              return this._array[this._getCyclicIndex(this._length-- - 1)];
            }, e3.prototype.splice = function(e4, t3) {
              for (var r2 = [], i2 = 2; i2 < arguments.length; i2++)
                r2[i2 - 2] = arguments[i2];
              if (t3) {
                for (var n2 = e4; n2 < this._length - t3; n2++)
                  this._array[this._getCyclicIndex(n2)] = this._array[this._getCyclicIndex(n2 + t3)];
                this._length -= t3, this.onDeleteEmitter.fire({index: e4, amount: t3});
              }
              for (n2 = this._length - 1; n2 >= e4; n2--)
                this._array[this._getCyclicIndex(n2 + r2.length)] = this._array[this._getCyclicIndex(n2)];
              for (n2 = 0; n2 < r2.length; n2++)
                this._array[this._getCyclicIndex(e4 + n2)] = r2[n2];
              if (r2.length && this.onInsertEmitter.fire({index: e4, amount: r2.length}), this._length + r2.length > this._maxLength) {
                var o = this._length + r2.length - this._maxLength;
                this._startIndex += o, this._length = this._maxLength, this.onTrimEmitter.fire(o);
              } else
                this._length += r2.length;
            }, e3.prototype.trimStart = function(e4) {
              e4 > this._length && (e4 = this._length), this._startIndex += e4, this._length -= e4, this.onTrimEmitter.fire(e4);
            }, e3.prototype.shiftElements = function(e4, t3, r2) {
              if (!(t3 <= 0)) {
                if (e4 < 0 || e4 >= this._length)
                  throw new Error("start argument out of range");
                if (e4 + r2 < 0)
                  throw new Error("Cannot shift elements in list beyond index 0");
                if (r2 > 0) {
                  for (var i2 = t3 - 1; i2 >= 0; i2--)
                    this.set(e4 + i2 + r2, this.get(e4 + i2));
                  var n2 = e4 + t3 + r2 - this._length;
                  if (n2 > 0)
                    for (this._length += n2; this._length > this._maxLength; )
                      this._length--, this._startIndex++, this.onTrimEmitter.fire(1);
                } else
                  for (i2 = 0; i2 < t3; i2++)
                    this.set(e4 + i2 + r2, this.get(e4 + i2));
              }
            }, e3.prototype._getCyclicIndex = function(e4) {
              return (this._startIndex + e4) % this._maxLength;
            }, e3;
          }();
          t2.CircularList = n;
        }, 1439: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", {value: true}), t2.clone = void 0, t2.clone = function e3(t3, r) {
            if (r === void 0 && (r = 5), typeof t3 != "object")
              return t3;
            var i = Array.isArray(t3) ? [] : {};
            for (var n in t3)
              i[n] = r <= 1 ? t3[n] : t3[n] ? e3(t3[n], r - 1) : t3[n];
            return i;
          };
        }, 8969: function(e2, t2, r) {
          var i, n = this && this.__extends || (i = function(e3, t3) {
            return (i = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(e4, t4) {
              e4.__proto__ = t4;
            } || function(e4, t4) {
              for (var r2 in t4)
                Object.prototype.hasOwnProperty.call(t4, r2) && (e4[r2] = t4[r2]);
            })(e3, t3);
          }, function(e3, t3) {
            function r2() {
              this.constructor = e3;
            }
            i(e3, t3), e3.prototype = t3 === null ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
          });
          Object.defineProperty(t2, "__esModule", {value: true}), t2.CoreTerminal = void 0;
          var o = r(844), s = r(2585), a = r(4348), c = r(7866), l = r(744), h = r(7302), u = r(6975), f = r(8460), _ = r(1753), d = r(3730), p = r(1480), v = r(7994), g = r(9282), y = r(5435), b = r(5981), S = function(e3) {
            function t3(t4) {
              var r2 = e3.call(this) || this;
              return r2._onBinary = new f.EventEmitter(), r2._onData = new f.EventEmitter(), r2._onLineFeed = new f.EventEmitter(), r2._onResize = new f.EventEmitter(), r2._onScroll = new f.EventEmitter(), r2._instantiationService = new a.InstantiationService(), r2.optionsService = new h.OptionsService(t4), r2._instantiationService.setService(s.IOptionsService, r2.optionsService), r2._bufferService = r2.register(r2._instantiationService.createInstance(l.BufferService)), r2._instantiationService.setService(s.IBufferService, r2._bufferService), r2._logService = r2._instantiationService.createInstance(c.LogService), r2._instantiationService.setService(s.ILogService, r2._logService), r2._coreService = r2.register(r2._instantiationService.createInstance(u.CoreService, function() {
                return r2.scrollToBottom();
              })), r2._instantiationService.setService(s.ICoreService, r2._coreService), r2._coreMouseService = r2._instantiationService.createInstance(_.CoreMouseService), r2._instantiationService.setService(s.ICoreMouseService, r2._coreMouseService), r2._dirtyRowService = r2._instantiationService.createInstance(d.DirtyRowService), r2._instantiationService.setService(s.IDirtyRowService, r2._dirtyRowService), r2.unicodeService = r2._instantiationService.createInstance(p.UnicodeService), r2._instantiationService.setService(s.IUnicodeService, r2.unicodeService), r2._charsetService = r2._instantiationService.createInstance(v.CharsetService), r2._instantiationService.setService(s.ICharsetService, r2._charsetService), r2._inputHandler = new y.InputHandler(r2._bufferService, r2._charsetService, r2._coreService, r2._dirtyRowService, r2._logService, r2.optionsService, r2._coreMouseService, r2.unicodeService), r2.register(f.forwardEvent(r2._inputHandler.onLineFeed, r2._onLineFeed)), r2.register(r2._inputHandler), r2.register(f.forwardEvent(r2._bufferService.onResize, r2._onResize)), r2.register(f.forwardEvent(r2._coreService.onData, r2._onData)), r2.register(f.forwardEvent(r2._coreService.onBinary, r2._onBinary)), r2.register(r2.optionsService.onOptionChange(function(e4) {
                return r2._updateOptions(e4);
              })), r2._writeBuffer = new b.WriteBuffer(function(e4) {
                return r2._inputHandler.parse(e4);
              }), r2;
            }
            return n(t3, e3), Object.defineProperty(t3.prototype, "onBinary", {get: function() {
              return this._onBinary.event;
            }, enumerable: false, configurable: true}), Object.defineProperty(t3.prototype, "onData", {get: function() {
              return this._onData.event;
            }, enumerable: false, configurable: true}), Object.defineProperty(t3.prototype, "onLineFeed", {get: function() {
              return this._onLineFeed.event;
            }, enumerable: false, configurable: true}), Object.defineProperty(t3.prototype, "onResize", {get: function() {
              return this._onResize.event;
            }, enumerable: false, configurable: true}), Object.defineProperty(t3.prototype, "onScroll", {get: function() {
              return this._onScroll.event;
            }, enumerable: false, configurable: true}), Object.defineProperty(t3.prototype, "cols", {get: function() {
              return this._bufferService.cols;
            }, enumerable: false, configurable: true}), Object.defineProperty(t3.prototype, "rows", {get: function() {
              return this._bufferService.rows;
            }, enumerable: false, configurable: true}), Object.defineProperty(t3.prototype, "buffers", {get: function() {
              return this._bufferService.buffers;
            }, enumerable: false, configurable: true}), t3.prototype.dispose = function() {
              var t4;
              this._isDisposed || (e3.prototype.dispose.call(this), (t4 = this._windowsMode) === null || t4 === void 0 || t4.dispose(), this._windowsMode = void 0);
            }, t3.prototype.write = function(e4, t4) {
              this._writeBuffer.write(e4, t4);
            }, t3.prototype.writeSync = function(e4) {
              this._writeBuffer.writeSync(e4);
            }, t3.prototype.resize = function(e4, t4) {
              isNaN(e4) || isNaN(t4) || (e4 = Math.max(e4, l.MINIMUM_COLS), t4 = Math.max(t4, l.MINIMUM_ROWS), this._bufferService.resize(e4, t4));
            }, t3.prototype.scroll = function(e4, t4) {
              t4 === void 0 && (t4 = false);
              var r2, i2 = this._bufferService.buffer;
              (r2 = this._cachedBlankLine) && r2.length === this.cols && r2.getFg(0) === e4.fg && r2.getBg(0) === e4.bg || (r2 = i2.getBlankLine(e4, t4), this._cachedBlankLine = r2), r2.isWrapped = t4;
              var n2 = i2.ybase + i2.scrollTop, o2 = i2.ybase + i2.scrollBottom;
              if (i2.scrollTop === 0) {
                var s2 = i2.lines.isFull;
                o2 === i2.lines.length - 1 ? s2 ? i2.lines.recycle().copyFrom(r2) : i2.lines.push(r2.clone()) : i2.lines.splice(o2 + 1, 0, r2.clone()), s2 ? this._bufferService.isUserScrolling && (i2.ydisp = Math.max(i2.ydisp - 1, 0)) : (i2.ybase++, this._bufferService.isUserScrolling || i2.ydisp++);
              } else {
                var a2 = o2 - n2 + 1;
                i2.lines.shiftElements(n2 + 1, a2 - 1, -1), i2.lines.set(o2, r2.clone());
              }
              this._bufferService.isUserScrolling || (i2.ydisp = i2.ybase), this._dirtyRowService.markRangeDirty(i2.scrollTop, i2.scrollBottom), this._onScroll.fire(i2.ydisp);
            }, t3.prototype.scrollLines = function(e4, t4) {
              var r2 = this._bufferService.buffer;
              if (e4 < 0) {
                if (r2.ydisp === 0)
                  return;
                this._bufferService.isUserScrolling = true;
              } else
                e4 + r2.ydisp >= r2.ybase && (this._bufferService.isUserScrolling = false);
              var i2 = r2.ydisp;
              r2.ydisp = Math.max(Math.min(r2.ydisp + e4, r2.ybase), 0), i2 !== r2.ydisp && (t4 || this._onScroll.fire(r2.ydisp));
            }, t3.prototype.scrollPages = function(e4) {
              this.scrollLines(e4 * (this.rows - 1));
            }, t3.prototype.scrollToTop = function() {
              this.scrollLines(-this._bufferService.buffer.ydisp);
            }, t3.prototype.scrollToBottom = function() {
              this.scrollLines(this._bufferService.buffer.ybase - this._bufferService.buffer.ydisp);
            }, t3.prototype.scrollToLine = function(e4) {
              var t4 = e4 - this._bufferService.buffer.ydisp;
              t4 !== 0 && this.scrollLines(t4);
            }, t3.prototype.addEscHandler = function(e4, t4) {
              return this._inputHandler.addEscHandler(e4, t4);
            }, t3.prototype.addDcsHandler = function(e4, t4) {
              return this._inputHandler.addDcsHandler(e4, t4);
            }, t3.prototype.addCsiHandler = function(e4, t4) {
              return this._inputHandler.addCsiHandler(e4, t4);
            }, t3.prototype.addOscHandler = function(e4, t4) {
              return this._inputHandler.addOscHandler(e4, t4);
            }, t3.prototype._setup = function() {
              this.optionsService.options.windowsMode && this._enableWindowsMode();
            }, t3.prototype.reset = function() {
              this._inputHandler.reset(), this._bufferService.reset(), this._charsetService.reset(), this._coreService.reset(), this._coreMouseService.reset();
            }, t3.prototype._updateOptions = function(e4) {
              var t4;
              switch (e4) {
                case "scrollback":
                  this.buffers.resize(this.cols, this.rows);
                  break;
                case "windowsMode":
                  this.optionsService.options.windowsMode ? this._enableWindowsMode() : ((t4 = this._windowsMode) === null || t4 === void 0 || t4.dispose(), this._windowsMode = void 0);
              }
            }, t3.prototype._enableWindowsMode = function() {
              var e4 = this;
              if (!this._windowsMode) {
                var t4 = [];
                t4.push(this.onLineFeed(g.updateWindowsModeWrappedState.bind(null, this._bufferService))), t4.push(this.addCsiHandler({final: "H"}, function() {
                  return g.updateWindowsModeWrappedState(e4._bufferService), false;
                })), this._windowsMode = {dispose: function() {
                  for (var e5 = 0, r2 = t4; e5 < r2.length; e5++)
                    r2[e5].dispose();
                }};
              }
            }, t3;
          }(o.Disposable);
          t2.CoreTerminal = S;
        }, 8460: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", {value: true}), t2.forwardEvent = t2.EventEmitter = void 0;
          var r = function() {
            function e3() {
              this._listeners = [], this._disposed = false;
            }
            return Object.defineProperty(e3.prototype, "event", {get: function() {
              var e4 = this;
              return this._event || (this._event = function(t3) {
                return e4._listeners.push(t3), {dispose: function() {
                  if (!e4._disposed) {
                    for (var r2 = 0; r2 < e4._listeners.length; r2++)
                      if (e4._listeners[r2] === t3)
                        return void e4._listeners.splice(r2, 1);
                  }
                }};
              }), this._event;
            }, enumerable: false, configurable: true}), e3.prototype.fire = function(e4, t3) {
              for (var r2 = [], i = 0; i < this._listeners.length; i++)
                r2.push(this._listeners[i]);
              for (i = 0; i < r2.length; i++)
                r2[i].call(void 0, e4, t3);
            }, e3.prototype.dispose = function() {
              this._listeners && (this._listeners.length = 0), this._disposed = true;
            }, e3;
          }();
          t2.EventEmitter = r, t2.forwardEvent = function(e3, t3) {
            return e3(function(e4) {
              return t3.fire(e4);
            });
          };
        }, 5435: function(e2, t2, r) {
          var i, n = this && this.__extends || (i = function(e3, t3) {
            return (i = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(e4, t4) {
              e4.__proto__ = t4;
            } || function(e4, t4) {
              for (var r2 in t4)
                Object.prototype.hasOwnProperty.call(t4, r2) && (e4[r2] = t4[r2]);
            })(e3, t3);
          }, function(e3, t3) {
            function r2() {
              this.constructor = e3;
            }
            i(e3, t3), e3.prototype = t3 === null ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
          });
          Object.defineProperty(t2, "__esModule", {value: true}), t2.InputHandler = t2.WindowsOptionsReportType = void 0;
          var o, s = r(2584), a = r(7116), c = r(2015), l = r(844), h = r(8273), u = r(482), f = r(8437), _ = r(8460), d = r(643), p = r(511), v = r(3734), g = r(6242), y = r(6351), b = {"(": 0, ")": 1, "*": 2, "+": 3, "-": 1, ".": 2}, S = 131072;
          function m(e3, t3) {
            if (e3 > 24)
              return t3.setWinLines || false;
            switch (e3) {
              case 1:
                return !!t3.restoreWin;
              case 2:
                return !!t3.minimizeWin;
              case 3:
                return !!t3.setWinPosition;
              case 4:
                return !!t3.setWinSizePixels;
              case 5:
                return !!t3.raiseWin;
              case 6:
                return !!t3.lowerWin;
              case 7:
                return !!t3.refreshWin;
              case 8:
                return !!t3.setWinSizeChars;
              case 9:
                return !!t3.maximizeWin;
              case 10:
                return !!t3.fullscreenWin;
              case 11:
                return !!t3.getWinState;
              case 13:
                return !!t3.getWinPosition;
              case 14:
                return !!t3.getWinSizePixels;
              case 15:
                return !!t3.getScreenSizePixels;
              case 16:
                return !!t3.getCellSizePixels;
              case 18:
                return !!t3.getWinSizeChars;
              case 19:
                return !!t3.getScreenSizeChars;
              case 20:
                return !!t3.getIconTitle;
              case 21:
                return !!t3.getWinTitle;
              case 22:
                return !!t3.pushTitle;
              case 23:
                return !!t3.popTitle;
              case 24:
                return !!t3.setWinLines;
            }
            return false;
          }
          !function(e3) {
            e3[e3.GET_WIN_SIZE_PIXELS = 0] = "GET_WIN_SIZE_PIXELS", e3[e3.GET_CELL_SIZE_PIXELS = 1] = "GET_CELL_SIZE_PIXELS";
          }(o = t2.WindowsOptionsReportType || (t2.WindowsOptionsReportType = {}));
          var C = function() {
            function e3(e4, t3, r2, i2) {
              this._bufferService = e4, this._coreService = t3, this._logService = r2, this._optionsService = i2, this._data = new Uint32Array(0);
            }
            return e3.prototype.hook = function(e4) {
              this._data = new Uint32Array(0);
            }, e3.prototype.put = function(e4, t3, r2) {
              this._data = h.concat(this._data, e4.subarray(t3, r2));
            }, e3.prototype.unhook = function(e4) {
              if (!e4)
                return this._data = new Uint32Array(0), true;
              var t3 = u.utf32ToString(this._data);
              switch (this._data = new Uint32Array(0), t3) {
                case '"q':
                  this._coreService.triggerDataEvent(s.C0.ESC + 'P1$r0"q' + s.C0.ESC + "\\");
                  break;
                case '"p':
                  this._coreService.triggerDataEvent(s.C0.ESC + 'P1$r61;1"p' + s.C0.ESC + "\\");
                  break;
                case "r":
                  var r2 = this._bufferService.buffer.scrollTop + 1 + ";" + (this._bufferService.buffer.scrollBottom + 1) + "r";
                  this._coreService.triggerDataEvent(s.C0.ESC + "P1$r" + r2 + s.C0.ESC + "\\");
                  break;
                case "m":
                  this._coreService.triggerDataEvent(s.C0.ESC + "P1$r0m" + s.C0.ESC + "\\");
                  break;
                case " q":
                  var i2 = {block: 2, underline: 4, bar: 6}[this._optionsService.options.cursorStyle];
                  i2 -= this._optionsService.options.cursorBlink ? 1 : 0, this._coreService.triggerDataEvent(s.C0.ESC + "P1$r" + i2 + " q" + s.C0.ESC + "\\");
                  break;
                default:
                  this._logService.debug("Unknown DCS $q %s", t3), this._coreService.triggerDataEvent(s.C0.ESC + "P0$r" + s.C0.ESC + "\\");
              }
              return true;
            }, e3;
          }(), w = function(e3) {
            function t3(t4, r2, i2, n2, o2, l2, h2, d2, v2) {
              v2 === void 0 && (v2 = new c.EscapeSequenceParser());
              var y2 = e3.call(this) || this;
              y2._bufferService = t4, y2._charsetService = r2, y2._coreService = i2, y2._dirtyRowService = n2, y2._logService = o2, y2._optionsService = l2, y2._coreMouseService = h2, y2._unicodeService = d2, y2._parser = v2, y2._parseBuffer = new Uint32Array(4096), y2._stringDecoder = new u.StringToUtf32(), y2._utf8Decoder = new u.Utf8ToUtf32(), y2._workCell = new p.CellData(), y2._windowTitle = "", y2._iconName = "", y2._windowTitleStack = [], y2._iconNameStack = [], y2._curAttrData = f.DEFAULT_ATTR_DATA.clone(), y2._eraseAttrDataInternal = f.DEFAULT_ATTR_DATA.clone(), y2._onRequestBell = new _.EventEmitter(), y2._onRequestRefreshRows = new _.EventEmitter(), y2._onRequestReset = new _.EventEmitter(), y2._onRequestScroll = new _.EventEmitter(), y2._onRequestSyncScrollBar = new _.EventEmitter(), y2._onRequestWindowsOptionsReport = new _.EventEmitter(), y2._onA11yChar = new _.EventEmitter(), y2._onA11yTab = new _.EventEmitter(), y2._onCursorMove = new _.EventEmitter(), y2._onLineFeed = new _.EventEmitter(), y2._onScroll = new _.EventEmitter(), y2._onTitleChange = new _.EventEmitter(), y2._onAnsiColorChange = new _.EventEmitter(), y2.register(y2._parser), y2._parser.setCsiHandlerFallback(function(e4, t5) {
                y2._logService.debug("Unknown CSI code: ", {identifier: y2._parser.identToString(e4), params: t5.toArray()});
              }), y2._parser.setEscHandlerFallback(function(e4) {
                y2._logService.debug("Unknown ESC code: ", {identifier: y2._parser.identToString(e4)});
              }), y2._parser.setExecuteHandlerFallback(function(e4) {
                y2._logService.debug("Unknown EXECUTE code: ", {code: e4});
              }), y2._parser.setOscHandlerFallback(function(e4, t5, r3) {
                y2._logService.debug("Unknown OSC code: ", {identifier: e4, action: t5, data: r3});
              }), y2._parser.setDcsHandlerFallback(function(e4, t5, r3) {
                t5 === "HOOK" && (r3 = r3.toArray()), y2._logService.debug("Unknown DCS code: ", {identifier: y2._parser.identToString(e4), action: t5, payload: r3});
              }), y2._parser.setPrintHandler(function(e4, t5, r3) {
                return y2.print(e4, t5, r3);
              }), y2._parser.registerCsiHandler({final: "@"}, function(e4) {
                return y2.insertChars(e4);
              }), y2._parser.registerCsiHandler({intermediates: " ", final: "@"}, function(e4) {
                return y2.scrollLeft(e4);
              }), y2._parser.registerCsiHandler({final: "A"}, function(e4) {
                return y2.cursorUp(e4);
              }), y2._parser.registerCsiHandler({intermediates: " ", final: "A"}, function(e4) {
                return y2.scrollRight(e4);
              }), y2._parser.registerCsiHandler({final: "B"}, function(e4) {
                return y2.cursorDown(e4);
              }), y2._parser.registerCsiHandler({final: "C"}, function(e4) {
                return y2.cursorForward(e4);
              }), y2._parser.registerCsiHandler({final: "D"}, function(e4) {
                return y2.cursorBackward(e4);
              }), y2._parser.registerCsiHandler({final: "E"}, function(e4) {
                return y2.cursorNextLine(e4);
              }), y2._parser.registerCsiHandler({final: "F"}, function(e4) {
                return y2.cursorPrecedingLine(e4);
              }), y2._parser.registerCsiHandler({final: "G"}, function(e4) {
                return y2.cursorCharAbsolute(e4);
              }), y2._parser.registerCsiHandler({final: "H"}, function(e4) {
                return y2.cursorPosition(e4);
              }), y2._parser.registerCsiHandler({final: "I"}, function(e4) {
                return y2.cursorForwardTab(e4);
              }), y2._parser.registerCsiHandler({final: "J"}, function(e4) {
                return y2.eraseInDisplay(e4);
              }), y2._parser.registerCsiHandler({prefix: "?", final: "J"}, function(e4) {
                return y2.eraseInDisplay(e4);
              }), y2._parser.registerCsiHandler({final: "K"}, function(e4) {
                return y2.eraseInLine(e4);
              }), y2._parser.registerCsiHandler({prefix: "?", final: "K"}, function(e4) {
                return y2.eraseInLine(e4);
              }), y2._parser.registerCsiHandler({final: "L"}, function(e4) {
                return y2.insertLines(e4);
              }), y2._parser.registerCsiHandler({final: "M"}, function(e4) {
                return y2.deleteLines(e4);
              }), y2._parser.registerCsiHandler({final: "P"}, function(e4) {
                return y2.deleteChars(e4);
              }), y2._parser.registerCsiHandler({final: "S"}, function(e4) {
                return y2.scrollUp(e4);
              }), y2._parser.registerCsiHandler({final: "T"}, function(e4) {
                return y2.scrollDown(e4);
              }), y2._parser.registerCsiHandler({final: "X"}, function(e4) {
                return y2.eraseChars(e4);
              }), y2._parser.registerCsiHandler({final: "Z"}, function(e4) {
                return y2.cursorBackwardTab(e4);
              }), y2._parser.registerCsiHandler({final: "`"}, function(e4) {
                return y2.charPosAbsolute(e4);
              }), y2._parser.registerCsiHandler({final: "a"}, function(e4) {
                return y2.hPositionRelative(e4);
              }), y2._parser.registerCsiHandler({final: "b"}, function(e4) {
                return y2.repeatPrecedingCharacter(e4);
              }), y2._parser.registerCsiHandler({final: "c"}, function(e4) {
                return y2.sendDeviceAttributesPrimary(e4);
              }), y2._parser.registerCsiHandler({prefix: ">", final: "c"}, function(e4) {
                return y2.sendDeviceAttributesSecondary(e4);
              }), y2._parser.registerCsiHandler({final: "d"}, function(e4) {
                return y2.linePosAbsolute(e4);
              }), y2._parser.registerCsiHandler({final: "e"}, function(e4) {
                return y2.vPositionRelative(e4);
              }), y2._parser.registerCsiHandler({final: "f"}, function(e4) {
                return y2.hVPosition(e4);
              }), y2._parser.registerCsiHandler({final: "g"}, function(e4) {
                return y2.tabClear(e4);
              }), y2._parser.registerCsiHandler({final: "h"}, function(e4) {
                return y2.setMode(e4);
              }), y2._parser.registerCsiHandler({prefix: "?", final: "h"}, function(e4) {
                return y2.setModePrivate(e4);
              }), y2._parser.registerCsiHandler({final: "l"}, function(e4) {
                return y2.resetMode(e4);
              }), y2._parser.registerCsiHandler({prefix: "?", final: "l"}, function(e4) {
                return y2.resetModePrivate(e4);
              }), y2._parser.registerCsiHandler({final: "m"}, function(e4) {
                return y2.charAttributes(e4);
              }), y2._parser.registerCsiHandler({final: "n"}, function(e4) {
                return y2.deviceStatus(e4);
              }), y2._parser.registerCsiHandler({prefix: "?", final: "n"}, function(e4) {
                return y2.deviceStatusPrivate(e4);
              }), y2._parser.registerCsiHandler({intermediates: "!", final: "p"}, function(e4) {
                return y2.softReset(e4);
              }), y2._parser.registerCsiHandler({intermediates: " ", final: "q"}, function(e4) {
                return y2.setCursorStyle(e4);
              }), y2._parser.registerCsiHandler({final: "r"}, function(e4) {
                return y2.setScrollRegion(e4);
              }), y2._parser.registerCsiHandler({final: "s"}, function(e4) {
                return y2.saveCursor(e4);
              }), y2._parser.registerCsiHandler({final: "t"}, function(e4) {
                return y2.windowOptions(e4);
              }), y2._parser.registerCsiHandler({final: "u"}, function(e4) {
                return y2.restoreCursor(e4);
              }), y2._parser.registerCsiHandler({intermediates: "'", final: "}"}, function(e4) {
                return y2.insertColumns(e4);
              }), y2._parser.registerCsiHandler({intermediates: "'", final: "~"}, function(e4) {
                return y2.deleteColumns(e4);
              }), y2._parser.setExecuteHandler(s.C0.BEL, function() {
                return y2.bell();
              }), y2._parser.setExecuteHandler(s.C0.LF, function() {
                return y2.lineFeed();
              }), y2._parser.setExecuteHandler(s.C0.VT, function() {
                return y2.lineFeed();
              }), y2._parser.setExecuteHandler(s.C0.FF, function() {
                return y2.lineFeed();
              }), y2._parser.setExecuteHandler(s.C0.CR, function() {
                return y2.carriageReturn();
              }), y2._parser.setExecuteHandler(s.C0.BS, function() {
                return y2.backspace();
              }), y2._parser.setExecuteHandler(s.C0.HT, function() {
                return y2.tab();
              }), y2._parser.setExecuteHandler(s.C0.SO, function() {
                return y2.shiftOut();
              }), y2._parser.setExecuteHandler(s.C0.SI, function() {
                return y2.shiftIn();
              }), y2._parser.setExecuteHandler(s.C1.IND, function() {
                return y2.index();
              }), y2._parser.setExecuteHandler(s.C1.NEL, function() {
                return y2.nextLine();
              }), y2._parser.setExecuteHandler(s.C1.HTS, function() {
                return y2.tabSet();
              }), y2._parser.registerOscHandler(0, new g.OscHandler(function(e4) {
                return y2.setTitle(e4), y2.setIconName(e4), true;
              })), y2._parser.registerOscHandler(1, new g.OscHandler(function(e4) {
                return y2.setIconName(e4);
              })), y2._parser.registerOscHandler(2, new g.OscHandler(function(e4) {
                return y2.setTitle(e4);
              })), y2._parser.registerOscHandler(4, new g.OscHandler(function(e4) {
                return y2.setAnsiColor(e4);
              })), y2._parser.registerEscHandler({final: "7"}, function() {
                return y2.saveCursor();
              }), y2._parser.registerEscHandler({final: "8"}, function() {
                return y2.restoreCursor();
              }), y2._parser.registerEscHandler({final: "D"}, function() {
                return y2.index();
              }), y2._parser.registerEscHandler({final: "E"}, function() {
                return y2.nextLine();
              }), y2._parser.registerEscHandler({final: "H"}, function() {
                return y2.tabSet();
              }), y2._parser.registerEscHandler({final: "M"}, function() {
                return y2.reverseIndex();
              }), y2._parser.registerEscHandler({final: "="}, function() {
                return y2.keypadApplicationMode();
              }), y2._parser.registerEscHandler({final: ">"}, function() {
                return y2.keypadNumericMode();
              }), y2._parser.registerEscHandler({final: "c"}, function() {
                return y2.fullReset();
              }), y2._parser.registerEscHandler({final: "n"}, function() {
                return y2.setgLevel(2);
              }), y2._parser.registerEscHandler({final: "o"}, function() {
                return y2.setgLevel(3);
              }), y2._parser.registerEscHandler({final: "|"}, function() {
                return y2.setgLevel(3);
              }), y2._parser.registerEscHandler({final: "}"}, function() {
                return y2.setgLevel(2);
              }), y2._parser.registerEscHandler({final: "~"}, function() {
                return y2.setgLevel(1);
              }), y2._parser.registerEscHandler({intermediates: "%", final: "@"}, function() {
                return y2.selectDefaultCharset();
              }), y2._parser.registerEscHandler({intermediates: "%", final: "G"}, function() {
                return y2.selectDefaultCharset();
              });
              var b2 = function(e4) {
                S2._parser.registerEscHandler({intermediates: "(", final: e4}, function() {
                  return y2.selectCharset("(" + e4);
                }), S2._parser.registerEscHandler({intermediates: ")", final: e4}, function() {
                  return y2.selectCharset(")" + e4);
                }), S2._parser.registerEscHandler({intermediates: "*", final: e4}, function() {
                  return y2.selectCharset("*" + e4);
                }), S2._parser.registerEscHandler({intermediates: "+", final: e4}, function() {
                  return y2.selectCharset("+" + e4);
                }), S2._parser.registerEscHandler({intermediates: "-", final: e4}, function() {
                  return y2.selectCharset("-" + e4);
                }), S2._parser.registerEscHandler({intermediates: ".", final: e4}, function() {
                  return y2.selectCharset("." + e4);
                }), S2._parser.registerEscHandler({intermediates: "/", final: e4}, function() {
                  return y2.selectCharset("/" + e4);
                });
              }, S2 = this;
              for (var m2 in a.CHARSETS)
                b2(m2);
              return y2._parser.registerEscHandler({intermediates: "#", final: "8"}, function() {
                return y2.screenAlignmentPattern();
              }), y2._parser.setErrorHandler(function(e4) {
                return y2._logService.error("Parsing error: ", e4), e4;
              }), y2._parser.registerDcsHandler({intermediates: "$", final: "q"}, new C(y2._bufferService, y2._coreService, y2._logService, y2._optionsService)), y2;
            }
            return n(t3, e3), Object.defineProperty(t3.prototype, "onRequestBell", {get: function() {
              return this._onRequestBell.event;
            }, enumerable: false, configurable: true}), Object.defineProperty(t3.prototype, "onRequestRefreshRows", {get: function() {
              return this._onRequestRefreshRows.event;
            }, enumerable: false, configurable: true}), Object.defineProperty(t3.prototype, "onRequestReset", {get: function() {
              return this._onRequestReset.event;
            }, enumerable: false, configurable: true}), Object.defineProperty(t3.prototype, "onRequestScroll", {get: function() {
              return this._onRequestScroll.event;
            }, enumerable: false, configurable: true}), Object.defineProperty(t3.prototype, "onRequestSyncScrollBar", {get: function() {
              return this._onRequestSyncScrollBar.event;
            }, enumerable: false, configurable: true}), Object.defineProperty(t3.prototype, "onRequestWindowsOptionsReport", {get: function() {
              return this._onRequestWindowsOptionsReport.event;
            }, enumerable: false, configurable: true}), Object.defineProperty(t3.prototype, "onA11yChar", {get: function() {
              return this._onA11yChar.event;
            }, enumerable: false, configurable: true}), Object.defineProperty(t3.prototype, "onA11yTab", {get: function() {
              return this._onA11yTab.event;
            }, enumerable: false, configurable: true}), Object.defineProperty(t3.prototype, "onCursorMove", {get: function() {
              return this._onCursorMove.event;
            }, enumerable: false, configurable: true}), Object.defineProperty(t3.prototype, "onLineFeed", {get: function() {
              return this._onLineFeed.event;
            }, enumerable: false, configurable: true}), Object.defineProperty(t3.prototype, "onScroll", {get: function() {
              return this._onScroll.event;
            }, enumerable: false, configurable: true}), Object.defineProperty(t3.prototype, "onTitleChange", {get: function() {
              return this._onTitleChange.event;
            }, enumerable: false, configurable: true}), Object.defineProperty(t3.prototype, "onAnsiColorChange", {get: function() {
              return this._onAnsiColorChange.event;
            }, enumerable: false, configurable: true}), t3.prototype.dispose = function() {
              e3.prototype.dispose.call(this);
            }, t3.prototype.parse = function(e4) {
              var t4 = this._bufferService.buffer, r2 = t4.x, i2 = t4.y;
              if (this._logService.debug("parsing data", e4), this._parseBuffer.length < e4.length && this._parseBuffer.length < S && (this._parseBuffer = new Uint32Array(Math.min(e4.length, S))), this._dirtyRowService.clearRange(), e4.length > S)
                for (var n2 = 0; n2 < e4.length; n2 += S) {
                  var o2 = n2 + S < e4.length ? n2 + S : e4.length, s2 = typeof e4 == "string" ? this._stringDecoder.decode(e4.substring(n2, o2), this._parseBuffer) : this._utf8Decoder.decode(e4.subarray(n2, o2), this._parseBuffer);
                  this._parser.parse(this._parseBuffer, s2);
                }
              else
                s2 = typeof e4 == "string" ? this._stringDecoder.decode(e4, this._parseBuffer) : this._utf8Decoder.decode(e4, this._parseBuffer), this._parser.parse(this._parseBuffer, s2);
              (t4 = this._bufferService.buffer).x === r2 && t4.y === i2 || this._onCursorMove.fire(), this._onRequestRefreshRows.fire(this._dirtyRowService.start, this._dirtyRowService.end);
            }, t3.prototype.print = function(e4, t4, r2) {
              var i2, n2, o2 = this._bufferService.buffer, s2 = this._charsetService.charset, a2 = this._optionsService.options.screenReaderMode, c2 = this._bufferService.cols, l2 = this._coreService.decPrivateModes.wraparound, h2 = this._coreService.modes.insertMode, f2 = this._curAttrData, _2 = o2.lines.get(o2.ybase + o2.y);
              this._dirtyRowService.markDirty(o2.y), o2.x && r2 - t4 > 0 && _2.getWidth(o2.x - 1) === 2 && _2.setCellFromCodePoint(o2.x - 1, 0, 1, f2.fg, f2.bg, f2.extended);
              for (var p2 = t4; p2 < r2; ++p2) {
                if (i2 = e4[p2], n2 = this._unicodeService.wcwidth(i2), i2 < 127 && s2) {
                  var v2 = s2[String.fromCharCode(i2)];
                  v2 && (i2 = v2.charCodeAt(0));
                }
                if (a2 && this._onA11yChar.fire(u.stringFromCodePoint(i2)), n2 || !o2.x) {
                  if (o2.x + n2 - 1 >= c2) {
                    if (l2) {
                      for (; o2.x < c2; )
                        _2.setCellFromCodePoint(o2.x++, 0, 1, f2.fg, f2.bg, f2.extended);
                      o2.x = 0, o2.y++, o2.y === o2.scrollBottom + 1 ? (o2.y--, this._onRequestScroll.fire(this._eraseAttrData(), true)) : (o2.y >= this._bufferService.rows && (o2.y = this._bufferService.rows - 1), o2.lines.get(o2.ybase + o2.y).isWrapped = true), _2 = o2.lines.get(o2.ybase + o2.y);
                    } else if (o2.x = c2 - 1, n2 === 2)
                      continue;
                  }
                  if (h2 && (_2.insertCells(o2.x, n2, o2.getNullCell(f2), f2), _2.getWidth(c2 - 1) === 2 && _2.setCellFromCodePoint(c2 - 1, d.NULL_CELL_CODE, d.NULL_CELL_WIDTH, f2.fg, f2.bg, f2.extended)), _2.setCellFromCodePoint(o2.x++, i2, n2, f2.fg, f2.bg, f2.extended), n2 > 0)
                    for (; --n2; )
                      _2.setCellFromCodePoint(o2.x++, 0, 0, f2.fg, f2.bg, f2.extended);
                } else
                  _2.getWidth(o2.x - 1) ? _2.addCodepointToCell(o2.x - 1, i2) : _2.addCodepointToCell(o2.x - 2, i2);
              }
              r2 - t4 > 0 && (_2.loadCell(o2.x - 1, this._workCell), this._workCell.getWidth() === 2 || this._workCell.getCode() > 65535 ? this._parser.precedingCodepoint = 0 : this._workCell.isCombined() ? this._parser.precedingCodepoint = this._workCell.getChars().charCodeAt(0) : this._parser.precedingCodepoint = this._workCell.content), o2.x < c2 && r2 - t4 > 0 && _2.getWidth(o2.x) === 0 && !_2.hasContent(o2.x) && _2.setCellFromCodePoint(o2.x, 0, 1, f2.fg, f2.bg, f2.extended), this._dirtyRowService.markDirty(o2.y);
            }, t3.prototype.addCsiHandler = function(e4, t4) {
              var r2 = this;
              return e4.final !== "t" || e4.prefix || e4.intermediates ? this._parser.registerCsiHandler(e4, t4) : this._parser.registerCsiHandler(e4, function(e5) {
                return !m(e5.params[0], r2._optionsService.options.windowOptions) || t4(e5);
              });
            }, t3.prototype.addDcsHandler = function(e4, t4) {
              return this._parser.registerDcsHandler(e4, new y.DcsHandler(t4));
            }, t3.prototype.addEscHandler = function(e4, t4) {
              return this._parser.registerEscHandler(e4, t4);
            }, t3.prototype.addOscHandler = function(e4, t4) {
              return this._parser.registerOscHandler(e4, new g.OscHandler(t4));
            }, t3.prototype.bell = function() {
              return this._onRequestBell.fire(), true;
            }, t3.prototype.lineFeed = function() {
              var e4 = this._bufferService.buffer;
              return this._dirtyRowService.markDirty(e4.y), this._optionsService.options.convertEol && (e4.x = 0), e4.y++, e4.y === e4.scrollBottom + 1 ? (e4.y--, this._onRequestScroll.fire(this._eraseAttrData())) : e4.y >= this._bufferService.rows && (e4.y = this._bufferService.rows - 1), e4.x >= this._bufferService.cols && e4.x--, this._dirtyRowService.markDirty(e4.y), this._onLineFeed.fire(), true;
            }, t3.prototype.carriageReturn = function() {
              return this._bufferService.buffer.x = 0, true;
            }, t3.prototype.backspace = function() {
              var e4, t4 = this._bufferService.buffer;
              if (!this._coreService.decPrivateModes.reverseWraparound)
                return this._restrictCursor(), t4.x > 0 && t4.x--, true;
              if (this._restrictCursor(this._bufferService.cols), t4.x > 0)
                t4.x--;
              else if (t4.x === 0 && t4.y > t4.scrollTop && t4.y <= t4.scrollBottom && ((e4 = t4.lines.get(t4.ybase + t4.y)) === null || e4 === void 0 ? void 0 : e4.isWrapped)) {
                t4.lines.get(t4.ybase + t4.y).isWrapped = false, t4.y--, t4.x = this._bufferService.cols - 1;
                var r2 = t4.lines.get(t4.ybase + t4.y);
                r2.hasWidth(t4.x) && !r2.hasContent(t4.x) && t4.x--;
              }
              return this._restrictCursor(), true;
            }, t3.prototype.tab = function() {
              if (this._bufferService.buffer.x >= this._bufferService.cols)
                return true;
              var e4 = this._bufferService.buffer.x;
              return this._bufferService.buffer.x = this._bufferService.buffer.nextStop(), this._optionsService.options.screenReaderMode && this._onA11yTab.fire(this._bufferService.buffer.x - e4), true;
            }, t3.prototype.shiftOut = function() {
              return this._charsetService.setgLevel(1), true;
            }, t3.prototype.shiftIn = function() {
              return this._charsetService.setgLevel(0), true;
            }, t3.prototype._restrictCursor = function(e4) {
              e4 === void 0 && (e4 = this._bufferService.cols - 1), this._bufferService.buffer.x = Math.min(e4, Math.max(0, this._bufferService.buffer.x)), this._bufferService.buffer.y = this._coreService.decPrivateModes.origin ? Math.min(this._bufferService.buffer.scrollBottom, Math.max(this._bufferService.buffer.scrollTop, this._bufferService.buffer.y)) : Math.min(this._bufferService.rows - 1, Math.max(0, this._bufferService.buffer.y)), this._dirtyRowService.markDirty(this._bufferService.buffer.y);
            }, t3.prototype._setCursor = function(e4, t4) {
              this._dirtyRowService.markDirty(this._bufferService.buffer.y), this._coreService.decPrivateModes.origin ? (this._bufferService.buffer.x = e4, this._bufferService.buffer.y = this._bufferService.buffer.scrollTop + t4) : (this._bufferService.buffer.x = e4, this._bufferService.buffer.y = t4), this._restrictCursor(), this._dirtyRowService.markDirty(this._bufferService.buffer.y);
            }, t3.prototype._moveCursor = function(e4, t4) {
              this._restrictCursor(), this._setCursor(this._bufferService.buffer.x + e4, this._bufferService.buffer.y + t4);
            }, t3.prototype.cursorUp = function(e4) {
              var t4 = this._bufferService.buffer.y - this._bufferService.buffer.scrollTop;
              return t4 >= 0 ? this._moveCursor(0, -Math.min(t4, e4.params[0] || 1)) : this._moveCursor(0, -(e4.params[0] || 1)), true;
            }, t3.prototype.cursorDown = function(e4) {
              var t4 = this._bufferService.buffer.scrollBottom - this._bufferService.buffer.y;
              return t4 >= 0 ? this._moveCursor(0, Math.min(t4, e4.params[0] || 1)) : this._moveCursor(0, e4.params[0] || 1), true;
            }, t3.prototype.cursorForward = function(e4) {
              return this._moveCursor(e4.params[0] || 1, 0), true;
            }, t3.prototype.cursorBackward = function(e4) {
              return this._moveCursor(-(e4.params[0] || 1), 0), true;
            }, t3.prototype.cursorNextLine = function(e4) {
              return this.cursorDown(e4), this._bufferService.buffer.x = 0, true;
            }, t3.prototype.cursorPrecedingLine = function(e4) {
              return this.cursorUp(e4), this._bufferService.buffer.x = 0, true;
            }, t3.prototype.cursorCharAbsolute = function(e4) {
              return this._setCursor((e4.params[0] || 1) - 1, this._bufferService.buffer.y), true;
            }, t3.prototype.cursorPosition = function(e4) {
              return this._setCursor(e4.length >= 2 ? (e4.params[1] || 1) - 1 : 0, (e4.params[0] || 1) - 1), true;
            }, t3.prototype.charPosAbsolute = function(e4) {
              return this._setCursor((e4.params[0] || 1) - 1, this._bufferService.buffer.y), true;
            }, t3.prototype.hPositionRelative = function(e4) {
              return this._moveCursor(e4.params[0] || 1, 0), true;
            }, t3.prototype.linePosAbsolute = function(e4) {
              return this._setCursor(this._bufferService.buffer.x, (e4.params[0] || 1) - 1), true;
            }, t3.prototype.vPositionRelative = function(e4) {
              return this._moveCursor(0, e4.params[0] || 1), true;
            }, t3.prototype.hVPosition = function(e4) {
              return this.cursorPosition(e4), true;
            }, t3.prototype.tabClear = function(e4) {
              var t4 = e4.params[0];
              return t4 === 0 ? delete this._bufferService.buffer.tabs[this._bufferService.buffer.x] : t4 === 3 && (this._bufferService.buffer.tabs = {}), true;
            }, t3.prototype.cursorForwardTab = function(e4) {
              if (this._bufferService.buffer.x >= this._bufferService.cols)
                return true;
              for (var t4 = e4.params[0] || 1; t4--; )
                this._bufferService.buffer.x = this._bufferService.buffer.nextStop();
              return true;
            }, t3.prototype.cursorBackwardTab = function(e4) {
              if (this._bufferService.buffer.x >= this._bufferService.cols)
                return true;
              for (var t4 = e4.params[0] || 1, r2 = this._bufferService.buffer; t4--; )
                r2.x = r2.prevStop();
              return true;
            }, t3.prototype._eraseInBufferLine = function(e4, t4, r2, i2) {
              i2 === void 0 && (i2 = false);
              var n2 = this._bufferService.buffer.lines.get(this._bufferService.buffer.ybase + e4);
              n2.replaceCells(t4, r2, this._bufferService.buffer.getNullCell(this._eraseAttrData()), this._eraseAttrData()), i2 && (n2.isWrapped = false);
            }, t3.prototype._resetBufferLine = function(e4) {
              var t4 = this._bufferService.buffer.lines.get(this._bufferService.buffer.ybase + e4);
              t4.fill(this._bufferService.buffer.getNullCell(this._eraseAttrData())), t4.isWrapped = false;
            }, t3.prototype.eraseInDisplay = function(e4) {
              var t4;
              switch (this._restrictCursor(), e4.params[0]) {
                case 0:
                  for (t4 = this._bufferService.buffer.y, this._dirtyRowService.markDirty(t4), this._eraseInBufferLine(t4++, this._bufferService.buffer.x, this._bufferService.cols, this._bufferService.buffer.x === 0); t4 < this._bufferService.rows; t4++)
                    this._resetBufferLine(t4);
                  this._dirtyRowService.markDirty(t4);
                  break;
                case 1:
                  for (t4 = this._bufferService.buffer.y, this._dirtyRowService.markDirty(t4), this._eraseInBufferLine(t4, 0, this._bufferService.buffer.x + 1, true), this._bufferService.buffer.x + 1 >= this._bufferService.cols && (this._bufferService.buffer.lines.get(t4 + 1).isWrapped = false); t4--; )
                    this._resetBufferLine(t4);
                  this._dirtyRowService.markDirty(0);
                  break;
                case 2:
                  for (t4 = this._bufferService.rows, this._dirtyRowService.markDirty(t4 - 1); t4--; )
                    this._resetBufferLine(t4);
                  this._dirtyRowService.markDirty(0);
                  break;
                case 3:
                  var r2 = this._bufferService.buffer.lines.length - this._bufferService.rows;
                  r2 > 0 && (this._bufferService.buffer.lines.trimStart(r2), this._bufferService.buffer.ybase = Math.max(this._bufferService.buffer.ybase - r2, 0), this._bufferService.buffer.ydisp = Math.max(this._bufferService.buffer.ydisp - r2, 0), this._onScroll.fire(0));
              }
              return true;
            }, t3.prototype.eraseInLine = function(e4) {
              switch (this._restrictCursor(), e4.params[0]) {
                case 0:
                  this._eraseInBufferLine(this._bufferService.buffer.y, this._bufferService.buffer.x, this._bufferService.cols);
                  break;
                case 1:
                  this._eraseInBufferLine(this._bufferService.buffer.y, 0, this._bufferService.buffer.x + 1);
                  break;
                case 2:
                  this._eraseInBufferLine(this._bufferService.buffer.y, 0, this._bufferService.cols);
              }
              return this._dirtyRowService.markDirty(this._bufferService.buffer.y), true;
            }, t3.prototype.insertLines = function(e4) {
              this._restrictCursor();
              var t4 = e4.params[0] || 1, r2 = this._bufferService.buffer;
              if (r2.y > r2.scrollBottom || r2.y < r2.scrollTop)
                return true;
              for (var i2 = r2.ybase + r2.y, n2 = this._bufferService.rows - 1 - r2.scrollBottom, o2 = this._bufferService.rows - 1 + r2.ybase - n2 + 1; t4--; )
                r2.lines.splice(o2 - 1, 1), r2.lines.splice(i2, 0, r2.getBlankLine(this._eraseAttrData()));
              return this._dirtyRowService.markRangeDirty(r2.y, r2.scrollBottom), r2.x = 0, true;
            }, t3.prototype.deleteLines = function(e4) {
              this._restrictCursor();
              var t4 = e4.params[0] || 1, r2 = this._bufferService.buffer;
              if (r2.y > r2.scrollBottom || r2.y < r2.scrollTop)
                return true;
              var i2, n2 = r2.ybase + r2.y;
              for (i2 = this._bufferService.rows - 1 - r2.scrollBottom, i2 = this._bufferService.rows - 1 + r2.ybase - i2; t4--; )
                r2.lines.splice(n2, 1), r2.lines.splice(i2, 0, r2.getBlankLine(this._eraseAttrData()));
              return this._dirtyRowService.markRangeDirty(r2.y, r2.scrollBottom), r2.x = 0, true;
            }, t3.prototype.insertChars = function(e4) {
              this._restrictCursor();
              var t4 = this._bufferService.buffer.lines.get(this._bufferService.buffer.ybase + this._bufferService.buffer.y);
              return t4 && (t4.insertCells(this._bufferService.buffer.x, e4.params[0] || 1, this._bufferService.buffer.getNullCell(this._eraseAttrData()), this._eraseAttrData()), this._dirtyRowService.markDirty(this._bufferService.buffer.y)), true;
            }, t3.prototype.deleteChars = function(e4) {
              this._restrictCursor();
              var t4 = this._bufferService.buffer.lines.get(this._bufferService.buffer.ybase + this._bufferService.buffer.y);
              return t4 && (t4.deleteCells(this._bufferService.buffer.x, e4.params[0] || 1, this._bufferService.buffer.getNullCell(this._eraseAttrData()), this._eraseAttrData()), this._dirtyRowService.markDirty(this._bufferService.buffer.y)), true;
            }, t3.prototype.scrollUp = function(e4) {
              for (var t4 = e4.params[0] || 1, r2 = this._bufferService.buffer; t4--; )
                r2.lines.splice(r2.ybase + r2.scrollTop, 1), r2.lines.splice(r2.ybase + r2.scrollBottom, 0, r2.getBlankLine(this._eraseAttrData()));
              return this._dirtyRowService.markRangeDirty(r2.scrollTop, r2.scrollBottom), true;
            }, t3.prototype.scrollDown = function(e4) {
              for (var t4 = e4.params[0] || 1, r2 = this._bufferService.buffer; t4--; )
                r2.lines.splice(r2.ybase + r2.scrollBottom, 1), r2.lines.splice(r2.ybase + r2.scrollTop, 0, r2.getBlankLine(f.DEFAULT_ATTR_DATA));
              return this._dirtyRowService.markRangeDirty(r2.scrollTop, r2.scrollBottom), true;
            }, t3.prototype.scrollLeft = function(e4) {
              var t4 = this._bufferService.buffer;
              if (t4.y > t4.scrollBottom || t4.y < t4.scrollTop)
                return true;
              for (var r2 = e4.params[0] || 1, i2 = t4.scrollTop; i2 <= t4.scrollBottom; ++i2) {
                var n2 = t4.lines.get(t4.ybase + i2);
                n2.deleteCells(0, r2, t4.getNullCell(this._eraseAttrData()), this._eraseAttrData()), n2.isWrapped = false;
              }
              return this._dirtyRowService.markRangeDirty(t4.scrollTop, t4.scrollBottom), true;
            }, t3.prototype.scrollRight = function(e4) {
              var t4 = this._bufferService.buffer;
              if (t4.y > t4.scrollBottom || t4.y < t4.scrollTop)
                return true;
              for (var r2 = e4.params[0] || 1, i2 = t4.scrollTop; i2 <= t4.scrollBottom; ++i2) {
                var n2 = t4.lines.get(t4.ybase + i2);
                n2.insertCells(0, r2, t4.getNullCell(this._eraseAttrData()), this._eraseAttrData()), n2.isWrapped = false;
              }
              return this._dirtyRowService.markRangeDirty(t4.scrollTop, t4.scrollBottom), true;
            }, t3.prototype.insertColumns = function(e4) {
              var t4 = this._bufferService.buffer;
              if (t4.y > t4.scrollBottom || t4.y < t4.scrollTop)
                return true;
              for (var r2 = e4.params[0] || 1, i2 = t4.scrollTop; i2 <= t4.scrollBottom; ++i2) {
                var n2 = this._bufferService.buffer.lines.get(t4.ybase + i2);
                n2.insertCells(t4.x, r2, t4.getNullCell(this._eraseAttrData()), this._eraseAttrData()), n2.isWrapped = false;
              }
              return this._dirtyRowService.markRangeDirty(t4.scrollTop, t4.scrollBottom), true;
            }, t3.prototype.deleteColumns = function(e4) {
              var t4 = this._bufferService.buffer;
              if (t4.y > t4.scrollBottom || t4.y < t4.scrollTop)
                return true;
              for (var r2 = e4.params[0] || 1, i2 = t4.scrollTop; i2 <= t4.scrollBottom; ++i2) {
                var n2 = t4.lines.get(t4.ybase + i2);
                n2.deleteCells(t4.x, r2, t4.getNullCell(this._eraseAttrData()), this._eraseAttrData()), n2.isWrapped = false;
              }
              return this._dirtyRowService.markRangeDirty(t4.scrollTop, t4.scrollBottom), true;
            }, t3.prototype.eraseChars = function(e4) {
              this._restrictCursor();
              var t4 = this._bufferService.buffer.lines.get(this._bufferService.buffer.ybase + this._bufferService.buffer.y);
              return t4 && (t4.replaceCells(this._bufferService.buffer.x, this._bufferService.buffer.x + (e4.params[0] || 1), this._bufferService.buffer.getNullCell(this._eraseAttrData()), this._eraseAttrData()), this._dirtyRowService.markDirty(this._bufferService.buffer.y)), true;
            }, t3.prototype.repeatPrecedingCharacter = function(e4) {
              if (!this._parser.precedingCodepoint)
                return true;
              for (var t4 = e4.params[0] || 1, r2 = new Uint32Array(t4), i2 = 0; i2 < t4; ++i2)
                r2[i2] = this._parser.precedingCodepoint;
              return this.print(r2, 0, r2.length), true;
            }, t3.prototype.sendDeviceAttributesPrimary = function(e4) {
              return e4.params[0] > 0 || (this._is("xterm") || this._is("rxvt-unicode") || this._is("screen") ? this._coreService.triggerDataEvent(s.C0.ESC + "[?1;2c") : this._is("linux") && this._coreService.triggerDataEvent(s.C0.ESC + "[?6c")), true;
            }, t3.prototype.sendDeviceAttributesSecondary = function(e4) {
              return e4.params[0] > 0 || (this._is("xterm") ? this._coreService.triggerDataEvent(s.C0.ESC + "[>0;276;0c") : this._is("rxvt-unicode") ? this._coreService.triggerDataEvent(s.C0.ESC + "[>85;95;0c") : this._is("linux") ? this._coreService.triggerDataEvent(e4.params[0] + "c") : this._is("screen") && this._coreService.triggerDataEvent(s.C0.ESC + "[>83;40003;0c")), true;
            }, t3.prototype._is = function(e4) {
              return (this._optionsService.options.termName + "").indexOf(e4) === 0;
            }, t3.prototype.setMode = function(e4) {
              for (var t4 = 0; t4 < e4.length; t4++)
                switch (e4.params[t4]) {
                  case 4:
                    this._coreService.modes.insertMode = true;
                }
              return true;
            }, t3.prototype.setModePrivate = function(e4) {
              for (var t4 = 0; t4 < e4.length; t4++)
                switch (e4.params[t4]) {
                  case 1:
                    this._coreService.decPrivateModes.applicationCursorKeys = true;
                    break;
                  case 2:
                    this._charsetService.setgCharset(0, a.DEFAULT_CHARSET), this._charsetService.setgCharset(1, a.DEFAULT_CHARSET), this._charsetService.setgCharset(2, a.DEFAULT_CHARSET), this._charsetService.setgCharset(3, a.DEFAULT_CHARSET);
                    break;
                  case 3:
                    this._optionsService.options.windowOptions.setWinLines && (this._bufferService.resize(132, this._bufferService.rows), this._onRequestReset.fire());
                    break;
                  case 6:
                    this._coreService.decPrivateModes.origin = true, this._setCursor(0, 0);
                    break;
                  case 7:
                    this._coreService.decPrivateModes.wraparound = true;
                    break;
                  case 12:
                    break;
                  case 45:
                    this._coreService.decPrivateModes.reverseWraparound = true;
                    break;
                  case 66:
                    this._logService.debug("Serial port requested application keypad."), this._coreService.decPrivateModes.applicationKeypad = true, this._onRequestSyncScrollBar.fire();
                    break;
                  case 9:
                    this._coreMouseService.activeProtocol = "X10";
                    break;
                  case 1e3:
                    this._coreMouseService.activeProtocol = "VT200";
                    break;
                  case 1002:
                    this._coreMouseService.activeProtocol = "DRAG";
                    break;
                  case 1003:
                    this._coreMouseService.activeProtocol = "ANY";
                    break;
                  case 1004:
                    this._coreService.decPrivateModes.sendFocus = true;
                    break;
                  case 1005:
                    this._logService.debug("DECSET 1005 not supported (see #2507)");
                    break;
                  case 1006:
                    this._coreMouseService.activeEncoding = "SGR";
                    break;
                  case 1015:
                    this._logService.debug("DECSET 1015 not supported (see #2507)");
                    break;
                  case 25:
                    this._coreService.isCursorHidden = false;
                    break;
                  case 1048:
                    this.saveCursor();
                    break;
                  case 1049:
                    this.saveCursor();
                  case 47:
                  case 1047:
                    this._bufferService.buffers.activateAltBuffer(this._eraseAttrData()), this._coreService.isCursorInitialized = true, this._onRequestRefreshRows.fire(0, this._bufferService.rows - 1), this._onRequestSyncScrollBar.fire();
                    break;
                  case 2004:
                    this._coreService.decPrivateModes.bracketedPasteMode = true;
                }
              return true;
            }, t3.prototype.resetMode = function(e4) {
              for (var t4 = 0; t4 < e4.length; t4++)
                switch (e4.params[t4]) {
                  case 4:
                    this._coreService.modes.insertMode = false;
                }
              return true;
            }, t3.prototype.resetModePrivate = function(e4) {
              for (var t4 = 0; t4 < e4.length; t4++)
                switch (e4.params[t4]) {
                  case 1:
                    this._coreService.decPrivateModes.applicationCursorKeys = false;
                    break;
                  case 3:
                    this._optionsService.options.windowOptions.setWinLines && (this._bufferService.resize(80, this._bufferService.rows), this._onRequestReset.fire());
                    break;
                  case 6:
                    this._coreService.decPrivateModes.origin = false, this._setCursor(0, 0);
                    break;
                  case 7:
                    this._coreService.decPrivateModes.wraparound = false;
                    break;
                  case 12:
                    break;
                  case 45:
                    this._coreService.decPrivateModes.reverseWraparound = false;
                    break;
                  case 66:
                    this._logService.debug("Switching back to normal keypad."), this._coreService.decPrivateModes.applicationKeypad = false, this._onRequestSyncScrollBar.fire();
                    break;
                  case 9:
                  case 1e3:
                  case 1002:
                  case 1003:
                    this._coreMouseService.activeProtocol = "NONE";
                    break;
                  case 1004:
                    this._coreService.decPrivateModes.sendFocus = false;
                    break;
                  case 1005:
                    this._logService.debug("DECRST 1005 not supported (see #2507)");
                    break;
                  case 1006:
                    this._coreMouseService.activeEncoding = "DEFAULT";
                    break;
                  case 1015:
                    this._logService.debug("DECRST 1015 not supported (see #2507)");
                    break;
                  case 25:
                    this._coreService.isCursorHidden = true;
                    break;
                  case 1048:
                    this.restoreCursor();
                    break;
                  case 1049:
                  case 47:
                  case 1047:
                    this._bufferService.buffers.activateNormalBuffer(), e4.params[t4] === 1049 && this.restoreCursor(), this._coreService.isCursorInitialized = true, this._onRequestRefreshRows.fire(0, this._bufferService.rows - 1), this._onRequestSyncScrollBar.fire();
                    break;
                  case 2004:
                    this._coreService.decPrivateModes.bracketedPasteMode = false;
                }
              return true;
            }, t3.prototype._updateAttrColor = function(e4, t4, r2, i2, n2) {
              return t4 === 2 ? (e4 |= 50331648, e4 &= -16777216, e4 |= v.AttributeData.fromColorRGB([r2, i2, n2])) : t4 === 5 && (e4 &= -50331904, e4 |= 33554432 | 255 & r2), e4;
            }, t3.prototype._extractColor = function(e4, t4, r2) {
              var i2 = [0, 0, -1, 0, 0, 0], n2 = 0, o2 = 0;
              do {
                if (i2[o2 + n2] = e4.params[t4 + o2], e4.hasSubParams(t4 + o2)) {
                  var s2 = e4.getSubParams(t4 + o2), a2 = 0;
                  do {
                    i2[1] === 5 && (n2 = 1), i2[o2 + a2 + 1 + n2] = s2[a2];
                  } while (++a2 < s2.length && a2 + o2 + 1 + n2 < i2.length);
                  break;
                }
                if (i2[1] === 5 && o2 + n2 >= 2 || i2[1] === 2 && o2 + n2 >= 5)
                  break;
                i2[1] && (n2 = 1);
              } while (++o2 + t4 < e4.length && o2 + n2 < i2.length);
              for (a2 = 2; a2 < i2.length; ++a2)
                i2[a2] === -1 && (i2[a2] = 0);
              switch (i2[0]) {
                case 38:
                  r2.fg = this._updateAttrColor(r2.fg, i2[1], i2[3], i2[4], i2[5]);
                  break;
                case 48:
                  r2.bg = this._updateAttrColor(r2.bg, i2[1], i2[3], i2[4], i2[5]);
                  break;
                case 58:
                  r2.extended = r2.extended.clone(), r2.extended.underlineColor = this._updateAttrColor(r2.extended.underlineColor, i2[1], i2[3], i2[4], i2[5]);
              }
              return o2;
            }, t3.prototype._processUnderline = function(e4, t4) {
              t4.extended = t4.extended.clone(), (!~e4 || e4 > 5) && (e4 = 1), t4.extended.underlineStyle = e4, t4.fg |= 268435456, e4 === 0 && (t4.fg &= -268435457), t4.updateExtended();
            }, t3.prototype.charAttributes = function(e4) {
              if (e4.length === 1 && e4.params[0] === 0)
                return this._curAttrData.fg = f.DEFAULT_ATTR_DATA.fg, this._curAttrData.bg = f.DEFAULT_ATTR_DATA.bg, true;
              for (var t4, r2 = e4.length, i2 = this._curAttrData, n2 = 0; n2 < r2; n2++)
                (t4 = e4.params[n2]) >= 30 && t4 <= 37 ? (i2.fg &= -50331904, i2.fg |= 16777216 | t4 - 30) : t4 >= 40 && t4 <= 47 ? (i2.bg &= -50331904, i2.bg |= 16777216 | t4 - 40) : t4 >= 90 && t4 <= 97 ? (i2.fg &= -50331904, i2.fg |= 16777224 | t4 - 90) : t4 >= 100 && t4 <= 107 ? (i2.bg &= -50331904, i2.bg |= 16777224 | t4 - 100) : t4 === 0 ? (i2.fg = f.DEFAULT_ATTR_DATA.fg, i2.bg = f.DEFAULT_ATTR_DATA.bg) : t4 === 1 ? i2.fg |= 134217728 : t4 === 3 ? i2.bg |= 67108864 : t4 === 4 ? (i2.fg |= 268435456, this._processUnderline(e4.hasSubParams(n2) ? e4.getSubParams(n2)[0] : 1, i2)) : t4 === 5 ? i2.fg |= 536870912 : t4 === 7 ? i2.fg |= 67108864 : t4 === 8 ? i2.fg |= 1073741824 : t4 === 2 ? i2.bg |= 134217728 : t4 === 21 ? this._processUnderline(2, i2) : t4 === 22 ? (i2.fg &= -134217729, i2.bg &= -134217729) : t4 === 23 ? i2.bg &= -67108865 : t4 === 24 ? i2.fg &= -268435457 : t4 === 25 ? i2.fg &= -536870913 : t4 === 27 ? i2.fg &= -67108865 : t4 === 28 ? i2.fg &= -1073741825 : t4 === 39 ? (i2.fg &= -67108864, i2.fg |= 16777215 & f.DEFAULT_ATTR_DATA.fg) : t4 === 49 ? (i2.bg &= -67108864, i2.bg |= 16777215 & f.DEFAULT_ATTR_DATA.bg) : t4 === 38 || t4 === 48 || t4 === 58 ? n2 += this._extractColor(e4, n2, i2) : t4 === 59 ? (i2.extended = i2.extended.clone(), i2.extended.underlineColor = -1, i2.updateExtended()) : t4 === 100 ? (i2.fg &= -67108864, i2.fg |= 16777215 & f.DEFAULT_ATTR_DATA.fg, i2.bg &= -67108864, i2.bg |= 16777215 & f.DEFAULT_ATTR_DATA.bg) : this._logService.debug("Unknown SGR attribute: %d.", t4);
              return true;
            }, t3.prototype.deviceStatus = function(e4) {
              switch (e4.params[0]) {
                case 5:
                  this._coreService.triggerDataEvent(s.C0.ESC + "[0n");
                  break;
                case 6:
                  var t4 = this._bufferService.buffer.y + 1, r2 = this._bufferService.buffer.x + 1;
                  this._coreService.triggerDataEvent(s.C0.ESC + "[" + t4 + ";" + r2 + "R");
              }
              return true;
            }, t3.prototype.deviceStatusPrivate = function(e4) {
              switch (e4.params[0]) {
                case 6:
                  var t4 = this._bufferService.buffer.y + 1, r2 = this._bufferService.buffer.x + 1;
                  this._coreService.triggerDataEvent(s.C0.ESC + "[?" + t4 + ";" + r2 + "R");
              }
              return true;
            }, t3.prototype.softReset = function(e4) {
              return this._coreService.isCursorHidden = false, this._onRequestSyncScrollBar.fire(), this._bufferService.buffer.scrollTop = 0, this._bufferService.buffer.scrollBottom = this._bufferService.rows - 1, this._curAttrData = f.DEFAULT_ATTR_DATA.clone(), this._coreService.reset(), this._charsetService.reset(), this._bufferService.buffer.savedX = 0, this._bufferService.buffer.savedY = this._bufferService.buffer.ybase, this._bufferService.buffer.savedCurAttrData.fg = this._curAttrData.fg, this._bufferService.buffer.savedCurAttrData.bg = this._curAttrData.bg, this._bufferService.buffer.savedCharset = this._charsetService.charset, this._coreService.decPrivateModes.origin = false, true;
            }, t3.prototype.setCursorStyle = function(e4) {
              var t4 = e4.params[0] || 1;
              switch (t4) {
                case 1:
                case 2:
                  this._optionsService.options.cursorStyle = "block";
                  break;
                case 3:
                case 4:
                  this._optionsService.options.cursorStyle = "underline";
                  break;
                case 5:
                case 6:
                  this._optionsService.options.cursorStyle = "bar";
              }
              var r2 = t4 % 2 == 1;
              return this._optionsService.options.cursorBlink = r2, true;
            }, t3.prototype.setScrollRegion = function(e4) {
              var t4, r2 = e4.params[0] || 1;
              return (e4.length < 2 || (t4 = e4.params[1]) > this._bufferService.rows || t4 === 0) && (t4 = this._bufferService.rows), t4 > r2 && (this._bufferService.buffer.scrollTop = r2 - 1, this._bufferService.buffer.scrollBottom = t4 - 1, this._setCursor(0, 0)), true;
            }, t3.prototype.windowOptions = function(e4) {
              if (!m(e4.params[0], this._optionsService.options.windowOptions))
                return true;
              var t4 = e4.length > 1 ? e4.params[1] : 0;
              switch (e4.params[0]) {
                case 14:
                  t4 !== 2 && this._onRequestWindowsOptionsReport.fire(o.GET_WIN_SIZE_PIXELS);
                  break;
                case 16:
                  this._onRequestWindowsOptionsReport.fire(o.GET_CELL_SIZE_PIXELS);
                  break;
                case 18:
                  this._bufferService && this._coreService.triggerDataEvent(s.C0.ESC + "[8;" + this._bufferService.rows + ";" + this._bufferService.cols + "t");
                  break;
                case 22:
                  t4 !== 0 && t4 !== 2 || (this._windowTitleStack.push(this._windowTitle), this._windowTitleStack.length > 10 && this._windowTitleStack.shift()), t4 !== 0 && t4 !== 1 || (this._iconNameStack.push(this._iconName), this._iconNameStack.length > 10 && this._iconNameStack.shift());
                  break;
                case 23:
                  t4 !== 0 && t4 !== 2 || this._windowTitleStack.length && this.setTitle(this._windowTitleStack.pop()), t4 !== 0 && t4 !== 1 || this._iconNameStack.length && this.setIconName(this._iconNameStack.pop());
              }
              return true;
            }, t3.prototype.saveCursor = function(e4) {
              return this._bufferService.buffer.savedX = this._bufferService.buffer.x, this._bufferService.buffer.savedY = this._bufferService.buffer.ybase + this._bufferService.buffer.y, this._bufferService.buffer.savedCurAttrData.fg = this._curAttrData.fg, this._bufferService.buffer.savedCurAttrData.bg = this._curAttrData.bg, this._bufferService.buffer.savedCharset = this._charsetService.charset, true;
            }, t3.prototype.restoreCursor = function(e4) {
              return this._bufferService.buffer.x = this._bufferService.buffer.savedX || 0, this._bufferService.buffer.y = Math.max(this._bufferService.buffer.savedY - this._bufferService.buffer.ybase, 0), this._curAttrData.fg = this._bufferService.buffer.savedCurAttrData.fg, this._curAttrData.bg = this._bufferService.buffer.savedCurAttrData.bg, this._charsetService.charset = this._savedCharset, this._bufferService.buffer.savedCharset && (this._charsetService.charset = this._bufferService.buffer.savedCharset), this._restrictCursor(), true;
            }, t3.prototype.setTitle = function(e4) {
              return this._windowTitle = e4, this._onTitleChange.fire(e4), true;
            }, t3.prototype.setIconName = function(e4) {
              return this._iconName = e4, true;
            }, t3.prototype._parseAnsiColorChange = function(e4) {
              for (var t4, r2 = {colors: []}, i2 = /(\d+);rgb:([0-9a-f]{2})\/([0-9a-f]{2})\/([0-9a-f]{2})/gi; (t4 = i2.exec(e4)) !== null; )
                r2.colors.push({colorIndex: parseInt(t4[1]), red: parseInt(t4[2], 16), green: parseInt(t4[3], 16), blue: parseInt(t4[4], 16)});
              return r2.colors.length === 0 ? null : r2;
            }, t3.prototype.setAnsiColor = function(e4) {
              var t4 = this._parseAnsiColorChange(e4);
              return t4 ? this._onAnsiColorChange.fire(t4) : this._logService.warn("Expected format <num>;rgb:<rr>/<gg>/<bb> but got data: " + e4), true;
            }, t3.prototype.nextLine = function() {
              return this._bufferService.buffer.x = 0, this.index(), true;
            }, t3.prototype.keypadApplicationMode = function() {
              return this._logService.debug("Serial port requested application keypad."), this._coreService.decPrivateModes.applicationKeypad = true, this._onRequestSyncScrollBar.fire(), true;
            }, t3.prototype.keypadNumericMode = function() {
              return this._logService.debug("Switching back to normal keypad."), this._coreService.decPrivateModes.applicationKeypad = false, this._onRequestSyncScrollBar.fire(), true;
            }, t3.prototype.selectDefaultCharset = function() {
              return this._charsetService.setgLevel(0), this._charsetService.setgCharset(0, a.DEFAULT_CHARSET), true;
            }, t3.prototype.selectCharset = function(e4) {
              return e4.length !== 2 ? (this.selectDefaultCharset(), true) : (e4[0] === "/" || this._charsetService.setgCharset(b[e4[0]], a.CHARSETS[e4[1]] || a.DEFAULT_CHARSET), true);
            }, t3.prototype.index = function() {
              this._restrictCursor();
              var e4 = this._bufferService.buffer;
              return this._bufferService.buffer.y++, e4.y === e4.scrollBottom + 1 ? (e4.y--, this._onRequestScroll.fire(this._eraseAttrData())) : e4.y >= this._bufferService.rows && (e4.y = this._bufferService.rows - 1), this._restrictCursor(), true;
            }, t3.prototype.tabSet = function() {
              return this._bufferService.buffer.tabs[this._bufferService.buffer.x] = true, true;
            }, t3.prototype.reverseIndex = function() {
              this._restrictCursor();
              var e4 = this._bufferService.buffer;
              if (e4.y === e4.scrollTop) {
                var t4 = e4.scrollBottom - e4.scrollTop;
                e4.lines.shiftElements(e4.ybase + e4.y, t4, 1), e4.lines.set(e4.ybase + e4.y, e4.getBlankLine(this._eraseAttrData())), this._dirtyRowService.markRangeDirty(e4.scrollTop, e4.scrollBottom);
              } else
                e4.y--, this._restrictCursor();
              return true;
            }, t3.prototype.fullReset = function() {
              return this._parser.reset(), this._onRequestReset.fire(), true;
            }, t3.prototype.reset = function() {
              this._curAttrData = f.DEFAULT_ATTR_DATA.clone(), this._eraseAttrDataInternal = f.DEFAULT_ATTR_DATA.clone();
            }, t3.prototype._eraseAttrData = function() {
              return this._eraseAttrDataInternal.bg &= -67108864, this._eraseAttrDataInternal.bg |= 67108863 & this._curAttrData.bg, this._eraseAttrDataInternal;
            }, t3.prototype.setgLevel = function(e4) {
              return this._charsetService.setgLevel(e4), true;
            }, t3.prototype.screenAlignmentPattern = function() {
              var e4 = new p.CellData();
              e4.content = 1 << 22 | "E".charCodeAt(0), e4.fg = this._curAttrData.fg, e4.bg = this._curAttrData.bg;
              var t4 = this._bufferService.buffer;
              this._setCursor(0, 0);
              for (var r2 = 0; r2 < this._bufferService.rows; ++r2) {
                var i2 = t4.ybase + t4.y + r2, n2 = t4.lines.get(i2);
                n2 && (n2.fill(e4), n2.isWrapped = false);
              }
              return this._dirtyRowService.markAllDirty(), this._setCursor(0, 0), true;
            }, t3;
          }(l.Disposable);
          t2.InputHandler = w;
        }, 844: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", {value: true}), t2.getDisposeArrayDisposable = t2.disposeArray = t2.Disposable = void 0;
          var r = function() {
            function e3() {
              this._disposables = [], this._isDisposed = false;
            }
            return e3.prototype.dispose = function() {
              this._isDisposed = true;
              for (var e4 = 0, t3 = this._disposables; e4 < t3.length; e4++)
                t3[e4].dispose();
              this._disposables.length = 0;
            }, e3.prototype.register = function(e4) {
              return this._disposables.push(e4), e4;
            }, e3.prototype.unregister = function(e4) {
              var t3 = this._disposables.indexOf(e4);
              t3 !== -1 && this._disposables.splice(t3, 1);
            }, e3;
          }();
          function i(e3) {
            for (var t3 = 0, r2 = e3; t3 < r2.length; t3++)
              r2[t3].dispose();
            e3.length = 0;
          }
          t2.Disposable = r, t2.disposeArray = i, t2.getDisposeArrayDisposable = function(e3) {
            return {dispose: function() {
              return i(e3);
            }};
          };
        }, 6114: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", {value: true}), t2.isLinux = t2.isWindows = t2.isIphone = t2.isIpad = t2.isMac = t2.isSafari = t2.isFirefox = void 0;
          var r = typeof navigator == "undefined", i = r ? "node" : navigator.userAgent, n = r ? "node" : navigator.platform;
          t2.isFirefox = i.includes("Firefox"), t2.isSafari = /^((?!chrome|android).)*safari/i.test(i), t2.isMac = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"].includes(n), t2.isIpad = n === "iPad", t2.isIphone = n === "iPhone", t2.isWindows = ["Windows", "Win16", "Win32", "WinCE"].includes(n), t2.isLinux = n.indexOf("Linux") >= 0;
        }, 8273: (e2, t2) => {
          function r(e3, t3, r2, i) {
            if (r2 === void 0 && (r2 = 0), i === void 0 && (i = e3.length), r2 >= e3.length)
              return e3;
            r2 = (e3.length + r2) % e3.length, i = i >= e3.length ? e3.length : (e3.length + i) % e3.length;
            for (var n = r2; n < i; ++n)
              e3[n] = t3;
            return e3;
          }
          Object.defineProperty(t2, "__esModule", {value: true}), t2.concat = t2.fillFallback = t2.fill = void 0, t2.fill = function(e3, t3, i, n) {
            return e3.fill ? e3.fill(t3, i, n) : r(e3, t3, i, n);
          }, t2.fillFallback = r, t2.concat = function(e3, t3) {
            var r2 = new e3.constructor(e3.length + t3.length);
            return r2.set(e3), r2.set(t3, e3.length), r2;
          };
        }, 9282: (e2, t2, r) => {
          Object.defineProperty(t2, "__esModule", {value: true}), t2.updateWindowsModeWrappedState = void 0;
          var i = r(643);
          t2.updateWindowsModeWrappedState = function(e3) {
            var t3 = e3.buffer.lines.get(e3.buffer.ybase + e3.buffer.y - 1), r2 = t3 == null ? void 0 : t3.get(e3.cols - 1), n = e3.buffer.lines.get(e3.buffer.ybase + e3.buffer.y);
            n && r2 && (n.isWrapped = r2[i.CHAR_DATA_CODE_INDEX] !== i.NULL_CELL_CODE && r2[i.CHAR_DATA_CODE_INDEX] !== i.WHITESPACE_CELL_CODE);
          };
        }, 3734: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", {value: true}), t2.ExtendedAttrs = t2.AttributeData = void 0;
          var r = function() {
            function e3() {
              this.fg = 0, this.bg = 0, this.extended = new i();
            }
            return e3.toColorRGB = function(e4) {
              return [e4 >>> 16 & 255, e4 >>> 8 & 255, 255 & e4];
            }, e3.fromColorRGB = function(e4) {
              return (255 & e4[0]) << 16 | (255 & e4[1]) << 8 | 255 & e4[2];
            }, e3.prototype.clone = function() {
              var t3 = new e3();
              return t3.fg = this.fg, t3.bg = this.bg, t3.extended = this.extended.clone(), t3;
            }, e3.prototype.isInverse = function() {
              return 67108864 & this.fg;
            }, e3.prototype.isBold = function() {
              return 134217728 & this.fg;
            }, e3.prototype.isUnderline = function() {
              return 268435456 & this.fg;
            }, e3.prototype.isBlink = function() {
              return 536870912 & this.fg;
            }, e3.prototype.isInvisible = function() {
              return 1073741824 & this.fg;
            }, e3.prototype.isItalic = function() {
              return 67108864 & this.bg;
            }, e3.prototype.isDim = function() {
              return 134217728 & this.bg;
            }, e3.prototype.getFgColorMode = function() {
              return 50331648 & this.fg;
            }, e3.prototype.getBgColorMode = function() {
              return 50331648 & this.bg;
            }, e3.prototype.isFgRGB = function() {
              return (50331648 & this.fg) == 50331648;
            }, e3.prototype.isBgRGB = function() {
              return (50331648 & this.bg) == 50331648;
            }, e3.prototype.isFgPalette = function() {
              return (50331648 & this.fg) == 16777216 || (50331648 & this.fg) == 33554432;
            }, e3.prototype.isBgPalette = function() {
              return (50331648 & this.bg) == 16777216 || (50331648 & this.bg) == 33554432;
            }, e3.prototype.isFgDefault = function() {
              return (50331648 & this.fg) == 0;
            }, e3.prototype.isBgDefault = function() {
              return (50331648 & this.bg) == 0;
            }, e3.prototype.isAttributeDefault = function() {
              return this.fg === 0 && this.bg === 0;
            }, e3.prototype.getFgColor = function() {
              switch (50331648 & this.fg) {
                case 16777216:
                case 33554432:
                  return 255 & this.fg;
                case 50331648:
                  return 16777215 & this.fg;
                default:
                  return -1;
              }
            }, e3.prototype.getBgColor = function() {
              switch (50331648 & this.bg) {
                case 16777216:
                case 33554432:
                  return 255 & this.bg;
                case 50331648:
                  return 16777215 & this.bg;
                default:
                  return -1;
              }
            }, e3.prototype.hasExtendedAttrs = function() {
              return 268435456 & this.bg;
            }, e3.prototype.updateExtended = function() {
              this.extended.isEmpty() ? this.bg &= -268435457 : this.bg |= 268435456;
            }, e3.prototype.getUnderlineColor = function() {
              if (268435456 & this.bg && ~this.extended.underlineColor)
                switch (50331648 & this.extended.underlineColor) {
                  case 16777216:
                  case 33554432:
                    return 255 & this.extended.underlineColor;
                  case 50331648:
                    return 16777215 & this.extended.underlineColor;
                  default:
                    return this.getFgColor();
                }
              return this.getFgColor();
            }, e3.prototype.getUnderlineColorMode = function() {
              return 268435456 & this.bg && ~this.extended.underlineColor ? 50331648 & this.extended.underlineColor : this.getFgColorMode();
            }, e3.prototype.isUnderlineColorRGB = function() {
              return 268435456 & this.bg && ~this.extended.underlineColor ? (50331648 & this.extended.underlineColor) == 50331648 : this.isFgRGB();
            }, e3.prototype.isUnderlineColorPalette = function() {
              return 268435456 & this.bg && ~this.extended.underlineColor ? (50331648 & this.extended.underlineColor) == 16777216 || (50331648 & this.extended.underlineColor) == 33554432 : this.isFgPalette();
            }, e3.prototype.isUnderlineColorDefault = function() {
              return 268435456 & this.bg && ~this.extended.underlineColor ? (50331648 & this.extended.underlineColor) == 0 : this.isFgDefault();
            }, e3.prototype.getUnderlineStyle = function() {
              return 268435456 & this.fg ? 268435456 & this.bg ? this.extended.underlineStyle : 1 : 0;
            }, e3;
          }();
          t2.AttributeData = r;
          var i = function() {
            function e3(e4, t3) {
              e4 === void 0 && (e4 = 0), t3 === void 0 && (t3 = -1), this.underlineStyle = e4, this.underlineColor = t3;
            }
            return e3.prototype.clone = function() {
              return new e3(this.underlineStyle, this.underlineColor);
            }, e3.prototype.isEmpty = function() {
              return this.underlineStyle === 0;
            }, e3;
          }();
          t2.ExtendedAttrs = i;
        }, 9092: (e2, t2, r) => {
          Object.defineProperty(t2, "__esModule", {value: true}), t2.BufferStringIterator = t2.Buffer = t2.MAX_BUFFER_SIZE = void 0;
          var i = r(6349), n = r(8437), o = r(511), s = r(643), a = r(4634), c = r(4863), l = r(7116), h = r(3734);
          t2.MAX_BUFFER_SIZE = 4294967295;
          var u = function() {
            function e3(e4, t3, r2) {
              this._hasScrollback = e4, this._optionsService = t3, this._bufferService = r2, this.ydisp = 0, this.ybase = 0, this.y = 0, this.x = 0, this.savedY = 0, this.savedX = 0, this.savedCurAttrData = n.DEFAULT_ATTR_DATA.clone(), this.savedCharset = l.DEFAULT_CHARSET, this.markers = [], this._nullCell = o.CellData.fromCharData([0, s.NULL_CELL_CHAR, s.NULL_CELL_WIDTH, s.NULL_CELL_CODE]), this._whitespaceCell = o.CellData.fromCharData([0, s.WHITESPACE_CELL_CHAR, s.WHITESPACE_CELL_WIDTH, s.WHITESPACE_CELL_CODE]), this._cols = this._bufferService.cols, this._rows = this._bufferService.rows, this.lines = new i.CircularList(this._getCorrectBufferLength(this._rows)), this.scrollTop = 0, this.scrollBottom = this._rows - 1, this.setupTabStops();
            }
            return e3.prototype.getNullCell = function(e4) {
              return e4 ? (this._nullCell.fg = e4.fg, this._nullCell.bg = e4.bg, this._nullCell.extended = e4.extended) : (this._nullCell.fg = 0, this._nullCell.bg = 0, this._nullCell.extended = new h.ExtendedAttrs()), this._nullCell;
            }, e3.prototype.getWhitespaceCell = function(e4) {
              return e4 ? (this._whitespaceCell.fg = e4.fg, this._whitespaceCell.bg = e4.bg, this._whitespaceCell.extended = e4.extended) : (this._whitespaceCell.fg = 0, this._whitespaceCell.bg = 0, this._whitespaceCell.extended = new h.ExtendedAttrs()), this._whitespaceCell;
            }, e3.prototype.getBlankLine = function(e4, t3) {
              return new n.BufferLine(this._bufferService.cols, this.getNullCell(e4), t3);
            }, Object.defineProperty(e3.prototype, "hasScrollback", {get: function() {
              return this._hasScrollback && this.lines.maxLength > this._rows;
            }, enumerable: false, configurable: true}), Object.defineProperty(e3.prototype, "isCursorInViewport", {get: function() {
              var e4 = this.ybase + this.y - this.ydisp;
              return e4 >= 0 && e4 < this._rows;
            }, enumerable: false, configurable: true}), e3.prototype._getCorrectBufferLength = function(e4) {
              if (!this._hasScrollback)
                return e4;
              var r2 = e4 + this._optionsService.options.scrollback;
              return r2 > t2.MAX_BUFFER_SIZE ? t2.MAX_BUFFER_SIZE : r2;
            }, e3.prototype.fillViewportRows = function(e4) {
              if (this.lines.length === 0) {
                e4 === void 0 && (e4 = n.DEFAULT_ATTR_DATA);
                for (var t3 = this._rows; t3--; )
                  this.lines.push(this.getBlankLine(e4));
              }
            }, e3.prototype.clear = function() {
              this.ydisp = 0, this.ybase = 0, this.y = 0, this.x = 0, this.lines = new i.CircularList(this._getCorrectBufferLength(this._rows)), this.scrollTop = 0, this.scrollBottom = this._rows - 1, this.setupTabStops();
            }, e3.prototype.resize = function(e4, t3) {
              var r2 = this.getNullCell(n.DEFAULT_ATTR_DATA), i2 = this._getCorrectBufferLength(t3);
              if (i2 > this.lines.maxLength && (this.lines.maxLength = i2), this.lines.length > 0) {
                if (this._cols < e4)
                  for (var o2 = 0; o2 < this.lines.length; o2++)
                    this.lines.get(o2).resize(e4, r2);
                var s2 = 0;
                if (this._rows < t3)
                  for (var a2 = this._rows; a2 < t3; a2++)
                    this.lines.length < t3 + this.ybase && (this._optionsService.options.windowsMode ? this.lines.push(new n.BufferLine(e4, r2)) : this.ybase > 0 && this.lines.length <= this.ybase + this.y + s2 + 1 ? (this.ybase--, s2++, this.ydisp > 0 && this.ydisp--) : this.lines.push(new n.BufferLine(e4, r2)));
                else
                  for (a2 = this._rows; a2 > t3; a2--)
                    this.lines.length > t3 + this.ybase && (this.lines.length > this.ybase + this.y + 1 ? this.lines.pop() : (this.ybase++, this.ydisp++));
                if (i2 < this.lines.maxLength) {
                  var c2 = this.lines.length - i2;
                  c2 > 0 && (this.lines.trimStart(c2), this.ybase = Math.max(this.ybase - c2, 0), this.ydisp = Math.max(this.ydisp - c2, 0), this.savedY = Math.max(this.savedY - c2, 0)), this.lines.maxLength = i2;
                }
                this.x = Math.min(this.x, e4 - 1), this.y = Math.min(this.y, t3 - 1), s2 && (this.y += s2), this.savedX = Math.min(this.savedX, e4 - 1), this.scrollTop = 0;
              }
              if (this.scrollBottom = t3 - 1, this._isReflowEnabled && (this._reflow(e4, t3), this._cols > e4))
                for (o2 = 0; o2 < this.lines.length; o2++)
                  this.lines.get(o2).resize(e4, r2);
              this._cols = e4, this._rows = t3;
            }, Object.defineProperty(e3.prototype, "_isReflowEnabled", {get: function() {
              return this._hasScrollback && !this._optionsService.options.windowsMode;
            }, enumerable: false, configurable: true}), e3.prototype._reflow = function(e4, t3) {
              this._cols !== e4 && (e4 > this._cols ? this._reflowLarger(e4, t3) : this._reflowSmaller(e4, t3));
            }, e3.prototype._reflowLarger = function(e4, t3) {
              var r2 = a.reflowLargerGetLinesToRemove(this.lines, this._cols, e4, this.ybase + this.y, this.getNullCell(n.DEFAULT_ATTR_DATA));
              if (r2.length > 0) {
                var i2 = a.reflowLargerCreateNewLayout(this.lines, r2);
                a.reflowLargerApplyNewLayout(this.lines, i2.layout), this._reflowLargerAdjustViewport(e4, t3, i2.countRemoved);
              }
            }, e3.prototype._reflowLargerAdjustViewport = function(e4, t3, r2) {
              for (var i2 = this.getNullCell(n.DEFAULT_ATTR_DATA), o2 = r2; o2-- > 0; )
                this.ybase === 0 ? (this.y > 0 && this.y--, this.lines.length < t3 && this.lines.push(new n.BufferLine(e4, i2))) : (this.ydisp === this.ybase && this.ydisp--, this.ybase--);
              this.savedY = Math.max(this.savedY - r2, 0);
            }, e3.prototype._reflowSmaller = function(e4, t3) {
              for (var r2 = this.getNullCell(n.DEFAULT_ATTR_DATA), i2 = [], o2 = 0, s2 = this.lines.length - 1; s2 >= 0; s2--) {
                var c2 = this.lines.get(s2);
                if (!(!c2 || !c2.isWrapped && c2.getTrimmedLength() <= e4)) {
                  for (var l2 = [c2]; c2.isWrapped && s2 > 0; )
                    c2 = this.lines.get(--s2), l2.unshift(c2);
                  var h2 = this.ybase + this.y;
                  if (!(h2 >= s2 && h2 < s2 + l2.length)) {
                    var u2, f2 = l2[l2.length - 1].getTrimmedLength(), _ = a.reflowSmallerGetNewLineLengths(l2, this._cols, e4), d = _.length - l2.length;
                    u2 = this.ybase === 0 && this.y !== this.lines.length - 1 ? Math.max(0, this.y - this.lines.maxLength + d) : Math.max(0, this.lines.length - this.lines.maxLength + d);
                    for (var p = [], v = 0; v < d; v++) {
                      var g = this.getBlankLine(n.DEFAULT_ATTR_DATA, true);
                      p.push(g);
                    }
                    p.length > 0 && (i2.push({start: s2 + l2.length + o2, newLines: p}), o2 += p.length), l2.push.apply(l2, p);
                    var y = _.length - 1, b = _[y];
                    b === 0 && (b = _[--y]);
                    for (var S = l2.length - d - 1, m = f2; S >= 0; ) {
                      var C = Math.min(m, b);
                      if (l2[y].copyCellsFrom(l2[S], m - C, b - C, C, true), (b -= C) == 0 && (b = _[--y]), (m -= C) == 0) {
                        S--;
                        var w = Math.max(S, 0);
                        m = a.getWrappedLineTrimmedLength(l2, w, this._cols);
                      }
                    }
                    for (v = 0; v < l2.length; v++)
                      _[v] < e4 && l2[v].setCell(_[v], r2);
                    for (var E = d - u2; E-- > 0; )
                      this.ybase === 0 ? this.y < t3 - 1 ? (this.y++, this.lines.pop()) : (this.ybase++, this.ydisp++) : this.ybase < Math.min(this.lines.maxLength, this.lines.length + o2) - t3 && (this.ybase === this.ydisp && this.ydisp++, this.ybase++);
                    this.savedY = Math.min(this.savedY + d, this.ybase + t3 - 1);
                  }
                }
              }
              if (i2.length > 0) {
                var L = [], A = [];
                for (v = 0; v < this.lines.length; v++)
                  A.push(this.lines.get(v));
                var R = this.lines.length, k = R - 1, x = 0, D = i2[x];
                this.lines.length = Math.min(this.lines.maxLength, this.lines.length + o2);
                var T = 0;
                for (v = Math.min(this.lines.maxLength - 1, R + o2 - 1); v >= 0; v--)
                  if (D && D.start > k + T) {
                    for (var O = D.newLines.length - 1; O >= 0; O--)
                      this.lines.set(v--, D.newLines[O]);
                    v++, L.push({index: k + 1, amount: D.newLines.length}), T += D.newLines.length, D = i2[++x];
                  } else
                    this.lines.set(v, A[k--]);
                var M = 0;
                for (v = L.length - 1; v >= 0; v--)
                  L[v].index += M, this.lines.onInsertEmitter.fire(L[v]), M += L[v].amount;
                var P = Math.max(0, R + o2 - this.lines.maxLength);
                P > 0 && this.lines.onTrimEmitter.fire(P);
              }
            }, e3.prototype.stringIndexToBufferIndex = function(e4, t3, r2) {
              for (r2 === void 0 && (r2 = false); t3; ) {
                var i2 = this.lines.get(e4);
                if (!i2)
                  return [-1, -1];
                for (var n2 = r2 ? i2.getTrimmedLength() : i2.length, o2 = 0; o2 < n2; ++o2)
                  if (i2.get(o2)[s.CHAR_DATA_WIDTH_INDEX] && (t3 -= i2.get(o2)[s.CHAR_DATA_CHAR_INDEX].length || 1), t3 < 0)
                    return [e4, o2];
                e4++;
              }
              return [e4, 0];
            }, e3.prototype.translateBufferLineToString = function(e4, t3, r2, i2) {
              r2 === void 0 && (r2 = 0);
              var n2 = this.lines.get(e4);
              return n2 ? n2.translateToString(t3, r2, i2) : "";
            }, e3.prototype.getWrappedRangeForLine = function(e4) {
              for (var t3 = e4, r2 = e4; t3 > 0 && this.lines.get(t3).isWrapped; )
                t3--;
              for (; r2 + 1 < this.lines.length && this.lines.get(r2 + 1).isWrapped; )
                r2++;
              return {first: t3, last: r2};
            }, e3.prototype.setupTabStops = function(e4) {
              for (e4 != null ? this.tabs[e4] || (e4 = this.prevStop(e4)) : (this.tabs = {}, e4 = 0); e4 < this._cols; e4 += this._optionsService.options.tabStopWidth)
                this.tabs[e4] = true;
            }, e3.prototype.prevStop = function(e4) {
              for (e4 == null && (e4 = this.x); !this.tabs[--e4] && e4 > 0; )
                ;
              return e4 >= this._cols ? this._cols - 1 : e4 < 0 ? 0 : e4;
            }, e3.prototype.nextStop = function(e4) {
              for (e4 == null && (e4 = this.x); !this.tabs[++e4] && e4 < this._cols; )
                ;
              return e4 >= this._cols ? this._cols - 1 : e4 < 0 ? 0 : e4;
            }, e3.prototype.addMarker = function(e4) {
              var t3 = this, r2 = new c.Marker(e4);
              return this.markers.push(r2), r2.register(this.lines.onTrim(function(e5) {
                r2.line -= e5, r2.line < 0 && r2.dispose();
              })), r2.register(this.lines.onInsert(function(e5) {
                r2.line >= e5.index && (r2.line += e5.amount);
              })), r2.register(this.lines.onDelete(function(e5) {
                r2.line >= e5.index && r2.line < e5.index + e5.amount && r2.dispose(), r2.line > e5.index && (r2.line -= e5.amount);
              })), r2.register(r2.onDispose(function() {
                return t3._removeMarker(r2);
              })), r2;
            }, e3.prototype._removeMarker = function(e4) {
              this.markers.splice(this.markers.indexOf(e4), 1);
            }, e3.prototype.iterator = function(e4, t3, r2, i2, n2) {
              return new f(this, e4, t3, r2, i2, n2);
            }, e3;
          }();
          t2.Buffer = u;
          var f = function() {
            function e3(e4, t3, r2, i2, n2, o2) {
              r2 === void 0 && (r2 = 0), i2 === void 0 && (i2 = e4.lines.length), n2 === void 0 && (n2 = 0), o2 === void 0 && (o2 = 0), this._buffer = e4, this._trimRight = t3, this._startIndex = r2, this._endIndex = i2, this._startOverscan = n2, this._endOverscan = o2, this._startIndex < 0 && (this._startIndex = 0), this._endIndex > this._buffer.lines.length && (this._endIndex = this._buffer.lines.length), this._current = this._startIndex;
            }
            return e3.prototype.hasNext = function() {
              return this._current < this._endIndex;
            }, e3.prototype.next = function() {
              var e4 = this._buffer.getWrappedRangeForLine(this._current);
              e4.first < this._startIndex - this._startOverscan && (e4.first = this._startIndex - this._startOverscan), e4.last > this._endIndex + this._endOverscan && (e4.last = this._endIndex + this._endOverscan), e4.first = Math.max(e4.first, 0), e4.last = Math.min(e4.last, this._buffer.lines.length);
              for (var t3 = "", r2 = e4.first; r2 <= e4.last; ++r2)
                t3 += this._buffer.translateBufferLineToString(r2, this._trimRight);
              return this._current = e4.last + 1, {range: e4, content: t3};
            }, e3;
          }();
          t2.BufferStringIterator = f;
        }, 8437: (e2, t2, r) => {
          Object.defineProperty(t2, "__esModule", {value: true}), t2.BufferLine = t2.DEFAULT_ATTR_DATA = void 0;
          var i = r(482), n = r(643), o = r(511), s = r(3734);
          t2.DEFAULT_ATTR_DATA = Object.freeze(new s.AttributeData());
          var a = function() {
            function e3(e4, t3, r2) {
              r2 === void 0 && (r2 = false), this.isWrapped = r2, this._combined = {}, this._extendedAttrs = {}, this._data = new Uint32Array(3 * e4);
              for (var i2 = t3 || o.CellData.fromCharData([0, n.NULL_CELL_CHAR, n.NULL_CELL_WIDTH, n.NULL_CELL_CODE]), s2 = 0; s2 < e4; ++s2)
                this.setCell(s2, i2);
              this.length = e4;
            }
            return e3.prototype.get = function(e4) {
              var t3 = this._data[3 * e4 + 0], r2 = 2097151 & t3;
              return [this._data[3 * e4 + 1], 2097152 & t3 ? this._combined[e4] : r2 ? i.stringFromCodePoint(r2) : "", t3 >> 22, 2097152 & t3 ? this._combined[e4].charCodeAt(this._combined[e4].length - 1) : r2];
            }, e3.prototype.set = function(e4, t3) {
              this._data[3 * e4 + 1] = t3[n.CHAR_DATA_ATTR_INDEX], t3[n.CHAR_DATA_CHAR_INDEX].length > 1 ? (this._combined[e4] = t3[1], this._data[3 * e4 + 0] = 2097152 | e4 | t3[n.CHAR_DATA_WIDTH_INDEX] << 22) : this._data[3 * e4 + 0] = t3[n.CHAR_DATA_CHAR_INDEX].charCodeAt(0) | t3[n.CHAR_DATA_WIDTH_INDEX] << 22;
            }, e3.prototype.getWidth = function(e4) {
              return this._data[3 * e4 + 0] >> 22;
            }, e3.prototype.hasWidth = function(e4) {
              return 12582912 & this._data[3 * e4 + 0];
            }, e3.prototype.getFg = function(e4) {
              return this._data[3 * e4 + 1];
            }, e3.prototype.getBg = function(e4) {
              return this._data[3 * e4 + 2];
            }, e3.prototype.hasContent = function(e4) {
              return 4194303 & this._data[3 * e4 + 0];
            }, e3.prototype.getCodePoint = function(e4) {
              var t3 = this._data[3 * e4 + 0];
              return 2097152 & t3 ? this._combined[e4].charCodeAt(this._combined[e4].length - 1) : 2097151 & t3;
            }, e3.prototype.isCombined = function(e4) {
              return 2097152 & this._data[3 * e4 + 0];
            }, e3.prototype.getString = function(e4) {
              var t3 = this._data[3 * e4 + 0];
              return 2097152 & t3 ? this._combined[e4] : 2097151 & t3 ? i.stringFromCodePoint(2097151 & t3) : "";
            }, e3.prototype.loadCell = function(e4, t3) {
              var r2 = 3 * e4;
              return t3.content = this._data[r2 + 0], t3.fg = this._data[r2 + 1], t3.bg = this._data[r2 + 2], 2097152 & t3.content && (t3.combinedData = this._combined[e4]), 268435456 & t3.bg && (t3.extended = this._extendedAttrs[e4]), t3;
            }, e3.prototype.setCell = function(e4, t3) {
              2097152 & t3.content && (this._combined[e4] = t3.combinedData), 268435456 & t3.bg && (this._extendedAttrs[e4] = t3.extended), this._data[3 * e4 + 0] = t3.content, this._data[3 * e4 + 1] = t3.fg, this._data[3 * e4 + 2] = t3.bg;
            }, e3.prototype.setCellFromCodePoint = function(e4, t3, r2, i2, n2, o2) {
              268435456 & n2 && (this._extendedAttrs[e4] = o2), this._data[3 * e4 + 0] = t3 | r2 << 22, this._data[3 * e4 + 1] = i2, this._data[3 * e4 + 2] = n2;
            }, e3.prototype.addCodepointToCell = function(e4, t3) {
              var r2 = this._data[3 * e4 + 0];
              2097152 & r2 ? this._combined[e4] += i.stringFromCodePoint(t3) : (2097151 & r2 ? (this._combined[e4] = i.stringFromCodePoint(2097151 & r2) + i.stringFromCodePoint(t3), r2 &= -2097152, r2 |= 2097152) : r2 = t3 | 1 << 22, this._data[3 * e4 + 0] = r2);
            }, e3.prototype.insertCells = function(e4, t3, r2, i2) {
              if ((e4 %= this.length) && this.getWidth(e4 - 1) === 2 && this.setCellFromCodePoint(e4 - 1, 0, 1, (i2 == null ? void 0 : i2.fg) || 0, (i2 == null ? void 0 : i2.bg) || 0, (i2 == null ? void 0 : i2.extended) || new s.ExtendedAttrs()), t3 < this.length - e4) {
                for (var n2 = new o.CellData(), a2 = this.length - e4 - t3 - 1; a2 >= 0; --a2)
                  this.setCell(e4 + t3 + a2, this.loadCell(e4 + a2, n2));
                for (a2 = 0; a2 < t3; ++a2)
                  this.setCell(e4 + a2, r2);
              } else
                for (a2 = e4; a2 < this.length; ++a2)
                  this.setCell(a2, r2);
              this.getWidth(this.length - 1) === 2 && this.setCellFromCodePoint(this.length - 1, 0, 1, (i2 == null ? void 0 : i2.fg) || 0, (i2 == null ? void 0 : i2.bg) || 0, (i2 == null ? void 0 : i2.extended) || new s.ExtendedAttrs());
            }, e3.prototype.deleteCells = function(e4, t3, r2, i2) {
              if (e4 %= this.length, t3 < this.length - e4) {
                for (var n2 = new o.CellData(), a2 = 0; a2 < this.length - e4 - t3; ++a2)
                  this.setCell(e4 + a2, this.loadCell(e4 + t3 + a2, n2));
                for (a2 = this.length - t3; a2 < this.length; ++a2)
                  this.setCell(a2, r2);
              } else
                for (a2 = e4; a2 < this.length; ++a2)
                  this.setCell(a2, r2);
              e4 && this.getWidth(e4 - 1) === 2 && this.setCellFromCodePoint(e4 - 1, 0, 1, (i2 == null ? void 0 : i2.fg) || 0, (i2 == null ? void 0 : i2.bg) || 0, (i2 == null ? void 0 : i2.extended) || new s.ExtendedAttrs()), this.getWidth(e4) !== 0 || this.hasContent(e4) || this.setCellFromCodePoint(e4, 0, 1, (i2 == null ? void 0 : i2.fg) || 0, (i2 == null ? void 0 : i2.bg) || 0, (i2 == null ? void 0 : i2.extended) || new s.ExtendedAttrs());
            }, e3.prototype.replaceCells = function(e4, t3, r2, i2) {
              for (e4 && this.getWidth(e4 - 1) === 2 && this.setCellFromCodePoint(e4 - 1, 0, 1, (i2 == null ? void 0 : i2.fg) || 0, (i2 == null ? void 0 : i2.bg) || 0, (i2 == null ? void 0 : i2.extended) || new s.ExtendedAttrs()), t3 < this.length && this.getWidth(t3 - 1) === 2 && this.setCellFromCodePoint(t3, 0, 1, (i2 == null ? void 0 : i2.fg) || 0, (i2 == null ? void 0 : i2.bg) || 0, (i2 == null ? void 0 : i2.extended) || new s.ExtendedAttrs()); e4 < t3 && e4 < this.length; )
                this.setCell(e4++, r2);
            }, e3.prototype.resize = function(e4, t3) {
              if (e4 !== this.length) {
                if (e4 > this.length) {
                  var r2 = new Uint32Array(3 * e4);
                  this.length && (3 * e4 < this._data.length ? r2.set(this._data.subarray(0, 3 * e4)) : r2.set(this._data)), this._data = r2;
                  for (var i2 = this.length; i2 < e4; ++i2)
                    this.setCell(i2, t3);
                } else if (e4) {
                  (r2 = new Uint32Array(3 * e4)).set(this._data.subarray(0, 3 * e4)), this._data = r2;
                  var n2 = Object.keys(this._combined);
                  for (i2 = 0; i2 < n2.length; i2++) {
                    var o2 = parseInt(n2[i2], 10);
                    o2 >= e4 && delete this._combined[o2];
                  }
                } else
                  this._data = new Uint32Array(0), this._combined = {};
                this.length = e4;
              }
            }, e3.prototype.fill = function(e4) {
              this._combined = {}, this._extendedAttrs = {};
              for (var t3 = 0; t3 < this.length; ++t3)
                this.setCell(t3, e4);
            }, e3.prototype.copyFrom = function(e4) {
              for (var t3 in this.length !== e4.length ? this._data = new Uint32Array(e4._data) : this._data.set(e4._data), this.length = e4.length, this._combined = {}, e4._combined)
                this._combined[t3] = e4._combined[t3];
              for (var t3 in this._extendedAttrs = {}, e4._extendedAttrs)
                this._extendedAttrs[t3] = e4._extendedAttrs[t3];
              this.isWrapped = e4.isWrapped;
            }, e3.prototype.clone = function() {
              var t3 = new e3(0);
              for (var r2 in t3._data = new Uint32Array(this._data), t3.length = this.length, this._combined)
                t3._combined[r2] = this._combined[r2];
              for (var r2 in this._extendedAttrs)
                t3._extendedAttrs[r2] = this._extendedAttrs[r2];
              return t3.isWrapped = this.isWrapped, t3;
            }, e3.prototype.getTrimmedLength = function() {
              for (var e4 = this.length - 1; e4 >= 0; --e4)
                if (4194303 & this._data[3 * e4 + 0])
                  return e4 + (this._data[3 * e4 + 0] >> 22);
              return 0;
            }, e3.prototype.copyCellsFrom = function(e4, t3, r2, i2, n2) {
              var o2 = e4._data;
              if (n2)
                for (var s2 = i2 - 1; s2 >= 0; s2--)
                  for (var a2 = 0; a2 < 3; a2++)
                    this._data[3 * (r2 + s2) + a2] = o2[3 * (t3 + s2) + a2];
              else
                for (s2 = 0; s2 < i2; s2++)
                  for (a2 = 0; a2 < 3; a2++)
                    this._data[3 * (r2 + s2) + a2] = o2[3 * (t3 + s2) + a2];
              var c = Object.keys(e4._combined);
              for (a2 = 0; a2 < c.length; a2++) {
                var l = parseInt(c[a2], 10);
                l >= t3 && (this._combined[l - t3 + r2] = e4._combined[l]);
              }
            }, e3.prototype.translateToString = function(e4, t3, r2) {
              e4 === void 0 && (e4 = false), t3 === void 0 && (t3 = 0), r2 === void 0 && (r2 = this.length), e4 && (r2 = Math.min(r2, this.getTrimmedLength()));
              for (var o2 = ""; t3 < r2; ) {
                var s2 = this._data[3 * t3 + 0], a2 = 2097151 & s2;
                o2 += 2097152 & s2 ? this._combined[t3] : a2 ? i.stringFromCodePoint(a2) : n.WHITESPACE_CELL_CHAR, t3 += s2 >> 22 || 1;
              }
              return o2;
            }, e3;
          }();
          t2.BufferLine = a;
        }, 4634: (e2, t2) => {
          function r(e3, t3, r2) {
            if (t3 === e3.length - 1)
              return e3[t3].getTrimmedLength();
            var i = !e3[t3].hasContent(r2 - 1) && e3[t3].getWidth(r2 - 1) === 1, n = e3[t3 + 1].getWidth(0) === 2;
            return i && n ? r2 - 1 : r2;
          }
          Object.defineProperty(t2, "__esModule", {value: true}), t2.getWrappedLineTrimmedLength = t2.reflowSmallerGetNewLineLengths = t2.reflowLargerApplyNewLayout = t2.reflowLargerCreateNewLayout = t2.reflowLargerGetLinesToRemove = void 0, t2.reflowLargerGetLinesToRemove = function(e3, t3, i, n, o) {
            for (var s = [], a = 0; a < e3.length - 1; a++) {
              var c = a, l = e3.get(++c);
              if (l.isWrapped) {
                for (var h = [e3.get(a)]; c < e3.length && l.isWrapped; )
                  h.push(l), l = e3.get(++c);
                if (n >= a && n < c)
                  a += h.length - 1;
                else {
                  for (var u = 0, f = r(h, u, t3), _ = 1, d = 0; _ < h.length; ) {
                    var p = r(h, _, t3), v = p - d, g = i - f, y = Math.min(v, g);
                    h[u].copyCellsFrom(h[_], d, f, y, false), (f += y) === i && (u++, f = 0), (d += y) === p && (_++, d = 0), f === 0 && u !== 0 && h[u - 1].getWidth(i - 1) === 2 && (h[u].copyCellsFrom(h[u - 1], i - 1, f++, 1, false), h[u - 1].setCell(i - 1, o));
                  }
                  h[u].replaceCells(f, i, o);
                  for (var b = 0, S = h.length - 1; S > 0 && (S > u || h[S].getTrimmedLength() === 0); S--)
                    b++;
                  b > 0 && (s.push(a + h.length - b), s.push(b)), a += h.length - 1;
                }
              }
            }
            return s;
          }, t2.reflowLargerCreateNewLayout = function(e3, t3) {
            for (var r2 = [], i = 0, n = t3[i], o = 0, s = 0; s < e3.length; s++)
              if (n === s) {
                var a = t3[++i];
                e3.onDeleteEmitter.fire({index: s - o, amount: a}), s += a - 1, o += a, n = t3[++i];
              } else
                r2.push(s);
            return {layout: r2, countRemoved: o};
          }, t2.reflowLargerApplyNewLayout = function(e3, t3) {
            for (var r2 = [], i = 0; i < t3.length; i++)
              r2.push(e3.get(t3[i]));
            for (i = 0; i < r2.length; i++)
              e3.set(i, r2[i]);
            e3.length = t3.length;
          }, t2.reflowSmallerGetNewLineLengths = function(e3, t3, i) {
            for (var n = [], o = e3.map(function(i2, n2) {
              return r(e3, n2, t3);
            }).reduce(function(e4, t4) {
              return e4 + t4;
            }), s = 0, a = 0, c = 0; c < o; ) {
              if (o - c < i) {
                n.push(o - c);
                break;
              }
              s += i;
              var l = r(e3, a, t3);
              s > l && (s -= l, a++);
              var h = e3[a].getWidth(s - 1) === 2;
              h && s--;
              var u = h ? i - 1 : i;
              n.push(u), c += u;
            }
            return n;
          }, t2.getWrappedLineTrimmedLength = r;
        }, 5295: function(e2, t2, r) {
          var i, n = this && this.__extends || (i = function(e3, t3) {
            return (i = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(e4, t4) {
              e4.__proto__ = t4;
            } || function(e4, t4) {
              for (var r2 in t4)
                Object.prototype.hasOwnProperty.call(t4, r2) && (e4[r2] = t4[r2]);
            })(e3, t3);
          }, function(e3, t3) {
            function r2() {
              this.constructor = e3;
            }
            i(e3, t3), e3.prototype = t3 === null ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
          });
          Object.defineProperty(t2, "__esModule", {value: true}), t2.BufferSet = void 0;
          var o = r(9092), s = r(8460), a = function(e3) {
            function t3(t4, r2) {
              var i2 = e3.call(this) || this;
              return i2._optionsService = t4, i2._bufferService = r2, i2._onBufferActivate = i2.register(new s.EventEmitter()), i2.reset(), i2;
            }
            return n(t3, e3), Object.defineProperty(t3.prototype, "onBufferActivate", {get: function() {
              return this._onBufferActivate.event;
            }, enumerable: false, configurable: true}), t3.prototype.reset = function() {
              this._normal = new o.Buffer(true, this._optionsService, this._bufferService), this._normal.fillViewportRows(), this._alt = new o.Buffer(false, this._optionsService, this._bufferService), this._activeBuffer = this._normal, this.setupTabStops();
            }, Object.defineProperty(t3.prototype, "alt", {get: function() {
              return this._alt;
            }, enumerable: false, configurable: true}), Object.defineProperty(t3.prototype, "active", {get: function() {
              return this._activeBuffer;
            }, enumerable: false, configurable: true}), Object.defineProperty(t3.prototype, "normal", {get: function() {
              return this._normal;
            }, enumerable: false, configurable: true}), t3.prototype.activateNormalBuffer = function() {
              this._activeBuffer !== this._normal && (this._normal.x = this._alt.x, this._normal.y = this._alt.y, this._alt.clear(), this._activeBuffer = this._normal, this._onBufferActivate.fire({activeBuffer: this._normal, inactiveBuffer: this._alt}));
            }, t3.prototype.activateAltBuffer = function(e4) {
              this._activeBuffer !== this._alt && (this._alt.fillViewportRows(e4), this._alt.x = this._normal.x, this._alt.y = this._normal.y, this._activeBuffer = this._alt, this._onBufferActivate.fire({activeBuffer: this._alt, inactiveBuffer: this._normal}));
            }, t3.prototype.resize = function(e4, t4) {
              this._normal.resize(e4, t4), this._alt.resize(e4, t4);
            }, t3.prototype.setupTabStops = function(e4) {
              this._normal.setupTabStops(e4), this._alt.setupTabStops(e4);
            }, t3;
          }(r(844).Disposable);
          t2.BufferSet = a;
        }, 511: function(e2, t2, r) {
          var i, n = this && this.__extends || (i = function(e3, t3) {
            return (i = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(e4, t4) {
              e4.__proto__ = t4;
            } || function(e4, t4) {
              for (var r2 in t4)
                Object.prototype.hasOwnProperty.call(t4, r2) && (e4[r2] = t4[r2]);
            })(e3, t3);
          }, function(e3, t3) {
            function r2() {
              this.constructor = e3;
            }
            i(e3, t3), e3.prototype = t3 === null ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
          });
          Object.defineProperty(t2, "__esModule", {value: true}), t2.CellData = void 0;
          var o = r(482), s = r(643), a = r(3734), c = function(e3) {
            function t3() {
              var t4 = e3 !== null && e3.apply(this, arguments) || this;
              return t4.content = 0, t4.fg = 0, t4.bg = 0, t4.extended = new a.ExtendedAttrs(), t4.combinedData = "", t4;
            }
            return n(t3, e3), t3.fromCharData = function(e4) {
              var r2 = new t3();
              return r2.setFromCharData(e4), r2;
            }, t3.prototype.isCombined = function() {
              return 2097152 & this.content;
            }, t3.prototype.getWidth = function() {
              return this.content >> 22;
            }, t3.prototype.getChars = function() {
              return 2097152 & this.content ? this.combinedData : 2097151 & this.content ? o.stringFromCodePoint(2097151 & this.content) : "";
            }, t3.prototype.getCode = function() {
              return this.isCombined() ? this.combinedData.charCodeAt(this.combinedData.length - 1) : 2097151 & this.content;
            }, t3.prototype.setFromCharData = function(e4) {
              this.fg = e4[s.CHAR_DATA_ATTR_INDEX], this.bg = 0;
              var t4 = false;
              if (e4[s.CHAR_DATA_CHAR_INDEX].length > 2)
                t4 = true;
              else if (e4[s.CHAR_DATA_CHAR_INDEX].length === 2) {
                var r2 = e4[s.CHAR_DATA_CHAR_INDEX].charCodeAt(0);
                if (55296 <= r2 && r2 <= 56319) {
                  var i2 = e4[s.CHAR_DATA_CHAR_INDEX].charCodeAt(1);
                  56320 <= i2 && i2 <= 57343 ? this.content = 1024 * (r2 - 55296) + i2 - 56320 + 65536 | e4[s.CHAR_DATA_WIDTH_INDEX] << 22 : t4 = true;
                } else
                  t4 = true;
              } else
                this.content = e4[s.CHAR_DATA_CHAR_INDEX].charCodeAt(0) | e4[s.CHAR_DATA_WIDTH_INDEX] << 22;
              t4 && (this.combinedData = e4[s.CHAR_DATA_CHAR_INDEX], this.content = 2097152 | e4[s.CHAR_DATA_WIDTH_INDEX] << 22);
            }, t3.prototype.getAsCharData = function() {
              return [this.fg, this.getChars(), this.getWidth(), this.getCode()];
            }, t3;
          }(a.AttributeData);
          t2.CellData = c;
        }, 643: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", {value: true}), t2.WHITESPACE_CELL_CODE = t2.WHITESPACE_CELL_WIDTH = t2.WHITESPACE_CELL_CHAR = t2.NULL_CELL_CODE = t2.NULL_CELL_WIDTH = t2.NULL_CELL_CHAR = t2.CHAR_DATA_CODE_INDEX = t2.CHAR_DATA_WIDTH_INDEX = t2.CHAR_DATA_CHAR_INDEX = t2.CHAR_DATA_ATTR_INDEX = t2.DEFAULT_ATTR = t2.DEFAULT_COLOR = void 0, t2.DEFAULT_COLOR = 256, t2.DEFAULT_ATTR = 256 | t2.DEFAULT_COLOR << 9, t2.CHAR_DATA_ATTR_INDEX = 0, t2.CHAR_DATA_CHAR_INDEX = 1, t2.CHAR_DATA_WIDTH_INDEX = 2, t2.CHAR_DATA_CODE_INDEX = 3, t2.NULL_CELL_CHAR = "", t2.NULL_CELL_WIDTH = 1, t2.NULL_CELL_CODE = 0, t2.WHITESPACE_CELL_CHAR = " ", t2.WHITESPACE_CELL_WIDTH = 1, t2.WHITESPACE_CELL_CODE = 32;
        }, 4863: function(e2, t2, r) {
          var i, n = this && this.__extends || (i = function(e3, t3) {
            return (i = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(e4, t4) {
              e4.__proto__ = t4;
            } || function(e4, t4) {
              for (var r2 in t4)
                Object.prototype.hasOwnProperty.call(t4, r2) && (e4[r2] = t4[r2]);
            })(e3, t3);
          }, function(e3, t3) {
            function r2() {
              this.constructor = e3;
            }
            i(e3, t3), e3.prototype = t3 === null ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
          });
          Object.defineProperty(t2, "__esModule", {value: true}), t2.Marker = void 0;
          var o = r(8460), s = function(e3) {
            function t3(r2) {
              var i2 = e3.call(this) || this;
              return i2.line = r2, i2._id = t3._nextId++, i2.isDisposed = false, i2._onDispose = new o.EventEmitter(), i2;
            }
            return n(t3, e3), Object.defineProperty(t3.prototype, "id", {get: function() {
              return this._id;
            }, enumerable: false, configurable: true}), Object.defineProperty(t3.prototype, "onDispose", {get: function() {
              return this._onDispose.event;
            }, enumerable: false, configurable: true}), t3.prototype.dispose = function() {
              this.isDisposed || (this.isDisposed = true, this.line = -1, this._onDispose.fire(), e3.prototype.dispose.call(this));
            }, t3._nextId = 1, t3;
          }(r(844).Disposable);
          t2.Marker = s;
        }, 7116: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", {value: true}), t2.DEFAULT_CHARSET = t2.CHARSETS = void 0, t2.CHARSETS = {}, t2.DEFAULT_CHARSET = t2.CHARSETS.B, t2.CHARSETS[0] = {"`": "\u25C6", a: "\u2592", b: "\u2409", c: "\u240C", d: "\u240D", e: "\u240A", f: "\xB0", g: "\xB1", h: "\u2424", i: "\u240B", j: "\u2518", k: "\u2510", l: "\u250C", m: "\u2514", n: "\u253C", o: "\u23BA", p: "\u23BB", q: "\u2500", r: "\u23BC", s: "\u23BD", t: "\u251C", u: "\u2524", v: "\u2534", w: "\u252C", x: "\u2502", y: "\u2264", z: "\u2265", "{": "\u03C0", "|": "\u2260", "}": "\xA3", "~": "\xB7"}, t2.CHARSETS.A = {"#": "\xA3"}, t2.CHARSETS.B = void 0, t2.CHARSETS[4] = {"#": "\xA3", "@": "\xBE", "[": "ij", "\\": "\xBD", "]": "|", "{": "\xA8", "|": "f", "}": "\xBC", "~": "\xB4"}, t2.CHARSETS.C = t2.CHARSETS[5] = {"[": "\xC4", "\\": "\xD6", "]": "\xC5", "^": "\xDC", "`": "\xE9", "{": "\xE4", "|": "\xF6", "}": "\xE5", "~": "\xFC"}, t2.CHARSETS.R = {"#": "\xA3", "@": "\xE0", "[": "\xB0", "\\": "\xE7", "]": "\xA7", "{": "\xE9", "|": "\xF9", "}": "\xE8", "~": "\xA8"}, t2.CHARSETS.Q = {"@": "\xE0", "[": "\xE2", "\\": "\xE7", "]": "\xEA", "^": "\xEE", "`": "\xF4", "{": "\xE9", "|": "\xF9", "}": "\xE8", "~": "\xFB"}, t2.CHARSETS.K = {"@": "\xA7", "[": "\xC4", "\\": "\xD6", "]": "\xDC", "{": "\xE4", "|": "\xF6", "}": "\xFC", "~": "\xDF"}, t2.CHARSETS.Y = {"#": "\xA3", "@": "\xA7", "[": "\xB0", "\\": "\xE7", "]": "\xE9", "`": "\xF9", "{": "\xE0", "|": "\xF2", "}": "\xE8", "~": "\xEC"}, t2.CHARSETS.E = t2.CHARSETS[6] = {"@": "\xC4", "[": "\xC6", "\\": "\xD8", "]": "\xC5", "^": "\xDC", "`": "\xE4", "{": "\xE6", "|": "\xF8", "}": "\xE5", "~": "\xFC"}, t2.CHARSETS.Z = {"#": "\xA3", "@": "\xA7", "[": "\xA1", "\\": "\xD1", "]": "\xBF", "{": "\xB0", "|": "\xF1", "}": "\xE7"}, t2.CHARSETS.H = t2.CHARSETS[7] = {"@": "\xC9", "[": "\xC4", "\\": "\xD6", "]": "\xC5", "^": "\xDC", "`": "\xE9", "{": "\xE4", "|": "\xF6", "}": "\xE5", "~": "\xFC"}, t2.CHARSETS["="] = {"#": "\xF9", "@": "\xE0", "[": "\xE9", "\\": "\xE7", "]": "\xEA", "^": "\xEE", _: "\xE8", "`": "\xF4", "{": "\xE4", "|": "\xF6", "}": "\xFC", "~": "\xFB"};
        }, 2584: (e2, t2) => {
          var r, i;
          Object.defineProperty(t2, "__esModule", {value: true}), t2.C1 = t2.C0 = void 0, (i = t2.C0 || (t2.C0 = {})).NUL = "\0", i.SOH = "", i.STX = "", i.ETX = "", i.EOT = "", i.ENQ = "", i.ACK = "", i.BEL = "\x07", i.BS = "\b", i.HT = "	", i.LF = "\n", i.VT = "\v", i.FF = "\f", i.CR = "\r", i.SO = "", i.SI = "", i.DLE = "", i.DC1 = "", i.DC2 = "", i.DC3 = "", i.DC4 = "", i.NAK = "", i.SYN = "", i.ETB = "", i.CAN = "", i.EM = "", i.SUB = "", i.ESC = "", i.FS = "", i.GS = "", i.RS = "", i.US = "", i.SP = " ", i.DEL = "\x7F", (r = t2.C1 || (t2.C1 = {})).PAD = "\x80", r.HOP = "\x81", r.BPH = "\x82", r.NBH = "\x83", r.IND = "\x84", r.NEL = "\x85", r.SSA = "\x86", r.ESA = "\x87", r.HTS = "\x88", r.HTJ = "\x89", r.VTS = "\x8A", r.PLD = "\x8B", r.PLU = "\x8C", r.RI = "\x8D", r.SS2 = "\x8E", r.SS3 = "\x8F", r.DCS = "\x90", r.PU1 = "\x91", r.PU2 = "\x92", r.STS = "\x93", r.CCH = "\x94", r.MW = "\x95", r.SPA = "\x96", r.EPA = "\x97", r.SOS = "\x98", r.SGCI = "\x99", r.SCI = "\x9A", r.CSI = "\x9B", r.ST = "\x9C", r.OSC = "\x9D", r.PM = "\x9E", r.APC = "\x9F";
        }, 7399: (e2, t2, r) => {
          Object.defineProperty(t2, "__esModule", {value: true}), t2.evaluateKeyboardEvent = void 0;
          var i = r(2584), n = {48: ["0", ")"], 49: ["1", "!"], 50: ["2", "@"], 51: ["3", "#"], 52: ["4", "$"], 53: ["5", "%"], 54: ["6", "^"], 55: ["7", "&"], 56: ["8", "*"], 57: ["9", "("], 186: [";", ":"], 187: ["=", "+"], 188: [",", "<"], 189: ["-", "_"], 190: [".", ">"], 191: ["/", "?"], 192: ["`", "~"], 219: ["[", "{"], 220: ["\\", "|"], 221: ["]", "}"], 222: ["'", '"']};
          t2.evaluateKeyboardEvent = function(e3, t3, r2, o) {
            var s = {type: 0, cancel: false, key: void 0}, a = (e3.shiftKey ? 1 : 0) | (e3.altKey ? 2 : 0) | (e3.ctrlKey ? 4 : 0) | (e3.metaKey ? 8 : 0);
            switch (e3.keyCode) {
              case 0:
                e3.key === "UIKeyInputUpArrow" ? s.key = t3 ? i.C0.ESC + "OA" : i.C0.ESC + "[A" : e3.key === "UIKeyInputLeftArrow" ? s.key = t3 ? i.C0.ESC + "OD" : i.C0.ESC + "[D" : e3.key === "UIKeyInputRightArrow" ? s.key = t3 ? i.C0.ESC + "OC" : i.C0.ESC + "[C" : e3.key === "UIKeyInputDownArrow" && (s.key = t3 ? i.C0.ESC + "OB" : i.C0.ESC + "[B");
                break;
              case 8:
                if (e3.shiftKey) {
                  s.key = i.C0.BS;
                  break;
                }
                if (e3.altKey) {
                  s.key = i.C0.ESC + i.C0.DEL;
                  break;
                }
                s.key = i.C0.DEL;
                break;
              case 9:
                if (e3.shiftKey) {
                  s.key = i.C0.ESC + "[Z";
                  break;
                }
                s.key = i.C0.HT, s.cancel = true;
                break;
              case 13:
                s.key = e3.altKey ? i.C0.ESC + i.C0.CR : i.C0.CR, s.cancel = true;
                break;
              case 27:
                s.key = i.C0.ESC, e3.altKey && (s.key = i.C0.ESC + i.C0.ESC), s.cancel = true;
                break;
              case 37:
                if (e3.metaKey)
                  break;
                a ? (s.key = i.C0.ESC + "[1;" + (a + 1) + "D", s.key === i.C0.ESC + "[1;3D" && (s.key = i.C0.ESC + (r2 ? "b" : "[1;5D"))) : s.key = t3 ? i.C0.ESC + "OD" : i.C0.ESC + "[D";
                break;
              case 39:
                if (e3.metaKey)
                  break;
                a ? (s.key = i.C0.ESC + "[1;" + (a + 1) + "C", s.key === i.C0.ESC + "[1;3C" && (s.key = i.C0.ESC + (r2 ? "f" : "[1;5C"))) : s.key = t3 ? i.C0.ESC + "OC" : i.C0.ESC + "[C";
                break;
              case 38:
                if (e3.metaKey)
                  break;
                a ? (s.key = i.C0.ESC + "[1;" + (a + 1) + "A", r2 || s.key !== i.C0.ESC + "[1;3A" || (s.key = i.C0.ESC + "[1;5A")) : s.key = t3 ? i.C0.ESC + "OA" : i.C0.ESC + "[A";
                break;
              case 40:
                if (e3.metaKey)
                  break;
                a ? (s.key = i.C0.ESC + "[1;" + (a + 1) + "B", r2 || s.key !== i.C0.ESC + "[1;3B" || (s.key = i.C0.ESC + "[1;5B")) : s.key = t3 ? i.C0.ESC + "OB" : i.C0.ESC + "[B";
                break;
              case 45:
                e3.shiftKey || e3.ctrlKey || (s.key = i.C0.ESC + "[2~");
                break;
              case 46:
                s.key = a ? i.C0.ESC + "[3;" + (a + 1) + "~" : i.C0.ESC + "[3~";
                break;
              case 36:
                s.key = a ? i.C0.ESC + "[1;" + (a + 1) + "H" : t3 ? i.C0.ESC + "OH" : i.C0.ESC + "[H";
                break;
              case 35:
                s.key = a ? i.C0.ESC + "[1;" + (a + 1) + "F" : t3 ? i.C0.ESC + "OF" : i.C0.ESC + "[F";
                break;
              case 33:
                e3.shiftKey ? s.type = 2 : s.key = i.C0.ESC + "[5~";
                break;
              case 34:
                e3.shiftKey ? s.type = 3 : s.key = i.C0.ESC + "[6~";
                break;
              case 112:
                s.key = a ? i.C0.ESC + "[1;" + (a + 1) + "P" : i.C0.ESC + "OP";
                break;
              case 113:
                s.key = a ? i.C0.ESC + "[1;" + (a + 1) + "Q" : i.C0.ESC + "OQ";
                break;
              case 114:
                s.key = a ? i.C0.ESC + "[1;" + (a + 1) + "R" : i.C0.ESC + "OR";
                break;
              case 115:
                s.key = a ? i.C0.ESC + "[1;" + (a + 1) + "S" : i.C0.ESC + "OS";
                break;
              case 116:
                s.key = a ? i.C0.ESC + "[15;" + (a + 1) + "~" : i.C0.ESC + "[15~";
                break;
              case 117:
                s.key = a ? i.C0.ESC + "[17;" + (a + 1) + "~" : i.C0.ESC + "[17~";
                break;
              case 118:
                s.key = a ? i.C0.ESC + "[18;" + (a + 1) + "~" : i.C0.ESC + "[18~";
                break;
              case 119:
                s.key = a ? i.C0.ESC + "[19;" + (a + 1) + "~" : i.C0.ESC + "[19~";
                break;
              case 120:
                s.key = a ? i.C0.ESC + "[20;" + (a + 1) + "~" : i.C0.ESC + "[20~";
                break;
              case 121:
                s.key = a ? i.C0.ESC + "[21;" + (a + 1) + "~" : i.C0.ESC + "[21~";
                break;
              case 122:
                s.key = a ? i.C0.ESC + "[23;" + (a + 1) + "~" : i.C0.ESC + "[23~";
                break;
              case 123:
                s.key = a ? i.C0.ESC + "[24;" + (a + 1) + "~" : i.C0.ESC + "[24~";
                break;
              default:
                if (!e3.ctrlKey || e3.shiftKey || e3.altKey || e3.metaKey)
                  if (r2 && !o || !e3.altKey || e3.metaKey)
                    !r2 || e3.altKey || e3.ctrlKey || e3.shiftKey || !e3.metaKey ? e3.key && !e3.ctrlKey && !e3.altKey && !e3.metaKey && e3.keyCode >= 48 && e3.key.length === 1 ? s.key = e3.key : e3.key && e3.ctrlKey && e3.key === "_" && (s.key = i.C0.US) : e3.keyCode === 65 && (s.type = 1);
                  else {
                    var c = n[e3.keyCode], l = c && c[e3.shiftKey ? 1 : 0];
                    if (l)
                      s.key = i.C0.ESC + l;
                    else if (e3.keyCode >= 65 && e3.keyCode <= 90) {
                      var h = e3.ctrlKey ? e3.keyCode - 64 : e3.keyCode + 32;
                      s.key = i.C0.ESC + String.fromCharCode(h);
                    }
                  }
                else
                  e3.keyCode >= 65 && e3.keyCode <= 90 ? s.key = String.fromCharCode(e3.keyCode - 64) : e3.keyCode === 32 ? s.key = i.C0.NUL : e3.keyCode >= 51 && e3.keyCode <= 55 ? s.key = String.fromCharCode(e3.keyCode - 51 + 27) : e3.keyCode === 56 ? s.key = i.C0.DEL : e3.keyCode === 219 ? s.key = i.C0.ESC : e3.keyCode === 220 ? s.key = i.C0.FS : e3.keyCode === 221 && (s.key = i.C0.GS);
            }
            return s;
          };
        }, 482: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", {value: true}), t2.Utf8ToUtf32 = t2.StringToUtf32 = t2.utf32ToString = t2.stringFromCodePoint = void 0, t2.stringFromCodePoint = function(e3) {
            return e3 > 65535 ? (e3 -= 65536, String.fromCharCode(55296 + (e3 >> 10)) + String.fromCharCode(e3 % 1024 + 56320)) : String.fromCharCode(e3);
          }, t2.utf32ToString = function(e3, t3, r2) {
            t3 === void 0 && (t3 = 0), r2 === void 0 && (r2 = e3.length);
            for (var i2 = "", n = t3; n < r2; ++n) {
              var o = e3[n];
              o > 65535 ? (o -= 65536, i2 += String.fromCharCode(55296 + (o >> 10)) + String.fromCharCode(o % 1024 + 56320)) : i2 += String.fromCharCode(o);
            }
            return i2;
          };
          var r = function() {
            function e3() {
              this._interim = 0;
            }
            return e3.prototype.clear = function() {
              this._interim = 0;
            }, e3.prototype.decode = function(e4, t3) {
              var r2 = e4.length;
              if (!r2)
                return 0;
              var i2 = 0, n = 0;
              this._interim && (56320 <= (a = e4.charCodeAt(n++)) && a <= 57343 ? t3[i2++] = 1024 * (this._interim - 55296) + a - 56320 + 65536 : (t3[i2++] = this._interim, t3[i2++] = a), this._interim = 0);
              for (var o = n; o < r2; ++o) {
                var s = e4.charCodeAt(o);
                if (55296 <= s && s <= 56319) {
                  if (++o >= r2)
                    return this._interim = s, i2;
                  var a;
                  56320 <= (a = e4.charCodeAt(o)) && a <= 57343 ? t3[i2++] = 1024 * (s - 55296) + a - 56320 + 65536 : (t3[i2++] = s, t3[i2++] = a);
                } else
                  s !== 65279 && (t3[i2++] = s);
              }
              return i2;
            }, e3;
          }();
          t2.StringToUtf32 = r;
          var i = function() {
            function e3() {
              this.interim = new Uint8Array(3);
            }
            return e3.prototype.clear = function() {
              this.interim.fill(0);
            }, e3.prototype.decode = function(e4, t3) {
              var r2 = e4.length;
              if (!r2)
                return 0;
              var i2, n, o, s, a = 0, c = 0, l = 0;
              if (this.interim[0]) {
                var h = false, u = this.interim[0];
                u &= (224 & u) == 192 ? 31 : (240 & u) == 224 ? 15 : 7;
                for (var f = 0, _ = void 0; (_ = 63 & this.interim[++f]) && f < 4; )
                  u <<= 6, u |= _;
                for (var d = (224 & this.interim[0]) == 192 ? 2 : (240 & this.interim[0]) == 224 ? 3 : 4, p = d - f; l < p; ) {
                  if (l >= r2)
                    return 0;
                  if ((192 & (_ = e4[l++])) != 128) {
                    l--, h = true;
                    break;
                  }
                  this.interim[f++] = _, u <<= 6, u |= 63 & _;
                }
                h || (d === 2 ? u < 128 ? l-- : t3[a++] = u : d === 3 ? u < 2048 || u >= 55296 && u <= 57343 || u === 65279 || (t3[a++] = u) : u < 65536 || u > 1114111 || (t3[a++] = u)), this.interim.fill(0);
              }
              for (var v = r2 - 4, g = l; g < r2; ) {
                for (; !(!(g < v) || 128 & (i2 = e4[g]) || 128 & (n = e4[g + 1]) || 128 & (o = e4[g + 2]) || 128 & (s = e4[g + 3])); )
                  t3[a++] = i2, t3[a++] = n, t3[a++] = o, t3[a++] = s, g += 4;
                if ((i2 = e4[g++]) < 128)
                  t3[a++] = i2;
                else if ((224 & i2) == 192) {
                  if (g >= r2)
                    return this.interim[0] = i2, a;
                  if ((192 & (n = e4[g++])) != 128) {
                    g--;
                    continue;
                  }
                  if ((c = (31 & i2) << 6 | 63 & n) < 128) {
                    g--;
                    continue;
                  }
                  t3[a++] = c;
                } else if ((240 & i2) == 224) {
                  if (g >= r2)
                    return this.interim[0] = i2, a;
                  if ((192 & (n = e4[g++])) != 128) {
                    g--;
                    continue;
                  }
                  if (g >= r2)
                    return this.interim[0] = i2, this.interim[1] = n, a;
                  if ((192 & (o = e4[g++])) != 128) {
                    g--;
                    continue;
                  }
                  if ((c = (15 & i2) << 12 | (63 & n) << 6 | 63 & o) < 2048 || c >= 55296 && c <= 57343 || c === 65279)
                    continue;
                  t3[a++] = c;
                } else if ((248 & i2) == 240) {
                  if (g >= r2)
                    return this.interim[0] = i2, a;
                  if ((192 & (n = e4[g++])) != 128) {
                    g--;
                    continue;
                  }
                  if (g >= r2)
                    return this.interim[0] = i2, this.interim[1] = n, a;
                  if ((192 & (o = e4[g++])) != 128) {
                    g--;
                    continue;
                  }
                  if (g >= r2)
                    return this.interim[0] = i2, this.interim[1] = n, this.interim[2] = o, a;
                  if ((192 & (s = e4[g++])) != 128) {
                    g--;
                    continue;
                  }
                  if ((c = (7 & i2) << 18 | (63 & n) << 12 | (63 & o) << 6 | 63 & s) < 65536 || c > 1114111)
                    continue;
                  t3[a++] = c;
                }
              }
              return a;
            }, e3;
          }();
          t2.Utf8ToUtf32 = i;
        }, 225: (e2, t2, r) => {
          Object.defineProperty(t2, "__esModule", {value: true}), t2.UnicodeV6 = void 0;
          var i, n = r(8273), o = [[768, 879], [1155, 1158], [1160, 1161], [1425, 1469], [1471, 1471], [1473, 1474], [1476, 1477], [1479, 1479], [1536, 1539], [1552, 1557], [1611, 1630], [1648, 1648], [1750, 1764], [1767, 1768], [1770, 1773], [1807, 1807], [1809, 1809], [1840, 1866], [1958, 1968], [2027, 2035], [2305, 2306], [2364, 2364], [2369, 2376], [2381, 2381], [2385, 2388], [2402, 2403], [2433, 2433], [2492, 2492], [2497, 2500], [2509, 2509], [2530, 2531], [2561, 2562], [2620, 2620], [2625, 2626], [2631, 2632], [2635, 2637], [2672, 2673], [2689, 2690], [2748, 2748], [2753, 2757], [2759, 2760], [2765, 2765], [2786, 2787], [2817, 2817], [2876, 2876], [2879, 2879], [2881, 2883], [2893, 2893], [2902, 2902], [2946, 2946], [3008, 3008], [3021, 3021], [3134, 3136], [3142, 3144], [3146, 3149], [3157, 3158], [3260, 3260], [3263, 3263], [3270, 3270], [3276, 3277], [3298, 3299], [3393, 3395], [3405, 3405], [3530, 3530], [3538, 3540], [3542, 3542], [3633, 3633], [3636, 3642], [3655, 3662], [3761, 3761], [3764, 3769], [3771, 3772], [3784, 3789], [3864, 3865], [3893, 3893], [3895, 3895], [3897, 3897], [3953, 3966], [3968, 3972], [3974, 3975], [3984, 3991], [3993, 4028], [4038, 4038], [4141, 4144], [4146, 4146], [4150, 4151], [4153, 4153], [4184, 4185], [4448, 4607], [4959, 4959], [5906, 5908], [5938, 5940], [5970, 5971], [6002, 6003], [6068, 6069], [6071, 6077], [6086, 6086], [6089, 6099], [6109, 6109], [6155, 6157], [6313, 6313], [6432, 6434], [6439, 6440], [6450, 6450], [6457, 6459], [6679, 6680], [6912, 6915], [6964, 6964], [6966, 6970], [6972, 6972], [6978, 6978], [7019, 7027], [7616, 7626], [7678, 7679], [8203, 8207], [8234, 8238], [8288, 8291], [8298, 8303], [8400, 8431], [12330, 12335], [12441, 12442], [43014, 43014], [43019, 43019], [43045, 43046], [64286, 64286], [65024, 65039], [65056, 65059], [65279, 65279], [65529, 65531]], s = [[68097, 68099], [68101, 68102], [68108, 68111], [68152, 68154], [68159, 68159], [119143, 119145], [119155, 119170], [119173, 119179], [119210, 119213], [119362, 119364], [917505, 917505], [917536, 917631], [917760, 917999]], a = function() {
            function e3() {
              if (this.version = "6", !i) {
                i = new Uint8Array(65536), n.fill(i, 1), i[0] = 0, n.fill(i, 0, 1, 32), n.fill(i, 0, 127, 160), n.fill(i, 2, 4352, 4448), i[9001] = 2, i[9002] = 2, n.fill(i, 2, 11904, 42192), i[12351] = 1, n.fill(i, 2, 44032, 55204), n.fill(i, 2, 63744, 64256), n.fill(i, 2, 65040, 65050), n.fill(i, 2, 65072, 65136), n.fill(i, 2, 65280, 65377), n.fill(i, 2, 65504, 65511);
                for (var e4 = 0; e4 < o.length; ++e4)
                  n.fill(i, 0, o[e4][0], o[e4][1] + 1);
              }
            }
            return e3.prototype.wcwidth = function(e4) {
              return e4 < 32 ? 0 : e4 < 127 ? 1 : e4 < 65536 ? i[e4] : function(e5, t3) {
                var r2, i2 = 0, n2 = t3.length - 1;
                if (e5 < t3[0][0] || e5 > t3[n2][1])
                  return false;
                for (; n2 >= i2; )
                  if (e5 > t3[r2 = i2 + n2 >> 1][1])
                    i2 = r2 + 1;
                  else {
                    if (!(e5 < t3[r2][0]))
                      return true;
                    n2 = r2 - 1;
                  }
                return false;
              }(e4, s) ? 0 : e4 >= 131072 && e4 <= 196605 || e4 >= 196608 && e4 <= 262141 ? 2 : 1;
            }, e3;
          }();
          t2.UnicodeV6 = a;
        }, 5981: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", {value: true}), t2.WriteBuffer = void 0;
          var r = function() {
            function e3(e4) {
              this._action = e4, this._writeBuffer = [], this._callbacks = [], this._pendingData = 0, this._bufferOffset = 0;
            }
            return e3.prototype.writeSync = function(e4) {
              if (this._writeBuffer.length) {
                for (var t3 = this._bufferOffset; t3 < this._writeBuffer.length; ++t3) {
                  var r2 = this._writeBuffer[t3], i = this._callbacks[t3];
                  this._action(r2), i && i();
                }
                this._writeBuffer = [], this._callbacks = [], this._pendingData = 0, this._bufferOffset = 2147483647;
              }
              this._action(e4);
            }, e3.prototype.write = function(e4, t3) {
              var r2 = this;
              if (this._pendingData > 5e7)
                throw new Error("write data discarded, use flow control to avoid losing data");
              this._writeBuffer.length || (this._bufferOffset = 0, setTimeout(function() {
                return r2._innerWrite();
              })), this._pendingData += e4.length, this._writeBuffer.push(e4), this._callbacks.push(t3);
            }, e3.prototype._innerWrite = function() {
              for (var e4 = this, t3 = Date.now(); this._writeBuffer.length > this._bufferOffset; ) {
                var r2 = this._writeBuffer[this._bufferOffset], i = this._callbacks[this._bufferOffset];
                if (this._bufferOffset++, this._action(r2), this._pendingData -= r2.length, i && i(), Date.now() - t3 >= 12)
                  break;
              }
              this._writeBuffer.length > this._bufferOffset ? (this._bufferOffset > 50 && (this._writeBuffer = this._writeBuffer.slice(this._bufferOffset), this._callbacks = this._callbacks.slice(this._bufferOffset), this._bufferOffset = 0), setTimeout(function() {
                return e4._innerWrite();
              }, 0)) : (this._writeBuffer = [], this._callbacks = [], this._pendingData = 0, this._bufferOffset = 0);
            }, e3;
          }();
          t2.WriteBuffer = r;
        }, 5770: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", {value: true}), t2.PAYLOAD_LIMIT = void 0, t2.PAYLOAD_LIMIT = 1e7;
        }, 6351: (e2, t2, r) => {
          Object.defineProperty(t2, "__esModule", {value: true}), t2.DcsHandler = t2.DcsParser = void 0;
          var i = r(482), n = r(8742), o = r(5770), s = [], a = function() {
            function e3() {
              this._handlers = Object.create(null), this._active = s, this._ident = 0, this._handlerFb = function() {
              };
            }
            return e3.prototype.dispose = function() {
              this._handlers = Object.create(null), this._handlerFb = function() {
              }, this._active = s;
            }, e3.prototype.registerHandler = function(e4, t3) {
              this._handlers[e4] === void 0 && (this._handlers[e4] = []);
              var r2 = this._handlers[e4];
              return r2.push(t3), {dispose: function() {
                var e5 = r2.indexOf(t3);
                e5 !== -1 && r2.splice(e5, 1);
              }};
            }, e3.prototype.clearHandler = function(e4) {
              this._handlers[e4] && delete this._handlers[e4];
            }, e3.prototype.setHandlerFallback = function(e4) {
              this._handlerFb = e4;
            }, e3.prototype.reset = function() {
              this._active.length && this.unhook(false), this._active = s, this._ident = 0;
            }, e3.prototype.hook = function(e4, t3) {
              if (this.reset(), this._ident = e4, this._active = this._handlers[e4] || s, this._active.length)
                for (var r2 = this._active.length - 1; r2 >= 0; r2--)
                  this._active[r2].hook(t3);
              else
                this._handlerFb(this._ident, "HOOK", t3);
            }, e3.prototype.put = function(e4, t3, r2) {
              if (this._active.length)
                for (var n2 = this._active.length - 1; n2 >= 0; n2--)
                  this._active[n2].put(e4, t3, r2);
              else
                this._handlerFb(this._ident, "PUT", i.utf32ToString(e4, t3, r2));
            }, e3.prototype.unhook = function(e4) {
              if (this._active.length) {
                for (var t3 = this._active.length - 1; t3 >= 0 && !this._active[t3].unhook(e4); t3--)
                  ;
                for (t3--; t3 >= 0; t3--)
                  this._active[t3].unhook(false);
              } else
                this._handlerFb(this._ident, "UNHOOK", e4);
              this._active = s, this._ident = 0;
            }, e3;
          }();
          t2.DcsParser = a;
          var c = new n.Params();
          c.addParam(0);
          var l = function() {
            function e3(e4) {
              this._handler = e4, this._data = "", this._params = c, this._hitLimit = false;
            }
            return e3.prototype.hook = function(e4) {
              this._params = e4.length > 1 || e4.params[0] ? e4.clone() : c, this._data = "", this._hitLimit = false;
            }, e3.prototype.put = function(e4, t3, r2) {
              this._hitLimit || (this._data += i.utf32ToString(e4, t3, r2), this._data.length > o.PAYLOAD_LIMIT && (this._data = "", this._hitLimit = true));
            }, e3.prototype.unhook = function(e4) {
              var t3 = false;
              return this._hitLimit ? t3 = false : e4 && (t3 = this._handler(this._data, this._params)), this._params = c, this._data = "", this._hitLimit = false, t3;
            }, e3;
          }();
          t2.DcsHandler = l;
        }, 2015: function(e2, t2, r) {
          var i, n = this && this.__extends || (i = function(e3, t3) {
            return (i = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(e4, t4) {
              e4.__proto__ = t4;
            } || function(e4, t4) {
              for (var r2 in t4)
                Object.prototype.hasOwnProperty.call(t4, r2) && (e4[r2] = t4[r2]);
            })(e3, t3);
          }, function(e3, t3) {
            function r2() {
              this.constructor = e3;
            }
            i(e3, t3), e3.prototype = t3 === null ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
          });
          Object.defineProperty(t2, "__esModule", {value: true}), t2.EscapeSequenceParser = t2.VT500_TRANSITION_TABLE = t2.TransitionTable = void 0;
          var o = r(844), s = r(8273), a = r(8742), c = r(6242), l = r(6351), h = function() {
            function e3(e4) {
              this.table = new Uint8Array(e4);
            }
            return e3.prototype.setDefault = function(e4, t3) {
              s.fill(this.table, e4 << 4 | t3);
            }, e3.prototype.add = function(e4, t3, r2, i2) {
              this.table[t3 << 8 | e4] = r2 << 4 | i2;
            }, e3.prototype.addMany = function(e4, t3, r2, i2) {
              for (var n2 = 0; n2 < e4.length; n2++)
                this.table[t3 << 8 | e4[n2]] = r2 << 4 | i2;
            }, e3;
          }();
          t2.TransitionTable = h;
          var u = 160;
          t2.VT500_TRANSITION_TABLE = function() {
            var e3 = new h(4095), t3 = Array.apply(null, Array(256)).map(function(e4, t4) {
              return t4;
            }), r2 = function(e4, r3) {
              return t3.slice(e4, r3);
            }, i2 = r2(32, 127), n2 = r2(0, 24);
            n2.push(25), n2.push.apply(n2, r2(28, 32));
            var o2, s2 = r2(0, 14);
            for (o2 in e3.setDefault(1, 0), e3.addMany(i2, 0, 2, 0), s2)
              e3.addMany([24, 26, 153, 154], o2, 3, 0), e3.addMany(r2(128, 144), o2, 3, 0), e3.addMany(r2(144, 152), o2, 3, 0), e3.add(156, o2, 0, 0), e3.add(27, o2, 11, 1), e3.add(157, o2, 4, 8), e3.addMany([152, 158, 159], o2, 0, 7), e3.add(155, o2, 11, 3), e3.add(144, o2, 11, 9);
            return e3.addMany(n2, 0, 3, 0), e3.addMany(n2, 1, 3, 1), e3.add(127, 1, 0, 1), e3.addMany(n2, 8, 0, 8), e3.addMany(n2, 3, 3, 3), e3.add(127, 3, 0, 3), e3.addMany(n2, 4, 3, 4), e3.add(127, 4, 0, 4), e3.addMany(n2, 6, 3, 6), e3.addMany(n2, 5, 3, 5), e3.add(127, 5, 0, 5), e3.addMany(n2, 2, 3, 2), e3.add(127, 2, 0, 2), e3.add(93, 1, 4, 8), e3.addMany(i2, 8, 5, 8), e3.add(127, 8, 5, 8), e3.addMany([156, 27, 24, 26, 7], 8, 6, 0), e3.addMany(r2(28, 32), 8, 0, 8), e3.addMany([88, 94, 95], 1, 0, 7), e3.addMany(i2, 7, 0, 7), e3.addMany(n2, 7, 0, 7), e3.add(156, 7, 0, 0), e3.add(127, 7, 0, 7), e3.add(91, 1, 11, 3), e3.addMany(r2(64, 127), 3, 7, 0), e3.addMany(r2(48, 60), 3, 8, 4), e3.addMany([60, 61, 62, 63], 3, 9, 4), e3.addMany(r2(48, 60), 4, 8, 4), e3.addMany(r2(64, 127), 4, 7, 0), e3.addMany([60, 61, 62, 63], 4, 0, 6), e3.addMany(r2(32, 64), 6, 0, 6), e3.add(127, 6, 0, 6), e3.addMany(r2(64, 127), 6, 0, 0), e3.addMany(r2(32, 48), 3, 9, 5), e3.addMany(r2(32, 48), 5, 9, 5), e3.addMany(r2(48, 64), 5, 0, 6), e3.addMany(r2(64, 127), 5, 7, 0), e3.addMany(r2(32, 48), 4, 9, 5), e3.addMany(r2(32, 48), 1, 9, 2), e3.addMany(r2(32, 48), 2, 9, 2), e3.addMany(r2(48, 127), 2, 10, 0), e3.addMany(r2(48, 80), 1, 10, 0), e3.addMany(r2(81, 88), 1, 10, 0), e3.addMany([89, 90, 92], 1, 10, 0), e3.addMany(r2(96, 127), 1, 10, 0), e3.add(80, 1, 11, 9), e3.addMany(n2, 9, 0, 9), e3.add(127, 9, 0, 9), e3.addMany(r2(28, 32), 9, 0, 9), e3.addMany(r2(32, 48), 9, 9, 12), e3.addMany(r2(48, 60), 9, 8, 10), e3.addMany([60, 61, 62, 63], 9, 9, 10), e3.addMany(n2, 11, 0, 11), e3.addMany(r2(32, 128), 11, 0, 11), e3.addMany(r2(28, 32), 11, 0, 11), e3.addMany(n2, 10, 0, 10), e3.add(127, 10, 0, 10), e3.addMany(r2(28, 32), 10, 0, 10), e3.addMany(r2(48, 60), 10, 8, 10), e3.addMany([60, 61, 62, 63], 10, 0, 11), e3.addMany(r2(32, 48), 10, 9, 12), e3.addMany(n2, 12, 0, 12), e3.add(127, 12, 0, 12), e3.addMany(r2(28, 32), 12, 0, 12), e3.addMany(r2(32, 48), 12, 9, 12), e3.addMany(r2(48, 64), 12, 0, 11), e3.addMany(r2(64, 127), 12, 12, 13), e3.addMany(r2(64, 127), 10, 12, 13), e3.addMany(r2(64, 127), 9, 12, 13), e3.addMany(n2, 13, 13, 13), e3.addMany(i2, 13, 13, 13), e3.add(127, 13, 0, 13), e3.addMany([27, 156, 24, 26], 13, 14, 0), e3.add(u, 0, 2, 0), e3.add(u, 8, 5, 8), e3.add(u, 6, 0, 6), e3.add(u, 11, 0, 11), e3.add(u, 13, 13, 13), e3;
          }();
          var f = function(e3) {
            function r2(r3) {
              r3 === void 0 && (r3 = t2.VT500_TRANSITION_TABLE);
              var i2 = e3.call(this) || this;
              return i2._transitions = r3, i2.initialState = 0, i2.currentState = i2.initialState, i2._params = new a.Params(), i2._params.addParam(0), i2._collect = 0, i2.precedingCodepoint = 0, i2._printHandlerFb = function(e4, t3, r4) {
              }, i2._executeHandlerFb = function(e4) {
              }, i2._csiHandlerFb = function(e4, t3) {
              }, i2._escHandlerFb = function(e4) {
              }, i2._errorHandlerFb = function(e4) {
                return e4;
              }, i2._printHandler = i2._printHandlerFb, i2._executeHandlers = Object.create(null), i2._csiHandlers = Object.create(null), i2._escHandlers = Object.create(null), i2._oscParser = new c.OscParser(), i2._dcsParser = new l.DcsParser(), i2._errorHandler = i2._errorHandlerFb, i2.registerEscHandler({final: "\\"}, function() {
                return true;
              }), i2;
            }
            return n(r2, e3), r2.prototype._identifier = function(e4, t3) {
              t3 === void 0 && (t3 = [64, 126]);
              var r3 = 0;
              if (e4.prefix) {
                if (e4.prefix.length > 1)
                  throw new Error("only one byte as prefix supported");
                if ((r3 = e4.prefix.charCodeAt(0)) && 60 > r3 || r3 > 63)
                  throw new Error("prefix must be in range 0x3c .. 0x3f");
              }
              if (e4.intermediates) {
                if (e4.intermediates.length > 2)
                  throw new Error("only two bytes as intermediates are supported");
                for (var i2 = 0; i2 < e4.intermediates.length; ++i2) {
                  var n2 = e4.intermediates.charCodeAt(i2);
                  if (32 > n2 || n2 > 47)
                    throw new Error("intermediate must be in range 0x20 .. 0x2f");
                  r3 <<= 8, r3 |= n2;
                }
              }
              if (e4.final.length !== 1)
                throw new Error("final must be a single byte");
              var o2 = e4.final.charCodeAt(0);
              if (t3[0] > o2 || o2 > t3[1])
                throw new Error("final must be in range " + t3[0] + " .. " + t3[1]);
              return (r3 <<= 8) | o2;
            }, r2.prototype.identToString = function(e4) {
              for (var t3 = []; e4; )
                t3.push(String.fromCharCode(255 & e4)), e4 >>= 8;
              return t3.reverse().join("");
            }, r2.prototype.dispose = function() {
              this._csiHandlers = Object.create(null), this._executeHandlers = Object.create(null), this._escHandlers = Object.create(null), this._oscParser.dispose(), this._dcsParser.dispose();
            }, r2.prototype.setPrintHandler = function(e4) {
              this._printHandler = e4;
            }, r2.prototype.clearPrintHandler = function() {
              this._printHandler = this._printHandlerFb;
            }, r2.prototype.registerEscHandler = function(e4, t3) {
              var r3 = this._identifier(e4, [48, 126]);
              this._escHandlers[r3] === void 0 && (this._escHandlers[r3] = []);
              var i2 = this._escHandlers[r3];
              return i2.push(t3), {dispose: function() {
                var e5 = i2.indexOf(t3);
                e5 !== -1 && i2.splice(e5, 1);
              }};
            }, r2.prototype.clearEscHandler = function(e4) {
              this._escHandlers[this._identifier(e4, [48, 126])] && delete this._escHandlers[this._identifier(e4, [48, 126])];
            }, r2.prototype.setEscHandlerFallback = function(e4) {
              this._escHandlerFb = e4;
            }, r2.prototype.setExecuteHandler = function(e4, t3) {
              this._executeHandlers[e4.charCodeAt(0)] = t3;
            }, r2.prototype.clearExecuteHandler = function(e4) {
              this._executeHandlers[e4.charCodeAt(0)] && delete this._executeHandlers[e4.charCodeAt(0)];
            }, r2.prototype.setExecuteHandlerFallback = function(e4) {
              this._executeHandlerFb = e4;
            }, r2.prototype.registerCsiHandler = function(e4, t3) {
              var r3 = this._identifier(e4);
              this._csiHandlers[r3] === void 0 && (this._csiHandlers[r3] = []);
              var i2 = this._csiHandlers[r3];
              return i2.push(t3), {dispose: function() {
                var e5 = i2.indexOf(t3);
                e5 !== -1 && i2.splice(e5, 1);
              }};
            }, r2.prototype.clearCsiHandler = function(e4) {
              this._csiHandlers[this._identifier(e4)] && delete this._csiHandlers[this._identifier(e4)];
            }, r2.prototype.setCsiHandlerFallback = function(e4) {
              this._csiHandlerFb = e4;
            }, r2.prototype.registerDcsHandler = function(e4, t3) {
              return this._dcsParser.registerHandler(this._identifier(e4), t3);
            }, r2.prototype.clearDcsHandler = function(e4) {
              this._dcsParser.clearHandler(this._identifier(e4));
            }, r2.prototype.setDcsHandlerFallback = function(e4) {
              this._dcsParser.setHandlerFallback(e4);
            }, r2.prototype.registerOscHandler = function(e4, t3) {
              return this._oscParser.registerHandler(e4, t3);
            }, r2.prototype.clearOscHandler = function(e4) {
              this._oscParser.clearHandler(e4);
            }, r2.prototype.setOscHandlerFallback = function(e4) {
              this._oscParser.setHandlerFallback(e4);
            }, r2.prototype.setErrorHandler = function(e4) {
              this._errorHandler = e4;
            }, r2.prototype.clearErrorHandler = function() {
              this._errorHandler = this._errorHandlerFb;
            }, r2.prototype.reset = function() {
              this.currentState = this.initialState, this._oscParser.reset(), this._dcsParser.reset(), this._params.reset(), this._params.addParam(0), this._collect = 0, this.precedingCodepoint = 0;
            }, r2.prototype.parse = function(e4, t3) {
              for (var r3 = 0, i2 = 0, n2 = this.currentState, o2 = this._oscParser, s2 = this._dcsParser, a2 = this._collect, c2 = this._params, l2 = this._transitions.table, h2 = 0; h2 < t3; ++h2) {
                switch ((i2 = l2[n2 << 8 | ((r3 = e4[h2]) < 160 ? r3 : u)]) >> 4) {
                  case 2:
                    for (var f2 = h2 + 1; ; ++f2) {
                      if (f2 >= t3 || (r3 = e4[f2]) < 32 || r3 > 126 && r3 < u) {
                        this._printHandler(e4, h2, f2), h2 = f2 - 1;
                        break;
                      }
                      if (++f2 >= t3 || (r3 = e4[f2]) < 32 || r3 > 126 && r3 < u) {
                        this._printHandler(e4, h2, f2), h2 = f2 - 1;
                        break;
                      }
                      if (++f2 >= t3 || (r3 = e4[f2]) < 32 || r3 > 126 && r3 < u) {
                        this._printHandler(e4, h2, f2), h2 = f2 - 1;
                        break;
                      }
                      if (++f2 >= t3 || (r3 = e4[f2]) < 32 || r3 > 126 && r3 < u) {
                        this._printHandler(e4, h2, f2), h2 = f2 - 1;
                        break;
                      }
                    }
                    break;
                  case 3:
                    this._executeHandlers[r3] ? this._executeHandlers[r3]() : this._executeHandlerFb(r3), this.precedingCodepoint = 0;
                    break;
                  case 0:
                    break;
                  case 1:
                    if (this._errorHandler({position: h2, code: r3, currentState: n2, collect: a2, params: c2, abort: false}).abort)
                      return;
                    break;
                  case 7:
                    for (var _ = this._csiHandlers[a2 << 8 | r3], d = _ ? _.length - 1 : -1; d >= 0 && !_[d](c2); d--)
                      ;
                    d < 0 && this._csiHandlerFb(a2 << 8 | r3, c2), this.precedingCodepoint = 0;
                    break;
                  case 8:
                    do {
                      switch (r3) {
                        case 59:
                          c2.addParam(0);
                          break;
                        case 58:
                          c2.addSubParam(-1);
                          break;
                        default:
                          c2.addDigit(r3 - 48);
                      }
                    } while (++h2 < t3 && (r3 = e4[h2]) > 47 && r3 < 60);
                    h2--;
                    break;
                  case 9:
                    a2 <<= 8, a2 |= r3;
                    break;
                  case 10:
                    for (var p = this._escHandlers[a2 << 8 | r3], v = p ? p.length - 1 : -1; v >= 0 && !p[v](); v--)
                      ;
                    v < 0 && this._escHandlerFb(a2 << 8 | r3), this.precedingCodepoint = 0;
                    break;
                  case 11:
                    c2.reset(), c2.addParam(0), a2 = 0;
                    break;
                  case 12:
                    s2.hook(a2 << 8 | r3, c2);
                    break;
                  case 13:
                    for (var g = h2 + 1; ; ++g)
                      if (g >= t3 || (r3 = e4[g]) === 24 || r3 === 26 || r3 === 27 || r3 > 127 && r3 < u) {
                        s2.put(e4, h2, g), h2 = g - 1;
                        break;
                      }
                    break;
                  case 14:
                    s2.unhook(r3 !== 24 && r3 !== 26), r3 === 27 && (i2 |= 1), c2.reset(), c2.addParam(0), a2 = 0, this.precedingCodepoint = 0;
                    break;
                  case 4:
                    o2.start();
                    break;
                  case 5:
                    for (var y = h2 + 1; ; y++)
                      if (y >= t3 || (r3 = e4[y]) < 32 || r3 > 127 && r3 < u) {
                        o2.put(e4, h2, y), h2 = y - 1;
                        break;
                      }
                    break;
                  case 6:
                    o2.end(r3 !== 24 && r3 !== 26), r3 === 27 && (i2 |= 1), c2.reset(), c2.addParam(0), a2 = 0, this.precedingCodepoint = 0;
                }
                n2 = 15 & i2;
              }
              this._collect = a2, this.currentState = n2;
            }, r2;
          }(o.Disposable);
          t2.EscapeSequenceParser = f;
        }, 6242: (e2, t2, r) => {
          Object.defineProperty(t2, "__esModule", {value: true}), t2.OscHandler = t2.OscParser = void 0;
          var i = r(5770), n = r(482), o = [], s = function() {
            function e3() {
              this._state = 0, this._active = o, this._id = -1, this._handlers = Object.create(null), this._handlerFb = function() {
              };
            }
            return e3.prototype.registerHandler = function(e4, t3) {
              this._handlers[e4] === void 0 && (this._handlers[e4] = []);
              var r2 = this._handlers[e4];
              return r2.push(t3), {dispose: function() {
                var e5 = r2.indexOf(t3);
                e5 !== -1 && r2.splice(e5, 1);
              }};
            }, e3.prototype.clearHandler = function(e4) {
              this._handlers[e4] && delete this._handlers[e4];
            }, e3.prototype.setHandlerFallback = function(e4) {
              this._handlerFb = e4;
            }, e3.prototype.dispose = function() {
              this._handlers = Object.create(null), this._handlerFb = function() {
              }, this._active = o;
            }, e3.prototype.reset = function() {
              this._state === 2 && this.end(false), this._active = o, this._id = -1, this._state = 0;
            }, e3.prototype._start = function() {
              if (this._active = this._handlers[this._id] || o, this._active.length)
                for (var e4 = this._active.length - 1; e4 >= 0; e4--)
                  this._active[e4].start();
              else
                this._handlerFb(this._id, "START");
            }, e3.prototype._put = function(e4, t3, r2) {
              if (this._active.length)
                for (var i2 = this._active.length - 1; i2 >= 0; i2--)
                  this._active[i2].put(e4, t3, r2);
              else
                this._handlerFb(this._id, "PUT", n.utf32ToString(e4, t3, r2));
            }, e3.prototype._end = function(e4) {
              if (this._active.length) {
                for (var t3 = this._active.length - 1; t3 >= 0 && !this._active[t3].end(e4); t3--)
                  ;
                for (t3--; t3 >= 0; t3--)
                  this._active[t3].end(false);
              } else
                this._handlerFb(this._id, "END", e4);
            }, e3.prototype.start = function() {
              this.reset(), this._state = 1;
            }, e3.prototype.put = function(e4, t3, r2) {
              if (this._state !== 3) {
                if (this._state === 1)
                  for (; t3 < r2; ) {
                    var i2 = e4[t3++];
                    if (i2 === 59) {
                      this._state = 2, this._start();
                      break;
                    }
                    if (i2 < 48 || 57 < i2)
                      return void (this._state = 3);
                    this._id === -1 && (this._id = 0), this._id = 10 * this._id + i2 - 48;
                  }
                this._state === 2 && r2 - t3 > 0 && this._put(e4, t3, r2);
              }
            }, e3.prototype.end = function(e4) {
              this._state !== 0 && (this._state !== 3 && (this._state === 1 && this._start(), this._end(e4)), this._active = o, this._id = -1, this._state = 0);
            }, e3;
          }();
          t2.OscParser = s;
          var a = function() {
            function e3(e4) {
              this._handler = e4, this._data = "", this._hitLimit = false;
            }
            return e3.prototype.start = function() {
              this._data = "", this._hitLimit = false;
            }, e3.prototype.put = function(e4, t3, r2) {
              this._hitLimit || (this._data += n.utf32ToString(e4, t3, r2), this._data.length > i.PAYLOAD_LIMIT && (this._data = "", this._hitLimit = true));
            }, e3.prototype.end = function(e4) {
              var t3 = false;
              return this._hitLimit ? t3 = false : e4 && (t3 = this._handler(this._data)), this._data = "", this._hitLimit = false, t3;
            }, e3;
          }();
          t2.OscHandler = a;
        }, 8742: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", {value: true}), t2.Params = void 0;
          var r = 2147483647, i = function() {
            function e3(e4, t3) {
              if (e4 === void 0 && (e4 = 32), t3 === void 0 && (t3 = 32), this.maxLength = e4, this.maxSubParamsLength = t3, t3 > 256)
                throw new Error("maxSubParamsLength must not be greater than 256");
              this.params = new Int32Array(e4), this.length = 0, this._subParams = new Int32Array(t3), this._subParamsLength = 0, this._subParamsIdx = new Uint16Array(e4), this._rejectDigits = false, this._rejectSubDigits = false, this._digitIsSub = false;
            }
            return e3.fromArray = function(t3) {
              var r2 = new e3();
              if (!t3.length)
                return r2;
              for (var i2 = t3[0] instanceof Array ? 1 : 0; i2 < t3.length; ++i2) {
                var n = t3[i2];
                if (n instanceof Array)
                  for (var o = 0; o < n.length; ++o)
                    r2.addSubParam(n[o]);
                else
                  r2.addParam(n);
              }
              return r2;
            }, e3.prototype.clone = function() {
              var t3 = new e3(this.maxLength, this.maxSubParamsLength);
              return t3.params.set(this.params), t3.length = this.length, t3._subParams.set(this._subParams), t3._subParamsLength = this._subParamsLength, t3._subParamsIdx.set(this._subParamsIdx), t3._rejectDigits = this._rejectDigits, t3._rejectSubDigits = this._rejectSubDigits, t3._digitIsSub = this._digitIsSub, t3;
            }, e3.prototype.toArray = function() {
              for (var e4 = [], t3 = 0; t3 < this.length; ++t3) {
                e4.push(this.params[t3]);
                var r2 = this._subParamsIdx[t3] >> 8, i2 = 255 & this._subParamsIdx[t3];
                i2 - r2 > 0 && e4.push(Array.prototype.slice.call(this._subParams, r2, i2));
              }
              return e4;
            }, e3.prototype.reset = function() {
              this.length = 0, this._subParamsLength = 0, this._rejectDigits = false, this._rejectSubDigits = false, this._digitIsSub = false;
            }, e3.prototype.addParam = function(e4) {
              if (this._digitIsSub = false, this.length >= this.maxLength)
                this._rejectDigits = true;
              else {
                if (e4 < -1)
                  throw new Error("values lesser than -1 are not allowed");
                this._subParamsIdx[this.length] = this._subParamsLength << 8 | this._subParamsLength, this.params[this.length++] = e4 > r ? r : e4;
              }
            }, e3.prototype.addSubParam = function(e4) {
              if (this._digitIsSub = true, this.length)
                if (this._rejectDigits || this._subParamsLength >= this.maxSubParamsLength)
                  this._rejectSubDigits = true;
                else {
                  if (e4 < -1)
                    throw new Error("values lesser than -1 are not allowed");
                  this._subParams[this._subParamsLength++] = e4 > r ? r : e4, this._subParamsIdx[this.length - 1]++;
                }
            }, e3.prototype.hasSubParams = function(e4) {
              return (255 & this._subParamsIdx[e4]) - (this._subParamsIdx[e4] >> 8) > 0;
            }, e3.prototype.getSubParams = function(e4) {
              var t3 = this._subParamsIdx[e4] >> 8, r2 = 255 & this._subParamsIdx[e4];
              return r2 - t3 > 0 ? this._subParams.subarray(t3, r2) : null;
            }, e3.prototype.getSubParamsAll = function() {
              for (var e4 = {}, t3 = 0; t3 < this.length; ++t3) {
                var r2 = this._subParamsIdx[t3] >> 8, i2 = 255 & this._subParamsIdx[t3];
                i2 - r2 > 0 && (e4[t3] = this._subParams.slice(r2, i2));
              }
              return e4;
            }, e3.prototype.addDigit = function(e4) {
              var t3;
              if (!(this._rejectDigits || !(t3 = this._digitIsSub ? this._subParamsLength : this.length) || this._digitIsSub && this._rejectSubDigits)) {
                var i2 = this._digitIsSub ? this._subParams : this.params, n = i2[t3 - 1];
                i2[t3 - 1] = ~n ? Math.min(10 * n + e4, r) : e4;
              }
            }, e3;
          }();
          t2.Params = i;
        }, 744: function(e2, t2, r) {
          var i, n = this && this.__extends || (i = function(e3, t3) {
            return (i = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(e4, t4) {
              e4.__proto__ = t4;
            } || function(e4, t4) {
              for (var r2 in t4)
                Object.prototype.hasOwnProperty.call(t4, r2) && (e4[r2] = t4[r2]);
            })(e3, t3);
          }, function(e3, t3) {
            function r2() {
              this.constructor = e3;
            }
            i(e3, t3), e3.prototype = t3 === null ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
          }), o = this && this.__decorate || function(e3, t3, r2, i2) {
            var n2, o2 = arguments.length, s2 = o2 < 3 ? t3 : i2 === null ? i2 = Object.getOwnPropertyDescriptor(t3, r2) : i2;
            if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
              s2 = Reflect.decorate(e3, t3, r2, i2);
            else
              for (var a2 = e3.length - 1; a2 >= 0; a2--)
                (n2 = e3[a2]) && (s2 = (o2 < 3 ? n2(s2) : o2 > 3 ? n2(t3, r2, s2) : n2(t3, r2)) || s2);
            return o2 > 3 && s2 && Object.defineProperty(t3, r2, s2), s2;
          }, s = this && this.__param || function(e3, t3) {
            return function(r2, i2) {
              t3(r2, i2, e3);
            };
          };
          Object.defineProperty(t2, "__esModule", {value: true}), t2.BufferService = t2.MINIMUM_ROWS = t2.MINIMUM_COLS = void 0;
          var a = r(2585), c = r(5295), l = r(8460), h = r(844);
          t2.MINIMUM_COLS = 2, t2.MINIMUM_ROWS = 1;
          var u = function(e3) {
            function r2(r3) {
              var i2 = e3.call(this) || this;
              return i2._optionsService = r3, i2.isUserScrolling = false, i2._onResize = new l.EventEmitter(), i2.cols = Math.max(r3.options.cols, t2.MINIMUM_COLS), i2.rows = Math.max(r3.options.rows, t2.MINIMUM_ROWS), i2.buffers = new c.BufferSet(r3, i2), i2;
            }
            return n(r2, e3), Object.defineProperty(r2.prototype, "onResize", {get: function() {
              return this._onResize.event;
            }, enumerable: false, configurable: true}), Object.defineProperty(r2.prototype, "buffer", {get: function() {
              return this.buffers.active;
            }, enumerable: false, configurable: true}), r2.prototype.dispose = function() {
              e3.prototype.dispose.call(this), this.buffers.dispose();
            }, r2.prototype.resize = function(e4, t3) {
              this.cols = e4, this.rows = t3, this.buffers.resize(e4, t3), this.buffers.setupTabStops(this.cols), this._onResize.fire({cols: e4, rows: t3});
            }, r2.prototype.reset = function() {
              this.buffers.reset(), this.isUserScrolling = false;
            }, o([s(0, a.IOptionsService)], r2);
          }(h.Disposable);
          t2.BufferService = u;
        }, 7994: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", {value: true}), t2.CharsetService = void 0;
          var r = function() {
            function e3() {
              this.glevel = 0, this._charsets = [];
            }
            return e3.prototype.reset = function() {
              this.charset = void 0, this._charsets = [], this.glevel = 0;
            }, e3.prototype.setgLevel = function(e4) {
              this.glevel = e4, this.charset = this._charsets[e4];
            }, e3.prototype.setgCharset = function(e4, t3) {
              this._charsets[e4] = t3, this.glevel === e4 && (this.charset = t3);
            }, e3;
          }();
          t2.CharsetService = r;
        }, 1753: function(e2, t2, r) {
          var i = this && this.__decorate || function(e3, t3, r2, i2) {
            var n2, o2 = arguments.length, s2 = o2 < 3 ? t3 : i2 === null ? i2 = Object.getOwnPropertyDescriptor(t3, r2) : i2;
            if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
              s2 = Reflect.decorate(e3, t3, r2, i2);
            else
              for (var a2 = e3.length - 1; a2 >= 0; a2--)
                (n2 = e3[a2]) && (s2 = (o2 < 3 ? n2(s2) : o2 > 3 ? n2(t3, r2, s2) : n2(t3, r2)) || s2);
            return o2 > 3 && s2 && Object.defineProperty(t3, r2, s2), s2;
          }, n = this && this.__param || function(e3, t3) {
            return function(r2, i2) {
              t3(r2, i2, e3);
            };
          };
          Object.defineProperty(t2, "__esModule", {value: true}), t2.CoreMouseService = void 0;
          var o = r(2585), s = r(8460), a = {NONE: {events: 0, restrict: function() {
            return false;
          }}, X10: {events: 1, restrict: function(e3) {
            return e3.button !== 4 && e3.action === 1 && (e3.ctrl = false, e3.alt = false, e3.shift = false, true);
          }}, VT200: {events: 19, restrict: function(e3) {
            return e3.action !== 32;
          }}, DRAG: {events: 23, restrict: function(e3) {
            return e3.action !== 32 || e3.button !== 3;
          }}, ANY: {events: 31, restrict: function(e3) {
            return true;
          }}};
          function c(e3, t3) {
            var r2 = (e3.ctrl ? 16 : 0) | (e3.shift ? 4 : 0) | (e3.alt ? 8 : 0);
            return e3.button === 4 ? (r2 |= 64, r2 |= e3.action) : (r2 |= 3 & e3.button, 4 & e3.button && (r2 |= 64), 8 & e3.button && (r2 |= 128), e3.action === 32 ? r2 |= 32 : e3.action !== 0 || t3 || (r2 |= 3)), r2;
          }
          var l = String.fromCharCode, h = {DEFAULT: function(e3) {
            var t3 = [c(e3, false) + 32, e3.col + 32, e3.row + 32];
            return t3[0] > 255 || t3[1] > 255 || t3[2] > 255 ? "" : "[M" + l(t3[0]) + l(t3[1]) + l(t3[2]);
          }, SGR: function(e3) {
            var t3 = e3.action === 0 && e3.button !== 4 ? "m" : "M";
            return "[<" + c(e3, true) + ";" + e3.col + ";" + e3.row + t3;
          }}, u = function() {
            function e3(e4, t3) {
              this._bufferService = e4, this._coreService = t3, this._protocols = {}, this._encodings = {}, this._activeProtocol = "", this._activeEncoding = "", this._onProtocolChange = new s.EventEmitter(), this._lastEvent = null;
              for (var r2 = 0, i2 = Object.keys(a); r2 < i2.length; r2++) {
                var n2 = i2[r2];
                this.addProtocol(n2, a[n2]);
              }
              for (var o2 = 0, c2 = Object.keys(h); o2 < c2.length; o2++) {
                var l2 = c2[o2];
                this.addEncoding(l2, h[l2]);
              }
              this.reset();
            }
            return e3.prototype.addProtocol = function(e4, t3) {
              this._protocols[e4] = t3;
            }, e3.prototype.addEncoding = function(e4, t3) {
              this._encodings[e4] = t3;
            }, Object.defineProperty(e3.prototype, "activeProtocol", {get: function() {
              return this._activeProtocol;
            }, set: function(e4) {
              if (!this._protocols[e4])
                throw new Error('unknown protocol "' + e4 + '"');
              this._activeProtocol = e4, this._onProtocolChange.fire(this._protocols[e4].events);
            }, enumerable: false, configurable: true}), Object.defineProperty(e3.prototype, "areMouseEventsActive", {get: function() {
              return this._protocols[this._activeProtocol].events !== 0;
            }, enumerable: false, configurable: true}), Object.defineProperty(e3.prototype, "activeEncoding", {get: function() {
              return this._activeEncoding;
            }, set: function(e4) {
              if (!this._encodings[e4])
                throw new Error('unknown encoding "' + e4 + '"');
              this._activeEncoding = e4;
            }, enumerable: false, configurable: true}), e3.prototype.reset = function() {
              this.activeProtocol = "NONE", this.activeEncoding = "DEFAULT", this._lastEvent = null;
            }, Object.defineProperty(e3.prototype, "onProtocolChange", {get: function() {
              return this._onProtocolChange.event;
            }, enumerable: false, configurable: true}), e3.prototype.triggerMouseEvent = function(e4) {
              if (e4.col < 0 || e4.col >= this._bufferService.cols || e4.row < 0 || e4.row >= this._bufferService.rows)
                return false;
              if (e4.button === 4 && e4.action === 32)
                return false;
              if (e4.button === 3 && e4.action !== 32)
                return false;
              if (e4.button !== 4 && (e4.action === 2 || e4.action === 3))
                return false;
              if (e4.col++, e4.row++, e4.action === 32 && this._lastEvent && this._compareEvents(this._lastEvent, e4))
                return false;
              if (!this._protocols[this._activeProtocol].restrict(e4))
                return false;
              var t3 = this._encodings[this._activeEncoding](e4);
              return t3 && (this._activeEncoding === "DEFAULT" ? this._coreService.triggerBinaryEvent(t3) : this._coreService.triggerDataEvent(t3, true)), this._lastEvent = e4, true;
            }, e3.prototype.explainEvents = function(e4) {
              return {down: !!(1 & e4), up: !!(2 & e4), drag: !!(4 & e4), move: !!(8 & e4), wheel: !!(16 & e4)};
            }, e3.prototype._compareEvents = function(e4, t3) {
              return e4.col === t3.col && e4.row === t3.row && e4.button === t3.button && e4.action === t3.action && e4.ctrl === t3.ctrl && e4.alt === t3.alt && e4.shift === t3.shift;
            }, i([n(0, o.IBufferService), n(1, o.ICoreService)], e3);
          }();
          t2.CoreMouseService = u;
        }, 6975: function(e2, t2, r) {
          var i, n = this && this.__extends || (i = function(e3, t3) {
            return (i = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(e4, t4) {
              e4.__proto__ = t4;
            } || function(e4, t4) {
              for (var r2 in t4)
                Object.prototype.hasOwnProperty.call(t4, r2) && (e4[r2] = t4[r2]);
            })(e3, t3);
          }, function(e3, t3) {
            function r2() {
              this.constructor = e3;
            }
            i(e3, t3), e3.prototype = t3 === null ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
          }), o = this && this.__decorate || function(e3, t3, r2, i2) {
            var n2, o2 = arguments.length, s2 = o2 < 3 ? t3 : i2 === null ? i2 = Object.getOwnPropertyDescriptor(t3, r2) : i2;
            if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
              s2 = Reflect.decorate(e3, t3, r2, i2);
            else
              for (var a2 = e3.length - 1; a2 >= 0; a2--)
                (n2 = e3[a2]) && (s2 = (o2 < 3 ? n2(s2) : o2 > 3 ? n2(t3, r2, s2) : n2(t3, r2)) || s2);
            return o2 > 3 && s2 && Object.defineProperty(t3, r2, s2), s2;
          }, s = this && this.__param || function(e3, t3) {
            return function(r2, i2) {
              t3(r2, i2, e3);
            };
          };
          Object.defineProperty(t2, "__esModule", {value: true}), t2.CoreService = void 0;
          var a = r(2585), c = r(8460), l = r(1439), h = r(844), u = Object.freeze({insertMode: false}), f = Object.freeze({applicationCursorKeys: false, applicationKeypad: false, bracketedPasteMode: false, origin: false, reverseWraparound: false, sendFocus: false, wraparound: true}), _ = function(e3) {
            function t3(t4, r2, i2, n2) {
              var o2 = e3.call(this) || this;
              return o2._bufferService = r2, o2._logService = i2, o2._optionsService = n2, o2.isCursorInitialized = false, o2.isCursorHidden = false, o2._onData = o2.register(new c.EventEmitter()), o2._onUserInput = o2.register(new c.EventEmitter()), o2._onBinary = o2.register(new c.EventEmitter()), o2._scrollToBottom = t4, o2.register({dispose: function() {
                return o2._scrollToBottom = void 0;
              }}), o2.modes = l.clone(u), o2.decPrivateModes = l.clone(f), o2;
            }
            return n(t3, e3), Object.defineProperty(t3.prototype, "onData", {get: function() {
              return this._onData.event;
            }, enumerable: false, configurable: true}), Object.defineProperty(t3.prototype, "onUserInput", {get: function() {
              return this._onUserInput.event;
            }, enumerable: false, configurable: true}), Object.defineProperty(t3.prototype, "onBinary", {get: function() {
              return this._onBinary.event;
            }, enumerable: false, configurable: true}), t3.prototype.reset = function() {
              this.modes = l.clone(u), this.decPrivateModes = l.clone(f);
            }, t3.prototype.triggerDataEvent = function(e4, t4) {
              if (t4 === void 0 && (t4 = false), !this._optionsService.options.disableStdin) {
                var r2 = this._bufferService.buffer;
                r2.ybase !== r2.ydisp && this._scrollToBottom(), t4 && this._onUserInput.fire(), this._logService.debug('sending data "' + e4 + '"', function() {
                  return e4.split("").map(function(e5) {
                    return e5.charCodeAt(0);
                  });
                }), this._onData.fire(e4);
              }
            }, t3.prototype.triggerBinaryEvent = function(e4) {
              this._optionsService.options.disableStdin || (this._logService.debug('sending binary "' + e4 + '"', function() {
                return e4.split("").map(function(e5) {
                  return e5.charCodeAt(0);
                });
              }), this._onBinary.fire(e4));
            }, o([s(1, a.IBufferService), s(2, a.ILogService), s(3, a.IOptionsService)], t3);
          }(h.Disposable);
          t2.CoreService = _;
        }, 3730: function(e2, t2, r) {
          var i = this && this.__decorate || function(e3, t3, r2, i2) {
            var n2, o2 = arguments.length, s2 = o2 < 3 ? t3 : i2 === null ? i2 = Object.getOwnPropertyDescriptor(t3, r2) : i2;
            if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
              s2 = Reflect.decorate(e3, t3, r2, i2);
            else
              for (var a = e3.length - 1; a >= 0; a--)
                (n2 = e3[a]) && (s2 = (o2 < 3 ? n2(s2) : o2 > 3 ? n2(t3, r2, s2) : n2(t3, r2)) || s2);
            return o2 > 3 && s2 && Object.defineProperty(t3, r2, s2), s2;
          }, n = this && this.__param || function(e3, t3) {
            return function(r2, i2) {
              t3(r2, i2, e3);
            };
          };
          Object.defineProperty(t2, "__esModule", {value: true}), t2.DirtyRowService = void 0;
          var o = r(2585), s = function() {
            function e3(e4) {
              this._bufferService = e4, this.clearRange();
            }
            return Object.defineProperty(e3.prototype, "start", {get: function() {
              return this._start;
            }, enumerable: false, configurable: true}), Object.defineProperty(e3.prototype, "end", {get: function() {
              return this._end;
            }, enumerable: false, configurable: true}), e3.prototype.clearRange = function() {
              this._start = this._bufferService.buffer.y, this._end = this._bufferService.buffer.y;
            }, e3.prototype.markDirty = function(e4) {
              e4 < this._start ? this._start = e4 : e4 > this._end && (this._end = e4);
            }, e3.prototype.markRangeDirty = function(e4, t3) {
              if (e4 > t3) {
                var r2 = e4;
                e4 = t3, t3 = r2;
              }
              e4 < this._start && (this._start = e4), t3 > this._end && (this._end = t3);
            }, e3.prototype.markAllDirty = function() {
              this.markRangeDirty(0, this._bufferService.rows - 1);
            }, i([n(0, o.IBufferService)], e3);
          }();
          t2.DirtyRowService = s;
        }, 4348: function(e2, t2, r) {
          var i = this && this.__spreadArrays || function() {
            for (var e3 = 0, t3 = 0, r2 = arguments.length; t3 < r2; t3++)
              e3 += arguments[t3].length;
            var i2 = Array(e3), n2 = 0;
            for (t3 = 0; t3 < r2; t3++)
              for (var o2 = arguments[t3], s2 = 0, a2 = o2.length; s2 < a2; s2++, n2++)
                i2[n2] = o2[s2];
            return i2;
          };
          Object.defineProperty(t2, "__esModule", {value: true}), t2.InstantiationService = t2.ServiceCollection = void 0;
          var n = r(2585), o = r(8343), s = function() {
            function e3() {
              for (var e4 = [], t3 = 0; t3 < arguments.length; t3++)
                e4[t3] = arguments[t3];
              this._entries = new Map();
              for (var r2 = 0, i2 = e4; r2 < i2.length; r2++) {
                var n2 = i2[r2], o2 = n2[0], s2 = n2[1];
                this.set(o2, s2);
              }
            }
            return e3.prototype.set = function(e4, t3) {
              var r2 = this._entries.get(e4);
              return this._entries.set(e4, t3), r2;
            }, e3.prototype.forEach = function(e4) {
              this._entries.forEach(function(t3, r2) {
                return e4(r2, t3);
              });
            }, e3.prototype.has = function(e4) {
              return this._entries.has(e4);
            }, e3.prototype.get = function(e4) {
              return this._entries.get(e4);
            }, e3;
          }();
          t2.ServiceCollection = s;
          var a = function() {
            function e3() {
              this._services = new s(), this._services.set(n.IInstantiationService, this);
            }
            return e3.prototype.setService = function(e4, t3) {
              this._services.set(e4, t3);
            }, e3.prototype.getService = function(e4) {
              return this._services.get(e4);
            }, e3.prototype.createInstance = function(e4) {
              for (var t3 = [], r2 = 1; r2 < arguments.length; r2++)
                t3[r2 - 1] = arguments[r2];
              for (var n2 = o.getServiceDependencies(e4).sort(function(e5, t4) {
                return e5.index - t4.index;
              }), s2 = [], a2 = 0, c = n2; a2 < c.length; a2++) {
                var l = c[a2], h = this._services.get(l.id);
                if (!h)
                  throw new Error("[createInstance] " + e4.name + " depends on UNKNOWN service " + l.id + ".");
                s2.push(h);
              }
              var u = n2.length > 0 ? n2[0].index : t3.length;
              if (t3.length !== u)
                throw new Error("[createInstance] First service dependency of " + e4.name + " at position " + (u + 1) + " conflicts with " + t3.length + " static arguments");
              return new (e4.bind.apply(e4, i([void 0], i(t3, s2))))();
            }, e3;
          }();
          t2.InstantiationService = a;
        }, 7866: function(e2, t2, r) {
          var i = this && this.__decorate || function(e3, t3, r2, i2) {
            var n2, o2 = arguments.length, s2 = o2 < 3 ? t3 : i2 === null ? i2 = Object.getOwnPropertyDescriptor(t3, r2) : i2;
            if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
              s2 = Reflect.decorate(e3, t3, r2, i2);
            else
              for (var a2 = e3.length - 1; a2 >= 0; a2--)
                (n2 = e3[a2]) && (s2 = (o2 < 3 ? n2(s2) : o2 > 3 ? n2(t3, r2, s2) : n2(t3, r2)) || s2);
            return o2 > 3 && s2 && Object.defineProperty(t3, r2, s2), s2;
          }, n = this && this.__param || function(e3, t3) {
            return function(r2, i2) {
              t3(r2, i2, e3);
            };
          }, o = this && this.__spreadArrays || function() {
            for (var e3 = 0, t3 = 0, r2 = arguments.length; t3 < r2; t3++)
              e3 += arguments[t3].length;
            var i2 = Array(e3), n2 = 0;
            for (t3 = 0; t3 < r2; t3++)
              for (var o2 = arguments[t3], s2 = 0, a2 = o2.length; s2 < a2; s2++, n2++)
                i2[n2] = o2[s2];
            return i2;
          };
          Object.defineProperty(t2, "__esModule", {value: true}), t2.LogService = t2.LogLevel = void 0;
          var s, a = r(2585);
          !function(e3) {
            e3[e3.DEBUG = 0] = "DEBUG", e3[e3.INFO = 1] = "INFO", e3[e3.WARN = 2] = "WARN", e3[e3.ERROR = 3] = "ERROR", e3[e3.OFF = 4] = "OFF";
          }(s = t2.LogLevel || (t2.LogLevel = {}));
          var c = {debug: s.DEBUG, info: s.INFO, warn: s.WARN, error: s.ERROR, off: s.OFF}, l = function() {
            function e3(e4) {
              var t3 = this;
              this._optionsService = e4, this._updateLogLevel(), this._optionsService.onOptionChange(function(e5) {
                e5 === "logLevel" && t3._updateLogLevel();
              });
            }
            return e3.prototype._updateLogLevel = function() {
              this._logLevel = c[this._optionsService.options.logLevel];
            }, e3.prototype._evalLazyOptionalParams = function(e4) {
              for (var t3 = 0; t3 < e4.length; t3++)
                typeof e4[t3] == "function" && (e4[t3] = e4[t3]());
            }, e3.prototype._log = function(e4, t3, r2) {
              this._evalLazyOptionalParams(r2), e4.call.apply(e4, o([console, "xterm.js: " + t3], r2));
            }, e3.prototype.debug = function(e4) {
              for (var t3 = [], r2 = 1; r2 < arguments.length; r2++)
                t3[r2 - 1] = arguments[r2];
              this._logLevel <= s.DEBUG && this._log(console.log, e4, t3);
            }, e3.prototype.info = function(e4) {
              for (var t3 = [], r2 = 1; r2 < arguments.length; r2++)
                t3[r2 - 1] = arguments[r2];
              this._logLevel <= s.INFO && this._log(console.info, e4, t3);
            }, e3.prototype.warn = function(e4) {
              for (var t3 = [], r2 = 1; r2 < arguments.length; r2++)
                t3[r2 - 1] = arguments[r2];
              this._logLevel <= s.WARN && this._log(console.warn, e4, t3);
            }, e3.prototype.error = function(e4) {
              for (var t3 = [], r2 = 1; r2 < arguments.length; r2++)
                t3[r2 - 1] = arguments[r2];
              this._logLevel <= s.ERROR && this._log(console.error, e4, t3);
            }, i([n(0, a.IOptionsService)], e3);
          }();
          t2.LogService = l;
        }, 7302: (e2, t2, r) => {
          Object.defineProperty(t2, "__esModule", {value: true}), t2.OptionsService = t2.DEFAULT_OPTIONS = t2.DEFAULT_BELL_SOUND = void 0;
          var i = r(8460), n = r(6114), o = r(1439);
          t2.DEFAULT_BELL_SOUND = "data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4LjMyLjEwNAAAAAAAAAAAAAAA//tQxAADB8AhSmxhIIEVCSiJrDCQBTcu3UrAIwUdkRgQbFAZC1CQEwTJ9mjRvBA4UOLD8nKVOWfh+UlK3z/177OXrfOdKl7pyn3Xf//WreyTRUoAWgBgkOAGbZHBgG1OF6zM82DWbZaUmMBptgQhGjsyYqc9ae9XFz280948NMBWInljyzsNRFLPWdnZGWrddDsjK1unuSrVN9jJsK8KuQtQCtMBjCEtImISdNKJOopIpBFpNSMbIHCSRpRR5iakjTiyzLhchUUBwCgyKiweBv/7UsQbg8isVNoMPMjAAAA0gAAABEVFGmgqK////9bP/6XCykxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq", t2.DEFAULT_OPTIONS = Object.freeze({cols: 80, rows: 24, cursorBlink: false, cursorStyle: "block", cursorWidth: 1, bellSound: t2.DEFAULT_BELL_SOUND, bellStyle: "none", drawBoldTextInBrightColors: true, fastScrollModifier: "alt", fastScrollSensitivity: 5, fontFamily: "courier-new, courier, monospace", fontSize: 15, fontWeight: "normal", fontWeightBold: "bold", lineHeight: 1, linkTooltipHoverDuration: 500, letterSpacing: 0, logLevel: "info", scrollback: 1e3, scrollSensitivity: 1, screenReaderMode: false, macOptionIsMeta: false, macOptionClickForcesSelection: false, minimumContrastRatio: 1, disableStdin: false, allowProposedApi: true, allowTransparency: false, tabStopWidth: 8, theme: {}, rightClickSelectsWord: n.isMac, rendererType: "canvas", windowOptions: {}, windowsMode: false, wordSeparator: " ()[]{}',\"`", altClickMovesCursor: true, convertEol: false, termName: "xterm", cancelEvents: false});
          var s = ["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"], a = ["cols", "rows"], c = function() {
            function e3(e4) {
              this._onOptionChange = new i.EventEmitter(), this.options = o.clone(t2.DEFAULT_OPTIONS);
              for (var r2 = 0, n2 = Object.keys(e4); r2 < n2.length; r2++) {
                var s2 = n2[r2];
                if (s2 in this.options)
                  try {
                    var a2 = e4[s2];
                    this.options[s2] = this._sanitizeAndValidateOption(s2, a2);
                  } catch (e5) {
                    console.error(e5);
                  }
              }
            }
            return Object.defineProperty(e3.prototype, "onOptionChange", {get: function() {
              return this._onOptionChange.event;
            }, enumerable: false, configurable: true}), e3.prototype.setOption = function(e4, r2) {
              if (!(e4 in t2.DEFAULT_OPTIONS))
                throw new Error('No option with key "' + e4 + '"');
              if (a.includes(e4))
                throw new Error('Option "' + e4 + '" can only be set in the constructor');
              this.options[e4] !== r2 && (r2 = this._sanitizeAndValidateOption(e4, r2), this.options[e4] !== r2 && (this.options[e4] = r2, this._onOptionChange.fire(e4)));
            }, e3.prototype._sanitizeAndValidateOption = function(e4, r2) {
              switch (e4) {
                case "bellStyle":
                case "cursorStyle":
                case "rendererType":
                case "wordSeparator":
                  r2 || (r2 = t2.DEFAULT_OPTIONS[e4]);
                  break;
                case "fontWeight":
                case "fontWeightBold":
                  if (typeof r2 == "number" && 1 <= r2 && r2 <= 1e3)
                    break;
                  r2 = s.includes(r2) ? r2 : t2.DEFAULT_OPTIONS[e4];
                  break;
                case "cursorWidth":
                  r2 = Math.floor(r2);
                case "lineHeight":
                case "tabStopWidth":
                  if (r2 < 1)
                    throw new Error(e4 + " cannot be less than 1, value: " + r2);
                  break;
                case "minimumContrastRatio":
                  r2 = Math.max(1, Math.min(21, Math.round(10 * r2) / 10));
                  break;
                case "scrollback":
                  if ((r2 = Math.min(r2, 4294967295)) < 0)
                    throw new Error(e4 + " cannot be less than 0, value: " + r2);
                  break;
                case "fastScrollSensitivity":
                case "scrollSensitivity":
                  if (r2 <= 0)
                    throw new Error(e4 + " cannot be less than or equal to 0, value: " + r2);
              }
              return r2;
            }, e3.prototype.getOption = function(e4) {
              if (!(e4 in t2.DEFAULT_OPTIONS))
                throw new Error('No option with key "' + e4 + '"');
              return this.options[e4];
            }, e3;
          }();
          t2.OptionsService = c;
        }, 8343: (e2, t2) => {
          function r(e3, t3, r2) {
            t3.di$target === t3 ? t3.di$dependencies.push({id: e3, index: r2}) : (t3.di$dependencies = [{id: e3, index: r2}], t3.di$target = t3);
          }
          Object.defineProperty(t2, "__esModule", {value: true}), t2.createDecorator = t2.getServiceDependencies = t2.serviceRegistry = void 0, t2.serviceRegistry = new Map(), t2.getServiceDependencies = function(e3) {
            return e3.di$dependencies || [];
          }, t2.createDecorator = function(e3) {
            if (t2.serviceRegistry.has(e3))
              return t2.serviceRegistry.get(e3);
            var i = function(e4, t3, n) {
              if (arguments.length !== 3)
                throw new Error("@IServiceName-decorator can only be used to decorate a parameter");
              r(i, e4, n);
            };
            return i.toString = function() {
              return e3;
            }, t2.serviceRegistry.set(e3, i), i;
          };
        }, 2585: (e2, t2, r) => {
          Object.defineProperty(t2, "__esModule", {value: true}), t2.IUnicodeService = t2.IOptionsService = t2.ILogService = t2.IInstantiationService = t2.IDirtyRowService = t2.ICharsetService = t2.ICoreService = t2.ICoreMouseService = t2.IBufferService = void 0;
          var i = r(8343);
          t2.IBufferService = i.createDecorator("BufferService"), t2.ICoreMouseService = i.createDecorator("CoreMouseService"), t2.ICoreService = i.createDecorator("CoreService"), t2.ICharsetService = i.createDecorator("CharsetService"), t2.IDirtyRowService = i.createDecorator("DirtyRowService"), t2.IInstantiationService = i.createDecorator("InstantiationService"), t2.ILogService = i.createDecorator("LogService"), t2.IOptionsService = i.createDecorator("OptionsService"), t2.IUnicodeService = i.createDecorator("UnicodeService");
        }, 1480: (e2, t2, r) => {
          Object.defineProperty(t2, "__esModule", {value: true}), t2.UnicodeService = void 0;
          var i = r(8460), n = r(225), o = function() {
            function e3() {
              this._providers = Object.create(null), this._active = "", this._onChange = new i.EventEmitter();
              var e4 = new n.UnicodeV6();
              this.register(e4), this._active = e4.version, this._activeProvider = e4;
            }
            return Object.defineProperty(e3.prototype, "onChange", {get: function() {
              return this._onChange.event;
            }, enumerable: false, configurable: true}), Object.defineProperty(e3.prototype, "versions", {get: function() {
              return Object.keys(this._providers);
            }, enumerable: false, configurable: true}), Object.defineProperty(e3.prototype, "activeVersion", {get: function() {
              return this._active;
            }, set: function(e4) {
              if (!this._providers[e4])
                throw new Error('unknown Unicode version "' + e4 + '"');
              this._active = e4, this._activeProvider = this._providers[e4], this._onChange.fire(e4);
            }, enumerable: false, configurable: true}), e3.prototype.register = function(e4) {
              this._providers[e4.version] = e4;
            }, e3.prototype.wcwidth = function(e4) {
              return this._activeProvider.wcwidth(e4);
            }, e3.prototype.getStringCellWidth = function(e4) {
              for (var t3 = 0, r2 = e4.length, i2 = 0; i2 < r2; ++i2) {
                var n2 = e4.charCodeAt(i2);
                if (55296 <= n2 && n2 <= 56319) {
                  if (++i2 >= r2)
                    return t3 + this.wcwidth(n2);
                  var o2 = e4.charCodeAt(i2);
                  56320 <= o2 && o2 <= 57343 ? n2 = 1024 * (n2 - 55296) + o2 - 56320 + 65536 : t3 += this.wcwidth(o2);
                }
                t3 += this.wcwidth(n2);
              }
              return t3;
            }, e3;
          }();
          t2.UnicodeService = o;
        }}, t = {};
        return function r(i) {
          if (t[i])
            return t[i].exports;
          var n = t[i] = {exports: {}};
          return e[i].call(n.exports, n, n.exports, r), n.exports;
        }(4389);
      })();
    });
  });

  // node_modules/xterm-addon-fit/lib/xterm-addon-fit.js
  var require_xterm_addon_fit = __commonJS((exports, module) => {
    !function(e, t) {
      typeof exports == "object" && typeof module == "object" ? module.exports = t() : typeof define == "function" && define.amd ? define([], t) : typeof exports == "object" ? exports.FitAddon = t() : e.FitAddon = t();
    }(self, function() {
      return (() => {
        "use strict";
        var e = {775: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", {value: true}), t2.FitAddon = void 0;
          var r = function() {
            function e3() {
            }
            return e3.prototype.activate = function(e4) {
              this._terminal = e4;
            }, e3.prototype.dispose = function() {
            }, e3.prototype.fit = function() {
              var e4 = this.proposeDimensions();
              if (e4 && this._terminal) {
                var t3 = this._terminal._core;
                this._terminal.rows === e4.rows && this._terminal.cols === e4.cols || (t3._renderService.clear(), this._terminal.resize(e4.cols, e4.rows));
              }
            }, e3.prototype.proposeDimensions = function() {
              if (this._terminal && this._terminal.element && this._terminal.element.parentElement) {
                var e4 = this._terminal._core;
                if (e4._renderService.dimensions.actualCellWidth !== 0 && e4._renderService.dimensions.actualCellHeight !== 0) {
                  var t3 = window.getComputedStyle(this._terminal.element.parentElement), r2 = parseInt(t3.getPropertyValue("height")), i = Math.max(0, parseInt(t3.getPropertyValue("width"))), n = window.getComputedStyle(this._terminal.element), o = r2 - (parseInt(n.getPropertyValue("padding-top")) + parseInt(n.getPropertyValue("padding-bottom"))), a = i - (parseInt(n.getPropertyValue("padding-right")) + parseInt(n.getPropertyValue("padding-left"))) - e4.viewport.scrollBarWidth;
                  return {cols: Math.max(2, Math.floor(a / e4._renderService.dimensions.actualCellWidth)), rows: Math.max(1, Math.floor(o / e4._renderService.dimensions.actualCellHeight))};
                }
              }
            }, e3;
          }();
          t2.FitAddon = r;
        }}, t = {};
        return function r(i) {
          if (t[i])
            return t[i].exports;
          var n = t[i] = {exports: {}};
          return e[i](n, n.exports, r), n.exports;
        }(775);
      })();
    });
  });

  // node_modules/parseuri/index.js
  var require_parseuri = __commonJS((exports, module) => {
    var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
    var parts = [
      "source",
      "protocol",
      "authority",
      "userInfo",
      "user",
      "password",
      "host",
      "port",
      "relative",
      "path",
      "directory",
      "file",
      "query",
      "anchor"
    ];
    module.exports = function parseuri(str) {
      var src = str, b = str.indexOf("["), e = str.indexOf("]");
      if (b != -1 && e != -1) {
        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ";") + str.substring(e, str.length);
      }
      var m = re.exec(str || ""), uri = {}, i = 14;
      while (i--) {
        uri[parts[i]] = m[i] || "";
      }
      if (b != -1 && e != -1) {
        uri.source = src;
        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ":");
        uri.authority = uri.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
        uri.ipv6uri = true;
      }
      uri.pathNames = pathNames(uri, uri["path"]);
      uri.queryKey = queryKey(uri, uri["query"]);
      return uri;
    };
    function pathNames(obj, path) {
      var regx = /\/{2,9}/g, names = path.replace(regx, "/").split("/");
      if (path.substr(0, 1) == "/" || path.length === 0) {
        names.splice(0, 1);
      }
      if (path.substr(path.length - 1, 1) == "/") {
        names.splice(names.length - 1, 1);
      }
      return names;
    }
    function queryKey(uri, query) {
      var data = {};
      query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function($0, $1, $2) {
        if ($1) {
          data[$1] = $2;
        }
      });
      return data;
    }
  });

  // node_modules/ms/index.js
  var require_ms = __commonJS((exports, module) => {
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var w = d * 7;
    var y = d * 365.25;
    module.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse(val);
      } else if (type === "number" && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
    };
    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "weeks":
        case "week":
        case "w":
          return n * w;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    function fmtShort(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return Math.round(ms / d) + "d";
      }
      if (msAbs >= h) {
        return Math.round(ms / h) + "h";
      }
      if (msAbs >= m) {
        return Math.round(ms / m) + "m";
      }
      if (msAbs >= s) {
        return Math.round(ms / s) + "s";
      }
      return ms + "ms";
    }
    function fmtLong(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return plural(ms, msAbs, d, "day");
      }
      if (msAbs >= h) {
        return plural(ms, msAbs, h, "hour");
      }
      if (msAbs >= m) {
        return plural(ms, msAbs, m, "minute");
      }
      if (msAbs >= s) {
        return plural(ms, msAbs, s, "second");
      }
      return ms + " ms";
    }
    function plural(ms, msAbs, n, name) {
      var isPlural = msAbs >= n * 1.5;
      return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
    }
  });

  // node_modules/debug/src/common.js
  var require_common = __commonJS((exports, module) => {
    function setup(env) {
      createDebug.debug = createDebug;
      createDebug.default = createDebug;
      createDebug.coerce = coerce;
      createDebug.disable = disable;
      createDebug.enable = enable;
      createDebug.enabled = enabled;
      createDebug.humanize = require_ms();
      createDebug.destroy = destroy;
      Object.keys(env).forEach((key) => {
        createDebug[key] = env[key];
      });
      createDebug.names = [];
      createDebug.skips = [];
      createDebug.formatters = {};
      function selectColor(namespace) {
        let hash = 0;
        for (let i = 0; i < namespace.length; i++) {
          hash = (hash << 5) - hash + namespace.charCodeAt(i);
          hash |= 0;
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
      }
      createDebug.selectColor = selectColor;
      function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        function debug(...args) {
          if (!debug.enabled) {
            return;
          }
          const self2 = debug;
          const curr = Number(new Date());
          const ms = curr - (prevTime || curr);
          self2.diff = ms;
          self2.prev = prevTime;
          self2.curr = curr;
          prevTime = curr;
          args[0] = createDebug.coerce(args[0]);
          if (typeof args[0] !== "string") {
            args.unshift("%O");
          }
          let index = 0;
          args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
            if (match === "%%") {
              return "%";
            }
            index++;
            const formatter = createDebug.formatters[format];
            if (typeof formatter === "function") {
              const val = args[index];
              match = formatter.call(self2, val);
              args.splice(index, 1);
              index--;
            }
            return match;
          });
          createDebug.formatArgs.call(self2, args);
          const logFn = self2.log || createDebug.log;
          logFn.apply(self2, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy;
        Object.defineProperty(debug, "enabled", {
          enumerable: true,
          configurable: false,
          get: () => enableOverride === null ? createDebug.enabled(namespace) : enableOverride,
          set: (v) => {
            enableOverride = v;
          }
        });
        if (typeof createDebug.init === "function") {
          createDebug.init(debug);
        }
        return debug;
      }
      function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
      }
      function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.names = [];
        createDebug.skips = [];
        let i;
        const split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
        const len = split.length;
        for (i = 0; i < len; i++) {
          if (!split[i]) {
            continue;
          }
          namespaces = split[i].replace(/\*/g, ".*?");
          if (namespaces[0] === "-") {
            createDebug.skips.push(new RegExp("^" + namespaces.substr(1) + "$"));
          } else {
            createDebug.names.push(new RegExp("^" + namespaces + "$"));
          }
        }
      }
      function disable() {
        const namespaces = [
          ...createDebug.names.map(toNamespace),
          ...createDebug.skips.map(toNamespace).map((namespace) => "-" + namespace)
        ].join(",");
        createDebug.enable("");
        return namespaces;
      }
      function enabled(name) {
        if (name[name.length - 1] === "*") {
          return true;
        }
        let i;
        let len;
        for (i = 0, len = createDebug.skips.length; i < len; i++) {
          if (createDebug.skips[i].test(name)) {
            return false;
          }
        }
        for (i = 0, len = createDebug.names.length; i < len; i++) {
          if (createDebug.names[i].test(name)) {
            return true;
          }
        }
        return false;
      }
      function toNamespace(regexp) {
        return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, "*");
      }
      function coerce(val) {
        if (val instanceof Error) {
          return val.stack || val.message;
        }
        return val;
      }
      function destroy() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }
      createDebug.enable(createDebug.load());
      return createDebug;
    }
    module.exports = setup;
  });

  // node_modules/debug/src/browser.js
  var require_browser = __commonJS((exports, module) => {
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = localstorage();
    exports.destroy = (() => {
      let warned = false;
      return () => {
        if (!warned) {
          warned = true;
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
      };
    })();
    exports.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
        return true;
      }
      if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      }
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function formatArgs(args) {
      args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      const c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      let index = 0;
      let lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, (match) => {
        if (match === "%%") {
          return;
        }
        index++;
        if (match === "%c") {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    exports.log = console.debug || console.log || (() => {
    });
    function save(namespaces) {
      try {
        if (namespaces) {
          exports.storage.setItem("debug", namespaces);
        } else {
          exports.storage.removeItem("debug");
        }
      } catch (error) {
      }
    }
    function load() {
      let r;
      try {
        r = exports.storage.getItem("debug");
      } catch (error) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    function localstorage() {
      try {
        return localStorage;
      } catch (error) {
      }
    }
    module.exports = require_common()(exports);
    var {formatters} = module.exports;
    formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (error) {
        return "[UnexpectedJSONParseError]: " + error.message;
      }
    };
  });

  // node_modules/socket.io-client/build/url.js
  var require_url = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.url = void 0;
    var parseuri = require_parseuri();
    var debug = require_browser()("socket.io-client:url");
    function url(uri, loc) {
      let obj = uri;
      loc = loc || typeof location !== "undefined" && location;
      if (uri == null)
        uri = loc.protocol + "//" + loc.host;
      if (typeof uri === "string") {
        if (uri.charAt(0) === "/") {
          if (uri.charAt(1) === "/") {
            uri = loc.protocol + uri;
          } else {
            uri = loc.host + uri;
          }
        }
        if (!/^(https?|wss?):\/\//.test(uri)) {
          debug("protocol-less url %s", uri);
          if (typeof loc !== "undefined") {
            uri = loc.protocol + "//" + uri;
          } else {
            uri = "https://" + uri;
          }
        }
        debug("parse %s", uri);
        obj = parseuri(uri);
      }
      if (!obj.port) {
        if (/^(http|ws)$/.test(obj.protocol)) {
          obj.port = "80";
        } else if (/^(http|ws)s$/.test(obj.protocol)) {
          obj.port = "443";
        }
      }
      obj.path = obj.path || "/";
      const ipv6 = obj.host.indexOf(":") !== -1;
      const host = ipv6 ? "[" + obj.host + "]" : obj.host;
      obj.id = obj.protocol + "://" + host + ":" + obj.port;
      obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
      return obj;
    }
    exports.url = url;
  });

  // node_modules/has-cors/index.js
  var require_has_cors = __commonJS((exports, module) => {
    try {
      module.exports = typeof XMLHttpRequest !== "undefined" && "withCredentials" in new XMLHttpRequest();
    } catch (err) {
      module.exports = false;
    }
  });

  // node_modules/engine.io-client/lib/globalThis.browser.js
  var require_globalThis_browser = __commonJS((exports, module) => {
    module.exports = (() => {
      if (typeof self !== "undefined") {
        return self;
      } else if (typeof window !== "undefined") {
        return window;
      } else {
        return Function("return this")();
      }
    })();
  });

  // node_modules/engine.io-client/lib/xmlhttprequest.js
  var require_xmlhttprequest = __commonJS((exports, module) => {
    var hasCORS = require_has_cors();
    var globalThis = require_globalThis_browser();
    module.exports = function(opts) {
      const xdomain = opts.xdomain;
      const xscheme = opts.xscheme;
      const enablesXDR = opts.enablesXDR;
      try {
        if (typeof XMLHttpRequest !== "undefined" && (!xdomain || hasCORS)) {
          return new XMLHttpRequest();
        }
      } catch (e) {
      }
      try {
        if (typeof XDomainRequest !== "undefined" && !xscheme && enablesXDR) {
          return new XDomainRequest();
        }
      } catch (e) {
      }
      if (!xdomain) {
        try {
          return new globalThis[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
        } catch (e) {
        }
      }
    };
  });

  // node_modules/engine.io-parser/lib/commons.js
  var require_commons = __commonJS((exports, module) => {
    var PACKET_TYPES = Object.create(null);
    PACKET_TYPES["open"] = "0";
    PACKET_TYPES["close"] = "1";
    PACKET_TYPES["ping"] = "2";
    PACKET_TYPES["pong"] = "3";
    PACKET_TYPES["message"] = "4";
    PACKET_TYPES["upgrade"] = "5";
    PACKET_TYPES["noop"] = "6";
    var PACKET_TYPES_REVERSE = Object.create(null);
    Object.keys(PACKET_TYPES).forEach((key) => {
      PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
    });
    var ERROR_PACKET = {type: "error", data: "parser error"};
    module.exports = {
      PACKET_TYPES,
      PACKET_TYPES_REVERSE,
      ERROR_PACKET
    };
  });

  // node_modules/engine.io-parser/lib/encodePacket.browser.js
  var require_encodePacket_browser = __commonJS((exports, module) => {
    var {PACKET_TYPES} = require_commons();
    var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
    var withNativeArrayBuffer = typeof ArrayBuffer === "function";
    var isView = (obj) => {
      return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
    };
    var encodePacket = ({type, data}, supportsBinary, callback) => {
      if (withNativeBlob && data instanceof Blob) {
        if (supportsBinary) {
          return callback(data);
        } else {
          return encodeBlobAsBase64(data, callback);
        }
      } else if (withNativeArrayBuffer && (data instanceof ArrayBuffer || isView(data))) {
        if (supportsBinary) {
          return callback(data instanceof ArrayBuffer ? data : data.buffer);
        } else {
          return encodeBlobAsBase64(new Blob([data]), callback);
        }
      }
      return callback(PACKET_TYPES[type] + (data || ""));
    };
    var encodeBlobAsBase64 = (data, callback) => {
      const fileReader = new FileReader();
      fileReader.onload = function() {
        const content = fileReader.result.split(",")[1];
        callback("b" + content);
      };
      return fileReader.readAsDataURL(data);
    };
    module.exports = encodePacket;
  });

  // node_modules/base64-arraybuffer/lib/base64-arraybuffer.js
  var require_base64_arraybuffer = __commonJS((exports) => {
    (function(chars) {
      "use strict";
      exports.encode = function(arraybuffer) {
        var bytes = new Uint8Array(arraybuffer), i, len = bytes.length, base64 = "";
        for (i = 0; i < len; i += 3) {
          base64 += chars[bytes[i] >> 2];
          base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
          base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
          base64 += chars[bytes[i + 2] & 63];
        }
        if (len % 3 === 2) {
          base64 = base64.substring(0, base64.length - 1) + "=";
        } else if (len % 3 === 1) {
          base64 = base64.substring(0, base64.length - 2) + "==";
        }
        return base64;
      };
      exports.decode = function(base64) {
        var bufferLength = base64.length * 0.75, len = base64.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
        if (base64[base64.length - 1] === "=") {
          bufferLength--;
          if (base64[base64.length - 2] === "=") {
            bufferLength--;
          }
        }
        var arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
        for (i = 0; i < len; i += 4) {
          encoded1 = chars.indexOf(base64[i]);
          encoded2 = chars.indexOf(base64[i + 1]);
          encoded3 = chars.indexOf(base64[i + 2]);
          encoded4 = chars.indexOf(base64[i + 3]);
          bytes[p++] = encoded1 << 2 | encoded2 >> 4;
          bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
          bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
        }
        return arraybuffer;
      };
    })("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");
  });

  // node_modules/engine.io-parser/lib/decodePacket.browser.js
  var require_decodePacket_browser = __commonJS((exports, module) => {
    var {PACKET_TYPES_REVERSE, ERROR_PACKET} = require_commons();
    var withNativeArrayBuffer = typeof ArrayBuffer === "function";
    var base64decoder;
    if (withNativeArrayBuffer) {
      base64decoder = require_base64_arraybuffer();
    }
    var decodePacket = (encodedPacket, binaryType) => {
      if (typeof encodedPacket !== "string") {
        return {
          type: "message",
          data: mapBinary(encodedPacket, binaryType)
        };
      }
      const type = encodedPacket.charAt(0);
      if (type === "b") {
        return {
          type: "message",
          data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
        };
      }
      const packetType = PACKET_TYPES_REVERSE[type];
      if (!packetType) {
        return ERROR_PACKET;
      }
      return encodedPacket.length > 1 ? {
        type: PACKET_TYPES_REVERSE[type],
        data: encodedPacket.substring(1)
      } : {
        type: PACKET_TYPES_REVERSE[type]
      };
    };
    var decodeBase64Packet = (data, binaryType) => {
      if (base64decoder) {
        const decoded = base64decoder.decode(data);
        return mapBinary(decoded, binaryType);
      } else {
        return {base64: true, data};
      }
    };
    var mapBinary = (data, binaryType) => {
      switch (binaryType) {
        case "blob":
          return data instanceof ArrayBuffer ? new Blob([data]) : data;
        case "arraybuffer":
        default:
          return data;
      }
    };
    module.exports = decodePacket;
  });

  // node_modules/engine.io-parser/lib/index.js
  var require_lib = __commonJS((exports, module) => {
    var encodePacket = require_encodePacket_browser();
    var decodePacket = require_decodePacket_browser();
    var SEPARATOR = String.fromCharCode(30);
    var encodePayload = (packets, callback) => {
      const length = packets.length;
      const encodedPackets = new Array(length);
      let count = 0;
      packets.forEach((packet, i) => {
        encodePacket(packet, false, (encodedPacket) => {
          encodedPackets[i] = encodedPacket;
          if (++count === length) {
            callback(encodedPackets.join(SEPARATOR));
          }
        });
      });
    };
    var decodePayload = (encodedPayload, binaryType) => {
      const encodedPackets = encodedPayload.split(SEPARATOR);
      const packets = [];
      for (let i = 0; i < encodedPackets.length; i++) {
        const decodedPacket = decodePacket(encodedPackets[i], binaryType);
        packets.push(decodedPacket);
        if (decodedPacket.type === "error") {
          break;
        }
      }
      return packets;
    };
    module.exports = {
      protocol: 4,
      encodePacket,
      encodePayload,
      decodePacket,
      decodePayload
    };
  });

  // node_modules/component-emitter/index.js
  var require_component_emitter = __commonJS((exports, module) => {
    if (typeof module !== "undefined") {
      module.exports = Emitter;
    }
    function Emitter(obj) {
      if (obj)
        return mixin(obj);
    }
    function mixin(obj) {
      for (var key in Emitter.prototype) {
        obj[key] = Emitter.prototype[key];
      }
      return obj;
    }
    Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
      this._callbacks = this._callbacks || {};
      (this._callbacks["$" + event] = this._callbacks["$" + event] || []).push(fn);
      return this;
    };
    Emitter.prototype.once = function(event, fn) {
      function on() {
        this.off(event, on);
        fn.apply(this, arguments);
      }
      on.fn = fn;
      this.on(event, on);
      return this;
    };
    Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn) {
      this._callbacks = this._callbacks || {};
      if (arguments.length == 0) {
        this._callbacks = {};
        return this;
      }
      var callbacks = this._callbacks["$" + event];
      if (!callbacks)
        return this;
      if (arguments.length == 1) {
        delete this._callbacks["$" + event];
        return this;
      }
      var cb;
      for (var i = 0; i < callbacks.length; i++) {
        cb = callbacks[i];
        if (cb === fn || cb.fn === fn) {
          callbacks.splice(i, 1);
          break;
        }
      }
      if (callbacks.length === 0) {
        delete this._callbacks["$" + event];
      }
      return this;
    };
    Emitter.prototype.emit = function(event) {
      this._callbacks = this._callbacks || {};
      var args = new Array(arguments.length - 1), callbacks = this._callbacks["$" + event];
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
      if (callbacks) {
        callbacks = callbacks.slice(0);
        for (var i = 0, len = callbacks.length; i < len; ++i) {
          callbacks[i].apply(this, args);
        }
      }
      return this;
    };
    Emitter.prototype.listeners = function(event) {
      this._callbacks = this._callbacks || {};
      return this._callbacks["$" + event] || [];
    };
    Emitter.prototype.hasListeners = function(event) {
      return !!this.listeners(event).length;
    };
  });

  // node_modules/engine.io-client/lib/transport.js
  var require_transport = __commonJS((exports, module) => {
    var parser = require_lib();
    var Emitter = require_component_emitter();
    var Transport = class extends Emitter {
      constructor(opts) {
        super();
        this.opts = opts;
        this.query = opts.query;
        this.readyState = "";
        this.socket = opts.socket;
      }
      onError(msg, desc) {
        const err = new Error(msg);
        err.type = "TransportError";
        err.description = desc;
        this.emit("error", err);
        return this;
      }
      open() {
        if (this.readyState === "closed" || this.readyState === "") {
          this.readyState = "opening";
          this.doOpen();
        }
        return this;
      }
      close() {
        if (this.readyState === "opening" || this.readyState === "open") {
          this.doClose();
          this.onClose();
        }
        return this;
      }
      send(packets) {
        if (this.readyState === "open") {
          this.write(packets);
        } else {
          throw new Error("Transport not open");
        }
      }
      onOpen() {
        this.readyState = "open";
        this.writable = true;
        this.emit("open");
      }
      onData(data) {
        const packet = parser.decodePacket(data, this.socket.binaryType);
        this.onPacket(packet);
      }
      onPacket(packet) {
        this.emit("packet", packet);
      }
      onClose() {
        this.readyState = "closed";
        this.emit("close");
      }
    };
    module.exports = Transport;
  });

  // node_modules/parseqs/index.js
  var require_parseqs = __commonJS((exports) => {
    exports.encode = function(obj) {
      var str = "";
      for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
          if (str.length)
            str += "&";
          str += encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]);
        }
      }
      return str;
    };
    exports.decode = function(qs) {
      var qry = {};
      var pairs = qs.split("&");
      for (var i = 0, l = pairs.length; i < l; i++) {
        var pair = pairs[i].split("=");
        qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
      }
      return qry;
    };
  });

  // node_modules/yeast/index.js
  var require_yeast = __commonJS((exports, module) => {
    "use strict";
    var alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split("");
    var length = 64;
    var map = {};
    var seed = 0;
    var i = 0;
    var prev;
    function encode(num) {
      var encoded = "";
      do {
        encoded = alphabet[num % length] + encoded;
        num = Math.floor(num / length);
      } while (num > 0);
      return encoded;
    }
    function decode(str) {
      var decoded = 0;
      for (i = 0; i < str.length; i++) {
        decoded = decoded * length + map[str.charAt(i)];
      }
      return decoded;
    }
    function yeast() {
      var now = encode(+new Date());
      if (now !== prev)
        return seed = 0, prev = now;
      return now + "." + encode(seed++);
    }
    for (; i < length; i++)
      map[alphabet[i]] = i;
    yeast.encode = encode;
    yeast.decode = decode;
    module.exports = yeast;
  });

  // node_modules/engine.io-client/lib/transports/polling.js
  var require_polling = __commonJS((exports, module) => {
    var Transport = require_transport();
    var parseqs = require_parseqs();
    var parser = require_lib();
    var yeast = require_yeast();
    var debug = require_browser()("engine.io-client:polling");
    var Polling = class extends Transport {
      get name() {
        return "polling";
      }
      doOpen() {
        this.poll();
      }
      pause(onPause) {
        const self2 = this;
        this.readyState = "pausing";
        function pause() {
          debug("paused");
          self2.readyState = "paused";
          onPause();
        }
        if (this.polling || !this.writable) {
          let total = 0;
          if (this.polling) {
            debug("we are currently polling - waiting to pause");
            total++;
            this.once("pollComplete", function() {
              debug("pre-pause polling complete");
              --total || pause();
            });
          }
          if (!this.writable) {
            debug("we are currently writing - waiting to pause");
            total++;
            this.once("drain", function() {
              debug("pre-pause writing complete");
              --total || pause();
            });
          }
        } else {
          pause();
        }
      }
      poll() {
        debug("polling");
        this.polling = true;
        this.doPoll();
        this.emit("poll");
      }
      onData(data) {
        const self2 = this;
        debug("polling got data %s", data);
        const callback = function(packet, index, total) {
          if (self2.readyState === "opening" && packet.type === "open") {
            self2.onOpen();
          }
          if (packet.type === "close") {
            self2.onClose();
            return false;
          }
          self2.onPacket(packet);
        };
        parser.decodePayload(data, this.socket.binaryType).forEach(callback);
        if (this.readyState !== "closed") {
          this.polling = false;
          this.emit("pollComplete");
          if (this.readyState === "open") {
            this.poll();
          } else {
            debug('ignoring poll - transport state "%s"', this.readyState);
          }
        }
      }
      doClose() {
        const self2 = this;
        function close() {
          debug("writing close packet");
          self2.write([{type: "close"}]);
        }
        if (this.readyState === "open") {
          debug("transport open - closing");
          close();
        } else {
          debug("transport not open - deferring close");
          this.once("open", close);
        }
      }
      write(packets) {
        this.writable = false;
        parser.encodePayload(packets, (data) => {
          this.doWrite(data, () => {
            this.writable = true;
            this.emit("drain");
          });
        });
      }
      uri() {
        let query = this.query || {};
        const schema = this.opts.secure ? "https" : "http";
        let port = "";
        if (this.opts.timestampRequests !== false) {
          query[this.opts.timestampParam] = yeast();
        }
        if (!this.supportsBinary && !query.sid) {
          query.b64 = 1;
        }
        query = parseqs.encode(query);
        if (this.opts.port && (schema === "https" && Number(this.opts.port) !== 443 || schema === "http" && Number(this.opts.port) !== 80)) {
          port = ":" + this.opts.port;
        }
        if (query.length) {
          query = "?" + query;
        }
        const ipv6 = this.opts.hostname.indexOf(":") !== -1;
        return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + query;
      }
    };
    module.exports = Polling;
  });

  // node_modules/engine.io-client/lib/util.js
  var require_util = __commonJS((exports, module) => {
    module.exports.pick = (obj, ...attr) => {
      return attr.reduce((acc, k) => {
        if (obj.hasOwnProperty(k)) {
          acc[k] = obj[k];
        }
        return acc;
      }, {});
    };
  });

  // node_modules/engine.io-client/lib/transports/polling-xhr.js
  var require_polling_xhr = __commonJS((exports, module) => {
    var XMLHttpRequest2 = require_xmlhttprequest();
    var Polling = require_polling();
    var Emitter = require_component_emitter();
    var {pick} = require_util();
    var globalThis = require_globalThis_browser();
    var debug = require_browser()("engine.io-client:polling-xhr");
    function empty() {
    }
    var hasXHR2 = function() {
      const xhr = new XMLHttpRequest2({xdomain: false});
      return xhr.responseType != null;
    }();
    var XHR = class extends Polling {
      constructor(opts) {
        super(opts);
        if (typeof location !== "undefined") {
          const isSSL = location.protocol === "https:";
          let port = location.port;
          if (!port) {
            port = isSSL ? 443 : 80;
          }
          this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
          this.xs = opts.secure !== isSSL;
        }
        const forceBase64 = opts && opts.forceBase64;
        this.supportsBinary = hasXHR2 && !forceBase64;
      }
      request(opts = {}) {
        Object.assign(opts, {xd: this.xd, xs: this.xs}, this.opts);
        return new Request(this.uri(), opts);
      }
      doWrite(data, fn) {
        const req = this.request({
          method: "POST",
          data
        });
        const self2 = this;
        req.on("success", fn);
        req.on("error", function(err) {
          self2.onError("xhr post error", err);
        });
      }
      doPoll() {
        debug("xhr poll");
        const req = this.request();
        const self2 = this;
        req.on("data", function(data) {
          self2.onData(data);
        });
        req.on("error", function(err) {
          self2.onError("xhr poll error", err);
        });
        this.pollXhr = req;
      }
    };
    var Request = class extends Emitter {
      constructor(uri, opts) {
        super();
        this.opts = opts;
        this.method = opts.method || "GET";
        this.uri = uri;
        this.async = opts.async !== false;
        this.data = opts.data !== void 0 ? opts.data : null;
        this.create();
      }
      create() {
        const opts = pick(this.opts, "agent", "enablesXDR", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized");
        opts.xdomain = !!this.opts.xd;
        opts.xscheme = !!this.opts.xs;
        const xhr = this.xhr = new XMLHttpRequest2(opts);
        const self2 = this;
        try {
          debug("xhr open %s: %s", this.method, this.uri);
          xhr.open(this.method, this.uri, this.async);
          try {
            if (this.opts.extraHeaders) {
              xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
              for (let i in this.opts.extraHeaders) {
                if (this.opts.extraHeaders.hasOwnProperty(i)) {
                  xhr.setRequestHeader(i, this.opts.extraHeaders[i]);
                }
              }
            }
          } catch (e) {
          }
          if (this.method === "POST") {
            try {
              xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
            } catch (e) {
            }
          }
          try {
            xhr.setRequestHeader("Accept", "*/*");
          } catch (e) {
          }
          if ("withCredentials" in xhr) {
            xhr.withCredentials = this.opts.withCredentials;
          }
          if (this.opts.requestTimeout) {
            xhr.timeout = this.opts.requestTimeout;
          }
          if (this.hasXDR()) {
            xhr.onload = function() {
              self2.onLoad();
            };
            xhr.onerror = function() {
              self2.onError(xhr.responseText);
            };
          } else {
            xhr.onreadystatechange = function() {
              if (xhr.readyState !== 4)
                return;
              if (xhr.status === 200 || xhr.status === 1223) {
                self2.onLoad();
              } else {
                setTimeout(function() {
                  self2.onError(typeof xhr.status === "number" ? xhr.status : 0);
                }, 0);
              }
            };
          }
          debug("xhr data %s", this.data);
          xhr.send(this.data);
        } catch (e) {
          setTimeout(function() {
            self2.onError(e);
          }, 0);
          return;
        }
        if (typeof document !== "undefined") {
          this.index = Request.requestsCount++;
          Request.requests[this.index] = this;
        }
      }
      onSuccess() {
        this.emit("success");
        this.cleanup();
      }
      onData(data) {
        this.emit("data", data);
        this.onSuccess();
      }
      onError(err) {
        this.emit("error", err);
        this.cleanup(true);
      }
      cleanup(fromError) {
        if (typeof this.xhr === "undefined" || this.xhr === null) {
          return;
        }
        if (this.hasXDR()) {
          this.xhr.onload = this.xhr.onerror = empty;
        } else {
          this.xhr.onreadystatechange = empty;
        }
        if (fromError) {
          try {
            this.xhr.abort();
          } catch (e) {
          }
        }
        if (typeof document !== "undefined") {
          delete Request.requests[this.index];
        }
        this.xhr = null;
      }
      onLoad() {
        const data = this.xhr.responseText;
        if (data !== null) {
          this.onData(data);
        }
      }
      hasXDR() {
        return typeof XDomainRequest !== "undefined" && !this.xs && this.enablesXDR;
      }
      abort() {
        this.cleanup();
      }
    };
    Request.requestsCount = 0;
    Request.requests = {};
    if (typeof document !== "undefined") {
      if (typeof attachEvent === "function") {
        attachEvent("onunload", unloadHandler);
      } else if (typeof addEventListener === "function") {
        const terminationEvent = "onpagehide" in globalThis ? "pagehide" : "unload";
        addEventListener(terminationEvent, unloadHandler, false);
      }
    }
    function unloadHandler() {
      for (let i in Request.requests) {
        if (Request.requests.hasOwnProperty(i)) {
          Request.requests[i].abort();
        }
      }
    }
    module.exports = XHR;
    module.exports.Request = Request;
  });

  // node_modules/engine.io-client/lib/transports/polling-jsonp.js
  var require_polling_jsonp = __commonJS((exports, module) => {
    var Polling = require_polling();
    var globalThis = require_globalThis_browser();
    var rNewline = /\n/g;
    var rEscapedNewline = /\\n/g;
    var callbacks;
    function empty() {
    }
    var JSONPPolling = class extends Polling {
      constructor(opts) {
        super(opts);
        this.query = this.query || {};
        if (!callbacks) {
          callbacks = globalThis.___eio = globalThis.___eio || [];
        }
        this.index = callbacks.length;
        const self2 = this;
        callbacks.push(function(msg) {
          self2.onData(msg);
        });
        this.query.j = this.index;
        if (typeof addEventListener === "function") {
          addEventListener("beforeunload", function() {
            if (self2.script)
              self2.script.onerror = empty;
          }, false);
        }
      }
      get supportsBinary() {
        return false;
      }
      doClose() {
        if (this.script) {
          this.script.parentNode.removeChild(this.script);
          this.script = null;
        }
        if (this.form) {
          this.form.parentNode.removeChild(this.form);
          this.form = null;
          this.iframe = null;
        }
        super.doClose();
      }
      doPoll() {
        const self2 = this;
        const script = document.createElement("script");
        if (this.script) {
          this.script.parentNode.removeChild(this.script);
          this.script = null;
        }
        script.async = true;
        script.src = this.uri();
        script.onerror = function(e) {
          self2.onError("jsonp poll error", e);
        };
        const insertAt = document.getElementsByTagName("script")[0];
        if (insertAt) {
          insertAt.parentNode.insertBefore(script, insertAt);
        } else {
          (document.head || document.body).appendChild(script);
        }
        this.script = script;
        const isUAgecko = typeof navigator !== "undefined" && /gecko/i.test(navigator.userAgent);
        if (isUAgecko) {
          setTimeout(function() {
            const iframe = document.createElement("iframe");
            document.body.appendChild(iframe);
            document.body.removeChild(iframe);
          }, 100);
        }
      }
      doWrite(data, fn) {
        const self2 = this;
        let iframe;
        if (!this.form) {
          const form = document.createElement("form");
          const area = document.createElement("textarea");
          const id = this.iframeId = "eio_iframe_" + this.index;
          form.className = "socketio";
          form.style.position = "absolute";
          form.style.top = "-1000px";
          form.style.left = "-1000px";
          form.target = id;
          form.method = "POST";
          form.setAttribute("accept-charset", "utf-8");
          area.name = "d";
          form.appendChild(area);
          document.body.appendChild(form);
          this.form = form;
          this.area = area;
        }
        this.form.action = this.uri();
        function complete() {
          initIframe();
          fn();
        }
        function initIframe() {
          if (self2.iframe) {
            try {
              self2.form.removeChild(self2.iframe);
            } catch (e) {
              self2.onError("jsonp polling iframe removal error", e);
            }
          }
          try {
            const html = '<iframe src="javascript:0" name="' + self2.iframeId + '">';
            iframe = document.createElement(html);
          } catch (e) {
            iframe = document.createElement("iframe");
            iframe.name = self2.iframeId;
            iframe.src = "javascript:0";
          }
          iframe.id = self2.iframeId;
          self2.form.appendChild(iframe);
          self2.iframe = iframe;
        }
        initIframe();
        data = data.replace(rEscapedNewline, "\\\n");
        this.area.value = data.replace(rNewline, "\\n");
        try {
          this.form.submit();
        } catch (e) {
        }
        if (this.iframe.attachEvent) {
          this.iframe.onreadystatechange = function() {
            if (self2.iframe.readyState === "complete") {
              complete();
            }
          };
        } else {
          this.iframe.onload = complete;
        }
      }
    };
    module.exports = JSONPPolling;
  });

  // node_modules/engine.io-client/lib/transports/websocket-constructor.browser.js
  var require_websocket_constructor_browser = __commonJS((exports, module) => {
    var globalThis = require_globalThis_browser();
    module.exports = {
      WebSocket: globalThis.WebSocket || globalThis.MozWebSocket,
      usingBrowserWebSocket: true,
      defaultBinaryType: "arraybuffer"
    };
  });

  // node_modules/engine.io-client/lib/transports/websocket.js
  var require_websocket = __commonJS((exports, module) => {
    var Transport = require_transport();
    var parser = require_lib();
    var parseqs = require_parseqs();
    var yeast = require_yeast();
    var {pick} = require_util();
    var {
      WebSocket,
      usingBrowserWebSocket,
      defaultBinaryType
    } = require_websocket_constructor_browser();
    var debug = require_browser()("engine.io-client:websocket");
    var isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
    var WS = class extends Transport {
      constructor(opts) {
        super(opts);
        this.supportsBinary = !opts.forceBase64;
      }
      get name() {
        return "websocket";
      }
      doOpen() {
        if (!this.check()) {
          return;
        }
        const uri = this.uri();
        const protocols = this.opts.protocols;
        const opts = isReactNative ? {} : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
        if (this.opts.extraHeaders) {
          opts.headers = this.opts.extraHeaders;
        }
        try {
          this.ws = usingBrowserWebSocket && !isReactNative ? protocols ? new WebSocket(uri, protocols) : new WebSocket(uri) : new WebSocket(uri, protocols, opts);
        } catch (err) {
          return this.emit("error", err);
        }
        this.ws.binaryType = this.socket.binaryType || defaultBinaryType;
        this.addEventListeners();
      }
      addEventListeners() {
        const self2 = this;
        this.ws.onopen = function() {
          self2.onOpen();
        };
        this.ws.onclose = function() {
          self2.onClose();
        };
        this.ws.onmessage = function(ev) {
          self2.onData(ev.data);
        };
        this.ws.onerror = function(e) {
          self2.onError("websocket error", e);
        };
      }
      write(packets) {
        const self2 = this;
        this.writable = false;
        let total = packets.length;
        let i = 0;
        const l = total;
        for (; i < l; i++) {
          (function(packet) {
            parser.encodePacket(packet, self2.supportsBinary, function(data) {
              const opts = {};
              if (!usingBrowserWebSocket) {
                if (packet.options) {
                  opts.compress = packet.options.compress;
                }
                if (self2.opts.perMessageDeflate) {
                  const len = typeof data === "string" ? Buffer.byteLength(data) : data.length;
                  if (len < self2.opts.perMessageDeflate.threshold) {
                    opts.compress = false;
                  }
                }
              }
              try {
                if (usingBrowserWebSocket) {
                  self2.ws.send(data);
                } else {
                  self2.ws.send(data, opts);
                }
              } catch (e) {
                debug("websocket closed before onclose event");
              }
              --total || done();
            });
          })(packets[i]);
        }
        function done() {
          self2.emit("flush");
          setTimeout(function() {
            self2.writable = true;
            self2.emit("drain");
          }, 0);
        }
      }
      onClose() {
        Transport.prototype.onClose.call(this);
      }
      doClose() {
        if (typeof this.ws !== "undefined") {
          this.ws.close();
        }
      }
      uri() {
        let query = this.query || {};
        const schema = this.opts.secure ? "wss" : "ws";
        let port = "";
        if (this.opts.port && (schema === "wss" && Number(this.opts.port) !== 443 || schema === "ws" && Number(this.opts.port) !== 80)) {
          port = ":" + this.opts.port;
        }
        if (this.opts.timestampRequests) {
          query[this.opts.timestampParam] = yeast();
        }
        if (!this.supportsBinary) {
          query.b64 = 1;
        }
        query = parseqs.encode(query);
        if (query.length) {
          query = "?" + query;
        }
        const ipv6 = this.opts.hostname.indexOf(":") !== -1;
        return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + query;
      }
      check() {
        return !!WebSocket && !("__initialize" in WebSocket && this.name === WS.prototype.name);
      }
    };
    module.exports = WS;
  });

  // node_modules/engine.io-client/lib/transports/index.js
  var require_transports = __commonJS((exports) => {
    var XMLHttpRequest2 = require_xmlhttprequest();
    var XHR = require_polling_xhr();
    var JSONP = require_polling_jsonp();
    var websocket = require_websocket();
    exports.polling = polling;
    exports.websocket = websocket;
    function polling(opts) {
      let xhr;
      let xd = false;
      let xs = false;
      const jsonp = opts.jsonp !== false;
      if (typeof location !== "undefined") {
        const isSSL = location.protocol === "https:";
        let port = location.port;
        if (!port) {
          port = isSSL ? 443 : 80;
        }
        xd = opts.hostname !== location.hostname || port !== opts.port;
        xs = opts.secure !== isSSL;
      }
      opts.xdomain = xd;
      opts.xscheme = xs;
      xhr = new XMLHttpRequest2(opts);
      if ("open" in xhr && !opts.forceJSONP) {
        return new XHR(opts);
      } else {
        if (!jsonp)
          throw new Error("JSONP disabled");
        return new JSONP(opts);
      }
    }
  });

  // node_modules/engine.io-client/lib/socket.js
  var require_socket = __commonJS((exports, module) => {
    var transports = require_transports();
    var Emitter = require_component_emitter();
    var debug = require_browser()("engine.io-client:socket");
    var parser = require_lib();
    var parseuri = require_parseuri();
    var parseqs = require_parseqs();
    var Socket = class extends Emitter {
      constructor(uri, opts = {}) {
        super();
        if (uri && typeof uri === "object") {
          opts = uri;
          uri = null;
        }
        if (uri) {
          uri = parseuri(uri);
          opts.hostname = uri.host;
          opts.secure = uri.protocol === "https" || uri.protocol === "wss";
          opts.port = uri.port;
          if (uri.query)
            opts.query = uri.query;
        } else if (opts.host) {
          opts.hostname = parseuri(opts.host).host;
        }
        this.secure = opts.secure != null ? opts.secure : typeof location !== "undefined" && location.protocol === "https:";
        if (opts.hostname && !opts.port) {
          opts.port = this.secure ? "443" : "80";
        }
        this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
        this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? 443 : 80);
        this.transports = opts.transports || ["polling", "websocket"];
        this.readyState = "";
        this.writeBuffer = [];
        this.prevBufferLen = 0;
        this.opts = Object.assign({
          path: "/engine.io",
          agent: false,
          withCredentials: false,
          upgrade: true,
          jsonp: true,
          timestampParam: "t",
          rememberUpgrade: false,
          rejectUnauthorized: true,
          perMessageDeflate: {
            threshold: 1024
          },
          transportOptions: {}
        }, opts);
        this.opts.path = this.opts.path.replace(/\/$/, "") + "/";
        if (typeof this.opts.query === "string") {
          this.opts.query = parseqs.decode(this.opts.query);
        }
        this.id = null;
        this.upgrades = null;
        this.pingInterval = null;
        this.pingTimeout = null;
        this.pingTimeoutTimer = null;
        this.open();
      }
      createTransport(name) {
        debug('creating transport "%s"', name);
        const query = clone(this.opts.query);
        query.EIO = parser.protocol;
        query.transport = name;
        if (this.id)
          query.sid = this.id;
        const opts = Object.assign({}, this.opts.transportOptions[name], this.opts, {
          query,
          socket: this,
          hostname: this.hostname,
          secure: this.secure,
          port: this.port
        });
        debug("options: %j", opts);
        return new transports[name](opts);
      }
      open() {
        let transport;
        if (this.opts.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) {
          transport = "websocket";
        } else if (this.transports.length === 0) {
          const self2 = this;
          setTimeout(function() {
            self2.emit("error", "No transports available");
          }, 0);
          return;
        } else {
          transport = this.transports[0];
        }
        this.readyState = "opening";
        try {
          transport = this.createTransport(transport);
        } catch (e) {
          debug("error while creating transport: %s", e);
          this.transports.shift();
          this.open();
          return;
        }
        transport.open();
        this.setTransport(transport);
      }
      setTransport(transport) {
        debug("setting transport %s", transport.name);
        const self2 = this;
        if (this.transport) {
          debug("clearing existing transport %s", this.transport.name);
          this.transport.removeAllListeners();
        }
        this.transport = transport;
        transport.on("drain", function() {
          self2.onDrain();
        }).on("packet", function(packet) {
          self2.onPacket(packet);
        }).on("error", function(e) {
          self2.onError(e);
        }).on("close", function() {
          self2.onClose("transport close");
        });
      }
      probe(name) {
        debug('probing transport "%s"', name);
        let transport = this.createTransport(name, {probe: 1});
        let failed = false;
        const self2 = this;
        Socket.priorWebsocketSuccess = false;
        function onTransportOpen() {
          if (self2.onlyBinaryUpgrades) {
            const upgradeLosesBinary = !this.supportsBinary && self2.transport.supportsBinary;
            failed = failed || upgradeLosesBinary;
          }
          if (failed)
            return;
          debug('probe transport "%s" opened', name);
          transport.send([{type: "ping", data: "probe"}]);
          transport.once("packet", function(msg) {
            if (failed)
              return;
            if (msg.type === "pong" && msg.data === "probe") {
              debug('probe transport "%s" pong', name);
              self2.upgrading = true;
              self2.emit("upgrading", transport);
              if (!transport)
                return;
              Socket.priorWebsocketSuccess = transport.name === "websocket";
              debug('pausing current transport "%s"', self2.transport.name);
              self2.transport.pause(function() {
                if (failed)
                  return;
                if (self2.readyState === "closed")
                  return;
                debug("changing transport and sending upgrade packet");
                cleanup();
                self2.setTransport(transport);
                transport.send([{type: "upgrade"}]);
                self2.emit("upgrade", transport);
                transport = null;
                self2.upgrading = false;
                self2.flush();
              });
            } else {
              debug('probe transport "%s" failed', name);
              const err = new Error("probe error");
              err.transport = transport.name;
              self2.emit("upgradeError", err);
            }
          });
        }
        function freezeTransport() {
          if (failed)
            return;
          failed = true;
          cleanup();
          transport.close();
          transport = null;
        }
        function onerror(err) {
          const error = new Error("probe error: " + err);
          error.transport = transport.name;
          freezeTransport();
          debug('probe transport "%s" failed because of error: %s', name, err);
          self2.emit("upgradeError", error);
        }
        function onTransportClose() {
          onerror("transport closed");
        }
        function onclose() {
          onerror("socket closed");
        }
        function onupgrade(to) {
          if (transport && to.name !== transport.name) {
            debug('"%s" works - aborting "%s"', to.name, transport.name);
            freezeTransport();
          }
        }
        function cleanup() {
          transport.removeListener("open", onTransportOpen);
          transport.removeListener("error", onerror);
          transport.removeListener("close", onTransportClose);
          self2.removeListener("close", onclose);
          self2.removeListener("upgrading", onupgrade);
        }
        transport.once("open", onTransportOpen);
        transport.once("error", onerror);
        transport.once("close", onTransportClose);
        this.once("close", onclose);
        this.once("upgrading", onupgrade);
        transport.open();
      }
      onOpen() {
        debug("socket open");
        this.readyState = "open";
        Socket.priorWebsocketSuccess = this.transport.name === "websocket";
        this.emit("open");
        this.flush();
        if (this.readyState === "open" && this.opts.upgrade && this.transport.pause) {
          debug("starting upgrade probes");
          let i = 0;
          const l = this.upgrades.length;
          for (; i < l; i++) {
            this.probe(this.upgrades[i]);
          }
        }
      }
      onPacket(packet) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
          debug('socket receive: type "%s", data "%s"', packet.type, packet.data);
          this.emit("packet", packet);
          this.emit("heartbeat");
          switch (packet.type) {
            case "open":
              this.onHandshake(JSON.parse(packet.data));
              break;
            case "ping":
              this.resetPingTimeout();
              this.sendPacket("pong");
              this.emit("pong");
              break;
            case "error":
              const err = new Error("server error");
              err.code = packet.data;
              this.onError(err);
              break;
            case "message":
              this.emit("data", packet.data);
              this.emit("message", packet.data);
              break;
          }
        } else {
          debug('packet received with socket readyState "%s"', this.readyState);
        }
      }
      onHandshake(data) {
        this.emit("handshake", data);
        this.id = data.sid;
        this.transport.query.sid = data.sid;
        this.upgrades = this.filterUpgrades(data.upgrades);
        this.pingInterval = data.pingInterval;
        this.pingTimeout = data.pingTimeout;
        this.onOpen();
        if (this.readyState === "closed")
          return;
        this.resetPingTimeout();
      }
      resetPingTimeout() {
        clearTimeout(this.pingTimeoutTimer);
        this.pingTimeoutTimer = setTimeout(() => {
          this.onClose("ping timeout");
        }, this.pingInterval + this.pingTimeout);
      }
      onDrain() {
        this.writeBuffer.splice(0, this.prevBufferLen);
        this.prevBufferLen = 0;
        if (this.writeBuffer.length === 0) {
          this.emit("drain");
        } else {
          this.flush();
        }
      }
      flush() {
        if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
          debug("flushing %d packets in socket", this.writeBuffer.length);
          this.transport.send(this.writeBuffer);
          this.prevBufferLen = this.writeBuffer.length;
          this.emit("flush");
        }
      }
      write(msg, options, fn) {
        this.sendPacket("message", msg, options, fn);
        return this;
      }
      send(msg, options, fn) {
        this.sendPacket("message", msg, options, fn);
        return this;
      }
      sendPacket(type, data, options, fn) {
        if (typeof data === "function") {
          fn = data;
          data = void 0;
        }
        if (typeof options === "function") {
          fn = options;
          options = null;
        }
        if (this.readyState === "closing" || this.readyState === "closed") {
          return;
        }
        options = options || {};
        options.compress = options.compress !== false;
        const packet = {
          type,
          data,
          options
        };
        this.emit("packetCreate", packet);
        this.writeBuffer.push(packet);
        if (fn)
          this.once("flush", fn);
        this.flush();
      }
      close() {
        const self2 = this;
        if (this.readyState === "opening" || this.readyState === "open") {
          this.readyState = "closing";
          if (this.writeBuffer.length) {
            this.once("drain", function() {
              if (this.upgrading) {
                waitForUpgrade();
              } else {
                close();
              }
            });
          } else if (this.upgrading) {
            waitForUpgrade();
          } else {
            close();
          }
        }
        function close() {
          self2.onClose("forced close");
          debug("socket closing - telling transport to close");
          self2.transport.close();
        }
        function cleanupAndClose() {
          self2.removeListener("upgrade", cleanupAndClose);
          self2.removeListener("upgradeError", cleanupAndClose);
          close();
        }
        function waitForUpgrade() {
          self2.once("upgrade", cleanupAndClose);
          self2.once("upgradeError", cleanupAndClose);
        }
        return this;
      }
      onError(err) {
        debug("socket error %j", err);
        Socket.priorWebsocketSuccess = false;
        this.emit("error", err);
        this.onClose("transport error", err);
      }
      onClose(reason, desc) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
          debug('socket close with reason: "%s"', reason);
          const self2 = this;
          clearTimeout(this.pingIntervalTimer);
          clearTimeout(this.pingTimeoutTimer);
          this.transport.removeAllListeners("close");
          this.transport.close();
          this.transport.removeAllListeners();
          this.readyState = "closed";
          this.id = null;
          this.emit("close", reason, desc);
          self2.writeBuffer = [];
          self2.prevBufferLen = 0;
        }
      }
      filterUpgrades(upgrades) {
        const filteredUpgrades = [];
        let i = 0;
        const j = upgrades.length;
        for (; i < j; i++) {
          if (~this.transports.indexOf(upgrades[i]))
            filteredUpgrades.push(upgrades[i]);
        }
        return filteredUpgrades;
      }
    };
    Socket.priorWebsocketSuccess = false;
    Socket.protocol = parser.protocol;
    function clone(obj) {
      const o = {};
      for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
          o[i] = obj[i];
        }
      }
      return o;
    }
    module.exports = Socket;
  });

  // node_modules/engine.io-client/lib/index.js
  var require_lib2 = __commonJS((exports, module) => {
    var Socket = require_socket();
    module.exports = (uri, opts) => new Socket(uri, opts);
    module.exports.Socket = Socket;
    module.exports.protocol = Socket.protocol;
    module.exports.Transport = require_transport();
    module.exports.transports = require_transports();
    module.exports.parser = require_lib();
  });

  // node_modules/socket.io-parser/dist/is-binary.js
  var require_is_binary = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.hasBinary = exports.isBinary = void 0;
    var withNativeArrayBuffer = typeof ArrayBuffer === "function";
    var isView = (obj) => {
      return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
    };
    var toString = Object.prototype.toString;
    var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
    var withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
    function isBinary(obj) {
      return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
    }
    exports.isBinary = isBinary;
    function hasBinary(obj, toJSON) {
      if (!obj || typeof obj !== "object") {
        return false;
      }
      if (Array.isArray(obj)) {
        for (let i = 0, l = obj.length; i < l; i++) {
          if (hasBinary(obj[i])) {
            return true;
          }
        }
        return false;
      }
      if (isBinary(obj)) {
        return true;
      }
      if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
        return hasBinary(obj.toJSON(), true);
      }
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
          return true;
        }
      }
      return false;
    }
    exports.hasBinary = hasBinary;
  });

  // node_modules/socket.io-parser/dist/binary.js
  var require_binary = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.reconstructPacket = exports.deconstructPacket = void 0;
    var is_binary_1 = require_is_binary();
    function deconstructPacket(packet) {
      const buffers = [];
      const packetData = packet.data;
      const pack = packet;
      pack.data = _deconstructPacket(packetData, buffers);
      pack.attachments = buffers.length;
      return {packet: pack, buffers};
    }
    exports.deconstructPacket = deconstructPacket;
    function _deconstructPacket(data, buffers) {
      if (!data)
        return data;
      if (is_binary_1.isBinary(data)) {
        const placeholder = {_placeholder: true, num: buffers.length};
        buffers.push(data);
        return placeholder;
      } else if (Array.isArray(data)) {
        const newData = new Array(data.length);
        for (let i = 0; i < data.length; i++) {
          newData[i] = _deconstructPacket(data[i], buffers);
        }
        return newData;
      } else if (typeof data === "object" && !(data instanceof Date)) {
        const newData = {};
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            newData[key] = _deconstructPacket(data[key], buffers);
          }
        }
        return newData;
      }
      return data;
    }
    function reconstructPacket(packet, buffers) {
      packet.data = _reconstructPacket(packet.data, buffers);
      packet.attachments = void 0;
      return packet;
    }
    exports.reconstructPacket = reconstructPacket;
    function _reconstructPacket(data, buffers) {
      if (!data)
        return data;
      if (data && data._placeholder) {
        return buffers[data.num];
      } else if (Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
          data[i] = _reconstructPacket(data[i], buffers);
        }
      } else if (typeof data === "object") {
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            data[key] = _reconstructPacket(data[key], buffers);
          }
        }
      }
      return data;
    }
  });

  // node_modules/socket.io-parser/dist/index.js
  var require_dist = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.Decoder = exports.Encoder = exports.PacketType = exports.protocol = void 0;
    var Emitter = require_component_emitter();
    var binary_1 = require_binary();
    var is_binary_1 = require_is_binary();
    var debug = require_browser()("socket.io-parser");
    exports.protocol = 5;
    var PacketType;
    (function(PacketType2) {
      PacketType2[PacketType2["CONNECT"] = 0] = "CONNECT";
      PacketType2[PacketType2["DISCONNECT"] = 1] = "DISCONNECT";
      PacketType2[PacketType2["EVENT"] = 2] = "EVENT";
      PacketType2[PacketType2["ACK"] = 3] = "ACK";
      PacketType2[PacketType2["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
      PacketType2[PacketType2["BINARY_EVENT"] = 5] = "BINARY_EVENT";
      PacketType2[PacketType2["BINARY_ACK"] = 6] = "BINARY_ACK";
    })(PacketType = exports.PacketType || (exports.PacketType = {}));
    var Encoder = class {
      encode(obj) {
        debug("encoding packet %j", obj);
        if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
          if (is_binary_1.hasBinary(obj)) {
            obj.type = obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK;
            return this.encodeAsBinary(obj);
          }
        }
        return [this.encodeAsString(obj)];
      }
      encodeAsString(obj) {
        let str = "" + obj.type;
        if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
          str += obj.attachments + "-";
        }
        if (obj.nsp && obj.nsp !== "/") {
          str += obj.nsp + ",";
        }
        if (obj.id != null) {
          str += obj.id;
        }
        if (obj.data != null) {
          str += JSON.stringify(obj.data);
        }
        debug("encoded %j as %s", obj, str);
        return str;
      }
      encodeAsBinary(obj) {
        const deconstruction = binary_1.deconstructPacket(obj);
        const pack = this.encodeAsString(deconstruction.packet);
        const buffers = deconstruction.buffers;
        buffers.unshift(pack);
        return buffers;
      }
    };
    exports.Encoder = Encoder;
    var Decoder = class extends Emitter {
      constructor() {
        super();
      }
      add(obj) {
        let packet;
        if (typeof obj === "string") {
          packet = this.decodeString(obj);
          if (packet.type === PacketType.BINARY_EVENT || packet.type === PacketType.BINARY_ACK) {
            this.reconstructor = new BinaryReconstructor(packet);
            if (packet.attachments === 0) {
              super.emit("decoded", packet);
            }
          } else {
            super.emit("decoded", packet);
          }
        } else if (is_binary_1.isBinary(obj) || obj.base64) {
          if (!this.reconstructor) {
            throw new Error("got binary data when not reconstructing a packet");
          } else {
            packet = this.reconstructor.takeBinaryData(obj);
            if (packet) {
              this.reconstructor = null;
              super.emit("decoded", packet);
            }
          }
        } else {
          throw new Error("Unknown type: " + obj);
        }
      }
      decodeString(str) {
        let i = 0;
        const p = {
          type: Number(str.charAt(0))
        };
        if (PacketType[p.type] === void 0) {
          throw new Error("unknown packet type " + p.type);
        }
        if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
          const start = i + 1;
          while (str.charAt(++i) !== "-" && i != str.length) {
          }
          const buf = str.substring(start, i);
          if (buf != Number(buf) || str.charAt(i) !== "-") {
            throw new Error("Illegal attachments");
          }
          p.attachments = Number(buf);
        }
        if (str.charAt(i + 1) === "/") {
          const start = i + 1;
          while (++i) {
            const c = str.charAt(i);
            if (c === ",")
              break;
            if (i === str.length)
              break;
          }
          p.nsp = str.substring(start, i);
        } else {
          p.nsp = "/";
        }
        const next = str.charAt(i + 1);
        if (next !== "" && Number(next) == next) {
          const start = i + 1;
          while (++i) {
            const c = str.charAt(i);
            if (c == null || Number(c) != c) {
              --i;
              break;
            }
            if (i === str.length)
              break;
          }
          p.id = Number(str.substring(start, i + 1));
        }
        if (str.charAt(++i)) {
          const payload = tryParse(str.substr(i));
          if (Decoder.isPayloadValid(p.type, payload)) {
            p.data = payload;
          } else {
            throw new Error("invalid payload");
          }
        }
        debug("decoded %s as %j", str, p);
        return p;
      }
      static isPayloadValid(type, payload) {
        switch (type) {
          case PacketType.CONNECT:
            return typeof payload === "object";
          case PacketType.DISCONNECT:
            return payload === void 0;
          case PacketType.CONNECT_ERROR:
            return typeof payload === "string" || typeof payload === "object";
          case PacketType.EVENT:
          case PacketType.BINARY_EVENT:
            return Array.isArray(payload) && payload.length > 0;
          case PacketType.ACK:
          case PacketType.BINARY_ACK:
            return Array.isArray(payload);
        }
      }
      destroy() {
        if (this.reconstructor) {
          this.reconstructor.finishedReconstruction();
        }
      }
    };
    exports.Decoder = Decoder;
    function tryParse(str) {
      try {
        return JSON.parse(str);
      } catch (e) {
        return false;
      }
    }
    var BinaryReconstructor = class {
      constructor(packet) {
        this.packet = packet;
        this.buffers = [];
        this.reconPack = packet;
      }
      takeBinaryData(binData) {
        this.buffers.push(binData);
        if (this.buffers.length === this.reconPack.attachments) {
          const packet = binary_1.reconstructPacket(this.reconPack, this.buffers);
          this.finishedReconstruction();
          return packet;
        }
        return null;
      }
      finishedReconstruction() {
        this.reconPack = null;
        this.buffers = [];
      }
    };
  });

  // node_modules/socket.io-client/build/on.js
  var require_on = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.on = void 0;
    function on(obj, ev, fn) {
      obj.on(ev, fn);
      return function subDestroy() {
        obj.off(ev, fn);
      };
    }
    exports.on = on;
  });

  // node_modules/socket.io-client/build/socket.js
  var require_socket2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.Socket = void 0;
    var socket_io_parser_1 = require_dist();
    var Emitter = require_component_emitter();
    var on_1 = require_on();
    var debug = require_browser()("socket.io-client:socket");
    var RESERVED_EVENTS = Object.freeze({
      connect: 1,
      connect_error: 1,
      disconnect: 1,
      disconnecting: 1,
      newListener: 1,
      removeListener: 1
    });
    var Socket = class extends Emitter {
      constructor(io2, nsp, opts) {
        super();
        this.receiveBuffer = [];
        this.sendBuffer = [];
        this.ids = 0;
        this.acks = {};
        this.flags = {};
        this.io = io2;
        this.nsp = nsp;
        this.ids = 0;
        this.acks = {};
        this.receiveBuffer = [];
        this.sendBuffer = [];
        this.connected = false;
        this.disconnected = true;
        this.flags = {};
        if (opts && opts.auth) {
          this.auth = opts.auth;
        }
        if (this.io._autoConnect)
          this.open();
      }
      subEvents() {
        if (this.subs)
          return;
        const io2 = this.io;
        this.subs = [
          on_1.on(io2, "open", this.onopen.bind(this)),
          on_1.on(io2, "packet", this.onpacket.bind(this)),
          on_1.on(io2, "error", this.onerror.bind(this)),
          on_1.on(io2, "close", this.onclose.bind(this))
        ];
      }
      get active() {
        return !!this.subs;
      }
      connect() {
        if (this.connected)
          return this;
        this.subEvents();
        if (!this.io["_reconnecting"])
          this.io.open();
        if (this.io._readyState === "open")
          this.onopen();
        return this;
      }
      open() {
        return this.connect();
      }
      send(...args) {
        args.unshift("message");
        this.emit.apply(this, args);
        return this;
      }
      emit(ev, ...args) {
        if (RESERVED_EVENTS.hasOwnProperty(ev)) {
          throw new Error('"' + ev + '" is a reserved event name');
        }
        args.unshift(ev);
        const packet = {
          type: socket_io_parser_1.PacketType.EVENT,
          data: args
        };
        packet.options = {};
        packet.options.compress = this.flags.compress !== false;
        if (typeof args[args.length - 1] === "function") {
          debug("emitting packet with ack id %d", this.ids);
          this.acks[this.ids] = args.pop();
          packet.id = this.ids++;
        }
        const isTransportWritable = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
        const discardPacket = this.flags.volatile && (!isTransportWritable || !this.connected);
        if (discardPacket) {
          debug("discard packet as the transport is not currently writable");
        } else if (this.connected) {
          this.packet(packet);
        } else {
          this.sendBuffer.push(packet);
        }
        this.flags = {};
        return this;
      }
      packet(packet) {
        packet.nsp = this.nsp;
        this.io._packet(packet);
      }
      onopen() {
        debug("transport is open - connecting");
        if (typeof this.auth == "function") {
          this.auth((data) => {
            this.packet({type: socket_io_parser_1.PacketType.CONNECT, data});
          });
        } else {
          this.packet({type: socket_io_parser_1.PacketType.CONNECT, data: this.auth});
        }
      }
      onerror(err) {
        if (!this.connected) {
          super.emit("connect_error", err);
        }
      }
      onclose(reason) {
        debug("close (%s)", reason);
        this.connected = false;
        this.disconnected = true;
        delete this.id;
        super.emit("disconnect", reason);
      }
      onpacket(packet) {
        const sameNamespace = packet.nsp === this.nsp;
        if (!sameNamespace)
          return;
        switch (packet.type) {
          case socket_io_parser_1.PacketType.CONNECT:
            if (packet.data && packet.data.sid) {
              const id = packet.data.sid;
              this.onconnect(id);
            } else {
              super.emit("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
            }
            break;
          case socket_io_parser_1.PacketType.EVENT:
            this.onevent(packet);
            break;
          case socket_io_parser_1.PacketType.BINARY_EVENT:
            this.onevent(packet);
            break;
          case socket_io_parser_1.PacketType.ACK:
            this.onack(packet);
            break;
          case socket_io_parser_1.PacketType.BINARY_ACK:
            this.onack(packet);
            break;
          case socket_io_parser_1.PacketType.DISCONNECT:
            this.ondisconnect();
            break;
          case socket_io_parser_1.PacketType.CONNECT_ERROR:
            const err = new Error(packet.data.message);
            err.data = packet.data.data;
            super.emit("connect_error", err);
            break;
        }
      }
      onevent(packet) {
        const args = packet.data || [];
        debug("emitting event %j", args);
        if (packet.id != null) {
          debug("attaching ack callback to event");
          args.push(this.ack(packet.id));
        }
        if (this.connected) {
          this.emitEvent(args);
        } else {
          this.receiveBuffer.push(Object.freeze(args));
        }
      }
      emitEvent(args) {
        if (this._anyListeners && this._anyListeners.length) {
          const listeners = this._anyListeners.slice();
          for (const listener of listeners) {
            listener.apply(this, args);
          }
        }
        super.emit.apply(this, args);
      }
      ack(id) {
        const self2 = this;
        let sent = false;
        return function(...args) {
          if (sent)
            return;
          sent = true;
          debug("sending ack %j", args);
          self2.packet({
            type: socket_io_parser_1.PacketType.ACK,
            id,
            data: args
          });
        };
      }
      onack(packet) {
        const ack = this.acks[packet.id];
        if (typeof ack === "function") {
          debug("calling ack %s with %j", packet.id, packet.data);
          ack.apply(this, packet.data);
          delete this.acks[packet.id];
        } else {
          debug("bad ack %s", packet.id);
        }
      }
      onconnect(id) {
        debug("socket connected with id %s", id);
        this.id = id;
        this.connected = true;
        this.disconnected = false;
        super.emit("connect");
        this.emitBuffered();
      }
      emitBuffered() {
        this.receiveBuffer.forEach((args) => this.emitEvent(args));
        this.receiveBuffer = [];
        this.sendBuffer.forEach((packet) => this.packet(packet));
        this.sendBuffer = [];
      }
      ondisconnect() {
        debug("server disconnect (%s)", this.nsp);
        this.destroy();
        this.onclose("io server disconnect");
      }
      destroy() {
        if (this.subs) {
          this.subs.forEach((subDestroy) => subDestroy());
          this.subs = void 0;
        }
        this.io["_destroy"](this);
      }
      disconnect() {
        if (this.connected) {
          debug("performing disconnect (%s)", this.nsp);
          this.packet({type: socket_io_parser_1.PacketType.DISCONNECT});
        }
        this.destroy();
        if (this.connected) {
          this.onclose("io client disconnect");
        }
        return this;
      }
      close() {
        return this.disconnect();
      }
      compress(compress) {
        this.flags.compress = compress;
        return this;
      }
      get volatile() {
        this.flags.volatile = true;
        return this;
      }
      onAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.push(listener);
        return this;
      }
      prependAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.unshift(listener);
        return this;
      }
      offAny(listener) {
        if (!this._anyListeners) {
          return this;
        }
        if (listener) {
          const listeners = this._anyListeners;
          for (let i = 0; i < listeners.length; i++) {
            if (listener === listeners[i]) {
              listeners.splice(i, 1);
              return this;
            }
          }
        } else {
          this._anyListeners = [];
        }
        return this;
      }
      listenersAny() {
        return this._anyListeners || [];
      }
    };
    exports.Socket = Socket;
  });

  // node_modules/backo2/index.js
  var require_backo2 = __commonJS((exports, module) => {
    module.exports = Backoff;
    function Backoff(opts) {
      opts = opts || {};
      this.ms = opts.min || 100;
      this.max = opts.max || 1e4;
      this.factor = opts.factor || 2;
      this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
      this.attempts = 0;
    }
    Backoff.prototype.duration = function() {
      var ms = this.ms * Math.pow(this.factor, this.attempts++);
      if (this.jitter) {
        var rand = Math.random();
        var deviation = Math.floor(rand * this.jitter * ms);
        ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
      }
      return Math.min(ms, this.max) | 0;
    };
    Backoff.prototype.reset = function() {
      this.attempts = 0;
    };
    Backoff.prototype.setMin = function(min) {
      this.ms = min;
    };
    Backoff.prototype.setMax = function(max) {
      this.max = max;
    };
    Backoff.prototype.setJitter = function(jitter) {
      this.jitter = jitter;
    };
  });

  // node_modules/socket.io-client/build/manager.js
  var require_manager = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.Manager = void 0;
    var eio = require_lib2();
    var socket_1 = require_socket2();
    var Emitter = require_component_emitter();
    var parser = require_dist();
    var on_1 = require_on();
    var Backoff = require_backo2();
    var debug = require_browser()("socket.io-client:manager");
    var Manager = class extends Emitter {
      constructor(uri, opts) {
        super();
        this.nsps = {};
        this.subs = [];
        if (uri && typeof uri === "object") {
          opts = uri;
          uri = void 0;
        }
        opts = opts || {};
        opts.path = opts.path || "/socket.io";
        this.opts = opts;
        this.reconnection(opts.reconnection !== false);
        this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
        this.reconnectionDelay(opts.reconnectionDelay || 1e3);
        this.reconnectionDelayMax(opts.reconnectionDelayMax || 5e3);
        this.randomizationFactor(opts.randomizationFactor || 0.5);
        this.backoff = new Backoff({
          min: this.reconnectionDelay(),
          max: this.reconnectionDelayMax(),
          jitter: this.randomizationFactor()
        });
        this.timeout(opts.timeout == null ? 2e4 : opts.timeout);
        this._readyState = "closed";
        this.uri = uri;
        const _parser = opts.parser || parser;
        this.encoder = new _parser.Encoder();
        this.decoder = new _parser.Decoder();
        this._autoConnect = opts.autoConnect !== false;
        if (this._autoConnect)
          this.open();
      }
      reconnection(v) {
        if (!arguments.length)
          return this._reconnection;
        this._reconnection = !!v;
        return this;
      }
      reconnectionAttempts(v) {
        if (v === void 0)
          return this._reconnectionAttempts;
        this._reconnectionAttempts = v;
        return this;
      }
      reconnectionDelay(v) {
        var _a;
        if (v === void 0)
          return this._reconnectionDelay;
        this._reconnectionDelay = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
        return this;
      }
      randomizationFactor(v) {
        var _a;
        if (v === void 0)
          return this._randomizationFactor;
        this._randomizationFactor = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
        return this;
      }
      reconnectionDelayMax(v) {
        var _a;
        if (v === void 0)
          return this._reconnectionDelayMax;
        this._reconnectionDelayMax = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
        return this;
      }
      timeout(v) {
        if (!arguments.length)
          return this._timeout;
        this._timeout = v;
        return this;
      }
      maybeReconnectOnOpen() {
        if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
          this.reconnect();
        }
      }
      open(fn) {
        debug("readyState %s", this._readyState);
        if (~this._readyState.indexOf("open"))
          return this;
        debug("opening %s", this.uri);
        this.engine = eio(this.uri, this.opts);
        const socket2 = this.engine;
        const self2 = this;
        this._readyState = "opening";
        this.skipReconnect = false;
        const openSubDestroy = on_1.on(socket2, "open", function() {
          self2.onopen();
          fn && fn();
        });
        const errorSub = on_1.on(socket2, "error", (err) => {
          debug("error");
          self2.cleanup();
          self2._readyState = "closed";
          super.emit("error", err);
          if (fn) {
            fn(err);
          } else {
            self2.maybeReconnectOnOpen();
          }
        });
        if (this._timeout !== false) {
          const timeout = this._timeout;
          debug("connect attempt will timeout after %d", timeout);
          if (timeout === 0) {
            openSubDestroy();
          }
          const timer = setTimeout(() => {
            debug("connect attempt timed out after %d", timeout);
            openSubDestroy();
            socket2.close();
            socket2.emit("error", new Error("timeout"));
          }, timeout);
          this.subs.push(function subDestroy() {
            clearTimeout(timer);
          });
        }
        this.subs.push(openSubDestroy);
        this.subs.push(errorSub);
        return this;
      }
      connect(fn) {
        return this.open(fn);
      }
      onopen() {
        debug("open");
        this.cleanup();
        this._readyState = "open";
        super.emit("open");
        const socket2 = this.engine;
        this.subs.push(on_1.on(socket2, "ping", this.onping.bind(this)), on_1.on(socket2, "data", this.ondata.bind(this)), on_1.on(socket2, "error", this.onerror.bind(this)), on_1.on(socket2, "close", this.onclose.bind(this)), on_1.on(this.decoder, "decoded", this.ondecoded.bind(this)));
      }
      onping() {
        super.emit("ping");
      }
      ondata(data) {
        this.decoder.add(data);
      }
      ondecoded(packet) {
        super.emit("packet", packet);
      }
      onerror(err) {
        debug("error", err);
        super.emit("error", err);
      }
      socket(nsp, opts) {
        let socket2 = this.nsps[nsp];
        if (!socket2) {
          socket2 = new socket_1.Socket(this, nsp, opts);
          this.nsps[nsp] = socket2;
        }
        return socket2;
      }
      _destroy(socket2) {
        const nsps = Object.keys(this.nsps);
        for (const nsp of nsps) {
          const socket3 = this.nsps[nsp];
          if (socket3.active) {
            debug("socket %s is still active, skipping close", nsp);
            return;
          }
        }
        this._close();
      }
      _packet(packet) {
        debug("writing packet %j", packet);
        if (packet.query && packet.type === 0)
          packet.nsp += "?" + packet.query;
        const encodedPackets = this.encoder.encode(packet);
        for (let i = 0; i < encodedPackets.length; i++) {
          this.engine.write(encodedPackets[i], packet.options);
        }
      }
      cleanup() {
        debug("cleanup");
        this.subs.forEach((subDestroy) => subDestroy());
        this.subs.length = 0;
        this.decoder.destroy();
      }
      _close() {
        debug("disconnect");
        this.skipReconnect = true;
        this._reconnecting = false;
        if (this._readyState === "opening") {
          this.cleanup();
        }
        this.backoff.reset();
        this._readyState = "closed";
        if (this.engine)
          this.engine.close();
      }
      disconnect() {
        return this._close();
      }
      onclose(reason) {
        debug("onclose");
        this.cleanup();
        this.backoff.reset();
        this._readyState = "closed";
        super.emit("close", reason);
        if (this._reconnection && !this.skipReconnect) {
          this.reconnect();
        }
      }
      reconnect() {
        if (this._reconnecting || this.skipReconnect)
          return this;
        const self2 = this;
        if (this.backoff.attempts >= this._reconnectionAttempts) {
          debug("reconnect failed");
          this.backoff.reset();
          super.emit("reconnect_failed");
          this._reconnecting = false;
        } else {
          const delay = this.backoff.duration();
          debug("will wait %dms before reconnect attempt", delay);
          this._reconnecting = true;
          const timer = setTimeout(() => {
            if (self2.skipReconnect)
              return;
            debug("attempting reconnect");
            super.emit("reconnect_attempt", self2.backoff.attempts);
            if (self2.skipReconnect)
              return;
            self2.open((err) => {
              if (err) {
                debug("reconnect attempt error");
                self2._reconnecting = false;
                self2.reconnect();
                super.emit("reconnect_error", err);
              } else {
                debug("reconnect success");
                self2.onreconnect();
              }
            });
          }, delay);
          this.subs.push(function subDestroy() {
            clearTimeout(timer);
          });
        }
      }
      onreconnect() {
        const attempt = this.backoff.attempts;
        this._reconnecting = false;
        this.backoff.reset();
        super.emit("reconnect", attempt);
      }
    };
    exports.Manager = Manager;
  });

  // node_modules/socket.io-client/build/index.js
  var require_build = __commonJS((exports, module) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.Socket = exports.io = exports.Manager = exports.protocol = void 0;
    var url_1 = require_url();
    var manager_1 = require_manager();
    var socket_1 = require_socket2();
    Object.defineProperty(exports, "Socket", {enumerable: true, get: function() {
      return socket_1.Socket;
    }});
    var debug = require_browser()("socket.io-client");
    module.exports = exports = lookup;
    var cache = exports.managers = {};
    function lookup(uri, opts) {
      if (typeof uri === "object") {
        opts = uri;
        uri = void 0;
      }
      opts = opts || {};
      const parsed = url_1.url(uri);
      const source = parsed.source;
      const id = parsed.id;
      const path = parsed.path;
      const sameNamespace = cache[id] && path in cache[id]["nsps"];
      const newConnection = opts.forceNew || opts["force new connection"] || opts.multiplex === false || sameNamespace;
      let io2;
      if (newConnection) {
        debug("ignoring socket cache for %s", source);
        io2 = new manager_1.Manager(source, opts);
      } else {
        if (!cache[id]) {
          debug("new io instance for %s", source);
          cache[id] = new manager_1.Manager(source, opts);
        }
        io2 = cache[id];
      }
      if (parsed.query && !opts.query) {
        opts.query = parsed.query;
      }
      return io2.socket(parsed.path, opts);
    }
    exports.io = lookup;
    var socket_io_parser_1 = require_dist();
    Object.defineProperty(exports, "protocol", {enumerable: true, get: function() {
      return socket_io_parser_1.protocol;
    }});
    exports.connect = lookup;
    var manager_2 = require_manager();
    Object.defineProperty(exports, "Manager", {enumerable: true, get: function() {
      return manager_2.Manager;
    }});
  });

  // client/src/index.ts
  var import_xterm = __toModule(require_xterm());
  var import_xterm_addon_fit = __toModule(require_xterm_addon_fit());
  var import_socket = __toModule(require_build());
  var terminal = new import_xterm.Terminal({
    cursorBlink: true,
    cursorStyle: "underline",
    tabStopWidth: 8
  });
  var socket = import_socket.io({
    autoConnect: false
  });
  socket.on("message", (data) => {
    terminal.write(typeof data === "string" ? data : new Uint8Array(data));
  });
  terminal.onData((data) => {
    socket.send(data);
  });
  terminal.onBinary((data) => {
    const buffer = new Uint8Array(data.length);
    for (let i = 0; i < data.length; ++i) {
      buffer[i] = data.charCodeAt(i) & 255;
    }
    socket.send(buffer);
  });
  var fitAddon = new import_xterm_addon_fit.FitAddon();
  var terminalShell = document.querySelector("#terminal");
  terminal.loadAddon(fitAddon);
  terminal.open(terminalShell);
  terminal.onResize((data) => socket.emit("resize", data));
  fitAddon.fit();
  var timeoutId;
  new ResizeObserver(() => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fitAddon.fit(), 500);
  }).observe(terminalShell);
  socket.connect();
  socket.emit("setup", {cols: terminal.cols, rows: terminal.rows});
})();
