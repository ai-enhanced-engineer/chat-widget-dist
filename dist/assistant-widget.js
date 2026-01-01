var ya = Object.defineProperty;
var vi = (t) => {
  throw TypeError(t);
};
var Aa = (t, e, s) => e in t ? ya(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s;
var z = (t, e, s) => Aa(t, typeof e != "symbol" ? e + "" : e, s), Tr = (t, e, s) => e.has(t) || vi("Cannot " + s);
var c = (t, e, s) => (Tr(t, e, "read from private field"), s ? s.call(t) : e.get(t)), A = (t, e, s) => e.has(t) ? vi("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, s), b = (t, e, s, r) => (Tr(t, e, "write to private field"), r ? r.call(t, s) : e.set(t, s), s), N = (t, e, s) => (Tr(t, e, "access private method"), s);
var ji = Array.isArray, xa = Array.prototype.indexOf, mr = Array.from, ar = Object.keys, or = Object.defineProperty, Ht = Object.getOwnPropertyDescriptor, Fi = Object.getOwnPropertyDescriptors, Sa = Object.prototype, Ea = Array.prototype, Zr = Object.getPrototypeOf, mi = Object.isExtensible;
function Ia(t) {
  return typeof t == "function";
}
const ks = () => {
};
function Ca(t) {
  return t();
}
function Rr(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function Hi() {
  var t, e, s = new Promise((r, i) => {
    t = r, e = i;
  });
  return { promise: s, resolve: t, reject: e };
}
const $ = 2, Xr = 4, wr = 8, _a = 1 << 24, Ve = 16, Xe = 32, dt = 64, br = 128, Le = 512, X = 1024, pe = 2048, Be = 4096, he = 8192, Je = 16384, Ys = 32768, It = 65536, wi = 1 << 17, Bi = 1 << 18, Ot = 1 << 19, qi = 1 << 20, it = 1 << 25, Ct = 32768, Pr = 1 << 21, ei = 1 << 22, nt = 1 << 23, Bt = Symbol("$state"), ka = Symbol("legacy props"), Ta = Symbol(""), zt = new class extends Error {
  constructor() {
    super(...arguments);
    z(this, "name", "StaleReactionError");
    z(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}(), ti = 3, Ss = 8;
function Vi(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Ma() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Oa(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function La() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ra(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Pa() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Na() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Da() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ua() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function za() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Wa() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const ja = 1, Fa = 2, Ha = 16, Ba = 2, qa = 4, Va = 8, Ga = 4, Ya = 1, Qa = 2, Gi = "[", yr = "[!", si = "]", ms = {}, Z = Symbol(), Ka = "http://www.w3.org/1999/xhtml";
function Ar(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function $a() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let L = !1;
function $e(t) {
  L = t;
}
let C;
function ve(t) {
  if (t === null)
    throw Ar(), ms;
  return C = t;
}
function xr() {
  return ve(/* @__PURE__ */ Ge(C));
}
function G(t) {
  if (L) {
    if (/* @__PURE__ */ Ge(C) !== null)
      throw Ar(), ms;
    C = t;
  }
}
function lr(t = 1) {
  if (L) {
    for (var e = t, s = C; e--; )
      s = /** @type {TemplateNode} */
      /* @__PURE__ */ Ge(s);
    C = s;
  }
}
function dr(t = !0) {
  for (var e = 0, s = C; ; ) {
    if (s.nodeType === Ss) {
      var r = (
        /** @type {Comment} */
        s.data
      );
      if (r === si) {
        if (e === 0) return s;
        e -= 1;
      } else (r === Gi || r === yr) && (e += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ge(s)
    );
    t && s.remove(), s = i;
  }
}
function Yi(t) {
  if (!t || t.nodeType !== Ss)
    throw Ar(), ms;
  return (
    /** @type {Comment} */
    t.data
  );
}
function Qi(t) {
  return t === this.v;
}
function Ja(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Ki(t) {
  return !Ja(t, this.v);
}
let Es = !1;
function Za() {
  Es = !0;
}
let U = null;
function ws(t) {
  U = t;
}
function ct(t, e = !1, s) {
  U = {
    p: U,
    i: !1,
    c: null,
    e: null,
    s: t,
    x: null,
    l: Es && !e ? { s: null, u: null, $: [] } : null
  };
}
function ut(t) {
  var e = (
    /** @type {ComponentContext} */
    U
  ), s = e.e;
  if (s !== null) {
    e.e = null;
    for (var r of s)
      wn(r);
  }
  return t !== void 0 && (e.x = t), e.i = !0, U = e.p, t ?? /** @type {T} */
  {};
}
function Qs() {
  return !Es || U !== null && U.l === null;
}
let pt = [];
function $i() {
  var t = pt;
  pt = [], Rr(t);
}
function Is(t) {
  if (pt.length === 0 && !Ps) {
    var e = pt;
    queueMicrotask(() => {
      e === pt && $i();
    });
  }
  pt.push(t);
}
function Xa() {
  for (; pt.length > 0; )
    $i();
}
function Ji(t) {
  var e = M;
  if (e === null)
    return k.f |= nt, t;
  if (e.f & Ys)
    bs(t, e);
  else {
    if (!(e.f & br))
      throw t;
    e.b.error(t);
  }
}
function bs(t, e) {
  for (; e !== null; ) {
    if (e.f & br)
      try {
        e.b.error(t);
        return;
      } catch (s) {
        t = s;
      }
    e = e.parent;
  }
  throw t;
}
const Xs = /* @__PURE__ */ new Set();
let E = null, tr = null, j = null, xe = [], Sr = null, Nr = !1, Ps = !1;
var Vt, Gt, vt, mt, Bs, Yt, Qt, K, Dr, Ts, Ur, Zi, Xi;
const hr = class hr {
  constructor() {
    A(this, K);
    z(this, "committed", !1);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    z(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    z(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    A(this, Vt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    A(this, Gt, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    A(this, vt, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    A(this, mt, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    A(this, Bs, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    A(this, Yt, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    A(this, Qt, /* @__PURE__ */ new Set());
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    z(this, "skipped_effects", /* @__PURE__ */ new Set());
    z(this, "is_fork", !1);
  }
  is_deferred() {
    return this.is_fork || c(this, mt) > 0;
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var r;
    xe = [], tr = null, this.apply();
    var s = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const i of e)
      N(this, K, Dr).call(this, i, s);
    this.is_fork || N(this, K, Zi).call(this), this.is_deferred() ? (N(this, K, Ts).call(this, s.effects), N(this, K, Ts).call(this, s.render_effects)) : (tr = this, E = null, bi(s.render_effects), bi(s.effects), tr = null, (r = c(this, Bs)) == null || r.resolve()), j = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, s) {
    this.previous.has(e) || this.previous.set(e, s), e.f & nt || (this.current.set(e, e.v), j == null || j.set(e, e.v));
  }
  activate() {
    E = this, this.apply();
  }
  deactivate() {
    E === this && (E = null, j = null);
  }
  flush() {
    if (this.activate(), xe.length > 0) {
      if (en(), E !== null && E !== this)
        return;
    } else c(this, vt) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const e of c(this, Gt)) e(this);
    c(this, Gt).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(e) {
    b(this, vt, c(this, vt) + 1), e && b(this, mt, c(this, mt) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(e) {
    b(this, vt, c(this, vt) - 1), e && b(this, mt, c(this, mt) - 1), this.revive();
  }
  revive() {
    for (const e of c(this, Yt))
      c(this, Qt).delete(e), ee(e, pe), _t(e);
    for (const e of c(this, Qt))
      ee(e, Be), _t(e);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(e) {
    c(this, Vt).add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(e) {
    c(this, Gt).add(e);
  }
  settled() {
    return (c(this, Bs) ?? b(this, Bs, Hi())).promise;
  }
  static ensure() {
    if (E === null) {
      const e = E = new hr();
      Xs.add(E), Ps || hr.enqueue(() => {
        E === e && e.flush();
      });
    }
    return E;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    Is(e);
  }
  apply() {
  }
};
Vt = new WeakMap(), Gt = new WeakMap(), vt = new WeakMap(), mt = new WeakMap(), Bs = new WeakMap(), Yt = new WeakMap(), Qt = new WeakMap(), K = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {EffectTarget} target
 */
Dr = function(e, s) {
  var u;
  e.f ^= X;
  for (var r = e.first; r !== null; ) {
    var i = r.f, n = (i & (Xe | dt)) !== 0, a = n && (i & X) !== 0, o = a || (i & he) !== 0 || this.skipped_effects.has(r);
    if (r.f & br && ((u = r.b) != null && u.is_pending()) && (s = {
      parent: s,
      effect: r,
      effects: [],
      render_effects: []
    }), !o && r.fn !== null) {
      n ? r.f ^= X : i & Xr ? s.effects.push(r) : $s(r) && (r.f & Ve && c(this, Yt).add(r), js(r));
      var l = r.first;
      if (l !== null) {
        r = l;
        continue;
      }
    }
    var d = r.parent;
    for (r = r.next; r === null && d !== null; )
      d === s.effect && (N(this, K, Ts).call(this, s.effects), N(this, K, Ts).call(this, s.render_effects), s = /** @type {EffectTarget} */
      s.parent), r = d.next, d = d.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
Ts = function(e) {
  for (const s of e)
    s.f & pe ? c(this, Yt).add(s) : s.f & Be && c(this, Qt).add(s), N(this, K, Ur).call(this, s.deps), ee(s, X);
}, /**
 * @param {Value[] | null} deps
 */
Ur = function(e) {
  if (e !== null)
    for (const s of e)
      !(s.f & $) || !(s.f & Ct) || (s.f ^= Ct, N(this, K, Ur).call(
        this,
        /** @type {Derived} */
        s.deps
      ));
}, Zi = function() {
  if (c(this, mt) === 0) {
    for (const e of c(this, Vt)) e();
    c(this, Vt).clear();
  }
  c(this, vt) === 0 && N(this, K, Xi).call(this);
}, Xi = function() {
  var n;
  if (Xs.size > 1) {
    this.previous.clear();
    var e = j, s = !0, r = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const a of Xs) {
      if (a === this) {
        s = !1;
        continue;
      }
      const o = [];
      for (const [d, u] of this.current) {
        if (a.current.has(d))
          if (s && u !== a.current.get(d))
            a.current.set(d, u);
          else
            continue;
        o.push(d);
      }
      if (o.length === 0)
        continue;
      const l = [...a.current.keys()].filter((d) => !this.current.has(d));
      if (l.length > 0) {
        var i = xe;
        xe = [];
        const d = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
        for (const g of o)
          tn(g, l, d, u);
        if (xe.length > 0) {
          E = a, a.apply();
          for (const g of xe)
            N(n = a, K, Dr).call(n, g, r);
          a.deactivate();
        }
        xe = i;
      }
    }
    E = null, j = e;
  }
  this.committed = !0, Xs.delete(this);
};
let We = hr;
function lt(t) {
  var e = Ps;
  Ps = !0;
  try {
    for (var s; ; ) {
      if (Xa(), xe.length === 0 && (E == null || E.flush(), xe.length === 0))
        return Sr = null, /** @type {T} */
        s;
      en();
    }
  } finally {
    Ps = e;
  }
}
function en() {
  var t = St;
  Nr = !0;
  var e = null;
  try {
    var s = 0;
    for (ur(!0); xe.length > 0; ) {
      var r = We.ensure();
      if (s++ > 1e3) {
        var i, n;
        eo();
      }
      r.process(xe), at.clear();
    }
  } finally {
    Nr = !1, ur(t), Sr = null;
  }
}
function eo() {
  try {
    Pa();
  } catch (t) {
    bs(t, Sr);
  }
}
let ke = null;
function bi(t) {
  var e = t.length;
  if (e !== 0) {
    for (var s = 0; s < e; ) {
      var r = t[s++];
      if (!(r.f & (Je | he)) && $s(r) && (ke = /* @__PURE__ */ new Set(), js(r), r.deps === null && r.first === null && r.nodes === null && (r.teardown === null && r.ac === null ? An(r) : r.fn = null), (ke == null ? void 0 : ke.size) > 0)) {
        at.clear();
        for (const i of ke) {
          if (i.f & (Je | he)) continue;
          const n = [i];
          let a = i.parent;
          for (; a !== null; )
            ke.has(a) && (ke.delete(a), n.push(a)), a = a.parent;
          for (let o = n.length - 1; o >= 0; o--) {
            const l = n[o];
            l.f & (Je | he) || js(l);
          }
        }
        ke.clear();
      }
    }
    ke = null;
  }
}
function tn(t, e, s, r) {
  if (!s.has(t) && (s.add(t), t.reactions !== null))
    for (const i of t.reactions) {
      const n = i.f;
      n & $ ? tn(
        /** @type {Derived} */
        i,
        e,
        s,
        r
      ) : n & (ei | Ve) && !(n & pe) && sn(i, e, r) && (ee(i, pe), _t(
        /** @type {Effect} */
        i
      ));
    }
}
function sn(t, e, s) {
  const r = s.get(t);
  if (r !== void 0) return r;
  if (t.deps !== null)
    for (const i of t.deps) {
      if (e.includes(i))
        return !0;
      if (i.f & $ && sn(
        /** @type {Derived} */
        i,
        e,
        s
      ))
        return s.set(
          /** @type {Derived} */
          i,
          !0
        ), !0;
    }
  return s.set(t, !1), !1;
}
function _t(t) {
  for (var e = Sr = t; e.parent !== null; ) {
    e = e.parent;
    var s = e.f;
    if (Nr && e === M && s & Ve && !(s & Bi))
      return;
    if (s & (dt | Xe)) {
      if (!(s & X)) return;
      e.f ^= X;
    }
  }
  xe.push(e);
}
function to(t) {
  let e = 0, s = kt(0), r;
  return () => {
    zs() && (m(s), Er(() => (e === 0 && (r = Rt(() => t(() => Ns(s)))), e += 1, () => {
      Is(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, Ns(s));
      });
    })));
  };
}
var so = It | Ot | br;
function ro(t, e, s) {
  new io(t, e, s);
}
var be, fe, qs, Ne, wt, De, ye, le, Ue, Ye, tt, bt, st, yt, rt, pr, F, rn, nn, zr, sr, rr, Wr;
class io {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, s, r) {
    A(this, F);
    /** @type {Boundary | null} */
    z(this, "parent");
    A(this, be, !1);
    /** @type {TemplateNode} */
    A(this, fe);
    /** @type {TemplateNode | null} */
    A(this, qs, L ? C : null);
    /** @type {BoundaryProps} */
    A(this, Ne);
    /** @type {((anchor: Node) => void)} */
    A(this, wt);
    /** @type {Effect} */
    A(this, De);
    /** @type {Effect | null} */
    A(this, ye, null);
    /** @type {Effect | null} */
    A(this, le, null);
    /** @type {Effect | null} */
    A(this, Ue, null);
    /** @type {DocumentFragment | null} */
    A(this, Ye, null);
    /** @type {TemplateNode | null} */
    A(this, tt, null);
    A(this, bt, 0);
    A(this, st, 0);
    A(this, yt, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    A(this, rt, null);
    A(this, pr, to(() => (b(this, rt, kt(c(this, bt))), () => {
      b(this, rt, null);
    })));
    b(this, fe, e), b(this, Ne, s), b(this, wt, r), this.parent = /** @type {Effect} */
    M.b, b(this, be, !!c(this, Ne).pending), b(this, De, ai(() => {
      if (M.b = this, L) {
        const n = c(this, qs);
        xr(), /** @type {Comment} */
        n.nodeType === Ss && /** @type {Comment} */
        n.data === yr ? N(this, F, nn).call(this) : N(this, F, rn).call(this);
      } else {
        var i = N(this, F, zr).call(this);
        try {
          b(this, ye, Se(() => r(i)));
        } catch (n) {
          this.error(n);
        }
        c(this, st) > 0 ? N(this, F, rr).call(this) : b(this, be, !1);
      }
      return () => {
        var n;
        (n = c(this, tt)) == null || n.remove();
      };
    }, so)), L && b(this, fe, C);
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return c(this, be) || !!this.parent && this.parent.is_pending();
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
    N(this, F, Wr).call(this, e), b(this, bt, c(this, bt) + e), c(this, rt) && ys(c(this, rt), c(this, bt));
  }
  get_effect_pending() {
    return c(this, pr).call(this), m(
      /** @type {Source<number>} */
      c(this, rt)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var s = c(this, Ne).onerror;
    let r = c(this, Ne).failed;
    if (c(this, yt) || !s && !r)
      throw e;
    c(this, ye) && (ne(c(this, ye)), b(this, ye, null)), c(this, le) && (ne(c(this, le)), b(this, le, null)), c(this, Ue) && (ne(c(this, Ue)), b(this, Ue, null)), L && (ve(
      /** @type {TemplateNode} */
      c(this, qs)
    ), lr(), ve(dr()));
    var i = !1, n = !1;
    const a = () => {
      if (i) {
        $a();
        return;
      }
      i = !0, n && Wa(), We.ensure(), b(this, bt, 0), c(this, Ue) !== null && xt(c(this, Ue), () => {
        b(this, Ue, null);
      }), b(this, be, this.has_pending_snippet()), b(this, ye, N(this, F, sr).call(this, () => (b(this, yt, !1), Se(() => c(this, wt).call(this, c(this, fe)))))), c(this, st) > 0 ? N(this, F, rr).call(this) : b(this, be, !1);
    };
    var o = k;
    try {
      de(null), n = !0, s == null || s(e, a), n = !1;
    } catch (l) {
      bs(l, c(this, De) && c(this, De).parent);
    } finally {
      de(o);
    }
    r && Is(() => {
      b(this, Ue, N(this, F, sr).call(this, () => {
        We.ensure(), b(this, yt, !0);
        try {
          return Se(() => {
            r(
              c(this, fe),
              () => e,
              () => a
            );
          });
        } catch (l) {
          return bs(
            l,
            /** @type {Effect} */
            c(this, De).parent
          ), null;
        } finally {
          b(this, yt, !1);
        }
      }));
    });
  }
}
be = new WeakMap(), fe = new WeakMap(), qs = new WeakMap(), Ne = new WeakMap(), wt = new WeakMap(), De = new WeakMap(), ye = new WeakMap(), le = new WeakMap(), Ue = new WeakMap(), Ye = new WeakMap(), tt = new WeakMap(), bt = new WeakMap(), st = new WeakMap(), yt = new WeakMap(), rt = new WeakMap(), pr = new WeakMap(), F = new WeakSet(), rn = function() {
  try {
    b(this, ye, Se(() => c(this, wt).call(this, c(this, fe))));
  } catch (e) {
    this.error(e);
  }
  b(this, be, !1);
}, nn = function() {
  const e = c(this, Ne).pending;
  e && (b(this, le, Se(() => e(c(this, fe)))), We.enqueue(() => {
    var s = N(this, F, zr).call(this);
    b(this, ye, N(this, F, sr).call(this, () => (We.ensure(), Se(() => c(this, wt).call(this, s))))), c(this, st) > 0 ? N(this, F, rr).call(this) : (xt(
      /** @type {Effect} */
      c(this, le),
      () => {
        b(this, le, null);
      }
    ), b(this, be, !1));
  }));
}, zr = function() {
  var e = c(this, fe);
  return c(this, be) && (b(this, tt, Re()), c(this, fe).before(c(this, tt)), e = c(this, tt)), e;
}, /**
 * @param {() => Effect | null} fn
 */
sr = function(e) {
  var s = M, r = k, i = U;
  qe(c(this, De)), de(c(this, De)), ws(c(this, De).ctx);
  try {
    return e();
  } catch (n) {
    return Ji(n), null;
  } finally {
    qe(s), de(r), ws(i);
  }
}, rr = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    c(this, Ne).pending
  );
  c(this, ye) !== null && (b(this, Ye, document.createDocumentFragment()), c(this, Ye).append(
    /** @type {TemplateNode} */
    c(this, tt)
  ), En(c(this, ye), c(this, Ye))), c(this, le) === null && b(this, le, Se(() => e(c(this, fe))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
Wr = function(e) {
  var s;
  if (!this.has_pending_snippet()) {
    this.parent && N(s = this.parent, F, Wr).call(s, e);
    return;
  }
  b(this, st, c(this, st) + e), c(this, st) === 0 && (b(this, be, !1), c(this, le) && xt(c(this, le), () => {
    b(this, le, null);
  }), c(this, Ye) && (c(this, fe).before(c(this, Ye)), b(this, Ye, null)));
};
function no(t, e, s, r) {
  const i = Qs() ? Ks : an;
  if (s.length === 0 && t.length === 0) {
    r(e.map(i));
    return;
  }
  var n = E, a = (
    /** @type {Effect} */
    M
  ), o = ao();
  function l() {
    Promise.all(s.map((d) => /* @__PURE__ */ oo(d))).then((d) => {
      o();
      try {
        r([...e.map(i), ...d]);
      } catch (u) {
        a.f & Je || bs(u, a);
      }
      n == null || n.deactivate(), cr();
    }).catch((d) => {
      bs(d, a);
    });
  }
  t.length > 0 ? Promise.all(t).then(() => {
    o();
    try {
      return l();
    } finally {
      n == null || n.deactivate(), cr();
    }
  }) : l();
}
function ao() {
  var t = M, e = k, s = U, r = E;
  return function(n = !0) {
    qe(t), de(e), ws(s), n && (r == null || r.activate());
  };
}
function cr() {
  qe(null), de(null), ws(null);
}
// @__NO_SIDE_EFFECTS__
function Ks(t) {
  var e = $ | pe, s = k !== null && k.f & $ ? (
    /** @type {Derived} */
    k
  ) : null;
  return M !== null && (M.f |= Ot), {
    ctx: U,
    deps: null,
    effects: null,
    equals: Qi,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Z
    ),
    wv: 0,
    parent: s ?? M,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function oo(t, e) {
  let s = (
    /** @type {Effect | null} */
    M
  );
  s === null && Ma();
  var r = (
    /** @type {Boundary} */
    s.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), n = kt(
    /** @type {V} */
    Z
  ), a = !k, o = /* @__PURE__ */ new Map();
  return wo(() => {
    var h;
    var l = Hi();
    i = l.promise;
    try {
      Promise.resolve(t()).then(l.resolve, l.reject).then(() => {
        d === E && d.committed && d.deactivate(), cr();
      });
    } catch (p) {
      l.reject(p), cr();
    }
    var d = (
      /** @type {Batch} */
      E
    );
    if (a) {
      var u = !r.is_pending();
      r.update_pending_count(1), d.increment(u), (h = o.get(d)) == null || h.reject(zt), o.delete(d), o.set(d, l);
    }
    const g = (p, f = void 0) => {
      if (d.activate(), f)
        f !== zt && (n.f |= nt, ys(n, f));
      else {
        n.f & nt && (n.f ^= nt), ys(n, p);
        for (const [v, y] of o) {
          if (o.delete(v), v === d) break;
          y.reject(zt);
        }
      }
      a && (r.update_pending_count(-1), d.decrement(u));
    };
    l.promise.then(g, (p) => g(null, p || "unknown"));
  }), mn(() => {
    for (const l of o.values())
      l.reject(zt);
  }), new Promise((l) => {
    function d(u) {
      function g() {
        u === i ? l(n) : d(i);
      }
      u.then(g, g);
    }
    d(i);
  });
}
// @__NO_SIDE_EFFECTS__
function je(t) {
  const e = /* @__PURE__ */ Ks(t);
  return In(e), e;
}
// @__NO_SIDE_EFFECTS__
function an(t) {
  const e = /* @__PURE__ */ Ks(t);
  return e.equals = Ki, e;
}
function on(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var s = 0; s < e.length; s += 1)
      ne(
        /** @type {Effect} */
        e[s]
      );
  }
}
function lo(t) {
  for (var e = t.parent; e !== null; ) {
    if (!(e.f & $))
      return e.f & Je ? null : (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function ri(t) {
  var e, s = M;
  qe(lo(t));
  try {
    t.f &= ~Ct, on(t), e = Tn(t);
  } finally {
    qe(s);
  }
  return e;
}
function ln(t) {
  var e = ri(t);
  if (t.equals(e) || (E != null && E.is_fork || (t.v = e), t.wv = _n()), !Lt)
    if (j !== null)
      (zs() || E != null && E.is_fork) && j.set(t, e);
    else {
      var s = t.f & Le ? X : Be;
      ee(t, s);
    }
}
let jr = /* @__PURE__ */ new Set();
const at = /* @__PURE__ */ new Map();
let dn = !1;
function kt(t, e) {
  var s = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Qi,
    rv: 0,
    wv: 0
  };
  return s;
}
// @__NO_SIDE_EFFECTS__
function T(t, e) {
  const s = kt(t);
  return In(s), s;
}
// @__NO_SIDE_EFFECTS__
function cn(t, e = !1, s = !0) {
  var i;
  const r = kt(t);
  return e || (r.equals = Ki), Es && s && U !== null && U.l !== null && ((i = U.l).s ?? (i.s = [])).push(r), r;
}
function I(t, e, s = !1) {
  k !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Fe || k.f & wi) && Qs() && k.f & ($ | Ve | ei | wi) && !(ae != null && ae.includes(t)) && za();
  let r = s ? V(e) : e;
  return ys(t, r);
}
function ys(t, e) {
  if (!t.equals(e)) {
    var s = t.v;
    Lt ? at.set(t, e) : at.set(t, s), t.v = e;
    var r = We.ensure();
    r.capture(t, s), t.f & $ && (t.f & pe && ri(
      /** @type {Derived} */
      t
    ), ee(t, t.f & Le ? X : Be)), t.wv = _n(), un(t, pe), Qs() && M !== null && M.f & X && !(M.f & (Xe | dt)) && (we === null ? Ao([t]) : we.push(t)), !r.is_fork && jr.size > 0 && !dn && co();
  }
  return e;
}
function co() {
  dn = !1;
  var t = St;
  ur(!0);
  const e = Array.from(jr);
  try {
    for (const s of e)
      s.f & X && ee(s, Be), $s(s) && js(s);
  } finally {
    ur(t);
  }
  jr.clear();
}
function Ns(t) {
  I(t, t.v + 1);
}
function un(t, e) {
  var s = t.reactions;
  if (s !== null)
    for (var r = Qs(), i = s.length, n = 0; n < i; n++) {
      var a = s[n], o = a.f;
      if (!(!r && a === M)) {
        var l = (o & pe) === 0;
        if (l && ee(a, e), o & $) {
          var d = (
            /** @type {Derived} */
            a
          );
          j == null || j.delete(d), o & Ct || (o & Le && (a.f |= Ct), un(d, Be));
        } else l && (o & Ve && ke !== null && ke.add(
          /** @type {Effect} */
          a
        ), _t(
          /** @type {Effect} */
          a
        ));
      }
    }
}
function V(t) {
  if (typeof t != "object" || t === null || Bt in t)
    return t;
  const e = Zr(t);
  if (e !== Sa && e !== Ea)
    return t;
  var s = /* @__PURE__ */ new Map(), r = ji(t), i = /* @__PURE__ */ T(0), n = Et, a = (o) => {
    if (Et === n)
      return o();
    var l = k, d = Et;
    de(null), Si(n);
    var u = o();
    return de(l), Si(d), u;
  };
  return r && s.set("length", /* @__PURE__ */ T(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(o, l, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && Da();
        var u = s.get(l);
        return u === void 0 ? u = a(() => {
          var g = /* @__PURE__ */ T(d.value);
          return s.set(l, g), g;
        }) : I(u, d.value, !0), !0;
      },
      deleteProperty(o, l) {
        var d = s.get(l);
        if (d === void 0) {
          if (l in o) {
            const u = a(() => /* @__PURE__ */ T(Z));
            s.set(l, u), Ns(i);
          }
        } else
          I(d, Z), Ns(i);
        return !0;
      },
      get(o, l, d) {
        var p;
        if (l === Bt)
          return t;
        var u = s.get(l), g = l in o;
        if (u === void 0 && (!g || (p = Ht(o, l)) != null && p.writable) && (u = a(() => {
          var f = V(g ? o[l] : Z), v = /* @__PURE__ */ T(f);
          return v;
        }), s.set(l, u)), u !== void 0) {
          var h = m(u);
          return h === Z ? void 0 : h;
        }
        return Reflect.get(o, l, d);
      },
      getOwnPropertyDescriptor(o, l) {
        var d = Reflect.getOwnPropertyDescriptor(o, l);
        if (d && "value" in d) {
          var u = s.get(l);
          u && (d.value = m(u));
        } else if (d === void 0) {
          var g = s.get(l), h = g == null ? void 0 : g.v;
          if (g !== void 0 && h !== Z)
            return {
              enumerable: !0,
              configurable: !0,
              value: h,
              writable: !0
            };
        }
        return d;
      },
      has(o, l) {
        var h;
        if (l === Bt)
          return !0;
        var d = s.get(l), u = d !== void 0 && d.v !== Z || Reflect.has(o, l);
        if (d !== void 0 || M !== null && (!u || (h = Ht(o, l)) != null && h.writable)) {
          d === void 0 && (d = a(() => {
            var p = u ? V(o[l]) : Z, f = /* @__PURE__ */ T(p);
            return f;
          }), s.set(l, d));
          var g = m(d);
          if (g === Z)
            return !1;
        }
        return u;
      },
      set(o, l, d, u) {
        var B;
        var g = s.get(l), h = l in o;
        if (r && l === "length")
          for (var p = d; p < /** @type {Source<number>} */
          g.v; p += 1) {
            var f = s.get(p + "");
            f !== void 0 ? I(f, Z) : p in o && (f = a(() => /* @__PURE__ */ T(Z)), s.set(p + "", f));
          }
        if (g === void 0)
          (!h || (B = Ht(o, l)) != null && B.writable) && (g = a(() => /* @__PURE__ */ T(void 0)), I(g, V(d)), s.set(l, g));
        else {
          h = g.v !== Z;
          var v = a(() => V(d));
          I(g, v);
        }
        var y = Reflect.getOwnPropertyDescriptor(o, l);
        if (y != null && y.set && y.set.call(u, d), !h) {
          if (r && typeof l == "string") {
            var x = (
              /** @type {Source<number>} */
              s.get("length")
            ), O = Number(l);
            Number.isInteger(O) && O >= x.v && I(x, O + 1);
          }
          Ns(i);
        }
        return !0;
      },
      ownKeys(o) {
        m(i);
        var l = Reflect.ownKeys(o).filter((g) => {
          var h = s.get(g);
          return h === void 0 || h.v !== Z;
        });
        for (var [d, u] of s)
          u.v !== Z && !(d in o) && l.push(d);
        return l;
      },
      setPrototypeOf() {
        Ua();
      }
    }
  );
}
var yi, fn, gn, hn;
function Fr() {
  if (yi === void 0) {
    yi = window, fn = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, s = Text.prototype;
    gn = Ht(e, "firstChild").get, hn = Ht(e, "nextSibling").get, mi(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), mi(s) && (s.__t = void 0);
  }
}
function Re(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Ze(t) {
  return (
    /** @type {TemplateNode | null} */
    gn.call(t)
  );
}
// @__NO_SIDE_EFFECTS__
function Ge(t) {
  return (
    /** @type {TemplateNode | null} */
    hn.call(t)
  );
}
function Y(t, e) {
  if (!L)
    return /* @__PURE__ */ Ze(t);
  var s = /* @__PURE__ */ Ze(C);
  if (s === null)
    s = C.appendChild(Re());
  else if (e && s.nodeType !== ti) {
    var r = Re();
    return s == null || s.before(r), ve(r), r;
  }
  return ve(s), s;
}
function ir(t, e = !1) {
  if (!L) {
    var s = /* @__PURE__ */ Ze(t);
    return s instanceof Comment && s.data === "" ? /* @__PURE__ */ Ge(s) : s;
  }
  if (e && (C == null ? void 0 : C.nodeType) !== ti) {
    var r = Re();
    return C == null || C.before(r), ve(r), r;
  }
  return C;
}
function re(t, e = 1, s = !1) {
  let r = L ? C : t;
  for (var i; e--; )
    i = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Ge(r);
  if (!L)
    return r;
  if (s && (r == null ? void 0 : r.nodeType) !== ti) {
    var n = Re();
    return r === null ? i == null || i.after(n) : r.before(n), ve(n), n;
  }
  return ve(r), r;
}
function ii(t) {
  t.textContent = "";
}
function pn() {
  return !1;
}
function uo(t) {
  L && /* @__PURE__ */ Ze(t) !== null && ii(t);
}
let Ai = !1;
function fo() {
  Ai || (Ai = !0, document.addEventListener(
    "reset",
    (t) => {
      Promise.resolve().then(() => {
        var e;
        if (!t.defaultPrevented)
          for (
            const s of
            /**@type {HTMLFormElement} */
            t.target.elements
          )
            (e = s.__on_r) == null || e.call(s);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function Cs(t) {
  var e = k, s = M;
  de(null), qe(null);
  try {
    return t();
  } finally {
    de(e), qe(s);
  }
}
function go(t, e, s, r = s) {
  t.addEventListener(e, () => Cs(s));
  const i = t.__on_r;
  i ? t.__on_r = () => {
    i(), r(!0);
  } : t.__on_r = () => r(!0), fo();
}
function vn(t) {
  M === null && (k === null && Ra(), La()), Lt && Oa();
}
function ho(t, e) {
  var s = e.last;
  s === null ? e.last = e.first = t : (s.next = t, t.prev = s, e.last = t);
}
function Pe(t, e, s) {
  var r = M;
  r !== null && r.f & he && (t |= he);
  var i = {
    ctx: U,
    deps: null,
    nodes: null,
    f: t | pe | Le,
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
  if (s)
    try {
      js(i), i.f |= Ys;
    } catch (o) {
      throw ne(i), o;
    }
  else e !== null && _t(i);
  var n = i;
  if (s && n.deps === null && n.teardown === null && n.nodes === null && n.first === n.last && // either `null`, or a singular child
  !(n.f & Ot) && (n = n.first, t & Ve && t & It && n !== null && (n.f |= It)), n !== null && (n.parent = r, r !== null && ho(n, r), k !== null && k.f & $ && !(t & dt))) {
    var a = (
      /** @type {Derived} */
      k
    );
    (a.effects ?? (a.effects = [])).push(n);
  }
  return i;
}
function zs() {
  return k !== null && !Fe;
}
function mn(t) {
  const e = Pe(wr, null, !1);
  return ee(e, X), e.teardown = t, e;
}
function qt(t) {
  vn();
  var e = (
    /** @type {Effect} */
    M.f
  ), s = !k && (e & Xe) !== 0 && (e & Ys) === 0;
  if (s) {
    var r = (
      /** @type {ComponentContext} */
      U
    );
    (r.e ?? (r.e = [])).push(t);
  } else
    return wn(t);
}
function wn(t) {
  return Pe(Xr | qi, t, !1);
}
function po(t) {
  return vn(), Pe(wr | qi, t, !0);
}
function vo(t) {
  We.ensure();
  const e = Pe(dt | Ot, t, !0);
  return () => {
    ne(e);
  };
}
function mo(t) {
  We.ensure();
  const e = Pe(dt | Ot, t, !0);
  return (s = {}) => new Promise((r) => {
    s.outro ? xt(e, () => {
      ne(e), r(void 0);
    }) : (ne(e), r(void 0));
  });
}
function ni(t) {
  return Pe(Xr, t, !1);
}
function wo(t) {
  return Pe(ei | Ot, t, !0);
}
function Er(t, e = 0) {
  return Pe(wr | e, t, !0);
}
function Tt(t, e = [], s = [], r = []) {
  no(r, e, s, (i) => {
    Pe(wr, () => t(...i.map(m)), !0);
  });
}
function ai(t, e = 0) {
  var s = Pe(Ve | e, t, !0);
  return s;
}
function Se(t) {
  return Pe(Xe | Ot, t, !0);
}
function bn(t) {
  var e = t.teardown;
  if (e !== null) {
    const s = Lt, r = k;
    xi(!0), de(null);
    try {
      e.call(null);
    } finally {
      xi(s), de(r);
    }
  }
}
function yn(t, e = !1) {
  var s = t.first;
  for (t.first = t.last = null; s !== null; ) {
    const i = s.ac;
    i !== null && Cs(() => {
      i.abort(zt);
    });
    var r = s.next;
    s.f & dt ? s.parent = null : ne(s, e), s = r;
  }
}
function bo(t) {
  for (var e = t.first; e !== null; ) {
    var s = e.next;
    e.f & Xe || ne(e), e = s;
  }
}
function ne(t, e = !0) {
  var s = !1;
  (e || t.f & Bi) && t.nodes !== null && t.nodes.end !== null && (yo(
    t.nodes.start,
    /** @type {TemplateNode} */
    t.nodes.end
  ), s = !0), yn(t, e && !s), fr(t, 0), ee(t, Je);
  var r = t.nodes && t.nodes.t;
  if (r !== null)
    for (const n of r)
      n.stop();
  bn(t);
  var i = t.parent;
  i !== null && i.first !== null && An(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes = t.ac = null;
}
function yo(t, e) {
  for (; t !== null; ) {
    var s = t === e ? null : /* @__PURE__ */ Ge(t);
    t.remove(), t = s;
  }
}
function An(t) {
  var e = t.parent, s = t.prev, r = t.next;
  s !== null && (s.next = r), r !== null && (r.prev = s), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = s));
}
function xt(t, e, s = !0) {
  var r = [];
  xn(t, r, !0);
  var i = () => {
    s && ne(t), e && e();
  }, n = r.length;
  if (n > 0) {
    var a = () => --n || i();
    for (var o of r)
      o.out(a);
  } else
    i();
}
function xn(t, e, s) {
  if (!(t.f & he)) {
    t.f ^= he;
    var r = t.nodes && t.nodes.t;
    if (r !== null)
      for (const o of r)
        (o.is_global || s) && e.push(o);
    for (var i = t.first; i !== null; ) {
      var n = i.next, a = (i.f & It) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (i.f & Xe) !== 0 && (t.f & Ve) !== 0;
      xn(i, e, a ? s : !1), i = n;
    }
  }
}
function oi(t) {
  Sn(t, !0);
}
function Sn(t, e) {
  if (t.f & he) {
    t.f ^= he, t.f & X || (ee(t, pe), _t(t));
    for (var s = t.first; s !== null; ) {
      var r = s.next, i = (s.f & It) !== 0 || (s.f & Xe) !== 0;
      Sn(s, i ? e : !1), s = r;
    }
    var n = t.nodes && t.nodes.t;
    if (n !== null)
      for (const a of n)
        (a.is_global || e) && a.in();
  }
}
function En(t, e) {
  if (t.nodes)
    for (var s = t.nodes.start, r = t.nodes.end; s !== null; ) {
      var i = s === r ? null : /* @__PURE__ */ Ge(s);
      e.append(s), s = i;
    }
}
let St = !1;
function ur(t) {
  St = t;
}
let Lt = !1;
function xi(t) {
  Lt = t;
}
let k = null, Fe = !1;
function de(t) {
  k = t;
}
let M = null;
function qe(t) {
  M = t;
}
let ae = null;
function In(t) {
  k !== null && (ae === null ? ae = [t] : ae.push(t));
}
let se = null, ue = 0, we = null;
function Ao(t) {
  we = t;
}
let Cn = 1, Ws = 0, Et = Ws;
function Si(t) {
  Et = t;
}
function _n() {
  return ++Cn;
}
function $s(t) {
  var e = t.f;
  if (e & pe)
    return !0;
  if (e & $ && (t.f &= ~Ct), e & Be) {
    var s = t.deps;
    if (s !== null)
      for (var r = s.length, i = 0; i < r; i++) {
        var n = s[i];
        if ($s(
          /** @type {Derived} */
          n
        ) && ln(
          /** @type {Derived} */
          n
        ), n.wv > t.wv)
          return !0;
      }
    e & Le && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    j === null && ee(t, X);
  }
  return !1;
}
function kn(t, e, s = !0) {
  var r = t.reactions;
  if (r !== null && !(ae != null && ae.includes(t)))
    for (var i = 0; i < r.length; i++) {
      var n = r[i];
      n.f & $ ? kn(
        /** @type {Derived} */
        n,
        e,
        !1
      ) : e === n && (s ? ee(n, pe) : n.f & X && ee(n, Be), _t(
        /** @type {Effect} */
        n
      ));
    }
}
function Tn(t) {
  var f;
  var e = se, s = ue, r = we, i = k, n = ae, a = U, o = Fe, l = Et, d = t.f;
  se = /** @type {null | Value[]} */
  null, ue = 0, we = null, k = d & (Xe | dt) ? null : t, ae = null, ws(t.ctx), Fe = !1, Et = ++Ws, t.ac !== null && (Cs(() => {
    t.ac.abort(zt);
  }), t.ac = null);
  try {
    t.f |= Pr;
    var u = (
      /** @type {Function} */
      t.fn
    ), g = u(), h = t.deps;
    if (se !== null) {
      var p;
      if (fr(t, ue), h !== null && ue > 0)
        for (h.length = ue + se.length, p = 0; p < se.length; p++)
          h[ue + p] = se[p];
      else
        t.deps = h = se;
      if (zs() && t.f & Le)
        for (p = ue; p < h.length; p++)
          ((f = h[p]).reactions ?? (f.reactions = [])).push(t);
    } else h !== null && ue < h.length && (fr(t, ue), h.length = ue);
    if (Qs() && we !== null && !Fe && h !== null && !(t.f & ($ | Be | pe)))
      for (p = 0; p < /** @type {Source[]} */
      we.length; p++)
        kn(
          we[p],
          /** @type {Effect} */
          t
        );
    return i !== null && i !== t && (Ws++, we !== null && (r === null ? r = we : r.push(.../** @type {Source[]} */
    we))), t.f & nt && (t.f ^= nt), g;
  } catch (v) {
    return Ji(v);
  } finally {
    t.f ^= Pr, se = e, ue = s, we = r, k = i, ae = n, ws(a), Fe = o, Et = l;
  }
}
function xo(t, e) {
  let s = e.reactions;
  if (s !== null) {
    var r = xa.call(s, t);
    if (r !== -1) {
      var i = s.length - 1;
      i === 0 ? s = e.reactions = null : (s[r] = s[i], s.pop());
    }
  }
  s === null && e.f & $ && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (se === null || !se.includes(e)) && (ee(e, Be), e.f & Le && (e.f ^= Le, e.f &= ~Ct), on(
    /** @type {Derived} **/
    e
  ), fr(
    /** @type {Derived} **/
    e,
    0
  ));
}
function fr(t, e) {
  var s = t.deps;
  if (s !== null)
    for (var r = e; r < s.length; r++)
      xo(t, s[r]);
}
function js(t) {
  var e = t.f;
  if (!(e & Je)) {
    ee(t, X);
    var s = M, r = St;
    M = t, St = !0;
    try {
      e & (Ve | _a) ? bo(t) : yn(t), bn(t);
      var i = Tn(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = Cn;
      var n;
    } finally {
      St = r, M = s;
    }
  }
}
async function Mn() {
  await Promise.resolve(), lt();
}
function m(t) {
  var e = t.f, s = (e & $) !== 0;
  if (k !== null && !Fe) {
    var r = M !== null && (M.f & Je) !== 0;
    if (!r && !(ae != null && ae.includes(t))) {
      var i = k.deps;
      if (k.f & Pr)
        t.rv < Ws && (t.rv = Ws, se === null && i !== null && i[ue] === t ? ue++ : se === null ? se = [t] : se.includes(t) || se.push(t));
      else {
        (k.deps ?? (k.deps = [])).push(t);
        var n = t.reactions;
        n === null ? t.reactions = [k] : n.includes(k) || n.push(k);
      }
    }
  }
  if (Lt) {
    if (at.has(t))
      return at.get(t);
    if (s) {
      var a = (
        /** @type {Derived} */
        t
      ), o = a.v;
      return (!(a.f & X) && a.reactions !== null || Ln(a)) && (o = ri(a)), at.set(a, o), o;
    }
  } else s && (!(j != null && j.has(t)) || E != null && E.is_fork && !zs()) && (a = /** @type {Derived} */
  t, $s(a) && ln(a), St && zs() && !(a.f & Le) && On(a));
  if (j != null && j.has(t))
    return j.get(t);
  if (t.f & nt)
    throw t.v;
  return t.v;
}
function On(t) {
  if (t.deps !== null) {
    t.f ^= Le;
    for (const e of t.deps)
      (e.reactions ?? (e.reactions = [])).push(t), e.f & $ && !(e.f & Le) && On(
        /** @type {Derived} */
        e
      );
  }
}
function Ln(t) {
  if (t.v === Z) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (at.has(e) || e.f & $ && Ln(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Rt(t) {
  var e = Fe;
  try {
    return Fe = !0, t();
  } finally {
    Fe = e;
  }
}
const So = -7169;
function ee(t, e) {
  t.f = t.f & So | e;
}
function Eo(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (Bt in t)
      Hr(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const s = t[e];
        typeof s == "object" && s && Bt in s && Hr(s);
      }
  }
}
function Hr(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        Hr(t[r], e);
      } catch {
      }
    const s = Zr(t);
    if (s !== Object.prototype && s !== Array.prototype && s !== Map.prototype && s !== Set.prototype && s !== Date.prototype) {
      const r = Fi(s);
      for (let i in r) {
        const n = r[i].get;
        if (n)
          try {
            n.call(t);
          } catch {
          }
      }
    }
  }
}
const Io = ["touchstart", "touchmove"];
function Co(t) {
  return Io.includes(t);
}
const Rn = /* @__PURE__ */ new Set(), Br = /* @__PURE__ */ new Set();
function _o(t, e, s, r = {}) {
  function i(n) {
    if (r.capture || Ms.call(e, n), !n.cancelBubble)
      return Cs(() => s == null ? void 0 : s.call(this, n));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? Is(() => {
    e.addEventListener(t, i, r);
  }) : e.addEventListener(t, i, r), i;
}
function ko(t, e, s, r, i) {
  var n = { capture: r, passive: i }, a = _o(t, e, s, n);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && mn(() => {
    e.removeEventListener(t, a, n);
  });
}
function Ir(t) {
  for (var e = 0; e < t.length; e++)
    Rn.add(t[e]);
  for (var s of Br)
    s(t);
}
let Ei = null;
function Ms(t) {
  var y;
  var e = this, s = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = ((y = t.composedPath) == null ? void 0 : y.call(t)) || [], n = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  Ei = t;
  var a = 0, o = Ei === t && t.__root;
  if (o) {
    var l = i.indexOf(o);
    if (l !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var d = i.indexOf(e);
    if (d === -1)
      return;
    l <= d && (a = l);
  }
  if (n = /** @type {Element} */
  i[a] || t.target, n !== e) {
    or(t, "currentTarget", {
      configurable: !0,
      get() {
        return n || s;
      }
    });
    var u = k, g = M;
    de(null), qe(null);
    try {
      for (var h, p = []; n !== null; ) {
        var f = n.assignedSlot || n.parentNode || /** @type {any} */
        n.host || null;
        try {
          var v = n["__" + r];
          v != null && (!/** @type {any} */
          n.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === n) && v.call(n, t);
        } catch (x) {
          h ? p.push(x) : h = x;
        }
        if (t.cancelBubble || f === e || f === null)
          break;
        n = f;
      }
      if (h) {
        for (let x of p)
          queueMicrotask(() => {
            throw x;
          });
        throw h;
      }
    } finally {
      t.__root = e, delete t.currentTarget, de(u), qe(g);
    }
  }
}
function Pn(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function ot(t, e) {
  var s = (
    /** @type {Effect} */
    M
  );
  s.nodes === null && (s.nodes = { start: t, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function H(t, e) {
  var s = (e & Ya) !== 0, r = (e & Qa) !== 0, i, n = !t.startsWith("<!>");
  return () => {
    if (L)
      return ot(C, null), C;
    i === void 0 && (i = Pn(n ? t : "<!>" + t), s || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ Ze(i)));
    var a = (
      /** @type {TemplateNode} */
      r || fn ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (s) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ze(a)
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
function To(t, e, s = "svg") {
  var r = !t.startsWith("<!>"), i = `<${s}>${r ? t : "<!>" + t}</${s}>`, n;
  return () => {
    if (L)
      return ot(C, null), C;
    if (!n) {
      var a = (
        /** @type {DocumentFragment} */
        Pn(i)
      ), o = (
        /** @type {Element} */
        /* @__PURE__ */ Ze(a)
      );
      n = /** @type {Element} */
      /* @__PURE__ */ Ze(o);
    }
    var l = (
      /** @type {TemplateNode} */
      n.cloneNode(!0)
    );
    return ot(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function Mo(t, e) {
  return /* @__PURE__ */ To(t, e, "svg");
}
function Oo() {
  if (L)
    return ot(C, null), C;
  var t = document.createDocumentFragment(), e = document.createComment(""), s = Re();
  return t.append(e, s), ot(e, s), t;
}
function D(t, e) {
  if (L) {
    var s = (
      /** @type {Effect & { nodes: EffectNodes }} */
      M
    );
    (!(s.f & Ys) || s.nodes.end === null) && (s.nodes.end = C), xr();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
let qr = !0;
function gr(t, e) {
  var s = e == null ? "" : typeof e == "object" ? e + "" : e;
  s !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = s, t.nodeValue = s + "");
}
function li(t, e) {
  return Nn(t, e);
}
function Lo(t, e) {
  Fr(), e.intro = e.intro ?? !1;
  const s = e.target, r = L, i = C;
  try {
    for (var n = /* @__PURE__ */ Ze(s); n && (n.nodeType !== Ss || /** @type {Comment} */
    n.data !== Gi); )
      n = /* @__PURE__ */ Ge(n);
    if (!n)
      throw ms;
    $e(!0), ve(
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
    return a !== ms && console.warn("Failed to hydrate: ", a), e.recover === !1 && Na(), Fr(), ii(s), $e(!1), li(t, e);
  } finally {
    $e(r), ve(i);
  }
}
const Ut = /* @__PURE__ */ new Map();
function Nn(t, { target: e, anchor: s, props: r = {}, events: i, context: n, intro: a = !0 }) {
  Fr();
  var o = /* @__PURE__ */ new Set(), l = (g) => {
    for (var h = 0; h < g.length; h++) {
      var p = g[h];
      if (!o.has(p)) {
        o.add(p);
        var f = Co(p);
        e.addEventListener(p, Ms, { passive: f });
        var v = Ut.get(p);
        v === void 0 ? (document.addEventListener(p, Ms, { passive: f }), Ut.set(p, 1)) : Ut.set(p, v + 1);
      }
    }
  };
  l(mr(Rn)), Br.add(l);
  var d = void 0, u = mo(() => {
    var g = s ?? e.appendChild(Re());
    return ro(
      /** @type {TemplateNode} */
      g,
      {
        pending: () => {
        }
      },
      (h) => {
        if (n) {
          ct({});
          var p = (
            /** @type {ComponentContext} */
            U
          );
          p.c = n;
        }
        if (i && (r.$$events = i), L && ot(
          /** @type {TemplateNode} */
          h,
          null
        ), qr = a, d = t(h, r) || {}, qr = !0, L && (M.nodes.end = C, C === null || C.nodeType !== Ss || /** @type {Comment} */
        C.data !== si))
          throw Ar(), ms;
        n && ut();
      }
    ), () => {
      var f;
      for (var h of o) {
        e.removeEventListener(h, Ms);
        var p = (
          /** @type {number} */
          Ut.get(h)
        );
        --p === 0 ? (document.removeEventListener(h, Ms), Ut.delete(h)) : Ut.set(h, p);
      }
      Br.delete(l), g !== s && ((f = g.parentNode) == null || f.removeChild(g));
    };
  });
  return Vr.set(d, u), d;
}
let Vr = /* @__PURE__ */ new WeakMap();
function Gr(t, e) {
  const s = Vr.get(t);
  return s ? (Vr.delete(t), s(e)) : Promise.resolve();
}
var Me, ze, ge, At, Vs, Gs, vr;
class Ro {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, s = !0) {
    /** @type {TemplateNode} */
    z(this, "anchor");
    /** @type {Map<Batch, Key>} */
    A(this, Me, /* @__PURE__ */ new Map());
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
    A(this, ze, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    A(this, ge, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    A(this, At, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    A(this, Vs, !0);
    A(this, Gs, () => {
      var e = (
        /** @type {Batch} */
        E
      );
      if (c(this, Me).has(e)) {
        var s = (
          /** @type {Key} */
          c(this, Me).get(e)
        ), r = c(this, ze).get(s);
        if (r)
          oi(r), c(this, At).delete(s);
        else {
          var i = c(this, ge).get(s);
          i && (c(this, ze).set(s, i.effect), c(this, ge).delete(s), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
        }
        for (const [n, a] of c(this, Me)) {
          if (c(this, Me).delete(n), n === e)
            break;
          const o = c(this, ge).get(a);
          o && (ne(o.effect), c(this, ge).delete(a));
        }
        for (const [n, a] of c(this, ze)) {
          if (n === s || c(this, At).has(n)) continue;
          const o = () => {
            if (Array.from(c(this, Me).values()).includes(n)) {
              var d = document.createDocumentFragment();
              En(a, d), d.append(Re()), c(this, ge).set(n, { effect: a, fragment: d });
            } else
              ne(a);
            c(this, At).delete(n), c(this, ze).delete(n);
          };
          c(this, Vs) || !r ? (c(this, At).add(n), xt(a, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    A(this, vr, (e) => {
      c(this, Me).delete(e);
      const s = Array.from(c(this, Me).values());
      for (const [r, i] of c(this, ge))
        s.includes(r) || (ne(i.effect), c(this, ge).delete(r));
    });
    this.anchor = e, b(this, Vs, s);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, s) {
    var r = (
      /** @type {Batch} */
      E
    ), i = pn();
    if (s && !c(this, ze).has(e) && !c(this, ge).has(e))
      if (i) {
        var n = document.createDocumentFragment(), a = Re();
        n.append(a), c(this, ge).set(e, {
          effect: Se(() => s(a)),
          fragment: n
        });
      } else
        c(this, ze).set(
          e,
          Se(() => s(this.anchor))
        );
    if (c(this, Me).set(r, e), i) {
      for (const [o, l] of c(this, ze))
        o === e ? r.skipped_effects.delete(l) : r.skipped_effects.add(l);
      for (const [o, l] of c(this, ge))
        o === e ? r.skipped_effects.delete(l.effect) : r.skipped_effects.add(l.effect);
      r.oncommit(c(this, Gs)), r.ondiscard(c(this, vr));
    } else
      L && (this.anchor = C), c(this, Gs).call(this);
  }
}
Me = new WeakMap(), ze = new WeakMap(), ge = new WeakMap(), At = new WeakMap(), Vs = new WeakMap(), Gs = new WeakMap(), vr = new WeakMap();
function Ee(t, e, s = !1) {
  L && xr();
  var r = new Ro(t), i = s ? It : 0;
  function n(a, o) {
    if (L) {
      const d = Yi(t) === yr;
      if (a === d) {
        var l = dr();
        ve(l), r.anchor = l, $e(!1), r.ensure(a, o), $e(!0);
        return;
      }
    }
    r.ensure(a, o);
  }
  ai(() => {
    var a = !1;
    e((o, l = !0) => {
      a = !0, n(l, o);
    }), a || n(!1, null);
  }, i);
}
function Po(t, e, s) {
  for (var r = [], i = e.length, n, a = e.length, o = 0; o < i; o++) {
    let g = e[o];
    xt(
      g,
      () => {
        if (n) {
          if (n.pending.delete(g), n.done.add(g), n.pending.size === 0) {
            var h = (
              /** @type {Set<EachOutroGroup>} */
              t.outrogroups
            );
            Yr(mr(n.done)), h.delete(n), h.size === 0 && (t.outrogroups = null);
          }
        } else
          a -= 1;
      },
      !1
    );
  }
  if (a === 0) {
    var l = r.length === 0 && s !== null;
    if (l) {
      var d = (
        /** @type {Element} */
        s
      ), u = (
        /** @type {Element} */
        d.parentNode
      );
      ii(u), u.append(d), t.items.clear();
    }
    Yr(e, !l);
  } else
    n = {
      pending: new Set(e),
      done: /* @__PURE__ */ new Set()
    }, (t.outrogroups ?? (t.outrogroups = /* @__PURE__ */ new Set())).add(n);
}
function Yr(t, e = !0) {
  for (var s = 0; s < t.length; s++)
    ne(t[s], e);
}
var Ii;
function No(t, e, s, r, i, n = null) {
  var a = t, o = /* @__PURE__ */ new Map();
  L && xr();
  var l = null, d = /* @__PURE__ */ an(() => {
    var v = s();
    return ji(v) ? v : v == null ? [] : mr(v);
  }), u, g = !0;
  function h() {
    f.fallback = l, Do(f, u, a, e, r), l !== null && (u.length === 0 ? l.f & it ? (l.f ^= it, Os(l, null, a)) : oi(l) : xt(l, () => {
      l = null;
    }));
  }
  var p = ai(() => {
    u = /** @type {V[]} */
    m(d);
    var v = u.length;
    let y = !1;
    if (L) {
      var x = Yi(a) === yr;
      x !== (v === 0) && (a = dr(), ve(a), $e(!1), y = !0);
    }
    for (var O = /* @__PURE__ */ new Set(), B = (
      /** @type {Batch} */
      E
    ), oe = pn(), q = 0; q < v; q += 1) {
      L && C.nodeType === Ss && /** @type {Comment} */
      C.data === si && (a = /** @type {Comment} */
      C, y = !0, $e(!1));
      var Ie = u[q], ce = r(Ie, q), Q = g ? null : o.get(ce);
      Q ? (Q.v && ys(Q.v, Ie), Q.i && ys(Q.i, q), oe && B.skipped_effects.delete(Q.e)) : (Q = Uo(
        o,
        g ? a : Ii ?? (Ii = Re()),
        Ie,
        ce,
        q,
        i,
        e,
        s
      ), g || (Q.e.f |= it), o.set(ce, Q)), O.add(ce);
    }
    if (v === 0 && n && !l && (g ? l = Se(() => n(a)) : (l = Se(() => n(Ii ?? (Ii = Re()))), l.f |= it)), L && v > 0 && ve(dr()), !g)
      if (oe) {
        for (const [te, _r] of o)
          O.has(te) || B.skipped_effects.add(_r.e);
        B.oncommit(h), B.ondiscard(() => {
        });
      } else
        h();
    y && $e(!0), m(d);
  }), f = { effect: p, items: o, outrogroups: null, fallback: l };
  g = !1, L && (a = C);
}
function Do(t, e, s, r, i) {
  var Q;
  var n = e.length, a = t.items, o = t.effect.first, l, d = null, u = [], g = [], h, p, f, v;
  for (v = 0; v < n; v += 1) {
    if (h = e[v], p = i(h, v), f = /** @type {EachItem} */
    a.get(p).e, t.outrogroups !== null)
      for (const te of t.outrogroups)
        te.pending.delete(f), te.done.delete(f);
    if (f.f & it)
      if (f.f ^= it, f === o)
        Os(f, null, s);
      else {
        var y = d ? d.next : o;
        f === t.effect.last && (t.effect.last = f.prev), f.prev && (f.prev.next = f.next), f.next && (f.next.prev = f.prev), et(t, d, f), et(t, f, y), Os(f, y, s), d = f, u = [], g = [], o = d.next;
        continue;
      }
    if (f.f & he && oi(f), f !== o) {
      if (l !== void 0 && l.has(f)) {
        if (u.length < g.length) {
          var x = g[0], O;
          d = x.prev;
          var B = u[0], oe = u[u.length - 1];
          for (O = 0; O < u.length; O += 1)
            Os(u[O], x, s);
          for (O = 0; O < g.length; O += 1)
            l.delete(g[O]);
          et(t, B.prev, oe.next), et(t, d, B), et(t, oe, x), o = x, d = oe, v -= 1, u = [], g = [];
        } else
          l.delete(f), Os(f, o, s), et(t, f.prev, f.next), et(t, f, d === null ? t.effect.first : d.next), et(t, d, f), d = f;
        continue;
      }
      for (u = [], g = []; o !== null && o !== f; )
        (l ?? (l = /* @__PURE__ */ new Set())).add(o), g.push(o), o = o.next;
      if (o === null)
        continue;
    }
    f.f & it || u.push(f), d = f, o = f.next;
  }
  if (t.outrogroups !== null) {
    for (const te of t.outrogroups)
      te.pending.size === 0 && (Yr(mr(te.done)), (Q = t.outrogroups) == null || Q.delete(te));
    t.outrogroups.size === 0 && (t.outrogroups = null);
  }
  if (o !== null || l !== void 0) {
    var q = [];
    if (l !== void 0)
      for (f of l)
        f.f & he || q.push(f);
    for (; o !== null; )
      !(o.f & he) && o !== t.fallback && q.push(o), o = o.next;
    var Ie = q.length;
    if (Ie > 0) {
      var ce = null;
      Po(t, q, ce);
    }
  }
}
function Uo(t, e, s, r, i, n, a, o) {
  var l = a & ja ? a & Ha ? kt(s) : /* @__PURE__ */ cn(s, !1, !1) : null, d = a & Fa ? kt(i) : null;
  return {
    v: l,
    i: d,
    e: Se(() => (n(e, l ?? s, d ?? i, o), () => {
      t.delete(r);
    }))
  };
}
function Os(t, e, s) {
  if (t.nodes)
    for (var r = t.nodes.start, i = t.nodes.end, n = e && !(e.f & it) ? (
      /** @type {EffectNodes} */
      e.nodes.start
    ) : s; r !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ge(r)
      );
      if (n.before(r), r === i)
        return;
      r = a;
    }
}
function et(t, e, s) {
  e === null ? t.effect.first = s : e.next = s, s === null ? t.effect.last = e : s.prev = e;
}
const zo = () => performance.now(), Ke = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (t) => requestAnimationFrame(t)
  ),
  now: () => zo(),
  tasks: /* @__PURE__ */ new Set()
};
function Dn() {
  const t = Ke.now();
  Ke.tasks.forEach((e) => {
    e.c(t) || (Ke.tasks.delete(e), e.f());
  }), Ke.tasks.size !== 0 && Ke.tick(Dn);
}
function Wo(t) {
  let e;
  return Ke.tasks.size === 0 && Ke.tick(Dn), {
    promise: new Promise((s) => {
      Ke.tasks.add(e = { c: t, f: s });
    }),
    abort() {
      Ke.tasks.delete(e);
    }
  };
}
function er(t, e) {
  Cs(() => {
    t.dispatchEvent(new CustomEvent(e));
  });
}
function jo(t) {
  if (t === "float") return "cssFloat";
  if (t === "offset") return "cssOffset";
  if (t.startsWith("--")) return t;
  const e = t.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (s) => s[0].toUpperCase() + s.slice(1)
  ).join("");
}
function Ci(t) {
  const e = {}, s = t.split(";");
  for (const r of s) {
    const [i, n] = r.split(":");
    if (!i || n === void 0) break;
    const a = jo(i.trim());
    e[a] = n.trim();
  }
  return e;
}
const Fo = (t) => t;
function _i(t, e, s, r) {
  var y;
  var i = (t & Ga) !== 0, n = "both", a, o = e.inert, l = e.style.overflow, d, u;
  function g() {
    return Cs(() => a ?? (a = s()(e, (r == null ? void 0 : r()) ?? /** @type {P} */
    {}, {
      direction: n
    })));
  }
  var h = {
    is_global: i,
    in() {
      e.inert = o, er(e, "introstart"), d = Qr(e, g(), u, 1, () => {
        er(e, "introend"), d == null || d.abort(), d = a = void 0, e.style.overflow = l;
      });
    },
    out(x) {
      e.inert = !0, er(e, "outrostart"), u = Qr(e, g(), d, 0, () => {
        er(e, "outroend"), x == null || x();
      });
    },
    stop: () => {
      d == null || d.abort(), u == null || u.abort();
    }
  }, p = (
    /** @type {Effect & { nodes: EffectNodes }} */
    M
  );
  if (((y = p.nodes).t ?? (y.t = [])).push(h), qr) {
    var f = i;
    if (!f) {
      for (var v = (
        /** @type {Effect | null} */
        p.parent
      ); v && v.f & It; )
        for (; (v = v.parent) && !(v.f & Ve); )
          ;
      f = !v || (v.f & Ys) !== 0;
    }
    f && ni(() => {
      Rt(() => h.in());
    });
  }
}
function Qr(t, e, s, r, i) {
  var n = r === 1;
  if (Ia(e)) {
    var a, o = !1;
    return Is(() => {
      if (!o) {
        var y = e({ direction: n ? "in" : "out" });
        a = Qr(t, y, s, r, i);
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
  if (s == null || s.deactivate(), !(e != null && e.duration))
    return i(), {
      abort: ks,
      deactivate: ks,
      reset: ks,
      t: () => r
    };
  const { delay: l = 0, css: d, tick: u, easing: g = Fo } = e;
  var h = [];
  if (n && s === void 0 && (u && u(0, 1), d)) {
    var p = Ci(d(0, 1));
    h.push(p, p);
  }
  var f = () => 1 - r, v = t.animate(h, { duration: l, fill: "forwards" });
  return v.onfinish = () => {
    v.cancel();
    var y = (s == null ? void 0 : s.t()) ?? 1 - r;
    s == null || s.abort();
    var x = r - y, O = (
      /** @type {number} */
      e.duration * Math.abs(x)
    ), B = [];
    if (O > 0) {
      var oe = !1;
      if (d)
        for (var q = Math.ceil(O / 16.666666666666668), Ie = 0; Ie <= q; Ie += 1) {
          var ce = y + x * g(Ie / q), Q = Ci(d(ce, 1 - ce));
          B.push(Q), oe || (oe = Q.overflow === "hidden");
        }
      oe && (t.style.overflow = "hidden"), f = () => {
        var te = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          v.currentTime
        );
        return y + x * g(te / O);
      }, u && Wo(() => {
        if (v.playState !== "running") return !1;
        var te = f();
        return u(te, 1 - te), !0;
      });
    }
    v = t.animate(B, { duration: O, fill: "forwards" }), v.onfinish = () => {
      f = () => r, u == null || u(r, 1 - r), i();
    };
  }, {
    abort: () => {
      v && (v.cancel(), v.effect = null, v.onfinish = ks);
    },
    deactivate: () => {
      i = ks;
    },
    reset: () => {
      r === 0 && (u == null || u(1, 0));
    },
    t: () => f()
  };
}
function Pt(t, e) {
  ni(() => {
    var s = t.getRootNode(), r = (
      /** @type {ShadowRoot} */
      s.host ? (
        /** @type {ShadowRoot} */
        s
      ) : (
        /** @type {Document} */
        s.head ?? /** @type {Document} */
        s.ownerDocument.head
      )
    );
    if (!r.querySelector("#" + e.hash)) {
      const i = document.createElement("style");
      i.id = e.hash, i.textContent = e.code, r.appendChild(i);
    }
  });
}
const ki = [...` 	
\r\f \v\uFEFF`];
function Ho(t, e, s) {
  var r = t == null ? "" : "" + t;
  if (s) {
    for (var i in s)
      if (s[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var n = i.length, a = 0; (a = r.indexOf(i, a)) >= 0; ) {
          var o = a + n;
          (a === 0 || ki.includes(r[a - 1])) && (o === r.length || ki.includes(r[o])) ? r = (a === 0 ? "" : r.substring(0, a)) + r.substring(o + 1) : a = o;
        }
  }
  return r === "" ? null : r;
}
function Un(t, e, s, r, i, n) {
  var a = t.__className;
  if (L || a !== s || a === void 0) {
    var o = Ho(s, r, n);
    (!L || o !== t.getAttribute("class")) && (o == null ? t.removeAttribute("class") : t.className = o), t.__className = s;
  } else if (n && i !== n)
    for (var l in n) {
      var d = !!n[l];
      (i == null || d !== !!i[l]) && t.classList.toggle(l, d);
    }
  return n;
}
const Bo = Symbol("is custom element"), qo = Symbol("is html");
function Mt(t, e, s, r) {
  var i = Vo(t);
  L && (i[e] = t.getAttribute(e), e === "src" || e === "srcset" || e === "href" && t.nodeName === "LINK") || i[e] !== (i[e] = s) && (e === "loading" && (t[Ta] = s), s == null ? t.removeAttribute(e) : typeof s != "string" && Go(t).includes(e) ? t[e] = s : t.setAttribute(e, s));
}
function Vo(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ?? (t.__attributes = {
      [Bo]: t.nodeName.includes("-"),
      [qo]: t.namespaceURI === Ka
    })
  );
}
var Ti = /* @__PURE__ */ new Map();
function Go(t) {
  var e = t.getAttribute("is") || t.nodeName, s = Ti.get(e);
  if (s) return s;
  Ti.set(e, s = []);
  for (var r, i = t, n = Element.prototype; n !== i; ) {
    r = Fi(i);
    for (var a in r)
      r[a].set && s.push(a);
    i = Zr(i);
  }
  return s;
}
function Yo(t, e, s = e) {
  var r = /* @__PURE__ */ new WeakSet();
  go(t, "input", async (i) => {
    var n = i ? t.defaultValue : t.value;
    if (n = Mr(t) ? Or(n) : n, s(n), E !== null && r.add(E), await Mn(), n !== (n = e())) {
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
  Rt(e) == null && t.value) && (s(Mr(t) ? Or(t.value) : t.value), E !== null && r.add(E)), Er(() => {
    var i = e();
    if (t === document.activeElement) {
      var n = (
        /** @type {Batch} */
        tr ?? E
      );
      if (r.has(n))
        return;
    }
    Mr(t) && i === Or(t.value) || t.type === "date" && !i && !t.value || i !== t.value && (t.value = i ?? "");
  });
}
function Mr(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function Or(t) {
  return t === "" ? null : +t;
}
function Mi(t, e) {
  return t === e || (t == null ? void 0 : t[Bt]) === e;
}
function di(t = {}, e, s, r) {
  return ni(() => {
    var i, n;
    return Er(() => {
      i = n, n = [], Rt(() => {
        t !== s(...n) && (e(t, ...n), i && Mi(s(...i), t) && e(null, ...i));
      });
    }), () => {
      Is(() => {
        n && Mi(s(...n), t) && e(null, ...n);
      });
    };
  }), t;
}
function Qo(t = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    U
  ), s = e.l.u;
  if (!s) return;
  let r = () => Eo(e.s);
  if (t) {
    let i = 0, n = (
      /** @type {Record<string, any>} */
      {}
    );
    const a = /* @__PURE__ */ Ks(() => {
      let o = !1;
      const l = e.s;
      for (const d in l)
        l[d] !== n[d] && (n[d] = l[d], o = !0);
      return o && i++, i;
    });
    r = () => m(a);
  }
  s.b.length && po(() => {
    Oi(e, r), Rr(s.b);
  }), qt(() => {
    const i = Rt(() => s.m.map(Ca));
    return () => {
      for (const n of i)
        typeof n == "function" && n();
    };
  }), s.a.length && qt(() => {
    Oi(e, r), Rr(s.a);
  });
}
function Oi(t, e) {
  if (t.l.s)
    for (const s of t.l.s) m(s);
  e();
}
function As(t, e, s, r) {
  var i = !Es || (s & Ba) !== 0, n = (s & Va) !== 0, a = (
    /** @type {V} */
    r
  ), o = !0, l = () => (o && (o = !1, a = /** @type {V} */
  r), a), d;
  d = /** @type {V} */
  t[e], d === void 0 && r !== void 0 && (d = l());
  var u;
  if (i ? u = () => {
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
  }, i && !(s & qa))
    return u;
  var g = !1, h = /* @__PURE__ */ Ks(() => (g = !1, u())), p = (
    /** @type {Effect} */
    M
  );
  return (
    /** @type {() => V} */
    function(f, v) {
      if (arguments.length > 0) {
        const y = v ? m(h) : i && n ? V(f) : f;
        return I(h, y), g = !0, a !== void 0 && (a = y), f;
      }
      return Lt && g || p.f & Je ? h.v : m(h);
    }
  );
}
function Ko(t) {
  return new $o(t);
}
var Qe, Ae;
class $o {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    A(this, Qe);
    /** @type {Record<string, any>} */
    A(this, Ae);
    var n;
    var s = /* @__PURE__ */ new Map(), r = (a, o) => {
      var l = /* @__PURE__ */ cn(o, !1, !1);
      return s.set(a, l), l;
    };
    const i = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(a, o) {
          return m(s.get(o) ?? r(o, Reflect.get(a, o)));
        },
        has(a, o) {
          return o === ka ? !0 : (m(s.get(o) ?? r(o, Reflect.get(a, o))), Reflect.has(a, o));
        },
        set(a, o, l) {
          return I(s.get(o) ?? r(o, l), l), Reflect.set(a, o, l);
        }
      }
    );
    b(this, Ae, (e.hydrate ? Lo : li)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: i,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((n = e == null ? void 0 : e.props) != null && n.$$host) || e.sync === !1) && lt(), b(this, Qe, i.$$events);
    for (const a of Object.keys(c(this, Ae)))
      a === "$set" || a === "$destroy" || a === "$on" || or(this, a, {
        get() {
          return c(this, Ae)[a];
        },
        /** @param {any} value */
        set(o) {
          c(this, Ae)[a] = o;
        },
        enumerable: !0
      });
    c(this, Ae).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, c(this, Ae).$destroy = () => {
      Gr(c(this, Ae));
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    c(this, Ae).$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, s) {
    c(this, Qe)[e] = c(this, Qe)[e] || [];
    const r = (...i) => s.call(this, ...i);
    return c(this, Qe)[e].push(r), () => {
      c(this, Qe)[e] = c(this, Qe)[e].filter(
        /** @param {any} fn */
        (i) => i !== r
      );
    };
  }
  $destroy() {
    c(this, Ae).$destroy();
  }
}
Qe = new WeakMap(), Ae = new WeakMap();
let zn;
typeof HTMLElement == "function" && (zn = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, s, r) {
    super();
    /** The Svelte component constructor */
    z(this, "$$ctor");
    /** Slots */
    z(this, "$$s");
    /** @type {any} The Svelte component instance */
    z(this, "$$c");
    /** Whether or not the custom element is connected */
    z(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    z(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    z(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    z(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    z(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    z(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    z(this, "$$me");
    this.$$ctor = e, this.$$s = s, r && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(e, s, r) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(s), this.$$c) {
      const i = this.$$c.$on(e, s);
      this.$$l_u.set(s, i);
    }
    super.addEventListener(e, s, r);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(e, s, r) {
    if (super.removeEventListener(e, s, r), this.$$c) {
      const i = this.$$l_u.get(s);
      i && (i(), this.$$l_u.delete(s));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(i) {
        return (n) => {
          const a = document.createElement("slot");
          i !== "default" && (a.name = i), D(n, a);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const s = {}, r = Jo(this);
      for (const i of this.$$s)
        i in r && (i === "default" && !this.$$d.children ? (this.$$d.children = e(i), s.default = !0) : s[i] = e(i));
      for (const i of this.attributes) {
        const n = this.$$g_p(i.name);
        n in this.$$d || (this.$$d[n] = nr(n, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = Ko({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: s,
          $$host: this
        }
      }), this.$$me = vo(() => {
        Er(() => {
          var i;
          this.$$r = !0;
          for (const n of ar(this.$$c)) {
            if (!((i = this.$$p_d[n]) != null && i.reflect)) continue;
            this.$$d[n] = this.$$c[n];
            const a = nr(
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
      for (const i in this.$$l)
        for (const n of this.$$l[i]) {
          const a = this.$$c.$on(i, n);
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
  attributeChangedCallback(e, s, r) {
    var i;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = nr(e, r, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [e]: this.$$d[e] }));
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
    return ar(this.$$p_d).find(
      (s) => this.$$p_d[s].attribute === e || !this.$$p_d[s].attribute && s.toLowerCase() === e
    ) || e;
  }
});
function nr(t, e, s, r) {
  var n;
  const i = (n = s[t]) == null ? void 0 : n.type;
  if (e = i === "Boolean" && typeof e != "boolean" ? e != null : e, !r || !s[t])
    return e;
  if (r === "toAttribute")
    switch (i) {
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
    switch (i) {
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
function Jo(t) {
  const e = {};
  return t.childNodes.forEach((s) => {
    e[
      /** @type {Element} node */
      s.slot || "default"
    ] = !0;
  }), e;
}
function Nt(t, e, s, r, i, n) {
  let a = class extends zn {
    constructor() {
      super(t, s, i), this.$$p_d = e;
    }
    static get observedAttributes() {
      return ar(e).map(
        (o) => (e[o].attribute || o).toLowerCase()
      );
    }
  };
  return ar(e).forEach((o) => {
    or(a.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(l) {
        var g;
        l = nr(o, l, e), this.$$d[o] = l;
        var d = this.$$c;
        if (d) {
          var u = (g = Ht(d, o)) == null ? void 0 : g.get;
          u ? d[o] = l : d.$set({ [o]: l });
        }
      }
    });
  }), r.forEach((o) => {
    or(a.prototype, o, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[o];
      }
    });
  }), t.element = /** @type {any} */
  a, a;
}
function ci(t) {
  U === null && Vi(), Es && U.l !== null ? Xo(U).m.push(t) : qt(() => {
    const e = Rt(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Zo(t) {
  U === null && Vi(), ci(() => () => Rt(t));
}
function Xo(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
const el = "5";
var Wi;
typeof window < "u" && ((Wi = window.__svelte ?? (window.__svelte = {})).v ?? (Wi.v = /* @__PURE__ */ new Set())).add(el);
const tl = (t) => t;
function sl(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function Li(t) {
  const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    t,
    "px"
  ];
}
function rl(t, { delay: e = 0, duration: s = 400, easing: r = tl } = {}) {
  const i = +getComputedStyle(t).opacity;
  return {
    delay: e,
    duration: s,
    easing: r,
    css: (n) => `opacity: ${n * i}`
  };
}
function il(t, { delay: e = 0, duration: s = 400, easing: r = sl, x: i = 0, y: n = 0, opacity: a = 0 } = {}) {
  const o = getComputedStyle(t), l = +o.opacity, d = o.transform === "none" ? "" : o.transform, u = l * (1 - a), [g, h] = Li(i), [p, f] = Li(n);
  return {
    delay: e,
    duration: s,
    easing: r,
    css: (v, y) => `
			transform: ${d} translate(${(1 - v) * g}${h}, ${(1 - v) * p}${f});
			opacity: ${l - u * y}`
  };
}
var Kt, $t, Jt, Zt;
class nl {
  constructor() {
    A(this, Kt);
    A(this, $t);
    A(this, Jt);
    A(this, Zt);
    b(this, Kt, /* @__PURE__ */ T(!1)), b(this, $t, /* @__PURE__ */ T(!1)), b(this, Jt, /* @__PURE__ */ T(!1)), b(this, Zt, /* @__PURE__ */ T(!1));
  }
  get isOpen() {
    return m(c(this, Kt));
  }
  set isOpen(e) {
    I(c(this, Kt), e, !0);
  }
  get isMinimized() {
    return m(c(this, $t));
  }
  set isMinimized(e) {
    I(c(this, $t), e, !0);
  }
  get isLoading() {
    return m(c(this, Jt));
  }
  set isLoading(e) {
    I(c(this, Jt), e, !0);
  }
  get hasUnreadMessages() {
    return m(c(this, Zt));
  }
  set hasUnreadMessages(e) {
    I(c(this, Zt), e, !0);
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
Kt = new WeakMap(), $t = new WeakMap(), Jt = new WeakMap(), Zt = new WeakMap();
const W = new nl(), ie = {
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
}, Ri = {
  /** Visitor ID storage key */
  VISITOR_ID: "ai_chat_visitor_id",
  /** Session history storage key */
  SESSIONS: "ai_chat_sessions"
};
var Xt, es, ts, ss, rs, is;
class al {
  constructor() {
    A(this, Xt);
    A(this, es);
    A(this, ts);
    A(this, ss);
    A(this, rs);
    A(this, is);
    b(this, Xt, /* @__PURE__ */ T(V([]))), b(this, es, /* @__PURE__ */ T(null)), b(this, ts, /* @__PURE__ */ T(!1)), b(this, ss, /* @__PURE__ */ T(null)), b(this, rs, /* @__PURE__ */ T(null)), this.streamingBuffer = "", this.streamingTimeout = null, b(this, is, /* @__PURE__ */ T(0));
  }
  get messages() {
    return m(c(this, Xt));
  }
  set messages(e) {
    I(c(this, Xt), e, !0);
  }
  get currentSession() {
    return m(c(this, es));
  }
  set currentSession(e) {
    I(c(this, es), e, !0);
  }
  get isTyping() {
    return m(c(this, ts));
  }
  set isTyping(e) {
    I(c(this, ts), e, !0);
  }
  get error() {
    return m(c(this, ss));
  }
  set error(e) {
    I(c(this, ss), e, !0);
  }
  get streamingMessageId() {
    return m(c(this, rs));
  }
  set streamingMessageId(e) {
    I(c(this, rs), e, !0);
  }
  get streamingUpdateSignal() {
    return m(c(this, is));
  }
  set streamingUpdateSignal(e) {
    I(c(this, is), e, !0);
  }
  // Derived state
  get unreadCount() {
    return this.messages.filter((e) => e.role === "assistant" && e.status !== "sent").length;
  }
  get hasMessages() {
    return this.messages.length > 0;
  }
  addMessage(e, s = "user") {
    const r = {
      id: crypto.randomUUID(),
      role: s,
      content: e,
      timestamp: /* @__PURE__ */ new Date(),
      status: s === "user" ? "sending" : "sent"
    };
    return this.messages = [...this.messages, r], r;
  }
  updateMessageStatus(e, s) {
    this.messages = this.messages.map((r) => r.id === e ? { ...r, status: s } : r);
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
    var s;
    if (this.streamingMessageId) {
      if (this.streamingBuffer += e, this.streamingTimeout && clearTimeout(this.streamingTimeout), typeof process < "u" && ((s = process.env) == null ? void 0 : s.NODE_ENV) === "test") {
        this.flushStreamingBuffer();
        return;
      }
      this.streamingTimeout = window.setTimeout(
        () => {
          this.flushStreamingBuffer(), this.streamingTimeout = null;
        },
        ie.STREAMING_BATCH_DELAY
      );
    }
  }
  flushStreamingBuffer() {
    if (this.streamingMessageId && this.streamingBuffer) {
      const e = this.messages.find((s) => s.id === this.streamingMessageId);
      e ? (e.content += this.streamingBuffer, this.streamingUpdateSignal++) : console.warn("ChatStore: Streaming message not found", { id: this.streamingMessageId }), this.streamingBuffer = "";
    }
  }
  finishStreamingMessage() {
    this.streamingTimeout && (clearTimeout(this.streamingTimeout), this.streamingTimeout = null), this.flushStreamingBuffer(), this.streamingMessageId = null;
  }
  updateMessageContent(e, s) {
    this.messages = this.messages.map((r) => r.id === e ? { ...r, content: s(r.content) } : r);
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
Xt = new WeakMap(), es = new WeakMap(), ts = new WeakMap(), ss = new WeakMap(), rs = new WeakMap(), is = new WeakMap();
const _ = new al(), Pi = {
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
}, _e = {
  theme: "modern",
  position: "bottom-right",
  title: "AI Assistant",
  placeholder: "Type your message...",
  avatarEmoji: "🤖",
  debug: !1,
  autoInit: !0
}, Wn = {
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
    return Pi[t] || null;
  },
  /**
   * Convert property name to HTML attribute name
   */
  propertyToAttribute(t) {
    const s = Object.entries(Pi).find(([, r]) => r === t);
    return s ? s[0] : null;
  }
}, ol = [
  "modern",
  "corporate",
  "friendly",
  "minimal",
  "dark",
  "light"
];
function jn(t) {
  return ol.includes(t);
}
function Cr(t) {
  return !t || typeof t != "string" ? !1 : /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(t);
}
function ui(t, e = "#6b46c1") {
  return Cr(t) ? t : e;
}
function Fn(t) {
  if (!Cr(t)) return t;
  if (t.length === 4) {
    const e = t.slice(1);
    return "#" + e[0] + e[0] + e[1] + e[1] + e[2] + e[2];
  }
  return t;
}
function Hn(t) {
  const e = Fn(t), s = parseInt(e.slice(1, 3), 16) / 255, r = parseInt(e.slice(3, 5), 16) / 255, i = parseInt(e.slice(5, 7), 16) / 255, n = Math.max(s, r, i), a = Math.min(s, r, i);
  let o = 0, l = 0;
  const d = (n + a) / 2;
  if (n !== a) {
    const u = n - a;
    switch (l = d > 0.5 ? u / (2 - n - a) : u / (n + a), n) {
      case s:
        o = ((r - i) / u + (r < i ? 6 : 0)) / 6;
        break;
      case r:
        o = ((i - s) / u + 2) / 6;
        break;
      case i:
        o = ((s - r) / u + 4) / 6;
        break;
    }
  }
  return { h: o * 360, s: l * 100, l: d * 100 };
}
function Bn(t, e, s) {
  e /= 100, s /= 100;
  const r = e * Math.min(s, 1 - s), i = (n) => {
    const a = (n + t / 30) % 12, o = s - r * Math.max(Math.min(a - 3, 9 - a, 1), -1);
    return Math.round(255 * o).toString(16).padStart(2, "0");
  };
  return `#${i(0)}${i(8)}${i(4)}`.toUpperCase();
}
function Oe(t, e) {
  if (!Cr(t)) return t;
  const s = Hn(t), r = Math.max(0, Math.min(100, s.l + e));
  return Bn(s.h, s.s, r);
}
const ll = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  adjustColor: Oe,
  expandHexColor: Fn,
  hexToHsl: Hn,
  hslToHex: Bn,
  isValidHexColor: Cr,
  sanitizeHexColor: ui
}, Symbol.toStringTag, { value: "Module" }));
var ns, as, os, ls, ds, cs, us, fs, gs, hs, ps, vs;
class dl {
  constructor() {
    A(this, ns);
    A(this, as);
    A(this, os);
    A(this, ls);
    A(this, ds);
    A(this, cs);
    A(this, us);
    A(this, fs);
    A(this, gs);
    A(this, hs);
    A(this, ps);
    A(this, vs);
    b(this, ns, /* @__PURE__ */ T("")), b(this, as, /* @__PURE__ */ T(V(_e.theme))), b(this, os, /* @__PURE__ */ T(V(_e.position))), b(this, ls, /* @__PURE__ */ T(V(_e.title))), b(this, ds, /* @__PURE__ */ T(V(_e.logoUrl))), b(this, cs, /* @__PURE__ */ T(V(_e.placeholder))), b(this, us, /* @__PURE__ */ T(V(_e.accentColor))), b(this, fs, /* @__PURE__ */ T(V(_e.avatarEmoji))), b(this, gs, /* @__PURE__ */ T(V(_e.companyName))), b(this, hs, /* @__PURE__ */ T(V(_e.apiUrl))), b(this, ps, /* @__PURE__ */ T(V(_e.wsUrl))), b(this, vs, /* @__PURE__ */ T("default"));
  }
  get clientId() {
    return m(c(this, ns));
  }
  set clientId(e) {
    I(c(this, ns), e, !0);
  }
  get theme() {
    return m(c(this, as));
  }
  set theme(e) {
    I(c(this, as), e, !0);
  }
  get position() {
    return m(c(this, os));
  }
  set position(e) {
    I(c(this, os), e, !0);
  }
  get title() {
    return m(c(this, ls));
  }
  set title(e) {
    I(c(this, ls), e, !0);
  }
  get logoUrl() {
    return m(c(this, ds));
  }
  set logoUrl(e) {
    I(c(this, ds), e, !0);
  }
  get placeholder() {
    return m(c(this, cs));
  }
  set placeholder(e) {
    I(c(this, cs), e, !0);
  }
  get accentColor() {
    return m(c(this, us));
  }
  set accentColor(e) {
    I(c(this, us), e, !0);
  }
  get avatarEmoji() {
    return m(c(this, fs));
  }
  set avatarEmoji(e) {
    I(c(this, fs), e, !0);
  }
  get companyName() {
    return m(c(this, gs));
  }
  set companyName(e) {
    I(c(this, gs), e, !0);
  }
  get apiUrl() {
    return m(c(this, hs));
  }
  set apiUrl(e) {
    I(c(this, hs), e, !0);
  }
  get wsUrl() {
    return m(c(this, ps));
  }
  set wsUrl(e) {
    I(c(this, ps), e, !0);
  }
  get titleSource() {
    return m(c(this, vs));
  }
  set titleSource(e) {
    I(c(this, vs), e, !0);
  }
  updateConfig(e, s = "default") {
    if (e.title !== void 0) {
      this.setTitle(e.title, s);
      const { title: r, ...i } = e;
      Object.assign(this, i);
    } else
      Object.assign(this, e);
  }
  /**
   * Set title with priority enforcement
   * Priority: user > backend > default
   */
  setTitle(e, s) {
    const r = ["user", "backend", "default"], i = r.indexOf(this.titleSource);
    r.indexOf(s) <= i && (this.title = e, this.titleSource = s);
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
    const s = this.parseElementAttributes(e);
    this.updateConfig(s, "user"), this.applyTheme(e);
  }
  /**
   * Parse HTML element attributes into configuration object
   * Reuses unified configuration attribute mapping logic
   */
  parseElementAttributes(e) {
    const s = {}, r = e.getAttributeNames();
    for (const i of r) {
      const n = Wn.attributeToProperty(i);
      if (!n) continue;
      const a = e.getAttribute(i);
      if (a)
        switch (n) {
          case "clientId":
          case "title":
          case "logoUrl":
          case "placeholder":
          case "avatarEmoji":
          case "apiUrl":
          case "wsUrl":
            s[n] = a;
            break;
          case "accentColor":
            s.accentColor = ui(a, this.accentColor);
            break;
          case "theme":
            jn(a) && (s.theme = a);
            break;
          case "position":
            (a === "bottom-left" || a === "bottom-right") && (s.position = a);
            break;
          case "companyName":
            s.companyName = a, e.hasAttribute("title") || (s.title = `${a} Assistant`);
            break;
        }
    }
    return s;
  }
  get cssVariables() {
    const e = {};
    return this.accentColor && (e["--widget-primary"] = this.accentColor, e["--widget-primary-hover"] = Oe(this.accentColor, -20), e["--widget-primary-light"] = Oe(this.accentColor, 20), e["--widget-primary-dark"] = Oe(this.accentColor, -30), e["--widget-gradient"] = `linear-gradient(135deg, ${this.accentColor} 0%, ${Oe(this.accentColor, 20)} 100%)`, e["--widget-gradient-hover"] = `linear-gradient(135deg, ${Oe(this.accentColor, -20)} 0%, ${this.accentColor} 100%)`), e;
  }
  applyTheme(e) {
    e.setAttribute("data-theme", this.theme);
    const s = this.cssVariables;
    for (const [r, i] of Object.entries(s))
      e.style.setProperty(r, i);
  }
  // Remove duplicate adjustColor method - using shared utility from color.ts
}
ns = new WeakMap(), as = new WeakMap(), os = new WeakMap(), ls = new WeakMap(), ds = new WeakMap(), cs = new WeakMap(), us = new WeakMap(), fs = new WeakMap(), gs = new WeakMap(), hs = new WeakMap(), ps = new WeakMap(), vs = new WeakMap();
const Fs = new dl(), cl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  configStore: Fs
}, Symbol.toStringTag, { value: "Module" })), ul = "data:image/png;base64,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", fl = "data:image/png;base64,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", gl = ul, hl = fl;
var pl = /* @__PURE__ */ H('<img alt="Chat" class="button-logo svelte-bkcus6"/>'), vl = /* @__PURE__ */ Mo('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-bkcus6"><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor" class="svelte-bkcus6"></path></svg>'), ml = /* @__PURE__ */ H('<span class="unread-indicator svelte-bkcus6"></span>'), wl = /* @__PURE__ */ H("<button><!> <!></button>");
const bl = {
  hash: "svelte-bkcus6",
  code: `.floating-button.svelte-bkcus6 {width:64px;height:64px;border-radius:var(--widget-radius-full);background:transparent;
    /* Bot Gold ring border */border:3px solid var(--widget-accent);color:var(--widget-text);cursor:pointer;display:flex;align-items:center;justify-content:center;
    /* Soft shadow with gold glow */box-shadow:var(--widget-shadow-lg),
                0 0 12px rgba(244, 169, 50, 0.3);
    /* Spring-based transition */transition:transform 0.2s var(--widget-ease-spring),
                box-shadow 0.25s var(--widget-ease-out-expo),
                border-color 0.2s ease;position:relative;
    animation: messageFadeIn 0.3s var(--widget-ease-out-expo);padding:0;overflow:hidden;}.floating-button.svelte-bkcus6:hover {transform:translateY(-3px);
    /* Enhanced gold glow on hover */box-shadow:var(--widget-shadow-lg),
                0 0 20px rgba(244, 169, 50, 0.5);border-color:var(--widget-accent-light);}.floating-button.svelte-bkcus6:active {transform:translateY(-1px) scale(0.97);transition-duration:0.1s;}

  /* Focus-visible for accessibility */.floating-button.svelte-bkcus6:focus-visible {outline:2px solid var(--widget-accent);outline-offset:3px;box-shadow:var(--widget-shadow-lg),
                0 0 0 4px rgba(244, 169, 50, 0.25);}.floating-button.open.svelte-bkcus6 {
    /* When open, use blue border to match header */background:var(--widget-primary);border-color:var(--widget-primary);}.floating-button.svelte-bkcus6 svg:where(.svelte-bkcus6) {width:24px;height:24px;transition:transform 0.25s var(--widget-ease-spring);position:relative;z-index:1;
    /* Subtle drop shadow on icon */filter:drop-shadow(0 1px 2px rgba(0, 0, 0, 0.15));}.floating-button.svelte-bkcus6 .button-logo:where(.svelte-bkcus6) {
    /* Logo fills most of the button */width:100%;height:100%;border-radius:var(--widget-radius-full);object-fit:cover;transition:transform 0.25s var(--widget-ease-spring);position:relative;z-index:1;}.floating-button.open.svelte-bkcus6 svg:where(.svelte-bkcus6) {transform:rotate(90deg);}.unread-indicator.svelte-bkcus6 {position:absolute;top:-2px;right:-2px;width:16px;height:16px;background:var(--widget-accent);border-radius:var(--widget-radius-full);border:2px solid var(--widget-background);
    /* Bot Gold glow effect */box-shadow:0 0 8px rgba(244, 169, 50, 0.5);
    animation: svelte-bkcus6-unreadPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;}

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
  @media (max-width: 767px) {.floating-button.svelte-bkcus6 {width:60px;height:60px;position:fixed;bottom:20px;right:20px;z-index:var(--widget-z-fixed);}.floating-button.svelte-bkcus6 svg:where(.svelte-bkcus6) {width:24px;height:24px;}.floating-button.svelte-bkcus6 .button-logo:where(.svelte-bkcus6) {width:100%;height:100%;}
  }`
};
function qn(t, e) {
  ct(e, !0), Pt(t, bl);
  let s = As(e, "onclick", 7);
  const r = /* @__PURE__ */ je(() => W.isOpen), i = /* @__PURE__ */ je(() => W.hasUnreadMessages);
  function n() {
    var f;
    (f = s()) == null || f();
  }
  var a = {
    get onclick() {
      return s();
    },
    set onclick(f) {
      s(f), lt();
    }
  }, o = wl();
  let l;
  o.__click = n;
  var d = Y(o);
  {
    var u = (f) => {
      var v = pl();
      Tt(() => Mt(v, "src", gl)), D(f, v);
    }, g = (f) => {
      var v = vl();
      D(f, v);
    };
    Ee(d, (f) => {
      m(r) ? f(g, !1) : f(u);
    });
  }
  var h = re(d, 2);
  {
    var p = (f) => {
      var v = ml();
      D(f, v);
    };
    Ee(h, (f) => {
      m(i) && !m(r) && f(p);
    });
  }
  return G(o), Tt(() => {
    l = Un(o, 1, "floating-button svelte-bkcus6", null, l, { open: m(r) }), Mt(o, "aria-label", m(r) ? "Close chat" : "Open chat");
  }), D(t, o), ut(a);
}
Ir(["click"]);
Nt(qn, { onclick: {} }, [], [], !0);
var yl = /* @__PURE__ */ H('<header class="chat-header svelte-g5m62x"><div class="header-left svelte-g5m62x"><img alt="Logo" class="header-logo svelte-g5m62x"/></div> <div class="header-center svelte-g5m62x"><h2 class="header-title svelte-g5m62x"> </h2> <span class="header-status svelte-g5m62x">Online</span></div> <div class="header-right svelte-g5m62x"><button class="close-button svelte-g5m62x" aria-label="Close chat"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-g5m62x"><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor" class="svelte-g5m62x"></path></svg></button></div></header>');
const Al = {
  hash: "svelte-g5m62x",
  code: `.chat-header.svelte-g5m62x {display:flex;align-items:center;padding:var(--widget-space-sm) var(--widget-space-md);background:var(--widget-surface-elevated);color:var(--widget-text);border-radius:var(--widget-radius-xl) var(--widget-radius-xl) 0 0;border-bottom:1px solid var(--widget-border);gap:var(--widget-space-sm);position:relative;box-shadow:var(--widget-shadow-sm);min-height:48px;}

  /* Subtle gradient overlay for premium feel */.chat-header.svelte-g5m62x::before {content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.04) 0%,
      rgba(255, 255, 255, 0) 100%
    );border-radius:var(--widget-radius-xl) var(--widget-radius-xl) 0 0;pointer-events:none;}.header-left.svelte-g5m62x {width:32px;height:32px;flex-shrink:0;position:relative;z-index:1;
    animation: messageFadeIn 0.25s var(--widget-ease-out-expo);}.header-logo.svelte-g5m62x {width:100%;height:100%;object-fit:cover;border-radius:var(--widget-radius-full);
    /* White background ensures logo visibility in dark mode */background:#ffffff;border:2px solid var(--widget-accent);box-shadow:var(--widget-shadow-sm),
                0 0 8px rgba(244, 169, 50, 0.3);}.header-center.svelte-g5m62x {flex:1;min-width:0;position:relative;z-index:1;
    animation: messageFadeIn 0.25s var(--widget-ease-out-expo) 0.05s backwards;}.header-title.svelte-g5m62x {margin:0;font-size:var(--widget-font-size-lg);font-weight:var(--widget-font-weight-semibold);font-family:var(--widget-font-family);color:var(--widget-text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;letter-spacing:var(--widget-letter-spacing-tight);line-height:var(--widget-line-height-tight);}.header-status.svelte-g5m62x {font-size:var(--widget-font-size-xs);color:var(--widget-text-secondary);font-weight:var(--widget-font-weight-medium);display:flex;align-items:center;gap:var(--widget-space-xs);margin-top:2px;}

  /* Enhanced online indicator with subtle glow */.header-status.svelte-g5m62x::before {content:'';width:6px;height:6px;background:var(--widget-success);border-radius:var(--widget-radius-full);display:inline-block;box-shadow:0 0 6px rgba(16, 185, 129, 0.5);
    animation: svelte-g5m62x-statusPulse 2s ease-in-out infinite;}

  @keyframes svelte-g5m62x-statusPulse {
    0%, 100% {
      opacity: 1;
      box-shadow: 0 0 4px rgba(16, 185, 129, 0.4);
    }
    50% {
      opacity: 0.8;
      box-shadow: 0 0 8px rgba(16, 185, 129, 0.6);
    }
  }.header-right.svelte-g5m62x {display:flex;align-items:center;gap:var(--widget-space-sm);position:relative;z-index:1;
    animation: messageFadeIn 0.25s var(--widget-ease-out-expo) 0.1s backwards;}.close-button.svelte-g5m62x {background:var(--widget-surface);border:1px solid var(--widget-border);color:var(--widget-text-secondary);cursor:pointer;padding:var(--widget-space-xs);display:flex;align-items:center;justify-content:center;border-radius:var(--widget-radius-md);transition:transform 0.15s var(--widget-ease-spring),
                background 0.15s ease,
                color 0.15s ease,
                box-shadow 0.2s ease;box-shadow:var(--widget-shadow-sm);}.close-button.svelte-g5m62x:hover {background:var(--widget-surface-hover);color:var(--widget-text);border-color:var(--widget-border);transform:scale(1.08);}.close-button.svelte-g5m62x:active {transform:scale(0.95);box-shadow:var(--widget-shadow-inner);transition-duration:0.1s;}

  /* Focus-visible for accessibility */.close-button.svelte-g5m62x:focus-visible {outline:2px solid var(--widget-primary);outline-offset:2px;box-shadow:0 0 0 4px rgba(var(--widget-primary-rgb), 0.15);}.close-button.svelte-g5m62x svg:where(.svelte-g5m62x) {width:16px;height:16px;transition:transform 0.15s var(--widget-ease-spring);}.close-button.svelte-g5m62x:hover svg:where(.svelte-g5m62x) {transform:rotate(90deg);}

  /* Mobile: Enhanced touch targets (WCAG 2.1 AA) */
  @media (max-width: 767px) {.chat-header.svelte-g5m62x {border-radius:0; /* Full-screen on mobile */min-height:56px;padding:var(--widget-space-sm) var(--widget-space-md);}.close-button.svelte-g5m62x {min-width:var(--widget-touch-target-min);min-height:var(--widget-touch-target-min);padding:var(--widget-space-sm);}.close-button.svelte-g5m62x svg:where(.svelte-g5m62x) {width:20px;height:20px;}
  }

  /* Landscape: Compact height for more content area */
  @media (max-width: 767px) and (orientation: landscape) {.chat-header.svelte-g5m62x {min-height:48px;}
  }`
};
function Vn(t, e) {
  ct(e, !0), Pt(t, Al);
  let s = As(e, "onclose", 7);
  const r = /* @__PURE__ */ je(() => Fs.logoUrl || hl);
  function i() {
    var f;
    W.close(), (f = s()) == null || f();
  }
  var n = {
    get onclose() {
      return s();
    },
    set onclose(f) {
      s(f), lt();
    }
  }, a = yl(), o = Y(a), l = Y(o);
  G(o);
  var d = re(o, 2), u = Y(d), g = Y(u, !0);
  G(u), lr(2), G(d);
  var h = re(d, 2), p = Y(h);
  return p.__click = i, G(h), G(a), Tt(() => {
    Mt(l, "src", m(r)), gr(g, Fs.title);
  }), D(t, a), ut(n);
}
Ir(["click"]);
Nt(Vn, { onclose: {} }, [], [], !0);
var xl = /* @__PURE__ */ H('<span class="sending-indicator svelte-1uqoiy7" aria-label="Sending message" role="status"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svelte-1uqoiy7"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="currentColor" opacity="0.3"></path><path d="M12 2C6.48 2 2 6.48 2 12H4C4 7.58 7.58 4 12 4V2Z" fill="currentColor"><animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite"></animateTransform></path></svg></span>'), Sl = /* @__PURE__ */ H('<span class="failed-indicator svelte-1uqoiy7" aria-label="Message failed to send" role="alert"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svelte-1uqoiy7"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#ef4444"></path><path d="M11 7H13V13H11V7ZM11 15H13V17H11V15Z" fill="#ef4444"></path></svg></span>'), El = /* @__PURE__ */ H('<div role="listitem"><div class="message-bubble svelte-1uqoiy7"><span class="message-content"> </span> <!> <!></div> <div class="message-time svelte-1uqoiy7"> </div></div>');
const Il = {
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
  }`
};
function Gn(t, e) {
  ct(e, !0), Pt(t, Il);
  let s = As(e, "message", 7);
  function r(x) {
    return new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", hour12: !0 }).format(x);
  }
  const i = /* @__PURE__ */ je(() => s().role === "user");
  var n = {
    get message() {
      return s();
    },
    set message(x) {
      s(x), lt();
    }
  }, a = El();
  let o;
  var l = Y(a), d = Y(l), u = Y(d, !0);
  G(d);
  var g = re(d, 2);
  {
    var h = (x) => {
      var O = xl();
      D(x, O);
    };
    Ee(g, (x) => {
      s().status === "sending" && x(h);
    });
  }
  var p = re(g, 2);
  {
    var f = (x) => {
      var O = Sl();
      D(x, O);
    };
    Ee(p, (x) => {
      s().status === "failed" && x(f);
    });
  }
  G(l);
  var v = re(l, 2), y = Y(v, !0);
  return G(v), G(a), Tt(
    (x, O) => {
      o = Un(a, 1, "message svelte-1uqoiy7", null, o, { user: m(i), assistant: !m(i) }), Mt(a, "aria-label", m(i) ? "Your message" : "Assistant message"), gr(u, s().content), Mt(v, "aria-label", x), gr(y, O);
    },
    [
      () => `Sent at ${r(s().timestamp)}`,
      () => r(s().timestamp)
    ]
  ), D(t, a), ut(n);
}
Nt(Gn, { message: {} }, [], [], !0);
Za();
var Cl = /* @__PURE__ */ H('<div class="typing-indicator svelte-ej4x60" role="status" aria-live="polite" aria-label="Assistant is typing"><span aria-hidden="true" class="svelte-ej4x60"></span> <span aria-hidden="true" class="svelte-ej4x60"></span> <span aria-hidden="true" class="svelte-ej4x60"></span> <span class="sr-only svelte-ej4x60">Assistant is typing a response</span></div>');
const _l = {
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
function Yn(t, e) {
  ct(e, !1), Pt(t, _l), Qo();
  var s = Oo(), r = ir(s);
  {
    var i = (n) => {
      var a = Cl();
      D(n, a);
    };
    Ee(r, (n) => {
      _.isTyping && n(i);
    });
  }
  D(t, s), ut();
}
Nt(Yn, {}, [], [], !0);
var kl = /* @__PURE__ */ H('<div class="empty-state svelte-qha2j" role="status" aria-label="No messages yet"><div class="empty-icon svelte-qha2j" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-qha2j"><path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16Z" fill="currentColor"></path><path d="M7 9H17V11H7V9ZM7 6H17V8H7V6ZM7 12H14V14H7V12Z" fill="currentColor"></path></svg></div> <p class="svelte-qha2j">Start a conversation</p> <span class="svelte-qha2j">Ask me anything!</span></div>'), Tl = /* @__PURE__ */ H('<div class="messages-container svelte-qha2j" role="list" aria-label="Messages"><!> <!></div>'), Ml = /* @__PURE__ */ H('<div class="error-message svelte-qha2j"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-qha2j"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#ef4444"></path><path d="M11 7H13V13H11V7ZM11 15H13V17H11V15Z" fill="#ef4444"></path></svg> <p class="svelte-qha2j"> </p></div>'), Ol = /* @__PURE__ */ H('<div class="message-list svelte-qha2j" role="log" aria-live="polite" aria-label="Chat conversation"><!> <!></div>');
const Ll = {
  hash: "svelte-qha2j",
  code: `.message-list.svelte-qha2j {flex:1;overflow-y:auto;padding:var(--widget-space-lg);display:flex;flex-direction:column;background:var(--widget-gradient-subtle);position:relative;
    /* iOS momentum scrolling */-webkit-overflow-scrolling:touch;}.empty-state.svelte-qha2j {display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;text-align:center;padding:var(--widget-space-3xl) var(--widget-space-lg);
    animation: fadeIn var(--widget-transition-slow);}.empty-icon.svelte-qha2j {width:80px;height:80px;margin-bottom:var(--widget-space-lg);background:var(--widget-glass);backdrop-filter:blur(var(--widget-blur));border-radius:var(--widget-radius-2xl);display:flex;align-items:center;justify-content:center;box-shadow:var(--widget-shadow-md);
    animation: pulse 2s ease-in-out infinite;}.empty-icon.svelte-qha2j svg:where(.svelte-qha2j) {width:48px;height:48px;color:var(--widget-primary);opacity:0.8;}.empty-state.svelte-qha2j p:where(.svelte-qha2j) {margin:0;font-size:var(--widget-font-size-lg);font-weight:600;color:var(--widget-text);margin-bottom:var(--widget-space-xs);}.empty-state.svelte-qha2j span:where(.svelte-qha2j) {font-size:var(--widget-font-size-sm);color:var(--widget-text-secondary);}.messages-container.svelte-qha2j {display:flex;flex-direction:column;gap:var(--widget-space-md);padding-bottom:var(--widget-space-lg);}.error-message.svelte-qha2j {display:flex;align-items:center;gap:var(--widget-space);padding:var(--widget-space) var(--widget-space-md);background:var(--widget-glass);backdrop-filter:blur(var(--widget-blur));border:1px solid var(--widget-error-light);border-radius:var(--widget-radius-lg);color:var(--widget-error);margin-top:var(--widget-space);box-shadow:var(--widget-shadow);
    animation: slideUp var(--widget-transition-slow);}.error-message.svelte-qha2j svg:where(.svelte-qha2j) {width:20px;height:20px;flex-shrink:0;}.error-message.svelte-qha2j p:where(.svelte-qha2j) {margin:0;font-size:var(--widget-font-size-sm);font-weight:500;}
  
  /* Custom scrollbar */.message-list.svelte-qha2j::-webkit-scrollbar {width:6px;}.message-list.svelte-qha2j::-webkit-scrollbar-track {background:transparent;}.message-list.svelte-qha2j::-webkit-scrollbar-thumb {background:var(--widget-border);border-radius:var(--widget-radius-full);}.message-list.svelte-qha2j::-webkit-scrollbar-thumb:hover {background:var(--widget-text-muted);}
  
  /* Dark theme adjustments */`
};
function Qn(t, e) {
  ct(e, !0), Pt(t, Ll);
  let s, r = !0;
  qt(() => {
    _.messages, r && i();
  }), qt(() => {
    _.isTyping, r && i();
  }), qt(() => {
    _.streamingUpdateSignal, r && _.isStreaming && i();
  });
  async function i() {
    await Mn(), s && (s.scrollTop = s.scrollHeight);
  }
  function n() {
    if (s) {
      const { scrollTop: h, scrollHeight: p, clientHeight: f } = s;
      r = p - h - f < 100;
    }
  }
  ci(() => {
    i();
  });
  var a = Ol(), o = Y(a);
  {
    var l = (h) => {
      var p = kl();
      D(h, p);
    }, d = (h) => {
      var p = Tl(), f = Y(p);
      No(f, 17, () => _.messages, (y) => y.id, (y, x) => {
        Gn(y, {
          get message() {
            return m(x);
          }
        });
      });
      var v = re(f, 2);
      Yn(v, {}), G(p), D(h, p);
    };
    Ee(o, (h) => {
      _.messages.length === 0 ? h(l) : h(d, !1);
    });
  }
  var u = re(o, 2);
  {
    var g = (h) => {
      var p = Ml(), f = re(Y(p), 2), v = Y(f, !0);
      G(f), G(p), Tt(() => gr(v, _.error)), D(h, p);
    };
    Ee(u, (h) => {
      _.error && h(g);
    });
  }
  G(a), di(a, (h) => s = h, () => s), ko("scroll", a, n), D(t, a), ut();
}
Nt(Qn, {}, [], [], !0);
class Rl {
  constructor(e) {
    this.isDebugMode = e.debug ?? !1;
  }
  /**
   * Log debug information - only shows in debug mode
   */
  log(e, s, r) {
    this.isDebugMode && (r !== void 0 ? console.log(`[${e}] ${s}:`, r) : console.log(`[${e}] ${s}`));
  }
  /**
   * Log warning information - only shows in debug mode
   */
  warn(e, s, r) {
    this.isDebugMode && (r !== void 0 ? console.warn(`[${e}] ${s}:`, r) : console.warn(`[${e}] ${s}`));
  }
  /**
   * Log error information - always shows (even in production)
   */
  error(e, s, r) {
    r !== void 0 ? console.error(`[${e}] ${s}:`, r) : console.error(`[${e}] ${s}`);
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
function fi(t) {
  return new Rl(t);
}
function Lr() {
  var t;
  try {
    return typeof process < "u" && ((t = process.env) == null ? void 0 : t.NODE_ENV) === "test" ? process.env.ENABLE_TEST_DEBUG === "true" : localStorage.getItem("ai-widget-debug") === "true" || window._aiWidgetDebug === !0 || !1;
  } catch {
    return !1;
  }
}
const P = {
  isDebugEnabled: Lr,
  log: (t, e, s) => {
    Lr() && (s !== void 0 ? console.log(`[${t}] ${e}:`, s) : console.log(`[${t}] ${e}`));
  },
  warn: (t, e, s) => {
    Lr() && (s !== void 0 ? console.warn(`[${t}] ${e}:`, s) : console.warn(`[${t}] ${e}`));
  },
  error: (t, e, s) => {
    s !== void 0 ? console.error(`[${t}] ${e}:`, s) : console.error(`[${t}] ${e}`);
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
    const e = Date.now(), s = Math.random().toString(36).substr(2, 9), r = `msg_${e}_${s}`;
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
  setData(e, s) {
    this.messageMap.set(e, s);
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
    const s = `api_${Date.now()}_fallback`;
    return this.currentId = s, s;
  }
  /**
   * Clean up old correlation data (call periodically to prevent memory leaks)
   */
  cleanup(e = 3e5) {
    const s = Date.now();
    for (const [r] of this.messageMap.entries()) {
      const i = r.match(/(\d+)/);
      if (i) {
        const n = parseInt(i[1], 10);
        s - n > e && this.messageMap.delete(r);
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
  return Wt.getInstance();
}
var Pl = /* @__PURE__ */ H('<div class="input-bar svelte-1a8gd73"><textarea class="input-field svelte-1a8gd73" rows="1" aria-label="Message input"></textarea> <button class="send-button svelte-1a8gd73" aria-label="Send message"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-1a8gd73"><path d="M2 21L23 12L2 3V10L17 12L2 14V21Z" fill="currentColor"></path></svg></button></div>');
const Nl = {
  hash: "svelte-1a8gd73",
  code: `.input-bar.svelte-1a8gd73 {display:flex;align-items:flex-end;gap:var(--widget-space-sm);padding:var(--widget-space-sm) var(--widget-space-md);background:var(--widget-surface-elevated);border-top:1px solid var(--widget-border);border-radius:0 0 var(--widget-radius-xl) var(--widget-radius-xl);position:relative;min-height:48px;}.input-field.svelte-1a8gd73 {flex:1;padding:var(--widget-space-xs) var(--widget-space-sm);border:1px solid var(--widget-border);border-radius:var(--widget-radius-2xl);font-size:var(--widget-font-size-sm);font-weight:var(--widget-font-weight-normal);line-height:var(--widget-line-height-normal);letter-spacing:var(--widget-letter-spacing-normal);resize:none;outline:none;
    /* Spring-based transitions */transition:border-color 0.15s ease,
                box-shadow 0.2s var(--widget-ease-out-expo),
                background 0.15s ease;font-family:var(--widget-font-family);max-height:120px;min-height:36px;height:36px;overflow-y:auto;background:var(--widget-background);
    /* Inner shadow for depth */box-shadow:var(--widget-shadow-inner);}.input-field.svelte-1a8gd73:focus {border-color:var(--widget-primary);
    /* Glow ring on focus */box-shadow:var(--widget-shadow-inner),
                0 0 0 3px rgba(var(--widget-primary-rgb), 0.12);background:var(--widget-background);}.input-field.svelte-1a8gd73:disabled {background:var(--widget-surface);border-color:var(--widget-border-subtle);cursor:not-allowed;opacity:0.6;color:var(--widget-text-muted);box-shadow:none;}.input-field.svelte-1a8gd73::placeholder {color:var(--widget-text-muted);font-weight:var(--widget-font-weight-normal);font-style:normal;opacity:0.7;}.send-button.svelte-1a8gd73 {width:36px;height:36px;border-radius:var(--widget-radius-full);background:var(--widget-gradient);border:1px solid rgba(255, 255, 255, 0.1);color:var(--widget-text-inverse);cursor:pointer;display:flex;align-items:center;justify-content:center;
    /* Spring-based transitions */transition:transform 0.2s var(--widget-ease-spring),
                box-shadow 0.2s var(--widget-ease-out-expo),
                background 0.15s ease;flex-shrink:0;box-shadow:var(--widget-shadow-button);position:relative;overflow:hidden;}.send-button.svelte-1a8gd73:hover:not(:disabled) {background:var(--widget-gradient-hover);box-shadow:var(--widget-shadow-glow);transform:scale(1.05);}.send-button.svelte-1a8gd73:active:not(:disabled) {background:var(--widget-primary-dark);box-shadow:var(--widget-shadow-sm);transform:scale(0.97);transition-duration:0.1s;}

  /* Focus-visible for accessibility */.send-button.svelte-1a8gd73:focus-visible {outline:2px solid var(--widget-primary);outline-offset:2px;box-shadow:var(--widget-shadow-glow);}.send-button.svelte-1a8gd73:disabled {opacity:0.4;cursor:not-allowed;background:var(--widget-surface);color:var(--widget-text-muted);border-color:var(--widget-border);box-shadow:none;transform:none;}.send-button.svelte-1a8gd73 svg:where(.svelte-1a8gd73) {width:16px;height:16px;
    /* Spring-based icon animation */transition:transform 0.2s var(--widget-ease-spring);filter:drop-shadow(0 1px 1px rgba(0, 0, 0, 0.1));}.send-button.svelte-1a8gd73:hover:not(:disabled) svg:where(.svelte-1a8gd73) {
    /* Subtle rotation + scale on hover */transform:translateX(2px) rotate(12deg) scale(1.1);}
  
  /* Modern custom scrollbar for textarea */.input-field.svelte-1a8gd73::-webkit-scrollbar {width:6px;}.input-field.svelte-1a8gd73::-webkit-scrollbar-track {background:transparent;}.input-field.svelte-1a8gd73::-webkit-scrollbar-thumb {background:var(--widget-border-light);border-radius:var(--widget-radius-full);}.input-field.svelte-1a8gd73::-webkit-scrollbar-thumb:hover {background:var(--widget-border);}
  
  /* Mobile: Enhanced touch targets (WCAG 2.1 AA) */
  @media (max-width: 767px) {.input-bar.svelte-1a8gd73 {padding:var(--widget-space-xs) var(--widget-space-sm);gap:var(--widget-space-xs);min-height:56px;border-radius:0; /* Full-screen on mobile */}.input-field.svelte-1a8gd73 {font-size:16px; /* Prevent zoom on iOS */padding:var(--widget-space-xs) var(--widget-space-sm);min-height:var(--widget-touch-target-min);height:var(--widget-touch-target-min);}.send-button.svelte-1a8gd73 {width:var(--widget-touch-target-min);height:var(--widget-touch-target-min);}.send-button.svelte-1a8gd73 svg:where(.svelte-1a8gd73) {width:20px;height:20px;}
  }

  /* Landscape: Compact height for more content area */
  @media (max-width: 767px) and (orientation: landscape) {.input-bar.svelte-1a8gd73 {min-height:48px;}
  }

  /* Theme adjustments */`
};
function Kn(t, e) {
  ct(e, !0), Pt(t, Nl);
  let s = As(e, "onsend", 7), r = As(e, "disabled", 7, !1), i = /* @__PURE__ */ T(""), n;
  function a() {
    var x, O, B, oe;
    const v = He().generate();
    P.log("InputBar", "handleSend() called", {
      correlationId: v,
      rawInputValue: m(i),
      rawLength: ((x = m(i)) == null ? void 0 : x.length) || 0,
      rawType: typeof m(i),
      disabled: r(),
      isTyping: _.isTyping
    });
    const y = m(i).trim();
    P.log("InputBar", "After trimming", {
      correlationId: v,
      original: m(i),
      trimmed: y,
      originalLength: ((O = m(i)) == null ? void 0 : O.length) || 0,
      trimmedLength: (y == null ? void 0 : y.length) || 0,
      wasEmptyAfterTrim: !y,
      hadWhitespaceOnly: (((B = m(i)) == null ? void 0 : B.length) || 0) > 0 && !y
    }), y && !r() && !_.isTyping ? (P.log("InputBar", "Conditions met, calling onsend", {
      correlationId: v,
      trimmedValue: y,
      trimmedLength: y.length,
      willSend: !0
    }), He().setCurrent(v), (oe = s()) == null || oe(y), I(i, ""), l()) : P.log("InputBar", "Send blocked", {
      correlationId: v,
      hasContent: !!y,
      disabled: r(),
      isTyping: _.isTyping,
      trimmedValue: y || "(empty)",
      reason: y ? r() ? "disabled" : _.isTyping ? "typing in progress" : "unknown" : "empty content"
    });
  }
  function o(v) {
    v.key === "Enter" && !v.shiftKey && (v.preventDefault(), a());
  }
  function l() {
    n && (n.style.height = "auto", n.style.height = Math.min(n.scrollHeight, 120) + "px");
  }
  const d = /* @__PURE__ */ je(() => r() || _.isTyping || _.error !== null), u = /* @__PURE__ */ je(() => _.isTyping ? "Waiting for response..." : _.error ? "Error occurred" : Fs.placeholder);
  var g = {
    get onsend() {
      return s();
    },
    set onsend(v) {
      s(v), lt();
    },
    get disabled() {
      return r();
    },
    set disabled(v = !1) {
      r(v), lt();
    }
  }, h = Pl(), p = Y(h);
  uo(p), p.__keydown = o, p.__input = l, di(p, (v) => n = v, () => n);
  var f = re(p, 2);
  return f.__click = a, G(h), Tt(
    (v) => {
      Mt(p, "placeholder", m(u)), p.disabled = m(d), f.disabled = v;
    },
    [() => m(d) || !m(i).trim()]
  ), Yo(p, () => m(i), (v) => I(i, v)), D(t, h), ut(g);
}
Ir(["keydown", "input", "click"]);
Nt(Kn, { onsend: {}, disabled: {} }, [], [], !0);
class Dl {
  /**
   * Validate message content and length
   */
  static validate(e) {
    const s = He().getCurrent();
    if (P.log("MessageValidator", "validate() called", {
      correlationId: s,
      message: e,
      messageType: typeof e,
      messageLength: (e == null ? void 0 : e.length) || 0,
      isNullOrUndefined: e == null
    }), typeof e != "string") {
      const a = "Message is required and must be a string";
      return P.log("MessageValidator", "Validation failed - invalid type", { correlationId: s, message: e, error: a }), {
        isValid: !1,
        error: a
      };
    }
    if (e.length === 0) {
      const a = "Message is too short";
      return P.log("MessageValidator", "Validation failed - empty string", { correlationId: s, message: e, error: a }), {
        isValid: !1,
        error: a
      };
    }
    const r = e.trim();
    if (P.log("MessageValidator", "After trimming", {
      correlationId: s,
      original: e,
      trimmed: r,
      originalLength: e.length,
      trimmedLength: r.length,
      wasWhitespaceOnly: e.length > 0 && r.length === 0
    }), r.length < ht.MIN_LENGTH) {
      const a = "Message is too short";
      return P.log("MessageValidator", "Validation failed - too short", {
        correlationId: s,
        trimmedLength: r.length,
        minLength: ht.MIN_LENGTH,
        error: a
      }), {
        isValid: !1,
        error: a
      };
    }
    if (r.length > ht.MAX_LENGTH) {
      const a = `Message exceeds maximum length of ${ht.MAX_LENGTH} characters`;
      return P.log("MessageValidator", "Validation failed - too long", {
        correlationId: s,
        trimmedLength: r.length,
        maxLength: ht.MAX_LENGTH,
        error: a
      }), {
        isValid: !1,
        error: a
      };
    }
    P.log("MessageValidator", "Starting HTML sanitization", {
      correlationId: s,
      inputContent: r,
      inputLength: r.length
    });
    const i = this.sanitizeHTML(r);
    P.log("MessageValidator", "HTML sanitization complete", {
      correlationId: s,
      original: r,
      sanitized: i,
      originalLength: r.length,
      sanitizedLength: i.length,
      contentRemoved: r.length !== i.length,
      contentChanged: r !== i,
      removedContent: r.length !== i.length ? {
        removed: r.replace(i, ""),
        difference: r.length - i.length
      } : null
    });
    const n = {
      isValid: !0,
      sanitizedValue: i
    };
    return P.log("MessageValidator", "Final validation result", { correlationId: s, result: n }), n;
  }
  /**
   * Basic HTML sanitization
   */
  static sanitizeHTML(e) {
    const s = He().getCurrent();
    P.log("MessageValidator", "sanitizeHTML() input", {
      correlationId: s,
      input: e,
      inputLength: e.length
    });
    let r = e, i = 0;
    const n = r;
    r = r.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ""), r !== n && P.log("MessageValidator", `Step ${++i} - Removed script tags`, {
      correlationId: s,
      before: n,
      after: r,
      removed: n.length - r.length
    });
    const a = r;
    r = r.replace(/href\s*=\s*["']javascript:[^"']*["']/gi, 'href=""'), r !== a && P.log("MessageValidator", `Step ${++i} - Removed javascript: protocol`, {
      correlationId: s,
      before: a,
      after: r,
      removed: a.length - r.length
    });
    const o = r;
    r = r.replace(/\s*on\w+\s*=\s*["'][^"']*["']/gi, ""), r !== o && P.log("MessageValidator", `Step ${++i} - Removed event handlers:`, {
      correlationId: s,
      before: o,
      after: r,
      removed: o.length - r.length
    });
    const l = r;
    return r = r.replace(/src\s*=\s*["']data:[^"']*["']/gi, 'src=""'), r !== l && P.log("MessageValidator", `Step ${++i} - Removed data: URLs:`, {
      correlationId: s,
      before: l,
      after: r,
      removed: l.length - r.length
    }), P.log("MessageValidator", "sanitizeHTML() result", {
      correlationId: s,
      originalInput: e,
      finalResult: r,
      inputLength: e.length,
      resultLength: r.length,
      totalRemoved: e.length - r.length,
      wasModified: e !== r
    }), r;
  }
}
class $n {
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
  constructor(e, s, r = !1) {
    super(e), this.name = "ChatWidgetError", this.context = s, this.timestamp = /* @__PURE__ */ new Date(), this.isRetryable = r, Error.captureStackTrace && Error.captureStackTrace(this, me);
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
class jt extends me {
  constructor(e, s, r, i) {
    super(e, { ...i, statusCode: s, endpoint: r }, !0), this.name = "NetworkError", this.statusCode = s, this.endpoint = r;
  }
}
class Jn extends me {
  constructor(e, s, r, i, n) {
    super(e, { ...n, wsUrl: s, closeCode: r, closeReason: i }, !0), this.name = "WebSocketError", this.wsUrl = s, this.closeCode = r, this.closeReason = i;
  }
}
class Ds extends me {
  constructor(e, s, r, i, n) {
    super(e, { ...n, field: s, value: r, expectedType: i }, !1), this.name = "ValidationError", this.field = s, this.value = r, this.expectedType = i;
  }
}
class Zn extends me {
  constructor(e, s, r, i) {
    super(e, { ...i, configKey: s, configValue: r }, !1), this.name = "ConfigurationError", this.configKey = s, this.configValue = r;
  }
}
class Xn extends me {
  constructor(e, s, r, i) {
    super(e, { ...i, clientId: s, statusCode: r }, !1), this.name = "AuthenticationError", this.clientId = s, this.statusCode = r;
  }
}
class Ft extends me {
  constructor(e, s, r, i) {
    super(e, { ...i, retryAfter: s, limit: r }, !0), this.name = "RateLimitError", this.retryAfter = s, this.limit = r;
  }
}
class ea extends me {
  constructor(e, s, r, i) {
    super(e, { ...i, storageType: s, operation: r }, !0), this.name = "StorageError", this.storageType = s, this.operation = r;
  }
}
class ta extends me {
  constructor(e, s, r, i) {
    super(e, { ...i, timeout: s, operation: r }, !0), this.name = "TimeoutError", this.timeout = s, this.operation = r;
  }
}
function Ni(t) {
  return t instanceof me ? t.isRetryable : !!(t instanceof TypeError && t.message.includes("fetch"));
}
function Ul(t) {
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
function zl(t) {
  return t instanceof jt ? t.statusCode === 404 ? "Service temporarily unavailable. Please try again later." : t.statusCode === 429 || t instanceof Ft ? "Too many requests. Please wait a moment and try again." : t.statusCode && t.statusCode >= 500 ? "Server error. Please try again in a few moments." : t.statusCode && (t.statusCode === 400 || t.statusCode === 401 || t.statusCode === 403) ? t.message : "Unable to connect to the server. Please check your internet connection." : t instanceof Jn ? "Connection lost. Attempting to reconnect..." : t instanceof Xn ? "Access denied. Please check your configuration." : t instanceof Ds ? t.message : t instanceof Zn ? "Widget configuration error. Please contact support." : t instanceof ta ? "Request timed out. Please try again." : t instanceof ea ? "Unable to save data. Please check your browser settings." : "Something went wrong. Please try again.";
}
class Us {
  /**
   * Process and categorize errors using custom error classes
   */
  static handle(e, s) {
    const r = Ul(e);
    let i;
    return e instanceof jt ? i = "NETWORK_ERROR" : e instanceof Jn ? i = "WEBSOCKET_ERROR" : e instanceof Ds ? i = "VALIDATION_ERROR" : e instanceof Zn ? i = "CONFIGURATION_ERROR" : e instanceof Xn ? i = "AUTHENTICATION_ERROR" : e instanceof Ft ? i = "RATE_LIMIT_ERROR" : e instanceof ea ? i = "STORAGE_ERROR" : e instanceof ta ? i = "TIMEOUT_ERROR" : e instanceof me ? i = "WIDGET_ERROR" : i = "UNKNOWN_ERROR", {
      message: zl(e),
      code: i,
      isUserFacing: !0,
      shouldRetry: Ni(e),
      context: {
        ...s,
        metadata: {
          ...s.metadata,
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
    return e && typeof e == "object" && "shouldRetry" in e ? e.shouldRetry : Ni(e);
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
class Kr {
  // Note: No default production URL - must be configured explicitly
  // via environment variable, runtime config, or attribute
  /**
   * Resolve API and WebSocket URLs based on client ID and environment
   */
  static resolveUrls(e, s = {}) {
    const r = $n.validate(e);
    if (!r.isValid)
      throw new Error(`Invalid client ID for URL resolution: ${r.error}`);
    const i = r.sanitizedValue;
    return this.isDevelopmentEnvironment(s.environment) ? this.resolveDevelopmentUrls(i) : this.resolveProductionUrls(i, s.baseUrl);
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
  static resolveProductionUrls(e, s) {
    const r = s || "";
    if (!r)
      throw new Error(
        `Widget configuration error: Production API URL not set.

Configure via:
1. Environment: VITE_API_BASE_URL=https://your-api.com
2. Runtime: window.AIChat = { apiUrl: "https://...", wsUrl: "wss://..." }
3. Attribute: <assistant-widget api-url="https://...">

See documentation for setup guide.`
      );
    const i = this.isLocalhostUrl(r) ? r : this.ensureHttps(r);
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
  static buildApiUrl(e, s) {
    return this.buildUrlWithPath(e, `/api/v1/widget/${s}`);
  }
  /**
   * Build WebSocket URL by properly appending path to base URL and converting protocol
   */
  static buildWsUrl(e, s) {
    const r = this.buildUrlWithPath(e, `/api/v1/communication/${s}/ws`);
    return this.convertToWebSocket(r);
  }
  /**
   * Safely append a path to a base URL, handling query parameters and fragments correctly
   */
  static buildUrlWithPath(e, s) {
    try {
      const r = new URL(e);
      return r.pathname = (r.pathname === "/" ? "" : r.pathname) + s, r.toString();
    } catch {
      const i = e.endsWith("/") ? "" : "/";
      return e + i + s.substring(1);
    }
  }
  /**
   * Convert HTTP/HTTPS URL to WS/WSS URL
   */
  static convertToWebSocket(e) {
    try {
      const s = new URL(e);
      return s.protocol === "https:" ? s.protocol = "wss:" : s.protocol === "http:" && (s.protocol = "ws:"), s.toString();
    } catch {
      return e.replace("https://", "wss://").replace("http://", "ws://");
    }
  }
  /**
   * Check if URL points to localhost
   */
  static isLocalhostUrl(e) {
    try {
      const s = new URL(e);
      return ["localhost", "127.0.0.1", "::1"].includes(s.hostname);
    } catch {
      return e.includes("localhost") || e.includes("127.0.0.1");
    }
  }
}
class Wl {
  constructor(e) {
    try {
      const s = window, r = s.AIChat || s.ChatWidget || {}, i = e ? this.parseElementAttributes(e) : {}, n = {
        ..._e,
        ...r,
        ...i
      };
      if (!n.clientId)
        throw new Error("Widget configuration missing: clientId is required");
      const a = $n.validate(n.clientId);
      if (!a.isValid)
        throw new Error(`Invalid client ID: ${a.error}`);
      const l = n.apiUrl && n.wsUrl ? { apiUrl: n.apiUrl, wsUrl: n.wsUrl } : Kr.resolveUrls(a.sanitizedValue);
      this.config = {
        ...n,
        clientId: a.sanitizedValue,
        apiUrl: l.apiUrl,
        wsUrl: l.wsUrl
      };
    } catch (s) {
      const r = Us.handle(s, {
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
    const s = {}, r = e.getAttributeNames();
    for (const i of r) {
      const n = Wn.attributeToProperty(i);
      if (!n) continue;
      const a = e.getAttribute(i);
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
            s[n] = a;
            break;
          case "theme":
            jn(a) && (s.theme = a);
            break;
          case "position":
            (a === "bottom-left" || a === "bottom-right") && (s.position = a);
            break;
          case "debug":
          case "autoInit":
            s[n] = a === "true" || a === "";
            break;
          case "companyName":
            s.companyName = a, e.hasAttribute("title") || (s.title = `${a} Assistant`);
            break;
        }
    }
    return s;
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
const xs = /* @__PURE__ */ new Map();
let Hs = !1;
function jl() {
  try {
    const t = "__storage_test__";
    return localStorage.setItem(t, t), localStorage.removeItem(t), !0;
  } catch {
    return !1;
  }
}
Hs = !jl();
function Fl(t) {
  try {
    return Hs ? xs.get(t) ?? null : localStorage.getItem(t);
  } catch {
    return xs.get(t) ?? null;
  }
}
function Hl(t, e) {
  try {
    return Hs ? (xs.set(t, e), !0) : (localStorage.setItem(t, e), !0);
  } catch {
    return xs.set(t, e), Hs = !0, !1;
  }
}
function Bl(t) {
  try {
    if (Hs) {
      xs.delete(t);
      return;
    }
    localStorage.removeItem(t);
  } catch {
    xs.delete(t);
  }
}
const Te = class Te {
  /**
   * @param storageAdapter - Optional storage adapter for testing (defaults to localStorage via safe utils)
   */
  constructor(e) {
    this.storageAdapter = e, this.visitorId = this.getOrCreateVisitorId();
  }
  getOrCreateVisitorId() {
    var s;
    let e = this.getItem(Te.VISITOR_ID_KEY);
    return e || (e = this.generateVisitorId(), this.setItem(Te.VISITOR_ID_KEY, e), (s = window.AIChat) != null && s.debug && P.log("ChatWidget", "Created new visitor", e)), e;
  }
  /**
   * Internal storage access methods that use adapter if available
   */
  getItem(e) {
    return this.storageAdapter ? this.storageAdapter.getItem(e) : Fl(e);
  }
  setItem(e, s) {
    this.storageAdapter ? this.storageAdapter.setItem(e, s) : Hl(e, s);
  }
  removeItem(e) {
    this.storageAdapter ? this.storageAdapter.removeItem(e) : Bl(e);
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
    const s = this.getSessionHistory();
    s.push({
      id: e,
      timestamp: Date.now(),
      active: !0
    });
    const r = s.slice(-10);
    this.setItem(
      Te.SESSION_HISTORY_KEY,
      JSON.stringify(r)
    );
  }
  getSessionHistory() {
    const e = this.getItem(Te.SESSION_HISTORY_KEY);
    return e ? JSON.parse(e) : [];
  }
  getLastActiveSession() {
    const s = this.getSessionHistory().filter(
      (r) => r.active && Date.now() - r.timestamp < ie.SESSION_TIMEOUT
    );
    return s.length > 0 ? s[s.length - 1].id : null;
  }
  /**
   * Mark a session as inactive when it ends
   */
  markSessionInactive(e) {
    const r = this.getSessionHistory().map(
      (i) => i.id === e ? { ...i, active: !1 } : i
    );
    this.setItem(
      Te.SESSION_HISTORY_KEY,
      JSON.stringify(r)
    );
  }
  /**
   * Clear visitor data for GDPR compliance
   */
  clearVisitorData() {
    this.removeItem(Te.VISITOR_ID_KEY), this.removeItem(Te.SESSION_HISTORY_KEY), this.visitorId = this.generateVisitorId();
  }
};
Te.VISITOR_ID_KEY = Ri.VISITOR_ID, Te.SESSION_HISTORY_KEY = Ri.SESSIONS;
let $r = Te;
class Ls {
  /**
   * Get API endpoint URL with base path resolved
   */
  static getApiUrl(e, s) {
    const { apiUrl: r } = Kr.resolveUrls(s.clientId, s.options);
    switch (e) {
      case "init":
        return `${r}/init`;
      case "chat":
        return `${r}/chat`;
      case "sessionHealth":
        if (!s.sessionId)
          throw new Error("sessionId required for sessionHealth endpoint");
        return `${r}/session/${s.sessionId}/health`;
      default:
        throw new Error(`Unknown API endpoint: ${e}`);
    }
  }
  /**
   * Get WebSocket URL with query parameters
   */
  static getWebSocketUrl(e) {
    const { wsUrl: s } = Kr.resolveUrls(e.clientId, e.options), r = new URLSearchParams({
      session_id: e.sessionId
    });
    return e.visitorId && r.append("visitor_id", e.visitorId), `${s}?${r}`;
  }
}
class ql {
  constructor(e, s) {
    this.sessionId = null, this.config = e, this.visitor = s, this.debugLogger = fi(e.getAll());
  }
  /**
   * Initialize widget session with backend
   */
  async initialize() {
    try {
      const e = new AbortController(), s = setTimeout(() => e.abort(), ie.API_TIMEOUT), r = Ls.getApiUrl("init", {
        clientId: this.config.clientId
      }), i = {
        client_id: this.config.clientId,
        visitor_id: this.visitor.getVisitorId(),
        page_url: window.location.href,
        referrer: document.referrer
      };
      this.config.debug && this.debugLogger.log("APIClient", "Initializing with", {
        endpoint: "init",
        fullUrl: r,
        payload: i
      });
      const n = He().getCurrent(), a = await fetch(r, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: window.location.origin,
          "X-Correlation-ID": n
        },
        body: JSON.stringify({ body: i }),
        signal: e.signal
      });
      if (clearTimeout(s), !a.ok) {
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
          throw new Ft(
            `Rate limit exceeded. Please try again in ${d} seconds.`,
            d
          );
        }
        throw new jt(
          `Failed to initialize widget: ${a.statusText}`,
          a.status,
          r
        );
      }
      const o = await a.json();
      return this.sessionId = o.session_id, this.visitor.saveSessionId(o.session_id), o;
    } catch (e) {
      if (e instanceof Ds || e instanceof jt || e instanceof Ft)
        throw e;
      const s = Us.handle(e, {
        component: "APIClient",
        action: "initialize"
      });
      throw new Error(s.message);
    }
  }
  /**
   * Send chat message (HTTP fallback)
   */
  async sendMessage(e) {
    var r, i;
    const s = He().getCurrent();
    try {
      this.debugLogger.log("APIClient", "sendMessage() called", {
        correlationId: s,
        message: e,
        messageLength: (e == null ? void 0 : e.length) || 0,
        messageType: typeof e,
        sessionId: this.sessionId,
        clientId: this.config.clientId
      });
      const n = Dl.validate(e);
      if (this.debugLogger.log("APIClient", "Message validation result", {
        correlationId: s,
        input: e,
        isValid: n.isValid,
        error: n.error,
        sanitizedValue: n.sanitizedValue,
        sanitizedLength: ((r = n.sanitizedValue) == null ? void 0 : r.length) || 0,
        contentChanged: e !== n.sanitizedValue
      }), !n.isValid)
        throw this.debugLogger.error("APIClient", "Validation failed", { correlationId: s, error: n.error }), new Ds(n.error || "Validation failed", "message", e);
      this.sessionId || (this.debugLogger.log("APIClient", "No session ID, attempting to resume or initialize...", { correlationId: s }), await this.resumeSession() || await this.initialize());
      const a = new AbortController(), o = setTimeout(() => a.abort(), ie.API_TIMEOUT), l = {
        body: {
          client_id: this.config.clientId,
          visitor_id: this.visitor.getVisitorId(),
          session_id: this.sessionId,
          message: n.sanitizedValue
        }
      }, d = Ls.getApiUrl("chat", {
        clientId: this.config.clientId
      });
      this.debugLogger.log("APIClient", "HTTP request payload", {
        correlationId: s,
        url: d,
        payload: l,
        messageContent: l.body.message,
        messageLength: ((i = l.body.message) == null ? void 0 : i.length) || 0
      });
      const u = await fetch(d, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: window.location.origin,
          "X-Correlation-ID": s
        },
        body: JSON.stringify(l),
        signal: a.signal
      });
      if (clearTimeout(o), this.debugLogger.log("APIClient", "HTTP response status", {
        correlationId: s,
        ok: u.ok,
        status: u.status,
        statusText: u.statusText
      }), !u.ok) {
        if (u.status === 429) {
          const h = u.headers.get("Retry-After"), p = h ? parseInt(h, 10) : 60;
          throw new Ft(
            `Rate limit exceeded. Please try again in ${p} seconds.`,
            p
          );
        }
        throw new jt(
          `Failed to send message: ${u.statusText}`,
          u.status,
          d
        );
      }
      const g = await u.json();
      return this.debugLogger.log("APIClient", "HTTP response data", { correlationId: s, result: g }), g;
    } catch (n) {
      if (this.debugLogger.error("APIClient", "sendMessage() error", { correlationId: s, error: n }), n instanceof Ds || n instanceof jt || n instanceof Ft)
        throw n;
      const a = Us.handle(n, {
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
      const e = new AbortController(), s = setTimeout(() => e.abort(), ie.API_TIMEOUT), r = Ls.getApiUrl("sessionHealth", {
        clientId: this.config.clientId,
        sessionId: this.sessionId
      }), i = {
        client_id: this.config.clientId,
        visitor_id: this.visitor.getVisitorId()
      };
      this.config.debug && this.debugLogger.log("APIClient", "Validating session health", {
        sessionId: this.sessionId,
        fullUrl: r,
        payload: i
      });
      const n = He().getCurrent(), a = await fetch(r, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: window.location.origin,
          "X-Correlation-ID": n
        },
        body: JSON.stringify({ body: i }),
        signal: e.signal
      });
      if (clearTimeout(s), a.ok) {
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
      const e = new AbortController(), s = setTimeout(() => e.abort(), ie.API_TIMEOUT), r = Ls.getApiUrl("sessionHealth", {
        clientId: this.config.clientId,
        sessionId: this.sessionId
      }), i = {
        client_id: this.config.clientId,
        visitor_id: this.visitor.getVisitorId()
      }, n = He().getCurrent(), a = await fetch(r, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: window.location.origin,
          "X-Correlation-ID": n
        },
        body: JSON.stringify({ body: i }),
        signal: e.signal
      });
      return clearTimeout(s), a.ok ? await a.json() : a.status === 404 ? {
        status: "invalid",
        session_id: this.sessionId
      } : a.status === 410 ? {
        status: "expired",
        session_id: this.sessionId
      } : null;
    } catch (e) {
      const s = Us.handle(e, {
        component: "APIClient",
        action: "checkSessionHealth",
        sessionId: this.sessionId
      });
      return this.config.debug && this.debugLogger.warn("APIClient", "Session health check error", s.message), null;
    }
  }
  getSessionId() {
    return this.sessionId;
  }
}
var Rs = /* @__PURE__ */ ((t) => (t.DISCONNECTED = "disconnected", t.CONNECTING = "connecting", t.CONNECTED = "connected", t.ERROR = "error", t))(Rs || {});
class Vl {
  constructor(e, s) {
    this.ws = null, this.sessionId = null, this.state = "disconnected", this.messageQueue = [], this.reconnectAttempts = 0, this.maxReconnectAttempts = ie.MAX_RECONNECT_ATTEMPTS, this.reconnectDelay = ie.RECONNECT_DELAY, this.heartbeatInterval = null, this.listeners = /* @__PURE__ */ new Map(), this.abortController = null, this.cleanupFunctions = [], this.config = e, this.visitor = s, this.debugLogger = fi(e.getAll());
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
        const s = Ls.getWebSocketUrl({
          clientId: this.config.clientId,
          sessionId: e,
          visitorId: this.visitor.getVisitorId()
        });
        this.ws = new WebSocket(s), this.setupEventHandlers();
      } catch (s) {
        const r = Us.handle(s, {
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
      var e, s, r;
      this.debugLogger.log("WebSocketManager", "WebSocket connected successfully", {
        url: (e = this.ws) == null ? void 0 : e.url,
        readyState: (s = this.ws) == null ? void 0 : s.readyState,
        sessionId: this.sessionId,
        messageListeners: ((r = this.listeners.get("message")) == null ? void 0 : r.size) || 0,
        totalListeners: this.listeners.size,
        timestamp: Date.now()
      }), this.setState(
        "connected"
        /* CONNECTED */
      ), this.reconnectAttempts = 0, this.flushMessageQueue(), this.startHeartbeat();
    }, this.ws.onmessage = (e) => {
      var s, r, i, n, a, o, l, d, u;
      this.debugLogger.log("WebSocketManager", "Raw message received", {
        data: e.data,
        type: typeof e.data,
        length: ((s = e.data) == null ? void 0 : s.length) || 0,
        timestamp: Date.now(),
        wsReadyState: (r = this.ws) == null ? void 0 : r.readyState,
        sessionId: this.sessionId
      });
      try {
        const g = JSON.parse(e.data);
        this.debugLogger.log("WebSocketManager", "Parsed message", {
          message: g,
          messageType: g.type,
          content: (i = g.data) == null ? void 0 : i.content,
          hasContent: !!((n = g.data) != null && n.content),
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
      var s, r;
      this.debugLogger.error("WebSocketManager", "WebSocket error details", {
        error: e,
        errorType: e.type,
        readyState: (s = this.ws) == null ? void 0 : s.readyState,
        url: (r = this.ws) == null ? void 0 : r.url,
        sessionId: this.sessionId,
        connectionState: this.state,
        timestamp: Date.now()
      }), this.setState(
        "error"
        /* ERROR */
      );
    }, this.ws.onclose = (e) => {
      var s;
      this.debugLogger.log("WebSocketManager", "WebSocket closed details", {
        code: e.code,
        reason: e.reason,
        wasClean: e.wasClean,
        readyState: (s = this.ws) == null ? void 0 : s.readyState,
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
    var i, n, a;
    const s = He().getCurrent();
    this.debugLogger.log("WebSocketManager", "send() called", {
      correlationId: s,
      message: e,
      messageLength: (e == null ? void 0 : e.length) || 0,
      messageType: typeof e,
      wsState: this.state,
      wsReadyState: (i = this.ws) == null ? void 0 : i.readyState,
      sessionId: this.sessionId
    });
    const r = JSON.stringify({
      type: "message",
      message: e,
      correlation_id: s,
      timestamp: Date.now()
    });
    if (this.debugLogger.log("WebSocketManager", "JSON payload created", {
      correlationId: s,
      data: r,
      dataLength: r.length,
      parsedBack: JSON.parse(r)
    }), this.state === "connected" && ((n = this.ws) == null ? void 0 : n.readyState) === WebSocket.OPEN)
      this.debugLogger.log("WebSocketManager", "Sending via WebSocket immediately", { correlationId: s }), this.ws.send(r);
    else {
      if (this.debugLogger.log("WebSocketManager", "WebSocket not ready, queuing message", {
        correlationId: s,
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
      this.messageQueue.push(r), this.state === "disconnected" && (this.debugLogger.log("WebSocketManager", "Attempting to reconnect...", { correlationId: s }), this.reconnect());
    }
  }
  flushMessageQueue() {
    var e;
    for (; this.messageQueue.length > 0 && ((e = this.ws) == null ? void 0 : e.readyState) === WebSocket.OPEN; ) {
      const s = this.messageQueue.shift();
      s && this.ws.send(s);
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
    }, ie.HEARTBEAT_INTERVAL), this.cleanupFunctions.push(() => this.stopHeartbeat());
  }
  stopHeartbeat() {
    this.heartbeatInterval && (clearInterval(this.heartbeatInterval), this.heartbeatInterval = null);
  }
  /**
   * Event emitter functionality
   */
  on(e, s) {
    this.listeners.has(e) || this.listeners.set(e, /* @__PURE__ */ new Set()), this.listeners.get(e).add(s);
  }
  off(e, s) {
    var r;
    (r = this.listeners.get(e)) == null || r.delete(s);
  }
  emit(e, s) {
    var r;
    (r = this.listeners.get(e)) == null || r.forEach((i) => i(s));
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
      } catch (s) {
        this.debugLogger.warn("WebSocketManager", "Cleanup function failed", s);
      }
    }), this.cleanupFunctions = [];
  }
  /**
   * Test WebSocket bidirectional communication
   * Sends a test message to verify the connection works both ways
   */
  testConnection() {
    var e, s;
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
        readyState: (s = this.ws) == null ? void 0 : s.readyState
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
class Gl {
  constructor(e, s, r) {
    this.typingTimeout = null, this.hasHiddenTypingForCurrentStream = !1, this.lastCompletionTimestamp = null, this.lastMessageSentTimestamp = null, this.COMPLETION_GRACE_PERIOD_MS = ie.COMPLETION_GRACE_PERIOD, this.chatStore = e, this.uiStore = s, this.debugLogger = r;
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
    const s = e.data.content;
    if (!s) {
      this.debugLogger.warn("ChatController", "Assistant chunk without content");
      return;
    }
    if (this.hasHiddenTypingForCurrentStream || (this.chatStore.setTyping(!1), this.hasHiddenTypingForCurrentStream = !0, this.debugLogger.log("ChatController", "Typing indicator hidden - first chunk arrived"), this.typingTimeout && (clearTimeout(this.typingTimeout), this.typingTimeout = null)), this.chatStore.isStreaming)
      this.chatStore.appendToStreamingMessage(s);
    else {
      const r = this.chatStore.startStreamingMessage();
      this.chatStore.appendToStreamingMessage(s), this.debugLogger.log("ChatController", "Started streaming message", { messageId: r });
    }
    this.uiStore.isOpen || this.uiStore.markUnread();
  }
  handleAssistantComplete(e) {
    this.debugLogger.log("ChatController", "Assistant complete", {
      isStreaming: this.chatStore.isStreaming
    }), this.typingTimeout && (clearTimeout(this.typingTimeout), this.typingTimeout = null), this.chatStore.isStreaming && this.chatStore.finishStreamingMessage(), this.hasHiddenTypingForCurrentStream = !1, this.lastCompletionTimestamp = Date.now(), this.chatStore.setTyping(!1), this.uiStore.isOpen || this.uiStore.markUnread();
  }
  handleConnectionEstablished(e) {
    const s = e.data.initial_message;
    s && !this.chatStore.hasMessages && (this.chatStore.addMessage(s, "assistant"), this.debugLogger.log("ChatController", "Initial message added"));
  }
  handleTypingIndicator() {
    const e = this.lastCompletionTimestamp ? Date.now() - this.lastCompletionTimestamp : 1 / 0, s = this.lastMessageSentTimestamp ? Date.now() - this.lastMessageSentTimestamp : 1 / 0;
    if (e < this.COMPLETION_GRACE_PERIOD_MS && s > ie.CONNECTION_DELAY) {
      this.debugLogger.log("ChatController", "Ignoring typing indicator - grace period");
      return;
    }
    !this.hasHiddenTypingForCurrentStream && !this.chatStore.isStreaming ? (this.debugLogger.log("ChatController", "Processing typing indicator"), this.chatStore.setTyping(!0), this.typingTimeout && clearTimeout(this.typingTimeout), this.typingTimeout = window.setTimeout(() => {
      this.debugLogger.log("ChatController", "Typing indicator timeout"), this.chatStore.setTyping(!1), this.typingTimeout = null;
    }, ie.TYPING_INDICATOR_TIMEOUT)) : this.debugLogger.log("ChatController", "Ignoring typing indicator - already streaming");
  }
  handleError(e) {
    this.debugLogger.error("ChatController", "Error message received", e.data.message), this.typingTimeout && (clearTimeout(this.typingTimeout), this.typingTimeout = null), this.chatStore.isStreaming && this.chatStore.finishStreamingMessage(), this.hasHiddenTypingForCurrentStream = !1;
    const s = e.data.message || "An error occurred";
    this.chatStore.setError(s);
  }
  /**
   * Set typing indicator with timeout fallback
   * Used when sending messages over HTTP (non-WebSocket)
   */
  setTypingWithTimeout(e = ie.TYPING_FALLBACK_TIMEOUT) {
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
var Yl = /* @__PURE__ */ H('<button class="restart-button svelte-zsv8oa" aria-describedby="error-message">Retry Connection</button> <span id="error-message" class="sr-only svelte-zsv8oa">Connection lost. Unable to reconnect. Click to retry connection.</span>', 1), Ql = /* @__PURE__ */ H('<button class="restart-button svelte-zsv8oa" aria-describedby="error-message">Retry Connection</button> <span id="error-message" class="sr-only svelte-zsv8oa">Connection error occurred. Click to retry connection.</span>', 1), Kl = /* @__PURE__ */ H('<div class="error-banner svelte-zsv8oa" role="alert" aria-live="polite"><!></div>'), $l = /* @__PURE__ */ H('<button class="backdrop svelte-zsv8oa" aria-label="Close chat overlay" tabindex="-1"></button>'), Jl = /* @__PURE__ */ H('<div class="chat-container svelte-zsv8oa" role="dialog" aria-label="Chat assistant" aria-modal="true" tabindex="-1"><!> <!> <!> <!></div> <!>', 1), Zl = /* @__PURE__ */ H('<div class="widget-container svelte-zsv8oa"><!> <!></div>');
const Xl = {
  hash: "svelte-zsv8oa",
  code: `.widget-container.svelte-zsv8oa {position:fixed;bottom:var(--widget-space-lg);z-index:var(--widget-z-base);font-family:var(--widget-font-family);}.widget-container[data-position="bottom-right"].svelte-zsv8oa {right:var(--widget-space-lg);}.widget-container[data-position="bottom-left"].svelte-zsv8oa {left:var(--widget-space-lg);}.chat-container.svelte-zsv8oa {
    /* Mobile-first: Full-screen takeover */position:fixed;top:0;left:0;width:100%;height:100%;background:var(--widget-background);border-radius:0;box-shadow:none;border:none;display:flex;flex-direction:column;overflow:hidden;z-index:var(--widget-z-modal);}.backdrop.svelte-zsv8oa {display:block;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0, 0, 0, 0.5);z-index:calc(var(--widget-z-modal) - 1);}
  
  /* Screen reader only content */.sr-only.svelte-zsv8oa {position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0;}.error-banner.svelte-zsv8oa {position:absolute;bottom:75px;left:50%;transform:translateX(-50%);background:var(--widget-background);padding:var(--widget-space) var(--widget-space-lg);border-radius:var(--widget-radius-lg);box-shadow:var(--widget-shadow-lg);border:1px solid var(--widget-error);z-index:10;}.restart-button.svelte-zsv8oa {background:var(--widget-primary);color:var(--widget-text-inverse);border:none;padding:var(--widget-space) var(--widget-space-lg);border-radius:var(--widget-radius-md);font-size:var(--widget-font-size-sm);font-weight:600;cursor:pointer;transition:all var(--widget-transition);font-family:var(--widget-font-family);}.restart-button.svelte-zsv8oa:hover {background:var(--widget-primary-hover);}.restart-button.svelte-zsv8oa:active {background:var(--widget-primary-dark);}
  
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
  }`
};
function sa(t, e) {
  ct(e, !0), Pt(t, Xl);
  let s = As(e, "hostElement", 7), r, i, n, a, o, l;
  const d = He();
  let u = !1, g = !1, h = null, p = /* @__PURE__ */ T(V(Rs.DISCONNECTED)), f = /* @__PURE__ */ T(
    !1
    // Track if max reconnection attempts exhausted
  ), v = /* @__PURE__ */ T(null), y = null;
  function x() {
    var R;
    if ((R = s()) != null && R.hasAttribute("data-theme")) return;
    window.matchMedia("(prefers-color-scheme: dark)").matches && s() && s().setAttribute("data-theme", "dark");
  }
  function O(w) {
    const R = [
      "button:not([disabled])",
      "textarea:not([disabled])",
      "input:not([disabled])",
      '[tabindex]:not([tabindex="-1"])',
      "a[href]"
    ].join(", "), S = w.querySelectorAll(R);
    if (S.length === 0) return;
    const J = S[0], ft = S[S.length - 1];
    return requestAnimationFrame(() => J.focus()), { firstFocusable: J, lastFocusable: ft };
  }
  function B(w) {
    if (w.key === "Escape" && W.isOpen) {
      w.preventDefault(), W.close(), q();
      return;
    }
    if (w.key === "Tab" && m(v)) {
      const R = [
        "button:not([disabled])",
        "textarea:not([disabled])",
        "input:not([disabled])",
        '[tabindex]:not([tabindex="-1"])',
        "a[href]"
      ].join(", "), S = m(v).querySelectorAll(R);
      if (S.length === 0) return;
      const J = S[0], ft = S[S.length - 1];
      w.shiftKey && document.activeElement === J ? (w.preventDefault(), ft.focus()) : !w.shiftKey && document.activeElement === ft && (w.preventDefault(), J.focus());
    }
  }
  function oe() {
    y = document.activeElement;
  }
  function q() {
    y && typeof y.focus == "function" && requestAnimationFrame(() => y == null ? void 0 : y.focus()), y = null;
  }
  function Ie() {
    m(v) && O(m(v));
  }
  ci(async () => {
    try {
      if (r = new Wl(s()), l = fi(r.getAll()), i = new $r(), n = new ql(r, i), a = new Vl(r, i), o = new Gl(_, W, l), s()) {
        const { configStore: w } = await Promise.resolve().then(() => cl);
        w.loadFromAttributes(s());
      }
      Q(), x(), l.log("ChatWidget", "Attaching WebSocket listeners"), a.on("message", _r), a.on("stateChange", (w) => {
        l.log("ChatWidget", "WebSocket state changed", {
          oldState: m(p),
          newState: w,
          timestamp: Date.now()
        }), I(p, w, !0);
      }), a.on("error", (w) => {
        l.error("ChatWidget", "WebSocket error event", w), h = w.error, _.setError(w.error);
      }), a.on("connectionFailed", (w) => {
        l.error("ChatWidget", "WebSocket connection failed after max attempts", w), I(f, !0), h = w.error, _.setError(w.error);
      }), l.log("ChatWidget", "WebSocket listeners attached successfully"), W.isOpen && await ce(), l.log("ChatWidget", "Services initialized successfully");
    } catch (w) {
      l.error("ChatWidget", "Initialization failed", w), h = w instanceof Error ? w.message : "Failed to initialize chat";
    }
  }), Zo(() => {
    const w = n == null ? void 0 : n.getSessionId();
    w && i.markSessionInactive(w), a == null || a.disconnect(), o == null || o.cleanup();
  });
  async function ce() {
    var w;
    if (!(u || g)) {
      g = !0;
      try {
        if (W.setLoading(!0), await n.resumeSession()) {
          const S = n.getSessionId();
          S && (await a.connect(S), setTimeout(
            () => {
              l.log("ChatWidget", "Testing WebSocket connection after session resumption..."), a.testConnection();
            },
            ie.CONNECTION_DELAY
          ));
        } else {
          const S = await n.initialize();
          (w = S.assistant_info) != null && w.assistant_name && Fs.setBackendTitle(S.assistant_info.assistant_name), await a.connect(S.session_id), setTimeout(
            () => {
              l.log("ChatWidget", "Testing WebSocket connection after initialization..."), a.testConnection();
            },
            ie.CONNECTION_DELAY
          ), S.settings && te(S.settings);
        }
        u = !0;
      } catch (R) {
        h = R instanceof Error ? R.message : "Failed to initialize", _.setError(h);
      } finally {
        W.setLoading(!1), g = !1;
      }
    }
  }
  function Q() {
    const w = r.getAll();
    requestAnimationFrame(() => {
      if (s() && (s().setAttribute("data-theme", w.theme || "modern"), w.primary_color || w.accent_color)) {
        const R = w.accent_color || w.primary_color;
        if (R) {
          const S = ui(R, "#6b46c1");
          s().style.setProperty("--widget-primary", S), s().style.setProperty("--widget-primary-hover", Oe(S, -20)), s().style.setProperty("--widget-primary-light", Oe(S, 20)), s().style.setProperty("--widget-primary-dark", Oe(S, -30)), s().style.setProperty("--widget-gradient", `linear-gradient(135deg, ${S} 0%, ${Oe(S, 20)} 100%)`), s().style.setProperty("--widget-gradient-hover", `linear-gradient(135deg, ${Oe(S, -20)} 0%, ${S} 100%)`);
        }
      }
    });
  }
  function te(w) {
    requestAnimationFrame(() => {
      s() && (w.theme && typeof w.theme == "string" && s().setAttribute("data-theme", w.theme), w.primary_color && typeof w.primary_color == "string" && s().style.setProperty("--widget-primary", w.primary_color));
    });
  }
  function _r(w) {
    o.handleMessage(w);
  }
  async function ra(w) {
    const R = d.getCurrent();
    l.log("ChatWidget", "handleSendMessage called with content", {
      correlationId: R,
      content: w,
      length: (w == null ? void 0 : w.length) || 0,
      trimmed: (w == null ? void 0 : w.trim()) || "",
      type: typeof w
    });
    const S = _.addMessage(w, "user");
    if (o.resetForNewMessage(), l.log("ChatWidget", "Message added to store", {
      correlationId: R,
      messageId: S.id,
      content: S.content,
      length: S.content.length
    }), u || (l.log("ChatWidget", "Widget not initialized, initializing...", { correlationId: R }), await ce()), l.log("ChatWidget", "Connection state", {
      correlationId: R,
      connectionState: m(p),
      isConnected: m(p) === Rs.CONNECTED,
      routingTo: m(p) === Rs.CONNECTED ? "WebSocket" : "HTTP API"
    }), m(p) === Rs.CONNECTED) {
      l.log("ChatWidget", "Sending via WebSocket", { correlationId: R, content: w });
      try {
        a.send(w), _.updateMessageStatus(S.id, "sent"), l.log("ChatWidget", "User message marked as sent", { messageId: S.id });
      } catch (J) {
        l.error("ChatWidget", "WebSocket send error", J), _.updateMessageStatus(S.id, "failed"), _.setError("Failed to send message. Please try again.");
        return;
      }
    } else
      try {
        l.log("ChatWidget", "Sending via HTTP API", { correlationId: R, content: w }), o.setTypingWithTimeout();
        const J = await n.sendMessage(w);
        l.log("ChatWidget", "HTTP API response received", {
          correlationId: R,
          response: J.response,
          sessionId: J.session_id
        }), _.addMessage(J.response, "assistant"), _.setTyping(!1), W.isOpen || W.markUnread();
      } catch (J) {
        l.error("ChatWidget", "HTTP API error", J), h = "Failed to send message. Please try again.", _.setError(h), _.updateMessageStatus(S.id, "failed"), _.setTyping(!1);
      }
  }
  async function ia() {
    l.log("ChatWidget", "Toggle clicked, current state", m(Js)), W.isOpen || oe(), W.toggle(), await new Promise((w) => setTimeout(w, 0)), l.log("ChatWidget", "New state", W.isOpen), W.isOpen && !u && r && await ce(), W.isOpen ? requestAnimationFrame(() => Ie()) : q();
  }
  function na() {
    _.clearMessages(), _.setError(null), h = null;
  }
  function aa() {
    l.log("ChatWidget", "Manual retry connection requested"), I(f, !1), h = null, _.setError(null), a == null || a.retryConnection();
  }
  const Js = /* @__PURE__ */ je(() => W.isOpen), oa = /* @__PURE__ */ je(() => W.isLoading), la = /* @__PURE__ */ je(() => (r == null ? void 0 : r.position) || "bottom-right");
  var da = {
    get hostElement() {
      return s();
    },
    set hostElement(w) {
      s(w), lt();
    }
  }, Zs = Zl(), hi = Y(Zs);
  {
    var ca = (w) => {
      qn(w, { onclick: ia });
    };
    Ee(hi, (w) => {
      m(Js) || w(ca);
    });
  }
  var ua = re(hi, 2);
  {
    var fa = (w) => {
      var R = Jl(), S = ir(R);
      S.__keydown = B;
      var J = Y(S);
      Vn(J, {
        onclose: () => {
          W.close(), q();
        }
      });
      var ft = re(J, 2);
      Qn(ft, {});
      var pi = re(ft, 2);
      {
        let Ce = /* @__PURE__ */ je(() => _.error !== null || m(oa));
        Kn(pi, {
          onsend: ra,
          get disabled() {
            return m(Ce);
          }
        });
      }
      var ga = re(pi, 2);
      {
        var ha = (Ce) => {
          var gt = Kl(), ma = Y(gt);
          {
            var wa = (Dt) => {
              var _s = Yl(), kr = ir(_s);
              kr.__click = aa, lr(2), D(Dt, _s);
            }, ba = (Dt) => {
              var _s = Ql(), kr = ir(_s);
              kr.__click = na, lr(2), D(Dt, _s);
            };
            Ee(ma, (Dt) => {
              m(f) ? Dt(wa) : Dt(ba, !1);
            });
          }
          G(gt), D(Ce, gt);
        };
        Ee(ga, (Ce) => {
          _.error && Ce(ha);
        });
      }
      G(S), di(S, (Ce) => I(v, Ce), () => m(v));
      var pa = re(S, 2);
      {
        var va = (Ce) => {
          var gt = $l();
          gt.__click = () => W.close(), _i(3, gt, () => rl, () => ({ duration: 200 })), D(Ce, gt);
        };
        Ee(pa, (Ce) => {
          m(Js) && Ce(va);
        });
      }
      _i(3, S, () => il, () => ({ y: 20, duration: 300 })), D(w, R);
    };
    Ee(ua, (w) => {
      m(Js) && w(fa);
    });
  }
  return G(Zs), Tt(() => Mt(Zs, "data-position", m(la))), D(t, Zs), ut(da);
}
Ir(["keydown", "click"]);
Nt(sa, { hostElement: {} }, [], [], !0);
const gi = {
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
}, Jr = {
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
function ed(t = gi) {
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
  
  /* Borders - Theme-aware for dark/light mode */
  --widget-border: ${t.border || (t.isDark ? "#334155" : "#e2e8f0")};
  --widget-border-light: ${t.borderLight || (t.isDark ? "#475569" : "#f1f5f9")};
  --widget-border-subtle: ${t.borderSubtle || (t.isDark ? "#1e293b" : "#f8fafc")};
  --widget-border-focus: var(--widget-primary);
  
  /* Primary RGB for glow effects */
  --widget-primary-rgb: ${((e = t.primary.replace("#", "").match(/.{2}/g)) == null ? void 0 : e.map((s) => parseInt(s, 16)).join(", ")) || "30, 91, 168"};

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
}`;
}
function td(t = gi) {
  return ed(t);
}
const sd = {
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
}, rd = {
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
}, Di = {
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
}, id = {
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
}, nd = {
  brand: "generic",
  primary: "#1e5ba8",
  // Bot Blue for primary actions
  primaryHover: "#0f2d5a",
  // Darker blue on hover
  primaryLight: "#4a7dc4",
  // Lighter blue variant
  primaryDark: "#0f2d5a",
  // Dark blue
  background: "#0a0e14",
  // leogv.me deep dark background
  surface: "#13181f",
  // Slightly elevated surface
  surfaceHover: "#1a2029",
  // Hover state for surfaces
  glass: "rgba(10, 14, 20, 0.85)",
  glassDark: "rgba(19, 24, 31, 0.90)",
  text: "#e6e8eb",
  // Light gray text
  textSecondary: "#9da2a9",
  // Muted secondary text
  textMuted: "#6b7280",
  // Even more muted
  textInverse: "#0a0e14",
  // Inverse text on light backgrounds
  // Dark mode-aware borders - Subtle gold tint
  isDark: !0,
  border: "rgba(244, 169, 50, 0.2)",
  // Subtle gold border
  borderLight: "rgba(244, 169, 50, 0.3)",
  // Slightly more visible gold
  borderSubtle: "rgba(244, 169, 50, 0.1)"
  // Very subtle gold hint
}, ad = {
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
}, od = {
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
function ld(t) {
  return {
    "bot-brewers": Jr,
    modern: sd,
    corporate: rd,
    friendly: Di,
    playful: Di,
    // Alias
    minimal: id,
    dark: nd,
    elegant: ad,
    bold: od,
    generic: gi,
    default: Jr
  }[t.toLowerCase()] || null;
}
class Ui extends HTMLElement {
  constructor() {
    super(), this._app = null, this._currentTheme = "bot-brewers", this._shadowRoot = this.attachShadow({ mode: "open" });
  }
  // Default to Bot Brewers theme
  // Define which attributes we should observe for changes
  static get observedAttributes() {
    return ["theme", "data-theme", "accent-color", "position", "title", "client-id"];
  }
  async connectedCallback() {
    var i, n;
    const e = this.getAttribute("client-id"), s = window, r = ((i = s.AIChat) == null ? void 0 : i.clientId) || ((n = s.ChatWidget) == null ? void 0 : n.clientId);
    if (!e && !r) {
      P.error("ChatWidget", 'Configuration missing. Please set client-id attribute or window.AIChat = { clientId: "your_client_id" }');
      return;
    }
    this.mountApp();
  }
  disconnectedCallback() {
    this._app && (Gr(this._app), this._app = null);
  }
  attributeChangedCallback(e, s, r) {
    s !== r && ((e === "theme" || e === "data-theme") && r && (this._currentTheme = r, this.updateStyles()), e === "accent-color" && r && this.updateAccentColor(r), e === "client-id" && r && this._app && (P.log("ChatWidget", `Client ID changed from ${s} to ${r}, remounting widget`), Gr(this._app), this._app = null, this.mountApp()));
  }
  mountApp() {
    const e = this.getAttribute("theme") || this.getAttribute("data-theme") || "bot-brewers";
    this._currentTheme = e;
    const s = document.createElement("div");
    s.className = "widget-root";
    const r = document.createElement("style");
    r.textContent = this.getStyles(), this._shadowRoot.innerHTML = "", this._shadowRoot.appendChild(r), this._shadowRoot.appendChild(s), this._app = li(sa, {
      target: s,
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
    const s = ld(e) || Jr;
    return td(s);
  }
  updateStyles() {
    const e = this._shadowRoot.querySelector("style");
    e && (e.textContent = this.getStyles());
  }
  updateAccentColor(e) {
    const s = this._shadowRoot.querySelector(".widget-root");
    s && Promise.resolve().then(() => ll).then(({ adjustColor: r }) => {
      s.style.setProperty("--widget-primary", e), s.style.setProperty("--widget-primary-hover", r(e, -20)), s.style.setProperty("--widget-primary-light", r(e, 20)), s.style.setProperty("--widget-primary-dark", r(e, -30));
    });
  }
}
customElements.get("assistant-widget") ? customElements.get("chat-widget") || customElements.define("chat-widget", Ui) : customElements.define("assistant-widget", Ui);
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", zi) : zi();
function zi() {
  if (document.querySelector("assistant-widget, chat-widget"))
    return;
  const t = window, e = t.AIChat || t.ChatWidget;
  if (e != null && e.clientId) {
    if (e.autoInit === !1) {
      P.log("ChatWidget", "Auto-initialization disabled");
      return;
    }
    const s = document.createElement("assistant-widget");
    document.body.appendChild(s), P.log("ChatWidget", "Auto-initialized with client ID", e.clientId);
  }
}
export {
  Ui as ChatWidgetElement
};
