if (
  ((function (e, t) {
    "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = e.document
          ? t(e, !0)
          : function (e) {
              if (!e.document)
                throw new Error("jQuery requires a window with a document");
              return t(e);
            })
      : t(e);
  })("undefined" != typeof window ? window : this, function (e, t) {
    var n = [],
      i = e.document,
      r = n.slice,
      o = n.concat,
      s = n.push,
      a = n.indexOf,
      l = {},
      c = l.toString,
      u = l.hasOwnProperty,
      p = {},
      d = "2.2.0",
      f = function (e, t) {
        return new f.fn.init(e, t);
      },
      h = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      v = /^-ms-/,
      m = /-([\da-z])/gi,
      g = function (e, t) {
        return t.toUpperCase();
      };
    function y(e) {
      var t = !!e && "length" in e && e.length,
        n = f.type(e);
      return (
        "function" !== n &&
        !f.isWindow(e) &&
        ("array" === n ||
          0 === t ||
          ("number" == typeof t && t > 0 && t - 1 in e))
      );
    }
    (f.fn = f.prototype = {
      jquery: d,
      constructor: f,
      selector: "",
      length: 0,
      toArray: function () {
        return r.call(this);
      },
      get: function (e) {
        return null != e
          ? 0 > e
            ? this[e + this.length]
            : this[e]
          : r.call(this);
      },
      pushStack: function (e) {
        var t = f.merge(this.constructor(), e);
        return (t.prevObject = this), (t.context = this.context), t;
      },
      each: function (e) {
        return f.each(this, e);
      },
      map: function (e) {
        return this.pushStack(
          f.map(this, function (t, n) {
            return e.call(t, n, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(r.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (0 > e ? t : 0);
        return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: s,
      sort: n.sort,
      splice: n.splice,
    }),
      (f.extend = f.fn.extend = function () {
        var e,
          t,
          n,
          i,
          r,
          o,
          s = arguments[0] || {},
          a = 1,
          l = arguments.length,
          c = !1;
        for (
          "boolean" == typeof s && ((c = s), (s = arguments[a] || {}), a++),
            "object" == typeof s || f.isFunction(s) || (s = {}),
            a === l && ((s = this), a--);
          l > a;
          a++
        )
          if (null != (e = arguments[a]))
            for (t in e)
              (n = s[t]),
                s !== (i = e[t]) &&
                  (c && i && (f.isPlainObject(i) || (r = f.isArray(i)))
                    ? (r
                        ? ((r = !1), (o = n && f.isArray(n) ? n : []))
                        : (o = n && f.isPlainObject(n) ? n : {}),
                      (s[t] = f.extend(c, o, i)))
                    : void 0 !== i && (s[t] = i));
        return s;
      }),
      f.extend({
        expando: "jQuery" + (d + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
          throw new Error(e);
        },
        noop: function () {},
        isFunction: function (e) {
          return "function" === f.type(e);
        },
        isArray: Array.isArray,
        isWindow: function (e) {
          return null != e && e === e.window;
        },
        isNumeric: function (e) {
          var t = e && e.toString();
          return !f.isArray(e) && t - parseFloat(t) + 1 >= 0;
        },
        isPlainObject: function (e) {
          return (
            "object" === f.type(e) &&
            !e.nodeType &&
            !f.isWindow(e) &&
            !(
              e.constructor && !u.call(e.constructor.prototype, "isPrototypeOf")
            )
          );
        },
        isEmptyObject: function (e) {
          var t;
          for (t in e) return !1;
          return !0;
        },
        type: function (e) {
          return null == e
            ? e + ""
            : "object" == typeof e || "function" == typeof e
            ? l[c.call(e)] || "object"
            : typeof e;
        },
        globalEval: function (e) {
          var t,
            n = eval;
          (e = f.trim(e)) &&
            (1 === e.indexOf("use strict")
              ? (((t = i.createElement("script")).text = e),
                i.head.appendChild(t).parentNode.removeChild(t))
              : n(e));
        },
        camelCase: function (e) {
          return e.replace(v, "ms-").replace(m, g);
        },
        nodeName: function (e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        },
        each: function (e, t) {
          var n,
            i = 0;
          if (y(e))
            for (n = e.length; n > i && !1 !== t.call(e[i], i, e[i]); i++);
          else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
          return e;
        },
        trim: function (e) {
          return null == e ? "" : (e + "").replace(h, "");
        },
        makeArray: function (e, t) {
          var n = t || [];
          return (
            null != e &&
              (y(Object(e))
                ? f.merge(n, "string" == typeof e ? [e] : e)
                : s.call(n, e)),
            n
          );
        },
        inArray: function (e, t, n) {
          return null == t ? -1 : a.call(t, e, n);
        },
        merge: function (e, t) {
          for (var n = +t.length, i = 0, r = e.length; n > i; i++)
            e[r++] = t[i];
          return (e.length = r), e;
        },
        grep: function (e, t, n) {
          for (var i = [], r = 0, o = e.length, s = !n; o > r; r++)
            !t(e[r], r) !== s && i.push(e[r]);
          return i;
        },
        map: function (e, t, n) {
          var i,
            r,
            s = 0,
            a = [];
          if (y(e))
            for (i = e.length; i > s; s++)
              null != (r = t(e[s], s, n)) && a.push(r);
          else for (s in e) null != (r = t(e[s], s, n)) && a.push(r);
          return o.apply([], a);
        },
        guid: 1,
        proxy: function (e, t) {
          var n, i, o;
          return (
            "string" == typeof t && ((n = e[t]), (t = e), (e = n)),
            f.isFunction(e)
              ? ((i = r.call(arguments, 2)),
                ((o = function () {
                  return e.apply(t || this, i.concat(r.call(arguments)));
                }).guid = e.guid = e.guid || f.guid++),
                o)
              : void 0
          );
        },
        now: Date.now,
        support: p,
      }),
      "function" == typeof Symbol &&
        (f.fn[Symbol.iterator] = n[Symbol.iterator]),
      f.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
          " "
        ),
        function (e, t) {
          l["[object " + t + "]"] = t.toLowerCase();
        }
      );
    var b = (function (e) {
      var t,
        n,
        i,
        r,
        o,
        s,
        a,
        l,
        c,
        u,
        p,
        d,
        f,
        h,
        v,
        m,
        g,
        y,
        b,
        x = "sizzle" + 1 * new Date(),
        w = e.document,
        T = 0,
        C = 0,
        k = oe(),
        E = oe(),
        S = oe(),
        _ = function (e, t) {
          return e === t && (p = !0), 0;
        },
        A = 1 << 31,
        $ = {}.hasOwnProperty,
        D = [],
        N = D.pop,
        j = D.push,
        I = D.push,
        O = D.slice,
        R = function (e, t) {
          for (var n = 0, i = e.length; i > n; n++) if (e[n] === t) return n;
          return -1;
        },
        L =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        q = "[\\x20\\t\\r\\n\\f]",
        P = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        F =
          "\\[" +
          q +
          "*(" +
          P +
          ")(?:" +
          q +
          "*([*^$|!~]?=)" +
          q +
          "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
          P +
          "))|)" +
          q +
          "*\\]",
        M =
          ":(" +
          P +
          ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
          F +
          ")*)|.*)\\)|)",
        H = new RegExp(q + "+", "g"),
        W = new RegExp("^" + q + "+|((?:^|[^\\\\])(?:\\\\.)*)" + q + "+$", "g"),
        z = new RegExp("^" + q + "*," + q + "*"),
        B = new RegExp("^" + q + "*([>+~]|" + q + ")" + q + "*"),
        U = new RegExp("=" + q + "*([^\\]'\"]*?)" + q + "*\\]", "g"),
        X = new RegExp(M),
        V = new RegExp("^" + P + "$"),
        J = {
          ID: new RegExp("^#(" + P + ")"),
          CLASS: new RegExp("^\\.(" + P + ")"),
          TAG: new RegExp("^(" + P + "|[*])"),
          ATTR: new RegExp("^" + F),
          PSEUDO: new RegExp("^" + M),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              q +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              q +
              "*(?:([+-]|)" +
              q +
              "*(\\d+)|))" +
              q +
              "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + L + ")$", "i"),
          needsContext: new RegExp(
            "^" +
              q +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              q +
              "*((?:-\\d)?\\d*)" +
              q +
              "*\\)|)(?=[^-]|$)",
            "i"
          ),
        },
        Q = /^(?:input|select|textarea|button)$/i,
        Y = /^h\d$/i,
        G = /^[^{]+\{\s*\[native \w/,
        K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        Z = /[+~]/,
        ee = /'|\\/g,
        te = new RegExp("\\\\([\\da-f]{1,6}" + q + "?|(" + q + ")|.)", "ig"),
        ne = function (e, t, n) {
          var i = "0x" + t - 65536;
          return i != i || n
            ? t
            : 0 > i
            ? String.fromCharCode(i + 65536)
            : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
        },
        ie = function () {
          d();
        };
      try {
        I.apply((D = O.call(w.childNodes)), w.childNodes),
          D[w.childNodes.length].nodeType;
      } catch (e) {
        I = {
          apply: D.length
            ? function (e, t) {
                j.apply(e, O.call(t));
              }
            : function (e, t) {
                for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                e.length = n - 1;
              },
        };
      }
      function re(e, t, i, r) {
        var o,
          a,
          c,
          u,
          p,
          h,
          g,
          y,
          T = t && t.ownerDocument,
          C = t ? t.nodeType : 9;
        if (
          ((i = i || []),
          "string" != typeof e || !e || (1 !== C && 9 !== C && 11 !== C))
        )
          return i;
        if (
          !r &&
          ((t ? t.ownerDocument || t : w) !== f && d(t), (t = t || f), v)
        ) {
          if (11 !== C && (h = K.exec(e)))
            if ((o = h[1])) {
              if (9 === C) {
                if (!(c = t.getElementById(o))) return i;
                if (c.id === o) return i.push(c), i;
              } else if (
                T &&
                (c = T.getElementById(o)) &&
                b(t, c) &&
                c.id === o
              )
                return i.push(c), i;
            } else {
              if (h[2]) return I.apply(i, t.getElementsByTagName(e)), i;
              if (
                (o = h[3]) &&
                n.getElementsByClassName &&
                t.getElementsByClassName
              )
                return I.apply(i, t.getElementsByClassName(o)), i;
            }
          if (n.qsa && !S[e + " "] && (!m || !m.test(e))) {
            if (1 !== C) (T = t), (y = e);
            else if ("object" !== t.nodeName.toLowerCase()) {
              for (
                (u = t.getAttribute("id"))
                  ? (u = u.replace(ee, "\\$&"))
                  : t.setAttribute("id", (u = x)),
                  a = (g = s(e)).length,
                  p = V.test(u) ? "#" + u : "[id='" + u + "']";
                a--;

              )
                g[a] = p + " " + ve(g[a]);
              (y = g.join(",")), (T = (Z.test(e) && fe(t.parentNode)) || t);
            }
            if (y)
              try {
                return I.apply(i, T.querySelectorAll(y)), i;
              } catch (e) {
              } finally {
                u === x && t.removeAttribute("id");
              }
          }
        }
        return l(e.replace(W, "$1"), t, i, r);
      }
      function oe() {
        var e = [];
        return function t(n, r) {
          return (
            e.push(n + " ") > i.cacheLength && delete t[e.shift()],
            (t[n + " "] = r)
          );
        };
      }
      function se(e) {
        return (e[x] = !0), e;
      }
      function ae(e) {
        var t = f.createElement("div");
        try {
          return !!e(t);
        } catch (e) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t), (t = null);
        }
      }
      function le(e, t) {
        for (var n = e.split("|"), r = n.length; r--; ) i.attrHandle[n[r]] = t;
      }
      function ce(e, t) {
        var n = t && e,
          i =
            n &&
            1 === e.nodeType &&
            1 === t.nodeType &&
            (~t.sourceIndex || A) - (~e.sourceIndex || A);
        if (i) return i;
        if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
        return e ? 1 : -1;
      }
      function ue(e) {
        return function (t) {
          return "input" === t.nodeName.toLowerCase() && t.type === e;
        };
      }
      function pe(e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && t.type === e;
        };
      }
      function de(e) {
        return se(function (t) {
          return (
            (t = +t),
            se(function (n, i) {
              for (var r, o = e([], n.length, t), s = o.length; s--; )
                n[(r = o[s])] && (n[r] = !(i[r] = n[r]));
            })
          );
        });
      }
      function fe(e) {
        return e && void 0 !== e.getElementsByTagName && e;
      }
      for (t in ((n = re.support = {}),
      (o = re.isXML = function (e) {
        var t = e && (e.ownerDocument || e).documentElement;
        return !!t && "HTML" !== t.nodeName;
      }),
      (d = re.setDocument = function (e) {
        var t,
          r,
          s = e ? e.ownerDocument || e : w;
        return s !== f && 9 === s.nodeType && s.documentElement
          ? ((h = (f = s).documentElement),
            (v = !o(f)),
            (r = f.defaultView) &&
              r.top !== r &&
              (r.addEventListener
                ? r.addEventListener("unload", ie, !1)
                : r.attachEvent && r.attachEvent("onunload", ie)),
            (n.attributes = ae(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (n.getElementsByTagName = ae(function (e) {
              return (
                e.appendChild(f.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (n.getElementsByClassName = G.test(f.getElementsByClassName)),
            (n.getById = ae(function (e) {
              return (
                (h.appendChild(e).id = x),
                !f.getElementsByName || !f.getElementsByName(x).length
              );
            })),
            n.getById
              ? ((i.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && v) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }),
                (i.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }))
              : (delete i.find.ID,
                (i.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    var n =
                      void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t;
                  };
                })),
            (i.find.TAG = n.getElementsByTagName
              ? function (e, t) {
                  return void 0 !== t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : n.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    i = [],
                    r = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" === e) {
                    for (; (n = o[r++]); ) 1 === n.nodeType && i.push(n);
                    return i;
                  }
                  return o;
                }),
            (i.find.CLASS =
              n.getElementsByClassName &&
              function (e, t) {
                return void 0 !== t.getElementsByClassName && v
                  ? t.getElementsByClassName(e)
                  : void 0;
              }),
            (g = []),
            (m = []),
            (n.qsa = G.test(f.querySelectorAll)) &&
              (ae(function (e) {
                (h.appendChild(e).innerHTML =
                  "<a id='" +
                  x +
                  "'></a><select id='" +
                  x +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    m.push("[*^$]=" + q + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    m.push("\\[" + q + "*(?:value|" + L + ")"),
                  e.querySelectorAll("[id~=" + x + "-]").length || m.push("~="),
                  e.querySelectorAll(":checked").length || m.push(":checked"),
                  e.querySelectorAll("a#" + x + "+*").length ||
                    m.push(".#.+[+~]");
              }),
              ae(function (e) {
                var t = f.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    m.push("name" + q + "*[*^$|!~]?="),
                  e.querySelectorAll(":enabled").length ||
                    m.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  m.push(",.*:");
              })),
            (n.matchesSelector = G.test(
              (y =
                h.matches ||
                h.webkitMatchesSelector ||
                h.mozMatchesSelector ||
                h.oMatchesSelector ||
                h.msMatchesSelector)
            )) &&
              ae(function (e) {
                (n.disconnectedMatch = y.call(e, "div")),
                  y.call(e, "[s!='']:x"),
                  g.push("!=", M);
              }),
            (m = m.length && new RegExp(m.join("|"))),
            (g = g.length && new RegExp(g.join("|"))),
            (t = G.test(h.compareDocumentPosition)),
            (b =
              t || G.test(h.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      i = t && t.parentNode;
                    return (
                      e === i ||
                      !(
                        !i ||
                        1 !== i.nodeType ||
                        !(n.contains
                          ? n.contains(i)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(i))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                    return !1;
                  }),
            (_ = t
              ? function (e, t) {
                  if (e === t) return (p = !0), 0;
                  var i =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    i ||
                    (1 &
                      (i =
                        (e.ownerDocument || e) === (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!n.sortDetached && t.compareDocumentPosition(e) === i)
                      ? e === f || (e.ownerDocument === w && b(w, e))
                        ? -1
                        : t === f || (t.ownerDocument === w && b(w, t))
                        ? 1
                        : u
                        ? R(u, e) - R(u, t)
                        : 0
                      : 4 & i
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (p = !0), 0;
                  var n,
                    i = 0,
                    r = e.parentNode,
                    o = t.parentNode,
                    s = [e],
                    a = [t];
                  if (!r || !o)
                    return e === f
                      ? -1
                      : t === f
                      ? 1
                      : r
                      ? -1
                      : o
                      ? 1
                      : u
                      ? R(u, e) - R(u, t)
                      : 0;
                  if (r === o) return ce(e, t);
                  for (n = e; (n = n.parentNode); ) s.unshift(n);
                  for (n = t; (n = n.parentNode); ) a.unshift(n);
                  for (; s[i] === a[i]; ) i++;
                  return i
                    ? ce(s[i], a[i])
                    : s[i] === w
                    ? -1
                    : a[i] === w
                    ? 1
                    : 0;
                }),
            f)
          : f;
      }),
      (re.matches = function (e, t) {
        return re(e, null, null, t);
      }),
      (re.matchesSelector = function (e, t) {
        if (
          ((e.ownerDocument || e) !== f && d(e),
          (t = t.replace(U, "='$1']")),
          n.matchesSelector &&
            v &&
            !S[t + " "] &&
            (!g || !g.test(t)) &&
            (!m || !m.test(t)))
        )
          try {
            var i = y.call(e, t);
            if (
              i ||
              n.disconnectedMatch ||
              (e.document && 11 !== e.document.nodeType)
            )
              return i;
          } catch (e) {}
        return re(t, f, null, [e]).length > 0;
      }),
      (re.contains = function (e, t) {
        return (e.ownerDocument || e) !== f && d(e), b(e, t);
      }),
      (re.attr = function (e, t) {
        (e.ownerDocument || e) !== f && d(e);
        var r = i.attrHandle[t.toLowerCase()],
          o = r && $.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !v) : void 0;
        return void 0 !== o
          ? o
          : n.attributes || !v
          ? e.getAttribute(t)
          : (o = e.getAttributeNode(t)) && o.specified
          ? o.value
          : null;
      }),
      (re.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }),
      (re.uniqueSort = function (e) {
        var t,
          i = [],
          r = 0,
          o = 0;
        if (
          ((p = !n.detectDuplicates),
          (u = !n.sortStable && e.slice(0)),
          e.sort(_),
          p)
        ) {
          for (; (t = e[o++]); ) t === e[o] && (r = i.push(o));
          for (; r--; ) e.splice(i[r], 1);
        }
        return (u = null), e;
      }),
      (r = re.getText = function (e) {
        var t,
          n = "",
          i = 0,
          o = e.nodeType;
        if (o) {
          if (1 === o || 9 === o || 11 === o) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
          } else if (3 === o || 4 === o) return e.nodeValue;
        } else for (; (t = e[i++]); ) n += r(t);
        return n;
      }),
      ((i = re.selectors = {
        cacheLength: 50,
        createPseudo: se,
        match: J,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, ne)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || re.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && re.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return J.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    X.test(n) &&
                    (t = s(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = k[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + q + ")" + e + "(" + q + "|$)")) &&
                k(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      (void 0 !== e.getAttribute && e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (e, t, n) {
            return function (i) {
              var r = re.attr(i, e);
              return null == r
                ? "!=" === t
                : !t ||
                    ((r += ""),
                    "=" === t
                      ? r === n
                      : "!=" === t
                      ? r !== n
                      : "^=" === t
                      ? n && 0 === r.indexOf(n)
                      : "*=" === t
                      ? n && r.indexOf(n) > -1
                      : "$=" === t
                      ? n && r.slice(-n.length) === n
                      : "~=" === t
                      ? (" " + r.replace(H, " ") + " ").indexOf(n) > -1
                      : "|=" === t &&
                        (r === n || r.slice(0, n.length + 1) === n + "-"));
            };
          },
          CHILD: function (e, t, n, i, r) {
            var o = "nth" !== e.slice(0, 3),
              s = "last" !== e.slice(-4),
              a = "of-type" === t;
            return 1 === i && 0 === r
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (t, n, l) {
                  var c,
                    u,
                    p,
                    d,
                    f,
                    h,
                    v = o !== s ? "nextSibling" : "previousSibling",
                    m = t.parentNode,
                    g = a && t.nodeName.toLowerCase(),
                    y = !l && !a,
                    b = !1;
                  if (m) {
                    if (o) {
                      for (; v; ) {
                        for (d = t; (d = d[v]); )
                          if (
                            a
                              ? d.nodeName.toLowerCase() === g
                              : 1 === d.nodeType
                          )
                            return !1;
                        h = v = "only" === e && !h && "nextSibling";
                      }
                      return !0;
                    }
                    if (((h = [s ? m.firstChild : m.lastChild]), s && y)) {
                      for (
                        b =
                          (f =
                            (c =
                              (u =
                                (p = (d = m)[x] || (d[x] = {}))[d.uniqueID] ||
                                (p[d.uniqueID] = {}))[e] || [])[0] === T &&
                            c[1]) && c[2],
                          d = f && m.childNodes[f];
                        (d = (++f && d && d[v]) || (b = f = 0) || h.pop());

                      )
                        if (1 === d.nodeType && ++b && d === t) {
                          u[e] = [T, f, b];
                          break;
                        }
                    } else if (
                      (y &&
                        (b = f =
                          (c =
                            (u =
                              (p = (d = t)[x] || (d[x] = {}))[d.uniqueID] ||
                              (p[d.uniqueID] = {}))[e] || [])[0] === T && c[1]),
                      !1 === b)
                    )
                      for (
                        ;
                        (d = (++f && d && d[v]) || (b = f = 0) || h.pop()) &&
                        ((a
                          ? d.nodeName.toLowerCase() !== g
                          : 1 !== d.nodeType) ||
                          !++b ||
                          (y &&
                            ((u =
                              (p = d[x] || (d[x] = {}))[d.uniqueID] ||
                              (p[d.uniqueID] = {}))[e] = [T, b]),
                          d !== t));

                      );
                    return (b -= r) === i || (b % i == 0 && b / i >= 0);
                  }
                };
          },
          PSEUDO: function (e, t) {
            var n,
              r =
                i.pseudos[e] ||
                i.setFilters[e.toLowerCase()] ||
                re.error("unsupported pseudo: " + e);
            return r[x]
              ? r(t)
              : r.length > 1
              ? ((n = [e, e, "", t]),
                i.setFilters.hasOwnProperty(e.toLowerCase())
                  ? se(function (e, n) {
                      for (var i, o = r(e, t), s = o.length; s--; )
                        e[(i = R(e, o[s]))] = !(n[i] = o[s]);
                    })
                  : function (e) {
                      return r(e, 0, n);
                    })
              : r;
          },
        },
        pseudos: {
          not: se(function (e) {
            var t = [],
              n = [],
              i = a(e.replace(W, "$1"));
            return i[x]
              ? se(function (e, t, n, r) {
                  for (var o, s = i(e, null, r, []), a = e.length; a--; )
                    (o = s[a]) && (e[a] = !(t[a] = o));
                })
              : function (e, r, o) {
                  return (t[0] = e), i(t, null, o, n), (t[0] = null), !n.pop();
                };
          }),
          has: se(function (e) {
            return function (t) {
              return re(e, t).length > 0;
            };
          }),
          contains: se(function (e) {
            return (
              (e = e.replace(te, ne)),
              function (t) {
                return (t.textContent || t.innerText || r(t)).indexOf(e) > -1;
              }
            );
          }),
          lang: se(function (e) {
            return (
              V.test(e || "") || re.error("unsupported lang: " + e),
              (e = e.replace(te, ne).toLowerCase()),
              function (t) {
                var n;
                do {
                  if (
                    (n = v
                      ? t.lang
                      : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                  )
                    return (
                      (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                    );
                } while ((t = t.parentNode) && 1 === t.nodeType);
                return !1;
              }
            );
          }),
          target: function (t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id;
          },
          root: function (e) {
            return e === h;
          },
          focus: function (e) {
            return (
              e === f.activeElement &&
              (!f.hasFocus || f.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: function (e) {
            return !1 === e.disabled;
          },
          disabled: function (e) {
            return !0 === e.disabled;
          },
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !i.pseudos.empty(e);
          },
          header: function (e) {
            return Y.test(e.nodeName);
          },
          input: function (e) {
            return Q.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: de(function () {
            return [0];
          }),
          last: de(function (e, t) {
            return [t - 1];
          }),
          eq: de(function (e, t, n) {
            return [0 > n ? n + t : n];
          }),
          even: de(function (e, t) {
            for (var n = 0; t > n; n += 2) e.push(n);
            return e;
          }),
          odd: de(function (e, t) {
            for (var n = 1; t > n; n += 2) e.push(n);
            return e;
          }),
          lt: de(function (e, t, n) {
            for (var i = 0 > n ? n + t : n; --i >= 0; ) e.push(i);
            return e;
          }),
          gt: de(function (e, t, n) {
            for (var i = 0 > n ? n + t : n; ++i < t; ) e.push(i);
            return e;
          }),
        },
      }).pseudos.nth = i.pseudos.eq),
      { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
        i.pseudos[t] = ue(t);
      for (t in { submit: !0, reset: !0 }) i.pseudos[t] = pe(t);
      function he() {}
      function ve(e) {
        for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
        return i;
      }
      function me(e, t, n) {
        var i = t.dir,
          r = n && "parentNode" === i,
          o = C++;
        return t.first
          ? function (t, n, o) {
              for (; (t = t[i]); ) if (1 === t.nodeType || r) return e(t, n, o);
            }
          : function (t, n, s) {
              var a,
                l,
                c,
                u = [T, o];
              if (s) {
                for (; (t = t[i]); )
                  if ((1 === t.nodeType || r) && e(t, n, s)) return !0;
              } else
                for (; (t = t[i]); )
                  if (1 === t.nodeType || r) {
                    if (
                      (a = (l =
                        (c = t[x] || (t[x] = {}))[t.uniqueID] ||
                        (c[t.uniqueID] = {}))[i]) &&
                      a[0] === T &&
                      a[1] === o
                    )
                      return (u[2] = a[2]);
                    if (((l[i] = u), (u[2] = e(t, n, s)))) return !0;
                  }
            };
      }
      function ge(e) {
        return e.length > 1
          ? function (t, n, i) {
              for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
              return !0;
            }
          : e[0];
      }
      function ye(e, t, n, i, r) {
        for (var o, s = [], a = 0, l = e.length, c = null != t; l > a; a++)
          (o = e[a]) && (!n || n(o, i, r)) && (s.push(o), c && t.push(a));
        return s;
      }
      function be(e, t, n, i, r, o) {
        return (
          i && !i[x] && (i = be(i)),
          r && !r[x] && (r = be(r, o)),
          se(function (o, s, a, l) {
            var c,
              u,
              p,
              d = [],
              f = [],
              h = s.length,
              v =
                o ||
                (function (e, t, n) {
                  for (var i = 0, r = t.length; r > i; i++) re(e, t[i], n);
                  return n;
                })(t || "*", a.nodeType ? [a] : a, []),
              m = !e || (!o && t) ? v : ye(v, d, e, a, l),
              g = n ? (r || (o ? e : h || i) ? [] : s) : m;
            if ((n && n(m, g, a, l), i))
              for (c = ye(g, f), i(c, [], a, l), u = c.length; u--; )
                (p = c[u]) && (g[f[u]] = !(m[f[u]] = p));
            if (o) {
              if (r || e) {
                if (r) {
                  for (c = [], u = g.length; u--; )
                    (p = g[u]) && c.push((m[u] = p));
                  r(null, (g = []), c, l);
                }
                for (u = g.length; u--; )
                  (p = g[u]) &&
                    (c = r ? R(o, p) : d[u]) > -1 &&
                    (o[c] = !(s[c] = p));
              }
            } else (g = ye(g === s ? g.splice(h, g.length) : g)), r ? r(null, s, g, l) : I.apply(s, g);
          })
        );
      }
      function xe(e) {
        for (
          var t,
            n,
            r,
            o = e.length,
            s = i.relative[e[0].type],
            a = s || i.relative[" "],
            l = s ? 1 : 0,
            u = me(
              function (e) {
                return e === t;
              },
              a,
              !0
            ),
            p = me(
              function (e) {
                return R(t, e) > -1;
              },
              a,
              !0
            ),
            d = [
              function (e, n, i) {
                var r =
                  (!s && (i || n !== c)) ||
                  ((t = n).nodeType ? u(e, n, i) : p(e, n, i));
                return (t = null), r;
              },
            ];
          o > l;
          l++
        )
          if ((n = i.relative[e[l].type])) d = [me(ge(d), n)];
          else {
            if ((n = i.filter[e[l].type].apply(null, e[l].matches))[x]) {
              for (r = ++l; o > r && !i.relative[e[r].type]; r++);
              return be(
                l > 1 && ge(d),
                l > 1 &&
                  ve(
                    e
                      .slice(0, l - 1)
                      .concat({ value: " " === e[l - 2].type ? "*" : "" })
                  ).replace(W, "$1"),
                n,
                r > l && xe(e.slice(l, r)),
                o > r && xe((e = e.slice(r))),
                o > r && ve(e)
              );
            }
            d.push(n);
          }
        return ge(d);
      }
      function we(e, t) {
        var n = t.length > 0,
          r = e.length > 0,
          o = function (o, s, a, l, u) {
            var p,
              h,
              m,
              g = 0,
              y = "0",
              b = o && [],
              x = [],
              w = c,
              C = o || (r && i.find.TAG("*", u)),
              k = (T += null == w ? 1 : Math.random() || 0.1),
              E = C.length;
            for (
              u && (c = s === f || s || u);
              y !== E && null != (p = C[y]);
              y++
            ) {
              if (r && p) {
                for (
                  h = 0, s || p.ownerDocument === f || (d(p), (a = !v));
                  (m = e[h++]);

                )
                  if (m(p, s || f, a)) {
                    l.push(p);
                    break;
                  }
                u && (T = k);
              }
              n && ((p = !m && p) && g--, o && b.push(p));
            }
            if (((g += y), n && y !== g)) {
              for (h = 0; (m = t[h++]); ) m(b, x, s, a);
              if (o) {
                if (g > 0) for (; y--; ) b[y] || x[y] || (x[y] = N.call(l));
                x = ye(x);
              }
              I.apply(l, x),
                u && !o && x.length > 0 && g + t.length > 1 && re.uniqueSort(l);
            }
            return u && ((T = k), (c = w)), b;
          };
        return n ? se(o) : o;
      }
      return (
        (he.prototype = i.filters = i.pseudos),
        (i.setFilters = new he()),
        (s = re.tokenize = function (e, t) {
          var n,
            r,
            o,
            s,
            a,
            l,
            c,
            u = E[e + " "];
          if (u) return t ? 0 : u.slice(0);
          for (a = e, l = [], c = i.preFilter; a; ) {
            for (s in ((!n || (r = z.exec(a))) &&
              (r && (a = a.slice(r[0].length) || a), l.push((o = []))),
            (n = !1),
            (r = B.exec(a)) &&
              ((n = r.shift()),
              o.push({ value: n, type: r[0].replace(W, " ") }),
              (a = a.slice(n.length))),
            i.filter))
              !(r = J[s].exec(a)) ||
                (c[s] && !(r = c[s](r))) ||
                ((n = r.shift()),
                o.push({ value: n, type: s, matches: r }),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return t ? a.length : a ? re.error(e) : E(e, l).slice(0);
        }),
        (a = re.compile = function (e, t) {
          var n,
            i = [],
            r = [],
            o = S[e + " "];
          if (!o) {
            for (t || (t = s(e)), n = t.length; n--; )
              (o = xe(t[n]))[x] ? i.push(o) : r.push(o);
            (o = S(e, we(r, i))).selector = e;
          }
          return o;
        }),
        (l = re.select = function (e, t, r, o) {
          var l,
            c,
            u,
            p,
            d,
            f = "function" == typeof e && e,
            h = !o && s((e = f.selector || e));
          if (((r = r || []), 1 === h.length)) {
            if (
              (c = h[0] = h[0].slice(0)).length > 2 &&
              "ID" === (u = c[0]).type &&
              n.getById &&
              9 === t.nodeType &&
              v &&
              i.relative[c[1].type]
            ) {
              if (!(t = (i.find.ID(u.matches[0].replace(te, ne), t) || [])[0]))
                return r;
              f && (t = t.parentNode), (e = e.slice(c.shift().value.length));
            }
            for (
              l = J.needsContext.test(e) ? 0 : c.length;
              l-- && ((u = c[l]), !i.relative[(p = u.type)]);

            )
              if (
                (d = i.find[p]) &&
                (o = d(
                  u.matches[0].replace(te, ne),
                  (Z.test(c[0].type) && fe(t.parentNode)) || t
                ))
              ) {
                if ((c.splice(l, 1), !(e = o.length && ve(c))))
                  return I.apply(r, o), r;
                break;
              }
          }
          return (
            (f || a(e, h))(
              o,
              t,
              !v,
              r,
              !t || (Z.test(e) && fe(t.parentNode)) || t
            ),
            r
          );
        }),
        (n.sortStable = x.split("").sort(_).join("") === x),
        (n.detectDuplicates = !!p),
        d(),
        (n.sortDetached = ae(function (e) {
          return 1 & e.compareDocumentPosition(f.createElement("div"));
        })),
        ae(function (e) {
          return (
            (e.innerHTML = "<a href='#'></a>"),
            "#" === e.firstChild.getAttribute("href")
          );
        }) ||
          le("type|href|height|width", function (e, t, n) {
            return n
              ? void 0
              : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
          }),
        (n.attributes &&
          ae(function (e) {
            return (
              (e.innerHTML = "<input/>"),
              e.firstChild.setAttribute("value", ""),
              "" === e.firstChild.getAttribute("value")
            );
          })) ||
          le("value", function (e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase()
              ? void 0
              : e.defaultValue;
          }),
        ae(function (e) {
          return null == e.getAttribute("disabled");
        }) ||
          le(L, function (e, t, n) {
            var i;
            return n
              ? void 0
              : !0 === e[t]
              ? t.toLowerCase()
              : (i = e.getAttributeNode(t)) && i.specified
              ? i.value
              : null;
          }),
        re
      );
    })(e);
    (f.find = b),
      (f.expr = b.selectors),
      (f.expr[":"] = f.expr.pseudos),
      (f.uniqueSort = f.unique = b.uniqueSort),
      (f.text = b.getText),
      (f.isXMLDoc = b.isXML),
      (f.contains = b.contains);
    var x = function (e, t, n) {
        for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
          if (1 === e.nodeType) {
            if (r && f(e).is(n)) break;
            i.push(e);
          }
        return i;
      },
      w = function (e, t) {
        for (var n = []; e; e = e.nextSibling)
          1 === e.nodeType && e !== t && n.push(e);
        return n;
      },
      T = f.expr.match.needsContext,
      C = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      k = /^.[^:#\[\.,]*$/;
    function E(e, t, n) {
      if (f.isFunction(t))
        return f.grep(e, function (e, i) {
          return !!t.call(e, i, e) !== n;
        });
      if (t.nodeType)
        return f.grep(e, function (e) {
          return (e === t) !== n;
        });
      if ("string" == typeof t) {
        if (k.test(t)) return f.filter(t, e, n);
        t = f.filter(t, e);
      }
      return f.grep(e, function (e) {
        return a.call(t, e) > -1 !== n;
      });
    }
    (f.filter = function (e, t, n) {
      var i = t[0];
      return (
        n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === i.nodeType
          ? f.find.matchesSelector(i, e)
            ? [i]
            : []
          : f.find.matches(
              e,
              f.grep(t, function (e) {
                return 1 === e.nodeType;
              })
            )
      );
    }),
      f.fn.extend({
        find: function (e) {
          var t,
            n = this.length,
            i = [],
            r = this;
          if ("string" != typeof e)
            return this.pushStack(
              f(e).filter(function () {
                for (t = 0; n > t; t++) if (f.contains(r[t], this)) return !0;
              })
            );
          for (t = 0; n > t; t++) f.find(e, r[t], i);
          return (
            ((i = this.pushStack(n > 1 ? f.unique(i) : i)).selector = this
              .selector
              ? this.selector + " " + e
              : e),
            i
          );
        },
        filter: function (e) {
          return this.pushStack(E(this, e || [], !1));
        },
        not: function (e) {
          return this.pushStack(E(this, e || [], !0));
        },
        is: function (e) {
          return !!E(
            this,
            "string" == typeof e && T.test(e) ? f(e) : e || [],
            !1
          ).length;
        },
      });
    var S,
      _ = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    ((f.fn.init = function (e, t, n) {
      var r, o;
      if (!e) return this;
      if (((n = n || S), "string" == typeof e)) {
        if (
          !(r =
            "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
              ? [null, e, null]
              : _.exec(e)) ||
          (!r[1] && t)
        )
          return !t || t.jquery
            ? (t || n).find(e)
            : this.constructor(t).find(e);
        if (r[1]) {
          if (
            ((t = t instanceof f ? t[0] : t),
            f.merge(
              this,
              f.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : i, !0)
            ),
            C.test(r[1]) && f.isPlainObject(t))
          )
            for (r in t)
              f.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
          return this;
        }
        return (
          (o = i.getElementById(r[2])) &&
            o.parentNode &&
            ((this.length = 1), (this[0] = o)),
          (this.context = i),
          (this.selector = e),
          this
        );
      }
      return e.nodeType
        ? ((this.context = this[0] = e), (this.length = 1), this)
        : f.isFunction(e)
        ? void 0 !== n.ready
          ? n.ready(e)
          : e(f)
        : (void 0 !== e.selector &&
            ((this.selector = e.selector), (this.context = e.context)),
          f.makeArray(e, this));
    }).prototype = f.fn),
      (S = f(i));
    var A = /^(?:parents|prev(?:Until|All))/,
      $ = { children: !0, contents: !0, next: !0, prev: !0 };
    function D(e, t) {
      for (; (e = e[t]) && 1 !== e.nodeType; );
      return e;
    }
    f.fn.extend({
      has: function (e) {
        var t = f(e, this),
          n = t.length;
        return this.filter(function () {
          for (var e = 0; n > e; e++) if (f.contains(this, t[e])) return !0;
        });
      },
      closest: function (e, t) {
        for (
          var n,
            i = 0,
            r = this.length,
            o = [],
            s = T.test(e) || "string" != typeof e ? f(e, t || this.context) : 0;
          r > i;
          i++
        )
          for (n = this[i]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (s
                ? s.index(n) > -1
                : 1 === n.nodeType && f.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
        return this.pushStack(o.length > 1 ? f.uniqueSort(o) : o);
      },
      index: function (e) {
        return e
          ? "string" == typeof e
            ? a.call(f(e), this[0])
            : a.call(this, e.jquery ? e[0] : e)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (e, t) {
        return this.pushStack(f.uniqueSort(f.merge(this.get(), f(e, t))));
      },
      addBack: function (e) {
        return this.add(
          null == e ? this.prevObject : this.prevObject.filter(e)
        );
      },
    }),
      f.each(
        {
          parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
          },
          parents: function (e) {
            return x(e, "parentNode");
          },
          parentsUntil: function (e, t, n) {
            return x(e, "parentNode", n);
          },
          next: function (e) {
            return D(e, "nextSibling");
          },
          prev: function (e) {
            return D(e, "previousSibling");
          },
          nextAll: function (e) {
            return x(e, "nextSibling");
          },
          prevAll: function (e) {
            return x(e, "previousSibling");
          },
          nextUntil: function (e, t, n) {
            return x(e, "nextSibling", n);
          },
          prevUntil: function (e, t, n) {
            return x(e, "previousSibling", n);
          },
          siblings: function (e) {
            return w((e.parentNode || {}).firstChild, e);
          },
          children: function (e) {
            return w(e.firstChild);
          },
          contents: function (e) {
            return e.contentDocument || f.merge([], e.childNodes);
          },
        },
        function (e, t) {
          f.fn[e] = function (n, i) {
            var r = f.map(this, t, n);
            return (
              "Until" !== e.slice(-5) && (i = n),
              i && "string" == typeof i && (r = f.filter(i, r)),
              this.length > 1 &&
                ($[e] || f.uniqueSort(r), A.test(e) && r.reverse()),
              this.pushStack(r)
            );
          };
        }
      );
    var N,
      j = /\S+/g;
    function I() {
      i.removeEventListener("DOMContentLoaded", I),
        e.removeEventListener("load", I),
        f.ready();
    }
    (f.Callbacks = function (e) {
      e =
        "string" == typeof e
          ? (function (e) {
              var t = {};
              return (
                f.each(e.match(j) || [], function (e, n) {
                  t[n] = !0;
                }),
                t
              );
            })(e)
          : f.extend({}, e);
      var t,
        n,
        i,
        r,
        o = [],
        s = [],
        a = -1,
        l = function () {
          for (r = e.once, i = t = !0; s.length; a = -1)
            for (n = s.shift(); ++a < o.length; )
              !1 === o[a].apply(n[0], n[1]) &&
                e.stopOnFalse &&
                ((a = o.length), (n = !1));
          e.memory || (n = !1), (t = !1), r && (o = n ? [] : "");
        },
        c = {
          add: function () {
            return (
              o &&
                (n && !t && ((a = o.length - 1), s.push(n)),
                (function t(n) {
                  f.each(n, function (n, i) {
                    f.isFunction(i)
                      ? (e.unique && c.has(i)) || o.push(i)
                      : i && i.length && "string" !== f.type(i) && t(i);
                  });
                })(arguments),
                n && !t && l()),
              this
            );
          },
          remove: function () {
            return (
              f.each(arguments, function (e, t) {
                for (var n; (n = f.inArray(t, o, n)) > -1; )
                  o.splice(n, 1), a >= n && a--;
              }),
              this
            );
          },
          has: function (e) {
            return e ? f.inArray(e, o) > -1 : o.length > 0;
          },
          empty: function () {
            return o && (o = []), this;
          },
          disable: function () {
            return (r = s = []), (o = n = ""), this;
          },
          disabled: function () {
            return !o;
          },
          lock: function () {
            return (r = s = []), n || (o = n = ""), this;
          },
          locked: function () {
            return !!r;
          },
          fireWith: function (e, n) {
            return (
              r ||
                ((n = [e, (n = n || []).slice ? n.slice() : n]),
                s.push(n),
                t || l()),
              this
            );
          },
          fire: function () {
            return c.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!i;
          },
        };
      return c;
    }),
      f.extend({
        Deferred: function (e) {
          var t = [
              ["resolve", "done", f.Callbacks("once memory"), "resolved"],
              ["reject", "fail", f.Callbacks("once memory"), "rejected"],
              ["notify", "progress", f.Callbacks("memory")],
            ],
            n = "pending",
            i = {
              state: function () {
                return n;
              },
              always: function () {
                return r.done(arguments).fail(arguments), this;
              },
              then: function () {
                var e = arguments;
                return f
                  .Deferred(function (n) {
                    f.each(t, function (t, o) {
                      var s = f.isFunction(e[t]) && e[t];
                      r[o[1]](function () {
                        var e = s && s.apply(this, arguments);
                        e && f.isFunction(e.promise)
                          ? e
                              .promise()
                              .progress(n.notify)
                              .done(n.resolve)
                              .fail(n.reject)
                          : n[o[0] + "With"](
                              this === i ? n.promise() : this,
                              s ? [e] : arguments
                            );
                      });
                    }),
                      (e = null);
                  })
                  .promise();
              },
              promise: function (e) {
                return null != e ? f.extend(e, i) : i;
              },
            },
            r = {};
          return (
            (i.pipe = i.then),
            f.each(t, function (e, o) {
              var s = o[2],
                a = o[3];
              (i[o[1]] = s.add),
                a &&
                  s.add(
                    function () {
                      n = a;
                    },
                    t[1 ^ e][2].disable,
                    t[2][2].lock
                  ),
                (r[o[0]] = function () {
                  return (
                    r[o[0] + "With"](this === r ? i : this, arguments), this
                  );
                }),
                (r[o[0] + "With"] = s.fireWith);
            }),
            i.promise(r),
            e && e.call(r, r),
            r
          );
        },
        when: function (e) {
          var t,
            n,
            i,
            o = 0,
            s = r.call(arguments),
            a = s.length,
            l = 1 !== a || (e && f.isFunction(e.promise)) ? a : 0,
            c = 1 === l ? e : f.Deferred(),
            u = function (e, n, i) {
              return function (o) {
                (n[e] = this),
                  (i[e] = arguments.length > 1 ? r.call(arguments) : o),
                  i === t ? c.notifyWith(n, i) : --l || c.resolveWith(n, i);
              };
            };
          if (a > 1)
            for (
              t = new Array(a), n = new Array(a), i = new Array(a);
              a > o;
              o++
            )
              s[o] && f.isFunction(s[o].promise)
                ? s[o]
                    .promise()
                    .progress(u(o, n, t))
                    .done(u(o, i, s))
                    .fail(c.reject)
                : --l;
          return l || c.resolveWith(i, s), c.promise();
        },
      }),
      (f.fn.ready = function (e) {
        return f.ready.promise().done(e), this;
      }),
      f.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
          e ? f.readyWait++ : f.ready(!0);
        },
        ready: function (e) {
          (!0 === e ? --f.readyWait : f.isReady) ||
            ((f.isReady = !0),
            (!0 !== e && --f.readyWait > 0) ||
              (N.resolveWith(i, [f]),
              f.fn.triggerHandler &&
                (f(i).triggerHandler("ready"), f(i).off("ready"))));
        },
      }),
      (f.ready.promise = function (t) {
        return (
          N ||
            ((N = f.Deferred()),
            "complete" === i.readyState ||
            ("loading" !== i.readyState && !i.documentElement.doScroll)
              ? e.setTimeout(f.ready)
              : (i.addEventListener("DOMContentLoaded", I),
                e.addEventListener("load", I))),
          N.promise(t)
        );
      }),
      f.ready.promise();
    var O = function (e, t, n, i, r, o, s) {
        var a = 0,
          l = e.length,
          c = null == n;
        if ("object" === f.type(n))
          for (a in ((r = !0), n)) O(e, t, a, n[a], !0, o, s);
        else if (
          void 0 !== i &&
          ((r = !0),
          f.isFunction(i) || (s = !0),
          c &&
            (s
              ? (t.call(e, i), (t = null))
              : ((c = t),
                (t = function (e, t, n) {
                  return c.call(f(e), n);
                }))),
          t)
        )
          for (; l > a; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return r ? e : c ? t.call(e) : l ? t(e[0], n) : o;
      },
      R = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      };
    function L() {
      this.expando = f.expando + L.uid++;
    }
    (L.uid = 1),
      (L.prototype = {
        register: function (e, t) {
          var n = t || {};
          return (
            e.nodeType
              ? (e[this.expando] = n)
              : Object.defineProperty(e, this.expando, {
                  value: n,
                  writable: !0,
                  configurable: !0,
                }),
            e[this.expando]
          );
        },
        cache: function (e) {
          if (!R(e)) return {};
          var t = e[this.expando];
          return (
            t ||
              ((t = {}),
              R(e) &&
                (e.nodeType
                  ? (e[this.expando] = t)
                  : Object.defineProperty(e, this.expando, {
                      value: t,
                      configurable: !0,
                    }))),
            t
          );
        },
        set: function (e, t, n) {
          var i,
            r = this.cache(e);
          if ("string" == typeof t) r[t] = n;
          else for (i in t) r[i] = t[i];
          return r;
        },
        get: function (e, t) {
          return void 0 === t
            ? this.cache(e)
            : e[this.expando] && e[this.expando][t];
        },
        access: function (e, t, n) {
          var i;
          return void 0 === t || (t && "string" == typeof t && void 0 === n)
            ? void 0 !== (i = this.get(e, t))
              ? i
              : this.get(e, f.camelCase(t))
            : (this.set(e, t, n), void 0 !== n ? n : t);
        },
        remove: function (e, t) {
          var n,
            i,
            r,
            o = e[this.expando];
          if (void 0 !== o) {
            if (void 0 === t) this.register(e);
            else {
              f.isArray(t)
                ? (i = t.concat(t.map(f.camelCase)))
                : ((r = f.camelCase(t)),
                  t in o
                    ? (i = [t, r])
                    : (i = (i = r) in o ? [i] : i.match(j) || [])),
                (n = i.length);
              for (; n--; ) delete o[i[n]];
            }
            (void 0 === t || f.isEmptyObject(o)) &&
              (e.nodeType
                ? (e[this.expando] = void 0)
                : delete e[this.expando]);
          }
        },
        hasData: function (e) {
          var t = e[this.expando];
          return void 0 !== t && !f.isEmptyObject(t);
        },
      });
    var q = new L(),
      P = new L(),
      F = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      M = /[A-Z]/g;
    function H(e, t, n) {
      var i;
      if (void 0 === n && 1 === e.nodeType)
        if (
          ((i = "data-" + t.replace(M, "-$&").toLowerCase()),
          "string" == typeof (n = e.getAttribute(i)))
        ) {
          try {
            n =
              "true" === n ||
              ("false" !== n &&
                ("null" === n
                  ? null
                  : +n + "" === n
                  ? +n
                  : F.test(n)
                  ? f.parseJSON(n)
                  : n));
          } catch (e) {}
          P.set(e, t, n);
        } else n = void 0;
      return n;
    }
    f.extend({
      hasData: function (e) {
        return P.hasData(e) || q.hasData(e);
      },
      data: function (e, t, n) {
        return P.access(e, t, n);
      },
      removeData: function (e, t) {
        P.remove(e, t);
      },
      _data: function (e, t, n) {
        return q.access(e, t, n);
      },
      _removeData: function (e, t) {
        q.remove(e, t);
      },
    }),
      f.fn.extend({
        data: function (e, t) {
          var n,
            i,
            r,
            o = this[0],
            s = o && o.attributes;
          if (void 0 === e) {
            if (
              this.length &&
              ((r = P.get(o)), 1 === o.nodeType && !q.get(o, "hasDataAttrs"))
            ) {
              for (n = s.length; n--; )
                s[n] &&
                  0 === (i = s[n].name).indexOf("data-") &&
                  ((i = f.camelCase(i.slice(5))), H(o, i, r[i]));
              q.set(o, "hasDataAttrs", !0);
            }
            return r;
          }
          return "object" == typeof e
            ? this.each(function () {
                P.set(this, e);
              })
            : O(
                this,
                function (t) {
                  var n, i;
                  if (o && void 0 === t) {
                    if (
                      void 0 !==
                      (n =
                        P.get(o, e) ||
                        P.get(o, e.replace(M, "-$&").toLowerCase()))
                    )
                      return n;
                    if (((i = f.camelCase(e)), void 0 !== (n = P.get(o, i))))
                      return n;
                    if (void 0 !== (n = H(o, i, void 0))) return n;
                  } else
                    (i = f.camelCase(e)),
                      this.each(function () {
                        var n = P.get(this, i);
                        P.set(this, i, t),
                          e.indexOf("-") > -1 &&
                            void 0 !== n &&
                            P.set(this, e, t);
                      });
                },
                null,
                t,
                arguments.length > 1,
                null,
                !0
              );
        },
        removeData: function (e) {
          return this.each(function () {
            P.remove(this, e);
          });
        },
      }),
      f.extend({
        queue: function (e, t, n) {
          var i;
          return e
            ? ((t = (t || "fx") + "queue"),
              (i = q.get(e, t)),
              n &&
                (!i || f.isArray(n)
                  ? (i = q.access(e, t, f.makeArray(n)))
                  : i.push(n)),
              i || [])
            : void 0;
        },
        dequeue: function (e, t) {
          t = t || "fx";
          var n = f.queue(e, t),
            i = n.length,
            r = n.shift(),
            o = f._queueHooks(e, t);
          "inprogress" === r && ((r = n.shift()), i--),
            r &&
              ("fx" === t && n.unshift("inprogress"),
              delete o.stop,
              r.call(
                e,
                function () {
                  f.dequeue(e, t);
                },
                o
              )),
            !i && o && o.empty.fire();
        },
        _queueHooks: function (e, t) {
          var n = t + "queueHooks";
          return (
            q.get(e, n) ||
            q.access(e, n, {
              empty: f.Callbacks("once memory").add(function () {
                q.remove(e, [t + "queue", n]);
              }),
            })
          );
        },
      }),
      f.fn.extend({
        queue: function (e, t) {
          var n = 2;
          return (
            "string" != typeof e && ((t = e), (e = "fx"), n--),
            arguments.length < n
              ? f.queue(this[0], e)
              : void 0 === t
              ? this
              : this.each(function () {
                  var n = f.queue(this, e, t);
                  f._queueHooks(this, e),
                    "fx" === e && "inprogress" !== n[0] && f.dequeue(this, e);
                })
          );
        },
        dequeue: function (e) {
          return this.each(function () {
            f.dequeue(this, e);
          });
        },
        clearQueue: function (e) {
          return this.queue(e || "fx", []);
        },
        promise: function (e, t) {
          var n,
            i = 1,
            r = f.Deferred(),
            o = this,
            s = this.length,
            a = function () {
              --i || r.resolveWith(o, [o]);
            };
          for (
            "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
            s--;

          )
            (n = q.get(o[s], e + "queueHooks")) &&
              n.empty &&
              (i++, n.empty.add(a));
          return a(), r.promise(t);
        },
      });
    var W = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      z = new RegExp("^(?:([+-])=|)(" + W + ")([a-z%]*)$", "i"),
      B = ["Top", "Right", "Bottom", "Left"],
      U = function (e, t) {
        return (
          (e = t || e),
          "none" === f.css(e, "display") || !f.contains(e.ownerDocument, e)
        );
      };
    function X(e, t, n, i) {
      var r,
        o = 1,
        s = 20,
        a = i
          ? function () {
              return i.cur();
            }
          : function () {
              return f.css(e, t, "");
            },
        l = a(),
        c = (n && n[3]) || (f.cssNumber[t] ? "" : "px"),
        u = (f.cssNumber[t] || ("px" !== c && +l)) && z.exec(f.css(e, t));
      if (u && u[3] !== c) {
        (c = c || u[3]), (n = n || []), (u = +l || 1);
        do {
          (u /= o = o || ".5"), f.style(e, t, u + c);
        } while (o !== (o = a() / l) && 1 !== o && --s);
      }
      return (
        n &&
          ((u = +u || +l || 0),
          (r = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
          i && ((i.unit = c), (i.start = u), (i.end = r))),
        r
      );
    }
    var V = /^(?:checkbox|radio)$/i,
      J = /<([\w:-]+)/,
      Q = /^$|\/(?:java|ecma)script/i,
      Y = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
    function G(e, t) {
      var n =
        void 0 !== e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : void 0 !== e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : [];
      return void 0 === t || (t && f.nodeName(e, t)) ? f.merge([e], n) : n;
    }
    function K(e, t) {
      for (var n = 0, i = e.length; i > n; n++)
        q.set(e[n], "globalEval", !t || q.get(t[n], "globalEval"));
    }
    (Y.optgroup = Y.option),
      (Y.tbody = Y.tfoot = Y.colgroup = Y.caption = Y.thead),
      (Y.th = Y.td);
    var Z = /<|&#?\w+;/;
    function ee(e, t, n, i, r) {
      for (
        var o,
          s,
          a,
          l,
          c,
          u,
          p = t.createDocumentFragment(),
          d = [],
          h = 0,
          v = e.length;
        v > h;
        h++
      )
        if ((o = e[h]) || 0 === o)
          if ("object" === f.type(o)) f.merge(d, o.nodeType ? [o] : o);
          else if (Z.test(o)) {
            for (
              s = s || p.appendChild(t.createElement("div")),
                a = (J.exec(o) || ["", ""])[1].toLowerCase(),
                l = Y[a] || Y._default,
                s.innerHTML = l[1] + f.htmlPrefilter(o) + l[2],
                u = l[0];
              u--;

            )
              s = s.lastChild;
            f.merge(d, s.childNodes), ((s = p.firstChild).textContent = "");
          } else d.push(t.createTextNode(o));
      for (p.textContent = "", h = 0; (o = d[h++]); )
        if (i && f.inArray(o, i) > -1) r && r.push(o);
        else if (
          ((c = f.contains(o.ownerDocument, o)),
          (s = G(p.appendChild(o), "script")),
          c && K(s),
          n)
        )
          for (u = 0; (o = s[u++]); ) Q.test(o.type || "") && n.push(o);
      return p;
    }
    !(function () {
      var e = i.createDocumentFragment().appendChild(i.createElement("div")),
        t = i.createElement("input");
      t.setAttribute("type", "radio"),
        t.setAttribute("checked", "checked"),
        t.setAttribute("name", "t"),
        e.appendChild(t),
        (p.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (e.innerHTML = "<textarea>x</textarea>"),
        (p.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue);
    })();
    var te = /^key/,
      ne = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      ie = /^([^.]*)(?:\.(.+)|)/;
    function re() {
      return !0;
    }
    function oe() {
      return !1;
    }
    function se() {
      try {
        return i.activeElement;
      } catch (e) {}
    }
    function ae(e, t, n, i, r, o) {
      var s, a;
      if ("object" == typeof t) {
        for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), t))
          ae(e, a, n, i, t[a], o);
        return e;
      }
      if (
        (null == i && null == r
          ? ((r = n), (i = n = void 0))
          : null == r &&
            ("string" == typeof n
              ? ((r = i), (i = void 0))
              : ((r = i), (i = n), (n = void 0))),
        !1 === r)
      )
        r = oe;
      else if (!r) return this;
      return (
        1 === o &&
          ((s = r),
          ((r = function (e) {
            return f().off(e), s.apply(this, arguments);
          }).guid = s.guid || (s.guid = f.guid++))),
        e.each(function () {
          f.event.add(this, t, r, i, n);
        })
      );
    }
    (f.event = {
      global: {},
      add: function (e, t, n, i, r) {
        var o,
          s,
          a,
          l,
          c,
          u,
          p,
          d,
          h,
          v,
          m,
          g = q.get(e);
        if (g)
          for (
            n.handler && ((n = (o = n).handler), (r = o.selector)),
              n.guid || (n.guid = f.guid++),
              (l = g.events) || (l = g.events = {}),
              (s = g.handle) ||
                (s = g.handle = function (t) {
                  return void 0 !== f && f.event.triggered !== t.type
                    ? f.event.dispatch.apply(e, arguments)
                    : void 0;
                }),
              c = (t = (t || "").match(j) || [""]).length;
            c--;

          )
            (h = m = (a = ie.exec(t[c]) || [])[1]),
              (v = (a[2] || "").split(".").sort()),
              h &&
                ((p = f.event.special[h] || {}),
                (h = (r ? p.delegateType : p.bindType) || h),
                (p = f.event.special[h] || {}),
                (u = f.extend(
                  {
                    type: h,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && f.expr.match.needsContext.test(r),
                    namespace: v.join("."),
                  },
                  o
                )),
                (d = l[h]) ||
                  (((d = l[h] = []).delegateCount = 0),
                  (p.setup && !1 !== p.setup.call(e, i, v, s)) ||
                    (e.addEventListener && e.addEventListener(h, s))),
                p.add &&
                  (p.add.call(e, u),
                  u.handler.guid || (u.handler.guid = n.guid)),
                r ? d.splice(d.delegateCount++, 0, u) : d.push(u),
                (f.event.global[h] = !0));
      },
      remove: function (e, t, n, i, r) {
        var o,
          s,
          a,
          l,
          c,
          u,
          p,
          d,
          h,
          v,
          m,
          g = q.hasData(e) && q.get(e);
        if (g && (l = g.events)) {
          for (c = (t = (t || "").match(j) || [""]).length; c--; )
            if (
              ((h = m = (a = ie.exec(t[c]) || [])[1]),
              (v = (a[2] || "").split(".").sort()),
              h)
            ) {
              for (
                p = f.event.special[h] || {},
                  d = l[(h = (i ? p.delegateType : p.bindType) || h)] || [],
                  a =
                    a[2] &&
                    new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                  s = o = d.length;
                o--;

              )
                (u = d[o]),
                  (!r && m !== u.origType) ||
                    (n && n.guid !== u.guid) ||
                    (a && !a.test(u.namespace)) ||
                    (i && i !== u.selector && ("**" !== i || !u.selector)) ||
                    (d.splice(o, 1),
                    u.selector && d.delegateCount--,
                    p.remove && p.remove.call(e, u));
              s &&
                !d.length &&
                ((p.teardown && !1 !== p.teardown.call(e, v, g.handle)) ||
                  f.removeEvent(e, h, g.handle),
                delete l[h]);
            } else for (h in l) f.event.remove(e, h + t[c], n, i, !0);
          f.isEmptyObject(l) && q.remove(e, "handle events");
        }
      },
      dispatch: function (e) {
        e = f.event.fix(e);
        var t,
          n,
          i,
          o,
          s,
          a = [],
          l = r.call(arguments),
          c = (q.get(this, "events") || {})[e.type] || [],
          u = f.event.special[e.type] || {};
        if (
          ((l[0] = e),
          (e.delegateTarget = this),
          !u.preDispatch || !1 !== u.preDispatch.call(this, e))
        ) {
          for (
            a = f.event.handlers.call(this, e, c), t = 0;
            (o = a[t++]) && !e.isPropagationStopped();

          )
            for (
              e.currentTarget = o.elem, n = 0;
              (s = o.handlers[n++]) && !e.isImmediatePropagationStopped();

            )
              (!e.rnamespace || e.rnamespace.test(s.namespace)) &&
                ((e.handleObj = s),
                (e.data = s.data),
                void 0 !==
                  (i = (
                    (f.event.special[s.origType] || {}).handle || s.handler
                  ).apply(o.elem, l)) &&
                  !1 === (e.result = i) &&
                  (e.preventDefault(), e.stopPropagation()));
          return u.postDispatch && u.postDispatch.call(this, e), e.result;
        }
      },
      handlers: function (e, t) {
        var n,
          i,
          r,
          o,
          s = [],
          a = t.delegateCount,
          l = e.target;
        if (
          a &&
          l.nodeType &&
          ("click" !== e.type || isNaN(e.button) || e.button < 1)
        )
          for (; l !== this; l = l.parentNode || this)
            if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
              for (i = [], n = 0; a > n; n++)
                void 0 === i[(r = (o = t[n]).selector + " ")] &&
                  (i[r] = o.needsContext
                    ? f(r, this).index(l) > -1
                    : f.find(r, this, null, [l]).length),
                  i[r] && i.push(o);
              i.length && s.push({ elem: l, handlers: i });
            }
        return a < t.length && s.push({ elem: this, handlers: t.slice(a) }), s;
      },
      props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function (e, t) {
          return (
            null == e.which &&
              (e.which = null != t.charCode ? t.charCode : t.keyCode),
            e
          );
        },
      },
      mouseHooks: {
        props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
        filter: function (e, t) {
          var n,
            r,
            o,
            s = t.button;
          return (
            null == e.pageX &&
              null != t.clientX &&
              ((r = (n = e.target.ownerDocument || i).documentElement),
              (o = n.body),
              (e.pageX =
                t.clientX +
                ((r && r.scrollLeft) || (o && o.scrollLeft) || 0) -
                ((r && r.clientLeft) || (o && o.clientLeft) || 0)),
              (e.pageY =
                t.clientY +
                ((r && r.scrollTop) || (o && o.scrollTop) || 0) -
                ((r && r.clientTop) || (o && o.clientTop) || 0))),
            e.which ||
              void 0 === s ||
              (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0),
            e
          );
        },
      },
      fix: function (e) {
        if (e[f.expando]) return e;
        var t,
          n,
          r,
          o = e.type,
          s = e,
          a = this.fixHooks[o];
        for (
          a ||
            (this.fixHooks[o] = a = ne.test(o)
              ? this.mouseHooks
              : te.test(o)
              ? this.keyHooks
              : {}),
            r = a.props ? this.props.concat(a.props) : this.props,
            e = new f.Event(s),
            t = r.length;
          t--;

        )
          e[(n = r[t])] = s[n];
        return (
          e.target || (e.target = i),
          3 === e.target.nodeType && (e.target = e.target.parentNode),
          a.filter ? a.filter(e, s) : e
        );
      },
      special: {
        load: { noBubble: !0 },
        focus: {
          trigger: function () {
            return this !== se() && this.focus ? (this.focus(), !1) : void 0;
          },
          delegateType: "focusin",
        },
        blur: {
          trigger: function () {
            return this === se() && this.blur ? (this.blur(), !1) : void 0;
          },
          delegateType: "focusout",
        },
        click: {
          trigger: function () {
            return "checkbox" === this.type &&
              this.click &&
              f.nodeName(this, "input")
              ? (this.click(), !1)
              : void 0;
          },
          _default: function (e) {
            return f.nodeName(e.target, "a");
          },
        },
        beforeunload: {
          postDispatch: function (e) {
            void 0 !== e.result &&
              e.originalEvent &&
              (e.originalEvent.returnValue = e.result);
          },
        },
      },
    }),
      (f.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
      }),
      (f.Event = function (e, t) {
        return this instanceof f.Event
          ? (e && e.type
              ? ((this.originalEvent = e),
                (this.type = e.type),
                (this.isDefaultPrevented =
                  e.defaultPrevented ||
                  (void 0 === e.defaultPrevented && !1 === e.returnValue)
                    ? re
                    : oe))
              : (this.type = e),
            t && f.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || f.now()),
            void (this[f.expando] = !0))
          : new f.Event(e, t);
      }),
      (f.Event.prototype = {
        constructor: f.Event,
        isDefaultPrevented: oe,
        isPropagationStopped: oe,
        isImmediatePropagationStopped: oe,
        preventDefault: function () {
          var e = this.originalEvent;
          (this.isDefaultPrevented = re), e && e.preventDefault();
        },
        stopPropagation: function () {
          var e = this.originalEvent;
          (this.isPropagationStopped = re), e && e.stopPropagation();
        },
        stopImmediatePropagation: function () {
          var e = this.originalEvent;
          (this.isImmediatePropagationStopped = re),
            e && e.stopImmediatePropagation(),
            this.stopPropagation();
        },
      }),
      f.each(
        {
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout",
        },
        function (e, t) {
          f.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
              var n,
                i = e.relatedTarget,
                r = e.handleObj;
              return (
                (!i || (i !== this && !f.contains(this, i))) &&
                  ((e.type = r.origType),
                  (n = r.handler.apply(this, arguments)),
                  (e.type = t)),
                n
              );
            },
          };
        }
      ),
      f.fn.extend({
        on: function (e, t, n, i) {
          return ae(this, e, t, n, i);
        },
        one: function (e, t, n, i) {
          return ae(this, e, t, n, i, 1);
        },
        off: function (e, t, n) {
          var i, r;
          if (e && e.preventDefault && e.handleObj)
            return (
              (i = e.handleObj),
              f(e.delegateTarget).off(
                i.namespace ? i.origType + "." + i.namespace : i.origType,
                i.selector,
                i.handler
              ),
              this
            );
          if ("object" == typeof e) {
            for (r in e) this.off(r, t, e[r]);
            return this;
          }
          return (
            (!1 === t || "function" == typeof t) && ((n = t), (t = void 0)),
            !1 === n && (n = oe),
            this.each(function () {
              f.event.remove(this, e, n, t);
            })
          );
        },
      });
    var le = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      ce = /<script|<style|<link/i,
      ue = /checked\s*(?:[^=]|=\s*.checked.)/i,
      pe = /^true\/(.*)/,
      de = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function fe(e, t) {
      return (
        (f.nodeName(e, "table") &&
          f.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") &&
          e.getElementsByTagName("tbody")[0]) ||
        e
      );
    }
    function he(e) {
      return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function ve(e) {
      var t = pe.exec(e.type);
      return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
    }
    function me(e, t) {
      var n, i, r, o, s, a, l, c;
      if (1 === t.nodeType) {
        if (
          q.hasData(e) &&
          ((o = q.access(e)), (s = q.set(t, o)), (c = o.events))
        )
          for (r in (delete s.handle, (s.events = {}), c))
            for (n = 0, i = c[r].length; i > n; n++) f.event.add(t, r, c[r][n]);
        P.hasData(e) && ((a = P.access(e)), (l = f.extend({}, a)), P.set(t, l));
      }
    }
    function ge(e, t) {
      var n = t.nodeName.toLowerCase();
      "input" === n && V.test(e.type)
        ? (t.checked = e.checked)
        : ("input" === n || "textarea" === n) &&
          (t.defaultValue = e.defaultValue);
    }
    function ye(e, t, n, i) {
      t = o.apply([], t);
      var r,
        s,
        a,
        l,
        c,
        u,
        d = 0,
        h = e.length,
        v = h - 1,
        m = t[0],
        g = f.isFunction(m);
      if (g || (h > 1 && "string" == typeof m && !p.checkClone && ue.test(m)))
        return e.each(function (r) {
          var o = e.eq(r);
          g && (t[0] = m.call(this, r, o.html())), ye(o, t, n, i);
        });
      if (
        h &&
        ((s = (r = ee(t, e[0].ownerDocument, !1, e, i)).firstChild),
        1 === r.childNodes.length && (r = s),
        s || i)
      ) {
        for (l = (a = f.map(G(r, "script"), he)).length; h > d; d++)
          (c = r),
            d !== v &&
              ((c = f.clone(c, !0, !0)), l && f.merge(a, G(c, "script"))),
            n.call(e[d], c, d);
        if (l)
          for (
            u = a[a.length - 1].ownerDocument, f.map(a, ve), d = 0;
            l > d;
            d++
          )
            (c = a[d]),
              Q.test(c.type || "") &&
                !q.access(c, "globalEval") &&
                f.contains(u, c) &&
                (c.src
                  ? f._evalUrl && f._evalUrl(c.src)
                  : f.globalEval(c.textContent.replace(de, "")));
      }
      return e;
    }
    function be(e, t, n) {
      for (var i, r = t ? f.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
        n || 1 !== i.nodeType || f.cleanData(G(i)),
          i.parentNode &&
            (n && f.contains(i.ownerDocument, i) && K(G(i, "script")),
            i.parentNode.removeChild(i));
      return e;
    }
    f.extend({
      htmlPrefilter: function (e) {
        return e.replace(le, "<$1></$2>");
      },
      clone: function (e, t, n) {
        var i,
          r,
          o,
          s,
          a = e.cloneNode(!0),
          l = f.contains(e.ownerDocument, e);
        if (
          !(
            p.noCloneChecked ||
            (1 !== e.nodeType && 11 !== e.nodeType) ||
            f.isXMLDoc(e)
          )
        )
          for (s = G(a), i = 0, r = (o = G(e)).length; r > i; i++)
            ge(o[i], s[i]);
        if (t)
          if (n)
            for (o = o || G(e), s = s || G(a), i = 0, r = o.length; r > i; i++)
              me(o[i], s[i]);
          else me(e, a);
        return (s = G(a, "script")).length > 0 && K(s, !l && G(e, "script")), a;
      },
      cleanData: function (e) {
        for (
          var t, n, i, r = f.event.special, o = 0;
          void 0 !== (n = e[o]);
          o++
        )
          if (R(n)) {
            if ((t = n[q.expando])) {
              if (t.events)
                for (i in t.events)
                  r[i] ? f.event.remove(n, i) : f.removeEvent(n, i, t.handle);
              n[q.expando] = void 0;
            }
            n[P.expando] && (n[P.expando] = void 0);
          }
      },
    }),
      f.fn.extend({
        domManip: ye,
        detach: function (e) {
          return be(this, e, !0);
        },
        remove: function (e) {
          return be(this, e);
        },
        text: function (e) {
          return O(
            this,
            function (e) {
              return void 0 === e
                ? f.text(this)
                : this.empty().each(function () {
                    (1 === this.nodeType ||
                      11 === this.nodeType ||
                      9 === this.nodeType) &&
                      (this.textContent = e);
                  });
            },
            null,
            e,
            arguments.length
          );
        },
        append: function () {
          return ye(this, arguments, function (e) {
            (1 !== this.nodeType &&
              11 !== this.nodeType &&
              9 !== this.nodeType) ||
              fe(this, e).appendChild(e);
          });
        },
        prepend: function () {
          return ye(this, arguments, function (e) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var t = fe(this, e);
              t.insertBefore(e, t.firstChild);
            }
          });
        },
        before: function () {
          return ye(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this);
          });
        },
        after: function () {
          return ye(this, arguments, function (e) {
            this.parentNode &&
              this.parentNode.insertBefore(e, this.nextSibling);
          });
        },
        empty: function () {
          for (var e, t = 0; null != (e = this[t]); t++)
            1 === e.nodeType && (f.cleanData(G(e, !1)), (e.textContent = ""));
          return this;
        },
        clone: function (e, t) {
          return (
            (e = null != e && e),
            (t = null == t ? e : t),
            this.map(function () {
              return f.clone(this, e, t);
            })
          );
        },
        html: function (e) {
          return O(
            this,
            function (e) {
              var t = this[0] || {},
                n = 0,
                i = this.length;
              if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
              if (
                "string" == typeof e &&
                !ce.test(e) &&
                !Y[(J.exec(e) || ["", ""])[1].toLowerCase()]
              ) {
                e = f.htmlPrefilter(e);
                try {
                  for (; i > n; n++)
                    1 === (t = this[n] || {}).nodeType &&
                      (f.cleanData(G(t, !1)), (t.innerHTML = e));
                  t = 0;
                } catch (e) {}
              }
              t && this.empty().append(e);
            },
            null,
            e,
            arguments.length
          );
        },
        replaceWith: function () {
          var e = [];
          return ye(
            this,
            arguments,
            function (t) {
              var n = this.parentNode;
              f.inArray(this, e) < 0 &&
                (f.cleanData(G(this)), n && n.replaceChild(t, this));
            },
            e
          );
        },
      }),
      f.each(
        {
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith",
        },
        function (e, t) {
          f.fn[e] = function (e) {
            for (var n, i = [], r = f(e), o = r.length - 1, a = 0; o >= a; a++)
              (n = a === o ? this : this.clone(!0)),
                f(r[a])[t](n),
                s.apply(i, n.get());
            return this.pushStack(i);
          };
        }
      );
    var xe,
      we = { HTML: "block", BODY: "block" };
    function Te(e, t) {
      var n = f(t.createElement(e)).appendTo(t.body),
        i = f.css(n[0], "display");
      return n.detach(), i;
    }
    function Ce(e) {
      var t = i,
        n = we[e];
      return (
        n ||
          (("none" !== (n = Te(e, t)) && n) ||
            ((t = (xe = (
              xe || f("<iframe frameborder='0' width='0' height='0'/>")
            ).appendTo(t.documentElement))[0].contentDocument).write(),
            t.close(),
            (n = Te(e, t)),
            xe.detach()),
          (we[e] = n)),
        n
      );
    }
    var ke = /^margin/,
      Ee = new RegExp("^(" + W + ")(?!px)[a-z%]+$", "i"),
      Se = function (t) {
        var n = t.ownerDocument.defaultView;
        return n.opener || (n = e), n.getComputedStyle(t);
      },
      _e = function (e, t, n, i) {
        var r,
          o,
          s = {};
        for (o in t) (s[o] = e.style[o]), (e.style[o] = t[o]);
        for (o in ((r = n.apply(e, i || [])), t)) e.style[o] = s[o];
        return r;
      },
      Ae = i.documentElement;
    function $e(e, t, n) {
      var i,
        r,
        o,
        s,
        a = e.style;
      return (
        (n = n || Se(e)) &&
          ("" !== (s = n.getPropertyValue(t) || n[t]) ||
            f.contains(e.ownerDocument, e) ||
            (s = f.style(e, t)),
          !p.pixelMarginRight() &&
            Ee.test(s) &&
            ke.test(t) &&
            ((i = a.width),
            (r = a.minWidth),
            (o = a.maxWidth),
            (a.minWidth = a.maxWidth = a.width = s),
            (s = n.width),
            (a.width = i),
            (a.minWidth = r),
            (a.maxWidth = o))),
        void 0 !== s ? s + "" : s
      );
    }
    function De(e, t) {
      return {
        get: function () {
          return e()
            ? void delete this.get
            : (this.get = t).apply(this, arguments);
        },
      };
    }
    !(function () {
      var t,
        n,
        r,
        o,
        s = i.createElement("div"),
        a = i.createElement("div");
      if (a.style) {
        function l() {
          (a.style.cssText =
            "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
            (a.innerHTML = ""),
            Ae.appendChild(s);
          var i = e.getComputedStyle(a);
          (t = "1%" !== i.top),
            (o = "2px" === i.marginLeft),
            (n = "4px" === i.width),
            (a.style.marginRight = "50%"),
            (r = "4px" === i.marginRight),
            Ae.removeChild(s);
        }
        (a.style.backgroundClip = "content-box"),
          (a.cloneNode(!0).style.backgroundClip = ""),
          (p.clearCloneStyle = "content-box" === a.style.backgroundClip),
          (s.style.cssText =
            "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
          s.appendChild(a),
          f.extend(p, {
            pixelPosition: function () {
              return l(), t;
            },
            boxSizingReliable: function () {
              return null == n && l(), n;
            },
            pixelMarginRight: function () {
              return null == n && l(), r;
            },
            reliableMarginLeft: function () {
              return null == n && l(), o;
            },
            reliableMarginRight: function () {
              var t,
                n = a.appendChild(i.createElement("div"));
              return (
                (n.style.cssText = a.style.cssText =
                  "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
                (n.style.marginRight = n.style.width = "0"),
                (a.style.width = "1px"),
                Ae.appendChild(s),
                (t = !parseFloat(e.getComputedStyle(n).marginRight)),
                Ae.removeChild(s),
                a.removeChild(n),
                t
              );
            },
          });
      }
    })();
    var Ne = /^(none|table(?!-c[ea]).+)/,
      je = { position: "absolute", visibility: "hidden", display: "block" },
      Ie = { letterSpacing: "0", fontWeight: "400" },
      Oe = ["Webkit", "O", "Moz", "ms"],
      Re = i.createElement("div").style;
    function Le(e) {
      if (e in Re) return e;
      for (var t = e[0].toUpperCase() + e.slice(1), n = Oe.length; n--; )
        if ((e = Oe[n] + t) in Re) return e;
    }
    function qe(e, t, n) {
      var i = z.exec(t);
      return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
    }
    function Pe(e, t, n, i, r) {
      for (
        var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
          s = 0;
        4 > o;
        o += 2
      )
        "margin" === n && (s += f.css(e, n + B[o], !0, r)),
          i
            ? ("content" === n && (s -= f.css(e, "padding" + B[o], !0, r)),
              "margin" !== n &&
                (s -= f.css(e, "border" + B[o] + "Width", !0, r)))
            : ((s += f.css(e, "padding" + B[o], !0, r)),
              "padding" !== n &&
                (s += f.css(e, "border" + B[o] + "Width", !0, r)));
      return s;
    }
    function Fe(t, n, r) {
      var o = !0,
        s = "width" === n ? t.offsetWidth : t.offsetHeight,
        a = Se(t),
        l = "border-box" === f.css(t, "boxSizing", !1, a);
      if (
        (i.msFullscreenElement &&
          e.top !== e &&
          t.getClientRects().length &&
          (s = Math.round(100 * t.getBoundingClientRect()[n])),
        0 >= s || null == s)
      ) {
        if (
          ((0 > (s = $e(t, n, a)) || null == s) && (s = t.style[n]), Ee.test(s))
        )
          return s;
        (o = l && (p.boxSizingReliable() || s === t.style[n])),
          (s = parseFloat(s) || 0);
      }
      return s + Pe(t, n, r || (l ? "border" : "content"), o, a) + "px";
    }
    function Me(e, t) {
      for (var n, i, r, o = [], s = 0, a = e.length; a > s; s++)
        (i = e[s]).style &&
          ((o[s] = q.get(i, "olddisplay")),
          (n = i.style.display),
          t
            ? (o[s] || "none" !== n || (i.style.display = ""),
              "" === i.style.display &&
                U(i) &&
                (o[s] = q.access(i, "olddisplay", Ce(i.nodeName))))
            : ((r = U(i)),
              ("none" === n && r) ||
                q.set(i, "olddisplay", r ? n : f.css(i, "display"))));
      for (s = 0; a > s; s++)
        (i = e[s]).style &&
          ((t && "none" !== i.style.display && "" !== i.style.display) ||
            (i.style.display = t ? o[s] || "" : "none"));
      return e;
    }
    function He(e, t, n, i, r) {
      return new He.prototype.init(e, t, n, i, r);
    }
    f.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              var n = $e(e, "opacity");
              return "" === n ? "1" : n;
            }
          },
        },
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: { float: "cssFloat" },
      style: function (e, t, n, i) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var r,
            o,
            s,
            a = f.camelCase(t),
            l = e.style;
          return (
            (t = f.cssProps[a] || (f.cssProps[a] = Le(a) || a)),
            (s = f.cssHooks[t] || f.cssHooks[a]),
            void 0 === n
              ? s && "get" in s && void 0 !== (r = s.get(e, !1, i))
                ? r
                : l[t]
              : ("string" === (o = typeof n) &&
                  (r = z.exec(n)) &&
                  r[1] &&
                  ((n = X(e, t, r)), (o = "number")),
                void (
                  null != n &&
                  n == n &&
                  ("number" === o &&
                    (n += (r && r[3]) || (f.cssNumber[a] ? "" : "px")),
                  p.clearCloneStyle ||
                    "" !== n ||
                    0 !== t.indexOf("background") ||
                    (l[t] = "inherit"),
                  (s && "set" in s && void 0 === (n = s.set(e, n, i))) ||
                    (l[t] = n))
                ))
          );
        }
      },
      css: function (e, t, n, i) {
        var r,
          o,
          s,
          a = f.camelCase(t);
        return (
          (t = f.cssProps[a] || (f.cssProps[a] = Le(a) || a)),
          (s = f.cssHooks[t] || f.cssHooks[a]) &&
            "get" in s &&
            (r = s.get(e, !0, n)),
          void 0 === r && (r = $e(e, t, i)),
          "normal" === r && t in Ie && (r = Ie[t]),
          "" === n || n
            ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r)
            : r
        );
      },
    }),
      f.each(["height", "width"], function (e, t) {
        f.cssHooks[t] = {
          get: function (e, n, i) {
            return n
              ? Ne.test(f.css(e, "display")) && 0 === e.offsetWidth
                ? _e(e, je, function () {
                    return Fe(e, t, i);
                  })
                : Fe(e, t, i)
              : void 0;
          },
          set: function (e, n, i) {
            var r,
              o = i && Se(e),
              s =
                i &&
                Pe(e, t, i, "border-box" === f.css(e, "boxSizing", !1, o), o);
            return (
              s &&
                (r = z.exec(n)) &&
                "px" !== (r[3] || "px") &&
                ((e.style[t] = n), (n = f.css(e, t))),
              qe(0, n, s)
            );
          },
        };
      }),
      (f.cssHooks.marginLeft = De(p.reliableMarginLeft, function (e, t) {
        return t
          ? (parseFloat($e(e, "marginLeft")) ||
              e.getBoundingClientRect().left -
                _e(e, { marginLeft: 0 }, function () {
                  return e.getBoundingClientRect().left;
                })) + "px"
          : void 0;
      })),
      (f.cssHooks.marginRight = De(p.reliableMarginRight, function (e, t) {
        return t
          ? _e(e, { display: "inline-block" }, $e, [e, "marginRight"])
          : void 0;
      })),
      f.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
        (f.cssHooks[e + t] = {
          expand: function (n) {
            for (
              var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n];
              4 > i;
              i++
            )
              r[e + B[i] + t] = o[i] || o[i - 2] || o[0];
            return r;
          },
        }),
          ke.test(e) || (f.cssHooks[e + t].set = qe);
      }),
      f.fn.extend({
        css: function (e, t) {
          return O(
            this,
            function (e, t, n) {
              var i,
                r,
                o = {},
                s = 0;
              if (f.isArray(t)) {
                for (i = Se(e), r = t.length; r > s; s++)
                  o[t[s]] = f.css(e, t[s], !1, i);
                return o;
              }
              return void 0 !== n ? f.style(e, t, n) : f.css(e, t);
            },
            e,
            t,
            arguments.length > 1
          );
        },
        show: function () {
          return Me(this, !0);
        },
        hide: function () {
          return Me(this);
        },
        toggle: function (e) {
          return "boolean" == typeof e
            ? e
              ? this.show()
              : this.hide()
            : this.each(function () {
                U(this) ? f(this).show() : f(this).hide();
              });
        },
      }),
      (f.Tween = He),
      (He.prototype = {
        constructor: He,
        init: function (e, t, n, i, r, o) {
          (this.elem = e),
            (this.prop = n),
            (this.easing = r || f.easing._default),
            (this.options = t),
            (this.start = this.now = this.cur()),
            (this.end = i),
            (this.unit = o || (f.cssNumber[n] ? "" : "px"));
        },
        cur: function () {
          var e = He.propHooks[this.prop];
          return e && e.get ? e.get(this) : He.propHooks._default.get(this);
        },
        run: function (e) {
          var t,
            n = He.propHooks[this.prop];
          return (
            this.options.duration
              ? (this.pos = t = f.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
              : (this.pos = t = e),
            (this.now = (this.end - this.start) * t + this.start),
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : He.propHooks._default.set(this),
            this
          );
        },
      }),
      (He.prototype.init.prototype = He.prototype),
      (He.propHooks = {
        _default: {
          get: function (e) {
            var t;
            return 1 !== e.elem.nodeType ||
              (null != e.elem[e.prop] && null == e.elem.style[e.prop])
              ? e.elem[e.prop]
              : (t = f.css(e.elem, e.prop, "")) && "auto" !== t
              ? t
              : 0;
          },
          set: function (e) {
            f.fx.step[e.prop]
              ? f.fx.step[e.prop](e)
              : 1 !== e.elem.nodeType ||
                (null == e.elem.style[f.cssProps[e.prop]] &&
                  !f.cssHooks[e.prop])
              ? (e.elem[e.prop] = e.now)
              : f.style(e.elem, e.prop, e.now + e.unit);
          },
        },
      }),
      (He.propHooks.scrollTop = He.propHooks.scrollLeft = {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
      (f.easing = {
        linear: function (e) {
          return e;
        },
        swing: function (e) {
          return 0.5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing",
      }),
      (f.fx = He.prototype.init),
      (f.fx.step = {});
    var We,
      ze,
      Be = /^(?:toggle|show|hide)$/,
      Ue = /queueHooks$/;
    function Xe() {
      return (
        e.setTimeout(function () {
          We = void 0;
        }),
        (We = f.now())
      );
    }
    function Ve(e, t) {
      var n,
        i = 0,
        r = { height: e };
      for (t = t ? 1 : 0; 4 > i; i += 2 - t)
        r["margin" + (n = B[i])] = r["padding" + n] = e;
      return t && (r.opacity = r.width = e), r;
    }
    function Je(e, t, n) {
      for (
        var i,
          r = (Qe.tweeners[t] || []).concat(Qe.tweeners["*"]),
          o = 0,
          s = r.length;
        s > o;
        o++
      )
        if ((i = r[o].call(n, t, e))) return i;
    }
    function Qe(e, t, n) {
      var i,
        r,
        o = 0,
        s = Qe.prefilters.length,
        a = f.Deferred().always(function () {
          delete l.elem;
        }),
        l = function () {
          if (r) return !1;
          for (
            var t = We || Xe(),
              n = Math.max(0, c.startTime + c.duration - t),
              i = 1 - (n / c.duration || 0),
              o = 0,
              s = c.tweens.length;
            s > o;
            o++
          )
            c.tweens[o].run(i);
          return (
            a.notifyWith(e, [c, i, n]),
            1 > i && s ? n : (a.resolveWith(e, [c]), !1)
          );
        },
        c = a.promise({
          elem: e,
          props: f.extend({}, t),
          opts: f.extend(
            !0,
            { specialEasing: {}, easing: f.easing._default },
            n
          ),
          originalProperties: t,
          originalOptions: n,
          startTime: We || Xe(),
          duration: n.duration,
          tweens: [],
          createTween: function (t, n) {
            var i = f.Tween(
              e,
              c.opts,
              t,
              n,
              c.opts.specialEasing[t] || c.opts.easing
            );
            return c.tweens.push(i), i;
          },
          stop: function (t) {
            var n = 0,
              i = t ? c.tweens.length : 0;
            if (r) return this;
            for (r = !0; i > n; n++) c.tweens[n].run(1);
            return (
              t
                ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t]))
                : a.rejectWith(e, [c, t]),
              this
            );
          },
        }),
        u = c.props;
      for (
        (function (e, t) {
          var n, i, r, o, s;
          for (n in e)
            if (
              ((r = t[(i = f.camelCase(n))]),
              (o = e[n]),
              f.isArray(o) && ((r = o[1]), (o = e[n] = o[0])),
              n !== i && ((e[i] = o), delete e[n]),
              (s = f.cssHooks[i]) && ("expand" in s))
            )
              for (n in ((o = s.expand(o)), delete e[i], o))
                (n in e) || ((e[n] = o[n]), (t[n] = r));
            else t[i] = r;
        })(u, c.opts.specialEasing);
        s > o;
        o++
      )
        if ((i = Qe.prefilters[o].call(c, e, u, c.opts)))
          return (
            f.isFunction(i.stop) &&
              (f._queueHooks(c.elem, c.opts.queue).stop = f.proxy(i.stop, i)),
            i
          );
      return (
        f.map(u, Je, c),
        f.isFunction(c.opts.start) && c.opts.start.call(e, c),
        f.fx.timer(f.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
        c
          .progress(c.opts.progress)
          .done(c.opts.done, c.opts.complete)
          .fail(c.opts.fail)
          .always(c.opts.always)
      );
    }
    (f.Animation = f.extend(Qe, {
      tweeners: {
        "*": [
          function (e, t) {
            var n = this.createTween(e, t);
            return X(n.elem, e, z.exec(t), n), n;
          },
        ],
      },
      tweener: function (e, t) {
        f.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.match(j));
        for (var n, i = 0, r = e.length; r > i; i++)
          (n = e[i]),
            (Qe.tweeners[n] = Qe.tweeners[n] || []),
            Qe.tweeners[n].unshift(t);
      },
      prefilters: [
        function (e, t, n) {
          var i,
            r,
            o,
            s,
            a,
            l,
            c,
            u = this,
            p = {},
            d = e.style,
            h = e.nodeType && U(e),
            v = q.get(e, "fxshow");
          for (i in (n.queue ||
            (null == (a = f._queueHooks(e, "fx")).unqueued &&
              ((a.unqueued = 0),
              (l = a.empty.fire),
              (a.empty.fire = function () {
                a.unqueued || l();
              })),
            a.unqueued++,
            u.always(function () {
              u.always(function () {
                a.unqueued--, f.queue(e, "fx").length || a.empty.fire();
              });
            })),
          1 === e.nodeType &&
            ("height" in t || "width" in t) &&
            ((n.overflow = [d.overflow, d.overflowX, d.overflowY]),
            "inline" ===
              ("none" === (c = f.css(e, "display"))
                ? q.get(e, "olddisplay") || Ce(e.nodeName)
                : c) &&
              "none" === f.css(e, "float") &&
              (d.display = "inline-block")),
          n.overflow &&
            ((d.overflow = "hidden"),
            u.always(function () {
              (d.overflow = n.overflow[0]),
                (d.overflowX = n.overflow[1]),
                (d.overflowY = n.overflow[2]);
            })),
          t))
            if (((r = t[i]), Be.exec(r))) {
              if (
                (delete t[i],
                (o = o || "toggle" === r),
                r === (h ? "hide" : "show"))
              ) {
                if ("show" !== r || !v || void 0 === v[i]) continue;
                h = !0;
              }
              p[i] = (v && v[i]) || f.style(e, i);
            } else c = void 0;
          if (f.isEmptyObject(p))
            "inline" === ("none" === c ? Ce(e.nodeName) : c) && (d.display = c);
          else
            for (i in (v
              ? "hidden" in v && (h = v.hidden)
              : (v = q.access(e, "fxshow", {})),
            o && (v.hidden = !h),
            h
              ? f(e).show()
              : u.done(function () {
                  f(e).hide();
                }),
            u.done(function () {
              var t;
              for (t in (q.remove(e, "fxshow"), p)) f.style(e, t, p[t]);
            }),
            p))
              (s = Je(h ? v[i] : 0, i, u)),
                i in v ||
                  ((v[i] = s.start),
                  h &&
                    ((s.end = s.start),
                    (s.start = "width" === i || "height" === i ? 1 : 0)));
        },
      ],
      prefilter: function (e, t) {
        t ? Qe.prefilters.unshift(e) : Qe.prefilters.push(e);
      },
    })),
      (f.speed = function (e, t, n) {
        var i =
          e && "object" == typeof e
            ? f.extend({}, e)
            : {
                complete: n || (!n && t) || (f.isFunction(e) && e),
                duration: e,
                easing: (n && t) || (t && !f.isFunction(t) && t),
              };
        return (
          (i.duration = f.fx.off
            ? 0
            : "number" == typeof i.duration
            ? i.duration
            : i.duration in f.fx.speeds
            ? f.fx.speeds[i.duration]
            : f.fx.speeds._default),
          (null == i.queue || !0 === i.queue) && (i.queue = "fx"),
          (i.old = i.complete),
          (i.complete = function () {
            f.isFunction(i.old) && i.old.call(this),
              i.queue && f.dequeue(this, i.queue);
          }),
          i
        );
      }),
      f.fn.extend({
        fadeTo: function (e, t, n, i) {
          return this.filter(U)
            .css("opacity", 0)
            .show()
            .end()
            .animate({ opacity: t }, e, n, i);
        },
        animate: function (e, t, n, i) {
          var r = f.isEmptyObject(e),
            o = f.speed(t, n, i),
            s = function () {
              var t = Qe(this, f.extend({}, e), o);
              (r || q.get(this, "finish")) && t.stop(!0);
            };
          return (
            (s.finish = s),
            r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
          );
        },
        stop: function (e, t, n) {
          var i = function (e) {
            var t = e.stop;
            delete e.stop, t(n);
          };
          return (
            "string" != typeof e && ((n = t), (t = e), (e = void 0)),
            t && !1 !== e && this.queue(e || "fx", []),
            this.each(function () {
              var t = !0,
                r = null != e && e + "queueHooks",
                o = f.timers,
                s = q.get(this);
              if (r) s[r] && s[r].stop && i(s[r]);
              else for (r in s) s[r] && s[r].stop && Ue.test(r) && i(s[r]);
              for (r = o.length; r--; )
                o[r].elem !== this ||
                  (null != e && o[r].queue !== e) ||
                  (o[r].anim.stop(n), (t = !1), o.splice(r, 1));
              (t || !n) && f.dequeue(this, e);
            })
          );
        },
        finish: function (e) {
          return (
            !1 !== e && (e = e || "fx"),
            this.each(function () {
              var t,
                n = q.get(this),
                i = n[e + "queue"],
                r = n[e + "queueHooks"],
                o = f.timers,
                s = i ? i.length : 0;
              for (
                n.finish = !0,
                  f.queue(this, e, []),
                  r && r.stop && r.stop.call(this, !0),
                  t = o.length;
                t--;

              )
                o[t].elem === this &&
                  o[t].queue === e &&
                  (o[t].anim.stop(!0), o.splice(t, 1));
              for (t = 0; s > t; t++)
                i[t] && i[t].finish && i[t].finish.call(this);
              delete n.finish;
            })
          );
        },
      }),
      f.each(["toggle", "show", "hide"], function (e, t) {
        var n = f.fn[t];
        f.fn[t] = function (e, i, r) {
          return null == e || "boolean" == typeof e
            ? n.apply(this, arguments)
            : this.animate(Ve(t, !0), e, i, r);
        };
      }),
      f.each(
        {
          slideDown: Ve("show"),
          slideUp: Ve("hide"),
          slideToggle: Ve("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" },
        },
        function (e, t) {
          f.fn[e] = function (e, n, i) {
            return this.animate(t, e, n, i);
          };
        }
      ),
      (f.timers = []),
      (f.fx.tick = function () {
        var e,
          t = 0,
          n = f.timers;
        for (We = f.now(); t < n.length; t++)
          (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || f.fx.stop(), (We = void 0);
      }),
      (f.fx.timer = function (e) {
        f.timers.push(e), e() ? f.fx.start() : f.timers.pop();
      }),
      (f.fx.interval = 13),
      (f.fx.start = function () {
        ze || (ze = e.setInterval(f.fx.tick, f.fx.interval));
      }),
      (f.fx.stop = function () {
        e.clearInterval(ze), (ze = null);
      }),
      (f.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (f.fn.delay = function (t, n) {
        return (
          (t = (f.fx && f.fx.speeds[t]) || t),
          (n = n || "fx"),
          this.queue(n, function (n, i) {
            var r = e.setTimeout(n, t);
            i.stop = function () {
              e.clearTimeout(r);
            };
          })
        );
      }),
      (function () {
        var e = i.createElement("input"),
          t = i.createElement("select"),
          n = t.appendChild(i.createElement("option"));
        (e.type = "checkbox"),
          (p.checkOn = "" !== e.value),
          (p.optSelected = n.selected),
          (t.disabled = !0),
          (p.optDisabled = !n.disabled),
          ((e = i.createElement("input")).value = "t"),
          (e.type = "radio"),
          (p.radioValue = "t" === e.value);
      })();
    var Ye,
      Ge = f.expr.attrHandle;
    f.fn.extend({
      attr: function (e, t) {
        return O(this, f.attr, e, t, arguments.length > 1);
      },
      removeAttr: function (e) {
        return this.each(function () {
          f.removeAttr(this, e);
        });
      },
    }),
      f.extend({
        attr: function (e, t, n) {
          var i,
            r,
            o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o)
            return void 0 === e.getAttribute
              ? f.prop(e, t, n)
              : ((1 === o && f.isXMLDoc(e)) ||
                  ((t = t.toLowerCase()),
                  (r =
                    f.attrHooks[t] ||
                    (f.expr.match.bool.test(t) ? Ye : void 0))),
                void 0 !== n
                  ? null === n
                    ? void f.removeAttr(e, t)
                    : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                    ? i
                    : (e.setAttribute(t, n + ""), n)
                  : r && "get" in r && null !== (i = r.get(e, t))
                  ? i
                  : null == (i = f.find.attr(e, t))
                  ? void 0
                  : i);
        },
        attrHooks: {
          type: {
            set: function (e, t) {
              if (!p.radioValue && "radio" === t && f.nodeName(e, "input")) {
                var n = e.value;
                return e.setAttribute("type", t), n && (e.value = n), t;
              }
            },
          },
        },
        removeAttr: function (e, t) {
          var n,
            i,
            r = 0,
            o = t && t.match(j);
          if (o && 1 === e.nodeType)
            for (; (n = o[r++]); )
              (i = f.propFix[n] || n),
                f.expr.match.bool.test(n) && (e[i] = !1),
                e.removeAttribute(n);
        },
      }),
      (Ye = {
        set: function (e, t, n) {
          return !1 === t ? f.removeAttr(e, n) : e.setAttribute(n, n), n;
        },
      }),
      f.each(f.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = Ge[t] || f.find.attr;
        Ge[t] = function (e, t, i) {
          var r, o;
          return (
            i ||
              ((o = Ge[t]),
              (Ge[t] = r),
              (r = null != n(e, t, i) ? t.toLowerCase() : null),
              (Ge[t] = o)),
            r
          );
        };
      });
    var Ke = /^(?:input|select|textarea|button)$/i,
      Ze = /^(?:a|area)$/i;
    f.fn.extend({
      prop: function (e, t) {
        return O(this, f.prop, e, t, arguments.length > 1);
      },
      removeProp: function (e) {
        return this.each(function () {
          delete this[f.propFix[e] || e];
        });
      },
    }),
      f.extend({
        prop: function (e, t, n) {
          var i,
            r,
            o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o)
            return (
              (1 === o && f.isXMLDoc(e)) ||
                ((t = f.propFix[t] || t), (r = f.propHooks[t])),
              void 0 !== n
                ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                  ? i
                  : (e[t] = n)
                : r && "get" in r && null !== (i = r.get(e, t))
                ? i
                : e[t]
            );
        },
        propHooks: {
          tabIndex: {
            get: function (e) {
              var t = f.find.attr(e, "tabindex");
              return t
                ? parseInt(t, 10)
                : Ke.test(e.nodeName) || (Ze.test(e.nodeName) && e.href)
                ? 0
                : -1;
            },
          },
        },
        propFix: { for: "htmlFor", class: "className" },
      }),
      p.optSelected ||
        (f.propHooks.selected = {
          get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
          },
        }),
      f.each(
        [
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable",
        ],
        function () {
          f.propFix[this.toLowerCase()] = this;
        }
      );
    var et = /[\t\r\n\f]/g;
    function tt(e) {
      return (e.getAttribute && e.getAttribute("class")) || "";
    }
    f.fn.extend({
      addClass: function (e) {
        var t,
          n,
          i,
          r,
          o,
          s,
          a,
          l = 0;
        if (f.isFunction(e))
          return this.each(function (t) {
            f(this).addClass(e.call(this, t, tt(this)));
          });
        if ("string" == typeof e && e)
          for (t = e.match(j) || []; (n = this[l++]); )
            if (
              ((r = tt(n)),
              (i = 1 === n.nodeType && (" " + r + " ").replace(et, " ")))
            ) {
              for (s = 0; (o = t[s++]); )
                i.indexOf(" " + o + " ") < 0 && (i += o + " ");
              r !== (a = f.trim(i)) && n.setAttribute("class", a);
            }
        return this;
      },
      removeClass: function (e) {
        var t,
          n,
          i,
          r,
          o,
          s,
          a,
          l = 0;
        if (f.isFunction(e))
          return this.each(function (t) {
            f(this).removeClass(e.call(this, t, tt(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ("string" == typeof e && e)
          for (t = e.match(j) || []; (n = this[l++]); )
            if (
              ((r = tt(n)),
              (i = 1 === n.nodeType && (" " + r + " ").replace(et, " ")))
            ) {
              for (s = 0; (o = t[s++]); )
                for (; i.indexOf(" " + o + " ") > -1; )
                  i = i.replace(" " + o + " ", " ");
              r !== (a = f.trim(i)) && n.setAttribute("class", a);
            }
        return this;
      },
      toggleClass: function (e, t) {
        var n = typeof e;
        return "boolean" == typeof t && "string" === n
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : f.isFunction(e)
          ? this.each(function (n) {
              f(this).toggleClass(e.call(this, n, tt(this), t), t);
            })
          : this.each(function () {
              var t, i, r, o;
              if ("string" === n)
                for (i = 0, r = f(this), o = e.match(j) || []; (t = o[i++]); )
                  r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
              else
                (void 0 === e || "boolean" === n) &&
                  ((t = tt(this)) && q.set(this, "__className__", t),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      t || !1 === e ? "" : q.get(this, "__className__") || ""
                    ));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          i = 0;
        for (t = " " + e + " "; (n = this[i++]); )
          if (
            1 === n.nodeType &&
            (" " + tt(n) + " ").replace(et, " ").indexOf(t) > -1
          )
            return !0;
        return !1;
      },
    });
    var nt = /\r/g;
    f.fn.extend({
      val: function (e) {
        var t,
          n,
          i,
          r = this[0];
        return arguments.length
          ? ((i = f.isFunction(e)),
            this.each(function (n) {
              var r;
              1 === this.nodeType &&
                (null == (r = i ? e.call(this, n, f(this).val()) : e)
                  ? (r = "")
                  : "number" == typeof r
                  ? (r += "")
                  : f.isArray(r) &&
                    (r = f.map(r, function (e) {
                      return null == e ? "" : e + "";
                    })),
                ((t =
                  f.valHooks[this.type] ||
                  f.valHooks[this.nodeName.toLowerCase()]) &&
                  "set" in t &&
                  void 0 !== t.set(this, r, "value")) ||
                  (this.value = r));
            }))
          : r
          ? (t = f.valHooks[r.type] || f.valHooks[r.nodeName.toLowerCase()]) &&
            "get" in t &&
            void 0 !== (n = t.get(r, "value"))
            ? n
            : "string" == typeof (n = r.value)
            ? n.replace(nt, "")
            : null == n
            ? ""
            : n
          : void 0;
      },
    }),
      f.extend({
        valHooks: {
          option: {
            get: function (e) {
              return f.trim(e.value);
            },
          },
          select: {
            get: function (e) {
              for (
                var t,
                  n,
                  i = e.options,
                  r = e.selectedIndex,
                  o = "select-one" === e.type || 0 > r,
                  s = o ? null : [],
                  a = o ? r + 1 : i.length,
                  l = 0 > r ? a : o ? r : 0;
                a > l;
                l++
              )
                if (
                  ((n = i[l]).selected || l === r) &&
                  (p.optDisabled
                    ? !n.disabled
                    : null === n.getAttribute("disabled")) &&
                  (!n.parentNode.disabled ||
                    !f.nodeName(n.parentNode, "optgroup"))
                ) {
                  if (((t = f(n).val()), o)) return t;
                  s.push(t);
                }
              return s;
            },
            set: function (e, t) {
              for (
                var n, i, r = e.options, o = f.makeArray(t), s = r.length;
                s--;

              )
                ((i = r[s]).selected =
                  f.inArray(f.valHooks.option.get(i), o) > -1) && (n = !0);
              return n || (e.selectedIndex = -1), o;
            },
          },
        },
      }),
      f.each(["radio", "checkbox"], function () {
        (f.valHooks[this] = {
          set: function (e, t) {
            return f.isArray(t)
              ? (e.checked = f.inArray(f(e).val(), t) > -1)
              : void 0;
          },
        }),
          p.checkOn ||
            (f.valHooks[this].get = function (e) {
              return null === e.getAttribute("value") ? "on" : e.value;
            });
      });
    var it = /^(?:focusinfocus|focusoutblur)$/;
    f.extend(f.event, {
      trigger: function (t, n, r, o) {
        var s,
          a,
          l,
          c,
          p,
          d,
          h,
          v = [r || i],
          m = u.call(t, "type") ? t.type : t,
          g = u.call(t, "namespace") ? t.namespace.split(".") : [];
        if (
          ((a = l = r = r || i),
          3 !== r.nodeType &&
            8 !== r.nodeType &&
            !it.test(m + f.event.triggered) &&
            (m.indexOf(".") > -1 &&
              ((g = m.split(".")), (m = g.shift()), g.sort()),
            (p = m.indexOf(":") < 0 && "on" + m),
            ((t = t[f.expando]
              ? t
              : new f.Event(m, "object" == typeof t && t)).isTrigger = o
              ? 2
              : 3),
            (t.namespace = g.join(".")),
            (t.rnamespace = t.namespace
              ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (t.result = void 0),
            t.target || (t.target = r),
            (n = null == n ? [t] : f.makeArray(n, [t])),
            (h = f.event.special[m] || {}),
            o || !h.trigger || !1 !== h.trigger.apply(r, n)))
        ) {
          if (!o && !h.noBubble && !f.isWindow(r)) {
            for (
              c = h.delegateType || m, it.test(c + m) || (a = a.parentNode);
              a;
              a = a.parentNode
            )
              v.push(a), (l = a);
            l === (r.ownerDocument || i) &&
              v.push(l.defaultView || l.parentWindow || e);
          }
          for (s = 0; (a = v[s++]) && !t.isPropagationStopped(); )
            (t.type = s > 1 ? c : h.bindType || m),
              (d = (q.get(a, "events") || {})[t.type] && q.get(a, "handle")) &&
                d.apply(a, n),
              (d = p && a[p]) &&
                d.apply &&
                R(a) &&
                ((t.result = d.apply(a, n)),
                !1 === t.result && t.preventDefault());
          return (
            (t.type = m),
            o ||
              t.isDefaultPrevented() ||
              (h._default && !1 !== h._default.apply(v.pop(), n)) ||
              !R(r) ||
              (p &&
                f.isFunction(r[m]) &&
                !f.isWindow(r) &&
                ((l = r[p]) && (r[p] = null),
                (f.event.triggered = m),
                r[m](),
                (f.event.triggered = void 0),
                l && (r[p] = l))),
            t.result
          );
        }
      },
      simulate: function (e, t, n) {
        var i = f.extend(new f.Event(), n, { type: e, isSimulated: !0 });
        f.event.trigger(i, null, t),
          i.isDefaultPrevented() && n.preventDefault();
      },
    }),
      f.fn.extend({
        trigger: function (e, t) {
          return this.each(function () {
            f.event.trigger(e, t, this);
          });
        },
        triggerHandler: function (e, t) {
          var n = this[0];
          return n ? f.event.trigger(e, t, n, !0) : void 0;
        },
      }),
      f.each(
        "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
          " "
        ),
        function (e, t) {
          f.fn[t] = function (e, n) {
            return arguments.length > 0
              ? this.on(t, null, e, n)
              : this.trigger(t);
          };
        }
      ),
      f.fn.extend({
        hover: function (e, t) {
          return this.mouseenter(e).mouseleave(t || e);
        },
      }),
      (p.focusin = "onfocusin" in e),
      p.focusin ||
        f.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
          var n = function (e) {
            f.event.simulate(t, e.target, f.event.fix(e));
          };
          f.event.special[t] = {
            setup: function () {
              var i = this.ownerDocument || this,
                r = q.access(i, t);
              r || i.addEventListener(e, n, !0), q.access(i, t, (r || 0) + 1);
            },
            teardown: function () {
              var i = this.ownerDocument || this,
                r = q.access(i, t) - 1;
              r
                ? q.access(i, t, r)
                : (i.removeEventListener(e, n, !0), q.remove(i, t));
            },
          };
        });
    var rt = e.location,
      ot = f.now(),
      st = /\?/;
    (f.parseJSON = function (e) {
      return JSON.parse(e + "");
    }),
      (f.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
          n = new e.DOMParser().parseFromString(t, "text/xml");
        } catch (e) {
          n = void 0;
        }
        return (
          (!n || n.getElementsByTagName("parsererror").length) &&
            f.error("Invalid XML: " + t),
          n
        );
      });
    var at = /#.*$/,
      lt = /([?&])_=[^&]*/,
      ct = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      ut = /^(?:GET|HEAD)$/,
      pt = /^\/\//,
      dt = {},
      ft = {},
      ht = "*/".concat("*"),
      vt = i.createElement("a");
    function mt(e) {
      return function (t, n) {
        "string" != typeof t && ((n = t), (t = "*"));
        var i,
          r = 0,
          o = t.toLowerCase().match(j) || [];
        if (f.isFunction(n))
          for (; (i = o[r++]); )
            "+" === i[0]
              ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
              : (e[i] = e[i] || []).push(n);
      };
    }
    function gt(e, t, n, i) {
      var r = {},
        o = e === ft;
      function s(a) {
        var l;
        return (
          (r[a] = !0),
          f.each(e[a] || [], function (e, a) {
            var c = a(t, n, i);
            return "string" != typeof c || o || r[c]
              ? o
                ? !(l = c)
                : void 0
              : (t.dataTypes.unshift(c), s(c), !1);
          }),
          l
        );
      }
      return s(t.dataTypes[0]) || (!r["*"] && s("*"));
    }
    function yt(e, t) {
      var n,
        i,
        r = f.ajaxSettings.flatOptions || {};
      for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
      return i && f.extend(!0, e, i), e;
    }
    (vt.href = rt.href),
      f.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: rt.href,
          type: "GET",
          isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            rt.protocol
          ),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": ht,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript",
          },
          contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON",
          },
          converters: {
            "* text": String,
            "text html": !0,
            "text json": f.parseJSON,
            "text xml": f.parseXML,
          },
          flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (e, t) {
          return t ? yt(yt(e, f.ajaxSettings), t) : yt(f.ajaxSettings, e);
        },
        ajaxPrefilter: mt(dt),
        ajaxTransport: mt(ft),
        ajax: function (t, n) {
          "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
          var r,
            o,
            s,
            a,
            l,
            c,
            u,
            p,
            d = f.ajaxSetup({}, n),
            h = d.context || d,
            v = d.context && (h.nodeType || h.jquery) ? f(h) : f.event,
            m = f.Deferred(),
            g = f.Callbacks("once memory"),
            y = d.statusCode || {},
            b = {},
            x = {},
            w = 0,
            T = "canceled",
            C = {
              readyState: 0,
              getResponseHeader: function (e) {
                var t;
                if (2 === w) {
                  if (!a)
                    for (a = {}; (t = ct.exec(s)); )
                      a[t[1].toLowerCase()] = t[2];
                  t = a[e.toLowerCase()];
                }
                return null == t ? null : t;
              },
              getAllResponseHeaders: function () {
                return 2 === w ? s : null;
              },
              setRequestHeader: function (e, t) {
                var n = e.toLowerCase();
                return w || ((e = x[n] = x[n] || e), (b[e] = t)), this;
              },
              overrideMimeType: function (e) {
                return w || (d.mimeType = e), this;
              },
              statusCode: function (e) {
                var t;
                if (e)
                  if (2 > w) for (t in e) y[t] = [y[t], e[t]];
                  else C.always(e[C.status]);
                return this;
              },
              abort: function (e) {
                var t = e || T;
                return r && r.abort(t), k(0, t), this;
              },
            };
          if (
            ((m.promise(C).complete = g.add),
            (C.success = C.done),
            (C.error = C.fail),
            (d.url = ((t || d.url || rt.href) + "")
              .replace(at, "")
              .replace(pt, rt.protocol + "//")),
            (d.type = n.method || n.type || d.method || d.type),
            (d.dataTypes = f
              .trim(d.dataType || "*")
              .toLowerCase()
              .match(j) || [""]),
            null == d.crossDomain)
          ) {
            c = i.createElement("a");
            try {
              (c.href = d.url),
                (c.href = c.href),
                (d.crossDomain =
                  vt.protocol + "//" + vt.host != c.protocol + "//" + c.host);
            } catch (e) {
              d.crossDomain = !0;
            }
          }
          if (
            (d.data &&
              d.processData &&
              "string" != typeof d.data &&
              (d.data = f.param(d.data, d.traditional)),
            gt(dt, d, n, C),
            2 === w)
          )
            return C;
          for (p in ((u = f.event && d.global) &&
            0 == f.active++ &&
            f.event.trigger("ajaxStart"),
          (d.type = d.type.toUpperCase()),
          (d.hasContent = !ut.test(d.type)),
          (o = d.url),
          d.hasContent ||
            (d.data &&
              ((o = d.url += (st.test(o) ? "&" : "?") + d.data), delete d.data),
            !1 === d.cache &&
              (d.url = lt.test(o)
                ? o.replace(lt, "$1_=" + ot++)
                : o + (st.test(o) ? "&" : "?") + "_=" + ot++)),
          d.ifModified &&
            (f.lastModified[o] &&
              C.setRequestHeader("If-Modified-Since", f.lastModified[o]),
            f.etag[o] && C.setRequestHeader("If-None-Match", f.etag[o])),
          ((d.data && d.hasContent && !1 !== d.contentType) || n.contentType) &&
            C.setRequestHeader("Content-Type", d.contentType),
          C.setRequestHeader(
            "Accept",
            d.dataTypes[0] && d.accepts[d.dataTypes[0]]
              ? d.accepts[d.dataTypes[0]] +
                  ("*" !== d.dataTypes[0] ? ", " + ht + "; q=0.01" : "")
              : d.accepts["*"]
          ),
          d.headers))
            C.setRequestHeader(p, d.headers[p]);
          if (d.beforeSend && (!1 === d.beforeSend.call(h, C, d) || 2 === w))
            return C.abort();
          for (p in ((T = "abort"), { success: 1, error: 1, complete: 1 }))
            C[p](d[p]);
          if ((r = gt(ft, d, n, C))) {
            if (
              ((C.readyState = 1), u && v.trigger("ajaxSend", [C, d]), 2 === w)
            )
              return C;
            d.async &&
              d.timeout > 0 &&
              (l = e.setTimeout(function () {
                C.abort("timeout");
              }, d.timeout));
            try {
              (w = 1), r.send(b, k);
            } catch (e) {
              if (!(2 > w)) throw e;
              k(-1, e);
            }
          } else k(-1, "No Transport");
          function k(t, n, i, a) {
            var c,
              p,
              b,
              x,
              T,
              k = n;
            2 !== w &&
              ((w = 2),
              l && e.clearTimeout(l),
              (r = void 0),
              (s = a || ""),
              (C.readyState = t > 0 ? 4 : 0),
              (c = (t >= 200 && 300 > t) || 304 === t),
              i &&
                (x = (function (e, t, n) {
                  for (
                    var i, r, o, s, a = e.contents, l = e.dataTypes;
                    "*" === l[0];

                  )
                    l.shift(),
                      void 0 === i &&
                        (i = e.mimeType || t.getResponseHeader("Content-Type"));
                  if (i)
                    for (r in a)
                      if (a[r] && a[r].test(i)) {
                        l.unshift(r);
                        break;
                      }
                  if (l[0] in n) o = l[0];
                  else {
                    for (r in n) {
                      if (!l[0] || e.converters[r + " " + l[0]]) {
                        o = r;
                        break;
                      }
                      s || (s = r);
                    }
                    o = o || s;
                  }
                  return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0;
                })(d, C, i)),
              (x = (function (e, t, n, i) {
                var r,
                  o,
                  s,
                  a,
                  l,
                  c = {},
                  u = e.dataTypes.slice();
                if (u[1])
                  for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                for (o = u.shift(); o; )
                  if (
                    (e.responseFields[o] && (n[e.responseFields[o]] = t),
                    !l &&
                      i &&
                      e.dataFilter &&
                      (t = e.dataFilter(t, e.dataType)),
                    (l = o),
                    (o = u.shift()))
                  )
                    if ("*" === o) o = l;
                    else if ("*" !== l && l !== o) {
                      if (!(s = c[l + " " + o] || c["* " + o]))
                        for (r in c)
                          if (
                            (a = r.split(" "))[1] === o &&
                            (s = c[l + " " + a[0]] || c["* " + a[0]])
                          ) {
                            !0 === s
                              ? (s = c[r])
                              : !0 !== c[r] && ((o = a[0]), u.unshift(a[1]));
                            break;
                          }
                      if (!0 !== s)
                        if (s && e.throws) t = s(t);
                        else
                          try {
                            t = s(t);
                          } catch (e) {
                            return {
                              state: "parsererror",
                              error: s
                                ? e
                                : "No conversion from " + l + " to " + o,
                            };
                          }
                    }
                return { state: "success", data: t };
              })(d, x, C, c)),
              c
                ? (d.ifModified &&
                    ((T = C.getResponseHeader("Last-Modified")) &&
                      (f.lastModified[o] = T),
                    (T = C.getResponseHeader("etag")) && (f.etag[o] = T)),
                  204 === t || "HEAD" === d.type
                    ? (k = "nocontent")
                    : 304 === t
                    ? (k = "notmodified")
                    : ((k = x.state), (p = x.data), (c = !(b = x.error))))
                : ((b = k), (t || !k) && ((k = "error"), 0 > t && (t = 0))),
              (C.status = t),
              (C.statusText = (n || k) + ""),
              c ? m.resolveWith(h, [p, k, C]) : m.rejectWith(h, [C, k, b]),
              C.statusCode(y),
              (y = void 0),
              u &&
                v.trigger(c ? "ajaxSuccess" : "ajaxError", [C, d, c ? p : b]),
              g.fireWith(h, [C, k]),
              u &&
                (v.trigger("ajaxComplete", [C, d]),
                --f.active || f.event.trigger("ajaxStop")));
          }
          return C;
        },
        getJSON: function (e, t, n) {
          return f.get(e, t, n, "json");
        },
        getScript: function (e, t) {
          return f.get(e, void 0, t, "script");
        },
      }),
      f.each(["get", "post"], function (e, t) {
        f[t] = function (e, n, i, r) {
          return (
            f.isFunction(n) && ((r = r || i), (i = n), (n = void 0)),
            f.ajax(
              f.extend(
                { url: e, type: t, dataType: r, data: n, success: i },
                f.isPlainObject(e) && e
              )
            )
          );
        };
      }),
      (f._evalUrl = function (e) {
        return f.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          async: !1,
          global: !1,
          throws: !0,
        });
      }),
      f.fn.extend({
        wrapAll: function (e) {
          var t;
          return f.isFunction(e)
            ? this.each(function (t) {
                f(this).wrapAll(e.call(this, t));
              })
            : (this[0] &&
                ((t = f(e, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function () {
                    for (var e = this; e.firstElementChild; )
                      e = e.firstElementChild;
                    return e;
                  })
                  .append(this)),
              this);
        },
        wrapInner: function (e) {
          return f.isFunction(e)
            ? this.each(function (t) {
                f(this).wrapInner(e.call(this, t));
              })
            : this.each(function () {
                var t = f(this),
                  n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
              });
        },
        wrap: function (e) {
          var t = f.isFunction(e);
          return this.each(function (n) {
            f(this).wrapAll(t ? e.call(this, n) : e);
          });
        },
        unwrap: function () {
          return this.parent()
            .each(function () {
              f.nodeName(this, "body") || f(this).replaceWith(this.childNodes);
            })
            .end();
        },
      }),
      (f.expr.filters.hidden = function (e) {
        return !f.expr.filters.visible(e);
      }),
      (f.expr.filters.visible = function (e) {
        return (
          e.offsetWidth > 0 ||
          e.offsetHeight > 0 ||
          e.getClientRects().length > 0
        );
      });
    var bt = /%20/g,
      xt = /\[\]$/,
      wt = /\r?\n/g,
      Tt = /^(?:submit|button|image|reset|file)$/i,
      Ct = /^(?:input|select|textarea|keygen)/i;
    function kt(e, t, n, i) {
      var r;
      if (f.isArray(t))
        f.each(t, function (t, r) {
          n || xt.test(e)
            ? i(e, r)
            : kt(
                e + "[" + ("object" == typeof r && null != r ? t : "") + "]",
                r,
                n,
                i
              );
        });
      else if (n || "object" !== f.type(t)) i(e, t);
      else for (r in t) kt(e + "[" + r + "]", t[r], n, i);
    }
    (f.param = function (e, t) {
      var n,
        i = [],
        r = function (e, t) {
          (t = f.isFunction(t) ? t() : null == t ? "" : t),
            (i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t));
        };
      if (
        (void 0 === t && (t = f.ajaxSettings && f.ajaxSettings.traditional),
        f.isArray(e) || (e.jquery && !f.isPlainObject(e)))
      )
        f.each(e, function () {
          r(this.name, this.value);
        });
      else for (n in e) kt(n, e[n], t, r);
      return i.join("&").replace(bt, "+");
    }),
      f.fn.extend({
        serialize: function () {
          return f.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var e = f.prop(this, "elements");
            return e ? f.makeArray(e) : this;
          })
            .filter(function () {
              var e = this.type;
              return (
                this.name &&
                !f(this).is(":disabled") &&
                Ct.test(this.nodeName) &&
                !Tt.test(e) &&
                (this.checked || !V.test(e))
              );
            })
            .map(function (e, t) {
              var n = f(this).val();
              return null == n
                ? null
                : f.isArray(n)
                ? f.map(n, function (e) {
                    return { name: t.name, value: e.replace(wt, "\r\n") };
                  })
                : { name: t.name, value: n.replace(wt, "\r\n") };
            })
            .get();
        },
      }),
      (f.ajaxSettings.xhr = function () {
        try {
          return new e.XMLHttpRequest();
        } catch (e) {}
      });
    var Et = { 0: 200, 1223: 204 },
      St = f.ajaxSettings.xhr();
    (p.cors = !!St && "withCredentials" in St),
      (p.ajax = St = !!St),
      f.ajaxTransport(function (t) {
        var n, i;
        return p.cors || (St && !t.crossDomain)
          ? {
              send: function (r, o) {
                var s,
                  a = t.xhr();
                if (
                  (a.open(t.type, t.url, t.async, t.username, t.password),
                  t.xhrFields)
                )
                  for (s in t.xhrFields) a[s] = t.xhrFields[s];
                for (s in (t.mimeType &&
                  a.overrideMimeType &&
                  a.overrideMimeType(t.mimeType),
                t.crossDomain ||
                  r["X-Requested-With"] ||
                  (r["X-Requested-With"] = "XMLHttpRequest"),
                r))
                  a.setRequestHeader(s, r[s]);
                (n = function (e) {
                  return function () {
                    n &&
                      ((n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null),
                      "abort" === e
                        ? a.abort()
                        : "error" === e
                        ? "number" != typeof a.status
                          ? o(0, "error")
                          : o(a.status, a.statusText)
                        : o(
                            Et[a.status] || a.status,
                            a.statusText,
                            "text" !== (a.responseType || "text") ||
                              "string" != typeof a.responseText
                              ? { binary: a.response }
                              : { text: a.responseText },
                            a.getAllResponseHeaders()
                          ));
                  };
                }),
                  (a.onload = n()),
                  (i = a.onerror = n("error")),
                  void 0 !== a.onabort
                    ? (a.onabort = i)
                    : (a.onreadystatechange = function () {
                        4 === a.readyState &&
                          e.setTimeout(function () {
                            n && i();
                          });
                      }),
                  (n = n("abort"));
                try {
                  a.send((t.hasContent && t.data) || null);
                } catch (e) {
                  if (n) throw e;
                }
              },
              abort: function () {
                n && n();
              },
            }
          : void 0;
      }),
      f.ajaxSetup({
        accepts: {
          script:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: { script: /\b(?:java|ecma)script\b/ },
        converters: {
          "text script": function (e) {
            return f.globalEval(e), e;
          },
        },
      }),
      f.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
      }),
      f.ajaxTransport("script", function (e) {
        var t, n;
        if (e.crossDomain)
          return {
            send: function (r, o) {
              (t = f("<script>")
                .prop({ charset: e.scriptCharset, src: e.url })
                .on(
                  "load error",
                  (n = function (e) {
                    t.remove(),
                      (n = null),
                      e && o("error" === e.type ? 404 : 200, e.type);
                  })
                )),
                i.head.appendChild(t[0]);
            },
            abort: function () {
              n && n();
            },
          };
      });
    var _t = [],
      At = /(=)\?(?=&|$)|\?\?/;
    f.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var e = _t.pop() || f.expando + "_" + ot++;
        return (this[e] = !0), e;
      },
    }),
      f.ajaxPrefilter("json jsonp", function (t, n, i) {
        var r,
          o,
          s,
          a =
            !1 !== t.jsonp &&
            (At.test(t.url)
              ? "url"
              : "string" == typeof t.data &&
                0 ===
                  (t.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                At.test(t.data) &&
                "data");
        return a || "jsonp" === t.dataTypes[0]
          ? ((r = t.jsonpCallback = f.isFunction(t.jsonpCallback)
              ? t.jsonpCallback()
              : t.jsonpCallback),
            a
              ? (t[a] = t[a].replace(At, "$1" + r))
              : !1 !== t.jsonp &&
                (t.url += (st.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
            (t.converters["script json"] = function () {
              return s || f.error(r + " was not called"), s[0];
            }),
            (t.dataTypes[0] = "json"),
            (o = e[r]),
            (e[r] = function () {
              s = arguments;
            }),
            i.always(function () {
              void 0 === o ? f(e).removeProp(r) : (e[r] = o),
                t[r] && ((t.jsonpCallback = n.jsonpCallback), _t.push(r)),
                s && f.isFunction(o) && o(s[0]),
                (s = o = void 0);
            }),
            "script")
          : void 0;
      }),
      (p.createHTMLDocument = (function () {
        var e = i.implementation.createHTMLDocument("").body;
        return (
          (e.innerHTML = "<form></form><form></form>"),
          2 === e.childNodes.length
        );
      })()),
      (f.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && ((n = t), (t = !1)),
          (t =
            t ||
            (p.createHTMLDocument
              ? i.implementation.createHTMLDocument("")
              : i));
        var r = C.exec(e),
          o = !n && [];
        return r
          ? [t.createElement(r[1])]
          : ((r = ee([e], t, o)),
            o && o.length && f(o).remove(),
            f.merge([], r.childNodes));
      });
    var $t = f.fn.load;
    function Dt(e) {
      return f.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
    }
    (f.fn.load = function (e, t, n) {
      if ("string" != typeof e && $t) return $t.apply(this, arguments);
      var i,
        r,
        o,
        s = this,
        a = e.indexOf(" ");
      return (
        a > -1 && ((i = f.trim(e.slice(a))), (e = e.slice(0, a))),
        f.isFunction(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (r = "POST"),
        s.length > 0 &&
          f
            .ajax({ url: e, type: r || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                s.html(i ? f("<div>").append(f.parseHTML(e)).find(i) : e);
            })
            .always(
              n &&
                function (e, t) {
                  s.each(function () {
                    n.apply(s, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
      f.each(
        [
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend",
        ],
        function (e, t) {
          f.fn[t] = function (e) {
            return this.on(t, e);
          };
        }
      ),
      (f.expr.filters.animated = function (e) {
        return f.grep(f.timers, function (t) {
          return e === t.elem;
        }).length;
      }),
      (f.offset = {
        setOffset: function (e, t, n) {
          var i,
            r,
            o,
            s,
            a,
            l,
            c = f.css(e, "position"),
            u = f(e),
            p = {};
          "static" === c && (e.style.position = "relative"),
            (a = u.offset()),
            (o = f.css(e, "top")),
            (l = f.css(e, "left")),
            ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1
              ? ((s = (i = u.position()).top), (r = i.left))
              : ((s = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
            f.isFunction(t) && (t = t.call(e, n, f.extend({}, a))),
            null != t.top && (p.top = t.top - a.top + s),
            null != t.left && (p.left = t.left - a.left + r),
            "using" in t ? t.using.call(e, p) : u.css(p);
        },
      }),
      f.fn.extend({
        offset: function (e) {
          if (arguments.length)
            return void 0 === e
              ? this
              : this.each(function (t) {
                  f.offset.setOffset(this, e, t);
                });
          var t,
            n,
            i = this[0],
            r = { top: 0, left: 0 },
            o = i && i.ownerDocument;
          return o
            ? ((t = o.documentElement),
              f.contains(t, i)
                ? ((r = i.getBoundingClientRect()),
                  (n = Dt(o)),
                  {
                    top: r.top + n.pageYOffset - t.clientTop,
                    left: r.left + n.pageXOffset - t.clientLeft,
                  })
                : r)
            : void 0;
        },
        position: function () {
          if (this[0]) {
            var e,
              t,
              n = this[0],
              i = { top: 0, left: 0 };
            return (
              "fixed" === f.css(n, "position")
                ? (t = n.getBoundingClientRect())
                : ((e = this.offsetParent()),
                  (t = this.offset()),
                  f.nodeName(e[0], "html") || (i = e.offset()),
                  (i.top += f.css(e[0], "borderTopWidth", !0) - e.scrollTop()),
                  (i.left +=
                    f.css(e[0], "borderLeftWidth", !0) - e.scrollLeft())),
              {
                top: t.top - i.top - f.css(n, "marginTop", !0),
                left: t.left - i.left - f.css(n, "marginLeft", !0),
              }
            );
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (
              var e = this.offsetParent;
              e && "static" === f.css(e, "position");

            )
              e = e.offsetParent;
            return e || Ae;
          });
        },
      }),
      f.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (
        e,
        t
      ) {
        var n = "pageYOffset" === t;
        f.fn[e] = function (i) {
          return O(
            this,
            function (e, i, r) {
              var o = Dt(e);
              return void 0 === r
                ? o
                  ? o[t]
                  : e[i]
                : void (o
                    ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset)
                    : (e[i] = r));
            },
            e,
            i,
            arguments.length
          );
        };
      }),
      f.each(["top", "left"], function (e, t) {
        f.cssHooks[t] = De(p.pixelPosition, function (e, n) {
          return n
            ? ((n = $e(e, t)), Ee.test(n) ? f(e).position()[t] + "px" : n)
            : void 0;
        });
      }),
      f.each({ Height: "height", Width: "width" }, function (e, t) {
        f.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (
          n,
          i
        ) {
          f.fn[i] = function (i, r) {
            var o = arguments.length && (n || "boolean" != typeof i),
              s = n || (!0 === i || !0 === r ? "margin" : "border");
            return O(
              this,
              function (t, n, i) {
                var r;
                return f.isWindow(t)
                  ? t.document.documentElement["client" + e]
                  : 9 === t.nodeType
                  ? ((r = t.documentElement),
                    Math.max(
                      t.body["scroll" + e],
                      r["scroll" + e],
                      t.body["offset" + e],
                      r["offset" + e],
                      r["client" + e]
                    ))
                  : void 0 === i
                  ? f.css(t, n, s)
                  : f.style(t, n, i, s);
              },
              t,
              o ? i : void 0,
              o,
              null
            );
          };
        });
      }),
      f.fn.extend({
        bind: function (e, t, n) {
          return this.on(e, null, t, n);
        },
        unbind: function (e, t) {
          return this.off(e, null, t);
        },
        delegate: function (e, t, n, i) {
          return this.on(t, e, n, i);
        },
        undelegate: function (e, t, n) {
          return 1 === arguments.length
            ? this.off(e, "**")
            : this.off(t, e || "**", n);
        },
        size: function () {
          return this.length;
        },
      }),
      (f.fn.andSelf = f.fn.addBack),
      "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
          return f;
        });
    var Nt = e.jQuery,
      jt = e.$;
    return (
      (f.noConflict = function (t) {
        return (
          e.$ === f && (e.$ = jt), t && e.jQuery === f && (e.jQuery = Nt), f
        );
      }),
      t || (e.jQuery = e.$ = f),
      f
    );
  }),
  "undefined" == typeof jQuery)
)
  throw new Error("Bootstrap's JavaScript requires jQuery");
function hexToRgb(e) {
  e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, t, n, i) {
    return t + t + n + n + i + i;
  });
  var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  return t
    ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) }
    : null;
}
function clamp(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
function isInArray(e, t) {
  return t.indexOf(e) > -1;
}
!(function (e) {
  "use strict";
  var t = jQuery.fn.jquery.split(" ")[0].split(".");
  if (
    (t[0] < 2 && t[1] < 9) ||
    (1 == t[0] && 9 == t[1] && t[2] < 1) ||
    t[0] > 2
  )
    throw new Error(
      "Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3"
    );
})(),
  (function (e) {
    "use strict";
    (e.fn.emulateTransitionEnd = function (t) {
      var n = !1,
        i = this;
      e(this).one("bsTransitionEnd", function () {
        n = !0;
      });
      return (
        setTimeout(function () {
          n || e(i).trigger(e.support.transition.end);
        }, t),
        this
      );
    }),
      e(function () {
        (e.support.transition = (function () {
          var e = document.createElement("bootstrap"),
            t = {
              WebkitTransition: "webkitTransitionEnd",
              MozTransition: "transitionend",
              OTransition: "oTransitionEnd otransitionend",
              transition: "transitionend",
            };
          for (var n in t) if (void 0 !== e.style[n]) return { end: t[n] };
          return !1;
        })()),
          e.support.transition &&
            (e.event.special.bsTransitionEnd = {
              bindType: e.support.transition.end,
              delegateType: e.support.transition.end,
              handle: function (t) {
                return e(t.target).is(this)
                  ? t.handleObj.handler.apply(this, arguments)
                  : void 0;
              },
            });
      });
  })(jQuery),
  (function (e) {
    "use strict";
    var t = '[data-dismiss="alert"]',
      n = function (n) {
        e(n).on("click", t, this.close);
      };
    (n.VERSION = "3.3.6"),
      (n.TRANSITION_DURATION = 150),
      (n.prototype.close = function (t) {
        function i() {
          s.detach().trigger("closed.bs.alert").remove();
        }
        var r = e(this),
          o = r.attr("data-target");
        o || (o = (o = r.attr("href")) && o.replace(/.*(?=#[^\s]*$)/, ""));
        var s = e(o);
        t && t.preventDefault(),
          s.length || (s = r.closest(".alert")),
          s.trigger((t = e.Event("close.bs.alert"))),
          t.isDefaultPrevented() ||
            (s.removeClass("in"),
            e.support.transition && s.hasClass("fade")
              ? s
                  .one("bsTransitionEnd", i)
                  .emulateTransitionEnd(n.TRANSITION_DURATION)
              : i());
      });
    var i = e.fn.alert;
    (e.fn.alert = function (t) {
      return this.each(function () {
        var i = e(this),
          r = i.data("bs.alert");
        r || i.data("bs.alert", (r = new n(this))),
          "string" == typeof t && r[t].call(i);
      });
    }),
      (e.fn.alert.Constructor = n),
      (e.fn.alert.noConflict = function () {
        return (e.fn.alert = i), this;
      }),
      e(document).on("click.bs.alert.data-api", t, n.prototype.close);
  })(jQuery),
  (function (e) {
    "use strict";
    function t(t) {
      return this.each(function () {
        var i = e(this),
          r = i.data("bs.button"),
          o = "object" == typeof t && t;
        r || i.data("bs.button", (r = new n(this, o))),
          "toggle" == t ? r.toggle() : t && r.setState(t);
      });
    }
    var n = function (t, i) {
      (this.$element = e(t)),
        (this.options = e.extend({}, n.DEFAULTS, i)),
        (this.isLoading = !1);
    };
    (n.VERSION = "3.3.6"),
      (n.DEFAULTS = { loadingText: "loading..." }),
      (n.prototype.setState = function (t) {
        var n = "disabled",
          i = this.$element,
          r = i.is("input") ? "val" : "html",
          o = i.data();
        (t += "Text"),
          null == o.resetText && i.data("resetText", i[r]()),
          setTimeout(
            e.proxy(function () {
              i[r](null == o[t] ? this.options[t] : o[t]),
                "loadingText" == t
                  ? ((this.isLoading = !0), i.addClass(n).attr(n, n))
                  : this.isLoading &&
                    ((this.isLoading = !1), i.removeClass(n).removeAttr(n));
            }, this),
            0
          );
      }),
      (n.prototype.toggle = function () {
        var e = !0,
          t = this.$element.closest('[data-toggle="buttons"]');
        if (t.length) {
          var n = this.$element.find("input");
          "radio" == n.prop("type")
            ? (n.prop("checked") && (e = !1),
              t.find(".active").removeClass("active"),
              this.$element.addClass("active"))
            : "checkbox" == n.prop("type") &&
              (n.prop("checked") !== this.$element.hasClass("active") &&
                (e = !1),
              this.$element.toggleClass("active")),
            n.prop("checked", this.$element.hasClass("active")),
            e && n.trigger("change");
        } else
          this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
            this.$element.toggleClass("active");
      });
    var i = e.fn.button;
    (e.fn.button = t),
      (e.fn.button.Constructor = n),
      (e.fn.button.noConflict = function () {
        return (e.fn.button = i), this;
      }),
      e(document)
        .on("click.bs.button.data-api", '[data-toggle^="button"]', function (
          n
        ) {
          var i = e(n.target);
          i.hasClass("btn") || (i = i.closest(".btn")),
            t.call(i, "toggle"),
            e(n.target).is('input[type="radio"]') ||
              e(n.target).is('input[type="checkbox"]') ||
              n.preventDefault();
        })
        .on(
          "focus.bs.button.data-api blur.bs.button.data-api",
          '[data-toggle^="button"]',
          function (t) {
            e(t.target)
              .closest(".btn")
              .toggleClass("focus", /^focus(in)?$/.test(t.type));
          }
        );
  })(jQuery),
  (function (e) {
    "use strict";
    function t(t) {
      return this.each(function () {
        var i = e(this),
          r = i.data("bs.carousel"),
          o = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t),
          s = "string" == typeof t ? t : o.slide;
        r || i.data("bs.carousel", (r = new n(this, o))),
          "number" == typeof t
            ? r.to(t)
            : s
            ? r[s]()
            : o.interval && r.pause().cycle();
      });
    }
    var n = function (t, n) {
      (this.$element = e(t)),
        (this.$indicators = this.$element.find(".carousel-indicators")),
        (this.options = n),
        (this.paused = null),
        (this.sliding = null),
        (this.interval = null),
        (this.$active = null),
        (this.$items = null),
        this.options.keyboard &&
          this.$element.on("keydown.bs.carousel", e.proxy(this.keydown, this)),
        "hover" == this.options.pause &&
          !("ontouchstart" in document.documentElement) &&
          this.$element
            .on("mouseenter.bs.carousel", e.proxy(this.pause, this))
            .on("mouseleave.bs.carousel", e.proxy(this.cycle, this));
    };
    (n.VERSION = "3.3.6"),
      (n.TRANSITION_DURATION = 600),
      (n.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }),
      (n.prototype.keydown = function (e) {
        if (!/input|textarea/i.test(e.target.tagName)) {
          switch (e.which) {
            case 37:
              this.prev();
              break;
            case 39:
              this.next();
              break;
            default:
              return;
          }
          e.preventDefault();
        }
      }),
      (n.prototype.cycle = function (t) {
        return (
          t || (this.paused = !1),
          this.interval && clearInterval(this.interval),
          this.options.interval &&
            !this.paused &&
            (this.interval = setInterval(
              e.proxy(this.next, this),
              this.options.interval
            )),
          this
        );
      }),
      (n.prototype.getItemIndex = function (e) {
        return (
          (this.$items = e.parent().children(".item")),
          this.$items.index(e || this.$active)
        );
      }),
      (n.prototype.getItemForDirection = function (e, t) {
        var n = this.getItemIndex(t);
        if (
          (("prev" == e && 0 === n) ||
            ("next" == e && n == this.$items.length - 1)) &&
          !this.options.wrap
        )
          return t;
        var i = (n + ("prev" == e ? -1 : 1)) % this.$items.length;
        return this.$items.eq(i);
      }),
      (n.prototype.to = function (e) {
        var t = this,
          n = this.getItemIndex(
            (this.$active = this.$element.find(".item.active"))
          );
        return e > this.$items.length - 1 || 0 > e
          ? void 0
          : this.sliding
          ? this.$element.one("slid.bs.carousel", function () {
              t.to(e);
            })
          : n == e
          ? this.pause().cycle()
          : this.slide(e > n ? "next" : "prev", this.$items.eq(e));
      }),
      (n.prototype.pause = function (t) {
        return (
          t || (this.paused = !0),
          this.$element.find(".next, .prev").length &&
            e.support.transition &&
            (this.$element.trigger(e.support.transition.end), this.cycle(!0)),
          (this.interval = clearInterval(this.interval)),
          this
        );
      }),
      (n.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next");
      }),
      (n.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev");
      }),
      (n.prototype.slide = function (t, i) {
        var r = this.$element.find(".item.active"),
          o = i || this.getItemForDirection(t, r),
          s = this.interval,
          a = "next" == t ? "left" : "right",
          l = this;
        if (o.hasClass("active")) return (this.sliding = !1);
        var c = o[0],
          u = e.Event("slide.bs.carousel", { relatedTarget: c, direction: a });
        if ((this.$element.trigger(u), !u.isDefaultPrevented())) {
          if (
            ((this.sliding = !0), s && this.pause(), this.$indicators.length)
          ) {
            this.$indicators.find(".active").removeClass("active");
            var p = e(this.$indicators.children()[this.getItemIndex(o)]);
            p && p.addClass("active");
          }
          var d = e.Event("slid.bs.carousel", {
            relatedTarget: c,
            direction: a,
          });
          return (
            e.support.transition && this.$element.hasClass("slide")
              ? (o.addClass(t),
                o[0].offsetWidth,
                r.addClass(a),
                o.addClass(a),
                r
                  .one("bsTransitionEnd", function () {
                    o.removeClass([t, a].join(" ")).addClass("active"),
                      r.removeClass(["active", a].join(" ")),
                      (l.sliding = !1),
                      setTimeout(function () {
                        l.$element.trigger(d);
                      }, 0);
                  })
                  .emulateTransitionEnd(n.TRANSITION_DURATION))
              : (r.removeClass("active"),
                o.addClass("active"),
                (this.sliding = !1),
                this.$element.trigger(d)),
            s && this.cycle(),
            this
          );
        }
      });
    var i = e.fn.carousel;
    (e.fn.carousel = t),
      (e.fn.carousel.Constructor = n),
      (e.fn.carousel.noConflict = function () {
        return (e.fn.carousel = i), this;
      });
    var r = function (n) {
      var i,
        r = e(this),
        o = e(
          r.attr("data-target") ||
            ((i = r.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""))
        );
      if (o.hasClass("carousel")) {
        var s = e.extend({}, o.data(), r.data()),
          a = r.attr("data-slide-to");
        a && (s.interval = !1),
          t.call(o, s),
          a && o.data("bs.carousel").to(a),
          n.preventDefault();
      }
    };
    e(document)
      .on("click.bs.carousel.data-api", "[data-slide]", r)
      .on("click.bs.carousel.data-api", "[data-slide-to]", r),
      e(window).on("load", function () {
        e('[data-ride="carousel"]').each(function () {
          var n = e(this);
          t.call(n, n.data());
        });
      });
  })(jQuery),
  (function (e) {
    "use strict";
    function t(t) {
      var n,
        i =
          t.attr("data-target") ||
          ((n = t.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
      return e(i);
    }
    function n(t) {
      return this.each(function () {
        var n = e(this),
          r = n.data("bs.collapse"),
          o = e.extend({}, i.DEFAULTS, n.data(), "object" == typeof t && t);
        !r && o.toggle && /show|hide/.test(t) && (o.toggle = !1),
          r || n.data("bs.collapse", (r = new i(this, o))),
          "string" == typeof t && r[t]();
      });
    }
    var i = function (t, n) {
      (this.$element = e(t)),
        (this.options = e.extend({}, i.DEFAULTS, n)),
        (this.$trigger = e(
          '[data-toggle="collapse"][href="#' +
            t.id +
            '"],[data-toggle="collapse"][data-target="#' +
            t.id +
            '"]'
        )),
        (this.transitioning = null),
        this.options.parent
          ? (this.$parent = this.getParent())
          : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle();
    };
    (i.VERSION = "3.3.6"),
      (i.TRANSITION_DURATION = 350),
      (i.DEFAULTS = { toggle: !0 }),
      (i.prototype.dimension = function () {
        return this.$element.hasClass("width") ? "width" : "height";
      }),
      (i.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
          var t,
            r =
              this.$parent &&
              this.$parent.children(".panel").children(".in, .collapsing");
          if (
            !(
              r &&
              r.length &&
              ((t = r.data("bs.collapse")), t && t.transitioning)
            )
          ) {
            var o = e.Event("show.bs.collapse");
            if ((this.$element.trigger(o), !o.isDefaultPrevented())) {
              r &&
                r.length &&
                (n.call(r, "hide"), t || r.data("bs.collapse", null));
              var s = this.dimension();
              this.$element
                .removeClass("collapse")
                .addClass("collapsing")
                [s](0)
                .attr("aria-expanded", !0),
                this.$trigger
                  .removeClass("collapsed")
                  .attr("aria-expanded", !0),
                (this.transitioning = 1);
              var a = function () {
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse in")
                  [s](""),
                  (this.transitioning = 0),
                  this.$element.trigger("shown.bs.collapse");
              };
              if (!e.support.transition) return a.call(this);
              var l = e.camelCase(["scroll", s].join("-"));
              this.$element
                .one("bsTransitionEnd", e.proxy(a, this))
                .emulateTransitionEnd(i.TRANSITION_DURATION)
                [s](this.$element[0][l]);
            }
          }
        }
      }),
      (i.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
          var t = e.Event("hide.bs.collapse");
          if ((this.$element.trigger(t), !t.isDefaultPrevented())) {
            var n = this.dimension();
            this.$element[n](this.$element[n]())[0].offsetHeight,
              this.$element
                .addClass("collapsing")
                .removeClass("collapse in")
                .attr("aria-expanded", !1),
              this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
              (this.transitioning = 1);
            var r = function () {
              (this.transitioning = 0),
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse")
                  .trigger("hidden.bs.collapse");
            };
            return e.support.transition
              ? void this.$element[n](0)
                  .one("bsTransitionEnd", e.proxy(r, this))
                  .emulateTransitionEnd(i.TRANSITION_DURATION)
              : r.call(this);
          }
        }
      }),
      (i.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
      }),
      (i.prototype.getParent = function () {
        return e(this.options.parent)
          .find(
            '[data-toggle="collapse"][data-parent="' +
              this.options.parent +
              '"]'
          )
          .each(
            e.proxy(function (n, i) {
              var r = e(i);
              this.addAriaAndCollapsedClass(t(r), r);
            }, this)
          )
          .end();
      }),
      (i.prototype.addAriaAndCollapsedClass = function (e, t) {
        var n = e.hasClass("in");
        e.attr("aria-expanded", n),
          t.toggleClass("collapsed", !n).attr("aria-expanded", n);
      });
    var r = e.fn.collapse;
    (e.fn.collapse = n),
      (e.fn.collapse.Constructor = i),
      (e.fn.collapse.noConflict = function () {
        return (e.fn.collapse = r), this;
      }),
      e(document).on(
        "click.bs.collapse.data-api",
        '[data-toggle="collapse"]',
        function (i) {
          var r = e(this);
          r.attr("data-target") || i.preventDefault();
          var o = t(r),
            s = o.data("bs.collapse") ? "toggle" : r.data();
          n.call(o, s);
        }
      );
  })(jQuery),
  (function (e) {
    "use strict";
    function t(t) {
      var n = t.attr("data-target");
      n ||
        (n =
          (n = t.attr("href")) &&
          /#[A-Za-z]/.test(n) &&
          n.replace(/.*(?=#[^\s]*$)/, ""));
      var i = n && e(n);
      return i && i.length ? i : t.parent();
    }
    function n(n) {
      (n && 3 === n.which) ||
        (e(i).remove(),
        e(r).each(function () {
          var i = e(this),
            r = t(i),
            o = { relatedTarget: this };
          r.hasClass("open") &&
            ((n &&
              "click" == n.type &&
              /input|textarea/i.test(n.target.tagName) &&
              e.contains(r[0], n.target)) ||
              (r.trigger((n = e.Event("hide.bs.dropdown", o))),
              n.isDefaultPrevented() ||
                (i.attr("aria-expanded", "false"),
                r
                  .removeClass("open")
                  .trigger(e.Event("hidden.bs.dropdown", o)))));
        }));
    }
    var i = ".dropdown-backdrop",
      r = '[data-toggle="dropdown"]',
      o = function (t) {
        e(t).on("click.bs.dropdown", this.toggle);
      };
    (o.VERSION = "3.3.6"),
      (o.prototype.toggle = function (i) {
        var r = e(this);
        if (!r.is(".disabled, :disabled")) {
          var o = t(r),
            s = o.hasClass("open");
          if ((n(), !s)) {
            "ontouchstart" in document.documentElement &&
              !o.closest(".navbar-nav").length &&
              e(document.createElement("div"))
                .addClass("dropdown-backdrop")
                .insertAfter(e(this))
                .on("click", n);
            var a = { relatedTarget: this };
            if (
              (o.trigger((i = e.Event("show.bs.dropdown", a))),
              i.isDefaultPrevented())
            )
              return;
            r.trigger("focus").attr("aria-expanded", "true"),
              o.toggleClass("open").trigger(e.Event("shown.bs.dropdown", a));
          }
          return !1;
        }
      }),
      (o.prototype.keydown = function (n) {
        if (
          /(38|40|27|32)/.test(n.which) &&
          !/input|textarea/i.test(n.target.tagName)
        ) {
          var i = e(this);
          if (
            (n.preventDefault(),
            n.stopPropagation(),
            !i.is(".disabled, :disabled"))
          ) {
            var o = t(i),
              s = o.hasClass("open");
            if ((!s && 27 != n.which) || (s && 27 == n.which))
              return (
                27 == n.which && o.find(r).trigger("focus"), i.trigger("click")
              );
            var a = o.find(".dropdown-menu li:not(.disabled):visible a");
            if (a.length) {
              var l = a.index(n.target);
              38 == n.which && l > 0 && l--,
                40 == n.which && l < a.length - 1 && l++,
                ~l || (l = 0),
                a.eq(l).trigger("focus");
            }
          }
        }
      });
    var s = e.fn.dropdown;
    (e.fn.dropdown = function (t) {
      return this.each(function () {
        var n = e(this),
          i = n.data("bs.dropdown");
        i || n.data("bs.dropdown", (i = new o(this))),
          "string" == typeof t && i[t].call(n);
      });
    }),
      (e.fn.dropdown.Constructor = o),
      (e.fn.dropdown.noConflict = function () {
        return (e.fn.dropdown = s), this;
      }),
      e(document)
        .on("click.bs.dropdown.data-api", n)
        .on("click.bs.dropdown.data-api", ".dropdown form", function (e) {
          e.stopPropagation();
        })
        .on("click.bs.dropdown.data-api", r, o.prototype.toggle)
        .on("keydown.bs.dropdown.data-api", r, o.prototype.keydown)
        .on(
          "keydown.bs.dropdown.data-api",
          ".dropdown-menu",
          o.prototype.keydown
        );
  })(jQuery),
  (function (e) {
    "use strict";
    function t(t, i) {
      return this.each(function () {
        var r = e(this),
          o = r.data("bs.modal"),
          s = e.extend({}, n.DEFAULTS, r.data(), "object" == typeof t && t);
        o || r.data("bs.modal", (o = new n(this, s))),
          "string" == typeof t ? o[t](i) : s.show && o.show(i);
      });
    }
    var n = function (t, n) {
      (this.options = n),
        (this.$body = e(document.body)),
        (this.$element = e(t)),
        (this.$dialog = this.$element.find(".modal-dialog")),
        (this.$backdrop = null),
        (this.isShown = null),
        (this.originalBodyPad = null),
        (this.scrollbarWidth = 0),
        (this.ignoreBackdropClick = !1),
        this.options.remote &&
          this.$element.find(".modal-content").load(
            this.options.remote,
            e.proxy(function () {
              this.$element.trigger("loaded.bs.modal");
            }, this)
          );
    };
    (n.VERSION = "3.3.6"),
      (n.TRANSITION_DURATION = 300),
      (n.BACKDROP_TRANSITION_DURATION = 150),
      (n.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
      (n.prototype.toggle = function (e) {
        return this.isShown ? this.hide() : this.show(e);
      }),
      (n.prototype.show = function (t) {
        var i = this,
          r = e.Event("show.bs.modal", { relatedTarget: t });
        this.$element.trigger(r),
          this.isShown ||
            r.isDefaultPrevented() ||
            ((this.isShown = !0),
            this.checkScrollbar(),
            this.setScrollbar(),
            this.$body.addClass("modal-open"),
            this.escape(),
            this.resize(),
            this.$element.on(
              "click.dismiss.bs.modal",
              '[data-dismiss="modal"]',
              e.proxy(this.hide, this)
            ),
            this.$dialog.on("mousedown.dismiss.bs.modal", function () {
              i.$element.one("mouseup.dismiss.bs.modal", function (t) {
                e(t.target).is(i.$element) && (i.ignoreBackdropClick = !0);
              });
            }),
            this.backdrop(function () {
              var r = e.support.transition && i.$element.hasClass("fade");
              i.$element.parent().length || i.$element.appendTo(i.$body),
                i.$element.show().scrollTop(0),
                i.adjustDialog(),
                r && i.$element[0].offsetWidth,
                i.$element.addClass("in"),
                i.enforceFocus();
              var o = e.Event("shown.bs.modal", { relatedTarget: t });
              r
                ? i.$dialog
                    .one("bsTransitionEnd", function () {
                      i.$element.trigger("focus").trigger(o);
                    })
                    .emulateTransitionEnd(n.TRANSITION_DURATION)
                : i.$element.trigger("focus").trigger(o);
            }));
      }),
      (n.prototype.hide = function (t) {
        t && t.preventDefault(),
          (t = e.Event("hide.bs.modal")),
          this.$element.trigger(t),
          this.isShown &&
            !t.isDefaultPrevented() &&
            ((this.isShown = !1),
            this.escape(),
            this.resize(),
            e(document).off("focusin.bs.modal"),
            this.$element
              .removeClass("in")
              .off("click.dismiss.bs.modal")
              .off("mouseup.dismiss.bs.modal"),
            this.$dialog.off("mousedown.dismiss.bs.modal"),
            e.support.transition && this.$element.hasClass("fade")
              ? this.$element
                  .one("bsTransitionEnd", e.proxy(this.hideModal, this))
                  .emulateTransitionEnd(n.TRANSITION_DURATION)
              : this.hideModal());
      }),
      (n.prototype.enforceFocus = function () {
        e(document)
          .off("focusin.bs.modal")
          .on(
            "focusin.bs.modal",
            e.proxy(function (e) {
              this.$element[0] === e.target ||
                this.$element.has(e.target).length ||
                this.$element.trigger("focus");
            }, this)
          );
      }),
      (n.prototype.escape = function () {
        this.isShown && this.options.keyboard
          ? this.$element.on(
              "keydown.dismiss.bs.modal",
              e.proxy(function (e) {
                27 == e.which && this.hide();
              }, this)
            )
          : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
      }),
      (n.prototype.resize = function () {
        this.isShown
          ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this))
          : e(window).off("resize.bs.modal");
      }),
      (n.prototype.hideModal = function () {
        var e = this;
        this.$element.hide(),
          this.backdrop(function () {
            e.$body.removeClass("modal-open"),
              e.resetAdjustments(),
              e.resetScrollbar(),
              e.$element.trigger("hidden.bs.modal");
          });
      }),
      (n.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
      }),
      (n.prototype.backdrop = function (t) {
        var i = this,
          r = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
          var o = e.support.transition && r;
          if (
            ((this.$backdrop = e(document.createElement("div"))
              .addClass("modal-backdrop " + r)
              .appendTo(this.$body)),
            this.$element.on(
              "click.dismiss.bs.modal",
              e.proxy(function (e) {
                return this.ignoreBackdropClick
                  ? void (this.ignoreBackdropClick = !1)
                  : void (
                      e.target === e.currentTarget &&
                      ("static" == this.options.backdrop
                        ? this.$element[0].focus()
                        : this.hide())
                    );
              }, this)
            ),
            o && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !t)
          )
            return;
          o
            ? this.$backdrop
                .one("bsTransitionEnd", t)
                .emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION)
            : t();
        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass("in");
          var s = function () {
            i.removeBackdrop(), t && t();
          };
          e.support.transition && this.$element.hasClass("fade")
            ? this.$backdrop
                .one("bsTransitionEnd", s)
                .emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION)
            : s();
        } else t && t();
      }),
      (n.prototype.handleUpdate = function () {
        this.adjustDialog();
      }),
      (n.prototype.adjustDialog = function () {
        var e =
          this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
          paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
          paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : "",
        });
      }),
      (n.prototype.resetAdjustments = function () {
        this.$element.css({ paddingLeft: "", paddingRight: "" });
      }),
      (n.prototype.checkScrollbar = function () {
        var e = window.innerWidth;
        if (!e) {
          var t = document.documentElement.getBoundingClientRect();
          e = t.right - Math.abs(t.left);
        }
        (this.bodyIsOverflowing = document.body.clientWidth < e),
          (this.scrollbarWidth = this.measureScrollbar());
      }),
      (n.prototype.setScrollbar = function () {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        (this.originalBodyPad = document.body.style.paddingRight || ""),
          this.bodyIsOverflowing &&
            this.$body.css("padding-right", e + this.scrollbarWidth);
      }),
      (n.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad);
      }),
      (n.prototype.measureScrollbar = function () {
        var e = document.createElement("div");
        (e.className = "modal-scrollbar-measure"), this.$body.append(e);
        var t = e.offsetWidth - e.clientWidth;
        return this.$body[0].removeChild(e), t;
      });
    var i = e.fn.modal;
    (e.fn.modal = t),
      (e.fn.modal.Constructor = n),
      (e.fn.modal.noConflict = function () {
        return (e.fn.modal = i), this;
      }),
      e(document).on(
        "click.bs.modal.data-api",
        '[data-toggle="modal"]',
        function (n) {
          var i = e(this),
            r = i.attr("href"),
            o = e(
              i.attr("data-target") || (r && r.replace(/.*(?=#[^\s]+$)/, ""))
            ),
            s = o.data("bs.modal")
              ? "toggle"
              : e.extend({ remote: !/#/.test(r) && r }, o.data(), i.data());
          i.is("a") && n.preventDefault(),
            o.one("show.bs.modal", function (e) {
              e.isDefaultPrevented() ||
                o.one("hidden.bs.modal", function () {
                  i.is(":visible") && i.trigger("focus");
                });
            }),
            t.call(o, s, this);
        }
      );
  })(jQuery),
  (function (e) {
    "use strict";
    var t = function (e, t) {
      (this.type = null),
        (this.options = null),
        (this.enabled = null),
        (this.timeout = null),
        (this.hoverState = null),
        (this.$element = null),
        (this.inState = null),
        this.init("tooltip", e, t);
    };
    (t.VERSION = "3.3.6"),
      (t.TRANSITION_DURATION = 150),
      (t.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: { selector: "body", padding: 0 },
      }),
      (t.prototype.init = function (t, n, i) {
        if (
          ((this.enabled = !0),
          (this.type = t),
          (this.$element = e(n)),
          (this.options = this.getOptions(i)),
          (this.$viewport =
            this.options.viewport &&
            e(
              e.isFunction(this.options.viewport)
                ? this.options.viewport.call(this, this.$element)
                : this.options.viewport.selector || this.options.viewport
            )),
          (this.inState = { click: !1, hover: !1, focus: !1 }),
          this.$element[0] instanceof document.constructor &&
            !this.options.selector)
        )
          throw new Error(
            "`selector` option must be specified when initializing " +
              this.type +
              " on the window.document object!"
          );
        for (var r = this.options.trigger.split(" "), o = r.length; o--; ) {
          var s = r[o];
          if ("click" == s)
            this.$element.on(
              "click." + this.type,
              this.options.selector,
              e.proxy(this.toggle, this)
            );
          else if ("manual" != s) {
            var a = "hover" == s ? "mouseenter" : "focusin",
              l = "hover" == s ? "mouseleave" : "focusout";
            this.$element.on(
              a + "." + this.type,
              this.options.selector,
              e.proxy(this.enter, this)
            ),
              this.$element.on(
                l + "." + this.type,
                this.options.selector,
                e.proxy(this.leave, this)
              );
          }
        }
        this.options.selector
          ? (this._options = e.extend({}, this.options, {
              trigger: "manual",
              selector: "",
            }))
          : this.fixTitle();
      }),
      (t.prototype.getDefaults = function () {
        return t.DEFAULTS;
      }),
      (t.prototype.getOptions = function (t) {
        return (
          (t = e.extend({}, this.getDefaults(), this.$element.data(), t))
            .delay &&
            "number" == typeof t.delay &&
            (t.delay = { show: t.delay, hide: t.delay }),
          t
        );
      }),
      (t.prototype.getDelegateOptions = function () {
        var t = {},
          n = this.getDefaults();
        return (
          this._options &&
            e.each(this._options, function (e, i) {
              n[e] != i && (t[e] = i);
            }),
          t
        );
      }),
      (t.prototype.enter = function (t) {
        var n =
          t instanceof this.constructor
            ? t
            : e(t.currentTarget).data("bs." + this.type);
        return (
          n ||
            ((n = new this.constructor(
              t.currentTarget,
              this.getDelegateOptions()
            )),
            e(t.currentTarget).data("bs." + this.type, n)),
          t instanceof e.Event &&
            (n.inState["focusin" == t.type ? "focus" : "hover"] = !0),
          n.tip().hasClass("in") || "in" == n.hoverState
            ? void (n.hoverState = "in")
            : (clearTimeout(n.timeout),
              (n.hoverState = "in"),
              n.options.delay && n.options.delay.show
                ? void (n.timeout = setTimeout(function () {
                    "in" == n.hoverState && n.show();
                  }, n.options.delay.show))
                : n.show())
        );
      }),
      (t.prototype.isInStateTrue = function () {
        for (var e in this.inState) if (this.inState[e]) return !0;
        return !1;
      }),
      (t.prototype.leave = function (t) {
        var n =
          t instanceof this.constructor
            ? t
            : e(t.currentTarget).data("bs." + this.type);
        return (
          n ||
            ((n = new this.constructor(
              t.currentTarget,
              this.getDelegateOptions()
            )),
            e(t.currentTarget).data("bs." + this.type, n)),
          t instanceof e.Event &&
            (n.inState["focusout" == t.type ? "focus" : "hover"] = !1),
          n.isInStateTrue()
            ? void 0
            : (clearTimeout(n.timeout),
              (n.hoverState = "out"),
              n.options.delay && n.options.delay.hide
                ? void (n.timeout = setTimeout(function () {
                    "out" == n.hoverState && n.hide();
                  }, n.options.delay.hide))
                : n.hide())
        );
      }),
      (t.prototype.show = function () {
        var n = e.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
          this.$element.trigger(n);
          var i = e.contains(
            this.$element[0].ownerDocument.documentElement,
            this.$element[0]
          );
          if (n.isDefaultPrevented() || !i) return;
          var r = this,
            o = this.tip(),
            s = this.getUID(this.type);
          this.setContent(),
            o.attr("id", s),
            this.$element.attr("aria-describedby", s),
            this.options.animation && o.addClass("fade");
          var a =
              "function" == typeof this.options.placement
                ? this.options.placement.call(this, o[0], this.$element[0])
                : this.options.placement,
            l = /\s?auto?\s?/i,
            c = l.test(a);
          c && (a = a.replace(l, "") || "top"),
            o
              .detach()
              .css({ top: 0, left: 0, display: "block" })
              .addClass(a)
              .data("bs." + this.type, this),
            this.options.container
              ? o.appendTo(this.options.container)
              : o.insertAfter(this.$element),
            this.$element.trigger("inserted.bs." + this.type);
          var u = this.getPosition(),
            p = o[0].offsetWidth,
            d = o[0].offsetHeight;
          if (c) {
            var f = a,
              h = this.getPosition(this.$viewport);
            (a =
              "bottom" == a && u.bottom + d > h.bottom
                ? "top"
                : "top" == a && u.top - d < h.top
                ? "bottom"
                : "right" == a && u.right + p > h.width
                ? "left"
                : "left" == a && u.left - p < h.left
                ? "right"
                : a),
              o.removeClass(f).addClass(a);
          }
          var v = this.getCalculatedOffset(a, u, p, d);
          this.applyPlacement(v, a);
          var m = function () {
            var e = r.hoverState;
            r.$element.trigger("shown.bs." + r.type),
              (r.hoverState = null),
              "out" == e && r.leave(r);
          };
          e.support.transition && this.$tip.hasClass("fade")
            ? o
                .one("bsTransitionEnd", m)
                .emulateTransitionEnd(t.TRANSITION_DURATION)
            : m();
        }
      }),
      (t.prototype.applyPlacement = function (t, n) {
        var i = this.tip(),
          r = i[0].offsetWidth,
          o = i[0].offsetHeight,
          s = parseInt(i.css("margin-top"), 10),
          a = parseInt(i.css("margin-left"), 10);
        isNaN(s) && (s = 0),
          isNaN(a) && (a = 0),
          (t.top += s),
          (t.left += a),
          e.offset.setOffset(
            i[0],
            e.extend(
              {
                using: function (e) {
                  i.css({ top: Math.round(e.top), left: Math.round(e.left) });
                },
              },
              t
            ),
            0
          ),
          i.addClass("in");
        var l = i[0].offsetWidth,
          c = i[0].offsetHeight;
        "top" == n && c != o && (t.top = t.top + o - c);
        var u = this.getViewportAdjustedDelta(n, t, l, c);
        u.left ? (t.left += u.left) : (t.top += u.top);
        var p = /top|bottom/.test(n),
          d = p ? 2 * u.left - r + l : 2 * u.top - o + c,
          f = p ? "offsetWidth" : "offsetHeight";
        i.offset(t), this.replaceArrow(d, i[0][f], p);
      }),
      (t.prototype.replaceArrow = function (e, t, n) {
        this.arrow()
          .css(n ? "left" : "top", 50 * (1 - e / t) + "%")
          .css(n ? "top" : "left", "");
      }),
      (t.prototype.setContent = function () {
        var e = this.tip(),
          t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t),
          e.removeClass("fade in top bottom left right");
      }),
      (t.prototype.hide = function (n) {
        function i() {
          "in" != r.hoverState && o.detach(),
            r.$element
              .removeAttr("aria-describedby")
              .trigger("hidden.bs." + r.type),
            n && n();
        }
        var r = this,
          o = e(this.$tip),
          s = e.Event("hide.bs." + this.type);
        return (
          this.$element.trigger(s),
          s.isDefaultPrevented()
            ? void 0
            : (o.removeClass("in"),
              e.support.transition && o.hasClass("fade")
                ? o
                    .one("bsTransitionEnd", i)
                    .emulateTransitionEnd(t.TRANSITION_DURATION)
                : i(),
              (this.hoverState = null),
              this)
        );
      }),
      (t.prototype.fixTitle = function () {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) &&
          e
            .attr("data-original-title", e.attr("title") || "")
            .attr("title", "");
      }),
      (t.prototype.hasContent = function () {
        return this.getTitle();
      }),
      (t.prototype.getPosition = function (t) {
        var n = (t = t || this.$element)[0],
          i = "BODY" == n.tagName,
          r = n.getBoundingClientRect();
        null == r.width &&
          (r = e.extend({}, r, {
            width: r.right - r.left,
            height: r.bottom - r.top,
          }));
        var o = i ? { top: 0, left: 0 } : t.offset(),
          s = {
            scroll: i
              ? document.documentElement.scrollTop || document.body.scrollTop
              : t.scrollTop(),
          },
          a = i
            ? { width: e(window).width(), height: e(window).height() }
            : null;
        return e.extend({}, r, s, a, o);
      }),
      (t.prototype.getCalculatedOffset = function (e, t, n, i) {
        return "bottom" == e
          ? { top: t.top + t.height, left: t.left + t.width / 2 - n / 2 }
          : "top" == e
          ? { top: t.top - i, left: t.left + t.width / 2 - n / 2 }
          : "left" == e
          ? { top: t.top + t.height / 2 - i / 2, left: t.left - n }
          : { top: t.top + t.height / 2 - i / 2, left: t.left + t.width };
      }),
      (t.prototype.getViewportAdjustedDelta = function (e, t, n, i) {
        var r = { top: 0, left: 0 };
        if (!this.$viewport) return r;
        var o = (this.options.viewport && this.options.viewport.padding) || 0,
          s = this.getPosition(this.$viewport);
        if (/right|left/.test(e)) {
          var a = t.top - o - s.scroll,
            l = t.top + o - s.scroll + i;
          a < s.top
            ? (r.top = s.top - a)
            : l > s.top + s.height && (r.top = s.top + s.height - l);
        } else {
          var c = t.left - o,
            u = t.left + o + n;
          c < s.left
            ? (r.left = s.left - c)
            : u > s.right && (r.left = s.left + s.width - u);
        }
        return r;
      }),
      (t.prototype.getTitle = function () {
        var e = this.$element,
          t = this.options;
        return (
          e.attr("data-original-title") ||
          ("function" == typeof t.title ? t.title.call(e[0]) : t.title)
        );
      }),
      (t.prototype.getUID = function (e) {
        do {
          e += ~~(1e6 * Math.random());
        } while (document.getElementById(e));
        return e;
      }),
      (t.prototype.tip = function () {
        if (
          !this.$tip &&
          ((this.$tip = e(this.options.template)), 1 != this.$tip.length)
        )
          throw new Error(
            this.type +
              " `template` option must consist of exactly 1 top-level element!"
          );
        return this.$tip;
      }),
      (t.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
      }),
      (t.prototype.enable = function () {
        this.enabled = !0;
      }),
      (t.prototype.disable = function () {
        this.enabled = !1;
      }),
      (t.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled;
      }),
      (t.prototype.toggle = function (t) {
        var n = this;
        t &&
          ((n = e(t.currentTarget).data("bs." + this.type)) ||
            ((n = new this.constructor(
              t.currentTarget,
              this.getDelegateOptions()
            )),
            e(t.currentTarget).data("bs." + this.type, n))),
          t
            ? ((n.inState.click = !n.inState.click),
              n.isInStateTrue() ? n.enter(n) : n.leave(n))
            : n.tip().hasClass("in")
            ? n.leave(n)
            : n.enter(n);
      }),
      (t.prototype.destroy = function () {
        var e = this;
        clearTimeout(this.timeout),
          this.hide(function () {
            e.$element.off("." + e.type).removeData("bs." + e.type),
              e.$tip && e.$tip.detach(),
              (e.$tip = null),
              (e.$arrow = null),
              (e.$viewport = null);
          });
      });
    var n = e.fn.tooltip;
    (e.fn.tooltip = function (n) {
      return this.each(function () {
        var i = e(this),
          r = i.data("bs.tooltip"),
          o = "object" == typeof n && n;
        (r || !/destroy|hide/.test(n)) &&
          (r || i.data("bs.tooltip", (r = new t(this, o))),
          "string" == typeof n && r[n]());
      });
    }),
      (e.fn.tooltip.Constructor = t),
      (e.fn.tooltip.noConflict = function () {
        return (e.fn.tooltip = n), this;
      });
  })(jQuery),
  (function (e) {
    "use strict";
    var t = function (e, t) {
      this.init("popover", e, t);
    };
    if (!e.fn.tooltip) throw new Error("Popover requires tooltip.js");
    (t.VERSION = "3.3.6"),
      (t.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
      })),
      (t.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype)),
      (t.prototype.constructor = t),
      (t.prototype.getDefaults = function () {
        return t.DEFAULTS;
      }),
      (t.prototype.setContent = function () {
        var e = this.tip(),
          t = this.getTitle(),
          n = this.getContent();
        e.find(".popover-title")[this.options.html ? "html" : "text"](t),
          e
            .find(".popover-content")
            .children()
            .detach()
            .end()
            [
              this.options.html
                ? "string" == typeof n
                  ? "html"
                  : "append"
                : "text"
            ](n),
          e.removeClass("fade top bottom left right in"),
          e.find(".popover-title").html() || e.find(".popover-title").hide();
      }),
      (t.prototype.hasContent = function () {
        return this.getTitle() || this.getContent();
      }),
      (t.prototype.getContent = function () {
        var e = this.$element,
          t = this.options;
        return (
          e.attr("data-content") ||
          ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
        );
      }),
      (t.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
      });
    var n = e.fn.popover;
    (e.fn.popover = function (n) {
      return this.each(function () {
        var i = e(this),
          r = i.data("bs.popover"),
          o = "object" == typeof n && n;
        (r || !/destroy|hide/.test(n)) &&
          (r || i.data("bs.popover", (r = new t(this, o))),
          "string" == typeof n && r[n]());
      });
    }),
      (e.fn.popover.Constructor = t),
      (e.fn.popover.noConflict = function () {
        return (e.fn.popover = n), this;
      });
  })(jQuery),
  (function (e) {
    "use strict";
    function t(n, i) {
      (this.$body = e(document.body)),
        (this.$scrollElement = e(e(n).is(document.body) ? window : n)),
        (this.options = e.extend({}, t.DEFAULTS, i)),
        (this.selector = (this.options.target || "") + " .nav li > a"),
        (this.offsets = []),
        (this.targets = []),
        (this.activeTarget = null),
        (this.scrollHeight = 0),
        this.$scrollElement.on(
          "scroll.bs.scrollspy",
          e.proxy(this.process, this)
        ),
        this.refresh(),
        this.process();
    }
    function n(n) {
      return this.each(function () {
        var i = e(this),
          r = i.data("bs.scrollspy"),
          o = "object" == typeof n && n;
        r || i.data("bs.scrollspy", (r = new t(this, o))),
          "string" == typeof n && r[n]();
      });
    }
    (t.VERSION = "3.3.6"),
      (t.DEFAULTS = { offset: 10 }),
      (t.prototype.getScrollHeight = function () {
        return (
          this.$scrollElement[0].scrollHeight ||
          Math.max(
            this.$body[0].scrollHeight,
            document.documentElement.scrollHeight
          )
        );
      }),
      (t.prototype.refresh = function () {
        var t = this,
          n = "offset",
          i = 0;
        (this.offsets = []),
          (this.targets = []),
          (this.scrollHeight = this.getScrollHeight()),
          e.isWindow(this.$scrollElement[0]) ||
            ((n = "position"), (i = this.$scrollElement.scrollTop())),
          this.$body
            .find(this.selector)
            .map(function () {
              var t = e(this),
                r = t.data("target") || t.attr("href"),
                o = /^#./.test(r) && e(r);
              return (
                (o && o.length && o.is(":visible") && [[o[n]().top + i, r]]) ||
                null
              );
            })
            .sort(function (e, t) {
              return e[0] - t[0];
            })
            .each(function () {
              t.offsets.push(this[0]), t.targets.push(this[1]);
            });
      }),
      (t.prototype.process = function () {
        var e,
          t = this.$scrollElement.scrollTop() + this.options.offset,
          n = this.getScrollHeight(),
          i = this.options.offset + n - this.$scrollElement.height(),
          r = this.offsets,
          o = this.targets,
          s = this.activeTarget;
        if ((this.scrollHeight != n && this.refresh(), t >= i))
          return s != (e = o[o.length - 1]) && this.activate(e);
        if (s && t < r[0]) return (this.activeTarget = null), this.clear();
        for (e = r.length; e--; )
          s != o[e] &&
            t >= r[e] &&
            (void 0 === r[e + 1] || t < r[e + 1]) &&
            this.activate(o[e]);
      }),
      (t.prototype.activate = function (t) {
        (this.activeTarget = t), this.clear();
        var n =
            this.selector +
            '[data-target="' +
            t +
            '"],' +
            this.selector +
            '[href="' +
            t +
            '"]',
          i = e(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length &&
          (i = i.closest("li.dropdown").addClass("active")),
          i.trigger("activate.bs.scrollspy");
      }),
      (t.prototype.clear = function () {
        e(this.selector)
          .parentsUntil(this.options.target, ".active")
          .removeClass("active");
      });
    var i = e.fn.scrollspy;
    (e.fn.scrollspy = n),
      (e.fn.scrollspy.Constructor = t),
      (e.fn.scrollspy.noConflict = function () {
        return (e.fn.scrollspy = i), this;
      }),
      e(window).on("load.bs.scrollspy.data-api", function () {
        e('[data-spy="scroll"]').each(function () {
          var t = e(this);
          n.call(t, t.data());
        });
      });
  })(jQuery),
  (function (e) {
    "use strict";
    function t(t) {
      return this.each(function () {
        var i = e(this),
          r = i.data("bs.tab");
        r || i.data("bs.tab", (r = new n(this))),
          "string" == typeof t && r[t]();
      });
    }
    var n = function (t) {
      this.element = e(t);
    };
    (n.VERSION = "3.3.6"),
      (n.TRANSITION_DURATION = 150),
      (n.prototype.show = function () {
        var t = this.element,
          n = t.closest("ul:not(.dropdown-menu)"),
          i = t.data("target");
        if (
          (i || (i = (i = t.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, "")),
          !t.parent("li").hasClass("active"))
        ) {
          var r = n.find(".active:last a"),
            o = e.Event("hide.bs.tab", { relatedTarget: t[0] }),
            s = e.Event("show.bs.tab", { relatedTarget: r[0] });
          if (
            (r.trigger(o),
            t.trigger(s),
            !s.isDefaultPrevented() && !o.isDefaultPrevented())
          ) {
            var a = e(i);
            this.activate(t.closest("li"), n),
              this.activate(a, a.parent(), function () {
                r.trigger({ type: "hidden.bs.tab", relatedTarget: t[0] }),
                  t.trigger({ type: "shown.bs.tab", relatedTarget: r[0] });
              });
          }
        }
      }),
      (n.prototype.activate = function (t, i, r) {
        function o() {
          s
            .removeClass("active")
            .find("> .dropdown-menu > .active")
            .removeClass("active")
            .end()
            .find('[data-toggle="tab"]')
            .attr("aria-expanded", !1),
            t
              .addClass("active")
              .find('[data-toggle="tab"]')
              .attr("aria-expanded", !0),
            a ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"),
            t.parent(".dropdown-menu").length &&
              t
                .closest("li.dropdown")
                .addClass("active")
                .end()
                .find('[data-toggle="tab"]')
                .attr("aria-expanded", !0),
            r && r();
        }
        var s = i.find("> .active"),
          a =
            r &&
            e.support.transition &&
            ((s.length && s.hasClass("fade")) || !!i.find("> .fade").length);
        s.length && a
          ? s
              .one("bsTransitionEnd", o)
              .emulateTransitionEnd(n.TRANSITION_DURATION)
          : o(),
          s.removeClass("in");
      });
    var i = e.fn.tab;
    (e.fn.tab = t),
      (e.fn.tab.Constructor = n),
      (e.fn.tab.noConflict = function () {
        return (e.fn.tab = i), this;
      });
    var r = function (n) {
      n.preventDefault(), t.call(e(this), "show");
    };
    e(document)
      .on("click.bs.tab.data-api", '[data-toggle="tab"]', r)
      .on("click.bs.tab.data-api", '[data-toggle="pill"]', r);
  })(jQuery),
  (function (e) {
    "use strict";
    function t(t) {
      return this.each(function () {
        var i = e(this),
          r = i.data("bs.affix"),
          o = "object" == typeof t && t;
        r || i.data("bs.affix", (r = new n(this, o))),
          "string" == typeof t && r[t]();
      });
    }
    var n = function (t, i) {
      (this.options = e.extend({}, n.DEFAULTS, i)),
        (this.$target = e(this.options.target)
          .on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this))
          .on(
            "click.bs.affix.data-api",
            e.proxy(this.checkPositionWithEventLoop, this)
          )),
        (this.$element = e(t)),
        (this.affixed = null),
        (this.unpin = null),
        (this.pinnedOffset = null),
        this.checkPosition();
    };
    (n.VERSION = "3.3.6"),
      (n.RESET = "affix affix-top affix-bottom"),
      (n.DEFAULTS = { offset: 0, target: window }),
      (n.prototype.getState = function (e, t, n, i) {
        var r = this.$target.scrollTop(),
          o = this.$element.offset(),
          s = this.$target.height();
        if (null != n && "top" == this.affixed) return n > r && "top";
        if ("bottom" == this.affixed)
          return null != n
            ? !(r + this.unpin <= o.top) && "bottom"
            : !(e - i >= r + s) && "bottom";
        var a = null == this.affixed,
          l = a ? r : o.top;
        return null != n && n >= r
          ? "top"
          : null != i && l + (a ? s : t) >= e - i && "bottom";
      }),
      (n.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var e = this.$target.scrollTop(),
          t = this.$element.offset();
        return (this.pinnedOffset = t.top - e);
      }),
      (n.prototype.checkPositionWithEventLoop = function () {
        setTimeout(e.proxy(this.checkPosition, this), 1);
      }),
      (n.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
          var t = this.$element.height(),
            i = this.options.offset,
            r = i.top,
            o = i.bottom,
            s = Math.max(e(document).height(), e(document.body).height());
          "object" != typeof i && (o = r = i),
            "function" == typeof r && (r = i.top(this.$element)),
            "function" == typeof o && (o = i.bottom(this.$element));
          var a = this.getState(s, t, r, o);
          if (this.affixed != a) {
            null != this.unpin && this.$element.css("top", "");
            var l = "affix" + (a ? "-" + a : ""),
              c = e.Event(l + ".bs.affix");
            if ((this.$element.trigger(c), c.isDefaultPrevented())) return;
            (this.affixed = a),
              (this.unpin = "bottom" == a ? this.getPinnedOffset() : null),
              this.$element
                .removeClass(n.RESET)
                .addClass(l)
                .trigger(l.replace("affix", "affixed") + ".bs.affix");
          }
          "bottom" == a && this.$element.offset({ top: s - t - o });
        }
      });
    var i = e.fn.affix;
    (e.fn.affix = t),
      (e.fn.affix.Constructor = n),
      (e.fn.affix.noConflict = function () {
        return (e.fn.affix = i), this;
      }),
      e(window).on("load", function () {
        e('[data-spy="affix"]').each(function () {
          var n = e(this),
            i = n.data();
          (i.offset = i.offset || {}),
            null != i.offsetBottom && (i.offset.bottom = i.offsetBottom),
            null != i.offsetTop && (i.offset.top = i.offsetTop),
            t.call(n, i);
        });
      });
  })(jQuery);
var pJS = function (e, t) {
  var n = document.querySelector("#" + e + " > .particles-js-canvas-el");
  this.pJS = {
    canvas: { el: n, w: n.offsetWidth, h: n.offsetHeight },
    particles: {
      number: { value: 400, density: { enable: !0, value_area: 800 } },
      color: { value: "#fff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#ff0000" },
        polygon: { nb_sides: 5 },
        image: { src: "", width: 100, height: 100 },
      },
      opacity: {
        value: 1,
        random: !1,
        anim: { enable: !1, speed: 2, opacity_min: 0, sync: !1 },
      },
      size: {
        value: 20,
        random: !1,
        anim: { enable: !1, speed: 20, size_min: 0, sync: !1 },
      },
      line_linked: {
        enable: !0,
        distance: 100,
        color: "#fff",
        opacity: 1,
        width: 1,
      },
      move: {
        enable: !0,
        speed: 2,
        direction: "none",
        random: !1,
        straight: !1,
        out_mode: "out",
        bounce: !1,
        attract: { enable: !1, rotateX: 3e3, rotateY: 3e3 },
      },
      array: [],
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: !0, mode: "grab" },
        onclick: { enable: !0, mode: "push" },
        resize: !0,
      },
      modes: {
        grab: { distance: 100, line_linked: { opacity: 1 } },
        bubble: { distance: 200, size: 80, duration: 0.4 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
      mouse: {},
    },
    retina_detect: !1,
    fn: { interact: {}, modes: {}, vendors: {} },
    tmp: {},
  };
  var i = this.pJS;
  t && Object.deepExtend(i, t),
    (i.tmp.obj = {
      size_value: i.particles.size.value,
      size_anim_speed: i.particles.size.anim.speed,
      move_speed: i.particles.move.speed,
      line_linked_distance: i.particles.line_linked.distance,
      line_linked_width: i.particles.line_linked.width,
      mode_grab_distance: i.interactivity.modes.grab.distance,
      mode_bubble_distance: i.interactivity.modes.bubble.distance,
      mode_bubble_size: i.interactivity.modes.bubble.size,
      mode_repulse_distance: i.interactivity.modes.repulse.distance,
    }),
    (i.fn.retinaInit = function () {
      i.retina_detect && window.devicePixelRatio > 1
        ? ((i.canvas.pxratio = window.devicePixelRatio), (i.tmp.retina = !0))
        : ((i.canvas.pxratio = 1), (i.tmp.retina = !1)),
        (i.canvas.w = i.canvas.el.offsetWidth * i.canvas.pxratio),
        (i.canvas.h = i.canvas.el.offsetHeight * i.canvas.pxratio),
        (i.particles.size.value = i.tmp.obj.size_value * i.canvas.pxratio),
        (i.particles.size.anim.speed =
          i.tmp.obj.size_anim_speed * i.canvas.pxratio),
        (i.particles.move.speed = i.tmp.obj.move_speed * i.canvas.pxratio),
        (i.particles.line_linked.distance =
          i.tmp.obj.line_linked_distance * i.canvas.pxratio),
        (i.interactivity.modes.grab.distance =
          i.tmp.obj.mode_grab_distance * i.canvas.pxratio),
        (i.interactivity.modes.bubble.distance =
          i.tmp.obj.mode_bubble_distance * i.canvas.pxratio),
        (i.particles.line_linked.width =
          i.tmp.obj.line_linked_width * i.canvas.pxratio),
        (i.interactivity.modes.bubble.size =
          i.tmp.obj.mode_bubble_size * i.canvas.pxratio),
        (i.interactivity.modes.repulse.distance =
          i.tmp.obj.mode_repulse_distance * i.canvas.pxratio);
    }),
    (i.fn.canvasInit = function () {
      i.canvas.ctx = i.canvas.el.getContext("2d");
    }),
    (i.fn.canvasSize = function () {
      (i.canvas.el.width = i.canvas.w),
        (i.canvas.el.height = i.canvas.h),
        i &&
          i.interactivity.events.resize &&
          window.addEventListener("resize", function () {
            (i.canvas.w = i.canvas.el.offsetWidth),
              (i.canvas.h = i.canvas.el.offsetHeight),
              i.tmp.retina &&
                ((i.canvas.w *= i.canvas.pxratio),
                (i.canvas.h *= i.canvas.pxratio)),
              (i.canvas.el.width = i.canvas.w),
              (i.canvas.el.height = i.canvas.h),
              i.particles.move.enable ||
                (i.fn.particlesEmpty(),
                i.fn.particlesCreate(),
                i.fn.particlesDraw(),
                i.fn.vendors.densityAutoParticles()),
              i.fn.vendors.densityAutoParticles();
          });
    }),
    (i.fn.canvasPaint = function () {
      i.canvas.ctx.fillRect(0, 0, i.canvas.w, i.canvas.h);
    }),
    (i.fn.canvasClear = function () {
      i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h);
    }),
    (i.fn.particle = function (e, t, n) {
      if (
        ((this.radius =
          (i.particles.size.random ? Math.random() : 1) *
          i.particles.size.value),
        i.particles.size.anim.enable &&
          ((this.size_status = !1),
          (this.vs = i.particles.size.anim.speed / 100),
          i.particles.size.anim.sync || (this.vs = this.vs * Math.random())),
        (this.x = n ? n.x : Math.random() * i.canvas.w),
        (this.y = n ? n.y : Math.random() * i.canvas.h),
        this.x > i.canvas.w - 2 * this.radius
          ? (this.x = this.x - this.radius)
          : this.x < 2 * this.radius && (this.x = this.x + this.radius),
        this.y > i.canvas.h - 2 * this.radius
          ? (this.y = this.y - this.radius)
          : this.y < 2 * this.radius && (this.y = this.y + this.radius),
        i.particles.move.bounce && i.fn.vendors.checkOverlap(this, n),
        (this.color = {}),
        "object" == typeof e.value)
      )
        if (e.value instanceof Array) {
          var r =
            e.value[Math.floor(Math.random() * i.particles.color.value.length)];
          this.color.rgb = hexToRgb(r);
        } else
          null != e.value.r &&
            null != e.value.g &&
            null != e.value.b &&
            (this.color.rgb = { r: e.value.r, g: e.value.g, b: e.value.b }),
            null != e.value.h &&
              null != e.value.s &&
              null != e.value.l &&
              (this.color.hsl = { h: e.value.h, s: e.value.s, l: e.value.l });
      else
        "random" == e.value
          ? (this.color.rgb = {
              r: Math.floor(256 * Math.random()) + 0,
              g: Math.floor(256 * Math.random()) + 0,
              b: Math.floor(256 * Math.random()) + 0,
            })
          : "string" == typeof e.value &&
            ((this.color = e), (this.color.rgb = hexToRgb(this.color.value)));
      (this.opacity =
        (i.particles.opacity.random ? Math.random() : 1) *
        i.particles.opacity.value),
        i.particles.opacity.anim.enable &&
          ((this.opacity_status = !1),
          (this.vo = i.particles.opacity.anim.speed / 100),
          i.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
      var o = {};
      switch (i.particles.move.direction) {
        case "top":
          o = { x: 0, y: -1 };
          break;
        case "top-right":
          o = { x: 0.5, y: -0.5 };
          break;
        case "right":
          o = { x: 1, y: -0 };
          break;
        case "bottom-right":
          o = { x: 0.5, y: 0.5 };
          break;
        case "bottom":
          o = { x: 0, y: 1 };
          break;
        case "bottom-left":
          o = { x: -0.5, y: 1 };
          break;
        case "left":
          o = { x: -1, y: 0 };
          break;
        case "top-left":
          o = { x: -0.5, y: -0.5 };
          break;
        default:
          o = { x: 0, y: 0 };
      }
      i.particles.move.straight
        ? ((this.vx = o.x),
          (this.vy = o.y),
          i.particles.move.random &&
            ((this.vx = this.vx * Math.random()),
            (this.vy = this.vy * Math.random())))
        : ((this.vx = o.x + Math.random() - 0.5),
          (this.vy = o.y + Math.random() - 0.5)),
        (this.vx_i = this.vx),
        (this.vy_i = this.vy);
      var s = i.particles.shape.type;
      if ("object" == typeof s) {
        if (s instanceof Array) {
          var a = s[Math.floor(Math.random() * s.length)];
          this.shape = a;
        }
      } else this.shape = s;
      if ("image" == this.shape) {
        var l = i.particles.shape;
        (this.img = {
          src: l.image.src,
          ratio: l.image.width / l.image.height,
        }),
          this.img.ratio || (this.img.ratio = 1),
          "svg" == i.tmp.img_type &&
            null != i.tmp.source_svg &&
            (i.fn.vendors.createSvgImg(this),
            i.tmp.pushing && (this.img.loaded = !1));
      }
    }),
    (i.fn.particle.prototype.draw = function () {
      var e = this;
      if (null != e.radius_bubble) var t = e.radius_bubble;
      else t = e.radius;
      if (null != e.opacity_bubble) var n = e.opacity_bubble;
      else n = e.opacity;
      if (e.color.rgb)
        var r =
          "rgba(" +
          e.color.rgb.r +
          "," +
          e.color.rgb.g +
          "," +
          e.color.rgb.b +
          "," +
          n +
          ")";
      else
        r =
          "hsla(" +
          e.color.hsl.h +
          "," +
          e.color.hsl.s +
          "%," +
          e.color.hsl.l +
          "%," +
          n +
          ")";
      switch (
        ((i.canvas.ctx.fillStyle = r), i.canvas.ctx.beginPath(), e.shape)
      ) {
        case "circle":
          i.canvas.ctx.arc(e.x, e.y, t, 0, 2 * Math.PI, !1);
          break;
        case "edge":
          i.canvas.ctx.rect(e.x - t, e.y - t, 2 * t, 2 * t);
          break;
        case "triangle":
          i.fn.vendors.drawShape(
            i.canvas.ctx,
            e.x - t,
            e.y + t / 1.66,
            2 * t,
            3,
            2
          );
          break;
        case "polygon":
          i.fn.vendors.drawShape(
            i.canvas.ctx,
            e.x - t / (i.particles.shape.polygon.nb_sides / 3.5),
            e.y - t / 0.76,
            (2.66 * t) / (i.particles.shape.polygon.nb_sides / 3),
            i.particles.shape.polygon.nb_sides,
            1
          );
          break;
        case "star":
          i.fn.vendors.drawShape(
            i.canvas.ctx,
            e.x - (2 * t) / (i.particles.shape.polygon.nb_sides / 4),
            e.y - t / 1.52,
            (2 * t * 2.66) / (i.particles.shape.polygon.nb_sides / 3),
            i.particles.shape.polygon.nb_sides,
            2
          );
          break;
        case "image":
          if ("svg" == i.tmp.img_type) var o = e.img.obj;
          else o = i.tmp.img_obj;
          o &&
            i.canvas.ctx.drawImage(
              o,
              e.x - t,
              e.y - t,
              2 * t,
              (2 * t) / e.img.ratio
            );
      }
      i.canvas.ctx.closePath(),
        i.particles.shape.stroke.width > 0 &&
          ((i.canvas.ctx.strokeStyle = i.particles.shape.stroke.color),
          (i.canvas.ctx.lineWidth = i.particles.shape.stroke.width),
          i.canvas.ctx.stroke()),
        i.canvas.ctx.fill();
    }),
    (i.fn.particlesCreate = function () {
      for (var e = 0; e < i.particles.number.value; e++)
        i.particles.array.push(
          new i.fn.particle(i.particles.color, i.particles.opacity.value)
        );
    }),
    (i.fn.particlesUpdate = function () {
      for (var e = 0; e < i.particles.array.length; e++) {
        var t = i.particles.array[e];
        if (i.particles.move.enable) {
          var n = i.particles.move.speed / 2;
          (t.x += t.vx * n), (t.y += t.vy * n);
        }
        if (
          (i.particles.opacity.anim.enable &&
            (1 == t.opacity_status
              ? (t.opacity >= i.particles.opacity.value &&
                  (t.opacity_status = !1),
                (t.opacity += t.vo))
              : (t.opacity <= i.particles.opacity.anim.opacity_min &&
                  (t.opacity_status = !0),
                (t.opacity -= t.vo)),
            t.opacity < 0 && (t.opacity = 0)),
          i.particles.size.anim.enable &&
            (1 == t.size_status
              ? (t.radius >= i.particles.size.value && (t.size_status = !1),
                (t.radius += t.vs))
              : (t.radius <= i.particles.size.anim.size_min &&
                  (t.size_status = !0),
                (t.radius -= t.vs)),
            t.radius < 0 && (t.radius = 0)),
          "bounce" == i.particles.move.out_mode)
        )
          var r = {
            x_left: t.radius,
            x_right: i.canvas.w,
            y_top: t.radius,
            y_bottom: i.canvas.h,
          };
        else
          r = {
            x_left: -t.radius,
            x_right: i.canvas.w + t.radius,
            y_top: -t.radius,
            y_bottom: i.canvas.h + t.radius,
          };
        switch (
          (t.x - t.radius > i.canvas.w
            ? ((t.x = r.x_left), (t.y = Math.random() * i.canvas.h))
            : t.x + t.radius < 0 &&
              ((t.x = r.x_right), (t.y = Math.random() * i.canvas.h)),
          t.y - t.radius > i.canvas.h
            ? ((t.y = r.y_top), (t.x = Math.random() * i.canvas.w))
            : t.y + t.radius < 0 &&
              ((t.y = r.y_bottom), (t.x = Math.random() * i.canvas.w)),
          i.particles.move.out_mode)
        ) {
          case "bounce":
            t.x + t.radius > i.canvas.w
              ? (t.vx = -t.vx)
              : t.x - t.radius < 0 && (t.vx = -t.vx),
              t.y + t.radius > i.canvas.h
                ? (t.vy = -t.vy)
                : t.y - t.radius < 0 && (t.vy = -t.vy);
        }
        if (
          (isInArray("grab", i.interactivity.events.onhover.mode) &&
            i.fn.modes.grabParticle(t),
          (isInArray("bubble", i.interactivity.events.onhover.mode) ||
            isInArray("bubble", i.interactivity.events.onclick.mode)) &&
            i.fn.modes.bubbleParticle(t),
          (isInArray("repulse", i.interactivity.events.onhover.mode) ||
            isInArray("repulse", i.interactivity.events.onclick.mode)) &&
            i.fn.modes.repulseParticle(t),
          i.particles.line_linked.enable || i.particles.move.attract.enable)
        )
          for (var o = e + 1; o < i.particles.array.length; o++) {
            var s = i.particles.array[o];
            i.particles.line_linked.enable && i.fn.interact.linkParticles(t, s),
              i.particles.move.attract.enable &&
                i.fn.interact.attractParticles(t, s),
              i.particles.move.bounce && i.fn.interact.bounceParticles(t, s);
          }
      }
    }),
    (i.fn.particlesDraw = function () {
      i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h),
        i.fn.particlesUpdate();
      for (var e = 0; e < i.particles.array.length; e++) {
        i.particles.array[e].draw();
      }
    }),
    (i.fn.particlesEmpty = function () {
      i.particles.array = [];
    }),
    (i.fn.particlesRefresh = function () {
      cancelRequestAnimFrame(i.fn.checkAnimFrame),
        cancelRequestAnimFrame(i.fn.drawAnimFrame),
        (i.tmp.source_svg = void 0),
        (i.tmp.img_obj = void 0),
        (i.tmp.count_svg = 0),
        i.fn.particlesEmpty(),
        i.fn.canvasClear(),
        i.fn.vendors.start();
    }),
    (i.fn.interact.linkParticles = function (e, t) {
      var n = e.x - t.x,
        r = e.y - t.y,
        o = Math.sqrt(n * n + r * r);
      if (o <= i.particles.line_linked.distance) {
        var s =
          i.particles.line_linked.opacity -
          o /
            (1 / i.particles.line_linked.opacity) /
            i.particles.line_linked.distance;
        if (s > 0) {
          var a = i.particles.line_linked.color_rgb_line;
          (i.canvas.ctx.strokeStyle =
            "rgba(" + a.r + "," + a.g + "," + a.b + "," + s + ")"),
            (i.canvas.ctx.lineWidth = i.particles.line_linked.width),
            i.canvas.ctx.beginPath(),
            i.canvas.ctx.moveTo(e.x, e.y),
            i.canvas.ctx.lineTo(t.x, t.y),
            i.canvas.ctx.stroke(),
            i.canvas.ctx.closePath();
        }
      }
    }),
    (i.fn.interact.attractParticles = function (e, t) {
      var n = e.x - t.x,
        r = e.y - t.y;
      if (Math.sqrt(n * n + r * r) <= i.particles.line_linked.distance) {
        var o = n / (1e3 * i.particles.move.attract.rotateX),
          s = r / (1e3 * i.particles.move.attract.rotateY);
        (e.vx -= o), (e.vy -= s), (t.vx += o), (t.vy += s);
      }
    }),
    (i.fn.interact.bounceParticles = function (e, t) {
      var n = e.x - t.x,
        i = e.y - t.y,
        r = Math.sqrt(n * n + i * i);
      e.radius + t.radius >= r &&
        ((e.vx = -e.vx), (e.vy = -e.vy), (t.vx = -t.vx), (t.vy = -t.vy));
    }),
    (i.fn.modes.pushParticles = function (e, t) {
      i.tmp.pushing = !0;
      for (var n = 0; e > n; n++)
        i.particles.array.push(
          new i.fn.particle(i.particles.color, i.particles.opacity.value, {
            x: t ? t.pos_x : Math.random() * i.canvas.w,
            y: t ? t.pos_y : Math.random() * i.canvas.h,
          })
        ),
          n == e - 1 &&
            (i.particles.move.enable || i.fn.particlesDraw(),
            (i.tmp.pushing = !1));
    }),
    (i.fn.modes.removeParticles = function (e) {
      i.particles.array.splice(0, e),
        i.particles.move.enable || i.fn.particlesDraw();
    }),
    (i.fn.modes.bubbleParticle = function (e) {
      function t() {
        (e.opacity_bubble = e.opacity), (e.radius_bubble = e.radius);
      }
      function n(t, n, r, o, s) {
        if (t != n)
          if (i.tmp.bubble_duration_end) {
            if (null != r)
              (l =
                t +
                (t -
                  (o - (p * (o - t)) / i.interactivity.modes.bubble.duration))),
                "size" == s && (e.radius_bubble = l),
                "opacity" == s && (e.opacity_bubble = l);
          } else if (u <= i.interactivity.modes.bubble.distance) {
            if (null != r) var a = r;
            else a = o;
            if (a != t) {
              var l = o - (p * (o - t)) / i.interactivity.modes.bubble.duration;
              "size" == s && (e.radius_bubble = l),
                "opacity" == s && (e.opacity_bubble = l);
            }
          } else
            "size" == s && (e.radius_bubble = void 0),
              "opacity" == s && (e.opacity_bubble = void 0);
      }
      if (
        i.interactivity.events.onhover.enable &&
        isInArray("bubble", i.interactivity.events.onhover.mode)
      ) {
        var r = e.x - i.interactivity.mouse.pos_x,
          o = e.y - i.interactivity.mouse.pos_y,
          s =
            1 -
            (u = Math.sqrt(r * r + o * o)) /
              i.interactivity.modes.bubble.distance;
        if (u <= i.interactivity.modes.bubble.distance) {
          if (s >= 0 && "mousemove" == i.interactivity.status) {
            if (i.interactivity.modes.bubble.size != i.particles.size.value)
              if (i.interactivity.modes.bubble.size > i.particles.size.value) {
                (l = e.radius + i.interactivity.modes.bubble.size * s) >= 0 &&
                  (e.radius_bubble = l);
              } else {
                var a = e.radius - i.interactivity.modes.bubble.size,
                  l = e.radius - a * s;
                e.radius_bubble = l > 0 ? l : 0;
              }
            if (
              i.interactivity.modes.bubble.opacity != i.particles.opacity.value
            )
              if (
                i.interactivity.modes.bubble.opacity > i.particles.opacity.value
              ) {
                (c = i.interactivity.modes.bubble.opacity * s) > e.opacity &&
                  c <= i.interactivity.modes.bubble.opacity &&
                  (e.opacity_bubble = c);
              } else {
                var c;
                (c =
                  e.opacity -
                  (i.particles.opacity.value -
                    i.interactivity.modes.bubble.opacity) *
                    s) < e.opacity &&
                  c >= i.interactivity.modes.bubble.opacity &&
                  (e.opacity_bubble = c);
              }
          }
        } else t();
        "mouseleave" == i.interactivity.status && t();
      } else if (
        i.interactivity.events.onclick.enable &&
        isInArray("bubble", i.interactivity.events.onclick.mode)
      ) {
        if (i.tmp.bubble_clicking) {
          (r = e.x - i.interactivity.mouse.click_pos_x),
            (o = e.y - i.interactivity.mouse.click_pos_y);
          var u = Math.sqrt(r * r + o * o),
            p = (new Date().getTime() - i.interactivity.mouse.click_time) / 1e3;
          p > i.interactivity.modes.bubble.duration &&
            (i.tmp.bubble_duration_end = !0),
            p > 2 * i.interactivity.modes.bubble.duration &&
              ((i.tmp.bubble_clicking = !1), (i.tmp.bubble_duration_end = !1));
        }
        i.tmp.bubble_clicking &&
          (n(
            i.interactivity.modes.bubble.size,
            i.particles.size.value,
            e.radius_bubble,
            e.radius,
            "size"
          ),
          n(
            i.interactivity.modes.bubble.opacity,
            i.particles.opacity.value,
            e.opacity_bubble,
            e.opacity,
            "opacity"
          ));
      }
    }),
    (i.fn.modes.repulseParticle = function (e) {
      if (
        i.interactivity.events.onhover.enable &&
        isInArray("repulse", i.interactivity.events.onhover.mode) &&
        "mousemove" == i.interactivity.status
      ) {
        var t = e.x - i.interactivity.mouse.pos_x,
          n = e.y - i.interactivity.mouse.pos_y,
          r = Math.sqrt(t * t + n * n),
          o = { x: t / r, y: n / r },
          s = clamp(
            (1 / (l = i.interactivity.modes.repulse.distance)) *
              (-1 * Math.pow(r / l, 2) + 1) *
              l *
              100,
            0,
            50
          ),
          a = { x: e.x + o.x * s, y: e.y + o.y * s };
        "bounce" == i.particles.move.out_mode
          ? (a.x - e.radius > 0 && a.x + e.radius < i.canvas.w && (e.x = a.x),
            a.y - e.radius > 0 && a.y + e.radius < i.canvas.h && (e.y = a.y))
          : ((e.x = a.x), (e.y = a.y));
      } else if (
        i.interactivity.events.onclick.enable &&
        isInArray("repulse", i.interactivity.events.onclick.mode)
      )
        if (
          (i.tmp.repulse_finish ||
            (i.tmp.repulse_count++,
            i.tmp.repulse_count == i.particles.array.length &&
              (i.tmp.repulse_finish = !0)),
          i.tmp.repulse_clicking)
        ) {
          var l = Math.pow(i.interactivity.modes.repulse.distance / 6, 3),
            c = i.interactivity.mouse.click_pos_x - e.x,
            u = i.interactivity.mouse.click_pos_y - e.y,
            p = c * c + u * u,
            d = (-l / p) * 1;
          l >= p &&
            (function () {
              var t = Math.atan2(u, c);
              if (
                ((e.vx = d * Math.cos(t)),
                (e.vy = d * Math.sin(t)),
                "bounce" == i.particles.move.out_mode)
              ) {
                var n = { x: e.x + e.vx, y: e.y + e.vy };
                n.x + e.radius > i.canvas.w
                  ? (e.vx = -e.vx)
                  : n.x - e.radius < 0 && (e.vx = -e.vx),
                  n.y + e.radius > i.canvas.h
                    ? (e.vy = -e.vy)
                    : n.y - e.radius < 0 && (e.vy = -e.vy);
              }
            })();
        } else
          0 == i.tmp.repulse_clicking && ((e.vx = e.vx_i), (e.vy = e.vy_i));
    }),
    (i.fn.modes.grabParticle = function (e) {
      if (
        i.interactivity.events.onhover.enable &&
        "mousemove" == i.interactivity.status
      ) {
        var t = e.x - i.interactivity.mouse.pos_x,
          n = e.y - i.interactivity.mouse.pos_y,
          r = Math.sqrt(t * t + n * n);
        if (r <= i.interactivity.modes.grab.distance) {
          var o =
            i.interactivity.modes.grab.line_linked.opacity -
            r /
              (1 / i.interactivity.modes.grab.line_linked.opacity) /
              i.interactivity.modes.grab.distance;
          if (o > 0) {
            var s = i.particles.line_linked.color_rgb_line;
            (i.canvas.ctx.strokeStyle =
              "rgba(" + s.r + "," + s.g + "," + s.b + "," + o + ")"),
              (i.canvas.ctx.lineWidth = i.particles.line_linked.width),
              i.canvas.ctx.beginPath(),
              i.canvas.ctx.moveTo(e.x, e.y),
              i.canvas.ctx.lineTo(
                i.interactivity.mouse.pos_x,
                i.interactivity.mouse.pos_y
              ),
              i.canvas.ctx.stroke(),
              i.canvas.ctx.closePath();
          }
        }
      }
    }),
    (i.fn.vendors.eventsListeners = function () {
      "window" == i.interactivity.detect_on
        ? (i.interactivity.el = window)
        : (i.interactivity.el = i.canvas.el),
        (i.interactivity.events.onhover.enable ||
          i.interactivity.events.onclick.enable) &&
          (i.interactivity.el.addEventListener("mousemove", function (e) {
            if (i.interactivity.el == window)
              var t = e.clientX,
                n = e.clientY;
            else (t = e.offsetX || e.clientX), (n = e.offsetY || e.clientY);
            (i.interactivity.mouse.pos_x = t),
              (i.interactivity.mouse.pos_y = n),
              i.tmp.retina &&
                ((i.interactivity.mouse.pos_x *= i.canvas.pxratio),
                (i.interactivity.mouse.pos_y *= i.canvas.pxratio)),
              (i.interactivity.status = "mousemove");
          }),
          i.interactivity.el.addEventListener("mouseleave", function (e) {
            (i.interactivity.mouse.pos_x = null),
              (i.interactivity.mouse.pos_y = null),
              (i.interactivity.status = "mouseleave");
          })),
        i.interactivity.events.onclick.enable &&
          i.interactivity.el.addEventListener("click", function () {
            if (
              ((i.interactivity.mouse.click_pos_x =
                i.interactivity.mouse.pos_x),
              (i.interactivity.mouse.click_pos_y = i.interactivity.mouse.pos_y),
              (i.interactivity.mouse.click_time = new Date().getTime()),
              i.interactivity.events.onclick.enable)
            )
              switch (i.interactivity.events.onclick.mode) {
                case "push":
                  i.particles.move.enable
                    ? i.fn.modes.pushParticles(
                        i.interactivity.modes.push.particles_nb,
                        i.interactivity.mouse
                      )
                    : 1 == i.interactivity.modes.push.particles_nb
                    ? i.fn.modes.pushParticles(
                        i.interactivity.modes.push.particles_nb,
                        i.interactivity.mouse
                      )
                    : i.interactivity.modes.push.particles_nb > 1 &&
                      i.fn.modes.pushParticles(
                        i.interactivity.modes.push.particles_nb
                      );
                  break;
                case "remove":
                  i.fn.modes.removeParticles(
                    i.interactivity.modes.remove.particles_nb
                  );
                  break;
                case "bubble":
                  i.tmp.bubble_clicking = !0;
                  break;
                case "repulse":
                  (i.tmp.repulse_clicking = !0),
                    (i.tmp.repulse_count = 0),
                    (i.tmp.repulse_finish = !1),
                    setTimeout(function () {
                      i.tmp.repulse_clicking = !1;
                    }, 1e3 * i.interactivity.modes.repulse.duration);
              }
          });
    }),
    (i.fn.vendors.densityAutoParticles = function () {
      if (i.particles.number.density.enable) {
        var e = (i.canvas.el.width * i.canvas.el.height) / 1e3;
        i.tmp.retina && (e /= 2 * i.canvas.pxratio);
        var t =
            (e * i.particles.number.value) /
            i.particles.number.density.value_area,
          n = i.particles.array.length - t;
        0 > n
          ? i.fn.modes.pushParticles(Math.abs(n))
          : i.fn.modes.removeParticles(n);
      }
    }),
    (i.fn.vendors.checkOverlap = function (e, t) {
      for (var n = 0; n < i.particles.array.length; n++) {
        var r = i.particles.array[n],
          o = e.x - r.x,
          s = e.y - r.y;
        Math.sqrt(o * o + s * s) <= e.radius + r.radius &&
          ((e.x = t ? t.x : Math.random() * i.canvas.w),
          (e.y = t ? t.y : Math.random() * i.canvas.h),
          i.fn.vendors.checkOverlap(e));
      }
    }),
    (i.fn.vendors.createSvgImg = function (e) {
      var t = i.tmp.source_svg.replace(/#([0-9A-F]{3,6})/gi, function (
          t,
          n,
          i,
          r
        ) {
          if (e.color.rgb)
            var o =
              "rgba(" +
              e.color.rgb.r +
              "," +
              e.color.rgb.g +
              "," +
              e.color.rgb.b +
              "," +
              e.opacity +
              ")";
          else
            o =
              "hsla(" +
              e.color.hsl.h +
              "," +
              e.color.hsl.s +
              "%," +
              e.color.hsl.l +
              "%," +
              e.opacity +
              ")";
          return o;
        }),
        n = new Blob([t], { type: "image/svg+xml;charset=utf-8" }),
        r = window.URL || window.webkitURL || window,
        o = r.createObjectURL(n),
        s = new Image();
      s.addEventListener("load", function () {
        (e.img.obj = s),
          (e.img.loaded = !0),
          r.revokeObjectURL(o),
          i.tmp.count_svg++;
      }),
        (s.src = o);
    }),
    (i.fn.vendors.destroypJS = function () {
      cancelAnimationFrame(i.fn.drawAnimFrame), n.remove(), (pJSDom = null);
    }),
    (i.fn.vendors.drawShape = function (e, t, n, i, r, o) {
      var s = r * o,
        a = r / o,
        l = (180 * (a - 2)) / a,
        c = Math.PI - (Math.PI * l) / 180;
      e.save(), e.beginPath(), e.translate(t, n), e.moveTo(0, 0);
      for (var u = 0; s > u; u++)
        e.lineTo(i, 0), e.translate(i, 0), e.rotate(c);
      e.fill(), e.restore();
    }),
    (i.fn.vendors.exportImg = function () {
      window.open(i.canvas.el.toDataURL("image/png"), "_blank");
    }),
    (i.fn.vendors.loadImg = function (e) {
      if (((i.tmp.img_error = void 0), "" != i.particles.shape.image.src))
        if ("svg" == e) {
          var t = new XMLHttpRequest();
          t.open("GET", i.particles.shape.image.src),
            (t.onreadystatechange = function (e) {
              4 == t.readyState &&
                (200 == t.status
                  ? ((i.tmp.source_svg = e.currentTarget.response),
                    i.fn.vendors.checkBeforeDraw())
                  : (console.log("Error pJS - Image not found"),
                    (i.tmp.img_error = !0)));
            }),
            t.send();
        } else {
          var n = new Image();
          n.addEventListener("load", function () {
            (i.tmp.img_obj = n), i.fn.vendors.checkBeforeDraw();
          }),
            (n.src = i.particles.shape.image.src);
        }
      else console.log("Error pJS - No image.src"), (i.tmp.img_error = !0);
    }),
    (i.fn.vendors.draw = function () {
      "image" == i.particles.shape.type
        ? "svg" == i.tmp.img_type
          ? i.tmp.count_svg >= i.particles.number.value
            ? (i.fn.particlesDraw(),
              i.particles.move.enable
                ? (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw))
                : cancelRequestAnimFrame(i.fn.drawAnimFrame))
            : i.tmp.img_error ||
              (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw))
          : null != i.tmp.img_obj
          ? (i.fn.particlesDraw(),
            i.particles.move.enable
              ? (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw))
              : cancelRequestAnimFrame(i.fn.drawAnimFrame))
          : i.tmp.img_error ||
            (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw))
        : (i.fn.particlesDraw(),
          i.particles.move.enable
            ? (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw))
            : cancelRequestAnimFrame(i.fn.drawAnimFrame));
    }),
    (i.fn.vendors.checkBeforeDraw = function () {
      "image" == i.particles.shape.type
        ? "svg" == i.tmp.img_type && null == i.tmp.source_svg
          ? (i.tmp.checkAnimFrame = requestAnimFrame(check))
          : (cancelRequestAnimFrame(i.tmp.checkAnimFrame),
            i.tmp.img_error || (i.fn.vendors.init(), i.fn.vendors.draw()))
        : (i.fn.vendors.init(), i.fn.vendors.draw());
    }),
    (i.fn.vendors.init = function () {
      i.fn.retinaInit(),
        i.fn.canvasInit(),
        i.fn.canvasSize(),
        i.fn.canvasPaint(),
        i.fn.particlesCreate(),
        i.fn.vendors.densityAutoParticles(),
        (i.particles.line_linked.color_rgb_line = hexToRgb(
          i.particles.line_linked.color
        ));
    }),
    (i.fn.vendors.start = function () {
      isInArray("image", i.particles.shape.type)
        ? ((i.tmp.img_type = i.particles.shape.image.src.substr(
            i.particles.shape.image.src.length - 3
          )),
          i.fn.vendors.loadImg(i.tmp.img_type))
        : i.fn.vendors.checkBeforeDraw();
    }),
    i.fn.vendors.eventsListeners(),
    i.fn.vendors.start();
};
(Object.deepExtend = function (e, t) {
  for (var n in t)
    t[n] && t[n].constructor && t[n].constructor === Object
      ? ((e[n] = e[n] || {}), arguments.callee(e[n], t[n]))
      : (e[n] = t[n]);
  return e;
}),
  (window.requestAnimFrame =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (e) {
      window.setTimeout(e, 1e3 / 60);
    }),
  (window.cancelRequestAnimFrame =
    window.cancelAnimationFrame ||
    window.webkitCancelRequestAnimationFrame ||
    window.mozCancelRequestAnimationFrame ||
    window.oCancelRequestAnimationFrame ||
    window.msCancelRequestAnimationFrame ||
    clearTimeout),
  (window.pJSDom = []),
  (window.particlesJS = function (e, t) {
    "string" != typeof e && ((t = e), (e = "particles-js")),
      e || (e = "particles-js");
    var n = document.getElementById(e),
      i = "particles-js-canvas-el",
      r = n.getElementsByClassName(i);
    if (r.length) for (; r.length > 0; ) n.removeChild(r[0]);
    var o = document.createElement("canvas");
    (o.className = i),
      (o.style.width = "100%"),
      (o.style.height = "100%"),
      null != document.getElementById(e).appendChild(o) &&
        pJSDom.push(new pJS(e, t));
  }),
  (window.particlesJS.load = function (e, t, n) {
    var i = new XMLHttpRequest();
    i.open("GET", t),
      (i.onreadystatechange = function (t) {
        if (4 == i.readyState)
          if (200 == i.status) {
            var r = JSON.parse(t.currentTarget.response);
            window.particlesJS(e, r), n && n();
          } else
            console.log("Error pJS - XMLHttpRequest status: " + i.status),
              console.log("Error pJS - File config not found");
      }),
      i.send();
  }),
  $(document).ready(function () {
    particlesJS.load("particles-js", "/assets/particles.json", function () {}),
      particlesJS.load(
        "particles-js-inline",
        "/assets/particlesinline.json",
        function () {}
      );
  });
