var rc = Object.defineProperty;
var Aa = (n) => {
  throw TypeError(n);
};
var ac = (n, e, t) => e in n ? rc(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var D = (n, e, t) => ac(n, typeof e != "symbol" ? e + "" : e, t), lr = (n, e, t) => e.has(n) || Aa("Cannot " + t);
var g = (n, e, t) => (lr(n, e, "read from private field"), t ? t.call(n) : e.get(n)), I = (n, e, t) => e.has(n) ? Aa("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), S = (n, e, t, i) => (lr(n, e, "write to private field"), i ? i.call(n, t) : e.set(n, t), t), X = (n, e, t) => (lr(n, e, "access private method"), t);
var uo = Array.isArray, oc = Array.prototype.indexOf, Gs = Array.from, Ns = Object.keys, Ps = Object.defineProperty, xn = Object.getOwnPropertyDescriptor, lc = Object.getOwnPropertyDescriptors, cc = Object.prototype, dc = Array.prototype, fo = Object.getPrototypeOf, Ia = Object.isExtensible;
function uc(n) {
  return typeof n == "function";
}
const Pi = () => {
};
function fc(n) {
  for (var e = 0; e < n.length; e++)
    n[e]();
}
function go() {
  var n, e, t = new Promise((i, s) => {
    n = i, e = s;
  });
  return { promise: t, resolve: n, reject: e };
}
const ke = 2, Ur = 4, Fr = 8, gc = 1 << 24, Rt = 16, Gt = 32, rn = 64, Ys = 128, ut = 512, Ee = 1024, Ye = 2048, It = 4096, Ge = 8192, Vt = 16384, ds = 32768, Sn = 65536, Ca = 1 << 17, ho = 1 << 18, Ln = 1 << 19, hc = 1 << 20, Bt = 1 << 25, En = 32768, br = 1 << 21, Hr = 1 << 22, tn = 1 << 23, Gi = Symbol("$state"), po = Symbol("legacy props"), pc = Symbol(""), Gn = new class extends Error {
  constructor() {
    super(...arguments);
    D(this, "name", "StaleReactionError");
    D(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}(), Wr = 3, On = 8;
function mo(n) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function mc() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function vc(n) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function bc() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function wc(n) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function yc() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function xc() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function kc(n) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function _c() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Tc() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Sc() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ec() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Ac = 1, Ic = 2, vo = 4, Cc = 8, Mc = 16, Rc = 1, Lc = 4, Oc = 8, Dc = 16, Nc = 4, Pc = 1, $c = 2, bo = "[", Qs = "[!", Br = "]", An = {}, Te = Symbol(), zc = "http://www.w3.org/1999/xhtml";
function us(n) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function qc() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let U = !1;
function jt(n) {
  U = n;
}
let $;
function Re(n) {
  if (n === null)
    throw us(), An;
  return $ = n;
}
function _i() {
  return Re(/* @__PURE__ */ gt($));
}
function ie(n) {
  if (U) {
    if (/* @__PURE__ */ gt($) !== null)
      throw us(), An;
    $ = n;
  }
}
function jr(n = 1) {
  if (U) {
    for (var e = n, t = $; e--; )
      t = /** @type {TemplateNode} */
      /* @__PURE__ */ gt(t);
    $ = t;
  }
}
function $s(n = !0) {
  for (var e = 0, t = $; ; ) {
    if (t.nodeType === On) {
      var i = (
        /** @type {Comment} */
        t.data
      );
      if (i === Br) {
        if (e === 0) return t;
        e -= 1;
      } else (i === bo || i === Qs) && (e += 1);
    }
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ gt(t)
    );
    n && t.remove(), t = s;
  }
}
function wo(n) {
  if (!n || n.nodeType !== On)
    throw us(), An;
  return (
    /** @type {Comment} */
    n.data
  );
}
function yo(n) {
  return n === this.v;
}
function Uc(n, e) {
  return n != n ? e == e : n !== e || n !== null && typeof n == "object" || typeof n == "function";
}
function xo(n) {
  return !Uc(n, this.v);
}
let He = null;
function Ti(n) {
  He = n;
}
function Yt(n, e = !1, t) {
  He = {
    p: He,
    i: !1,
    c: null,
    e: null,
    s: n,
    x: null,
    l: null
  };
}
function Qt(n) {
  var e = (
    /** @type {ComponentContext} */
    He
  ), t = e.e;
  if (t !== null) {
    e.e = null;
    for (var i of t)
      Wo(i);
  }
  return n !== void 0 && (e.x = n), e.i = !0, He = e.p, n ?? /** @type {T} */
  {};
}
function ko() {
  return !0;
}
let hn = [];
function _o() {
  var n = hn;
  hn = [], fc(n);
}
function Dn(n) {
  if (hn.length === 0 && !Yi) {
    var e = hn;
    queueMicrotask(() => {
      e === hn && _o();
    });
  }
  hn.push(n);
}
function Fc() {
  for (; hn.length > 0; )
    _o();
}
function To(n) {
  var e = W;
  if (e === null)
    return F.f |= tn, n;
  if (e.f & ds)
    Si(n, e);
  else {
    if (!(e.f & Ys))
      throw n;
    e.b.error(n);
  }
}
function Si(n, e) {
  for (; e !== null; ) {
    if (e.f & Ys)
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
const _s = /* @__PURE__ */ new Set();
let z = null, Ms = null, fe = null, et = [], Xs = null, wr = !1, Yi = !1;
var Zn, Kn, pn, mn, as, Jn, ei, xe, yr, Wi, xr, So, Eo;
const Bs = class Bs {
  constructor() {
    I(this, xe);
    D(this, "committed", !1);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    D(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    D(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    I(this, Zn, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    I(this, Kn, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    I(this, pn, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    I(this, mn, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    I(this, as, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    I(this, Jn, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    I(this, ei, /* @__PURE__ */ new Set());
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    D(this, "skipped_effects", /* @__PURE__ */ new Set());
    D(this, "is_fork", !1);
  }
  is_deferred() {
    return this.is_fork || g(this, mn) > 0;
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var i;
    et = [], Ms = null, this.apply();
    var t = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const s of e)
      X(this, xe, yr).call(this, s, t);
    this.is_fork || X(this, xe, So).call(this), this.is_deferred() ? (X(this, xe, Wi).call(this, t.effects), X(this, xe, Wi).call(this, t.render_effects)) : (Ms = this, z = null, Ma(t.render_effects), Ma(t.effects), Ms = null, (i = g(this, as)) == null || i.resolve()), fe = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, t) {
    this.previous.has(e) || this.previous.set(e, t), e.f & tn || (this.current.set(e, e.v), fe == null || fe.set(e, e.v));
  }
  activate() {
    z = this, this.apply();
  }
  deactivate() {
    z === this && (z = null, fe = null);
  }
  flush() {
    if (this.activate(), et.length > 0) {
      if (Ao(), z !== null && z !== this)
        return;
    } else g(this, pn) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const e of g(this, Kn)) e(this);
    g(this, Kn).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(e) {
    S(this, pn, g(this, pn) + 1), e && S(this, mn, g(this, mn) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(e) {
    S(this, pn, g(this, pn) - 1), e && S(this, mn, g(this, mn) - 1), this.revive();
  }
  revive() {
    for (const e of g(this, Jn))
      g(this, ei).delete(e), Ae(e, Ye), In(e);
    for (const e of g(this, ei))
      Ae(e, It), In(e);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(e) {
    g(this, Zn).add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(e) {
    g(this, Kn).add(e);
  }
  settled() {
    return (g(this, as) ?? S(this, as, go())).promise;
  }
  static ensure() {
    if (z === null) {
      const e = z = new Bs();
      _s.add(z), Yi || Bs.enqueue(() => {
        z === e && e.flush();
      });
    }
    return z;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    Dn(e);
  }
  apply() {
  }
};
Zn = new WeakMap(), Kn = new WeakMap(), pn = new WeakMap(), mn = new WeakMap(), as = new WeakMap(), Jn = new WeakMap(), ei = new WeakMap(), xe = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {EffectTarget} target
 */
yr = function(e, t) {
  var d;
  e.f ^= Ee;
  for (var i = e.first; i !== null; ) {
    var s = i.f, r = (s & (Gt | rn)) !== 0, a = r && (s & Ee) !== 0, o = a || (s & Ge) !== 0 || this.skipped_effects.has(i);
    if (i.f & Ys && ((d = i.b) != null && d.is_pending()) && (t = {
      parent: t,
      effect: i,
      effects: [],
      render_effects: []
    }), !o && i.fn !== null) {
      r ? i.f ^= Ee : s & Ur ? t.effects.push(i) : fs(i) && (i.f & Rt && g(this, Jn).add(i), ss(i));
      var l = i.first;
      if (l !== null) {
        i = l;
        continue;
      }
    }
    var c = i.parent;
    for (i = i.next; i === null && c !== null; )
      c === t.effect && (X(this, xe, Wi).call(this, t.effects), X(this, xe, Wi).call(this, t.render_effects), t = /** @type {EffectTarget} */
      t.parent), i = c.next, c = c.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
Wi = function(e) {
  for (const t of e)
    t.f & Ye ? g(this, Jn).add(t) : t.f & It && g(this, ei).add(t), X(this, xe, xr).call(this, t.deps), Ae(t, Ee);
}, /**
 * @param {Value[] | null} deps
 */
xr = function(e) {
  if (e !== null)
    for (const t of e)
      !(t.f & ke) || !(t.f & En) || (t.f ^= En, X(this, xe, xr).call(
        this,
        /** @type {Derived} */
        t.deps
      ));
}, So = function() {
  if (g(this, mn) === 0) {
    for (const e of g(this, Zn)) e();
    g(this, Zn).clear();
  }
  g(this, pn) === 0 && X(this, xe, Eo).call(this);
}, Eo = function() {
  var r;
  if (_s.size > 1) {
    this.previous.clear();
    var e = fe, t = !0, i = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const a of _s) {
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
        var s = et;
        et = [];
        const c = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map();
        for (const f of o)
          Io(f, l, c, d);
        if (et.length > 0) {
          z = a, a.apply();
          for (const f of et)
            X(r = a, xe, yr).call(r, f, i);
          a.deactivate();
        }
        et = s;
      }
    }
    z = null, fe = e;
  }
  this.committed = !0, _s.delete(this);
};
let kt = Bs;
function G(n) {
  var e = Yi;
  Yi = !0;
  try {
    for (var t; ; ) {
      if (Fc(), et.length === 0 && (z == null || z.flush(), et.length === 0))
        return Xs = null, /** @type {T} */
        t;
      Ao();
    }
  } finally {
    Yi = e;
  }
}
function Ao() {
  var n = _n;
  wr = !0;
  var e = null;
  try {
    var t = 0;
    for (qs(!0); et.length > 0; ) {
      var i = kt.ensure();
      if (t++ > 1e3) {
        var s, r;
        Hc();
      }
      i.process(et), nn.clear();
    }
  } finally {
    wr = !1, qs(n), Xs = null;
  }
}
function Hc() {
  try {
    yc();
  } catch (n) {
    Si(n, Xs);
  }
}
let at = null;
function Ma(n) {
  var e = n.length;
  if (e !== 0) {
    for (var t = 0; t < e; ) {
      var i = n[t++];
      if (!(i.f & (Vt | Ge)) && fs(i) && (at = /* @__PURE__ */ new Set(), ss(i), i.deps === null && i.first === null && i.nodes === null && (i.teardown === null && i.ac === null ? Go(i) : i.fn = null), (at == null ? void 0 : at.size) > 0)) {
        nn.clear();
        for (const s of at) {
          if (s.f & (Vt | Ge)) continue;
          const r = [s];
          let a = s.parent;
          for (; a !== null; )
            at.has(a) && (at.delete(a), r.push(a)), a = a.parent;
          for (let o = r.length - 1; o >= 0; o--) {
            const l = r[o];
            l.f & (Vt | Ge) || ss(l);
          }
        }
        at.clear();
      }
    }
    at = null;
  }
}
function Io(n, e, t, i) {
  if (!t.has(n) && (t.add(n), n.reactions !== null))
    for (const s of n.reactions) {
      const r = s.f;
      r & ke ? Io(
        /** @type {Derived} */
        s,
        e,
        t,
        i
      ) : r & (Hr | Rt) && !(r & Ye) && Co(s, e, i) && (Ae(s, Ye), In(
        /** @type {Effect} */
        s
      ));
    }
}
function Co(n, e, t) {
  const i = t.get(n);
  if (i !== void 0) return i;
  if (n.deps !== null)
    for (const s of n.deps) {
      if (e.includes(s))
        return !0;
      if (s.f & ke && Co(
        /** @type {Derived} */
        s,
        e,
        t
      ))
        return t.set(
          /** @type {Derived} */
          s,
          !0
        ), !0;
    }
  return t.set(n, !1), !1;
}
function In(n) {
  for (var e = Xs = n; e.parent !== null; ) {
    e = e.parent;
    var t = e.f;
    if (wr && e === W && t & Rt && !(t & ho))
      return;
    if (t & (rn | Gt)) {
      if (!(t & Ee)) return;
      e.f ^= Ee;
    }
  }
  et.push(e);
}
function Wc(n) {
  let e = 0, t = Cn(0), i;
  return () => {
    ns() && (y(t), Ks(() => (e === 0 && (i = Pn(() => n(() => Qi(t)))), e += 1, () => {
      Dn(() => {
        e -= 1, e === 0 && (i == null || i(), i = void 0, Qi(t));
      });
    })));
  };
}
var Bc = Sn | Ln | Ys;
function jc(n, e, t) {
  new Vc(n, e, t);
}
var Ze, Be, os, bt, vn, wt, Ke, qe, yt, Ft, Kt, bn, Jt, wn, en, js, ge, Mo, Ro, kr, Rs, Ls, _r;
class Vc {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, t, i) {
    I(this, ge);
    /** @type {Boundary | null} */
    D(this, "parent");
    I(this, Ze, !1);
    /** @type {TemplateNode} */
    I(this, Be);
    /** @type {TemplateNode | null} */
    I(this, os, U ? $ : null);
    /** @type {BoundaryProps} */
    I(this, bt);
    /** @type {((anchor: Node) => void)} */
    I(this, vn);
    /** @type {Effect} */
    I(this, wt);
    /** @type {Effect | null} */
    I(this, Ke, null);
    /** @type {Effect | null} */
    I(this, qe, null);
    /** @type {Effect | null} */
    I(this, yt, null);
    /** @type {DocumentFragment | null} */
    I(this, Ft, null);
    /** @type {TemplateNode | null} */
    I(this, Kt, null);
    I(this, bn, 0);
    I(this, Jt, 0);
    I(this, wn, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    I(this, en, null);
    I(this, js, Wc(() => (S(this, en, Cn(g(this, bn))), () => {
      S(this, en, null);
    })));
    S(this, Be, e), S(this, bt, t), S(this, vn, i), this.parent = /** @type {Effect} */
    W.b, S(this, Ze, !!g(this, bt).pending), S(this, wt, Qr(() => {
      if (W.b = this, U) {
        const r = g(this, os);
        _i(), /** @type {Comment} */
        r.nodeType === On && /** @type {Comment} */
        r.data === Qs ? X(this, ge, Ro).call(this) : X(this, ge, Mo).call(this);
      } else {
        var s = X(this, ge, kr).call(this);
        try {
          S(this, Ke, tt(() => i(s)));
        } catch (r) {
          this.error(r);
        }
        g(this, Jt) > 0 ? X(this, ge, Ls).call(this) : S(this, Ze, !1);
      }
      return () => {
        var r;
        (r = g(this, Kt)) == null || r.remove();
      };
    }, Bc)), U && S(this, Be, $);
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return g(this, Ze) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!g(this, bt).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    X(this, ge, _r).call(this, e), S(this, bn, g(this, bn) + e), g(this, en) && Ei(g(this, en), g(this, bn));
  }
  get_effect_pending() {
    return g(this, js).call(this), y(
      /** @type {Source<number>} */
      g(this, en)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var t = g(this, bt).onerror;
    let i = g(this, bt).failed;
    if (g(this, wn) || !t && !i)
      throw e;
    g(this, Ke) && (Le(g(this, Ke)), S(this, Ke, null)), g(this, qe) && (Le(g(this, qe)), S(this, qe, null)), g(this, yt) && (Le(g(this, yt)), S(this, yt, null)), U && (Re(
      /** @type {TemplateNode} */
      g(this, os)
    ), jr(), Re($s()));
    var s = !1, r = !1;
    const a = () => {
      if (s) {
        qc();
        return;
      }
      s = !0, r && Ec(), kt.ensure(), S(this, bn, 0), g(this, yt) !== null && kn(g(this, yt), () => {
        S(this, yt, null);
      }), S(this, Ze, this.has_pending_snippet()), S(this, Ke, X(this, ge, Rs).call(this, () => (S(this, wn, !1), tt(() => g(this, vn).call(this, g(this, Be)))))), g(this, Jt) > 0 ? X(this, ge, Ls).call(this) : S(this, Ze, !1);
    };
    var o = F;
    try {
      Fe(null), r = !0, t == null || t(e, a), r = !1;
    } catch (l) {
      Si(l, g(this, wt) && g(this, wt).parent);
    } finally {
      Fe(o);
    }
    i && Dn(() => {
      S(this, yt, X(this, ge, Rs).call(this, () => {
        kt.ensure(), S(this, wn, !0);
        try {
          return tt(() => {
            i(
              g(this, Be),
              () => e,
              () => a
            );
          });
        } catch (l) {
          return Si(
            l,
            /** @type {Effect} */
            g(this, wt).parent
          ), null;
        } finally {
          S(this, wn, !1);
        }
      }));
    });
  }
}
Ze = new WeakMap(), Be = new WeakMap(), os = new WeakMap(), bt = new WeakMap(), vn = new WeakMap(), wt = new WeakMap(), Ke = new WeakMap(), qe = new WeakMap(), yt = new WeakMap(), Ft = new WeakMap(), Kt = new WeakMap(), bn = new WeakMap(), Jt = new WeakMap(), wn = new WeakMap(), en = new WeakMap(), js = new WeakMap(), ge = new WeakSet(), Mo = function() {
  try {
    S(this, Ke, tt(() => g(this, vn).call(this, g(this, Be))));
  } catch (e) {
    this.error(e);
  }
  S(this, Ze, !1);
}, Ro = function() {
  const e = g(this, bt).pending;
  e && (S(this, qe, tt(() => e(g(this, Be)))), kt.enqueue(() => {
    var t = X(this, ge, kr).call(this);
    S(this, Ke, X(this, ge, Rs).call(this, () => (kt.ensure(), tt(() => g(this, vn).call(this, t))))), g(this, Jt) > 0 ? X(this, ge, Ls).call(this) : (kn(
      /** @type {Effect} */
      g(this, qe),
      () => {
        S(this, qe, null);
      }
    ), S(this, Ze, !1));
  }));
}, kr = function() {
  var e = g(this, Be);
  return g(this, Ze) && (S(this, Kt, nt()), g(this, Be).before(g(this, Kt)), e = g(this, Kt)), e;
}, /**
 * @param {() => Effect | null} fn
 */
Rs = function(e) {
  var t = W, i = F, s = He;
  Ct(g(this, wt)), Fe(g(this, wt)), Ti(g(this, wt).ctx);
  try {
    return e();
  } catch (r) {
    return To(r), null;
  } finally {
    Ct(t), Fe(i), Ti(s);
  }
}, Ls = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    g(this, bt).pending
  );
  g(this, Ke) !== null && (S(this, Ft, document.createDocumentFragment()), g(this, Ft).append(
    /** @type {TemplateNode} */
    g(this, Kt)
  ), Xo(g(this, Ke), g(this, Ft))), g(this, qe) === null && S(this, qe, tt(() => e(g(this, Be))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
_r = function(e) {
  var t;
  if (!this.has_pending_snippet()) {
    this.parent && X(t = this.parent, ge, _r).call(t, e);
    return;
  }
  S(this, Jt, g(this, Jt) + e), g(this, Jt) === 0 && (S(this, Ze, !1), g(this, qe) && kn(g(this, qe), () => {
    S(this, qe, null);
  }), g(this, Ft) && (g(this, Be).before(g(this, Ft)), S(this, Ft, null)));
};
function Gc(n, e, t, i) {
  const s = Zs;
  if (t.length === 0 && n.length === 0) {
    i(e.map(s));
    return;
  }
  var r = z, a = (
    /** @type {Effect} */
    W
  ), o = Yc();
  function l() {
    Promise.all(t.map((c) => /* @__PURE__ */ Qc(c))).then((c) => {
      o();
      try {
        i([...e.map(s), ...c]);
      } catch (d) {
        a.f & Vt || Si(d, a);
      }
      r == null || r.deactivate(), zs();
    }).catch((c) => {
      Si(c, a);
    });
  }
  n.length > 0 ? Promise.all(n).then(() => {
    o();
    try {
      return l();
    } finally {
      r == null || r.deactivate(), zs();
    }
  }) : l();
}
function Yc() {
  var n = W, e = F, t = He, i = z;
  return function(r = !0) {
    Ct(n), Fe(e), Ti(t), r && (i == null || i.activate());
  };
}
function zs() {
  Ct(null), Fe(null), Ti(null);
}
// @__NO_SIDE_EFFECTS__
function Zs(n) {
  var e = ke | Ye, t = F !== null && F.f & ke ? (
    /** @type {Derived} */
    F
  ) : null;
  return W !== null && (W.f |= Ln), {
    ctx: He,
    deps: null,
    effects: null,
    equals: yo,
    f: e,
    fn: n,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Te
    ),
    wv: 0,
    parent: t ?? W,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Qc(n, e) {
  let t = (
    /** @type {Effect | null} */
    W
  );
  t === null && mc();
  var i = (
    /** @type {Boundary} */
    t.b
  ), s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), r = Cn(
    /** @type {V} */
    Te
  ), a = !F, o = /* @__PURE__ */ new Map();
  return rd(() => {
    var h;
    var l = go();
    s = l.promise;
    try {
      Promise.resolve(n()).then(l.resolve, l.reject).then(() => {
        c === z && c.committed && c.deactivate(), zs();
      });
    } catch (p) {
      l.reject(p), zs();
    }
    var c = (
      /** @type {Batch} */
      z
    );
    if (a) {
      var d = !i.is_pending();
      i.update_pending_count(1), c.increment(d), (h = o.get(c)) == null || h.reject(Gn), o.delete(c), o.set(c, l);
    }
    const f = (p, k = void 0) => {
      if (c.activate(), k)
        k !== Gn && (r.f |= tn, Ei(r, k));
      else {
        r.f & tn && (r.f ^= tn), Ei(r, p);
        for (const [v, m] of o) {
          if (o.delete(v), v === c) break;
          m.reject(Gn);
        }
      }
      a && (i.update_pending_count(-1), c.decrement(d));
    };
    l.promise.then(f, (p) => f(null, p || "unknown"));
  }), Ho(() => {
    for (const l of o.values())
      l.reject(Gn);
  }), new Promise((l) => {
    function c(d) {
      function f() {
        d === s ? l(r) : c(s);
      }
      d.then(f, f);
    }
    c(s);
  });
}
// @__NO_SIDE_EFFECTS__
function we(n) {
  const e = /* @__PURE__ */ Zs(n);
  return Zo(e), e;
}
// @__NO_SIDE_EFFECTS__
function Lo(n) {
  const e = /* @__PURE__ */ Zs(n);
  return e.equals = xo, e;
}
function Oo(n) {
  var e = n.effects;
  if (e !== null) {
    n.effects = null;
    for (var t = 0; t < e.length; t += 1)
      Le(
        /** @type {Effect} */
        e[t]
      );
  }
}
function Xc(n) {
  for (var e = n.parent; e !== null; ) {
    if (!(e.f & ke))
      return e.f & Vt ? null : (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function Vr(n) {
  var e, t = W;
  Ct(Xc(n));
  try {
    n.f &= ~En, Oo(n), e = tl(n);
  } finally {
    Ct(t);
  }
  return e;
}
function Do(n) {
  var e = Vr(n);
  if (n.equals(e) || (z != null && z.is_fork || (n.v = e), n.wv = Jo()), !Nn)
    if (fe !== null)
      (ns() || z != null && z.is_fork) && fe.set(n, e);
    else {
      var t = n.f & ut ? Ee : It;
      Ae(n, t);
    }
}
let Tr = /* @__PURE__ */ new Set();
const nn = /* @__PURE__ */ new Map();
let No = !1;
function Cn(n, e) {
  var t = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: n,
    reactions: null,
    equals: yo,
    rv: 0,
    wv: 0
  };
  return t;
}
// @__NO_SIDE_EFFECTS__
function H(n, e) {
  const t = Cn(n);
  return Zo(t), t;
}
// @__NO_SIDE_EFFECTS__
function Po(n, e = !1, t = !0) {
  const i = Cn(n);
  return e || (i.equals = xo), i;
}
function q(n, e, t = !1) {
  F !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!_t || F.f & Ca) && ko() && F.f & (ke | Rt | Hr | Ca) && !(Oe != null && Oe.includes(n)) && Sc();
  let i = t ? ve(e) : e;
  return Ei(n, i);
}
function Ei(n, e) {
  if (!n.equals(e)) {
    var t = n.v;
    Nn ? nn.set(n, e) : nn.set(n, t), n.v = e;
    var i = kt.ensure();
    i.capture(n, t), n.f & ke && (n.f & Ye && Vr(
      /** @type {Derived} */
      n
    ), Ae(n, n.f & ut ? Ee : It)), n.wv = Jo(), $o(n, Ye), W !== null && W.f & Ee && !(W.f & (Gt | rn)) && (Xe === null ? od([n]) : Xe.push(n)), !i.is_fork && Tr.size > 0 && !No && Zc();
  }
  return e;
}
function Zc() {
  No = !1;
  var n = _n;
  qs(!0);
  const e = Array.from(Tr);
  try {
    for (const t of e)
      t.f & Ee && Ae(t, It), fs(t) && ss(t);
  } finally {
    qs(n);
  }
  Tr.clear();
}
function Qi(n) {
  q(n, n.v + 1);
}
function $o(n, e) {
  var t = n.reactions;
  if (t !== null)
    for (var i = t.length, s = 0; s < i; s++) {
      var r = t[s], a = r.f, o = (a & Ye) === 0;
      if (o && Ae(r, e), a & ke) {
        var l = (
          /** @type {Derived} */
          r
        );
        fe == null || fe.delete(l), a & En || (a & ut && (r.f |= En), $o(l, It));
      } else o && (a & Rt && at !== null && at.add(
        /** @type {Effect} */
        r
      ), In(
        /** @type {Effect} */
        r
      ));
    }
}
function ve(n) {
  if (typeof n != "object" || n === null || Gi in n)
    return n;
  const e = fo(n);
  if (e !== cc && e !== dc)
    return n;
  var t = /* @__PURE__ */ new Map(), i = uo(n), s = /* @__PURE__ */ H(0), r = Tn, a = (o) => {
    if (Tn === r)
      return o();
    var l = F, c = Tn;
    Fe(null), Da(r);
    var d = o();
    return Fe(l), Da(c), d;
  };
  return i && t.set("length", /* @__PURE__ */ H(
    /** @type {any[]} */
    n.length
  )), new Proxy(
    /** @type {any} */
    n,
    {
      defineProperty(o, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && _c();
        var d = t.get(l);
        return d === void 0 ? d = a(() => {
          var f = /* @__PURE__ */ H(c.value);
          return t.set(l, f), f;
        }) : q(d, c.value, !0), !0;
      },
      deleteProperty(o, l) {
        var c = t.get(l);
        if (c === void 0) {
          if (l in o) {
            const d = a(() => /* @__PURE__ */ H(Te));
            t.set(l, d), Qi(s);
          }
        } else
          q(c, Te), Qi(s);
        return !0;
      },
      get(o, l, c) {
        var p;
        if (l === Gi)
          return n;
        var d = t.get(l), f = l in o;
        if (d === void 0 && (!f || (p = xn(o, l)) != null && p.writable) && (d = a(() => {
          var k = ve(f ? o[l] : Te), v = /* @__PURE__ */ H(k);
          return v;
        }), t.set(l, d)), d !== void 0) {
          var h = y(d);
          return h === Te ? void 0 : h;
        }
        return Reflect.get(o, l, c);
      },
      getOwnPropertyDescriptor(o, l) {
        var c = Reflect.getOwnPropertyDescriptor(o, l);
        if (c && "value" in c) {
          var d = t.get(l);
          d && (c.value = y(d));
        } else if (c === void 0) {
          var f = t.get(l), h = f == null ? void 0 : f.v;
          if (f !== void 0 && h !== Te)
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
        if (l === Gi)
          return !0;
        var c = t.get(l), d = c !== void 0 && c.v !== Te || Reflect.has(o, l);
        if (c !== void 0 || W !== null && (!d || (h = xn(o, l)) != null && h.writable)) {
          c === void 0 && (c = a(() => {
            var p = d ? ve(o[l]) : Te, k = /* @__PURE__ */ H(p);
            return k;
          }), t.set(l, c));
          var f = y(c);
          if (f === Te)
            return !1;
        }
        return d;
      },
      set(o, l, c, d) {
        var x;
        var f = t.get(l), h = l in o;
        if (i && l === "length")
          for (var p = c; p < /** @type {Source<number>} */
          f.v; p += 1) {
            var k = t.get(p + "");
            k !== void 0 ? q(k, Te) : p in o && (k = a(() => /* @__PURE__ */ H(Te)), t.set(p + "", k));
          }
        if (f === void 0)
          (!h || (x = xn(o, l)) != null && x.writable) && (f = a(() => /* @__PURE__ */ H(void 0)), q(f, ve(c)), t.set(l, f));
        else {
          h = f.v !== Te;
          var v = a(() => ve(c));
          q(f, v);
        }
        var m = Reflect.getOwnPropertyDescriptor(o, l);
        if (m != null && m.set && m.set.call(d, c), !h) {
          if (i && typeof l == "string") {
            var T = (
              /** @type {Source<number>} */
              t.get("length")
            ), M = Number(l);
            Number.isInteger(M) && M >= T.v && q(T, M + 1);
          }
          Qi(s);
        }
        return !0;
      },
      ownKeys(o) {
        y(s);
        var l = Reflect.ownKeys(o).filter((f) => {
          var h = t.get(f);
          return h === void 0 || h.v !== Te;
        });
        for (var [c, d] of t)
          d.v !== Te && !(c in o) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        Tc();
      }
    }
  );
}
var Ra, zo, qo, Uo;
function Sr() {
  if (Ra === void 0) {
    Ra = window, zo = /Firefox/.test(navigator.userAgent);
    var n = Element.prototype, e = Node.prototype, t = Text.prototype;
    qo = xn(e, "firstChild").get, Uo = xn(e, "nextSibling").get, Ia(n) && (n.__click = void 0, n.__className = void 0, n.__attributes = null, n.__style = void 0, n.__e = void 0), Ia(t) && (t.__t = void 0);
  }
}
function nt(n = "") {
  return document.createTextNode(n);
}
// @__NO_SIDE_EFFECTS__
function Ue(n) {
  return (
    /** @type {TemplateNode | null} */
    qo.call(n)
  );
}
// @__NO_SIDE_EFFECTS__
function gt(n) {
  return (
    /** @type {TemplateNode | null} */
    Uo.call(n)
  );
}
function se(n, e) {
  if (!U)
    return /* @__PURE__ */ Ue(n);
  var t = /* @__PURE__ */ Ue($);
  if (t === null)
    t = $.appendChild(nt());
  else if (e && t.nodeType !== Wr) {
    var i = nt();
    return t == null || t.before(i), Re(i), i;
  }
  return Re(t), t;
}
function Xi(n, e = !1) {
  if (!U) {
    var t = /* @__PURE__ */ Ue(n);
    return t instanceof Comment && t.data === "" ? /* @__PURE__ */ gt(t) : t;
  }
  if (e && ($ == null ? void 0 : $.nodeType) !== Wr) {
    var i = nt();
    return $ == null || $.before(i), Re(i), i;
  }
  return $;
}
function ce(n, e = 1, t = !1) {
  let i = U ? $ : n;
  for (var s; e--; )
    s = i, i = /** @type {TemplateNode} */
    /* @__PURE__ */ gt(i);
  if (!U)
    return i;
  if (t && (i == null ? void 0 : i.nodeType) !== Wr) {
    var r = nt();
    return i === null ? s == null || s.after(r) : i.before(r), Re(r), r;
  }
  return Re(i), i;
}
function Gr(n) {
  n.textContent = "";
}
function Fo() {
  return !1;
}
function Kc(n) {
  U && /* @__PURE__ */ Ue(n) !== null && Gr(n);
}
let La = !1;
function Jc() {
  La || (La = !0, document.addEventListener(
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
function Mi(n) {
  var e = F, t = W;
  Fe(null), Ct(null);
  try {
    return n();
  } finally {
    Fe(e), Ct(t);
  }
}
function ed(n, e, t, i = t) {
  n.addEventListener(e, () => Mi(t));
  const s = n.__on_r;
  s ? n.__on_r = () => {
    s(), i(!0);
  } : n.__on_r = () => i(!0), Jc();
}
function td(n) {
  W === null && (F === null && wc(), bc()), Nn && vc();
}
function nd(n, e) {
  var t = e.last;
  t === null ? e.last = e.first = n : (t.next = n, n.prev = t, e.last = n);
}
function Lt(n, e, t) {
  var i = W;
  i !== null && i.f & Ge && (n |= Ge);
  var s = {
    ctx: He,
    deps: null,
    nodes: null,
    f: n | Ye | ut,
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
      ss(s), s.f |= ds;
    } catch (o) {
      throw Le(s), o;
    }
  else e !== null && In(s);
  var r = s;
  if (t && r.deps === null && r.teardown === null && r.nodes === null && r.first === r.last && // either `null`, or a singular child
  !(r.f & Ln) && (r = r.first, n & Rt && n & Sn && r !== null && (r.f |= Sn)), r !== null && (r.parent = i, i !== null && nd(r, i), F !== null && F.f & ke && !(n & rn))) {
    var a = (
      /** @type {Derived} */
      F
    );
    (a.effects ?? (a.effects = [])).push(r);
  }
  return s;
}
function ns() {
  return F !== null && !_t;
}
function Ho(n) {
  const e = Lt(Fr, null, !1);
  return Ae(e, Ee), e.teardown = n, e;
}
function Zi(n) {
  td();
  var e = (
    /** @type {Effect} */
    W.f
  ), t = !F && (e & Gt) !== 0 && (e & ds) === 0;
  if (t) {
    var i = (
      /** @type {ComponentContext} */
      He
    );
    (i.e ?? (i.e = [])).push(n);
  } else
    return Wo(n);
}
function Wo(n) {
  return Lt(Ur | hc, n, !1);
}
function id(n) {
  kt.ensure();
  const e = Lt(rn | Ln, n, !0);
  return () => {
    Le(e);
  };
}
function sd(n) {
  kt.ensure();
  const e = Lt(rn | Ln, n, !0);
  return (t = {}) => new Promise((i) => {
    t.outro ? kn(e, () => {
      Le(e), i(void 0);
    }) : (Le(e), i(void 0));
  });
}
function Yr(n) {
  return Lt(Ur, n, !1);
}
function rd(n) {
  return Lt(Hr | Ln, n, !0);
}
function Ks(n, e = 0) {
  return Lt(Fr | e, n, !0);
}
function it(n, e = [], t = [], i = []) {
  Gc(i, e, t, (s) => {
    Lt(Fr, () => n(...s.map(y)), !0);
  });
}
function Qr(n, e = 0) {
  var t = Lt(Rt | e, n, !0);
  return t;
}
function tt(n) {
  return Lt(Gt | Ln, n, !0);
}
function Bo(n) {
  var e = n.teardown;
  if (e !== null) {
    const t = Nn, i = F;
    Oa(!0), Fe(null);
    try {
      e.call(null);
    } finally {
      Oa(t), Fe(i);
    }
  }
}
function jo(n, e = !1) {
  var t = n.first;
  for (n.first = n.last = null; t !== null; ) {
    const s = t.ac;
    s !== null && Mi(() => {
      s.abort(Gn);
    });
    var i = t.next;
    t.f & rn ? t.parent = null : Le(t, e), t = i;
  }
}
function ad(n) {
  for (var e = n.first; e !== null; ) {
    var t = e.next;
    e.f & Gt || Le(e), e = t;
  }
}
function Le(n, e = !0) {
  var t = !1;
  (e || n.f & ho) && n.nodes !== null && n.nodes.end !== null && (Vo(
    n.nodes.start,
    /** @type {TemplateNode} */
    n.nodes.end
  ), t = !0), jo(n, e && !t), Us(n, 0), Ae(n, Vt);
  var i = n.nodes && n.nodes.t;
  if (i !== null)
    for (const r of i)
      r.stop();
  Bo(n);
  var s = n.parent;
  s !== null && s.first !== null && Go(n), n.next = n.prev = n.teardown = n.ctx = n.deps = n.fn = n.nodes = n.ac = null;
}
function Vo(n, e) {
  for (; n !== null; ) {
    var t = n === e ? null : /* @__PURE__ */ gt(n);
    n.remove(), n = t;
  }
}
function Go(n) {
  var e = n.parent, t = n.prev, i = n.next;
  t !== null && (t.next = i), i !== null && (i.prev = t), e !== null && (e.first === n && (e.first = i), e.last === n && (e.last = t));
}
function kn(n, e, t = !0) {
  var i = [];
  Yo(n, i, !0);
  var s = () => {
    t && Le(n), e && e();
  }, r = i.length;
  if (r > 0) {
    var a = () => --r || s();
    for (var o of i)
      o.out(a);
  } else
    s();
}
function Yo(n, e, t) {
  if (!(n.f & Ge)) {
    n.f ^= Ge;
    var i = n.nodes && n.nodes.t;
    if (i !== null)
      for (const o of i)
        (o.is_global || t) && e.push(o);
    for (var s = n.first; s !== null; ) {
      var r = s.next, a = (s.f & Sn) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (s.f & Gt) !== 0 && (n.f & Rt) !== 0;
      Yo(s, e, a ? t : !1), s = r;
    }
  }
}
function Xr(n) {
  Qo(n, !0);
}
function Qo(n, e) {
  if (n.f & Ge) {
    n.f ^= Ge, n.f & Ee || (Ae(n, Ye), In(n));
    for (var t = n.first; t !== null; ) {
      var i = t.next, s = (t.f & Sn) !== 0 || (t.f & Gt) !== 0;
      Qo(t, s ? e : !1), t = i;
    }
    var r = n.nodes && n.nodes.t;
    if (r !== null)
      for (const a of r)
        (a.is_global || e) && a.in();
  }
}
function Xo(n, e) {
  if (n.nodes)
    for (var t = n.nodes.start, i = n.nodes.end; t !== null; ) {
      var s = t === i ? null : /* @__PURE__ */ gt(t);
      e.append(t), t = s;
    }
}
let _n = !1;
function qs(n) {
  _n = n;
}
let Nn = !1;
function Oa(n) {
  Nn = n;
}
let F = null, _t = !1;
function Fe(n) {
  F = n;
}
let W = null;
function Ct(n) {
  W = n;
}
let Oe = null;
function Zo(n) {
  F !== null && (Oe === null ? Oe = [n] : Oe.push(n));
}
let Me = null, We = 0, Xe = null;
function od(n) {
  Xe = n;
}
let Ko = 1, is = 0, Tn = is;
function Da(n) {
  Tn = n;
}
function Jo() {
  return ++Ko;
}
function fs(n) {
  var e = n.f;
  if (e & Ye)
    return !0;
  if (e & ke && (n.f &= ~En), e & It) {
    var t = n.deps;
    if (t !== null)
      for (var i = t.length, s = 0; s < i; s++) {
        var r = t[s];
        if (fs(
          /** @type {Derived} */
          r
        ) && Do(
          /** @type {Derived} */
          r
        ), r.wv > n.wv)
          return !0;
      }
    e & ut && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    fe === null && Ae(n, Ee);
  }
  return !1;
}
function el(n, e, t = !0) {
  var i = n.reactions;
  if (i !== null && !(Oe != null && Oe.includes(n)))
    for (var s = 0; s < i.length; s++) {
      var r = i[s];
      r.f & ke ? el(
        /** @type {Derived} */
        r,
        e,
        !1
      ) : e === r && (t ? Ae(r, Ye) : r.f & Ee && Ae(r, It), In(
        /** @type {Effect} */
        r
      ));
    }
}
function tl(n) {
  var k;
  var e = Me, t = We, i = Xe, s = F, r = Oe, a = He, o = _t, l = Tn, c = n.f;
  Me = /** @type {null | Value[]} */
  null, We = 0, Xe = null, F = c & (Gt | rn) ? null : n, Oe = null, Ti(n.ctx), _t = !1, Tn = ++is, n.ac !== null && (Mi(() => {
    n.ac.abort(Gn);
  }), n.ac = null);
  try {
    n.f |= br;
    var d = (
      /** @type {Function} */
      n.fn
    ), f = d(), h = n.deps;
    if (Me !== null) {
      var p;
      if (Us(n, We), h !== null && We > 0)
        for (h.length = We + Me.length, p = 0; p < Me.length; p++)
          h[We + p] = Me[p];
      else
        n.deps = h = Me;
      if (ns() && n.f & ut)
        for (p = We; p < h.length; p++)
          ((k = h[p]).reactions ?? (k.reactions = [])).push(n);
    } else h !== null && We < h.length && (Us(n, We), h.length = We);
    if (ko() && Xe !== null && !_t && h !== null && !(n.f & (ke | It | Ye)))
      for (p = 0; p < /** @type {Source[]} */
      Xe.length; p++)
        el(
          Xe[p],
          /** @type {Effect} */
          n
        );
    return s !== null && s !== n && (is++, Xe !== null && (i === null ? i = Xe : i.push(.../** @type {Source[]} */
    Xe))), n.f & tn && (n.f ^= tn), f;
  } catch (v) {
    return To(v);
  } finally {
    n.f ^= br, Me = e, We = t, Xe = i, F = s, Oe = r, Ti(a), _t = o, Tn = l;
  }
}
function ld(n, e) {
  let t = e.reactions;
  if (t !== null) {
    var i = oc.call(t, n);
    if (i !== -1) {
      var s = t.length - 1;
      s === 0 ? t = e.reactions = null : (t[i] = t[s], t.pop());
    }
  }
  t === null && e.f & ke && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Me === null || !Me.includes(e)) && (Ae(e, It), e.f & ut && (e.f ^= ut, e.f &= ~En), Oo(
    /** @type {Derived} **/
    e
  ), Us(
    /** @type {Derived} **/
    e,
    0
  ));
}
function Us(n, e) {
  var t = n.deps;
  if (t !== null)
    for (var i = e; i < t.length; i++)
      ld(n, t[i]);
}
function ss(n) {
  var e = n.f;
  if (!(e & Vt)) {
    Ae(n, Ee);
    var t = W, i = _n;
    W = n, _n = !0;
    try {
      e & (Rt | gc) ? ad(n) : jo(n), Bo(n);
      var s = tl(n);
      n.teardown = typeof s == "function" ? s : null, n.wv = Ko;
      var r;
    } finally {
      _n = i, W = t;
    }
  }
}
async function nl() {
  await Promise.resolve(), G();
}
function y(n) {
  var e = n.f, t = (e & ke) !== 0;
  if (F !== null && !_t) {
    var i = W !== null && (W.f & Vt) !== 0;
    if (!i && !(Oe != null && Oe.includes(n))) {
      var s = F.deps;
      if (F.f & br)
        n.rv < is && (n.rv = is, Me === null && s !== null && s[We] === n ? We++ : Me === null ? Me = [n] : Me.includes(n) || Me.push(n));
      else {
        (F.deps ?? (F.deps = [])).push(n);
        var r = n.reactions;
        r === null ? n.reactions = [F] : r.includes(F) || r.push(F);
      }
    }
  }
  if (Nn) {
    if (nn.has(n))
      return nn.get(n);
    if (t) {
      var a = (
        /** @type {Derived} */
        n
      ), o = a.v;
      return (!(a.f & Ee) && a.reactions !== null || sl(a)) && (o = Vr(a)), nn.set(a, o), o;
    }
  } else t && (!(fe != null && fe.has(n)) || z != null && z.is_fork && !ns()) && (a = /** @type {Derived} */
  n, fs(a) && Do(a), _n && ns() && !(a.f & ut) && il(a));
  if (fe != null && fe.has(n))
    return fe.get(n);
  if (n.f & tn)
    throw n.v;
  return n.v;
}
function il(n) {
  if (n.deps !== null) {
    n.f ^= ut;
    for (const e of n.deps)
      (e.reactions ?? (e.reactions = [])).push(n), e.f & ke && !(e.f & ut) && il(
        /** @type {Derived} */
        e
      );
  }
}
function sl(n) {
  if (n.v === Te) return !0;
  if (n.deps === null) return !1;
  for (const e of n.deps)
    if (nn.has(e) || e.f & ke && sl(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Pn(n) {
  var e = _t;
  try {
    return _t = !0, n();
  } finally {
    _t = e;
  }
}
const cd = -7169;
function Ae(n, e) {
  n.f = n.f & cd | e;
}
const dd = ["touchstart", "touchmove"];
function ud(n) {
  return dd.includes(n);
}
const rl = /* @__PURE__ */ new Set(), Er = /* @__PURE__ */ new Set();
function fd(n, e, t, i = {}) {
  function s(r) {
    if (i.capture || Bi.call(e, r), !r.cancelBubble)
      return Mi(() => t == null ? void 0 : t.call(this, r));
  }
  return n.startsWith("pointer") || n.startsWith("touch") || n === "wheel" ? Dn(() => {
    e.addEventListener(n, s, i);
  }) : e.addEventListener(n, s, i), s;
}
function gd(n, e, t, i, s) {
  var r = { capture: i, passive: s }, a = fd(n, e, t, r);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && Ho(() => {
    e.removeEventListener(n, a, r);
  });
}
function gs(n) {
  for (var e = 0; e < n.length; e++)
    rl.add(n[e]);
  for (var t of Er)
    t(n);
}
let Na = null;
function Bi(n) {
  var m;
  var e = this, t = (
    /** @type {Node} */
    e.ownerDocument
  ), i = n.type, s = ((m = n.composedPath) == null ? void 0 : m.call(n)) || [], r = (
    /** @type {null | Element} */
    s[0] || n.target
  );
  Na = n;
  var a = 0, o = Na === n && n.__root;
  if (o) {
    var l = s.indexOf(o);
    if (l !== -1 && (e === document || e === /** @type {any} */
    window)) {
      n.__root = e;
      return;
    }
    var c = s.indexOf(e);
    if (c === -1)
      return;
    l <= c && (a = l);
  }
  if (r = /** @type {Element} */
  s[a] || n.target, r !== e) {
    Ps(n, "currentTarget", {
      configurable: !0,
      get() {
        return r || t;
      }
    });
    var d = F, f = W;
    Fe(null), Ct(null);
    try {
      for (var h, p = []; r !== null; ) {
        var k = r.assignedSlot || r.parentNode || /** @type {any} */
        r.host || null;
        try {
          var v = r["__" + i];
          v != null && (!/** @type {any} */
          r.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          n.target === r) && v.call(r, n);
        } catch (T) {
          h ? p.push(T) : h = T;
        }
        if (n.cancelBubble || k === e || k === null)
          break;
        r = k;
      }
      if (h) {
        for (let T of p)
          queueMicrotask(() => {
            throw T;
          });
        throw h;
      }
    } finally {
      n.__root = e, delete n.currentTarget, Fe(d), Ct(f);
    }
  }
}
function Zr(n) {
  var e = document.createElement("template");
  return e.innerHTML = n.replaceAll("<!>", "<!---->"), e.content;
}
function At(n, e) {
  var t = (
    /** @type {Effect} */
    W
  );
  t.nodes === null && (t.nodes = { start: n, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function J(n, e) {
  var t = (e & Pc) !== 0, i = (e & $c) !== 0, s, r = !n.startsWith("<!>");
  return () => {
    if (U)
      return At($, null), $;
    s === void 0 && (s = Zr(r ? n : "<!>" + n), t || (s = /** @type {TemplateNode} */
    /* @__PURE__ */ Ue(s)));
    var a = (
      /** @type {TemplateNode} */
      i || zo ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    if (t) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ue(a)
      ), l = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      At(o, l);
    } else
      At(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function hd(n, e, t = "svg") {
  var i = !n.startsWith("<!>"), s = `<${t}>${i ? n : "<!>" + n}</${t}>`, r;
  return () => {
    if (U)
      return At($, null), $;
    if (!r) {
      var a = (
        /** @type {DocumentFragment} */
        Zr(s)
      ), o = (
        /** @type {Element} */
        /* @__PURE__ */ Ue(a)
      );
      r = /** @type {Element} */
      /* @__PURE__ */ Ue(o);
    }
    var l = (
      /** @type {TemplateNode} */
      r.cloneNode(!0)
    );
    return At(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function pd(n, e) {
  return /* @__PURE__ */ hd(n, e, "svg");
}
function al() {
  if (U)
    return At($, null), $;
  var n = document.createDocumentFragment(), e = document.createComment(""), t = nt();
  return n.append(e, t), At(e, t), n;
}
function j(n, e) {
  if (U) {
    var t = (
      /** @type {Effect & { nodes: EffectNodes }} */
      W
    );
    (!(t.f & ds) || t.nodes.end === null) && (t.nodes.end = $), _i();
    return;
  }
  n !== null && n.before(
    /** @type {Node} */
    e
  );
}
let Ar = !0;
function Ai(n, e) {
  var t = e == null ? "" : typeof e == "object" ? e + "" : e;
  t !== (n.__t ?? (n.__t = n.nodeValue)) && (n.__t = t, n.nodeValue = t + "");
}
function Kr(n, e) {
  return ol(n, e);
}
function md(n, e) {
  Sr(), e.intro = e.intro ?? !1;
  const t = e.target, i = U, s = $;
  try {
    for (var r = /* @__PURE__ */ Ue(t); r && (r.nodeType !== On || /** @type {Comment} */
    r.data !== bo); )
      r = /* @__PURE__ */ gt(r);
    if (!r)
      throw An;
    jt(!0), Re(
      /** @type {Comment} */
      r
    );
    const a = ol(n, { ...e, anchor: r });
    return jt(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a instanceof Error && a.message.split(`
`).some((o) => o.startsWith("https://svelte.dev/e/")))
      throw a;
    return a !== An && console.warn("Failed to hydrate: ", a), e.recover === !1 && xc(), Sr(), Gr(t), jt(!1), Kr(n, e);
  } finally {
    jt(i), Re(s);
  }
}
const Vn = /* @__PURE__ */ new Map();
function ol(n, { target: e, anchor: t, props: i = {}, events: s, context: r, intro: a = !0 }) {
  Sr();
  var o = /* @__PURE__ */ new Set(), l = (f) => {
    for (var h = 0; h < f.length; h++) {
      var p = f[h];
      if (!o.has(p)) {
        o.add(p);
        var k = ud(p);
        e.addEventListener(p, Bi, { passive: k });
        var v = Vn.get(p);
        v === void 0 ? (document.addEventListener(p, Bi, { passive: k }), Vn.set(p, 1)) : Vn.set(p, v + 1);
      }
    }
  };
  l(Gs(rl)), Er.add(l);
  var c = void 0, d = sd(() => {
    var f = t ?? e.appendChild(nt());
    return jc(
      /** @type {TemplateNode} */
      f,
      {
        pending: () => {
        }
      },
      (h) => {
        if (r) {
          Yt({});
          var p = (
            /** @type {ComponentContext} */
            He
          );
          p.c = r;
        }
        if (s && (i.$$events = s), U && At(
          /** @type {TemplateNode} */
          h,
          null
        ), Ar = a, c = n(h, i) || {}, Ar = !0, U && (W.nodes.end = $, $ === null || $.nodeType !== On || /** @type {Comment} */
        $.data !== Br))
          throw us(), An;
        r && Qt();
      }
    ), () => {
      var k;
      for (var h of o) {
        e.removeEventListener(h, Bi);
        var p = (
          /** @type {number} */
          Vn.get(h)
        );
        --p === 0 ? (document.removeEventListener(h, Bi), Vn.delete(h)) : Vn.set(h, p);
      }
      Er.delete(l), f !== t && ((k = f.parentNode) == null || k.removeChild(f));
    };
  });
  return Ir.set(c, d), c;
}
let Ir = /* @__PURE__ */ new WeakMap();
function Cr(n, e) {
  const t = Ir.get(n);
  return t ? (Ir.delete(n), t(e)) : Promise.resolve();
}
var ct, xt, je, yn, ls, cs, Vs;
class vd {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, t = !0) {
    /** @type {TemplateNode} */
    D(this, "anchor");
    /** @type {Map<Batch, Key>} */
    I(this, ct, /* @__PURE__ */ new Map());
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
    I(this, xt, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    I(this, je, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    I(this, yn, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    I(this, ls, !0);
    I(this, cs, () => {
      var e = (
        /** @type {Batch} */
        z
      );
      if (g(this, ct).has(e)) {
        var t = (
          /** @type {Key} */
          g(this, ct).get(e)
        ), i = g(this, xt).get(t);
        if (i)
          Xr(i), g(this, yn).delete(t);
        else {
          var s = g(this, je).get(t);
          s && (g(this, xt).set(t, s.effect), g(this, je).delete(t), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), i = s.effect);
        }
        for (const [r, a] of g(this, ct)) {
          if (g(this, ct).delete(r), r === e)
            break;
          const o = g(this, je).get(a);
          o && (Le(o.effect), g(this, je).delete(a));
        }
        for (const [r, a] of g(this, xt)) {
          if (r === t || g(this, yn).has(r)) continue;
          const o = () => {
            if (Array.from(g(this, ct).values()).includes(r)) {
              var c = document.createDocumentFragment();
              Xo(a, c), c.append(nt()), g(this, je).set(r, { effect: a, fragment: c });
            } else
              Le(a);
            g(this, yn).delete(r), g(this, xt).delete(r);
          };
          g(this, ls) || !i ? (g(this, yn).add(r), kn(a, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    I(this, Vs, (e) => {
      g(this, ct).delete(e);
      const t = Array.from(g(this, ct).values());
      for (const [i, s] of g(this, je))
        t.includes(i) || (Le(s.effect), g(this, je).delete(i));
    });
    this.anchor = e, S(this, ls, t);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, t) {
    var i = (
      /** @type {Batch} */
      z
    ), s = Fo();
    if (t && !g(this, xt).has(e) && !g(this, je).has(e))
      if (s) {
        var r = document.createDocumentFragment(), a = nt();
        r.append(a), g(this, je).set(e, {
          effect: tt(() => t(a)),
          fragment: r
        });
      } else
        g(this, xt).set(
          e,
          tt(() => t(this.anchor))
        );
    if (g(this, ct).set(i, e), s) {
      for (const [o, l] of g(this, xt))
        o === e ? i.skipped_effects.delete(l) : i.skipped_effects.add(l);
      for (const [o, l] of g(this, je))
        o === e ? i.skipped_effects.delete(l.effect) : i.skipped_effects.add(l.effect);
      i.oncommit(g(this, cs)), i.ondiscard(g(this, Vs));
    } else
      U && (this.anchor = $), g(this, cs).call(this);
  }
}
ct = new WeakMap(), xt = new WeakMap(), je = new WeakMap(), yn = new WeakMap(), ls = new WeakMap(), cs = new WeakMap(), Vs = new WeakMap();
function Se(n, e, t = !1) {
  U && _i();
  var i = new vd(n), s = t ? Sn : 0;
  function r(a, o) {
    if (U) {
      const c = wo(n) === Qs;
      if (a === c) {
        var l = $s();
        Re(l), i.anchor = l, jt(!1), i.ensure(a, o), jt(!0);
        return;
      }
    }
    i.ensure(a, o);
  }
  Qr(() => {
    var a = !1;
    e((o, l = !0) => {
      a = !0, r(l, o);
    }), a || r(!1, null);
  }, s);
}
function bd(n, e, t) {
  for (var i = [], s = e.length, r, a = e.length, o = 0; o < s; o++) {
    let f = e[o];
    kn(
      f,
      () => {
        if (r) {
          if (r.pending.delete(f), r.done.add(f), r.pending.size === 0) {
            var h = (
              /** @type {Set<EachOutroGroup>} */
              n.outrogroups
            );
            Mr(Gs(r.done)), h.delete(r), h.size === 0 && (n.outrogroups = null);
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
      Gr(d), d.append(c), n.items.clear();
    }
    Mr(e, !l);
  } else
    r = {
      pending: new Set(e),
      done: /* @__PURE__ */ new Set()
    }, (n.outrogroups ?? (n.outrogroups = /* @__PURE__ */ new Set())).add(r);
}
function Mr(n, e = !0) {
  for (var t = 0; t < n.length; t++)
    Le(n[t], e);
}
var Pa;
function ll(n, e, t, i, s, r = null) {
  var a = n, o = /* @__PURE__ */ new Map(), l = (e & vo) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      n
    );
    a = U ? Re(/* @__PURE__ */ Ue(c)) : c.appendChild(nt());
  }
  U && _i();
  var d = null, f = /* @__PURE__ */ Lo(() => {
    var T = t();
    return uo(T) ? T : T == null ? [] : Gs(T);
  }), h, p = !0;
  function k() {
    m.fallback = d, wd(m, h, a, e, i), d !== null && (h.length === 0 ? d.f & Bt ? (d.f ^= Bt, ji(d, null, a)) : Xr(d) : kn(d, () => {
      d = null;
    }));
  }
  var v = Qr(() => {
    h = /** @type {V[]} */
    y(f);
    var T = h.length;
    let M = !1;
    if (U) {
      var x = wo(a) === Qs;
      x !== (T === 0) && (a = $s(), Re(a), jt(!1), M = !0);
    }
    for (var _ = /* @__PURE__ */ new Set(), R = (
      /** @type {Batch} */
      z
    ), Q = Fo(), A = 0; A < T; A += 1) {
      U && $.nodeType === On && /** @type {Comment} */
      $.data === Br && (a = /** @type {Comment} */
      $, M = !0, jt(!1));
      var N = h[A], le = i(N, A), ee = p ? null : o.get(le);
      ee ? (ee.v && Ei(ee.v, N), ee.i && Ei(ee.i, A), Q && R.skipped_effects.delete(ee.e)) : (ee = yd(
        o,
        p ? a : Pa ?? (Pa = nt()),
        N,
        le,
        A,
        s,
        e,
        t
      ), p || (ee.e.f |= Bt), o.set(le, ee)), _.add(le);
    }
    if (T === 0 && r && !d && (p ? d = tt(() => r(a)) : (d = tt(() => r(Pa ?? (Pa = nt()))), d.f |= Bt)), U && T > 0 && Re($s()), !p)
      if (Q) {
        for (const [B, te] of o)
          _.has(B) || R.skipped_effects.add(te.e);
        R.oncommit(k), R.ondiscard(() => {
        });
      } else
        k();
    M && jt(!0), y(f);
  }), m = { effect: v, items: o, outrogroups: null, fallback: d };
  p = !1, U && (a = $);
}
function wd(n, e, t, i, s) {
  var ee, B, te, Pe, Ot, ln, zn, qn, cn;
  var r = (i & Cc) !== 0, a = e.length, o = n.items, l = n.effect.first, c, d = null, f, h = [], p = [], k, v, m, T;
  if (r)
    for (T = 0; T < a; T += 1)
      k = e[T], v = s(k, T), m = /** @type {EachItem} */
      o.get(v).e, m.f & Bt || ((B = (ee = m.nodes) == null ? void 0 : ee.a) == null || B.measure(), (f ?? (f = /* @__PURE__ */ new Set())).add(m));
  for (T = 0; T < a; T += 1) {
    if (k = e[T], v = s(k, T), m = /** @type {EachItem} */
    o.get(v).e, n.outrogroups !== null)
      for (const Ie of n.outrogroups)
        Ie.pending.delete(m), Ie.done.delete(m);
    if (m.f & Bt)
      if (m.f ^= Bt, m === l)
        ji(m, null, t);
      else {
        var M = d ? d.next : l;
        m === n.effect.last && (n.effect.last = m.prev), m.prev && (m.prev.next = m.next), m.next && (m.next.prev = m.prev), Zt(n, d, m), Zt(n, m, M), ji(m, M, t), d = m, h = [], p = [], l = d.next;
        continue;
      }
    if (m.f & Ge && (Xr(m), r && ((Pe = (te = m.nodes) == null ? void 0 : te.a) == null || Pe.unfix(), (f ?? (f = /* @__PURE__ */ new Set())).delete(m))), m !== l) {
      if (c !== void 0 && c.has(m)) {
        if (h.length < p.length) {
          var x = p[0], _;
          d = x.prev;
          var R = h[0], Q = h[h.length - 1];
          for (_ = 0; _ < h.length; _ += 1)
            ji(h[_], x, t);
          for (_ = 0; _ < p.length; _ += 1)
            c.delete(p[_]);
          Zt(n, R.prev, Q.next), Zt(n, d, R), Zt(n, Q, x), l = x, d = Q, T -= 1, h = [], p = [];
        } else
          c.delete(m), ji(m, l, t), Zt(n, m.prev, m.next), Zt(n, m, d === null ? n.effect.first : d.next), Zt(n, d, m), d = m;
        continue;
      }
      for (h = [], p = []; l !== null && l !== m; )
        (c ?? (c = /* @__PURE__ */ new Set())).add(l), p.push(l), l = l.next;
      if (l === null)
        continue;
    }
    m.f & Bt || h.push(m), d = m, l = m.next;
  }
  if (n.outrogroups !== null) {
    for (const Ie of n.outrogroups)
      Ie.pending.size === 0 && (Mr(Gs(Ie.done)), (Ot = n.outrogroups) == null || Ot.delete(Ie));
    n.outrogroups.size === 0 && (n.outrogroups = null);
  }
  if (l !== null || c !== void 0) {
    var A = [];
    if (c !== void 0)
      for (m of c)
        m.f & Ge || A.push(m);
    for (; l !== null; )
      !(l.f & Ge) && l !== n.fallback && A.push(l), l = l.next;
    var N = A.length;
    if (N > 0) {
      var le = i & vo && a === 0 ? t : null;
      if (r) {
        for (T = 0; T < N; T += 1)
          (zn = (ln = A[T].nodes) == null ? void 0 : ln.a) == null || zn.measure();
        for (T = 0; T < N; T += 1)
          (cn = (qn = A[T].nodes) == null ? void 0 : qn.a) == null || cn.fix();
      }
      bd(n, A, le);
    }
  }
  r && Dn(() => {
    var Ie, dn;
    if (f !== void 0)
      for (m of f)
        (dn = (Ie = m.nodes) == null ? void 0 : Ie.a) == null || dn.apply();
  });
}
function yd(n, e, t, i, s, r, a, o) {
  var l = a & Ac ? a & Mc ? Cn(t) : /* @__PURE__ */ Po(t, !1, !1) : null, c = a & Ic ? Cn(s) : null;
  return {
    v: l,
    i: c,
    e: tt(() => (r(e, l ?? t, c ?? s, o), () => {
      n.delete(i);
    }))
  };
}
function ji(n, e, t) {
  if (n.nodes)
    for (var i = n.nodes.start, s = n.nodes.end, r = e && !(e.f & Bt) ? (
      /** @type {EffectNodes} */
      e.nodes.start
    ) : t; i !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ gt(i)
      );
      if (r.before(i), i === s)
        return;
      i = a;
    }
}
function Zt(n, e, t) {
  e === null ? n.effect.first = t : e.next = t, t === null ? n.effect.last = e : t.prev = e;
}
function xd(n, e, t = !1, i = !1, s = !1) {
  var r = n, a = "";
  it(() => {
    var o = (
      /** @type {Effect} */
      W
    );
    if (a === (a = e() ?? "")) {
      U && _i();
      return;
    }
    if (o.nodes !== null && (Vo(
      o.nodes.start,
      /** @type {TemplateNode} */
      o.nodes.end
    ), o.nodes = null), a !== "") {
      if (U) {
        $.data;
        for (var l = _i(), c = l; l !== null && (l.nodeType !== On || /** @type {Comment} */
        l.data !== ""); )
          c = l, l = /* @__PURE__ */ gt(l);
        if (l === null)
          throw us(), An;
        At($, c), r = Re(l);
        return;
      }
      var d = a + "";
      t ? d = `<svg>${d}</svg>` : i && (d = `<math>${d}</math>`);
      var f = Zr(d);
      if ((t || i) && (f = /** @type {Element} */
      /* @__PURE__ */ Ue(f)), At(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ue(f),
        /** @type {TemplateNode} */
        f.lastChild
      ), t || i)
        for (; /* @__PURE__ */ Ue(f); )
          r.before(
            /** @type {TemplateNode} */
            /* @__PURE__ */ Ue(f)
          );
      else
        r.before(f);
    }
  });
}
const kd = () => performance.now(), Wt = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (n) => requestAnimationFrame(n)
  ),
  now: () => kd(),
  tasks: /* @__PURE__ */ new Set()
};
function cl() {
  const n = Wt.now();
  Wt.tasks.forEach((e) => {
    e.c(n) || (Wt.tasks.delete(e), e.f());
  }), Wt.tasks.size !== 0 && Wt.tick(cl);
}
function _d(n) {
  let e;
  return Wt.tasks.size === 0 && Wt.tick(cl), {
    promise: new Promise((t) => {
      Wt.tasks.add(e = { c: n, f: t });
    }),
    abort() {
      Wt.tasks.delete(e);
    }
  };
}
function Ts(n, e) {
  Mi(() => {
    n.dispatchEvent(new CustomEvent(e));
  });
}
function Td(n) {
  if (n === "float") return "cssFloat";
  if (n === "offset") return "cssOffset";
  if (n.startsWith("--")) return n;
  const e = n.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (t) => t[0].toUpperCase() + t.slice(1)
  ).join("");
}
function $a(n) {
  const e = {}, t = n.split(";");
  for (const i of t) {
    const [s, r] = i.split(":");
    if (!s || r === void 0) break;
    const a = Td(s.trim());
    e[a] = r.trim();
  }
  return e;
}
const Sd = (n) => n;
function za(n, e, t, i) {
  var m;
  var s = (n & Nc) !== 0, r = "both", a, o = e.inert, l = e.style.overflow, c, d;
  function f() {
    return Mi(() => a ?? (a = t()(e, (i == null ? void 0 : i()) ?? /** @type {P} */
    {}, {
      direction: r
    })));
  }
  var h = {
    is_global: s,
    in() {
      e.inert = o, Ts(e, "introstart"), c = Rr(e, f(), d, 1, () => {
        Ts(e, "introend"), c == null || c.abort(), c = a = void 0, e.style.overflow = l;
      });
    },
    out(T) {
      e.inert = !0, Ts(e, "outrostart"), d = Rr(e, f(), c, 0, () => {
        Ts(e, "outroend"), T == null || T();
      });
    },
    stop: () => {
      c == null || c.abort(), d == null || d.abort();
    }
  }, p = (
    /** @type {Effect & { nodes: EffectNodes }} */
    W
  );
  if (((m = p.nodes).t ?? (m.t = [])).push(h), Ar) {
    var k = s;
    if (!k) {
      for (var v = (
        /** @type {Effect | null} */
        p.parent
      ); v && v.f & Sn; )
        for (; (v = v.parent) && !(v.f & Rt); )
          ;
      k = !v || (v.f & ds) !== 0;
    }
    k && Yr(() => {
      Pn(() => h.in());
    });
  }
}
function Rr(n, e, t, i, s) {
  var r = i === 1;
  if (uc(e)) {
    var a, o = !1;
    return Dn(() => {
      if (!o) {
        var m = e({ direction: r ? "in" : "out" });
        a = Rr(n, m, t, i, s);
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
    return s(), {
      abort: Pi,
      deactivate: Pi,
      reset: Pi,
      t: () => i
    };
  const { delay: l = 0, css: c, tick: d, easing: f = Sd } = e;
  var h = [];
  if (r && t === void 0 && (d && d(0, 1), c)) {
    var p = $a(c(0, 1));
    h.push(p, p);
  }
  var k = () => 1 - i, v = n.animate(h, { duration: l, fill: "forwards" });
  return v.onfinish = () => {
    v.cancel();
    var m = (t == null ? void 0 : t.t()) ?? 1 - i;
    t == null || t.abort();
    var T = i - m, M = (
      /** @type {number} */
      e.duration * Math.abs(T)
    ), x = [];
    if (M > 0) {
      var _ = !1;
      if (c)
        for (var R = Math.ceil(M / 16.666666666666668), Q = 0; Q <= R; Q += 1) {
          var A = m + T * f(Q / R), N = $a(c(A, 1 - A));
          x.push(N), _ || (_ = N.overflow === "hidden");
        }
      _ && (n.style.overflow = "hidden"), k = () => {
        var le = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          v.currentTime
        );
        return m + T * f(le / M);
      }, d && _d(() => {
        if (v.playState !== "running") return !1;
        var le = k();
        return d(le, 1 - le), !0;
      });
    }
    v = n.animate(x, { duration: M, fill: "forwards" }), v.onfinish = () => {
      k = () => i, d == null || d(i, 1 - i), s();
    };
  }, {
    abort: () => {
      v && (v.cancel(), v.effect = null, v.onfinish = Pi);
    },
    deactivate: () => {
      s = Pi;
    },
    reset: () => {
      i === 0 && (d == null || d(1, 0));
    },
    t: () => k()
  };
}
function an(n, e) {
  Yr(() => {
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
      const s = document.createElement("style");
      s.id = e.hash, s.textContent = e.code, i.appendChild(s);
    }
  });
}
const qa = [...` 	
\r\f \v\uFEFF`];
function Ed(n, e, t) {
  var i = n == null ? "" : "" + n;
  if (e && (i = i ? i + " " + e : e), t) {
    for (var s in t)
      if (t[s])
        i = i ? i + " " + s : s;
      else if (i.length)
        for (var r = s.length, a = 0; (a = i.indexOf(s, a)) >= 0; ) {
          var o = a + r;
          (a === 0 || qa.includes(i[a - 1])) && (o === i.length || qa.includes(i[o])) ? i = (a === 0 ? "" : i.substring(0, a)) + i.substring(o + 1) : a = o;
        }
  }
  return i === "" ? null : i;
}
function Ad(n, e) {
  return n == null ? null : String(n);
}
function Jr(n, e, t, i, s, r) {
  var a = n.__className;
  if (U || a !== t || a === void 0) {
    var o = Ed(t, i, r);
    (!U || o !== n.getAttribute("class")) && (o == null ? n.removeAttribute("class") : n.className = o), n.__className = t;
  } else if (r && s !== r)
    for (var l in r) {
      var c = !!r[l];
      (s == null || c !== !!s[l]) && n.classList.toggle(l, c);
    }
  return r;
}
function dl(n, e, t, i) {
  var s = n.__style;
  if (U || s !== e) {
    var r = Ad(e);
    (!U || r !== n.getAttribute("style")) && (r == null ? n.removeAttribute("style") : n.style.cssText = r), n.__style = e;
  }
  return i;
}
const Id = Symbol("is custom element"), Cd = Symbol("is html");
function ft(n, e, t, i) {
  var s = Md(n);
  U && (s[e] = n.getAttribute(e), e === "src" || e === "srcset" || e === "href" && n.nodeName === "LINK") || s[e] !== (s[e] = t) && (e === "loading" && (n[pc] = t), t == null ? n.removeAttribute(e) : typeof t != "string" && Rd(n).includes(e) ? n[e] = t : n.setAttribute(e, t));
}
function Md(n) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    n.__attributes ?? (n.__attributes = {
      [Id]: n.nodeName.includes("-"),
      [Cd]: n.namespaceURI === zc
    })
  );
}
var Ua = /* @__PURE__ */ new Map();
function Rd(n) {
  var e = n.getAttribute("is") || n.nodeName, t = Ua.get(e);
  if (t) return t;
  Ua.set(e, t = []);
  for (var i, s = n, r = Element.prototype; r !== s; ) {
    i = lc(s);
    for (var a in i)
      i[a].set && t.push(a);
    s = fo(s);
  }
  return t;
}
function Ld(n, e, t = e) {
  var i = /* @__PURE__ */ new WeakSet();
  ed(n, "input", async (s) => {
    var r = s ? n.defaultValue : n.value;
    if (r = cr(n) ? dr(r) : r, t(r), z !== null && i.add(z), await nl(), r !== (r = e())) {
      var a = n.selectionStart, o = n.selectionEnd, l = n.value.length;
      if (n.value = r ?? "", o !== null) {
        var c = n.value.length;
        a === o && o === l && c > l ? (n.selectionStart = c, n.selectionEnd = c) : (n.selectionStart = a, n.selectionEnd = Math.min(o, c));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (U && n.defaultValue !== n.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Pn(e) == null && n.value) && (t(cr(n) ? dr(n.value) : n.value), z !== null && i.add(z)), Ks(() => {
    var s = e();
    if (n === document.activeElement) {
      var r = (
        /** @type {Batch} */
        Ms ?? z
      );
      if (i.has(r))
        return;
    }
    cr(n) && s === dr(n.value) || n.type === "date" && !s && !n.value || s !== n.value && (n.value = s ?? "");
  });
}
function cr(n) {
  var e = n.type;
  return e === "number" || e === "range";
}
function dr(n) {
  return n === "" ? null : +n;
}
function Fa(n, e) {
  return n === e || (n == null ? void 0 : n[Gi]) === e;
}
function ea(n = {}, e, t, i) {
  return Yr(() => {
    var s, r;
    return Ks(() => {
      s = r, r = [], Pn(() => {
        n !== t(...r) && (e(n, ...r), s && Fa(t(...s), n) && e(null, ...s));
      });
    }), () => {
      Dn(() => {
        r && Fa(t(...r), n) && e(null, ...r);
      });
    };
  }), n;
}
let Ss = !1;
function Od(n) {
  var e = Ss;
  try {
    return Ss = !1, [n(), Ss];
  } finally {
    Ss = e;
  }
}
function K(n, e, t, i) {
  var M;
  var s = (t & Oc) !== 0, r = (t & Dc) !== 0, a = (
    /** @type {V} */
    i
  ), o = !0, l = () => (o && (o = !1, a = r ? Pn(
    /** @type {() => V} */
    i
  ) : (
    /** @type {V} */
    i
  )), a), c;
  if (s) {
    var d = Gi in n || po in n;
    c = ((M = xn(n, e)) == null ? void 0 : M.set) ?? (d && e in n ? (x) => n[e] = x : void 0);
  }
  var f, h = !1;
  s ? [f, h] = Od(() => (
    /** @type {V} */
    n[e]
  )) : f = /** @type {V} */
  n[e], f === void 0 && i !== void 0 && (f = l(), c && (kc(), c(f)));
  var p;
  if (p = () => {
    var x = (
      /** @type {V} */
      n[e]
    );
    return x === void 0 ? l() : (o = !0, x);
  }, !(t & Lc))
    return p;
  if (c) {
    var k = n.$$legacy;
    return (
      /** @type {() => V} */
      function(x, _) {
        return arguments.length > 0 ? ((!_ || k || h) && c(_ ? p() : x), x) : p();
      }
    );
  }
  var v = !1, m = (t & Rc ? Zs : Lo)(() => (v = !1, p()));
  s && y(m);
  var T = (
    /** @type {Effect} */
    W
  );
  return (
    /** @type {() => V} */
    function(x, _) {
      if (arguments.length > 0) {
        const R = _ ? y(m) : s ? ve(x) : x;
        return q(m, R), v = !0, a !== void 0 && (a = R), x;
      }
      return Nn && v || T.f & Vt ? m.v : y(m);
    }
  );
}
function Dd(n) {
  return new Nd(n);
}
var Ht, Je;
class Nd {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    I(this, Ht);
    /** @type {Record<string, any>} */
    I(this, Je);
    var r;
    var t = /* @__PURE__ */ new Map(), i = (a, o) => {
      var l = /* @__PURE__ */ Po(o, !1, !1);
      return t.set(a, l), l;
    };
    const s = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(a, o) {
          return y(t.get(o) ?? i(o, Reflect.get(a, o)));
        },
        has(a, o) {
          return o === po ? !0 : (y(t.get(o) ?? i(o, Reflect.get(a, o))), Reflect.has(a, o));
        },
        set(a, o, l) {
          return q(t.get(o) ?? i(o, l), l), Reflect.set(a, o, l);
        }
      }
    );
    S(this, Je, (e.hydrate ? md : Kr)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: s,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((r = e == null ? void 0 : e.props) != null && r.$$host) || e.sync === !1) && G(), S(this, Ht, s.$$events);
    for (const a of Object.keys(g(this, Je)))
      a === "$set" || a === "$destroy" || a === "$on" || Ps(this, a, {
        get() {
          return g(this, Je)[a];
        },
        /** @param {any} value */
        set(o) {
          g(this, Je)[a] = o;
        },
        enumerable: !0
      });
    g(this, Je).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(s, a);
    }, g(this, Je).$destroy = () => {
      Cr(g(this, Je));
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    g(this, Je).$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, t) {
    g(this, Ht)[e] = g(this, Ht)[e] || [];
    const i = (...s) => t.call(this, ...s);
    return g(this, Ht)[e].push(i), () => {
      g(this, Ht)[e] = g(this, Ht)[e].filter(
        /** @param {any} fn */
        (s) => s !== i
      );
    };
  }
  $destroy() {
    g(this, Je).$destroy();
  }
}
Ht = new WeakMap(), Je = new WeakMap();
let ul;
typeof HTMLElement == "function" && (ul = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, t, i) {
    super();
    /** The Svelte component constructor */
    D(this, "$$ctor");
    /** Slots */
    D(this, "$$s");
    /** @type {any} The Svelte component instance */
    D(this, "$$c");
    /** Whether or not the custom element is connected */
    D(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    D(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    D(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    D(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    D(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    D(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    D(this, "$$me");
    this.$$ctor = e, this.$$s = t, i && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(e, t, i) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
      const s = this.$$c.$on(e, t);
      this.$$l_u.set(t, s);
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
      const s = this.$$l_u.get(t);
      s && (s(), this.$$l_u.delete(t));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(s) {
        return (r) => {
          const a = document.createElement("slot");
          s !== "default" && (a.name = s), j(r, a);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, i = Pd(this);
      for (const s of this.$$s)
        s in i && (s === "default" && !this.$$d.children ? (this.$$d.children = e(s), t.default = !0) : t[s] = e(s));
      for (const s of this.attributes) {
        const r = this.$$g_p(s.name);
        r in this.$$d || (this.$$d[r] = Os(r, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = Dd({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = id(() => {
        Ks(() => {
          var s;
          this.$$r = !0;
          for (const r of Ns(this.$$c)) {
            if (!((s = this.$$p_d[r]) != null && s.reflect)) continue;
            this.$$d[r] = this.$$c[r];
            const a = Os(
              r,
              this.$$d[r],
              this.$$p_d,
              "toAttribute"
            );
            a == null ? this.removeAttribute(this.$$p_d[r].attribute || r) : this.setAttribute(this.$$p_d[r].attribute || r, a);
          }
          this.$$r = !1;
        });
      });
      for (const s in this.$$l)
        for (const r of this.$$l[s]) {
          const a = this.$$c.$on(s, r);
          this.$$l_u.set(r, a);
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
    var s;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Os(e, i, this.$$p_d, "toProp"), (s = this.$$c) == null || s.$set({ [e]: this.$$d[e] }));
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
    return Ns(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function Os(n, e, t, i) {
  var r;
  const s = (r = t[n]) == null ? void 0 : r.type;
  if (e = s === "Boolean" && typeof e != "boolean" ? e != null : e, !i || !t[n])
    return e;
  if (i === "toAttribute")
    switch (s) {
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
    switch (s) {
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
function Pd(n) {
  const e = {};
  return n.childNodes.forEach((t) => {
    e[
      /** @type {Element} node */
      t.slot || "default"
    ] = !0;
  }), e;
}
function on(n, e, t, i, s, r) {
  let a = class extends ul {
    constructor() {
      super(n, t, s), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Ns(e).map(
        (o) => (e[o].attribute || o).toLowerCase()
      );
    }
  };
  return Ns(e).forEach((o) => {
    Ps(a.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(l) {
        var f;
        l = Os(o, l, e), this.$$d[o] = l;
        var c = this.$$c;
        if (c) {
          var d = (f = xn(c, o)) == null ? void 0 : f.get;
          d ? c[o] = l : c.$set({ [o]: l });
        }
      }
    });
  }), i.forEach((o) => {
    Ps(a.prototype, o, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[o];
      }
    });
  }), n.element = /** @type {any} */
  a, a;
}
function ta(n) {
  He === null && mo(), Zi(() => {
    const e = Pn(n);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function $d(n) {
  He === null && mo(), ta(() => () => Pn(n));
}
const zd = "5";
var co;
typeof window < "u" && ((co = window.__svelte ?? (window.__svelte = {})).v ?? (co.v = /* @__PURE__ */ new Set())).add(zd);
const qd = (n) => n;
function Ud(n) {
  const e = n - 1;
  return e * e * e + 1;
}
function Ha(n) {
  const e = typeof n == "string" && n.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    n,
    "px"
  ];
}
function Fd(n, { delay: e = 0, duration: t = 400, easing: i = qd } = {}) {
  const s = +getComputedStyle(n).opacity;
  return {
    delay: e,
    duration: t,
    easing: i,
    css: (r) => `opacity: ${r * s}`
  };
}
function Hd(n, { delay: e = 0, duration: t = 400, easing: i = Ud, x: s = 0, y: r = 0, opacity: a = 0 } = {}) {
  const o = getComputedStyle(n), l = +o.opacity, c = o.transform === "none" ? "" : o.transform, d = l * (1 - a), [f, h] = Ha(s), [p, k] = Ha(r);
  return {
    delay: e,
    duration: t,
    easing: i,
    css: (v, m) => `
			transform: ${c} translate(${(1 - v) * f}${h}, ${(1 - v) * p}${k});
			opacity: ${l - d * m}`
  };
}
var ti, ni, ii, si;
class fl {
  constructor() {
    I(this, ti);
    I(this, ni);
    I(this, ii);
    I(this, si);
    S(this, ti, /* @__PURE__ */ H(!1)), S(this, ni, /* @__PURE__ */ H(!1)), S(this, ii, /* @__PURE__ */ H(!1)), S(this, si, /* @__PURE__ */ H(!1));
  }
  get isOpen() {
    return y(g(this, ti));
  }
  set isOpen(e) {
    q(g(this, ti), e, !0);
  }
  get isMinimized() {
    return y(g(this, ni));
  }
  set isMinimized(e) {
    q(g(this, ni), e, !0);
  }
  get isLoading() {
    return y(g(this, ii));
  }
  set isLoading(e) {
    q(g(this, ii), e, !0);
  }
  get hasUnreadMessages() {
    return y(g(this, si));
  }
  set hasUnreadMessages(e) {
    q(g(this, si), e, !0);
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
ti = new WeakMap(), ni = new WeakMap(), ii = new WeakMap(), si = new WeakMap();
function Wd() {
  return new fl();
}
const Ii = new fl(), ye = {
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
}, gn = {
  /** Maximum message length */
  MAX_LENGTH: 4e3,
  /** Minimum message length */
  MIN_LENGTH: 1,
  /** Maximum message queue size to prevent memory leaks */
  MAX_QUEUE_SIZE: 50
}, Wa = {
  /** Visitor ID storage key */
  VISITOR_ID: "ai_chat_visitor_id",
  /** Session history storage key */
  SESSIONS: "ai_chat_sessions"
};
var ri, ai, oi, li, ci, di;
class gl {
  constructor() {
    I(this, ri);
    I(this, ai);
    I(this, oi);
    I(this, li);
    I(this, ci);
    I(this, di);
    S(this, ri, /* @__PURE__ */ H(ve([]))), S(this, ai, /* @__PURE__ */ H(null)), S(this, oi, /* @__PURE__ */ H(!1)), S(this, li, /* @__PURE__ */ H(null)), S(this, ci, /* @__PURE__ */ H(null)), this.streamingBuffer = "", this.streamingTimeout = null, S(this, di, /* @__PURE__ */ H(0));
  }
  get messages() {
    return y(g(this, ri));
  }
  set messages(e) {
    q(g(this, ri), e, !0);
  }
  get currentSession() {
    return y(g(this, ai));
  }
  set currentSession(e) {
    q(g(this, ai), e, !0);
  }
  get isTyping() {
    return y(g(this, oi));
  }
  set isTyping(e) {
    q(g(this, oi), e, !0);
  }
  get error() {
    return y(g(this, li));
  }
  set error(e) {
    q(g(this, li), e, !0);
  }
  get streamingMessageId() {
    return y(g(this, ci));
  }
  set streamingMessageId(e) {
    q(g(this, ci), e, !0);
  }
  get streamingUpdateSignal() {
    return y(g(this, di));
  }
  set streamingUpdateSignal(e) {
    q(g(this, di), e, !0);
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
        ye.STREAMING_BATCH_DELAY
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
ri = new WeakMap(), ai = new WeakMap(), oi = new WeakMap(), li = new WeakMap(), ci = new WeakMap(), di = new WeakMap();
function Bd() {
  return new gl();
}
const sn = new gl(), Ba = {
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
  "auto-init": "autoInit"
}, rt = {
  theme: "modern",
  position: "bottom-right",
  title: "AI Assistant",
  placeholder: "Type your message...",
  avatarEmoji: "🤖",
  initialMessage: void 0,
  quickQuestions: void 0,
  debug: !1,
  autoInit: !0
}, hl = {
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
    return Ba[n] || null;
  },
  /**
   * Convert property name to HTML attribute name
   */
  propertyToAttribute(n) {
    const t = Object.entries(Ba).find(([, i]) => i === n);
    return t ? t[0] : null;
  }
}, jd = [
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
function pl(n) {
  return jd.includes(n);
}
function Js(n) {
  return !n || typeof n != "string" ? !1 : /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(n);
}
function na(n, e = "#6b46c1") {
  return Js(n) ? n : e;
}
function ml(n) {
  if (!Js(n)) return n;
  if (n.length === 4) {
    const e = n.slice(1);
    return "#" + e[0] + e[0] + e[1] + e[1] + e[2] + e[2];
  }
  return n;
}
function vl(n) {
  const e = ml(n), t = parseInt(e.slice(1, 3), 16) / 255, i = parseInt(e.slice(3, 5), 16) / 255, s = parseInt(e.slice(5, 7), 16) / 255, r = Math.max(t, i, s), a = Math.min(t, i, s);
  let o = 0, l = 0;
  const c = (r + a) / 2;
  if (r !== a) {
    const d = r - a;
    switch (l = c > 0.5 ? d / (2 - r - a) : d / (r + a), r) {
      case t:
        o = ((i - s) / d + (i < s ? 6 : 0)) / 6;
        break;
      case i:
        o = ((s - t) / d + 2) / 6;
        break;
      case s:
        o = ((t - i) / d + 4) / 6;
        break;
    }
  }
  return { h: o * 360, s: l * 100, l: c * 100 };
}
function bl(n, e, t) {
  e /= 100, t /= 100;
  const i = e * Math.min(t, 1 - t), s = (r) => {
    const a = (r + n / 30) % 12, o = t - i * Math.max(Math.min(a - 3, 9 - a, 1), -1);
    return Math.round(255 * o).toString(16).padStart(2, "0");
  };
  return `#${s(0)}${s(8)}${s(4)}`.toUpperCase();
}
function dt(n, e) {
  if (!Js(n)) return n;
  const t = vl(n), i = Math.max(0, Math.min(100, t.l + e));
  return bl(t.h, t.s, i);
}
const Vd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  adjustColor: dt,
  expandHexColor: ml,
  hexToHsl: vl,
  hslToHex: bl,
  isValidHexColor: Js,
  sanitizeHexColor: na
}, Symbol.toStringTag, { value: "Module" }));
var ui, fi, gi, hi, pi, mi, vi, bi, wi, yi, xi, ki;
class wl {
  constructor() {
    I(this, ui);
    I(this, fi);
    I(this, gi);
    I(this, hi);
    I(this, pi);
    I(this, mi);
    I(this, vi);
    I(this, bi);
    I(this, wi);
    I(this, yi);
    I(this, xi);
    I(this, ki);
    S(this, ui, /* @__PURE__ */ H("")), S(this, fi, /* @__PURE__ */ H(ve(rt.theme))), S(this, gi, /* @__PURE__ */ H(ve(rt.position))), S(this, hi, /* @__PURE__ */ H(ve(rt.title))), S(this, pi, /* @__PURE__ */ H(ve(rt.logoUrl))), S(this, mi, /* @__PURE__ */ H(ve(rt.placeholder))), S(this, vi, /* @__PURE__ */ H(ve(rt.accentColor))), S(this, bi, /* @__PURE__ */ H(ve(rt.avatarEmoji))), S(this, wi, /* @__PURE__ */ H(ve(rt.companyName))), S(this, yi, /* @__PURE__ */ H(ve(rt.initialMessage))), S(this, xi, /* @__PURE__ */ H(ve(rt.quickQuestions))), S(this, ki, /* @__PURE__ */ H("default"));
  }
  get clientId() {
    return y(g(this, ui));
  }
  set clientId(e) {
    q(g(this, ui), e, !0);
  }
  get theme() {
    return y(g(this, fi));
  }
  set theme(e) {
    q(g(this, fi), e, !0);
  }
  get position() {
    return y(g(this, gi));
  }
  set position(e) {
    q(g(this, gi), e, !0);
  }
  get title() {
    return y(g(this, hi));
  }
  set title(e) {
    q(g(this, hi), e, !0);
  }
  get logoUrl() {
    return y(g(this, pi));
  }
  set logoUrl(e) {
    q(g(this, pi), e, !0);
  }
  get placeholder() {
    return y(g(this, mi));
  }
  set placeholder(e) {
    q(g(this, mi), e, !0);
  }
  get accentColor() {
    return y(g(this, vi));
  }
  set accentColor(e) {
    q(g(this, vi), e, !0);
  }
  get avatarEmoji() {
    return y(g(this, bi));
  }
  set avatarEmoji(e) {
    q(g(this, bi), e, !0);
  }
  get companyName() {
    return y(g(this, wi));
  }
  set companyName(e) {
    q(g(this, wi), e, !0);
  }
  get initialMessage() {
    return y(g(this, yi));
  }
  set initialMessage(e) {
    q(g(this, yi), e, !0);
  }
  get quickQuestions() {
    return y(g(this, xi));
  }
  set quickQuestions(e) {
    q(g(this, xi), e, !0);
  }
  get titleSource() {
    return y(g(this, ki));
  }
  set titleSource(e) {
    q(g(this, ki), e, !0);
  }
  updateConfig(e, t = "default") {
    if (e.title !== void 0) {
      this.setTitle(e.title, t);
      const { title: i, ...s } = e;
      Object.assign(this, s);
    } else
      Object.assign(this, e);
  }
  /**
   * Set title with priority enforcement
   * Priority: user > backend > default
   */
  setTitle(e, t) {
    const i = ["user", "backend", "default"], s = i.indexOf(this.titleSource);
    i.indexOf(t) <= s && (this.title = e, this.titleSource = t);
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
    for (const s of i) {
      const r = hl.attributeToProperty(s);
      if (!r) continue;
      const a = e.getAttribute(s);
      if (r === "initialMessage") {
        t.initialMessage = a === "" ? void 0 : a || void 0;
        continue;
      }
      if (a)
        switch (r) {
          case "clientId":
          case "title":
          case "logoUrl":
          case "placeholder":
          case "avatarEmoji":
            t[r] = a;
            break;
          case "accentColor":
            t.accentColor = na(a, this.accentColor);
            break;
          case "theme":
            pl(a) && (t.theme = a);
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
              Array.isArray(o) && (t.quickQuestions = o);
            } catch {
            }
            break;
        }
    }
    return t;
  }
  get cssVariables() {
    const e = {};
    return this.accentColor && (e["--widget-primary"] = this.accentColor, e["--widget-primary-hover"] = dt(this.accentColor, -20), e["--widget-primary-light"] = dt(this.accentColor, 20), e["--widget-primary-dark"] = dt(this.accentColor, -30), e["--widget-gradient"] = `linear-gradient(135deg, ${this.accentColor} 0%, ${dt(this.accentColor, 20)} 100%)`, e["--widget-gradient-hover"] = `linear-gradient(135deg, ${dt(this.accentColor, -20)} 0%, ${this.accentColor} 100%)`), e;
  }
  applyTheme(e) {
    e.setAttribute("data-theme", this.theme);
    const t = this.cssVariables;
    for (const [i, s] of Object.entries(t))
      e.style.setProperty(i, s);
  }
  // Remove duplicate adjustColor method - using shared utility from color.ts
}
ui = new WeakMap(), fi = new WeakMap(), gi = new WeakMap(), hi = new WeakMap(), pi = new WeakMap(), mi = new WeakMap(), vi = new WeakMap(), bi = new WeakMap(), wi = new WeakMap(), yi = new WeakMap(), xi = new WeakMap(), ki = new WeakMap();
function Gd() {
  return new wl();
}
const Mt = new wl(), yl = "data:image/webp;base64,UklGRugJAABXRUJQVlA4WAoAAAAQAAAAfwAAfwAAQUxQSFACAAABkEXbtik59777XleN2LZt27Zt27ZtW99tuzuF2LbtpKpGp3BivHNujIiYAPZ3d2OLGUu7p5aXUmc/AMCFdkJWtWzwQVcXLqdUZ+GjtzPIqSt84jAp8UWfsppLaemnrJUS6/spA5iUM9/72O2McmKdnB9ydmCS5h2vv3e1oyIrxjKdBjiZnklcDQOIFjLTogFiValFyU6Eyk4Jll6Q7ESI9EJlpwTLgxu+pJemBQDEGDUvwxc0KqQYig/fGmf+TJPJZIqP8LkP8MQ/LHavyfz5O4eUSUSFoWNcAqB0WnsmooDXMANiczWOzjjRDqhf9RHI1OWA3T1eoFLGAH7PIAVTzQQCwFYNUaJDQOLBRGj4CCCyJ5okl6iwGrG0ASqdpZAoW8iAGUgSHaMj0oAj81M6LifFUc5Jx8tcOJoAnfa8CFRV1CXElkNVVX2lHuYTGnKQEFd8SKjviJQ6qngGSD5WVDcZrwLRZ9PpZSqQPVgnmj9de4Q+kp2gy0fVySm6vL+VTkrv1C8/p2WXyEKXn074erpWKfpg1ZxUJZRiOhWTifKMEnphSlvrC9srOyUOm+2VtaVgOvbKnjNHcxcdjto5c+UwMt3XBzrtORnKRpTkxVHIIbsMj+i4nhKHYS8d/ioOvpSO2RwHq+6iwlmWITUeoCJQw8LaEvG6OkOrBdCwTeBh+e5TcC4Dw9zcge9BeYaat3iE7W51hr3ccVym4gx/qqUv8TyanIRRqBRdcQ3Hxbm5OCOSp2owaX2wvv2Xja6ahDNSuRCKjoXg7L//f54CVlA4IHIHAACwKACdASqAAIAAPlEkkEWjoiGTST0YOAUEoA1fIQfqvZTa57fyGW9PeP90OkinbzF+UP87/Q/yk+AH9V9mfmC/p5/hPzA9zP1a+YD+Wf13/Xf6L2M/2c9yPoAfrV1iXoMfwf+x+mH+2HwSftD+0/wFfrd/7+sAs5dANxsoF2Qp/XuKnjE8Gvwf1Gf6x/wvUPz4PRP7B/AP/Mf6v/0OuF+5Hsi/ryxHk0B48YBTRtdB5WCf3dKxN+Z3e0Bap21U4g0QNgmgt9PszIvWmrmvDr/zjzLxO1+KHiMxSwKbP/CmfQapmXy8GPwlWwZzWyDJKSzuSxG3oImZ+aAV5K6ukJTpOOPfUdUnNUrs2CTonYo1/mdtQnYigkahltolBX+gz3dswlpDn7EPz3ifxMbj6L/yfEgMvWzgisK1N1dy/5lC7Zwr0NTM81DtakR50uAAAP7+pTZc//8cSrMe16Db1wMrZOlPVcrZyaAcPVhS95237FTuuF4m977CEVAwBMUJwFRGDoEKQipeVQdPqKdnp9YwI89N2eTzoo27BX3l7acdt+NGQnnZqQnzMeC4MS7ryzaHFab9GApUauHd9b9i37aLi79SW9CeZWyZGfdtJaSaE1b467r48k/kEszB3I0cGm0JQq+Hlbn+SCl5MG63ApAqG8Lud8FVHMrY5xH0PC4ah5djicc1c/XvyZJAVH+KbeG19UFXrf8X1ffTOuOjvVCn8bFf8T5gUAZ5rOo4daVYTbhMt1efaL2SetLP+XRxxDPNYwYHbD7K5eOKdAFOQ+mG4MKDXvQJBAC50HrqnKo9O405Q8Z8O/+ZRXeFiV6vKdDVGdVUluUVIq3t7wryRVmKAwiDOc1qi9TnXHTUWfXCeCFNC7Y5EPmc7li11DywVw84gE+NnXo/p8YDJM4SBeFEznUonSd2j9ie/azILWu7JVZfb+zlEWKboli0MsIBUYOS3KQsZ7779L9ogSjLn4n49yfimFO1AYn3qOz+HlTle3rPzLols3XLqkvp5yFLLr31gT+lHXXiEAXgAFn2JWJepcnEq0CfPs9nhwmhMoh4Am5PzzVXbe1RK/RYnKIoEz5YEv3yEl7PEw3+g3+Nvdx7dXV+61BaRRFYdprsKFb2Q9og3it+vCd4r4npE3l0a6SuBklxIiRQ7McizSDzhUgm2joVcDjjjFjF3Rp+1asiMHqJ6Tlz46aRB+F/FvPJq24HNEM+vKuhmpOdKnC3EWm8UT334DI8ItBX/MMxgirhjjGH2XxvjVEGwOymA93sFadiIimsN+u6QrXwl12/vMeuYr33Tr8mJEdp6tRVYZFXxEfc41n0meSi2ibjmu0wBtu1iqjnRan5xKMGDonKLqcAFzGILwkdHc3/Yewg6OY4zVMpmIvq2FIVieitjQbY8LW9nsKes5pOGr7tQQ6MqWAVW2eBIPJl8PmShHRgYzrjD9eWeQ6uINH+sp1XeWhsy1c64ummq+LnJCaV7HoqnQKiRjS1LFyxFPyvzKOpb03K1Z/Fj8v8Z66/SwiLAt+EtdhfrgPWxb69TZSFv+srYe/kve4aU6WzJGW7qUid4BiKSiHlvbo3MJFq2c/5PYveMTFX8qUtyBRDX5pevb//fG/6xm2ymF0XRY4/lyUprmi0po9xoz5IzHz368qsmPl+g3lCG29YWnJGFX/HviGuKm5o1ZdOTiPu/V6G20ih+v8fMnUDhJ6T5D530RgLx8n6Ya4xMDvuVlf4/6tmAJne81CE+mV00oIXwEoPYBt8sEvGb6bkPBm+er+sYRy0WDSKdt7Jb/wxos7jYmqiHy96cp6mmRa7nARocgS+eOzmcRhceaUf00neRyBWf2pvNc/VOnUir2hvXD1I8sZ9WsZ2cko1O1qM9SQX5LmBk+VE6lDUfMB8NuaZrMFye30QJXYrRnMDhPHRQMYJeP39qXPPhTCbeK56GkFc/vBXz4/ByRaOYorLlSw62qs4CF+GguMponNWuIIOuxmMgkZXOg9KeKzHzK+QfzxtQDPnlI0vTocV6YvIQoqxevmEdQ+ZJ/tYfBkXGNEuH12Wyv/+Dmmj/vJ6o3vP7gPfWbMvDH445D3Nw/lCYSNTKJ7ZJxwVDNbcLSKYgGgNigtMh/erRSzs7AY7IJ5R2y/i0uN/YcWF+SdBga8mdvUVlPg8adxHMXRo6hcgg3SL97JJCLeOmQGgt0Pj9EFVKXA/FZH0lQ7WuU1WnnwhnBX97rNb+77R/HstinK6Vy4/ZE3F/r3s6qEPQsJoEqArQO1BLIKS6TucRxCwFIP/cUvW49Onm283s/qdn4YhPbidHpkFW1rd6nkG+MwD1qe9h80gBM0MJx0cR5e7G2dVtUNurZqIXpXx2jABNlADHjbqBYcAGR93bylmP89clRe0pLc78uD/r4yf8vygxwrqooTDCnFh045zBwvryQ7xk1M3D7sYJAHyU6H74HI4eL/iITAjvoT8f+6klN4/114TfGrAYuX+b89XZEdxQSqx+bsya/c9Udon6nBJcRIqCfYPh7JysWSPhAAAAAAAAAAA", Yd = yl, Qd = yl;
var Xd = /* @__PURE__ */ J('<img alt="Chat" class="button-logo svelte-bkcus6"/>'), Zd = /* @__PURE__ */ pd('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-bkcus6"><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor" class="svelte-bkcus6"></path></svg>'), Kd = /* @__PURE__ */ J('<span class="unread-indicator svelte-bkcus6"></span>'), Jd = /* @__PURE__ */ J("<button><!> <!></button>");
const eu = {
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
function xl(n, e) {
  Yt(e, !0), an(n, eu);
  let t = K(e, "onclick", 7), i = K(e, "ui", 7, Ii);
  const s = /* @__PURE__ */ we(() => i().isOpen), r = /* @__PURE__ */ we(() => i().hasUnreadMessages);
  function a() {
    var v;
    (v = t()) == null || v();
  }
  var o = {
    get onclick() {
      return t();
    },
    set onclick(v) {
      t(v), G();
    },
    get ui() {
      return i();
    },
    set ui(v = Ii) {
      i(v), G();
    }
  }, l = Jd();
  let c;
  l.__click = a;
  var d = se(l);
  {
    var f = (v) => {
      var m = Xd();
      it(() => ft(m, "src", Yd)), j(v, m);
    }, h = (v) => {
      var m = Zd();
      j(v, m);
    };
    Se(d, (v) => {
      y(s) ? v(h, !1) : v(f);
    });
  }
  var p = ce(d, 2);
  {
    var k = (v) => {
      var m = Kd();
      j(v, m);
    };
    Se(p, (v) => {
      y(r) && !y(s) && v(k);
    });
  }
  return ie(l), it(() => {
    c = Jr(l, 1, "floating-button svelte-bkcus6", null, c, { open: y(s) }), ft(l, "aria-label", y(s) ? "Close chat" : "Open chat");
  }), j(n, l), Qt(o);
}
gs(["click"]);
on(xl, { onclick: {}, ui: {} }, [], [], !0);
class tu {
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
function ia(n) {
  return new tu(n);
}
function ur() {
  var n;
  try {
    return typeof process < "u" && ((n = process.env) == null ? void 0 : n.NODE_ENV) === "test" ? process.env.ENABLE_TEST_DEBUG === "true" : localStorage.getItem("ai-widget-debug") === "true" || window._aiWidgetDebug === !0 || !1;
  } catch {
    return !1;
  }
}
const Z = {
  isDebugEnabled: ur,
  log: (n, e, t) => {
    ur() && (t !== void 0 ? console.log(`[${n}] ${e}:`, t) : console.log(`[${n}] ${e}`));
  },
  warn: (n, e, t) => {
    ur() && (t !== void 0 ? console.warn(`[${n}] ${e}:`, t) : console.warn(`[${n}] ${e}`));
  },
  error: (n, e, t) => {
    t !== void 0 ? console.error(`[${n}] ${e}:`, t) : console.error(`[${n}] ${e}`);
  }
};
class Yn {
  constructor() {
    this.currentId = null, this.messageMap = /* @__PURE__ */ new Map();
  }
  /**
   * Get singleton instance
   */
  static getInstance() {
    return Yn.instance || (Yn.instance = new Yn()), Yn.instance;
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
      const s = i.match(/(\d+)/);
      if (s) {
        const r = parseInt(s[1], 10);
        t - r > e && this.messageMap.delete(i);
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
function Tt() {
  return Yn.getInstance();
}
class nu {
  /**
   * Validate message content and length
   */
  static validate(e) {
    const t = Tt().getCurrent();
    if (Z.log("MessageValidator", "validate() called", {
      correlationId: t,
      message: e,
      messageType: typeof e,
      messageLength: (e == null ? void 0 : e.length) || 0,
      isNullOrUndefined: e == null
    }), typeof e != "string") {
      const a = "Message is required and must be a string";
      return Z.log("MessageValidator", "Validation failed - invalid type", { correlationId: t, message: e, error: a }), {
        isValid: !1,
        error: a
      };
    }
    if (e.length === 0) {
      const a = "Message is too short";
      return Z.log("MessageValidator", "Validation failed - empty string", { correlationId: t, message: e, error: a }), {
        isValid: !1,
        error: a
      };
    }
    const i = e.trim();
    if (Z.log("MessageValidator", "After trimming", {
      correlationId: t,
      original: e,
      trimmed: i,
      originalLength: e.length,
      trimmedLength: i.length,
      wasWhitespaceOnly: e.length > 0 && i.length === 0
    }), i.length < gn.MIN_LENGTH) {
      const a = "Message is too short";
      return Z.log("MessageValidator", "Validation failed - too short", {
        correlationId: t,
        trimmedLength: i.length,
        minLength: gn.MIN_LENGTH,
        error: a
      }), {
        isValid: !1,
        error: a
      };
    }
    if (i.length > gn.MAX_LENGTH) {
      const a = `Message exceeds maximum length of ${gn.MAX_LENGTH} characters`;
      return Z.log("MessageValidator", "Validation failed - too long", {
        correlationId: t,
        trimmedLength: i.length,
        maxLength: gn.MAX_LENGTH,
        error: a
      }), {
        isValid: !1,
        error: a
      };
    }
    Z.log("MessageValidator", "Starting HTML sanitization", {
      correlationId: t,
      inputContent: i,
      inputLength: i.length
    });
    const s = this.sanitizeHTML(i);
    Z.log("MessageValidator", "HTML sanitization complete", {
      correlationId: t,
      original: i,
      sanitized: s,
      originalLength: i.length,
      sanitizedLength: s.length,
      contentRemoved: i.length !== s.length,
      contentChanged: i !== s,
      removedContent: i.length !== s.length ? {
        removed: i.replace(s, ""),
        difference: i.length - s.length
      } : null
    });
    const r = {
      isValid: !0,
      sanitizedValue: s
    };
    return Z.log("MessageValidator", "Final validation result", { correlationId: t, result: r }), r;
  }
  /**
   * Basic HTML sanitization
   */
  static sanitizeHTML(e) {
    const t = Tt().getCurrent();
    Z.log("MessageValidator", "sanitizeHTML() input", {
      correlationId: t,
      input: e,
      inputLength: e.length
    });
    let i = e, s = 0;
    const r = i;
    i = i.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ""), i !== r && Z.log("MessageValidator", `Step ${++s} - Removed script tags`, {
      correlationId: t,
      before: r,
      after: i,
      removed: r.length - i.length
    });
    const a = i;
    i = i.replace(/href\s*=\s*["']javascript:[^"']*["']/gi, 'href=""'), i !== a && Z.log("MessageValidator", `Step ${++s} - Removed javascript: protocol`, {
      correlationId: t,
      before: a,
      after: i,
      removed: a.length - i.length
    });
    const o = i;
    i = i.replace(/\s*on\w+\s*=\s*["'][^"']*["']/gi, ""), i !== o && Z.log("MessageValidator", `Step ${++s} - Removed event handlers:`, {
      correlationId: t,
      before: o,
      after: i,
      removed: o.length - i.length
    });
    const l = i;
    return i = i.replace(/src\s*=\s*["']data:[^"']*["']/gi, 'src=""'), i !== l && Z.log("MessageValidator", `Step ${++s} - Removed data: URLs:`, {
      correlationId: t,
      before: l,
      after: i,
      removed: l.length - i.length
    }), Z.log("MessageValidator", "sanitizeHTML() result", {
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
class kl {
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
class Qe extends Error {
  constructor(e, t, i = !1) {
    super(e), this.name = "ChatWidgetError", this.context = t, this.timestamp = /* @__PURE__ */ new Date(), this.isRetryable = i, Error.captureStackTrace && Error.captureStackTrace(this, Qe);
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
class Qn extends Qe {
  constructor(e, t, i, s) {
    super(e, { ...s, statusCode: t, endpoint: i }, !0), this.name = "NetworkError", this.statusCode = t, this.endpoint = i;
  }
}
class _l extends Qe {
  constructor(e, t, i, s, r) {
    super(e, { ...r, wsUrl: t, closeCode: i, closeReason: s }, !0), this.name = "WebSocketError", this.wsUrl = t, this.closeCode = i, this.closeReason = s;
  }
}
class Ki extends Qe {
  constructor(e, t, i, s, r) {
    super(e, { ...r, field: t, value: i, expectedType: s }, !1), this.name = "ValidationError", this.field = t, this.value = i, this.expectedType = s;
  }
}
class Tl extends Qe {
  constructor(e, t, i, s) {
    super(e, { ...s, configKey: t, configValue: i }, !1), this.name = "ConfigurationError", this.configKey = t, this.configValue = i;
  }
}
class Sl extends Qe {
  constructor(e, t, i, s) {
    super(e, { ...s, clientId: t, statusCode: i }, !1), this.name = "AuthenticationError", this.clientId = t, this.statusCode = i;
  }
}
class Xn extends Qe {
  constructor(e, t, i, s) {
    super(e, { ...s, retryAfter: t, limit: i }, !0), this.name = "RateLimitError", this.retryAfter = t, this.limit = i;
  }
}
class El extends Qe {
  constructor(e, t, i, s) {
    super(e, { ...s, storageType: t, operation: i }, !0), this.name = "StorageError", this.storageType = t, this.operation = i;
  }
}
class Al extends Qe {
  constructor(e, t, i, s) {
    super(e, { ...s, timeout: t, operation: i }, !0), this.name = "TimeoutError", this.timeout = t, this.operation = i;
  }
}
function ja(n) {
  return n instanceof Qe ? n.isRetryable : !!(n instanceof TypeError && n.message.includes("fetch"));
}
function iu(n) {
  return n instanceof Qe ? {
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
function su(n) {
  return n instanceof Qn ? n.statusCode === 404 ? "Service temporarily unavailable. Please try again later." : n.statusCode === 429 || n instanceof Xn ? "Too many requests. Please wait a moment and try again." : n.statusCode && n.statusCode >= 500 ? "Server error. Please try again in a few moments." : n.statusCode && (n.statusCode === 400 || n.statusCode === 401 || n.statusCode === 403) ? n.message : "Unable to connect to the server. Please check your internet connection." : n instanceof _l ? "Connection lost. Attempting to reconnect..." : n instanceof Sl ? "Access denied. Please check your configuration." : n instanceof Ki ? n.message : n instanceof Tl ? "Widget configuration error. Please contact support." : n instanceof Al ? "Request timed out. Please try again." : n instanceof El ? "Unable to save data. Please check your browser settings." : "Something went wrong. Please try again.";
}
class Ji {
  /**
   * Process and categorize errors using custom error classes
   */
  static handle(e, t) {
    const i = iu(e);
    let s;
    return e instanceof Qn ? s = "NETWORK_ERROR" : e instanceof _l ? s = "WEBSOCKET_ERROR" : e instanceof Ki ? s = "VALIDATION_ERROR" : e instanceof Tl ? s = "CONFIGURATION_ERROR" : e instanceof Sl ? s = "AUTHENTICATION_ERROR" : e instanceof Xn ? s = "RATE_LIMIT_ERROR" : e instanceof El ? s = "STORAGE_ERROR" : e instanceof Al ? s = "TIMEOUT_ERROR" : e instanceof Qe ? s = "WIDGET_ERROR" : s = "UNKNOWN_ERROR", {
      message: su(e),
      code: s,
      isUserFacing: !0,
      shouldRetry: ja(e),
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
    return e && typeof e == "object" && "shouldRetry" in e ? e.shouldRetry : ja(e);
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
const ru = "https://ai-gateway-service-staging-639717727892.us-east4.run.app";
class Lr {
  // Production URL configured via VITE_API_BASE_URL environment variable
  // Falls back to DEFAULT_GATEWAY_URL if not set
  /**
   * Resolve API and WebSocket URLs based on client ID and environment
   */
  static resolveUrls(e, t = {}) {
    const i = kl.validate(e);
    if (!i.isValid)
      throw new Error(`Invalid client ID for URL resolution: ${i.error}`);
    const s = i.sanitizedValue;
    return this.isDevelopmentEnvironment(t.environment) ? this.resolveDevelopmentUrls(s) : this.resolveProductionUrls(s);
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
    const t = ru, i = this.isLocalhostUrl(t) ? t : this.ensureHttps(t);
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
      const s = e.endsWith("/") ? "" : "/";
      return e + s + t.substring(1);
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
class au {
  constructor(e) {
    try {
      const t = window, i = t.AIChat || t.ChatWidget || {}, s = e ? this.parseElementAttributes(e) : {}, r = {
        ...rt,
        ...i,
        ...s
      };
      if ((i.apiUrl || i.wsUrl) && console.warn(
        `[Assistant Widget] Deprecation Warning: window.AIChat.apiUrl and window.AIChat.wsUrl are no longer supported.
URL configuration is now handled at build time via VITE_API_BASE_URL environment variable.
For local development: npm run build:local
For production: npm run build (uses default staging gateway)`
      ), !r.clientId)
        throw new Error("Widget configuration missing: clientId is required");
      const a = kl.validate(r.clientId);
      if (!a.isValid)
        throw new Error(`Invalid client ID: ${a.error}`);
      const o = Lr.resolveUrls(a.sanitizedValue);
      this.config = {
        ...r,
        clientId: a.sanitizedValue,
        ...o
      };
    } catch (t) {
      const i = Ji.handle(t, {
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
    for (const s of i) {
      const r = hl.attributeToProperty(s);
      if (!r) continue;
      const a = e.getAttribute(s);
      if (a)
        switch (r) {
          case "clientId":
          case "title":
          case "logoUrl":
          case "placeholder":
          case "accentColor":
          case "avatarEmoji":
            t[r] = a;
            break;
          case "theme":
            pl(a) && (t.theme = a);
            break;
          case "position":
            (a === "bottom-left" || a === "bottom-right") && (t.position = a);
            break;
          case "debug":
          case "autoInit":
            t[r] = a === "true" || a === "";
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
const Ci = /* @__PURE__ */ new Map();
let rs = !1;
function ou() {
  try {
    const n = "__storage_test__";
    return localStorage.setItem(n, n), localStorage.removeItem(n), !0;
  } catch {
    return !1;
  }
}
rs = !ou();
function lu(n) {
  try {
    return rs ? Ci.get(n) ?? null : localStorage.getItem(n);
  } catch {
    return Ci.get(n) ?? null;
  }
}
function cu(n, e) {
  try {
    return rs ? (Ci.set(n, e), !0) : (localStorage.setItem(n, e), !0);
  } catch {
    return Ci.set(n, e), rs = !0, !1;
  }
}
function du(n) {
  try {
    if (rs) {
      Ci.delete(n);
      return;
    }
    localStorage.removeItem(n);
  } catch {
    Ci.delete(n);
  }
}
const lt = class lt {
  /**
   * @param storageAdapter - Optional storage adapter for testing (defaults to localStorage via safe utils)
   */
  constructor(e) {
    this.storageAdapter = e, this.visitorId = this.getOrCreateVisitorId();
  }
  getOrCreateVisitorId() {
    var t;
    let e = this.getItem(lt.VISITOR_ID_KEY);
    return e || (e = this.generateVisitorId(), this.setItem(lt.VISITOR_ID_KEY, e), (t = window.AIChat) != null && t.debug && Z.log("ChatWidget", "Created new visitor", e)), e;
  }
  /**
   * Internal storage access methods that use adapter if available
   */
  getItem(e) {
    return this.storageAdapter ? this.storageAdapter.getItem(e) : lu(e);
  }
  setItem(e, t) {
    this.storageAdapter ? this.storageAdapter.setItem(e, t) : cu(e, t);
  }
  removeItem(e) {
    this.storageAdapter ? this.storageAdapter.removeItem(e) : du(e);
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
      lt.SESSION_HISTORY_KEY,
      JSON.stringify(i)
    );
  }
  getSessionHistory() {
    const e = this.getItem(lt.SESSION_HISTORY_KEY);
    return e ? JSON.parse(e) : [];
  }
  getLastActiveSession() {
    const t = this.getSessionHistory().filter(
      (i) => i.active && Date.now() - i.timestamp < ye.SESSION_TIMEOUT
    );
    return t.length > 0 ? t[t.length - 1].id : null;
  }
  /**
   * Mark a session as inactive when it ends
   */
  markSessionInactive(e) {
    const i = this.getSessionHistory().map(
      (s) => s.id === e ? { ...s, active: !1 } : s
    );
    this.setItem(
      lt.SESSION_HISTORY_KEY,
      JSON.stringify(i)
    );
  }
  /**
   * Clear visitor data for GDPR compliance
   */
  clearVisitorData() {
    this.removeItem(lt.VISITOR_ID_KEY), this.removeItem(lt.SESSION_HISTORY_KEY), this.visitorId = this.generateVisitorId();
  }
};
lt.VISITOR_ID_KEY = Wa.VISITOR_ID, lt.SESSION_HISTORY_KEY = Wa.SESSIONS;
let Or = lt;
class Vi {
  /**
   * Get API endpoint URL with base path resolved
   */
  static getApiUrl(e, t) {
    const { apiUrl: i } = Lr.resolveUrls(t.clientId, t.options);
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
    const { wsUrl: t } = Lr.resolveUrls(e.clientId, e.options), i = new URLSearchParams({
      session_id: e.sessionId
    });
    return e.visitorId && i.append("visitor_id", e.visitorId), `${t}?${i}`;
  }
}
var oe = /* @__PURE__ */ ((n) => (n.DISCONNECTED = "disconnected", n.CONNECTING = "connecting", n.CONNECTED = "connected", n.ERROR = "error", n))(oe || {});
class uu {
  constructor(e, t) {
    this.ws = null, this.sessionId = null, this.state = "disconnected", this.messageQueue = [], this.reconnectAttempts = 0, this.maxReconnectAttempts = ye.MAX_RECONNECT_ATTEMPTS, this.reconnectDelay = ye.RECONNECT_DELAY, this.heartbeatInterval = null, this.listeners = /* @__PURE__ */ new Map(), this.abortController = null, this.cleanupFunctions = [], this.visibilityChangeHandler = null, this.pendingPongTimeout = null, this.config = e, this.visitor = t, this.debugLogger = ia(e.getAll()), this.setupVisibilityChangeListener();
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
        const t = Vi.getWebSocketUrl({
          clientId: this.config.clientId,
          sessionId: e,
          visitorId: this.visitor.getVisitorId()
        });
        this.ws = new WebSocket(t), this.setupEventHandlers();
      } catch (t) {
        const i = Ji.handle(t, {
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
      var t, i, s, r, a, o, l, c, d;
      this.debugLogger.log("WebSocketManager", "Raw message received", {
        data: e.data,
        type: typeof e.data,
        length: ((t = e.data) == null ? void 0 : t.length) || 0,
        timestamp: Date.now(),
        wsReadyState: (i = this.ws) == null ? void 0 : i.readyState,
        sessionId: this.sessionId
      });
      try {
        const f = JSON.parse(e.data);
        this.debugLogger.log("WebSocketManager", "Parsed message", {
          message: f,
          messageType: f.type,
          content: (s = f.data) == null ? void 0 : s.content,
          hasContent: !!((r = f.data) != null && r.content),
          contentLength: ((o = (a = f.data) == null ? void 0 : a.content) == null ? void 0 : o.length) || 0,
          hasError: f.type === "error",
          metadata: (l = f.data) == null ? void 0 : l.metadata
        }), this.debugLogger.log("WebSocketManager", "Emitting to listeners", {
          listenerCount: ((c = this.listeners.get("message")) == null ? void 0 : c.size) || 0,
          hasMessageListeners: this.listeners.has("message"),
          allListenerTypes: Array.from(this.listeners.keys())
        }), this.emit("message", f), this.debugLogger.log("WebSocketManager", "Message emission completed successfully");
      } catch (f) {
        this.debugLogger.error("WebSocketManager", "Parse error", {
          error: f instanceof Error ? f.message : String(f),
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
    }, ye.VISIBILITY_PING_TIMEOUT);
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
    var s, r, a;
    const t = Tt().getCurrent();
    this.debugLogger.log("WebSocketManager", "send() called", {
      correlationId: t,
      message: e,
      messageLength: (e == null ? void 0 : e.length) || 0,
      messageType: typeof e,
      wsState: this.state,
      wsReadyState: (s = this.ws) == null ? void 0 : s.readyState,
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
    }), this.state === "connected" && ((r = this.ws) == null ? void 0 : r.readyState) === WebSocket.OPEN)
      this.debugLogger.log("WebSocketManager", "Sending via WebSocket immediately", { correlationId: t }), this.ws.send(i);
    else {
      if (this.debugLogger.log("WebSocketManager", "WebSocket not ready, queuing message", {
        correlationId: t,
        state: this.state,
        readyState: (a = this.ws) == null ? void 0 : a.readyState,
        queueLength: this.messageQueue.length
      }), this.messageQueue.length >= gn.MAX_QUEUE_SIZE) {
        this.debugLogger.warn("WebSocketManager", "Message queue full", {
          queueSize: this.messageQueue.length,
          maxSize: gn.MAX_QUEUE_SIZE
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
    const e = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), t = e ? ye.MOBILE_HEARTBEAT_INTERVAL : ye.HEARTBEAT_INTERVAL;
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
    (i = this.listeners.get(e)) == null || i.forEach((s) => s(t));
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
var fu = /* @__PURE__ */ J('<header class="chat-header svelte-g5m62x"><div class="header-content svelte-g5m62x"><div role="status"></div> <h2 class="header-title svelte-g5m62x"> </h2></div> <button class="close-button svelte-g5m62x" aria-label="Close chat" type="button"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true" class="svelte-g5m62x"><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor" class="svelte-g5m62x"></path></svg></button></header>');
const gu = {
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
function Il(n, e) {
  Yt(e, !0), an(n, gu);
  let t = K(e, "onclose", 7), i = K(e, "connectionState", 23, () => oe.DISCONNECTED), s = K(e, "connectionFailed", 7, !1), r = K(e, "ui", 7, Ii), a = K(e, "config", 7, Mt);
  const o = /* @__PURE__ */ we(() => {
    if (s()) return "var(--widget-error)";
    switch (i()) {
      case oe.CONNECTED:
        return "var(--widget-success)";
      case oe.CONNECTING:
        return "var(--widget-warning, #ca8a04)";
      case /* Darker yellow for WCAG AA */
      oe.ERROR:
        return "var(--widget-error)";
      default:
        return "var(--widget-text-secondary)";
    }
  }), l = /* @__PURE__ */ we(() => {
    if (s()) return "Connection lost";
    switch (i()) {
      case oe.CONNECTED:
        return "Connected";
      case oe.CONNECTING:
        return "Connecting";
      case oe.ERROR:
        return "Connection error";
      case oe.DISCONNECTED:
        return "Disconnected";
      default:
        return "";
    }
  }), c = /* @__PURE__ */ we(() => i() === oe.CONNECTING ? "pulse-slow" : i() === oe.ERROR ? "blink-slow" : "");
  function d() {
    var M;
    r().close(), (M = t()) == null || M();
  }
  var f = {
    get onclose() {
      return t();
    },
    set onclose(M) {
      t(M), G();
    },
    get connectionState() {
      return i();
    },
    set connectionState(M = oe.DISCONNECTED) {
      i(M), G();
    },
    get connectionFailed() {
      return s();
    },
    set connectionFailed(M = !1) {
      s(M), G();
    },
    get ui() {
      return r();
    },
    set ui(M = Ii) {
      r(M), G();
    },
    get config() {
      return a();
    },
    set config(M = Mt) {
      a(M), G();
    }
  }, h = fu(), p = se(h), k = se(p), v = ce(k, 2), m = se(v, !0);
  ie(v), ie(p);
  var T = ce(p, 2);
  return T.__click = d, ie(h), it(() => {
    Jr(k, 1, `status-dot ${y(c) ?? ""}`, "svelte-g5m62x"), dl(k, `--status-color: ${y(o) ?? ""}`), ft(k, "aria-label", y(l)), ft(k, "title", y(l)), Ai(m, a().title);
  }), j(n, h), Qt(f);
}
gs(["click"]);
on(
  Il,
  {
    onclose: {},
    connectionState: {},
    connectionFailed: {},
    ui: {},
    config: {}
  },
  [],
  [],
  !0
);
function sa() {
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
let $n = sa();
function Cl(n) {
  $n = n;
}
const Ml = /[&<>"']/, hu = new RegExp(Ml.source, "g"), Rl = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, pu = new RegExp(Rl.source, "g"), mu = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, Va = (n) => mu[n];
function Ve(n, e) {
  if (e) {
    if (Ml.test(n))
      return n.replace(hu, Va);
  } else if (Rl.test(n))
    return n.replace(pu, Va);
  return n;
}
const vu = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function bu(n) {
  return n.replace(vu, (e, t) => (t = t.toLowerCase(), t === "colon" ? ":" : t.charAt(0) === "#" ? t.charAt(1) === "x" ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""));
}
const wu = /(^|[^\[])\^/g;
function Y(n, e) {
  let t = typeof n == "string" ? n : n.source;
  e = e || "";
  const i = {
    replace: (s, r) => {
      let a = typeof r == "string" ? r : r.source;
      return a = a.replace(wu, "$1"), t = t.replace(s, a), i;
    },
    getRegex: () => new RegExp(t, e)
  };
  return i;
}
function Ga(n) {
  try {
    n = encodeURI(n).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return n;
}
const es = { exec: () => null };
function Ya(n, e) {
  const t = n.replace(/\|/g, (r, a, o) => {
    let l = !1, c = a;
    for (; --c >= 0 && o[c] === "\\"; )
      l = !l;
    return l ? "|" : " |";
  }), i = t.split(/ \|/);
  let s = 0;
  if (i[0].trim() || i.shift(), i.length > 0 && !i[i.length - 1].trim() && i.pop(), e)
    if (i.length > e)
      i.splice(e);
    else
      for (; i.length < e; )
        i.push("");
  for (; s < i.length; s++)
    i[s] = i[s].trim().replace(/\\\|/g, "|");
  return i;
}
function Es(n, e, t) {
  const i = n.length;
  if (i === 0)
    return "";
  let s = 0;
  for (; s < i && n.charAt(i - s - 1) === e; )
    s++;
  return n.slice(0, i - s);
}
function yu(n, e) {
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
function Qa(n, e, t, i) {
  const s = e.href, r = e.title ? Ve(e.title) : null, a = n[1].replace(/\\([\[\]])/g, "$1");
  if (n[0].charAt(0) !== "!") {
    i.state.inLink = !0;
    const o = {
      type: "link",
      raw: t,
      href: s,
      title: r,
      text: a,
      tokens: i.inlineTokens(a)
    };
    return i.state.inLink = !1, o;
  }
  return {
    type: "image",
    raw: t,
    href: s,
    title: r,
    text: Ve(a)
  };
}
function xu(n, e) {
  const t = n.match(/^(\s+)(?:```)/);
  if (t === null)
    return e;
  const i = t[1];
  return e.split(`
`).map((s) => {
    const r = s.match(/^\s+/);
    if (r === null)
      return s;
    const [a] = r;
    return a.length >= i.length ? s.slice(i.length) : s;
  }).join(`
`);
}
class Fs {
  // set by the lexer
  constructor(e) {
    D(this, "options");
    D(this, "rules");
    // set by the lexer
    D(this, "lexer");
    this.options = e || $n;
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
        text: this.options.pedantic ? i : Es(i, `
`)
      };
    }
  }
  fences(e) {
    const t = this.rules.block.fences.exec(e);
    if (t) {
      const i = t[0], s = xu(i, t[3] || "");
      return {
        type: "code",
        raw: i,
        lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
        text: s
      };
    }
  }
  heading(e) {
    const t = this.rules.block.heading.exec(e);
    if (t) {
      let i = t[2].trim();
      if (/#$/.test(i)) {
        const s = Es(i, "#");
        (this.options.pedantic || !s || / $/.test(s)) && (i = s.trim());
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
      i = Es(i.replace(/^ *>[ \t]?/gm, ""), `
`);
      const s = this.lexer.state.top;
      this.lexer.state.top = !0;
      const r = this.lexer.blockTokens(i);
      return this.lexer.state.top = s, {
        type: "blockquote",
        raw: t[0],
        tokens: r,
        text: i
      };
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let i = t[1].trim();
      const s = i.length > 1, r = {
        type: "list",
        raw: "",
        ordered: s,
        start: s ? +i.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      i = s ? `\\d{1,9}\\${i.slice(-1)}` : `\\${i}`, this.options.pedantic && (i = s ? i : "[*+-]");
      const a = new RegExp(`^( {0,3}${i})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let o = "", l = "", c = !1;
      for (; e; ) {
        let d = !1;
        if (!(t = a.exec(e)) || this.rules.block.hr.test(e))
          break;
        o = t[0], e = e.substring(o.length);
        let f = t[2].split(`
`, 1)[0].replace(/^\t+/, (T) => " ".repeat(3 * T.length)), h = e.split(`
`, 1)[0], p = 0;
        this.options.pedantic ? (p = 2, l = f.trimStart()) : (p = t[2].search(/[^ ]/), p = p > 4 ? 1 : p, l = f.slice(p), p += t[1].length);
        let k = !1;
        if (!f && /^ *$/.test(h) && (o += h + `
`, e = e.substring(h.length + 1), d = !0), !d) {
          const T = new RegExp(`^ {0,${Math.min(3, p - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), M = new RegExp(`^ {0,${Math.min(3, p - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), x = new RegExp(`^ {0,${Math.min(3, p - 1)}}(?:\`\`\`|~~~)`), _ = new RegExp(`^ {0,${Math.min(3, p - 1)}}#`);
          for (; e; ) {
            const R = e.split(`
`, 1)[0];
            if (h = R, this.options.pedantic && (h = h.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), x.test(h) || _.test(h) || T.test(h) || M.test(e))
              break;
            if (h.search(/[^ ]/) >= p || !h.trim())
              l += `
` + h.slice(p);
            else {
              if (k || f.search(/[^ ]/) >= 4 || x.test(f) || _.test(f) || M.test(f))
                break;
              l += `
` + h;
            }
            !k && !h.trim() && (k = !0), o += R + `
`, e = e.substring(R.length + 1), f = h.slice(p);
          }
        }
        r.loose || (c ? r.loose = !0 : /\n *\n *$/.test(o) && (c = !0));
        let v = null, m;
        this.options.gfm && (v = /^\[[ xX]\] /.exec(l), v && (m = v[0] !== "[ ] ", l = l.replace(/^\[[ xX]\] +/, ""))), r.items.push({
          type: "list_item",
          raw: o,
          task: !!v,
          checked: m,
          loose: !1,
          text: l,
          tokens: []
        }), r.raw += o;
      }
      r.items[r.items.length - 1].raw = o.trimEnd(), r.items[r.items.length - 1].text = l.trimEnd(), r.raw = r.raw.trimEnd();
      for (let d = 0; d < r.items.length; d++)
        if (this.lexer.state.top = !1, r.items[d].tokens = this.lexer.blockTokens(r.items[d].text, []), !r.loose) {
          const f = r.items[d].tokens.filter((p) => p.type === "space"), h = f.length > 0 && f.some((p) => /\n.*\n/.test(p.raw));
          r.loose = h;
        }
      if (r.loose)
        for (let d = 0; d < r.items.length; d++)
          r.items[d].loose = !0;
      return r;
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
      const i = t[1].toLowerCase().replace(/\s+/g, " "), s = t[2] ? t[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", r = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
      return {
        type: "def",
        tag: i,
        raw: t[0],
        href: s,
        title: r
      };
    }
  }
  table(e) {
    const t = this.rules.block.table.exec(e);
    if (!t || !/[:|]/.test(t[2]))
      return;
    const i = Ya(t[1]), s = t[2].replace(/^\||\| *$/g, "").split("|"), r = t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split(`
`) : [], a = {
      type: "table",
      raw: t[0],
      header: [],
      align: [],
      rows: []
    };
    if (i.length === s.length) {
      for (const o of s)
        /^ *-+: *$/.test(o) ? a.align.push("right") : /^ *:-+: *$/.test(o) ? a.align.push("center") : /^ *:-+ *$/.test(o) ? a.align.push("left") : a.align.push(null);
      for (const o of i)
        a.header.push({
          text: o,
          tokens: this.lexer.inline(o)
        });
      for (const o of r)
        a.rows.push(Ya(o, a.header.length).map((l) => ({
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
        text: Ve(t[1])
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
        const a = Es(i.slice(0, -1), "\\");
        if ((i.length - a.length) % 2 === 0)
          return;
      } else {
        const a = yu(t[2], "()");
        if (a > -1) {
          const l = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + a;
          t[2] = t[2].substring(0, a), t[0] = t[0].substring(0, l).trim(), t[3] = "";
        }
      }
      let s = t[2], r = "";
      if (this.options.pedantic) {
        const a = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);
        a && (s = a[1], r = a[3]);
      } else
        r = t[3] ? t[3].slice(1, -1) : "";
      return s = s.trim(), /^</.test(s) && (this.options.pedantic && !/>$/.test(i) ? s = s.slice(1) : s = s.slice(1, -1)), Qa(t, {
        href: s && s.replace(this.rules.inline.anyPunctuation, "$1"),
        title: r && r.replace(this.rules.inline.anyPunctuation, "$1")
      }, t[0], this.lexer);
    }
  }
  reflink(e, t) {
    let i;
    if ((i = this.rules.inline.reflink.exec(e)) || (i = this.rules.inline.nolink.exec(e))) {
      const s = (i[2] || i[1]).replace(/\s+/g, " "), r = t[s.toLowerCase()];
      if (!r) {
        const a = i[0].charAt(0);
        return {
          type: "text",
          raw: a,
          text: a
        };
      }
      return Qa(i, r, i[0], this.lexer);
    }
  }
  emStrong(e, t, i = "") {
    let s = this.rules.inline.emStrongLDelim.exec(e);
    if (!s || s[3] && i.match(/[\p{L}\p{N}]/u))
      return;
    if (!(s[1] || s[2] || "") || !i || this.rules.inline.punctuation.exec(i)) {
      const a = [...s[0]].length - 1;
      let o, l, c = a, d = 0;
      const f = s[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (f.lastIndex = 0, t = t.slice(-1 * e.length + a); (s = f.exec(t)) != null; ) {
        if (o = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !o)
          continue;
        if (l = [...o].length, s[3] || s[4]) {
          c += l;
          continue;
        } else if ((s[5] || s[6]) && a % 3 && !((a + l) % 3)) {
          d += l;
          continue;
        }
        if (c -= l, c > 0)
          continue;
        l = Math.min(l, l + c + d);
        const h = [...s[0]][0].length, p = e.slice(0, a + s.index + h + l);
        if (Math.min(a, l) % 2) {
          const v = p.slice(1, -1);
          return {
            type: "em",
            raw: p,
            text: v,
            tokens: this.lexer.inlineTokens(v)
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
      const s = /[^ ]/.test(i), r = /^ /.test(i) && / $/.test(i);
      return s && r && (i = i.substring(1, i.length - 1)), i = Ve(i, !0), {
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
      let i, s;
      return t[2] === "@" ? (i = Ve(t[1]), s = "mailto:" + i) : (i = Ve(t[1]), s = i), {
        type: "link",
        raw: t[0],
        text: i,
        href: s,
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
      let s, r;
      if (t[2] === "@")
        s = Ve(t[0]), r = "mailto:" + s;
      else {
        let a;
        do
          a = t[0], t[0] = ((i = this.rules.inline._backpedal.exec(t[0])) == null ? void 0 : i[0]) ?? "";
        while (a !== t[0]);
        s = Ve(t[0]), t[1] === "www." ? r = "http://" + t[0] : r = t[0];
      }
      return {
        type: "link",
        raw: t[0],
        text: s,
        href: r,
        tokens: [
          {
            type: "text",
            raw: s,
            text: s
          }
        ]
      };
    }
  }
  inlineText(e) {
    const t = this.rules.inline.text.exec(e);
    if (t) {
      let i;
      return this.lexer.state.inRawBlock ? i = t[0] : i = Ve(t[0]), {
        type: "text",
        raw: t[0],
        text: i
      };
    }
  }
}
const ku = /^(?: *(?:\n|$))+/, _u = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, Tu = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, hs = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Su = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Ll = /(?:[*+-]|\d{1,9}[.)])/, Ol = Y(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, Ll).replace(/blockCode/g, / {4}/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), ra = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Eu = /^[^\n]+/, aa = /(?!\s*\])(?:\\.|[^\[\]\\])+/, Au = Y(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", aa).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Iu = Y(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Ll).getRegex(), er = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", oa = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Cu = Y("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", oa).replace("tag", er).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Dl = Y(ra).replace("hr", hs).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", er).getRegex(), Mu = Y(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Dl).getRegex(), la = {
  blockquote: Mu,
  code: _u,
  def: Au,
  fences: Tu,
  heading: Su,
  hr: hs,
  html: Cu,
  lheading: Ol,
  list: Iu,
  newline: ku,
  paragraph: Dl,
  table: es,
  text: Eu
}, Xa = Y("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", hs).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", er).getRegex(), Ru = {
  ...la,
  table: Xa,
  paragraph: Y(ra).replace("hr", hs).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Xa).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", er).getRegex()
}, Lu = {
  ...la,
  html: Y(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", oa).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: es,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: Y(ra).replace("hr", hs).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Ol).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, Nl = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Ou = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Pl = /^( {2,}|\\)\n(?!\s*$)/, Du = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, ps = "\\p{P}\\p{S}", Nu = Y(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, ps).getRegex(), Pu = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, $u = Y(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, ps).getRegex(), zu = Y("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, ps).getRegex(), qu = Y("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, ps).getRegex(), Uu = Y(/\\([punct])/, "gu").replace(/punct/g, ps).getRegex(), Fu = Y(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Hu = Y(oa).replace("(?:-->|$)", "-->").getRegex(), Wu = Y("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Hu).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Hs = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, Bu = Y(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", Hs).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), $l = Y(/^!?\[(label)\]\[(ref)\]/).replace("label", Hs).replace("ref", aa).getRegex(), zl = Y(/^!?\[(ref)\](?:\[\])?/).replace("ref", aa).getRegex(), ju = Y("reflink|nolink(?!\\()", "g").replace("reflink", $l).replace("nolink", zl).getRegex(), ca = {
  _backpedal: es,
  // only used for GFM url
  anyPunctuation: Uu,
  autolink: Fu,
  blockSkip: Pu,
  br: Pl,
  code: Ou,
  del: es,
  emStrongLDelim: $u,
  emStrongRDelimAst: zu,
  emStrongRDelimUnd: qu,
  escape: Nl,
  link: Bu,
  nolink: zl,
  punctuation: Nu,
  reflink: $l,
  reflinkSearch: ju,
  tag: Wu,
  text: Du,
  url: es
}, Vu = {
  ...ca,
  link: Y(/^!?\[(label)\]\((.*?)\)/).replace("label", Hs).getRegex(),
  reflink: Y(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Hs).getRegex()
}, Dr = {
  ...ca,
  escape: Y(Nl).replace("])", "~|])").getRegex(),
  url: Y(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, Gu = {
  ...Dr,
  br: Y(Pl).replace("{2,}", "*").getRegex(),
  text: Y(Dr.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, As = {
  normal: la,
  gfm: Ru,
  pedantic: Lu
}, $i = {
  normal: ca,
  gfm: Dr,
  breaks: Gu,
  pedantic: Vu
};
class St {
  constructor(e) {
    D(this, "tokens");
    D(this, "options");
    D(this, "state");
    D(this, "tokenizer");
    D(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || $n, this.options.tokenizer = this.options.tokenizer || new Fs(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const t = {
      block: As.normal,
      inline: $i.normal
    };
    this.options.pedantic ? (t.block = As.pedantic, t.inline = $i.pedantic) : this.options.gfm && (t.block = As.gfm, this.options.breaks ? t.inline = $i.breaks : t.inline = $i.gfm), this.tokenizer.rules = t;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: As,
      inline: $i
    };
  }
  /**
   * Static Lex Method
   */
  static lex(e, t) {
    return new St(t).lex(e);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(e, t) {
    return new St(t).inlineTokens(e);
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
    let i, s, r, a;
    for (; e; )
      if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((o) => (i = o.call({ lexer: this }, e, t)) ? (e = e.substring(i.raw.length), t.push(i), !0) : !1))) {
        if (i = this.tokenizer.space(e)) {
          e = e.substring(i.raw.length), i.raw.length === 1 && t.length > 0 ? t[t.length - 1].raw += `
` : t.push(i);
          continue;
        }
        if (i = this.tokenizer.code(e)) {
          e = e.substring(i.raw.length), s = t[t.length - 1], s && (s.type === "paragraph" || s.type === "text") ? (s.raw += `
` + i.raw, s.text += `
` + i.text, this.inlineQueue[this.inlineQueue.length - 1].src = s.text) : t.push(i);
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
          e = e.substring(i.raw.length), s = t[t.length - 1], s && (s.type === "paragraph" || s.type === "text") ? (s.raw += `
` + i.raw, s.text += `
` + i.raw, this.inlineQueue[this.inlineQueue.length - 1].src = s.text) : this.tokens.links[i.tag] || (this.tokens.links[i.tag] = {
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
        if (r = e, this.options.extensions && this.options.extensions.startBlock) {
          let o = 1 / 0;
          const l = e.slice(1);
          let c;
          this.options.extensions.startBlock.forEach((d) => {
            c = d.call({ lexer: this }, l), typeof c == "number" && c >= 0 && (o = Math.min(o, c));
          }), o < 1 / 0 && o >= 0 && (r = e.substring(0, o + 1));
        }
        if (this.state.top && (i = this.tokenizer.paragraph(r))) {
          s = t[t.length - 1], a && s.type === "paragraph" ? (s.raw += `
` + i.raw, s.text += `
` + i.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = s.text) : t.push(i), a = r.length !== e.length, e = e.substring(i.raw.length);
          continue;
        }
        if (i = this.tokenizer.text(e)) {
          e = e.substring(i.raw.length), s = t[t.length - 1], s && s.type === "text" ? (s.raw += `
` + i.raw, s.text += `
` + i.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = s.text) : t.push(i);
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
    let i, s, r, a = e, o, l, c;
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
          e = e.substring(i.raw.length), s = t[t.length - 1], s && i.type === "text" && s.type === "text" ? (s.raw += i.raw, s.text += i.text) : t.push(i);
          continue;
        }
        if (i = this.tokenizer.link(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.reflink(e, this.tokens.links)) {
          e = e.substring(i.raw.length), s = t[t.length - 1], s && i.type === "text" && s.type === "text" ? (s.raw += i.raw, s.text += i.text) : t.push(i);
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
        if (r = e, this.options.extensions && this.options.extensions.startInline) {
          let d = 1 / 0;
          const f = e.slice(1);
          let h;
          this.options.extensions.startInline.forEach((p) => {
            h = p.call({ lexer: this }, f), typeof h == "number" && h >= 0 && (d = Math.min(d, h));
          }), d < 1 / 0 && d >= 0 && (r = e.substring(0, d + 1));
        }
        if (i = this.tokenizer.inlineText(r)) {
          e = e.substring(i.raw.length), i.raw.slice(-1) !== "_" && (c = i.raw.slice(-1)), l = !0, s = t[t.length - 1], s && s.type === "text" ? (s.raw += i.raw, s.text += i.text) : t.push(i);
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
class Ws {
  constructor(e) {
    D(this, "options");
    this.options = e || $n;
  }
  code(e, t, i) {
    var r;
    const s = (r = (t || "").match(/^\S*/)) == null ? void 0 : r[0];
    return e = e.replace(/\n$/, "") + `
`, s ? '<pre><code class="language-' + Ve(s) + '">' + (i ? e : Ve(e, !0)) + `</code></pre>
` : "<pre><code>" + (i ? e : Ve(e, !0)) + `</code></pre>
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
    const s = t ? "ol" : "ul", r = t && i !== 1 ? ' start="' + i + '"' : "";
    return "<" + s + r + `>
` + e + "</" + s + `>
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
    const s = Ga(e);
    if (s === null)
      return i;
    e = s;
    let r = '<a href="' + e + '"';
    return t && (r += ' title="' + t + '"'), r += ">" + i + "</a>", r;
  }
  image(e, t, i) {
    const s = Ga(e);
    if (s === null)
      return i;
    e = s;
    let r = `<img src="${e}" alt="${i}"`;
    return t && (r += ` title="${t}"`), r += ">", r;
  }
  text(e) {
    return e;
  }
}
class da {
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
class Et {
  constructor(e) {
    D(this, "options");
    D(this, "renderer");
    D(this, "textRenderer");
    this.options = e || $n, this.options.renderer = this.options.renderer || new Ws(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new da();
  }
  /**
   * Static Parse Method
   */
  static parse(e, t) {
    return new Et(t).parse(e);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(e, t) {
    return new Et(t).parseInline(e);
  }
  /**
   * Parse Loop
   */
  parse(e, t = !0) {
    let i = "";
    for (let s = 0; s < e.length; s++) {
      const r = e[s];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[r.type]) {
        const a = r, o = this.options.extensions.renderers[a.type].call({ parser: this }, a);
        if (o !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(a.type)) {
          i += o || "";
          continue;
        }
      }
      switch (r.type) {
        case "space":
          continue;
        case "hr": {
          i += this.renderer.hr();
          continue;
        }
        case "heading": {
          const a = r;
          i += this.renderer.heading(this.parseInline(a.tokens), a.depth, bu(this.parseInline(a.tokens, this.textRenderer)));
          continue;
        }
        case "code": {
          const a = r;
          i += this.renderer.code(a.text, a.lang, !!a.escaped);
          continue;
        }
        case "table": {
          const a = r;
          let o = "", l = "";
          for (let d = 0; d < a.header.length; d++)
            l += this.renderer.tablecell(this.parseInline(a.header[d].tokens), { header: !0, align: a.align[d] });
          o += this.renderer.tablerow(l);
          let c = "";
          for (let d = 0; d < a.rows.length; d++) {
            const f = a.rows[d];
            l = "";
            for (let h = 0; h < f.length; h++)
              l += this.renderer.tablecell(this.parseInline(f[h].tokens), { header: !1, align: a.align[h] });
            c += this.renderer.tablerow(l);
          }
          i += this.renderer.table(o, c);
          continue;
        }
        case "blockquote": {
          const a = r, o = this.parse(a.tokens);
          i += this.renderer.blockquote(o);
          continue;
        }
        case "list": {
          const a = r, o = a.ordered, l = a.start, c = a.loose;
          let d = "";
          for (let f = 0; f < a.items.length; f++) {
            const h = a.items[f], p = h.checked, k = h.task;
            let v = "";
            if (h.task) {
              const m = this.renderer.checkbox(!!p);
              c ? h.tokens.length > 0 && h.tokens[0].type === "paragraph" ? (h.tokens[0].text = m + " " + h.tokens[0].text, h.tokens[0].tokens && h.tokens[0].tokens.length > 0 && h.tokens[0].tokens[0].type === "text" && (h.tokens[0].tokens[0].text = m + " " + h.tokens[0].tokens[0].text)) : h.tokens.unshift({
                type: "text",
                text: m + " "
              }) : v += m + " ";
            }
            v += this.parse(h.tokens, c), d += this.renderer.listitem(v, k, !!p);
          }
          i += this.renderer.list(d, o, l);
          continue;
        }
        case "html": {
          const a = r;
          i += this.renderer.html(a.text, a.block);
          continue;
        }
        case "paragraph": {
          const a = r;
          i += this.renderer.paragraph(this.parseInline(a.tokens));
          continue;
        }
        case "text": {
          let a = r, o = a.tokens ? this.parseInline(a.tokens) : a.text;
          for (; s + 1 < e.length && e[s + 1].type === "text"; )
            a = e[++s], o += `
` + (a.tokens ? this.parseInline(a.tokens) : a.text);
          i += t ? this.renderer.paragraph(o) : o;
          continue;
        }
        default: {
          const a = 'Token with "' + r.type + '" type was not found.';
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
    for (let s = 0; s < e.length; s++) {
      const r = e[s];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[r.type]) {
        const a = this.options.extensions.renderers[r.type].call({ parser: this }, r);
        if (a !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(r.type)) {
          i += a || "";
          continue;
        }
      }
      switch (r.type) {
        case "escape": {
          const a = r;
          i += t.text(a.text);
          break;
        }
        case "html": {
          const a = r;
          i += t.html(a.text);
          break;
        }
        case "link": {
          const a = r;
          i += t.link(a.href, a.title, this.parseInline(a.tokens, t));
          break;
        }
        case "image": {
          const a = r;
          i += t.image(a.href, a.title, a.text);
          break;
        }
        case "strong": {
          const a = r;
          i += t.strong(this.parseInline(a.tokens, t));
          break;
        }
        case "em": {
          const a = r;
          i += t.em(this.parseInline(a.tokens, t));
          break;
        }
        case "codespan": {
          const a = r;
          i += t.codespan(a.text);
          break;
        }
        case "br": {
          i += t.br();
          break;
        }
        case "del": {
          const a = r;
          i += t.del(this.parseInline(a.tokens, t));
          break;
        }
        case "text": {
          const a = r;
          i += t.text(a.text);
          break;
        }
        default: {
          const a = 'Token with "' + r.type + '" type was not found.';
          if (this.options.silent)
            return console.error(a), "";
          throw new Error(a);
        }
      }
    }
    return i;
  }
}
class ts {
  constructor(e) {
    D(this, "options");
    this.options = e || $n;
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
D(ts, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
]));
var Rn, Nr, ql;
class Yu {
  constructor(...e) {
    I(this, Rn);
    D(this, "defaults", sa());
    D(this, "options", this.setOptions);
    D(this, "parse", X(this, Rn, Nr).call(this, St.lex, Et.parse));
    D(this, "parseInline", X(this, Rn, Nr).call(this, St.lexInline, Et.parseInline));
    D(this, "Parser", Et);
    D(this, "Renderer", Ws);
    D(this, "TextRenderer", da);
    D(this, "Lexer", St);
    D(this, "Tokenizer", Fs);
    D(this, "Hooks", ts);
    this.use(...e);
  }
  /**
   * Run callback for every token
   */
  walkTokens(e, t) {
    var s, r;
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
          (r = (s = this.defaults.extensions) == null ? void 0 : s.childTokens) != null && r[o.type] ? this.defaults.extensions.childTokens[o.type].forEach((l) => {
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
      const s = { ...i };
      if (s.async = this.defaults.async || s.async || !1, i.extensions && (i.extensions.forEach((r) => {
        if (!r.name)
          throw new Error("extension name required");
        if ("renderer" in r) {
          const a = t.renderers[r.name];
          a ? t.renderers[r.name] = function(...o) {
            let l = r.renderer.apply(this, o);
            return l === !1 && (l = a.apply(this, o)), l;
          } : t.renderers[r.name] = r.renderer;
        }
        if ("tokenizer" in r) {
          if (!r.level || r.level !== "block" && r.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          const a = t[r.level];
          a ? a.unshift(r.tokenizer) : t[r.level] = [r.tokenizer], r.start && (r.level === "block" ? t.startBlock ? t.startBlock.push(r.start) : t.startBlock = [r.start] : r.level === "inline" && (t.startInline ? t.startInline.push(r.start) : t.startInline = [r.start]));
        }
        "childTokens" in r && r.childTokens && (t.childTokens[r.name] = r.childTokens);
      }), s.extensions = t), i.renderer) {
        const r = this.defaults.renderer || new Ws(this.defaults);
        for (const a in i.renderer) {
          if (!(a in r))
            throw new Error(`renderer '${a}' does not exist`);
          if (a === "options")
            continue;
          const o = a, l = i.renderer[o], c = r[o];
          r[o] = (...d) => {
            let f = l.apply(r, d);
            return f === !1 && (f = c.apply(r, d)), f || "";
          };
        }
        s.renderer = r;
      }
      if (i.tokenizer) {
        const r = this.defaults.tokenizer || new Fs(this.defaults);
        for (const a in i.tokenizer) {
          if (!(a in r))
            throw new Error(`tokenizer '${a}' does not exist`);
          if (["options", "rules", "lexer"].includes(a))
            continue;
          const o = a, l = i.tokenizer[o], c = r[o];
          r[o] = (...d) => {
            let f = l.apply(r, d);
            return f === !1 && (f = c.apply(r, d)), f;
          };
        }
        s.tokenizer = r;
      }
      if (i.hooks) {
        const r = this.defaults.hooks || new ts();
        for (const a in i.hooks) {
          if (!(a in r))
            throw new Error(`hook '${a}' does not exist`);
          if (a === "options")
            continue;
          const o = a, l = i.hooks[o], c = r[o];
          ts.passThroughHooks.has(a) ? r[o] = (d) => {
            if (this.defaults.async)
              return Promise.resolve(l.call(r, d)).then((h) => c.call(r, h));
            const f = l.call(r, d);
            return c.call(r, f);
          } : r[o] = (...d) => {
            let f = l.apply(r, d);
            return f === !1 && (f = c.apply(r, d)), f;
          };
        }
        s.hooks = r;
      }
      if (i.walkTokens) {
        const r = this.defaults.walkTokens, a = i.walkTokens;
        s.walkTokens = function(o) {
          let l = [];
          return l.push(a.call(this, o)), r && (l = l.concat(r.call(this, o))), l;
        };
      }
      this.defaults = { ...this.defaults, ...s };
    }), this;
  }
  setOptions(e) {
    return this.defaults = { ...this.defaults, ...e }, this;
  }
  lexer(e, t) {
    return St.lex(e, t ?? this.defaults);
  }
  parser(e, t) {
    return Et.parse(e, t ?? this.defaults);
  }
}
Rn = new WeakSet(), Nr = function(e, t) {
  return (i, s) => {
    const r = { ...s }, a = { ...this.defaults, ...r };
    this.defaults.async === !0 && r.async === !1 && (a.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), a.async = !0);
    const o = X(this, Rn, ql).call(this, !!a.silent, !!a.async);
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
}, ql = function(e, t) {
  return (i) => {
    if (i.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
      const s = "<p>An error occurred:</p><pre>" + Ve(i.message + "", !0) + "</pre>";
      return t ? Promise.resolve(s) : s;
    }
    if (t)
      return Promise.reject(i);
    throw i;
  };
};
const Mn = new Yu();
function V(n, e) {
  return Mn.parse(n, e);
}
V.options = V.setOptions = function(n) {
  return Mn.setOptions(n), V.defaults = Mn.defaults, Cl(V.defaults), V;
};
V.getDefaults = sa;
V.defaults = $n;
V.use = function(...n) {
  return Mn.use(...n), V.defaults = Mn.defaults, Cl(V.defaults), V;
};
V.walkTokens = function(n, e) {
  return Mn.walkTokens(n, e);
};
V.parseInline = Mn.parseInline;
V.Parser = Et;
V.parser = Et.parse;
V.Renderer = Ws;
V.TextRenderer = da;
V.Lexer = St;
V.lexer = St.lex;
V.Tokenizer = Fs;
V.Hooks = ts;
V.parse = V;
V.options;
V.setOptions;
V.use;
V.walkTokens;
V.parseInline;
Et.parse;
St.lex;
/*! @license DOMPurify 3.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.1/LICENSE */
const {
  entries: Ul,
  setPrototypeOf: Za,
  isFrozen: Qu,
  getPrototypeOf: Xu,
  getOwnPropertyDescriptor: Zu
} = Object;
let {
  freeze: De,
  seal: st,
  create: Pr
} = Object, {
  apply: $r,
  construct: zr
} = typeof Reflect < "u" && Reflect;
De || (De = function(e) {
  return e;
});
st || (st = function(e) {
  return e;
});
$r || ($r = function(e, t) {
  for (var i = arguments.length, s = new Array(i > 2 ? i - 2 : 0), r = 2; r < i; r++)
    s[r - 2] = arguments[r];
  return e.apply(t, s);
});
zr || (zr = function(e) {
  for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)
    i[s - 1] = arguments[s];
  return new e(...i);
});
const Is = Ne(Array.prototype.forEach), Ku = Ne(Array.prototype.lastIndexOf), Ka = Ne(Array.prototype.pop), zi = Ne(Array.prototype.push), Ju = Ne(Array.prototype.splice), Ds = Ne(String.prototype.toLowerCase), fr = Ne(String.prototype.toString), gr = Ne(String.prototype.match), qi = Ne(String.prototype.replace), ef = Ne(String.prototype.indexOf), tf = Ne(String.prototype.trim), ot = Ne(Object.prototype.hasOwnProperty), Ce = Ne(RegExp.prototype.test), Ui = nf(TypeError);
function Ne(n) {
  return function(e) {
    e instanceof RegExp && (e.lastIndex = 0);
    for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)
      i[s - 1] = arguments[s];
    return $r(n, e, i);
  };
}
function nf(n) {
  return function() {
    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
      t[i] = arguments[i];
    return zr(n, t);
  };
}
function P(n, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ds;
  Za && Za(n, null);
  let i = e.length;
  for (; i--; ) {
    let s = e[i];
    if (typeof s == "string") {
      const r = t(s);
      r !== s && (Qu(e) || (e[i] = r), s = r);
    }
    n[s] = !0;
  }
  return n;
}
function sf(n) {
  for (let e = 0; e < n.length; e++)
    ot(n, e) || (n[e] = null);
  return n;
}
function vt(n) {
  const e = Pr(null);
  for (const [t, i] of Ul(n))
    ot(n, t) && (Array.isArray(i) ? e[t] = sf(i) : i && typeof i == "object" && i.constructor === Object ? e[t] = vt(i) : e[t] = i);
  return e;
}
function Fi(n, e) {
  for (; n !== null; ) {
    const i = Zu(n, e);
    if (i) {
      if (i.get)
        return Ne(i.get);
      if (typeof i.value == "function")
        return Ne(i.value);
    }
    n = Xu(n);
  }
  function t() {
    return null;
  }
  return t;
}
const Ja = De(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), hr = De(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), pr = De(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), rf = De(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), mr = De(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), af = De(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), eo = De(["#text"]), to = De(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), vr = De(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), no = De(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Cs = De(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), of = st(/\{\{[\w\W]*|[\w\W]*\}\}/gm), lf = st(/<%[\w\W]*|[\w\W]*%>/gm), cf = st(/\$\{[\w\W]*/gm), df = st(/^data-[\-\w.\u00B7-\uFFFF]+$/), uf = st(/^aria-[\-\w]+$/), Fl = st(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), ff = st(/^(?:\w+script|data):/i), gf = st(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Hl = st(/^html$/i), hf = st(/^[a-z][.\w]*(-[.\w]+)+$/i);
var io = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: uf,
  ATTR_WHITESPACE: gf,
  CUSTOM_ELEMENT: hf,
  DATA_ATTR: df,
  DOCTYPE_NAME: Hl,
  ERB_EXPR: lf,
  IS_ALLOWED_URI: Fl,
  IS_SCRIPT_OR_DATA: ff,
  MUSTACHE_EXPR: of,
  TMPLIT_EXPR: cf
});
const Hi = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, pf = function() {
  return typeof window > "u" ? null : window;
}, mf = function(e, t) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let i = null;
  const s = "data-tt-policy-suffix";
  t && t.hasAttribute(s) && (i = t.getAttribute(s));
  const r = "dompurify" + (i ? "#" + i : "");
  try {
    return e.createPolicy(r, {
      createHTML(a) {
        return a;
      },
      createScriptURL(a) {
        return a;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + r + " could not be created."), null;
  }
}, so = function() {
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
function Wl() {
  let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : pf();
  const e = (C) => Wl(C);
  if (e.version = "3.3.1", e.removed = [], !n || !n.document || n.document.nodeType !== Hi.document || !n.Element)
    return e.isSupported = !1, e;
  let {
    document: t
  } = n;
  const i = t, s = i.currentScript, {
    DocumentFragment: r,
    HTMLTemplateElement: a,
    Node: o,
    Element: l,
    NodeFilter: c,
    NamedNodeMap: d = n.NamedNodeMap || n.MozNamedAttrMap,
    HTMLFormElement: f,
    DOMParser: h,
    trustedTypes: p
  } = n, k = l.prototype, v = Fi(k, "cloneNode"), m = Fi(k, "remove"), T = Fi(k, "nextSibling"), M = Fi(k, "childNodes"), x = Fi(k, "parentNode");
  if (typeof a == "function") {
    const C = t.createElement("template");
    C.content && C.content.ownerDocument && (t = C.content.ownerDocument);
  }
  let _, R = "";
  const {
    implementation: Q,
    createNodeIterator: A,
    createDocumentFragment: N,
    getElementsByTagName: le
  } = t, {
    importNode: ee
  } = i;
  let B = so();
  e.isSupported = typeof Ul == "function" && typeof x == "function" && Q && Q.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: te,
    ERB_EXPR: Pe,
    TMPLIT_EXPR: Ot,
    DATA_ATTR: ln,
    ARIA_ATTR: zn,
    IS_SCRIPT_OR_DATA: qn,
    ATTR_WHITESPACE: cn,
    CUSTOM_ELEMENT: Ie
  } = io;
  let {
    IS_ALLOWED_URI: dn
  } = io, de = null;
  const ms = P({}, [...Ja, ...hr, ...pr, ...mr, ...eo]);
  let re = null;
  const Ri = P({}, [...to, ...vr, ...no, ...Cs]);
  let ae = Object.seal(Pr(null, {
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
  })), un = null, Li = null;
  const b = Object.seal(Pr(null, {
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
  let O = !0, L = !0, he = !1, ht = !0, Dt = !1, Un = !0, Nt = !1, Oi = !1, Di = !1, me = !1, $e = !1, Fn = !1, vs = !0, bs = !1;
  const Xt = "user-content-";
  let Pt = !0, $t = !1, Hn = {}, pt = null;
  const tr = P({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let fa = null;
  const ga = P({}, ["audio", "video", "img", "source", "image", "track"]);
  let nr = null;
  const ha = P({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ws = "http://www.w3.org/1998/Math/MathML", ys = "http://www.w3.org/2000/svg", zt = "http://www.w3.org/1999/xhtml";
  let Wn = zt, ir = !1, sr = null;
  const Kl = P({}, [ws, ys, zt], fr);
  let xs = P({}, ["mi", "mo", "mn", "ms", "mtext"]), ks = P({}, ["annotation-xml"]);
  const Jl = P({}, ["title", "style", "font", "a", "script"]);
  let Ni = null;
  const ec = ["application/xhtml+xml", "text/html"], tc = "text/html";
  let pe = null, Bn = null;
  const nc = t.createElement("form"), pa = function(u) {
    return u instanceof RegExp || u instanceof Function;
  }, rr = function() {
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Bn && Bn === u)) {
      if ((!u || typeof u != "object") && (u = {}), u = vt(u), Ni = // eslint-disable-next-line unicorn/prefer-includes
      ec.indexOf(u.PARSER_MEDIA_TYPE) === -1 ? tc : u.PARSER_MEDIA_TYPE, pe = Ni === "application/xhtml+xml" ? fr : Ds, de = ot(u, "ALLOWED_TAGS") ? P({}, u.ALLOWED_TAGS, pe) : ms, re = ot(u, "ALLOWED_ATTR") ? P({}, u.ALLOWED_ATTR, pe) : Ri, sr = ot(u, "ALLOWED_NAMESPACES") ? P({}, u.ALLOWED_NAMESPACES, fr) : Kl, nr = ot(u, "ADD_URI_SAFE_ATTR") ? P(vt(ha), u.ADD_URI_SAFE_ATTR, pe) : ha, fa = ot(u, "ADD_DATA_URI_TAGS") ? P(vt(ga), u.ADD_DATA_URI_TAGS, pe) : ga, pt = ot(u, "FORBID_CONTENTS") ? P({}, u.FORBID_CONTENTS, pe) : tr, un = ot(u, "FORBID_TAGS") ? P({}, u.FORBID_TAGS, pe) : vt({}), Li = ot(u, "FORBID_ATTR") ? P({}, u.FORBID_ATTR, pe) : vt({}), Hn = ot(u, "USE_PROFILES") ? u.USE_PROFILES : !1, O = u.ALLOW_ARIA_ATTR !== !1, L = u.ALLOW_DATA_ATTR !== !1, he = u.ALLOW_UNKNOWN_PROTOCOLS || !1, ht = u.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Dt = u.SAFE_FOR_TEMPLATES || !1, Un = u.SAFE_FOR_XML !== !1, Nt = u.WHOLE_DOCUMENT || !1, me = u.RETURN_DOM || !1, $e = u.RETURN_DOM_FRAGMENT || !1, Fn = u.RETURN_TRUSTED_TYPE || !1, Di = u.FORCE_BODY || !1, vs = u.SANITIZE_DOM !== !1, bs = u.SANITIZE_NAMED_PROPS || !1, Pt = u.KEEP_CONTENT !== !1, $t = u.IN_PLACE || !1, dn = u.ALLOWED_URI_REGEXP || Fl, Wn = u.NAMESPACE || zt, xs = u.MATHML_TEXT_INTEGRATION_POINTS || xs, ks = u.HTML_INTEGRATION_POINTS || ks, ae = u.CUSTOM_ELEMENT_HANDLING || {}, u.CUSTOM_ELEMENT_HANDLING && pa(u.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (ae.tagNameCheck = u.CUSTOM_ELEMENT_HANDLING.tagNameCheck), u.CUSTOM_ELEMENT_HANDLING && pa(u.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (ae.attributeNameCheck = u.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), u.CUSTOM_ELEMENT_HANDLING && typeof u.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (ae.allowCustomizedBuiltInElements = u.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Dt && (L = !1), $e && (me = !0), Hn && (de = P({}, eo), re = [], Hn.html === !0 && (P(de, Ja), P(re, to)), Hn.svg === !0 && (P(de, hr), P(re, vr), P(re, Cs)), Hn.svgFilters === !0 && (P(de, pr), P(re, vr), P(re, Cs)), Hn.mathMl === !0 && (P(de, mr), P(re, no), P(re, Cs))), u.ADD_TAGS && (typeof u.ADD_TAGS == "function" ? b.tagCheck = u.ADD_TAGS : (de === ms && (de = vt(de)), P(de, u.ADD_TAGS, pe))), u.ADD_ATTR && (typeof u.ADD_ATTR == "function" ? b.attributeCheck = u.ADD_ATTR : (re === Ri && (re = vt(re)), P(re, u.ADD_ATTR, pe))), u.ADD_URI_SAFE_ATTR && P(nr, u.ADD_URI_SAFE_ATTR, pe), u.FORBID_CONTENTS && (pt === tr && (pt = vt(pt)), P(pt, u.FORBID_CONTENTS, pe)), u.ADD_FORBID_CONTENTS && (pt === tr && (pt = vt(pt)), P(pt, u.ADD_FORBID_CONTENTS, pe)), Pt && (de["#text"] = !0), Nt && P(de, ["html", "head", "body"]), de.table && (P(de, ["tbody"]), delete un.tbody), u.TRUSTED_TYPES_POLICY) {
        if (typeof u.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Ui('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof u.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Ui('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        _ = u.TRUSTED_TYPES_POLICY, R = _.createHTML("");
      } else
        _ === void 0 && (_ = mf(p, s)), _ !== null && typeof R == "string" && (R = _.createHTML(""));
      De && De(u), Bn = u;
    }
  }, ma = P({}, [...hr, ...pr, ...rf]), va = P({}, [...mr, ...af]), ic = function(u) {
    let w = x(u);
    (!w || !w.tagName) && (w = {
      namespaceURI: Wn,
      tagName: "template"
    });
    const E = Ds(u.tagName), ne = Ds(w.tagName);
    return sr[u.namespaceURI] ? u.namespaceURI === ys ? w.namespaceURI === zt ? E === "svg" : w.namespaceURI === ws ? E === "svg" && (ne === "annotation-xml" || xs[ne]) : !!ma[E] : u.namespaceURI === ws ? w.namespaceURI === zt ? E === "math" : w.namespaceURI === ys ? E === "math" && ks[ne] : !!va[E] : u.namespaceURI === zt ? w.namespaceURI === ys && !ks[ne] || w.namespaceURI === ws && !xs[ne] ? !1 : !va[E] && (Jl[E] || !ma[E]) : !!(Ni === "application/xhtml+xml" && sr[u.namespaceURI]) : !1;
  }, mt = function(u) {
    zi(e.removed, {
      element: u
    });
    try {
      x(u).removeChild(u);
    } catch {
      m(u);
    }
  }, fn = function(u, w) {
    try {
      zi(e.removed, {
        attribute: w.getAttributeNode(u),
        from: w
      });
    } catch {
      zi(e.removed, {
        attribute: null,
        from: w
      });
    }
    if (w.removeAttribute(u), u === "is")
      if (me || $e)
        try {
          mt(w);
        } catch {
        }
      else
        try {
          w.setAttribute(u, "");
        } catch {
        }
  }, ba = function(u) {
    let w = null, E = null;
    if (Di)
      u = "<remove></remove>" + u;
    else {
      const ue = gr(u, /^[\r\n\t ]+/);
      E = ue && ue[0];
    }
    Ni === "application/xhtml+xml" && Wn === zt && (u = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + u + "</body></html>");
    const ne = _ ? _.createHTML(u) : u;
    if (Wn === zt)
      try {
        w = new h().parseFromString(ne, Ni);
      } catch {
      }
    if (!w || !w.documentElement) {
      w = Q.createDocument(Wn, "template", null);
      try {
        w.documentElement.innerHTML = ir ? R : ne;
      } catch {
      }
    }
    const _e = w.body || w.documentElement;
    return u && E && _e.insertBefore(t.createTextNode(E), _e.childNodes[0] || null), Wn === zt ? le.call(w, Nt ? "html" : "body")[0] : Nt ? w.documentElement : _e;
  }, wa = function(u) {
    return A.call(
      u.ownerDocument || u,
      u,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, ar = function(u) {
    return u instanceof f && (typeof u.nodeName != "string" || typeof u.textContent != "string" || typeof u.removeChild != "function" || !(u.attributes instanceof d) || typeof u.removeAttribute != "function" || typeof u.setAttribute != "function" || typeof u.namespaceURI != "string" || typeof u.insertBefore != "function" || typeof u.hasChildNodes != "function");
  }, ya = function(u) {
    return typeof o == "function" && u instanceof o;
  };
  function qt(C, u, w) {
    Is(C, (E) => {
      E.call(e, u, w, Bn);
    });
  }
  const xa = function(u) {
    let w = null;
    if (qt(B.beforeSanitizeElements, u, null), ar(u))
      return mt(u), !0;
    const E = pe(u.nodeName);
    if (qt(B.uponSanitizeElement, u, {
      tagName: E,
      allowedTags: de
    }), Un && u.hasChildNodes() && !ya(u.firstElementChild) && Ce(/<[/\w!]/g, u.innerHTML) && Ce(/<[/\w!]/g, u.textContent) || u.nodeType === Hi.progressingInstruction || Un && u.nodeType === Hi.comment && Ce(/<[/\w]/g, u.data))
      return mt(u), !0;
    if (!(b.tagCheck instanceof Function && b.tagCheck(E)) && (!de[E] || un[E])) {
      if (!un[E] && _a(E) && (ae.tagNameCheck instanceof RegExp && Ce(ae.tagNameCheck, E) || ae.tagNameCheck instanceof Function && ae.tagNameCheck(E)))
        return !1;
      if (Pt && !pt[E]) {
        const ne = x(u) || u.parentNode, _e = M(u) || u.childNodes;
        if (_e && ne) {
          const ue = _e.length;
          for (let ze = ue - 1; ze >= 0; --ze) {
            const Ut = v(_e[ze], !0);
            Ut.__removalCount = (u.__removalCount || 0) + 1, ne.insertBefore(Ut, T(u));
          }
        }
      }
      return mt(u), !0;
    }
    return u instanceof l && !ic(u) || (E === "noscript" || E === "noembed" || E === "noframes") && Ce(/<\/no(script|embed|frames)/i, u.innerHTML) ? (mt(u), !0) : (Dt && u.nodeType === Hi.text && (w = u.textContent, Is([te, Pe, Ot], (ne) => {
      w = qi(w, ne, " ");
    }), u.textContent !== w && (zi(e.removed, {
      element: u.cloneNode()
    }), u.textContent = w)), qt(B.afterSanitizeElements, u, null), !1);
  }, ka = function(u, w, E) {
    if (vs && (w === "id" || w === "name") && (E in t || E in nc))
      return !1;
    if (!(L && !Li[w] && Ce(ln, w))) {
      if (!(O && Ce(zn, w))) {
        if (!(b.attributeCheck instanceof Function && b.attributeCheck(w, u))) {
          if (!re[w] || Li[w]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(_a(u) && (ae.tagNameCheck instanceof RegExp && Ce(ae.tagNameCheck, u) || ae.tagNameCheck instanceof Function && ae.tagNameCheck(u)) && (ae.attributeNameCheck instanceof RegExp && Ce(ae.attributeNameCheck, w) || ae.attributeNameCheck instanceof Function && ae.attributeNameCheck(w, u)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              w === "is" && ae.allowCustomizedBuiltInElements && (ae.tagNameCheck instanceof RegExp && Ce(ae.tagNameCheck, E) || ae.tagNameCheck instanceof Function && ae.tagNameCheck(E)))
            ) return !1;
          } else if (!nr[w]) {
            if (!Ce(dn, qi(E, cn, ""))) {
              if (!((w === "src" || w === "xlink:href" || w === "href") && u !== "script" && ef(E, "data:") === 0 && fa[u])) {
                if (!(he && !Ce(qn, qi(E, cn, "")))) {
                  if (E)
                    return !1;
                }
              }
            }
          }
        }
      }
    }
    return !0;
  }, _a = function(u) {
    return u !== "annotation-xml" && gr(u, Ie);
  }, Ta = function(u) {
    qt(B.beforeSanitizeAttributes, u, null);
    const {
      attributes: w
    } = u;
    if (!w || ar(u))
      return;
    const E = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: re,
      forceKeepAttr: void 0
    };
    let ne = w.length;
    for (; ne--; ) {
      const _e = w[ne], {
        name: ue,
        namespaceURI: ze,
        value: Ut
      } = _e, jn = pe(ue), or = Ut;
      let be = ue === "value" ? or : tf(or);
      if (E.attrName = jn, E.attrValue = be, E.keepAttr = !0, E.forceKeepAttr = void 0, qt(B.uponSanitizeAttribute, u, E), be = E.attrValue, bs && (jn === "id" || jn === "name") && (fn(ue, u), be = Xt + be), Un && Ce(/((--!?|])>)|<\/(style|title|textarea)/i, be)) {
        fn(ue, u);
        continue;
      }
      if (jn === "attributename" && gr(be, "href")) {
        fn(ue, u);
        continue;
      }
      if (E.forceKeepAttr)
        continue;
      if (!E.keepAttr) {
        fn(ue, u);
        continue;
      }
      if (!ht && Ce(/\/>/i, be)) {
        fn(ue, u);
        continue;
      }
      Dt && Is([te, Pe, Ot], (Ea) => {
        be = qi(be, Ea, " ");
      });
      const Sa = pe(u.nodeName);
      if (!ka(Sa, jn, be)) {
        fn(ue, u);
        continue;
      }
      if (_ && typeof p == "object" && typeof p.getAttributeType == "function" && !ze)
        switch (p.getAttributeType(Sa, jn)) {
          case "TrustedHTML": {
            be = _.createHTML(be);
            break;
          }
          case "TrustedScriptURL": {
            be = _.createScriptURL(be);
            break;
          }
        }
      if (be !== or)
        try {
          ze ? u.setAttributeNS(ze, ue, be) : u.setAttribute(ue, be), ar(u) ? mt(u) : Ka(e.removed);
        } catch {
          fn(ue, u);
        }
    }
    qt(B.afterSanitizeAttributes, u, null);
  }, sc = function C(u) {
    let w = null;
    const E = wa(u);
    for (qt(B.beforeSanitizeShadowDOM, u, null); w = E.nextNode(); )
      qt(B.uponSanitizeShadowNode, w, null), xa(w), Ta(w), w.content instanceof r && C(w.content);
    qt(B.afterSanitizeShadowDOM, u, null);
  };
  return e.sanitize = function(C) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, w = null, E = null, ne = null, _e = null;
    if (ir = !C, ir && (C = "<!-->"), typeof C != "string" && !ya(C))
      if (typeof C.toString == "function") {
        if (C = C.toString(), typeof C != "string")
          throw Ui("dirty is not a string, aborting");
      } else
        throw Ui("toString is not a function");
    if (!e.isSupported)
      return C;
    if (Oi || rr(u), e.removed = [], typeof C == "string" && ($t = !1), $t) {
      if (C.nodeName) {
        const Ut = pe(C.nodeName);
        if (!de[Ut] || un[Ut])
          throw Ui("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (C instanceof o)
      w = ba("<!---->"), E = w.ownerDocument.importNode(C, !0), E.nodeType === Hi.element && E.nodeName === "BODY" || E.nodeName === "HTML" ? w = E : w.appendChild(E);
    else {
      if (!me && !Dt && !Nt && // eslint-disable-next-line unicorn/prefer-includes
      C.indexOf("<") === -1)
        return _ && Fn ? _.createHTML(C) : C;
      if (w = ba(C), !w)
        return me ? null : Fn ? R : "";
    }
    w && Di && mt(w.firstChild);
    const ue = wa($t ? C : w);
    for (; ne = ue.nextNode(); )
      xa(ne), Ta(ne), ne.content instanceof r && sc(ne.content);
    if ($t)
      return C;
    if (me) {
      if ($e)
        for (_e = N.call(w.ownerDocument); w.firstChild; )
          _e.appendChild(w.firstChild);
      else
        _e = w;
      return (re.shadowroot || re.shadowrootmode) && (_e = ee.call(i, _e, !0)), _e;
    }
    let ze = Nt ? w.outerHTML : w.innerHTML;
    return Nt && de["!doctype"] && w.ownerDocument && w.ownerDocument.doctype && w.ownerDocument.doctype.name && Ce(Hl, w.ownerDocument.doctype.name) && (ze = "<!DOCTYPE " + w.ownerDocument.doctype.name + `>
` + ze), Dt && Is([te, Pe, Ot], (Ut) => {
      ze = qi(ze, Ut, " ");
    }), _ && Fn ? _.createHTML(ze) : ze;
  }, e.setConfig = function() {
    let C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    rr(C), Oi = !0;
  }, e.clearConfig = function() {
    Bn = null, Oi = !1;
  }, e.isValidAttribute = function(C, u, w) {
    Bn || rr({});
    const E = pe(C), ne = pe(u);
    return ka(E, ne, w);
  }, e.addHook = function(C, u) {
    typeof u == "function" && zi(B[C], u);
  }, e.removeHook = function(C, u) {
    if (u !== void 0) {
      const w = Ku(B[C], u);
      return w === -1 ? void 0 : Ju(B[C], w, 1)[0];
    }
    return Ka(B[C]);
  }, e.removeHooks = function(C) {
    B[C] = [];
  }, e.removeAllHooks = function() {
    B = so();
  }, e;
}
var Bl = Wl();
V.setOptions({
  breaks: !0,
  // Convert \n to <br>
  gfm: !0
  // GitHub Flavored Markdown (tables, strikethrough)
});
Bl.addHook("afterSanitizeAttributes", (n) => {
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
function vf(n) {
  if (!n) return "";
  const e = V.parse(n);
  return Bl.sanitize(e, {
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
var bf = /* @__PURE__ */ J('<div class="message-content markdown-body svelte-1uqoiy7"><!></div>'), wf = /* @__PURE__ */ J('<span class="message-content"> </span>'), yf = /* @__PURE__ */ J('<span class="sending-indicator svelte-1uqoiy7" aria-label="Sending message" role="status"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svelte-1uqoiy7"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="currentColor" opacity="0.3"></path><path d="M12 2C6.48 2 2 6.48 2 12H4C4 7.58 7.58 4 12 4V2Z" fill="currentColor"><animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite"></animateTransform></path></svg></span>'), xf = /* @__PURE__ */ J('<span class="failed-indicator svelte-1uqoiy7" aria-label="Message failed to send" role="alert"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svelte-1uqoiy7"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#ef4444"></path><path d="M11 7H13V13H11V7ZM11 15H13V17H11V15Z" fill="#ef4444"></path></svg></span>'), kf = /* @__PURE__ */ J('<div role="listitem"><div class="message-bubble svelte-1uqoiy7"><!> <!> <!></div> <div class="message-time svelte-1uqoiy7"> </div></div>');
const _f = {
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
function jl(n, e) {
  Yt(e, !0), an(n, _f);
  let t = K(e, "message", 7);
  function i(x) {
    return new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", hour12: !0 }).format(x);
  }
  const s = /* @__PURE__ */ we(() => t().role === "user"), r = /* @__PURE__ */ we(() => t().role === "assistant" ? vf(t().content) : t().content);
  var a = {
    get message() {
      return t();
    },
    set message(x) {
      t(x), G();
    }
  }, o = kf();
  let l;
  var c = se(o), d = se(c);
  {
    var f = (x) => {
      var _ = bf(), R = se(_);
      xd(R, () => y(r)), ie(_), j(x, _);
    }, h = (x) => {
      var _ = wf(), R = se(_, !0);
      ie(_), it(() => Ai(R, t().content)), j(x, _);
    };
    Se(d, (x) => {
      t().role === "assistant" ? x(f) : x(h, !1);
    });
  }
  var p = ce(d, 2);
  {
    var k = (x) => {
      var _ = yf();
      j(x, _);
    };
    Se(p, (x) => {
      t().status === "sending" && x(k);
    });
  }
  var v = ce(p, 2);
  {
    var m = (x) => {
      var _ = xf();
      j(x, _);
    };
    Se(v, (x) => {
      t().status === "failed" && x(m);
    });
  }
  ie(c);
  var T = ce(c, 2), M = se(T, !0);
  return ie(T), ie(o), it(
    (x, _) => {
      l = Jr(o, 1, "message svelte-1uqoiy7", null, l, { user: y(s), assistant: !y(s) }), ft(o, "aria-label", y(s) ? "Your message" : "Assistant message"), ft(T, "aria-label", x), Ai(M, _);
    },
    [
      () => `Sent at ${i(t().timestamp)}`,
      () => i(t().timestamp)
    ]
  ), j(n, o), Qt(a);
}
on(jl, { message: {} }, [], [], !0);
var Tf = /* @__PURE__ */ J('<div class="typing-indicator svelte-ej4x60" role="status" aria-live="polite" aria-label="Assistant is typing"><span aria-hidden="true" class="svelte-ej4x60"></span> <span aria-hidden="true" class="svelte-ej4x60"></span> <span aria-hidden="true" class="svelte-ej4x60"></span> <span class="sr-only svelte-ej4x60">Assistant is typing a response</span></div>');
const Sf = {
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
function Vl(n, e) {
  Yt(e, !0), an(n, Sf);
  let t = K(e, "chat", 7, sn);
  var i = {
    get chat() {
      return t();
    },
    set chat(o = sn) {
      t(o), G();
    }
  }, s = al(), r = Xi(s);
  {
    var a = (o) => {
      var l = Tf();
      j(o, l);
    };
    Se(r, (o) => {
      t().isTyping && o(a);
    });
  }
  return j(n, s), Qt(i);
}
on(Vl, { chat: {} }, [], [], !0);
var Ef = /* @__PURE__ */ J('<button class="question-chip svelte-otpvm8" type="button"> </button>'), Af = /* @__PURE__ */ J('<div class="quick-questions svelte-otpvm8" role="group" aria-label="Suggested questions"><div class="section-label svelte-otpvm8">Suggested questions</div> <!></div>');
const If = {
  hash: "svelte-otpvm8",
  code: `.quick-questions.svelte-otpvm8 {display:flex;flex-direction:column;align-items:center;align-self:center;gap:10px;padding:var(--widget-space-xs) 0;width:100%;max-width:280px;}.section-label.svelte-otpvm8 {font-size:var(--widget-font-size-xs);color:var(--widget-text-muted);margin-bottom:var(--widget-space-xs);
    animation: svelte-otpvm8-fadeInUp 0.3s var(--widget-ease-out-expo) backwards;animation-delay:2.7s;}.question-chip.svelte-otpvm8 {min-height:44px;padding:var(--widget-space-sm) var(--widget-space-lg);border:1.5px solid var(--widget-primary);border-radius:var(--widget-radius-full);background:transparent;color:var(--widget-primary);cursor:pointer;transition:background var(--widget-transition),
                color var(--widget-transition),
                transform var(--widget-transition),
                box-shadow var(--widget-transition);font-family:var(--widget-font-family);font-size:0.875rem;font-weight:var(--widget-font-weight-medium);text-align:center;
    animation: svelte-otpvm8-fadeInUp 0.3s var(--widget-ease-out-expo) backwards;}

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
function Gl(n, e) {
  Yt(e, !0), an(n, If);
  const t = [
    "What's Leo's professional background?",
    "What technologies does Leo work with?",
    "How can I get in touch with Leo?"
  ];
  let i = K(e, "questions", 7, t), s = K(e, "onsend", 7), r = K(e, "disabled", 7, !1);
  function a(d) {
    var f;
    r() || (f = s()) == null || f(d);
  }
  var o = {
    get questions() {
      return i();
    },
    set questions(d = t) {
      i(d), G();
    },
    get onsend() {
      return s();
    },
    set onsend(d) {
      s(d), G();
    },
    get disabled() {
      return r();
    },
    set disabled(d = !1) {
      r(d), G();
    }
  }, l = Af(), c = ce(se(l), 2);
  return ll(c, 18, i, (d) => d, (d, f, h) => {
    var p = Ef();
    p.__click = () => a(f);
    var k = se(p, !0);
    ie(p), it(() => {
      p.disabled = r(), dl(p, `animation-delay: ${2.8 + y(h) * 0.2}s`), ft(p, "aria-disabled", r() ? "true" : "false"), Ai(k, f);
    }), j(d, p);
  }), ie(l), j(n, l), Qt(o);
}
gs(["click"]);
on(Gl, { questions: {}, onsend: {}, disabled: {} }, [], [], !0);
var Cf = /* @__PURE__ */ J('<p class="initial-message svelte-qha2j"> </p>'), Mf = /* @__PURE__ */ J('<div class="empty-state svelte-qha2j" role="status" aria-label="botbrewers.ca assistant ready"><div class="branding-phase svelte-qha2j" aria-hidden="true"><div class="empty-icon svelte-qha2j"><img alt="" class="brand-logo svelte-qha2j" width="68" height="68"/></div> <span class="brand-name svelte-qha2j">botbrewers.ca</span></div> <!> <!></div>'), Rf = /* @__PURE__ */ J('<div class="messages-container svelte-qha2j" role="list" aria-label="Messages"><!> <!></div>'), Lf = /* @__PURE__ */ J('<div class="error-message svelte-qha2j"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-qha2j"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#ef4444" class="svelte-qha2j"></path><path d="M11 7H13V13H11V7ZM11 15H13V17H11V15Z" fill="#ef4444" class="svelte-qha2j"></path></svg> <p class="svelte-qha2j"> </p></div>'), Of = /* @__PURE__ */ J('<div class="message-list svelte-qha2j" role="log" aria-live="polite" aria-label="Chat conversation"><!> <!></div>');
const Df = {
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
function Yl(n, e) {
  Yt(e, !0), an(n, Df);
  let t = K(e, "onsend", 7), i = K(e, "connectionState", 23, () => oe.DISCONNECTED), s = K(e, "chat", 7, sn), r = K(e, "config", 7, Mt), a, o = !0;
  const l = /* @__PURE__ */ we(() => s().messages.length > 0), c = /* @__PURE__ */ we(() => i() !== oe.CONNECTED);
  Zi(() => {
    s().messages, o && y(l) && d();
  }), Zi(() => {
    s().isTyping, o && y(l) && d();
  }), Zi(() => {
    s().streamingUpdateSignal, o && s().isStreaming && d();
  });
  async function d() {
    await nl(), a && (a.scrollTop = a.scrollHeight);
  }
  function f() {
    if (a) {
      const { scrollTop: x, scrollHeight: _, clientHeight: R } = a;
      o = _ - x - R < 100;
    }
  }
  ta(() => {
    y(l) && d();
  });
  var h = {
    get onsend() {
      return t();
    },
    set onsend(x) {
      t(x), G();
    },
    get connectionState() {
      return i();
    },
    set connectionState(x = oe.DISCONNECTED) {
      i(x), G();
    },
    get chat() {
      return s();
    },
    set chat(x = sn) {
      s(x), G();
    },
    get config() {
      return r();
    },
    set config(x = Mt) {
      r(x), G();
    }
  }, p = Of(), k = se(p);
  {
    var v = (x) => {
      var _ = Mf(), R = se(_), Q = se(R), A = se(Q);
      ie(Q), jr(2), ie(R);
      var N = ce(R, 2);
      {
        var le = (B) => {
          var te = Cf(), Pe = se(te, !0);
          ie(te), it(() => Ai(Pe, r().initialMessage)), j(B, te);
        };
        Se(N, (B) => {
          r().initialMessage && B(le);
        });
      }
      var ee = ce(N, 2);
      Gl(ee, {
        get questions() {
          return r().quickQuestions;
        },
        get onsend() {
          return t();
        },
        get disabled() {
          return y(c);
        }
      }), ie(_), it(() => ft(A, "src", Qd)), j(x, _);
    }, m = (x) => {
      var _ = Rf(), R = se(_);
      ll(R, 17, () => s().messages, (A) => A.id, (A, N) => {
        jl(A, {
          get message() {
            return y(N);
          }
        });
      });
      var Q = ce(R, 2);
      Vl(Q, {
        get chat() {
          return s();
        }
      }), ie(_), j(x, _);
    };
    Se(k, (x) => {
      s().messages.length === 0 ? x(v) : x(m, !1);
    });
  }
  var T = ce(k, 2);
  {
    var M = (x) => {
      var _ = Lf(), R = ce(se(_), 2), Q = se(R, !0);
      ie(R), ie(_), it(() => Ai(Q, s().error)), j(x, _);
    };
    Se(T, (x) => {
      s().error && x(M);
    });
  }
  return ie(p), ea(p, (x) => a = x, () => a), gd("scroll", p, f), j(n, p), Qt(h);
}
on(Yl, { onsend: {}, connectionState: {}, chat: {}, config: {} }, [], [], !0);
var Nf = /* @__PURE__ */ J('<div class="connection-status svelte-1a8gd73" role="status" aria-live="polite"><span class="connecting-text svelte-1a8gd73">Connecting...</span> <span class="connecting-dot svelte-1a8gd73"></span></div>'), Pf = /* @__PURE__ */ J('<div class="brand-banner svelte-1a8gd73"><a href="https://botbrewers.ca" target="_blank" rel="noopener noreferrer" class="svelte-1a8gd73">botbrewers.ca<span class="sr-only svelte-1a8gd73">(opens in new tab)</span></a></div>'), $f = /* @__PURE__ */ J('<div class="input-bar svelte-1a8gd73"><!> <div class="input-container svelte-1a8gd73"><textarea class="input-field svelte-1a8gd73" rows="1" aria-label="Message input"></textarea> <button class="send-button svelte-1a8gd73" aria-label="Send message"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-1a8gd73"><path d="M2 21L23 12L2 3V10L17 12L2 14V21Z" fill="currentColor" class="svelte-1a8gd73"></path></svg></button></div> <div class="ai-disclaimer svelte-1a8gd73">AI can make mistakes. Please double-check responses.</div></div>');
const zf = {
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
function Ql(n, e) {
  Yt(e, !0), an(n, zf);
  let t = K(e, "onsend", 7), i = K(e, "disabled", 7, !1), s = K(e, "showBrandBanner", 7, !1), r = K(e, "connectionState", 23, () => oe.DISCONNECTED), a = K(e, "chat", 7, sn), o = K(e, "config", 7, Mt), l = /* @__PURE__ */ H(""), c;
  function d() {
    var le, ee, B, te;
    const A = Tt().generate();
    Z.log("InputBar", "handleSend() called", {
      correlationId: A,
      rawInputValue: y(l),
      rawLength: ((le = y(l)) == null ? void 0 : le.length) || 0,
      rawType: typeof y(l),
      disabled: i(),
      isTyping: a().isTyping
    });
    const N = y(l).trim();
    Z.log("InputBar", "After trimming", {
      correlationId: A,
      original: y(l),
      trimmed: N,
      originalLength: ((ee = y(l)) == null ? void 0 : ee.length) || 0,
      trimmedLength: (N == null ? void 0 : N.length) || 0,
      wasEmptyAfterTrim: !N,
      hadWhitespaceOnly: (((B = y(l)) == null ? void 0 : B.length) || 0) > 0 && !N
    }), N && !i() && !a().isTyping ? (Z.log("InputBar", "Conditions met, calling onsend", {
      correlationId: A,
      trimmedValue: N,
      trimmedLength: N.length,
      willSend: !0
    }), Tt().setCurrent(A), (te = t()) == null || te(N), q(l, ""), h()) : Z.log("InputBar", "Send blocked", {
      correlationId: A,
      hasContent: !!N,
      disabled: i(),
      isTyping: a().isTyping,
      trimmedValue: N || "(empty)",
      reason: N ? i() ? "disabled" : a().isTyping ? "typing in progress" : "unknown" : "empty content"
    });
  }
  function f(A) {
    A.key === "Enter" && !A.shiftKey && (A.preventDefault(), d());
  }
  function h() {
    c && (c.style.height = "auto", c.style.height = Math.min(c.scrollHeight, 120) + "px");
  }
  const p = /* @__PURE__ */ we(() => i() || a().isTyping || a().error !== null), k = /* @__PURE__ */ we(() => a().isTyping ? "Waiting for response..." : a().error ? "Error occurred" : o().placeholder), v = /* @__PURE__ */ we(() => r() === oe.CONNECTING || r() === oe.DISCONNECTED);
  var m = {
    get onsend() {
      return t();
    },
    set onsend(A) {
      t(A), G();
    },
    get disabled() {
      return i();
    },
    set disabled(A = !1) {
      i(A), G();
    },
    get showBrandBanner() {
      return s();
    },
    set showBrandBanner(A = !1) {
      s(A), G();
    },
    get connectionState() {
      return r();
    },
    set connectionState(A = oe.DISCONNECTED) {
      r(A), G();
    },
    get chat() {
      return a();
    },
    set chat(A = sn) {
      a(A), G();
    },
    get config() {
      return o();
    },
    set config(A = Mt) {
      o(A), G();
    }
  }, T = $f(), M = se(T);
  {
    var x = (A) => {
      var N = al(), le = Xi(N);
      {
        var ee = (te) => {
          var Pe = Nf();
          j(te, Pe);
        }, B = (te) => {
          var Pe = Pf();
          j(te, Pe);
        };
        Se(le, (te) => {
          y(v) ? te(ee) : te(B, !1);
        });
      }
      j(A, N);
    };
    Se(M, (A) => {
      s() && A(x);
    });
  }
  var _ = ce(M, 2), R = se(_);
  Kc(R), R.__keydown = f, R.__input = h, ea(R, (A) => c = A, () => c);
  var Q = ce(R, 2);
  return Q.__click = d, ie(_), jr(2), ie(T), it(
    (A) => {
      ft(R, "placeholder", y(k)), R.disabled = y(p), Q.disabled = A;
    },
    [() => y(p) || !y(l).trim()]
  ), Ld(R, () => y(l), (A) => q(l, A)), j(n, T), Qt(m);
}
gs(["keydown", "input", "click"]);
on(
  Ql,
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
class qf {
  constructor(e, t) {
    this.sessionId = null, this.config = e, this.visitor = t, this.debugLogger = ia(e.getAll());
  }
  /**
   * Initialize widget session with backend
   */
  async initialize() {
    try {
      const e = new AbortController(), t = setTimeout(() => e.abort(), ye.API_TIMEOUT), i = Vi.getApiUrl("init", {
        clientId: this.config.clientId
      }), s = {
        client_id: this.config.clientId,
        visitor_id: this.visitor.getVisitorId(),
        page_url: window.location.href,
        referrer: document.referrer
      };
      this.config.debug && this.debugLogger.log("APIClient", "Initializing with", {
        endpoint: "init",
        fullUrl: i,
        payload: s
      });
      const r = Tt().getCurrent(), a = await fetch(i, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: window.location.origin,
          "X-Correlation-ID": r
        },
        body: JSON.stringify({ body: s }),
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
          throw new Xn(
            `Rate limit exceeded. Please try again in ${c} seconds.`,
            c
          );
        }
        throw new Qn(
          `Failed to initialize widget: ${a.statusText}`,
          a.status,
          i
        );
      }
      const o = await a.json();
      return this.sessionId = o.session_id, this.visitor.saveSessionId(o.session_id), o;
    } catch (e) {
      if (e instanceof Ki || e instanceof Qn || e instanceof Xn)
        throw e;
      const t = Ji.handle(e, {
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
    var i, s;
    const t = Tt().getCurrent();
    try {
      this.debugLogger.log("APIClient", "sendMessage() called", {
        correlationId: t,
        message: e,
        messageLength: (e == null ? void 0 : e.length) || 0,
        messageType: typeof e,
        sessionId: this.sessionId,
        clientId: this.config.clientId
      });
      const r = nu.validate(e);
      if (this.debugLogger.log("APIClient", "Message validation result", {
        correlationId: t,
        input: e,
        isValid: r.isValid,
        error: r.error,
        sanitizedValue: r.sanitizedValue,
        sanitizedLength: ((i = r.sanitizedValue) == null ? void 0 : i.length) || 0,
        contentChanged: e !== r.sanitizedValue
      }), !r.isValid)
        throw this.debugLogger.error("APIClient", "Validation failed", { correlationId: t, error: r.error }), new Ki(r.error || "Validation failed", "message", e);
      this.sessionId || (this.debugLogger.log("APIClient", "No session ID, attempting to resume or initialize...", { correlationId: t }), await this.resumeSession() || await this.initialize());
      const a = new AbortController(), o = setTimeout(() => a.abort(), ye.API_TIMEOUT), l = {
        body: {
          client_id: this.config.clientId,
          visitor_id: this.visitor.getVisitorId(),
          session_id: this.sessionId,
          message: r.sanitizedValue
        }
      }, c = Vi.getApiUrl("chat", {
        clientId: this.config.clientId
      });
      this.debugLogger.log("APIClient", "HTTP request payload", {
        correlationId: t,
        url: c,
        payload: l,
        messageContent: l.body.message,
        messageLength: ((s = l.body.message) == null ? void 0 : s.length) || 0
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
          throw new Xn(
            `Rate limit exceeded. Please try again in ${p} seconds.`,
            p
          );
        }
        throw new Qn(
          `Failed to send message: ${d.statusText}`,
          d.status,
          c
        );
      }
      const f = await d.json();
      return this.debugLogger.log("APIClient", "HTTP response data", { correlationId: t, result: f }), f;
    } catch (r) {
      if (this.debugLogger.error("APIClient", "sendMessage() error", { correlationId: t, error: r }), r instanceof Ki || r instanceof Qn || r instanceof Xn)
        throw r;
      const a = Ji.handle(r, {
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
      const e = new AbortController(), t = setTimeout(() => e.abort(), ye.API_TIMEOUT), i = Vi.getApiUrl("sessionHealth", {
        clientId: this.config.clientId,
        sessionId: this.sessionId
      }), s = {
        client_id: this.config.clientId,
        visitor_id: this.visitor.getVisitorId()
      };
      this.config.debug && this.debugLogger.log("APIClient", "Validating session health", {
        sessionId: this.sessionId,
        fullUrl: i,
        payload: s
      });
      const r = Tt().getCurrent(), a = await fetch(i, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: window.location.origin,
          "X-Correlation-ID": r
        },
        body: JSON.stringify({ body: s }),
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
      const e = new AbortController(), t = setTimeout(() => e.abort(), ye.API_TIMEOUT), i = Vi.getApiUrl("sessionHealth", {
        clientId: this.config.clientId,
        sessionId: this.sessionId
      }), s = {
        client_id: this.config.clientId,
        visitor_id: this.visitor.getVisitorId()
      }, r = Tt().getCurrent(), a = await fetch(i, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: window.location.origin,
          "X-Correlation-ID": r
        },
        body: JSON.stringify({ body: s }),
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
      const t = Ji.handle(e, {
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
class Uf {
  constructor(e, t, i) {
    this.typingTimeout = null, this.hasHiddenTypingForCurrentStream = !1, this.lastCompletionTimestamp = null, this.lastMessageSentTimestamp = null, this.COMPLETION_GRACE_PERIOD_MS = ye.COMPLETION_GRACE_PERIOD, this.chatStore = e, this.uiStore = t, this.debugLogger = i;
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
    t && !this.chatStore.hasMessages && (Mt.setBackendInitialMessage(t), this.debugLogger.log("ChatController", "Initial message configured for empty state", {
      source: Mt.initialMessage === t ? "server" : "client-override"
    }));
  }
  handleTypingIndicator() {
    const e = this.lastCompletionTimestamp ? Date.now() - this.lastCompletionTimestamp : 1 / 0, t = this.lastMessageSentTimestamp ? Date.now() - this.lastMessageSentTimestamp : 1 / 0;
    if (e < this.COMPLETION_GRACE_PERIOD_MS && t > ye.CONNECTION_DELAY) {
      this.debugLogger.log("ChatController", "Ignoring typing indicator - grace period");
      return;
    }
    !this.hasHiddenTypingForCurrentStream && !this.chatStore.isStreaming ? (this.debugLogger.log("ChatController", "Processing typing indicator"), this.chatStore.setTyping(!0), this.typingTimeout && clearTimeout(this.typingTimeout), this.typingTimeout = window.setTimeout(() => {
      this.debugLogger.log("ChatController", "Typing indicator timeout"), this.chatStore.setTyping(!1), this.typingTimeout = null;
    }, ye.TYPING_INDICATOR_TIMEOUT)) : this.debugLogger.log("ChatController", "Ignoring typing indicator - already streaming");
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
  setTypingWithTimeout(e = ye.TYPING_FALLBACK_TIMEOUT) {
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
var Ff = /* @__PURE__ */ J('<span class="error-message svelte-zsv8oa" id="error-message">Connection lost. Unable to reconnect.</span> <button class="restart-button svelte-zsv8oa" aria-describedby="error-message">Retry Connection</button>', 1), Hf = /* @__PURE__ */ J('<span class="error-message svelte-zsv8oa" id="error-message">Something went wrong. Please try again.</span> <button class="restart-button svelte-zsv8oa" aria-describedby="error-message">Retry Connection</button>', 1), Wf = /* @__PURE__ */ J('<div class="error-banner svelte-zsv8oa" role="alert" aria-live="polite"><!></div>'), Bf = /* @__PURE__ */ J('<button class="backdrop svelte-zsv8oa" aria-label="Close chat overlay" tabindex="-1"></button>'), jf = /* @__PURE__ */ J('<div role="status" aria-live="polite" class="sr-only svelte-zsv8oa">Chat assistant opened</div> <div class="chat-container svelte-zsv8oa" role="dialog" aria-label="Chat assistant" aria-modal="true" tabindex="-1"><!> <!> <!> <!></div> <!>', 1), Vf = /* @__PURE__ */ J('<div class="widget-container svelte-zsv8oa"><!> <!></div>');
const Gf = {
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
function Xl(n, e) {
  Yt(e, !0), an(n, Gf);
  let t = K(e, "hostElement", 7), i = K(e, "ui", 7, Ii), s = K(e, "chat", 7, sn), r = K(e, "config", 7, Mt), a, o, l, c, d, f;
  const h = Tt();
  let p = !1, k = !1, v = null, m = /* @__PURE__ */ H(ve(oe.DISCONNECTED)), T = /* @__PURE__ */ H(
    !1
    // Track if max reconnection attempts exhausted
  ), M = /* @__PURE__ */ H(null), x = null;
  function _() {
    var O;
    if ((O = t()) != null && O.hasAttribute("data-theme")) return;
    window.matchMedia("(prefers-color-scheme: dark)").matches && t() && t().setAttribute("data-theme", "dark");
  }
  function R(b) {
    const O = [
      "button:not([disabled])",
      "textarea:not([disabled])",
      "input:not([disabled])",
      '[tabindex]:not([tabindex="-1"])',
      "a[href]"
    ].join(", "), L = b.querySelectorAll(O);
    if (L.length === 0) return;
    const he = L[0], ht = L[L.length - 1];
    return requestAnimationFrame(() => he.focus()), { firstFocusable: he, lastFocusable: ht };
  }
  function Q(b) {
    if (b.key === "Escape" && i().isOpen) {
      b.preventDefault(), i().close(), N();
      return;
    }
    if (b.key === "Tab" && y(M)) {
      const O = [
        "button:not([disabled])",
        "textarea:not([disabled])",
        "input:not([disabled])",
        '[tabindex]:not([tabindex="-1"])',
        "a[href]"
      ].join(", "), L = y(M).querySelectorAll(O);
      if (L.length === 0) return;
      const he = L[0], ht = L[L.length - 1];
      b.shiftKey && document.activeElement === he ? (b.preventDefault(), ht.focus()) : !b.shiftKey && document.activeElement === ht && (b.preventDefault(), he.focus());
    }
  }
  function A() {
    x = document.activeElement;
  }
  function N() {
    x && typeof x.focus == "function" && requestAnimationFrame(() => x == null ? void 0 : x.focus()), x = null;
  }
  function le() {
    y(M) && R(y(M));
  }
  ta(async () => {
    try {
      a = new au(t()), f = ia(a.getAll()), o = new Or(), l = new qf(a, o), c = new uu(a, o), d = new Uf(s(), i(), f), t() && r().loadFromAttributes(t()), B(), _(), f.log("ChatWidget", "Attaching WebSocket listeners"), c.on("message", Pe), c.on("stateChange", (O) => {
        f.log("ChatWidget", "WebSocket state changed", {
          oldState: y(m),
          newState: O,
          timestamp: Date.now()
        }), q(m, O, !0);
      }), c.on("error", (O) => {
        f.error("ChatWidget", "WebSocket error event", O), v = O.error, s().setError(O.error);
      }), c.on("connectionFailed", (O) => {
        f.error("ChatWidget", "WebSocket connection failed after max attempts", O), q(T, !0), v = O.error, s().setError(O.error);
      }), f.log("ChatWidget", "WebSocket listeners attached successfully"), i().isOpen && await ee();
      const b = t();
      b != null && b.setOnOpenChangeCallback && b.setOnOpenChangeCallback((O) => {
        ln(O);
      }), f.log("ChatWidget", "Services initialized successfully");
    } catch (b) {
      f.error("ChatWidget", "Initialization failed", b), v = b instanceof Error ? b.message : "Failed to initialize chat";
    }
  }), Zi(() => {
    const b = i().isOpen;
    if (t()) {
      const O = t().hasAttribute("open");
      b && !O ? t().setAttribute("open", "") : !b && O && t().removeAttribute("open");
    }
  }), $d(() => {
    const b = l == null ? void 0 : l.getSessionId();
    b && o.markSessionInactive(b), c == null || c.disconnect(), d == null || d.cleanup();
  });
  async function ee() {
    var b;
    if (!(p || k)) {
      k = !0;
      try {
        if (i().setLoading(!0), await l.resumeSession()) {
          const L = l.getSessionId();
          L && (await c.connect(L), setTimeout(
            () => {
              f.log("ChatWidget", "Testing WebSocket connection after session resumption..."), c.testConnection();
            },
            ye.CONNECTION_DELAY
          ));
        } else {
          const L = await l.initialize();
          (b = L.assistant_info) != null && b.assistant_name && r().setBackendTitle(L.assistant_info.assistant_name), await c.connect(L.session_id), setTimeout(
            () => {
              f.log("ChatWidget", "Testing WebSocket connection after initialization..."), c.testConnection();
            },
            ye.CONNECTION_DELAY
          ), L.settings && te(L.settings);
        }
        p = !0;
      } catch (O) {
        v = O instanceof Error ? O.message : "Failed to initialize", s().setError(v);
      } finally {
        i().setLoading(!1), k = !1;
      }
    }
  }
  function B() {
    const b = a.getAll();
    requestAnimationFrame(() => {
      if (t() && (t().setAttribute("data-theme", b.theme || "modern"), b.primary_color || b.accent_color)) {
        const O = b.accent_color || b.primary_color;
        if (O) {
          const L = na(O, "#6b46c1");
          t().style.setProperty("--widget-primary", L), t().style.setProperty("--widget-primary-hover", dt(L, -20)), t().style.setProperty("--widget-primary-light", dt(L, 20)), t().style.setProperty("--widget-primary-dark", dt(L, -30)), t().style.setProperty("--widget-gradient", `linear-gradient(135deg, ${L} 0%, ${dt(L, 20)} 100%)`), t().style.setProperty("--widget-gradient-hover", `linear-gradient(135deg, ${dt(L, -20)} 0%, ${L} 100%)`);
        }
      }
    });
  }
  function te(b) {
    requestAnimationFrame(() => {
      t() && (b.theme && typeof b.theme == "string" && t().setAttribute("data-theme", b.theme), b.primary_color && typeof b.primary_color == "string" && t().style.setProperty("--widget-primary", b.primary_color));
    });
  }
  function Pe(b) {
    d.handleMessage(b);
  }
  async function Ot(b) {
    const O = h.getCurrent();
    f.log("ChatWidget", "handleSendMessage called with content", {
      correlationId: O,
      content: b,
      length: (b == null ? void 0 : b.length) || 0,
      trimmed: (b == null ? void 0 : b.trim()) || "",
      type: typeof b
    });
    const L = s().addMessage(b, "user");
    if (d.resetForNewMessage(), f.log("ChatWidget", "Message added to store", {
      correlationId: O,
      messageId: L.id,
      content: L.content,
      length: L.content.length
    }), p || (f.log("ChatWidget", "Widget not initialized, initializing...", { correlationId: O }), await ee()), f.log("ChatWidget", "Connection state", {
      correlationId: O,
      connectionState: y(m),
      isConnected: y(m) === oe.CONNECTED,
      routingTo: y(m) === oe.CONNECTED ? "WebSocket" : "HTTP API"
    }), y(m) === oe.CONNECTED) {
      f.log("ChatWidget", "Sending via WebSocket", { correlationId: O, content: b });
      try {
        d.setTypingWithTimeout(), c.send(b), s().updateMessageStatus(L.id, "sent"), f.log("ChatWidget", "User message marked as sent", { messageId: L.id });
      } catch (he) {
        f.error("ChatWidget", "WebSocket send error", he), s().updateMessageStatus(L.id, "failed"), s().setError("Failed to send message. Please try again."), s().setTyping(!1);
        return;
      }
    } else
      try {
        f.log("ChatWidget", "Sending via HTTP API", { correlationId: O, content: b }), d.setTypingWithTimeout();
        const he = await l.sendMessage(b);
        f.log("ChatWidget", "HTTP API response received", {
          correlationId: O,
          response: he.response,
          sessionId: he.session_id
        }), s().addMessage(he.response, "assistant"), s().setTyping(!1), i().isOpen || i().markUnread();
      } catch (he) {
        f.error("ChatWidget", "HTTP API error", he), v = "Failed to send message. Please try again.", s().setError(v), s().updateMessageStatus(L.id, "failed"), s().setTyping(!1);
      }
  }
  async function ln(b) {
    const O = i().isOpen;
    O !== b && (f.log("ChatWidget", "Setting open state", { from: O, to: b }), b && !O && !x && A(), b ? i().open() : i().close(), await new Promise((L) => setTimeout(L, 0)), b && !p && r() && await ee(), b ? requestAnimationFrame(() => le()) : N());
  }
  async function zn() {
    await ln(!i().isOpen);
  }
  function qn() {
    s().clearMessages(), s().setError(null), v = null;
  }
  function cn() {
    f.log("ChatWidget", "Manual retry connection requested"), q(T, !1), v = null, s().setError(null), c == null || c.retryConnection();
  }
  const Ie = /* @__PURE__ */ we(() => i().isOpen), dn = /* @__PURE__ */ we(() => i().isLoading), de = /* @__PURE__ */ we(() => {
    var b;
    return ((b = r()) == null ? void 0 : b.position) || "bottom-right";
  });
  var ms = {
    get hostElement() {
      return t();
    },
    set hostElement(b) {
      t(b), G();
    },
    get ui() {
      return i();
    },
    set ui(b = Ii) {
      i(b), G();
    },
    get chat() {
      return s();
    },
    set chat(b = sn) {
      s(b), G();
    },
    get config() {
      return r();
    },
    set config(b = Mt) {
      r(b), G();
    }
  }, re = Vf(), Ri = se(re);
  {
    var ae = (b) => {
      xl(b, {
        onclick: zn,
        get ui() {
          return i();
        }
      });
    };
    Se(Ri, (b) => {
      y(Ie) || b(ae);
    });
  }
  var un = ce(Ri, 2);
  {
    var Li = (b) => {
      var O = jf(), L = ce(Xi(O), 2);
      L.__keydown = Q;
      var he = se(L);
      Il(he, {
        onclose: () => {
          i().close(), N();
        },
        get connectionState() {
          return y(m);
        },
        get connectionFailed() {
          return y(T);
        },
        get ui() {
          return i();
        },
        get config() {
          return r();
        }
      });
      var ht = ce(he, 2);
      Yl(ht, {
        onsend: Ot,
        get connectionState() {
          return y(m);
        },
        get chat() {
          return s();
        },
        get config() {
          return r();
        }
      });
      var Dt = ce(ht, 2);
      {
        let me = /* @__PURE__ */ we(() => s().error !== null || y(dn)), $e = /* @__PURE__ */ we(() => s().messages.length === 0);
        Ql(Dt, {
          onsend: Ot,
          get disabled() {
            return y(me);
          },
          get showBrandBanner() {
            return y($e);
          },
          get connectionState() {
            return y(m);
          },
          get chat() {
            return s();
          },
          get config() {
            return r();
          }
        });
      }
      var Un = ce(Dt, 2);
      {
        var Nt = (me) => {
          var $e = Wf(), Fn = se($e);
          {
            var vs = (Xt) => {
              var Pt = Ff(), $t = ce(Xi(Pt), 2);
              $t.__click = cn, j(Xt, Pt);
            }, bs = (Xt) => {
              var Pt = Hf(), $t = ce(Xi(Pt), 2);
              $t.__click = qn, j(Xt, Pt);
            };
            Se(Fn, (Xt) => {
              y(T) ? Xt(vs) : Xt(bs, !1);
            });
          }
          ie($e), j(me, $e);
        };
        Se(Un, (me) => {
          s().error && me(Nt);
        });
      }
      ie(L), ea(L, (me) => q(M, me), () => y(M));
      var Oi = ce(L, 2);
      {
        var Di = (me) => {
          var $e = Bf();
          $e.__click = () => i().close(), za(3, $e, () => Fd, () => ({ duration: 200 })), j(me, $e);
        };
        Se(Oi, (me) => {
          y(Ie) && me(Di);
        });
      }
      za(3, L, () => Hd, () => ({ y: 20, duration: 300 })), j(b, O);
    };
    Se(un, (b) => {
      y(Ie) && b(Li);
    });
  }
  return ie(re), it(() => {
    ft(re, "data-position", y(de)), ft(re, "data-theme", r().theme);
  }), j(n, re), Qt(ms);
}
gs(["keydown", "click"]);
on(Xl, { hostElement: {}, ui: {}, chat: {}, config: {} }, [], [], !0);
const ua = {
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
}, qr = {
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
function Yf(n = ua) {
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
function Qf(n = ua) {
  return Yf(n);
}
const Zl = {
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
}, ro = Zl, ao = {
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
}, Xf = {
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
}, Zf = {
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
}, Kf = {
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
}, Jf = {
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
function eg(n) {
  return {
    "bot-brewers": qr,
    modern: Zl,
    professional: ro,
    corporate: ro,
    // Alias for backward compatibility
    friendly: ao,
    playful: ao,
    // Alias
    minimal: Xf,
    dark: Zf,
    elegant: Kf,
    bold: Jf,
    generic: ua,
    default: qr
  }[n.toLowerCase()] || null;
}
class oo extends HTMLElement {
  constructor() {
    super(), this._app = null, this._currentTheme = "bot-brewers", this._onOpenChangeCallback = null, this._pendingOpenState = null, this._shadowRoot = this.attachShadow({ mode: "open" }), this._uiStore = Wd(), this._chatStore = Bd(), this._configStore = Gd();
  }
  // Define which attributes we should observe for changes
  static get observedAttributes() {
    return ["theme", "data-theme", "accent-color", "position", "title", "client-id", "initial-message", "quick-questions", "open"];
  }
  async connectedCallback() {
    var s, r;
    const e = this.getAttribute("client-id"), t = window, i = ((s = t.AIChat) == null ? void 0 : s.clientId) || ((r = t.ChatWidget) == null ? void 0 : r.clientId);
    if (!e && !i) {
      Z.error("ChatWidget", 'Configuration missing. Please set client-id attribute or window.AIChat = { clientId: "your_client_id" }');
      return;
    }
    this.mountApp();
  }
  disconnectedCallback() {
    this._app && (Cr(this._app), this._app = null);
  }
  attributeChangedCallback(e, t, i) {
    if (t !== i) {
      if ((e === "theme" || e === "data-theme") && i && (this._currentTheme = i, this._configStore.updateConfig({ theme: i }, "user"), this.updateStyles()), e === "accent-color" && i && this.updateAccentColor(i), e === "client-id" && i && this._app && (Z.log("ChatWidget", `Client ID changed from ${t} to ${i}, remounting widget`), Cr(this._app), this._app = null, this.mountApp()), e === "title" && i && this._configStore.setUserTitle(i), e === "initial-message" && this._configStore.updateConfig({ initialMessage: i || void 0 }, "user"), e === "quick-questions")
        if (i)
          try {
            const s = JSON.parse(i);
            Array.isArray(s) ? this._configStore.setQuickQuestions(s) : Z.warn("ChatWidget", "quick-questions must be an array, using defaults");
          } catch {
            Z.warn("ChatWidget", "Invalid quick-questions JSON, using defaults");
          }
        else
          this._configStore.setQuickQuestions(void 0);
      if (e === "open") {
        const s = i !== null;
        this._onOpenChangeCallback ? this._onOpenChangeCallback(s) : this._pendingOpenState = s;
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
    i.textContent = this.getStyles(), this._shadowRoot.innerHTML = "", this._shadowRoot.appendChild(i), this._shadowRoot.appendChild(t), this._app = Kr(Xl, {
      target: t,
      props: {
        hostElement: this,
        ui: this._uiStore,
        chat: this._chatStore,
        config: this._configStore
      }
    });
  }
  getStyles() {
    const e = this.getAttribute("theme") || this.getAttribute("data-theme") || this._currentTheme;
    return this.getThemeStyles(e);
  }
  getThemeStyles(e) {
    const t = eg(e) || qr;
    return Qf(t);
  }
  updateStyles() {
    const e = this._shadowRoot.querySelector("style");
    e && (e.textContent = this.getStyles());
  }
  updateAccentColor(e) {
    const t = this._shadowRoot.querySelector(".widget-root");
    t && Promise.resolve().then(() => Vd).then(({ adjustColor: i }) => {
      t.style.setProperty("--widget-primary", e), t.style.setProperty("--widget-primary-hover", i(e, -20)), t.style.setProperty("--widget-primary-light", i(e, 20)), t.style.setProperty("--widget-primary-dark", i(e, -30));
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
customElements.get("assistant-widget") ? customElements.get("chat-widget") || customElements.define("chat-widget", oo) : customElements.define("assistant-widget", oo);
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", lo) : lo();
function lo() {
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
  oo as ChatWidgetElement
};
