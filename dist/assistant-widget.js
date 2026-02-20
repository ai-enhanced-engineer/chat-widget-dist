var xc = Object.defineProperty;
var Pa = (n) => {
  throw TypeError(n);
};
var kc = (n, e, t) => e in n ? xc(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var $ = (n, e, t) => kc(n, typeof e != "symbol" ? e + "" : e, t), bs = (n, e, t) => e.has(n) || Pa("Cannot " + t);
var f = (n, e, t) => (bs(n, e, "read from private field"), t ? t.call(n) : e.get(n)), R = (n, e, t) => e.has(n) ? Pa("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), E = (n, e, t, i) => (bs(n, e, "write to private field"), i ? i.call(n, t) : e.set(n, t), t), ue = (n, e, t) => (bs(n, e, "access private method"), t);
var xo = Array.isArray, _c = Array.prototype.indexOf, Jr = Array.from, Ur = Object.keys, Fr = Object.defineProperty, An = Object.getOwnPropertyDescriptor, Tc = Object.getOwnPropertyDescriptors, Sc = Object.prototype, Ec = Array.prototype, ko = Object.getPrototypeOf, za = Object.isExtensible;
function Cc(n) {
  return typeof n == "function";
}
const Hi = () => {
};
function Ac(n) {
  for (var e = 0; e < n.length; e++)
    n[e]();
}
function _o() {
  var n, e, t = new Promise((i, r) => {
    n = i, e = r;
  });
  return { promise: t, resolve: n, reject: e };
}
const Me = 2, Ys = 4, Qs = 8, Ic = 1 << 24, qt = 16, ln = 32, bn = 64, es = 128, yt = 512, Ne = 1024, nt = 2048, Pt = 4096, tt = 8192, an = 16384, vr = 32768, Ln = 65536, $a = 1 << 17, To = 1 << 18, Un = 1 << 19, Mc = 1 << 20, rn = 1 << 25, On = 32768, As = 1 << 21, Xs = 1 << 22, pn = 1 << 23, Ji = Symbol("$state"), So = Symbol("legacy props"), Rc = Symbol(""), ti = new class extends Error {
  constructor() {
    super(...arguments);
    $(this, "name", "StaleReactionError");
    $(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}(), Zs = 3, Fn = 8;
function Eo(n) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Lc() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Oc(n) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Nc() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Dc(n) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Pc() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function zc() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function $c(n) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function qc() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Uc() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Fc() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Hc() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Wc = 1, Bc = 2, Co = 4, jc = 8, Gc = 16, Vc = 1, Yc = 4, Qc = 8, Xc = 16, Zc = 4, Ao = 1, Kc = 2, Io = "[", ts = "[!", Ks = "]", Nn = {}, Oe = Symbol(), Jc = "http://www.w3.org/1999/xhtml";
function br(n) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function ed() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let G = !1;
function sn(n) {
  G = n;
}
let B;
function $e(n) {
  if (n === null)
    throw br(), Nn;
  return B = n;
}
function Oi() {
  return $e(/* @__PURE__ */ _t(B));
}
function ae(n) {
  if (G) {
    if (/* @__PURE__ */ _t(B) !== null)
      throw br(), Nn;
    B = n;
  }
}
function ar(n = 1) {
  if (G) {
    for (var e = n, t = B; e--; )
      t = /** @type {TemplateNode} */
      /* @__PURE__ */ _t(t);
    B = t;
  }
}
function Hr(n = !0) {
  for (var e = 0, t = B; ; ) {
    if (t.nodeType === Fn) {
      var i = (
        /** @type {Comment} */
        t.data
      );
      if (i === Ks) {
        if (e === 0) return t;
        e -= 1;
      } else (i === Io || i === ts) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ _t(t)
    );
    n && t.remove(), t = r;
  }
}
function Mo(n) {
  if (!n || n.nodeType !== Fn)
    throw br(), Nn;
  return (
    /** @type {Comment} */
    n.data
  );
}
function Ro(n) {
  return n === this.v;
}
function td(n, e) {
  return n != n ? e == e : n !== e || n !== null && typeof n == "object" || typeof n == "function";
}
function Lo(n) {
  return !td(n, this.v);
}
let Qe = null;
function Ni(n) {
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
function kt(n) {
  var e = (
    /** @type {ComponentContext} */
    Qe
  ), t = e.e;
  if (t !== null) {
    e.e = null;
    for (var i of t)
      el(i);
  }
  return n !== void 0 && (e.x = n), e.i = !0, Qe = e.p, n ?? /** @type {T} */
  {};
}
function Oo() {
  return !0;
}
let xn = [];
function No() {
  var n = xn;
  xn = [], Ac(n);
}
function Hn(n) {
  if (xn.length === 0 && !er) {
    var e = xn;
    queueMicrotask(() => {
      e === xn && No();
    });
  }
  xn.push(n);
}
function nd() {
  for (; xn.length > 0; )
    No();
}
function Do(n) {
  var e = K;
  if (e === null)
    return Y.f |= pn, n;
  if (e.f & vr)
    Di(n, e);
  else {
    if (!(e.f & es))
      throw n;
    e.b.error(n);
  }
}
function Di(n, e) {
  for (; e !== null; ) {
    if (e.f & es)
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
const Ar = /* @__PURE__ */ new Set();
let j = null, Dr = null, ye = null, ct = [], ns = null, Is = !1, er = !1;
var ai, oi, kn, _n, fr, li, ci, Ie, Ms, Qi, Rs, Po, zo;
const Xr = class Xr {
  constructor() {
    R(this, Ie);
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
    R(this, ai, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    R(this, oi, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    R(this, kn, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    R(this, _n, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    R(this, fr, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    R(this, li, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    R(this, ci, /* @__PURE__ */ new Set());
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
    ct = [], Dr = null, this.apply();
    var t = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const r of e)
      ue(this, Ie, Ms).call(this, r, t);
    this.is_fork || ue(this, Ie, Po).call(this), this.is_deferred() ? (ue(this, Ie, Qi).call(this, t.effects), ue(this, Ie, Qi).call(this, t.render_effects)) : (Dr = this, j = null, qa(t.render_effects), qa(t.effects), Dr = null, (i = f(this, fr)) == null || i.resolve()), ye = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, t) {
    this.previous.has(e) || this.previous.set(e, t), e.f & pn || (this.current.set(e, e.v), ye == null || ye.set(e, e.v));
  }
  activate() {
    j = this, this.apply();
  }
  deactivate() {
    j === this && (j = null, ye = null);
  }
  flush() {
    if (this.activate(), ct.length > 0) {
      if ($o(), j !== null && j !== this)
        return;
    } else f(this, kn) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const e of f(this, oi)) e(this);
    f(this, oi).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(e) {
    E(this, kn, f(this, kn) + 1), e && E(this, _n, f(this, _n) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(e) {
    E(this, kn, f(this, kn) - 1), e && E(this, _n, f(this, _n) - 1), this.revive();
  }
  revive() {
    for (const e of f(this, li))
      f(this, ci).delete(e), De(e, nt), Dn(e);
    for (const e of f(this, ci))
      De(e, Pt), Dn(e);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(e) {
    f(this, ai).add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(e) {
    f(this, oi).add(e);
  }
  settled() {
    return (f(this, fr) ?? E(this, fr, _o())).promise;
  }
  static ensure() {
    if (j === null) {
      const e = j = new Xr();
      Ar.add(j), er || Xr.enqueue(() => {
        j === e && e.flush();
      });
    }
    return j;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    Hn(e);
  }
  apply() {
  }
};
ai = new WeakMap(), oi = new WeakMap(), kn = new WeakMap(), _n = new WeakMap(), fr = new WeakMap(), li = new WeakMap(), ci = new WeakMap(), Ie = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {EffectTarget} target
 */
Ms = function(e, t) {
  var d;
  e.f ^= Ne;
  for (var i = e.first; i !== null; ) {
    var r = i.f, s = (r & (ln | bn)) !== 0, a = s && (r & Ne) !== 0, o = a || (r & tt) !== 0 || this.skipped_effects.has(i);
    if (i.f & es && ((d = i.b) != null && d.is_pending()) && (t = {
      parent: t,
      effect: i,
      effects: [],
      render_effects: []
    }), !o && i.fn !== null) {
      s ? i.f ^= Ne : r & Ys ? t.effects.push(i) : wr(i) && (i.f & qt && f(this, li).add(i), cr(i));
      var l = i.first;
      if (l !== null) {
        i = l;
        continue;
      }
    }
    var c = i.parent;
    for (i = i.next; i === null && c !== null; )
      c === t.effect && (ue(this, Ie, Qi).call(this, t.effects), ue(this, Ie, Qi).call(this, t.render_effects), t = /** @type {EffectTarget} */
      t.parent), i = c.next, c = c.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
Qi = function(e) {
  for (const t of e)
    t.f & nt ? f(this, li).add(t) : t.f & Pt && f(this, ci).add(t), ue(this, Ie, Rs).call(this, t.deps), De(t, Ne);
}, /**
 * @param {Value[] | null} deps
 */
Rs = function(e) {
  if (e !== null)
    for (const t of e)
      !(t.f & Me) || !(t.f & On) || (t.f ^= On, ue(this, Ie, Rs).call(
        this,
        /** @type {Derived} */
        t.deps
      ));
}, Po = function() {
  if (f(this, _n) === 0) {
    for (const e of f(this, ai)) e();
    f(this, ai).clear();
  }
  f(this, kn) === 0 && ue(this, Ie, zo).call(this);
}, zo = function() {
  var s;
  if (Ar.size > 1) {
    this.previous.clear();
    var e = ye, t = !0, i = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const a of Ar) {
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
        var r = ct;
        ct = [];
        const c = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map();
        for (const u of o)
          qo(u, l, c, d);
        if (ct.length > 0) {
          j = a, a.apply();
          for (const u of ct)
            ue(s = a, Ie, Ms).call(s, u, i);
          a.deactivate();
        }
        ct = r;
      }
    }
    j = null, ye = e;
  }
  this.committed = !0, Ar.delete(this);
};
let Lt = Xr;
function V(n) {
  var e = er;
  er = !0;
  try {
    for (var t; ; ) {
      if (nd(), ct.length === 0 && (j == null || j.flush(), ct.length === 0))
        return ns = null, /** @type {T} */
        t;
      $o();
    }
  } finally {
    er = e;
  }
}
function $o() {
  var n = Mn;
  Is = !0;
  var e = null;
  try {
    var t = 0;
    for (Br(!0); ct.length > 0; ) {
      var i = Lt.ensure();
      if (t++ > 1e3) {
        var r, s;
        id();
      }
      i.process(ct), mn.clear();
    }
  } finally {
    Is = !1, Br(n), ns = null;
  }
}
function id() {
  try {
    Pc();
  } catch (n) {
    Di(n, ns);
  }
}
let ht = null;
function qa(n) {
  var e = n.length;
  if (e !== 0) {
    for (var t = 0; t < e; ) {
      var i = n[t++];
      if (!(i.f & (an | tt)) && wr(i) && (ht = /* @__PURE__ */ new Set(), cr(i), i.deps === null && i.first === null && i.nodes === null && (i.teardown === null && i.ac === null ? rl(i) : i.fn = null), (ht == null ? void 0 : ht.size) > 0)) {
        mn.clear();
        for (const r of ht) {
          if (r.f & (an | tt)) continue;
          const s = [r];
          let a = r.parent;
          for (; a !== null; )
            ht.has(a) && (ht.delete(a), s.push(a)), a = a.parent;
          for (let o = s.length - 1; o >= 0; o--) {
            const l = s[o];
            l.f & (an | tt) || cr(l);
          }
        }
        ht.clear();
      }
    }
    ht = null;
  }
}
function qo(n, e, t, i) {
  if (!t.has(n) && (t.add(n), n.reactions !== null))
    for (const r of n.reactions) {
      const s = r.f;
      s & Me ? qo(
        /** @type {Derived} */
        r,
        e,
        t,
        i
      ) : s & (Xs | qt) && !(s & nt) && Uo(r, e, i) && (De(r, nt), Dn(
        /** @type {Effect} */
        r
      ));
    }
}
function Uo(n, e, t) {
  const i = t.get(n);
  if (i !== void 0) return i;
  if (n.deps !== null)
    for (const r of n.deps) {
      if (e.includes(r))
        return !0;
      if (r.f & Me && Uo(
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
function Dn(n) {
  for (var e = ns = n; e.parent !== null; ) {
    e = e.parent;
    var t = e.f;
    if (Is && e === K && t & qt && !(t & To))
      return;
    if (t & (bn | ln)) {
      if (!(t & Ne)) return;
      e.f ^= Ne;
    }
  }
  ct.push(e);
}
function rd(n) {
  let e = 0, t = Pn(0), i;
  return () => {
    or() && (v(t), rs(() => (e === 0 && (i = Bn(() => n(() => tr(t)))), e += 1, () => {
      Hn(() => {
        e -= 1, e === 0 && (i == null || i(), i = void 0, tr(t));
      });
    })));
  };
}
var sd = Ln | Un | es;
function ad(n, e, t) {
  new od(n, e, t);
}
var at, Ke, hr, At, Tn, It, ot, Ge, Mt, en, gn, Sn, fn, En, hn, Zr, xe, Fo, Ho, Ls, Pr, zr, Os;
class od {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, t, i) {
    R(this, xe);
    /** @type {Boundary | null} */
    $(this, "parent");
    R(this, at, !1);
    /** @type {TemplateNode} */
    R(this, Ke);
    /** @type {TemplateNode | null} */
    R(this, hr, G ? B : null);
    /** @type {BoundaryProps} */
    R(this, At);
    /** @type {((anchor: Node) => void)} */
    R(this, Tn);
    /** @type {Effect} */
    R(this, It);
    /** @type {Effect | null} */
    R(this, ot, null);
    /** @type {Effect | null} */
    R(this, Ge, null);
    /** @type {Effect | null} */
    R(this, Mt, null);
    /** @type {DocumentFragment | null} */
    R(this, en, null);
    /** @type {TemplateNode | null} */
    R(this, gn, null);
    R(this, Sn, 0);
    R(this, fn, 0);
    R(this, En, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    R(this, hn, null);
    R(this, Zr, rd(() => (E(this, hn, Pn(f(this, Sn))), () => {
      E(this, hn, null);
    })));
    E(this, Ke, e), E(this, At, t), E(this, Tn, i), this.parent = /** @type {Effect} */
    K.b, E(this, at, !!f(this, At).pending), E(this, It, na(() => {
      if (K.b = this, G) {
        const s = f(this, hr);
        Oi(), /** @type {Comment} */
        s.nodeType === Fn && /** @type {Comment} */
        s.data === ts ? ue(this, xe, Ho).call(this) : ue(this, xe, Fo).call(this);
      } else {
        var r = ue(this, xe, Ls).call(this);
        try {
          E(this, ot, dt(() => i(r)));
        } catch (s) {
          this.error(s);
        }
        f(this, fn) > 0 ? ue(this, xe, zr).call(this) : E(this, at, !1);
      }
      return () => {
        var s;
        (s = f(this, gn)) == null || s.remove();
      };
    }, sd)), G && E(this, Ke, B);
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return f(this, at) || !!this.parent && this.parent.is_pending();
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
    ue(this, xe, Os).call(this, e), E(this, Sn, f(this, Sn) + e), f(this, hn) && Pi(f(this, hn), f(this, Sn));
  }
  get_effect_pending() {
    return f(this, Zr).call(this), v(
      /** @type {Source<number>} */
      f(this, hn)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var t = f(this, At).onerror;
    let i = f(this, At).failed;
    if (f(this, En) || !t && !i)
      throw e;
    f(this, ot) && (qe(f(this, ot)), E(this, ot, null)), f(this, Ge) && (qe(f(this, Ge)), E(this, Ge, null)), f(this, Mt) && (qe(f(this, Mt)), E(this, Mt, null)), G && ($e(
      /** @type {TemplateNode} */
      f(this, hr)
    ), ar(), $e(Hr()));
    var r = !1, s = !1;
    const a = () => {
      if (r) {
        ed();
        return;
      }
      r = !0, s && Hc(), Lt.ensure(), E(this, Sn, 0), f(this, Mt) !== null && In(f(this, Mt), () => {
        E(this, Mt, null);
      }), E(this, at, this.has_pending_snippet()), E(this, ot, ue(this, xe, Pr).call(this, () => (E(this, En, !1), dt(() => f(this, Tn).call(this, f(this, Ke)))))), f(this, fn) > 0 ? ue(this, xe, zr).call(this) : E(this, at, !1);
    };
    var o = Y;
    try {
      Ve(null), s = !0, t == null || t(e, a), s = !1;
    } catch (l) {
      Di(l, f(this, It) && f(this, It).parent);
    } finally {
      Ve(o);
    }
    i && Hn(() => {
      E(this, Mt, ue(this, xe, Pr).call(this, () => {
        Lt.ensure(), E(this, En, !0);
        try {
          return dt(() => {
            i(
              f(this, Ke),
              () => e,
              () => a
            );
          });
        } catch (l) {
          return Di(
            l,
            /** @type {Effect} */
            f(this, It).parent
          ), null;
        } finally {
          E(this, En, !1);
        }
      }));
    });
  }
}
at = new WeakMap(), Ke = new WeakMap(), hr = new WeakMap(), At = new WeakMap(), Tn = new WeakMap(), It = new WeakMap(), ot = new WeakMap(), Ge = new WeakMap(), Mt = new WeakMap(), en = new WeakMap(), gn = new WeakMap(), Sn = new WeakMap(), fn = new WeakMap(), En = new WeakMap(), hn = new WeakMap(), Zr = new WeakMap(), xe = new WeakSet(), Fo = function() {
  try {
    E(this, ot, dt(() => f(this, Tn).call(this, f(this, Ke))));
  } catch (e) {
    this.error(e);
  }
  E(this, at, !1);
}, Ho = function() {
  const e = f(this, At).pending;
  e && (E(this, Ge, dt(() => e(f(this, Ke)))), Lt.enqueue(() => {
    var t = ue(this, xe, Ls).call(this);
    E(this, ot, ue(this, xe, Pr).call(this, () => (Lt.ensure(), dt(() => f(this, Tn).call(this, t))))), f(this, fn) > 0 ? ue(this, xe, zr).call(this) : (In(
      /** @type {Effect} */
      f(this, Ge),
      () => {
        E(this, Ge, null);
      }
    ), E(this, at, !1));
  }));
}, Ls = function() {
  var e = f(this, Ke);
  return f(this, at) && (E(this, gn, ut()), f(this, Ke).before(f(this, gn)), e = f(this, gn)), e;
}, /**
 * @param {() => Effect | null} fn
 */
Pr = function(e) {
  var t = K, i = Y, r = Qe;
  zt(f(this, It)), Ve(f(this, It)), Ni(f(this, It).ctx);
  try {
    return e();
  } catch (s) {
    return Do(s), null;
  } finally {
    zt(t), Ve(i), Ni(r);
  }
}, zr = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    f(this, At).pending
  );
  f(this, ot) !== null && (E(this, en, document.createDocumentFragment()), f(this, en).append(
    /** @type {TemplateNode} */
    f(this, gn)
  ), ol(f(this, ot), f(this, en))), f(this, Ge) === null && E(this, Ge, dt(() => e(f(this, Ke))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
Os = function(e) {
  var t;
  if (!this.has_pending_snippet()) {
    this.parent && ue(t = this.parent, xe, Os).call(t, e);
    return;
  }
  E(this, fn, f(this, fn) + e), f(this, fn) === 0 && (E(this, at, !1), f(this, Ge) && In(f(this, Ge), () => {
    E(this, Ge, null);
  }), f(this, en) && (f(this, Ke).before(f(this, en)), E(this, en, null)));
};
function ld(n, e, t, i) {
  const r = is;
  if (t.length === 0 && n.length === 0) {
    i(e.map(r));
    return;
  }
  var s = j, a = (
    /** @type {Effect} */
    K
  ), o = cd();
  function l() {
    Promise.all(t.map((c) => /* @__PURE__ */ dd(c))).then((c) => {
      o();
      try {
        i([...e.map(r), ...c]);
      } catch (d) {
        a.f & an || Di(d, a);
      }
      s == null || s.deactivate(), Wr();
    }).catch((c) => {
      Di(c, a);
    });
  }
  n.length > 0 ? Promise.all(n).then(() => {
    o();
    try {
      return l();
    } finally {
      s == null || s.deactivate(), Wr();
    }
  }) : l();
}
function cd() {
  var n = K, e = Y, t = Qe, i = j;
  return function(s = !0) {
    zt(n), Ve(e), Ni(t), s && (i == null || i.activate());
  };
}
function Wr() {
  zt(null), Ve(null), Ni(null);
}
// @__NO_SIDE_EFFECTS__
function is(n) {
  var e = Me | nt, t = Y !== null && Y.f & Me ? (
    /** @type {Derived} */
    Y
  ) : null;
  return K !== null && (K.f |= Un), {
    ctx: Qe,
    deps: null,
    effects: null,
    equals: Ro,
    f: e,
    fn: n,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Oe
    ),
    wv: 0,
    parent: t ?? K,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function dd(n, e) {
  let t = (
    /** @type {Effect | null} */
    K
  );
  t === null && Lc();
  var i = (
    /** @type {Boundary} */
    t.b
  ), r = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = Pn(
    /** @type {V} */
    Oe
  ), a = !Y, o = /* @__PURE__ */ new Map();
  return yd(() => {
    var h;
    var l = _o();
    r = l.promise;
    try {
      Promise.resolve(n()).then(l.resolve, l.reject).then(() => {
        c === j && c.committed && c.deactivate(), Wr();
      });
    } catch (p) {
      l.reject(p), Wr();
    }
    var c = (
      /** @type {Batch} */
      j
    );
    if (a) {
      var d = !i.is_pending();
      i.update_pending_count(1), c.increment(d), (h = o.get(c)) == null || h.reject(ti), o.delete(c), o.set(c, l);
    }
    const u = (p, _ = void 0) => {
      if (c.activate(), _)
        _ !== ti && (s.f |= pn, Pi(s, _));
      else {
        s.f & pn && (s.f ^= pn), Pi(s, p);
        for (const [b, m] of o) {
          if (o.delete(b), b === c) break;
          m.reject(ti);
        }
      }
      a && (i.update_pending_count(-1), c.decrement(d));
    };
    l.promise.then(u, (p) => u(null, p || "unknown"));
  }), Jo(() => {
    for (const l of o.values())
      l.reject(ti);
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
  const e = /* @__PURE__ */ is(n);
  return ll(e), e;
}
// @__NO_SIDE_EFFECTS__
function Wo(n) {
  const e = /* @__PURE__ */ is(n);
  return e.equals = Lo, e;
}
function Bo(n) {
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
function ud(n) {
  for (var e = n.parent; e !== null; ) {
    if (!(e.f & Me))
      return e.f & an ? null : (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function Js(n) {
  var e, t = K;
  zt(ud(n));
  try {
    n.f &= ~On, Bo(n), e = gl(n);
  } finally {
    zt(t);
  }
  return e;
}
function jo(n) {
  var e = Js(n);
  if (n.equals(e) || (j != null && j.is_fork || (n.v = e), n.wv = dl()), !Wn)
    if (ye !== null)
      (or() || j != null && j.is_fork) && ye.set(n, e);
    else {
      var t = n.f & yt ? Ne : Pt;
      De(n, t);
    }
}
let Ns = /* @__PURE__ */ new Set();
const mn = /* @__PURE__ */ new Map();
let Go = !1;
function Pn(n, e) {
  var t = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: n,
    reactions: null,
    equals: Ro,
    rv: 0,
    wv: 0
  };
  return t;
}
// @__NO_SIDE_EFFECTS__
function U(n, e) {
  const t = Pn(n);
  return ll(t), t;
}
// @__NO_SIDE_EFFECTS__
function Vo(n, e = !1, t = !0) {
  const i = Pn(n);
  return e || (i.equals = Lo), i;
}
function N(n, e, t = !1) {
  Y !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ot || Y.f & $a) && Oo() && Y.f & (Me | qt | Xs | $a) && !(Ue != null && Ue.includes(n)) && Fc();
  let i = t ? we(e) : e;
  return Pi(n, i);
}
function Pi(n, e) {
  if (!n.equals(e)) {
    var t = n.v;
    Wn ? mn.set(n, e) : mn.set(n, t), n.v = e;
    var i = Lt.ensure();
    i.capture(n, t), n.f & Me && (n.f & nt && Js(
      /** @type {Derived} */
      n
    ), De(n, n.f & yt ? Ne : Pt)), n.wv = dl(), Yo(n, nt), K !== null && K.f & Ne && !(K.f & (ln | bn)) && (st === null ? kd([n]) : st.push(n)), !i.is_fork && Ns.size > 0 && !Go && gd();
  }
  return e;
}
function gd() {
  Go = !1;
  var n = Mn;
  Br(!0);
  const e = Array.from(Ns);
  try {
    for (const t of e)
      t.f & Ne && De(t, Pt), wr(t) && cr(t);
  } finally {
    Br(n);
  }
  Ns.clear();
}
function tr(n) {
  N(n, n.v + 1);
}
function Yo(n, e) {
  var t = n.reactions;
  if (t !== null)
    for (var i = t.length, r = 0; r < i; r++) {
      var s = t[r], a = s.f, o = (a & nt) === 0;
      if (o && De(s, e), a & Me) {
        var l = (
          /** @type {Derived} */
          s
        );
        ye == null || ye.delete(l), a & On || (a & yt && (s.f |= On), Yo(l, Pt));
      } else o && (a & qt && ht !== null && ht.add(
        /** @type {Effect} */
        s
      ), Dn(
        /** @type {Effect} */
        s
      ));
    }
}
function we(n) {
  if (typeof n != "object" || n === null || Ji in n)
    return n;
  const e = ko(n);
  if (e !== Sc && e !== Ec)
    return n;
  var t = /* @__PURE__ */ new Map(), i = xo(n), r = /* @__PURE__ */ U(0), s = Rn, a = (o) => {
    if (Rn === s)
      return o();
    var l = Y, c = Rn;
    Ve(null), Wa(s);
    var d = o();
    return Ve(l), Wa(c), d;
  };
  return i && t.set("length", /* @__PURE__ */ U(
    /** @type {any[]} */
    n.length
  )), new Proxy(
    /** @type {any} */
    n,
    {
      defineProperty(o, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && qc();
        var d = t.get(l);
        return d === void 0 ? d = a(() => {
          var u = /* @__PURE__ */ U(c.value);
          return t.set(l, u), u;
        }) : N(d, c.value, !0), !0;
      },
      deleteProperty(o, l) {
        var c = t.get(l);
        if (c === void 0) {
          if (l in o) {
            const d = a(() => /* @__PURE__ */ U(Oe));
            t.set(l, d), tr(r);
          }
        } else
          N(c, Oe), tr(r);
        return !0;
      },
      get(o, l, c) {
        var p;
        if (l === Ji)
          return n;
        var d = t.get(l), u = l in o;
        if (d === void 0 && (!u || (p = An(o, l)) != null && p.writable) && (d = a(() => {
          var _ = we(u ? o[l] : Oe), b = /* @__PURE__ */ U(_);
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
        if (c !== void 0 || K !== null && (!d || (h = An(o, l)) != null && h.writable)) {
          c === void 0 && (c = a(() => {
            var p = d ? we(o[l]) : Oe, _ = /* @__PURE__ */ U(p);
            return _;
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
            var _ = t.get(p + "");
            _ !== void 0 ? N(_, Oe) : p in o && (_ = a(() => /* @__PURE__ */ U(Oe)), t.set(p + "", _));
          }
        if (u === void 0)
          (!h || (w = An(o, l)) != null && w.writable) && (u = a(() => /* @__PURE__ */ U(void 0)), N(u, we(c)), t.set(l, u));
        else {
          h = u.v !== Oe;
          var b = a(() => we(c));
          N(u, b);
        }
        var m = Reflect.getOwnPropertyDescriptor(o, l);
        if (m != null && m.set && m.set.call(d, c), !h) {
          if (i && typeof l == "string") {
            var T = (
              /** @type {Source<number>} */
              t.get("length")
            ), z = Number(l);
            Number.isInteger(z) && z >= T.v && N(T, z + 1);
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
        Uc();
      }
    }
  );
}
var Ua, Qo, Xo, Zo;
function Ds() {
  if (Ua === void 0) {
    Ua = window, Qo = /Firefox/.test(navigator.userAgent);
    var n = Element.prototype, e = Node.prototype, t = Text.prototype;
    Xo = An(e, "firstChild").get, Zo = An(e, "nextSibling").get, za(n) && (n.__click = void 0, n.__className = void 0, n.__attributes = null, n.__style = void 0, n.__e = void 0), za(t) && (t.__t = void 0);
  }
}
function ut(n = "") {
  return document.createTextNode(n);
}
// @__NO_SIDE_EFFECTS__
function Ae(n) {
  return (
    /** @type {TemplateNode | null} */
    Xo.call(n)
  );
}
// @__NO_SIDE_EFFECTS__
function _t(n) {
  return (
    /** @type {TemplateNode | null} */
    Zo.call(n)
  );
}
function oe(n, e) {
  if (!G)
    return /* @__PURE__ */ Ae(n);
  var t = /* @__PURE__ */ Ae(B);
  if (t === null)
    t = B.appendChild(ut());
  else if (e && t.nodeType !== Zs) {
    var i = ut();
    return t == null || t.before(i), $e(i), i;
  }
  return $e(t), t;
}
function on(n, e = !1) {
  if (!G) {
    var t = /* @__PURE__ */ Ae(n);
    return t instanceof Comment && t.data === "" ? /* @__PURE__ */ _t(t) : t;
  }
  if (e && (B == null ? void 0 : B.nodeType) !== Zs) {
    var i = ut();
    return B == null || B.before(i), $e(i), i;
  }
  return B;
}
function le(n, e = 1, t = !1) {
  let i = G ? B : n;
  for (var r; e--; )
    r = i, i = /** @type {TemplateNode} */
    /* @__PURE__ */ _t(i);
  if (!G)
    return i;
  if (t && (i == null ? void 0 : i.nodeType) !== Zs) {
    var s = ut();
    return i === null ? r == null || r.after(s) : i.before(s), $e(s), s;
  }
  return $e(i), i;
}
function ea(n) {
  n.textContent = "";
}
function Ko() {
  return !1;
}
function fd(n) {
  G && /* @__PURE__ */ Ae(n) !== null && ea(n);
}
let Fa = !1;
function hd() {
  Fa || (Fa = !0, document.addEventListener(
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
  var e = Y, t = K;
  Ve(null), zt(null);
  try {
    return n();
  } finally {
    Ve(e), zt(t);
  }
}
function pd(n, e, t, i = t) {
  n.addEventListener(e, () => $i(t));
  const r = n.__on_r;
  r ? n.__on_r = () => {
    r(), i(!0);
  } : n.__on_r = () => i(!0), hd();
}
function md(n) {
  K === null && (Y === null && Dc(), Nc()), Wn && Oc();
}
function vd(n, e) {
  var t = e.last;
  t === null ? e.last = e.first = n : (t.next = n, n.prev = t, e.last = n);
}
function Ut(n, e, t) {
  var i = K;
  i !== null && i.f & tt && (n |= tt);
  var r = {
    ctx: Qe,
    deps: null,
    nodes: null,
    f: n | nt | yt,
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
      cr(r), r.f |= vr;
    } catch (o) {
      throw qe(r), o;
    }
  else e !== null && Dn(r);
  var s = r;
  if (t && s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
  !(s.f & Un) && (s = s.first, n & qt && n & Ln && s !== null && (s.f |= Ln)), s !== null && (s.parent = i, i !== null && vd(s, i), Y !== null && Y.f & Me && !(n & bn))) {
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
function Jo(n) {
  const e = Ut(Qs, null, !1);
  return De(e, Ne), e.teardown = n, e;
}
function si(n) {
  md();
  var e = (
    /** @type {Effect} */
    K.f
  ), t = !Y && (e & ln) !== 0 && (e & vr) === 0;
  if (t) {
    var i = (
      /** @type {ComponentContext} */
      Qe
    );
    (i.e ?? (i.e = [])).push(n);
  } else
    return el(n);
}
function el(n) {
  return Ut(Ys | Mc, n, !1);
}
function bd(n) {
  Lt.ensure();
  const e = Ut(bn | Un, n, !0);
  return () => {
    qe(e);
  };
}
function wd(n) {
  Lt.ensure();
  const e = Ut(bn | Un, n, !0);
  return (t = {}) => new Promise((i) => {
    t.outro ? In(e, () => {
      qe(e), i(void 0);
    }) : (qe(e), i(void 0));
  });
}
function ta(n) {
  return Ut(Ys, n, !1);
}
function yd(n) {
  return Ut(Xs | Un, n, !0);
}
function rs(n, e = 0) {
  return Ut(Qs | e, n, !0);
}
function Ye(n, e = [], t = [], i = []) {
  ld(i, e, t, (r) => {
    Ut(Qs, () => n(...r.map(v)), !0);
  });
}
function na(n, e = 0) {
  var t = Ut(qt | e, n, !0);
  return t;
}
function dt(n) {
  return Ut(ln | Un, n, !0);
}
function tl(n) {
  var e = n.teardown;
  if (e !== null) {
    const t = Wn, i = Y;
    Ha(!0), Ve(null);
    try {
      e.call(null);
    } finally {
      Ha(t), Ve(i);
    }
  }
}
function nl(n, e = !1) {
  var t = n.first;
  for (n.first = n.last = null; t !== null; ) {
    const r = t.ac;
    r !== null && $i(() => {
      r.abort(ti);
    });
    var i = t.next;
    t.f & bn ? t.parent = null : qe(t, e), t = i;
  }
}
function xd(n) {
  for (var e = n.first; e !== null; ) {
    var t = e.next;
    e.f & ln || qe(e), e = t;
  }
}
function qe(n, e = !0) {
  var t = !1;
  (e || n.f & To) && n.nodes !== null && n.nodes.end !== null && (il(
    n.nodes.start,
    /** @type {TemplateNode} */
    n.nodes.end
  ), t = !0), nl(n, e && !t), jr(n, 0), De(n, an);
  var i = n.nodes && n.nodes.t;
  if (i !== null)
    for (const s of i)
      s.stop();
  tl(n);
  var r = n.parent;
  r !== null && r.first !== null && rl(n), n.next = n.prev = n.teardown = n.ctx = n.deps = n.fn = n.nodes = n.ac = null;
}
function il(n, e) {
  for (; n !== null; ) {
    var t = n === e ? null : /* @__PURE__ */ _t(n);
    n.remove(), n = t;
  }
}
function rl(n) {
  var e = n.parent, t = n.prev, i = n.next;
  t !== null && (t.next = i), i !== null && (i.prev = t), e !== null && (e.first === n && (e.first = i), e.last === n && (e.last = t));
}
function In(n, e, t = !0) {
  var i = [];
  sl(n, i, !0);
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
function sl(n, e, t) {
  if (!(n.f & tt)) {
    n.f ^= tt;
    var i = n.nodes && n.nodes.t;
    if (i !== null)
      for (const o of i)
        (o.is_global || t) && e.push(o);
    for (var r = n.first; r !== null; ) {
      var s = r.next, a = (r.f & Ln) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (r.f & ln) !== 0 && (n.f & qt) !== 0;
      sl(r, e, a ? t : !1), r = s;
    }
  }
}
function ia(n) {
  al(n, !0);
}
function al(n, e) {
  if (n.f & tt) {
    n.f ^= tt, n.f & Ne || (De(n, nt), Dn(n));
    for (var t = n.first; t !== null; ) {
      var i = t.next, r = (t.f & Ln) !== 0 || (t.f & ln) !== 0;
      al(t, r ? e : !1), t = i;
    }
    var s = n.nodes && n.nodes.t;
    if (s !== null)
      for (const a of s)
        (a.is_global || e) && a.in();
  }
}
function ol(n, e) {
  if (n.nodes)
    for (var t = n.nodes.start, i = n.nodes.end; t !== null; ) {
      var r = t === i ? null : /* @__PURE__ */ _t(t);
      e.append(t), t = r;
    }
}
let Mn = !1;
function Br(n) {
  Mn = n;
}
let Wn = !1;
function Ha(n) {
  Wn = n;
}
let Y = null, Ot = !1;
function Ve(n) {
  Y = n;
}
let K = null;
function zt(n) {
  K = n;
}
let Ue = null;
function ll(n) {
  Y !== null && (Ue === null ? Ue = [n] : Ue.push(n));
}
let ze = null, Ze = 0, st = null;
function kd(n) {
  st = n;
}
let cl = 1, lr = 0, Rn = lr;
function Wa(n) {
  Rn = n;
}
function dl() {
  return ++cl;
}
function wr(n) {
  var e = n.f;
  if (e & nt)
    return !0;
  if (e & Me && (n.f &= ~On), e & Pt) {
    var t = n.deps;
    if (t !== null)
      for (var i = t.length, r = 0; r < i; r++) {
        var s = t[r];
        if (wr(
          /** @type {Derived} */
          s
        ) && jo(
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
function ul(n, e, t = !0) {
  var i = n.reactions;
  if (i !== null && !(Ue != null && Ue.includes(n)))
    for (var r = 0; r < i.length; r++) {
      var s = i[r];
      s.f & Me ? ul(
        /** @type {Derived} */
        s,
        e,
        !1
      ) : e === s && (t ? De(s, nt) : s.f & Ne && De(s, Pt), Dn(
        /** @type {Effect} */
        s
      ));
    }
}
function gl(n) {
  var _;
  var e = ze, t = Ze, i = st, r = Y, s = Ue, a = Qe, o = Ot, l = Rn, c = n.f;
  ze = /** @type {null | Value[]} */
  null, Ze = 0, st = null, Y = c & (ln | bn) ? null : n, Ue = null, Ni(n.ctx), Ot = !1, Rn = ++lr, n.ac !== null && ($i(() => {
    n.ac.abort(ti);
  }), n.ac = null);
  try {
    n.f |= As;
    var d = (
      /** @type {Function} */
      n.fn
    ), u = d(), h = n.deps;
    if (ze !== null) {
      var p;
      if (jr(n, Ze), h !== null && Ze > 0)
        for (h.length = Ze + ze.length, p = 0; p < ze.length; p++)
          h[Ze + p] = ze[p];
      else
        n.deps = h = ze;
      if (or() && n.f & yt)
        for (p = Ze; p < h.length; p++)
          ((_ = h[p]).reactions ?? (_.reactions = [])).push(n);
    } else h !== null && Ze < h.length && (jr(n, Ze), h.length = Ze);
    if (Oo() && st !== null && !Ot && h !== null && !(n.f & (Me | Pt | nt)))
      for (p = 0; p < /** @type {Source[]} */
      st.length; p++)
        ul(
          st[p],
          /** @type {Effect} */
          n
        );
    return r !== null && r !== n && (lr++, st !== null && (i === null ? i = st : i.push(.../** @type {Source[]} */
    st))), n.f & pn && (n.f ^= pn), u;
  } catch (b) {
    return Do(b);
  } finally {
    n.f ^= As, ze = e, Ze = t, st = i, Y = r, Ue = s, Ni(a), Ot = o, Rn = l;
  }
}
function _d(n, e) {
  let t = e.reactions;
  if (t !== null) {
    var i = _c.call(t, n);
    if (i !== -1) {
      var r = t.length - 1;
      r === 0 ? t = e.reactions = null : (t[i] = t[r], t.pop());
    }
  }
  t === null && e.f & Me && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ze === null || !ze.includes(e)) && (De(e, Pt), e.f & yt && (e.f ^= yt, e.f &= ~On), Bo(
    /** @type {Derived} **/
    e
  ), jr(
    /** @type {Derived} **/
    e,
    0
  ));
}
function jr(n, e) {
  var t = n.deps;
  if (t !== null)
    for (var i = e; i < t.length; i++)
      _d(n, t[i]);
}
function cr(n) {
  var e = n.f;
  if (!(e & an)) {
    De(n, Ne);
    var t = K, i = Mn;
    K = n, Mn = !0;
    try {
      e & (qt | Ic) ? xd(n) : nl(n), tl(n);
      var r = gl(n);
      n.teardown = typeof r == "function" ? r : null, n.wv = cl;
      var s;
    } finally {
      Mn = i, K = t;
    }
  }
}
async function fl() {
  await Promise.resolve(), V();
}
function v(n) {
  var e = n.f, t = (e & Me) !== 0;
  if (Y !== null && !Ot) {
    var i = K !== null && (K.f & an) !== 0;
    if (!i && !(Ue != null && Ue.includes(n))) {
      var r = Y.deps;
      if (Y.f & As)
        n.rv < lr && (n.rv = lr, ze === null && r !== null && r[Ze] === n ? Ze++ : ze === null ? ze = [n] : ze.includes(n) || ze.push(n));
      else {
        (Y.deps ?? (Y.deps = [])).push(n);
        var s = n.reactions;
        s === null ? n.reactions = [Y] : s.includes(Y) || s.push(Y);
      }
    }
  }
  if (Wn) {
    if (mn.has(n))
      return mn.get(n);
    if (t) {
      var a = (
        /** @type {Derived} */
        n
      ), o = a.v;
      return (!(a.f & Ne) && a.reactions !== null || pl(a)) && (o = Js(a)), mn.set(a, o), o;
    }
  } else t && (!(ye != null && ye.has(n)) || j != null && j.is_fork && !or()) && (a = /** @type {Derived} */
  n, wr(a) && jo(a), Mn && or() && !(a.f & yt) && hl(a));
  if (ye != null && ye.has(n))
    return ye.get(n);
  if (n.f & pn)
    throw n.v;
  return n.v;
}
function hl(n) {
  if (n.deps !== null) {
    n.f ^= yt;
    for (const e of n.deps)
      (e.reactions ?? (e.reactions = [])).push(n), e.f & Me && !(e.f & yt) && hl(
        /** @type {Derived} */
        e
      );
  }
}
function pl(n) {
  if (n.v === Oe) return !0;
  if (n.deps === null) return !1;
  for (const e of n.deps)
    if (mn.has(e) || e.f & Me && pl(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Bn(n) {
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
const Sd = ["touchstart", "touchmove"];
function Ed(n) {
  return Sd.includes(n);
}
const ml = /* @__PURE__ */ new Set(), Ps = /* @__PURE__ */ new Set();
function Cd(n, e, t, i = {}) {
  function r(s) {
    if (i.capture || Xi.call(e, s), !s.cancelBubble)
      return $i(() => t == null ? void 0 : t.call(this, s));
  }
  return n.startsWith("pointer") || n.startsWith("touch") || n === "wheel" ? Hn(() => {
    e.addEventListener(n, r, i);
  }) : e.addEventListener(n, r, i), r;
}
function Ad(n, e, t, i, r) {
  var s = { capture: i, passive: r }, a = Cd(n, e, t, s);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && Jo(() => {
    e.removeEventListener(n, a, s);
  });
}
function jn(n) {
  for (var e = 0; e < n.length; e++)
    ml.add(n[e]);
  for (var t of Ps)
    t(n);
}
let Ba = null;
function Xi(n) {
  var m;
  var e = this, t = (
    /** @type {Node} */
    e.ownerDocument
  ), i = n.type, r = ((m = n.composedPath) == null ? void 0 : m.call(n)) || [], s = (
    /** @type {null | Element} */
    r[0] || n.target
  );
  Ba = n;
  var a = 0, o = Ba === n && n.__root;
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
    Fr(n, "currentTarget", {
      configurable: !0,
      get() {
        return s || t;
      }
    });
    var d = Y, u = K;
    Ve(null), zt(null);
    try {
      for (var h, p = []; s !== null; ) {
        var _ = s.assignedSlot || s.parentNode || /** @type {any} */
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
        if (n.cancelBubble || _ === e || _ === null)
          break;
        s = _;
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
function ra(n) {
  var e = document.createElement("template");
  return e.innerHTML = n.replaceAll("<!>", "<!---->"), e.content;
}
function wt(n, e) {
  var t = (
    /** @type {Effect} */
    K
  );
  t.nodes === null && (t.nodes = { start: n, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function J(n, e) {
  var t = (e & Ao) !== 0, i = (e & Kc) !== 0, r, s = !n.startsWith("<!>");
  return () => {
    if (G)
      return wt(B, null), B;
    r === void 0 && (r = ra(s ? n : "<!>" + n), t || (r = /** @type {TemplateNode} */
    /* @__PURE__ */ Ae(r)));
    var a = (
      /** @type {TemplateNode} */
      i || Qo ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    if (t) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ae(a)
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
function Id(n, e, t = "svg") {
  var i = !n.startsWith("<!>"), r = (e & Ao) !== 0, s = `<${t}>${i ? n : "<!>" + n}</${t}>`, a;
  return () => {
    if (G)
      return wt(B, null), B;
    if (!a) {
      var o = (
        /** @type {DocumentFragment} */
        ra(s)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ Ae(o)
      );
      if (r)
        for (a = document.createDocumentFragment(); /* @__PURE__ */ Ae(l); )
          a.appendChild(
            /** @type {TemplateNode} */
            /* @__PURE__ */ Ae(l)
          );
      else
        a = /** @type {Element} */
        /* @__PURE__ */ Ae(l);
    }
    var c = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    if (r) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ae(c)
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
function sa(n, e) {
  return /* @__PURE__ */ Id(n, e, "svg");
}
function aa() {
  if (G)
    return wt(B, null), B;
  var n = document.createDocumentFragment(), e = document.createComment(""), t = ut();
  return n.append(e, t), wt(e, t), n;
}
function F(n, e) {
  if (G) {
    var t = (
      /** @type {Effect & { nodes: EffectNodes }} */
      K
    );
    (!(t.f & vr) || t.nodes.end === null) && (t.nodes.end = B), Oi();
    return;
  }
  n !== null && n.before(
    /** @type {Node} */
    e
  );
}
let zs = !0;
function zn(n, e) {
  var t = e == null ? "" : typeof e == "object" ? e + "" : e;
  t !== (n.__t ?? (n.__t = n.nodeValue)) && (n.__t = t, n.nodeValue = t + "");
}
function ss(n, e) {
  return vl(n, e);
}
function Md(n, e) {
  Ds(), e.intro = e.intro ?? !1;
  const t = e.target, i = G, r = B;
  try {
    for (var s = /* @__PURE__ */ Ae(t); s && (s.nodeType !== Fn || /** @type {Comment} */
    s.data !== Io); )
      s = /* @__PURE__ */ _t(s);
    if (!s)
      throw Nn;
    sn(!0), $e(
      /** @type {Comment} */
      s
    );
    const a = vl(n, { ...e, anchor: s });
    return sn(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a instanceof Error && a.message.split(`
`).some((o) => o.startsWith("https://svelte.dev/e/")))
      throw a;
    return a !== Nn && console.warn("Failed to hydrate: ", a), e.recover === !1 && zc(), Ds(), ea(t), sn(!1), ss(n, e);
  } finally {
    sn(i), $e(r);
  }
}
const Jn = /* @__PURE__ */ new Map();
function vl(n, { target: e, anchor: t, props: i = {}, events: r, context: s, intro: a = !0 }) {
  Ds();
  var o = /* @__PURE__ */ new Set(), l = (u) => {
    for (var h = 0; h < u.length; h++) {
      var p = u[h];
      if (!o.has(p)) {
        o.add(p);
        var _ = Ed(p);
        e.addEventListener(p, Xi, { passive: _ });
        var b = Jn.get(p);
        b === void 0 ? (document.addEventListener(p, Xi, { passive: _ }), Jn.set(p, 1)) : Jn.set(p, b + 1);
      }
    }
  };
  l(Jr(ml)), Ps.add(l);
  var c = void 0, d = wd(() => {
    var u = t ?? e.appendChild(ut());
    return ad(
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
        if (r && (i.$$events = r), G && wt(
          /** @type {TemplateNode} */
          h,
          null
        ), zs = a, c = n(h, i) || {}, zs = !0, G && (K.nodes.end = B, B === null || B.nodeType !== Fn || /** @type {Comment} */
        B.data !== Ks))
          throw br(), Nn;
        s && kt();
      }
    ), () => {
      var _;
      for (var h of o) {
        e.removeEventListener(h, Xi);
        var p = (
          /** @type {number} */
          Jn.get(h)
        );
        --p === 0 ? (document.removeEventListener(h, Xi), Jn.delete(h)) : Jn.set(h, p);
      }
      Ps.delete(l), u !== t && ((_ = u.parentNode) == null || _.removeChild(u));
    };
  });
  return $s.set(c, d), c;
}
let $s = /* @__PURE__ */ new WeakMap();
function dr(n, e) {
  const t = $s.get(n);
  return t ? ($s.delete(n), t(e)) : Promise.resolve();
}
var vt, Rt, Je, Cn, pr, mr, Kr;
class Rd {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, t = !0) {
    /** @type {TemplateNode} */
    $(this, "anchor");
    /** @type {Map<Batch, Key>} */
    R(this, vt, /* @__PURE__ */ new Map());
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
    R(this, Rt, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    R(this, Je, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    R(this, Cn, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    R(this, pr, !0);
    R(this, mr, () => {
      var e = (
        /** @type {Batch} */
        j
      );
      if (f(this, vt).has(e)) {
        var t = (
          /** @type {Key} */
          f(this, vt).get(e)
        ), i = f(this, Rt).get(t);
        if (i)
          ia(i), f(this, Cn).delete(t);
        else {
          var r = f(this, Je).get(t);
          r && (f(this, Rt).set(t, r.effect), f(this, Je).delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), i = r.effect);
        }
        for (const [s, a] of f(this, vt)) {
          if (f(this, vt).delete(s), s === e)
            break;
          const o = f(this, Je).get(a);
          o && (qe(o.effect), f(this, Je).delete(a));
        }
        for (const [s, a] of f(this, Rt)) {
          if (s === t || f(this, Cn).has(s)) continue;
          const o = () => {
            if (Array.from(f(this, vt).values()).includes(s)) {
              var c = document.createDocumentFragment();
              ol(a, c), c.append(ut()), f(this, Je).set(s, { effect: a, fragment: c });
            } else
              qe(a);
            f(this, Cn).delete(s), f(this, Rt).delete(s);
          };
          f(this, pr) || !i ? (f(this, Cn).add(s), In(a, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    R(this, Kr, (e) => {
      f(this, vt).delete(e);
      const t = Array.from(f(this, vt).values());
      for (const [i, r] of f(this, Je))
        t.includes(i) || (qe(r.effect), f(this, Je).delete(i));
    });
    this.anchor = e, E(this, pr, t);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, t) {
    var i = (
      /** @type {Batch} */
      j
    ), r = Ko();
    if (t && !f(this, Rt).has(e) && !f(this, Je).has(e))
      if (r) {
        var s = document.createDocumentFragment(), a = ut();
        s.append(a), f(this, Je).set(e, {
          effect: dt(() => t(a)),
          fragment: s
        });
      } else
        f(this, Rt).set(
          e,
          dt(() => t(this.anchor))
        );
    if (f(this, vt).set(i, e), r) {
      for (const [o, l] of f(this, Rt))
        o === e ? i.skipped_effects.delete(l) : i.skipped_effects.add(l);
      for (const [o, l] of f(this, Je))
        o === e ? i.skipped_effects.delete(l.effect) : i.skipped_effects.add(l.effect);
      i.oncommit(f(this, mr)), i.ondiscard(f(this, Kr));
    } else
      G && (this.anchor = B), f(this, mr).call(this);
  }
}
vt = new WeakMap(), Rt = new WeakMap(), Je = new WeakMap(), Cn = new WeakMap(), pr = new WeakMap(), mr = new WeakMap(), Kr = new WeakMap();
function ve(n, e, t = !1) {
  G && Oi();
  var i = new Rd(n), r = t ? Ln : 0;
  function s(a, o) {
    if (G) {
      const c = Mo(n) === ts;
      if (a === c) {
        var l = Hr();
        $e(l), i.anchor = l, sn(!1), i.ensure(a, o), sn(!0);
        return;
      }
    }
    i.ensure(a, o);
  }
  na(() => {
    var a = !1;
    e((o, l = !0) => {
      a = !0, s(l, o);
    }), a || s(!1, null);
  }, r);
}
function Ld(n, e, t) {
  for (var i = [], r = e.length, s, a = e.length, o = 0; o < r; o++) {
    let u = e[o];
    In(
      u,
      () => {
        if (s) {
          if (s.pending.delete(u), s.done.add(u), s.pending.size === 0) {
            var h = (
              /** @type {Set<EachOutroGroup>} */
              n.outrogroups
            );
            qs(Jr(s.done)), h.delete(s), h.size === 0 && (n.outrogroups = null);
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
      ea(d), d.append(c), n.items.clear();
    }
    qs(e, !l);
  } else
    s = {
      pending: new Set(e),
      done: /* @__PURE__ */ new Set()
    }, (n.outrogroups ?? (n.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function qs(n, e = !0) {
  for (var t = 0; t < n.length; t++)
    qe(n[t], e);
}
var ja;
function bl(n, e, t, i, r, s = null) {
  var a = n, o = /* @__PURE__ */ new Map(), l = (e & Co) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      n
    );
    a = G ? $e(/* @__PURE__ */ Ae(c)) : c.appendChild(ut());
  }
  G && Oi();
  var d = null, u = /* @__PURE__ */ Wo(() => {
    var T = t();
    return xo(T) ? T : T == null ? [] : Jr(T);
  }), h, p = !0;
  function _() {
    m.fallback = d, Od(m, h, a, e, i), d !== null && (h.length === 0 ? d.f & rn ? (d.f ^= rn, Zi(d, null, a)) : ia(d) : In(d, () => {
      d = null;
    }));
  }
  var b = na(() => {
    h = /** @type {V[]} */
    v(u);
    var T = h.length;
    let z = !1;
    if (G) {
      var w = Mo(a) === ts;
      w !== (T === 0) && (a = Hr(), $e(a), sn(!1), z = !0);
    }
    for (var y = /* @__PURE__ */ new Set(), I = (
      /** @type {Batch} */
      j
    ), te = Ko(), H = 0; H < T; H += 1) {
      G && B.nodeType === Fn && /** @type {Comment} */
      B.data === Ks && (a = /** @type {Comment} */
      B, z = !0, sn(!1));
      var re = h[H], A = i(re, H), q = p ? null : o.get(A);
      q ? (q.v && Pi(q.v, re), q.i && Pi(q.i, H), te && I.skipped_effects.delete(q.e)) : (q = Nd(
        o,
        p ? a : ja ?? (ja = ut()),
        re,
        A,
        H,
        r,
        e,
        t
      ), p || (q.e.f |= rn), o.set(A, q)), y.add(A);
    }
    if (T === 0 && s && !d && (p ? d = dt(() => s(a)) : (d = dt(() => s(ja ?? (ja = ut()))), d.f |= rn)), G && T > 0 && $e(Hr()), !p)
      if (te) {
        for (const [P, he] of o)
          y.has(P) || I.skipped_effects.add(he.e);
        I.oncommit(_), I.ondiscard(() => {
        });
      } else
        _();
    z && sn(!0), v(u);
  }), m = { effect: b, items: o, outrogroups: null, fallback: d };
  p = !1, G && (a = B);
}
function Od(n, e, t, i, r) {
  var q, P, he, ge, se, Re, Wt, Bt, jt;
  var s = (i & jc) !== 0, a = e.length, o = n.items, l = n.effect.first, c, d = null, u, h = [], p = [], _, b, m, T;
  if (s)
    for (T = 0; T < a; T += 1)
      _ = e[T], b = r(_, T), m = /** @type {EachItem} */
      o.get(b).e, m.f & rn || ((P = (q = m.nodes) == null ? void 0 : q.a) == null || P.measure(), (u ?? (u = /* @__PURE__ */ new Set())).add(m));
  for (T = 0; T < a; T += 1) {
    if (_ = e[T], b = r(_, T), m = /** @type {EachItem} */
    o.get(b).e, n.outrogroups !== null)
      for (const Ee of n.outrogroups)
        Ee.pending.delete(m), Ee.done.delete(m);
    if (m.f & rn)
      if (m.f ^= rn, m === l)
        Zi(m, null, t);
      else {
        var z = d ? d.next : l;
        m === n.effect.last && (n.effect.last = m.prev), m.prev && (m.prev.next = m.next), m.next && (m.next.prev = m.prev), dn(n, d, m), dn(n, m, z), Zi(m, z, t), d = m, h = [], p = [], l = d.next;
        continue;
      }
    if (m.f & tt && (ia(m), s && ((ge = (he = m.nodes) == null ? void 0 : he.a) == null || ge.unfix(), (u ?? (u = /* @__PURE__ */ new Set())).delete(m))), m !== l) {
      if (c !== void 0 && c.has(m)) {
        if (h.length < p.length) {
          var w = p[0], y;
          d = w.prev;
          var I = h[0], te = h[h.length - 1];
          for (y = 0; y < h.length; y += 1)
            Zi(h[y], w, t);
          for (y = 0; y < p.length; y += 1)
            c.delete(p[y]);
          dn(n, I.prev, te.next), dn(n, d, I), dn(n, te, w), l = w, d = te, T -= 1, h = [], p = [];
        } else
          c.delete(m), Zi(m, l, t), dn(n, m.prev, m.next), dn(n, m, d === null ? n.effect.first : d.next), dn(n, d, m), d = m;
        continue;
      }
      for (h = [], p = []; l !== null && l !== m; )
        (c ?? (c = /* @__PURE__ */ new Set())).add(l), p.push(l), l = l.next;
      if (l === null)
        continue;
    }
    m.f & rn || h.push(m), d = m, l = m.next;
  }
  if (n.outrogroups !== null) {
    for (const Ee of n.outrogroups)
      Ee.pending.size === 0 && (qs(Jr(Ee.done)), (se = n.outrogroups) == null || se.delete(Ee));
    n.outrogroups.size === 0 && (n.outrogroups = null);
  }
  if (l !== null || c !== void 0) {
    var H = [];
    if (c !== void 0)
      for (m of c)
        m.f & tt || H.push(m);
    for (; l !== null; )
      !(l.f & tt) && l !== n.fallback && H.push(l), l = l.next;
    var re = H.length;
    if (re > 0) {
      var A = i & Co && a === 0 ? t : null;
      if (s) {
        for (T = 0; T < re; T += 1)
          (Wt = (Re = H[T].nodes) == null ? void 0 : Re.a) == null || Wt.measure();
        for (T = 0; T < re; T += 1)
          (jt = (Bt = H[T].nodes) == null ? void 0 : Bt.a) == null || jt.fix();
      }
      Ld(n, H, A);
    }
  }
  s && Hn(() => {
    var Ee, S;
    if (u !== void 0)
      for (m of u)
        (S = (Ee = m.nodes) == null ? void 0 : Ee.a) == null || S.apply();
  });
}
function Nd(n, e, t, i, r, s, a, o) {
  var l = a & Wc ? a & Gc ? Pn(t) : /* @__PURE__ */ Vo(t, !1, !1) : null, c = a & Bc ? Pn(r) : null;
  return {
    v: l,
    i: c,
    e: dt(() => (s(e, l ?? t, c ?? r, o), () => {
      n.delete(i);
    }))
  };
}
function Zi(n, e, t) {
  if (n.nodes)
    for (var i = n.nodes.start, r = n.nodes.end, s = e && !(e.f & rn) ? (
      /** @type {EffectNodes} */
      e.nodes.start
    ) : t; i !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ _t(i)
      );
      if (s.before(i), i === r)
        return;
      i = a;
    }
}
function dn(n, e, t) {
  e === null ? n.effect.first = t : e.next = t, t === null ? n.effect.last = e : t.prev = e;
}
function Dd(n, e, t = !1, i = !1, r = !1) {
  var s = n, a = "";
  Ye(() => {
    var o = (
      /** @type {Effect} */
      K
    );
    if (a === (a = e() ?? "")) {
      G && Oi();
      return;
    }
    if (o.nodes !== null && (il(
      o.nodes.start,
      /** @type {TemplateNode} */
      o.nodes.end
    ), o.nodes = null), a !== "") {
      if (G) {
        B.data;
        for (var l = Oi(), c = l; l !== null && (l.nodeType !== Fn || /** @type {Comment} */
        l.data !== ""); )
          c = l, l = /* @__PURE__ */ _t(l);
        if (l === null)
          throw br(), Nn;
        wt(B, c), s = $e(l);
        return;
      }
      var d = a + "";
      t ? d = `<svg>${d}</svg>` : i && (d = `<math>${d}</math>`);
      var u = ra(d);
      if ((t || i) && (u = /** @type {Element} */
      /* @__PURE__ */ Ae(u)), wt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ae(u),
        /** @type {TemplateNode} */
        u.lastChild
      ), t || i)
        for (; /* @__PURE__ */ Ae(u); )
          s.before(
            /** @type {TemplateNode} */
            /* @__PURE__ */ Ae(u)
          );
      else
        s.before(u);
    }
  });
}
const Pd = () => performance.now(), nn = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (n) => requestAnimationFrame(n)
  ),
  now: () => Pd(),
  tasks: /* @__PURE__ */ new Set()
};
function wl() {
  const n = nn.now();
  nn.tasks.forEach((e) => {
    e.c(n) || (nn.tasks.delete(e), e.f());
  }), nn.tasks.size !== 0 && nn.tick(wl);
}
function zd(n) {
  let e;
  return nn.tasks.size === 0 && nn.tick(wl), {
    promise: new Promise((t) => {
      nn.tasks.add(e = { c: n, f: t });
    }),
    abort() {
      nn.tasks.delete(e);
    }
  };
}
function Ir(n, e) {
  $i(() => {
    n.dispatchEvent(new CustomEvent(e));
  });
}
function $d(n) {
  if (n === "float") return "cssFloat";
  if (n === "offset") return "cssOffset";
  if (n.startsWith("--")) return n;
  const e = n.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (t) => t[0].toUpperCase() + t.slice(1)
  ).join("");
}
function Ga(n) {
  const e = {}, t = n.split(";");
  for (const i of t) {
    const [r, s] = i.split(":");
    if (!r || s === void 0) break;
    const a = $d(r.trim());
    e[a] = s.trim();
  }
  return e;
}
const qd = (n) => n;
function Va(n, e, t, i) {
  var m;
  var r = (n & Zc) !== 0, s = "both", a, o = e.inert, l = e.style.overflow, c, d;
  function u() {
    return $i(() => a ?? (a = t()(e, (i == null ? void 0 : i()) ?? /** @type {P} */
    {}, {
      direction: s
    })));
  }
  var h = {
    is_global: r,
    in() {
      e.inert = o, Ir(e, "introstart"), c = Us(e, u(), d, 1, () => {
        Ir(e, "introend"), c == null || c.abort(), c = a = void 0, e.style.overflow = l;
      });
    },
    out(T) {
      e.inert = !0, Ir(e, "outrostart"), d = Us(e, u(), c, 0, () => {
        Ir(e, "outroend"), T == null || T();
      });
    },
    stop: () => {
      c == null || c.abort(), d == null || d.abort();
    }
  }, p = (
    /** @type {Effect & { nodes: EffectNodes }} */
    K
  );
  if (((m = p.nodes).t ?? (m.t = [])).push(h), zs) {
    var _ = r;
    if (!_) {
      for (var b = (
        /** @type {Effect | null} */
        p.parent
      ); b && b.f & Ln; )
        for (; (b = b.parent) && !(b.f & qt); )
          ;
      _ = !b || (b.f & vr) !== 0;
    }
    _ && ta(() => {
      Bn(() => h.in());
    });
  }
}
function Us(n, e, t, i, r) {
  var s = i === 1;
  if (Cc(e)) {
    var a, o = !1;
    return Hn(() => {
      if (!o) {
        var m = e({ direction: s ? "in" : "out" });
        a = Us(n, m, t, i, r);
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
  const { delay: l = 0, css: c, tick: d, easing: u = qd } = e;
  var h = [];
  if (s && t === void 0 && (d && d(0, 1), c)) {
    var p = Ga(c(0, 1));
    h.push(p, p);
  }
  var _ = () => 1 - i, b = n.animate(h, { duration: l, fill: "forwards" });
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
        for (var I = Math.ceil(z / 16.666666666666668), te = 0; te <= I; te += 1) {
          var H = m + T * u(te / I), re = Ga(c(H, 1 - H));
          w.push(re), y || (y = re.overflow === "hidden");
        }
      y && (n.style.overflow = "hidden"), _ = () => {
        var A = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          b.currentTime
        );
        return m + T * u(A / z);
      }, d && zd(() => {
        if (b.playState !== "running") return !1;
        var A = _();
        return d(A, 1 - A), !0;
      });
    }
    b = n.animate(w, { duration: z, fill: "forwards" }), b.onfinish = () => {
      _ = () => i, d == null || d(i, 1 - i), r();
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
    t: () => _()
  };
}
function Ft(n, e) {
  ta(() => {
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
const Ya = [...` 	
\r\f \v\uFEFF`];
function Ud(n, e, t) {
  var i = n == null ? "" : "" + n;
  if (e && (i = i ? i + " " + e : e), t) {
    for (var r in t)
      if (t[r])
        i = i ? i + " " + r : r;
      else if (i.length)
        for (var s = r.length, a = 0; (a = i.indexOf(r, a)) >= 0; ) {
          var o = a + s;
          (a === 0 || Ya.includes(i[a - 1])) && (o === i.length || Ya.includes(i[o])) ? i = (a === 0 ? "" : i.substring(0, a)) + i.substring(o + 1) : a = o;
        }
  }
  return i === "" ? null : i;
}
function Fd(n, e) {
  return n == null ? null : String(n);
}
function as(n, e, t, i, r, s) {
  var a = n.__className;
  if (G || a !== t || a === void 0) {
    var o = Ud(t, i, s);
    (!G || o !== n.getAttribute("class")) && (o == null ? n.removeAttribute("class") : n.className = o), n.__className = t;
  } else if (s && r !== s)
    for (var l in s) {
      var c = !!s[l];
      (r == null || c !== !!r[l]) && n.classList.toggle(l, c);
    }
  return s;
}
function yl(n, e, t, i) {
  var r = n.__style;
  if (G || r !== e) {
    var s = Fd(e);
    (!G || s !== n.getAttribute("style")) && (s == null ? n.removeAttribute("style") : n.style.cssText = s), n.__style = e;
  }
  return i;
}
const Hd = Symbol("is custom element"), Wd = Symbol("is html");
function Fe(n, e, t, i) {
  var r = Bd(n);
  G && (r[e] = n.getAttribute(e), e === "src" || e === "srcset" || e === "href" && n.nodeName === "LINK") || r[e] !== (r[e] = t) && (e === "loading" && (n[Rc] = t), t == null ? n.removeAttribute(e) : typeof t != "string" && jd(n).includes(e) ? n[e] = t : n.setAttribute(e, t));
}
function Bd(n) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    n.__attributes ?? (n.__attributes = {
      [Hd]: n.nodeName.includes("-"),
      [Wd]: n.namespaceURI === Jc
    })
  );
}
var Qa = /* @__PURE__ */ new Map();
function jd(n) {
  var e = n.getAttribute("is") || n.nodeName, t = Qa.get(e);
  if (t) return t;
  Qa.set(e, t = []);
  for (var i, r = n, s = Element.prototype; s !== r; ) {
    i = Tc(r);
    for (var a in i)
      i[a].set && t.push(a);
    r = ko(r);
  }
  return t;
}
function Gd(n, e, t = e) {
  var i = /* @__PURE__ */ new WeakSet();
  pd(n, "input", async (r) => {
    var s = r ? n.defaultValue : n.value;
    if (s = ws(n) ? ys(s) : s, t(s), j !== null && i.add(j), await fl(), s !== (s = e())) {
      var a = n.selectionStart, o = n.selectionEnd, l = n.value.length;
      if (n.value = s ?? "", o !== null) {
        var c = n.value.length;
        a === o && o === l && c > l ? (n.selectionStart = c, n.selectionEnd = c) : (n.selectionStart = a, n.selectionEnd = Math.min(o, c));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (G && n.defaultValue !== n.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Bn(e) == null && n.value) && (t(ws(n) ? ys(n.value) : n.value), j !== null && i.add(j)), rs(() => {
    var r = e();
    if (n === document.activeElement) {
      var s = (
        /** @type {Batch} */
        Dr ?? j
      );
      if (i.has(s))
        return;
    }
    ws(n) && r === ys(n.value) || n.type === "date" && !r && !n.value || r !== n.value && (n.value = r ?? "");
  });
}
function ws(n) {
  var e = n.type;
  return e === "number" || e === "range";
}
function ys(n) {
  return n === "" ? null : +n;
}
function Xa(n, e) {
  return n === e || (n == null ? void 0 : n[Ji]) === e;
}
function os(n = {}, e, t, i) {
  return ta(() => {
    var r, s;
    return rs(() => {
      r = s, s = [], Bn(() => {
        n !== t(...s) && (e(n, ...s), r && Xa(t(...r), n) && e(null, ...r));
      });
    }), () => {
      Hn(() => {
        s && Xa(t(...s), n) && e(null, ...s);
      });
    };
  }), n;
}
let Mr = !1;
function Vd(n) {
  var e = Mr;
  try {
    return Mr = !1, [n(), Mr];
  } finally {
    Mr = e;
  }
}
function X(n, e, t, i) {
  var z;
  var r = (t & Qc) !== 0, s = (t & Xc) !== 0, a = (
    /** @type {V} */
    i
  ), o = !0, l = () => (o && (o = !1, a = s ? Bn(
    /** @type {() => V} */
    i
  ) : (
    /** @type {V} */
    i
  )), a), c;
  if (r) {
    var d = Ji in n || So in n;
    c = ((z = An(n, e)) == null ? void 0 : z.set) ?? (d && e in n ? (w) => n[e] = w : void 0);
  }
  var u, h = !1;
  r ? [u, h] = Vd(() => (
    /** @type {V} */
    n[e]
  )) : u = /** @type {V} */
  n[e], u === void 0 && i !== void 0 && (u = l(), c && ($c(), c(u)));
  var p;
  if (p = () => {
    var w = (
      /** @type {V} */
      n[e]
    );
    return w === void 0 ? l() : (o = !0, w);
  }, !(t & Yc))
    return p;
  if (c) {
    var _ = n.$$legacy;
    return (
      /** @type {() => V} */
      function(w, y) {
        return arguments.length > 0 ? ((!y || _ || h) && c(y ? p() : w), w) : p();
      }
    );
  }
  var b = !1, m = (t & Vc ? is : Wo)(() => (b = !1, p()));
  r && v(m);
  var T = (
    /** @type {Effect} */
    K
  );
  return (
    /** @type {() => V} */
    function(w, y) {
      if (arguments.length > 0) {
        const I = y ? v(m) : r ? we(w) : w;
        return N(m, I), b = !0, a !== void 0 && (a = I), w;
      }
      return Wn && b || T.f & an ? m.v : v(m);
    }
  );
}
function Yd(n) {
  return new Qd(n);
}
var tn, lt;
class Qd {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    R(this, tn);
    /** @type {Record<string, any>} */
    R(this, lt);
    var s;
    var t = /* @__PURE__ */ new Map(), i = (a, o) => {
      var l = /* @__PURE__ */ Vo(o, !1, !1);
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
          return N(t.get(o) ?? i(o, l), l), Reflect.set(a, o, l);
        }
      }
    );
    E(this, lt, (e.hydrate ? Md : ss)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: r,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((s = e == null ? void 0 : e.props) != null && s.$$host) || e.sync === !1) && V(), E(this, tn, r.$$events);
    for (const a of Object.keys(f(this, lt)))
      a === "$set" || a === "$destroy" || a === "$on" || Fr(this, a, {
        get() {
          return f(this, lt)[a];
        },
        /** @param {any} value */
        set(o) {
          f(this, lt)[a] = o;
        },
        enumerable: !0
      });
    f(this, lt).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(r, a);
    }, f(this, lt).$destroy = () => {
      dr(f(this, lt));
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    f(this, lt).$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, t) {
    f(this, tn)[e] = f(this, tn)[e] || [];
    const i = (...r) => t.call(this, ...r);
    return f(this, tn)[e].push(i), () => {
      f(this, tn)[e] = f(this, tn)[e].filter(
        /** @param {any} fn */
        (r) => r !== i
      );
    };
  }
  $destroy() {
    f(this, lt).$destroy();
  }
}
tn = new WeakMap(), lt = new WeakMap();
let xl;
typeof HTMLElement == "function" && (xl = class extends HTMLElement {
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
      const t = {}, i = Xd(this);
      for (const r of this.$$s)
        r in i && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const s = this.$$g_p(r.name);
        s in this.$$d || (this.$$d[s] = $r(s, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = Yd({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = bd(() => {
        rs(() => {
          var r;
          this.$$r = !0;
          for (const s of Ur(this.$$c)) {
            if (!((r = this.$$p_d[s]) != null && r.reflect)) continue;
            this.$$d[s] = this.$$c[s];
            const a = $r(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = $r(e, i, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [e]: this.$$d[e] }));
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
    return Ur(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function $r(n, e, t, i) {
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
function Xd(n) {
  const e = {};
  return n.childNodes.forEach((t) => {
    e[
      /** @type {Element} node */
      t.slot || "default"
    ] = !0;
  }), e;
}
function Ht(n, e, t, i, r, s) {
  let a = class extends xl {
    constructor() {
      super(n, t, r), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Ur(e).map(
        (o) => (e[o].attribute || o).toLowerCase()
      );
    }
  };
  return Ur(e).forEach((o) => {
    Fr(a.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(l) {
        var u;
        l = $r(o, l, e), this.$$d[o] = l;
        var c = this.$$c;
        if (c) {
          var d = (u = An(c, o)) == null ? void 0 : u.get;
          d ? c[o] = l : c.$set({ [o]: l });
        }
      }
    });
  }), i.forEach((o) => {
    Fr(a.prototype, o, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[o];
      }
    });
  }), n.element = /** @type {any} */
  a, a;
}
function ls(n) {
  Qe === null && Eo(), si(() => {
    const e = Bn(n);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function kl(n) {
  Qe === null && Eo(), ls(() => () => Bn(n));
}
const Zd = "5";
var yo;
typeof window < "u" && ((yo = window.__svelte ?? (window.__svelte = {})).v ?? (yo.v = /* @__PURE__ */ new Set())).add(Zd);
const Kd = (n) => n;
function Jd(n) {
  const e = n - 1;
  return e * e * e + 1;
}
function Za(n) {
  const e = typeof n == "string" && n.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    n,
    "px"
  ];
}
function eu(n, { delay: e = 0, duration: t = 400, easing: i = Kd } = {}) {
  const r = +getComputedStyle(n).opacity;
  return {
    delay: e,
    duration: t,
    easing: i,
    css: (s) => `opacity: ${s * r}`
  };
}
function tu(n, { delay: e = 0, duration: t = 400, easing: i = Jd, x: r = 0, y: s = 0, opacity: a = 0 } = {}) {
  const o = getComputedStyle(n), l = +o.opacity, c = o.transform === "none" ? "" : o.transform, d = l * (1 - a), [u, h] = Za(r), [p, _] = Za(s);
  return {
    delay: e,
    duration: t,
    easing: i,
    css: (b, m) => `
			transform: ${c} translate(${(1 - b) * u}${h}, ${(1 - b) * p}${_});
			opacity: ${l - d * m}`
  };
}
var di, ui, gi, fi;
class _l {
  constructor() {
    R(this, di);
    R(this, ui);
    R(this, gi);
    R(this, fi);
    E(this, di, /* @__PURE__ */ U(!1)), E(this, ui, /* @__PURE__ */ U(!1)), E(this, gi, /* @__PURE__ */ U(!1)), E(this, fi, /* @__PURE__ */ U(!1));
  }
  get isOpen() {
    return v(f(this, di));
  }
  set isOpen(e) {
    N(f(this, di), e, !0);
  }
  get isMinimized() {
    return v(f(this, ui));
  }
  set isMinimized(e) {
    N(f(this, ui), e, !0);
  }
  get isLoading() {
    return v(f(this, gi));
  }
  set isLoading(e) {
    N(f(this, gi), e, !0);
  }
  get hasUnreadMessages() {
    return v(f(this, fi));
  }
  set hasUnreadMessages(e) {
    N(f(this, fi), e, !0);
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
di = new WeakMap(), ui = new WeakMap(), gi = new WeakMap(), fi = new WeakMap();
function Tl() {
  return new _l();
}
const vn = new _l(), Te = {
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
}, un = {
  /** Maximum message length */
  MAX_LENGTH: 4e3,
  /** Minimum message length */
  MIN_LENGTH: 1,
  /** Maximum message queue size to prevent memory leaks */
  MAX_QUEUE_SIZE: 50
}, Ka = {
  /** Visitor ID storage key */
  VISITOR_ID: "ai_chat_visitor_id",
  /** Session history storage key */
  SESSIONS: "ai_chat_sessions"
}, ei = {
  /** Maximum number of quick questions */
  MAX_COUNT: 6,
  /** Maximum character length per question */
  MAX_LENGTH: 100
};
var hi, pi, mi, vi, bi, wi;
class Sl {
  constructor() {
    R(this, hi);
    R(this, pi);
    R(this, mi);
    R(this, vi);
    R(this, bi);
    R(this, wi);
    E(this, hi, /* @__PURE__ */ U(we([]))), E(this, pi, /* @__PURE__ */ U(null)), E(this, mi, /* @__PURE__ */ U(!1)), E(this, vi, /* @__PURE__ */ U(null)), E(this, bi, /* @__PURE__ */ U(null)), this.streamingBuffer = "", this.streamingTimeout = null, E(this, wi, /* @__PURE__ */ U(0));
  }
  get messages() {
    return v(f(this, hi));
  }
  set messages(e) {
    N(f(this, hi), e, !0);
  }
  get currentSession() {
    return v(f(this, pi));
  }
  set currentSession(e) {
    N(f(this, pi), e, !0);
  }
  get isTyping() {
    return v(f(this, mi));
  }
  set isTyping(e) {
    N(f(this, mi), e, !0);
  }
  get error() {
    return v(f(this, vi));
  }
  set error(e) {
    N(f(this, vi), e, !0);
  }
  get streamingMessageId() {
    return v(f(this, bi));
  }
  set streamingMessageId(e) {
    N(f(this, bi), e, !0);
  }
  get streamingUpdateSignal() {
    return v(f(this, wi));
  }
  set streamingUpdateSignal(e) {
    N(f(this, wi), e, !0);
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
hi = new WeakMap(), pi = new WeakMap(), mi = new WeakMap(), vi = new WeakMap(), bi = new WeakMap(), wi = new WeakMap();
function El() {
  return new Sl();
}
const $t = new Sl(), Ja = {
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
}, rt = {
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
}, Cl = {
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
    return Ja[n] || null;
  },
  /**
   * Convert property name to HTML attribute name
   */
  propertyToAttribute(n) {
    const t = Object.entries(Ja).find(([, i]) => i === n);
    return t ? t[0] : null;
  }
}, nu = [
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
function Al(n) {
  return nu.includes(n);
}
function oa(n) {
  return !n || typeof n != "string" ? !1 : /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(n);
}
function ur(n, e = "#6b46c1") {
  return oa(n) ? n : e;
}
function iu(n) {
  if (!oa(n)) return n;
  if (n.length === 4) {
    const e = n.slice(1);
    return "#" + e[0] + e[0] + e[1] + e[1] + e[2] + e[2];
  }
  return n;
}
function ru(n) {
  const e = iu(n), t = parseInt(e.slice(1, 3), 16) / 255, i = parseInt(e.slice(3, 5), 16) / 255, r = parseInt(e.slice(5, 7), 16) / 255, s = Math.max(t, i, r), a = Math.min(t, i, r);
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
function su(n, e, t) {
  e /= 100, t /= 100;
  const i = e * Math.min(t, 1 - t), r = (s) => {
    const a = (s + n / 30) % 12, o = t - i * Math.max(Math.min(a - 3, 9 - a, 1), -1);
    return Math.round(255 * o).toString(16).padStart(2, "0");
  };
  return `#${r(0)}${r(8)}${r(4)}`.toUpperCase();
}
function pe(n, e) {
  if (!oa(n)) return n;
  const t = ru(n), i = Math.max(0, Math.min(100, t.l + e));
  return su(t.h, t.s, i);
}
class au {
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
function cs(n) {
  return new au(n);
}
function xs() {
  var n;
  try {
    return typeof process < "u" && ((n = process.env) == null ? void 0 : n.NODE_ENV) === "test" ? process.env.ENABLE_TEST_DEBUG === "true" : localStorage.getItem("ai-widget-debug") === "true" || window._aiWidgetDebug === !0 || !1;
  } catch {
    return !1;
  }
}
const Q = {
  isDebugEnabled: xs,
  log: (n, e, t) => {
    xs() && (t !== void 0 ? console.log(`[${n}] ${e}:`, t) : console.log(`[${n}] ${e}`));
  },
  warn: (n, e, t) => {
    xs() && (t !== void 0 ? console.warn(`[${n}] ${e}:`, t) : console.warn(`[${n}] ${e}`));
  },
  error: (n, e, t) => {
    t !== void 0 ? console.error(`[${n}] ${e}:`, t) : console.error(`[${n}] ${e}`);
  }
};
class ni {
  constructor() {
    this.currentId = null, this.messageMap = /* @__PURE__ */ new Map();
  }
  /**
   * Get singleton instance
   */
  static getInstance() {
    return ni.instance || (ni.instance = new ni()), ni.instance;
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
function bt() {
  return ni.getInstance();
}
class ou {
  /**
   * Validate message content and length
   */
  static validate(e) {
    const t = bt().getCurrent();
    if (Q.log("MessageValidator", "validate() called", {
      correlationId: t,
      message: e,
      messageType: typeof e,
      messageLength: (e == null ? void 0 : e.length) || 0,
      isNullOrUndefined: e == null
    }), typeof e != "string") {
      const a = "Message is required and must be a string";
      return Q.log("MessageValidator", "Validation failed - invalid type", { correlationId: t, message: e, error: a }), {
        isValid: !1,
        error: a
      };
    }
    if (e.length === 0) {
      const a = "Message is too short";
      return Q.log("MessageValidator", "Validation failed - empty string", { correlationId: t, message: e, error: a }), {
        isValid: !1,
        error: a
      };
    }
    const i = e.trim();
    if (Q.log("MessageValidator", "After trimming", {
      correlationId: t,
      original: e,
      trimmed: i,
      originalLength: e.length,
      trimmedLength: i.length,
      wasWhitespaceOnly: e.length > 0 && i.length === 0
    }), i.length < un.MIN_LENGTH) {
      const a = "Message is too short";
      return Q.log("MessageValidator", "Validation failed - too short", {
        correlationId: t,
        trimmedLength: i.length,
        minLength: un.MIN_LENGTH,
        error: a
      }), {
        isValid: !1,
        error: a
      };
    }
    if (i.length > un.MAX_LENGTH) {
      const a = `Message exceeds maximum length of ${un.MAX_LENGTH} characters`;
      return Q.log("MessageValidator", "Validation failed - too long", {
        correlationId: t,
        trimmedLength: i.length,
        maxLength: un.MAX_LENGTH,
        error: a
      }), {
        isValid: !1,
        error: a
      };
    }
    Q.log("MessageValidator", "Starting HTML sanitization", {
      correlationId: t,
      inputContent: i,
      inputLength: i.length
    });
    const r = this.sanitizeHTML(i);
    Q.log("MessageValidator", "HTML sanitization complete", {
      correlationId: t,
      original: i,
      sanitized: r,
      originalLength: i.length,
      sanitizedLength: r.length,
      contentRemoved: i.length !== r.length,
      contentChanged: i !== r,
      removedContent: i.length !== r.length ? {
        removed: i.replace(r, ""),
        difference: i.length - r.length
      } : null
    });
    const s = {
      isValid: !0,
      sanitizedValue: r
    };
    return Q.log("MessageValidator", "Final validation result", { correlationId: t, result: s }), s;
  }
  /**
   * Basic HTML sanitization
   */
  static sanitizeHTML(e) {
    const t = bt().getCurrent();
    Q.log("MessageValidator", "sanitizeHTML() input", {
      correlationId: t,
      input: e,
      inputLength: e.length
    });
    let i = e, r = 0;
    const s = i;
    i = i.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ""), i !== s && Q.log("MessageValidator", `Step ${++r} - Removed script tags`, {
      correlationId: t,
      before: s,
      after: i,
      removed: s.length - i.length
    });
    const a = i;
    i = i.replace(/href\s*=\s*["']javascript:[^"']*["']/gi, 'href=""'), i !== a && Q.log("MessageValidator", `Step ${++r} - Removed javascript: protocol`, {
      correlationId: t,
      before: a,
      after: i,
      removed: a.length - i.length
    });
    const o = i;
    i = i.replace(/\s*on\w+\s*=\s*["'][^"']*["']/gi, ""), i !== o && Q.log("MessageValidator", `Step ${++r} - Removed event handlers:`, {
      correlationId: t,
      before: o,
      after: i,
      removed: o.length - i.length
    });
    const l = i;
    return i = i.replace(/src\s*=\s*["']data:[^"']*["']/gi, 'src=""'), i !== l && Q.log("MessageValidator", `Step ${++r} - Removed data: URLs:`, {
      correlationId: t,
      before: l,
      after: i,
      removed: l.length - i.length
    }), Q.log("MessageValidator", "sanitizeHTML() result", {
      correlationId: t,
      originalInput: e,
      finalResult: i,
      inputLength: e.length,
      resultLength: i.length,
      totalRemoved: e.length - i.length,
      wasModified: e !== i
    }), i;
  }
}
class la {
  static validate(e, t) {
    const i = [];
    for (const r of e) {
      if (typeof r != "string") {
        Q.warn(t, `quick-questions: item skipped (type: ${typeof r})`);
        continue;
      }
      if (r.trim().length === 0) {
        Q.warn(t, "quick-questions: item skipped (empty or whitespace-only)");
        continue;
      }
      r.length > ei.MAX_LENGTH ? (Q.warn(t, `quick-questions: item truncated to ${ei.MAX_LENGTH} chars`), i.push(r.slice(0, ei.MAX_LENGTH))) : i.push(r);
    }
    return i.length > ei.MAX_COUNT ? (Q.warn(t, `quick-questions: array capped at ${ei.MAX_COUNT} items (${i.length} provided)`), i.slice(0, ei.MAX_COUNT)) : i;
  }
}
class Il {
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
var yi, xi, ki, _i, Ti, Si, Ei, Ci, Ai, Ii, Mi, Ri, Li;
class Ml {
  constructor() {
    R(this, yi);
    R(this, xi);
    R(this, ki);
    R(this, _i);
    R(this, Ti);
    R(this, Si);
    R(this, Ei);
    R(this, Ci);
    R(this, Ai);
    R(this, Ii);
    R(this, Mi);
    R(this, Ri);
    R(this, Li);
    E(this, yi, /* @__PURE__ */ U("")), E(this, xi, /* @__PURE__ */ U(we(rt.theme))), E(this, ki, /* @__PURE__ */ U(we(rt.position))), E(this, _i, /* @__PURE__ */ U(we(rt.title))), E(this, Ti, /* @__PURE__ */ U(we(rt.logoUrl))), E(this, Si, /* @__PURE__ */ U(we(rt.placeholder))), E(this, Ei, /* @__PURE__ */ U(we(rt.accentColor))), E(this, Ci, /* @__PURE__ */ U(we(rt.avatarEmoji))), E(this, Ai, /* @__PURE__ */ U(we(rt.companyName))), E(this, Ii, /* @__PURE__ */ U(we(rt.initialMessage))), E(this, Mi, /* @__PURE__ */ U(we(rt.quickQuestions))), E(this, Ri, /* @__PURE__ */ U(we(rt.voiceInput))), E(this, Li, /* @__PURE__ */ U("default"));
  }
  get clientId() {
    return v(f(this, yi));
  }
  set clientId(e) {
    N(f(this, yi), e, !0);
  }
  get theme() {
    return v(f(this, xi));
  }
  set theme(e) {
    N(f(this, xi), e, !0);
  }
  get position() {
    return v(f(this, ki));
  }
  set position(e) {
    N(f(this, ki), e, !0);
  }
  get title() {
    return v(f(this, _i));
  }
  set title(e) {
    N(f(this, _i), e, !0);
  }
  get logoUrl() {
    return v(f(this, Ti));
  }
  set logoUrl(e) {
    N(f(this, Ti), e, !0);
  }
  get placeholder() {
    return v(f(this, Si));
  }
  set placeholder(e) {
    N(f(this, Si), e, !0);
  }
  get accentColor() {
    return v(f(this, Ei));
  }
  set accentColor(e) {
    N(f(this, Ei), e, !0);
  }
  get avatarEmoji() {
    return v(f(this, Ci));
  }
  set avatarEmoji(e) {
    N(f(this, Ci), e, !0);
  }
  get companyName() {
    return v(f(this, Ai));
  }
  set companyName(e) {
    N(f(this, Ai), e, !0);
  }
  get initialMessage() {
    return v(f(this, Ii));
  }
  set initialMessage(e) {
    N(f(this, Ii), e, !0);
  }
  get quickQuestions() {
    return v(f(this, Mi));
  }
  set quickQuestions(e) {
    N(f(this, Mi), e, !0);
  }
  get voiceInput() {
    return v(f(this, Ri));
  }
  set voiceInput(e) {
    N(f(this, Ri), e, !0);
  }
  get titleSource() {
    return v(f(this, Li));
  }
  set titleSource(e) {
    N(f(this, Li), e, !0);
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
      const s = Cl.attributeToProperty(r);
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
            t.accentColor = ur(a, this.accentColor);
            break;
          case "theme":
            Al(a) && (t.theme = a);
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
              Array.isArray(o) && (t.quickQuestions = la.validate(o, "ConfigStore"));
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
    return this.accentColor && (e["--widget-primary"] = this.accentColor, e["--widget-primary-hover"] = pe(this.accentColor, -20), e["--widget-primary-light"] = pe(this.accentColor, 20), e["--widget-primary-dark"] = pe(this.accentColor, -30), e["--widget-gradient"] = `linear-gradient(135deg, ${this.accentColor} 0%, ${pe(this.accentColor, 20)} 100%)`, e["--widget-gradient-hover"] = `linear-gradient(135deg, ${pe(this.accentColor, -20)} 0%, ${this.accentColor} 100%)`), e;
  }
  applyTheme(e) {
    e.setAttribute("data-theme", this.theme);
    const t = this.cssVariables;
    for (const [i, r] of Object.entries(t))
      e.style.setProperty(i, r);
  }
  // Remove duplicate adjustColor method - using shared utility from color.ts
}
yi = new WeakMap(), xi = new WeakMap(), ki = new WeakMap(), _i = new WeakMap(), Ti = new WeakMap(), Si = new WeakMap(), Ei = new WeakMap(), Ci = new WeakMap(), Ai = new WeakMap(), Ii = new WeakMap(), Mi = new WeakMap(), Ri = new WeakMap(), Li = new WeakMap();
function Rl() {
  return new Ml();
}
const gt = new Ml(), Ll = "data:image/webp;base64,UklGRugJAABXRUJQVlA4WAoAAAAQAAAAfwAAfwAAQUxQSFACAAABkEXbtik59777XleN2LZt27Zt27ZtW99tuzuF2LbtpKpGp3BivHNujIiYAPZ3d2OLGUu7p5aXUmc/AMCFdkJWtWzwQVcXLqdUZ+GjtzPIqSt84jAp8UWfsppLaemnrJUS6/spA5iUM9/72O2McmKdnB9ydmCS5h2vv3e1oyIrxjKdBjiZnklcDQOIFjLTogFiValFyU6Eyk4Jll6Q7ESI9EJlpwTLgxu+pJemBQDEGDUvwxc0KqQYig/fGmf+TJPJZIqP8LkP8MQ/LHavyfz5O4eUSUSFoWNcAqB0WnsmooDXMANiczWOzjjRDqhf9RHI1OWA3T1eoFLGAH7PIAVTzQQCwFYNUaJDQOLBRGj4CCCyJ5okl6iwGrG0ASqdpZAoW8iAGUgSHaMj0oAj81M6LifFUc5Jx8tcOJoAnfa8CFRV1CXElkNVVX2lHuYTGnKQEFd8SKjviJQ6qngGSD5WVDcZrwLRZ9PpZSqQPVgnmj9de4Q+kp2gy0fVySm6vL+VTkrv1C8/p2WXyEKXn074erpWKfpg1ZxUJZRiOhWTifKMEnphSlvrC9srOyUOm+2VtaVgOvbKnjNHcxcdjto5c+UwMt3XBzrtORnKRpTkxVHIIbsMj+i4nhKHYS8d/ioOvpSO2RwHq+6iwlmWITUeoCJQw8LaEvG6OkOrBdCwTeBh+e5TcC4Dw9zcge9BeYaat3iE7W51hr3ccVym4gx/qqUv8TyanIRRqBRdcQ3Hxbm5OCOSp2owaX2wvv2Xja6ahDNSuRCKjoXg7L//f54CVlA4IHIHAACwKACdASqAAIAAPlEkkEWjoiGTST0YOAUEoA1fIQfqvZTa57fyGW9PeP90OkinbzF+UP87/Q/yk+AH9V9mfmC/p5/hPzA9zP1a+YD+Wf13/Xf6L2M/2c9yPoAfrV1iXoMfwf+x+mH+2HwSftD+0/wFfrd/7+sAs5dANxsoF2Qp/XuKnjE8Gvwf1Gf6x/wvUPz4PRP7B/AP/Mf6v/0OuF+5Hsi/ryxHk0B48YBTRtdB5WCf3dKxN+Z3e0Bap21U4g0QNgmgt9PszIvWmrmvDr/zjzLxO1+KHiMxSwKbP/CmfQapmXy8GPwlWwZzWyDJKSzuSxG3oImZ+aAV5K6ukJTpOOPfUdUnNUrs2CTonYo1/mdtQnYigkahltolBX+gz3dswlpDn7EPz3ifxMbj6L/yfEgMvWzgisK1N1dy/5lC7Zwr0NTM81DtakR50uAAAP7+pTZc//8cSrMe16Db1wMrZOlPVcrZyaAcPVhS95237FTuuF4m977CEVAwBMUJwFRGDoEKQipeVQdPqKdnp9YwI89N2eTzoo27BX3l7acdt+NGQnnZqQnzMeC4MS7ryzaHFab9GApUauHd9b9i37aLi79SW9CeZWyZGfdtJaSaE1b467r48k/kEszB3I0cGm0JQq+Hlbn+SCl5MG63ApAqG8Lud8FVHMrY5xH0PC4ah5djicc1c/XvyZJAVH+KbeG19UFXrf8X1ffTOuOjvVCn8bFf8T5gUAZ5rOo4daVYTbhMt1efaL2SetLP+XRxxDPNYwYHbD7K5eOKdAFOQ+mG4MKDXvQJBAC50HrqnKo9O405Q8Z8O/+ZRXeFiV6vKdDVGdVUluUVIq3t7wryRVmKAwiDOc1qi9TnXHTUWfXCeCFNC7Y5EPmc7li11DywVw84gE+NnXo/p8YDJM4SBeFEznUonSd2j9ie/azILWu7JVZfb+zlEWKboli0MsIBUYOS3KQsZ7779L9ogSjLn4n49yfimFO1AYn3qOz+HlTle3rPzLols3XLqkvp5yFLLr31gT+lHXXiEAXgAFn2JWJepcnEq0CfPs9nhwmhMoh4Am5PzzVXbe1RK/RYnKIoEz5YEv3yEl7PEw3+g3+Nvdx7dXV+61BaRRFYdprsKFb2Q9og3it+vCd4r4npE3l0a6SuBklxIiRQ7McizSDzhUgm2joVcDjjjFjF3Rp+1asiMHqJ6Tlz46aRB+F/FvPJq24HNEM+vKuhmpOdKnC3EWm8UT334DI8ItBX/MMxgirhjjGH2XxvjVEGwOymA93sFadiIimsN+u6QrXwl12/vMeuYr33Tr8mJEdp6tRVYZFXxEfc41n0meSi2ibjmu0wBtu1iqjnRan5xKMGDonKLqcAFzGILwkdHc3/Yewg6OY4zVMpmIvq2FIVieitjQbY8LW9nsKes5pOGr7tQQ6MqWAVW2eBIPJl8PmShHRgYzrjD9eWeQ6uINH+sp1XeWhsy1c64ummq+LnJCaV7HoqnQKiRjS1LFyxFPyvzKOpb03K1Z/Fj8v8Z66/SwiLAt+EtdhfrgPWxb69TZSFv+srYe/kve4aU6WzJGW7qUid4BiKSiHlvbo3MJFq2c/5PYveMTFX8qUtyBRDX5pevb//fG/6xm2ymF0XRY4/lyUprmi0po9xoz5IzHz368qsmPl+g3lCG29YWnJGFX/HviGuKm5o1ZdOTiPu/V6G20ih+v8fMnUDhJ6T5D530RgLx8n6Ya4xMDvuVlf4/6tmAJne81CE+mV00oIXwEoPYBt8sEvGb6bkPBm+er+sYRy0WDSKdt7Jb/wxos7jYmqiHy96cp6mmRa7nARocgS+eOzmcRhceaUf00neRyBWf2pvNc/VOnUir2hvXD1I8sZ9WsZ2cko1O1qM9SQX5LmBk+VE6lDUfMB8NuaZrMFye30QJXYrRnMDhPHRQMYJeP39qXPPhTCbeK56GkFc/vBXz4/ByRaOYorLlSw62qs4CF+GguMponNWuIIOuxmMgkZXOg9KeKzHzK+QfzxtQDPnlI0vTocV6YvIQoqxevmEdQ+ZJ/tYfBkXGNEuH12Wyv/+Dmmj/vJ6o3vP7gPfWbMvDH445D3Nw/lCYSNTKJ7ZJxwVDNbcLSKYgGgNigtMh/erRSzs7AY7IJ5R2y/i0uN/YcWF+SdBga8mdvUVlPg8adxHMXRo6hcgg3SL97JJCLeOmQGgt0Pj9EFVKXA/FZH0lQ7WuU1WnnwhnBX97rNb+77R/HstinK6Vy4/ZE3F/r3s6qEPQsJoEqArQO1BLIKS6TucRxCwFIP/cUvW49Onm283s/qdn4YhPbidHpkFW1rd6nkG+MwD1qe9h80gBM0MJx0cR5e7G2dVtUNurZqIXpXx2jABNlADHjbqBYcAGR93bylmP89clRe0pLc78uD/r4yf8vygxwrqooTDCnFh045zBwvryQ7xk1M3D7sYJAHyU6H74HI4eL/iITAjvoT8f+6klN4/114TfGrAYuX+b89XZEdxQSqx+bsya/c9Udon6nBJcRIqCfYPh7JysWSPhAAAAAAAAAAA", lu = Ll, cu = Ll;
var du = /* @__PURE__ */ J('<img alt="Chat" class="button-logo svelte-bkcus6"/>'), uu = /* @__PURE__ */ sa('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-bkcus6"><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor" class="svelte-bkcus6"></path></svg>'), gu = /* @__PURE__ */ J('<span class="unread-indicator svelte-bkcus6"></span>'), fu = /* @__PURE__ */ J("<button><!> <!></button>");
const hu = {
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
function Ol(n, e) {
  xt(e, !0), Ft(n, hu);
  let t = X(e, "onclick", 7), i = X(e, "ui", 7, vn);
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
      t(b), V();
    },
    get ui() {
      return i();
    },
    set ui(b = vn) {
      i(b), V();
    }
  }, l = fu();
  let c;
  l.__click = a;
  var d = oe(l);
  {
    var u = (b) => {
      var m = du();
      Ye(() => Fe(m, "src", lu)), F(b, m);
    }, h = (b) => {
      var m = uu();
      F(b, m);
    };
    ve(d, (b) => {
      v(r) ? b(h, !1) : b(u);
    });
  }
  var p = le(d, 2);
  {
    var _ = (b) => {
      var m = gu();
      F(b, m);
    };
    ve(p, (b) => {
      v(s) && !v(r) && b(_);
    });
  }
  return ae(l), Ye(() => {
    c = as(l, 1, "floating-button svelte-bkcus6", null, c, { open: v(r) }), Fe(l, "aria-label", v(r) ? "Close chat" : "Open chat");
  }), F(n, l), kt(o);
}
jn(["click"]);
Ht(Ol, { onclick: {}, ui: {} }, [], [], !0);
class it extends Error {
  constructor(e, t, i = !1) {
    super(e), this.name = "ChatWidgetError", this.context = t, this.timestamp = /* @__PURE__ */ new Date(), this.isRetryable = i, Error.captureStackTrace && Error.captureStackTrace(this, it);
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
class ii extends it {
  constructor(e, t, i, r) {
    super(e, { ...r, statusCode: t, endpoint: i }, !0), this.name = "NetworkError", this.statusCode = t, this.endpoint = i;
  }
}
class Nl extends it {
  constructor(e, t, i, r, s) {
    super(e, { ...s, wsUrl: t, closeCode: i, closeReason: r }, !0), this.name = "WebSocketError", this.wsUrl = t, this.closeCode = i, this.closeReason = r;
  }
}
class nr extends it {
  constructor(e, t, i, r, s) {
    super(e, { ...s, field: t, value: i, expectedType: r }, !1), this.name = "ValidationError", this.field = t, this.value = i, this.expectedType = r;
  }
}
class Dl extends it {
  constructor(e, t, i, r) {
    super(e, { ...r, configKey: t, configValue: i }, !1), this.name = "ConfigurationError", this.configKey = t, this.configValue = i;
  }
}
class Pl extends it {
  constructor(e, t, i, r) {
    super(e, { ...r, clientId: t, statusCode: i }, !1), this.name = "AuthenticationError", this.clientId = t, this.statusCode = i;
  }
}
class ri extends it {
  constructor(e, t, i, r) {
    super(e, { ...r, retryAfter: t, limit: i }, !0), this.name = "RateLimitError", this.retryAfter = t, this.limit = i;
  }
}
class zl extends it {
  constructor(e, t, i, r) {
    super(e, { ...r, storageType: t, operation: i }, !0), this.name = "StorageError", this.storageType = t, this.operation = i;
  }
}
class $l extends it {
  constructor(e, t, i, r) {
    super(e, { ...r, timeout: t, operation: i }, !0), this.name = "TimeoutError", this.timeout = t, this.operation = i;
  }
}
function eo(n) {
  return n instanceof it ? n.isRetryable : !!(n instanceof TypeError && n.message.includes("fetch"));
}
function pu(n) {
  return n instanceof it ? {
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
function mu(n) {
  return n instanceof ii ? n.statusCode === 404 ? "Service temporarily unavailable. Please try again later." : n.statusCode === 429 || n instanceof ri ? "Too many requests. Please wait a moment and try again." : n.statusCode && n.statusCode >= 500 ? "Server error. Please try again in a few moments." : n.statusCode && (n.statusCode === 400 || n.statusCode === 401 || n.statusCode === 403) ? n.message : "Unable to connect to the server. Please check your internet connection." : n instanceof Nl ? "Connection lost. Attempting to reconnect..." : n instanceof Pl ? "Access denied. Please check your configuration." : n instanceof nr ? n.message : n instanceof Dl ? "Widget configuration error. Please contact support." : n instanceof $l ? "Request timed out. Please try again." : n instanceof zl ? "Unable to save data. Please check your browser settings." : "Something went wrong. Please try again.";
}
class ir {
  /**
   * Process and categorize errors using custom error classes
   */
  static handle(e, t) {
    const i = pu(e);
    let r;
    return e instanceof ii ? r = "NETWORK_ERROR" : e instanceof Nl ? r = "WEBSOCKET_ERROR" : e instanceof nr ? r = "VALIDATION_ERROR" : e instanceof Dl ? r = "CONFIGURATION_ERROR" : e instanceof Pl ? r = "AUTHENTICATION_ERROR" : e instanceof ri ? r = "RATE_LIMIT_ERROR" : e instanceof zl ? r = "STORAGE_ERROR" : e instanceof $l ? r = "TIMEOUT_ERROR" : e instanceof it ? r = "WIDGET_ERROR" : r = "UNKNOWN_ERROR", {
      message: mu(e),
      code: r,
      isUserFacing: !0,
      shouldRetry: eo(e),
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
    return e && typeof e == "object" && "shouldRetry" in e ? e.shouldRetry : eo(e);
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
const vu = "https://ai-gateway-service-staging-639717727892.us-east4.run.app";
class Fs {
  // Production URL configured via VITE_API_BASE_URL environment variable
  // Falls back to DEFAULT_GATEWAY_URL if not set
  /**
   * Resolve API and WebSocket URLs based on client ID and environment
   */
  static resolveUrls(e, t = {}) {
    const i = Il.validate(e);
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
    const t = vu, i = this.isLocalhostUrl(t) ? t : this.ensureHttps(t);
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
class ql {
  constructor(e) {
    try {
      const t = window, i = t.AIChat || t.ChatWidget || {}, r = e ? this.parseElementAttributes(e) : {}, s = {
        ...rt,
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
      const a = Il.validate(s.clientId);
      if (!a.isValid)
        throw new Error(`Invalid client ID: ${a.error}`);
      const o = Fs.resolveUrls(a.sanitizedValue);
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
      const s = Cl.attributeToProperty(r);
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
            Al(a) && (t.theme = a);
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
let gr = !1;
function bu() {
  try {
    const n = "__storage_test__";
    return localStorage.setItem(n, n), localStorage.removeItem(n), !0;
  } catch {
    return !1;
  }
}
gr = !bu();
function wu(n) {
  try {
    return gr ? zi.get(n) ?? null : localStorage.getItem(n);
  } catch {
    return zi.get(n) ?? null;
  }
}
function yu(n, e) {
  try {
    return gr ? (zi.set(n, e), !0) : (localStorage.setItem(n, e), !0);
  } catch {
    return zi.set(n, e), gr = !0, !1;
  }
}
function xu(n) {
  try {
    if (gr) {
      zi.delete(n);
      return;
    }
    localStorage.removeItem(n);
  } catch {
    zi.delete(n);
  }
}
const mt = class mt {
  /**
   * @param storageAdapter - Optional storage adapter for testing (defaults to localStorage via safe utils)
   */
  constructor(e) {
    this.storageAdapter = e, this.visitorId = this.getOrCreateVisitorId();
  }
  getOrCreateVisitorId() {
    var t;
    let e = this.getItem(mt.VISITOR_ID_KEY);
    return e || (e = this.generateVisitorId(), this.setItem(mt.VISITOR_ID_KEY, e), (t = window.AIChat) != null && t.debug && Q.log("ChatWidget", "Created new visitor", e)), e;
  }
  /**
   * Internal storage access methods that use adapter if available
   */
  getItem(e) {
    return this.storageAdapter ? this.storageAdapter.getItem(e) : wu(e);
  }
  setItem(e, t) {
    this.storageAdapter ? this.storageAdapter.setItem(e, t) : yu(e, t);
  }
  removeItem(e) {
    this.storageAdapter ? this.storageAdapter.removeItem(e) : xu(e);
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
      mt.SESSION_HISTORY_KEY,
      JSON.stringify(i)
    );
  }
  getSessionHistory() {
    const e = this.getItem(mt.SESSION_HISTORY_KEY);
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
      mt.SESSION_HISTORY_KEY,
      JSON.stringify(i)
    );
  }
  /**
   * Clear visitor data for GDPR compliance
   */
  clearVisitorData() {
    this.removeItem(mt.VISITOR_ID_KEY), this.removeItem(mt.SESSION_HISTORY_KEY), this.visitorId = this.generateVisitorId();
  }
};
mt.VISITOR_ID_KEY = Ka.VISITOR_ID, mt.SESSION_HISTORY_KEY = Ka.SESSIONS;
let Gr = mt;
class Ki {
  /**
   * Get API endpoint URL with base path resolved
   */
  static getApiUrl(e, t) {
    const { apiUrl: i } = Fs.resolveUrls(t.clientId, t.options);
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
    const { wsUrl: t } = Fs.resolveUrls(e.clientId, e.options), i = new URLSearchParams({
      session_id: e.sessionId
    });
    return e.visitorId && i.append("visitor_id", e.visitorId), `${t}?${i}`;
  }
}
var de = /* @__PURE__ */ ((n) => (n.DISCONNECTED = "disconnected", n.CONNECTING = "connecting", n.CONNECTED = "connected", n.ERROR = "error", n))(de || {});
class Ul {
  constructor(e, t) {
    this.ws = null, this.sessionId = null, this.state = "disconnected", this.messageQueue = [], this.reconnectAttempts = 0, this.maxReconnectAttempts = Te.MAX_RECONNECT_ATTEMPTS, this.reconnectDelay = Te.RECONNECT_DELAY, this.heartbeatInterval = null, this.listeners = /* @__PURE__ */ new Map(), this.abortController = null, this.cleanupFunctions = [], this.visibilityChangeHandler = null, this.pendingPongTimeout = null, this.config = e, this.visitor = t, this.debugLogger = cs(e.getAll()), this.setupVisibilityChangeListener();
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
    const t = bt().getCurrent();
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
      }), this.messageQueue.length >= un.MAX_QUEUE_SIZE) {
        this.debugLogger.warn("WebSocketManager", "Message queue full", {
          queueSize: this.messageQueue.length,
          maxSize: un.MAX_QUEUE_SIZE
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
var ku = /* @__PURE__ */ J('<button class="close-button svelte-g5m62x" aria-label="Close chat" type="button"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true" class="svelte-g5m62x"><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor" class="svelte-g5m62x"></path></svg></button>'), _u = /* @__PURE__ */ J('<header class="chat-header svelte-g5m62x"><div class="header-content svelte-g5m62x"><div role="status"></div> <h2 class="header-title svelte-g5m62x"> </h2></div> <!></header>');
const Tu = {
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
function ca(n, e) {
  xt(e, !0), Ft(n, Tu);
  let t = X(e, "onclose", 7), i = X(e, "connectionState", 23, () => de.DISCONNECTED), r = X(e, "connectionFailed", 7, !1), s = X(e, "showCloseButton", 7, !0), a = X(e, "ui", 7, vn), o = X(e, "config", 7, gt);
  const l = /* @__PURE__ */ me(() => {
    if (r()) return "var(--widget-error)";
    switch (i()) {
      case de.CONNECTED:
        return "var(--widget-success)";
      case de.CONNECTING:
        return "var(--widget-warning, #ca8a04)";
      case /* Darker yellow for WCAG AA */
      de.ERROR:
        return "var(--widget-error)";
      default:
        return "var(--widget-text-secondary)";
    }
  }), c = /* @__PURE__ */ me(() => {
    if (r()) return "Connection lost";
    switch (i()) {
      case de.CONNECTED:
        return "Connected";
      case de.CONNECTING:
        return "Connecting";
      case de.ERROR:
        return "Connection error";
      case de.DISCONNECTED:
        return "Disconnected";
      default:
        return "";
    }
  }), d = /* @__PURE__ */ me(() => i() === de.CONNECTING ? "pulse-slow" : i() === de.ERROR ? "blink-slow" : "");
  function u() {
    var y;
    a().close(), (y = t()) == null || y();
  }
  var h = {
    get onclose() {
      return t();
    },
    set onclose(y) {
      t(y), V();
    },
    get connectionState() {
      return i();
    },
    set connectionState(y = de.DISCONNECTED) {
      i(y), V();
    },
    get connectionFailed() {
      return r();
    },
    set connectionFailed(y = !1) {
      r(y), V();
    },
    get showCloseButton() {
      return s();
    },
    set showCloseButton(y = !0) {
      s(y), V();
    },
    get ui() {
      return a();
    },
    set ui(y = vn) {
      a(y), V();
    },
    get config() {
      return o();
    },
    set config(y = gt) {
      o(y), V();
    }
  }, p = _u(), _ = oe(p), b = oe(_), m = le(b, 2), T = oe(m, !0);
  ae(m), ae(_);
  var z = le(_, 2);
  {
    var w = (y) => {
      var I = ku();
      I.__click = u, F(y, I);
    };
    ve(z, (y) => {
      s() && y(w);
    });
  }
  return ae(p), Ye(() => {
    as(b, 1, `status-dot ${v(d) ?? ""}`, "svelte-g5m62x"), yl(b, `--status-color: ${v(l) ?? ""}`), Fe(b, "aria-label", v(c)), Fe(b, "title", v(c)), zn(T, o().title);
  }), F(n, p), kt(h);
}
jn(["click"]);
Ht(
  ca,
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
function da() {
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
let Gn = da();
function Fl(n) {
  Gn = n;
}
const Hl = /[&<>"']/, Su = new RegExp(Hl.source, "g"), Wl = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, Eu = new RegExp(Wl.source, "g"), Cu = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, to = (n) => Cu[n];
function et(n, e) {
  if (e) {
    if (Hl.test(n))
      return n.replace(Su, to);
  } else if (Wl.test(n))
    return n.replace(Eu, to);
  return n;
}
const Au = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function Iu(n) {
  return n.replace(Au, (e, t) => (t = t.toLowerCase(), t === "colon" ? ":" : t.charAt(0) === "#" ? t.charAt(1) === "x" ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""));
}
const Mu = /(^|[^\[])\^/g;
function ce(n, e) {
  let t = typeof n == "string" ? n : n.source;
  e = e || "";
  const i = {
    replace: (r, s) => {
      let a = typeof s == "string" ? s : s.source;
      return a = a.replace(Mu, "$1"), t = t.replace(r, a), i;
    },
    getRegex: () => new RegExp(t, e)
  };
  return i;
}
function no(n) {
  try {
    n = encodeURI(n).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return n;
}
const rr = { exec: () => null };
function io(n, e) {
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
function Rr(n, e, t) {
  const i = n.length;
  if (i === 0)
    return "";
  let r = 0;
  for (; r < i && n.charAt(i - r - 1) === e; )
    r++;
  return n.slice(0, i - r);
}
function Ru(n, e) {
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
function ro(n, e, t, i) {
  const r = e.href, s = e.title ? et(e.title) : null, a = n[1].replace(/\\([\[\]])/g, "$1");
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
    text: et(a)
  };
}
function Lu(n, e) {
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
class Vr {
  // set by the lexer
  constructor(e) {
    $(this, "options");
    $(this, "rules");
    // set by the lexer
    $(this, "lexer");
    this.options = e || Gn;
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
        text: this.options.pedantic ? i : Rr(i, `
`)
      };
    }
  }
  fences(e) {
    const t = this.rules.block.fences.exec(e);
    if (t) {
      const i = t[0], r = Lu(i, t[3] || "");
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
        const r = Rr(i, "#");
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
      i = Rr(i.replace(/^ *>[ \t]?/gm, ""), `
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
        let _ = !1;
        if (!u && /^ *$/.test(h) && (o += h + `
`, e = e.substring(h.length + 1), d = !0), !d) {
          const T = new RegExp(`^ {0,${Math.min(3, p - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), z = new RegExp(`^ {0,${Math.min(3, p - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), w = new RegExp(`^ {0,${Math.min(3, p - 1)}}(?:\`\`\`|~~~)`), y = new RegExp(`^ {0,${Math.min(3, p - 1)}}#`);
          for (; e; ) {
            const I = e.split(`
`, 1)[0];
            if (h = I, this.options.pedantic && (h = h.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), w.test(h) || y.test(h) || T.test(h) || z.test(e))
              break;
            if (h.search(/[^ ]/) >= p || !h.trim())
              l += `
` + h.slice(p);
            else {
              if (_ || u.search(/[^ ]/) >= 4 || w.test(u) || y.test(u) || z.test(u))
                break;
              l += `
` + h;
            }
            !_ && !h.trim() && (_ = !0), o += I + `
`, e = e.substring(I.length + 1), u = h.slice(p);
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
    const i = io(t[1]), r = t[2].replace(/^\||\| *$/g, "").split("|"), s = t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split(`
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
        a.rows.push(io(o, a.header.length).map((l) => ({
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
        text: et(t[1])
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
        const a = Rr(i.slice(0, -1), "\\");
        if ((i.length - a.length) % 2 === 0)
          return;
      } else {
        const a = Ru(t[2], "()");
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
      return r = r.trim(), /^</.test(r) && (this.options.pedantic && !/>$/.test(i) ? r = r.slice(1) : r = r.slice(1, -1)), ro(t, {
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
      return ro(i, s, i[0], this.lexer);
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
        const _ = p.slice(2, -2);
        return {
          type: "strong",
          raw: p,
          text: _,
          tokens: this.lexer.inlineTokens(_)
        };
      }
    }
  }
  codespan(e) {
    const t = this.rules.inline.code.exec(e);
    if (t) {
      let i = t[2].replace(/\n/g, " ");
      const r = /[^ ]/.test(i), s = /^ /.test(i) && / $/.test(i);
      return r && s && (i = i.substring(1, i.length - 1)), i = et(i, !0), {
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
      return t[2] === "@" ? (i = et(t[1]), r = "mailto:" + i) : (i = et(t[1]), r = i), {
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
        r = et(t[0]), s = "mailto:" + r;
      else {
        let a;
        do
          a = t[0], t[0] = ((i = this.rules.inline._backpedal.exec(t[0])) == null ? void 0 : i[0]) ?? "";
        while (a !== t[0]);
        r = et(t[0]), t[1] === "www." ? s = "http://" + t[0] : s = t[0];
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
      return this.lexer.state.inRawBlock ? i = t[0] : i = et(t[0]), {
        type: "text",
        raw: t[0],
        text: i
      };
    }
  }
}
const Ou = /^(?: *(?:\n|$))+/, Nu = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, Du = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, yr = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Pu = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Bl = /(?:[*+-]|\d{1,9}[.)])/, jl = ce(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, Bl).replace(/blockCode/g, / {4}/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), ua = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, zu = /^[^\n]+/, ga = /(?!\s*\])(?:\\.|[^\[\]\\])+/, $u = ce(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", ga).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), qu = ce(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Bl).getRegex(), ds = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", fa = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Uu = ce("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", fa).replace("tag", ds).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Gl = ce(ua).replace("hr", yr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", ds).getRegex(), Fu = ce(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Gl).getRegex(), ha = {
  blockquote: Fu,
  code: Nu,
  def: $u,
  fences: Du,
  heading: Pu,
  hr: yr,
  html: Uu,
  lheading: jl,
  list: qu,
  newline: Ou,
  paragraph: Gl,
  table: rr,
  text: zu
}, so = ce("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", yr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", ds).getRegex(), Hu = {
  ...ha,
  table: so,
  paragraph: ce(ua).replace("hr", yr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", so).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", ds).getRegex()
}, Wu = {
  ...ha,
  html: ce(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", fa).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: rr,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: ce(ua).replace("hr", yr).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", jl).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, Vl = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Bu = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Yl = /^( {2,}|\\)\n(?!\s*$)/, ju = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, xr = "\\p{P}\\p{S}", Gu = ce(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, xr).getRegex(), Vu = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, Yu = ce(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, xr).getRegex(), Qu = ce("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, xr).getRegex(), Xu = ce("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, xr).getRegex(), Zu = ce(/\\([punct])/, "gu").replace(/punct/g, xr).getRegex(), Ku = ce(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Ju = ce(fa).replace("(?:-->|$)", "-->").getRegex(), eg = ce("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Ju).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Yr = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, tg = ce(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", Yr).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Ql = ce(/^!?\[(label)\]\[(ref)\]/).replace("label", Yr).replace("ref", ga).getRegex(), Xl = ce(/^!?\[(ref)\](?:\[\])?/).replace("ref", ga).getRegex(), ng = ce("reflink|nolink(?!\\()", "g").replace("reflink", Ql).replace("nolink", Xl).getRegex(), pa = {
  _backpedal: rr,
  // only used for GFM url
  anyPunctuation: Zu,
  autolink: Ku,
  blockSkip: Vu,
  br: Yl,
  code: Bu,
  del: rr,
  emStrongLDelim: Yu,
  emStrongRDelimAst: Qu,
  emStrongRDelimUnd: Xu,
  escape: Vl,
  link: tg,
  nolink: Xl,
  punctuation: Gu,
  reflink: Ql,
  reflinkSearch: ng,
  tag: eg,
  text: ju,
  url: rr
}, ig = {
  ...pa,
  link: ce(/^!?\[(label)\]\((.*?)\)/).replace("label", Yr).getRegex(),
  reflink: ce(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Yr).getRegex()
}, Hs = {
  ...pa,
  escape: ce(Vl).replace("])", "~|])").getRegex(),
  url: ce(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, rg = {
  ...Hs,
  br: ce(Yl).replace("{2,}", "*").getRegex(),
  text: ce(Hs.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, Lr = {
  normal: ha,
  gfm: Hu,
  pedantic: Wu
}, Wi = {
  normal: pa,
  gfm: Hs,
  breaks: rg,
  pedantic: ig
};
class Nt {
  constructor(e) {
    $(this, "tokens");
    $(this, "options");
    $(this, "state");
    $(this, "tokenizer");
    $(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || Gn, this.options.tokenizer = this.options.tokenizer || new Vr(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const t = {
      block: Lr.normal,
      inline: Wi.normal
    };
    this.options.pedantic ? (t.block = Lr.pedantic, t.inline = Wi.pedantic) : this.options.gfm && (t.block = Lr.gfm, this.options.breaks ? t.inline = Wi.breaks : t.inline = Wi.gfm), this.tokenizer.rules = t;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: Lr,
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
class Qr {
  constructor(e) {
    $(this, "options");
    this.options = e || Gn;
  }
  code(e, t, i) {
    var s;
    const r = (s = (t || "").match(/^\S*/)) == null ? void 0 : s[0];
    return e = e.replace(/\n$/, "") + `
`, r ? '<pre><code class="language-' + et(r) + '">' + (i ? e : et(e, !0)) + `</code></pre>
` : "<pre><code>" + (i ? e : et(e, !0)) + `</code></pre>
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
    const r = no(e);
    if (r === null)
      return i;
    e = r;
    let s = '<a href="' + e + '"';
    return t && (s += ' title="' + t + '"'), s += ">" + i + "</a>", s;
  }
  image(e, t, i) {
    const r = no(e);
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
class ma {
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
    this.options = e || Gn, this.options.renderer = this.options.renderer || new Qr(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new ma();
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
          i += this.renderer.heading(this.parseInline(a.tokens), a.depth, Iu(this.parseInline(a.tokens, this.textRenderer)));
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
            const h = a.items[u], p = h.checked, _ = h.task;
            let b = "";
            if (h.task) {
              const m = this.renderer.checkbox(!!p);
              c ? h.tokens.length > 0 && h.tokens[0].type === "paragraph" ? (h.tokens[0].text = m + " " + h.tokens[0].text, h.tokens[0].tokens && h.tokens[0].tokens.length > 0 && h.tokens[0].tokens[0].type === "text" && (h.tokens[0].tokens[0].text = m + " " + h.tokens[0].tokens[0].text)) : h.tokens.unshift({
                type: "text",
                text: m + " "
              }) : b += m + " ";
            }
            b += this.parse(h.tokens, c), d += this.renderer.listitem(b, _, !!p);
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
    this.options = e || Gn;
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
var qn, Ws, Zl;
class sg {
  constructor(...e) {
    R(this, qn);
    $(this, "defaults", da());
    $(this, "options", this.setOptions);
    $(this, "parse", ue(this, qn, Ws).call(this, Nt.lex, Dt.parse));
    $(this, "parseInline", ue(this, qn, Ws).call(this, Nt.lexInline, Dt.parseInline));
    $(this, "Parser", Dt);
    $(this, "Renderer", Qr);
    $(this, "TextRenderer", ma);
    $(this, "Lexer", Nt);
    $(this, "Tokenizer", Vr);
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
        const s = this.defaults.renderer || new Qr(this.defaults);
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
        const s = this.defaults.tokenizer || new Vr(this.defaults);
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
qn = new WeakSet(), Ws = function(e, t) {
  return (i, r) => {
    const s = { ...r }, a = { ...this.defaults, ...s };
    this.defaults.async === !0 && s.async === !1 && (a.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), a.async = !0);
    const o = ue(this, qn, Zl).call(this, !!a.silent, !!a.async);
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
}, Zl = function(e, t) {
  return (i) => {
    if (i.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
      const r = "<p>An error occurred:</p><pre>" + et(i.message + "", !0) + "</pre>";
      return t ? Promise.resolve(r) : r;
    }
    if (t)
      return Promise.reject(i);
    throw i;
  };
};
const $n = new sg();
function ie(n, e) {
  return $n.parse(n, e);
}
ie.options = ie.setOptions = function(n) {
  return $n.setOptions(n), ie.defaults = $n.defaults, Fl(ie.defaults), ie;
};
ie.getDefaults = da;
ie.defaults = Gn;
ie.use = function(...n) {
  return $n.use(...n), ie.defaults = $n.defaults, Fl(ie.defaults), ie;
};
ie.walkTokens = function(n, e) {
  return $n.walkTokens(n, e);
};
ie.parseInline = $n.parseInline;
ie.Parser = Dt;
ie.parser = Dt.parse;
ie.Renderer = Qr;
ie.TextRenderer = ma;
ie.Lexer = Nt;
ie.lexer = Nt.lex;
ie.Tokenizer = Vr;
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
  entries: Kl,
  setPrototypeOf: ao,
  isFrozen: ag,
  getPrototypeOf: og,
  getOwnPropertyDescriptor: lg
} = Object;
let {
  freeze: He,
  seal: ft,
  create: Bs
} = Object, {
  apply: js,
  construct: Gs
} = typeof Reflect < "u" && Reflect;
He || (He = function(e) {
  return e;
});
ft || (ft = function(e) {
  return e;
});
js || (js = function(e, t) {
  for (var i = arguments.length, r = new Array(i > 2 ? i - 2 : 0), s = 2; s < i; s++)
    r[s - 2] = arguments[s];
  return e.apply(t, r);
});
Gs || (Gs = function(e) {
  for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    i[r - 1] = arguments[r];
  return new e(...i);
});
const Or = We(Array.prototype.forEach), cg = We(Array.prototype.lastIndexOf), oo = We(Array.prototype.pop), Bi = We(Array.prototype.push), dg = We(Array.prototype.splice), qr = We(String.prototype.toLowerCase), ks = We(String.prototype.toString), _s = We(String.prototype.match), ji = We(String.prototype.replace), ug = We(String.prototype.indexOf), gg = We(String.prototype.trim), pt = We(Object.prototype.hasOwnProperty), Pe = We(RegExp.prototype.test), Gi = fg(TypeError);
function We(n) {
  return function(e) {
    e instanceof RegExp && (e.lastIndex = 0);
    for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
      i[r - 1] = arguments[r];
    return js(n, e, i);
  };
}
function fg(n) {
  return function() {
    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
      t[i] = arguments[i];
    return Gs(n, t);
  };
}
function W(n, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : qr;
  ao && ao(n, null);
  let i = e.length;
  for (; i--; ) {
    let r = e[i];
    if (typeof r == "string") {
      const s = t(r);
      s !== r && (ag(e) || (e[i] = s), r = s);
    }
    n[r] = !0;
  }
  return n;
}
function hg(n) {
  for (let e = 0; e < n.length; e++)
    pt(n, e) || (n[e] = null);
  return n;
}
function Ct(n) {
  const e = Bs(null);
  for (const [t, i] of Kl(n))
    pt(n, t) && (Array.isArray(i) ? e[t] = hg(i) : i && typeof i == "object" && i.constructor === Object ? e[t] = Ct(i) : e[t] = i);
  return e;
}
function Vi(n, e) {
  for (; n !== null; ) {
    const i = lg(n, e);
    if (i) {
      if (i.get)
        return We(i.get);
      if (typeof i.value == "function")
        return We(i.value);
    }
    n = og(n);
  }
  function t() {
    return null;
  }
  return t;
}
const lo = He(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ts = He(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Ss = He(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), pg = He(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Es = He(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), mg = He(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), co = He(["#text"]), uo = He(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), Cs = He(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), go = He(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Nr = He(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), vg = ft(/\{\{[\w\W]*|[\w\W]*\}\}/gm), bg = ft(/<%[\w\W]*|[\w\W]*%>/gm), wg = ft(/\$\{[\w\W]*/gm), yg = ft(/^data-[\-\w.\u00B7-\uFFFF]+$/), xg = ft(/^aria-[\-\w]+$/), Jl = ft(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), kg = ft(/^(?:\w+script|data):/i), _g = ft(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), ec = ft(/^html$/i), Tg = ft(/^[a-z][.\w]*(-[.\w]+)+$/i);
var fo = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: xg,
  ATTR_WHITESPACE: _g,
  CUSTOM_ELEMENT: Tg,
  DATA_ATTR: yg,
  DOCTYPE_NAME: ec,
  ERB_EXPR: bg,
  IS_ALLOWED_URI: Jl,
  IS_SCRIPT_OR_DATA: kg,
  MUSTACHE_EXPR: vg,
  TMPLIT_EXPR: wg
});
const Yi = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, Sg = function() {
  return typeof window > "u" ? null : window;
}, Eg = function(e, t) {
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
}, ho = function() {
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
function tc() {
  let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Sg();
  const e = (L) => tc(L);
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
  } = n, _ = l.prototype, b = Vi(_, "cloneNode"), m = Vi(_, "remove"), T = Vi(_, "nextSibling"), z = Vi(_, "childNodes"), w = Vi(_, "parentNode");
  if (typeof a == "function") {
    const L = t.createElement("template");
    L.content && L.content.ownerDocument && (t = L.content.ownerDocument);
  }
  let y, I = "";
  const {
    implementation: te,
    createNodeIterator: H,
    createDocumentFragment: re,
    getElementsByTagName: A
  } = t, {
    importNode: q
  } = i;
  let P = ho();
  e.isSupported = typeof Kl == "function" && typeof w == "function" && te && te.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: he,
    ERB_EXPR: ge,
    TMPLIT_EXPR: se,
    DATA_ATTR: Re,
    ARIA_ATTR: Wt,
    IS_SCRIPT_OR_DATA: Bt,
    ATTR_WHITESPACE: jt,
    CUSTOM_ELEMENT: Ee
  } = fo;
  let {
    IS_ALLOWED_URI: S
  } = fo, M = null;
  const ee = W({}, [...lo, ...Ts, ...Ss, ...Es, ...co]);
  let Z = null;
  const wn = W({}, [...uo, ...Cs, ...go, ...Nr]);
  let ne = Object.seal(Bs(null, {
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
  })), Xe = null, Gt = null;
  const x = Object.seal(Bs(null, {
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
  let D = !0, O = !0, ke = !1, Tt = !0, Vt = !1, Vn = !0, Yt = !1, qi = !1, Ui = !1, Se = !1, Be = !1, Yn = !1, kr = !0, _r = !1;
  const cn = "user-content-";
  let Qt = !0, Xt = !1, Qn = {}, St = null;
  const us = W({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let xa = null;
  const ka = W({}, ["audio", "video", "img", "source", "image", "track"]);
  let gs = null;
  const _a = W({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Tr = "http://www.w3.org/1998/Math/MathML", Sr = "http://www.w3.org/2000/svg", Zt = "http://www.w3.org/1999/xhtml";
  let Xn = Zt, fs = !1, hs = null;
  const hc = W({}, [Tr, Sr, Zt], ks);
  let Er = W({}, ["mi", "mo", "mn", "ms", "mtext"]), Cr = W({}, ["annotation-xml"]);
  const pc = W({}, ["title", "style", "font", "a", "script"]);
  let Fi = null;
  const mc = ["application/xhtml+xml", "text/html"], vc = "text/html";
  let _e = null, Zn = null;
  const bc = t.createElement("form"), Ta = function(g) {
    return g instanceof RegExp || g instanceof Function;
  }, ps = function() {
    let g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Zn && Zn === g)) {
      if ((!g || typeof g != "object") && (g = {}), g = Ct(g), Fi = // eslint-disable-next-line unicorn/prefer-includes
      mc.indexOf(g.PARSER_MEDIA_TYPE) === -1 ? vc : g.PARSER_MEDIA_TYPE, _e = Fi === "application/xhtml+xml" ? ks : qr, M = pt(g, "ALLOWED_TAGS") ? W({}, g.ALLOWED_TAGS, _e) : ee, Z = pt(g, "ALLOWED_ATTR") ? W({}, g.ALLOWED_ATTR, _e) : wn, hs = pt(g, "ALLOWED_NAMESPACES") ? W({}, g.ALLOWED_NAMESPACES, ks) : hc, gs = pt(g, "ADD_URI_SAFE_ATTR") ? W(Ct(_a), g.ADD_URI_SAFE_ATTR, _e) : _a, xa = pt(g, "ADD_DATA_URI_TAGS") ? W(Ct(ka), g.ADD_DATA_URI_TAGS, _e) : ka, St = pt(g, "FORBID_CONTENTS") ? W({}, g.FORBID_CONTENTS, _e) : us, Xe = pt(g, "FORBID_TAGS") ? W({}, g.FORBID_TAGS, _e) : Ct({}), Gt = pt(g, "FORBID_ATTR") ? W({}, g.FORBID_ATTR, _e) : Ct({}), Qn = pt(g, "USE_PROFILES") ? g.USE_PROFILES : !1, D = g.ALLOW_ARIA_ATTR !== !1, O = g.ALLOW_DATA_ATTR !== !1, ke = g.ALLOW_UNKNOWN_PROTOCOLS || !1, Tt = g.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Vt = g.SAFE_FOR_TEMPLATES || !1, Vn = g.SAFE_FOR_XML !== !1, Yt = g.WHOLE_DOCUMENT || !1, Se = g.RETURN_DOM || !1, Be = g.RETURN_DOM_FRAGMENT || !1, Yn = g.RETURN_TRUSTED_TYPE || !1, Ui = g.FORCE_BODY || !1, kr = g.SANITIZE_DOM !== !1, _r = g.SANITIZE_NAMED_PROPS || !1, Qt = g.KEEP_CONTENT !== !1, Xt = g.IN_PLACE || !1, S = g.ALLOWED_URI_REGEXP || Jl, Xn = g.NAMESPACE || Zt, Er = g.MATHML_TEXT_INTEGRATION_POINTS || Er, Cr = g.HTML_INTEGRATION_POINTS || Cr, ne = g.CUSTOM_ELEMENT_HANDLING || {}, g.CUSTOM_ELEMENT_HANDLING && Ta(g.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (ne.tagNameCheck = g.CUSTOM_ELEMENT_HANDLING.tagNameCheck), g.CUSTOM_ELEMENT_HANDLING && Ta(g.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (ne.attributeNameCheck = g.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), g.CUSTOM_ELEMENT_HANDLING && typeof g.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (ne.allowCustomizedBuiltInElements = g.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Vt && (O = !1), Be && (Se = !0), Qn && (M = W({}, co), Z = [], Qn.html === !0 && (W(M, lo), W(Z, uo)), Qn.svg === !0 && (W(M, Ts), W(Z, Cs), W(Z, Nr)), Qn.svgFilters === !0 && (W(M, Ss), W(Z, Cs), W(Z, Nr)), Qn.mathMl === !0 && (W(M, Es), W(Z, go), W(Z, Nr))), g.ADD_TAGS && (typeof g.ADD_TAGS == "function" ? x.tagCheck = g.ADD_TAGS : (M === ee && (M = Ct(M)), W(M, g.ADD_TAGS, _e))), g.ADD_ATTR && (typeof g.ADD_ATTR == "function" ? x.attributeCheck = g.ADD_ATTR : (Z === wn && (Z = Ct(Z)), W(Z, g.ADD_ATTR, _e))), g.ADD_URI_SAFE_ATTR && W(gs, g.ADD_URI_SAFE_ATTR, _e), g.FORBID_CONTENTS && (St === us && (St = Ct(St)), W(St, g.FORBID_CONTENTS, _e)), g.ADD_FORBID_CONTENTS && (St === us && (St = Ct(St)), W(St, g.ADD_FORBID_CONTENTS, _e)), Qt && (M["#text"] = !0), Yt && W(M, ["html", "head", "body"]), M.table && (W(M, ["tbody"]), delete Xe.tbody), g.TRUSTED_TYPES_POLICY) {
        if (typeof g.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Gi('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof g.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Gi('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        y = g.TRUSTED_TYPES_POLICY, I = y.createHTML("");
      } else
        y === void 0 && (y = Eg(p, r)), y !== null && typeof I == "string" && (I = y.createHTML(""));
      He && He(g), Zn = g;
    }
  }, Sa = W({}, [...Ts, ...Ss, ...pg]), Ea = W({}, [...Es, ...mg]), wc = function(g) {
    let k = w(g);
    (!k || !k.tagName) && (k = {
      namespaceURI: Xn,
      tagName: "template"
    });
    const C = qr(g.tagName), fe = qr(k.tagName);
    return hs[g.namespaceURI] ? g.namespaceURI === Sr ? k.namespaceURI === Zt ? C === "svg" : k.namespaceURI === Tr ? C === "svg" && (fe === "annotation-xml" || Er[fe]) : !!Sa[C] : g.namespaceURI === Tr ? k.namespaceURI === Zt ? C === "math" : k.namespaceURI === Sr ? C === "math" && Cr[fe] : !!Ea[C] : g.namespaceURI === Zt ? k.namespaceURI === Sr && !Cr[fe] || k.namespaceURI === Tr && !Er[fe] ? !1 : !Ea[C] && (pc[C] || !Sa[C]) : !!(Fi === "application/xhtml+xml" && hs[g.namespaceURI]) : !1;
  }, Et = function(g) {
    Bi(e.removed, {
      element: g
    });
    try {
      w(g).removeChild(g);
    } catch {
      m(g);
    }
  }, yn = function(g, k) {
    try {
      Bi(e.removed, {
        attribute: k.getAttributeNode(g),
        from: k
      });
    } catch {
      Bi(e.removed, {
        attribute: null,
        from: k
      });
    }
    if (k.removeAttribute(g), g === "is")
      if (Se || Be)
        try {
          Et(k);
        } catch {
        }
      else
        try {
          k.setAttribute(g, "");
        } catch {
        }
  }, Ca = function(g) {
    let k = null, C = null;
    if (Ui)
      g = "<remove></remove>" + g;
    else {
      const be = _s(g, /^[\r\n\t ]+/);
      C = be && be[0];
    }
    Fi === "application/xhtml+xml" && Xn === Zt && (g = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + g + "</body></html>");
    const fe = y ? y.createHTML(g) : g;
    if (Xn === Zt)
      try {
        k = new h().parseFromString(fe, Fi);
      } catch {
      }
    if (!k || !k.documentElement) {
      k = te.createDocument(Xn, "template", null);
      try {
        k.documentElement.innerHTML = fs ? I : fe;
      } catch {
      }
    }
    const Le = k.body || k.documentElement;
    return g && C && Le.insertBefore(t.createTextNode(C), Le.childNodes[0] || null), Xn === Zt ? A.call(k, Yt ? "html" : "body")[0] : Yt ? k.documentElement : Le;
  }, Aa = function(g) {
    return H.call(
      g.ownerDocument || g,
      g,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, ms = function(g) {
    return g instanceof u && (typeof g.nodeName != "string" || typeof g.textContent != "string" || typeof g.removeChild != "function" || !(g.attributes instanceof d) || typeof g.removeAttribute != "function" || typeof g.setAttribute != "function" || typeof g.namespaceURI != "string" || typeof g.insertBefore != "function" || typeof g.hasChildNodes != "function");
  }, Ia = function(g) {
    return typeof o == "function" && g instanceof o;
  };
  function Kt(L, g, k) {
    Or(L, (C) => {
      C.call(e, g, k, Zn);
    });
  }
  const Ma = function(g) {
    let k = null;
    if (Kt(P.beforeSanitizeElements, g, null), ms(g))
      return Et(g), !0;
    const C = _e(g.nodeName);
    if (Kt(P.uponSanitizeElement, g, {
      tagName: C,
      allowedTags: M
    }), Vn && g.hasChildNodes() && !Ia(g.firstElementChild) && Pe(/<[/\w!]/g, g.innerHTML) && Pe(/<[/\w!]/g, g.textContent) || g.nodeType === Yi.progressingInstruction || Vn && g.nodeType === Yi.comment && Pe(/<[/\w]/g, g.data))
      return Et(g), !0;
    if (!(x.tagCheck instanceof Function && x.tagCheck(C)) && (!M[C] || Xe[C])) {
      if (!Xe[C] && La(C) && (ne.tagNameCheck instanceof RegExp && Pe(ne.tagNameCheck, C) || ne.tagNameCheck instanceof Function && ne.tagNameCheck(C)))
        return !1;
      if (Qt && !St[C]) {
        const fe = w(g) || g.parentNode, Le = z(g) || g.childNodes;
        if (Le && fe) {
          const be = Le.length;
          for (let je = be - 1; je >= 0; --je) {
            const Jt = b(Le[je], !0);
            Jt.__removalCount = (g.__removalCount || 0) + 1, fe.insertBefore(Jt, T(g));
          }
        }
      }
      return Et(g), !0;
    }
    return g instanceof l && !wc(g) || (C === "noscript" || C === "noembed" || C === "noframes") && Pe(/<\/no(script|embed|frames)/i, g.innerHTML) ? (Et(g), !0) : (Vt && g.nodeType === Yi.text && (k = g.textContent, Or([he, ge, se], (fe) => {
      k = ji(k, fe, " ");
    }), g.textContent !== k && (Bi(e.removed, {
      element: g.cloneNode()
    }), g.textContent = k)), Kt(P.afterSanitizeElements, g, null), !1);
  }, Ra = function(g, k, C) {
    if (kr && (k === "id" || k === "name") && (C in t || C in bc))
      return !1;
    if (!(O && !Gt[k] && Pe(Re, k))) {
      if (!(D && Pe(Wt, k))) {
        if (!(x.attributeCheck instanceof Function && x.attributeCheck(k, g))) {
          if (!Z[k] || Gt[k]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(La(g) && (ne.tagNameCheck instanceof RegExp && Pe(ne.tagNameCheck, g) || ne.tagNameCheck instanceof Function && ne.tagNameCheck(g)) && (ne.attributeNameCheck instanceof RegExp && Pe(ne.attributeNameCheck, k) || ne.attributeNameCheck instanceof Function && ne.attributeNameCheck(k, g)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              k === "is" && ne.allowCustomizedBuiltInElements && (ne.tagNameCheck instanceof RegExp && Pe(ne.tagNameCheck, C) || ne.tagNameCheck instanceof Function && ne.tagNameCheck(C)))
            ) return !1;
          } else if (!gs[k]) {
            if (!Pe(S, ji(C, jt, ""))) {
              if (!((k === "src" || k === "xlink:href" || k === "href") && g !== "script" && ug(C, "data:") === 0 && xa[g])) {
                if (!(ke && !Pe(Bt, ji(C, jt, "")))) {
                  if (C)
                    return !1;
                }
              }
            }
          }
        }
      }
    }
    return !0;
  }, La = function(g) {
    return g !== "annotation-xml" && _s(g, Ee);
  }, Oa = function(g) {
    Kt(P.beforeSanitizeAttributes, g, null);
    const {
      attributes: k
    } = g;
    if (!k || ms(g))
      return;
    const C = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: Z,
      forceKeepAttr: void 0
    };
    let fe = k.length;
    for (; fe--; ) {
      const Le = k[fe], {
        name: be,
        namespaceURI: je,
        value: Jt
      } = Le, Kn = _e(be), vs = Jt;
      let Ce = be === "value" ? vs : gg(vs);
      if (C.attrName = Kn, C.attrValue = Ce, C.keepAttr = !0, C.forceKeepAttr = void 0, Kt(P.uponSanitizeAttribute, g, C), Ce = C.attrValue, _r && (Kn === "id" || Kn === "name") && (yn(be, g), Ce = cn + Ce), Vn && Pe(/((--!?|])>)|<\/(style|title|textarea)/i, Ce)) {
        yn(be, g);
        continue;
      }
      if (Kn === "attributename" && _s(Ce, "href")) {
        yn(be, g);
        continue;
      }
      if (C.forceKeepAttr)
        continue;
      if (!C.keepAttr) {
        yn(be, g);
        continue;
      }
      if (!Tt && Pe(/\/>/i, Ce)) {
        yn(be, g);
        continue;
      }
      Vt && Or([he, ge, se], (Da) => {
        Ce = ji(Ce, Da, " ");
      });
      const Na = _e(g.nodeName);
      if (!Ra(Na, Kn, Ce)) {
        yn(be, g);
        continue;
      }
      if (y && typeof p == "object" && typeof p.getAttributeType == "function" && !je)
        switch (p.getAttributeType(Na, Kn)) {
          case "TrustedHTML": {
            Ce = y.createHTML(Ce);
            break;
          }
          case "TrustedScriptURL": {
            Ce = y.createScriptURL(Ce);
            break;
          }
        }
      if (Ce !== vs)
        try {
          je ? g.setAttributeNS(je, be, Ce) : g.setAttribute(be, Ce), ms(g) ? Et(g) : oo(e.removed);
        } catch {
          yn(be, g);
        }
    }
    Kt(P.afterSanitizeAttributes, g, null);
  }, yc = function L(g) {
    let k = null;
    const C = Aa(g);
    for (Kt(P.beforeSanitizeShadowDOM, g, null); k = C.nextNode(); )
      Kt(P.uponSanitizeShadowNode, k, null), Ma(k), Oa(k), k.content instanceof s && L(k.content);
    Kt(P.afterSanitizeShadowDOM, g, null);
  };
  return e.sanitize = function(L) {
    let g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, k = null, C = null, fe = null, Le = null;
    if (fs = !L, fs && (L = "<!-->"), typeof L != "string" && !Ia(L))
      if (typeof L.toString == "function") {
        if (L = L.toString(), typeof L != "string")
          throw Gi("dirty is not a string, aborting");
      } else
        throw Gi("toString is not a function");
    if (!e.isSupported)
      return L;
    if (qi || ps(g), e.removed = [], typeof L == "string" && (Xt = !1), Xt) {
      if (L.nodeName) {
        const Jt = _e(L.nodeName);
        if (!M[Jt] || Xe[Jt])
          throw Gi("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (L instanceof o)
      k = Ca("<!---->"), C = k.ownerDocument.importNode(L, !0), C.nodeType === Yi.element && C.nodeName === "BODY" || C.nodeName === "HTML" ? k = C : k.appendChild(C);
    else {
      if (!Se && !Vt && !Yt && // eslint-disable-next-line unicorn/prefer-includes
      L.indexOf("<") === -1)
        return y && Yn ? y.createHTML(L) : L;
      if (k = Ca(L), !k)
        return Se ? null : Yn ? I : "";
    }
    k && Ui && Et(k.firstChild);
    const be = Aa(Xt ? L : k);
    for (; fe = be.nextNode(); )
      Ma(fe), Oa(fe), fe.content instanceof s && yc(fe.content);
    if (Xt)
      return L;
    if (Se) {
      if (Be)
        for (Le = re.call(k.ownerDocument); k.firstChild; )
          Le.appendChild(k.firstChild);
      else
        Le = k;
      return (Z.shadowroot || Z.shadowrootmode) && (Le = q.call(i, Le, !0)), Le;
    }
    let je = Yt ? k.outerHTML : k.innerHTML;
    return Yt && M["!doctype"] && k.ownerDocument && k.ownerDocument.doctype && k.ownerDocument.doctype.name && Pe(ec, k.ownerDocument.doctype.name) && (je = "<!DOCTYPE " + k.ownerDocument.doctype.name + `>
` + je), Vt && Or([he, ge, se], (Jt) => {
      je = ji(je, Jt, " ");
    }), y && Yn ? y.createHTML(je) : je;
  }, e.setConfig = function() {
    let L = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ps(L), qi = !0;
  }, e.clearConfig = function() {
    Zn = null, qi = !1;
  }, e.isValidAttribute = function(L, g, k) {
    Zn || ps({});
    const C = _e(L), fe = _e(g);
    return Ra(C, fe, k);
  }, e.addHook = function(L, g) {
    typeof g == "function" && Bi(P[L], g);
  }, e.removeHook = function(L, g) {
    if (g !== void 0) {
      const k = cg(P[L], g);
      return k === -1 ? void 0 : dg(P[L], k, 1)[0];
    }
    return oo(P[L]);
  }, e.removeHooks = function(L) {
    P[L] = [];
  }, e.removeAllHooks = function() {
    P = ho();
  }, e;
}
var nc = tc();
ie.setOptions({
  breaks: !0,
  // Convert \n to <br>
  gfm: !0
  // GitHub Flavored Markdown (tables, strikethrough)
});
nc.addHook("afterSanitizeAttributes", (n) => {
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
function Cg(n) {
  if (!n) return "";
  const e = ie.parse(n);
  return nc.sanitize(e, {
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
var Ag = /* @__PURE__ */ J('<div class="message-content markdown-body svelte-1uqoiy7"><!></div>'), Ig = /* @__PURE__ */ J('<span class="message-content"> </span>'), Mg = /* @__PURE__ */ J('<span class="sending-indicator svelte-1uqoiy7" aria-label="Sending message" role="status"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svelte-1uqoiy7"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="currentColor" opacity="0.3"></path><path d="M12 2C6.48 2 2 6.48 2 12H4C4 7.58 7.58 4 12 4V2Z" fill="currentColor"><animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite"></animateTransform></path></svg></span>'), Rg = /* @__PURE__ */ J('<span class="failed-indicator svelte-1uqoiy7" aria-label="Message failed to send" role="alert"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svelte-1uqoiy7"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#ef4444"></path><path d="M11 7H13V13H11V7ZM11 15H13V17H11V15Z" fill="#ef4444"></path></svg></span>'), Lg = /* @__PURE__ */ J('<div role="listitem"><div class="message-bubble svelte-1uqoiy7"><!> <!> <!></div> <div class="message-time svelte-1uqoiy7"> </div></div>');
const Og = {
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
function ic(n, e) {
  xt(e, !0), Ft(n, Og);
  let t = X(e, "message", 7);
  function i(w) {
    return new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", hour12: !0 }).format(w);
  }
  const r = /* @__PURE__ */ me(() => t().role === "user"), s = /* @__PURE__ */ me(() => t().role === "assistant" ? Cg(t().content) : t().content);
  var a = {
    get message() {
      return t();
    },
    set message(w) {
      t(w), V();
    }
  }, o = Lg();
  let l;
  var c = oe(o), d = oe(c);
  {
    var u = (w) => {
      var y = Ag(), I = oe(y);
      Dd(I, () => v(s)), ae(y), F(w, y);
    }, h = (w) => {
      var y = Ig(), I = oe(y, !0);
      ae(y), Ye(() => zn(I, t().content)), F(w, y);
    };
    ve(d, (w) => {
      t().role === "assistant" ? w(u) : w(h, !1);
    });
  }
  var p = le(d, 2);
  {
    var _ = (w) => {
      var y = Mg();
      F(w, y);
    };
    ve(p, (w) => {
      t().status === "sending" && w(_);
    });
  }
  var b = le(p, 2);
  {
    var m = (w) => {
      var y = Rg();
      F(w, y);
    };
    ve(b, (w) => {
      t().status === "failed" && w(m);
    });
  }
  ae(c);
  var T = le(c, 2), z = oe(T, !0);
  return ae(T), ae(o), Ye(
    (w, y) => {
      l = as(o, 1, "message svelte-1uqoiy7", null, l, { user: v(r), assistant: !v(r) }), Fe(o, "aria-label", v(r) ? "Your message" : "Assistant message"), Fe(T, "aria-label", w), zn(z, y);
    },
    [
      () => `Sent at ${i(t().timestamp)}`,
      () => i(t().timestamp)
    ]
  ), F(n, o), kt(a);
}
Ht(ic, { message: {} }, [], [], !0);
var Ng = /* @__PURE__ */ J('<div class="typing-indicator svelte-ej4x60" role="status" aria-live="polite" aria-label="Assistant is typing"><span aria-hidden="true" class="svelte-ej4x60"></span> <span aria-hidden="true" class="svelte-ej4x60"></span> <span aria-hidden="true" class="svelte-ej4x60"></span> <span class="sr-only svelte-ej4x60">Assistant is typing a response</span></div>');
const Dg = {
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
function rc(n, e) {
  xt(e, !0), Ft(n, Dg);
  let t = X(e, "chat", 7, $t);
  var i = {
    get chat() {
      return t();
    },
    set chat(o = $t) {
      t(o), V();
    }
  }, r = aa(), s = on(r);
  {
    var a = (o) => {
      var l = Ng();
      F(o, l);
    };
    ve(s, (o) => {
      t().isTyping && o(a);
    });
  }
  return F(n, r), kt(i);
}
Ht(rc, { chat: {} }, [], [], !0);
var Pg = /* @__PURE__ */ J('<button class="question-chip svelte-otpvm8" type="button"> </button>'), zg = /* @__PURE__ */ J('<div class="quick-questions svelte-otpvm8" role="group" aria-label="Suggested questions"><div class="section-label svelte-otpvm8">Suggested questions</div> <!></div>');
const $g = {
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
function sc(n, e) {
  xt(e, !0), Ft(n, $g);
  const t = [
    "What's Leo's professional background?",
    "What technologies does Leo work with?",
    "How can I get in touch with Leo?"
  ];
  let i = X(e, "questions", 7, t), r = X(e, "onsend", 7), s = X(e, "disabled", 7, !1);
  function a(d) {
    var u;
    s() || (u = r()) == null || u(d);
  }
  var o = {
    get questions() {
      return i();
    },
    set questions(d = t) {
      i(d), V();
    },
    get onsend() {
      return r();
    },
    set onsend(d) {
      r(d), V();
    },
    get disabled() {
      return s();
    },
    set disabled(d = !1) {
      s(d), V();
    }
  }, l = zg(), c = le(oe(l), 2);
  return bl(c, 18, i, (d) => d, (d, u, h) => {
    var p = Pg();
    p.__click = () => a(u);
    var _ = oe(p, !0);
    ae(p), Ye(() => {
      p.disabled = s(), Fe(p, "title", u), yl(p, `animation-delay: ${2.8 + v(h) * 0.2}s`), Fe(p, "aria-disabled", s() ? "true" : "false"), zn(_, u);
    }), F(d, p);
  }), ae(l), F(n, l), kt(o);
}
jn(["click"]);
Ht(sc, { questions: {}, onsend: {}, disabled: {} }, [], [], !0);
var qg = /* @__PURE__ */ J('<p class="initial-message svelte-qha2j"> </p>'), Ug = /* @__PURE__ */ J('<div class="empty-state svelte-qha2j" role="status" aria-label="botbrewers.ca assistant ready"><div class="branding-phase svelte-qha2j" aria-hidden="true"><div class="empty-icon svelte-qha2j"><img alt="" class="brand-logo svelte-qha2j" width="68" height="68"/></div> <span class="brand-name svelte-qha2j">botbrewers.ca</span></div> <!> <!></div>'), Fg = /* @__PURE__ */ J('<div class="messages-container svelte-qha2j" role="list" aria-label="Messages"><!> <!></div>'), Hg = /* @__PURE__ */ J('<div class="error-message svelte-qha2j"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-qha2j"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#ef4444" class="svelte-qha2j"></path><path d="M11 7H13V13H11V7ZM11 15H13V17H11V15Z" fill="#ef4444" class="svelte-qha2j"></path></svg> <p class="svelte-qha2j"> </p></div>'), Wg = /* @__PURE__ */ J('<div class="message-list svelte-qha2j" role="log" aria-live="polite" aria-label="Chat conversation"><!> <!></div>');
const Bg = {
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
function va(n, e) {
  xt(e, !0), Ft(n, Bg);
  let t = X(e, "onsend", 7), i = X(e, "connectionState", 23, () => de.DISCONNECTED), r = X(e, "chat", 7, $t), s = X(e, "config", 7, gt), a, o = !0;
  const l = /* @__PURE__ */ me(() => r().messages.length > 0), c = /* @__PURE__ */ me(() => i() !== de.CONNECTED);
  si(() => {
    r().messages, o && v(l) && d();
  }), si(() => {
    r().isTyping, o && v(l) && d();
  }), si(() => {
    r().streamingUpdateSignal, o && r().isStreaming && d();
  });
  async function d() {
    await fl(), a && (a.scrollTop = a.scrollHeight);
  }
  function u() {
    if (a) {
      const { scrollTop: w, scrollHeight: y, clientHeight: I } = a;
      o = y - w - I < 100;
    }
  }
  ls(() => {
    v(l) && d();
  });
  var h = {
    get onsend() {
      return t();
    },
    set onsend(w) {
      t(w), V();
    },
    get connectionState() {
      return i();
    },
    set connectionState(w = de.DISCONNECTED) {
      i(w), V();
    },
    get chat() {
      return r();
    },
    set chat(w = $t) {
      r(w), V();
    },
    get config() {
      return s();
    },
    set config(w = gt) {
      s(w), V();
    }
  }, p = Wg(), _ = oe(p);
  {
    var b = (w) => {
      var y = Ug(), I = oe(y), te = oe(I), H = oe(te);
      ae(te), ar(2), ae(I);
      var re = le(I, 2);
      {
        var A = (P) => {
          var he = qg(), ge = oe(he, !0);
          ae(he), Ye(() => zn(ge, s().initialMessage)), F(P, he);
        };
        ve(re, (P) => {
          s().initialMessage && P(A);
        });
      }
      var q = le(re, 2);
      sc(q, {
        get questions() {
          return s().quickQuestions;
        },
        get onsend() {
          return t();
        },
        get disabled() {
          return v(c);
        }
      }), ae(y), Ye(() => Fe(H, "src", cu)), F(w, y);
    }, m = (w) => {
      var y = Fg(), I = oe(y);
      bl(I, 17, () => r().messages, (H) => H.id, (H, re) => {
        ic(H, {
          get message() {
            return v(re);
          }
        });
      });
      var te = le(I, 2);
      rc(te, {
        get chat() {
          return r();
        }
      }), ae(y), F(w, y);
    };
    ve(_, (w) => {
      r().messages.length === 0 ? w(b) : w(m, !1);
    });
  }
  var T = le(_, 2);
  {
    var z = (w) => {
      var y = Hg(), I = le(oe(y), 2), te = oe(I, !0);
      ae(I), ae(y), Ye(() => zn(te, r().error)), F(w, y);
    };
    ve(T, (w) => {
      r().error && w(z);
    });
  }
  return ae(p), os(p, (w) => a = w, () => a), Ad("scroll", p, u), F(n, p), kt(h);
}
Ht(va, { onsend: {}, connectionState: {}, chat: {}, config: {} }, [], [], !0);
class po {
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
      const r = i, s = r.results[r.resultIndex], o = s[0].transcript.slice(0, un.MAX_LENGTH), l = s.isFinal;
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
function jg(n) {
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
var Gg = /* @__PURE__ */ J('<span role="alert" class="sr-only svelte-zcaleu"> </span>'), Vg = /* @__PURE__ */ sa('<rect x="6" y="4" width="4" height="16" rx="2" fill="currentColor" class="svelte-zcaleu"></rect><rect x="14" y="4" width="4" height="16" rx="2" fill="currentColor" class="svelte-zcaleu"></rect>', 1), Yg = /* @__PURE__ */ sa('<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" fill="currentColor" class="svelte-zcaleu"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="svelte-zcaleu"></path><line x1="12" y1="19" x2="12" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="svelte-zcaleu"></line><line x1="8" y1="23" x2="16" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="svelte-zcaleu"></line>', 1), Qg = /* @__PURE__ */ J('<!> <button type="button"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svelte-zcaleu"><!></svg></button>', 1);
const Xg = {
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
function ac(n, e) {
  xt(e, !0), Ft(n, Xg);
  let t = X(e, "disabled", 7, !1), i = X(e, "lang", 7, "en-US"), r = X(e, "onTranscript", 7), s = /* @__PURE__ */ U("idle"), a = /* @__PURE__ */ U(null);
  const o = po.isSupported();
  let l = !0, c = null;
  function d() {
    return c || (c = new po({
      lang: i(),
      continuous: !1,
      interimResults: !1,
      onResult(w, y) {
        y && w.trim() && l && r()(w.trim());
      },
      onStateChange(w) {
        N(s, w, !0), w !== "error" && N(a, null);
      },
      onError(w) {
        N(s, "error"), N(a, jg(w), !0);
      }
    })), c;
  }
  function u() {
    t() || !o || (v(s) === "listening" ? d().stop() : (N(a, null), d().start()));
  }
  si(() => () => {
    l = !1, c == null || c.abort(), c = null;
  });
  const h = /* @__PURE__ */ me(() => v(s) === "listening"), p = /* @__PURE__ */ me(() => v(s) === "error" ? `Voice input error: ${v(a) ?? "unknown"} — Start voice input` : v(h) ? "Stop listening" : "Start voice input"), _ = /* @__PURE__ */ me(() => v(a) ?? (v(h) ? "Stop listening" : "Start voice input (audio processed by your browser's speech service)"));
  var b = {
    get disabled() {
      return t();
    },
    set disabled(w = !1) {
      t(w), V();
    },
    get lang() {
      return i();
    },
    set lang(w = "en-US") {
      i(w), V();
    },
    get onTranscript() {
      return r();
    },
    set onTranscript(w) {
      r(w), V();
    }
  }, m = aa(), T = on(m);
  {
    var z = (w) => {
      var y = Qg(), I = on(y);
      {
        var te = (ge) => {
          var se = Gg(), Re = oe(se, !0);
          ae(se), Ye(() => zn(Re, v(a))), F(ge, se);
        };
        ve(I, (ge) => {
          v(a) && ge(te);
        });
      }
      var H = le(I, 2);
      let re;
      H.__click = u;
      var A = oe(H), q = oe(A);
      {
        var P = (ge) => {
          var se = Vg();
          ar(), F(ge, se);
        }, he = (ge) => {
          var se = Yg();
          ar(3), F(ge, se);
        };
        ve(q, (ge) => {
          v(h) ? ge(P) : ge(he, !1);
        });
      }
      ae(A), ae(H), Ye(() => {
        re = as(H, 1, "voice-button svelte-zcaleu", null, re, {
          listening: v(h),
          error: v(s) === "error"
        }), H.disabled = t(), Fe(H, "aria-label", v(p)), Fe(H, "title", v(_)), Fe(H, "aria-pressed", v(h));
      }), F(w, y);
    };
    ve(T, (w) => {
      o && w(z);
    });
  }
  return F(n, m), kt(b);
}
jn(["click"]);
Ht(ac, { disabled: {}, lang: {}, onTranscript: {} }, [], [], !0);
var Zg = /* @__PURE__ */ J('<div class="connection-status svelte-1a8gd73" role="status" aria-live="polite"><span class="connecting-text svelte-1a8gd73">Connecting...</span> <span class="connecting-dot svelte-1a8gd73"></span></div>'), Kg = /* @__PURE__ */ J('<div class="brand-banner svelte-1a8gd73"><a href="https://botbrewers.ca" target="_blank" rel="noopener noreferrer" class="svelte-1a8gd73">botbrewers.ca<span class="sr-only svelte-1a8gd73">(opens in new tab)</span></a></div>'), Jg = /* @__PURE__ */ J('<div class="input-bar svelte-1a8gd73"><!> <div class="input-container svelte-1a8gd73"><textarea class="input-field svelte-1a8gd73" rows="1" aria-label="Message input"></textarea> <!> <button class="send-button svelte-1a8gd73" aria-label="Send message"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-1a8gd73"><path d="M2 21L23 12L2 3V10L17 12L2 14V21Z" fill="currentColor" class="svelte-1a8gd73"></path></svg></button></div> <div class="ai-disclaimer svelte-1a8gd73">AI can make mistakes. Please double-check responses.</div></div>');
const ef = {
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
function ba(n, e) {
  xt(e, !0), Ft(n, ef);
  let t = X(e, "onsend", 7), i = X(e, "disabled", 7, !1), r = X(e, "showBrandBanner", 7, !1), s = X(e, "connectionState", 23, () => de.DISCONNECTED), a = X(e, "chat", 7, $t), o = X(e, "config", 7, gt), l = /* @__PURE__ */ U(""), c;
  function d() {
    var he;
    const A = bt().generate(), q = v(l);
    Q.log("InputBar", "handleSend() called", {
      correlationId: A,
      rawInputValue: q,
      rawLength: (q == null ? void 0 : q.length) || 0,
      rawType: typeof q,
      disabled: i(),
      isTyping: a().isTyping
    });
    const P = q.trim();
    Q.log("InputBar", "After trimming", {
      correlationId: A,
      original: q,
      trimmed: P,
      originalLength: (q == null ? void 0 : q.length) || 0,
      trimmedLength: (P == null ? void 0 : P.length) || 0,
      wasEmptyAfterTrim: !P,
      hadWhitespaceOnly: ((q == null ? void 0 : q.length) || 0) > 0 && !P
    }), P && !i() && !a().isTyping ? (Q.log("InputBar", "Conditions met, calling onsend", {
      correlationId: A,
      trimmedValue: P,
      trimmedLength: P.length,
      willSend: !0
    }), bt().setCurrent(A), (he = t()) == null || he(P), N(l, ""), h()) : Q.log("InputBar", "Send blocked", {
      correlationId: A,
      hasContent: !!P,
      disabled: i(),
      isTyping: a().isTyping,
      trimmedValue: P || "(empty)",
      reason: P ? i() ? "disabled" : a().isTyping ? "typing in progress" : "unknown" : "empty content"
    });
  }
  function u(A) {
    A.key === "Enter" && !A.shiftKey && (A.preventDefault(), d());
  }
  function h() {
    c && (c.style.height = "auto", c.style.height = Math.min(c.scrollHeight, 120) + "px");
  }
  const p = /* @__PURE__ */ me(() => i() || a().isTyping || a().error !== null), _ = /* @__PURE__ */ me(() => a().isTyping ? "Waiting for response..." : a().error ? "Error occurred" : o().placeholder), b = /* @__PURE__ */ me(() => s() === de.CONNECTING || s() === de.DISCONNECTED);
  var m = {
    get onsend() {
      return t();
    },
    set onsend(A) {
      t(A), V();
    },
    get disabled() {
      return i();
    },
    set disabled(A = !1) {
      i(A), V();
    },
    get showBrandBanner() {
      return r();
    },
    set showBrandBanner(A = !1) {
      r(A), V();
    },
    get connectionState() {
      return s();
    },
    set connectionState(A = de.DISCONNECTED) {
      s(A), V();
    },
    get chat() {
      return a();
    },
    set chat(A = $t) {
      a(A), V();
    },
    get config() {
      return o();
    },
    set config(A = gt) {
      o(A), V();
    }
  }, T = Jg(), z = oe(T);
  {
    var w = (A) => {
      var q = aa(), P = on(q);
      {
        var he = (se) => {
          var Re = Zg();
          F(se, Re);
        }, ge = (se) => {
          var Re = Kg();
          F(se, Re);
        };
        ve(P, (se) => {
          v(b) ? se(he) : se(ge, !1);
        });
      }
      F(A, q);
    };
    ve(z, (A) => {
      r() && A(w);
    });
  }
  var y = le(z, 2), I = oe(y);
  fd(I), I.__keydown = u, I.__input = h, os(I, (A) => c = A, () => c);
  var te = le(I, 2);
  {
    var H = (A) => {
      ac(A, {
        get disabled() {
          return v(p);
        },
        onTranscript: (q) => {
          N(l, q, !0), c == null || c.focus();
        }
      });
    };
    ve(te, (A) => {
      o().voiceInput && A(H);
    });
  }
  var re = le(te, 2);
  return re.__click = d, ae(y), ar(2), ae(T), Ye(
    (A) => {
      Fe(I, "placeholder", v(_)), I.disabled = v(p), re.disabled = A;
    },
    [() => v(p) || !v(l).trim()]
  ), Gd(I, () => v(l), (A) => N(l, A)), F(n, T), kt(m);
}
jn(["keydown", "input", "click"]);
Ht(
  ba,
  {
    onsend: {},
    disabled: {},
    showBrandBanner: {},
    connectionState: {},
    chat: {},
    config: {}
  },
  [],
  [],
  !0
);
class oc {
  constructor(e, t) {
    this.sessionId = null, this.config = e, this.visitor = t, this.debugLogger = cs(e.getAll());
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
      const s = bt().getCurrent(), a = await fetch(i, {
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
          throw new ri(
            `Rate limit exceeded. Please try again in ${c} seconds.`,
            c
          );
        }
        throw new ii(
          `Failed to initialize widget: ${a.statusText}`,
          a.status,
          i
        );
      }
      const o = await a.json();
      return this.sessionId = o.session_id, this.visitor.saveSessionId(o.session_id), o;
    } catch (e) {
      if (e instanceof nr || e instanceof ii || e instanceof ri)
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
    const t = bt().getCurrent();
    try {
      this.debugLogger.log("APIClient", "sendMessage() called", {
        correlationId: t,
        message: e,
        messageLength: (e == null ? void 0 : e.length) || 0,
        messageType: typeof e,
        sessionId: this.sessionId,
        clientId: this.config.clientId
      });
      const s = ou.validate(e);
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
          throw new ri(
            `Rate limit exceeded. Please try again in ${p} seconds.`,
            p
          );
        }
        throw new ii(
          `Failed to send message: ${d.statusText}`,
          d.status,
          c
        );
      }
      const u = await d.json();
      return this.debugLogger.log("APIClient", "HTTP response data", { correlationId: t, result: u }), u;
    } catch (s) {
      if (this.debugLogger.error("APIClient", "sendMessage() error", { correlationId: t, error: s }), s instanceof nr || s instanceof ii || s instanceof ri)
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
      const s = bt().getCurrent(), a = await fetch(i, {
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
      }, s = bt().getCurrent(), a = await fetch(i, {
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
class lc {
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
    t && !this.chatStore.hasMessages && (gt.setBackendInitialMessage(t), this.debugLogger.log("ChatController", "Initial message configured for empty state", {
      source: gt.initialMessage === t ? "server" : "client-override"
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
var tf = /* @__PURE__ */ J('<span class="error-message svelte-zsv8oa" id="error-message">Connection lost. Unable to reconnect.</span> <button class="restart-button svelte-zsv8oa" aria-describedby="error-message">Retry Connection</button>', 1), nf = /* @__PURE__ */ J('<span class="error-message svelte-zsv8oa" id="error-message">Something went wrong. Please try again.</span> <button class="restart-button svelte-zsv8oa" aria-describedby="error-message">Try Again</button>', 1), rf = /* @__PURE__ */ J('<div class="error-banner svelte-zsv8oa" role="alert" aria-live="polite"><!></div>'), sf = /* @__PURE__ */ J('<button class="backdrop svelte-zsv8oa" aria-label="Close chat overlay" tabindex="-1"></button>'), af = /* @__PURE__ */ J('<div role="status" aria-live="polite" class="sr-only svelte-zsv8oa">Chat assistant opened</div> <div class="chat-container svelte-zsv8oa" role="dialog" aria-label="Chat assistant" aria-modal="true" tabindex="-1"><!> <!> <!> <!></div> <!>', 1), of = /* @__PURE__ */ J('<div class="widget-container svelte-zsv8oa"><!> <!></div>');
const lf = {
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
function cc(n, e) {
  xt(e, !0), Ft(n, lf);
  let t = X(e, "hostElement", 7), i = X(e, "ui", 7, vn), r = X(e, "chat", 7, $t), s = X(e, "config", 7, gt), a, o, l, c, d, u;
  const h = bt();
  let p = !1, _ = !1, b = null, m = /* @__PURE__ */ U(we(de.DISCONNECTED)), T = /* @__PURE__ */ U(
    !1
    // Track if max reconnection attempts exhausted
  ), z = /* @__PURE__ */ U(null), w = null;
  function y() {
    var D;
    if ((D = t()) != null && D.hasAttribute("data-theme")) return;
    window.matchMedia("(prefers-color-scheme: dark)").matches && t() && t().setAttribute("data-theme", "dark");
  }
  function I(x) {
    const D = [
      "button:not([disabled])",
      "textarea:not([disabled])",
      "input:not([disabled])",
      '[tabindex]:not([tabindex="-1"])',
      "a[href]"
    ].join(", "), O = x.querySelectorAll(D);
    if (O.length === 0) return;
    const ke = O[0], Tt = O[O.length - 1];
    return requestAnimationFrame(() => ke.focus()), { firstFocusable: ke, lastFocusable: Tt };
  }
  function te(x) {
    if (x.key === "Escape" && i().isOpen) {
      x.preventDefault(), i().close(), re();
      return;
    }
    if (x.key === "Tab" && v(z)) {
      const D = [
        "button:not([disabled])",
        "textarea:not([disabled])",
        "input:not([disabled])",
        '[tabindex]:not([tabindex="-1"])',
        "a[href]"
      ].join(", "), O = v(z).querySelectorAll(D);
      if (O.length === 0) return;
      const ke = O[0], Tt = O[O.length - 1];
      x.shiftKey && document.activeElement === ke ? (x.preventDefault(), Tt.focus()) : !x.shiftKey && document.activeElement === Tt && (x.preventDefault(), ke.focus());
    }
  }
  function H() {
    w = document.activeElement;
  }
  function re() {
    w && typeof w.focus == "function" && requestAnimationFrame(() => w == null ? void 0 : w.focus()), w = null;
  }
  function A() {
    v(z) && I(v(z));
  }
  ls(async () => {
    try {
      a = new ql(t()), u = cs(a.getAll()), o = new Gr(), l = new oc(a, o), c = new Ul(a, o), d = new lc(r(), i(), u), t() && s().loadFromAttributes(t()), P(), y(), u.log("ChatWidget", "Attaching WebSocket listeners"), c.on("message", ge), c.on("stateChange", (D) => {
        u.log("ChatWidget", "WebSocket state changed", {
          oldState: v(m),
          newState: D,
          timestamp: Date.now()
        }), N(m, D, !0);
      }), c.on("error", (D) => {
        u.error("ChatWidget", "WebSocket error event", D), b = D.error, r().setError(D.error);
      }), c.on("connectionFailed", (D) => {
        u.error("ChatWidget", "WebSocket connection failed after max attempts", D), N(T, !0), b = D.error, r().setError(D.error);
      }), u.log("ChatWidget", "WebSocket listeners attached successfully"), i().isOpen && await q();
      const x = t();
      x != null && x.setOnOpenChangeCallback && x.setOnOpenChangeCallback((D) => {
        Re(D);
      }), u.log("ChatWidget", "Services initialized successfully");
    } catch (x) {
      u.error("ChatWidget", "Initialization failed", x), b = x instanceof Error ? x.message : "Failed to initialize chat";
    }
  }), si(() => {
    const x = i().isOpen;
    if (t()) {
      const D = t().hasAttribute("open");
      x && !D ? t().setAttribute("open", "") : !x && D && t().removeAttribute("open");
    }
  }), kl(() => {
    const x = l == null ? void 0 : l.getSessionId();
    x && o.markSessionInactive(x), c == null || c.disconnect(), d == null || d.cleanup();
  });
  async function q() {
    var x;
    if (!(p || _)) {
      _ = !0;
      try {
        if (i().setLoading(!0), await l.resumeSession()) {
          const O = l.getSessionId();
          O && (await c.connect(O), setTimeout(
            () => {
              u.log("ChatWidget", "Testing WebSocket connection after session resumption..."), c.testConnection();
            },
            Te.CONNECTION_DELAY
          ));
        } else {
          const O = await l.initialize();
          (x = O.assistant_info) != null && x.assistant_name && s().setBackendTitle(O.assistant_info.assistant_name), await c.connect(O.session_id), setTimeout(
            () => {
              u.log("ChatWidget", "Testing WebSocket connection after initialization..."), c.testConnection();
            },
            Te.CONNECTION_DELAY
          ), O.settings && he(O.settings);
        }
        p = !0;
      } catch (D) {
        b = D instanceof Error ? D.message : "Failed to initialize", r().setError(b);
      } finally {
        i().setLoading(!1), _ = !1;
      }
    }
  }
  function P() {
    const x = a.getAll();
    requestAnimationFrame(() => {
      if (t() && (t().setAttribute("data-theme", x.theme || "modern"), x.primary_color || x.accent_color)) {
        const D = x.accent_color || x.primary_color;
        if (D) {
          const O = ur(D, "#6b46c1");
          t().style.setProperty("--widget-primary", O), t().style.setProperty("--widget-primary-hover", pe(O, -20)), t().style.setProperty("--widget-primary-light", pe(O, 20)), t().style.setProperty("--widget-primary-dark", pe(O, -30)), t().style.setProperty("--widget-gradient", `linear-gradient(135deg, ${O} 0%, ${pe(O, 20)} 100%)`), t().style.setProperty("--widget-gradient-hover", `linear-gradient(135deg, ${pe(O, -20)} 0%, ${O} 100%)`);
        }
      }
    });
  }
  function he(x) {
    requestAnimationFrame(() => {
      t() && (x.theme && typeof x.theme == "string" && t().setAttribute("data-theme", x.theme), x.primary_color && typeof x.primary_color == "string" && t().style.setProperty("--widget-primary", x.primary_color));
    });
  }
  function ge(x) {
    d.handleMessage(x);
  }
  async function se(x) {
    const D = h.getCurrent();
    u.log("ChatWidget", "handleSendMessage called with content", {
      correlationId: D,
      content: x,
      length: (x == null ? void 0 : x.length) || 0,
      trimmed: (x == null ? void 0 : x.trim()) || "",
      type: typeof x
    });
    const O = r().addMessage(x, "user");
    if (d.resetForNewMessage(), u.log("ChatWidget", "Message added to store", {
      correlationId: D,
      messageId: O.id,
      content: O.content,
      length: O.content.length
    }), p || (u.log("ChatWidget", "Widget not initialized, initializing...", { correlationId: D }), await q()), u.log("ChatWidget", "Connection state", {
      correlationId: D,
      connectionState: v(m),
      isConnected: v(m) === de.CONNECTED,
      routingTo: v(m) === de.CONNECTED ? "WebSocket" : "HTTP API"
    }), v(m) === de.CONNECTED) {
      u.log("ChatWidget", "Sending via WebSocket", { correlationId: D, content: x });
      try {
        d.setTypingWithTimeout(), c.send(x), r().updateMessageStatus(O.id, "sent"), u.log("ChatWidget", "User message marked as sent", { messageId: O.id });
      } catch (ke) {
        u.error("ChatWidget", "WebSocket send error", ke), r().updateMessageStatus(O.id, "failed"), r().setError("Failed to send message. Please try again."), r().setTyping(!1);
        return;
      }
    } else
      try {
        u.log("ChatWidget", "Sending via HTTP API", { correlationId: D, content: x }), d.setTypingWithTimeout();
        const ke = await l.sendMessage(x);
        u.log("ChatWidget", "HTTP API response received", {
          correlationId: D,
          response: ke.response,
          sessionId: ke.session_id
        }), r().addMessage(ke.response, "assistant"), r().setTyping(!1), i().isOpen || i().markUnread();
      } catch (ke) {
        u.error("ChatWidget", "HTTP API error", ke), b = "Failed to send message. Please try again.", r().setError(b), r().updateMessageStatus(O.id, "failed"), r().setTyping(!1);
      }
  }
  async function Re(x) {
    const D = i().isOpen;
    D !== x && (u.log("ChatWidget", "Setting open state", { from: D, to: x }), x && !D && !w && H(), x ? i().open() : i().close(), await new Promise((O) => setTimeout(O, 0)), x && !p && s() && await q(), x ? requestAnimationFrame(() => A()) : re());
  }
  async function Wt() {
    await Re(!i().isOpen);
  }
  function Bt() {
    r().clearMessages(), r().setError(null), b = null;
  }
  function jt() {
    u.log("ChatWidget", "Manual retry connection requested"), N(T, !1), b = null, r().setError(null), c == null || c.retryConnection();
  }
  const Ee = /* @__PURE__ */ me(() => i().isOpen), S = /* @__PURE__ */ me(() => i().isLoading), M = /* @__PURE__ */ me(() => {
    var x;
    return ((x = s()) == null ? void 0 : x.position) || "bottom-right";
  });
  var ee = {
    get hostElement() {
      return t();
    },
    set hostElement(x) {
      t(x), V();
    },
    get ui() {
      return i();
    },
    set ui(x = vn) {
      i(x), V();
    },
    get chat() {
      return r();
    },
    set chat(x = $t) {
      r(x), V();
    },
    get config() {
      return s();
    },
    set config(x = gt) {
      s(x), V();
    }
  }, Z = of(), wn = oe(Z);
  {
    var ne = (x) => {
      Ol(x, {
        onclick: Wt,
        get ui() {
          return i();
        }
      });
    };
    ve(wn, (x) => {
      v(Ee) || x(ne);
    });
  }
  var Xe = le(wn, 2);
  {
    var Gt = (x) => {
      var D = af(), O = le(on(D), 2);
      O.__keydown = te;
      var ke = oe(O);
      ca(ke, {
        onclose: () => {
          i().close(), re();
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
      var Tt = le(ke, 2);
      va(Tt, {
        onsend: se,
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
      var Vt = le(Tt, 2);
      {
        let Se = /* @__PURE__ */ me(() => r().error !== null || v(S)), Be = /* @__PURE__ */ me(() => r().messages.length === 0);
        ba(Vt, {
          onsend: se,
          get disabled() {
            return v(Se);
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
          }
        });
      }
      var Vn = le(Vt, 2);
      {
        var Yt = (Se) => {
          var Be = rf(), Yn = oe(Be);
          {
            var kr = (cn) => {
              var Qt = tf(), Xt = le(on(Qt), 2);
              Xt.__click = jt, F(cn, Qt);
            }, _r = (cn) => {
              var Qt = nf(), Xt = le(on(Qt), 2);
              Xt.__click = Bt, F(cn, Qt);
            };
            ve(Yn, (cn) => {
              v(T) ? cn(kr) : cn(_r, !1);
            });
          }
          ae(Be), F(Se, Be);
        };
        ve(Vn, (Se) => {
          r().error && Se(Yt);
        });
      }
      ae(O), os(O, (Se) => N(z, Se), () => v(z));
      var qi = le(O, 2);
      {
        var Ui = (Se) => {
          var Be = sf();
          Be.__click = () => i().close(), Va(3, Be, () => eu, () => ({ duration: 200 })), F(Se, Be);
        };
        ve(qi, (Se) => {
          v(Ee) && Se(Ui);
        });
      }
      Va(3, O, () => tu, () => ({ y: 20, duration: 300 })), F(x, D);
    };
    ve(Xe, (x) => {
      v(Ee) && x(Gt);
    });
  }
  return ae(Z), Ye(() => {
    Fe(Z, "data-position", v(M)), Fe(Z, "data-theme", s().theme);
  }), F(n, Z), kt(ee);
}
jn(["keydown", "click"]);
Ht(cc, { hostElement: {}, ui: {}, chat: {}, config: {} }, [], [], !0);
var cf = /* @__PURE__ */ J('<span class="error-message svelte-12a99c7" id="error-message">Connection lost. Unable to reconnect.</span> <button class="restart-button svelte-12a99c7" aria-describedby="error-message">Retry Connection</button>', 1), df = /* @__PURE__ */ J('<span class="error-message svelte-12a99c7" id="error-message">Something went wrong. Please try again.</span> <button class="restart-button svelte-12a99c7" aria-describedby="error-message">Try Again</button>', 1), uf = /* @__PURE__ */ J('<div class="error-banner svelte-12a99c7" role="alert" aria-live="polite"><!></div>'), gf = /* @__PURE__ */ J('<div class="chat-page svelte-12a99c7" role="region" aria-label="Chat assistant"><!> <!> <!> <!></div>');
const ff = {
  hash: "svelte-12a99c7",
  code: `.chat-page.svelte-12a99c7 {width:100%;height:100%;display:flex;flex-direction:column;overflow:hidden;background:var(--widget-background);border-radius:0;border:none;min-height:400px;}.error-banner.svelte-12a99c7 {position:sticky;bottom:var(--widget-space-md);left:50%;transform:translateX(-50%);background:var(--widget-background);padding:var(--widget-space-md) var(--widget-space-lg);border-radius:var(--widget-radius-lg);box-shadow:var(--widget-shadow-lg);border:1px solid var(--widget-error);z-index:10;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:var(--widget-space-sm);max-width:calc(100% - 2 * var(--widget-space-lg));width:max-content;min-width:200px;box-sizing:border-box;}

  @media (max-width: 480px) {.error-banner.svelte-12a99c7 {max-width:calc(100% - 2 * var(--widget-space-md));padding:var(--widget-space) var(--widget-space-md);min-width:160px;}
  }.error-message.svelte-12a99c7 {color:var(--widget-error);font-size:var(--widget-font-size-sm);text-align:center;line-height:1.4;word-break:break-word;overflow-wrap:break-word;}.restart-button.svelte-12a99c7 {background:var(--widget-primary);color:var(--widget-text-inverse);border:none;padding:var(--widget-space) var(--widget-space-lg);border-radius:var(--widget-radius-md);font-size:var(--widget-font-size-sm);font-weight:600;cursor:pointer;transition:all var(--widget-transition);font-family:var(--widget-font-family);width:100%;}.restart-button.svelte-12a99c7:hover {background:var(--widget-primary-hover);}.restart-button.svelte-12a99c7:active {background:var(--widget-primary-dark);}.restart-button.svelte-12a99c7:focus-visible {outline:2px solid var(--widget-primary);outline-offset:2px;}

  /* Dark theme adjustments */[data-theme="dark"] .chat-page.svelte-12a99c7 {background:var(--widget-background);border-color:var(--widget-border);}[data-theme="dark"] .error-banner.svelte-12a99c7 {background:var(--widget-surface);border-color:var(--widget-error);}`
};
function dc(n, e) {
  xt(e, !0), Ft(n, ff);
  let t = X(e, "hostElement", 7), i = X(e, "ui", 7, vn), r = X(e, "chat", 7, $t), s = X(e, "config", 7, gt), a, o, l, c, d, u;
  const h = bt();
  let p = !1, _ = !1, b = null, m = /* @__PURE__ */ U(we(de.DISCONNECTED)), T = /* @__PURE__ */ U(!1), z = /* @__PURE__ */ U(null);
  const w = (S) => {
    const M = S.detail;
    M != null && M.text && typeof M.text == "string" && A(M.text);
  };
  function y() {
    var M;
    if ((M = t()) != null && M.hasAttribute("data-theme")) return;
    window.matchMedia("(prefers-color-scheme: dark)").matches && t() && t().setAttribute("data-theme", "dark");
  }
  ls(async () => {
    try {
      i().open(), a = new ql(t()), u = cs(a.getAll()), o = new Gr(), l = new oc(a, o), c = new Ul(a, o), d = new lc(r(), i(), u), t() && s().loadFromAttributes(t()), te(), y(), u.log("ChatPage", "Attaching WebSocket listeners"), c.on("message", re), c.on("stateChange", (S) => {
        u.log("ChatPage", "WebSocket state changed", {
          oldState: v(m),
          newState: S,
          timestamp: Date.now()
        }), N(m, S, !0);
      }), c.on("error", (S) => {
        u.error("ChatPage", "WebSocket error event", S), b = S.error, r().setError(S.error);
      }), c.on("connectionFailed", (S) => {
        u.error("ChatPage", "WebSocket connection failed after max attempts", S), N(T, !0), b = S.error, r().setError(S.error);
      }), u.log("ChatPage", "WebSocket listeners attached successfully"), t() && t().addEventListener("send-message", w), await I(), u.log("ChatPage", "Services initialized successfully");
    } catch (S) {
      u.error("ChatPage", "Initialization failed", S), b = S instanceof Error ? S.message : "Failed to initialize chat";
    }
  }), kl(() => {
    t() && t().removeEventListener("send-message", w);
    const S = l == null ? void 0 : l.getSessionId();
    S && o.markSessionInactive(S), c == null || c.disconnect(), d == null || d.cleanup();
  });
  async function I() {
    var S;
    if (!(p || _)) {
      _ = !0;
      try {
        if (i().setLoading(!0), await l.resumeSession()) {
          const ee = l.getSessionId();
          ee && (await c.connect(ee), setTimeout(
            () => {
              u.log("ChatPage", "Testing WebSocket connection after session resumption..."), c.testConnection();
            },
            Te.CONNECTION_DELAY
          ));
        } else {
          const ee = await l.initialize();
          (S = ee.assistant_info) != null && S.assistant_name && s().setBackendTitle(ee.assistant_info.assistant_name), await c.connect(ee.session_id), setTimeout(
            () => {
              u.log("ChatPage", "Testing WebSocket connection after initialization..."), c.testConnection();
            },
            Te.CONNECTION_DELAY
          ), ee.settings && H(ee.settings);
        }
        p = !0;
      } catch (M) {
        b = M instanceof Error ? M.message : "Failed to initialize", r().setError(b);
      } finally {
        i().setLoading(!1), _ = !1;
      }
    }
  }
  function te() {
    const S = a.getAll();
    requestAnimationFrame(() => {
      if (t() && (t().setAttribute("data-theme", S.theme || "modern"), S.primary_color || S.accent_color)) {
        const M = S.accent_color || S.primary_color;
        if (M) {
          const ee = ur(M, "#6b46c1");
          t().style.setProperty("--widget-primary", ee), t().style.setProperty("--widget-primary-hover", pe(ee, -20)), t().style.setProperty("--widget-primary-light", pe(ee, 20)), t().style.setProperty("--widget-primary-dark", pe(ee, -30)), t().style.setProperty("--widget-gradient", `linear-gradient(135deg, ${ee} 0%, ${pe(ee, 20)} 100%)`), t().style.setProperty("--widget-gradient-hover", `linear-gradient(135deg, ${pe(ee, -20)} 0%, ${ee} 100%)`);
        }
      }
    });
  }
  function H(S) {
    requestAnimationFrame(() => {
      if (t() && (S.theme && typeof S.theme == "string" && t().setAttribute("data-theme", S.theme), S.primary_color && typeof S.primary_color == "string")) {
        const M = ur(S.primary_color, "#6b46c1");
        t().style.setProperty("--widget-primary", M), t().style.setProperty("--widget-primary-hover", pe(M, -20)), t().style.setProperty("--widget-primary-light", pe(M, 20)), t().style.setProperty("--widget-primary-dark", pe(M, -30)), t().style.setProperty("--widget-gradient", `linear-gradient(135deg, ${M} 0%, ${pe(M, 20)} 100%)`), t().style.setProperty("--widget-gradient-hover", `linear-gradient(135deg, ${pe(M, -20)} 0%, ${M} 100%)`);
      }
    });
  }
  function re(S) {
    d.handleMessage(S);
  }
  async function A(S) {
    const M = h.getCurrent();
    u.log("ChatPage", "handleSendMessage called with content", {
      correlationId: M,
      content: S,
      length: (S == null ? void 0 : S.length) || 0,
      trimmed: (S == null ? void 0 : S.trim()) || "",
      type: typeof S
    });
    const ee = r().addMessage(S, "user");
    if (d.resetForNewMessage(), u.log("ChatPage", "Message added to store", {
      correlationId: M,
      messageId: ee.id,
      content: ee.content,
      length: ee.content.length
    }), p || (u.log("ChatPage", "Widget not initialized, initializing...", { correlationId: M }), await I()), u.log("ChatPage", "Connection state", {
      correlationId: M,
      connectionState: v(m),
      isConnected: v(m) === de.CONNECTED,
      routingTo: v(m) === de.CONNECTED ? "WebSocket" : "HTTP API"
    }), v(m) === de.CONNECTED) {
      u.log("ChatPage", "Sending via WebSocket", { correlationId: M, content: S });
      try {
        d.setTypingWithTimeout(), c.send(S), r().updateMessageStatus(ee.id, "sent"), u.log("ChatPage", "User message marked as sent", { messageId: ee.id });
      } catch (Z) {
        u.error("ChatPage", "WebSocket send error", Z), r().updateMessageStatus(ee.id, "failed"), r().setError("Failed to send message. Please try again."), r().setTyping(!1);
        return;
      }
    } else
      try {
        u.log("ChatPage", "Sending via HTTP API", { correlationId: M, content: S }), d.setTypingWithTimeout();
        const Z = await l.sendMessage(S);
        u.log("ChatPage", "HTTP API response received", {
          correlationId: M,
          response: Z.response,
          sessionId: Z.session_id
        }), r().addMessage(Z.response, "assistant"), r().setTyping(!1);
      } catch (Z) {
        u.error("ChatPage", "HTTP API error", Z), b = "Failed to send message. Please try again.", r().setError(b), r().updateMessageStatus(ee.id, "failed"), r().setTyping(!1);
      }
  }
  function q() {
    r().clearMessages(), r().setError(null), b = null;
  }
  function P() {
    u.log("ChatPage", "Manual retry connection requested"), N(T, !1), b = null, r().setError(null), c == null || c.retryConnection();
  }
  const he = /* @__PURE__ */ me(() => i().isLoading);
  var ge = {
    get hostElement() {
      return t();
    },
    set hostElement(S) {
      t(S), V();
    },
    get ui() {
      return i();
    },
    set ui(S = vn) {
      i(S), V();
    },
    get chat() {
      return r();
    },
    set chat(S = $t) {
      r(S), V();
    },
    get config() {
      return s();
    },
    set config(S = gt) {
      s(S), V();
    }
  }, se = gf(), Re = oe(se);
  ca(Re, {
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
  var Wt = le(Re, 2);
  va(Wt, {
    onsend: A,
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
  var Bt = le(Wt, 2);
  {
    let S = /* @__PURE__ */ me(() => r().error !== null || v(he)), M = /* @__PURE__ */ me(() => r().messages.length === 0);
    ba(Bt, {
      onsend: A,
      get disabled() {
        return v(S);
      },
      get showBrandBanner() {
        return v(M);
      },
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
  }
  var jt = le(Bt, 2);
  {
    var Ee = (S) => {
      var M = uf(), ee = oe(M);
      {
        var Z = (ne) => {
          var Xe = cf(), Gt = le(on(Xe), 2);
          Gt.__click = P, F(ne, Xe);
        }, wn = (ne) => {
          var Xe = df(), Gt = le(on(Xe), 2);
          Gt.__click = q, F(ne, Xe);
        };
        ve(ee, (ne) => {
          v(T) ? ne(Z) : ne(wn, !1);
        });
      }
      ae(M), F(S, M);
    };
    ve(jt, (S) => {
      r().error && S(Ee);
    });
  }
  return ae(se), os(se, (S) => N(z, S), () => v(z)), F(n, se), kt(ge);
}
jn(["click"]);
Ht(dc, { hostElement: {}, ui: {}, chat: {}, config: {} }, [], [], !0);
const wa = {
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
}, Vs = {
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
function hf(n = wa) {
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
function pf(n = wa) {
  return hf(n);
}
const uc = {
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
}, mo = uc, vo = {
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
}, mf = {
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
}, vf = {
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
}, bf = {
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
}, wf = {
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
function yf(n) {
  return {
    "bot-brewers": Vs,
    modern: uc,
    professional: mo,
    corporate: mo,
    // Alias for backward compatibility
    friendly: vo,
    playful: vo,
    // Alias
    minimal: mf,
    dark: vf,
    elegant: bf,
    bold: wf,
    generic: wa,
    default: Vs
  }[n.toLowerCase()] || null;
}
function xf(n) {
  const e = yf(n) || Vs;
  return pf(e);
}
function ya(n, e) {
  const t = n.getAttribute("theme") || n.getAttribute("data-theme") || e;
  return xf(t);
}
function gc(n, e, t) {
  const i = n.querySelector('style[data-role="theme"]');
  i && (i.textContent = ya(e, t));
}
function fc(n, e, t) {
  const i = n.querySelector(`.${e}`);
  if (i) {
    const r = ur(t, "#6b46c1");
    i.style.setProperty("--widget-primary", r), i.style.setProperty("--widget-primary-hover", pe(r, -20)), i.style.setProperty("--widget-primary-light", pe(r, 20)), i.style.setProperty("--widget-primary-dark", pe(r, -30));
  }
}
class bo extends HTMLElement {
  constructor() {
    super(), this._app = null, this._currentTheme = "bot-brewers", this._onOpenChangeCallback = null, this._pendingOpenState = null, this._shadowRoot = this.attachShadow({ mode: "open" }), this._uiStore = Tl(), this._chatStore = El(), this._configStore = Rl();
  }
  // Define which attributes we should observe for changes
  static get observedAttributes() {
    return ["theme", "data-theme", "accent-color", "position", "title", "client-id", "initial-message", "quick-questions", "open", "voice-input"];
  }
  async connectedCallback() {
    var r, s;
    const e = this.getAttribute("client-id"), t = window, i = ((r = t.AIChat) == null ? void 0 : r.clientId) || ((s = t.ChatWidget) == null ? void 0 : s.clientId);
    if (!e && !i) {
      Q.error("ChatWidget", 'Configuration missing. Please set client-id attribute or window.AIChat = { clientId: "your_client_id" }');
      return;
    }
    this.mountApp();
  }
  disconnectedCallback() {
    this._app && (dr(this._app), this._app = null);
  }
  attributeChangedCallback(e, t, i) {
    if (t !== i) {
      if ((e === "theme" || e === "data-theme") && i && (this._currentTheme = i, this._configStore.updateConfig({ theme: i }, "user"), gc(this._shadowRoot, this, this._currentTheme)), e === "accent-color" && i && fc(this._shadowRoot, "widget-root", i), e === "client-id" && i && this._app && (Q.log("ChatWidget", `Client ID changed from ${t} to ${i}, remounting widget`), dr(this._app), this._app = null, this.mountApp()), e === "title" && i && this._configStore.setUserTitle(i), e === "initial-message" && this._configStore.updateConfig({ initialMessage: i || void 0 }, "user"), e === "quick-questions")
        if (i)
          try {
            const r = JSON.parse(i);
            Array.isArray(r) ? this._configStore.setQuickQuestions(la.validate(r, "ChatWidget")) : Q.warn("ChatWidget", "quick-questions must be an array, using defaults");
          } catch {
            Q.warn("ChatWidget", "Invalid quick-questions JSON, using defaults");
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
    i.setAttribute("data-role", "theme"), i.textContent = ya(this, this._currentTheme), this._shadowRoot.innerHTML = "", this._shadowRoot.appendChild(i), this._shadowRoot.appendChild(t), this._app = ss(cc, {
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
class kf extends HTMLElement {
  constructor() {
    super(), this._app = null, this._currentTheme = "bot-brewers", this._shadowRoot = this.attachShadow({ mode: "open" }), this._uiStore = Tl(), this._chatStore = El(), this._configStore = Rl();
  }
  // Observed attributes (no 'open' or 'position' — always visible, no floating button)
  static get observedAttributes() {
    return ["theme", "data-theme", "accent-color", "title", "client-id", "initial-message", "quick-questions"];
  }
  async connectedCallback() {
    var r, s;
    const e = this.getAttribute("client-id"), t = window, i = ((r = t.AIChat) == null ? void 0 : r.clientId) || ((s = t.ChatWidget) == null ? void 0 : s.clientId);
    if (!e && !i) {
      Q.error("ChatPage", 'Configuration missing. Please set client-id attribute or window.AIChat = { clientId: "your_client_id" }');
      return;
    }
    this.mountApp();
  }
  disconnectedCallback() {
    this._app && (dr(this._app), this._app = null);
  }
  attributeChangedCallback(e, t, i) {
    if (t !== i && ((e === "theme" || e === "data-theme") && i && (this._currentTheme = i, this._configStore.updateConfig({ theme: i }, "user"), gc(this._shadowRoot, this, this._currentTheme)), e === "accent-color" && i && fc(this._shadowRoot, "chat-page-root", i), e === "client-id" && i && this._app && (Q.log("ChatPage", `Client ID changed from ${t} to ${i}, remounting`), dr(this._app), this._app = null, this.mountApp()), e === "title" && i && this._configStore.setUserTitle(i), e === "initial-message" && this._configStore.updateConfig({ initialMessage: i || void 0 }, "user"), e === "quick-questions"))
      if (i)
        try {
          const r = JSON.parse(i);
          Array.isArray(r) ? this._configStore.setQuickQuestions(la.validate(r, "ChatPage")) : Q.warn("ChatPage", "quick-questions must be an array, using defaults");
        } catch {
          Q.warn("ChatPage", "Invalid quick-questions JSON, using defaults");
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
    i.setAttribute("data-role", "theme"), i.textContent = ya(this, this._currentTheme);
    const r = document.createElement("style");
    r.textContent = ":host { display: block; width: 100%; height: 100%; box-sizing: border-box; }", this._shadowRoot.innerHTML = "", this._shadowRoot.appendChild(i), this._shadowRoot.appendChild(r), this._shadowRoot.appendChild(t), this._app = ss(dc, {
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
customElements.get("assistant-widget") ? customElements.get("chat-widget") || customElements.define("chat-widget", bo) : customElements.define("assistant-widget", bo);
customElements.get("assistant-chat-page") || customElements.define("assistant-chat-page", kf);
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", wo) : wo();
function wo() {
  if (document.querySelector("assistant-widget, chat-widget"))
    return;
  const n = window, e = n.AIChat || n.ChatWidget;
  if (e != null && e.clientId) {
    if (e.autoInit === !1) {
      Q.log("ChatWidget", "Auto-initialization disabled");
      return;
    }
    const t = document.createElement("assistant-widget");
    document.body.appendChild(t), Q.log("ChatWidget", "Auto-initialized with client ID", e.clientId);
  }
}
export {
  kf as AssistantChatPage,
  bo as ChatWidgetElement
};
