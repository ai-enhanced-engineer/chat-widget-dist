var Oo = Object.defineProperty;
var ts = (t) => {
  throw TypeError(t);
};
var Ro = (t, e, i) => e in t ? Oo(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i;
var oe = (t, e, i) => Ro(t, typeof e != "symbol" ? e + "" : e, i), cn = (t, e, i) => e.has(t) || ts("Cannot " + i);
var c = (t, e, i) => (cn(t, e, "read from private field"), i ? i.call(t) : e.get(t)), I = (t, e, i) => e.has(t) ? ts("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), T = (t, e, i, r) => (cn(t, e, "write to private field"), r ? r.call(t, i) : e.set(t, i), i), re = (t, e, i) => (cn(t, e, "access private method"), i);
var Es = Array.isArray, No = Array.prototype.indexOf, Qr = Array.from, $r = Object.keys, Ur = Object.defineProperty, Kt = Object.getOwnPropertyDescriptor, qo = Object.getOwnPropertyDescriptors, Do = Object.prototype, Po = Array.prototype, Is = Object.getPrototypeOf, is = Object.isExtensible;
function zo(t) {
  return typeof t == "function";
}
const sr = () => {
};
function $o(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function As() {
  var t, e, i = new Promise((r, n) => {
    t = r, e = n;
  });
  return { promise: i, resolve: t, reject: e };
}
const me = 2, Ln = 4, On = 8, Uo = 1 << 24, vt = 16, Tt = 32, Pt = 64, Xr = 128, it = 512, be = 1024, ze = 2048, ht = 4096, De = 8192, St = 16384, Tr = 32768, ti = 65536, rs = 1 << 17, Ms = 1 << 18, ai = 1 << 19, jo = 1 << 20, _t = 1 << 25, ii = 32768, fn = 1 << 21, Rn = 1 << 22, Rt = 1 << 23, ur = Symbol("$state"), Ls = Symbol("legacy props"), Wo = Symbol(""), pi = new class extends Error {
  constructor() {
    super(...arguments);
    oe(this, "name", "StaleReactionError");
    oe(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}(), Kr = 3, oi = 8;
function Os(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Ho() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Fo(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Bo() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Vo(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Go() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Yo() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Qo(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Xo() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ko() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Jo() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Zo() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const el = 1, tl = 2, Rs = 4, il = 8, rl = 16, nl = 1, sl = 4, al = 8, ol = 16, ll = 4, Ns = 1, dl = 2, qs = "[", Jr = "[!", Nn = "]", ri = {}, we = Symbol(), cl = "http://www.w3.org/1999/xhtml";
function Er(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function ul() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let U = !1;
function kt(t) {
  U = t;
}
let z;
function ye(t) {
  if (t === null)
    throw Er(), ri;
  return z = t;
}
function Gi() {
  return ye(/* @__PURE__ */ rt(z));
}
function G(t) {
  if (U) {
    if (/* @__PURE__ */ rt(z) !== null)
      throw Er(), ri;
    z = t;
  }
}
function vr(t = 1) {
  if (U) {
    for (var e = t, i = z; e--; )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ rt(i);
    z = i;
  }
}
function jr(t = !0) {
  for (var e = 0, i = z; ; ) {
    if (i.nodeType === oi) {
      var r = (
        /** @type {Comment} */
        i.data
      );
      if (r === Nn) {
        if (e === 0) return i;
        e -= 1;
      } else (r === qs || r === Jr) && (e += 1);
    }
    var n = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ rt(i)
    );
    t && i.remove(), i = n;
  }
}
function Ds(t) {
  if (!t || t.nodeType !== oi)
    throw Er(), ri;
  return (
    /** @type {Comment} */
    t.data
  );
}
function Ps(t) {
  return t === this.v;
}
function gl(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function zs(t) {
  return !gl(t, this.v);
}
let Ie = null;
function Yi(t) {
  Ie = t;
}
function Qe(t, e = !1, i) {
  Ie = {
    p: Ie,
    i: !1,
    c: null,
    e: null,
    s: t,
    x: null,
    l: null
  };
}
function Xe(t) {
  var e = (
    /** @type {ComponentContext} */
    Ie
  ), i = e.e;
  if (i !== null) {
    e.e = null;
    for (var r of i)
      oa(r);
  }
  return t !== void 0 && (e.x = t), e.i = !0, Ie = e.p, t ?? /** @type {T} */
  {};
}
function $s() {
  return !0;
}
let Ft = [];
function Us() {
  var t = Ft;
  Ft = [], $o(t);
}
function zt(t) {
  if (Ft.length === 0 && !gr) {
    var e = Ft;
    queueMicrotask(() => {
      e === Ft && Us();
    });
  }
  Ft.push(t);
}
function hl() {
  for (; Ft.length > 0; )
    Us();
}
function js(t) {
  var e = Q;
  if (e === null)
    return V.f |= Rt, t;
  if (e.f & Tr)
    Qi(t, e);
  else {
    if (!(e.f & Xr))
      throw t;
    e.b.error(t);
  }
}
function Qi(t, e) {
  for (; e !== null; ) {
    if (e.f & Xr)
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
const Lr = /* @__PURE__ */ new Set();
let W = null, Nr = null, de = null, Ve = [], Zr = null, pn = !1, gr = !1;
var bi, yi, Bt, Vt, _r, xi, _i, ve, vn, or, mn, Ws, Hs;
const Vr = class Vr {
  constructor() {
    I(this, ve);
    oe(this, "committed", !1);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    oe(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    oe(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    I(this, bi, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    I(this, yi, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    I(this, Bt, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    I(this, Vt, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    I(this, _r, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    I(this, xi, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    I(this, _i, /* @__PURE__ */ new Set());
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    oe(this, "skipped_effects", /* @__PURE__ */ new Set());
    oe(this, "is_fork", !1);
  }
  is_deferred() {
    return this.is_fork || c(this, Vt) > 0;
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var r;
    Ve = [], Nr = null, this.apply();
    var i = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const n of e)
      re(this, ve, vn).call(this, n, i);
    this.is_fork || re(this, ve, Ws).call(this), this.is_deferred() ? (re(this, ve, or).call(this, i.effects), re(this, ve, or).call(this, i.render_effects)) : (Nr = this, W = null, ns(i.render_effects), ns(i.effects), Nr = null, (r = c(this, _r)) == null || r.resolve()), de = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, i) {
    this.previous.has(e) || this.previous.set(e, i), e.f & Rt || (this.current.set(e, e.v), de == null || de.set(e, e.v));
  }
  activate() {
    W = this, this.apply();
  }
  deactivate() {
    W === this && (W = null, de = null);
  }
  flush() {
    if (this.activate(), Ve.length > 0) {
      if (Fs(), W !== null && W !== this)
        return;
    } else c(this, Bt) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const e of c(this, yi)) e(this);
    c(this, yi).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(e) {
    T(this, Bt, c(this, Bt) + 1), e && T(this, Vt, c(this, Vt) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(e) {
    T(this, Bt, c(this, Bt) - 1), e && T(this, Vt, c(this, Vt) - 1), this.revive();
  }
  revive() {
    for (const e of c(this, xi))
      c(this, _i).delete(e), xe(e, ze), ni(e);
    for (const e of c(this, _i))
      xe(e, ht), ni(e);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(e) {
    c(this, bi).add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(e) {
    c(this, yi).add(e);
  }
  settled() {
    return (c(this, _r) ?? T(this, _r, As())).promise;
  }
  static ensure() {
    if (W === null) {
      const e = W = new Vr();
      Lr.add(W), gr || Vr.enqueue(() => {
        W === e && e.flush();
      });
    }
    return W;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    zt(e);
  }
  apply() {
  }
};
bi = new WeakMap(), yi = new WeakMap(), Bt = new WeakMap(), Vt = new WeakMap(), _r = new WeakMap(), xi = new WeakMap(), _i = new WeakMap(), ve = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {EffectTarget} target
 */
vn = function(e, i) {
  var u;
  e.f ^= be;
  for (var r = e.first; r !== null; ) {
    var n = r.f, s = (n & (Tt | Pt)) !== 0, a = s && (n & be) !== 0, o = a || (n & De) !== 0 || this.skipped_effects.has(r);
    if (r.f & Xr && ((u = r.b) != null && u.is_pending()) && (i = {
      parent: i,
      effect: r,
      effects: [],
      render_effects: []
    }), !o && r.fn !== null) {
      s ? r.f ^= be : n & Ln ? i.effects.push(r) : Ir(r) && (r.f & vt && c(this, xi).add(r), br(r));
      var l = r.first;
      if (l !== null) {
        r = l;
        continue;
      }
    }
    var d = r.parent;
    for (r = r.next; r === null && d !== null; )
      d === i.effect && (re(this, ve, or).call(this, i.effects), re(this, ve, or).call(this, i.render_effects), i = /** @type {EffectTarget} */
      i.parent), r = d.next, d = d.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
or = function(e) {
  for (const i of e)
    i.f & ze ? c(this, xi).add(i) : i.f & ht && c(this, _i).add(i), re(this, ve, mn).call(this, i.deps), xe(i, be);
}, /**
 * @param {Value[] | null} deps
 */
mn = function(e) {
  if (e !== null)
    for (const i of e)
      !(i.f & me) || !(i.f & ii) || (i.f ^= ii, re(this, ve, mn).call(
        this,
        /** @type {Derived} */
        i.deps
      ));
}, Ws = function() {
  if (c(this, Vt) === 0) {
    for (const e of c(this, bi)) e();
    c(this, bi).clear();
  }
  c(this, Bt) === 0 && re(this, ve, Hs).call(this);
}, Hs = function() {
  var s;
  if (Lr.size > 1) {
    this.previous.clear();
    var e = de, i = !0, r = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const a of Lr) {
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
        var n = Ve;
        Ve = [];
        const d = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
        for (const g of o)
          Bs(g, l, d, u);
        if (Ve.length > 0) {
          W = a, a.apply();
          for (const g of Ve)
            re(s = a, ve, vn).call(s, g, r);
          a.deactivate();
        }
        Ve = n;
      }
    }
    W = null, de = e;
  }
  this.committed = !0, Lr.delete(this);
};
let ut = Vr;
function R(t) {
  var e = gr;
  gr = !0;
  try {
    for (var i; ; ) {
      if (hl(), Ve.length === 0 && (W == null || W.flush(), Ve.length === 0))
        return Zr = null, /** @type {T} */
        i;
      Fs();
    }
  } finally {
    gr = e;
  }
}
function Fs() {
  var t = Zt;
  pn = !0;
  var e = null;
  try {
    var i = 0;
    for (Hr(!0); Ve.length > 0; ) {
      var r = ut.ensure();
      if (i++ > 1e3) {
        var n, s;
        fl();
      }
      r.process(Ve), Nt.clear();
    }
  } finally {
    pn = !1, Hr(t), Zr = null;
  }
}
function fl() {
  try {
    Go();
  } catch (t) {
    Qi(t, Zr);
  }
}
let Ze = null;
function ns(t) {
  var e = t.length;
  if (e !== 0) {
    for (var i = 0; i < e; ) {
      var r = t[i++];
      if (!(r.f & (St | De)) && Ir(r) && (Ze = /* @__PURE__ */ new Set(), br(r), r.deps === null && r.first === null && r.nodes === null && (r.teardown === null && r.ac === null ? ua(r) : r.fn = null), (Ze == null ? void 0 : Ze.size) > 0)) {
        Nt.clear();
        for (const n of Ze) {
          if (n.f & (St | De)) continue;
          const s = [n];
          let a = n.parent;
          for (; a !== null; )
            Ze.has(a) && (Ze.delete(a), s.push(a)), a = a.parent;
          for (let o = s.length - 1; o >= 0; o--) {
            const l = s[o];
            l.f & (St | De) || br(l);
          }
        }
        Ze.clear();
      }
    }
    Ze = null;
  }
}
function Bs(t, e, i, r) {
  if (!i.has(t) && (i.add(t), t.reactions !== null))
    for (const n of t.reactions) {
      const s = n.f;
      s & me ? Bs(
        /** @type {Derived} */
        n,
        e,
        i,
        r
      ) : s & (Rn | vt) && !(s & ze) && Vs(n, e, r) && (xe(n, ze), ni(
        /** @type {Effect} */
        n
      ));
    }
}
function Vs(t, e, i) {
  const r = i.get(t);
  if (r !== void 0) return r;
  if (t.deps !== null)
    for (const n of t.deps) {
      if (e.includes(n))
        return !0;
      if (n.f & me && Vs(
        /** @type {Derived} */
        n,
        e,
        i
      ))
        return i.set(
          /** @type {Derived} */
          n,
          !0
        ), !0;
    }
  return i.set(t, !1), !1;
}
function ni(t) {
  for (var e = Zr = t; e.parent !== null; ) {
    e = e.parent;
    var i = e.f;
    if (pn && e === Q && i & vt && !(i & Ms))
      return;
    if (i & (Pt | Tt)) {
      if (!(i & be)) return;
      e.f ^= be;
    }
  }
  Ve.push(e);
}
function pl(t) {
  let e = 0, i = si(0), r;
  return () => {
    mr() && (f(i), tn(() => (e === 0 && (r = di(() => t(() => hr(i)))), e += 1, () => {
      zt(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, hr(i));
      });
    })));
  };
}
var vl = ti | ai | Xr;
function ml(t, e, i) {
  new wl(t, e, i);
}
var He, Ne, kr, ot, Gt, lt, Fe, Ce, dt, bt, Mt, Yt, Lt, Qt, Ot, Gr, ue, Gs, Ys, wn, qr, Dr, bn;
class wl {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, i, r) {
    I(this, ue);
    /** @type {Boundary | null} */
    oe(this, "parent");
    I(this, He, !1);
    /** @type {TemplateNode} */
    I(this, Ne);
    /** @type {TemplateNode | null} */
    I(this, kr, U ? z : null);
    /** @type {BoundaryProps} */
    I(this, ot);
    /** @type {((anchor: Node) => void)} */
    I(this, Gt);
    /** @type {Effect} */
    I(this, lt);
    /** @type {Effect | null} */
    I(this, Fe, null);
    /** @type {Effect | null} */
    I(this, Ce, null);
    /** @type {Effect | null} */
    I(this, dt, null);
    /** @type {DocumentFragment | null} */
    I(this, bt, null);
    /** @type {TemplateNode | null} */
    I(this, Mt, null);
    I(this, Yt, 0);
    I(this, Lt, 0);
    I(this, Qt, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    I(this, Ot, null);
    I(this, Gr, pl(() => (T(this, Ot, si(c(this, Yt))), () => {
      T(this, Ot, null);
    })));
    T(this, Ne, e), T(this, ot, i), T(this, Gt, r), this.parent = /** @type {Effect} */
    Q.b, T(this, He, !!c(this, ot).pending), T(this, lt, zn(() => {
      if (Q.b = this, U) {
        const s = c(this, kr);
        Gi(), /** @type {Comment} */
        s.nodeType === oi && /** @type {Comment} */
        s.data === Jr ? re(this, ue, Ys).call(this) : re(this, ue, Gs).call(this);
      } else {
        var n = re(this, ue, wn).call(this);
        try {
          T(this, Fe, Ge(() => r(n)));
        } catch (s) {
          this.error(s);
        }
        c(this, Lt) > 0 ? re(this, ue, Dr).call(this) : T(this, He, !1);
      }
      return () => {
        var s;
        (s = c(this, Mt)) == null || s.remove();
      };
    }, vl)), U && T(this, Ne, z);
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return c(this, He) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!c(this, ot).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    re(this, ue, bn).call(this, e), T(this, Yt, c(this, Yt) + e), c(this, Ot) && Xi(c(this, Ot), c(this, Yt));
  }
  get_effect_pending() {
    return c(this, Gr).call(this), f(
      /** @type {Source<number>} */
      c(this, Ot)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var i = c(this, ot).onerror;
    let r = c(this, ot).failed;
    if (c(this, Qt) || !i && !r)
      throw e;
    c(this, Fe) && (ke(c(this, Fe)), T(this, Fe, null)), c(this, Ce) && (ke(c(this, Ce)), T(this, Ce, null)), c(this, dt) && (ke(c(this, dt)), T(this, dt, null)), U && (ye(
      /** @type {TemplateNode} */
      c(this, kr)
    ), vr(), ye(jr()));
    var n = !1, s = !1;
    const a = () => {
      if (n) {
        ul();
        return;
      }
      n = !0, s && Zo(), ut.ensure(), T(this, Yt, 0), c(this, dt) !== null && Jt(c(this, dt), () => {
        T(this, dt, null);
      }), T(this, He, this.has_pending_snippet()), T(this, Fe, re(this, ue, qr).call(this, () => (T(this, Qt, !1), Ge(() => c(this, Gt).call(this, c(this, Ne)))))), c(this, Lt) > 0 ? re(this, ue, Dr).call(this) : T(this, He, !1);
    };
    var o = V;
    try {
      Te(null), s = !0, i == null || i(e, a), s = !1;
    } catch (l) {
      Qi(l, c(this, lt) && c(this, lt).parent);
    } finally {
      Te(o);
    }
    r && zt(() => {
      T(this, dt, re(this, ue, qr).call(this, () => {
        ut.ensure(), T(this, Qt, !0);
        try {
          return Ge(() => {
            r(
              c(this, Ne),
              () => e,
              () => a
            );
          });
        } catch (l) {
          return Qi(
            l,
            /** @type {Effect} */
            c(this, lt).parent
          ), null;
        } finally {
          T(this, Qt, !1);
        }
      }));
    });
  }
}
He = new WeakMap(), Ne = new WeakMap(), kr = new WeakMap(), ot = new WeakMap(), Gt = new WeakMap(), lt = new WeakMap(), Fe = new WeakMap(), Ce = new WeakMap(), dt = new WeakMap(), bt = new WeakMap(), Mt = new WeakMap(), Yt = new WeakMap(), Lt = new WeakMap(), Qt = new WeakMap(), Ot = new WeakMap(), Gr = new WeakMap(), ue = new WeakSet(), Gs = function() {
  try {
    T(this, Fe, Ge(() => c(this, Gt).call(this, c(this, Ne))));
  } catch (e) {
    this.error(e);
  }
  T(this, He, !1);
}, Ys = function() {
  const e = c(this, ot).pending;
  e && (T(this, Ce, Ge(() => e(c(this, Ne)))), ut.enqueue(() => {
    var i = re(this, ue, wn).call(this);
    T(this, Fe, re(this, ue, qr).call(this, () => (ut.ensure(), Ge(() => c(this, Gt).call(this, i))))), c(this, Lt) > 0 ? re(this, ue, Dr).call(this) : (Jt(
      /** @type {Effect} */
      c(this, Ce),
      () => {
        T(this, Ce, null);
      }
    ), T(this, He, !1));
  }));
}, wn = function() {
  var e = c(this, Ne);
  return c(this, He) && (T(this, Mt, Ee()), c(this, Ne).before(c(this, Mt)), e = c(this, Mt)), e;
}, /**
 * @param {() => Effect | null} fn
 */
qr = function(e) {
  var i = Q, r = V, n = Ie;
  ft(c(this, lt)), Te(c(this, lt)), Yi(c(this, lt).ctx);
  try {
    return e();
  } catch (s) {
    return js(s), null;
  } finally {
    ft(i), Te(r), Yi(n);
  }
}, Dr = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    c(this, ot).pending
  );
  c(this, Fe) !== null && (T(this, bt, document.createDocumentFragment()), c(this, bt).append(
    /** @type {TemplateNode} */
    c(this, Mt)
  ), fa(c(this, Fe), c(this, bt))), c(this, Ce) === null && T(this, Ce, Ge(() => e(c(this, Ne))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
bn = function(e) {
  var i;
  if (!this.has_pending_snippet()) {
    this.parent && re(i = this.parent, ue, bn).call(i, e);
    return;
  }
  T(this, Lt, c(this, Lt) + e), c(this, Lt) === 0 && (T(this, He, !1), c(this, Ce) && Jt(c(this, Ce), () => {
    T(this, Ce, null);
  }), c(this, bt) && (c(this, Ne).before(c(this, bt)), T(this, bt, null)));
};
function bl(t, e, i, r) {
  const n = en;
  if (i.length === 0 && t.length === 0) {
    r(e.map(n));
    return;
  }
  var s = W, a = (
    /** @type {Effect} */
    Q
  ), o = yl();
  function l() {
    Promise.all(i.map((d) => /* @__PURE__ */ xl(d))).then((d) => {
      o();
      try {
        r([...e.map(n), ...d]);
      } catch (u) {
        a.f & St || Qi(u, a);
      }
      s == null || s.deactivate(), Wr();
    }).catch((d) => {
      Qi(d, a);
    });
  }
  t.length > 0 ? Promise.all(t).then(() => {
    o();
    try {
      return l();
    } finally {
      s == null || s.deactivate(), Wr();
    }
  }) : l();
}
function yl() {
  var t = Q, e = V, i = Ie, r = W;
  return function(s = !0) {
    ft(t), Te(e), Yi(i), s && (r == null || r.activate());
  };
}
function Wr() {
  ft(null), Te(null), Yi(null);
}
// @__NO_SIDE_EFFECTS__
function en(t) {
  var e = me | ze, i = V !== null && V.f & me ? (
    /** @type {Derived} */
    V
  ) : null;
  return Q !== null && (Q.f |= ai), {
    ctx: Ie,
    deps: null,
    effects: null,
    equals: Ps,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      we
    ),
    wv: 0,
    parent: i ?? Q,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function xl(t, e) {
  let i = (
    /** @type {Effect | null} */
    Q
  );
  i === null && Ho();
  var r = (
    /** @type {Boundary} */
    i.b
  ), n = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = si(
    /** @type {V} */
    we
  ), a = !V, o = /* @__PURE__ */ new Map();
  return Ml(() => {
    var p;
    var l = As();
    n = l.promise;
    try {
      Promise.resolve(t()).then(l.resolve, l.reject).then(() => {
        d === W && d.committed && d.deactivate(), Wr();
      });
    } catch (v) {
      l.reject(v), Wr();
    }
    var d = (
      /** @type {Batch} */
      W
    );
    if (a) {
      var u = !r.is_pending();
      r.update_pending_count(1), d.increment(u), (p = o.get(d)) == null || p.reject(pi), o.delete(d), o.set(d, l);
    }
    const g = (v, y = void 0) => {
      if (d.activate(), y)
        y !== pi && (s.f |= Rt, Xi(s, y));
      else {
        s.f & Rt && (s.f ^= Rt), Xi(s, v);
        for (const [_, h] of o) {
          if (o.delete(_), _ === d) break;
          h.reject(pi);
        }
      }
      a && (r.update_pending_count(-1), d.decrement(u));
    };
    l.promise.then(g, (v) => g(null, v || "unknown"));
  }), aa(() => {
    for (const l of o.values())
      l.reject(pi);
  }), new Promise((l) => {
    function d(u) {
      function g() {
        u === n ? l(s) : d(n);
      }
      u.then(g, g);
    }
    d(n);
  });
}
// @__NO_SIDE_EFFECTS__
function te(t) {
  const e = /* @__PURE__ */ en(t);
  return pa(e), e;
}
// @__NO_SIDE_EFFECTS__
function Qs(t) {
  const e = /* @__PURE__ */ en(t);
  return e.equals = zs, e;
}
function Xs(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var i = 0; i < e.length; i += 1)
      ke(
        /** @type {Effect} */
        e[i]
      );
  }
}
function _l(t) {
  for (var e = t.parent; e !== null; ) {
    if (!(e.f & me))
      return e.f & St ? null : (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function qn(t) {
  var e, i = Q;
  ft(_l(t));
  try {
    t.f &= ~ii, Xs(t), e = ba(t);
  } finally {
    ft(i);
  }
  return e;
}
function Ks(t) {
  var e = qn(t);
  if (t.equals(e) || (W != null && W.is_fork || (t.v = e), t.wv = ma()), !li)
    if (de !== null)
      (mr() || W != null && W.is_fork) && de.set(t, e);
    else {
      var i = t.f & it ? be : ht;
      xe(t, i);
    }
}
let yn = /* @__PURE__ */ new Set();
const Nt = /* @__PURE__ */ new Map();
let Js = !1;
function si(t, e) {
  var i = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Ps,
    rv: 0,
    wv: 0
  };
  return i;
}
// @__NO_SIDE_EFFECTS__
function P(t, e) {
  const i = si(t);
  return pa(i), i;
}
// @__NO_SIDE_EFFECTS__
function Zs(t, e = !1, i = !0) {
  const r = si(t);
  return e || (r.equals = zs), r;
}
function A(t, e, i = !1) {
  V !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!gt || V.f & rs) && $s() && V.f & (me | vt | Rn | rs) && !(Se != null && Se.includes(t)) && Jo();
  let r = i ? le(e) : e;
  return Xi(t, r);
}
function Xi(t, e) {
  if (!t.equals(e)) {
    var i = t.v;
    li ? Nt.set(t, e) : Nt.set(t, i), t.v = e;
    var r = ut.ensure();
    r.capture(t, i), t.f & me && (t.f & ze && qn(
      /** @type {Derived} */
      t
    ), xe(t, t.f & it ? be : ht)), t.wv = ma(), ea(t, ze), Q !== null && Q.f & be && !(Q.f & (Tt | Pt)) && (We === null ? Ol([t]) : We.push(t)), !r.is_fork && yn.size > 0 && !Js && kl();
  }
  return e;
}
function kl() {
  Js = !1;
  var t = Zt;
  Hr(!0);
  const e = Array.from(yn);
  try {
    for (const i of e)
      i.f & be && xe(i, ht), Ir(i) && br(i);
  } finally {
    Hr(t);
  }
  yn.clear();
}
function hr(t) {
  A(t, t.v + 1);
}
function ea(t, e) {
  var i = t.reactions;
  if (i !== null)
    for (var r = i.length, n = 0; n < r; n++) {
      var s = i[n], a = s.f, o = (a & ze) === 0;
      if (o && xe(s, e), a & me) {
        var l = (
          /** @type {Derived} */
          s
        );
        de == null || de.delete(l), a & ii || (a & it && (s.f |= ii), ea(l, ht));
      } else o && (a & vt && Ze !== null && Ze.add(
        /** @type {Effect} */
        s
      ), ni(
        /** @type {Effect} */
        s
      ));
    }
}
function le(t) {
  if (typeof t != "object" || t === null || ur in t)
    return t;
  const e = Is(t);
  if (e !== Do && e !== Po)
    return t;
  var i = /* @__PURE__ */ new Map(), r = Es(t), n = /* @__PURE__ */ P(0), s = ei, a = (o) => {
    if (ei === s)
      return o();
    var l = V, d = ei;
    Te(null), ls(s);
    var u = o();
    return Te(l), ls(d), u;
  };
  return r && i.set("length", /* @__PURE__ */ P(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(o, l, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && Xo();
        var u = i.get(l);
        return u === void 0 ? u = a(() => {
          var g = /* @__PURE__ */ P(d.value);
          return i.set(l, g), g;
        }) : A(u, d.value, !0), !0;
      },
      deleteProperty(o, l) {
        var d = i.get(l);
        if (d === void 0) {
          if (l in o) {
            const u = a(() => /* @__PURE__ */ P(we));
            i.set(l, u), hr(n);
          }
        } else
          A(d, we), hr(n);
        return !0;
      },
      get(o, l, d) {
        var v;
        if (l === ur)
          return t;
        var u = i.get(l), g = l in o;
        if (u === void 0 && (!g || (v = Kt(o, l)) != null && v.writable) && (u = a(() => {
          var y = le(g ? o[l] : we), _ = /* @__PURE__ */ P(y);
          return _;
        }), i.set(l, u)), u !== void 0) {
          var p = f(u);
          return p === we ? void 0 : p;
        }
        return Reflect.get(o, l, d);
      },
      getOwnPropertyDescriptor(o, l) {
        var d = Reflect.getOwnPropertyDescriptor(o, l);
        if (d && "value" in d) {
          var u = i.get(l);
          u && (d.value = f(u));
        } else if (d === void 0) {
          var g = i.get(l), p = g == null ? void 0 : g.v;
          if (g !== void 0 && p !== we)
            return {
              enumerable: !0,
              configurable: !0,
              value: p,
              writable: !0
            };
        }
        return d;
      },
      has(o, l) {
        var p;
        if (l === ur)
          return !0;
        var d = i.get(l), u = d !== void 0 && d.v !== we || Reflect.has(o, l);
        if (d !== void 0 || Q !== null && (!u || (p = Kt(o, l)) != null && p.writable)) {
          d === void 0 && (d = a(() => {
            var v = u ? le(o[l]) : we, y = /* @__PURE__ */ P(v);
            return y;
          }), i.set(l, d));
          var g = f(d);
          if (g === we)
            return !1;
        }
        return u;
      },
      set(o, l, d, u) {
        var m;
        var g = i.get(l), p = l in o;
        if (r && l === "length")
          for (var v = d; v < /** @type {Source<number>} */
          g.v; v += 1) {
            var y = i.get(v + "");
            y !== void 0 ? A(y, we) : v in o && (y = a(() => /* @__PURE__ */ P(we)), i.set(v + "", y));
          }
        if (g === void 0)
          (!p || (m = Kt(o, l)) != null && m.writable) && (g = a(() => /* @__PURE__ */ P(void 0)), A(g, le(d)), i.set(l, g));
        else {
          p = g.v !== we;
          var _ = a(() => le(d));
          A(g, _);
        }
        var h = Reflect.getOwnPropertyDescriptor(o, l);
        if (h != null && h.set && h.set.call(u, d), !p) {
          if (r && typeof l == "string") {
            var x = (
              /** @type {Source<number>} */
              i.get("length")
            ), M = Number(l);
            Number.isInteger(M) && M >= x.v && A(x, M + 1);
          }
          hr(n);
        }
        return !0;
      },
      ownKeys(o) {
        f(n);
        var l = Reflect.ownKeys(o).filter((g) => {
          var p = i.get(g);
          return p === void 0 || p.v !== we;
        });
        for (var [d, u] of i)
          u.v !== we && !(d in o) && l.push(d);
        return l;
      },
      setPrototypeOf() {
        Ko();
      }
    }
  );
}
var ss, ta, ia, ra;
function xn() {
  if (ss === void 0) {
    ss = window, ta = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, i = Text.prototype;
    ia = Kt(e, "firstChild").get, ra = Kt(e, "nextSibling").get, is(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), is(i) && (i.__t = void 0);
  }
}
function Ee(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function pe(t) {
  return (
    /** @type {TemplateNode | null} */
    ia.call(t)
  );
}
// @__NO_SIDE_EFFECTS__
function rt(t) {
  return (
    /** @type {TemplateNode | null} */
    ra.call(t)
  );
}
function Y(t, e) {
  if (!U)
    return /* @__PURE__ */ pe(t);
  var i = /* @__PURE__ */ pe(z);
  if (i === null)
    i = z.appendChild(Ee());
  else if (e && i.nodeType !== Kr) {
    var r = Ee();
    return i == null || i.before(r), ye(r), r;
  }
  return ye(i), i;
}
function Ye(t, e = !1) {
  if (!U) {
    var i = /* @__PURE__ */ pe(t);
    return i instanceof Comment && i.data === "" ? /* @__PURE__ */ rt(i) : i;
  }
  if (e && (z == null ? void 0 : z.nodeType) !== Kr) {
    var r = Ee();
    return z == null || z.before(r), ye(r), r;
  }
  return z;
}
function Z(t, e = 1, i = !1) {
  let r = U ? z : t;
  for (var n; e--; )
    n = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ rt(r);
  if (!U)
    return r;
  if (i && (r == null ? void 0 : r.nodeType) !== Kr) {
    var s = Ee();
    return r === null ? n == null || n.after(s) : r.before(s), ye(s), s;
  }
  return ye(r), r;
}
function Dn(t) {
  t.textContent = "";
}
function na() {
  return !1;
}
function Sl(t) {
  U && /* @__PURE__ */ pe(t) !== null && Dn(t);
}
let as = !1;
function sa() {
  as || (as = !0, document.addEventListener(
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
function Zi(t) {
  var e = V, i = Q;
  Te(null), ft(null);
  try {
    return t();
  } finally {
    Te(e), ft(i);
  }
}
function Cl(t, e, i, r = i) {
  t.addEventListener(e, () => Zi(i));
  const n = t.__on_r;
  n ? t.__on_r = () => {
    n(), r(!0);
  } : t.__on_r = () => r(!0), sa();
}
function Tl(t) {
  Q === null && (V === null && Vo(), Bo()), li && Fo();
}
function El(t, e) {
  var i = e.last;
  i === null ? e.last = e.first = t : (i.next = t, t.prev = i, e.last = t);
}
function mt(t, e, i) {
  var r = Q;
  r !== null && r.f & De && (t |= De);
  var n = {
    ctx: Ie,
    deps: null,
    nodes: null,
    f: t | ze | it,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: r,
    b: r && r.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  if (i)
    try {
      br(n), n.f |= Tr;
    } catch (o) {
      throw ke(n), o;
    }
  else e !== null && ni(n);
  var s = n;
  if (i && s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
  !(s.f & ai) && (s = s.first, t & vt && t & ti && s !== null && (s.f |= ti)), s !== null && (s.parent = r, r !== null && El(s, r), V !== null && V.f & me && !(t & Pt))) {
    var a = (
      /** @type {Derived} */
      V
    );
    (a.effects ?? (a.effects = [])).push(s);
  }
  return n;
}
function mr() {
  return V !== null && !gt;
}
function aa(t) {
  const e = mt(On, null, !1);
  return xe(e, be), e.teardown = t, e;
}
function qt(t) {
  Tl();
  var e = (
    /** @type {Effect} */
    Q.f
  ), i = !V && (e & Tt) !== 0 && (e & Tr) === 0;
  if (i) {
    var r = (
      /** @type {ComponentContext} */
      Ie
    );
    (r.e ?? (r.e = [])).push(t);
  } else
    return oa(t);
}
function oa(t) {
  return mt(Ln | jo, t, !1);
}
function Il(t) {
  ut.ensure();
  const e = mt(Pt | ai, t, !0);
  return () => {
    ke(e);
  };
}
function Al(t) {
  ut.ensure();
  const e = mt(Pt | ai, t, !0);
  return (i = {}) => new Promise((r) => {
    i.outro ? Jt(e, () => {
      ke(e), r(void 0);
    }) : (ke(e), r(void 0));
  });
}
function Pn(t) {
  return mt(Ln, t, !1);
}
function Ml(t) {
  return mt(Rn | ai, t, !0);
}
function tn(t, e = 0) {
  return mt(On | e, t, !0);
}
function he(t, e = [], i = [], r = []) {
  bl(r, e, i, (n) => {
    mt(On, () => t(...n.map(f)), !0);
  });
}
function zn(t, e = 0) {
  var i = mt(vt | e, t, !0);
  return i;
}
function Ge(t) {
  return mt(Tt | ai, t, !0);
}
function la(t) {
  var e = t.teardown;
  if (e !== null) {
    const i = li, r = V;
    os(!0), Te(null);
    try {
      e.call(null);
    } finally {
      os(i), Te(r);
    }
  }
}
function da(t, e = !1) {
  var i = t.first;
  for (t.first = t.last = null; i !== null; ) {
    const n = i.ac;
    n !== null && Zi(() => {
      n.abort(pi);
    });
    var r = i.next;
    i.f & Pt ? i.parent = null : ke(i, e), i = r;
  }
}
function Ll(t) {
  for (var e = t.first; e !== null; ) {
    var i = e.next;
    e.f & Tt || ke(e), e = i;
  }
}
function ke(t, e = !0) {
  var i = !1;
  (e || t.f & Ms) && t.nodes !== null && t.nodes.end !== null && (ca(
    t.nodes.start,
    /** @type {TemplateNode} */
    t.nodes.end
  ), i = !0), da(t, e && !i), Fr(t, 0), xe(t, St);
  var r = t.nodes && t.nodes.t;
  if (r !== null)
    for (const s of r)
      s.stop();
  la(t);
  var n = t.parent;
  n !== null && n.first !== null && ua(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes = t.ac = null;
}
function ca(t, e) {
  for (; t !== null; ) {
    var i = t === e ? null : /* @__PURE__ */ rt(t);
    t.remove(), t = i;
  }
}
function ua(t) {
  var e = t.parent, i = t.prev, r = t.next;
  i !== null && (i.next = r), r !== null && (r.prev = i), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = i));
}
function Jt(t, e, i = !0) {
  var r = [];
  ga(t, r, !0);
  var n = () => {
    i && ke(t), e && e();
  }, s = r.length;
  if (s > 0) {
    var a = () => --s || n();
    for (var o of r)
      o.out(a);
  } else
    n();
}
function ga(t, e, i) {
  if (!(t.f & De)) {
    t.f ^= De;
    var r = t.nodes && t.nodes.t;
    if (r !== null)
      for (const o of r)
        (o.is_global || i) && e.push(o);
    for (var n = t.first; n !== null; ) {
      var s = n.next, a = (n.f & ti) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (n.f & Tt) !== 0 && (t.f & vt) !== 0;
      ga(n, e, a ? i : !1), n = s;
    }
  }
}
function $n(t) {
  ha(t, !0);
}
function ha(t, e) {
  if (t.f & De) {
    t.f ^= De, t.f & be || (xe(t, ze), ni(t));
    for (var i = t.first; i !== null; ) {
      var r = i.next, n = (i.f & ti) !== 0 || (i.f & Tt) !== 0;
      ha(i, n ? e : !1), i = r;
    }
    var s = t.nodes && t.nodes.t;
    if (s !== null)
      for (const a of s)
        (a.is_global || e) && a.in();
  }
}
function fa(t, e) {
  if (t.nodes)
    for (var i = t.nodes.start, r = t.nodes.end; i !== null; ) {
      var n = i === r ? null : /* @__PURE__ */ rt(i);
      e.append(i), i = n;
    }
}
let Zt = !1;
function Hr(t) {
  Zt = t;
}
let li = !1;
function os(t) {
  li = t;
}
let V = null, gt = !1;
function Te(t) {
  V = t;
}
let Q = null;
function ft(t) {
  Q = t;
}
let Se = null;
function pa(t) {
  V !== null && (Se === null ? Se = [t] : Se.push(t));
}
let _e = null, Re = 0, We = null;
function Ol(t) {
  We = t;
}
let va = 1, wr = 0, ei = wr;
function ls(t) {
  ei = t;
}
function ma() {
  return ++va;
}
function Ir(t) {
  var e = t.f;
  if (e & ze)
    return !0;
  if (e & me && (t.f &= ~ii), e & ht) {
    var i = t.deps;
    if (i !== null)
      for (var r = i.length, n = 0; n < r; n++) {
        var s = i[n];
        if (Ir(
          /** @type {Derived} */
          s
        ) && Ks(
          /** @type {Derived} */
          s
        ), s.wv > t.wv)
          return !0;
      }
    e & it && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    de === null && xe(t, be);
  }
  return !1;
}
function wa(t, e, i = !0) {
  var r = t.reactions;
  if (r !== null && !(Se != null && Se.includes(t)))
    for (var n = 0; n < r.length; n++) {
      var s = r[n];
      s.f & me ? wa(
        /** @type {Derived} */
        s,
        e,
        !1
      ) : e === s && (i ? xe(s, ze) : s.f & be && xe(s, ht), ni(
        /** @type {Effect} */
        s
      ));
    }
}
function ba(t) {
  var y;
  var e = _e, i = Re, r = We, n = V, s = Se, a = Ie, o = gt, l = ei, d = t.f;
  _e = /** @type {null | Value[]} */
  null, Re = 0, We = null, V = d & (Tt | Pt) ? null : t, Se = null, Yi(t.ctx), gt = !1, ei = ++wr, t.ac !== null && (Zi(() => {
    t.ac.abort(pi);
  }), t.ac = null);
  try {
    t.f |= fn;
    var u = (
      /** @type {Function} */
      t.fn
    ), g = u(), p = t.deps;
    if (_e !== null) {
      var v;
      if (Fr(t, Re), p !== null && Re > 0)
        for (p.length = Re + _e.length, v = 0; v < _e.length; v++)
          p[Re + v] = _e[v];
      else
        t.deps = p = _e;
      if (mr() && t.f & it)
        for (v = Re; v < p.length; v++)
          ((y = p[v]).reactions ?? (y.reactions = [])).push(t);
    } else p !== null && Re < p.length && (Fr(t, Re), p.length = Re);
    if ($s() && We !== null && !gt && p !== null && !(t.f & (me | ht | ze)))
      for (v = 0; v < /** @type {Source[]} */
      We.length; v++)
        wa(
          We[v],
          /** @type {Effect} */
          t
        );
    return n !== null && n !== t && (wr++, We !== null && (r === null ? r = We : r.push(.../** @type {Source[]} */
    We))), t.f & Rt && (t.f ^= Rt), g;
  } catch (_) {
    return js(_);
  } finally {
    t.f ^= fn, _e = e, Re = i, We = r, V = n, Se = s, Yi(a), gt = o, ei = l;
  }
}
function Rl(t, e) {
  let i = e.reactions;
  if (i !== null) {
    var r = No.call(i, t);
    if (r !== -1) {
      var n = i.length - 1;
      n === 0 ? i = e.reactions = null : (i[r] = i[n], i.pop());
    }
  }
  i === null && e.f & me && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (_e === null || !_e.includes(e)) && (xe(e, ht), e.f & it && (e.f ^= it, e.f &= ~ii), Xs(
    /** @type {Derived} **/
    e
  ), Fr(
    /** @type {Derived} **/
    e,
    0
  ));
}
function Fr(t, e) {
  var i = t.deps;
  if (i !== null)
    for (var r = e; r < i.length; r++)
      Rl(t, i[r]);
}
function br(t) {
  var e = t.f;
  if (!(e & St)) {
    xe(t, be);
    var i = Q, r = Zt;
    Q = t, Zt = !0;
    try {
      e & (vt | Uo) ? Ll(t) : da(t), la(t);
      var n = ba(t);
      t.teardown = typeof n == "function" ? n : null, t.wv = va;
      var s;
    } finally {
      Zt = r, Q = i;
    }
  }
}
async function ya() {
  await Promise.resolve(), R();
}
function f(t) {
  var e = t.f, i = (e & me) !== 0;
  if (V !== null && !gt) {
    var r = Q !== null && (Q.f & St) !== 0;
    if (!r && !(Se != null && Se.includes(t))) {
      var n = V.deps;
      if (V.f & fn)
        t.rv < wr && (t.rv = wr, _e === null && n !== null && n[Re] === t ? Re++ : _e === null ? _e = [t] : _e.includes(t) || _e.push(t));
      else {
        (V.deps ?? (V.deps = [])).push(t);
        var s = t.reactions;
        s === null ? t.reactions = [V] : s.includes(V) || s.push(V);
      }
    }
  }
  if (li) {
    if (Nt.has(t))
      return Nt.get(t);
    if (i) {
      var a = (
        /** @type {Derived} */
        t
      ), o = a.v;
      return (!(a.f & be) && a.reactions !== null || _a(a)) && (o = qn(a)), Nt.set(a, o), o;
    }
  } else i && (!(de != null && de.has(t)) || W != null && W.is_fork && !mr()) && (a = /** @type {Derived} */
  t, Ir(a) && Ks(a), Zt && mr() && !(a.f & it) && xa(a));
  if (de != null && de.has(t))
    return de.get(t);
  if (t.f & Rt)
    throw t.v;
  return t.v;
}
function xa(t) {
  if (t.deps !== null) {
    t.f ^= it;
    for (const e of t.deps)
      (e.reactions ?? (e.reactions = [])).push(t), e.f & me && !(e.f & it) && xa(
        /** @type {Derived} */
        e
      );
  }
}
function _a(t) {
  if (t.v === we) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (Nt.has(e) || e.f & me && _a(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function di(t) {
  var e = gt;
  try {
    return gt = !0, t();
  } finally {
    gt = e;
  }
}
const Nl = -7169;
function xe(t, e) {
  t.f = t.f & Nl | e;
}
const ql = ["touchstart", "touchmove"];
function Dl(t) {
  return ql.includes(t);
}
const ka = /* @__PURE__ */ new Set(), _n = /* @__PURE__ */ new Set();
function Pl(t, e, i, r = {}) {
  function n(s) {
    if (r.capture || lr.call(e, s), !s.cancelBubble)
      return Zi(() => i == null ? void 0 : i.call(this, s));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? zt(() => {
    e.addEventListener(t, n, r);
  }) : e.addEventListener(t, n, r), n;
}
function Sa(t, e, i, r, n) {
  var s = { capture: r, passive: n }, a = Pl(t, e, i, s);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && aa(() => {
    e.removeEventListener(t, a, s);
  });
}
function $t(t) {
  for (var e = 0; e < t.length; e++)
    ka.add(t[e]);
  for (var i of _n)
    i(t);
}
let ds = null;
function lr(t) {
  var h;
  var e = this, i = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, n = ((h = t.composedPath) == null ? void 0 : h.call(t)) || [], s = (
    /** @type {null | Element} */
    n[0] || t.target
  );
  ds = t;
  var a = 0, o = ds === t && t.__root;
  if (o) {
    var l = n.indexOf(o);
    if (l !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var d = n.indexOf(e);
    if (d === -1)
      return;
    l <= d && (a = l);
  }
  if (s = /** @type {Element} */
  n[a] || t.target, s !== e) {
    Ur(t, "currentTarget", {
      configurable: !0,
      get() {
        return s || i;
      }
    });
    var u = V, g = Q;
    Te(null), ft(null);
    try {
      for (var p, v = []; s !== null; ) {
        var y = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var _ = s["__" + r];
          _ != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === s) && _.call(s, t);
        } catch (x) {
          p ? v.push(x) : p = x;
        }
        if (t.cancelBubble || y === e || y === null)
          break;
        s = y;
      }
      if (p) {
        for (let x of v)
          queueMicrotask(() => {
            throw x;
          });
        throw p;
      }
    } finally {
      t.__root = e, delete t.currentTarget, Te(u), ft(g);
    }
  }
}
function Un(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function Pe(t, e) {
  var i = (
    /** @type {Effect} */
    Q
  );
  i.nodes === null && (i.nodes = { start: t, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function H(t, e) {
  var i = (e & Ns) !== 0, r = (e & dl) !== 0, n, s = !t.startsWith("<!>");
  return () => {
    if (U)
      return Pe(z, null), z;
    n === void 0 && (n = Un(s ? t : "<!>" + t), i || (n = /** @type {TemplateNode} */
    /* @__PURE__ */ pe(n)));
    var a = (
      /** @type {TemplateNode} */
      r || ta ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    if (i) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ pe(a)
      ), l = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      Pe(o, l);
    } else
      Pe(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function zl(t, e, i = "svg") {
  var r = !t.startsWith("<!>"), n = (e & Ns) !== 0, s = `<${i}>${r ? t : "<!>" + t}</${i}>`, a;
  return () => {
    if (U)
      return Pe(z, null), z;
    if (!a) {
      var o = (
        /** @type {DocumentFragment} */
        Un(s)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ pe(o)
      );
      if (n)
        for (a = document.createDocumentFragment(); /* @__PURE__ */ pe(l); )
          a.appendChild(
            /** @type {TemplateNode} */
            /* @__PURE__ */ pe(l)
          );
      else
        a = /** @type {Element} */
        /* @__PURE__ */ pe(l);
    }
    var d = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    if (n) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ pe(d)
      ), g = (
        /** @type {TemplateNode} */
        d.lastChild
      );
      Pe(u, g);
    } else
      Pe(d, d);
    return d;
  };
}
// @__NO_SIDE_EFFECTS__
function rn(t, e) {
  return /* @__PURE__ */ zl(t, e, "svg");
}
function $l(t = "") {
  if (!U) {
    var e = Ee(t + "");
    return Pe(e, e), e;
  }
  var i = z;
  return i.nodeType !== Kr && (i.before(i = Ee()), ye(i)), Pe(i, i), i;
}
function er() {
  if (U)
    return Pe(z, null), z;
  var t = document.createDocumentFragment(), e = document.createComment(""), i = Ee();
  return t.append(e, i), Pe(e, i), t;
}
function D(t, e) {
  if (U) {
    var i = (
      /** @type {Effect & { nodes: EffectNodes }} */
      Q
    );
    (!(i.f & Tr) || i.nodes.end === null) && (i.nodes.end = z), Gi();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
let kn = !0;
function Ct(t, e) {
  var i = e == null ? "" : typeof e == "object" ? e + "" : e;
  i !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = i, t.nodeValue = i + "");
}
function nn(t, e) {
  return Ca(t, e);
}
function Ul(t, e) {
  xn(), e.intro = e.intro ?? !1;
  const i = e.target, r = U, n = z;
  try {
    for (var s = /* @__PURE__ */ pe(i); s && (s.nodeType !== oi || /** @type {Comment} */
    s.data !== qs); )
      s = /* @__PURE__ */ rt(s);
    if (!s)
      throw ri;
    kt(!0), ye(
      /** @type {Comment} */
      s
    );
    const a = Ca(t, { ...e, anchor: s });
    return kt(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a instanceof Error && a.message.split(`
`).some((o) => o.startsWith("https://svelte.dev/e/")))
      throw a;
    return a !== ri && console.warn("Failed to hydrate: ", a), e.recover === !1 && Yo(), xn(), Dn(i), kt(!1), nn(t, e);
  } finally {
    kt(r), ye(n);
  }
}
const hi = /* @__PURE__ */ new Map();
function Ca(t, { target: e, anchor: i, props: r = {}, events: n, context: s, intro: a = !0 }) {
  xn();
  var o = /* @__PURE__ */ new Set(), l = (g) => {
    for (var p = 0; p < g.length; p++) {
      var v = g[p];
      if (!o.has(v)) {
        o.add(v);
        var y = Dl(v);
        e.addEventListener(v, lr, { passive: y });
        var _ = hi.get(v);
        _ === void 0 ? (document.addEventListener(v, lr, { passive: y }), hi.set(v, 1)) : hi.set(v, _ + 1);
      }
    }
  };
  l(Qr(ka)), _n.add(l);
  var d = void 0, u = Al(() => {
    var g = i ?? e.appendChild(Ee());
    return ml(
      /** @type {TemplateNode} */
      g,
      {
        pending: () => {
        }
      },
      (p) => {
        if (s) {
          Qe({});
          var v = (
            /** @type {ComponentContext} */
            Ie
          );
          v.c = s;
        }
        if (n && (r.$$events = n), U && Pe(
          /** @type {TemplateNode} */
          p,
          null
        ), kn = a, d = t(p, r) || {}, kn = !0, U && (Q.nodes.end = z, z === null || z.nodeType !== oi || /** @type {Comment} */
        z.data !== Nn))
          throw Er(), ri;
        s && Xe();
      }
    ), () => {
      var y;
      for (var p of o) {
        e.removeEventListener(p, lr);
        var v = (
          /** @type {number} */
          hi.get(p)
        );
        --v === 0 ? (document.removeEventListener(p, lr), hi.delete(p)) : hi.set(p, v);
      }
      _n.delete(l), g !== i && ((y = g.parentNode) == null || y.removeChild(g));
    };
  });
  return Sn.set(d, u), d;
}
let Sn = /* @__PURE__ */ new WeakMap();
function wi(t, e) {
  const i = Sn.get(t);
  return i ? (Sn.delete(t), i(e)) : Promise.resolve();
}
var tt, ct, qe, Xt, Sr, Cr, Yr;
class jl {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, i = !0) {
    /** @type {TemplateNode} */
    oe(this, "anchor");
    /** @type {Map<Batch, Key>} */
    I(this, tt, /* @__PURE__ */ new Map());
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
    I(this, ct, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    I(this, qe, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    I(this, Xt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    I(this, Sr, !0);
    I(this, Cr, () => {
      var e = (
        /** @type {Batch} */
        W
      );
      if (c(this, tt).has(e)) {
        var i = (
          /** @type {Key} */
          c(this, tt).get(e)
        ), r = c(this, ct).get(i);
        if (r)
          $n(r), c(this, Xt).delete(i);
        else {
          var n = c(this, qe).get(i);
          n && (c(this, ct).set(i, n.effect), c(this, qe).delete(i), n.fragment.lastChild.remove(), this.anchor.before(n.fragment), r = n.effect);
        }
        for (const [s, a] of c(this, tt)) {
          if (c(this, tt).delete(s), s === e)
            break;
          const o = c(this, qe).get(a);
          o && (ke(o.effect), c(this, qe).delete(a));
        }
        for (const [s, a] of c(this, ct)) {
          if (s === i || c(this, Xt).has(s)) continue;
          const o = () => {
            if (Array.from(c(this, tt).values()).includes(s)) {
              var d = document.createDocumentFragment();
              fa(a, d), d.append(Ee()), c(this, qe).set(s, { effect: a, fragment: d });
            } else
              ke(a);
            c(this, Xt).delete(s), c(this, ct).delete(s);
          };
          c(this, Sr) || !r ? (c(this, Xt).add(s), Jt(a, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    I(this, Yr, (e) => {
      c(this, tt).delete(e);
      const i = Array.from(c(this, tt).values());
      for (const [r, n] of c(this, qe))
        i.includes(r) || (ke(n.effect), c(this, qe).delete(r));
    });
    this.anchor = e, T(this, Sr, i);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, i) {
    var r = (
      /** @type {Batch} */
      W
    ), n = na();
    if (i && !c(this, ct).has(e) && !c(this, qe).has(e))
      if (n) {
        var s = document.createDocumentFragment(), a = Ee();
        s.append(a), c(this, qe).set(e, {
          effect: Ge(() => i(a)),
          fragment: s
        });
      } else
        c(this, ct).set(
          e,
          Ge(() => i(this.anchor))
        );
    if (c(this, tt).set(r, e), n) {
      for (const [o, l] of c(this, ct))
        o === e ? r.skipped_effects.delete(l) : r.skipped_effects.add(l);
      for (const [o, l] of c(this, qe))
        o === e ? r.skipped_effects.delete(l.effect) : r.skipped_effects.add(l.effect);
      r.oncommit(c(this, Cr)), r.ondiscard(c(this, Yr));
    } else
      U && (this.anchor = z), c(this, Cr).call(this);
  }
}
tt = new WeakMap(), ct = new WeakMap(), qe = new WeakMap(), Xt = new WeakMap(), Sr = new WeakMap(), Cr = new WeakMap(), Yr = new WeakMap();
function ee(t, e, i = !1) {
  U && Gi();
  var r = new jl(t), n = i ? ti : 0;
  function s(a, o) {
    if (U) {
      const d = Ds(t) === Jr;
      if (a === d) {
        var l = jr();
        ye(l), r.anchor = l, kt(!1), r.ensure(a, o), kt(!0);
        return;
      }
    }
    r.ensure(a, o);
  }
  zn(() => {
    var a = !1;
    e((o, l = !0) => {
      a = !0, s(l, o);
    }), a || s(!1, null);
  }, n);
}
function Wl(t, e, i) {
  for (var r = [], n = e.length, s, a = e.length, o = 0; o < n; o++) {
    let g = e[o];
    Jt(
      g,
      () => {
        if (s) {
          if (s.pending.delete(g), s.done.add(g), s.pending.size === 0) {
            var p = (
              /** @type {Set<EachOutroGroup>} */
              t.outrogroups
            );
            Cn(Qr(s.done)), p.delete(s), p.size === 0 && (t.outrogroups = null);
          }
        } else
          a -= 1;
      },
      !1
    );
  }
  if (a === 0) {
    var l = r.length === 0 && i !== null;
    if (l) {
      var d = (
        /** @type {Element} */
        i
      ), u = (
        /** @type {Element} */
        d.parentNode
      );
      Dn(u), u.append(d), t.items.clear();
    }
    Cn(e, !l);
  } else
    s = {
      pending: new Set(e),
      done: /* @__PURE__ */ new Set()
    }, (t.outrogroups ?? (t.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function Cn(t, e = !0) {
  for (var i = 0; i < t.length; i++)
    ke(t[i], e);
}
var cs;
function Tn(t, e, i, r, n, s = null) {
  var a = t, o = /* @__PURE__ */ new Map(), l = (e & Rs) !== 0;
  if (l) {
    var d = (
      /** @type {Element} */
      t
    );
    a = U ? ye(/* @__PURE__ */ pe(d)) : d.appendChild(Ee());
  }
  U && Gi();
  var u = null, g = /* @__PURE__ */ Qs(() => {
    var x = i();
    return Es(x) ? x : x == null ? [] : Qr(x);
  }), p, v = !0;
  function y() {
    h.fallback = u, Hl(h, p, a, e, r), u !== null && (p.length === 0 ? u.f & _t ? (u.f ^= _t, dr(u, null, a)) : $n(u) : Jt(u, () => {
      u = null;
    }));
  }
  var _ = zn(() => {
    p = /** @type {V[]} */
    f(g);
    var x = p.length;
    let M = !1;
    if (U) {
      var m = Ds(a) === Jr;
      m !== (x === 0) && (a = jr(), ye(a), kt(!1), M = !0);
    }
    for (var b = /* @__PURE__ */ new Set(), E = (
      /** @type {Batch} */
      W
    ), L = na(), N = 0; N < x; N += 1) {
      U && z.nodeType === oi && /** @type {Comment} */
      z.data === Nn && (a = /** @type {Comment} */
      z, M = !0, kt(!1));
      var $ = p[N], S = r($, N), C = v ? null : o.get(S);
      C ? (C.v && Xi(C.v, $), C.i && Xi(C.i, N), L && E.skipped_effects.delete(C.e)) : (C = Fl(
        o,
        v ? a : cs ?? (cs = Ee()),
        $,
        S,
        N,
        n,
        e,
        i
      ), v || (C.e.f |= _t), o.set(S, C)), b.add(S);
    }
    if (x === 0 && s && !u && (v ? u = Ge(() => s(a)) : (u = Ge(() => s(cs ?? (cs = Ee()))), u.f |= _t)), U && x > 0 && ye(jr()), !v)
      if (L) {
        for (const [F, j] of o)
          b.has(F) || E.skipped_effects.add(j.e);
        E.oncommit(y), E.ondiscard(() => {
        });
      } else
        y();
    M && kt(!0), f(g);
  }), h = { effect: _, items: o, outrogroups: null, fallback: u };
  v = !1, U && (a = z);
}
function Hl(t, e, i, r, n) {
  var C, F, j, X, ne, fe, Ke, Ut, ui;
  var s = (r & il) !== 0, a = e.length, o = t.items, l = t.effect.first, d, u = null, g, p = [], v = [], y, _, h, x;
  if (s)
    for (x = 0; x < a; x += 1)
      y = e[x], _ = n(y, x), h = /** @type {EachItem} */
      o.get(_).e, h.f & _t || ((F = (C = h.nodes) == null ? void 0 : C.a) == null || F.measure(), (g ?? (g = /* @__PURE__ */ new Set())).add(h));
  for (x = 0; x < a; x += 1) {
    if (y = e[x], _ = n(y, x), h = /** @type {EachItem} */
    o.get(_).e, t.outrogroups !== null)
      for (const Me of t.outrogroups)
        Me.pending.delete(h), Me.done.delete(h);
    if (h.f & _t)
      if (h.f ^= _t, h === l)
        dr(h, null, i);
      else {
        var M = u ? u.next : l;
        h === t.effect.last && (t.effect.last = h.prev), h.prev && (h.prev.next = h.next), h.next && (h.next.prev = h.prev), It(t, u, h), It(t, h, M), dr(h, M, i), u = h, p = [], v = [], l = u.next;
        continue;
      }
    if (h.f & De && ($n(h), s && ((X = (j = h.nodes) == null ? void 0 : j.a) == null || X.unfix(), (g ?? (g = /* @__PURE__ */ new Set())).delete(h))), h !== l) {
      if (d !== void 0 && d.has(h)) {
        if (p.length < v.length) {
          var m = v[0], b;
          u = m.prev;
          var E = p[0], L = p[p.length - 1];
          for (b = 0; b < p.length; b += 1)
            dr(p[b], m, i);
          for (b = 0; b < v.length; b += 1)
            d.delete(v[b]);
          It(t, E.prev, L.next), It(t, u, E), It(t, L, m), l = m, u = L, x -= 1, p = [], v = [];
        } else
          d.delete(h), dr(h, l, i), It(t, h.prev, h.next), It(t, h, u === null ? t.effect.first : u.next), It(t, u, h), u = h;
        continue;
      }
      for (p = [], v = []; l !== null && l !== h; )
        (d ?? (d = /* @__PURE__ */ new Set())).add(l), v.push(l), l = l.next;
      if (l === null)
        continue;
    }
    h.f & _t || p.push(h), u = h, l = h.next;
  }
  if (t.outrogroups !== null) {
    for (const Me of t.outrogroups)
      Me.pending.size === 0 && (Cn(Qr(Me.done)), (ne = t.outrogroups) == null || ne.delete(Me));
    t.outrogroups.size === 0 && (t.outrogroups = null);
  }
  if (l !== null || d !== void 0) {
    var N = [];
    if (d !== void 0)
      for (h of d)
        h.f & De || N.push(h);
    for (; l !== null; )
      !(l.f & De) && l !== t.fallback && N.push(l), l = l.next;
    var $ = N.length;
    if ($ > 0) {
      var S = r & Rs && a === 0 ? i : null;
      if (s) {
        for (x = 0; x < $; x += 1)
          (Ke = (fe = N[x].nodes) == null ? void 0 : fe.a) == null || Ke.measure();
        for (x = 0; x < $; x += 1)
          (ui = (Ut = N[x].nodes) == null ? void 0 : Ut.a) == null || ui.fix();
      }
      Wl(t, N, S);
    }
  }
  s && zt(() => {
    var Me, k;
    if (g !== void 0)
      for (h of g)
        (k = (Me = h.nodes) == null ? void 0 : Me.a) == null || k.apply();
  });
}
function Fl(t, e, i, r, n, s, a, o) {
  var l = a & el ? a & rl ? si(i) : /* @__PURE__ */ Zs(i, !1, !1) : null, d = a & tl ? si(n) : null;
  return {
    v: l,
    i: d,
    e: Ge(() => (s(e, l ?? i, d ?? n, o), () => {
      t.delete(r);
    }))
  };
}
function dr(t, e, i) {
  if (t.nodes)
    for (var r = t.nodes.start, n = t.nodes.end, s = e && !(e.f & _t) ? (
      /** @type {EffectNodes} */
      e.nodes.start
    ) : i; r !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ rt(r)
      );
      if (s.before(r), r === n)
        return;
      r = a;
    }
}
function It(t, e, i) {
  e === null ? t.effect.first = i : e.next = i, i === null ? t.effect.last = e : i.prev = e;
}
function Bl(t, e, i = !1, r = !1, n = !1) {
  var s = t, a = "";
  he(() => {
    var o = (
      /** @type {Effect} */
      Q
    );
    if (a === (a = e() ?? "")) {
      U && Gi();
      return;
    }
    if (o.nodes !== null && (ca(
      o.nodes.start,
      /** @type {TemplateNode} */
      o.nodes.end
    ), o.nodes = null), a !== "") {
      if (U) {
        z.data;
        for (var l = Gi(), d = l; l !== null && (l.nodeType !== oi || /** @type {Comment} */
        l.data !== ""); )
          d = l, l = /* @__PURE__ */ rt(l);
        if (l === null)
          throw Er(), ri;
        Pe(z, d), s = ye(l);
        return;
      }
      var u = a + "";
      i ? u = `<svg>${u}</svg>` : r && (u = `<math>${u}</math>`);
      var g = Un(u);
      if ((i || r) && (g = /** @type {Element} */
      /* @__PURE__ */ pe(g)), Pe(
        /** @type {TemplateNode} */
        /* @__PURE__ */ pe(g),
        /** @type {TemplateNode} */
        g.lastChild
      ), i || r)
        for (; /* @__PURE__ */ pe(g); )
          s.before(
            /** @type {TemplateNode} */
            /* @__PURE__ */ pe(g)
          );
      else
        s.before(g);
    }
  });
}
const Vl = () => performance.now(), xt = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (t) => requestAnimationFrame(t)
  ),
  now: () => Vl(),
  tasks: /* @__PURE__ */ new Set()
};
function Ta() {
  const t = xt.now();
  xt.tasks.forEach((e) => {
    e.c(t) || (xt.tasks.delete(e), e.f());
  }), xt.tasks.size !== 0 && xt.tick(Ta);
}
function Gl(t) {
  let e;
  return xt.tasks.size === 0 && xt.tick(Ta), {
    promise: new Promise((i) => {
      xt.tasks.add(e = { c: t, f: i });
    }),
    abort() {
      xt.tasks.delete(e);
    }
  };
}
function Or(t, e) {
  Zi(() => {
    t.dispatchEvent(new CustomEvent(e));
  });
}
function Yl(t) {
  if (t === "float") return "cssFloat";
  if (t === "offset") return "cssOffset";
  if (t.startsWith("--")) return t;
  const e = t.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (i) => i[0].toUpperCase() + i.slice(1)
  ).join("");
}
function us(t) {
  const e = {}, i = t.split(";");
  for (const r of i) {
    const [n, s] = r.split(":");
    if (!n || s === void 0) break;
    const a = Yl(n.trim());
    e[a] = s.trim();
  }
  return e;
}
const Ql = (t) => t;
function gs(t, e, i, r) {
  var h;
  var n = (t & ll) !== 0, s = "both", a, o = e.inert, l = e.style.overflow, d, u;
  function g() {
    return Zi(() => a ?? (a = i()(e, (r == null ? void 0 : r()) ?? /** @type {P} */
    {}, {
      direction: s
    })));
  }
  var p = {
    is_global: n,
    in() {
      e.inert = o, Or(e, "introstart"), d = En(e, g(), u, 1, () => {
        Or(e, "introend"), d == null || d.abort(), d = a = void 0, e.style.overflow = l;
      });
    },
    out(x) {
      e.inert = !0, Or(e, "outrostart"), u = En(e, g(), d, 0, () => {
        Or(e, "outroend"), x == null || x();
      });
    },
    stop: () => {
      d == null || d.abort(), u == null || u.abort();
    }
  }, v = (
    /** @type {Effect & { nodes: EffectNodes }} */
    Q
  );
  if (((h = v.nodes).t ?? (h.t = [])).push(p), kn) {
    var y = n;
    if (!y) {
      for (var _ = (
        /** @type {Effect | null} */
        v.parent
      ); _ && _.f & ti; )
        for (; (_ = _.parent) && !(_.f & vt); )
          ;
      y = !_ || (_.f & Tr) !== 0;
    }
    y && Pn(() => {
      di(() => p.in());
    });
  }
}
function En(t, e, i, r, n) {
  var s = r === 1;
  if (zo(e)) {
    var a, o = !1;
    return zt(() => {
      if (!o) {
        var h = e({ direction: s ? "in" : "out" });
        a = En(t, h, i, r, n);
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
    return n(), {
      abort: sr,
      deactivate: sr,
      reset: sr,
      t: () => r
    };
  const { delay: l = 0, css: d, tick: u, easing: g = Ql } = e;
  var p = [];
  if (s && i === void 0 && (u && u(0, 1), d)) {
    var v = us(d(0, 1));
    p.push(v, v);
  }
  var y = () => 1 - r, _ = t.animate(p, { duration: l, fill: "forwards" });
  return _.onfinish = () => {
    _.cancel();
    var h = (i == null ? void 0 : i.t()) ?? 1 - r;
    i == null || i.abort();
    var x = r - h, M = (
      /** @type {number} */
      e.duration * Math.abs(x)
    ), m = [];
    if (M > 0) {
      var b = !1;
      if (d)
        for (var E = Math.ceil(M / 16.666666666666668), L = 0; L <= E; L += 1) {
          var N = h + x * g(L / E), $ = us(d(N, 1 - N));
          m.push($), b || (b = $.overflow === "hidden");
        }
      b && (t.style.overflow = "hidden"), y = () => {
        var S = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          _.currentTime
        );
        return h + x * g(S / M);
      }, u && Gl(() => {
        if (_.playState !== "running") return !1;
        var S = y();
        return u(S, 1 - S), !0;
      });
    }
    _ = t.animate(m, { duration: M, fill: "forwards" }), _.onfinish = () => {
      y = () => r, u == null || u(r, 1 - r), n();
    };
  }, {
    abort: () => {
      _ && (_.cancel(), _.effect = null, _.onfinish = sr);
    },
    deactivate: () => {
      n = sr;
    },
    reset: () => {
      r === 0 && (u == null || u(1, 0));
    },
    t: () => y()
  };
}
function nt(t, e) {
  Pn(() => {
    var i = t.getRootNode(), r = (
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
    if (!r.querySelector("#" + e.hash)) {
      const n = document.createElement("style");
      n.id = e.hash, n.textContent = e.code, r.appendChild(n);
    }
  });
}
const hs = [...` 	
\r\f \v\uFEFF`];
function Xl(t, e, i) {
  var r = t == null ? "" : "" + t;
  if (e && (r = r ? r + " " + e : e), i) {
    for (var n in i)
      if (i[n])
        r = r ? r + " " + n : n;
      else if (r.length)
        for (var s = n.length, a = 0; (a = r.indexOf(n, a)) >= 0; ) {
          var o = a + s;
          (a === 0 || hs.includes(r[a - 1])) && (o === r.length || hs.includes(r[o])) ? r = (a === 0 ? "" : r.substring(0, a)) + r.substring(o + 1) : a = o;
        }
  }
  return r === "" ? null : r;
}
function Kl(t, e) {
  return t == null ? null : String(t);
}
function ci(t, e, i, r, n, s) {
  var a = t.__className;
  if (U || a !== i || a === void 0) {
    var o = Xl(i, r, s);
    (!U || o !== t.getAttribute("class")) && (o == null ? t.removeAttribute("class") : t.className = o), t.__className = i;
  } else if (s && n !== s)
    for (var l in s) {
      var d = !!s[l];
      (n == null || d !== !!n[l]) && t.classList.toggle(l, d);
    }
  return s;
}
function Pr(t, e, i, r) {
  var n = t.__style;
  if (U || n !== e) {
    var s = Kl(e);
    (!U || s !== t.getAttribute("style")) && (s == null ? t.removeAttribute("style") : t.style.cssText = s), t.__style = e;
  }
  return r;
}
const Jl = Symbol("is custom element"), Zl = Symbol("is html");
function ed(t) {
  if (U) {
    var e = !1, i = () => {
      if (!e) {
        if (e = !0, t.hasAttribute("value")) {
          var r = t.value;
          ce(t, "value", null), t.value = r;
        }
        if (t.hasAttribute("checked")) {
          var n = t.checked;
          ce(t, "checked", null), t.checked = n;
        }
      }
    };
    t.__on_r = i, zt(i), sa();
  }
}
function ce(t, e, i, r) {
  var n = td(t);
  U && (n[e] = t.getAttribute(e), e === "src" || e === "srcset" || e === "href" && t.nodeName === "LINK") || n[e] !== (n[e] = i) && (e === "loading" && (t[Wo] = i), i == null ? t.removeAttribute(e) : typeof i != "string" && id(t).includes(e) ? t[e] = i : t.setAttribute(e, i));
}
function td(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ?? (t.__attributes = {
      [Jl]: t.nodeName.includes("-"),
      [Zl]: t.namespaceURI === cl
    })
  );
}
var fs = /* @__PURE__ */ new Map();
function id(t) {
  var e = t.getAttribute("is") || t.nodeName, i = fs.get(e);
  if (i) return i;
  fs.set(e, i = []);
  for (var r, n = t, s = Element.prototype; s !== n; ) {
    r = qo(n);
    for (var a in r)
      r[a].set && i.push(a);
    n = Is(n);
  }
  return i;
}
function Ea(t, e, i = e) {
  var r = /* @__PURE__ */ new WeakSet();
  Cl(t, "input", async (n) => {
    var s = n ? t.defaultValue : t.value;
    if (s = un(t) ? gn(s) : s, i(s), W !== null && r.add(W), await ya(), s !== (s = e())) {
      var a = t.selectionStart, o = t.selectionEnd, l = t.value.length;
      if (t.value = s ?? "", o !== null) {
        var d = t.value.length;
        a === o && o === l && d > l ? (t.selectionStart = d, t.selectionEnd = d) : (t.selectionStart = a, t.selectionEnd = Math.min(o, d));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (U && t.defaultValue !== t.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  di(e) == null && t.value) && (i(un(t) ? gn(t.value) : t.value), W !== null && r.add(W)), tn(() => {
    var n = e();
    if (t === document.activeElement) {
      var s = (
        /** @type {Batch} */
        Nr ?? W
      );
      if (r.has(s))
        return;
    }
    un(t) && n === gn(t.value) || t.type === "date" && !n && !t.value || n !== t.value && (t.value = n ?? "");
  });
}
function un(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function gn(t) {
  return t === "" ? null : +t;
}
function ps(t, e) {
  return t === e || (t == null ? void 0 : t[ur]) === e;
}
function Ar(t = {}, e, i, r) {
  return Pn(() => {
    var n, s;
    return tn(() => {
      n = s, s = [], di(() => {
        t !== i(...s) && (e(t, ...s), n && ps(i(...n), t) && e(null, ...n));
      });
    }), () => {
      zt(() => {
        s && ps(i(...s), t) && e(null, ...s);
      });
    };
  }), t;
}
let Rr = !1;
function rd(t) {
  var e = Rr;
  try {
    return Rr = !1, [t(), Rr];
  } finally {
    Rr = e;
  }
}
function q(t, e, i, r) {
  var M;
  var n = (i & al) !== 0, s = (i & ol) !== 0, a = (
    /** @type {V} */
    r
  ), o = !0, l = () => (o && (o = !1, a = s ? di(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), d;
  if (n) {
    var u = ur in t || Ls in t;
    d = ((M = Kt(t, e)) == null ? void 0 : M.set) ?? (u && e in t ? (m) => t[e] = m : void 0);
  }
  var g, p = !1;
  n ? [g, p] = rd(() => (
    /** @type {V} */
    t[e]
  )) : g = /** @type {V} */
  t[e], g === void 0 && r !== void 0 && (g = l(), d && (Qo(), d(g)));
  var v;
  if (v = () => {
    var m = (
      /** @type {V} */
      t[e]
    );
    return m === void 0 ? l() : (o = !0, m);
  }, !(i & sl))
    return v;
  if (d) {
    var y = t.$$legacy;
    return (
      /** @type {() => V} */
      function(m, b) {
        return arguments.length > 0 ? ((!b || y || p) && d(b ? v() : m), m) : v();
      }
    );
  }
  var _ = !1, h = (i & nl ? en : Qs)(() => (_ = !1, v()));
  n && f(h);
  var x = (
    /** @type {Effect} */
    Q
  );
  return (
    /** @type {() => V} */
    function(m, b) {
      if (arguments.length > 0) {
        const E = b ? f(h) : n ? le(m) : m;
        return A(h, E), _ = !0, a !== void 0 && (a = E), m;
      }
      return li && _ || x.f & St ? h.v : f(h);
    }
  );
}
function nd(t) {
  return new sd(t);
}
var yt, Be;
class sd {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    I(this, yt);
    /** @type {Record<string, any>} */
    I(this, Be);
    var s;
    var i = /* @__PURE__ */ new Map(), r = (a, o) => {
      var l = /* @__PURE__ */ Zs(o, !1, !1);
      return i.set(a, l), l;
    };
    const n = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(a, o) {
          return f(i.get(o) ?? r(o, Reflect.get(a, o)));
        },
        has(a, o) {
          return o === Ls ? !0 : (f(i.get(o) ?? r(o, Reflect.get(a, o))), Reflect.has(a, o));
        },
        set(a, o, l) {
          return A(i.get(o) ?? r(o, l), l), Reflect.set(a, o, l);
        }
      }
    );
    T(this, Be, (e.hydrate ? Ul : nn)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: n,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((s = e == null ? void 0 : e.props) != null && s.$$host) || e.sync === !1) && R(), T(this, yt, n.$$events);
    for (const a of Object.keys(c(this, Be)))
      a === "$set" || a === "$destroy" || a === "$on" || Ur(this, a, {
        get() {
          return c(this, Be)[a];
        },
        /** @param {any} value */
        set(o) {
          c(this, Be)[a] = o;
        },
        enumerable: !0
      });
    c(this, Be).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(n, a);
    }, c(this, Be).$destroy = () => {
      wi(c(this, Be));
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    c(this, Be).$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, i) {
    c(this, yt)[e] = c(this, yt)[e] || [];
    const r = (...n) => i.call(this, ...n);
    return c(this, yt)[e].push(r), () => {
      c(this, yt)[e] = c(this, yt)[e].filter(
        /** @param {any} fn */
        (n) => n !== r
      );
    };
  }
  $destroy() {
    c(this, Be).$destroy();
  }
}
yt = new WeakMap(), Be = new WeakMap();
let Ia;
typeof HTMLElement == "function" && (Ia = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, i, r) {
    super();
    /** The Svelte component constructor */
    oe(this, "$$ctor");
    /** Slots */
    oe(this, "$$s");
    /** @type {any} The Svelte component instance */
    oe(this, "$$c");
    /** Whether or not the custom element is connected */
    oe(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    oe(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    oe(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    oe(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    oe(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    oe(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    oe(this, "$$me");
    this.$$ctor = e, this.$$s = i, r && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(e, i, r) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(i), this.$$c) {
      const n = this.$$c.$on(e, i);
      this.$$l_u.set(i, n);
    }
    super.addEventListener(e, i, r);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(e, i, r) {
    if (super.removeEventListener(e, i, r), this.$$c) {
      const n = this.$$l_u.get(i);
      n && (n(), this.$$l_u.delete(i));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(n) {
        return (s) => {
          const a = document.createElement("slot");
          n !== "default" && (a.name = n), D(s, a);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const i = {}, r = ad(this);
      for (const n of this.$$s)
        n in r && (n === "default" && !this.$$d.children ? (this.$$d.children = e(n), i.default = !0) : i[n] = e(n));
      for (const n of this.attributes) {
        const s = this.$$g_p(n.name);
        s in this.$$d || (this.$$d[s] = zr(s, n.value, this.$$p_d, "toProp"));
      }
      for (const n in this.$$p_d)
        !(n in this.$$d) && this[n] !== void 0 && (this.$$d[n] = this[n], delete this[n]);
      this.$$c = nd({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: i,
          $$host: this
        }
      }), this.$$me = Il(() => {
        tn(() => {
          var n;
          this.$$r = !0;
          for (const s of $r(this.$$c)) {
            if (!((n = this.$$p_d[s]) != null && n.reflect)) continue;
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
      for (const n in this.$$l)
        for (const s of this.$$l[n]) {
          const a = this.$$c.$on(n, s);
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
  attributeChangedCallback(e, i, r) {
    var n;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = zr(e, r, this.$$p_d, "toProp"), (n = this.$$c) == null || n.$set({ [e]: this.$$d[e] }));
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
    return $r(this.$$p_d).find(
      (i) => this.$$p_d[i].attribute === e || !this.$$p_d[i].attribute && i.toLowerCase() === e
    ) || e;
  }
});
function zr(t, e, i, r) {
  var s;
  const n = (s = i[t]) == null ? void 0 : s.type;
  if (e = n === "Boolean" && typeof e != "boolean" ? e != null : e, !r || !i[t])
    return e;
  if (r === "toAttribute")
    switch (n) {
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
    switch (n) {
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
function ad(t) {
  const e = {};
  return t.childNodes.forEach((i) => {
    e[
      /** @type {Element} node */
      i.slot || "default"
    ] = !0;
  }), e;
}
function st(t, e, i, r, n, s) {
  let a = class extends Ia {
    constructor() {
      super(t, i, n), this.$$p_d = e;
    }
    static get observedAttributes() {
      return $r(e).map(
        (o) => (e[o].attribute || o).toLowerCase()
      );
    }
  };
  return $r(e).forEach((o) => {
    Ur(a.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(l) {
        var g;
        l = zr(o, l, e), this.$$d[o] = l;
        var d = this.$$c;
        if (d) {
          var u = (g = Kt(d, o)) == null ? void 0 : g.get;
          u ? d[o] = l : d.$set({ [o]: l });
        }
      }
    });
  }), r.forEach((o) => {
    Ur(a.prototype, o, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[o];
      }
    });
  }), t.element = /** @type {any} */
  a, a;
}
function sn(t) {
  Ie === null && Os(), qt(() => {
    const e = di(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Aa(t) {
  Ie === null && Os(), sn(() => () => di(t));
}
const od = "5";
var Ts;
typeof window < "u" && ((Ts = window.__svelte ?? (window.__svelte = {})).v ?? (Ts.v = /* @__PURE__ */ new Set())).add(od);
const ld = (t) => t;
function dd(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function vs(t) {
  const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    t,
    "px"
  ];
}
function cd(t, { delay: e = 0, duration: i = 400, easing: r = ld } = {}) {
  const n = +getComputedStyle(t).opacity;
  return {
    delay: e,
    duration: i,
    easing: r,
    css: (s) => `opacity: ${s * n}`
  };
}
function ud(t, { delay: e = 0, duration: i = 400, easing: r = dd, x: n = 0, y: s = 0, opacity: a = 0 } = {}) {
  const o = getComputedStyle(t), l = +o.opacity, d = o.transform === "none" ? "" : o.transform, u = l * (1 - a), [g, p] = vs(n), [v, y] = vs(s);
  return {
    delay: e,
    duration: i,
    easing: r,
    css: (_, h) => `
			transform: ${d} translate(${(1 - _) * g}${p}, ${(1 - _) * v}${y});
			opacity: ${l - u * h}`
  };
}
var ki, Si, Ci, Ti, Ei;
class Ma {
  constructor() {
    I(this, ki);
    I(this, Si);
    I(this, Ci);
    I(this, Ti);
    I(this, Ei);
    T(this, ki, /* @__PURE__ */ P(!1)), T(this, Si, /* @__PURE__ */ P(!1)), T(this, Ci, /* @__PURE__ */ P(!1)), T(this, Ti, /* @__PURE__ */ P(!1)), T(this, Ei, /* @__PURE__ */ P(!1));
  }
  get isOpen() {
    return f(c(this, ki));
  }
  set isOpen(e) {
    A(c(this, ki), e, !0);
  }
  get isMinimized() {
    return f(c(this, Si));
  }
  set isMinimized(e) {
    A(c(this, Si), e, !0);
  }
  get isLoading() {
    return f(c(this, Ci));
  }
  set isLoading(e) {
    A(c(this, Ci), e, !0);
  }
  get hasUnreadMessages() {
    return f(c(this, Ti));
  }
  set hasUnreadMessages(e) {
    A(c(this, Ti), e, !0);
  }
  get hasEngaged() {
    return f(c(this, Ei));
  }
  set hasEngaged(e) {
    A(c(this, Ei), e, !0);
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
  /**
   * Mark the widget as engaged. After the first engagement the closed
   * state is always the bubble. Idempotent.
   */
  markEngaged() {
    this.hasEngaged = !0;
  }
}
ki = new WeakMap(), Si = new WeakMap(), Ci = new WeakMap(), Ti = new WeakMap(), Ei = new WeakMap();
function La() {
  return new Ma();
}
const Dt = new Ma(), ge = {
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
}, At = {
  /** Maximum message length */
  MAX_LENGTH: 4e3,
  /** Minimum message length */
  MIN_LENGTH: 1,
  /** Maximum message queue size to prevent memory leaks */
  MAX_QUEUE_SIZE: 50
}, ms = {
  /** Visitor ID storage key */
  VISITOR_ID: "ai_chat_visitor_id",
  /** Session history storage key */
  SESSIONS: "ai_chat_sessions"
}, fi = {
  /** Maximum number of quick questions */
  MAX_COUNT: 6,
  /** Maximum character length per question */
  MAX_LENGTH: 100
};
var Ii, Ai, Mi, Li, Oi, Ri;
class Oa {
  constructor() {
    I(this, Ii);
    I(this, Ai);
    I(this, Mi);
    I(this, Li);
    I(this, Oi);
    I(this, Ri);
    T(this, Ii, /* @__PURE__ */ P(le([]))), T(this, Ai, /* @__PURE__ */ P(null)), T(this, Mi, /* @__PURE__ */ P(!1)), T(this, Li, /* @__PURE__ */ P(null)), T(this, Oi, /* @__PURE__ */ P(null)), this.streamingBuffer = "", this.streamingTimeout = null, T(this, Ri, /* @__PURE__ */ P(0));
  }
  get messages() {
    return f(c(this, Ii));
  }
  set messages(e) {
    A(c(this, Ii), e, !0);
  }
  get currentSession() {
    return f(c(this, Ai));
  }
  set currentSession(e) {
    A(c(this, Ai), e, !0);
  }
  get isTyping() {
    return f(c(this, Mi));
  }
  set isTyping(e) {
    A(c(this, Mi), e, !0);
  }
  get error() {
    return f(c(this, Li));
  }
  set error(e) {
    A(c(this, Li), e, !0);
  }
  get streamingMessageId() {
    return f(c(this, Oi));
  }
  set streamingMessageId(e) {
    A(c(this, Oi), e, !0);
  }
  get streamingUpdateSignal() {
    return f(c(this, Ri));
  }
  set streamingUpdateSignal(e) {
    A(c(this, Ri), e, !0);
  }
  // Derived state
  get unreadCount() {
    return this.messages.filter((e) => e.role === "assistant" && e.status !== "sent").length;
  }
  get hasMessages() {
    return this.messages.length > 0;
  }
  addMessage(e, i = "user") {
    const r = {
      id: crypto.randomUUID(),
      role: i,
      content: e,
      timestamp: /* @__PURE__ */ new Date(),
      status: i === "user" ? "sending" : "sent"
    };
    return this.messages = [...this.messages, r], r;
  }
  updateMessageStatus(e, i) {
    this.messages = this.messages.map((r) => r.id === e ? { ...r, status: i } : r);
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
        ge.STREAMING_BATCH_DELAY
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
    this.messages = this.messages.map((r) => r.id === e ? { ...r, content: i(r.content) } : r);
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
Ii = new WeakMap(), Ai = new WeakMap(), Mi = new WeakMap(), Li = new WeakMap(), Oi = new WeakMap(), Ri = new WeakMap();
function Ra() {
  return new Oa();
}
const pt = new Oa(), ws = {
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
}, je = {
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
}, Na = {
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
      quick_questions: t.quickQuestions,
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
      quickQuestions: t.quick_questions,
      debug: t.debug,
      autoInit: t.auto_init
    };
  },
  /**
   * Convert HTML attribute name to property name
   */
  attributeToProperty(t) {
    return ws[t] || null;
  },
  /**
   * Convert property name to HTML attribute name
   */
  propertyToAttribute(t) {
    const i = Object.entries(ws).find(([, r]) => r === t);
    return i ? i[0] : null;
  }
}, gd = [
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
function qa(t) {
  return gd.includes(t);
}
function Mr(t) {
  return !t || typeof t != "string" ? !1 : /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(t);
}
function Da(t, e = "#6b46c1") {
  return Mr(t) ? t : e;
}
function jn(t) {
  if (!Mr(t)) return t;
  if (t.length === 4) {
    const e = t.slice(1);
    return "#" + e[0] + e[0] + e[1] + e[1] + e[2] + e[2];
  }
  return t;
}
function hd(t) {
  const e = jn(t), i = parseInt(e.slice(1, 3), 16) / 255, r = parseInt(e.slice(3, 5), 16) / 255, n = parseInt(e.slice(5, 7), 16) / 255, s = Math.max(i, r, n), a = Math.min(i, r, n);
  let o = 0, l = 0;
  const d = (s + a) / 2;
  if (s !== a) {
    const u = s - a;
    switch (l = d > 0.5 ? u / (2 - s - a) : u / (s + a), s) {
      case i:
        o = ((r - n) / u + (r < n ? 6 : 0)) / 6;
        break;
      case r:
        o = ((n - i) / u + 2) / 6;
        break;
      case n:
        o = ((i - r) / u + 4) / 6;
        break;
    }
  }
  return { h: o * 360, s: l * 100, l: d * 100 };
}
function fd(t, e, i) {
  e /= 100, i /= 100;
  const r = e * Math.min(i, 1 - i), n = (s) => {
    const a = (s + t / 30) % 12, o = i - r * Math.max(Math.min(a - 3, 9 - a, 1), -1);
    return Math.round(255 * o).toString(16).padStart(2, "0");
  };
  return `#${n(0)}${n(8)}${n(4)}`.toUpperCase();
}
function In(t) {
  if (!Mr(t)) return null;
  const e = jn(t), i = parseInt(e.slice(1, 3), 16), r = parseInt(e.slice(3, 5), 16), n = parseInt(e.slice(5, 7), 16);
  return `${i}, ${r}, ${n}`;
}
function Ht(t, e) {
  if (!Mr(t)) return t;
  const i = hd(t), r = Math.max(0, Math.min(100, i.l + e));
  return fd(i.h, i.s, r);
}
const pd = [
  "--widget-primary",
  "--widget-primary-hover",
  "--widget-primary-light",
  "--widget-primary-dark",
  "--widget-primary-rgb",
  "--widget-gradient",
  "--widget-gradient-hover",
  "--widget-gradient-subtle",
  "--widget-accent",
  "--widget-accent-light",
  "--widget-accent-dark",
  "--widget-accent-rgb",
  "--widget-accent-warm",
  "--widget-accent-warm-rgb"
];
function Pa(t, e = "#6b46c1") {
  const i = Da(t, e), r = jn(i), n = Ht(r, -20), s = Ht(r, 20), a = Ht(r, -30), o = In(r) ?? "107, 70, 193", l = Ht(r, 15), d = Ht(r, -15), u = Ht(r, 10), g = In(u) ?? o;
  return {
    "--widget-primary": r,
    "--widget-primary-hover": n,
    "--widget-primary-light": s,
    "--widget-primary-dark": a,
    "--widget-primary-rgb": o,
    "--widget-gradient": `linear-gradient(135deg, ${r} 0%, ${s} 100%)`,
    "--widget-gradient-hover": `linear-gradient(135deg, ${n} 0%, ${r} 100%)`,
    // hex-alpha suffix requires 6-digit hex — expansion above guarantees this
    "--widget-gradient-subtle": `linear-gradient(135deg, ${r}1a 0%, ${Ht(r, -30)}0d 100%)`,
    "--widget-accent": r,
    "--widget-accent-light": l,
    "--widget-accent-dark": d,
    "--widget-accent-rgb": o,
    "--widget-accent-warm": u,
    "--widget-accent-warm-rgb": g
  };
}
function yr(t, e) {
  if (!t) return;
  const i = Pa(e);
  for (const [r, n] of Object.entries(i))
    t.style.setProperty(r, n);
}
function vd(t) {
  if (t)
    for (const e of pd)
      t.style.removeProperty(e);
}
class md {
  constructor(e) {
    this.isDebugMode = e.debug ?? !1;
  }
  /**
   * Log debug information - only shows in debug mode
   */
  log(e, i, r) {
    this.isDebugMode && (r !== void 0 ? console.log(`[${e}] ${i}:`, r) : console.log(`[${e}] ${i}`));
  }
  /**
   * Log warning information - only shows in debug mode
   */
  warn(e, i, r) {
    this.isDebugMode && (r !== void 0 ? console.warn(`[${e}] ${i}:`, r) : console.warn(`[${e}] ${i}`));
  }
  /**
   * Log error information - always shows (even in production)
   */
  error(e, i, r) {
    r !== void 0 ? console.error(`[${e}] ${i}:`, r) : console.error(`[${e}] ${i}`);
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
function an(t) {
  return new md(t);
}
function hn() {
  var t;
  try {
    return typeof process < "u" && ((t = process.env) == null ? void 0 : t.NODE_ENV) === "test" ? process.env.ENABLE_TEST_DEBUG === "true" : localStorage.getItem("ai-widget-debug") === "true" || window._aiWidgetDebug === !0 || !1;
  } catch {
    return !1;
  }
}
const B = {
  isDebugEnabled: hn,
  log: (t, e, i) => {
    hn() && (i !== void 0 ? console.log(`[${t}] ${e}:`, i) : console.log(`[${t}] ${e}`));
  },
  warn: (t, e, i) => {
    hn() && (i !== void 0 ? console.warn(`[${t}] ${e}:`, i) : console.warn(`[${t}] ${e}`));
  },
  error: (t, e, i) => {
    i !== void 0 ? console.error(`[${t}] ${e}:`, i) : console.error(`[${t}] ${e}`);
  }
};
class za {
  constructor() {
    this.currentId = null, this.messageMap = /* @__PURE__ */ new Map();
  }
  /**
   * Generate a new correlation ID
   */
  generate() {
    const e = Date.now(), i = Math.random().toString(36).substr(2, 9), r = `msg_${e}_${i}`;
    return this.currentId = r, r;
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
    for (const [r] of this.messageMap.entries()) {
      const n = r.match(/(\d+)/);
      if (n) {
        const s = parseInt(n[1], 10);
        i - s > e && this.messageMap.delete(r);
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
function $a() {
  return new za();
}
const wd = new za();
function Ki() {
  return wd;
}
class bd {
  /**
   * Validate message content and length
   */
  static validate(e, i) {
    const r = i ?? Ki().getCurrent();
    if (B.log("MessageValidator", "validate() called", {
      correlationId: r,
      message: e,
      messageType: typeof e,
      messageLength: (e == null ? void 0 : e.length) || 0,
      isNullOrUndefined: e == null
    }), typeof e != "string") {
      const o = "Message is required and must be a string";
      return B.log("MessageValidator", "Validation failed - invalid type", { correlationId: r, message: e, error: o }), {
        isValid: !1,
        error: o
      };
    }
    if (e.length === 0) {
      const o = "Message is too short";
      return B.log("MessageValidator", "Validation failed - empty string", { correlationId: r, message: e, error: o }), {
        isValid: !1,
        error: o
      };
    }
    const n = e.trim();
    if (B.log("MessageValidator", "After trimming", {
      correlationId: r,
      original: e,
      trimmed: n,
      originalLength: e.length,
      trimmedLength: n.length,
      wasWhitespaceOnly: e.length > 0 && n.length === 0
    }), n.length < At.MIN_LENGTH) {
      const o = "Message is too short";
      return B.log("MessageValidator", "Validation failed - too short", {
        correlationId: r,
        trimmedLength: n.length,
        minLength: At.MIN_LENGTH,
        error: o
      }), {
        isValid: !1,
        error: o
      };
    }
    if (n.length > At.MAX_LENGTH) {
      const o = `Message exceeds maximum length of ${At.MAX_LENGTH} characters`;
      return B.log("MessageValidator", "Validation failed - too long", {
        correlationId: r,
        trimmedLength: n.length,
        maxLength: At.MAX_LENGTH,
        error: o
      }), {
        isValid: !1,
        error: o
      };
    }
    B.log("MessageValidator", "Starting HTML sanitization", {
      correlationId: r,
      inputContent: n,
      inputLength: n.length
    });
    const s = this.sanitizeHTML(n, r);
    B.log("MessageValidator", "HTML sanitization complete", {
      correlationId: r,
      original: n,
      sanitized: s,
      originalLength: n.length,
      sanitizedLength: s.length,
      contentRemoved: n.length !== s.length,
      contentChanged: n !== s,
      removedContent: n.length !== s.length ? {
        removed: n.replace(s, ""),
        difference: n.length - s.length
      } : null
    });
    const a = {
      isValid: !0,
      sanitizedValue: s
    };
    return B.log("MessageValidator", "Final validation result", { correlationId: r, result: a }), a;
  }
  /**
   * Basic HTML sanitization
   */
  static sanitizeHTML(e, i) {
    const r = i ?? Ki().getCurrent();
    B.log("MessageValidator", "sanitizeHTML() input", {
      correlationId: r,
      input: e,
      inputLength: e.length
    });
    let n = e, s = 0;
    const a = n;
    n = n.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ""), n !== a && B.log("MessageValidator", `Step ${++s} - Removed script tags`, {
      correlationId: r,
      before: a,
      after: n,
      removed: a.length - n.length
    });
    const o = n;
    n = n.replace(/href\s*=\s*["']javascript:[^"']*["']/gi, 'href=""'), n !== o && B.log("MessageValidator", `Step ${++s} - Removed javascript: protocol`, {
      correlationId: r,
      before: o,
      after: n,
      removed: o.length - n.length
    });
    const l = n;
    n = n.replace(/\s*on\w+\s*=\s*["'][^"']*["']/gi, ""), n !== l && B.log("MessageValidator", `Step ${++s} - Removed event handlers:`, {
      correlationId: r,
      before: l,
      after: n,
      removed: l.length - n.length
    });
    const d = n;
    return n = n.replace(/src\s*=\s*["']data:[^"']*["']/gi, 'src=""'), n !== d && B.log("MessageValidator", `Step ${++s} - Removed data: URLs:`, {
      correlationId: r,
      before: d,
      after: n,
      removed: d.length - n.length
    }), B.log("MessageValidator", "sanitizeHTML() result", {
      correlationId: r,
      originalInput: e,
      finalResult: n,
      inputLength: e.length,
      resultLength: n.length,
      totalRemoved: e.length - n.length,
      wasModified: e !== n
    }), n;
  }
}
class Wn {
  static validate(e, i) {
    const r = [];
    for (const n of e) {
      if (typeof n != "string") {
        B.warn(i, `quick-questions: item skipped (type: ${typeof n})`);
        continue;
      }
      if (n.trim().length === 0) {
        B.warn(i, "quick-questions: item skipped (empty or whitespace-only)");
        continue;
      }
      n.length > fi.MAX_LENGTH ? (B.warn(i, `quick-questions: item truncated to ${fi.MAX_LENGTH} chars`), r.push(n.slice(0, fi.MAX_LENGTH))) : r.push(n);
    }
    return r.length > fi.MAX_COUNT ? (B.warn(i, `quick-questions: array capped at ${fi.MAX_COUNT} items (${r.length} provided)`), r.slice(0, fi.MAX_COUNT)) : r;
  }
}
class Ua {
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
var Ni, qi, Di, Pi, zi, $i, Ui, ji, Wi, Hi, Fi, Bi, Vi;
class ja {
  constructor() {
    I(this, Ni);
    I(this, qi);
    I(this, Di);
    I(this, Pi);
    I(this, zi);
    I(this, $i);
    I(this, Ui);
    I(this, ji);
    I(this, Wi);
    I(this, Hi);
    I(this, Fi);
    I(this, Bi);
    I(this, Vi);
    T(this, Ni, /* @__PURE__ */ P("")), T(this, qi, /* @__PURE__ */ P(le(je.theme))), T(this, Di, /* @__PURE__ */ P(le(je.position))), T(this, Pi, /* @__PURE__ */ P(le(je.title))), T(this, zi, /* @__PURE__ */ P(le(je.logoUrl))), T(this, $i, /* @__PURE__ */ P(le(je.placeholder))), T(this, Ui, /* @__PURE__ */ P(le(je.accentColor))), T(this, ji, /* @__PURE__ */ P(le(je.avatarEmoji))), T(this, Wi, /* @__PURE__ */ P(le(je.companyName))), T(this, Hi, /* @__PURE__ */ P(le(je.initialMessage))), T(this, Fi, /* @__PURE__ */ P(le(je.quickQuestions))), T(this, Bi, /* @__PURE__ */ P(le(je.voiceInput))), T(this, Vi, /* @__PURE__ */ P("default"));
  }
  get clientId() {
    return f(c(this, Ni));
  }
  set clientId(e) {
    A(c(this, Ni), e, !0);
  }
  get theme() {
    return f(c(this, qi));
  }
  set theme(e) {
    A(c(this, qi), e, !0);
  }
  get position() {
    return f(c(this, Di));
  }
  set position(e) {
    A(c(this, Di), e, !0);
  }
  get title() {
    return f(c(this, Pi));
  }
  set title(e) {
    A(c(this, Pi), e, !0);
  }
  get logoUrl() {
    return f(c(this, zi));
  }
  set logoUrl(e) {
    A(c(this, zi), e, !0);
  }
  get placeholder() {
    return f(c(this, $i));
  }
  set placeholder(e) {
    A(c(this, $i), e, !0);
  }
  get accentColor() {
    return f(c(this, Ui));
  }
  set accentColor(e) {
    A(c(this, Ui), e, !0);
  }
  get avatarEmoji() {
    return f(c(this, ji));
  }
  set avatarEmoji(e) {
    A(c(this, ji), e, !0);
  }
  get companyName() {
    return f(c(this, Wi));
  }
  set companyName(e) {
    A(c(this, Wi), e, !0);
  }
  get initialMessage() {
    return f(c(this, Hi));
  }
  set initialMessage(e) {
    A(c(this, Hi), e, !0);
  }
  get quickQuestions() {
    return f(c(this, Fi));
  }
  set quickQuestions(e) {
    A(c(this, Fi), e, !0);
  }
  get voiceInput() {
    return f(c(this, Bi));
  }
  set voiceInput(e) {
    A(c(this, Bi), e, !0);
  }
  get titleSource() {
    return f(c(this, Vi));
  }
  set titleSource(e) {
    A(c(this, Vi), e, !0);
  }
  updateConfig(e, i = "default") {
    if (e.title !== void 0) {
      this.setTitle(e.title, i);
      const { title: r, ...n } = e;
      Object.assign(this, n);
    } else
      Object.assign(this, e);
  }
  /**
   * Set title with priority enforcement
   * Priority: user > backend > default
   */
  setTitle(e, i) {
    const r = ["user", "backend", "default"], n = r.indexOf(this.titleSource);
    r.indexOf(i) <= n && (this.title = e, this.titleSource = i);
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
    const i = this.parseElementAttributes(e);
    this.updateConfig(i, "user"), this.applyTheme(e);
  }
  /**
   * Parse HTML element attributes into configuration object
   * Reuses unified configuration attribute mapping logic
   */
  parseElementAttributes(e) {
    const i = {}, r = e.getAttributeNames();
    for (const n of r) {
      const s = Na.attributeToProperty(n);
      if (!s) continue;
      const a = e.getAttribute(n);
      if (s === "initialMessage") {
        i.initialMessage = a === "" ? void 0 : a || void 0;
        continue;
      }
      if (a)
        switch (s) {
          case "clientId":
          case "title":
          case "logoUrl":
          case "placeholder":
          case "avatarEmoji":
            i[s] = a;
            break;
          case "accentColor":
            i.accentColor = Da(a, this.accentColor);
            break;
          case "theme":
            qa(a) && (i.theme = a);
            break;
          case "position":
            (a === "bottom-left" || a === "bottom-right") && (i.position = a);
            break;
          case "companyName":
            i.companyName = a, e.hasAttribute("title") || (i.title = `${a} Assistant`);
            break;
          case "quickQuestions":
            try {
              const o = JSON.parse(a);
              Array.isArray(o) && (i.quickQuestions = Wn.validate(o, "ConfigStore"));
            } catch {
            }
            break;
          case "voiceInput":
            i.voiceInput = a === "true";
            break;
        }
    }
    return i;
  }
  get cssVariables() {
    return this.accentColor ? Pa(this.accentColor) : {};
  }
  applyTheme(e) {
    e.setAttribute("data-theme", this.theme);
    const i = this.cssVariables;
    for (const [r, n] of Object.entries(i))
      e.style.setProperty(r, n);
  }
}
Ni = new WeakMap(), qi = new WeakMap(), Di = new WeakMap(), Pi = new WeakMap(), zi = new WeakMap(), $i = new WeakMap(), Ui = new WeakMap(), ji = new WeakMap(), Wi = new WeakMap(), Hi = new WeakMap(), Fi = new WeakMap(), Bi = new WeakMap(), Vi = new WeakMap();
function Wa() {
  return new ja();
}
const Ae = new ja(), Ha = "data:image/webp;base64,UklGRugJAABXRUJQVlA4WAoAAAAQAAAAfwAAfwAAQUxQSFACAAABkEXbtik59777XleN2LZt27Zt27ZtW99tuzuF2LbtpKpGp3BivHNujIiYAPZ3d2OLGUu7p5aXUmc/AMCFdkJWtWzwQVcXLqdUZ+GjtzPIqSt84jAp8UWfsppLaemnrJUS6/spA5iUM9/72O2McmKdnB9ydmCS5h2vv3e1oyIrxjKdBjiZnklcDQOIFjLTogFiValFyU6Eyk4Jll6Q7ESI9EJlpwTLgxu+pJemBQDEGDUvwxc0KqQYig/fGmf+TJPJZIqP8LkP8MQ/LHavyfz5O4eUSUSFoWNcAqB0WnsmooDXMANiczWOzjjRDqhf9RHI1OWA3T1eoFLGAH7PIAVTzQQCwFYNUaJDQOLBRGj4CCCyJ5okl6iwGrG0ASqdpZAoW8iAGUgSHaMj0oAj81M6LifFUc5Jx8tcOJoAnfa8CFRV1CXElkNVVX2lHuYTGnKQEFd8SKjviJQ6qngGSD5WVDcZrwLRZ9PpZSqQPVgnmj9de4Q+kp2gy0fVySm6vL+VTkrv1C8/p2WXyEKXn074erpWKfpg1ZxUJZRiOhWTifKMEnphSlvrC9srOyUOm+2VtaVgOvbKnjNHcxcdjto5c+UwMt3XBzrtORnKRpTkxVHIIbsMj+i4nhKHYS8d/ioOvpSO2RwHq+6iwlmWITUeoCJQw8LaEvG6OkOrBdCwTeBh+e5TcC4Dw9zcge9BeYaat3iE7W51hr3ccVym4gx/qqUv8TyanIRRqBRdcQ3Hxbm5OCOSp2owaX2wvv2Xja6ahDNSuRCKjoXg7L//f54CVlA4IHIHAACwKACdASqAAIAAPlEkkEWjoiGTST0YOAUEoA1fIQfqvZTa57fyGW9PeP90OkinbzF+UP87/Q/yk+AH9V9mfmC/p5/hPzA9zP1a+YD+Wf13/Xf6L2M/2c9yPoAfrV1iXoMfwf+x+mH+2HwSftD+0/wFfrd/7+sAs5dANxsoF2Qp/XuKnjE8Gvwf1Gf6x/wvUPz4PRP7B/AP/Mf6v/0OuF+5Hsi/ryxHk0B48YBTRtdB5WCf3dKxN+Z3e0Bap21U4g0QNgmgt9PszIvWmrmvDr/zjzLxO1+KHiMxSwKbP/CmfQapmXy8GPwlWwZzWyDJKSzuSxG3oImZ+aAV5K6ukJTpOOPfUdUnNUrs2CTonYo1/mdtQnYigkahltolBX+gz3dswlpDn7EPz3ifxMbj6L/yfEgMvWzgisK1N1dy/5lC7Zwr0NTM81DtakR50uAAAP7+pTZc//8cSrMe16Db1wMrZOlPVcrZyaAcPVhS95237FTuuF4m977CEVAwBMUJwFRGDoEKQipeVQdPqKdnp9YwI89N2eTzoo27BX3l7acdt+NGQnnZqQnzMeC4MS7ryzaHFab9GApUauHd9b9i37aLi79SW9CeZWyZGfdtJaSaE1b467r48k/kEszB3I0cGm0JQq+Hlbn+SCl5MG63ApAqG8Lud8FVHMrY5xH0PC4ah5djicc1c/XvyZJAVH+KbeG19UFXrf8X1ffTOuOjvVCn8bFf8T5gUAZ5rOo4daVYTbhMt1efaL2SetLP+XRxxDPNYwYHbD7K5eOKdAFOQ+mG4MKDXvQJBAC50HrqnKo9O405Q8Z8O/+ZRXeFiV6vKdDVGdVUluUVIq3t7wryRVmKAwiDOc1qi9TnXHTUWfXCeCFNC7Y5EPmc7li11DywVw84gE+NnXo/p8YDJM4SBeFEznUonSd2j9ie/azILWu7JVZfb+zlEWKboli0MsIBUYOS3KQsZ7779L9ogSjLn4n49yfimFO1AYn3qOz+HlTle3rPzLols3XLqkvp5yFLLr31gT+lHXXiEAXgAFn2JWJepcnEq0CfPs9nhwmhMoh4Am5PzzVXbe1RK/RYnKIoEz5YEv3yEl7PEw3+g3+Nvdx7dXV+61BaRRFYdprsKFb2Q9og3it+vCd4r4npE3l0a6SuBklxIiRQ7McizSDzhUgm2joVcDjjjFjF3Rp+1asiMHqJ6Tlz46aRB+F/FvPJq24HNEM+vKuhmpOdKnC3EWm8UT334DI8ItBX/MMxgirhjjGH2XxvjVEGwOymA93sFadiIimsN+u6QrXwl12/vMeuYr33Tr8mJEdp6tRVYZFXxEfc41n0meSi2ibjmu0wBtu1iqjnRan5xKMGDonKLqcAFzGILwkdHc3/Yewg6OY4zVMpmIvq2FIVieitjQbY8LW9nsKes5pOGr7tQQ6MqWAVW2eBIPJl8PmShHRgYzrjD9eWeQ6uINH+sp1XeWhsy1c64ummq+LnJCaV7HoqnQKiRjS1LFyxFPyvzKOpb03K1Z/Fj8v8Z66/SwiLAt+EtdhfrgPWxb69TZSFv+srYe/kve4aU6WzJGW7qUid4BiKSiHlvbo3MJFq2c/5PYveMTFX8qUtyBRDX5pevb//fG/6xm2ymF0XRY4/lyUprmi0po9xoz5IzHz368qsmPl+g3lCG29YWnJGFX/HviGuKm5o1ZdOTiPu/V6G20ih+v8fMnUDhJ6T5D530RgLx8n6Ya4xMDvuVlf4/6tmAJne81CE+mV00oIXwEoPYBt8sEvGb6bkPBm+er+sYRy0WDSKdt7Jb/wxos7jYmqiHy96cp6mmRa7nARocgS+eOzmcRhceaUf00neRyBWf2pvNc/VOnUir2hvXD1I8sZ9WsZ2cko1O1qM9SQX5LmBk+VE6lDUfMB8NuaZrMFye30QJXYrRnMDhPHRQMYJeP39qXPPhTCbeK56GkFc/vBXz4/ByRaOYorLlSw62qs4CF+GguMponNWuIIOuxmMgkZXOg9KeKzHzK+QfzxtQDPnlI0vTocV6YvIQoqxevmEdQ+ZJ/tYfBkXGNEuH12Wyv/+Dmmj/vJ6o3vP7gPfWbMvDH445D3Nw/lCYSNTKJ7ZJxwVDNbcLSKYgGgNigtMh/erRSzs7AY7IJ5R2y/i0uN/YcWF+SdBga8mdvUVlPg8adxHMXRo6hcgg3SL97JJCLeOmQGgt0Pj9EFVKXA/FZH0lQ7WuU1WnnwhnBX97rNb+77R/HstinK6Vy4/ZE3F/r3s6qEPQsJoEqArQO1BLIKS6TucRxCwFIP/cUvW49Onm283s/qdn4YhPbidHpkFW1rd6nkG+MwD1qe9h80gBM0MJx0cR5e7G2dVtUNurZqIXpXx2jABNlADHjbqBYcAGR93bylmP89clRe0pLc78uD/r4yf8vygxwrqooTDCnFh045zBwvryQ7xk1M3D7sYJAHyU6H74HI4eL/iITAjvoT8f+6klN4/114TfGrAYuX+b89XZEdxQSqx+bsya/c9Udon6nBJcRIqCfYPh7JysWSPhAAAAAAAAAAA", yd = Ha, xd = Ha;
var _d = /* @__PURE__ */ H('<img alt="Chat" class="button-logo svelte-bkcus6"/>'), kd = /* @__PURE__ */ rn('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-bkcus6"><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor" class="svelte-bkcus6"></path></svg>'), Sd = /* @__PURE__ */ H('<span class="unread-indicator svelte-bkcus6"></span>'), Cd = /* @__PURE__ */ H("<button><!> <!></button>");
const Td = {
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

  /* Enhancement 3: Gold glow as pseudo-element for GPU-accelerated transitions */.floating-button.svelte-bkcus6::after {content:'';position:absolute;inset:-4px;border-radius:inherit;background:transparent;box-shadow:0 0 20px rgba(var(--widget-accent-rgb), 0.5);opacity:0.5;transition:opacity 0.2s var(--widget-ease-spring);pointer-events:none;z-index:-1;}.floating-button.svelte-bkcus6:hover::after {opacity:1;}.floating-button.svelte-bkcus6:hover {transform:translateY(-3px);border-color:var(--widget-accent-light);}.floating-button.svelte-bkcus6:active {transform:translateY(-1px) scale(0.97);transition-duration:0.1s;}

  /* Focus-visible for accessibility.
     Note: ring and glow use the integrator's accent-color; very dark accents
     reduce contrast against dark host pages — see "Choosing an accent color"
     in docs/integration-guide.md and README.md. */.floating-button.svelte-bkcus6:focus-visible {outline:2px solid var(--widget-accent);outline-offset:3px;}.floating-button.svelte-bkcus6:focus-visible::after {opacity:1;box-shadow:0 0 0 4px rgba(var(--widget-accent-rgb), 0.25),
                0 0 20px rgba(var(--widget-accent-rgb), 0.5);}.floating-button.open.svelte-bkcus6 {
    /* When open, use blue border to match header */background:var(--widget-primary);border-color:var(--widget-primary);}.floating-button.open.svelte-bkcus6::after {box-shadow:0 0 20px rgba(var(--widget-primary-rgb), 0.5);}.floating-button.svelte-bkcus6 svg:where(.svelte-bkcus6) {width:24px;height:24px;transition:transform 0.25s var(--widget-ease-spring);position:relative;z-index:1;
    /* Subtle drop shadow on icon */filter:drop-shadow(0 1px 2px rgba(0, 0, 0, 0.15));}.floating-button.svelte-bkcus6 .button-logo:where(.svelte-bkcus6) {
    /* Logo fills most of the button */width:100%;height:100%;border-radius:var(--widget-radius-full);object-fit:cover;transition:transform 0.25s var(--widget-ease-spring);position:relative;z-index:1;}.floating-button.open.svelte-bkcus6 svg:where(.svelte-bkcus6) {transform:rotate(90deg);}.unread-indicator.svelte-bkcus6 {position:absolute;top:-2px;right:-2px;width:16px;height:16px;background:var(--widget-accent);border-radius:var(--widget-radius-full);border:2px solid var(--widget-background);
    /* Bot Gold glow effect */box-shadow:0 0 8px rgba(var(--widget-accent-rgb), 0.5);
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
function Fa(t, e) {
  Qe(e, !0), nt(t, Td);
  let i = q(e, "onclick", 7), r = q(e, "ui", 7, Dt), n = q(e, "buttonRef", 15, null);
  const s = /* @__PURE__ */ te(() => r().isOpen), a = /* @__PURE__ */ te(() => r().hasUnreadMessages);
  function o() {
    var h;
    (h = i()) == null || h();
  }
  var l = {
    get onclick() {
      return i();
    },
    set onclick(h) {
      i(h), R();
    },
    get ui() {
      return r();
    },
    set ui(h = Dt) {
      r(h), R();
    },
    get buttonRef() {
      return n();
    },
    set buttonRef(h = null) {
      n(h), R();
    }
  }, d = Cd();
  let u;
  d.__click = o;
  var g = Y(d);
  {
    var p = (h) => {
      var x = _d();
      he(() => ce(x, "src", yd)), D(h, x);
    }, v = (h) => {
      var x = kd();
      D(h, x);
    };
    ee(g, (h) => {
      f(s) ? h(v, !1) : h(p);
    });
  }
  var y = Z(g, 2);
  {
    var _ = (h) => {
      var x = Sd();
      D(h, x);
    };
    ee(y, (h) => {
      f(a) && !f(s) && h(_);
    });
  }
  return G(d), Ar(d, (h) => n(h), () => n()), he(() => {
    u = ci(d, 1, "floating-button svelte-bkcus6", null, u, { open: f(s) }), ce(d, "aria-label", f(s) ? "Close chat" : "Open chat");
  }), D(t, d), Xe(l);
}
$t(["click"]);
st(Fa, { onclick: {}, ui: {}, buttonRef: {} }, [], [], !0);
const Ed = 0.2, Id = 0.1;
function bs(t, e) {
  return t + e * Ed;
}
function Ad(t) {
  return Math.max(0, t - Id);
}
var Md = /* @__PURE__ */ H('<button class="question-chip svelte-otpvm8" type="button"> </button>'), Ld = /* @__PURE__ */ H('<div class="chip-scroll svelte-otpvm8"></div>'), Od = /* @__PURE__ */ H('<button class="question-chip svelte-otpvm8" type="button"> </button>'), Rd = /* @__PURE__ */ H('<div role="group" aria-label="Suggested questions" part="quick-questions"><div class="section-label svelte-otpvm8">Suggested questions</div> <!></div>');
const Nd = {
  hash: "svelte-otpvm8",
  code: `.quick-questions.svelte-otpvm8 {display:flex;flex-direction:column;align-items:center;align-self:center;gap:10px;padding:var(--widget-space-xs) 0;width:100%;max-width:280px;}

  /* Compact: small chips in a horizontal scrolling row, no visible label.
     Used under the resting bar so suggestions stay unobtrusive.
     The outer .quick-questions.compact is now a non-scrolling WRAPPER that owns
     ONLY the right-edge fade mask; the inner .chip-scroll owns overflow + focus
     so a focused chip's :focus-visible ring is never clipped by the mask
     (WCAG 2.4.11). */.quick-questions.compact.svelte-otpvm8 {flex-flow:row nowrap;justify-content:flex-start;gap:0;width:100%;max-width:100%;min-width:0; /* flex fix: respect the bar width so the inner row clips+scrolls
                     instead of growing to content width and escaping the bar */padding:0;
    /* Fade the right edge so the overflow reads as "scroll for more", not "cut".
       Mask is on the wrapper (not the scroller) so focus rings stay visible. */-webkit-mask-image:linear-gradient(to right, #000 calc(100% - 22px), transparent);mask-image:linear-gradient(to right, #000 calc(100% - 22px), transparent);}

  /* Inner scroll row: the actual horizontal scroller (and focus host). Because
     :focus-visible outlines render on the chips inside THIS element — which is
     not masked — a Tab-focused chip's ring is fully visible. Native scroll also
     brings a keyboard-focused chip into view past the fade. */.chip-scroll.svelte-otpvm8 {display:flex;flex-flow:row nowrap;align-items:center;justify-content:flex-start; /* first chip flush-left, fully visible */gap:6px;width:100%;min-width:0;overflow-x:auto;scrollbar-width:none; /* Firefox */
    /* Padding keeps a focused chip's 2px outline (offset 2px) from being clipped
       by the scroll container's own edge. */padding:4px 0;}.chip-scroll.svelte-otpvm8::-webkit-scrollbar {display:none; /* WebKit — keep the row clean */}.quick-questions.compact.svelte-otpvm8 .section-label:where(.svelte-otpvm8) {display:none;}.quick-questions.compact.svelte-otpvm8 .question-chip:where(.svelte-otpvm8) {flex:0 0 auto; /* keep natural width + readable; scroll instead of shrink */min-height:30px;padding:3px 10px;font-size:0.7rem;
    /* Frosted glass: a translucent tint over a strong blur — frosted, NOT opaque.
       The 85% frost keeps the chip label (--widget-primary #1e5ba8, L=0.106)
       above WCAG AA 4.5:1 against ANY backdrop: even a pure-black worst case the
       frost composites to L≈0.69 → 4.76:1; over mid/light backdrops it clears
       comfortably (~5.5:1+). 60% was the prior value and failed (2.36:1 over a
       dark backdrop). The blur stays so soft colour/light still reads through
       (glass), while background TEXT is obscured so the label reads cleanly.
       Theme-aware via --widget-background (dark in dark theme — see dark block). */background:color-mix(in srgb, var(--widget-background) calc(clamp(0, var(--widget-bar-rest-opacity, 0.85), 1) * 100%), transparent);-webkit-backdrop-filter:blur(20px) saturate(180%);backdrop-filter:blur(20px) saturate(180%);}

  /* Restore the fill-on-hover (the compact bg rule above would otherwise win). */.quick-questions.compact.svelte-otpvm8 .question-chip:where(.svelte-otpvm8):hover:not(:disabled) {background:var(--widget-primary);}.section-label.svelte-otpvm8 {font-size:var(--widget-font-size-xs);color:var(--widget-text-muted);margin-bottom:var(--widget-space-xs);
    /* animation-delay is set inline, driven by animationDelayBase, so the
       label stays in sync with the chips in both bar and in-window modes. */
    animation: svelte-otpvm8-fadeInUp 0.3s var(--widget-ease-out-expo) backwards;}.question-chip.svelte-otpvm8 {min-height:44px;padding:var(--widget-space-sm) var(--widget-space-lg);border:1.5px solid var(--widget-primary);border-radius:var(--widget-radius-full);background:transparent;color:var(--widget-primary);cursor:pointer;transition:background var(--widget-transition),
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
  .question-chip.svelte-otpvm8:disabled:active {background:transparent;color:var(--widget-text-secondary);transform:none;box-shadow:none;}[data-theme="dark"] .question-chip.svelte-otpvm8:disabled {border:1.5px solid var(--widget-text-muted);color:var(--widget-text-muted);}[data-theme="dark"] .question-chip.svelte-otpvm8 {border-color:var(--widget-primary-light);color:var(--widget-primary-light);}[data-theme="dark"] .question-chip.svelte-otpvm8:hover {background:var(--widget-primary-light);color:var(--widget-text-inverse);}

  /* Dark compact chip: --widget-background resolves dark, so the 85% frost is a
     DARK frost. color-mix(in srgb, var(--widget-primary-light) 55%, white) lifts
     the chip label to a lighter tint that follows the accent color when set.
     Derivation: dark frost composite = 0.85·#0a0e14 + 0.15·black ≈ #090c11
     (L≈0.002); inside the Shadow DOM --widget-primary-light comes from
     DARK_THEME.primaryLight = #fbbf24 (bright gold, themes.ts:72) — NOT #3b82f6.
     color-mix result for default dark primary-light: 0.55·#fbbf24 + 0.45·white
     ≈ #fdd07f (light amber, L≈0.731) → contrast vs dark frost ≈ 15:1 (well above
     AA 4.5:1). With accent-color set, --widget-primary-light re-derives from the
     accent's light variant via adjustColor(accent, +20); the worst-case #222222
     accent still produces ≥7:1 contrast. Resting bar in light theme keeps the
     #1e5ba8 label (the light-frost path). */[data-theme="dark"] .quick-questions.compact.svelte-otpvm8 .question-chip:where(.svelte-otpvm8) {color:color-mix(in srgb, var(--widget-primary-light) 55%, white);border-color:color-mix(in srgb, var(--widget-primary-light) 55%, white);}[data-theme="dark"] .quick-questions.compact.svelte-otpvm8 .question-chip:where(.svelte-otpvm8):hover:not(:disabled) {color:var(--widget-text-inverse);}`
};
function Hn(t, e) {
  Qe(e, !0), nt(t, Nd);
  const i = [
    "What's Leo's professional background?",
    "What technologies does Leo work with?",
    "How can I get in touch with Leo?"
  ];
  let r = q(e, "questions", 7, i), n = q(e, "onsend", 7), s = q(e, "disabled", 7, !1), a = q(e, "animationDelayBase", 7, 2.8), o = q(e, "compact", 7, !1);
  function l(h) {
    var x;
    s() || (x = n()) == null || x(h);
  }
  var d = {
    get questions() {
      return r();
    },
    set questions(h = i) {
      r(h), R();
    },
    get onsend() {
      return n();
    },
    set onsend(h) {
      n(h), R();
    },
    get disabled() {
      return s();
    },
    set disabled(h = !1) {
      s(h), R();
    },
    get animationDelayBase() {
      return a();
    },
    set animationDelayBase(h = 2.8) {
      a(h), R();
    },
    get compact() {
      return o();
    },
    set compact(h = !1) {
      o(h), R();
    }
  }, u = Rd();
  let g;
  var p = Y(u), v = Z(p, 2);
  {
    var y = (h) => {
      var x = Ld();
      Tn(x, 22, r, (M) => M, (M, m, b) => {
        var E = Md();
        E.__click = () => l(m);
        var L = Y(E, !0);
        G(E), he(
          (N) => {
            E.disabled = s(), ce(E, "title", m), Pr(E, `animation-delay: ${N ?? ""}s`), ce(E, "aria-disabled", s() ? "true" : "false"), Ct(L, m);
          },
          [() => bs(a(), f(b))]
        ), D(M, E);
      }), G(x), D(h, x);
    }, _ = (h) => {
      var x = er(), M = Ye(x);
      Tn(M, 18, r, (m) => m, (m, b, E) => {
        var L = Od();
        L.__click = () => l(b);
        var N = Y(L, !0);
        G(L), he(
          ($) => {
            L.disabled = s(), ce(L, "title", b), Pr(L, `animation-delay: ${$ ?? ""}s`), ce(L, "aria-disabled", s() ? "true" : "false"), Ct(N, b);
          },
          [() => bs(a(), f(E))]
        ), D(m, L);
      }), D(h, x);
    };
    ee(v, (h) => {
      o() ? h(y) : h(_, !1);
    });
  }
  return G(u), he(
    (h) => {
      g = ci(u, 1, "quick-questions svelte-otpvm8", null, g, { compact: o() }), Pr(p, `animation-delay: ${h ?? ""}s`);
    },
    [() => Ad(a())]
  ), D(t, u), Xe(d);
}
$t(["click"]);
st(
  Hn,
  {
    questions: {},
    onsend: {},
    disabled: {},
    animationDelayBase: {},
    compact: {}
  },
  [],
  [],
  !0
);
function qd(t) {
  var i;
  const e = t.getValue().trim();
  return e ? (t.setValue(""), (i = t.onsubmit) == null || i.call(t, e), !0) : !1;
}
function Dd(t, e) {
  return t === "Enter" && !e;
}
function Ba(t) {
  return typeof t == "string" && t.trim().toLowerCase() === "collapsed" ? "collapsed" : "visible";
}
var Pd = /* @__PURE__ */ rn('<svg class="bar-glow widget-glow-ring svelte-6j7vcd" aria-hidden="true"><rect x="0" y="0" width="100%" height="100%" rx="24" ry="24" pathLength="100"></rect></svg>'), zd = /* @__PURE__ */ H('<div class="resting-chips svelte-6j7vcd"><div class="resting-chips-inner svelte-6j7vcd"><!></div></div>'), $d = /* @__PURE__ */ H('<div part="resting-bar-wrapper"><!> <div class="resting-bar svelte-6j7vcd" role="search" aria-label="Chat with assistant" part="resting-bar"><input type="text" class="resting-input svelte-6j7vcd" placeholder="Ask a question…" aria-label="Ask a question" part="resting-input"/> <button class="resting-send svelte-6j7vcd" part="resting-send" aria-label="Send message"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button></div> <!></div>');
const Ud = {
  hash: "svelte-6j7vcd",
  code: `
  /*
   * Resting bar: fixed, bottom-center, slim footprint. Always centered
   * regardless of the \`position\` attribute (which only seeds the open
   * animation's target corner).
   */.resting-bar-wrapper.svelte-6j7vcd {position:fixed;bottom:24px;left:50%;transform:translateX(-50%);z-index:var(--widget-z-base, 9000);display:flex;flex-direction:column;align-items:center;gap:var(--widget-space, 12px);

    /* Match the desktop chat window width so the pill's footprint lines up with
       the window's, letting the window unfold upward out of it. Read from the
       integrator-tunable --widget-bar-width token; the chat window reads the
       SAME token (ChatWidget.svelte) so the bar→window morph stays aligned. The
       100vw clamp keeps the bar on-screen on narrow viewports and MUST use the
       same inset as the window's clamp (ChatWidget.svelte: \`2 * --widget-space-lg\`)
       so the two resolve to identical widths even when the clamp binds — else a
       large --widget-bar-width desyncs the morph. */width:min(var(--widget-bar-width, 400px), calc(100vw - 2 * var(--widget-space-lg)));font-family:var(--widget-font-family);}

  /* The chip-row wrappers must span the bar width (not shrink-to-fit) so the
     compact QuickQuestions row clips + horizontally scrolls WITHIN the bar
     instead of escaping its edges. As centered column-flex items these divs
     would otherwise size to content; width:100% pins them to the bar, and
     min-width:0 lets the inner row's scroll-clip work. Applies in both rest-chips
     modes. */.resting-chips.svelte-6j7vcd,
  .resting-chips-inner.svelte-6j7vcd {width:100%;min-width:0;}

  /*
   * Collapsed chips (rest-chips="collapsed"): hide the chip row at rest and
   * reveal it on focus via pure CSS :focus-within (zero $state). The pill is the
   * last flex child and stays put; the chips animate to ZERO intrinsic height
   * when collapsed (grid-template-rows:0fr on the grid wrapper + collapsed gap),
   * so the row grows UPWARD on reveal to the content's natural height — no magic
   * max-height cap, no clip at any zoom. visibility:hidden at rest removes the
   * chip buttons from BOTH the a11y tree and the tab order, so screen-reader and
   * keyboard users skip them entirely until focus enters the bar (the input/send
   * pill precedes .resting-chips in DOM, so :focus-within flips visibility:visible
   * before a Tab can reach a chip). visibility is sequenced after the fade so the
   * chips fade out THEN go inert; on reveal it flips instantly.
   * Note: interpolating grid-template-rows (0fr↔1fr) needs Chrome 107+/FF 66+/
   * Safari 16+. On older engines the reveal degrades gracefully to an instant
   * height change (still fully functional; only the grow animation is lost).
   */.resting-bar-wrapper.chips-collapsed.svelte-6j7vcd {gap:0; /* collapse the column gap so no reserved sliver shows at rest */}.chips-collapsed.svelte-6j7vcd .resting-chips:where(.svelte-6j7vcd) {display:grid;grid-template-rows:0fr;opacity:0;visibility:hidden;pointer-events:none;transition:opacity 200ms var(--widget-ease-out-expo),
                grid-template-rows 200ms var(--widget-ease-out-expo),
                visibility 0s linear 200ms; /* flip to hidden AFTER the fade */}

  /* The immediate grid child must clip its own overflow and be able to shrink to
     0fr — min-height:0 lets the grid track collapse fully. */.chips-collapsed.svelte-6j7vcd .resting-chips-inner:where(.svelte-6j7vcd) {overflow:hidden;min-height:0;}

  /* Reveal on focus anywhere in the bar (input focus, or a chip itself). */.resting-bar-wrapper.chips-collapsed.svelte-6j7vcd:focus-within {gap:var(--widget-space, 12px);}.chips-collapsed.svelte-6j7vcd:focus-within .resting-chips:where(.svelte-6j7vcd) {grid-template-rows:1fr; /* animate to the chip strip's intrinsic height */opacity:1;visibility:visible; /* instant — no delay — so chips are focusable on reveal */pointer-events:auto;transition:opacity 200ms var(--widget-ease-out-expo),
                grid-template-rows 200ms var(--widget-ease-out-expo),
                visibility 0s linear 0s;}

  /* Mobile: near-full width with side margins */
  @media (max-width: 480px) {.resting-bar-wrapper.svelte-6j7vcd {width:calc(100vw - 2rem);bottom:16px;}
  }

  /*
   * Transition A Phase 1 (desktop only): slide the centered pill toward the
   * target corner while fading out, masking the swap to the scaling window.
   * The resting transform is translateX(-50%); the keyframe preserves that
   * offset and adds the corner shift. Mobile keeps the bar centered (the
   * window is a full-screen takeover, so Phase 1 is skipped).
   */
  @media (min-width: 768px) {.resting-bar-wrapper.translating.svelte-6j7vcd {
      animation: svelte-6j7vcd-barToCornerRight 450ms cubic-bezier(0.4, 0, 0.2, 1) forwards;}.resting-bar-wrapper.translating[data-position="bottom-left"].svelte-6j7vcd {
      animation-name: svelte-6j7vcd-barToCornerLeft;}

    /*
     * Glide the centered pill so its RIGHT edge lands exactly on the chat
     * window's right edge (viewport_right − --widget-space-lg). The resting
     * transform is translateX(-50%) off a left:50% base, so the target delta
     * subtracts the FULL element width (100%) — subtracting half (50%) is what
     * overshot the right edge ~width/2 off-screen. The pill stays fully OPAQUE
     * through the glide: when it lands, the window unmounts the bar and unfolds
     * upward from the same footprint (see ChatWidget barExpandUp), so fading the
     * pill here would read as "disappears then pops" instead of a morph.
     */
    @keyframes svelte-6j7vcd-barToCornerRight {
      from {
        transform: translateX(-50%);
      }
      to {
        transform: translateX(calc(50vw - var(--widget-space-lg, 16px) - 100%));
      }
    }

    /* Mirror: left edge lands on the window's left edge (--widget-space-lg). */
    @keyframes svelte-6j7vcd-barToCornerLeft {
      from {
        transform: translateX(-50%);
      }
      to {
        transform: translateX(calc(var(--widget-space-lg, 16px) - 50vw));
      }
    }
  }

  @media (prefers-reduced-motion: reduce) {.resting-bar-wrapper.translating.svelte-6j7vcd {
      animation: none !important;opacity:0;}

    /* No collapse/reveal easing for vestibular-sensitive users — the grid/opacity
       reveal snaps instantly. The chips still toggle on focus; only the motion is
       removed. visibility flips with 0s delay too (no lingering 200ms that would
       leave a flash of inert-but-visible chips). */.chips-collapsed.svelte-6j7vcd .resting-chips:where(.svelte-6j7vcd),
    .chips-collapsed.svelte-6j7vcd:focus-within .resting-chips:where(.svelte-6j7vcd) {transition:visibility 0s !important;}
  }

  /* Comet overlays the pill: absolutely positioned (out of flex flow via
     .widget-glow-ring), width:100%/height:48px match the 48px pill; chips sit
     below in normal flow. The rect's rx/ry="24" attributes = half the pill
     height, giving a true capsule. */.bar-glow.svelte-6j7vcd {top:0;left:0;width:100%;height:48px;}.resting-bar.svelte-6j7vcd {display:flex;align-items:center;gap:0;

    /* iOS-style frosted glass — UNIFIED with the compact quick-question chips
       (QuickQuestions.svelte): same 85% color-mix frost + blur so bar and chips
       render as one consistent frosted surface in light AND dark themes. 85%
       (was --widget-glass ~0.98) keeps the surface translucent/frosted while
       guaranteeing the bar's input text (--widget-text #0f172a) and placeholder
       (--widget-text-secondary) clear WCAG AA over any backdrop: input ≥12.6:1,
       placeholder ≥5.35:1 even over the worst-case dark backdrop. Theme-aware
       via --widget-background (dark in dark theme → dark frost). */
    /* Frost ratio is integrator-tunable via --widget-bar-rest-opacity (default
       0.85). Lower = more transparent until engaged. The ratio composites
       against the theme-aware --widget-background, so it stays dark-theme-aware
       without recoloring the shared surface. */background:color-mix(in srgb, var(--widget-background) calc(clamp(0, var(--widget-bar-rest-opacity, 0.85), 1) * 100%), transparent);-webkit-backdrop-filter:blur(20px) saturate(180%);backdrop-filter:blur(20px) saturate(180%);border:1px solid var(--widget-border-light);border-radius:var(--widget-radius-full); /* Fully rounded pill */box-shadow:var(--widget-shadow-bar, 0 8px 32px rgba(0, 0, 0, 0.12)); /* literal fallback for non-Shadow-DOM (app.css) context */overflow:hidden;width:100%;height:48px;transition:background var(--widget-transition);}

  /* Lift the frost to fully opaque once the visitor engages (hover or focus) so
     the input reads at maximum contrast while typing. At rest it honors the
     tunable --widget-bar-rest-opacity. */.resting-bar-wrapper.svelte-6j7vcd:hover .resting-bar:where(.svelte-6j7vcd),
  .resting-bar-wrapper.svelte-6j7vcd:focus-within .resting-bar:where(.svelte-6j7vcd) {background:var(--widget-background);}.resting-input.svelte-6j7vcd {flex:1;min-width:0;height:100%;padding:0 1rem 0 1.25rem;border:none;background:transparent;outline:none;font-size:0.9375rem;
    /* --widget-text-primary is not a defined token; use --widget-text (the
       canonical high-contrast body color, #0f172a light / #f8fafc dark) so the
       typed text contrast over the 85% frost is guaranteed, not inherited. */color:var(--widget-text);font-family:var(--widget-font-family);caret-color:var(--widget-primary);}.resting-input.svelte-6j7vcd::placeholder {color:var(--widget-text-secondary, #718096);}.resting-send.svelte-6j7vcd {flex-shrink:0;
    /* WCAG 2.5.5: 44x44 minimum touch target. margin 2px keeps the 48px pill. */width:44px;height:44px;margin:2px;border:none;border-radius:var(--widget-radius-full);background:var(--widget-primary);color:var(--widget-text-inverse, #fff);cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background var(--widget-transition), opacity var(--widget-transition);}.resting-send.svelte-6j7vcd:hover:not(:disabled) {background:var(--widget-primary-hover);}.resting-send.svelte-6j7vcd:disabled {opacity:0.4;cursor:default;}.resting-send.svelte-6j7vcd:focus-visible {outline:2px solid var(--widget-primary);outline-offset:2px;}

  /* Dark theme adjustments */[data-theme="dark"] .resting-bar.svelte-6j7vcd {
    /* --widget-background resolves dark here, so the same 85% color-mix frost
       (inherited from .resting-bar above) produces a dark frost — matching the
       compact chips. Keep the blur; just firm up the border for contrast. */border-color:var(--widget-border);}`
};
function Va(t, e) {
  Qe(e, !0), nt(t, Ud);
  let i = q(e, "config", 7, Ae), r = q(e, "position", 7, "bottom-right"), n = q(e, "onsubmit", 7), s = q(e, "onchip", 7), a = q(e, "translating", 7, !1), o = q(e, "onanimationend", 7), l = q(e, "restChips", 7, "visible"), d = q(e, "attentionGlow", 7, "off");
  const u = /* @__PURE__ */ te(() => Ba(l()));
  let g = /* @__PURE__ */ P("");
  function p() {
    qd({
      getValue: () => f(g),
      setValue: (S) => {
        A(g, S, !0);
      },
      onsubmit: n()
    });
  }
  function v(S) {
    Dd(S.key, S.shiftKey) && (S.preventDefault(), p());
  }
  const y = /* @__PURE__ */ te(() => {
    var S;
    return (S = i()) == null ? void 0 : S.quickQuestions;
  });
  var _ = {
    get config() {
      return i();
    },
    set config(S = Ae) {
      i(S), R();
    },
    get position() {
      return r();
    },
    set position(S = "bottom-right") {
      r(S), R();
    },
    get onsubmit() {
      return n();
    },
    set onsubmit(S) {
      n(S), R();
    },
    get onchip() {
      return s();
    },
    set onchip(S) {
      s(S), R();
    },
    get translating() {
      return a();
    },
    set translating(S = !1) {
      a(S), R();
    },
    get onanimationend() {
      return o();
    },
    set onanimationend(S) {
      o(S), R();
    },
    get restChips() {
      return l();
    },
    set restChips(S = "visible") {
      l(S), R();
    },
    get attentionGlow() {
      return d();
    },
    set attentionGlow(S = "off") {
      d(S), R();
    }
  }, h = $d();
  let x;
  var M = Y(h);
  {
    var m = (S) => {
      var C = Pd();
      D(S, C);
    };
    ee(M, (S) => {
      d() === "brand" && S(m);
    });
  }
  var b = Z(M, 2), E = Y(b);
  ed(E), E.__keydown = v;
  var L = Z(E, 2);
  L.__click = p, G(b);
  var N = Z(b, 2);
  {
    var $ = (S) => {
      var C = zd(), F = Y(C), j = Y(F);
      Hn(j, {
        get questions() {
          return f(y);
        },
        get onsend() {
          return s();
        },
        animationDelayBase: 0.3,
        compact: !0
      }), G(F), G(C), D(S, C);
    };
    ee(N, (S) => {
      f(y) && f(y).length > 0 && S($);
    });
  }
  return G(h), he(
    (S) => {
      x = ci(h, 1, "resting-bar-wrapper svelte-6j7vcd", null, x, {
        translating: a(),
        "chips-collapsed": f(u) === "collapsed"
      }), ce(h, "data-position", r()), L.disabled = S;
    },
    [() => !f(g).trim()]
  ), Sa("animationend", h, function(...S) {
    var C;
    (C = o()) == null || C.apply(this, S);
  }), Ea(E, () => f(g), (S) => A(g, S)), D(t, h), Xe(_);
}
$t(["keydown", "click"]);
st(
  Va,
  {
    config: {},
    position: {},
    onsubmit: {},
    onchip: {},
    translating: {},
    onanimationend: {},
    restChips: {},
    attentionGlow: {}
  },
  [],
  [],
  !0
);
class $e extends Error {
  constructor(e, i, r = !1) {
    super(e), this.name = "ChatWidgetError", this.context = i, this.timestamp = /* @__PURE__ */ new Date(), this.isRetryable = r, Error.captureStackTrace && Error.captureStackTrace(this, $e);
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
class vi extends $e {
  constructor(e, i, r, n) {
    super(e, { ...n, statusCode: i, endpoint: r }, !0), this.name = "NetworkError", this.statusCode = i, this.endpoint = r;
  }
}
class Ga extends $e {
  constructor(e, i, r, n, s) {
    super(e, { ...s, wsUrl: i, closeCode: r, closeReason: n }, !0), this.name = "WebSocketError", this.wsUrl = i, this.closeCode = r, this.closeReason = n;
  }
}
class fr extends $e {
  constructor(e, i, r, n, s) {
    super(e, { ...s, field: i, value: r, expectedType: n }, !1), this.name = "ValidationError", this.field = i, this.value = r, this.expectedType = n;
  }
}
class Ya extends $e {
  constructor(e, i, r, n) {
    super(e, { ...n, configKey: i, configValue: r }, !1), this.name = "ConfigurationError", this.configKey = i, this.configValue = r;
  }
}
class Qa extends $e {
  constructor(e, i, r, n) {
    super(e, { ...n, clientId: i, statusCode: r }, !1), this.name = "AuthenticationError", this.clientId = i, this.statusCode = r;
  }
}
class mi extends $e {
  constructor(e, i, r, n) {
    super(e, { ...n, retryAfter: i, limit: r }, !0), this.name = "RateLimitError", this.retryAfter = i, this.limit = r;
  }
}
class Xa extends $e {
  constructor(e, i, r, n) {
    super(e, { ...n, storageType: i, operation: r }, !0), this.name = "StorageError", this.storageType = i, this.operation = r;
  }
}
class Ka extends $e {
  constructor(e, i, r, n) {
    super(e, { ...n, timeout: i, operation: r }, !0), this.name = "TimeoutError", this.timeout = i, this.operation = r;
  }
}
function ys(t) {
  return t instanceof $e ? t.isRetryable : !!(t instanceof TypeError && t.message.includes("fetch"));
}
function jd(t) {
  return t instanceof $e ? {
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
function Wd(t) {
  return t instanceof vi ? t.statusCode === 404 ? "Service temporarily unavailable. Please try again later." : t.statusCode === 429 || t instanceof mi ? "Too many requests. Please wait a moment and try again." : t.statusCode && t.statusCode >= 500 ? "Server error. Please try again in a few moments." : t.statusCode && (t.statusCode === 400 || t.statusCode === 401 || t.statusCode === 403) ? t.message : "Unable to connect to the server. Please check your internet connection." : t instanceof Ga ? "Connection lost. Attempting to reconnect..." : t instanceof Qa ? "Access denied. Please check your configuration." : t instanceof fr ? t.message : t instanceof Ya ? "Widget configuration error. Please contact support." : t instanceof Ka ? "Request timed out. Please try again." : t instanceof Xa ? "Unable to save data. Please check your browser settings." : "Something went wrong. Please try again.";
}
class pr {
  /**
   * Process and categorize errors using custom error classes
   */
  static handle(e, i) {
    const r = jd(e);
    let n;
    return e instanceof vi ? n = "NETWORK_ERROR" : e instanceof Ga ? n = "WEBSOCKET_ERROR" : e instanceof fr ? n = "VALIDATION_ERROR" : e instanceof Ya ? n = "CONFIGURATION_ERROR" : e instanceof Qa ? n = "AUTHENTICATION_ERROR" : e instanceof mi ? n = "RATE_LIMIT_ERROR" : e instanceof Xa ? n = "STORAGE_ERROR" : e instanceof Ka ? n = "TIMEOUT_ERROR" : e instanceof $e ? n = "WIDGET_ERROR" : n = "UNKNOWN_ERROR", {
      message: Wd(e),
      code: n,
      isUserFacing: !0,
      shouldRetry: ys(e),
      context: {
        ...i,
        metadata: {
          ...i.metadata,
          errorDetails: r
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
    return e && typeof e == "object" && "shouldRetry" in e ? e.shouldRetry : ys(e);
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
const Hd = "https://ai-gateway-service-staging-639717727892.us-east4.run.app";
class An {
  // Production URL configured via VITE_API_BASE_URL environment variable
  // Falls back to DEFAULT_GATEWAY_URL if not set
  /**
   * Resolve API and WebSocket URLs based on client ID and environment
   */
  static resolveUrls(e, i = {}) {
    const r = Ua.validate(e);
    if (!r.isValid)
      throw new Error(`Invalid client ID for URL resolution: ${r.error}`);
    const n = r.sanitizedValue;
    return this.isDevelopmentEnvironment(i.environment) ? this.resolveDevelopmentUrls(n) : this.resolveProductionUrls(n);
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
    const i = Hd, r = this.isLocalhostUrl(i) ? i : this.ensureHttps(i);
    return {
      apiUrl: this.buildApiUrl(r, e),
      wsUrl: this.buildWsUrl(r, e)
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
    const r = this.buildUrlWithPath(e, `/api/v1/communication/${i}/ws`);
    return this.convertToWebSocket(r);
  }
  /**
   * Safely append a path to a base URL, handling query parameters and fragments correctly
   */
  static buildUrlWithPath(e, i) {
    try {
      const r = new URL(e);
      return r.pathname = (r.pathname === "/" ? "" : r.pathname) + i, r.toString();
    } catch {
      const n = e.endsWith("/") ? "" : "/";
      return e + n + i.substring(1);
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
class Ja {
  constructor(e) {
    try {
      const i = window, r = i.AIChat || i.ChatWidget || {}, n = e ? this.parseElementAttributes(e) : {}, s = {
        ...je,
        ...r,
        ...n
      };
      if ((r.apiUrl || r.wsUrl) && console.warn(
        `[Assistant Widget] Deprecation Warning: window.AIChat.apiUrl and window.AIChat.wsUrl are no longer supported.
URL configuration is now handled at build time via VITE_API_BASE_URL environment variable.
For local development: npm run build:local
For production: npm run build (uses default staging gateway)`
      ), !s.clientId)
        throw new Error("Widget configuration missing: clientId is required");
      const a = Ua.validate(s.clientId);
      if (!a.isValid)
        throw new Error(`Invalid client ID: ${a.error}`);
      const o = An.resolveUrls(a.sanitizedValue);
      this.config = {
        ...s,
        clientId: a.sanitizedValue,
        ...o
      };
    } catch (i) {
      const r = pr.handle(i, {
        component: "ConfigManager",
        action: "constructor"
      });
      throw new Error(r.message);
    }
  }
  /**
   * Parse HTML element attributes into configuration object
   * Uses unified configuration attribute mapping
   */
  parseElementAttributes(e) {
    const i = {}, r = e.getAttributeNames();
    for (const n of r) {
      const s = Na.attributeToProperty(n);
      if (!s) continue;
      const a = e.getAttribute(n);
      if (a)
        switch (s) {
          case "clientId":
          case "title":
          case "logoUrl":
          case "placeholder":
          case "avatarEmoji":
            i[s] = a;
            break;
          case "accentColor":
            i.accentColor = Mr(a) ? a : void 0;
            break;
          case "theme":
            qa(a) && (i.theme = a);
            break;
          case "position":
            (a === "bottom-left" || a === "bottom-right") && (i.position = a);
            break;
          case "debug":
          case "autoInit":
            i[s] = a === "true" || a === "";
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
const Ji = /* @__PURE__ */ new Map();
let xr = !1;
function Fd() {
  try {
    const t = "__storage_test__";
    return localStorage.setItem(t, t), localStorage.removeItem(t), !0;
  } catch {
    return !1;
  }
}
xr = !Fd();
function Bd(t) {
  try {
    return xr ? Ji.get(t) ?? null : localStorage.getItem(t);
  } catch {
    return Ji.get(t) ?? null;
  }
}
function Vd(t, e) {
  try {
    return xr ? (Ji.set(t, e), !0) : (localStorage.setItem(t, e), !0);
  } catch {
    return Ji.set(t, e), xr = !0, !1;
  }
}
function Gd(t) {
  try {
    if (xr) {
      Ji.delete(t);
      return;
    }
    localStorage.removeItem(t);
  } catch {
    Ji.delete(t);
  }
}
const et = class et {
  /**
   * @param storageAdapter - Optional storage adapter for testing (defaults to localStorage via safe utils)
   */
  constructor(e) {
    this.storageAdapter = e, this.visitorId = this.getOrCreateVisitorId();
  }
  getOrCreateVisitorId() {
    var i;
    let e = this.getItem(et.VISITOR_ID_KEY);
    return e || (e = this.generateVisitorId(), this.setItem(et.VISITOR_ID_KEY, e), (i = window.AIChat) != null && i.debug && B.log("ChatWidget", "Created new visitor", e)), e;
  }
  /**
   * Internal storage access methods that use adapter if available
   */
  getItem(e) {
    return this.storageAdapter ? this.storageAdapter.getItem(e) : Bd(e);
  }
  setItem(e, i) {
    this.storageAdapter ? this.storageAdapter.setItem(e, i) : Vd(e, i);
  }
  removeItem(e) {
    this.storageAdapter ? this.storageAdapter.removeItem(e) : Gd(e);
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
    const r = i.slice(-10);
    this.setItem(
      et.SESSION_HISTORY_KEY,
      JSON.stringify(r)
    );
  }
  getSessionHistory() {
    const e = this.getItem(et.SESSION_HISTORY_KEY);
    return e ? JSON.parse(e) : [];
  }
  getLastActiveSession() {
    const i = this.getSessionHistory().filter(
      (r) => r.active && Date.now() - r.timestamp < ge.SESSION_TIMEOUT
    );
    return i.length > 0 ? i[i.length - 1].id : null;
  }
  /**
   * Mark a session as inactive when it ends
   */
  markSessionInactive(e) {
    const r = this.getSessionHistory().map(
      (n) => n.id === e ? { ...n, active: !1 } : n
    );
    this.setItem(
      et.SESSION_HISTORY_KEY,
      JSON.stringify(r)
    );
  }
  /**
   * Clear visitor data for GDPR compliance
   */
  clearVisitorData() {
    this.removeItem(et.VISITOR_ID_KEY), this.removeItem(et.SESSION_HISTORY_KEY), this.visitorId = this.generateVisitorId();
  }
};
et.VISITOR_ID_KEY = ms.VISITOR_ID, et.SESSION_HISTORY_KEY = ms.SESSIONS;
let Br = et;
class cr {
  /**
   * Get API endpoint URL with base path resolved
   */
  static getApiUrl(e, i) {
    const { apiUrl: r } = An.resolveUrls(i.clientId, i.options);
    switch (e) {
      case "init":
        return `${r}/init`;
      case "chat":
        return `${r}/chat`;
      case "sessionHealth":
        if (!i.sessionId)
          throw new Error("sessionId required for sessionHealth endpoint");
        return `${r}/session/${i.sessionId}/health`;
      default:
        throw new Error(`Unknown API endpoint: ${e}`);
    }
  }
  /**
   * Get WebSocket URL with query parameters
   */
  static getWebSocketUrl(e) {
    const { wsUrl: i } = An.resolveUrls(e.clientId, e.options), r = new URLSearchParams({
      session_id: e.sessionId
    });
    return e.visitorId && r.append("visitor_id", e.visitorId), `${i}?${r}`;
  }
}
var ae = /* @__PURE__ */ ((t) => (t.DISCONNECTED = "disconnected", t.CONNECTING = "connecting", t.CONNECTED = "connected", t.ERROR = "error", t))(ae || {});
function Za(t) {
  return t === "connected" || t === "connecting";
}
class eo {
  /**
   * @param correlationService Per-instance CorrelationService for multi-widget isolation.
   *   Defaults to the module singleton. Omitting this parameter breaks state isolation
   *   when multiple widget instances exist on the same page.
   */
  constructor(e, i, r = Ki()) {
    this.ws = null, this.sessionId = null, this.state = "disconnected", this.messageQueue = [], this.reconnectAttempts = 0, this.maxReconnectAttempts = ge.MAX_RECONNECT_ATTEMPTS, this.reconnectDelay = ge.RECONNECT_DELAY, this.heartbeatInterval = null, this.listeners = /* @__PURE__ */ new Map(), this.abortController = null, this.cleanupFunctions = [], this.visibilityChangeHandler = null, this.pendingPongTimeout = null, this.config = e, this.visitor = i, this.debugLogger = an(e.getAll()), this.correlationService = r, this.setupVisibilityChangeListener();
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
        const i = cr.getWebSocketUrl({
          clientId: this.config.clientId,
          sessionId: e,
          visitorId: this.visitor.getVisitorId()
        });
        this.ws = new WebSocket(i), this.setupEventHandlers();
      } catch (i) {
        const r = pr.handle(i, {
          component: "WebSocketManager",
          action: "connect",
          sessionId: e
        });
        this.debugLogger.error("WebSocketManager", "WebSocket connection failed", r.message), this.setState(
          "error"
          /* ERROR */
        ), this.scheduleReconnect();
      }
    }
  }
  setupEventHandlers() {
    this.ws && (this.ws.onopen = () => {
      var e, i, r;
      this.debugLogger.log("WebSocketManager", "WebSocket connected successfully", {
        url: (e = this.ws) == null ? void 0 : e.url,
        readyState: (i = this.ws) == null ? void 0 : i.readyState,
        sessionId: this.sessionId,
        messageListeners: ((r = this.listeners.get("message")) == null ? void 0 : r.size) || 0,
        totalListeners: this.listeners.size,
        timestamp: Date.now()
      }), this.setState(
        "connected"
        /* CONNECTED */
      ), this.reconnectAttempts = 0, this.flushMessageQueue(), this.startHeartbeat();
    }, this.ws.onmessage = (e) => {
      var i, r, n, s, a, o, l, d, u;
      this.debugLogger.log("WebSocketManager", "Raw message received", {
        data: e.data,
        type: typeof e.data,
        length: ((i = e.data) == null ? void 0 : i.length) || 0,
        timestamp: Date.now(),
        wsReadyState: (r = this.ws) == null ? void 0 : r.readyState,
        sessionId: this.sessionId
      });
      try {
        const g = JSON.parse(e.data);
        this.debugLogger.log("WebSocketManager", "Parsed message", {
          message: g,
          messageType: g.type,
          content: (n = g.data) == null ? void 0 : n.content,
          hasContent: !!((s = g.data) != null && s.content),
          contentLength: ((o = (a = g.data) == null ? void 0 : a.content) == null ? void 0 : o.length) || 0,
          hasError: g.type === "error",
          metadata: (l = g.data) == null ? void 0 : l.metadata
        }), this.debugLogger.log("WebSocketManager", "Emitting to listeners", {
          listenerCount: ((d = this.listeners.get("message")) == null ? void 0 : d.size) || 0,
          hasMessageListeners: this.listeners.has("message"),
          allListenerTypes: Array.from(this.listeners.keys())
        }), this.emit("message", g), this.debugLogger.log("WebSocketManager", "Message emission completed successfully");
      } catch (g) {
        this.debugLogger.error("WebSocketManager", "Parse error", {
          error: g instanceof Error ? g.message : String(g),
          rawData: e.data,
          rawDataType: typeof e.data,
          rawDataLength: ((u = e.data) == null ? void 0 : u.length) || 0
        });
      }
    }, this.ws.onerror = (e) => {
      var i, r;
      this.debugLogger.error("WebSocketManager", "WebSocket error details", {
        error: e,
        errorType: e.type,
        readyState: (i = this.ws) == null ? void 0 : i.readyState,
        url: (r = this.ws) == null ? void 0 : r.url,
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
    }, ge.VISIBILITY_PING_TIMEOUT);
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
    var n, s, a;
    const i = this.correlationService.getCurrent();
    this.debugLogger.log("WebSocketManager", "send() called", {
      correlationId: i,
      message: e,
      messageLength: (e == null ? void 0 : e.length) || 0,
      messageType: typeof e,
      wsState: this.state,
      wsReadyState: (n = this.ws) == null ? void 0 : n.readyState,
      sessionId: this.sessionId
    });
    const r = JSON.stringify({
      type: "message",
      message: e,
      correlation_id: i,
      timestamp: Date.now()
    });
    if (this.debugLogger.log("WebSocketManager", "JSON payload created", {
      correlationId: i,
      data: r,
      dataLength: r.length,
      parsedBack: JSON.parse(r)
    }), this.state === "connected" && ((s = this.ws) == null ? void 0 : s.readyState) === WebSocket.OPEN)
      this.debugLogger.log("WebSocketManager", "Sending via WebSocket immediately", { correlationId: i }), this.ws.send(r);
    else {
      if (this.debugLogger.log("WebSocketManager", "WebSocket not ready, queuing message", {
        correlationId: i,
        state: this.state,
        readyState: (a = this.ws) == null ? void 0 : a.readyState,
        queueLength: this.messageQueue.length
      }), this.messageQueue.length >= At.MAX_QUEUE_SIZE) {
        this.debugLogger.warn("WebSocketManager", "Message queue full", {
          queueSize: this.messageQueue.length,
          maxSize: At.MAX_QUEUE_SIZE
        }), this.emit("error", {
          error: "Too many pending messages. Please wait for connection to restore."
        });
        return;
      }
      this.messageQueue.push(r), this.state === "disconnected" && (this.debugLogger.log("WebSocketManager", "Attempting to reconnect...", { correlationId: i }), this.reconnect());
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
    const e = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), i = e ? ge.MOBILE_HEARTBEAT_INTERVAL : ge.HEARTBEAT_INTERVAL;
    this.debugLogger.log("WebSocketManager", "Starting heartbeat", {
      isMobile: e,
      interval: i,
      intervalSeconds: i / 1e3
    }), this.heartbeatInterval = window.setInterval(() => {
      var r;
      ((r = this.ws) == null ? void 0 : r.readyState) === WebSocket.OPEN && this.ws.send(JSON.stringify({ type: "ping" }));
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
    var r;
    (r = this.listeners.get(e)) == null || r.delete(i);
  }
  emit(e, i) {
    var r;
    (r = this.listeners.get(e)) == null || r.forEach((n) => n(i));
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
      const r = JSON.stringify({
        type: "ping",
        message: "connection-test",
        timestamp: Date.now()
      });
      this.debugLogger.log("WebSocketManager", "Sending test ping", r), this.ws.send(r);
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
var Yd = /* @__PURE__ */ H('<button class="close-button svelte-g5m62x" aria-label="Close chat" type="button"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true" class="svelte-g5m62x"><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor" class="svelte-g5m62x"></path></svg></button>'), Qd = /* @__PURE__ */ H('<header class="chat-header svelte-g5m62x"><div class="header-content svelte-g5m62x"><div role="status"></div> <h2 class="header-title svelte-g5m62x"> </h2></div> <!></header>');
const Xd = {
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
function Fn(t, e) {
  Qe(e, !0), nt(t, Xd);
  let i = q(e, "onclose", 7), r = q(e, "connectionState", 23, () => ae.DISCONNECTED), n = q(e, "connectionFailed", 7, !1), s = q(e, "showCloseButton", 7, !0), a = q(e, "ui", 7, Dt), o = q(e, "config", 7, Ae);
  const l = /* @__PURE__ */ te(() => {
    if (n()) return "var(--widget-error)";
    switch (r()) {
      case ae.CONNECTED:
        return "var(--widget-success)";
      case ae.CONNECTING:
        return "var(--widget-warning, #ca8a04)";
      case /* Darker yellow for WCAG AA */
      ae.ERROR:
        return "var(--widget-error)";
      default:
        return "var(--widget-text-secondary)";
    }
  }), d = /* @__PURE__ */ te(() => {
    if (n()) return "Connection lost";
    switch (r()) {
      case ae.CONNECTED:
        return "Connected";
      case ae.CONNECTING:
        return "Connecting";
      case ae.ERROR:
        return "Connection error";
      case ae.DISCONNECTED:
        return "Disconnected";
      default:
        return "";
    }
  }), u = /* @__PURE__ */ te(() => r() === ae.CONNECTING ? "pulse-slow" : r() === ae.ERROR ? "blink-slow" : "");
  function g() {
    var b;
    a().close(), (b = i()) == null || b();
  }
  var p = {
    get onclose() {
      return i();
    },
    set onclose(b) {
      i(b), R();
    },
    get connectionState() {
      return r();
    },
    set connectionState(b = ae.DISCONNECTED) {
      r(b), R();
    },
    get connectionFailed() {
      return n();
    },
    set connectionFailed(b = !1) {
      n(b), R();
    },
    get showCloseButton() {
      return s();
    },
    set showCloseButton(b = !0) {
      s(b), R();
    },
    get ui() {
      return a();
    },
    set ui(b = Dt) {
      a(b), R();
    },
    get config() {
      return o();
    },
    set config(b = Ae) {
      o(b), R();
    }
  }, v = Qd(), y = Y(v), _ = Y(y), h = Z(_, 2), x = Y(h, !0);
  G(h), G(y);
  var M = Z(y, 2);
  {
    var m = (b) => {
      var E = Yd();
      E.__click = g, D(b, E);
    };
    ee(M, (b) => {
      s() && b(m);
    });
  }
  return G(v), he(() => {
    ci(_, 1, `status-dot ${f(u) ?? ""}`, "svelte-g5m62x"), Pr(_, `--status-color: ${f(l) ?? ""}`), ce(_, "aria-label", f(d)), ce(_, "title", f(d)), Ct(x, o().title);
  }), D(t, v), Xe(p);
}
$t(["click"]);
st(
  Fn,
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
let ar = null;
function Kd() {
  return ar || (ar = Promise.all([import("./assistant-widget-marked.esm-BBzvOr5D.js"), import("./assistant-widget-purify.es-BpFm6ZGf.js")]).then(([t, e]) => {
    const i = t.marked, r = e.default;
    return i.setOptions({
      breaks: !0,
      // Convert \n to <br>
      gfm: !0
      // GitHub Flavored Markdown (tables, strikethrough)
    }), r.addHook("afterSanitizeAttributes", (n) => {
      var s;
      if (n.tagName === "A") {
        if (!n.getAttribute("href")) {
          const o = document.createTextNode(n.textContent || "");
          (s = n.parentNode) == null || s.replaceChild(o, n);
          return;
        }
        n.setAttribute("target", "_blank"), n.setAttribute("rel", "noopener noreferrer");
      }
      if (n.tagName === "IMG") {
        const a = n.getAttribute("src");
        a && a.startsWith("data:") && (/^data:image\/(png|jpeg|jpg|gif|webp);base64,/i.test(a) || n.removeAttribute("src"));
      }
    }), { marked: i, DOMPurify: r };
  }).catch((t) => {
    throw ar = null, t;
  }), ar);
}
function Jd(t) {
  return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
async function Zd(t) {
  if (!t) return "";
  let e, i;
  try {
    ({ marked: e, DOMPurify: i } = await Kd());
  } catch {
    return Jd(t);
  }
  const r = await e.parse(t);
  return i.sanitize(r, {
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
var ec = /* @__PURE__ */ H('<div class="message-content markdown-body svelte-1uqoiy7"><!></div>'), tc = /* @__PURE__ */ H('<span class="message-content"> </span>'), ic = /* @__PURE__ */ H('<span class="sending-indicator svelte-1uqoiy7" aria-label="Sending message" role="status"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svelte-1uqoiy7"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="currentColor" opacity="0.3"></path><path d="M12 2C6.48 2 2 6.48 2 12H4C4 7.58 7.58 4 12 4V2Z" fill="currentColor"><animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite"></animateTransform></path></svg></span>'), rc = /* @__PURE__ */ H('<span class="failed-indicator svelte-1uqoiy7" aria-label="Message failed to send" role="alert"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svelte-1uqoiy7"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#ef4444"></path><path d="M11 7H13V13H11V7ZM11 15H13V17H11V15Z" fill="#ef4444"></path></svg></span>'), nc = /* @__PURE__ */ H('<div role="listitem"><div class="message-bubble svelte-1uqoiy7"><!> <!> <!></div> <div class="message-time svelte-1uqoiy7"> </div></div>');
const sc = {
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
function to(t, e) {
  Qe(e, !0), nt(t, sc);
  let i = q(e, "message", 7);
  function r(m) {
    return new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", hour12: !0 }).format(m);
  }
  const n = /* @__PURE__ */ te(() => i().role === "user");
  let s = /* @__PURE__ */ P(null);
  qt(() => {
    const m = i().role, b = i().content;
    if (m !== "assistant") {
      A(s, null);
      return;
    }
    let E = !1;
    return Zd(b).then((L) => {
      E || A(s, L, !0);
    }).catch(() => {
      E || A(s, null);
    }), () => {
      E = !0;
    };
  });
  var a = {
    get message() {
      return i();
    },
    set message(m) {
      i(m), R();
    }
  }, o = nc();
  let l;
  var d = Y(o), u = Y(d);
  {
    var g = (m) => {
      var b = ec(), E = Y(b);
      {
        var L = ($) => {
          var S = er(), C = Ye(S);
          Bl(C, () => f(s)), D($, S);
        }, N = ($) => {
          var S = $l();
          he(() => Ct(S, i().content)), D($, S);
        };
        ee(E, ($) => {
          f(s) ? $(L) : $(N, !1);
        });
      }
      G(b), D(m, b);
    }, p = (m) => {
      var b = tc(), E = Y(b, !0);
      G(b), he(() => Ct(E, i().content)), D(m, b);
    };
    ee(u, (m) => {
      i().role === "assistant" ? m(g) : m(p, !1);
    });
  }
  var v = Z(u, 2);
  {
    var y = (m) => {
      var b = ic();
      D(m, b);
    };
    ee(v, (m) => {
      i().status === "sending" && m(y);
    });
  }
  var _ = Z(v, 2);
  {
    var h = (m) => {
      var b = rc();
      D(m, b);
    };
    ee(_, (m) => {
      i().status === "failed" && m(h);
    });
  }
  G(d);
  var x = Z(d, 2), M = Y(x, !0);
  return G(x), G(o), he(
    (m, b) => {
      l = ci(o, 1, "message svelte-1uqoiy7", null, l, { user: f(n), assistant: !f(n) }), ce(o, "aria-label", f(n) ? "Your message" : "Assistant message"), ce(x, "aria-label", m), Ct(M, b);
    },
    [
      () => `Sent at ${r(i().timestamp)}`,
      () => r(i().timestamp)
    ]
  ), D(t, o), Xe(a);
}
st(to, { message: {} }, [], [], !0);
var ac = /* @__PURE__ */ H('<div class="typing-indicator svelte-ej4x60" role="status" aria-live="polite" aria-label="Assistant is typing"><span aria-hidden="true" class="svelte-ej4x60"></span> <span aria-hidden="true" class="svelte-ej4x60"></span> <span aria-hidden="true" class="svelte-ej4x60"></span> <span class="sr-only svelte-ej4x60">Assistant is typing a response</span></div>');
const oc = {
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

  /* Dark theme adjustments - Use CSS variables for maintainability */[data-theme="dark"] .typing-indicator.svelte-ej4x60 {background:var(--widget-surface);border-color:var(--widget-border);}[data-theme="dark"] .typing-indicator.svelte-ej4x60 span:where(.svelte-ej4x60) {background:var(--widget-accent-warm); /* Warm highlight (gold by default, derived from accent when set) */}`
};
function io(t, e) {
  Qe(e, !0), nt(t, oc);
  let i = q(e, "chat", 7, pt);
  var r = {
    get chat() {
      return i();
    },
    set chat(o = pt) {
      i(o), R();
    }
  }, n = er(), s = Ye(n);
  {
    var a = (o) => {
      var l = ac();
      D(o, l);
    };
    ee(s, (o) => {
      i().isTyping && o(a);
    });
  }
  return D(t, n), Xe(r);
}
st(io, { chat: {} }, [], [], !0);
var lc = /* @__PURE__ */ H('<p class="initial-message svelte-qha2j"> </p>'), dc = /* @__PURE__ */ H('<div class="empty-state svelte-qha2j" role="status" aria-label="botbrewers.ca assistant ready"><div class="branding-phase svelte-qha2j" aria-hidden="true"><div class="empty-icon svelte-qha2j"><img alt="" class="brand-logo svelte-qha2j" width="68" height="68"/></div> <span class="brand-name svelte-qha2j">botbrewers.ca</span></div> <!> <!></div>'), cc = /* @__PURE__ */ H('<div class="messages-container svelte-qha2j" role="list" aria-label="Messages"><!> <!></div>'), uc = /* @__PURE__ */ H('<div class="error-message svelte-qha2j"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-qha2j"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#ef4444" class="svelte-qha2j"></path><path d="M11 7H13V13H11V7ZM11 15H13V17H11V15Z" fill="#ef4444" class="svelte-qha2j"></path></svg> <p class="svelte-qha2j"> </p></div>'), gc = /* @__PURE__ */ H('<div class="message-list svelte-qha2j" role="log" aria-live="polite" aria-label="Chat conversation"><!> <!></div>');
const hc = {
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
function Bn(t, e) {
  Qe(e, !0), nt(t, hc);
  let i = q(e, "onsend", 7), r = q(e, "connectionState", 23, () => ae.DISCONNECTED), n = q(e, "chat", 7, pt), s = q(e, "config", 7, Ae), a, o = !0;
  const l = /* @__PURE__ */ te(() => n().messages.length > 0), d = /* @__PURE__ */ te(() => r() !== ae.CONNECTED);
  qt(() => {
    n().messages, o && f(l) && u();
  }), qt(() => {
    n().isTyping, o && f(l) && u();
  }), qt(() => {
    n().streamingUpdateSignal, o && n().isStreaming && u();
  });
  async function u() {
    await ya(), a && (a.scrollTop = a.scrollHeight);
  }
  function g() {
    if (a) {
      const { scrollTop: m, scrollHeight: b, clientHeight: E } = a;
      o = b - m - E < 100;
    }
  }
  sn(() => {
    f(l) && u();
  });
  var p = {
    get onsend() {
      return i();
    },
    set onsend(m) {
      i(m), R();
    },
    get connectionState() {
      return r();
    },
    set connectionState(m = ae.DISCONNECTED) {
      r(m), R();
    },
    get chat() {
      return n();
    },
    set chat(m = pt) {
      n(m), R();
    },
    get config() {
      return s();
    },
    set config(m = Ae) {
      s(m), R();
    }
  }, v = gc(), y = Y(v);
  {
    var _ = (m) => {
      var b = dc(), E = Y(b), L = Y(E), N = Y(L);
      G(L), vr(2), G(E);
      var $ = Z(E, 2);
      {
        var S = (F) => {
          var j = lc(), X = Y(j, !0);
          G(j), he(() => Ct(X, s().initialMessage)), D(F, j);
        };
        ee($, (F) => {
          s().initialMessage && F(S);
        });
      }
      var C = Z($, 2);
      Hn(C, {
        get questions() {
          return s().quickQuestions;
        },
        get onsend() {
          return i();
        },
        get disabled() {
          return f(d);
        }
      }), G(b), he(() => ce(N, "src", xd)), D(m, b);
    }, h = (m) => {
      var b = cc(), E = Y(b);
      Tn(E, 17, () => n().messages, (N) => N.id, (N, $) => {
        to(N, {
          get message() {
            return f($);
          }
        });
      });
      var L = Z(E, 2);
      io(L, {
        get chat() {
          return n();
        }
      }), G(b), D(m, b);
    };
    ee(y, (m) => {
      n().messages.length === 0 ? m(_) : m(h, !1);
    });
  }
  var x = Z(y, 2);
  {
    var M = (m) => {
      var b = uc(), E = Z(Y(b), 2), L = Y(E, !0);
      G(E), G(b), he(() => Ct(L, n().error)), D(m, b);
    };
    ee(x, (m) => {
      n().error && m(M);
    });
  }
  return G(v), Ar(v, (m) => a = m, () => a), Sa("scroll", v, g), D(t, v), Xe(p);
}
st(Bn, { onsend: {}, connectionState: {}, chat: {}, config: {} }, [], [], !0);
class xs {
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
    const i = new e();
    i.lang = this.opts.lang ?? "en-US", i.continuous = this.opts.continuous ?? !1, i.interimResults = this.opts.interimResults ?? !1, i.addEventListener("result", (r) => {
      const n = r, s = n.results[n.resultIndex], o = s[0].transcript.slice(0, At.MAX_LENGTH), l = s.isFinal;
      this.opts.onResult(o, l);
    }), i.addEventListener("end", () => {
      this.state !== "error" && this.setState("idle");
    }), i.addEventListener("error", (r) => {
      const n = r;
      this.setState("error"), this.opts.onError(n.error ?? "unknown");
    }), i.start(), this.recognizer = i, this.setState("listening");
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
function fc(t) {
  switch (t) {
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
var pc = /* @__PURE__ */ H('<span role="alert" class="sr-only svelte-zcaleu"> </span>'), vc = /* @__PURE__ */ rn('<rect x="6" y="4" width="4" height="16" rx="2" fill="currentColor" class="svelte-zcaleu"></rect><rect x="14" y="4" width="4" height="16" rx="2" fill="currentColor" class="svelte-zcaleu"></rect>', 1), mc = /* @__PURE__ */ rn('<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" fill="currentColor" class="svelte-zcaleu"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="svelte-zcaleu"></path><line x1="12" y1="19" x2="12" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="svelte-zcaleu"></line><line x1="8" y1="23" x2="16" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="svelte-zcaleu"></line>', 1), wc = /* @__PURE__ */ H('<!> <button type="button"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svelte-zcaleu"><!></svg></button>', 1);
const bc = {
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
function ro(t, e) {
  Qe(e, !0), nt(t, bc);
  let i = q(e, "disabled", 7, !1), r = q(e, "lang", 7, "en-US"), n = q(e, "onTranscript", 7), s = /* @__PURE__ */ P("idle"), a = /* @__PURE__ */ P(null);
  const o = xs.isSupported();
  let l = !0, d = null;
  function u() {
    return d || (d = new xs({
      lang: r(),
      continuous: !1,
      interimResults: !1,
      onResult(m, b) {
        b && m.trim() && l && n()(m.trim());
      },
      onStateChange(m) {
        A(s, m, !0), m !== "error" && A(a, null);
      },
      onError(m) {
        A(s, "error"), A(a, fc(m), !0);
      }
    })), d;
  }
  function g() {
    i() || !o || (f(s) === "listening" ? u().stop() : (A(a, null), u().start()));
  }
  qt(() => () => {
    l = !1, d == null || d.abort(), d = null;
  });
  const p = /* @__PURE__ */ te(() => f(s) === "listening"), v = /* @__PURE__ */ te(() => f(s) === "error" ? `Voice input error: ${f(a) ?? "unknown"} — Start voice input` : f(p) ? "Stop listening" : "Start voice input"), y = /* @__PURE__ */ te(() => f(a) ?? (f(p) ? "Stop listening" : "Start voice input (audio processed by your browser's speech service)"));
  var _ = {
    get disabled() {
      return i();
    },
    set disabled(m = !1) {
      i(m), R();
    },
    get lang() {
      return r();
    },
    set lang(m = "en-US") {
      r(m), R();
    },
    get onTranscript() {
      return n();
    },
    set onTranscript(m) {
      n(m), R();
    }
  }, h = er(), x = Ye(h);
  {
    var M = (m) => {
      var b = wc(), E = Ye(b);
      {
        var L = (X) => {
          var ne = pc(), fe = Y(ne, !0);
          G(ne), he(() => Ct(fe, f(a))), D(X, ne);
        };
        ee(E, (X) => {
          f(a) && X(L);
        });
      }
      var N = Z(E, 2);
      let $;
      N.__click = g;
      var S = Y(N), C = Y(S);
      {
        var F = (X) => {
          var ne = vc();
          vr(), D(X, ne);
        }, j = (X) => {
          var ne = mc();
          vr(3), D(X, ne);
        };
        ee(C, (X) => {
          f(p) ? X(F) : X(j, !1);
        });
      }
      G(S), G(N), he(() => {
        $ = ci(N, 1, "voice-button svelte-zcaleu", null, $, {
          listening: f(p),
          error: f(s) === "error"
        }), N.disabled = i(), ce(N, "aria-label", f(v)), ce(N, "title", f(y)), ce(N, "aria-pressed", f(p));
      }), D(m, b);
    };
    ee(x, (m) => {
      o && m(M);
    });
  }
  return D(t, h), Xe(_);
}
$t(["click"]);
st(ro, { disabled: {}, lang: {}, onTranscript: {} }, [], [], !0);
var yc = /* @__PURE__ */ H('<div class="connection-status svelte-1a8gd73" role="status" aria-live="polite"><span class="connecting-text svelte-1a8gd73">Connecting...</span> <span class="connecting-dot svelte-1a8gd73"></span></div>'), xc = /* @__PURE__ */ H('<div class="brand-banner svelte-1a8gd73"><a href="https://botbrewers.ca" target="_blank" rel="noopener noreferrer" class="svelte-1a8gd73">botbrewers.ca<span class="sr-only svelte-1a8gd73">(opens in new tab)</span></a></div>'), _c = /* @__PURE__ */ H('<div class="input-bar svelte-1a8gd73"><!> <div class="input-container svelte-1a8gd73"><textarea class="input-field svelte-1a8gd73" rows="1" aria-label="Message input"></textarea> <!> <button class="send-button svelte-1a8gd73" aria-label="Send message"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-1a8gd73"><path d="M2 21L23 12L2 3V10L17 12L2 14V21Z" fill="currentColor" class="svelte-1a8gd73"></path></svg></button></div> <div class="ai-disclaimer svelte-1a8gd73">AI can make mistakes. Please double-check responses.</div></div>');
const kc = {
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

  /* Dark theme adjustments - Use CSS variables for maintainability */[data-theme="dark"] .input-container.svelte-1a8gd73 {background:var(--widget-background);border-color:var(--widget-border);}[data-theme="dark"] .input-container.svelte-1a8gd73:focus-within {border-color:var(--widget-accent-warm);box-shadow:var(--widget-shadow-inner),
                0 0 0 3px rgba(var(--widget-accent-warm-rgb), 0.2); /* Warm highlight (gold by default, derived from accent when set) */}

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
function Vn(t, e) {
  Qe(e, !0), nt(t, kc);
  let i = q(e, "onsend", 7), r = q(e, "disabled", 7, !1), n = q(e, "showBrandBanner", 7, !1), s = q(e, "connectionState", 23, () => ae.DISCONNECTED), a = q(e, "chat", 7, pt), o = q(e, "config", 7, Ae), l = q(e, "correlationService", 23, Ki), d = /* @__PURE__ */ P(""), u;
  function g() {
    var X;
    const C = l().generate(), F = f(d);
    B.log("InputBar", "handleSend() called", {
      correlationId: C,
      rawInputValue: F,
      rawLength: (F == null ? void 0 : F.length) || 0,
      rawType: typeof F,
      disabled: r(),
      isTyping: a().isTyping
    });
    const j = F.trim();
    B.log("InputBar", "After trimming", {
      correlationId: C,
      original: F,
      trimmed: j,
      originalLength: (F == null ? void 0 : F.length) || 0,
      trimmedLength: (j == null ? void 0 : j.length) || 0,
      wasEmptyAfterTrim: !j,
      hadWhitespaceOnly: ((F == null ? void 0 : F.length) || 0) > 0 && !j
    }), j && !r() && !a().isTyping && !a().isStreaming ? (B.log("InputBar", "Conditions met, calling onsend", {
      correlationId: C,
      trimmedValue: j,
      trimmedLength: j.length,
      willSend: !0
    }), l().setCurrent(C), (X = i()) == null || X(j), A(d, ""), v()) : B.log("InputBar", "Send blocked", {
      correlationId: C,
      hasContent: !!j,
      disabled: r(),
      isTyping: a().isTyping,
      trimmedValue: j || "(empty)",
      reason: j ? r() ? "disabled" : a().isTyping ? "typing in progress" : "unknown" : "empty content"
    });
  }
  function p(C) {
    C.key === "Enter" && !C.shiftKey && (C.preventDefault(), g());
  }
  function v() {
    u && (u.style.height = "auto", u.style.height = Math.min(u.scrollHeight, 120) + "px");
  }
  const y = /* @__PURE__ */ te(() => r() || a().isTyping || a().isStreaming || a().error !== null), _ = /* @__PURE__ */ te(() => a().isTyping ? "Waiting for response..." : a().error ? "Error occurred" : o().placeholder), h = /* @__PURE__ */ te(() => s() === ae.CONNECTING || s() === ae.DISCONNECTED);
  var x = {
    get onsend() {
      return i();
    },
    set onsend(C) {
      i(C), R();
    },
    get disabled() {
      return r();
    },
    set disabled(C = !1) {
      r(C), R();
    },
    get showBrandBanner() {
      return n();
    },
    set showBrandBanner(C = !1) {
      n(C), R();
    },
    get connectionState() {
      return s();
    },
    set connectionState(C = ae.DISCONNECTED) {
      s(C), R();
    },
    get chat() {
      return a();
    },
    set chat(C = pt) {
      a(C), R();
    },
    get config() {
      return o();
    },
    set config(C = Ae) {
      o(C), R();
    },
    get correlationService() {
      return l();
    },
    set correlationService(C = Ki()) {
      l(C), R();
    }
  }, M = _c(), m = Y(M);
  {
    var b = (C) => {
      var F = er(), j = Ye(F);
      {
        var X = (fe) => {
          var Ke = yc();
          D(fe, Ke);
        }, ne = (fe) => {
          var Ke = xc();
          D(fe, Ke);
        };
        ee(j, (fe) => {
          f(h) ? fe(X) : fe(ne, !1);
        });
      }
      D(C, F);
    };
    ee(m, (C) => {
      n() && C(b);
    });
  }
  var E = Z(m, 2), L = Y(E);
  Sl(L), L.__keydown = p, L.__input = v, Ar(L, (C) => u = C, () => u);
  var N = Z(L, 2);
  {
    var $ = (C) => {
      ro(C, {
        get disabled() {
          return f(y);
        },
        onTranscript: (F) => {
          A(d, F, !0), u == null || u.focus();
        }
      });
    };
    ee(N, (C) => {
      o().voiceInput && C($);
    });
  }
  var S = Z(N, 2);
  return S.__click = g, G(E), vr(2), G(M), he(
    (C) => {
      ce(L, "placeholder", f(_)), L.disabled = f(y), S.disabled = C;
    },
    [() => f(y) || !f(d).trim()]
  ), Ea(L, () => f(d), (C) => A(d, C)), D(t, M), Xe(x);
}
$t(["keydown", "input", "click"]);
st(
  Vn,
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
class no {
  /**
   * @param correlationService Per-instance CorrelationService for multi-widget isolation.
   *   Defaults to the module singleton. Omitting this parameter breaks state isolation
   *   when multiple widget instances exist on the same page.
   */
  constructor(e, i, r = Ki()) {
    this.sessionId = null, this.config = e, this.visitor = i, this.debugLogger = an(e.getAll()), this.correlationService = r;
  }
  /**
   * Initialize widget session with backend
   */
  async initialize() {
    try {
      const e = new AbortController(), i = setTimeout(() => e.abort(), ge.API_TIMEOUT), r = cr.getApiUrl("init", {
        clientId: this.config.clientId
      }), n = {
        client_id: this.config.clientId,
        visitor_id: this.visitor.getVisitorId(),
        page_url: window.location.href,
        referrer: document.referrer
      };
      this.config.debug && this.debugLogger.log("APIClient", "Initializing with", {
        endpoint: "init",
        fullUrl: r,
        payload: n
      });
      const s = this.correlationService.getCurrent(), a = await fetch(r, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: window.location.origin,
          "X-Correlation-ID": s
        },
        body: JSON.stringify({ body: n }),
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
          throw new mi(
            `Rate limit exceeded. Please try again in ${d} seconds.`,
            d
          );
        }
        throw new vi(
          `Failed to initialize widget: ${a.statusText}`,
          a.status,
          r
        );
      }
      const o = await a.json();
      return this.sessionId = o.session_id, this.visitor.saveSessionId(o.session_id), o;
    } catch (e) {
      if (e instanceof fr || e instanceof vi || e instanceof mi)
        throw e;
      const i = pr.handle(e, {
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
    var r, n;
    const i = this.correlationService.getCurrent();
    try {
      this.debugLogger.log("APIClient", "sendMessage() called", {
        correlationId: i,
        message: e,
        messageLength: (e == null ? void 0 : e.length) || 0,
        messageType: typeof e,
        sessionId: this.sessionId,
        clientId: this.config.clientId
      });
      const s = bd.validate(e, i);
      if (this.debugLogger.log("APIClient", "Message validation result", {
        correlationId: i,
        input: e,
        isValid: s.isValid,
        error: s.error,
        sanitizedValue: s.sanitizedValue,
        sanitizedLength: ((r = s.sanitizedValue) == null ? void 0 : r.length) || 0,
        contentChanged: e !== s.sanitizedValue
      }), !s.isValid)
        throw this.debugLogger.error("APIClient", "Validation failed", { correlationId: i, error: s.error }), new fr(s.error || "Validation failed", "message", e);
      this.sessionId || (this.debugLogger.log("APIClient", "No session ID, attempting to resume or initialize...", { correlationId: i }), await this.resumeSession() || await this.initialize());
      const a = new AbortController(), o = setTimeout(() => a.abort(), ge.API_TIMEOUT), l = {
        body: {
          client_id: this.config.clientId,
          visitor_id: this.visitor.getVisitorId(),
          session_id: this.sessionId,
          message: s.sanitizedValue
        }
      }, d = cr.getApiUrl("chat", {
        clientId: this.config.clientId
      });
      this.debugLogger.log("APIClient", "HTTP request payload", {
        correlationId: i,
        url: d,
        payload: l,
        messageContent: l.body.message,
        messageLength: ((n = l.body.message) == null ? void 0 : n.length) || 0
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
          const p = u.headers.get("Retry-After"), v = p ? parseInt(p, 10) : 60;
          throw new mi(
            `Rate limit exceeded. Please try again in ${v} seconds.`,
            v
          );
        }
        throw new vi(
          `Failed to send message: ${u.statusText}`,
          u.status,
          d
        );
      }
      const g = await u.json();
      return this.debugLogger.log("APIClient", "HTTP response data", { correlationId: i, result: g }), g;
    } catch (s) {
      if (this.debugLogger.error("APIClient", "sendMessage() error", { correlationId: i, error: s }), s instanceof fr || s instanceof vi || s instanceof mi)
        throw s;
      const a = pr.handle(s, {
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
      const e = new AbortController(), i = setTimeout(() => e.abort(), ge.API_TIMEOUT), r = cr.getApiUrl("sessionHealth", {
        clientId: this.config.clientId,
        sessionId: this.sessionId
      }), n = {
        client_id: this.config.clientId,
        visitor_id: this.visitor.getVisitorId()
      };
      this.config.debug && this.debugLogger.log("APIClient", "Validating session health", {
        sessionId: this.sessionId,
        fullUrl: r,
        payload: n
      });
      const s = this.correlationService.getCurrent(), a = await fetch(r, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: window.location.origin,
          "X-Correlation-ID": s
        },
        body: JSON.stringify({ body: n }),
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
      const e = new AbortController(), i = setTimeout(() => e.abort(), ge.API_TIMEOUT), r = cr.getApiUrl("sessionHealth", {
        clientId: this.config.clientId,
        sessionId: this.sessionId
      }), n = {
        client_id: this.config.clientId,
        visitor_id: this.visitor.getVisitorId()
      }, s = this.correlationService.getCurrent(), a = await fetch(r, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: window.location.origin,
          "X-Correlation-ID": s
        },
        body: JSON.stringify({ body: n }),
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
      const i = pr.handle(e, {
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
class so {
  constructor(e, i, r) {
    this.typingTimeout = null, this.hasHiddenTypingForCurrentStream = !1, this.lastCompletionTimestamp = null, this.lastMessageSentTimestamp = null, this.COMPLETION_GRACE_PERIOD_MS = ge.COMPLETION_GRACE_PERIOD, this.chatStore = e, this.uiStore = i, this.debugLogger = r;
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
      const r = this.chatStore.startStreamingMessage();
      this.chatStore.appendToStreamingMessage(i), this.debugLogger.log("ChatController", "Started streaming message", { messageId: r });
    }
    this.uiStore.isOpen || this.uiStore.markUnread();
  }
  handleAssistantComplete(e) {
    this.debugLogger.log("ChatController", "Assistant complete", {
      isStreaming: this.chatStore.isStreaming
    }), this.typingTimeout && (clearTimeout(this.typingTimeout), this.typingTimeout = null), this.chatStore.isStreaming && this.chatStore.finishStreamingMessage(), this.hasHiddenTypingForCurrentStream = !1, this.lastCompletionTimestamp = Date.now(), this.chatStore.setTyping(!1), this.uiStore.isOpen || this.uiStore.markUnread();
  }
  handleConnectionEstablished(e) {
    const i = e.data.initial_message;
    i && !this.chatStore.hasMessages && (Ae.setBackendInitialMessage(i), this.debugLogger.log("ChatController", "Initial message configured for empty state", {
      source: Ae.initialMessage === i ? "server" : "client-override"
    }));
  }
  handleTypingIndicator() {
    const e = this.lastCompletionTimestamp ? Date.now() - this.lastCompletionTimestamp : 1 / 0, i = this.lastMessageSentTimestamp ? Date.now() - this.lastMessageSentTimestamp : 1 / 0;
    if (e < this.COMPLETION_GRACE_PERIOD_MS && i > ge.CONNECTION_DELAY) {
      this.debugLogger.log("ChatController", "Ignoring typing indicator - grace period");
      return;
    }
    !this.hasHiddenTypingForCurrentStream && !this.chatStore.isStreaming ? (this.debugLogger.log("ChatController", "Processing typing indicator"), this.chatStore.setTyping(!0), this.typingTimeout && clearTimeout(this.typingTimeout), this.typingTimeout = window.setTimeout(() => {
      this.debugLogger.log("ChatController", "Typing indicator timeout"), this.chatStore.setTyping(!1), this.typingTimeout = null;
    }, ge.TYPING_INDICATOR_TIMEOUT)) : this.debugLogger.log("ChatController", "Ignoring typing indicator - already streaming");
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
  setTypingWithTimeout(e = ge.TYPING_FALLBACK_TIMEOUT) {
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
function Sc(t) {
  return t.startsWith("barToCorner");
}
const Cc = 600, Tc = 420;
async function Ec(t) {
  var i;
  if (t.layout !== "bar" || t.prefersReducedMotion() || t.isMobileViewport()) {
    t.setPhase("idle"), await t.openWindow();
    return;
  }
  if (t.setPhase("translating"), await new Promise((r) => {
    var o;
    let n = !1;
    const s = () => {
      n || (n = !0, t.setTranslateResolver(null), r());
    };
    t.setTranslateResolver({ resolve: s });
    const a = t.setTimer(s, Cc);
    (o = t.setSafetyTimer) == null || o.call(t, a);
  }), t.isAlive && !t.isAlive()) return;
  t.setPhase("expanding"), await t.openWindow();
  const e = t.setTimer(() => {
    t.getPhase() === "expanding" && t.setPhase("idle");
  }, Tc);
  (i = t.setSettleTimer) == null || i.call(t, e);
}
async function Ic(t, e) {
  const i = t.trim();
  if (!i || e.isSubmitting() || e.getPhase() !== "idle") return !1;
  e.setSubmitting(!0);
  try {
    e.markEngaged();
    const r = e.echo(i);
    return await e.openWithTransition(), await e.transmit(i, r), !0;
  } finally {
    e.setSubmitting(!1);
  }
}
async function Ac(t) {
  var n, s;
  const { content: e, messageId: i } = t;
  let r = !1;
  try {
    if (t.canUseWebSocket())
      try {
        t.wsSend(e), t.updateMessageStatus(i, "sent"), r = !0;
      } catch (a) {
        (n = t.onError) == null || n.call(t, "WebSocket send error", a), t.updateMessageStatus(i, "failed"), t.setError("Failed to send message. Please try again.");
      }
    else
      try {
        const a = await t.httpSend(e);
        t.addAssistantMessage(a.response), t.updateMessageStatus(i, "sent"), t.isOpen() || t.markUnread();
      } catch (a) {
        (s = t.onError) == null || s.call(t, "HTTP API error", a), t.setError("Failed to send message. Please try again."), t.updateMessageStatus(i, "failed");
      }
  } finally {
    r || t.setTyping(!1);
  }
}
var Mc = /* @__PURE__ */ H('<span class="error-message svelte-zsv8oa" id="error-message">Connection lost. Unable to reconnect.</span> <button class="restart-button svelte-zsv8oa" aria-describedby="error-message">Retry Connection</button>', 1), Lc = /* @__PURE__ */ H('<span class="error-message svelte-zsv8oa" id="error-message">Something went wrong. Please try again.</span> <button class="restart-button svelte-zsv8oa" aria-describedby="error-message">Try Again</button>', 1), Oc = /* @__PURE__ */ H('<div class="error-banner svelte-zsv8oa" role="alert" aria-live="polite"><!></div>'), Rc = /* @__PURE__ */ H('<button class="backdrop svelte-zsv8oa" aria-label="Close chat overlay" tabindex="-1"></button>'), Nc = /* @__PURE__ */ H('<div role="status" aria-live="polite" class="sr-only svelte-zsv8oa">Chat assistant opened</div> <div role="dialog" aria-label="Chat assistant" aria-modal="true" tabindex="-1"><!> <!> <!> <!></div> <!>', 1), qc = /* @__PURE__ */ H('<div class="widget-container svelte-zsv8oa"><!> <!></div>');
const Dc = {
  hash: "svelte-zsv8oa",
  code: `.sr-only.svelte-zsv8oa {position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0;}.widget-container.svelte-zsv8oa {position:fixed;bottom:var(--widget-space-lg);z-index:var(--widget-z-base);font-family:var(--widget-font-family);}.widget-container[data-position="bottom-right"].svelte-zsv8oa {right:var(--widget-space-lg);}.widget-container[data-position="bottom-left"].svelte-zsv8oa {left:var(--widget-space-lg);}.chat-container.svelte-zsv8oa {
    /* Mobile-first: Full-screen takeover */position:fixed;top:0;left:0;width:100%;
    /* Dynamic viewport height - adjusts when mobile keyboard appears */height:100vh;  /* Fallback for older browsers */height:100dvh; /* Modern browsers: updates with keyboard */background:var(--widget-background);border-radius:0;box-shadow:none;border:none;display:flex;flex-direction:column;overflow:hidden;z-index:var(--widget-z-modal);}.backdrop.svelte-zsv8oa {display:block;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0, 0, 0, 0.5);z-index:calc(var(--widget-z-modal) - 1);}

  /*
   * Bar-mode Transition A, Phase 2 (desktop): the window UNFOLDS UPWARD out of
   * the resting bar's footprint. The bar (same 400px width, right-aligned, fully
   * opaque) is replaced in a single render flush by the window, which starts
   * clipped to just its bottom strip (~bar height) at full width and opacity,
   * then reveals upward. Because the bottom strip already fills the bar's spot,
   * there is no "disappears then pops" — the window grows out of the pill. The
   * \`round\` keeps the window's corner radius through the reveal. Mobile is a
   * full-screen takeover — no upward unfold.
   */
  @media (min-width: 768px) {.chat-container.bar-expanding.svelte-zsv8oa {
      animation: svelte-zsv8oa-barExpandUp 420ms cubic-bezier(0.33, 1, 0.68, 1);}

    @keyframes svelte-zsv8oa-barExpandUp {
      from {
        clip-path: inset(calc(100% - 52px) 0 0 0 round var(--widget-radius-xl));
      }
      to {
        clip-path: inset(0 0 0 0 round var(--widget-radius-xl));
      }
    }
  }

  @media (prefers-reduced-motion: reduce) {.chat-container.bar-expanding.svelte-zsv8oa {
      animation: none !important;}
  }.error-banner.svelte-zsv8oa {position:absolute;bottom:75px;left:50%;transform:translateX(-50%);background:var(--widget-background);padding:var(--widget-space-md) var(--widget-space-lg);border-radius:var(--widget-radius-lg);box-shadow:var(--widget-shadow-lg);border:1px solid var(--widget-error);z-index:10;
    /* Stack text above button */display:flex;flex-direction:column;align-items:center;justify-content:center;gap:var(--widget-space-sm);
    /* Prevent overflow on mobile */max-width:calc(100% - 2 * var(--widget-space-lg));width:max-content;min-width:200px;box-sizing:border-box;}

  /* Mobile: ensure banner fits */
  @media (max-width: 480px) {.error-banner.svelte-zsv8oa {max-width:calc(100% - 2 * var(--widget-space-md));padding:var(--widget-space) var(--widget-space-md);min-width:160px;}
  }.error-message.svelte-zsv8oa {color:var(--widget-error);font-size:var(--widget-font-size-sm);text-align:center;line-height:1.4;word-break:break-word;overflow-wrap:break-word;}.restart-button.svelte-zsv8oa {background:var(--widget-primary);color:var(--widget-text-inverse);border:none;padding:var(--widget-space) var(--widget-space-lg);border-radius:var(--widget-radius-md);font-size:var(--widget-font-size-sm);font-weight:600;cursor:pointer;transition:all var(--widget-transition);font-family:var(--widget-font-family);width:100%;}.restart-button.svelte-zsv8oa:hover {background:var(--widget-primary-hover);}.restart-button.svelte-zsv8oa:active {background:var(--widget-primary-dark);}.restart-button.svelte-zsv8oa:focus-visible {outline:2px solid var(--widget-primary);outline-offset:2px;}

  /* Desktop: Floating widget (≥768px) */
  @media (min-width: 768px) {.chat-container.svelte-zsv8oa {
      /* Floating widget mode */position:absolute;top:auto;left:auto;
      /* MUST resolve to the SAME computed width as the resting bar
         (RestingBar.svelte reads --widget-bar-width too) so the bar→window
         morph stays aligned. The co-clamp keeps an over-wide token value from
         pushing the window off-screen. */width:min(var(--widget-bar-width, 400px), calc(100vw - 2 * var(--widget-space-lg)));height:600px;max-height:80vh;min-height:450px;bottom:20px;border-radius:var(--widget-radius-xl);box-shadow:var(--widget-shadow-lg);border:1px solid var(--widget-border);}.widget-container[data-position="bottom-right"].svelte-zsv8oa .chat-container:where(.svelte-zsv8oa) {right:0;transform-origin:bottom right;}.widget-container[data-position="bottom-left"].svelte-zsv8oa .chat-container:where(.svelte-zsv8oa) {left:0;transform-origin:bottom left;}.backdrop.svelte-zsv8oa {display:none;}
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
function ao(t, e) {
  Qe(e, !0), nt(t, Dc);
  let i = q(e, "hostElement", 7), r = q(e, "ui", 7, Dt), n = q(e, "chat", 7, pt), s = q(e, "config", 7, Ae), a = q(e, "layout", 7, "bubble"), o = q(e, "restChips", 7, "visible"), l = q(e, "attentionGlow", 7, "off"), d, u, g, p, v, y;
  const _ = $a();
  let h = !1, x = !1, M = null, m = /* @__PURE__ */ P(le(ae.DISCONNECTED)), b = /* @__PURE__ */ P(
    !1
    // Track if max reconnection attempts exhausted
  ), E = /* @__PURE__ */ P("idle"), L = !1, N = null, $ = null, S = !1;
  function C() {
    return typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
  function F() {
    return typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(max-width: 767px)").matches;
  }
  let j = /* @__PURE__ */ P(null), X = null, ne = /* @__PURE__ */ P(null), fe = /* @__PURE__ */ P(!1);
  function Ke() {
    var O;
    if ((O = i()) != null && O.hasAttribute("data-theme")) return;
    window.matchMedia("(prefers-color-scheme: dark)").matches && i() && i().setAttribute("data-theme", "dark");
  }
  function Ut(w) {
    const O = [
      "button:not([disabled])",
      "textarea:not([disabled])",
      "input:not([disabled])",
      '[tabindex]:not([tabindex="-1"])',
      "a[href]"
    ].join(", "), J = w.querySelectorAll(O);
    if (J.length === 0) return;
    const Oe = J[0], Ue = J[J.length - 1];
    return requestAnimationFrame(() => Oe.focus()), { firstFocusable: Oe, lastFocusable: Ue };
  }
  function ui(w) {
    if (w.key === "Escape" && r().isOpen) {
      w.preventDefault(), se();
      return;
    }
    if (w.key === "Tab" && f(j)) {
      const O = [
        "button:not([disabled])",
        "textarea:not([disabled])",
        "input:not([disabled])",
        '[tabindex]:not([tabindex="-1"])',
        "a[href]"
      ].join(", "), J = f(j).querySelectorAll(O);
      if (J.length === 0) return;
      const Oe = J[0], Ue = J[J.length - 1];
      w.shiftKey && document.activeElement === Oe ? (w.preventDefault(), Ue.focus()) : !w.shiftKey && document.activeElement === Ue && (w.preventDefault(), Oe.focus());
    }
  }
  function Me() {
    X = document.activeElement;
  }
  function k() {
    X && typeof X.focus == "function" && requestAnimationFrame(() => X == null ? void 0 : X.focus()), X = null;
  }
  function K() {
    a() === "bar" && r().hasEngaged ? (X = null, A(fe, !0)) : k();
  }
  qt(() => {
    f(fe) && f(ne) && (f(ne).focus(), A(fe, !1));
  });
  function se() {
    r().close(), K();
  }
  function jt() {
    f(j) && Ut(f(j));
  }
  sn(async () => {
    try {
      d = new Ja(i()), y = an(d.getAll()), u = new Br(), g = new no(d, u, _), p = new eo(d, u, _), v = new so(n(), r(), y), i() && s().loadFromAttributes(i()), Et(), Ke(), y.log("ChatWidget", "Attaching WebSocket listeners"), p.on("message", tr), p.on("stateChange", (O) => {
        y.log("ChatWidget", "WebSocket state changed", {
          oldState: f(m),
          newState: O,
          timestamp: Date.now()
        }), A(m, O, !0);
      }), p.on("error", (O) => {
        y.error("ChatWidget", "WebSocket error event", O), M = O.error, n().setError(O.error);
      }), p.on("connectionFailed", (O) => {
        y.error("ChatWidget", "WebSocket connection failed after max attempts", O), A(b, !0), M = O.error, n().setError(O.error);
      }), y.log("ChatWidget", "WebSocket listeners attached successfully"), r().isOpen && await Le();
      const w = i();
      w != null && w.setOnOpenChangeCallback && w.setOnOpenChangeCallback((O) => {
        on(O);
      }), y.log("ChatWidget", "Services initialized successfully");
    } catch (w) {
      y.error("ChatWidget", "Initialization failed", w), M = w instanceof Error ? w.message : "Failed to initialize chat";
    }
  }), qt(() => {
    const w = r().isOpen;
    if (i()) {
      const O = i().hasAttribute("open");
      w && !O ? i().setAttribute("open", "") : !w && O && i().removeAttribute("open");
    }
  }), Aa(() => {
    S = !0;
    const w = g == null ? void 0 : g.getSessionId();
    w && u.markSessionInactive(w), N !== null && clearTimeout(N), $ !== null && clearTimeout($), N = null, $ = null, ir = null, p == null || p.disconnect(), v == null || v.cleanup();
  });
  async function Le() {
    var w;
    if (!(h || x)) {
      x = !0;
      try {
        if (r().setLoading(!0), await g.resumeSession()) {
          const J = g.getSessionId();
          J && (await p.connect(J), setTimeout(
            () => {
              y.log("ChatWidget", "Testing WebSocket connection after session resumption..."), p.testConnection();
            },
            ge.CONNECTION_DELAY
          ));
        } else {
          const J = await g.initialize();
          (w = J.assistant_info) != null && w.assistant_name && s().setBackendTitle(J.assistant_info.assistant_name), await p.connect(J.session_id), setTimeout(
            () => {
              y.log("ChatWidget", "Testing WebSocket connection after initialization..."), p.testConnection();
            },
            ge.CONNECTION_DELAY
          ), J.settings && Wt(J.settings);
        }
        h = !0;
      } catch (O) {
        M = O instanceof Error ? O.message : "Failed to initialize", n().setError(M);
      } finally {
        r().setLoading(!1), x = !1;
      }
    }
  }
  function Et() {
    const w = d.getAll();
    requestAnimationFrame(() => {
      if (i() && (i().setAttribute("data-theme", w.theme || "modern"), w.primary_color || w.accent_color)) {
        const O = w.accent_color || w.primary_color;
        O && yr(i(), O);
      }
    });
  }
  function Wt(w) {
    requestAnimationFrame(() => {
      i() && (w.theme && typeof w.theme == "string" && i().setAttribute("data-theme", w.theme), w.primary_color && typeof w.primary_color == "string" && yr(i(), w.primary_color));
    });
  }
  function tr(w) {
    v.handleMessage(w);
  }
  function Qn(w) {
    const O = n().addMessage(w, "user");
    return v.resetForNewMessage(), v.setTypingWithTimeout(), y.log("ChatWidget", "User message echoed to store", {
      messageId: O.id,
      length: O.content.length
    }), O;
  }
  async function Xn(w, O) {
    const J = _.getCurrent();
    let Oe = !1;
    try {
      h || await Le();
      const Ue = Za(f(m));
      y.log("ChatWidget", "Routing message", {
        correlationId: J,
        connectionState: f(m),
        routingTo: Ue ? "WebSocket" : "HTTP API"
      }), Oe = !0, await Ac({
        content: w,
        messageId: O.id,
        canUseWebSocket: () => Ue,
        wsSend: (ie) => p.send(ie),
        httpSend: (ie) => g.sendMessage(ie),
        addAssistantMessage: (ie) => n().addMessage(ie, "assistant"),
        updateMessageStatus: (ie, at) => n().updateMessageStatus(ie, at),
        setTyping: (ie) => n().setTyping(ie),
        setError: (ie) => {
          M = ie, n().setError(ie);
        },
        isOpen: () => r().isOpen,
        markUnread: () => r().markUnread(),
        onError: (ie, at) => y.error("ChatWidget", ie, at)
      });
    } finally {
      Oe || n().setTyping(!1);
    }
  }
  async function Kn(w) {
    const O = Qn(w);
    await Xn(w, O);
  }
  async function on(w) {
    const O = r().isOpen;
    O !== w && (y.log("ChatWidget", "Setting open state", { from: O, to: w }), w && !O && !X && Me(), w ? r().open() : r().close(), await new Promise((J) => setTimeout(J, 0)), w && !h && s() && await Le(), w ? requestAnimationFrame(() => jt()) : K());
  }
  async function ho() {
    await on(!r().isOpen);
  }
  let ir = null;
  function fo(w) {
    Sc(w.animationName) && (ir == null || ir.resolve());
  }
  async function po() {
    await Ec({
      layout: a(),
      setPhase: (w) => {
        A(E, w, !0);
      },
      openWindow: () => on(!0),
      prefersReducedMotion: C,
      isMobileViewport: F,
      setTranslateResolver: (w) => {
        ir = w;
      },
      setTimer: (w, O) => setTimeout(w, O),
      getPhase: () => f(E),
      setSafetyTimer: (w) => {
        N = w;
      },
      setSettleTimer: (w) => {
        $ = w;
      },
      isAlive: () => !S
    });
  }
  async function Jn(w) {
    await Ic(w, {
      isSubmitting: () => L,
      setSubmitting: (O) => {
        L = O;
      },
      getPhase: () => f(E),
      markEngaged: () => r().markEngaged(),
      openWithTransition: po,
      // Echo the message + typing BEFORE the open so the window unfolds already
      // populated; transmit (init+connect+send) runs after the transition.
      echo: Qn,
      transmit: Xn
    });
  }
  function vo() {
    n().clearMessages(), n().setError(null), M = null;
  }
  function mo() {
    y.log("ChatWidget", "Manual retry connection requested"), A(b, !1), M = null, n().setError(null), p == null || p.retryConnection();
  }
  const ln = /* @__PURE__ */ te(() => r().isOpen), wo = /* @__PURE__ */ te(() => r().isLoading), Zn = /* @__PURE__ */ te(() => {
    var w;
    return ((w = s()) == null ? void 0 : w.position) || "bottom-right";
  }), bo = /* @__PURE__ */ te(() => r().hasEngaged), yo = /* @__PURE__ */ te(() => a() === "bar" && (!f(bo) || f(E) === "translating"));
  var xo = {
    get hostElement() {
      return i();
    },
    set hostElement(w) {
      i(w), R();
    },
    get ui() {
      return r();
    },
    set ui(w = Dt) {
      r(w), R();
    },
    get chat() {
      return n();
    },
    set chat(w = pt) {
      n(w), R();
    },
    get config() {
      return s();
    },
    set config(w = Ae) {
      s(w), R();
    },
    get layout() {
      return a();
    },
    set layout(w = "bubble") {
      a(w), R();
    },
    get restChips() {
      return o();
    },
    set restChips(w = "visible") {
      o(w), R();
    },
    get attentionGlow() {
      return l();
    },
    set attentionGlow(w = "off") {
      l(w), R();
    }
  }, rr = qc(), es = Y(rr);
  {
    var _o = (w) => {
      var O = er(), J = Ye(O);
      {
        var Oe = (ie) => {
          {
            let at = /* @__PURE__ */ te(() => f(E) === "translating");
            Va(ie, {
              get config() {
                return s();
              },
              get position() {
                return f(Zn);
              },
              get restChips() {
                return o();
              },
              get attentionGlow() {
                return l();
              },
              get translating() {
                return f(at);
              },
              onsubmit: Jn,
              onchip: Jn,
              onanimationend: fo
            });
          }
        }, Ue = (ie) => {
          Fa(ie, {
            onclick: ho,
            get ui() {
              return r();
            },
            get buttonRef() {
              return f(ne);
            },
            set buttonRef(at) {
              A(ne, at, !0);
            }
          });
        };
        ee(J, (ie) => {
          f(yo) ? ie(Oe) : ie(Ue, !1);
        });
      }
      D(w, O);
    };
    ee(es, (w) => {
      f(ln) || w(_o);
    });
  }
  var ko = Z(es, 2);
  {
    var So = (w) => {
      var O = Nc(), J = Z(Ye(O), 2);
      let Oe;
      J.__keydown = ui;
      var Ue = Y(J);
      Fn(Ue, {
        onclose: se,
        get connectionState() {
          return f(m);
        },
        get connectionFailed() {
          return f(b);
        },
        get ui() {
          return r();
        },
        get config() {
          return s();
        }
      });
      var ie = Z(Ue, 2);
      Bn(ie, {
        onsend: Kn,
        get connectionState() {
          return f(m);
        },
        get chat() {
          return n();
        },
        get config() {
          return s();
        }
      });
      var at = Z(ie, 2);
      {
        let Je = /* @__PURE__ */ te(() => n().error !== null || f(wo)), wt = /* @__PURE__ */ te(() => n().messages.length === 0);
        Vn(at, {
          onsend: Kn,
          get disabled() {
            return f(Je);
          },
          get showBrandBanner() {
            return f(wt);
          },
          get connectionState() {
            return f(m);
          },
          get chat() {
            return n();
          },
          get config() {
            return s();
          },
          get correlationService() {
            return _;
          }
        });
      }
      var Co = Z(at, 2);
      {
        var To = (Je) => {
          var wt = Oc(), Ao = Y(wt);
          {
            var Mo = (gi) => {
              var nr = Mc(), dn = Z(Ye(nr), 2);
              dn.__click = mo, D(gi, nr);
            }, Lo = (gi) => {
              var nr = Lc(), dn = Z(Ye(nr), 2);
              dn.__click = vo, D(gi, nr);
            };
            ee(Ao, (gi) => {
              f(b) ? gi(Mo) : gi(Lo, !1);
            });
          }
          G(wt), D(Je, wt);
        };
        ee(Co, (Je) => {
          n().error && Je(To);
        });
      }
      G(J), Ar(J, (Je) => A(j, Je), () => f(j));
      var Eo = Z(J, 2);
      {
        var Io = (Je) => {
          var wt = Rc();
          wt.__click = se, gs(3, wt, () => cd, () => ({ duration: 200 })), D(Je, wt);
        };
        ee(Eo, (Je) => {
          f(ln) && Je(Io);
        });
      }
      he(() => Oe = ci(J, 1, "chat-container svelte-zsv8oa", null, Oe, { "bar-expanding": a() === "bar" })), gs(3, J, () => ud, () => ({
        y: a() === "bar" ? 0 : 20,
        duration: a() === "bar" ? 0 : 300
      })), D(w, O);
    };
    ee(ko, (w) => {
      f(ln) && w(So);
    });
  }
  return G(rr), he(() => {
    ce(rr, "data-position", f(Zn)), ce(rr, "data-theme", s().theme);
  }), D(t, rr), Xe(xo);
}
$t(["keydown", "click"]);
st(
  ao,
  {
    hostElement: {},
    ui: {},
    chat: {},
    config: {},
    layout: {},
    restChips: {},
    attentionGlow: {}
  },
  [],
  [],
  !0
);
function Pc(t) {
  return typeof t == "string" && t.trim().toLowerCase() === "brand" ? "brand" : "off";
}
var zc = /* @__PURE__ */ H('<span class="error-message svelte-12a99c7" id="error-message">Connection lost. Unable to reconnect.</span> <button class="restart-button svelte-12a99c7" aria-describedby="error-message">Retry Connection</button>', 1), $c = /* @__PURE__ */ H('<span class="error-message svelte-12a99c7" id="error-message">Something went wrong. Please try again.</span> <button class="restart-button svelte-12a99c7" aria-describedby="error-message">Try Again</button>', 1), Uc = /* @__PURE__ */ H('<div class="error-banner svelte-12a99c7" role="alert" aria-live="polite"><!></div>'), jc = /* @__PURE__ */ H('<div class="chat-page svelte-12a99c7" role="region" aria-label="Chat assistant"><!> <!> <!> <!></div>');
const Wc = {
  hash: "svelte-12a99c7",
  code: `.chat-page.svelte-12a99c7 {width:100%;height:100%;display:flex;flex-direction:column;overflow:hidden;background:var(--widget-background);border-radius:0;border:none;min-height:400px;}.error-banner.svelte-12a99c7 {position:sticky;bottom:var(--widget-space-md);left:50%;transform:translateX(-50%);background:var(--widget-background);padding:var(--widget-space-md) var(--widget-space-lg);border-radius:var(--widget-radius-lg);box-shadow:var(--widget-shadow-lg);border:1px solid var(--widget-error);z-index:10;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:var(--widget-space-sm);max-width:calc(100% - 2 * var(--widget-space-lg));width:max-content;min-width:200px;box-sizing:border-box;}

  @media (max-width: 480px) {.error-banner.svelte-12a99c7 {max-width:calc(100% - 2 * var(--widget-space-md));padding:var(--widget-space) var(--widget-space-md);min-width:160px;}
  }.error-message.svelte-12a99c7 {color:var(--widget-error);font-size:var(--widget-font-size-sm);text-align:center;line-height:1.4;word-break:break-word;overflow-wrap:break-word;}.restart-button.svelte-12a99c7 {background:var(--widget-primary);color:var(--widget-text-inverse);border:none;padding:var(--widget-space) var(--widget-space-lg);border-radius:var(--widget-radius-md);font-size:var(--widget-font-size-sm);font-weight:600;cursor:pointer;transition:all var(--widget-transition);font-family:var(--widget-font-family);width:100%;}.restart-button.svelte-12a99c7:hover {background:var(--widget-primary-hover);}.restart-button.svelte-12a99c7:active {background:var(--widget-primary-dark);}.restart-button.svelte-12a99c7:focus-visible {outline:2px solid var(--widget-primary);outline-offset:2px;}

  /* Dark theme adjustments */[data-theme="dark"] .chat-page.svelte-12a99c7 {background:var(--widget-background);border-color:var(--widget-border);}[data-theme="dark"] .error-banner.svelte-12a99c7 {background:var(--widget-surface);border-color:var(--widget-error);}`
};
function oo(t, e) {
  Qe(e, !0), nt(t, Wc);
  let i = q(e, "hostElement", 7), r = q(e, "ui", 7, Dt), n = q(e, "chat", 7, pt), s = q(e, "config", 7, Ae), a, o, l, d, u, g;
  const p = $a();
  let v = !1, y = !1, _ = null, h = /* @__PURE__ */ P(le(ae.DISCONNECTED)), x = /* @__PURE__ */ P(!1), M = /* @__PURE__ */ P(null);
  const m = (k) => {
    const K = k.detail;
    K != null && K.text && typeof K.text == "string" && S(K.text);
  };
  function b() {
    var K;
    if ((K = i()) != null && K.hasAttribute("data-theme")) return;
    window.matchMedia("(prefers-color-scheme: dark)").matches && i() && i().setAttribute("data-theme", "dark");
  }
  sn(async () => {
    try {
      r().open(), a = new Ja(i()), g = an(a.getAll()), o = new Br(), l = new no(a, o, p), d = new eo(a, o, p), u = new so(n(), r(), g), i() && s().loadFromAttributes(i()), L(), b(), g.log("ChatPage", "Attaching WebSocket listeners"), d.on("message", $), d.on("stateChange", (k) => {
        g.log("ChatPage", "WebSocket state changed", {
          oldState: f(h),
          newState: k,
          timestamp: Date.now()
        }), A(h, k, !0);
      }), d.on("error", (k) => {
        g.error("ChatPage", "WebSocket error event", k), _ = k.error, n().setError(k.error);
      }), d.on("connectionFailed", (k) => {
        g.error("ChatPage", "WebSocket connection failed after max attempts", k), A(x, !0), _ = k.error, n().setError(k.error);
      }), g.log("ChatPage", "WebSocket listeners attached successfully"), i() && i().addEventListener("send-message", m), await E(), g.log("ChatPage", "Services initialized successfully");
    } catch (k) {
      g.error("ChatPage", "Initialization failed", k), _ = k instanceof Error ? k.message : "Failed to initialize chat";
    }
  }), Aa(() => {
    i() && i().removeEventListener("send-message", m);
    const k = l == null ? void 0 : l.getSessionId();
    k && o.markSessionInactive(k), d == null || d.disconnect(), u == null || u.cleanup();
  });
  async function E() {
    var k;
    if (!(v || y)) {
      y = !0;
      try {
        if (r().setLoading(!0), await l.resumeSession()) {
          const se = l.getSessionId();
          se && (await d.connect(se), setTimeout(
            () => {
              g.log("ChatPage", "Testing WebSocket connection after session resumption..."), d.testConnection();
            },
            ge.CONNECTION_DELAY
          ));
        } else {
          const se = await l.initialize();
          (k = se.assistant_info) != null && k.assistant_name && s().setBackendTitle(se.assistant_info.assistant_name), await d.connect(se.session_id), setTimeout(
            () => {
              g.log("ChatPage", "Testing WebSocket connection after initialization..."), d.testConnection();
            },
            ge.CONNECTION_DELAY
          ), se.settings && N(se.settings);
        }
        v = !0;
      } catch (K) {
        _ = K instanceof Error ? K.message : "Failed to initialize", n().setError(_);
      } finally {
        r().setLoading(!1), y = !1;
      }
    }
  }
  function L() {
    const k = a.getAll();
    requestAnimationFrame(() => {
      if (i() && (i().setAttribute("data-theme", k.theme || "modern"), k.primary_color || k.accent_color)) {
        const K = k.accent_color || k.primary_color;
        K && yr(i(), K);
      }
    });
  }
  function N(k) {
    requestAnimationFrame(() => {
      i() && (k.theme && typeof k.theme == "string" && i().setAttribute("data-theme", k.theme), k.primary_color && typeof k.primary_color == "string" && yr(i(), k.primary_color));
    });
  }
  function $(k) {
    u.handleMessage(k);
  }
  async function S(k) {
    const K = p.getCurrent();
    g.log("ChatPage", "handleSendMessage called with content", {
      correlationId: K,
      content: k,
      length: (k == null ? void 0 : k.length) || 0,
      trimmed: (k == null ? void 0 : k.trim()) || "",
      type: typeof k
    });
    const se = n().addMessage(k, "user");
    u.resetForNewMessage(), g.log("ChatPage", "Message added to store", {
      correlationId: K,
      messageId: se.id,
      content: se.content,
      length: se.content.length
    }), v || (g.log("ChatPage", "Widget not initialized, initializing...", { correlationId: K }), await E());
    const jt = Za(f(h));
    if (g.log("ChatPage", "Connection state", {
      correlationId: K,
      connectionState: f(h),
      canUseWebSocket: jt,
      routingTo: jt ? "WebSocket" : "HTTP API"
    }), jt) {
      g.log("ChatPage", "Sending via WebSocket", { correlationId: K, content: k });
      try {
        u.setTypingWithTimeout(), d.send(k), n().updateMessageStatus(se.id, "sent"), g.log("ChatPage", "User message marked as sent", { messageId: se.id });
      } catch (Le) {
        g.error("ChatPage", "WebSocket send error", Le), n().updateMessageStatus(se.id, "failed"), n().setError("Failed to send message. Please try again."), n().setTyping(!1);
        return;
      }
    } else
      try {
        g.log("ChatPage", "Sending via HTTP API", { correlationId: K, content: k }), u.setTypingWithTimeout();
        const Le = await l.sendMessage(k);
        g.log("ChatPage", "HTTP API response received", {
          correlationId: K,
          response: Le.response,
          sessionId: Le.session_id
        }), n().addMessage(Le.response, "assistant"), n().setTyping(!1);
      } catch (Le) {
        g.error("ChatPage", "HTTP API error", Le), _ = "Failed to send message. Please try again.", n().setError(_), n().updateMessageStatus(se.id, "failed"), n().setTyping(!1);
      }
  }
  function C() {
    n().clearMessages(), n().setError(null), _ = null;
  }
  function F() {
    g.log("ChatPage", "Manual retry connection requested"), A(x, !1), _ = null, n().setError(null), d == null || d.retryConnection();
  }
  const j = /* @__PURE__ */ te(() => r().isLoading);
  var X = {
    get hostElement() {
      return i();
    },
    set hostElement(k) {
      i(k), R();
    },
    get ui() {
      return r();
    },
    set ui(k = Dt) {
      r(k), R();
    },
    get chat() {
      return n();
    },
    set chat(k = pt) {
      n(k), R();
    },
    get config() {
      return s();
    },
    set config(k = Ae) {
      s(k), R();
    }
  }, ne = jc(), fe = Y(ne);
  Fn(fe, {
    get connectionState() {
      return f(h);
    },
    get connectionFailed() {
      return f(x);
    },
    showCloseButton: !1,
    get ui() {
      return r();
    },
    get config() {
      return s();
    }
  });
  var Ke = Z(fe, 2);
  Bn(Ke, {
    onsend: S,
    get connectionState() {
      return f(h);
    },
    get chat() {
      return n();
    },
    get config() {
      return s();
    }
  });
  var Ut = Z(Ke, 2);
  {
    let k = /* @__PURE__ */ te(() => n().error !== null || f(j)), K = /* @__PURE__ */ te(() => n().messages.length === 0);
    Vn(Ut, {
      onsend: S,
      get disabled() {
        return f(k);
      },
      get showBrandBanner() {
        return f(K);
      },
      get connectionState() {
        return f(h);
      },
      get chat() {
        return n();
      },
      get config() {
        return s();
      },
      get correlationService() {
        return p;
      }
    });
  }
  var ui = Z(Ut, 2);
  {
    var Me = (k) => {
      var K = Uc(), se = Y(K);
      {
        var jt = (Et) => {
          var Wt = zc(), tr = Z(Ye(Wt), 2);
          tr.__click = F, D(Et, Wt);
        }, Le = (Et) => {
          var Wt = $c(), tr = Z(Ye(Wt), 2);
          tr.__click = C, D(Et, Wt);
        };
        ee(se, (Et) => {
          f(x) ? Et(jt) : Et(Le, !1);
        });
      }
      G(K), D(k, K);
    };
    ee(ui, (k) => {
      n().error && k(Me);
    });
  }
  return G(ne), Ar(ne, (k) => A(M, k), () => f(M)), D(t, ne), Xe(X);
}
$t(["click"]);
st(oo, { hostElement: {}, ui: {}, chat: {}, config: {} }, [], [], !0);
const Gn = {
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
}, Mn = {
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
function Hc(t = Gn) {
  return `/* ============================================
   Premium Design System - ${t.brand === "bot-brewers" ? "Bot Brewers Brand" : "Generic"}
   ============================================ */

:host {
  
  --widget-primary: ${t.primary};
  --widget-primary-hover: ${t.primaryHover};
  --widget-primary-light: ${t.primaryLight};
  --widget-primary-dark: ${t.primaryDark};
  
  
  --widget-gradient: linear-gradient(135deg, ${t.primary} 0%, ${t.primaryDark} 100%);
  --widget-gradient-hover: linear-gradient(135deg, ${t.primaryDark} 0%, ${t.primary} 100%);
  --widget-gradient-subtle: linear-gradient(135deg, ${t.primary}1a 0%, ${t.primaryDark}0d 100%);
  
  
  --widget-background: ${t.background};
  --widget-surface: ${t.surface};
  --widget-surface-hover: ${t.surfaceHover};
  --widget-surface-elevated: ${t.surfaceElevated || t.background};
  --widget-glass: ${t.glass};
  --widget-glass-dark: ${t.glassDark};
  --widget-glass-subtle: ${t.glass};
  
  
  --widget-text: ${t.text};
  --widget-text-secondary: ${t.textSecondary};
  --widget-text-muted: ${t.textMuted};
  --widget-text-subtle: ${t.textSubtle || t.textMuted};
  --widget-text-inverse: ${t.textInverse};
  
  
  --widget-success: #10b981;
  --widget-success-light: #34d399;
  --widget-error: #ef4444;
  --widget-error-light: #f87171;
  --widget-warning: #f59e0b;
  --widget-info: #3b82f6;

  
  --widget-accent: #f4a932;
  --widget-accent-light: #fbbf24;
  --widget-accent-dark: #d97706;
  --widget-accent-warm: #d4a574;   
  --widget-accent-warm-rgb: 212, 165, 116;  
  --widget-accent-rgb: 244, 169, 50;  

  --widget-glow-color: var(--widget-accent);
  --widget-glow-duration: 5s;
  --widget-glow-width: 3px;

  
  --widget-border: ${t.border || (t.isDark ? "#334155" : "#e2e8f0")};
  --widget-border-light: ${t.borderLight || (t.isDark ? "#475569" : "#f1f5f9")};
  --widget-border-subtle: ${t.borderSubtle || (t.isDark ? "#1e293b" : "#f8fafc")};
  --widget-border-focus: var(--widget-primary);
  
  
  --widget-primary-rgb: ${In(t.primary) || "30, 91, 168"};

  
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

  
  --widget-shadow-glow: 0 0 0 1px rgba(var(--widget-primary-rgb), 0.08), 0 4px 12px rgba(var(--widget-primary-rgb), 0.12);
  --widget-shadow-glow-lg: 0 0 0 1px rgba(var(--widget-primary-rgb), 0.10), 0 8px 24px rgba(var(--widget-primary-rgb), 0.18);
  --widget-shadow-bar: 0 8px 32px rgba(0, 0, 0, 0.12);  

  
  --widget-space-xs: 0.25rem;
  --widget-space-sm: 0.5rem;
  --widget-space: 0.75rem;
  --widget-space-md: 1rem;
  --widget-space-lg: 1.5rem;
  --widget-space-xl: 2rem;
  --widget-space-2xl: 3rem;
  --widget-space-3xl: 4rem;

  
  --widget-width-mobile: 100%;
  --widget-height-mobile: 100%;
  --widget-width-desktop: 400px;
  
  --widget-bar-width: 400px;
  --widget-bar-rest-opacity: 0.85;
  --widget-height-desktop: 600px;
  --widget-height-desktop-lg: 650px;
  --widget-max-height-desktop: 80vh;
  --widget-max-height-desktop-lg: 85vh;
  --widget-min-height-desktop: 450px;

  
  --widget-touch-target-min: 44px;
  
  
  --widget-radius-sm: 0.375rem;
  --widget-radius: 0.5rem;
  --widget-radius-md: 0.75rem;
  --widget-radius-lg: 1rem;
  --widget-radius-xl: 1.5rem;
  --widget-radius-2xl: 2rem;
  --widget-radius-full: 9999px;
  
  
  --widget-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'SF Pro Display', 'Inter', sans-serif;
  --widget-font-size-xs: 0.75rem;
  --widget-font-size-sm: 0.875rem;
  --widget-font-size-base: 0.9375rem;
  --widget-font-size-md: 1rem;
  --widget-font-size-lg: 1.125rem;
  --widget-font-size-xl: 1.25rem;
  --widget-font-size-2xl: 1.5rem;
  --widget-font-size-3xl: 1.875rem;
  
  
  --widget-font-weight-light: 300;
  --widget-font-weight-normal: 400;
  --widget-font-weight-medium: 500;
  --widget-font-weight-semibold: 600;
  --widget-font-weight-bold: 700;
  
  
  --widget-line-height-none: 1;
  --widget-line-height-tight: 1.25;
  --widget-line-height-snug: 1.375;
  --widget-line-height-normal: 1.5;
  --widget-line-height-relaxed: 1.625;
  --widget-line-height-loose: 2;
  
  
  --widget-letter-spacing-tighter: -0.05em;
  --widget-letter-spacing-tight: -0.025em;
  --widget-letter-spacing-normal: 0em;
  --widget-letter-spacing-wide: 0.025em;
  
  
  --widget-z-dropdown: 1000;
  --widget-z-sticky: 1020;
  --widget-z-fixed: 1030;
  --widget-z-modal-backdrop: 1040;
  --widget-z-modal: 1050;
  --widget-z-popover: 1060;
  --widget-z-tooltip: 1070;
  --widget-z-base: 1060;
  
  
  --widget-blur-sm: 8px;
  --widget-blur: 12px;
  --widget-blur-md: 16px;
  --widget-blur-lg: 24px;
  --widget-blur-xl: 32px;

  
  --widget-logo-filter: ${t.isDark ? "brightness(1.1)" : "brightness(1)"};

  
  --widget-glass-border: 1px solid rgba(255, 255, 255, 0.18);
  --widget-glass-border-dark: 1px solid rgba(255, 255, 255, 0.08);
  --widget-glass-highlight: inset 0 1px 0 rgba(255, 255, 255, 0.1);

  
  --widget-transition-fast: 0.15s ease;
  --widget-transition: 0.2s ease;
  --widget-transition-slow: 0.3s ease;

  
  --widget-ease-spring: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --widget-ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --widget-ease-in-out-expo: cubic-bezier(0.87, 0, 0.13, 1);
}


.widget-glow-ring{position:absolute;pointer-events:none;z-index:0;overflow:visible}
.widget-glow-ring rect{fill:none;stroke:var(--widget-glow-color);stroke-width:var(--widget-glow-width);stroke-linecap:round;vector-effect:non-scaling-stroke;stroke-dasharray:14 86;filter:drop-shadow(0 0 4px var(--widget-glow-color));animation:widget-glow-trace var(--widget-glow-duration) ease-in-out infinite}

@keyframes widget-glow-trace{0%{stroke-dashoffset:136;opacity:0}10%{opacity:1}38%{opacity:1}44%{stroke-dashoffset:36;opacity:0}100%{stroke-dashoffset:36;opacity:0}}
@media (prefers-reduced-motion:reduce){.widget-glow-ring rect{animation:none;stroke-dasharray:none;opacity:.55}}


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


@keyframes buttonPress {
  0% { transform: scale(1); }
  50% { transform: scale(0.97); }
  100% { transform: scale(1); }
}


@keyframes floatPulse {
  0%, 100% {
    box-shadow: var(--widget-shadow-lg);
  }
  50% {
    box-shadow: var(--widget-shadow-glow-lg);
  }
}


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


.widget-animate-in {
  animation: messageFadeIn 0.25s var(--widget-ease-out-expo) forwards;
}

.widget-animate-pulse {
  animation: typingPulse 1.2s ease-in-out infinite;
}


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




@media (prefers-reduced-motion: reduce) {
  .widget-glass-morphism,
  .widget-glass-morphism-subtle {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
}


@supports not (backdrop-filter: blur(1px)) {
  .widget-glass-morphism {
    background: var(--widget-glass-dark);
  }

  .widget-glass-morphism-subtle {
    background: rgba(255, 255, 255, 0.92);
  }
}`;
}
function Fc(t = Gn) {
  return Hc(t);
}
const lo = {
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
}, _s = lo, ks = {
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
}, Bc = {
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
}, Vc = {
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
}, Gc = {
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
}, Yc = {
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
function Qc(t) {
  return {
    "bot-brewers": Mn,
    modern: lo,
    professional: _s,
    corporate: _s,
    // Alias for backward compatibility
    friendly: ks,
    playful: ks,
    // Alias
    minimal: Bc,
    dark: Vc,
    elegant: Gc,
    bold: Yc,
    generic: Gn,
    default: Mn
  }[t.toLowerCase()] || null;
}
function Xc(t) {
  const e = Qc(t) || Mn;
  return Fc(e);
}
function Yn(t, e) {
  const i = t.getAttribute("theme") || t.getAttribute("data-theme") || e;
  return Xc(i);
}
function co(t, e, i) {
  const r = t.querySelector('style[data-role="theme"]');
  r && (r.textContent = Yn(e, i));
}
function uo(t, e, i) {
  const r = t.querySelector(`.${e}`);
  yr(r, i);
}
function go(t, e) {
  const i = t.querySelector(`.${e}`);
  vd(i);
}
class Ss extends HTMLElement {
  constructor() {
    super(), this._app = null, this._currentTheme = "bot-brewers", this._onOpenChangeCallback = null, this._pendingOpenState = null, this._shadowRoot = this.attachShadow({ mode: "open" }), this._uiStore = La(), this._chatStore = Ra(), this._configStore = Wa();
  }
  // Define which attributes we should observe for changes
  static get observedAttributes() {
    return ["theme", "data-theme", "accent-color", "position", "title", "client-id", "initial-message", "quick-questions", "open", "voice-input", "layout", "rest-chips", "attention-glow"];
  }
  async connectedCallback() {
    var n, s;
    const e = this.getAttribute("client-id"), i = window, r = ((n = i.AIChat) == null ? void 0 : n.clientId) || ((s = i.ChatWidget) == null ? void 0 : s.clientId);
    if (!e && !r) {
      B.error("ChatWidget", 'Configuration missing. Please set client-id attribute or window.AIChat = { clientId: "your_client_id" }');
      return;
    }
    this.mountApp();
  }
  disconnectedCallback() {
    this._app && (wi(this._app), this._app = null);
  }
  attributeChangedCallback(e, i, r) {
    if (i !== r) {
      if ((e === "theme" || e === "data-theme") && r && (this._currentTheme = r, this._configStore.updateConfig({ theme: r }, "user"), co(this._shadowRoot, this, this._currentTheme)), e === "accent-color" && (r ? uo(this._shadowRoot, "widget-root", r) : go(this._shadowRoot, "widget-root")), e === "client-id" && r && this._app && (B.log("ChatWidget", `Client ID changed from ${i} to ${r}, remounting widget`), wi(this._app), this._app = null, this.mountApp()), e === "layout" && this._app && (B.log("ChatWidget", `Layout changed from ${i} to ${r}, remounting widget`), wi(this._app), this._app = null, this.mountApp()), e === "title" && r && this._configStore.setUserTitle(r), e === "initial-message" && this._configStore.updateConfig({ initialMessage: r || void 0 }, "user"), e === "quick-questions")
        if (r)
          try {
            const n = JSON.parse(r);
            Array.isArray(n) ? this._configStore.setQuickQuestions(Wn.validate(n, "ChatWidget")) : B.warn("ChatWidget", "quick-questions must be an array, using defaults");
          } catch {
            B.warn("ChatWidget", "Invalid quick-questions JSON, using defaults");
          }
        else
          this._configStore.setQuickQuestions(void 0);
      if (e === "open") {
        const n = r !== null;
        this._onOpenChangeCallback ? this._onOpenChangeCallback(n) : this._pendingOpenState = n;
      }
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
    const r = document.createElement("style");
    r.setAttribute("data-role", "theme"), r.textContent = Yn(this, this._currentTheme), this._shadowRoot.innerHTML = "", this._shadowRoot.appendChild(r), this._shadowRoot.appendChild(i);
    const n = this.getAttribute("layout"), s = n === "bar" ? "bar" : "bubble";
    n && n !== "bar" && n !== "bubble" && B.log("ChatWidget", `Unknown layout "${n}", falling back to bubble`);
    const a = Ba(this.getAttribute("rest-chips")), o = Pc(this.getAttribute("attention-glow"));
    this._app = nn(ao, {
      target: i,
      props: {
        hostElement: this,
        ui: this._uiStore,
        chat: this._chatStore,
        config: this._configStore,
        layout: s,
        restChips: a,
        attentionGlow: o
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
class Kc extends HTMLElement {
  constructor() {
    super(), this._app = null, this._currentTheme = "bot-brewers", this._shadowRoot = this.attachShadow({ mode: "open" }), this._uiStore = La(), this._chatStore = Ra(), this._configStore = Wa();
  }
  // Observed attributes (no 'open' or 'position' — always visible, no floating button)
  static get observedAttributes() {
    return ["theme", "data-theme", "accent-color", "title", "client-id", "initial-message", "quick-questions"];
  }
  async connectedCallback() {
    var n, s;
    const e = this.getAttribute("client-id"), i = window, r = ((n = i.AIChat) == null ? void 0 : n.clientId) || ((s = i.ChatWidget) == null ? void 0 : s.clientId);
    if (!e && !r) {
      B.error("ChatPage", 'Configuration missing. Please set client-id attribute or window.AIChat = { clientId: "your_client_id" }');
      return;
    }
    this.mountApp();
  }
  disconnectedCallback() {
    this._app && (wi(this._app), this._app = null);
  }
  attributeChangedCallback(e, i, r) {
    if (i !== r && ((e === "theme" || e === "data-theme") && r && (this._currentTheme = r, this._configStore.updateConfig({ theme: r }, "user"), co(this._shadowRoot, this, this._currentTheme)), e === "accent-color" && (r ? uo(this._shadowRoot, "chat-page-root", r) : go(this._shadowRoot, "chat-page-root")), e === "client-id" && r && this._app && (B.log("ChatPage", `Client ID changed from ${i} to ${r}, remounting`), wi(this._app), this._app = null, this.mountApp()), e === "title" && r && this._configStore.setUserTitle(r), e === "initial-message" && this._configStore.updateConfig({ initialMessage: r || void 0 }, "user"), e === "quick-questions"))
      if (r)
        try {
          const n = JSON.parse(r);
          Array.isArray(n) ? this._configStore.setQuickQuestions(Wn.validate(n, "ChatPage")) : B.warn("ChatPage", "quick-questions must be an array, using defaults");
        } catch {
          B.warn("ChatPage", "Invalid quick-questions JSON, using defaults");
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
    const i = document.createElement("div");
    i.className = "chat-page-root", i.style.cssText = "width: 100%; height: 100%;";
    const r = document.createElement("style");
    r.setAttribute("data-role", "theme"), r.textContent = Yn(this, this._currentTheme);
    const n = document.createElement("style");
    n.textContent = ":host { display: block; width: 100%; height: 100%; box-sizing: border-box; }", this._shadowRoot.innerHTML = "", this._shadowRoot.appendChild(r), this._shadowRoot.appendChild(n), this._shadowRoot.appendChild(i), this._app = nn(oo, {
      target: i,
      props: {
        hostElement: this,
        ui: this._uiStore,
        chat: this._chatStore,
        config: this._configStore
      }
    });
  }
}
customElements.get("assistant-widget") ? customElements.get("chat-widget") || customElements.define("chat-widget", Ss) : customElements.define("assistant-widget", Ss);
customElements.get("assistant-chat-page") || customElements.define("assistant-chat-page", Kc);
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", Cs) : Cs();
function Cs() {
  if (document.querySelector("assistant-widget, chat-widget"))
    return;
  const t = window, e = t.AIChat || t.ChatWidget;
  if (e != null && e.clientId) {
    if (e.autoInit === !1) {
      B.log("ChatWidget", "Auto-initialization disabled");
      return;
    }
    const i = document.createElement("assistant-widget");
    document.body.appendChild(i), B.log("ChatWidget", "Auto-initialized with client ID", e.clientId);
  }
}
export {
  Kc as AssistantChatPage,
  Ss as ChatWidgetElement
};
