var Ea = Object.defineProperty;
var wr = (t) => {
  throw TypeError(t);
};
var Ta = (t, e, i) => e in t ? Ea(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i;
var W = (t, e, i) => Ta(t, typeof e != "symbol" ? e + "" : e, i), Cs = (t, e, i) => e.has(t) || wr("Cannot " + i);
var c = (t, e, i) => (Cs(t, e, "read from private field"), i ? i.call(t) : e.get(t)), x = (t, e, i) => e.has(t) ? wr("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), _ = (t, e, i, s) => (Cs(t, e, "write to private field"), s ? s.call(t, i) : e.set(t, i), i), N = (t, e, i) => (Cs(t, e, "access private method"), i);
var qr = Array.isArray, Ia = Array.prototype.indexOf, ps = Array.from, ns = Object.keys, as = Object.defineProperty, At = Object.getOwnPropertyDescriptor, Vr = Object.getOwnPropertyDescriptors, Ca = Object.prototype, Aa = Array.prototype, Js = Object.getPrototypeOf, yr = Object.isExtensible;
function Ma(t) {
  return typeof t == "function";
}
const Mi = () => {
};
function La(t) {
  return t();
}
function Os(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function Br() {
  var t, e, i = new Promise((s, r) => {
    t = s, e = r;
  });
  return { promise: i, resolve: t, reject: e };
}
const Z = 2, Qs = 4, vs = 8, Oa = 1 << 24, Ge = 16, it = 32, pt = 64, ms = 128, $e = 512, se = 1024, me = 2048, Ve = 4096, ve = 8192, et = 16384, Yi = 32768, Pt = 65536, _r = 1 << 17, Yr = 1 << 18, zt = 1 << 19, Gr = 1 << 20, ot = 1 << 25, Rt = 32768, $s = 1 << 21, Zs = 1 << 22, lt = 1 << 23, Mt = Symbol("$state"), Kr = Symbol("legacy props"), $a = Symbol(""), qt = new class extends Error {
  constructor() {
    super(...arguments);
    W(this, "name", "StaleReactionError");
    W(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}(), er = 3, ki = 8;
function Xr(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Pa() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Ra(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Da() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Na(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function za() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ua() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Fa(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Wa() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ha() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function ja() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function qa() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Va = 1, Ba = 2, Ya = 16, Ga = 1, Ka = 2, Xa = 4, Ja = 8, Qa = 16, Za = 4, eo = 1, to = 2, Jr = "[", bs = "[!", tr = "]", wi = {}, te = Symbol(), io = "http://www.w3.org/1999/xhtml";
function ws(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function so() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let L = !1;
function Ze(t) {
  L = t;
}
let I;
function be(t) {
  if (t === null)
    throw ws(), wi;
  return I = t;
}
function ys() {
  return be(/* @__PURE__ */ Ke(I));
}
function V(t) {
  if (L) {
    if (/* @__PURE__ */ Ke(I) !== null)
      throw ws(), wi;
    I = t;
  }
}
function ir(t = 1) {
  if (L) {
    for (var e = t, i = I; e--; )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ Ke(i);
    I = i;
  }
}
function os(t = !0) {
  for (var e = 0, i = I; ; ) {
    if (i.nodeType === ki) {
      var s = (
        /** @type {Comment} */
        i.data
      );
      if (s === tr) {
        if (e === 0) return i;
        e -= 1;
      } else (s === Jr || s === bs) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ke(i)
    );
    t && i.remove(), i = r;
  }
}
function Qr(t) {
  if (!t || t.nodeType !== ki)
    throw ws(), wi;
  return (
    /** @type {Comment} */
    t.data
  );
}
function Zr(t) {
  return t === this.v;
}
function ro(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function en(t) {
  return !ro(t, this.v);
}
let Ei = !1;
function no() {
  Ei = !0;
}
let U = null;
function yi(t) {
  U = t;
}
function vt(t, e = !1, i) {
  U = {
    p: U,
    i: !1,
    c: null,
    e: null,
    s: t,
    x: null,
    l: Ei && !e ? { s: null, u: null, $: [] } : null
  };
}
function mt(t) {
  var e = (
    /** @type {ComponentContext} */
    U
  ), i = e.e;
  if (i !== null) {
    e.e = null;
    for (var s of i)
      xn(s);
  }
  return t !== void 0 && (e.x = t), e.i = !0, U = e.p, t ?? /** @type {T} */
  {};
}
function Gi() {
  return !Ei || U !== null && U.l === null;
}
let xt = [];
function tn() {
  var t = xt;
  xt = [], Os(t);
}
function Ti(t) {
  if (xt.length === 0 && !Ri) {
    var e = xt;
    queueMicrotask(() => {
      e === xt && tn();
    });
  }
  xt.push(t);
}
function ao() {
  for (; xt.length > 0; )
    tn();
}
function sn(t) {
  var e = O;
  if (e === null)
    return A.f |= lt, t;
  if (e.f & Yi)
    _i(t, e);
  else {
    if (!(e.f & ms))
      throw t;
    e.b.error(t);
  }
}
function _i(t, e) {
  for (; e !== null; ) {
    if (e.f & ms)
      try {
        e.b.error(t);
        return;
      } catch (i) {
        t = i;
      }
    e = e.parent;
  }
  throw t;
}
const Ji = /* @__PURE__ */ new Set();
let E = null, es = null, j = null, ke = [], _s = null, Ps = !1, Ri = !1;
var Gt, Kt, St, kt, ji, Xt, Jt, Q, Rs, Li, Ds, rn, nn;
const fs = class fs {
  constructor() {
    x(this, Q);
    W(this, "committed", !1);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    W(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    W(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    x(this, Gt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    x(this, Kt, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    x(this, St, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    x(this, kt, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    x(this, ji, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    x(this, Xt, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    x(this, Jt, /* @__PURE__ */ new Set());
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    W(this, "skipped_effects", /* @__PURE__ */ new Set());
    W(this, "is_fork", !1);
  }
  is_deferred() {
    return this.is_fork || c(this, kt) > 0;
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var s;
    ke = [], es = null, this.apply();
    var i = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const r of e)
      N(this, Q, Rs).call(this, r, i);
    this.is_fork || N(this, Q, rn).call(this), this.is_deferred() ? (N(this, Q, Li).call(this, i.effects), N(this, Q, Li).call(this, i.render_effects)) : (es = this, E = null, xr(i.render_effects), xr(i.effects), es = null, (s = c(this, ji)) == null || s.resolve()), j = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, i) {
    this.previous.has(e) || this.previous.set(e, i), e.f & lt || (this.current.set(e, e.v), j == null || j.set(e, e.v));
  }
  activate() {
    E = this, this.apply();
  }
  deactivate() {
    E === this && (E = null, j = null);
  }
  flush() {
    if (this.activate(), ke.length > 0) {
      if (an(), E !== null && E !== this)
        return;
    } else c(this, St) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const e of c(this, Kt)) e(this);
    c(this, Kt).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(e) {
    _(this, St, c(this, St) + 1), e && _(this, kt, c(this, kt) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(e) {
    _(this, St, c(this, St) - 1), e && _(this, kt, c(this, kt) - 1), this.revive();
  }
  revive() {
    for (const e of c(this, Xt))
      c(this, Jt).delete(e), re(e, me), Dt(e);
    for (const e of c(this, Jt))
      re(e, Ve), Dt(e);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(e) {
    c(this, Gt).add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(e) {
    c(this, Kt).add(e);
  }
  settled() {
    return (c(this, ji) ?? _(this, ji, Br())).promise;
  }
  static ensure() {
    if (E === null) {
      const e = E = new fs();
      Ji.add(E), Ri || fs.enqueue(() => {
        E === e && e.flush();
      });
    }
    return E;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    Ti(e);
  }
  apply() {
  }
};
Gt = new WeakMap(), Kt = new WeakMap(), St = new WeakMap(), kt = new WeakMap(), ji = new WeakMap(), Xt = new WeakMap(), Jt = new WeakMap(), Q = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {EffectTarget} target
 */
Rs = function(e, i) {
  var u;
  e.f ^= se;
  for (var s = e.first; s !== null; ) {
    var r = s.f, n = (r & (it | pt)) !== 0, a = n && (r & se) !== 0, o = a || (r & ve) !== 0 || this.skipped_effects.has(s);
    if (s.f & ms && ((u = s.b) != null && u.is_pending()) && (i = {
      parent: i,
      effect: s,
      effects: [],
      render_effects: []
    }), !o && s.fn !== null) {
      n ? s.f ^= se : r & Qs ? i.effects.push(s) : Xi(s) && (s.f & Ge && c(this, Xt).add(s), Wi(s));
      var l = s.first;
      if (l !== null) {
        s = l;
        continue;
      }
    }
    var d = s.parent;
    for (s = s.next; s === null && d !== null; )
      d === i.effect && (N(this, Q, Li).call(this, i.effects), N(this, Q, Li).call(this, i.render_effects), i = /** @type {EffectTarget} */
      i.parent), s = d.next, d = d.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
Li = function(e) {
  for (const i of e)
    i.f & me ? c(this, Xt).add(i) : i.f & Ve && c(this, Jt).add(i), N(this, Q, Ds).call(this, i.deps), re(i, se);
}, /**
 * @param {Value[] | null} deps
 */
Ds = function(e) {
  if (e !== null)
    for (const i of e)
      !(i.f & Z) || !(i.f & Rt) || (i.f ^= Rt, N(this, Q, Ds).call(
        this,
        /** @type {Derived} */
        i.deps
      ));
}, rn = function() {
  if (c(this, kt) === 0) {
    for (const e of c(this, Gt)) e();
    c(this, Gt).clear();
  }
  c(this, St) === 0 && N(this, Q, nn).call(this);
}, nn = function() {
  var n;
  if (Ji.size > 1) {
    this.previous.clear();
    var e = j, i = !0, s = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const a of Ji) {
      if (a === this) {
        i = !1;
        continue;
      }
      const o = [];
      for (const [d, u] of this.current) {
        if (a.current.has(d))
          if (i && u !== a.current.get(d))
            a.current.set(d, u);
          else
            continue;
        o.push(d);
      }
      if (o.length === 0)
        continue;
      const l = [...a.current.keys()].filter((d) => !this.current.has(d));
      if (l.length > 0) {
        var r = ke;
        ke = [];
        const d = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
        for (const h of o)
          on(h, l, d, u);
        if (ke.length > 0) {
          E = a, a.apply();
          for (const h of ke)
            N(n = a, Q, Rs).call(n, h, s);
          a.deactivate();
        }
        ke = r;
      }
    }
    E = null, j = e;
  }
  this.committed = !0, Ji.delete(this);
};
let We = fs;
function qe(t) {
  var e = Ri;
  Ri = !0;
  try {
    for (var i; ; ) {
      if (ao(), ke.length === 0 && (E == null || E.flush(), ke.length === 0))
        return _s = null, /** @type {T} */
        i;
      an();
    }
  } finally {
    Ri = e;
  }
}
function an() {
  var t = Ot;
  Ps = !0;
  var e = null;
  try {
    var i = 0;
    for (ds(!0); ke.length > 0; ) {
      var s = We.ensure();
      if (i++ > 1e3) {
        var r, n;
        oo();
      }
      s.process(ke), dt.clear();
    }
  } finally {
    Ps = !1, ds(t), _s = null;
  }
}
function oo() {
  try {
    za();
  } catch (t) {
    _i(t, _s);
  }
}
let Ae = null;
function xr(t) {
  var e = t.length;
  if (e !== 0) {
    for (var i = 0; i < e; ) {
      var s = t[i++];
      if (!(s.f & (et | ve)) && Xi(s) && (Ae = /* @__PURE__ */ new Set(), Wi(s), s.deps === null && s.first === null && s.nodes === null && (s.teardown === null && s.ac === null ? En(s) : s.fn = null), (Ae == null ? void 0 : Ae.size) > 0)) {
        dt.clear();
        for (const r of Ae) {
          if (r.f & (et | ve)) continue;
          const n = [r];
          let a = r.parent;
          for (; a !== null; )
            Ae.has(a) && (Ae.delete(a), n.push(a)), a = a.parent;
          for (let o = n.length - 1; o >= 0; o--) {
            const l = n[o];
            l.f & (et | ve) || Wi(l);
          }
        }
        Ae.clear();
      }
    }
    Ae = null;
  }
}
function on(t, e, i, s) {
  if (!i.has(t) && (i.add(t), t.reactions !== null))
    for (const r of t.reactions) {
      const n = r.f;
      n & Z ? on(
        /** @type {Derived} */
        r,
        e,
        i,
        s
      ) : n & (Zs | Ge) && !(n & me) && ln(r, e, s) && (re(r, me), Dt(
        /** @type {Effect} */
        r
      ));
    }
}
function ln(t, e, i) {
  const s = i.get(t);
  if (s !== void 0) return s;
  if (t.deps !== null)
    for (const r of t.deps) {
      if (e.includes(r))
        return !0;
      if (r.f & Z && ln(
        /** @type {Derived} */
        r,
        e,
        i
      ))
        return i.set(
          /** @type {Derived} */
          r,
          !0
        ), !0;
    }
  return i.set(t, !1), !1;
}
function Dt(t) {
  for (var e = _s = t; e.parent !== null; ) {
    e = e.parent;
    var i = e.f;
    if (Ps && e === O && i & Ge && !(i & Yr))
      return;
    if (i & (pt | it)) {
      if (!(i & se)) return;
      e.f ^= se;
    }
  }
  ke.push(e);
}
function lo(t) {
  let e = 0, i = Nt(0), s;
  return () => {
    Ui() && (b(i), xs(() => (e === 0 && (s = bt(() => t(() => Di(i)))), e += 1, () => {
      Ti(() => {
        e -= 1, e === 0 && (s == null || s(), s = void 0, Di(i));
      });
    })));
  };
}
var co = Pt | zt | ms;
function uo(t, e, i) {
  new fo(t, e, i);
}
var _e, he, qi, Ne, Et, ze, xe, ce, Ue, Xe, rt, Tt, nt, It, at, gs, q, dn, cn, Ns, ts, is, zs;
class fo {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, i, s) {
    x(this, q);
    /** @type {Boundary | null} */
    W(this, "parent");
    x(this, _e, !1);
    /** @type {TemplateNode} */
    x(this, he);
    /** @type {TemplateNode | null} */
    x(this, qi, L ? I : null);
    /** @type {BoundaryProps} */
    x(this, Ne);
    /** @type {((anchor: Node) => void)} */
    x(this, Et);
    /** @type {Effect} */
    x(this, ze);
    /** @type {Effect | null} */
    x(this, xe, null);
    /** @type {Effect | null} */
    x(this, ce, null);
    /** @type {Effect | null} */
    x(this, Ue, null);
    /** @type {DocumentFragment | null} */
    x(this, Xe, null);
    /** @type {TemplateNode | null} */
    x(this, rt, null);
    x(this, Tt, 0);
    x(this, nt, 0);
    x(this, It, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    x(this, at, null);
    x(this, gs, lo(() => (_(this, at, Nt(c(this, Tt))), () => {
      _(this, at, null);
    })));
    _(this, he, e), _(this, Ne, i), _(this, Et, s), this.parent = /** @type {Effect} */
    O.b, _(this, _e, !!c(this, Ne).pending), _(this, ze, or(() => {
      if (O.b = this, L) {
        const n = c(this, qi);
        ys(), /** @type {Comment} */
        n.nodeType === ki && /** @type {Comment} */
        n.data === bs ? N(this, q, cn).call(this) : N(this, q, dn).call(this);
      } else {
        var r = N(this, q, Ns).call(this);
        try {
          _(this, xe, Ee(() => s(r)));
        } catch (n) {
          this.error(n);
        }
        c(this, nt) > 0 ? N(this, q, is).call(this) : _(this, _e, !1);
      }
      return () => {
        var n;
        (n = c(this, rt)) == null || n.remove();
      };
    }, co)), L && _(this, he, I);
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return c(this, _e) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!c(this, Ne).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    N(this, q, zs).call(this, e), _(this, Tt, c(this, Tt) + e), c(this, at) && xi(c(this, at), c(this, Tt));
  }
  get_effect_pending() {
    return c(this, gs).call(this), b(
      /** @type {Source<number>} */
      c(this, at)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var i = c(this, Ne).onerror;
    let s = c(this, Ne).failed;
    if (c(this, It) || !i && !s)
      throw e;
    c(this, xe) && (oe(c(this, xe)), _(this, xe, null)), c(this, ce) && (oe(c(this, ce)), _(this, ce, null)), c(this, Ue) && (oe(c(this, Ue)), _(this, Ue, null)), L && (be(
      /** @type {TemplateNode} */
      c(this, qi)
    ), ir(), be(os()));
    var r = !1, n = !1;
    const a = () => {
      if (r) {
        so();
        return;
      }
      r = !0, n && qa(), We.ensure(), _(this, Tt, 0), c(this, Ue) !== null && Lt(c(this, Ue), () => {
        _(this, Ue, null);
      }), _(this, _e, this.has_pending_snippet()), _(this, xe, N(this, q, ts).call(this, () => (_(this, It, !1), Ee(() => c(this, Et).call(this, c(this, he)))))), c(this, nt) > 0 ? N(this, q, is).call(this) : _(this, _e, !1);
    };
    var o = A;
    try {
      ue(null), n = !0, i == null || i(e, a), n = !1;
    } catch (l) {
      _i(l, c(this, ze) && c(this, ze).parent);
    } finally {
      ue(o);
    }
    s && Ti(() => {
      _(this, Ue, N(this, q, ts).call(this, () => {
        We.ensure(), _(this, It, !0);
        try {
          return Ee(() => {
            s(
              c(this, he),
              () => e,
              () => a
            );
          });
        } catch (l) {
          return _i(
            l,
            /** @type {Effect} */
            c(this, ze).parent
          ), null;
        } finally {
          _(this, It, !1);
        }
      }));
    });
  }
}
_e = new WeakMap(), he = new WeakMap(), qi = new WeakMap(), Ne = new WeakMap(), Et = new WeakMap(), ze = new WeakMap(), xe = new WeakMap(), ce = new WeakMap(), Ue = new WeakMap(), Xe = new WeakMap(), rt = new WeakMap(), Tt = new WeakMap(), nt = new WeakMap(), It = new WeakMap(), at = new WeakMap(), gs = new WeakMap(), q = new WeakSet(), dn = function() {
  try {
    _(this, xe, Ee(() => c(this, Et).call(this, c(this, he))));
  } catch (e) {
    this.error(e);
  }
  _(this, _e, !1);
}, cn = function() {
  const e = c(this, Ne).pending;
  e && (_(this, ce, Ee(() => e(c(this, he)))), We.enqueue(() => {
    var i = N(this, q, Ns).call(this);
    _(this, xe, N(this, q, ts).call(this, () => (We.ensure(), Ee(() => c(this, Et).call(this, i))))), c(this, nt) > 0 ? N(this, q, is).call(this) : (Lt(
      /** @type {Effect} */
      c(this, ce),
      () => {
        _(this, ce, null);
      }
    ), _(this, _e, !1));
  }));
}, Ns = function() {
  var e = c(this, he);
  return c(this, _e) && (_(this, rt, Pe()), c(this, he).before(c(this, rt)), e = c(this, rt)), e;
}, /**
 * @param {() => Effect | null} fn
 */
ts = function(e) {
  var i = O, s = A, r = U;
  Be(c(this, ze)), ue(c(this, ze)), yi(c(this, ze).ctx);
  try {
    return e();
  } catch (n) {
    return sn(n), null;
  } finally {
    Be(i), ue(s), yi(r);
  }
}, is = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    c(this, Ne).pending
  );
  c(this, xe) !== null && (_(this, Xe, document.createDocumentFragment()), c(this, Xe).append(
    /** @type {TemplateNode} */
    c(this, rt)
  ), Cn(c(this, xe), c(this, Xe))), c(this, ce) === null && _(this, ce, Ee(() => e(c(this, he))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
zs = function(e) {
  var i;
  if (!this.has_pending_snippet()) {
    this.parent && N(i = this.parent, q, zs).call(i, e);
    return;
  }
  _(this, nt, c(this, nt) + e), c(this, nt) === 0 && (_(this, _e, !1), c(this, ce) && Lt(c(this, ce), () => {
    _(this, ce, null);
  }), c(this, Xe) && (c(this, he).before(c(this, Xe)), _(this, Xe, null)));
};
function go(t, e, i, s) {
  const r = Gi() ? Ki : sr;
  if (i.length === 0 && t.length === 0) {
    s(e.map(r));
    return;
  }
  var n = E, a = (
    /** @type {Effect} */
    O
  ), o = ho();
  function l() {
    Promise.all(i.map((d) => /* @__PURE__ */ po(d))).then((d) => {
      o();
      try {
        s([...e.map(r), ...d]);
      } catch (u) {
        a.f & et || _i(u, a);
      }
      n == null || n.deactivate(), ls();
    }).catch((d) => {
      _i(d, a);
    });
  }
  t.length > 0 ? Promise.all(t).then(() => {
    o();
    try {
      return l();
    } finally {
      n == null || n.deactivate(), ls();
    }
  }) : l();
}
function ho() {
  var t = O, e = A, i = U, s = E;
  return function(n = !0) {
    Be(t), ue(e), yi(i), n && (s == null || s.activate());
  };
}
function ls() {
  Be(null), ue(null), yi(null);
}
// @__NO_SIDE_EFFECTS__
function Ki(t) {
  var e = Z | me, i = A !== null && A.f & Z ? (
    /** @type {Derived} */
    A
  ) : null;
  return O !== null && (O.f |= zt), {
    ctx: U,
    deps: null,
    effects: null,
    equals: Zr,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      te
    ),
    wv: 0,
    parent: i ?? O,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function po(t, e) {
  let i = (
    /** @type {Effect | null} */
    O
  );
  i === null && Pa();
  var s = (
    /** @type {Boundary} */
    i.b
  ), r = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), n = Nt(
    /** @type {V} */
    te
  ), a = !A, o = /* @__PURE__ */ new Map();
  return Eo(() => {
    var g;
    var l = Br();
    r = l.promise;
    try {
      Promise.resolve(t()).then(l.resolve, l.reject).then(() => {
        d === E && d.committed && d.deactivate(), ls();
      });
    } catch (p) {
      l.reject(p), ls();
    }
    var d = (
      /** @type {Batch} */
      E
    );
    if (a) {
      var u = !s.is_pending();
      s.update_pending_count(1), d.increment(u), (g = o.get(d)) == null || g.reject(qt), o.delete(d), o.set(d, l);
    }
    const h = (p, f = void 0) => {
      if (d.activate(), f)
        f !== qt && (n.f |= lt, xi(n, f));
      else {
        n.f & lt && (n.f ^= lt), xi(n, p);
        for (const [w, v] of o) {
          if (o.delete(w), w === d) break;
          v.reject(qt);
        }
      }
      a && (s.update_pending_count(-1), d.decrement(u));
    };
    l.promise.then(h, (p) => h(null, p || "unknown"));
  }), _n(() => {
    for (const l of o.values())
      l.reject(qt);
  }), new Promise((l) => {
    function d(u) {
      function h() {
        u === r ? l(n) : d(r);
      }
      u.then(h, h);
    }
    d(r);
  });
}
// @__NO_SIDE_EFFECTS__
function Ie(t) {
  const e = /* @__PURE__ */ Ki(t);
  return An(e), e;
}
// @__NO_SIDE_EFFECTS__
function sr(t) {
  const e = /* @__PURE__ */ Ki(t);
  return e.equals = en, e;
}
function un(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var i = 0; i < e.length; i += 1)
      oe(
        /** @type {Effect} */
        e[i]
      );
  }
}
function vo(t) {
  for (var e = t.parent; e !== null; ) {
    if (!(e.f & Z))
      return e.f & et ? null : (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function rr(t) {
  var e, i = O;
  Be(vo(t));
  try {
    t.f &= ~Rt, un(t), e = $n(t);
  } finally {
    Be(i);
  }
  return e;
}
function fn(t) {
  var e = rr(t);
  if (t.equals(e) || (E != null && E.is_fork || (t.v = e), t.wv = Ln()), !Ut)
    if (j !== null)
      (Ui() || E != null && E.is_fork) && j.set(t, e);
    else {
      var i = t.f & $e ? se : Ve;
      re(t, i);
    }
}
let Us = /* @__PURE__ */ new Set();
const dt = /* @__PURE__ */ new Map();
let gn = !1;
function Nt(t, e) {
  var i = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Zr,
    rv: 0,
    wv: 0
  };
  return i;
}
// @__NO_SIDE_EFFECTS__
function C(t, e) {
  const i = Nt(t);
  return An(i), i;
}
// @__NO_SIDE_EFFECTS__
function hn(t, e = !1, i = !0) {
  var r;
  const s = Nt(t);
  return e || (s.equals = en), Ei && i && U !== null && U.l !== null && ((r = U.l).s ?? (r.s = [])).push(s), s;
}
function k(t, e, i = !1) {
  A !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!He || A.f & _r) && Gi() && A.f & (Z | Ge | Zs | _r) && !(le != null && le.includes(t)) && ja();
  let s = i ? X(e) : e;
  return xi(t, s);
}
function xi(t, e) {
  if (!t.equals(e)) {
    var i = t.v;
    Ut ? dt.set(t, e) : dt.set(t, i), t.v = e;
    var s = We.ensure();
    s.capture(t, i), t.f & Z && (t.f & me && rr(
      /** @type {Derived} */
      t
    ), re(t, t.f & $e ? se : Ve)), t.wv = Ln(), pn(t, me), Gi() && O !== null && O.f & se && !(O.f & (it | pt)) && (ye === null ? Co([t]) : ye.push(t)), !s.is_fork && Us.size > 0 && !gn && mo();
  }
  return e;
}
function mo() {
  gn = !1;
  var t = Ot;
  ds(!0);
  const e = Array.from(Us);
  try {
    for (const i of e)
      i.f & se && re(i, Ve), Xi(i) && Wi(i);
  } finally {
    ds(t);
  }
  Us.clear();
}
function Di(t) {
  k(t, t.v + 1);
}
function pn(t, e) {
  var i = t.reactions;
  if (i !== null)
    for (var s = Gi(), r = i.length, n = 0; n < r; n++) {
      var a = i[n], o = a.f;
      if (!(!s && a === O)) {
        var l = (o & me) === 0;
        if (l && re(a, e), o & Z) {
          var d = (
            /** @type {Derived} */
            a
          );
          j == null || j.delete(d), o & Rt || (o & $e && (a.f |= Rt), pn(d, Ve));
        } else l && (o & Ge && Ae !== null && Ae.add(
          /** @type {Effect} */
          a
        ), Dt(
          /** @type {Effect} */
          a
        ));
      }
    }
}
function X(t) {
  if (typeof t != "object" || t === null || Mt in t)
    return t;
  const e = Js(t);
  if (e !== Ca && e !== Aa)
    return t;
  var i = /* @__PURE__ */ new Map(), s = qr(t), r = /* @__PURE__ */ C(0), n = $t, a = (o) => {
    if ($t === n)
      return o();
    var l = A, d = $t;
    ue(null), Tr(n);
    var u = o();
    return ue(l), Tr(d), u;
  };
  return s && i.set("length", /* @__PURE__ */ C(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(o, l, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && Wa();
        var u = i.get(l);
        return u === void 0 ? u = a(() => {
          var h = /* @__PURE__ */ C(d.value);
          return i.set(l, h), h;
        }) : k(u, d.value, !0), !0;
      },
      deleteProperty(o, l) {
        var d = i.get(l);
        if (d === void 0) {
          if (l in o) {
            const u = a(() => /* @__PURE__ */ C(te));
            i.set(l, u), Di(r);
          }
        } else
          k(d, te), Di(r);
        return !0;
      },
      get(o, l, d) {
        var p;
        if (l === Mt)
          return t;
        var u = i.get(l), h = l in o;
        if (u === void 0 && (!h || (p = At(o, l)) != null && p.writable) && (u = a(() => {
          var f = X(h ? o[l] : te), w = /* @__PURE__ */ C(f);
          return w;
        }), i.set(l, u)), u !== void 0) {
          var g = b(u);
          return g === te ? void 0 : g;
        }
        return Reflect.get(o, l, d);
      },
      getOwnPropertyDescriptor(o, l) {
        var d = Reflect.getOwnPropertyDescriptor(o, l);
        if (d && "value" in d) {
          var u = i.get(l);
          u && (d.value = b(u));
        } else if (d === void 0) {
          var h = i.get(l), g = h == null ? void 0 : h.v;
          if (h !== void 0 && g !== te)
            return {
              enumerable: !0,
              configurable: !0,
              value: g,
              writable: !0
            };
        }
        return d;
      },
      has(o, l) {
        var g;
        if (l === Mt)
          return !0;
        var d = i.get(l), u = d !== void 0 && d.v !== te || Reflect.has(o, l);
        if (d !== void 0 || O !== null && (!u || (g = At(o, l)) != null && g.writable)) {
          d === void 0 && (d = a(() => {
            var p = u ? X(o[l]) : te, f = /* @__PURE__ */ C(p);
            return f;
          }), i.set(l, d));
          var h = b(d);
          if (h === te)
            return !1;
        }
        return u;
      },
      set(o, l, d, u) {
        var F;
        var h = i.get(l), g = l in o;
        if (s && l === "length")
          for (var p = d; p < /** @type {Source<number>} */
          h.v; p += 1) {
            var f = i.get(p + "");
            f !== void 0 ? k(f, te) : p in o && (f = a(() => /* @__PURE__ */ C(te)), i.set(p + "", f));
          }
        if (h === void 0)
          (!g || (F = At(o, l)) != null && F.writable) && (h = a(() => /* @__PURE__ */ C(void 0)), k(h, X(d)), i.set(l, h));
        else {
          g = h.v !== te;
          var w = a(() => X(d));
          k(h, w);
        }
        var v = Reflect.getOwnPropertyDescriptor(o, l);
        if (v != null && v.set && v.set.call(u, d), !g) {
          if (s && typeof l == "string") {
            var y = (
              /** @type {Source<number>} */
              i.get("length")
            ), M = Number(l);
            Number.isInteger(M) && M >= y.v && k(y, M + 1);
          }
          Di(r);
        }
        return !0;
      },
      ownKeys(o) {
        b(r);
        var l = Reflect.ownKeys(o).filter((h) => {
          var g = i.get(h);
          return g === void 0 || g.v !== te;
        });
        for (var [d, u] of i)
          u.v !== te && !(d in o) && l.push(d);
        return l;
      },
      setPrototypeOf() {
        Ha();
      }
    }
  );
}
var Sr, vn, mn, bn;
function Fs() {
  if (Sr === void 0) {
    Sr = window, vn = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, i = Text.prototype;
    mn = At(e, "firstChild").get, bn = At(e, "nextSibling").get, yr(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), yr(i) && (i.__t = void 0);
  }
}
function Pe(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function tt(t) {
  return (
    /** @type {TemplateNode | null} */
    mn.call(t)
  );
}
// @__NO_SIDE_EFFECTS__
function Ke(t) {
  return (
    /** @type {TemplateNode | null} */
    bn.call(t)
  );
}
function B(t, e) {
  if (!L)
    return /* @__PURE__ */ tt(t);
  var i = /* @__PURE__ */ tt(I);
  if (i === null)
    i = I.appendChild(Pe());
  else if (e && i.nodeType !== er) {
    var s = Pe();
    return i == null || i.before(s), be(s), s;
  }
  return be(i), i;
}
function ss(t, e = !1) {
  if (!L) {
    var i = /* @__PURE__ */ tt(t);
    return i instanceof Comment && i.data === "" ? /* @__PURE__ */ Ke(i) : i;
  }
  if (e && (I == null ? void 0 : I.nodeType) !== er) {
    var s = Pe();
    return I == null || I.before(s), be(s), s;
  }
  return I;
}
function G(t, e = 1, i = !1) {
  let s = L ? I : t;
  for (var r; e--; )
    r = s, s = /** @type {TemplateNode} */
    /* @__PURE__ */ Ke(s);
  if (!L)
    return s;
  if (i && (s == null ? void 0 : s.nodeType) !== er) {
    var n = Pe();
    return s === null ? r == null || r.after(n) : s.before(n), be(n), n;
  }
  return be(s), s;
}
function nr(t) {
  t.textContent = "";
}
function wn() {
  return !1;
}
function bo(t) {
  L && /* @__PURE__ */ tt(t) !== null && nr(t);
}
let kr = !1;
function wo() {
  kr || (kr = !0, document.addEventListener(
    "reset",
    (t) => {
      Promise.resolve().then(() => {
        var e;
        if (!t.defaultPrevented)
          for (
            const i of
            /**@type {HTMLFormElement} */
            t.target.elements
          )
            (e = i.__on_r) == null || e.call(i);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function Ii(t) {
  var e = A, i = O;
  ue(null), Be(null);
  try {
    return t();
  } finally {
    ue(e), Be(i);
  }
}
function yo(t, e, i, s = i) {
  t.addEventListener(e, () => Ii(i));
  const r = t.__on_r;
  r ? t.__on_r = () => {
    r(), s(!0);
  } : t.__on_r = () => s(!0), wo();
}
function yn(t) {
  O === null && (A === null && Na(), Da()), Ut && Ra();
}
function _o(t, e) {
  var i = e.last;
  i === null ? e.last = e.first = t : (i.next = t, t.prev = i, e.last = t);
}
function Re(t, e, i) {
  var s = O;
  s !== null && s.f & ve && (t |= ve);
  var r = {
    ctx: U,
    deps: null,
    nodes: null,
    f: t | me | $e,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: s,
    b: s && s.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  if (i)
    try {
      Wi(r), r.f |= Yi;
    } catch (o) {
      throw oe(r), o;
    }
  else e !== null && Dt(r);
  var n = r;
  if (i && n.deps === null && n.teardown === null && n.nodes === null && n.first === n.last && // either `null`, or a singular child
  !(n.f & zt) && (n = n.first, t & Ge && t & Pt && n !== null && (n.f |= Pt)), n !== null && (n.parent = s, s !== null && _o(n, s), A !== null && A.f & Z && !(t & pt))) {
    var a = (
      /** @type {Derived} */
      A
    );
    (a.effects ?? (a.effects = [])).push(n);
  }
  return r;
}
function Ui() {
  return A !== null && !He;
}
function _n(t) {
  const e = Re(vs, null, !1);
  return re(e, se), e.teardown = t, e;
}
function ct(t) {
  yn();
  var e = (
    /** @type {Effect} */
    O.f
  ), i = !A && (e & it) !== 0 && (e & Yi) === 0;
  if (i) {
    var s = (
      /** @type {ComponentContext} */
      U
    );
    (s.e ?? (s.e = [])).push(t);
  } else
    return xn(t);
}
function xn(t) {
  return Re(Qs | Gr, t, !1);
}
function xo(t) {
  return yn(), Re(vs | Gr, t, !0);
}
function So(t) {
  We.ensure();
  const e = Re(pt | zt, t, !0);
  return () => {
    oe(e);
  };
}
function ko(t) {
  We.ensure();
  const e = Re(pt | zt, t, !0);
  return (i = {}) => new Promise((s) => {
    i.outro ? Lt(e, () => {
      oe(e), s(void 0);
    }) : (oe(e), s(void 0));
  });
}
function ar(t) {
  return Re(Qs, t, !1);
}
function Eo(t) {
  return Re(Zs | zt, t, !0);
}
function xs(t, e = 0) {
  return Re(vs | e, t, !0);
}
function gt(t, e = [], i = [], s = []) {
  go(s, e, i, (r) => {
    Re(vs, () => t(...r.map(b)), !0);
  });
}
function or(t, e = 0) {
  var i = Re(Ge | e, t, !0);
  return i;
}
function Ee(t) {
  return Re(it | zt, t, !0);
}
function Sn(t) {
  var e = t.teardown;
  if (e !== null) {
    const i = Ut, s = A;
    Er(!0), ue(null);
    try {
      e.call(null);
    } finally {
      Er(i), ue(s);
    }
  }
}
function kn(t, e = !1) {
  var i = t.first;
  for (t.first = t.last = null; i !== null; ) {
    const r = i.ac;
    r !== null && Ii(() => {
      r.abort(qt);
    });
    var s = i.next;
    i.f & pt ? i.parent = null : oe(i, e), i = s;
  }
}
function To(t) {
  for (var e = t.first; e !== null; ) {
    var i = e.next;
    e.f & it || oe(e), e = i;
  }
}
function oe(t, e = !0) {
  var i = !1;
  (e || t.f & Yr) && t.nodes !== null && t.nodes.end !== null && (Io(
    t.nodes.start,
    /** @type {TemplateNode} */
    t.nodes.end
  ), i = !0), kn(t, e && !i), cs(t, 0), re(t, et);
  var s = t.nodes && t.nodes.t;
  if (s !== null)
    for (const n of s)
      n.stop();
  Sn(t);
  var r = t.parent;
  r !== null && r.first !== null && En(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes = t.ac = null;
}
function Io(t, e) {
  for (; t !== null; ) {
    var i = t === e ? null : /* @__PURE__ */ Ke(t);
    t.remove(), t = i;
  }
}
function En(t) {
  var e = t.parent, i = t.prev, s = t.next;
  i !== null && (i.next = s), s !== null && (s.prev = i), e !== null && (e.first === t && (e.first = s), e.last === t && (e.last = i));
}
function Lt(t, e, i = !0) {
  var s = [];
  Tn(t, s, !0);
  var r = () => {
    i && oe(t), e && e();
  }, n = s.length;
  if (n > 0) {
    var a = () => --n || r();
    for (var o of s)
      o.out(a);
  } else
    r();
}
function Tn(t, e, i) {
  if (!(t.f & ve)) {
    t.f ^= ve;
    var s = t.nodes && t.nodes.t;
    if (s !== null)
      for (const o of s)
        (o.is_global || i) && e.push(o);
    for (var r = t.first; r !== null; ) {
      var n = r.next, a = (r.f & Pt) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (r.f & it) !== 0 && (t.f & Ge) !== 0;
      Tn(r, e, a ? i : !1), r = n;
    }
  }
}
function lr(t) {
  In(t, !0);
}
function In(t, e) {
  if (t.f & ve) {
    t.f ^= ve, t.f & se || (re(t, me), Dt(t));
    for (var i = t.first; i !== null; ) {
      var s = i.next, r = (i.f & Pt) !== 0 || (i.f & it) !== 0;
      In(i, r ? e : !1), i = s;
    }
    var n = t.nodes && t.nodes.t;
    if (n !== null)
      for (const a of n)
        (a.is_global || e) && a.in();
  }
}
function Cn(t, e) {
  if (t.nodes)
    for (var i = t.nodes.start, s = t.nodes.end; i !== null; ) {
      var r = i === s ? null : /* @__PURE__ */ Ke(i);
      e.append(i), i = r;
    }
}
let Ot = !1;
function ds(t) {
  Ot = t;
}
let Ut = !1;
function Er(t) {
  Ut = t;
}
let A = null, He = !1;
function ue(t) {
  A = t;
}
let O = null;
function Be(t) {
  O = t;
}
let le = null;
function An(t) {
  A !== null && (le === null ? le = [t] : le.push(t));
}
let ae = null, ge = 0, ye = null;
function Co(t) {
  ye = t;
}
let Mn = 1, Fi = 0, $t = Fi;
function Tr(t) {
  $t = t;
}
function Ln() {
  return ++Mn;
}
function Xi(t) {
  var e = t.f;
  if (e & me)
    return !0;
  if (e & Z && (t.f &= ~Rt), e & Ve) {
    var i = t.deps;
    if (i !== null)
      for (var s = i.length, r = 0; r < s; r++) {
        var n = i[r];
        if (Xi(
          /** @type {Derived} */
          n
        ) && fn(
          /** @type {Derived} */
          n
        ), n.wv > t.wv)
          return !0;
      }
    e & $e && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    j === null && re(t, se);
  }
  return !1;
}
function On(t, e, i = !0) {
  var s = t.reactions;
  if (s !== null && !(le != null && le.includes(t)))
    for (var r = 0; r < s.length; r++) {
      var n = s[r];
      n.f & Z ? On(
        /** @type {Derived} */
        n,
        e,
        !1
      ) : e === n && (i ? re(n, me) : n.f & se && re(n, Ve), Dt(
        /** @type {Effect} */
        n
      ));
    }
}
function $n(t) {
  var f;
  var e = ae, i = ge, s = ye, r = A, n = le, a = U, o = He, l = $t, d = t.f;
  ae = /** @type {null | Value[]} */
  null, ge = 0, ye = null, A = d & (it | pt) ? null : t, le = null, yi(t.ctx), He = !1, $t = ++Fi, t.ac !== null && (Ii(() => {
    t.ac.abort(qt);
  }), t.ac = null);
  try {
    t.f |= $s;
    var u = (
      /** @type {Function} */
      t.fn
    ), h = u(), g = t.deps;
    if (ae !== null) {
      var p;
      if (cs(t, ge), g !== null && ge > 0)
        for (g.length = ge + ae.length, p = 0; p < ae.length; p++)
          g[ge + p] = ae[p];
      else
        t.deps = g = ae;
      if (Ui() && t.f & $e)
        for (p = ge; p < g.length; p++)
          ((f = g[p]).reactions ?? (f.reactions = [])).push(t);
    } else g !== null && ge < g.length && (cs(t, ge), g.length = ge);
    if (Gi() && ye !== null && !He && g !== null && !(t.f & (Z | Ve | me)))
      for (p = 0; p < /** @type {Source[]} */
      ye.length; p++)
        On(
          ye[p],
          /** @type {Effect} */
          t
        );
    return r !== null && r !== t && (Fi++, ye !== null && (s === null ? s = ye : s.push(.../** @type {Source[]} */
    ye))), t.f & lt && (t.f ^= lt), h;
  } catch (w) {
    return sn(w);
  } finally {
    t.f ^= $s, ae = e, ge = i, ye = s, A = r, le = n, yi(a), He = o, $t = l;
  }
}
function Ao(t, e) {
  let i = e.reactions;
  if (i !== null) {
    var s = Ia.call(i, t);
    if (s !== -1) {
      var r = i.length - 1;
      r === 0 ? i = e.reactions = null : (i[s] = i[r], i.pop());
    }
  }
  i === null && e.f & Z && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ae === null || !ae.includes(e)) && (re(e, Ve), e.f & $e && (e.f ^= $e, e.f &= ~Rt), un(
    /** @type {Derived} **/
    e
  ), cs(
    /** @type {Derived} **/
    e,
    0
  ));
}
function cs(t, e) {
  var i = t.deps;
  if (i !== null)
    for (var s = e; s < i.length; s++)
      Ao(t, i[s]);
}
function Wi(t) {
  var e = t.f;
  if (!(e & et)) {
    re(t, se);
    var i = O, s = Ot;
    O = t, Ot = !0;
    try {
      e & (Ge | Oa) ? To(t) : kn(t), Sn(t);
      var r = $n(t);
      t.teardown = typeof r == "function" ? r : null, t.wv = Mn;
      var n;
    } finally {
      Ot = s, O = i;
    }
  }
}
async function Pn() {
  await Promise.resolve(), qe();
}
function b(t) {
  var e = t.f, i = (e & Z) !== 0;
  if (A !== null && !He) {
    var s = O !== null && (O.f & et) !== 0;
    if (!s && !(le != null && le.includes(t))) {
      var r = A.deps;
      if (A.f & $s)
        t.rv < Fi && (t.rv = Fi, ae === null && r !== null && r[ge] === t ? ge++ : ae === null ? ae = [t] : ae.includes(t) || ae.push(t));
      else {
        (A.deps ?? (A.deps = [])).push(t);
        var n = t.reactions;
        n === null ? t.reactions = [A] : n.includes(A) || n.push(A);
      }
    }
  }
  if (Ut) {
    if (dt.has(t))
      return dt.get(t);
    if (i) {
      var a = (
        /** @type {Derived} */
        t
      ), o = a.v;
      return (!(a.f & se) && a.reactions !== null || Dn(a)) && (o = rr(a)), dt.set(a, o), o;
    }
  } else i && (!(j != null && j.has(t)) || E != null && E.is_fork && !Ui()) && (a = /** @type {Derived} */
  t, Xi(a) && fn(a), Ot && Ui() && !(a.f & $e) && Rn(a));
  if (j != null && j.has(t))
    return j.get(t);
  if (t.f & lt)
    throw t.v;
  return t.v;
}
function Rn(t) {
  if (t.deps !== null) {
    t.f ^= $e;
    for (const e of t.deps)
      (e.reactions ?? (e.reactions = [])).push(t), e.f & Z && !(e.f & $e) && Rn(
        /** @type {Derived} */
        e
      );
  }
}
function Dn(t) {
  if (t.v === te) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (dt.has(e) || e.f & Z && Dn(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function bt(t) {
  var e = He;
  try {
    return He = !0, t();
  } finally {
    He = e;
  }
}
const Mo = -7169;
function re(t, e) {
  t.f = t.f & Mo | e;
}
function Lo(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (Mt in t)
      Ws(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const i = t[e];
        typeof i == "object" && i && Mt in i && Ws(i);
      }
  }
}
function Ws(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let s in t)
      try {
        Ws(t[s], e);
      } catch {
      }
    const i = Js(t);
    if (i !== Object.prototype && i !== Array.prototype && i !== Map.prototype && i !== Set.prototype && i !== Date.prototype) {
      const s = Vr(i);
      for (let r in s) {
        const n = s[r].get;
        if (n)
          try {
            n.call(t);
          } catch {
          }
      }
    }
  }
}
const Oo = ["touchstart", "touchmove"];
function $o(t) {
  return Oo.includes(t);
}
const Nn = /* @__PURE__ */ new Set(), Hs = /* @__PURE__ */ new Set();
function Po(t, e, i, s = {}) {
  function r(n) {
    if (s.capture || Oi.call(e, n), !n.cancelBubble)
      return Ii(() => i == null ? void 0 : i.call(this, n));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? Ti(() => {
    e.addEventListener(t, r, s);
  }) : e.addEventListener(t, r, s), r;
}
function Ro(t, e, i, s, r) {
  var n = { capture: s, passive: r }, a = Po(t, e, i, n);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && _n(() => {
    e.removeEventListener(t, a, n);
  });
}
function Ss(t) {
  for (var e = 0; e < t.length; e++)
    Nn.add(t[e]);
  for (var i of Hs)
    i(t);
}
let Ir = null;
function Oi(t) {
  var v;
  var e = this, i = (
    /** @type {Node} */
    e.ownerDocument
  ), s = t.type, r = ((v = t.composedPath) == null ? void 0 : v.call(t)) || [], n = (
    /** @type {null | Element} */
    r[0] || t.target
  );
  Ir = t;
  var a = 0, o = Ir === t && t.__root;
  if (o) {
    var l = r.indexOf(o);
    if (l !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var d = r.indexOf(e);
    if (d === -1)
      return;
    l <= d && (a = l);
  }
  if (n = /** @type {Element} */
  r[a] || t.target, n !== e) {
    as(t, "currentTarget", {
      configurable: !0,
      get() {
        return n || i;
      }
    });
    var u = A, h = O;
    ue(null), Be(null);
    try {
      for (var g, p = []; n !== null; ) {
        var f = n.assignedSlot || n.parentNode || /** @type {any} */
        n.host || null;
        try {
          var w = n["__" + s];
          w != null && (!/** @type {any} */
          n.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === n) && w.call(n, t);
        } catch (y) {
          g ? p.push(y) : g = y;
        }
        if (t.cancelBubble || f === e || f === null)
          break;
        n = f;
      }
      if (g) {
        for (let y of p)
          queueMicrotask(() => {
            throw y;
          });
        throw g;
      }
    } finally {
      t.__root = e, delete t.currentTarget, ue(u), Be(h);
    }
  }
}
function zn(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function ut(t, e) {
  var i = (
    /** @type {Effect} */
    O
  );
  i.nodes === null && (i.nodes = { start: t, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function Y(t, e) {
  var i = (e & eo) !== 0, s = (e & to) !== 0, r, n = !t.startsWith("<!>");
  return () => {
    if (L)
      return ut(I, null), I;
    r === void 0 && (r = zn(n ? t : "<!>" + t), i || (r = /** @type {TemplateNode} */
    /* @__PURE__ */ tt(r)));
    var a = (
      /** @type {TemplateNode} */
      s || vn ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    if (i) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ tt(a)
      ), l = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      ut(o, l);
    } else
      ut(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function Do(t, e, i = "svg") {
  var s = !t.startsWith("<!>"), r = `<${i}>${s ? t : "<!>" + t}</${i}>`, n;
  return () => {
    if (L)
      return ut(I, null), I;
    if (!n) {
      var a = (
        /** @type {DocumentFragment} */
        zn(r)
      ), o = (
        /** @type {Element} */
        /* @__PURE__ */ tt(a)
      );
      n = /** @type {Element} */
      /* @__PURE__ */ tt(o);
    }
    var l = (
      /** @type {TemplateNode} */
      n.cloneNode(!0)
    );
    return ut(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function No(t, e) {
  return /* @__PURE__ */ Do(t, e, "svg");
}
function zo() {
  if (L)
    return ut(I, null), I;
  var t = document.createDocumentFragment(), e = document.createComment(""), i = Pe();
  return t.append(e, i), ut(e, i), t;
}
function z(t, e) {
  if (L) {
    var i = (
      /** @type {Effect & { nodes: EffectNodes }} */
      O
    );
    (!(i.f & Yi) || i.nodes.end === null) && (i.nodes.end = I), ys();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
let js = !0;
function us(t, e) {
  var i = e == null ? "" : typeof e == "object" ? e + "" : e;
  i !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = i, t.nodeValue = i + "");
}
function dr(t, e) {
  return Un(t, e);
}
function Uo(t, e) {
  Fs(), e.intro = e.intro ?? !1;
  const i = e.target, s = L, r = I;
  try {
    for (var n = /* @__PURE__ */ tt(i); n && (n.nodeType !== ki || /** @type {Comment} */
    n.data !== Jr); )
      n = /* @__PURE__ */ Ke(n);
    if (!n)
      throw wi;
    Ze(!0), be(
      /** @type {Comment} */
      n
    );
    const a = Un(t, { ...e, anchor: n });
    return Ze(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a instanceof Error && a.message.split(`
`).some((o) => o.startsWith("https://svelte.dev/e/")))
      throw a;
    return a !== wi && console.warn("Failed to hydrate: ", a), e.recover === !1 && Ua(), Fs(), nr(i), Ze(!1), dr(t, e);
  } finally {
    Ze(s), be(r);
  }
}
const jt = /* @__PURE__ */ new Map();
function Un(t, { target: e, anchor: i, props: s = {}, events: r, context: n, intro: a = !0 }) {
  Fs();
  var o = /* @__PURE__ */ new Set(), l = (h) => {
    for (var g = 0; g < h.length; g++) {
      var p = h[g];
      if (!o.has(p)) {
        o.add(p);
        var f = $o(p);
        e.addEventListener(p, Oi, { passive: f });
        var w = jt.get(p);
        w === void 0 ? (document.addEventListener(p, Oi, { passive: f }), jt.set(p, 1)) : jt.set(p, w + 1);
      }
    }
  };
  l(ps(Nn)), Hs.add(l);
  var d = void 0, u = ko(() => {
    var h = i ?? e.appendChild(Pe());
    return uo(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (g) => {
        if (n) {
          vt({});
          var p = (
            /** @type {ComponentContext} */
            U
          );
          p.c = n;
        }
        if (r && (s.$$events = r), L && ut(
          /** @type {TemplateNode} */
          g,
          null
        ), js = a, d = t(g, s) || {}, js = !0, L && (O.nodes.end = I, I === null || I.nodeType !== ki || /** @type {Comment} */
        I.data !== tr))
          throw ws(), wi;
        n && mt();
      }
    ), () => {
      var f;
      for (var g of o) {
        e.removeEventListener(g, Oi);
        var p = (
          /** @type {number} */
          jt.get(g)
        );
        --p === 0 ? (document.removeEventListener(g, Oi), jt.delete(g)) : jt.set(g, p);
      }
      Hs.delete(l), h !== i && ((f = h.parentNode) == null || f.removeChild(h));
    };
  });
  return qs.set(d, u), d;
}
let qs = /* @__PURE__ */ new WeakMap();
function Vs(t, e) {
  const i = qs.get(t);
  return i ? (qs.delete(t), i(e)) : Promise.resolve();
}
var Le, Fe, pe, Ct, Vi, Bi, hs;
class Fo {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, i = !0) {
    /** @type {TemplateNode} */
    W(this, "anchor");
    /** @type {Map<Batch, Key>} */
    x(this, Le, /* @__PURE__ */ new Map());
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
    x(this, Fe, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    x(this, pe, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    x(this, Ct, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    x(this, Vi, !0);
    x(this, Bi, () => {
      var e = (
        /** @type {Batch} */
        E
      );
      if (c(this, Le).has(e)) {
        var i = (
          /** @type {Key} */
          c(this, Le).get(e)
        ), s = c(this, Fe).get(i);
        if (s)
          lr(s), c(this, Ct).delete(i);
        else {
          var r = c(this, pe).get(i);
          r && (c(this, Fe).set(i, r.effect), c(this, pe).delete(i), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), s = r.effect);
        }
        for (const [n, a] of c(this, Le)) {
          if (c(this, Le).delete(n), n === e)
            break;
          const o = c(this, pe).get(a);
          o && (oe(o.effect), c(this, pe).delete(a));
        }
        for (const [n, a] of c(this, Fe)) {
          if (n === i || c(this, Ct).has(n)) continue;
          const o = () => {
            if (Array.from(c(this, Le).values()).includes(n)) {
              var d = document.createDocumentFragment();
              Cn(a, d), d.append(Pe()), c(this, pe).set(n, { effect: a, fragment: d });
            } else
              oe(a);
            c(this, Ct).delete(n), c(this, Fe).delete(n);
          };
          c(this, Vi) || !s ? (c(this, Ct).add(n), Lt(a, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    x(this, hs, (e) => {
      c(this, Le).delete(e);
      const i = Array.from(c(this, Le).values());
      for (const [s, r] of c(this, pe))
        i.includes(s) || (oe(r.effect), c(this, pe).delete(s));
    });
    this.anchor = e, _(this, Vi, i);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, i) {
    var s = (
      /** @type {Batch} */
      E
    ), r = wn();
    if (i && !c(this, Fe).has(e) && !c(this, pe).has(e))
      if (r) {
        var n = document.createDocumentFragment(), a = Pe();
        n.append(a), c(this, pe).set(e, {
          effect: Ee(() => i(a)),
          fragment: n
        });
      } else
        c(this, Fe).set(
          e,
          Ee(() => i(this.anchor))
        );
    if (c(this, Le).set(s, e), r) {
      for (const [o, l] of c(this, Fe))
        o === e ? s.skipped_effects.delete(l) : s.skipped_effects.add(l);
      for (const [o, l] of c(this, pe))
        o === e ? s.skipped_effects.delete(l.effect) : s.skipped_effects.add(l.effect);
      s.oncommit(c(this, Bi)), s.ondiscard(c(this, hs));
    } else
      L && (this.anchor = I), c(this, Bi).call(this);
  }
}
Le = new WeakMap(), Fe = new WeakMap(), pe = new WeakMap(), Ct = new WeakMap(), Vi = new WeakMap(), Bi = new WeakMap(), hs = new WeakMap();
function Te(t, e, i = !1) {
  L && ys();
  var s = new Fo(t), r = i ? Pt : 0;
  function n(a, o) {
    if (L) {
      const d = Qr(t) === bs;
      if (a === d) {
        var l = os();
        be(l), s.anchor = l, Ze(!1), s.ensure(a, o), Ze(!0);
        return;
      }
    }
    s.ensure(a, o);
  }
  or(() => {
    var a = !1;
    e((o, l = !0) => {
      a = !0, n(l, o);
    }), a || n(!1, null);
  }, r);
}
function Wo(t, e, i) {
  for (var s = [], r = e.length, n, a = e.length, o = 0; o < r; o++) {
    let h = e[o];
    Lt(
      h,
      () => {
        if (n) {
          if (n.pending.delete(h), n.done.add(h), n.pending.size === 0) {
            var g = (
              /** @type {Set<EachOutroGroup>} */
              t.outrogroups
            );
            Bs(ps(n.done)), g.delete(n), g.size === 0 && (t.outrogroups = null);
          }
        } else
          a -= 1;
      },
      !1
    );
  }
  if (a === 0) {
    var l = s.length === 0 && i !== null;
    if (l) {
      var d = (
        /** @type {Element} */
        i
      ), u = (
        /** @type {Element} */
        d.parentNode
      );
      nr(u), u.append(d), t.items.clear();
    }
    Bs(e, !l);
  } else
    n = {
      pending: new Set(e),
      done: /* @__PURE__ */ new Set()
    }, (t.outrogroups ?? (t.outrogroups = /* @__PURE__ */ new Set())).add(n);
}
function Bs(t, e = !0) {
  for (var i = 0; i < t.length; i++)
    oe(t[i], e);
}
var Cr;
function Ho(t, e, i, s, r, n = null) {
  var a = t, o = /* @__PURE__ */ new Map();
  L && ys();
  var l = null, d = /* @__PURE__ */ sr(() => {
    var w = i();
    return qr(w) ? w : w == null ? [] : ps(w);
  }), u, h = !0;
  function g() {
    f.fallback = l, jo(f, u, a, e, s), l !== null && (u.length === 0 ? l.f & ot ? (l.f ^= ot, $i(l, null, a)) : lr(l) : Lt(l, () => {
      l = null;
    }));
  }
  var p = or(() => {
    u = /** @type {V[]} */
    b(d);
    var w = u.length;
    let v = !1;
    if (L) {
      var y = Qr(a) === bs;
      y !== (w === 0) && (a = os(), be(a), Ze(!1), v = !0);
    }
    for (var M = /* @__PURE__ */ new Set(), F = (
      /** @type {Batch} */
      E
    ), P = wn(), R = 0; R < w; R += 1) {
      L && I.nodeType === ki && /** @type {Comment} */
      I.data === tr && (a = /** @type {Comment} */
      I, v = !0, Ze(!1));
      var de = u[R], fe = s(de, R), K = h ? null : o.get(fe);
      K ? (K.v && xi(K.v, de), K.i && xi(K.i, R), P && F.skipped_effects.delete(K.e)) : (K = qo(
        o,
        h ? a : Cr ?? (Cr = Pe()),
        de,
        fe,
        R,
        r,
        e,
        i
      ), h || (K.e.f |= ot), o.set(fe, K)), M.add(fe);
    }
    if (w === 0 && n && !l && (h ? l = Ee(() => n(a)) : (l = Ee(() => n(Cr ?? (Cr = Pe()))), l.f |= ot)), L && w > 0 && be(os()), !h)
      if (P) {
        for (const [ne, Es] of o)
          M.has(ne) || F.skipped_effects.add(Es.e);
        F.oncommit(g), F.ondiscard(() => {
        });
      } else
        g();
    v && Ze(!0), b(d);
  }), f = { effect: p, items: o, outrogroups: null, fallback: l };
  h = !1, L && (a = I);
}
function jo(t, e, i, s, r) {
  var K;
  var n = e.length, a = t.items, o = t.effect.first, l, d = null, u = [], h = [], g, p, f, w;
  for (w = 0; w < n; w += 1) {
    if (g = e[w], p = r(g, w), f = /** @type {EachItem} */
    a.get(p).e, t.outrogroups !== null)
      for (const ne of t.outrogroups)
        ne.pending.delete(f), ne.done.delete(f);
    if (f.f & ot)
      if (f.f ^= ot, f === o)
        $i(f, null, i);
      else {
        var v = d ? d.next : o;
        f === t.effect.last && (t.effect.last = f.prev), f.prev && (f.prev.next = f.next), f.next && (f.next.prev = f.prev), st(t, d, f), st(t, f, v), $i(f, v, i), d = f, u = [], h = [], o = d.next;
        continue;
      }
    if (f.f & ve && lr(f), f !== o) {
      if (l !== void 0 && l.has(f)) {
        if (u.length < h.length) {
          var y = h[0], M;
          d = y.prev;
          var F = u[0], P = u[u.length - 1];
          for (M = 0; M < u.length; M += 1)
            $i(u[M], y, i);
          for (M = 0; M < h.length; M += 1)
            l.delete(h[M]);
          st(t, F.prev, P.next), st(t, d, F), st(t, P, y), o = y, d = P, w -= 1, u = [], h = [];
        } else
          l.delete(f), $i(f, o, i), st(t, f.prev, f.next), st(t, f, d === null ? t.effect.first : d.next), st(t, d, f), d = f;
        continue;
      }
      for (u = [], h = []; o !== null && o !== f; )
        (l ?? (l = /* @__PURE__ */ new Set())).add(o), h.push(o), o = o.next;
      if (o === null)
        continue;
    }
    f.f & ot || u.push(f), d = f, o = f.next;
  }
  if (t.outrogroups !== null) {
    for (const ne of t.outrogroups)
      ne.pending.size === 0 && (Bs(ps(ne.done)), (K = t.outrogroups) == null || K.delete(ne));
    t.outrogroups.size === 0 && (t.outrogroups = null);
  }
  if (o !== null || l !== void 0) {
    var R = [];
    if (l !== void 0)
      for (f of l)
        f.f & ve || R.push(f);
    for (; o !== null; )
      !(o.f & ve) && o !== t.fallback && R.push(o), o = o.next;
    var de = R.length;
    if (de > 0) {
      var fe = null;
      Wo(t, R, fe);
    }
  }
}
function qo(t, e, i, s, r, n, a, o) {
  var l = a & Va ? a & Ya ? Nt(i) : /* @__PURE__ */ hn(i, !1, !1) : null, d = a & Ba ? Nt(r) : null;
  return {
    v: l,
    i: d,
    e: Ee(() => (n(e, l ?? i, d ?? r, o), () => {
      t.delete(s);
    }))
  };
}
function $i(t, e, i) {
  if (t.nodes)
    for (var s = t.nodes.start, r = t.nodes.end, n = e && !(e.f & ot) ? (
      /** @type {EffectNodes} */
      e.nodes.start
    ) : i; s !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ke(s)
      );
      if (n.before(s), s === r)
        return;
      s = a;
    }
}
function st(t, e, i) {
  e === null ? t.effect.first = i : e.next = i, i === null ? t.effect.last = e : i.prev = e;
}
const Vo = () => performance.now(), Qe = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (t) => requestAnimationFrame(t)
  ),
  now: () => Vo(),
  tasks: /* @__PURE__ */ new Set()
};
function Fn() {
  const t = Qe.now();
  Qe.tasks.forEach((e) => {
    e.c(t) || (Qe.tasks.delete(e), e.f());
  }), Qe.tasks.size !== 0 && Qe.tick(Fn);
}
function Bo(t) {
  let e;
  return Qe.tasks.size === 0 && Qe.tick(Fn), {
    promise: new Promise((i) => {
      Qe.tasks.add(e = { c: t, f: i });
    }),
    abort() {
      Qe.tasks.delete(e);
    }
  };
}
function Qi(t, e) {
  Ii(() => {
    t.dispatchEvent(new CustomEvent(e));
  });
}
function Yo(t) {
  if (t === "float") return "cssFloat";
  if (t === "offset") return "cssOffset";
  if (t.startsWith("--")) return t;
  const e = t.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (i) => i[0].toUpperCase() + i.slice(1)
  ).join("");
}
function Ar(t) {
  const e = {}, i = t.split(";");
  for (const s of i) {
    const [r, n] = s.split(":");
    if (!r || n === void 0) break;
    const a = Yo(r.trim());
    e[a] = n.trim();
  }
  return e;
}
const Go = (t) => t;
function Mr(t, e, i, s) {
  var v;
  var r = (t & Za) !== 0, n = "both", a, o = e.inert, l = e.style.overflow, d, u;
  function h() {
    return Ii(() => a ?? (a = i()(e, (s == null ? void 0 : s()) ?? /** @type {P} */
    {}, {
      direction: n
    })));
  }
  var g = {
    is_global: r,
    in() {
      e.inert = o, Qi(e, "introstart"), d = Ys(e, h(), u, 1, () => {
        Qi(e, "introend"), d == null || d.abort(), d = a = void 0, e.style.overflow = l;
      });
    },
    out(y) {
      e.inert = !0, Qi(e, "outrostart"), u = Ys(e, h(), d, 0, () => {
        Qi(e, "outroend"), y == null || y();
      });
    },
    stop: () => {
      d == null || d.abort(), u == null || u.abort();
    }
  }, p = (
    /** @type {Effect & { nodes: EffectNodes }} */
    O
  );
  if (((v = p.nodes).t ?? (v.t = [])).push(g), js) {
    var f = r;
    if (!f) {
      for (var w = (
        /** @type {Effect | null} */
        p.parent
      ); w && w.f & Pt; )
        for (; (w = w.parent) && !(w.f & Ge); )
          ;
      f = !w || (w.f & Yi) !== 0;
    }
    f && ar(() => {
      bt(() => g.in());
    });
  }
}
function Ys(t, e, i, s, r) {
  var n = s === 1;
  if (Ma(e)) {
    var a, o = !1;
    return Ti(() => {
      if (!o) {
        var v = e({ direction: n ? "in" : "out" });
        a = Ys(t, v, i, s, r);
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
  if (i == null || i.deactivate(), !(e != null && e.duration))
    return r(), {
      abort: Mi,
      deactivate: Mi,
      reset: Mi,
      t: () => s
    };
  const { delay: l = 0, css: d, tick: u, easing: h = Go } = e;
  var g = [];
  if (n && i === void 0 && (u && u(0, 1), d)) {
    var p = Ar(d(0, 1));
    g.push(p, p);
  }
  var f = () => 1 - s, w = t.animate(g, { duration: l, fill: "forwards" });
  return w.onfinish = () => {
    w.cancel();
    var v = (i == null ? void 0 : i.t()) ?? 1 - s;
    i == null || i.abort();
    var y = s - v, M = (
      /** @type {number} */
      e.duration * Math.abs(y)
    ), F = [];
    if (M > 0) {
      var P = !1;
      if (d)
        for (var R = Math.ceil(M / 16.666666666666668), de = 0; de <= R; de += 1) {
          var fe = v + y * h(de / R), K = Ar(d(fe, 1 - fe));
          F.push(K), P || (P = K.overflow === "hidden");
        }
      P && (t.style.overflow = "hidden"), f = () => {
        var ne = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          w.currentTime
        );
        return v + y * h(ne / M);
      }, u && Bo(() => {
        if (w.playState !== "running") return !1;
        var ne = f();
        return u(ne, 1 - ne), !0;
      });
    }
    w = t.animate(F, { duration: M, fill: "forwards" }), w.onfinish = () => {
      f = () => s, u == null || u(s, 1 - s), r();
    };
  }, {
    abort: () => {
      w && (w.cancel(), w.effect = null, w.onfinish = Mi);
    },
    deactivate: () => {
      r = Mi;
    },
    reset: () => {
      s === 0 && (u == null || u(1, 0));
    },
    t: () => f()
  };
}
function Ft(t, e) {
  ar(() => {
    var i = t.getRootNode(), s = (
      /** @type {ShadowRoot} */
      i.host ? (
        /** @type {ShadowRoot} */
        i
      ) : (
        /** @type {Document} */
        i.head ?? /** @type {Document} */
        i.ownerDocument.head
      )
    );
    if (!s.querySelector("#" + e.hash)) {
      const r = document.createElement("style");
      r.id = e.hash, r.textContent = e.code, s.appendChild(r);
    }
  });
}
const Lr = [...` 	
\r\f \v\uFEFF`];
function Ko(t, e, i) {
  var s = t == null ? "" : "" + t;
  if (e && (s = s ? s + " " + e : e), i) {
    for (var r in i)
      if (i[r])
        s = s ? s + " " + r : r;
      else if (s.length)
        for (var n = r.length, a = 0; (a = s.indexOf(r, a)) >= 0; ) {
          var o = a + n;
          (a === 0 || Lr.includes(s[a - 1])) && (o === s.length || Lr.includes(s[o])) ? s = (a === 0 ? "" : s.substring(0, a)) + s.substring(o + 1) : a = o;
        }
  }
  return s === "" ? null : s;
}
function Xo(t, e) {
  return t == null ? null : String(t);
}
function cr(t, e, i, s, r, n) {
  var a = t.__className;
  if (L || a !== i || a === void 0) {
    var o = Ko(i, s, n);
    (!L || o !== t.getAttribute("class")) && (o == null ? t.removeAttribute("class") : t.className = o), t.__className = i;
  } else if (n && r !== n)
    for (var l in n) {
      var d = !!n[l];
      (r == null || d !== !!r[l]) && t.classList.toggle(l, d);
    }
  return n;
}
function Jo(t, e, i, s) {
  var r = t.__style;
  if (L || r !== e) {
    var n = Xo(e);
    (!L || n !== t.getAttribute("style")) && (n == null ? t.removeAttribute("style") : t.style.cssText = n), t.__style = e;
  }
  return s;
}
const Qo = Symbol("is custom element"), Zo = Symbol("is html");
function Ye(t, e, i, s) {
  var r = el(t);
  L && (r[e] = t.getAttribute(e), e === "src" || e === "srcset" || e === "href" && t.nodeName === "LINK") || r[e] !== (r[e] = i) && (e === "loading" && (t[$a] = i), i == null ? t.removeAttribute(e) : typeof i != "string" && tl(t).includes(e) ? t[e] = i : t.setAttribute(e, i));
}
function el(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ?? (t.__attributes = {
      [Qo]: t.nodeName.includes("-"),
      [Zo]: t.namespaceURI === io
    })
  );
}
var Or = /* @__PURE__ */ new Map();
function tl(t) {
  var e = t.getAttribute("is") || t.nodeName, i = Or.get(e);
  if (i) return i;
  Or.set(e, i = []);
  for (var s, r = t, n = Element.prototype; n !== r; ) {
    s = Vr(r);
    for (var a in s)
      s[a].set && i.push(a);
    r = Js(r);
  }
  return i;
}
function il(t, e, i = e) {
  var s = /* @__PURE__ */ new WeakSet();
  yo(t, "input", async (r) => {
    var n = r ? t.defaultValue : t.value;
    if (n = As(t) ? Ms(n) : n, i(n), E !== null && s.add(E), await Pn(), n !== (n = e())) {
      var a = t.selectionStart, o = t.selectionEnd, l = t.value.length;
      if (t.value = n ?? "", o !== null) {
        var d = t.value.length;
        a === o && o === l && d > l ? (t.selectionStart = d, t.selectionEnd = d) : (t.selectionStart = a, t.selectionEnd = Math.min(o, d));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (L && t.defaultValue !== t.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  bt(e) == null && t.value) && (i(As(t) ? Ms(t.value) : t.value), E !== null && s.add(E)), xs(() => {
    var r = e();
    if (t === document.activeElement) {
      var n = (
        /** @type {Batch} */
        es ?? E
      );
      if (s.has(n))
        return;
    }
    As(t) && r === Ms(t.value) || t.type === "date" && !r && !t.value || r !== t.value && (t.value = r ?? "");
  });
}
function As(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function Ms(t) {
  return t === "" ? null : +t;
}
function $r(t, e) {
  return t === e || (t == null ? void 0 : t[Mt]) === e;
}
function ur(t = {}, e, i, s) {
  return ar(() => {
    var r, n;
    return xs(() => {
      r = n, n = [], bt(() => {
        t !== i(...n) && (e(t, ...n), r && $r(i(...r), t) && e(null, ...r));
      });
    }), () => {
      Ti(() => {
        n && $r(i(...n), t) && e(null, ...n);
      });
    };
  }), t;
}
function sl(t = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    U
  ), i = e.l.u;
  if (!i) return;
  let s = () => Lo(e.s);
  if (t) {
    let r = 0, n = (
      /** @type {Record<string, any>} */
      {}
    );
    const a = /* @__PURE__ */ Ki(() => {
      let o = !1;
      const l = e.s;
      for (const d in l)
        l[d] !== n[d] && (n[d] = l[d], o = !0);
      return o && r++, r;
    });
    s = () => b(a);
  }
  i.b.length && xo(() => {
    Pr(e, s), Os(i.b);
  }), ct(() => {
    const r = bt(() => i.m.map(La));
    return () => {
      for (const n of r)
        typeof n == "function" && n();
    };
  }), i.a.length && ct(() => {
    Pr(e, s), Os(i.a);
  });
}
function Pr(t, e) {
  if (t.l.s)
    for (const i of t.l.s) b(i);
  e();
}
let Zi = !1;
function rl(t) {
  var e = Zi;
  try {
    return Zi = !1, [t(), Zi];
  } finally {
    Zi = e;
  }
}
function ft(t, e, i, s) {
  var F;
  var r = !Ei || (i & Ka) !== 0, n = (i & Ja) !== 0, a = (i & Qa) !== 0, o = (
    /** @type {V} */
    s
  ), l = !0, d = () => (l && (l = !1, o = a ? bt(
    /** @type {() => V} */
    s
  ) : (
    /** @type {V} */
    s
  )), o), u;
  if (n) {
    var h = Mt in t || Kr in t;
    u = ((F = At(t, e)) == null ? void 0 : F.set) ?? (h && e in t ? (P) => t[e] = P : void 0);
  }
  var g, p = !1;
  n ? [g, p] = rl(() => (
    /** @type {V} */
    t[e]
  )) : g = /** @type {V} */
  t[e], g === void 0 && s !== void 0 && (g = d(), u && (r && Fa(), u(g)));
  var f;
  if (r ? f = () => {
    var P = (
      /** @type {V} */
      t[e]
    );
    return P === void 0 ? d() : (l = !0, P);
  } : f = () => {
    var P = (
      /** @type {V} */
      t[e]
    );
    return P !== void 0 && (o = /** @type {V} */
    void 0), P === void 0 ? o : P;
  }, r && !(i & Xa))
    return f;
  if (u) {
    var w = t.$$legacy;
    return (
      /** @type {() => V} */
      function(P, R) {
        return arguments.length > 0 ? ((!r || !R || w || p) && u(R ? f() : P), P) : f();
      }
    );
  }
  var v = !1, y = (i & Ga ? Ki : sr)(() => (v = !1, f()));
  n && b(y);
  var M = (
    /** @type {Effect} */
    O
  );
  return (
    /** @type {() => V} */
    function(P, R) {
      if (arguments.length > 0) {
        const de = R ? b(y) : r && n ? X(P) : P;
        return k(y, de), v = !0, o !== void 0 && (o = de), P;
      }
      return Ut && v || M.f & et ? y.v : b(y);
    }
  );
}
function nl(t) {
  return new al(t);
}
var Je, Se;
class al {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    x(this, Je);
    /** @type {Record<string, any>} */
    x(this, Se);
    var n;
    var i = /* @__PURE__ */ new Map(), s = (a, o) => {
      var l = /* @__PURE__ */ hn(o, !1, !1);
      return i.set(a, l), l;
    };
    const r = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(a, o) {
          return b(i.get(o) ?? s(o, Reflect.get(a, o)));
        },
        has(a, o) {
          return o === Kr ? !0 : (b(i.get(o) ?? s(o, Reflect.get(a, o))), Reflect.has(a, o));
        },
        set(a, o, l) {
          return k(i.get(o) ?? s(o, l), l), Reflect.set(a, o, l);
        }
      }
    );
    _(this, Se, (e.hydrate ? Uo : dr)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: r,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((n = e == null ? void 0 : e.props) != null && n.$$host) || e.sync === !1) && qe(), _(this, Je, r.$$events);
    for (const a of Object.keys(c(this, Se)))
      a === "$set" || a === "$destroy" || a === "$on" || as(this, a, {
        get() {
          return c(this, Se)[a];
        },
        /** @param {any} value */
        set(o) {
          c(this, Se)[a] = o;
        },
        enumerable: !0
      });
    c(this, Se).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(r, a);
    }, c(this, Se).$destroy = () => {
      Vs(c(this, Se));
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    c(this, Se).$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, i) {
    c(this, Je)[e] = c(this, Je)[e] || [];
    const s = (...r) => i.call(this, ...r);
    return c(this, Je)[e].push(s), () => {
      c(this, Je)[e] = c(this, Je)[e].filter(
        /** @param {any} fn */
        (r) => r !== s
      );
    };
  }
  $destroy() {
    c(this, Se).$destroy();
  }
}
Je = new WeakMap(), Se = new WeakMap();
let Wn;
typeof HTMLElement == "function" && (Wn = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, i, s) {
    super();
    /** The Svelte component constructor */
    W(this, "$$ctor");
    /** Slots */
    W(this, "$$s");
    /** @type {any} The Svelte component instance */
    W(this, "$$c");
    /** Whether or not the custom element is connected */
    W(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    W(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    W(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    W(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    W(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    W(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    W(this, "$$me");
    this.$$ctor = e, this.$$s = i, s && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(e, i, s) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(i), this.$$c) {
      const r = this.$$c.$on(e, i);
      this.$$l_u.set(i, r);
    }
    super.addEventListener(e, i, s);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(e, i, s) {
    if (super.removeEventListener(e, i, s), this.$$c) {
      const r = this.$$l_u.get(i);
      r && (r(), this.$$l_u.delete(i));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(r) {
        return (n) => {
          const a = document.createElement("slot");
          r !== "default" && (a.name = r), z(n, a);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const i = {}, s = ol(this);
      for (const r of this.$$s)
        r in s && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), i.default = !0) : i[r] = e(r));
      for (const r of this.attributes) {
        const n = this.$$g_p(r.name);
        n in this.$$d || (this.$$d[n] = rs(n, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = nl({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: i,
          $$host: this
        }
      }), this.$$me = So(() => {
        xs(() => {
          var r;
          this.$$r = !0;
          for (const n of ns(this.$$c)) {
            if (!((r = this.$$p_d[n]) != null && r.reflect)) continue;
            this.$$d[n] = this.$$c[n];
            const a = rs(
              n,
              this.$$d[n],
              this.$$p_d,
              "toAttribute"
            );
            a == null ? this.removeAttribute(this.$$p_d[n].attribute || n) : this.setAttribute(this.$$p_d[n].attribute || n, a);
          }
          this.$$r = !1;
        });
      });
      for (const r in this.$$l)
        for (const n of this.$$l[r]) {
          const a = this.$$c.$on(r, n);
          this.$$l_u.set(n, a);
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
  attributeChangedCallback(e, i, s) {
    var r;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = rs(e, s, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [e]: this.$$d[e] }));
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
    return ns(this.$$p_d).find(
      (i) => this.$$p_d[i].attribute === e || !this.$$p_d[i].attribute && i.toLowerCase() === e
    ) || e;
  }
});
function rs(t, e, i, s) {
  var n;
  const r = (n = i[t]) == null ? void 0 : n.type;
  if (e = r === "Boolean" && typeof e != "boolean" ? e != null : e, !s || !i[t])
    return e;
  if (s === "toAttribute")
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
function ol(t) {
  const e = {};
  return t.childNodes.forEach((i) => {
    e[
      /** @type {Element} node */
      i.slot || "default"
    ] = !0;
  }), e;
}
function Wt(t, e, i, s, r, n) {
  let a = class extends Wn {
    constructor() {
      super(t, i, r), this.$$p_d = e;
    }
    static get observedAttributes() {
      return ns(e).map(
        (o) => (e[o].attribute || o).toLowerCase()
      );
    }
  };
  return ns(e).forEach((o) => {
    as(a.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(l) {
        var h;
        l = rs(o, l, e), this.$$d[o] = l;
        var d = this.$$c;
        if (d) {
          var u = (h = At(d, o)) == null ? void 0 : h.get;
          u ? d[o] = l : d.$set({ [o]: l });
        }
      }
    });
  }), s.forEach((o) => {
    as(a.prototype, o, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[o];
      }
    });
  }), t.element = /** @type {any} */
  a, a;
}
function fr(t) {
  U === null && Xr(), Ei && U.l !== null ? dl(U).m.push(t) : ct(() => {
    const e = bt(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function ll(t) {
  U === null && Xr(), fr(() => () => bt(t));
}
function dl(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
const cl = "5";
var jr;
typeof window < "u" && ((jr = window.__svelte ?? (window.__svelte = {})).v ?? (jr.v = /* @__PURE__ */ new Set())).add(cl);
const ul = (t) => t;
function fl(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function Rr(t) {
  const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    t,
    "px"
  ];
}
function gl(t, { delay: e = 0, duration: i = 400, easing: s = ul } = {}) {
  const r = +getComputedStyle(t).opacity;
  return {
    delay: e,
    duration: i,
    easing: s,
    css: (n) => `opacity: ${n * r}`
  };
}
function hl(t, { delay: e = 0, duration: i = 400, easing: s = fl, x: r = 0, y: n = 0, opacity: a = 0 } = {}) {
  const o = getComputedStyle(t), l = +o.opacity, d = o.transform === "none" ? "" : o.transform, u = l * (1 - a), [h, g] = Rr(r), [p, f] = Rr(n);
  return {
    delay: e,
    duration: i,
    easing: s,
    css: (w, v) => `
			transform: ${d} translate(${(1 - w) * h}${g}, ${(1 - w) * p}${f});
			opacity: ${l - u * v}`
  };
}
var Qt, Zt, ei, ti;
class pl {
  constructor() {
    x(this, Qt);
    x(this, Zt);
    x(this, ei);
    x(this, ti);
    _(this, Qt, /* @__PURE__ */ C(!1)), _(this, Zt, /* @__PURE__ */ C(!1)), _(this, ei, /* @__PURE__ */ C(!1)), _(this, ti, /* @__PURE__ */ C(!1));
  }
  get isOpen() {
    return b(c(this, Qt));
  }
  set isOpen(e) {
    k(c(this, Qt), e, !0);
  }
  get isMinimized() {
    return b(c(this, Zt));
  }
  set isMinimized(e) {
    k(c(this, Zt), e, !0);
  }
  get isLoading() {
    return b(c(this, ei));
  }
  set isLoading(e) {
    k(c(this, ei), e, !0);
  }
  get hasUnreadMessages() {
    return b(c(this, ti));
  }
  set hasUnreadMessages(e) {
    k(c(this, ti), e, !0);
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
Qt = new WeakMap(), Zt = new WeakMap(), ei = new WeakMap(), ti = new WeakMap();
const H = new pl(), J = {
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
}, _t = {
  /** Maximum message length */
  MAX_LENGTH: 4e3,
  /** Minimum message length */
  MIN_LENGTH: 1,
  /** Maximum message queue size to prevent memory leaks */
  MAX_QUEUE_SIZE: 50
}, Dr = {
  /** Visitor ID storage key */
  VISITOR_ID: "ai_chat_visitor_id",
  /** Session history storage key */
  SESSIONS: "ai_chat_sessions"
};
var ii, si, ri, ni, ai, oi;
class vl {
  constructor() {
    x(this, ii);
    x(this, si);
    x(this, ri);
    x(this, ni);
    x(this, ai);
    x(this, oi);
    _(this, ii, /* @__PURE__ */ C(X([]))), _(this, si, /* @__PURE__ */ C(null)), _(this, ri, /* @__PURE__ */ C(!1)), _(this, ni, /* @__PURE__ */ C(null)), _(this, ai, /* @__PURE__ */ C(null)), this.streamingBuffer = "", this.streamingTimeout = null, _(this, oi, /* @__PURE__ */ C(0));
  }
  get messages() {
    return b(c(this, ii));
  }
  set messages(e) {
    k(c(this, ii), e, !0);
  }
  get currentSession() {
    return b(c(this, si));
  }
  set currentSession(e) {
    k(c(this, si), e, !0);
  }
  get isTyping() {
    return b(c(this, ri));
  }
  set isTyping(e) {
    k(c(this, ri), e, !0);
  }
  get error() {
    return b(c(this, ni));
  }
  set error(e) {
    k(c(this, ni), e, !0);
  }
  get streamingMessageId() {
    return b(c(this, ai));
  }
  set streamingMessageId(e) {
    k(c(this, ai), e, !0);
  }
  get streamingUpdateSignal() {
    return b(c(this, oi));
  }
  set streamingUpdateSignal(e) {
    k(c(this, oi), e, !0);
  }
  // Derived state
  get unreadCount() {
    return this.messages.filter((e) => e.role === "assistant" && e.status !== "sent").length;
  }
  get hasMessages() {
    return this.messages.length > 0;
  }
  addMessage(e, i = "user") {
    const s = {
      id: crypto.randomUUID(),
      role: i,
      content: e,
      timestamp: /* @__PURE__ */ new Date(),
      status: i === "user" ? "sending" : "sent"
    };
    return this.messages = [...this.messages, s], s;
  }
  updateMessageStatus(e, i) {
    this.messages = this.messages.map((s) => s.id === e ? { ...s, status: i } : s);
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
    var i;
    if (this.streamingMessageId) {
      if (this.streamingBuffer += e, this.streamingTimeout && clearTimeout(this.streamingTimeout), typeof process < "u" && ((i = process.env) == null ? void 0 : i.NODE_ENV) === "test") {
        this.flushStreamingBuffer();
        return;
      }
      this.streamingTimeout = window.setTimeout(
        () => {
          this.flushStreamingBuffer(), this.streamingTimeout = null;
        },
        J.STREAMING_BATCH_DELAY
      );
    }
  }
  flushStreamingBuffer() {
    if (this.streamingMessageId && this.streamingBuffer) {
      const e = this.messages.find((i) => i.id === this.streamingMessageId);
      e ? (e.content += this.streamingBuffer, this.streamingUpdateSignal++) : console.warn("ChatStore: Streaming message not found", { id: this.streamingMessageId }), this.streamingBuffer = "";
    }
  }
  finishStreamingMessage() {
    this.streamingTimeout && (clearTimeout(this.streamingTimeout), this.streamingTimeout = null), this.flushStreamingBuffer(), this.streamingMessageId = null;
  }
  updateMessageContent(e, i) {
    this.messages = this.messages.map((s) => s.id === e ? { ...s, content: i(s.content) } : s);
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
ii = new WeakMap(), si = new WeakMap(), ri = new WeakMap(), ni = new WeakMap(), ai = new WeakMap(), oi = new WeakMap();
const T = new vl(), Nr = {
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
  debug: "debug",
  "auto-init": "autoInit"
}, De = {
  theme: "modern",
  position: "bottom-right",
  title: "AI Assistant",
  placeholder: "Type your message...",
  avatarEmoji: "🤖",
  initialMessage: void 0,
  debug: !1,
  autoInit: !0
}, Hn = {
  /**
   * Convert camelCase config to snake_case for backend API
   */
  toBackendFormat(t) {
    return {
      client_id: t.clientId,
      theme: t.theme,
      position: t.position,
      title: t.title,
      logo_url: t.logoUrl,
      placeholder: t.placeholder,
      accent_color: t.accentColor,
      avatar_emoji: t.avatarEmoji,
      company_name: t.companyName,
      initial_message: t.initialMessage,
      debug: t.debug,
      auto_init: t.autoInit
    };
  },
  /**
   * Convert snake_case backend response to camelCase config
   */
  fromBackendFormat(t) {
    return {
      clientId: t.client_id,
      theme: t.theme,
      position: t.position,
      title: t.title,
      logoUrl: t.logo_url,
      placeholder: t.placeholder,
      accentColor: t.accent_color,
      avatarEmoji: t.avatar_emoji,
      companyName: t.company_name,
      initialMessage: t.initial_message,
      debug: t.debug,
      autoInit: t.auto_init
    };
  },
  /**
   * Convert HTML attribute name to property name
   */
  attributeToProperty(t) {
    return Nr[t] || null;
  },
  /**
   * Convert property name to HTML attribute name
   */
  propertyToAttribute(t) {
    const i = Object.entries(Nr).find(([, s]) => s === t);
    return i ? i[0] : null;
  }
}, ml = [
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
function jn(t) {
  return ml.includes(t);
}
function ks(t) {
  return !t || typeof t != "string" ? !1 : /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(t);
}
function gr(t, e = "#6b46c1") {
  return ks(t) ? t : e;
}
function qn(t) {
  if (!ks(t)) return t;
  if (t.length === 4) {
    const e = t.slice(1);
    return "#" + e[0] + e[0] + e[1] + e[1] + e[2] + e[2];
  }
  return t;
}
function Vn(t) {
  const e = qn(t), i = parseInt(e.slice(1, 3), 16) / 255, s = parseInt(e.slice(3, 5), 16) / 255, r = parseInt(e.slice(5, 7), 16) / 255, n = Math.max(i, s, r), a = Math.min(i, s, r);
  let o = 0, l = 0;
  const d = (n + a) / 2;
  if (n !== a) {
    const u = n - a;
    switch (l = d > 0.5 ? u / (2 - n - a) : u / (n + a), n) {
      case i:
        o = ((s - r) / u + (s < r ? 6 : 0)) / 6;
        break;
      case s:
        o = ((r - i) / u + 2) / 6;
        break;
      case r:
        o = ((i - s) / u + 4) / 6;
        break;
    }
  }
  return { h: o * 360, s: l * 100, l: d * 100 };
}
function Bn(t, e, i) {
  e /= 100, i /= 100;
  const s = e * Math.min(i, 1 - i), r = (n) => {
    const a = (n + t / 30) % 12, o = i - s * Math.max(Math.min(a - 3, 9 - a, 1), -1);
    return Math.round(255 * o).toString(16).padStart(2, "0");
  };
  return `#${r(0)}${r(8)}${r(4)}`.toUpperCase();
}
function Oe(t, e) {
  if (!ks(t)) return t;
  const i = Vn(t), s = Math.max(0, Math.min(100, i.l + e));
  return Bn(i.h, i.s, s);
}
const bl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  adjustColor: Oe,
  expandHexColor: qn,
  hexToHsl: Vn,
  hslToHex: Bn,
  isValidHexColor: ks,
  sanitizeHexColor: gr
}, Symbol.toStringTag, { value: "Module" }));
var li, di, ci, ui, fi, gi, hi, pi, vi, mi, bi;
class wl {
  constructor() {
    x(this, li);
    x(this, di);
    x(this, ci);
    x(this, ui);
    x(this, fi);
    x(this, gi);
    x(this, hi);
    x(this, pi);
    x(this, vi);
    x(this, mi);
    x(this, bi);
    _(this, li, /* @__PURE__ */ C("")), _(this, di, /* @__PURE__ */ C(X(De.theme))), _(this, ci, /* @__PURE__ */ C(X(De.position))), _(this, ui, /* @__PURE__ */ C(X(De.title))), _(this, fi, /* @__PURE__ */ C(X(De.logoUrl))), _(this, gi, /* @__PURE__ */ C(X(De.placeholder))), _(this, hi, /* @__PURE__ */ C(X(De.accentColor))), _(this, pi, /* @__PURE__ */ C(X(De.avatarEmoji))), _(this, vi, /* @__PURE__ */ C(X(De.companyName))), _(this, mi, /* @__PURE__ */ C(X(De.initialMessage))), _(this, bi, /* @__PURE__ */ C("default"));
  }
  get clientId() {
    return b(c(this, li));
  }
  set clientId(e) {
    k(c(this, li), e, !0);
  }
  get theme() {
    return b(c(this, di));
  }
  set theme(e) {
    k(c(this, di), e, !0);
  }
  get position() {
    return b(c(this, ci));
  }
  set position(e) {
    k(c(this, ci), e, !0);
  }
  get title() {
    return b(c(this, ui));
  }
  set title(e) {
    k(c(this, ui), e, !0);
  }
  get logoUrl() {
    return b(c(this, fi));
  }
  set logoUrl(e) {
    k(c(this, fi), e, !0);
  }
  get placeholder() {
    return b(c(this, gi));
  }
  set placeholder(e) {
    k(c(this, gi), e, !0);
  }
  get accentColor() {
    return b(c(this, hi));
  }
  set accentColor(e) {
    k(c(this, hi), e, !0);
  }
  get avatarEmoji() {
    return b(c(this, pi));
  }
  set avatarEmoji(e) {
    k(c(this, pi), e, !0);
  }
  get companyName() {
    return b(c(this, vi));
  }
  set companyName(e) {
    k(c(this, vi), e, !0);
  }
  get initialMessage() {
    return b(c(this, mi));
  }
  set initialMessage(e) {
    k(c(this, mi), e, !0);
  }
  get titleSource() {
    return b(c(this, bi));
  }
  set titleSource(e) {
    k(c(this, bi), e, !0);
  }
  updateConfig(e, i = "default") {
    if (e.title !== void 0) {
      this.setTitle(e.title, i);
      const { title: s, ...r } = e;
      Object.assign(this, r);
    } else
      Object.assign(this, e);
  }
  /**
   * Set title with priority enforcement
   * Priority: user > backend > default
   */
  setTitle(e, i) {
    const s = ["user", "backend", "default"], r = s.indexOf(this.titleSource);
    s.indexOf(i) <= r && (this.title = e, this.titleSource = i);
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
  loadFromAttributes(e) {
    const i = this.parseElementAttributes(e);
    this.updateConfig(i, "user"), this.applyTheme(e);
  }
  /**
   * Parse HTML element attributes into configuration object
   * Reuses unified configuration attribute mapping logic
   */
  parseElementAttributes(e) {
    const i = {}, s = e.getAttributeNames();
    for (const r of s) {
      const n = Hn.attributeToProperty(r);
      if (!n) continue;
      const a = e.getAttribute(r);
      if (n === "initialMessage") {
        i.initialMessage = a === "" ? void 0 : a || void 0;
        continue;
      }
      if (a)
        switch (n) {
          case "clientId":
          case "title":
          case "logoUrl":
          case "placeholder":
          case "avatarEmoji":
            i[n] = a;
            break;
          case "accentColor":
            i.accentColor = gr(a, this.accentColor);
            break;
          case "theme":
            jn(a) && (i.theme = a);
            break;
          case "position":
            (a === "bottom-left" || a === "bottom-right") && (i.position = a);
            break;
          case "companyName":
            i.companyName = a, e.hasAttribute("title") || (i.title = `${a} Assistant`);
            break;
        }
    }
    return i;
  }
  get cssVariables() {
    const e = {};
    return this.accentColor && (e["--widget-primary"] = this.accentColor, e["--widget-primary-hover"] = Oe(this.accentColor, -20), e["--widget-primary-light"] = Oe(this.accentColor, 20), e["--widget-primary-dark"] = Oe(this.accentColor, -30), e["--widget-gradient"] = `linear-gradient(135deg, ${this.accentColor} 0%, ${Oe(this.accentColor, 20)} 100%)`, e["--widget-gradient-hover"] = `linear-gradient(135deg, ${Oe(this.accentColor, -20)} 0%, ${this.accentColor} 100%)`), e;
  }
  applyTheme(e) {
    e.setAttribute("data-theme", this.theme);
    const i = this.cssVariables;
    for (const [s, r] of Object.entries(i))
      e.style.setProperty(s, r);
  }
  // Remove duplicate adjustColor method - using shared utility from color.ts
}
li = new WeakMap(), di = new WeakMap(), ci = new WeakMap(), ui = new WeakMap(), fi = new WeakMap(), gi = new WeakMap(), hi = new WeakMap(), pi = new WeakMap(), vi = new WeakMap(), mi = new WeakMap(), bi = new WeakMap();
const ht = new wl(), yl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  configStore: ht
}, Symbol.toStringTag, { value: "Module" })), Yn = "data:image/webp;base64,UklGRugJAABXRUJQVlA4WAoAAAAQAAAAfwAAfwAAQUxQSFACAAABkEXbtik59777XleN2LZt27Zt27ZtW99tuzuF2LbtpKpGp3BivHNujIiYAPZ3d2OLGUu7p5aXUmc/AMCFdkJWtWzwQVcXLqdUZ+GjtzPIqSt84jAp8UWfsppLaemnrJUS6/spA5iUM9/72O2McmKdnB9ydmCS5h2vv3e1oyIrxjKdBjiZnklcDQOIFjLTogFiValFyU6Eyk4Jll6Q7ESI9EJlpwTLgxu+pJemBQDEGDUvwxc0KqQYig/fGmf+TJPJZIqP8LkP8MQ/LHavyfz5O4eUSUSFoWNcAqB0WnsmooDXMANiczWOzjjRDqhf9RHI1OWA3T1eoFLGAH7PIAVTzQQCwFYNUaJDQOLBRGj4CCCyJ5okl6iwGrG0ASqdpZAoW8iAGUgSHaMj0oAj81M6LifFUc5Jx8tcOJoAnfa8CFRV1CXElkNVVX2lHuYTGnKQEFd8SKjviJQ6qngGSD5WVDcZrwLRZ9PpZSqQPVgnmj9de4Q+kp2gy0fVySm6vL+VTkrv1C8/p2WXyEKXn074erpWKfpg1ZxUJZRiOhWTifKMEnphSlvrC9srOyUOm+2VtaVgOvbKnjNHcxcdjto5c+UwMt3XBzrtORnKRpTkxVHIIbsMj+i4nhKHYS8d/ioOvpSO2RwHq+6iwlmWITUeoCJQw8LaEvG6OkOrBdCwTeBh+e5TcC4Dw9zcge9BeYaat3iE7W51hr3ccVym4gx/qqUv8TyanIRRqBRdcQ3Hxbm5OCOSp2owaX2wvv2Xja6ahDNSuRCKjoXg7L//f54CVlA4IHIHAACwKACdASqAAIAAPlEkkEWjoiGTST0YOAUEoA1fIQfqvZTa57fyGW9PeP90OkinbzF+UP87/Q/yk+AH9V9mfmC/p5/hPzA9zP1a+YD+Wf13/Xf6L2M/2c9yPoAfrV1iXoMfwf+x+mH+2HwSftD+0/wFfrd/7+sAs5dANxsoF2Qp/XuKnjE8Gvwf1Gf6x/wvUPz4PRP7B/AP/Mf6v/0OuF+5Hsi/ryxHk0B48YBTRtdB5WCf3dKxN+Z3e0Bap21U4g0QNgmgt9PszIvWmrmvDr/zjzLxO1+KHiMxSwKbP/CmfQapmXy8GPwlWwZzWyDJKSzuSxG3oImZ+aAV5K6ukJTpOOPfUdUnNUrs2CTonYo1/mdtQnYigkahltolBX+gz3dswlpDn7EPz3ifxMbj6L/yfEgMvWzgisK1N1dy/5lC7Zwr0NTM81DtakR50uAAAP7+pTZc//8cSrMe16Db1wMrZOlPVcrZyaAcPVhS95237FTuuF4m977CEVAwBMUJwFRGDoEKQipeVQdPqKdnp9YwI89N2eTzoo27BX3l7acdt+NGQnnZqQnzMeC4MS7ryzaHFab9GApUauHd9b9i37aLi79SW9CeZWyZGfdtJaSaE1b467r48k/kEszB3I0cGm0JQq+Hlbn+SCl5MG63ApAqG8Lud8FVHMrY5xH0PC4ah5djicc1c/XvyZJAVH+KbeG19UFXrf8X1ffTOuOjvVCn8bFf8T5gUAZ5rOo4daVYTbhMt1efaL2SetLP+XRxxDPNYwYHbD7K5eOKdAFOQ+mG4MKDXvQJBAC50HrqnKo9O405Q8Z8O/+ZRXeFiV6vKdDVGdVUluUVIq3t7wryRVmKAwiDOc1qi9TnXHTUWfXCeCFNC7Y5EPmc7li11DywVw84gE+NnXo/p8YDJM4SBeFEznUonSd2j9ie/azILWu7JVZfb+zlEWKboli0MsIBUYOS3KQsZ7779L9ogSjLn4n49yfimFO1AYn3qOz+HlTle3rPzLols3XLqkvp5yFLLr31gT+lHXXiEAXgAFn2JWJepcnEq0CfPs9nhwmhMoh4Am5PzzVXbe1RK/RYnKIoEz5YEv3yEl7PEw3+g3+Nvdx7dXV+61BaRRFYdprsKFb2Q9og3it+vCd4r4npE3l0a6SuBklxIiRQ7McizSDzhUgm2joVcDjjjFjF3Rp+1asiMHqJ6Tlz46aRB+F/FvPJq24HNEM+vKuhmpOdKnC3EWm8UT334DI8ItBX/MMxgirhjjGH2XxvjVEGwOymA93sFadiIimsN+u6QrXwl12/vMeuYr33Tr8mJEdp6tRVYZFXxEfc41n0meSi2ibjmu0wBtu1iqjnRan5xKMGDonKLqcAFzGILwkdHc3/Yewg6OY4zVMpmIvq2FIVieitjQbY8LW9nsKes5pOGr7tQQ6MqWAVW2eBIPJl8PmShHRgYzrjD9eWeQ6uINH+sp1XeWhsy1c64ummq+LnJCaV7HoqnQKiRjS1LFyxFPyvzKOpb03K1Z/Fj8v8Z66/SwiLAt+EtdhfrgPWxb69TZSFv+srYe/kve4aU6WzJGW7qUid4BiKSiHlvbo3MJFq2c/5PYveMTFX8qUtyBRDX5pevb//fG/6xm2ymF0XRY4/lyUprmi0po9xoz5IzHz368qsmPl+g3lCG29YWnJGFX/HviGuKm5o1ZdOTiPu/V6G20ih+v8fMnUDhJ6T5D530RgLx8n6Ya4xMDvuVlf4/6tmAJne81CE+mV00oIXwEoPYBt8sEvGb6bkPBm+er+sYRy0WDSKdt7Jb/wxos7jYmqiHy96cp6mmRa7nARocgS+eOzmcRhceaUf00neRyBWf2pvNc/VOnUir2hvXD1I8sZ9WsZ2cko1O1qM9SQX5LmBk+VE6lDUfMB8NuaZrMFye30QJXYrRnMDhPHRQMYJeP39qXPPhTCbeK56GkFc/vBXz4/ByRaOYorLlSw62qs4CF+GguMponNWuIIOuxmMgkZXOg9KeKzHzK+QfzxtQDPnlI0vTocV6YvIQoqxevmEdQ+ZJ/tYfBkXGNEuH12Wyv/+Dmmj/vJ6o3vP7gPfWbMvDH445D3Nw/lCYSNTKJ7ZJxwVDNbcLSKYgGgNigtMh/erRSzs7AY7IJ5R2y/i0uN/YcWF+SdBga8mdvUVlPg8adxHMXRo6hcgg3SL97JJCLeOmQGgt0Pj9EFVKXA/FZH0lQ7WuU1WnnwhnBX97rNb+77R/HstinK6Vy4/ZE3F/r3s6qEPQsJoEqArQO1BLIKS6TucRxCwFIP/cUvW49Onm283s/qdn4YhPbidHpkFW1rd6nkG+MwD1qe9h80gBM0MJx0cR5e7G2dVtUNurZqIXpXx2jABNlADHjbqBYcAGR93bylmP89clRe0pLc78uD/r4yf8vygxwrqooTDCnFh045zBwvryQ7xk1M3D7sYJAHyU6H74HI4eL/iITAjvoT8f+6klN4/114TfGrAYuX+b89XZEdxQSqx+bsya/c9Udon6nBJcRIqCfYPh7JysWSPhAAAAAAAAAAA", _l = Yn, xl = Yn;
var Sl = /* @__PURE__ */ Y('<img alt="Chat" class="button-logo svelte-bkcus6"/>'), kl = /* @__PURE__ */ No('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-bkcus6"><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor" class="svelte-bkcus6"></path></svg>'), El = /* @__PURE__ */ Y('<span class="unread-indicator svelte-bkcus6"></span>'), Tl = /* @__PURE__ */ Y("<button><!> <!></button>");
const Il = {
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
    /* When open, use blue border to match header */background:var(--widget-primary);border-color:var(--widget-primary);}.floating-button.open.svelte-bkcus6::after {box-shadow:0 0 20px rgba(var(--widget-primary-rgb), 0.5);}

  /* Enhancement 2: Delayed gentle bounce animation */
  @keyframes svelte-bkcus6-attentionBounce {
    0%, 100% { transform: translateY(0); }
    30% { transform: translateY(-8px); }
    50% { transform: translateY(-4px); }
    70% { transform: translateY(-6px); }
  }.attention-bounce.svelte-bkcus6 {
    animation: svelte-bkcus6-attentionBounce 0.5s var(--widget-ease-spring);}.floating-button.svelte-bkcus6 svg:where(.svelte-bkcus6) {width:24px;height:24px;transition:transform 0.25s var(--widget-ease-spring);position:relative;z-index:1;
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
      animation: none;}.attention-bounce.svelte-bkcus6 {
      animation: none;}.floating-button.svelte-bkcus6::after {transition:none;opacity:0.7;}.floating-button.svelte-bkcus6 {
      animation: none;}
  }`
};
function Gn(t, e) {
  vt(e, !0), Ft(t, Il);
  let i = ft(e, "onclick", 7);
  const s = /* @__PURE__ */ Ie(() => H.isOpen), r = /* @__PURE__ */ Ie(() => H.hasUnreadMessages);
  let n = /* @__PURE__ */ C(!1), a = /* @__PURE__ */ C("");
  ct(() => {
    if (b(s) || b(n)) return;
    const v = setTimeout(
      () => {
        k(a, "attention-bounce"), k(n, !0), setTimeout(() => k(a, ""), 600);
      },
      1e4
    );
    return () => clearTimeout(v);
  });
  function o() {
    var v;
    (v = i()) == null || v();
  }
  var l = {
    get onclick() {
      return i();
    },
    set onclick(v) {
      i(v), qe();
    }
  }, d = Tl();
  let u;
  d.__click = o;
  var h = B(d);
  {
    var g = (v) => {
      var y = Sl();
      gt(() => Ye(y, "src", _l)), z(v, y);
    }, p = (v) => {
      var y = kl();
      z(v, y);
    };
    Te(h, (v) => {
      b(s) ? v(p, !1) : v(g);
    });
  }
  var f = G(h, 2);
  {
    var w = (v) => {
      var y = El();
      z(v, y);
    };
    Te(f, (v) => {
      b(r) && !b(s) && v(w);
    });
  }
  return V(d), gt(() => {
    u = cr(d, 1, `floating-button ${b(a) ?? ""}`, "svelte-bkcus6", u, { open: b(s) }), Ye(d, "aria-label", b(s) ? "Close chat" : "Open chat");
  }), z(t, d), mt(l);
}
Ss(["click"]);
Wt(Gn, { onclick: {} }, [], [], !0);
class Cl {
  constructor(e) {
    this.isDebugMode = e.debug ?? !1;
  }
  /**
   * Log debug information - only shows in debug mode
   */
  log(e, i, s) {
    this.isDebugMode && (s !== void 0 ? console.log(`[${e}] ${i}:`, s) : console.log(`[${e}] ${i}`));
  }
  /**
   * Log warning information - only shows in debug mode
   */
  warn(e, i, s) {
    this.isDebugMode && (s !== void 0 ? console.warn(`[${e}] ${i}:`, s) : console.warn(`[${e}] ${i}`));
  }
  /**
   * Log error information - always shows (even in production)
   */
  error(e, i, s) {
    s !== void 0 ? console.error(`[${e}] ${i}:`, s) : console.error(`[${e}] ${i}`);
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
function hr(t) {
  return new Cl(t);
}
function Ls() {
  var t;
  try {
    return typeof process < "u" && ((t = process.env) == null ? void 0 : t.NODE_ENV) === "test" ? process.env.ENABLE_TEST_DEBUG === "true" : localStorage.getItem("ai-widget-debug") === "true" || window._aiWidgetDebug === !0 || !1;
  } catch {
    return !1;
  }
}
const D = {
  isDebugEnabled: Ls,
  log: (t, e, i) => {
    Ls() && (i !== void 0 ? console.log(`[${t}] ${e}:`, i) : console.log(`[${t}] ${e}`));
  },
  warn: (t, e, i) => {
    Ls() && (i !== void 0 ? console.warn(`[${t}] ${e}:`, i) : console.warn(`[${t}] ${e}`));
  },
  error: (t, e, i) => {
    i !== void 0 ? console.error(`[${t}] ${e}:`, i) : console.error(`[${t}] ${e}`);
  }
};
class Vt {
  constructor() {
    this.currentId = null, this.messageMap = /* @__PURE__ */ new Map();
  }
  /**
   * Get singleton instance
   */
  static getInstance() {
    return Vt.instance || (Vt.instance = new Vt()), Vt.instance;
  }
  /**
   * Generate a new correlation ID
   */
  generate() {
    const e = Date.now(), i = Math.random().toString(36).substr(2, 9), s = `msg_${e}_${i}`;
    return this.currentId = s, s;
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
  setData(e, i) {
    this.messageMap.set(e, i);
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
    const i = `api_${Date.now()}_fallback`;
    return this.currentId = i, i;
  }
  /**
   * Clean up old correlation data (call periodically to prevent memory leaks)
   */
  cleanup(e = 3e5) {
    const i = Date.now();
    for (const [s] of this.messageMap.entries()) {
      const r = s.match(/(\d+)/);
      if (r) {
        const n = parseInt(r[1], 10);
        i - n > e && this.messageMap.delete(s);
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
function je() {
  return Vt.getInstance();
}
class Al {
  /**
   * Validate message content and length
   */
  static validate(e) {
    const i = je().getCurrent();
    if (D.log("MessageValidator", "validate() called", {
      correlationId: i,
      message: e,
      messageType: typeof e,
      messageLength: (e == null ? void 0 : e.length) || 0,
      isNullOrUndefined: e == null
    }), typeof e != "string") {
      const a = "Message is required and must be a string";
      return D.log("MessageValidator", "Validation failed - invalid type", { correlationId: i, message: e, error: a }), {
        isValid: !1,
        error: a
      };
    }
    if (e.length === 0) {
      const a = "Message is too short";
      return D.log("MessageValidator", "Validation failed - empty string", { correlationId: i, message: e, error: a }), {
        isValid: !1,
        error: a
      };
    }
    const s = e.trim();
    if (D.log("MessageValidator", "After trimming", {
      correlationId: i,
      original: e,
      trimmed: s,
      originalLength: e.length,
      trimmedLength: s.length,
      wasWhitespaceOnly: e.length > 0 && s.length === 0
    }), s.length < _t.MIN_LENGTH) {
      const a = "Message is too short";
      return D.log("MessageValidator", "Validation failed - too short", {
        correlationId: i,
        trimmedLength: s.length,
        minLength: _t.MIN_LENGTH,
        error: a
      }), {
        isValid: !1,
        error: a
      };
    }
    if (s.length > _t.MAX_LENGTH) {
      const a = `Message exceeds maximum length of ${_t.MAX_LENGTH} characters`;
      return D.log("MessageValidator", "Validation failed - too long", {
        correlationId: i,
        trimmedLength: s.length,
        maxLength: _t.MAX_LENGTH,
        error: a
      }), {
        isValid: !1,
        error: a
      };
    }
    D.log("MessageValidator", "Starting HTML sanitization", {
      correlationId: i,
      inputContent: s,
      inputLength: s.length
    });
    const r = this.sanitizeHTML(s);
    D.log("MessageValidator", "HTML sanitization complete", {
      correlationId: i,
      original: s,
      sanitized: r,
      originalLength: s.length,
      sanitizedLength: r.length,
      contentRemoved: s.length !== r.length,
      contentChanged: s !== r,
      removedContent: s.length !== r.length ? {
        removed: s.replace(r, ""),
        difference: s.length - r.length
      } : null
    });
    const n = {
      isValid: !0,
      sanitizedValue: r
    };
    return D.log("MessageValidator", "Final validation result", { correlationId: i, result: n }), n;
  }
  /**
   * Basic HTML sanitization
   */
  static sanitizeHTML(e) {
    const i = je().getCurrent();
    D.log("MessageValidator", "sanitizeHTML() input", {
      correlationId: i,
      input: e,
      inputLength: e.length
    });
    let s = e, r = 0;
    const n = s;
    s = s.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ""), s !== n && D.log("MessageValidator", `Step ${++r} - Removed script tags`, {
      correlationId: i,
      before: n,
      after: s,
      removed: n.length - s.length
    });
    const a = s;
    s = s.replace(/href\s*=\s*["']javascript:[^"']*["']/gi, 'href=""'), s !== a && D.log("MessageValidator", `Step ${++r} - Removed javascript: protocol`, {
      correlationId: i,
      before: a,
      after: s,
      removed: a.length - s.length
    });
    const o = s;
    s = s.replace(/\s*on\w+\s*=\s*["'][^"']*["']/gi, ""), s !== o && D.log("MessageValidator", `Step ${++r} - Removed event handlers:`, {
      correlationId: i,
      before: o,
      after: s,
      removed: o.length - s.length
    });
    const l = s;
    return s = s.replace(/src\s*=\s*["']data:[^"']*["']/gi, 'src=""'), s !== l && D.log("MessageValidator", `Step ${++r} - Removed data: URLs:`, {
      correlationId: i,
      before: l,
      after: s,
      removed: l.length - s.length
    }), D.log("MessageValidator", "sanitizeHTML() result", {
      correlationId: i,
      originalInput: e,
      finalResult: s,
      inputLength: e.length,
      resultLength: s.length,
      totalRemoved: e.length - s.length,
      wasModified: e !== s
    }), s;
  }
}
class Kn {
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
class we extends Error {
  constructor(e, i, s = !1) {
    super(e), this.name = "ChatWidgetError", this.context = i, this.timestamp = /* @__PURE__ */ new Date(), this.isRetryable = s, Error.captureStackTrace && Error.captureStackTrace(this, we);
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
class Bt extends we {
  constructor(e, i, s, r) {
    super(e, { ...r, statusCode: i, endpoint: s }, !0), this.name = "NetworkError", this.statusCode = i, this.endpoint = s;
  }
}
class Xn extends we {
  constructor(e, i, s, r, n) {
    super(e, { ...n, wsUrl: i, closeCode: s, closeReason: r }, !0), this.name = "WebSocketError", this.wsUrl = i, this.closeCode = s, this.closeReason = r;
  }
}
class Ni extends we {
  constructor(e, i, s, r, n) {
    super(e, { ...n, field: i, value: s, expectedType: r }, !1), this.name = "ValidationError", this.field = i, this.value = s, this.expectedType = r;
  }
}
class Jn extends we {
  constructor(e, i, s, r) {
    super(e, { ...r, configKey: i, configValue: s }, !1), this.name = "ConfigurationError", this.configKey = i, this.configValue = s;
  }
}
class Qn extends we {
  constructor(e, i, s, r) {
    super(e, { ...r, clientId: i, statusCode: s }, !1), this.name = "AuthenticationError", this.clientId = i, this.statusCode = s;
  }
}
class Yt extends we {
  constructor(e, i, s, r) {
    super(e, { ...r, retryAfter: i, limit: s }, !0), this.name = "RateLimitError", this.retryAfter = i, this.limit = s;
  }
}
class Zn extends we {
  constructor(e, i, s, r) {
    super(e, { ...r, storageType: i, operation: s }, !0), this.name = "StorageError", this.storageType = i, this.operation = s;
  }
}
class ea extends we {
  constructor(e, i, s, r) {
    super(e, { ...r, timeout: i, operation: s }, !0), this.name = "TimeoutError", this.timeout = i, this.operation = s;
  }
}
function zr(t) {
  return t instanceof we ? t.isRetryable : !!(t instanceof TypeError && t.message.includes("fetch"));
}
function Ml(t) {
  return t instanceof we ? {
    name: t.name,
    message: t.message,
    context: t.context,
    timestamp: t.timestamp,
    isRetryable: t.isRetryable
  } : t instanceof Error ? {
    name: t.name,
    message: t.message,
    stack: t.stack
  } : {
    error: String(t),
    type: typeof t
  };
}
function Ll(t) {
  return t instanceof Bt ? t.statusCode === 404 ? "Service temporarily unavailable. Please try again later." : t.statusCode === 429 || t instanceof Yt ? "Too many requests. Please wait a moment and try again." : t.statusCode && t.statusCode >= 500 ? "Server error. Please try again in a few moments." : t.statusCode && (t.statusCode === 400 || t.statusCode === 401 || t.statusCode === 403) ? t.message : "Unable to connect to the server. Please check your internet connection." : t instanceof Xn ? "Connection lost. Attempting to reconnect..." : t instanceof Qn ? "Access denied. Please check your configuration." : t instanceof Ni ? t.message : t instanceof Jn ? "Widget configuration error. Please contact support." : t instanceof ea ? "Request timed out. Please try again." : t instanceof Zn ? "Unable to save data. Please check your browser settings." : "Something went wrong. Please try again.";
}
class zi {
  /**
   * Process and categorize errors using custom error classes
   */
  static handle(e, i) {
    const s = Ml(e);
    let r;
    return e instanceof Bt ? r = "NETWORK_ERROR" : e instanceof Xn ? r = "WEBSOCKET_ERROR" : e instanceof Ni ? r = "VALIDATION_ERROR" : e instanceof Jn ? r = "CONFIGURATION_ERROR" : e instanceof Qn ? r = "AUTHENTICATION_ERROR" : e instanceof Yt ? r = "RATE_LIMIT_ERROR" : e instanceof Zn ? r = "STORAGE_ERROR" : e instanceof ea ? r = "TIMEOUT_ERROR" : e instanceof we ? r = "WIDGET_ERROR" : r = "UNKNOWN_ERROR", {
      message: Ll(e),
      code: r,
      isUserFacing: !0,
      shouldRetry: zr(e),
      context: {
        ...i,
        metadata: {
          ...i.metadata,
          errorDetails: s
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
    return e && typeof e == "object" && "shouldRetry" in e ? e.shouldRetry : zr(e);
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
const Ol = "https://ai-gateway-service-staging-639717727892.us-east4.run.app";
class Gs {
  // Production URL configured via VITE_API_BASE_URL environment variable
  // Falls back to DEFAULT_GATEWAY_URL if not set
  /**
   * Resolve API and WebSocket URLs based on client ID and environment
   */
  static resolveUrls(e, i = {}) {
    const s = Kn.validate(e);
    if (!s.isValid)
      throw new Error(`Invalid client ID for URL resolution: ${s.error}`);
    const r = s.sanitizedValue;
    return this.isDevelopmentEnvironment(i.environment) ? this.resolveDevelopmentUrls(r) : this.resolveProductionUrls(r);
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
    const i = Ol, s = this.isLocalhostUrl(i) ? i : this.ensureHttps(i);
    return {
      apiUrl: this.buildApiUrl(s, e),
      wsUrl: this.buildWsUrl(s, e)
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
  static buildApiUrl(e, i) {
    return this.buildUrlWithPath(e, `/api/v1/widget/${i}`);
  }
  /**
   * Build WebSocket URL by properly appending path to base URL and converting protocol
   */
  static buildWsUrl(e, i) {
    const s = this.buildUrlWithPath(e, `/api/v1/communication/${i}/ws`);
    return this.convertToWebSocket(s);
  }
  /**
   * Safely append a path to a base URL, handling query parameters and fragments correctly
   */
  static buildUrlWithPath(e, i) {
    try {
      const s = new URL(e);
      return s.pathname = (s.pathname === "/" ? "" : s.pathname) + i, s.toString();
    } catch {
      const r = e.endsWith("/") ? "" : "/";
      return e + r + i.substring(1);
    }
  }
  /**
   * Convert HTTP/HTTPS URL to WS/WSS URL
   */
  static convertToWebSocket(e) {
    try {
      const i = new URL(e);
      return i.protocol === "https:" ? i.protocol = "wss:" : i.protocol === "http:" && (i.protocol = "ws:"), i.toString();
    } catch {
      return e.replace("https://", "wss://").replace("http://", "ws://");
    }
  }
  /**
   * Check if URL points to localhost
   */
  static isLocalhostUrl(e) {
    try {
      const i = new URL(e);
      return ["localhost", "127.0.0.1", "::1"].includes(i.hostname);
    } catch {
      return e.includes("localhost") || e.includes("127.0.0.1");
    }
  }
}
class $l {
  constructor(e) {
    try {
      const i = window, s = i.AIChat || i.ChatWidget || {}, r = e ? this.parseElementAttributes(e) : {}, n = {
        ...De,
        ...s,
        ...r
      };
      if ((s.apiUrl || s.wsUrl) && console.warn(
        `[Assistant Widget] Deprecation Warning: window.AIChat.apiUrl and window.AIChat.wsUrl are no longer supported.
URL configuration is now handled at build time via VITE_API_BASE_URL environment variable.
For local development: npm run build:local
For production: npm run build (uses default staging gateway)`
      ), !n.clientId)
        throw new Error("Widget configuration missing: clientId is required");
      const a = Kn.validate(n.clientId);
      if (!a.isValid)
        throw new Error(`Invalid client ID: ${a.error}`);
      const o = Gs.resolveUrls(a.sanitizedValue);
      this.config = {
        ...n,
        clientId: a.sanitizedValue,
        ...o
      };
    } catch (i) {
      const s = zi.handle(i, {
        component: "ConfigManager",
        action: "constructor"
      });
      throw new Error(s.message);
    }
  }
  /**
   * Parse HTML element attributes into configuration object
   * Uses unified configuration attribute mapping
   */
  parseElementAttributes(e) {
    const i = {}, s = e.getAttributeNames();
    for (const r of s) {
      const n = Hn.attributeToProperty(r);
      if (!n) continue;
      const a = e.getAttribute(r);
      if (a)
        switch (n) {
          case "clientId":
          case "title":
          case "logoUrl":
          case "placeholder":
          case "accentColor":
          case "avatarEmoji":
            i[n] = a;
            break;
          case "theme":
            jn(a) && (i.theme = a);
            break;
          case "position":
            (a === "bottom-left" || a === "bottom-right") && (i.position = a);
            break;
          case "debug":
          case "autoInit":
            i[n] = a === "true" || a === "";
            break;
          case "companyName":
            i.companyName = a, e.hasAttribute("title") || (i.title = `${a} Assistant`);
            break;
        }
    }
    return i;
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
const Si = /* @__PURE__ */ new Map();
let Hi = !1;
function Pl() {
  try {
    const t = "__storage_test__";
    return localStorage.setItem(t, t), localStorage.removeItem(t), !0;
  } catch {
    return !1;
  }
}
Hi = !Pl();
function Rl(t) {
  try {
    return Hi ? Si.get(t) ?? null : localStorage.getItem(t);
  } catch {
    return Si.get(t) ?? null;
  }
}
function Dl(t, e) {
  try {
    return Hi ? (Si.set(t, e), !0) : (localStorage.setItem(t, e), !0);
  } catch {
    return Si.set(t, e), Hi = !0, !1;
  }
}
function Nl(t) {
  try {
    if (Hi) {
      Si.delete(t);
      return;
    }
    localStorage.removeItem(t);
  } catch {
    Si.delete(t);
  }
}
const Me = class Me {
  /**
   * @param storageAdapter - Optional storage adapter for testing (defaults to localStorage via safe utils)
   */
  constructor(e) {
    this.storageAdapter = e, this.visitorId = this.getOrCreateVisitorId();
  }
  getOrCreateVisitorId() {
    var i;
    let e = this.getItem(Me.VISITOR_ID_KEY);
    return e || (e = this.generateVisitorId(), this.setItem(Me.VISITOR_ID_KEY, e), (i = window.AIChat) != null && i.debug && D.log("ChatWidget", "Created new visitor", e)), e;
  }
  /**
   * Internal storage access methods that use adapter if available
   */
  getItem(e) {
    return this.storageAdapter ? this.storageAdapter.getItem(e) : Rl(e);
  }
  setItem(e, i) {
    this.storageAdapter ? this.storageAdapter.setItem(e, i) : Dl(e, i);
  }
  removeItem(e) {
    this.storageAdapter ? this.storageAdapter.removeItem(e) : Nl(e);
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
    const i = this.getSessionHistory();
    i.push({
      id: e,
      timestamp: Date.now(),
      active: !0
    });
    const s = i.slice(-10);
    this.setItem(
      Me.SESSION_HISTORY_KEY,
      JSON.stringify(s)
    );
  }
  getSessionHistory() {
    const e = this.getItem(Me.SESSION_HISTORY_KEY);
    return e ? JSON.parse(e) : [];
  }
  getLastActiveSession() {
    const i = this.getSessionHistory().filter(
      (s) => s.active && Date.now() - s.timestamp < J.SESSION_TIMEOUT
    );
    return i.length > 0 ? i[i.length - 1].id : null;
  }
  /**
   * Mark a session as inactive when it ends
   */
  markSessionInactive(e) {
    const s = this.getSessionHistory().map(
      (r) => r.id === e ? { ...r, active: !1 } : r
    );
    this.setItem(
      Me.SESSION_HISTORY_KEY,
      JSON.stringify(s)
    );
  }
  /**
   * Clear visitor data for GDPR compliance
   */
  clearVisitorData() {
    this.removeItem(Me.VISITOR_ID_KEY), this.removeItem(Me.SESSION_HISTORY_KEY), this.visitorId = this.generateVisitorId();
  }
};
Me.VISITOR_ID_KEY = Dr.VISITOR_ID, Me.SESSION_HISTORY_KEY = Dr.SESSIONS;
let Ks = Me;
class Pi {
  /**
   * Get API endpoint URL with base path resolved
   */
  static getApiUrl(e, i) {
    const { apiUrl: s } = Gs.resolveUrls(i.clientId, i.options);
    switch (e) {
      case "init":
        return `${s}/init`;
      case "chat":
        return `${s}/chat`;
      case "sessionHealth":
        if (!i.sessionId)
          throw new Error("sessionId required for sessionHealth endpoint");
        return `${s}/session/${i.sessionId}/health`;
      default:
        throw new Error(`Unknown API endpoint: ${e}`);
    }
  }
  /**
   * Get WebSocket URL with query parameters
   */
  static getWebSocketUrl(e) {
    const { wsUrl: i } = Gs.resolveUrls(e.clientId, e.options), s = new URLSearchParams({
      session_id: e.sessionId
    });
    return e.visitorId && s.append("visitor_id", e.visitorId), `${i}?${s}`;
  }
}
var ie = /* @__PURE__ */ ((t) => (t.DISCONNECTED = "disconnected", t.CONNECTING = "connecting", t.CONNECTED = "connected", t.ERROR = "error", t))(ie || {});
class zl {
  constructor(e, i) {
    this.ws = null, this.sessionId = null, this.state = "disconnected", this.messageQueue = [], this.reconnectAttempts = 0, this.maxReconnectAttempts = J.MAX_RECONNECT_ATTEMPTS, this.reconnectDelay = J.RECONNECT_DELAY, this.heartbeatInterval = null, this.listeners = /* @__PURE__ */ new Map(), this.abortController = null, this.cleanupFunctions = [], this.visibilityChangeHandler = null, this.pendingPongTimeout = null, this.config = e, this.visitor = i, this.debugLogger = hr(e.getAll()), this.setupVisibilityChangeListener();
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
        const i = Pi.getWebSocketUrl({
          clientId: this.config.clientId,
          sessionId: e,
          visitorId: this.visitor.getVisitorId()
        });
        this.ws = new WebSocket(i), this.setupEventHandlers();
      } catch (i) {
        const s = zi.handle(i, {
          component: "WebSocketManager",
          action: "connect",
          sessionId: e
        });
        this.debugLogger.error("WebSocketManager", "WebSocket connection failed", s.message), this.setState(
          "error"
          /* ERROR */
        ), this.scheduleReconnect();
      }
    }
  }
  setupEventHandlers() {
    this.ws && (this.ws.onopen = () => {
      var e, i, s;
      this.debugLogger.log("WebSocketManager", "WebSocket connected successfully", {
        url: (e = this.ws) == null ? void 0 : e.url,
        readyState: (i = this.ws) == null ? void 0 : i.readyState,
        sessionId: this.sessionId,
        messageListeners: ((s = this.listeners.get("message")) == null ? void 0 : s.size) || 0,
        totalListeners: this.listeners.size,
        timestamp: Date.now()
      }), this.setState(
        "connected"
        /* CONNECTED */
      ), this.reconnectAttempts = 0, this.flushMessageQueue(), this.startHeartbeat();
    }, this.ws.onmessage = (e) => {
      var i, s, r, n, a, o, l, d, u;
      this.debugLogger.log("WebSocketManager", "Raw message received", {
        data: e.data,
        type: typeof e.data,
        length: ((i = e.data) == null ? void 0 : i.length) || 0,
        timestamp: Date.now(),
        wsReadyState: (s = this.ws) == null ? void 0 : s.readyState,
        sessionId: this.sessionId
      });
      try {
        const h = JSON.parse(e.data);
        this.debugLogger.log("WebSocketManager", "Parsed message", {
          message: h,
          messageType: h.type,
          content: (r = h.data) == null ? void 0 : r.content,
          hasContent: !!((n = h.data) != null && n.content),
          contentLength: ((o = (a = h.data) == null ? void 0 : a.content) == null ? void 0 : o.length) || 0,
          hasError: h.type === "error",
          metadata: (l = h.data) == null ? void 0 : l.metadata
        }), this.debugLogger.log("WebSocketManager", "Emitting to listeners", {
          listenerCount: ((d = this.listeners.get("message")) == null ? void 0 : d.size) || 0,
          hasMessageListeners: this.listeners.has("message"),
          allListenerTypes: Array.from(this.listeners.keys())
        }), this.emit("message", h), this.debugLogger.log("WebSocketManager", "Message emission completed successfully");
      } catch (h) {
        this.debugLogger.error("WebSocketManager", "Parse error", {
          error: h instanceof Error ? h.message : String(h),
          rawData: e.data,
          rawDataType: typeof e.data,
          rawDataLength: ((u = e.data) == null ? void 0 : u.length) || 0
        });
      }
    }, this.ws.onerror = (e) => {
      var i, s;
      this.debugLogger.error("WebSocketManager", "WebSocket error details", {
        error: e,
        errorType: e.type,
        readyState: (i = this.ws) == null ? void 0 : i.readyState,
        url: (s = this.ws) == null ? void 0 : s.url,
        sessionId: this.sessionId,
        connectionState: this.state,
        timestamp: Date.now()
      }), this.setState(
        "error"
        /* ERROR */
      );
    }, this.ws.onclose = (e) => {
      var i;
      this.debugLogger.log("WebSocketManager", "WebSocket closed details", {
        code: e.code,
        reason: e.reason,
        wasClean: e.wasClean,
        readyState: (i = this.ws) == null ? void 0 : i.readyState,
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
    const e = (i) => {
      i.type === "pong" && (this.debugLogger.log("WebSocketManager", "Connection verified - pong received"), this.pendingPongTimeout && (clearTimeout(this.pendingPongTimeout), this.pendingPongTimeout = null), this.off("message", e));
    };
    this.on("message", e), this.pendingPongTimeout = window.setTimeout(() => {
      this.debugLogger.warn("WebSocketManager", "No pong received - connection appears stale, reconnecting"), this.off("message", e), this.pendingPongTimeout = null, this.cleanup(), this.reconnect();
    }, J.VISIBILITY_PING_TIMEOUT);
    try {
      this.ws.send(JSON.stringify({ type: "ping" }));
    } catch (i) {
      this.debugLogger.error("WebSocketManager", "Failed to send verification ping", i), this.off("message", e), this.pendingPongTimeout && (clearTimeout(this.pendingPongTimeout), this.pendingPongTimeout = null), this.reconnect();
    }
  }
  /**
   * Send message through WebSocket
   */
  send(e) {
    var r, n, a;
    const i = je().getCurrent();
    this.debugLogger.log("WebSocketManager", "send() called", {
      correlationId: i,
      message: e,
      messageLength: (e == null ? void 0 : e.length) || 0,
      messageType: typeof e,
      wsState: this.state,
      wsReadyState: (r = this.ws) == null ? void 0 : r.readyState,
      sessionId: this.sessionId
    });
    const s = JSON.stringify({
      type: "message",
      message: e,
      correlation_id: i,
      timestamp: Date.now()
    });
    if (this.debugLogger.log("WebSocketManager", "JSON payload created", {
      correlationId: i,
      data: s,
      dataLength: s.length,
      parsedBack: JSON.parse(s)
    }), this.state === "connected" && ((n = this.ws) == null ? void 0 : n.readyState) === WebSocket.OPEN)
      this.debugLogger.log("WebSocketManager", "Sending via WebSocket immediately", { correlationId: i }), this.ws.send(s);
    else {
      if (this.debugLogger.log("WebSocketManager", "WebSocket not ready, queuing message", {
        correlationId: i,
        state: this.state,
        readyState: (a = this.ws) == null ? void 0 : a.readyState,
        queueLength: this.messageQueue.length
      }), this.messageQueue.length >= _t.MAX_QUEUE_SIZE) {
        this.debugLogger.warn("WebSocketManager", "Message queue full", {
          queueSize: this.messageQueue.length,
          maxSize: _t.MAX_QUEUE_SIZE
        }), this.emit("error", {
          error: "Too many pending messages. Please wait for connection to restore."
        });
        return;
      }
      this.messageQueue.push(s), this.state === "disconnected" && (this.debugLogger.log("WebSocketManager", "Attempting to reconnect...", { correlationId: i }), this.reconnect());
    }
  }
  flushMessageQueue() {
    var e;
    for (; this.messageQueue.length > 0 && ((e = this.ws) == null ? void 0 : e.readyState) === WebSocket.OPEN; ) {
      const i = this.messageQueue.shift();
      i && this.ws.send(i);
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
    const e = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), i = e ? J.MOBILE_HEARTBEAT_INTERVAL : J.HEARTBEAT_INTERVAL;
    this.debugLogger.log("WebSocketManager", "Starting heartbeat", {
      isMobile: e,
      interval: i,
      intervalSeconds: i / 1e3
    }), this.heartbeatInterval = window.setInterval(() => {
      var s;
      ((s = this.ws) == null ? void 0 : s.readyState) === WebSocket.OPEN && this.ws.send(JSON.stringify({ type: "ping" }));
    }, i), this.cleanupFunctions.push(() => this.stopHeartbeat());
  }
  stopHeartbeat() {
    this.heartbeatInterval && (clearInterval(this.heartbeatInterval), this.heartbeatInterval = null);
  }
  /**
   * Event emitter functionality
   */
  on(e, i) {
    this.listeners.has(e) || this.listeners.set(e, /* @__PURE__ */ new Set()), this.listeners.get(e).add(i);
  }
  off(e, i) {
    var s;
    (s = this.listeners.get(e)) == null || s.delete(i);
  }
  emit(e, i) {
    var s;
    (s = this.listeners.get(e)) == null || s.forEach((r) => r(i));
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
      } catch (i) {
        this.debugLogger.warn("WebSocketManager", "Cleanup function failed", i);
      }
    }), this.cleanupFunctions = [];
  }
  /**
   * Test WebSocket bidirectional communication
   * Sends a test message to verify the connection works both ways
   */
  testConnection() {
    var e, i;
    if (this.state === "connected" && ((e = this.ws) == null ? void 0 : e.readyState) === WebSocket.OPEN) {
      this.debugLogger.log("WebSocketManager", "Testing bidirectional WebSocket communication...");
      const s = JSON.stringify({
        type: "ping",
        message: "connection-test",
        timestamp: Date.now()
      });
      this.debugLogger.log("WebSocketManager", "Sending test ping", s), this.ws.send(s);
    } else
      this.debugLogger.warn("WebSocketManager", "Cannot test connection - WebSocket not ready", {
        state: this.state,
        readyState: (i = this.ws) == null ? void 0 : i.readyState
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
var Ul = /* @__PURE__ */ Y('<header class="chat-header svelte-g5m62x"><div class="header-content svelte-g5m62x"><div role="status"></div> <h2 class="header-title svelte-g5m62x"> </h2></div> <button class="close-button svelte-g5m62x" aria-label="Close chat" type="button"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true" class="svelte-g5m62x"><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor" class="svelte-g5m62x"></path></svg></button></header>');
const Fl = {
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
function ta(t, e) {
  vt(e, !0), Ft(t, Fl);
  let i = ft(e, "onclose", 7), s = ft(e, "connectionState", 23, () => ie.DISCONNECTED), r = ft(e, "connectionFailed", 7, !1);
  const n = /* @__PURE__ */ Ie(() => {
    if (r()) return "var(--widget-error)";
    switch (s()) {
      case ie.CONNECTED:
        return "var(--widget-success)";
      case ie.CONNECTING:
        return "var(--widget-warning, #ca8a04)";
      case /* Darker yellow for WCAG AA */
      ie.ERROR:
        return "var(--widget-error)";
      default:
        return "var(--widget-text-secondary)";
    }
  }), a = /* @__PURE__ */ Ie(() => {
    if (r()) return "Connection lost";
    switch (s()) {
      case ie.CONNECTED:
        return "Connected";
      case ie.CONNECTING:
        return "Connecting";
      case ie.ERROR:
        return "Connection error";
      case ie.DISCONNECTED:
        return "Disconnected";
      default:
        return "";
    }
  }), o = /* @__PURE__ */ Ie(() => s() === ie.CONNECTING ? "pulse-slow" : s() === ie.ERROR ? "blink-slow" : "");
  function l() {
    var v;
    H.close(), (v = i()) == null || v();
  }
  var d = {
    get onclose() {
      return i();
    },
    set onclose(v) {
      i(v), qe();
    },
    get connectionState() {
      return s();
    },
    set connectionState(v = ie.DISCONNECTED) {
      s(v), qe();
    },
    get connectionFailed() {
      return r();
    },
    set connectionFailed(v = !1) {
      r(v), qe();
    }
  }, u = Ul(), h = B(u), g = B(h), p = G(g, 2), f = B(p, !0);
  V(p), V(h);
  var w = G(h, 2);
  return w.__click = l, V(u), gt(() => {
    cr(g, 1, `status-dot ${b(o) ?? ""}`, "svelte-g5m62x"), Jo(g, `--status-color: ${b(n) ?? ""}`), Ye(g, "aria-label", b(a)), Ye(g, "title", b(a)), us(f, ht.title);
  }), z(t, u), mt(d);
}
Ss(["click"]);
Wt(ta, { onclose: {}, connectionState: {}, connectionFailed: {} }, [], [], !0);
var Wl = /* @__PURE__ */ Y('<span class="sending-indicator svelte-1uqoiy7" aria-label="Sending message" role="status"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svelte-1uqoiy7"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="currentColor" opacity="0.3"></path><path d="M12 2C6.48 2 2 6.48 2 12H4C4 7.58 7.58 4 12 4V2Z" fill="currentColor"><animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite"></animateTransform></path></svg></span>'), Hl = /* @__PURE__ */ Y('<span class="failed-indicator svelte-1uqoiy7" aria-label="Message failed to send" role="alert"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svelte-1uqoiy7"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#ef4444"></path><path d="M11 7H13V13H11V7ZM11 15H13V17H11V15Z" fill="#ef4444"></path></svg></span>'), jl = /* @__PURE__ */ Y('<div role="listitem"><div class="message-bubble svelte-1uqoiy7"><span class="message-content"> </span> <!> <!></div> <div class="message-time svelte-1uqoiy7"> </div></div>');
const ql = {
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

  /* Dark theme adjustments - Use CSS variables for maintainability */[data-theme="dark"] .message.assistant.svelte-1uqoiy7 .message-bubble:where(.svelte-1uqoiy7) {background:var(--widget-surface);border-color:var(--widget-border);}`
};
function ia(t, e) {
  vt(e, !0), Ft(t, ql);
  let i = ft(e, "message", 7);
  function s(y) {
    return new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", hour12: !0 }).format(y);
  }
  const r = /* @__PURE__ */ Ie(() => i().role === "user");
  var n = {
    get message() {
      return i();
    },
    set message(y) {
      i(y), qe();
    }
  }, a = jl();
  let o;
  var l = B(a), d = B(l), u = B(d, !0);
  V(d);
  var h = G(d, 2);
  {
    var g = (y) => {
      var M = Wl();
      z(y, M);
    };
    Te(h, (y) => {
      i().status === "sending" && y(g);
    });
  }
  var p = G(h, 2);
  {
    var f = (y) => {
      var M = Hl();
      z(y, M);
    };
    Te(p, (y) => {
      i().status === "failed" && y(f);
    });
  }
  V(l);
  var w = G(l, 2), v = B(w, !0);
  return V(w), V(a), gt(
    (y, M) => {
      o = cr(a, 1, "message svelte-1uqoiy7", null, o, { user: b(r), assistant: !b(r) }), Ye(a, "aria-label", b(r) ? "Your message" : "Assistant message"), us(u, i().content), Ye(w, "aria-label", y), us(v, M);
    },
    [
      () => `Sent at ${s(i().timestamp)}`,
      () => s(i().timestamp)
    ]
  ), z(t, a), mt(n);
}
Wt(ia, { message: {} }, [], [], !0);
no();
var Vl = /* @__PURE__ */ Y('<div class="typing-indicator svelte-ej4x60" role="status" aria-live="polite" aria-label="Assistant is typing"><span aria-hidden="true" class="svelte-ej4x60"></span> <span aria-hidden="true" class="svelte-ej4x60"></span> <span aria-hidden="true" class="svelte-ej4x60"></span> <span class="sr-only svelte-ej4x60">Assistant is typing a response</span></div>');
const Bl = {
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
function sa(t, e) {
  vt(e, !1), Ft(t, Bl), sl();
  var i = zo(), s = ss(i);
  {
    var r = (n) => {
      var a = Vl();
      z(n, a);
    };
    Te(s, (n) => {
      T.isTyping && n(r);
    });
  }
  z(t, i), mt();
}
Wt(sa, {}, [], [], !0);
var Yl = /* @__PURE__ */ Y('<div class="empty-state svelte-qha2j" role="status" aria-label="botbrewers.ca assistant ready"><div class="empty-icon svelte-qha2j" aria-hidden="true"><img alt="" class="brand-logo svelte-qha2j" width="68" height="68"/></div> <span class="brand-name svelte-qha2j">botbrewers.ca</span></div>'), Gl = /* @__PURE__ */ Y('<div class="messages-container svelte-qha2j" role="list" aria-label="Messages"><!> <!></div>'), Kl = /* @__PURE__ */ Y('<div class="error-message svelte-qha2j"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-qha2j"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#ef4444" class="svelte-qha2j"></path><path d="M11 7H13V13H11V7ZM11 15H13V17H11V15Z" fill="#ef4444" class="svelte-qha2j"></path></svg> <p class="svelte-qha2j"> </p></div>'), Xl = /* @__PURE__ */ Y('<div class="message-list svelte-qha2j" role="log" aria-live="polite" aria-label="Chat conversation"><!> <!></div>');
const Jl = {
  hash: "svelte-qha2j",
  code: `.message-list.svelte-qha2j {flex:1;overflow-y:auto;padding:var(--widget-space-lg);display:flex;flex-direction:column;background:var(--widget-gradient-subtle);position:relative;
    /* iOS momentum scrolling */-webkit-overflow-scrolling:touch;}.empty-state.svelte-qha2j {display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;text-align:center;padding:var(--widget-space-3xl) var(--widget-space-lg);
    animation: fadeIn var(--widget-transition-slow);}.empty-icon.svelte-qha2j {width:96px;height:96px;margin-bottom:var(--widget-space-lg);background:#ffffff; /* Always white to match logo background */backdrop-filter:blur(var(--widget-blur));border-radius:var(--widget-radius-2xl);display:flex;align-items:center;justify-content:center;box-shadow:var(--widget-shadow-md);
    animation: svelte-qha2j-float 3s ease-in-out infinite;}

  /* Floating animation for robot logo - creates "hovering assistant" effect */
  @keyframes svelte-qha2j-float {
    0%, 100% {
      transform: translateY(0) scale(1);
    }
    50% {
      transform: translateY(-8px) scale(1.02);
    }
  }.brand-logo.svelte-qha2j {width:68px;height:68px;object-fit:contain;filter:var(--widget-logo-filter, brightness(1));}.brand-name.svelte-qha2j {font-size:var(--widget-font-size-sm);font-weight:var(--widget-font-weight-medium);color:var(--widget-text-secondary);letter-spacing:0.02em;position:relative;
    animation: svelte-qha2j-textPulse 3s ease-in-out infinite;}

  /* Gentle pulse animation synced with floating robot */
  @keyframes svelte-qha2j-textPulse {
    0%, 100% {
      opacity: 0.6;
    }
    50% {
      opacity: 1;
    }
  }.messages-container.svelte-qha2j {display:flex;flex-direction:column;gap:var(--widget-space-md);padding-bottom:var(--widget-space-lg);}.error-message.svelte-qha2j {display:flex;align-items:center;gap:var(--widget-space);padding:var(--widget-space) var(--widget-space-md);background:var(--widget-glass);backdrop-filter:blur(var(--widget-blur));border:1px solid var(--widget-error-light);border-radius:var(--widget-radius-lg);color:var(--widget-error);margin-top:var(--widget-space);box-shadow:var(--widget-shadow);
    animation: slideUp var(--widget-transition-slow);}.error-message.svelte-qha2j svg:where(.svelte-qha2j) {width:20px;height:20px;flex-shrink:0;}.error-message.svelte-qha2j p:where(.svelte-qha2j) {margin:0;font-size:var(--widget-font-size-sm);font-weight:500;}
  
  /* Custom scrollbar */.message-list.svelte-qha2j::-webkit-scrollbar {width:6px;}.message-list.svelte-qha2j::-webkit-scrollbar-track {background:transparent;}.message-list.svelte-qha2j::-webkit-scrollbar-thumb {background:var(--widget-border);border-radius:var(--widget-radius-full);}.message-list.svelte-qha2j::-webkit-scrollbar-thumb:hover {background:var(--widget-text-muted);}

  /* Reduced motion support - respects user accessibility preferences */
  @media (prefers-reduced-motion: reduce) {.empty-icon.svelte-qha2j,
    .empty-state.svelte-qha2j,
    .brand-name.svelte-qha2j {
      animation: none;}
  }

  /* Dark theme adjustments - Use CSS variables for maintainability */
  /* Note: .empty-icon stays white in dark mode to match logo's baked-in white background.
     This creates a clean, intentional "logo badge" appearance. */[data-theme="dark"] .empty-icon.svelte-qha2j {box-shadow:var(--widget-shadow-md);}[data-theme="dark"] .brand-name.svelte-qha2j {color:var(--widget-text-muted);}`
};
function ra(t, e) {
  vt(e, !0), Ft(t, Jl);
  let i, s = !0;
  ct(() => {
    T.messages, s && r();
  }), ct(() => {
    T.isTyping, s && r();
  }), ct(() => {
    T.streamingUpdateSignal, s && T.isStreaming && r();
  });
  async function r() {
    await Pn(), i && (i.scrollTop = i.scrollHeight);
  }
  function n() {
    if (i) {
      const { scrollTop: g, scrollHeight: p, clientHeight: f } = i;
      s = p - g - f < 100;
    }
  }
  fr(() => {
    r();
  });
  var a = Xl(), o = B(a);
  {
    var l = (g) => {
      var p = Yl(), f = B(p), w = B(f);
      V(f), ir(2), V(p), gt(() => Ye(w, "src", xl)), z(g, p);
    }, d = (g) => {
      var p = Gl(), f = B(p);
      Ho(f, 17, () => T.messages, (v) => v.id, (v, y) => {
        ia(v, {
          get message() {
            return b(y);
          }
        });
      });
      var w = G(f, 2);
      sa(w, {}), V(p), z(g, p);
    };
    Te(o, (g) => {
      T.messages.length === 0 ? g(l) : g(d, !1);
    });
  }
  var u = G(o, 2);
  {
    var h = (g) => {
      var p = Kl(), f = G(B(p), 2), w = B(f, !0);
      V(f), V(p), gt(() => us(w, T.error)), z(g, p);
    };
    Te(u, (g) => {
      T.error && g(h);
    });
  }
  V(a), ur(a, (g) => i = g, () => i), Ro("scroll", a, n), z(t, a), mt();
}
Wt(ra, {}, [], [], !0);
var Ql = /* @__PURE__ */ Y('<div class="input-bar svelte-1a8gd73"><div class="input-container svelte-1a8gd73"><textarea class="input-field svelte-1a8gd73" rows="1" aria-label="Message input"></textarea> <button class="send-button svelte-1a8gd73" aria-label="Send message"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-1a8gd73"><path d="M2 21L23 12L2 3V10L17 12L2 14V21Z" fill="currentColor"></path></svg></button></div> <div class="ai-disclaimer svelte-1a8gd73">AI can make mistakes. Please double-check responses.</div></div>');
const Zl = {
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

  /* AI Disclaimer */.ai-disclaimer.svelte-1a8gd73 {padding:var(--widget-space-xs) var(--widget-space-sm);text-align:center;font-size:var(--widget-font-size-xs);color:var(--widget-text-subtle);opacity:0.8;user-select:none;pointer-events:none;margin-top:var(--widget-space-xs);}[data-theme="dark"] .ai-disclaimer.svelte-1a8gd73 {color:var(--widget-text-muted);opacity:0.7;}

  @media (max-width: 767px) {.ai-disclaimer.svelte-1a8gd73 {font-size:0.6875rem; /* 11px */}
  }`
};
function na(t, e) {
  vt(e, !0), Ft(t, Zl);
  let i = ft(e, "onsend", 7), s = ft(e, "disabled", 7, !1), r = /* @__PURE__ */ C(""), n;
  function a() {
    var M, F, P, R;
    const v = je().generate();
    D.log("InputBar", "handleSend() called", {
      correlationId: v,
      rawInputValue: b(r),
      rawLength: ((M = b(r)) == null ? void 0 : M.length) || 0,
      rawType: typeof b(r),
      disabled: s(),
      isTyping: T.isTyping
    });
    const y = b(r).trim();
    D.log("InputBar", "After trimming", {
      correlationId: v,
      original: b(r),
      trimmed: y,
      originalLength: ((F = b(r)) == null ? void 0 : F.length) || 0,
      trimmedLength: (y == null ? void 0 : y.length) || 0,
      wasEmptyAfterTrim: !y,
      hadWhitespaceOnly: (((P = b(r)) == null ? void 0 : P.length) || 0) > 0 && !y
    }), y && !s() && !T.isTyping ? (D.log("InputBar", "Conditions met, calling onsend", {
      correlationId: v,
      trimmedValue: y,
      trimmedLength: y.length,
      willSend: !0
    }), je().setCurrent(v), (R = i()) == null || R(y), k(r, ""), l()) : D.log("InputBar", "Send blocked", {
      correlationId: v,
      hasContent: !!y,
      disabled: s(),
      isTyping: T.isTyping,
      trimmedValue: y || "(empty)",
      reason: y ? s() ? "disabled" : T.isTyping ? "typing in progress" : "unknown" : "empty content"
    });
  }
  function o(v) {
    v.key === "Enter" && !v.shiftKey && (v.preventDefault(), a());
  }
  function l() {
    n && (n.style.height = "auto", n.style.height = Math.min(n.scrollHeight, 120) + "px");
  }
  const d = /* @__PURE__ */ Ie(() => s() || T.isTyping || T.error !== null), u = /* @__PURE__ */ Ie(() => T.isTyping ? "Waiting for response..." : T.error ? "Error occurred" : ht.placeholder);
  var h = {
    get onsend() {
      return i();
    },
    set onsend(v) {
      i(v), qe();
    },
    get disabled() {
      return s();
    },
    set disabled(v = !1) {
      s(v), qe();
    }
  }, g = Ql(), p = B(g), f = B(p);
  bo(f), f.__keydown = o, f.__input = l, ur(f, (v) => n = v, () => n);
  var w = G(f, 2);
  return w.__click = a, V(p), ir(2), V(g), gt(
    (v) => {
      Ye(f, "placeholder", b(u)), f.disabled = b(d), w.disabled = v;
    },
    [() => b(d) || !b(r).trim()]
  ), il(f, () => b(r), (v) => k(r, v)), z(t, g), mt(h);
}
Ss(["keydown", "input", "click"]);
Wt(na, { onsend: {}, disabled: {} }, [], [], !0);
class ed {
  constructor(e, i) {
    this.sessionId = null, this.config = e, this.visitor = i, this.debugLogger = hr(e.getAll());
  }
  /**
   * Initialize widget session with backend
   */
  async initialize() {
    try {
      const e = new AbortController(), i = setTimeout(() => e.abort(), J.API_TIMEOUT), s = Pi.getApiUrl("init", {
        clientId: this.config.clientId
      }), r = {
        client_id: this.config.clientId,
        visitor_id: this.visitor.getVisitorId(),
        page_url: window.location.href,
        referrer: document.referrer
      };
      this.config.debug && this.debugLogger.log("APIClient", "Initializing with", {
        endpoint: "init",
        fullUrl: s,
        payload: r
      });
      const n = je().getCurrent(), a = await fetch(s, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: window.location.origin,
          "X-Correlation-ID": n
        },
        body: JSON.stringify({ body: r }),
        signal: e.signal
      });
      if (clearTimeout(i), !a.ok) {
        if (a.status === 403)
          throw new Error("Invalid client configuration. Please check your client ID.");
        if (a.status === 422)
          try {
            const l = await a.json();
            this.debugLogger.error("APIClient", "Validation error (422)", l);
            const d = l.detail || l.message || "Validation failed";
            throw new Error(`Validation error: ${typeof d == "string" ? d : JSON.stringify(d)}`);
          } catch (l) {
            throw l instanceof Error && l.message.startsWith("Validation error:") ? l : new Error("Invalid request data. Please check client ID and visitor ID format.");
          }
        if (a.status === 429) {
          const l = a.headers.get("Retry-After"), d = l ? parseInt(l, 10) : 60;
          throw new Yt(
            `Rate limit exceeded. Please try again in ${d} seconds.`,
            d
          );
        }
        throw new Bt(
          `Failed to initialize widget: ${a.statusText}`,
          a.status,
          s
        );
      }
      const o = await a.json();
      return this.sessionId = o.session_id, this.visitor.saveSessionId(o.session_id), o;
    } catch (e) {
      if (e instanceof Ni || e instanceof Bt || e instanceof Yt)
        throw e;
      const i = zi.handle(e, {
        component: "APIClient",
        action: "initialize"
      });
      throw new Error(i.message);
    }
  }
  /**
   * Send chat message (HTTP fallback)
   */
  async sendMessage(e) {
    var s, r;
    const i = je().getCurrent();
    try {
      this.debugLogger.log("APIClient", "sendMessage() called", {
        correlationId: i,
        message: e,
        messageLength: (e == null ? void 0 : e.length) || 0,
        messageType: typeof e,
        sessionId: this.sessionId,
        clientId: this.config.clientId
      });
      const n = Al.validate(e);
      if (this.debugLogger.log("APIClient", "Message validation result", {
        correlationId: i,
        input: e,
        isValid: n.isValid,
        error: n.error,
        sanitizedValue: n.sanitizedValue,
        sanitizedLength: ((s = n.sanitizedValue) == null ? void 0 : s.length) || 0,
        contentChanged: e !== n.sanitizedValue
      }), !n.isValid)
        throw this.debugLogger.error("APIClient", "Validation failed", { correlationId: i, error: n.error }), new Ni(n.error || "Validation failed", "message", e);
      this.sessionId || (this.debugLogger.log("APIClient", "No session ID, attempting to resume or initialize...", { correlationId: i }), await this.resumeSession() || await this.initialize());
      const a = new AbortController(), o = setTimeout(() => a.abort(), J.API_TIMEOUT), l = {
        body: {
          client_id: this.config.clientId,
          visitor_id: this.visitor.getVisitorId(),
          session_id: this.sessionId,
          message: n.sanitizedValue
        }
      }, d = Pi.getApiUrl("chat", {
        clientId: this.config.clientId
      });
      this.debugLogger.log("APIClient", "HTTP request payload", {
        correlationId: i,
        url: d,
        payload: l,
        messageContent: l.body.message,
        messageLength: ((r = l.body.message) == null ? void 0 : r.length) || 0
      });
      const u = await fetch(d, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: window.location.origin,
          "X-Correlation-ID": i
        },
        body: JSON.stringify(l),
        signal: a.signal
      });
      if (clearTimeout(o), this.debugLogger.log("APIClient", "HTTP response status", {
        correlationId: i,
        ok: u.ok,
        status: u.status,
        statusText: u.statusText
      }), !u.ok) {
        if (u.status === 429) {
          const g = u.headers.get("Retry-After"), p = g ? parseInt(g, 10) : 60;
          throw new Yt(
            `Rate limit exceeded. Please try again in ${p} seconds.`,
            p
          );
        }
        throw new Bt(
          `Failed to send message: ${u.statusText}`,
          u.status,
          d
        );
      }
      const h = await u.json();
      return this.debugLogger.log("APIClient", "HTTP response data", { correlationId: i, result: h }), h;
    } catch (n) {
      if (this.debugLogger.error("APIClient", "sendMessage() error", { correlationId: i, error: n }), n instanceof Ni || n instanceof Bt || n instanceof Yt)
        throw n;
      const a = zi.handle(n, {
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
      const e = new AbortController(), i = setTimeout(() => e.abort(), J.API_TIMEOUT), s = Pi.getApiUrl("sessionHealth", {
        clientId: this.config.clientId,
        sessionId: this.sessionId
      }), r = {
        client_id: this.config.clientId,
        visitor_id: this.visitor.getVisitorId()
      };
      this.config.debug && this.debugLogger.log("APIClient", "Validating session health", {
        sessionId: this.sessionId,
        fullUrl: s,
        payload: r
      });
      const n = je().getCurrent(), a = await fetch(s, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: window.location.origin,
          "X-Correlation-ID": n
        },
        body: JSON.stringify({ body: r }),
        signal: e.signal
      });
      if (clearTimeout(i), a.ok) {
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
      const e = new AbortController(), i = setTimeout(() => e.abort(), J.API_TIMEOUT), s = Pi.getApiUrl("sessionHealth", {
        clientId: this.config.clientId,
        sessionId: this.sessionId
      }), r = {
        client_id: this.config.clientId,
        visitor_id: this.visitor.getVisitorId()
      }, n = je().getCurrent(), a = await fetch(s, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: window.location.origin,
          "X-Correlation-ID": n
        },
        body: JSON.stringify({ body: r }),
        signal: e.signal
      });
      return clearTimeout(i), a.ok ? await a.json() : a.status === 404 ? {
        status: "invalid",
        session_id: this.sessionId
      } : a.status === 410 ? {
        status: "expired",
        session_id: this.sessionId
      } : null;
    } catch (e) {
      const i = zi.handle(e, {
        component: "APIClient",
        action: "checkSessionHealth",
        sessionId: this.sessionId
      });
      return this.config.debug && this.debugLogger.warn("APIClient", "Session health check error", i.message), null;
    }
  }
  getSessionId() {
    return this.sessionId;
  }
}
class td {
  constructor(e, i, s) {
    this.typingTimeout = null, this.hasHiddenTypingForCurrentStream = !1, this.lastCompletionTimestamp = null, this.lastMessageSentTimestamp = null, this.COMPLETION_GRACE_PERIOD_MS = J.COMPLETION_GRACE_PERIOD, this.chatStore = e, this.uiStore = i, this.debugLogger = s;
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
    const i = e.data.content;
    if (!i) {
      this.debugLogger.warn("ChatController", "Assistant chunk without content");
      return;
    }
    if (this.hasHiddenTypingForCurrentStream || (this.chatStore.setTyping(!1), this.hasHiddenTypingForCurrentStream = !0, this.debugLogger.log("ChatController", "Typing indicator hidden - first chunk arrived"), this.typingTimeout && (clearTimeout(this.typingTimeout), this.typingTimeout = null)), this.chatStore.isStreaming)
      this.chatStore.appendToStreamingMessage(i);
    else {
      const s = this.chatStore.startStreamingMessage();
      this.chatStore.appendToStreamingMessage(i), this.debugLogger.log("ChatController", "Started streaming message", { messageId: s });
    }
    this.uiStore.isOpen || this.uiStore.markUnread();
  }
  handleAssistantComplete(e) {
    this.debugLogger.log("ChatController", "Assistant complete", {
      isStreaming: this.chatStore.isStreaming
    }), this.typingTimeout && (clearTimeout(this.typingTimeout), this.typingTimeout = null), this.chatStore.isStreaming && this.chatStore.finishStreamingMessage(), this.hasHiddenTypingForCurrentStream = !1, this.lastCompletionTimestamp = Date.now(), this.chatStore.setTyping(!1), this.uiStore.isOpen || this.uiStore.markUnread();
  }
  handleConnectionEstablished(e) {
    const i = ht.initialMessage, s = e.data.initial_message;
    let r;
    i !== void 0 ? r = i || void 0 : r = s, r && !this.chatStore.hasMessages && (this.chatStore.addMessage(r, "assistant"), this.debugLogger.log("ChatController", "Initial message added", {
      source: i !== void 0 ? "client" : "server"
    }));
  }
  handleTypingIndicator() {
    const e = this.lastCompletionTimestamp ? Date.now() - this.lastCompletionTimestamp : 1 / 0, i = this.lastMessageSentTimestamp ? Date.now() - this.lastMessageSentTimestamp : 1 / 0;
    if (e < this.COMPLETION_GRACE_PERIOD_MS && i > J.CONNECTION_DELAY) {
      this.debugLogger.log("ChatController", "Ignoring typing indicator - grace period");
      return;
    }
    !this.hasHiddenTypingForCurrentStream && !this.chatStore.isStreaming ? (this.debugLogger.log("ChatController", "Processing typing indicator"), this.chatStore.setTyping(!0), this.typingTimeout && clearTimeout(this.typingTimeout), this.typingTimeout = window.setTimeout(() => {
      this.debugLogger.log("ChatController", "Typing indicator timeout"), this.chatStore.setTyping(!1), this.typingTimeout = null;
    }, J.TYPING_INDICATOR_TIMEOUT)) : this.debugLogger.log("ChatController", "Ignoring typing indicator - already streaming");
  }
  handleError(e) {
    this.debugLogger.error("ChatController", "Error message received", e.data.message), this.typingTimeout && (clearTimeout(this.typingTimeout), this.typingTimeout = null), this.chatStore.isStreaming && this.chatStore.finishStreamingMessage(), this.hasHiddenTypingForCurrentStream = !1;
    const i = e.data.message || "An error occurred";
    this.chatStore.setError(i);
  }
  /**
   * Set typing indicator with timeout fallback
   * Used when sending messages over HTTP (non-WebSocket)
   */
  setTypingWithTimeout(e = J.TYPING_FALLBACK_TIMEOUT) {
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
var id = /* @__PURE__ */ Y('<span class="error-message svelte-zsv8oa" id="error-message">Connection lost. Unable to reconnect.</span> <button class="restart-button svelte-zsv8oa" aria-describedby="error-message">Retry Connection</button>', 1), sd = /* @__PURE__ */ Y('<span class="error-message svelte-zsv8oa" id="error-message">Something went wrong. Please try again.</span> <button class="restart-button svelte-zsv8oa" aria-describedby="error-message">Retry Connection</button>', 1), rd = /* @__PURE__ */ Y('<div class="error-banner svelte-zsv8oa" role="alert" aria-live="polite"><!></div>'), nd = /* @__PURE__ */ Y('<button class="backdrop svelte-zsv8oa" aria-label="Close chat overlay" tabindex="-1"></button>'), ad = /* @__PURE__ */ Y('<div role="status" aria-live="polite" class="sr-only svelte-zsv8oa">Chat assistant opened</div> <div class="chat-container svelte-zsv8oa" role="dialog" aria-label="Chat assistant" aria-modal="true" tabindex="-1"><!> <!> <!> <!></div> <!>', 1), od = /* @__PURE__ */ Y('<div class="widget-container svelte-zsv8oa"><!> <!></div>');
const ld = {
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
function aa(t, e) {
  vt(e, !0), Ft(t, ld);
  let i = ft(e, "hostElement", 7), s, r, n, a, o, l;
  const d = je();
  let u = !1, h = !1, g = null, p = /* @__PURE__ */ C(X(ie.DISCONNECTED)), f = /* @__PURE__ */ C(
    !1
    // Track if max reconnection attempts exhausted
  ), w = /* @__PURE__ */ C(null), v = null;
  function y() {
    var $;
    if (($ = i()) != null && $.hasAttribute("data-theme")) return;
    window.matchMedia("(prefers-color-scheme: dark)").matches && i() && i().setAttribute("data-theme", "dark");
  }
  function M(m) {
    const $ = [
      "button:not([disabled])",
      "textarea:not([disabled])",
      "input:not([disabled])",
      '[tabindex]:not([tabindex="-1"])',
      "a[href]"
    ].join(", "), S = m.querySelectorAll($);
    if (S.length === 0) return;
    const ee = S[0], wt = S[S.length - 1];
    return requestAnimationFrame(() => ee.focus()), { firstFocusable: ee, lastFocusable: wt };
  }
  function F(m) {
    if (m.key === "Escape" && H.isOpen) {
      m.preventDefault(), H.close(), R();
      return;
    }
    if (m.key === "Tab" && b(w)) {
      const $ = [
        "button:not([disabled])",
        "textarea:not([disabled])",
        "input:not([disabled])",
        '[tabindex]:not([tabindex="-1"])',
        "a[href]"
      ].join(", "), S = b(w).querySelectorAll($);
      if (S.length === 0) return;
      const ee = S[0], wt = S[S.length - 1];
      m.shiftKey && document.activeElement === ee ? (m.preventDefault(), wt.focus()) : !m.shiftKey && document.activeElement === wt && (m.preventDefault(), ee.focus());
    }
  }
  function P() {
    v = document.activeElement;
  }
  function R() {
    v && typeof v.focus == "function" && requestAnimationFrame(() => v == null ? void 0 : v.focus()), v = null;
  }
  function de() {
    b(w) && M(b(w));
  }
  fr(async () => {
    try {
      if (s = new $l(i()), l = hr(s.getAll()), r = new Ks(), n = new ed(s, r), a = new zl(s, r), o = new td(T, H, l), i()) {
        const { configStore: m } = await Promise.resolve().then(() => yl);
        m.loadFromAttributes(i());
      }
      K(), y(), l.log("ChatWidget", "Attaching WebSocket listeners"), a.on("message", Es), a.on("stateChange", (m) => {
        l.log("ChatWidget", "WebSocket state changed", {
          oldState: b(p),
          newState: m,
          timestamp: Date.now()
        }), k(p, m, !0);
      }), a.on("error", (m) => {
        l.error("ChatWidget", "WebSocket error event", m), g = m.error, T.setError(m.error);
      }), a.on("connectionFailed", (m) => {
        l.error("ChatWidget", "WebSocket connection failed after max attempts", m), k(f, !0), g = m.error, T.setError(m.error);
      }), l.log("ChatWidget", "WebSocket listeners attached successfully"), H.isOpen && await fe(), i() && typeof i().setOnOpenChangeCallback == "function" && i().setOnOpenChangeCallback((m) => {
        vr(m);
      }), l.log("ChatWidget", "Services initialized successfully");
    } catch (m) {
      l.error("ChatWidget", "Initialization failed", m), g = m instanceof Error ? m.message : "Failed to initialize chat";
    }
  }), ct(() => {
    const m = H.isOpen;
    if (i()) {
      const $ = i().hasAttribute("open");
      m && !$ ? i().setAttribute("open", "") : !m && $ && i().removeAttribute("open");
    }
  }), ll(() => {
    const m = n == null ? void 0 : n.getSessionId();
    m && r.markSessionInactive(m), a == null || a.disconnect(), o == null || o.cleanup();
  });
  async function fe() {
    var m;
    if (!(u || h)) {
      h = !0;
      try {
        if (H.setLoading(!0), await n.resumeSession()) {
          const S = n.getSessionId();
          S && (await a.connect(S), setTimeout(
            () => {
              l.log("ChatWidget", "Testing WebSocket connection after session resumption..."), a.testConnection();
            },
            J.CONNECTION_DELAY
          ));
        } else {
          const S = await n.initialize();
          (m = S.assistant_info) != null && m.assistant_name && ht.setBackendTitle(S.assistant_info.assistant_name), await a.connect(S.session_id), setTimeout(
            () => {
              l.log("ChatWidget", "Testing WebSocket connection after initialization..."), a.testConnection();
            },
            J.CONNECTION_DELAY
          ), S.settings && ne(S.settings);
        }
        u = !0;
      } catch ($) {
        g = $ instanceof Error ? $.message : "Failed to initialize", T.setError(g);
      } finally {
        H.setLoading(!1), h = !1;
      }
    }
  }
  function K() {
    const m = s.getAll();
    requestAnimationFrame(() => {
      if (i() && (i().setAttribute("data-theme", m.theme || "modern"), m.primary_color || m.accent_color)) {
        const $ = m.accent_color || m.primary_color;
        if ($) {
          const S = gr($, "#6b46c1");
          i().style.setProperty("--widget-primary", S), i().style.setProperty("--widget-primary-hover", Oe(S, -20)), i().style.setProperty("--widget-primary-light", Oe(S, 20)), i().style.setProperty("--widget-primary-dark", Oe(S, -30)), i().style.setProperty("--widget-gradient", `linear-gradient(135deg, ${S} 0%, ${Oe(S, 20)} 100%)`), i().style.setProperty("--widget-gradient-hover", `linear-gradient(135deg, ${Oe(S, -20)} 0%, ${S} 100%)`);
        }
      }
    });
  }
  function ne(m) {
    requestAnimationFrame(() => {
      i() && (m.theme && typeof m.theme == "string" && i().setAttribute("data-theme", m.theme), m.primary_color && typeof m.primary_color == "string" && i().style.setProperty("--widget-primary", m.primary_color));
    });
  }
  function Es(m) {
    o.handleMessage(m);
  }
  async function la(m) {
    const $ = d.getCurrent();
    l.log("ChatWidget", "handleSendMessage called with content", {
      correlationId: $,
      content: m,
      length: (m == null ? void 0 : m.length) || 0,
      trimmed: (m == null ? void 0 : m.trim()) || "",
      type: typeof m
    });
    const S = T.addMessage(m, "user");
    if (o.resetForNewMessage(), l.log("ChatWidget", "Message added to store", {
      correlationId: $,
      messageId: S.id,
      content: S.content,
      length: S.content.length
    }), u || (l.log("ChatWidget", "Widget not initialized, initializing...", { correlationId: $ }), await fe()), l.log("ChatWidget", "Connection state", {
      correlationId: $,
      connectionState: b(p),
      isConnected: b(p) === ie.CONNECTED,
      routingTo: b(p) === ie.CONNECTED ? "WebSocket" : "HTTP API"
    }), b(p) === ie.CONNECTED) {
      l.log("ChatWidget", "Sending via WebSocket", { correlationId: $, content: m });
      try {
        o.setTypingWithTimeout(), a.send(m), T.updateMessageStatus(S.id, "sent"), l.log("ChatWidget", "User message marked as sent", { messageId: S.id });
      } catch (ee) {
        l.error("ChatWidget", "WebSocket send error", ee), T.updateMessageStatus(S.id, "failed"), T.setError("Failed to send message. Please try again."), T.setTyping(!1);
        return;
      }
    } else
      try {
        l.log("ChatWidget", "Sending via HTTP API", { correlationId: $, content: m }), o.setTypingWithTimeout();
        const ee = await n.sendMessage(m);
        l.log("ChatWidget", "HTTP API response received", {
          correlationId: $,
          response: ee.response,
          sessionId: ee.session_id
        }), T.addMessage(ee.response, "assistant"), T.setTyping(!1), H.isOpen || H.markUnread();
      } catch (ee) {
        l.error("ChatWidget", "HTTP API error", ee), g = "Failed to send message. Please try again.", T.setError(g), T.updateMessageStatus(S.id, "failed"), T.setTyping(!1);
      }
  }
  async function vr(m) {
    const $ = H.isOpen;
    $ !== m && (l.log("ChatWidget", "Setting open state", { from: $, to: m }), m && !$ && !v && P(), m ? H.open() : H.close(), await new Promise((S) => setTimeout(S, 0)), m && !u && s && await fe(), m ? requestAnimationFrame(() => de()) : R());
  }
  async function da() {
    await vr(!H.isOpen);
  }
  function ca() {
    T.clearMessages(), T.setError(null), g = null;
  }
  function ua() {
    l.log("ChatWidget", "Manual retry connection requested"), k(f, !1), g = null, T.setError(null), a == null || a.retryConnection();
  }
  const Ts = /* @__PURE__ */ Ie(() => H.isOpen), fa = /* @__PURE__ */ Ie(() => H.isLoading), ga = /* @__PURE__ */ Ie(() => (s == null ? void 0 : s.position) || "bottom-right");
  var ha = {
    get hostElement() {
      return i();
    },
    set hostElement(m) {
      i(m), qe();
    }
  }, Ci = od(), mr = B(Ci);
  {
    var pa = (m) => {
      Gn(m, { onclick: da });
    };
    Te(mr, (m) => {
      b(Ts) || m(pa);
    });
  }
  var va = G(mr, 2);
  {
    var ma = (m) => {
      var $ = ad(), S = G(ss($), 2);
      S.__keydown = F;
      var ee = B(S);
      ta(ee, {
        onclose: () => {
          H.close(), R();
        },
        get connectionState() {
          return b(p);
        },
        get connectionFailed() {
          return b(f);
        }
      });
      var wt = G(ee, 2);
      ra(wt, {});
      var br = G(wt, 2);
      {
        let Ce = /* @__PURE__ */ Ie(() => T.error !== null || b(fa));
        na(br, {
          onsend: la,
          get disabled() {
            return b(Ce);
          }
        });
      }
      var ba = G(br, 2);
      {
        var wa = (Ce) => {
          var yt = rd(), xa = B(yt);
          {
            var Sa = (Ht) => {
              var Ai = id(), Is = G(ss(Ai), 2);
              Is.__click = ua, z(Ht, Ai);
            }, ka = (Ht) => {
              var Ai = sd(), Is = G(ss(Ai), 2);
              Is.__click = ca, z(Ht, Ai);
            };
            Te(xa, (Ht) => {
              b(f) ? Ht(Sa) : Ht(ka, !1);
            });
          }
          V(yt), z(Ce, yt);
        };
        Te(ba, (Ce) => {
          T.error && Ce(wa);
        });
      }
      V(S), ur(S, (Ce) => k(w, Ce), () => b(w));
      var ya = G(S, 2);
      {
        var _a = (Ce) => {
          var yt = nd();
          yt.__click = () => H.close(), Mr(3, yt, () => gl, () => ({ duration: 200 })), z(Ce, yt);
        };
        Te(ya, (Ce) => {
          b(Ts) && Ce(_a);
        });
      }
      Mr(3, S, () => hl, () => ({ y: 20, duration: 300 })), z(m, $);
    };
    Te(va, (m) => {
      b(Ts) && m(ma);
    });
  }
  return V(Ci), gt(() => {
    Ye(Ci, "data-position", b(ga)), Ye(Ci, "data-theme", ht.theme);
  }), z(t, Ci), mt(ha);
}
Ss(["keydown", "click"]);
Wt(aa, { hostElement: {} }, [], [], !0);
const pr = {
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
}, Xs = {
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
function dd(t = pr) {
  var e;
  return `/* ============================================
   Premium Design System - ${t.brand === "bot-brewers" ? "Bot Brewers Brand" : "Generic"}
   ============================================ */

:host {
  /* Primary Colors */
  --widget-primary: ${t.primary};
  --widget-primary-hover: ${t.primaryHover};
  --widget-primary-light: ${t.primaryLight};
  --widget-primary-dark: ${t.primaryDark};
  
  /* Gradient System - Blue to Dark Blue for Bot Brewers brand */
  --widget-gradient: linear-gradient(135deg, ${t.primary} 0%, ${t.primaryDark} 100%);
  --widget-gradient-hover: linear-gradient(135deg, ${t.primaryDark} 0%, ${t.primary} 100%);
  --widget-gradient-subtle: linear-gradient(135deg, ${t.primary}1a 0%, ${t.primaryDark}0d 100%);
  
  /* Surface Colors */
  --widget-background: ${t.background};
  --widget-surface: ${t.surface};
  --widget-surface-hover: ${t.surfaceHover};
  --widget-surface-elevated: ${t.surfaceElevated || t.background};
  --widget-glass: ${t.glass};
  --widget-glass-dark: ${t.glassDark};
  --widget-glass-subtle: ${t.glass};
  
  /* Text Colors */
  --widget-text: ${t.text};
  --widget-text-secondary: ${t.textSecondary};
  --widget-text-muted: ${t.textMuted};
  --widget-text-subtle: ${t.textSubtle || t.textMuted};
  --widget-text-inverse: ${t.textInverse};
  
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
  --widget-border: ${t.border || (t.isDark ? "#334155" : "#e2e8f0")};
  --widget-border-light: ${t.borderLight || (t.isDark ? "#475569" : "#f1f5f9")};
  --widget-border-subtle: ${t.borderSubtle || (t.isDark ? "#1e293b" : "#f8fafc")};
  --widget-border-focus: var(--widget-primary);
  
  /* Primary RGB for glow effects */
  --widget-primary-rgb: ${((e = t.primary.replace("#", "").match(/.{2}/g)) == null ? void 0 : e.map((i) => parseInt(i, 16)).join(", ")) || "30, 91, 168"};

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
  --widget-logo-filter: ${t.isDark ? "brightness(1.1)" : "brightness(1)"};

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
function cd(t = pr) {
  return dd(t);
}
const oa = {
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
}, Ur = oa, Fr = {
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
}, ud = {
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
}, fd = {
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
}, gd = {
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
}, hd = {
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
function pd(t) {
  return {
    "bot-brewers": Xs,
    modern: oa,
    professional: Ur,
    corporate: Ur,
    // Alias for backward compatibility
    friendly: Fr,
    playful: Fr,
    // Alias
    minimal: ud,
    dark: fd,
    elegant: gd,
    bold: hd,
    generic: pr,
    default: Xs
  }[t.toLowerCase()] || null;
}
class Wr extends HTMLElement {
  constructor() {
    super(), this._app = null, this._currentTheme = "bot-brewers", this._onOpenChangeCallback = null, this._pendingOpenState = null, this._shadowRoot = this.attachShadow({ mode: "open" });
  }
  // Define which attributes we should observe for changes
  static get observedAttributes() {
    return ["theme", "data-theme", "accent-color", "position", "title", "client-id", "initial-message", "open"];
  }
  async connectedCallback() {
    var r, n;
    const e = this.getAttribute("client-id"), i = window, s = ((r = i.AIChat) == null ? void 0 : r.clientId) || ((n = i.ChatWidget) == null ? void 0 : n.clientId);
    if (!e && !s) {
      D.error("ChatWidget", 'Configuration missing. Please set client-id attribute or window.AIChat = { clientId: "your_client_id" }');
      return;
    }
    this.mountApp();
  }
  disconnectedCallback() {
    this._app && (Vs(this._app), this._app = null);
  }
  attributeChangedCallback(e, i, s) {
    if (i !== s && ((e === "theme" || e === "data-theme") && s && (this._currentTheme = s, ht.updateConfig({ theme: s }, "user"), this.updateStyles()), e === "accent-color" && s && this.updateAccentColor(s), e === "client-id" && s && this._app && (D.log("ChatWidget", `Client ID changed from ${i} to ${s}, remounting widget`), Vs(this._app), this._app = null, this.mountApp()), e === "title" && s && ht.setUserTitle(s), e === "open")) {
      const r = s !== null;
      this._onOpenChangeCallback ? this._onOpenChangeCallback(r) : this._pendingOpenState = r;
    }
  }
  setOnOpenChangeCallback(e) {
    this._onOpenChangeCallback = e, this._pendingOpenState !== null && (e(this._pendingOpenState), this._pendingOpenState = null);
  }
  mountApp() {
    const e = this.getAttribute("theme") || this.getAttribute("data-theme") || "bot-brewers";
    this._currentTheme = e;
    const i = document.createElement("div");
    i.className = "widget-root";
    const s = document.createElement("style");
    s.textContent = this.getStyles(), this._shadowRoot.innerHTML = "", this._shadowRoot.appendChild(s), this._shadowRoot.appendChild(i), this._app = dr(aa, {
      target: i,
      props: {
        hostElement: this
      }
    });
  }
  getStyles() {
    const e = this.getAttribute("theme") || this.getAttribute("data-theme") || this._currentTheme;
    return this.getThemeStyles(e);
  }
  getThemeStyles(e) {
    const i = pd(e) || Xs;
    return cd(i);
  }
  updateStyles() {
    const e = this._shadowRoot.querySelector("style");
    e && (e.textContent = this.getStyles());
  }
  updateAccentColor(e) {
    const i = this._shadowRoot.querySelector(".widget-root");
    i && Promise.resolve().then(() => bl).then(({ adjustColor: s }) => {
      i.style.setProperty("--widget-primary", e), i.style.setProperty("--widget-primary-hover", s(e, -20)), i.style.setProperty("--widget-primary-light", s(e, 20)), i.style.setProperty("--widget-primary-dark", s(e, -30));
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
customElements.get("assistant-widget") ? customElements.get("chat-widget") || customElements.define("chat-widget", Wr) : customElements.define("assistant-widget", Wr);
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", Hr) : Hr();
function Hr() {
  if (document.querySelector("assistant-widget, chat-widget"))
    return;
  const t = window, e = t.AIChat || t.ChatWidget;
  if (e != null && e.clientId) {
    if (e.autoInit === !1) {
      D.log("ChatWidget", "Auto-initialization disabled");
      return;
    }
    const i = document.createElement("assistant-widget");
    document.body.appendChild(i), D.log("ChatWidget", "Auto-initialized with client ID", e.clientId);
  }
}
export {
  Wr as ChatWidgetElement
};
