var _c = Object.defineProperty;
var Da = (n) => {
  throw TypeError(n);
};
var kc = (n, e, t) => e in n ? _c(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var $ = (n, e, t) => kc(n, typeof e != "symbol" ? e + "" : e, t), vs = (n, e, t) => e.has(n) || Da("Cannot " + t);
var f = (n, e, t) => (vs(n, e, "read from private field"), t ? t.call(n) : e.get(n)), M = (n, e, t) => e.has(n) ? Da("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), E = (n, e, t, i) => (vs(n, e, "write to private field"), i ? i.call(n, t) : e.set(n, t), t), ge = (n, e, t) => (vs(n, e, "access private method"), t);
var yo = Array.isArray, Sc = Array.prototype.indexOf, Kr = Array.from, qr = Object.keys, Ur = Object.defineProperty, Cn = Object.getOwnPropertyDescriptor, Tc = Object.getOwnPropertyDescriptors, Ec = Object.prototype, Cc = Array.prototype, xo = Object.getPrototypeOf, Pa = Object.isExtensible;
function Ac(n) {
  return typeof n == "function";
}
const Hi = () => {
};
function Ic(n) {
  for (var e = 0; e < n.length; e++)
    n[e]();
}
function _o() {
  var n, e, t = new Promise((i, r) => {
    n = i, e = r;
  });
  return { promise: t, resolve: n, reject: e };
}
const Re = 2, Vs = 4, Ys = 8, Mc = 1 << 24, qt = 16, on = 32, vn = 64, Jr = 128, yt = 512, Ne = 1024, it = 2048, Pt = 4096, nt = 8192, sn = 16384, mr = 32768, Rn = 65536, za = 1 << 17, ko = 1 << 18, qn = 1 << 19, Rc = 1 << 20, nn = 1 << 25, Ln = 32768, Cs = 1 << 21, Qs = 1 << 22, hn = 1 << 23, Ji = Symbol("$state"), So = Symbol("legacy props"), Lc = Symbol(""), ei = new class extends Error {
  constructor() {
    super(...arguments);
    $(this, "name", "StaleReactionError");
    $(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}(), Xs = 3, Un = 8;
function To(n) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Oc() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Nc(n) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Dc() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Pc(n) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function zc() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function $c() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function qc(n) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Uc() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Fc() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Hc() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Wc() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Bc = 1, jc = 2, Eo = 4, Gc = 8, Vc = 16, Yc = 1, Qc = 4, Xc = 8, Zc = 16, Kc = 4, Co = 1, Jc = 2, Ao = "[", es = "[!", Zs = "]", On = {}, Oe = Symbol(), ed = "http://www.w3.org/1999/xhtml";
function vr(n) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function td() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let V = !1;
function rn(n) {
  V = n;
}
let W;
function $e(n) {
  if (n === null)
    throw vr(), On;
  return W = n;
}
function Ri() {
  return $e(/* @__PURE__ */ kt(W));
}
function re(n) {
  if (V) {
    if (/* @__PURE__ */ kt(W) !== null)
      throw vr(), On;
    W = n;
  }
}
function ar(n = 1) {
  if (V) {
    for (var e = n, t = W; e--; )
      t = /** @type {TemplateNode} */
      /* @__PURE__ */ kt(t);
    W = t;
  }
}
function Fr(n = !0) {
  for (var e = 0, t = W; ; ) {
    if (t.nodeType === Un) {
      var i = (
        /** @type {Comment} */
        t.data
      );
      if (i === Zs) {
        if (e === 0) return t;
        e -= 1;
      } else (i === Ao || i === es) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ kt(t)
    );
    n && t.remove(), t = r;
  }
}
function Io(n) {
  if (!n || n.nodeType !== Un)
    throw vr(), On;
  return (
    /** @type {Comment} */
    n.data
  );
}
function Mo(n) {
  return n === this.v;
}
function nd(n, e) {
  return n != n ? e == e : n !== e || n !== null && typeof n == "object" || typeof n == "function";
}
function Ro(n) {
  return !nd(n, this.v);
}
let Qe = null;
function Li(n) {
  Qe = n;
}
function xt(n, e = !1, t) {
  Qe = {
    p: Qe,
    i: !1,
    c: null,
    e: null,
    s: n,
    x: null,
    l: null
  };
}
function _t(n) {
  var e = (
    /** @type {ComponentContext} */
    Qe
  ), t = e.e;
  if (t !== null) {
    e.e = null;
    for (var i of t)
      Jo(i);
  }
  return n !== void 0 && (e.x = n), e.i = !0, Qe = e.p, n ?? /** @type {T} */
  {};
}
function Lo() {
  return !0;
}
let yn = [];
function Oo() {
  var n = yn;
  yn = [], Ic(n);
}
function Fn(n) {
  if (yn.length === 0 && !er) {
    var e = yn;
    queueMicrotask(() => {
      e === yn && Oo();
    });
  }
  yn.push(n);
}
function id() {
  for (; yn.length > 0; )
    Oo();
}
function No(n) {
  var e = J;
  if (e === null)
    return Y.f |= hn, n;
  if (e.f & mr)
    Oi(n, e);
  else {
    if (!(e.f & Jr))
      throw n;
    e.b.error(n);
  }
}
function Oi(n, e) {
  for (; e !== null; ) {
    if (e.f & Jr)
      try {
        e.b.error(n);
        return;
      } catch (t) {
        n = t;
      }
    e = e.parent;
  }
  throw n;
}
const Cr = /* @__PURE__ */ new Set();
let B = null, Nr = null, ye = null, dt = [], ts = null, As = !1, er = !1;
var ri, si, xn, _n, gr, ai, oi, Me, Is, Qi, Ms, Do, Po;
const Qr = class Qr {
  constructor() {
    M(this, Me);
    $(this, "committed", !1);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    $(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    $(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    M(this, ri, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    M(this, si, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    M(this, xn, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    M(this, _n, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    M(this, gr, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    M(this, ai, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    M(this, oi, /* @__PURE__ */ new Set());
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    $(this, "skipped_effects", /* @__PURE__ */ new Set());
    $(this, "is_fork", !1);
  }
  is_deferred() {
    return this.is_fork || f(this, _n) > 0;
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var i;
    dt = [], Nr = null, this.apply();
    var t = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const r of e)
      ge(this, Me, Is).call(this, r, t);
    this.is_fork || ge(this, Me, Do).call(this), this.is_deferred() ? (ge(this, Me, Qi).call(this, t.effects), ge(this, Me, Qi).call(this, t.render_effects)) : (Nr = this, B = null, $a(t.render_effects), $a(t.effects), Nr = null, (i = f(this, gr)) == null || i.resolve()), ye = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, t) {
    this.previous.has(e) || this.previous.set(e, t), e.f & hn || (this.current.set(e, e.v), ye == null || ye.set(e, e.v));
  }
  activate() {
    B = this, this.apply();
  }
  deactivate() {
    B === this && (B = null, ye = null);
  }
  flush() {
    if (this.activate(), dt.length > 0) {
      if (zo(), B !== null && B !== this)
        return;
    } else f(this, xn) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const e of f(this, si)) e(this);
    f(this, si).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(e) {
    E(this, xn, f(this, xn) + 1), e && E(this, _n, f(this, _n) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(e) {
    E(this, xn, f(this, xn) - 1), e && E(this, _n, f(this, _n) - 1), this.revive();
  }
  revive() {
    for (const e of f(this, ai))
      f(this, oi).delete(e), De(e, it), Nn(e);
    for (const e of f(this, oi))
      De(e, Pt), Nn(e);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(e) {
    f(this, ri).add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(e) {
    f(this, si).add(e);
  }
  settled() {
    return (f(this, gr) ?? E(this, gr, _o())).promise;
  }
  static ensure() {
    if (B === null) {
      const e = B = new Qr();
      Cr.add(B), er || Qr.enqueue(() => {
        B === e && e.flush();
      });
    }
    return B;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    Fn(e);
  }
  apply() {
  }
};
ri = new WeakMap(), si = new WeakMap(), xn = new WeakMap(), _n = new WeakMap(), gr = new WeakMap(), ai = new WeakMap(), oi = new WeakMap(), Me = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {EffectTarget} target
 */
Is = function(e, t) {
  var d;
  e.f ^= Ne;
  for (var i = e.first; i !== null; ) {
    var r = i.f, s = (r & (on | vn)) !== 0, a = s && (r & Ne) !== 0, o = a || (r & nt) !== 0 || this.skipped_effects.has(i);
    if (i.f & Jr && ((d = i.b) != null && d.is_pending()) && (t = {
      parent: t,
      effect: i,
      effects: [],
      render_effects: []
    }), !o && i.fn !== null) {
      s ? i.f ^= Ne : r & Vs ? t.effects.push(i) : br(i) && (i.f & qt && f(this, ai).add(i), cr(i));
      var l = i.first;
      if (l !== null) {
        i = l;
        continue;
      }
    }
    var c = i.parent;
    for (i = i.next; i === null && c !== null; )
      c === t.effect && (ge(this, Me, Qi).call(this, t.effects), ge(this, Me, Qi).call(this, t.render_effects), t = /** @type {EffectTarget} */
      t.parent), i = c.next, c = c.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
Qi = function(e) {
  for (const t of e)
    t.f & it ? f(this, ai).add(t) : t.f & Pt && f(this, oi).add(t), ge(this, Me, Ms).call(this, t.deps), De(t, Ne);
}, /**
 * @param {Value[] | null} deps
 */
Ms = function(e) {
  if (e !== null)
    for (const t of e)
      !(t.f & Re) || !(t.f & Ln) || (t.f ^= Ln, ge(this, Me, Ms).call(
        this,
        /** @type {Derived} */
        t.deps
      ));
}, Do = function() {
  if (f(this, _n) === 0) {
    for (const e of f(this, ri)) e();
    f(this, ri).clear();
  }
  f(this, xn) === 0 && ge(this, Me, Po).call(this);
}, Po = function() {
  var s;
  if (Cr.size > 1) {
    this.previous.clear();
    var e = ye, t = !0, i = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const a of Cr) {
      if (a === this) {
        t = !1;
        continue;
      }
      const o = [];
      for (const [c, d] of this.current) {
        if (a.current.has(c))
          if (t && d !== a.current.get(c))
            a.current.set(c, d);
          else
            continue;
        o.push(c);
      }
      if (o.length === 0)
        continue;
      const l = [...a.current.keys()].filter((c) => !this.current.has(c));
      if (l.length > 0) {
        var r = dt;
        dt = [];
        const c = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map();
        for (const u of o)
          $o(u, l, c, d);
        if (dt.length > 0) {
          B = a, a.apply();
          for (const u of dt)
            ge(s = a, Me, Is).call(s, u, i);
          a.deactivate();
        }
        dt = r;
      }
    }
    B = null, ye = e;
  }
  this.committed = !0, Cr.delete(this);
};
let Lt = Qr;
function j(n) {
  var e = er;
  er = !0;
  try {
    for (var t; ; ) {
      if (id(), dt.length === 0 && (B == null || B.flush(), dt.length === 0))
        return ts = null, /** @type {T} */
        t;
      zo();
    }
  } finally {
    er = e;
  }
}
function zo() {
  var n = In;
  As = !0;
  var e = null;
  try {
    var t = 0;
    for (Wr(!0); dt.length > 0; ) {
      var i = Lt.ensure();
      if (t++ > 1e3) {
        var r, s;
        rd();
      }
      i.process(dt), pn.clear();
    }
  } finally {
    As = !1, Wr(n), ts = null;
  }
}
function rd() {
  try {
    zc();
  } catch (n) {
    Oi(n, ts);
  }
}
let pt = null;
function $a(n) {
  var e = n.length;
  if (e !== 0) {
    for (var t = 0; t < e; ) {
      var i = n[t++];
      if (!(i.f & (sn | nt)) && br(i) && (pt = /* @__PURE__ */ new Set(), cr(i), i.deps === null && i.first === null && i.nodes === null && (i.teardown === null && i.ac === null ? il(i) : i.fn = null), (pt == null ? void 0 : pt.size) > 0)) {
        pn.clear();
        for (const r of pt) {
          if (r.f & (sn | nt)) continue;
          const s = [r];
          let a = r.parent;
          for (; a !== null; )
            pt.has(a) && (pt.delete(a), s.push(a)), a = a.parent;
          for (let o = s.length - 1; o >= 0; o--) {
            const l = s[o];
            l.f & (sn | nt) || cr(l);
          }
        }
        pt.clear();
      }
    }
    pt = null;
  }
}
function $o(n, e, t, i) {
  if (!t.has(n) && (t.add(n), n.reactions !== null))
    for (const r of n.reactions) {
      const s = r.f;
      s & Re ? $o(
        /** @type {Derived} */
        r,
        e,
        t,
        i
      ) : s & (Qs | qt) && !(s & it) && qo(r, e, i) && (De(r, it), Nn(
        /** @type {Effect} */
        r
      ));
    }
}
function qo(n, e, t) {
  const i = t.get(n);
  if (i !== void 0) return i;
  if (n.deps !== null)
    for (const r of n.deps) {
      if (e.includes(r))
        return !0;
      if (r.f & Re && qo(
        /** @type {Derived} */
        r,
        e,
        t
      ))
        return t.set(
          /** @type {Derived} */
          r,
          !0
        ), !0;
    }
  return t.set(n, !1), !1;
}
function Nn(n) {
  for (var e = ts = n; e.parent !== null; ) {
    e = e.parent;
    var t = e.f;
    if (As && e === J && t & qt && !(t & ko))
      return;
    if (t & (vn | on)) {
      if (!(t & Ne)) return;
      e.f ^= Ne;
    }
  }
  dt.push(e);
}
function sd(n) {
  let e = 0, t = Dn(0), i;
  return () => {
    or() && (v(t), is(() => (e === 0 && (i = Wn(() => n(() => tr(t)))), e += 1, () => {
      Fn(() => {
        e -= 1, e === 0 && (i == null || i(), i = void 0, tr(t));
      });
    })));
  };
}
var ad = Rn | qn | Jr;
function od(n, e, t) {
  new ld(n, e, t);
}
var ot, Je, fr, At, kn, It, lt, Ge, Mt, Jt, un, Sn, gn, Tn, fn, Xr, xe, Uo, Fo, Rs, Dr, Pr, Ls;
class ld {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, t, i) {
    M(this, xe);
    /** @type {Boundary | null} */
    $(this, "parent");
    M(this, ot, !1);
    /** @type {TemplateNode} */
    M(this, Je);
    /** @type {TemplateNode | null} */
    M(this, fr, V ? W : null);
    /** @type {BoundaryProps} */
    M(this, At);
    /** @type {((anchor: Node) => void)} */
    M(this, kn);
    /** @type {Effect} */
    M(this, It);
    /** @type {Effect | null} */
    M(this, lt, null);
    /** @type {Effect | null} */
    M(this, Ge, null);
    /** @type {Effect | null} */
    M(this, Mt, null);
    /** @type {DocumentFragment | null} */
    M(this, Jt, null);
    /** @type {TemplateNode | null} */
    M(this, un, null);
    M(this, Sn, 0);
    M(this, gn, 0);
    M(this, Tn, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    M(this, fn, null);
    M(this, Xr, sd(() => (E(this, fn, Dn(f(this, Sn))), () => {
      E(this, fn, null);
    })));
    E(this, Je, e), E(this, At, t), E(this, kn, i), this.parent = /** @type {Effect} */
    J.b, E(this, ot, !!f(this, At).pending), E(this, It, ta(() => {
      if (J.b = this, V) {
        const s = f(this, fr);
        Ri(), /** @type {Comment} */
        s.nodeType === Un && /** @type {Comment} */
        s.data === es ? ge(this, xe, Fo).call(this) : ge(this, xe, Uo).call(this);
      } else {
        var r = ge(this, xe, Rs).call(this);
        try {
          E(this, lt, ut(() => i(r)));
        } catch (s) {
          this.error(s);
        }
        f(this, gn) > 0 ? ge(this, xe, Pr).call(this) : E(this, ot, !1);
      }
      return () => {
        var s;
        (s = f(this, un)) == null || s.remove();
      };
    }, ad)), V && E(this, Je, W);
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return f(this, ot) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!f(this, At).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    ge(this, xe, Ls).call(this, e), E(this, Sn, f(this, Sn) + e), f(this, fn) && Ni(f(this, fn), f(this, Sn));
  }
  get_effect_pending() {
    return f(this, Xr).call(this), v(
      /** @type {Source<number>} */
      f(this, fn)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var t = f(this, At).onerror;
    let i = f(this, At).failed;
    if (f(this, Tn) || !t && !i)
      throw e;
    f(this, lt) && (qe(f(this, lt)), E(this, lt, null)), f(this, Ge) && (qe(f(this, Ge)), E(this, Ge, null)), f(this, Mt) && (qe(f(this, Mt)), E(this, Mt, null)), V && ($e(
      /** @type {TemplateNode} */
      f(this, fr)
    ), ar(), $e(Fr()));
    var r = !1, s = !1;
    const a = () => {
      if (r) {
        td();
        return;
      }
      r = !0, s && Wc(), Lt.ensure(), E(this, Sn, 0), f(this, Mt) !== null && An(f(this, Mt), () => {
        E(this, Mt, null);
      }), E(this, ot, this.has_pending_snippet()), E(this, lt, ge(this, xe, Dr).call(this, () => (E(this, Tn, !1), ut(() => f(this, kn).call(this, f(this, Je)))))), f(this, gn) > 0 ? ge(this, xe, Pr).call(this) : E(this, ot, !1);
    };
    var o = Y;
    try {
      Ve(null), s = !0, t == null || t(e, a), s = !1;
    } catch (l) {
      Oi(l, f(this, It) && f(this, It).parent);
    } finally {
      Ve(o);
    }
    i && Fn(() => {
      E(this, Mt, ge(this, xe, Dr).call(this, () => {
        Lt.ensure(), E(this, Tn, !0);
        try {
          return ut(() => {
            i(
              f(this, Je),
              () => e,
              () => a
            );
          });
        } catch (l) {
          return Oi(
            l,
            /** @type {Effect} */
            f(this, It).parent
          ), null;
        } finally {
          E(this, Tn, !1);
        }
      }));
    });
  }
}
ot = new WeakMap(), Je = new WeakMap(), fr = new WeakMap(), At = new WeakMap(), kn = new WeakMap(), It = new WeakMap(), lt = new WeakMap(), Ge = new WeakMap(), Mt = new WeakMap(), Jt = new WeakMap(), un = new WeakMap(), Sn = new WeakMap(), gn = new WeakMap(), Tn = new WeakMap(), fn = new WeakMap(), Xr = new WeakMap(), xe = new WeakSet(), Uo = function() {
  try {
    E(this, lt, ut(() => f(this, kn).call(this, f(this, Je))));
  } catch (e) {
    this.error(e);
  }
  E(this, ot, !1);
}, Fo = function() {
  const e = f(this, At).pending;
  e && (E(this, Ge, ut(() => e(f(this, Je)))), Lt.enqueue(() => {
    var t = ge(this, xe, Rs).call(this);
    E(this, lt, ge(this, xe, Dr).call(this, () => (Lt.ensure(), ut(() => f(this, kn).call(this, t))))), f(this, gn) > 0 ? ge(this, xe, Pr).call(this) : (An(
      /** @type {Effect} */
      f(this, Ge),
      () => {
        E(this, Ge, null);
      }
    ), E(this, ot, !1));
  }));
}, Rs = function() {
  var e = f(this, Je);
  return f(this, ot) && (E(this, un, gt()), f(this, Je).before(f(this, un)), e = f(this, un)), e;
}, /**
 * @param {() => Effect | null} fn
 */
Dr = function(e) {
  var t = J, i = Y, r = Qe;
  zt(f(this, It)), Ve(f(this, It)), Li(f(this, It).ctx);
  try {
    return e();
  } catch (s) {
    return No(s), null;
  } finally {
    zt(t), Ve(i), Li(r);
  }
}, Pr = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    f(this, At).pending
  );
  f(this, lt) !== null && (E(this, Jt, document.createDocumentFragment()), f(this, Jt).append(
    /** @type {TemplateNode} */
    f(this, un)
  ), al(f(this, lt), f(this, Jt))), f(this, Ge) === null && E(this, Ge, ut(() => e(f(this, Je))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
Ls = function(e) {
  var t;
  if (!this.has_pending_snippet()) {
    this.parent && ge(t = this.parent, xe, Ls).call(t, e);
    return;
  }
  E(this, gn, f(this, gn) + e), f(this, gn) === 0 && (E(this, ot, !1), f(this, Ge) && An(f(this, Ge), () => {
    E(this, Ge, null);
  }), f(this, Jt) && (f(this, Je).before(f(this, Jt)), E(this, Jt, null)));
};
function cd(n, e, t, i) {
  const r = ns;
  if (t.length === 0 && n.length === 0) {
    i(e.map(r));
    return;
  }
  var s = B, a = (
    /** @type {Effect} */
    J
  ), o = dd();
  function l() {
    Promise.all(t.map((c) => /* @__PURE__ */ ud(c))).then((c) => {
      o();
      try {
        i([...e.map(r), ...c]);
      } catch (d) {
        a.f & sn || Oi(d, a);
      }
      s == null || s.deactivate(), Hr();
    }).catch((c) => {
      Oi(c, a);
    });
  }
  n.length > 0 ? Promise.all(n).then(() => {
    o();
    try {
      return l();
    } finally {
      s == null || s.deactivate(), Hr();
    }
  }) : l();
}
function dd() {
  var n = J, e = Y, t = Qe, i = B;
  return function(s = !0) {
    zt(n), Ve(e), Li(t), s && (i == null || i.activate());
  };
}
function Hr() {
  zt(null), Ve(null), Li(null);
}
// @__NO_SIDE_EFFECTS__
function ns(n) {
  var e = Re | it, t = Y !== null && Y.f & Re ? (
    /** @type {Derived} */
    Y
  ) : null;
  return J !== null && (J.f |= qn), {
    ctx: Qe,
    deps: null,
    effects: null,
    equals: Mo,
    f: e,
    fn: n,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Oe
    ),
    wv: 0,
    parent: t ?? J,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function ud(n, e) {
  let t = (
    /** @type {Effect | null} */
    J
  );
  t === null && Oc();
  var i = (
    /** @type {Boundary} */
    t.b
  ), r = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = Dn(
    /** @type {V} */
    Oe
  ), a = !Y, o = /* @__PURE__ */ new Map();
  return xd(() => {
    var h;
    var l = _o();
    r = l.promise;
    try {
      Promise.resolve(n()).then(l.resolve, l.reject).then(() => {
        c === B && c.committed && c.deactivate(), Hr();
      });
    } catch (p) {
      l.reject(p), Hr();
    }
    var c = (
      /** @type {Batch} */
      B
    );
    if (a) {
      var d = !i.is_pending();
      i.update_pending_count(1), c.increment(d), (h = o.get(c)) == null || h.reject(ei), o.delete(c), o.set(c, l);
    }
    const u = (p, k = void 0) => {
      if (c.activate(), k)
        k !== ei && (s.f |= hn, Ni(s, k));
      else {
        s.f & hn && (s.f ^= hn), Ni(s, p);
        for (const [b, m] of o) {
          if (o.delete(b), b === c) break;
          m.reject(ei);
        }
      }
      a && (i.update_pending_count(-1), c.decrement(d));
    };
    l.promise.then(u, (p) => u(null, p || "unknown"));
  }), Ko(() => {
    for (const l of o.values())
      l.reject(ei);
  }), new Promise((l) => {
    function c(d) {
      function u() {
        d === r ? l(s) : c(r);
      }
      d.then(u, u);
    }
    c(r);
  });
}
// @__NO_SIDE_EFFECTS__
function me(n) {
  const e = /* @__PURE__ */ ns(n);
  return ol(e), e;
}
// @__NO_SIDE_EFFECTS__
function Ho(n) {
  const e = /* @__PURE__ */ ns(n);
  return e.equals = Ro, e;
}
function Wo(n) {
  var e = n.effects;
  if (e !== null) {
    n.effects = null;
    for (var t = 0; t < e.length; t += 1)
      qe(
        /** @type {Effect} */
        e[t]
      );
  }
}
function gd(n) {
  for (var e = n.parent; e !== null; ) {
    if (!(e.f & Re))
      return e.f & sn ? null : (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function Ks(n) {
  var e, t = J;
  zt(gd(n));
  try {
    n.f &= ~Ln, Wo(n), e = ul(n);
  } finally {
    zt(t);
  }
  return e;
}
function Bo(n) {
  var e = Ks(n);
  if (n.equals(e) || (B != null && B.is_fork || (n.v = e), n.wv = cl()), !Hn)
    if (ye !== null)
      (or() || B != null && B.is_fork) && ye.set(n, e);
    else {
      var t = n.f & yt ? Ne : Pt;
      De(n, t);
    }
}
let Os = /* @__PURE__ */ new Set();
const pn = /* @__PURE__ */ new Map();
let jo = !1;
function Dn(n, e) {
  var t = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: n,
    reactions: null,
    equals: Mo,
    rv: 0,
    wv: 0
  };
  return t;
}
// @__NO_SIDE_EFFECTS__
function U(n, e) {
  const t = Dn(n);
  return ol(t), t;
}
// @__NO_SIDE_EFFECTS__
function Go(n, e = !1, t = !0) {
  const i = Dn(n);
  return e || (i.equals = Ro), i;
}
function P(n, e, t = !1) {
  Y !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ot || Y.f & za) && Lo() && Y.f & (Re | qt | Qs | za) && !(Ue != null && Ue.includes(n)) && Hc();
  let i = t ? we(e) : e;
  return Ni(n, i);
}
function Ni(n, e) {
  if (!n.equals(e)) {
    var t = n.v;
    Hn ? pn.set(n, e) : pn.set(n, t), n.v = e;
    var i = Lt.ensure();
    i.capture(n, t), n.f & Re && (n.f & it && Ks(
      /** @type {Derived} */
      n
    ), De(n, n.f & yt ? Ne : Pt)), n.wv = cl(), Vo(n, it), J !== null && J.f & Ne && !(J.f & (on | vn)) && (at === null ? kd([n]) : at.push(n)), !i.is_fork && Os.size > 0 && !jo && fd();
  }
  return e;
}
function fd() {
  jo = !1;
  var n = In;
  Wr(!0);
  const e = Array.from(Os);
  try {
    for (const t of e)
      t.f & Ne && De(t, Pt), br(t) && cr(t);
  } finally {
    Wr(n);
  }
  Os.clear();
}
function tr(n) {
  P(n, n.v + 1);
}
function Vo(n, e) {
  var t = n.reactions;
  if (t !== null)
    for (var i = t.length, r = 0; r < i; r++) {
      var s = t[r], a = s.f, o = (a & it) === 0;
      if (o && De(s, e), a & Re) {
        var l = (
          /** @type {Derived} */
          s
        );
        ye == null || ye.delete(l), a & Ln || (a & yt && (s.f |= Ln), Vo(l, Pt));
      } else o && (a & qt && pt !== null && pt.add(
        /** @type {Effect} */
        s
      ), Nn(
        /** @type {Effect} */
        s
      ));
    }
}
function we(n) {
  if (typeof n != "object" || n === null || Ji in n)
    return n;
  const e = xo(n);
  if (e !== Ec && e !== Cc)
    return n;
  var t = /* @__PURE__ */ new Map(), i = yo(n), r = /* @__PURE__ */ U(0), s = Mn, a = (o) => {
    if (Mn === s)
      return o();
    var l = Y, c = Mn;
    Ve(null), Ha(s);
    var d = o();
    return Ve(l), Ha(c), d;
  };
  return i && t.set("length", /* @__PURE__ */ U(
    /** @type {any[]} */
    n.length
  )), new Proxy(
    /** @type {any} */
    n,
    {
      defineProperty(o, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Uc();
        var d = t.get(l);
        return d === void 0 ? d = a(() => {
          var u = /* @__PURE__ */ U(c.value);
          return t.set(l, u), u;
        }) : P(d, c.value, !0), !0;
      },
      deleteProperty(o, l) {
        var c = t.get(l);
        if (c === void 0) {
          if (l in o) {
            const d = a(() => /* @__PURE__ */ U(Oe));
            t.set(l, d), tr(r);
          }
        } else
          P(c, Oe), tr(r);
        return !0;
      },
      get(o, l, c) {
        var p;
        if (l === Ji)
          return n;
        var d = t.get(l), u = l in o;
        if (d === void 0 && (!u || (p = Cn(o, l)) != null && p.writable) && (d = a(() => {
          var k = we(u ? o[l] : Oe), b = /* @__PURE__ */ U(k);
          return b;
        }), t.set(l, d)), d !== void 0) {
          var h = v(d);
          return h === Oe ? void 0 : h;
        }
        return Reflect.get(o, l, c);
      },
      getOwnPropertyDescriptor(o, l) {
        var c = Reflect.getOwnPropertyDescriptor(o, l);
        if (c && "value" in c) {
          var d = t.get(l);
          d && (c.value = v(d));
        } else if (c === void 0) {
          var u = t.get(l), h = u == null ? void 0 : u.v;
          if (u !== void 0 && h !== Oe)
            return {
              enumerable: !0,
              configurable: !0,
              value: h,
              writable: !0
            };
        }
        return c;
      },
      has(o, l) {
        var h;
        if (l === Ji)
          return !0;
        var c = t.get(l), d = c !== void 0 && c.v !== Oe || Reflect.has(o, l);
        if (c !== void 0 || J !== null && (!d || (h = Cn(o, l)) != null && h.writable)) {
          c === void 0 && (c = a(() => {
            var p = d ? we(o[l]) : Oe, k = /* @__PURE__ */ U(p);
            return k;
          }), t.set(l, c));
          var u = v(c);
          if (u === Oe)
            return !1;
        }
        return d;
      },
      set(o, l, c, d) {
        var w;
        var u = t.get(l), h = l in o;
        if (i && l === "length")
          for (var p = c; p < /** @type {Source<number>} */
          u.v; p += 1) {
            var k = t.get(p + "");
            k !== void 0 ? P(k, Oe) : p in o && (k = a(() => /* @__PURE__ */ U(Oe)), t.set(p + "", k));
          }
        if (u === void 0)
          (!h || (w = Cn(o, l)) != null && w.writable) && (u = a(() => /* @__PURE__ */ U(void 0)), P(u, we(c)), t.set(l, u));
        else {
          h = u.v !== Oe;
          var b = a(() => we(c));
          P(u, b);
        }
        var m = Reflect.getOwnPropertyDescriptor(o, l);
        if (m != null && m.set && m.set.call(d, c), !h) {
          if (i && typeof l == "string") {
            var T = (
              /** @type {Source<number>} */
              t.get("length")
            ), z = Number(l);
            Number.isInteger(z) && z >= T.v && P(T, z + 1);
          }
          tr(r);
        }
        return !0;
      },
      ownKeys(o) {
        v(r);
        var l = Reflect.ownKeys(o).filter((u) => {
          var h = t.get(u);
          return h === void 0 || h.v !== Oe;
        });
        for (var [c, d] of t)
          d.v !== Oe && !(c in o) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        Fc();
      }
    }
  );
}
var qa, Yo, Qo, Xo;
function Ns() {
  if (qa === void 0) {
    qa = window, Yo = /Firefox/.test(navigator.userAgent);
    var n = Element.prototype, e = Node.prototype, t = Text.prototype;
    Qo = Cn(e, "firstChild").get, Xo = Cn(e, "nextSibling").get, Pa(n) && (n.__click = void 0, n.__className = void 0, n.__attributes = null, n.__style = void 0, n.__e = void 0), Pa(t) && (t.__t = void 0);
  }
}
function gt(n = "") {
  return document.createTextNode(n);
}
// @__NO_SIDE_EFFECTS__
function Ie(n) {
  return (
    /** @type {TemplateNode | null} */
    Qo.call(n)
  );
}
// @__NO_SIDE_EFFECTS__
function kt(n) {
  return (
    /** @type {TemplateNode | null} */
    Xo.call(n)
  );
}
function se(n, e) {
  if (!V)
    return /* @__PURE__ */ Ie(n);
  var t = /* @__PURE__ */ Ie(W);
  if (t === null)
    t = W.appendChild(gt());
  else if (e && t.nodeType !== Xs) {
    var i = gt();
    return t == null || t.before(i), $e(i), i;
  }
  return $e(t), t;
}
function an(n, e = !1) {
  if (!V) {
    var t = /* @__PURE__ */ Ie(n);
    return t instanceof Comment && t.data === "" ? /* @__PURE__ */ kt(t) : t;
  }
  if (e && (W == null ? void 0 : W.nodeType) !== Xs) {
    var i = gt();
    return W == null || W.before(i), $e(i), i;
  }
  return W;
}
function ae(n, e = 1, t = !1) {
  let i = V ? W : n;
  for (var r; e--; )
    r = i, i = /** @type {TemplateNode} */
    /* @__PURE__ */ kt(i);
  if (!V)
    return i;
  if (t && (i == null ? void 0 : i.nodeType) !== Xs) {
    var s = gt();
    return i === null ? r == null || r.after(s) : i.before(s), $e(s), s;
  }
  return $e(i), i;
}
function Js(n) {
  n.textContent = "";
}
function Zo() {
  return !1;
}
function hd(n) {
  V && /* @__PURE__ */ Ie(n) !== null && Js(n);
}
let Ua = !1;
function pd() {
  Ua || (Ua = !0, document.addEventListener(
    "reset",
    (n) => {
      Promise.resolve().then(() => {
        var e;
        if (!n.defaultPrevented)
          for (
            const t of
            /**@type {HTMLFormElement} */
            n.target.elements
          )
            (e = t.__on_r) == null || e.call(t);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function $i(n) {
  var e = Y, t = J;
  Ve(null), zt(null);
  try {
    return n();
  } finally {
    Ve(e), zt(t);
  }
}
function md(n, e, t, i = t) {
  n.addEventListener(e, () => $i(t));
  const r = n.__on_r;
  r ? n.__on_r = () => {
    r(), i(!0);
  } : n.__on_r = () => i(!0), pd();
}
function vd(n) {
  J === null && (Y === null && Pc(), Dc()), Hn && Nc();
}
function bd(n, e) {
  var t = e.last;
  t === null ? e.last = e.first = n : (t.next = n, n.prev = t, e.last = n);
}
function Ut(n, e, t) {
  var i = J;
  i !== null && i.f & nt && (n |= nt);
  var r = {
    ctx: Qe,
    deps: null,
    nodes: null,
    f: n | it | yt,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: i,
    b: i && i.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  if (t)
    try {
      cr(r), r.f |= mr;
    } catch (o) {
      throw qe(r), o;
    }
  else e !== null && Nn(r);
  var s = r;
  if (t && s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
  !(s.f & qn) && (s = s.first, n & qt && n & Rn && s !== null && (s.f |= Rn)), s !== null && (s.parent = i, i !== null && bd(s, i), Y !== null && Y.f & Re && !(n & vn))) {
    var a = (
      /** @type {Derived} */
      Y
    );
    (a.effects ?? (a.effects = [])).push(s);
  }
  return r;
}
function or() {
  return Y !== null && !Ot;
}
function Ko(n) {
  const e = Ut(Ys, null, !1);
  return De(e, Ne), e.teardown = n, e;
}
function ii(n) {
  vd();
  var e = (
    /** @type {Effect} */
    J.f
  ), t = !Y && (e & on) !== 0 && (e & mr) === 0;
  if (t) {
    var i = (
      /** @type {ComponentContext} */
      Qe
    );
    (i.e ?? (i.e = [])).push(n);
  } else
    return Jo(n);
}
function Jo(n) {
  return Ut(Vs | Rc, n, !1);
}
function wd(n) {
  Lt.ensure();
  const e = Ut(vn | qn, n, !0);
  return () => {
    qe(e);
  };
}
function yd(n) {
  Lt.ensure();
  const e = Ut(vn | qn, n, !0);
  return (t = {}) => new Promise((i) => {
    t.outro ? An(e, () => {
      qe(e), i(void 0);
    }) : (qe(e), i(void 0));
  });
}
function ea(n) {
  return Ut(Vs, n, !1);
}
function xd(n) {
  return Ut(Qs | qn, n, !0);
}
function is(n, e = 0) {
  return Ut(Ys | e, n, !0);
}
function Ye(n, e = [], t = [], i = []) {
  cd(i, e, t, (r) => {
    Ut(Ys, () => n(...r.map(v)), !0);
  });
}
function ta(n, e = 0) {
  var t = Ut(qt | e, n, !0);
  return t;
}
function ut(n) {
  return Ut(on | qn, n, !0);
}
function el(n) {
  var e = n.teardown;
  if (e !== null) {
    const t = Hn, i = Y;
    Fa(!0), Ve(null);
    try {
      e.call(null);
    } finally {
      Fa(t), Ve(i);
    }
  }
}
function tl(n, e = !1) {
  var t = n.first;
  for (n.first = n.last = null; t !== null; ) {
    const r = t.ac;
    r !== null && $i(() => {
      r.abort(ei);
    });
    var i = t.next;
    t.f & vn ? t.parent = null : qe(t, e), t = i;
  }
}
function _d(n) {
  for (var e = n.first; e !== null; ) {
    var t = e.next;
    e.f & on || qe(e), e = t;
  }
}
function qe(n, e = !0) {
  var t = !1;
  (e || n.f & ko) && n.nodes !== null && n.nodes.end !== null && (nl(
    n.nodes.start,
    /** @type {TemplateNode} */
    n.nodes.end
  ), t = !0), tl(n, e && !t), Br(n, 0), De(n, sn);
  var i = n.nodes && n.nodes.t;
  if (i !== null)
    for (const s of i)
      s.stop();
  el(n);
  var r = n.parent;
  r !== null && r.first !== null && il(n), n.next = n.prev = n.teardown = n.ctx = n.deps = n.fn = n.nodes = n.ac = null;
}
function nl(n, e) {
  for (; n !== null; ) {
    var t = n === e ? null : /* @__PURE__ */ kt(n);
    n.remove(), n = t;
  }
}
function il(n) {
  var e = n.parent, t = n.prev, i = n.next;
  t !== null && (t.next = i), i !== null && (i.prev = t), e !== null && (e.first === n && (e.first = i), e.last === n && (e.last = t));
}
function An(n, e, t = !0) {
  var i = [];
  rl(n, i, !0);
  var r = () => {
    t && qe(n), e && e();
  }, s = i.length;
  if (s > 0) {
    var a = () => --s || r();
    for (var o of i)
      o.out(a);
  } else
    r();
}
function rl(n, e, t) {
  if (!(n.f & nt)) {
    n.f ^= nt;
    var i = n.nodes && n.nodes.t;
    if (i !== null)
      for (const o of i)
        (o.is_global || t) && e.push(o);
    for (var r = n.first; r !== null; ) {
      var s = r.next, a = (r.f & Rn) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (r.f & on) !== 0 && (n.f & qt) !== 0;
      rl(r, e, a ? t : !1), r = s;
    }
  }
}
function na(n) {
  sl(n, !0);
}
function sl(n, e) {
  if (n.f & nt) {
    n.f ^= nt, n.f & Ne || (De(n, it), Nn(n));
    for (var t = n.first; t !== null; ) {
      var i = t.next, r = (t.f & Rn) !== 0 || (t.f & on) !== 0;
      sl(t, r ? e : !1), t = i;
    }
    var s = n.nodes && n.nodes.t;
    if (s !== null)
      for (const a of s)
        (a.is_global || e) && a.in();
  }
}
function al(n, e) {
  if (n.nodes)
    for (var t = n.nodes.start, i = n.nodes.end; t !== null; ) {
      var r = t === i ? null : /* @__PURE__ */ kt(t);
      e.append(t), t = r;
    }
}
let In = !1;
function Wr(n) {
  In = n;
}
let Hn = !1;
function Fa(n) {
  Hn = n;
}
let Y = null, Ot = !1;
function Ve(n) {
  Y = n;
}
let J = null;
function zt(n) {
  J = n;
}
let Ue = null;
function ol(n) {
  Y !== null && (Ue === null ? Ue = [n] : Ue.push(n));
}
let ze = null, Ke = 0, at = null;
function kd(n) {
  at = n;
}
let ll = 1, lr = 0, Mn = lr;
function Ha(n) {
  Mn = n;
}
function cl() {
  return ++ll;
}
function br(n) {
  var e = n.f;
  if (e & it)
    return !0;
  if (e & Re && (n.f &= ~Ln), e & Pt) {
    var t = n.deps;
    if (t !== null)
      for (var i = t.length, r = 0; r < i; r++) {
        var s = t[r];
        if (br(
          /** @type {Derived} */
          s
        ) && Bo(
          /** @type {Derived} */
          s
        ), s.wv > n.wv)
          return !0;
      }
    e & yt && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    ye === null && De(n, Ne);
  }
  return !1;
}
function dl(n, e, t = !0) {
  var i = n.reactions;
  if (i !== null && !(Ue != null && Ue.includes(n)))
    for (var r = 0; r < i.length; r++) {
      var s = i[r];
      s.f & Re ? dl(
        /** @type {Derived} */
        s,
        e,
        !1
      ) : e === s && (t ? De(s, it) : s.f & Ne && De(s, Pt), Nn(
        /** @type {Effect} */
        s
      ));
    }
}
function ul(n) {
  var k;
  var e = ze, t = Ke, i = at, r = Y, s = Ue, a = Qe, o = Ot, l = Mn, c = n.f;
  ze = /** @type {null | Value[]} */
  null, Ke = 0, at = null, Y = c & (on | vn) ? null : n, Ue = null, Li(n.ctx), Ot = !1, Mn = ++lr, n.ac !== null && ($i(() => {
    n.ac.abort(ei);
  }), n.ac = null);
  try {
    n.f |= Cs;
    var d = (
      /** @type {Function} */
      n.fn
    ), u = d(), h = n.deps;
    if (ze !== null) {
      var p;
      if (Br(n, Ke), h !== null && Ke > 0)
        for (h.length = Ke + ze.length, p = 0; p < ze.length; p++)
          h[Ke + p] = ze[p];
      else
        n.deps = h = ze;
      if (or() && n.f & yt)
        for (p = Ke; p < h.length; p++)
          ((k = h[p]).reactions ?? (k.reactions = [])).push(n);
    } else h !== null && Ke < h.length && (Br(n, Ke), h.length = Ke);
    if (Lo() && at !== null && !Ot && h !== null && !(n.f & (Re | Pt | it)))
      for (p = 0; p < /** @type {Source[]} */
      at.length; p++)
        dl(
          at[p],
          /** @type {Effect} */
          n
        );
    return r !== null && r !== n && (lr++, at !== null && (i === null ? i = at : i.push(.../** @type {Source[]} */
    at))), n.f & hn && (n.f ^= hn), u;
  } catch (b) {
    return No(b);
  } finally {
    n.f ^= Cs, ze = e, Ke = t, at = i, Y = r, Ue = s, Li(a), Ot = o, Mn = l;
  }
}
function Sd(n, e) {
  let t = e.reactions;
  if (t !== null) {
    var i = Sc.call(t, n);
    if (i !== -1) {
      var r = t.length - 1;
      r === 0 ? t = e.reactions = null : (t[i] = t[r], t.pop());
    }
  }
  t === null && e.f & Re && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ze === null || !ze.includes(e)) && (De(e, Pt), e.f & yt && (e.f ^= yt, e.f &= ~Ln), Wo(
    /** @type {Derived} **/
    e
  ), Br(
    /** @type {Derived} **/
    e,
    0
  ));
}
function Br(n, e) {
  var t = n.deps;
  if (t !== null)
    for (var i = e; i < t.length; i++)
      Sd(n, t[i]);
}
function cr(n) {
  var e = n.f;
  if (!(e & sn)) {
    De(n, Ne);
    var t = J, i = In;
    J = n, In = !0;
    try {
      e & (qt | Mc) ? _d(n) : tl(n), el(n);
      var r = ul(n);
      n.teardown = typeof r == "function" ? r : null, n.wv = ll;
      var s;
    } finally {
      In = i, J = t;
    }
  }
}
async function gl() {
  await Promise.resolve(), j();
}
function v(n) {
  var e = n.f, t = (e & Re) !== 0;
  if (Y !== null && !Ot) {
    var i = J !== null && (J.f & sn) !== 0;
    if (!i && !(Ue != null && Ue.includes(n))) {
      var r = Y.deps;
      if (Y.f & Cs)
        n.rv < lr && (n.rv = lr, ze === null && r !== null && r[Ke] === n ? Ke++ : ze === null ? ze = [n] : ze.includes(n) || ze.push(n));
      else {
        (Y.deps ?? (Y.deps = [])).push(n);
        var s = n.reactions;
        s === null ? n.reactions = [Y] : s.includes(Y) || s.push(Y);
      }
    }
  }
  if (Hn) {
    if (pn.has(n))
      return pn.get(n);
    if (t) {
      var a = (
        /** @type {Derived} */
        n
      ), o = a.v;
      return (!(a.f & Ne) && a.reactions !== null || hl(a)) && (o = Ks(a)), pn.set(a, o), o;
    }
  } else t && (!(ye != null && ye.has(n)) || B != null && B.is_fork && !or()) && (a = /** @type {Derived} */
  n, br(a) && Bo(a), In && or() && !(a.f & yt) && fl(a));
  if (ye != null && ye.has(n))
    return ye.get(n);
  if (n.f & hn)
    throw n.v;
  return n.v;
}
function fl(n) {
  if (n.deps !== null) {
    n.f ^= yt;
    for (const e of n.deps)
      (e.reactions ?? (e.reactions = [])).push(n), e.f & Re && !(e.f & yt) && fl(
        /** @type {Derived} */
        e
      );
  }
}
function hl(n) {
  if (n.v === Oe) return !0;
  if (n.deps === null) return !1;
  for (const e of n.deps)
    if (pn.has(e) || e.f & Re && hl(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Wn(n) {
  var e = Ot;
  try {
    return Ot = !0, n();
  } finally {
    Ot = e;
  }
}
const Td = -7169;
function De(n, e) {
  n.f = n.f & Td | e;
}
const Ed = ["touchstart", "touchmove"];
function Cd(n) {
  return Ed.includes(n);
}
const pl = /* @__PURE__ */ new Set(), Ds = /* @__PURE__ */ new Set();
function Ad(n, e, t, i = {}) {
  function r(s) {
    if (i.capture || Xi.call(e, s), !s.cancelBubble)
      return $i(() => t == null ? void 0 : t.call(this, s));
  }
  return n.startsWith("pointer") || n.startsWith("touch") || n === "wheel" ? Fn(() => {
    e.addEventListener(n, r, i);
  }) : e.addEventListener(n, r, i), r;
}
function Id(n, e, t, i, r) {
  var s = { capture: i, passive: r }, a = Ad(n, e, t, s);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && Ko(() => {
    e.removeEventListener(n, a, s);
  });
}
function Bn(n) {
  for (var e = 0; e < n.length; e++)
    pl.add(n[e]);
  for (var t of Ds)
    t(n);
}
let Wa = null;
function Xi(n) {
  var m;
  var e = this, t = (
    /** @type {Node} */
    e.ownerDocument
  ), i = n.type, r = ((m = n.composedPath) == null ? void 0 : m.call(n)) || [], s = (
    /** @type {null | Element} */
    r[0] || n.target
  );
  Wa = n;
  var a = 0, o = Wa === n && n.__root;
  if (o) {
    var l = r.indexOf(o);
    if (l !== -1 && (e === document || e === /** @type {any} */
    window)) {
      n.__root = e;
      return;
    }
    var c = r.indexOf(e);
    if (c === -1)
      return;
    l <= c && (a = l);
  }
  if (s = /** @type {Element} */
  r[a] || n.target, s !== e) {
    Ur(n, "currentTarget", {
      configurable: !0,
      get() {
        return s || t;
      }
    });
    var d = Y, u = J;
    Ve(null), zt(null);
    try {
      for (var h, p = []; s !== null; ) {
        var k = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var b = s["__" + i];
          b != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          n.target === s) && b.call(s, n);
        } catch (T) {
          h ? p.push(T) : h = T;
        }
        if (n.cancelBubble || k === e || k === null)
          break;
        s = k;
      }
      if (h) {
        for (let T of p)
          queueMicrotask(() => {
            throw T;
          });
        throw h;
      }
    } finally {
      n.__root = e, delete n.currentTarget, Ve(d), zt(u);
    }
  }
}
function ia(n) {
  var e = document.createElement("template");
  return e.innerHTML = n.replaceAll("<!>", "<!---->"), e.content;
}
function wt(n, e) {
  var t = (
    /** @type {Effect} */
    J
  );
  t.nodes === null && (t.nodes = { start: n, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function ee(n, e) {
  var t = (e & Co) !== 0, i = (e & Jc) !== 0, r, s = !n.startsWith("<!>");
  return () => {
    if (V)
      return wt(W, null), W;
    r === void 0 && (r = ia(s ? n : "<!>" + n), t || (r = /** @type {TemplateNode} */
    /* @__PURE__ */ Ie(r)));
    var a = (
      /** @type {TemplateNode} */
      i || Yo ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    if (t) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ie(a)
      ), l = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      wt(o, l);
    } else
      wt(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function Md(n, e, t = "svg") {
  var i = !n.startsWith("<!>"), r = (e & Co) !== 0, s = `<${t}>${i ? n : "<!>" + n}</${t}>`, a;
  return () => {
    if (V)
      return wt(W, null), W;
    if (!a) {
      var o = (
        /** @type {DocumentFragment} */
        ia(s)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ Ie(o)
      );
      if (r)
        for (a = document.createDocumentFragment(); /* @__PURE__ */ Ie(l); )
          a.appendChild(
            /** @type {TemplateNode} */
            /* @__PURE__ */ Ie(l)
          );
      else
        a = /** @type {Element} */
        /* @__PURE__ */ Ie(l);
    }
    var c = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    if (r) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ie(c)
      ), u = (
        /** @type {TemplateNode} */
        c.lastChild
      );
      wt(d, u);
    } else
      wt(c, c);
    return c;
  };
}
// @__NO_SIDE_EFFECTS__
function ra(n, e) {
  return /* @__PURE__ */ Md(n, e, "svg");
}
function sa() {
  if (V)
    return wt(W, null), W;
  var n = document.createDocumentFragment(), e = document.createComment(""), t = gt();
  return n.append(e, t), wt(e, t), n;
}
function F(n, e) {
  if (V) {
    var t = (
      /** @type {Effect & { nodes: EffectNodes }} */
      J
    );
    (!(t.f & mr) || t.nodes.end === null) && (t.nodes.end = W), Ri();
    return;
  }
  n !== null && n.before(
    /** @type {Node} */
    e
  );
}
let Ps = !0;
function Pn(n, e) {
  var t = e == null ? "" : typeof e == "object" ? e + "" : e;
  t !== (n.__t ?? (n.__t = n.nodeValue)) && (n.__t = t, n.nodeValue = t + "");
}
function rs(n, e) {
  return ml(n, e);
}
function Rd(n, e) {
  Ns(), e.intro = e.intro ?? !1;
  const t = e.target, i = V, r = W;
  try {
    for (var s = /* @__PURE__ */ Ie(t); s && (s.nodeType !== Un || /** @type {Comment} */
    s.data !== Ao); )
      s = /* @__PURE__ */ kt(s);
    if (!s)
      throw On;
    rn(!0), $e(
      /** @type {Comment} */
      s
    );
    const a = ml(n, { ...e, anchor: s });
    return rn(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a instanceof Error && a.message.split(`
`).some((o) => o.startsWith("https://svelte.dev/e/")))
      throw a;
    return a !== On && console.warn("Failed to hydrate: ", a), e.recover === !1 && $c(), Ns(), Js(t), rn(!1), rs(n, e);
  } finally {
    rn(i), $e(r);
  }
}
const Kn = /* @__PURE__ */ new Map();
function ml(n, { target: e, anchor: t, props: i = {}, events: r, context: s, intro: a = !0 }) {
  Ns();
  var o = /* @__PURE__ */ new Set(), l = (u) => {
    for (var h = 0; h < u.length; h++) {
      var p = u[h];
      if (!o.has(p)) {
        o.add(p);
        var k = Cd(p);
        e.addEventListener(p, Xi, { passive: k });
        var b = Kn.get(p);
        b === void 0 ? (document.addEventListener(p, Xi, { passive: k }), Kn.set(p, 1)) : Kn.set(p, b + 1);
      }
    }
  };
  l(Kr(pl)), Ds.add(l);
  var c = void 0, d = yd(() => {
    var u = t ?? e.appendChild(gt());
    return od(
      /** @type {TemplateNode} */
      u,
      {
        pending: () => {
        }
      },
      (h) => {
        if (s) {
          xt({});
          var p = (
            /** @type {ComponentContext} */
            Qe
          );
          p.c = s;
        }
        if (r && (i.$$events = r), V && wt(
          /** @type {TemplateNode} */
          h,
          null
        ), Ps = a, c = n(h, i) || {}, Ps = !0, V && (J.nodes.end = W, W === null || W.nodeType !== Un || /** @type {Comment} */
        W.data !== Zs))
          throw vr(), On;
        s && _t();
      }
    ), () => {
      var k;
      for (var h of o) {
        e.removeEventListener(h, Xi);
        var p = (
          /** @type {number} */
          Kn.get(h)
        );
        --p === 0 ? (document.removeEventListener(h, Xi), Kn.delete(h)) : Kn.set(h, p);
      }
      Ds.delete(l), u !== t && ((k = u.parentNode) == null || k.removeChild(u));
    };
  });
  return zs.set(c, d), c;
}
let zs = /* @__PURE__ */ new WeakMap();
function dr(n, e) {
  const t = zs.get(n);
  return t ? (zs.delete(n), t(e)) : Promise.resolve();
}
var bt, Rt, et, En, hr, pr, Zr;
class Ld {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, t = !0) {
    /** @type {TemplateNode} */
    $(this, "anchor");
    /** @type {Map<Batch, Key>} */
    M(this, bt, /* @__PURE__ */ new Map());
    /**
     * Map of keys to effects that are currently rendered in the DOM.
     * These effects are visible and actively part of the document tree.
     * Example:
     * ```
     * {#if condition}
     * 	foo
     * {:else}
     * 	bar
     * {/if}
     * ```
     * Can result in the entries `true->Effect` and `false->Effect`
     * @type {Map<Key, Effect>}
     */
    M(this, Rt, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    M(this, et, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    M(this, En, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    M(this, hr, !0);
    M(this, pr, () => {
      var e = (
        /** @type {Batch} */
        B
      );
      if (f(this, bt).has(e)) {
        var t = (
          /** @type {Key} */
          f(this, bt).get(e)
        ), i = f(this, Rt).get(t);
        if (i)
          na(i), f(this, En).delete(t);
        else {
          var r = f(this, et).get(t);
          r && (f(this, Rt).set(t, r.effect), f(this, et).delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), i = r.effect);
        }
        for (const [s, a] of f(this, bt)) {
          if (f(this, bt).delete(s), s === e)
            break;
          const o = f(this, et).get(a);
          o && (qe(o.effect), f(this, et).delete(a));
        }
        for (const [s, a] of f(this, Rt)) {
          if (s === t || f(this, En).has(s)) continue;
          const o = () => {
            if (Array.from(f(this, bt).values()).includes(s)) {
              var c = document.createDocumentFragment();
              al(a, c), c.append(gt()), f(this, et).set(s, { effect: a, fragment: c });
            } else
              qe(a);
            f(this, En).delete(s), f(this, Rt).delete(s);
          };
          f(this, hr) || !i ? (f(this, En).add(s), An(a, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    M(this, Zr, (e) => {
      f(this, bt).delete(e);
      const t = Array.from(f(this, bt).values());
      for (const [i, r] of f(this, et))
        t.includes(i) || (qe(r.effect), f(this, et).delete(i));
    });
    this.anchor = e, E(this, hr, t);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, t) {
    var i = (
      /** @type {Batch} */
      B
    ), r = Zo();
    if (t && !f(this, Rt).has(e) && !f(this, et).has(e))
      if (r) {
        var s = document.createDocumentFragment(), a = gt();
        s.append(a), f(this, et).set(e, {
          effect: ut(() => t(a)),
          fragment: s
        });
      } else
        f(this, Rt).set(
          e,
          ut(() => t(this.anchor))
        );
    if (f(this, bt).set(i, e), r) {
      for (const [o, l] of f(this, Rt))
        o === e ? i.skipped_effects.delete(l) : i.skipped_effects.add(l);
      for (const [o, l] of f(this, et))
        o === e ? i.skipped_effects.delete(l.effect) : i.skipped_effects.add(l.effect);
      i.oncommit(f(this, pr)), i.ondiscard(f(this, Zr));
    } else
      V && (this.anchor = W), f(this, pr).call(this);
  }
}
bt = new WeakMap(), Rt = new WeakMap(), et = new WeakMap(), En = new WeakMap(), hr = new WeakMap(), pr = new WeakMap(), Zr = new WeakMap();
function ve(n, e, t = !1) {
  V && Ri();
  var i = new Ld(n), r = t ? Rn : 0;
  function s(a, o) {
    if (V) {
      const c = Io(n) === es;
      if (a === c) {
        var l = Fr();
        $e(l), i.anchor = l, rn(!1), i.ensure(a, o), rn(!0);
        return;
      }
    }
    i.ensure(a, o);
  }
  ta(() => {
    var a = !1;
    e((o, l = !0) => {
      a = !0, s(l, o);
    }), a || s(!1, null);
  }, r);
}
function Od(n, e, t) {
  for (var i = [], r = e.length, s, a = e.length, o = 0; o < r; o++) {
    let u = e[o];
    An(
      u,
      () => {
        if (s) {
          if (s.pending.delete(u), s.done.add(u), s.pending.size === 0) {
            var h = (
              /** @type {Set<EachOutroGroup>} */
              n.outrogroups
            );
            $s(Kr(s.done)), h.delete(s), h.size === 0 && (n.outrogroups = null);
          }
        } else
          a -= 1;
      },
      !1
    );
  }
  if (a === 0) {
    var l = i.length === 0 && t !== null;
    if (l) {
      var c = (
        /** @type {Element} */
        t
      ), d = (
        /** @type {Element} */
        c.parentNode
      );
      Js(d), d.append(c), n.items.clear();
    }
    $s(e, !l);
  } else
    s = {
      pending: new Set(e),
      done: /* @__PURE__ */ new Set()
    }, (n.outrogroups ?? (n.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function $s(n, e = !0) {
  for (var t = 0; t < n.length; t++)
    qe(n[t], e);
}
var Ba;
function vl(n, e, t, i, r, s = null) {
  var a = n, o = /* @__PURE__ */ new Map(), l = (e & Eo) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      n
    );
    a = V ? $e(/* @__PURE__ */ Ie(c)) : c.appendChild(gt());
  }
  V && Ri();
  var d = null, u = /* @__PURE__ */ Ho(() => {
    var T = t();
    return yo(T) ? T : T == null ? [] : Kr(T);
  }), h, p = !0;
  function k() {
    m.fallback = d, Nd(m, h, a, e, i), d !== null && (h.length === 0 ? d.f & nn ? (d.f ^= nn, Zi(d, null, a)) : na(d) : An(d, () => {
      d = null;
    }));
  }
  var b = ta(() => {
    h = /** @type {V[]} */
    v(u);
    var T = h.length;
    let z = !1;
    if (V) {
      var w = Io(a) === es;
      w !== (T === 0) && (a = Fr(), $e(a), rn(!1), z = !0);
    }
    for (var y = /* @__PURE__ */ new Set(), L = (
      /** @type {Batch} */
      B
    ), G = Zo(), q = 0; q < T; q += 1) {
      V && W.nodeType === Un && /** @type {Comment} */
      W.data === Zs && (a = /** @type {Comment} */
      W, z = !0, rn(!1));
      var oe = h[q], de = i(oe, q), C = p ? null : o.get(de);
      C ? (C.v && Ni(C.v, oe), C.i && Ni(C.i, q), G && L.skipped_effects.delete(C.e)) : (C = Dd(
        o,
        p ? a : Ba ?? (Ba = gt()),
        oe,
        de,
        q,
        r,
        e,
        t
      ), p || (C.e.f |= nn), o.set(de, C)), y.add(de);
    }
    if (T === 0 && s && !d && (p ? d = ut(() => s(a)) : (d = ut(() => s(Ba ?? (Ba = gt()))), d.f |= nn)), V && T > 0 && $e(Fr()), !p)
      if (G) {
        for (const [N, X] of o)
          y.has(N) || L.skipped_effects.add(X.e);
        L.oncommit(k), L.ondiscard(() => {
        });
      } else
        k();
    z && rn(!0), v(u);
  }), m = { effect: b, items: o, outrogroups: null, fallback: d };
  p = !1, V && (a = W);
}
function Nd(n, e, t, i, r) {
  var C, N, X, le, he, _e, Xe, Wt, Bt;
  var s = (i & Gc) !== 0, a = e.length, o = n.items, l = n.effect.first, c, d = null, u, h = [], p = [], k, b, m, T;
  if (s)
    for (T = 0; T < a; T += 1)
      k = e[T], b = r(k, T), m = /** @type {EachItem} */
      o.get(b).e, m.f & nn || ((N = (C = m.nodes) == null ? void 0 : C.a) == null || N.measure(), (u ?? (u = /* @__PURE__ */ new Set())).add(m));
  for (T = 0; T < a; T += 1) {
    if (k = e[T], b = r(k, T), m = /** @type {EachItem} */
    o.get(b).e, n.outrogroups !== null)
      for (const Ce of n.outrogroups)
        Ce.pending.delete(m), Ce.done.delete(m);
    if (m.f & nn)
      if (m.f ^= nn, m === l)
        Zi(m, null, t);
      else {
        var z = d ? d.next : l;
        m === n.effect.last && (n.effect.last = m.prev), m.prev && (m.prev.next = m.next), m.next && (m.next.prev = m.prev), cn(n, d, m), cn(n, m, z), Zi(m, z, t), d = m, h = [], p = [], l = d.next;
        continue;
      }
    if (m.f & nt && (na(m), s && ((le = (X = m.nodes) == null ? void 0 : X.a) == null || le.unfix(), (u ?? (u = /* @__PURE__ */ new Set())).delete(m))), m !== l) {
      if (c !== void 0 && c.has(m)) {
        if (h.length < p.length) {
          var w = p[0], y;
          d = w.prev;
          var L = h[0], G = h[h.length - 1];
          for (y = 0; y < h.length; y += 1)
            Zi(h[y], w, t);
          for (y = 0; y < p.length; y += 1)
            c.delete(p[y]);
          cn(n, L.prev, G.next), cn(n, d, L), cn(n, G, w), l = w, d = G, T -= 1, h = [], p = [];
        } else
          c.delete(m), Zi(m, l, t), cn(n, m.prev, m.next), cn(n, m, d === null ? n.effect.first : d.next), cn(n, d, m), d = m;
        continue;
      }
      for (h = [], p = []; l !== null && l !== m; )
        (c ?? (c = /* @__PURE__ */ new Set())).add(l), p.push(l), l = l.next;
      if (l === null)
        continue;
    }
    m.f & nn || h.push(m), d = m, l = m.next;
  }
  if (n.outrogroups !== null) {
    for (const Ce of n.outrogroups)
      Ce.pending.size === 0 && ($s(Kr(Ce.done)), (he = n.outrogroups) == null || he.delete(Ce));
    n.outrogroups.size === 0 && (n.outrogroups = null);
  }
  if (l !== null || c !== void 0) {
    var q = [];
    if (c !== void 0)
      for (m of c)
        m.f & nt || q.push(m);
    for (; l !== null; )
      !(l.f & nt) && l !== n.fallback && q.push(l), l = l.next;
    var oe = q.length;
    if (oe > 0) {
      var de = i & Eo && a === 0 ? t : null;
      if (s) {
        for (T = 0; T < oe; T += 1)
          (Xe = (_e = q[T].nodes) == null ? void 0 : _e.a) == null || Xe.measure();
        for (T = 0; T < oe; T += 1)
          (Bt = (Wt = q[T].nodes) == null ? void 0 : Wt.a) == null || Bt.fix();
      }
      Od(n, q, de);
    }
  }
  s && Fn(() => {
    var Ce, S;
    if (u !== void 0)
      for (m of u)
        (S = (Ce = m.nodes) == null ? void 0 : Ce.a) == null || S.apply();
  });
}
function Dd(n, e, t, i, r, s, a, o) {
  var l = a & Bc ? a & Vc ? Dn(t) : /* @__PURE__ */ Go(t, !1, !1) : null, c = a & jc ? Dn(r) : null;
  return {
    v: l,
    i: c,
    e: ut(() => (s(e, l ?? t, c ?? r, o), () => {
      n.delete(i);
    }))
  };
}
function Zi(n, e, t) {
  if (n.nodes)
    for (var i = n.nodes.start, r = n.nodes.end, s = e && !(e.f & nn) ? (
      /** @type {EffectNodes} */
      e.nodes.start
    ) : t; i !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ kt(i)
      );
      if (s.before(i), i === r)
        return;
      i = a;
    }
}
function cn(n, e, t) {
  e === null ? n.effect.first = t : e.next = t, t === null ? n.effect.last = e : t.prev = e;
}
function Pd(n, e, t = !1, i = !1, r = !1) {
  var s = n, a = "";
  Ye(() => {
    var o = (
      /** @type {Effect} */
      J
    );
    if (a === (a = e() ?? "")) {
      V && Ri();
      return;
    }
    if (o.nodes !== null && (nl(
      o.nodes.start,
      /** @type {TemplateNode} */
      o.nodes.end
    ), o.nodes = null), a !== "") {
      if (V) {
        W.data;
        for (var l = Ri(), c = l; l !== null && (l.nodeType !== Un || /** @type {Comment} */
        l.data !== ""); )
          c = l, l = /* @__PURE__ */ kt(l);
        if (l === null)
          throw vr(), On;
        wt(W, c), s = $e(l);
        return;
      }
      var d = a + "";
      t ? d = `<svg>${d}</svg>` : i && (d = `<math>${d}</math>`);
      var u = ia(d);
      if ((t || i) && (u = /** @type {Element} */
      /* @__PURE__ */ Ie(u)), wt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ie(u),
        /** @type {TemplateNode} */
        u.lastChild
      ), t || i)
        for (; /* @__PURE__ */ Ie(u); )
          s.before(
            /** @type {TemplateNode} */
            /* @__PURE__ */ Ie(u)
          );
      else
        s.before(u);
    }
  });
}
const zd = () => performance.now(), tn = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (n) => requestAnimationFrame(n)
  ),
  now: () => zd(),
  tasks: /* @__PURE__ */ new Set()
};
function bl() {
  const n = tn.now();
  tn.tasks.forEach((e) => {
    e.c(n) || (tn.tasks.delete(e), e.f());
  }), tn.tasks.size !== 0 && tn.tick(bl);
}
function $d(n) {
  let e;
  return tn.tasks.size === 0 && tn.tick(bl), {
    promise: new Promise((t) => {
      tn.tasks.add(e = { c: n, f: t });
    }),
    abort() {
      tn.tasks.delete(e);
    }
  };
}
function Ar(n, e) {
  $i(() => {
    n.dispatchEvent(new CustomEvent(e));
  });
}
function qd(n) {
  if (n === "float") return "cssFloat";
  if (n === "offset") return "cssOffset";
  if (n.startsWith("--")) return n;
  const e = n.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (t) => t[0].toUpperCase() + t.slice(1)
  ).join("");
}
function ja(n) {
  const e = {}, t = n.split(";");
  for (const i of t) {
    const [r, s] = i.split(":");
    if (!r || s === void 0) break;
    const a = qd(r.trim());
    e[a] = s.trim();
  }
  return e;
}
const Ud = (n) => n;
function Ga(n, e, t, i) {
  var m;
  var r = (n & Kc) !== 0, s = "both", a, o = e.inert, l = e.style.overflow, c, d;
  function u() {
    return $i(() => a ?? (a = t()(e, (i == null ? void 0 : i()) ?? /** @type {P} */
    {}, {
      direction: s
    })));
  }
  var h = {
    is_global: r,
    in() {
      e.inert = o, Ar(e, "introstart"), c = qs(e, u(), d, 1, () => {
        Ar(e, "introend"), c == null || c.abort(), c = a = void 0, e.style.overflow = l;
      });
    },
    out(T) {
      e.inert = !0, Ar(e, "outrostart"), d = qs(e, u(), c, 0, () => {
        Ar(e, "outroend"), T == null || T();
      });
    },
    stop: () => {
      c == null || c.abort(), d == null || d.abort();
    }
  }, p = (
    /** @type {Effect & { nodes: EffectNodes }} */
    J
  );
  if (((m = p.nodes).t ?? (m.t = [])).push(h), Ps) {
    var k = r;
    if (!k) {
      for (var b = (
        /** @type {Effect | null} */
        p.parent
      ); b && b.f & Rn; )
        for (; (b = b.parent) && !(b.f & qt); )
          ;
      k = !b || (b.f & mr) !== 0;
    }
    k && ea(() => {
      Wn(() => h.in());
    });
  }
}
function qs(n, e, t, i, r) {
  var s = i === 1;
  if (Ac(e)) {
    var a, o = !1;
    return Fn(() => {
      if (!o) {
        var m = e({ direction: s ? "in" : "out" });
        a = qs(n, m, t, i, r);
      }
    }), {
      abort: () => {
        o = !0, a == null || a.abort();
      },
      deactivate: () => a.deactivate(),
      reset: () => a.reset(),
      t: () => a.t()
    };
  }
  if (t == null || t.deactivate(), !(e != null && e.duration))
    return r(), {
      abort: Hi,
      deactivate: Hi,
      reset: Hi,
      t: () => i
    };
  const { delay: l = 0, css: c, tick: d, easing: u = Ud } = e;
  var h = [];
  if (s && t === void 0 && (d && d(0, 1), c)) {
    var p = ja(c(0, 1));
    h.push(p, p);
  }
  var k = () => 1 - i, b = n.animate(h, { duration: l, fill: "forwards" });
  return b.onfinish = () => {
    b.cancel();
    var m = (t == null ? void 0 : t.t()) ?? 1 - i;
    t == null || t.abort();
    var T = i - m, z = (
      /** @type {number} */
      e.duration * Math.abs(T)
    ), w = [];
    if (z > 0) {
      var y = !1;
      if (c)
        for (var L = Math.ceil(z / 16.666666666666668), G = 0; G <= L; G += 1) {
          var q = m + T * u(G / L), oe = ja(c(q, 1 - q));
          w.push(oe), y || (y = oe.overflow === "hidden");
        }
      y && (n.style.overflow = "hidden"), k = () => {
        var de = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          b.currentTime
        );
        return m + T * u(de / z);
      }, d && $d(() => {
        if (b.playState !== "running") return !1;
        var de = k();
        return d(de, 1 - de), !0;
      });
    }
    b = n.animate(w, { duration: z, fill: "forwards" }), b.onfinish = () => {
      k = () => i, d == null || d(i, 1 - i), r();
    };
  }, {
    abort: () => {
      b && (b.cancel(), b.effect = null, b.onfinish = Hi);
    },
    deactivate: () => {
      r = Hi;
    },
    reset: () => {
      i === 0 && (d == null || d(1, 0));
    },
    t: () => k()
  };
}
function Ft(n, e) {
  ea(() => {
    var t = n.getRootNode(), i = (
      /** @type {ShadowRoot} */
      t.host ? (
        /** @type {ShadowRoot} */
        t
      ) : (
        /** @type {Document} */
        t.head ?? /** @type {Document} */
        t.ownerDocument.head
      )
    );
    if (!i.querySelector("#" + e.hash)) {
      const r = document.createElement("style");
      r.id = e.hash, r.textContent = e.code, i.appendChild(r);
    }
  });
}
const Va = [...` 	
\r\f \v\uFEFF`];
function Fd(n, e, t) {
  var i = n == null ? "" : "" + n;
  if (e && (i = i ? i + " " + e : e), t) {
    for (var r in t)
      if (t[r])
        i = i ? i + " " + r : r;
      else if (i.length)
        for (var s = r.length, a = 0; (a = i.indexOf(r, a)) >= 0; ) {
          var o = a + s;
          (a === 0 || Va.includes(i[a - 1])) && (o === i.length || Va.includes(i[o])) ? i = (a === 0 ? "" : i.substring(0, a)) + i.substring(o + 1) : a = o;
        }
  }
  return i === "" ? null : i;
}
function Hd(n, e) {
  return n == null ? null : String(n);
}
function ss(n, e, t, i, r, s) {
  var a = n.__className;
  if (V || a !== t || a === void 0) {
    var o = Fd(t, i, s);
    (!V || o !== n.getAttribute("class")) && (o == null ? n.removeAttribute("class") : n.className = o), n.__className = t;
  } else if (s && r !== s)
    for (var l in s) {
      var c = !!s[l];
      (r == null || c !== !!r[l]) && n.classList.toggle(l, c);
    }
  return s;
}
function wl(n, e, t, i) {
  var r = n.__style;
  if (V || r !== e) {
    var s = Hd(e);
    (!V || s !== n.getAttribute("style")) && (s == null ? n.removeAttribute("style") : n.style.cssText = s), n.__style = e;
  }
  return i;
}
const Wd = Symbol("is custom element"), Bd = Symbol("is html");
function Fe(n, e, t, i) {
  var r = jd(n);
  V && (r[e] = n.getAttribute(e), e === "src" || e === "srcset" || e === "href" && n.nodeName === "LINK") || r[e] !== (r[e] = t) && (e === "loading" && (n[Lc] = t), t == null ? n.removeAttribute(e) : typeof t != "string" && Gd(n).includes(e) ? n[e] = t : n.setAttribute(e, t));
}
function jd(n) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    n.__attributes ?? (n.__attributes = {
      [Wd]: n.nodeName.includes("-"),
      [Bd]: n.namespaceURI === ed
    })
  );
}
var Ya = /* @__PURE__ */ new Map();
function Gd(n) {
  var e = n.getAttribute("is") || n.nodeName, t = Ya.get(e);
  if (t) return t;
  Ya.set(e, t = []);
  for (var i, r = n, s = Element.prototype; s !== r; ) {
    i = Tc(r);
    for (var a in i)
      i[a].set && t.push(a);
    r = xo(r);
  }
  return t;
}
function Vd(n, e, t = e) {
  var i = /* @__PURE__ */ new WeakSet();
  md(n, "input", async (r) => {
    var s = r ? n.defaultValue : n.value;
    if (s = bs(n) ? ws(s) : s, t(s), B !== null && i.add(B), await gl(), s !== (s = e())) {
      var a = n.selectionStart, o = n.selectionEnd, l = n.value.length;
      if (n.value = s ?? "", o !== null) {
        var c = n.value.length;
        a === o && o === l && c > l ? (n.selectionStart = c, n.selectionEnd = c) : (n.selectionStart = a, n.selectionEnd = Math.min(o, c));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (V && n.defaultValue !== n.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Wn(e) == null && n.value) && (t(bs(n) ? ws(n.value) : n.value), B !== null && i.add(B)), is(() => {
    var r = e();
    if (n === document.activeElement) {
      var s = (
        /** @type {Batch} */
        Nr ?? B
      );
      if (i.has(s))
        return;
    }
    bs(n) && r === ws(n.value) || n.type === "date" && !r && !n.value || r !== n.value && (n.value = r ?? "");
  });
}
function bs(n) {
  var e = n.type;
  return e === "number" || e === "range";
}
function ws(n) {
  return n === "" ? null : +n;
}
function Qa(n, e) {
  return n === e || (n == null ? void 0 : n[Ji]) === e;
}
function as(n = {}, e, t, i) {
  return ea(() => {
    var r, s;
    return is(() => {
      r = s, s = [], Wn(() => {
        n !== t(...s) && (e(n, ...s), r && Qa(t(...r), n) && e(null, ...r));
      });
    }), () => {
      Fn(() => {
        s && Qa(t(...s), n) && e(null, ...s);
      });
    };
  }), n;
}
let Ir = !1;
function Yd(n) {
  var e = Ir;
  try {
    return Ir = !1, [n(), Ir];
  } finally {
    Ir = e;
  }
}
function Q(n, e, t, i) {
  var z;
  var r = (t & Xc) !== 0, s = (t & Zc) !== 0, a = (
    /** @type {V} */
    i
  ), o = !0, l = () => (o && (o = !1, a = s ? Wn(
    /** @type {() => V} */
    i
  ) : (
    /** @type {V} */
    i
  )), a), c;
  if (r) {
    var d = Ji in n || So in n;
    c = ((z = Cn(n, e)) == null ? void 0 : z.set) ?? (d && e in n ? (w) => n[e] = w : void 0);
  }
  var u, h = !1;
  r ? [u, h] = Yd(() => (
    /** @type {V} */
    n[e]
  )) : u = /** @type {V} */
  n[e], u === void 0 && i !== void 0 && (u = l(), c && (qc(), c(u)));
  var p;
  if (p = () => {
    var w = (
      /** @type {V} */
      n[e]
    );
    return w === void 0 ? l() : (o = !0, w);
  }, !(t & Qc))
    return p;
  if (c) {
    var k = n.$$legacy;
    return (
      /** @type {() => V} */
      function(w, y) {
        return arguments.length > 0 ? ((!y || k || h) && c(y ? p() : w), w) : p();
      }
    );
  }
  var b = !1, m = (t & Yc ? ns : Ho)(() => (b = !1, p()));
  r && v(m);
  var T = (
    /** @type {Effect} */
    J
  );
  return (
    /** @type {() => V} */
    function(w, y) {
      if (arguments.length > 0) {
        const L = y ? v(m) : r ? we(w) : w;
        return P(m, L), b = !0, a !== void 0 && (a = L), w;
      }
      return Hn && b || T.f & sn ? m.v : v(m);
    }
  );
}
function Qd(n) {
  return new Xd(n);
}
var en, ct;
class Xd {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    M(this, en);
    /** @type {Record<string, any>} */
    M(this, ct);
    var s;
    var t = /* @__PURE__ */ new Map(), i = (a, o) => {
      var l = /* @__PURE__ */ Go(o, !1, !1);
      return t.set(a, l), l;
    };
    const r = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(a, o) {
          return v(t.get(o) ?? i(o, Reflect.get(a, o)));
        },
        has(a, o) {
          return o === So ? !0 : (v(t.get(o) ?? i(o, Reflect.get(a, o))), Reflect.has(a, o));
        },
        set(a, o, l) {
          return P(t.get(o) ?? i(o, l), l), Reflect.set(a, o, l);
        }
      }
    );
    E(this, ct, (e.hydrate ? Rd : rs)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: r,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((s = e == null ? void 0 : e.props) != null && s.$$host) || e.sync === !1) && j(), E(this, en, r.$$events);
    for (const a of Object.keys(f(this, ct)))
      a === "$set" || a === "$destroy" || a === "$on" || Ur(this, a, {
        get() {
          return f(this, ct)[a];
        },
        /** @param {any} value */
        set(o) {
          f(this, ct)[a] = o;
        },
        enumerable: !0
      });
    f(this, ct).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(r, a);
    }, f(this, ct).$destroy = () => {
      dr(f(this, ct));
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    f(this, ct).$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, t) {
    f(this, en)[e] = f(this, en)[e] || [];
    const i = (...r) => t.call(this, ...r);
    return f(this, en)[e].push(i), () => {
      f(this, en)[e] = f(this, en)[e].filter(
        /** @param {any} fn */
        (r) => r !== i
      );
    };
  }
  $destroy() {
    f(this, ct).$destroy();
  }
}
en = new WeakMap(), ct = new WeakMap();
let yl;
typeof HTMLElement == "function" && (yl = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, t, i) {
    super();
    /** The Svelte component constructor */
    $(this, "$$ctor");
    /** Slots */
    $(this, "$$s");
    /** @type {any} The Svelte component instance */
    $(this, "$$c");
    /** Whether or not the custom element is connected */
    $(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    $(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    $(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    $(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    $(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    $(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    $(this, "$$me");
    this.$$ctor = e, this.$$s = t, i && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(e, t, i) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
      const r = this.$$c.$on(e, t);
      this.$$l_u.set(t, r);
    }
    super.addEventListener(e, t, i);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(e, t, i) {
    if (super.removeEventListener(e, t, i), this.$$c) {
      const r = this.$$l_u.get(t);
      r && (r(), this.$$l_u.delete(t));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(r) {
        return (s) => {
          const a = document.createElement("slot");
          r !== "default" && (a.name = r), F(s, a);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, i = Zd(this);
      for (const r of this.$$s)
        r in i && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const s = this.$$g_p(r.name);
        s in this.$$d || (this.$$d[s] = zr(s, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = Qd({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = wd(() => {
        is(() => {
          var r;
          this.$$r = !0;
          for (const s of qr(this.$$c)) {
            if (!((r = this.$$p_d[s]) != null && r.reflect)) continue;
            this.$$d[s] = this.$$c[s];
            const a = zr(
              s,
              this.$$d[s],
              this.$$p_d,
              "toAttribute"
            );
            a == null ? this.removeAttribute(this.$$p_d[s].attribute || s) : this.setAttribute(this.$$p_d[s].attribute || s, a);
          }
          this.$$r = !1;
        });
      });
      for (const r in this.$$l)
        for (const s of this.$$l[r]) {
          const a = this.$$c.$on(r, s);
          this.$$l_u.set(s, a);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(e, t, i) {
    var r;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = zr(e, i, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(e) {
    return qr(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function zr(n, e, t, i) {
  var s;
  const r = (s = t[n]) == null ? void 0 : s.type;
  if (e = r === "Boolean" && typeof e != "boolean" ? e != null : e, !i || !t[n])
    return e;
  if (i === "toAttribute")
    switch (r) {
      case "Object":
      case "Array":
        return e == null ? null : JSON.stringify(e);
      case "Boolean":
        return e ? "" : null;
      case "Number":
        return e ?? null;
      default:
        return e;
    }
  else
    switch (r) {
      case "Object":
      case "Array":
        return e && JSON.parse(e);
      case "Boolean":
        return e;
      case "Number":
        return e != null ? +e : e;
      default:
        return e;
    }
}
function Zd(n) {
  const e = {};
  return n.childNodes.forEach((t) => {
    e[
      /** @type {Element} node */
      t.slot || "default"
    ] = !0;
  }), e;
}
function Ht(n, e, t, i, r, s) {
  let a = class extends yl {
    constructor() {
      super(n, t, r), this.$$p_d = e;
    }
    static get observedAttributes() {
      return qr(e).map(
        (o) => (e[o].attribute || o).toLowerCase()
      );
    }
  };
  return qr(e).forEach((o) => {
    Ur(a.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(l) {
        var u;
        l = zr(o, l, e), this.$$d[o] = l;
        var c = this.$$c;
        if (c) {
          var d = (u = Cn(c, o)) == null ? void 0 : u.get;
          d ? c[o] = l : c.$set({ [o]: l });
        }
      }
    });
  }), i.forEach((o) => {
    Ur(a.prototype, o, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[o];
      }
    });
  }), n.element = /** @type {any} */
  a, a;
}
function os(n) {
  Qe === null && To(), ii(() => {
    const e = Wn(n);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function xl(n) {
  Qe === null && To(), os(() => () => Wn(n));
}
const Kd = "5";
var wo;
typeof window < "u" && ((wo = window.__svelte ?? (window.__svelte = {})).v ?? (wo.v = /* @__PURE__ */ new Set())).add(Kd);
const Jd = (n) => n;
function eu(n) {
  const e = n - 1;
  return e * e * e + 1;
}
function Xa(n) {
  const e = typeof n == "string" && n.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    n,
    "px"
  ];
}
function tu(n, { delay: e = 0, duration: t = 400, easing: i = Jd } = {}) {
  const r = +getComputedStyle(n).opacity;
  return {
    delay: e,
    duration: t,
    easing: i,
    css: (s) => `opacity: ${s * r}`
  };
}
function nu(n, { delay: e = 0, duration: t = 400, easing: i = eu, x: r = 0, y: s = 0, opacity: a = 0 } = {}) {
  const o = getComputedStyle(n), l = +o.opacity, c = o.transform === "none" ? "" : o.transform, d = l * (1 - a), [u, h] = Xa(r), [p, k] = Xa(s);
  return {
    delay: e,
    duration: t,
    easing: i,
    css: (b, m) => `
			transform: ${c} translate(${(1 - b) * u}${h}, ${(1 - b) * p}${k});
			opacity: ${l - d * m}`
  };
}
var li, ci, di, ui;
class _l {
  constructor() {
    M(this, li);
    M(this, ci);
    M(this, di);
    M(this, ui);
    E(this, li, /* @__PURE__ */ U(!1)), E(this, ci, /* @__PURE__ */ U(!1)), E(this, di, /* @__PURE__ */ U(!1)), E(this, ui, /* @__PURE__ */ U(!1));
  }
  get isOpen() {
    return v(f(this, li));
  }
  set isOpen(e) {
    P(f(this, li), e, !0);
  }
  get isMinimized() {
    return v(f(this, ci));
  }
  set isMinimized(e) {
    P(f(this, ci), e, !0);
  }
  get isLoading() {
    return v(f(this, di));
  }
  set isLoading(e) {
    P(f(this, di), e, !0);
  }
  get hasUnreadMessages() {
    return v(f(this, ui));
  }
  set hasUnreadMessages(e) {
    P(f(this, ui), e, !0);
  }
  toggle() {
    this.isOpen = !this.isOpen, this.isOpen && (this.hasUnreadMessages = !1);
  }
  open() {
    this.isOpen = !0, this.hasUnreadMessages = !1;
  }
  close() {
    this.isOpen = !1;
  }
  minimize() {
    this.isMinimized = !0;
  }
  restore() {
    this.isMinimized = !1;
  }
  setLoading(e) {
    this.isLoading = e;
  }
  markUnread() {
    this.isOpen || (this.hasUnreadMessages = !0);
  }
}
li = new WeakMap(), ci = new WeakMap(), di = new WeakMap(), ui = new WeakMap();
function kl() {
  return new _l();
}
const mn = new _l(), Te = {
  /** Session timeout: 1 hour in milliseconds */
  SESSION_TIMEOUT: 60 * 60 * 1e3,
  /** WebSocket reconnection delay: 1 second */
  RECONNECT_DELAY: 1e3,
  /** Maximum WebSocket reconnection delay: 30 seconds */
  MAX_RECONNECT_DELAY_MS: 3e4,
  /** WebSocket heartbeat interval: 30 seconds (desktop) */
  HEARTBEAT_INTERVAL: 30 * 1e3,
  /** WebSocket heartbeat interval for mobile: 10 seconds */
  MOBILE_HEARTBEAT_INTERVAL: 10 * 1e3,
  /** Maximum reconnection attempts */
  MAX_RECONNECT_ATTEMPTS: 5,
  /** API request timeout: 30 seconds */
  API_TIMEOUT: 30 * 1e3,
  /** Grace period after completion before ignoring typing indicators: 2 seconds */
  COMPLETION_GRACE_PERIOD: 2e3,
  /** WebSocket connection establishment delay: 1 second */
  CONNECTION_DELAY: 1e3,
  /** Server-controlled typing indicator timeout: 10 seconds */
  TYPING_INDICATOR_TIMEOUT: 1e4,
  /** General typing indicator timeout fallback: 30 seconds */
  TYPING_FALLBACK_TIMEOUT: 3e4,
  /** Streaming message batch delay for smooth updates: 16ms (~60fps) */
  STREAMING_BATCH_DELAY: 16,
  /** Connection verification timeout when page becomes visible: 5 seconds */
  VISIBILITY_PING_TIMEOUT: 5e3
}, dn = {
  /** Maximum message length */
  MAX_LENGTH: 4e3,
  /** Minimum message length */
  MIN_LENGTH: 1,
  /** Maximum message queue size to prevent memory leaks */
  MAX_QUEUE_SIZE: 50
}, Za = {
  /** Visitor ID storage key */
  VISITOR_ID: "ai_chat_visitor_id",
  /** Session history storage key */
  SESSIONS: "ai_chat_sessions"
}, Jn = {
  /** Maximum number of quick questions */
  MAX_COUNT: 6,
  /** Maximum character length per question */
  MAX_LENGTH: 100
};
var gi, fi, hi, pi, mi, vi;
class Sl {
  constructor() {
    M(this, gi);
    M(this, fi);
    M(this, hi);
    M(this, pi);
    M(this, mi);
    M(this, vi);
    E(this, gi, /* @__PURE__ */ U(we([]))), E(this, fi, /* @__PURE__ */ U(null)), E(this, hi, /* @__PURE__ */ U(!1)), E(this, pi, /* @__PURE__ */ U(null)), E(this, mi, /* @__PURE__ */ U(null)), this.streamingBuffer = "", this.streamingTimeout = null, E(this, vi, /* @__PURE__ */ U(0));
  }
  get messages() {
    return v(f(this, gi));
  }
  set messages(e) {
    P(f(this, gi), e, !0);
  }
  get currentSession() {
    return v(f(this, fi));
  }
  set currentSession(e) {
    P(f(this, fi), e, !0);
  }
  get isTyping() {
    return v(f(this, hi));
  }
  set isTyping(e) {
    P(f(this, hi), e, !0);
  }
  get error() {
    return v(f(this, pi));
  }
  set error(e) {
    P(f(this, pi), e, !0);
  }
  get streamingMessageId() {
    return v(f(this, mi));
  }
  set streamingMessageId(e) {
    P(f(this, mi), e, !0);
  }
  get streamingUpdateSignal() {
    return v(f(this, vi));
  }
  set streamingUpdateSignal(e) {
    P(f(this, vi), e, !0);
  }
  // Derived state
  get unreadCount() {
    return this.messages.filter((e) => e.role === "assistant" && e.status !== "sent").length;
  }
  get hasMessages() {
    return this.messages.length > 0;
  }
  addMessage(e, t = "user") {
    const i = {
      id: crypto.randomUUID(),
      role: t,
      content: e,
      timestamp: /* @__PURE__ */ new Date(),
      status: t === "user" ? "sending" : "sent"
    };
    return this.messages = [...this.messages, i], i;
  }
  updateMessageStatus(e, t) {
    this.messages = this.messages.map((i) => i.id === e ? { ...i, status: t } : i);
  }
  setTyping(e) {
    this.isTyping = e;
  }
  clearMessages() {
    this.messages = [], this.error = null, this.streamingMessageId = null, this.streamingBuffer = "", this.streamingTimeout && (clearTimeout(this.streamingTimeout), this.streamingTimeout = null);
  }
  setError(e) {
    this.error = e, this.isTyping = !1;
  }
  // Streaming message methods for real-time accumulation
  startStreamingMessage() {
    const e = this.addMessage("", "assistant");
    return this.streamingMessageId = e.id, e.id;
  }
  appendToStreamingMessage(e) {
    var t;
    if (this.streamingMessageId) {
      if (this.streamingBuffer += e, this.streamingTimeout && clearTimeout(this.streamingTimeout), typeof process < "u" && ((t = process.env) == null ? void 0 : t.NODE_ENV) === "test") {
        this.flushStreamingBuffer();
        return;
      }
      this.streamingTimeout = window.setTimeout(
        () => {
          this.flushStreamingBuffer(), this.streamingTimeout = null;
        },
        Te.STREAMING_BATCH_DELAY
      );
    }
  }
  flushStreamingBuffer() {
    if (this.streamingMessageId && this.streamingBuffer) {
      const e = this.messages.find((t) => t.id === this.streamingMessageId);
      e ? (e.content += this.streamingBuffer, this.streamingUpdateSignal++) : console.warn("ChatStore: Streaming message not found", { id: this.streamingMessageId }), this.streamingBuffer = "";
    }
  }
  finishStreamingMessage() {
    this.streamingTimeout && (clearTimeout(this.streamingTimeout), this.streamingTimeout = null), this.flushStreamingBuffer(), this.streamingMessageId = null;
  }
  updateMessageContent(e, t) {
    this.messages = this.messages.map((i) => i.id === e ? { ...i, content: t(i.content) } : i);
  }
  // Getters for streaming state (useful for debugging and testing)
  get isStreaming() {
    return this.streamingMessageId !== null;
  }
  get currentStreamingMessageId() {
    return this.streamingMessageId;
  }
  startSession(e) {
    this.currentSession = {
      id: crypto.randomUUID(),
      clientId: e,
      startedAt: /* @__PURE__ */ new Date(),
      messages: []
    }, this.clearMessages();
  }
  endSession() {
    this.currentSession && (this.currentSession.endedAt = /* @__PURE__ */ new Date(), this.currentSession.messages = [...this.messages]);
  }
  loadSession(e) {
    this.currentSession = e, this.messages = [...e.messages];
  }
}
gi = new WeakMap(), fi = new WeakMap(), hi = new WeakMap(), pi = new WeakMap(), mi = new WeakMap(), vi = new WeakMap();
function Tl() {
  return new Sl();
}
const $t = new Sl(), Ka = {
  "client-id": "clientId",
  theme: "theme",
  position: "position",
  title: "title",
  "logo-url": "logoUrl",
  placeholder: "placeholder",
  "accent-color": "accentColor",
  "avatar-emoji": "avatarEmoji",
  "company-name": "companyName",
  "initial-message": "initialMessage",
  "quick-questions": "quickQuestions",
  debug: "debug",
  "auto-init": "autoInit",
  "voice-input": "voiceInput"
}, st = {
  theme: "modern",
  position: "bottom-right",
  title: "AI Assistant",
  placeholder: "Type your message...",
  avatarEmoji: "🤖",
  initialMessage: void 0,
  quickQuestions: void 0,
  debug: !1,
  autoInit: !0,
  voiceInput: !1
}, El = {
  /**
   * Convert camelCase config to snake_case for backend API
   */
  toBackendFormat(n) {
    return {
      client_id: n.clientId,
      theme: n.theme,
      position: n.position,
      title: n.title,
      logo_url: n.logoUrl,
      placeholder: n.placeholder,
      accent_color: n.accentColor,
      avatar_emoji: n.avatarEmoji,
      company_name: n.companyName,
      initial_message: n.initialMessage,
      quick_questions: n.quickQuestions,
      debug: n.debug,
      auto_init: n.autoInit
    };
  },
  /**
   * Convert snake_case backend response to camelCase config
   */
  fromBackendFormat(n) {
    return {
      clientId: n.client_id,
      theme: n.theme,
      position: n.position,
      title: n.title,
      logoUrl: n.logo_url,
      placeholder: n.placeholder,
      accentColor: n.accent_color,
      avatarEmoji: n.avatar_emoji,
      companyName: n.company_name,
      initialMessage: n.initial_message,
      quickQuestions: n.quick_questions,
      debug: n.debug,
      autoInit: n.auto_init
    };
  },
  /**
   * Convert HTML attribute name to property name
   */
  attributeToProperty(n) {
    return Ka[n] || null;
  },
  /**
   * Convert property name to HTML attribute name
   */
  propertyToAttribute(n) {
    const t = Object.entries(Ka).find(([, i]) => i === n);
    return t ? t[0] : null;
  }
}, iu = [
  "bot-brewers",
  "modern",
  "dark",
  "friendly",
  "minimal",
  "elegant",
  "bold",
  "corporate",
  "light"
];
function Cl(n) {
  return iu.includes(n);
}
function aa(n) {
  return !n || typeof n != "string" ? !1 : /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(n);
}
function Di(n, e = "#6b46c1") {
  return aa(n) ? n : e;
}
function ru(n) {
  if (!aa(n)) return n;
  if (n.length === 4) {
    const e = n.slice(1);
    return "#" + e[0] + e[0] + e[1] + e[1] + e[2] + e[2];
  }
  return n;
}
function su(n) {
  const e = ru(n), t = parseInt(e.slice(1, 3), 16) / 255, i = parseInt(e.slice(3, 5), 16) / 255, r = parseInt(e.slice(5, 7), 16) / 255, s = Math.max(t, i, r), a = Math.min(t, i, r);
  let o = 0, l = 0;
  const c = (s + a) / 2;
  if (s !== a) {
    const d = s - a;
    switch (l = c > 0.5 ? d / (2 - s - a) : d / (s + a), s) {
      case t:
        o = ((i - r) / d + (i < r ? 6 : 0)) / 6;
        break;
      case i:
        o = ((r - t) / d + 2) / 6;
        break;
      case r:
        o = ((t - i) / d + 4) / 6;
        break;
    }
  }
  return { h: o * 360, s: l * 100, l: c * 100 };
}
function au(n, e, t) {
  e /= 100, t /= 100;
  const i = e * Math.min(t, 1 - t), r = (s) => {
    const a = (s + n / 30) % 12, o = t - i * Math.max(Math.min(a - 3, 9 - a, 1), -1);
    return Math.round(255 * o).toString(16).padStart(2, "0");
  };
  return `#${r(0)}${r(8)}${r(4)}`.toUpperCase();
}
function fe(n, e) {
  if (!aa(n)) return n;
  const t = su(n), i = Math.max(0, Math.min(100, t.l + e));
  return au(t.h, t.s, i);
}
class ou {
  constructor(e) {
    this.isDebugMode = e.debug ?? !1;
  }
  /**
   * Log debug information - only shows in debug mode
   */
  log(e, t, i) {
    this.isDebugMode && (i !== void 0 ? console.log(`[${e}] ${t}:`, i) : console.log(`[${e}] ${t}`));
  }
  /**
   * Log warning information - only shows in debug mode
   */
  warn(e, t, i) {
    this.isDebugMode && (i !== void 0 ? console.warn(`[${e}] ${t}:`, i) : console.warn(`[${e}] ${t}`));
  }
  /**
   * Log error information - always shows (even in production)
   */
  error(e, t, i) {
    i !== void 0 ? console.error(`[${e}] ${t}:`, i) : console.error(`[${e}] ${t}`);
  }
  /**
   * Update debug mode setting
   */
  setDebugMode(e) {
    this.isDebugMode = e;
  }
  /**
   * Check if debug mode is enabled
   */
  get isEnabled() {
    return this.isDebugMode;
  }
}
function ls(n) {
  return new ou(n);
}
function ys() {
  var n;
  try {
    return typeof process < "u" && ((n = process.env) == null ? void 0 : n.NODE_ENV) === "test" ? process.env.ENABLE_TEST_DEBUG === "true" : localStorage.getItem("ai-widget-debug") === "true" || window._aiWidgetDebug === !0 || !1;
  } catch {
    return !1;
  }
}
const Z = {
  isDebugEnabled: ys,
  log: (n, e, t) => {
    ys() && (t !== void 0 ? console.log(`[${n}] ${e}:`, t) : console.log(`[${n}] ${e}`));
  },
  warn: (n, e, t) => {
    ys() && (t !== void 0 ? console.warn(`[${n}] ${e}:`, t) : console.warn(`[${n}] ${e}`));
  },
  error: (n, e, t) => {
    t !== void 0 ? console.error(`[${n}] ${e}:`, t) : console.error(`[${n}] ${e}`);
  }
};
class Al {
  constructor() {
    this.currentId = null, this.messageMap = /* @__PURE__ */ new Map();
  }
  /**
   * Generate a new correlation ID
   */
  generate() {
    const e = Date.now(), t = Math.random().toString(36).substr(2, 9), i = `msg_${e}_${t}`;
    return this.currentId = i, i;
  }
  /**
   * Get current correlation ID
   */
  getCurrent() {
    return this.currentId || this.generateFallback();
  }
  /**
   * Set current correlation ID
   */
  setCurrent(e) {
    this.currentId = e;
  }
  /**
   * Clear current correlation ID
   */
  clear() {
    this.currentId = null;
  }
  /**
   * Store data associated with a correlation ID
   */
  setData(e, t) {
    this.messageMap.set(e, t);
  }
  /**
   * Retrieve data associated with a correlation ID
   */
  getData(e) {
    return this.messageMap.get(e);
  }
  /**
   * Remove data associated with a correlation ID
   */
  removeData(e) {
    this.messageMap.delete(e);
  }
  /**
   * Generate fallback correlation ID when none exists
   */
  generateFallback() {
    const t = `api_${Date.now()}_fallback`;
    return this.currentId = t, t;
  }
  /**
   * Clean up old correlation data (call periodically to prevent memory leaks)
   */
  cleanup(e = 3e5) {
    const t = Date.now();
    for (const [i] of this.messageMap.entries()) {
      const r = i.match(/(\d+)/);
      if (r) {
        const s = parseInt(r[1], 10);
        t - s > e && this.messageMap.delete(i);
      }
    }
  }
  /**
   * Get current memory usage stats
   */
  getStats() {
    return {
      totalEntries: this.messageMap.size,
      currentId: this.currentId
    };
  }
}
function Il() {
  return new Al();
}
const lu = new Al();
function Pi() {
  return lu;
}
class cu {
  /**
   * Validate message content and length
   */
  static validate(e, t) {
    const i = t ?? Pi().getCurrent();
    if (Z.log("MessageValidator", "validate() called", {
      correlationId: i,
      message: e,
      messageType: typeof e,
      messageLength: (e == null ? void 0 : e.length) || 0,
      isNullOrUndefined: e == null
    }), typeof e != "string") {
      const o = "Message is required and must be a string";
      return Z.log("MessageValidator", "Validation failed - invalid type", { correlationId: i, message: e, error: o }), {
        isValid: !1,
        error: o
      };
    }
    if (e.length === 0) {
      const o = "Message is too short";
      return Z.log("MessageValidator", "Validation failed - empty string", { correlationId: i, message: e, error: o }), {
        isValid: !1,
        error: o
      };
    }
    const r = e.trim();
    if (Z.log("MessageValidator", "After trimming", {
      correlationId: i,
      original: e,
      trimmed: r,
      originalLength: e.length,
      trimmedLength: r.length,
      wasWhitespaceOnly: e.length > 0 && r.length === 0
    }), r.length < dn.MIN_LENGTH) {
      const o = "Message is too short";
      return Z.log("MessageValidator", "Validation failed - too short", {
        correlationId: i,
        trimmedLength: r.length,
        minLength: dn.MIN_LENGTH,
        error: o
      }), {
        isValid: !1,
        error: o
      };
    }
    if (r.length > dn.MAX_LENGTH) {
      const o = `Message exceeds maximum length of ${dn.MAX_LENGTH} characters`;
      return Z.log("MessageValidator", "Validation failed - too long", {
        correlationId: i,
        trimmedLength: r.length,
        maxLength: dn.MAX_LENGTH,
        error: o
      }), {
        isValid: !1,
        error: o
      };
    }
    Z.log("MessageValidator", "Starting HTML sanitization", {
      correlationId: i,
      inputContent: r,
      inputLength: r.length
    });
    const s = this.sanitizeHTML(r, i);
    Z.log("MessageValidator", "HTML sanitization complete", {
      correlationId: i,
      original: r,
      sanitized: s,
      originalLength: r.length,
      sanitizedLength: s.length,
      contentRemoved: r.length !== s.length,
      contentChanged: r !== s,
      removedContent: r.length !== s.length ? {
        removed: r.replace(s, ""),
        difference: r.length - s.length
      } : null
    });
    const a = {
      isValid: !0,
      sanitizedValue: s
    };
    return Z.log("MessageValidator", "Final validation result", { correlationId: i, result: a }), a;
  }
  /**
   * Basic HTML sanitization
   */
  static sanitizeHTML(e, t) {
    const i = t ?? Pi().getCurrent();
    Z.log("MessageValidator", "sanitizeHTML() input", {
      correlationId: i,
      input: e,
      inputLength: e.length
    });
    let r = e, s = 0;
    const a = r;
    r = r.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ""), r !== a && Z.log("MessageValidator", `Step ${++s} - Removed script tags`, {
      correlationId: i,
      before: a,
      after: r,
      removed: a.length - r.length
    });
    const o = r;
    r = r.replace(/href\s*=\s*["']javascript:[^"']*["']/gi, 'href=""'), r !== o && Z.log("MessageValidator", `Step ${++s} - Removed javascript: protocol`, {
      correlationId: i,
      before: o,
      after: r,
      removed: o.length - r.length
    });
    const l = r;
    r = r.replace(/\s*on\w+\s*=\s*["'][^"']*["']/gi, ""), r !== l && Z.log("MessageValidator", `Step ${++s} - Removed event handlers:`, {
      correlationId: i,
      before: l,
      after: r,
      removed: l.length - r.length
    });
    const c = r;
    return r = r.replace(/src\s*=\s*["']data:[^"']*["']/gi, 'src=""'), r !== c && Z.log("MessageValidator", `Step ${++s} - Removed data: URLs:`, {
      correlationId: i,
      before: c,
      after: r,
      removed: c.length - r.length
    }), Z.log("MessageValidator", "sanitizeHTML() result", {
      correlationId: i,
      originalInput: e,
      finalResult: r,
      inputLength: e.length,
      resultLength: r.length,
      totalRemoved: e.length - r.length,
      wasModified: e !== r
    }), r;
  }
}
class oa {
  static validate(e, t) {
    const i = [];
    for (const r of e) {
      if (typeof r != "string") {
        Z.warn(t, `quick-questions: item skipped (type: ${typeof r})`);
        continue;
      }
      if (r.trim().length === 0) {
        Z.warn(t, "quick-questions: item skipped (empty or whitespace-only)");
        continue;
      }
      r.length > Jn.MAX_LENGTH ? (Z.warn(t, `quick-questions: item truncated to ${Jn.MAX_LENGTH} chars`), i.push(r.slice(0, Jn.MAX_LENGTH))) : i.push(r);
    }
    return i.length > Jn.MAX_COUNT ? (Z.warn(t, `quick-questions: array capped at ${Jn.MAX_COUNT} items (${i.length} provided)`), i.slice(0, Jn.MAX_COUNT)) : i;
  }
}
class Ml {
  /**
   * Validate client ID format
   */
  static validate(e) {
    return !e || typeof e != "string" ? {
      isValid: !1,
      error: "Client ID is required and must be a string"
    } : /^[a-zA-Z0-9_-]+$/.test(e) ? e.length < 3 || e.length > 50 ? {
      isValid: !1,
      error: "Client ID must be between 3 and 50 characters"
    } : {
      isValid: !0,
      sanitizedValue: e
    } : {
      isValid: !1,
      error: "Client ID can only contain letters, numbers, hyphens, and underscores"
    };
  }
}
var bi, wi, yi, xi, _i, ki, Si, Ti, Ei, Ci, Ai, Ii, Mi;
class Rl {
  constructor() {
    M(this, bi);
    M(this, wi);
    M(this, yi);
    M(this, xi);
    M(this, _i);
    M(this, ki);
    M(this, Si);
    M(this, Ti);
    M(this, Ei);
    M(this, Ci);
    M(this, Ai);
    M(this, Ii);
    M(this, Mi);
    E(this, bi, /* @__PURE__ */ U("")), E(this, wi, /* @__PURE__ */ U(we(st.theme))), E(this, yi, /* @__PURE__ */ U(we(st.position))), E(this, xi, /* @__PURE__ */ U(we(st.title))), E(this, _i, /* @__PURE__ */ U(we(st.logoUrl))), E(this, ki, /* @__PURE__ */ U(we(st.placeholder))), E(this, Si, /* @__PURE__ */ U(we(st.accentColor))), E(this, Ti, /* @__PURE__ */ U(we(st.avatarEmoji))), E(this, Ei, /* @__PURE__ */ U(we(st.companyName))), E(this, Ci, /* @__PURE__ */ U(we(st.initialMessage))), E(this, Ai, /* @__PURE__ */ U(we(st.quickQuestions))), E(this, Ii, /* @__PURE__ */ U(we(st.voiceInput))), E(this, Mi, /* @__PURE__ */ U("default"));
  }
  get clientId() {
    return v(f(this, bi));
  }
  set clientId(e) {
    P(f(this, bi), e, !0);
  }
  get theme() {
    return v(f(this, wi));
  }
  set theme(e) {
    P(f(this, wi), e, !0);
  }
  get position() {
    return v(f(this, yi));
  }
  set position(e) {
    P(f(this, yi), e, !0);
  }
  get title() {
    return v(f(this, xi));
  }
  set title(e) {
    P(f(this, xi), e, !0);
  }
  get logoUrl() {
    return v(f(this, _i));
  }
  set logoUrl(e) {
    P(f(this, _i), e, !0);
  }
  get placeholder() {
    return v(f(this, ki));
  }
  set placeholder(e) {
    P(f(this, ki), e, !0);
  }
  get accentColor() {
    return v(f(this, Si));
  }
  set accentColor(e) {
    P(f(this, Si), e, !0);
  }
  get avatarEmoji() {
    return v(f(this, Ti));
  }
  set avatarEmoji(e) {
    P(f(this, Ti), e, !0);
  }
  get companyName() {
    return v(f(this, Ei));
  }
  set companyName(e) {
    P(f(this, Ei), e, !0);
  }
  get initialMessage() {
    return v(f(this, Ci));
  }
  set initialMessage(e) {
    P(f(this, Ci), e, !0);
  }
  get quickQuestions() {
    return v(f(this, Ai));
  }
  set quickQuestions(e) {
    P(f(this, Ai), e, !0);
  }
  get voiceInput() {
    return v(f(this, Ii));
  }
  set voiceInput(e) {
    P(f(this, Ii), e, !0);
  }
  get titleSource() {
    return v(f(this, Mi));
  }
  set titleSource(e) {
    P(f(this, Mi), e, !0);
  }
  updateConfig(e, t = "default") {
    if (e.title !== void 0) {
      this.setTitle(e.title, t);
      const { title: i, ...r } = e;
      Object.assign(this, r);
    } else
      Object.assign(this, e);
  }
  /**
   * Set title with priority enforcement
   * Priority: user > backend > default
   */
  setTitle(e, t) {
    const i = ["user", "backend", "default"], r = i.indexOf(this.titleSource);
    i.indexOf(t) <= r && (this.title = e, this.titleSource = t);
  }
  /**
   * Set user-configured title (highest priority)
   */
  setUserTitle(e) {
    this.setTitle(e, "user");
  }
  /**
   * Set backend-provided title (medium priority)
   */
  setBackendTitle(e) {
    this.setTitle(e, "backend");
  }
  /**
   * Legacy method for backwards compatibility - now uses backend priority
   */
  updateTitle(e) {
    this.setBackendTitle(e);
  }
  /**
   * Set custom quick questions
   */
  setQuickQuestions(e) {
    this.quickQuestions = e;
  }
  /**
   * Set backend-provided initial message (only if not user-configured).
   * Respects priority: client attribute > backend message > default.
   */
  setBackendInitialMessage(e) {
    this.initialMessage === void 0 && (this.initialMessage = e);
  }
  loadFromAttributes(e) {
    const t = this.parseElementAttributes(e);
    this.updateConfig(t, "user"), this.applyTheme(e);
  }
  /**
   * Parse HTML element attributes into configuration object
   * Reuses unified configuration attribute mapping logic
   */
  parseElementAttributes(e) {
    const t = {}, i = e.getAttributeNames();
    for (const r of i) {
      const s = El.attributeToProperty(r);
      if (!s) continue;
      const a = e.getAttribute(r);
      if (s === "initialMessage") {
        t.initialMessage = a === "" ? void 0 : a || void 0;
        continue;
      }
      if (a)
        switch (s) {
          case "clientId":
          case "title":
          case "logoUrl":
          case "placeholder":
          case "avatarEmoji":
            t[s] = a;
            break;
          case "accentColor":
            t.accentColor = Di(a, this.accentColor);
            break;
          case "theme":
            Cl(a) && (t.theme = a);
            break;
          case "position":
            (a === "bottom-left" || a === "bottom-right") && (t.position = a);
            break;
          case "companyName":
            t.companyName = a, e.hasAttribute("title") || (t.title = `${a} Assistant`);
            break;
          case "quickQuestions":
            try {
              const o = JSON.parse(a);
              Array.isArray(o) && (t.quickQuestions = oa.validate(o, "ConfigStore"));
            } catch {
            }
            break;
          case "voiceInput":
            t.voiceInput = a === "true";
            break;
        }
    }
    return t;
  }
  get cssVariables() {
    const e = {};
    return this.accentColor && (e["--widget-primary"] = this.accentColor, e["--widget-primary-hover"] = fe(this.accentColor, -20), e["--widget-primary-light"] = fe(this.accentColor, 20), e["--widget-primary-dark"] = fe(this.accentColor, -30), e["--widget-gradient"] = `linear-gradient(135deg, ${this.accentColor} 0%, ${fe(this.accentColor, 20)} 100%)`, e["--widget-gradient-hover"] = `linear-gradient(135deg, ${fe(this.accentColor, -20)} 0%, ${this.accentColor} 100%)`), e;
  }
  applyTheme(e) {
    e.setAttribute("data-theme", this.theme);
    const t = this.cssVariables;
    for (const [i, r] of Object.entries(t))
      e.style.setProperty(i, r);
  }
  // Remove duplicate adjustColor method - using shared utility from color.ts
}
bi = new WeakMap(), wi = new WeakMap(), yi = new WeakMap(), xi = new WeakMap(), _i = new WeakMap(), ki = new WeakMap(), Si = new WeakMap(), Ti = new WeakMap(), Ei = new WeakMap(), Ci = new WeakMap(), Ai = new WeakMap(), Ii = new WeakMap(), Mi = new WeakMap();
function Ll() {
  return new Rl();
}
const ft = new Rl(), Ol = "data:image/webp;base64,UklGRugJAABXRUJQVlA4WAoAAAAQAAAAfwAAfwAAQUxQSFACAAABkEXbtik59777XleN2LZt27Zt27ZtW99tuzuF2LbtpKpGp3BivHNujIiYAPZ3d2OLGUu7p5aXUmc/AMCFdkJWtWzwQVcXLqdUZ+GjtzPIqSt84jAp8UWfsppLaemnrJUS6/spA5iUM9/72O2McmKdnB9ydmCS5h2vv3e1oyIrxjKdBjiZnklcDQOIFjLTogFiValFyU6Eyk4Jll6Q7ESI9EJlpwTLgxu+pJemBQDEGDUvwxc0KqQYig/fGmf+TJPJZIqP8LkP8MQ/LHavyfz5O4eUSUSFoWNcAqB0WnsmooDXMANiczWOzjjRDqhf9RHI1OWA3T1eoFLGAH7PIAVTzQQCwFYNUaJDQOLBRGj4CCCyJ5okl6iwGrG0ASqdpZAoW8iAGUgSHaMj0oAj81M6LifFUc5Jx8tcOJoAnfa8CFRV1CXElkNVVX2lHuYTGnKQEFd8SKjviJQ6qngGSD5WVDcZrwLRZ9PpZSqQPVgnmj9de4Q+kp2gy0fVySm6vL+VTkrv1C8/p2WXyEKXn074erpWKfpg1ZxUJZRiOhWTifKMEnphSlvrC9srOyUOm+2VtaVgOvbKnjNHcxcdjto5c+UwMt3XBzrtORnKRpTkxVHIIbsMj+i4nhKHYS8d/ioOvpSO2RwHq+6iwlmWITUeoCJQw8LaEvG6OkOrBdCwTeBh+e5TcC4Dw9zcge9BeYaat3iE7W51hr3ccVym4gx/qqUv8TyanIRRqBRdcQ3Hxbm5OCOSp2owaX2wvv2Xja6ahDNSuRCKjoXg7L//f54CVlA4IHIHAACwKACdASqAAIAAPlEkkEWjoiGTST0YOAUEoA1fIQfqvZTa57fyGW9PeP90OkinbzF+UP87/Q/yk+AH9V9mfmC/p5/hPzA9zP1a+YD+Wf13/Xf6L2M/2c9yPoAfrV1iXoMfwf+x+mH+2HwSftD+0/wFfrd/7+sAs5dANxsoF2Qp/XuKnjE8Gvwf1Gf6x/wvUPz4PRP7B/AP/Mf6v/0OuF+5Hsi/ryxHk0B48YBTRtdB5WCf3dKxN+Z3e0Bap21U4g0QNgmgt9PszIvWmrmvDr/zjzLxO1+KHiMxSwKbP/CmfQapmXy8GPwlWwZzWyDJKSzuSxG3oImZ+aAV5K6ukJTpOOPfUdUnNUrs2CTonYo1/mdtQnYigkahltolBX+gz3dswlpDn7EPz3ifxMbj6L/yfEgMvWzgisK1N1dy/5lC7Zwr0NTM81DtakR50uAAAP7+pTZc//8cSrMe16Db1wMrZOlPVcrZyaAcPVhS95237FTuuF4m977CEVAwBMUJwFRGDoEKQipeVQdPqKdnp9YwI89N2eTzoo27BX3l7acdt+NGQnnZqQnzMeC4MS7ryzaHFab9GApUauHd9b9i37aLi79SW9CeZWyZGfdtJaSaE1b467r48k/kEszB3I0cGm0JQq+Hlbn+SCl5MG63ApAqG8Lud8FVHMrY5xH0PC4ah5djicc1c/XvyZJAVH+KbeG19UFXrf8X1ffTOuOjvVCn8bFf8T5gUAZ5rOo4daVYTbhMt1efaL2SetLP+XRxxDPNYwYHbD7K5eOKdAFOQ+mG4MKDXvQJBAC50HrqnKo9O405Q8Z8O/+ZRXeFiV6vKdDVGdVUluUVIq3t7wryRVmKAwiDOc1qi9TnXHTUWfXCeCFNC7Y5EPmc7li11DywVw84gE+NnXo/p8YDJM4SBeFEznUonSd2j9ie/azILWu7JVZfb+zlEWKboli0MsIBUYOS3KQsZ7779L9ogSjLn4n49yfimFO1AYn3qOz+HlTle3rPzLols3XLqkvp5yFLLr31gT+lHXXiEAXgAFn2JWJepcnEq0CfPs9nhwmhMoh4Am5PzzVXbe1RK/RYnKIoEz5YEv3yEl7PEw3+g3+Nvdx7dXV+61BaRRFYdprsKFb2Q9og3it+vCd4r4npE3l0a6SuBklxIiRQ7McizSDzhUgm2joVcDjjjFjF3Rp+1asiMHqJ6Tlz46aRB+F/FvPJq24HNEM+vKuhmpOdKnC3EWm8UT334DI8ItBX/MMxgirhjjGH2XxvjVEGwOymA93sFadiIimsN+u6QrXwl12/vMeuYr33Tr8mJEdp6tRVYZFXxEfc41n0meSi2ibjmu0wBtu1iqjnRan5xKMGDonKLqcAFzGILwkdHc3/Yewg6OY4zVMpmIvq2FIVieitjQbY8LW9nsKes5pOGr7tQQ6MqWAVW2eBIPJl8PmShHRgYzrjD9eWeQ6uINH+sp1XeWhsy1c64ummq+LnJCaV7HoqnQKiRjS1LFyxFPyvzKOpb03K1Z/Fj8v8Z66/SwiLAt+EtdhfrgPWxb69TZSFv+srYe/kve4aU6WzJGW7qUid4BiKSiHlvbo3MJFq2c/5PYveMTFX8qUtyBRDX5pevb//fG/6xm2ymF0XRY4/lyUprmi0po9xoz5IzHz368qsmPl+g3lCG29YWnJGFX/HviGuKm5o1ZdOTiPu/V6G20ih+v8fMnUDhJ6T5D530RgLx8n6Ya4xMDvuVlf4/6tmAJne81CE+mV00oIXwEoPYBt8sEvGb6bkPBm+er+sYRy0WDSKdt7Jb/wxos7jYmqiHy96cp6mmRa7nARocgS+eOzmcRhceaUf00neRyBWf2pvNc/VOnUir2hvXD1I8sZ9WsZ2cko1O1qM9SQX5LmBk+VE6lDUfMB8NuaZrMFye30QJXYrRnMDhPHRQMYJeP39qXPPhTCbeK56GkFc/vBXz4/ByRaOYorLlSw62qs4CF+GguMponNWuIIOuxmMgkZXOg9KeKzHzK+QfzxtQDPnlI0vTocV6YvIQoqxevmEdQ+ZJ/tYfBkXGNEuH12Wyv/+Dmmj/vJ6o3vP7gPfWbMvDH445D3Nw/lCYSNTKJ7ZJxwVDNbcLSKYgGgNigtMh/erRSzs7AY7IJ5R2y/i0uN/YcWF+SdBga8mdvUVlPg8adxHMXRo6hcgg3SL97JJCLeOmQGgt0Pj9EFVKXA/FZH0lQ7WuU1WnnwhnBX97rNb+77R/HstinK6Vy4/ZE3F/r3s6qEPQsJoEqArQO1BLIKS6TucRxCwFIP/cUvW49Onm283s/qdn4YhPbidHpkFW1rd6nkG+MwD1qe9h80gBM0MJx0cR5e7G2dVtUNurZqIXpXx2jABNlADHjbqBYcAGR93bylmP89clRe0pLc78uD/r4yf8vygxwrqooTDCnFh045zBwvryQ7xk1M3D7sYJAHyU6H74HI4eL/iITAjvoT8f+6klN4/114TfGrAYuX+b89XZEdxQSqx+bsya/c9Udon6nBJcRIqCfYPh7JysWSPhAAAAAAAAAAA", du = Ol, uu = Ol;
var gu = /* @__PURE__ */ ee('<img alt="Chat" class="button-logo svelte-bkcus6"/>'), fu = /* @__PURE__ */ ra('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-bkcus6"><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor" class="svelte-bkcus6"></path></svg>'), hu = /* @__PURE__ */ ee('<span class="unread-indicator svelte-bkcus6"></span>'), pu = /* @__PURE__ */ ee("<button><!> <!></button>");
const mu = {
  hash: "svelte-bkcus6",
  code: `.floating-button.svelte-bkcus6 {width:64px;height:64px;border-radius:var(--widget-radius-full);background:transparent;
    /* Bot Gold ring border */border:3px solid var(--widget-accent);color:var(--widget-text);cursor:pointer;display:flex;align-items:center;justify-content:center;
    /* Enhancement 3: Static shadow only (glow moved to ::after) */box-shadow:var(--widget-shadow-lg);
    /* Spring-based transition */transition:transform 0.2s var(--widget-ease-spring),
                border-color 0.2s ease;position:relative;
    animation: messageFadeIn 0.3s var(--widget-ease-out-expo);padding:0;overflow:visible; /* Allow pseudo-elements to show */}

  /* Enhancement 1: Entrance attention pulse */.floating-button.svelte-bkcus6::before {content:'';position:absolute;inset:0;border-radius:inherit;border:2px solid var(--widget-accent);
    animation: svelte-bkcus6-entrancePulse 0.8s var(--widget-ease-out-expo) forwards;pointer-events:none;}

  @keyframes svelte-bkcus6-entrancePulse {
    0% {
      transform: scale(1);
      opacity: 0.6;
    }
    100% {
      transform: scale(1.8);
      opacity: 0;
    }
  }

  /* Enhancement 3: Gold glow as pseudo-element for GPU-accelerated transitions */.floating-button.svelte-bkcus6::after {content:'';position:absolute;inset:-4px;border-radius:inherit;background:transparent;box-shadow:0 0 20px rgba(244, 169, 50, 0.5);opacity:0.5;transition:opacity 0.2s var(--widget-ease-spring);pointer-events:none;z-index:-1;}.floating-button.svelte-bkcus6:hover::after {opacity:1;}.floating-button.svelte-bkcus6:hover {transform:translateY(-3px);border-color:var(--widget-accent-light);}.floating-button.svelte-bkcus6:active {transform:translateY(-1px) scale(0.97);transition-duration:0.1s;}

  /* Focus-visible for accessibility */.floating-button.svelte-bkcus6:focus-visible {outline:2px solid var(--widget-accent);outline-offset:3px;}.floating-button.svelte-bkcus6:focus-visible::after {opacity:1;box-shadow:0 0 0 4px rgba(244, 169, 50, 0.25),
                0 0 20px rgba(244, 169, 50, 0.5);}.floating-button.open.svelte-bkcus6 {
    /* When open, use blue border to match header */background:var(--widget-primary);border-color:var(--widget-primary);}.floating-button.open.svelte-bkcus6::after {box-shadow:0 0 20px rgba(var(--widget-primary-rgb), 0.5);}.floating-button.svelte-bkcus6 svg:where(.svelte-bkcus6) {width:24px;height:24px;transition:transform 0.25s var(--widget-ease-spring);position:relative;z-index:1;
    /* Subtle drop shadow on icon */filter:drop-shadow(0 1px 2px rgba(0, 0, 0, 0.15));}.floating-button.svelte-bkcus6 .button-logo:where(.svelte-bkcus6) {
    /* Logo fills most of the button */width:100%;height:100%;border-radius:var(--widget-radius-full);object-fit:cover;transition:transform 0.25s var(--widget-ease-spring);position:relative;z-index:1;}.floating-button.open.svelte-bkcus6 svg:where(.svelte-bkcus6) {transform:rotate(90deg);}.unread-indicator.svelte-bkcus6 {position:absolute;top:-2px;right:-2px;width:16px;height:16px;background:var(--widget-accent);border-radius:var(--widget-radius-full);border:2px solid var(--widget-background);
    /* Bot Gold glow effect */box-shadow:0 0 8px rgba(244, 169, 50, 0.5);
    animation: svelte-bkcus6-unreadPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;z-index:2;}

  @keyframes svelte-bkcus6-unreadPulse {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.7;
      transform: scale(1.05);
    }
  }

  /* Mobile: Fixed positioning for floating button */
  /* Enhancement 4: Reduced from 60px to 56px */
  @media (max-width: 767px) {.floating-button.svelte-bkcus6 {width:56px;height:56px;position:fixed;bottom:20px;right:20px;z-index:var(--widget-z-fixed);}.floating-button.svelte-bkcus6 svg:where(.svelte-bkcus6) {width:24px;height:24px;}.floating-button.svelte-bkcus6 .button-logo:where(.svelte-bkcus6) {width:100%;height:100%;}
  }

  /* Accessibility: Respect reduced motion preference */
  @media (prefers-reduced-motion: reduce) {.floating-button.svelte-bkcus6::before {
      animation: none;}.floating-button.svelte-bkcus6::after {transition:none;opacity:0.7;}.floating-button.svelte-bkcus6 {
      animation: none;}
  }`
};
function Nl(n, e) {
  xt(e, !0), Ft(n, mu);
  let t = Q(e, "onclick", 7), i = Q(e, "ui", 7, mn);
  const r = /* @__PURE__ */ me(() => i().isOpen), s = /* @__PURE__ */ me(() => i().hasUnreadMessages);
  function a() {
    var b;
    (b = t()) == null || b();
  }
  var o = {
    get onclick() {
      return t();
    },
    set onclick(b) {
      t(b), j();
    },
    get ui() {
      return i();
    },
    set ui(b = mn) {
      i(b), j();
    }
  }, l = pu();
  let c;
  l.__click = a;
  var d = se(l);
  {
    var u = (b) => {
      var m = gu();
      Ye(() => Fe(m, "src", du)), F(b, m);
    }, h = (b) => {
      var m = fu();
      F(b, m);
    };
    ve(d, (b) => {
      v(r) ? b(h, !1) : b(u);
    });
  }
  var p = ae(d, 2);
  {
    var k = (b) => {
      var m = hu();
      F(b, m);
    };
    ve(p, (b) => {
      v(s) && !v(r) && b(k);
    });
  }
  return re(l), Ye(() => {
    c = ss(l, 1, "floating-button svelte-bkcus6", null, c, { open: v(r) }), Fe(l, "aria-label", v(r) ? "Close chat" : "Open chat");
  }), F(n, l), _t(o);
}
Bn(["click"]);
Ht(Nl, { onclick: {}, ui: {} }, [], [], !0);
class rt extends Error {
  constructor(e, t, i = !1) {
    super(e), this.name = "ChatWidgetError", this.context = t, this.timestamp = /* @__PURE__ */ new Date(), this.isRetryable = i, Error.captureStackTrace && Error.captureStackTrace(this, rt);
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      context: this.context,
      timestamp: this.timestamp.toISOString(),
      isRetryable: this.isRetryable,
      stack: this.stack
    };
  }
}
class ti extends rt {
  constructor(e, t, i, r) {
    super(e, { ...r, statusCode: t, endpoint: i }, !0), this.name = "NetworkError", this.statusCode = t, this.endpoint = i;
  }
}
class Dl extends rt {
  constructor(e, t, i, r, s) {
    super(e, { ...s, wsUrl: t, closeCode: i, closeReason: r }, !0), this.name = "WebSocketError", this.wsUrl = t, this.closeCode = i, this.closeReason = r;
  }
}
class nr extends rt {
  constructor(e, t, i, r, s) {
    super(e, { ...s, field: t, value: i, expectedType: r }, !1), this.name = "ValidationError", this.field = t, this.value = i, this.expectedType = r;
  }
}
class Pl extends rt {
  constructor(e, t, i, r) {
    super(e, { ...r, configKey: t, configValue: i }, !1), this.name = "ConfigurationError", this.configKey = t, this.configValue = i;
  }
}
class zl extends rt {
  constructor(e, t, i, r) {
    super(e, { ...r, clientId: t, statusCode: i }, !1), this.name = "AuthenticationError", this.clientId = t, this.statusCode = i;
  }
}
class ni extends rt {
  constructor(e, t, i, r) {
    super(e, { ...r, retryAfter: t, limit: i }, !0), this.name = "RateLimitError", this.retryAfter = t, this.limit = i;
  }
}
class $l extends rt {
  constructor(e, t, i, r) {
    super(e, { ...r, storageType: t, operation: i }, !0), this.name = "StorageError", this.storageType = t, this.operation = i;
  }
}
class ql extends rt {
  constructor(e, t, i, r) {
    super(e, { ...r, timeout: t, operation: i }, !0), this.name = "TimeoutError", this.timeout = t, this.operation = i;
  }
}
function Ja(n) {
  return n instanceof rt ? n.isRetryable : !!(n instanceof TypeError && n.message.includes("fetch"));
}
function vu(n) {
  return n instanceof rt ? {
    name: n.name,
    message: n.message,
    context: n.context,
    timestamp: n.timestamp,
    isRetryable: n.isRetryable
  } : n instanceof Error ? {
    name: n.name,
    message: n.message,
    stack: n.stack
  } : {
    error: String(n),
    type: typeof n
  };
}
function bu(n) {
  return n instanceof ti ? n.statusCode === 404 ? "Service temporarily unavailable. Please try again later." : n.statusCode === 429 || n instanceof ni ? "Too many requests. Please wait a moment and try again." : n.statusCode && n.statusCode >= 500 ? "Server error. Please try again in a few moments." : n.statusCode && (n.statusCode === 400 || n.statusCode === 401 || n.statusCode === 403) ? n.message : "Unable to connect to the server. Please check your internet connection." : n instanceof Dl ? "Connection lost. Attempting to reconnect..." : n instanceof zl ? "Access denied. Please check your configuration." : n instanceof nr ? n.message : n instanceof Pl ? "Widget configuration error. Please contact support." : n instanceof ql ? "Request timed out. Please try again." : n instanceof $l ? "Unable to save data. Please check your browser settings." : "Something went wrong. Please try again.";
}
class ir {
  /**
   * Process and categorize errors using custom error classes
   */
  static handle(e, t) {
    const i = vu(e);
    let r;
    return e instanceof ti ? r = "NETWORK_ERROR" : e instanceof Dl ? r = "WEBSOCKET_ERROR" : e instanceof nr ? r = "VALIDATION_ERROR" : e instanceof Pl ? r = "CONFIGURATION_ERROR" : e instanceof zl ? r = "AUTHENTICATION_ERROR" : e instanceof ni ? r = "RATE_LIMIT_ERROR" : e instanceof $l ? r = "STORAGE_ERROR" : e instanceof ql ? r = "TIMEOUT_ERROR" : e instanceof rt ? r = "WIDGET_ERROR" : r = "UNKNOWN_ERROR", {
      message: bu(e),
      code: r,
      isUserFacing: !0,
      shouldRetry: Ja(e),
      context: {
        ...t,
        metadata: {
          ...t.metadata,
          errorDetails: i
        }
      }
    };
  }
  /**
   * Sanitize error messages to prevent information leakage
   */
  static sanitizeErrorMessage(e) {
    return e.replace(/\/[^\s]+/g, "[path]").replace(/https?:\/\/[^\s]+/g, "[url]").replace(/[a-zA-Z0-9]{20,}/g, "[token]").substring(0, 200);
  }
  /**
   * Check if error should be retried
   */
  static shouldRetry(e) {
    return e && typeof e == "object" && "shouldRetry" in e ? e.shouldRetry : Ja(e);
  }
  /**
   * Get user-friendly error message
   */
  static getUserMessage(e) {
    return e.isUserFacing ? e.message : "Something went wrong. Please try again.";
  }
  /**
   * Create error for logging/reporting
   */
  static createLogEntry(e) {
    return {
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      code: e.code,
      message: e.message,
      context: e.context,
      userAgent: typeof navigator < "u" ? navigator.userAgent : "unknown",
      url: typeof window < "u" ? window.location.href : "unknown"
    };
  }
}
const wu = "https://ai-gateway-service-staging-639717727892.us-east4.run.app";
class Us {
  // Production URL configured via VITE_API_BASE_URL environment variable
  // Falls back to DEFAULT_GATEWAY_URL if not set
  /**
   * Resolve API and WebSocket URLs based on client ID and environment
   */
  static resolveUrls(e, t = {}) {
    const i = Ml.validate(e);
    if (!i.isValid)
      throw new Error(`Invalid client ID for URL resolution: ${i.error}`);
    const r = i.sanitizedValue;
    return this.isDevelopmentEnvironment(t.environment) ? this.resolveDevelopmentUrls(r) : this.resolveProductionUrls(r);
  }
  /**
   * Resolve URLs for development environment
   */
  static resolveDevelopmentUrls(e) {
    return {
      apiUrl: `/api/v1/widget/${e}`,
      wsUrl: `ws://localhost:8000/api/v1/communication/${e}/ws`
    };
  }
  /**
   * Resolve URLs for production environment
   */
  static resolveProductionUrls(e) {
    const t = wu, i = this.isLocalhostUrl(t) ? t : this.ensureHttps(t);
    return {
      apiUrl: this.buildApiUrl(i, e),
      wsUrl: this.buildWsUrl(i, e)
    };
  }
  /**
   * Determine if we're in development environment
   */
  static isDevelopmentEnvironment(e) {
    return e ? e === "development" : !1;
  }
  /**
   * Ensure URL uses HTTPS protocol for production
   */
  static ensureHttps(e) {
    return this.isLocalhostUrl(e) ? e : e.startsWith("http://") ? e.replace("http://", "https://") : e.startsWith("https://") ? e : `https://${e}`;
  }
  /**
   * Build API URL by properly appending path to base URL
   */
  static buildApiUrl(e, t) {
    return this.buildUrlWithPath(e, `/api/v1/widget/${t}`);
  }
  /**
   * Build WebSocket URL by properly appending path to base URL and converting protocol
   */
  static buildWsUrl(e, t) {
    const i = this.buildUrlWithPath(e, `/api/v1/communication/${t}/ws`);
    return this.convertToWebSocket(i);
  }
  /**
   * Safely append a path to a base URL, handling query parameters and fragments correctly
   */
  static buildUrlWithPath(e, t) {
    try {
      const i = new URL(e);
      return i.pathname = (i.pathname === "/" ? "" : i.pathname) + t, i.toString();
    } catch {
      const r = e.endsWith("/") ? "" : "/";
      return e + r + t.substring(1);
    }
  }
  /**
   * Convert HTTP/HTTPS URL to WS/WSS URL
   */
  static convertToWebSocket(e) {
    try {
      const t = new URL(e);
      return t.protocol === "https:" ? t.protocol = "wss:" : t.protocol === "http:" && (t.protocol = "ws:"), t.toString();
    } catch {
      return e.replace("https://", "wss://").replace("http://", "ws://");
    }
  }
  /**
   * Check if URL points to localhost
   */
  static isLocalhostUrl(e) {
    try {
      const t = new URL(e);
      return ["localhost", "127.0.0.1", "::1"].includes(t.hostname);
    } catch {
      return e.includes("localhost") || e.includes("127.0.0.1");
    }
  }
}
class Ul {
  constructor(e) {
    try {
      const t = window, i = t.AIChat || t.ChatWidget || {}, r = e ? this.parseElementAttributes(e) : {}, s = {
        ...st,
        ...i,
        ...r
      };
      if ((i.apiUrl || i.wsUrl) && console.warn(
        `[Assistant Widget] Deprecation Warning: window.AIChat.apiUrl and window.AIChat.wsUrl are no longer supported.
URL configuration is now handled at build time via VITE_API_BASE_URL environment variable.
For local development: npm run build:local
For production: npm run build (uses default staging gateway)`
      ), !s.clientId)
        throw new Error("Widget configuration missing: clientId is required");
      const a = Ml.validate(s.clientId);
      if (!a.isValid)
        throw new Error(`Invalid client ID: ${a.error}`);
      const o = Us.resolveUrls(a.sanitizedValue);
      this.config = {
        ...s,
        clientId: a.sanitizedValue,
        ...o
      };
    } catch (t) {
      const i = ir.handle(t, {
        component: "ConfigManager",
        action: "constructor"
      });
      throw new Error(i.message);
    }
  }
  /**
   * Parse HTML element attributes into configuration object
   * Uses unified configuration attribute mapping
   */
  parseElementAttributes(e) {
    const t = {}, i = e.getAttributeNames();
    for (const r of i) {
      const s = El.attributeToProperty(r);
      if (!s) continue;
      const a = e.getAttribute(r);
      if (a)
        switch (s) {
          case "clientId":
          case "title":
          case "logoUrl":
          case "placeholder":
          case "accentColor":
          case "avatarEmoji":
            t[s] = a;
            break;
          case "theme":
            Cl(a) && (t.theme = a);
            break;
          case "position":
            (a === "bottom-left" || a === "bottom-right") && (t.position = a);
            break;
          case "debug":
          case "autoInit":
            t[s] = a === "true" || a === "";
            break;
          case "companyName":
            t.companyName = a, e.hasAttribute("title") || (t.title = `${a} Assistant`);
            break;
        }
    }
    return t;
  }
  get clientId() {
    return this.config.clientId;
  }
  get apiUrl() {
    return this.config.apiUrl;
  }
  get wsUrl() {
    return this.config.wsUrl;
  }
  get debug() {
    return this.config.debug;
  }
  get position() {
    return this.config.position;
  }
  get theme() {
    return this.config.theme;
  }
  get title() {
    return this.config.title;
  }
  get logoUrl() {
    return this.config.logoUrl;
  }
  get autoInit() {
    return this.config.autoInit;
  }
  getAll() {
    return { ...this.config };
  }
}
const zi = /* @__PURE__ */ new Map();
let ur = !1;
function yu() {
  try {
    const n = "__storage_test__";
    return localStorage.setItem(n, n), localStorage.removeItem(n), !0;
  } catch {
    return !1;
  }
}
ur = !yu();
function xu(n) {
  try {
    return ur ? zi.get(n) ?? null : localStorage.getItem(n);
  } catch {
    return zi.get(n) ?? null;
  }
}
function _u(n, e) {
  try {
    return ur ? (zi.set(n, e), !0) : (localStorage.setItem(n, e), !0);
  } catch {
    return zi.set(n, e), ur = !0, !1;
  }
}
function ku(n) {
  try {
    if (ur) {
      zi.delete(n);
      return;
    }
    localStorage.removeItem(n);
  } catch {
    zi.delete(n);
  }
}
const vt = class vt {
  /**
   * @param storageAdapter - Optional storage adapter for testing (defaults to localStorage via safe utils)
   */
  constructor(e) {
    this.storageAdapter = e, this.visitorId = this.getOrCreateVisitorId();
  }
  getOrCreateVisitorId() {
    var t;
    let e = this.getItem(vt.VISITOR_ID_KEY);
    return e || (e = this.generateVisitorId(), this.setItem(vt.VISITOR_ID_KEY, e), (t = window.AIChat) != null && t.debug && Z.log("ChatWidget", "Created new visitor", e)), e;
  }
  /**
   * Internal storage access methods that use adapter if available
   */
  getItem(e) {
    return this.storageAdapter ? this.storageAdapter.getItem(e) : xu(e);
  }
  setItem(e, t) {
    this.storageAdapter ? this.storageAdapter.setItem(e, t) : _u(e, t);
  }
  removeItem(e) {
    this.storageAdapter ? this.storageAdapter.removeItem(e) : ku(e);
  }
  /**
   * Generate RFC 4122 compliant UUID v4 for visitor identification
   */
  generateVisitorId() {
    return crypto.randomUUID();
  }
  getVisitorId() {
    return this.visitorId;
  }
  /**
   * Store session ID for conversation continuity
   */
  saveSessionId(e) {
    const t = this.getSessionHistory();
    t.push({
      id: e,
      timestamp: Date.now(),
      active: !0
    });
    const i = t.slice(-10);
    this.setItem(
      vt.SESSION_HISTORY_KEY,
      JSON.stringify(i)
    );
  }
  getSessionHistory() {
    const e = this.getItem(vt.SESSION_HISTORY_KEY);
    return e ? JSON.parse(e) : [];
  }
  getLastActiveSession() {
    const t = this.getSessionHistory().filter(
      (i) => i.active && Date.now() - i.timestamp < Te.SESSION_TIMEOUT
    );
    return t.length > 0 ? t[t.length - 1].id : null;
  }
  /**
   * Mark a session as inactive when it ends
   */
  markSessionInactive(e) {
    const i = this.getSessionHistory().map(
      (r) => r.id === e ? { ...r, active: !1 } : r
    );
    this.setItem(
      vt.SESSION_HISTORY_KEY,
      JSON.stringify(i)
    );
  }
  /**
   * Clear visitor data for GDPR compliance
   */
  clearVisitorData() {
    this.removeItem(vt.VISITOR_ID_KEY), this.removeItem(vt.SESSION_HISTORY_KEY), this.visitorId = this.generateVisitorId();
  }
};
vt.VISITOR_ID_KEY = Za.VISITOR_ID, vt.SESSION_HISTORY_KEY = Za.SESSIONS;
let jr = vt;
class Ki {
  /**
   * Get API endpoint URL with base path resolved
   */
  static getApiUrl(e, t) {
    const { apiUrl: i } = Us.resolveUrls(t.clientId, t.options);
    switch (e) {
      case "init":
        return `${i}/init`;
      case "chat":
        return `${i}/chat`;
      case "sessionHealth":
        if (!t.sessionId)
          throw new Error("sessionId required for sessionHealth endpoint");
        return `${i}/session/${t.sessionId}/health`;
      default:
        throw new Error(`Unknown API endpoint: ${e}`);
    }
  }
  /**
   * Get WebSocket URL with query parameters
   */
  static getWebSocketUrl(e) {
    const { wsUrl: t } = Us.resolveUrls(e.clientId, e.options), i = new URLSearchParams({
      session_id: e.sessionId
    });
    return e.visitorId && i.append("visitor_id", e.visitorId), `${t}?${i}`;
  }
}
var ue = /* @__PURE__ */ ((n) => (n.DISCONNECTED = "disconnected", n.CONNECTING = "connecting", n.CONNECTED = "connected", n.ERROR = "error", n))(ue || {});
class Fl {
  /**
   * @param correlationService Per-instance CorrelationService for multi-widget isolation.
   *   Defaults to the module singleton. Omitting this parameter breaks state isolation
   *   when multiple widget instances exist on the same page.
   */
  constructor(e, t, i = Pi()) {
    this.ws = null, this.sessionId = null, this.state = "disconnected", this.messageQueue = [], this.reconnectAttempts = 0, this.maxReconnectAttempts = Te.MAX_RECONNECT_ATTEMPTS, this.reconnectDelay = Te.RECONNECT_DELAY, this.heartbeatInterval = null, this.listeners = /* @__PURE__ */ new Map(), this.abortController = null, this.cleanupFunctions = [], this.visibilityChangeHandler = null, this.pendingPongTimeout = null, this.config = e, this.visitor = t, this.debugLogger = ls(e.getAll()), this.correlationService = i, this.setupVisibilityChangeListener();
  }
  /**
   * Connect to WebSocket server
   */
  async connect(e) {
    if (this.state !== "connected") {
      this.cleanup(), this.sessionId = e, this.setState(
        "connecting"
        /* CONNECTING */
      );
      try {
        this.abortController = new AbortController();
        const t = Ki.getWebSocketUrl({
          clientId: this.config.clientId,
          sessionId: e,
          visitorId: this.visitor.getVisitorId()
        });
        this.ws = new WebSocket(t), this.setupEventHandlers();
      } catch (t) {
        const i = ir.handle(t, {
          component: "WebSocketManager",
          action: "connect",
          sessionId: e
        });
        this.debugLogger.error("WebSocketManager", "WebSocket connection failed", i.message), this.setState(
          "error"
          /* ERROR */
        ), this.scheduleReconnect();
      }
    }
  }
  setupEventHandlers() {
    this.ws && (this.ws.onopen = () => {
      var e, t, i;
      this.debugLogger.log("WebSocketManager", "WebSocket connected successfully", {
        url: (e = this.ws) == null ? void 0 : e.url,
        readyState: (t = this.ws) == null ? void 0 : t.readyState,
        sessionId: this.sessionId,
        messageListeners: ((i = this.listeners.get("message")) == null ? void 0 : i.size) || 0,
        totalListeners: this.listeners.size,
        timestamp: Date.now()
      }), this.setState(
        "connected"
        /* CONNECTED */
      ), this.reconnectAttempts = 0, this.flushMessageQueue(), this.startHeartbeat();
    }, this.ws.onmessage = (e) => {
      var t, i, r, s, a, o, l, c, d;
      this.debugLogger.log("WebSocketManager", "Raw message received", {
        data: e.data,
        type: typeof e.data,
        length: ((t = e.data) == null ? void 0 : t.length) || 0,
        timestamp: Date.now(),
        wsReadyState: (i = this.ws) == null ? void 0 : i.readyState,
        sessionId: this.sessionId
      });
      try {
        const u = JSON.parse(e.data);
        this.debugLogger.log("WebSocketManager", "Parsed message", {
          message: u,
          messageType: u.type,
          content: (r = u.data) == null ? void 0 : r.content,
          hasContent: !!((s = u.data) != null && s.content),
          contentLength: ((o = (a = u.data) == null ? void 0 : a.content) == null ? void 0 : o.length) || 0,
          hasError: u.type === "error",
          metadata: (l = u.data) == null ? void 0 : l.metadata
        }), this.debugLogger.log("WebSocketManager", "Emitting to listeners", {
          listenerCount: ((c = this.listeners.get("message")) == null ? void 0 : c.size) || 0,
          hasMessageListeners: this.listeners.has("message"),
          allListenerTypes: Array.from(this.listeners.keys())
        }), this.emit("message", u), this.debugLogger.log("WebSocketManager", "Message emission completed successfully");
      } catch (u) {
        this.debugLogger.error("WebSocketManager", "Parse error", {
          error: u instanceof Error ? u.message : String(u),
          rawData: e.data,
          rawDataType: typeof e.data,
          rawDataLength: ((d = e.data) == null ? void 0 : d.length) || 0
        });
      }
    }, this.ws.onerror = (e) => {
      var t, i;
      this.debugLogger.error("WebSocketManager", "WebSocket error details", {
        error: e,
        errorType: e.type,
        readyState: (t = this.ws) == null ? void 0 : t.readyState,
        url: (i = this.ws) == null ? void 0 : i.url,
        sessionId: this.sessionId,
        connectionState: this.state,
        timestamp: Date.now()
      }), this.setState(
        "error"
        /* ERROR */
      );
    }, this.ws.onclose = (e) => {
      var t;
      this.debugLogger.log("WebSocketManager", "WebSocket closed details", {
        code: e.code,
        reason: e.reason,
        wasClean: e.wasClean,
        readyState: (t = this.ws) == null ? void 0 : t.readyState,
        sessionId: this.sessionId,
        connectionState: this.state,
        willReconnect: e.code !== 1e3,
        timestamp: Date.now()
      }), this.setState(
        "disconnected"
        /* DISCONNECTED */
      ), this.stopHeartbeat(), e.code !== 1e3 && this.scheduleReconnect();
    });
  }
  /**
   * Set up page visibility change detection to handle mobile connection suspension
   */
  setupVisibilityChangeListener() {
    this.visibilityChangeHandler = () => {
      document.visibilityState === "visible" ? (this.debugLogger.log("WebSocketManager", "Page became visible, verifying connection"), this.verifyConnection()) : this.debugLogger.log("WebSocketManager", "Page became hidden");
    }, document.addEventListener("visibilitychange", this.visibilityChangeHandler), this.cleanupFunctions.push(() => {
      this.visibilityChangeHandler && (document.removeEventListener("visibilitychange", this.visibilityChangeHandler), this.visibilityChangeHandler = null);
    });
  }
  /**
   * Verify WebSocket connection is still alive when page becomes visible
   * If connection appears open but doesn't respond to ping, trigger reconnection
   */
  verifyConnection() {
    if (this.state !== "connected" || !this.ws || this.ws.readyState !== WebSocket.OPEN)
      return;
    this.pendingPongTimeout && (clearTimeout(this.pendingPongTimeout), this.pendingPongTimeout = null), this.debugLogger.log("WebSocketManager", "Sending verification ping");
    const e = (t) => {
      t.type === "pong" && (this.debugLogger.log("WebSocketManager", "Connection verified - pong received"), this.pendingPongTimeout && (clearTimeout(this.pendingPongTimeout), this.pendingPongTimeout = null), this.off("message", e));
    };
    this.on("message", e), this.pendingPongTimeout = window.setTimeout(() => {
      this.debugLogger.warn("WebSocketManager", "No pong received - connection appears stale, reconnecting"), this.off("message", e), this.pendingPongTimeout = null, this.cleanup(), this.reconnect();
    }, Te.VISIBILITY_PING_TIMEOUT);
    try {
      this.ws.send(JSON.stringify({ type: "ping" }));
    } catch (t) {
      this.debugLogger.error("WebSocketManager", "Failed to send verification ping", t), this.off("message", e), this.pendingPongTimeout && (clearTimeout(this.pendingPongTimeout), this.pendingPongTimeout = null), this.reconnect();
    }
  }
  /**
   * Send message through WebSocket
   */
  send(e) {
    var r, s, a;
    const t = this.correlationService.getCurrent();
    this.debugLogger.log("WebSocketManager", "send() called", {
      correlationId: t,
      message: e,
      messageLength: (e == null ? void 0 : e.length) || 0,
      messageType: typeof e,
      wsState: this.state,
      wsReadyState: (r = this.ws) == null ? void 0 : r.readyState,
      sessionId: this.sessionId
    });
    const i = JSON.stringify({
      type: "message",
      message: e,
      correlation_id: t,
      timestamp: Date.now()
    });
    if (this.debugLogger.log("WebSocketManager", "JSON payload created", {
      correlationId: t,
      data: i,
      dataLength: i.length,
      parsedBack: JSON.parse(i)
    }), this.state === "connected" && ((s = this.ws) == null ? void 0 : s.readyState) === WebSocket.OPEN)
      this.debugLogger.log("WebSocketManager", "Sending via WebSocket immediately", { correlationId: t }), this.ws.send(i);
    else {
      if (this.debugLogger.log("WebSocketManager", "WebSocket not ready, queuing message", {
        correlationId: t,
        state: this.state,
        readyState: (a = this.ws) == null ? void 0 : a.readyState,
        queueLength: this.messageQueue.length
      }), this.messageQueue.length >= dn.MAX_QUEUE_SIZE) {
        this.debugLogger.warn("WebSocketManager", "Message queue full", {
          queueSize: this.messageQueue.length,
          maxSize: dn.MAX_QUEUE_SIZE
        }), this.emit("error", {
          error: "Too many pending messages. Please wait for connection to restore."
        });
        return;
      }
      this.messageQueue.push(i), this.state === "disconnected" && (this.debugLogger.log("WebSocketManager", "Attempting to reconnect...", { correlationId: t }), this.reconnect());
    }
  }
  flushMessageQueue() {
    var e;
    for (; this.messageQueue.length > 0 && ((e = this.ws) == null ? void 0 : e.readyState) === WebSocket.OPEN; ) {
      const t = this.messageQueue.shift();
      t && this.ws.send(t);
    }
  }
  scheduleReconnect() {
    if (this.reconnectAttempts >= this.maxReconnectAttempts) {
      this.debugLogger.error("WebSocketManager", "Max reconnection attempts reached"), this.emit("connectionFailed", { error: "Connection failed. Please try again." });
      return;
    }
    this.reconnectAttempts++;
    const e = Math.min(this.reconnectDelay * Math.pow(2, this.reconnectAttempts - 1), 3e4);
    this.debugLogger.log("WebSocketManager", `Reconnecting in ${e}ms (attempt ${this.reconnectAttempts})`), setTimeout(() => this.reconnect(), e);
  }
  async reconnect() {
    this.sessionId && await this.connect(this.sessionId);
  }
  startHeartbeat() {
    this.stopHeartbeat();
    const e = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), t = e ? Te.MOBILE_HEARTBEAT_INTERVAL : Te.HEARTBEAT_INTERVAL;
    this.debugLogger.log("WebSocketManager", "Starting heartbeat", {
      isMobile: e,
      interval: t,
      intervalSeconds: t / 1e3
    }), this.heartbeatInterval = window.setInterval(() => {
      var i;
      ((i = this.ws) == null ? void 0 : i.readyState) === WebSocket.OPEN && this.ws.send(JSON.stringify({ type: "ping" }));
    }, t), this.cleanupFunctions.push(() => this.stopHeartbeat());
  }
  stopHeartbeat() {
    this.heartbeatInterval && (clearInterval(this.heartbeatInterval), this.heartbeatInterval = null);
  }
  /**
   * Event emitter functionality
   */
  on(e, t) {
    this.listeners.has(e) || this.listeners.set(e, /* @__PURE__ */ new Set()), this.listeners.get(e).add(t);
  }
  off(e, t) {
    var i;
    (i = this.listeners.get(e)) == null || i.delete(t);
  }
  emit(e, t) {
    var i;
    (i = this.listeners.get(e)) == null || i.forEach((r) => r(t));
  }
  setState(e) {
    this.state = e, this.emit("stateChange", e);
  }
  getState() {
    return this.state;
  }
  /**
   * Clean up all resources to prevent memory leaks
   */
  cleanup() {
    this.stopHeartbeat(), this.pendingPongTimeout && (clearTimeout(this.pendingPongTimeout), this.pendingPongTimeout = null), this.ws && (this.ws.onopen = null, this.ws.onmessage = null, this.ws.onerror = null, this.ws.onclose = null, (this.ws.readyState === WebSocket.OPEN || this.ws.readyState === WebSocket.CONNECTING) && this.ws.close(1e3, "Cleanup"), this.ws = null), this.abortController && (this.abortController.abort(), this.abortController = null), this.cleanupFunctions.forEach((e) => {
      try {
        e();
      } catch (t) {
        this.debugLogger.warn("WebSocketManager", "Cleanup function failed", t);
      }
    }), this.cleanupFunctions = [];
  }
  /**
   * Test WebSocket bidirectional communication
   * Sends a test message to verify the connection works both ways
   */
  testConnection() {
    var e, t;
    if (this.state === "connected" && ((e = this.ws) == null ? void 0 : e.readyState) === WebSocket.OPEN) {
      this.debugLogger.log("WebSocketManager", "Testing bidirectional WebSocket communication...");
      const i = JSON.stringify({
        type: "ping",
        message: "connection-test",
        timestamp: Date.now()
      });
      this.debugLogger.log("WebSocketManager", "Sending test ping", i), this.ws.send(i);
    } else
      this.debugLogger.warn("WebSocketManager", "Cannot test connection - WebSocket not ready", {
        state: this.state,
        readyState: (t = this.ws) == null ? void 0 : t.readyState
      });
  }
  /**
   * Manually retry connection after max attempts exhausted
   * Resets reconnection counter and attempts to reconnect
   */
  retryConnection() {
    this.debugLogger.log("WebSocketManager", "Manual retry requested"), this.reconnectAttempts = 0, this.setState(
      "connecting"
      /* CONNECTING */
    ), this.sessionId && this.connect(this.sessionId);
  }
  /**
   * Disconnect and clean up resources
   */
  disconnect() {
    this.cleanup(), this.setState(
      "disconnected"
      /* DISCONNECTED */
    ), this.messageQueue = [], this.reconnectAttempts = 0, this.sessionId = null, this.listeners.clear();
  }
}
var Su = /* @__PURE__ */ ee('<button class="close-button svelte-g5m62x" aria-label="Close chat" type="button"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true" class="svelte-g5m62x"><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor" class="svelte-g5m62x"></path></svg></button>'), Tu = /* @__PURE__ */ ee('<header class="chat-header svelte-g5m62x"><div class="header-content svelte-g5m62x"><div role="status"></div> <h2 class="header-title svelte-g5m62x"> </h2></div> <!></header>');
const Eu = {
  hash: "svelte-g5m62x",
  code: `.chat-header.svelte-g5m62x {display:flex;align-items:center;justify-content:space-between;padding:var(--widget-space-sm) var(--widget-space-md);background:var(--widget-surface-elevated);color:var(--widget-text);border-radius:var(--widget-radius-xl) var(--widget-radius-xl) 0 0;border-bottom:1px solid var(--widget-border);position:relative;box-shadow:var(--widget-shadow-sm);min-height:48px;gap:var(--widget-space-md);}

  /* Subtle gradient overlay for premium feel */.chat-header.svelte-g5m62x::before {content:'';position:absolute;inset:0;background:linear-gradient(180deg, rgba(255,255,255,0.04) 0%, transparent 100%);border-radius:inherit;pointer-events:none;}.header-content.svelte-g5m62x {display:flex;align-items:center;gap:var(--widget-space-sm); /* 8px between dot and title */flex:1;min-width:0;position:relative;z-index:1;}.header-title.svelte-g5m62x {margin:0;font-size:var(--widget-font-size-lg);font-weight:var(--widget-font-weight-semibold);color:var(--widget-text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1;min-width:0; /* Critical for ellipsis */}

  /* Status dot - positioned BEFORE title for Material Design compliance */.status-dot.svelte-g5m62x {width:7px;height:7px;border-radius:50%;background:var(--status-color);flex-shrink:0;transition:background-color 0.3s ease;cursor:help;}

  /* Animations */
  @keyframes svelte-g5m62x-pulse-slow {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(0.85); }
  }

  @keyframes svelte-g5m62x-blink-slow {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }.status-dot.pulse-slow.svelte-g5m62x { animation: svelte-g5m62x-pulse-slow 1.5s ease-in-out infinite;}.status-dot.blink-slow.svelte-g5m62x { animation: svelte-g5m62x-blink-slow 1.5s ease-in-out infinite;}.close-button.svelte-g5m62x {background:var(--widget-surface);border:1px solid var(--widget-border);color:var(--widget-text-secondary);cursor:pointer;padding:var(--widget-space-xs);display:flex;align-items:center;justify-content:center;border-radius:var(--widget-radius-md);transition:transform 0.15s var(--widget-ease-spring),
                background 0.15s ease,
                color 0.15s ease;box-shadow:var(--widget-shadow-sm);flex-shrink:0;position:relative;z-index:1;}.close-button.svelte-g5m62x:hover {background:var(--widget-surface-hover);color:var(--widget-text);transform:scale(1.08);}.close-button.svelte-g5m62x:active {transform:scale(0.95);transition-duration:0.1s;}.close-button.svelte-g5m62x:focus-visible {outline:2px solid var(--widget-primary);outline-offset:2px;}.close-button.svelte-g5m62x svg:where(.svelte-g5m62x) {width:16px;height:16px;transition:transform 0.15s var(--widget-ease-spring);}.close-button.svelte-g5m62x:hover svg:where(.svelte-g5m62x) {transform:rotate(90deg);}

  /* Mobile: 44x44px touch targets */
  @media (max-width: 767px) {.chat-header.svelte-g5m62x {border-radius:0;min-height:56px;}.close-button.svelte-g5m62x {min-width:44px;min-height:44px;padding:var(--widget-space-sm);}.close-button.svelte-g5m62x svg:where(.svelte-g5m62x) {width:20px;height:20px;}
  }

  /* Very narrow screens */
  @media (max-width: 374px) {.header-title.svelte-g5m62x {font-size:var(--widget-font-size-base);}
  }

  /* Landscape: Compact */
  @media (max-width: 767px) and (orientation: landscape) {.chat-header.svelte-g5m62x {min-height:48px;}
  }

  /* Respect reduced motion */
  @media (prefers-reduced-motion: reduce) {.status-dot.pulse-slow.svelte-g5m62x,
    .status-dot.blink-slow.svelte-g5m62x {
      animation: none;}.status-dot.svelte-g5m62x {transition:none;}
  }

  /* Dark theme adjustments - Use CSS variables for maintainability */[data-theme="dark"] .chat-header.svelte-g5m62x {background:var(--widget-surface);border-color:var(--widget-border);}`
};
function la(n, e) {
  xt(e, !0), Ft(n, Eu);
  let t = Q(e, "onclose", 7), i = Q(e, "connectionState", 23, () => ue.DISCONNECTED), r = Q(e, "connectionFailed", 7, !1), s = Q(e, "showCloseButton", 7, !0), a = Q(e, "ui", 7, mn), o = Q(e, "config", 7, ft);
  const l = /* @__PURE__ */ me(() => {
    if (r()) return "var(--widget-error)";
    switch (i()) {
      case ue.CONNECTED:
        return "var(--widget-success)";
      case ue.CONNECTING:
        return "var(--widget-warning, #ca8a04)";
      case /* Darker yellow for WCAG AA */
      ue.ERROR:
        return "var(--widget-error)";
      default:
        return "var(--widget-text-secondary)";
    }
  }), c = /* @__PURE__ */ me(() => {
    if (r()) return "Connection lost";
    switch (i()) {
      case ue.CONNECTED:
        return "Connected";
      case ue.CONNECTING:
        return "Connecting";
      case ue.ERROR:
        return "Connection error";
      case ue.DISCONNECTED:
        return "Disconnected";
      default:
        return "";
    }
  }), d = /* @__PURE__ */ me(() => i() === ue.CONNECTING ? "pulse-slow" : i() === ue.ERROR ? "blink-slow" : "");
  function u() {
    var y;
    a().close(), (y = t()) == null || y();
  }
  var h = {
    get onclose() {
      return t();
    },
    set onclose(y) {
      t(y), j();
    },
    get connectionState() {
      return i();
    },
    set connectionState(y = ue.DISCONNECTED) {
      i(y), j();
    },
    get connectionFailed() {
      return r();
    },
    set connectionFailed(y = !1) {
      r(y), j();
    },
    get showCloseButton() {
      return s();
    },
    set showCloseButton(y = !0) {
      s(y), j();
    },
    get ui() {
      return a();
    },
    set ui(y = mn) {
      a(y), j();
    },
    get config() {
      return o();
    },
    set config(y = ft) {
      o(y), j();
    }
  }, p = Tu(), k = se(p), b = se(k), m = ae(b, 2), T = se(m, !0);
  re(m), re(k);
  var z = ae(k, 2);
  {
    var w = (y) => {
      var L = Su();
      L.__click = u, F(y, L);
    };
    ve(z, (y) => {
      s() && y(w);
    });
  }
  return re(p), Ye(() => {
    ss(b, 1, `status-dot ${v(d) ?? ""}`, "svelte-g5m62x"), wl(b, `--status-color: ${v(l) ?? ""}`), Fe(b, "aria-label", v(c)), Fe(b, "title", v(c)), Pn(T, o().title);
  }), F(n, p), _t(h);
}
Bn(["click"]);
Ht(
  la,
  {
    onclose: {},
    connectionState: {},
    connectionFailed: {},
    showCloseButton: {},
    ui: {},
    config: {}
  },
  [],
  [],
  !0
);
function ca() {
  return {
    async: !1,
    breaks: !1,
    extensions: null,
    gfm: !0,
    hooks: null,
    pedantic: !1,
    renderer: null,
    silent: !1,
    tokenizer: null,
    walkTokens: null
  };
}
let jn = ca();
function Hl(n) {
  jn = n;
}
const Wl = /[&<>"']/, Cu = new RegExp(Wl.source, "g"), Bl = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, Au = new RegExp(Bl.source, "g"), Iu = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, eo = (n) => Iu[n];
function tt(n, e) {
  if (e) {
    if (Wl.test(n))
      return n.replace(Cu, eo);
  } else if (Bl.test(n))
    return n.replace(Au, eo);
  return n;
}
const Mu = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function Ru(n) {
  return n.replace(Mu, (e, t) => (t = t.toLowerCase(), t === "colon" ? ":" : t.charAt(0) === "#" ? t.charAt(1) === "x" ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""));
}
const Lu = /(^|[^\[])\^/g;
function ce(n, e) {
  let t = typeof n == "string" ? n : n.source;
  e = e || "";
  const i = {
    replace: (r, s) => {
      let a = typeof s == "string" ? s : s.source;
      return a = a.replace(Lu, "$1"), t = t.replace(r, a), i;
    },
    getRegex: () => new RegExp(t, e)
  };
  return i;
}
function to(n) {
  try {
    n = encodeURI(n).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return n;
}
const rr = { exec: () => null };
function no(n, e) {
  const t = n.replace(/\|/g, (s, a, o) => {
    let l = !1, c = a;
    for (; --c >= 0 && o[c] === "\\"; )
      l = !l;
    return l ? "|" : " |";
  }), i = t.split(/ \|/);
  let r = 0;
  if (i[0].trim() || i.shift(), i.length > 0 && !i[i.length - 1].trim() && i.pop(), e)
    if (i.length > e)
      i.splice(e);
    else
      for (; i.length < e; )
        i.push("");
  for (; r < i.length; r++)
    i[r] = i[r].trim().replace(/\\\|/g, "|");
  return i;
}
function Mr(n, e, t) {
  const i = n.length;
  if (i === 0)
    return "";
  let r = 0;
  for (; r < i && n.charAt(i - r - 1) === e; )
    r++;
  return n.slice(0, i - r);
}
function Ou(n, e) {
  if (n.indexOf(e[1]) === -1)
    return -1;
  let t = 0;
  for (let i = 0; i < n.length; i++)
    if (n[i] === "\\")
      i++;
    else if (n[i] === e[0])
      t++;
    else if (n[i] === e[1] && (t--, t < 0))
      return i;
  return -1;
}
function io(n, e, t, i) {
  const r = e.href, s = e.title ? tt(e.title) : null, a = n[1].replace(/\\([\[\]])/g, "$1");
  if (n[0].charAt(0) !== "!") {
    i.state.inLink = !0;
    const o = {
      type: "link",
      raw: t,
      href: r,
      title: s,
      text: a,
      tokens: i.inlineTokens(a)
    };
    return i.state.inLink = !1, o;
  }
  return {
    type: "image",
    raw: t,
    href: r,
    title: s,
    text: tt(a)
  };
}
function Nu(n, e) {
  const t = n.match(/^(\s+)(?:```)/);
  if (t === null)
    return e;
  const i = t[1];
  return e.split(`
`).map((r) => {
    const s = r.match(/^\s+/);
    if (s === null)
      return r;
    const [a] = s;
    return a.length >= i.length ? r.slice(i.length) : r;
  }).join(`
`);
}
class Gr {
  // set by the lexer
  constructor(e) {
    $(this, "options");
    $(this, "rules");
    // set by the lexer
    $(this, "lexer");
    this.options = e || jn;
  }
  space(e) {
    const t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0)
      return {
        type: "space",
        raw: t[0]
      };
  }
  code(e) {
    const t = this.rules.block.code.exec(e);
    if (t) {
      const i = t[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: t[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic ? i : Mr(i, `
`)
      };
    }
  }
  fences(e) {
    const t = this.rules.block.fences.exec(e);
    if (t) {
      const i = t[0], r = Nu(i, t[3] || "");
      return {
        type: "code",
        raw: i,
        lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
        text: r
      };
    }
  }
  heading(e) {
    const t = this.rules.block.heading.exec(e);
    if (t) {
      let i = t[2].trim();
      if (/#$/.test(i)) {
        const r = Mr(i, "#");
        (this.options.pedantic || !r || / $/.test(r)) && (i = r.trim());
      }
      return {
        type: "heading",
        raw: t[0],
        depth: t[1].length,
        text: i,
        tokens: this.lexer.inline(i)
      };
    }
  }
  hr(e) {
    const t = this.rules.block.hr.exec(e);
    if (t)
      return {
        type: "hr",
        raw: t[0]
      };
  }
  blockquote(e) {
    const t = this.rules.block.blockquote.exec(e);
    if (t) {
      let i = t[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g, `
    $1`);
      i = Mr(i.replace(/^ *>[ \t]?/gm, ""), `
`);
      const r = this.lexer.state.top;
      this.lexer.state.top = !0;
      const s = this.lexer.blockTokens(i);
      return this.lexer.state.top = r, {
        type: "blockquote",
        raw: t[0],
        tokens: s,
        text: i
      };
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let i = t[1].trim();
      const r = i.length > 1, s = {
        type: "list",
        raw: "",
        ordered: r,
        start: r ? +i.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      i = r ? `\\d{1,9}\\${i.slice(-1)}` : `\\${i}`, this.options.pedantic && (i = r ? i : "[*+-]");
      const a = new RegExp(`^( {0,3}${i})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let o = "", l = "", c = !1;
      for (; e; ) {
        let d = !1;
        if (!(t = a.exec(e)) || this.rules.block.hr.test(e))
          break;
        o = t[0], e = e.substring(o.length);
        let u = t[2].split(`
`, 1)[0].replace(/^\t+/, (T) => " ".repeat(3 * T.length)), h = e.split(`
`, 1)[0], p = 0;
        this.options.pedantic ? (p = 2, l = u.trimStart()) : (p = t[2].search(/[^ ]/), p = p > 4 ? 1 : p, l = u.slice(p), p += t[1].length);
        let k = !1;
        if (!u && /^ *$/.test(h) && (o += h + `
`, e = e.substring(h.length + 1), d = !0), !d) {
          const T = new RegExp(`^ {0,${Math.min(3, p - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), z = new RegExp(`^ {0,${Math.min(3, p - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), w = new RegExp(`^ {0,${Math.min(3, p - 1)}}(?:\`\`\`|~~~)`), y = new RegExp(`^ {0,${Math.min(3, p - 1)}}#`);
          for (; e; ) {
            const L = e.split(`
`, 1)[0];
            if (h = L, this.options.pedantic && (h = h.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), w.test(h) || y.test(h) || T.test(h) || z.test(e))
              break;
            if (h.search(/[^ ]/) >= p || !h.trim())
              l += `
` + h.slice(p);
            else {
              if (k || u.search(/[^ ]/) >= 4 || w.test(u) || y.test(u) || z.test(u))
                break;
              l += `
` + h;
            }
            !k && !h.trim() && (k = !0), o += L + `
`, e = e.substring(L.length + 1), u = h.slice(p);
          }
        }
        s.loose || (c ? s.loose = !0 : /\n *\n *$/.test(o) && (c = !0));
        let b = null, m;
        this.options.gfm && (b = /^\[[ xX]\] /.exec(l), b && (m = b[0] !== "[ ] ", l = l.replace(/^\[[ xX]\] +/, ""))), s.items.push({
          type: "list_item",
          raw: o,
          task: !!b,
          checked: m,
          loose: !1,
          text: l,
          tokens: []
        }), s.raw += o;
      }
      s.items[s.items.length - 1].raw = o.trimEnd(), s.items[s.items.length - 1].text = l.trimEnd(), s.raw = s.raw.trimEnd();
      for (let d = 0; d < s.items.length; d++)
        if (this.lexer.state.top = !1, s.items[d].tokens = this.lexer.blockTokens(s.items[d].text, []), !s.loose) {
          const u = s.items[d].tokens.filter((p) => p.type === "space"), h = u.length > 0 && u.some((p) => /\n.*\n/.test(p.raw));
          s.loose = h;
        }
      if (s.loose)
        for (let d = 0; d < s.items.length; d++)
          s.items[d].loose = !0;
      return s;
    }
  }
  html(e) {
    const t = this.rules.block.html.exec(e);
    if (t)
      return {
        type: "html",
        block: !0,
        raw: t[0],
        pre: t[1] === "pre" || t[1] === "script" || t[1] === "style",
        text: t[0]
      };
  }
  def(e) {
    const t = this.rules.block.def.exec(e);
    if (t) {
      const i = t[1].toLowerCase().replace(/\s+/g, " "), r = t[2] ? t[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", s = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
      return {
        type: "def",
        tag: i,
        raw: t[0],
        href: r,
        title: s
      };
    }
  }
  table(e) {
    const t = this.rules.block.table.exec(e);
    if (!t || !/[:|]/.test(t[2]))
      return;
    const i = no(t[1]), r = t[2].replace(/^\||\| *$/g, "").split("|"), s = t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split(`
`) : [], a = {
      type: "table",
      raw: t[0],
      header: [],
      align: [],
      rows: []
    };
    if (i.length === r.length) {
      for (const o of r)
        /^ *-+: *$/.test(o) ? a.align.push("right") : /^ *:-+: *$/.test(o) ? a.align.push("center") : /^ *:-+ *$/.test(o) ? a.align.push("left") : a.align.push(null);
      for (const o of i)
        a.header.push({
          text: o,
          tokens: this.lexer.inline(o)
        });
      for (const o of s)
        a.rows.push(no(o, a.header.length).map((l) => ({
          text: l,
          tokens: this.lexer.inline(l)
        })));
      return a;
    }
  }
  lheading(e) {
    const t = this.rules.block.lheading.exec(e);
    if (t)
      return {
        type: "heading",
        raw: t[0],
        depth: t[2].charAt(0) === "=" ? 1 : 2,
        text: t[1],
        tokens: this.lexer.inline(t[1])
      };
  }
  paragraph(e) {
    const t = this.rules.block.paragraph.exec(e);
    if (t) {
      const i = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
      return {
        type: "paragraph",
        raw: t[0],
        text: i,
        tokens: this.lexer.inline(i)
      };
    }
  }
  text(e) {
    const t = this.rules.block.text.exec(e);
    if (t)
      return {
        type: "text",
        raw: t[0],
        text: t[0],
        tokens: this.lexer.inline(t[0])
      };
  }
  escape(e) {
    const t = this.rules.inline.escape.exec(e);
    if (t)
      return {
        type: "escape",
        raw: t[0],
        text: tt(t[1])
      };
  }
  tag(e) {
    const t = this.rules.inline.tag.exec(e);
    if (t)
      return !this.lexer.state.inLink && /^<a /i.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(t[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) && (this.lexer.state.inRawBlock = !1), {
        type: "html",
        raw: t[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: !1,
        text: t[0]
      };
  }
  link(e) {
    const t = this.rules.inline.link.exec(e);
    if (t) {
      const i = t[2].trim();
      if (!this.options.pedantic && /^</.test(i)) {
        if (!/>$/.test(i))
          return;
        const a = Mr(i.slice(0, -1), "\\");
        if ((i.length - a.length) % 2 === 0)
          return;
      } else {
        const a = Ou(t[2], "()");
        if (a > -1) {
          const l = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + a;
          t[2] = t[2].substring(0, a), t[0] = t[0].substring(0, l).trim(), t[3] = "";
        }
      }
      let r = t[2], s = "";
      if (this.options.pedantic) {
        const a = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r);
        a && (r = a[1], s = a[3]);
      } else
        s = t[3] ? t[3].slice(1, -1) : "";
      return r = r.trim(), /^</.test(r) && (this.options.pedantic && !/>$/.test(i) ? r = r.slice(1) : r = r.slice(1, -1)), io(t, {
        href: r && r.replace(this.rules.inline.anyPunctuation, "$1"),
        title: s && s.replace(this.rules.inline.anyPunctuation, "$1")
      }, t[0], this.lexer);
    }
  }
  reflink(e, t) {
    let i;
    if ((i = this.rules.inline.reflink.exec(e)) || (i = this.rules.inline.nolink.exec(e))) {
      const r = (i[2] || i[1]).replace(/\s+/g, " "), s = t[r.toLowerCase()];
      if (!s) {
        const a = i[0].charAt(0);
        return {
          type: "text",
          raw: a,
          text: a
        };
      }
      return io(i, s, i[0], this.lexer);
    }
  }
  emStrong(e, t, i = "") {
    let r = this.rules.inline.emStrongLDelim.exec(e);
    if (!r || r[3] && i.match(/[\p{L}\p{N}]/u))
      return;
    if (!(r[1] || r[2] || "") || !i || this.rules.inline.punctuation.exec(i)) {
      const a = [...r[0]].length - 1;
      let o, l, c = a, d = 0;
      const u = r[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (u.lastIndex = 0, t = t.slice(-1 * e.length + a); (r = u.exec(t)) != null; ) {
        if (o = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !o)
          continue;
        if (l = [...o].length, r[3] || r[4]) {
          c += l;
          continue;
        } else if ((r[5] || r[6]) && a % 3 && !((a + l) % 3)) {
          d += l;
          continue;
        }
        if (c -= l, c > 0)
          continue;
        l = Math.min(l, l + c + d);
        const h = [...r[0]][0].length, p = e.slice(0, a + r.index + h + l);
        if (Math.min(a, l) % 2) {
          const b = p.slice(1, -1);
          return {
            type: "em",
            raw: p,
            text: b,
            tokens: this.lexer.inlineTokens(b)
          };
        }
        const k = p.slice(2, -2);
        return {
          type: "strong",
          raw: p,
          text: k,
          tokens: this.lexer.inlineTokens(k)
        };
      }
    }
  }
  codespan(e) {
    const t = this.rules.inline.code.exec(e);
    if (t) {
      let i = t[2].replace(/\n/g, " ");
      const r = /[^ ]/.test(i), s = /^ /.test(i) && / $/.test(i);
      return r && s && (i = i.substring(1, i.length - 1)), i = tt(i, !0), {
        type: "codespan",
        raw: t[0],
        text: i
      };
    }
  }
  br(e) {
    const t = this.rules.inline.br.exec(e);
    if (t)
      return {
        type: "br",
        raw: t[0]
      };
  }
  del(e) {
    const t = this.rules.inline.del.exec(e);
    if (t)
      return {
        type: "del",
        raw: t[0],
        text: t[2],
        tokens: this.lexer.inlineTokens(t[2])
      };
  }
  autolink(e) {
    const t = this.rules.inline.autolink.exec(e);
    if (t) {
      let i, r;
      return t[2] === "@" ? (i = tt(t[1]), r = "mailto:" + i) : (i = tt(t[1]), r = i), {
        type: "link",
        raw: t[0],
        text: i,
        href: r,
        tokens: [
          {
            type: "text",
            raw: i,
            text: i
          }
        ]
      };
    }
  }
  url(e) {
    var i;
    let t;
    if (t = this.rules.inline.url.exec(e)) {
      let r, s;
      if (t[2] === "@")
        r = tt(t[0]), s = "mailto:" + r;
      else {
        let a;
        do
          a = t[0], t[0] = ((i = this.rules.inline._backpedal.exec(t[0])) == null ? void 0 : i[0]) ?? "";
        while (a !== t[0]);
        r = tt(t[0]), t[1] === "www." ? s = "http://" + t[0] : s = t[0];
      }
      return {
        type: "link",
        raw: t[0],
        text: r,
        href: s,
        tokens: [
          {
            type: "text",
            raw: r,
            text: r
          }
        ]
      };
    }
  }
  inlineText(e) {
    const t = this.rules.inline.text.exec(e);
    if (t) {
      let i;
      return this.lexer.state.inRawBlock ? i = t[0] : i = tt(t[0]), {
        type: "text",
        raw: t[0],
        text: i
      };
    }
  }
}
const Du = /^(?: *(?:\n|$))+/, Pu = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, zu = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, wr = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, $u = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, jl = /(?:[*+-]|\d{1,9}[.)])/, Gl = ce(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, jl).replace(/blockCode/g, / {4}/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), da = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, qu = /^[^\n]+/, ua = /(?!\s*\])(?:\\.|[^\[\]\\])+/, Uu = ce(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", ua).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Fu = ce(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, jl).getRegex(), cs = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", ga = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Hu = ce("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", ga).replace("tag", cs).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Vl = ce(da).replace("hr", wr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", cs).getRegex(), Wu = ce(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Vl).getRegex(), fa = {
  blockquote: Wu,
  code: Pu,
  def: Uu,
  fences: zu,
  heading: $u,
  hr: wr,
  html: Hu,
  lheading: Gl,
  list: Fu,
  newline: Du,
  paragraph: Vl,
  table: rr,
  text: qu
}, ro = ce("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", wr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", cs).getRegex(), Bu = {
  ...fa,
  table: ro,
  paragraph: ce(da).replace("hr", wr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", ro).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", cs).getRegex()
}, ju = {
  ...fa,
  html: ce(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", ga).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: rr,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: ce(da).replace("hr", wr).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Gl).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, Yl = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Gu = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Ql = /^( {2,}|\\)\n(?!\s*$)/, Vu = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, yr = "\\p{P}\\p{S}", Yu = ce(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, yr).getRegex(), Qu = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, Xu = ce(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, yr).getRegex(), Zu = ce("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, yr).getRegex(), Ku = ce("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, yr).getRegex(), Ju = ce(/\\([punct])/, "gu").replace(/punct/g, yr).getRegex(), eg = ce(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), tg = ce(ga).replace("(?:-->|$)", "-->").getRegex(), ng = ce("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", tg).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Vr = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, ig = ce(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", Vr).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Xl = ce(/^!?\[(label)\]\[(ref)\]/).replace("label", Vr).replace("ref", ua).getRegex(), Zl = ce(/^!?\[(ref)\](?:\[\])?/).replace("ref", ua).getRegex(), rg = ce("reflink|nolink(?!\\()", "g").replace("reflink", Xl).replace("nolink", Zl).getRegex(), ha = {
  _backpedal: rr,
  // only used for GFM url
  anyPunctuation: Ju,
  autolink: eg,
  blockSkip: Qu,
  br: Ql,
  code: Gu,
  del: rr,
  emStrongLDelim: Xu,
  emStrongRDelimAst: Zu,
  emStrongRDelimUnd: Ku,
  escape: Yl,
  link: ig,
  nolink: Zl,
  punctuation: Yu,
  reflink: Xl,
  reflinkSearch: rg,
  tag: ng,
  text: Vu,
  url: rr
}, sg = {
  ...ha,
  link: ce(/^!?\[(label)\]\((.*?)\)/).replace("label", Vr).getRegex(),
  reflink: ce(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Vr).getRegex()
}, Fs = {
  ...ha,
  escape: ce(Yl).replace("])", "~|])").getRegex(),
  url: ce(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, ag = {
  ...Fs,
  br: ce(Ql).replace("{2,}", "*").getRegex(),
  text: ce(Fs.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, Rr = {
  normal: fa,
  gfm: Bu,
  pedantic: ju
}, Wi = {
  normal: ha,
  gfm: Fs,
  breaks: ag,
  pedantic: sg
};
class Nt {
  constructor(e) {
    $(this, "tokens");
    $(this, "options");
    $(this, "state");
    $(this, "tokenizer");
    $(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || jn, this.options.tokenizer = this.options.tokenizer || new Gr(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const t = {
      block: Rr.normal,
      inline: Wi.normal
    };
    this.options.pedantic ? (t.block = Rr.pedantic, t.inline = Wi.pedantic) : this.options.gfm && (t.block = Rr.gfm, this.options.breaks ? t.inline = Wi.breaks : t.inline = Wi.gfm), this.tokenizer.rules = t;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: Rr,
      inline: Wi
    };
  }
  /**
   * Static Lex Method
   */
  static lex(e, t) {
    return new Nt(t).lex(e);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(e, t) {
    return new Nt(t).inlineTokens(e);
  }
  /**
   * Preprocessing
   */
  lex(e) {
    e = e.replace(/\r\n|\r/g, `
`), this.blockTokens(e, this.tokens);
    for (let t = 0; t < this.inlineQueue.length; t++) {
      const i = this.inlineQueue[t];
      this.inlineTokens(i.src, i.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, t = []) {
    this.options.pedantic ? e = e.replace(/\t/g, "    ").replace(/^ +$/gm, "") : e = e.replace(/^( *)(\t+)/gm, (o, l, c) => l + "    ".repeat(c.length));
    let i, r, s, a;
    for (; e; )
      if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((o) => (i = o.call({ lexer: this }, e, t)) ? (e = e.substring(i.raw.length), t.push(i), !0) : !1))) {
        if (i = this.tokenizer.space(e)) {
          e = e.substring(i.raw.length), i.raw.length === 1 && t.length > 0 ? t[t.length - 1].raw += `
` : t.push(i);
          continue;
        }
        if (i = this.tokenizer.code(e)) {
          e = e.substring(i.raw.length), r = t[t.length - 1], r && (r.type === "paragraph" || r.type === "text") ? (r.raw += `
` + i.raw, r.text += `
` + i.text, this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : t.push(i);
          continue;
        }
        if (i = this.tokenizer.fences(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.heading(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.hr(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.blockquote(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.list(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.html(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.def(e)) {
          e = e.substring(i.raw.length), r = t[t.length - 1], r && (r.type === "paragraph" || r.type === "text") ? (r.raw += `
` + i.raw, r.text += `
` + i.raw, this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : this.tokens.links[i.tag] || (this.tokens.links[i.tag] = {
            href: i.href,
            title: i.title
          });
          continue;
        }
        if (i = this.tokenizer.table(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.lheading(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (s = e, this.options.extensions && this.options.extensions.startBlock) {
          let o = 1 / 0;
          const l = e.slice(1);
          let c;
          this.options.extensions.startBlock.forEach((d) => {
            c = d.call({ lexer: this }, l), typeof c == "number" && c >= 0 && (o = Math.min(o, c));
          }), o < 1 / 0 && o >= 0 && (s = e.substring(0, o + 1));
        }
        if (this.state.top && (i = this.tokenizer.paragraph(s))) {
          r = t[t.length - 1], a && r.type === "paragraph" ? (r.raw += `
` + i.raw, r.text += `
` + i.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : t.push(i), a = s.length !== e.length, e = e.substring(i.raw.length);
          continue;
        }
        if (i = this.tokenizer.text(e)) {
          e = e.substring(i.raw.length), r = t[t.length - 1], r && r.type === "text" ? (r.raw += `
` + i.raw, r.text += `
` + i.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : t.push(i);
          continue;
        }
        if (e) {
          const o = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(o);
            break;
          } else
            throw new Error(o);
        }
      }
    return this.state.top = !0, t;
  }
  inline(e, t = []) {
    return this.inlineQueue.push({ src: e, tokens: t }), t;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(e, t = []) {
    let i, r, s, a = e, o, l, c;
    if (this.tokens.links) {
      const d = Object.keys(this.tokens.links);
      if (d.length > 0)
        for (; (o = this.tokenizer.rules.inline.reflinkSearch.exec(a)) != null; )
          d.includes(o[0].slice(o[0].lastIndexOf("[") + 1, -1)) && (a = a.slice(0, o.index) + "[" + "a".repeat(o[0].length - 2) + "]" + a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (o = this.tokenizer.rules.inline.blockSkip.exec(a)) != null; )
      a = a.slice(0, o.index) + "[" + "a".repeat(o[0].length - 2) + "]" + a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (o = this.tokenizer.rules.inline.anyPunctuation.exec(a)) != null; )
      a = a.slice(0, o.index) + "++" + a.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; e; )
      if (l || (c = ""), l = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((d) => (i = d.call({ lexer: this }, e, t)) ? (e = e.substring(i.raw.length), t.push(i), !0) : !1))) {
        if (i = this.tokenizer.escape(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.tag(e)) {
          e = e.substring(i.raw.length), r = t[t.length - 1], r && i.type === "text" && r.type === "text" ? (r.raw += i.raw, r.text += i.text) : t.push(i);
          continue;
        }
        if (i = this.tokenizer.link(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.reflink(e, this.tokens.links)) {
          e = e.substring(i.raw.length), r = t[t.length - 1], r && i.type === "text" && r.type === "text" ? (r.raw += i.raw, r.text += i.text) : t.push(i);
          continue;
        }
        if (i = this.tokenizer.emStrong(e, a, c)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.codespan(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.br(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.del(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.autolink(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (!this.state.inLink && (i = this.tokenizer.url(e))) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (s = e, this.options.extensions && this.options.extensions.startInline) {
          let d = 1 / 0;
          const u = e.slice(1);
          let h;
          this.options.extensions.startInline.forEach((p) => {
            h = p.call({ lexer: this }, u), typeof h == "number" && h >= 0 && (d = Math.min(d, h));
          }), d < 1 / 0 && d >= 0 && (s = e.substring(0, d + 1));
        }
        if (i = this.tokenizer.inlineText(s)) {
          e = e.substring(i.raw.length), i.raw.slice(-1) !== "_" && (c = i.raw.slice(-1)), l = !0, r = t[t.length - 1], r && r.type === "text" ? (r.raw += i.raw, r.text += i.text) : t.push(i);
          continue;
        }
        if (e) {
          const d = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(d);
            break;
          } else
            throw new Error(d);
        }
      }
    return t;
  }
}
class Yr {
  constructor(e) {
    $(this, "options");
    this.options = e || jn;
  }
  code(e, t, i) {
    var s;
    const r = (s = (t || "").match(/^\S*/)) == null ? void 0 : s[0];
    return e = e.replace(/\n$/, "") + `
`, r ? '<pre><code class="language-' + tt(r) + '">' + (i ? e : tt(e, !0)) + `</code></pre>
` : "<pre><code>" + (i ? e : tt(e, !0)) + `</code></pre>
`;
  }
  blockquote(e) {
    return `<blockquote>
${e}</blockquote>
`;
  }
  html(e, t) {
    return e;
  }
  heading(e, t, i) {
    return `<h${t}>${e}</h${t}>
`;
  }
  hr() {
    return `<hr>
`;
  }
  list(e, t, i) {
    const r = t ? "ol" : "ul", s = t && i !== 1 ? ' start="' + i + '"' : "";
    return "<" + r + s + `>
` + e + "</" + r + `>
`;
  }
  listitem(e, t, i) {
    return `<li>${e}</li>
`;
  }
  checkbox(e) {
    return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph(e) {
    return `<p>${e}</p>
`;
  }
  table(e, t) {
    return t && (t = `<tbody>${t}</tbody>`), `<table>
<thead>
` + e + `</thead>
` + t + `</table>
`;
  }
  tablerow(e) {
    return `<tr>
${e}</tr>
`;
  }
  tablecell(e, t) {
    const i = t.header ? "th" : "td";
    return (t.align ? `<${i} align="${t.align}">` : `<${i}>`) + e + `</${i}>
`;
  }
  /**
   * span level renderer
   */
  strong(e) {
    return `<strong>${e}</strong>`;
  }
  em(e) {
    return `<em>${e}</em>`;
  }
  codespan(e) {
    return `<code>${e}</code>`;
  }
  br() {
    return "<br>";
  }
  del(e) {
    return `<del>${e}</del>`;
  }
  link(e, t, i) {
    const r = to(e);
    if (r === null)
      return i;
    e = r;
    let s = '<a href="' + e + '"';
    return t && (s += ' title="' + t + '"'), s += ">" + i + "</a>", s;
  }
  image(e, t, i) {
    const r = to(e);
    if (r === null)
      return i;
    e = r;
    let s = `<img src="${e}" alt="${i}"`;
    return t && (s += ` title="${t}"`), s += ">", s;
  }
  text(e) {
    return e;
  }
}
class pa {
  // no need for block level renderers
  strong(e) {
    return e;
  }
  em(e) {
    return e;
  }
  codespan(e) {
    return e;
  }
  del(e) {
    return e;
  }
  html(e) {
    return e;
  }
  text(e) {
    return e;
  }
  link(e, t, i) {
    return "" + i;
  }
  image(e, t, i) {
    return "" + i;
  }
  br() {
    return "";
  }
}
class Dt {
  constructor(e) {
    $(this, "options");
    $(this, "renderer");
    $(this, "textRenderer");
    this.options = e || jn, this.options.renderer = this.options.renderer || new Yr(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new pa();
  }
  /**
   * Static Parse Method
   */
  static parse(e, t) {
    return new Dt(t).parse(e);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(e, t) {
    return new Dt(t).parseInline(e);
  }
  /**
   * Parse Loop
   */
  parse(e, t = !0) {
    let i = "";
    for (let r = 0; r < e.length; r++) {
      const s = e[r];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[s.type]) {
        const a = s, o = this.options.extensions.renderers[a.type].call({ parser: this }, a);
        if (o !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(a.type)) {
          i += o || "";
          continue;
        }
      }
      switch (s.type) {
        case "space":
          continue;
        case "hr": {
          i += this.renderer.hr();
          continue;
        }
        case "heading": {
          const a = s;
          i += this.renderer.heading(this.parseInline(a.tokens), a.depth, Ru(this.parseInline(a.tokens, this.textRenderer)));
          continue;
        }
        case "code": {
          const a = s;
          i += this.renderer.code(a.text, a.lang, !!a.escaped);
          continue;
        }
        case "table": {
          const a = s;
          let o = "", l = "";
          for (let d = 0; d < a.header.length; d++)
            l += this.renderer.tablecell(this.parseInline(a.header[d].tokens), { header: !0, align: a.align[d] });
          o += this.renderer.tablerow(l);
          let c = "";
          for (let d = 0; d < a.rows.length; d++) {
            const u = a.rows[d];
            l = "";
            for (let h = 0; h < u.length; h++)
              l += this.renderer.tablecell(this.parseInline(u[h].tokens), { header: !1, align: a.align[h] });
            c += this.renderer.tablerow(l);
          }
          i += this.renderer.table(o, c);
          continue;
        }
        case "blockquote": {
          const a = s, o = this.parse(a.tokens);
          i += this.renderer.blockquote(o);
          continue;
        }
        case "list": {
          const a = s, o = a.ordered, l = a.start, c = a.loose;
          let d = "";
          for (let u = 0; u < a.items.length; u++) {
            const h = a.items[u], p = h.checked, k = h.task;
            let b = "";
            if (h.task) {
              const m = this.renderer.checkbox(!!p);
              c ? h.tokens.length > 0 && h.tokens[0].type === "paragraph" ? (h.tokens[0].text = m + " " + h.tokens[0].text, h.tokens[0].tokens && h.tokens[0].tokens.length > 0 && h.tokens[0].tokens[0].type === "text" && (h.tokens[0].tokens[0].text = m + " " + h.tokens[0].tokens[0].text)) : h.tokens.unshift({
                type: "text",
                text: m + " "
              }) : b += m + " ";
            }
            b += this.parse(h.tokens, c), d += this.renderer.listitem(b, k, !!p);
          }
          i += this.renderer.list(d, o, l);
          continue;
        }
        case "html": {
          const a = s;
          i += this.renderer.html(a.text, a.block);
          continue;
        }
        case "paragraph": {
          const a = s;
          i += this.renderer.paragraph(this.parseInline(a.tokens));
          continue;
        }
        case "text": {
          let a = s, o = a.tokens ? this.parseInline(a.tokens) : a.text;
          for (; r + 1 < e.length && e[r + 1].type === "text"; )
            a = e[++r], o += `
` + (a.tokens ? this.parseInline(a.tokens) : a.text);
          i += t ? this.renderer.paragraph(o) : o;
          continue;
        }
        default: {
          const a = 'Token with "' + s.type + '" type was not found.';
          if (this.options.silent)
            return console.error(a), "";
          throw new Error(a);
        }
      }
    }
    return i;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(e, t) {
    t = t || this.renderer;
    let i = "";
    for (let r = 0; r < e.length; r++) {
      const s = e[r];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[s.type]) {
        const a = this.options.extensions.renderers[s.type].call({ parser: this }, s);
        if (a !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(s.type)) {
          i += a || "";
          continue;
        }
      }
      switch (s.type) {
        case "escape": {
          const a = s;
          i += t.text(a.text);
          break;
        }
        case "html": {
          const a = s;
          i += t.html(a.text);
          break;
        }
        case "link": {
          const a = s;
          i += t.link(a.href, a.title, this.parseInline(a.tokens, t));
          break;
        }
        case "image": {
          const a = s;
          i += t.image(a.href, a.title, a.text);
          break;
        }
        case "strong": {
          const a = s;
          i += t.strong(this.parseInline(a.tokens, t));
          break;
        }
        case "em": {
          const a = s;
          i += t.em(this.parseInline(a.tokens, t));
          break;
        }
        case "codespan": {
          const a = s;
          i += t.codespan(a.text);
          break;
        }
        case "br": {
          i += t.br();
          break;
        }
        case "del": {
          const a = s;
          i += t.del(this.parseInline(a.tokens, t));
          break;
        }
        case "text": {
          const a = s;
          i += t.text(a.text);
          break;
        }
        default: {
          const a = 'Token with "' + s.type + '" type was not found.';
          if (this.options.silent)
            return console.error(a), "";
          throw new Error(a);
        }
      }
    }
    return i;
  }
}
class sr {
  constructor(e) {
    $(this, "options");
    this.options = e || jn;
  }
  /**
   * Process markdown before marked
   */
  preprocess(e) {
    return e;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(e) {
    return e;
  }
  /**
   * Process all tokens before walk tokens
   */
  processAllTokens(e) {
    return e;
  }
}
$(sr, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
]));
var $n, Hs, Kl;
class og {
  constructor(...e) {
    M(this, $n);
    $(this, "defaults", ca());
    $(this, "options", this.setOptions);
    $(this, "parse", ge(this, $n, Hs).call(this, Nt.lex, Dt.parse));
    $(this, "parseInline", ge(this, $n, Hs).call(this, Nt.lexInline, Dt.parseInline));
    $(this, "Parser", Dt);
    $(this, "Renderer", Yr);
    $(this, "TextRenderer", pa);
    $(this, "Lexer", Nt);
    $(this, "Tokenizer", Gr);
    $(this, "Hooks", sr);
    this.use(...e);
  }
  /**
   * Run callback for every token
   */
  walkTokens(e, t) {
    var r, s;
    let i = [];
    for (const a of e)
      switch (i = i.concat(t.call(this, a)), a.type) {
        case "table": {
          const o = a;
          for (const l of o.header)
            i = i.concat(this.walkTokens(l.tokens, t));
          for (const l of o.rows)
            for (const c of l)
              i = i.concat(this.walkTokens(c.tokens, t));
          break;
        }
        case "list": {
          const o = a;
          i = i.concat(this.walkTokens(o.items, t));
          break;
        }
        default: {
          const o = a;
          (s = (r = this.defaults.extensions) == null ? void 0 : r.childTokens) != null && s[o.type] ? this.defaults.extensions.childTokens[o.type].forEach((l) => {
            const c = o[l].flat(1 / 0);
            i = i.concat(this.walkTokens(c, t));
          }) : o.tokens && (i = i.concat(this.walkTokens(o.tokens, t)));
        }
      }
    return i;
  }
  use(...e) {
    const t = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return e.forEach((i) => {
      const r = { ...i };
      if (r.async = this.defaults.async || r.async || !1, i.extensions && (i.extensions.forEach((s) => {
        if (!s.name)
          throw new Error("extension name required");
        if ("renderer" in s) {
          const a = t.renderers[s.name];
          a ? t.renderers[s.name] = function(...o) {
            let l = s.renderer.apply(this, o);
            return l === !1 && (l = a.apply(this, o)), l;
          } : t.renderers[s.name] = s.renderer;
        }
        if ("tokenizer" in s) {
          if (!s.level || s.level !== "block" && s.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          const a = t[s.level];
          a ? a.unshift(s.tokenizer) : t[s.level] = [s.tokenizer], s.start && (s.level === "block" ? t.startBlock ? t.startBlock.push(s.start) : t.startBlock = [s.start] : s.level === "inline" && (t.startInline ? t.startInline.push(s.start) : t.startInline = [s.start]));
        }
        "childTokens" in s && s.childTokens && (t.childTokens[s.name] = s.childTokens);
      }), r.extensions = t), i.renderer) {
        const s = this.defaults.renderer || new Yr(this.defaults);
        for (const a in i.renderer) {
          if (!(a in s))
            throw new Error(`renderer '${a}' does not exist`);
          if (a === "options")
            continue;
          const o = a, l = i.renderer[o], c = s[o];
          s[o] = (...d) => {
            let u = l.apply(s, d);
            return u === !1 && (u = c.apply(s, d)), u || "";
          };
        }
        r.renderer = s;
      }
      if (i.tokenizer) {
        const s = this.defaults.tokenizer || new Gr(this.defaults);
        for (const a in i.tokenizer) {
          if (!(a in s))
            throw new Error(`tokenizer '${a}' does not exist`);
          if (["options", "rules", "lexer"].includes(a))
            continue;
          const o = a, l = i.tokenizer[o], c = s[o];
          s[o] = (...d) => {
            let u = l.apply(s, d);
            return u === !1 && (u = c.apply(s, d)), u;
          };
        }
        r.tokenizer = s;
      }
      if (i.hooks) {
        const s = this.defaults.hooks || new sr();
        for (const a in i.hooks) {
          if (!(a in s))
            throw new Error(`hook '${a}' does not exist`);
          if (a === "options")
            continue;
          const o = a, l = i.hooks[o], c = s[o];
          sr.passThroughHooks.has(a) ? s[o] = (d) => {
            if (this.defaults.async)
              return Promise.resolve(l.call(s, d)).then((h) => c.call(s, h));
            const u = l.call(s, d);
            return c.call(s, u);
          } : s[o] = (...d) => {
            let u = l.apply(s, d);
            return u === !1 && (u = c.apply(s, d)), u;
          };
        }
        r.hooks = s;
      }
      if (i.walkTokens) {
        const s = this.defaults.walkTokens, a = i.walkTokens;
        r.walkTokens = function(o) {
          let l = [];
          return l.push(a.call(this, o)), s && (l = l.concat(s.call(this, o))), l;
        };
      }
      this.defaults = { ...this.defaults, ...r };
    }), this;
  }
  setOptions(e) {
    return this.defaults = { ...this.defaults, ...e }, this;
  }
  lexer(e, t) {
    return Nt.lex(e, t ?? this.defaults);
  }
  parser(e, t) {
    return Dt.parse(e, t ?? this.defaults);
  }
}
$n = new WeakSet(), Hs = function(e, t) {
  return (i, r) => {
    const s = { ...r }, a = { ...this.defaults, ...s };
    this.defaults.async === !0 && s.async === !1 && (a.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), a.async = !0);
    const o = ge(this, $n, Kl).call(this, !!a.silent, !!a.async);
    if (typeof i > "u" || i === null)
      return o(new Error("marked(): input parameter is undefined or null"));
    if (typeof i != "string")
      return o(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(i) + ", string expected"));
    if (a.hooks && (a.hooks.options = a), a.async)
      return Promise.resolve(a.hooks ? a.hooks.preprocess(i) : i).then((l) => e(l, a)).then((l) => a.hooks ? a.hooks.processAllTokens(l) : l).then((l) => a.walkTokens ? Promise.all(this.walkTokens(l, a.walkTokens)).then(() => l) : l).then((l) => t(l, a)).then((l) => a.hooks ? a.hooks.postprocess(l) : l).catch(o);
    try {
      a.hooks && (i = a.hooks.preprocess(i));
      let l = e(i, a);
      a.hooks && (l = a.hooks.processAllTokens(l)), a.walkTokens && this.walkTokens(l, a.walkTokens);
      let c = t(l, a);
      return a.hooks && (c = a.hooks.postprocess(c)), c;
    } catch (l) {
      return o(l);
    }
  };
}, Kl = function(e, t) {
  return (i) => {
    if (i.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
      const r = "<p>An error occurred:</p><pre>" + tt(i.message + "", !0) + "</pre>";
      return t ? Promise.resolve(r) : r;
    }
    if (t)
      return Promise.reject(i);
    throw i;
  };
};
const zn = new og();
function ie(n, e) {
  return zn.parse(n, e);
}
ie.options = ie.setOptions = function(n) {
  return zn.setOptions(n), ie.defaults = zn.defaults, Hl(ie.defaults), ie;
};
ie.getDefaults = ca;
ie.defaults = jn;
ie.use = function(...n) {
  return zn.use(...n), ie.defaults = zn.defaults, Hl(ie.defaults), ie;
};
ie.walkTokens = function(n, e) {
  return zn.walkTokens(n, e);
};
ie.parseInline = zn.parseInline;
ie.Parser = Dt;
ie.parser = Dt.parse;
ie.Renderer = Yr;
ie.TextRenderer = pa;
ie.Lexer = Nt;
ie.lexer = Nt.lex;
ie.Tokenizer = Gr;
ie.Hooks = sr;
ie.parse = ie;
ie.options;
ie.setOptions;
ie.use;
ie.walkTokens;
ie.parseInline;
Dt.parse;
Nt.lex;
/*! @license DOMPurify 3.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.1/LICENSE */
const {
  entries: Jl,
  setPrototypeOf: so,
  isFrozen: lg,
  getPrototypeOf: cg,
  getOwnPropertyDescriptor: dg
} = Object;
let {
  freeze: He,
  seal: ht,
  create: Ws
} = Object, {
  apply: Bs,
  construct: js
} = typeof Reflect < "u" && Reflect;
He || (He = function(e) {
  return e;
});
ht || (ht = function(e) {
  return e;
});
Bs || (Bs = function(e, t) {
  for (var i = arguments.length, r = new Array(i > 2 ? i - 2 : 0), s = 2; s < i; s++)
    r[s - 2] = arguments[s];
  return e.apply(t, r);
});
js || (js = function(e) {
  for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    i[r - 1] = arguments[r];
  return new e(...i);
});
const Lr = We(Array.prototype.forEach), ug = We(Array.prototype.lastIndexOf), ao = We(Array.prototype.pop), Bi = We(Array.prototype.push), gg = We(Array.prototype.splice), $r = We(String.prototype.toLowerCase), xs = We(String.prototype.toString), _s = We(String.prototype.match), ji = We(String.prototype.replace), fg = We(String.prototype.indexOf), hg = We(String.prototype.trim), mt = We(Object.prototype.hasOwnProperty), Pe = We(RegExp.prototype.test), Gi = pg(TypeError);
function We(n) {
  return function(e) {
    e instanceof RegExp && (e.lastIndex = 0);
    for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
      i[r - 1] = arguments[r];
    return Bs(n, e, i);
  };
}
function pg(n) {
  return function() {
    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
      t[i] = arguments[i];
    return js(n, t);
  };
}
function H(n, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : $r;
  so && so(n, null);
  let i = e.length;
  for (; i--; ) {
    let r = e[i];
    if (typeof r == "string") {
      const s = t(r);
      s !== r && (lg(e) || (e[i] = s), r = s);
    }
    n[r] = !0;
  }
  return n;
}
function mg(n) {
  for (let e = 0; e < n.length; e++)
    mt(n, e) || (n[e] = null);
  return n;
}
function Ct(n) {
  const e = Ws(null);
  for (const [t, i] of Jl(n))
    mt(n, t) && (Array.isArray(i) ? e[t] = mg(i) : i && typeof i == "object" && i.constructor === Object ? e[t] = Ct(i) : e[t] = i);
  return e;
}
function Vi(n, e) {
  for (; n !== null; ) {
    const i = dg(n, e);
    if (i) {
      if (i.get)
        return We(i.get);
      if (typeof i.value == "function")
        return We(i.value);
    }
    n = cg(n);
  }
  function t() {
    return null;
  }
  return t;
}
const oo = He(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ks = He(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Ss = He(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), vg = He(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ts = He(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), bg = He(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), lo = He(["#text"]), co = He(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), Es = He(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), uo = He(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Or = He(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), wg = ht(/\{\{[\w\W]*|[\w\W]*\}\}/gm), yg = ht(/<%[\w\W]*|[\w\W]*%>/gm), xg = ht(/\$\{[\w\W]*/gm), _g = ht(/^data-[\-\w.\u00B7-\uFFFF]+$/), kg = ht(/^aria-[\-\w]+$/), ec = ht(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Sg = ht(/^(?:\w+script|data):/i), Tg = ht(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), tc = ht(/^html$/i), Eg = ht(/^[a-z][.\w]*(-[.\w]+)+$/i);
var go = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: kg,
  ATTR_WHITESPACE: Tg,
  CUSTOM_ELEMENT: Eg,
  DATA_ATTR: _g,
  DOCTYPE_NAME: tc,
  ERB_EXPR: yg,
  IS_ALLOWED_URI: ec,
  IS_SCRIPT_OR_DATA: Sg,
  MUSTACHE_EXPR: wg,
  TMPLIT_EXPR: xg
});
const Yi = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, Cg = function() {
  return typeof window > "u" ? null : window;
}, Ag = function(e, t) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let i = null;
  const r = "data-tt-policy-suffix";
  t && t.hasAttribute(r) && (i = t.getAttribute(r));
  const s = "dompurify" + (i ? "#" + i : "");
  try {
    return e.createPolicy(s, {
      createHTML(a) {
        return a;
      },
      createScriptURL(a) {
        return a;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + s + " could not be created."), null;
  }
}, fo = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
function nc() {
  let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Cg();
  const e = (R) => nc(R);
  if (e.version = "3.3.1", e.removed = [], !n || !n.document || n.document.nodeType !== Yi.document || !n.Element)
    return e.isSupported = !1, e;
  let {
    document: t
  } = n;
  const i = t, r = i.currentScript, {
    DocumentFragment: s,
    HTMLTemplateElement: a,
    Node: o,
    Element: l,
    NodeFilter: c,
    NamedNodeMap: d = n.NamedNodeMap || n.MozNamedAttrMap,
    HTMLFormElement: u,
    DOMParser: h,
    trustedTypes: p
  } = n, k = l.prototype, b = Vi(k, "cloneNode"), m = Vi(k, "remove"), T = Vi(k, "nextSibling"), z = Vi(k, "childNodes"), w = Vi(k, "parentNode");
  if (typeof a == "function") {
    const R = t.createElement("template");
    R.content && R.content.ownerDocument && (t = R.content.ownerDocument);
  }
  let y, L = "";
  const {
    implementation: G,
    createNodeIterator: q,
    createDocumentFragment: oe,
    getElementsByTagName: de
  } = t, {
    importNode: C
  } = i;
  let N = fo();
  e.isSupported = typeof Jl == "function" && typeof w == "function" && G && G.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: X,
    ERB_EXPR: le,
    TMPLIT_EXPR: he,
    DATA_ATTR: _e,
    ARIA_ATTR: Xe,
    IS_SCRIPT_OR_DATA: Wt,
    ATTR_WHITESPACE: Bt,
    CUSTOM_ELEMENT: Ce
  } = go;
  let {
    IS_ALLOWED_URI: S
  } = go, I = null;
  const te = H({}, [...oo, ...ks, ...Ss, ...Ts, ...lo]);
  let K = null;
  const bn = H({}, [...co, ...Es, ...uo, ...Or]);
  let ne = Object.seal(Ws(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), Ze = null, jt = null;
  const x = Object.seal(Ws(null, {
    tagCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    }
  }));
  let O = !0, D = !0, ke = !1, St = !0, Gt = !1, Gn = !0, Vt = !1, qi = !1, Ui = !1, Ee = !1, Be = !1, Vn = !1, xr = !0, _r = !1;
  const ln = "user-content-";
  let Yt = !0, Qt = !1, Yn = {}, Tt = null;
  const ds = H({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let ya = null;
  const xa = H({}, ["audio", "video", "img", "source", "image", "track"]);
  let us = null;
  const _a = H({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), kr = "http://www.w3.org/1998/Math/MathML", Sr = "http://www.w3.org/2000/svg", Xt = "http://www.w3.org/1999/xhtml";
  let Qn = Xt, gs = !1, fs = null;
  const pc = H({}, [kr, Sr, Xt], xs);
  let Tr = H({}, ["mi", "mo", "mn", "ms", "mtext"]), Er = H({}, ["annotation-xml"]);
  const mc = H({}, ["title", "style", "font", "a", "script"]);
  let Fi = null;
  const vc = ["application/xhtml+xml", "text/html"], bc = "text/html";
  let Se = null, Xn = null;
  const wc = t.createElement("form"), ka = function(g) {
    return g instanceof RegExp || g instanceof Function;
  }, hs = function() {
    let g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Xn && Xn === g)) {
      if ((!g || typeof g != "object") && (g = {}), g = Ct(g), Fi = // eslint-disable-next-line unicorn/prefer-includes
      vc.indexOf(g.PARSER_MEDIA_TYPE) === -1 ? bc : g.PARSER_MEDIA_TYPE, Se = Fi === "application/xhtml+xml" ? xs : $r, I = mt(g, "ALLOWED_TAGS") ? H({}, g.ALLOWED_TAGS, Se) : te, K = mt(g, "ALLOWED_ATTR") ? H({}, g.ALLOWED_ATTR, Se) : bn, fs = mt(g, "ALLOWED_NAMESPACES") ? H({}, g.ALLOWED_NAMESPACES, xs) : pc, us = mt(g, "ADD_URI_SAFE_ATTR") ? H(Ct(_a), g.ADD_URI_SAFE_ATTR, Se) : _a, ya = mt(g, "ADD_DATA_URI_TAGS") ? H(Ct(xa), g.ADD_DATA_URI_TAGS, Se) : xa, Tt = mt(g, "FORBID_CONTENTS") ? H({}, g.FORBID_CONTENTS, Se) : ds, Ze = mt(g, "FORBID_TAGS") ? H({}, g.FORBID_TAGS, Se) : Ct({}), jt = mt(g, "FORBID_ATTR") ? H({}, g.FORBID_ATTR, Se) : Ct({}), Yn = mt(g, "USE_PROFILES") ? g.USE_PROFILES : !1, O = g.ALLOW_ARIA_ATTR !== !1, D = g.ALLOW_DATA_ATTR !== !1, ke = g.ALLOW_UNKNOWN_PROTOCOLS || !1, St = g.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Gt = g.SAFE_FOR_TEMPLATES || !1, Gn = g.SAFE_FOR_XML !== !1, Vt = g.WHOLE_DOCUMENT || !1, Ee = g.RETURN_DOM || !1, Be = g.RETURN_DOM_FRAGMENT || !1, Vn = g.RETURN_TRUSTED_TYPE || !1, Ui = g.FORCE_BODY || !1, xr = g.SANITIZE_DOM !== !1, _r = g.SANITIZE_NAMED_PROPS || !1, Yt = g.KEEP_CONTENT !== !1, Qt = g.IN_PLACE || !1, S = g.ALLOWED_URI_REGEXP || ec, Qn = g.NAMESPACE || Xt, Tr = g.MATHML_TEXT_INTEGRATION_POINTS || Tr, Er = g.HTML_INTEGRATION_POINTS || Er, ne = g.CUSTOM_ELEMENT_HANDLING || {}, g.CUSTOM_ELEMENT_HANDLING && ka(g.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (ne.tagNameCheck = g.CUSTOM_ELEMENT_HANDLING.tagNameCheck), g.CUSTOM_ELEMENT_HANDLING && ka(g.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (ne.attributeNameCheck = g.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), g.CUSTOM_ELEMENT_HANDLING && typeof g.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (ne.allowCustomizedBuiltInElements = g.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Gt && (D = !1), Be && (Ee = !0), Yn && (I = H({}, lo), K = [], Yn.html === !0 && (H(I, oo), H(K, co)), Yn.svg === !0 && (H(I, ks), H(K, Es), H(K, Or)), Yn.svgFilters === !0 && (H(I, Ss), H(K, Es), H(K, Or)), Yn.mathMl === !0 && (H(I, Ts), H(K, uo), H(K, Or))), g.ADD_TAGS && (typeof g.ADD_TAGS == "function" ? x.tagCheck = g.ADD_TAGS : (I === te && (I = Ct(I)), H(I, g.ADD_TAGS, Se))), g.ADD_ATTR && (typeof g.ADD_ATTR == "function" ? x.attributeCheck = g.ADD_ATTR : (K === bn && (K = Ct(K)), H(K, g.ADD_ATTR, Se))), g.ADD_URI_SAFE_ATTR && H(us, g.ADD_URI_SAFE_ATTR, Se), g.FORBID_CONTENTS && (Tt === ds && (Tt = Ct(Tt)), H(Tt, g.FORBID_CONTENTS, Se)), g.ADD_FORBID_CONTENTS && (Tt === ds && (Tt = Ct(Tt)), H(Tt, g.ADD_FORBID_CONTENTS, Se)), Yt && (I["#text"] = !0), Vt && H(I, ["html", "head", "body"]), I.table && (H(I, ["tbody"]), delete Ze.tbody), g.TRUSTED_TYPES_POLICY) {
        if (typeof g.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Gi('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof g.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Gi('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        y = g.TRUSTED_TYPES_POLICY, L = y.createHTML("");
      } else
        y === void 0 && (y = Ag(p, r)), y !== null && typeof L == "string" && (L = y.createHTML(""));
      He && He(g), Xn = g;
    }
  }, Sa = H({}, [...ks, ...Ss, ...vg]), Ta = H({}, [...Ts, ...bg]), yc = function(g) {
    let _ = w(g);
    (!_ || !_.tagName) && (_ = {
      namespaceURI: Qn,
      tagName: "template"
    });
    const A = $r(g.tagName), pe = $r(_.tagName);
    return fs[g.namespaceURI] ? g.namespaceURI === Sr ? _.namespaceURI === Xt ? A === "svg" : _.namespaceURI === kr ? A === "svg" && (pe === "annotation-xml" || Tr[pe]) : !!Sa[A] : g.namespaceURI === kr ? _.namespaceURI === Xt ? A === "math" : _.namespaceURI === Sr ? A === "math" && Er[pe] : !!Ta[A] : g.namespaceURI === Xt ? _.namespaceURI === Sr && !Er[pe] || _.namespaceURI === kr && !Tr[pe] ? !1 : !Ta[A] && (mc[A] || !Sa[A]) : !!(Fi === "application/xhtml+xml" && fs[g.namespaceURI]) : !1;
  }, Et = function(g) {
    Bi(e.removed, {
      element: g
    });
    try {
      w(g).removeChild(g);
    } catch {
      m(g);
    }
  }, wn = function(g, _) {
    try {
      Bi(e.removed, {
        attribute: _.getAttributeNode(g),
        from: _
      });
    } catch {
      Bi(e.removed, {
        attribute: null,
        from: _
      });
    }
    if (_.removeAttribute(g), g === "is")
      if (Ee || Be)
        try {
          Et(_);
        } catch {
        }
      else
        try {
          _.setAttribute(g, "");
        } catch {
        }
  }, Ea = function(g) {
    let _ = null, A = null;
    if (Ui)
      g = "<remove></remove>" + g;
    else {
      const be = _s(g, /^[\r\n\t ]+/);
      A = be && be[0];
    }
    Fi === "application/xhtml+xml" && Qn === Xt && (g = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + g + "</body></html>");
    const pe = y ? y.createHTML(g) : g;
    if (Qn === Xt)
      try {
        _ = new h().parseFromString(pe, Fi);
      } catch {
      }
    if (!_ || !_.documentElement) {
      _ = G.createDocument(Qn, "template", null);
      try {
        _.documentElement.innerHTML = gs ? L : pe;
      } catch {
      }
    }
    const Le = _.body || _.documentElement;
    return g && A && Le.insertBefore(t.createTextNode(A), Le.childNodes[0] || null), Qn === Xt ? de.call(_, Vt ? "html" : "body")[0] : Vt ? _.documentElement : Le;
  }, Ca = function(g) {
    return q.call(
      g.ownerDocument || g,
      g,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, ps = function(g) {
    return g instanceof u && (typeof g.nodeName != "string" || typeof g.textContent != "string" || typeof g.removeChild != "function" || !(g.attributes instanceof d) || typeof g.removeAttribute != "function" || typeof g.setAttribute != "function" || typeof g.namespaceURI != "string" || typeof g.insertBefore != "function" || typeof g.hasChildNodes != "function");
  }, Aa = function(g) {
    return typeof o == "function" && g instanceof o;
  };
  function Zt(R, g, _) {
    Lr(R, (A) => {
      A.call(e, g, _, Xn);
    });
  }
  const Ia = function(g) {
    let _ = null;
    if (Zt(N.beforeSanitizeElements, g, null), ps(g))
      return Et(g), !0;
    const A = Se(g.nodeName);
    if (Zt(N.uponSanitizeElement, g, {
      tagName: A,
      allowedTags: I
    }), Gn && g.hasChildNodes() && !Aa(g.firstElementChild) && Pe(/<[/\w!]/g, g.innerHTML) && Pe(/<[/\w!]/g, g.textContent) || g.nodeType === Yi.progressingInstruction || Gn && g.nodeType === Yi.comment && Pe(/<[/\w]/g, g.data))
      return Et(g), !0;
    if (!(x.tagCheck instanceof Function && x.tagCheck(A)) && (!I[A] || Ze[A])) {
      if (!Ze[A] && Ra(A) && (ne.tagNameCheck instanceof RegExp && Pe(ne.tagNameCheck, A) || ne.tagNameCheck instanceof Function && ne.tagNameCheck(A)))
        return !1;
      if (Yt && !Tt[A]) {
        const pe = w(g) || g.parentNode, Le = z(g) || g.childNodes;
        if (Le && pe) {
          const be = Le.length;
          for (let je = be - 1; je >= 0; --je) {
            const Kt = b(Le[je], !0);
            Kt.__removalCount = (g.__removalCount || 0) + 1, pe.insertBefore(Kt, T(g));
          }
        }
      }
      return Et(g), !0;
    }
    return g instanceof l && !yc(g) || (A === "noscript" || A === "noembed" || A === "noframes") && Pe(/<\/no(script|embed|frames)/i, g.innerHTML) ? (Et(g), !0) : (Gt && g.nodeType === Yi.text && (_ = g.textContent, Lr([X, le, he], (pe) => {
      _ = ji(_, pe, " ");
    }), g.textContent !== _ && (Bi(e.removed, {
      element: g.cloneNode()
    }), g.textContent = _)), Zt(N.afterSanitizeElements, g, null), !1);
  }, Ma = function(g, _, A) {
    if (xr && (_ === "id" || _ === "name") && (A in t || A in wc))
      return !1;
    if (!(D && !jt[_] && Pe(_e, _))) {
      if (!(O && Pe(Xe, _))) {
        if (!(x.attributeCheck instanceof Function && x.attributeCheck(_, g))) {
          if (!K[_] || jt[_]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(Ra(g) && (ne.tagNameCheck instanceof RegExp && Pe(ne.tagNameCheck, g) || ne.tagNameCheck instanceof Function && ne.tagNameCheck(g)) && (ne.attributeNameCheck instanceof RegExp && Pe(ne.attributeNameCheck, _) || ne.attributeNameCheck instanceof Function && ne.attributeNameCheck(_, g)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              _ === "is" && ne.allowCustomizedBuiltInElements && (ne.tagNameCheck instanceof RegExp && Pe(ne.tagNameCheck, A) || ne.tagNameCheck instanceof Function && ne.tagNameCheck(A)))
            ) return !1;
          } else if (!us[_]) {
            if (!Pe(S, ji(A, Bt, ""))) {
              if (!((_ === "src" || _ === "xlink:href" || _ === "href") && g !== "script" && fg(A, "data:") === 0 && ya[g])) {
                if (!(ke && !Pe(Wt, ji(A, Bt, "")))) {
                  if (A)
                    return !1;
                }
              }
            }
          }
        }
      }
    }
    return !0;
  }, Ra = function(g) {
    return g !== "annotation-xml" && _s(g, Ce);
  }, La = function(g) {
    Zt(N.beforeSanitizeAttributes, g, null);
    const {
      attributes: _
    } = g;
    if (!_ || ps(g))
      return;
    const A = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: K,
      forceKeepAttr: void 0
    };
    let pe = _.length;
    for (; pe--; ) {
      const Le = _[pe], {
        name: be,
        namespaceURI: je,
        value: Kt
      } = Le, Zn = Se(be), ms = Kt;
      let Ae = be === "value" ? ms : hg(ms);
      if (A.attrName = Zn, A.attrValue = Ae, A.keepAttr = !0, A.forceKeepAttr = void 0, Zt(N.uponSanitizeAttribute, g, A), Ae = A.attrValue, _r && (Zn === "id" || Zn === "name") && (wn(be, g), Ae = ln + Ae), Gn && Pe(/((--!?|])>)|<\/(style|title|textarea)/i, Ae)) {
        wn(be, g);
        continue;
      }
      if (Zn === "attributename" && _s(Ae, "href")) {
        wn(be, g);
        continue;
      }
      if (A.forceKeepAttr)
        continue;
      if (!A.keepAttr) {
        wn(be, g);
        continue;
      }
      if (!St && Pe(/\/>/i, Ae)) {
        wn(be, g);
        continue;
      }
      Gt && Lr([X, le, he], (Na) => {
        Ae = ji(Ae, Na, " ");
      });
      const Oa = Se(g.nodeName);
      if (!Ma(Oa, Zn, Ae)) {
        wn(be, g);
        continue;
      }
      if (y && typeof p == "object" && typeof p.getAttributeType == "function" && !je)
        switch (p.getAttributeType(Oa, Zn)) {
          case "TrustedHTML": {
            Ae = y.createHTML(Ae);
            break;
          }
          case "TrustedScriptURL": {
            Ae = y.createScriptURL(Ae);
            break;
          }
        }
      if (Ae !== ms)
        try {
          je ? g.setAttributeNS(je, be, Ae) : g.setAttribute(be, Ae), ps(g) ? Et(g) : ao(e.removed);
        } catch {
          wn(be, g);
        }
    }
    Zt(N.afterSanitizeAttributes, g, null);
  }, xc = function R(g) {
    let _ = null;
    const A = Ca(g);
    for (Zt(N.beforeSanitizeShadowDOM, g, null); _ = A.nextNode(); )
      Zt(N.uponSanitizeShadowNode, _, null), Ia(_), La(_), _.content instanceof s && R(_.content);
    Zt(N.afterSanitizeShadowDOM, g, null);
  };
  return e.sanitize = function(R) {
    let g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ = null, A = null, pe = null, Le = null;
    if (gs = !R, gs && (R = "<!-->"), typeof R != "string" && !Aa(R))
      if (typeof R.toString == "function") {
        if (R = R.toString(), typeof R != "string")
          throw Gi("dirty is not a string, aborting");
      } else
        throw Gi("toString is not a function");
    if (!e.isSupported)
      return R;
    if (qi || hs(g), e.removed = [], typeof R == "string" && (Qt = !1), Qt) {
      if (R.nodeName) {
        const Kt = Se(R.nodeName);
        if (!I[Kt] || Ze[Kt])
          throw Gi("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (R instanceof o)
      _ = Ea("<!---->"), A = _.ownerDocument.importNode(R, !0), A.nodeType === Yi.element && A.nodeName === "BODY" || A.nodeName === "HTML" ? _ = A : _.appendChild(A);
    else {
      if (!Ee && !Gt && !Vt && // eslint-disable-next-line unicorn/prefer-includes
      R.indexOf("<") === -1)
        return y && Vn ? y.createHTML(R) : R;
      if (_ = Ea(R), !_)
        return Ee ? null : Vn ? L : "";
    }
    _ && Ui && Et(_.firstChild);
    const be = Ca(Qt ? R : _);
    for (; pe = be.nextNode(); )
      Ia(pe), La(pe), pe.content instanceof s && xc(pe.content);
    if (Qt)
      return R;
    if (Ee) {
      if (Be)
        for (Le = oe.call(_.ownerDocument); _.firstChild; )
          Le.appendChild(_.firstChild);
      else
        Le = _;
      return (K.shadowroot || K.shadowrootmode) && (Le = C.call(i, Le, !0)), Le;
    }
    let je = Vt ? _.outerHTML : _.innerHTML;
    return Vt && I["!doctype"] && _.ownerDocument && _.ownerDocument.doctype && _.ownerDocument.doctype.name && Pe(tc, _.ownerDocument.doctype.name) && (je = "<!DOCTYPE " + _.ownerDocument.doctype.name + `>
` + je), Gt && Lr([X, le, he], (Kt) => {
      je = ji(je, Kt, " ");
    }), y && Vn ? y.createHTML(je) : je;
  }, e.setConfig = function() {
    let R = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    hs(R), qi = !0;
  }, e.clearConfig = function() {
    Xn = null, qi = !1;
  }, e.isValidAttribute = function(R, g, _) {
    Xn || hs({});
    const A = Se(R), pe = Se(g);
    return Ma(A, pe, _);
  }, e.addHook = function(R, g) {
    typeof g == "function" && Bi(N[R], g);
  }, e.removeHook = function(R, g) {
    if (g !== void 0) {
      const _ = ug(N[R], g);
      return _ === -1 ? void 0 : gg(N[R], _, 1)[0];
    }
    return ao(N[R]);
  }, e.removeHooks = function(R) {
    N[R] = [];
  }, e.removeAllHooks = function() {
    N = fo();
  }, e;
}
var ic = nc();
ie.setOptions({
  breaks: !0,
  // Convert \n to <br>
  gfm: !0
  // GitHub Flavored Markdown (tables, strikethrough)
});
ic.addHook("afterSanitizeAttributes", (n) => {
  var e;
  if (n.tagName === "A") {
    if (!n.getAttribute("href")) {
      const i = document.createTextNode(n.textContent || "");
      (e = n.parentNode) == null || e.replaceChild(i, n);
      return;
    }
    n.setAttribute("target", "_blank"), n.setAttribute("rel", "noopener noreferrer");
  }
  if (n.tagName === "IMG") {
    const t = n.getAttribute("src");
    t && t.startsWith("data:") && (/^data:image\/(png|jpeg|jpg|gif|webp);base64,/i.test(t) || n.removeAttribute("src"));
  }
});
function Ig(n) {
  if (!n) return "";
  const e = ie.parse(n);
  return ic.sanitize(e, {
    ALLOWED_TAGS: [
      "p",
      "br",
      "strong",
      "em",
      "del",
      "s",
      "div",
      "span",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "ul",
      "ol",
      "li",
      "blockquote",
      "pre",
      "code",
      "a",
      "table",
      "thead",
      "tbody",
      "tr",
      "th",
      "td",
      "hr",
      "img"
    ],
    // Explicitly block SVG and MathML namespaces which have XSS vectors
    FORBID_TAGS: ["svg", "math"],
    // Note: 'class' intentionally excluded to prevent CSS-based attacks
    ALLOWED_ATTR: ["href", "title", "alt", "src"],
    // Only allow http, https, and mailto schemes - blocks javascript:, data:, etc.
    ALLOWED_URI_REGEXP: /^(?:https?|mailto):/i
  });
}
var Mg = /* @__PURE__ */ ee('<div class="message-content markdown-body svelte-1uqoiy7"><!></div>'), Rg = /* @__PURE__ */ ee('<span class="message-content"> </span>'), Lg = /* @__PURE__ */ ee('<span class="sending-indicator svelte-1uqoiy7" aria-label="Sending message" role="status"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svelte-1uqoiy7"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="currentColor" opacity="0.3"></path><path d="M12 2C6.48 2 2 6.48 2 12H4C4 7.58 7.58 4 12 4V2Z" fill="currentColor"><animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite"></animateTransform></path></svg></span>'), Og = /* @__PURE__ */ ee('<span class="failed-indicator svelte-1uqoiy7" aria-label="Message failed to send" role="alert"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svelte-1uqoiy7"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#ef4444"></path><path d="M11 7H13V13H11V7ZM11 15H13V17H11V15Z" fill="#ef4444"></path></svg></span>'), Ng = /* @__PURE__ */ ee('<div role="listitem"><div class="message-bubble svelte-1uqoiy7"><!> <!> <!></div> <div class="message-time svelte-1uqoiy7"> </div></div>');
const Dg = {
  hash: "svelte-1uqoiy7",
  code: `.message.svelte-1uqoiy7 {max-width:85%;display:flex;flex-direction:column;gap:var(--widget-space-xs);
    /* Subtle entrance animation */
    animation: messageFadeIn 0.25s var(--widget-ease-out-expo) backwards;margin-bottom:var(--widget-space-md);}.message.user.svelte-1uqoiy7 {align-self:flex-end;align-items:flex-end;}.message.assistant.svelte-1uqoiy7 {align-self:flex-start;align-items:flex-start;}.message-bubble.svelte-1uqoiy7 {padding:var(--widget-space-sm) var(--widget-space-md);
    /* Asymmetric radius - creates "pointing" effect */border-radius:18px 18px 18px 18px;font-size:var(--widget-font-size-base);line-height:var(--widget-line-height-normal);font-weight:var(--widget-font-weight-normal);word-wrap:break-word;position:relative;display:inline-flex;align-items:flex-start;gap:var(--widget-space-sm);
    /* Multi-layer shadow for depth */box-shadow:var(--widget-shadow-card);
    /* Spring-based transition */transition:transform 0.15s var(--widget-ease-spring),
                box-shadow 0.2s ease;font-family:var(--widget-font-family);border:1px solid var(--widget-border-subtle);}

  /* User bubble - points right */.message.user.svelte-1uqoiy7 .message-bubble:where(.svelte-1uqoiy7) {background:var(--widget-gradient);color:var(--widget-text-inverse);border-color:transparent;
    /* Asymmetric: rounded top, pointed bottom-right */border-radius:18px 18px 4px 18px;box-shadow:var(--widget-shadow-card),
                inset 0 1px 0 rgba(255, 255, 255, 0.1);font-weight:var(--widget-font-weight-medium);}

  /* Assistant bubble - points left */.message.assistant.svelte-1uqoiy7 .message-bubble:where(.svelte-1uqoiy7) {background:var(--widget-surface);color:var(--widget-text);border-color:var(--widget-border);
    /* Asymmetric: rounded top, pointed bottom-left */border-radius:18px 18px 18px 4px;box-shadow:var(--widget-shadow-card);}

  /* Subtle hover effect */.message-bubble.svelte-1uqoiy7:hover {box-shadow:var(--widget-shadow-md);transform:translateY(-1px);}.message-time.svelte-1uqoiy7 {font-size:var(--widget-font-size-xs);color:var(--widget-text-muted);font-weight:var(--widget-font-weight-normal);padding:0 var(--widget-space-sm);margin-top:2px;letter-spacing:var(--widget-letter-spacing-wide);opacity:0.8;}.sending-indicator.svelte-1uqoiy7,
  .failed-indicator.svelte-1uqoiy7 {display:inline-flex;align-items:center;justify-content:center;margin-left:var(--widget-space-sm);padding:var(--widget-space-xs);border-radius:var(--widget-radius-full);background:rgba(255, 255, 255, 0.15);}.sending-indicator.svelte-1uqoiy7 svg:where(.svelte-1uqoiy7),
  .failed-indicator.svelte-1uqoiy7 svg:where(.svelte-1uqoiy7) {width:14px;height:14px;}.message.user.svelte-1uqoiy7 .sending-indicator:where(.svelte-1uqoiy7) svg:where(.svelte-1uqoiy7) {color:rgba(255, 255, 255, 0.8);}.failed-indicator.svelte-1uqoiy7 {background:rgba(239, 68, 68, 0.15);}

  /* Responsive adjustments */
  @media (max-width: 480px) {.message.svelte-1uqoiy7 {max-width:90%;}.message-bubble.svelte-1uqoiy7 {font-size:var(--widget-font-size-base);padding:var(--widget-space-sm) var(--widget-space);}.message-time.svelte-1uqoiy7 {padding:0 var(--widget-space);}
  }

  /* Dark theme adjustments - Use CSS variables for maintainability */[data-theme="dark"] .message.assistant.svelte-1uqoiy7 .message-bubble:where(.svelte-1uqoiy7) {background:var(--widget-surface);border-color:var(--widget-border);}

  /* ============================================
     Markdown Rendering Styles
     ============================================ */.markdown-body.svelte-1uqoiy7 {font-size:var(--widget-font-size-base);line-height:var(--widget-line-height-relaxed);color:var(--widget-text);word-wrap:break-word;}

  /* Headers - use :global() for dynamically rendered content */.markdown-body.svelte-1uqoiy7 h1,
  .markdown-body.svelte-1uqoiy7 h2,
  .markdown-body.svelte-1uqoiy7 h3,
  .markdown-body.svelte-1uqoiy7 h4,
  .markdown-body.svelte-1uqoiy7 h5,
  .markdown-body.svelte-1uqoiy7 h6 {margin-top:var(--widget-space);margin-bottom:var(--widget-space-sm);font-weight:var(--widget-font-weight-semibold);line-height:var(--widget-line-height-tight);color:var(--widget-text);}.markdown-body.svelte-1uqoiy7 h1 {font-size:1.5em;}.markdown-body.svelte-1uqoiy7 h2 {font-size:1.35em;}.markdown-body.svelte-1uqoiy7 h3 {font-size:1.2em;}.markdown-body.svelte-1uqoiy7 h4 {font-size:1.1em;}.markdown-body.svelte-1uqoiy7 h5 {font-size:1.05em;}.markdown-body.svelte-1uqoiy7 h6 {font-size:1em;}

  /* Paragraphs */.markdown-body.svelte-1uqoiy7 p {margin-top:0;margin-bottom:var(--widget-space-sm);}.markdown-body.svelte-1uqoiy7 p:last-child {margin-bottom:0;}

  /* Code blocks */.markdown-body.svelte-1uqoiy7 pre {background:var(--widget-surface-hover);border:1px solid var(--widget-border);border-radius:var(--widget-radius);padding:var(--widget-space-sm);margin:var(--widget-space-sm) 0;overflow-x:auto;font-family:'Courier New', Courier, monospace;font-size:0.9em;line-height:var(--widget-line-height-normal);}.markdown-body.svelte-1uqoiy7 pre code {background:transparent;padding:0;border:none;font-size:inherit;}

  /* Inline code */.markdown-body.svelte-1uqoiy7 code {background:var(--widget-surface-hover);border:1px solid var(--widget-border-subtle);border-radius:3px;padding:2px 6px;font-family:'Courier New', Courier, monospace;font-size:0.9em;color:var(--widget-text);}

  /* Tables */.markdown-body.svelte-1uqoiy7 table {border-collapse:collapse;width:100%;margin:var(--widget-space-sm) 0;font-size:0.95em;}.markdown-body.svelte-1uqoiy7 table th,
  .markdown-body.svelte-1uqoiy7 table td {border:1px solid var(--widget-border);padding:var(--widget-space-xs) var(--widget-space-sm);text-align:left;}.markdown-body.svelte-1uqoiy7 table th {background:var(--widget-surface-hover);font-weight:var(--widget-font-weight-semibold);color:var(--widget-text);}.markdown-body.svelte-1uqoiy7 table tr:nth-child(even) {background:var(--widget-surface);}

  /* Blockquotes */.markdown-body.svelte-1uqoiy7 blockquote {margin:var(--widget-space-sm) 0;padding-left:var(--widget-space);border-left:4px solid var(--widget-primary);color:var(--widget-text-secondary);font-style:italic;}.markdown-body.svelte-1uqoiy7 blockquote p {margin:0;}

  /* Lists */.markdown-body.svelte-1uqoiy7 ul,
  .markdown-body.svelte-1uqoiy7 ol {margin:var(--widget-space-sm) 0;padding-left:var(--widget-space-lg);}.markdown-body.svelte-1uqoiy7 li {margin-bottom:var(--widget-space-xs);}.markdown-body.svelte-1uqoiy7 ul ul,
  .markdown-body.svelte-1uqoiy7 ol ol,
  .markdown-body.svelte-1uqoiy7 ul ol,
  .markdown-body.svelte-1uqoiy7 ol ul {margin-top:var(--widget-space-xs);margin-bottom:0;}

  /* Links */.markdown-body.svelte-1uqoiy7 a {color:var(--widget-primary);text-decoration:underline;transition:color 0.15s ease;}.markdown-body.svelte-1uqoiy7 a:hover {color:var(--widget-primary-hover);}

  /* Horizontal rules */.markdown-body.svelte-1uqoiy7 hr {border:none;border-top:1px solid var(--widget-border);margin:var(--widget-space) 0;}

  /* Strong and emphasis */.markdown-body.svelte-1uqoiy7 strong {font-weight:var(--widget-font-weight-semibold);}.markdown-body.svelte-1uqoiy7 em {font-style:italic;}

  /* Strikethrough */.markdown-body.svelte-1uqoiy7 del {text-decoration:line-through;opacity:0.7;}

  /* Images (if allowed) */.markdown-body.svelte-1uqoiy7 img {max-width:100%;height:auto;border-radius:var(--widget-radius);margin:var(--widget-space-sm) 0;}

  /* Dark theme markdown adjustments */[data-theme="dark"] .markdown-body.svelte-1uqoiy7 {color:var(--widget-text);}[data-theme="dark"] .markdown-body.svelte-1uqoiy7 pre {background:var(--widget-surface-hover);border-color:var(--widget-border);}[data-theme="dark"] .markdown-body.svelte-1uqoiy7 code {background:var(--widget-surface-hover);border-color:var(--widget-border-subtle);}[data-theme="dark"] .markdown-body.svelte-1uqoiy7 table th {background:var(--widget-surface-hover);}[data-theme="dark"] .markdown-body.svelte-1uqoiy7 table td {border-color:var(--widget-border);}`
};
function rc(n, e) {
  xt(e, !0), Ft(n, Dg);
  let t = Q(e, "message", 7);
  function i(w) {
    return new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", hour12: !0 }).format(w);
  }
  const r = /* @__PURE__ */ me(() => t().role === "user"), s = /* @__PURE__ */ me(() => t().role === "assistant" ? Ig(t().content) : t().content);
  var a = {
    get message() {
      return t();
    },
    set message(w) {
      t(w), j();
    }
  }, o = Ng();
  let l;
  var c = se(o), d = se(c);
  {
    var u = (w) => {
      var y = Mg(), L = se(y);
      Pd(L, () => v(s)), re(y), F(w, y);
    }, h = (w) => {
      var y = Rg(), L = se(y, !0);
      re(y), Ye(() => Pn(L, t().content)), F(w, y);
    };
    ve(d, (w) => {
      t().role === "assistant" ? w(u) : w(h, !1);
    });
  }
  var p = ae(d, 2);
  {
    var k = (w) => {
      var y = Lg();
      F(w, y);
    };
    ve(p, (w) => {
      t().status === "sending" && w(k);
    });
  }
  var b = ae(p, 2);
  {
    var m = (w) => {
      var y = Og();
      F(w, y);
    };
    ve(b, (w) => {
      t().status === "failed" && w(m);
    });
  }
  re(c);
  var T = ae(c, 2), z = se(T, !0);
  return re(T), re(o), Ye(
    (w, y) => {
      l = ss(o, 1, "message svelte-1uqoiy7", null, l, { user: v(r), assistant: !v(r) }), Fe(o, "aria-label", v(r) ? "Your message" : "Assistant message"), Fe(T, "aria-label", w), Pn(z, y);
    },
    [
      () => `Sent at ${i(t().timestamp)}`,
      () => i(t().timestamp)
    ]
  ), F(n, o), _t(a);
}
Ht(rc, { message: {} }, [], [], !0);
var Pg = /* @__PURE__ */ ee('<div class="typing-indicator svelte-ej4x60" role="status" aria-live="polite" aria-label="Assistant is typing"><span aria-hidden="true" class="svelte-ej4x60"></span> <span aria-hidden="true" class="svelte-ej4x60"></span> <span aria-hidden="true" class="svelte-ej4x60"></span> <span class="sr-only svelte-ej4x60">Assistant is typing a response</span></div>');
const zg = {
  hash: "svelte-ej4x60",
  code: `.typing-indicator.svelte-ej4x60 {display:inline-flex;align-items:center;justify-content:center;gap:var(--widget-space-xs);padding:var(--widget-space-sm) var(--widget-space-md);background:var(--widget-surface-elevated);border:1px solid var(--widget-border-subtle);border-radius:var(--widget-radius-2xl);box-shadow:var(--widget-shadow-card);margin-bottom:var(--widget-space-md);width:fit-content;
    animation: svelte-ej4x60-fadeInScale 0.3s ease-out;}
  
  @keyframes svelte-ej4x60-fadeInScale {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }.typing-indicator.svelte-ej4x60 span:where(.svelte-ej4x60) {width:6px;height:6px;background:var(--widget-primary);border-radius:var(--widget-radius-full);
    animation: modernTyping 1.4s ease-in-out infinite;animation-fill-mode:none; /* Prevent state persistence when hiding */opacity:0.8;}
  
  /* Staggered animation delays for sequential bouncing effect */.typing-indicator.svelte-ej4x60 span:where(.svelte-ej4x60):nth-child(1) {animation-delay:0s;}.typing-indicator.svelte-ej4x60 span:where(.svelte-ej4x60):nth-child(2) {animation-delay:0.2s;}.typing-indicator.svelte-ej4x60 span:where(.svelte-ej4x60):nth-child(3) {animation-delay:0.4s;}
  
  /* Screen reader only content */.sr-only.svelte-ej4x60 {position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0;}

  /* Dark theme adjustments - Use CSS variables for maintainability */[data-theme="dark"] .typing-indicator.svelte-ej4x60 {background:var(--widget-surface);border-color:var(--widget-border);}[data-theme="dark"] .typing-indicator.svelte-ej4x60 span:where(.svelte-ej4x60) {background:var(--widget-accent-gold); /* Warm gold dots for brand consistency */}`
};
function sc(n, e) {
  xt(e, !0), Ft(n, zg);
  let t = Q(e, "chat", 7, $t);
  var i = {
    get chat() {
      return t();
    },
    set chat(o = $t) {
      t(o), j();
    }
  }, r = sa(), s = an(r);
  {
    var a = (o) => {
      var l = Pg();
      F(o, l);
    };
    ve(s, (o) => {
      t().isTyping && o(a);
    });
  }
  return F(n, r), _t(i);
}
Ht(sc, { chat: {} }, [], [], !0);
var $g = /* @__PURE__ */ ee('<button class="question-chip svelte-otpvm8" type="button"> </button>'), qg = /* @__PURE__ */ ee('<div class="quick-questions svelte-otpvm8" role="group" aria-label="Suggested questions"><div class="section-label svelte-otpvm8">Suggested questions</div> <!></div>');
const Ug = {
  hash: "svelte-otpvm8",
  code: `.quick-questions.svelte-otpvm8 {display:flex;flex-direction:column;align-items:center;align-self:center;gap:10px;padding:var(--widget-space-xs) 0;width:100%;max-width:280px;}.section-label.svelte-otpvm8 {font-size:var(--widget-font-size-xs);color:var(--widget-text-muted);margin-bottom:var(--widget-space-xs);
    animation: svelte-otpvm8-fadeInUp 0.3s var(--widget-ease-out-expo) backwards;animation-delay:2.7s;}.question-chip.svelte-otpvm8 {min-height:44px;padding:var(--widget-space-sm) var(--widget-space-lg);border:1.5px solid var(--widget-primary);border-radius:var(--widget-radius-full);background:transparent;color:var(--widget-primary);cursor:pointer;transition:background var(--widget-transition),
                color var(--widget-transition),
                transform var(--widget-transition),
                box-shadow var(--widget-transition);font-family:var(--widget-font-family);font-size:0.875rem;font-weight:var(--widget-font-weight-medium);text-align:center;
    animation: svelte-otpvm8-fadeInUp 0.3s var(--widget-ease-out-expo) backwards;max-width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}

  @keyframes svelte-otpvm8-fadeInUp {
    from {
      opacity: 0;
      transform: translateY(8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {.section-label.svelte-otpvm8 {
      animation: none !important;}.question-chip.svelte-otpvm8 {
      animation: none !important;}
  }.question-chip.svelte-otpvm8:hover {background:var(--widget-primary);color:var(--widget-text-inverse);transform:translateY(-1px);box-shadow:var(--widget-shadow-md);}.question-chip.svelte-otpvm8:active {transform:translateY(0) scale(0.98);}.question-chip.svelte-otpvm8:focus-visible {outline:2px solid var(--widget-primary);outline-offset:2px;box-shadow:var(--widget-shadow-focus);}.question-chip.svelte-otpvm8:disabled {opacity:0.7;cursor:not-allowed;border:1.5px solid var(--widget-text-muted);color:var(--widget-text-secondary);pointer-events:none;}.question-chip.svelte-otpvm8:disabled:hover,
  .question-chip.svelte-otpvm8:disabled:active {background:transparent;color:var(--widget-text-secondary);transform:none;box-shadow:none;}[data-theme="dark"] .question-chip.svelte-otpvm8:disabled {border:1.5px solid var(--widget-text-muted);color:var(--widget-text-muted);}[data-theme="dark"] .question-chip.svelte-otpvm8 {border-color:var(--widget-primary-light);color:var(--widget-primary-light);}[data-theme="dark"] .question-chip.svelte-otpvm8:hover {background:var(--widget-primary-light);color:var(--widget-text-inverse);}`
};
function ac(n, e) {
  xt(e, !0), Ft(n, Ug);
  const t = [
    "What's Leo's professional background?",
    "What technologies does Leo work with?",
    "How can I get in touch with Leo?"
  ];
  let i = Q(e, "questions", 7, t), r = Q(e, "onsend", 7), s = Q(e, "disabled", 7, !1);
  function a(d) {
    var u;
    s() || (u = r()) == null || u(d);
  }
  var o = {
    get questions() {
      return i();
    },
    set questions(d = t) {
      i(d), j();
    },
    get onsend() {
      return r();
    },
    set onsend(d) {
      r(d), j();
    },
    get disabled() {
      return s();
    },
    set disabled(d = !1) {
      s(d), j();
    }
  }, l = qg(), c = ae(se(l), 2);
  return vl(c, 18, i, (d) => d, (d, u, h) => {
    var p = $g();
    p.__click = () => a(u);
    var k = se(p, !0);
    re(p), Ye(() => {
      p.disabled = s(), Fe(p, "title", u), wl(p, `animation-delay: ${2.8 + v(h) * 0.2}s`), Fe(p, "aria-disabled", s() ? "true" : "false"), Pn(k, u);
    }), F(d, p);
  }), re(l), F(n, l), _t(o);
}
Bn(["click"]);
Ht(ac, { questions: {}, onsend: {}, disabled: {} }, [], [], !0);
var Fg = /* @__PURE__ */ ee('<p class="initial-message svelte-qha2j"> </p>'), Hg = /* @__PURE__ */ ee('<div class="empty-state svelte-qha2j" role="status" aria-label="botbrewers.ca assistant ready"><div class="branding-phase svelte-qha2j" aria-hidden="true"><div class="empty-icon svelte-qha2j"><img alt="" class="brand-logo svelte-qha2j" width="68" height="68"/></div> <span class="brand-name svelte-qha2j">botbrewers.ca</span></div> <!> <!></div>'), Wg = /* @__PURE__ */ ee('<div class="messages-container svelte-qha2j" role="list" aria-label="Messages"><!> <!></div>'), Bg = /* @__PURE__ */ ee('<div class="error-message svelte-qha2j"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-qha2j"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#ef4444" class="svelte-qha2j"></path><path d="M11 7H13V13H11V7ZM11 15H13V17H11V15Z" fill="#ef4444" class="svelte-qha2j"></path></svg> <p class="svelte-qha2j"> </p></div>'), jg = /* @__PURE__ */ ee('<div class="message-list svelte-qha2j" role="log" aria-live="polite" aria-label="Chat conversation"><!> <!></div>');
const Gg = {
  hash: "svelte-qha2j",
  code: `.message-list.svelte-qha2j {flex:1;overflow-y:auto;padding:var(--widget-space-md);display:flex;flex-direction:column;background:var(--widget-gradient-subtle);position:relative;
    /* iOS momentum scrolling */-webkit-overflow-scrolling:touch;}.empty-state.svelte-qha2j {display:flex;flex-direction:column;align-items:center;justify-content:flex-start;flex:1;padding:var(--widget-space-md) var(--widget-space-lg);}

  /* Collapsible wrapper for logo + brand name — shrinks to 0 after fade-out */.branding-phase.svelte-qha2j {display:flex;flex-direction:column;align-items:center;align-self:center;overflow:hidden;padding-top:clamp(48px, 15vh, 120px);
    animation: svelte-qha2j-brandingCollapse 0.5s ease-in 2s forwards;}

  @keyframes svelte-qha2j-brandingCollapse {
    0%   { max-height: 400px; padding-top: clamp(48px, 15vh, 120px); }
    100% { max-height: 0; padding-top: 0; }
  }.empty-icon.svelte-qha2j {width:96px;height:96px;margin-bottom:var(--widget-space-lg);background:#ffffff; /* Always white to match logo background */backdrop-filter:blur(var(--widget-blur));border-radius:var(--widget-radius-2xl);display:flex;align-items:center;justify-content:center;box-shadow:var(--widget-shadow-md);
    animation: svelte-qha2j-logoSequence 2.4s ease-in-out forwards;}

  /* Combined float-then-fade animation — avoids stacking infinite + forwards on same property */
  @keyframes svelte-qha2j-logoSequence {
    0%      { opacity: 1; transform: translateY(0) scale(1); }
    31.25%  { transform: translateY(-8px) scale(1.02); }
    62.5%   { opacity: 1; transform: translateY(0) scale(1); }
    83.33%  { opacity: 1; transform: translateY(0) scale(1); }
    100%    { opacity: 0; transform: translateY(-8px) scale(0.95); }
  }.brand-logo.svelte-qha2j {width:68px;height:68px;object-fit:contain;filter:var(--widget-logo-filter, brightness(1));}.brand-name.svelte-qha2j {font-size:var(--widget-font-size-sm);font-weight:var(--widget-font-weight-medium);color:var(--widget-text-secondary);letter-spacing:0.02em;position:relative;
    animation: svelte-qha2j-brandSequence 2.4s ease-in-out forwards;}

  /* Combined pulse-then-fade animation — avoids stacking infinite + forwards on opacity */
  @keyframes svelte-qha2j-brandSequence {
    0%      { opacity: 0.6; }
    41.67%  { opacity: 1; }
    83.33%  { opacity: 0.6; }
    100%    { opacity: 0; }
  }.initial-message.svelte-qha2j {align-self:flex-start;max-width:280px;margin:var(--widget-space-sm) 0;padding:var(--widget-space-md) var(--widget-space-lg);background:var(--widget-surface);border:1px solid var(--widget-border);border-radius:18px 18px 18px 4px;font-size:var(--widget-font-size-sm);color:var(--widget-text);line-height:1.5;text-align:left;
    animation: svelte-qha2j-messageSlideIn 0.4s var(--widget-ease-out-expo) 2.5s backwards;}

  @keyframes svelte-qha2j-messageSlideIn {
    from {
      opacity: 0;
      transform: translateX(-12px) translateY(4px);
    }
    to {
      opacity: 1;
      transform: translateX(0) translateY(0);
    }
  }.messages-container.svelte-qha2j {display:flex;flex-direction:column;gap:var(--widget-space-md);padding-bottom:var(--widget-space-lg);}.error-message.svelte-qha2j {display:flex;align-items:center;gap:var(--widget-space);padding:var(--widget-space) var(--widget-space-md);background:var(--widget-glass);backdrop-filter:blur(var(--widget-blur));border:1px solid var(--widget-error-light);border-radius:var(--widget-radius-lg);color:var(--widget-error);margin-top:var(--widget-space);box-shadow:var(--widget-shadow);
    animation: slideUp var(--widget-transition-slow);}.error-message.svelte-qha2j svg:where(.svelte-qha2j) {width:20px;height:20px;flex-shrink:0;}.error-message.svelte-qha2j p:where(.svelte-qha2j) {margin:0;font-size:var(--widget-font-size-sm);font-weight:500;}
  
  /* Custom scrollbar */.message-list.svelte-qha2j::-webkit-scrollbar {width:6px;}.message-list.svelte-qha2j::-webkit-scrollbar-track {background:transparent;}.message-list.svelte-qha2j::-webkit-scrollbar-thumb {background:var(--widget-border);border-radius:var(--widget-radius-full);}.message-list.svelte-qha2j::-webkit-scrollbar-thumb:hover {background:var(--widget-text-muted);}

  /* Reduced motion: keep opacity fades (safe), remove transforms and delays */
  @media (prefers-reduced-motion: reduce) {.branding-phase.svelte-qha2j {
      animation: svelte-qha2j-brandingCollapseReduced 0.3s ease-in forwards;}.empty-icon.svelte-qha2j {
      animation: svelte-qha2j-fadeOnly 0.3s ease-in forwards;}.brand-name.svelte-qha2j {
      animation: svelte-qha2j-fadeOnly 0.3s ease-in forwards;}.initial-message.svelte-qha2j {
      animation: fadeIn 0.2s ease backwards;}
  }

  @keyframes svelte-qha2j-brandingCollapseReduced {
    0%   { max-height: 400px; padding-top: clamp(48px, 15vh, 120px); opacity: 1; }
    100% { max-height: 0; padding-top: 0; opacity: 0; }
  }

  @keyframes svelte-qha2j-fadeOnly {
    from { opacity: 1; }
    to { opacity: 0; }
  }

  /* Dark theme adjustments - Use CSS variables for maintainability */
  /* Note: .empty-icon stays white in dark mode to match logo's baked-in white background.
     This creates a clean, intentional "logo badge" appearance. */[data-theme="dark"] .empty-icon.svelte-qha2j {box-shadow:var(--widget-shadow-md);}[data-theme="dark"] .brand-name.svelte-qha2j {color:var(--widget-text-muted);}`
};
function ma(n, e) {
  xt(e, !0), Ft(n, Gg);
  let t = Q(e, "onsend", 7), i = Q(e, "connectionState", 23, () => ue.DISCONNECTED), r = Q(e, "chat", 7, $t), s = Q(e, "config", 7, ft), a, o = !0;
  const l = /* @__PURE__ */ me(() => r().messages.length > 0), c = /* @__PURE__ */ me(() => i() !== ue.CONNECTED);
  ii(() => {
    r().messages, o && v(l) && d();
  }), ii(() => {
    r().isTyping, o && v(l) && d();
  }), ii(() => {
    r().streamingUpdateSignal, o && r().isStreaming && d();
  });
  async function d() {
    await gl(), a && (a.scrollTop = a.scrollHeight);
  }
  function u() {
    if (a) {
      const { scrollTop: w, scrollHeight: y, clientHeight: L } = a;
      o = y - w - L < 100;
    }
  }
  os(() => {
    v(l) && d();
  });
  var h = {
    get onsend() {
      return t();
    },
    set onsend(w) {
      t(w), j();
    },
    get connectionState() {
      return i();
    },
    set connectionState(w = ue.DISCONNECTED) {
      i(w), j();
    },
    get chat() {
      return r();
    },
    set chat(w = $t) {
      r(w), j();
    },
    get config() {
      return s();
    },
    set config(w = ft) {
      s(w), j();
    }
  }, p = jg(), k = se(p);
  {
    var b = (w) => {
      var y = Hg(), L = se(y), G = se(L), q = se(G);
      re(G), ar(2), re(L);
      var oe = ae(L, 2);
      {
        var de = (N) => {
          var X = Fg(), le = se(X, !0);
          re(X), Ye(() => Pn(le, s().initialMessage)), F(N, X);
        };
        ve(oe, (N) => {
          s().initialMessage && N(de);
        });
      }
      var C = ae(oe, 2);
      ac(C, {
        get questions() {
          return s().quickQuestions;
        },
        get onsend() {
          return t();
        },
        get disabled() {
          return v(c);
        }
      }), re(y), Ye(() => Fe(q, "src", uu)), F(w, y);
    }, m = (w) => {
      var y = Wg(), L = se(y);
      vl(L, 17, () => r().messages, (q) => q.id, (q, oe) => {
        rc(q, {
          get message() {
            return v(oe);
          }
        });
      });
      var G = ae(L, 2);
      sc(G, {
        get chat() {
          return r();
        }
      }), re(y), F(w, y);
    };
    ve(k, (w) => {
      r().messages.length === 0 ? w(b) : w(m, !1);
    });
  }
  var T = ae(k, 2);
  {
    var z = (w) => {
      var y = Bg(), L = ae(se(y), 2), G = se(L, !0);
      re(L), re(y), Ye(() => Pn(G, r().error)), F(w, y);
    };
    ve(T, (w) => {
      r().error && w(z);
    });
  }
  return re(p), as(p, (w) => a = w, () => a), Id("scroll", p, u), F(n, p), _t(h);
}
Ht(ma, { onsend: {}, connectionState: {}, chat: {}, config: {} }, [], [], !0);
class ho {
  constructor(e) {
    this.recognizer = null, this.state = "idle", this.opts = e;
  }
  static isSupported() {
    return typeof window < "u" && ("SpeechRecognition" in window || "webkitSpeechRecognition" in window);
  }
  start() {
    if (this.state === "listening") return;
    const e = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!e) {
      this.opts.onError("not-supported");
      return;
    }
    const t = new e();
    t.lang = this.opts.lang ?? "en-US", t.continuous = this.opts.continuous ?? !1, t.interimResults = this.opts.interimResults ?? !1, t.addEventListener("result", (i) => {
      const r = i, s = r.results[r.resultIndex], o = s[0].transcript.slice(0, dn.MAX_LENGTH), l = s.isFinal;
      this.opts.onResult(o, l);
    }), t.addEventListener("end", () => {
      this.state !== "error" && this.setState("idle");
    }), t.addEventListener("error", (i) => {
      const r = i;
      this.setState("error"), this.opts.onError(r.error ?? "unknown");
    }), t.start(), this.recognizer = t, this.setState("listening");
  }
  stop() {
    var e;
    this.state === "listening" && ((e = this.recognizer) == null || e.stop());
  }
  abort() {
    var e;
    (e = this.recognizer) == null || e.abort(), this.setState("idle");
  }
  getState() {
    return this.state;
  }
  setState(e) {
    this.state = e, this.opts.onStateChange(e);
  }
}
function Vg(n) {
  switch (n) {
    case "not-allowed":
    case "service-not-allowed":
      return "Microphone permission denied";
    case "no-speech":
      return "No speech detected";
    case "network":
      return "Network error";
    case "not-supported":
      return "Voice not supported in this browser";
    default:
      return "Voice input error";
  }
}
var Yg = /* @__PURE__ */ ee('<span role="alert" class="sr-only svelte-zcaleu"> </span>'), Qg = /* @__PURE__ */ ra('<rect x="6" y="4" width="4" height="16" rx="2" fill="currentColor" class="svelte-zcaleu"></rect><rect x="14" y="4" width="4" height="16" rx="2" fill="currentColor" class="svelte-zcaleu"></rect>', 1), Xg = /* @__PURE__ */ ra('<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" fill="currentColor" class="svelte-zcaleu"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="svelte-zcaleu"></path><line x1="12" y1="19" x2="12" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="svelte-zcaleu"></line><line x1="8" y1="23" x2="16" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="svelte-zcaleu"></line>', 1), Zg = /* @__PURE__ */ ee('<!> <button type="button"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svelte-zcaleu"><!></svg></button>', 1);
const Kg = {
  hash: "svelte-zcaleu",
  code: `.voice-button.svelte-zcaleu {width:36px;height:36px;border-radius:var(--widget-radius-full, 9999px);background:transparent;border:1px solid var(--widget-border);color:var(--widget-text-muted);cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:color 0.2s ease, background 0.2s ease, border-color 0.15s ease;}.voice-button.svelte-zcaleu:hover:not(:disabled) {color:var(--widget-primary);border-color:var(--widget-primary);}.voice-button.listening.svelte-zcaleu {color:var(--widget-primary);border-color:var(--widget-primary);background:color-mix(in srgb, var(--widget-primary) 10%, transparent);
    animation: svelte-zcaleu-voicePulse 1.5s ease-in-out infinite;}.voice-button.error.svelte-zcaleu {color:var(--widget-error, #c53030);border-color:var(--widget-error, #c53030);}.voice-button.svelte-zcaleu:disabled {opacity:0.4;cursor:not-allowed;}.voice-button.svelte-zcaleu:focus-visible {outline:2px solid var(--widget-primary);outline-offset:2px;}.voice-button.svelte-zcaleu svg:where(.svelte-zcaleu) {width:16px;height:16px;}

  @keyframes svelte-zcaleu-voicePulse {
    0%, 100% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--widget-primary) 40%, transparent); }
    50% { box-shadow: 0 0 0 4px color-mix(in srgb, var(--widget-primary) 0%, transparent); }
  }

  @media (max-width: 767px) {.voice-button.svelte-zcaleu {width:44px;height:44px;}.voice-button.svelte-zcaleu svg:where(.svelte-zcaleu) {width:20px;height:20px;}
  }

  @media (prefers-reduced-motion: reduce) {.voice-button.listening.svelte-zcaleu {
      animation: none;}.voice-button.svelte-zcaleu {transition-duration:0.01ms !important;}
  }.sr-only.svelte-zcaleu {position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0;}`
};
function oc(n, e) {
  xt(e, !0), Ft(n, Kg);
  let t = Q(e, "disabled", 7, !1), i = Q(e, "lang", 7, "en-US"), r = Q(e, "onTranscript", 7), s = /* @__PURE__ */ U("idle"), a = /* @__PURE__ */ U(null);
  const o = ho.isSupported();
  let l = !0, c = null;
  function d() {
    return c || (c = new ho({
      lang: i(),
      continuous: !1,
      interimResults: !1,
      onResult(w, y) {
        y && w.trim() && l && r()(w.trim());
      },
      onStateChange(w) {
        P(s, w, !0), w !== "error" && P(a, null);
      },
      onError(w) {
        P(s, "error"), P(a, Vg(w), !0);
      }
    })), c;
  }
  function u() {
    t() || !o || (v(s) === "listening" ? d().stop() : (P(a, null), d().start()));
  }
  ii(() => () => {
    l = !1, c == null || c.abort(), c = null;
  });
  const h = /* @__PURE__ */ me(() => v(s) === "listening"), p = /* @__PURE__ */ me(() => v(s) === "error" ? `Voice input error: ${v(a) ?? "unknown"} — Start voice input` : v(h) ? "Stop listening" : "Start voice input"), k = /* @__PURE__ */ me(() => v(a) ?? (v(h) ? "Stop listening" : "Start voice input (audio processed by your browser's speech service)"));
  var b = {
    get disabled() {
      return t();
    },
    set disabled(w = !1) {
      t(w), j();
    },
    get lang() {
      return i();
    },
    set lang(w = "en-US") {
      i(w), j();
    },
    get onTranscript() {
      return r();
    },
    set onTranscript(w) {
      r(w), j();
    }
  }, m = sa(), T = an(m);
  {
    var z = (w) => {
      var y = Zg(), L = an(y);
      {
        var G = (le) => {
          var he = Yg(), _e = se(he, !0);
          re(he), Ye(() => Pn(_e, v(a))), F(le, he);
        };
        ve(L, (le) => {
          v(a) && le(G);
        });
      }
      var q = ae(L, 2);
      let oe;
      q.__click = u;
      var de = se(q), C = se(de);
      {
        var N = (le) => {
          var he = Qg();
          ar(), F(le, he);
        }, X = (le) => {
          var he = Xg();
          ar(3), F(le, he);
        };
        ve(C, (le) => {
          v(h) ? le(N) : le(X, !1);
        });
      }
      re(de), re(q), Ye(() => {
        oe = ss(q, 1, "voice-button svelte-zcaleu", null, oe, {
          listening: v(h),
          error: v(s) === "error"
        }), q.disabled = t(), Fe(q, "aria-label", v(p)), Fe(q, "title", v(k)), Fe(q, "aria-pressed", v(h));
      }), F(w, y);
    };
    ve(T, (w) => {
      o && w(z);
    });
  }
  return F(n, m), _t(b);
}
Bn(["click"]);
Ht(oc, { disabled: {}, lang: {}, onTranscript: {} }, [], [], !0);
var Jg = /* @__PURE__ */ ee('<div class="connection-status svelte-1a8gd73" role="status" aria-live="polite"><span class="connecting-text svelte-1a8gd73">Connecting...</span> <span class="connecting-dot svelte-1a8gd73"></span></div>'), ef = /* @__PURE__ */ ee('<div class="brand-banner svelte-1a8gd73"><a href="https://botbrewers.ca" target="_blank" rel="noopener noreferrer" class="svelte-1a8gd73">botbrewers.ca<span class="sr-only svelte-1a8gd73">(opens in new tab)</span></a></div>'), tf = /* @__PURE__ */ ee('<div class="input-bar svelte-1a8gd73"><!> <div class="input-container svelte-1a8gd73"><textarea class="input-field svelte-1a8gd73" rows="1" aria-label="Message input"></textarea> <!> <button class="send-button svelte-1a8gd73" aria-label="Send message"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-1a8gd73"><path d="M2 21L23 12L2 3V10L17 12L2 14V21Z" fill="currentColor" class="svelte-1a8gd73"></path></svg></button></div> <div class="ai-disclaimer svelte-1a8gd73">AI can make mistakes. Please double-check responses.</div></div>');
const nf = {
  hash: "svelte-1a8gd73",
  code: `.input-bar.svelte-1a8gd73 {padding:var(--widget-space-sm) var(--widget-space-md);background:var(--widget-surface-elevated);border-top:1px solid var(--widget-border);border-radius:0 0 var(--widget-radius-xl) var(--widget-radius-xl);position:relative;}

  /* Contained Input Container - Material Design Pattern */.input-container.svelte-1a8gd73 {display:flex;align-items:center;gap:var(--widget-space-sm);padding:var(--widget-space-xs) var(--widget-space-sm);border:1px solid var(--widget-border);border-radius:var(--widget-radius-xl);background:var(--widget-background);
    /* Spring-based transitions */transition:border-color 0.15s ease,
                box-shadow 0.2s var(--widget-ease-out-expo),
                background 0.15s ease;
    /* Inner shadow for depth */box-shadow:var(--widget-shadow-inner);min-height:48px;}

  /* Focus state on container (not input) */.input-container.svelte-1a8gd73:focus-within {border-color:var(--widget-primary);
    /* Glow ring on focus */box-shadow:var(--widget-shadow-inner),
                0 0 0 3px rgba(var(--widget-primary-rgb), 0.12);background:var(--widget-background);}

  /* Disabled state on container */.input-container.svelte-1a8gd73:has(.input-field:where(.svelte-1a8gd73):disabled) {background:var(--widget-surface);border-color:var(--widget-border-subtle);cursor:not-allowed;opacity:0.6;}.input-field.svelte-1a8gd73 {flex:1;padding:var(--widget-space-xs) var(--widget-space-sm);border:none;background:transparent;font-size:var(--widget-font-size-sm);font-weight:var(--widget-font-weight-normal);line-height:var(--widget-line-height-normal);letter-spacing:var(--widget-letter-spacing-normal);resize:none;outline:none;font-family:var(--widget-font-family);max-height:120px;min-height:36px;height:36px;overflow-y:auto;color:var(--widget-text);}.input-field.svelte-1a8gd73:disabled {cursor:not-allowed;color:var(--widget-text-muted);}.input-field.svelte-1a8gd73::placeholder {color:var(--widget-text-muted);font-weight:var(--widget-font-weight-normal);font-style:normal;opacity:0.7;}.send-button.svelte-1a8gd73 {width:36px;height:36px;border-radius:var(--widget-radius-full);background:var(--widget-gradient);border:1px solid rgba(255, 255, 255, 0.1);color:var(--widget-text-inverse);cursor:pointer;display:flex;align-items:center;justify-content:center;
    /* Spring-based transitions */transition:transform 0.2s var(--widget-ease-spring),
                box-shadow 0.2s var(--widget-ease-out-expo),
                background 0.15s ease;flex-shrink:0;box-shadow:var(--widget-shadow-button);position:relative;overflow:hidden;}.send-button.svelte-1a8gd73:hover:not(:disabled) {background:var(--widget-gradient-hover);box-shadow:var(--widget-shadow-glow);transform:scale(1.05);}.send-button.svelte-1a8gd73:active:not(:disabled) {background:var(--widget-primary-dark);box-shadow:var(--widget-shadow-sm);transform:scale(0.97);transition-duration:0.1s;}

  /* Focus-visible for accessibility */.send-button.svelte-1a8gd73:focus-visible {outline:2px solid var(--widget-primary);outline-offset:2px;box-shadow:var(--widget-shadow-glow);}.send-button.svelte-1a8gd73:disabled {opacity:0.4;cursor:not-allowed;background:var(--widget-surface);color:var(--widget-text-muted);border-color:var(--widget-border);box-shadow:none;transform:none;}.send-button.svelte-1a8gd73 svg:where(.svelte-1a8gd73) {width:16px;height:16px;
    /* Spring-based icon animation */transition:transform 0.2s var(--widget-ease-spring);filter:drop-shadow(0 1px 1px rgba(0, 0, 0, 0.1));}.send-button.svelte-1a8gd73:hover:not(:disabled) svg:where(.svelte-1a8gd73) {
    /* Subtle rotation + scale on hover */transform:translateX(2px) rotate(12deg) scale(1.1);}
  
  /* Modern custom scrollbar for textarea */.input-field.svelte-1a8gd73::-webkit-scrollbar {width:6px;}.input-field.svelte-1a8gd73::-webkit-scrollbar-track {background:transparent;}.input-field.svelte-1a8gd73::-webkit-scrollbar-thumb {background:var(--widget-border-light);border-radius:var(--widget-radius-full);}.input-field.svelte-1a8gd73::-webkit-scrollbar-thumb:hover {background:var(--widget-border);}
  
  /* Mobile: Enhanced touch targets (WCAG 2.1 AA) */
  @media (max-width: 767px) {.input-bar.svelte-1a8gd73 {padding:var(--widget-space-xs) var(--widget-space-sm);border-radius:0; /* Full-screen on mobile */}.input-container.svelte-1a8gd73 {min-height:56px;padding:var(--widget-space-xs) var(--widget-space-sm);}.input-field.svelte-1a8gd73 {font-size:16px; /* Prevent zoom on iOS */padding:var(--widget-space-xs) var(--widget-space-sm);min-height:var(--widget-touch-target-min);height:var(--widget-touch-target-min);}.send-button.svelte-1a8gd73 {width:var(--widget-touch-target-min);height:var(--widget-touch-target-min);}.send-button.svelte-1a8gd73 svg:where(.svelte-1a8gd73) {width:20px;height:20px;}
  }

  /* Landscape: Compact height for more content area */
  @media (max-width: 767px) and (orientation: landscape) {.input-container.svelte-1a8gd73 {min-height:52px;}
  }

  /* Respect reduced motion preference (WCAG 2.3.3) */
  @media (prefers-reduced-motion: reduce) {.input-container.svelte-1a8gd73,
    .send-button.svelte-1a8gd73,
    .send-button.svelte-1a8gd73 svg:where(.svelte-1a8gd73) {transition-duration:0.01ms !important;}.send-button.svelte-1a8gd73:hover:not(:disabled) svg:where(.svelte-1a8gd73) {transform:none;}
  }

  /* Dark theme adjustments - Use CSS variables for maintainability */[data-theme="dark"] .input-container.svelte-1a8gd73 {background:var(--widget-background);border-color:var(--widget-border);}[data-theme="dark"] .input-container.svelte-1a8gd73:focus-within {border-color:var(--widget-accent-gold);box-shadow:var(--widget-shadow-inner),
                0 0 0 3px rgba(var(--widget-accent-gold-rgb), 0.2); /* Gold accent glow */}

  /* Brand banner — fades in at 3.5s, after last quick question finishes (3.2s + 0.3s) */.brand-banner.svelte-1a8gd73 {text-align:center;font-size:var(--widget-font-size-xs);padding:6px 0;line-height:1.4;letter-spacing:0.02em;opacity:0;
    animation: svelte-1a8gd73-brandBannerIn 0.3s ease 3.5s forwards;}.brand-banner.svelte-1a8gd73 a:where(.svelte-1a8gd73) {color:var(--widget-text-muted);font-weight:var(--widget-font-weight-medium);text-decoration:none;transition:color var(--widget-transition);}.brand-banner.svelte-1a8gd73 a:where(.svelte-1a8gd73):hover {color:var(--widget-primary);text-decoration:underline;}.brand-banner.svelte-1a8gd73 a:where(.svelte-1a8gd73):focus-visible {outline:2px solid var(--widget-primary);outline-offset:2px;border-radius:2px;}

  /* Screen-reader-only utility for external link announcement */.sr-only.svelte-1a8gd73 {position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0;}

  @keyframes svelte-1a8gd73-brandBannerIn {
    to { opacity: 0.85; }
  }

  @media (prefers-reduced-motion: reduce) {.brand-banner.svelte-1a8gd73 {
      animation: svelte-1a8gd73-brandBannerIn 0.2s ease forwards;}
  }

  /* Mobile: increase touch target for brand link */
  @media (max-width: 767px) {.brand-banner.svelte-1a8gd73 {padding:6px 0;}
  }

  /* Connection status indicator */.connection-status.svelte-1a8gd73 {text-align:center;font-size:var(--widget-font-size-xs);padding:6px 0;line-height:1.4;letter-spacing:0.02em;color:var(--widget-text-muted);display:flex;align-items:center;justify-content:center;gap:8px;opacity:0;
    animation: svelte-1a8gd73-brandBannerIn 0.3s ease 3.5s forwards;}.connecting-text.svelte-1a8gd73 {font-weight:var(--widget-font-weight-medium);}

  /* Pulsing dot animation */.connecting-dot.svelte-1a8gd73 {width:6px;height:6px;border-radius:50%;background:var(--widget-primary);
    animation: svelte-1a8gd73-pulse 1.5s ease-in-out infinite;}

  @keyframes svelte-1a8gd73-pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.4; transform: scale(0.8); }
  }

  /* Dark theme */[data-theme="dark"] .connection-status.svelte-1a8gd73 {color:var(--widget-text-subtle);}[data-theme="dark"] .connecting-dot.svelte-1a8gd73 {background:var(--widget-primary-light);}

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {.connection-status.svelte-1a8gd73 {
      animation: svelte-1a8gd73-brandBannerIn 0.2s ease forwards;}.connecting-dot.svelte-1a8gd73 {
      animation: none;}
  }

  /* Mobile: increase touch target */
  @media (max-width: 767px) {.connection-status.svelte-1a8gd73 {padding:6px 0;}
  }

  /* AI Disclaimer */.ai-disclaimer.svelte-1a8gd73 {padding:var(--widget-space-xs) var(--widget-space-sm);text-align:center;font-size:var(--widget-font-size-xs);color:var(--widget-text-subtle);opacity:0.8;user-select:none;pointer-events:none;margin-top:var(--widget-space-sm);}[data-theme="dark"] .ai-disclaimer.svelte-1a8gd73 {color:var(--widget-text-muted);opacity:0.7;}

  @media (max-width: 767px) {.ai-disclaimer.svelte-1a8gd73 {font-size:0.6875rem; /* 11px */}
  }`
};
function va(n, e) {
  xt(e, !0), Ft(n, nf);
  let t = Q(e, "onsend", 7), i = Q(e, "disabled", 7, !1), r = Q(e, "showBrandBanner", 7, !1), s = Q(e, "connectionState", 23, () => ue.DISCONNECTED), a = Q(e, "chat", 7, $t), o = Q(e, "config", 7, ft), l = Q(e, "correlationService", 23, Pi), c = /* @__PURE__ */ U(""), d;
  function u() {
    var le;
    const C = l().generate(), N = v(c);
    Z.log("InputBar", "handleSend() called", {
      correlationId: C,
      rawInputValue: N,
      rawLength: (N == null ? void 0 : N.length) || 0,
      rawType: typeof N,
      disabled: i(),
      isTyping: a().isTyping
    });
    const X = N.trim();
    Z.log("InputBar", "After trimming", {
      correlationId: C,
      original: N,
      trimmed: X,
      originalLength: (N == null ? void 0 : N.length) || 0,
      trimmedLength: (X == null ? void 0 : X.length) || 0,
      wasEmptyAfterTrim: !X,
      hadWhitespaceOnly: ((N == null ? void 0 : N.length) || 0) > 0 && !X
    }), X && !i() && !a().isTyping && !a().isStreaming ? (Z.log("InputBar", "Conditions met, calling onsend", {
      correlationId: C,
      trimmedValue: X,
      trimmedLength: X.length,
      willSend: !0
    }), l().setCurrent(C), (le = t()) == null || le(X), P(c, ""), p()) : Z.log("InputBar", "Send blocked", {
      correlationId: C,
      hasContent: !!X,
      disabled: i(),
      isTyping: a().isTyping,
      trimmedValue: X || "(empty)",
      reason: X ? i() ? "disabled" : a().isTyping ? "typing in progress" : "unknown" : "empty content"
    });
  }
  function h(C) {
    C.key === "Enter" && !C.shiftKey && (C.preventDefault(), u());
  }
  function p() {
    d && (d.style.height = "auto", d.style.height = Math.min(d.scrollHeight, 120) + "px");
  }
  const k = /* @__PURE__ */ me(() => i() || a().isTyping || a().isStreaming || a().error !== null), b = /* @__PURE__ */ me(() => a().isTyping ? "Waiting for response..." : a().error ? "Error occurred" : o().placeholder), m = /* @__PURE__ */ me(() => s() === ue.CONNECTING || s() === ue.DISCONNECTED);
  var T = {
    get onsend() {
      return t();
    },
    set onsend(C) {
      t(C), j();
    },
    get disabled() {
      return i();
    },
    set disabled(C = !1) {
      i(C), j();
    },
    get showBrandBanner() {
      return r();
    },
    set showBrandBanner(C = !1) {
      r(C), j();
    },
    get connectionState() {
      return s();
    },
    set connectionState(C = ue.DISCONNECTED) {
      s(C), j();
    },
    get chat() {
      return a();
    },
    set chat(C = $t) {
      a(C), j();
    },
    get config() {
      return o();
    },
    set config(C = ft) {
      o(C), j();
    },
    get correlationService() {
      return l();
    },
    set correlationService(C = Pi()) {
      l(C), j();
    }
  }, z = tf(), w = se(z);
  {
    var y = (C) => {
      var N = sa(), X = an(N);
      {
        var le = (_e) => {
          var Xe = Jg();
          F(_e, Xe);
        }, he = (_e) => {
          var Xe = ef();
          F(_e, Xe);
        };
        ve(X, (_e) => {
          v(m) ? _e(le) : _e(he, !1);
        });
      }
      F(C, N);
    };
    ve(w, (C) => {
      r() && C(y);
    });
  }
  var L = ae(w, 2), G = se(L);
  hd(G), G.__keydown = h, G.__input = p, as(G, (C) => d = C, () => d);
  var q = ae(G, 2);
  {
    var oe = (C) => {
      oc(C, {
        get disabled() {
          return v(k);
        },
        onTranscript: (N) => {
          P(c, N, !0), d == null || d.focus();
        }
      });
    };
    ve(q, (C) => {
      o().voiceInput && C(oe);
    });
  }
  var de = ae(q, 2);
  return de.__click = u, re(L), ar(2), re(z), Ye(
    (C) => {
      Fe(G, "placeholder", v(b)), G.disabled = v(k), de.disabled = C;
    },
    [() => v(k) || !v(c).trim()]
  ), Vd(G, () => v(c), (C) => P(c, C)), F(n, z), _t(T);
}
Bn(["keydown", "input", "click"]);
Ht(
  va,
  {
    onsend: {},
    disabled: {},
    showBrandBanner: {},
    connectionState: {},
    chat: {},
    config: {},
    correlationService: {}
  },
  [],
  [],
  !0
);
class lc {
  /**
   * @param correlationService Per-instance CorrelationService for multi-widget isolation.
   *   Defaults to the module singleton. Omitting this parameter breaks state isolation
   *   when multiple widget instances exist on the same page.
   */
  constructor(e, t, i = Pi()) {
    this.sessionId = null, this.config = e, this.visitor = t, this.debugLogger = ls(e.getAll()), this.correlationService = i;
  }
  /**
   * Initialize widget session with backend
   */
  async initialize() {
    try {
      const e = new AbortController(), t = setTimeout(() => e.abort(), Te.API_TIMEOUT), i = Ki.getApiUrl("init", {
        clientId: this.config.clientId
      }), r = {
        client_id: this.config.clientId,
        visitor_id: this.visitor.getVisitorId(),
        page_url: window.location.href,
        referrer: document.referrer
      };
      this.config.debug && this.debugLogger.log("APIClient", "Initializing with", {
        endpoint: "init",
        fullUrl: i,
        payload: r
      });
      const s = this.correlationService.getCurrent(), a = await fetch(i, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: window.location.origin,
          "X-Correlation-ID": s
        },
        body: JSON.stringify({ body: r }),
        signal: e.signal
      });
      if (clearTimeout(t), !a.ok) {
        if (a.status === 403)
          throw new Error("Invalid client configuration. Please check your client ID.");
        if (a.status === 422)
          try {
            const l = await a.json();
            this.debugLogger.error("APIClient", "Validation error (422)", l);
            const c = l.detail || l.message || "Validation failed";
            throw new Error(`Validation error: ${typeof c == "string" ? c : JSON.stringify(c)}`);
          } catch (l) {
            throw l instanceof Error && l.message.startsWith("Validation error:") ? l : new Error("Invalid request data. Please check client ID and visitor ID format.");
          }
        if (a.status === 429) {
          const l = a.headers.get("Retry-After"), c = l ? parseInt(l, 10) : 60;
          throw new ni(
            `Rate limit exceeded. Please try again in ${c} seconds.`,
            c
          );
        }
        throw new ti(
          `Failed to initialize widget: ${a.statusText}`,
          a.status,
          i
        );
      }
      const o = await a.json();
      return this.sessionId = o.session_id, this.visitor.saveSessionId(o.session_id), o;
    } catch (e) {
      if (e instanceof nr || e instanceof ti || e instanceof ni)
        throw e;
      const t = ir.handle(e, {
        component: "APIClient",
        action: "initialize"
      });
      throw new Error(t.message);
    }
  }
  /**
   * Send chat message (HTTP fallback)
   */
  async sendMessage(e) {
    var i, r;
    const t = this.correlationService.getCurrent();
    try {
      this.debugLogger.log("APIClient", "sendMessage() called", {
        correlationId: t,
        message: e,
        messageLength: (e == null ? void 0 : e.length) || 0,
        messageType: typeof e,
        sessionId: this.sessionId,
        clientId: this.config.clientId
      });
      const s = cu.validate(e, t);
      if (this.debugLogger.log("APIClient", "Message validation result", {
        correlationId: t,
        input: e,
        isValid: s.isValid,
        error: s.error,
        sanitizedValue: s.sanitizedValue,
        sanitizedLength: ((i = s.sanitizedValue) == null ? void 0 : i.length) || 0,
        contentChanged: e !== s.sanitizedValue
      }), !s.isValid)
        throw this.debugLogger.error("APIClient", "Validation failed", { correlationId: t, error: s.error }), new nr(s.error || "Validation failed", "message", e);
      this.sessionId || (this.debugLogger.log("APIClient", "No session ID, attempting to resume or initialize...", { correlationId: t }), await this.resumeSession() || await this.initialize());
      const a = new AbortController(), o = setTimeout(() => a.abort(), Te.API_TIMEOUT), l = {
        body: {
          client_id: this.config.clientId,
          visitor_id: this.visitor.getVisitorId(),
          session_id: this.sessionId,
          message: s.sanitizedValue
        }
      }, c = Ki.getApiUrl("chat", {
        clientId: this.config.clientId
      });
      this.debugLogger.log("APIClient", "HTTP request payload", {
        correlationId: t,
        url: c,
        payload: l,
        messageContent: l.body.message,
        messageLength: ((r = l.body.message) == null ? void 0 : r.length) || 0
      });
      const d = await fetch(c, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: window.location.origin,
          "X-Correlation-ID": t
        },
        body: JSON.stringify(l),
        signal: a.signal
      });
      if (clearTimeout(o), this.debugLogger.log("APIClient", "HTTP response status", {
        correlationId: t,
        ok: d.ok,
        status: d.status,
        statusText: d.statusText
      }), !d.ok) {
        if (d.status === 429) {
          const h = d.headers.get("Retry-After"), p = h ? parseInt(h, 10) : 60;
          throw new ni(
            `Rate limit exceeded. Please try again in ${p} seconds.`,
            p
          );
        }
        throw new ti(
          `Failed to send message: ${d.statusText}`,
          d.status,
          c
        );
      }
      const u = await d.json();
      return this.debugLogger.log("APIClient", "HTTP response data", { correlationId: t, result: u }), u;
    } catch (s) {
      if (this.debugLogger.error("APIClient", "sendMessage() error", { correlationId: t, error: s }), s instanceof nr || s instanceof ti || s instanceof ni)
        throw s;
      const a = ir.handle(s, {
        component: "APIClient",
        action: "sendMessage",
        sessionId: this.sessionId || void 0
      });
      throw new Error(a.message);
    }
  }
  /**
   * Resume previous session if available
   */
  async resumeSession() {
    const e = this.visitor.getLastActiveSession();
    if (!e)
      return !1;
    try {
      if (this.sessionId = e, await this.validateSessionHealth())
        return !0;
    } catch {
      this.sessionId = null;
    }
    return !1;
  }
  /**
   * Validate session using dedicated session health endpoint
   */
  async validateSessionHealth() {
    if (!this.sessionId)
      return !1;
    try {
      const e = new AbortController(), t = setTimeout(() => e.abort(), Te.API_TIMEOUT), i = Ki.getApiUrl("sessionHealth", {
        clientId: this.config.clientId,
        sessionId: this.sessionId
      }), r = {
        client_id: this.config.clientId,
        visitor_id: this.visitor.getVisitorId()
      };
      this.config.debug && this.debugLogger.log("APIClient", "Validating session health", {
        sessionId: this.sessionId,
        fullUrl: i,
        payload: r
      });
      const s = this.correlationService.getCurrent(), a = await fetch(i, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: window.location.origin,
          "X-Correlation-ID": s
        },
        body: JSON.stringify({ body: r }),
        signal: e.signal
      });
      if (clearTimeout(t), a.ok) {
        const o = await a.json();
        return this.config.debug && this.debugLogger.log("APIClient", "Session health response", o), o.status === "healthy";
      }
      return a.status === 404 ? (this.config.debug && this.debugLogger.log("APIClient", "Session not found", this.sessionId), !1) : (a.status === 410 && this.config.debug && this.debugLogger.log("APIClient", "Session expired", this.sessionId), !1);
    } catch (e) {
      return this.config.debug && this.debugLogger.warn("APIClient", "Session health check failed", e), !1;
    }
  }
  /**
   * Check health of current session
   */
  async checkSessionHealth() {
    if (!this.sessionId)
      return null;
    try {
      const e = new AbortController(), t = setTimeout(() => e.abort(), Te.API_TIMEOUT), i = Ki.getApiUrl("sessionHealth", {
        clientId: this.config.clientId,
        sessionId: this.sessionId
      }), r = {
        client_id: this.config.clientId,
        visitor_id: this.visitor.getVisitorId()
      }, s = this.correlationService.getCurrent(), a = await fetch(i, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: window.location.origin,
          "X-Correlation-ID": s
        },
        body: JSON.stringify({ body: r }),
        signal: e.signal
      });
      return clearTimeout(t), a.ok ? await a.json() : a.status === 404 ? {
        status: "invalid",
        session_id: this.sessionId
      } : a.status === 410 ? {
        status: "expired",
        session_id: this.sessionId
      } : null;
    } catch (e) {
      const t = ir.handle(e, {
        component: "APIClient",
        action: "checkSessionHealth",
        sessionId: this.sessionId
      });
      return this.config.debug && this.debugLogger.warn("APIClient", "Session health check error", t.message), null;
    }
  }
  getSessionId() {
    return this.sessionId;
  }
}
class cc {
  constructor(e, t, i) {
    this.typingTimeout = null, this.hasHiddenTypingForCurrentStream = !1, this.lastCompletionTimestamp = null, this.lastMessageSentTimestamp = null, this.COMPLETION_GRACE_PERIOD_MS = Te.COMPLETION_GRACE_PERIOD, this.chatStore = e, this.uiStore = t, this.debugLogger = i;
  }
  /**
   * Reset state for a new message stream
   */
  resetForNewMessage() {
    this.hasHiddenTypingForCurrentStream = !1, this.lastCompletionTimestamp = null, this.lastMessageSentTimestamp = Date.now(), this.typingTimeout && (clearTimeout(this.typingTimeout), this.typingTimeout = null);
  }
  /**
   * Handle incoming WebSocket messages
   */
  handleMessage(e) {
    switch (this.debugLogger.log("ChatController", "Processing WebSocket message", {
      type: e.type,
      hasContent: !!e.data.content
    }), e.type) {
      case "assistant_chunk":
        this.handleAssistantChunk(e);
        break;
      case "assistant_complete":
        this.handleAssistantComplete(e);
        break;
      case "connection_established":
        this.handleConnectionEstablished(e);
        break;
      case "typing_indicator":
        this.handleTypingIndicator();
        break;
      case "pong":
        this.debugLogger.log("ChatController", "Pong received");
        break;
      case "heartbeat":
        this.debugLogger.log("ChatController", "Heartbeat received");
        break;
      case "error":
        this.handleError(e);
        break;
      default:
        this.debugLogger.warn("ChatController", "Unknown message type", e.type);
    }
  }
  handleAssistantChunk(e) {
    const t = e.data.content;
    if (!t) {
      this.debugLogger.warn("ChatController", "Assistant chunk without content");
      return;
    }
    if (this.hasHiddenTypingForCurrentStream || (this.chatStore.setTyping(!1), this.hasHiddenTypingForCurrentStream = !0, this.debugLogger.log("ChatController", "Typing indicator hidden - first chunk arrived"), this.typingTimeout && (clearTimeout(this.typingTimeout), this.typingTimeout = null)), this.chatStore.isStreaming)
      this.chatStore.appendToStreamingMessage(t);
    else {
      const i = this.chatStore.startStreamingMessage();
      this.chatStore.appendToStreamingMessage(t), this.debugLogger.log("ChatController", "Started streaming message", { messageId: i });
    }
    this.uiStore.isOpen || this.uiStore.markUnread();
  }
  handleAssistantComplete(e) {
    this.debugLogger.log("ChatController", "Assistant complete", {
      isStreaming: this.chatStore.isStreaming
    }), this.typingTimeout && (clearTimeout(this.typingTimeout), this.typingTimeout = null), this.chatStore.isStreaming && this.chatStore.finishStreamingMessage(), this.hasHiddenTypingForCurrentStream = !1, this.lastCompletionTimestamp = Date.now(), this.chatStore.setTyping(!1), this.uiStore.isOpen || this.uiStore.markUnread();
  }
  handleConnectionEstablished(e) {
    const t = e.data.initial_message;
    t && !this.chatStore.hasMessages && (ft.setBackendInitialMessage(t), this.debugLogger.log("ChatController", "Initial message configured for empty state", {
      source: ft.initialMessage === t ? "server" : "client-override"
    }));
  }
  handleTypingIndicator() {
    const e = this.lastCompletionTimestamp ? Date.now() - this.lastCompletionTimestamp : 1 / 0, t = this.lastMessageSentTimestamp ? Date.now() - this.lastMessageSentTimestamp : 1 / 0;
    if (e < this.COMPLETION_GRACE_PERIOD_MS && t > Te.CONNECTION_DELAY) {
      this.debugLogger.log("ChatController", "Ignoring typing indicator - grace period");
      return;
    }
    !this.hasHiddenTypingForCurrentStream && !this.chatStore.isStreaming ? (this.debugLogger.log("ChatController", "Processing typing indicator"), this.chatStore.setTyping(!0), this.typingTimeout && clearTimeout(this.typingTimeout), this.typingTimeout = window.setTimeout(() => {
      this.debugLogger.log("ChatController", "Typing indicator timeout"), this.chatStore.setTyping(!1), this.typingTimeout = null;
    }, Te.TYPING_INDICATOR_TIMEOUT)) : this.debugLogger.log("ChatController", "Ignoring typing indicator - already streaming");
  }
  handleError(e) {
    this.debugLogger.error("ChatController", "Error message received", e.data.message), this.typingTimeout && (clearTimeout(this.typingTimeout), this.typingTimeout = null), this.chatStore.isStreaming && this.chatStore.finishStreamingMessage(), this.hasHiddenTypingForCurrentStream = !1;
    const t = e.data.message || "An error occurred";
    this.chatStore.setError(t);
  }
  /**
   * Set typing indicator with timeout fallback
   * Used when sending messages over HTTP (non-WebSocket)
   */
  setTypingWithTimeout(e = Te.TYPING_FALLBACK_TIMEOUT) {
    this.chatStore.setTyping(!0), this.typingTimeout = window.setTimeout(() => {
      this.debugLogger.warn("ChatController", "Typing indicator timeout after HTTP send"), this.chatStore.setTyping(!1), this.chatStore.isStreaming && this.chatStore.finishStreamingMessage(), this.typingTimeout = null;
    }, e);
  }
  /**
   * Cleanup - call when destroying the component
   */
  cleanup() {
    this.typingTimeout && (clearTimeout(this.typingTimeout), this.typingTimeout = null);
  }
}
var rf = /* @__PURE__ */ ee('<span class="error-message svelte-zsv8oa" id="error-message">Connection lost. Unable to reconnect.</span> <button class="restart-button svelte-zsv8oa" aria-describedby="error-message">Retry Connection</button>', 1), sf = /* @__PURE__ */ ee('<span class="error-message svelte-zsv8oa" id="error-message">Something went wrong. Please try again.</span> <button class="restart-button svelte-zsv8oa" aria-describedby="error-message">Try Again</button>', 1), af = /* @__PURE__ */ ee('<div class="error-banner svelte-zsv8oa" role="alert" aria-live="polite"><!></div>'), of = /* @__PURE__ */ ee('<button class="backdrop svelte-zsv8oa" aria-label="Close chat overlay" tabindex="-1"></button>'), lf = /* @__PURE__ */ ee('<div role="status" aria-live="polite" class="sr-only svelte-zsv8oa">Chat assistant opened</div> <div class="chat-container svelte-zsv8oa" role="dialog" aria-label="Chat assistant" aria-modal="true" tabindex="-1"><!> <!> <!> <!></div> <!>', 1), cf = /* @__PURE__ */ ee('<div class="widget-container svelte-zsv8oa"><!> <!></div>');
const df = {
  hash: "svelte-zsv8oa",
  code: `.sr-only.svelte-zsv8oa {position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0;}.widget-container.svelte-zsv8oa {position:fixed;bottom:var(--widget-space-lg);z-index:var(--widget-z-base);font-family:var(--widget-font-family);}.widget-container[data-position="bottom-right"].svelte-zsv8oa {right:var(--widget-space-lg);}.widget-container[data-position="bottom-left"].svelte-zsv8oa {left:var(--widget-space-lg);}.chat-container.svelte-zsv8oa {
    /* Mobile-first: Full-screen takeover */position:fixed;top:0;left:0;width:100%;
    /* Dynamic viewport height - adjusts when mobile keyboard appears */height:100vh;  /* Fallback for older browsers */height:100dvh; /* Modern browsers: updates with keyboard */background:var(--widget-background);border-radius:0;box-shadow:none;border:none;display:flex;flex-direction:column;overflow:hidden;z-index:var(--widget-z-modal);}.backdrop.svelte-zsv8oa {display:block;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0, 0, 0, 0.5);z-index:calc(var(--widget-z-modal) - 1);}.error-banner.svelte-zsv8oa {position:absolute;bottom:75px;left:50%;transform:translateX(-50%);background:var(--widget-background);padding:var(--widget-space-md) var(--widget-space-lg);border-radius:var(--widget-radius-lg);box-shadow:var(--widget-shadow-lg);border:1px solid var(--widget-error);z-index:10;
    /* Stack text above button */display:flex;flex-direction:column;align-items:center;justify-content:center;gap:var(--widget-space-sm);
    /* Prevent overflow on mobile */max-width:calc(100% - 2 * var(--widget-space-lg));width:max-content;min-width:200px;box-sizing:border-box;}

  /* Mobile: ensure banner fits */
  @media (max-width: 480px) {.error-banner.svelte-zsv8oa {max-width:calc(100% - 2 * var(--widget-space-md));padding:var(--widget-space) var(--widget-space-md);min-width:160px;}
  }.error-message.svelte-zsv8oa {color:var(--widget-error);font-size:var(--widget-font-size-sm);text-align:center;line-height:1.4;word-break:break-word;overflow-wrap:break-word;}.restart-button.svelte-zsv8oa {background:var(--widget-primary);color:var(--widget-text-inverse);border:none;padding:var(--widget-space) var(--widget-space-lg);border-radius:var(--widget-radius-md);font-size:var(--widget-font-size-sm);font-weight:600;cursor:pointer;transition:all var(--widget-transition);font-family:var(--widget-font-family);width:100%;}.restart-button.svelte-zsv8oa:hover {background:var(--widget-primary-hover);}.restart-button.svelte-zsv8oa:active {background:var(--widget-primary-dark);}.restart-button.svelte-zsv8oa:focus-visible {outline:2px solid var(--widget-primary);outline-offset:2px;}

  /* Desktop: Floating widget (≥768px) */
  @media (min-width: 768px) {.chat-container.svelte-zsv8oa {
      /* Floating widget mode */position:absolute;top:auto;left:auto;width:400px;height:600px;max-height:80vh;min-height:450px;bottom:20px;border-radius:var(--widget-radius-xl);box-shadow:var(--widget-shadow-lg);border:1px solid var(--widget-border);}.widget-container[data-position="bottom-right"].svelte-zsv8oa .chat-container:where(.svelte-zsv8oa) {right:0;transform-origin:bottom right;}.widget-container[data-position="bottom-left"].svelte-zsv8oa .chat-container:where(.svelte-zsv8oa) {left:0;transform-origin:bottom left;}.backdrop.svelte-zsv8oa {display:none;}
  }

  /* Large desktop: Taller widget (≥1200px) */
  @media (min-width: 1200px) {.chat-container.svelte-zsv8oa {height:650px;max-height:85vh;}
  }

  /* Landscape mobile: Full-screen with optimizations */
  @media (max-width: 767px) and (orientation: landscape) {.chat-container.svelte-zsv8oa {
      /* Maintain full-screen but optimize for landscape */width:100%;height:100vh;  /* Fallback */height:100dvh; /* Dynamic viewport for keyboard */}
  }

  /* Portrait: Default full-screen (already handled by base mobile styles) */
  @media (max-width: 767px) and (orientation: portrait) {.chat-container.svelte-zsv8oa {
      /* Full-screen takeover - dynamic height for keyboard */width:100%;height:100vh;  /* Fallback */height:100dvh; /* Dynamic viewport for keyboard */}
  }

  /* Dark theme adjustments - Use CSS variables for maintainability */[data-theme="dark"] .chat-container.svelte-zsv8oa {background:var(--widget-background);border-color:var(--widget-border);}[data-theme="dark"] .error-banner.svelte-zsv8oa {background:var(--widget-surface);border-color:var(--widget-error);}`
};
function dc(n, e) {
  xt(e, !0), Ft(n, df);
  let t = Q(e, "hostElement", 7), i = Q(e, "ui", 7, mn), r = Q(e, "chat", 7, $t), s = Q(e, "config", 7, ft), a, o, l, c, d, u;
  const h = Il();
  let p = !1, k = !1, b = null, m = /* @__PURE__ */ U(we(ue.DISCONNECTED)), T = /* @__PURE__ */ U(
    !1
    // Track if max reconnection attempts exhausted
  ), z = /* @__PURE__ */ U(null), w = null;
  function y() {
    var O;
    if ((O = t()) != null && O.hasAttribute("data-theme")) return;
    window.matchMedia("(prefers-color-scheme: dark)").matches && t() && t().setAttribute("data-theme", "dark");
  }
  function L(x) {
    const O = [
      "button:not([disabled])",
      "textarea:not([disabled])",
      "input:not([disabled])",
      '[tabindex]:not([tabindex="-1"])',
      "a[href]"
    ].join(", "), D = x.querySelectorAll(O);
    if (D.length === 0) return;
    const ke = D[0], St = D[D.length - 1];
    return requestAnimationFrame(() => ke.focus()), { firstFocusable: ke, lastFocusable: St };
  }
  function G(x) {
    if (x.key === "Escape" && i().isOpen) {
      x.preventDefault(), i().close(), oe();
      return;
    }
    if (x.key === "Tab" && v(z)) {
      const O = [
        "button:not([disabled])",
        "textarea:not([disabled])",
        "input:not([disabled])",
        '[tabindex]:not([tabindex="-1"])',
        "a[href]"
      ].join(", "), D = v(z).querySelectorAll(O);
      if (D.length === 0) return;
      const ke = D[0], St = D[D.length - 1];
      x.shiftKey && document.activeElement === ke ? (x.preventDefault(), St.focus()) : !x.shiftKey && document.activeElement === St && (x.preventDefault(), ke.focus());
    }
  }
  function q() {
    w = document.activeElement;
  }
  function oe() {
    w && typeof w.focus == "function" && requestAnimationFrame(() => w == null ? void 0 : w.focus()), w = null;
  }
  function de() {
    v(z) && L(v(z));
  }
  os(async () => {
    try {
      a = new Ul(t()), u = ls(a.getAll()), o = new jr(), l = new lc(a, o, h), c = new Fl(a, o, h), d = new cc(r(), i(), u), t() && s().loadFromAttributes(t()), N(), y(), u.log("ChatWidget", "Attaching WebSocket listeners"), c.on("message", le), c.on("stateChange", (O) => {
        u.log("ChatWidget", "WebSocket state changed", {
          oldState: v(m),
          newState: O,
          timestamp: Date.now()
        }), P(m, O, !0);
      }), c.on("error", (O) => {
        u.error("ChatWidget", "WebSocket error event", O), b = O.error, r().setError(O.error);
      }), c.on("connectionFailed", (O) => {
        u.error("ChatWidget", "WebSocket connection failed after max attempts", O), P(T, !0), b = O.error, r().setError(O.error);
      }), u.log("ChatWidget", "WebSocket listeners attached successfully"), i().isOpen && await C();
      const x = t();
      x != null && x.setOnOpenChangeCallback && x.setOnOpenChangeCallback((O) => {
        _e(O);
      }), u.log("ChatWidget", "Services initialized successfully");
    } catch (x) {
      u.error("ChatWidget", "Initialization failed", x), b = x instanceof Error ? x.message : "Failed to initialize chat";
    }
  }), ii(() => {
    const x = i().isOpen;
    if (t()) {
      const O = t().hasAttribute("open");
      x && !O ? t().setAttribute("open", "") : !x && O && t().removeAttribute("open");
    }
  }), xl(() => {
    const x = l == null ? void 0 : l.getSessionId();
    x && o.markSessionInactive(x), c == null || c.disconnect(), d == null || d.cleanup();
  });
  async function C() {
    var x;
    if (!(p || k)) {
      k = !0;
      try {
        if (i().setLoading(!0), await l.resumeSession()) {
          const D = l.getSessionId();
          D && (await c.connect(D), setTimeout(
            () => {
              u.log("ChatWidget", "Testing WebSocket connection after session resumption..."), c.testConnection();
            },
            Te.CONNECTION_DELAY
          ));
        } else {
          const D = await l.initialize();
          (x = D.assistant_info) != null && x.assistant_name && s().setBackendTitle(D.assistant_info.assistant_name), await c.connect(D.session_id), setTimeout(
            () => {
              u.log("ChatWidget", "Testing WebSocket connection after initialization..."), c.testConnection();
            },
            Te.CONNECTION_DELAY
          ), D.settings && X(D.settings);
        }
        p = !0;
      } catch (O) {
        b = O instanceof Error ? O.message : "Failed to initialize", r().setError(b);
      } finally {
        i().setLoading(!1), k = !1;
      }
    }
  }
  function N() {
    const x = a.getAll();
    requestAnimationFrame(() => {
      if (t() && (t().setAttribute("data-theme", x.theme || "modern"), x.primary_color || x.accent_color)) {
        const O = x.accent_color || x.primary_color;
        if (O) {
          const D = Di(O, "#6b46c1");
          t().style.setProperty("--widget-primary", D), t().style.setProperty("--widget-primary-hover", fe(D, -20)), t().style.setProperty("--widget-primary-light", fe(D, 20)), t().style.setProperty("--widget-primary-dark", fe(D, -30)), t().style.setProperty("--widget-gradient", `linear-gradient(135deg, ${D} 0%, ${fe(D, 20)} 100%)`), t().style.setProperty("--widget-gradient-hover", `linear-gradient(135deg, ${fe(D, -20)} 0%, ${D} 100%)`);
        }
      }
    });
  }
  function X(x) {
    requestAnimationFrame(() => {
      if (t() && (x.theme && typeof x.theme == "string" && t().setAttribute("data-theme", x.theme), x.primary_color && typeof x.primary_color == "string")) {
        const O = Di(x.primary_color, "#6b46c1");
        t().style.setProperty("--widget-primary", O), t().style.setProperty("--widget-primary-hover", fe(O, -15)), t().style.setProperty("--widget-gradient-start", O), t().style.setProperty("--widget-gradient-end", fe(O, -30));
      }
    });
  }
  function le(x) {
    d.handleMessage(x);
  }
  async function he(x) {
    const O = h.getCurrent();
    u.log("ChatWidget", "handleSendMessage called with content", {
      correlationId: O,
      content: x,
      length: (x == null ? void 0 : x.length) || 0,
      trimmed: (x == null ? void 0 : x.trim()) || "",
      type: typeof x
    });
    const D = r().addMessage(x, "user");
    if (d.resetForNewMessage(), u.log("ChatWidget", "Message added to store", {
      correlationId: O,
      messageId: D.id,
      content: D.content,
      length: D.content.length
    }), p || (u.log("ChatWidget", "Widget not initialized, initializing...", { correlationId: O }), await C()), u.log("ChatWidget", "Connection state", {
      correlationId: O,
      connectionState: v(m),
      isConnected: v(m) === ue.CONNECTED,
      routingTo: v(m) === ue.CONNECTED ? "WebSocket" : "HTTP API"
    }), v(m) === ue.CONNECTED) {
      u.log("ChatWidget", "Sending via WebSocket", { correlationId: O, content: x });
      try {
        d.setTypingWithTimeout(), c.send(x), r().updateMessageStatus(D.id, "sent"), u.log("ChatWidget", "User message marked as sent", { messageId: D.id });
      } catch (ke) {
        u.error("ChatWidget", "WebSocket send error", ke), r().updateMessageStatus(D.id, "failed"), r().setError("Failed to send message. Please try again."), r().setTyping(!1);
        return;
      }
    } else
      try {
        u.log("ChatWidget", "Sending via HTTP API", { correlationId: O, content: x }), d.setTypingWithTimeout();
        const ke = await l.sendMessage(x);
        u.log("ChatWidget", "HTTP API response received", {
          correlationId: O,
          response: ke.response,
          sessionId: ke.session_id
        }), r().addMessage(ke.response, "assistant"), r().setTyping(!1), i().isOpen || i().markUnread();
      } catch (ke) {
        u.error("ChatWidget", "HTTP API error", ke), b = "Failed to send message. Please try again.", r().setError(b), r().updateMessageStatus(D.id, "failed"), r().setTyping(!1);
      }
  }
  async function _e(x) {
    const O = i().isOpen;
    O !== x && (u.log("ChatWidget", "Setting open state", { from: O, to: x }), x && !O && !w && q(), x ? i().open() : i().close(), await new Promise((D) => setTimeout(D, 0)), x && !p && s() && await C(), x ? requestAnimationFrame(() => de()) : oe());
  }
  async function Xe() {
    await _e(!i().isOpen);
  }
  function Wt() {
    r().clearMessages(), r().setError(null), b = null;
  }
  function Bt() {
    u.log("ChatWidget", "Manual retry connection requested"), P(T, !1), b = null, r().setError(null), c == null || c.retryConnection();
  }
  const Ce = /* @__PURE__ */ me(() => i().isOpen), S = /* @__PURE__ */ me(() => i().isLoading), I = /* @__PURE__ */ me(() => {
    var x;
    return ((x = s()) == null ? void 0 : x.position) || "bottom-right";
  });
  var te = {
    get hostElement() {
      return t();
    },
    set hostElement(x) {
      t(x), j();
    },
    get ui() {
      return i();
    },
    set ui(x = mn) {
      i(x), j();
    },
    get chat() {
      return r();
    },
    set chat(x = $t) {
      r(x), j();
    },
    get config() {
      return s();
    },
    set config(x = ft) {
      s(x), j();
    }
  }, K = cf(), bn = se(K);
  {
    var ne = (x) => {
      Nl(x, {
        onclick: Xe,
        get ui() {
          return i();
        }
      });
    };
    ve(bn, (x) => {
      v(Ce) || x(ne);
    });
  }
  var Ze = ae(bn, 2);
  {
    var jt = (x) => {
      var O = lf(), D = ae(an(O), 2);
      D.__keydown = G;
      var ke = se(D);
      la(ke, {
        onclose: () => {
          i().close(), oe();
        },
        get connectionState() {
          return v(m);
        },
        get connectionFailed() {
          return v(T);
        },
        get ui() {
          return i();
        },
        get config() {
          return s();
        }
      });
      var St = ae(ke, 2);
      ma(St, {
        onsend: he,
        get connectionState() {
          return v(m);
        },
        get chat() {
          return r();
        },
        get config() {
          return s();
        }
      });
      var Gt = ae(St, 2);
      {
        let Ee = /* @__PURE__ */ me(() => r().error !== null || v(S)), Be = /* @__PURE__ */ me(() => r().messages.length === 0);
        va(Gt, {
          onsend: he,
          get disabled() {
            return v(Ee);
          },
          get showBrandBanner() {
            return v(Be);
          },
          get connectionState() {
            return v(m);
          },
          get chat() {
            return r();
          },
          get config() {
            return s();
          },
          get correlationService() {
            return h;
          }
        });
      }
      var Gn = ae(Gt, 2);
      {
        var Vt = (Ee) => {
          var Be = af(), Vn = se(Be);
          {
            var xr = (ln) => {
              var Yt = rf(), Qt = ae(an(Yt), 2);
              Qt.__click = Bt, F(ln, Yt);
            }, _r = (ln) => {
              var Yt = sf(), Qt = ae(an(Yt), 2);
              Qt.__click = Wt, F(ln, Yt);
            };
            ve(Vn, (ln) => {
              v(T) ? ln(xr) : ln(_r, !1);
            });
          }
          re(Be), F(Ee, Be);
        };
        ve(Gn, (Ee) => {
          r().error && Ee(Vt);
        });
      }
      re(D), as(D, (Ee) => P(z, Ee), () => v(z));
      var qi = ae(D, 2);
      {
        var Ui = (Ee) => {
          var Be = of();
          Be.__click = () => i().close(), Ga(3, Be, () => tu, () => ({ duration: 200 })), F(Ee, Be);
        };
        ve(qi, (Ee) => {
          v(Ce) && Ee(Ui);
        });
      }
      Ga(3, D, () => nu, () => ({ y: 20, duration: 300 })), F(x, O);
    };
    ve(Ze, (x) => {
      v(Ce) && x(jt);
    });
  }
  return re(K), Ye(() => {
    Fe(K, "data-position", v(I)), Fe(K, "data-theme", s().theme);
  }), F(n, K), _t(te);
}
Bn(["keydown", "click"]);
Ht(dc, { hostElement: {}, ui: {}, chat: {}, config: {} }, [], [], !0);
var uf = /* @__PURE__ */ ee('<span class="error-message svelte-12a99c7" id="error-message">Connection lost. Unable to reconnect.</span> <button class="restart-button svelte-12a99c7" aria-describedby="error-message">Retry Connection</button>', 1), gf = /* @__PURE__ */ ee('<span class="error-message svelte-12a99c7" id="error-message">Something went wrong. Please try again.</span> <button class="restart-button svelte-12a99c7" aria-describedby="error-message">Try Again</button>', 1), ff = /* @__PURE__ */ ee('<div class="error-banner svelte-12a99c7" role="alert" aria-live="polite"><!></div>'), hf = /* @__PURE__ */ ee('<div class="chat-page svelte-12a99c7" role="region" aria-label="Chat assistant"><!> <!> <!> <!></div>');
const pf = {
  hash: "svelte-12a99c7",
  code: `.chat-page.svelte-12a99c7 {width:100%;height:100%;display:flex;flex-direction:column;overflow:hidden;background:var(--widget-background);border-radius:0;border:none;min-height:400px;}.error-banner.svelte-12a99c7 {position:sticky;bottom:var(--widget-space-md);left:50%;transform:translateX(-50%);background:var(--widget-background);padding:var(--widget-space-md) var(--widget-space-lg);border-radius:var(--widget-radius-lg);box-shadow:var(--widget-shadow-lg);border:1px solid var(--widget-error);z-index:10;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:var(--widget-space-sm);max-width:calc(100% - 2 * var(--widget-space-lg));width:max-content;min-width:200px;box-sizing:border-box;}

  @media (max-width: 480px) {.error-banner.svelte-12a99c7 {max-width:calc(100% - 2 * var(--widget-space-md));padding:var(--widget-space) var(--widget-space-md);min-width:160px;}
  }.error-message.svelte-12a99c7 {color:var(--widget-error);font-size:var(--widget-font-size-sm);text-align:center;line-height:1.4;word-break:break-word;overflow-wrap:break-word;}.restart-button.svelte-12a99c7 {background:var(--widget-primary);color:var(--widget-text-inverse);border:none;padding:var(--widget-space) var(--widget-space-lg);border-radius:var(--widget-radius-md);font-size:var(--widget-font-size-sm);font-weight:600;cursor:pointer;transition:all var(--widget-transition);font-family:var(--widget-font-family);width:100%;}.restart-button.svelte-12a99c7:hover {background:var(--widget-primary-hover);}.restart-button.svelte-12a99c7:active {background:var(--widget-primary-dark);}.restart-button.svelte-12a99c7:focus-visible {outline:2px solid var(--widget-primary);outline-offset:2px;}

  /* Dark theme adjustments */[data-theme="dark"] .chat-page.svelte-12a99c7 {background:var(--widget-background);border-color:var(--widget-border);}[data-theme="dark"] .error-banner.svelte-12a99c7 {background:var(--widget-surface);border-color:var(--widget-error);}`
};
function uc(n, e) {
  xt(e, !0), Ft(n, pf);
  let t = Q(e, "hostElement", 7), i = Q(e, "ui", 7, mn), r = Q(e, "chat", 7, $t), s = Q(e, "config", 7, ft), a, o, l, c, d, u;
  const h = Il();
  let p = !1, k = !1, b = null, m = /* @__PURE__ */ U(we(ue.DISCONNECTED)), T = /* @__PURE__ */ U(!1), z = /* @__PURE__ */ U(null);
  const w = (S) => {
    const I = S.detail;
    I != null && I.text && typeof I.text == "string" && de(I.text);
  };
  function y() {
    var I;
    if ((I = t()) != null && I.hasAttribute("data-theme")) return;
    window.matchMedia("(prefers-color-scheme: dark)").matches && t() && t().setAttribute("data-theme", "dark");
  }
  os(async () => {
    try {
      i().open(), a = new Ul(t()), u = ls(a.getAll()), o = new jr(), l = new lc(a, o, h), c = new Fl(a, o, h), d = new cc(r(), i(), u), t() && s().loadFromAttributes(t()), G(), y(), u.log("ChatPage", "Attaching WebSocket listeners"), c.on("message", oe), c.on("stateChange", (S) => {
        u.log("ChatPage", "WebSocket state changed", {
          oldState: v(m),
          newState: S,
          timestamp: Date.now()
        }), P(m, S, !0);
      }), c.on("error", (S) => {
        u.error("ChatPage", "WebSocket error event", S), b = S.error, r().setError(S.error);
      }), c.on("connectionFailed", (S) => {
        u.error("ChatPage", "WebSocket connection failed after max attempts", S), P(T, !0), b = S.error, r().setError(S.error);
      }), u.log("ChatPage", "WebSocket listeners attached successfully"), t() && t().addEventListener("send-message", w), await L(), u.log("ChatPage", "Services initialized successfully");
    } catch (S) {
      u.error("ChatPage", "Initialization failed", S), b = S instanceof Error ? S.message : "Failed to initialize chat";
    }
  }), xl(() => {
    t() && t().removeEventListener("send-message", w);
    const S = l == null ? void 0 : l.getSessionId();
    S && o.markSessionInactive(S), c == null || c.disconnect(), d == null || d.cleanup();
  });
  async function L() {
    var S;
    if (!(p || k)) {
      k = !0;
      try {
        if (i().setLoading(!0), await l.resumeSession()) {
          const te = l.getSessionId();
          te && (await c.connect(te), setTimeout(
            () => {
              u.log("ChatPage", "Testing WebSocket connection after session resumption..."), c.testConnection();
            },
            Te.CONNECTION_DELAY
          ));
        } else {
          const te = await l.initialize();
          (S = te.assistant_info) != null && S.assistant_name && s().setBackendTitle(te.assistant_info.assistant_name), await c.connect(te.session_id), setTimeout(
            () => {
              u.log("ChatPage", "Testing WebSocket connection after initialization..."), c.testConnection();
            },
            Te.CONNECTION_DELAY
          ), te.settings && q(te.settings);
        }
        p = !0;
      } catch (I) {
        b = I instanceof Error ? I.message : "Failed to initialize", r().setError(b);
      } finally {
        i().setLoading(!1), k = !1;
      }
    }
  }
  function G() {
    const S = a.getAll();
    requestAnimationFrame(() => {
      if (t() && (t().setAttribute("data-theme", S.theme || "modern"), S.primary_color || S.accent_color)) {
        const I = S.accent_color || S.primary_color;
        if (I) {
          const te = Di(I, "#6b46c1");
          t().style.setProperty("--widget-primary", te), t().style.setProperty("--widget-primary-hover", fe(te, -20)), t().style.setProperty("--widget-primary-light", fe(te, 20)), t().style.setProperty("--widget-primary-dark", fe(te, -30)), t().style.setProperty("--widget-gradient", `linear-gradient(135deg, ${te} 0%, ${fe(te, 20)} 100%)`), t().style.setProperty("--widget-gradient-hover", `linear-gradient(135deg, ${fe(te, -20)} 0%, ${te} 100%)`);
        }
      }
    });
  }
  function q(S) {
    requestAnimationFrame(() => {
      if (t() && (S.theme && typeof S.theme == "string" && t().setAttribute("data-theme", S.theme), S.primary_color && typeof S.primary_color == "string")) {
        const I = Di(S.primary_color, "#6b46c1");
        t().style.setProperty("--widget-primary", I), t().style.setProperty("--widget-primary-hover", fe(I, -20)), t().style.setProperty("--widget-primary-light", fe(I, 20)), t().style.setProperty("--widget-primary-dark", fe(I, -30)), t().style.setProperty("--widget-gradient", `linear-gradient(135deg, ${I} 0%, ${fe(I, 20)} 100%)`), t().style.setProperty("--widget-gradient-hover", `linear-gradient(135deg, ${fe(I, -20)} 0%, ${I} 100%)`);
      }
    });
  }
  function oe(S) {
    d.handleMessage(S);
  }
  async function de(S) {
    const I = h.getCurrent();
    u.log("ChatPage", "handleSendMessage called with content", {
      correlationId: I,
      content: S,
      length: (S == null ? void 0 : S.length) || 0,
      trimmed: (S == null ? void 0 : S.trim()) || "",
      type: typeof S
    });
    const te = r().addMessage(S, "user");
    if (d.resetForNewMessage(), u.log("ChatPage", "Message added to store", {
      correlationId: I,
      messageId: te.id,
      content: te.content,
      length: te.content.length
    }), p || (u.log("ChatPage", "Widget not initialized, initializing...", { correlationId: I }), await L()), u.log("ChatPage", "Connection state", {
      correlationId: I,
      connectionState: v(m),
      isConnected: v(m) === ue.CONNECTED,
      routingTo: v(m) === ue.CONNECTED ? "WebSocket" : "HTTP API"
    }), v(m) === ue.CONNECTED) {
      u.log("ChatPage", "Sending via WebSocket", { correlationId: I, content: S });
      try {
        d.setTypingWithTimeout(), c.send(S), r().updateMessageStatus(te.id, "sent"), u.log("ChatPage", "User message marked as sent", { messageId: te.id });
      } catch (K) {
        u.error("ChatPage", "WebSocket send error", K), r().updateMessageStatus(te.id, "failed"), r().setError("Failed to send message. Please try again."), r().setTyping(!1);
        return;
      }
    } else
      try {
        u.log("ChatPage", "Sending via HTTP API", { correlationId: I, content: S }), d.setTypingWithTimeout();
        const K = await l.sendMessage(S);
        u.log("ChatPage", "HTTP API response received", {
          correlationId: I,
          response: K.response,
          sessionId: K.session_id
        }), r().addMessage(K.response, "assistant"), r().setTyping(!1);
      } catch (K) {
        u.error("ChatPage", "HTTP API error", K), b = "Failed to send message. Please try again.", r().setError(b), r().updateMessageStatus(te.id, "failed"), r().setTyping(!1);
      }
  }
  function C() {
    r().clearMessages(), r().setError(null), b = null;
  }
  function N() {
    u.log("ChatPage", "Manual retry connection requested"), P(T, !1), b = null, r().setError(null), c == null || c.retryConnection();
  }
  const X = /* @__PURE__ */ me(() => i().isLoading);
  var le = {
    get hostElement() {
      return t();
    },
    set hostElement(S) {
      t(S), j();
    },
    get ui() {
      return i();
    },
    set ui(S = mn) {
      i(S), j();
    },
    get chat() {
      return r();
    },
    set chat(S = $t) {
      r(S), j();
    },
    get config() {
      return s();
    },
    set config(S = ft) {
      s(S), j();
    }
  }, he = hf(), _e = se(he);
  la(_e, {
    get connectionState() {
      return v(m);
    },
    get connectionFailed() {
      return v(T);
    },
    showCloseButton: !1,
    get ui() {
      return i();
    },
    get config() {
      return s();
    }
  });
  var Xe = ae(_e, 2);
  ma(Xe, {
    onsend: de,
    get connectionState() {
      return v(m);
    },
    get chat() {
      return r();
    },
    get config() {
      return s();
    }
  });
  var Wt = ae(Xe, 2);
  {
    let S = /* @__PURE__ */ me(() => r().error !== null || v(X)), I = /* @__PURE__ */ me(() => r().messages.length === 0);
    va(Wt, {
      onsend: de,
      get disabled() {
        return v(S);
      },
      get showBrandBanner() {
        return v(I);
      },
      get connectionState() {
        return v(m);
      },
      get chat() {
        return r();
      },
      get config() {
        return s();
      },
      get correlationService() {
        return h;
      }
    });
  }
  var Bt = ae(Wt, 2);
  {
    var Ce = (S) => {
      var I = ff(), te = se(I);
      {
        var K = (ne) => {
          var Ze = uf(), jt = ae(an(Ze), 2);
          jt.__click = N, F(ne, Ze);
        }, bn = (ne) => {
          var Ze = gf(), jt = ae(an(Ze), 2);
          jt.__click = C, F(ne, Ze);
        };
        ve(te, (ne) => {
          v(T) ? ne(K) : ne(bn, !1);
        });
      }
      re(I), F(S, I);
    };
    ve(Bt, (S) => {
      r().error && S(Ce);
    });
  }
  return re(he), as(he, (S) => P(z, S), () => v(z)), F(n, he), _t(le);
}
Bn(["click"]);
Ht(uc, { hostElement: {}, ui: {}, chat: {}, config: {} }, [], [], !0);
const ba = {
  brand: "generic",
  primary: "#6b46c1",
  primaryHover: "#5a3aa8",
  primaryLight: "#8b5cf6",
  primaryDark: "#4c1d95",
  background: "#ffffff",
  surface: "#f9fafb",
  surfaceHover: "#f3f4f6",
  glass: "rgba(255, 255, 255, 0.85)",
  glassDark: "rgba(249, 250, 251, 0.95)",
  text: "#1f2937",
  textSecondary: "#6b7280",
  textMuted: "#9ca3af",
  textInverse: "#ffffff"
}, Gs = {
  brand: "bot-brewers",
  // Bot Brewers Brand Colors (from botbrewers.ca)
  primary: "#1e5ba8",
  // Bot Blue
  primaryHover: "#0f2d5a",
  // Bot Dark Blue
  primaryLight: "#4a7dc4",
  // Lighter blue variant
  primaryDark: "#0f2d5a",
  // Bot Dark Blue
  background: "#faf8f5",
  // Bot Beige
  surface: "#ffffff",
  surfaceHover: "#f7fafc",
  glass: "rgba(250, 248, 245, 0.85)",
  glassDark: "rgba(255, 255, 255, 0.95)",
  // Text colors matched to website
  text: "#0a0a0a",
  // Near black for readability
  textSecondary: "#4a5568",
  // Medium gray
  textMuted: "#718096",
  // Light gray
  textInverse: "#ffffff",
  // Border colors
  border: "#e2e8f0",
  borderLight: "#f1f5f9",
  borderSubtle: "#f8fafc"
};
function mf(n = ba) {
  var e;
  return `/* ============================================
   Premium Design System - ${n.brand === "bot-brewers" ? "Bot Brewers Brand" : "Generic"}
   ============================================ */

:host {
  /* Primary Colors */
  --widget-primary: ${n.primary};
  --widget-primary-hover: ${n.primaryHover};
  --widget-primary-light: ${n.primaryLight};
  --widget-primary-dark: ${n.primaryDark};
  
  /* Gradient System - Blue to Dark Blue for Bot Brewers brand */
  --widget-gradient: linear-gradient(135deg, ${n.primary} 0%, ${n.primaryDark} 100%);
  --widget-gradient-hover: linear-gradient(135deg, ${n.primaryDark} 0%, ${n.primary} 100%);
  --widget-gradient-subtle: linear-gradient(135deg, ${n.primary}1a 0%, ${n.primaryDark}0d 100%);
  
  /* Surface Colors */
  --widget-background: ${n.background};
  --widget-surface: ${n.surface};
  --widget-surface-hover: ${n.surfaceHover};
  --widget-surface-elevated: ${n.surfaceElevated || n.background};
  --widget-glass: ${n.glass};
  --widget-glass-dark: ${n.glassDark};
  --widget-glass-subtle: ${n.glass};
  
  /* Text Colors */
  --widget-text: ${n.text};
  --widget-text-secondary: ${n.textSecondary};
  --widget-text-muted: ${n.textMuted};
  --widget-text-subtle: ${n.textSubtle || n.textMuted};
  --widget-text-inverse: ${n.textInverse};
  
  /* Semantic Colors */
  --widget-success: #10b981;
  --widget-success-light: #34d399;
  --widget-error: #ef4444;
  --widget-error-light: #f87171;
  --widget-warning: #f59e0b;
  --widget-info: #3b82f6;

  /* Accent Colors - Bot Gold (from botbrewers.ca) */
  --widget-accent: #f4a932;
  --widget-accent-light: #fbbf24;
  --widget-accent-dark: #d97706;
  --widget-accent-gold: #d4a574;   /* Warm gold accent for dark mode focus states */
  --widget-accent-gold-rgb: 212, 165, 116;  /* RGB values for opacity control */

  /* Borders - Theme-aware for dark/light mode */
  --widget-border: ${n.border || (n.isDark ? "#334155" : "#e2e8f0")};
  --widget-border-light: ${n.borderLight || (n.isDark ? "#475569" : "#f1f5f9")};
  --widget-border-subtle: ${n.borderSubtle || (n.isDark ? "#1e293b" : "#f8fafc")};
  --widget-border-focus: var(--widget-primary);
  
  /* Primary RGB for glow effects */
  --widget-primary-rgb: ${((e = n.primary.replace("#", "").match(/.{2}/g)) == null ? void 0 : e.map((t) => parseInt(t, 16)).join(", ")) || "30, 91, 168"};

  /* Shadows - Multi-layer for realistic depth (2025 standard) */
  --widget-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.04);
  --widget-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 4px 6px rgba(0, 0, 0, 0.04);
  --widget-shadow-md: 0 4px 8px rgba(0, 0, 0, 0.06), 0 8px 16px rgba(0, 0, 0, 0.04);
  --widget-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.06), 0 20px 25px -5px rgba(0, 0, 0, 0.08);
  --widget-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 40px 50px -12px rgba(0, 0, 0, 0.10);
  --widget-shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.20);
  --widget-shadow-inner: inset 0 1px 3px rgba(0, 0, 0, 0.06);
  --widget-shadow-focus: 0 0 0 3px rgba(var(--widget-primary-rgb), 0.15);
  --widget-shadow-button: 0 1px 2px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.04);
  --widget-shadow-card: 0 2px 4px rgba(0, 0, 0, 0.04), 0 4px 8px rgba(0, 0, 0, 0.02);

  /* Glow shadows for interactive elements */
  --widget-shadow-glow: 0 0 0 1px rgba(var(--widget-primary-rgb), 0.08), 0 4px 12px rgba(var(--widget-primary-rgb), 0.12);
  --widget-shadow-glow-lg: 0 0 0 1px rgba(var(--widget-primary-rgb), 0.10), 0 8px 24px rgba(var(--widget-primary-rgb), 0.18);
  
  /* Spacing */
  --widget-space-xs: 0.25rem;
  --widget-space-sm: 0.5rem;
  --widget-space: 0.75rem;
  --widget-space-md: 1rem;
  --widget-space-lg: 1.5rem;
  --widget-space-xl: 2rem;
  --widget-space-2xl: 3rem;
  --widget-space-3xl: 4rem;

  /* Widget Dimensions (2025 Best Practices) */
  --widget-width-mobile: 100%;
  --widget-height-mobile: 100%;
  --widget-width-desktop: 400px;
  --widget-height-desktop: 600px;
  --widget-height-desktop-lg: 650px;
  --widget-max-height-desktop: 80vh;
  --widget-max-height-desktop-lg: 85vh;
  --widget-min-height-desktop: 450px;

  /* Touch Targets (WCAG 2.1 AA) */
  --widget-touch-target-min: 44px;
  
  /* Border Radius */
  --widget-radius-sm: 0.375rem;
  --widget-radius: 0.5rem;
  --widget-radius-md: 0.75rem;
  --widget-radius-lg: 1rem;
  --widget-radius-xl: 1.5rem;
  --widget-radius-2xl: 2rem;
  --widget-radius-full: 9999px;
  
  /* Typography */
  --widget-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'SF Pro Display', 'Inter', sans-serif;
  --widget-font-size-xs: 0.75rem;
  --widget-font-size-sm: 0.875rem;
  --widget-font-size-base: 0.9375rem;
  --widget-font-size-md: 1rem;
  --widget-font-size-lg: 1.125rem;
  --widget-font-size-xl: 1.25rem;
  --widget-font-size-2xl: 1.5rem;
  --widget-font-size-3xl: 1.875rem;
  
  /* Font Weights */
  --widget-font-weight-light: 300;
  --widget-font-weight-normal: 400;
  --widget-font-weight-medium: 500;
  --widget-font-weight-semibold: 600;
  --widget-font-weight-bold: 700;
  
  /* Line Heights */
  --widget-line-height-none: 1;
  --widget-line-height-tight: 1.25;
  --widget-line-height-snug: 1.375;
  --widget-line-height-normal: 1.5;
  --widget-line-height-relaxed: 1.625;
  --widget-line-height-loose: 2;
  
  /* Letter Spacing */
  --widget-letter-spacing-tighter: -0.05em;
  --widget-letter-spacing-tight: -0.025em;
  --widget-letter-spacing-normal: 0em;
  --widget-letter-spacing-wide: 0.025em;
  
  /* Z-Index */
  --widget-z-dropdown: 1000;
  --widget-z-sticky: 1020;
  --widget-z-fixed: 1030;
  --widget-z-modal-backdrop: 1040;
  --widget-z-modal: 1050;
  --widget-z-popover: 1060;
  --widget-z-tooltip: 1070;
  --widget-z-base: 1060;
  
  /* Blur Effects - Enhanced for glassmorphism */
  --widget-blur-sm: 8px;
  --widget-blur: 12px;
  --widget-blur-md: 16px;
  --widget-blur-lg: 24px;
  --widget-blur-xl: 32px;

  /* Logo Filter - Theme-aware brightness adjustment */
  --widget-logo-filter: ${n.isDark ? "brightness(1.1)" : "brightness(1)"};

  /* Glassmorphism Enhancement */
  --widget-glass-border: 1px solid rgba(255, 255, 255, 0.18);
  --widget-glass-border-dark: 1px solid rgba(255, 255, 255, 0.08);
  --widget-glass-highlight: inset 0 1px 0 rgba(255, 255, 255, 0.1);

  /* Transitions - Subtle and professional */
  --widget-transition-fast: 0.15s ease;
  --widget-transition: 0.2s ease;
  --widget-transition-slow: 0.3s ease;

  /* Spring Physics Easings - Subtle, not bouncy */
  --widget-ease-spring: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --widget-ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --widget-ease-in-out-expo: cubic-bezier(0.87, 0, 0.13, 1);
}

/* Animation keyframes */
@keyframes widget-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes widget-slide-up {
  from { 
    opacity: 0; 
    transform: translateY(10px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

@keyframes widget-bounce-in {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes widget-pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

@keyframes widget-typing-dots {
  0%, 60%, 100% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-10px);
  }
}

@keyframes modernTyping {
  0%, 60%, 100% {
    transform: translateY(0) scale(1);
  }
  30% {
    transform: translateY(-2px) scale(1.1);
  }
}

/* 2025 Subtle Message Animation - Fade + slight slide */
@keyframes messageFadeIn {
  0% {
    opacity: 0;
    transform: translateY(8px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Refined Typing Indicator - Gentle pulse, not bouncy */
@keyframes typingPulse {
  0%, 100% {
    opacity: 0.4;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
}

/* Subtle button press feedback */
@keyframes buttonPress {
  0% { transform: scale(1); }
  50% { transform: scale(0.97); }
  100% { transform: scale(1); }
}

/* Floating button subtle attention */
@keyframes floatPulse {
  0%, 100% {
    box-shadow: var(--widget-shadow-lg);
  }
  50% {
    box-shadow: var(--widget-shadow-glow-lg);
  }
}

/* Animation aliases for compatibility */
@keyframes slideUp {
  from { 
    opacity: 0; 
    transform: translateY(10px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Base utility classes for consistent styling */
.widget-glass-morphism {
  background: var(--widget-glass);
  backdrop-filter: blur(var(--widget-blur-lg));
  -webkit-backdrop-filter: blur(var(--widget-blur-lg));
  border: var(--widget-glass-border);
  box-shadow: var(--widget-glass-highlight);
}

.widget-glass-morphism-subtle {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(var(--widget-blur));
  -webkit-backdrop-filter: blur(var(--widget-blur));
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.widget-premium-gradient {
  background: var(--widget-gradient);
}

.widget-premium-shadow {
  box-shadow: var(--widget-shadow-lg);
}

.widget-hover-lift {
  transition: transform var(--widget-transition) var(--widget-ease-spring),
              box-shadow var(--widget-transition) var(--widget-ease-spring);
}

.widget-hover-lift:hover {
  transform: translateY(-2px);
  box-shadow: var(--widget-shadow-xl);
}

.widget-hover-glow {
  transition: box-shadow var(--widget-transition) var(--widget-ease-spring);
}

.widget-hover-glow:hover {
  box-shadow: var(--widget-shadow-glow);
}

/* Enhanced focus-visible for accessibility */
.widget-focus-ring:focus-visible {
  outline: 2px solid var(--widget-primary);
  outline-offset: 2px;
  box-shadow: 0 0 0 4px rgba(var(--widget-primary-rgb), 0.15);
}

.widget-focus-ring:focus:not(:focus-visible) {
  outline: none;
}

.widget-text-gradient {
  background: var(--widget-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Subtle animation utilities */
.widget-animate-in {
  animation: messageFadeIn 0.25s var(--widget-ease-out-expo) forwards;
}

.widget-animate-pulse {
  animation: typingPulse 1.2s ease-in-out infinite;
}

/* Responsive design utilities */
@media (max-width: 768px) {
  :host {
    --widget-space-xs: 0.125rem;
    --widget-space-sm: 0.375rem;
    --widget-space-md: 0.75rem;
    --widget-space-lg: 1rem;
    --widget-space-xl: 1.25rem;
    --widget-space-2xl: 1.75rem;
  }
}

/* ============================================
   Progressive Enhancement for Performance
   ============================================

   backdrop-filter can be expensive on lower-end devices.
   These rules provide graceful degradation:
   1. Reduced motion preference: Disables blur effects
   2. Fallback: Solid backgrounds when blur not supported
   ============================================ */

/* Disable backdrop-filter for users who prefer reduced motion */
@media (prefers-reduced-motion: reduce) {
  .widget-glass-morphism,
  .widget-glass-morphism-subtle {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
}

/* Fallback for browsers without backdrop-filter support */
@supports not (backdrop-filter: blur(1px)) {
  .widget-glass-morphism {
    background: var(--widget-glass-dark);
  }

  .widget-glass-morphism-subtle {
    background: rgba(255, 255, 255, 0.92);
  }
}`;
}
function vf(n = ba) {
  return mf(n);
}
const gc = {
  brand: "bot-brewers",
  primary: "#1e5ba8",
  // Bot Blue
  primaryHover: "#0f2d5a",
  // Bot Dark Blue
  primaryLight: "#4a7dc4",
  // Lighter blue variant
  primaryDark: "#0f2d5a",
  // Bot Dark Blue
  background: "#ffffff",
  // Pure white background
  surface: "#fafafa",
  surfaceHover: "#f5f5f5",
  glass: "rgba(255, 255, 255, 0.98)",
  glassDark: "rgba(250, 250, 250, 0.95)",
  text: "#0f172a",
  textSecondary: "#475569",
  textMuted: "#64748b",
  textInverse: "#ffffff"
}, po = gc, mo = {
  brand: "generic",
  primary: "#f97316",
  primaryHover: "#ea580c",
  primaryLight: "#fb923c",
  primaryDark: "#c2410c",
  background: "#fffbf5",
  surface: "#fff7ed",
  surfaceHover: "#fed7aa",
  glass: "rgba(255, 251, 245, 0.95)",
  glassDark: "rgba(255, 247, 237, 0.95)",
  text: "#1f2937",
  textSecondary: "#6b7280",
  textMuted: "#9ca3af",
  textInverse: "#ffffff"
}, bf = {
  brand: "generic",
  primary: "#6b7280",
  primaryHover: "#4b5563",
  primaryLight: "#9ca3af",
  primaryDark: "#374151",
  background: "#ffffff",
  surface: "#f9fafb",
  surfaceHover: "#f3f4f6",
  glass: "rgba(255, 255, 255, 0.95)",
  glassDark: "rgba(249, 250, 251, 0.95)",
  text: "#111827",
  textSecondary: "#6b7280",
  textMuted: "#9ca3af",
  textInverse: "#ffffff"
}, wf = {
  brand: "bot-brewers",
  primary: "#f4a932",
  // Bot Gold - warm primary for dark mode
  primaryHover: "#d4a574",
  // Warm gold on hover
  primaryLight: "#fbbf24",
  // Bright gold for highlights
  primaryDark: "#b8860b",
  // Dark gold for depth
  background: "#0a0e14",
  // Deep dark (unchanged)
  surface: "#13181f",
  // Base surface
  surfaceHover: "#1a2029",
  // Hover state
  glass: "rgba(19, 24, 31, 0.65)",
  // Was 0.85
  glassDark: "rgba(26, 32, 41, 0.70)",
  // Was 0.90
  text: "#e6e8eb",
  // Primary (~13:1) - unchanged
  textSecondary: "#b0b5bc",
  // IMPROVED (~9.5:1, was #9da2a9)
  textMuted: "#8b9199",
  // IMPROVED (~6:1, was #6b7280)
  textInverse: "#0a0e14",
  // Dark text on gold buttons for contrast
  isDark: !0,
  border: "#252b34",
  // Solid neutral (was gold rgba)
  borderLight: "#363d47",
  // Medium gray
  borderSubtle: "#1c2128"
  // Very subtle
}, yf = {
  brand: "generic",
  primary: "#14b8a6",
  primaryHover: "#0d9488",
  primaryLight: "#2dd4bf",
  primaryDark: "#0f766e",
  background: "#fafafa",
  surface: "#f0fdfa",
  surfaceHover: "#ccfbf1",
  glass: "rgba(250, 250, 250, 0.95)",
  glassDark: "rgba(240, 253, 250, 0.95)",
  text: "#134e4a",
  textSecondary: "#0f766e",
  textMuted: "#14b8a6",
  textInverse: "#ffffff"
}, xf = {
  brand: "generic",
  primary: "#dc2626",
  primaryHover: "#b91c1c",
  primaryLight: "#ef4444",
  primaryDark: "#991b1b",
  background: "#ffffff",
  surface: "#fef2f2",
  surfaceHover: "#fee2e2",
  glass: "rgba(255, 255, 255, 0.95)",
  glassDark: "rgba(254, 242, 242, 0.95)",
  text: "#1f2937",
  textSecondary: "#6b7280",
  textMuted: "#9ca3af",
  textInverse: "#ffffff"
};
function _f(n) {
  return {
    "bot-brewers": Gs,
    modern: gc,
    professional: po,
    corporate: po,
    // Alias for backward compatibility
    friendly: mo,
    playful: mo,
    // Alias
    minimal: bf,
    dark: wf,
    elegant: yf,
    bold: xf,
    generic: ba,
    default: Gs
  }[n.toLowerCase()] || null;
}
function kf(n) {
  const e = _f(n) || Gs;
  return vf(e);
}
function wa(n, e) {
  const t = n.getAttribute("theme") || n.getAttribute("data-theme") || e;
  return kf(t);
}
function fc(n, e, t) {
  const i = n.querySelector('style[data-role="theme"]');
  i && (i.textContent = wa(e, t));
}
function hc(n, e, t) {
  const i = n.querySelector(`.${e}`);
  if (i) {
    const r = Di(t, "#6b46c1");
    i.style.setProperty("--widget-primary", r), i.style.setProperty("--widget-primary-hover", fe(r, -20)), i.style.setProperty("--widget-primary-light", fe(r, 20)), i.style.setProperty("--widget-primary-dark", fe(r, -30));
  }
}
class vo extends HTMLElement {
  constructor() {
    super(), this._app = null, this._currentTheme = "bot-brewers", this._onOpenChangeCallback = null, this._pendingOpenState = null, this._shadowRoot = this.attachShadow({ mode: "open" }), this._uiStore = kl(), this._chatStore = Tl(), this._configStore = Ll();
  }
  // Define which attributes we should observe for changes
  static get observedAttributes() {
    return ["theme", "data-theme", "accent-color", "position", "title", "client-id", "initial-message", "quick-questions", "open", "voice-input"];
  }
  async connectedCallback() {
    var r, s;
    const e = this.getAttribute("client-id"), t = window, i = ((r = t.AIChat) == null ? void 0 : r.clientId) || ((s = t.ChatWidget) == null ? void 0 : s.clientId);
    if (!e && !i) {
      Z.error("ChatWidget", 'Configuration missing. Please set client-id attribute or window.AIChat = { clientId: "your_client_id" }');
      return;
    }
    this.mountApp();
  }
  disconnectedCallback() {
    this._app && (dr(this._app), this._app = null);
  }
  attributeChangedCallback(e, t, i) {
    if (t !== i) {
      if ((e === "theme" || e === "data-theme") && i && (this._currentTheme = i, this._configStore.updateConfig({ theme: i }, "user"), fc(this._shadowRoot, this, this._currentTheme)), e === "accent-color" && i && hc(this._shadowRoot, "widget-root", i), e === "client-id" && i && this._app && (Z.log("ChatWidget", `Client ID changed from ${t} to ${i}, remounting widget`), dr(this._app), this._app = null, this.mountApp()), e === "title" && i && this._configStore.setUserTitle(i), e === "initial-message" && this._configStore.updateConfig({ initialMessage: i || void 0 }, "user"), e === "quick-questions")
        if (i)
          try {
            const r = JSON.parse(i);
            Array.isArray(r) ? this._configStore.setQuickQuestions(oa.validate(r, "ChatWidget")) : Z.warn("ChatWidget", "quick-questions must be an array, using defaults");
          } catch {
            Z.warn("ChatWidget", "Invalid quick-questions JSON, using defaults");
          }
        else
          this._configStore.setQuickQuestions(void 0);
      if (e === "open") {
        const r = i !== null;
        this._onOpenChangeCallback ? this._onOpenChangeCallback(r) : this._pendingOpenState = r;
      }
    }
  }
  setOnOpenChangeCallback(e) {
    this._onOpenChangeCallback = e, this._pendingOpenState !== null && (e(this._pendingOpenState), this._pendingOpenState = null);
  }
  mountApp() {
    const e = this.getAttribute("theme") || this.getAttribute("data-theme") || "bot-brewers";
    this._currentTheme = e;
    const t = document.createElement("div");
    t.className = "widget-root";
    const i = document.createElement("style");
    i.setAttribute("data-role", "theme"), i.textContent = wa(this, this._currentTheme), this._shadowRoot.innerHTML = "", this._shadowRoot.appendChild(i), this._shadowRoot.appendChild(t), this._app = rs(dc, {
      target: t,
      props: {
        hostElement: this,
        ui: this._uiStore,
        chat: this._chatStore,
        config: this._configStore
      }
    });
  }
  // Public API methods for programmatic control
  open() {
    this.setAttribute("open", ""), queueMicrotask(() => {
      this.dispatchEvent(new CustomEvent("opening", { bubbles: !0, composed: !0 }));
    });
  }
  close() {
    this.removeAttribute("open"), queueMicrotask(() => {
      this.dispatchEvent(new CustomEvent("closing", { bubbles: !0, composed: !0 }));
    });
  }
  toggle() {
    this.hasAttribute("open") ? this.close() : this.open();
  }
  get isOpen() {
    return this.hasAttribute("open");
  }
}
class Sf extends HTMLElement {
  constructor() {
    super(), this._app = null, this._currentTheme = "bot-brewers", this._shadowRoot = this.attachShadow({ mode: "open" }), this._uiStore = kl(), this._chatStore = Tl(), this._configStore = Ll();
  }
  // Observed attributes (no 'open' or 'position' — always visible, no floating button)
  static get observedAttributes() {
    return ["theme", "data-theme", "accent-color", "title", "client-id", "initial-message", "quick-questions"];
  }
  async connectedCallback() {
    var r, s;
    const e = this.getAttribute("client-id"), t = window, i = ((r = t.AIChat) == null ? void 0 : r.clientId) || ((s = t.ChatWidget) == null ? void 0 : s.clientId);
    if (!e && !i) {
      Z.error("ChatPage", 'Configuration missing. Please set client-id attribute or window.AIChat = { clientId: "your_client_id" }');
      return;
    }
    this.mountApp();
  }
  disconnectedCallback() {
    this._app && (dr(this._app), this._app = null);
  }
  attributeChangedCallback(e, t, i) {
    if (t !== i && ((e === "theme" || e === "data-theme") && i && (this._currentTheme = i, this._configStore.updateConfig({ theme: i }, "user"), fc(this._shadowRoot, this, this._currentTheme)), e === "accent-color" && i && hc(this._shadowRoot, "chat-page-root", i), e === "client-id" && i && this._app && (Z.log("ChatPage", `Client ID changed from ${t} to ${i}, remounting`), dr(this._app), this._app = null, this.mountApp()), e === "title" && i && this._configStore.setUserTitle(i), e === "initial-message" && this._configStore.updateConfig({ initialMessage: i || void 0 }, "user"), e === "quick-questions"))
      if (i)
        try {
          const r = JSON.parse(i);
          Array.isArray(r) ? this._configStore.setQuickQuestions(oa.validate(r, "ChatPage")) : Z.warn("ChatPage", "quick-questions must be an array, using defaults");
        } catch {
          Z.warn("ChatPage", "Invalid quick-questions JSON, using defaults");
        }
      else
        this._configStore.setQuickQuestions(void 0);
  }
  sendMessage(e) {
    this._shadowRoot && e && this.dispatchEvent(new CustomEvent("send-message", {
      detail: { text: e },
      bubbles: !1,
      composed: !1
    }));
  }
  mountApp() {
    const e = this.getAttribute("theme") || this.getAttribute("data-theme") || "bot-brewers";
    this._currentTheme = e;
    const t = document.createElement("div");
    t.className = "chat-page-root", t.style.cssText = "width: 100%; height: 100%;";
    const i = document.createElement("style");
    i.setAttribute("data-role", "theme"), i.textContent = wa(this, this._currentTheme);
    const r = document.createElement("style");
    r.textContent = ":host { display: block; width: 100%; height: 100%; box-sizing: border-box; }", this._shadowRoot.innerHTML = "", this._shadowRoot.appendChild(i), this._shadowRoot.appendChild(r), this._shadowRoot.appendChild(t), this._app = rs(uc, {
      target: t,
      props: {
        hostElement: this,
        ui: this._uiStore,
        chat: this._chatStore,
        config: this._configStore
      }
    });
  }
}
customElements.get("assistant-widget") ? customElements.get("chat-widget") || customElements.define("chat-widget", vo) : customElements.define("assistant-widget", vo);
customElements.get("assistant-chat-page") || customElements.define("assistant-chat-page", Sf);
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", bo) : bo();
function bo() {
  if (document.querySelector("assistant-widget, chat-widget"))
    return;
  const n = window, e = n.AIChat || n.ChatWidget;
  if (e != null && e.clientId) {
    if (e.autoInit === !1) {
      Z.log("ChatWidget", "Auto-initialization disabled");
      return;
    }
    const t = document.createElement("assistant-widget");
    document.body.appendChild(t), Z.log("ChatWidget", "Auto-initialized with client ID", e.clientId);
  }
}
export {
  Sf as AssistantChatPage,
  vo as ChatWidgetElement
};
