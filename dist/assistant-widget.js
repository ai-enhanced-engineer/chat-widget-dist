var ha = Object.defineProperty;
var hr = (t) => {
  throw TypeError(t);
};
var ga = (t, e, i) => e in t ? ha(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i;
var U = (t, e, i) => ga(t, typeof e != "symbol" ? e + "" : e, i), Is = (t, e, i) => e.has(t) || hr("Cannot " + i);
var d = (t, e, i) => (Is(t, e, "read from private field"), i ? i.call(t) : e.get(t)), _ = (t, e, i) => e.has(t) ? hr("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), w = (t, e, i, s) => (Is(t, e, "write to private field"), s ? s.call(t, i) : e.set(t, i), i), z = (t, e, i) => (Is(t, e, "access private method"), i);
var Dr = Array.isArray, pa = Array.prototype.indexOf, gs = Array.from, ss = Object.keys, rs = Object.defineProperty, Ht = Object.getOwnPropertyDescriptor, Pr = Object.getOwnPropertyDescriptors, va = Object.prototype, ma = Array.prototype, Zs = Object.getPrototypeOf, gr = Object.isExtensible;
function wa(t) {
  return typeof t == "function";
}
const Ti = () => {
};
function ba(t) {
  return t();
}
function $s(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function Ur() {
  var t, e, i = new Promise((s, r) => {
    t = s, e = r;
  });
  return { promise: i, resolve: t, reject: e };
}
const Z = 2, Ks = 4, ps = 8, ya = 1 << 24, je = 16, Qe = 32, ct = 64, vs = 128, Ae = 512, Q = 1024, pe = 2048, We = 4096, ge = 8192, Je = 16384, Fi = 32768, Ct = 65536, pr = 1 << 17, Hr = 1 << 18, Mt = 1 << 19, Wr = 1 << 20, rt = 1 << 25, Et = 32768, As = 1 << 21, Js = 1 << 22, nt = 1 << 23, Wt = Symbol("$state"), _a = Symbol("legacy props"), xa = Symbol(""), Rt = new class extends Error {
  constructor() {
    super(...arguments);
    U(this, "name", "StaleReactionError");
    U(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}(), Xs = 3, xi = 8;
function Vr(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Sa() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Ca(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ea() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ia(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ta() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ka() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Ma() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function $a() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Aa() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function La() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Oa = 1, Na = 2, za = 16, Ra = 2, Da = 4, Pa = 8, Ua = 4, Ha = 1, Wa = 2, jr = "[", ms = "[!", Qs = "]", pi = {}, J = Symbol(), Va = "http://www.w3.org/1999/xhtml";
function ws(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function ja() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let A = !1;
function Ze(t) {
  A = t;
}
let E;
function ve(t) {
  if (t === null)
    throw ws(), pi;
  return E = t;
}
function bs() {
  return ve(/* @__PURE__ */ qe(E));
}
function B(t) {
  if (A) {
    if (/* @__PURE__ */ qe(E) !== null)
      throw ws(), pi;
    E = t;
  }
}
function ns(t = 1) {
  if (A) {
    for (var e = t, i = E; e--; )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ qe(i);
    E = i;
  }
}
function as(t = !0) {
  for (var e = 0, i = E; ; ) {
    if (i.nodeType === xi) {
      var s = (
        /** @type {Comment} */
        i.data
      );
      if (s === Qs) {
        if (e === 0) return i;
        e -= 1;
      } else (s === jr || s === ms) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ qe(i)
    );
    t && i.remove(), i = r;
  }
}
function qr(t) {
  if (!t || t.nodeType !== xi)
    throw ws(), pi;
  return (
    /** @type {Comment} */
    t.data
  );
}
function Fr(t) {
  return t === this.v;
}
function qa(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Br(t) {
  return !qa(t, this.v);
}
let Si = !1;
function Fa() {
  Si = !0;
}
let R = null;
function vi(t) {
  R = t;
}
function dt(t, e = !1, i) {
  R = {
    p: R,
    i: !1,
    c: null,
    e: null,
    s: t,
    x: null,
    l: Si && !e ? { s: null, u: null, $: [] } : null
  };
}
function ut(t) {
  var e = (
    /** @type {ComponentContext} */
    R
  ), i = e.e;
  if (i !== null) {
    e.e = null;
    for (var s of i)
      pn(s);
  }
  return t !== void 0 && (e.x = t), e.i = !0, R = e.p, t ?? /** @type {T} */
  {};
}
function Bi() {
  return !Si || R !== null && R.l === null;
}
let gt = [];
function Yr() {
  var t = gt;
  gt = [], $s(t);
}
function Ci(t) {
  if (gt.length === 0 && !Oi) {
    var e = gt;
    queueMicrotask(() => {
      e === gt && Yr();
    });
  }
  gt.push(t);
}
function Ba() {
  for (; gt.length > 0; )
    Yr();
}
function Gr(t) {
  var e = k;
  if (e === null)
    return T.f |= nt, t;
  if (e.f & Fi)
    mi(t, e);
  else {
    if (!(e.f & vs))
      throw t;
    e.b.error(t);
  }
}
function mi(t, e) {
  for (; e !== null; ) {
    if (e.f & vs)
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
const Ki = /* @__PURE__ */ new Set();
let C = null, Xi = null, H = null, xe = [], ys = null, Ls = !1, Oi = !1;
var qt, Ft, pt, vt, Wi, Bt, Yt, G, Os, ki, Ns, Zr, Kr;
const us = class us {
  constructor() {
    _(this, G);
    U(this, "committed", !1);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    U(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    U(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    _(this, qt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    _(this, Ft, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    _(this, pt, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    _(this, vt, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    _(this, Wi, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    _(this, Bt, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    _(this, Yt, /* @__PURE__ */ new Set());
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    U(this, "skipped_effects", /* @__PURE__ */ new Set());
    U(this, "is_fork", !1);
  }
  is_deferred() {
    return this.is_fork || d(this, vt) > 0;
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var s;
    xe = [], Xi = null, this.apply();
    var i = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const r of e)
      z(this, G, Os).call(this, r, i);
    this.is_fork || z(this, G, Zr).call(this), this.is_deferred() ? (z(this, G, ki).call(this, i.effects), z(this, G, ki).call(this, i.render_effects)) : (Xi = this, C = null, vr(i.render_effects), vr(i.effects), Xi = null, (s = d(this, Wi)) == null || s.resolve()), H = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, i) {
    this.previous.has(e) || this.previous.set(e, i), e.f & nt || (this.current.set(e, e.v), H == null || H.set(e, e.v));
  }
  activate() {
    C = this, this.apply();
  }
  deactivate() {
    C === this && (C = null, H = null);
  }
  flush() {
    if (this.activate(), xe.length > 0) {
      if (Jr(), C !== null && C !== this)
        return;
    } else d(this, pt) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const e of d(this, Ft)) e(this);
    d(this, Ft).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(e) {
    w(this, pt, d(this, pt) + 1), e && w(this, vt, d(this, vt) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(e) {
    w(this, pt, d(this, pt) - 1), e && w(this, vt, d(this, vt) - 1), this.revive();
  }
  revive() {
    for (const e of d(this, Bt))
      d(this, Yt).delete(e), ee(e, pe), It(e);
    for (const e of d(this, Yt))
      ee(e, We), It(e);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(e) {
    d(this, qt).add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(e) {
    d(this, Ft).add(e);
  }
  settled() {
    return (d(this, Wi) ?? w(this, Wi, Ur())).promise;
  }
  static ensure() {
    if (C === null) {
      const e = C = new us();
      Ki.add(C), Oi || us.enqueue(() => {
        C === e && e.flush();
      });
    }
    return C;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    Ci(e);
  }
  apply() {
  }
};
qt = new WeakMap(), Ft = new WeakMap(), pt = new WeakMap(), vt = new WeakMap(), Wi = new WeakMap(), Bt = new WeakMap(), Yt = new WeakMap(), G = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {EffectTarget} target
 */
Os = function(e, i) {
  var u;
  e.f ^= Q;
  for (var s = e.first; s !== null; ) {
    var r = s.f, n = (r & (Qe | ct)) !== 0, a = n && (r & Q) !== 0, o = a || (r & ge) !== 0 || this.skipped_effects.has(s);
    if (s.f & vs && ((u = s.b) != null && u.is_pending()) && (i = {
      parent: i,
      effect: s,
      effects: [],
      render_effects: []
    }), !o && s.fn !== null) {
      n ? s.f ^= Q : r & Ks ? i.effects.push(s) : Gi(s) && (s.f & je && d(this, Bt).add(s), Ui(s));
      var l = s.first;
      if (l !== null) {
        s = l;
        continue;
      }
    }
    var c = s.parent;
    for (s = s.next; s === null && c !== null; )
      c === i.effect && (z(this, G, ki).call(this, i.effects), z(this, G, ki).call(this, i.render_effects), i = /** @type {EffectTarget} */
      i.parent), s = c.next, c = c.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
ki = function(e) {
  for (const i of e)
    i.f & pe ? d(this, Bt).add(i) : i.f & We && d(this, Yt).add(i), z(this, G, Ns).call(this, i.deps), ee(i, Q);
}, /**
 * @param {Value[] | null} deps
 */
Ns = function(e) {
  if (e !== null)
    for (const i of e)
      !(i.f & Z) || !(i.f & Et) || (i.f ^= Et, z(this, G, Ns).call(
        this,
        /** @type {Derived} */
        i.deps
      ));
}, Zr = function() {
  if (d(this, vt) === 0) {
    for (const e of d(this, qt)) e();
    d(this, qt).clear();
  }
  d(this, pt) === 0 && z(this, G, Kr).call(this);
}, Kr = function() {
  var n;
  if (Ki.size > 1) {
    this.previous.clear();
    var e = H, i = !0, s = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const a of Ki) {
      if (a === this) {
        i = !1;
        continue;
      }
      const o = [];
      for (const [c, u] of this.current) {
        if (a.current.has(c))
          if (i && u !== a.current.get(c))
            a.current.set(c, u);
          else
            continue;
        o.push(c);
      }
      if (o.length === 0)
        continue;
      const l = [...a.current.keys()].filter((c) => !this.current.has(c));
      if (l.length > 0) {
        var r = xe;
        xe = [];
        const c = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
        for (const h of o)
          Xr(h, l, c, u);
        if (xe.length > 0) {
          C = a, a.apply();
          for (const h of xe)
            z(n = a, G, Os).call(n, h, s);
          a.deactivate();
        }
        xe = r;
      }
    }
    C = null, H = e;
  }
  this.committed = !0, Ki.delete(this);
};
let Pe = us;
function lt(t) {
  var e = Oi;
  Oi = !0;
  try {
    for (var i; ; ) {
      if (Ba(), xe.length === 0 && (C == null || C.flush(), xe.length === 0))
        return ys = null, /** @type {T} */
        i;
      Jr();
    }
  } finally {
    Oi = e;
  }
}
function Jr() {
  var t = xt;
  Ls = !0;
  var e = null;
  try {
    var i = 0;
    for (ls(!0); xe.length > 0; ) {
      var s = Pe.ensure();
      if (i++ > 1e3) {
        var r, n;
        Ya();
      }
      s.process(xe), at.clear();
    }
  } finally {
    Ls = !1, ls(t), ys = null;
  }
}
function Ya() {
  try {
    Ta();
  } catch (t) {
    mi(t, ys);
  }
}
let Te = null;
function vr(t) {
  var e = t.length;
  if (e !== 0) {
    for (var i = 0; i < e; ) {
      var s = t[i++];
      if (!(s.f & (Je | ge)) && Gi(s) && (Te = /* @__PURE__ */ new Set(), Ui(s), s.deps === null && s.first === null && s.nodes === null && (s.teardown === null && s.ac === null ? wn(s) : s.fn = null), (Te == null ? void 0 : Te.size) > 0)) {
        at.clear();
        for (const r of Te) {
          if (r.f & (Je | ge)) continue;
          const n = [r];
          let a = r.parent;
          for (; a !== null; )
            Te.has(a) && (Te.delete(a), n.push(a)), a = a.parent;
          for (let o = n.length - 1; o >= 0; o--) {
            const l = n[o];
            l.f & (Je | ge) || Ui(l);
          }
        }
        Te.clear();
      }
    }
    Te = null;
  }
}
function Xr(t, e, i, s) {
  if (!i.has(t) && (i.add(t), t.reactions !== null))
    for (const r of t.reactions) {
      const n = r.f;
      n & Z ? Xr(
        /** @type {Derived} */
        r,
        e,
        i,
        s
      ) : n & (Js | je) && !(n & pe) && Qr(r, e, s) && (ee(r, pe), It(
        /** @type {Effect} */
        r
      ));
    }
}
function Qr(t, e, i) {
  const s = i.get(t);
  if (s !== void 0) return s;
  if (t.deps !== null)
    for (const r of t.deps) {
      if (e.includes(r))
        return !0;
      if (r.f & Z && Qr(
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
function It(t) {
  for (var e = ys = t; e.parent !== null; ) {
    e = e.parent;
    var i = e.f;
    if (Ls && e === k && i & je && !(i & Hr))
      return;
    if (i & (ct | Qe)) {
      if (!(i & Q)) return;
      e.f ^= Q;
    }
  }
  xe.push(e);
}
function Ga(t) {
  let e = 0, i = Tt(0), s;
  return () => {
    Di() && (m(i), _s(() => (e === 0 && (s = At(() => t(() => Ni(i)))), e += 1, () => {
      Ci(() => {
        e -= 1, e === 0 && (s == null || s(), s = void 0, Ni(i));
      });
    })));
  };
}
var Za = Ct | Mt | vs;
function Ka(t, e, i) {
  new Ja(t, e, i);
}
var be, ue, Vi, Ne, mt, ze, ye, le, Re, Be, tt, wt, it, bt, st, fs, W, en, tn, zs, Qi, es, Rs;
class Ja {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, i, s) {
    _(this, W);
    /** @type {Boundary | null} */
    U(this, "parent");
    _(this, be, !1);
    /** @type {TemplateNode} */
    _(this, ue);
    /** @type {TemplateNode | null} */
    _(this, Vi, A ? E : null);
    /** @type {BoundaryProps} */
    _(this, Ne);
    /** @type {((anchor: Node) => void)} */
    _(this, mt);
    /** @type {Effect} */
    _(this, ze);
    /** @type {Effect | null} */
    _(this, ye, null);
    /** @type {Effect | null} */
    _(this, le, null);
    /** @type {Effect | null} */
    _(this, Re, null);
    /** @type {DocumentFragment | null} */
    _(this, Be, null);
    /** @type {TemplateNode | null} */
    _(this, tt, null);
    _(this, wt, 0);
    _(this, it, 0);
    _(this, bt, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    _(this, st, null);
    _(this, fs, Ga(() => (w(this, st, Tt(d(this, wt))), () => {
      w(this, st, null);
    })));
    w(this, ue, e), w(this, Ne, i), w(this, mt, s), this.parent = /** @type {Effect} */
    k.b, w(this, be, !!d(this, Ne).pending), w(this, ze, sr(() => {
      if (k.b = this, A) {
        const n = d(this, Vi);
        bs(), /** @type {Comment} */
        n.nodeType === xi && /** @type {Comment} */
        n.data === ms ? z(this, W, tn).call(this) : z(this, W, en).call(this);
      } else {
        var r = z(this, W, zs).call(this);
        try {
          w(this, ye, Se(() => s(r)));
        } catch (n) {
          this.error(n);
        }
        d(this, it) > 0 ? z(this, W, es).call(this) : w(this, be, !1);
      }
      return () => {
        var n;
        (n = d(this, tt)) == null || n.remove();
      };
    }, Za)), A && w(this, ue, E);
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return d(this, be) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!d(this, Ne).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    z(this, W, Rs).call(this, e), w(this, wt, d(this, wt) + e), d(this, st) && wi(d(this, st), d(this, wt));
  }
  get_effect_pending() {
    return d(this, fs).call(this), m(
      /** @type {Source<number>} */
      d(this, st)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var i = d(this, Ne).onerror;
    let s = d(this, Ne).failed;
    if (d(this, bt) || !i && !s)
      throw e;
    d(this, ye) && (ne(d(this, ye)), w(this, ye, null)), d(this, le) && (ne(d(this, le)), w(this, le, null)), d(this, Re) && (ne(d(this, Re)), w(this, Re, null)), A && (ve(
      /** @type {TemplateNode} */
      d(this, Vi)
    ), ns(), ve(as()));
    var r = !1, n = !1;
    const a = () => {
      if (r) {
        ja();
        return;
      }
      r = !0, n && La(), Pe.ensure(), w(this, wt, 0), d(this, Re) !== null && _t(d(this, Re), () => {
        w(this, Re, null);
      }), w(this, be, this.has_pending_snippet()), w(this, ye, z(this, W, Qi).call(this, () => (w(this, bt, !1), Se(() => d(this, mt).call(this, d(this, ue)))))), d(this, it) > 0 ? z(this, W, es).call(this) : w(this, be, !1);
    };
    var o = T;
    try {
      ce(null), n = !0, i == null || i(e, a), n = !1;
    } catch (l) {
      mi(l, d(this, ze) && d(this, ze).parent);
    } finally {
      ce(o);
    }
    s && Ci(() => {
      w(this, Re, z(this, W, Qi).call(this, () => {
        Pe.ensure(), w(this, bt, !0);
        try {
          return Se(() => {
            s(
              d(this, ue),
              () => e,
              () => a
            );
          });
        } catch (l) {
          return mi(
            l,
            /** @type {Effect} */
            d(this, ze).parent
          ), null;
        } finally {
          w(this, bt, !1);
        }
      }));
    });
  }
}
be = new WeakMap(), ue = new WeakMap(), Vi = new WeakMap(), Ne = new WeakMap(), mt = new WeakMap(), ze = new WeakMap(), ye = new WeakMap(), le = new WeakMap(), Re = new WeakMap(), Be = new WeakMap(), tt = new WeakMap(), wt = new WeakMap(), it = new WeakMap(), bt = new WeakMap(), st = new WeakMap(), fs = new WeakMap(), W = new WeakSet(), en = function() {
  try {
    w(this, ye, Se(() => d(this, mt).call(this, d(this, ue))));
  } catch (e) {
    this.error(e);
  }
  w(this, be, !1);
}, tn = function() {
  const e = d(this, Ne).pending;
  e && (w(this, le, Se(() => e(d(this, ue)))), Pe.enqueue(() => {
    var i = z(this, W, zs).call(this);
    w(this, ye, z(this, W, Qi).call(this, () => (Pe.ensure(), Se(() => d(this, mt).call(this, i))))), d(this, it) > 0 ? z(this, W, es).call(this) : (_t(
      /** @type {Effect} */
      d(this, le),
      () => {
        w(this, le, null);
      }
    ), w(this, be, !1));
  }));
}, zs = function() {
  var e = d(this, ue);
  return d(this, be) && (w(this, tt, Le()), d(this, ue).before(d(this, tt)), e = d(this, tt)), e;
}, /**
 * @param {() => Effect | null} fn
 */
Qi = function(e) {
  var i = k, s = T, r = R;
  Ve(d(this, ze)), ce(d(this, ze)), vi(d(this, ze).ctx);
  try {
    return e();
  } catch (n) {
    return Gr(n), null;
  } finally {
    Ve(i), ce(s), vi(r);
  }
}, es = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    d(this, Ne).pending
  );
  d(this, ye) !== null && (w(this, Be, document.createDocumentFragment()), d(this, Be).append(
    /** @type {TemplateNode} */
    d(this, tt)
  ), _n(d(this, ye), d(this, Be))), d(this, le) === null && w(this, le, Se(() => e(d(this, ue))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
Rs = function(e) {
  var i;
  if (!this.has_pending_snippet()) {
    this.parent && z(i = this.parent, W, Rs).call(i, e);
    return;
  }
  w(this, it, d(this, it) + e), d(this, it) === 0 && (w(this, be, !1), d(this, le) && _t(d(this, le), () => {
    w(this, le, null);
  }), d(this, Be) && (d(this, ue).before(d(this, Be)), w(this, Be, null)));
};
function Xa(t, e, i, s) {
  const r = Bi() ? Yi : sn;
  if (i.length === 0 && t.length === 0) {
    s(e.map(r));
    return;
  }
  var n = C, a = (
    /** @type {Effect} */
    k
  ), o = Qa();
  function l() {
    Promise.all(i.map((c) => /* @__PURE__ */ eo(c))).then((c) => {
      o();
      try {
        s([...e.map(r), ...c]);
      } catch (u) {
        a.f & Je || mi(u, a);
      }
      n == null || n.deactivate(), os();
    }).catch((c) => {
      mi(c, a);
    });
  }
  t.length > 0 ? Promise.all(t).then(() => {
    o();
    try {
      return l();
    } finally {
      n == null || n.deactivate(), os();
    }
  }) : l();
}
function Qa() {
  var t = k, e = T, i = R, s = C;
  return function(n = !0) {
    Ve(t), ce(e), vi(i), n && (s == null || s.activate());
  };
}
function os() {
  Ve(null), ce(null), vi(null);
}
// @__NO_SIDE_EFFECTS__
function Yi(t) {
  var e = Z | pe, i = T !== null && T.f & Z ? (
    /** @type {Derived} */
    T
  ) : null;
  return k !== null && (k.f |= Mt), {
    ctx: R,
    deps: null,
    effects: null,
    equals: Fr,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      J
    ),
    wv: 0,
    parent: i ?? k,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function eo(t, e) {
  let i = (
    /** @type {Effect | null} */
    k
  );
  i === null && Sa();
  var s = (
    /** @type {Boundary} */
    i.b
  ), r = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), n = Tt(
    /** @type {V} */
    J
  ), a = !T, o = /* @__PURE__ */ new Map();
  return uo(() => {
    var v;
    var l = Ur();
    r = l.promise;
    try {
      Promise.resolve(t()).then(l.resolve, l.reject).then(() => {
        c === C && c.committed && c.deactivate(), os();
      });
    } catch (p) {
      l.reject(p), os();
    }
    var c = (
      /** @type {Batch} */
      C
    );
    if (a) {
      var u = !s.is_pending();
      s.update_pending_count(1), c.increment(u), (v = o.get(c)) == null || v.reject(Rt), o.delete(c), o.set(c, l);
    }
    const h = (p, f = void 0) => {
      if (c.activate(), f)
        f !== Rt && (n.f |= nt, wi(n, f));
      else {
        n.f & nt && (n.f ^= nt), wi(n, p);
        for (const [g, y] of o) {
          if (o.delete(g), g === c) break;
          y.reject(Rt);
        }
      }
      a && (s.update_pending_count(-1), c.decrement(u));
    };
    l.promise.then(h, (p) => h(null, p || "unknown"));
  }), gn(() => {
    for (const l of o.values())
      l.reject(Rt);
  }), new Promise((l) => {
    function c(u) {
      function h() {
        u === r ? l(n) : c(r);
      }
      u.then(h, h);
    }
    c(r);
  });
}
// @__NO_SIDE_EFFECTS__
function Ke(t) {
  const e = /* @__PURE__ */ Yi(t);
  return xn(e), e;
}
// @__NO_SIDE_EFFECTS__
function sn(t) {
  const e = /* @__PURE__ */ Yi(t);
  return e.equals = Br, e;
}
function rn(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var i = 0; i < e.length; i += 1)
      ne(
        /** @type {Effect} */
        e[i]
      );
  }
}
function to(t) {
  for (var e = t.parent; e !== null; ) {
    if (!(e.f & Z))
      return e.f & Je ? null : (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function er(t) {
  var e, i = k;
  Ve(to(t));
  try {
    t.f &= ~Et, rn(t), e = In(t);
  } finally {
    Ve(i);
  }
  return e;
}
function nn(t) {
  var e = er(t);
  if (t.equals(e) || (C != null && C.is_fork || (t.v = e), t.wv = Cn()), !$t)
    if (H !== null)
      (Di() || C != null && C.is_fork) && H.set(t, e);
    else {
      var i = t.f & Ae ? Q : We;
      ee(t, i);
    }
}
let Ds = /* @__PURE__ */ new Set();
const at = /* @__PURE__ */ new Map();
let an = !1;
function Tt(t, e) {
  var i = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Fr,
    rv: 0,
    wv: 0
  };
  return i;
}
// @__NO_SIDE_EFFECTS__
function M(t, e) {
  const i = Tt(t);
  return xn(i), i;
}
// @__NO_SIDE_EFFECTS__
function on(t, e = !1, i = !0) {
  var r;
  const s = Tt(t);
  return e || (s.equals = Br), Si && i && R !== null && R.l !== null && ((r = R.l).s ?? (r.s = [])).push(s), s;
}
function I(t, e, i = !1) {
  T !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ue || T.f & pr) && Bi() && T.f & (Z | je | Js | pr) && !(ae != null && ae.includes(t)) && Aa();
  let s = i ? F(e) : e;
  return wi(t, s);
}
function wi(t, e) {
  if (!t.equals(e)) {
    var i = t.v;
    $t ? at.set(t, e) : at.set(t, i), t.v = e;
    var s = Pe.ensure();
    s.capture(t, i), t.f & Z && (t.f & pe && er(
      /** @type {Derived} */
      t
    ), ee(t, t.f & Ae ? Q : We)), t.wv = Cn(), ln(t, pe), Bi() && k !== null && k.f & Q && !(k.f & (Qe | ct)) && (we === null ? go([t]) : we.push(t)), !s.is_fork && Ds.size > 0 && !an && io();
  }
  return e;
}
function io() {
  an = !1;
  var t = xt;
  ls(!0);
  const e = Array.from(Ds);
  try {
    for (const i of e)
      i.f & Q && ee(i, We), Gi(i) && Ui(i);
  } finally {
    ls(t);
  }
  Ds.clear();
}
function Ni(t) {
  I(t, t.v + 1);
}
function ln(t, e) {
  var i = t.reactions;
  if (i !== null)
    for (var s = Bi(), r = i.length, n = 0; n < r; n++) {
      var a = i[n], o = a.f;
      if (!(!s && a === k)) {
        var l = (o & pe) === 0;
        if (l && ee(a, e), o & Z) {
          var c = (
            /** @type {Derived} */
            a
          );
          H == null || H.delete(c), o & Et || (o & Ae && (a.f |= Et), ln(c, We));
        } else l && (o & je && Te !== null && Te.add(
          /** @type {Effect} */
          a
        ), It(
          /** @type {Effect} */
          a
        ));
      }
    }
}
function F(t) {
  if (typeof t != "object" || t === null || Wt in t)
    return t;
  const e = Zs(t);
  if (e !== va && e !== ma)
    return t;
  var i = /* @__PURE__ */ new Map(), s = Dr(t), r = /* @__PURE__ */ M(0), n = St, a = (o) => {
    if (St === n)
      return o();
    var l = T, c = St;
    ce(null), yr(n);
    var u = o();
    return ce(l), yr(c), u;
  };
  return s && i.set("length", /* @__PURE__ */ M(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(o, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Ma();
        var u = i.get(l);
        return u === void 0 ? u = a(() => {
          var h = /* @__PURE__ */ M(c.value);
          return i.set(l, h), h;
        }) : I(u, c.value, !0), !0;
      },
      deleteProperty(o, l) {
        var c = i.get(l);
        if (c === void 0) {
          if (l in o) {
            const u = a(() => /* @__PURE__ */ M(J));
            i.set(l, u), Ni(r);
          }
        } else
          I(c, J), Ni(r);
        return !0;
      },
      get(o, l, c) {
        var p;
        if (l === Wt)
          return t;
        var u = i.get(l), h = l in o;
        if (u === void 0 && (!h || (p = Ht(o, l)) != null && p.writable) && (u = a(() => {
          var f = F(h ? o[l] : J), g = /* @__PURE__ */ M(f);
          return g;
        }), i.set(l, u)), u !== void 0) {
          var v = m(u);
          return v === J ? void 0 : v;
        }
        return Reflect.get(o, l, c);
      },
      getOwnPropertyDescriptor(o, l) {
        var c = Reflect.getOwnPropertyDescriptor(o, l);
        if (c && "value" in c) {
          var u = i.get(l);
          u && (c.value = m(u));
        } else if (c === void 0) {
          var h = i.get(l), v = h == null ? void 0 : h.v;
          if (h !== void 0 && v !== J)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return c;
      },
      has(o, l) {
        var v;
        if (l === Wt)
          return !0;
        var c = i.get(l), u = c !== void 0 && c.v !== J || Reflect.has(o, l);
        if (c !== void 0 || k !== null && (!u || (v = Ht(o, l)) != null && v.writable)) {
          c === void 0 && (c = a(() => {
            var p = u ? F(o[l]) : J, f = /* @__PURE__ */ M(p);
            return f;
          }), i.set(l, c));
          var h = m(c);
          if (h === J)
            return !1;
        }
        return u;
      },
      set(o, l, c, u) {
        var q;
        var h = i.get(l), v = l in o;
        if (s && l === "length")
          for (var p = c; p < /** @type {Source<number>} */
          h.v; p += 1) {
            var f = i.get(p + "");
            f !== void 0 ? I(f, J) : p in o && (f = a(() => /* @__PURE__ */ M(J)), i.set(p + "", f));
          }
        if (h === void 0)
          (!v || (q = Ht(o, l)) != null && q.writable) && (h = a(() => /* @__PURE__ */ M(void 0)), I(h, F(c)), i.set(l, h));
        else {
          v = h.v !== J;
          var g = a(() => F(c));
          I(h, g);
        }
        var y = Reflect.getOwnPropertyDescriptor(o, l);
        if (y != null && y.set && y.set.call(u, c), !v) {
          if (s && typeof l == "string") {
            var x = (
              /** @type {Source<number>} */
              i.get("length")
            ), $ = Number(l);
            Number.isInteger($) && $ >= x.v && I(x, $ + 1);
          }
          Ni(r);
        }
        return !0;
      },
      ownKeys(o) {
        m(r);
        var l = Reflect.ownKeys(o).filter((h) => {
          var v = i.get(h);
          return v === void 0 || v.v !== J;
        });
        for (var [c, u] of i)
          u.v !== J && !(c in o) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        $a();
      }
    }
  );
}
var mr, cn, dn, un;
function Ps() {
  if (mr === void 0) {
    mr = window, cn = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, i = Text.prototype;
    dn = Ht(e, "firstChild").get, un = Ht(e, "nextSibling").get, gr(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), gr(i) && (i.__t = void 0);
  }
}
function Le(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Xe(t) {
  return (
    /** @type {TemplateNode | null} */
    dn.call(t)
  );
}
// @__NO_SIDE_EFFECTS__
function qe(t) {
  return (
    /** @type {TemplateNode | null} */
    un.call(t)
  );
}
function Y(t, e) {
  if (!A)
    return /* @__PURE__ */ Xe(t);
  var i = /* @__PURE__ */ Xe(E);
  if (i === null)
    i = E.appendChild(Le());
  else if (e && i.nodeType !== Xs) {
    var s = Le();
    return i == null || i.before(s), ve(s), s;
  }
  return ve(i), i;
}
function ts(t, e = !1) {
  if (!A) {
    var i = /* @__PURE__ */ Xe(t);
    return i instanceof Comment && i.data === "" ? /* @__PURE__ */ qe(i) : i;
  }
  if (e && (E == null ? void 0 : E.nodeType) !== Xs) {
    var s = Le();
    return E == null || E.before(s), ve(s), s;
  }
  return E;
}
function se(t, e = 1, i = !1) {
  let s = A ? E : t;
  for (var r; e--; )
    r = s, s = /** @type {TemplateNode} */
    /* @__PURE__ */ qe(s);
  if (!A)
    return s;
  if (i && (s == null ? void 0 : s.nodeType) !== Xs) {
    var n = Le();
    return s === null ? r == null || r.after(n) : s.before(n), ve(n), n;
  }
  return ve(s), s;
}
function tr(t) {
  t.textContent = "";
}
function fn() {
  return !1;
}
function so(t) {
  A && /* @__PURE__ */ Xe(t) !== null && tr(t);
}
let wr = !1;
function ro() {
  wr || (wr = !0, document.addEventListener(
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
function Ei(t) {
  var e = T, i = k;
  ce(null), Ve(null);
  try {
    return t();
  } finally {
    ce(e), Ve(i);
  }
}
function no(t, e, i, s = i) {
  t.addEventListener(e, () => Ei(i));
  const r = t.__on_r;
  r ? t.__on_r = () => {
    r(), s(!0);
  } : t.__on_r = () => s(!0), ro();
}
function hn(t) {
  k === null && (T === null && Ia(), Ea()), $t && Ca();
}
function ao(t, e) {
  var i = e.last;
  i === null ? e.last = e.first = t : (i.next = t, t.prev = i, e.last = t);
}
function Oe(t, e, i) {
  var s = k;
  s !== null && s.f & ge && (t |= ge);
  var r = {
    ctx: R,
    deps: null,
    nodes: null,
    f: t | pe | Ae,
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
      Ui(r), r.f |= Fi;
    } catch (o) {
      throw ne(r), o;
    }
  else e !== null && It(r);
  var n = r;
  if (i && n.deps === null && n.teardown === null && n.nodes === null && n.first === n.last && // either `null`, or a singular child
  !(n.f & Mt) && (n = n.first, t & je && t & Ct && n !== null && (n.f |= Ct)), n !== null && (n.parent = s, s !== null && ao(n, s), T !== null && T.f & Z && !(t & ct))) {
    var a = (
      /** @type {Derived} */
      T
    );
    (a.effects ?? (a.effects = [])).push(n);
  }
  return r;
}
function Di() {
  return T !== null && !Ue;
}
function gn(t) {
  const e = Oe(ps, null, !1);
  return ee(e, Q), e.teardown = t, e;
}
function Vt(t) {
  hn();
  var e = (
    /** @type {Effect} */
    k.f
  ), i = !T && (e & Qe) !== 0 && (e & Fi) === 0;
  if (i) {
    var s = (
      /** @type {ComponentContext} */
      R
    );
    (s.e ?? (s.e = [])).push(t);
  } else
    return pn(t);
}
function pn(t) {
  return Oe(Ks | Wr, t, !1);
}
function oo(t) {
  return hn(), Oe(ps | Wr, t, !0);
}
function lo(t) {
  Pe.ensure();
  const e = Oe(ct | Mt, t, !0);
  return () => {
    ne(e);
  };
}
function co(t) {
  Pe.ensure();
  const e = Oe(ct | Mt, t, !0);
  return (i = {}) => new Promise((s) => {
    i.outro ? _t(e, () => {
      ne(e), s(void 0);
    }) : (ne(e), s(void 0));
  });
}
function ir(t) {
  return Oe(Ks, t, !1);
}
function uo(t) {
  return Oe(Js | Mt, t, !0);
}
function _s(t, e = 0) {
  return Oe(ps | e, t, !0);
}
function kt(t, e = [], i = [], s = []) {
  Xa(s, e, i, (r) => {
    Oe(ps, () => t(...r.map(m)), !0);
  });
}
function sr(t, e = 0) {
  var i = Oe(je | e, t, !0);
  return i;
}
function Se(t) {
  return Oe(Qe | Mt, t, !0);
}
function vn(t) {
  var e = t.teardown;
  if (e !== null) {
    const i = $t, s = T;
    br(!0), ce(null);
    try {
      e.call(null);
    } finally {
      br(i), ce(s);
    }
  }
}
function mn(t, e = !1) {
  var i = t.first;
  for (t.first = t.last = null; i !== null; ) {
    const r = i.ac;
    r !== null && Ei(() => {
      r.abort(Rt);
    });
    var s = i.next;
    i.f & ct ? i.parent = null : ne(i, e), i = s;
  }
}
function fo(t) {
  for (var e = t.first; e !== null; ) {
    var i = e.next;
    e.f & Qe || ne(e), e = i;
  }
}
function ne(t, e = !0) {
  var i = !1;
  (e || t.f & Hr) && t.nodes !== null && t.nodes.end !== null && (ho(
    t.nodes.start,
    /** @type {TemplateNode} */
    t.nodes.end
  ), i = !0), mn(t, e && !i), cs(t, 0), ee(t, Je);
  var s = t.nodes && t.nodes.t;
  if (s !== null)
    for (const n of s)
      n.stop();
  vn(t);
  var r = t.parent;
  r !== null && r.first !== null && wn(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes = t.ac = null;
}
function ho(t, e) {
  for (; t !== null; ) {
    var i = t === e ? null : /* @__PURE__ */ qe(t);
    t.remove(), t = i;
  }
}
function wn(t) {
  var e = t.parent, i = t.prev, s = t.next;
  i !== null && (i.next = s), s !== null && (s.prev = i), e !== null && (e.first === t && (e.first = s), e.last === t && (e.last = i));
}
function _t(t, e, i = !0) {
  var s = [];
  bn(t, s, !0);
  var r = () => {
    i && ne(t), e && e();
  }, n = s.length;
  if (n > 0) {
    var a = () => --n || r();
    for (var o of s)
      o.out(a);
  } else
    r();
}
function bn(t, e, i) {
  if (!(t.f & ge)) {
    t.f ^= ge;
    var s = t.nodes && t.nodes.t;
    if (s !== null)
      for (const o of s)
        (o.is_global || i) && e.push(o);
    for (var r = t.first; r !== null; ) {
      var n = r.next, a = (r.f & Ct) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (r.f & Qe) !== 0 && (t.f & je) !== 0;
      bn(r, e, a ? i : !1), r = n;
    }
  }
}
function rr(t) {
  yn(t, !0);
}
function yn(t, e) {
  if (t.f & ge) {
    t.f ^= ge, t.f & Q || (ee(t, pe), It(t));
    for (var i = t.first; i !== null; ) {
      var s = i.next, r = (i.f & Ct) !== 0 || (i.f & Qe) !== 0;
      yn(i, r ? e : !1), i = s;
    }
    var n = t.nodes && t.nodes.t;
    if (n !== null)
      for (const a of n)
        (a.is_global || e) && a.in();
  }
}
function _n(t, e) {
  if (t.nodes)
    for (var i = t.nodes.start, s = t.nodes.end; i !== null; ) {
      var r = i === s ? null : /* @__PURE__ */ qe(i);
      e.append(i), i = r;
    }
}
let xt = !1;
function ls(t) {
  xt = t;
}
let $t = !1;
function br(t) {
  $t = t;
}
let T = null, Ue = !1;
function ce(t) {
  T = t;
}
let k = null;
function Ve(t) {
  k = t;
}
let ae = null;
function xn(t) {
  T !== null && (ae === null ? ae = [t] : ae.push(t));
}
let ie = null, de = 0, we = null;
function go(t) {
  we = t;
}
let Sn = 1, Pi = 0, St = Pi;
function yr(t) {
  St = t;
}
function Cn() {
  return ++Sn;
}
function Gi(t) {
  var e = t.f;
  if (e & pe)
    return !0;
  if (e & Z && (t.f &= ~Et), e & We) {
    var i = t.deps;
    if (i !== null)
      for (var s = i.length, r = 0; r < s; r++) {
        var n = i[r];
        if (Gi(
          /** @type {Derived} */
          n
        ) && nn(
          /** @type {Derived} */
          n
        ), n.wv > t.wv)
          return !0;
      }
    e & Ae && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    H === null && ee(t, Q);
  }
  return !1;
}
function En(t, e, i = !0) {
  var s = t.reactions;
  if (s !== null && !(ae != null && ae.includes(t)))
    for (var r = 0; r < s.length; r++) {
      var n = s[r];
      n.f & Z ? En(
        /** @type {Derived} */
        n,
        e,
        !1
      ) : e === n && (i ? ee(n, pe) : n.f & Q && ee(n, We), It(
        /** @type {Effect} */
        n
      ));
    }
}
function In(t) {
  var f;
  var e = ie, i = de, s = we, r = T, n = ae, a = R, o = Ue, l = St, c = t.f;
  ie = /** @type {null | Value[]} */
  null, de = 0, we = null, T = c & (Qe | ct) ? null : t, ae = null, vi(t.ctx), Ue = !1, St = ++Pi, t.ac !== null && (Ei(() => {
    t.ac.abort(Rt);
  }), t.ac = null);
  try {
    t.f |= As;
    var u = (
      /** @type {Function} */
      t.fn
    ), h = u(), v = t.deps;
    if (ie !== null) {
      var p;
      if (cs(t, de), v !== null && de > 0)
        for (v.length = de + ie.length, p = 0; p < ie.length; p++)
          v[de + p] = ie[p];
      else
        t.deps = v = ie;
      if (Di() && t.f & Ae)
        for (p = de; p < v.length; p++)
          ((f = v[p]).reactions ?? (f.reactions = [])).push(t);
    } else v !== null && de < v.length && (cs(t, de), v.length = de);
    if (Bi() && we !== null && !Ue && v !== null && !(t.f & (Z | We | pe)))
      for (p = 0; p < /** @type {Source[]} */
      we.length; p++)
        En(
          we[p],
          /** @type {Effect} */
          t
        );
    return r !== null && r !== t && (Pi++, we !== null && (s === null ? s = we : s.push(.../** @type {Source[]} */
    we))), t.f & nt && (t.f ^= nt), h;
  } catch (g) {
    return Gr(g);
  } finally {
    t.f ^= As, ie = e, de = i, we = s, T = r, ae = n, vi(a), Ue = o, St = l;
  }
}
function po(t, e) {
  let i = e.reactions;
  if (i !== null) {
    var s = pa.call(i, t);
    if (s !== -1) {
      var r = i.length - 1;
      r === 0 ? i = e.reactions = null : (i[s] = i[r], i.pop());
    }
  }
  i === null && e.f & Z && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ie === null || !ie.includes(e)) && (ee(e, We), e.f & Ae && (e.f ^= Ae, e.f &= ~Et), rn(
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
      po(t, i[s]);
}
function Ui(t) {
  var e = t.f;
  if (!(e & Je)) {
    ee(t, Q);
    var i = k, s = xt;
    k = t, xt = !0;
    try {
      e & (je | ya) ? fo(t) : mn(t), vn(t);
      var r = In(t);
      t.teardown = typeof r == "function" ? r : null, t.wv = Sn;
      var n;
    } finally {
      xt = s, k = i;
    }
  }
}
async function Tn() {
  await Promise.resolve(), lt();
}
function m(t) {
  var e = t.f, i = (e & Z) !== 0;
  if (T !== null && !Ue) {
    var s = k !== null && (k.f & Je) !== 0;
    if (!s && !(ae != null && ae.includes(t))) {
      var r = T.deps;
      if (T.f & As)
        t.rv < Pi && (t.rv = Pi, ie === null && r !== null && r[de] === t ? de++ : ie === null ? ie = [t] : ie.includes(t) || ie.push(t));
      else {
        (T.deps ?? (T.deps = [])).push(t);
        var n = t.reactions;
        n === null ? t.reactions = [T] : n.includes(T) || n.push(T);
      }
    }
  }
  if ($t) {
    if (at.has(t))
      return at.get(t);
    if (i) {
      var a = (
        /** @type {Derived} */
        t
      ), o = a.v;
      return (!(a.f & Q) && a.reactions !== null || Mn(a)) && (o = er(a)), at.set(a, o), o;
    }
  } else i && (!(H != null && H.has(t)) || C != null && C.is_fork && !Di()) && (a = /** @type {Derived} */
  t, Gi(a) && nn(a), xt && Di() && !(a.f & Ae) && kn(a));
  if (H != null && H.has(t))
    return H.get(t);
  if (t.f & nt)
    throw t.v;
  return t.v;
}
function kn(t) {
  if (t.deps !== null) {
    t.f ^= Ae;
    for (const e of t.deps)
      (e.reactions ?? (e.reactions = [])).push(t), e.f & Z && !(e.f & Ae) && kn(
        /** @type {Derived} */
        e
      );
  }
}
function Mn(t) {
  if (t.v === J) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (at.has(e) || e.f & Z && Mn(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function At(t) {
  var e = Ue;
  try {
    return Ue = !0, t();
  } finally {
    Ue = e;
  }
}
const vo = -7169;
function ee(t, e) {
  t.f = t.f & vo | e;
}
function mo(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (Wt in t)
      Us(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const i = t[e];
        typeof i == "object" && i && Wt in i && Us(i);
      }
  }
}
function Us(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let s in t)
      try {
        Us(t[s], e);
      } catch {
      }
    const i = Zs(t);
    if (i !== Object.prototype && i !== Array.prototype && i !== Map.prototype && i !== Set.prototype && i !== Date.prototype) {
      const s = Pr(i);
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
const wo = ["touchstart", "touchmove"];
function bo(t) {
  return wo.includes(t);
}
const $n = /* @__PURE__ */ new Set(), Hs = /* @__PURE__ */ new Set();
function yo(t, e, i, s = {}) {
  function r(n) {
    if (s.capture || Mi.call(e, n), !n.cancelBubble)
      return Ei(() => i == null ? void 0 : i.call(this, n));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? Ci(() => {
    e.addEventListener(t, r, s);
  }) : e.addEventListener(t, r, s), r;
}
function _o(t, e, i, s, r) {
  var n = { capture: s, passive: r }, a = yo(t, e, i, n);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && gn(() => {
    e.removeEventListener(t, a, n);
  });
}
function xs(t) {
  for (var e = 0; e < t.length; e++)
    $n.add(t[e]);
  for (var i of Hs)
    i(t);
}
let _r = null;
function Mi(t) {
  var y;
  var e = this, i = (
    /** @type {Node} */
    e.ownerDocument
  ), s = t.type, r = ((y = t.composedPath) == null ? void 0 : y.call(t)) || [], n = (
    /** @type {null | Element} */
    r[0] || t.target
  );
  _r = t;
  var a = 0, o = _r === t && t.__root;
  if (o) {
    var l = r.indexOf(o);
    if (l !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var c = r.indexOf(e);
    if (c === -1)
      return;
    l <= c && (a = l);
  }
  if (n = /** @type {Element} */
  r[a] || t.target, n !== e) {
    rs(t, "currentTarget", {
      configurable: !0,
      get() {
        return n || i;
      }
    });
    var u = T, h = k;
    ce(null), Ve(null);
    try {
      for (var v, p = []; n !== null; ) {
        var f = n.assignedSlot || n.parentNode || /** @type {any} */
        n.host || null;
        try {
          var g = n["__" + s];
          g != null && (!/** @type {any} */
          n.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === n) && g.call(n, t);
        } catch (x) {
          v ? p.push(x) : v = x;
        }
        if (t.cancelBubble || f === e || f === null)
          break;
        n = f;
      }
      if (v) {
        for (let x of p)
          queueMicrotask(() => {
            throw x;
          });
        throw v;
      }
    } finally {
      t.__root = e, delete t.currentTarget, ce(u), Ve(h);
    }
  }
}
function An(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function ot(t, e) {
  var i = (
    /** @type {Effect} */
    k
  );
  i.nodes === null && (i.nodes = { start: t, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function V(t, e) {
  var i = (e & Ha) !== 0, s = (e & Wa) !== 0, r, n = !t.startsWith("<!>");
  return () => {
    if (A)
      return ot(E, null), E;
    r === void 0 && (r = An(n ? t : "<!>" + t), i || (r = /** @type {TemplateNode} */
    /* @__PURE__ */ Xe(r)));
    var a = (
      /** @type {TemplateNode} */
      s || cn ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    if (i) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Xe(a)
      ), l = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      ot(o, l);
    } else
      ot(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function xo(t, e, i = "svg") {
  var s = !t.startsWith("<!>"), r = `<${i}>${s ? t : "<!>" + t}</${i}>`, n;
  return () => {
    if (A)
      return ot(E, null), E;
    if (!n) {
      var a = (
        /** @type {DocumentFragment} */
        An(r)
      ), o = (
        /** @type {Element} */
        /* @__PURE__ */ Xe(a)
      );
      n = /** @type {Element} */
      /* @__PURE__ */ Xe(o);
    }
    var l = (
      /** @type {TemplateNode} */
      n.cloneNode(!0)
    );
    return ot(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function Ln(t, e) {
  return /* @__PURE__ */ xo(t, e, "svg");
}
function So() {
  if (A)
    return ot(E, null), E;
  var t = document.createDocumentFragment(), e = document.createComment(""), i = Le();
  return t.append(e, i), ot(e, i), t;
}
function N(t, e) {
  if (A) {
    var i = (
      /** @type {Effect & { nodes: EffectNodes }} */
      k
    );
    (!(i.f & Fi) || i.nodes.end === null) && (i.nodes.end = E), bs();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
let Ws = !0;
function ds(t, e) {
  var i = e == null ? "" : typeof e == "object" ? e + "" : e;
  i !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = i, t.nodeValue = i + "");
}
function nr(t, e) {
  return On(t, e);
}
function Co(t, e) {
  Ps(), e.intro = e.intro ?? !1;
  const i = e.target, s = A, r = E;
  try {
    for (var n = /* @__PURE__ */ Xe(i); n && (n.nodeType !== xi || /** @type {Comment} */
    n.data !== jr); )
      n = /* @__PURE__ */ qe(n);
    if (!n)
      throw pi;
    Ze(!0), ve(
      /** @type {Comment} */
      n
    );
    const a = On(t, { ...e, anchor: n });
    return Ze(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a instanceof Error && a.message.split(`
`).some((o) => o.startsWith("https://svelte.dev/e/")))
      throw a;
    return a !== pi && console.warn("Failed to hydrate: ", a), e.recover === !1 && ka(), Ps(), tr(i), Ze(!1), nr(t, e);
  } finally {
    Ze(s), ve(r);
  }
}
const zt = /* @__PURE__ */ new Map();
function On(t, { target: e, anchor: i, props: s = {}, events: r, context: n, intro: a = !0 }) {
  Ps();
  var o = /* @__PURE__ */ new Set(), l = (h) => {
    for (var v = 0; v < h.length; v++) {
      var p = h[v];
      if (!o.has(p)) {
        o.add(p);
        var f = bo(p);
        e.addEventListener(p, Mi, { passive: f });
        var g = zt.get(p);
        g === void 0 ? (document.addEventListener(p, Mi, { passive: f }), zt.set(p, 1)) : zt.set(p, g + 1);
      }
    }
  };
  l(gs($n)), Hs.add(l);
  var c = void 0, u = co(() => {
    var h = i ?? e.appendChild(Le());
    return Ka(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (v) => {
        if (n) {
          dt({});
          var p = (
            /** @type {ComponentContext} */
            R
          );
          p.c = n;
        }
        if (r && (s.$$events = r), A && ot(
          /** @type {TemplateNode} */
          v,
          null
        ), Ws = a, c = t(v, s) || {}, Ws = !0, A && (k.nodes.end = E, E === null || E.nodeType !== xi || /** @type {Comment} */
        E.data !== Qs))
          throw ws(), pi;
        n && ut();
      }
    ), () => {
      var f;
      for (var v of o) {
        e.removeEventListener(v, Mi);
        var p = (
          /** @type {number} */
          zt.get(v)
        );
        --p === 0 ? (document.removeEventListener(v, Mi), zt.delete(v)) : zt.set(v, p);
      }
      Hs.delete(l), h !== i && ((f = h.parentNode) == null || f.removeChild(h));
    };
  });
  return Vs.set(c, u), c;
}
let Vs = /* @__PURE__ */ new WeakMap();
function js(t, e) {
  const i = Vs.get(t);
  return i ? (Vs.delete(t), i(e)) : Promise.resolve();
}
var Me, De, fe, yt, ji, qi, hs;
class Eo {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, i = !0) {
    /** @type {TemplateNode} */
    U(this, "anchor");
    /** @type {Map<Batch, Key>} */
    _(this, Me, /* @__PURE__ */ new Map());
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
    _(this, De, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    _(this, fe, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    _(this, yt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    _(this, ji, !0);
    _(this, qi, () => {
      var e = (
        /** @type {Batch} */
        C
      );
      if (d(this, Me).has(e)) {
        var i = (
          /** @type {Key} */
          d(this, Me).get(e)
        ), s = d(this, De).get(i);
        if (s)
          rr(s), d(this, yt).delete(i);
        else {
          var r = d(this, fe).get(i);
          r && (d(this, De).set(i, r.effect), d(this, fe).delete(i), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), s = r.effect);
        }
        for (const [n, a] of d(this, Me)) {
          if (d(this, Me).delete(n), n === e)
            break;
          const o = d(this, fe).get(a);
          o && (ne(o.effect), d(this, fe).delete(a));
        }
        for (const [n, a] of d(this, De)) {
          if (n === i || d(this, yt).has(n)) continue;
          const o = () => {
            if (Array.from(d(this, Me).values()).includes(n)) {
              var c = document.createDocumentFragment();
              _n(a, c), c.append(Le()), d(this, fe).set(n, { effect: a, fragment: c });
            } else
              ne(a);
            d(this, yt).delete(n), d(this, De).delete(n);
          };
          d(this, ji) || !s ? (d(this, yt).add(n), _t(a, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    _(this, hs, (e) => {
      d(this, Me).delete(e);
      const i = Array.from(d(this, Me).values());
      for (const [s, r] of d(this, fe))
        i.includes(s) || (ne(r.effect), d(this, fe).delete(s));
    });
    this.anchor = e, w(this, ji, i);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, i) {
    var s = (
      /** @type {Batch} */
      C
    ), r = fn();
    if (i && !d(this, De).has(e) && !d(this, fe).has(e))
      if (r) {
        var n = document.createDocumentFragment(), a = Le();
        n.append(a), d(this, fe).set(e, {
          effect: Se(() => i(a)),
          fragment: n
        });
      } else
        d(this, De).set(
          e,
          Se(() => i(this.anchor))
        );
    if (d(this, Me).set(s, e), r) {
      for (const [o, l] of d(this, De))
        o === e ? s.skipped_effects.delete(l) : s.skipped_effects.add(l);
      for (const [o, l] of d(this, fe))
        o === e ? s.skipped_effects.delete(l.effect) : s.skipped_effects.add(l.effect);
      s.oncommit(d(this, qi)), s.ondiscard(d(this, hs));
    } else
      A && (this.anchor = E), d(this, qi).call(this);
  }
}
Me = new WeakMap(), De = new WeakMap(), fe = new WeakMap(), yt = new WeakMap(), ji = new WeakMap(), qi = new WeakMap(), hs = new WeakMap();
function he(t, e, i = !1) {
  A && bs();
  var s = new Eo(t), r = i ? Ct : 0;
  function n(a, o) {
    if (A) {
      const c = qr(t) === ms;
      if (a === c) {
        var l = as();
        ve(l), s.anchor = l, Ze(!1), s.ensure(a, o), Ze(!0);
        return;
      }
    }
    s.ensure(a, o);
  }
  sr(() => {
    var a = !1;
    e((o, l = !0) => {
      a = !0, n(l, o);
    }), a || n(!1, null);
  }, r);
}
function Io(t, e, i) {
  for (var s = [], r = e.length, n, a = e.length, o = 0; o < r; o++) {
    let h = e[o];
    _t(
      h,
      () => {
        if (n) {
          if (n.pending.delete(h), n.done.add(h), n.pending.size === 0) {
            var v = (
              /** @type {Set<EachOutroGroup>} */
              t.outrogroups
            );
            qs(gs(n.done)), v.delete(n), v.size === 0 && (t.outrogroups = null);
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
      var c = (
        /** @type {Element} */
        i
      ), u = (
        /** @type {Element} */
        c.parentNode
      );
      tr(u), u.append(c), t.items.clear();
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
    ne(t[i], e);
}
var xr;
function To(t, e, i, s, r, n = null) {
  var a = t, o = /* @__PURE__ */ new Map();
  A && bs();
  var l = null, c = /* @__PURE__ */ sn(() => {
    var g = i();
    return Dr(g) ? g : g == null ? [] : gs(g);
  }), u, h = !0;
  function v() {
    f.fallback = l, ko(f, u, a, e, s), l !== null && (u.length === 0 ? l.f & rt ? (l.f ^= rt, $i(l, null, a)) : rr(l) : _t(l, () => {
      l = null;
    }));
  }
  var p = sr(() => {
    u = /** @type {V[]} */
    m(c);
    var g = u.length;
    let y = !1;
    if (A) {
      var x = qr(a) === ms;
      x !== (g === 0) && (a = as(), ve(a), Ze(!1), y = !0);
    }
    for (var $ = /* @__PURE__ */ new Set(), q = (
      /** @type {Batch} */
      C
    ), oe = fn(), K = 0; K < g; K += 1) {
      A && E.nodeType === xi && /** @type {Comment} */
      E.data === Qs && (a = /** @type {Comment} */
      E, y = !0, Ze(!1));
      var Ce = u[K], Ee = s(Ce, K), P = h ? null : o.get(Ee);
      P ? (P.v && wi(P.v, Ce), P.i && wi(P.i, K), oe && q.skipped_effects.delete(P.e)) : (P = Mo(
        o,
        h ? a : xr ?? (xr = Le()),
        Ce,
        Ee,
        K,
        r,
        e,
        i
      ), h || (P.e.f |= rt), o.set(Ee, P)), $.add(Ee);
    }
    if (g === 0 && n && !l && (h ? l = Se(() => n(a)) : (l = Se(() => n(xr ?? (xr = Le()))), l.f |= rt)), A && g > 0 && ve(as()), !h)
      if (oe) {
        for (const [te, Cs] of o)
          $.has(te) || q.skipped_effects.add(Cs.e);
        q.oncommit(v), q.ondiscard(() => {
        });
      } else
        v();
    y && Ze(!0), m(c);
  }), f = { effect: p, items: o, outrogroups: null, fallback: l };
  h = !1, A && (a = E);
}
function ko(t, e, i, s, r) {
  var P;
  var n = e.length, a = t.items, o = t.effect.first, l, c = null, u = [], h = [], v, p, f, g;
  for (g = 0; g < n; g += 1) {
    if (v = e[g], p = r(v, g), f = /** @type {EachItem} */
    a.get(p).e, t.outrogroups !== null)
      for (const te of t.outrogroups)
        te.pending.delete(f), te.done.delete(f);
    if (f.f & rt)
      if (f.f ^= rt, f === o)
        $i(f, null, i);
      else {
        var y = c ? c.next : o;
        f === t.effect.last && (t.effect.last = f.prev), f.prev && (f.prev.next = f.next), f.next && (f.next.prev = f.prev), et(t, c, f), et(t, f, y), $i(f, y, i), c = f, u = [], h = [], o = c.next;
        continue;
      }
    if (f.f & ge && rr(f), f !== o) {
      if (l !== void 0 && l.has(f)) {
        if (u.length < h.length) {
          var x = h[0], $;
          c = x.prev;
          var q = u[0], oe = u[u.length - 1];
          for ($ = 0; $ < u.length; $ += 1)
            $i(u[$], x, i);
          for ($ = 0; $ < h.length; $ += 1)
            l.delete(h[$]);
          et(t, q.prev, oe.next), et(t, c, q), et(t, oe, x), o = x, c = oe, g -= 1, u = [], h = [];
        } else
          l.delete(f), $i(f, o, i), et(t, f.prev, f.next), et(t, f, c === null ? t.effect.first : c.next), et(t, c, f), c = f;
        continue;
      }
      for (u = [], h = []; o !== null && o !== f; )
        (l ?? (l = /* @__PURE__ */ new Set())).add(o), h.push(o), o = o.next;
      if (o === null)
        continue;
    }
    f.f & rt || u.push(f), c = f, o = f.next;
  }
  if (t.outrogroups !== null) {
    for (const te of t.outrogroups)
      te.pending.size === 0 && (qs(gs(te.done)), (P = t.outrogroups) == null || P.delete(te));
    t.outrogroups.size === 0 && (t.outrogroups = null);
  }
  if (o !== null || l !== void 0) {
    var K = [];
    if (l !== void 0)
      for (f of l)
        f.f & ge || K.push(f);
    for (; o !== null; )
      !(o.f & ge) && o !== t.fallback && K.push(o), o = o.next;
    var Ce = K.length;
    if (Ce > 0) {
      var Ee = null;
      Io(t, K, Ee);
    }
  }
}
function Mo(t, e, i, s, r, n, a, o) {
  var l = a & Oa ? a & za ? Tt(i) : /* @__PURE__ */ on(i, !1, !1) : null, c = a & Na ? Tt(r) : null;
  return {
    v: l,
    i: c,
    e: Se(() => (n(e, l ?? i, c ?? r, o), () => {
      t.delete(s);
    }))
  };
}
function $i(t, e, i) {
  if (t.nodes)
    for (var s = t.nodes.start, r = t.nodes.end, n = e && !(e.f & rt) ? (
      /** @type {EffectNodes} */
      e.nodes.start
    ) : i; s !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ qe(s)
      );
      if (n.before(s), s === r)
        return;
      s = a;
    }
}
function et(t, e, i) {
  e === null ? t.effect.first = i : e.next = i, i === null ? t.effect.last = e : i.prev = e;
}
const $o = () => performance.now(), Ge = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (t) => requestAnimationFrame(t)
  ),
  now: () => $o(),
  tasks: /* @__PURE__ */ new Set()
};
function Nn() {
  const t = Ge.now();
  Ge.tasks.forEach((e) => {
    e.c(t) || (Ge.tasks.delete(e), e.f());
  }), Ge.tasks.size !== 0 && Ge.tick(Nn);
}
function Ao(t) {
  let e;
  return Ge.tasks.size === 0 && Ge.tick(Nn), {
    promise: new Promise((i) => {
      Ge.tasks.add(e = { c: t, f: i });
    }),
    abort() {
      Ge.tasks.delete(e);
    }
  };
}
function Ji(t, e) {
  Ei(() => {
    t.dispatchEvent(new CustomEvent(e));
  });
}
function Lo(t) {
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
    const a = Lo(r.trim());
    e[a] = n.trim();
  }
  return e;
}
const Oo = (t) => t;
function Cr(t, e, i, s) {
  var y;
  var r = (t & Ua) !== 0, n = "both", a, o = e.inert, l = e.style.overflow, c, u;
  function h() {
    return Ei(() => a ?? (a = i()(e, (s == null ? void 0 : s()) ?? /** @type {P} */
    {}, {
      direction: n
    })));
  }
  var v = {
    is_global: r,
    in() {
      e.inert = o, Ji(e, "introstart"), c = Fs(e, h(), u, 1, () => {
        Ji(e, "introend"), c == null || c.abort(), c = a = void 0, e.style.overflow = l;
      });
    },
    out(x) {
      e.inert = !0, Ji(e, "outrostart"), u = Fs(e, h(), c, 0, () => {
        Ji(e, "outroend"), x == null || x();
      });
    },
    stop: () => {
      c == null || c.abort(), u == null || u.abort();
    }
  }, p = (
    /** @type {Effect & { nodes: EffectNodes }} */
    k
  );
  if (((y = p.nodes).t ?? (y.t = [])).push(v), Ws) {
    var f = r;
    if (!f) {
      for (var g = (
        /** @type {Effect | null} */
        p.parent
      ); g && g.f & Ct; )
        for (; (g = g.parent) && !(g.f & je); )
          ;
      f = !g || (g.f & Fi) !== 0;
    }
    f && ir(() => {
      At(() => v.in());
    });
  }
}
function Fs(t, e, i, s, r) {
  var n = s === 1;
  if (wa(e)) {
    var a, o = !1;
    return Ci(() => {
      if (!o) {
        var y = e({ direction: n ? "in" : "out" });
        a = Fs(t, y, i, s, r);
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
      abort: Ti,
      deactivate: Ti,
      reset: Ti,
      t: () => s
    };
  const { delay: l = 0, css: c, tick: u, easing: h = Oo } = e;
  var v = [];
  if (n && i === void 0 && (u && u(0, 1), c)) {
    var p = Sr(c(0, 1));
    v.push(p, p);
  }
  var f = () => 1 - s, g = t.animate(v, { duration: l, fill: "forwards" });
  return g.onfinish = () => {
    g.cancel();
    var y = (i == null ? void 0 : i.t()) ?? 1 - s;
    i == null || i.abort();
    var x = s - y, $ = (
      /** @type {number} */
      e.duration * Math.abs(x)
    ), q = [];
    if ($ > 0) {
      var oe = !1;
      if (c)
        for (var K = Math.ceil($ / 16.666666666666668), Ce = 0; Ce <= K; Ce += 1) {
          var Ee = y + x * h(Ce / K), P = Sr(c(Ee, 1 - Ee));
          q.push(P), oe || (oe = P.overflow === "hidden");
        }
      oe && (t.style.overflow = "hidden"), f = () => {
        var te = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          g.currentTime
        );
        return y + x * h(te / $);
      }, u && Ao(() => {
        if (g.playState !== "running") return !1;
        var te = f();
        return u(te, 1 - te), !0;
      });
    }
    g = t.animate(q, { duration: $, fill: "forwards" }), g.onfinish = () => {
      f = () => s, u == null || u(s, 1 - s), r();
    };
  }, {
    abort: () => {
      g && (g.cancel(), g.effect = null, g.onfinish = Ti);
    },
    deactivate: () => {
      r = Ti;
    },
    reset: () => {
      s === 0 && (u == null || u(1, 0));
    },
    t: () => f()
  };
}
function Lt(t, e) {
  ir(() => {
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
const Er = [...` 	
\r\f \v\uFEFF`];
function No(t, e, i) {
  var s = t == null ? "" : "" + t;
  if (i) {
    for (var r in i)
      if (i[r])
        s = s ? s + " " + r : r;
      else if (s.length)
        for (var n = r.length, a = 0; (a = s.indexOf(r, a)) >= 0; ) {
          var o = a + n;
          (a === 0 || Er.includes(s[a - 1])) && (o === s.length || Er.includes(s[o])) ? s = (a === 0 ? "" : s.substring(0, a)) + s.substring(o + 1) : a = o;
        }
  }
  return s === "" ? null : s;
}
function zn(t, e, i, s, r, n) {
  var a = t.__className;
  if (A || a !== i || a === void 0) {
    var o = No(i, s, n);
    (!A || o !== t.getAttribute("class")) && (o == null ? t.removeAttribute("class") : t.className = o), t.__className = i;
  } else if (n && r !== n)
    for (var l in n) {
      var c = !!n[l];
      (r == null || c !== !!r[l]) && t.classList.toggle(l, c);
    }
  return n;
}
const zo = Symbol("is custom element"), Ro = Symbol("is html");
function bi(t, e, i, s) {
  var r = Do(t);
  A && (r[e] = t.getAttribute(e), e === "src" || e === "srcset" || e === "href" && t.nodeName === "LINK") || r[e] !== (r[e] = i) && (e === "loading" && (t[xa] = i), i == null ? t.removeAttribute(e) : typeof i != "string" && Po(t).includes(e) ? t[e] = i : t.setAttribute(e, i));
}
function Do(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ?? (t.__attributes = {
      [zo]: t.nodeName.includes("-"),
      [Ro]: t.namespaceURI === Va
    })
  );
}
var Ir = /* @__PURE__ */ new Map();
function Po(t) {
  var e = t.getAttribute("is") || t.nodeName, i = Ir.get(e);
  if (i) return i;
  Ir.set(e, i = []);
  for (var s, r = t, n = Element.prototype; n !== r; ) {
    s = Pr(r);
    for (var a in s)
      s[a].set && i.push(a);
    r = Zs(r);
  }
  return i;
}
function Uo(t, e, i = e) {
  var s = /* @__PURE__ */ new WeakSet();
  no(t, "input", async (r) => {
    var n = r ? t.defaultValue : t.value;
    if (n = Ts(t) ? ks(n) : n, i(n), C !== null && s.add(C), await Tn(), n !== (n = e())) {
      var a = t.selectionStart, o = t.selectionEnd, l = t.value.length;
      if (t.value = n ?? "", o !== null) {
        var c = t.value.length;
        a === o && o === l && c > l ? (t.selectionStart = c, t.selectionEnd = c) : (t.selectionStart = a, t.selectionEnd = Math.min(o, c));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (A && t.defaultValue !== t.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  At(e) == null && t.value) && (i(Ts(t) ? ks(t.value) : t.value), C !== null && s.add(C)), _s(() => {
    var r = e();
    if (t === document.activeElement) {
      var n = (
        /** @type {Batch} */
        Xi ?? C
      );
      if (s.has(n))
        return;
    }
    Ts(t) && r === ks(t.value) || t.type === "date" && !r && !t.value || r !== t.value && (t.value = r ?? "");
  });
}
function Ts(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function ks(t) {
  return t === "" ? null : +t;
}
function Tr(t, e) {
  return t === e || (t == null ? void 0 : t[Wt]) === e;
}
function Rn(t = {}, e, i, s) {
  return ir(() => {
    var r, n;
    return _s(() => {
      r = n, n = [], At(() => {
        t !== i(...n) && (e(t, ...n), r && Tr(i(...r), t) && e(null, ...r));
      });
    }), () => {
      Ci(() => {
        n && Tr(i(...n), t) && e(null, ...n);
      });
    };
  }), t;
}
function Ho(t = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    R
  ), i = e.l.u;
  if (!i) return;
  let s = () => mo(e.s);
  if (t) {
    let r = 0, n = (
      /** @type {Record<string, any>} */
      {}
    );
    const a = /* @__PURE__ */ Yi(() => {
      let o = !1;
      const l = e.s;
      for (const c in l)
        l[c] !== n[c] && (n[c] = l[c], o = !0);
      return o && r++, r;
    });
    s = () => m(a);
  }
  i.b.length && oo(() => {
    kr(e, s), $s(i.b);
  }), Vt(() => {
    const r = At(() => i.m.map(ba));
    return () => {
      for (const n of r)
        typeof n == "function" && n();
    };
  }), i.a.length && Vt(() => {
    kr(e, s), $s(i.a);
  });
}
function kr(t, e) {
  if (t.l.s)
    for (const i of t.l.s) m(i);
  e();
}
function yi(t, e, i, s) {
  var r = !Si || (i & Ra) !== 0, n = (i & Pa) !== 0, a = (
    /** @type {V} */
    s
  ), o = !0, l = () => (o && (o = !1, a = /** @type {V} */
  s), a), c;
  c = /** @type {V} */
  t[e], c === void 0 && s !== void 0 && (c = l());
  var u;
  if (r ? u = () => {
    var f = (
      /** @type {V} */
      t[e]
    );
    return f === void 0 ? l() : (o = !0, f);
  } : u = () => {
    var f = (
      /** @type {V} */
      t[e]
    );
    return f !== void 0 && (a = /** @type {V} */
    void 0), f === void 0 ? a : f;
  }, r && !(i & Da))
    return u;
  var h = !1, v = /* @__PURE__ */ Yi(() => (h = !1, u())), p = (
    /** @type {Effect} */
    k
  );
  return (
    /** @type {() => V} */
    function(f, g) {
      if (arguments.length > 0) {
        const y = g ? m(v) : r && n ? F(f) : f;
        return I(v, y), h = !0, a !== void 0 && (a = y), f;
      }
      return $t && h || p.f & Je ? v.v : m(v);
    }
  );
}
function Wo(t) {
  return new Vo(t);
}
var Ye, _e;
class Vo {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    _(this, Ye);
    /** @type {Record<string, any>} */
    _(this, _e);
    var n;
    var i = /* @__PURE__ */ new Map(), s = (a, o) => {
      var l = /* @__PURE__ */ on(o, !1, !1);
      return i.set(a, l), l;
    };
    const r = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(a, o) {
          return m(i.get(o) ?? s(o, Reflect.get(a, o)));
        },
        has(a, o) {
          return o === _a ? !0 : (m(i.get(o) ?? s(o, Reflect.get(a, o))), Reflect.has(a, o));
        },
        set(a, o, l) {
          return I(i.get(o) ?? s(o, l), l), Reflect.set(a, o, l);
        }
      }
    );
    w(this, _e, (e.hydrate ? Co : nr)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: r,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((n = e == null ? void 0 : e.props) != null && n.$$host) || e.sync === !1) && lt(), w(this, Ye, r.$$events);
    for (const a of Object.keys(d(this, _e)))
      a === "$set" || a === "$destroy" || a === "$on" || rs(this, a, {
        get() {
          return d(this, _e)[a];
        },
        /** @param {any} value */
        set(o) {
          d(this, _e)[a] = o;
        },
        enumerable: !0
      });
    d(this, _e).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(r, a);
    }, d(this, _e).$destroy = () => {
      js(d(this, _e));
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    d(this, _e).$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, i) {
    d(this, Ye)[e] = d(this, Ye)[e] || [];
    const s = (...r) => i.call(this, ...r);
    return d(this, Ye)[e].push(s), () => {
      d(this, Ye)[e] = d(this, Ye)[e].filter(
        /** @param {any} fn */
        (r) => r !== s
      );
    };
  }
  $destroy() {
    d(this, _e).$destroy();
  }
}
Ye = new WeakMap(), _e = new WeakMap();
let Dn;
typeof HTMLElement == "function" && (Dn = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, i, s) {
    super();
    /** The Svelte component constructor */
    U(this, "$$ctor");
    /** Slots */
    U(this, "$$s");
    /** @type {any} The Svelte component instance */
    U(this, "$$c");
    /** Whether or not the custom element is connected */
    U(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    U(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    U(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    U(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    U(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    U(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    U(this, "$$me");
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
      const i = {}, s = jo(this);
      for (const r of this.$$s)
        r in s && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), i.default = !0) : i[r] = e(r));
      for (const r of this.attributes) {
        const n = this.$$g_p(r.name);
        n in this.$$d || (this.$$d[n] = is(n, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = Wo({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: i,
          $$host: this
        }
      }), this.$$me = lo(() => {
        _s(() => {
          var r;
          this.$$r = !0;
          for (const n of ss(this.$$c)) {
            if (!((r = this.$$p_d[n]) != null && r.reflect)) continue;
            this.$$d[n] = this.$$c[n];
            const a = is(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = is(e, s, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [e]: this.$$d[e] }));
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
    return ss(this.$$p_d).find(
      (i) => this.$$p_d[i].attribute === e || !this.$$p_d[i].attribute && i.toLowerCase() === e
    ) || e;
  }
});
function is(t, e, i, s) {
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
function jo(t) {
  const e = {};
  return t.childNodes.forEach((i) => {
    e[
      /** @type {Element} node */
      i.slot || "default"
    ] = !0;
  }), e;
}
function Ot(t, e, i, s, r, n) {
  let a = class extends Dn {
    constructor() {
      super(t, i, r), this.$$p_d = e;
    }
    static get observedAttributes() {
      return ss(e).map(
        (o) => (e[o].attribute || o).toLowerCase()
      );
    }
  };
  return ss(e).forEach((o) => {
    rs(a.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(l) {
        var h;
        l = is(o, l, e), this.$$d[o] = l;
        var c = this.$$c;
        if (c) {
          var u = (h = Ht(c, o)) == null ? void 0 : h.get;
          u ? c[o] = l : c.$set({ [o]: l });
        }
      }
    });
  }), s.forEach((o) => {
    rs(a.prototype, o, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[o];
      }
    });
  }), t.element = /** @type {any} */
  a, a;
}
function ar(t) {
  R === null && Vr(), Si && R.l !== null ? Fo(R).m.push(t) : Vt(() => {
    const e = At(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function qo(t) {
  R === null && Vr(), ar(() => () => At(t));
}
function Fo(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
const Bo = "5";
var Rr;
typeof window < "u" && ((Rr = window.__svelte ?? (window.__svelte = {})).v ?? (Rr.v = /* @__PURE__ */ new Set())).add(Bo);
const Yo = (t) => t;
function Go(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function Mr(t) {
  const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    t,
    "px"
  ];
}
function Zo(t, { delay: e = 0, duration: i = 400, easing: s = Yo } = {}) {
  const r = +getComputedStyle(t).opacity;
  return {
    delay: e,
    duration: i,
    easing: s,
    css: (n) => `opacity: ${n * r}`
  };
}
function Ko(t, { delay: e = 0, duration: i = 400, easing: s = Go, x: r = 0, y: n = 0, opacity: a = 0 } = {}) {
  const o = getComputedStyle(t), l = +o.opacity, c = o.transform === "none" ? "" : o.transform, u = l * (1 - a), [h, v] = Mr(r), [p, f] = Mr(n);
  return {
    delay: e,
    duration: i,
    easing: s,
    css: (g, y) => `
			transform: ${c} translate(${(1 - g) * h}${v}, ${(1 - g) * p}${f});
			opacity: ${l - u * y}`
  };
}
var Gt, Zt, Kt, Jt;
class Jo {
  constructor() {
    _(this, Gt);
    _(this, Zt);
    _(this, Kt);
    _(this, Jt);
    w(this, Gt, /* @__PURE__ */ M(!1)), w(this, Zt, /* @__PURE__ */ M(!1)), w(this, Kt, /* @__PURE__ */ M(!1)), w(this, Jt, /* @__PURE__ */ M(!1));
  }
  get isOpen() {
    return m(d(this, Gt));
  }
  set isOpen(e) {
    I(d(this, Gt), e, !0);
  }
  get isMinimized() {
    return m(d(this, Zt));
  }
  set isMinimized(e) {
    I(d(this, Zt), e, !0);
  }
  get isLoading() {
    return m(d(this, Kt));
  }
  set isLoading(e) {
    I(d(this, Kt), e, !0);
  }
  get hasUnreadMessages() {
    return m(d(this, Jt));
  }
  set hasUnreadMessages(e) {
    I(d(this, Jt), e, !0);
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
Gt = new WeakMap(), Zt = new WeakMap(), Kt = new WeakMap(), Jt = new WeakMap();
const X = new Jo(), re = {
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
}, ht = {
  /** Maximum message length */
  MAX_LENGTH: 4e3,
  /** Minimum message length */
  MIN_LENGTH: 1,
  /** Maximum message queue size to prevent memory leaks */
  MAX_QUEUE_SIZE: 50
}, $r = {
  /** Visitor ID storage key */
  VISITOR_ID: "ai_chat_visitor_id",
  /** Session history storage key */
  SESSIONS: "ai_chat_sessions"
};
var Xt, Qt, ei, ti, ii;
class Xo {
  constructor() {
    _(this, Xt);
    _(this, Qt);
    _(this, ei);
    _(this, ti);
    _(this, ii);
    w(this, Xt, /* @__PURE__ */ M(F([]))), w(this, Qt, /* @__PURE__ */ M(null)), w(this, ei, /* @__PURE__ */ M(!1)), w(this, ti, /* @__PURE__ */ M(null)), w(this, ii, /* @__PURE__ */ M(null)), this.streamingBuffer = "", this.streamingTimeout = null;
  }
  get messages() {
    return m(d(this, Xt));
  }
  set messages(e) {
    I(d(this, Xt), e, !0);
  }
  get currentSession() {
    return m(d(this, Qt));
  }
  set currentSession(e) {
    I(d(this, Qt), e, !0);
  }
  get isTyping() {
    return m(d(this, ei));
  }
  set isTyping(e) {
    I(d(this, ei), e, !0);
  }
  get error() {
    return m(d(this, ti));
  }
  set error(e) {
    I(d(this, ti), e, !0);
  }
  get streamingMessageId() {
    return m(d(this, ii));
  }
  set streamingMessageId(e) {
    I(d(this, ii), e, !0);
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
        re.STREAMING_BATCH_DELAY
      );
    }
  }
  flushStreamingBuffer() {
    if (this.streamingMessageId && this.streamingBuffer) {
      const e = this.messages.find((i) => i.id === this.streamingMessageId);
      e ? e.content += this.streamingBuffer : console.warn("ChatStore: Streaming message not found", { id: this.streamingMessageId }), this.streamingBuffer = "";
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
Xt = new WeakMap(), Qt = new WeakMap(), ei = new WeakMap(), ti = new WeakMap(), ii = new WeakMap();
const S = new Xo(), Ar = {
  "client-id": "clientId",
  theme: "theme",
  position: "position",
  title: "title",
  "logo-url": "logoUrl",
  placeholder: "placeholder",
  "accent-color": "accentColor",
  "avatar-emoji": "avatarEmoji",
  "company-name": "companyName",
  "api-url": "apiUrl",
  "ws-url": "wsUrl",
  debug: "debug",
  "auto-init": "autoInit"
}, Ie = {
  theme: "modern",
  position: "bottom-right",
  title: "AI Assistant",
  placeholder: "Type your message...",
  avatarEmoji: "🤖",
  debug: !1,
  autoInit: !0
}, Pn = {
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
      api_url: t.apiUrl,
      ws_url: t.wsUrl,
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
      apiUrl: t.api_url,
      wsUrl: t.ws_url,
      debug: t.debug,
      autoInit: t.auto_init
    };
  },
  /**
   * Convert HTML attribute name to property name
   */
  attributeToProperty(t) {
    return Ar[t] || null;
  },
  /**
   * Convert property name to HTML attribute name
   */
  propertyToAttribute(t) {
    const i = Object.entries(Ar).find(([, s]) => s === t);
    return i ? i[0] : null;
  }
}, Qo = [
  "modern",
  "corporate",
  "friendly",
  "minimal",
  "dark",
  "light"
];
function Un(t) {
  return Qo.includes(t);
}
function Ss(t) {
  return !t || typeof t != "string" ? !1 : /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(t);
}
function or(t, e = "#6b46c1") {
  return Ss(t) ? t : e;
}
function Hn(t) {
  if (!Ss(t)) return t;
  if (t.length === 4) {
    const e = t.slice(1);
    return "#" + e[0] + e[0] + e[1] + e[1] + e[2] + e[2];
  }
  return t;
}
function Wn(t) {
  const e = Hn(t), i = parseInt(e.slice(1, 3), 16) / 255, s = parseInt(e.slice(3, 5), 16) / 255, r = parseInt(e.slice(5, 7), 16) / 255, n = Math.max(i, s, r), a = Math.min(i, s, r);
  let o = 0, l = 0;
  const c = (n + a) / 2;
  if (n !== a) {
    const u = n - a;
    switch (l = c > 0.5 ? u / (2 - n - a) : u / (n + a), n) {
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
  return { h: o * 360, s: l * 100, l: c * 100 };
}
function Vn(t, e, i) {
  e /= 100, i /= 100;
  const s = e * Math.min(i, 1 - i), r = (n) => {
    const a = (n + t / 30) % 12, o = i - s * Math.max(Math.min(a - 3, 9 - a, 1), -1);
    return Math.round(255 * o).toString(16).padStart(2, "0");
  };
  return `#${r(0)}${r(8)}${r(4)}`.toUpperCase();
}
function $e(t, e) {
  if (!Ss(t)) return t;
  const i = Wn(t), s = Math.max(0, Math.min(100, i.l + e));
  return Vn(i.h, i.s, s);
}
const el = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  adjustColor: $e,
  expandHexColor: Hn,
  hexToHsl: Wn,
  hslToHex: Vn,
  isValidHexColor: Ss,
  sanitizeHexColor: or
}, Symbol.toStringTag, { value: "Module" }));
var si, ri, ni, ai, oi, li, ci, di, ui, fi, hi, gi;
class tl {
  constructor() {
    _(this, si);
    _(this, ri);
    _(this, ni);
    _(this, ai);
    _(this, oi);
    _(this, li);
    _(this, ci);
    _(this, di);
    _(this, ui);
    _(this, fi);
    _(this, hi);
    _(this, gi);
    w(this, si, /* @__PURE__ */ M("")), w(this, ri, /* @__PURE__ */ M(F(Ie.theme))), w(this, ni, /* @__PURE__ */ M(F(Ie.position))), w(this, ai, /* @__PURE__ */ M(F(Ie.title))), w(this, oi, /* @__PURE__ */ M(F(Ie.logoUrl))), w(this, li, /* @__PURE__ */ M(F(Ie.placeholder))), w(this, ci, /* @__PURE__ */ M(F(Ie.accentColor))), w(this, di, /* @__PURE__ */ M(F(Ie.avatarEmoji))), w(this, ui, /* @__PURE__ */ M(F(Ie.companyName))), w(this, fi, /* @__PURE__ */ M(F(Ie.apiUrl))), w(this, hi, /* @__PURE__ */ M(F(Ie.wsUrl))), w(this, gi, /* @__PURE__ */ M("default"));
  }
  get clientId() {
    return m(d(this, si));
  }
  set clientId(e) {
    I(d(this, si), e, !0);
  }
  get theme() {
    return m(d(this, ri));
  }
  set theme(e) {
    I(d(this, ri), e, !0);
  }
  get position() {
    return m(d(this, ni));
  }
  set position(e) {
    I(d(this, ni), e, !0);
  }
  get title() {
    return m(d(this, ai));
  }
  set title(e) {
    I(d(this, ai), e, !0);
  }
  get logoUrl() {
    return m(d(this, oi));
  }
  set logoUrl(e) {
    I(d(this, oi), e, !0);
  }
  get placeholder() {
    return m(d(this, li));
  }
  set placeholder(e) {
    I(d(this, li), e, !0);
  }
  get accentColor() {
    return m(d(this, ci));
  }
  set accentColor(e) {
    I(d(this, ci), e, !0);
  }
  get avatarEmoji() {
    return m(d(this, di));
  }
  set avatarEmoji(e) {
    I(d(this, di), e, !0);
  }
  get companyName() {
    return m(d(this, ui));
  }
  set companyName(e) {
    I(d(this, ui), e, !0);
  }
  get apiUrl() {
    return m(d(this, fi));
  }
  set apiUrl(e) {
    I(d(this, fi), e, !0);
  }
  get wsUrl() {
    return m(d(this, hi));
  }
  set wsUrl(e) {
    I(d(this, hi), e, !0);
  }
  get titleSource() {
    return m(d(this, gi));
  }
  set titleSource(e) {
    I(d(this, gi), e, !0);
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
      const n = Pn.attributeToProperty(r);
      if (!n) continue;
      const a = e.getAttribute(r);
      if (a)
        switch (n) {
          case "clientId":
          case "title":
          case "logoUrl":
          case "placeholder":
          case "avatarEmoji":
          case "apiUrl":
          case "wsUrl":
            i[n] = a;
            break;
          case "accentColor":
            i.accentColor = or(a, this.accentColor);
            break;
          case "theme":
            Un(a) && (i.theme = a);
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
    return this.accentColor && (e["--widget-primary"] = this.accentColor, e["--widget-primary-hover"] = $e(this.accentColor, -20), e["--widget-primary-light"] = $e(this.accentColor, 20), e["--widget-primary-dark"] = $e(this.accentColor, -30), e["--widget-gradient"] = `linear-gradient(135deg, ${this.accentColor} 0%, ${$e(this.accentColor, 20)} 100%)`, e["--widget-gradient-hover"] = `linear-gradient(135deg, ${$e(this.accentColor, -20)} 0%, ${this.accentColor} 100%)`), e;
  }
  applyTheme(e) {
    e.setAttribute("data-theme", this.theme);
    const i = this.cssVariables;
    for (const [s, r] of Object.entries(i))
      e.style.setProperty(s, r);
  }
  // Remove duplicate adjustColor method - using shared utility from color.ts
}
si = new WeakMap(), ri = new WeakMap(), ni = new WeakMap(), ai = new WeakMap(), oi = new WeakMap(), li = new WeakMap(), ci = new WeakMap(), di = new WeakMap(), ui = new WeakMap(), fi = new WeakMap(), hi = new WeakMap(), gi = new WeakMap();
const jt = new tl(), il = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  configStore: jt
}, Symbol.toStringTag, { value: "Module" }));
var sl = /* @__PURE__ */ Ln('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-bkcus6"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="currentColor" class="svelte-bkcus6"></path><path d="M12 6C9.79 6 8 7.79 8 10C8 12.21 9.79 14 12 14C14.21 14 16 12.21 16 10C16 7.79 14.21 6 12 6ZM12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12Z" fill="currentColor" class="svelte-bkcus6"></path><path d="M12 15C9.33 15 4 16.34 4 19V20H20V19C20 16.34 14.67 15 12 15ZM6.03 18C6.47 17.28 9.09 17 12 17C14.91 17 17.53 17.28 17.97 18H6.03Z" fill="currentColor" class="svelte-bkcus6"></path></svg>'), rl = /* @__PURE__ */ Ln('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-bkcus6"><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor" class="svelte-bkcus6"></path></svg>'), nl = /* @__PURE__ */ V('<span class="unread-indicator svelte-bkcus6"></span>'), al = /* @__PURE__ */ V("<button><!> <!></button>");
const ol = {
  hash: "svelte-bkcus6",
  code: `.floating-button.svelte-bkcus6 {width:60px;height:60px;border-radius:var(--widget-radius-full);background:var(--widget-gradient);border:none;color:var(--widget-text-inverse);cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:var(--widget-shadow-lg);transition:all var(--widget-transition);position:relative;
    animation: fadeIn var(--widget-transition);}
  
  /* Clean subtle highlight */.floating-button.svelte-bkcus6::before {content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:rgba(255, 255, 255, 0.1);border-radius:var(--widget-radius-full);opacity:0;transition:opacity var(--widget-transition);}.floating-button.svelte-bkcus6:hover::before {opacity:1;}.floating-button.svelte-bkcus6:hover {transform:translateY(-2px);box-shadow:var(--widget-shadow-xl);background:var(--widget-gradient-hover);}.floating-button.svelte-bkcus6:active {transform:translateY(-1px) scale(0.96);}.floating-button.open.svelte-bkcus6 {background:var(--widget-primary-dark);}.floating-button.svelte-bkcus6 svg:where(.svelte-bkcus6) {width:24px;height:24px;transition:transform var(--widget-transition);position:relative;z-index:1;}.floating-button.open.svelte-bkcus6 svg:where(.svelte-bkcus6) {transform:rotate(45deg);}.unread-indicator.svelte-bkcus6 {position:absolute;top:-2px;right:-2px;width:16px;height:16px;background:var(--widget-error);border-radius:var(--widget-radius-full);border:3px solid var(--widget-background);
    animation: svelte-bkcus6-pulse 2s infinite;}
  
  @keyframes svelte-bkcus6-pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.6;
    }
  }`
};
function jn(t, e) {
  dt(e, !0), Lt(t, ol);
  let i = yi(e, "onclick", 7);
  const s = /* @__PURE__ */ Ke(() => X.isOpen), r = /* @__PURE__ */ Ke(() => X.hasUnreadMessages);
  function n() {
    var f;
    (f = i()) == null || f();
  }
  var a = {
    get onclick() {
      return i();
    },
    set onclick(f) {
      i(f), lt();
    }
  }, o = al();
  let l;
  o.__click = n;
  var c = Y(o);
  {
    var u = (f) => {
      var g = sl();
      N(f, g);
    }, h = (f) => {
      var g = rl();
      N(f, g);
    };
    he(c, (f) => {
      m(s) ? f(h, !1) : f(u);
    });
  }
  var v = se(c, 2);
  {
    var p = (f) => {
      var g = nl();
      N(f, g);
    };
    he(v, (f) => {
      m(r) && !m(s) && f(p);
    });
  }
  return B(o), kt(() => {
    l = zn(o, 1, "floating-button svelte-bkcus6", null, l, { open: m(s) }), bi(o, "aria-label", m(s) ? "Close chat" : "Open chat");
  }), N(t, o), ut(a);
}
xs(["click"]);
Ot(jn, { onclick: {} }, [], [], !0);
var ll = /* @__PURE__ */ V('<img alt="Logo" class="header-logo svelte-g5m62x"/>'), cl = /* @__PURE__ */ V('<div class="header-icon svelte-g5m62x"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-g5m62x"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="currentColor"></path><circle cx="12" cy="12" r="3" fill="currentColor"></circle></svg></div>'), dl = /* @__PURE__ */ V('<header class="chat-header svelte-g5m62x"><div class="header-left svelte-g5m62x"><!></div> <div class="header-center svelte-g5m62x"><h2 class="header-title svelte-g5m62x"> </h2> <span class="header-status svelte-g5m62x">Online</span></div> <div class="header-right svelte-g5m62x"><button class="close-button svelte-g5m62x" aria-label="Close chat"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-g5m62x"><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor"></path></svg></button></div></header>');
const ul = {
  hash: "svelte-g5m62x",
  code: `.chat-header.svelte-g5m62x {display:flex;align-items:center;padding:var(--widget-space-sm) var(--widget-space-md);background:var(--widget-surface-elevated);color:var(--widget-text);border-radius:var(--widget-radius-xl) var(--widget-radius-xl) 0 0;border-bottom:1px solid var(--widget-border-subtle);gap:var(--widget-space-sm);position:relative;box-shadow:var(--widget-shadow-sm);min-height:48px; /* Maximum space optimization */}
  
  /* Clean modern header - no shine effects */.header-left.svelte-g5m62x {width:32px; /* Compact size for maximum space optimization */height:32px;flex-shrink:0;
    animation: fadeIn var(--widget-transition);}.header-logo.svelte-g5m62x {width:100%;height:100%;object-fit:cover;border-radius:var(--widget-radius-full); /* Circular like inspiration */border:1px solid var(--widget-border-light);box-shadow:none;}.header-icon.svelte-g5m62x {width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--widget-primary);border-radius:var(--widget-radius-full); /* Circular like inspiration */border:1px solid var(--widget-border-light);box-shadow:none;transition:all var(--widget-transition);}.header-icon.svelte-g5m62x:hover {background:var(--widget-primary-hover);transform:scale(1.02); /* Subtle hover effect */}.header-icon.svelte-g5m62x svg:where(.svelte-g5m62x) {width:16px;height:16px;color:var(--widget-text-inverse);}.header-center.svelte-g5m62x {flex:1;min-width:0;
    animation: fadeIn var(--widget-transition);}.header-title.svelte-g5m62x {margin:0;font-size:var(--widget-font-size-lg);font-weight:var(--widget-font-weight-semibold);font-family:var(--widget-font-family);color:var(--widget-text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;letter-spacing:var(--widget-letter-spacing-tight);line-height:var(--widget-line-height-tight);}.header-status.svelte-g5m62x {font-size:var(--widget-font-size-xs);color:var(--widget-text-secondary);font-weight:var(--widget-font-weight-medium);display:flex;align-items:center;gap:var(--widget-space-xs);margin-top:2px; /* Tighter spacing for compact design */}.header-status.svelte-g5m62x::before {content:'';width:6px;height:6px;background:var(--widget-success);border-radius:var(--widget-radius-full);display:inline-block;
    animation: pulse 2s ease-in-out infinite;}.header-right.svelte-g5m62x {display:flex;align-items:center;gap:var(--widget-space-sm);
    animation: fadeIn var(--widget-transition);}.close-button.svelte-g5m62x {background:var(--widget-surface);border:1px solid var(--widget-border-light);color:var(--widget-text-secondary);cursor:pointer;padding:var(--widget-space-xs);display:flex;align-items:center;justify-content:center;border-radius:var(--widget-radius-md);transition:all var(--widget-transition);box-shadow:var(--widget-shadow-sm);}.close-button.svelte-g5m62x:hover {background:var(--widget-surface-hover);color:var(--widget-text);border-color:var(--widget-border);transform:scale(1.05);}.close-button.svelte-g5m62x:active {transform:scale(0.98);box-shadow:var(--widget-shadow-inner);}.close-button.svelte-g5m62x svg:where(.svelte-g5m62x) {width:16px;height:16px;transition:transform var(--widget-transition);}`
};
function qn(t, e) {
  dt(e, !0), Lt(t, ul);
  let i = yi(e, "onclose", 7);
  function s() {
    var g;
    X.close(), (g = i()) == null || g();
  }
  var r = {
    get onclose() {
      return i();
    },
    set onclose(g) {
      i(g), lt();
    }
  }, n = dl(), a = Y(n), o = Y(a);
  {
    var l = (g) => {
      var y = ll();
      kt(() => bi(y, "src", jt.logoUrl)), N(g, y);
    }, c = (g) => {
      var y = cl();
      N(g, y);
    };
    he(o, (g) => {
      jt.logoUrl ? g(l) : g(c, !1);
    });
  }
  B(a);
  var u = se(a, 2), h = Y(u), v = Y(h, !0);
  B(h), ns(2), B(u);
  var p = se(u, 2), f = Y(p);
  return f.__click = s, B(p), B(n), kt(() => ds(v, jt.title)), N(t, n), ut(r);
}
xs(["click"]);
Ot(qn, { onclose: {} }, [], [], !0);
var fl = /* @__PURE__ */ V('<span class="sending-indicator svelte-1uqoiy7" aria-label="Sending message" role="status"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svelte-1uqoiy7"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="currentColor" opacity="0.3"></path><path d="M12 2C6.48 2 2 6.48 2 12H4C4 7.58 7.58 4 12 4V2Z" fill="currentColor"><animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite"></animateTransform></path></svg></span>'), hl = /* @__PURE__ */ V('<span class="failed-indicator svelte-1uqoiy7" aria-label="Message failed to send" role="alert"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svelte-1uqoiy7"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#ef4444"></path><path d="M11 7H13V13H11V7ZM11 15H13V17H11V15Z" fill="#ef4444"></path></svg></span>'), gl = /* @__PURE__ */ V('<div role="listitem"><div class="message-bubble svelte-1uqoiy7"><span class="message-content"> </span> <!> <!></div> <div class="message-time svelte-1uqoiy7"> </div></div>');
const pl = {
  hash: "svelte-1uqoiy7",
  code: `.message.svelte-1uqoiy7 {max-width:85%; /* Slightly wider for card design */display:flex;flex-direction:column;gap:var(--widget-space-xs);
    animation: fadeIn var(--widget-transition) ease-out;margin-bottom:var(--widget-space-md); /* Better spacing between cards */}.message.user.svelte-1uqoiy7 {align-self:flex-end;align-items:flex-end;}.message.assistant.svelte-1uqoiy7 {align-self:flex-start;align-items:flex-start;}.message-bubble.svelte-1uqoiy7 {padding:var(--widget-space-sm) var(--widget-space-md);border-radius:var(--widget-radius-xl); /* More rounded for modern card look */font-size:var(--widget-font-size-base);line-height:var(--widget-line-height-normal);font-weight:var(--widget-font-weight-normal);word-wrap:break-word;position:relative;display:inline-flex;align-items:flex-start; /* Better for multi-line text */gap:var(--widget-space-sm);box-shadow:var(--widget-shadow-card);transition:all var(--widget-transition);font-family:var(--widget-font-family);border:1px solid var(--widget-border-subtle);}.message.user.svelte-1uqoiy7 .message-bubble:where(.svelte-1uqoiy7) {background:var(--widget-primary);color:var(--widget-text-inverse);border-color:var(--widget-primary);box-shadow:var(--widget-shadow-card);font-weight:var(--widget-font-weight-medium); /* Slightly bolder for user messages */}.message.assistant.svelte-1uqoiy7 .message-bubble:where(.svelte-1uqoiy7) {background:var(--widget-surface-elevated);color:var(--widget-text);border-color:var(--widget-border-light);box-shadow:var(--widget-shadow-card);}.message-bubble.svelte-1uqoiy7:hover {box-shadow:var(--widget-shadow-md);transform:translateY(-1px);}.message-time.svelte-1uqoiy7 {font-size:var(--widget-font-size-xs);color:var(--widget-text-subtle);font-weight:var(--widget-font-weight-medium);padding:0 var(--widget-space-md);margin-top:var(--widget-space-xs);letter-spacing:var(--widget-letter-spacing-wide);}.sending-indicator.svelte-1uqoiy7,
  .failed-indicator.svelte-1uqoiy7 {display:inline-flex;align-items:center;justify-content:center;margin-left:var(--widget-space-sm);padding:var(--widget-space-xs);border-radius:var(--widget-radius-full);background:rgba(255, 255, 255, 0.1);}.sending-indicator.svelte-1uqoiy7 svg:where(.svelte-1uqoiy7),
  .failed-indicator.svelte-1uqoiy7 svg:where(.svelte-1uqoiy7) {width:16px;height:16px;}.message.user.svelte-1uqoiy7 .sending-indicator:where(.svelte-1uqoiy7) svg:where(.svelte-1uqoiy7) {color:rgba(255, 255, 255, 0.7);}
  
  /* Modern card design - responsive */
  
  @media (max-width: 480px) {.message.svelte-1uqoiy7 {max-width:92%; /* More space on mobile */}.message-bubble.svelte-1uqoiy7 {font-size:var(--widget-font-size-base);padding:var(--widget-space-sm) var(--widget-space-md);}.message-time.svelte-1uqoiy7 {padding:0 var(--widget-space-lg);}
  }
  
  /* Theme adjustments can be added here if needed */`
};
function Fn(t, e) {
  dt(e, !0), Lt(t, pl);
  let i = yi(e, "message", 7);
  function s(x) {
    return new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", hour12: !0 }).format(x);
  }
  const r = /* @__PURE__ */ Ke(() => i().role === "user");
  var n = {
    get message() {
      return i();
    },
    set message(x) {
      i(x), lt();
    }
  }, a = gl();
  let o;
  var l = Y(a), c = Y(l), u = Y(c, !0);
  B(c);
  var h = se(c, 2);
  {
    var v = (x) => {
      var $ = fl();
      N(x, $);
    };
    he(h, (x) => {
      i().status === "sending" && x(v);
    });
  }
  var p = se(h, 2);
  {
    var f = (x) => {
      var $ = hl();
      N(x, $);
    };
    he(p, (x) => {
      i().status === "failed" && x(f);
    });
  }
  B(l);
  var g = se(l, 2), y = Y(g, !0);
  return B(g), B(a), kt(
    (x, $) => {
      o = zn(a, 1, "message svelte-1uqoiy7", null, o, { user: m(r), assistant: !m(r) }), bi(a, "aria-label", m(r) ? "Your message" : "Assistant message"), ds(u, i().content), bi(g, "aria-label", x), ds(y, $);
    },
    [
      () => `Sent at ${s(i().timestamp)}`,
      () => s(i().timestamp)
    ]
  ), N(t, a), ut(n);
}
Ot(Fn, { message: {} }, [], [], !0);
Fa();
var vl = /* @__PURE__ */ V('<div class="typing-indicator svelte-ej4x60" role="status" aria-live="polite" aria-label="Assistant is typing"><span aria-hidden="true" class="svelte-ej4x60"></span> <span aria-hidden="true" class="svelte-ej4x60"></span> <span aria-hidden="true" class="svelte-ej4x60"></span> <span class="sr-only svelte-ej4x60">Assistant is typing a response</span></div>');
const ml = {
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
  
  /* Screen reader only content */.sr-only.svelte-ej4x60 {position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0;}`
};
function Bn(t, e) {
  dt(e, !1), Lt(t, ml), Ho();
  var i = So(), s = ts(i);
  {
    var r = (n) => {
      var a = vl();
      N(n, a);
    };
    he(s, (n) => {
      S.isTyping && n(r);
    });
  }
  N(t, i), ut();
}
Ot(Bn, {}, [], [], !0);
var wl = /* @__PURE__ */ V('<div class="empty-state svelte-qha2j" role="status" aria-label="No messages yet"><div class="empty-icon svelte-qha2j" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-qha2j"><path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16Z" fill="currentColor"></path><path d="M7 9H17V11H7V9ZM7 6H17V8H7V6ZM7 12H14V14H7V12Z" fill="currentColor"></path></svg></div> <p class="svelte-qha2j">Start a conversation</p> <span class="svelte-qha2j">Ask me anything!</span></div>'), bl = /* @__PURE__ */ V('<div class="messages-container svelte-qha2j" role="list" aria-label="Messages"><!> <!></div>'), yl = /* @__PURE__ */ V('<div class="error-message svelte-qha2j"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-qha2j"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#ef4444"></path><path d="M11 7H13V13H11V7ZM11 15H13V17H11V15Z" fill="#ef4444"></path></svg> <p class="svelte-qha2j"> </p></div>'), _l = /* @__PURE__ */ V('<div class="message-list svelte-qha2j" role="log" aria-live="polite" aria-label="Chat conversation"><!> <!></div>');
const xl = {
  hash: "svelte-qha2j",
  code: `.message-list.svelte-qha2j {flex:1;overflow-y:auto;padding:var(--widget-space-lg);display:flex;flex-direction:column;background:var(--widget-gradient-subtle);position:relative;}.empty-state.svelte-qha2j {display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;text-align:center;padding:var(--widget-space-3xl) var(--widget-space-lg);
    animation: fadeIn var(--widget-transition-slow);}.empty-icon.svelte-qha2j {width:80px;height:80px;margin-bottom:var(--widget-space-lg);background:var(--widget-glass);backdrop-filter:blur(var(--widget-blur));border-radius:var(--widget-radius-2xl);display:flex;align-items:center;justify-content:center;box-shadow:var(--widget-shadow-md);
    animation: pulse 2s ease-in-out infinite;}.empty-icon.svelte-qha2j svg:where(.svelte-qha2j) {width:48px;height:48px;color:var(--widget-primary);opacity:0.8;}.empty-state.svelte-qha2j p:where(.svelte-qha2j) {margin:0;font-size:var(--widget-font-size-lg);font-weight:600;color:var(--widget-text);margin-bottom:var(--widget-space-xs);}.empty-state.svelte-qha2j span:where(.svelte-qha2j) {font-size:var(--widget-font-size-sm);color:var(--widget-text-secondary);}.messages-container.svelte-qha2j {display:flex;flex-direction:column;gap:var(--widget-space-md);padding-bottom:var(--widget-space-lg);}.error-message.svelte-qha2j {display:flex;align-items:center;gap:var(--widget-space);padding:var(--widget-space) var(--widget-space-md);background:var(--widget-glass);backdrop-filter:blur(var(--widget-blur));border:1px solid var(--widget-error-light);border-radius:var(--widget-radius-lg);color:var(--widget-error);margin-top:var(--widget-space);box-shadow:var(--widget-shadow);
    animation: slideUp var(--widget-transition-slow);}.error-message.svelte-qha2j svg:where(.svelte-qha2j) {width:20px;height:20px;flex-shrink:0;}.error-message.svelte-qha2j p:where(.svelte-qha2j) {margin:0;font-size:var(--widget-font-size-sm);font-weight:500;}
  
  /* Custom scrollbar */.message-list.svelte-qha2j::-webkit-scrollbar {width:6px;}.message-list.svelte-qha2j::-webkit-scrollbar-track {background:transparent;}.message-list.svelte-qha2j::-webkit-scrollbar-thumb {background:var(--widget-border);border-radius:var(--widget-radius-full);}.message-list.svelte-qha2j::-webkit-scrollbar-thumb:hover {background:var(--widget-text-muted);}
  
  /* Dark theme adjustments */`
};
function Yn(t, e) {
  dt(e, !0), Lt(t, xl);
  let i, s = !0;
  Vt(() => {
    S.messages, s && r();
  }), Vt(() => {
    S.isTyping, s && r();
  }), Vt(() => {
    S.isStreaming, s && S.isStreaming && r();
  });
  async function r() {
    await Tn(), i && (i.scrollTop = i.scrollHeight);
  }
  function n() {
    if (i) {
      const { scrollTop: v, scrollHeight: p, clientHeight: f } = i;
      s = p - v - f < 100;
    }
  }
  ar(() => {
    r();
  });
  var a = _l(), o = Y(a);
  {
    var l = (v) => {
      var p = wl();
      N(v, p);
    }, c = (v) => {
      var p = bl(), f = Y(p);
      To(f, 17, () => S.messages, (y) => y.id, (y, x) => {
        Fn(y, {
          get message() {
            return m(x);
          }
        });
      });
      var g = se(f, 2);
      Bn(g, {}), B(p), N(v, p);
    };
    he(o, (v) => {
      S.messages.length === 0 ? v(l) : v(c, !1);
    });
  }
  var u = se(o, 2);
  {
    var h = (v) => {
      var p = yl(), f = se(Y(p), 2), g = Y(f, !0);
      B(f), B(p), kt(() => ds(g, S.error)), N(v, p);
    };
    he(u, (v) => {
      S.error && v(h);
    });
  }
  B(a), Rn(a, (v) => i = v, () => i), _o("scroll", a, n), N(t, a), ut();
}
Ot(Yn, {}, [], [], !0);
class Sl {
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
function lr(t) {
  return new Sl(t);
}
function Ms() {
  var t;
  try {
    return typeof process < "u" && ((t = process.env) == null ? void 0 : t.NODE_ENV) === "test" ? process.env.ENABLE_TEST_DEBUG === "true" : localStorage.getItem("ai-widget-debug") === "true" || window._aiWidgetDebug === !0 || !1;
  } catch {
    return !1;
  }
}
const O = {
  isDebugEnabled: Ms,
  log: (t, e, i) => {
    Ms() && (i !== void 0 ? console.log(`[${t}] ${e}:`, i) : console.log(`[${t}] ${e}`));
  },
  warn: (t, e, i) => {
    Ms() && (i !== void 0 ? console.warn(`[${t}] ${e}:`, i) : console.warn(`[${t}] ${e}`));
  },
  error: (t, e, i) => {
    i !== void 0 ? console.error(`[${t}] ${e}:`, i) : console.error(`[${t}] ${e}`);
  }
};
class Dt {
  constructor() {
    this.currentId = null, this.messageMap = /* @__PURE__ */ new Map();
  }
  /**
   * Get singleton instance
   */
  static getInstance() {
    return Dt.instance || (Dt.instance = new Dt()), Dt.instance;
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
function He() {
  return Dt.getInstance();
}
var Cl = /* @__PURE__ */ V('<div class="input-bar svelte-1a8gd73"><textarea class="input-field svelte-1a8gd73" rows="1" aria-label="Message input"></textarea> <button class="send-button svelte-1a8gd73" aria-label="Send message"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-1a8gd73"><path d="M2 21L23 12L2 3V10L17 12L2 14V21Z" fill="currentColor"></path></svg></button></div>');
const El = {
  hash: "svelte-1a8gd73",
  code: `.input-bar.svelte-1a8gd73 {display:flex;align-items:flex-end;gap:var(--widget-space-sm);padding:var(--widget-space-sm) var(--widget-space-md);background:var(--widget-surface-elevated);border-top:1px solid var(--widget-border-subtle);border-radius:0 0 var(--widget-radius-xl) var(--widget-radius-xl);position:relative;min-height:48px; /* Maximum space optimization */}
  
  /* Modern minimal design - no extra elements */.input-field.svelte-1a8gd73 {flex:1;padding:var(--widget-space-xs) var(--widget-space-sm);border:1px solid var(--widget-border-light);border-radius:var(--widget-radius-2xl); /* More rounded for modern feel */font-size:var(--widget-font-size-sm);font-weight:var(--widget-font-weight-normal);line-height:var(--widget-line-height-normal);letter-spacing:var(--widget-letter-spacing-normal);resize:none;outline:none;transition:all var(--widget-transition);font-family:var(--widget-font-family);max-height:120px;min-height:36px; /* Compact but accessible */height:36px; /* Explicit height for maximum space optimization */overflow-y:auto;background:var(--widget-background);box-shadow:var(--widget-shadow-sm);}.input-field.svelte-1a8gd73:focus {border-color:var(--widget-primary);box-shadow:var(--widget-shadow-focus);background:var(--widget-background);transform:translateY(-1px); /* Subtle lift on focus */}.input-field.svelte-1a8gd73:disabled {background:var(--widget-surface);border-color:var(--widget-border-subtle);cursor:not-allowed;opacity:0.6;color:var(--widget-text-muted);}.input-field.svelte-1a8gd73::placeholder {color:var(--widget-text-subtle);font-weight:var(--widget-font-weight-normal);font-style:italic;}.send-button.svelte-1a8gd73 {width:36px; /* Compact size for maximum space optimization */height:36px;border-radius:var(--widget-radius-full); /* Fully circular like modern designs */background:var(--widget-primary);border:none;color:var(--widget-text-inverse);cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all var(--widget-transition);flex-shrink:0;box-shadow:var(--widget-shadow-sm);position:relative;overflow:hidden;}
  
  /* Modern button interactions */.send-button.svelte-1a8gd73:hover:not(:disabled) {background:var(--widget-primary-hover);box-shadow:var(--widget-shadow-lg);transform:scale(1.05) translateY(-1px);}.send-button.svelte-1a8gd73:active:not(:disabled) {background:var(--widget-primary-dark);box-shadow:var(--widget-shadow-md);transform:scale(1.02) translateY(0);}.send-button.svelte-1a8gd73:disabled {opacity:0.4;cursor:not-allowed;background:var(--widget-surface);color:var(--widget-text-muted);box-shadow:var(--widget-shadow-sm);transform:none;}.send-button.svelte-1a8gd73 svg:where(.svelte-1a8gd73) {width:16px; /* Proportional to compact button size */height:16px;transition:transform var(--widget-transition);}.send-button.svelte-1a8gd73:hover:not(:disabled) svg:where(.svelte-1a8gd73) {transform:translateX(2px) scale(1.1);}
  
  /* Modern custom scrollbar for textarea */.input-field.svelte-1a8gd73::-webkit-scrollbar {width:6px;}.input-field.svelte-1a8gd73::-webkit-scrollbar-track {background:transparent;}.input-field.svelte-1a8gd73::-webkit-scrollbar-thumb {background:var(--widget-border-light);border-radius:var(--widget-radius-full);}.input-field.svelte-1a8gd73::-webkit-scrollbar-thumb:hover {background:var(--widget-border);}
  
  @media (max-width: 480px) {.input-bar.svelte-1a8gd73 {padding:var(--widget-space-xs) var(--widget-space-sm);gap:var(--widget-space-xs);min-height:52px; /* Slightly larger for mobile accessibility */}.input-field.svelte-1a8gd73 {font-size:16px; /* Prevent zoom on iOS */padding:var(--widget-space-xs) var(--widget-space-sm);min-height:40px; /* Accessible touch targets on mobile */height:40px;}.send-button.svelte-1a8gd73 {width:40px; /* Accessible touch targets on mobile */height:40px;}.send-button.svelte-1a8gd73 svg:where(.svelte-1a8gd73) {width:18px;height:18px;}
  }
  
  /* Theme adjustments */`
};
function Gn(t, e) {
  dt(e, !0), Lt(t, El);
  let i = yi(e, "onsend", 7), s = yi(e, "disabled", 7, !1), r = /* @__PURE__ */ M(""), n;
  function a() {
    var x, $, q, oe;
    const g = He().generate();
    O.log("InputBar", "handleSend() called", {
      correlationId: g,
      rawInputValue: m(r),
      rawLength: ((x = m(r)) == null ? void 0 : x.length) || 0,
      rawType: typeof m(r),
      disabled: s(),
      isTyping: S.isTyping
    });
    const y = m(r).trim();
    O.log("InputBar", "After trimming", {
      correlationId: g,
      original: m(r),
      trimmed: y,
      originalLength: (($ = m(r)) == null ? void 0 : $.length) || 0,
      trimmedLength: (y == null ? void 0 : y.length) || 0,
      wasEmptyAfterTrim: !y,
      hadWhitespaceOnly: (((q = m(r)) == null ? void 0 : q.length) || 0) > 0 && !y
    }), y && !s() && !S.isTyping ? (O.log("InputBar", "Conditions met, calling onsend", {
      correlationId: g,
      trimmedValue: y,
      trimmedLength: y.length,
      willSend: !0
    }), He().setCurrent(g), (oe = i()) == null || oe(y), I(r, ""), l()) : O.log("InputBar", "Send blocked", {
      correlationId: g,
      hasContent: !!y,
      disabled: s(),
      isTyping: S.isTyping,
      trimmedValue: y || "(empty)",
      reason: y ? s() ? "disabled" : S.isTyping ? "typing in progress" : "unknown" : "empty content"
    });
  }
  function o(g) {
    g.key === "Enter" && !g.shiftKey && (g.preventDefault(), a());
  }
  function l() {
    n && (n.style.height = "auto", n.style.height = Math.min(n.scrollHeight, 120) + "px");
  }
  const c = /* @__PURE__ */ Ke(() => s() || S.isTyping || S.error !== null), u = /* @__PURE__ */ Ke(() => S.isTyping ? "Waiting for response..." : S.error ? "Error occurred" : jt.placeholder);
  var h = {
    get onsend() {
      return i();
    },
    set onsend(g) {
      i(g), lt();
    },
    get disabled() {
      return s();
    },
    set disabled(g = !1) {
      s(g), lt();
    }
  }, v = Cl(), p = Y(v);
  so(p), p.__keydown = o, p.__input = l, Rn(p, (g) => n = g, () => n);
  var f = se(p, 2);
  return f.__click = a, B(v), kt(
    (g) => {
      bi(p, "placeholder", m(u)), p.disabled = m(c), f.disabled = g;
    },
    [() => m(c) || !m(r).trim()]
  ), Uo(p, () => m(r), (g) => I(r, g)), N(t, v), ut(h);
}
xs(["keydown", "input", "click"]);
Ot(Gn, { onsend: {}, disabled: {} }, [], [], !0);
class Il {
  /**
   * Validate message content and length
   */
  static validate(e) {
    const i = He().getCurrent();
    if (O.log("MessageValidator", "validate() called", {
      correlationId: i,
      message: e,
      messageType: typeof e,
      messageLength: (e == null ? void 0 : e.length) || 0,
      isNullOrUndefined: e == null
    }), typeof e != "string") {
      const a = "Message is required and must be a string";
      return O.log("MessageValidator", "Validation failed - invalid type", { correlationId: i, message: e, error: a }), {
        isValid: !1,
        error: a
      };
    }
    if (e.length === 0) {
      const a = "Message is too short";
      return O.log("MessageValidator", "Validation failed - empty string", { correlationId: i, message: e, error: a }), {
        isValid: !1,
        error: a
      };
    }
    const s = e.trim();
    if (O.log("MessageValidator", "After trimming", {
      correlationId: i,
      original: e,
      trimmed: s,
      originalLength: e.length,
      trimmedLength: s.length,
      wasWhitespaceOnly: e.length > 0 && s.length === 0
    }), s.length < ht.MIN_LENGTH) {
      const a = "Message is too short";
      return O.log("MessageValidator", "Validation failed - too short", {
        correlationId: i,
        trimmedLength: s.length,
        minLength: ht.MIN_LENGTH,
        error: a
      }), {
        isValid: !1,
        error: a
      };
    }
    if (s.length > ht.MAX_LENGTH) {
      const a = `Message exceeds maximum length of ${ht.MAX_LENGTH} characters`;
      return O.log("MessageValidator", "Validation failed - too long", {
        correlationId: i,
        trimmedLength: s.length,
        maxLength: ht.MAX_LENGTH,
        error: a
      }), {
        isValid: !1,
        error: a
      };
    }
    O.log("MessageValidator", "Starting HTML sanitization", {
      correlationId: i,
      inputContent: s,
      inputLength: s.length
    });
    const r = this.sanitizeHTML(s);
    O.log("MessageValidator", "HTML sanitization complete", {
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
    return O.log("MessageValidator", "Final validation result", { correlationId: i, result: n }), n;
  }
  /**
   * Basic HTML sanitization
   */
  static sanitizeHTML(e) {
    const i = He().getCurrent();
    O.log("MessageValidator", "sanitizeHTML() input", {
      correlationId: i,
      input: e,
      inputLength: e.length
    });
    let s = e, r = 0;
    const n = s;
    s = s.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ""), s !== n && O.log("MessageValidator", `Step ${++r} - Removed script tags`, {
      correlationId: i,
      before: n,
      after: s,
      removed: n.length - s.length
    });
    const a = s;
    s = s.replace(/href\s*=\s*["']javascript:[^"']*["']/gi, 'href=""'), s !== a && O.log("MessageValidator", `Step ${++r} - Removed javascript: protocol`, {
      correlationId: i,
      before: a,
      after: s,
      removed: a.length - s.length
    });
    const o = s;
    s = s.replace(/\s*on\w+\s*=\s*["'][^"']*["']/gi, ""), s !== o && O.log("MessageValidator", `Step ${++r} - Removed event handlers:`, {
      correlationId: i,
      before: o,
      after: s,
      removed: o.length - s.length
    });
    const l = s;
    return s = s.replace(/src\s*=\s*["']data:[^"']*["']/gi, 'src=""'), s !== l && O.log("MessageValidator", `Step ${++r} - Removed data: URLs:`, {
      correlationId: i,
      before: l,
      after: s,
      removed: l.length - s.length
    }), O.log("MessageValidator", "sanitizeHTML() result", {
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
class Zn {
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
class me extends Error {
  constructor(e, i, s = !1) {
    super(e), this.name = "ChatWidgetError", this.context = i, this.timestamp = /* @__PURE__ */ new Date(), this.isRetryable = s, Error.captureStackTrace && Error.captureStackTrace(this, me);
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
class Pt extends me {
  constructor(e, i, s, r) {
    super(e, { ...r, statusCode: i, endpoint: s }, !0), this.name = "NetworkError", this.statusCode = i, this.endpoint = s;
  }
}
class Kn extends me {
  constructor(e, i, s, r, n) {
    super(e, { ...n, wsUrl: i, closeCode: s, closeReason: r }, !0), this.name = "WebSocketError", this.wsUrl = i, this.closeCode = s, this.closeReason = r;
  }
}
class zi extends me {
  constructor(e, i, s, r, n) {
    super(e, { ...n, field: i, value: s, expectedType: r }, !1), this.name = "ValidationError", this.field = i, this.value = s, this.expectedType = r;
  }
}
class Jn extends me {
  constructor(e, i, s, r) {
    super(e, { ...r, configKey: i, configValue: s }, !1), this.name = "ConfigurationError", this.configKey = i, this.configValue = s;
  }
}
class Xn extends me {
  constructor(e, i, s, r) {
    super(e, { ...r, clientId: i, statusCode: s }, !1), this.name = "AuthenticationError", this.clientId = i, this.statusCode = s;
  }
}
class Ut extends me {
  constructor(e, i, s, r) {
    super(e, { ...r, retryAfter: i, limit: s }, !0), this.name = "RateLimitError", this.retryAfter = i, this.limit = s;
  }
}
class Qn extends me {
  constructor(e, i, s, r) {
    super(e, { ...r, storageType: i, operation: s }, !0), this.name = "StorageError", this.storageType = i, this.operation = s;
  }
}
class ea extends me {
  constructor(e, i, s, r) {
    super(e, { ...r, timeout: i, operation: s }, !0), this.name = "TimeoutError", this.timeout = i, this.operation = s;
  }
}
function Lr(t) {
  return t instanceof me ? t.isRetryable : !!(t instanceof TypeError && t.message.includes("fetch"));
}
function Tl(t) {
  return t instanceof me ? {
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
function kl(t) {
  return t instanceof Pt ? t.statusCode === 404 ? "Service temporarily unavailable. Please try again later." : t.statusCode === 429 || t instanceof Ut ? "Too many requests. Please wait a moment and try again." : t.statusCode && t.statusCode >= 500 ? "Server error. Please try again in a few moments." : t.statusCode && (t.statusCode === 400 || t.statusCode === 401 || t.statusCode === 403) ? t.message : "Unable to connect to the server. Please check your internet connection." : t instanceof Kn ? "Connection lost. Attempting to reconnect..." : t instanceof Xn ? "Access denied. Please check your configuration." : t instanceof zi ? t.message : t instanceof Jn ? "Widget configuration error. Please contact support." : t instanceof ea ? "Request timed out. Please try again." : t instanceof Qn ? "Unable to save data. Please check your browser settings." : "Something went wrong. Please try again.";
}
class Ri {
  /**
   * Process and categorize errors using custom error classes
   */
  static handle(e, i) {
    const s = Tl(e);
    let r;
    return e instanceof Pt ? r = "NETWORK_ERROR" : e instanceof Kn ? r = "WEBSOCKET_ERROR" : e instanceof zi ? r = "VALIDATION_ERROR" : e instanceof Jn ? r = "CONFIGURATION_ERROR" : e instanceof Xn ? r = "AUTHENTICATION_ERROR" : e instanceof Ut ? r = "RATE_LIMIT_ERROR" : e instanceof Qn ? r = "STORAGE_ERROR" : e instanceof ea ? r = "TIMEOUT_ERROR" : e instanceof me ? r = "WIDGET_ERROR" : r = "UNKNOWN_ERROR", {
      message: kl(e),
      code: r,
      isUserFacing: !0,
      shouldRetry: Lr(e),
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
    return e && typeof e == "object" && "shouldRetry" in e ? e.shouldRetry : Lr(e);
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
class Bs {
  // Note: No default production URL - must be configured explicitly
  // via environment variable, runtime config, or attribute
  /**
   * Resolve API and WebSocket URLs based on client ID and environment
   */
  static resolveUrls(e, i = {}) {
    const s = Zn.validate(e);
    if (!s.isValid)
      throw new Error(`Invalid client ID for URL resolution: ${s.error}`);
    const r = s.sanitizedValue;
    return this.isDevelopmentEnvironment(i.environment) ? this.resolveDevelopmentUrls(r) : this.resolveProductionUrls(r, i.baseUrl);
  }
  /**
   * Resolve URLs for development environment
   */
  static resolveDevelopmentUrls(e) {
    return {
      apiUrl: `http://localhost:8000/api/v1/widget/${e}`,
      wsUrl: `ws://localhost:8000/api/v1/communication/${e}/ws`
    };
  }
  /**
   * Resolve URLs for production environment
   */
  static resolveProductionUrls(e, i) {
    const s = i || "";
    if (!s)
      throw new Error(
        `Widget configuration error: Production API URL not set.

Configure via:
1. Environment: VITE_API_BASE_URL=https://your-api.com
2. Runtime: window.AIChat = { apiUrl: "https://...", wsUrl: "wss://..." }
3. Attribute: <assistant-widget api-url="https://...">

See documentation for setup guide.`
      );
    const r = this.isLocalhostUrl(s) ? s : this.ensureHttps(s);
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
class Ml {
  constructor(e) {
    try {
      const i = window, s = i.AIChat || i.ChatWidget || {}, r = e ? this.parseElementAttributes(e) : {}, n = {
        ...Ie,
        ...s,
        ...r
      };
      if (!n.clientId)
        throw new Error("Widget configuration missing: clientId is required");
      const a = Zn.validate(n.clientId);
      if (!a.isValid)
        throw new Error(`Invalid client ID: ${a.error}`);
      const l = n.apiUrl && n.wsUrl ? { apiUrl: n.apiUrl, wsUrl: n.wsUrl } : Bs.resolveUrls(a.sanitizedValue);
      this.config = {
        ...n,
        clientId: a.sanitizedValue,
        apiUrl: l.apiUrl,
        wsUrl: l.wsUrl
      };
    } catch (i) {
      const s = Ri.handle(i, {
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
      const n = Pn.attributeToProperty(r);
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
          case "apiUrl":
          case "wsUrl":
            i[n] = a;
            break;
          case "theme":
            Un(a) && (i.theme = a);
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
const _i = /* @__PURE__ */ new Map();
let Hi = !1;
function $l() {
  try {
    const t = "__storage_test__";
    return localStorage.setItem(t, t), localStorage.removeItem(t), !0;
  } catch {
    return !1;
  }
}
Hi = !$l();
function Al(t) {
  try {
    return Hi ? _i.get(t) ?? null : localStorage.getItem(t);
  } catch {
    return _i.get(t) ?? null;
  }
}
function Ll(t, e) {
  try {
    return Hi ? (_i.set(t, e), !0) : (localStorage.setItem(t, e), !0);
  } catch {
    return _i.set(t, e), Hi = !0, !1;
  }
}
function Ol(t) {
  try {
    if (Hi) {
      _i.delete(t);
      return;
    }
    localStorage.removeItem(t);
  } catch {
    _i.delete(t);
  }
}
const ke = class ke {
  /**
   * @param storageAdapter - Optional storage adapter for testing (defaults to localStorage via safe utils)
   */
  constructor(e) {
    this.storageAdapter = e, this.visitorId = this.getOrCreateVisitorId();
  }
  getOrCreateVisitorId() {
    var i;
    let e = this.getItem(ke.VISITOR_ID_KEY);
    return e || (e = this.generateVisitorId(), this.setItem(ke.VISITOR_ID_KEY, e), (i = window.AIChat) != null && i.debug && O.log("ChatWidget", "Created new visitor", e)), e;
  }
  /**
   * Internal storage access methods that use adapter if available
   */
  getItem(e) {
    return this.storageAdapter ? this.storageAdapter.getItem(e) : Al(e);
  }
  setItem(e, i) {
    this.storageAdapter ? this.storageAdapter.setItem(e, i) : Ll(e, i);
  }
  removeItem(e) {
    this.storageAdapter ? this.storageAdapter.removeItem(e) : Ol(e);
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
      ke.SESSION_HISTORY_KEY,
      JSON.stringify(s)
    );
  }
  getSessionHistory() {
    const e = this.getItem(ke.SESSION_HISTORY_KEY);
    return e ? JSON.parse(e) : [];
  }
  getLastActiveSession() {
    const i = this.getSessionHistory().filter(
      (s) => s.active && Date.now() - s.timestamp < re.SESSION_TIMEOUT
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
      ke.SESSION_HISTORY_KEY,
      JSON.stringify(s)
    );
  }
  /**
   * Clear visitor data for GDPR compliance
   */
  clearVisitorData() {
    this.removeItem(ke.VISITOR_ID_KEY), this.removeItem(ke.SESSION_HISTORY_KEY), this.visitorId = this.generateVisitorId();
  }
};
ke.VISITOR_ID_KEY = $r.VISITOR_ID, ke.SESSION_HISTORY_KEY = $r.SESSIONS;
let Ys = ke;
class Ai {
  /**
   * Get API endpoint URL with base path resolved
   */
  static getApiUrl(e, i) {
    const { apiUrl: s } = Bs.resolveUrls(i.clientId, i.options);
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
    const { wsUrl: i } = Bs.resolveUrls(e.clientId, e.options), s = new URLSearchParams({
      session_id: e.sessionId
    });
    return e.visitorId && s.append("visitor_id", e.visitorId), `${i}?${s}`;
  }
}
class Nl {
  constructor(e, i) {
    this.sessionId = null, this.config = e, this.visitor = i, this.debugLogger = lr(e.getAll());
  }
  /**
   * Initialize widget session with backend
   */
  async initialize() {
    try {
      const e = new AbortController(), i = setTimeout(() => e.abort(), re.API_TIMEOUT), s = Ai.getApiUrl("init", {
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
      const n = He().getCurrent(), a = await fetch(s, {
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
            const c = l.detail || l.message || "Validation failed";
            throw new Error(`Validation error: ${typeof c == "string" ? c : JSON.stringify(c)}`);
          } catch (l) {
            throw l instanceof Error && l.message.startsWith("Validation error:") ? l : new Error("Invalid request data. Please check client ID and visitor ID format.");
          }
        if (a.status === 429) {
          const l = a.headers.get("Retry-After"), c = l ? parseInt(l, 10) : 60;
          throw new Ut(
            `Rate limit exceeded. Please try again in ${c} seconds.`,
            c
          );
        }
        throw new Pt(
          `Failed to initialize widget: ${a.statusText}`,
          a.status,
          s
        );
      }
      const o = await a.json();
      return this.sessionId = o.session_id, this.visitor.saveSessionId(o.session_id), o;
    } catch (e) {
      if (e instanceof zi || e instanceof Pt || e instanceof Ut)
        throw e;
      const i = Ri.handle(e, {
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
    const i = He().getCurrent();
    try {
      this.debugLogger.log("APIClient", "sendMessage() called", {
        correlationId: i,
        message: e,
        messageLength: (e == null ? void 0 : e.length) || 0,
        messageType: typeof e,
        sessionId: this.sessionId,
        clientId: this.config.clientId
      });
      const n = Il.validate(e);
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
      const a = new AbortController(), o = setTimeout(() => a.abort(), re.API_TIMEOUT), l = {
        body: {
          client_id: this.config.clientId,
          visitor_id: this.visitor.getVisitorId(),
          session_id: this.sessionId,
          message: n.sanitizedValue
        }
      }, c = Ai.getApiUrl("chat", {
        clientId: this.config.clientId
      });
      this.debugLogger.log("APIClient", "HTTP request payload", {
        correlationId: i,
        url: c,
        payload: l,
        messageContent: l.body.message,
        messageLength: ((r = l.body.message) == null ? void 0 : r.length) || 0
      });
      const u = await fetch(c, {
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
          const v = u.headers.get("Retry-After"), p = v ? parseInt(v, 10) : 60;
          throw new Ut(
            `Rate limit exceeded. Please try again in ${p} seconds.`,
            p
          );
        }
        throw new Pt(
          `Failed to send message: ${u.statusText}`,
          u.status,
          c
        );
      }
      const h = await u.json();
      return this.debugLogger.log("APIClient", "HTTP response data", { correlationId: i, result: h }), h;
    } catch (n) {
      if (this.debugLogger.error("APIClient", "sendMessage() error", { correlationId: i, error: n }), n instanceof zi || n instanceof Pt || n instanceof Ut)
        throw n;
      const a = Ri.handle(n, {
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
      const e = new AbortController(), i = setTimeout(() => e.abort(), re.API_TIMEOUT), s = Ai.getApiUrl("sessionHealth", {
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
      const n = He().getCurrent(), a = await fetch(s, {
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
      const e = new AbortController(), i = setTimeout(() => e.abort(), re.API_TIMEOUT), s = Ai.getApiUrl("sessionHealth", {
        clientId: this.config.clientId,
        sessionId: this.sessionId
      }), r = {
        client_id: this.config.clientId,
        visitor_id: this.visitor.getVisitorId()
      }, n = He().getCurrent(), a = await fetch(s, {
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
      const i = Ri.handle(e, {
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
var Li = /* @__PURE__ */ ((t) => (t.DISCONNECTED = "disconnected", t.CONNECTING = "connecting", t.CONNECTED = "connected", t.ERROR = "error", t))(Li || {});
class zl {
  constructor(e, i) {
    this.ws = null, this.sessionId = null, this.state = "disconnected", this.messageQueue = [], this.reconnectAttempts = 0, this.maxReconnectAttempts = re.MAX_RECONNECT_ATTEMPTS, this.reconnectDelay = re.RECONNECT_DELAY, this.heartbeatInterval = null, this.listeners = /* @__PURE__ */ new Map(), this.abortController = null, this.cleanupFunctions = [], this.config = e, this.visitor = i, this.debugLogger = lr(e.getAll());
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
        const i = Ai.getWebSocketUrl({
          clientId: this.config.clientId,
          sessionId: e,
          visitorId: this.visitor.getVisitorId()
        });
        this.ws = new WebSocket(i), this.setupEventHandlers();
      } catch (i) {
        const s = Ri.handle(i, {
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
      var i, s, r, n, a, o, l, c, u;
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
          listenerCount: ((c = this.listeners.get("message")) == null ? void 0 : c.size) || 0,
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
   * Send message through WebSocket
   */
  send(e) {
    var r, n, a;
    const i = He().getCurrent();
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
      }), this.messageQueue.length >= ht.MAX_QUEUE_SIZE) {
        this.debugLogger.warn("WebSocketManager", "Message queue full", {
          queueSize: this.messageQueue.length,
          maxSize: ht.MAX_QUEUE_SIZE
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
    }, re.HEARTBEAT_INTERVAL), this.cleanupFunctions.push(() => this.stopHeartbeat());
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
class Rl {
  constructor(e, i, s) {
    this.typingTimeout = null, this.hasHiddenTypingForCurrentStream = !1, this.lastCompletionTimestamp = null, this.lastMessageSentTimestamp = null, this.COMPLETION_GRACE_PERIOD_MS = re.COMPLETION_GRACE_PERIOD, this.chatStore = e, this.uiStore = i, this.debugLogger = s;
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
    const i = e.data.initial_message;
    i && (this.chatStore.addMessage(i, "assistant"), this.debugLogger.log("ChatController", "Initial message added"));
  }
  handleTypingIndicator() {
    const e = this.lastCompletionTimestamp ? Date.now() - this.lastCompletionTimestamp : 1 / 0, i = this.lastMessageSentTimestamp ? Date.now() - this.lastMessageSentTimestamp : 1 / 0;
    if (e < this.COMPLETION_GRACE_PERIOD_MS && i > re.CONNECTION_DELAY) {
      this.debugLogger.log("ChatController", "Ignoring typing indicator - grace period");
      return;
    }
    !this.hasHiddenTypingForCurrentStream && !this.chatStore.isStreaming ? (this.debugLogger.log("ChatController", "Processing typing indicator"), this.chatStore.setTyping(!0), this.typingTimeout && clearTimeout(this.typingTimeout), this.typingTimeout = window.setTimeout(() => {
      this.debugLogger.log("ChatController", "Typing indicator timeout"), this.chatStore.setTyping(!1), this.typingTimeout = null;
    }, re.TYPING_INDICATOR_TIMEOUT)) : this.debugLogger.log("ChatController", "Ignoring typing indicator - already streaming");
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
  setTypingWithTimeout(e = re.TYPING_FALLBACK_TIMEOUT) {
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
var Dl = /* @__PURE__ */ V('<button class="restart-button svelte-zsv8oa" aria-describedby="error-message">Retry Connection</button> <span id="error-message" class="sr-only svelte-zsv8oa">Connection lost. Unable to reconnect. Click to retry connection.</span>', 1), Pl = /* @__PURE__ */ V('<button class="restart-button svelte-zsv8oa" aria-describedby="error-message">Retry Connection</button> <span id="error-message" class="sr-only svelte-zsv8oa">Connection error occurred. Click to retry connection.</span>', 1), Ul = /* @__PURE__ */ V('<div class="error-banner svelte-zsv8oa" role="alert" aria-live="polite"><!></div>'), Hl = /* @__PURE__ */ V('<button class="backdrop svelte-zsv8oa" aria-label="Close chat overlay" tabindex="-1"></button>'), Wl = /* @__PURE__ */ V('<div class="chat-container svelte-zsv8oa" role="dialog" aria-label="Chat assistant" aria-modal="true"><!> <!> <!> <!></div> <!>', 1), Vl = /* @__PURE__ */ V('<div class="widget-container svelte-zsv8oa"><!> <!></div>');
const jl = {
  hash: "svelte-zsv8oa",
  code: `.widget-container.svelte-zsv8oa {position:fixed;bottom:var(--widget-space-lg);z-index:var(--widget-z-base);font-family:var(--widget-font-family);}.widget-container[data-position="bottom-right"].svelte-zsv8oa {right:var(--widget-space-lg);}.widget-container[data-position="bottom-left"].svelte-zsv8oa {left:var(--widget-space-lg);}.chat-container.svelte-zsv8oa {position:absolute;
    /* Dynamic positioning - optimized for when floating button is hidden (widget open) */bottom:var(--widget-space-lg); /* 24px base spacing when button is hidden */
    /* Dynamic viewport-constrained dimensions - maximized space utilization */width:min(420px, calc(100vw - 48px)); /* Never exceed viewport minus margins */height:min(680px, calc(100vh - 72px)); /* Optimized height: 24px bottom + 48px top margins */
    /* Hard boundaries to prevent overflow */max-width:calc(100vw - 48px);max-height:calc(100vh - 72px); /* More space when floating button hidden */
    /* Minimum usable size for very small screens */min-width:min(320px, calc(100vw - 32px));min-height:min(400px, calc(100vh - 60px)); /* Better minimum height utilization */background:var(--widget-background);border-radius:var(--widget-radius-xl);box-shadow:var(--widget-shadow-lg);border:1px solid var(--widget-border);display:flex;flex-direction:column;overflow:hidden;transform-origin:bottom right;transition:bottom var(--widget-transition); /* Smooth repositioning animation */}.widget-container[data-position="bottom-right"].svelte-zsv8oa .chat-container:where(.svelte-zsv8oa) {right:0;transform-origin:bottom right;}.widget-container[data-position="bottom-left"].svelte-zsv8oa .chat-container:where(.svelte-zsv8oa) {left:0;transform-origin:bottom left;}.backdrop.svelte-zsv8oa {display:none;background:none;border:none;padding:0;margin:0;cursor:default;}
  
  /* Screen reader only content */.sr-only.svelte-zsv8oa {position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0;}.error-banner.svelte-zsv8oa {position:absolute;bottom:75px;left:50%;transform:translateX(-50%);background:var(--widget-background);padding:var(--widget-space) var(--widget-space-lg);border-radius:var(--widget-radius-lg);box-shadow:var(--widget-shadow-lg);border:1px solid var(--widget-error);z-index:10;}.restart-button.svelte-zsv8oa {background:var(--widget-primary);color:var(--widget-text-inverse);border:none;padding:var(--widget-space) var(--widget-space-lg);border-radius:var(--widget-radius-md);font-size:var(--widget-font-size-sm);font-weight:600;cursor:pointer;transition:all var(--widget-transition);font-family:var(--widget-font-family);}.restart-button.svelte-zsv8oa:hover {background:var(--widget-primary-hover);}.restart-button.svelte-zsv8oa:active {background:var(--widget-primary-dark);}
  
  /* Mobile styles */
  @media (max-width: 480px) {.widget-container.svelte-zsv8oa {bottom:0;left:0 !important;right:0 !important;}.chat-container.svelte-zsv8oa {position:fixed;bottom:0;left:0;right:0;width:100%;height:100vh;border-radius:0;max-height:100vh;
      animation: slideUp var(--widget-transition-slow);}.backdrop.svelte-zsv8oa {display:block;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0, 0, 0, 0.5);z-index:calc(var(--widget-z-base) - 1);
      animation: fadeIn var(--widget-transition);}
  }
  
  /* Very small screens - ultra-compact mode */
  @media (max-width: 399px) {.chat-container.svelte-zsv8oa {width:min(300px, calc(100vw - 24px)); /* Tighter margins for tiny screens */height:min(500px, calc(100vh - 60px)); /* Optimized height with better space utilization */max-height:calc(100vh - 60px); /* Better max-height for tiny screens */min-width:calc(100vw - 24px); /* Use all available width */}
  }

  /* Small tablets - compact mode with margins */
  @media (min-width: 481px) and (max-width: 640px) {.chat-container.svelte-zsv8oa {width:min(360px, calc(100vw - 40px)); /* Compact sizing */height:min(580px, calc(100vh - 92px)); /* Better height utilization: 24px bottom + 68px margins */max-height:calc(100vh - 92px); /* Consistent max-height */}
  }

  /* Medium tablets - standard tablet mode */
  @media (min-width: 641px) and (max-width: 768px) {.chat-container.svelte-zsv8oa {width:min(400px, calc(100vw - 48px)); /* Standard tablet sizing */height:min(640px, calc(100vh - 72px)); /* Optimized space utilization */max-height:calc(100vh - 72px); /* Consistent max-height */}
  }

  /* Small desktop - intermediate sizing */
  @media (min-width: 769px) and (max-width: 1024px) {.chat-container.svelte-zsv8oa {width:min(410px, calc(100vw - 48px)); /* Near-optimal size */height:min(660px, calc(100vh - 72px)); /* Optimized height utilization */max-height:calc(100vh - 72px); /* Consistent max-height */}
  }

  /* Large desktop - full size with dynamic constraints */
  @media (min-width: 1025px) {.chat-container.svelte-zsv8oa {width:min(420px, calc(100vw - 48px)); /* Full optimal size */height:min(680px, calc(100vh - 72px)); /* Maximum space optimization */max-height:calc(100vh - 72px); /* Consistent max-height */}
  }

  /* Height-constrained screens - optimize for short displays */
  @media (max-height: 720px) and (min-width: 481px) {.chat-container.svelte-zsv8oa {height:min(560px, calc(100vh - 80px)); /* Better height utilization for short screens */max-height:calc(100vh - 80px);}
  }

  @media (max-height: 600px) and (min-width: 481px) {.chat-container.svelte-zsv8oa {height:min(480px, calc(100vh - 60px)); /* Optimized height reduction */max-height:calc(100vh - 60px);}
  }

  @media (max-height: 500px) and (min-width: 481px) {.chat-container.svelte-zsv8oa {height:min(400px, calc(100vh - 48px)); /* Minimum viable height with better utilization */max-height:calc(100vh - 48px);bottom:var(--widget-space-lg); /* Consistent bottom spacing */}
  }

  /* Ultra-short screens - emergency fallback */
  @media (max-height: 400px) and (min-width: 481px) {.chat-container.svelte-zsv8oa {height:min(320px, calc(100vh - 36px)); /* Emergency minimal height with better utilization */max-height:calc(100vh - 36px);bottom:var(--widget-space-md); /* Reduced but consistent spacing */}
  }

  /* Edge case handling - browser zoom, developer tools, split screens */
  
  /* Very narrow screens (developer tools docked to side) */
  @media (max-width: 600px) and (min-width: 400px) {.chat-container.svelte-zsv8oa {width:calc(100vw - 32px); /* Use nearly full width when constrained */max-width:380px; /* But don't exceed comfortable reading width */}
  }

  /* Extreme zoom scenarios - prioritize usability */
  @media (max-width: 350px) {.chat-container.svelte-zsv8oa {width:calc(100vw - 16px); /* Minimal margins for extreme zoom */min-width:280px; /* Absolute minimum for text readability */}
  }

  /* Landscape mobile/tablet with limited height */
  @media (orientation: landscape) and (max-height: 500px) and (min-width: 481px) {.chat-container.svelte-zsv8oa {height:min(400px, calc(100vh - 48px)); /* Optimize for landscape with better utilization */max-height:calc(100vh - 48px);bottom:var(--widget-space-lg); /* Consistent spacing */}
  }

  /* Developer tools scenarios - detect reduced viewport */
  @media (max-width: 800px) and (min-height: 600px) {
    /* Likely developer tools docked to side */.chat-container.svelte-zsv8oa {width:min(380px, calc(100vw - 40px)); /* Conservative width */height:min(560px, calc(100vh - 72px)); /* Better height utilization */max-height:calc(100vh - 72px);}
  }

  @media (min-width: 1200px) and (max-height: 500px) {
    /* Likely developer tools docked to bottom */.chat-container.svelte-zsv8oa {height:min(400px, calc(100vh - 48px)); /* Optimized height */max-height:calc(100vh - 48px);bottom:var(--widget-space-lg); /* Consistent spacing */}
  }

  /* Extreme cases - ensure widget remains functional */
  @media (max-width: 320px), (max-height: 350px) {.chat-container.svelte-zsv8oa {
      /* Emergency dimensions that work on any screen with optimized utilization */width:min(280px, calc(100vw - 16px));height:min(300px, calc(100vh - 24px)); /* Better height utilization */max-height:calc(100vh - 24px);bottom:var(--widget-space-xs); /* Minimal but consistent spacing */
      /* Simplify styling for extreme constraints */border-radius:var(--widget-radius-lg);}.widget-container[data-position="bottom-right"].svelte-zsv8oa .chat-container:where(.svelte-zsv8oa),
    .widget-container[data-position="bottom-left"].svelte-zsv8oa .chat-container:where(.svelte-zsv8oa) {left:8px;right:8px;transform-origin:bottom center;}
  }`
};
function ta(t, e) {
  dt(e, !0), Lt(t, jl);
  let i = yi(e, "hostElement", 7), s, r, n, a, o, l;
  const c = He();
  let u = !1, h = !1, v = !1, p = null, f = /* @__PURE__ */ M(F(Li.DISCONNECTED)), g = /* @__PURE__ */ M(
    !1
    // Track if max reconnection attempts exhausted
  );
  ar(async () => {
    try {
      if (s = new Ml(i()), l = lr(s.getAll()), r = new Ys(), n = new Nl(s, r), a = new zl(s, r), o = new Rl(S, X, l), i()) {
        const { configStore: b } = await Promise.resolve().then(() => il);
        b.loadFromAttributes(i());
      }
      x(), l.log("ChatWidget", "Attaching WebSocket listeners"), a.on("message", q), a.on("stateChange", (b) => {
        l.log("ChatWidget", "WebSocket state changed", {
          oldState: m(f),
          newState: b,
          timestamp: Date.now()
        }), I(f, b, !0);
      }), a.on("error", (b) => {
        l.error("ChatWidget", "WebSocket error event", b), p = b.error, S.setError(b.error);
      }), a.on("connectionFailed", (b) => {
        l.error("ChatWidget", "WebSocket connection failed after max attempts", b), I(g, !0), p = b.error, S.setError(b.error);
      }), l.log("ChatWidget", "WebSocket listeners attached successfully"), X.isOpen && await y(), l.log("ChatWidget", "Services initialized successfully");
    } catch (b) {
      l.error("ChatWidget", "Initialization failed", b), p = b instanceof Error ? b.message : "Failed to initialize chat";
    }
  }), qo(() => {
    const b = n == null ? void 0 : n.getSessionId();
    b && r.markSessionInactive(b), a == null || a.disconnect(), o == null || o.cleanup();
  });
  async function y() {
    var b, j;
    if (!(u || h)) {
      h = !0;
      try {
        if (X.setLoading(!0), await n.resumeSession()) {
          const D = n.getSessionId();
          D && (await a.connect(D), setTimeout(
            () => {
              l.log("ChatWidget", "Testing WebSocket connection after session resumption..."), a.testConnection();
            },
            re.CONNECTION_DELAY
          ));
        } else {
          const D = await n.initialize();
          (b = D.assistant_info) != null && b.assistant_name && jt.setBackendTitle(D.assistant_info.assistant_name), (j = D.assistant_info) != null && j.initial_message && S.addMessage(D.assistant_info.initial_message, "assistant"), await a.connect(D.session_id), setTimeout(
            () => {
              l.log("ChatWidget", "Testing WebSocket connection after initialization..."), a.testConnection();
            },
            re.CONNECTION_DELAY
          ), D.settings && $(D.settings);
        }
        u = !0;
      } catch (L) {
        p = L instanceof Error ? L.message : "Failed to initialize", S.setError(p);
      } finally {
        X.setLoading(!1), h = !1;
      }
    }
  }
  function x() {
    const b = s.getAll();
    requestAnimationFrame(() => {
      if (i() && (i().setAttribute("data-theme", b.theme || "modern"), b.primary_color || b.accent_color)) {
        const j = b.accent_color || b.primary_color;
        if (j) {
          const L = or(j, "#6b46c1");
          i().style.setProperty("--widget-primary", L), i().style.setProperty("--widget-primary-hover", $e(L, -20)), i().style.setProperty("--widget-primary-light", $e(L, 20)), i().style.setProperty("--widget-primary-dark", $e(L, -30)), i().style.setProperty("--widget-gradient", `linear-gradient(135deg, ${L} 0%, ${$e(L, 20)} 100%)`), i().style.setProperty("--widget-gradient-hover", `linear-gradient(135deg, ${$e(L, -20)} 0%, ${L} 100%)`);
        }
      }
    });
  }
  function $(b) {
    requestAnimationFrame(() => {
      i() && (b.theme && typeof b.theme == "string" && i().setAttribute("data-theme", b.theme), b.primary_color && typeof b.primary_color == "string" && i().style.setProperty("--widget-primary", b.primary_color));
    });
  }
  function q(b) {
    if (b.type === "connection_established") {
      const j = b.data.initial_message;
      j && !v && (S.addMessage(j, "assistant"), v = !0, l.log("ChatWidget", "Initial message added"));
      return;
    }
    o.handleMessage(b);
  }
  async function oe(b) {
    const j = c.getCurrent();
    l.log("ChatWidget", "handleSendMessage called with content", {
      correlationId: j,
      content: b,
      length: (b == null ? void 0 : b.length) || 0,
      trimmed: (b == null ? void 0 : b.trim()) || "",
      type: typeof b
    });
    const L = S.addMessage(b, "user");
    if (o.resetForNewMessage(), l.log("ChatWidget", "Message added to store", {
      correlationId: j,
      messageId: L.id,
      content: L.content,
      length: L.content.length
    }), u || (l.log("ChatWidget", "Widget not initialized, initializing...", { correlationId: j }), await y()), l.log("ChatWidget", "Connection state", {
      correlationId: j,
      connectionState: m(f),
      isConnected: m(f) === Li.CONNECTED,
      routingTo: m(f) === Li.CONNECTED ? "WebSocket" : "HTTP API"
    }), m(f) === Li.CONNECTED) {
      l.log("ChatWidget", "Sending via WebSocket", { correlationId: j, content: b });
      try {
        a.send(b), S.updateMessageStatus(L.id, "sent"), l.log("ChatWidget", "User message marked as sent", { messageId: L.id });
      } catch (D) {
        l.error("ChatWidget", "WebSocket send error", D), S.updateMessageStatus(L.id, "failed"), S.setError("Failed to send message. Please try again.");
        return;
      }
    } else
      try {
        l.log("ChatWidget", "Sending via HTTP API", { correlationId: j, content: b }), o.setTypingWithTimeout();
        const D = await n.sendMessage(b);
        l.log("ChatWidget", "HTTP API response received", {
          correlationId: j,
          response: D.response,
          sessionId: D.session_id
        }), S.addMessage(D.response, "assistant"), S.setTyping(!1), X.isOpen || X.markUnread();
      } catch (D) {
        l.error("ChatWidget", "HTTP API error", D), p = "Failed to send message. Please try again.", S.setError(p), S.updateMessageStatus(L.id, "failed"), S.setTyping(!1);
      }
  }
  async function K() {
    l.log("ChatWidget", "Toggle clicked, current state", m(P)), X.toggle(), await new Promise((b) => setTimeout(b, 0)), l.log("ChatWidget", "New state", X.isOpen), X.isOpen && !u && s && await y();
  }
  function Ce() {
    S.clearMessages(), S.setError(null), p = null;
  }
  function Ee() {
    l.log("ChatWidget", "Manual retry connection requested"), I(g, !1), p = null, S.setError(null), a == null || a.retryConnection();
  }
  const P = /* @__PURE__ */ Ke(() => X.isOpen), te = /* @__PURE__ */ Ke(() => X.isLoading), Cs = /* @__PURE__ */ Ke(() => (s == null ? void 0 : s.position) || "bottom-right");
  var ia = {
    get hostElement() {
      return i();
    },
    set hostElement(b) {
      i(b), lt();
    }
  }, Zi = Vl(), dr = Y(Zi);
  {
    var sa = (b) => {
      jn(b, { onclick: K });
    };
    he(dr, (b) => {
      m(P) || b(sa);
    });
  }
  var ra = se(dr, 2);
  {
    var na = (b) => {
      var j = Wl(), L = ts(j), D = Y(L);
      qn(D, { onclose: () => X.close() });
      var ur = se(D, 2);
      Yn(ur, {});
      var fr = se(ur, 2);
      {
        let Fe = /* @__PURE__ */ Ke(() => S.error !== null || m(te));
        Gn(fr, {
          onsend: oe,
          get disabled() {
            return m(Fe);
          }
        });
      }
      var aa = se(fr, 2);
      {
        var oa = (Fe) => {
          var ft = Ul(), da = Y(ft);
          {
            var ua = (Nt) => {
              var Ii = Dl(), Es = ts(Ii);
              Es.__click = Ee, ns(2), N(Nt, Ii);
            }, fa = (Nt) => {
              var Ii = Pl(), Es = ts(Ii);
              Es.__click = Ce, ns(2), N(Nt, Ii);
            };
            he(da, (Nt) => {
              m(g) ? Nt(ua) : Nt(fa, !1);
            });
          }
          B(ft), N(Fe, ft);
        };
        he(aa, (Fe) => {
          S.error && Fe(oa);
        });
      }
      B(L);
      var la = se(L, 2);
      {
        var ca = (Fe) => {
          var ft = Hl();
          ft.__click = () => X.close(), Cr(3, ft, () => Zo, () => ({ duration: 200 })), N(Fe, ft);
        };
        he(la, (Fe) => {
          m(P) && Fe(ca);
        });
      }
      Cr(3, L, () => Ko, () => ({ y: 20, duration: 300 })), N(b, j);
    };
    he(ra, (b) => {
      m(P) && b(na);
    });
  }
  return B(Zi), kt(() => bi(Zi, "data-position", m(Cs))), N(t, Zi), ut(ia);
}
xs(["click"]);
Ot(ta, { hostElement: {} }, [], [], !0);
const cr = {
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
  primary: "#1e5ba8",
  primaryHover: "#0f2d5a",
  primaryLight: "#3b82f6",
  primaryDark: "#0f2d5a",
  background: "#faf8f5",
  surface: "#ffffff",
  surfaceHover: "#f8fafc",
  glass: "rgba(250, 248, 245, 0.85)",
  glassDark: "rgba(255, 255, 255, 0.95)",
  text: "#0f2d5a",
  textSecondary: "#64748b",
  textMuted: "#94a3b8",
  textInverse: "#ffffff"
};
function ql(t = cr) {
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
  
  /* Gradient System */
  --widget-gradient: linear-gradient(135deg, ${t.primary} 0%, ${t.primaryLight} 100%);
  --widget-gradient-hover: linear-gradient(135deg, ${t.primaryHover} 0%, ${t.primary} 100%);
  --widget-gradient-subtle: linear-gradient(135deg, ${t.primary}1a 0%, ${t.primaryLight}0d 100%);
  
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
  
  /* Borders - Modern subtle borders */
  --widget-border: #e2e8f0;
  --widget-border-light: #f1f5f9;
  --widget-border-subtle: #f8fafc;
  --widget-border-focus: var(--widget-primary);
  
  /* Shadows - Modern subtle shadows (reduced for flat design) */
  --widget-shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.03);
  --widget-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.08);
  --widget-shadow-md: 0 2px 4px -1px rgb(0 0 0 / 0.08);
  --widget-shadow-lg: 0 4px 8px -2px rgb(0 0 0 / 0.08);
  --widget-shadow-xl: 0 8px 16px -4px rgb(0 0 0 / 0.08);
  --widget-shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  --widget-shadow-inner: inset 0 1px 2px 0 rgb(0 0 0 / 0.03);
  --widget-shadow-focus: 0 0 0 3px rgba(${((e = t.primary.replace("#", "").match(/.{2}/g)) == null ? void 0 : e.map((i) => parseInt(i, 16)).join(", ")) || "30, 91, 168"}, 0.12);
  --widget-shadow-button: 0 1px 2px 0 rgb(0 0 0 / 0.06);
  --widget-shadow-card: 0 1px 3px 0 rgb(0 0 0 / 0.04);
  
  /* Spacing */
  --widget-space-xs: 0.25rem;
  --widget-space-sm: 0.5rem;
  --widget-space: 0.75rem;
  --widget-space-md: 1rem;
  --widget-space-lg: 1.5rem;
  --widget-space-xl: 2rem;
  --widget-space-2xl: 3rem;
  --widget-space-3xl: 4rem;
  
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
  
  /* Blur Effects */
  --widget-blur: 8px;
  --widget-blur-sm: 4px;
  --widget-blur-lg: 12px;
  --widget-blur-xl: 16px;
  
  /* Transitions */
  --widget-transition: 0.2s ease;
  --widget-transition-slow: 0.3s ease;
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
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.widget-premium-gradient {
  background: var(--widget-gradient);
}

.widget-premium-shadow {
  box-shadow: var(--widget-shadow-lg);
}

.widget-hover-lift {
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.widget-hover-lift:hover {
  transform: translateY(-2px);
  box-shadow: var(--widget-shadow-xl);
}

.widget-focus-ring {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.widget-focus-ring:focus {
  outline: 2px solid var(--widget-primary);
  outline-offset: 2px;
}

.widget-text-gradient {
  background: var(--widget-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
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
}`;
}
function Fl(t = cr) {
  return ql(t);
}
const Bl = {
  brand: "generic",
  primary: "#6b46c1",
  primaryHover: "#5a3aa8",
  primaryLight: "#8b5cf6",
  primaryDark: "#4c1d95",
  background: "#ffffff",
  surface: "#fafafa",
  surfaceHover: "#f5f5f5",
  glass: "rgba(255, 255, 255, 0.98)",
  glassDark: "rgba(250, 250, 250, 0.95)",
  text: "#0f172a",
  textSecondary: "#475569",
  textMuted: "#64748b",
  textInverse: "#ffffff"
}, Yl = {
  brand: "generic",
  primary: "#2563eb",
  primaryHover: "#1d4ed8",
  primaryLight: "#60a5fa",
  primaryDark: "#1e40af",
  background: "#ffffff",
  surface: "#f8fafc",
  surfaceHover: "#f1f5f9",
  glass: "rgba(255, 255, 255, 0.95)",
  glassDark: "rgba(248, 250, 252, 0.95)",
  text: "#0f172a",
  textSecondary: "#475569",
  textMuted: "#64748b",
  textInverse: "#ffffff"
}, Or = {
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
}, Gl = {
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
}, Zl = {
  brand: "generic",
  primary: "#8b5cf6",
  primaryHover: "#7c3aed",
  primaryLight: "#a78bfa",
  primaryDark: "#6d28d9",
  background: "#0f172a",
  surface: "#1e293b",
  surfaceHover: "#334155",
  glass: "rgba(15, 23, 42, 0.95)",
  glassDark: "rgba(30, 41, 59, 0.95)",
  text: "#f8fafc",
  textSecondary: "#cbd5e1",
  textMuted: "#94a3b8",
  textInverse: "#0f172a"
}, Kl = {
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
}, Jl = {
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
function Xl(t) {
  return {
    "bot-brewers": Gs,
    modern: Bl,
    corporate: Yl,
    friendly: Or,
    playful: Or,
    // Alias
    minimal: Gl,
    dark: Zl,
    elegant: Kl,
    bold: Jl,
    generic: cr,
    default: Gs
  }[t.toLowerCase()] || null;
}
class Nr extends HTMLElement {
  constructor() {
    super(), this._app = null, this._currentTheme = "bot-brewers", this._shadowRoot = this.attachShadow({ mode: "open" });
  }
  // Default to Bot Brewers theme
  // Define which attributes we should observe for changes
  static get observedAttributes() {
    return ["theme", "data-theme", "accent-color", "position", "title", "client-id"];
  }
  async connectedCallback() {
    var r, n;
    const e = this.getAttribute("client-id"), i = window, s = ((r = i.AIChat) == null ? void 0 : r.clientId) || ((n = i.ChatWidget) == null ? void 0 : n.clientId);
    if (!e && !s) {
      O.error("ChatWidget", 'Configuration missing. Please set client-id attribute or window.AIChat = { clientId: "your_client_id" }');
      return;
    }
    this.mountApp();
  }
  disconnectedCallback() {
    this._app && (js(this._app), this._app = null);
  }
  attributeChangedCallback(e, i, s) {
    i !== s && ((e === "theme" || e === "data-theme") && s && (this._currentTheme = s, this.updateStyles()), e === "accent-color" && s && this.updateAccentColor(s), e === "client-id" && s && this._app && (O.log("ChatWidget", `Client ID changed from ${i} to ${s}, remounting widget`), js(this._app), this._app = null, this.mountApp()));
  }
  mountApp() {
    const e = this.getAttribute("theme") || this.getAttribute("data-theme") || "bot-brewers";
    this._currentTheme = e;
    const i = document.createElement("div");
    i.className = "widget-root";
    const s = document.createElement("style");
    s.textContent = this.getStyles(), this._shadowRoot.innerHTML = "", this._shadowRoot.appendChild(s), this._shadowRoot.appendChild(i), this._app = nr(ta, {
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
    const i = Xl(e) || Gs;
    return Fl(i);
  }
  updateStyles() {
    const e = this._shadowRoot.querySelector("style");
    e && (e.textContent = this.getStyles());
  }
  updateAccentColor(e) {
    const i = this._shadowRoot.querySelector(".widget-root");
    i && Promise.resolve().then(() => el).then(({ adjustColor: s }) => {
      i.style.setProperty("--widget-primary", e), i.style.setProperty("--widget-primary-hover", s(e, -20)), i.style.setProperty("--widget-primary-light", s(e, 20)), i.style.setProperty("--widget-primary-dark", s(e, -30));
    });
  }
}
customElements.get("assistant-widget") ? customElements.get("chat-widget") || customElements.define("chat-widget", Nr) : customElements.define("assistant-widget", Nr);
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", zr) : zr();
function zr() {
  if (document.querySelector("assistant-widget, chat-widget"))
    return;
  const t = window, e = t.AIChat || t.ChatWidget;
  if (e != null && e.clientId) {
    if (e.autoInit === !1) {
      O.log("ChatWidget", "Auto-initialization disabled");
      return;
    }
    const i = document.createElement("assistant-widget");
    document.body.appendChild(i), O.log("ChatWidget", "Auto-initialized with client ID", e.clientId);
  }
}
export {
  Nr as ChatWidgetElement
};
