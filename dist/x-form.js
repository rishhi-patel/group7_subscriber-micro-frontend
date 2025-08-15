;(function () {
  const o = document.createElement("link").relList
  if (o && o.supports && o.supports("modulepreload")) return
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) t(i)
  new MutationObserver((i) => {
    for (const a of i)
      if (a.type === "childList")
        for (const n of a.addedNodes)
          n.tagName === "LINK" && n.rel === "modulepreload" && t(n)
  }).observe(document, { childList: !0, subtree: !0 })
  function r(i) {
    const a = {}
    return (
      i.integrity && (a.integrity = i.integrity),
      i.referrerPolicy && (a.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (a.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (a.credentials = "omit")
        : (a.credentials = "same-origin"),
      a
    )
  }
  function t(i) {
    if (i.ep) return
    i.ep = !0
    const a = r(i)
    fetch(i.href, a)
  }
})()
var D,
  h,
  ko,
  z,
  no,
  wo,
  xo,
  Co,
  ro,
  X,
  Y,
  N = {},
  Eo = [],
  Fo = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
  V = Array.isArray
function C(e, o) {
  for (var r in o) e[r] = o[r]
  return e
}
function to(e) {
  e && e.parentNode && e.parentNode.removeChild(e)
}
function T(e, o, r) {
  var t,
    i,
    a,
    n = {}
  for (a in o) a == "key" ? (t = o[a]) : a == "ref" ? (i = o[a]) : (n[a] = o[a])
  if (
    (arguments.length > 2 &&
      (n.children = arguments.length > 3 ? D.call(arguments, 2) : r),
    typeof e == "function" && e.defaultProps != null)
  )
    for (a in e.defaultProps) n[a] === void 0 && (n[a] = e.defaultProps[a])
  return P(e, n, t, i, null)
}
function P(e, o, r, t, i) {
  var a = {
    type: e,
    props: o,
    key: r,
    ref: t,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __c: null,
    constructor: void 0,
    __v: i ?? ++ko,
    __i: -1,
    __u: 0,
  }
  return i == null && h.vnode != null && h.vnode(a), a
}
function J(e) {
  return e.children
}
function M(e, o) {
  ;(this.props = e), (this.context = o)
}
function $(e, o) {
  if (o == null) return e.__ ? $(e.__, e.__i + 1) : null
  for (var r; o < e.__k.length; o++)
    if ((r = e.__k[o]) != null && r.__e != null) return r.__e
  return typeof e.type == "function" ? $(e) : null
}
function zo(e) {
  var o, r
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, o = 0; o < e.__k.length; o++)
      if ((r = e.__k[o]) != null && r.__e != null) {
        e.__e = e.__c.base = r.__e
        break
      }
    return zo(e)
  }
}
function lo(e) {
  ;((!e.__d && (e.__d = !0) && z.push(e) && !q.__r++) ||
    no != h.debounceRendering) &&
    ((no = h.debounceRendering) || wo)(q)
}
function q() {
  for (var e, o, r, t, i, a, n, p = 1; z.length; )
    z.length > p && z.sort(xo),
      (e = z.shift()),
      (p = z.length),
      e.__d &&
        ((r = void 0),
        (i = (t = (o = e).__v).__e),
        (a = []),
        (n = []),
        o.__P &&
          (((r = C({}, t)).__v = t.__v + 1),
          h.vnode && h.vnode(r),
          io(
            o.__P,
            r,
            t,
            o.__n,
            o.__P.namespaceURI,
            32 & t.__u ? [i] : null,
            a,
            i ?? $(t),
            !!(32 & t.__u),
            n
          ),
          (r.__v = t.__v),
          (r.__.__k[r.__i] = r),
          $o(a, r, n),
          r.__e != i && zo(r)))
  q.__r = 0
}
function So(e, o, r, t, i, a, n, p, s, l, u) {
  var c,
    b,
    d,
    m,
    k,
    y,
    g = (t && t.__k) || Eo,
    f = o.length
  for (s = Io(r, o, g, s, f), c = 0; c < f; c++)
    (d = r.__k[c]) != null &&
      ((b = d.__i == -1 ? N : g[d.__i] || N),
      (d.__i = c),
      (y = io(e, d, b, i, a, n, p, s, l, u)),
      (m = d.__e),
      d.ref &&
        b.ref != d.ref &&
        (b.ref && ao(b.ref, null, d), u.push(d.ref, d.__c || m, d)),
      k == null && m != null && (k = m),
      4 & d.__u || b.__k === d.__k
        ? (s = To(d, s, e))
        : typeof d.type == "function" && y !== void 0
        ? (s = y)
        : m && (s = m.nextSibling),
      (d.__u &= -7))
  return (r.__e = k), s
}
function Io(e, o, r, t, i) {
  var a,
    n,
    p,
    s,
    l,
    u = r.length,
    c = u,
    b = 0
  for (e.__k = new Array(i), a = 0; a < i; a++)
    (n = o[a]) != null && typeof n != "boolean" && typeof n != "function"
      ? ((s = a + b),
        ((n = e.__k[a] =
          typeof n == "string" ||
          typeof n == "number" ||
          typeof n == "bigint" ||
          n.constructor == String
            ? P(null, n, null, null, null)
            : V(n)
            ? P(J, { children: n }, null, null, null)
            : n.constructor == null && n.__b > 0
            ? P(n.type, n.props, n.key, n.ref ? n.ref : null, n.__v)
            : n).__ = e),
        (n.__b = e.__b + 1),
        (p = null),
        (l = n.__i = qo(n, r, s, c)) != -1 && (c--, (p = r[l]) && (p.__u |= 2)),
        p == null || p.__v == null
          ? (l == -1 && (i > u ? b-- : i < u && b++),
            typeof n.type != "function" && (n.__u |= 4))
          : l != s &&
            (l == s - 1
              ? b--
              : l == s + 1
              ? b++
              : (l > s ? b-- : b++, (n.__u |= 4))))
      : (e.__k[a] = null)
  if (c)
    for (a = 0; a < u; a++)
      (p = r[a]) != null &&
        (2 & p.__u) == 0 &&
        (p.__e == t && (t = $(p)), Ao(p, p))
  return t
}
function To(e, o, r) {
  var t, i
  if (typeof e.type == "function") {
    for (t = e.__k, i = 0; t && i < t.length; i++)
      t[i] && ((t[i].__ = e), (o = To(t[i], o, r)))
    return o
  }
  e.__e != o &&
    (o && e.type && !r.contains(o) && (o = $(e)),
    r.insertBefore(e.__e, o || null),
    (o = e.__e))
  do o = o && o.nextSibling
  while (o != null && o.nodeType == 8)
  return o
}
function qo(e, o, r, t) {
  var i,
    a,
    n,
    p = e.key,
    s = e.type,
    l = o[r],
    u = l != null && (2 & l.__u) == 0
  if ((l === null && e.key == null) || (u && p == l.key && s == l.type))
    return r
  if (t > (u ? 1 : 0)) {
    for (i = r - 1, a = r + 1; i >= 0 || a < o.length; )
      if (
        (l = o[(n = i >= 0 ? i-- : a++)]) != null &&
        (2 & l.__u) == 0 &&
        p == l.key &&
        s == l.type
      )
        return n
  }
  return -1
}
function po(e, o, r) {
  o[0] == "-"
    ? e.setProperty(o, r ?? "")
    : (e[o] =
        r == null ? "" : typeof r != "number" || Fo.test(o) ? r : r + "px")
}
function B(e, o, r, t, i) {
  var a, n
  o: if (o == "style")
    if (typeof r == "string") e.style.cssText = r
    else {
      if ((typeof t == "string" && (e.style.cssText = t = ""), t))
        for (o in t) (r && o in r) || po(e.style, o, "")
      if (r) for (o in r) (t && r[o] == t[o]) || po(e.style, o, r[o])
    }
  else if (o[0] == "o" && o[1] == "n")
    (a = o != (o = o.replace(Co, "$1"))),
      (n = o.toLowerCase()),
      (o =
        n in e || o == "onFocusOut" || o == "onFocusIn"
          ? n.slice(2)
          : o.slice(2)),
      e.l || (e.l = {}),
      (e.l[o + a] = r),
      r
        ? t
          ? (r.u = t.u)
          : ((r.u = ro), e.addEventListener(o, a ? Y : X, a))
        : e.removeEventListener(o, a ? Y : X, a)
  else {
    if (i == "http://www.w3.org/2000/svg")
      o = o.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s")
    else if (
      o != "width" &&
      o != "height" &&
      o != "href" &&
      o != "list" &&
      o != "form" &&
      o != "tabIndex" &&
      o != "download" &&
      o != "rowSpan" &&
      o != "colSpan" &&
      o != "role" &&
      o != "popover" &&
      o in e
    )
      try {
        e[o] = r ?? ""
        break o
      } catch {}
    typeof r == "function" ||
      (r == null || (r === !1 && o[4] != "-")
        ? e.removeAttribute(o)
        : e.setAttribute(o, o == "popover" && r == 1 ? "" : r))
  }
}
function so(e) {
  return function (o) {
    if (this.l) {
      var r = this.l[o.type + e]
      if (o.t == null) o.t = ro++
      else if (o.t < r.u) return
      return r(h.event ? h.event(o) : o)
    }
  }
}
function io(e, o, r, t, i, a, n, p, s, l) {
  var u,
    c,
    b,
    d,
    m,
    k,
    y,
    g,
    f,
    j,
    E,
    H,
    A,
    co,
    L,
    O,
    G,
    w = o.type
  if (o.constructor != null) return null
  128 & r.__u && ((s = !!(32 & r.__u)), (a = [(p = o.__e = r.__e)])),
    (u = h.__b) && u(o)
  o: if (typeof w == "function")
    try {
      if (
        ((g = o.props),
        (f = "prototype" in w && w.prototype.render),
        (j = (u = w.contextType) && t[u.__c]),
        (E = u ? (j ? j.props.value : u.__) : t),
        r.__c
          ? (y = (c = o.__c = r.__c).__ = c.__E)
          : (f
              ? (o.__c = c = new w(g, E))
              : ((o.__c = c = new M(g, E)),
                (c.constructor = w),
                (c.render = Ro)),
            j && j.sub(c),
            (c.props = g),
            c.state || (c.state = {}),
            (c.context = E),
            (c.__n = t),
            (b = c.__d = !0),
            (c.__h = []),
            (c._sb = [])),
        f && c.__s == null && (c.__s = c.state),
        f &&
          w.getDerivedStateFromProps != null &&
          (c.__s == c.state && (c.__s = C({}, c.__s)),
          C(c.__s, w.getDerivedStateFromProps(g, c.__s))),
        (d = c.props),
        (m = c.state),
        (c.__v = o),
        b)
      )
        f &&
          w.getDerivedStateFromProps == null &&
          c.componentWillMount != null &&
          c.componentWillMount(),
          f && c.componentDidMount != null && c.__h.push(c.componentDidMount)
      else {
        if (
          (f &&
            w.getDerivedStateFromProps == null &&
            g !== d &&
            c.componentWillReceiveProps != null &&
            c.componentWillReceiveProps(g, E),
          (!c.__e &&
            c.shouldComponentUpdate != null &&
            c.shouldComponentUpdate(g, c.__s, E) === !1) ||
            o.__v == r.__v)
        ) {
          for (
            o.__v != r.__v && ((c.props = g), (c.state = c.__s), (c.__d = !1)),
              o.__e = r.__e,
              o.__k = r.__k,
              o.__k.some(function (S) {
                S && (S.__ = o)
              }),
              H = 0;
            H < c._sb.length;
            H++
          )
            c.__h.push(c._sb[H])
          ;(c._sb = []), c.__h.length && n.push(c)
          break o
        }
        c.componentWillUpdate != null && c.componentWillUpdate(g, c.__s, E),
          f &&
            c.componentDidUpdate != null &&
            c.__h.push(function () {
              c.componentDidUpdate(d, m, k)
            })
      }
      if (
        ((c.context = E),
        (c.props = g),
        (c.__P = e),
        (c.__e = !1),
        (A = h.__r),
        (co = 0),
        f)
      ) {
        for (
          c.state = c.__s,
            c.__d = !1,
            A && A(o),
            u = c.render(c.props, c.state, c.context),
            L = 0;
          L < c._sb.length;
          L++
        )
          c.__h.push(c._sb[L])
        c._sb = []
      } else
        do
          (c.__d = !1),
            A && A(o),
            (u = c.render(c.props, c.state, c.context)),
            (c.state = c.__s)
        while (c.__d && ++co < 25)
      ;(c.state = c.__s),
        c.getChildContext != null && (t = C(C({}, t), c.getChildContext())),
        f &&
          !b &&
          c.getSnapshotBeforeUpdate != null &&
          (k = c.getSnapshotBeforeUpdate(d, m)),
        (O = u),
        u != null &&
          u.type === J &&
          u.key == null &&
          (O = jo(u.props.children)),
        (p = So(e, V(O) ? O : [O], o, r, t, i, a, n, p, s, l)),
        (c.base = o.__e),
        (o.__u &= -161),
        c.__h.length && n.push(c),
        y && (c.__E = c.__ = null)
    } catch (S) {
      if (((o.__v = null), s || a != null))
        if (S.then) {
          for (o.__u |= s ? 160 : 128; p && p.nodeType == 8 && p.nextSibling; )
            p = p.nextSibling
          ;(a[a.indexOf(p)] = null), (o.__e = p)
        } else {
          for (G = a.length; G--; ) to(a[G])
          Z(o)
        }
      else (o.__e = r.__e), (o.__k = r.__k), S.then || Z(o)
      h.__e(S, o, r)
    }
  else
    a == null && o.__v == r.__v
      ? ((o.__k = r.__k), (o.__e = r.__e))
      : (p = o.__e = Wo(r.__e, o, r, t, i, a, n, s, l))
  return (u = h.diffed) && u(o), 128 & o.__u ? void 0 : p
}
function Z(e) {
  e && e.__c && (e.__c.__e = !0), e && e.__k && e.__k.forEach(Z)
}
function $o(e, o, r) {
  for (var t = 0; t < r.length; t++) ao(r[t], r[++t], r[++t])
  h.__c && h.__c(o, e),
    e.some(function (i) {
      try {
        ;(e = i.__h),
          (i.__h = []),
          e.some(function (a) {
            a.call(i)
          })
      } catch (a) {
        h.__e(a, i.__v)
      }
    })
}
function jo(e) {
  return typeof e != "object" || e == null || (e.__b && e.__b > 0)
    ? e
    : V(e)
    ? e.map(jo)
    : C({}, e)
}
function Wo(e, o, r, t, i, a, n, p, s) {
  var l,
    u,
    c,
    b,
    d,
    m,
    k,
    y = r.props,
    g = o.props,
    f = o.type
  if (
    (f == "svg"
      ? (i = "http://www.w3.org/2000/svg")
      : f == "math"
      ? (i = "http://www.w3.org/1998/Math/MathML")
      : i || (i = "http://www.w3.org/1999/xhtml"),
    a != null)
  ) {
    for (l = 0; l < a.length; l++)
      if (
        (d = a[l]) &&
        "setAttribute" in d == !!f &&
        (f ? d.localName == f : d.nodeType == 3)
      ) {
        ;(e = d), (a[l] = null)
        break
      }
  }
  if (e == null) {
    if (f == null) return document.createTextNode(g)
    ;(e = document.createElementNS(i, f, g.is && g)),
      p && (h.__m && h.__m(o, a), (p = !1)),
      (a = null)
  }
  if (f == null) y === g || (p && e.data == g) || (e.data = g)
  else {
    if (((a = a && D.call(e.childNodes)), (y = r.props || N), !p && a != null))
      for (y = {}, l = 0; l < e.attributes.length; l++)
        y[(d = e.attributes[l]).name] = d.value
    for (l in y)
      if (((d = y[l]), l != "children")) {
        if (l == "dangerouslySetInnerHTML") c = d
        else if (!(l in g)) {
          if (
            (l == "value" && "defaultValue" in g) ||
            (l == "checked" && "defaultChecked" in g)
          )
            continue
          B(e, l, null, d, i)
        }
      }
    for (l in g)
      (d = g[l]),
        l == "children"
          ? (b = d)
          : l == "dangerouslySetInnerHTML"
          ? (u = d)
          : l == "value"
          ? (m = d)
          : l == "checked"
          ? (k = d)
          : (p && typeof d != "function") || y[l] === d || B(e, l, d, y[l], i)
    if (u)
      p ||
        (c && (u.__html == c.__html || u.__html == e.innerHTML)) ||
        (e.innerHTML = u.__html),
        (o.__k = [])
    else if (
      (c && (e.innerHTML = ""),
      So(
        o.type == "template" ? e.content : e,
        V(b) ? b : [b],
        o,
        r,
        t,
        f == "foreignObject" ? "http://www.w3.org/1999/xhtml" : i,
        a,
        n,
        a ? a[0] : r.__k && $(r, 0),
        p,
        s
      ),
      a != null)
    )
      for (l = a.length; l--; ) to(a[l])
    p ||
      ((l = "value"),
      f == "progress" && m == null
        ? e.removeAttribute("value")
        : m != null &&
          (m !== e[l] ||
            (f == "progress" && !m) ||
            (f == "option" && m != y[l])) &&
          B(e, l, m, y[l], i),
      (l = "checked"),
      k != null && k != e[l] && B(e, l, k, y[l], i))
  }
  return e
}
function ao(e, o, r) {
  try {
    if (typeof e == "function") {
      var t = typeof e.__u == "function"
      t && e.__u(), (t && o == null) || (e.__u = e(o))
    } else e.current = o
  } catch (i) {
    h.__e(i, r)
  }
}
function Ao(e, o, r) {
  var t, i
  if (
    (h.unmount && h.unmount(e),
    (t = e.ref) && ((t.current && t.current != e.__e) || ao(t, null, o)),
    (t = e.__c) != null)
  ) {
    if (t.componentWillUnmount)
      try {
        t.componentWillUnmount()
      } catch (a) {
        h.__e(a, o)
      }
    t.base = t.__P = null
  }
  if ((t = e.__k))
    for (i = 0; i < t.length; i++)
      t[i] && Ao(t[i], o, r || typeof e.type != "function")
  r || to(e.__e), (e.__c = e.__ = e.__e = void 0)
}
function Ro(e, o, r) {
  return this.constructor(e, r)
}
function K(e, o, r) {
  var t, i, a, n
  o == document && (o = document.documentElement),
    h.__ && h.__(e, o),
    (i = (t = typeof r == "function") ? null : (r && r.__k) || o.__k),
    (a = []),
    (n = []),
    io(
      o,
      (e = ((!t && r) || o).__k = T(J, null, [e])),
      i || N,
      N,
      o.namespaceURI,
      !t && r ? [r] : i ? null : o.firstChild ? D.call(o.childNodes) : null,
      a,
      !t && r ? r : i ? i.__e : o.firstChild,
      t,
      n
    ),
    $o(a, e, n)
}
function Oo(e, o) {
  K(e, o, Oo)
}
function Po(e, o, r) {
  var t,
    i,
    a,
    n,
    p = C({}, e.props)
  for (a in (e.type && e.type.defaultProps && (n = e.type.defaultProps), o))
    a == "key"
      ? (t = o[a])
      : a == "ref"
      ? (i = o[a])
      : (p[a] = o[a] === void 0 && n != null ? n[a] : o[a])
  return (
    arguments.length > 2 &&
      (p.children = arguments.length > 3 ? D.call(arguments, 2) : r),
    P(e.type, p, t || e.key, i || e.ref, null)
  )
}
;(D = Eo.slice),
  (h = {
    __e: function (e, o, r, t) {
      for (var i, a, n; (o = o.__); )
        if ((i = o.__c) && !i.__)
          try {
            if (
              ((a = i.constructor) &&
                a.getDerivedStateFromError != null &&
                (i.setState(a.getDerivedStateFromError(e)), (n = i.__d)),
              i.componentDidCatch != null &&
                (i.componentDidCatch(e, t || {}), (n = i.__d)),
              n)
            )
              return (i.__E = i)
          } catch (p) {
            e = p
          }
      throw e
    },
  }),
  (ko = 0),
  (M.prototype.setState = function (e, o) {
    var r
    ;(r =
      this.__s != null && this.__s != this.state
        ? this.__s
        : (this.__s = C({}, this.state))),
      typeof e == "function" && (e = e(C({}, r), this.props)),
      e && C(r, e),
      e != null && this.__v && (o && this._sb.push(o), lo(this))
  }),
  (M.prototype.forceUpdate = function (e) {
    this.__v && ((this.__e = !0), e && this.__h.push(e), lo(this))
  }),
  (M.prototype.render = J),
  (z = []),
  (wo =
    typeof Promise == "function"
      ? Promise.prototype.then.bind(Promise.resolve())
      : setTimeout),
  (xo = function (e, o) {
    return e.__v.__b - o.__v.__b
  }),
  (q.__r = 0),
  (Co = /(PointerCapture)$|Capture$/i),
  (ro = 0),
  (X = so(!1)),
  (Y = so(!0))
function W() {
  return (
    (W = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var o = 1; o < arguments.length; o++) {
            var r = arguments[o]
            for (var t in r)
              Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
          }
          return e
        }),
    W.apply(this, arguments)
  )
}
var Vo = ["context", "children"]
function Jo(e, o, r, t) {
  function i() {
    var a = Reflect.construct(HTMLElement, [], i)
    return (
      (a._vdomComponent = e),
      (a._root =
        t && t.shadow ? a.attachShadow({ mode: t.mode || "open" }) : a),
      t &&
        t.adoptedStyleSheets &&
        a._root.adoptedStyleSheets &&
        (a._root.adoptedStyleSheets = t.adoptedStyleSheets),
      a
    )
  }
  return (
    ((i.prototype = Object.create(HTMLElement.prototype)).constructor = i),
    (i.prototype.connectedCallback = Go),
    (i.prototype.attributeChangedCallback = Qo),
    (i.prototype.disconnectedCallback = Xo),
    (r = r || e.observedAttributes || Object.keys(e.propTypes || {})),
    (i.observedAttributes = r),
    r.forEach(function (a) {
      Object.defineProperty(i.prototype, a, {
        get: function () {
          return this._vdom.props[a]
        },
        set: function (n) {
          this._vdom
            ? this.attributeChangedCallback(a, null, n)
            : (this._props || (this._props = {}),
              (this._props[a] = n),
              this.connectedCallback())
          var p = typeof n
          ;(n != null && p !== "string" && p !== "boolean" && p !== "number") ||
            this.setAttribute(a, n)
        },
      })
    }),
    customElements.define(o, i)
  )
}
function Ko(e) {
  this.getChildContext = function () {
    return e.context
  }
  var o = e.children,
    r = (function (t, i) {
      if (t == null) return {}
      var a,
        n,
        p = {},
        s = Object.keys(t)
      for (n = 0; n < s.length; n++) i.indexOf((a = s[n])) >= 0 || (p[a] = t[a])
      return p
    })(e, Vo)
  return Po(o, r)
}
function Go() {
  var e = new CustomEvent("_preact", {
    detail: {},
    bubbles: !0,
    cancelable: !0,
  })
  this.dispatchEvent(e),
    (this._vdom = T(
      Ko,
      W({}, this._props, { context: e.detail.context }),
      Do(this, this._vdomComponent)
    )),
    (this.hasAttribute("hydrate") ? Oo : K)(this._vdom, this._root)
}
function No(e) {
  return e.replace(/-(\w)/g, function (o, r) {
    return r ? r.toUpperCase() : ""
  })
}
function Qo(e, o, r) {
  if (this._vdom) {
    var t = {}
    ;(t[e] = r = r ?? void 0),
      (t[No(e)] = r),
      (this._vdom = Po(this._vdom, t)),
      K(this._vdom, this._root)
  }
}
function Xo() {
  K((this._vdom = null), this._root)
}
function uo(e, o) {
  var r = this
  return T(
    "slot",
    W({}, e, {
      ref: function (t) {
        t
          ? ((r.ref = t),
            r._listener ||
              ((r._listener = function (i) {
                i.stopPropagation(), (i.detail.context = o)
              }),
              t.addEventListener("_preact", r._listener)))
          : r.ref.removeEventListener("_preact", r._listener)
      },
    })
  )
}
function Do(e, o) {
  if (e.nodeType === 3) return e.data
  if (e.nodeType !== 1) return null
  var r = [],
    t = {},
    i = 0,
    a = e.attributes,
    n = e.childNodes
  for (i = a.length; i--; )
    a[i].name !== "slot" &&
      ((t[a[i].name] = a[i].value), (t[No(a[i].name)] = a[i].value))
  for (i = n.length; i--; ) {
    var p = Do(n[i], null),
      s = n[i].slot
    s ? (t[s] = T(uo, { name: s }, p)) : (r[i] = p)
  }
  var l = o ? T(uo, null, r) : r
  return T(o || e.nodeName.toLowerCase(), t, l)
}
var Yo = 0
function x(e, o, r, t, i, a) {
  o || (o = {})
  var n,
    p,
    s = o
  if ("ref" in s)
    for (p in ((s = {}), o)) p == "ref" ? (n = o[p]) : (s[p] = o[p])
  var l = {
    type: e,
    props: s,
    key: r,
    ref: n,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __c: null,
    constructor: void 0,
    __v: --Yo,
    __i: -1,
    __u: 0,
    __source: i,
    __self: a,
  }
  if (typeof e == "function" && (n = e.defaultProps))
    for (p in n) s[p] === void 0 && (s[p] = n[p])
  return h.vnode && h.vnode(l), l
}
var R,
  v,
  Q,
  bo,
  oo = 0,
  Ho = [],
  _ = h,
  mo = _.__b,
  ho = _.__r,
  go = _.diffed,
  fo = _.__c,
  vo = _.unmount,
  yo = _.__
function Lo(e, o) {
  _.__h && _.__h(v, e, oo || o), (oo = 0)
  var r = v.__H || (v.__H = { __: [], __h: [] })
  return e >= r.__.length && r.__.push({}), r.__[e]
}
function U(e) {
  return (oo = 1), Zo(Mo, e)
}
function Zo(e, o, r) {
  var t = Lo(R++, 2)
  if (
    ((t.t = e),
    !t.__c &&
      ((t.__ = [
        Mo(void 0, o),
        function (p) {
          var s = t.__N ? t.__N[0] : t.__[0],
            l = t.t(s, p)
          s !== l && ((t.__N = [l, t.__[1]]), t.__c.setState({}))
        },
      ]),
      (t.__c = v),
      !v.__f))
  ) {
    var i = function (p, s, l) {
      if (!t.__c.__H) return !0
      var u = t.__c.__H.__.filter(function (b) {
        return !!b.__c
      })
      if (
        u.every(function (b) {
          return !b.__N
        })
      )
        return !a || a.call(this, p, s, l)
      var c = t.__c.props !== p
      return (
        u.forEach(function (b) {
          if (b.__N) {
            var d = b.__[0]
            ;(b.__ = b.__N), (b.__N = void 0), d !== b.__[0] && (c = !0)
          }
        }),
        (a && a.call(this, p, s, l)) || c
      )
    }
    v.__f = !0
    var a = v.shouldComponentUpdate,
      n = v.componentWillUpdate
    ;(v.componentWillUpdate = function (p, s, l) {
      if (this.__e) {
        var u = a
        ;(a = void 0), i(p, s, l), (a = u)
      }
      n && n.call(this, p, s, l)
    }),
      (v.shouldComponentUpdate = i)
  }
  return t.__N || t.__
}
function Bo(e, o) {
  var r = Lo(R++, 3)
  !_.__s && re(r.__H, o) && ((r.__ = e), (r.u = o), v.__H.__h.push(r))
}
function oe() {
  for (var e; (e = Ho.shift()); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(F), e.__H.__h.forEach(eo), (e.__H.__h = [])
      } catch (o) {
        ;(e.__H.__h = []), _.__e(o, e.__v)
      }
}
;(_.__b = function (e) {
  ;(v = null), mo && mo(e)
}),
  (_.__ = function (e, o) {
    e && o.__k && o.__k.__m && (e.__m = o.__k.__m), yo && yo(e, o)
  }),
  (_.__r = function (e) {
    ho && ho(e), (R = 0)
    var o = (v = e.__c).__H
    o &&
      (Q === v
        ? ((o.__h = []),
          (v.__h = []),
          o.__.forEach(function (r) {
            r.__N && (r.__ = r.__N), (r.u = r.__N = void 0)
          }))
        : (o.__h.forEach(F), o.__h.forEach(eo), (o.__h = []), (R = 0))),
      (Q = v)
  }),
  (_.diffed = function (e) {
    go && go(e)
    var o = e.__c
    o &&
      o.__H &&
      (o.__H.__h.length &&
        ((Ho.push(o) !== 1 && bo === _.requestAnimationFrame) ||
          ((bo = _.requestAnimationFrame) || ee)(oe)),
      o.__H.__.forEach(function (r) {
        r.u && (r.__H = r.u), (r.u = void 0)
      })),
      (Q = v = null)
  }),
  (_.__c = function (e, o) {
    o.some(function (r) {
      try {
        r.__h.forEach(F),
          (r.__h = r.__h.filter(function (t) {
            return !t.__ || eo(t)
          }))
      } catch (t) {
        o.some(function (i) {
          i.__h && (i.__h = [])
        }),
          (o = []),
          _.__e(t, r.__v)
      }
    }),
      fo && fo(e, o)
  }),
  (_.unmount = function (e) {
    vo && vo(e)
    var o,
      r = e.__c
    r &&
      r.__H &&
      (r.__H.__.forEach(function (t) {
        try {
          F(t)
        } catch (i) {
          o = i
        }
      }),
      (r.__H = void 0),
      o && _.__e(o, r.__v))
  })
var _o = typeof requestAnimationFrame == "function"
function ee(e) {
  var o,
    r = function () {
      clearTimeout(t), _o && cancelAnimationFrame(o), setTimeout(e)
    },
    t = setTimeout(r, 35)
  _o && (o = requestAnimationFrame(r))
}
function F(e) {
  var o = v,
    r = e.__c
  typeof r == "function" && ((e.__c = void 0), r()), (v = o)
}
function eo(e) {
  var o = v
  ;(e.__c = e.__()), (v = o)
}
function re(e, o) {
  return (
    !e ||
    e.length !== o.length ||
    o.some(function (r, t) {
      return r !== e[t]
    })
  )
}
function Mo(e, o) {
  return typeof o == "function" ? o(e) : o
}
console.log("Initializing custom OpenTelemetry implementation...")
class te {
  constructor(o, r = {}) {
    ;(this.name = o),
      (this.startTime = Date.now()),
      (this.attributes = {}),
      (this.events = []),
      (this.status = { code: 0 }),
      (this.links = r.links || []),
      (this.kind = r.kind || 1),
      console.log(`🌐 Custom span created: ${o}`, r)
  }
  setAttribute(o, r) {
    return (
      (this.attributes[o] = r),
      console.log(`📝 Span attribute set: ${o} = ${r}`),
      this
    )
  }
  setAttributes(o) {
    return (
      Object.assign(this.attributes, o),
      console.log("📝 Span attributes set:", o),
      this
    )
  }
  addEvent(o, r = {}) {
    return (
      this.events.push({ name: o, attributes: r, time: Date.now() }),
      console.log(`📅 Span event added: ${o}`, r),
      this
    )
  }
  recordException(o) {
    return (
      (this.status.code = 2),
      (this.status.message = o.message),
      console.error("❌ Span exception recorded:", o),
      this
    )
  }
  setStatus(o) {
    return (this.status = o), console.log("📊 Span status set:", o), this
  }
  end(o = Date.now()) {
    const r = o - this.startTime
    return (
      console.log(`✅ Span ended: ${this.name} (duration: ${r}ms)`, {
        attributes: this.attributes,
        events: this.events,
        status: this.status,
      }),
      this.sendToOTEL(o),
      this
    )
  }
  async sendToOTEL(o) {
    try {
      const r = {
        resourceSpans: [
          {
            resource: {
              attributes: [
                {
                  key: "service.name",
                  value: { stringValue: "subscriber-micro-frontend" },
                },
                { key: "service.version", value: { stringValue: "1.0.0" } },
                {
                  key: "deployment.environment",
                  value: { stringValue: "development" },
                },
              ],
            },
            scopeSpans: [
              {
                scope: { name: "subscriber-form" },
                spans: [
                  {
                    traceId: this.generateTraceId(),
                    spanId: this.generateSpanId(),
                    name: this.name,
                    startTimeUnixNano: this.startTime * 1e6,
                    endTimeUnixNano: o * 1e6,
                    attributes: Object.entries(this.attributes).map(
                      ([i, a]) => ({
                        key: i,
                        value: { stringValue: String(a) },
                      })
                    ),
                    events: this.events.map((i) => ({
                      name: i.name,
                      timeUnixNano: i.time * 1e6,
                      attributes: Object.entries(i.attributes).map(
                        ([a, n]) => ({
                          key: a,
                          value: { stringValue: String(n) },
                        })
                      ),
                    })),
                    status: this.status,
                    kind: this.kind,
                    links: this.links,
                  },
                ],
              },
            ],
          },
        ],
      }
      console.log("📤 Sending custom span to OTEL:", r)
      const t = await fetch("https://otel.exotrend.live/v1/traces", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(r),
      })
      t.ok
        ? console.log("✅ Custom span sent successfully to OTEL")
        : console.warn(
            "⚠️ Failed to send custom span to OTEL:",
            t.status,
            t.statusText
          )
    } catch (r) {
      console.warn("⚠️ Error sending custom span to OTEL:", r)
    }
  }
  generateTraceId() {
    return Array.from({ length: 32 }, () =>
      Math.floor(Math.random() * 16).toString(16)
    ).join("")
  }
  generateSpanId() {
    return Array.from({ length: 16 }, () =>
      Math.floor(Math.random() * 16).toString(16)
    ).join("")
  }
}
const I = {
  startSpan: (e, o = {}) => (
    console.log(`🌐 Starting custom span: ${e}`, o), new te(e, o)
  ),
  startActiveSpan: (e, o = {}, r) => {
    console.log(`🌐 Starting active custom span: ${e}`)
    const t = I.startSpan(e, o)
    try {
      const i = r(t)
      return i && typeof i.then == "function"
        ? i.finally(() => t.end())
        : (t.end(), i)
    } catch (i) {
      throw (t.recordException(i), t.end(), i)
    }
  },
}
console.log("✅ Custom OpenTelemetry tracer created successfully!")
const ie = ({ message: e, type: o, onClose: r, duration: t = 3e3 }) => {
  const [i, a] = U(!0)
  return (
    Bo(() => {
      const n = setTimeout(() => {
        a(!1), r && r()
      }, t)
      return () => clearTimeout(n)
    }, [t, r]),
    i
      ? x("article", {
          className: "toast",
          children: x("p", { className: o, children: e }),
        })
      : null
  )
}
function ae() {
  const [e, o] = U(!1),
    [r, t] = U(""),
    [i, a] = U("")
  Bo(() => {
    const s = I.startSpan("subscriber_form_mounted")
    return (
      s.setAttribute("component", "SubscriberForm"),
      s.setAttribute("action", "component_mount"),
      () => {
        s.setAttribute("action", "component_unmount"), s.end()
      }
    )
  }, [])
  const n = (s, l = "") => {
    t(s), a(l), o(!0)
  }
  return x("form", {
    onSubmit: (s) => {
      s.preventDefault()
      const l = I.startSpan("form_submission")
      l.setAttribute("form.action", "submit")
      const u = new FormData(s.target),
        c = Object.fromEntries(u.entries())
      l.setAttribute("form.name", c.name),
        l.setAttribute("form.email", c.email || "none")
      const b = `${import.meta.url.substring(
          0,
          import.meta.url.lastIndexOf("/")
        )}/subscribers`,
        d = I.startSpan("api_call")
      d.setAttribute("http.url", b),
        d.setAttribute("http.method", "POST"),
        fetch(b, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(c),
        })
          .then((m) => {
            d.setAttribute("http.status_code", m.status),
              m.json().then((k) => {
                d.setAttribute("response.message", k.message),
                  d.setAttribute("response.id", k.id)
                const y = m.ok ? "success" : "error"
                n(k.message, y),
                  m.ok
                    ? (l.setAttribute("result", "success"),
                      l.setAttribute("subscriber_id", k.id))
                    : (l.setAttribute("result", "error"),
                      l.setAttribute("error.message", k.message)),
                  console.log(k)
              })
          })
          .catch((m) => {
            d.recordException(m),
              l.recordException(m),
              l.setAttribute("result", "error"),
              l.setAttribute("error.type", "network_error"),
              l.setAttribute("error.message", m.message),
              console.error("Error:", m)
          })
          .finally(() => {
            d.end(), l.end()
          })
    },
    children: [
      x("label", {
        children: [
          "name",
          x("input", { name: "name", placeholder: "your name" }),
        ],
      }),
      x("label", {
        children: [
          "email",
          x("input", {
            name: "email",
            type: "email",
            placeholder: "your email address",
          }),
        ],
      }),
      x("button", { type: "submit", children: "Send" }),
      e &&
        x("div", {
          style: {
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 1e3,
          },
          children: x(ie, {
            message: r,
            type: i,
            onClose: () => {
              o(!1), t(""), a("")
            },
          }),
        }),
    ],
  })
}
const ce = `@charset "UTF-8";/*!
 * Pico CSS ✨ v2.1.1 (https://picocss.com)
 * Copyright 2019-2025 - Licensed under MIT
 */:root,:host{--pico-font-family-emoji: "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--pico-font-family-sans-serif: system-ui, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, Helvetica, Arial, "Helvetica Neue", sans-serif, var(--pico-font-family-emoji);--pico-font-family-monospace: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace, var(--pico-font-family-emoji);--pico-font-family: var(--pico-font-family-sans-serif);--pico-line-height: 1.5;--pico-font-weight: 400;--pico-font-size: 100%;--pico-text-underline-offset: .1rem;--pico-border-radius: .25rem;--pico-border-width: .0625rem;--pico-outline-width: .125rem;--pico-transition: .2s ease-in-out;--pico-spacing: 1rem;--pico-typography-spacing-vertical: 1rem;--pico-block-spacing-vertical: var(--pico-spacing);--pico-block-spacing-horizontal: var(--pico-spacing);--pico-form-element-spacing-vertical: .75rem;--pico-form-element-spacing-horizontal: 1rem;--pico-group-box-shadow: 0 0 0 rgba(0, 0, 0, 0);--pico-group-box-shadow-focus-with-button: 0 0 0 var(--pico-outline-width) var(--pico-primary-focus);--pico-group-box-shadow-focus-with-input: 0 0 0 .0625rem var(--pico-form-element-border-color);--pico-modal-overlay-backdrop-filter: blur(.375rem);--pico-nav-element-spacing-vertical: 1rem;--pico-nav-element-spacing-horizontal: .5rem;--pico-nav-link-spacing-vertical: .5rem;--pico-nav-link-spacing-horizontal: .5rem;--pico-nav-breadcrumb-divider: ">";--pico-icon-checkbox: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");--pico-icon-minus: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='5' y1='12' x2='19' y2='12'%3E%3C/line%3E%3C/svg%3E");--pico-icon-chevron: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(136, 145, 164)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");--pico-icon-date: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(136, 145, 164)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='16' y1='2' x2='16' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='2' x2='8' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='10' x2='21' y2='10'%3E%3C/line%3E%3C/svg%3E");--pico-icon-time: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(136, 145, 164)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cpolyline points='12 6 12 12 16 14'%3E%3C/polyline%3E%3C/svg%3E");--pico-icon-search: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(136, 145, 164)' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'%3E%3C/circle%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'%3E%3C/line%3E%3C/svg%3E");--pico-icon-close: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(136, 145, 164)' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E");--pico-icon-loading: url("data:image/svg+xml,%3Csvg fill='none' height='24' width='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' %3E%3Cstyle%3E g %7B animation: rotate 2s linear infinite; transform-origin: center center; %7D circle %7B stroke-dasharray: 75,100; stroke-dashoffset: -5; animation: dash 1.5s ease-in-out infinite; stroke-linecap: round; %7D @keyframes rotate %7B 0%25 %7B transform: rotate(0deg); %7D 100%25 %7B transform: rotate(360deg); %7D %7D @keyframes dash %7B 0%25 %7B stroke-dasharray: 1,100; stroke-dashoffset: 0; %7D 50%25 %7B stroke-dasharray: 44.5,100; stroke-dashoffset: -17.5; %7D 100%25 %7B stroke-dasharray: 44.5,100; stroke-dashoffset: -62; %7D %7D %3C/style%3E%3Cg%3E%3Ccircle cx='12' cy='12' r='10' fill='none' stroke='rgb(136, 145, 164)' stroke-width='4' /%3E%3C/g%3E%3C/svg%3E")}@media (min-width: 576px){:root,:host{--pico-font-size: 106.25%}}@media (min-width: 768px){:root,:host{--pico-font-size: 112.5%}}@media (min-width: 1024px){:root,:host{--pico-font-size: 118.75%}}@media (min-width: 1280px){:root,:host{--pico-font-size: 125%}}@media (min-width: 1536px){:root,:host{--pico-font-size: 131.25%}}a{--pico-text-decoration: underline}small{--pico-font-size: .875em}h1,h2,h3,h4,h5,h6{--pico-font-weight: 700}h1{--pico-font-size: 2rem;--pico-line-height: 1.125;--pico-typography-spacing-top: 3rem}h2{--pico-font-size: 1.75rem;--pico-line-height: 1.15;--pico-typography-spacing-top: 2.625rem}h3{--pico-font-size: 1.5rem;--pico-line-height: 1.175;--pico-typography-spacing-top: 2.25rem}h4{--pico-font-size: 1.25rem;--pico-line-height: 1.2;--pico-typography-spacing-top: 1.874rem}h5{--pico-font-size: 1.125rem;--pico-line-height: 1.225;--pico-typography-spacing-top: 1.6875rem}h6{--pico-font-size: 1rem;--pico-line-height: 1.25;--pico-typography-spacing-top: 1.5rem}thead th,thead td,tfoot th,tfoot td{--pico-font-weight: 600;--pico-border-width: .1875rem}pre,code,kbd,samp{--pico-font-family: var(--pico-font-family-monospace)}kbd{--pico-font-weight: bolder}input:not([type=submit],[type=button],[type=reset],[type=checkbox],[type=radio],[type=file]),:where(select,textarea){--pico-outline-width: .0625rem}[type=search]{--pico-border-radius: 5rem}[type=checkbox],[type=radio]{--pico-border-width: .125rem}[type=checkbox][role=switch]{--pico-border-width: .1875rem}[role=search]{--pico-border-radius: 5rem}[role=search] button,[role=search] [type=submit],[role=search] [type=button],[role=search] [role=button],[role=group] button,[role=group] [type=submit],[role=group] [type=button],[role=group] [role=button]{--pico-form-element-spacing-horizontal: 2rem}details summary[role=button]:after{filter:brightness(0) invert(1)}[aria-busy=true]:not(input,select,textarea):is(button,[type=submit],[type=button],[type=reset],[role=button]):before{filter:brightness(0) invert(1)}[data-theme=light],:root:not([data-theme=dark]),:host(:not([data-theme=dark])){color-scheme:light;--pico-background-color: #fff;--pico-color: #373c44;--pico-text-selection-color: rgba(148, 134, 225, .25);--pico-muted-color: #646b79;--pico-muted-border-color: rgb(231, 234, 239.5);--pico-primary: #655cd6;--pico-primary-background: #524ed2;--pico-primary-border: var(--pico-primary-background);--pico-primary-underline: rgba(101, 92, 214, .5);--pico-primary-hover: #4040bf;--pico-primary-hover-background: #4040bf;--pico-primary-hover-border: var(--pico-primary-hover-background);--pico-primary-hover-underline: var(--pico-primary-hover);--pico-primary-focus: rgba(148, 134, 225, .5);--pico-primary-inverse: #fff;--pico-secondary: #5d6b89;--pico-secondary-background: #525f7a;--pico-secondary-border: var(--pico-secondary-background);--pico-secondary-underline: rgba(93, 107, 137, .5);--pico-secondary-hover: #48536b;--pico-secondary-hover-background: #48536b;--pico-secondary-hover-border: var(--pico-secondary-hover-background);--pico-secondary-hover-underline: var(--pico-secondary-hover);--pico-secondary-focus: rgba(93, 107, 137, .25);--pico-secondary-inverse: #fff;--pico-contrast: #181c25;--pico-contrast-background: #181c25;--pico-contrast-border: var(--pico-contrast-background);--pico-contrast-underline: rgba(24, 28, 37, .5);--pico-contrast-hover: #000;--pico-contrast-hover-background: #000;--pico-contrast-hover-border: var(--pico-contrast-hover-background);--pico-contrast-hover-underline: var(--pico-secondary-hover);--pico-contrast-focus: rgba(93, 107, 137, .25);--pico-contrast-inverse: #fff;--pico-box-shadow: .0145rem .029rem .174rem rgba(129, 145, 181, .01698), .0335rem .067rem .402rem rgba(129, 145, 181, .024), .0625rem .125rem .75rem rgba(129, 145, 181, .03), .1125rem .225rem 1.35rem rgba(129, 145, 181, .036), .2085rem .417rem 2.502rem rgba(129, 145, 181, .04302), .5rem 1rem 6rem rgba(129, 145, 181, .06), 0 0 0 .0625rem rgba(129, 145, 181, .015);--pico-h1-color: #2d3138;--pico-h2-color: #373c44;--pico-h3-color: #424751;--pico-h4-color: #4d535e;--pico-h5-color: #5c6370;--pico-h6-color: #646b79;--pico-mark-background-color: rgb(252.5, 230.5, 191.5);--pico-mark-color: #0f1114;--pico-ins-color: rgb(28.5, 105.5, 84);--pico-del-color: rgb(136, 56.5, 53);--pico-blockquote-border-color: var(--pico-muted-border-color);--pico-blockquote-footer-color: var(--pico-muted-color);--pico-button-box-shadow: 0 0 0 rgba(0, 0, 0, 0);--pico-button-hover-box-shadow: 0 0 0 rgba(0, 0, 0, 0);--pico-table-border-color: var(--pico-muted-border-color);--pico-table-row-stripped-background-color: rgba(111, 120, 135, .0375);--pico-code-background-color: rgb(243, 244.5, 246.75);--pico-code-color: #646b79;--pico-code-kbd-background-color: var(--pico-color);--pico-code-kbd-color: var(--pico-background-color);--pico-form-element-background-color: rgb(251, 251.5, 252.25);--pico-form-element-selected-background-color: #dfe3eb;--pico-form-element-border-color: #cfd5e2;--pico-form-element-color: #23262c;--pico-form-element-placeholder-color: var(--pico-muted-color);--pico-form-element-active-background-color: #fff;--pico-form-element-active-border-color: var(--pico-primary-border);--pico-form-element-focus-color: var(--pico-primary-border);--pico-form-element-disabled-opacity: .5;--pico-form-element-invalid-border-color: rgb(183.5, 105.5, 106.5);--pico-form-element-invalid-active-border-color: rgb(200.25, 79.25, 72.25);--pico-form-element-invalid-focus-color: var(--pico-form-element-invalid-active-border-color);--pico-form-element-valid-border-color: rgb(76, 154.5, 137.5);--pico-form-element-valid-active-border-color: rgb(39, 152.75, 118.75);--pico-form-element-valid-focus-color: var(--pico-form-element-valid-active-border-color);--pico-switch-background-color: #bfc7d9;--pico-switch-checked-background-color: var(--pico-primary-background);--pico-switch-color: #fff;--pico-switch-thumb-box-shadow: 0 0 0 rgba(0, 0, 0, 0);--pico-range-border-color: #dfe3eb;--pico-range-active-border-color: #bfc7d9;--pico-range-thumb-border-color: var(--pico-background-color);--pico-range-thumb-color: var(--pico-secondary-background);--pico-range-thumb-active-color: var(--pico-primary-background);--pico-accordion-border-color: var(--pico-muted-border-color);--pico-accordion-active-summary-color: var(--pico-primary-hover);--pico-accordion-close-summary-color: var(--pico-color);--pico-accordion-open-summary-color: var(--pico-muted-color);--pico-card-background-color: var(--pico-background-color);--pico-card-border-color: var(--pico-muted-border-color);--pico-card-box-shadow: var(--pico-box-shadow);--pico-card-sectioning-background-color: rgb(251, 251.5, 252.25);--pico-loading-spinner-opacity: .5;--pico-modal-overlay-background-color: rgba(232, 234, 237, .75);--pico-progress-background-color: #dfe3eb;--pico-progress-color: var(--pico-primary-background);--pico-tooltip-background-color: var(--pico-contrast-background);--pico-tooltip-color: var(--pico-contrast-inverse);--pico-icon-valid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(76, 154.5, 137.5)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");--pico-icon-invalid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(200.25, 79.25, 72.25)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='12' y1='8' x2='12' y2='12'%3E%3C/line%3E%3Cline x1='12' y1='16' x2='12.01' y2='16'%3E%3C/line%3E%3C/svg%3E")}[data-theme=light] input:is([type=submit],[type=button],[type=reset],[type=checkbox],[type=radio],[type=file]),:root:not([data-theme=dark]) input:is([type=submit],[type=button],[type=reset],[type=checkbox],[type=radio],[type=file]),:host(:not([data-theme=dark])) input:is([type=submit],[type=button],[type=reset],[type=checkbox],[type=radio],[type=file]){--pico-form-element-focus-color: var(--pico-primary-focus)}@media only screen and (prefers-color-scheme: dark){:root:not([data-theme]),:host(:not([data-theme])){color-scheme:dark;--pico-background-color: rgb(19, 22.5, 30.5);--pico-color: #c2c7d0;--pico-text-selection-color: rgba(162, 148, 229, .1875);--pico-muted-color: #7b8495;--pico-muted-border-color: #202632;--pico-primary: #a294e5;--pico-primary-background: #524ed2;--pico-primary-border: var(--pico-primary-background);--pico-primary-underline: rgba(162, 148, 229, .5);--pico-primary-hover: #bdb2ec;--pico-primary-hover-background: #655cd6;--pico-primary-hover-border: var(--pico-primary-hover-background);--pico-primary-hover-underline: var(--pico-primary-hover);--pico-primary-focus: rgba(162, 148, 229, .375);--pico-primary-inverse: #fff;--pico-secondary: #969eaf;--pico-secondary-background: #525f7a;--pico-secondary-border: var(--pico-secondary-background);--pico-secondary-underline: rgba(150, 158, 175, .5);--pico-secondary-hover: #b3b9c5;--pico-secondary-hover-background: #5d6b89;--pico-secondary-hover-border: var(--pico-secondary-hover-background);--pico-secondary-hover-underline: var(--pico-secondary-hover);--pico-secondary-focus: rgba(144, 158, 190, .25);--pico-secondary-inverse: #fff;--pico-contrast: #dfe3eb;--pico-contrast-background: #eff1f4;--pico-contrast-border: var(--pico-contrast-background);--pico-contrast-underline: rgba(223, 227, 235, .5);--pico-contrast-hover: #fff;--pico-contrast-hover-background: #fff;--pico-contrast-hover-border: var(--pico-contrast-hover-background);--pico-contrast-hover-underline: var(--pico-contrast-hover);--pico-contrast-focus: rgba(207, 213, 226, .25);--pico-contrast-inverse: #000;--pico-box-shadow: .0145rem .029rem .174rem rgba(7, 8.5, 12, .01698), .0335rem .067rem .402rem rgba(7, 8.5, 12, .024), .0625rem .125rem .75rem rgba(7, 8.5, 12, .03), .1125rem .225rem 1.35rem rgba(7, 8.5, 12, .036), .2085rem .417rem 2.502rem rgba(7, 8.5, 12, .04302), .5rem 1rem 6rem rgba(7, 8.5, 12, .06), 0 0 0 .0625rem rgba(7, 8.5, 12, .015);--pico-h1-color: #f0f1f3;--pico-h2-color: #e0e3e7;--pico-h3-color: #c2c7d0;--pico-h4-color: #b3b9c5;--pico-h5-color: #a4acba;--pico-h6-color: #8891a4;--pico-mark-background-color: #014063;--pico-mark-color: #fff;--pico-ins-color: #62af9a;--pico-del-color: rgb(205.5, 126, 123);--pico-blockquote-border-color: var(--pico-muted-border-color);--pico-blockquote-footer-color: var(--pico-muted-color);--pico-button-box-shadow: 0 0 0 rgba(0, 0, 0, 0);--pico-button-hover-box-shadow: 0 0 0 rgba(0, 0, 0, 0);--pico-table-border-color: var(--pico-muted-border-color);--pico-table-row-stripped-background-color: rgba(111, 120, 135, .0375);--pico-code-background-color: rgb(26, 30.5, 40.25);--pico-code-color: #8891a4;--pico-code-kbd-background-color: var(--pico-color);--pico-code-kbd-color: var(--pico-background-color);--pico-form-element-background-color: rgb(28, 33, 43.5);--pico-form-element-selected-background-color: #2a3140;--pico-form-element-border-color: #2a3140;--pico-form-element-color: #e0e3e7;--pico-form-element-placeholder-color: #8891a4;--pico-form-element-active-background-color: rgb(26, 30.5, 40.25);--pico-form-element-active-border-color: var(--pico-primary-border);--pico-form-element-focus-color: var(--pico-primary-border);--pico-form-element-disabled-opacity: .5;--pico-form-element-invalid-border-color: rgb(149.5, 74, 80);--pico-form-element-invalid-active-border-color: rgb(183.25, 63.5, 59);--pico-form-element-invalid-focus-color: var(--pico-form-element-invalid-active-border-color);--pico-form-element-valid-border-color: #2a7b6f;--pico-form-element-valid-active-border-color: rgb(22, 137, 105.5);--pico-form-element-valid-focus-color: var(--pico-form-element-valid-active-border-color);--pico-switch-background-color: #333c4e;--pico-switch-checked-background-color: var(--pico-primary-background);--pico-switch-color: #fff;--pico-switch-thumb-box-shadow: 0 0 0 rgba(0, 0, 0, 0);--pico-range-border-color: #202632;--pico-range-active-border-color: #2a3140;--pico-range-thumb-border-color: var(--pico-background-color);--pico-range-thumb-color: var(--pico-secondary-background);--pico-range-thumb-active-color: var(--pico-primary-background);--pico-accordion-border-color: var(--pico-muted-border-color);--pico-accordion-active-summary-color: var(--pico-primary-hover);--pico-accordion-close-summary-color: var(--pico-color);--pico-accordion-open-summary-color: var(--pico-muted-color);--pico-card-background-color: #181c25;--pico-card-border-color: var(--pico-card-background-color);--pico-card-box-shadow: var(--pico-box-shadow);--pico-card-sectioning-background-color: rgb(26, 30.5, 40.25);--pico-loading-spinner-opacity: .5;--pico-modal-overlay-background-color: rgba(7.5, 8.5, 10, .75);--pico-progress-background-color: #202632;--pico-progress-color: var(--pico-primary-background);--pico-tooltip-background-color: var(--pico-contrast-background);--pico-tooltip-color: var(--pico-contrast-inverse);--pico-icon-valid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(42, 123, 111)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");--pico-icon-invalid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(149.5, 74, 80)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='12' y1='8' x2='12' y2='12'%3E%3C/line%3E%3Cline x1='12' y1='16' x2='12.01' y2='16'%3E%3C/line%3E%3C/svg%3E")}:root:not([data-theme]) input:is([type=submit],[type=button],[type=reset],[type=checkbox],[type=radio],[type=file]),:host(:not([data-theme])) input:is([type=submit],[type=button],[type=reset],[type=checkbox],[type=radio],[type=file]){--pico-form-element-focus-color: var(--pico-primary-focus)}}[data-theme=dark]{color-scheme:dark;--pico-background-color: rgb(19, 22.5, 30.5);--pico-color: #c2c7d0;--pico-text-selection-color: rgba(162, 148, 229, .1875);--pico-muted-color: #7b8495;--pico-muted-border-color: #202632;--pico-primary: #a294e5;--pico-primary-background: #524ed2;--pico-primary-border: var(--pico-primary-background);--pico-primary-underline: rgba(162, 148, 229, .5);--pico-primary-hover: #bdb2ec;--pico-primary-hover-background: #655cd6;--pico-primary-hover-border: var(--pico-primary-hover-background);--pico-primary-hover-underline: var(--pico-primary-hover);--pico-primary-focus: rgba(162, 148, 229, .375);--pico-primary-inverse: #fff;--pico-secondary: #969eaf;--pico-secondary-background: #525f7a;--pico-secondary-border: var(--pico-secondary-background);--pico-secondary-underline: rgba(150, 158, 175, .5);--pico-secondary-hover: #b3b9c5;--pico-secondary-hover-background: #5d6b89;--pico-secondary-hover-border: var(--pico-secondary-hover-background);--pico-secondary-hover-underline: var(--pico-secondary-hover);--pico-secondary-focus: rgba(144, 158, 190, .25);--pico-secondary-inverse: #fff;--pico-contrast: #dfe3eb;--pico-contrast-background: #eff1f4;--pico-contrast-border: var(--pico-contrast-background);--pico-contrast-underline: rgba(223, 227, 235, .5);--pico-contrast-hover: #fff;--pico-contrast-hover-background: #fff;--pico-contrast-hover-border: var(--pico-contrast-hover-background);--pico-contrast-hover-underline: var(--pico-contrast-hover);--pico-contrast-focus: rgba(207, 213, 226, .25);--pico-contrast-inverse: #000;--pico-box-shadow: .0145rem .029rem .174rem rgba(7, 8.5, 12, .01698), .0335rem .067rem .402rem rgba(7, 8.5, 12, .024), .0625rem .125rem .75rem rgba(7, 8.5, 12, .03), .1125rem .225rem 1.35rem rgba(7, 8.5, 12, .036), .2085rem .417rem 2.502rem rgba(7, 8.5, 12, .04302), .5rem 1rem 6rem rgba(7, 8.5, 12, .06), 0 0 0 .0625rem rgba(7, 8.5, 12, .015);--pico-h1-color: #f0f1f3;--pico-h2-color: #e0e3e7;--pico-h3-color: #c2c7d0;--pico-h4-color: #b3b9c5;--pico-h5-color: #a4acba;--pico-h6-color: #8891a4;--pico-mark-background-color: #014063;--pico-mark-color: #fff;--pico-ins-color: #62af9a;--pico-del-color: rgb(205.5, 126, 123);--pico-blockquote-border-color: var(--pico-muted-border-color);--pico-blockquote-footer-color: var(--pico-muted-color);--pico-button-box-shadow: 0 0 0 rgba(0, 0, 0, 0);--pico-button-hover-box-shadow: 0 0 0 rgba(0, 0, 0, 0);--pico-table-border-color: var(--pico-muted-border-color);--pico-table-row-stripped-background-color: rgba(111, 120, 135, .0375);--pico-code-background-color: rgb(26, 30.5, 40.25);--pico-code-color: #8891a4;--pico-code-kbd-background-color: var(--pico-color);--pico-code-kbd-color: var(--pico-background-color);--pico-form-element-background-color: rgb(28, 33, 43.5);--pico-form-element-selected-background-color: #2a3140;--pico-form-element-border-color: #2a3140;--pico-form-element-color: #e0e3e7;--pico-form-element-placeholder-color: #8891a4;--pico-form-element-active-background-color: rgb(26, 30.5, 40.25);--pico-form-element-active-border-color: var(--pico-primary-border);--pico-form-element-focus-color: var(--pico-primary-border);--pico-form-element-disabled-opacity: .5;--pico-form-element-invalid-border-color: rgb(149.5, 74, 80);--pico-form-element-invalid-active-border-color: rgb(183.25, 63.5, 59);--pico-form-element-invalid-focus-color: var(--pico-form-element-invalid-active-border-color);--pico-form-element-valid-border-color: #2a7b6f;--pico-form-element-valid-active-border-color: rgb(22, 137, 105.5);--pico-form-element-valid-focus-color: var(--pico-form-element-valid-active-border-color);--pico-switch-background-color: #333c4e;--pico-switch-checked-background-color: var(--pico-primary-background);--pico-switch-color: #fff;--pico-switch-thumb-box-shadow: 0 0 0 rgba(0, 0, 0, 0);--pico-range-border-color: #202632;--pico-range-active-border-color: #2a3140;--pico-range-thumb-border-color: var(--pico-background-color);--pico-range-thumb-color: var(--pico-secondary-background);--pico-range-thumb-active-color: var(--pico-primary-background);--pico-accordion-border-color: var(--pico-muted-border-color);--pico-accordion-active-summary-color: var(--pico-primary-hover);--pico-accordion-close-summary-color: var(--pico-color);--pico-accordion-open-summary-color: var(--pico-muted-color);--pico-card-background-color: #181c25;--pico-card-border-color: var(--pico-card-background-color);--pico-card-box-shadow: var(--pico-box-shadow);--pico-card-sectioning-background-color: rgb(26, 30.5, 40.25);--pico-loading-spinner-opacity: .5;--pico-modal-overlay-background-color: rgba(7.5, 8.5, 10, .75);--pico-progress-background-color: #202632;--pico-progress-color: var(--pico-primary-background);--pico-tooltip-background-color: var(--pico-contrast-background);--pico-tooltip-color: var(--pico-contrast-inverse);--pico-icon-valid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(42, 123, 111)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");--pico-icon-invalid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(149.5, 74, 80)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='12' y1='8' x2='12' y2='12'%3E%3C/line%3E%3Cline x1='12' y1='16' x2='12.01' y2='16'%3E%3C/line%3E%3C/svg%3E")}[data-theme=dark] input:is([type=submit],[type=button],[type=reset],[type=checkbox],[type=radio],[type=file]){--pico-form-element-focus-color: var(--pico-primary-focus)}progress,[type=checkbox],[type=radio],[type=range]{accent-color:var(--pico-primary)}*,*:before,*:after{box-sizing:border-box;background-repeat:no-repeat}:before,:after{text-decoration:inherit;vertical-align:inherit}:where(:root),:where(:host){-webkit-tap-highlight-color:transparent;-webkit-text-size-adjust:100%;text-size-adjust:100%;background-color:var(--pico-background-color);color:var(--pico-color);font-weight:var(--pico-font-weight);font-size:var(--pico-font-size);line-height:var(--pico-line-height);font-family:var(--pico-font-family);text-underline-offset:var(--pico-text-underline-offset);text-rendering:optimizeLegibility;overflow-wrap:break-word;-moz-tab-size:4;tab-size:4}body{width:100%;margin:0}main{display:block}#root>header,#root>main,#root>footer{width:100%;margin-right:auto;margin-left:auto;padding:var(--pico-block-spacing-vertical) var(--pico-block-spacing-horizontal)}@media (min-width: 576px){#root>header,#root>main,#root>footer{max-width:510px;padding-right:0;padding-left:0}}@media (min-width: 768px){#root>header,#root>main,#root>footer{max-width:700px}}@media (min-width: 1024px){#root>header,#root>main,#root>footer{max-width:950px}}@media (min-width: 1280px){#root>header,#root>main,#root>footer{max-width:1200px}}@media (min-width: 1536px){#root>header,#root>main,#root>footer{max-width:1450px}}section{margin-bottom:var(--pico-block-spacing-vertical)}b,strong{font-weight:bolder}sub,sup{position:relative;font-size:.75em;line-height:0;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}address,blockquote,dl,ol,p,pre,table,ul{margin-top:0;margin-bottom:var(--pico-typography-spacing-vertical);color:var(--pico-color);font-style:normal;font-weight:var(--pico-font-weight)}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:var(--pico-typography-spacing-vertical);color:var(--pico-color);font-weight:var(--pico-font-weight);font-size:var(--pico-font-size);line-height:var(--pico-line-height);font-family:var(--pico-font-family)}h1{--pico-color: var(--pico-h1-color)}h2{--pico-color: var(--pico-h2-color)}h3{--pico-color: var(--pico-h3-color)}h4{--pico-color: var(--pico-h4-color)}h5{--pico-color: var(--pico-h5-color)}h6{--pico-color: var(--pico-h6-color)}:where(article,address,blockquote,dl,figure,form,ol,p,pre,table,ul)~:is(h1,h2,h3,h4,h5,h6){margin-top:var(--pico-typography-spacing-top)}p{margin-bottom:var(--pico-typography-spacing-vertical)}hgroup{margin-bottom:var(--pico-typography-spacing-vertical)}hgroup>*{margin-top:0;margin-bottom:0}hgroup>*:not(:first-child):last-child{--pico-color: var(--pico-muted-color);--pico-font-weight: unset;font-size:1rem}:where(ol,ul) li{margin-bottom:calc(var(--pico-typography-spacing-vertical) * .25)}:where(dl,ol,ul) :where(dl,ol,ul){margin:0;margin-top:calc(var(--pico-typography-spacing-vertical) * .25)}ul li{list-style:square}mark{padding:.125rem .25rem;background-color:var(--pico-mark-background-color);color:var(--pico-mark-color);vertical-align:baseline}blockquote{display:block;margin:var(--pico-typography-spacing-vertical) 0;padding:var(--pico-spacing);border-right:none;border-left:.25rem solid var(--pico-blockquote-border-color);border-inline-start:.25rem solid var(--pico-blockquote-border-color);border-inline-end:none}blockquote footer{margin-top:calc(var(--pico-typography-spacing-vertical) * .5);color:var(--pico-blockquote-footer-color)}abbr[title]{border-bottom:1px dotted;text-decoration:none;cursor:help}ins{color:var(--pico-ins-color);text-decoration:none}del{color:var(--pico-del-color)}::selection{background-color:var(--pico-text-selection-color)}:where(a:not([role=button])),[role=link]{--pico-color: var(--pico-primary);--pico-background-color: transparent;--pico-underline: var(--pico-primary-underline);outline:none;background-color:var(--pico-background-color);color:var(--pico-color);text-decoration:var(--pico-text-decoration);text-decoration-color:var(--pico-underline);text-underline-offset:.125em;transition:background-color var(--pico-transition),color var(--pico-transition),text-decoration var(--pico-transition),box-shadow var(--pico-transition)}:where(a:not([role=button])):is([aria-current]:not([aria-current=false]),:hover,:active,:focus),[role=link]:is([aria-current]:not([aria-current=false]),:hover,:active,:focus){--pico-color: var(--pico-primary-hover);--pico-underline: var(--pico-primary-hover-underline);--pico-text-decoration: underline}:where(a:not([role=button])):focus-visible,[role=link]:focus-visible{box-shadow:0 0 0 var(--pico-outline-width) var(--pico-primary-focus)}a[role=button]{display:inline-block}button{margin:0;overflow:visible;font-family:inherit;text-transform:none}button,[type=submit],[type=reset],[type=button]{-webkit-appearance:button}button,[type=submit],[type=reset],[type=button],[type=file]::file-selector-button,[role=button]{--pico-background-color: var(--pico-primary-background);--pico-border-color: var(--pico-primary-border);--pico-color: var(--pico-primary-inverse);--pico-box-shadow: var(--pico-button-box-shadow, 0 0 0 rgba(0, 0, 0, 0));padding:var(--pico-form-element-spacing-vertical) var(--pico-form-element-spacing-horizontal);border:var(--pico-border-width) solid var(--pico-border-color);border-radius:var(--pico-border-radius);outline:none;background-color:var(--pico-background-color);box-shadow:var(--pico-box-shadow);color:var(--pico-color);font-weight:var(--pico-font-weight);font-size:1rem;line-height:var(--pico-line-height);text-align:center;text-decoration:none;cursor:pointer;-webkit-user-select:none;user-select:none;transition:background-color var(--pico-transition),border-color var(--pico-transition),color var(--pico-transition),box-shadow var(--pico-transition)}button:is([aria-current]:not([aria-current=false])),button:is(:hover,:active,:focus),[type=submit]:is([aria-current]:not([aria-current=false])),[type=submit]:is(:hover,:active,:focus),[type=reset]:is([aria-current]:not([aria-current=false])),[type=reset]:is(:hover,:active,:focus),[type=button]:is([aria-current]:not([aria-current=false])),[type=button]:is(:hover,:active,:focus),[type=file]::file-selector-button:is([aria-current]:not([aria-current=false])),[type=file]::file-selector-button:is(:hover,:active,:focus),[role=button]:is([aria-current]:not([aria-current=false])),[role=button]:is(:hover,:active,:focus){--pico-background-color: var(--pico-primary-hover-background);--pico-border-color: var(--pico-primary-hover-border);--pico-box-shadow: var(--pico-button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0));--pico-color: var(--pico-primary-inverse)}button:focus,button:is([aria-current]:not([aria-current=false])):focus,[type=submit]:focus,[type=submit]:is([aria-current]:not([aria-current=false])):focus,[type=reset]:focus,[type=reset]:is([aria-current]:not([aria-current=false])):focus,[type=button]:focus,[type=button]:is([aria-current]:not([aria-current=false])):focus,[type=file]::file-selector-button:focus,[type=file]::file-selector-button:is([aria-current]:not([aria-current=false])):focus,[role=button]:focus,[role=button]:is([aria-current]:not([aria-current=false])):focus{--pico-box-shadow: var(--pico-button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0)), 0 0 0 var(--pico-outline-width) var(--pico-primary-focus)}[type=submit],[type=reset],[type=button]{margin-bottom:var(--pico-spacing)}[type=reset],[type=file]::file-selector-button{--pico-background-color: var(--pico-secondary-background);--pico-border-color: var(--pico-secondary-border);--pico-color: var(--pico-secondary-inverse);cursor:pointer}[type=reset]:is([aria-current]:not([aria-current=false]),:hover,:active,:focus),[type=file]::file-selector-button:is([aria-current]:not([aria-current=false]),:hover,:active,:focus){--pico-background-color: var(--pico-secondary-hover-background);--pico-border-color: var(--pico-secondary-hover-border);--pico-color: var(--pico-secondary-inverse)}[type=reset]:focus,[type=file]::file-selector-button:focus{--pico-box-shadow: var(--pico-button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0)), 0 0 0 var(--pico-outline-width) var(--pico-secondary-focus)}:where(button,[type=submit],[type=reset],[type=button],[role=button])[disabled],:where(fieldset[disabled]) :is(button,[type=submit],[type=button],[type=reset],[role=button]){opacity:.5;pointer-events:none}:where(table){width:100%;border-collapse:collapse;border-spacing:0;text-indent:0}th,td{padding:calc(var(--pico-spacing) / 2) var(--pico-spacing);border-bottom:var(--pico-border-width) solid var(--pico-table-border-color);background-color:var(--pico-background-color);color:var(--pico-color);font-weight:var(--pico-font-weight);text-align:left;text-align:start}tfoot th,tfoot td{border-top:var(--pico-border-width) solid var(--pico-table-border-color);border-bottom:0}table.striped tbody tr:nth-child(odd) th,table.striped tbody tr:nth-child(odd) td{background-color:var(--pico-table-row-stripped-background-color)}:where(audio,canvas,iframe,img,svg,video){vertical-align:middle}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}:where(iframe){border-style:none}img{max-width:100%;height:auto;border-style:none}:where(svg:not([fill])){fill:currentColor}svg:not(:root),svg:not(:host){overflow:hidden}pre,code,kbd,samp{font-size:.875em;font-family:var(--pico-font-family)}pre code,pre samp{font-size:inherit;font-family:inherit}pre{-ms-overflow-style:scrollbar;overflow:auto}pre,code,kbd,samp{border-radius:var(--pico-border-radius);background:var(--pico-code-background-color);color:var(--pico-code-color);font-weight:var(--pico-font-weight);line-height:initial}code,kbd,samp{display:inline-block;padding:.375rem}pre{display:block;margin-bottom:var(--pico-spacing);overflow-x:auto}pre>code,pre>samp{display:block;padding:var(--pico-spacing);background:none;line-height:var(--pico-line-height)}kbd{background-color:var(--pico-code-kbd-background-color);color:var(--pico-code-kbd-color);vertical-align:baseline}figure{display:block;margin:0;padding:0}figure figcaption{padding:calc(var(--pico-spacing) * .5) 0;color:var(--pico-muted-color)}hr{height:0;margin:var(--pico-typography-spacing-vertical) 0;border:0;border-top:1px solid var(--pico-muted-border-color);color:inherit}[hidden],template{display:none!important}canvas{display:inline-block}input,optgroup,select,textarea{margin:0;font-size:1rem;line-height:var(--pico-line-height);font-family:inherit;letter-spacing:inherit}input{overflow:visible}select{text-transform:none}legend{max-width:100%;padding:0;color:inherit;white-space:normal}textarea{overflow:auto}[type=checkbox],[type=radio]{padding:0}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}::-moz-focus-inner{padding:0;border-style:none}:-moz-focusring{outline:none}:-moz-ui-invalid{box-shadow:none}::-ms-expand{display:none}[type=file],[type=range]{padding:0;border-width:0}input:not([type=checkbox],[type=radio],[type=range]){height:calc(1rem * var(--pico-line-height) + var(--pico-form-element-spacing-vertical) * 2 + var(--pico-border-width) * 2)}fieldset{width:100%;margin:0;margin-bottom:var(--pico-spacing);padding:0;border:0}label,fieldset legend{display:block;margin-bottom:calc(var(--pico-spacing) * .375);color:var(--pico-color);font-weight:var(--pico-form-label-font-weight, var(--pico-font-weight))}fieldset legend{margin-bottom:calc(var(--pico-spacing) * .5)}input:not([type=checkbox],[type=radio]),button[type=submit],select,textarea{width:100%}input:not([type=checkbox],[type=radio],[type=range],[type=file]),select,textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:var(--pico-form-element-spacing-vertical) var(--pico-form-element-spacing-horizontal)}input,select,textarea{--pico-background-color: var(--pico-form-element-background-color);--pico-border-color: var(--pico-form-element-border-color);--pico-color: var(--pico-form-element-color);--pico-box-shadow: none;border:var(--pico-border-width) solid var(--pico-border-color);border-radius:var(--pico-border-radius);outline:none;background-color:var(--pico-background-color);box-shadow:var(--pico-box-shadow);color:var(--pico-color);font-weight:var(--pico-font-weight);transition:background-color var(--pico-transition),border-color var(--pico-transition),color var(--pico-transition),box-shadow var(--pico-transition)}input:not([type=submit],[type=button],[type=reset],[type=checkbox],[type=radio],[readonly]):is(:active,:focus),:where(select,textarea):not([readonly]):is(:active,:focus){--pico-background-color: var(--pico-form-element-active-background-color)}input:not([type=submit],[type=button],[type=reset],[role=switch],[readonly]):is(:active,:focus),:where(select,textarea):not([readonly]):is(:active,:focus){--pico-border-color: var(--pico-form-element-active-border-color)}input:not([type=submit],[type=button],[type=reset],[type=range],[type=file],[readonly]):focus,:where(select,textarea):not([readonly]):focus{--pico-box-shadow: 0 0 0 var(--pico-outline-width) var(--pico-form-element-focus-color)}input:not([type=submit],[type=button],[type=reset])[disabled],select[disabled],textarea[disabled],label[aria-disabled=true],:where(fieldset[disabled]) :is(input:not([type=submit],[type=button],[type=reset]),select,textarea){opacity:var(--pico-form-element-disabled-opacity);pointer-events:none}label[aria-disabled=true] input[disabled]{opacity:1}:where(input,select,textarea):not([type=checkbox],[type=radio],[type=date],[type=datetime-local],[type=month],[type=time],[type=week],[type=range])[aria-invalid]{padding-right:calc(var(--pico-form-element-spacing-horizontal) + 1.5rem)!important;padding-left:var(--pico-form-element-spacing-horizontal);padding-inline-start:var(--pico-form-element-spacing-horizontal)!important;padding-inline-end:calc(var(--pico-form-element-spacing-horizontal) + 1.5rem)!important;background-position:center right .75rem;background-size:1rem auto;background-repeat:no-repeat}:where(input,select,textarea):not([type=checkbox],[type=radio],[type=date],[type=datetime-local],[type=month],[type=time],[type=week],[type=range])[aria-invalid=false]:not(select){background-image:var(--pico-icon-valid)}:where(input,select,textarea):not([type=checkbox],[type=radio],[type=date],[type=datetime-local],[type=month],[type=time],[type=week],[type=range])[aria-invalid=true]:not(select){background-image:var(--pico-icon-invalid)}:where(input,select,textarea)[aria-invalid=false]{--pico-border-color: var(--pico-form-element-valid-border-color)}:where(input,select,textarea)[aria-invalid=false]:is(:active,:focus){--pico-border-color: var(--pico-form-element-valid-active-border-color) !important}:where(input,select,textarea)[aria-invalid=false]:is(:active,:focus):not([type=checkbox],[type=radio]){--pico-box-shadow: 0 0 0 var(--pico-outline-width) var(--pico-form-element-valid-focus-color) !important}:where(input,select,textarea)[aria-invalid=true]{--pico-border-color: var(--pico-form-element-invalid-border-color)}:where(input,select,textarea)[aria-invalid=true]:is(:active,:focus){--pico-border-color: var(--pico-form-element-invalid-active-border-color) !important}:where(input,select,textarea)[aria-invalid=true]:is(:active,:focus):not([type=checkbox],[type=radio]){--pico-box-shadow: 0 0 0 var(--pico-outline-width) var(--pico-form-element-invalid-focus-color) !important}[dir=rtl] :where(input,select,textarea):not([type=checkbox],[type=radio]):is([aria-invalid],[aria-invalid=true],[aria-invalid=false]){background-position:center left .75rem}input::placeholder,input::-webkit-input-placeholder,textarea::placeholder,textarea::-webkit-input-placeholder,select:invalid{color:var(--pico-form-element-placeholder-color);opacity:1}input:not([type=checkbox],[type=radio]),select,textarea{margin-bottom:var(--pico-spacing)}select::-ms-expand{border:0;background-color:transparent}select:not([multiple],[size]){padding-right:calc(var(--pico-form-element-spacing-horizontal) + 1.5rem);padding-left:var(--pico-form-element-spacing-horizontal);padding-inline-start:var(--pico-form-element-spacing-horizontal);padding-inline-end:calc(var(--pico-form-element-spacing-horizontal) + 1.5rem);background-image:var(--pico-icon-chevron);background-position:center right .75rem;background-size:1rem auto;background-repeat:no-repeat}select[multiple] option:checked{background:var(--pico-form-element-selected-background-color);color:var(--pico-form-element-color)}[dir=rtl] select:not([multiple],[size]){background-position:center left .75rem}textarea{display:block;resize:vertical}textarea[aria-invalid]{--pico-icon-height: calc(1rem * var(--pico-line-height) + var(--pico-form-element-spacing-vertical) * 2 + var(--pico-border-width) * 2);background-position:top right .75rem!important;background-size:1rem var(--pico-icon-height)!important}:where(input,select,textarea,fieldset)+small{display:block;width:100%;margin-top:calc(var(--pico-spacing) * -.75);margin-bottom:var(--pico-spacing);color:var(--pico-muted-color)}:where(input,select,textarea,fieldset)[aria-invalid=false]+small{color:var(--pico-ins-color)}:where(input,select,textarea,fieldset)[aria-invalid=true]+small{color:var(--pico-del-color)}label>:where(input,select,textarea){margin-top:calc(var(--pico-spacing) * .25)}label:has([type=checkbox],[type=radio]){width:fit-content;cursor:pointer}[type=checkbox],[type=radio]{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:1.25em;height:1.25em;margin-top:-.125em;margin-inline-end:.5em;border-width:var(--pico-border-width);vertical-align:middle;cursor:pointer}[type=checkbox]::-ms-check,[type=radio]::-ms-check{display:none}[type=checkbox]:checked,[type=checkbox]:checked:active,[type=checkbox]:checked:focus,[type=radio]:checked,[type=radio]:checked:active,[type=radio]:checked:focus{--pico-background-color: var(--pico-primary-background);--pico-border-color: var(--pico-primary-border);background-image:var(--pico-icon-checkbox);background-position:center;background-size:.75em auto;background-repeat:no-repeat}[type=checkbox]~label,[type=radio]~label{display:inline-block;margin-bottom:0;cursor:pointer}[type=checkbox]~label:not(:last-of-type),[type=radio]~label:not(:last-of-type){margin-inline-end:1em}[type=checkbox]:indeterminate{--pico-background-color: var(--pico-primary-background);--pico-border-color: var(--pico-primary-border);background-image:var(--pico-icon-minus);background-position:center;background-size:.75em auto;background-repeat:no-repeat}[type=radio]{border-radius:50%}[type=radio]:checked,[type=radio]:checked:active,[type=radio]:checked:focus{--pico-background-color: var(--pico-primary-inverse);border-width:.35em;background-image:none}[type=checkbox][role=switch]{--pico-background-color: var(--pico-switch-background-color);--pico-color: var(--pico-switch-color);width:2.25em;height:1.25em;border:var(--pico-border-width) solid var(--pico-border-color);border-radius:1.25em;background-color:var(--pico-background-color);line-height:1.25em}[type=checkbox][role=switch]:not([aria-invalid]){--pico-border-color: var(--pico-switch-background-color)}[type=checkbox][role=switch]:before{display:block;aspect-ratio:1;height:100%;border-radius:50%;background-color:var(--pico-color);box-shadow:var(--pico-switch-thumb-box-shadow);content:"";transition:margin .1s ease-in-out}[type=checkbox][role=switch]:focus{--pico-background-color: var(--pico-switch-background-color);--pico-border-color: var(--pico-switch-background-color)}[type=checkbox][role=switch]:checked{--pico-background-color: var(--pico-switch-checked-background-color);--pico-border-color: var(--pico-switch-checked-background-color);background-image:none}[type=checkbox][role=switch]:checked:before{margin-inline-start:1em}[type=checkbox][role=switch][disabled]{--pico-background-color: var(--pico-border-color)}[type=checkbox][aria-invalid=false]:checked,[type=checkbox][aria-invalid=false]:checked:active,[type=checkbox][aria-invalid=false]:checked:focus,[type=checkbox][role=switch][aria-invalid=false]:checked,[type=checkbox][role=switch][aria-invalid=false]:checked:active,[type=checkbox][role=switch][aria-invalid=false]:checked:focus{--pico-background-color: var(--pico-form-element-valid-border-color)}[type=checkbox]:checked[aria-invalid=true],[type=checkbox]:checked:active[aria-invalid=true],[type=checkbox]:checked:focus[aria-invalid=true],[type=checkbox][role=switch]:checked[aria-invalid=true],[type=checkbox][role=switch]:checked:active[aria-invalid=true],[type=checkbox][role=switch]:checked:focus[aria-invalid=true]{--pico-background-color: var(--pico-form-element-invalid-border-color)}[type=checkbox][aria-invalid=false]:checked,[type=checkbox][aria-invalid=false]:checked:active,[type=checkbox][aria-invalid=false]:checked:focus,[type=radio][aria-invalid=false]:checked,[type=radio][aria-invalid=false]:checked:active,[type=radio][aria-invalid=false]:checked:focus,[type=checkbox][role=switch][aria-invalid=false]:checked,[type=checkbox][role=switch][aria-invalid=false]:checked:active,[type=checkbox][role=switch][aria-invalid=false]:checked:focus{--pico-border-color: var(--pico-form-element-valid-border-color)}[type=checkbox]:checked[aria-invalid=true],[type=checkbox]:checked:active[aria-invalid=true],[type=checkbox]:checked:focus[aria-invalid=true],[type=radio]:checked[aria-invalid=true],[type=radio]:checked:active[aria-invalid=true],[type=radio]:checked:focus[aria-invalid=true],[type=checkbox][role=switch]:checked[aria-invalid=true],[type=checkbox][role=switch]:checked:active[aria-invalid=true],[type=checkbox][role=switch]:checked:focus[aria-invalid=true]{--pico-border-color: var(--pico-form-element-invalid-border-color)}[type=color]::-webkit-color-swatch-wrapper{padding:0}[type=color]::-moz-focus-inner{padding:0}[type=color]::-webkit-color-swatch{border:0;border-radius:calc(var(--pico-border-radius) * .5)}[type=color]::-moz-color-swatch{border:0;border-radius:calc(var(--pico-border-radius) * .5)}input:not([type=checkbox],[type=radio],[type=range],[type=file]):is([type=date],[type=datetime-local],[type=month],[type=time],[type=week]){--pico-icon-position: .75rem;--pico-icon-width: 1rem;padding-right:calc(var(--pico-icon-width) + var(--pico-icon-position));background-image:var(--pico-icon-date);background-position:center right var(--pico-icon-position);background-size:var(--pico-icon-width) auto;background-repeat:no-repeat}input:not([type=checkbox],[type=radio],[type=range],[type=file])[type=time]{background-image:var(--pico-icon-time)}[type=date]::-webkit-calendar-picker-indicator,[type=datetime-local]::-webkit-calendar-picker-indicator,[type=month]::-webkit-calendar-picker-indicator,[type=time]::-webkit-calendar-picker-indicator,[type=week]::-webkit-calendar-picker-indicator{width:var(--pico-icon-width);margin-right:calc(var(--pico-icon-width) * -1);margin-left:var(--pico-icon-position);opacity:0}@-moz-document url-prefix(){[type=date],[type=datetime-local],[type=month],[type=time],[type=week]{padding-right:var(--pico-form-element-spacing-horizontal)!important;background-image:none!important}}[dir=rtl] :is([type=date],[type=datetime-local],[type=month],[type=time],[type=week]){text-align:right}[type=file]{--pico-color: var(--pico-muted-color);margin-left:calc(var(--pico-outline-width) * -1);padding:calc(var(--pico-form-element-spacing-vertical) * .5) 0;padding-left:var(--pico-outline-width);border:0;border-radius:0;background:none}[type=file]::file-selector-button{margin-right:calc(var(--pico-spacing) / 2);padding:calc(var(--pico-form-element-spacing-vertical) * .5) var(--pico-form-element-spacing-horizontal)}[type=file]:is(:hover,:active,:focus)::file-selector-button{--pico-background-color: var(--pico-secondary-hover-background);--pico-border-color: var(--pico-secondary-hover-border)}[type=file]:focus::file-selector-button{--pico-box-shadow: var(--pico-button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0)), 0 0 0 var(--pico-outline-width) var(--pico-secondary-focus)}[type=range]{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:100%;height:1.25rem;background:none}[type=range]::-webkit-slider-runnable-track{width:100%;height:.375rem;border-radius:var(--pico-border-radius);background-color:var(--pico-range-border-color);transition:background-color var(--pico-transition),box-shadow var(--pico-transition)}[type=range]::-moz-range-track{width:100%;height:.375rem;border-radius:var(--pico-border-radius);background-color:var(--pico-range-border-color);transition:background-color var(--pico-transition),box-shadow var(--pico-transition)}[type=range]::-ms-track{width:100%;height:.375rem;border-radius:var(--pico-border-radius);background-color:var(--pico-range-border-color);transition:background-color var(--pico-transition),box-shadow var(--pico-transition)}[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:1.25rem;height:1.25rem;margin-top:-.4375rem;border:2px solid var(--pico-range-thumb-border-color);border-radius:50%;background-color:var(--pico-range-thumb-color);cursor:pointer;transition:background-color var(--pico-transition),transform var(--pico-transition)}[type=range]::-moz-range-thumb{-webkit-appearance:none;width:1.25rem;height:1.25rem;margin-top:-.4375rem;border:2px solid var(--pico-range-thumb-border-color);border-radius:50%;background-color:var(--pico-range-thumb-color);cursor:pointer;transition:background-color var(--pico-transition),transform var(--pico-transition)}[type=range]::-ms-thumb{-webkit-appearance:none;width:1.25rem;height:1.25rem;margin-top:-.4375rem;border:2px solid var(--pico-range-thumb-border-color);border-radius:50%;background-color:var(--pico-range-thumb-color);cursor:pointer;transition:background-color var(--pico-transition),transform var(--pico-transition)}[type=range]:active,[type=range]:focus-within{--pico-range-border-color: var(--pico-range-active-border-color);--pico-range-thumb-color: var(--pico-range-thumb-active-color)}[type=range]:active::-webkit-slider-thumb{transform:scale(1.25)}[type=range]:active::-moz-range-thumb{transform:scale(1.25)}[type=range]:active::-ms-thumb{transform:scale(1.25)}input:not([type=checkbox],[type=radio],[type=range],[type=file])[type=search]{padding-inline-start:calc(var(--pico-form-element-spacing-horizontal) + 1.75rem);background-image:var(--pico-icon-search);background-position:center left calc(var(--pico-form-element-spacing-horizontal) + .125rem);background-size:1rem auto;background-repeat:no-repeat}input:not([type=checkbox],[type=radio],[type=range],[type=file])[type=search][aria-invalid]{padding-inline-start:calc(var(--pico-form-element-spacing-horizontal) + 1.75rem)!important;background-position:center left 1.125rem,center right .75rem}input:not([type=checkbox],[type=radio],[type=range],[type=file])[type=search][aria-invalid=false]{background-image:var(--pico-icon-search),var(--pico-icon-valid)}input:not([type=checkbox],[type=radio],[type=range],[type=file])[type=search][aria-invalid=true]{background-image:var(--pico-icon-search),var(--pico-icon-invalid)}[dir=rtl] :where(input):not([type=checkbox],[type=radio],[type=range],[type=file])[type=search]{background-position:center right 1.125rem}[dir=rtl] :where(input):not([type=checkbox],[type=radio],[type=range],[type=file])[type=search][aria-invalid]{background-position:center right 1.125rem,center left .75rem}details{display:block;margin-bottom:var(--pico-spacing)}details summary{line-height:1rem;list-style-type:none;cursor:pointer;transition:color var(--pico-transition)}details summary:not([role]){color:var(--pico-accordion-close-summary-color)}details summary::-webkit-details-marker{display:none}details summary::marker{display:none}details summary::-moz-list-bullet{list-style-type:none}details summary:after{display:block;width:1rem;height:1rem;margin-inline-start:calc(var(--pico-spacing, 1rem) * .5);float:right;transform:rotate(-90deg);background-image:var(--pico-icon-chevron);background-position:right center;background-size:1rem auto;background-repeat:no-repeat;content:"";transition:transform var(--pico-transition)}details summary:focus{outline:none}details summary:focus:not([role]){color:var(--pico-accordion-active-summary-color)}details summary:focus-visible:not([role]){outline:var(--pico-outline-width) solid var(--pico-primary-focus);outline-offset:calc(var(--pico-spacing, 1rem) * .5);color:var(--pico-primary)}details summary[role=button]{width:100%;text-align:left}details summary[role=button]:after{height:calc(1rem * var(--pico-line-height, 1.5))}details[open]>summary{margin-bottom:var(--pico-spacing)}details[open]>summary:not([role]):not(:focus){color:var(--pico-accordion-open-summary-color)}details[open]>summary:after{transform:rotate(0)}[dir=rtl] details summary{text-align:right}[dir=rtl] details summary:after{float:left;background-position:left center}article{margin-bottom:var(--pico-block-spacing-vertical);padding:var(--pico-block-spacing-vertical) var(--pico-block-spacing-horizontal);border-radius:var(--pico-border-radius);background:var(--pico-card-background-color);box-shadow:var(--pico-card-box-shadow)}article>header,article>footer{margin-right:calc(var(--pico-block-spacing-horizontal) * -1);margin-left:calc(var(--pico-block-spacing-horizontal) * -1);padding:calc(var(--pico-block-spacing-vertical) * .66) var(--pico-block-spacing-horizontal);background-color:var(--pico-card-sectioning-background-color)}article>header{margin-top:calc(var(--pico-block-spacing-vertical) * -1);margin-bottom:var(--pico-block-spacing-vertical);border-bottom:var(--pico-border-width) solid var(--pico-card-border-color);border-top-right-radius:var(--pico-border-radius);border-top-left-radius:var(--pico-border-radius)}article>footer{margin-top:var(--pico-block-spacing-vertical);margin-bottom:calc(var(--pico-block-spacing-vertical) * -1);border-top:var(--pico-border-width) solid var(--pico-card-border-color);border-bottom-right-radius:var(--pico-border-radius);border-bottom-left-radius:var(--pico-border-radius)}[role=search],[role=group]{display:inline-flex;position:relative;width:100%;margin-bottom:var(--pico-spacing);border-radius:var(--pico-border-radius);box-shadow:var(--pico-group-box-shadow, 0 0 0 rgba(0, 0, 0, 0));vertical-align:middle;transition:box-shadow var(--pico-transition)}[role=search]>*,[role=search] input:not([type=checkbox],[type=radio]),[role=search] select,[role=group]>*,[role=group] input:not([type=checkbox],[type=radio]),[role=group] select{position:relative;flex:1 1 auto;margin-bottom:0}[role=search]>*:not(:first-child),[role=search] input:not([type=checkbox],[type=radio]):not(:first-child),[role=search] select:not(:first-child),[role=group]>*:not(:first-child),[role=group] input:not([type=checkbox],[type=radio]):not(:first-child),[role=group] select:not(:first-child){margin-left:0;border-top-left-radius:0;border-bottom-left-radius:0}[role=search]>*:not(:last-child),[role=search] input:not([type=checkbox],[type=radio]):not(:last-child),[role=search] select:not(:last-child),[role=group]>*:not(:last-child),[role=group] input:not([type=checkbox],[type=radio]):not(:last-child),[role=group] select:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}[role=search]>*:focus,[role=search] input:not([type=checkbox],[type=radio]):focus,[role=search] select:focus,[role=group]>*:focus,[role=group] input:not([type=checkbox],[type=radio]):focus,[role=group] select:focus{z-index:2}[role=search] button:not(:first-child),[role=search] [type=submit]:not(:first-child),[role=search] [type=reset]:not(:first-child),[role=search] [type=button]:not(:first-child),[role=search] [role=button]:not(:first-child),[role=search] input:not([type=checkbox],[type=radio]):not(:first-child),[role=search] select:not(:first-child),[role=group] button:not(:first-child),[role=group] [type=submit]:not(:first-child),[role=group] [type=reset]:not(:first-child),[role=group] [type=button]:not(:first-child),[role=group] [role=button]:not(:first-child),[role=group] input:not([type=checkbox],[type=radio]):not(:first-child),[role=group] select:not(:first-child){margin-left:calc(var(--pico-border-width) * -1)}[role=search] button,[role=search] [type=submit],[role=search] [type=reset],[role=search] [type=button],[role=search] [role=button],[role=group] button,[role=group] [type=submit],[role=group] [type=reset],[role=group] [type=button],[role=group] [role=button]{width:auto}@supports selector(:has(*)){[role=search]:has(button:focus,[type=submit]:focus,[type=button]:focus,[role=button]:focus),[role=group]:has(button:focus,[type=submit]:focus,[type=button]:focus,[role=button]:focus){--pico-group-box-shadow: var(--pico-group-box-shadow-focus-with-button)}[role=search]:has(button:focus,[type=submit]:focus,[type=button]:focus,[role=button]:focus) input:not([type=checkbox],[type=radio]),[role=search]:has(button:focus,[type=submit]:focus,[type=button]:focus,[role=button]:focus) select,[role=group]:has(button:focus,[type=submit]:focus,[type=button]:focus,[role=button]:focus) input:not([type=checkbox],[type=radio]),[role=group]:has(button:focus,[type=submit]:focus,[type=button]:focus,[role=button]:focus) select{border-color:transparent}[role=search]:has(input:not([type=submit],[type=button]):focus,select:focus),[role=group]:has(input:not([type=submit],[type=button]):focus,select:focus){--pico-group-box-shadow: var(--pico-group-box-shadow-focus-with-input)}[role=search]:has(input:not([type=submit],[type=button]):focus,select:focus) button,[role=search]:has(input:not([type=submit],[type=button]):focus,select:focus) [type=submit],[role=search]:has(input:not([type=submit],[type=button]):focus,select:focus) [type=button],[role=search]:has(input:not([type=submit],[type=button]):focus,select:focus) [role=button],[role=group]:has(input:not([type=submit],[type=button]):focus,select:focus) button,[role=group]:has(input:not([type=submit],[type=button]):focus,select:focus) [type=submit],[role=group]:has(input:not([type=submit],[type=button]):focus,select:focus) [type=button],[role=group]:has(input:not([type=submit],[type=button]):focus,select:focus) [role=button]{--pico-button-box-shadow: 0 0 0 var(--pico-border-width) var(--pico-primary-border);--pico-button-hover-box-shadow: 0 0 0 var(--pico-border-width) var(--pico-primary-hover-border)}[role=search] button:focus,[role=search] [type=submit]:focus,[role=search] [type=reset]:focus,[role=search] [type=button]:focus,[role=search] [role=button]:focus,[role=group] button:focus,[role=group] [type=submit]:focus,[role=group] [type=reset]:focus,[role=group] [type=button]:focus,[role=group] [role=button]:focus{box-shadow:none}}[role=search]>*:first-child{border-top-left-radius:5rem;border-bottom-left-radius:5rem}[role=search]>*:last-child{border-top-right-radius:5rem;border-bottom-right-radius:5rem}[aria-busy=true]:not(input,select,textarea,html,form){white-space:nowrap}[aria-busy=true]:not(input,select,textarea,html,form):before{display:inline-block;width:1em;height:1em;background-image:var(--pico-icon-loading);background-size:1em auto;background-repeat:no-repeat;content:"";vertical-align:-.125em}[aria-busy=true]:not(input,select,textarea,html,form):not(:empty):before{margin-inline-end:calc(var(--pico-spacing) * .5)}[aria-busy=true]:not(input,select,textarea,html,form):empty{text-align:center}button[aria-busy=true],[type=submit][aria-busy=true],[type=button][aria-busy=true],[type=reset][aria-busy=true],[role=button][aria-busy=true],a[aria-busy=true]{pointer-events:none}:root,:host{--pico-scrollbar-width: 0px}dialog{display:flex;z-index:999;position:fixed;top:0;right:0;bottom:0;left:0;align-items:center;justify-content:center;width:inherit;min-width:100%;height:inherit;min-height:100%;padding:0;border:0;-webkit-backdrop-filter:var(--pico-modal-overlay-backdrop-filter);backdrop-filter:var(--pico-modal-overlay-backdrop-filter);background-color:var(--pico-modal-overlay-background-color);color:var(--pico-color)}dialog>article{width:100%;max-height:calc(100vh - var(--pico-spacing) * 2);margin:var(--pico-spacing);overflow:auto}@media (min-width: 576px){dialog>article{max-width:510px}}@media (min-width: 768px){dialog>article{max-width:700px}}dialog>article>header>*{margin-bottom:0}dialog>article>header :is(a,button)[rel=prev]{margin:0;margin-left:var(--pico-spacing);padding:0;float:right}dialog>article>footer{text-align:right}dialog>article>footer button,dialog>article>footer [role=button]{margin-bottom:0}dialog>article>footer button:not(:first-of-type),dialog>article>footer [role=button]:not(:first-of-type){margin-left:calc(var(--pico-spacing) * .5)}dialog>article :is(a,button)[rel=prev]{display:block;width:1rem;height:1rem;margin-top:calc(var(--pico-spacing) * -1);margin-bottom:var(--pico-spacing);margin-left:auto;border:none;background-image:var(--pico-icon-close);background-position:center;background-size:auto 1rem;background-repeat:no-repeat;background-color:transparent;opacity:.5;transition:opacity var(--pico-transition)}dialog>article :is(a,button)[rel=prev]:is([aria-current]:not([aria-current=false]),:hover,:active,:focus){opacity:1}dialog:not([open]),dialog[open=false]{display:none}:where(nav li):before{float:left;content:"​"}nav,nav ul{display:flex}nav{justify-content:space-between;overflow:visible}nav ol,nav ul{align-items:center;margin-bottom:0;padding:0;list-style:none}nav ol:first-of-type,nav ul:first-of-type{margin-left:calc(var(--pico-nav-element-spacing-horizontal) * -1)}nav ol:last-of-type,nav ul:last-of-type{margin-right:calc(var(--pico-nav-element-spacing-horizontal) * -1)}nav li{display:inline-block;margin:0;padding:var(--pico-nav-element-spacing-vertical) var(--pico-nav-element-spacing-horizontal)}nav li :where(a,[role=link]){display:inline-block;margin:calc(var(--pico-nav-link-spacing-vertical) * -1) calc(var(--pico-nav-link-spacing-horizontal) * -1);padding:var(--pico-nav-link-spacing-vertical) var(--pico-nav-link-spacing-horizontal);border-radius:var(--pico-border-radius)}nav li :where(a,[role=link]):not(:hover){text-decoration:none}nav li button,nav li [role=button],nav li [type=button],nav li input:not([type=checkbox],[type=radio],[type=range],[type=file]),nav li select{height:auto;margin-right:inherit;margin-bottom:0;margin-left:inherit;padding:calc(var(--pico-nav-link-spacing-vertical) - var(--pico-border-width) * 2) var(--pico-nav-link-spacing-horizontal)}nav[aria-label=breadcrumb]{align-items:center;justify-content:start}nav[aria-label=breadcrumb] ul li:not(:first-child){margin-inline-start:var(--pico-nav-link-spacing-horizontal)}nav[aria-label=breadcrumb] ul li a{margin:calc(var(--pico-nav-link-spacing-vertical) * -1) 0;margin-inline-start:calc(var(--pico-nav-link-spacing-horizontal) * -1)}nav[aria-label=breadcrumb] ul li:not(:last-child):after{display:inline-block;position:absolute;width:calc(var(--pico-nav-link-spacing-horizontal) * 4);margin:0 calc(var(--pico-nav-link-spacing-horizontal) * -1);content:var(--pico-nav-breadcrumb-divider);color:var(--pico-muted-color);text-align:center;text-decoration:none;white-space:nowrap}nav[aria-label=breadcrumb] a[aria-current]:not([aria-current=false]){background-color:transparent;color:inherit;text-decoration:none;pointer-events:none}aside nav,aside ol,aside ul,aside li{display:block}aside li{padding:calc(var(--pico-nav-element-spacing-vertical) * .5) var(--pico-nav-element-spacing-horizontal)}aside li a{display:block}aside li [role=button]{margin:inherit}[dir=rtl] nav[aria-label=breadcrumb] ul li:not(:last-child) :after{content:"\\\\"}progress{display:inline-block;vertical-align:baseline}progress{-webkit-appearance:none;-moz-appearance:none;display:inline-block;appearance:none;width:100%;height:.5rem;margin-bottom:calc(var(--pico-spacing) * .5);overflow:hidden;border:0;border-radius:var(--pico-border-radius);background-color:var(--pico-progress-background-color);color:var(--pico-progress-color)}progress::-webkit-progress-bar{border-radius:var(--pico-border-radius);background:none}progress[value]::-webkit-progress-value{background-color:var(--pico-progress-color);transition:inline-size var(--pico-transition)}progress::-moz-progress-bar{background-color:var(--pico-progress-color)}@media (prefers-reduced-motion: no-preference){progress:indeterminate{background:var(--pico-progress-background-color) linear-gradient(to right,var(--pico-progress-color) 30%,var(--pico-progress-background-color) 30%) top left/150% 150% no-repeat;animation:progress-indeterminate 1s linear infinite}progress:indeterminate[value]::-webkit-progress-value{background-color:transparent}progress:indeterminate::-moz-progress-bar{background-color:transparent}}@media (prefers-reduced-motion: no-preference){[dir=rtl] progress:indeterminate{animation-direction:reverse}}@keyframes progress-indeterminate{0%{background-position:200% 0}to{background-position:-200% 0}}[data-tooltip]{position:relative}[data-tooltip]:not(a,button,input,[role=button]){border-bottom:1px dotted;text-decoration:none;cursor:help}[data-tooltip][data-placement=top]:before,[data-tooltip][data-placement=top]:after,[data-tooltip]:before,[data-tooltip]:after{display:block;z-index:99;position:absolute;bottom:100%;left:50%;padding:.25rem .5rem;overflow:hidden;transform:translate(-50%,-.25rem);border-radius:var(--pico-border-radius);background:var(--pico-tooltip-background-color);content:attr(data-tooltip);color:var(--pico-tooltip-color);font-style:normal;font-weight:var(--pico-font-weight);font-size:.875rem;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;opacity:0;pointer-events:none}[data-tooltip][data-placement=top]:after,[data-tooltip]:after{padding:0;transform:translate(-50%);border-top:.3rem solid;border-right:.3rem solid transparent;border-left:.3rem solid transparent;border-radius:0;background-color:transparent;content:"";color:var(--pico-tooltip-background-color)}[data-tooltip][data-placement=bottom]:before,[data-tooltip][data-placement=bottom]:after{top:100%;bottom:auto;transform:translate(-50%,.25rem)}[data-tooltip][data-placement=bottom]:after{transform:translate(-50%,-.3rem);border:.3rem solid transparent;border-bottom:.3rem solid}[data-tooltip][data-placement=left]:before,[data-tooltip][data-placement=left]:after{top:50%;right:100%;bottom:auto;left:auto;transform:translate(-.25rem,-50%)}[data-tooltip][data-placement=left]:after{transform:translate(.3rem,-50%);border:.3rem solid transparent;border-left:.3rem solid}[data-tooltip][data-placement=right]:before,[data-tooltip][data-placement=right]:after{top:50%;right:auto;bottom:auto;left:100%;transform:translate(.25rem,-50%)}[data-tooltip][data-placement=right]:after{transform:translate(-.3rem,-50%);border:.3rem solid transparent;border-right:.3rem solid}[data-tooltip]:focus:before,[data-tooltip]:focus:after,[data-tooltip]:hover:before,[data-tooltip]:hover:after{opacity:1}@media (hover: hover) and (pointer: fine){[data-tooltip]:focus:before,[data-tooltip]:focus:after,[data-tooltip]:hover:before,[data-tooltip]:hover:after{--pico-tooltip-slide-to: translate(-50%, -.25rem);transform:translate(-50%,.75rem);animation-duration:.2s;animation-fill-mode:forwards;animation-name:tooltip-slide;opacity:0}[data-tooltip]:focus:after,[data-tooltip]:hover:after{--pico-tooltip-caret-slide-to: translate(-50%, 0rem);transform:translate(-50%,-.25rem);animation-name:tooltip-caret-slide}[data-tooltip][data-placement=bottom]:focus:before,[data-tooltip][data-placement=bottom]:focus:after,[data-tooltip][data-placement=bottom]:hover:before,[data-tooltip][data-placement=bottom]:hover:after{--pico-tooltip-slide-to: translate(-50%, .25rem);transform:translate(-50%,-.75rem);animation-name:tooltip-slide}[data-tooltip][data-placement=bottom]:focus:after,[data-tooltip][data-placement=bottom]:hover:after{--pico-tooltip-caret-slide-to: translate(-50%, -.3rem);transform:translate(-50%,-.5rem);animation-name:tooltip-caret-slide}[data-tooltip][data-placement=left]:focus:before,[data-tooltip][data-placement=left]:focus:after,[data-tooltip][data-placement=left]:hover:before,[data-tooltip][data-placement=left]:hover:after{--pico-tooltip-slide-to: translate(-.25rem, -50%);transform:translate(.75rem,-50%);animation-name:tooltip-slide}[data-tooltip][data-placement=left]:focus:after,[data-tooltip][data-placement=left]:hover:after{--pico-tooltip-caret-slide-to: translate(.3rem, -50%);transform:translate(.05rem,-50%);animation-name:tooltip-caret-slide}[data-tooltip][data-placement=right]:focus:before,[data-tooltip][data-placement=right]:focus:after,[data-tooltip][data-placement=right]:hover:before,[data-tooltip][data-placement=right]:hover:after{--pico-tooltip-slide-to: translate(.25rem, -50%);transform:translate(-.75rem,-50%);animation-name:tooltip-slide}[data-tooltip][data-placement=right]:focus:after,[data-tooltip][data-placement=right]:hover:after{--pico-tooltip-caret-slide-to: translate(-.3rem, -50%);transform:translate(-.05rem,-50%);animation-name:tooltip-caret-slide}}@keyframes tooltip-slide{to{transform:var(--pico-tooltip-slide-to);opacity:1}}@keyframes tooltip-caret-slide{50%{opacity:0}to{transform:var(--pico-tooltip-caret-slide-to);opacity:1}}[aria-controls]{cursor:pointer}[aria-disabled=true],[disabled]{cursor:not-allowed}[aria-hidden=false][hidden]{display:initial}[aria-hidden=false][hidden]:not(:focus){clip:rect(0,0,0,0);position:absolute}a,area,button,input,label,select,summary,textarea,[tabindex]{-ms-touch-action:manipulation}[dir=rtl]{direction:rtl}@media (prefers-reduced-motion: reduce){*:not([aria-busy=true]),:not([aria-busy=true]):before,:not([aria-busy=true]):after{background-attachment:initial!important;animation-duration:1ms!important;animation-delay:-1ms!important;animation-iteration-count:1!important;scroll-behavior:auto!important;transition-delay:0s!important;transition-duration:0s!important}}#root>main{display:flex;flex-direction:column;justify-content:center;min-height:100vh;max-width:510px}p.error{color:red}`,
  Uo = new CSSStyleSheet()
Uo.replaceSync(ce)
Jo(ae, "x-subscriberform", [], { shadow: !0, adoptedStyleSheets: [Uo] })
