var Ea = Object.defineProperty;
var mr = (t) => {
  throw TypeError(t);
};
var Ca = (t, e, i) => e in t ? Ea(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i;
var G = (t, e, i) => Ca(t, typeof e != "symbol" ? e + "" : e, i), Ms = (t, e, i) => e.has(t) || mr("Cannot " + i);
var c = (t, e, i) => (Ms(t, e, "read from private field"), i ? i.call(t) : e.get(t)), I = (t, e, i) => e.has(t) ? mr("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), y = (t, e, i, s) => (Ms(t, e, "write to private field"), s ? s.call(t, i) : e.set(t, i), i), z = (t, e, i) => (Ms(t, e, "access private method"), i);
var jr = Array.isArray, xa = Array.prototype.indexOf, vs = Array.from, as = Object.keys, os = Object.defineProperty, Mt = Object.getOwnPropertyDescriptor, Yr = Object.getOwnPropertyDescriptors, ka = Object.prototype, Sa = Array.prototype, Zs = Object.getPrototypeOf, wr = Object.isExtensible;
function Ma(t) {
  return typeof t == "function";
}
const Oi = () => {
};
function Ta(t) {
  return t();
}
function Rs(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function Fr() {
  var t, e, i = new Promise((s, r) => {
    t = s, e = r;
  });
  return { promise: i, resolve: t, reject: e };
}
const _ = 2, _s = 4, ms = 8, Oa = 1 << 24, Je = 16, it = 32, ht = 64, ws = 128, Be = 512, ie = 1024, me = 2048, We = 4096, ve = 8192, et = 16384, Ki = 32768, Qt = 65536, br = 1 << 17, Wr = 1 << 18, Nt = 1 << 19, qr = 1 << 20, ot = 1 << 25, Lt = 32768, Bs = 1 << 21, $s = 1 << 22, lt = 1 << 23, Tt = Symbol("$state"), Kr = Symbol("legacy props"), Da = Symbol(""), Ft = new class extends Error {
  constructor() {
    super(...arguments);
    G(this, "name", "StaleReactionError");
    G(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}(), er = 3, Ci = 8;
function Jr(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Ra() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Ba(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Qa() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function La(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Pa() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function za() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Na(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Ua() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ha() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ga() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ja() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Ya = 1, Fa = 2, Wa = 16, qa = 1, Ka = 2, Ja = 4, Xa = 8, Va = 16, Za = 4, _a = 1, $a = 2, Xr = "[", bs = "[!", tr = "]", bi = {}, ee = Symbol(), eo = "http://www.w3.org/1999/xhtml";
function As(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function to() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let D = !1;
function $e(t) {
  D = t;
}
let k;
function we(t) {
  if (t === null)
    throw As(), bi;
  return k = t;
}
function ys() {
  return we(/* @__PURE__ */ Xe(k));
}
function W(t) {
  if (D) {
    if (/* @__PURE__ */ Xe(k) !== null)
      throw As(), bi;
    k = t;
  }
}
function Vr(t = 1) {
  if (D) {
    for (var e = t, i = k; e--; )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ Xe(i);
    k = i;
  }
}
function ls(t = !0) {
  for (var e = 0, i = k; ; ) {
    if (i.nodeType === Ci) {
      var s = (
        /** @type {Comment} */
        i.data
      );
      if (s === tr) {
        if (e === 0) return i;
        e -= 1;
      } else (s === Xr || s === bs) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Xe(i)
    );
    t && i.remove(), i = r;
  }
}
function Zr(t) {
  if (!t || t.nodeType !== Ci)
    throw As(), bi;
  return (
    /** @type {Comment} */
    t.data
  );
}
function _r(t) {
  return t === this.v;
}
function io(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function $r(t) {
  return !io(t, this.v);
}
let xi = !1;
function so() {
  xi = !0;
}
let U = null;
function Ai(t) {
  U = t;
}
function pt(t, e = !1, i) {
  U = {
    p: U,
    i: !1,
    c: null,
    e: null,
    s: t,
    x: null,
    l: xi && !e ? { s: null, u: null, $: [] } : null
  };
}
function vt(t) {
  var e = (
    /** @type {ComponentContext} */
    U
  ), i = e.e;
  if (i !== null) {
    e.e = null;
    for (var s of i)
      yn(s);
  }
  return t !== void 0 && (e.x = t), e.i = !0, U = e.p, t ?? /** @type {T} */
  {};
}
function Ji() {
  return !xi || U !== null && U.l === null;
}
let yt = [];
function en() {
  var t = yt;
  yt = [], Rs(t);
}
function ki(t) {
  if (yt.length === 0 && !Li) {
    var e = yt;
    queueMicrotask(() => {
      e === yt && en();
    });
  }
  yt.push(t);
}
function ro() {
  for (; yt.length > 0; )
    en();
}
function tn(t) {
  var e = R;
  if (e === null)
    return T.f |= lt, t;
  if (e.f & Ki)
    yi(t, e);
  else {
    if (!(e.f & ws))
      throw t;
    e.b.error(t);
  }
}
function yi(t, e) {
  for (; e !== null; ) {
    if (e.f & ws)
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
const _i = /* @__PURE__ */ new Set();
let x = null, ts = null, Y = null, Ce = [], Is = null, Qs = !1, Li = !1;
var Jt, Xt, It, Et, Yi, Vt, Zt, Z, Ls, Di, Ps, sn, rn;
const fs = class fs {
  constructor() {
    I(this, Z);
    G(this, "committed", !1);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    G(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    G(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    I(this, Jt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    I(this, Xt, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    I(this, It, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    I(this, Et, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    I(this, Yi, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    I(this, Vt, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    I(this, Zt, /* @__PURE__ */ new Set());
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    G(this, "skipped_effects", /* @__PURE__ */ new Set());
    G(this, "is_fork", !1);
  }
  is_deferred() {
    return this.is_fork || c(this, Et) > 0;
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var s;
    Ce = [], ts = null, this.apply();
    var i = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const r of e)
      z(this, Z, Ls).call(this, r, i);
    this.is_fork || z(this, Z, sn).call(this), this.is_deferred() ? (z(this, Z, Di).call(this, i.effects), z(this, Z, Di).call(this, i.render_effects)) : (ts = this, x = null, Ar(i.render_effects), Ar(i.effects), ts = null, (s = c(this, Yi)) == null || s.resolve()), Y = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, i) {
    this.previous.has(e) || this.previous.set(e, i), e.f & lt || (this.current.set(e, e.v), Y == null || Y.set(e, e.v));
  }
  activate() {
    x = this, this.apply();
  }
  deactivate() {
    x === this && (x = null, Y = null);
  }
  flush() {
    if (this.activate(), Ce.length > 0) {
      if (nn(), x !== null && x !== this)
        return;
    } else c(this, It) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const e of c(this, Xt)) e(this);
    c(this, Xt).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(e) {
    y(this, It, c(this, It) + 1), e && y(this, Et, c(this, Et) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(e) {
    y(this, It, c(this, It) - 1), e && y(this, Et, c(this, Et) - 1), this.revive();
  }
  revive() {
    for (const e of c(this, Vt))
      c(this, Zt).delete(e), se(e, me), Pt(e);
    for (const e of c(this, Zt))
      se(e, We), Pt(e);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(e) {
    c(this, Jt).add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(e) {
    c(this, Xt).add(e);
  }
  settled() {
    return (c(this, Yi) ?? y(this, Yi, Fr())).promise;
  }
  static ensure() {
    if (x === null) {
      const e = x = new fs();
      _i.add(x), Li || fs.enqueue(() => {
        x === e && e.flush();
      });
    }
    return x;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    ki(e);
  }
  apply() {
  }
};
Jt = new WeakMap(), Xt = new WeakMap(), It = new WeakMap(), Et = new WeakMap(), Yi = new WeakMap(), Vt = new WeakMap(), Zt = new WeakMap(), Z = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {EffectTarget} target
 */
Ls = function(e, i) {
  var g;
  e.f ^= ie;
  for (var s = e.first; s !== null; ) {
    var r = s.f, n = (r & (it | ht)) !== 0, a = n && (r & ie) !== 0, o = a || (r & ve) !== 0 || this.skipped_effects.has(s);
    if (s.f & ws && ((g = s.b) != null && g.is_pending()) && (i = {
      parent: i,
      effect: s,
      effects: [],
      render_effects: []
    }), !o && s.fn !== null) {
      n ? s.f ^= ie : r & _s ? i.effects.push(s) : Vi(s) && (s.f & Je && c(this, Vt).add(s), Gi(s));
      var l = s.first;
      if (l !== null) {
        s = l;
        continue;
      }
    }
    var d = s.parent;
    for (s = s.next; s === null && d !== null; )
      d === i.effect && (z(this, Z, Di).call(this, i.effects), z(this, Z, Di).call(this, i.render_effects), i = /** @type {EffectTarget} */
      i.parent), s = d.next, d = d.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
Di = function(e) {
  for (const i of e)
    i.f & me ? c(this, Vt).add(i) : i.f & We && c(this, Zt).add(i), z(this, Z, Ps).call(this, i.deps), se(i, ie);
}, /**
 * @param {Value[] | null} deps
 */
Ps = function(e) {
  if (e !== null)
    for (const i of e)
      !(i.f & _) || !(i.f & Lt) || (i.f ^= Lt, z(this, Z, Ps).call(
        this,
        /** @type {Derived} */
        i.deps
      ));
}, sn = function() {
  if (c(this, Et) === 0) {
    for (const e of c(this, Jt)) e();
    c(this, Jt).clear();
  }
  c(this, It) === 0 && z(this, Z, rn).call(this);
}, rn = function() {
  var n;
  if (_i.size > 1) {
    this.previous.clear();
    var e = Y, i = !0, s = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const a of _i) {
      if (a === this) {
        i = !1;
        continue;
      }
      const o = [];
      for (const [d, g] of this.current) {
        if (a.current.has(d))
          if (i && g !== a.current.get(d))
            a.current.set(d, g);
          else
            continue;
        o.push(d);
      }
      if (o.length === 0)
        continue;
      const l = [...a.current.keys()].filter((d) => !this.current.has(d));
      if (l.length > 0) {
        var r = Ce;
        Ce = [];
        const d = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Map();
        for (const h of o)
          an(h, l, d, g);
        if (Ce.length > 0) {
          x = a, a.apply();
          for (const h of Ce)
            z(n = a, Z, Ls).call(n, h, s);
          a.deactivate();
        }
        Ce = r;
      }
    }
    x = null, Y = e;
  }
  this.committed = !0, _i.delete(this);
};
let Ge = fs;
function Fe(t) {
  var e = Li;
  Li = !0;
  try {
    for (var i; ; ) {
      if (ro(), Ce.length === 0 && (x == null || x.flush(), Ce.length === 0))
        return Is = null, /** @type {T} */
        i;
      nn();
    }
  } finally {
    Li = e;
  }
}
function nn() {
  var t = Rt;
  Qs = !0;
  var e = null;
  try {
    var i = 0;
    for (cs(!0); Ce.length > 0; ) {
      var s = Ge.ensure();
      if (i++ > 1e3) {
        var r, n;
        no();
      }
      s.process(Ce), dt.clear();
    }
  } finally {
    Qs = !1, cs(t), Is = null;
  }
}
function no() {
  try {
    Pa();
  } catch (t) {
    yi(t, Is);
  }
}
let Te = null;
function Ar(t) {
  var e = t.length;
  if (e !== 0) {
    for (var i = 0; i < e; ) {
      var s = t[i++];
      if (!(s.f & (et | ve)) && Vi(s) && (Te = /* @__PURE__ */ new Set(), Gi(s), s.deps === null && s.first === null && s.nodes === null && (s.teardown === null && s.ac === null ? Cn(s) : s.fn = null), (Te == null ? void 0 : Te.size) > 0)) {
        dt.clear();
        for (const r of Te) {
          if (r.f & (et | ve)) continue;
          const n = [r];
          let a = r.parent;
          for (; a !== null; )
            Te.has(a) && (Te.delete(a), n.push(a)), a = a.parent;
          for (let o = n.length - 1; o >= 0; o--) {
            const l = n[o];
            l.f & (et | ve) || Gi(l);
          }
        }
        Te.clear();
      }
    }
    Te = null;
  }
}
function an(t, e, i, s) {
  if (!i.has(t) && (i.add(t), t.reactions !== null))
    for (const r of t.reactions) {
      const n = r.f;
      n & _ ? an(
        /** @type {Derived} */
        r,
        e,
        i,
        s
      ) : n & ($s | Je) && !(n & me) && on(r, e, s) && (se(r, me), Pt(
        /** @type {Effect} */
        r
      ));
    }
}
function on(t, e, i) {
  const s = i.get(t);
  if (s !== void 0) return s;
  if (t.deps !== null)
    for (const r of t.deps) {
      if (e.includes(r))
        return !0;
      if (r.f & _ && on(
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
function Pt(t) {
  for (var e = Is = t; e.parent !== null; ) {
    e = e.parent;
    var i = e.f;
    if (Qs && e === R && i & Je && !(i & Wr))
      return;
    if (i & (ht | it)) {
      if (!(i & ie)) return;
      e.f ^= ie;
    }
  }
  Ce.push(e);
}
function ao(t) {
  let e = 0, i = zt(0), s;
  return () => {
    Ui() && (m(i), Es(() => (e === 0 && (s = mt(() => t(() => Pi(i)))), e += 1, () => {
      ki(() => {
        e -= 1, e === 0 && (s == null || s(), s = void 0, Pi(i));
      });
    })));
  };
}
var oo = Qt | Nt | ws;
function lo(t, e, i) {
  new co(t, e, i);
}
var ye, he, Fi, ze, Ct, Ne, Ie, ce, Ue, Ve, rt, xt, nt, kt, at, hs, F, ln, dn, zs, is, ss, Ns;
class co {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, i, s) {
    I(this, F);
    /** @type {Boundary | null} */
    G(this, "parent");
    I(this, ye, !1);
    /** @type {TemplateNode} */
    I(this, he);
    /** @type {TemplateNode | null} */
    I(this, Fi, D ? k : null);
    /** @type {BoundaryProps} */
    I(this, ze);
    /** @type {((anchor: Node) => void)} */
    I(this, Ct);
    /** @type {Effect} */
    I(this, Ne);
    /** @type {Effect | null} */
    I(this, Ie, null);
    /** @type {Effect | null} */
    I(this, ce, null);
    /** @type {Effect | null} */
    I(this, Ue, null);
    /** @type {DocumentFragment | null} */
    I(this, Ve, null);
    /** @type {TemplateNode | null} */
    I(this, rt, null);
    I(this, xt, 0);
    I(this, nt, 0);
    I(this, kt, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    I(this, at, null);
    I(this, hs, ao(() => (y(this, at, zt(c(this, xt))), () => {
      y(this, at, null);
    })));
    y(this, he, e), y(this, ze, i), y(this, Ct, s), this.parent = /** @type {Effect} */
    R.b, y(this, ye, !!c(this, ze).pending), y(this, Ne, ar(() => {
      if (R.b = this, D) {
        const n = c(this, Fi);
        ys(), /** @type {Comment} */
        n.nodeType === Ci && /** @type {Comment} */
        n.data === bs ? z(this, F, dn).call(this) : z(this, F, ln).call(this);
      } else {
        var r = z(this, F, zs).call(this);
        try {
          y(this, Ie, xe(() => s(r)));
        } catch (n) {
          this.error(n);
        }
        c(this, nt) > 0 ? z(this, F, ss).call(this) : y(this, ye, !1);
      }
      return () => {
        var n;
        (n = c(this, rt)) == null || n.remove();
      };
    }, oo)), D && y(this, he, k);
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return c(this, ye) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!c(this, ze).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    z(this, F, Ns).call(this, e), y(this, xt, c(this, xt) + e), c(this, at) && Ii(c(this, at), c(this, xt));
  }
  get_effect_pending() {
    return c(this, hs).call(this), m(
      /** @type {Source<number>} */
      c(this, at)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var i = c(this, ze).onerror;
    let s = c(this, ze).failed;
    if (c(this, kt) || !i && !s)
      throw e;
    c(this, Ie) && (oe(c(this, Ie)), y(this, Ie, null)), c(this, ce) && (oe(c(this, ce)), y(this, ce, null)), c(this, Ue) && (oe(c(this, Ue)), y(this, Ue, null)), D && (we(
      /** @type {TemplateNode} */
      c(this, Fi)
    ), Vr(), we(ls()));
    var r = !1, n = !1;
    const a = () => {
      if (r) {
        to();
        return;
      }
      r = !0, n && ja(), Ge.ensure(), y(this, xt, 0), c(this, Ue) !== null && Dt(c(this, Ue), () => {
        y(this, Ue, null);
      }), y(this, ye, this.has_pending_snippet()), y(this, Ie, z(this, F, is).call(this, () => (y(this, kt, !1), xe(() => c(this, Ct).call(this, c(this, he)))))), c(this, nt) > 0 ? z(this, F, ss).call(this) : y(this, ye, !1);
    };
    var o = T;
    try {
      ge(null), n = !0, i == null || i(e, a), n = !1;
    } catch (l) {
      yi(l, c(this, Ne) && c(this, Ne).parent);
    } finally {
      ge(o);
    }
    s && ki(() => {
      y(this, Ue, z(this, F, is).call(this, () => {
        Ge.ensure(), y(this, kt, !0);
        try {
          return xe(() => {
            s(
              c(this, he),
              () => e,
              () => a
            );
          });
        } catch (l) {
          return yi(
            l,
            /** @type {Effect} */
            c(this, Ne).parent
          ), null;
        } finally {
          y(this, kt, !1);
        }
      }));
    });
  }
}
ye = new WeakMap(), he = new WeakMap(), Fi = new WeakMap(), ze = new WeakMap(), Ct = new WeakMap(), Ne = new WeakMap(), Ie = new WeakMap(), ce = new WeakMap(), Ue = new WeakMap(), Ve = new WeakMap(), rt = new WeakMap(), xt = new WeakMap(), nt = new WeakMap(), kt = new WeakMap(), at = new WeakMap(), hs = new WeakMap(), F = new WeakSet(), ln = function() {
  try {
    y(this, Ie, xe(() => c(this, Ct).call(this, c(this, he))));
  } catch (e) {
    this.error(e);
  }
  y(this, ye, !1);
}, dn = function() {
  const e = c(this, ze).pending;
  e && (y(this, ce, xe(() => e(c(this, he)))), Ge.enqueue(() => {
    var i = z(this, F, zs).call(this);
    y(this, Ie, z(this, F, is).call(this, () => (Ge.ensure(), xe(() => c(this, Ct).call(this, i))))), c(this, nt) > 0 ? z(this, F, ss).call(this) : (Dt(
      /** @type {Effect} */
      c(this, ce),
      () => {
        y(this, ce, null);
      }
    ), y(this, ye, !1));
  }));
}, zs = function() {
  var e = c(this, he);
  return c(this, ye) && (y(this, rt, Qe()), c(this, he).before(c(this, rt)), e = c(this, rt)), e;
}, /**
 * @param {() => Effect | null} fn
 */
is = function(e) {
  var i = R, s = T, r = U;
  qe(c(this, Ne)), ge(c(this, Ne)), Ai(c(this, Ne).ctx);
  try {
    return e();
  } catch (n) {
    return tn(n), null;
  } finally {
    qe(i), ge(s), Ai(r);
  }
}, ss = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    c(this, ze).pending
  );
  c(this, Ie) !== null && (y(this, Ve, document.createDocumentFragment()), c(this, Ve).append(
    /** @type {TemplateNode} */
    c(this, rt)
  ), Sn(c(this, Ie), c(this, Ve))), c(this, ce) === null && y(this, ce, xe(() => e(c(this, he))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
Ns = function(e) {
  var i;
  if (!this.has_pending_snippet()) {
    this.parent && z(i = this.parent, F, Ns).call(i, e);
    return;
  }
  y(this, nt, c(this, nt) + e), c(this, nt) === 0 && (y(this, ye, !1), c(this, ce) && Dt(c(this, ce), () => {
    y(this, ce, null);
  }), c(this, Ve) && (c(this, he).before(c(this, Ve)), y(this, Ve, null)));
};
function go(t, e, i, s) {
  const r = Ji() ? Xi : ir;
  if (i.length === 0 && t.length === 0) {
    s(e.map(r));
    return;
  }
  var n = x, a = (
    /** @type {Effect} */
    R
  ), o = uo();
  function l() {
    Promise.all(i.map((d) => /* @__PURE__ */ fo(d))).then((d) => {
      o();
      try {
        s([...e.map(r), ...d]);
      } catch (g) {
        a.f & et || yi(g, a);
      }
      n == null || n.deactivate(), ds();
    }).catch((d) => {
      yi(d, a);
    });
  }
  t.length > 0 ? Promise.all(t).then(() => {
    o();
    try {
      return l();
    } finally {
      n == null || n.deactivate(), ds();
    }
  }) : l();
}
function uo() {
  var t = R, e = T, i = U, s = x;
  return function(n = !0) {
    qe(t), ge(e), Ai(i), n && (s == null || s.activate());
  };
}
function ds() {
  qe(null), ge(null), Ai(null);
}
// @__NO_SIDE_EFFECTS__
function Xi(t) {
  var e = _ | me, i = T !== null && T.f & _ ? (
    /** @type {Derived} */
    T
  ) : null;
  return R !== null && (R.f |= Nt), {
    ctx: U,
    deps: null,
    effects: null,
    equals: _r,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      ee
    ),
    wv: 0,
    parent: i ?? R,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function fo(t, e) {
  let i = (
    /** @type {Effect | null} */
    R
  );
  i === null && Ra();
  var s = (
    /** @type {Boundary} */
    i.b
  ), r = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), n = zt(
    /** @type {V} */
    ee
  ), a = !T, o = /* @__PURE__ */ new Map();
  return Eo(() => {
    var f;
    var l = Fr();
    r = l.promise;
    try {
      Promise.resolve(t()).then(l.resolve, l.reject).then(() => {
        d === x && d.committed && d.deactivate(), ds();
      });
    } catch (p) {
      l.reject(p), ds();
    }
    var d = (
      /** @type {Batch} */
      x
    );
    if (a) {
      var g = !s.is_pending();
      s.update_pending_count(1), d.increment(g), (f = o.get(d)) == null || f.reject(Ft), o.delete(d), o.set(d, l);
    }
    const h = (p, u = void 0) => {
      if (d.activate(), u)
        u !== Ft && (n.f |= lt, Ii(n, u));
      else {
        n.f & lt && (n.f ^= lt), Ii(n, p);
        for (const [w, v] of o) {
          if (o.delete(w), w === d) break;
          v.reject(Ft);
        }
      }
      a && (s.update_pending_count(-1), d.decrement(g));
    };
    l.promise.then(h, (p) => h(null, p || "unknown"));
  }), An(() => {
    for (const l of o.values())
      l.reject(Ft);
  }), new Promise((l) => {
    function d(g) {
      function h() {
        g === r ? l(n) : d(r);
      }
      g.then(h, h);
    }
    d(r);
  });
}
// @__NO_SIDE_EFFECTS__
function Se(t) {
  const e = /* @__PURE__ */ Xi(t);
  return Mn(e), e;
}
// @__NO_SIDE_EFFECTS__
function ir(t) {
  const e = /* @__PURE__ */ Xi(t);
  return e.equals = $r, e;
}
function cn(t) {
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
function ho(t) {
  for (var e = t.parent; e !== null; ) {
    if (!(e.f & _))
      return e.f & et ? null : (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function sr(t) {
  var e, i = R;
  qe(ho(t));
  try {
    t.f &= ~Lt, cn(t), e = Rn(t);
  } finally {
    qe(i);
  }
  return e;
}
function gn(t) {
  var e = sr(t);
  if (t.equals(e) || (x != null && x.is_fork || (t.v = e), t.wv = On()), !Ut)
    if (Y !== null)
      (Ui() || x != null && x.is_fork) && Y.set(t, e);
    else {
      var i = t.f & Be ? ie : We;
      se(t, i);
    }
}
let Us = /* @__PURE__ */ new Set();
const dt = /* @__PURE__ */ new Map();
let un = !1;
function zt(t, e) {
  var i = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: _r,
    rv: 0,
    wv: 0
  };
  return i;
}
// @__NO_SIDE_EFFECTS__
function M(t, e) {
  const i = zt(t);
  return Mn(i), i;
}
// @__NO_SIDE_EFFECTS__
function fn(t, e = !1, i = !0) {
  var r;
  const s = zt(t);
  return e || (s.equals = $r), xi && i && U !== null && U.l !== null && ((r = U.l).s ?? (r.s = [])).push(s), s;
}
function C(t, e, i = !1) {
  T !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!je || T.f & br) && Ji() && T.f & (_ | Je | $s | br) && !(le != null && le.includes(t)) && Ga();
  let s = i ? X(e) : e;
  return Ii(t, s);
}
function Ii(t, e) {
  if (!t.equals(e)) {
    var i = t.v;
    Ut ? dt.set(t, e) : dt.set(t, i), t.v = e;
    var s = Ge.ensure();
    s.capture(t, i), t.f & _ && (t.f & me && sr(
      /** @type {Derived} */
      t
    ), se(t, t.f & Be ? ie : We)), t.wv = On(), hn(t, me), Ji() && R !== null && R.f & ie && !(R.f & (it | ht)) && (Ae === null ? ko([t]) : Ae.push(t)), !s.is_fork && Us.size > 0 && !un && po();
  }
  return e;
}
function po() {
  un = !1;
  var t = Rt;
  cs(!0);
  const e = Array.from(Us);
  try {
    for (const i of e)
      i.f & ie && se(i, We), Vi(i) && Gi(i);
  } finally {
    cs(t);
  }
  Us.clear();
}
function Pi(t) {
  C(t, t.v + 1);
}
function hn(t, e) {
  var i = t.reactions;
  if (i !== null)
    for (var s = Ji(), r = i.length, n = 0; n < r; n++) {
      var a = i[n], o = a.f;
      if (!(!s && a === R)) {
        var l = (o & me) === 0;
        if (l && se(a, e), o & _) {
          var d = (
            /** @type {Derived} */
            a
          );
          Y == null || Y.delete(d), o & Lt || (o & Be && (a.f |= Lt), hn(d, We));
        } else l && (o & Je && Te !== null && Te.add(
          /** @type {Effect} */
          a
        ), Pt(
          /** @type {Effect} */
          a
        ));
      }
    }
}
function X(t) {
  if (typeof t != "object" || t === null || Tt in t)
    return t;
  const e = Zs(t);
  if (e !== ka && e !== Sa)
    return t;
  var i = /* @__PURE__ */ new Map(), s = jr(t), r = /* @__PURE__ */ M(0), n = Bt, a = (o) => {
    if (Bt === n)
      return o();
    var l = T, d = Bt;
    ge(null), Cr(n);
    var g = o();
    return ge(l), Cr(d), g;
  };
  return s && i.set("length", /* @__PURE__ */ M(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(o, l, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && Ua();
        var g = i.get(l);
        return g === void 0 ? g = a(() => {
          var h = /* @__PURE__ */ M(d.value);
          return i.set(l, h), h;
        }) : C(g, d.value, !0), !0;
      },
      deleteProperty(o, l) {
        var d = i.get(l);
        if (d === void 0) {
          if (l in o) {
            const g = a(() => /* @__PURE__ */ M(ee));
            i.set(l, g), Pi(r);
          }
        } else
          C(d, ee), Pi(r);
        return !0;
      },
      get(o, l, d) {
        var p;
        if (l === Tt)
          return t;
        var g = i.get(l), h = l in o;
        if (g === void 0 && (!h || (p = Mt(o, l)) != null && p.writable) && (g = a(() => {
          var u = X(h ? o[l] : ee), w = /* @__PURE__ */ M(u);
          return w;
        }), i.set(l, g)), g !== void 0) {
          var f = m(g);
          return f === ee ? void 0 : f;
        }
        return Reflect.get(o, l, d);
      },
      getOwnPropertyDescriptor(o, l) {
        var d = Reflect.getOwnPropertyDescriptor(o, l);
        if (d && "value" in d) {
          var g = i.get(l);
          g && (d.value = m(g));
        } else if (d === void 0) {
          var h = i.get(l), f = h == null ? void 0 : h.v;
          if (h !== void 0 && f !== ee)
            return {
              enumerable: !0,
              configurable: !0,
              value: f,
              writable: !0
            };
        }
        return d;
      },
      has(o, l) {
        var f;
        if (l === Tt)
          return !0;
        var d = i.get(l), g = d !== void 0 && d.v !== ee || Reflect.has(o, l);
        if (d !== void 0 || R !== null && (!g || (f = Mt(o, l)) != null && f.writable)) {
          d === void 0 && (d = a(() => {
            var p = g ? X(o[l]) : ee, u = /* @__PURE__ */ M(p);
            return u;
          }), i.set(l, d));
          var h = m(d);
          if (h === ee)
            return !1;
        }
        return g;
      },
      set(o, l, d, g) {
        var H;
        var h = i.get(l), f = l in o;
        if (s && l === "length")
          for (var p = d; p < /** @type {Source<number>} */
          h.v; p += 1) {
            var u = i.get(p + "");
            u !== void 0 ? C(u, ee) : p in o && (u = a(() => /* @__PURE__ */ M(ee)), i.set(p + "", u));
          }
        if (h === void 0)
          (!f || (H = Mt(o, l)) != null && H.writable) && (h = a(() => /* @__PURE__ */ M(void 0)), C(h, X(d)), i.set(l, h));
        else {
          f = h.v !== ee;
          var w = a(() => X(d));
          C(h, w);
        }
        var v = Reflect.getOwnPropertyDescriptor(o, l);
        if (v != null && v.set && v.set.call(g, d), !f) {
          if (s && typeof l == "string") {
            var A = (
              /** @type {Source<number>} */
              i.get("length")
            ), O = Number(l);
            Number.isInteger(O) && O >= A.v && C(A, O + 1);
          }
          Pi(r);
        }
        return !0;
      },
      ownKeys(o) {
        m(r);
        var l = Reflect.ownKeys(o).filter((h) => {
          var f = i.get(h);
          return f === void 0 || f.v !== ee;
        });
        for (var [d, g] of i)
          g.v !== ee && !(d in o) && l.push(d);
        return l;
      },
      setPrototypeOf() {
        Ha();
      }
    }
  );
}
var yr, pn, vn, mn;
function Hs() {
  if (yr === void 0) {
    yr = window, pn = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, i = Text.prototype;
    vn = Mt(e, "firstChild").get, mn = Mt(e, "nextSibling").get, wr(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), wr(i) && (i.__t = void 0);
  }
}
function Qe(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function tt(t) {
  return (
    /** @type {TemplateNode | null} */
    vn.call(t)
  );
}
// @__NO_SIDE_EFFECTS__
function Xe(t) {
  return (
    /** @type {TemplateNode | null} */
    mn.call(t)
  );
}
function q(t, e) {
  if (!D)
    return /* @__PURE__ */ tt(t);
  var i = /* @__PURE__ */ tt(k);
  if (i === null)
    i = k.appendChild(Qe());
  else if (e && i.nodeType !== er) {
    var s = Qe();
    return i == null || i.before(s), we(s), s;
  }
  return we(i), i;
}
function rs(t, e = !1) {
  if (!D) {
    var i = /* @__PURE__ */ tt(t);
    return i instanceof Comment && i.data === "" ? /* @__PURE__ */ Xe(i) : i;
  }
  if (e && (k == null ? void 0 : k.nodeType) !== er) {
    var s = Qe();
    return k == null || k.before(s), we(s), s;
  }
  return k;
}
function V(t, e = 1, i = !1) {
  let s = D ? k : t;
  for (var r; e--; )
    r = s, s = /** @type {TemplateNode} */
    /* @__PURE__ */ Xe(s);
  if (!D)
    return s;
  if (i && (s == null ? void 0 : s.nodeType) !== er) {
    var n = Qe();
    return s === null ? r == null || r.after(n) : s.before(n), we(n), n;
  }
  return we(s), s;
}
function rr(t) {
  t.textContent = "";
}
function wn() {
  return !1;
}
function vo(t) {
  D && /* @__PURE__ */ tt(t) !== null && rr(t);
}
let Ir = !1;
function mo() {
  Ir || (Ir = !0, document.addEventListener(
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
function Si(t) {
  var e = T, i = R;
  ge(null), qe(null);
  try {
    return t();
  } finally {
    ge(e), qe(i);
  }
}
function wo(t, e, i, s = i) {
  t.addEventListener(e, () => Si(i));
  const r = t.__on_r;
  r ? t.__on_r = () => {
    r(), s(!0);
  } : t.__on_r = () => s(!0), mo();
}
function bn(t) {
  R === null && (T === null && La(), Qa()), Ut && Ba();
}
function bo(t, e) {
  var i = e.last;
  i === null ? e.last = e.first = t : (i.next = t, t.prev = i, e.last = t);
}
function Le(t, e, i) {
  var s = R;
  s !== null && s.f & ve && (t |= ve);
  var r = {
    ctx: U,
    deps: null,
    nodes: null,
    f: t | me | Be,
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
      Gi(r), r.f |= Ki;
    } catch (o) {
      throw oe(r), o;
    }
  else e !== null && Pt(r);
  var n = r;
  if (i && n.deps === null && n.teardown === null && n.nodes === null && n.first === n.last && // either `null`, or a singular child
  !(n.f & Nt) && (n = n.first, t & Je && t & Qt && n !== null && (n.f |= Qt)), n !== null && (n.parent = s, s !== null && bo(n, s), T !== null && T.f & _ && !(t & ht))) {
    var a = (
      /** @type {Derived} */
      T
    );
    (a.effects ?? (a.effects = [])).push(n);
  }
  return r;
}
function Ui() {
  return T !== null && !je;
}
function An(t) {
  const e = Le(ms, null, !1);
  return se(e, ie), e.teardown = t, e;
}
function Ot(t) {
  bn();
  var e = (
    /** @type {Effect} */
    R.f
  ), i = !T && (e & it) !== 0 && (e & Ki) === 0;
  if (i) {
    var s = (
      /** @type {ComponentContext} */
      U
    );
    (s.e ?? (s.e = [])).push(t);
  } else
    return yn(t);
}
function yn(t) {
  return Le(_s | qr, t, !1);
}
function Ao(t) {
  return bn(), Le(ms | qr, t, !0);
}
function yo(t) {
  Ge.ensure();
  const e = Le(ht | Nt, t, !0);
  return () => {
    oe(e);
  };
}
function Io(t) {
  Ge.ensure();
  const e = Le(ht | Nt, t, !0);
  return (i = {}) => new Promise((s) => {
    i.outro ? Dt(e, () => {
      oe(e), s(void 0);
    }) : (oe(e), s(void 0));
  });
}
function nr(t) {
  return Le(_s, t, !1);
}
function Eo(t) {
  return Le($s | Nt, t, !0);
}
function Es(t, e = 0) {
  return Le(ms | e, t, !0);
}
function ut(t, e = [], i = [], s = []) {
  go(s, e, i, (r) => {
    Le(ms, () => t(...r.map(m)), !0);
  });
}
function ar(t, e = 0) {
  var i = Le(Je | e, t, !0);
  return i;
}
function xe(t) {
  return Le(it | Nt, t, !0);
}
function In(t) {
  var e = t.teardown;
  if (e !== null) {
    const i = Ut, s = T;
    Er(!0), ge(null);
    try {
      e.call(null);
    } finally {
      Er(i), ge(s);
    }
  }
}
function En(t, e = !1) {
  var i = t.first;
  for (t.first = t.last = null; i !== null; ) {
    const r = i.ac;
    r !== null && Si(() => {
      r.abort(Ft);
    });
    var s = i.next;
    i.f & ht ? i.parent = null : oe(i, e), i = s;
  }
}
function Co(t) {
  for (var e = t.first; e !== null; ) {
    var i = e.next;
    e.f & it || oe(e), e = i;
  }
}
function oe(t, e = !0) {
  var i = !1;
  (e || t.f & Wr) && t.nodes !== null && t.nodes.end !== null && (xo(
    t.nodes.start,
    /** @type {TemplateNode} */
    t.nodes.end
  ), i = !0), En(t, e && !i), gs(t, 0), se(t, et);
  var s = t.nodes && t.nodes.t;
  if (s !== null)
    for (const n of s)
      n.stop();
  In(t);
  var r = t.parent;
  r !== null && r.first !== null && Cn(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes = t.ac = null;
}
function xo(t, e) {
  for (; t !== null; ) {
    var i = t === e ? null : /* @__PURE__ */ Xe(t);
    t.remove(), t = i;
  }
}
function Cn(t) {
  var e = t.parent, i = t.prev, s = t.next;
  i !== null && (i.next = s), s !== null && (s.prev = i), e !== null && (e.first === t && (e.first = s), e.last === t && (e.last = i));
}
function Dt(t, e, i = !0) {
  var s = [];
  xn(t, s, !0);
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
function xn(t, e, i) {
  if (!(t.f & ve)) {
    t.f ^= ve;
    var s = t.nodes && t.nodes.t;
    if (s !== null)
      for (const o of s)
        (o.is_global || i) && e.push(o);
    for (var r = t.first; r !== null; ) {
      var n = r.next, a = (r.f & Qt) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (r.f & it) !== 0 && (t.f & Je) !== 0;
      xn(r, e, a ? i : !1), r = n;
    }
  }
}
function or(t) {
  kn(t, !0);
}
function kn(t, e) {
  if (t.f & ve) {
    t.f ^= ve, t.f & ie || (se(t, me), Pt(t));
    for (var i = t.first; i !== null; ) {
      var s = i.next, r = (i.f & Qt) !== 0 || (i.f & it) !== 0;
      kn(i, r ? e : !1), i = s;
    }
    var n = t.nodes && t.nodes.t;
    if (n !== null)
      for (const a of n)
        (a.is_global || e) && a.in();
  }
}
function Sn(t, e) {
  if (t.nodes)
    for (var i = t.nodes.start, s = t.nodes.end; i !== null; ) {
      var r = i === s ? null : /* @__PURE__ */ Xe(i);
      e.append(i), i = r;
    }
}
let Rt = !1;
function cs(t) {
  Rt = t;
}
let Ut = !1;
function Er(t) {
  Ut = t;
}
let T = null, je = !1;
function ge(t) {
  T = t;
}
let R = null;
function qe(t) {
  R = t;
}
let le = null;
function Mn(t) {
  T !== null && (le === null ? le = [t] : le.push(t));
}
let ne = null, fe = 0, Ae = null;
function ko(t) {
  Ae = t;
}
let Tn = 1, Hi = 0, Bt = Hi;
function Cr(t) {
  Bt = t;
}
function On() {
  return ++Tn;
}
function Vi(t) {
  var e = t.f;
  if (e & me)
    return !0;
  if (e & _ && (t.f &= ~Lt), e & We) {
    var i = t.deps;
    if (i !== null)
      for (var s = i.length, r = 0; r < s; r++) {
        var n = i[r];
        if (Vi(
          /** @type {Derived} */
          n
        ) && gn(
          /** @type {Derived} */
          n
        ), n.wv > t.wv)
          return !0;
      }
    e & Be && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Y === null && se(t, ie);
  }
  return !1;
}
function Dn(t, e, i = !0) {
  var s = t.reactions;
  if (s !== null && !(le != null && le.includes(t)))
    for (var r = 0; r < s.length; r++) {
      var n = s[r];
      n.f & _ ? Dn(
        /** @type {Derived} */
        n,
        e,
        !1
      ) : e === n && (i ? se(n, me) : n.f & ie && se(n, We), Pt(
        /** @type {Effect} */
        n
      ));
    }
}
function Rn(t) {
  var u;
  var e = ne, i = fe, s = Ae, r = T, n = le, a = U, o = je, l = Bt, d = t.f;
  ne = /** @type {null | Value[]} */
  null, fe = 0, Ae = null, T = d & (it | ht) ? null : t, le = null, Ai(t.ctx), je = !1, Bt = ++Hi, t.ac !== null && (Si(() => {
    t.ac.abort(Ft);
  }), t.ac = null);
  try {
    t.f |= Bs;
    var g = (
      /** @type {Function} */
      t.fn
    ), h = g(), f = t.deps;
    if (ne !== null) {
      var p;
      if (gs(t, fe), f !== null && fe > 0)
        for (f.length = fe + ne.length, p = 0; p < ne.length; p++)
          f[fe + p] = ne[p];
      else
        t.deps = f = ne;
      if (Ui() && t.f & Be)
        for (p = fe; p < f.length; p++)
          ((u = f[p]).reactions ?? (u.reactions = [])).push(t);
    } else f !== null && fe < f.length && (gs(t, fe), f.length = fe);
    if (Ji() && Ae !== null && !je && f !== null && !(t.f & (_ | We | me)))
      for (p = 0; p < /** @type {Source[]} */
      Ae.length; p++)
        Dn(
          Ae[p],
          /** @type {Effect} */
          t
        );
    return r !== null && r !== t && (Hi++, Ae !== null && (s === null ? s = Ae : s.push(.../** @type {Source[]} */
    Ae))), t.f & lt && (t.f ^= lt), h;
  } catch (w) {
    return tn(w);
  } finally {
    t.f ^= Bs, ne = e, fe = i, Ae = s, T = r, le = n, Ai(a), je = o, Bt = l;
  }
}
function So(t, e) {
  let i = e.reactions;
  if (i !== null) {
    var s = xa.call(i, t);
    if (s !== -1) {
      var r = i.length - 1;
      r === 0 ? i = e.reactions = null : (i[s] = i[r], i.pop());
    }
  }
  i === null && e.f & _ && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ne === null || !ne.includes(e)) && (se(e, We), e.f & Be && (e.f ^= Be, e.f &= ~Lt), cn(
    /** @type {Derived} **/
    e
  ), gs(
    /** @type {Derived} **/
    e,
    0
  ));
}
function gs(t, e) {
  var i = t.deps;
  if (i !== null)
    for (var s = e; s < i.length; s++)
      So(t, i[s]);
}
function Gi(t) {
  var e = t.f;
  if (!(e & et)) {
    se(t, ie);
    var i = R, s = Rt;
    R = t, Rt = !0;
    try {
      e & (Je | Oa) ? Co(t) : En(t), In(t);
      var r = Rn(t);
      t.teardown = typeof r == "function" ? r : null, t.wv = Tn;
      var n;
    } finally {
      Rt = s, R = i;
    }
  }
}
async function Bn() {
  await Promise.resolve(), Fe();
}
function m(t) {
  var e = t.f, i = (e & _) !== 0;
  if (T !== null && !je) {
    var s = R !== null && (R.f & et) !== 0;
    if (!s && !(le != null && le.includes(t))) {
      var r = T.deps;
      if (T.f & Bs)
        t.rv < Hi && (t.rv = Hi, ne === null && r !== null && r[fe] === t ? fe++ : ne === null ? ne = [t] : ne.includes(t) || ne.push(t));
      else {
        (T.deps ?? (T.deps = [])).push(t);
        var n = t.reactions;
        n === null ? t.reactions = [T] : n.includes(T) || n.push(T);
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
      return (!(a.f & ie) && a.reactions !== null || Ln(a)) && (o = sr(a)), dt.set(a, o), o;
    }
  } else i && (!(Y != null && Y.has(t)) || x != null && x.is_fork && !Ui()) && (a = /** @type {Derived} */
  t, Vi(a) && gn(a), Rt && Ui() && !(a.f & Be) && Qn(a));
  if (Y != null && Y.has(t))
    return Y.get(t);
  if (t.f & lt)
    throw t.v;
  return t.v;
}
function Qn(t) {
  if (t.deps !== null) {
    t.f ^= Be;
    for (const e of t.deps)
      (e.reactions ?? (e.reactions = [])).push(t), e.f & _ && !(e.f & Be) && Qn(
        /** @type {Derived} */
        e
      );
  }
}
function Ln(t) {
  if (t.v === ee) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (dt.has(e) || e.f & _ && Ln(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function mt(t) {
  var e = je;
  try {
    return je = !0, t();
  } finally {
    je = e;
  }
}
const Mo = -7169;
function se(t, e) {
  t.f = t.f & Mo | e;
}
function To(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (Tt in t)
      Gs(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const i = t[e];
        typeof i == "object" && i && Tt in i && Gs(i);
      }
  }
}
function Gs(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let s in t)
      try {
        Gs(t[s], e);
      } catch {
      }
    const i = Zs(t);
    if (i !== Object.prototype && i !== Array.prototype && i !== Map.prototype && i !== Set.prototype && i !== Date.prototype) {
      const s = Yr(i);
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
function Do(t) {
  return Oo.includes(t);
}
const Pn = /* @__PURE__ */ new Set(), js = /* @__PURE__ */ new Set();
function Ro(t, e, i, s = {}) {
  function r(n) {
    if (s.capture || Ri.call(e, n), !n.cancelBubble)
      return Si(() => i == null ? void 0 : i.call(this, n));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? ki(() => {
    e.addEventListener(t, r, s);
  }) : e.addEventListener(t, r, s), r;
}
function Bo(t, e, i, s, r) {
  var n = { capture: s, passive: r }, a = Ro(t, e, i, n);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && An(() => {
    e.removeEventListener(t, a, n);
  });
}
function Cs(t) {
  for (var e = 0; e < t.length; e++)
    Pn.add(t[e]);
  for (var i of js)
    i(t);
}
let xr = null;
function Ri(t) {
  var v;
  var e = this, i = (
    /** @type {Node} */
    e.ownerDocument
  ), s = t.type, r = ((v = t.composedPath) == null ? void 0 : v.call(t)) || [], n = (
    /** @type {null | Element} */
    r[0] || t.target
  );
  xr = t;
  var a = 0, o = xr === t && t.__root;
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
    os(t, "currentTarget", {
      configurable: !0,
      get() {
        return n || i;
      }
    });
    var g = T, h = R;
    ge(null), qe(null);
    try {
      for (var f, p = []; n !== null; ) {
        var u = n.assignedSlot || n.parentNode || /** @type {any} */
        n.host || null;
        try {
          var w = n["__" + s];
          w != null && (!/** @type {any} */
          n.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === n) && w.call(n, t);
        } catch (A) {
          f ? p.push(A) : f = A;
        }
        if (t.cancelBubble || u === e || u === null)
          break;
        n = u;
      }
      if (f) {
        for (let A of p)
          queueMicrotask(() => {
            throw A;
          });
        throw f;
      }
    } finally {
      t.__root = e, delete t.currentTarget, ge(g), qe(h);
    }
  }
}
function zn(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function ct(t, e) {
  var i = (
    /** @type {Effect} */
    R
  );
  i.nodes === null && (i.nodes = { start: t, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function K(t, e) {
  var i = (e & _a) !== 0, s = (e & $a) !== 0, r, n = !t.startsWith("<!>");
  return () => {
    if (D)
      return ct(k, null), k;
    r === void 0 && (r = zn(n ? t : "<!>" + t), i || (r = /** @type {TemplateNode} */
    /* @__PURE__ */ tt(r)));
    var a = (
      /** @type {TemplateNode} */
      s || pn ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    if (i) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ tt(a)
      ), l = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      ct(o, l);
    } else
      ct(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function Qo(t, e, i = "svg") {
  var s = !t.startsWith("<!>"), r = `<${i}>${s ? t : "<!>" + t}</${i}>`, n;
  return () => {
    if (D)
      return ct(k, null), k;
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
    return ct(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function Lo(t, e) {
  return /* @__PURE__ */ Qo(t, e, "svg");
}
function Po() {
  if (D)
    return ct(k, null), k;
  var t = document.createDocumentFragment(), e = document.createComment(""), i = Qe();
  return t.append(e, i), ct(e, i), t;
}
function N(t, e) {
  if (D) {
    var i = (
      /** @type {Effect & { nodes: EffectNodes }} */
      R
    );
    (!(i.f & Ki) || i.nodes.end === null) && (i.nodes.end = k), ys();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
let Ys = !0;
function us(t, e) {
  var i = e == null ? "" : typeof e == "object" ? e + "" : e;
  i !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = i, t.nodeValue = i + "");
}
function lr(t, e) {
  return Nn(t, e);
}
function zo(t, e) {
  Hs(), e.intro = e.intro ?? !1;
  const i = e.target, s = D, r = k;
  try {
    for (var n = /* @__PURE__ */ tt(i); n && (n.nodeType !== Ci || /** @type {Comment} */
    n.data !== Xr); )
      n = /* @__PURE__ */ Xe(n);
    if (!n)
      throw bi;
    $e(!0), we(
      /** @type {Comment} */
      n
    );
    const a = Nn(t, { ...e, anchor: n });
    return $e(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a instanceof Error && a.message.split(`
`).some((o) => o.startsWith("https://svelte.dev/e/")))
      throw a;
    return a !== bi && console.warn("Failed to hydrate: ", a), e.recover === !1 && za(), Hs(), rr(i), $e(!1), lr(t, e);
  } finally {
    $e(s), we(r);
  }
}
const Yt = /* @__PURE__ */ new Map();
function Nn(t, { target: e, anchor: i, props: s = {}, events: r, context: n, intro: a = !0 }) {
  Hs();
  var o = /* @__PURE__ */ new Set(), l = (h) => {
    for (var f = 0; f < h.length; f++) {
      var p = h[f];
      if (!o.has(p)) {
        o.add(p);
        var u = Do(p);
        e.addEventListener(p, Ri, { passive: u });
        var w = Yt.get(p);
        w === void 0 ? (document.addEventListener(p, Ri, { passive: u }), Yt.set(p, 1)) : Yt.set(p, w + 1);
      }
    }
  };
  l(vs(Pn)), js.add(l);
  var d = void 0, g = Io(() => {
    var h = i ?? e.appendChild(Qe());
    return lo(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (f) => {
        if (n) {
          pt({});
          var p = (
            /** @type {ComponentContext} */
            U
          );
          p.c = n;
        }
        if (r && (s.$$events = r), D && ct(
          /** @type {TemplateNode} */
          f,
          null
        ), Ys = a, d = t(f, s) || {}, Ys = !0, D && (R.nodes.end = k, k === null || k.nodeType !== Ci || /** @type {Comment} */
        k.data !== tr))
          throw As(), bi;
        n && vt();
      }
    ), () => {
      var u;
      for (var f of o) {
        e.removeEventListener(f, Ri);
        var p = (
          /** @type {number} */
          Yt.get(f)
        );
        --p === 0 ? (document.removeEventListener(f, Ri), Yt.delete(f)) : Yt.set(f, p);
      }
      js.delete(l), h !== i && ((u = h.parentNode) == null || u.removeChild(h));
    };
  });
  return Fs.set(d, g), d;
}
let Fs = /* @__PURE__ */ new WeakMap();
function Ws(t, e) {
  const i = Fs.get(t);
  return i ? (Fs.delete(t), i(e)) : Promise.resolve();
}
var De, He, pe, St, Wi, qi, ps;
class No {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, i = !0) {
    /** @type {TemplateNode} */
    G(this, "anchor");
    /** @type {Map<Batch, Key>} */
    I(this, De, /* @__PURE__ */ new Map());
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
    I(this, He, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    I(this, pe, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    I(this, St, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    I(this, Wi, !0);
    I(this, qi, () => {
      var e = (
        /** @type {Batch} */
        x
      );
      if (c(this, De).has(e)) {
        var i = (
          /** @type {Key} */
          c(this, De).get(e)
        ), s = c(this, He).get(i);
        if (s)
          or(s), c(this, St).delete(i);
        else {
          var r = c(this, pe).get(i);
          r && (c(this, He).set(i, r.effect), c(this, pe).delete(i), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), s = r.effect);
        }
        for (const [n, a] of c(this, De)) {
          if (c(this, De).delete(n), n === e)
            break;
          const o = c(this, pe).get(a);
          o && (oe(o.effect), c(this, pe).delete(a));
        }
        for (const [n, a] of c(this, He)) {
          if (n === i || c(this, St).has(n)) continue;
          const o = () => {
            if (Array.from(c(this, De).values()).includes(n)) {
              var d = document.createDocumentFragment();
              Sn(a, d), d.append(Qe()), c(this, pe).set(n, { effect: a, fragment: d });
            } else
              oe(a);
            c(this, St).delete(n), c(this, He).delete(n);
          };
          c(this, Wi) || !s ? (c(this, St).add(n), Dt(a, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    I(this, ps, (e) => {
      c(this, De).delete(e);
      const i = Array.from(c(this, De).values());
      for (const [s, r] of c(this, pe))
        i.includes(s) || (oe(r.effect), c(this, pe).delete(s));
    });
    this.anchor = e, y(this, Wi, i);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, i) {
    var s = (
      /** @type {Batch} */
      x
    ), r = wn();
    if (i && !c(this, He).has(e) && !c(this, pe).has(e))
      if (r) {
        var n = document.createDocumentFragment(), a = Qe();
        n.append(a), c(this, pe).set(e, {
          effect: xe(() => i(a)),
          fragment: n
        });
      } else
        c(this, He).set(
          e,
          xe(() => i(this.anchor))
        );
    if (c(this, De).set(s, e), r) {
      for (const [o, l] of c(this, He))
        o === e ? s.skipped_effects.delete(l) : s.skipped_effects.add(l);
      for (const [o, l] of c(this, pe))
        o === e ? s.skipped_effects.delete(l.effect) : s.skipped_effects.add(l.effect);
      s.oncommit(c(this, qi)), s.ondiscard(c(this, ps));
    } else
      D && (this.anchor = k), c(this, qi).call(this);
  }
}
De = new WeakMap(), He = new WeakMap(), pe = new WeakMap(), St = new WeakMap(), Wi = new WeakMap(), qi = new WeakMap(), ps = new WeakMap();
function ke(t, e, i = !1) {
  D && ys();
  var s = new No(t), r = i ? Qt : 0;
  function n(a, o) {
    if (D) {
      const d = Zr(t) === bs;
      if (a === d) {
        var l = ls();
        we(l), s.anchor = l, $e(!1), s.ensure(a, o), $e(!0);
        return;
      }
    }
    s.ensure(a, o);
  }
  ar(() => {
    var a = !1;
    e((o, l = !0) => {
      a = !0, n(l, o);
    }), a || n(!1, null);
  }, r);
}
function Uo(t, e, i) {
  for (var s = [], r = e.length, n, a = e.length, o = 0; o < r; o++) {
    let h = e[o];
    Dt(
      h,
      () => {
        if (n) {
          if (n.pending.delete(h), n.done.add(h), n.pending.size === 0) {
            var f = (
              /** @type {Set<EachOutroGroup>} */
              t.outrogroups
            );
            qs(vs(n.done)), f.delete(n), f.size === 0 && (t.outrogroups = null);
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
      ), g = (
        /** @type {Element} */
        d.parentNode
      );
      rr(g), g.append(d), t.items.clear();
    }
    qs(e, !l);
  } else
    n = {
      pending: new Set(e),
      done: /* @__PURE__ */ new Set()
    }, (t.outrogroups ?? (t.outrogroups = /* @__PURE__ */ new Set())).add(n);
}
function qs(t, e = !0) {
  for (var i = 0; i < t.length; i++)
    oe(t[i], e);
}
var kr;
function Ho(t, e, i, s, r, n = null) {
  var a = t, o = /* @__PURE__ */ new Map();
  D && ys();
  var l = null, d = /* @__PURE__ */ ir(() => {
    var w = i();
    return jr(w) ? w : w == null ? [] : vs(w);
  }), g, h = !0;
  function f() {
    u.fallback = l, Go(u, g, a, e, s), l !== null && (g.length === 0 ? l.f & ot ? (l.f ^= ot, Bi(l, null, a)) : or(l) : Dt(l, () => {
      l = null;
    }));
  }
  var p = ar(() => {
    g = /** @type {V[]} */
    m(d);
    var w = g.length;
    let v = !1;
    if (D) {
      var A = Zr(a) === bs;
      A !== (w === 0) && (a = ls(), we(a), $e(!1), v = !0);
    }
    for (var O = /* @__PURE__ */ new Set(), H = (
      /** @type {Batch} */
      x
    ), B = wn(), Q = 0; Q < w; Q += 1) {
      D && k.nodeType === Ci && /** @type {Comment} */
      k.data === tr && (a = /** @type {Comment} */
      k, v = !0, $e(!1));
      var de = g[Q], ue = s(de, Q), J = h ? null : o.get(ue);
      J ? (J.v && Ii(J.v, de), J.i && Ii(J.i, Q), B && H.skipped_effects.delete(J.e)) : (J = jo(
        o,
        h ? a : kr ?? (kr = Qe()),
        de,
        ue,
        Q,
        r,
        e,
        i
      ), h || (J.e.f |= ot), o.set(ue, J)), O.add(ue);
    }
    if (w === 0 && n && !l && (h ? l = xe(() => n(a)) : (l = xe(() => n(kr ?? (kr = Qe()))), l.f |= ot)), D && w > 0 && we(ls()), !h)
      if (B) {
        for (const [re, ks] of o)
          O.has(re) || H.skipped_effects.add(ks.e);
        H.oncommit(f), H.ondiscard(() => {
        });
      } else
        f();
    v && $e(!0), m(d);
  }), u = { effect: p, items: o, outrogroups: null, fallback: l };
  h = !1, D && (a = k);
}
function Go(t, e, i, s, r) {
  var J;
  var n = e.length, a = t.items, o = t.effect.first, l, d = null, g = [], h = [], f, p, u, w;
  for (w = 0; w < n; w += 1) {
    if (f = e[w], p = r(f, w), u = /** @type {EachItem} */
    a.get(p).e, t.outrogroups !== null)
      for (const re of t.outrogroups)
        re.pending.delete(u), re.done.delete(u);
    if (u.f & ot)
      if (u.f ^= ot, u === o)
        Bi(u, null, i);
      else {
        var v = d ? d.next : o;
        u === t.effect.last && (t.effect.last = u.prev), u.prev && (u.prev.next = u.next), u.next && (u.next.prev = u.prev), st(t, d, u), st(t, u, v), Bi(u, v, i), d = u, g = [], h = [], o = d.next;
        continue;
      }
    if (u.f & ve && or(u), u !== o) {
      if (l !== void 0 && l.has(u)) {
        if (g.length < h.length) {
          var A = h[0], O;
          d = A.prev;
          var H = g[0], B = g[g.length - 1];
          for (O = 0; O < g.length; O += 1)
            Bi(g[O], A, i);
          for (O = 0; O < h.length; O += 1)
            l.delete(h[O]);
          st(t, H.prev, B.next), st(t, d, H), st(t, B, A), o = A, d = B, w -= 1, g = [], h = [];
        } else
          l.delete(u), Bi(u, o, i), st(t, u.prev, u.next), st(t, u, d === null ? t.effect.first : d.next), st(t, d, u), d = u;
        continue;
      }
      for (g = [], h = []; o !== null && o !== u; )
        (l ?? (l = /* @__PURE__ */ new Set())).add(o), h.push(o), o = o.next;
      if (o === null)
        continue;
    }
    u.f & ot || g.push(u), d = u, o = u.next;
  }
  if (t.outrogroups !== null) {
    for (const re of t.outrogroups)
      re.pending.size === 0 && (qs(vs(re.done)), (J = t.outrogroups) == null || J.delete(re));
    t.outrogroups.size === 0 && (t.outrogroups = null);
  }
  if (o !== null || l !== void 0) {
    var Q = [];
    if (l !== void 0)
      for (u of l)
        u.f & ve || Q.push(u);
    for (; o !== null; )
      !(o.f & ve) && o !== t.fallback && Q.push(o), o = o.next;
    var de = Q.length;
    if (de > 0) {
      var ue = null;
      Uo(t, Q, ue);
    }
  }
}
function jo(t, e, i, s, r, n, a, o) {
  var l = a & Ya ? a & Wa ? zt(i) : /* @__PURE__ */ fn(i, !1, !1) : null, d = a & Fa ? zt(r) : null;
  return {
    v: l,
    i: d,
    e: xe(() => (n(e, l ?? i, d ?? r, o), () => {
      t.delete(s);
    }))
  };
}
function Bi(t, e, i) {
  if (t.nodes)
    for (var s = t.nodes.start, r = t.nodes.end, n = e && !(e.f & ot) ? (
      /** @type {EffectNodes} */
      e.nodes.start
    ) : i; s !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Xe(s)
      );
      if (n.before(s), s === r)
        return;
      s = a;
    }
}
function st(t, e, i) {
  e === null ? t.effect.first = i : e.next = i, i === null ? t.effect.last = e : i.prev = e;
}
const Yo = () => performance.now(), _e = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (t) => requestAnimationFrame(t)
  ),
  now: () => Yo(),
  tasks: /* @__PURE__ */ new Set()
};
function Un() {
  const t = _e.now();
  _e.tasks.forEach((e) => {
    e.c(t) || (_e.tasks.delete(e), e.f());
  }), _e.tasks.size !== 0 && _e.tick(Un);
}
function Fo(t) {
  let e;
  return _e.tasks.size === 0 && _e.tick(Un), {
    promise: new Promise((i) => {
      _e.tasks.add(e = { c: t, f: i });
    }),
    abort() {
      _e.tasks.delete(e);
    }
  };
}
function $i(t, e) {
  Si(() => {
    t.dispatchEvent(new CustomEvent(e));
  });
}
function Wo(t) {
  if (t === "float") return "cssFloat";
  if (t === "offset") return "cssOffset";
  if (t.startsWith("--")) return t;
  const e = t.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (i) => i[0].toUpperCase() + i.slice(1)
  ).join("");
}
function Sr(t) {
  const e = {}, i = t.split(";");
  for (const s of i) {
    const [r, n] = s.split(":");
    if (!r || n === void 0) break;
    const a = Wo(r.trim());
    e[a] = n.trim();
  }
  return e;
}
const qo = (t) => t;
function Mr(t, e, i, s) {
  var v;
  var r = (t & Za) !== 0, n = "both", a, o = e.inert, l = e.style.overflow, d, g;
  function h() {
    return Si(() => a ?? (a = i()(e, (s == null ? void 0 : s()) ?? /** @type {P} */
    {}, {
      direction: n
    })));
  }
  var f = {
    is_global: r,
    in() {
      e.inert = o, $i(e, "introstart"), d = Ks(e, h(), g, 1, () => {
        $i(e, "introend"), d == null || d.abort(), d = a = void 0, e.style.overflow = l;
      });
    },
    out(A) {
      e.inert = !0, $i(e, "outrostart"), g = Ks(e, h(), d, 0, () => {
        $i(e, "outroend"), A == null || A();
      });
    },
    stop: () => {
      d == null || d.abort(), g == null || g.abort();
    }
  }, p = (
    /** @type {Effect & { nodes: EffectNodes }} */
    R
  );
  if (((v = p.nodes).t ?? (v.t = [])).push(f), Ys) {
    var u = r;
    if (!u) {
      for (var w = (
        /** @type {Effect | null} */
        p.parent
      ); w && w.f & Qt; )
        for (; (w = w.parent) && !(w.f & Je); )
          ;
      u = !w || (w.f & Ki) !== 0;
    }
    u && nr(() => {
      mt(() => f.in());
    });
  }
}
function Ks(t, e, i, s, r) {
  var n = s === 1;
  if (Ma(e)) {
    var a, o = !1;
    return ki(() => {
      if (!o) {
        var v = e({ direction: n ? "in" : "out" });
        a = Ks(t, v, i, s, r);
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
      abort: Oi,
      deactivate: Oi,
      reset: Oi,
      t: () => s
    };
  const { delay: l = 0, css: d, tick: g, easing: h = qo } = e;
  var f = [];
  if (n && i === void 0 && (g && g(0, 1), d)) {
    var p = Sr(d(0, 1));
    f.push(p, p);
  }
  var u = () => 1 - s, w = t.animate(f, { duration: l, fill: "forwards" });
  return w.onfinish = () => {
    w.cancel();
    var v = (i == null ? void 0 : i.t()) ?? 1 - s;
    i == null || i.abort();
    var A = s - v, O = (
      /** @type {number} */
      e.duration * Math.abs(A)
    ), H = [];
    if (O > 0) {
      var B = !1;
      if (d)
        for (var Q = Math.ceil(O / 16.666666666666668), de = 0; de <= Q; de += 1) {
          var ue = v + A * h(de / Q), J = Sr(d(ue, 1 - ue));
          H.push(J), B || (B = J.overflow === "hidden");
        }
      B && (t.style.overflow = "hidden"), u = () => {
        var re = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          w.currentTime
        );
        return v + A * h(re / O);
      }, g && Fo(() => {
        if (w.playState !== "running") return !1;
        var re = u();
        return g(re, 1 - re), !0;
      });
    }
    w = t.animate(H, { duration: O, fill: "forwards" }), w.onfinish = () => {
      u = () => s, g == null || g(s, 1 - s), r();
    };
  }, {
    abort: () => {
      w && (w.cancel(), w.effect = null, w.onfinish = Oi);
    },
    deactivate: () => {
      r = Oi;
    },
    reset: () => {
      s === 0 && (g == null || g(1, 0));
    },
    t: () => u()
  };
}
function Ht(t, e) {
  nr(() => {
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
const Tr = [...` 	
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
          (a === 0 || Tr.includes(s[a - 1])) && (o === s.length || Tr.includes(s[o])) ? s = (a === 0 ? "" : s.substring(0, a)) + s.substring(o + 1) : a = o;
        }
  }
  return s === "" ? null : s;
}
function Jo(t, e) {
  return t == null ? null : String(t);
}
function dr(t, e, i, s, r, n) {
  var a = t.__className;
  if (D || a !== i || a === void 0) {
    var o = Ko(i, s, n);
    (!D || o !== t.getAttribute("class")) && (o == null ? t.removeAttribute("class") : t.className = o), t.__className = i;
  } else if (n && r !== n)
    for (var l in n) {
      var d = !!n[l];
      (r == null || d !== !!r[l]) && t.classList.toggle(l, d);
    }
  return n;
}
function Xo(t, e, i, s) {
  var r = t.__style;
  if (D || r !== e) {
    var n = Jo(e);
    (!D || n !== t.getAttribute("style")) && (n == null ? t.removeAttribute("style") : t.style.cssText = n), t.__style = e;
  }
  return s;
}
const Vo = Symbol("is custom element"), Zo = Symbol("is html");
function Ke(t, e, i, s) {
  var r = _o(t);
  D && (r[e] = t.getAttribute(e), e === "src" || e === "srcset" || e === "href" && t.nodeName === "LINK") || r[e] !== (r[e] = i) && (e === "loading" && (t[Da] = i), i == null ? t.removeAttribute(e) : typeof i != "string" && $o(t).includes(e) ? t[e] = i : t.setAttribute(e, i));
}
function _o(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ?? (t.__attributes = {
      [Vo]: t.nodeName.includes("-"),
      [Zo]: t.namespaceURI === eo
    })
  );
}
var Or = /* @__PURE__ */ new Map();
function $o(t) {
  var e = t.getAttribute("is") || t.nodeName, i = Or.get(e);
  if (i) return i;
  Or.set(e, i = []);
  for (var s, r = t, n = Element.prototype; n !== r; ) {
    s = Yr(r);
    for (var a in s)
      s[a].set && i.push(a);
    r = Zs(r);
  }
  return i;
}
function el(t, e, i = e) {
  var s = /* @__PURE__ */ new WeakSet();
  wo(t, "input", async (r) => {
    var n = r ? t.defaultValue : t.value;
    if (n = Ts(t) ? Os(n) : n, i(n), x !== null && s.add(x), await Bn(), n !== (n = e())) {
      var a = t.selectionStart, o = t.selectionEnd, l = t.value.length;
      if (t.value = n ?? "", o !== null) {
        var d = t.value.length;
        a === o && o === l && d > l ? (t.selectionStart = d, t.selectionEnd = d) : (t.selectionStart = a, t.selectionEnd = Math.min(o, d));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (D && t.defaultValue !== t.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  mt(e) == null && t.value) && (i(Ts(t) ? Os(t.value) : t.value), x !== null && s.add(x)), Es(() => {
    var r = e();
    if (t === document.activeElement) {
      var n = (
        /** @type {Batch} */
        ts ?? x
      );
      if (s.has(n))
        return;
    }
    Ts(t) && r === Os(t.value) || t.type === "date" && !r && !t.value || r !== t.value && (t.value = r ?? "");
  });
}
function Ts(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function Os(t) {
  return t === "" ? null : +t;
}
function Dr(t, e) {
  return t === e || (t == null ? void 0 : t[Tt]) === e;
}
function cr(t = {}, e, i, s) {
  return nr(() => {
    var r, n;
    return Es(() => {
      r = n, n = [], mt(() => {
        t !== i(...n) && (e(t, ...n), r && Dr(i(...r), t) && e(null, ...r));
      });
    }), () => {
      ki(() => {
        n && Dr(i(...n), t) && e(null, ...n);
      });
    };
  }), t;
}
function tl(t = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    U
  ), i = e.l.u;
  if (!i) return;
  let s = () => To(e.s);
  if (t) {
    let r = 0, n = (
      /** @type {Record<string, any>} */
      {}
    );
    const a = /* @__PURE__ */ Xi(() => {
      let o = !1;
      const l = e.s;
      for (const d in l)
        l[d] !== n[d] && (n[d] = l[d], o = !0);
      return o && r++, r;
    });
    s = () => m(a);
  }
  i.b.length && Ao(() => {
    Rr(e, s), Rs(i.b);
  }), Ot(() => {
    const r = mt(() => i.m.map(Ta));
    return () => {
      for (const n of r)
        typeof n == "function" && n();
    };
  }), i.a.length && Ot(() => {
    Rr(e, s), Rs(i.a);
  });
}
function Rr(t, e) {
  if (t.l.s)
    for (const i of t.l.s) m(i);
  e();
}
let es = !1;
function il(t) {
  var e = es;
  try {
    return es = !1, [t(), es];
  } finally {
    es = e;
  }
}
function gt(t, e, i, s) {
  var H;
  var r = !xi || (i & Ka) !== 0, n = (i & Xa) !== 0, a = (i & Va) !== 0, o = (
    /** @type {V} */
    s
  ), l = !0, d = () => (l && (l = !1, o = a ? mt(
    /** @type {() => V} */
    s
  ) : (
    /** @type {V} */
    s
  )), o), g;
  if (n) {
    var h = Tt in t || Kr in t;
    g = ((H = Mt(t, e)) == null ? void 0 : H.set) ?? (h && e in t ? (B) => t[e] = B : void 0);
  }
  var f, p = !1;
  n ? [f, p] = il(() => (
    /** @type {V} */
    t[e]
  )) : f = /** @type {V} */
  t[e], f === void 0 && s !== void 0 && (f = d(), g && (r && Na(), g(f)));
  var u;
  if (r ? u = () => {
    var B = (
      /** @type {V} */
      t[e]
    );
    return B === void 0 ? d() : (l = !0, B);
  } : u = () => {
    var B = (
      /** @type {V} */
      t[e]
    );
    return B !== void 0 && (o = /** @type {V} */
    void 0), B === void 0 ? o : B;
  }, r && !(i & Ja))
    return u;
  if (g) {
    var w = t.$$legacy;
    return (
      /** @type {() => V} */
      function(B, Q) {
        return arguments.length > 0 ? ((!r || !Q || w || p) && g(Q ? u() : B), B) : u();
      }
    );
  }
  var v = !1, A = (i & qa ? Xi : ir)(() => (v = !1, u()));
  n && m(A);
  var O = (
    /** @type {Effect} */
    R
  );
  return (
    /** @type {() => V} */
    function(B, Q) {
      if (arguments.length > 0) {
        const de = Q ? m(A) : r && n ? X(B) : B;
        return C(A, de), v = !0, o !== void 0 && (o = de), B;
      }
      return Ut && v || O.f & et ? A.v : m(A);
    }
  );
}
function sl(t) {
  return new rl(t);
}
var Ze, Ee;
class rl {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    I(this, Ze);
    /** @type {Record<string, any>} */
    I(this, Ee);
    var n;
    var i = /* @__PURE__ */ new Map(), s = (a, o) => {
      var l = /* @__PURE__ */ fn(o, !1, !1);
      return i.set(a, l), l;
    };
    const r = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(a, o) {
          return m(i.get(o) ?? s(o, Reflect.get(a, o)));
        },
        has(a, o) {
          return o === Kr ? !0 : (m(i.get(o) ?? s(o, Reflect.get(a, o))), Reflect.has(a, o));
        },
        set(a, o, l) {
          return C(i.get(o) ?? s(o, l), l), Reflect.set(a, o, l);
        }
      }
    );
    y(this, Ee, (e.hydrate ? zo : lr)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: r,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((n = e == null ? void 0 : e.props) != null && n.$$host) || e.sync === !1) && Fe(), y(this, Ze, r.$$events);
    for (const a of Object.keys(c(this, Ee)))
      a === "$set" || a === "$destroy" || a === "$on" || os(this, a, {
        get() {
          return c(this, Ee)[a];
        },
        /** @param {any} value */
        set(o) {
          c(this, Ee)[a] = o;
        },
        enumerable: !0
      });
    c(this, Ee).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(r, a);
    }, c(this, Ee).$destroy = () => {
      Ws(c(this, Ee));
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    c(this, Ee).$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, i) {
    c(this, Ze)[e] = c(this, Ze)[e] || [];
    const s = (...r) => i.call(this, ...r);
    return c(this, Ze)[e].push(s), () => {
      c(this, Ze)[e] = c(this, Ze)[e].filter(
        /** @param {any} fn */
        (r) => r !== s
      );
    };
  }
  $destroy() {
    c(this, Ee).$destroy();
  }
}
Ze = new WeakMap(), Ee = new WeakMap();
let Hn;
typeof HTMLElement == "function" && (Hn = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, i, s) {
    super();
    /** The Svelte component constructor */
    G(this, "$$ctor");
    /** Slots */
    G(this, "$$s");
    /** @type {any} The Svelte component instance */
    G(this, "$$c");
    /** Whether or not the custom element is connected */
    G(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    G(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    G(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    G(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    G(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    G(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    G(this, "$$me");
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
          r !== "default" && (a.name = r), N(n, a);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const i = {}, s = nl(this);
      for (const r of this.$$s)
        r in s && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), i.default = !0) : i[r] = e(r));
      for (const r of this.attributes) {
        const n = this.$$g_p(r.name);
        n in this.$$d || (this.$$d[n] = ns(n, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = sl({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: i,
          $$host: this
        }
      }), this.$$me = yo(() => {
        Es(() => {
          var r;
          this.$$r = !0;
          for (const n of as(this.$$c)) {
            if (!((r = this.$$p_d[n]) != null && r.reflect)) continue;
            this.$$d[n] = this.$$c[n];
            const a = ns(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = ns(e, s, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [e]: this.$$d[e] }));
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
    return as(this.$$p_d).find(
      (i) => this.$$p_d[i].attribute === e || !this.$$p_d[i].attribute && i.toLowerCase() === e
    ) || e;
  }
});
function ns(t, e, i, s) {
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
function nl(t) {
  const e = {};
  return t.childNodes.forEach((i) => {
    e[
      /** @type {Element} node */
      i.slot || "default"
    ] = !0;
  }), e;
}
function Gt(t, e, i, s, r, n) {
  let a = class extends Hn {
    constructor() {
      super(t, i, r), this.$$p_d = e;
    }
    static get observedAttributes() {
      return as(e).map(
        (o) => (e[o].attribute || o).toLowerCase()
      );
    }
  };
  return as(e).forEach((o) => {
    os(a.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(l) {
        var h;
        l = ns(o, l, e), this.$$d[o] = l;
        var d = this.$$c;
        if (d) {
          var g = (h = Mt(d, o)) == null ? void 0 : h.get;
          g ? d[o] = l : d.$set({ [o]: l });
        }
      }
    });
  }), s.forEach((o) => {
    os(a.prototype, o, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[o];
      }
    });
  }), t.element = /** @type {any} */
  a, a;
}
function gr(t) {
  U === null && Jr(), xi && U.l !== null ? ol(U).m.push(t) : Ot(() => {
    const e = mt(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function al(t) {
  U === null && Jr(), gr(() => () => mt(t));
}
function ol(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
const ll = "5";
var Gr;
typeof window < "u" && ((Gr = window.__svelte ?? (window.__svelte = {})).v ?? (Gr.v = /* @__PURE__ */ new Set())).add(ll);
const dl = (t) => t;
function cl(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function Br(t) {
  const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    t,
    "px"
  ];
}
function gl(t, { delay: e = 0, duration: i = 400, easing: s = dl } = {}) {
  const r = +getComputedStyle(t).opacity;
  return {
    delay: e,
    duration: i,
    easing: s,
    css: (n) => `opacity: ${n * r}`
  };
}
function ul(t, { delay: e = 0, duration: i = 400, easing: s = cl, x: r = 0, y: n = 0, opacity: a = 0 } = {}) {
  const o = getComputedStyle(t), l = +o.opacity, d = o.transform === "none" ? "" : o.transform, g = l * (1 - a), [h, f] = Br(r), [p, u] = Br(n);
  return {
    delay: e,
    duration: i,
    easing: s,
    css: (w, v) => `
			transform: ${d} translate(${(1 - w) * h}${f}, ${(1 - w) * p}${u});
			opacity: ${l - g * v}`
  };
}
var _t, $t, ei, ti;
class fl {
  constructor() {
    I(this, _t);
    I(this, $t);
    I(this, ei);
    I(this, ti);
    y(this, _t, /* @__PURE__ */ M(!1)), y(this, $t, /* @__PURE__ */ M(!1)), y(this, ei, /* @__PURE__ */ M(!1)), y(this, ti, /* @__PURE__ */ M(!1));
  }
  get isOpen() {
    return m(c(this, _t));
  }
  set isOpen(e) {
    C(c(this, _t), e, !0);
  }
  get isMinimized() {
    return m(c(this, $t));
  }
  set isMinimized(e) {
    C(c(this, $t), e, !0);
  }
  get isLoading() {
    return m(c(this, ei));
  }
  set isLoading(e) {
    C(c(this, ei), e, !0);
  }
  get hasUnreadMessages() {
    return m(c(this, ti));
  }
  set hasUnreadMessages(e) {
    C(c(this, ti), e, !0);
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
_t = new WeakMap(), $t = new WeakMap(), ei = new WeakMap(), ti = new WeakMap();
const j = new fl(), ae = {
  /** Session timeout: 1 hour in milliseconds */
  SESSION_TIMEOUT: 60 * 60 * 1e3,
  /** WebSocket reconnection delay: 1 second */
  RECONNECT_DELAY: 1e3,
  /** Maximum WebSocket reconnection delay: 30 seconds */
  MAX_RECONNECT_DELAY_MS: 3e4,
  /** WebSocket heartbeat interval: 30 seconds */
  HEARTBEAT_INTERVAL: 30 * 1e3,
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
  STREAMING_BATCH_DELAY: 16
}, At = {
  /** Maximum message length */
  MAX_LENGTH: 4e3,
  /** Minimum message length */
  MIN_LENGTH: 1,
  /** Maximum message queue size to prevent memory leaks */
  MAX_QUEUE_SIZE: 50
}, Qr = {
  /** Visitor ID storage key */
  VISITOR_ID: "ai_chat_visitor_id",
  /** Session history storage key */
  SESSIONS: "ai_chat_sessions"
};
var ii, si, ri, ni, ai, oi;
class hl {
  constructor() {
    I(this, ii);
    I(this, si);
    I(this, ri);
    I(this, ni);
    I(this, ai);
    I(this, oi);
    y(this, ii, /* @__PURE__ */ M(X([]))), y(this, si, /* @__PURE__ */ M(null)), y(this, ri, /* @__PURE__ */ M(!1)), y(this, ni, /* @__PURE__ */ M(null)), y(this, ai, /* @__PURE__ */ M(null)), this.streamingBuffer = "", this.streamingTimeout = null, y(this, oi, /* @__PURE__ */ M(0));
  }
  get messages() {
    return m(c(this, ii));
  }
  set messages(e) {
    C(c(this, ii), e, !0);
  }
  get currentSession() {
    return m(c(this, si));
  }
  set currentSession(e) {
    C(c(this, si), e, !0);
  }
  get isTyping() {
    return m(c(this, ri));
  }
  set isTyping(e) {
    C(c(this, ri), e, !0);
  }
  get error() {
    return m(c(this, ni));
  }
  set error(e) {
    C(c(this, ni), e, !0);
  }
  get streamingMessageId() {
    return m(c(this, ai));
  }
  set streamingMessageId(e) {
    C(c(this, ai), e, !0);
  }
  get streamingUpdateSignal() {
    return m(c(this, oi));
  }
  set streamingUpdateSignal(e) {
    C(c(this, oi), e, !0);
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
        ae.STREAMING_BATCH_DELAY
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
const S = new hl(), Lr = {
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
}, Pe = {
  theme: "modern",
  position: "bottom-right",
  title: "AI Assistant",
  placeholder: "Type your message...",
  avatarEmoji: "🤖",
  initialMessage: void 0,
  debug: !1,
  autoInit: !0
}, Gn = {
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
    return Lr[t] || null;
  },
  /**
   * Convert property name to HTML attribute name
   */
  propertyToAttribute(t) {
    const i = Object.entries(Lr).find(([, s]) => s === t);
    return i ? i[0] : null;
  }
}, pl = [
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
  return pl.includes(t);
}
function xs(t) {
  return !t || typeof t != "string" ? !1 : /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(t);
}
function ur(t, e = "#6b46c1") {
  return xs(t) ? t : e;
}
function Yn(t) {
  if (!xs(t)) return t;
  if (t.length === 4) {
    const e = t.slice(1);
    return "#" + e[0] + e[0] + e[1] + e[1] + e[2] + e[2];
  }
  return t;
}
function Fn(t) {
  const e = Yn(t), i = parseInt(e.slice(1, 3), 16) / 255, s = parseInt(e.slice(3, 5), 16) / 255, r = parseInt(e.slice(5, 7), 16) / 255, n = Math.max(i, s, r), a = Math.min(i, s, r);
  let o = 0, l = 0;
  const d = (n + a) / 2;
  if (n !== a) {
    const g = n - a;
    switch (l = d > 0.5 ? g / (2 - n - a) : g / (n + a), n) {
      case i:
        o = ((s - r) / g + (s < r ? 6 : 0)) / 6;
        break;
      case s:
        o = ((r - i) / g + 2) / 6;
        break;
      case r:
        o = ((i - s) / g + 4) / 6;
        break;
    }
  }
  return { h: o * 360, s: l * 100, l: d * 100 };
}
function Wn(t, e, i) {
  e /= 100, i /= 100;
  const s = e * Math.min(i, 1 - i), r = (n) => {
    const a = (n + t / 30) % 12, o = i - s * Math.max(Math.min(a - 3, 9 - a, 1), -1);
    return Math.round(255 * o).toString(16).padStart(2, "0");
  };
  return `#${r(0)}${r(8)}${r(4)}`.toUpperCase();
}
function Re(t, e) {
  if (!xs(t)) return t;
  const i = Fn(t), s = Math.max(0, Math.min(100, i.l + e));
  return Wn(i.h, i.s, s);
}
const vl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  adjustColor: Re,
  expandHexColor: Yn,
  hexToHsl: Fn,
  hslToHex: Wn,
  isValidHexColor: xs,
  sanitizeHexColor: ur
}, Symbol.toStringTag, { value: "Module" }));
var li, di, ci, gi, ui, fi, hi, pi, vi, mi, wi;
class ml {
  constructor() {
    I(this, li);
    I(this, di);
    I(this, ci);
    I(this, gi);
    I(this, ui);
    I(this, fi);
    I(this, hi);
    I(this, pi);
    I(this, vi);
    I(this, mi);
    I(this, wi);
    y(this, li, /* @__PURE__ */ M("")), y(this, di, /* @__PURE__ */ M(X(Pe.theme))), y(this, ci, /* @__PURE__ */ M(X(Pe.position))), y(this, gi, /* @__PURE__ */ M(X(Pe.title))), y(this, ui, /* @__PURE__ */ M(X(Pe.logoUrl))), y(this, fi, /* @__PURE__ */ M(X(Pe.placeholder))), y(this, hi, /* @__PURE__ */ M(X(Pe.accentColor))), y(this, pi, /* @__PURE__ */ M(X(Pe.avatarEmoji))), y(this, vi, /* @__PURE__ */ M(X(Pe.companyName))), y(this, mi, /* @__PURE__ */ M(X(Pe.initialMessage))), y(this, wi, /* @__PURE__ */ M("default"));
  }
  get clientId() {
    return m(c(this, li));
  }
  set clientId(e) {
    C(c(this, li), e, !0);
  }
  get theme() {
    return m(c(this, di));
  }
  set theme(e) {
    C(c(this, di), e, !0);
  }
  get position() {
    return m(c(this, ci));
  }
  set position(e) {
    C(c(this, ci), e, !0);
  }
  get title() {
    return m(c(this, gi));
  }
  set title(e) {
    C(c(this, gi), e, !0);
  }
  get logoUrl() {
    return m(c(this, ui));
  }
  set logoUrl(e) {
    C(c(this, ui), e, !0);
  }
  get placeholder() {
    return m(c(this, fi));
  }
  set placeholder(e) {
    C(c(this, fi), e, !0);
  }
  get accentColor() {
    return m(c(this, hi));
  }
  set accentColor(e) {
    C(c(this, hi), e, !0);
  }
  get avatarEmoji() {
    return m(c(this, pi));
  }
  set avatarEmoji(e) {
    C(c(this, pi), e, !0);
  }
  get companyName() {
    return m(c(this, vi));
  }
  set companyName(e) {
    C(c(this, vi), e, !0);
  }
  get initialMessage() {
    return m(c(this, mi));
  }
  set initialMessage(e) {
    C(c(this, mi), e, !0);
  }
  get titleSource() {
    return m(c(this, wi));
  }
  set titleSource(e) {
    C(c(this, wi), e, !0);
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
      const n = Gn.attributeToProperty(r);
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
            i.accentColor = ur(a, this.accentColor);
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
    return this.accentColor && (e["--widget-primary"] = this.accentColor, e["--widget-primary-hover"] = Re(this.accentColor, -20), e["--widget-primary-light"] = Re(this.accentColor, 20), e["--widget-primary-dark"] = Re(this.accentColor, -30), e["--widget-gradient"] = `linear-gradient(135deg, ${this.accentColor} 0%, ${Re(this.accentColor, 20)} 100%)`, e["--widget-gradient-hover"] = `linear-gradient(135deg, ${Re(this.accentColor, -20)} 0%, ${this.accentColor} 100%)`), e;
  }
  applyTheme(e) {
    e.setAttribute("data-theme", this.theme);
    const i = this.cssVariables;
    for (const [s, r] of Object.entries(i))
      e.style.setProperty(s, r);
  }
  // Remove duplicate adjustColor method - using shared utility from color.ts
}
li = new WeakMap(), di = new WeakMap(), ci = new WeakMap(), gi = new WeakMap(), ui = new WeakMap(), fi = new WeakMap(), hi = new WeakMap(), pi = new WeakMap(), vi = new WeakMap(), mi = new WeakMap(), wi = new WeakMap();
const ft = new ml(), wl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  configStore: ft
}, Symbol.toStringTag, { value: "Module" })), bl = "data:image/png;base64,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", Al = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAACkQ0lEQVR42u39eZht21UWjL9jzrV2X/3pbpc+ISQQQkKA0BMgiDQqncr30SqKnyiKoILihwJiA6IC0ghEbD4JPzpFEFC6xEAQkkBIn5vu3nvu6etU1a7drjXn+P0xmzXX2mvvvXZXVTexnuck557ae7VzjDnGO97xDmJmxiI/DICW/vXazrPZk694jonPmH8o/vO8Qy36+aUu/SyeWdXrY4Bog6/pDO515VMscIB1rAex8Ldo+sGm/pqXuDqafhBe8NqWfThLn4Om/MOCvpZ4vbdHKzwzXsezm3d9a3x/tOH1scry4FUPsK71wEUHwKvfOG/swdPih+PlF+km1goR5U5MM3bCqhfBuHg/VHZ9F/FCN/Vc+ezX1rI/otKV8XIv/0wePS93MXSBVxnRAs+Dz+Zp06rOgM7SKlf3NnReXz5LR0lVUwBa/l544c/SRh82r/ul8AopBFV5brR82BwciKdc1bocYfV3zcvbBZ2J+S58C7zOu6Y1+wxeJALYQChIG/jsKk+EljgY05wL58nz0worwT0L5jU4Gwovc3NbE5VgFou+AV7mEnizxl36z7Rhd7Mg4EIoX4PzNplSB7CMF+dzvP/qSejyB6MF13Spw+AZv5vlW3j+SqMlHsvMZ1MFyOE5zpCXe228qNtYt/Ut+Iw3kkLREp+lxY5B0xxAJRSTabk46DwCuHNI9mmNC4Fog3khrXCRtOCCXOWS+Pze5SpOa9OpxzpMb6kUgMpCIDqz+z2z/Kjsw3wmW8D6MJgzXYmbOjqdz3VcuD2G1n9+wWu9mnIj4XN8sIRl4srpH54od9Ly63Kh58QXaGHyktXuiikHzXK4ua/Rao7lKfiz7nsQxRCGVzpRORuAzvthnHXoSMt9jOaVNKsQic5glXMlfgKV3gPD3QdP/nvuHmijr4XPxfBmk9mYF7gHXs91URkVeC7FkIPkh3AudNKlTnmW17nIuXjKCl0HaE9nc19rebQXiJb8lLy+Ja5XVPEycxfVNICYKy7STbwHXlckwBszvFwaQeu41sL3N0Jn3GCkcdGN/4JfHldJT+c6gFllJyoQPuaBErT+F17ZCdO63jQtSuGv5AGf8vkoLYC1fDAY2aYc6goPi7n88miBZy0WNRzCGZc+lrHrZQ12Su5JtMD5aLoH5DNfT3xxXg5X/z6f863whh8rr+lhr9o8tVw34BoAlYvhJUo+vyrhfQ6sT2e+cOl8/Mg8ktAya4Yu0PJZsYOSzvCdzGKJTnYDXvQwjZf/3Eb6SIpcKJq96C/2I14jf7oCwYjWaOu8yof5HB3JsvdSyIMX7YcLu01pYUGQMAepQpN9Kv7MAhqeakhw6XUvfxNP1dtf9T4v1H2v8WJWaAbasPGfZ6RBs93e1AiDq28yHHx2ogYeYBJcgRBT6TGSv/qpN1iFA0IbfK+VN+dVOqR5uSVAF2k5r1M4Zb2SYB8a+wPPNCFa7SlcYN571QdzlrJYm16F6zpWFbmz87AeUe6lls0H6dx29KIf22SHIs25fyrmWot69woLZRmsgtdw71V2ppUrNTQlZ13u6+vZbBd4maUYKM2+H3cuXps9VLhALo0AAj+0gADovF1xcfe2mj9kWGrth0LCuuHdY2PHZntkeio/46f2IhMzS0cVe4onPlqinlC1f6RcCWfxmsdmOhTnb6W8+tE3lxYuWUUhXvNF85xo54ISglZpSuQLepuC1rRQeM6TopUeMq3RClYxUKog+MibNeJl38nqL2G1z3LFhVLlmOdhOTML6gs+Jt7Ecl1OkG06CMhm16bKh/0QibWXeBxlT+dCPrGnZB5xNtdV9fIX7QE770cyUxa8+sUF8AXzxYzgzlht9ZyDlc0/Ql7/MzmX17hkcMmbPjWfzfsU1ZL6BW6H6ELZNC99P7w2tVeq+mE+5+c1R/iO1mTQ69OfOD9nQqv5k0rrda0CMVOkrMQmHl7WGcabeWkL5FC09POiUq/P02Of1S9mw76TFnF3IZZAG7iOwjus6iRpQ9dxUbzOzD24pBY9S2RpNtxCBQxg0UR1ihjI5FeqlxXnJkpceTWvvFJmlhEZYJpOhF5rbrfkwaaVaJkBzYzwtbudQAgy04s2eK3r4jmdCVv7QwDa8g4gv2BKFvcZDi1cddmcJevqrNdI5QGaRcfMDKUZkZwd9CmlQUQQYppXXx3hnLlJXEDcgy7CAtnQI5pZBajA8jm3m1qIhHRxlsPSh5k27XZapSb8vFIMKc1/DYcJ/vCdN/HmR+/g5t1jsAZarQgf/bxreOkLHsTeTts7AmmdxTkqv10sY172PEtNlF7+nhY51ArdgB/CP1V18cq0E3G2VqQ0QwrCnXtd/MAv/CF+9rXvxXvv9TBIUkCnxoMkQ4BTPNKO8Sc/9un46//Xp+AFz30IWjOIkE8L1nkPC9TWmD4IovFVPOlZRgAfHKnPGd3FLBdcNJYzfrBuF//pX3sr/s6r/hfe3wO2djpoxBLEClAKOk2h1RjpeITBoI/k6AQdjPFtX/Pp+Nt/6fOg2ej7EtHm8u6SL1940dcVM9lN7wVVe/YuRgQwLb596jfen9tPqjQiKfC9P/k7+Kb/8HvoXD3AdqcFZgKzhlYaKk2gkjH0eASdDIF0BILGeDTC6Imb+At/5mX4se/+C1CaVwcIl31k/4djttiDWPB5iUoea0EHtx65J5pxOXwuj5+Xv5nFHi9jpQK50sb4f+xn/ze+6Sdei4OHLqHdqIMhQFKCpASEAMgatd2RtGak4xSkFdoPXcGPv/q1+Pp/+OOQUkBr3tyjnzXAcskZJJvq1zi/H6r2CBZ0lmKpc05pz6SNcJxXM7J1npHO6i5WOJnJ+QXe/K4n8Q3/5tex/eAlCCawMIZPRCC43ZzBrE1pwZYGmTVYM9LxCI2HLuMHX/Vr+OlffA2kFFBKr9azyht6y7TYlyeDzdVcAl9Q98ALOQBe8GxltOGKLWlLdVZzeX/gmT58PofXvoAjyFSGGH/3B38V/ShGLCQ0maKu1hoqVdDa5P6sNFgpcJoCSoG1/cPmM5wkENt7+Jbv+Smc9gYQggx/gDZwL+dkRYyA6MQbf0Vntj6rZgJi6edPy6/o6hzo+a3JdF72Xyb5fc5bgWaD+P/vP34Mv/aGD2BnqwWlFKAZKkmhkzHSJEE6TqGSEdR4BE4TsE7BOgW0Mn+U+X+lU9RaMd77npv4qV96DYjIRAGb2C1pie/x6tdA4Yqcp2fDF8BjVbRJqvigvAMg2oiVrH0hnJ/X5flKtrRcnLO2K7QhwKt/9Y+gUg3SZofXKoVKxkjHKXSaQI2H4CQBVAKdjo0TUAlYpYDWNi1QgDZAIUUxfuaXXmfuU2QNz8tEzrTOXfaMpcKZ5iTbFxZcmA6yROcVsi4rmbz0dC/azI1NnZZ2Dui1FATNjN/54/cBtQhapWDN0MwQQgAkwNoYN6sUnI4DB2AiALZRACsN1tqkBPU63vS29+N+9xR7Wx2bBiw5mOICSO3SkuuFZiXbF25y0Px7ZCpxAGsV+56nrbxg/Xdpo6LNrZzpQN7ZrgbNDEGEk9MBHr91H1ISVDIGRARihhbCArUM1im0UoBKwdoYv04TkEq9AwBrQJs/JAXuHXXx+I3b2NvqmFSDVlD/nGYwayD8bNDXPwVAgAVs0D7naNq9LEVUKJ5snrbyospBtIGXfV4vYkM/6ThBMhyBOIZOxoBQIK0yIg8ztFY2ClCAMhgAVGojhhRw4CBrgDUEGEppDAaj9Sz8Gb20dMa2+0H/M+eBRNO+QaucjGemHdX16xbQJFyHJPX5phhlOX31QMK31QphADzFiCQALQzlV0hT5gODtcEHYME/VsqnANDaOAFWHhTUGoglYatVn782KjYCPRX5Pedyzes+Kc11AJu9kJVqu4zNKTFs+qaWaF9eLIswH97aauHqfg13nugBkQAzAVJDIwHBtgHbWj84KP1Z9N//XRsMgFiDE4W97QYevHrZXhdNv3SaDZDk+v+fYiHcqqnxUre74ecjVr0QPsuL3rDU1makr5f50OJTNImAVCnEUuDFz30Q1OuBOAXrMXQ6AtIxOBlnwJ8aG+Rfp74CkJUCTQRArCEIoEEfH/G8a9jd3oLWOucA5qZss6KBC2b8s6sadBbL9wzDikUdwJT1SBfmVrCw0Zx1dMCzrHfal6j6TbmPfukrXwZOBia0TxKwRfq1SsCpKf+xSqBT998KpDIykNv9WStTORj28UWf94kAkFGCzyhwOtNXtSzt+CkMDKy9GYjPMrw7l4R/wWOv4zxV+0CYwQykSYKX/pm/i7c+dopauwGlNQAyKkYMg/A7RSBr8LCAHysNhkkRBDQwSnBlj/D23/oJ7Gx1JlKAp0Qu/kHYULSuWxKbvMBlf7+wxt5Zbj8zOMhcVjpZx1uqCgSS4QHU6jX847/5peDjQ5O7WpSfVGpCfVvuMyxABWb731objEAziDWkiKAP7+KffetX2fCfS42fN7A+Zn2HFvgC4/yNfxMs0XXd0todAM0Kp/jihn8LJ4uLgnZrbqabdpzINu18/md9PL7+qz8Do8eegJSRrf27fN9xAIxj8D0Brv7PGrGMkTxxHV/9Na/El3/x50Ip5RWCJt85z7zOMgbtmdA5aKEMarMB9yZ0xdfgYWekAHNYOxcgrJp3CQvNeF9wosNGFWqWfdSuFGr1/yQxvvJvfi/+w39+LaIHrkIIQKWppQyTCfltVcA0WykIIQ0OeOMmvvTPvRz/6Ye+HQSxkB7AIuXLp34Q/RRHA9aFAVTS9FiwRnxRRyrPlf5aERZYC2xg8QAhCN/2z34C3/0DvwDFNWCrBWGdhMlZ2PL/7Ym7pxA0wt/++i/Ed/+9v+zTmqnGP+PGPhgGDYWY1jynvzm4Z/aRVznv7OnAGwW7FlgthYe/tsdxUUHEtWUqmRN4/R+8Gf/0B34a//P170Yfkc1LObsPpdHkET795c/Ht37Dn8MnvOyjyjUBZz2Gp8KmusFrPM9nsSzBbjlNwFU/sOLD2ZRg8WTEMUP9c15iuogf4hmYycrzDRhasc/f//H3vwp/79t+FNGlK0iViQKk0FB3b+K7/tHX4Vv/xtcCMHqCQogNhfKz4bxVUogL74POQhh2gYcQLQW2rPqBFX3DUiD7ogeedfRwysacz1Q67Qwfs2pXIYEgJWE0ThBHEtudFoAhoLpAmoJYgyIJ0Ag7u9vQmpGkKeq1uAAsYHF2ZtUHXUihaMXhMT5anOFJzs1R0MU6R7QoeFbpwS34dKt9fGVLmB8OLXrBRDOzmaU4Ec4IsOBDn/MZKQhCCKTMQNQE4iaILOovCJAtpEpDCIIUYvLBrULBnideH/7/MkgtTXGmMzzJBwP8tw4nVjoduIyXltuRNuiwZr6yKcqc6xUjXWKIJpX9ZyAgQite06q9BsEHBBEQ1QBZB8sIkDEQ1QFZA5E425XLc+6DlzfbMmTrPGXHlvkMz/mH9ROBZmij0YKLcSPPmmZvAOtyTpV0L3neZ2jllbGZ9SoAikAyBskYcE5gA/l+uXgOl0wEXf86omUd6ZQXwCsY+7L+u0pGyiuumVKXX96kwQsb0Zm7XDrDQ9EaNC7pzG4nf0wpACEBEZk/JEw2uGYPQGu4KzrPpbFEenjWE4fnSWzM65URs6IzLvEKVSi+zJMAGZeEZVUOdpY6jFUb96pQJ+YJzfKy51/xORhqrDF+EhIgaf5fEOgiT4njp8C1nMPot3mXRGX2RDMcAJVEalWwoInwq7CblNEhuUIImL8GXut6qdTZOO9DcwAImpIuLBKh8rItmDwjjyL7RwqwmxGwlDTvhm3zHI1q4XCCzta4Fz51SdQqpq3jZaPBmcq5PNs7zX8QtNp18HIPbdLBBdFQlXyWlqeCM1bX4efSvNz+UjtZbALxcjkJbWBhV550c0aRAZ8RXsOlq35zNynKdvtSBHWZm19k56rwopcaFsmF3GYd97Hs2lyiGYqYZlfFKrwgKq5kIv+SCfa/z6oCsFxAN99BbNgR0Mp4DVf6DU2L2DYUUogysINosZubNeJqVZRyUYvhac9uwdW2aGmxEvq7TBhQxWnSgo+RdRbyC5EBNKTP2ANMwUJ4fZytTaWLix+7OieBz+C5T8UAVn4QPDt1o7O7t0q/meZ9qYhdzAB+liZkrCu8XWDFCD8T0O7+zAaLIZrEZPhMfMDCu+3ZrZnV1+3Zqdgv97LE2i9uHli45kXFK35hHRryVCFPLIsoeF0rYYGb0BSE/jYSINcZyLTmh3NOP/yUOOQ5uLGqDoA3eMd0zofboCunCkQqOmf7yozdhC5GHZgrEJueQtZET4lDXogfMfVuz6rZehHAkZdYW+fhui8Icj3VS1khEKcJYCoNfHY8gP+jw3FhAiSx6ALlZc9U0dGsqrxOT4XFdt7XpDMxEEYQEXxIm8KHzg9VigDmfLnSTk1nbTi0nuXA57f8Nn1q7RSALWjhlJfc39dyT/xUNIUPzR+x1kfn3v6CTDW+aMuBzm/5bZ5LbvMuqwNoDN+CgWs4MV0Au2L8n5+qz0RUycvX/faLJA7a4BvnDT9F3sSypA3eiKv5Mxv9/2BGgKYldnS+eAucnmpWuMFT8RwVZrH2qKiCA1n7C6IzOldJ/rNuvI9XvBGudAtmOrAfEMLa/NvKD/H8vMFTIpins/MtM+X5g59ouuvAFOnbWf9SzSKYMqmrBYWD1/Soput1zVXsZUC7HZQLgY/Topp6Uzr/kJjnTNakOWEHBSmX/fuUlaC0BmkyoB8kmATyFyvAmqG0Np9VM4j/jBlz5DmnIpa7vGn4EJc42AqPwh/fCpe6JrQPxcx+2anWUfUj0fx/qaKBVZC7WoUpuIzkFi+R62tmPxVHCoKkZeuki9ztAqoZFY4naybYa8QSGNwHBg0gTYwjExIYddGoGTkw99mn4o9SGgyjhCw2SCn8oJgqQNPmAiy7Lc/eXC/EY6+qb8gAtDKTcIXIPtU9HeI9Tx7hAzeO8K4bR7h9PERvlGA4TqEdks6c0evttqUACGaryU8B4GaiCSKy37FjqG104OS7XQciaQ4k0jnT84eGq6tyoO0mNEPDDPWMBOEdT97Fm9/5HggpwVqbzwBIVYoXP//ZeP61AzNURAh7FIb2QIAGQ2RiL5zfvilIOpnyAYNvNrbX7+/bRgjavwt3/eZ3Jlpk33nJJEFg1GSE7XYNV/a38LyHD/DMRy7jOY9cRmerlTkDbYDOaRONFlthH5yDRFYaDLLWR7LGaTvZdS0oT27/W2mdE8Z8z/X7+I03vh+//keP4Q/fcxs3jwfopxpamGYaE3kyCMKkB37hG7INEUzPveZcGkDaxK/OYMMKgHMG9iVlEb79uyCH5ek8uCeER/j9+a1xMjNqtTrqrRaIlf83EINJYNAbIBn2A2oz+94BrYshfuAAwvop82S4xzpzBf5A9oVbJ2S8gs6fIzwmB2mT+5zWQKoAAup1iYd2OviYFzyCz/iY5+IzP+kj8KynXc0580Ucwby1cuaDSTb0vcABrLZ9z9tN6YyeUoUhPdnnCh9S2ix4IlMv/2+vexT//jfejte840kc9keQkUSjLlGT0oSYJoaabJ8OdmxniAim8Uz0DlBmoCHY4EZ4kbBDPrTdMcnsxdmOm0+wmfUkXmMNj5mhU2U9iPusuS4hhDF4e63uXAyy1YIAtwgTcDtxmHM3xX43pxBAyTkJ9pQER0jgkJREJlJiR1W2nyHfzOSPAqUZ4yRFOhwDozF2t+r4jI/5MPyFL/gEfM4rPgoAWewGuYjuQ/1n7ePBV3YAa/EWZtktMsYpVRqR3SF+6n++Df/6v74Jb/zAXXAksdWuIRYWANRmQbLfCcm32Dtsgy1ewG7BE+X+zUUH2Sy/QkhPBGKNzDVbRwD2DoXgjsX+Gjyrx4XhThbfXS9sFOJ3ZReSB9dipwFlF0Y2BOfg2vNpCYeGXTg3hxERa4AEiBmadW78m3Gawjoa7ZMKduF/6Dj8PXAuIiE4IBBIFGPU7QOJxie98CF889e8El/wWR878a7/jwNYlwPY9DZf2OWLwPM0zILnANBaM0gYZ/EHb7uOv/+Tr8Ovv/1J1Fsxtpo1QANKqUJdlYMIl3K7frgLTuyIVnTD76Yu+2U2unxh6O4MkRFk0JnTAevACChLOlgbeW83+DMXt9psnG0oboVBjP3onKPKVggBWgW/C1J/IltO9GFGdk7yD9g+Fxv9CFNtCA3aRBvsK8h+h2ftHaVzEDknFd5P4JRYaxABwuIYvdMBMBjg8z/xBfgnf+tL8ILnPQ1KaxvtzR97NrG8eOpIiLlLeCZUu6mRVws7gCXKY+c5GG3Zqb8G7CJorfFdP/k7+Of/9U1IawJ77TpUopCy9rsKBx4g3L0JBHalJ5+6BruWZr+Z+l3TpwPkIS+lUhshmHMKIXIrzduy1qEFGgdCwoz5Bqy2PwcRAXytn4UEtLIgI8CcwELmOSMGtAEqwzSGGGSHiBIBHAqJaGWvVXiDZBvF5Eqe4AlDyJxh/jesUlBUB8VN43ySETjpZd90kYGLJBBiDfAEJ1cJEFLg9LiP7Rj4J1//p/FXvvyVfgN4SqYEcwY2VTXBM0kBLmLhxYWBN+508ZXf88v4H297EpcPOpDMSJXKkHjAA3uwO2vY92sMwi58N2XX1qUdAAhmIKqDZAQ96ltHEGJaGp2tHTSbLUArHHW7GPZPIaS0DiIAxbQ2kt46BZEBHYk1qLVvDK9/6A3R7ZyivWciiP6hd0TMCqLeAWotcPdOLroQW5cBraB79zK+g1ZAXAfal4DhCTDqmnBeK6DWMsfp3QfUGNQ+ABpbwOAYundoKwccJDNB2pCzfesgtALVO6DWvqnvM4OZoAbH4P49Ey1pnVU7QkyAtU0vJnGVSAokGhjdPcRXfO7H4Ie+42vRatahVgUIz7xesL4zPIUSofUb/x8/eguv+Ls/jd949A4eOOgASiNJlQeMNAOaNVBrguqdXBMN2xzdLzqlABKo1+uIpIRSKqPdM4NkBMTNDDdjt3kq7O4dYG9/HwAjimM8eO0aWu0OWCV+4yQQWCvUmh3sXX0a4kYHWqW2wiDA9TZQb3vjz5hgBNTaQK1jyD+c0X+p1oJobINlzTgvldh7bYPqW4CsgXUK1zsgWvsQtQaove8dlwYBnUtAYxto7IC1Auods4vX2vlCIGeVDiJpBpMEY8rZgolEEqK5C6gE6f0nkR4/CU76EPU2KGqYc4TxeIChiOYuova+xUW0xy4YjCRVIFboXN3Hv/+lN+Azv/w7cPP2fUgpTMnwwq3Uaea/vjMIYJMEzosXXDjj//23PonP/rafwxP9Ea5s1ZGmKkPoPcDFgIwh27uI2jsQja1g8RHABAZBaUa90cTDDzyIB65exUPXHsTB3r5xHiCzUw97UN27oKBqwFojimNsddo4Pj7G7du3cOPmDYyGQ+zt7AY7Z7aqtHU+GWJOgEqB4akP4R14Zr6QgsdDYHwKTkceyCMAPDqFHo9A6dAGODF40IUaDaH7R8B4ACLpQ30e94E0AR/ftLm/iT4w6gPJGBidAiSgT24DSgHjgQ/R89UNZ5helCjDOpgBWQMoAo96oHQITobQQ3NsEhK+jTmsfOjUzDu0TkLUOyaSgAjwAvPMk3GC9pVd/O47buAV//d34LEnb0EKAaX00kv4LFf6OsfziXKPNb1Njy+SL1zwQShtjP8P33kDn/8Pfx49QejUIrPrB6GiF8pgBSIBCUCnY1AU5cNxaLDWiKMIVw8uIU1T3Lx9G6f9Pva2t9Fpb0Gp1KcCIgTg/DkYggRGozFYa6g0xWA0ApEAsSn3uc+REEgGXRzd/ADGgy5ISDCr4FGTLbXnj+/+Tsw5AhIXqhAMbUJ9pa2zUEGozmCdgpMxeHSa8Re0Mk4hGYBHXYMzjHsmmmAF1soaPHyaZB6dAtQ424ICvgJ0ajCHuAlENTPGrN4yV6jGKApJsAVYORmB08Q4aZWYfwsxBs4MPB0naO938PYbXXz2V3837tw9hJQCWi+nGXdmKELF6J8XcQBTb4c2dKPrGjCxiBaeZbc9cfMYX/wd/wU9CbSkQKo0PPuMM+PWWoFIQo+HUKM+SMZI+12QMWPvMJRWaDebkES4decueoM+7hzew2CcoNFo+J2Ytc5R+Jk1SABpkmAwGuNgdxfNVhtbW9vYbnfQ7/fA0N7bM2uL3IsAcAtMgPMAWx5kYCv9hTwox9oYiys5eqKRMTDhMAdXyiMJsDLRUVDWZCFNFGJLfCCZlRxdGsJB2TTYYCjneJXhHKRDcP8IotaAaF+G2LoGilvQg2MgHfnw3lcdLDDK6Qg87gFaQQ1Pg8pIUYnRXEEyTtHabeEd10/wBV/3T9HrD/KYz1M4E66q7you0k0QVxeUWOQVubU3Gib4su/+b3hilGKrFiNRyoekvvzmjTsr76nxEFIYZBp+R3a1aobWGhpALZZgzYhlBCkEUnt8BGUqr8bjclcC7h3eAQvC5f19HOztoz8a4P79e95w2Ap3uhw5q/fb3U1rAwS69CVg3OUHurHZkX2E4FaBMNUER8G1zkNnRAK/9ZBWPuf2NX6KgmcDG5VofywvP+b3FQrSAUty8kQjQzfW/UPo7h1AGGPXp3czgDPEDOyUIwYH2Cx7EpE3ec4IyWEpN01StPa28Po3X8df/tYfgbBVIV565PTFyJqrjuQQZ5LLcHXHUFVQYpHaq6H2Er713/4WXvve2zho1w0gVDAR1ll+6tcRLEGlUEt3u7IgiV6/h1QpXDq4hKuXLuPq5SsQQiAdjz1mwLk6vC1daZPlJ8M+bt24jlQxTnunuH3jCQRbf2b8JuuwHH4O+vphDJAMJTn0fFpra/CBDqADxrQ2RCClvDioMf7MyfjPaPYhtQ/ptQooCGnmoNjKj9vOSSLyVRXjt3RQKgUKtD7vJNTwxNJ9E+jBfdvBGEZqnIGK1rA5cJQOLMsHQ3piQSbjMVpX9/GffvH1+Fev+gUD4rpU5alQIVyh51xUMqxVpnssWLFYtwPSmhFJgV95/aP417/yFlw9aGOcqCBM5qwvHvkdKqOhatQloV6rG3TfFWDtIlRpips3n8RwNEKz0YJKUyRJgt3dPbQ621Bp4kNdF2JnfAENISTS8QhDpTBKlX8xZHf7HG5ADkdwO5sB/ZAMTAje2DGcALbAGDLyEvlwPHjXzkADK2GtjTN0FGZn5LIGTkaFF2YbkHw0lbEGncqQOZ4KcBXjBChMV3KsxwDi0y4qMZhIsQGJfUVGBxGJO5YOogvOFc9DbAMAVJKgdmkf3/I9P4c3v+09iNZRGVgGQFzTIIGqhxFLnYBWu7iNgymcIeYE4KQ3wt/6t7+FxnYDrEJQS2fNND4CyS9GIgk96kP1e9jev4JGexsqTQMGmWGUJckYt2/fwPUnH8ONG4/j9u1bYK2xf3AFjVYHaZIEXinYvTnj6Y81oDxTlz0j0BtG2EsQsgCFAcB09y7QPgDHTbA2IBgFu2So/gNvqIFGYEgrBmUGp1JQ6xJ43AcPjnx+zyoBNXYM4GcdkHOm7LUHDZNQtncRHzwCETdsBEMZeSeIZHxHo0pBsg4Rydw8U98f4TAD5wBDTUMO3HiZdfneC2TNWraPaiAk/uo//HGDAWFFrdSKyk604U1/Yv9eZTLQRY6AilJjjuX1r3769/C2W0dox9LTesO03HXVGYeQ4QDsZLPA6B7dxrDXxd7+ZbQ629Aq9V1qDIBs/7lmDRFFSMYj3Lr1JFKV4vKlq2h1tpAmY7d0g4WY7VCpZqhQqtsx/RzgFnzPg4quri+kIe4MjiG2rwFR00cCRcPIPJw2lQQSBrF3WfPwPkR9C4gaYDUGSILHPfDgnnE2RGCdgGrboKgB3b1pdQWDE7kd2VU6RAQhYwskWsxFpzZFKvQnqAQUtyA6l8FaGzIRG2DWpV6aNYRjCbIGCeHTK+/YbLNW2ITEWhmH5SMF9v0dSmk0tlr4X294D179X18LIQSUVuuN0teUUqyyBxM+yBxAmXSGZoP6X791hB/6pT/E3m4bKk0n8visoJSBVay1r+FnNkc4PryF034Pnb1LqLe2vBPIACx4UE5IgSQZ497tG0jSBHsH19Do7CBNxwZfd6GrzkqOqXI5e3idFGxc9hotNz9rt4VnCKruLXAyAHYeAMvYGDZrG3XAGwlIAMkAPDiC2H4IIAliQ2biQReqfx+0ddU4AZ0CSd84OwZIJUCtDWp0oLo3LI9feAMOux5db0J6ehejux+AGnbNstMKsrWHePchQESmdGlLgFTfguwYNqI6vmmckC0Sso3couYuotYBotZBHulFUHFw0YHjbLCGqLUhW7sZnyLXNKYNuarVxnf+0C9gNBqZfgLOv95lUlXa8Oa37Hc/aFuiXMPID/7cH+DmMEHNdee5XUkXBmOwBskYcvsK5NaBMdJcDkgQJNC9exPDXhc7e5fR7OxA6TQTAfGlKRNNSCGgxkPcufUkJCvsX7piHUdiQbQsBREkkTIjQQyIyIfPYQmLbRmQRGQ4/VqZUNzz4i3w171jrknIoDFJmzp/UJYEEXTvHnh4Atp+0PxKKUBGwPA+dP8QcusBUFQLBokocK0FijvQp7d8G3CYSrlN1ztR57jSse2FMPG2aGyDohpErWN7FACQhGjtAzpBenrTpDKQPqIwI8xdvwFnmIEfcBJi/2QdC4OhQFEDUXsPUXMbtdauJQrlmYqsGfVOE2979AZ+7pdfB0EEpZTfKGjDBo0zdCyEYDz4OtwQb7aWsEDZjyGlwL3jPn7qNe/C7lbDUnXDSNguJLIoFzOouQ2KIkM6abTtThug4TbUP7ZOYG//MtqdXaRpGjgXG01oDa01hIig0zFu3XwC41GC9u5ls8tq7Xc12+IGdO8Bsgaxfc0uRmUrALZ8CDZhdGsv5xgIGdEna9AxpB5DxOH8TheMCKcoAvfugkddiJ2HPLmHKQL3j8CDI1DnqlXi0YCIQVET3LsT9htnKZNWlitgA0x2VYgwPTBVCz04Ao8HUIMTQMgMsANDj3ugNPHMv6wsa4xWDe4j7d6FPr2bi+YyLAG5LkEnfy4QtGP7iMIBjcgqKs0WfuinfsOmL2LjK/q8LEasxZ1N8IbO1j8WH56ywNnP/9bb8IGTHuJIOE5KJjcFV6rWfoEZhNuAVnGt4Q3Vl5Vch5kQOLp3E6enx9jeu4zO9p5JBygD57JeeZNnjwYDHHdP0U+tIeeu3pbYhifAyQ1wVDMNNTq1+b7yKLpOBlDdO4GWAAd1+YBX65uWKAPmON8c45XEZAQ+vQM9OIHYetCcS6eAjKAHh+DRKeTWVTDbsWL9Q5iOQUdwsk5AJYY6vf2AQdTSYf56XORlnUB6eg/joyfBauyLsYQsomESNkrKNRFkBj7qmygjiAqIZI4jKLwuA0EnQ4y7dzHuHSI5PTSRmu3CdBgrkWn/jjtN/O6b34s3/fG7PDdgkyZO5+QsxFI7Pa94gWt2d0UpACHMS3/1a96JuF6z4X5enEJrbTYot1MIAR6dIj26BYwGaDRaaO9dzcAyUK6GLshEAv3TY+zsX0Z7ax8qVQHX3faz2/xbCLIKWFzgwzvwUYFkBBqfAsnIE158uSwolcECZ66ebpqXwkYlW8HgAEfwNOCAbaUVOE0sfhAB/XvQ41PQzsPmOWkFkjG4fwge9yE6V20XnqsSGB0DsmxCsXUZ0fZDJnc/etKw8lwvAQkDeoaCAiRAQoDs+zJe2lQfyOEVgeiIeaYZR4Mdv4BMtCRb+5BxA3rU9c+LkXVvkhDQ4z5U/8Qo4ja2IOK6ZSDmBU0ka6RjhZ/5ld8NypGrrF1am++gs3QAPHOnX/JWaXP+gK2s16NP3MMfvO8O2o0YWulcnqKDZpxMgMOGqekISfcOxqdHaDQb2Nm/Zo1W2w0+azMlEji+dwv97jF2Dq6gs7MHrcK8MliEjs8fbjWWwGKiBfsqLI3WaxoF3XJAIDcWhLdaJ0VRMNNHwAG6TiHL0YTqIm4iau9mWIiMgP4hMOoaTADwgCP37oHVEKKxZQze7cbpGIhiRLtPg6i1kBxfhzq9ZZ1UqAxq0HeDwHMm3+2JO5yJogYyZWRDc8o0k4KSn70XlSJq7kDWW0h690z64HUXAqoBG+1DEBA1OogbW4hauyBZy0RY7fVorYF2C7/0mjcjTVNIKcBnIXPBJf9P6443FnAAk3LsfE4jvrkSAut43L/5psdwNEgghW2ocTtikDOHf9gvKtO9Nzi+i0H3GI1WC7uXrvkGG4/ce2INcP/Ok+h376O1cwmyVre7dgBGufOyKfOxdT7EnI3nDo7vFXFDjkJQx/d1dK0hohqi1k7+mWjTN0DIs/58FGRz9bizh8bu1Yx6w2xy8f498LALsfWAZQJqUwrsH0Lbjj+DByYQjR1Eu4+A0yHSw8eAdJBfVioBdGJ261ob1NgBRU0vfuIdFoXvOaxYIKBDF1aLTY+i1i5EvYO0d2iNX/qSbuYoyYsYhXqGFPYLcFB81QqyHuOtjz6Jt7zjfSAKoqxNxuk0o7Q15fC8yQhg8hrOC//MQKx8O2T+9l3u/dtvfj9EZJtWEKLSnFFP7WoIloFffEJKnB7dQe/4PtqdDvauPGQq3Wz0NDOlHUN77XaPcawokO4KKbk6aLihAE3m4KyFngE4bFJ7LKEQ6kDICJ3LD2Pr4AHUtw5MPpvDA5C1/1IEz803NQ2Mjm+jd/d9OSUd4wQiYHBogMGtq76ebgCyxJfrZOsSROcS0u5tpCdPmnckIpvaKJPW1LcgOlchW5dMdJP0wUkfnCYQtRZquw96g0UIUvoyLOfnguRqvQqyuQNR30bau2+MX8a+MkHBs2JObfpAICmRDrsYd++aiCEd5Tc8qxYbS4IaKfzW69+STwPOs+5Xcnha4fRPzTLglGk6zEbiazhK8EfvvYtWo+YbXzI2XNaSS6E6rcu32RkeQwqJ7uFtdO8fotlqY//yAzaMhBtHY2i0gkwffKAp4HTu3E6VzRLRkylQTkMQucjEhfuEsBBNmUCv/YtwPHlkFGHW2hjk4D5IRhDty4bAYxJi0zo7HpvvOq5A4AT04L7RAKg1Tf+/jY5YpxCtA1BjG+r4BnT/yGgJQFgAUYNqHcidh0D1LehRD6p7E3p4lNGTSYDTMdTo1PISArAycATsnUGQvxGBdQrZ3IFs7CDtm50fgSMhZM6YZIyofcn+Xvm+Bp0MTZs3yRwDNNRlRCzx2j94W8bDuIgl7xn/MO96o3VexMw+gjMIHFxq/b6bR3ji6BRxveb7uzk3lsvkh0plHWtOrJIdqmx3PBFJnBzdBhGwvbMPcfkBHN65kROTZKUhYuQ48LlmF/ccXGNOQO/1oFjARxAIZEBDLUHk+xVYJ+jefRxRvY3R6WHW/y4EKJDBJp1CnTwJsf0gqHkJ6N/z7cSZejHyAKEF7nh4lAlyWk0A0bkMUWsjPX7CkI4osiFWAkRNSCvlpXr3oZOe7WmI8uKgRLbWf2gdS5DmaZ1LgvNYiGEQyobZ+dXgyACXQlrSUYBSWycYtXcgojpE1IcaJxml2OIB/l1wXvtRqRSoN/DW915HkiSI4zhgaF7Q/RA8fyDgqlWAhSIeWv/z4hkOAAAev3mM0/4YEVFOOyY8glbaDMlomHxUp6ld5Jn3d4YhhMTx4R10j++j2WobApAV+uAAPHL7Dof5vEPKazVDepExKI4BKSFs7Rs64LSHk30CAY/8zABbmSCCHg8xOr4TAGNk0f0RRGvPUmStrt7JDYhaE2SJNhm3nvMlHs4vESJpd90EorULUW8jPb4OTgYgEQMw1y/alxBtXYVOekiPn4AedW0npbBlwzDislOGohgkpamAiAhC1jLnShnw58BPYgVZ34Js7kANT0zHIDLhDw7VUJkRdy6BhERyeg86GViH5+wkawyiQBOCglEZFAs8caeLJ2/e8dnc2tDrjXx/sYQ9WsHVLBMPrMX6iWbBhIT3XD/M6+R7xN3kcRoaB5cuo9PZhmKA0xSHh3cw6HchAuIJ215/AkFIgePDO9CNDlJrUAE6ZwzeOgURNwAZmc8kY6jhAFAjYDgGRXVw/z4gJGQUm8/VW2b30QlIpUGnHBXQHi4MHbGuQsosXDZTTcCnt0GdyxCdq9Cnt027rk6hjp80Ahvty+DTO2aXR6Eb103f4cAIlYKodUy+fXTdYAEUQevUpxcgAXXypBHmIOFDbnIGCgZRbEAUIrDSQDLyqkGmvVjAMP9SkOUoeDJWOjJU3uYu1PAEeniUsR2DjkfnlKPOZSPk0rsHPe6bKCEHZAc9AjYtcpCx+TdCJAV6RyO874m7ePojD+al1mmtW/fZf3+dKcC8K1ubS6D5DvH24YmZNReg725dK6Wws7OLdmcbR8dHGA4H2N3bx/6ly7h5fQitUyAYuhHmoyQE+qmJHnICobZeTvUtgATSwxtIu4dQvWOoYc80vSiVGZWQFjAToLgG2dpB1NmH3DmAiOuguAFOhvnoglAeDQBB3mvTDNtEpLu3QK0DoH0Z3L1pc+gU+uRJiK0HgPYB9OltCBmb74QgqYyMwaSJEfgQhqKrTm7ZBqHIRBFRA7JzBZwMoXq3zTPzoh0WOBNsS20aejSA7nehR6fQyQicppnIiV8o7CnPFMUQjRZErY1o+zJk5wBp7z7U4AiAC/tdudXOKSBC1D4AiRjp6R3oZGSwkBDp95wMPTHPwVcYAg7F0Ul3MySWNRpJpa8XZmZEZ3V9tAk4oHBB7q/H/XFGLgl2NWfOjUYLw+EI9w/v2vCbcfnKA4jjOgb9kY8CsnRQZ1LaXmTCKgQJCVlvQ/W6GD/2qxjffNRIfxMZQ5eRQdVF5IHDsPTIyRj6/k0k966DZATZ7KD2yIsQX3oYHNUMsh8EGl42iWEFRikXvmZsOrOI9ekdiPYlyK1rSE9u+Nq7On4CYusBiPYV6N4d65Rs6QEKFLUh620kJ7cAZsjOAVT/0ITR0tCbZb0F0boEPTyB7h8aHKXwQiiug5MR1MlNqO4hdDLMZhGQsCWVqKAEE9RkxkPo0QDgu1DHdxBtXwJqDdOfoFLf5OTwE4AQt68AQiLt3oJOjfH7+QG+QdA6zSg257NSY46+7FrDjT4K43037qHoI85g31z/1wv2Em3y+nhKuWJT0YD7z8PeyNqZDna2DDFPrZBnrVbHeDREHNdAYCi3myCT4Q6lwfz/24qBbG5BjYYYvOcPMbz9uDlPvQE0WigSo83wUPaLy1QEyexiMvYLPh32kL79NRCNLdSvPB3xpYdMVOIkwHMKukBxwo5nwAVimHx6G7pzGXLrKnT3tum4A0EfX7fpwCWTDojIoEIsocc96PEArFLI1i44TaAHx8agVQKK65DtS1D9Ix+KM7vBJmwNNEF69zrUyR3fsoyohkyJ1LgLEdZ3OZPtYlDmmIig0hHU3Q+ARATZ2YfYOjAYh04AmK7DyKYixvjH9ro0clOVYBq/otaedQ4MVmOkvcMSxp8RX+keD5beGi8UbFi4mGiT8QaddYnUGu9onGZ4gRe5cLV/xmn3GPtXHsD+wRUkSYJ6q4X+YIBkNMgBgZ5+63YNuD58hqi3ML71fgze/xboNAXqTTthx4BIQrAR/VQApxKspO09IIA0IBiINCABKUzaoTUZZxDXodMEg8ffiuTwOuoPPx+yuQU9HpSoPbo8lgLgEMH4MJPjs40EROcK9OlN030nJPTpTUPxbV0C9+9YJiLstB+T35OsQZ3eNbMNVAoSMeTWVaT9I6jhkY2YbA5OBthTJ/eQ3HvC7NLSdTjaDjRSIKmhtACnBKUiMz/dGV2kgYhBkiGFHQqiYa7NKjOnJ3dBvWNEe9eAWgMCBGlbg9PuLVNudKmID/vJRwlRcx8EIO0fgWQMUWtDNHehTu/69+iYmq6HYXoCQOdJCVhp04zK7LmSx6LVnMOyfobDWr4rllnjVorBkpCmgWqOzg+eECQw7ndx/w6hs70HWWvg9PQUp4e3snzQj+UOJ+3a3UpKIK7j9C2vwfjuDaDRNBNzLPNOSA2lCaovgSQC6ozLnRQP75xgt50iEgyVEo5GMW4c1XDztA41EkCsgWYCKRhasRm9VW8hHfag3v37qD/wHMhLD5tQFeTpsrm0NeQVBAKZhhYrbDpwGdS+DNW9ZZ2AMIIenaug5j70yJTUSFrIW9ahhl0r9GmaJ6L2JfDwFDw8hhBxABiasD659T6kJ/eAuGaeDbtnZ0Q3VD8GhhJoMB7YHeOhnRNs1zWk1NAE3B/U8PhhA3eOY6SpAOIE1FQQBChtqhqIYjBrJHcfh+wcoPbQh4G1QtK9bWjHbghKcX4Aa4i4BSJC2juEGvfszEECyYZROOZQD9CJhyqkqfKtwSHb29G5FxkxdlGigmiiiL6OC6P1Oyy2ApdSShumT54kshtRLQoAn5wuvN0JZIRR9wgsJOLtSxgOh2Znk5HtLstCap9bawWKG0A6xunv/zLGx3eBVsfTbqVkKBDUcROiAXzK8+/j8z7yJj7xWXfxzIMT7DXHqEmnVQYkinAyqOE99zv4vfdexi++7Rp+4117UCMC2kNIwWaxyxgMYPjEuxAPT1F/+MOAZOznBFDAbKSobvJlQeEwwSxHFgLq9A5Eex+ycwW6e8uHxap7yzTTtA5sKVNZjKJva/1GxEO0L4F1AjU4tOF5xhkAa4yvvxt61ANqDb/7SmGd4nEdog582vOP8fkvvo6XP/Munn15gL3aAFIwIAGkwEgJHJ7G+MDRFl7//kv4uT+6hte+aw9KAbQ1slRd49QQCajTuxjdIIjOngFkw1wplH8KZzoEpcasv8BuAJrzyJXWaNbriCKJyC2y0jI02xZwObcUT+veGZe1r3OZDWgj1qrXr6y4BgAkqcI7H72Ox2/ew2F3gOFoDK0VdDo2gJlQ+Hf/6zb+8IkTtBvSlPnC2q4r8WmF2t41iEYbanCK5P5NU05zHP0QBlQaJE1XW+/tr0c6OAEaHdMyCwEZa6iTGHUZ4Ss+6Ql83ae9By+5dgSIFBhLKBUhUeQbTYgYpBUkKcQSQM1Uvt5wfR8//FvPxk++7kEkIMitEVQaAGTjAaKdK2g87QXgdISs6UehvvcA4tYuhodPQvWPAvls5MkrrA3PvXUJFNWgujeNEpCvpYeVBkcdNtwCUW9DNHaRntjJQJ59aL47vv5OG/LXfL02Egppt4ZGRPjKT3oSf/HT3oOXXj0CSQWMBJSKkDJZ7o+2fUsKEWnzbBomO/i9D1zBD/z2s/Gff+8aIFNEbYU0pazlWY0hai2IvWu+WxIIVZBhAFzSEFETorlryqKjHkRUg6i1oUenSPuHlh5juwIlIe0O8Tkvfz6+4DM/HIkWqEc1CBlBSIFmo4aDzhae9YxrePYzHgloGoWhoxUMdqPDgUsPyBd/OKgb5XX/6BQ/+P/9T7z6196I9z55F/2xMuBPqgE1BNKx+dO/i9aLPx31/YfAyTAYyc2ZGi0ZFdv67lWI1hbSUR/JvetBzpiNyna7BkmJ3lt/B+loANTqfpw2EaC7LXzmCw/xT77kj/DSZ9wF+hKjcQNaShcV22eflQ9ZWb68AnRinE6roYAG8HuPX8Y3/8yL8dq370DsDCz2YMQ/Meoj3nsAtQefA05GlsGoUNu9iqi9h/HhdaT9YztAM4tgtE4t4zEyrEilIdsHgIyhT28bSmwAJBJJIFd2JERbl5H2j8HjPkha2q0gEBPG199lQLcoziahE4PvN/HKl9zDP/3SP8aLH7gHDCWG4zq0EBCRgCCrjIxA7symeFoxdKIhtUazxkAb+I33PIBv+pmPxJve10G0M0SqRLajpwlEcwty53LWs4CA3ckKotaEbGx7CjAcAJuMoAb3S0hXGlRrQN1+Arj3XiA2MxMh62bDEKaK0Nxu4MXPfhB/4c++El/9ZX8SgmR+6OgiDmDeZ9foHXIO4NzzksIFuAf4mte/HV/z//47vOfmEahVR6NmBm+YDjozBorTFKwTcO8+6k9/EWj7shkVhSLjK2QUCdT2HwDiOtLBKdThdeP9PZHMUnPjOnrv+n0kJ/eAesto/gmr3HvawHd86Tvx9/7EO0BjiUHSgIhNDk3WQWR6t67nwIJsOmtnZaWgUg1OCZ2GRlon/IP//mJ89y8+B3K7B80yK7GNh6hffQaiSw8ZJ+BSNxnbxhbhy15GpLSG2tYB1HiA5PS+VwtmrQxbMGqY2XsOLVcJOB1mXX9sqLckIqQODHRceSGR3no/1KBrcn6tvTgwBi181xe/A9/y2W8DjSIMkjpETZid0UmD5erEOptgpFOrHKQApZCmGpwCnRbjNIrwDa9+MX7iNx+G3EugXDjJBKgEcvsSRGs7G1YCgNUYstaGbG5DjYfW2AUgIhDMYFSmAvHKPXGKQINDYHAPqG0ZQNOVdy1LMtUa6I+AQR+f/LEfhh/9nm/E85/z9Fz0uqgZnIU9bjQCWOUGnPH/9998E77wb/0oxvUGOp0a1DiFtvmpI75oNTajqXQK3TtE4xkfBblz2fyb3b08sYezcVVaawgSBkmut6H6x1CH120KYBB/arSQ3HgPBo+/04T9rEGCQJoRjVv4d1/7Bvz5j38vRkcdcBQjqkmAbBVCCCOowSp3bt9iy6aPwEhsp0BqWIBKEaRmNA4YP/K7z8HXverFEJ1R0AtEQDJG4+HnQzQ7AUFI+25DtnwBThO0rz4TFNcBEPp3HoNO+l6dl8Gg+ravlTNrkBqbPJ4skUdKyNYBVO/QqPc45xvVkR7dRnrvCVP+1Kb6wYpQT+v491/7BnzJSz6AUbcF1GqQkQSQ2BkDbjpwIMbhoi7NICupBqWME7AzC9MEiBio7zP+wa9+BL7j5z4ccqcHrR0HgUA6hdi9Zs5hWYay1oJs7ECN+1DDY5/aeLp2MHSEi4CqkGa0et85AJnjdrjKEQkJGccYHx7jynaMX/n/vgsf/cLnWlxAXJiNNfyR3/7t3/7tmwozaEnHoOwDe+ej1/E5f/X7MW420KxJpEmak8Z2KD2F4E4yRLR7FaLe9tNyMu0ryo2JMYqvCqp3DKo1IJrbQNwGGtugxhbE1iWQ1ui95bW2tm+AN0EA92v4j3/lD/DnX/IBDI63IVsxhNQgdQxEu0DjMkQEQB0a45MSJG3jse0eNH+l3Dw/T+sRwLBL+ITnHeLBgzF+8Q+ehqg+Mrx6i1rr/gmi7YN833vGEspCWFmHqDXBOkXSPQwGZzgpNNuiO+5Dj3tG5MORlrQC1TpmwvGom+X9JIBkhOTOB0xtn8kOQNUQwxZ++q//Ab7wxY+h391G1K5B0BCshkBtD6K2AyIF5hOIqGEJU66r0gqkuIu0jU3kuy/NGLa0R3jli24jgcRr3nAFUSuFZpG1eKsE8d5DEFENstaCqHegkkHQOxA0JdEkWW1iH06HQDoCy5rtjbDncv/vAhelUGs3cXI6xv/87f+Nr/jCV6Ber2WR6AUp/812ADNb+2hlBzGfrmhq6F/9rT+KP37iEO12w8htTft2OPllPES0cxmi0crPx2Pkp8P4mqJZALp3YgUoHaVWQUQ1DN7620gHXbvIASk11HEL3/flb8Nf/KRHMehuI2rFIDECyW2I5/4tiOf+DYiH/zTo2p8G166Cen9gGl5IWEiCjDOgvLiFCKBHwyUARj2Blz//HlQk8VtvfACynRg8QEqrsisQtbaNmm/x3myJSo1OocdDpL37ZiJvWCr0o7ucQIb0Yh0ODJWNbehR19bWbXuyjJHefdzQgu1ziySgjtr44a9+M77sZe9D/6SNersO0n2g/gzID/8WyOf+VeChPwW69mdAcgvceyMQCQhX3QlwPZ/a+OEdbPUOTBSWnBA++yW38K6jHbz53fuQrRTMwg5KGUPWmrbPgqGTvpEk9zbtWrQDfYZcMhz8t5Dg8QBIR4Y56FiMJDNdCXL0MaNJWWs1cffxO+gPT/EnP+PjoYqg4FmG2rRECrAMDrGOnMXlTK9747vxyV/zPWgd7EInaUgCsOfKJspAJWa3ZwXuH6H+yAsgti8B6di3+U68VNs0k5seqwMpqqiG9OQeeo++wYb+bEp9JzH+7CfcwU/9xd/F8LgD2YoASkDRVYiXfj9o5xnA+Nhy4gmIr4Gv/xTo8X8MjrZs5YDMhCKtzP8rDaTaKBcrbfPeBJyabUUnQH0feOX3fxp+4517kO0EioU3jvpDz/dAI+d4UcEgTDdLwCfo5CMFtorJWSdtMB5dNiEaHajeXYuOG40BPehhfPt9vs4fkUbabeIrPuUGfvKrfgeD4y1E7RisTiF2Pw7io7/XqC2nXeucJLh2Fbj+H8Ef+G5QvJNpHSqTBnBqUiVWOnsuqTICrIqhlUkHhq0IL/unn4l335GgBqDt3AUSEnL3ir2/vHio3/G9oxQ+rfSaju5pisgIoQ6PgbiVpQBkhqpQ5rFyqQNBoKEHeNv/+EE8/aEH1pgKTLG0CdIM5vbOiGV36U0YP5CprvzCr70RDAERzrlHoNqD4uRbpzGXyW1zwOAKL5wD4c5856uwyK5hs43vPWEQX7cDpRIHu4Tv/eI/gurVIOsSEGbAp3zRd4G2HwEGt2y6YcpZGH0AuPJKoPNsEA1BkaHbkjAcWBP2woTAUvhOOcOTz5rj5IDxfX/2zWjE0vL/4SWx0tN7AITtXOS8/LfTQXAMv0D9JxcGMwJHST6sFXHTVFM4v0umXcuYg0ljVBLjwYMxvueL3oS0a58NUojoEuRHfScoFsDoLrIDpaDRExDX/jRo+6NAYgiKbSoQUf55SNM4ZXKM7JkJyUg0sI0E/+JL3wxOmsEOL8ymMB6Z6MthIzliWLYpMJsNRLPygG3ItKQcR0ZkBk95cn1GOyDISKB/f4Rf/LXfs/sLL2TiC2/pC47wo6kOYNqMbl4hrJ9/V6aV1pZN3viuDwD1uPDQcvubB338QBgKVd85J0CRtb1rswunCZCOMymqgDREJKEHp0hP7gOxKRNJwdC9Or7xle/CQzunGOs6KJJA2geufjZw8GJgdA+Q9UyN2xoyiTq4+QgYY0AaFVxj3CJb3PbficiHmK5LTQhGbyDwoiv38JUv/wD0SQQZWUOVEvr0yE/qDXNYPwHYTPzIyE1OrTgYl5XhBhn11TACJXQ6zAgzJGyDTh9WBQUkNLgf45s/+9243B4hEbYSogfA074MaF0B0h4ga9kcBCdwQhK09SKAxiaHkOb+zTMyToCIwNZhevxEmOPImNE/JXzuh13HK1/0JPRpzZCKrINUo15ecJRKlhJriKiBuLMPIaNMTg3BxAEvLRjGWQXpN805khEzg+IIb3jLOxdm/9Aso1lElZtn/Y7zDiA3v4wpR5zK0/LWC0SEOjdmEovG/dO+QVcDDr9/1iHJJQRyHOvPyX0FZDCX1zOE6ZPfexi0dcn/u+N+s9KAjJDcv+172UkQ0jTC1YMEf+nl74Ua1AzXRVjg69InAnpkQkNCNmPPPkNTDlSgyBi82eWy3Q3S5aPCg2EkCCyyHYZihj4F/tqnvAP1BqAUWZxOQqvELHQ3tJO1FxnN0G0KNceMxgHZMljcClID9xkzBMSQgNKMHyEk1LBnZcMIQgBqHOHhqyN8xce9D2m/hig2Dg6iBtp7MUiPMrVjn9dneTNDWcMn7xT9H6vWREJYDCVzjp5fIQCMgW98xXsAyGz4pTCyZ1ql3uFxwbTdSLW4tQMhJOLWbiAOC+QmhOYql1zMt4L1nZ2LI4nHnjyykdIy+jtTRv9W3YypkPkCBdxpWghPM9h6VN07cQV/UZziqrRGkmqAtB/xDM0WEYYZHimjgjhGKIGfDfHwg3dsZ6DYewho74FFDLQvA3sPB1N9tM+Xk5N7ZmAGGFIA6Mf4sy+9jkvtAcaqEexQEdA8ADhFdrKgjixicNoFRu83AzsFmxBXEGC5AhDWMBxAKMziFU6sQwBSMIYJ4YUPnOAzP/wOuN+AEBnar61RGs27jAPPbnwY8jMMtU6B+g6obYQ9RecqEDetArDNh4U0IJ+PkiyTcNizQhyAIAaGMf7cxzyB/eYICceZ6loU+7Fi4QQhQmb84BQ0focBWYkn0yO385NzCNbYRBaGC8kY9Qmf9qw7eNHTT6AHApI8LG/WC8lAaxE5ZWBo9s1DOh3n2IP5/l8y5dWwdZnIaiPoIM0KIxwymAWWnydYakOLSOvPiALErM2Zlt3SC5+gKjdf8AK+zs+u2ceEnqPH34rhB96M9PBJw0bjTOsvlJb2+IDbCbUCGltgWQMfXgffex/4+DoQ1UGNLStWaZtmxkOo0SkQRTBDNwBIgT/14ifAqQRFpvZrnI8CRocgigw7MBdaJkB0AD76FSB5DCQaJpJxuawvbZmRY/AzAoL/F1kIymS48p//UU8CWgQglXk2hlykgoWuc4ApB1p5Im6Cai1AJ9CDI4AVZHPfODRLnSYRAWninTAbEr6hIQtz/9pWNL7gI58Aj4UnQBkHMQKP7hgcxT9fh8UloHgf3HsTMPxjkGyZDkmb35PHQlw5MCsPkAh2Z/vPioF6pPD5L7wBjGqWiWhTxCTJS8MRCqGhQtI9RNI7QtI/yvXEUHH1WmVnH+WRAI5vgu+8Fzi+6Ve7HcWQ21lpyeB5mqoeV7VEKmvL57wDWCppL/sclX9rYlY7Tw93HBLNwdZOUkKd3LV00wbSo5sZeYTDGMYBgKETMYMe3BQbHp0Y4xidgtQYaB+ALj0btPcI5MEzDE9cpSAhIYih0wgPHwzw0Q8cQo0is+s5v1yTwM3/Bo0GWMQgGDAJrIHaw9DdPwDd+RGgtmOcRaBLzy61CcpfTnGY3cjCzMxNtW0MvPzhu4gbqa8EgAhaJxCyDtnag2juQbYuQXau2D9XITtXEG1dhdy6imj7QVBzD2AF1btvJgoPT+wuG9vOP1v+0qlRzXXGpJJgSCmgU4FHLg/wogdPoJIIUpp8ncjMHcTj/wFQDIq2LP5iZgciPjDO4cl/ZklKIQ3W3rPb/V1pOJByd/fN4VY2Bj7tuXcAoS3J0joUnZQoeYSInYCGhkqydvBQZmyieuSjO2kkzfpHQFQD90+A8cBWBgJwOkct5tVMLbyUlSh8VMUB0GLBCs/5FlU8NPm0P4NblIJs75oXMO5DtHbty6J851VhBh67MJAIPDRDLcT2VbCoAZ3LZgjmsAsenoBHXfC4h+TkrmXJkXmR4wjPv3KKveYIqZa2xAdAKEB2oLu/A370H4FTBRa7gNwDOAbf+RngiW8yO5bNTYnzO1eQo9jz5XNNt+YZgGCGToCn7/XwwFYCTkSGHWgzN1CnI3A6gE760GND8NFJ3/7bAJwMjIR2OvYoP8Ut0+nIyqcMhuuM3KhyQcKAp36yAANphA+/2sNOfQzlZg84VmLUAoZvhn7HN0IPb4PkNhDtg9GAPnod8L7/B5Q+CVDDqzDncm43sFNQnhsbdoMGkTiPgedfOcZWJ4VWWZ3flXcptxVaTXUOZkPYtCY3pIQDxaFggZOLLqVJc5AMTMQY1SynIgADC6XZqqbG88yIVoPkgHVrAtJqX817NirkaQrUaKP+4PPB6RiivRtwtanwBxnl1hkxCfC4B3V8y+S9BzumGefkNtC7a+fMARw3oLp3PbmFBIBU4MMf6AFW00MG/CMSGlTbAg5/HtR9Hbj9YQbISx6H0I8DUQdM0tTPgbz2XE7RR4BIZ8kLBXVqS4wCA4kCttspHtnr4bH7e6Ba6ufoqXEfQmc0ZORGaiEnlEokIbeuQjS2IOodgyMkA9sDEERVTm3X0adtPmseNQNjwoddOQbICK+L3AJWoNo20H09+K1fCb314aCoY4w+fS8oqgNxy4CATHmwzSHurgTrqioWVNWFnZmIkWrgcmuIh7eHePu9NqiurEpR1g1KWk/IljmlNbA264A5uIigK9Rdo59LaCOMvYdAw1OgaWnCLhUUVg9xSROlzZvddAdwPo1Bln7h1XyDfm5PS20YQgmrvOYfkNc0cOOkPJ5gnUDvHnhwYkK2dGS47bLmufrkhlkGw70AYLc9yAEyFHKLtAZFOwCdgvq/C5IEyIahBEMb42fkm000cow9PxLLDb/gPMPMzxJg49DatSQXRfjBmU7NxisbZQQVIvtEyICFafeWoT9bpF8Nu16fn8JB2q47MuARcIAUH2wlhdSPMpoJayDuGEyh94cgoYFaHYi2bUSks7lM5B6XBducNLsO0iY2fQJOuIUCURTFQENqXNoZAnc7+Z1Sa1+ByGNN2heO/fyBsHnMbiq5qUSOpegUhqQEOnvZSPZAjMWLlZ6vYU2172gxr8KBy9zgveQHtebDPdd4gUDzX2f5GRVaWLNhmnY0l4gATqGHQ69FzwbKCohEOnzTABFcV6cn2rhF4OjEnJrHKWomZAX8eG+HSUDrDNDTbmeggnJNtvPmBnYUHoWAztB5z/qzMwEFBePB8/iIP5bdqXT/vme9USgRTmS65Dg/yDNv4rZNWHDGyA7YcJnjTi2ppw2W2bVSeKSgcsITJTbtZrtl2kzFRkLOfI4Ewc9xc282nydmTtyX97Icg4vcEy4Zix3SyinAB9x8CAq4AUQLbddn0gVYrAIsE69XoQUs1msYsK38TuQiASP6qE8PoY5uZDrz/vcB6q213TyzLjn/DtOxqX03toOyWKDS62S7PSDndjqZk9kywLoOREKRXYPWWRjIHJQZYWi/OjAY3/5qdzxtHAo5h+F2kIIUfaJFgJJTNjiP2bZGq2AMuLblQZvf2/FdCI3bOqKMF69zIJgf5GlJOOwdptE28Lr8gYZCdj92aCurbDqS0gEpyZ5P6Wy3d8+Jkf2bb9HOnj1P8FcArSjYLIKdGoE4qJd744nZCxO0R5eXhj6UgynPKgVO75n/FyI3kDQ795lk0pVQxdAmIyx7aZR/NlMjAlrOwZAP4OFn1aWnh0huv9/WvfuIrz7LhPBAEHbpgPFWqMFoBYrroN2HDHjTvQt9ehfkJMRsbC6cbr/bSYhx97QWhKL2prUr3+VpzOQuyHt/PVHhgNYmZnVGotm3BvuIgBCAam7anXFS3aRh5mcgwEnI8CRkZx8Mgh6cAABk55IZ5dW9Ax6fQrYPQLU20tO74KSPaOsqRFRHcvxkxowk01KcvVvKUowwGpNAP4ntLmrjGOVyX1tjl65zk/MkIM6Hyka9jPPOULNX2MkovCoQPmUvMhwRMEoE7o1qgORMRp0IcXPLd2CypwUnSIbdrMTKYTQQ9o8F3AFmzwUgm5by/etmCnL/BOLS0zyPwggLaRRjD8pivzPY40t+E+zcYqYD4eUigrV4M85AMBfG89hKM8sYetT34Sm7HdQtwBBEdC/W7Xy1tkkDkiFQa2X9AkEjEKI4eEoCiFO8+1bTKtfa4ZLK1tatEVO4iysNThmGXs5mrqbSvrkFCQMqW+DmWI6tmBmAkcJFbhJxJICjUYzHjhtAxNnmIiw5RghEzV3IWtsO9Igg6m1T0mx0THZfb4NkDFlvG6dRaxqBCxn7UqXpBoSn0Bo7VVYMJGCJSsZ77rSsc7TUYwT5e062nABN5r4UA6l9fooBZVmYqYkCzHO1zyMNGr90fqR7uE6lBA6HdTx51ACkDiTUBbRKodMxdDI22I9OIOIG4saO32p8REMhc44nuAPZX+1sCJUYIpNOTYQJBAlqYXo1L6G7uWbFjjBiiqpU9qhKklKhOanyBRbpliTAKjFST6NT6PEY0aWHw7gwA4g4SxmYNUhTMDZLAv0jUNwEak3w6Y2cVLTZZRJQVLfDJo3QJyLGO+500B3GaJKC0hLEwp8vcwgBzVVoW4MuRJk66EtQ2a7vO98CIg8FxuecmogZ77u7hbu9JkQtzQRsSZrPqwTjo+vm3oU0/Q7DHjiuQ/UOAdZITw8hW3vmv7WC6t6FqLXBo57V0Q/PnQmLOuyASGbKRlGCd97bRqIkBBRYC4BtGKysg05taiQJYGF2UBedazeOG9l3vCN1KRXyzUqcH57qqkYUM955extHvRiinZq2aRsdqWToFYfcoFWpFGS9hahhJhhr6Akiiw9WCjx/h9NQ3ABau+DBCai5bRWiVRCdBPgDLaaFWckWV4wNxDxnQyskKcsSFUKwnFx5znry+NpzUX/4wyFbO5ZdBl9DzjQw2I+MYh8VWCKJSqB7h6Y8ZHX22da73eAOEdcg4rp1DAKipvH4vQ7eemsfUioj2+2iBq2zXd/uYKzN7oZEmz9292cVOAtl/hupBqc2N/a7nM7SALvmHa7HdeD1j19BOowhyRbeGIa2bNMATsceP3BbFo8H4HRk1Xxsu7E2ZCdOBnBiJwgoxGx1BGFZgAwjokJRZOXGBKiu8a47W3jP/S3UhImOWJln4P5OPqJxji6LgNj+HQmbqEkztH1WUBqkGKwUOFXGuWvORpkHYJ1mADXgNe++Ck6l1Rq0PzLKOCOOwi2kUQca9SGkRNTo+LWWxwyDiocDbIMkmnUKdC6BLj0D2L6SpSxhRBwOG11hV6cNRApi/SfhhRHPif9yAz3CybUWYDOz6oyGm3upOSAv419l8+aDbrDwRZp2Wo2Q/WF49IBsdPycPSkAnRB+/q0Pg5qATo1MlTN6Tm1fv87CfO1+p8yCNiGvWcicKnCizdQQNy5cm/82xqOz6cRBBCpt2v1f3vIQIBOAbdccGCKKsjKWiCxaoL2DA0k/cccNDHFRjm8a8iVQZF2Cdvimr5ODzOxC+/wiSeif1vBr73gAos5Qic4kz9x92JTIp2nKpgrW+bFzgql7fkYHkLXVSLDvXrtnrtljlI5vEzGQKIGff8uDQM0Kg9h2XROxZNoPrLPqhkqGtkSYr/nzRMcfh8XCkOdjWomt0jQXWS0zpuPwAubFa/EQFRxAlZPwzAujCWGVRa8508WxrD6dIbMURdaLRxmK63cBHQBl2kMBZOfGsy/As99xKVft0X4GgGh27AJiaCWA1hg/9can4XhQR41sw40TqXALNjW7Fo+V3+E5VUCSLXS4SMA6CO2MQKnAaGwUYfnkpiROiOqMt97aw2+/8zJEK4WG8Hr/JGtZ67NWtgpCuUoEuRZpVr5nnWxu7wecen0+YYeAyvyL0QoiqmdNSJqAeIT/9L8fQQIBqdMsKrKOzaQ5Gpw4cQ+z48M7Rp1FB+7v/t+1d7ZQWfWCAn6A1oRak/G7j13BHz22C9FMoDls1qFsgGrQ8uyam5JBF+ng1LeQI5BRyKJ+KmACFEinR/Y9yOzzXk6dJosMJWufp/f+bRQwrOwAeBprrwJVcak0IEfpzQgyya33Y/zEO8B9K+EVTAlyjTucA4iCXZQdEKXyEUPoSMiEv6LWhIhiswuBEDUYj91q4af+6OmImxpqrLyyL6fKq9a4XRyp3eFVFvL7xZ4oIFFB3m8Xus5KiORJJLaapQBqA//ytS/AKBGQbrPWDCFr/lmQmy6sAw1E60X84mY7qdgPBGXDg4/qRojTVVVUmu1qTmglboAaBkRkMDQLyFaK33/fPv7now+g2dJIE2VFThU4UT4yYpcKpWH05H6nstQo1VkEkNp/d2kRs8dRvF0qAE3g+377w4ymhI12XDQU9g8UG4KySVM6qAJmcwuBgtxiziDIRFa9Q+Du+4HTex4voGDdEuW/Ur4R0kY4ATxnI65cBaDCLxcbgrQ8UunBKCGRntyG6t+H1hrjOx+wQhYOJ7ChWdAi7Kf6inDKjw5qwGFYE4SGMBLbUXvPylQBWgtQa4Tv/pUX4jBpIoKyuaqdUOvSAvt3hJiA2/GT1C9mo75rnYSr2ytXp8/JIEArQr3J+KMn9/Gffu8ZENsjKKeHD4aoNbJ9RCsjj07hf1uGozcY62REnKU/ycgwIp2xaLsNqpEXA3G6fABDNNoBj0CA4xTf+WsvQioEKNHQSWr5CG7nV17Sy+MeicqeSZgOeCdgdQldi7OrCrCv7oE1obHF+M1HH8R/eeODkJ0xlA7ahqWjYQfUctY+1cv3pzjQkDPQUWtMJvDwIC2lI8MBIAGc3jHVJSEC+nDehhbtCFxp52fkS+QLOYCZzQm0gBXTAndMuVDJ1JUzxR7TsGIYdkLGnrlWbPX04a5zHjoo8/j2QBsG6zSLAIJogXUC2dmDiCIfkss4xQduN/Etv/xS1PcYemwBKpXmdnHWzgCcjl1qd/zsD/z3VAb8BXk/hW+IAdUkfP3PfgwG2qoZ23xWRDUztcix2JQpRRn2oYKIWxBREzzuZ6VsMjr5FNWgtZnww3psjhDV/YzEHDELRvFWj/t+OjAJ0/yjNCFqK/zOO/fxA69/AVo72vQa6dRgNnbugdndU4+baBsh6XHq0yBTVrP6ju572ikb6YyPYy8qkkA/ivDXf+Yl4DjxVHJyct6BCId7tiKuQ8QNOzylUGr1pTrKMU8npTMDRiUJrznA9plkqdNkLwCtsiMugRrOmlssFnE/VOHCOKje5ca9V+IZcOF/OUfiEa1dRAePQHb2EV99Zhaaep54MBJb56Wy3dQZZkCnQ7BKIFoHYEirGAOEyphsO+KirUue0quUQLx7ih/99Wfg1W96Fto7CuMRMuMPF7pSgEpN/dkburZ/t7ujSrO8X2WsObcJCQL0WKB+wPh/f/Ul+F/vuIy4PYZSwnP2Ra2R+S2ncmv6dEGyDtm5AjU+sYMwMmBUjweAiEHIuv44GUDUOzkqLAMQtZYtp5OvlBARRN3yKEDQSiDaGuDv/eyL8Pu3rmCroZAk8I4OSQpOzPPRaWKinVSB09ToKFinCGWdQZJmYqDaVRKyXY3IALPRHuMb/n8fg7d8YAtRS5nd3zmuKA4IfabKUWtuIa63ENWbiJtbptpjwdJQQaoI2XuA1QIEpiqiDat090GgsQ3sPQzEsQ//MzYwYT02z2smBxDEGo6RuyACJgQIpn5vaj7EgXCEI1WY3FVuHSC6/HSwjHx47uvmvoeYM/HQgMfNbtyzSoDT2+blbV0xaLhOMyfiUUUN0dqBrLWMARNBcQTZGeBr/8PH4ndvXcN2RyMdITD+zLA5TT2QZUDCNIsCLBXW170Dpqnw4+4EGpc0fuL3n4fv+qUXIt4bQ+nIRqoMGddNjhvkkWa4pZnPF3UuQw+OoHuHRnvP8yGEKQmSIVWZOX8SetQDiciqLdkIiRXS0akp21uRApcnU60OIWsADE7CgtAXCf78j30ynlBtbEUaKqGMiuyfUbbbs0qhE+sk/fNJM+DQA4oF+nkq0LjK+Ge//iL82G89C9HuEEpJ3wfBQlgZuYwCLOMGGALjQRdJ/xisDNbj0iMKNyyiQgLN+VXOgeJSrQHsPeA5AIyw7ZvW2A1Y3k+/iisQ64tG1oxT2lg1RGBd3ZUtqWMy8iBv76LQcevLiE6mKxlBn94CiRi0dc2WwDhTgAnAxWj3ss+NmU3NqSsSfMH3fyp+5/Y1dPY00jEFLEBVCGmVL3NlFGD7/wU2m6P9IiU0rmi86k3Px9e+6uMgt4bQOghHSYJqTa/nnw2oMGo/8dZVqMGxGXZpF3jWAMOWtTYyA0OcU9BmJJhobPlx52ar074z0LVBOo6CaHa8OpJigaiR4j33JT7v+z8Dj/MW2k2NdERZPq3C3V577ASuxJcGEnCWIUiciQUxE0gBtSsa/+o3Xoi/89MvQrTXs2PDzfMUMoZsdCCjBmS9DVHrIKq3zfTndAxWY7BWUON+bghJjrmY0QizvdxWVrLAMisdQyXW2VgRUwoX3zrG+M4l4i6VMYhlGMCb72YkvwtOXE8m/OfzZ4L2zD+/28Pl/pwBgI6gaefH87gH3bsLRHWI9oFVwslksUmQH4EV71y2SjgGEJQxcFcxPvtfvwL/+Y+fg86BRqwZfhyd1nlqcLCbIWxx1RmgRSDoVKAeMWr7jO/87y/F17zq44DtkTFQmF2NhIC0Zcqs1m3ZdzKGbF+GHp1AD48sJyDQO6QMm1GjUwhZ946DSEANTyBkA8LV+sGQUQ1x58BeA7zBM2tACMjmtv0+oFSEqK3wR3da+NTv/Ry87s4D6OxriJShEvh83pCfgmpAGAmFRRkXTQqCSgTqdQbtC3zTz78cf+PVL4bcGUAjzspuBFC9aQVEZXatdqm7AS2w+EmmBq3zCkNBcxVlvHQfaVJIEcrJuBVAcqZAmm2F/ZAXs0mq6BBEGWp4Lu3KAWgQxxL1WmxQYFvqIhQE1sIuNa1zvH/mcCx03qOTlw0z+RsPT0CJG4SZdRMiEBUl1hD1DmpbB36IhnECGj05wpf96Mvxda/+JBxGTbS3GDEzdEpgRUF3W0ZBcExY19is2Xy2RozGgca7R3v4vB/5LHzbL7wQ0dbAKAQHu4lstM3CRjYrkNmo00Tty1DDY6jBkYkSwPlRW5wtUZ0MoVUKEbcz1SSVQo1PIZo7/tmpNEE6OAYMMdqkGMwQQpr8XQhQve2fl1ICUWuM950yPuNffBq+67dfAr0dod1iiIShEnO/rhpJAe7hQD6XcrAmcEqoS0ZzX+ON9y/jFd/3SnzvLz8b8V4fDGFzbGuAsmZUktMB0nEf6ejU/BmcmB1fRIga20YFOK5DJSMb7VCe+EPFseq5ECoDG+3nMp4Jh1iyrUCIlcN1WseYvpIwIVrb1p5LfJa7QlOhMpOBru1tgZIboEYcsNkoY2i4PNTntW7HtxODw8EPCJDJ3OQsDkhH2bv1fYgckD60AjW3EDEMh15KaDaS1WJvgB/5nWfil9/5EL7xU9+B//uj34lL20MgNbqghtuSJ3SbZjFGLWKgDiAGnjju4Id/+YX4gf/1XBwPgNqlAZSSXsQDYMh6G7LeMVr9zEbHXisIEUG2D+zOf2IGb2pfKzM7IKtMWNPWh/S4i6i5C056niGoRyegqI6otYu0d2ikx5OhqbowIBtb0MnQpBH2KYo4BqMJPRpYJyAh6xojPcbf/9mPwM/8/sP45s94B77g+e9Dp5EAIwApME6NhoALitzuKsFm9kHNeIN33N3Fj/zqC/DDv/t0DFMgOhgiVXF+t43iDH8ikWP2kTDy6Rh2TQUDZmaATka2msQZ45EmS93OyH3YT1mFyzhopzxFGWxIBEoTPPzIlaAsLSf7Ac5KJKQkTIjWe3BazX849F4AH/9Rz8Iv/fYfAzstkAY0BeKKHL4Qu12ofG7qh4C4OhqC6bOU0+YMjkl2NygWUV0+oiBbWxCRRNI9NLV8KcFKIN7p4/FejL/5sy/G9/3m8/C5H/EEPvcjHsNLrt3H1XYfsSj2k5ss4fpJG294/yX8l7c8gl98y0O4c1IHtoeIOwKpjjLXTQKy3vK7dNTYQTo69Qw+2dyDHp5CjbuWJemej4ZsbiNq7UON+0i6tzNKKwlwMoSOxxC1LVMpIDP+S/XvI+5cgqh1oJOeMaA0QdTaQX37CtJBF6Pjm1br3qYQUQ0CwpQKCdAsTZPibh9/eKuJ/+tVH4/nXn0hvuijr+OVz3sMH3H1CJfbwwywcRulAsYp4dHTHfz+uw7wi3/4dPzS266i1xfA7hhR3TgY5+SFkKaJieCVlyhsGPIGLCzYmOR2VHbagMxe6sttEN7Igw0h03acjEhzRDa7cXzyS1+YRdhUYvG0KT/Ac3f2FcaDb8Ztuflpb3v3Y3jJF/59YMsMvsxp5HlUX2dKsyoFqwQYniC+8mxQa9cMwiTKDRHJEw0MK1DsPGRKdMdP5thxfgF5NhzndtW0d2R3Rgkmg1vICBgnEuibEWD77TGefbmHa/Uerm4P0a4zesMIN08buNVv4NG7Hdw/qZnEtzVGLWYoJXLyYRRFEFHdNuuY65H1tpl4O+4hqm9DjftmgKeQdl1mYGb94GnmXckYo3uPmWsW0kdNEAJR+5IhWSVW8lsrUK0F2dxB2rvnpcCFjBG3DpAOT6CGp15QxLASUy+vlvRPMlUiJgjBINJIRxEwrAFS4+ruEM/c7eNKp4+HOiM0awrdYR3XTxp4rNvEe++10e/H5tm0x4gE2zHgWURHdsy4VkkW2YRzD0PcqBAFoqS2z8GotOwFSGB4AoyO7GzA2I4HlxYXoTx25IMIQptGeMev/ygevHYZuuqAUJ6RyK9TUYhXigA2E7MIQVBa4wXPfRq+7E9+LF71C69H5/IuxuM0N9rb7fTO0yPQdkOQ93tcP9QYc/zwQEUocyr52XqaGbK5C06GUKOeHZaRQsR11PYeRHJyG3psGkq0EOBUICINsT0Cg3CYMg6f2ALSXSsSYhNHoYEoBWKNeHdgUAktYIYgW/BJCNOaLAVC+VuSsQnBSSJqbJtQdtwzXW8hb5UEmFMkvfuI2nvQg2PbERi0+FqOhR4eQzZ2wOkdm4RL6HEPJATi1j7S3j1oNYbmBKPj6x4M9FUxZXoEZNyAGp4adqIr9ZE26RJHiOoMagzAzLg1Itx6YhtQOzCKq9IYu9CAVKAoRbxtOj6VllCOJ2HbdklGkLWGGXLiuhk5bwTeGXquBOcMjJjAE/Mli/g6TTqLQJMQuV4Bm43U6hjfuIW/+g1fjAevXUaqNCIpVjMtWrNl0koRwOZiATcP8M7hET72C78Fjx0laG81kCRpbu69a9wBK3CamJx0cIz48rONSGMyyqnGFIemMQikFcTOgyAA6fF1Ww60iHCaQHYOEO1cBZIRRnfebxafTkFR07SUjnqmqjAegtOx5Qtkev3CLjonUeY17ew0Wj0hP2/05oWMjNx0bs2ZyIDC2XM2ZHe7D7sUxi966xyFzK4tDF99JJRANPeMsfXvGwyBDaFJNDqQtTbS/n3DICTpkROjiaBAsoaosYV02DXOKXSq2pb6Qq6IQ9OdunCwdDMFNZFn8FunmM0EM89ExA2wTqGSUab/R/lU0SkqAYSo3oRWCmo8CCKlcpiOHatvcAwaHwNx24xME7ElbAivxOQ2m7geY3zvBB/1ggfwup/7l2g26rZSk5Mf3SikVtVw1zGruFQwZBFBoYmLEsa7Xr20h5/7gW/E1Qahd9RFHMeQIsvRchRe2E5AR/hx8lyhgmmI8nIW3vuFqtIgbHU7W2LLVUYP3xicMOGfrJm6OwmIegu13QcQtc2ASTe/UGltyt8KSJXAWBFSRUgVQ+mQwmwmEstaA7LezIzflflE1t7q5uy5uX/hMItQANMJbfi2X5dCIGO0+echIuj+kXFNtba9XzPAVA9PoIYniNv7EHHT7LiuLKZTUNQwqcK4B50McvRbE7FEEFFsmHkyNpGJLdspJqRamGeigVSbqoj2NHBL47bHkfWWoT57xqcCq7GJPmrN3Kpz92+m9LCvmJCMIOM4eA55LgAHtGE/29Hm9Y5PQghoydbJRJGAjCOMb93H85+5j//6Y9+OdqtZKBFSpZb7szD+qRHAwude8WKnfV0pDSkF3vXeJ/CXv/WH8Vv/+1GgWYNoNiAFIO1oLtN5lhhl3v4JxKVnAc1tkBp7BVn2onOU61aUnSu2sUVDj4dITu8AaZLJQesUIqpb5+CkqxVEfRsU1ZGe3vaLQja2zbSd4antQhPQo1Pb/KM848zwDcjTdhmMqN62YfcgkKKmQNufgnZTw/N3wAgx5zDrUAyFSnlsRiuA2E4g0srXxpk1ZHPXDxkhFzGwsg1S+9DjAdSo67GIqL6NZHAMPe57URGDz5DvriQQZK0J1srQkCkcR44sQsmthqCl15VA4wa0FTPJ8g8DQEb1JlQyghqbhpx8tO94IBqCItsuridH6YbXzbDl4hg0OrERQMs4fo8B2NREaaA/BPQIX/QnPh7/5p/8DVy5tO8xrWVtZObXqqpzz/jAehzABn+cEwAYr/7538Z//G+vwRvf8Tju9IdIuqYUBTU2DSQ6AQbHiJ71EtR2LwPJ0A+X8DKjbEglnCaItq9BtHbNbDytIZo70OkQyf3Hbe2WCyCSY9EpiOYeRNxAenLTL/iovQ9ORkiHJwa0k3XjAOzvhayB4gaUFaLMxOUYotYyRJxxL5g7H/DahfCCJkTwrDOX6+dk0UKDZ6vxT1nYbbgHlukHYai/VsvOOEsNWd+yU4ZG2ZQgViAiRM1dP5VYxDWkg2NfTsuF/pa+TSQg6x2wSqDGfe9IyU9DIsi4CZWODKPOzV10Q04DyD6qtYy2nwX9fIqvNWRUg7S/V0k/G3KaS4dsjd+mShzgQpSXos1Kd6IGHN0A7j9uQUAj/250FOsQW3U8uLuFT/io5+KrvuSz8Dmf+ck5QHvzBJrlrXVpDKBYAKENYwIhenr/6ATvu3kXR3e7xgFYmSjNDCk0/vFPvha/8ZbH0WwH/e1hT4HdBeNLz4AaniI9vmEov+0DiM4lJIePgV3d229AQbiuFURzFyJuIT25aQZusDYMvHQIPTiGiBvm9/37nqUoohpE3IIanmSVCRujysYWiATSUddECn7Tyxam3w2D4RW+tuQlcoKqh3V4HIbjblFbBRtRb6HWOcD4+BZUOg6mLRtKsU7HthkqnJmnIGotyLiBZHAC1oklHVGApFsjExFkY8sY/+jEDtbMBre464pqTehkZAw7V6PjHEk/qreh1QgqSbK5DMFzNKlAC6xGSEd9g8OQSSky8N+iMFHdzjdMvUMJ6T/MjEgKpEd9fMXnfxy+6os+GWMGYpuOmUJ6jINLu3jWw1ex1dny65WsavBF2kzLfpauAoTlTCqY/bpv2GECWhu66t7uNvZ2t6d+/sd/+S3QyXtAVJ+sq/gFo7McUqtgWEUg/+RVh0teo5May3lBkUmRWbTeAVbk5g3IGtyYaaIgTBUym1xDmXw4gYIZdhljMpPYdqVJB5DrOQIYbmqQwQR0MsT45LaVWMu7cDXuG6IRMuTdlcVUMjByWjYCIe9y3DNThnXX2gWrMdSoawGzvFE7p2GakFTW4OV9FuW78xwGg/z4LkcX1moESgBZayJiRjrqQ4ePzgKnUWPLtltqRI06dDJGOuoFcxIChzsa4nnPfjo+/RWfPDdaBWAj1osTSc+6jmgR9JHzhZHCZ2jSYa/xyglkH6x1BlxEbsmmC4SRcj3uZYguMsrrsGvFRc30WNnehx71TLORDwed8QUKO17+iYIhonZmnUeoaTJRA5ke+uJ8+Yz8mlNEdRGIVhwC34V6Med0GkyqoCfLPU4WiyRq25eRdO+C9dg8t2TkZawoaIclynTuMuFezn4XimPmxm2lEFENUXMPnI6QDk4yrXwfpARYOInc7/PlXod5ZBHRhD4VZUrLRNI6Jhhcxd5DbmqPNNOO08EptE4g46bpCkzH0OnY6iOGylYCw1ECpRSSVCGOZGALZCeXkzf8zRbK1wPSu3+MFiH0Ud7prn0OwMyOBsfKcw97ipeRUkDKYAe0op/hOAaz0wuo7m0TNjZ3TUg6HiA9ueUvhixQ5TXemEE6hWjsgOIW9PA4AOUoQHhD0I6CqTLCgGRC2CGVWchOQmQjrwgQQkBrBVlrQdRaSPvHluIc5q0yE57QSYZ0FzELDiIGaCS9wyDkDSbW5vopgnFjoTO0kYPHHbQqRFgmDI8aZudPB0eB0bp8nEIbzzoaPeiZzeXz05qCPN1pGOQZdMG7JWGdAIGiGELG+VFegOkXUEY4RSdDiDgjWoWVLLILXwqGlNIUTKSsJp57UWN/qpICzDFIquxuNunKJslTYYhO4c7o2wiCxg1mJCc3zQKBAQZtLAkX9VLYPKBTUHMf1NgyffbDY6MJ5zgJ/kocC03kEOzsvBnA56bgctiGFYa9MjJinUKaDjpLVSURQY96SE9NzV5uH5jx1LaCkRuQErLcGNBq4MdmUdgNEU7vyTFiMhKVkDXwuA/dPwaiOqi9bVF+N0GAEcUtMCsk/fve4F06k9v5i9EiBSXRYJxbxlnQ0GoMWW8C0EjHhtGYPwR52m+aDEHp0J/XWbWMGxBxHTKq2Waohj18GuhQhNdpR8MtYte0AZ8w5wBh9F31XBE2Yci83u9zhUsKf1eLZUYVdqCXRskyMSGj6/DLkHbXcx+M19YpZHMPorGNtH8IHh2bwaLZ/Cjbahw4kGAHzqVJvo00YzNmobpNc7RB79WoDz0e2rq8ixZMc05y53EfQehBF9HuVVCzY2cAKh8+IyDeaNvwkw/cA1ab33nD4Rt2yAgRdPcu1OmhJQ+dQKgEtHXgjcfrLeowRA+ADQ5C9jCNSceIai2kSkHr1ITpWufViwGko56JAOttAIR0PLDXZo8TQBXCz4XQufmoKhmA7CwAHzGMB2AVYkHBPAACoka0yf1riQNMGtmCM0hXAwFnGjytWBpYcvKwW1OXt1uAUlm5jIM8ODBWKkiYh1rwZMU/2GoNyNa+4d73D8HDk6zhBgFE4HZvJzwKMxRT5GMDj4D7kN/hCJwNNCG765HrdQi7iCgyOzCc6q1JdZJ7T0A0tyC2DkC1uiU3BSF6rhcirCAE0VIwTMWNVDcCKkPoozsGH5F2dJoAdL8L2drOYRfMGoLy0LDnJJCLyPL9GcmohxhA1OgYNqFS2VQdZg9BEhHSYRei1oastyBZQyVD44z95CDK3kNuQWY/6fDUlGWlAKepSQdIBIAvZzUBweh06ueU15dbQhU2YZUjRWu5nLJwh0oxwqUCh6o36hbT7lbTtgbnOdzazpX3SDp0Ro3xtWnkykoAEHUug+IWVO8u1Og0G8PFxQESsMIYxrwF5UbKGcXiUKLcjd0i02lIUTPTJbA5dlZKCkZasymvZeVAaywyhh72oAenEPUmRHvHzkKUGXUawRTlggS2OY/FKGwdHukI+vQYenhqrsmKaGSimAUcAcG47iDmoZwphhJoGYyfDruIGltGYGTYtSVBERwno9LqUc+0DdfbBhROR/aZUUnze5kD1FDpEJTCd0Z6UdAgnHZVk2vXDjaU4s7b6qjyvy5zpPIqQEnQzVhMLGSZ+We05PfdtTmqwMNX98wLdgo/QQ7q8lznB4SQVhmXch2AbtFEncsQtRaS7h3ocdeXoFxJ0jue3Lgo+MEVlBEusoGScHR17avOenAfoh2ZrrzT2yavFsGce399AJSC6OxCDE+hhz0grmU7ujA8fT0aGCORMajeBtUaRlVZRgBF2XRbHzMTyI7vRjKCHvbMODELpkFkkmP+4akxxNYBIGOwTjKHm9FMDeMwyFHZTcslkXO4NgdDOuohAkxfweDE7swyV593Jb90dGo+W+8gdU5ARDaiChNjFARRwtJlfo4FlUhIQABX97bzn10bWZ/W5kKWOVJUrFRNq+RTWRmwxPVMfOYM0FAq/O1ZD10y4akTeyXOXRDZXTNu7UHWWxgd37T5n8jGzbE2Y7SjBpLubehRFyAzeTdqdMx3dJIh/24HCYaMOEwg20kooBirPGcehLR3F7K1j6hz2YzuDkd1e0BP+FUaHTwM1b0HdXo/MP7AEViAkvvHQO/ITg+WJnoQpqfA79xetDPJOiRJ2InByP8bGz0/0TkAtQ3ab/ATe9eUk1nxxkIExPUtaDW2KL0o8Hxsm/Woi4i2Ta1+eAptw3NfFnQ9+iRM1FBnRI0O1BBI05F3GDnk30t+ZVOP/dzDIBnMTQqGGetWa9fwyAMH+USbNhIOzCTYrc2FTJQBi/rhU848VeWbJl0HhWXbVcDBechncD63mJ/zjGvY2WqhpxQiKvAAOChqqQRq1Lf18aDU5YRD/Ge6ZtqMVn7sGHKNJPCy37DAFdu/A3agBRGQDMC1NqLWAdLe3Sx0Dxh8qn8XaB1Abl21yr3GaWiVGAYhFAjS4wZi5zJEcwvq5K6JBqDtLo/AiEW2nWlt6v8uDaB8LztI+HmAuSdMwt5faoQ/dg6MGq7l+Tt03ysGB9u+S6eiegeyVofQkeHzc/bcs3dtYPh0cIyosY2o0UY6ZBsJUD69sICoGvfMYm52gAFDJWPf+BRyMMx1SchGC3o8MP0dlE8Tw5SEQOCRwkMP7uGRh64GwGKuuLOxQhdtqrYYHEKsLX6v8q+04hOZ8xGHXl+7so9nPbSPdJzktN4oYAGSBYKS3mG2UDmTG8uFhbZhh4REMriP0dF1QKUgiKCjUNhavt0tnRw1Z6KRrFOo3l2DKncumePaAaRZ+U1A9Q+hx6eATsDp2NapG0a6yzYWsRMeTceAjCD3H0R8+WkQrV3TCakSO/QkJ3afAWtWRceE9q6xhQpEG85q/WoMkjHE9hWI/YfAcd2IsAQlxBxFOXyeZJ2DSqCVQpqMPUXbTyHibIqZW+jp6BRapV7h18xNyPQdOFDtTcenUOMhosYWRFzzIqVZGBrgAFpnJU/miWjWZXRCCCAZ44XPfgD1egPKagcSnRfTh2aXvpf4EcsckXFxfoqTnZRWkELg4174TGA0hpAiaAZyjsCtVRHE124Crq0A+Ik9+QEjZDnvbMN610kXdy6ZBT7u+TZdd4UcDtzUKVT/0MBtrUsmXGU1IVKjhsdIB0dIh8dIB8dI+/dBUQNx57LNNAKAgU1LLEcRxO5VRFeeBrlzFaLeMs5HKesMVIG4E676QF9BpcaBKNMDQM0tyP0HIfauQbQ62XGK21VIZYb2cwpcbJgmQ4z7R1DjXg6nk/WWoRz7kehWAxyMdHhio4em6cq0+T0FgAvZpZwOT6GSIaJ6G0LGwXTl0KlpqJFhABKVh7lEwVSg0Qgv+4jn2lNx+ZitRQwiJxjKK9nYav6HSxxAVcWRi+QBJgBfcxOvePkLjOY8AvoqKEDfg9mBHIbAJtwWtSYorucO7kZLB2IBBhdoXwKIMD69Y+YWEIJdUPnvmLRRgtMx0t5dkBCI2gcmStE6QMpg83NpiC4iAidD8x2SiFt7vtnGOw2yJUM1NiWz5hbk3gOQlx6BPHgYcvsKqLkFipuW6hportvQn4Q0CkTNbcjty+Z7Bw9BbF0G4oYVCElyiBM59h47zMNIn3ulHTfk1WEvgfn6UV3SDSPhiXFystY23X3pGHGjbYahBByN3P4tDIjIOs0+N7HX0QRX3Y9LKywnzQDVInz6J320jzBpDZZIFb5IZ7R1RlVsi87+6pbPaaR1AB//Qlw5aOLuOEEsgpDU5dR2zhxCMIi1kQCPm5CdS4YpeHonWBWUVRU4NU0lncsAEZLubavOK+0IMi4c231d+8k8qn8fsnUA2T5AenrH9J67RheHzrvKhFXmTfge4vYBovY+0t59E6nY3vccLqFTe8nCqOVGNQjaMo7IEWzsZ0jIIIoSGS7gcAytMqeWCRR7RxCG7b55CRqh/g0Xy3LB9N1k0A3AWfYgadTomMhhYABYapi2Ye2mL+WUzsPhMSGyWFSD5iDXp6zd2PX+u3iCCHo0wrOfcQUve/GH24oRVdqNZtboNyYAuo4UYCVPxGezw885myDTFHSwt40/8fIXQnf7kMJJawdSWsECdo5B1pqgWhtx5zKgFZKTm0ZroJAgOgRfti+DiZCc3gHrxACFnB8JnQsrw7CVDHil+veMnFZ738wHBHvJaT/ezMGWQkKnY6S9exAiQtTeD2S/Q9vyk0ZslKNMic9NKXLiKEIYdR0KqL8chP9uHDflAXDzvOCHneTVnybGtaK04zx0WO48gcpPZOcMpMOuH32uklEup2fncBgBtyFQOqIwQgh6EXLoAQVpBPkIV4oI6PXwhZ/1MWjU61CpqtjlRvPFOWbYFa/TunhJB7DIRcydGLwhXKHKq/iKP/MpAFLoHNKbJ8Kw1RKIOvuIO5dQ27oErRIkJ7fsLuPkp/N8f9naM7Xo0zu2lVaiTAjNDSkJv+8+JUQEnfSg+oegqAnZ3LY0Xs6AxIBq7OTHVDLEuHcIEhHi9sFEVyB5dh/5PBwkCvx+yvgJWgdNP3asVSCmEYJ8ROQn6uQ6erwIa0CfDvZE5sm+AhTwSXerzvjVqOenEU0aX+DMg9+XEY9QwDWLEnEU6AB4DIYZcTPCV37JZ0+E/7yKDdL8dV1MRYqTyddpJGLe93jG8Xjif2eHPFWulaf8kvMbzMwfaTn9n/bxH4mXveBpGHV7kIImpr+SX4wCQsTGkAGkg/tgTq3KrA6KQ+xzRSJpyDJpNljCy2BxOIs+L0Weac05Wq9R3+V0AJL1XMTgQcqgnOYjgWSI5PQuSNYQt/cz8U22gzjZcOpZp3anTguDLfM9D+bvKpuy5Ak7yJFponobUa1pjDRYCRRqcWrO7YQhPphb3RQOYTHnieotOI4/u9IdFxwXB4NfiWzKQjldCkaA17BzaIGbLFxPyEeSUkCfdPG5n/ZivPD5zzHDaqSYu3uvK5cvIyitPw7nCikAzw5VCKjMSK4CHM7Ki3IPY55TITthSEr83a/5XHC/D8hgJ0cYyprynGlbFUiHPVN2oyibMqyz3gHHFMqoLqGqrFPEUfmF5liAxMEuzIWwV1uj41yJKpstln9xpolphKR722j1tfZM3by5YwaBNHbMn9YuosY2ZK09wfnPx/UFwpxzXK4d2oMYwo8HLw7QZHfdrswSOhvOIgVXwsuqhuY+o0bbIv+ndvRZYdhLgHFQMPjE8y+0slJskZmUFNeD5i6drSMON64sySI3aUoIEKf45r/8xfnSzBIxOC/+ler/zTzhVKnyOaiCA6DpV0iLGniFaYVU9dlU8MRSSmjN+ILP/ni87MXPwrB7mukEaJ21pdpusHRwguHhExif3rGEFh0YMecaWqiICRSmyVJOPivkIVCw43JOxw+55ajzi8d3uqlAMtsAhjodIundM8cX0nAThPR/nOZf1NhC3NyxzUYW4g4ilMxQ8g7KdzhaTUA1NvP4klFvwrB96kFOSyEtNYZsuCZ8xBHVt8BaG+MX4UTicGXnMvUAhbQde7Um4uaWd6BRo4UorgXvpZgXuJyd/a0IGUHdP8bnf+ZL8Akve7EVmZGlC44r7OW04BYdViMmcoIwGi5op/KCzXaVQcDKZkoLhiOLQgaBtD9XJAcZTTeJf/5Nfw48HPiRUZ5Xz+E0VJEjwoSy0IarErT8hoaTdfpkCz3Ih12boJcPI2lD8sKd8uQ5feXCOiwRNw2NF7aSYLsBdTpG0ruHpH+IdHCIpGf/9O8j7R8iOb0LNe5B1lqIW7tgpTMjKEy2JfeMPHaQX4hmMKgu3RVZpwZItfoFUb2Tl9dGMey28lx1s/Prcd928U2KdeZxBs4AzkCDXsYN8yz6xxj3j6DTBCJuBjJfFPS6cI6pykSeA1WPge/821+dl1NYV6mOlvgIlaxtyk8vpIWd09IO4Gzyn2m5wSJND1IKKKXxqR/3kfjqL/xEDO8cQkTSo9ghgEVEHhMI1zaFeEGxrBRQggv9QPnv2NDeKOW0s90SwXRjt0hzcl6ZiIaIGqi191Dr7JsII5xhCAfykZfX8h19JEAkkfaPkQy7EFEdcXt3ApsI0TKTMpOv6U8sK+a8ArClCcuogcgKgOpkZHT5Gm3bdcn5eRHWwcm4CQBIR6fZtdvzZ9hHXmyFCxOeEJR3Waf+ulml9iMixzvIzftzh9UKMo6h7tzF3/m6P4WPfP5zoFJDKlukCnVWNjPPDmiTDoArlul4pYOuh3dAgqA143v+zlfi6dd2Me4PM0Aw3Gy9pDbl0pxs1FiQy2uFHGQcMN5CPT14gRA7BGPcR9I/9kKhbiHXti9DxHWIuIa4c+DTj5zpKaNXp5NRVobLOSPOgVx5yWsjdpIOTkwvfVRH1Ni2tGLt1ZHYluO8Zp+MM43BnNwYl1RVCKLWgrYagMmwCzXqQ0QNy3bU+bmOQX7PKs2XARxdN5xjYJmUfix6OPbdOgGtFURUg5QxRBRB1GoZKBoYDQcApJMck1GM9LiPl37MM/H3vuHLAzl6zOyLuSg/y8IUYhnjr0IMWrg9ccUnOosXwGDs727hx7/7L0EPspbe3Ld0nrBCxfJVoGrjBnWSrGW0X0fYCUNVywTM5a25MWUacXvfaOIPjs08gVobUXPHN9nAqdNohdHJ7aB3ITBGx/n3UUQel+BAfz8ddpEOTyFrddRaO5YdqSdXk7/PKNcn7+TKcixKn95QUNNnr6zj4WLKO82wfp9hKDa8JwpCfg0hJKLYGLSwDM0iGqXGA4MnNDuIW9sgJqSjfq5D1dxCGFIShCRwyujUxvj33/e3Uas1JrgbZ0d+Xe5MywrxLuwAztbzVY8jZmGMUgikqcJnfOJH459/05/H6MZtyCgOdnbkd1RwMDYqGxflFl3U3gNZuqmIGtbI2SPaZFttBWCRaJ2DCciNlxIxRNxE0rtvds3efajhKShu+VCYg52chMjPA7B1/qi5Z6i0WtmshDHR0OOOISOjuDPqQ4gItfYuKKplxhoMSFWjUzMrQIjcrk9FrpudsqzHA4ioYaYFNdpGcsuWIjOdwyC9EdLM9ous5mGRFODYemzZipZlGcV1CJL5+yRCmiZIBl2o8RBq1Me4fwKt0jzOEqRlxteQ4WPcv4ef+N5vxAue92ykyob+BdYEb9gR8DIWxgu6Dc5/WuBC/1SMIypUFGQkkaYK3/SXvgh/7as+C8Mnb0PGcYb7FesoHgvQmdGGCJ01Rq83FwB3IImo2QFzirix43N7DsgmHKLndrEJx8cHB9oC4erLGlrMIRVko4O4tYu4uefDZrYddozJCoXTJdBuNBYAGdULOzZ8MxQVQLsw1chPCBZQ4z7UeABZa9oJPSMk/fuTsmP2eQgZmXkAZEZ+QXNhfWYpgNYKrBwRamx1CvN0X6fnp5Ih0vEoJCdnw0gDfF6QqRalN2/hX/6jv4gv+bzPQJqmiKQsXUeEzfbBLLu5Ms8s2M1kIy2mCjzzCqaQnNdMel62N4FsJKCUxr/+R38F/f4YP/7q16Dx8BWoJCmAe2GZjwo8ckbauw/Z2IJOhnZMd6BpbwElVqZvXo+HZiqNBZMymi5B6xRq1EfU2gXZgaIybiE5vWvNTRSKvPm6D1kFHdMT38+GhRYoCPAOKPtRyRDSDi5RyTBfkw/bevOjhfIVKQ/AZU1B6egUlEhfNgzjUw4VO8lIc5vhKRIqHecbhnJbr7mmZHhitf9sD4POD/bM1mEg8JGr9GTvVxCBhER64zb+4bd+Ob7hL/1ZpKmCjKL5i++sifyzzksVFLpniAyUjAYLurUwfzDhpgx9cV9U8VM2xBVC4P/51u/HD/2n30Tt2hUTwoY96oUCbO5fgjAZfkIv5UAukISIa2ZabvENOEOwB4yb20auC2xGlY1Ocw06yAGUxbtmPw3ITAHWef28qa83BNjKxDMzKTUEyjlCCMhaw4zd4nyrT8CXzGY4oNALkFPTyJ5fjtRC4fmLW1gwCzHnoAJ2P4UFC877MiJIEmb68OFdfNe3fjm+9a99pTV+eaHHeG0k6iidDbhuY75gQxIc8isE4Z/+4E/j7/6Lnwa2ttGoR0hTFYTLyOnEcWEcFcLedac76ByBSx88KQiYaPoPjBuW+cZ2Z89UefPz70QYbZR44UypmGzaQnkgsyi57sP+wgDV4qYaTOmBLUP6ygAVypbhF8Pn5J+FzpfwCv42G0ISiHNxNqAll/sX+v0ZoXRo0Y8RoriGpNtDnQf44X/y9fiqL/1cpKkyYf9FWaNr0xtc0gFc9IGG67hAU2kypZ7/9j9+B3/5234MT97ro76/Y9pNcwy5sHUw5BBQ6aiq3IRZDgZNTIzsdrP/aEotZwK/zgzBXxtl80IDN5UzCx3wfIMqRDYrLyxZlgxDDacqhUNOmHMtv0Uni8L9AoE+IjJlHwQDScskvBHqNYSGzlzgMOTvP0wFBBEgIqh7h3jeMy/hVf/qm/EJL32RMf5Izl5efP41wI3YJJc4gKVPdBa5/hTYYZWDuQXwxI3b+Jvf/m/xM7/2BmBrC/VmveAI8gfLRo2LzMCQ5wVwOLHXGxjny4JUgB8cZ93NwwMXWokLytdUbLdlH+oGXn4ykHa7MJBrtskMnILrCnfX4F4I+Ym7wTRczkvfFHCMoDszNOAcA4uCCcKUSxNCQc8QAXPMQh8V2AGsQkqkpz1gNMBf+OJPxT//9q/H3s6WQfulPKvNdu4iZdBigqBLXXdewbdyClDN4FZ7kgt9e40vLSR9/Oef/3X8g3/103j0/beBnR3U6xFYa2itvQFwuHC5JH0uiQTK5NbDcDvbqUOFnRxmlu2WOeMpyjGX6VpPeIzCJPFgJ7fepUzGI0vBrWgqBfF1uMWD8+T0XDORI92LTAWpuLtyibe3E6IpvM9cqz97jiwRQ0gJhoAaDIFeFy/5qGfiO7/5K/E5r/gE88619qW+i5q1LoTBrRUDWOTC1nEhJbLi0+6Ul5qJMv/U2gJ7Uggcn3Txwz/5X/Fv/vOv47EnD4F6E6LTRCSlrWvzJEBeMEbPB+Bsd8yBecHgzfygzPwOn21mnDsNT8ARnKcIFONXa/FZbhyAvY4GrTNlTnaDVSjvsDKcI8+szyvrllVmA9Axl5gX8t4yAn4IHHIhmghSInLIfqqA3gBIR3jh8x7GN3z15+Gr/tznIo5jKGXKh2LObnYWGPesYy56vmrOomSc2JmAgBcdTwjWXBgNHB2f4Gd++XX4yZ/5Dbz+bR9A2h8D9QZQr0HEEpEQfpcMFWZ4ijGE+W/eMAHkSMiZ9ftUgAIzDI2HeWL75KAzz4lpUMFI81WN0HexTxsYtiW3MFOjbIIEg+dHiqXVAArh1SAfKnpF5LGYYA6hYgDjMTAaAUmC5nYdr3jZC/DVX/pZ+Pw/8SmoxfHEu51vSKtvNXMNfGIeR4Vvlv1qBW+xVARw1mH7sv5oIZwg9AfMUFrnCCFvefuj+NXXvAG/+fq3403vfBw3Do/BwwTQVmJbWvEQUbKDhbI0THkke2LiSritu9FhNixgNsfXAVpXVEoJj+Eegkfgw9C8kBYUy26ehESTxhdy4nzOXSgl5pxUiWFT4d98k06aHTMEB7NQzfwlTWEL+hDNCI9c3cFLX/BMfMbHvwiv/NSPxXOe/bQM53G5/qa37wozLNYSVRQi5qKM/SKFhEkQcFGjKRndm+1YBU7BpsqLJdOEqcpI4SkvIxxoaXJFmXsm3e4pHn3sBt7xvifwrkdv4M7RMe52hxgNxhiOx0Yxm9kQgFxYy8JOzCE/rcjk3MJOKSxhX3jAz/wltBURGDD7EiQHmvY2s/e+JuPl+yEelIGGOaAyeIAEEegckhf7YKuw7Bye4SMUJnDBioxaDYKsesmZjXuNhPz0vywmMv8tiSAk0KjHaDYjXN3dwZX9XXzYcx/Cs572AJ779IfRajX9O9LaPH8paEL+u/IynLeGiuXSKuttLrqNSqOBsuSLVorYcw7gokf+vGAlZtoEl2n3Oc35OfKQ0gwhaCZ49H9+zu9HKe1JXtUUfJcPP5eJLpfd27BU5FDtUwulABtzEAFIMS/vOlcnFZTdsj/IqLAh4L5ADrhMZLkKgLTq3Ma5wdWaXlLpfQcMP5eiCK+hSIs/CCx5raXHnrUjL/ZQVq4ABB5qptReZQdQ8foXiXDWktTPMKKF2hlybcA0OWGaZqwdLqgUhaA1Tffkc4eqovD9BXcdf84ZYWX4GZMJ2HSjWMELqxFEE8+gWKGkHKyQMQSJ81SlYimy7AbLnOXUKA7zRWUWydGB6sM6NzsQdwpUuCIoON8BnDFwd25bf1iPXwGsyaG7hfkUU1cHlwA4pYg4ysulC1zgzEU6Z7Tzusq/IaY4zyGiSpS04bUx4RhWDf8rRn6zvzYZLS/zGERpgp13EZV2mYXYkkvUHXjVBz7vV7kJyVx6L04gc6LMXlRlLYg0svUKVTQSPbjjCQA05TPLeadpUtMcOECe8qEQ/+d575EnRVzD4xBN6+rk+QuJJ1OCJZdVtV0SOUmFCaBz6tmnPaR5CkM8c4lk0VPhWVPFZxBelphvsYQK63axSSdUntdN+++pfogrnnPG0AEKOPCZ2jCVLmYq672kkofAQFFPMzsqzTf+Ut3zKSNYaDnnN+GwXdWOM9JR2YQKCuXDS5v1OE8+nHj+k887dyqm6XZfMMDs+S8jpbGYuyAq+ieedI9Fg6cpG0UVjzPvUjkfOVKZD60gs7cyD+Cswq5FuRHLhGDL4kHVr6UYts2ngCzO8WBUmtZQJSeeIfOwSApVFc6phgKucPCy1OyirfMFoLCq3516v3yBFYEWEf1YJDqYdb5VswyeFfaVGD+H9f4pi4F40a29oo4dTV8sXNTRD0BCnrYtTwHN5p6fZ+STJYHQhG5+2bnmWDctp7p1cWxjwdI/zZi2IzbxILjKh7liqFLylUrz1qqMJOPlDH1+KkTIiQkHAWMwPmQiRA4Rd/89mjZPnvJz9QqtvMU8PDeLc+KZch5vLPtewNxjzpP7MvCTJ8RnsuvLyqbO9bEvC3Ded1UIgWcvHZ66TuY5Dw7apGf6ygpafFWWFy11f4uB0rOwihV7AaqpB51VyLUoklq8rrAfhaiKk+NSlllRN4RK0/qSZCAsG3qD5iA3LnYAlbCBi79wWgS5pt6yBLXMbKmk32BWokq5e+PSQ4RIadgfYZ1i4bKY7EQlmgN8Fkrw62oXX2hHIFRm8q3lujy4TPNtb8qxSDMzLWlAM66pspuqTnhgcE67Zt47KROpmJ3Tlpae3CIMlGlyq5qyKbu5PYPKu2WzdVI0sqJx5lV8wl78AL7MTbadPAfNfiFcLAsUtrWJDjzYxiIurPtJMQ4iTJH0okk/EzRac4ZO5SXJii+pIB1WnGnoANtKMEJBqXxhGzi73p2FjzzvXyYjgJn04nWSEOeBXuuQ/cHUkWU0y3Fwns5X7J0v3x2pZHXm5DHCx54zl6L9TzvihN1MizWpJEWn2eE0TQkAptlv8SHOW4r545e1AmfOpFzTp4yRMIUwS3kxVyqBLMpUlWZuaJUMfClIL2dwS3Mclojap6cAq1ra2i868/Rz642LRB25fvuc1k9h8+OpKUT5LolJYdtF8kSeltUWwA0qbub56GB69silHWWgEtnC0son5dl8wRUSCt1+LhZhykVSFO64M15tGEgUpzZVQxezSCnTWJy9lCbXyuymtqV4GVOuYRoBqngOpsWwgGl2t4ADqMY+X6ictlAzU/bElg+hOD9QkUOhz2K8PmWXDneRQhSbww54EnzhKegkB0kLONQS4vLnVCqYG5ikNbaJlCwEwwqkJZoRedC0yKA0IKBcpzFTMcx3zyjEC5BvgbaUYyZMiGRRIYOgWYHAzMgMXsIMmFV65RL1gxlrbUrGcqZA11odwIKF6UU568VFvRIGMcOr5q2SCuAYT+WBl+l0hotGB/fL4XaGvEgGJhxDkb5FOUR+ejjKM5HsolJW0fhKRUNLo6iS3dZLAlBe4iuHT9JEpECUt04qRhaBFU9URpwoSlg7oXzePxGphBkG0ZRe3cChFHCSUpcRtlCvAdSeF/msM3CelZ+dCRFoFe7GKk+gjMM9mbcXDLLw8idycze2O1hYzJM3EpbJOBjWkf03+THX4Hw+mks8eBKjyHr63Q6eG0vqp/BwEUucjP4LoXI5/hLutkXxz8kInEAlLorCmTxBDJ1NZJ+0BCqEuVRCDqHCbk9zBmdQIayZuFYihIqIk7Qtq79A5zMjpCwtWSVCWFMKsCiiv77QhkuS2RAZp8AYQ3FJ8/lyBL1IzGHO75x5ZatALrvIoC0Q1UM8QXMZTAg/TThHmXUderlcgAtpBpdELCWDPqi8S7CKA6ZwSMIMJZay1mjf+YcCZ8IN4Syy2wJDJEzmI4KKTgc+rCcE6YMr1RYMNnM6BZXmacWKgH4X4hco0WjcBDg+b9NcREU4VypdVwQwrXebZvVFL1hzmQSjOZfUMmhCKDMvsZvp3xbH7XFJgwkjT6jhkCjAJVwmLu7cWeBqJMIpJ+Md7vgcGGlOXzB0BCjR5aPw9znBfw9mMk/Al1Ohs4lBI0UDxCT3gHJba94gUWpsVIgWaLLnKQjZBYW7OeWi+bA/g4rntscvOpTsK+RjH6Jc0/LEvYTlXypJeSewzxkVkzOPtIuGP9MBVMH65vSXz40CFmzmDkMvmiXlw/lQtVhj51JwLm/w+aEznHcu4WeCQZ9AyTlKwLmiYwglsjiXCmAyNih2FzpWXmmJIUxgqLySkBt7XgDNJkciFT5HEzKGRdSAKAeHBFMOJ1MAb2jhLhoIpVJg/MUGSREaJVEuFcjt9kG47zAFolxiYqOXsHJQeDJUSAMwXQZsaV2CRWWvVvxZTBGoGOJNQ85Q3cAXVraZ4TxKeScl+XQxlC/u+BxYJwfqusyTWEHx352DoLLf+Q26EK7zpJPgyXlZuXCfJ6i7eRCNyxpEiwV/LiMeFXKCgqOgAl5QXs6jgmEUvhUM+aGCIjJRIbzP7fyUW3+hHHgeM6C8VHihmlH2uVxKUoaCUDgzwak/z2ivRnXFp43mCXN+okVOEJZvSsN7mgIol9WMkK++lbGVSu18Wp6VoZo2FeC8bv/U4BdZGF1gvLnR2uVgXPAfQRjAwQ4yMeqeAV0wzPLwvQrGkE8XJj5bdrfBAA0ugGveznNpDE95oc6hUSH6CeoMwexOCOSmDyIwHjOKINxU2Ar/UvbvQVmzTEiEi5RsmpLw+OIPBRRrFEbEl9c8yaYw7K4nSCfyZZ4Z+9+MrrysHFuA+GbqeWFmKb3Kv4nZtbxptSbz0oqK1PmtarZcAk9jx4SDIappKeQWXWhIVVuww52s2NOf2ykmPuTqVEG+zKFQQ9YGRIHWAIUjvB0IlqM8T2q9EJADs3Ihehj2Ek847Ww3dGGy3WWpBKwM1Hkn/njdPZrI84vfM51m2fVSCO5xdumCSvgGRAWuQF5NISiY5iIAH3sUS4CYlG0ooBQoDsgLawFZNJcNInElwdLpy+EaL1u7swQ/qABH0rR6dFERvuCseQqxiqs0AxXz9eLuziUEjIIGXumss4BXn5scVQL00dzO+uJDLc6FnQxvQ/CjtAMMYeNNNhiUQRMAH3O+fhCKVXJQV2YOh2iWA4RZOTHLLcuqCrkzlkYkXJxCkh9kipLaPaYRlQuhQYjqc3loV7a7UUEwNRf2+978bLJyHjzMH1AQ5cYeEFEOqKOStCD7e7YeBE0pNQbhPRXRTifpXijzEk0nA8/qC1qHhkWpuVao5oSfmT0dmCepk96spwKCCypDLJvzz3IMJVO8i3PxJuv3+fCaOQi7gzkeTJybr8E6j8ZzIfoguKG3Ib6A4PPkVYmKAxq44EbzFYH8cy6Kmk7uLjzh9HIpP6ZRfpE/YtEpTKD+FEwTCui3RWIRlTR2UbY7s4sgkAcG8yVGmjgelRi3n98UOIr8cYt8gDwXwEctFHAwck6g6i61vC2UFhaWEraZ2guwTtniGUXRRR9KcKxlvWhIAJrW5+IH6FARHOQS4DCD3JizCCGcrxtO1vXOJFcqzI8E11OqBuSdDuVxAZpSh5pWrOGJWCEnVcZU0AQIqbpcAncHE7uLRDtfJaCSnJ0yB1EwxwlDookav70eErl3mCMBUQAKojwiKf17mGgUrIyD9M1HsD6cpnL8K2x1Jlq5NWZZsHyejaydCbjWbr5CGRAl7Ky5V5LrsS+kBUWQvEQsozQMLwB3XCgBToJo02m+HOh/c1jDD1oQZwKZuem+KJQOyRsNz4J5aEZOOmvxEE10rxAKXAvKcI/wzXk8Ivh+UXMxLDfmowCgSBv2eT3lAeYcQFzWpzThuPJ67LkJZkDl8VY5ks55SJBV3GirOYCLIg2+yFOfSGeKVQQuVccJQd2JSdsFKi0XsIdJPCbfhpRx/os1fs71FZSmNEGZjqcBARPROU+00/KEJEmx9bbAjJvbbANM5diXVXVoMs0oHnPC6EuMPbPofMWIqCwVKblCKpYHit2Ni9nZopH+QjyB1SeALeoA1nWqstB0iWNXqKdOlH1m0SQnkFouN7xpPgblUnZT23i5pD23QOLxjT40CVBMI/Ll/4kn60JF8LNQvCjmQpzb1TlXDeECvuDdWoHAk+MjlIgCUCHpp2C+YWnKgLwcb1l4P1FFwLTuvXJ2HwEVenA3u8ktrL9RhXu8vAPYbGRyVlFBVh8u0UUpOIg8QG6bfaY4hnzpt2CseeZxboFyzrBosk7hEOagS7Hs5MQ2WigaTDhijadTNvPDN/PAVmHQ+WRSQJOThsKJQijd5curMUVKbt47kR+PnqkqUkGuLbjG4LnlVBdDolTZuCZacMJQ1fU9bdRTMCFplm2fVcrgHcBFHwy67jRo6ty5XC87l0wkmaWPx1PEeagcvKNpEcF8YTku/QuVXhmXyfcwlyjbh//GKGnSnagclDbHIE/JKG7kHIwYyzUCFskhVJQeKVzENPkc5hyVuMwwObuQhYL+M7WTdUiNzbng9TUDrSciOXsnUQDCpjmNsBOPPCMMk90VpVZSGkOUjBHiiaydJ2L+4tZbiEiKPcC5XRo5SYSy65snx57ngEyyufL/Euz9Jb0HkyF8gfxEkx2QnkOCSXR9gqpe9j5LlJT86PPF4KULER2vyhy+sINBzsv7VgFPc2bKKNG5zJOdpmET0zYuRrCQebr0dZ62iHwzRLBDZjBH6cVWgLW4PK6f0FabgubxNKRmeig+TxuvTNRkbvNdGZgWktOqrq8llH/PM8LO7VOFhyVWspKKv16Xh6E55F7G6icmTO9vgmP5FdpIaWIhBmIXKPTlUb7cGO7GhsobgAkBC82XoIhz4XGuvFGy82aHm9xjaWJrLMn3CRM8e4cDEEKUPvsFTY0EC7I9lKfphs1VpTMSAmBzkto7BQwunL449cxcRkXBrwVEHhealblwqL2YjRb1F5DrplzOEiv9elpLwWo+h+be6LpcLjMmGPlU4pKmh8CF6+HJwZgzFytly539Dk+BYwmosJQR7kyvAReSl6A0V6iOUNjBB0xO7uSSN0AllRAqoCFUWG/EE96nbK0UMwvyZMKMKl1mE1whiitz2FWQ/uLneM5QzI3t9kQLTByZv0vm5gKsK0ReU9R05sHTLHVXLq7hAsg+MXAEk52LU0uXhWNO7Xic9rsiW5KzHT+sHJQxtIstrROQMBXLelOmDxakBoqAeyUlWzc1aEr9dlYKVQRQp47PWnTGZGEuxFmsSi68s6UWbMUbFLSI1SM3jHWFUH6FT/MGcosJsG8BXzSDYkez7qTYSx6M5qYCwSfrQyiLMHhyx/bRNaNEBHCyj4fCMiUmOfMToR2Vj38rMO7ywCrPn79ImYQbTwMMqYQJGTyzCYUgVAhHeXr0xmXhDrA0WajqJk+osNbmRKNVDG8xQZAFbn7N6sULT7MtP051IvHc6yqbJlPU2MstosLAkRXQz7Ly21yRmeKzmUDDA1Q9dx8Wja9Y5ZkhwLvcYuFATYwWt7jcpKLi+6Pln/861hCwpGrQuuxtbZqA64yH1hxbrTtUW+14+Rh+GSHHVa9jVgdbvgvU7SqBBPcSnZmLyryvWzuWZ6QMNOcZn/tiO4MfsZbYhVY/xLxjLTSZeINgDFW+0SmEISrBE2alE1PyZpqXQ045LGEaLbqogRfg+8QLPEyudo1hFMPVo0tacFERVXiJM7EJXm1xnHWRnUtf7fRLnhUBbNahbeLo5+CCV+aMnsFdLdI3faZta8uI5j21duVw9uC5XcqMCEesmuuf1/1UcsHMC317qQuYhVHyclHTvI+uK6qaPGievehamJmrnZcXfnH5IuhGNkvaxDqr/h6IaGLAyTIn5zU8A1o0AjhHZ7XRg1XRLFh5/NJF3LUqykotHBlsaOjLRVxxG72VebL5Sx50FvAtFnYzvNl3Qes84VySBi361UpRwGpbDINp9eNwxZsqqg9NS6R5FguTlnsPm9qZNxkibNSP0RpOUhJlzTqcWPgJV0TBJpZLJfowzz3heYYruWuk5Rclz8yxaCaJa6phMy+1UCdoolM/R6VagysZ7JIx9rL+kde/GC5eYrwgECmq7hDz75lmP/Eq9OEKANRMFLg40qvqg6jQvJDtkLRaml3lNmcs/EVilkV7I7jC2uIVDISL8mY058S02CmYl9xYeQkbp7Mza670u5neOxw+l7s7UXqzU+rUVcAozwlfGlDm+XZKMzAlnuKMCvkFz3qZNM1BLbjoeWEvupY0dmrn7aw0nmfs78tEOyUdVRQQjUKiYrVuOp5rg0tnYrTul7HerICmOHNaokLpN1B702LWw5vuoHmiUWZhD8mzgs3ph+TZa2ySrbZ0s8aSrYQztp7KOxAteAlTWGqVKxIoUHB5iQW5yFKg2SENL7QqlvMAVYJTKvk0Y14XNS29ohbJvJmmUMN59hG48NxFlctYpA2Cll4Vq32NVjkhL/D5KoAbL7jb0PqeEU1xOLSI/UxxQEvjnrTYrS0EwJ7JT6ijP+cj68esq6WD8+SvpvxazI4ly/5KlRfURcBFeBNPftY/zZNgWmGN8Jo/N/P2pmiAzE1MzyJQXpAYwUu+8mn7wtSpdhXe/SYSjLnpKU3/vph5ibT0Mz97S59yYXRmq7L64WlN636B9Htx1InmBEfEyz2/afgEr/D4aT3PbdUohWjzi4jW/P2Fy4AL4DZnYls8z1NhBli5zqdbwbrPYzYELbNCKjUr0dI3yNPbJDKM6YJtMFXSPF4FiDinPVOssD7O1HMttZvOokAu8x4Wze2XMYSZJ+Vzfebr2sJobpeQlTvji2IwNL1td+rzriBdR+f7HsodwLwhZOf5Hnj5lGQttHyqdj1c8TqmqjtNqVHyuupVvODtVgrt56cE83gG+QourfCiVn84q2NHawDKz+BHlF7dNOoUnfMNrBBe0xqNJlOs4ZVzxypI7tLairymh1FJX26+wdIshhPPUiBa030vYNU077vnZASLYzq8oAMIb47WfTUbfgp8Ns6Hpi+T1a5rFmeBznbRMfNcLGjxcJbmlak3u1GsAtLRuZjv0pfBYZg5ww+s1g14VtJFxc3xg2WM0QfTOKazupd54M8FVqday3nWfE2LdwNWdEfrij4nd11Upo6uK3Is+1yuFM7lv5+2Y/I69dI3Efnwki9oxv2XhqYrnmfu73l9TmaZoJMXuKep6j08P9Oad8aZ+FfVCGCm41mxeX5qf/6K3m5qG/uqx/UPb4aE9xlsC0+FAGKWkDKtIBa/WnpTpRKBqWJFXMUOl45QzvatinI3wZXBBF5wW+cpAyxLc0Ra3jiD9KckL1ptRROH022XI8SESjuVttR15INl/7AGVt+iG7bnETFVvhuetiMu8eypShQxA9PMMwFLqgYr8ZxpgfCBK79/nusAcqETlRjT4m2wy1AwF9Nbn4TmZzXF0jJepKzYm3tHVdrwSpzTEvLkS0yFKr8cmr/YN5o9LDhWC4X0b2ZxYEPUT56xaS0SmVdOGSqCqlXW76xxdzOrAFRiCLyu5cDLvo7ylhQmTGlbXVFjiKnC2eGn5U5/SjzDELnSe6aqQyh5caOb9nde4MnxtBVf2stastkVysy83PJf+t3O2j2LLEVeUi24UmYwr7eBp+MFkyeh0ke/MAZQPUuZnJe1tqxm3sjYc8mLq51xdrOWU21braxSNqBkIzOn1yrma+b9UZlIP3AxQA7G9C47wpJafsX7XgI6qGpfMz6QdwDrGKiJ1Ss0/nlOBWvWJOa5hLGeteOoZHjzFujFwJtmDgFZRpH8zC5/xkNeZvjJZq5/cXHTpSOAM130ixxnw4e/EDtREXZAlXbk1W9opstdphSygWe8zrEGU0agPrXMpEp2UnQA1c+9oMep+nLO8OY/mHg4K93juT6IKSOWP5Rf2hn+iOWBFZqNmsz8NG8Q2VlyV511WcuKaV6wwOHCPPNVroMu2kPkc3xxG3AAK53Xj5ee9+KWROZ5MQOeJwdNJeG092Ez4f6qa3J2++SyyRfPaZOdOQvwPBZdBb4Db/gaVj4kLfyLjThE3qgDqDoDsiLPl9fxfBf54hRBo6pS6RR0pU1t1V2I9TRDAGzBfHUWwWmGkNNyz5M3v5CLN0UhFk2LrCHe2Pq6iJHd2uaPLioIsgxDj9b9mGnDa7KQX1ZS8Q03eZ4SYlDJrk3rsaGVFsIMR85lovsbdQzz5jVNY6LSmRrb2r0En9F1TlnnouqRaEP3x6Wr7WxiPl7iJqdRn8N0YiqT7aJtKTQ9xZiMMmhjsk6z6OTz3MJaRsnxWVrfBcA0As6FmJdDbto7VZ0IVPUFcsVYaVkwuTjPvtQZTPMAATmHV7zPec+alzz8TB4Hr8eQuGD0tFZbXUyXv2ovy1koMq9106sAbjPIOoAFckje4C3P7EuZSh3m6mE7VXRMFYbJ0QqPYW7ZPHRU4WzuKhxZLlz/ghnWLInpMj9dBpbOp/DyxpWRuYIRVC6RYkpHI1eZoXGGnoMq/B15Osn/H3URMwVdgyvkAAAAAElFTkSuQmCC", yl = bl, Il = Al;
var El = /* @__PURE__ */ K('<img alt="Chat" class="button-logo svelte-bkcus6"/>'), Cl = /* @__PURE__ */ Lo('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-bkcus6"><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor" class="svelte-bkcus6"></path></svg>'), xl = /* @__PURE__ */ K('<span class="unread-indicator svelte-bkcus6"></span>'), kl = /* @__PURE__ */ K("<button><!> <!></button>");
const Sl = {
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
function qn(t, e) {
  pt(e, !0), Ht(t, Sl);
  let i = gt(e, "onclick", 7);
  const s = /* @__PURE__ */ Se(() => j.isOpen), r = /* @__PURE__ */ Se(() => j.hasUnreadMessages);
  let n = /* @__PURE__ */ M(!1), a = /* @__PURE__ */ M("");
  Ot(() => {
    if (m(s) || m(n)) return;
    const v = setTimeout(
      () => {
        C(a, "attention-bounce"), C(n, !0), setTimeout(() => C(a, ""), 600);
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
      i(v), Fe();
    }
  }, d = kl();
  let g;
  d.__click = o;
  var h = q(d);
  {
    var f = (v) => {
      var A = El();
      ut(() => Ke(A, "src", yl)), N(v, A);
    }, p = (v) => {
      var A = Cl();
      N(v, A);
    };
    ke(h, (v) => {
      m(s) ? v(p, !1) : v(f);
    });
  }
  var u = V(h, 2);
  {
    var w = (v) => {
      var A = xl();
      N(v, A);
    };
    ke(u, (v) => {
      m(r) && !m(s) && v(w);
    });
  }
  return W(d), ut(() => {
    g = dr(d, 1, `floating-button ${m(a) ?? ""}`, "svelte-bkcus6", g, { open: m(s) }), Ke(d, "aria-label", m(s) ? "Close chat" : "Open chat");
  }), N(t, d), vt(l);
}
Cs(["click"]);
Gt(qn, { onclick: {} }, [], [], !0);
class Ml {
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
function fr(t) {
  return new Ml(t);
}
function Ds() {
  var t;
  try {
    return typeof process < "u" && ((t = process.env) == null ? void 0 : t.NODE_ENV) === "test" ? process.env.ENABLE_TEST_DEBUG === "true" : localStorage.getItem("ai-widget-debug") === "true" || window._aiWidgetDebug === !0 || !1;
  } catch {
    return !1;
  }
}
const P = {
  isDebugEnabled: Ds,
  log: (t, e, i) => {
    Ds() && (i !== void 0 ? console.log(`[${t}] ${e}:`, i) : console.log(`[${t}] ${e}`));
  },
  warn: (t, e, i) => {
    Ds() && (i !== void 0 ? console.warn(`[${t}] ${e}:`, i) : console.warn(`[${t}] ${e}`));
  },
  error: (t, e, i) => {
    i !== void 0 ? console.error(`[${t}] ${e}:`, i) : console.error(`[${t}] ${e}`);
  }
};
class Wt {
  constructor() {
    this.currentId = null, this.messageMap = /* @__PURE__ */ new Map();
  }
  /**
   * Get singleton instance
   */
  static getInstance() {
    return Wt.instance || (Wt.instance = new Wt()), Wt.instance;
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
function Ye() {
  return Wt.getInstance();
}
class Tl {
  /**
   * Validate message content and length
   */
  static validate(e) {
    const i = Ye().getCurrent();
    if (P.log("MessageValidator", "validate() called", {
      correlationId: i,
      message: e,
      messageType: typeof e,
      messageLength: (e == null ? void 0 : e.length) || 0,
      isNullOrUndefined: e == null
    }), typeof e != "string") {
      const a = "Message is required and must be a string";
      return P.log("MessageValidator", "Validation failed - invalid type", { correlationId: i, message: e, error: a }), {
        isValid: !1,
        error: a
      };
    }
    if (e.length === 0) {
      const a = "Message is too short";
      return P.log("MessageValidator", "Validation failed - empty string", { correlationId: i, message: e, error: a }), {
        isValid: !1,
        error: a
      };
    }
    const s = e.trim();
    if (P.log("MessageValidator", "After trimming", {
      correlationId: i,
      original: e,
      trimmed: s,
      originalLength: e.length,
      trimmedLength: s.length,
      wasWhitespaceOnly: e.length > 0 && s.length === 0
    }), s.length < At.MIN_LENGTH) {
      const a = "Message is too short";
      return P.log("MessageValidator", "Validation failed - too short", {
        correlationId: i,
        trimmedLength: s.length,
        minLength: At.MIN_LENGTH,
        error: a
      }), {
        isValid: !1,
        error: a
      };
    }
    if (s.length > At.MAX_LENGTH) {
      const a = `Message exceeds maximum length of ${At.MAX_LENGTH} characters`;
      return P.log("MessageValidator", "Validation failed - too long", {
        correlationId: i,
        trimmedLength: s.length,
        maxLength: At.MAX_LENGTH,
        error: a
      }), {
        isValid: !1,
        error: a
      };
    }
    P.log("MessageValidator", "Starting HTML sanitization", {
      correlationId: i,
      inputContent: s,
      inputLength: s.length
    });
    const r = this.sanitizeHTML(s);
    P.log("MessageValidator", "HTML sanitization complete", {
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
    return P.log("MessageValidator", "Final validation result", { correlationId: i, result: n }), n;
  }
  /**
   * Basic HTML sanitization
   */
  static sanitizeHTML(e) {
    const i = Ye().getCurrent();
    P.log("MessageValidator", "sanitizeHTML() input", {
      correlationId: i,
      input: e,
      inputLength: e.length
    });
    let s = e, r = 0;
    const n = s;
    s = s.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ""), s !== n && P.log("MessageValidator", `Step ${++r} - Removed script tags`, {
      correlationId: i,
      before: n,
      after: s,
      removed: n.length - s.length
    });
    const a = s;
    s = s.replace(/href\s*=\s*["']javascript:[^"']*["']/gi, 'href=""'), s !== a && P.log("MessageValidator", `Step ${++r} - Removed javascript: protocol`, {
      correlationId: i,
      before: a,
      after: s,
      removed: a.length - s.length
    });
    const o = s;
    s = s.replace(/\s*on\w+\s*=\s*["'][^"']*["']/gi, ""), s !== o && P.log("MessageValidator", `Step ${++r} - Removed event handlers:`, {
      correlationId: i,
      before: o,
      after: s,
      removed: o.length - s.length
    });
    const l = s;
    return s = s.replace(/src\s*=\s*["']data:[^"']*["']/gi, 'src=""'), s !== l && P.log("MessageValidator", `Step ${++r} - Removed data: URLs:`, {
      correlationId: i,
      before: l,
      after: s,
      removed: l.length - s.length
    }), P.log("MessageValidator", "sanitizeHTML() result", {
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
class be extends Error {
  constructor(e, i, s = !1) {
    super(e), this.name = "ChatWidgetError", this.context = i, this.timestamp = /* @__PURE__ */ new Date(), this.isRetryable = s, Error.captureStackTrace && Error.captureStackTrace(this, be);
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
class qt extends be {
  constructor(e, i, s, r) {
    super(e, { ...r, statusCode: i, endpoint: s }, !0), this.name = "NetworkError", this.statusCode = i, this.endpoint = s;
  }
}
class Jn extends be {
  constructor(e, i, s, r, n) {
    super(e, { ...n, wsUrl: i, closeCode: s, closeReason: r }, !0), this.name = "WebSocketError", this.wsUrl = i, this.closeCode = s, this.closeReason = r;
  }
}
class zi extends be {
  constructor(e, i, s, r, n) {
    super(e, { ...n, field: i, value: s, expectedType: r }, !1), this.name = "ValidationError", this.field = i, this.value = s, this.expectedType = r;
  }
}
class Xn extends be {
  constructor(e, i, s, r) {
    super(e, { ...r, configKey: i, configValue: s }, !1), this.name = "ConfigurationError", this.configKey = i, this.configValue = s;
  }
}
class Vn extends be {
  constructor(e, i, s, r) {
    super(e, { ...r, clientId: i, statusCode: s }, !1), this.name = "AuthenticationError", this.clientId = i, this.statusCode = s;
  }
}
class Kt extends be {
  constructor(e, i, s, r) {
    super(e, { ...r, retryAfter: i, limit: s }, !0), this.name = "RateLimitError", this.retryAfter = i, this.limit = s;
  }
}
class Zn extends be {
  constructor(e, i, s, r) {
    super(e, { ...r, storageType: i, operation: s }, !0), this.name = "StorageError", this.storageType = i, this.operation = s;
  }
}
class _n extends be {
  constructor(e, i, s, r) {
    super(e, { ...r, timeout: i, operation: s }, !0), this.name = "TimeoutError", this.timeout = i, this.operation = s;
  }
}
function Pr(t) {
  return t instanceof be ? t.isRetryable : !!(t instanceof TypeError && t.message.includes("fetch"));
}
function Ol(t) {
  return t instanceof be ? {
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
function Dl(t) {
  return t instanceof qt ? t.statusCode === 404 ? "Service temporarily unavailable. Please try again later." : t.statusCode === 429 || t instanceof Kt ? "Too many requests. Please wait a moment and try again." : t.statusCode && t.statusCode >= 500 ? "Server error. Please try again in a few moments." : t.statusCode && (t.statusCode === 400 || t.statusCode === 401 || t.statusCode === 403) ? t.message : "Unable to connect to the server. Please check your internet connection." : t instanceof Jn ? "Connection lost. Attempting to reconnect..." : t instanceof Vn ? "Access denied. Please check your configuration." : t instanceof zi ? t.message : t instanceof Xn ? "Widget configuration error. Please contact support." : t instanceof _n ? "Request timed out. Please try again." : t instanceof Zn ? "Unable to save data. Please check your browser settings." : "Something went wrong. Please try again.";
}
class Ni {
  /**
   * Process and categorize errors using custom error classes
   */
  static handle(e, i) {
    const s = Ol(e);
    let r;
    return e instanceof qt ? r = "NETWORK_ERROR" : e instanceof Jn ? r = "WEBSOCKET_ERROR" : e instanceof zi ? r = "VALIDATION_ERROR" : e instanceof Xn ? r = "CONFIGURATION_ERROR" : e instanceof Vn ? r = "AUTHENTICATION_ERROR" : e instanceof Kt ? r = "RATE_LIMIT_ERROR" : e instanceof Zn ? r = "STORAGE_ERROR" : e instanceof _n ? r = "TIMEOUT_ERROR" : e instanceof be ? r = "WIDGET_ERROR" : r = "UNKNOWN_ERROR", {
      message: Dl(e),
      code: r,
      isUserFacing: !0,
      shouldRetry: Pr(e),
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
    return e && typeof e == "object" && "shouldRetry" in e ? e.shouldRetry : Pr(e);
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
const Rl = "https://ai-gateway-service-staging-639717727892.us-east4.run.app";
class Js {
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
    const i = Rl, s = this.isLocalhostUrl(i) ? i : this.ensureHttps(i);
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
class Bl {
  constructor(e) {
    try {
      const i = window, s = i.AIChat || i.ChatWidget || {}, r = e ? this.parseElementAttributes(e) : {}, n = {
        ...Pe,
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
      const o = Js.resolveUrls(a.sanitizedValue);
      this.config = {
        ...n,
        clientId: a.sanitizedValue,
        ...o
      };
    } catch (i) {
      const s = Ni.handle(i, {
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
      const n = Gn.attributeToProperty(r);
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
const Ei = /* @__PURE__ */ new Map();
let ji = !1;
function Ql() {
  try {
    const t = "__storage_test__";
    return localStorage.setItem(t, t), localStorage.removeItem(t), !0;
  } catch {
    return !1;
  }
}
ji = !Ql();
function Ll(t) {
  try {
    return ji ? Ei.get(t) ?? null : localStorage.getItem(t);
  } catch {
    return Ei.get(t) ?? null;
  }
}
function Pl(t, e) {
  try {
    return ji ? (Ei.set(t, e), !0) : (localStorage.setItem(t, e), !0);
  } catch {
    return Ei.set(t, e), ji = !0, !1;
  }
}
function zl(t) {
  try {
    if (ji) {
      Ei.delete(t);
      return;
    }
    localStorage.removeItem(t);
  } catch {
    Ei.delete(t);
  }
}
const Oe = class Oe {
  /**
   * @param storageAdapter - Optional storage adapter for testing (defaults to localStorage via safe utils)
   */
  constructor(e) {
    this.storageAdapter = e, this.visitorId = this.getOrCreateVisitorId();
  }
  getOrCreateVisitorId() {
    var i;
    let e = this.getItem(Oe.VISITOR_ID_KEY);
    return e || (e = this.generateVisitorId(), this.setItem(Oe.VISITOR_ID_KEY, e), (i = window.AIChat) != null && i.debug && P.log("ChatWidget", "Created new visitor", e)), e;
  }
  /**
   * Internal storage access methods that use adapter if available
   */
  getItem(e) {
    return this.storageAdapter ? this.storageAdapter.getItem(e) : Ll(e);
  }
  setItem(e, i) {
    this.storageAdapter ? this.storageAdapter.setItem(e, i) : Pl(e, i);
  }
  removeItem(e) {
    this.storageAdapter ? this.storageAdapter.removeItem(e) : zl(e);
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
      Oe.SESSION_HISTORY_KEY,
      JSON.stringify(s)
    );
  }
  getSessionHistory() {
    const e = this.getItem(Oe.SESSION_HISTORY_KEY);
    return e ? JSON.parse(e) : [];
  }
  getLastActiveSession() {
    const i = this.getSessionHistory().filter(
      (s) => s.active && Date.now() - s.timestamp < ae.SESSION_TIMEOUT
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
      Oe.SESSION_HISTORY_KEY,
      JSON.stringify(s)
    );
  }
  /**
   * Clear visitor data for GDPR compliance
   */
  clearVisitorData() {
    this.removeItem(Oe.VISITOR_ID_KEY), this.removeItem(Oe.SESSION_HISTORY_KEY), this.visitorId = this.generateVisitorId();
  }
};
Oe.VISITOR_ID_KEY = Qr.VISITOR_ID, Oe.SESSION_HISTORY_KEY = Qr.SESSIONS;
let Xs = Oe;
class Qi {
  /**
   * Get API endpoint URL with base path resolved
   */
  static getApiUrl(e, i) {
    const { apiUrl: s } = Js.resolveUrls(i.clientId, i.options);
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
    const { wsUrl: i } = Js.resolveUrls(e.clientId, e.options), s = new URLSearchParams({
      session_id: e.sessionId
    });
    return e.visitorId && s.append("visitor_id", e.visitorId), `${i}?${s}`;
  }
}
var te = /* @__PURE__ */ ((t) => (t.DISCONNECTED = "disconnected", t.CONNECTING = "connecting", t.CONNECTED = "connected", t.ERROR = "error", t))(te || {});
class Nl {
  constructor(e, i) {
    this.ws = null, this.sessionId = null, this.state = "disconnected", this.messageQueue = [], this.reconnectAttempts = 0, this.maxReconnectAttempts = ae.MAX_RECONNECT_ATTEMPTS, this.reconnectDelay = ae.RECONNECT_DELAY, this.heartbeatInterval = null, this.listeners = /* @__PURE__ */ new Map(), this.abortController = null, this.cleanupFunctions = [], this.config = e, this.visitor = i, this.debugLogger = fr(e.getAll());
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
        const i = Qi.getWebSocketUrl({
          clientId: this.config.clientId,
          sessionId: e,
          visitorId: this.visitor.getVisitorId()
        });
        this.ws = new WebSocket(i), this.setupEventHandlers();
      } catch (i) {
        const s = Ni.handle(i, {
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
      var i, s, r, n, a, o, l, d, g;
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
          rawDataLength: ((g = e.data) == null ? void 0 : g.length) || 0
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
   * Send message through WebSocket
   */
  send(e) {
    var r, n, a;
    const i = Ye().getCurrent();
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
      }), this.messageQueue.length >= At.MAX_QUEUE_SIZE) {
        this.debugLogger.warn("WebSocketManager", "Message queue full", {
          queueSize: this.messageQueue.length,
          maxSize: At.MAX_QUEUE_SIZE
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
    this.stopHeartbeat(), this.heartbeatInterval = window.setInterval(() => {
      var e;
      ((e = this.ws) == null ? void 0 : e.readyState) === WebSocket.OPEN && this.ws.send(JSON.stringify({ type: "ping" }));
    }, ae.HEARTBEAT_INTERVAL), this.cleanupFunctions.push(() => this.stopHeartbeat());
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
    this.stopHeartbeat(), this.ws && (this.ws.onopen = null, this.ws.onmessage = null, this.ws.onerror = null, this.ws.onclose = null, (this.ws.readyState === WebSocket.OPEN || this.ws.readyState === WebSocket.CONNECTING) && this.ws.close(1e3, "Cleanup"), this.ws = null), this.abortController && (this.abortController.abort(), this.abortController = null), this.cleanupFunctions.forEach((e) => {
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
var Ul = /* @__PURE__ */ K('<header class="chat-header svelte-g5m62x"><div class="header-content svelte-g5m62x"><div role="status"></div> <h2 class="header-title svelte-g5m62x"> </h2></div> <button class="close-button svelte-g5m62x" aria-label="Close chat" type="button"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true" class="svelte-g5m62x"><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor" class="svelte-g5m62x"></path></svg></button></header>');
const Hl = {
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
function $n(t, e) {
  pt(e, !0), Ht(t, Hl);
  let i = gt(e, "onclose", 7), s = gt(e, "connectionState", 23, () => te.DISCONNECTED), r = gt(e, "connectionFailed", 7, !1);
  const n = /* @__PURE__ */ Se(() => {
    if (r()) return "var(--widget-error)";
    switch (s()) {
      case te.CONNECTED:
        return "var(--widget-success)";
      case te.CONNECTING:
        return "var(--widget-warning, #ca8a04)";
      case /* Darker yellow for WCAG AA */
      te.ERROR:
        return "var(--widget-error)";
      default:
        return "var(--widget-text-secondary)";
    }
  }), a = /* @__PURE__ */ Se(() => {
    if (r()) return "Connection lost";
    switch (s()) {
      case te.CONNECTED:
        return "Connected";
      case te.CONNECTING:
        return "Connecting";
      case te.ERROR:
        return "Connection error";
      case te.DISCONNECTED:
        return "Disconnected";
      default:
        return "";
    }
  }), o = /* @__PURE__ */ Se(() => s() === te.CONNECTING ? "pulse-slow" : s() === te.ERROR ? "blink-slow" : "");
  function l() {
    var v;
    j.close(), (v = i()) == null || v();
  }
  var d = {
    get onclose() {
      return i();
    },
    set onclose(v) {
      i(v), Fe();
    },
    get connectionState() {
      return s();
    },
    set connectionState(v = te.DISCONNECTED) {
      s(v), Fe();
    },
    get connectionFailed() {
      return r();
    },
    set connectionFailed(v = !1) {
      r(v), Fe();
    }
  }, g = Ul(), h = q(g), f = q(h), p = V(f, 2), u = q(p, !0);
  W(p), W(h);
  var w = V(h, 2);
  return w.__click = l, W(g), ut(() => {
    dr(f, 1, `status-dot ${m(o) ?? ""}`, "svelte-g5m62x"), Xo(f, `--status-color: ${m(n) ?? ""}`), Ke(f, "aria-label", m(a)), Ke(f, "title", m(a)), us(u, ft.title);
  }), N(t, g), vt(d);
}
Cs(["click"]);
Gt($n, { onclose: {}, connectionState: {}, connectionFailed: {} }, [], [], !0);
var Gl = /* @__PURE__ */ K('<span class="sending-indicator svelte-1uqoiy7" aria-label="Sending message" role="status"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svelte-1uqoiy7"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="currentColor" opacity="0.3"></path><path d="M12 2C6.48 2 2 6.48 2 12H4C4 7.58 7.58 4 12 4V2Z" fill="currentColor"><animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite"></animateTransform></path></svg></span>'), jl = /* @__PURE__ */ K('<span class="failed-indicator svelte-1uqoiy7" aria-label="Message failed to send" role="alert"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svelte-1uqoiy7"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#ef4444"></path><path d="M11 7H13V13H11V7ZM11 15H13V17H11V15Z" fill="#ef4444"></path></svg></span>'), Yl = /* @__PURE__ */ K('<div role="listitem"><div class="message-bubble svelte-1uqoiy7"><span class="message-content"> </span> <!> <!></div> <div class="message-time svelte-1uqoiy7"> </div></div>');
const Fl = {
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
function ea(t, e) {
  pt(e, !0), Ht(t, Fl);
  let i = gt(e, "message", 7);
  function s(A) {
    return new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", hour12: !0 }).format(A);
  }
  const r = /* @__PURE__ */ Se(() => i().role === "user");
  var n = {
    get message() {
      return i();
    },
    set message(A) {
      i(A), Fe();
    }
  }, a = Yl();
  let o;
  var l = q(a), d = q(l), g = q(d, !0);
  W(d);
  var h = V(d, 2);
  {
    var f = (A) => {
      var O = Gl();
      N(A, O);
    };
    ke(h, (A) => {
      i().status === "sending" && A(f);
    });
  }
  var p = V(h, 2);
  {
    var u = (A) => {
      var O = jl();
      N(A, O);
    };
    ke(p, (A) => {
      i().status === "failed" && A(u);
    });
  }
  W(l);
  var w = V(l, 2), v = q(w, !0);
  return W(w), W(a), ut(
    (A, O) => {
      o = dr(a, 1, "message svelte-1uqoiy7", null, o, { user: m(r), assistant: !m(r) }), Ke(a, "aria-label", m(r) ? "Your message" : "Assistant message"), us(g, i().content), Ke(w, "aria-label", A), us(v, O);
    },
    [
      () => `Sent at ${s(i().timestamp)}`,
      () => s(i().timestamp)
    ]
  ), N(t, a), vt(n);
}
Gt(ea, { message: {} }, [], [], !0);
so();
var Wl = /* @__PURE__ */ K('<div class="typing-indicator svelte-ej4x60" role="status" aria-live="polite" aria-label="Assistant is typing"><span aria-hidden="true" class="svelte-ej4x60"></span> <span aria-hidden="true" class="svelte-ej4x60"></span> <span aria-hidden="true" class="svelte-ej4x60"></span> <span class="sr-only svelte-ej4x60">Assistant is typing a response</span></div>');
const ql = {
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
function ta(t, e) {
  pt(e, !1), Ht(t, ql), tl();
  var i = Po(), s = rs(i);
  {
    var r = (n) => {
      var a = Wl();
      N(n, a);
    };
    ke(s, (n) => {
      S.isTyping && n(r);
    });
  }
  N(t, i), vt();
}
Gt(ta, {}, [], [], !0);
var Kl = /* @__PURE__ */ K('<div class="empty-state svelte-qha2j" role="status" aria-label="BotBrewers assistant ready"><div class="empty-icon svelte-qha2j" aria-hidden="true"><img alt="" class="brand-logo svelte-qha2j" width="68" height="68"/></div> <span class="brand-name svelte-qha2j">BotBrewers</span></div>'), Jl = /* @__PURE__ */ K('<div class="messages-container svelte-qha2j" role="list" aria-label="Messages"><!> <!></div>'), Xl = /* @__PURE__ */ K('<div class="error-message svelte-qha2j"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-qha2j"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#ef4444"></path><path d="M11 7H13V13H11V7ZM11 15H13V17H11V15Z" fill="#ef4444"></path></svg> <p class="svelte-qha2j"> </p></div>'), Vl = /* @__PURE__ */ K('<div class="message-list svelte-qha2j" role="log" aria-live="polite" aria-label="Chat conversation"><!> <!></div>');
const Zl = {
  hash: "svelte-qha2j",
  code: `.message-list.svelte-qha2j {flex:1;overflow-y:auto;padding:var(--widget-space-lg);display:flex;flex-direction:column;background:var(--widget-gradient-subtle);position:relative;
    /* iOS momentum scrolling */-webkit-overflow-scrolling:touch;}.empty-state.svelte-qha2j {display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;text-align:center;padding:var(--widget-space-3xl) var(--widget-space-lg);
    animation: fadeIn var(--widget-transition-slow);}.empty-icon.svelte-qha2j {width:96px;height:96px;margin-bottom:var(--widget-space-lg);background:#ffffff; /* Always white to match logo background */backdrop-filter:blur(var(--widget-blur));border-radius:var(--widget-radius-2xl);display:flex;align-items:center;justify-content:center;box-shadow:var(--widget-shadow-md);
    animation: pulse 2s ease-in-out infinite;}.brand-logo.svelte-qha2j {width:68px;height:68px;object-fit:contain;filter:var(--widget-logo-filter, brightness(1));}.brand-name.svelte-qha2j {font-size:var(--widget-font-size-sm);font-weight:var(--widget-font-weight-medium);color:var(--widget-text-secondary);letter-spacing:0.02em;}.messages-container.svelte-qha2j {display:flex;flex-direction:column;gap:var(--widget-space-md);padding-bottom:var(--widget-space-lg);}.error-message.svelte-qha2j {display:flex;align-items:center;gap:var(--widget-space);padding:var(--widget-space) var(--widget-space-md);background:var(--widget-glass);backdrop-filter:blur(var(--widget-blur));border:1px solid var(--widget-error-light);border-radius:var(--widget-radius-lg);color:var(--widget-error);margin-top:var(--widget-space);box-shadow:var(--widget-shadow);
    animation: slideUp var(--widget-transition-slow);}.error-message.svelte-qha2j svg:where(.svelte-qha2j) {width:20px;height:20px;flex-shrink:0;}.error-message.svelte-qha2j p:where(.svelte-qha2j) {margin:0;font-size:var(--widget-font-size-sm);font-weight:500;}
  
  /* Custom scrollbar */.message-list.svelte-qha2j::-webkit-scrollbar {width:6px;}.message-list.svelte-qha2j::-webkit-scrollbar-track {background:transparent;}.message-list.svelte-qha2j::-webkit-scrollbar-thumb {background:var(--widget-border);border-radius:var(--widget-radius-full);}.message-list.svelte-qha2j::-webkit-scrollbar-thumb:hover {background:var(--widget-text-muted);}

  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {.empty-icon.svelte-qha2j,
    .empty-state.svelte-qha2j {
      animation: none;}
  }

  /* Dark theme adjustments - Use CSS variables for maintainability */
  /* Note: .empty-icon stays white in dark mode to match logo's baked-in white background.
     This creates a clean, intentional "logo badge" appearance. */[data-theme="dark"] .empty-icon.svelte-qha2j {box-shadow:var(--widget-shadow-md);}[data-theme="dark"] .brand-name.svelte-qha2j {color:var(--widget-text-muted);}`
};
function ia(t, e) {
  pt(e, !0), Ht(t, Zl);
  let i, s = !0;
  Ot(() => {
    S.messages, s && r();
  }), Ot(() => {
    S.isTyping, s && r();
  }), Ot(() => {
    S.streamingUpdateSignal, s && S.isStreaming && r();
  });
  async function r() {
    await Bn(), i && (i.scrollTop = i.scrollHeight);
  }
  function n() {
    if (i) {
      const { scrollTop: f, scrollHeight: p, clientHeight: u } = i;
      s = p - f - u < 100;
    }
  }
  gr(() => {
    r();
  });
  var a = Vl(), o = q(a);
  {
    var l = (f) => {
      var p = Kl(), u = q(p), w = q(u);
      W(u), Vr(2), W(p), ut(() => Ke(w, "src", Il)), N(f, p);
    }, d = (f) => {
      var p = Jl(), u = q(p);
      Ho(u, 17, () => S.messages, (v) => v.id, (v, A) => {
        ea(v, {
          get message() {
            return m(A);
          }
        });
      });
      var w = V(u, 2);
      ta(w, {}), W(p), N(f, p);
    };
    ke(o, (f) => {
      S.messages.length === 0 ? f(l) : f(d, !1);
    });
  }
  var g = V(o, 2);
  {
    var h = (f) => {
      var p = Xl(), u = V(q(p), 2), w = q(u, !0);
      W(u), W(p), ut(() => us(w, S.error)), N(f, p);
    };
    ke(g, (f) => {
      S.error && f(h);
    });
  }
  W(a), cr(a, (f) => i = f, () => i), Bo("scroll", a, n), N(t, a), vt();
}
Gt(ia, {}, [], [], !0);
var _l = /* @__PURE__ */ K('<div class="input-bar svelte-1a8gd73"><div class="input-container svelte-1a8gd73"><textarea class="input-field svelte-1a8gd73" rows="1" aria-label="Message input"></textarea> <button class="send-button svelte-1a8gd73" aria-label="Send message"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-1a8gd73"><path d="M2 21L23 12L2 3V10L17 12L2 14V21Z" fill="currentColor"></path></svg></button></div></div>');
const $l = {
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
                0 0 0 3px rgba(var(--widget-accent-gold-rgb), 0.2); /* Gold accent glow */}`
};
function sa(t, e) {
  pt(e, !0), Ht(t, $l);
  let i = gt(e, "onsend", 7), s = gt(e, "disabled", 7, !1), r = /* @__PURE__ */ M(""), n;
  function a() {
    var O, H, B, Q;
    const v = Ye().generate();
    P.log("InputBar", "handleSend() called", {
      correlationId: v,
      rawInputValue: m(r),
      rawLength: ((O = m(r)) == null ? void 0 : O.length) || 0,
      rawType: typeof m(r),
      disabled: s(),
      isTyping: S.isTyping
    });
    const A = m(r).trim();
    P.log("InputBar", "After trimming", {
      correlationId: v,
      original: m(r),
      trimmed: A,
      originalLength: ((H = m(r)) == null ? void 0 : H.length) || 0,
      trimmedLength: (A == null ? void 0 : A.length) || 0,
      wasEmptyAfterTrim: !A,
      hadWhitespaceOnly: (((B = m(r)) == null ? void 0 : B.length) || 0) > 0 && !A
    }), A && !s() && !S.isTyping ? (P.log("InputBar", "Conditions met, calling onsend", {
      correlationId: v,
      trimmedValue: A,
      trimmedLength: A.length,
      willSend: !0
    }), Ye().setCurrent(v), (Q = i()) == null || Q(A), C(r, ""), l()) : P.log("InputBar", "Send blocked", {
      correlationId: v,
      hasContent: !!A,
      disabled: s(),
      isTyping: S.isTyping,
      trimmedValue: A || "(empty)",
      reason: A ? s() ? "disabled" : S.isTyping ? "typing in progress" : "unknown" : "empty content"
    });
  }
  function o(v) {
    v.key === "Enter" && !v.shiftKey && (v.preventDefault(), a());
  }
  function l() {
    n && (n.style.height = "auto", n.style.height = Math.min(n.scrollHeight, 120) + "px");
  }
  const d = /* @__PURE__ */ Se(() => s() || S.isTyping || S.error !== null), g = /* @__PURE__ */ Se(() => S.isTyping ? "Waiting for response..." : S.error ? "Error occurred" : ft.placeholder);
  var h = {
    get onsend() {
      return i();
    },
    set onsend(v) {
      i(v), Fe();
    },
    get disabled() {
      return s();
    },
    set disabled(v = !1) {
      s(v), Fe();
    }
  }, f = _l(), p = q(f), u = q(p);
  vo(u), u.__keydown = o, u.__input = l, cr(u, (v) => n = v, () => n);
  var w = V(u, 2);
  return w.__click = a, W(p), W(f), ut(
    (v) => {
      Ke(u, "placeholder", m(g)), u.disabled = m(d), w.disabled = v;
    },
    [() => m(d) || !m(r).trim()]
  ), el(u, () => m(r), (v) => C(r, v)), N(t, f), vt(h);
}
Cs(["keydown", "input", "click"]);
Gt(sa, { onsend: {}, disabled: {} }, [], [], !0);
class ed {
  constructor(e, i) {
    this.sessionId = null, this.config = e, this.visitor = i, this.debugLogger = fr(e.getAll());
  }
  /**
   * Initialize widget session with backend
   */
  async initialize() {
    try {
      const e = new AbortController(), i = setTimeout(() => e.abort(), ae.API_TIMEOUT), s = Qi.getApiUrl("init", {
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
      const n = Ye().getCurrent(), a = await fetch(s, {
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
          throw new Kt(
            `Rate limit exceeded. Please try again in ${d} seconds.`,
            d
          );
        }
        throw new qt(
          `Failed to initialize widget: ${a.statusText}`,
          a.status,
          s
        );
      }
      const o = await a.json();
      return this.sessionId = o.session_id, this.visitor.saveSessionId(o.session_id), o;
    } catch (e) {
      if (e instanceof zi || e instanceof qt || e instanceof Kt)
        throw e;
      const i = Ni.handle(e, {
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
    const i = Ye().getCurrent();
    try {
      this.debugLogger.log("APIClient", "sendMessage() called", {
        correlationId: i,
        message: e,
        messageLength: (e == null ? void 0 : e.length) || 0,
        messageType: typeof e,
        sessionId: this.sessionId,
        clientId: this.config.clientId
      });
      const n = Tl.validate(e);
      if (this.debugLogger.log("APIClient", "Message validation result", {
        correlationId: i,
        input: e,
        isValid: n.isValid,
        error: n.error,
        sanitizedValue: n.sanitizedValue,
        sanitizedLength: ((s = n.sanitizedValue) == null ? void 0 : s.length) || 0,
        contentChanged: e !== n.sanitizedValue
      }), !n.isValid)
        throw this.debugLogger.error("APIClient", "Validation failed", { correlationId: i, error: n.error }), new zi(n.error || "Validation failed", "message", e);
      this.sessionId || (this.debugLogger.log("APIClient", "No session ID, attempting to resume or initialize...", { correlationId: i }), await this.resumeSession() || await this.initialize());
      const a = new AbortController(), o = setTimeout(() => a.abort(), ae.API_TIMEOUT), l = {
        body: {
          client_id: this.config.clientId,
          visitor_id: this.visitor.getVisitorId(),
          session_id: this.sessionId,
          message: n.sanitizedValue
        }
      }, d = Qi.getApiUrl("chat", {
        clientId: this.config.clientId
      });
      this.debugLogger.log("APIClient", "HTTP request payload", {
        correlationId: i,
        url: d,
        payload: l,
        messageContent: l.body.message,
        messageLength: ((r = l.body.message) == null ? void 0 : r.length) || 0
      });
      const g = await fetch(d, {
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
        ok: g.ok,
        status: g.status,
        statusText: g.statusText
      }), !g.ok) {
        if (g.status === 429) {
          const f = g.headers.get("Retry-After"), p = f ? parseInt(f, 10) : 60;
          throw new Kt(
            `Rate limit exceeded. Please try again in ${p} seconds.`,
            p
          );
        }
        throw new qt(
          `Failed to send message: ${g.statusText}`,
          g.status,
          d
        );
      }
      const h = await g.json();
      return this.debugLogger.log("APIClient", "HTTP response data", { correlationId: i, result: h }), h;
    } catch (n) {
      if (this.debugLogger.error("APIClient", "sendMessage() error", { correlationId: i, error: n }), n instanceof zi || n instanceof qt || n instanceof Kt)
        throw n;
      const a = Ni.handle(n, {
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
      const e = new AbortController(), i = setTimeout(() => e.abort(), ae.API_TIMEOUT), s = Qi.getApiUrl("sessionHealth", {
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
      const n = Ye().getCurrent(), a = await fetch(s, {
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
      const e = new AbortController(), i = setTimeout(() => e.abort(), ae.API_TIMEOUT), s = Qi.getApiUrl("sessionHealth", {
        clientId: this.config.clientId,
        sessionId: this.sessionId
      }), r = {
        client_id: this.config.clientId,
        visitor_id: this.visitor.getVisitorId()
      }, n = Ye().getCurrent(), a = await fetch(s, {
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
      const i = Ni.handle(e, {
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
    this.typingTimeout = null, this.hasHiddenTypingForCurrentStream = !1, this.lastCompletionTimestamp = null, this.lastMessageSentTimestamp = null, this.COMPLETION_GRACE_PERIOD_MS = ae.COMPLETION_GRACE_PERIOD, this.chatStore = e, this.uiStore = i, this.debugLogger = s;
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
    const i = ft.initialMessage, s = e.data.initial_message;
    let r;
    i !== void 0 ? r = i || void 0 : r = s, r && !this.chatStore.hasMessages && (this.chatStore.addMessage(r, "assistant"), this.debugLogger.log("ChatController", "Initial message added", {
      source: i !== void 0 ? "client" : "server"
    }));
  }
  handleTypingIndicator() {
    const e = this.lastCompletionTimestamp ? Date.now() - this.lastCompletionTimestamp : 1 / 0, i = this.lastMessageSentTimestamp ? Date.now() - this.lastMessageSentTimestamp : 1 / 0;
    if (e < this.COMPLETION_GRACE_PERIOD_MS && i > ae.CONNECTION_DELAY) {
      this.debugLogger.log("ChatController", "Ignoring typing indicator - grace period");
      return;
    }
    !this.hasHiddenTypingForCurrentStream && !this.chatStore.isStreaming ? (this.debugLogger.log("ChatController", "Processing typing indicator"), this.chatStore.setTyping(!0), this.typingTimeout && clearTimeout(this.typingTimeout), this.typingTimeout = window.setTimeout(() => {
      this.debugLogger.log("ChatController", "Typing indicator timeout"), this.chatStore.setTyping(!1), this.typingTimeout = null;
    }, ae.TYPING_INDICATOR_TIMEOUT)) : this.debugLogger.log("ChatController", "Ignoring typing indicator - already streaming");
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
  setTypingWithTimeout(e = ae.TYPING_FALLBACK_TIMEOUT) {
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
var id = /* @__PURE__ */ K('<span class="error-message svelte-zsv8oa" id="error-message">Connection lost. Unable to reconnect.</span> <button class="restart-button svelte-zsv8oa" aria-describedby="error-message">Retry Connection</button>', 1), sd = /* @__PURE__ */ K('<span class="error-message svelte-zsv8oa" id="error-message">Something went wrong. Please try again.</span> <button class="restart-button svelte-zsv8oa" aria-describedby="error-message">Retry Connection</button>', 1), rd = /* @__PURE__ */ K('<div class="error-banner svelte-zsv8oa" role="alert" aria-live="polite"><!></div>'), nd = /* @__PURE__ */ K('<button class="backdrop svelte-zsv8oa" aria-label="Close chat overlay" tabindex="-1"></button>'), ad = /* @__PURE__ */ K('<div class="chat-container svelte-zsv8oa" role="dialog" aria-label="Chat assistant" aria-modal="true" tabindex="-1"><!> <!> <!> <!></div> <!>', 1), od = /* @__PURE__ */ K('<div class="widget-container svelte-zsv8oa"><!> <!></div>');
const ld = {
  hash: "svelte-zsv8oa",
  code: `.widget-container.svelte-zsv8oa {position:fixed;bottom:var(--widget-space-lg);z-index:var(--widget-z-base);font-family:var(--widget-font-family);}.widget-container[data-position="bottom-right"].svelte-zsv8oa {right:var(--widget-space-lg);}.widget-container[data-position="bottom-left"].svelte-zsv8oa {left:var(--widget-space-lg);}.chat-container.svelte-zsv8oa {
    /* Mobile-first: Full-screen takeover */position:fixed;top:0;left:0;width:100%;height:100%;background:var(--widget-background);border-radius:0;box-shadow:none;border:none;display:flex;flex-direction:column;overflow:hidden;z-index:var(--widget-z-modal);}.backdrop.svelte-zsv8oa {display:block;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0, 0, 0, 0.5);z-index:calc(var(--widget-z-modal) - 1);}.error-banner.svelte-zsv8oa {position:absolute;bottom:75px;left:50%;transform:translateX(-50%);background:var(--widget-background);padding:var(--widget-space-md) var(--widget-space-lg);border-radius:var(--widget-radius-lg);box-shadow:var(--widget-shadow-lg);border:1px solid var(--widget-error);z-index:10;
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
      /* Maintain full-screen but optimize for landscape */height:100%;width:100%;}
  }

  /* Portrait: Default full-screen (already handled by base mobile styles) */
  @media (max-width: 767px) and (orientation: portrait) {.chat-container.svelte-zsv8oa {
      /* Full-screen takeover */height:100%;width:100%;}
  }

  /* Dark theme adjustments - Use CSS variables for maintainability */[data-theme="dark"] .chat-container.svelte-zsv8oa {background:var(--widget-background);border-color:var(--widget-border);}[data-theme="dark"] .error-banner.svelte-zsv8oa {background:var(--widget-surface);border-color:var(--widget-error);}`
};
function ra(t, e) {
  pt(e, !0), Ht(t, ld);
  let i = gt(e, "hostElement", 7), s, r, n, a, o, l;
  const d = Ye();
  let g = !1, h = !1, f = null, p = /* @__PURE__ */ M(X(te.DISCONNECTED)), u = /* @__PURE__ */ M(
    !1
    // Track if max reconnection attempts exhausted
  ), w = /* @__PURE__ */ M(null), v = null;
  function A() {
    var L;
    if ((L = i()) != null && L.hasAttribute("data-theme")) return;
    window.matchMedia("(prefers-color-scheme: dark)").matches && i() && i().setAttribute("data-theme", "dark");
  }
  function O(b) {
    const L = [
      "button:not([disabled])",
      "textarea:not([disabled])",
      "input:not([disabled])",
      '[tabindex]:not([tabindex="-1"])',
      "a[href]"
    ].join(", "), E = b.querySelectorAll(L);
    if (E.length === 0) return;
    const $ = E[0], wt = E[E.length - 1];
    return requestAnimationFrame(() => $.focus()), { firstFocusable: $, lastFocusable: wt };
  }
  function H(b) {
    if (b.key === "Escape" && j.isOpen) {
      b.preventDefault(), j.close(), Q();
      return;
    }
    if (b.key === "Tab" && m(w)) {
      const L = [
        "button:not([disabled])",
        "textarea:not([disabled])",
        "input:not([disabled])",
        '[tabindex]:not([tabindex="-1"])',
        "a[href]"
      ].join(", "), E = m(w).querySelectorAll(L);
      if (E.length === 0) return;
      const $ = E[0], wt = E[E.length - 1];
      b.shiftKey && document.activeElement === $ ? (b.preventDefault(), wt.focus()) : !b.shiftKey && document.activeElement === wt && (b.preventDefault(), $.focus());
    }
  }
  function B() {
    v = document.activeElement;
  }
  function Q() {
    v && typeof v.focus == "function" && requestAnimationFrame(() => v == null ? void 0 : v.focus()), v = null;
  }
  function de() {
    m(w) && O(m(w));
  }
  gr(async () => {
    try {
      if (s = new Bl(i()), l = fr(s.getAll()), r = new Xs(), n = new ed(s, r), a = new Nl(s, r), o = new td(S, j, l), i()) {
        const { configStore: b } = await Promise.resolve().then(() => wl);
        b.loadFromAttributes(i());
      }
      J(), A(), l.log("ChatWidget", "Attaching WebSocket listeners"), a.on("message", ks), a.on("stateChange", (b) => {
        l.log("ChatWidget", "WebSocket state changed", {
          oldState: m(p),
          newState: b,
          timestamp: Date.now()
        }), C(p, b, !0);
      }), a.on("error", (b) => {
        l.error("ChatWidget", "WebSocket error event", b), f = b.error, S.setError(b.error);
      }), a.on("connectionFailed", (b) => {
        l.error("ChatWidget", "WebSocket connection failed after max attempts", b), C(u, !0), f = b.error, S.setError(b.error);
      }), l.log("ChatWidget", "WebSocket listeners attached successfully"), j.isOpen && await ue(), l.log("ChatWidget", "Services initialized successfully");
    } catch (b) {
      l.error("ChatWidget", "Initialization failed", b), f = b instanceof Error ? b.message : "Failed to initialize chat";
    }
  }), al(() => {
    const b = n == null ? void 0 : n.getSessionId();
    b && r.markSessionInactive(b), a == null || a.disconnect(), o == null || o.cleanup();
  });
  async function ue() {
    var b;
    if (!(g || h)) {
      h = !0;
      try {
        if (j.setLoading(!0), await n.resumeSession()) {
          const E = n.getSessionId();
          E && (await a.connect(E), setTimeout(
            () => {
              l.log("ChatWidget", "Testing WebSocket connection after session resumption..."), a.testConnection();
            },
            ae.CONNECTION_DELAY
          ));
        } else {
          const E = await n.initialize();
          (b = E.assistant_info) != null && b.assistant_name && ft.setBackendTitle(E.assistant_info.assistant_name), await a.connect(E.session_id), setTimeout(
            () => {
              l.log("ChatWidget", "Testing WebSocket connection after initialization..."), a.testConnection();
            },
            ae.CONNECTION_DELAY
          ), E.settings && re(E.settings);
        }
        g = !0;
      } catch (L) {
        f = L instanceof Error ? L.message : "Failed to initialize", S.setError(f);
      } finally {
        j.setLoading(!1), h = !1;
      }
    }
  }
  function J() {
    const b = s.getAll();
    requestAnimationFrame(() => {
      if (i() && (i().setAttribute("data-theme", b.theme || "modern"), b.primary_color || b.accent_color)) {
        const L = b.accent_color || b.primary_color;
        if (L) {
          const E = ur(L, "#6b46c1");
          i().style.setProperty("--widget-primary", E), i().style.setProperty("--widget-primary-hover", Re(E, -20)), i().style.setProperty("--widget-primary-light", Re(E, 20)), i().style.setProperty("--widget-primary-dark", Re(E, -30)), i().style.setProperty("--widget-gradient", `linear-gradient(135deg, ${E} 0%, ${Re(E, 20)} 100%)`), i().style.setProperty("--widget-gradient-hover", `linear-gradient(135deg, ${Re(E, -20)} 0%, ${E} 100%)`);
        }
      }
    });
  }
  function re(b) {
    requestAnimationFrame(() => {
      i() && (b.theme && typeof b.theme == "string" && i().setAttribute("data-theme", b.theme), b.primary_color && typeof b.primary_color == "string" && i().style.setProperty("--widget-primary", b.primary_color));
    });
  }
  function ks(b) {
    o.handleMessage(b);
  }
  async function aa(b) {
    const L = d.getCurrent();
    l.log("ChatWidget", "handleSendMessage called with content", {
      correlationId: L,
      content: b,
      length: (b == null ? void 0 : b.length) || 0,
      trimmed: (b == null ? void 0 : b.trim()) || "",
      type: typeof b
    });
    const E = S.addMessage(b, "user");
    if (o.resetForNewMessage(), l.log("ChatWidget", "Message added to store", {
      correlationId: L,
      messageId: E.id,
      content: E.content,
      length: E.content.length
    }), g || (l.log("ChatWidget", "Widget not initialized, initializing...", { correlationId: L }), await ue()), l.log("ChatWidget", "Connection state", {
      correlationId: L,
      connectionState: m(p),
      isConnected: m(p) === te.CONNECTED,
      routingTo: m(p) === te.CONNECTED ? "WebSocket" : "HTTP API"
    }), m(p) === te.CONNECTED) {
      l.log("ChatWidget", "Sending via WebSocket", { correlationId: L, content: b });
      try {
        a.send(b), S.updateMessageStatus(E.id, "sent"), l.log("ChatWidget", "User message marked as sent", { messageId: E.id });
      } catch ($) {
        l.error("ChatWidget", "WebSocket send error", $), S.updateMessageStatus(E.id, "failed"), S.setError("Failed to send message. Please try again.");
        return;
      }
    } else
      try {
        l.log("ChatWidget", "Sending via HTTP API", { correlationId: L, content: b }), o.setTypingWithTimeout();
        const $ = await n.sendMessage(b);
        l.log("ChatWidget", "HTTP API response received", {
          correlationId: L,
          response: $.response,
          sessionId: $.session_id
        }), S.addMessage($.response, "assistant"), S.setTyping(!1), j.isOpen || j.markUnread();
      } catch ($) {
        l.error("ChatWidget", "HTTP API error", $), f = "Failed to send message. Please try again.", S.setError(f), S.updateMessageStatus(E.id, "failed"), S.setTyping(!1);
      }
  }
  async function oa() {
    l.log("ChatWidget", "Toggle clicked, current state", m(Zi)), j.isOpen || B(), j.toggle(), await new Promise((b) => setTimeout(b, 0)), l.log("ChatWidget", "New state", j.isOpen), j.isOpen && !g && s && await ue(), j.isOpen ? requestAnimationFrame(() => de()) : Q();
  }
  function la() {
    S.clearMessages(), S.setError(null), f = null;
  }
  function da() {
    l.log("ChatWidget", "Manual retry connection requested"), C(u, !1), f = null, S.setError(null), a == null || a.retryConnection();
  }
  const Zi = /* @__PURE__ */ Se(() => j.isOpen), ca = /* @__PURE__ */ Se(() => j.isLoading), ga = /* @__PURE__ */ Se(() => (s == null ? void 0 : s.position) || "bottom-right");
  var ua = {
    get hostElement() {
      return i();
    },
    set hostElement(b) {
      i(b), Fe();
    }
  }, Mi = od(), pr = q(Mi);
  {
    var fa = (b) => {
      qn(b, { onclick: oa });
    };
    ke(pr, (b) => {
      m(Zi) || b(fa);
    });
  }
  var ha = V(pr, 2);
  {
    var pa = (b) => {
      var L = ad(), E = rs(L);
      E.__keydown = H;
      var $ = q(E);
      $n($, {
        onclose: () => {
          j.close(), Q();
        },
        get connectionState() {
          return m(p);
        },
        get connectionFailed() {
          return m(u);
        }
      });
      var wt = V($, 2);
      ia(wt, {});
      var vr = V(wt, 2);
      {
        let Me = /* @__PURE__ */ Se(() => S.error !== null || m(ca));
        sa(vr, {
          onsend: aa,
          get disabled() {
            return m(Me);
          }
        });
      }
      var va = V(vr, 2);
      {
        var ma = (Me) => {
          var bt = rd(), Aa = q(bt);
          {
            var ya = (jt) => {
              var Ti = id(), Ss = V(rs(Ti), 2);
              Ss.__click = da, N(jt, Ti);
            }, Ia = (jt) => {
              var Ti = sd(), Ss = V(rs(Ti), 2);
              Ss.__click = la, N(jt, Ti);
            };
            ke(Aa, (jt) => {
              m(u) ? jt(ya) : jt(Ia, !1);
            });
          }
          W(bt), N(Me, bt);
        };
        ke(va, (Me) => {
          S.error && Me(ma);
        });
      }
      W(E), cr(E, (Me) => C(w, Me), () => m(w));
      var wa = V(E, 2);
      {
        var ba = (Me) => {
          var bt = nd();
          bt.__click = () => j.close(), Mr(3, bt, () => gl, () => ({ duration: 200 })), N(Me, bt);
        };
        ke(wa, (Me) => {
          m(Zi) && Me(ba);
        });
      }
      Mr(3, E, () => ul, () => ({ y: 20, duration: 300 })), N(b, L);
    };
    ke(ha, (b) => {
      m(Zi) && b(pa);
    });
  }
  return W(Mi), ut(() => {
    Ke(Mi, "data-position", m(ga)), Ke(Mi, "data-theme", ft.theme);
  }), N(t, Mi), vt(ua);
}
Cs(["keydown", "click"]);
Gt(ra, { hostElement: {} }, [], [], !0);
const hr = {
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
function dd(t = hr) {
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
function cd(t = hr) {
  return dd(t);
}
const na = {
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
}, zr = na, Nr = {
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
}, gd = {
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
}, ud = {
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
}, fd = {
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
    "bot-brewers": Vs,
    modern: na,
    professional: zr,
    corporate: zr,
    // Alias for backward compatibility
    friendly: Nr,
    playful: Nr,
    // Alias
    minimal: gd,
    dark: ud,
    elegant: fd,
    bold: hd,
    generic: hr,
    default: Vs
  }[t.toLowerCase()] || null;
}
class Ur extends HTMLElement {
  constructor() {
    super(), this._app = null, this._currentTheme = "bot-brewers", this._shadowRoot = this.attachShadow({ mode: "open" });
  }
  // Default to Bot Brewers theme
  // Define which attributes we should observe for changes
  static get observedAttributes() {
    return ["theme", "data-theme", "accent-color", "position", "title", "client-id", "initial-message"];
  }
  async connectedCallback() {
    var r, n;
    const e = this.getAttribute("client-id"), i = window, s = ((r = i.AIChat) == null ? void 0 : r.clientId) || ((n = i.ChatWidget) == null ? void 0 : n.clientId);
    if (!e && !s) {
      P.error("ChatWidget", 'Configuration missing. Please set client-id attribute or window.AIChat = { clientId: "your_client_id" }');
      return;
    }
    this.mountApp();
  }
  disconnectedCallback() {
    this._app && (Ws(this._app), this._app = null);
  }
  attributeChangedCallback(e, i, s) {
    i !== s && ((e === "theme" || e === "data-theme") && s && (this._currentTheme = s, ft.updateConfig({ theme: s }, "user"), this.updateStyles()), e === "accent-color" && s && this.updateAccentColor(s), e === "client-id" && s && this._app && (P.log("ChatWidget", `Client ID changed from ${i} to ${s}, remounting widget`), Ws(this._app), this._app = null, this.mountApp()), e === "title" && s && ft.setUserTitle(s));
  }
  mountApp() {
    const e = this.getAttribute("theme") || this.getAttribute("data-theme") || "bot-brewers";
    this._currentTheme = e;
    const i = document.createElement("div");
    i.className = "widget-root";
    const s = document.createElement("style");
    s.textContent = this.getStyles(), this._shadowRoot.innerHTML = "", this._shadowRoot.appendChild(s), this._shadowRoot.appendChild(i), this._app = lr(ra, {
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
    const i = pd(e) || Vs;
    return cd(i);
  }
  updateStyles() {
    const e = this._shadowRoot.querySelector("style");
    e && (e.textContent = this.getStyles());
  }
  updateAccentColor(e) {
    const i = this._shadowRoot.querySelector(".widget-root");
    i && Promise.resolve().then(() => vl).then(({ adjustColor: s }) => {
      i.style.setProperty("--widget-primary", e), i.style.setProperty("--widget-primary-hover", s(e, -20)), i.style.setProperty("--widget-primary-light", s(e, 20)), i.style.setProperty("--widget-primary-dark", s(e, -30));
    });
  }
}
customElements.get("assistant-widget") ? customElements.get("chat-widget") || customElements.define("chat-widget", Ur) : customElements.define("assistant-widget", Ur);
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", Hr) : Hr();
function Hr() {
  if (document.querySelector("assistant-widget, chat-widget"))
    return;
  const t = window, e = t.AIChat || t.ChatWidget;
  if (e != null && e.clientId) {
    if (e.autoInit === !1) {
      P.log("ChatWidget", "Auto-initialization disabled");
      return;
    }
    const i = document.createElement("assistant-widget");
    document.body.appendChild(i), P.log("ChatWidget", "Auto-initialized with client ID", e.clientId);
  }
}
export {
  Ur as ChatWidgetElement
};
