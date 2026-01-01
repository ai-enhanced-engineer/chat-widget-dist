var wa = Object.defineProperty;
var hr = (t) => {
  throw TypeError(t);
};
var ba = (t, e, s) => e in t ? wa(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s;
var W = (t, e, s) => ba(t, typeof e != "symbol" ? e + "" : e, s), _i = (t, e, s) => e.has(t) || hr("Cannot " + s);
var c = (t, e, s) => (_i(t, e, "read from private field"), s ? s.call(t) : e.get(t)), A = (t, e, s) => e.has(t) ? hr("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, s), b = (t, e, s, i) => (_i(t, e, "write to private field"), i ? i.call(t, s) : e.set(t, s), s), N = (t, e, s) => (_i(t, e, "access private method"), s);
var Wr = Array.isArray, ya = Array.prototype.indexOf, pi = Array.from, ri = Object.keys, ni = Object.defineProperty, Ht = Object.getOwnPropertyDescriptor, Ur = Object.getOwnPropertyDescriptors, Aa = Object.prototype, xa = Array.prototype, $i = Object.getPrototypeOf, pr = Object.isExtensible;
function Sa(t) {
  return typeof t == "function";
}
const Cs = () => {
};
function Ea(t) {
  return t();
}
function Oi(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function jr() {
  var t, e, s = new Promise((i, r) => {
    t = i, e = r;
  });
  return { promise: s, resolve: t, reject: e };
}
const K = 2, Ji = 4, vi = 8, Ia = 1 << 24, qe = 16, Xe = 32, dt = 64, mi = 128, Oe = 512, X = 1024, pe = 2048, He = 4096, he = 8192, Je = 16384, Vs = 32768, It = 65536, vr = 1 << 17, Fr = 1 << 18, Ot = 1 << 19, Hr = 1 << 20, rt = 1 << 25, Ct = 32768, Li = 1 << 21, Zi = 1 << 22, nt = 1 << 23, Bt = Symbol("$state"), Ca = Symbol("legacy props"), _a = Symbol(""), Wt = new class extends Error {
  constructor() {
    super(...arguments);
    W(this, "name", "StaleReactionError");
    W(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}(), Xi = 3, As = 8;
function Br(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function ka() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Ta(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ma() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Oa(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function La() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ra() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Pa() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Na() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Da() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function za() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Wa = 1, Ua = 2, ja = 16, Fa = 2, Ha = 4, Ba = 8, qa = 4, Va = 1, Ga = 2, qr = "[", wi = "[!", er = "]", ps = {}, J = Symbol(), Ya = "http://www.w3.org/1999/xhtml";
function bi(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Qa() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let L = !1;
function $e(t) {
  L = t;
}
let I;
function ve(t) {
  if (t === null)
    throw bi(), ps;
  return I = t;
}
function yi() {
  return ve(/* @__PURE__ */ Ve(I));
}
function V(t) {
  if (L) {
    if (/* @__PURE__ */ Ve(I) !== null)
      throw bi(), ps;
    I = t;
  }
}
function ai(t = 1) {
  if (L) {
    for (var e = t, s = I; e--; )
      s = /** @type {TemplateNode} */
      /* @__PURE__ */ Ve(s);
    I = s;
  }
}
function oi(t = !0) {
  for (var e = 0, s = I; ; ) {
    if (s.nodeType === As) {
      var i = (
        /** @type {Comment} */
        s.data
      );
      if (i === er) {
        if (e === 0) return s;
        e -= 1;
      } else (i === qr || i === wi) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ve(s)
    );
    t && s.remove(), s = r;
  }
}
function Vr(t) {
  if (!t || t.nodeType !== As)
    throw bi(), ps;
  return (
    /** @type {Comment} */
    t.data
  );
}
function Gr(t) {
  return t === this.v;
}
function Ka(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Yr(t) {
  return !Ka(t, this.v);
}
let xs = !1;
function $a() {
  xs = !0;
}
let z = null;
function vs(t) {
  z = t;
}
function ct(t, e = !1, s) {
  z = {
    p: z,
    i: !1,
    c: null,
    e: null,
    s: t,
    x: null,
    l: xs && !e ? { s: null, u: null, $: [] } : null
  };
}
function ut(t) {
  var e = (
    /** @type {ComponentContext} */
    z
  ), s = e.e;
  if (s !== null) {
    e.e = null;
    for (var i of s)
      vn(i);
  }
  return t !== void 0 && (e.x = t), e.i = !0, z = e.p, t ?? /** @type {T} */
  {};
}
function Gs() {
  return !xs || z !== null && z.l === null;
}
let pt = [];
function Qr() {
  var t = pt;
  pt = [], Oi(t);
}
function Ss(t) {
  if (pt.length === 0 && !Ls) {
    var e = pt;
    queueMicrotask(() => {
      e === pt && Qr();
    });
  }
  pt.push(t);
}
function Ja() {
  for (; pt.length > 0; )
    Qr();
}
function Kr(t) {
  var e = T;
  if (e === null)
    return k.f |= nt, t;
  if (e.f & Vs)
    ms(t, e);
  else {
    if (!(e.f & mi))
      throw t;
    e.b.error(t);
  }
}
function ms(t, e) {
  for (; e !== null; ) {
    if (e.f & mi)
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
const Js = /* @__PURE__ */ new Set();
let E = null, Xs = null, j = null, xe = [], Ai = null, Ri = !1, Ls = !1;
var Vt, Gt, vt, mt, Fs, Yt, Qt, Q, Pi, _s, Ni, $r, Jr;
const fi = class fi {
  constructor() {
    A(this, Q);
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
    A(this, Fs, null);
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
    W(this, "skipped_effects", /* @__PURE__ */ new Set());
    W(this, "is_fork", !1);
  }
  is_deferred() {
    return this.is_fork || c(this, mt) > 0;
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var i;
    xe = [], Xs = null, this.apply();
    var s = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const r of e)
      N(this, Q, Pi).call(this, r, s);
    this.is_fork || N(this, Q, $r).call(this), this.is_deferred() ? (N(this, Q, _s).call(this, s.effects), N(this, Q, _s).call(this, s.render_effects)) : (Xs = this, E = null, mr(s.render_effects), mr(s.effects), Xs = null, (i = c(this, Fs)) == null || i.resolve()), j = null;
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
      if (Zr(), E !== null && E !== this)
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
      ee(e, He), _t(e);
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
    return (c(this, Fs) ?? b(this, Fs, jr())).promise;
  }
  static ensure() {
    if (E === null) {
      const e = E = new fi();
      Js.add(E), Ls || fi.enqueue(() => {
        E === e && e.flush();
      });
    }
    return E;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    Ss(e);
  }
  apply() {
  }
};
Vt = new WeakMap(), Gt = new WeakMap(), vt = new WeakMap(), mt = new WeakMap(), Fs = new WeakMap(), Yt = new WeakMap(), Qt = new WeakMap(), Q = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {EffectTarget} target
 */
Pi = function(e, s) {
  var u;
  e.f ^= X;
  for (var i = e.first; i !== null; ) {
    var r = i.f, n = (r & (Xe | dt)) !== 0, a = n && (r & X) !== 0, o = a || (r & he) !== 0 || this.skipped_effects.has(i);
    if (i.f & mi && ((u = i.b) != null && u.is_pending()) && (s = {
      parent: s,
      effect: i,
      effects: [],
      render_effects: []
    }), !o && i.fn !== null) {
      n ? i.f ^= X : r & Ji ? s.effects.push(i) : Qs(i) && (i.f & qe && c(this, Yt).add(i), Ws(i));
      var l = i.first;
      if (l !== null) {
        i = l;
        continue;
      }
    }
    var d = i.parent;
    for (i = i.next; i === null && d !== null; )
      d === s.effect && (N(this, Q, _s).call(this, s.effects), N(this, Q, _s).call(this, s.render_effects), s = /** @type {EffectTarget} */
      s.parent), i = d.next, d = d.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
_s = function(e) {
  for (const s of e)
    s.f & pe ? c(this, Yt).add(s) : s.f & He && c(this, Qt).add(s), N(this, Q, Ni).call(this, s.deps), ee(s, X);
}, /**
 * @param {Value[] | null} deps
 */
Ni = function(e) {
  if (e !== null)
    for (const s of e)
      !(s.f & K) || !(s.f & Ct) || (s.f ^= Ct, N(this, Q, Ni).call(
        this,
        /** @type {Derived} */
        s.deps
      ));
}, $r = function() {
  if (c(this, mt) === 0) {
    for (const e of c(this, Vt)) e();
    c(this, Vt).clear();
  }
  c(this, vt) === 0 && N(this, Q, Jr).call(this);
}, Jr = function() {
  var n;
  if (Js.size > 1) {
    this.previous.clear();
    var e = j, s = !0, i = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const a of Js) {
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
        var r = xe;
        xe = [];
        const d = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
        for (const g of o)
          Xr(g, l, d, u);
        if (xe.length > 0) {
          E = a, a.apply();
          for (const g of xe)
            N(n = a, Q, Pi).call(n, g, i);
          a.deactivate();
        }
        xe = r;
      }
    }
    E = null, j = e;
  }
  this.committed = !0, Js.delete(this);
};
let We = fi;
function lt(t) {
  var e = Ls;
  Ls = !0;
  try {
    for (var s; ; ) {
      if (Ja(), xe.length === 0 && (E == null || E.flush(), xe.length === 0))
        return Ai = null, /** @type {T} */
        s;
      Zr();
    }
  } finally {
    Ls = e;
  }
}
function Zr() {
  var t = St;
  Ri = !0;
  var e = null;
  try {
    var s = 0;
    for (di(!0); xe.length > 0; ) {
      var i = We.ensure();
      if (s++ > 1e3) {
        var r, n;
        Za();
      }
      i.process(xe), at.clear();
    }
  } finally {
    Ri = !1, di(t), Ai = null;
  }
}
function Za() {
  try {
    La();
  } catch (t) {
    ms(t, Ai);
  }
}
let _e = null;
function mr(t) {
  var e = t.length;
  if (e !== 0) {
    for (var s = 0; s < e; ) {
      var i = t[s++];
      if (!(i.f & (Je | he)) && Qs(i) && (_e = /* @__PURE__ */ new Set(), Ws(i), i.deps === null && i.first === null && i.nodes === null && (i.teardown === null && i.ac === null ? bn(i) : i.fn = null), (_e == null ? void 0 : _e.size) > 0)) {
        at.clear();
        for (const r of _e) {
          if (r.f & (Je | he)) continue;
          const n = [r];
          let a = r.parent;
          for (; a !== null; )
            _e.has(a) && (_e.delete(a), n.push(a)), a = a.parent;
          for (let o = n.length - 1; o >= 0; o--) {
            const l = n[o];
            l.f & (Je | he) || Ws(l);
          }
        }
        _e.clear();
      }
    }
    _e = null;
  }
}
function Xr(t, e, s, i) {
  if (!s.has(t) && (s.add(t), t.reactions !== null))
    for (const r of t.reactions) {
      const n = r.f;
      n & K ? Xr(
        /** @type {Derived} */
        r,
        e,
        s,
        i
      ) : n & (Zi | qe) && !(n & pe) && en(r, e, i) && (ee(r, pe), _t(
        /** @type {Effect} */
        r
      ));
    }
}
function en(t, e, s) {
  const i = s.get(t);
  if (i !== void 0) return i;
  if (t.deps !== null)
    for (const r of t.deps) {
      if (e.includes(r))
        return !0;
      if (r.f & K && en(
        /** @type {Derived} */
        r,
        e,
        s
      ))
        return s.set(
          /** @type {Derived} */
          r,
          !0
        ), !0;
    }
  return s.set(t, !1), !1;
}
function _t(t) {
  for (var e = Ai = t; e.parent !== null; ) {
    e = e.parent;
    var s = e.f;
    if (Ri && e === T && s & qe && !(s & Fr))
      return;
    if (s & (dt | Xe)) {
      if (!(s & X)) return;
      e.f ^= X;
    }
  }
  xe.push(e);
}
function Xa(t) {
  let e = 0, s = kt(0), i;
  return () => {
    Ds() && (m(s), xi(() => (e === 0 && (i = Rt(() => t(() => Rs(s)))), e += 1, () => {
      Ss(() => {
        e -= 1, e === 0 && (i == null || i(), i = void 0, Rs(s));
      });
    })));
  };
}
var eo = It | Ot | mi;
function to(t, e, s) {
  new so(t, e, s);
}
var be, fe, Hs, Pe, wt, Ne, ye, le, De, Ye, tt, bt, st, yt, it, gi, F, tn, sn, Di, ei, ti, zi;
class so {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, s, i) {
    A(this, F);
    /** @type {Boundary | null} */
    W(this, "parent");
    A(this, be, !1);
    /** @type {TemplateNode} */
    A(this, fe);
    /** @type {TemplateNode | null} */
    A(this, Hs, L ? I : null);
    /** @type {BoundaryProps} */
    A(this, Pe);
    /** @type {((anchor: Node) => void)} */
    A(this, wt);
    /** @type {Effect} */
    A(this, Ne);
    /** @type {Effect | null} */
    A(this, ye, null);
    /** @type {Effect | null} */
    A(this, le, null);
    /** @type {Effect | null} */
    A(this, De, null);
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
    A(this, it, null);
    A(this, gi, Xa(() => (b(this, it, kt(c(this, bt))), () => {
      b(this, it, null);
    })));
    b(this, fe, e), b(this, Pe, s), b(this, wt, i), this.parent = /** @type {Effect} */
    T.b, b(this, be, !!c(this, Pe).pending), b(this, Ne, rr(() => {
      if (T.b = this, L) {
        const n = c(this, Hs);
        yi(), /** @type {Comment} */
        n.nodeType === As && /** @type {Comment} */
        n.data === wi ? N(this, F, sn).call(this) : N(this, F, tn).call(this);
      } else {
        var r = N(this, F, Di).call(this);
        try {
          b(this, ye, Se(() => i(r)));
        } catch (n) {
          this.error(n);
        }
        c(this, st) > 0 ? N(this, F, ti).call(this) : b(this, be, !1);
      }
      return () => {
        var n;
        (n = c(this, tt)) == null || n.remove();
      };
    }, eo)), L && b(this, fe, I);
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return c(this, be) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!c(this, Pe).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    N(this, F, zi).call(this, e), b(this, bt, c(this, bt) + e), c(this, it) && ws(c(this, it), c(this, bt));
  }
  get_effect_pending() {
    return c(this, gi).call(this), m(
      /** @type {Source<number>} */
      c(this, it)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var s = c(this, Pe).onerror;
    let i = c(this, Pe).failed;
    if (c(this, yt) || !s && !i)
      throw e;
    c(this, ye) && (ne(c(this, ye)), b(this, ye, null)), c(this, le) && (ne(c(this, le)), b(this, le, null)), c(this, De) && (ne(c(this, De)), b(this, De, null)), L && (ve(
      /** @type {TemplateNode} */
      c(this, Hs)
    ), ai(), ve(oi()));
    var r = !1, n = !1;
    const a = () => {
      if (r) {
        Qa();
        return;
      }
      r = !0, n && za(), We.ensure(), b(this, bt, 0), c(this, De) !== null && xt(c(this, De), () => {
        b(this, De, null);
      }), b(this, be, this.has_pending_snippet()), b(this, ye, N(this, F, ei).call(this, () => (b(this, yt, !1), Se(() => c(this, wt).call(this, c(this, fe)))))), c(this, st) > 0 ? N(this, F, ti).call(this) : b(this, be, !1);
    };
    var o = k;
    try {
      de(null), n = !0, s == null || s(e, a), n = !1;
    } catch (l) {
      ms(l, c(this, Ne) && c(this, Ne).parent);
    } finally {
      de(o);
    }
    i && Ss(() => {
      b(this, De, N(this, F, ei).call(this, () => {
        We.ensure(), b(this, yt, !0);
        try {
          return Se(() => {
            i(
              c(this, fe),
              () => e,
              () => a
            );
          });
        } catch (l) {
          return ms(
            l,
            /** @type {Effect} */
            c(this, Ne).parent
          ), null;
        } finally {
          b(this, yt, !1);
        }
      }));
    });
  }
}
be = new WeakMap(), fe = new WeakMap(), Hs = new WeakMap(), Pe = new WeakMap(), wt = new WeakMap(), Ne = new WeakMap(), ye = new WeakMap(), le = new WeakMap(), De = new WeakMap(), Ye = new WeakMap(), tt = new WeakMap(), bt = new WeakMap(), st = new WeakMap(), yt = new WeakMap(), it = new WeakMap(), gi = new WeakMap(), F = new WeakSet(), tn = function() {
  try {
    b(this, ye, Se(() => c(this, wt).call(this, c(this, fe))));
  } catch (e) {
    this.error(e);
  }
  b(this, be, !1);
}, sn = function() {
  const e = c(this, Pe).pending;
  e && (b(this, le, Se(() => e(c(this, fe)))), We.enqueue(() => {
    var s = N(this, F, Di).call(this);
    b(this, ye, N(this, F, ei).call(this, () => (We.ensure(), Se(() => c(this, wt).call(this, s))))), c(this, st) > 0 ? N(this, F, ti).call(this) : (xt(
      /** @type {Effect} */
      c(this, le),
      () => {
        b(this, le, null);
      }
    ), b(this, be, !1));
  }));
}, Di = function() {
  var e = c(this, fe);
  return c(this, be) && (b(this, tt, Le()), c(this, fe).before(c(this, tt)), e = c(this, tt)), e;
}, /**
 * @param {() => Effect | null} fn
 */
ei = function(e) {
  var s = T, i = k, r = z;
  Be(c(this, Ne)), de(c(this, Ne)), vs(c(this, Ne).ctx);
  try {
    return e();
  } catch (n) {
    return Kr(n), null;
  } finally {
    Be(s), de(i), vs(r);
  }
}, ti = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    c(this, Pe).pending
  );
  c(this, ye) !== null && (b(this, Ye, document.createDocumentFragment()), c(this, Ye).append(
    /** @type {TemplateNode} */
    c(this, tt)
  ), xn(c(this, ye), c(this, Ye))), c(this, le) === null && b(this, le, Se(() => e(c(this, fe))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
zi = function(e) {
  var s;
  if (!this.has_pending_snippet()) {
    this.parent && N(s = this.parent, F, zi).call(s, e);
    return;
  }
  b(this, st, c(this, st) + e), c(this, st) === 0 && (b(this, be, !1), c(this, le) && xt(c(this, le), () => {
    b(this, le, null);
  }), c(this, Ye) && (c(this, fe).before(c(this, Ye)), b(this, Ye, null)));
};
function io(t, e, s, i) {
  const r = Gs() ? Ys : rn;
  if (s.length === 0 && t.length === 0) {
    i(e.map(r));
    return;
  }
  var n = E, a = (
    /** @type {Effect} */
    T
  ), o = ro();
  function l() {
    Promise.all(s.map((d) => /* @__PURE__ */ no(d))).then((d) => {
      o();
      try {
        i([...e.map(r), ...d]);
      } catch (u) {
        a.f & Je || ms(u, a);
      }
      n == null || n.deactivate(), li();
    }).catch((d) => {
      ms(d, a);
    });
  }
  t.length > 0 ? Promise.all(t).then(() => {
    o();
    try {
      return l();
    } finally {
      n == null || n.deactivate(), li();
    }
  }) : l();
}
function ro() {
  var t = T, e = k, s = z, i = E;
  return function(n = !0) {
    Be(t), de(e), vs(s), n && (i == null || i.activate());
  };
}
function li() {
  Be(null), de(null), vs(null);
}
// @__NO_SIDE_EFFECTS__
function Ys(t) {
  var e = K | pe, s = k !== null && k.f & K ? (
    /** @type {Derived} */
    k
  ) : null;
  return T !== null && (T.f |= Ot), {
    ctx: z,
    deps: null,
    effects: null,
    equals: Gr,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      J
    ),
    wv: 0,
    parent: s ?? T,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function no(t, e) {
  let s = (
    /** @type {Effect | null} */
    T
  );
  s === null && ka();
  var i = (
    /** @type {Boundary} */
    s.b
  ), r = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), n = kt(
    /** @type {V} */
    J
  ), a = !k, o = /* @__PURE__ */ new Map();
  return vo(() => {
    var h;
    var l = jr();
    r = l.promise;
    try {
      Promise.resolve(t()).then(l.resolve, l.reject).then(() => {
        d === E && d.committed && d.deactivate(), li();
      });
    } catch (p) {
      l.reject(p), li();
    }
    var d = (
      /** @type {Batch} */
      E
    );
    if (a) {
      var u = !i.is_pending();
      i.update_pending_count(1), d.increment(u), (h = o.get(d)) == null || h.reject(Wt), o.delete(d), o.set(d, l);
    }
    const g = (p, f = void 0) => {
      if (d.activate(), f)
        f !== Wt && (n.f |= nt, ws(n, f));
      else {
        n.f & nt && (n.f ^= nt), ws(n, p);
        for (const [v, y] of o) {
          if (o.delete(v), v === d) break;
          y.reject(Wt);
        }
      }
      a && (i.update_pending_count(-1), d.decrement(u));
    };
    l.promise.then(g, (p) => g(null, p || "unknown"));
  }), pn(() => {
    for (const l of o.values())
      l.reject(Wt);
  }), new Promise((l) => {
    function d(u) {
      function g() {
        u === r ? l(n) : d(r);
      }
      u.then(g, g);
    }
    d(r);
  });
}
// @__NO_SIDE_EFFECTS__
function Ue(t) {
  const e = /* @__PURE__ */ Ys(t);
  return Sn(e), e;
}
// @__NO_SIDE_EFFECTS__
function rn(t) {
  const e = /* @__PURE__ */ Ys(t);
  return e.equals = Yr, e;
}
function nn(t) {
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
function ao(t) {
  for (var e = t.parent; e !== null; ) {
    if (!(e.f & K))
      return e.f & Je ? null : (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function tr(t) {
  var e, s = T;
  Be(ao(t));
  try {
    t.f &= ~Ct, nn(t), e = _n(t);
  } finally {
    Be(s);
  }
  return e;
}
function an(t) {
  var e = tr(t);
  if (t.equals(e) || (E != null && E.is_fork || (t.v = e), t.wv = In()), !Lt)
    if (j !== null)
      (Ds() || E != null && E.is_fork) && j.set(t, e);
    else {
      var s = t.f & Oe ? X : He;
      ee(t, s);
    }
}
let Wi = /* @__PURE__ */ new Set();
const at = /* @__PURE__ */ new Map();
let on = !1;
function kt(t, e) {
  var s = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Gr,
    rv: 0,
    wv: 0
  };
  return s;
}
// @__NO_SIDE_EFFECTS__
function M(t, e) {
  const s = kt(t);
  return Sn(s), s;
}
// @__NO_SIDE_EFFECTS__
function ln(t, e = !1, s = !0) {
  var r;
  const i = kt(t);
  return e || (i.equals = Yr), xs && s && z !== null && z.l !== null && ((r = z.l).s ?? (r.s = [])).push(i), i;
}
function _(t, e, s = !1) {
  k !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!je || k.f & vr) && Gs() && k.f & (K | qe | Zi | vr) && !(ae != null && ae.includes(t)) && Da();
  let i = s ? Z(e) : e;
  return ws(t, i);
}
function ws(t, e) {
  if (!t.equals(e)) {
    var s = t.v;
    Lt ? at.set(t, e) : at.set(t, s), t.v = e;
    var i = We.ensure();
    i.capture(t, s), t.f & K && (t.f & pe && tr(
      /** @type {Derived} */
      t
    ), ee(t, t.f & Oe ? X : He)), t.wv = In(), dn(t, pe), Gs() && T !== null && T.f & X && !(T.f & (Xe | dt)) && (we === null ? bo([t]) : we.push(t)), !i.is_fork && Wi.size > 0 && !on && oo();
  }
  return e;
}
function oo() {
  on = !1;
  var t = St;
  di(!0);
  const e = Array.from(Wi);
  try {
    for (const s of e)
      s.f & X && ee(s, He), Qs(s) && Ws(s);
  } finally {
    di(t);
  }
  Wi.clear();
}
function Rs(t) {
  _(t, t.v + 1);
}
function dn(t, e) {
  var s = t.reactions;
  if (s !== null)
    for (var i = Gs(), r = s.length, n = 0; n < r; n++) {
      var a = s[n], o = a.f;
      if (!(!i && a === T)) {
        var l = (o & pe) === 0;
        if (l && ee(a, e), o & K) {
          var d = (
            /** @type {Derived} */
            a
          );
          j == null || j.delete(d), o & Ct || (o & Oe && (a.f |= Ct), dn(d, He));
        } else l && (o & qe && _e !== null && _e.add(
          /** @type {Effect} */
          a
        ), _t(
          /** @type {Effect} */
          a
        ));
      }
    }
}
function Z(t) {
  if (typeof t != "object" || t === null || Bt in t)
    return t;
  const e = $i(t);
  if (e !== Aa && e !== xa)
    return t;
  var s = /* @__PURE__ */ new Map(), i = Wr(t), r = /* @__PURE__ */ M(0), n = Et, a = (o) => {
    if (Et === n)
      return o();
    var l = k, d = Et;
    de(null), Ar(n);
    var u = o();
    return de(l), Ar(d), u;
  };
  return i && s.set("length", /* @__PURE__ */ M(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(o, l, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && Pa();
        var u = s.get(l);
        return u === void 0 ? u = a(() => {
          var g = /* @__PURE__ */ M(d.value);
          return s.set(l, g), g;
        }) : _(u, d.value, !0), !0;
      },
      deleteProperty(o, l) {
        var d = s.get(l);
        if (d === void 0) {
          if (l in o) {
            const u = a(() => /* @__PURE__ */ M(J));
            s.set(l, u), Rs(r);
          }
        } else
          _(d, J), Rs(r);
        return !0;
      },
      get(o, l, d) {
        var p;
        if (l === Bt)
          return t;
        var u = s.get(l), g = l in o;
        if (u === void 0 && (!g || (p = Ht(o, l)) != null && p.writable) && (u = a(() => {
          var f = Z(g ? o[l] : J), v = /* @__PURE__ */ M(f);
          return v;
        }), s.set(l, u)), u !== void 0) {
          var h = m(u);
          return h === J ? void 0 : h;
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
          if (g !== void 0 && h !== J)
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
        var d = s.get(l), u = d !== void 0 && d.v !== J || Reflect.has(o, l);
        if (d !== void 0 || T !== null && (!u || (h = Ht(o, l)) != null && h.writable)) {
          d === void 0 && (d = a(() => {
            var p = u ? Z(o[l]) : J, f = /* @__PURE__ */ M(p);
            return f;
          }), s.set(l, d));
          var g = m(d);
          if (g === J)
            return !1;
        }
        return u;
      },
      set(o, l, d, u) {
        var B;
        var g = s.get(l), h = l in o;
        if (i && l === "length")
          for (var p = d; p < /** @type {Source<number>} */
          g.v; p += 1) {
            var f = s.get(p + "");
            f !== void 0 ? _(f, J) : p in o && (f = a(() => /* @__PURE__ */ M(J)), s.set(p + "", f));
          }
        if (g === void 0)
          (!h || (B = Ht(o, l)) != null && B.writable) && (g = a(() => /* @__PURE__ */ M(void 0)), _(g, Z(d)), s.set(l, g));
        else {
          h = g.v !== J;
          var v = a(() => Z(d));
          _(g, v);
        }
        var y = Reflect.getOwnPropertyDescriptor(o, l);
        if (y != null && y.set && y.set.call(u, d), !h) {
          if (i && typeof l == "string") {
            var x = (
              /** @type {Source<number>} */
              s.get("length")
            ), O = Number(l);
            Number.isInteger(O) && O >= x.v && _(x, O + 1);
          }
          Rs(r);
        }
        return !0;
      },
      ownKeys(o) {
        m(r);
        var l = Reflect.ownKeys(o).filter((g) => {
          var h = s.get(g);
          return h === void 0 || h.v !== J;
        });
        for (var [d, u] of s)
          u.v !== J && !(d in o) && l.push(d);
        return l;
      },
      setPrototypeOf() {
        Na();
      }
    }
  );
}
var wr, cn, un, fn;
function Ui() {
  if (wr === void 0) {
    wr = window, cn = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, s = Text.prototype;
    un = Ht(e, "firstChild").get, fn = Ht(e, "nextSibling").get, pr(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), pr(s) && (s.__t = void 0);
  }
}
function Le(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Ze(t) {
  return (
    /** @type {TemplateNode | null} */
    un.call(t)
  );
}
// @__NO_SIDE_EFFECTS__
function Ve(t) {
  return (
    /** @type {TemplateNode | null} */
    fn.call(t)
  );
}
function G(t, e) {
  if (!L)
    return /* @__PURE__ */ Ze(t);
  var s = /* @__PURE__ */ Ze(I);
  if (s === null)
    s = I.appendChild(Le());
  else if (e && s.nodeType !== Xi) {
    var i = Le();
    return s == null || s.before(i), ve(i), i;
  }
  return ve(s), s;
}
function si(t, e = !1) {
  if (!L) {
    var s = /* @__PURE__ */ Ze(t);
    return s instanceof Comment && s.data === "" ? /* @__PURE__ */ Ve(s) : s;
  }
  if (e && (I == null ? void 0 : I.nodeType) !== Xi) {
    var i = Le();
    return I == null || I.before(i), ve(i), i;
  }
  return I;
}
function ie(t, e = 1, s = !1) {
  let i = L ? I : t;
  for (var r; e--; )
    r = i, i = /** @type {TemplateNode} */
    /* @__PURE__ */ Ve(i);
  if (!L)
    return i;
  if (s && (i == null ? void 0 : i.nodeType) !== Xi) {
    var n = Le();
    return i === null ? r == null || r.after(n) : i.before(n), ve(n), n;
  }
  return ve(i), i;
}
function sr(t) {
  t.textContent = "";
}
function gn() {
  return !1;
}
function lo(t) {
  L && /* @__PURE__ */ Ze(t) !== null && sr(t);
}
let br = !1;
function co() {
  br || (br = !0, document.addEventListener(
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
function Es(t) {
  var e = k, s = T;
  de(null), Be(null);
  try {
    return t();
  } finally {
    de(e), Be(s);
  }
}
function uo(t, e, s, i = s) {
  t.addEventListener(e, () => Es(s));
  const r = t.__on_r;
  r ? t.__on_r = () => {
    r(), i(!0);
  } : t.__on_r = () => i(!0), co();
}
function hn(t) {
  T === null && (k === null && Oa(), Ma()), Lt && Ta();
}
function fo(t, e) {
  var s = e.last;
  s === null ? e.last = e.first = t : (s.next = t, t.prev = s, e.last = t);
}
function Re(t, e, s) {
  var i = T;
  i !== null && i.f & he && (t |= he);
  var r = {
    ctx: z,
    deps: null,
    nodes: null,
    f: t | pe | Oe,
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
  if (s)
    try {
      Ws(r), r.f |= Vs;
    } catch (o) {
      throw ne(r), o;
    }
  else e !== null && _t(r);
  var n = r;
  if (s && n.deps === null && n.teardown === null && n.nodes === null && n.first === n.last && // either `null`, or a singular child
  !(n.f & Ot) && (n = n.first, t & qe && t & It && n !== null && (n.f |= It)), n !== null && (n.parent = i, i !== null && fo(n, i), k !== null && k.f & K && !(t & dt))) {
    var a = (
      /** @type {Derived} */
      k
    );
    (a.effects ?? (a.effects = [])).push(n);
  }
  return r;
}
function Ds() {
  return k !== null && !je;
}
function pn(t) {
  const e = Re(vi, null, !1);
  return ee(e, X), e.teardown = t, e;
}
function qt(t) {
  hn();
  var e = (
    /** @type {Effect} */
    T.f
  ), s = !k && (e & Xe) !== 0 && (e & Vs) === 0;
  if (s) {
    var i = (
      /** @type {ComponentContext} */
      z
    );
    (i.e ?? (i.e = [])).push(t);
  } else
    return vn(t);
}
function vn(t) {
  return Re(Ji | Hr, t, !1);
}
function go(t) {
  return hn(), Re(vi | Hr, t, !0);
}
function ho(t) {
  We.ensure();
  const e = Re(dt | Ot, t, !0);
  return () => {
    ne(e);
  };
}
function po(t) {
  We.ensure();
  const e = Re(dt | Ot, t, !0);
  return (s = {}) => new Promise((i) => {
    s.outro ? xt(e, () => {
      ne(e), i(void 0);
    }) : (ne(e), i(void 0));
  });
}
function ir(t) {
  return Re(Ji, t, !1);
}
function vo(t) {
  return Re(Zi | Ot, t, !0);
}
function xi(t, e = 0) {
  return Re(vi | e, t, !0);
}
function Tt(t, e = [], s = [], i = []) {
  io(i, e, s, (r) => {
    Re(vi, () => t(...r.map(m)), !0);
  });
}
function rr(t, e = 0) {
  var s = Re(qe | e, t, !0);
  return s;
}
function Se(t) {
  return Re(Xe | Ot, t, !0);
}
function mn(t) {
  var e = t.teardown;
  if (e !== null) {
    const s = Lt, i = k;
    yr(!0), de(null);
    try {
      e.call(null);
    } finally {
      yr(s), de(i);
    }
  }
}
function wn(t, e = !1) {
  var s = t.first;
  for (t.first = t.last = null; s !== null; ) {
    const r = s.ac;
    r !== null && Es(() => {
      r.abort(Wt);
    });
    var i = s.next;
    s.f & dt ? s.parent = null : ne(s, e), s = i;
  }
}
function mo(t) {
  for (var e = t.first; e !== null; ) {
    var s = e.next;
    e.f & Xe || ne(e), e = s;
  }
}
function ne(t, e = !0) {
  var s = !1;
  (e || t.f & Fr) && t.nodes !== null && t.nodes.end !== null && (wo(
    t.nodes.start,
    /** @type {TemplateNode} */
    t.nodes.end
  ), s = !0), wn(t, e && !s), ci(t, 0), ee(t, Je);
  var i = t.nodes && t.nodes.t;
  if (i !== null)
    for (const n of i)
      n.stop();
  mn(t);
  var r = t.parent;
  r !== null && r.first !== null && bn(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes = t.ac = null;
}
function wo(t, e) {
  for (; t !== null; ) {
    var s = t === e ? null : /* @__PURE__ */ Ve(t);
    t.remove(), t = s;
  }
}
function bn(t) {
  var e = t.parent, s = t.prev, i = t.next;
  s !== null && (s.next = i), i !== null && (i.prev = s), e !== null && (e.first === t && (e.first = i), e.last === t && (e.last = s));
}
function xt(t, e, s = !0) {
  var i = [];
  yn(t, i, !0);
  var r = () => {
    s && ne(t), e && e();
  }, n = i.length;
  if (n > 0) {
    var a = () => --n || r();
    for (var o of i)
      o.out(a);
  } else
    r();
}
function yn(t, e, s) {
  if (!(t.f & he)) {
    t.f ^= he;
    var i = t.nodes && t.nodes.t;
    if (i !== null)
      for (const o of i)
        (o.is_global || s) && e.push(o);
    for (var r = t.first; r !== null; ) {
      var n = r.next, a = (r.f & It) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (r.f & Xe) !== 0 && (t.f & qe) !== 0;
      yn(r, e, a ? s : !1), r = n;
    }
  }
}
function nr(t) {
  An(t, !0);
}
function An(t, e) {
  if (t.f & he) {
    t.f ^= he, t.f & X || (ee(t, pe), _t(t));
    for (var s = t.first; s !== null; ) {
      var i = s.next, r = (s.f & It) !== 0 || (s.f & Xe) !== 0;
      An(s, r ? e : !1), s = i;
    }
    var n = t.nodes && t.nodes.t;
    if (n !== null)
      for (const a of n)
        (a.is_global || e) && a.in();
  }
}
function xn(t, e) {
  if (t.nodes)
    for (var s = t.nodes.start, i = t.nodes.end; s !== null; ) {
      var r = s === i ? null : /* @__PURE__ */ Ve(s);
      e.append(s), s = r;
    }
}
let St = !1;
function di(t) {
  St = t;
}
let Lt = !1;
function yr(t) {
  Lt = t;
}
let k = null, je = !1;
function de(t) {
  k = t;
}
let T = null;
function Be(t) {
  T = t;
}
let ae = null;
function Sn(t) {
  k !== null && (ae === null ? ae = [t] : ae.push(t));
}
let se = null, ue = 0, we = null;
function bo(t) {
  we = t;
}
let En = 1, zs = 0, Et = zs;
function Ar(t) {
  Et = t;
}
function In() {
  return ++En;
}
function Qs(t) {
  var e = t.f;
  if (e & pe)
    return !0;
  if (e & K && (t.f &= ~Ct), e & He) {
    var s = t.deps;
    if (s !== null)
      for (var i = s.length, r = 0; r < i; r++) {
        var n = s[r];
        if (Qs(
          /** @type {Derived} */
          n
        ) && an(
          /** @type {Derived} */
          n
        ), n.wv > t.wv)
          return !0;
      }
    e & Oe && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    j === null && ee(t, X);
  }
  return !1;
}
function Cn(t, e, s = !0) {
  var i = t.reactions;
  if (i !== null && !(ae != null && ae.includes(t)))
    for (var r = 0; r < i.length; r++) {
      var n = i[r];
      n.f & K ? Cn(
        /** @type {Derived} */
        n,
        e,
        !1
      ) : e === n && (s ? ee(n, pe) : n.f & X && ee(n, He), _t(
        /** @type {Effect} */
        n
      ));
    }
}
function _n(t) {
  var f;
  var e = se, s = ue, i = we, r = k, n = ae, a = z, o = je, l = Et, d = t.f;
  se = /** @type {null | Value[]} */
  null, ue = 0, we = null, k = d & (Xe | dt) ? null : t, ae = null, vs(t.ctx), je = !1, Et = ++zs, t.ac !== null && (Es(() => {
    t.ac.abort(Wt);
  }), t.ac = null);
  try {
    t.f |= Li;
    var u = (
      /** @type {Function} */
      t.fn
    ), g = u(), h = t.deps;
    if (se !== null) {
      var p;
      if (ci(t, ue), h !== null && ue > 0)
        for (h.length = ue + se.length, p = 0; p < se.length; p++)
          h[ue + p] = se[p];
      else
        t.deps = h = se;
      if (Ds() && t.f & Oe)
        for (p = ue; p < h.length; p++)
          ((f = h[p]).reactions ?? (f.reactions = [])).push(t);
    } else h !== null && ue < h.length && (ci(t, ue), h.length = ue);
    if (Gs() && we !== null && !je && h !== null && !(t.f & (K | He | pe)))
      for (p = 0; p < /** @type {Source[]} */
      we.length; p++)
        Cn(
          we[p],
          /** @type {Effect} */
          t
        );
    return r !== null && r !== t && (zs++, we !== null && (i === null ? i = we : i.push(.../** @type {Source[]} */
    we))), t.f & nt && (t.f ^= nt), g;
  } catch (v) {
    return Kr(v);
  } finally {
    t.f ^= Li, se = e, ue = s, we = i, k = r, ae = n, vs(a), je = o, Et = l;
  }
}
function yo(t, e) {
  let s = e.reactions;
  if (s !== null) {
    var i = ya.call(s, t);
    if (i !== -1) {
      var r = s.length - 1;
      r === 0 ? s = e.reactions = null : (s[i] = s[r], s.pop());
    }
  }
  s === null && e.f & K && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (se === null || !se.includes(e)) && (ee(e, He), e.f & Oe && (e.f ^= Oe, e.f &= ~Ct), nn(
    /** @type {Derived} **/
    e
  ), ci(
    /** @type {Derived} **/
    e,
    0
  ));
}
function ci(t, e) {
  var s = t.deps;
  if (s !== null)
    for (var i = e; i < s.length; i++)
      yo(t, s[i]);
}
function Ws(t) {
  var e = t.f;
  if (!(e & Je)) {
    ee(t, X);
    var s = T, i = St;
    T = t, St = !0;
    try {
      e & (qe | Ia) ? mo(t) : wn(t), mn(t);
      var r = _n(t);
      t.teardown = typeof r == "function" ? r : null, t.wv = En;
      var n;
    } finally {
      St = i, T = s;
    }
  }
}
async function kn() {
  await Promise.resolve(), lt();
}
function m(t) {
  var e = t.f, s = (e & K) !== 0;
  if (k !== null && !je) {
    var i = T !== null && (T.f & Je) !== 0;
    if (!i && !(ae != null && ae.includes(t))) {
      var r = k.deps;
      if (k.f & Li)
        t.rv < zs && (t.rv = zs, se === null && r !== null && r[ue] === t ? ue++ : se === null ? se = [t] : se.includes(t) || se.push(t));
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
      return (!(a.f & X) && a.reactions !== null || Mn(a)) && (o = tr(a)), at.set(a, o), o;
    }
  } else s && (!(j != null && j.has(t)) || E != null && E.is_fork && !Ds()) && (a = /** @type {Derived} */
  t, Qs(a) && an(a), St && Ds() && !(a.f & Oe) && Tn(a));
  if (j != null && j.has(t))
    return j.get(t);
  if (t.f & nt)
    throw t.v;
  return t.v;
}
function Tn(t) {
  if (t.deps !== null) {
    t.f ^= Oe;
    for (const e of t.deps)
      (e.reactions ?? (e.reactions = [])).push(t), e.f & K && !(e.f & Oe) && Tn(
        /** @type {Derived} */
        e
      );
  }
}
function Mn(t) {
  if (t.v === J) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (at.has(e) || e.f & K && Mn(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Rt(t) {
  var e = je;
  try {
    return je = !0, t();
  } finally {
    je = e;
  }
}
const Ao = -7169;
function ee(t, e) {
  t.f = t.f & Ao | e;
}
function xo(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (Bt in t)
      ji(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const s = t[e];
        typeof s == "object" && s && Bt in s && ji(s);
      }
  }
}
function ji(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let i in t)
      try {
        ji(t[i], e);
      } catch {
      }
    const s = $i(t);
    if (s !== Object.prototype && s !== Array.prototype && s !== Map.prototype && s !== Set.prototype && s !== Date.prototype) {
      const i = Ur(s);
      for (let r in i) {
        const n = i[r].get;
        if (n)
          try {
            n.call(t);
          } catch {
          }
      }
    }
  }
}
const So = ["touchstart", "touchmove"];
function Eo(t) {
  return So.includes(t);
}
const On = /* @__PURE__ */ new Set(), Fi = /* @__PURE__ */ new Set();
function Io(t, e, s, i = {}) {
  function r(n) {
    if (i.capture || ks.call(e, n), !n.cancelBubble)
      return Es(() => s == null ? void 0 : s.call(this, n));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? Ss(() => {
    e.addEventListener(t, r, i);
  }) : e.addEventListener(t, r, i), r;
}
function Co(t, e, s, i, r) {
  var n = { capture: i, passive: r }, a = Io(t, e, s, n);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && pn(() => {
    e.removeEventListener(t, a, n);
  });
}
function Si(t) {
  for (var e = 0; e < t.length; e++)
    On.add(t[e]);
  for (var s of Fi)
    s(t);
}
let xr = null;
function ks(t) {
  var y;
  var e = this, s = (
    /** @type {Node} */
    e.ownerDocument
  ), i = t.type, r = ((y = t.composedPath) == null ? void 0 : y.call(t)) || [], n = (
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
    ni(t, "currentTarget", {
      configurable: !0,
      get() {
        return n || s;
      }
    });
    var u = k, g = T;
    de(null), Be(null);
    try {
      for (var h, p = []; n !== null; ) {
        var f = n.assignedSlot || n.parentNode || /** @type {any} */
        n.host || null;
        try {
          var v = n["__" + i];
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
      t.__root = e, delete t.currentTarget, de(u), Be(g);
    }
  }
}
function Ln(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function ot(t, e) {
  var s = (
    /** @type {Effect} */
    T
  );
  s.nodes === null && (s.nodes = { start: t, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function H(t, e) {
  var s = (e & Va) !== 0, i = (e & Ga) !== 0, r, n = !t.startsWith("<!>");
  return () => {
    if (L)
      return ot(I, null), I;
    r === void 0 && (r = Ln(n ? t : "<!>" + t), s || (r = /** @type {TemplateNode} */
    /* @__PURE__ */ Ze(r)));
    var a = (
      /** @type {TemplateNode} */
      i || cn ? document.importNode(r, !0) : r.cloneNode(!0)
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
function _o(t, e, s = "svg") {
  var i = !t.startsWith("<!>"), r = `<${s}>${i ? t : "<!>" + t}</${s}>`, n;
  return () => {
    if (L)
      return ot(I, null), I;
    if (!n) {
      var a = (
        /** @type {DocumentFragment} */
        Ln(r)
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
function ko(t, e) {
  return /* @__PURE__ */ _o(t, e, "svg");
}
function To() {
  if (L)
    return ot(I, null), I;
  var t = document.createDocumentFragment(), e = document.createComment(""), s = Le();
  return t.append(e, s), ot(e, s), t;
}
function D(t, e) {
  if (L) {
    var s = (
      /** @type {Effect & { nodes: EffectNodes }} */
      T
    );
    (!(s.f & Vs) || s.nodes.end === null) && (s.nodes.end = I), yi();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
let Hi = !0;
function ui(t, e) {
  var s = e == null ? "" : typeof e == "object" ? e + "" : e;
  s !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = s, t.nodeValue = s + "");
}
function ar(t, e) {
  return Rn(t, e);
}
function Mo(t, e) {
  Ui(), e.intro = e.intro ?? !1;
  const s = e.target, i = L, r = I;
  try {
    for (var n = /* @__PURE__ */ Ze(s); n && (n.nodeType !== As || /** @type {Comment} */
    n.data !== qr); )
      n = /* @__PURE__ */ Ve(n);
    if (!n)
      throw ps;
    $e(!0), ve(
      /** @type {Comment} */
      n
    );
    const a = Rn(t, { ...e, anchor: n });
    return $e(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a instanceof Error && a.message.split(`
`).some((o) => o.startsWith("https://svelte.dev/e/")))
      throw a;
    return a !== ps && console.warn("Failed to hydrate: ", a), e.recover === !1 && Ra(), Ui(), sr(s), $e(!1), ar(t, e);
  } finally {
    $e(i), ve(r);
  }
}
const zt = /* @__PURE__ */ new Map();
function Rn(t, { target: e, anchor: s, props: i = {}, events: r, context: n, intro: a = !0 }) {
  Ui();
  var o = /* @__PURE__ */ new Set(), l = (g) => {
    for (var h = 0; h < g.length; h++) {
      var p = g[h];
      if (!o.has(p)) {
        o.add(p);
        var f = Eo(p);
        e.addEventListener(p, ks, { passive: f });
        var v = zt.get(p);
        v === void 0 ? (document.addEventListener(p, ks, { passive: f }), zt.set(p, 1)) : zt.set(p, v + 1);
      }
    }
  };
  l(pi(On)), Fi.add(l);
  var d = void 0, u = po(() => {
    var g = s ?? e.appendChild(Le());
    return to(
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
            z
          );
          p.c = n;
        }
        if (r && (i.$$events = r), L && ot(
          /** @type {TemplateNode} */
          h,
          null
        ), Hi = a, d = t(h, i) || {}, Hi = !0, L && (T.nodes.end = I, I === null || I.nodeType !== As || /** @type {Comment} */
        I.data !== er))
          throw bi(), ps;
        n && ut();
      }
    ), () => {
      var f;
      for (var h of o) {
        e.removeEventListener(h, ks);
        var p = (
          /** @type {number} */
          zt.get(h)
        );
        --p === 0 ? (document.removeEventListener(h, ks), zt.delete(h)) : zt.set(h, p);
      }
      Fi.delete(l), g !== s && ((f = g.parentNode) == null || f.removeChild(g));
    };
  });
  return Bi.set(d, u), d;
}
let Bi = /* @__PURE__ */ new WeakMap();
function qi(t, e) {
  const s = Bi.get(t);
  return s ? (Bi.delete(t), s(e)) : Promise.resolve();
}
var Te, ze, ge, At, Bs, qs, hi;
class Oo {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, s = !0) {
    /** @type {TemplateNode} */
    W(this, "anchor");
    /** @type {Map<Batch, Key>} */
    A(this, Te, /* @__PURE__ */ new Map());
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
    A(this, Bs, !0);
    A(this, qs, () => {
      var e = (
        /** @type {Batch} */
        E
      );
      if (c(this, Te).has(e)) {
        var s = (
          /** @type {Key} */
          c(this, Te).get(e)
        ), i = c(this, ze).get(s);
        if (i)
          nr(i), c(this, At).delete(s);
        else {
          var r = c(this, ge).get(s);
          r && (c(this, ze).set(s, r.effect), c(this, ge).delete(s), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), i = r.effect);
        }
        for (const [n, a] of c(this, Te)) {
          if (c(this, Te).delete(n), n === e)
            break;
          const o = c(this, ge).get(a);
          o && (ne(o.effect), c(this, ge).delete(a));
        }
        for (const [n, a] of c(this, ze)) {
          if (n === s || c(this, At).has(n)) continue;
          const o = () => {
            if (Array.from(c(this, Te).values()).includes(n)) {
              var d = document.createDocumentFragment();
              xn(a, d), d.append(Le()), c(this, ge).set(n, { effect: a, fragment: d });
            } else
              ne(a);
            c(this, At).delete(n), c(this, ze).delete(n);
          };
          c(this, Bs) || !i ? (c(this, At).add(n), xt(a, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    A(this, hi, (e) => {
      c(this, Te).delete(e);
      const s = Array.from(c(this, Te).values());
      for (const [i, r] of c(this, ge))
        s.includes(i) || (ne(r.effect), c(this, ge).delete(i));
    });
    this.anchor = e, b(this, Bs, s);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, s) {
    var i = (
      /** @type {Batch} */
      E
    ), r = gn();
    if (s && !c(this, ze).has(e) && !c(this, ge).has(e))
      if (r) {
        var n = document.createDocumentFragment(), a = Le();
        n.append(a), c(this, ge).set(e, {
          effect: Se(() => s(a)),
          fragment: n
        });
      } else
        c(this, ze).set(
          e,
          Se(() => s(this.anchor))
        );
    if (c(this, Te).set(i, e), r) {
      for (const [o, l] of c(this, ze))
        o === e ? i.skipped_effects.delete(l) : i.skipped_effects.add(l);
      for (const [o, l] of c(this, ge))
        o === e ? i.skipped_effects.delete(l.effect) : i.skipped_effects.add(l.effect);
      i.oncommit(c(this, qs)), i.ondiscard(c(this, hi));
    } else
      L && (this.anchor = I), c(this, qs).call(this);
  }
}
Te = new WeakMap(), ze = new WeakMap(), ge = new WeakMap(), At = new WeakMap(), Bs = new WeakMap(), qs = new WeakMap(), hi = new WeakMap();
function Ee(t, e, s = !1) {
  L && yi();
  var i = new Oo(t), r = s ? It : 0;
  function n(a, o) {
    if (L) {
      const d = Vr(t) === wi;
      if (a === d) {
        var l = oi();
        ve(l), i.anchor = l, $e(!1), i.ensure(a, o), $e(!0);
        return;
      }
    }
    i.ensure(a, o);
  }
  rr(() => {
    var a = !1;
    e((o, l = !0) => {
      a = !0, n(l, o);
    }), a || n(!1, null);
  }, r);
}
function Lo(t, e, s) {
  for (var i = [], r = e.length, n, a = e.length, o = 0; o < r; o++) {
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
            Vi(pi(n.done)), h.delete(n), h.size === 0 && (t.outrogroups = null);
          }
        } else
          a -= 1;
      },
      !1
    );
  }
  if (a === 0) {
    var l = i.length === 0 && s !== null;
    if (l) {
      var d = (
        /** @type {Element} */
        s
      ), u = (
        /** @type {Element} */
        d.parentNode
      );
      sr(u), u.append(d), t.items.clear();
    }
    Vi(e, !l);
  } else
    n = {
      pending: new Set(e),
      done: /* @__PURE__ */ new Set()
    }, (t.outrogroups ?? (t.outrogroups = /* @__PURE__ */ new Set())).add(n);
}
function Vi(t, e = !0) {
  for (var s = 0; s < t.length; s++)
    ne(t[s], e);
}
var Sr;
function Ro(t, e, s, i, r, n = null) {
  var a = t, o = /* @__PURE__ */ new Map();
  L && yi();
  var l = null, d = /* @__PURE__ */ rn(() => {
    var v = s();
    return Wr(v) ? v : v == null ? [] : pi(v);
  }), u, g = !0;
  function h() {
    f.fallback = l, Po(f, u, a, e, i), l !== null && (u.length === 0 ? l.f & rt ? (l.f ^= rt, Ts(l, null, a)) : nr(l) : xt(l, () => {
      l = null;
    }));
  }
  var p = rr(() => {
    u = /** @type {V[]} */
    m(d);
    var v = u.length;
    let y = !1;
    if (L) {
      var x = Vr(a) === wi;
      x !== (v === 0) && (a = oi(), ve(a), $e(!1), y = !0);
    }
    for (var O = /* @__PURE__ */ new Set(), B = (
      /** @type {Batch} */
      E
    ), oe = gn(), q = 0; q < v; q += 1) {
      L && I.nodeType === As && /** @type {Comment} */
      I.data === er && (a = /** @type {Comment} */
      I, y = !0, $e(!1));
      var Ie = u[q], ce = i(Ie, q), Y = g ? null : o.get(ce);
      Y ? (Y.v && ws(Y.v, Ie), Y.i && ws(Y.i, q), oe && B.skipped_effects.delete(Y.e)) : (Y = No(
        o,
        g ? a : Sr ?? (Sr = Le()),
        Ie,
        ce,
        q,
        r,
        e,
        s
      ), g || (Y.e.f |= rt), o.set(ce, Y)), O.add(ce);
    }
    if (v === 0 && n && !l && (g ? l = Se(() => n(a)) : (l = Se(() => n(Sr ?? (Sr = Le()))), l.f |= rt)), L && v > 0 && ve(oi()), !g)
      if (oe) {
        for (const [te, Ii] of o)
          O.has(te) || B.skipped_effects.add(Ii.e);
        B.oncommit(h), B.ondiscard(() => {
        });
      } else
        h();
    y && $e(!0), m(d);
  }), f = { effect: p, items: o, outrogroups: null, fallback: l };
  g = !1, L && (a = I);
}
function Po(t, e, s, i, r) {
  var Y;
  var n = e.length, a = t.items, o = t.effect.first, l, d = null, u = [], g = [], h, p, f, v;
  for (v = 0; v < n; v += 1) {
    if (h = e[v], p = r(h, v), f = /** @type {EachItem} */
    a.get(p).e, t.outrogroups !== null)
      for (const te of t.outrogroups)
        te.pending.delete(f), te.done.delete(f);
    if (f.f & rt)
      if (f.f ^= rt, f === o)
        Ts(f, null, s);
      else {
        var y = d ? d.next : o;
        f === t.effect.last && (t.effect.last = f.prev), f.prev && (f.prev.next = f.next), f.next && (f.next.prev = f.prev), et(t, d, f), et(t, f, y), Ts(f, y, s), d = f, u = [], g = [], o = d.next;
        continue;
      }
    if (f.f & he && nr(f), f !== o) {
      if (l !== void 0 && l.has(f)) {
        if (u.length < g.length) {
          var x = g[0], O;
          d = x.prev;
          var B = u[0], oe = u[u.length - 1];
          for (O = 0; O < u.length; O += 1)
            Ts(u[O], x, s);
          for (O = 0; O < g.length; O += 1)
            l.delete(g[O]);
          et(t, B.prev, oe.next), et(t, d, B), et(t, oe, x), o = x, d = oe, v -= 1, u = [], g = [];
        } else
          l.delete(f), Ts(f, o, s), et(t, f.prev, f.next), et(t, f, d === null ? t.effect.first : d.next), et(t, d, f), d = f;
        continue;
      }
      for (u = [], g = []; o !== null && o !== f; )
        (l ?? (l = /* @__PURE__ */ new Set())).add(o), g.push(o), o = o.next;
      if (o === null)
        continue;
    }
    f.f & rt || u.push(f), d = f, o = f.next;
  }
  if (t.outrogroups !== null) {
    for (const te of t.outrogroups)
      te.pending.size === 0 && (Vi(pi(te.done)), (Y = t.outrogroups) == null || Y.delete(te));
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
      Lo(t, q, ce);
    }
  }
}
function No(t, e, s, i, r, n, a, o) {
  var l = a & Wa ? a & ja ? kt(s) : /* @__PURE__ */ ln(s, !1, !1) : null, d = a & Ua ? kt(r) : null;
  return {
    v: l,
    i: d,
    e: Se(() => (n(e, l ?? s, d ?? r, o), () => {
      t.delete(i);
    }))
  };
}
function Ts(t, e, s) {
  if (t.nodes)
    for (var i = t.nodes.start, r = t.nodes.end, n = e && !(e.f & rt) ? (
      /** @type {EffectNodes} */
      e.nodes.start
    ) : s; i !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ve(i)
      );
      if (n.before(i), i === r)
        return;
      i = a;
    }
}
function et(t, e, s) {
  e === null ? t.effect.first = s : e.next = s, s === null ? t.effect.last = e : s.prev = e;
}
const Do = () => performance.now(), Ke = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (t) => requestAnimationFrame(t)
  ),
  now: () => Do(),
  tasks: /* @__PURE__ */ new Set()
};
function Pn() {
  const t = Ke.now();
  Ke.tasks.forEach((e) => {
    e.c(t) || (Ke.tasks.delete(e), e.f());
  }), Ke.tasks.size !== 0 && Ke.tick(Pn);
}
function zo(t) {
  let e;
  return Ke.tasks.size === 0 && Ke.tick(Pn), {
    promise: new Promise((s) => {
      Ke.tasks.add(e = { c: t, f: s });
    }),
    abort() {
      Ke.tasks.delete(e);
    }
  };
}
function Zs(t, e) {
  Es(() => {
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
    (s) => s[0].toUpperCase() + s.slice(1)
  ).join("");
}
function Er(t) {
  const e = {}, s = t.split(";");
  for (const i of s) {
    const [r, n] = i.split(":");
    if (!r || n === void 0) break;
    const a = Wo(r.trim());
    e[a] = n.trim();
  }
  return e;
}
const Uo = (t) => t;
function Ir(t, e, s, i) {
  var y;
  var r = (t & qa) !== 0, n = "both", a, o = e.inert, l = e.style.overflow, d, u;
  function g() {
    return Es(() => a ?? (a = s()(e, (i == null ? void 0 : i()) ?? /** @type {P} */
    {}, {
      direction: n
    })));
  }
  var h = {
    is_global: r,
    in() {
      e.inert = o, Zs(e, "introstart"), d = Gi(e, g(), u, 1, () => {
        Zs(e, "introend"), d == null || d.abort(), d = a = void 0, e.style.overflow = l;
      });
    },
    out(x) {
      e.inert = !0, Zs(e, "outrostart"), u = Gi(e, g(), d, 0, () => {
        Zs(e, "outroend"), x == null || x();
      });
    },
    stop: () => {
      d == null || d.abort(), u == null || u.abort();
    }
  }, p = (
    /** @type {Effect & { nodes: EffectNodes }} */
    T
  );
  if (((y = p.nodes).t ?? (y.t = [])).push(h), Hi) {
    var f = r;
    if (!f) {
      for (var v = (
        /** @type {Effect | null} */
        p.parent
      ); v && v.f & It; )
        for (; (v = v.parent) && !(v.f & qe); )
          ;
      f = !v || (v.f & Vs) !== 0;
    }
    f && ir(() => {
      Rt(() => h.in());
    });
  }
}
function Gi(t, e, s, i, r) {
  var n = i === 1;
  if (Sa(e)) {
    var a, o = !1;
    return Ss(() => {
      if (!o) {
        var y = e({ direction: n ? "in" : "out" });
        a = Gi(t, y, s, i, r);
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
    return r(), {
      abort: Cs,
      deactivate: Cs,
      reset: Cs,
      t: () => i
    };
  const { delay: l = 0, css: d, tick: u, easing: g = Uo } = e;
  var h = [];
  if (n && s === void 0 && (u && u(0, 1), d)) {
    var p = Er(d(0, 1));
    h.push(p, p);
  }
  var f = () => 1 - i, v = t.animate(h, { duration: l, fill: "forwards" });
  return v.onfinish = () => {
    v.cancel();
    var y = (s == null ? void 0 : s.t()) ?? 1 - i;
    s == null || s.abort();
    var x = i - y, O = (
      /** @type {number} */
      e.duration * Math.abs(x)
    ), B = [];
    if (O > 0) {
      var oe = !1;
      if (d)
        for (var q = Math.ceil(O / 16.666666666666668), Ie = 0; Ie <= q; Ie += 1) {
          var ce = y + x * g(Ie / q), Y = Er(d(ce, 1 - ce));
          B.push(Y), oe || (oe = Y.overflow === "hidden");
        }
      oe && (t.style.overflow = "hidden"), f = () => {
        var te = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          v.currentTime
        );
        return y + x * g(te / O);
      }, u && zo(() => {
        if (v.playState !== "running") return !1;
        var te = f();
        return u(te, 1 - te), !0;
      });
    }
    v = t.animate(B, { duration: O, fill: "forwards" }), v.onfinish = () => {
      f = () => i, u == null || u(i, 1 - i), r();
    };
  }, {
    abort: () => {
      v && (v.cancel(), v.effect = null, v.onfinish = Cs);
    },
    deactivate: () => {
      r = Cs;
    },
    reset: () => {
      i === 0 && (u == null || u(1, 0));
    },
    t: () => f()
  };
}
function Pt(t, e) {
  ir(() => {
    var s = t.getRootNode(), i = (
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
    if (!i.querySelector("#" + e.hash)) {
      const r = document.createElement("style");
      r.id = e.hash, r.textContent = e.code, i.appendChild(r);
    }
  });
}
const Cr = [...` 	
\r\f \v\uFEFF`];
function jo(t, e, s) {
  var i = t == null ? "" : "" + t;
  if (s) {
    for (var r in s)
      if (s[r])
        i = i ? i + " " + r : r;
      else if (i.length)
        for (var n = r.length, a = 0; (a = i.indexOf(r, a)) >= 0; ) {
          var o = a + n;
          (a === 0 || Cr.includes(i[a - 1])) && (o === i.length || Cr.includes(i[o])) ? i = (a === 0 ? "" : i.substring(0, a)) + i.substring(o + 1) : a = o;
        }
  }
  return i === "" ? null : i;
}
function Nn(t, e, s, i, r, n) {
  var a = t.__className;
  if (L || a !== s || a === void 0) {
    var o = jo(s, i, n);
    (!L || o !== t.getAttribute("class")) && (o == null ? t.removeAttribute("class") : t.className = o), t.__className = s;
  } else if (n && r !== n)
    for (var l in n) {
      var d = !!n[l];
      (r == null || d !== !!r[l]) && t.classList.toggle(l, d);
    }
  return n;
}
const Fo = Symbol("is custom element"), Ho = Symbol("is html");
function Mt(t, e, s, i) {
  var r = Bo(t);
  L && (r[e] = t.getAttribute(e), e === "src" || e === "srcset" || e === "href" && t.nodeName === "LINK") || r[e] !== (r[e] = s) && (e === "loading" && (t[_a] = s), s == null ? t.removeAttribute(e) : typeof s != "string" && qo(t).includes(e) ? t[e] = s : t.setAttribute(e, s));
}
function Bo(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ?? (t.__attributes = {
      [Fo]: t.nodeName.includes("-"),
      [Ho]: t.namespaceURI === Ya
    })
  );
}
var _r = /* @__PURE__ */ new Map();
function qo(t) {
  var e = t.getAttribute("is") || t.nodeName, s = _r.get(e);
  if (s) return s;
  _r.set(e, s = []);
  for (var i, r = t, n = Element.prototype; n !== r; ) {
    i = Ur(r);
    for (var a in i)
      i[a].set && s.push(a);
    r = $i(r);
  }
  return s;
}
function Vo(t, e, s = e) {
  var i = /* @__PURE__ */ new WeakSet();
  uo(t, "input", async (r) => {
    var n = r ? t.defaultValue : t.value;
    if (n = ki(t) ? Ti(n) : n, s(n), E !== null && i.add(E), await kn(), n !== (n = e())) {
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
  Rt(e) == null && t.value) && (s(ki(t) ? Ti(t.value) : t.value), E !== null && i.add(E)), xi(() => {
    var r = e();
    if (t === document.activeElement) {
      var n = (
        /** @type {Batch} */
        Xs ?? E
      );
      if (i.has(n))
        return;
    }
    ki(t) && r === Ti(t.value) || t.type === "date" && !r && !t.value || r !== t.value && (t.value = r ?? "");
  });
}
function ki(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function Ti(t) {
  return t === "" ? null : +t;
}
function kr(t, e) {
  return t === e || (t == null ? void 0 : t[Bt]) === e;
}
function or(t = {}, e, s, i) {
  return ir(() => {
    var r, n;
    return xi(() => {
      r = n, n = [], Rt(() => {
        t !== s(...n) && (e(t, ...n), r && kr(s(...r), t) && e(null, ...r));
      });
    }), () => {
      Ss(() => {
        n && kr(s(...n), t) && e(null, ...n);
      });
    };
  }), t;
}
function Go(t = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    z
  ), s = e.l.u;
  if (!s) return;
  let i = () => xo(e.s);
  if (t) {
    let r = 0, n = (
      /** @type {Record<string, any>} */
      {}
    );
    const a = /* @__PURE__ */ Ys(() => {
      let o = !1;
      const l = e.s;
      for (const d in l)
        l[d] !== n[d] && (n[d] = l[d], o = !0);
      return o && r++, r;
    });
    i = () => m(a);
  }
  s.b.length && go(() => {
    Tr(e, i), Oi(s.b);
  }), qt(() => {
    const r = Rt(() => s.m.map(Ea));
    return () => {
      for (const n of r)
        typeof n == "function" && n();
    };
  }), s.a.length && qt(() => {
    Tr(e, i), Oi(s.a);
  });
}
function Tr(t, e) {
  if (t.l.s)
    for (const s of t.l.s) m(s);
  e();
}
function bs(t, e, s, i) {
  var r = !xs || (s & Fa) !== 0, n = (s & Ba) !== 0, a = (
    /** @type {V} */
    i
  ), o = !0, l = () => (o && (o = !1, a = /** @type {V} */
  i), a), d;
  d = /** @type {V} */
  t[e], d === void 0 && i !== void 0 && (d = l());
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
  }, r && !(s & Ha))
    return u;
  var g = !1, h = /* @__PURE__ */ Ys(() => (g = !1, u())), p = (
    /** @type {Effect} */
    T
  );
  return (
    /** @type {() => V} */
    function(f, v) {
      if (arguments.length > 0) {
        const y = v ? m(h) : r && n ? Z(f) : f;
        return _(h, y), g = !0, a !== void 0 && (a = y), f;
      }
      return Lt && g || p.f & Je ? h.v : m(h);
    }
  );
}
function Yo(t) {
  return new Qo(t);
}
var Qe, Ae;
class Qo {
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
    var s = /* @__PURE__ */ new Map(), i = (a, o) => {
      var l = /* @__PURE__ */ ln(o, !1, !1);
      return s.set(a, l), l;
    };
    const r = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(a, o) {
          return m(s.get(o) ?? i(o, Reflect.get(a, o)));
        },
        has(a, o) {
          return o === Ca ? !0 : (m(s.get(o) ?? i(o, Reflect.get(a, o))), Reflect.has(a, o));
        },
        set(a, o, l) {
          return _(s.get(o) ?? i(o, l), l), Reflect.set(a, o, l);
        }
      }
    );
    b(this, Ae, (e.hydrate ? Mo : ar)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: r,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((n = e == null ? void 0 : e.props) != null && n.$$host) || e.sync === !1) && lt(), b(this, Qe, r.$$events);
    for (const a of Object.keys(c(this, Ae)))
      a === "$set" || a === "$destroy" || a === "$on" || ni(this, a, {
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
      Object.assign(r, a);
    }, c(this, Ae).$destroy = () => {
      qi(c(this, Ae));
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
    const i = (...r) => s.call(this, ...r);
    return c(this, Qe)[e].push(i), () => {
      c(this, Qe)[e] = c(this, Qe)[e].filter(
        /** @param {any} fn */
        (r) => r !== i
      );
    };
  }
  $destroy() {
    c(this, Ae).$destroy();
  }
}
Qe = new WeakMap(), Ae = new WeakMap();
let Dn;
typeof HTMLElement == "function" && (Dn = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, s, i) {
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
    this.$$ctor = e, this.$$s = s, i && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(e, s, i) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(s), this.$$c) {
      const r = this.$$c.$on(e, s);
      this.$$l_u.set(s, r);
    }
    super.addEventListener(e, s, i);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(e, s, i) {
    if (super.removeEventListener(e, s, i), this.$$c) {
      const r = this.$$l_u.get(s);
      r && (r(), this.$$l_u.delete(s));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(r) {
        return (n) => {
          const a = document.createElement("slot");
          r !== "default" && (a.name = r), D(n, a);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const s = {}, i = Ko(this);
      for (const r of this.$$s)
        r in i && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), s.default = !0) : s[r] = e(r));
      for (const r of this.attributes) {
        const n = this.$$g_p(r.name);
        n in this.$$d || (this.$$d[n] = ii(n, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = Yo({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: s,
          $$host: this
        }
      }), this.$$me = ho(() => {
        xi(() => {
          var r;
          this.$$r = !0;
          for (const n of ri(this.$$c)) {
            if (!((r = this.$$p_d[n]) != null && r.reflect)) continue;
            this.$$d[n] = this.$$c[n];
            const a = ii(
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
  attributeChangedCallback(e, s, i) {
    var r;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = ii(e, i, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [e]: this.$$d[e] }));
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
    return ri(this.$$p_d).find(
      (s) => this.$$p_d[s].attribute === e || !this.$$p_d[s].attribute && s.toLowerCase() === e
    ) || e;
  }
});
function ii(t, e, s, i) {
  var n;
  const r = (n = s[t]) == null ? void 0 : n.type;
  if (e = r === "Boolean" && typeof e != "boolean" ? e != null : e, !i || !s[t])
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
function Ko(t) {
  const e = {};
  return t.childNodes.forEach((s) => {
    e[
      /** @type {Element} node */
      s.slot || "default"
    ] = !0;
  }), e;
}
function Nt(t, e, s, i, r, n) {
  let a = class extends Dn {
    constructor() {
      super(t, s, r), this.$$p_d = e;
    }
    static get observedAttributes() {
      return ri(e).map(
        (o) => (e[o].attribute || o).toLowerCase()
      );
    }
  };
  return ri(e).forEach((o) => {
    ni(a.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(l) {
        var g;
        l = ii(o, l, e), this.$$d[o] = l;
        var d = this.$$c;
        if (d) {
          var u = (g = Ht(d, o)) == null ? void 0 : g.get;
          u ? d[o] = l : d.$set({ [o]: l });
        }
      }
    });
  }), i.forEach((o) => {
    ni(a.prototype, o, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[o];
      }
    });
  }), t.element = /** @type {any} */
  a, a;
}
function lr(t) {
  z === null && Br(), xs && z.l !== null ? Jo(z).m.push(t) : qt(() => {
    const e = Rt(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function $o(t) {
  z === null && Br(), lr(() => () => Rt(t));
}
function Jo(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
const Zo = "5";
var zr;
typeof window < "u" && ((zr = window.__svelte ?? (window.__svelte = {})).v ?? (zr.v = /* @__PURE__ */ new Set())).add(Zo);
const Xo = (t) => t;
function el(t) {
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
function tl(t, { delay: e = 0, duration: s = 400, easing: i = Xo } = {}) {
  const r = +getComputedStyle(t).opacity;
  return {
    delay: e,
    duration: s,
    easing: i,
    css: (n) => `opacity: ${n * r}`
  };
}
function sl(t, { delay: e = 0, duration: s = 400, easing: i = el, x: r = 0, y: n = 0, opacity: a = 0 } = {}) {
  const o = getComputedStyle(t), l = +o.opacity, d = o.transform === "none" ? "" : o.transform, u = l * (1 - a), [g, h] = Mr(r), [p, f] = Mr(n);
  return {
    delay: e,
    duration: s,
    easing: i,
    css: (v, y) => `
			transform: ${d} translate(${(1 - v) * g}${h}, ${(1 - v) * p}${f});
			opacity: ${l - u * y}`
  };
}
var Kt, $t, Jt, Zt;
class il {
  constructor() {
    A(this, Kt);
    A(this, $t);
    A(this, Jt);
    A(this, Zt);
    b(this, Kt, /* @__PURE__ */ M(!1)), b(this, $t, /* @__PURE__ */ M(!1)), b(this, Jt, /* @__PURE__ */ M(!1)), b(this, Zt, /* @__PURE__ */ M(!1));
  }
  get isOpen() {
    return m(c(this, Kt));
  }
  set isOpen(e) {
    _(c(this, Kt), e, !0);
  }
  get isMinimized() {
    return m(c(this, $t));
  }
  set isMinimized(e) {
    _(c(this, $t), e, !0);
  }
  get isLoading() {
    return m(c(this, Jt));
  }
  set isLoading(e) {
    _(c(this, Jt), e, !0);
  }
  get hasUnreadMessages() {
    return m(c(this, Zt));
  }
  set hasUnreadMessages(e) {
    _(c(this, Zt), e, !0);
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
const U = new il(), re = {
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
}, Or = {
  /** Visitor ID storage key */
  VISITOR_ID: "ai_chat_visitor_id",
  /** Session history storage key */
  SESSIONS: "ai_chat_sessions"
};
var Xt, es, ts, ss, is, rs;
class rl {
  constructor() {
    A(this, Xt);
    A(this, es);
    A(this, ts);
    A(this, ss);
    A(this, is);
    A(this, rs);
    b(this, Xt, /* @__PURE__ */ M(Z([]))), b(this, es, /* @__PURE__ */ M(null)), b(this, ts, /* @__PURE__ */ M(!1)), b(this, ss, /* @__PURE__ */ M(null)), b(this, is, /* @__PURE__ */ M(null)), this.streamingBuffer = "", this.streamingTimeout = null, b(this, rs, /* @__PURE__ */ M(0));
  }
  get messages() {
    return m(c(this, Xt));
  }
  set messages(e) {
    _(c(this, Xt), e, !0);
  }
  get currentSession() {
    return m(c(this, es));
  }
  set currentSession(e) {
    _(c(this, es), e, !0);
  }
  get isTyping() {
    return m(c(this, ts));
  }
  set isTyping(e) {
    _(c(this, ts), e, !0);
  }
  get error() {
    return m(c(this, ss));
  }
  set error(e) {
    _(c(this, ss), e, !0);
  }
  get streamingMessageId() {
    return m(c(this, is));
  }
  set streamingMessageId(e) {
    _(c(this, is), e, !0);
  }
  get streamingUpdateSignal() {
    return m(c(this, rs));
  }
  set streamingUpdateSignal(e) {
    _(c(this, rs), e, !0);
  }
  // Derived state
  get unreadCount() {
    return this.messages.filter((e) => e.role === "assistant" && e.status !== "sent").length;
  }
  get hasMessages() {
    return this.messages.length > 0;
  }
  addMessage(e, s = "user") {
    const i = {
      id: crypto.randomUUID(),
      role: s,
      content: e,
      timestamp: /* @__PURE__ */ new Date(),
      status: s === "user" ? "sending" : "sent"
    };
    return this.messages = [...this.messages, i], i;
  }
  updateMessageStatus(e, s) {
    this.messages = this.messages.map((i) => i.id === e ? { ...i, status: s } : i);
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
        re.STREAMING_BATCH_DELAY
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
    this.messages = this.messages.map((i) => i.id === e ? { ...i, content: s(i.content) } : i);
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
Xt = new WeakMap(), es = new WeakMap(), ts = new WeakMap(), ss = new WeakMap(), is = new WeakMap(), rs = new WeakMap();
const C = new rl(), Lr = {
  "client-id": "clientId",
  theme: "theme",
  position: "position",
  title: "title",
  "logo-url": "logoUrl",
  placeholder: "placeholder",
  "accent-color": "accentColor",
  "avatar-emoji": "avatarEmoji",
  "company-name": "companyName",
  debug: "debug",
  "auto-init": "autoInit"
}, Ge = {
  theme: "modern",
  position: "bottom-right",
  title: "AI Assistant",
  placeholder: "Type your message...",
  avatarEmoji: "🤖",
  debug: !1,
  autoInit: !0
}, zn = {
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
    const s = Object.entries(Lr).find(([, i]) => i === t);
    return s ? s[0] : null;
  }
}, nl = [
  "modern",
  "corporate",
  "friendly",
  "minimal",
  "dark",
  "light"
];
function Wn(t) {
  return nl.includes(t);
}
function Ei(t) {
  return !t || typeof t != "string" ? !1 : /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(t);
}
function dr(t, e = "#6b46c1") {
  return Ei(t) ? t : e;
}
function Un(t) {
  if (!Ei(t)) return t;
  if (t.length === 4) {
    const e = t.slice(1);
    return "#" + e[0] + e[0] + e[1] + e[1] + e[2] + e[2];
  }
  return t;
}
function jn(t) {
  const e = Un(t), s = parseInt(e.slice(1, 3), 16) / 255, i = parseInt(e.slice(3, 5), 16) / 255, r = parseInt(e.slice(5, 7), 16) / 255, n = Math.max(s, i, r), a = Math.min(s, i, r);
  let o = 0, l = 0;
  const d = (n + a) / 2;
  if (n !== a) {
    const u = n - a;
    switch (l = d > 0.5 ? u / (2 - n - a) : u / (n + a), n) {
      case s:
        o = ((i - r) / u + (i < r ? 6 : 0)) / 6;
        break;
      case i:
        o = ((r - s) / u + 2) / 6;
        break;
      case r:
        o = ((s - i) / u + 4) / 6;
        break;
    }
  }
  return { h: o * 360, s: l * 100, l: d * 100 };
}
function Fn(t, e, s) {
  e /= 100, s /= 100;
  const i = e * Math.min(s, 1 - s), r = (n) => {
    const a = (n + t / 30) % 12, o = s - i * Math.max(Math.min(a - 3, 9 - a, 1), -1);
    return Math.round(255 * o).toString(16).padStart(2, "0");
  };
  return `#${r(0)}${r(8)}${r(4)}`.toUpperCase();
}
function Me(t, e) {
  if (!Ei(t)) return t;
  const s = jn(t), i = Math.max(0, Math.min(100, s.l + e));
  return Fn(s.h, s.s, i);
}
const al = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  adjustColor: Me,
  expandHexColor: Un,
  hexToHsl: jn,
  hslToHex: Fn,
  isValidHexColor: Ei,
  sanitizeHexColor: dr
}, Symbol.toStringTag, { value: "Module" }));
var ns, as, os, ls, ds, cs, us, fs, gs, hs;
class ol {
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
    b(this, ns, /* @__PURE__ */ M("")), b(this, as, /* @__PURE__ */ M(Z(Ge.theme))), b(this, os, /* @__PURE__ */ M(Z(Ge.position))), b(this, ls, /* @__PURE__ */ M(Z(Ge.title))), b(this, ds, /* @__PURE__ */ M(Z(Ge.logoUrl))), b(this, cs, /* @__PURE__ */ M(Z(Ge.placeholder))), b(this, us, /* @__PURE__ */ M(Z(Ge.accentColor))), b(this, fs, /* @__PURE__ */ M(Z(Ge.avatarEmoji))), b(this, gs, /* @__PURE__ */ M(Z(Ge.companyName))), b(this, hs, /* @__PURE__ */ M("default"));
  }
  get clientId() {
    return m(c(this, ns));
  }
  set clientId(e) {
    _(c(this, ns), e, !0);
  }
  get theme() {
    return m(c(this, as));
  }
  set theme(e) {
    _(c(this, as), e, !0);
  }
  get position() {
    return m(c(this, os));
  }
  set position(e) {
    _(c(this, os), e, !0);
  }
  get title() {
    return m(c(this, ls));
  }
  set title(e) {
    _(c(this, ls), e, !0);
  }
  get logoUrl() {
    return m(c(this, ds));
  }
  set logoUrl(e) {
    _(c(this, ds), e, !0);
  }
  get placeholder() {
    return m(c(this, cs));
  }
  set placeholder(e) {
    _(c(this, cs), e, !0);
  }
  get accentColor() {
    return m(c(this, us));
  }
  set accentColor(e) {
    _(c(this, us), e, !0);
  }
  get avatarEmoji() {
    return m(c(this, fs));
  }
  set avatarEmoji(e) {
    _(c(this, fs), e, !0);
  }
  get companyName() {
    return m(c(this, gs));
  }
  set companyName(e) {
    _(c(this, gs), e, !0);
  }
  get titleSource() {
    return m(c(this, hs));
  }
  set titleSource(e) {
    _(c(this, hs), e, !0);
  }
  updateConfig(e, s = "default") {
    if (e.title !== void 0) {
      this.setTitle(e.title, s);
      const { title: i, ...r } = e;
      Object.assign(this, r);
    } else
      Object.assign(this, e);
  }
  /**
   * Set title with priority enforcement
   * Priority: user > backend > default
   */
  setTitle(e, s) {
    const i = ["user", "backend", "default"], r = i.indexOf(this.titleSource);
    i.indexOf(s) <= r && (this.title = e, this.titleSource = s);
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
    const s = {}, i = e.getAttributeNames();
    for (const r of i) {
      const n = zn.attributeToProperty(r);
      if (!n) continue;
      const a = e.getAttribute(r);
      if (a)
        switch (n) {
          case "clientId":
          case "title":
          case "logoUrl":
          case "placeholder":
          case "avatarEmoji":
            s[n] = a;
            break;
          case "accentColor":
            s.accentColor = dr(a, this.accentColor);
            break;
          case "theme":
            Wn(a) && (s.theme = a);
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
    return this.accentColor && (e["--widget-primary"] = this.accentColor, e["--widget-primary-hover"] = Me(this.accentColor, -20), e["--widget-primary-light"] = Me(this.accentColor, 20), e["--widget-primary-dark"] = Me(this.accentColor, -30), e["--widget-gradient"] = `linear-gradient(135deg, ${this.accentColor} 0%, ${Me(this.accentColor, 20)} 100%)`, e["--widget-gradient-hover"] = `linear-gradient(135deg, ${Me(this.accentColor, -20)} 0%, ${this.accentColor} 100%)`), e;
  }
  applyTheme(e) {
    e.setAttribute("data-theme", this.theme);
    const s = this.cssVariables;
    for (const [i, r] of Object.entries(s))
      e.style.setProperty(i, r);
  }
  // Remove duplicate adjustColor method - using shared utility from color.ts
}
ns = new WeakMap(), as = new WeakMap(), os = new WeakMap(), ls = new WeakMap(), ds = new WeakMap(), cs = new WeakMap(), us = new WeakMap(), fs = new WeakMap(), gs = new WeakMap(), hs = new WeakMap();
const Us = new ol(), ll = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  configStore: Us
}, Symbol.toStringTag, { value: "Module" })), dl = "data:image/png;base64,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", cl = "data:image/png;base64,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", ul = dl, fl = cl;
var gl = /* @__PURE__ */ H('<img alt="Chat" class="button-logo svelte-bkcus6"/>'), hl = /* @__PURE__ */ ko('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-bkcus6"><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor" class="svelte-bkcus6"></path></svg>'), pl = /* @__PURE__ */ H('<span class="unread-indicator svelte-bkcus6"></span>'), vl = /* @__PURE__ */ H("<button><!> <!></button>");
const ml = {
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
function Hn(t, e) {
  ct(e, !0), Pt(t, ml);
  let s = bs(e, "onclick", 7);
  const i = /* @__PURE__ */ Ue(() => U.isOpen), r = /* @__PURE__ */ Ue(() => U.hasUnreadMessages);
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
  }, o = vl();
  let l;
  o.__click = n;
  var d = G(o);
  {
    var u = (f) => {
      var v = gl();
      Tt(() => Mt(v, "src", ul)), D(f, v);
    }, g = (f) => {
      var v = hl();
      D(f, v);
    };
    Ee(d, (f) => {
      m(i) ? f(g, !1) : f(u);
    });
  }
  var h = ie(d, 2);
  {
    var p = (f) => {
      var v = pl();
      D(f, v);
    };
    Ee(h, (f) => {
      m(r) && !m(i) && f(p);
    });
  }
  return V(o), Tt(() => {
    l = Nn(o, 1, "floating-button svelte-bkcus6", null, l, { open: m(i) }), Mt(o, "aria-label", m(i) ? "Close chat" : "Open chat");
  }), D(t, o), ut(a);
}
Si(["click"]);
Nt(Hn, { onclick: {} }, [], [], !0);
var wl = /* @__PURE__ */ H('<header class="chat-header svelte-g5m62x"><div class="header-left svelte-g5m62x"><img alt="Logo" class="header-logo svelte-g5m62x"/></div> <div class="header-center svelte-g5m62x"><h2 class="header-title svelte-g5m62x"> </h2> <span class="header-status svelte-g5m62x">Online</span></div> <div class="header-right svelte-g5m62x"><button class="close-button svelte-g5m62x" aria-label="Close chat"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-g5m62x"><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor" class="svelte-g5m62x"></path></svg></button></div></header>');
const bl = {
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
function Bn(t, e) {
  ct(e, !0), Pt(t, bl);
  let s = bs(e, "onclose", 7);
  const i = /* @__PURE__ */ Ue(() => Us.logoUrl || fl);
  function r() {
    var f;
    U.close(), (f = s()) == null || f();
  }
  var n = {
    get onclose() {
      return s();
    },
    set onclose(f) {
      s(f), lt();
    }
  }, a = wl(), o = G(a), l = G(o);
  V(o);
  var d = ie(o, 2), u = G(d), g = G(u, !0);
  V(u), ai(2), V(d);
  var h = ie(d, 2), p = G(h);
  return p.__click = r, V(h), V(a), Tt(() => {
    Mt(l, "src", m(i)), ui(g, Us.title);
  }), D(t, a), ut(n);
}
Si(["click"]);
Nt(Bn, { onclose: {} }, [], [], !0);
var yl = /* @__PURE__ */ H('<span class="sending-indicator svelte-1uqoiy7" aria-label="Sending message" role="status"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svelte-1uqoiy7"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="currentColor" opacity="0.3"></path><path d="M12 2C6.48 2 2 6.48 2 12H4C4 7.58 7.58 4 12 4V2Z" fill="currentColor"><animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite"></animateTransform></path></svg></span>'), Al = /* @__PURE__ */ H('<span class="failed-indicator svelte-1uqoiy7" aria-label="Message failed to send" role="alert"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svelte-1uqoiy7"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#ef4444"></path><path d="M11 7H13V13H11V7ZM11 15H13V17H11V15Z" fill="#ef4444"></path></svg></span>'), xl = /* @__PURE__ */ H('<div role="listitem"><div class="message-bubble svelte-1uqoiy7"><span class="message-content"> </span> <!> <!></div> <div class="message-time svelte-1uqoiy7"> </div></div>');
const Sl = {
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
function qn(t, e) {
  ct(e, !0), Pt(t, Sl);
  let s = bs(e, "message", 7);
  function i(x) {
    return new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", hour12: !0 }).format(x);
  }
  const r = /* @__PURE__ */ Ue(() => s().role === "user");
  var n = {
    get message() {
      return s();
    },
    set message(x) {
      s(x), lt();
    }
  }, a = xl();
  let o;
  var l = G(a), d = G(l), u = G(d, !0);
  V(d);
  var g = ie(d, 2);
  {
    var h = (x) => {
      var O = yl();
      D(x, O);
    };
    Ee(g, (x) => {
      s().status === "sending" && x(h);
    });
  }
  var p = ie(g, 2);
  {
    var f = (x) => {
      var O = Al();
      D(x, O);
    };
    Ee(p, (x) => {
      s().status === "failed" && x(f);
    });
  }
  V(l);
  var v = ie(l, 2), y = G(v, !0);
  return V(v), V(a), Tt(
    (x, O) => {
      o = Nn(a, 1, "message svelte-1uqoiy7", null, o, { user: m(r), assistant: !m(r) }), Mt(a, "aria-label", m(r) ? "Your message" : "Assistant message"), ui(u, s().content), Mt(v, "aria-label", x), ui(y, O);
    },
    [
      () => `Sent at ${i(s().timestamp)}`,
      () => i(s().timestamp)
    ]
  ), D(t, a), ut(n);
}
Nt(qn, { message: {} }, [], [], !0);
$a();
var El = /* @__PURE__ */ H('<div class="typing-indicator svelte-ej4x60" role="status" aria-live="polite" aria-label="Assistant is typing"><span aria-hidden="true" class="svelte-ej4x60"></span> <span aria-hidden="true" class="svelte-ej4x60"></span> <span aria-hidden="true" class="svelte-ej4x60"></span> <span class="sr-only svelte-ej4x60">Assistant is typing a response</span></div>');
const Il = {
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
function Vn(t, e) {
  ct(e, !1), Pt(t, Il), Go();
  var s = To(), i = si(s);
  {
    var r = (n) => {
      var a = El();
      D(n, a);
    };
    Ee(i, (n) => {
      C.isTyping && n(r);
    });
  }
  D(t, s), ut();
}
Nt(Vn, {}, [], [], !0);
var Cl = /* @__PURE__ */ H('<div class="empty-state svelte-qha2j" role="status" aria-label="No messages yet"><div class="empty-icon svelte-qha2j" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-qha2j"><path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16Z" fill="currentColor"></path><path d="M7 9H17V11H7V9ZM7 6H17V8H7V6ZM7 12H14V14H7V12Z" fill="currentColor"></path></svg></div> <p class="svelte-qha2j">Start a conversation</p> <span class="svelte-qha2j">Ask me anything!</span></div>'), _l = /* @__PURE__ */ H('<div class="messages-container svelte-qha2j" role="list" aria-label="Messages"><!> <!></div>'), kl = /* @__PURE__ */ H('<div class="error-message svelte-qha2j"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-qha2j"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#ef4444"></path><path d="M11 7H13V13H11V7ZM11 15H13V17H11V15Z" fill="#ef4444"></path></svg> <p class="svelte-qha2j"> </p></div>'), Tl = /* @__PURE__ */ H('<div class="message-list svelte-qha2j" role="log" aria-live="polite" aria-label="Chat conversation"><!> <!></div>');
const Ml = {
  hash: "svelte-qha2j",
  code: `.message-list.svelte-qha2j {flex:1;overflow-y:auto;padding:var(--widget-space-lg);display:flex;flex-direction:column;background:var(--widget-gradient-subtle);position:relative;
    /* iOS momentum scrolling */-webkit-overflow-scrolling:touch;}.empty-state.svelte-qha2j {display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;text-align:center;padding:var(--widget-space-3xl) var(--widget-space-lg);
    animation: fadeIn var(--widget-transition-slow);}.empty-icon.svelte-qha2j {width:80px;height:80px;margin-bottom:var(--widget-space-lg);background:var(--widget-glass);backdrop-filter:blur(var(--widget-blur));border-radius:var(--widget-radius-2xl);display:flex;align-items:center;justify-content:center;box-shadow:var(--widget-shadow-md);
    animation: pulse 2s ease-in-out infinite;}.empty-icon.svelte-qha2j svg:where(.svelte-qha2j) {width:48px;height:48px;color:var(--widget-primary);opacity:0.8;}.empty-state.svelte-qha2j p:where(.svelte-qha2j) {margin:0;font-size:var(--widget-font-size-lg);font-weight:600;color:var(--widget-text);margin-bottom:var(--widget-space-xs);}.empty-state.svelte-qha2j span:where(.svelte-qha2j) {font-size:var(--widget-font-size-sm);color:var(--widget-text-secondary);}.messages-container.svelte-qha2j {display:flex;flex-direction:column;gap:var(--widget-space-md);padding-bottom:var(--widget-space-lg);}.error-message.svelte-qha2j {display:flex;align-items:center;gap:var(--widget-space);padding:var(--widget-space) var(--widget-space-md);background:var(--widget-glass);backdrop-filter:blur(var(--widget-blur));border:1px solid var(--widget-error-light);border-radius:var(--widget-radius-lg);color:var(--widget-error);margin-top:var(--widget-space);box-shadow:var(--widget-shadow);
    animation: slideUp var(--widget-transition-slow);}.error-message.svelte-qha2j svg:where(.svelte-qha2j) {width:20px;height:20px;flex-shrink:0;}.error-message.svelte-qha2j p:where(.svelte-qha2j) {margin:0;font-size:var(--widget-font-size-sm);font-weight:500;}
  
  /* Custom scrollbar */.message-list.svelte-qha2j::-webkit-scrollbar {width:6px;}.message-list.svelte-qha2j::-webkit-scrollbar-track {background:transparent;}.message-list.svelte-qha2j::-webkit-scrollbar-thumb {background:var(--widget-border);border-radius:var(--widget-radius-full);}.message-list.svelte-qha2j::-webkit-scrollbar-thumb:hover {background:var(--widget-text-muted);}
  
  /* Dark theme adjustments */`
};
function Gn(t, e) {
  ct(e, !0), Pt(t, Ml);
  let s, i = !0;
  qt(() => {
    C.messages, i && r();
  }), qt(() => {
    C.isTyping, i && r();
  }), qt(() => {
    C.streamingUpdateSignal, i && C.isStreaming && r();
  });
  async function r() {
    await kn(), s && (s.scrollTop = s.scrollHeight);
  }
  function n() {
    if (s) {
      const { scrollTop: h, scrollHeight: p, clientHeight: f } = s;
      i = p - h - f < 100;
    }
  }
  lr(() => {
    r();
  });
  var a = Tl(), o = G(a);
  {
    var l = (h) => {
      var p = Cl();
      D(h, p);
    }, d = (h) => {
      var p = _l(), f = G(p);
      Ro(f, 17, () => C.messages, (y) => y.id, (y, x) => {
        qn(y, {
          get message() {
            return m(x);
          }
        });
      });
      var v = ie(f, 2);
      Vn(v, {}), V(p), D(h, p);
    };
    Ee(o, (h) => {
      C.messages.length === 0 ? h(l) : h(d, !1);
    });
  }
  var u = ie(o, 2);
  {
    var g = (h) => {
      var p = kl(), f = ie(G(p), 2), v = G(f, !0);
      V(f), V(p), Tt(() => ui(v, C.error)), D(h, p);
    };
    Ee(u, (h) => {
      C.error && h(g);
    });
  }
  V(a), or(a, (h) => s = h, () => s), Co("scroll", a, n), D(t, a), ut();
}
Nt(Gn, {}, [], [], !0);
class Ol {
  constructor(e) {
    this.isDebugMode = e.debug ?? !1;
  }
  /**
   * Log debug information - only shows in debug mode
   */
  log(e, s, i) {
    this.isDebugMode && (i !== void 0 ? console.log(`[${e}] ${s}:`, i) : console.log(`[${e}] ${s}`));
  }
  /**
   * Log warning information - only shows in debug mode
   */
  warn(e, s, i) {
    this.isDebugMode && (i !== void 0 ? console.warn(`[${e}] ${s}:`, i) : console.warn(`[${e}] ${s}`));
  }
  /**
   * Log error information - always shows (even in production)
   */
  error(e, s, i) {
    i !== void 0 ? console.error(`[${e}] ${s}:`, i) : console.error(`[${e}] ${s}`);
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
function cr(t) {
  return new Ol(t);
}
function Mi() {
  var t;
  try {
    return typeof process < "u" && ((t = process.env) == null ? void 0 : t.NODE_ENV) === "test" ? process.env.ENABLE_TEST_DEBUG === "true" : localStorage.getItem("ai-widget-debug") === "true" || window._aiWidgetDebug === !0 || !1;
  } catch {
    return !1;
  }
}
const P = {
  isDebugEnabled: Mi,
  log: (t, e, s) => {
    Mi() && (s !== void 0 ? console.log(`[${t}] ${e}:`, s) : console.log(`[${t}] ${e}`));
  },
  warn: (t, e, s) => {
    Mi() && (s !== void 0 ? console.warn(`[${t}] ${e}:`, s) : console.warn(`[${t}] ${e}`));
  },
  error: (t, e, s) => {
    s !== void 0 ? console.error(`[${t}] ${e}:`, s) : console.error(`[${t}] ${e}`);
  }
};
class Ut {
  constructor() {
    this.currentId = null, this.messageMap = /* @__PURE__ */ new Map();
  }
  /**
   * Get singleton instance
   */
  static getInstance() {
    return Ut.instance || (Ut.instance = new Ut()), Ut.instance;
  }
  /**
   * Generate a new correlation ID
   */
  generate() {
    const e = Date.now(), s = Math.random().toString(36).substr(2, 9), i = `msg_${e}_${s}`;
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
    for (const [i] of this.messageMap.entries()) {
      const r = i.match(/(\d+)/);
      if (r) {
        const n = parseInt(r[1], 10);
        s - n > e && this.messageMap.delete(i);
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
function Fe() {
  return Ut.getInstance();
}
var Ll = /* @__PURE__ */ H('<div class="input-bar svelte-1a8gd73"><textarea class="input-field svelte-1a8gd73" rows="1" aria-label="Message input"></textarea> <button class="send-button svelte-1a8gd73" aria-label="Send message"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-1a8gd73"><path d="M2 21L23 12L2 3V10L17 12L2 14V21Z" fill="currentColor"></path></svg></button></div>');
const Rl = {
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
function Yn(t, e) {
  ct(e, !0), Pt(t, Rl);
  let s = bs(e, "onsend", 7), i = bs(e, "disabled", 7, !1), r = /* @__PURE__ */ M(""), n;
  function a() {
    var x, O, B, oe;
    const v = Fe().generate();
    P.log("InputBar", "handleSend() called", {
      correlationId: v,
      rawInputValue: m(r),
      rawLength: ((x = m(r)) == null ? void 0 : x.length) || 0,
      rawType: typeof m(r),
      disabled: i(),
      isTyping: C.isTyping
    });
    const y = m(r).trim();
    P.log("InputBar", "After trimming", {
      correlationId: v,
      original: m(r),
      trimmed: y,
      originalLength: ((O = m(r)) == null ? void 0 : O.length) || 0,
      trimmedLength: (y == null ? void 0 : y.length) || 0,
      wasEmptyAfterTrim: !y,
      hadWhitespaceOnly: (((B = m(r)) == null ? void 0 : B.length) || 0) > 0 && !y
    }), y && !i() && !C.isTyping ? (P.log("InputBar", "Conditions met, calling onsend", {
      correlationId: v,
      trimmedValue: y,
      trimmedLength: y.length,
      willSend: !0
    }), Fe().setCurrent(v), (oe = s()) == null || oe(y), _(r, ""), l()) : P.log("InputBar", "Send blocked", {
      correlationId: v,
      hasContent: !!y,
      disabled: i(),
      isTyping: C.isTyping,
      trimmedValue: y || "(empty)",
      reason: y ? i() ? "disabled" : C.isTyping ? "typing in progress" : "unknown" : "empty content"
    });
  }
  function o(v) {
    v.key === "Enter" && !v.shiftKey && (v.preventDefault(), a());
  }
  function l() {
    n && (n.style.height = "auto", n.style.height = Math.min(n.scrollHeight, 120) + "px");
  }
  const d = /* @__PURE__ */ Ue(() => i() || C.isTyping || C.error !== null), u = /* @__PURE__ */ Ue(() => C.isTyping ? "Waiting for response..." : C.error ? "Error occurred" : Us.placeholder);
  var g = {
    get onsend() {
      return s();
    },
    set onsend(v) {
      s(v), lt();
    },
    get disabled() {
      return i();
    },
    set disabled(v = !1) {
      i(v), lt();
    }
  }, h = Ll(), p = G(h);
  lo(p), p.__keydown = o, p.__input = l, or(p, (v) => n = v, () => n);
  var f = ie(p, 2);
  return f.__click = a, V(h), Tt(
    (v) => {
      Mt(p, "placeholder", m(u)), p.disabled = m(d), f.disabled = v;
    },
    [() => m(d) || !m(r).trim()]
  ), Vo(p, () => m(r), (v) => _(r, v)), D(t, h), ut(g);
}
Si(["keydown", "input", "click"]);
Nt(Yn, { onsend: {}, disabled: {} }, [], [], !0);
class Pl {
  /**
   * Validate message content and length
   */
  static validate(e) {
    const s = Fe().getCurrent();
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
    const i = e.trim();
    if (P.log("MessageValidator", "After trimming", {
      correlationId: s,
      original: e,
      trimmed: i,
      originalLength: e.length,
      trimmedLength: i.length,
      wasWhitespaceOnly: e.length > 0 && i.length === 0
    }), i.length < ht.MIN_LENGTH) {
      const a = "Message is too short";
      return P.log("MessageValidator", "Validation failed - too short", {
        correlationId: s,
        trimmedLength: i.length,
        minLength: ht.MIN_LENGTH,
        error: a
      }), {
        isValid: !1,
        error: a
      };
    }
    if (i.length > ht.MAX_LENGTH) {
      const a = `Message exceeds maximum length of ${ht.MAX_LENGTH} characters`;
      return P.log("MessageValidator", "Validation failed - too long", {
        correlationId: s,
        trimmedLength: i.length,
        maxLength: ht.MAX_LENGTH,
        error: a
      }), {
        isValid: !1,
        error: a
      };
    }
    P.log("MessageValidator", "Starting HTML sanitization", {
      correlationId: s,
      inputContent: i,
      inputLength: i.length
    });
    const r = this.sanitizeHTML(i);
    P.log("MessageValidator", "HTML sanitization complete", {
      correlationId: s,
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
    const n = {
      isValid: !0,
      sanitizedValue: r
    };
    return P.log("MessageValidator", "Final validation result", { correlationId: s, result: n }), n;
  }
  /**
   * Basic HTML sanitization
   */
  static sanitizeHTML(e) {
    const s = Fe().getCurrent();
    P.log("MessageValidator", "sanitizeHTML() input", {
      correlationId: s,
      input: e,
      inputLength: e.length
    });
    let i = e, r = 0;
    const n = i;
    i = i.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ""), i !== n && P.log("MessageValidator", `Step ${++r} - Removed script tags`, {
      correlationId: s,
      before: n,
      after: i,
      removed: n.length - i.length
    });
    const a = i;
    i = i.replace(/href\s*=\s*["']javascript:[^"']*["']/gi, 'href=""'), i !== a && P.log("MessageValidator", `Step ${++r} - Removed javascript: protocol`, {
      correlationId: s,
      before: a,
      after: i,
      removed: a.length - i.length
    });
    const o = i;
    i = i.replace(/\s*on\w+\s*=\s*["'][^"']*["']/gi, ""), i !== o && P.log("MessageValidator", `Step ${++r} - Removed event handlers:`, {
      correlationId: s,
      before: o,
      after: i,
      removed: o.length - i.length
    });
    const l = i;
    return i = i.replace(/src\s*=\s*["']data:[^"']*["']/gi, 'src=""'), i !== l && P.log("MessageValidator", `Step ${++r} - Removed data: URLs:`, {
      correlationId: s,
      before: l,
      after: i,
      removed: l.length - i.length
    }), P.log("MessageValidator", "sanitizeHTML() result", {
      correlationId: s,
      originalInput: e,
      finalResult: i,
      inputLength: e.length,
      resultLength: i.length,
      totalRemoved: e.length - i.length,
      wasModified: e !== i
    }), i;
  }
}
class Qn {
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
  constructor(e, s, i = !1) {
    super(e), this.name = "ChatWidgetError", this.context = s, this.timestamp = /* @__PURE__ */ new Date(), this.isRetryable = i, Error.captureStackTrace && Error.captureStackTrace(this, me);
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
  constructor(e, s, i, r) {
    super(e, { ...r, statusCode: s, endpoint: i }, !0), this.name = "NetworkError", this.statusCode = s, this.endpoint = i;
  }
}
class Kn extends me {
  constructor(e, s, i, r, n) {
    super(e, { ...n, wsUrl: s, closeCode: i, closeReason: r }, !0), this.name = "WebSocketError", this.wsUrl = s, this.closeCode = i, this.closeReason = r;
  }
}
class Ps extends me {
  constructor(e, s, i, r, n) {
    super(e, { ...n, field: s, value: i, expectedType: r }, !1), this.name = "ValidationError", this.field = s, this.value = i, this.expectedType = r;
  }
}
class $n extends me {
  constructor(e, s, i, r) {
    super(e, { ...r, configKey: s, configValue: i }, !1), this.name = "ConfigurationError", this.configKey = s, this.configValue = i;
  }
}
class Jn extends me {
  constructor(e, s, i, r) {
    super(e, { ...r, clientId: s, statusCode: i }, !1), this.name = "AuthenticationError", this.clientId = s, this.statusCode = i;
  }
}
class Ft extends me {
  constructor(e, s, i, r) {
    super(e, { ...r, retryAfter: s, limit: i }, !0), this.name = "RateLimitError", this.retryAfter = s, this.limit = i;
  }
}
class Zn extends me {
  constructor(e, s, i, r) {
    super(e, { ...r, storageType: s, operation: i }, !0), this.name = "StorageError", this.storageType = s, this.operation = i;
  }
}
class Xn extends me {
  constructor(e, s, i, r) {
    super(e, { ...r, timeout: s, operation: i }, !0), this.name = "TimeoutError", this.timeout = s, this.operation = i;
  }
}
function Rr(t) {
  return t instanceof me ? t.isRetryable : !!(t instanceof TypeError && t.message.includes("fetch"));
}
function Nl(t) {
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
function Dl(t) {
  return t instanceof jt ? t.statusCode === 404 ? "Service temporarily unavailable. Please try again later." : t.statusCode === 429 || t instanceof Ft ? "Too many requests. Please wait a moment and try again." : t.statusCode && t.statusCode >= 500 ? "Server error. Please try again in a few moments." : t.statusCode && (t.statusCode === 400 || t.statusCode === 401 || t.statusCode === 403) ? t.message : "Unable to connect to the server. Please check your internet connection." : t instanceof Kn ? "Connection lost. Attempting to reconnect..." : t instanceof Jn ? "Access denied. Please check your configuration." : t instanceof Ps ? t.message : t instanceof $n ? "Widget configuration error. Please contact support." : t instanceof Xn ? "Request timed out. Please try again." : t instanceof Zn ? "Unable to save data. Please check your browser settings." : "Something went wrong. Please try again.";
}
class Ns {
  /**
   * Process and categorize errors using custom error classes
   */
  static handle(e, s) {
    const i = Nl(e);
    let r;
    return e instanceof jt ? r = "NETWORK_ERROR" : e instanceof Kn ? r = "WEBSOCKET_ERROR" : e instanceof Ps ? r = "VALIDATION_ERROR" : e instanceof $n ? r = "CONFIGURATION_ERROR" : e instanceof Jn ? r = "AUTHENTICATION_ERROR" : e instanceof Ft ? r = "RATE_LIMIT_ERROR" : e instanceof Zn ? r = "STORAGE_ERROR" : e instanceof Xn ? r = "TIMEOUT_ERROR" : e instanceof me ? r = "WIDGET_ERROR" : r = "UNKNOWN_ERROR", {
      message: Dl(e),
      code: r,
      isUserFacing: !0,
      shouldRetry: Rr(e),
      context: {
        ...s,
        metadata: {
          ...s.metadata,
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
    return e && typeof e == "object" && "shouldRetry" in e ? e.shouldRetry : Rr(e);
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
const zl = "https://ai-gateway-service-staging-639717727892.us-east4.run.app";
class Yi {
  // Production URL configured via VITE_API_BASE_URL environment variable
  // Falls back to DEFAULT_GATEWAY_URL if not set
  /**
   * Resolve API and WebSocket URLs based on client ID and environment
   */
  static resolveUrls(e, s = {}) {
    const i = Qn.validate(e);
    if (!i.isValid)
      throw new Error(`Invalid client ID for URL resolution: ${i.error}`);
    const r = i.sanitizedValue;
    return this.isDevelopmentEnvironment(s.environment) ? this.resolveDevelopmentUrls(r) : this.resolveProductionUrls(r);
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
    const s = zl, i = this.isLocalhostUrl(s) ? s : this.ensureHttps(s);
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
    const i = this.buildUrlWithPath(e, `/api/v1/communication/${s}/ws`);
    return this.convertToWebSocket(i);
  }
  /**
   * Safely append a path to a base URL, handling query parameters and fragments correctly
   */
  static buildUrlWithPath(e, s) {
    try {
      const i = new URL(e);
      return i.pathname = (i.pathname === "/" ? "" : i.pathname) + s, i.toString();
    } catch {
      const r = e.endsWith("/") ? "" : "/";
      return e + r + s.substring(1);
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
      const s = window, i = s.AIChat || s.ChatWidget || {}, r = e ? this.parseElementAttributes(e) : {}, n = {
        ...Ge,
        ...i,
        ...r
      };
      if ((i.apiUrl || i.wsUrl) && console.warn(
        `[Assistant Widget] Deprecation Warning: window.AIChat.apiUrl and window.AIChat.wsUrl are no longer supported.
URL configuration is now handled at build time via VITE_API_BASE_URL environment variable.
For local development: npm run build:local
For production: npm run build (uses default staging gateway)`
      ), !n.clientId)
        throw new Error("Widget configuration missing: clientId is required");
      const a = Qn.validate(n.clientId);
      if (!a.isValid)
        throw new Error(`Invalid client ID: ${a.error}`);
      const o = Yi.resolveUrls(a.sanitizedValue);
      this.config = {
        ...n,
        clientId: a.sanitizedValue,
        ...o
      };
    } catch (s) {
      const i = Ns.handle(s, {
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
    const s = {}, i = e.getAttributeNames();
    for (const r of i) {
      const n = zn.attributeToProperty(r);
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
            s[n] = a;
            break;
          case "theme":
            Wn(a) && (s.theme = a);
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
const ys = /* @__PURE__ */ new Map();
let js = !1;
function Ul() {
  try {
    const t = "__storage_test__";
    return localStorage.setItem(t, t), localStorage.removeItem(t), !0;
  } catch {
    return !1;
  }
}
js = !Ul();
function jl(t) {
  try {
    return js ? ys.get(t) ?? null : localStorage.getItem(t);
  } catch {
    return ys.get(t) ?? null;
  }
}
function Fl(t, e) {
  try {
    return js ? (ys.set(t, e), !0) : (localStorage.setItem(t, e), !0);
  } catch {
    return ys.set(t, e), js = !0, !1;
  }
}
function Hl(t) {
  try {
    if (js) {
      ys.delete(t);
      return;
    }
    localStorage.removeItem(t);
  } catch {
    ys.delete(t);
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
    var s;
    let e = this.getItem(ke.VISITOR_ID_KEY);
    return e || (e = this.generateVisitorId(), this.setItem(ke.VISITOR_ID_KEY, e), (s = window.AIChat) != null && s.debug && P.log("ChatWidget", "Created new visitor", e)), e;
  }
  /**
   * Internal storage access methods that use adapter if available
   */
  getItem(e) {
    return this.storageAdapter ? this.storageAdapter.getItem(e) : jl(e);
  }
  setItem(e, s) {
    this.storageAdapter ? this.storageAdapter.setItem(e, s) : Fl(e, s);
  }
  removeItem(e) {
    this.storageAdapter ? this.storageAdapter.removeItem(e) : Hl(e);
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
    const i = s.slice(-10);
    this.setItem(
      ke.SESSION_HISTORY_KEY,
      JSON.stringify(i)
    );
  }
  getSessionHistory() {
    const e = this.getItem(ke.SESSION_HISTORY_KEY);
    return e ? JSON.parse(e) : [];
  }
  getLastActiveSession() {
    const s = this.getSessionHistory().filter(
      (i) => i.active && Date.now() - i.timestamp < re.SESSION_TIMEOUT
    );
    return s.length > 0 ? s[s.length - 1].id : null;
  }
  /**
   * Mark a session as inactive when it ends
   */
  markSessionInactive(e) {
    const i = this.getSessionHistory().map(
      (r) => r.id === e ? { ...r, active: !1 } : r
    );
    this.setItem(
      ke.SESSION_HISTORY_KEY,
      JSON.stringify(i)
    );
  }
  /**
   * Clear visitor data for GDPR compliance
   */
  clearVisitorData() {
    this.removeItem(ke.VISITOR_ID_KEY), this.removeItem(ke.SESSION_HISTORY_KEY), this.visitorId = this.generateVisitorId();
  }
};
ke.VISITOR_ID_KEY = Or.VISITOR_ID, ke.SESSION_HISTORY_KEY = Or.SESSIONS;
let Qi = ke;
class Ms {
  /**
   * Get API endpoint URL with base path resolved
   */
  static getApiUrl(e, s) {
    const { apiUrl: i } = Yi.resolveUrls(s.clientId, s.options);
    switch (e) {
      case "init":
        return `${i}/init`;
      case "chat":
        return `${i}/chat`;
      case "sessionHealth":
        if (!s.sessionId)
          throw new Error("sessionId required for sessionHealth endpoint");
        return `${i}/session/${s.sessionId}/health`;
      default:
        throw new Error(`Unknown API endpoint: ${e}`);
    }
  }
  /**
   * Get WebSocket URL with query parameters
   */
  static getWebSocketUrl(e) {
    const { wsUrl: s } = Yi.resolveUrls(e.clientId, e.options), i = new URLSearchParams({
      session_id: e.sessionId
    });
    return e.visitorId && i.append("visitor_id", e.visitorId), `${s}?${i}`;
  }
}
class Bl {
  constructor(e, s) {
    this.sessionId = null, this.config = e, this.visitor = s, this.debugLogger = cr(e.getAll());
  }
  /**
   * Initialize widget session with backend
   */
  async initialize() {
    try {
      const e = new AbortController(), s = setTimeout(() => e.abort(), re.API_TIMEOUT), i = Ms.getApiUrl("init", {
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
      const n = Fe().getCurrent(), a = await fetch(i, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: window.location.origin,
          "X-Correlation-ID": n
        },
        body: JSON.stringify({ body: r }),
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
          i
        );
      }
      const o = await a.json();
      return this.sessionId = o.session_id, this.visitor.saveSessionId(o.session_id), o;
    } catch (e) {
      if (e instanceof Ps || e instanceof jt || e instanceof Ft)
        throw e;
      const s = Ns.handle(e, {
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
    var i, r;
    const s = Fe().getCurrent();
    try {
      this.debugLogger.log("APIClient", "sendMessage() called", {
        correlationId: s,
        message: e,
        messageLength: (e == null ? void 0 : e.length) || 0,
        messageType: typeof e,
        sessionId: this.sessionId,
        clientId: this.config.clientId
      });
      const n = Pl.validate(e);
      if (this.debugLogger.log("APIClient", "Message validation result", {
        correlationId: s,
        input: e,
        isValid: n.isValid,
        error: n.error,
        sanitizedValue: n.sanitizedValue,
        sanitizedLength: ((i = n.sanitizedValue) == null ? void 0 : i.length) || 0,
        contentChanged: e !== n.sanitizedValue
      }), !n.isValid)
        throw this.debugLogger.error("APIClient", "Validation failed", { correlationId: s, error: n.error }), new Ps(n.error || "Validation failed", "message", e);
      this.sessionId || (this.debugLogger.log("APIClient", "No session ID, attempting to resume or initialize...", { correlationId: s }), await this.resumeSession() || await this.initialize());
      const a = new AbortController(), o = setTimeout(() => a.abort(), re.API_TIMEOUT), l = {
        body: {
          client_id: this.config.clientId,
          visitor_id: this.visitor.getVisitorId(),
          session_id: this.sessionId,
          message: n.sanitizedValue
        }
      }, d = Ms.getApiUrl("chat", {
        clientId: this.config.clientId
      });
      this.debugLogger.log("APIClient", "HTTP request payload", {
        correlationId: s,
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
      if (this.debugLogger.error("APIClient", "sendMessage() error", { correlationId: s, error: n }), n instanceof Ps || n instanceof jt || n instanceof Ft)
        throw n;
      const a = Ns.handle(n, {
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
      const e = new AbortController(), s = setTimeout(() => e.abort(), re.API_TIMEOUT), i = Ms.getApiUrl("sessionHealth", {
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
      const n = Fe().getCurrent(), a = await fetch(i, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: window.location.origin,
          "X-Correlation-ID": n
        },
        body: JSON.stringify({ body: r }),
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
      const e = new AbortController(), s = setTimeout(() => e.abort(), re.API_TIMEOUT), i = Ms.getApiUrl("sessionHealth", {
        clientId: this.config.clientId,
        sessionId: this.sessionId
      }), r = {
        client_id: this.config.clientId,
        visitor_id: this.visitor.getVisitorId()
      }, n = Fe().getCurrent(), a = await fetch(i, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: window.location.origin,
          "X-Correlation-ID": n
        },
        body: JSON.stringify({ body: r }),
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
      const s = Ns.handle(e, {
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
var Os = /* @__PURE__ */ ((t) => (t.DISCONNECTED = "disconnected", t.CONNECTING = "connecting", t.CONNECTED = "connected", t.ERROR = "error", t))(Os || {});
class ql {
  constructor(e, s) {
    this.ws = null, this.sessionId = null, this.state = "disconnected", this.messageQueue = [], this.reconnectAttempts = 0, this.maxReconnectAttempts = re.MAX_RECONNECT_ATTEMPTS, this.reconnectDelay = re.RECONNECT_DELAY, this.heartbeatInterval = null, this.listeners = /* @__PURE__ */ new Map(), this.abortController = null, this.cleanupFunctions = [], this.config = e, this.visitor = s, this.debugLogger = cr(e.getAll());
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
        const s = Ms.getWebSocketUrl({
          clientId: this.config.clientId,
          sessionId: e,
          visitorId: this.visitor.getVisitorId()
        });
        this.ws = new WebSocket(s), this.setupEventHandlers();
      } catch (s) {
        const i = Ns.handle(s, {
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
      var e, s, i;
      this.debugLogger.log("WebSocketManager", "WebSocket connected successfully", {
        url: (e = this.ws) == null ? void 0 : e.url,
        readyState: (s = this.ws) == null ? void 0 : s.readyState,
        sessionId: this.sessionId,
        messageListeners: ((i = this.listeners.get("message")) == null ? void 0 : i.size) || 0,
        totalListeners: this.listeners.size,
        timestamp: Date.now()
      }), this.setState(
        "connected"
        /* CONNECTED */
      ), this.reconnectAttempts = 0, this.flushMessageQueue(), this.startHeartbeat();
    }, this.ws.onmessage = (e) => {
      var s, i, r, n, a, o, l, d, u;
      this.debugLogger.log("WebSocketManager", "Raw message received", {
        data: e.data,
        type: typeof e.data,
        length: ((s = e.data) == null ? void 0 : s.length) || 0,
        timestamp: Date.now(),
        wsReadyState: (i = this.ws) == null ? void 0 : i.readyState,
        sessionId: this.sessionId
      });
      try {
        const g = JSON.parse(e.data);
        this.debugLogger.log("WebSocketManager", "Parsed message", {
          message: g,
          messageType: g.type,
          content: (r = g.data) == null ? void 0 : r.content,
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
      var s, i;
      this.debugLogger.error("WebSocketManager", "WebSocket error details", {
        error: e,
        errorType: e.type,
        readyState: (s = this.ws) == null ? void 0 : s.readyState,
        url: (i = this.ws) == null ? void 0 : i.url,
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
    var r, n, a;
    const s = Fe().getCurrent();
    this.debugLogger.log("WebSocketManager", "send() called", {
      correlationId: s,
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
      correlation_id: s,
      timestamp: Date.now()
    });
    if (this.debugLogger.log("WebSocketManager", "JSON payload created", {
      correlationId: s,
      data: i,
      dataLength: i.length,
      parsedBack: JSON.parse(i)
    }), this.state === "connected" && ((n = this.ws) == null ? void 0 : n.readyState) === WebSocket.OPEN)
      this.debugLogger.log("WebSocketManager", "Sending via WebSocket immediately", { correlationId: s }), this.ws.send(i);
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
      this.messageQueue.push(i), this.state === "disconnected" && (this.debugLogger.log("WebSocketManager", "Attempting to reconnect...", { correlationId: s }), this.reconnect());
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
    }, re.HEARTBEAT_INTERVAL), this.cleanupFunctions.push(() => this.stopHeartbeat());
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
    var i;
    (i = this.listeners.get(e)) == null || i.delete(s);
  }
  emit(e, s) {
    var i;
    (i = this.listeners.get(e)) == null || i.forEach((r) => r(s));
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
      const i = JSON.stringify({
        type: "ping",
        message: "connection-test",
        timestamp: Date.now()
      });
      this.debugLogger.log("WebSocketManager", "Sending test ping", i), this.ws.send(i);
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
class Vl {
  constructor(e, s, i) {
    this.typingTimeout = null, this.hasHiddenTypingForCurrentStream = !1, this.lastCompletionTimestamp = null, this.lastMessageSentTimestamp = null, this.COMPLETION_GRACE_PERIOD_MS = re.COMPLETION_GRACE_PERIOD, this.chatStore = e, this.uiStore = s, this.debugLogger = i;
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
      const i = this.chatStore.startStreamingMessage();
      this.chatStore.appendToStreamingMessage(s), this.debugLogger.log("ChatController", "Started streaming message", { messageId: i });
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
    if (e < this.COMPLETION_GRACE_PERIOD_MS && s > re.CONNECTION_DELAY) {
      this.debugLogger.log("ChatController", "Ignoring typing indicator - grace period");
      return;
    }
    !this.hasHiddenTypingForCurrentStream && !this.chatStore.isStreaming ? (this.debugLogger.log("ChatController", "Processing typing indicator"), this.chatStore.setTyping(!0), this.typingTimeout && clearTimeout(this.typingTimeout), this.typingTimeout = window.setTimeout(() => {
      this.debugLogger.log("ChatController", "Typing indicator timeout"), this.chatStore.setTyping(!1), this.typingTimeout = null;
    }, re.TYPING_INDICATOR_TIMEOUT)) : this.debugLogger.log("ChatController", "Ignoring typing indicator - already streaming");
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
var Gl = /* @__PURE__ */ H('<button class="restart-button svelte-zsv8oa" aria-describedby="error-message">Retry Connection</button> <span id="error-message" class="sr-only svelte-zsv8oa">Connection lost. Unable to reconnect. Click to retry connection.</span>', 1), Yl = /* @__PURE__ */ H('<button class="restart-button svelte-zsv8oa" aria-describedby="error-message">Retry Connection</button> <span id="error-message" class="sr-only svelte-zsv8oa">Connection error occurred. Click to retry connection.</span>', 1), Ql = /* @__PURE__ */ H('<div class="error-banner svelte-zsv8oa" role="alert" aria-live="polite"><!></div>'), Kl = /* @__PURE__ */ H('<button class="backdrop svelte-zsv8oa" aria-label="Close chat overlay" tabindex="-1"></button>'), $l = /* @__PURE__ */ H('<div class="chat-container svelte-zsv8oa" role="dialog" aria-label="Chat assistant" aria-modal="true" tabindex="-1"><!> <!> <!> <!></div> <!>', 1), Jl = /* @__PURE__ */ H('<div class="widget-container svelte-zsv8oa"><!> <!></div>');
const Zl = {
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
function ea(t, e) {
  ct(e, !0), Pt(t, Zl);
  let s = bs(e, "hostElement", 7), i, r, n, a, o, l;
  const d = Fe();
  let u = !1, g = !1, h = null, p = /* @__PURE__ */ M(Z(Os.DISCONNECTED)), f = /* @__PURE__ */ M(
    !1
    // Track if max reconnection attempts exhausted
  ), v = /* @__PURE__ */ M(null), y = null;
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
    const $ = S[0], ft = S[S.length - 1];
    return requestAnimationFrame(() => $.focus()), { firstFocusable: $, lastFocusable: ft };
  }
  function B(w) {
    if (w.key === "Escape" && U.isOpen) {
      w.preventDefault(), U.close(), q();
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
      const $ = S[0], ft = S[S.length - 1];
      w.shiftKey && document.activeElement === $ ? (w.preventDefault(), ft.focus()) : !w.shiftKey && document.activeElement === ft && (w.preventDefault(), $.focus());
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
  lr(async () => {
    try {
      if (i = new Wl(s()), l = cr(i.getAll()), r = new Qi(), n = new Bl(i, r), a = new ql(i, r), o = new Vl(C, U, l), s()) {
        const { configStore: w } = await Promise.resolve().then(() => ll);
        w.loadFromAttributes(s());
      }
      Y(), x(), l.log("ChatWidget", "Attaching WebSocket listeners"), a.on("message", Ii), a.on("stateChange", (w) => {
        l.log("ChatWidget", "WebSocket state changed", {
          oldState: m(p),
          newState: w,
          timestamp: Date.now()
        }), _(p, w, !0);
      }), a.on("error", (w) => {
        l.error("ChatWidget", "WebSocket error event", w), h = w.error, C.setError(w.error);
      }), a.on("connectionFailed", (w) => {
        l.error("ChatWidget", "WebSocket connection failed after max attempts", w), _(f, !0), h = w.error, C.setError(w.error);
      }), l.log("ChatWidget", "WebSocket listeners attached successfully"), U.isOpen && await ce(), l.log("ChatWidget", "Services initialized successfully");
    } catch (w) {
      l.error("ChatWidget", "Initialization failed", w), h = w instanceof Error ? w.message : "Failed to initialize chat";
    }
  }), $o(() => {
    const w = n == null ? void 0 : n.getSessionId();
    w && r.markSessionInactive(w), a == null || a.disconnect(), o == null || o.cleanup();
  });
  async function ce() {
    var w;
    if (!(u || g)) {
      g = !0;
      try {
        if (U.setLoading(!0), await n.resumeSession()) {
          const S = n.getSessionId();
          S && (await a.connect(S), setTimeout(
            () => {
              l.log("ChatWidget", "Testing WebSocket connection after session resumption..."), a.testConnection();
            },
            re.CONNECTION_DELAY
          ));
        } else {
          const S = await n.initialize();
          (w = S.assistant_info) != null && w.assistant_name && Us.setBackendTitle(S.assistant_info.assistant_name), await a.connect(S.session_id), setTimeout(
            () => {
              l.log("ChatWidget", "Testing WebSocket connection after initialization..."), a.testConnection();
            },
            re.CONNECTION_DELAY
          ), S.settings && te(S.settings);
        }
        u = !0;
      } catch (R) {
        h = R instanceof Error ? R.message : "Failed to initialize", C.setError(h);
      } finally {
        U.setLoading(!1), g = !1;
      }
    }
  }
  function Y() {
    const w = i.getAll();
    requestAnimationFrame(() => {
      if (s() && (s().setAttribute("data-theme", w.theme || "modern"), w.primary_color || w.accent_color)) {
        const R = w.accent_color || w.primary_color;
        if (R) {
          const S = dr(R, "#6b46c1");
          s().style.setProperty("--widget-primary", S), s().style.setProperty("--widget-primary-hover", Me(S, -20)), s().style.setProperty("--widget-primary-light", Me(S, 20)), s().style.setProperty("--widget-primary-dark", Me(S, -30)), s().style.setProperty("--widget-gradient", `linear-gradient(135deg, ${S} 0%, ${Me(S, 20)} 100%)`), s().style.setProperty("--widget-gradient-hover", `linear-gradient(135deg, ${Me(S, -20)} 0%, ${S} 100%)`);
        }
      }
    });
  }
  function te(w) {
    requestAnimationFrame(() => {
      s() && (w.theme && typeof w.theme == "string" && s().setAttribute("data-theme", w.theme), w.primary_color && typeof w.primary_color == "string" && s().style.setProperty("--widget-primary", w.primary_color));
    });
  }
  function Ii(w) {
    o.handleMessage(w);
  }
  async function ta(w) {
    const R = d.getCurrent();
    l.log("ChatWidget", "handleSendMessage called with content", {
      correlationId: R,
      content: w,
      length: (w == null ? void 0 : w.length) || 0,
      trimmed: (w == null ? void 0 : w.trim()) || "",
      type: typeof w
    });
    const S = C.addMessage(w, "user");
    if (o.resetForNewMessage(), l.log("ChatWidget", "Message added to store", {
      correlationId: R,
      messageId: S.id,
      content: S.content,
      length: S.content.length
    }), u || (l.log("ChatWidget", "Widget not initialized, initializing...", { correlationId: R }), await ce()), l.log("ChatWidget", "Connection state", {
      correlationId: R,
      connectionState: m(p),
      isConnected: m(p) === Os.CONNECTED,
      routingTo: m(p) === Os.CONNECTED ? "WebSocket" : "HTTP API"
    }), m(p) === Os.CONNECTED) {
      l.log("ChatWidget", "Sending via WebSocket", { correlationId: R, content: w });
      try {
        a.send(w), C.updateMessageStatus(S.id, "sent"), l.log("ChatWidget", "User message marked as sent", { messageId: S.id });
      } catch ($) {
        l.error("ChatWidget", "WebSocket send error", $), C.updateMessageStatus(S.id, "failed"), C.setError("Failed to send message. Please try again.");
        return;
      }
    } else
      try {
        l.log("ChatWidget", "Sending via HTTP API", { correlationId: R, content: w }), o.setTypingWithTimeout();
        const $ = await n.sendMessage(w);
        l.log("ChatWidget", "HTTP API response received", {
          correlationId: R,
          response: $.response,
          sessionId: $.session_id
        }), C.addMessage($.response, "assistant"), C.setTyping(!1), U.isOpen || U.markUnread();
      } catch ($) {
        l.error("ChatWidget", "HTTP API error", $), h = "Failed to send message. Please try again.", C.setError(h), C.updateMessageStatus(S.id, "failed"), C.setTyping(!1);
      }
  }
  async function sa() {
    l.log("ChatWidget", "Toggle clicked, current state", m(Ks)), U.isOpen || oe(), U.toggle(), await new Promise((w) => setTimeout(w, 0)), l.log("ChatWidget", "New state", U.isOpen), U.isOpen && !u && i && await ce(), U.isOpen ? requestAnimationFrame(() => Ie()) : q();
  }
  function ia() {
    C.clearMessages(), C.setError(null), h = null;
  }
  function ra() {
    l.log("ChatWidget", "Manual retry connection requested"), _(f, !1), h = null, C.setError(null), a == null || a.retryConnection();
  }
  const Ks = /* @__PURE__ */ Ue(() => U.isOpen), na = /* @__PURE__ */ Ue(() => U.isLoading), aa = /* @__PURE__ */ Ue(() => (i == null ? void 0 : i.position) || "bottom-right");
  var oa = {
    get hostElement() {
      return s();
    },
    set hostElement(w) {
      s(w), lt();
    }
  }, $s = Jl(), fr = G($s);
  {
    var la = (w) => {
      Hn(w, { onclick: sa });
    };
    Ee(fr, (w) => {
      m(Ks) || w(la);
    });
  }
  var da = ie(fr, 2);
  {
    var ca = (w) => {
      var R = $l(), S = si(R);
      S.__keydown = B;
      var $ = G(S);
      Bn($, {
        onclose: () => {
          U.close(), q();
        }
      });
      var ft = ie($, 2);
      Gn(ft, {});
      var gr = ie(ft, 2);
      {
        let Ce = /* @__PURE__ */ Ue(() => C.error !== null || m(na));
        Yn(gr, {
          onsend: ta,
          get disabled() {
            return m(Ce);
          }
        });
      }
      var ua = ie(gr, 2);
      {
        var fa = (Ce) => {
          var gt = Ql(), pa = G(gt);
          {
            var va = (Dt) => {
              var Is = Gl(), Ci = si(Is);
              Ci.__click = ra, ai(2), D(Dt, Is);
            }, ma = (Dt) => {
              var Is = Yl(), Ci = si(Is);
              Ci.__click = ia, ai(2), D(Dt, Is);
            };
            Ee(pa, (Dt) => {
              m(f) ? Dt(va) : Dt(ma, !1);
            });
          }
          V(gt), D(Ce, gt);
        };
        Ee(ua, (Ce) => {
          C.error && Ce(fa);
        });
      }
      V(S), or(S, (Ce) => _(v, Ce), () => m(v));
      var ga = ie(S, 2);
      {
        var ha = (Ce) => {
          var gt = Kl();
          gt.__click = () => U.close(), Ir(3, gt, () => tl, () => ({ duration: 200 })), D(Ce, gt);
        };
        Ee(ga, (Ce) => {
          m(Ks) && Ce(ha);
        });
      }
      Ir(3, S, () => sl, () => ({ y: 20, duration: 300 })), D(w, R);
    };
    Ee(da, (w) => {
      m(Ks) && w(ca);
    });
  }
  return V($s), Tt(() => Mt($s, "data-position", m(aa))), D(t, $s), ut(oa);
}
Si(["keydown", "click"]);
Nt(ea, { hostElement: {} }, [], [], !0);
const ur = {
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
}, Ki = {
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
function Xl(t = ur) {
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
function ed(t = ur) {
  return Xl(t);
}
const td = {
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
}, sd = {
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
}, Pr = {
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
}, rd = {
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
}, nd = {
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
}, ad = {
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
function od(t) {
  return {
    "bot-brewers": Ki,
    modern: td,
    corporate: sd,
    friendly: Pr,
    playful: Pr,
    // Alias
    minimal: id,
    dark: rd,
    elegant: nd,
    bold: ad,
    generic: ur,
    default: Ki
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
    const e = this.getAttribute("client-id"), s = window, i = ((r = s.AIChat) == null ? void 0 : r.clientId) || ((n = s.ChatWidget) == null ? void 0 : n.clientId);
    if (!e && !i) {
      P.error("ChatWidget", 'Configuration missing. Please set client-id attribute or window.AIChat = { clientId: "your_client_id" }');
      return;
    }
    this.mountApp();
  }
  disconnectedCallback() {
    this._app && (qi(this._app), this._app = null);
  }
  attributeChangedCallback(e, s, i) {
    s !== i && ((e === "theme" || e === "data-theme") && i && (this._currentTheme = i, this.updateStyles()), e === "accent-color" && i && this.updateAccentColor(i), e === "client-id" && i && this._app && (P.log("ChatWidget", `Client ID changed from ${s} to ${i}, remounting widget`), qi(this._app), this._app = null, this.mountApp()));
  }
  mountApp() {
    const e = this.getAttribute("theme") || this.getAttribute("data-theme") || "bot-brewers";
    this._currentTheme = e;
    const s = document.createElement("div");
    s.className = "widget-root";
    const i = document.createElement("style");
    i.textContent = this.getStyles(), this._shadowRoot.innerHTML = "", this._shadowRoot.appendChild(i), this._shadowRoot.appendChild(s), this._app = ar(ea, {
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
    const s = od(e) || Ki;
    return ed(s);
  }
  updateStyles() {
    const e = this._shadowRoot.querySelector("style");
    e && (e.textContent = this.getStyles());
  }
  updateAccentColor(e) {
    const s = this._shadowRoot.querySelector(".widget-root");
    s && Promise.resolve().then(() => al).then(({ adjustColor: i }) => {
      s.style.setProperty("--widget-primary", e), s.style.setProperty("--widget-primary-hover", i(e, -20)), s.style.setProperty("--widget-primary-light", i(e, 20)), s.style.setProperty("--widget-primary-dark", i(e, -30));
    });
  }
}
customElements.get("assistant-widget") ? customElements.get("chat-widget") || customElements.define("chat-widget", Nr) : customElements.define("assistant-widget", Nr);
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", Dr) : Dr();
function Dr() {
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
  Nr as ChatWidgetElement
};
